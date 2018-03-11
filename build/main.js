webpackJsonp([1],{

/***/ 213:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 213;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		815,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 257;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, afs) {
        this.navCtrl = navCtrl;
        this.afs = afs;
        this.startAt = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.endAt = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.startobs = this.startAt.asObservable();
        this.endobs = this.endAt.asObservable();
        this.isOn = false;
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]();
        this.empty = true;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.getallclubs().subscribe(function (clubs) {
            _this.allclubs = clubs;
        });
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].combineLatest(this.startobs, this.endobs).subscribe(function (value) {
            _this.firequery(value[0], value[1]).subscribe(function (clubs) {
                _this.clubs = clubs;
            });
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            //   this.setFilteredItems();
            _this.searching = false;
            _this.empty = false;
        });
    };
    HomePage.prototype.getItems = function ($event) {
        this.searching = true;
        this.empty = false;
        var q = $event.target.value;
        if (q != '') {
            this.startAt.next(q);
            this.endAt.next(q + "\uf8ff");
        }
        else {
            // this.empty = true;
            this.clubs = this.allclubs;
        }
    };
    HomePage.prototype.firequery = function (start, end) {
        return this.afs.collection('items', function (ref) { return ref.orderBy('name').startAt(start).endAt(end); }).valueChanges();
    };
    HomePage.prototype.getallclubs = function () {
        return this.afs.collection('items', function (ref) { return ref.limit(10); }).valueChanges();
        // return this.afs.collection('items', ref => ref.orderBy('name').limit(10)).valueChanges();    
    };
    HomePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    HomePage.prototype.getButtonText = function () {
        return "Switch " + (this.isOn ? 'Off' : 'On');
    };
    HomePage.prototype.setState = function () {
        this.isOn = !this.isOn;
    };
    HomePage.prototype.toggleDetails = function () {
        this.isOn = !this.isOn;
    };
    HomePage.prototype.row = function (item) {
        console.log("Clicked");
    };
    HomePage.prototype.addItem = function () {
        this.ionViewElement();
        this.itemsCollection.add({
            description: "1TB Space with great performance",
            itemid: 13423
        })
            .then(function (result) {
            console.log("Document added with id >>> ", result.id);
        })
            .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    };
    HomePage.prototype.about = function () {
        this.navCtrl.push("AboutPage");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\prasad\ionicapps\library\src\pages\home\home.html"*/'<!-- <ion-header>\n    <ion-navbar color="toolbar">\n\n        <ion-title *ngIf="!isOn">Library</ion-title>\n        <ion-searchbar *ngIf="isOn"></ion-searchbar>\n\n      <ion-buttons end>\n        <button ion-button icon-only (click)="toggleDetails()" >\n            <ion-icon *ngIf="!isOn" name="search"></ion-icon>\n            <ion-icon *ngIf="isOn" name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n\n        \n      </ion-navbar>\n  </ion-header>\n\n -->\n\n<ion-content no-padding text-align-center>\n\n  <!-- <ion-searchbar [(ngModel)]="searchCountryString" (ionInput)="getItems($event)" [debounce]="150" placeholder="Search book..."></ion-searchbar> -->\n\n  <ion-searchbar  \n            [(ngModel)]="searchterm" \n            [showCancelButton]="true" \n            [formControl]="searchControl" \n            (keydown)="getItems($event)" \n            placeholder="Search by Book Name...(1st letter Caps)">\n  </ion-searchbar>\n  \n  <!-- <ion-searchbar\n  #searchbarElem\n  (ionInput)="getItems($event)"\n  [(ngModel)]="searchterm"\n  placeholder="Search..."\n  [showCancelButton]="true">\n</ion-searchbar> -->\n\n       <div *ngIf="searching" class="spinner-container">\n           <ion-spinner></ion-spinner>\n       </div>\n\n    <ion-grid *ngFor="let item of clubs"> \n      <ion-row justify-content-start >\n          <ion-col>\n              <img [src]="item.image" style="width:100%;" imageViewer />\n          </ion-col>\n          <ion-col>\n               Name <p  style="color:rgb(255, 30, 0);">  {{ item.name}} </p><br/>\n                Author<p  style="color:rgb(255, 174, 0);">  {{item.author}} </p>\n          </ion-col> \n          <ion-col>\n                Availability<p *ngIf="item.available?.length < 2" style="color:rgb(255, 0, 0);">  Not Available !  </p> <br/>\n                <p  *ngIf="item.available?.length >  1" style="color:rgb(81, 255, 0);">  {{ item.available}}  </p> <br/>         \n                Shelf <p  style="color:rgb(109, 172, 255);">  {{ item.shelf}} </p>\n          </ion-col>\n      </ion-row>\n\n      <ion-row justify-content-start (click)="row(item)">\n            <div *ngIf="clubs?.length < 1">\n            <!-- <div *ngIf="empty">       -->\n                 <hr>\n                    <p>\n                     No results found :(\n                    </p>\n             </div>\n         </ion-row>\n    </ion-grid>\n\n    <div *ngIf="empty" text-center style="margin-top:50%;">\n                    <p>\n                     Search By Book Name \n                    </p>\n             </div>\n  \n</ion-content>\n\n<ion-footer>\n        <ion-toolbar text-center>\n          <ion-title>\n              <p  style="color:darkorange;" (click)="about()"> &copy; Prasad </p>\n          </ion-title>\n        </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\prasad\ionicapps\library\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(428);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_firebaseconfig__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_img_viewer__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_background_mode__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_toast__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Firebase



//Firebase Connection

//ImageViewer






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_12_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__app_firebaseconfig__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__["a" /* SocialSharing */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_mode__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, oneSignal, backgroundMode, _toastCtrl, _network) {
        var _this = this;
        this.oneSignal = oneSignal;
        this.backgroundMode = backgroundMode;
        this._toastCtrl = _toastCtrl;
        this._network = _network;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.backgroundMode.enable();
            _this.oneSignal.startInit('fab9d1d6-4b03-4fff-9162-c6e6649286aa', '922319694867');
            _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            _this.oneSignal.handleNotificationReceived().subscribe(function () {
                // do something when notification is received
                //  alert("Receievd");
            });
            _this.oneSignal.handleNotificationOpened().subscribe(function () {
                // do something when a notification is opened
                // alert("Hai");
            });
            _this.oneSignal.endInit();
        });
        var noInternetToast;
        var onlineToast;
        this._network.onDisconnect().subscribe(function () {
            noInternetToast = _this._toastCtrl.create({
                message: 'No Internet Connection',
                position: 'bottom',
                duration: 3000,
                cssClass: 'failure'
            });
            noInternetToast.present();
        });
        this._network.onConnect().subscribe(function () {
            onlineToast = _this._toastCtrl.create({
                message: 'Connected to Internet',
                position: 'bottom',
                duration: 2000,
                cssClass: 'success'
            });
            // noInternetToast.dismiss();
            onlineToast.present();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\prasad\ionicapps\library\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\prasad\ionicapps\library\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// export var config = {
//     apiKey: "AIzaSyBptENFfcf6ZY72qtYNboz-nWpt7P04kKA",
//     authDomain: "library-6236f.firebaseapp.com",
//     databaseURL: "https://library-6236f.firebaseio.com",
//     projectId: "library-6236f",
//     storageBucket: "library-6236f.appspot.com",
//     messagingSenderId: "922319694867"
// };
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBptENFfcf6ZY72qtYNboz-nWpt7P04kKA",
        authDomain: "library-6236f.firebaseapp.com",
        databaseURL: "https://library-6236f.firebaseio.com",
        projectId: "library-6236f",
        storageBucket: "library-6236f.appspot.com",
        messagingSenderId: "922319694867"
    }
};
//# sourceMappingURL=app.firebaseconfig.js.map

/***/ })

},[423]);
//# sourceMappingURL=main.js.map