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
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { AuthService } from '../api/auth/auth.service';
import { AlertsService } from '../alerts/alerts.service';
var NavbarComponent = (function () {
    function NavbarComponent(router, appService, authService, alertsService) {
        this.router = router;
        this.appService = appService;
        this.authService = authService;
        this.alertsService = alertsService;
    }
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.authService.del().subscribe(function (response) { return !_this.router.isActive('', true) && _this.router.navigate(['login-signup']).then(function (success) {
            return success ? console.info('state changed') : _this.alertsService.alerts.push({ msg: 'state didn\'t change', type: 'warning' });
        }, function (err) { return _this.alertsService.alerts.push({ msg: err, type: 'danger' }); }); }, console.error);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    }),
    __metadata("design:paramtypes", [Router, AppService,
        AuthService, AlertsService])
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/app/navbar/navbar.component.js.map