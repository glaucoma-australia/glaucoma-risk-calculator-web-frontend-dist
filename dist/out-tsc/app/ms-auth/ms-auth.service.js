var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthService } from '../api/auth/auth.service';
import { handleError } from '../api/service-utils';
export function parseQueryString(url) {
    var params = {};
    var queryString = url.substring(1);
    var regex = /([^&=]+)=([^&]*)/g;
    var m;
    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}
var MsAuthService = MsAuthService_1 = (function () {
    function MsAuthService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.email_conf = {};
        this.params = parseQueryString(location.hash);
    }
    Object.defineProperty(MsAuthService.prototype, "client_id", {
        get: function () {
            if (!this._client_id)
                throw TypeError('client_id must be defined. Did you run MsAuthService.setup?');
            return this._client_id;
        },
        set: function (val) {
            this._client_id = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MsAuthService.prototype, "tenant_id", {
        get: function () {
            if (!this._tenant_id)
                throw TypeError('tenant_id must be defined. Did you run MsAuthService.setup?');
            return this._tenant_id;
        },
        set: function (val) {
            this._tenant_id = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MsAuthService.prototype, "access_token", {
        get: function () {
            if (!this._access_token)
                this._access_token = localStorage.getItem('ms-access-token');
            return this._access_token;
        },
        set: function (val) {
            this._access_token = val;
            localStorage.setItem('ms-access-token', val);
        },
        enumerable: true,
        configurable: true
    });
    MsAuthService.prototype.setup = function (tenant_id, client_id) {
        this.tenant_id = tenant_id;
        this.client_id = client_id;
    };
    MsAuthService.prototype.login = function () {
        //check for id_token or access_token in url
        if (this.params["id_token"] != null)
            this.getAccessToken();
        else if (this.params["access_token"] != null)
            this.access_token = this.params["access_token"];
        //redirect to get id_token
        var params = new URLSearchParams();
        params.set('response_type', 'id_token');
        params.appendAll(this.genParams());
        window.location.href = "https://login.microsoftonline.com/" + this.tenant_id + "/oauth2/authorize?" + params;
    };
    MsAuthService.prototype.logout = function () {
        localStorage.removeItem('ms-access-token');
        this._access_token = null;
    };
    MsAuthService.genNonce = function () {
        var charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz'; //'-._~';
        var result = [];
        var g = window.crypto.getRandomValues(new Uint8Array(32));
        g.forEach(function (c) { return result.push(charset[c % charset.length]); });
        return result.join('');
    };
    MsAuthService.prototype.getAccessToken = function (state) {
        //redirect to get access_token
        var params = new URLSearchParams();
        params.set('response_type', 'token');
        params.appendAll(this.genParams(state));
        params.set('resource', 'https://graph.microsoft.com');
        params.set('prompt', 'none');
        window.location.href = "https://login.microsoftonline.com/" + this.tenant_id + "/oauth2/authorize?" + params;
    };
    MsAuthService.prototype.getHostOrigin = function () {
        return window.location.protocol + "//" + window.location.hostname + (window.location.port ?
            ':' + window.location.port : '');
    };
    MsAuthService.prototype.genParams = function (state) {
        var params = new URLSearchParams();
        params.set('client_id', this.client_id);
        params.set('redirect_uri', this.getHostOrigin());
        params.set('state', state || window.location.pathname); // redirect_uri doesn't work with angular for some reason?
        params.set('nonce', MsAuthService_1.genNonce());
        return params;
    };
    MsAuthService.prototype.sendEmail = function (mail) {
        var _this = this;
        var options = new RequestOptions({
            headers: new Headers({
                'Authorization': "Bearer " + this.access_token,
                'Content-Type': 'application/json'
            })
        });
        var body = {
            message: {
                subject: mail.subject,
                toRecipients: [{
                        emailAddress: {
                            address: mail.recipient
                        }
                    }],
                body: {
                    content: mail.content,
                    contentType: "html"
                }
            }
        };
        return this.http.post('https://graph.microsoft.com/v1.0/users/me/sendMail', body, options)
            .map(function (response) {
            if (response.status !== 202)
                Observable.throw(new Error("Expected response.status of 202 got " + response.status + ".\n           Body: " + response.text()));
            return response;
        })
            .catch(function (error) {
            var err = JSON.parse(error._body).error;
            if (err.message === 'Access token has expired.')
                _this.getAccessToken();
            return Observable.throw(err);
        });
    };
    MsAuthService.prototype.getConf = function () {
        var _this = this;
        var options = new RequestOptions({
            headers: new Headers({
                'X-Access-Token': this.authService.accessToken,
                'Content-Type': 'application/json'
            })
        });
        return this.http.get('/api/email_conf', options)
            .map(function (response) {
            if (response.status !== 200)
                return Observable.throw(new Error("Expected response.status of 200 got " + response.status + ".\n           Body: " + response.text()));
            _this.email_conf = response.json();
            return _this.email_conf;
        })
            .map(function (email_config) { return _this.setup(email_config.tenant_id, email_config.client_id); })
            .catch(handleError);
    };
    MsAuthService.prototype.insertConf = function (conf) {
        var _this = this;
        var options = new RequestOptions({
            headers: new Headers({
                'X-Access-Token': this.authService.accessToken,
                'Content-Type': 'application/json'
            })
        });
        return this.http.post('/api/email_conf', conf, options)
            .map(function (response) {
            if (response.status === 200 || response.status === 201)
                return response.json();
            return Observable.throw(new Error("Expected response.status of 201 got " + response.status + ".\n           Body: " + response.text()));
        })
            .catch(function (error) {
            if (error.message && error.error_message === 'Access token has expired.')
                _this.authService.redirOnResIfUnauth(error);
            return Observable.throw(error);
        });
    };
    return MsAuthService;
}());
MsAuthService = MsAuthService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, AuthService])
], MsAuthService);
export { MsAuthService };
var MsAuthService_1;
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/app/ms-auth/ms-auth.service.js.map