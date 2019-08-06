(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-1 col-lg-2\">\n      <app-navbar></app-navbar>\n\n    </div>\n    <div class=\"col-10 p-0\">\n      <app-content-screen></app-content-screen>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/content-screen/content-screen.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/content-screen/content-screen.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-sm navbar-dark\">\n  <div class=\"row\">\n    <div class=\"page-flows col-3\">\n      <i class=\"fas fa-chevron-left arrow\"></i>\n      <i class=\"fas fa-chevron-right arrow\"></i>\n    </div>\n    <div class=\"col-md-6 col-sm-9\">\n      <input type=\"text\" id=\"searchInput\" placeholder=\"Buscar\">\n    </div>\n  </div>\n\n</nav> -->\n\n<nav>\n  <ul>\n    <li>\n      <div><a aria-current=\"page\" href=\"/browse/featured\">SELECCIONADOS</a></div>\n    </li>\n    <li>\n      <div><a href=\"/browse/podcasts\">PODCASTS</a></div>\n    </li>\n    <li>\n      <div><a href=\"/browse/charts\">LISTAS DE ÉXITOS</a></div>\n    </li>\n    <li>\n      <div><a href=\"/browse/genres\">GÉNEROS Y ESTADOS DE ÁNIMO</a></div>\n    </li>\n    <li>\n      <div><a href=\"/browse/newreleases\">NOVEDADES</a></div>\n    </li>\n    <li>\n      <div><a href=\"/browse/discover\">DESCUBRIR</a></div>\n    </li>\n  </ul>\n</nav>\n\n\n\n\n<app-song-list></app-song-list>\n<app-player></app-player>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"d-none d-md-block sidebar\" id=\"sidebar\">\n  <div class=\"sidebar-sticky\">\n      <h3 class=\"brand\"><i class=\"fab fa-spotify\"> Ericfy</i></h3>\n    <ul class=\"nav flex-column\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n            stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n            class=\"feather feather-home\">\n            <path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path>\n            <polyline points=\"9 22 9 12 15 12 15 22\"></polyline>\n          </svg>\n          Inicio <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n            stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n            class=\"feather feather-file\">\n            <path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path>\n            <polyline points=\"13 2 13 9 20 9\"></polyline>\n          </svg>\n          Explorar\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n            stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n            class=\"feather feather-shopping-cart\">\n            <circle cx=\"9\" cy=\"21\" r=\"1\"></circle>\n            <circle cx=\"20\" cy=\"21\" r=\"1\"></circle>\n            <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>\n          </svg>\n          Radio\n        </a>\n      </li>\n\n    </ul>\n\n    <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-light\">\n      <span>TU BIBLIOTECA</span>\n\n    </h6>\n    <ul class=\"nav flex-column mb-2\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n            stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n            class=\"feather feather-file-text\">\n            <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n            <polyline points=\"14 2 14 8 20 8\"></polyline>\n            <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n            <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n            <polyline points=\"10 9 9 9 8 9\"></polyline>\n          </svg>\n          Especialmente para ti\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n            stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n            class=\"feather feather-file-text\">\n            <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n            <polyline points=\"14 2 14 8 20 8\"></polyline>\n            <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n            <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n            <polyline points=\"10 9 9 9 8 9\"></polyline>\n          </svg>\n          Recientes\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n            stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n            class=\"feather feather-file-text\">\n            <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n            <polyline points=\"14 2 14 8 20 8\"></polyline>\n            <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n            <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n            <polyline points=\"10 9 9 9 8 9\"></polyline>\n          </svg>\n          Canciones que te gustan\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n            stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n            class=\"feather feather-file-text\">\n            <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n            <polyline points=\"14 2 14 8 20 8\"></polyline>\n            <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n            <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n            <polyline points=\"10 9 9 9 8 9\"></polyline>\n          </svg>\n          Álbumes\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n            stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n            class=\"feather feather-file-text\">\n            <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n            <polyline points=\"14 2 14 8 20 8\"></polyline>\n            <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n            <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n            <polyline points=\"10 9 9 9 8 9\"></polyline>\n          </svg>\n          Artistas\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n            stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n            class=\"feather feather-file-text\">\n            <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path>\n            <polyline points=\"14 2 14 8 20 8\"></polyline>\n            <line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line>\n            <line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line>\n            <polyline points=\"10 9 9 9 8 9\"></polyline>\n          </svg>\n          Podcasts\n        </a>\n      </li>\n    </ul>\n    <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-light\">\n      <span>PLAYLISTS</span>\n\n    </h6>\n  </div>\n</nav>\n\n\n<!-- \n<nav class=\"navbar navbar-expand-sm navbar-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\" (click)=\"home()\">My Music Player!</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\n    aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <div class=\"dropdown\">\n      <button class=\"btn dropdown-toggle navbar-btn ml-5\" type=\"button\" data-toggle=\"dropdown\">Songs\n        <span class=\"caret\"></span></button>\n      <ul class=\"dropdown-menu bg-dark text-white ml-5\">\n        \n        <li *ngFor=\"let element of _data.arrSongs; let i = 'index'\" class=\"ml-2\">\n          <p (click)=\"playSong(i)\">{{element[\"title\"]}}</p>\n\n        </li>\n      </ul>\n    </div>\n\n\n  </div>\n</nav>\n -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/player/player.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/player/player.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_data.currentView == 'player'\">\r\n\r\n  <div class=\"container mt-5\">\r\n    <div class=\"row\">\r\n      <!-- <h2>{{_data.currentSong[\"title\"]}}</h2> -->\r\n      <div class=\"col-12\">\r\n        <img src=\"../../assets/player/shuffle.png\" alt=\"\" class=\"player-icon\" (click)=\"shuffle()\">\r\n\r\n        <img src=\"../../assets/player/previous.png\" alt=\"\" class=\"player-icon\" (click)=\"previous()\">\r\n\r\n        <img src=\"../../assets/player/play-button.png\" alt=\"\" class=\"player-icon\" id=\"playBtn\" (click)=\"play_pause()\">\r\n\r\n        <img src=\"../../assets/player/stop.png\" alt=\"\" class=\"player-icon\" (click)=\"stop()\">\r\n\r\n        <img src=\"../../assets/player/next.png\" alt=\"\" class=\"player-icon\" (click)=\"next()\">\r\n\r\n        <img src=\"../../assets/player/repeat.png\" alt=\"\" class=\"player-icon\" id=\"loopBtn\" (click)=\"loop()\">\r\n\r\n      </div>\r\n      <div class=\"col-12 justify-content-between\">\r\n        <p class=\"songTiming\">{{audioLength}}</p>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-4 col-sm-12 text-center\">\r\n        <audio controls class=\"audio-bg mt-5\">\r\n          <source [src]=\"_data.currentSong['src']\" type=\"audio/mpeg\">\r\n        </audio>\r\n        <div><button class=\"btn btn-danger btn-back\" (click)=\"back()\">Back</button></div>\r\n      </div>\r\n\r\n      <div class=\"col-md-8 col-sm-12\">\r\n        <h4>{{_data.currentSong[\"title\"]}}</h4>\r\n        <h5>{{_data.currentSong[\"author\"]}}</h5>\r\n        <h5>{{_data.currentSong[\"album\"]}}</h5>\r\n\r\n        <p>{{_data.currentSong[\"year\"]}}</p>\r\n        <div class=\"row\">\r\n          <div [ngClass]='_data.currentSong[\"lyrics\"][\"translation\"] == \"\" ? \"col-12\" : \"col-md-6 col-sm-12\"'>\r\n            <h4>Original lyrics</h4>\r\n            <p class=\"lyrics\">{{_data.currentSong[\"lyrics\"][\"original\"]}}</p>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-12\" *ngIf='_data.currentSong[\"lyrics\"][\"translation\"] != \"\"'>\r\n            <h4>Translated lyrics</h4>\r\n            <p class=\"lyrics\">{{_data.currentSong[\"lyrics\"][\"translation\"]}}</p>\r\n          </div>\r\n        </div>\r\n        <!-- <p style=\"width: 50%;white-space: pre-line\">{{_data.currentSong[\"lyrics\"]}}</p> -->\r\n\r\n      </div>\r\n      <div></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/song-list/song-list.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/song-list/song-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_data.currentView == 'song-list'\">\n  <h2 class=\"mt-5  title\">Novedades</h2>\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"\" *ngFor=\"let element of _data.arrSongs; let i = 'index'\">\n        <figure class=\"card card-product bg-transparent border-0\">\n          <div class=\"img-wrap\"><img src=\"{{element['img']}}\" (click)=\"playSong(i)\"></div>\n          <figcaption class=\"info-wrap\">\n            <h6 class=\"songTitle\">{{element[\"title\"]}}</h6>\n          </figcaption>\n        </figure>\n      </div>\n    </div>\n  </div>\n  <h2 class=\"mt-5  title\">Listas de éxitos</h2>\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"\" *ngFor=\"let element of _data.arrSongs; let i = 'index'\">\n        <figure class=\"card card-product bg-transparent border-0\">\n          <div class=\"img-wrap\"><img src=\"{{element['img']}}\" (click)=\"playSong(i)\"></div>\n          <figcaption class=\"info-wrap\">\n            <h6 class=\"songTitle\">{{element[\"title\"]}}</h6>\n          </figcaption>\n        </figure>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'MusicPlayer';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./song-list/song-list.component */ "./src/app/song-list/song-list.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _content_screen_content_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-screen/content-screen.component */ "./src/app/content-screen/content-screen.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__["SongListComponent"],
            _player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            _content_screen_content_screen_component__WEBPACK_IMPORTED_MODULE_7__["ContentScreenComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/content-screen/content-screen.component.css":
/*!*************************************************************!*\
  !*** ./src/app/content-screen/content-screen.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .navbar {\r\n  background-color: rgb(30, 31, 38);\r\n  color: white;\r\n  margin: 0;\r\n}\r\n\r\n.navbar-btn {\r\n  background-color: rgba(50, 50, 50, 0.5);\r\n  color: white;\r\n}\r\n\r\n.navbar-btn:hover {\r\n  background-color: rgba(50, 50, 50, 0.9);\r\n}\r\n\r\n.arrow {\r\npadding: 0 8px;\r\ndisplay: inline;\r\nvertical-align: middle;\r\n\r\n}\r\n\r\n#searchInput{\r\n    border-radius: 20px;\r\n} */\r\n\r\nnav {\r\n    /* background-color: rgb(30, 31, 38); */\r\n    text-align: center;\r\n}\r\n\r\nnav ul {\r\n  padding: 1em 0px;\r\n}\r\n\r\nnav li {\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    padding: 1em 10px;    \r\n    margin: 10px;\r\n}\r\n\r\nnav li a{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\nnav li:hover, nav li:active{\r\n  border-bottom:none;\r\n  background:-webkit-gradient(linear,left top, left bottom,from(green),to(green)) bottom /* left or right or else */ no-repeat;\r\n  background:linear-gradient(green,green) bottom /* left or right or else */ no-repeat;\r\n  background-size:50% 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC1zY3JlZW4vY29udGVudC1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHOztBQUVIO0lBQ0ksdUNBQXVDO0lBQ3ZDLGtCQUFrQjtBQUN0Qjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQiw0SEFBb0Y7RUFBcEYsb0ZBQW9GO0VBQ3BGLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQtc2NyZWVuL2NvbnRlbnQtc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDMxLCAzOCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5hdmJhci1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDUwLCA1MCwgMC41KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuOSk7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbnBhZGRpbmc6IDAgOHB4O1xyXG5kaXNwbGF5OiBpbmxpbmU7XHJcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG59XHJcblxyXG4jc2VhcmNoSW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59ICovXHJcblxyXG5uYXYge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAzMSwgMzgpOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbm5hdiB1bCB7XHJcbiAgcGFkZGluZzogMWVtIDBweDtcclxufVxyXG5cclxubmF2IGxpIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDFlbSAxMHB4OyAgICBcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxubmF2IGxpIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5uYXYgbGk6aG92ZXIsIG5hdiBsaTphY3RpdmV7XHJcbiAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KGdyZWVuLGdyZWVuKSBib3R0b20gLyogbGVmdCBvciByaWdodCBvciBlbHNlICovIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6NTAlIDNweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/content-screen/content-screen.component.ts":
/*!************************************************************!*\
  !*** ./src/app/content-screen/content-screen.component.ts ***!
  \************************************************************/
/*! exports provided: ContentScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentScreenComponent", function() { return ContentScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContentScreenComponent = class ContentScreenComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContentScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content-screen',
        template: __webpack_require__(/*! raw-loader!./content-screen.component.html */ "./node_modules/raw-loader/index.js!./src/app/content-screen/content-screen.component.html"),
        styles: [__webpack_require__(/*! ./content-screen.component.css */ "./src/app/content-screen/content-screen.component.css")]
    })
], ContentScreenComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand{\r\n    color: white;\r\n    text-align: center;\r\n\r\n}\r\n#sidebar{\r\n    padding-top: 2em;\r\n    max-width: 300px;\r\n}\r\n/*  */\r\n/*  */\r\nbody {\r\n  font-size: .875rem;\r\n}\r\n.feather {\r\n  width: 16px;\r\n  height: 16px;\r\n  vertical-align: text-bottom;\r\n}\r\n/*\r\n   * Sidebar\r\n   */\r\n.sidebar {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n  /* Behind the navbar */\r\n  padding: 48px 0 0;\r\n  /* Height of navbar */\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n  background-color: #111;\r\n}\r\n.sidebar-sticky {\r\n  position: relative;\r\n  top: 0;\r\n  height: calc(100vh - 48px);\r\n  padding-top: .5rem;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  /* Scrollable contents if viewport is shorter than content. */\r\n}\r\n@supports ((position: -webkit-sticky) or (position: sticky)) {\r\n  .sidebar-sticky {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n  }\r\n}\r\n.sidebar .nav-link {\r\n  font-weight: 500;\r\n  /* color: #333; */\r\n  color: #fff;\r\n\r\n}\r\n.sidebar .nav-link .feather {\r\n  margin-right: 4px;\r\n  color: #333;\r\n}\r\n/* .sidebar .nav-link.active {\r\n  color: #007bff;\r\n} */\r\n.sidebar .nav-link:hover .feather,\r\n.sidebar .nav-link.active .feather {\r\n  color: inherit;\r\n}\r\n.sidebar-heading {\r\n  font-size: .75rem;\r\n  text-transform: uppercase;\r\n}\r\n/*\r\n   * Content\r\n   */\r\n[role=\"main\"] {\r\n  padding-top: 48px;\r\n  /* Space for fixed navbar */\r\n}\r\n/*\r\n   * Navbar\r\n   */\r\n.navbar-brand {\r\n  padding-top: .75rem;\r\n  padding-bottom: .75rem;\r\n  font-size: 1rem;\r\n  background-color: rgba(0, 0, 0, .25);\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n}\r\n.navbar .form-control {\r\n  padding: .75rem 1rem;\r\n  border-width: 0;\r\n  border-radius: 0;\r\n}\r\n.form-control-dark {\r\n  color: #fff;\r\n  background-color: rgba(255, 255, 255, .1);\r\n  border-color: rgba(255, 255, 255, .1);\r\n}\r\n.form-control-dark:focus {\r\n  border-color: transparent;\r\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUdMO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtBQUM3QjtBQUVBOztJQUVJO0FBRUo7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLDRDQUE0QztFQUM1QyxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZEQUE2RDtBQUMvRDtBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVzs7QUFFYjtBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUVBOztHQUVHO0FBRUg7O0VBRUUsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjtBQUVBOztJQUVJO0FBRUo7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0FBQzdCO0FBRUE7O0lBRUk7QUFFSjtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyw2Q0FBNkM7QUFDL0M7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLHFDQUFxQztBQUN2QztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDhDQUE4QztBQUNoRCIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuI3NpZGViYXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG4vKiAgKi9cclxuLyogICovXHJcblxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1zaXplOiAuODc1cmVtO1xyXG59XHJcblxyXG4uZmVhdGhlciB7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxufVxyXG5cclxuLypcclxuICAgKiBTaWRlYmFyXHJcbiAgICovXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cclxuICBwYWRkaW5nOiA0OHB4IDAgMDtcclxuICAvKiBIZWlnaHQgb2YgbmF2YmFyICovXHJcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxufVxyXG5cclxuLnNpZGViYXItc3RpY2t5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xyXG4gIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xyXG59XHJcblxyXG5Ac3VwcG9ydHMgKChwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kpIG9yIChwb3NpdGlvbjogc3RpY2t5KSkge1xyXG4gIC5zaWRlYmFyLXN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIC8qIGNvbG9yOiAjMzMzOyAqL1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxufVxyXG5cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi8qIC5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG59ICovXHJcblxyXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXHJcbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUgLmZlYXRoZXIge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IC43NXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4vKlxyXG4gICAqIENvbnRlbnRcclxuICAgKi9cclxuXHJcbltyb2xlPVwibWFpblwiXSB7XHJcbiAgcGFkZGluZy10b3A6IDQ4cHg7XHJcbiAgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xyXG59XHJcblxyXG4vKlxyXG4gICAqIE5hdmJhclxyXG4gICAqL1xyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgcGFkZGluZy10b3A6IC43NXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG59XHJcblxyXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWRhcmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_song_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/song-data.service */ "./src/app/services/song-data.service.ts");



