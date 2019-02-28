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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inscripcion_inscripcion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inscripcion/inscripcion.component */ "./src/app/inscripcion/inscripcion.component.ts");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario/formulario.component */ "./src/app/formulario/formulario.component.ts");
/* harmony import */ var _infoGeneral_informacionGeneral_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infoGeneral/informacionGeneral.component */ "./src/app/infoGeneral/informacionGeneral.component.ts");
/* harmony import */ var _cronograma_cronograma_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cronograma/cronograma.component */ "./src/app/cronograma/cronograma.component.ts");
/* harmony import */ var _formularionuevo_formu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formularionuevo/formu.component */ "./src/app/formularionuevo/formu.component.ts");






var appRoutes = [
    { path: 'inscripcion', component: _inscripcion_inscripcion_component__WEBPACK_IMPORTED_MODULE_1__["inscripcion"] },
    { path: 'formu', component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_2__["formu"] },
    { path: 'infogeneral', component: _infoGeneral_informacionGeneral_component__WEBPACK_IMPORTED_MODULE_3__["infoG"] },
    { path: 'cronograma', component: _cronograma_cronograma_component__WEBPACK_IMPORTED_MODULE_4__["crono"] },
    { path: 'form', component: _formularionuevo_formu_component__WEBPACK_IMPORTED_MODULE_5__["formu2"] },
];
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.navbar-brand {\n  font-size: 24px;\n}\n\n.navbar-container {\n  padding: 20px 0 20px 0;\n}\n\n.navbar.navbar-fixed-top.fixed-theme {\n  background-color: #222;\n  border-color: #080808;\n  box-shadow: 0 0 5px rgba(0,0,0,.8);\n\n}\n\n.navbar-nav li a{\n  color: lightgray;\n}\n\n.nav-link:hover{\n  background-color: black;\n}\n\n.nav-link:focus{\n  background-color: transparent;\n}\n\n.navbar-brand.fixed-theme {\n  font-size: 18px;\n\n}\n\n.navbar-container.fixed-theme {\n  padding: 0;\n\n}\n\n.navbar-brand.fixed-theme\n.navbar-container.fixed-theme,\n.navbar.navbar-fixed-top.fixed-theme,\n\n.navbar-brand{\n color: lightgray;\n}\n\n.navbar-container{\n  transition: 0.8s;\n  -webkit-transition:  0.8s;\n}\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGtDQUFrQzs7QUFFcEM7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlOztBQUVqQjs7QUFFQTtFQUNFLFVBQVU7O0FBRVo7O0FBRUE7Ozs7O0NBS0MsZ0JBQWdCO0FBQ2pCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5uYXZiYXItYnJhbmQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5uYXZiYXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcbn1cblxuXG4ubmF2YmFyLm5hdmJhci1maXhlZC10b3AuZml4ZWQtdGhlbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICBib3JkZXItY29sb3I6ICMwODA4MDg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwuOCk7XG5cbn1cbi5uYXZiYXItbmF2IGxpIGF7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG4ubmF2LWxpbms6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLm5hdi1saW5rOmZvY3Vze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5hdmJhci1icmFuZC5maXhlZC10aGVtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcblxufVxuXG4ubmF2YmFyLWNvbnRhaW5lci5maXhlZC10aGVtZSB7XG4gIHBhZGRpbmc6IDA7XG5cbn1cblxuLm5hdmJhci1icmFuZC5maXhlZC10aGVtZVxuLm5hdmJhci1jb250YWluZXIuZml4ZWQtdGhlbWUsXG4ubmF2YmFyLm5hdmJhci1maXhlZC10b3AuZml4ZWQtdGhlbWUsXG5cbi5uYXZiYXItYnJhbmR7XG4gY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5uYXZiYXItY29udGFpbmVye1xuICB0cmFuc2l0aW9uOiAwLjhzO1xuICAtd2Via2l0LXRyYW5zaXRpb246ICAwLjhzO1xufVxuXG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div>\n  <div>\n    <nav id=\"header\" class=\"navbar navbar-fixed-top\">\n      <div id=\"header-container\" class=\"container navbar-container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a id=\"brand\" class=\"navbar-brand\" href=\"#\">Menú</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"nav-item\"><a class=\"nav-link subir\" href={{url1}}>Inicio</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link bajar\" [routerLink]=\"['/infogeneral']\" >Información</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link bajar\" [routerLink]=\"['/inscripcion']\">Requisitos</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link bajar\" [routerLink]=\"['/cronograma']\">Cronograma</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link bajar\" [routerLink]=\"['/form']\" >Inscripción</a></li>\n          </ul>\n        </div><!-- /.nav-collapse -->\n      </div><!-- /.container -->\n    </nav><!-- /.navbar -->\n  </div>\n\n  <!-- <nav class=\"menu navbar navbar-fixed-top navbar-dark navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n       <div class=\"navbar-header\">\n\n         <a class=\"colormenu navbar-brand\" href=\"#\">Menú</a>\n       </div> -->\n  <!-- barra de navegacion con router link -->\n  <!--  <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item\"><a class=\"nav-link subir\" href={{url1}}>Inicio</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link bajar\" [routerLink]=\"['/infogeneral']\" >Información</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link bajar\" [routerLink]=\"['/inscripcion']\">Requisitos</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link bajar\" [routerLink]=\"['/cronograma']\">Cronograma</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link bajar\" [routerLink]=\"['/form']\" >Inscripción</a></li>\n      </ul>\n    </div>\n  </div>\n</nav> -->\n\n\n\n  <fondo-fondo></fondo-fondo>\n\n  <titulo-titulo></titulo-titulo>\n\n  <router-outlet> </router-outlet>\n\n  <piepagina-piepagina>  </piepagina-piepagina>\n\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(_MessageService) {
        this._MessageService = _MessageService;
        this.title = 'Pagina de Maestria';
        this.rutaMenu = _config__WEBPACK_IMPORTED_MODULE_2__["config"].rutaInfo;
        this.url1 = 'localhost:4200';
    }
    AppComponent.prototype.contactForm = function (form) {
        this._MessageService.sendMessage(form).subscribe(function () {
            alert("formu enviado");
        });
    };
    AppComponent.prototype.scroll = function (el) {
        el.scrollIntoView();
    };
    AppComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__('.subir').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('html, body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('.bajar').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('html, body').animate({
                scrollTop: 1050
            }, 1500);
            return false;
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            var myNavBar = {
                flagAdd: true,
                elements: [],
                init: function (elements) {
                    this.elements = elements;
                },
                add: function () {
                    if (this.flagAdd) {
                        for (var i = 0; i < this.elements.length; i++) {
                            document.getElementById(this.elements[i]).className += " fixed-theme";
                        }
                        this.flagAdd = false;
                    }
                },
                remove: function () {
                    for (var i = 0; i < this.elements.length; i++) {
                        document.getElementById(this.elements[i]).className =
                            document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
                    }
                    this.flagAdd = true;
                }
            };
            /**
             * Init the object. Pass the object the array of elements
             * that we want to change when the scroll goes down
             */
            myNavBar.init([
                'header',
                'header-container',
                'brand'
            ]);
            /**
             * Function that manage the direction
             * of the scroll
             */
            function offSetManager() {
                var yOffset = 0;
                var currYOffSet = window.pageYOffset;
                if (yOffset < currYOffSet) {
                    myNavBar.add();
                }
                else if (currYOffSet == yOffset) {
                    myNavBar.remove();
                }
            }
            /**
             * bind to the document scroll detection
             */
            window.onscroll = function (e) {
                offSetManager();
            };
            /**
             * We have to do a first detectation of offset because the page
             * could be load with scroll down set.
             */
            offSetManager();
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fondo_fondo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fondo/fondo.component */ "./src/app/fondo/fondo.component.ts");
/* harmony import */ var _infoGeneral_informacionGeneral_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infoGeneral/informacionGeneral.component */ "./src/app/infoGeneral/informacionGeneral.component.ts");
/* harmony import */ var _inscripcion_inscripcion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inscripcion/inscripcion.component */ "./src/app/inscripcion/inscripcion.component.ts");
/* harmony import */ var _cronograma_cronograma_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cronograma/cronograma.component */ "./src/app/cronograma/cronograma.component.ts");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./formulario/formulario.component */ "./src/app/formulario/formulario.component.ts");
/* harmony import */ var _piepagina_piepagina_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./piepagina/piepagina.component */ "./src/app/piepagina/piepagina.component.ts");
/* harmony import */ var _titulo_titulo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./titulo/titulo.component */ "./src/app/titulo/titulo.component.ts");
/* harmony import */ var _formularionuevo_formu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formularionuevo/formu.component */ "./src/app/formularionuevo/formu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _fondo_fondo_component__WEBPACK_IMPORTED_MODULE_6__["fondo"], _infoGeneral_informacionGeneral_component__WEBPACK_IMPORTED_MODULE_7__["infoG"], _inscripcion_inscripcion_component__WEBPACK_IMPORTED_MODULE_8__["inscripcion"], _cronograma_cronograma_component__WEBPACK_IMPORTED_MODULE_9__["crono"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_10__["formu"], _piepagina_piepagina_component__WEBPACK_IMPORTED_MODULE_11__["pie"], _formularionuevo_formu_component__WEBPACK_IMPORTED_MODULE_13__["formu2"], _titulo_titulo_component__WEBPACK_IMPORTED_MODULE_12__["titulo"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__["RecaptchaModule"].forRoot()
            ],
            providers: [_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["appRoutingProviders"], _services_message_service__WEBPACK_IMPORTED_MODULE_16__["MessageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    rutaFotos: 'assets/fotos/',
    rutaInfo: 'src/app/piepagina/piepagina.component.html',
    rutaInscrip: 'src/app/inscripcion/inscripcion.component.html',
    rutaCrono: 'src/app/cronograma/cronograma.component.html'
};


/***/ }),

