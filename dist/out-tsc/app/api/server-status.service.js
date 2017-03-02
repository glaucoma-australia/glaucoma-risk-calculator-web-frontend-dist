var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
var ServerStatusService = (function () {
    function ServerStatusService(http) {
        this.http = http;
    }
    ServerStatusService.prototype.get = function () {
        return this.http.get('/api')
            .toPromise()
            .then(function (r) { return r.json(); })
            .catch(console.error);
    };
    return ServerStatusService;
}());
ServerStatusService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ServerStatusService);
export { ServerStatusService };
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/app/api/server-status.service.js.map