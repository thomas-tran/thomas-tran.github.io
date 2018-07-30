(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _upload_demo_upload_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upload-demo/upload-demo.component */ "./src/app/upload-demo/upload-demo.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-material-file-input */ "./node_modules/ngx-material-file-input/fesm5/ngx-material-file-input.js");
/* harmony import */ var _message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./message-dialog/message-dialog.component */ "./src/app/message-dialog/message-dialog.component.ts");
/* harmony import */ var _upload_sign_upload_sign_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./upload-sign/upload-sign.component */ "./src/app/upload-sign/upload-sign.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'upload-demo', component: _upload_demo_upload_demo_component__WEBPACK_IMPORTED_MODULE_8__["UploadDemoComponent"] },
    { path: 'upload-sign', component: _upload_sign_upload_sign_component__WEBPACK_IMPORTED_MODULE_14__["UploadSignComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _upload_demo_upload_demo_component__WEBPACK_IMPORTED_MODULE_8__["UploadDemoComponent"],
                _message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_13__["MessageDialogComponent"],
                _upload_sign_upload_sign_component__WEBPACK_IMPORTED_MODULE_14__["UploadSignComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ngx_material_file_input__WEBPACK_IMPORTED_MODULE_12__["MaterialFileInputModule"]
            ],
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: true } }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            //Need this for Material dialog
            entryComponents: [
                _message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_13__["MessageDialogComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/message-dialog/message-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/message-dialog/message-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Message</h2>\r\n<mat-dialog-content>\r\n    {{data.result.message}} \r\n     <br /> {{data.result.value}}\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <button mat-raised-button color=\"primary\" mat-dialog-close>OK</button>\r\n\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/message-dialog/message-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/message-dialog/message-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: MessageDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDialogComponent", function() { return MessageDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MessageDialogComponent = /** @class */ (function () {
    function MessageDialogComponent(data) {
        this.data = data;
    }
    MessageDialogComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    MessageDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'message-dialog-component',
            template: __webpack_require__(/*! ./message-dialog.component.html */ "./src/app/message-dialog/message-dialog.component.html"),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], MessageDialogComponent);
    return MessageDialogComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav\r\n    #drawer\r\n    class=\"sidenav\"\r\n    fixedInViewport=\"true\"\r\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n    [opened]=\"!(isHandset$ | async)\">\r\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item routerLink=\"/upload-demo\">Upload demo 1</a>\r\n      <a mat-list-item routerLink=\"/upload-sign\">Upload demo 2</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span>Angular Promimax Storage demo</span>\r\n    </mat-toolbar>\r\n    <!-- Add Content Here -->\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/upload-demo/upload-demo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/upload-demo/upload-demo.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n    margin:10px;\r\n  }\r\n  .card-header {\r\n    margin: 0px;\r\n   }\r\n  .card-content {\r\n      margin: 10px;\r\n  }\r\n  .card-content > * {\r\n    width: 100%;\r\n  }\r\n  .card-full-width {\r\n    width: 100%;\r\n  }\r\n  .drop-zone {\r\n    margin: auto;\r\n    height: 100px;\r\n    border: 2px dotted #0782d0;\r\n    \r\n  }"

/***/ }),

/***/ "./src/app/upload-demo/upload-demo.component.html":
/*!********************************************************!*\
  !*** ./src/app/upload-demo/upload-demo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"fileUploadForm\">\r\n    <mat-card class=\"card-form\">\r\n        <mat-card-header class=\"card-header\">\r\n            <mat-card-title>Upload demo</mat-card-title>\r\n            <mat-card-subtitle>\r\n                Upload file to IPFS network </mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"card-content\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Select upload types\" formControlName=\"inSelect\" (selectionChange)=\"onSelectChange($event)\">\r\n                    <mat-option>None</mat-option>\r\n                    <mat-option value=\"text\">Text</mat-option>\r\n                    <mat-option value=\"base64\">Base64</mat-option>\r\n                    <mat-option value=\"binary\">Binary</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Title\" formControlName=\"inTitle\" required>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Keywords (seperated by comma)\" formControlName=\"inKeywords\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <textarea matInput placeholder=\"Metadata in JSON Format\" formControlName=\"inMetadata\"></textarea>\r\n\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"showText\">\r\n                <textarea matInput placeholder=\"Enter text\" formControlName=\"inText\" required></textarea>\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"showText\">\r\n                <input matInput placeholder=\"Encoding\" formControlName=\"inEncoding\" value=\"UTF-8\">\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"showFile\">\r\n                <ngx-mat-file-input formControlName=\"fileUpload\" placeholder=\"Select file\" valuePlaceholder=\"No file selected\" required></ngx-mat-file-input>\r\n            </mat-form-field>\r\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"showProgressBar\"></mat-progress-bar>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-raised-button color=\"primary\" [disabled]=\"!fileUploadForm.valid\" (click)=\"onUpload()\">Upload</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</form>\r\n\r\n\r\n\r\n<form [formGroup]=\"multihashForm\" (ngSubmit)=\"onUploadCleanup()\">\r\n    <mat-card class=\"card-form\">\r\n        <mat-card-header class=\"card-header\">\r\n            <mat-card-title>Upload Clean Up</mat-card-title>\r\n            <mat-card-subtitle>\r\n                Calls the garbage clean up and tries to unpin the given hash</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"card-content\">\r\n            <mat-form-field class=\"card-full-width\">\r\n                <input matInput placeholder=\"Enter multihash\" value=\"\" formControlName=\"multihash\" required>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-raised-button color=\"primary\" [disabled]=\"!multihashForm.valid\">Clean up</button>\r\n\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</form>"

/***/ }),