/***/ "./src/app/cronograma/cronograma.component.css":
/*!*****************************************************!*\
  !*** ./src/app/cronograma/cronograma.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all{\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  background-color: azure;\n  font-family: \"DejaVu Serif\", sans-serif ;\n  font-size: medium;\n}\n.contenido{\n  margin-left: 50px;\n  margin-right: 50px;\n  padding-top: 20px;\n}\n.cronograma{\n  text-decoration: underline;\n}\n.tabla{\nbackground-color: lightgreen;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Jvbm9ncmFtYS9jcm9ub2dyYW1hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsd0NBQXdDO0VBQ3hDLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY3Jvbm9ncmFtYS9jcm9ub2dyYW1hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxse1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbiAgZm9udC1mYW1pbHk6IFwiRGVqYVZ1IFNlcmlmXCIsIHNhbnMtc2VyaWYgO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cbi5jb250ZW5pZG97XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNyb25vZ3JhbWF7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnRhYmxhe1xuYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/cronograma/cronograma.component.html":
/*!******************************************************!*\
  !*** ./src/app/cronograma/cronograma.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\n<div class=\"container-fluid contenido\">\n<div class=\"row\">\n  <br>\n  <h3 class=\"cronograma\">{{titulo}}</h3>\n  <div class=\"col-sm 12\">\n  <h4>{{activ1}}</h4>\n    <h5>{{txt1}}</h5>\n    <h4>{{activ2}}</h4>\n    <h5>{{txt2}}</h5>\n    <table class=\"table table-hover tabla\">\n      <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Mes</th>\n        <th scope=\"col\">Primer Materia</th>\n        <th scope=\"col\">Segunda Materia</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <th scope=\"row\">1</th>\n        <td>Abril</td>\n        <td>Tópicos Avanzados en Programación Concurrente (Dra. Nadina Martínez Carod)</td>\n        <td>Análisis Estático de Programas Lógicos basado en Interpretación Abstracta (Mg. Claudio Vaucheret)</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">2</th>\n        <td>Mayo</td>\n        <td>Reuso Orientado a Dominios (Dra. Agustina Buccella)</td>\n        <td>Desarrollo Basado en Arquitecturas (Dra. Alejandra Cechich)</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">3</th>\n        <td>Junio</td>\n        <td>Tópicos Avanzados en Pruebas de Software (Dr. Andrés Flores)</td>\n        <td>Computación Orientada a Servicios (Dr. Martín Garriga)</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">5</th>\n        <td>Agosto</td>\n        <td>Ingeniería de Software Empírica (Dr. Luis Reynoso)</td>\n        <td>Gestión y Predicción de Consumo Energético en Cómputo de Altas Prestaciones (Dr. Javier Balladini)</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">6</th>\n        <td>Septiembre</td>\n        <td>Introducción al Gobierno Electrónico (Mg. Juan Manuel Luzuriaga)</td>\n        <td>Ontologías y Web Semántica (Dra. Laura Cecchi)</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">7</th>\n        <td>Octubre</td>\n        <td>Tópicos Formales en Criptografía (Mg. Gerardo Parra)</td>\n        <td>Realidad Aumentada (Mg . Carina Fracchia)</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">8</th>\n        <td>Noviembre</td>\n        <td>Tópicos Avanzados en Redes Locales (Mg. Claudio Zanellato)</td>\n        <td>Métodos y Modelos Computacionales Aplicados (Mg. Adair Martins)</td>\n      </tr>\n      </tbody>\n    </table>\n    <br>\n</div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/cronograma/cronograma.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cronograma/cronograma.component.ts ***!
  \****************************************************/
/*! exports provided: crono */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crono", function() { return crono; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var crono = /** @class */ (function () {
    function crono() {
        this.titulo = 'CRONOGRAMA DE ACTIVIDADES:';
        this.activ1 = 'ACTIVIDADES OBLIGATORIAS MARZO 2019:';
        this.activ2 = 'ACTIVIDADES OBLIGATORIAS JULIO 2019 (para inscriptos en segundo semestre):';
        this.txt1 = 'Curso Metodología de la Investigación  (Dra. Gabriela Aranda)\n' +
            '\n' +
            'Examen de suficiencia de Idioma Inglés\n' +
            '\n';
        this.txt2 = 'Curso Metodología de la Investigación  (Dra. Gabriela Aranda)\n' +
            '\n' +
            '\n' +
            'Examen de suficiencia de Idioma Inglés\n' +
            '\n';
    }
    crono = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cronograma-cronograma',
            template: __webpack_require__(/*! ./cronograma.component.html */ "./src/app/cronograma/cronograma.component.html"),
            styles: [__webpack_require__(/*! ./cronograma.component.css */ "./src/app/cronograma/cronograma.component.css")]
        })
    ], crono);
    return crono;
}());



/***/ }),

/***/ "./src/app/fondo/fondo.component.css":
/*!*******************************************!*\
  !*** ./src/app/fondo/fondo.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fondo{\n  background-image: url('edidos.png');\n  background-size: 115% 110%;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  padding-left: 80px;\n  padding-right: 50px;\n  padding-top: 60px;\n  height: 570px;\n}\n.bigicon {\n  font-size: 20px;\n  color: #36A0FF;\n}\n.gly-spin {\n  -webkit-animation: spin 0.17s 3 linear;\n  animation: spin 0.17s 3 linear;\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n\n  }\n}\n.btn{\n  margin: 2px;\n}\n.colorNombre{\n  color: white;\n}\n.tit1{\n  text-align: center;\n  margin-left: 30px;\n  margin-top: 45px;\n  font-family:Georgia,Time,serif;\n  font-size: 55px;\n  font-weight: bolder;\n  color: white;\n  text-shadow: 1px 1px black;\n}\n.tit2{\n  text-align: center;\n  margin-left: 30px;\n  margin-top: 30px;\n  font-family: Georgia,Times,serif;\n  font-size: 50px;\n  font-weight: bolder;\n  color: white;\n  text-shadow: 1px 1px black;\n}\n.logos{\n  margin-top: 45px;\n  text-align: center;\n}\n.unco{\n  margin-top: 20px;\n  text-align: center;\n}\n.icono{\n  margin-top: 30px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9uZG8vZm9uZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFzRDtFQUN0RCwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxzQ0FBc0M7RUFHdEMsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsaUNBQWlDOztFQUVuQztBQUNGO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZm9uZG8vZm9uZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kb3tcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvZm90b3MvZWRpZG9zLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDExNSUgMTEwJTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgaGVpZ2h0OiA1NzBweDtcbn1cbi5iaWdpY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzM2QTBGRjtcbn1cblxuLmdseS1zcGluIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMC4xN3MgMyBsaW5lYXI7XG4gIC1tb3otYW5pbWF0aW9uOiBzcGluIDAuMTdzIDMgbGluZWFyO1xuICAtby1hbmltYXRpb246IHNwaW4gMC4xN3MgMyBsaW5lYXI7XG4gIGFuaW1hdGlvbjogc3BpbiAwLjE3cyAzIGxpbmVhcjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG5cbiAgfVxufVxuXG4uYnRue1xuICBtYXJnaW46IDJweDtcbn1cbi5jb2xvck5vbWJyZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi50aXQxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiA0NXB4O1xuICBmb250LWZhbWlseTpHZW9yZ2lhLFRpbWUsc2VyaWY7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaztcbn1cblxuLnRpdDJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLFRpbWVzLHNlcmlmO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XG59XG5cbi5sb2dvc3tcbiAgbWFyZ2luLXRvcDogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVuY297XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pY29ub3tcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/fondo/fondo.component.html":
/*!********************************************!*\
  !*** ./src/app/fondo/fondo.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid fondo\">\n\n    <div class=\"row logos\">\n    <div class=\"col-sm-6 unco\">\n      <a href=\"https://www.uncoma.edu.ar/\"> <img class=\"logounco\" type=\"image/png\" src={{fotoRuta}}{{logounco}} rel=\"png\" alt=\"uncologo\" width=\"180\"/></a>\n    </div>\n    <div class=\"col-sm-6 icono\">\n      <a href=\"http://faiweb.uncoma.edu.ar/\"><img class=\"logofai\" type=\"image/png\" src={{fotoRuta}}{{logofai}}  rel=\"png\" alt=\"failogo\" width=\"190\"/></a>\n  </div>\n  </div>\n    <div class=\"row\">\n\n    <div class=\"col-sm-12\">\n        <h1 class=\"tit1\">{{titulo1.toLocaleUpperCase()}}</h1>\n        <h2 class=\"tit2\">{{titulo2}}</h2>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/fondo/fondo.component.ts":
/*!******************************************!*\
  !*** ./src/app/fondo/fondo.component.ts ***!
  \******************************************/
/*! exports provided: fondo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fondo", function() { return fondo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");



var fondo = /** @class */ (function () {
    function fondo() {
        this.fotoRuta = _config__WEBPACK_IMPORTED_MODULE_2__["config"].rutaFotos;
        this.titulo1 = 'Facultad de Informática';
        this.titulo2 = 'UNIVERSIDAD NACIONAL DEL COMAHUE';
        this.logounco = 'logounco.png';
        this.logofai = 'logofaisinfondo.png';
        this.fotounco = 'fotofacu.png';
    }
    fondo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fondo-fondo',
            template: __webpack_require__(/*! ./fondo.component.html */ "./src/app/fondo/fondo.component.html"),
            styles: [__webpack_require__(/*! ./fondo.component.css */ "./src/app/fondo/fondo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], fondo);
    return fondo;
}());



/***/ }),

