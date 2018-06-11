(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/api/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/api/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http, router, alertsService) {
        this.http = http;
        this.router = router;
        this.alertsService = alertsService;
        this.loggedIn = AuthService_1.loggedIn;
        var at = localStorage.getItem('access-token');
        if (at != null)
            this.access_token = at;
    }
    AuthService_1 = AuthService;
    AuthService.loggedIn = function () {
        return localStorage.getItem('access-token') !== null;
    };
    AuthService.getAccessToken = function () {
        return localStorage.getItem('access-token');
    };
    AuthService.prototype.logout = function () {
        ['access-token', 'user'].forEach(function (k) { return localStorage.removeItem(k); });
        this.router
            .navigate(['/'], this.router.url === '/auth/logout' ? {} : { queryParams: { redirectUrl: this.router.url } });
    };
    AuthService.prototype.login = function (user) {
        localStorage.setItem('user', user.email);
        return this.http
            .post('/api/auth', user);
    };
    AuthService.prototype.register = function (user) {
        localStorage.setItem('user', user.email);
        return this.http.post('/api/user', user, { observe: 'response' });
    };
    AuthService.prototype.signinup = function (user) {
        var _this = this;
        return this.login(user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return err && err.error && err.error.message && err.error.message === 'User not found' ?
                _this.register(user)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (o) { return Object.assign(o.body, { access_token: o.headers.get('X-Access-Token') }); }))
                : _this.alertsService.add(err.error.message) || Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error);
        }));
    };
    AuthService = AuthService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_5__["AlertsService"]])
    ], AuthService);
    return AuthService;
    var AuthService_1;
}());



/***/ }),

/***/ "./src/api/config/config.service.ts":
/*!******************************************!*\
  !*** ./src/api/config/config.service.ts ***!
  \******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.get = function () {
        var _this = this;
        return this.config ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.config) :
            this.http.get('/api/config')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (config) { return _this.config = config; }));
    };
    ConfigService.prototype.post = function (conf) {
        var _this = this;
        return this.http.post('/api/config', conf)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (config) { return _this.config = config; }));
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/api/risk_res/risk_res.service.ts":
/*!**********************************************!*\
  !*** ./src/api/risk_res/risk_res.service.ts ***!
  \**********************************************/
/*! exports provided: RiskResService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskResService", function() { return RiskResService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RiskResService = /** @class */ (function () {
    function RiskResService(http) {
        this.http = http;
    }
    RiskResService.prototype.create = function (risk_res) {
        return this.http.post('/api/risk_res', risk_res);
    };
    RiskResService.prototype.read = function (id) {
        return this.http.get("/api/risk_res/" + id);
    };
    RiskResService.prototype.update = function (id, newRecord) {
        return this.http.put("/api/risk_res/" + id, newRecord);
    };
    RiskResService.prototype.destroy = function (id) {
        return this.http.delete("/api/risk_res/" + id);
    };
    RiskResService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RiskResService);
    return RiskResService;
}());



/***/ }),

/***/ "./src/api/risk_stats/risk-stats.service.ts":
/*!**************************************************!*\
  !*** ./src/api/risk_stats/risk-stats.service.ts ***!
  \**************************************************/
/*! exports provided: RiskStatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskStatsService", function() { return RiskStatsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/api/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RiskStatsService = /** @class */ (function () {
    function RiskStatsService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    RiskStatsService.prototype.create = function (risk_stats) {
        return this.http.post('/api/risk_stats', risk_stats);
    };
    RiskStatsService.prototype.read = function (createdAt) {
        return this.http.get("/api/risk_stats/" + createdAt);
    };
    RiskStatsService.prototype.update = function (prevRecord, newRecord) {
        return this.http.put("/api/risk_stats/" + prevRecord.createdAt, newRecord);
    };
    RiskStatsService.prototype.destroy = function (createdAt) {
        return this.http.delete("/api/risk_stats/" + createdAt);
    };
    RiskStatsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RiskStatsService);
    return RiskStatsService;
}());



/***/ }),

/***/ "./src/api/server-status/server-status.service.ts":
/*!********************************************************!*\
  !*** ./src/api/server-status/server-status.service.ts ***!
  \********************************************************/
/*! exports provided: ServerStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStatusService", function() { return ServerStatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerStatusService = /** @class */ (function () {
    function ServerStatusService(http) {
        this.http = http;
    }
    ServerStatusService.prototype.get = function () {
        return this.last_resp ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.last_resp)
            : this.http.get('/api');
    };
    ServerStatusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServerStatusService);
    return ServerStatusService;
}());



/***/ }),

/***/ "./src/api/template/template.service.ts":
/*!**********************************************!*\
  !*** ./src/api/template/template.service.ts ***!
  \**********************************************/
/*! exports provided: TemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateService", function() { return TemplateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TemplateService = /** @class */ (function () {
    function TemplateService(http, alertsService) {
        this.http = http;
        this.alertsService = alertsService;
        this.templates = new Map(); // silly cache
    }
    TemplateService.prototype.hasTpl = function (kind) {
        if (kind === void 0) { kind = 'email'; }
        return this.templates.has(kind) && this.templates.get(kind).contents
            && this.templates.get(kind).contents.length > 0;
    };
    TemplateService.prototype.setTpl = function (contents, kind) {
        if (kind === void 0) { kind = 'email'; }
        this.hasTpl(kind) ?
            this.templates.get(kind).contents = contents
            : this.templates.set(kind, { contents: contents, createdAt: new Date().toISOString() });
    };
    TemplateService.prototype.getTpl = function (kind) {
        if (kind === void 0) { kind = 'email'; }
        return this.templates.has(kind) ? this.templates.get(kind).contents : void 0;
    };
    TemplateService.prototype.create = function (template) {
        return this.http.post('/api/template', template);
    };
    TemplateService.prototype.createBatch = function (new_templates) {
        return this.http.post('/api/templates', { templates: new_templates });
    };
    TemplateService.prototype.read = function (createdAt, kind) {
        if (kind === void 0) { kind = 'email'; }
        return this.http.get("/api/template/" + createdAt + "_" + kind);
    };
    TemplateService.prototype.readBatch = function () {
        var _this = this;
        return this.http.get('/api/templates/latest')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (templates) {
            templates.templates.forEach(function (template) {
                return _this.templates.set(template.kind, template);
            });
            return templates;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return _this.alertsService.add(error) || Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    TemplateService.prototype.update = function (prevRecord, newRecord) {
        return this.http.put("/api/template/" + prevRecord.createdAt, newRecord);
    };
    TemplateService.prototype.destroy = function (createdAt, kind) {
        if (kind === void 0) { kind = 'email'; }
        return this.http.delete("/api/template/" + createdAt + "_" + kind);
    };
    TemplateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_3__["AlertsService"]])
    ], TemplateService);
    return TemplateService;
}());



/***/ }),

/***/ "./src/api/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/api/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.post = function (user) {
        return this.http.post('/api/user', user);
    };
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/alerts/alerts.component.css":
/*!*********************************************!*\
  !*** ./src/app/alerts/alerts.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 150px;\n}\n"

/***/ }),

/***/ "./src/app/alerts/alerts.component.html":
/*!**********************************************!*\
  !*** ./src/app/alerts/alerts.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-alert *ngFor=\"let alert of alertsService.alerts;let i = index\" [type]=\"alert.type\" dismissible=\"true\"\n           (close)=\"closeAlert(i)\"\n           style=\"color: #ffcc9a\">\n  <h3>{{ alert?.msg }}</h3>\n</ngb-alert>\n"

/***/ }),

/***/ "./src/app/alerts/alerts.component.ts":
/*!********************************************!*\
  !*** ./src/app/alerts/alerts.component.ts ***!
  \********************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alerts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts.service */ "./src/app/alerts/alerts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertsComponent = /** @class */ (function () {
    function AlertsComponent(alertsService) {
        this.alertsService = alertsService;
        this.type = 'warning';
    }
    AlertsComponent.prototype.ngOnInit = function () {
    };
    AlertsComponent.prototype.addAlert = function (alert) {
        this.alertsService.add(alert);
    };
    AlertsComponent.prototype.closeAlert = function (i) {
        this.alertsService.close(i);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlertsComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AlertsComponent.prototype, "dismissible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AlertsComponent.prototype, "dismissOnTimeout", void 0);
    AlertsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(/*! ./alerts.component.html */ "./src/app/alerts/alerts.component.html"),
            styles: [__webpack_require__(/*! ./alerts.component.css */ "./src/app/alerts/alerts.component.css")]
        }),
        __metadata("design:paramtypes", [_alerts_service__WEBPACK_IMPORTED_MODULE_1__["AlertsService"]])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/alerts/alerts.module.ts":
/*!*****************************************!*\
  !*** ./src/app/alerts/alerts.module.ts ***!
  \*****************************************/
/*! exports provided: AlertsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsModule", function() { return AlertsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alerts.component */ "./src/app/alerts/alerts.component.ts");
/* harmony import */ var _alerts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alerts.service */ "./src/app/alerts/alerts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AlertsModule = /** @class */ (function () {
    function AlertsModule() {
    }
    AlertsModule_1 = AlertsModule;
    AlertsModule.forRoot = function () {
        return { ngModule: AlertsModule_1, providers: [_alerts_service__WEBPACK_IMPORTED_MODULE_4__["AlertsService"]] };
    };
    AlertsModule = AlertsModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot()
            ],
            declarations: [_alerts_component__WEBPACK_IMPORTED_MODULE_3__["AlertsComponent"]],
            exports: [_alerts_component__WEBPACK_IMPORTED_MODULE_3__["AlertsComponent"]]
        })
    ], AlertsModule);
    return AlertsModule;
    var AlertsModule_1;
}());



/***/ }),

/***/ "./src/app/alerts/alerts.service.ts":
/*!******************************************!*\
  !*** ./src/app/alerts/alerts.service.ts ***!
  \******************************************/
