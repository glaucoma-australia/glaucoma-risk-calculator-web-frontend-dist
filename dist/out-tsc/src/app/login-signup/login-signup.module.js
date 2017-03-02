var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from 'ng2-bootstrap';
import { LoginSignupComponent } from './login-signup.component';
import { AuthService } from '../api/auth/auth.service';
import { loginSignupRoutes } from './login-signup.routes';
import { FormsModule } from '@angular/forms';
var LoginSignupModule = (function () {
    function LoginSignupModule() {
    }
    return LoginSignupModule;
}());
LoginSignupModule = __decorate([
    NgModule({
        imports: [CommonModule, FormsModule, RouterModule.forChild(loginSignupRoutes), ButtonsModule],
        providers: [AuthService],
        declarations: [LoginSignupComponent]
    })
], LoginSignupModule);
export { LoginSignupModule };
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/src/app/login-signup/login-signup.module.js.map