/***/ "./src/app/formulario/formulario.component.css":
/*!*****************************************************!*\
  !*** ./src/app/formulario/formulario.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Header/Blog Title */\n.header {\n  padding: 20px;\n  font-size: 40px;\n  text-align: center;\n  background: #80A9D3;\n}\n/* Create two unequal columns that floats next to each other */\n/* Left column */\n.leftcolumn {\n  float: center;\n  width: 100%;\n}\n/* Footer */\n.footer {\n  padding: 20px;\n  text-align: center;\n  background: #ddd;\n  margin-top: 20px;\n}\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 800px) {\n  .leftcolumn, .rightcolumn {\n    width: 100%;\n    padding: 0;\n  }\n}\n.topnav {\n  background-color: #333;\n  overflow: hidden;\n}\n/* Style the links inside the navigation bar */\n.topnav a {\n  float: left;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n/* Change the color of links on hover */\n.topnav a:hover {\n  background-color: #ddd;\n  color: black;\n}\n/* Add a color to the active/current link */\n.topnav a.active {\n  background-color: #4CAF50;\n  color: white;\n}\ninput[type=text],[type=\"email\"], select, textarea{\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  resize: vertical;\n}\n/* Style the label to display next to the inputs */\nlabel {\n  padding: 12px 12px 12px 0;\n  display: inline-block;\n}\n/* Style the submit button */\ninput[type=reset] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  float: right;\n}\n/* Style the container */\n.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n}\n/* Floating column for labels: 25% width */\n.col-25 {\n  float: left;\n  width: 25%;\n  margin-top: 6px;\n}\n/* Floating column for inputs: 75% width */\n.col-75 {\n  float: left;\n  width: 75%;\n  margin-top: 6px;\n}\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 700px) {\n  .col-25, .col-75, input[type=submit] {\n    width: 100%;\n    margin-top: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUEsOERBQThEO0FBQzlELGdCQUFnQjtBQUNoQjtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQSwrSUFBK0k7QUFDL0k7RUFDRTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDRjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjtBQUVBLDhDQUE4QztBQUM5QztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUVBLHVDQUF1QztBQUN2QztFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjtBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjtBQUVBLDBDQUEwQztBQUMxQztFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBLDBDQUEwQztBQUMxQztFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBLG1DQUFtQztBQUNuQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUEsK0lBQStJO0FBQy9JO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlYWRlci9CbG9nIFRpdGxlICovXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM4MEE5RDM7XG59XG5cbi8qIENyZWF0ZSB0d28gdW5lcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuLyogTGVmdCBjb2x1bW4gKi9cbi5sZWZ0Y29sdW1uIHtcbiAgZmxvYXQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEZvb3RlciAqL1xuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDgwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAubGVmdGNvbHVtbiwgLnJpZ2h0Y29sdW1uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbi50b3BuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBTdHlsZSB0aGUgbGlua3MgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciAqL1xuLnRvcG5hdiBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiAjZjJmMmYyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi8qIENoYW5nZSB0aGUgY29sb3Igb2YgbGlua3Mgb24gaG92ZXIgKi9cbi50b3BuYXYgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogQWRkIGEgY29sb3IgdG8gdGhlIGFjdGl2ZS9jdXJyZW50IGxpbmsgKi9cbi50b3BuYXYgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sW3R5cGU9XCJlbWFpbFwiXSwgc2VsZWN0LCB0ZXh0YXJlYXtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLyogU3R5bGUgdGhlIGxhYmVsIHRvIGRpc3BsYXkgbmV4dCB0byB0aGUgaW5wdXRzICovXG5sYWJlbCB7XG4gIHBhZGRpbmc6IDEycHggMTJweCAxMnB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gKi9cbmlucHV0W3R5cGU9cmVzZXRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLyogU3R5bGUgdGhlIGNvbnRhaW5lciAqL1xuLmNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogRmxvYXRpbmcgY29sdW1uIGZvciBsYWJlbHM6IDI1JSB3aWR0aCAqL1xuLmNvbC0yNSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi8qIEZsb2F0aW5nIGNvbHVtbiBmb3IgaW5wdXRzOiA3NSUgd2lkdGggKi9cbi5jb2wtNzUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA2MDBweCB3aWRlLCBtYWtlIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmNvbC0yNSwgLmNvbC03NSwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/formulario/formulario.component.html":
/*!******************************************************!*\
  !*** ./src/app/formulario/formulario.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  // Acá colocamos nuestro formulario HTML\n\n  <div class=\"starter-template\">\n\n    <div class=\"row\">\n\n      <div class=\"col-md-12 mt-5\">\n\n        <h1>{{ titulo }} </h1>\n\n        <form [formGroup]=\"contacto\" (ngSubmit)=\"onSubmit()\" >\n          <div class=\"form-group\">\n            <label>Nombres y Apellidos</label>\n            <input type=\"text\" formControlName=\"#nya\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nya.errors }\" />\n            <div *ngIf=\"submitted && f.nya.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.nya.errors.required\">Por favor, ingresa tus Nombres y Apellidos</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">El email es obligatorio</div>\n              <div *ngIf=\"f.email.errors.email\">Por favor, ingresa tu Email</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Asunto</label>\n            <input type=\"text\" formControlName=\"asunto\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.asunto.errors }\" />\n            <div *ngIf=\"submitted && f.asunto.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.asunto.errors.required\">Por favor, ingresa el Asunto</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"postre\"> Postre</label>\n            <select class=\"form-control\" formControlName=\"postre\" [ngClass]=\"{ 'is-invalid': submitted && f.postre.errors }\">\n              <option value=\"\">Seleccionar</option>\n              <option value=\"Crema Volteada\">Crema Volteada</option>\n              <option value=\"Gelatina de Fresa\">Gelatina de Fresa</option>\n              <option value=\"Keke de Naranja\">Keke de Naranja</option>\n              <option value=\"Pie de Manzana\">Pie de Manzana</option>\n              <option value=\"Torta de Chocolate\">Torta de Chocolate</option>\n\n            </select>\n            <div *ngIf=\"submitted && f.postre.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.postre.errors.required\">Por favor, Selecciona el Postre</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"mensaje\">Mensaje</label>\n            <textarea class=\"form-control\" formControlName=\"mensaje\" rows=\"3\" [ngClass]=\"{ 'is-invalid': submitted && f.mensaje.errors }\"></textarea>\n            <div *ngIf=\"submitted && f.mensaje.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.mensaje.errors.required\">Por favor, ingresa el Mensaje</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Aceptar</button>\n          </div>\n\n        </form>\n\n      </div>\n\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/formulario/formulario.component.ts":
/*!****************************************************!*\
  !*** ./src/app/formulario/formulario.component.ts ***!
  \****************************************************/
/*! exports provided: formu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formu", function() { return formu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var formu = /** @class */ (function () {
    function formu() {
    }
    formu = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'formulario-formulario',
            template: __webpack_require__(/*! ./formulario.component.html */ "./src/app/formulario/formulario.component.html"),
            styles: [__webpack_require__(/*! ./formulario.component.css */ "./src/app/formulario/formulario.component.css")]
        })
    ], formu);
    return formu;
}());



/***/ }),