/*! exports provided: AlertsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsService", function() { return AlertsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertsService = /** @class */ (function () {
    function AlertsService(appService) {
        this.appService = appService;
        this.alerts = [];
        this._padding = 4.5;
    }
    AlertsService.prototype.add = function (alert) {
        if (alert == null)
            return;
        else if (alert.type && alert.msg)
            this.alerts.push({
                type: alert.type,
                msg: (function (s) { return typeof s === 'string' ? s
                    : s.status + ": " + s.statusText + " on " + s.url; })(alert.msg)
            });
        else
            this.alerts.push({
                type: 'warning',
                msg: typeof alert === 'string' ? alert : (alert.hasOwnProperty('error') && alert.hasOwnProperty('error_message') ?
                    Object.values(alert).join(': ') : Object
                    .keys(alert)
                    .map(function (k) { return alert[k]; })
                    .join('\t'))
            });
        this.appService.navbarPadding += this._padding;
    };
    AlertsService.prototype.close = function (i) {
        this.alerts.splice(i, 1);
        this.appService.navbarPadding -= this._padding;
    };
    AlertsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], AlertsService);
    return AlertsService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n}\n\na.active {\n  font-weight: bold;\n}\n\nhtml {\n  position: relative;\n  min-height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header [ngStyle]=\"getBottom()\">\n  <app-navbar></app-navbar>\n</header>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<!--\n<hr>\n\n<div class=\"container\">\n  <div class=\"row offset-sm-9\">\n    <button class=\"btn btn-lg btn-danger\"\n            (click)=\"addAlert()\">Add alert</button>\n  </div>\n</div>\n-->\n<hr>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/auth/auth.service */ "./src/api/auth/auth.service.ts");
/* harmony import */ var _api_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/config/config.service */ "./src/api/config/config.service.ts");
/* harmony import */ var _ms_auth_ms_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ms-auth/ms-auth.service */ "./src/app/ms-auth/ms-auth.service.ts");
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(router, route, authService, appService, confService, msAuthService, alertsService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.appService = appService;
        this.confService = confService;
        this.msAuthService = msAuthService;
        this.alertsService = alertsService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* tslint:disable:no-console */
        console.info('AppComponent::route.fragment =', this.route.fragment, ';');
        console.info('AppComponent::route.queryParams =', this.route.queryParams, ';');
        /*
        Observable.merge(this.route.fragment, this.route.queryParams)
          .subscribe((allParams) => {
            console.info('typeof allParams =', typeof allParams, 'isobject',
             Object.keys(allParams).length === 0 && allParams.constructor === Object, ';');
            if (typeof allParams === 'string')
              allParams = parseQueryString(allParams);
            console.info('NOW typeof allParams =', typeof allParams, 'isobject',
            Object.keys(allParams).length === 0 && allParams.constructor === Object, ';');
            this.handleParams(allParams);
          });
          */
        this.route.fragment.subscribe(function (fragment) {
            var qs = Object(_ms_auth_ms_auth_service__WEBPACK_IMPORTED_MODULE_4__["parseQueryString"])(fragment);
            /* tslint:disable:no-console */
            console.log('AppComponent::ngOnInit::ngOnInit::hash_fragment', qs, ';');
            _this.handleParams(qs);
        });
        this.route.queryParams.subscribe(function (params) {
            // tslint:disable:no-console
            console.info('AppComponent::ngOnInit::queryParams::params', params, ';');
            _this.handleParams(params);
        });
    };
    AppComponent.prototype.handleParams = function (params) {
        var _this = this;
        if (!params || Object.keys(params).length === 0 && params.constructor === Object)
            return;
        console.info('AppComponent::handleParams::params:', params, ';');
        this.confService
            .get()
            .subscribe(function (conf) {
            /* tslint:disable:no-console */
            console.info('AppComponent::conf', conf, ';');
            _this.msAuthService.init();
            var fin = function () { return _this.router.navigateByUrl(params.hasOwnProperty('state') ? decodeURIComponent(params.state) : '/'); };
            if (params.hasOwnProperty('code'))
                _this.msAuthService.login('code', params.code, params.state);
            else if (params.hasOwnProperty('refresh_token'))
                _this.msAuthService.login('refresh_token', params.refresh_token, params.state);
            else if (params.hasOwnProperty('access_token')) {
                _this.confService.config.access_token = params.access_token;
                localStorage.setItem('ms::access_token', params.access_token);
                _this.confService.post(_this.confService.config).subscribe(function () { return fin(); });
            }
            else if (params.hasOwnProperty('error')) {
                _this.alertsService.add([params.error, params.error_description].join(': '));
                console.error(params);
            }
            else
                fin();
        }, console.error);
    };
    AppComponent.prototype.getBottom = function () {
        return { 'margin-bottom': (this.alertsService.alerts.length ? this.alertsService.alerts.length * 6 : 6) + "em" };
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            /* tslint:disable:component-selector */
            selector: 'glaucoma-risk-calculator',
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"],
            _api_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _ms_auth_ms_auth_service__WEBPACK_IMPORTED_MODULE_4__["MsAuthService"],
            _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_5__["AlertsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alerts_alerts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alerts/alerts.module */ "./src/app/alerts/alerts.module.ts");
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.module */ "./src/app/navbar/navbar.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/users.module */ "./src/app/users/users.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.module */ "./src/app/footer/footer.module.ts");
/* harmony import */ var _risk_quiz_form_risk_quiz_form_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./risk-quiz-form/risk-quiz-form.module */ "./src/app/risk-quiz-form/risk-quiz-form.module.ts");
/* harmony import */ var _api_template_template_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../api/template/template.service */ "./src/api/template/template.service.ts");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../api/auth/auth.service */ "./src/api/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.interceptors */ "./src/app/auth/auth.interceptors.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_16__["rootRoutes"]),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__["NavbarModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"], _users_users_module__WEBPACK_IMPORTED_MODULE_8__["UsersModule"],
                _alerts_alerts_module__WEBPACK_IMPORTED_MODULE_5__["AlertsModule"].forRoot(),
                _risk_quiz_form_risk_quiz_form_module__WEBPACK_IMPORTED_MODULE_10__["RiskQuizFormModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_15__["AuthModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
            providers: [
                _app_service__WEBPACK_IMPORTED_MODULE_18__["AppService"], _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptors__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
                    multi: true,
                },
                _api_template_template_service__WEBPACK_IMPORTED_MODULE_11__["TemplateService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: rootRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRoutes", function() { return rootRoutes; });
/* harmony import */ var _risk_quiz_form_risk_quiz_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./risk-quiz-form/risk-quiz-form.component */ "./src/app/risk-quiz-form/risk-quiz-form.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");


