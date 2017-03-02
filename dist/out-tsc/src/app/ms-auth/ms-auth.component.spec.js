import { async, TestBed } from '@angular/core/testing';
import { MsAuthComponent } from './ms-auth.component';
describe('MsAuthComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MsAuthComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MsAuthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/src/app/ms-auth/ms-auth.component.spec.js.map