/***/ "./src/app/formularionuevo/formu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/formularionuevo/formu.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tituloformulario{\n  background-color: #2586d7;\n\n}\n.tituloinscripcion{\n  font-size: 30px;\n  color: white;\n}\n.logo{\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.bordeado{\n  margin-top: 15px;\n}\n.sixteen.columns.top-1.bottom-3.bordeado > p {\n  color: red;\n}\n.container.clearfix > p {\n  margin-bottom: 20px;\n}\n.one-third.column.widget > img {\n  float: left;\n  margin-right: 15px;\n  margin-bottom: 30px;\n}\n.one-third.column.widget > p {\n  margin-bottom: 10px;\n}\n.one-third.column.widget > img {\n  float: left;\n  margin-right: 15px;\n  margin-top: 5px;\n}\n.one-third.column.widget > p {\n  margin-bottom: 10px;\n}\n.one-third.column.widget > img {\n  float: left;\n  margin-right: 15px;\n}\n.one-third.column.widget > img {\n  float: left;\n  margin-right: 15px;\n  margin-top: 4px;\n}\n.one-third.column.widget > p {\n  margin-top: 2px;\n}\n.copyright > a {\n  color: white;\n}\n.copyright > a {\n  color: white;\n}\n.copyright > a {\n  color: white;\n}\n.uno{\n  margin-top: 10px;\n}\n.dos{\n  margin-top: -7px;\n}\n.botonenviar{\n  margin-bottom: 5px;\n  height: 30px;\n  padding-bottom: 33px;\n}\n.captcha{\n  margin-left: 164px;\n  bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXVsYXJpb251ZXZvL2Zvcm11LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7O0FBRTNCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9mb3JtdWxhcmlvbnVldm8vZm9ybXUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG9mb3JtdWxhcmlve1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU4NmQ3O1xuXG59XG4udGl0dWxvaW5zY3JpcGNpb257XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvZ297XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uYm9yZGVhZG97XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zaXh0ZWVuLmNvbHVtbnMudG9wLTEuYm90dG9tLTMuYm9yZGVhZG8gPiBwIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmNvbnRhaW5lci5jbGVhcmZpeCA+IHAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ub25lLXRoaXJkLmNvbHVtbi53aWRnZXQgPiBpbWcge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ub25lLXRoaXJkLmNvbHVtbi53aWRnZXQgPiBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm9uZS10aGlyZC5jb2x1bW4ud2lkZ2V0ID4gaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ub25lLXRoaXJkLmNvbHVtbi53aWRnZXQgPiBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm9uZS10aGlyZC5jb2x1bW4ud2lkZ2V0ID4gaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm9uZS10aGlyZC5jb2x1bW4ud2lkZ2V0ID4gaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4ub25lLXRoaXJkLmNvbHVtbi53aWRnZXQgPiBwIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uY29weXJpZ2h0ID4gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvcHlyaWdodCA+IGEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb3B5cmlnaHQgPiBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnVub3tcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5kb3N7XG4gIG1hcmdpbi10b3A6IC03cHg7XG59XG5cbi5ib3RvbmVudmlhcntcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzM3B4O1xufVxuXG4uY2FwdGNoYXtcbiAgbWFyZ2luLWxlZnQ6IDE2NHB4O1xuICBib3R0b206IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/formularionuevo/formu.component.html":
/*!******************************************************!*\
  !*** ./src/app/formularionuevo/formu.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<!-- Cargar la librería principal -->\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js\"></script>\n\n<!-- Como nuestro script no será muy grande, podemos ponerlo en el HTML -->\n<script>\n  .module(\"formularios\", [])\n    .controller(\"ControladorPrincipal\", [function(){\n      $scope.model= {};\n      $scope.guardar = function(){\n        $http.post(\"./recibir.php\", angular.toJson($scope.model))\n          .then(function(respuesta){\n            /*\n                          Esto se ejecuta si todo va bien. Podemos leer la respuesta\n                          que nos dio el servidor accediendo a la propiedad data\n                          Recordemos que tenemos que decodificarla, ya que si enviamos con JSON\n                          deben respondernos con JSON (no es obligatorio, pero sí es una buena práctica)\n                      */\n            console.log(\"Petición terminada. La respuesta es: \", angular.fromJson(respuesta.data));\n            /*\n                          Finalmente \"limpiamos\" el formulario\n                          estableciendo mascota a un objeto vacío\n                      */\n            $scope.model = {};\n          });\n      };\n    }]);\n</script>\n\n<body>\n<header class=\"style-3 \">\n  <div class=\"top-bar\"></div>\n  <div class=\"main-header\">\n    <div class=\"container clearfix\">\n      <div class=\"eleven columns\">\n        <!-- logo de la unco -->\n        <div class=\"logo\"> <a href=\"https://www.uncoma.edu.ar/\"> <img src=\"{{fotoRuta}}{{logounco}}\" alt=\"Universidad del Comahue\" title=\"Universidad del Comahue\" style=\"width:120px;\"> </a></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"page-title tituloformulario\">\n    <div class=\"container clearfix \">\n      <div class=\"sixteen columns\">\n        <h1 class=\"tituloinscripcion\">Formulario de inscripción online</h1>\n      </div>\n    </div>\n  </div>\n</header>\n\n<!-- comienzo del formulario -->\n<div class=\"container\">\n\n  <div id=\"signupbox\" style=\" margin-top:50px\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n    <div class=\"panel panel-info\">\n\n      <div class=\"panel-heading\">\n        <div class=\"panel-title\"></div>\n        <div style=\"float:right; font-size: 85%; position: relative; top: 10px\"></div>\n      </div>\n\n      <div class=\"panel-body\" >\n\n          <form  class=\"form-horizontal\" method=\"post\" (ngSubmit)=\"onSubmit()\" #personaForm=\"ngForm\"  >\n\n            <div class=\"form-group \">\n              <label for=\"nombre\" class=\"control-label col-md-4 \"> Nombre<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input type=\"text\" class=\"form-control\"  placeholder=\"Ingrese su nombre\" id=\"nombre\" required  [(ngModel)]=\"model.nombre\" name=\"nombre\"  #nombre=\"ngModel\">\n\n                <div [hidden]=\"nombre.valid || nombre.pristine\"\n                     class=\"alert alert-danger uno\">\n                  Nombre es requerido\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"form-group \">\n              <label for=\"apellido\" class=\"control-label col-md-4  \"> Apellido<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md  textInput form-control\"  placeholder=\"Ingrese su apellido\" style=\"margin-bottom: 10px\" type=\"text\" required [(ngModel)]=\"model.apellido\" name=\"apellido\"\n                       #apellido=\"ngModel\"/>\n                <div [hidden]=\"apellido.valid || apellido.pristine\"\n                     class=\"alert alert-danger\">\n                  Apellido es requerido\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group \">\n              <label for=\"email\" class=\"control-label col-md-4  \"> Email<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md emailinput form-control\" type=\"email\"   placeholder=\"Ingrese su email\" style=\"margin-bottom: 10px\" type=\"email\" required\n                       [(ngModel)]=\"model.email\" name=\"email\"\n                       #email=\"ngModel\">\n                <div [hidden]=\"email.valid || email.pristine\"\n                     class=\"alert alert-danger\">\n                  Email es requerido\n                </div>\n              </div>\n            </div>\n\n\n            <div  class=\"form-group \">\n              <label for=\"doc\" class=\"control-label col-md-4  \"> Documento<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md emailinput form-control\" minlength=\"8\" placeholder=\"Ingrese su documento\" style=\"margin-bottom: 10px\" type=\"text\" required pattern=\"[0-9]+\"\n                       [(ngModel)]=\"model.doc\" name=\"doc\"\n                       #doc=\"ngModel\"/>\n                <div [hidden]=\"doc.valid || doc.pristine\"\n                     class=\"alert alert-danger\">\n                  Dni es incorrecto\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"form-group \">\n              <label for=\"genero\"  class=\"control-label col-md-4 \"> Genero<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \"  style=\"margin-bottom: 10px\">\n                <label class=\"radio-inline\"> <input type=\"radio\" name=\"gender\" id=\"id_gender_1\" value=\"M\"  style=\"margin-bottom: 10px\" checked >Masculino</label>\n                <label class=\"radio-inline\"> <input type=\"radio\" name=\"gender\" id=\"id_gender_2\" value=\"F\"  style=\"margin-bottom: 10px\">Femenino </label>\n              </div>\n            </div>\n\n\n            <div class=\"form-group \">\n              <label for=\"numero\" class=\"control-label col-md-4  \"> Numero de contacto<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <input class=\"input-md textInput form-control \" placeholder=\"Ingrese su número\" style=\"margin-bottom: 10px\" type=\"text\" required pattern=\"[0-9]+\"\n                       [(ngModel)]=\"model.numero\" name=\"numero\"\n                       #numero=\"ngModel\"/>\n                <div [hidden]=\"numero.valid || numero.pristine\"\n                     class=\"alert alert-danger\">\n                  Numero es requerido\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"form-group \">\n              <label for=\"locacion\" class=\"control-label col-md-4 \"> Nacionalidad<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \">\n                <select name=\"nacionalidad\" id=\"nacio\" class=\"form-control nacionalidad\" autocomplete=\"off\" required\n                        [(ngModel)]=\"model.nacio\" name=\"nacio\"\n                        #nacio=\"ngModel\">\n                  <option value=\"\" selected=\"\"></option>\n                  <option title=\"Argentina\" value=\"ARG\">Argentina</option>\n                  <option title=\"Boliviana\" value=\"BOL\">Boliviana</option>\n                  <option title=\"Brasileña\" value=\"BRA\">Brasileña</option>\n                  <option title=\"Chilena\" value=\"CHL\">Chilena</option>\n                  <option title=\"Colombiana\" value=\"COL\">Colombiana</option>\n                  <option title=\"Ecuatoriana\" value=\"ECU\">Ecuatoriana</option>\n                  <option title=\"Paraguaya\" value=\"PRY\">Paraguaya</option>\n                  <option title=\"Peruana\" value=\"PER\">Peruana</option>\n                  <option title=\"Uruguaya\" value=\"URY\">Uruguaya</option>\n                  <option title=\"Venezolana\" value=\"VEN\">Venezolana</option>\n                  <option title=\"Afgana\" value=\"AFG\">Afgana</option>\n                  <option title=\"Albanesa\" value=\"ALB\">Albanesa</option>\n                  <option title=\"Alemana\" value=\"DEU\">Alemana</option>\n                  <option title=\"Andorrana\" value=\"AND\">Andorrana</option>\n                  <option title=\"Angoleña\" value=\"AGO\">Angoleña</option>\n                  <option title=\"Anguila\" value=\"AIA\">Anguila</option>\n                  <option title=\"Antartida\" value=\"ATA\">Antartida</option>\n                  <option title=\"Antillas Neerlandesas\" value=\"ANT\">Antillas Neerlandesas</option>\n                  <option title=\"Arabe Saudita\" value=\"SAU\">Arabe Saudita</option>\n                  <option title=\"Argelina\" value=\"DZA\">Argelina</option>\n                  <option title=\"Argentina\" value=\"ARH\">Argentina, Ciudadano naturalizado</option>\n                  <option title=\"Armenia\" value=\"ARM\">Armenia</option>\n                  <option title=\"Aruba\" value=\"ABW\">Aruba</option><option title=\"Australiana\" value=\"AUS\">Australiana</option><option title=\"Austríaca\" value=\"AUT\">Austríaca</option><option title=\"Azerbaijana\" value=\"AZE\">Azerbaijana</option><option title=\"Bahamesa\" value=\"BHS\">Bahamesa</option><option title=\"Barbadense\" value=\"BRB\">Barbadense</option><option title=\"Belga\" value=\"BEL\">Belga</option><option title=\"Beliceña\" value=\"BLZ\">Beliceña</option><option title=\"Beninesa\" value=\"BEN\">Beninesa</option><option title=\"Bermudas\" value=\"BMU\">Bermudas</option><option title=\"Bhutanesa\" value=\"BTN\">Bhutanesa</option><option title=\"Bielorrusa (belarusa)\" value=\"BLR\">Bielorrusa (belarusa)</option><option title=\"Botswanesa/(bechuana)\" value=\"BWA\">Botswanesa/(bechuana)</option><option title=\"Burundiana\" value=\"BDI\">Burundiana</option><option title=\"Búlgara\" value=\"BGR\">Búlgara</option><option title=\"Caboverdiana\" value=\"CPV\">Caboverdiana</option><option title=\"Camboyana\" value=\"KHM\">Camboyana</option><option title=\"Camerunesa\" value=\"CMR\">Camerunesa</option><option title=\"Canadiense\" value=\"CAN\">Canadiense</option><option title=\"Centroafricana\" value=\"CAF\">Centroafricana</option><option title=\"Chadiana\" value=\"TCD\">Chadiana</option><option title=\"Checa\" value=\"CZE\">Checa</option><option title=\"China\" value=\"CHN\">China</option><option title=\"Chipriota\" value=\"CYP\">Chipriota</option><option title=\"Comorana\" value=\"COM\">Comorana</option><option title=\"Congoleña\" value=\"COG\">Congoleña</option><option title=\"Congoleña/(zairense)\" value=\"COD\">Congoleña/(zairense)</option><option title=\"Coreana\" value=\"KOR\">Coreana</option><option title=\"Costarricense\" value=\"CRI\">Costarricense</option><option title=\"Croata\" value=\"HRV\">Croata</option><option title=\"Cubana\" value=\"CUB\">Cubana</option><option title=\"Danesa/dinamarquesa\" value=\"DNK\">Danesa/dinamarquesa</option><option title=\"De Brunei Darussalam\" value=\"BRN\">De Brunei Darussalam</option><option title=\"De Burkina Faso/(VOLTENSE)\" value=\"BFA\">De Burkina Faso/(VOLTENSE)</option><option title=\"De GUINEA\" value=\"GIN\">De GUINEA</option><option title=\"De GUINEA ECUATORIAL\" value=\"GNQ\">De GUINEA ECUATORIAL</option><option title=\"De GUINEA-BISSAU\" value=\"GNB\">De GUINEA-BISSAU</option><option title=\"De las Islas Marshall\" value=\"MHL\">De las Islas Marshall</option><option title=\"Dominicana\" value=\"DOM\">Dominicana</option><option title=\"Egipcia\" value=\"EGY\">Egipcia</option><option title=\"Eritrea\" value=\"ERI\">Eritrea</option><option title=\"Eslovaca\" value=\"SVK\">Eslovaca</option><option title=\"Eslovena\" value=\"SVN\">Eslovena</option><option title=\"Española\" value=\"ESP\">Española</option><option title=\"Estadounidense\" value=\"USA\">Estadounidense</option><option title=\"Estonia\" value=\"EST\">Estonia</option><option title=\"Etíope\" value=\"ETH\">Etíope</option><option title=\"Filipina\" value=\"PHL\">Filipina</option><option title=\"Finlandesa/finesa\" value=\"FIN\">Finlandesa/finesa</option><option title=\"Francesa\" value=\"FRA\">Francesa</option><option title=\"Gabonesa\" value=\"GAB\">Gabonesa</option><option title=\"Gambia\" value=\"GMB\">Gambia</option><option title=\"Georgiana\" value=\"GEO\">Georgiana</option><option title=\"Ghanesa\" value=\"GHA\">Ghanesa</option><option title=\"Gibraltar\" value=\"GIB\">Gibraltar</option><option title=\"Granadina\" value=\"GRD\">Granadina</option><option title=\"Griega\" value=\"GRC\">Griega</option><option title=\"Groenlandia\" value=\"GRL\">Groenlandia</option><option title=\"Guadalupe\" value=\"GLP\">Guadalupe</option><option title=\"Guam\" value=\"GUM\">Guam</option><option title=\"Guatemalteca\" value=\"GTM\">Guatemalteca</option><option title=\"Guyanesa\" value=\"GUF\">Guyanesa</option><option title=\"HONG KONG con nuevo Pte. S.A.R.\" value=\"HKG\">HONG KONG con nuevo Pte. S.A.R.</option><option title=\"Haitiana\" value=\"HTI\">Haitiana</option><option title=\"Hondureña\" value=\"HND\">Hondureña</option><option title=\"Húngara\" value=\"HUN\">Húngara</option><option title=\"India\" value=\"IND\">India</option><option title=\"Indonesia\" value=\"IDN\">Indonesia</option><option title=\"Iraní\" value=\"IRN\">Iraní</option><option title=\"Iraquí\" value=\"IRQ\">Iraquí</option><option title=\"Irlandesa\" value=\"IRL\">Irlandesa</option><option title=\"Isla Bouvet\" value=\"BVT\">Isla Bouvet</option><option title=\"Isla Christmas\" value=\"CXR\">Isla Christmas</option><option title=\"Isla Norfolk\" value=\"NFK\">Isla Norfolk</option><option title=\"Islandesa\" value=\"ISL\">Islandesa</option><option title=\"Islas Caimán\" value=\"CYM\">Islas Caimán</option><option title=\"Islas Cocos\" value=\"CCK\">Islas Cocos</option><option title=\"Islas Cook\" value=\"COK\">Islas Cook</option><option title=\"Islas Feroe\" value=\"FRO\">Islas Feroe</option><option title=\"Islas Georgia S. y Sandwich S.\" value=\"SGS\">Islas Georgia S. y Sandwich S.</option><option title=\"Islas Heard y McDonald\" value=\"HMD\">Islas Heard y McDonald</option><option title=\"Islas Malvinas\" value=\"FLK\">Islas Malvinas</option><option title=\"Islas Marianas del Norte\" value=\"MNP\">Islas Marianas del Norte</option><option title=\"Islas Menores Alejadas de EEUU\" value=\"UMI\">Islas Menores Alejadas de EEUU</option><option title=\"Islas Pitcairn\" value=\"PCN\">Islas Pitcairn</option><option title=\"Islas Turcas y Caicos\" value=\"TCA\">Islas Turcas y Caicos</option><option title=\"Islas Vírgenes Americanas\" value=\"VIR\">Islas Vírgenes Americanas</option><option title=\"Islas Vírgenes Británicas\" value=\"VGB\">Islas Vírgenes Británicas</option><option title=\"Israelí\" value=\"ISR\">Israelí</option><option title=\"Italiana\" value=\"ITA\">Italiana</option><option title=\"Jamaiquina\" value=\"JAM\">Jamaiquina</option><option title=\"Japonesa /(nipona)\" value=\"JPN\">Japonesa /(nipona)</option><option title=\"Jordana\" value=\"JOR\">Jordana</option><option title=\"Kazaka\" value=\"KAZ\">Kazaka</option><option title=\"Keniana\" value=\"KEN\">Keniana</option><option title=\"Kirguisa\" value=\"KGZ\">Kirguisa</option><option title=\"Kiribatí/kiribatiana\" value=\"KIR\">Kiribatí/kiribatiana</option><option title=\"Kuwaití\" value=\"KWT\">Kuwaití</option><option title=\"Laosiana\" value=\"LAO\">Laosiana</option><option title=\"Letona            \" value=\"LVA\">Letona            </option><option title=\"Libanesa\" value=\"LBN\">Libanesa</option><option title=\"Liberiana\" value=\"LBR\">Liberiana</option><option title=\"Libia\" value=\"LBY\">Libia</option><option title=\"Lituana           \" value=\"LTU\">Lituana           </option><option title=\"Luxemburguesa\" value=\"LUX\">Luxemburguesa</option><option title=\"Macao\" value=\"MAC\">Macao</option><option title=\"Macedonia\" value=\"MKD\">Macedonia</option><option title=\"Malawiana\" value=\"MWI\">Malawiana</option><option title=\"Malaya/malasia\" value=\"MYS\">Malaya/malasia</option><option title=\"Maldiva \" value=\"MDV\">Maldiva </option><option title=\"Malgache\" value=\"MDG\">Malgache</option><option title=\"Maliense\" value=\"MLI\">Maliense</option><option title=\"Maltesa\" value=\"MLT\">Maltesa</option><option title=\"Martinica\" value=\"MTQ\">Martinica</option><option title=\"Mauriciana\" value=\"MAR\">Mauriciana</option><option title=\"Mauricio\" value=\"MUS\">Mauricio</option><option title=\"Mauritana\" value=\"MRT\">Mauritana</option><option title=\"Mayotte\" value=\"MYT\">Mayotte</option><option title=\"Mexicana\" value=\"MEX\">Mexicana</option><option title=\"Moldova\" value=\"MDA\">Moldova</option><option title=\"Monegasca\" value=\"MCO\">Monegasca</option><option title=\"Mongola\" value=\"MNG\">Mongola</option><option title=\"Montenegrina\" value=\"MNE\">Montenegrina</option><option title=\"Montserrat\" value=\"MSR\">Montserrat</option><option title=\"Mozambiqueña\" value=\"MOZ\">Mozambiqueña</option><option title=\"Namibiana\" value=\"NAM\">Namibiana</option><option title=\"Nauruana\" value=\"NRU\">Nauruana</option><option title=\"Neerlandesa\" value=\"NLD\">Neerlandesa</option><option title=\"Neocelandesa\" value=\"NZL\">Neocelandesa</option><option title=\"Nepalesa\" value=\"NPL\">Nepalesa</option><option title=\"Nicaraguense\" value=\"NIC\">Nicaraguense</option><option title=\"Nigeriana\" value=\"NGA\">Nigeriana</option><option title=\"Nigerina\" value=\"NER\">Nigerina</option><option title=\"Niue\" value=\"NIU\">Niue</option><option title=\"Norcoreana\" value=\"PRK\">Norcoreana</option><option title=\"Noruega\" value=\"NOR\">Noruega</option><option title=\"Nueva Caledonia\" value=\"NCL\">Nueva Caledonia</option><option title=\"Omaní\" value=\"OMN\">Omaní</option><option title=\"Pakistaní/paquistaní\" value=\"PAK\">Pakistaní/paquistaní</option><option title=\"Panameña\" value=\"PAN\">Panameña</option><option title=\"Polaca\" value=\"POL\">Polaca</option><option title=\"Polinesia Francesa\" value=\"PYF\">Polinesia Francesa</option><option title=\"Portuguesa\" value=\"PRT\">Portuguesa</option><option title=\"Puerto Rico\" value=\"PRI\">Puerto Rico</option><option title=\"Reino Unido\" value=\"GBR\">Reino Unido</option><option title=\"Reunión\" value=\"REU\">Reunión</option><option title=\"Rumana\" value=\"ROM\">Rumana</option><option title=\"Rusa\" value=\"RUS\">Rusa</option><option title=\"Rwandesa\" value=\"RWA\">Rwandesa</option><option title=\"Salvadoreña\" value=\"SLV\">Salvadoreña</option><option title=\"Samoa Americana\" value=\"ASM\">Samoa Americana</option><option title=\"Samoana\" value=\"WSM\">Samoana</option><option title=\"San Pedro y Miquelón\" value=\"SPM\">San Pedro y Miquelón</option><option title=\"Sanmarinense\" value=\"SMR\">Sanmarinense</option><option title=\"Santa Elena\" value=\"SHN\">Santa Elena</option><option title=\"Santalucense\" value=\"LCA\">Santalucense</option><option title=\"Senegalesa\" value=\"SEN\">Senegalesa</option><option title=\"Serbio\" value=\"SRB\">Serbio</option><option title=\"Sierraleonesa\" value=\"SLE\">Sierraleonesa</option><option title=\"Singapurense\" value=\"SGP\">Singapurense</option><option title=\"Siria\" value=\"SYR\">Siria</option><option title=\"Somalí\" value=\"SOM\">Somalí</option><option title=\"Sudafricana\" value=\"ZAF\">Sudafricana</option><option title=\"Sudanesa\" value=\"SDN\">Sudanesa</option><option title=\"Sueca\" value=\"SWE\">Sueca</option><option title=\"Suiza\" value=\"CHE\">Suiza</option><option title=\"Surinamesa\" value=\"SUR\">Surinamesa</option><option title=\"Svalbard y Jan Mayen\" value=\"SJM\">Svalbard y Jan Mayen</option><option title=\"Swazi\" value=\"SWZ\">Swazi</option><option title=\"Tadjika /tadjik\" value=\"TJK\">Tadjika /tadjik</option><option title=\"Tailandesa\" value=\"THA\">Tailandesa</option><option title=\"Taiwanesa\" value=\"TWN\">Taiwanesa</option><option title=\"Tanzaniana\" value=\"TZA\">Tanzaniana</option><option title=\"Terr. Britán del Océano índico\" value=\"IOT\">Terr. Britán del Océano índico</option><option title=\"Territor. Australes Franceses\" value=\"ATF\">Territor. Australes Franceses</option><option title=\"Togolesa\" value=\"TGO\">Togolesa</option><option title=\"Tokelau\" value=\"TKL\">Tokelau</option><option title=\"Tongana\" value=\"TON\">Tongana</option><option title=\"Tunecina\" value=\"TUN\">Tunecina</option><option title=\"Turca\" value=\"TUR\">Turca</option><option title=\"Turcomana\" value=\"TKM\">Turcomana</option><option title=\"Ucraniana\" value=\"UKR\">Ucraniana</option><option title=\"Ugandesa\" value=\"UGA\">Ugandesa</option><option title=\"Uzbeka\" value=\"UZB\">Uzbeka</option><option title=\"Vietnamita\" value=\"VNM\">Vietnamita</option><option title=\"Wallis y Futuna\" value=\"WLF\">Wallis y Futuna</option><option title=\"Yemenita\" value=\"YEM\">Yemenita</option><option title=\"Yibuti\" value=\"DJI\">Yibuti</option><option title=\"Yugoslava\" value=\"YUG\">Yugoslava</option><option title=\"Zambiana\" value=\"ZMB\">Zambiana</option><option title=\"Zimbabwense\" value=\"ZWE\">Zimbabwense</option><option title=\"de Antigua y Barbuda\" value=\"ATG\">de Antigua y Barbuda</option><option title=\"de Bahrein/Bahreinita\" value=\"BHR\">de Bahrein/Bahreinita</option><option title=\"de Bangladesh(BENGALI)\" value=\"BGD\">de Bangladesh(BENGALI)</option><option title=\"de Bosnia y Herzegovina\" value=\"BIH\">de Bosnia y Herzegovina</option><option title=\"de Costa de Marfil\" value=\"CIV\">de Costa de Marfil</option><option title=\"de Dominica\" value=\"DMA\">de Dominica</option><option title=\"de Fidji\" value=\"FJI\">de Fidji</option><option title=\"de Lesotho/Lesotha\" value=\"LSO\">de Lesotho/Lesotha</option><option title=\"de Liechtenstein\" value=\"LIE\">de Liechtenstein</option><option title=\"de Myanmar/(BIRMANA)\" value=\"MMR\">de Myanmar/(BIRMANA)</option><option title=\"de Palau\" value=\"PLW\">de Palau</option><option title=\"de Papua Nueva Guinea\" value=\"PNG\">de Papua Nueva Guinea</option><option title=\"de Qatar\" value=\"QAT\">de Qatar</option><option title=\"de República Arabe Saharaui democrática\" value=\"ESH\">de República Arabe Saharaui democrática</option><option title=\"de San Cristobal y Nevis\" value=\"KNA\">de San Cristobal y Nevis</option><option title=\"de San Vicente y las Granadinas\" value=\"VCT\">de San Vicente y las Granadinas</option><option title=\"de Santo Tomé y Príncipe\" value=\"STP\">de Santo Tomé y Príncipe</option><option title=\"de Seychelles\" value=\"SYC\">de Seychelles</option><option title=\"de Sri Lanka\" value=\"LKA\">de Sri Lanka</option><option title=\"de Timor-Leste (ex Timor Oriental)\" value=\"TMP\">de Timor-Leste (ex Timor Oriental)</option><option title=\"de Trinidad y Tobago\" value=\"TTO\">de Trinidad y Tobago</option><option title=\"de Tuvalu/Tuvaluana\" value=\"TUV\">de Tuvalu/Tuvaluana</option><option title=\"de Vanautu\" value=\"VUT\">de Vanautu</option><option title=\"de la Santa Sede(Vaticano)\" value=\"VAT\">de la Santa Sede(Vaticano)</option><option title=\"de las Islas Salomón\" value=\"SLB\">de las Islas Salomón</option><option title=\"de los Emiratos Arabes Unidos\" value=\"ARE\">de los Emiratos Arabes Unidos</option><option title=\"de los Est. Fed. de Micronesia\" value=\"FSM\">de los Est. Fed. de Micronesia</option>\n                </select>\n                <br>\n                <div [hidden]=\"nacio.valid || nacio.pristine\"\n                     class=\"alert alert-danger dos\">\n                  Nacionalidad es requerida\n                </div>\n              </div>\n            </div>\n\n            <!-- captcha -->\n            <div class=\"captcha col-md-12 centered\">\n\n              <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6Lex65AUAAAAANyBRE5Cl37QhcJgCDWDrME0me-k\"></re-captcha>\n\n              </div>\n              <div  style=\"float: right; margin-right: 107px;\">\n\n                <!-- boton enviar -->\n              <button type=\"reset\" class=\"btn btn-primary btn-lg col-md-5  botonenviar\" (click)=\"guardar()\" [disabled]=\"!personaForm.form.valid\">Enviar</button>\n\n              <button type=\"button\" class=\"btn btn-default col-md-8 \" (click)=\"newPersona(); personaForm.reset()\">Nueva inscripción</button>\n\n            </div>\n         <!--   <pre>{{model | json}}</pre> -->\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"textoEnviado\">\n  <div [hidden]=\"!submitted\">\n    <h2>Su consulta se envió:</h2>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Nombre:</div>\n      <div class=\"col-xs-9\">{{ model.nombre }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Apellido:</div>\n      <div class=\"col-xs-9\">{{ model.apellido }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Email</div>\n      <div class=\"col-xs-9\">{{ model.email }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Documento:</div>\n      <div class=\"col-xs-9\">{{ model.doc }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Telefono:</div>\n      <div class=\"col-xs-9\">{{ model.numero }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Nacionalidad:</div>\n      <div class=\"col-xs-9\">{{ model.nacio }}</div>\n    </div>\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"submitted=false\">Editar</button>\n  </div>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/formularionuevo/formu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/formularionuevo/formu.component.ts ***!
  \****************************************************/
/*! exports provided: formu2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formu2", function() { return formu2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person */ "./src/app/formularionuevo/person.ts");