let NavbarComponent = class NavbarComponent {
    constructor(_data) {
        this._data = _data;
    }
    playSong(i) {
        this._data.playSong(i);
    }
    ngOnInit() {
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_song_data_service__WEBPACK_IMPORTED_MODULE_2__["SongDataService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/player/player.component.css":
/*!*********************************************!*\
  !*** ./src/app/player/player.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n.lyrics {\r\n  white-space: pre-line;\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  padding: 1em;\r\n}\r\naudio{\r\n  display: none;\r\n}\r\n.player-icon{\r\n  width: 50px;\r\n  height: auto;\r\n  cursor: pointer;\r\n  margin: 5px 10px;\r\n}\r\n.player-icon:active{\r\n  width: 45px;  \r\n  height: auto;\r\n\r\n}\r\n.songTiming {\r\n  color: white;\r\n}\r\n*{\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7QUFFZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ubHlyaWNzIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbmF1ZGlve1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wbGF5ZXItaWNvbntcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogNXB4IDEwcHg7XHJcbn1cclxuLnBsYXllci1pY29uOmFjdGl2ZXtcclxuICB3aWR0aDogNDVweDsgIFxyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbn1cclxuXHJcbi5zb25nVGltaW5nIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbip7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_song_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/song-data.service */ "./src/app/services/song-data.service.ts");



let PlayerComponent = class PlayerComponent {
    constructor(_data) {
        this._data = _data;
        this.audioElement = document.querySelectorAll("audio")[0];
        this.audioLength = "00:00";
    }
    back() {
        this._data.setView("song-list");
    }
    play_pause() {
        if (document.querySelectorAll("audio")[0].paused == true) {
            document.querySelectorAll("audio")[0].play();
            document.querySelectorAll("#playBtn")[0].setAttribute("src", "../../assets/player/pause.png");
        }
        else {
            document.querySelectorAll("audio")[0].pause();
            document.querySelectorAll("#playBtn")[0].setAttribute("src", "../../assets/player/play-button.png");
        }
        this.songLength();
    }
    stop() {
        document.querySelectorAll("audio")[0].load();
        document.querySelectorAll("#playBtn")[0].setAttribute("src", "../../assets/player/play-button.png");
    }
    loop() {
        if (document.querySelectorAll("audio")[0].loop == true) {
            document.querySelectorAll("#loopBtn")[0].style.filter = "invert(0)";
        }
        else {
            document.querySelectorAll("#loopBtn")[0].style.filter = "invert(1)";
        }
        document.querySelectorAll("audio")[0].loop = !document.querySelectorAll("audio")[0].loop;
    }
    songLength() {
        let time = this.formatTime(document.querySelectorAll("audio")[0].duration);
        // console.log((< HTMLAudioElement >   .duration);
        this.audioLength = time;
    }
    formatTime(seconds) {
        let secondsStr = "";
        let minutesStr = "";
        let minutes = Math.floor(seconds / 60);
        if (minutes < 10) {
            minutesStr = "0" + minutes;
        }
        else {
            minutesStr = "" + minutes;
        }
        seconds = Math.floor(seconds % 60);
        if (seconds < 10) {
            secondsStr = "0" + seconds;
        }
        else {
            secondsStr = "" + seconds;
        }
        return minutesStr + ":" + secondsStr;
    }
    ngOnInit() {
    }
    AfterViewChange() {
        console.log("changes");
        this.songLength();
    }
};
PlayerComponent.ctorParameters = () => [
    { type: _services_song_data_service__WEBPACK_IMPORTED_MODULE_2__["SongDataService"] }
];
PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player',
        template: __webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/index.js!./src/app/player/player.component.html"),
        styles: [__webpack_require__(/*! ./player.component.css */ "./src/app/player/player.component.css")]
    })
], PlayerComponent);



