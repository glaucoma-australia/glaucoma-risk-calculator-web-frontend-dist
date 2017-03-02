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
import { AlertsService } from './alerts.service';
import { AlertComponent } from 'ng2-bootstrap';
var AlertsComponent = (function () {
    function AlertsComponent(alertsService) {
        this.alertsService = alertsService;
        this.type = 'warning';
    }
    AlertsComponent.prototype.ngOnInit = function () {
        this.alerts = this.alertsService.alerts;
    };
    AlertsComponent.prototype.addAlert = function (alert) {
        this.alertsService.add(alert);
    };
    AlertsComponent.prototype.closeAlert = function (i) {
        this.alertsService.close(i);
    };
    return AlertsComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], AlertsComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AlertsComponent.prototype, "dismissible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AlertsComponent.prototype, "dismissOnTimeout", void 0);
AlertsComponent = __decorate([
    Component({
        selector: 'app-alerts',
        templateUrl: './alerts.component.html',
        providers: [AlertComponent],
        styleUrls: ['./alerts.component.css']
    }),
    __metadata("design:paramtypes", [AlertsService])
], AlertsComponent);
export { AlertsComponent };
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/src/app/alerts/alerts.component.js.map