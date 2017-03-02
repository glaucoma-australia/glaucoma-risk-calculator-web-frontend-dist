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
import { MsAuthService } from './ms-auth.service';
import { EmailTplService } from '../api/email_tpl/email-tpl.service';
import { AlertsService } from '../alerts/alerts.service';
var MsAuthComponent = (function () {
    function MsAuthComponent(alertsService, msAuthService, emailTplService) {
        this.alertsService = alertsService;
        this.msAuthService = msAuthService;
        this.emailTplService = emailTplService;
        this.isCollapsed = true;
        this.mail_base = {};
    }
    MsAuthComponent.prototype.ngOnInit = function () {
        this.msAuthService.getConf().subscribe(console.info, console.error);
    };
    MsAuthComponent.prototype.login = function () {
        this.msAuthService.login();
    };
    MsAuthComponent.prototype.loggedIn = function () {
        return !!this.msAuthService.access_token;
    };
    MsAuthComponent.prototype.logout = function () {
        this.msAuthService.logout();
    };
    MsAuthComponent.prototype.sendTestEmail = function () {
        var _this = this;
        this.msAuthService.sendEmail({
            recipient: this.mail_base.recipient,
            subject: this.mail_base.subject,
            content: this.emailTplService.email_tpl.tpl
        }).subscribe(function (email) { return console.info(email) || _this.alertsService.add({
            type: 'info', msg: 'Sent email'
        }); }, console.error);
    };
    MsAuthComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    Object.defineProperty(MsAuthComponent.prototype, "client_id", {
        get: function () {
            return this.msAuthService.email_conf.client_id;
        },
        set: function (val) {
            this._client_id = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MsAuthComponent.prototype, "tenant_id", {
        get: function () {
            return this.msAuthService.email_conf.tenant_id;
        },
        set: function (val) {
            this._tenant_id = val;
        },
        enumerable: true,
        configurable: true
    });
    MsAuthComponent.prototype.updateAuth = function () {
        var _this = this;
        this.msAuthService.insertConf({
            client_id: this._client_id, tenant_id: this._tenant_id,
            access_token: this.msAuthService.access_token
        }).subscribe(function (auth) { return console.info(auth) || _this.alertsService.add({ type: 'info', msg: 'Updated auth' }); }, function (error) { return console.error(error); } //this.authService.redirOnResIfUnauth(error)
        );
    };
    return MsAuthComponent;
}());
MsAuthComponent = __decorate([
    Component({
        selector: 'app-ms-auth',
        templateUrl: './ms-auth.component.html',
        styleUrls: ['./ms-auth.component.css']
    }),
    __metadata("design:paramtypes", [AlertsService,
        MsAuthService,
        EmailTplService])
], MsAuthComponent);
export { MsAuthComponent };
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/app/ms-auth/ms-auth.component.js.map