/***/ "./src/app/upload-demo/upload-demo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/upload-demo/upload-demo.component.ts ***!
  \******************************************************/
/*! exports provided: UploadDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDemoComponent", function() { return UploadDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_xpx_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-xpx-lib */ "./node_modules/angular-xpx-lib/fesm5/angular-xpx-lib.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var typescript_base64_arraybuffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typescript-base64-arraybuffer */ "./node_modules/typescript-base64-arraybuffer/typescript-base64-arraybuffer.umd.js");
/* harmony import */ var typescript_base64_arraybuffer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typescript_base64_arraybuffer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message-dialog/message-dialog.component */ "./src/app/message-dialog/message-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadDemoComponent = /** @class */ (function () {
    function UploadDemoComponent(service, fb, dialog) {
        this.service = service;
        this.fb = fb;
        this.dialog = dialog;
        this.baseURL = 'https://testnet2.gateway.proximax.io/';
        this.showText = false;
        this.showFile = false;
        this.showProgressBar = false;
        this.multihashForm = this.fb.group({
            multihash: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.fileUploadForm = this.fb.group({
            fileUpload: [
                undefined,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            ],
            inTitle: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            ],
            inKeywords: [''],
            inMetadata: [''],
            inText: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            inSelect: [''],
            inEncoding: ['']
        });
    }
    UploadDemoComponent.prototype.ngOnInit = function () {
        this.service.setBaseUrl(this.baseURL);
    };
    /**
     * Multihash
     */
    UploadDemoComponent.prototype.onUploadCleanup = function () {
        var _this = this;
        console.log(this.multihashForm.value.multihash);
        this.service.uploadCleanup(this.multihashForm.value.multihash).subscribe(function (response) {
            var msgDialog = _this.dialog.open(_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_5__["MessageDialogComponent"], {
                data: {
                    result: {
                        message: response.message,
                        value: response.status
                    }
                },
            });
            console.log(response);
        });
    };
    UploadDemoComponent.prototype.onSelectChange = function (ev) {
        console.log(ev.value);
        switch (ev.value) {
            case 'text':
                this.showText = true;
                this.showFile = false;
                this.fileUploadForm.controls.fileUpload.disable();
                this.fileUploadForm.controls.inText.enable();
                break;
            case 'base64':
            case 'binary':
                this.showText = false;
                this.showFile = true;
                this.fileUploadForm.controls.fileUpload.enable();
                this.fileUploadForm.controls.inText.disable();
                break;
        }
    };
    UploadDemoComponent.prototype.onUpload = function () {
        var _this = this;
        var selectedType = this.fileUploadForm.controls.inSelect.value;
        var title = this.fileUploadForm.controls.inTitle.value;
        var keywords = this.fileUploadForm.controls.inKeywords.value;
        var metadata = this.fileUploadForm.controls.inMetadata.value;
        console.log(selectedType);
        this.showProgressBar = true;
        switch (selectedType) {
            case 'text':
                var data = this.fileUploadForm.controls.inText.value;
                var encoding = this.fileUploadForm.controls.inEncoding.value;
                var payload = new angular_xpx_lib__WEBPACK_IMPORTED_MODULE_1__["UploadTextRequest"](title, data, keywords, metadata, 'text/plain', encoding);
                this.service.uploadText(payload).subscribe(function (response) {
                    _this.showProgressBar = false;
                    var msgDialog = _this.dialog.open(_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_5__["MessageDialogComponent"], {
                        data: {
                            result: {
                                message: 'Your IFPS datahash value is ',
                                value: response
                            }
                        },
                    });
                    _this.fileUploadForm.reset();
                    console.log(response);
                });
                break;
            case 'binary':
            case 'base64':
                var fileReader_1 = new FileReader();
                var inputFiles = this.fileUploadForm.value.fileUpload;
                // console.log(inputFiles);
                this.file = inputFiles.files[0];
                var fileType_1 = this.file.type;
                fileReader_1.readAsArrayBuffer(this.file);
                fileReader_1.onload = function (e) {
                    var arrayBuffer = fileReader_1.result;
                    var payloadData;
                    // if binary file , need to convert to bytes array
                    if (selectedType === 'binary') {
                        payloadData = [];
                        var base64Data = Object(typescript_base64_arraybuffer__WEBPACK_IMPORTED_MODULE_4__["encode"])(arrayBuffer);
                        for (var i = 0; i < base64Data.length; i++) {
                            payloadData.push(base64Data.charCodeAt(i));
                        }
                        var uploadBinRequest = new angular_xpx_lib__WEBPACK_IMPORTED_MODULE_1__["UploadBinaryRequest"](title, payloadData, keywords, metadata, fileType_1);
                        _this.service.uploadBinary(uploadBinRequest).subscribe(function (response) {
                            _this.showProgressBar = false;
                            var msgDialog = _this.dialog.open(_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_5__["MessageDialogComponent"], {
                                data: {
                                    result: {
                                        message: 'Your IFPS datahash value is ',
                                        value: response
                                    }
                                },
                            });
                            _this.fileUploadForm.reset();
                        });
                    }
                    else {
                        var base64Data = Object(typescript_base64_arraybuffer__WEBPACK_IMPORTED_MODULE_4__["encode"])(arrayBuffer);
                        var uploadBinRequest = new angular_xpx_lib__WEBPACK_IMPORTED_MODULE_1__["UploadBinaryRequest"](title, base64Data, keywords, metadata, fileType_1);
                        _this.service.uploadBase64Binary(uploadBinRequest).subscribe(function (response) {
                            _this.showProgressBar = false;
                            var msgDialog = _this.dialog.open(_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_5__["MessageDialogComponent"], {
                                data: {
                                    result: {
                                        message: 'Your IFPS datahash value is ',
                                        value: response
                                    }
                                },
                            });
                            _this.fileUploadForm.reset();
                        });
                    }
                };
                break;
        }
    };
    UploadDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-demo',
            template: __webpack_require__(/*! ./upload-demo.component.html */ "./src/app/upload-demo/upload-demo.component.html"),
            styles: [__webpack_require__(/*! ./upload-demo.component.css */ "./src/app/upload-demo/upload-demo.component.css")]
        }),
        __metadata("design:paramtypes", [angular_xpx_lib__WEBPACK_IMPORTED_MODULE_1__["RemoteUploadService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], UploadDemoComponent);
    return UploadDemoComponent;
}());



/***/ }),

