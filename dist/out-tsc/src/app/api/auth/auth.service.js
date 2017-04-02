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
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { AlertsService } from '../../alerts/alerts.service';
import { handleError } from '../service-utils';
var AuthService = (function () {
    function AuthService(http, router, alertsService) {
        this.http = http;
        this.router = router;
        this.alertsService = alertsService;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    AuthService.prototype.isLoggedIn = function () {
        return !!this.accessToken;
    };
    AuthService.prototype.redirUnauth = function (redirect_uri) {
        var _this = this;
        if (this.isLoggedIn())
            return;
        this.redirect_uri = redirect_uri;
        this.router.navigate(['login-signup']).then(function (success) { return success ? console.info('state changed') : _this.alertsService.alerts.push({ msg: 'state didn\'t change', type: 'warning' }); }, function (err) { return _this.alertsService.alerts.push({ msg: err, type: 'danger' }); });
    };
    Object.defineProperty(AuthService.prototype, "accessToken", {
        get: function () {
            this._accessToken = this._accessToken ? this._accessToken : localStorage.getItem('access-token');
            return this._accessToken;
        },
        set: function (val) {
            this._accessToken = !!val ? val : this._accessToken;
            localStorage.setItem('access-token', this.accessToken);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.create_user = function (user) {
        var _this = this;
        var options = new RequestOptions({ headers: this.headers });
        return this.http.post('/api/user', JSON.stringify(user), options)
            .map(function (response) {
            _this.accessToken = response.headers.get('x-access-token');
            return response.json();
        })
            .catch(handleError);
    };
    AuthService.prototype.post = function (user) {
        var _this = this;
        var options = new RequestOptions({ headers: this.headers });
        return this.http.post('/api/auth', JSON.stringify(user), options)
            .map(function (response) {
            _this.accessToken = response.headers.get('x-access-token');
            return response.json();
        })
            .catch(handleError);
    };
    AuthService.prototype.getAll = function () {
        var options = new RequestOptions({ headers: new Headers({ 'X-Access-Token': this.accessToken }) });
        return this.http.get('/api/users', options)
            .map(function (response) { return response.json(); })
            .catch(handleError);
    };
    AuthService.prototype.del = function (redirect_uri) {
        var _this = this;
        this.redirect_uri = redirect_uri;
        var logout = function () {
            _this.accessToken = null;
            delete _this._accessToken;
            localStorage.removeItem('access-token');
        };
        this.headers.set('x-access-token', this.accessToken);
        if (!this.headers.get('x-access-token'))
            return Observable.throw('No access token');
        var options = new RequestOptions({ headers: this.headers });
        return this.http.delete('/api/auth', options)
            .map(function (response) {
            if (response.status === 204) {
                logout();
            }
            else {
                Observable.throw(new Error("Expected response.status of 204 got " + response.status + ".\n           Body: " + response.text()));
            }
            return response;
        })
            .catch(function (error) {
            logout();
            console.error(error.json());
            return handleError(error);
        });
    };
    AuthService.prototype.redirOnResIfUnauth = function (error) {
        var _this = this;
        return error.error_message && error.error_message === "Nothing associated with that access token" && this.del(window.location.hash).subscribe(function (_) { return _this.router.navigateByUrl('/login-signup'); }, console.error);
    };
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Router,
        AlertsService])
], AuthService);
export { AuthService };
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/api/auth/auth.service.js.map