// import { AuthGuard } from './api/auth/auth-guard.service';
// NOTE: `canActivate` can only be done manually on all the child routes [true for ng @ 2.4.0]
// 'app/login-signup/login-signup.module#LoginSignupModule'
var rootRoutes = [
    { path: '', component: _risk_quiz_form_risk_quiz_form_component__WEBPACK_IMPORTED_MODULE_0__["RiskQuizFormComponent"] },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'admin', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] }
];
// { path: 'admin', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' }
// { path: 'admin/email', loadChildren: 'app/email/email.module#EmailModule' }


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService() {
        this.navbarPaddingChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._navbarPadding = 16;
        this.navbarPadding$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this._navbarPadding);
        // this.navbarPadding = this._navbarPadding;
    }
    Object.defineProperty(AppService.prototype, "navbarPadding", {
        get: function () {
            return this._navbarPadding;
        },
        set: function (val) {
            this._navbarPadding = val;
            this.navbarPadding$.next(this._navbarPadding);
        },
        enumerable: true,
        configurable: true
    });
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/auth/auth.service */ "./src/api/auth/auth.service.ts");
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, alertsService) {
        this.router = router;
        this.alertsService = alertsService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (_api_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].loggedIn())
            return true;
        var url = state.url;
        this.alertsService.add("Auth required to view " + url);
        this.router
            .navigate(['/auth'], { queryParams: { redirectUrl: url } })
            .then(function () { });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_3__["AlertsService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptors.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/auth.interceptors.ts ***!
  \*******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/auth/auth.service */ "./src/api/auth/auth.service.ts");
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router, alertsService) {
        this.router = router;
        this.alertsService = alertsService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(_api_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"].loggedIn() && !req.url.startsWith('https://graph.microsoft.com') ?
            req.clone({ headers: req.headers.set('X-Access-Token', _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"].getAccessToken()) })
            : req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err /*, caught*/) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"])
                switch (err.status) {
                    case 403:
                        if (!_this.router.isActive('auth', false) && !_this.router.isActive('/', true)) {
                            _this.alertsService.add('Authentication required');
                            _this.router
                                .navigate(['auth'], { queryParams: { redirectUrl: _this.router.url } })
                                .then(function (success) {
                                return success || _this.alertsService.add('Unable to route to /auth');
                            })
                                .catch(console.error);
                        }
                        else
                            console.warn({
                                code: err.status,
                                message: err.error.message
                            });
                        break;
                    default:
                        /*this.alertsService.add({
                          code: err.status,
                          message: err.error.message
                        });*/
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
                }
            //  if (err.status === 403)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_6__["AlertsService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/auth/auth.service */ "./src/api/auth/auth.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _auth_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.routes */ "./src/app/auth/auth.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_auth_routes__WEBPACK_IMPORTED_MODULE_7__["authRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_api_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.routes.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.routes.ts ***!
  \*************************************/
/*! exports provided: authRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authRoutes", function() { return authRoutes; });
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");


var authRoutes = [
    { path: 'auth', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'auth/login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'auth/logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_0__["LogoutComponent"] }
];


/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-h1\">Login</h1>\n\n<form class=\"form-signin-up\" #formRef=\"ngForm\" (ngSubmit)=\"login()\"\n      *ngIf=\"!authService.loggedIn()\" [formGroup]=\"form\" novalidate>\n  <label for=\"email\" class=\"sr-only\">Email address</label>\n  <input class=\"form-control\" formControlName=\"email\" type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email\">\n\n  <label for=\"password\" class=\"sr-only\">Password</label>\n  <input class=\"form-control\" formControlName=\"password\" type=\"password\" name=\"password\" id=\"password\"\n         placeholder=\"Password\">\n\n\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n</form>\n\n<p *ngIf=\"authService.loggedIn()\">You are logged in.</p>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/auth/auth.service */ "./src/api/auth/auth.service.ts");
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./src/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, fb, authService, alertsService) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.alertsService = alertsService;
        this.auth = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService
            .login(this.form.value)
            .subscribe(function (user) {
            if (user.access_token == null) {
                _this.alertsService.add('No access token; try logging in again');
                return;
            }
            _this.authService.access_token = user.access_token;
            localStorage.setItem('access-token', _this.authService.access_token);
            _this.router
                .navigate([Object(_utils__WEBPACK_IMPORTED_MODULE_5__["redirUrlOr"])('/admin')])
                .then(function () { });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_4__["AlertsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/auth/auth.service */ "./src/api/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService) {
        this.authService = authService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.logout();
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [_api_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/colours.ts":
/*!****************************!*\
  !*** ./src/app/colours.ts ***!
  \****************************/
/*! exports provided: colours, numToColour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colours", function() { return colours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numToColour", function() { return numToColour; });
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/index.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mathjs__WEBPACK_IMPORTED_MODULE_0__);

var colours = Object.freeze({
    indigo: '#14143e',
    pink: '#fd1c49',
    orange: '#ff6e00',
    yellow: '#f0c800',
    mint: '#00efab',
    cyan: '#05d1ff',
    purple: '#841386',
    white: '#fff',
    darkgrey: 'darkgrey',
    teal: '#5AA454',
    darkred: '#A10A28',
    gold: '#C7B42C',
    grey: '#AAAAAA'
});
var numToColour = function (num) {
    if (mathjs__WEBPACK_IMPORTED_MODULE_0__["compare"](num, 5) < 1)
        return colours.darkgrey;
    else if (mathjs__WEBPACK_IMPORTED_MODULE_0__["compare"](num, 25) < 1)
        return colours.cyan;
    else if (mathjs__WEBPACK_IMPORTED_MODULE_0__["compare"](num, 50) < 1)
        return colours.mint;
    else if (mathjs__WEBPACK_IMPORTED_MODULE_0__["compare"](num, 75) < 1)
        return colours.orange;
    return colours.pink;
};


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Administrator interface</h1>\n    <p>Herein you can edit email templates, and modify email API details.</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <a class=\"btn btn-block btn-outline-primary\" routerLink=\"/admin/email\" routerLinkActive=\"active\">\n        <i class=\"icon-mail\"></i> Manage email and social\n      </a>\n      <p>Edit email and social templates, modify authentication details</p>\n    </div>\n    <div class=\"col-md-6\">\n      <button class=\"btn btn-block btn-outline-danger\" routerLink=\"/admin/users\" routerLinkActive=\"active\">\n        <i class=\"icon-users\"></i>Users\n      </button>\n      <p>View/search users</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users.module */ "./src/app/users/users.module.ts");
/* harmony import */ var _email_email_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../email/email.module */ "./src/app/email/email.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.routes */ "./src/app/dashboard/dashboard.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _users_users_module__WEBPACK_IMPORTED_MODULE_3__["UsersModule"], _email_email_module__WEBPACK_IMPORTED_MODULE_4__["EmailModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_dashboard_routes__WEBPACK_IMPORTED_MODULE_6__["dashboardRoutes"])
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.routes.ts ***!
  \***********************************************/
/*! exports provided: dashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardRoutes", function() { return dashboardRoutes; });
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../email/email.component */ "./src/app/email/email.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");




var dashboardRoutes = [
    { path: 'admin/dashboard', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'admin/users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_1__["UsersComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'admin/email', component: _email_email_component__WEBPACK_IMPORTED_MODULE_0__["EmailComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
];


/***/ }),

/***/ "./src/app/email/email.component.css":
/*!*******************************************!*\
  !*** ./src/app/email/email.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/email/email.component.html":
/*!********************************************!*\
  !*** ./src/app/email/email.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\" *ngIf=\"error\">\n    <h3>Trace</h3>\n    <pre>{{error}}</pre>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-9\">\n      <app-template></app-template>\n    </div>\n    <div class=\"col\">\n      <app-ms-auth></app-ms-auth>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/email/email.component.ts":
/*!******************************************!*\
  !*** ./src/app/email/email.component.ts ***!
  \******************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailComponent = /** @class */ (function () {
    function EmailComponent(alertsService) {
        this.alertsService = alertsService;
    }
    EmailComponent.prototype.ngAfterViewInit = function () {
        if (!this.alertsService.alerts || !this.alertsService.alerts.length)
            return;
        var alert = this.alertsService.alerts[this.alertsService.alerts.length - 1];
        if (alert.msg && alert.msg.length && alert.msg.indexOf('interaction_required') > -1)
            this.error = alert.msg;
    };
    EmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.css */ "./src/app/email/email.component.css")]
        }),
        __metadata("design:paramtypes", [_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_1__["AlertsService"]])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/email/email.module.ts":
/*!***************************************!*\
  !*** ./src/app/email/email.module.ts ***!
  \***************************************/
/*! exports provided: EmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/config/config.service */ "./src/api/config/config.service.ts");
/* harmony import */ var _template_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../template/template.module */ "./src/app/template/template.module.ts");
/* harmony import */ var _ms_auth_ms_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ms-auth/ms-auth.module */ "./src/app/ms-auth/ms-auth.module.ts");
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email.component */ "./src/app/email/email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EmailModule = /** @class */ (function () {
    function EmailModule() {
    }
    EmailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _template_template_module__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"], _ms_auth_ms_auth_module__WEBPACK_IMPORTED_MODULE_5__["MsAuthModule"]
            ],
            declarations: [_email_component__WEBPACK_IMPORTED_MODULE_6__["EmailComponent"]],
            providers: [_api_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]]
        })
    ], EmailModule);
    return EmailModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grey {\n  color: gainsboro;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer container\">\n  <div class=\"row align-items-start\">\n    <app-api-version class=\"col grey\"></app-api-version>\n    <a routerLink=\"/auth\" class=\"col grey text-center\">auth</a>\n    <span class=\"col text-right\">&copy; Glaucoma Australia, 2018.</span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_server_status_server_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/server-status/server-status.service */ "./src/api/server-status/server-status.service.ts");
/* harmony import */ var _server_status_server_status_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../server-status/server-status.module */ "./src/app/server-status/server-status.module.ts");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _server_status_server_status_module__WEBPACK_IMPORTED_MODULE_4__["ServerStatusModule"]
            ],
            providers: [_api_server_status_server_status_service__WEBPACK_IMPORTED_MODULE_3__["ServerStatusService"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/ms-auth/ms-auth.component.css":
/*!***********************************************!*\
  !*** ./src/app/ms-auth/ms-auth.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ms-auth/ms-auth.component.html":
/*!************************************************!*\
  !*** ./src/app/ms-auth/ms-auth.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <a type=\"button\" class=\"col btn btn-lg btn-warning\" (click)=\"login()\" *ngIf=\"!loggedIn()\">\n      Authenticate with Office 365\n    </a>\n\n    <button class=\"col btn btn-sm btn-outline-danger\"\n            (click)=\"logout()\" *ngIf=\"loggedIn()\">\n      Office 365 logout\n    </button>\n    <button type=\"button\" class=\"col-sm-2 btn btn-sm\" (click)=\"toggleCollapse()\">Advanced</button>\n  </div>\n</div>\n\n<form *ngIf=\"loggedIn() && email_form\" (ngSubmit)=\"sendTestEmail()\" [formGroup]=\"email_form\">\n  <div class=\"form-group\">\n    <label for=\"test_recipient\">Recipient</label>\n    <input type=\"email\" class=\"form-control\" id=\"test_recipient\" name=\"test_recipient\" formControlName=\"test_recipient\"\n           aria-describedby=\"emailHelp\" placeholder=\"Enter email address\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">Address to send email</small>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"test_subject\">Subject</label>\n    <input type=\"text\" class=\"form-control\" id=\"test_subject\" name=\"test_subject\" formControlName=\"test_subject\"\n           aria-describedby=\"subjectHelp\" placeholder=\"Enter subject\">\n    <small id=\"subjectHelp\" class=\"form-text text-muted\">Subject of email</small>\n  </div>\n\n  <button class=\"btn btn-lg btn-primary\" type=\"submit\">Send test email</button>\n</form>\n\n<hr *ngIf=\"!isCollapsed\">\n\n<div [ngbCollapse]=\"isCollapsed\" class=\"card card-block card-header\">\n  <div class=\"well well-lg\">\n    More info:\n    <a href=\"https://graph.microsoft.io/en-us/docs/authorization/app_authorization\" target=\"_blank\">\n      Microsoft Graph app authorisation\n    </a>\n    <form (ngSubmit)=\"updateAuth()\" [formGroup]=\"advanced_form\">\n      <div class=\"form-group\">\n        <label for=\"client_id\">Client ID</label>\n        <input type=\"text\" class=\"form-control\"\n               id=\"client_id\" name=\"client_id\" formControlName=\"client_id\"\n               placeholder=\"Enter client_id\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"client_secret\">Client Secret</label>\n        <input type=\"text\" class=\"form-control\"\n               id=\"client_secret\" name=\"client_secret\" formControlName=\"client_secret\"\n               placeholder=\"Enter client_secret\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"tenant_id\">Tenant ID</label>\n        <input type=\"text\" class=\"form-control\"\n               id=\"tenant_id\" name=\"tenant_id\" formControlName=\"tenant_id\"\n               placeholder=\"Enter tenant_id\">\n      </div>\n\n      <button class=\"btn btn-outline-warning\" type=\"submit\">Update auth</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/ms-auth/ms-auth.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ms-auth/ms-auth.component.ts ***!
  \**********************************************/
/*! exports provided: MsAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsAuthComponent", function() { return MsAuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/config/config.service */ "./src/api/config/config.service.ts");
/* harmony import */ var _api_template_template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/template/template.service */ "./src/api/template/template.service.ts");
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
/* harmony import */ var _ms_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ms-auth.service */ "./src/app/ms-auth/ms-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MsAuthComponent = /** @class */ (function () {
    function MsAuthComponent(fb, alertsService, msAuthService, confService, templateService) {
        this.fb = fb;
        this.alertsService = alertsService;
        this.msAuthService = msAuthService;
        this.confService = confService;
        this.templateService = templateService;
        this.isCollapsed = true;
        this.email_form = this.fb.group({
            test_recipient: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            test_subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.advanced_form = this.fb.group({
            client_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            client_secret: '',
            tenant_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    MsAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.confService
            .get()
            .subscribe(function (conf) {
            return conf && Object.keys(conf).length &&
                _this.advanced_form.setValue(Object
                    .keys(conf)
                    .reduce(function (obj, key) {
                    return ['client_id', 'client_secret', 'tenant_id'].indexOf(key) > -1 ?
                        Object.assign((_a = {}, _a[key] = conf[key], _a), obj) : obj;
                    var _a;
                }, {}));
        });
    };
    MsAuthComponent.prototype.login = function () {
        this.msAuthService.login('code');
    };
    MsAuthComponent.prototype.loggedIn = function () {
        return localStorage.getItem('ms::access_token') != null;
    };
    MsAuthComponent.prototype.logout = function () {
        this.msAuthService.logout();
    };
    MsAuthComponent.prototype.sendTestEmail = function () {
        var _this = this;
        /* tslint:disable:no-console */
        console.info('MsAuthComponent::sendTestEmail');
        this.msAuthService
            .localSendEmail(Object.assign({ content: this.templateService.getTpl('email') }, Object
            .keys(this.email_form.value)
            .map(function (k) {
            var sw = 'test_';
            return _a = {}, _a[k.startsWith(sw) ? k.slice('sw'.length) : k] = _this.email_form.value[k], _a;
            var _a;
        })
            .reduce(function (a, b) { return Object.assign(a, b); }, {})))
            .subscribe(function (email) { return console.info(email) || _this.alertsService.add({
            type: 'info', msg: 'Sent email'
        }); }, console.error);
    };
    MsAuthComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    MsAuthComponent.prototype.updateAuth = function () {
        var _this = this;
        var access_token = localStorage.getItem('ms::access_token');
        this.confService
            .post(Object.assign(access_token == null ? {} : { access_token: access_token }, this.advanced_form.value))
            .subscribe(function (auth) { return console.info(auth) || _this.alertsService.add({ type: 'info', msg: 'Updated auth' }); }, console.error.bind(console) // error => this.authService.redirOnResIfUnauth(error)
        );
    };
    MsAuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ms-auth',
            template: __webpack_require__(/*! ./ms-auth.component.html */ "./src/app/ms-auth/ms-auth.component.html"),
            styles: [__webpack_require__(/*! ./ms-auth.component.css */ "./src/app/ms-auth/ms-auth.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_4__["AlertsService"],
            _ms_auth_service__WEBPACK_IMPORTED_MODULE_5__["MsAuthService"],
            _api_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _api_template_template_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"]])
    ], MsAuthComponent);
    return MsAuthComponent;
}());



/***/ }),

/***/ "./src/app/ms-auth/ms-auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ms-auth/ms-auth.module.ts ***!
  \*******************************************/
/*! exports provided: MsAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsAuthModule", function() { return MsAuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _ms_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ms-auth.component */ "./src/app/ms-auth/ms-auth.component.ts");
/* harmony import */ var _ms_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ms-auth.service */ "./src/app/ms-auth/ms-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MsAuthModule = /** @class */ (function () {
    function MsAuthModule() {
    }
    MsAuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"].forRoot()
            ],
            providers: [_ms_auth_service__WEBPACK_IMPORTED_MODULE_6__["MsAuthService"]],
            declarations: [_ms_auth_component__WEBPACK_IMPORTED_MODULE_5__["MsAuthComponent"]],
            exports: [_ms_auth_component__WEBPACK_IMPORTED_MODULE_5__["MsAuthComponent"]]
        })
    ], MsAuthModule);
    return MsAuthModule;
}());



/***/ }),

/***/ "./src/app/ms-auth/ms-auth.service.ts":
/*!********************************************!*\
  !*** ./src/app/ms-auth/ms-auth.service.ts ***!
  \********************************************/
