var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { AlertsModule } from '../alerts/alerts.module';
import { RiskQuizModule } from '../risk-quiz/risk-quiz.module';
import { homeRoutes } from './home.routes';
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule.forChild(homeRoutes), SidebarModule, AlertsModule, RiskQuizModule],
        declarations: [HomeComponent],
        exports: [HomeComponent]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/src/app/home/home.module.js.map