var formu2 = /** @class */ (function () {
    function formu2() {
        this.model = new _person__WEBPACK_IMPORTED_MODULE_3__["Persona"](0, null, null, null, null, null);
        this.submitted = false;
        this.logounco = 'logounco.png';
        this.fotoRuta = _config__WEBPACK_IMPORTED_MODULE_2__["config"].rutaFotos;
    }
    formu2.prototype.onSubmit = function () { this.submitted = true; };
    formu2.prototype.newPersona = function () {
        this.model = new _person__WEBPACK_IMPORTED_MODULE_3__["Persona"](1, null, null, null, null, null);
    };
    formu2.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
    };
    formu2.prototype.guardar = function () {
        console.log(this.model);
        alert('El mensaje se envio');
    };
    formu2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'formu-formu',
            template: __webpack_require__(/*! ./formu.component.html */ "./src/app/formularionuevo/formu.component.html"),
            styles: [__webpack_require__(/*! ./formu.component.css */ "./src/app/formularionuevo/formu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], formu2);
    return formu2;
}());



/***/ }),

/***/ "./src/app/formularionuevo/person.ts":
/*!*******************************************!*\
  !*** ./src/app/formularionuevo/person.ts ***!
  \*******************************************/
/*! exports provided: Persona */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Persona", function() { return Persona; });
var Persona = /** @class */ (function () {
    function Persona(id, nombre, apellido, email, documento, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.documento = documento;
        this.telefono = telefono;
    }
    return Persona;
}());