/***/ "./src/app/upload-sign/upload-sign.component.css":
/*!*******************************************************!*\
  !*** ./src/app/upload-sign/upload-sign.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n    margin:10px;\r\n  }\r\n  .card-header {\r\n    margin: 0px;\r\n   }\r\n  .card-content {\r\n      margin: 10px;\r\n  }\r\n  .card-content > * {\r\n    width: 100%;\r\n  }\r\n  .card-full-width {\r\n    width: 100%;\r\n  }\r\n  .drop-zone {\r\n    margin: auto;\r\n    height: 100px;\r\n    border: 2px dotted #0782d0;\r\n    \r\n  }"

/***/ }),

/***/ "./src/app/upload-sign/upload-sign.component.html":
/*!********************************************************!*\
  !*** ./src/app/upload-sign/upload-sign.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"fileUploadForm\">\r\n  <mat-card class=\"card-form\">\r\n    <mat-card-header class=\"card-header\">\r\n      <mat-card-title>Upload demo</mat-card-title>\r\n      <mat-card-subtitle>\r\n        Upload file to IPFS network and Sign</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content class=\"card-content\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Account Private Key\" formControlName=\"inPrivateKey\" required>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Account Public Key\" formControlName=\"inPublicKey\" required>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Keywords (seperated by comma)\" formControlName=\"inKeywords\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"Metadata in JSON Format\" formControlName=\"inMetadata\"></textarea>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-select  placeholder=\"Select message type\" formControlName=\"inSelect\">\r\n          <mat-option value=\"PLAIN\">PLAIN</mat-option>\r\n          <mat-option value=\"SECURE\">SECURE</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <ngx-mat-file-input formControlName=\"fileUpload\" placeholder=\"Select file\" valuePlaceholder=\"No file selected\" required></ngx-mat-file-input>\r\n      </mat-form-field>\r\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"showProgressBar\"></mat-progress-bar>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button color=\"primary\" [disabled]=\"!fileUploadForm.valid\" (click)=\"onUpload()\">Upload</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n\r\n</form>\r\n\r\n<form [formGroup]=\"signedAnnounceForm\" *ngIf=\"showSignedAnnounce\">\r\n  <mat-card class=\"card-form\">\r\n    <mat-card-header class=\"card-header\">\r\n      <mat-card-title>Announce Transaction</mat-card-title>\r\n      <mat-card-subtitle>\r\n        Announce data signagture</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content class=\"card-content\">\r\n\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"\" formControlName=\"inAnnounce\" required minRows=\"20\"></textarea>\r\n      </mat-form-field>\r\n\r\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"showProgressBar2\"></mat-progress-bar>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button color=\"primary\" [disabled]=\"!signedAnnounceForm.valid\" (click)=\"onAnnounce()\">Announce</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>"

/***/ }),

