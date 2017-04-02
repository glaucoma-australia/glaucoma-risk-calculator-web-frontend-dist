var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertsModule } from './alerts/alerts.module';
import { RiskQuizModule } from './risk-quiz/risk-quiz.module';
import { AuthService } from './api/auth/auth.service';
import { AuthGuard } from './api/auth/auth-guard.service';
import { AlertsService } from './alerts/alerts.service';
import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';
import { FooterModule } from './footer/footer.module';
import { rootRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [
            RouterModule, RouterModule.forRoot(rootRoutes),
            BrowserModule, HttpModule, FormsModule,
            NavbarModule, FooterModule, HomeModule, UsersModule,
            DashboardModule, EmailModule, AlertsModule,
            RiskQuizModule
        ],
        declarations: [AppComponent],
        providers: [AuthService, AuthGuard, AlertsService, AppService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/app.module.js.map