/*! exports provided: parseQueryString, MsAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQueryString", function() { return parseQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsAuthService", function() { return MsAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/config/config.service */ "./src/api/config/config.service.ts");
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var parseQueryString = function (url) {
    var params = {};
    var regex = /([^&=]+)=([^&]*)/g;
    var m;
    while (m = regex.exec(url)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
};
var MsAuthService = /** @class */ (function () {
    function MsAuthService(http, router, configService, alertsService) {
        this.http = http;
        this.router = router;
        this.configService = configService;
        this.alertsService = alertsService;
        this.params = parseQueryString(location.hash);
        this.init();
    }
    MsAuthService_1 = MsAuthService;
    MsAuthService.genNonce = function () {
        var charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz'; // '-._~';
        var rands = new Uint8Array(32);
        var results = [];
        window.crypto.getRandomValues(rands);
        rands.forEach(function (c) { return results.push(charset[c % charset.length]); });
        return results.join('');
    };
    MsAuthService.getHostOrigin = function () {
        return window.location.protocol + "//" + window.location.hostname + (window.location.port ?
            ':' + window.location.port : '');
    };
    MsAuthService.paramsToObject = function (params) {
        var o = {};
        for (var _i = 0, _a = params.keys(); _i < _a.length; _i++) {
            var key = _a[_i];
            o[key] = params.get(key);
        }
        /* tslint:disable:no-console */
        console.info('paramsToObject::params:', params, ';\ntoObject:', o, ';');
        return o;
    };
    MsAuthService.prototype.msAuthRedir = function (url_params) {
        console.info('MsAuthService::getTokenParams() =', this.getTokenParams(), ';');
        console.info('MsAuthService::msAuthRedir::params', url_params.params, ';');
        window.location.href = "" + url_params.url + url_params.params;
    };
    MsAuthService.prototype.getTokenParams = function (state) {
        /* tslint:disable:no-console */
        console.info('MsAuthService::getTokenParams::client_id =', this.configService.config.client_id, ';');
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('client_id', this.configService.config.client_id)
            .set('redirect_uri', MsAuthService_1.getHostOrigin())
            .set('state', state || window.location.pathname) // redirect_uri doesn't work with angular for some reason?
            .set('nonce', MsAuthService_1.genNonce());
    };
    MsAuthService.prototype.login = function (token_type, token, state) {
        var _this = this;
        if (token_type == null)
            return;
        this.params[token_type] = token;
        /* tslint:disable:no-console */
        console.info('MsAuthService::login::params =', this.params, ';');
        console.info('MsAuthService::login::token_type', token_type, ';');
        console.info('MsAuthService::login::token:', token, 'of type', typeof token, ';');
        switch (token_type) {
            case 'code':
                if (token == null || token === 'undefined')
                    this.msAuthRedir(this.getCode(state));
                localStorage.setItem("ms::" + token_type, token);
                this.login('refresh_token', void 0, state);
                break;
            case 'access_token':
            case 'refresh_token':
                if (token == null || token === 'undefined')
                    this.getTokens().subscribe(function (tokens) {
                        return Object.keys(tokens).forEach(function (key) {
                            return localStorage.setItem("ms::#" + key, tokens[key]);
                        });
                    }, function (error) {
                        var msg = JSON.parse(error.method);
                        console.error(msg.headers);
                        var method = JSON.parse(msg.method);
                        _this.alertsService.add(method.error + ": " + method.error_description);
                    });
        }
        this.router.navigateByUrl(state == null ? '/' : decodeURIComponent(state));
    };
    MsAuthService.prototype.logout = function () {
        Object
            .keys(localStorage)
            .forEach(function (key) { return key.startsWith('ms::') && localStorage.removeItem(key); });
    };
    MsAuthService.prototype.init = function () {
        this.configService.get().subscribe(function () { });
    };
    MsAuthService.prototype.localSendEmail = function (mail) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.configService.config.access_token
            }),
            observe: 'response'
        };
        var body = {
            message: {
                subject: mail.subject,
                toRecipients: [{
                        emailAddress: {
                            address: mail.recipient
                        }
                    }],
                body: {
                    content: mail.content,
                    contentType: 'html'
                }
            }
        };
        return this.http
            .post('https://graph.microsoft.com/v1.0/users/me/sendMail', body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
            if (response.status !== 202)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new Error("Expected response.status of 202 got " + response.status + ".\n           Body: " + response.body));
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            var err = JSON.parse(error._body).error;
            if (err.message === 'Access token has expired.')
                _this.login('code');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    };
    MsAuthService.prototype.getCode = function (state) {
        // https://github.com/microsoftgraph/microsoft-graph-docs/blob/master/concepts/auth_v2_user.md#authorization-request
        /*
        // After redirect, successful response is:
        interface ICodeResponse {
          code: string;
          state: string;
        }
        */
        var default_params = MsAuthService_1.paramsToObject(this.getTokenParams(state));
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromObject: Object
                .keys(default_params)
                .filter(function (k) { return [
                'client_id', 'response_type', 'redirect_uri', 'response_mode', 'scope', 'state'
            ].indexOf(k) > -1; })
                .reduce(function (a, b) {
                return Object.assign(a, (_a = {}, _a[b] = default_params[b], _a));
                var _a;
            }, {})
        })
            .set('response_type', 'code')
            .set('response_mode', 'query')
            .set('scope', 'mail.send offline_access');
        console.info('MsAuthService::getCode::params', params, ';');
        return { params: params, url: "https://login.microsoftonline.com/" + this.configService.config.tenant_id + "/oauth2/v2.0/authorize?" };
    };
    MsAuthService.prototype.getTokens = function (state) {
        // https://docs.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/graph-oauth#step-2-redeem-the-code-for-access-tokens
        var default_params = MsAuthService_1.paramsToObject(this.getTokenParams(state));
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromObject: Object
                .keys(default_params)
                .filter(function (k) { return ['client_id', 'grant_type', 'scope', 'code', 'redirect_uri', 'client_secret'].indexOf(k) > -1; })
                .reduce(function (a, b) {
                return Object.assign(a, (_a = {}, _a[b] = default_params[b], _a));
                var _a;
            }, {})
        })
            .set('grant_type', 'authorization_code')
            .set('scope', 'mail.send offline_access')
            .set('code', localStorage.getItem('ms::code'))
            .set('client_secret', this.configService.config.client_secret);
        console.info('MsAuthService::getTokens::params', params, ';');
        return this.http
            .post('/api/email/ms-auth', MsAuthService_1.paramsToObject(params));
    };
    /*
    public getAccessToken(state?: string): HttpParams {
      // redirect to get access_token
  
      const params = new HttpParams({ fromObject: MsAuthService.paramsToObject(this.getTokenParams(state)) })
        .set('response_type', 'token')
        .set('resource', 'https://graph.microsoft.com')
        .set('prompt', 'none');
      console.info('MsAuthService::getAccessToken::params', params, ';');
      return params;
    }
    */
    MsAuthService.prototype.remoteSendEmail = function (risk_id, mail) {
        return this.http
            .post("/api/email/" + mail.recipient + "/" + risk_id, void 0);
    };
    MsAuthService = MsAuthService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_5__["AlertsService"]])
    ], MsAuthService);
    return MsAuthService;
    var MsAuthService_1;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\" style=\"line-height: 2.68\">\n  <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"active\"\n     [routerLinkActiveOptions]=\"{exact:true}\">\n    Glaucoma Risk Calculator\n  </a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <form class=\"form-inline col btn-group\" *ngIf=\"authService.loggedIn()\">\n      <a class=\"nav-item nav-link btn btn-outline-info\" routerLinkActive=\"active\" routerLink=\"/admin/dashboard\">\n        Dashboard\n      </a>\n      <button class=\"a nav-item nav-link btn\" (click)=\"logout()\">\n        Logout\n      </button>\n    </form>\n    <ul class=\"navbar-nav mr-auto\"></ul>\n    <a href=\"http://glaucoma.org.au\"><img src=\"../../assets/reversed-logo.png\" alt=\"Glaucoma Australia logo\"/></a>\n  </div>\n\n</nav>\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\"\n     *ngIf=\"alertsService.alerts\">\n  <app-alerts style=\"width: 100%\"></app-alerts>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/auth/auth.service */ "./src/api/auth/auth.service.ts");
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, appService, authService, alertsService) {
        this.router = router;
        this.appService = appService;
        this.authService = authService;
        this.alertsService = alertsService;
    }
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.router
            .navigate(['auth/logout'])
            .then(function (success) { return success ? console.info('NavbarComponent::state changed') : _this.alertsService.alerts.push({ msg: 'state didn\'t change', type: 'warning' }); }, function (err) { return _this.alertsService.alerts.push({ msg: err, type: 'danger' }); });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_3__["AlertsService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.module.ts":
/*!*****************************************!*\
  !*** ./src/app/navbar/navbar.module.ts ***!
  \*****************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _alerts_alerts_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alerts/alerts.module */ "./src/app/alerts/alerts.module.ts");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar.component */ "./src/app/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"], _alerts_alerts_module__WEBPACK_IMPORTED_MODULE_4__["AlertsModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/richtext/richtext.component.css":
/*!*************************************************!*\
  !*** ./src/app/richtext/richtext.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/richtext/richtext.component.html":
/*!**************************************************!*\
  !*** ./src/app/richtext/richtext.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n  <quill-editor #editor id=\"{{elementId}}\" [style]=\"{height: '200px'}\"\n                (onEditorCreated)=\"setFocus($event)\"\n                [formControl]=\"form.controls['editor']\"></quill-editor>\n</form>\n"

/***/ }),

/***/ "./src/app/richtext/richtext.component.ts":
/*!************************************************!*\
  !*** ./src/app/richtext/richtext.component.ts ***!
  \************************************************/
/*! exports provided: RichTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextComponent", function() { return RichTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RichTextComponent = /** @class */ (function () {
    function RichTextComponent(fb) {
        this.fb = fb;
        this.whenEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RichTextComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            editor: ''
        });
    };
    RichTextComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function (content) { return _this.whenEdited.emit(content.editor); });
    };
    RichTextComponent.prototype.setFocus = function ($event) {
        $event.focus();
    };
    RichTextComponent.prototype.patchValue = function (content) {
        this.form.controls['editor'].patchValue(content ? content : this.form.controls['editor'].value + " patched!");
    };
    RichTextComponent.prototype.setValue = function (content) {
        this.form.setValue({
            editor: content || ''
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RichTextComponent.prototype, "elementId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RichTextComponent.prototype, "whenEdited", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editor'),
        __metadata("design:type", ngx_quill__WEBPACK_IMPORTED_MODULE_2__["QuillEditorComponent"])
    ], RichTextComponent.prototype, "editor", void 0);
    RichTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-richtext',
            template: __webpack_require__(/*! ./richtext.component.html */ "./src/app/richtext/richtext.component.html"),
            styles: [__webpack_require__(/*! ./richtext.component.css */ "./src/app/richtext/richtext.component.css"), __webpack_require__(/*! ./../../../node_modules/quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css"), __webpack_require__(/*! ./../../../node_modules/quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RichTextComponent);
    return RichTextComponent;
}());



/***/ }),

/***/ "./src/app/richtext/richtext.module.ts":
/*!*********************************************!*\
  !*** ./src/app/richtext/richtext.module.ts ***!
  \*********************************************/
/*! exports provided: RichTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextModule", function() { return RichTextModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _richtext_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./richtext.component */ "./src/app/richtext/richtext.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RichTextModule = /** @class */ (function () {
    function RichTextModule() {
    }
    RichTextModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_2__["QuillModule"]
            ],
            declarations: [_richtext_component__WEBPACK_IMPORTED_MODULE_4__["RichTextComponent"]],
            exports: [_richtext_component__WEBPACK_IMPORTED_MODULE_4__["RichTextComponent"]]
        })
    ], RichTextModule);
    return RichTextModule;
}());



/***/ }),

/***/ "./src/app/risk-pointer/risk-pointer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/risk-pointer/risk-pointer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/risk-pointer/risk-pointer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/risk-pointer/risk-pointer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <tbody>\n  <tr>\n    <td [style.background]=\"numToColour(0)\"></td>\n    <td [style.background]=\"numToColour(25)\"></td>\n    <td [style.background]=\"numToColour(50)\"></td>\n    <td [style.background]=\"numToColour(75)\"></td>\n    <td [style.background]=\"numToColour(100)\"></td>\n  </tr>\n  <tr>\n    <td id=\"0\">{{risk_value}}</td>\n    <td id=\"1\"></td>\n    <td id=\"2\"></td>\n    <td id=\"3\"></td>\n    <td id=\"4\"></td>\n    <td id=\"5\"></td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/risk-pointer/risk-pointer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/risk-pointer/risk-pointer.component.ts ***!
  \********************************************************/
/*! exports provided: RiskPointerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskPointerComponent", function() { return RiskPointerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _colours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colours */ "./src/app/colours.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RiskPointerComponent = /** @class */ (function () {
    function RiskPointerComponent() {
        this.numToColour = _colours__WEBPACK_IMPORTED_MODULE_1__["numToColour"];
    }
    RiskPointerComponent.prototype.ngAfterViewInit = function () {
        // this.risk_value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RiskPointerComponent.prototype, "risk_value", void 0);
    RiskPointerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-risk-pointer',
            template: __webpack_require__(/*! ./risk-pointer.component.html */ "./src/app/risk-pointer/risk-pointer.component.html"),
            styles: [__webpack_require__(/*! ./risk-pointer.component.css */ "./src/app/risk-pointer/risk-pointer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RiskPointerComponent);
    return RiskPointerComponent;
}());



/***/ }),

/***/ "./src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ng-gauge {\n  margin: 16px;\n  width: 300px;\n  height: 300px;\n  display: inline-block;\n}\n"

/***/ }),