/***/ }),

/***/ "./src/app/infoGeneral/informacionGeneral.component.css":
/*!**************************************************************!*\
  !*** ./src/app/infoGeneral/informacionGeneral.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.texto{\n  color: black;\n  padding-left: 50px;\n  padding-right: 50px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  font-family: \"DejaVu Serif\", sans-serif ;\n  font-size: medium;\n}\n\n.logo-small {\n  color: blue;\n  font-size: 40px;\n}\n\n.todo{\n  background-color: azure;\n  padding-left: 50px;\n  padding-right: 50px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n  font-family: Norasi, sans-serif;\n}\n\n.txt3{\n  text-decoration: underline;\n  font-family: Norasi, sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mb0dlbmVyYWwvaW5mb3JtYWNpb25HZW5lcmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9pbmZvR2VuZXJhbC9pbmZvcm1hY2lvbkdlbmVyYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRleHRve1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiRGVqYVZ1IFNlcmlmXCIsIHNhbnMtc2VyaWYgO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLmxvZ28tc21hbGwge1xuICBjb2xvcjogYmx1ZTtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4udG9kb3tcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBmb250LWZhbWlseTogTm9yYXNpLCBzYW5zLXNlcmlmO1xufVxuXG4udHh0M3tcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBOb3Jhc2ksIHNhbnMtc2VyaWY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/infoGeneral/informacionGeneral.component.html":
/*!***************************************************************!*\
  !*** ./src/app/infoGeneral/informacionGeneral.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"todo\">\n<!-- Container (Services Section) -->\n  <div class=\"tex\">\n<div class=\"container-fluid text-center texto\">\n  <br>\n  <h3 class=\"txt3\">{{subtitulo1}}</h3>\n  <h4>{{texto2}}</h4>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <span class=\"glyphicon glyphicon-list logo-small\"></span>\n      <h4>{{subtitulo2}}</h4>\n      <p>{{texto3}}</p>\n    </div>\n    <div class=\"col-sm-6\">\n      <span class=\"glyphicon glyphicon-search  logo-small\"></span>\n      <h4>{{subtitulo3}}</h4>\n      <p>{{texto4}}</p>\n    </div>\n\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <span class=\"glyphicon glyphicon-hourglass logo-small\"></span>\n      <h4>{{subtitulo5}}</h4>\n      <p>{{texto6}}</p>\n    </div>\n    <div class=\"col-sm-6\">\n      <span class=\"glyphicon glyphicon-calendar logo-small\"></span>\n      <h4>{{subtitulo4}}</h4>\n      <p>{{texto5}}</p>\n    </div>\n  </div>\n</div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/infoGeneral/informacionGeneral.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/infoGeneral/informacionGeneral.component.ts ***!
  \*************************************************************/
/*! exports provided: infoG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoG", function() { return infoG; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var infoG = /** @class */ (function () {
    function infoG() {
        this.subtitulo1 = '¿QUÉ TÍTULO EXPIDE?';
        this.texto2 = 'La Carrera de Maestría en Ciencias de la Computación conduce al otorgamiento del\n' +
            'título de Magíster en Ciencias de la Computación. ';
        this.subtitulo2 = '¿QUÉ OBJETIVOS TIENE?';
        this.texto3 = 'El objetivo de la Carrera de Maestría en Ciencias de la Computación es realizar\n' +
            'estudios de un área específica de la disciplina informática, de modo de alcanzar un conocimiento actualizado y profundo de la misma. Estos estudios, mediante programas personalizados, se completarán con el desarrollo de una Tesis que tenga aportes concretos de Investigación y/o Desarrollo para la disciplina en el país, demostrando destreza en el manejo conceptual y metodológico inherente al mismo.';
        this.subtitulo3 = '¿A QUÉ SE ORIENTA?';
        this.texto4 = 'El carácter de la Maestría en Ciencias de la Computación es amplio y no está limitado\n' +
            'al marco de un área de la Informática en particular. Tendrá como orientaciones iniciales aquellas que derivan de las áreas específicas de la disciplina Informática según la Resolución Ministerial nº 786/09: Teoría de la Computación; Arquitectura, Sistemas Operativos y Redes; Ingeniería de Software, Bases de Datos y Sistemas de Información; y Algoritmos y Lenguajes.';
        this.subtitulo4 = '¿CÓMO SE ORGANIZA?';
        this.texto5 = 'La Maestría en Ciencias de la Computación comprende las actividades académicas\n' +
            'necesarias para la realización de un trabajo de investigación y/o desarrollo conducente a la\n' +
            'concreción de una Tesis de Maestría, con apego a un Plan de Trabajo de Tesis bajo supervisión, más un Plan de Formación.';
        this.subtitulo5 = '¿CUÁNTO DURA?';
        this.texto6 = 'El plazo estipulado para la realización de las actividades tendientes a obtener el\n' +
            'Grado Académico de Magíster no podrá ser menor a dos (2) años ni mayor a cinco (5) años, a\n' +
            'partir de la fecha de inscripción.\n' +
            '\n' +
            'Cada estudiante deberá cursar las materias especificadas en su Plan de Formación en\n' +
            'un lapso máximo de tres semestres, a partir de su ingreso a la Maestría en Ciencias de la\n' +
            'Computación.';
    }
    infoG = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'infoGeneral-infoGeneral',
            template: __webpack_require__(/*! ./informacionGeneral.component.html */ "./src/app/infoGeneral/informacionGeneral.component.html"),
            styles: [__webpack_require__(/*! ./informacionGeneral.component.css */ "./src/app/infoGeneral/informacionGeneral.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], infoG);
    return infoG;
}());



/***/ }),

