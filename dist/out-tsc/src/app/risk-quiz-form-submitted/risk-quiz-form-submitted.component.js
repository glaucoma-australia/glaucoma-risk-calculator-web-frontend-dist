var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { s_col_to_s } from 'glaucoma-risk-quiz-engine';
import { RiskStatsService } from 'app/api/risk_stats/risk_stats/risk-stats.service';
import { RiskQuiz } from '../risk-quiz/risk-quiz.model';
import { GaugeLabel, GaugeSegment } from 'ng2-kw-gauge';
var RiskQuizFormSubmittedComponent = (function () {
    function RiskQuizFormSubmittedComponent(riskStatsService) {
        this.riskStatsService = riskStatsService;
        this.most_at_risk = '';
        this.submitted = false;
        this.colors = {
            indigo: '#14143e',
            pink: '#fd1c49',
            orange: '#ff6e00',
            yellow: '#f0c800',
            mint: '#00efab',
            cyan: '#05d1ff',
            purple: '#841386',
            white: '#fff'
        };
        this.progressGraph = {
            bgRadius: 60,
            bgColor: this.colors.indigo,
            rounded: false,
            reverse: false,
            animationSecs: 1,
            labels: [],
            segments: []
        };
        this.submittedChange = new EventEmitter();
        GaugeSegment;
        GaugeLabel;
    }
    RiskQuizFormSubmittedComponent.prototype.onClick = function () {
        this.submittedChange.emit(false);
    };
    RiskQuizFormSubmittedComponent.prototype.ngOnInit = function () {
    };
    RiskQuizFormSubmittedComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!(this.riskQuiz instanceof RiskQuiz))
            this.riskQuiz = new RiskQuiz(this.riskQuiz['age'], this.riskQuiz['gender'], this.riskQuiz['ethnicity']);
        this.riskStatsService.read('latest').subscribe(function (content) {
            _this.riskStatsService.risk_stats = content.risk_json;
            _this.riskQuiz.calcRisk(_this.riskStatsService.risk_stats);
            _this.riskStatsService.risk = _this.riskQuiz.risk;
            _this.riskQuiz.ref = _this.riskStatsService.risk_stats.studies[s_col_to_s(_this.riskQuiz.ethnicity)].ref;
            //this.riskQuiz.prepareRef();
            var risk_pc = math.multiply(math.divide(_this.riskQuiz.risks.lastIndexOf(_this.riskQuiz.risk) + 1, _this.riskQuiz.risks.length), 100);
            _this.most_at_risk =
                _this.riskQuiz.risks.lastIndexOf(_this.riskQuiz.risk) + 1 + " / " + _this.riskQuiz.risks.length;
            var color = math.compare(risk_pc, 50) > -1 ? _this.colors.orange : _this.colors.mint;
            _this.progressGraph.labels.push(new GaugeLabel({
                color: _this.colors.white,
                text: 'most at risk',
                x: 0,
                y: 20,
                fontSize: '1em'
            }), new GaugeLabel({
                color: color,
                text: math.format(risk_pc, 4) + "%",
                x: 0,
                y: 0,
                fontSize: '2em'
            }));
            _this.progressGraph.segments.push(new GaugeSegment({
                value: risk_pc,
                color: color,
                borderWidth: 20
            }));
        }, console.error);
    };
    RiskQuizFormSubmittedComponent.prototype.parseRef = function (ref) {
        return JSON.stringify(ref);
    };
    return RiskQuizFormSubmittedComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", RiskQuiz)
], RiskQuizFormSubmittedComponent.prototype, "riskQuiz", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], RiskQuizFormSubmittedComponent.prototype, "submitted", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], RiskQuizFormSubmittedComponent.prototype, "submittedChange", void 0);
RiskQuizFormSubmittedComponent = __decorate([
    Component({
        selector: 'app-risk-quiz-form-submitted',
        templateUrl: './risk-quiz-form-submitted.component.html',
        styleUrls: ['./risk-quiz-form-submitted.component.css']
    }),
    __metadata("design:paramtypes", [RiskStatsService])
], RiskQuizFormSubmittedComponent);
export { RiskQuizFormSubmittedComponent };
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.component.js.map