/***/ "./src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"submitted\">\n  <ng-gauge [bgRadius]=progressGraph.bgRadius\n            [bgColor]=progressGraph.bgColor\n            [rounded]=progressGraph.rounded\n            [reverse]=progressGraph.reverse\n            [animationSecs]=progressGraph.animationSecs\n            [labels]=progressGraph.labels\n            [segments]=progressGraph.segments\n            *ngIf=\"gauge\" style=\"width: 100%; max-width: 30em; margin: 0;\">\n  </ng-gauge>\n  <h3 style=\"text-underline: single\">\n    {{recommendation}}\n  </h3>\n  <h5 style=\"text-underline: single; font-style: italic;\">\n    ({{recommendation_subtitle | lowercase}})\n  </h5>\n\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <h2>Glaucoma prevalence in your population is: {{riskQuiz.risk}}%.</h2>\n\n      <h3>This puts you in the\n        <strong>{{most_at_risk}}</strong> most at risk subgroup.\n        <span *ngIf=\"added_risk\">\n          Adding in <strong>family risk</strong>, and you have:\n          {{riskQuiz.client_risk}}% relative risk within your cohort.\n        </span>\n      </h3>\n    </div>\n  </div>\n\n  <h6>Based off submission:</h6>\n\n  <table class=\"table table-responsive table-striped\">\n    <thead>\n    <tr>\n      <th *ngFor=\"let col of submissionHeader\">\n        {{ col }}\n      </th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td *ngFor=\"let col of submissionHeader\">\n        {{ submissionRow[col] }}\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n  <br>\n  <button class=\"btn btn-default\" (click)=\"redo()\">Redo</button>\n  <br>\n  <hr>\n  <h5>Share with family and friends to calculate their own risk</h5>\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Share\">\n    <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"email\">\n      <button class=\"btn btn-lg btn-warning\" (click)=\"openModal(sendEmailTemplate)\">Share as email</button>\n      <ng-template #sendEmailTemplate>\n        <div class=\"modal-body text-center\">\n          <form class=\"container form-group\">\n            <div class=\"row\">\n              <div class=\"col-2\">\n                <label class=\"col-form-label\" for=\"email\">\n                  To:\n                </label>\n              </div>\n              <div class=\"col-auto\">\n                <input class=\"form-check-input\" placeholder=\"Email\" id=\"email\" #toEmail>\n              </div>\n            </div>\n\n            <div class=\"row\" [innerHtml]=\"templateService.getTpl('email') + ' ' + share_url\"></div>\n            <button type=\"submit\" class=\"btn\" (click)=\"sendEmail(toEmail.value)\"\n                    [disabled]=\"!toEmail.value.length\" [ngClass]=\"{'btn-outline-success': toEmail.value.length}\">\n              Send email\n            </button>\n          </form>\n        </div>\n      </ng-template>\n    </div>\n    <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"facebook\">\n      <a class=\"btn btn-lg btn-primary\" [href]=\"'https://www.facebook.com/sharer/sharer.php?u='+share_url\"\n         target=\"_blank\">\n        Share on facebook\n      </a>\n    </div>\n    <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"twitter\">\n      <a target=\"_blank\" class=\"btn btn-lg btn-info\" id=\"tweet\" #tweet\n         [href]=\"'https://twitter.com/intent/tweet?text='+templateService.getTpl('twitter')+' '+share_url\"\n         data-size=\"large\">\n        Tweet\n      </a>\n    </div>\n    <div class=\"btn-group\" role=\"group\" aria-label=\"copy-link\">\n      <button class=\"btn btn-lg btn-outline\" [class.btn-success]=\"isCopied\" ngxClipboard\n              [cbContent]=\"share_url\" (cbOnSuccess)=\"isCopied = true\">\n        Copy link\n      </button>\n    </div>\n  </div>\n  <hr>\n  <button class=\"btn btn-secondary\" (click)=\"toggleCollapse()\" [class.btn-outline-secondary]=\"!isCollapsed\">\n    Review references and submission\n  </button>\n  <div [ngbCollapse]=\"isCollapsed\" class=\"card card-block card-header\" *ngIf=\"!isCollapsed\">\n    <div class=\"well well-lg\">\n      <h6>Your submission</h6>\n\n      <div class=\"row\">\n        <div class=\"col-xs-3\"><em>Age</em></div>\n        <div class=\"col-xs-9  pull-left\"><strong>&nbsp;{{ riskQuiz.riskQuiz.age }}</strong></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-3\"><em>Gender</em></div>\n        <div class=\"col-xs-9 pull-left\"><strong>&nbsp;{{ riskQuiz.riskQuiz.gender }}</strong></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-3\"><em>Ethnicity</em></div>\n        <div class=\"col-xs-9 pull-left\"><strong>&nbsp;{{ riskQuiz.riskQuiz.ethnicity }}</strong></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-3\"><em>Sibling with glaucoma</em></div>\n        <div class=\"col-xs-9 pull-left\"><strong>&nbsp;{{ riskQuiz.riskQuiz.sibling || 'false' }}</strong></div>\n      </div>\n      <div class=\"row\" style=\"margin-bottom: 5px\">\n        <div class=\"col-xs-3\"><em>Parent with glaucoma</em></div>\n        <div class=\"col-xs-9 pull-left\"><strong>&nbsp;{{ riskQuiz.riskQuiz.parent || 'false' }}</strong></div>\n      </div>\n\n      <!--<app-risk-pointer [risk_value]=\"riskQuiz.client_risk\"></app-risk-pointer>-->\n\n      <ngx-charts-pie-grid *ngIf=\"pie_grid\"\n                           [view]=\"pieView\"\n                           [scheme]=\"colorScheme\"\n                           [results]=\"pieData\"\n                           autoScale=\"true\"\n                           (select)=\"onPieGridSelect($event)\">\n      </ngx-charts-pie-grid>\n\n      <hr>\n\n      <!--\n      (legendLabelClick)=\"onLegendLabelClick($event)\"\n      [scheme]=\"colorScheme\"\n      [gradient]=\"gradient\"\n      (select)=\"treemapSelect($event)\"-->\n      <h4>Risk compared with other ethnicities of same age and gender</h4>\n      <div class=\"row\" *ngIf=\"show_treemap\">\n        <p>Hover over each box to view the comparative risk score.</p>\n        <ngx-charts-tree-map [labelFormatting]=\"labelFormat\"\n                             [results]=\"riskQuiz.relative_risks.graphed_rr\">\n        </ngx-charts-tree-map>\n\n        <table class=\"table table-responsive table-striped\">\n          <thead>\n          <tr>\n            <th>Study</th>\n            <th>Prevalence</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let leg of treemap_legend\" [style.background-color]=\"leg.color\">\n            <td>\n              {{leg.name}}\n            </td>\n            <td>\n              {{leg.value}}\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <!--\n      <div class=\"row\">\n        <pre>multiplicative_risks = {{riskQuiz.multiplicative_risks|json}}</pre>\n      </div>\n      <div class=\"row\">\n        <pre>relative_risks = {{riskQuiz.relative_risks|json}}</pre>\n      </div>\n      -->\n\n      <!--\n      <h4>Other charts</h4>\n\n      <div class=\"container-fluid\">\n        <div class=\"row justify-content-md-center\">\n          <div class=\"col\" *ngIf=\"show_pie_adv\">\n            <ngx-charts-advanced-pie-chart [view]=\"pieAdvDim\"\n                                           [scheme]=\"pieAdvColorScheme\"\n                                           [results]=\"pieAdvData\"\n                                           [gradient]=\"pieAdvGradient\"\n\n                                           (select)=\"pieAdvOnSelect($event)\">\n            </ngx-charts-advanced-pie-chart>\n            <!-- [total-label]=\"pieAdvLabel\" -->\n      <!--\n          </div>\n        </div>\n      </div>\n      -->\n\n      <h4>Notes</h4>\n      <ul *ngFor=\"let note of notes\">\n        <li>{{note}}</li>\n      </ul>\n      <ul>\n        <li [innerHTML]=\"html_of_last_note\"></li>\n      </ul>\n\n      <h4>References</h4>\n      <div [innerHTML]=\"html_of_all_refs\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.component.ts ***!
  \********************************************************************************/
/*! exports provided: RiskQuizFormSubmittedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskQuizFormSubmittedComponent", function() { return RiskQuizFormSubmittedComponent; });
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/index.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mathjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_gauge_dist_gauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-gauge/dist/gauge */ "./node_modules/ng-gauge/dist/gauge/fesm5/gauge.js");
/* harmony import */ var glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! glaucoma-risk-calculator-engine */ "./node_modules/glaucoma-risk-calculator-engine/index.js");
/* harmony import */ var glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _risk_quiz_form_risk_quiz_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../risk-quiz-form/risk-quiz.model */ "./src/app/risk-quiz-form/risk-quiz.model.ts");
/* harmony import */ var _api_risk_res_risk_res_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/risk_res/risk_res.service */ "./src/api/risk_res/risk_res.service.ts");
/* harmony import */ var _ms_auth_ms_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ms-auth/ms-auth.service */ "./src/app/ms-auth/ms-auth.service.ts");
/* harmony import */ var _colours__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colours */ "./src/app/colours.ts");
/* harmony import */ var _api_risk_stats_risk_stats_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api/risk_stats/risk-stats.service */ "./src/api/risk_stats/risk-stats.service.ts");
/* harmony import */ var _api_template_template_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api/template/template.service */ "./src/api/template/template.service.ts");
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// import { BsModalRef, BsModalService } from 'ngx-bootstrap';



