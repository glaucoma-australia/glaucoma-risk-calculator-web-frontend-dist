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
import { Observable } from 'rxjs';
import { handleError } from '../service-utils';
import { AssertionError } from 'assert';
import { AuthService } from '../auth/auth.service';
var EmailTplService = (function () {
    function EmailTplService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    EmailTplService.prototype.hasTpl = function () {
        return !!this.email_tpl && Object.keys(this.email_tpl).length > 0 && !!this.email_tpl.tpl;
    };
    EmailTplService.prototype.setTpl = function (tpl) {
        this.hasTpl() ? this.email_tpl.tpl = tpl :
            this.email_tpl = { tpl: tpl, createdAt: new Date().toISOString() };
    };
    EmailTplService.prototype.setReqOptions = function () {
        this.req_options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Access-Token': this.authService.accessToken
            })
        });
    };
    EmailTplService.prototype.create = function (email_tpl) {
        this.setReqOptions();
        return this.http.post('/api/email_tpl', JSON.stringify(email_tpl), this.req_options)
            .map(function (r) { return r.json(); })
            .catch(handleError);
    };
    EmailTplService.prototype.read = function (createdAt) {
        this.setReqOptions();
        return this.http.get("/api/email_tpl/" + createdAt, this.req_options)
            .map(function (r) { return r.json(); })
            .catch(handleError);
    };
    EmailTplService.prototype.update = function (prevRecord, newRecord) {
        this.setReqOptions();
        return this.http.put("/api/email_tpl/" + prevRecord.createdAt, JSON.stringify(newRecord), this.req_options)
            .map(function (r) { return r.json(); })
            .catch(handleError);
    };
    EmailTplService.prototype.destroy = function (createdAt) {
        this.setReqOptions();
        return this.http.delete("/api/email_tpl/" + createdAt, this.req_options)
            .map(function (r) { return r.status === 204 ? Object.freeze({}) : Observable.throw(new AssertionError("Expected status of 204, got " + r.status)); })
            .catch(handleError);
    };
    return EmailTplService;
}());
EmailTplService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthService, Http])
], EmailTplService);
export { EmailTplService };
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/api/email_tpl/email-tpl.service.js.map