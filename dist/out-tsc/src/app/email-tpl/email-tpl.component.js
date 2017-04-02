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
import { EmailTplService } from '../api/email_tpl/email-tpl.service';
import { AlertsService } from '../alerts/alerts.service';
var EmailTplComponent = (function () {
    function EmailTplComponent(alertsService, emailTplService) {
        this.alertsService = alertsService;
        this.emailTplService = emailTplService;
    }
    EmailTplComponent.prototype.keyupHandlerFunction = function (content) {
        this.emailTplService.setTpl(content);
    };
    EmailTplComponent.prototype.ngOnInit = function () {
        this.keyupHandlerFunction(this.emailTplService.hasTpl() ? this.emailTplService.email_tpl.tpl : '');
    };
    EmailTplComponent.prototype.tplCreate = function (new_email_tpl) {
        this.emailTplService.create(new_email_tpl).subscribe(this.handleEmailTpl, this.handleError);
    };
    EmailTplComponent.prototype.tplRead = function (createdAt) {
        var _this = this;
        this.emailTplService.read(createdAt).subscribe(function (email_tpl) {
            return _this.emailTplService.email_tpl = email_tpl;
        }, function (error) {
            return _this.alertsService.add({ type: 'warning', msg: error });
        });
    };
    EmailTplComponent.prototype.tplUpdate = function (new_email_tpl) {
        new_email_tpl.createdAt = this.emailTplService.email_tpl.createdAt;
        this.emailTplService.update(Object.assign({ updatedAt: new Date() }, this.emailTplService.email_tpl), new_email_tpl).subscribe(this.handleEmailTpl, this.handleError);
    };
    EmailTplComponent.prototype.tplDestroy = function (createdAt) {
        this.emailTplService.destroy(createdAt).subscribe(function (_) { return _; }, this.handleError);
    };
    EmailTplComponent.prototype.handleEmailTpl = function (email_tpl) {
        this.emailTplService.email_tpl = email_tpl;
    };
    EmailTplComponent.prototype.handleError = function (error) {
        this.alertsService.add({ type: 'warning', msg: error });
    };
    EmailTplComponent.prototype.save = function () {
        (this.emailTplService.hasTpl() ?
            this.tplUpdate(Object.assign({ tpl: this.emailTplService.email_tpl.tpl }, this.emailTplService.email_tpl))
            : this.tplCreate({
                tpl: this.emailTplService.email_tpl.tpl,
                createdAt: new Date().toISOString()
            })) || this.alertsService.add({ type: 'info', msg: 'Updated email template' });
    };
    return EmailTplComponent;
}());
EmailTplComponent = __decorate([
    Component({
        selector: 'app-email-tpl',
        templateUrl: './email-tpl.component.html',
        styleUrls: ['./email-tpl.component.css']
    }),
    __metadata("design:paramtypes", [AlertsService,
        EmailTplService])
], EmailTplComponent);
export { EmailTplComponent };
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/email-tpl/email-tpl.component.js.map