mathjs__WEBPACK_IMPORTED_MODULE_0__["config"]({
    number: 'BigNumber',
    // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 5 // Number of significant digits for BigNumbers
});
var omit = function (obj, omitKeys) {
    return Object
        .keys(obj)
        .reduce(function (result, key) {
        if (omitKeys.indexOf(key) > -1)
            result[key] = obj[key];
        return result;
    }, {});
};
var RiskQuizFormSubmittedComponent = /** @class */ (function () {
    function RiskQuizFormSubmittedComponent(route, router, modalService, riskStatsService, riskResService, templateService, alertsService, msAuthService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.riskStatsService = riskStatsService;
        this.riskResService = riskResService;
        this.templateService = templateService;
        this.alertsService = alertsService;
        this.msAuthService = msAuthService;
        this.submitted = false;
        this.most_at_risk = '';
        this.isCollapsed = true;
        this.id = undefined;
        this.progressGraph = {
            bgRadius: 60,
            bgColor: _colours__WEBPACK_IMPORTED_MODULE_8__["colours"].indigo,
            rounded: false,
            reverse: false,
            animationSecs: 1,
            labels: [],
            segments: []
        };
        this.submittedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // <pie grid>
        this.colorScheme = { domain: [_colours__WEBPACK_IMPORTED_MODULE_8__["colours"].teal, _colours__WEBPACK_IMPORTED_MODULE_8__["colours"].darkred, _colours__WEBPACK_IMPORTED_MODULE_8__["colours"].gold, _colours__WEBPACK_IMPORTED_MODULE_8__["colours"].grey] };
        this.pieAdvColorScheme = this.colorScheme;
        // line, area
        this.autoScale = true;
        this.pieData = [];
        this.pieAdvDim = [700, 400];
        this.pieAdvData = [];
        this.pieAdvLabel = 'times more at risk';
        this.pieAdvGradient = true;
        // </advanced-pie-chart>
        this.pie_grid = false;
        this.show_pie_adv = false;
        this.added_risk = false;
        this.gauge = false;
        this.show_treemap = false;
        this.treemap_legend = [];
        this.submissionHeader = [];
        this.labelFormat = function (label) {
            var m = {
                'Chinese [Singapore: urban]': 'Chinese',
                'White European (Canadian; Italian; Irish; Welsh; Scottish)': 'White (Can.)',
                'White (Northern European: Australian)': 'White (Aus.)'
            };
            if (_this.treemap_legend.findIndex(function (o) { return o.color === label.data.fill; }) < 0)
                _this.treemap_legend.push({
                    color: label.data.fill,
                    name: label.data.data.name,
                    value: label.data.data.value
                });
            _this.treemap_legend.sort(function (a, b) { return a.value < b.value; });
            return m[label.data.data.name] || label.data.data.name;
        };
    }
    RiskQuizFormSubmittedComponent.prototype.redo = function () {
        this.submittedChange.emit(false);
        this.router
            .navigate(['/'])
            .catch(console.error);
    };
    RiskQuizFormSubmittedComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!(this.riskQuiz instanceof _risk_quiz_form_risk_quiz_model__WEBPACK_IMPORTED_MODULE_5__["RiskQuiz"]))
            this.riskQuiz = new _risk_quiz_form_risk_quiz_model__WEBPACK_IMPORTED_MODULE_5__["RiskQuiz"](this.riskQuiz);
        this.templateService
            .readBatch()
            .subscribe(function () { return _this.tweet.href = _this.templateService.getTpl('twitter'); });
    };
    RiskQuizFormSubmittedComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.submitted)
            this.prepareView();
        else
            this.route
                .params
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])(function (params) {
                _this.id = _this.riskResService.id = +params['id'];
                return _this.riskResService.read(_this.id);
            }))
                .subscribe(function (riskQuiz) {
                _this.riskQuiz = new _risk_quiz_form_risk_quiz_model__WEBPACK_IMPORTED_MODULE_5__["RiskQuiz"](riskQuiz);
                _this.submitted = true;
                _this.prepareView();
            });
    };
    RiskQuizFormSubmittedComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    RiskQuizFormSubmittedComponent.prototype.idWithUrl = function () {
        return _ms_auth_ms_auth_service__WEBPACK_IMPORTED_MODULE_7__["MsAuthService"].getHostOrigin() + "/results/" + this.id;
    };
    RiskQuizFormSubmittedComponent.prototype.onPieGridSelect = function (event) {
        console.log(event);
    };
    RiskQuizFormSubmittedComponent.prototype.pieAdvOnSelect = function (event) {
        console.log(event);
    };
    RiskQuizFormSubmittedComponent.prototype.sendEmail = function (recipient) {
        var _this = this;
        this.msAuthService
            .remoteSendEmail(this.id, {
            recipient: recipient,
            subject: this.templateService.getTpl('email_subject'),
            content: this.templateService.getTpl('email') + " " + this.share_url
        })
            .subscribe(function (email) { return console.info('RiskQuizFormSubmittedComponent::sendEmail::email', email) || _this.alertsService.add({
            type: 'info', msg: 'Sent email'
        }); }, console.error);
        this.modalRef.close();
    };
    RiskQuizFormSubmittedComponent.prototype.gaugeView = function (risk_pc, risk_pc_as_s) {
        this.progressGraph.labels.push(new ng_gauge_dist_gauge__WEBPACK_IMPORTED_MODULE_3__["GaugeLabel"]({
            color: _colours__WEBPACK_IMPORTED_MODULE_8__["colours"].white,
            text: 'risk',
            x: 0,
            y: 20,
            fontSize: '1em'
        }), new ng_gauge_dist_gauge__WEBPACK_IMPORTED_MODULE_3__["GaugeLabel"]({
            color: Object(_colours__WEBPACK_IMPORTED_MODULE_8__["numToColour"])(risk_pc),
            text: risk_pc_as_s,
            x: 0,
            y: 0,
            fontSize: '2em'
        }));
        this.progressGraph.segments.push(new ng_gauge_dist_gauge__WEBPACK_IMPORTED_MODULE_3__["GaugeSegment"]({
            value: risk_pc,
            color: Object(_colours__WEBPACK_IMPORTED_MODULE_8__["numToColour"])(risk_pc),
            borderWidth: 20
        }));
        this.gauge = true;
    };
    RiskQuizFormSubmittedComponent.prototype.pieAdvView = function (multiplicative_risks) {
        this.pieAdvData = Object
            .keys(multiplicative_risks)
            .map(function (k) { return ({ name: k, value: multiplicative_risks[k] }); })
            .filter(function (o) { return o.value > 1; });
        this.show_pie_adv = this.added_risk = this.riskQuiz.riskQuiz.sibling || this.riskQuiz.riskQuiz.parent;
    };
    // modal
    RiskQuizFormSubmittedComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.open(template);
        // = this.modalService.show(template, { class: 'modal-sm' });
        this.modalRef.componentInstance.name = 'World';
    };
    RiskQuizFormSubmittedComponent.prototype.prepareView = function () {
        var _this = this;
        this.submissionHeader = Object
            .keys(this.riskQuiz.riskQuiz)
            .filter(function (k) { return ['createdAt', 'updatedAt', 'id', 'client_risk'].indexOf(k) === -1; });
        this.submissionRow =
            Object
                .keys(this.riskQuiz.riskQuiz)
                .map(function (k) {
                return (_a = {}, _a[k] = _this.riskQuiz.riskQuiz[k] != null ? _this.riskQuiz.riskQuiz[k] : false, _a);
                var _a;
            })
                .reduce(function (a, b) { return Object.assign(a, b); }, {});
        this.riskStatsService
            .read('latest')
            .subscribe(function (content) {
            _this.riskStatsService.risk_json = content.risk_json;
            try {
                _this.riskQuiz.calcRisk(_this.riskStatsService.risk_json);
            }
            catch (e) {
                _this.router
                    .navigate(['/'])
                    .catch(console.error);
            }
            _this.html_of_all_refs = JSON.parse(_this.riskStatsService.risk_json.html_of_all_refs);
            _this.html_of_last_note = _this.riskStatsService.risk_json.global_notes.pop();
            _this.notes = _this.riskStatsService.risk_json.global_notes;
            _this.riskStatsService.risk = _this.riskQuiz.risk;
            _this.riskQuiz.ref = _this.riskStatsService.risk_json.studies[_this.riskQuiz.study].ref;
            // this.riskQuiz.prepareRef();
            var fam_risk = Object(glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_4__["familial_risks_from_study"])(_this.riskStatsService.risk_json, _this.riskQuiz.toJSON());
            var risk_pc = (function (pc) { return ((function (r) { return r > 100 ? 100 : r; })(fam_risk.reduce(function (a, b) { return a + b; }, 1) + pc)); })(mathjs__WEBPACK_IMPORTED_MODULE_0__["multiply"](mathjs__WEBPACK_IMPORTED_MODULE_0__["divide"](_this.riskQuiz.risks.lastIndexOf(_this.riskQuiz.risk) + 1, _this.riskQuiz.risks.length), 100));
            // const risk_pc = get_risk_pc.call(this);
            var risk_pc_as_s = (function (_risk_pc) {
                switch (true) {
                    case mathjs__WEBPACK_IMPORTED_MODULE_0__["smallerEq"](_risk_pc, 25):
                        return 'least';
                    case mathjs__WEBPACK_IMPORTED_MODULE_0__["smallerEq"](_risk_pc, 50):
                        return 'average';
                    case mathjs__WEBPACK_IMPORTED_MODULE_0__["smallerEq"](_risk_pc, 75):
                        return '2nd greatest';
                    case mathjs__WEBPACK_IMPORTED_MODULE_0__["larger"](_risk_pc, 75):
                    default:
                        return 'greatest';
                }
            })(risk_pc);
            /*math.format(risk_pc, 6)*/
            /*(fmt_s => `${fmt_s.lastIndexOf('.') > -1 && fmt_s.length > 3 ? fmt_s.slice(0, -1) : risk_pc}%`)(
             math.format(risk_pc, 6)
             )*/
            _this.most_at_risk =
                _this.riskQuiz.risks.lastIndexOf(_this.riskQuiz.risk) + 1 + " / " + _this.riskQuiz.risks.length;
            _this.riskQuiz.relative_risks = Object(glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_4__["calc_relative_risk"])(_this.riskStatsService.risk_json, _this.riskQuiz.riskQuiz);
            _this.show_treemap = true;
            _this.gaugeView(risk_pc, risk_pc_as_s);
            _this.pieAdvView(_this.riskQuiz.multiplicative_risks);
            _this.riskQuiz.client_risk = +risk_pc.toPrecision(4);
            _this.recommendation = 'We recommend you see an eye-health professional ';
            if (risk_pc <= 25) {
                _this.recommendation += ' in the next two years.';
                _this.recommendation_subtitle = 'Unless you\'ve seen one in the last 2 years';
            }
            else if (risk_pc <= 50) {
                _this.recommendation += ' in the next year.';
                _this.recommendation_subtitle = 'Unless you\'ve seen one in the last year';
            }
            else if (risk_pc <= 75) {
                _this.recommendation += ' in the next 6 months.';
                _this.recommendation_subtitle = 'Unless you\'ve seen one recently.';
            }
            else {
                _this.recommendation += ' ASAP.';
                _this.recommendation_subtitle = 'Unless you\'ve seen one recently.';
            }
            if (_this.id == null)
                _this.riskResService
                    .create(_this.riskQuiz.toJSON())
                    .subscribe(function (r) {
                    _this.id = _this.riskResService.id = r.id;
                    _this.share_url = _this.idWithUrl();
                }, console.error);
            else
                _this.share_url = _this.idWithUrl();
        }, console.error);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tweet'),
        __metadata("design:type", HTMLAnchorElement)
    ], RiskQuizFormSubmittedComponent.prototype, "tweet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", _risk_quiz_form_risk_quiz_model__WEBPACK_IMPORTED_MODULE_5__["RiskQuiz"])
    ], RiskQuizFormSubmittedComponent.prototype, "riskQuiz", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], RiskQuizFormSubmittedComponent.prototype, "submitted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], RiskQuizFormSubmittedComponent.prototype, "submittedChange", void 0);
    RiskQuizFormSubmittedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-risk-quiz-form-submitted',
            template: __webpack_require__(/*! ./risk-quiz-form-submitted.component.html */ "./src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.component.html"),
            styles: [__webpack_require__(/*! ./risk-quiz-form-submitted.component.css */ "./src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModal"],
            _api_risk_stats_risk_stats_service__WEBPACK_IMPORTED_MODULE_9__["RiskStatsService"],
            _api_risk_res_risk_res_service__WEBPACK_IMPORTED_MODULE_6__["RiskResService"],
            _api_template_template_service__WEBPACK_IMPORTED_MODULE_10__["TemplateService"],
            _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_11__["AlertsService"],
            _ms_auth_ms_auth_service__WEBPACK_IMPORTED_MODULE_7__["MsAuthService"]])
    ], RiskQuizFormSubmittedComponent);
    return RiskQuizFormSubmittedComponent;
}());



/***/ }),

/***/ "./src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.routes.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.routes.ts ***!
  \*****************************************************************************/
/*! exports provided: riskQuizFormSubmittedRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riskQuizFormSubmittedRoutes", function() { return riskQuizFormSubmittedRoutes; });
/* harmony import */ var _risk_quiz_form_submitted_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./risk-quiz-form-submitted.component */ "./src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.component.ts");

var riskQuizFormSubmittedRoutes = [
    { path: 'results', component: _risk_quiz_form_submitted_component__WEBPACK_IMPORTED_MODULE_0__["RiskQuizFormSubmittedComponent"] },
    { path: 'results/:id', component: _risk_quiz_form_submitted_component__WEBPACK_IMPORTED_MODULE_0__["RiskQuizFormSubmittedComponent"] }
];


/***/ }),