/***/ "./src/app/inscripcion/inscripcion.component.css":
/*!*******************************************************!*\
  !*** ./src/app/inscripcion/inscripcion.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all{\n  background-color: azure;\n}\n.text{\n  padding-left: 50px;\n  padding-right: 50px;\n}\n.req{\n  padding-top: 10px;\n  text-align: center;\n  text-decoration: underline;\n}\n.lineaseparadora{\n  border: black;\n  border-style: solid;\n}\n.info{\n  font-family: \"DejaVu Serif\", sans-serif ;\n  font-size: medium;\n}\n.cupo{\n  margin-right: 50px;\n  margin-left: 50px;\n  margin-bottom: 30px;\n  font-family: \"DejaVu Serif\", sans-serif ;\n  font-size: medium ;\n}\n.quienpuede{\n  margin-top: 20px;\n  margin-right: 50px;\n  margin-left: 50px;\n}\n.botonescentrados{\n  text-align: center;\n  margin-bottom: 20px;\n  color: rgb(22, 120, 197);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zY3JpcGNpb24vaW5zY3JpcGNpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2luc2NyaXBjaW9uL2luc2NyaXBjaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbn1cbi50ZXh0e1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG4ucmVxe1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5saW5lYXNlcGFyYWRvcmF7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG4uaW5mb3tcbiAgZm9udC1mYW1pbHk6IFwiRGVqYVZ1IFNlcmlmXCIsIHNhbnMtc2VyaWYgO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cbi5jdXBve1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJEZWphVnUgU2VyaWZcIiwgc2Fucy1zZXJpZiA7XG4gIGZvbnQtc2l6ZTogbWVkaXVtIDtcbn1cbi5xdWllbnB1ZWRle1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuLmJvdG9uZXNjZW50cmFkb3N7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6IHJnYigyMiwgMTIwLCAxOTcpO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/inscripcion/inscripcion.component.html":
/*!********************************************************!*\
  !*** ./src/app/inscripcion/inscripcion.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"allexterno\">\n<div class=\"all\">\n  <div class=\"row\">\n    <!--\n    <h4 class=\"quienpuede\">{{ins3.fondo}}</h4>\n    <h5 class=\"quienpuede\">{{ins3.texto}}</h5> -->\n    <br>\n    <h3 class=\"req\">REQUISITOS:</h3>\n    <br>\n  <div class=\"col-sm-6 text info\">\n    <ul>\n      <h3><li>{{lista1[0].titulo}}</li></h3>\n    </ul>\n    <p>{{lista1[1].texto}}</p>\n\n    <div class=\"botonescentrados\"> <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"cambiarBoolean(true)\">Mostrar Requisitos</button></div>\n    <div *ngIf=\"mostrarInfo == true\">\n\n    <ul>\n      <li>{{lista1[2].titulo}}</li>\n      <li>{{lista1[3].titulo}}</li>\n      <li>{{lista1[4].titulo}}</li>\n      <li>{{lista1[5].titulo}}</li>\n      <li>{{lista1[6].titulo}}</li>\n      <li>{{lista1[7].titulo}}</li>\n      <li>{{lista1[8].titulo}}</li>\n    </ul>\n  </div>\n  </div>\n  <div class=\"col-sm-6 text info\">\n\n    <ul>\n      <h3><li>{{lista2[0].titulo}}</li></h3>\n    </ul>\n    <p>{{lista2[1].texto}}</p>\n  <div class=\"botonescentrados\">\n    <button  type=\"button\" class=\"btn btn-outline-success\" (click)=\"cambiarBoolean2()\">Mostrar Requisitos</button></div>\n    <div  *ngIf=\"mostrarInfo2 == true\">\n\n    <ul>\n      <li>{{lista2[2].titulo}}</li>\n      <li>{{lista2[3].titulo}}</li>\n      <li>{{lista2[4].titulo}}</li>\n      <li>{{lista2[5].titulo}}</li>\n      <li>{{lista2[6].titulo}}</li>\n      <li>{{lista2[7].titulo}}</li>\n      <li>{{lista2[8].titulo}}</li>\n      <li>{{lista2[9].titulo}}</li>\n    </ul>\n    </div>\n  </div>\n  </div>\n  <hr class=\"lineaseparadora\">\n  <div class=\"row\">\n    <div class=\"col-sm 12 cupo\">\n\n      <h4>{{ins1.titulo}}</h4>\n      {{ins1.texto}}\n      <h4>{{ins2.titulo}}</h4>\n      {{ins2.texto}}\n      <br>\n    </div>\n  </div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/inscripcion/inscripcion.component.ts":
/*!******************************************************!*\
  !*** ./src/app/inscripcion/inscripcion.component.ts ***!
  \******************************************************/
/*! exports provided: inscripcion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inscripcion", function() { return inscripcion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inscripcion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inscripcion */ "./src/app/inscripcion/inscripcion.ts");



var inscripcion = /** @class */ (function () {
    function inscripcion() {
        this.ins1 = new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('¿HAY CUPOS?', 'La Maestría se dictará con un cupo mínimo de 15 estudiantes y con un cupo máximo de 30 (sin contar estudiantes docentes en ambos casos).');
        this.ins2 = new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('¿PUEDO REALIZAR CURSOS DE POSGRADO SIN ESTAR INSCRIPTO?', 'Cualquier persona que cumpla los requisitos de admisión, se podrá inscribir a los cursos individuales sin estar inscripto en la carrera. En este caso, el costo a pagar por el curso estará determinado por sus créditos (10 horas equivale a 1 crédito), con un valor de $2.000 por crédito para el año 2019. En este caso se considerará solamente descuentos para el caso de paquetes empresariales (30%).');
        this.ins3 = new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('¿QUIENES SE PUEDEN INSCRIBIR Y CUÁNDO?', 'La inscripción a la carrera se realiza todos los años durante los meses de Febrero y Julio.');
        this.lista1 = [
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Profesionales graduados', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"](null, 'La inscripción es automática para los profesionales graduados de la disciplina Informática según las carreras reconocidas en la Resolución Ministerial nº 786/09 de la República Argentina (en el caso de la UNComa, Licenciados en Ciencias de la Computación, Licenciados en Sistemas de Información). También se aceptarán graduados en Informática con título equivalente otorgado por Universidades extranjeras.'),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Planilla de Inscripción', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Curriculum Vitae del postulante (con antecedentes laborales y de estudio)', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Fotocopia del DNI', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Fotocopia del título universitario', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Certificado Analítico', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Foto carnet', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('En caso de ser Docente, la constancia correspondiente', null)
        ];
        this.lista2 = [
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Egresados terciarios ', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"](null, 'En el caso de egresados terciarios y/o universitarios con título menor a 4 años de duración o egresados de carreras no afines a Informática, y dilatada experiencia profesional en Informática, se podrá aceptar su inscripción previa evaluación de conocimientos y antecedentes por parte del Director de la Maestría y recomendación explícita del Comité Académico.'),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Nota dirigida al Sr. Decano de la Facultad de Informática, solicitando inscripción a la carrera.', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Planilla de Inscripción', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Curriculum Vitae del postulante (con antecedentes laborales y de estudio)', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Fotocopia del DNI', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Fotocopia del título universitario', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Certificado analítico de estudios, con las calificaciones obtenidas.', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Programa de estudios certificado por la Universidad correspondiente, con los contenidos mínimos de las asignaturas', null),
            new _inscripcion__WEBPACK_IMPORTED_MODULE_2__["Inscripcion"]('Foto carnet', null)
        ];
        this.mostrarInfo = false;
        this.mostrarInfo2 = false;
    }
    inscripcion.prototype.cambiarBoolean = function () {
        if (this.mostrarInfo == true) {
            this.mostrarInfo = false;
        }
        else {
            this.mostrarInfo = true;
        }
    };
    inscripcion.prototype.cambiarBoolean2 = function () {
        if (this.mostrarInfo2 == true) {
            this.mostrarInfo2 = false;
        }
        else {
            2;
            this.mostrarInfo2 = true;
        }
    };
    inscripcion = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'inscripcion-inscripcion',
            template: __webpack_require__(/*! ./inscripcion.component.html */ "./src/app/inscripcion/inscripcion.component.html"),
            styles: [__webpack_require__(/*! ./inscripcion.component.css */ "./src/app/inscripcion/inscripcion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], inscripcion);
    return inscripcion;
}());



/***/ }),

/***/ "./src/app/inscripcion/inscripcion.ts":
/*!********************************************!*\
  !*** ./src/app/inscripcion/inscripcion.ts ***!
  \********************************************/
/*! exports provided: Inscripcion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inscripcion", function() { return Inscripcion; });
var Inscripcion = /** @class */ (function () {
    function Inscripcion(titulo, texto) {
        this.titulo = titulo;
        this.texto = texto;
    }
    return Inscripcion;
}());



/***/ }),

