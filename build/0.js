webpackJsonp([0],{

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(422);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, loadingCtrl, alertCtrl, theInAppBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.theInAppBrowser = theInAppBrowser;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        this.theInAppBrowser.create(url, target, this.options);
    };
    AboutPage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    };
    AboutPage.prototype.openWithCordovaBrowser = function (url) {
        var target = "_self";
        this.theInAppBrowser.create(url, target, this.options);
    };
    AboutPage.prototype.ShareApp = function () {
        var options = {
            message: 'Library Book Search',
            subject: 'Try this Excellent app',
            files: ['', ''],
            url: 'http://myapps.byethost12.com/librarysearch/',
            chooserTitle: 'Choose an app' // Android only, you can override the default share sheet title
        };
        var onSuccess = function (result) {
            console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
            console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
        };
        var onError = function (msg) {
            console.log("Sharing failed with message: " + msg);
        };
        window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
    };
    AboutPage.prototype.about = function () {
        var alert = this.alertCtrl.create({
            title: 'Library Book Search App \n\n',
            message: "Library Book Search is the reduce the wastage of time while searching an particular in book from library" + " \n\n developed by \n\n PRASAD BOBBY 😎 ",
            buttons: ['OK']
        });
        alert.present();
    };
    AboutPage.prototype.feedback = function () {
        window.plugins.socialsharing.shareViaEmail('#Issue', 'Library Search @Feedback', ['pssoftwares22@gmail.com'], null);
    };
    AboutPage.prototype.version = function () {
        window.plugins.toast.showWithOptions({
            message: "Latest Version 🔥",
            duration: "short",
            position: "bottom",
            addPixelsY: -40 // added a negative value to move it up a bit (default 0)
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\prasad\ionicapps\library\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar color="toolbar">\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- <div *ngIf="selectedItem">\n  <b>{{selectedItem.itemName}}</b>\n  {{selectedItem.itemPost}}\n  <img [src]="image"/>\n</div> -->\n\n<ion-content class="list-avatar-page" overflow-scroll="true">\n    <ion-list>\n\n          <ion-item (click)="openWithSystemBrowser(\'http://myapps.byethost12.com/librarysearch/video.php\')">\n                  <ion-avatar item-start>\n                    <ion-icon name="play"></ion-icon>\n                  </ion-avatar>\n                  <h2>Demo</h2>\n                  <p>Click Here to see video</p>\n                </ion-item>\n\n        <ion-item (click)="about()">\n            <ion-avatar item-start>\n                 <ion-icon name="person"></ion-icon>\n            </ion-avatar>\n            <h2>About</h2>\n            <p>About Library Book Search App </p>\n          </ion-item>\n\n      <ion-item (click)="ShareApp()">\n        <ion-avatar item-start>\n            <ion-icon name=\'share\'></ion-icon>\n        </ion-avatar>\n        <h2>Share this app</h2>\n        <p>Share Library Book Search App and Share the Fun</p>\n      </ion-item>\n  \n      <ion-item (click)="feedback()">\n        <ion-avatar item-start>\n          <ion-icon name="alert"></ion-icon>\n        </ion-avatar>\n        <h2>Feedback</h2>\n        <p>If any Issues send me a feedback </p>\n      </ion-item>\n  \n      <ion-item (click)="version()">\n        <ion-avatar item-start>\n          <ion-icon name="logo-android"></ion-icon>\n        </ion-avatar>\n        <h2>Version</h2>\n        <p>0.0.1</p>\n      </ion-item>\n  \n \n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\prasad\ionicapps\library\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=0.js.map