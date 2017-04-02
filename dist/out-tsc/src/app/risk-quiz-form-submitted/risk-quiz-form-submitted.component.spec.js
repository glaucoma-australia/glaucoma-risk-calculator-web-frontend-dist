import { async, TestBed } from '@angular/core/testing';
import { RiskQuizFormSubmittedComponent } from './risk-quiz-form-submitted.component';
describe('RiskQuizFormSubmittedComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RiskQuizFormSubmittedComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RiskQuizFormSubmittedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.component.spec.js.map