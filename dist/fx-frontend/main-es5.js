(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/auth.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/auth.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"body\">\n  <div class=\"container\" id=\"container\">\n    <div class=\"form-container sign-up-container\">\n      <form autocomplete=\"off\" (submit)=\"registerUser($event)\">\n        <h4>Create Account</h4>\n        <div class=\"social-container\">\n          <a href=\"#\" class=\"social\"\n            ><i class=\"mdi mdi-facebook-messenger\"></i\n          ></a>\n          <a href=\"#\" class=\"social\"><i class=\"mdi mdi-twitter\"></i></a>\n          <a href=\"#\" class=\"social\"><i class=\"mdi mdi-instagram\"></i></a>\n        </div>\n        <span>or use your email for registration</span>\n        <div class=\"mb-3\">\n          <label for=\"email\">\n            Email\n          </label>\n\n          <input\n            autocomplete=\"off\"\n            class=\"form-control\"\n            id=\"createemail\"\n            type=\"email\"\n            placeholder=\"mail@mail.com\"\n            required\n          />\n        </div>\n        <div class=\"mb-3\">\n          <label for=\"username\">\n            Username\n          </label>\n          <input\n            autocomplete=\"off\"\n            class=\"form-control\"\n            id=\"createusername\"\n            type=\"text\"\n            placeholder=\"Username\"\n            required\n          />\n        </div>\n        <div class=\"mb-3\">\n          <label for=\"password\">\n            Password\n          </label>\n          <input\n            autocomplete=\"off\"\n            class=\"form-control\"\n            id=\"createpassword\"\n            type=\"password\"\n            placeholder=\"*********\"\n          />\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\">\n          Sign In\n        </button>\n      </form>\n    </div>\n    <!-- login  -->\n    <div class=\"form-container sign-in-container\">\n      <form autocomplete=\"off\" (submit)=\"loginUser($event)\">\n        <h4>Sign in</h4>\n        <div class=\"social-container\">\n          <a href=\"#\" class=\"social\"\n            ><i class=\"mdi mdi-facebook-messenger\"></i\n          ></a>\n          <a href=\"#\" class=\"social\"><i class=\"mdi mdi-twitter\"></i></a>\n          <a href=\"#\" class=\"social\"><i class=\"mdi mdi-instagram\"></i></a>\n        </div>\n        <span>or use your account</span>\n        <div class=\"mb-4\">\n          <label for=\"username\">\n            Username\n          </label>\n          <input\n            type=\"text\"\n            id=\"username\"\n            class=\"form-control\"\n            placeholder=\"JohnDoe33\"\n            required\n          />\n        </div>\n        <div class=\"mb-4\">\n          <label for=\"password\">\n            Password\n          </label>\n          <input\n            type=\"password\"\n            id=\"password\"\n            class=\"form-control\"\n            placeholder=\"*******\"\n            autocomplete=\"off\"\n            required\n          />\n        </div>\n\n        <button class=\"btn btn-primary\" type=\"submit\">\n          Sign In\n        </button>\n      </form>\n    </div>\n    <div class=\"overlay-container\">\n      <div class=\"overlay\">\n        <div class=\"overlay-panel overlay-left\">\n          <h4>Welcome Back!</h4>\n          <p>\n            To keep connected with us please login with your personal info\n          </p>\n          <button class=\"btn btn-primary\" id=\"signIn\" type=\"button\">\n            Sign In\n          </button>\n        </div>\n        <div class=\"overlay-panel overlay-right\">\n          <h4>Hello, Friend!</h4>\n          <p>Enter your personal details and start journey with us</p>\n          <button class=\"btn btn-primary\" type=\"button\" id=\"signUp\">\n            Sign Up\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body>\n  <div class=\"wrapper\">\n    <!-- Sidebar  -->\n    <nav id=\"sidebar\">\n      <div class=\"sidebar-header mt-4\">\n        <!-- <h4>{{ title.category.title }}</h4> -->\n      </div>\n\n      <ul\n        class=\"list-unstyled components\"\n        *ngFor=\"let title of blogPosts; let num = index\"\n      >\n        <li>\n          <a (click)=\"getBlogPostDetails(title)\"\n            >{{ num + 1 }}. {{ title.title }}</a\n          >\n        </li>\n      </ul>\n    </nav>\n\n    <!-- Page Content  -->\n    <div id=\"content\">\n      <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <div class=\"container-fluid\">\n          <button\n            type=\"button\"\n            id=\"sidebarCollapse\"\n            class=\"btn text-light\"\n            style=\"background-color: #14233b;\"\n          >\n            <i class=\"fas fa-align-left\"></i>\n            <span>Toggle Sidebar</span>\n          </button>\n          <button\n            class=\"btn btn-dark d-inline-block d-lg-none ml-auto\"\n            type=\"button\"\n            data-toggle=\"collapse\"\n            data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\"\n            aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\"\n          >\n            <i class=\"fas fa-align-justify\"></i>\n          </button>\n        </div>\n      </nav>\n      <div *ngIf=\"viewPost\" class=\"card p-4\">\n        <img\n          [src]=\"postDetails.featured_image[0]\"\n          class=\"responsive mb-4\"\n          alt=\"\"\n        />\n        <h3>{{ postDetails.title }}</h3>\n        <small\n          >{{ postDetails.dateCreated | date }}</small\n        >\n        <p [innerHTML]=\"postDetails.content\" class=\"para\"></p>\n      </div>\n    </div>\n  </div>\n</body>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"mt-5 mb-5\" id=\"category\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mb-5\">\n        <h3>Categories</h3>\n        <hr class=\"hori\" />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 mb-3\" id=\"over\" *ngFor=\"let category of categories\">\n        <img\n          src=\"../../../assets/img/fx1.jpg\"\n          class=\"img-fluid defImg\"\n          alt=\"\"\n          [routerLink]=\"['/blog', category._id]\"\n        />\n        <div class=\"centered\">\n          <h6>{{ category.title }}</h6>\n        </div>\n        <div class=\"centeredPara\">\n          <p>{{ category.description }}</p>\n        </div>\n      </div>\n      <!-- <div class=\"col-md-3 mb-3\">\n        <img src=\"../../../assets/img/fx2.jpg\" class=\"img-fluid\" alt=\"\" />\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <img src=\"../../../assets/img/fx3.jpg\" class=\"img-fluid\" alt=\"\" />\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <img src=\"../../../assets/img/fx4.jpg\" class=\"img-fluid\" alt=\"\" />\n      </div> -->\n    </div>\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"hero\">\n  <div class=\"container\">\n    <div class=\"row h-100 \">\n      <div class=\"col-sm-12 col-md-6 col-lg-6 col-xl-6 text-light my-auto\">\n        <div class=\"text-left\">\n          <h2 class=\"header\">Learn forex trading online</h2>\n          <p class=\"para\">We have courses for all trading levels</p>\n\n          <a href=\"#category\" class=\"btn\">\n            View Our Categories\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-category></app-category>\n<app-recent></app-recent>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recent/recent.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/recent/recent.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mb-5 mt-5\">\n        <h3>Most Recent Posts</h3>\n        <hr class=\"hori\" />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 mb-3\" *ngFor=\"let post of recent\">\n        <div\n          class=\"card\"\n          [routerLink]=\"['/blog', post.category._id]\"\n          style=\"width:auto;\"\n        >\n          <img [src]=\"post.featured_image[0]\" class=\"card-img-top\" alt=\"...\" />\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ post.title }}</h5>\n            <div class=\"badge badge-primary p-1\">{{ post.category.title }}</div>\n            <p class=\"card-text\">\n              Some quick example text to build on the card title and make up the\n              bulk of the card's content.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/app-footer/app-footer.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/app-footer/app-footer.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center\">\n        <p>&copy; Manny app {{ currentYear }}</p>\n      </div>\n    </div>\n  </div>\n</footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/app-header/app-header.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/app-header/app-header.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n      <button\n        class=\"navbar-toggler\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-target=\"#navbarNav\"\n        aria-controls=\"navbarNav\"\n        aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\"\n      >\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/home\"\n              >Home <span class=\"sr-only\">(current)</span></a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#category\">Categories</a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a (click)=\"logout()\" class=\"nav-link\" href=\"#\">Logout</a>\n          </li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/blank-layout/blank-layout.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/blank-layout/blank-layout.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/site-layout/site-layout.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/site-layout/site-layout.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
            /* harmony import */ var _layout_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/site-layout/site-layout.component */ "./src/app/layout/site-layout/site-layout.component.ts");
            /* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
            //bring in the layouts
            var routes = [
                // {
                //   path: "",
                //   component: BlankLayoutComponent,
                //   children: [{ path: "", component: AuthComponent, pathMatch: "full" }]
                // },
                {
                    path: "",
                    component: _layout_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_5__["SiteLayoutComponent"],
                    children: [
                        { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] } //canActivate: [AuthGuard]
                    ]
                },
                {
                    path: "",
                    component: _layout_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_5__["SiteLayoutComponent"],
                    children: [
                        { path: "blog/:id", component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] }
                    ]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = "fx-frontend";
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-root",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _layout_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/app-header/app-header.component */ "./src/app/layout/app-header/app-header.component.ts");
            /* harmony import */ var _layout_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/app-footer/app-footer.component */ "./src/app/layout/app-footer/app-footer.component.ts");
            /* harmony import */ var _layout_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/site-layout/site-layout.component */ "./src/app/layout/site-layout/site-layout.component.ts");
            /* harmony import */ var _layout_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/blank-layout/blank-layout.component */ "./src/app/layout/blank-layout/blank-layout.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/components/category/category.component.ts");
            /* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
            /* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
            /* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
            /* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
            /* harmony import */ var _components_recent_recent_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/recent/recent.component */ "./src/app/components/recent/recent.component.ts");
            // form modules
            //defining http client
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"],
                        _layout_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_8__["AppHeaderComponent"],
                        _layout_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_9__["AppFooterComponent"],
                        _layout_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_10__["SiteLayoutComponent"],
                        _layout_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_11__["BlankLayoutComponent"],
                        _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                        _components_category_category_component__WEBPACK_IMPORTED_MODULE_13__["CategoryComponent"],
                        _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
                        _components_recent_recent_component__WEBPACK_IMPORTED_MODULE_18__["RecentComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                        _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_14__["SweetAlert2Module"].forRoot()
                    ],
                    providers: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/auth/auth.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/auth/auth.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');\n\n* {\n  box-sizing: border-box;\n}\n\n#body {\n  background: #f6f5f7;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: 'Montserrat', sans-serif;\n  height: 100vh;\n  margin: -20px 0 50px;\n}\n\nh1 {\n  font-weight: bold;\n  margin: 0;\n}\n\nh2 {\n  text-align: center;\n}\n\np {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  margin: 20px 0 30px;\n}\n\nspan {\n  font-size: 12px;\n}\n\na {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n\nbutton {\n  transition: transform 80ms ease-in;\n}\n\nbutton:active {\n  transform: scale(0.95);\n}\n\nbutton:focus {\n  outline: none;\n}\n\nbutton.ghost {\n  background-color: transparent;\n  border-color: #ffffff;\n}\n\nform {\n  background-color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 50px;\n  height: 100%;\n  text-align: center;\n}\n\n.container {\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  position: relative;\n  overflow: hidden;\n  width: 768px;\n  max-width: 100%;\n  min-height: 530px;\n}\n\n.form-container {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  transition: all 0.6s ease-in-out;\n}\n\n.sign-in-container {\n  left: 0;\n  width: 50%;\n  z-index: 2;\n}\n\n.container.right-panel-active .sign-in-container {\n  transform: translateX(100%);\n}\n\n.sign-up-container {\n  left: 0;\n  width: 50%;\n  opacity: 0;\n  z-index: 1;\n}\n\n.container.right-panel-active .sign-up-container {\n  transform: translateX(100%);\n  opacity: 1;\n  z-index: 5;\n  -webkit-animation: show 0.6s;\n          animation: show 0.6s;\n}\n\n@-webkit-keyframes show {\n\n  0%,\n  49.99% {\n    opacity: 0;\n    z-index: 1;\n  }\n\n  50%,\n  100% {\n    opacity: 1;\n    z-index: 5;\n  }\n}\n\n@keyframes show {\n\n  0%,\n  49.99% {\n    opacity: 0;\n    z-index: 1;\n  }\n\n  50%,\n  100% {\n    opacity: 1;\n    z-index: 5;\n  }\n}\n\n.overlay-container {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.6s ease-in-out;\n  z-index: 100;\n}\n\n.container.right-panel-active .overlay-container {\n  transform: translateX(-100%);\n}\n\n.overlay {\n  background: #14233b;\n  background: linear-gradient(to right, #14234d, #14233b);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 0;\n  color: #ffffff;\n  position: relative;\n  left: -100%;\n  height: 100%;\n  width: 200%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n\n.container.right-panel-active .overlay {\n  transform: translateX(50%);\n}\n\n.overlay-panel {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 40px;\n  text-align: center;\n  top: 0;\n  height: 100%;\n  width: 50%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n\n.overlay-left {\n  transform: translateX(-20%);\n}\n\n.container.right-panel-active .overlay-left {\n  transform: translateX(0);\n}\n\n.overlay-right {\n  right: 0;\n  transform: translateX(0);\n}\n\n.container.right-panel-active .overlay-right {\n  transform: translateX(20%);\n}\n\n.social-container {\n  margin: 20px 0;\n}\n\n.social-container a {\n  border: 1px solid #dddddd;\n  border-radius: 50%;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 5px;\n  height: 40px;\n  width: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5RUFBeUU7O0FBRXpFO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNEVBQTRFO0VBQzVFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxVQUFVO0VBQ1YsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsVUFBVTtFQUNWLDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0lBRUUsVUFBVTtJQUNWLFVBQVU7RUFDWjs7RUFFQTs7SUFFRSxVQUFVO0lBQ1YsVUFBVTtFQUNaO0FBQ0Y7O0FBYkE7O0VBRUU7O0lBRUUsVUFBVTtJQUNWLFVBQVU7RUFDWjs7RUFFQTs7SUFFRSxVQUFVO0lBQ1YsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0VBRW5CLHVEQUF1RDtFQUN2RCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHdCQUF3QjtFQUN4QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFlBQVk7RUFDWixVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFFBQVE7RUFDUix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDgwMCcpO1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2JvZHkge1xuICBiYWNrZ3JvdW5kOiAjZjZmNWY3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAtMjBweCAwIDUwcHg7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIG1hcmdpbjogMjBweCAwIDMwcHg7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmEge1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG5idXR0b24ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uLmdob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbn1cblxuZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNzY4cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNTMwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2lnbi1pbi1jb250YWluZXIge1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi1pbi1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG5cbi5zaWduLXVwLWNvbnRhaW5lciB7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLXVwLWNvbnRhaW5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogNTtcbiAgYW5pbWF0aW9uOiBzaG93IDAuNnM7XG59XG5cbkBrZXlmcmFtZXMgc2hvdyB7XG5cbiAgMCUsXG4gIDQ5Ljk5JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgNTAlLFxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbn1cblxuLm92ZXJsYXktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xufVxuXG4ub3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6ICMxNDIzM2I7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTQyMzRkLCAjMTQyMzNiKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTQyMzRkLCAjMTQyMzNiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbn1cblxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbn1cblxuLm92ZXJsYXktcGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LWxlZnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWxlZnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5vdmVybGF5LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmlnaHQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcbn1cblxuLnNvY2lhbC1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLnNvY2lhbC1jb250YWluZXIgYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/auth/auth.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/auth/auth.component.ts ***!
          \***************************************************/
        /*! exports provided: AuthComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function () { return AuthComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
            /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
            /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthComponent = /** @class */ (function () {
                function AuthComponent(Auth, router) {
                    this.Auth = Auth;
                    this.router = router;
                }
                AuthComponent.prototype.ngOnInit = function () {
                    var signUpButton = document.getElementById("signUp");
                    var signInButton = document.getElementById("signIn");
                    var container = document.getElementById("container");
                    signUpButton.addEventListener("click", function () {
                        container.classList.add("right-panel-active");
                    });
                    signInButton.addEventListener("click", function () {
                        container.classList.remove("right-panel-active");
                    });
                };
                // log userin
                AuthComponent.prototype.loginUser = function (event) {
                    var _this = this;
                    event.preventDefault();
                    var target = event.target;
                    var username = target.querySelector("#username").value;
                    var password = target.querySelector("#password").value;
                    this.Auth.userSignin(username, password).subscribe(function (data) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: "Success!",
                            text: "Login Successful",
                            icon: "success",
                            confirmButtonText: "Ok"
                        });
                        localStorage.setItem("access_token", data.token);
                        _this.router.navigate(["/home"]);
                        console.log(data);
                    }, function (err) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: "Error!",
                            text: err.error.msg,
                            icon: "error",
                            confirmButtonText: "Ok"
                        });
                        console.log(err.error);
                    });
                };
                //register new user
                AuthComponent.prototype.registerUser = function (event) {
                    event.preventDefault();
                    var target = event.target;
                    var createEmail = target.querySelector("#createemail").value;
                    var username = target.querySelector("#createusername").value;
                    var createpassword = target.querySelector("#createpassword").value;
                    this.Auth.registerNewUser(createEmail, username, createpassword).subscribe(function (data) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: "Success",
                            text: data,
                            icon: "success",
                            confirmButtonText: "Ok"
                        });
                        console.log(data);
                    }, function (err) {
                        var code = JSON.parse(err.error);
                        console.log(code.msg);
                        if (code.msg) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                                title: "Error!",
                                text: code.msg,
                                icon: "error",
                                confirmButtonText: "Ok"
                            });
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                                title: "Error!",
                                text: "Something Went Wrong",
                                icon: "error",
                                confirmButtonText: "Ok"
                            });
                        }
                    });
                };
                return AuthComponent;
            }());
            AuthComponent.ctorParameters = function () { return [
                { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-auth",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/auth.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.css */ "./src/app/components/auth/auth.component.css")).default]
                })
            ], AuthComponent);
            /***/ 
        }),
        /***/ "./src/app/components/blog/blog.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/blog/blog.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n    DEMO STYLE\n*/\n\n\n\n\n\n\n.navbar {\n  padding: 15px 10px;\n  background: #fff;\n  border: none;\n  border-radius: 0;\n  margin-bottom: 40px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n\n\n\n\n\n.navbar-btn {\n  box-shadow: none;\n  outline: none !important;\n  border: none;\n}\n\n\n\n\n\n\n.line {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px dashed #ddd;\n  margin: 40px 0;\n}\n\n\n\n\n\n\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n\n\n\n\n\n\n.wrapper {\n  display: flex;\n  width: 100%;\n  align-items: stretch;\n}\n\n\n\n\n\n\n#sidebar {\n  min-width: 300px;\n  max-width: 300px;\n  background: #14233b;\n  color: #fff;\n  transition: all 0.3s;\n}\n\n\n\n\n\n\n#sidebar.active {\n  margin-left: -300px;\n}\n\n\n\n\n\n\n#sidebar .sidebar-header {\n  padding: 20px;\n  background: #14233b;\n}\n\n\n\n\n\n\n#sidebar ul p {\n  color: #fff;\n  padding: 10px;\n}\n\n\n\n\n\n\n#sidebar ul li a {\n  padding: 10px 20px;\n  font-size: 1em;\n  display: block;\n}\n\n\n\n\n\n\n#sidebar ul li a:hover {\n  color: #fff;\n  background: #14235b;\n}\n\n\n\n\n\n\n#sidebar ul li.active>a,\na[aria-expanded=\"true\"] {\n  color: #fff;\n  background: #14235b;\n}\n\n\n\n\n\n\na[data-toggle=\"collapse\"] {\n  position: relative;\n}\n\n\n\n\n\n\n.dropdown-toggle::after {\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n}\n\n\n\n\n\n\nul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #6d7fcc;\n}\n\n\n\n\n\n\nul.CTAs {\n  padding: 20px;\n}\n\n\n\n\n\n\nul.CTAs a {\n  text-align: center;\n  font-size: 0.9em !important;\n  display: block;\n  border-radius: 5px;\n  margin-bottom: 5px;\n}\n\n\n\n\n\n\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n\n\n\n\n\n\n#content {\n  width: 100%;\n  padding: 20px;\n  min-height: 100vh;\n  transition: all 0.3s;\n}\n\n\n\n\n\n\n.para {\n  line-height: 34px;\n\n}\n\n\n\n\n\n\n/* ---------------------------------------------------\n    MEDIAQUERIES\n----------------------------------------------------- */\n\n\n\n\n\n\n@media (max-width: 768px) {\n  #sidebar {\n    margin-left: -300px;\n  }\n\n  #sidebar.active {\n    margin-left: 0;\n  }\n\n  #sidebarCollapse span {\n    display: none;\n  }\n}\n\n\n\n\n\n\n.responsive {\n  width: 100% !important;\n  height: 400px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQzs7Ozs7OztBQU9EO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwwQ0FBMEM7QUFDNUM7Ozs7Ozs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOzs7Ozs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixjQUFjO0FBQ2hCOzs7Ozs7O0FBRUE7O3VEQUV1RDs7Ozs7OztBQUV2RDtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOzs7Ozs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOzs7Ozs7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7Ozs7Ozs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7Ozs7Ozs7QUFHQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7Ozs7Ozs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7Ozs7OztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7Ozs7OztBQUVBOztFQUVFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7Ozs7Ozs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7Ozs7OztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7Ozs7OztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7Ozs7Ozs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7Ozs7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7Ozs7OztBQUVBOzt1REFFdUQ7Ozs7Ozs7QUFFdkQ7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7Ozs7Ozs7QUFFQTtFQUNFLGlCQUFpQjs7QUFFbkI7Ozs7Ozs7QUFFQTs7dURBRXVEOzs7Ozs7O0FBRXZEO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7Ozs7Ozs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBERU1PIFNUWUxFXG4qL1xuXG5cblxuXG5cblxuLm5hdmJhciB7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5uYXZiYXItYnRuIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBTSURFQkFSIFNUWUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuI3NpZGViYXIge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTQyMzNiO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMzAwcHg7XG59XG5cbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMxNDIzM2I7XG59XG5cblxuI3NpZGViYXIgdWwgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jc2lkZWJhciB1bCBsaSBhIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzE0MjM1Yjtcbn1cblxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMxNDIzNWI7XG59XG5cbmFbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxudWwgdWwgYSB7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM2ZDdmY2M7XG59XG5cbnVsLkNUQXMge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG51bC5DVEFzIGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBDT05URU5UIFNUWUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5wYXJhIHtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG5cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgTUVESUFRVUVSSUVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI3NpZGViYXIge1xuICAgIG1hcmdpbi1sZWZ0OiAtMzAwcHg7XG4gIH1cblxuICAjc2lkZWJhci5hY3RpdmUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgI3NpZGViYXJDb2xsYXBzZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/blog/blog.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/blog/blog.component.ts ***!
          \***************************************************/
        /*! exports provided: BlogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function () { return BlogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var BlogComponent = /** @class */ (function () {
                function BlogComponent(Auth, route, router) {
                    this.Auth = Auth;
                    this.route = route;
                    this.router = router;
                    this.viewPost = false;
                }
                BlogComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var btn = document.querySelector("#sidebarCollapse");
                    var sidebar = document.querySelector("#sidebar");
                    btn.addEventListener("click", function () {
                        sidebar.classList.toggle("active");
                    });
                    var id = this.route.snapshot.paramMap.get("id");
                    this.Auth.getBlogByCategory(id).subscribe(function (data) {
                        _this.blogPosts = data.data;
                        _this.getBlogPostDetails(_this.blogPosts[0]);
                        console.log(_this.blogPosts);
                    });
                };
                BlogComponent.prototype.getBlogPostDetails = function (blog) {
                    this.viewPost = true;
                    this.postDetails = blog;
                    // this.Auth.getBlogPostDetails(id).subscribe((data: any) => {
                    //   this.postDetails = data.response;
                    //   console.log(this.postDetails);
                    // });
                };
                return BlogComponent;
            }());
            BlogComponent.ctorParameters = function () { return [
                { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-blog",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")).default]
                })
            ], BlogComponent);
            /***/ 
        }),
        /***/ "./src/app/components/category/category.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/category/category.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".hori {\n  width: 60px;\n  height: 2px !important;\n  background-color: #14233b\n}\n\n#over {\n\n  cursor: pointer;\n  position: relative;\n  text-align: center;\n  color: white;\n}\n\n/* #over:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, .2);\n} */\n\n.centered {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.defImg {\n  transition: box-shadow .3s;\n  cursor: pointer;\n\n}\n\n.defImg:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, .9);\n}\n\n.centeredPara {\n  cursor: pointer;\n  position: absolute;\n  top: 65%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QjtBQUNGOztBQUVBOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvcmkge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAycHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjMzYlxufVxuXG4jb3ZlciB7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiAjb3Zlcjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMzMsIDMzLCAzMywgLjIpO1xufSAqL1xuXG4uY2VudGVyZWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5kZWZJbWcge1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG5cbi5kZWZJbWc6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTFweCByZ2JhKDMzLCAzMywgMzMsIC45KTtcbn1cblxuLmNlbnRlcmVkUGFyYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/category/category.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/category/category.component.ts ***!
          \***********************************************************/
        /*! exports provided: CategoryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () { return CategoryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
            var CategoryComponent = /** @class */ (function () {
                function CategoryComponent(Auth) {
                    this.Auth = Auth;
                }
                CategoryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.Auth.getCategories().subscribe(function (data) {
                        _this.categories = data.data;
                        console.log(_this.categories);
                    });
                };
                return CategoryComponent;
            }());
            CategoryComponent.ctorParameters = function () { return [
                { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-category",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.component.css */ "./src/app/components/category/category.component.css")).default]
                })
            ], CategoryComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#hero {\n  background: linear-gradient(rgba(0, 0, 34, 0.55), rgba(0, 0, 34, 0.55)),\n    url('newheader.jpg');\n  height: 630px;\n  background-size: cover;\n  background-position: center center;\n}\n\n.container {\n  height: 100%;\n}\n\n.header {\n  font-size: 50px;\n  font-weight: 700;\n}\n\n.btn {\n  background-color: #14233b;\n  color: white\n}\n\n.para {\n  font-size: 20px;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO3dCQUMwQztFQUMxQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7O0FBRWpCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZXJvIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMzQsIDAuNTUpLCByZ2JhKDAsIDAsIDM0LCAwLjU1KSksXG4gICAgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9uZXdoZWFkZXIuanBnXCIpO1xuICBoZWlnaHQ6IDYzMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjMzYjtcbiAgY29sb3I6IHdoaXRlXG59XG5cbi5wYXJhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuXG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/recent/recent.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/recent/recent.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card-img-top {\n  height: 180px;\n}\n\n.hori {\n  width: 60px;\n  height: 2px !important;\n  background-color: #14233b\n}\n\n.card {\n  transition: box-shadow .3s;\n  cursor: pointer;\n\n}\n\n.card:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, .4);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNlbnQvcmVjZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY2VudC9yZWNlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWltZy10b3Age1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuXG4uaG9yaSB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDJweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyMzNiXG59XG5cbi5jYXJkIHtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxufVxuXG4uY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMzMsIDMzLCAzMywgLjQpO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/recent/recent.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/recent/recent.component.ts ***!
          \*******************************************************/
        /*! exports provided: RecentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentComponent", function () { return RecentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
            var RecentComponent = /** @class */ (function () {
                function RecentComponent(Auth) {
                    this.Auth = Auth;
                }
                RecentComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.Auth.getRecentBlogPost().subscribe(function (data) {
                        _this.recent = data.data.splice(0, 4);
                        console.log(_this.recent);
                    });
                };
                return RecentComponent;
            }());
            RecentComponent.ctorParameters = function () { return [
                { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            RecentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-recent",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recent/recent.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recent.component.css */ "./src/app/components/recent/recent.component.css")).default]
                })
            ], RecentComponent);
            /***/ 
        }),
        /***/ "./src/app/guard/auth.guard.ts": 
        /*!*************************************!*\
          !*** ./src/app/guard/auth.guard.ts ***!
          \*************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(router) {
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    if (localStorage.getItem("access_token") != null)
                        return true;
                    this.router.navigate([""]);
                    return false;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/layout/app-footer/app-footer.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/layout/app-footer/app-footer.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("footer {\n  background-color: #14233b !important;\n  color: #fff;\n}\n\nul li {\n  list-style-type: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FwcC1mb290ZXIvYXBwLWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hcHAtZm9vdGVyL2FwcC1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDIzM2IgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/layout/app-footer/app-footer.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/layout/app-footer/app-footer.component.ts ***!
          \***********************************************************/
        /*! exports provided: AppFooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function () { return AppFooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppFooterComponent = /** @class */ (function () {
                function AppFooterComponent() {
                }
                AppFooterComponent.prototype.ngOnInit = function () {
                    this.currentYear = new Date().getFullYear();
                };
                return AppFooterComponent;
            }());
            AppFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-footer",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/app-footer/app-footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app-footer.component.css */ "./src/app/layout/app-footer/app-footer.component.css")).default]
                })
            ], AppFooterComponent);
            /***/ 
        }),
        /***/ "./src/app/layout/app-header/app-header.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/layout/app-header/app-header.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  background-color: #14233b !important;\n}\n\n.nav-link {\n  color: #ffffff !important;\n}\n\n.navbar-brand {\n  color: #ffffff !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDIzM2IgIWltcG9ydGFudDtcbn1cblxuLm5hdi1saW5rIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/layout/app-header/app-header.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/layout/app-header/app-header.component.ts ***!
          \***********************************************************/
        /*! exports provided: AppHeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function () { return AppHeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppHeaderComponent = /** @class */ (function () {
                function AppHeaderComponent(router) {
                    this.router = router;
                }
                AppHeaderComponent.prototype.ngOnInit = function () { };
                AppHeaderComponent.prototype.logout = function () {
                    localStorage.removeItem("access_token");
                    this.router.navigate([""]);
                };
                return AppHeaderComponent;
            }());
            AppHeaderComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-header",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/app-header/app-header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app-header.component.css */ "./src/app/layout/app-header/app-header.component.css")).default]
                })
            ], AppHeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/layout/blank-layout/blank-layout.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/layout/blank-layout/blank-layout.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ibGFuay1sYXlvdXQvYmxhbmstbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/layout/blank-layout/blank-layout.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/layout/blank-layout/blank-layout.component.ts ***!
          \***************************************************************/
        /*! exports provided: BlankLayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankLayoutComponent", function () { return BlankLayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BlankLayoutComponent = /** @class */ (function () {
                function BlankLayoutComponent() {
                }
                BlankLayoutComponent.prototype.ngOnInit = function () {
                };
                return BlankLayoutComponent;
            }());
            BlankLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-blank-layout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blank-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/blank-layout/blank-layout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blank-layout.component.css */ "./src/app/layout/blank-layout/blank-layout.component.css")).default]
                })
            ], BlankLayoutComponent);
            /***/ 
        }),
        /***/ "./src/app/layout/site-layout/site-layout.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/layout/site-layout/site-layout.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLWxheW91dC9zaXRlLWxheW91dC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/layout/site-layout/site-layout.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/layout/site-layout/site-layout.component.ts ***!
          \*************************************************************/
        /*! exports provided: SiteLayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function () { return SiteLayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SiteLayoutComponent = /** @class */ (function () {
                function SiteLayoutComponent() {
                }
                SiteLayoutComponent.prototype.ngOnInit = function () {
                };
                return SiteLayoutComponent;
            }());
            SiteLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-site-layout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./site-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/site-layout/site-layout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./site-layout.component.css */ "./src/app/layout/site-layout/site-layout.component.css")).default]
                })
            ], SiteLayoutComponent);
            /***/ 
        }),
        /***/ "./src/app/services/auth/auth.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/services/auth/auth.service.ts ***!
          \***********************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AuthService = /** @class */ (function () {
                function AuthService(http) {
                    this.http = http;
                    this.rootURL = "https://manny-fxapp.herokuapp.com";
                }
                AuthService.prototype.userSignin = function (username, password) {
                    return this.http.post(this.rootURL + "/api/users/login", {
                        username: username,
                        password: password
                    });
                };
                AuthService.prototype.registerNewUser = function (email, username, password) {
                    return this.http.post(this.rootURL + "/api/users/register", {
                        email: email,
                        username: username,
                        password: password
                    }, { responseType: "text" });
                };
                AuthService.prototype.getCategories = function () {
                    return this.http.get(this.rootURL + "/api/category", {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            Authorization: localStorage.getItem("access_token")
                        })
                    });
                };
                AuthService.prototype.getBlogByCategory = function (id) {
                    return this.http.get(this.rootURL + "/api/blog/category/" + id, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            Authorization: localStorage.getItem("access_token")
                        })
                    });
                };
                AuthService.prototype.getBlogPostDetails = function (id) {
                    return this.http.get(this.rootURL + "/api/blog/" + id, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            Authorization: localStorage.getItem("access_token")
                        })
                    });
                };
                AuthService.prototype.getRecentBlogPost = function () {
                    return this.http.get(this.rootURL + "/api/blog");
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/wisdom/Desktop/fxapp/fx-frontend/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map