/***/ "./src/app/upload-sign/upload-sign.component.ts":
/*!******************************************************!*\
  !*** ./src/app/upload-sign/upload-sign.component.ts ***!
  \******************************************************/
/*! exports provided: UploadSignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadSignComponent", function() { return UploadSignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_xpx_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-xpx-lib */ "./node_modules/angular-xpx-lib/fesm5/angular-xpx-lib.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message-dialog/message-dialog.component */ "./src/app/message-dialog/message-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadSignComponent = /** @class */ (function () {
    function UploadSignComponent(service, announceService, fb, dialog) {
        this.service = service;
        this.announceService = announceService;
        this.fb = fb;
        this.dialog = dialog;
        this.baseURL = 'https://testnet2.gateway.proximax.io/';
        this.showSignedAnnounce = true;
        this.showProgressBar = false;
        this.showProgressBar2 = false;
        this.fileUploadForm = this.fb.group({
            fileUpload: [
                undefined,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            ],
            inPrivateKey: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            ],
            inKeywords: [''],
            inMetadata: [''],
            inPublicKey: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            inSelect: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.signedAnnounceForm = this.fb.group({
            inAnnounce: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            ]
        });
    }
    UploadSignComponent.prototype.ngOnInit = function () {
        this.service.setBaseUrl(this.baseURL);
    };
    UploadSignComponent.prototype.onUpload = function () {
        var _this = this;
        this.showProgressBar = true;
        var selectedType = this.fileUploadForm.controls.inSelect.value;
        var pkey = this.fileUploadForm.controls.inPrivateKey.value;
        var pubKey = this.fileUploadForm.controls.inPublicKey.value;
        var keywords = this.fileUploadForm.controls.inKeywords.value;
        var metadata = this.fileUploadForm.controls.inMetadata.value;
        var inputFiles = this.fileUploadForm.value.fileUpload;
        var file = inputFiles.files[0];
        this.service.uploadGenerateSign(pkey, pubKey, selectedType, file, keywords, metadata).subscribe(function (response) {
            _this.showProgressBar = false;
            console.log(response);
            _this.signedAnnounceForm.controls.inAnnounce.setValue(JSON.stringify(response, null, 2));
            _this.fileUploadForm.reset();
        });
    };
    UploadSignComponent.prototype.onAnnounce = function () {
        var _this = this;
        this.showProgressBar2 = true;
        try {
            var data = JSON.parse(this.signedAnnounceForm.controls.inAnnounce.value);
            var payload = new angular_xpx_lib__WEBPACK_IMPORTED_MODULE_1__["SignedTransaction"](data.data, data.signature);
            this.announceService.transactionAnnounce(payload).subscribe(function (response) {
                console.log(response);
                _this.dialog.open(_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MessageDialogComponent"], {
                    data: {
                        result: {
                            message: 'Your NEM hash value is ',
                            value: response.data
                        }
                    },
                });
                _this.showProgressBar2 = false;
            });
        }
        catch (_a) {
            console.log('Not in JSON');
        }
    };
    UploadSignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-sign',
            template: __webpack_require__(/*! ./upload-sign.component.html */ "./src/app/upload-sign/upload-sign.component.html"),
            styles: [__webpack_require__(/*! ./upload-sign.component.css */ "./src/app/upload-sign/upload-sign.component.css")]
        }),
        __metadata("design:paramtypes", [angular_xpx_lib__WEBPACK_IMPORTED_MODULE_1__["RemoteUploadService"], angular_xpx_lib__WEBPACK_IMPORTED_MODULE_1__["RemoteTransactionAnnounceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], UploadSignComponent);
    return UploadSignComponent;
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! J:\Development\proximax-storage\src\angular-xpx-storage-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map