var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/observable/of';
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { AlertsService } from '../alerts/alerts.service';
var RiskQuizComponent = (function () {
    function RiskQuizComponent(alertsService) {
        this.alertsService = alertsService;
        this.submitted = false;
        this.model = {};
        this.ocular_diseases = [
            'trauma', 'inflammation', 'pseudoexfoliation', 'pigment dispersion syndrome'
        ];
        this.ocular_surgeries = [
            'retinal detachment', 'corneal transplant', 'congenital cataracts'
        ];
    }
    RiskQuizComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    RiskQuizComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    RiskQuizComponent.prototype.ngOnInit = function () {
    };
    RiskQuizComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.childModal.show();
    };
    RiskQuizComponent.prototype.ocular_diseases_selected = function (values) {
        this.model.ocular_disease_history = values.map(function (v) { return v.id; });
    };
    RiskQuizComponent.prototype.email = function () {
        this.childModal.hide();
        this.alertsService.add({ msg: 'Your risk is being calculated, and will be emailed', type: 'info' });
    };
    return RiskQuizComponent;
}());
__decorate([
    ViewChild('childModal'),
    __metadata("design:type", ModalDirective)
], RiskQuizComponent.prototype, "childModal", void 0);
RiskQuizComponent = __decorate([
    Component({
        selector: 'app-risk-quiz',
        templateUrl: './risk-quiz.component.html',
        styleUrls: ['./risk-quiz.component.css']
    }),
    __metadata("design:paramtypes", [AlertsService])
], RiskQuizComponent);
export { RiskQuizComponent };
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/src/app/risk-quiz/risk-quiz.component.js.map