/***/ "./src/app/risk-quiz-form/risk-quiz-form.component.css":
/*!*************************************************************!*\
  !*** ./src/app/risk-quiz-form/risk-quiz-form.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "legend {\n  font-size: medium;\n  font-weight: bold;\n}\n\n.form-check-label {\n  font-weight: unset;\n}\n\nlabel, .label {\n  font-weight: bold;\n}\n\n.btn:not(:disabled):not(.disabled) {\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/risk-quiz-form/risk-quiz-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/risk-quiz-form/risk-quiz-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main *ngIf=\"!submitted\">\n  <h5>Complete the following to calculate your risk of developing glaucoma, and what to do about it.</h5>\n\n  <form [formGroup]=\"riskForm\" *ngIf=\"active\" (ngSubmit)=\"onSubmit()\">\n    <span class=\"form-check-label label\" style=\"padding-left: 0\">Gender</span>\n    <fieldset class=\"form-group\" id=\"gender\" name=\"gender\">\n      <div class=\"form-check\">\n        <label class=\"form-check-label\">\n          <input type=\"radio\" class=\"form-check-input\" name=\"gender\" id=\"male\" value=\"male\"\n                 formControlName=\"gender\" tabindex=\"0\">\n          Male\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <label class=\"form-check-label\">\n          <input type=\"radio\" class=\"form-check-input\" name=\"gender\" id=\"female\" value=\"female\"\n                 formControlName=\"gender\">\n          Female\n        </label>\n      </div>\n      <div *ngIf=\"formErrors.gender\" class=\"alert alert-danger\">\n        {{ formErrors.gender }}\n      </div>\n    </fieldset>\n\n    <div class=\"form-group\">\n      <label for=\"age\">Age</label>\n      <input type=\"number\" id=\"age\" class=\"form-control\"\n             formControlName=\"age\" placeholder=\"Specify age\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"ethnicity\">Ethnicity</label>\n      <ng-select [items]=\"ethnicities\"\n                 (selected)=\"selected_ethnicity($event)\"\n                 (data)=\"selected_ethnicity($event)\"\n                 (close)=\"doClose()\"\n                 id=\"ethnicity\" formControlName=\"ethnicity\"\n                 placeholder=\"Search for ethnicity\">\n      </ng-select>\n    </div>\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <fieldset class=\"col-sm\">\n          <legend>Family history of glaucoma</legend>\n\n          <div class=\"form-check form-check-inline container\">\n            <div class=\"row\">\n              <label class=\"form-check-label col col-sm\">\n                Parent\n                <input class=\"form-control form-check-input\" type=\"checkbox\" id=\"parent\" formControlName=\"parent\">\n              </label>\n              <label class=\"form-check-label col col-sm\">\n                Sibling\n                <input class=\"form-control form-check-input\" type=\"checkbox\" id=\"sibling\" formControlName=\"sibling\">\n              </label>\n            </div>\n          </div>\n        </fieldset>\n\n        <fieldset class=\"col-sm\">\n          <legend>Other health issues</legend>\n\n          <div class=\"form-check form-check-inline container\">\n            <div class=\"row\">\n              <label class=\"form-check-label col col-sm\">\n                Myopia\n                <input class=\"form-control form-check-input\" type=\"checkbox\" id=\"myopia\" formControlName=\"myopia\">\n              </label>\n              <label class=\"form-check-label col col-sm\">\n                Diabetes\n                <input class=\"form-control form-check-input\" type=\"checkbox\" id=\"diabetes\" formControlName=\"diabetes\">\n              </label>\n            </div>\n          </div>\n        </fieldset>\n\n        <div class=\"col-sm\" style=\"padding-top: 15px\">\n          <button type=\"submit\" class=\"submit btn \" style=\"width: 100%; height: 100%\"\n                  [class.btn-primary]=\"riskForm.valid\"\n                  [class.btn-outline-secondary]=\"!riskForm.valid\"\n                  [disabled]=\"!riskForm.valid\">\n            Calculate risk\n          </button>\n        </div>\n      </div>\n    </div>\n  </form>\n</main>\n\n<app-risk-quiz-form-submitted [riskQuiz]=\"riskQuiz\" [(submitted)]=\"submitted\" *ngIf=\"submitted\">\n</app-risk-quiz-form-submitted>\n"

/***/ }),

/***/ "./src/app/risk-quiz-form/risk-quiz-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/risk-quiz-form/risk-quiz-form.component.ts ***!
  \************************************************************/
/*! exports provided: RiskQuizFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskQuizFormComponent", function() { return RiskQuizFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glaucoma-risk-calculator-engine */ "./node_modules/glaucoma-risk-calculator-engine/index.js");
/* harmony import */ var glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_risk_stats_risk_stats_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/risk_stats/risk-stats.service */ "./src/api/risk_stats/risk-stats.service.ts");
/* harmony import */ var _risk_quiz_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./risk-quiz.model */ "./src/app/risk-quiz-form/risk-quiz.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RiskQuizFormComponent = /** @class */ (function () {
    function RiskQuizFormComponent(fb, riskStatsService) {
        this.fb = fb;
        this.riskStatsService = riskStatsService;
        this.riskQuiz = new _risk_quiz_model__WEBPACK_IMPORTED_MODULE_4__["RiskQuiz"]({});
        this.submitted = false;
        this.isCopied = false;
        // TODO: Workaround until NgForm has a reset method (#6822)
        this.active = true;
        this.formErrors = {
            gender: '',
            age: '',
            ethnicity: '',
            myopia: '',
            diabetes: ''
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
        this.doClose = function () { return document.getElementById('parent').focus(); };
    }
    RiskQuizFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.riskStatsService.read('latest').subscribe(function (content) {
            _this.riskStatsService.risk_json = content.risk_json;
            _this.ethnicity2study = Object(glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_2__["ethnicity2study"])(_this.riskStatsService.risk_json);
            _this.all_ethnicities = _this.ethnicities = Object.keys(_this.ethnicity2study).sort();
        }, console.error);
    };
    RiskQuizFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    RiskQuizFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.riskForm.value.ethnicity != null && this.riskForm.value.ethnicity.length && this.riskForm.value.ethnicity instanceof Array)
            this.riskForm.value.ethnicity = this.riskForm.value.ethnicity[0].id;
        this.riskQuiz = new _risk_quiz_model__WEBPACK_IMPORTED_MODULE_4__["RiskQuiz"](this.riskForm.value);
    };
    RiskQuizFormComponent.prototype.addRisk = function () {
        var _this = this;
        this.riskQuiz = new _risk_quiz_model__WEBPACK_IMPORTED_MODULE_4__["RiskQuiz"]({});
        this.buildForm();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    RiskQuizFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.riskForm = this.fb.group({
            age: [this.riskQuiz.riskQuiz.age, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            gender: [this.riskQuiz.riskQuiz.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ethnicity: [this.riskQuiz.riskQuiz.ethnicity, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sibling: [this.riskQuiz.riskQuiz.sibling],
            parent: [this.riskQuiz.riskQuiz.parent],
            myopia: [this.riskQuiz.riskQuiz.myopia],
            diabetes: [this.riskQuiz.riskQuiz.diabetes]
        });
        this.riskForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    RiskQuizFormComponent.prototype.onValueChanged = function (data) {
        if (!this.riskForm)
            return;
        var form = this.riskForm;
        var hasError = false;
        for (var field in this.formErrors)
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key))
                            this.formErrors[field] += messages[key] + ' ';
                    }
                    hasError = true;
                }
            }
        // if (!hasError) this.riskQuiz.calcRisk(risk_json)
    };
    RiskQuizFormComponent.prototype.selected_ethnicity = function (ethnicity) {
        if (ethnicity == null || !ethnicity.length)
            return;
        this.riskQuiz.riskQuiz.ethnicity = this.riskForm.value.ethnicity = ethnicity[0].id;
    };
    RiskQuizFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-risk-quiz-form',
            template: __webpack_require__(/*! ./risk-quiz-form.component.html */ "./src/app/risk-quiz-form/risk-quiz-form.component.html"),
            styles: [__webpack_require__(/*! ./risk-quiz-form.component.css */ "./src/app/risk-quiz-form/risk-quiz-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _api_risk_stats_risk_stats_service__WEBPACK_IMPORTED_MODULE_3__["RiskStatsService"]])
    ], RiskQuizFormComponent);
    return RiskQuizFormComponent;
}());



/***/ }),

/***/ "./src/app/risk-quiz-form/risk-quiz-form.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/risk-quiz-form/risk-quiz-form.module.ts ***!
  \*********************************************************/
/*! exports provided: RiskQuizFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskQuizFormModule", function() { return RiskQuizFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var ng_gauge_dist_gauge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-gauge/dist/gauge */ "./node_modules/ng-gauge/dist/gauge/fesm5/gauge.js");
/* harmony import */ var _api_risk_stats_risk_stats_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api/risk_stats/risk-stats.service */ "./src/api/risk_stats/risk-stats.service.ts");
/* harmony import */ var _api_risk_res_risk_res_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../api/risk_res/risk_res.service */ "./src/api/risk_res/risk_res.service.ts");
/* harmony import */ var _risk_quiz_form_submitted_risk_quiz_form_submitted_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../risk-quiz-form-submitted/risk-quiz-form-submitted.component */ "./src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.component.ts");
/* harmony import */ var _risk_quiz_form_submitted_risk_quiz_form_submitted_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../risk-quiz-form-submitted/risk-quiz-form-submitted.routes */ "./src/app/risk-quiz-form-submitted/risk-quiz-form-submitted.routes.ts");
/* harmony import */ var _risk_pointer_risk_pointer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../risk-pointer/risk-pointer.component */ "./src/app/risk-pointer/risk-pointer.component.ts");
/* harmony import */ var _risk_quiz_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./risk-quiz-form.component */ "./src/app/risk-quiz-form/risk-quiz-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var RiskQuizFormModule = /** @class */ (function () {
    function RiskQuizFormModule() {
    }
    RiskQuizFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_risk_quiz_form_submitted_risk_quiz_form_submitted_routes__WEBPACK_IMPORTED_MODULE_13__["riskQuizFormSubmittedRoutes"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCollapseModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeaheadModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalModule"].forRoot(),
                ng_gauge_dist_gauge__WEBPACK_IMPORTED_MODULE_9__["GaugeModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"]
            ],
            providers: [_api_risk_stats_risk_stats_service__WEBPACK_IMPORTED_MODULE_10__["RiskStatsService"], _api_risk_res_risk_res_service__WEBPACK_IMPORTED_MODULE_11__["RiskResService"]],
            declarations: [
                _risk_quiz_form_component__WEBPACK_IMPORTED_MODULE_15__["RiskQuizFormComponent"], _risk_quiz_form_submitted_risk_quiz_form_submitted_component__WEBPACK_IMPORTED_MODULE_12__["RiskQuizFormSubmittedComponent"], _risk_pointer_risk_pointer_component__WEBPACK_IMPORTED_MODULE_14__["RiskPointerComponent"]
            ],
            exports: [_risk_quiz_form_component__WEBPACK_IMPORTED_MODULE_15__["RiskQuizFormComponent"]]
        })
    ], RiskQuizFormModule);
    return RiskQuizFormModule;
}());



/***/ }),

/***/ "./src/app/risk-quiz-form/risk-quiz.model.ts":
/*!***************************************************!*\
  !*** ./src/app/risk-quiz-form/risk-quiz.model.ts ***!
  \***************************************************/
/*! exports provided: RiskQuiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskQuiz", function() { return RiskQuiz; });
/* harmony import */ var glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glaucoma-risk-calculator-engine */ "./node_modules/glaucoma-risk-calculator-engine/index.js");
/* harmony import */ var glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_0__);

var RiskQuiz = /** @class */ (function () {
    function RiskQuiz(riskQuiz) {
        this.riskQuiz = riskQuiz;
    }
    RiskQuiz.prototype.calcRisk = function (risk_json) {
        this.study = Object(glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_0__["ethnicity2study"])(risk_json)[this.riskQuiz.ethnicity];
        var input = {
            study: this.study,
            age: this.riskQuiz.age,
            gender: this.riskQuiz.gender
        };
        this.risk = +Object(glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_0__["risk_from_study"])(risk_json, input).toPrecision(4);
        this.risks = Object(glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_0__["risks_from_study"])(risk_json, input);
        this.multiplicative_risks = Object(glaucoma_risk_calculator_engine__WEBPACK_IMPORTED_MODULE_0__["calc_default_multiplicative_risks"])(risk_json, {
            age: this.riskQuiz.age,
            diabetes: this.riskQuiz.diabetes,
            myopia: this.riskQuiz.myopia,
            family_history: this.riskQuiz.sibling || this.riskQuiz.parent
        });
    };
    RiskQuiz.prototype.toJSON = function () {
        return {
            age: this.riskQuiz.age,
            gender: this.riskQuiz.gender,
            ethnicity: this.riskQuiz.ethnicity,
            study: this.study,
            parent: this.riskQuiz.parent,
            sibling: this.riskQuiz.sibling,
            myopia: this.riskQuiz.myopia,
            diabetes: this.riskQuiz.diabetes,
            client_risk: this.client_risk
        };
    };
    return RiskQuiz;
}());



/***/ }),

/***/ "./src/app/server-status/server-status.component.css":
/*!***********************************************************!*\
  !*** ./src/app/server-status/server-status.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/server-status/server-status.component.html":
/*!************************************************************!*\
  !*** ./src/app/server-status/server-status.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"serverStatus.version\">\n  {{serverStatus.version}}\n</ng-container>\n"

/***/ }),

/***/ "./src/app/server-status/server-status.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/server-status/server-status.component.ts ***!
  \**********************************************************/