/***/ }),

/***/ "./src/app/services/song-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/song-data.service.ts ***!
  \***********************************************/
/*! exports provided: SongDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongDataService", function() { return SongDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SongDataService = class SongDataService {
    constructor() {
        this.currentView = "song-list";
        this.arrSongs = [{
                "title": "CHA-LA HEAD CHA-LA",
                "author": "Hironobu Kageyama",
                "year": "1989",
                "album": "Dragon Ball Z",
                "src": "../assets/cha-la_head_cha-la.mp3",
                "style": ["anime"],
                "img": "../assets/CHA-LA_Vinyl.png",
                "lyrics": {
                    "original": `光る　雲を突き抜け　Fly Away (Fly Away)\nからだじゅうに　広がるパノラマ\n顔を　蹴られた地球が怒って　(怒って)\n火山を爆発させる\n溶けた北極1の中に\n恐竜がいたら　玉乗り仕込みたいね\n\nCHA-LA HEAD-CHA-LA\n何が起きても気分は　へのへのカッパ\nCHA-LA HEAD-CHA-LA\n胸がパチパチするほど\n騒ぐ元気玉…Sparking!\n空を　急降下　Jet Coaster (Coaster)\n落ちてゆくよ　パニックの楽園2へ\n景色　逆さになると愉快さ　(愉快さ)\n山さえ　お尻に見える\n悩む時間はないよ\nどこかに潜む「ビックリ!」に逢いたいから \nCHA-LA HEAD-CHA-LA\n頭カラッポの方が　夢詰め込める\nCHA-LA HEAD-CHA-LA\n笑顔ウルトラZで\n今日もアイヤイヤイヤイヤイ\nCHA-LA HEAD-CHA-LA\n何が起きても気分は　へのへのカッパ\nCHA-LA HEAD-CHA-LA\n胸がパチパチするほど\n騒ぐ元気玉…Sparking!\n`,
                    "translation": `Piercing the shining clouds, I fly away (fly away),\nWhile a panorama spreads through my body.\nKicked in the face, the Earth gets angry (gets angry),\nAnd makes a volcano explode!\n\nWithin the melted polar ice,\nIf there’s a dinosaur, I want to train it to balance on a ball!\n\nCHA-LA HEAD-CHA-LA\nNo matter what happens, I feel like it’s no big deal!\nCHA-LA HEAD CHA-LA\nJust as loudly as my heart pounds,\nThe Genki-Dama roars...Sparking!\n\nDiving through the sky on a roller coaster (coaster),\nI fall into a paradise of panic!\nThe scenery turns upside-down and I cheer up (cheer up),\n’Cause the mountains even look like butts!!\n\nThere’s no time for worrying,\n’Cause there’s a suprise hidden somewhere, and I wanna find it!\n\nCHA-LA HEAD-CHA-LA\nI’d rather have my head be empty, so I can stuff it with dreams!\nCHA-LA HEAD-CHA-LA\nWith a smile that’s Ultra-Z,\nEven today is ai-yai-yai-yai-yai...\n\nCHA-LA HEAD-CHA-LA\nNo matter what happens, I feel like it’s no big deal!\nCHA-LA HEAD CHA-LA\nJust as loudly my heart pounds,\nThe Genki-Dama roars...Sparking!`
                }
            },
            {
                "title": "Guren no Yumiya",
                "author": "Linked Horizon",
                "year": "2014",
                "album": "Attack on Titan",
                "src": "../assets/guren-no-yumiya.mp3",
                "style": ["anime"],
                "img": "../assets/guren-no-yumiya.jpg",
                "lyrics": {
                    "original": `Seid ihr das Essen?\nNein, wir sind der Jager!\n\n踏まれた花の 名前も知らずに\n地に墜ちた鳥は 風を待ち侘びる\n\n祈ったところで 何も変わらない\n≪不本意な現状≫(いま)を変えるのは 戦う覚悟だ…\n\n屍踏み越えて 進む意志を 嗤う豚よ\n家畜の安寧 …虚偽の繁栄 …死せる俄狼の『自由』を!\n\n囚われた屈辱は 反撃の嚆矢(こうし)だ 城壁の其の彼方 獲物を屠る≪狩人≫(イェーガー)\n迸る≪殺意≫(しょうどう)に 其の身を灼きながら 黄昏に緋を穿つ\n紅蓮の弓矢\n\n矢を番え追い駈ける 標的(やつ)は逃がさない\n矢を放ち追い詰める 決して逃がさない\n\n限界まで引き絞る はち切れそうな弦\n≪標的≫(やつ)が息絶えるまで 何度でも放つ\n\n獲物を殺すのは\n≪凶器≫(どうぐ)でも 技術でもない\n研ぎ澄まされた お前自身の殺意だ\n\nWir sind der Jager 焔のように熱く!\nWir sind der Jager 氷のように冷ややかに!\nWir sind der Jager 己を矢に込めて!\nWir sind der Jager 全てを貫いて征け!\n\n何かを変える事が出来るのは\n何かを捨てる事が出来るもの\n\n何ひとつ≪危険性≫(リスク)等 背負わないままで 何かが叶う等……\n\n暗愚の想定 …唯の幻影 …今は無謀な勇気も…\n『自由』の尖兵 …賭けの攻勢\n奔る奴隷に勝利を!\n\n架せられた不条理は 進撃の嚆矢(こうし)だ\n奪われた其の地平『自由』(せかい)を望む≪あの日の少年≫(エレン)\n止めどなき≪殺意≫(しょうどう)に 其の身を侵されながら 宵闇に紫(し)を運ぶ\n冥府の弓矢\n`,
                    "translation": ""
                }
            },
            {
                "title": "Zankoku na Tenshi",
                "author": "Yōko Takahashi",
                "year": "1995",
                "album": "Shinseiki Evangelion",
                "src": "../assets/zankoku-na-tenshi.mp3",
                "style": ["anime"],
                "img": "../assets/zankoku-na-tenshi.jpg",
                "lyrics": {
                    "original": `残酷な天使のように\n少年よ　神話になれ\n\n青い風がいま\n胸のドアを叩いても\n私だけをただ見つめて\n微笑んでるあなた\nそっとふれるもの\nもとめることに夢中で\n運命さえまだ知らない\nいたいけな瞳\n\nだけどいつか気付くでしょう　その背中には\n遥か未来　めざすための　羽根があること\n\n残酷な天使のテーゼ\n窓辺からやがて飛び立つ\nほとばしる熱いパトスで\n思い出を裏切るなら\nこの宇宙(そら)を抱いて輝く\n少年よ　神話になれ\n\nずっと眠ってる\n私の愛の揺りかご\nあなただけが　夢の使者に\n呼ばれる朝がくる\n細い首筋を\n月あかりが映してる\n世界中の時を止めて\n閉じこめたいけど\n\nもしもふたり逢えたことに　意味があるなら\n私はそう　自由を知る　ためのバイブル\n\n残酷な天使のテーゼ\n悲しみがそしてはじまる\n抱きしめた命のかたち\nその夢に目覚めたとき\n誰よりも光を放つ\n少年よ　神話になれ\n\n人は愛をつむぎながら　歴史をつくる\n女神なんてなれないまま　私は生きる \n\n残酷な天使のテーゼ\n窓辺からやがて飛び立つ\nほとばしる熱いパトスで\n思い出を裏切るなら\nこの宇宙(そら)を抱いて輝く\n少年よ　神話になれ\n`,
                    "translation": `Like a cruel angel,\nyoung boy, become the legend!\n\nA blue wind is now\nknocking at the door to your heart, and yet\nyou are merely gazing at me\nand smiling.\n\nSomething gently touching--\nyou're so intent on seeking it out,\nthat you can't even see your fate yet,\nwith such innocent eyes.\n\nBut someday I think you'll find out\nthat what's on your back\nare wings that are for\nheading for the far-off future.\n\nThe cruel angel's thesis\nwill soon take flight through the window,\nwith surging, hot pathos,\nif you betray your memories.\nEmbracing this sky [universe] and shining,\nyoung boy, become the legend!\n\nSleeping for a long time\nin the cradle of my love\nThe morning is coming when you alone will be called\nby a messenger of dreams.\n\nMoonlight reflects off\nthe nape of your slender neck.\nStopping time all throughout the world\nI want to confine them, but...\n\nSo if two people being brought together by fate\nhas any meaning,\nI think that it is a "bible"\nfor learning freedom.\n\nThe cruel angel's thesis.\nThe sorrow then begins.\nYou held tight to the form of life\nwhen you woke up from that dream.\nYou shine brighter than anyone else.\nYoung boy, become the legend!\n\nPeople create history\nwhile weaving love.\nEven knowing I'll never be a goddess or anything like that,\nI live on.\n\nThe cruel angel's thesis\nwill soon take flight through the window,\nwith surging, hot pathos,\nif you betray your memories.\nEmbracing this sky and shining,\nyoung boy, become the legend!\n\nA blue wind is now\nknocking at the door to your heart, and yet\nyou are merely gazing at me\nand smiling.\n\nSomething gently touching--\nyou're so intent on seeking it out,\nthat you can't even see your fate yet,\nwith such innocent eyes.\n\nBut someday I think you'll find out\nthat what's on your back\nare wings that are for\nheading for the far-off future.\n\nThe cruel angel's thesis\nwill soon take flight through the window,\nwith surging, hot pathos,\nif you betray your memories.\nEmbracing this sky [universe] and shining,\nyoung boy, become the legend!`
                }
            },
            {
                "title": "Again",
                "author": "YUI",
                "year": "2009",
                "album": "Fullmetal Alchemist: Brotherhood",
                "src": "../assets/again.mp3",
                "style": ["anime"],
                "img": "../assets/again.jpg",
                "lyrics": {
                    "original": `残酷な天使のように\n少年よ　神話になれ\n\n青い風がいま\n胸のドアを叩いても\n私だけをただ見つめて\n微笑んでるあなた\nそっとふれるもの\nもとめることに夢中で\n運命さえまだ知らない\nいたいけな瞳\n\nだけどいつか気付くでしょう　その背中には\n遥か未来　めざすための　羽根があること\n\n残酷な天使のテーゼ\n窓辺からやがて飛び立つ\nほとばしる熱いパトスで\n思い出を裏切るなら\nこの宇宙(そら)を抱いて輝く\n少年よ　神話になれ\n\nずっと眠ってる\n私の愛の揺りかご\nあなただけが　夢の使者に\n呼ばれる朝がくる\n細い首筋を\n月あかりが映してる\n世界中の時を止めて\n閉じこめたいけど\n\nもしもふたり逢えたことに　意味があるなら\n私はそう　自由を知る　ためのバイブル\n\n残酷な天使のテーゼ\n悲しみがそしてはじまる\n抱きしめた命のかたち\nその夢に目覚めたとき\n誰よりも光を放つ\n少年よ　神話になれ\n\n人は愛をつむぎながら　歴史をつくる\n女神なんてなれないまま　私は生きる \n\n残酷な天使のテーゼ\n窓辺からやがて飛び立つ\nほとばしる熱いパトスで\n思い出を裏切るなら\nこの宇宙(そら)を抱いて輝く\n少年よ　神話になれ\n`,
                    "translation": `Like a cruel angel,\nyoung boy, become the legend!\n\nA blue wind is now\nknocking at the door to your heart, and yet\nyou are merely gazing at me\nand smiling.\n\nSomething gently touching--\nyou're so intent on seeking it out,\nthat you can't even see your fate yet,\nwith such innocent eyes.\n\nBut someday I think you'll find out\nthat what's on your back\nare wings that are for\nheading for the far-off future.\n\nThe cruel angel's thesis\nwill soon take flight through the window,\nwith surging, hot pathos,\nif you betray your memories.\nEmbracing this sky [universe] and shining,\nyoung boy, become the legend!\n\nSleeping for a long time\nin the cradle of my love\nThe morning is coming when you alone will be called\nby a messenger of dreams.\n\nMoonlight reflects off\nthe nape of your slender neck.\nStopping time all throughout the world\nI want to confine them, but...\n\nSo if two people being brought together by fate\nhas any meaning,\nI think that it is a "bible"\nfor learning freedom.\n\nThe cruel angel's thesis.\nThe sorrow then begins.\nYou held tight to the form of life\nwhen you woke up from that dream.\nYou shine brighter than anyone else.\nYoung boy, become the legend!\n\nPeople create history\nwhile weaving love.\nEven knowing I'll never be a goddess or anything like that,\nI live on.\n\nThe cruel angel's thesis\nwill soon take flight through the window,\nwith surging, hot pathos,\nif you betray your memories.\nEmbracing this sky and shining,\nyoung boy, become the legend!\n\nA blue wind is now\nknocking at the door to your heart, and yet\nyou are merely gazing at me\nand smiling.\n\nSomething gently touching--\nyou're so intent on seeking it out,\nthat you can't even see your fate yet,\nwith such innocent eyes.\n\nBut someday I think you'll find out\nthat what's on your back\nare wings that are for\nheading for the far-off future.\n\nThe cruel angel's thesis\nwill soon take flight through the window,\nwith surging, hot pathos,\nif you betray your memories.\nEmbracing this sky [universe] and shining,\nyoung boy, become the legend!`
                }
            }
        ];
    }
    getSongs() {
        return this.arrSongs;
    }
    playSong(i) {
        this.currentSong = this.arrSongs[i];
        this.currentView = "player";
        window.scroll(0, 0);
        console.log(this.currentSong);
        console.log(i);
    }
    setView(view) {
        this.currentView = view;
    }
};
SongDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SongDataService);



/***/ }),

