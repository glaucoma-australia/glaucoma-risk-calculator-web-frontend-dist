var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts.component';
import { AlertModule } from 'ng2-bootstrap';
var AlertsModule = (function () {
    function AlertsModule() {
    }
    return AlertsModule;
}());
AlertsModule = __decorate([
    NgModule({
        imports: [
            CommonModule, AlertModule.forRoot()
        ],
        declarations: [AlertsComponent],
        exports: [AlertsComponent]
    })
], AlertsModule);
export { AlertsModule };
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/alerts/alerts.module.js.map