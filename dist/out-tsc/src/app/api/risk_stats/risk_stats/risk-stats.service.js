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
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { AssertionError } from 'assert';
import { handleError } from '../../service-utils';
import { AuthService } from '../../auth/auth.service';
var RiskStatsService = (function () {
    function RiskStatsService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    RiskStatsService.prototype.setReqOptions = function () {
        this.req_options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Access-Token': this.authService.accessToken
            })
        });
    };
    RiskStatsService.prototype.create = function (risk_stats) {
        this.setReqOptions();
        return this.http.post('/api/risk_stats', JSON.stringify(risk_stats), this.req_options)
            .map(function (r) { return r.json(); })
            .catch(handleError);
    };
    RiskStatsService.prototype.read = function (createdAt) {
        return this.http.get("/api/risk_stats/" + createdAt, new RequestOptions({
            headers: new Headers({
                'Accept': 'application/json'
            })
        }))
            .map(function (r) { return r.json(); })
            .catch(handleError);
    };
    RiskStatsService.prototype.update = function (prevRecord, newRecord) {
        this.setReqOptions();
        return this.http.put("/api/risk_stats/" + prevRecord.createdAt, JSON.stringify(newRecord), this.req_options)
            .map(function (r) { return r.json(); })
            .catch(handleError);
    };
    RiskStatsService.prototype.destroy = function (createdAt) {
        this.setReqOptions();
        return this.http.delete("/api/risk_stats/" + createdAt, this.req_options)
            .map(function (r) { return r.status === 204 ? Object.freeze({}) : Observable.throw(new AssertionError("Expected status of 204, got " + r.status)); })
            .catch(handleError);
    };
    return RiskStatsService;
}());
RiskStatsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthService, Http])
], RiskStatsService);
export { RiskStatsService };
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/api/risk_stats/risk_stats/risk-stats.service.js.map