/***/ "./src/app/song-list/song-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/song-list/song-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #song-list-container{\r\n  min-height: 100vh;\r\n}\r\n */\r\n.card-product .img-wrap {\r\n    border-radius: 3px 3px 0 0;\r\n    overflow: hidden;\r\n    position: relative;\r\n    height: 220px;\r\n    text-align: center;\r\n  }\r\n.card-product .img-wrap img {\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    margin: 1em;\r\n    cursor: pointer;\r\n    width: 175px;\r\n    height: 175px;\r\n    overflow: hidden;\r\n  }\r\n.card-product .info-wrap {\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    /* border-top: 1px solid #eee; */\r\n  }\r\n.card-product .bottom-wrap {\r\n    padding: 15px;\r\n    border-top: 1px solid #eee;\r\n  }\r\n.label-rating {\r\n    margin-right: 10px;\r\n    color: #333;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n  }\r\n.title{\r\n    color: white;\r\n    font-weight: bolder;\r\n    margin-left: 25px;\r\n  }\r\n.songTitle{\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZy1saXN0L3NvbmctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRTtBQUNGO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0NBQWdDO0VBQ2xDO0FBRUE7SUFDRSxhQUFhO0lBQ2IsMEJBQTBCO0VBQzVCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvc29uZy1saXN0L3NvbmctbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogI3NvbmctbGlzdC1jb250YWluZXJ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuICovXHJcbi5jYXJkLXByb2R1Y3QgLmltZy13cmFwIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXByb2R1Y3QgLmltZy13cmFwIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1wcm9kdWN0IC5pbmZvLXdyYXAge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAvKiBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTsgKi9cclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtcHJvZHVjdCAuYm90dG9tLXdyYXAge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gIH1cclxuICBcclxuICAubGFiZWwtcmF0aW5nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNvbmdUaXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/song-list/song-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/song-list/song-list.component.ts ***!
  \**************************************************/
/*! exports provided: SongListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListComponent", function() { return SongListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_song_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/song-data.service */ "./src/app/services/song-data.service.ts");



let SongListComponent = class SongListComponent {
    constructor(_data) {
        this._data = _data;
    }
    playSong(i) {
        this._data.playSong(i);
    }
    ngOnInit() {
    }
};
SongListComponent.ctorParameters = () => [
    { type: _services_song_data_service__WEBPACK_IMPORTED_MODULE_2__["SongDataService"] }
];
SongListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-song-list',
        template: __webpack_require__(/*! raw-loader!./song-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/song-list/song-list.component.html"),
        styles: [__webpack_require__(/*! ./song-list.component.css */ "./src/app/song-list/song-list.component.css")]
    })
], SongListComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eric_\Desktop\Workspace\Angular\MusicPlayer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map