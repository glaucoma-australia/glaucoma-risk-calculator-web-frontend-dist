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
import { FormBuilder, Validators } from '@angular/forms';
import * as math from 'mathjs';
import { ethnicities_pretty, list_ethnicities } from 'glaucoma-risk-quiz-engine';
import { RiskQuiz } from '../risk-quiz/risk-quiz.model';
import { RiskStatsService } from '../api/risk_stats/risk_stats/risk-stats.service';
math.config({
    number: 'BigNumber',
    // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 20 // Number of significant digits for BigNumbers
});
var RiskQuizFormComponent = (function () {
    function RiskQuizFormComponent(fb, riskStatsService) {
        this.fb = fb;
        this.riskStatsService = riskStatsService;
        this.riskQuiz = new RiskQuiz(null, null, null);
        this.submitted = false;
        // TODO: Workaround until NgForm has a reset method (#6822)
        this.active = true;
        this.formErrors = {
            gender: '',
            age: '',
            ethnicity: ''
        };
        this.validationMessages = {
            gender: {
                'required': 'Gender is required.',
            },
            age: {
                'required': 'Age is required.'
            },
            ethnicity: {
                'required': 'Ethnicity is required.'
            }
        };
    }
    RiskQuizFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.riskStatsService.read('latest').subscribe(function (content) {
            _this.riskStatsService.risk_stats = content.risk_json;
            _this.all_ethnicities = list_ethnicities(_this.riskStatsService.risk_stats);
            _this.ethnicities = ethnicities_pretty(_this.all_ethnicities);
        }, console.error);
    };
    RiskQuizFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    RiskQuizFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.riskQuiz = this.riskForm.value;
    };
    RiskQuizFormComponent.prototype.addRisk = function () {
        var _this = this;
        this.riskQuiz = new RiskQuiz(null, null, null);
        this.buildForm();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    RiskQuizFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.riskForm = this.fb.group({
            'age': [this.riskQuiz.age, [
                    Validators.required
                ]
            ],
            'gender': [this.riskQuiz.gender, [
                    Validators.required
                ]],
            'ethnicity': [this.riskQuiz.ethnicity, Validators.required]
        });
        this.riskForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    RiskQuizFormComponent.prototype.onValueChanged = function (data) {
        if (!this.riskForm) {
            return;
        }
        var form = this.riskForm;
        var hasError = false;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
                hasError = true;
            }
        }
        //if (!hasError) this.riskQuiz.calcRisk(risk_json)
    };
    return RiskQuizFormComponent;
}());
RiskQuizFormComponent = __decorate([
    Component({
        selector: 'app-risk-quiz-form',
        templateUrl: './risk-quiz-form.component.html'
    }),
    __metadata("design:paramtypes", [FormBuilder, RiskStatsService])
], RiskQuizFormComponent);
export { RiskQuizFormComponent };
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/risk-quiz-form/risk-quiz-form.component.js.map