/***/ "./src/app/piepagina/piepagina.component.css":
/*!***************************************************!*\
  !*** ./src/app/piepagina/piepagina.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer .glyphicon {\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #f4511e;\n}\n.container-fluid{\n  color: white;\n  background-color: black;\n}\n.pie{\n  margin-top: 20px;\n  font-family: \"Noto Sans CJK TC Bold\" ;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGllcGFnaW5hL3BpZXBhZ2luYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIscUNBQXFDO0FBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvcGllcGFnaW5hL3BpZXBhZ2luYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIC5nbHlwaGljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjZjQ1MTFlO1xufVxuLmNvbnRhaW5lci1mbHVpZHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5waWV7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBDSksgVEMgQm9sZFwiIDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/piepagina/piepagina.component.html":
/*!****************************************************!*\
  !*** ./src/app/piepagina/piepagina.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <footer class=\"container-fluid text-center\">\n  <!--<a href=\"\" title=\"To Top\">\n    <span class=\"glyphicon glyphicon-chevron-up\"></span>\n  </a>-->\n  <div class=\"pie\">\n  <p>{{descripcion}} <a href=\"https://www.uncoma.edu.ar/\" target=\"_blank\" title=\"pagina unco\">https://www.uncoma.edu.ar/</a></p>\n  <p>{{descripcion2}} <a href=\"http://faiweb.uncoma.edu.ar/\" target=\"_blank\" title=\"pagina fai\">http://faiweb.uncoma.edu.ar/</a></p>\n  <p>{{ubicacion}}</p>\n  <p>{{telefono}}</p>\n  </div>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/piepagina/piepagina.component.ts":
/*!**************************************************!*\
  !*** ./src/app/piepagina/piepagina.component.ts ***!
  \**************************************************/
/*! exports provided: pie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return pie; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var pie = /** @class */ (function () {
    function pie() {
        this.telefono = 'Tel: +54-299-4490300 Interno: 644 ';
        this.descripcion = 'Universidad Nacional del Comahue';
        this.descripcion2 = 'Facultad de Informática';
        this.ubicacion = 'Buenos Aires 1400 (8300) Neuquén Capital, Patagonia Argentina ';
    }
    pie = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'piepagina-piepagina',
            template: __webpack_require__(/*! ./piepagina.component.html */ "./src/app/piepagina/piepagina.component.html"),
            styles: [__webpack_require__(/*! ./piepagina.component.css */ "./src/app/piepagina/piepagina.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], pie);
    return pie;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MessageService = /** @class */ (function () {
    function MessageService(_http) {
        this._http = _http;
    }
    MessageService.prototype.sendMessage = function (body) {
        return this._http.post('http://localhost:4200', body);
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/titulo/person.ts":
/*!**********************************!*\
  !*** ./src/app/titulo/person.ts ***!
  \**********************************/
/*! exports provided: Persona */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Persona", function() { return Persona; });
var Persona = /** @class */ (function () {
    function Persona(id, nombre, apellido, email, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
    }
    return Persona;
}());



/***/ }),

/***/ "./src/app/titulo/titulo.component.css":
/*!*********************************************!*\
  !*** ./src/app/titulo/titulo.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fondo{\n  background-color: #f2f2f2;\n}\n\n.bigicon {\n  font-size: 20px;\n  color: #36A0FF;\n}\n\n.btn{\n  margin: 2px;\n}\n\n.colorNombre{\n  color: white;\n}\n\n.tit2{\n  margin-left: 40px;\n  margin-top: 80px;\n  text-align: center;\n  font-size: 42px;\n  color: rgb(0, 0, 0);\n  font-style:italic;\n  font-weight: bold;\n  text-shadow: 2px .7px white;\n  font-family: Times;\n  text-decoration: underline;\n}\n\n.txt1{\n  font-family: Times;\n  margin-left: 60px;\n  margin-top: 50px;\n  text-align: justify-all;\n  color: rgb(0, 0, 0);\n  font-style:italic;\n  font-weight:bold;\n  font-size:25px;\n  font-color:#ffffff;\n  text-shadow: .1px .1px black;\n}\n\n.ctn{\n  top: 25px;\n  bottom: 85px;\n  width: 350px;\n  height: 500px;\n}\n\n.ctn2{\n  background-color:  rgb(246, 247, 234);\n}\n\n.ctn1{\n  border: 2px solid;\n}\n\n.textinfo{\n  font-size: 26px;\n  font-family: Times;\n}\n\n.formu{\n  margin-left: 10px;\n}\n\nh1 {\n  color: rgba(0,0,0,.7);\n  font-weight: 900;\n  font-size: 2.5em;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGl0dWxvL3RpdHVsby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4QkFBOEIsRUFBRSxVQUFVO0FBQzVDOztBQUVBO0VBQ0UsOEJBQThCLEVBQUUsUUFBUTtBQUMxQyIsImZpbGUiOiJzcmMvYXBwL3RpdHVsby90aXR1bG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kb3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLmJpZ2ljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMzZBMEZGO1xufVxuXG4uYnRue1xuICBtYXJnaW46IDJweDtcbn1cblxuLmNvbG9yTm9tYnJle1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXQye1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQycHg7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGZvbnQtc3R5bGU6aXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDJweCAuN3B4IHdoaXRlO1xuICBmb250LWZhbWlseTogVGltZXM7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4udHh0MXtcbiAgZm9udC1mYW1pbHk6IFRpbWVzO1xuICBtYXJnaW4tbGVmdDogNjBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeS1hbGw7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGZvbnQtc3R5bGU6aXRhbGljO1xuICBmb250LXdlaWdodDpib2xkO1xuICBmb250LXNpemU6MjVweDtcbiAgZm9udC1jb2xvcjojZmZmZmZmO1xuICB0ZXh0LXNoYWRvdzogLjFweCAuMXB4IGJsYWNrO1xufVxuLmN0bntcbiAgdG9wOiAyNXB4O1xuICBib3R0b206IDg1cHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cbi5jdG4ye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDI0NiwgMjQ3LCAyMzQpO1xufVxuLmN0bjF7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xufVxuXG4udGV4dGluZm97XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC1mYW1pbHk6IFRpbWVzO1xufVxuLmZvcm11e1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmgxIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDIuNWVtO1xufVxuXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/titulo/titulo.component.html":
/*!**********************************************!*\
  !*** ./src/app/titulo/titulo.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row fondo\">\n\n  <div class=\"col-sm-8\">\n    <h2 class=\"tit2\">{{titulo2}}</h2>\n    <h3 class=\"txt1\">{{texto}}</h3>\n  </div>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 ctn\">\n      <div class=\"well well-sm ctn1\">\n        <form class=\"form-horizontal ctn2\"  method=\"POST\" (ngSubmit)=\"onSubmit()\" #consulta=\"ngForm\" action=\"enviar.php\" >\n          <fieldset>\n            <legend class=\"text-center header textinfo\">Solicitá Información </legend>\n\n            <div class=\"form-group formu\">\n              <span class=\"col-md-1 col-md-offset-1 text-center\"><i class=\"glyphicon glyphicon-user  bigicon\"></i></span>\n              <div class=\"col-md-11\">\n                <input id=\"nombre\" type=\"text\" placeholder=\"*Nombre\" class=\"form-control\" required [(ngModel)]=\"model.nombre\" name=\"nombre\"  #nombre=\"ngModel\">\n              </div>\n            </div>\n\n            <div class=\"form-group formu\">\n              <span class=\"col-md-1 col-md-offset-1 text-center\"><i class=\"glyphicon glyphicon-user bigicon\"></i></span>\n              <div class=\"col-md-11\">\n                <input id=\"apellido\"  type=\"text\" placeholder=\"*Apellido\" class=\"form-control\" required [(ngModel)]=\"model.apellido\" name=\"apellido\"  #apellido=\"ngModel\">\n              </div>\n            </div>\n\n            <div class=\"form-group formu\">\n              <span class=\"col-md-1 col-md-offset-1 text-center\"><i class=\"\tglyphicon glyphicon-envelope bigicon\"></i></span>\n              <div class=\"col-md-11\">\n                <input id=\"email\" type=\"text\" placeholder=\"*Email\" class=\"form-control\" required [(ngModel)]=\"model.email\" name=\"email\"  #email=\"ngModel\">\n              </div>\n            </div>\n\n            <div class=\"form-group formu\">\n              <span class=\"col-md-1 col-md-offset-1 text-center\"><i class=\"glyphicon glyphicon-earphone bigicon\"></i></span>\n              <div class=\"col-md-11\">\n                <input id=\"telefono\" type=\"text\" placeholder=\"*Teléfono\" class=\"form-control\" required pattern=\"[0-9]+\"[(ngModel)]=\"model.telefono\" name=\"telefono\"  #telefono=\"ngModel\" >\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-md-12 text-center\">\n                <button type=\"reset\" class=\"btn btn-primary btn-lg\" [disabled]=\"!consulta.form.valid\" (click)=\"guardar()\">Quiero saber más</button>\n\n              </div>\n            </div>\n          </fieldset>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/titulo/titulo.component.ts":
/*!********************************************!*\
  !*** ./src/app/titulo/titulo.component.ts ***!
  \********************************************/
/*! exports provided: titulo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titulo", function() { return titulo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person */ "./src/app/titulo/person.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");




var titulo = /** @class */ (function () {
    function titulo() {
        this.model = new _person__WEBPACK_IMPORTED_MODULE_2__["Persona"](0, null, null, null, null);
        this.submitted = false;
        this.fotoRuta = _config__WEBPACK_IMPORTED_MODULE_3__["config"].rutaFotos;
        this.titulo2 = 'Maestría en Ciencias de la Computación';
        this.texto =
            'El carácter de la Maestría en Ciencias de la Computación es amplio y no está limitado\n' +
                'al marco de un área de la Informática en particular. Tendrá como orientaciones iniciales aquellas ' +
                'que derivan de las áreas específicas de la disciplina Informática según la Resolución Ministerial nº 786/09: Teoría de la' +
                ' Computación; Arquitectura, Sistemas Operativos y Redes; Ingeniería de Software, Bases de Datos y Sistemas de Información; y ' +
                'Algoritmos y Lenguajes.';
        this.logounco = 'logounco.png';
        this.logofai = 'logofaisinfondo.png';
        this.fotounco = 'fotofacu.png';
    }
    titulo.prototype.onSubmit = function () {
        this.submitted = true;
    };
    titulo.prototype.guardar = function () {
        console.log(this.model);
        alert("El mensaje se envio");
    };
    titulo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'titulo-titulo',
            template: __webpack_require__(/*! ./titulo.component.html */ "./src/app/titulo/titulo.component.html"),
            styles: [__webpack_require__(/*! ./titulo.component.css */ "./src/app/titulo/titulo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], titulo);
    return titulo;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/leonard/Documentos/Pasantia/paginaMaestriaNew/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map