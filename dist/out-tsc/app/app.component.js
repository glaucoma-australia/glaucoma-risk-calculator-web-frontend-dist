var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AuthService } from './api/auth/auth.service';
import { AppService } from './app.service';
import { MsAuthService, parseQueryString } from './ms-auth/ms-auth.service';
import { Router } from '@angular/router';
var AppComponent = (function () {
    function AppComponent(authService, appService, msAuthService, router) {
        this.authService = authService;
        this.appService = appService;
        this.msAuthService = msAuthService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var qs = parseQueryString(location.hash);
        if (Object.keys(qs).length > 0) {
            this.msAuthService.getConf().subscribe(function (conf) {
                console.info(conf);
                !!qs.id_token && _this.msAuthService.getAccessToken(qs.state);
                _this.msAuthService.access_token = qs.access_token;
                !!qs.state && _this.router.navigateByUrl(decodeURIComponent(qs.state));
            }, console.error);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app',
        styleUrls: ['app.component.css'],
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [AuthService,
        AppService,
        MsAuthService,
        Router])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/app/app.component.js.map