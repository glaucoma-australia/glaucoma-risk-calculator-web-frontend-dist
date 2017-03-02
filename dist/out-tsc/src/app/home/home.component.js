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
import { AppService } from '../app.service';
var HomeComponent = (function () {
    function HomeComponent(appService) {
        this.appService = appService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navbarPadding = this.appService.navbarPadding;
        this.subNavbarPadding = this.appService.navbarPaddingChange.subscribe(function (value) {
            return _this.navbarPadding = value;
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subNavbarPadding.unsubscribe();
    };
    HomeComponent.prototype.increase = function () {
        this.appService.navbarPadding += 50;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [AppService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/src/app/home/home.component.js.map