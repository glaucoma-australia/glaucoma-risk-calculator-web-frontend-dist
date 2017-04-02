var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { EmailTplModule } from '../email-tpl/email-tpl.module';
import { MsAuthModule } from '../ms-auth/ms-auth.module';
import { EmailTplService } from '../api/email_tpl/email-tpl.service';
var EmailModule = (function () {
    function EmailModule() {
    }
    return EmailModule;
}());
EmailModule = __decorate([
    NgModule({
        imports: [
            CommonModule, HttpModule, FormsModule, EmailTplModule, MsAuthModule
        ],
        declarations: [EmailComponent],
        providers: [EmailTplService]
    })
], EmailModule);
export { EmailModule };
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/email/email.module.js.map