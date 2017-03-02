var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/filter';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth/auth.service';
import { AlertsService } from '../alerts/alerts.service';
import { subHandleError } from '../api/service-utils';
var LoginSignupComponent = (function () {
    function LoginSignupComponent(router, authService, alertsService) {
        this.router = router;
        this.authService = authService;
        this.alertsService = alertsService;
    }
    LoginSignupComponent.prototype.ngOnInit = function () {
        this.authService.isLoggedIn() && this.gotoDash();
    };
    LoginSignupComponent.prototype.onSubmit = function (user) {
        var _this = this;
        var handleUser = function (user) {
            if (!_this.authService.isLoggedIn()) {
                _this.alertsService.alerts.push({ msg: JSON.stringify(user), type: 'warning' });
                return;
            }
            console.info("Logged in with " + _this.authService.accessToken);
            _this.gotoDash();
        };
        this.authService.post(user)
            .subscribe(handleUser, function (error) { return console.error('error =', error) || error.status === 404 && error._parsed.error_message === 'User not found' ?
            _this.authService.create_user(user).subscribe(handleUser, subHandleError.bind(_this))
            : subHandleError.bind(_this); });
    };
    LoginSignupComponent.prototype.gotoDash = function () {
        var _this = this;
        this.router.navigate(['/admin/dashboard']).then(function (success) {
            return success ? console.info('state changed') : _this.alertsService.alerts.push({ msg: 'state didn\'t change', type: 'warning' });
        }, function (err) { return _this.alertsService.alerts.push({ msg: err, type: 'danger' }); });
    };
    return LoginSignupComponent;
}());
__decorate([
    ViewChild('formRef'),
    __metadata("design:type", Object)
], LoginSignupComponent.prototype, "form", void 0);
LoginSignupComponent = __decorate([
    Component({
        selector: 'app-login-signup',
        templateUrl: './login-signup.component.html',
        styleUrls: ['./login-signup.component.css']
    }),
    __metadata("design:paramtypes", [Router, AuthService, AlertsService])
], LoginSignupComponent);
export { LoginSignupComponent };
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/app/login-signup/login-signup.component.js.map