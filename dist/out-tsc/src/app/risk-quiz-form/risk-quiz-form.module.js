var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GaugeModule } from 'ng2-kw-gauge';
import { RiskStatsService } from '../api/risk_stats/risk_stats/risk-stats.service';
import { RiskQuizFormComponent } from './risk-quiz-form.component';
import { RiskQuizFormSubmittedComponent } from '../risk-quiz-form-submitted/risk-quiz-form-submitted.component';
var RiskQuizFormModule = (function () {
    function RiskQuizFormModule() {
    }
    return RiskQuizFormModule;
}());
RiskQuizFormModule = __decorate([
    NgModule({
        imports: [
            CommonModule, ReactiveFormsModule, GaugeModule
        ],
        providers: [RiskStatsService],
        declarations: [RiskQuizFormComponent, RiskQuizFormSubmittedComponent],
        exports: [RiskQuizFormComponent]
    })
], RiskQuizFormModule);
export { RiskQuizFormModule };
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/risk-quiz-form/risk-quiz-form.module.js.map