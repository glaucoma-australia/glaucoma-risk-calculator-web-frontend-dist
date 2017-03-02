var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskQuizComponent } from './risk-quiz.component';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';
import { ModalModule, TypeaheadModule } from 'ng2-bootstrap';
var RiskQuizModule = (function () {
    function RiskQuizModule() {
    }
    return RiskQuizModule;
}());
RiskQuizModule = __decorate([
    NgModule({
        imports: [
            CommonModule, FormsModule, SelectModule,
            ModalModule.forRoot(), TypeaheadModule.forRoot()
        ],
        declarations: [RiskQuizComponent],
        exports: [RiskQuizComponent]
    })
], RiskQuizModule);
export { RiskQuizModule };
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/app/risk-quiz/risk-quiz.module.js.map