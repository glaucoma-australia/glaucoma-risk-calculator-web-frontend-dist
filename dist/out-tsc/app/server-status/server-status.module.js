var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerStatusService } from '../api/server-status.service';
import { ServerStatusComponent } from './server-status.component';
var ServerStatusModule = (function () {
    function ServerStatusModule() {
    }
    return ServerStatusModule;
}());
ServerStatusModule = __decorate([
    NgModule({
        imports: [CommonModule],
        providers: [ServerStatusService],
        declarations: [ServerStatusComponent],
        exports: [ServerStatusComponent]
    })
], ServerStatusModule);
export { ServerStatusModule };
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/app/server-status/server-status.module.js.map