/*! exports provided: ServerStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStatusComponent", function() { return ServerStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_server_status_server_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/server-status/server-status.service */ "./src/api/server-status/server-status.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerStatusComponent = /** @class */ (function () {
    function ServerStatusComponent(serverStatusService) {
        this.serverStatusService = serverStatusService;
        this.serverStatus = {};
    }
    ServerStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverStatus = { version: 'App 0.0.36; ' };
        this.serverStatusService
            .get()
            .subscribe(function (serverStatus) { return _this.serverStatus.version += "API " + serverStatus.version; }, function () { return _this.serverStatus.version += 'API server not available'; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ServerStatusComponent.prototype, "serverStatus", void 0);
    ServerStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-api-version',
            template: __webpack_require__(/*! ./server-status.component.html */ "./src/app/server-status/server-status.component.html"),
            styles: [__webpack_require__(/*! ./server-status.component.css */ "./src/app/server-status/server-status.component.css")]
        }),
        __metadata("design:paramtypes", [_api_server_status_server_status_service__WEBPACK_IMPORTED_MODULE_1__["ServerStatusService"]])
    ], ServerStatusComponent);
    return ServerStatusComponent;
}());



/***/ }),

/***/ "./src/app/server-status/server-status.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/server-status/server-status.module.ts ***!
  \*******************************************************/
/*! exports provided: ServerStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStatusModule", function() { return ServerStatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _api_server_status_server_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/server-status/server-status.service */ "./src/api/server-status/server-status.service.ts");
/* harmony import */ var _server_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-status.component */ "./src/app/server-status/server-status.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServerStatusModule = /** @class */ (function () {
    function ServerStatusModule() {
    }
    ServerStatusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: [_api_server_status_server_status_service__WEBPACK_IMPORTED_MODULE_2__["ServerStatusService"]],
            declarations: [_server_status_component__WEBPACK_IMPORTED_MODULE_3__["ServerStatusComponent"]],
            exports: [_server_status_component__WEBPACK_IMPORTED_MODULE_3__["ServerStatusComponent"]]
        })
    ], ServerStatusModule);
    return ServerStatusModule;
}());



/***/ }),

/***/ "./src/app/template/template.component.css":
/*!*************************************************!*\
  !*** ./src/app/template/template.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red-border {\n  border: solid 0.1em red !important;\n}\n\n.btn-info.disabled, .btn-info:disabled {\n  background-color: darkgrey;\n  border-color: #9E9E9E;\n}\n"

/***/ }),

/***/ "./src/app/template/template.component.html":
/*!**************************************************!*\
  !*** ./src/app/template/template.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-richtext [elementId]=\"'contents'\" (whenEdited)=\"onEdited($event)\" #editor>\n</app-richtext>\n\n<form class=\"form-group\" [formGroup]=\"form\">\n  <label for=\"email_subject\">Email subject</label>\n  <input placeholder=\"Email subject\" id=\"email_subject\" name=\"email_subject\" formControlName=\"email_subject\"\n         class=\"form-control\" required/>\n\n  <label for=\"twitter\">Twitter</label>\n  <textarea class=\"form-control\" [ngClass]=\"{'red-border': !validTwitterLength()}\"\n            placeholder=\"Twitter\" id=\"twitter\" formControlName=\"twitter\" required>\n  </textarea>\n  <small class=\"form-text text-muted\">\n    <code [ngClass]=\"{'text-muted': validTwitterLength()}\">{{form.value.twitter.length}}</code> characters\n  </small>\n\n  <label for=\"facebook\">Facebook</label>\n  <textarea class=\"form-control\" placeholder=\"Facebook\" id=\"facebook\" formControlName=\"facebook\" required></textarea>\n  <small class=\"form-text text-muted\">\n    <code class=\"text-muted\">{{form.value.facebook.length}}</code> characters\n  </small>\n\n  <button type=\"submit\" class=\"btn btn-info btn-lg\" style=\"margin-top: 1em\"\n          (click)=\"save()\" [disabled]=\"!validTwitterLength() || !form.valid\">\n    Save\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/template/template.component.ts":
/*!************************************************!*\
  !*** ./src/app/template/template.component.ts ***!
  \************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_template_template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/template/template.service */ "./src/api/template/template.service.ts");
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
/* harmony import */ var _richtext_richtext_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../richtext/richtext.component */ "./src/app/richtext/richtext.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TemplateComponent = /** @class */ (function () {
    function TemplateComponent(fb, alertsService, templateService) {
        this.fb = fb;
        this.alertsService = alertsService;
        this.templateService = templateService;
        this.form = this.fb.group({
            email_subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            twitter: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(240)]],
            facebook: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    TemplateComponent.prototype.ngOnInit = function () {
    };
    TemplateComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.templateService
            .readBatch()
            .subscribe(function () {
            var values = Array.from(_this.templateService.templates.keys())
                .filter(function (kind) { return kind !== 'email'; })
                .reduce(function (obj, kind) {
                return Object.assign(obj, (_a = {}, _a[kind] = _this.templateService.getTpl(kind), _a));
                var _a;
            }, {});
            if (Object.keys(values).length) {
                _this.editor.setValue(_this.templateService.getTpl('email'));
                _this.form.setValue(values);
            }
        });
    };
    TemplateComponent.prototype.save = function () {
        // novalidate [ngClass]="{'was-validated': (form.touched || form.dirty) && !form.valid }"
        var _this = this;
        var now = new Date().toISOString();
        var templates = [
            {
                contents: this.templateService.getTpl('email'),
                kind: 'email',
                createdAt: now
            }
        ].concat(Object
            .keys(this.form.value)
            .map(function (k) { return ({ kind: k, contents: _this.form.value[k], createdAt: now }); }));
        // reactive forms should validate, but doesn't, so here is a hack:
        var invalid = false;
        for (var _i = 0, templates_1 = templates; _i < templates_1.length; _i++) {
            var template = templates_1[_i];
            if ((!template.contents || template.contents.length < 1)) {
                if (template.kind !== 'email')
                    this.form.controls[template.kind].setErrors({ 'incorrect': true });
                else
                    this.editor.form.setErrors({ 'incorrect': true });
                invalid = true;
            }
        }
        if (invalid) {
            this.form.markAsDirty();
            this.alertsService.add({ type: 'warning', msg: 'Add template for each' });
        }
        else
            this.tplBatchCreate(templates, function (err, created_templates) {
                if (err != null)
                    _this.alertsService.add(err);
                else
                    _this.alertsService.add({ type: 'info', msg: 'Updated templates' });
            });
    };
    ;
    TemplateComponent.prototype.tplCreate = function (new_template, cb) {
        var _this = this;
        if (new_template == null)
            return cb(new TypeError('new_template must be defined'));
        this.templateService
            .create(new_template)
            .subscribe(function (template) { return _this.handleTemplate(template, template.kind, cb); }, this.handleError.bind(this));
    };
    ;
    TemplateComponent.prototype.tplBatchCreate = function (new_templates, cb) {
        var _this = this;
        if (new_templates == null)
            return cb(new TypeError('new_templates must be defined'));
        this.templateService
            .createBatch(new_templates)
            .subscribe(function (templates) {
            templates.templates
                .forEach(function (template) { return _this.handleTemplate(template, template.kind); });
            return cb(void 0, templates);
        }, cb);
    };
    ;
    TemplateComponent.prototype.tplRead = function (createdAt, kind, cb) {
        var _this = this;
        this.templateService.read(createdAt, kind)
            .subscribe(function (template) {
            _this.templateService.templates.set(kind, template);
            return cb(void 0, template);
        }, function (error) {
            _this.alertsService.add({ type: 'warning', msg: error });
            return cb(error);
        });
    };
    ;
    TemplateComponent.prototype.onEdited = function (content) {
        this.templateService.setTpl(content);
    };
    TemplateComponent.prototype.init = function (kind) {
        var _this = this;
        this.tplRead('latest', kind, function (err, template) {
            return !err && template && _this.editor.patchValue(template.contents);
        });
    };
    TemplateComponent.prototype.handleTemplate = function (template, kind, cb) {
        this.templateService.templates.set(kind, template);
        if (cb)
            return cb(void 0, template);
    };
    /* // Would be better to not update, in case drafts are introduced
    tplUpdate(new_template: ITemplateBase) {
      new_template.createdAt = this.templateService.templates.createdAt;
  
      this.templateService
        .update(
          Object.assign({ updatedAt: new Date() }, this.templateService.templates),
          new_template)
        .subscribe(this.handleTemplate, this.handleError.bind(this))
    }*/
    TemplateComponent.prototype.tplDestroy = function (createdAt) {
        this.templateService
            .destroy(createdAt)
            .subscribe(function (_) { return _; }, this.handleError.bind(this));
    };
    TemplateComponent.prototype.handleError = function (error) {
        this.alertsService.add({ type: 'warning', msg: error });
    };
    TemplateComponent.prototype.validTwitterLength = function () {
        return this.form.value.twitter.length < 240;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editor'),
        __metadata("design:type", _richtext_richtext_component__WEBPACK_IMPORTED_MODULE_4__["RichTextComponent"])
    ], TemplateComponent.prototype, "editor", void 0);
    TemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template',
            template: __webpack_require__(/*! ./template.component.html */ "./src/app/template/template.component.html"),
            styles: [__webpack_require__(/*! ./template.component.css */ "./src/app/template/template.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_3__["AlertsService"],
            _api_template_template_service__WEBPACK_IMPORTED_MODULE_2__["TemplateService"]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/app/template/template.module.ts":
/*!*********************************************!*\
  !*** ./src/app/template/template.module.ts ***!
  \*********************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _richtext_richtext_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../richtext/richtext.module */ "./src/app/richtext/richtext.module.ts");
/* harmony import */ var _template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.component */ "./src/app/template/template.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TemplateModule = /** @class */ (function () {
    function TemplateModule() {
    }
    TemplateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _richtext_richtext_module__WEBPACK_IMPORTED_MODULE_3__["RichTextModule"]
            ],
            declarations: [_template_component__WEBPACK_IMPORTED_MODULE_4__["TemplateComponent"]],
            exports: [_template_component__WEBPACK_IMPORTED_MODULE_4__["TemplateComponent"]]
        })
    ], TemplateModule);
    return TemplateModule;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <input *ngIf=\"config.filtering\" placeholder=\"Filter all columns\"\n           [ngTableFiltering]=\"config.filtering\"\n           class=\"form-control\"\n           (tableChanged)=\"onChangeTable(config)\"/>\n  </div>\n</div>\n<br>\n<ng-table [config]=\"config\"\n          (tableChanged)=\"onChangeTable(config)\"\n          (cellClicked)=\"onCellClick($event)\"\n          [rows]=\"users\" [columns]=\"columns\">\n</ng-table>\n<ng-container *ngIf=\"config.paging && page !== numPages\">\n  <ngb-pagination\n    class=\"pagination-sm\"\n    [(ngModel)]=\"page\"\n    [collectionSize]=\"length\"\n    [pageSize]=\"itemsPerPage\"\n    [maxSize]=\"maxSize\"\n    [boundaryLinks]=\"true\"\n    [rotate]=\"false\"\n    (pageChanged)=\"onChangeTable(config, $event)\"\n    (numPages)=\"numPages = $event\">\n  </ngb-pagination>\n  <pre *ngIf=\"config.paging\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</pre>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/user/user.service */ "./src/api/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.columns = [
            { title: 'email', name: 'email', filtering: { filterString: '', placeholder: 'Filter by email' } },
            { title: 'updatedAt', className: ['office-header', 'text-success'], name: 'updatedAt', sort: 'asc' },
            { title: 'createdAt.', name: 'createdAt' }
        ];
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-striped', 'table-bordered']
        };
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) { return user.users; }))
            .subscribe(function (users) { return _this.users = users; }, console.error);
        this.onChangeTable(this.config);
    };
    UsersComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.users; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    UsersComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    UsersComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString))
                    flag = true;
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    UsersComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.users, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.users = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    UsersComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_api_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-table/ng2-table */ "./node_modules/ng2-table/ng2-table.js");
/* harmony import */ var ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _dashboard_dashboard_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/dashboard.routes */ "./src/app/dashboard/dashboard.routes.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _api_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/user/user.service */ "./src/api/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_dashboard_dashboard_routes__WEBPACK_IMPORTED_MODULE_6__["dashboardRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabsetModule"], ng2_table_ng2_table__WEBPACK_IMPORTED_MODULE_4__["Ng2TableModule"]
            ],
            providers: [_api_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]],
            declarations: [_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: redirUrlOr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirUrlOr", function() { return redirUrlOr; });
var redirUrlOr = function (str) {
    return new URLSearchParams(window.location.search.slice(1)).get('redirectUrl') || str;
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samuel/repos/glaucoma-australia/glaucoma-risk-calculator-web-frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map