webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/reducers/isNews.js":
/*!********************************!*\
  !*** ./src/reducers/isNews.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isNews = (state = false, action) => {
  switch (action.type) {
    case 'MOUSED_OVER_NEWS':
      return state = true;

    case 'MOUSED_OFF':
      return state = false;

    default:
      return 1;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isNews);

/***/ })

})
//# sourceMappingURL=_app.js.a68de03abe875f2ee224.hot-update.js.map