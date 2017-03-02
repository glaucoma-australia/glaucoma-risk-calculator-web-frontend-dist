var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { ServerStatusService } from '../api/server-status.service';
var pkg_js = require('./../../../package.json').version;
var ServerStatusComponent = (function () {
    function ServerStatusComponent(serverStatusService) {
        this.serverStatusService = serverStatusService;
        this.serverStatus = {};
    }
    ServerStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverStatusService.get().then(function (serverStatus) { return _this.serverStatus = { version: pkg_js + " - API version: " + serverStatus.version }; }).catch(function (error) { return _this.serverStatus = { version: pkg_js + " - API server not available" }; });
    };
    return ServerStatusComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], ServerStatusComponent.prototype, "serverStatus", void 0);
ServerStatusComponent = __decorate([
    Component({
        selector: 'app-api-version',
        templateUrl: './server-status.component.html',
        styleUrls: ['./server-status.component.css']
    }),
    __metadata("design:paramtypes", [ServerStatusService])
], ServerStatusComponent);
export { ServerStatusComponent };
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/app/server-status/server-status.component.js.map