function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'IQ NEW YEAR PARTY';
        this.dt = new Date();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.applyTime();
        }
      }, {
        key: "applyTime",
        value: function applyTime() {
          document.getElementById('datetime').innerHTML = this.dt.toLocaleTimeString();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [["src", "data:image/png;base64,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", "width", "225", "height", "150"], ["id", "datetime"], ["src", "https://livestream.com/accounts/43923/events/9872713/player?width=640&height=360&enableInfoAndActivity=true&defaultDrawer=&autoPlay=true&mute=false%22", "width", "1190", "height", "700", "frameborder", "0", "scrolling", "no", "allowfullscreen", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DJ: Dirty Murti");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\xA0 \xA0 \xA0 \xA0 \xA0 ");
        }
      },
      styles: ["body[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    text-align: center;\r\n    margin: 0;\r\n    height: 1300px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-size: xx-large;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    padding-top: 1%;\r\n}\r\n\r\niframe[_ngcontent-%COMP%]{\r\n    padding-top: 1%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDEzMDBweDtcclxufVxyXG5cclxuaDEsIGgye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgcGFkZGluZy10b3A6IDElO1xyXG59XHJcblxyXG5pZnJhbWV7XHJcbiAgICBwYWRkaW5nLXRvcDogMSU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule =
    /*#__PURE__*/
    _createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\minh\nysite\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map