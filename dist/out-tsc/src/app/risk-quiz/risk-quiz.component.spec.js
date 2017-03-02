/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { RiskQuizComponent } from './risk-quiz.component';
describe('RiskQuizComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RiskQuizComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RiskQuizComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/src/app/risk-quiz/risk-quiz.component.spec.js.map