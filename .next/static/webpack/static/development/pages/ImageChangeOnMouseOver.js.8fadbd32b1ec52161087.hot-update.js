webpackHotUpdate("static/development/pages/ImageChangeOnMouseOver.js",{

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Jonathan/devmtn/pluralsight-courses/react-hooks/src/ImageToggleOnMouseOver.js";


var ImageToggleOnMouseOver = function ImageToggleOnMouseOver(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onMouseOver: function onMouseOver() {
      imageRef.current.src = secondaryImg;
    },
    onMouseOut: function onMouseOut() {
      imageRef.current.src = primaryImg;
    },
    src: primaryImg,
    alt: "",
    ref: imageRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnMouseOver);

/***/ })

})
//# sourceMappingURL=ImageChangeOnMouseOver.js.8fadbd32b1ec52161087.hot-update.js.map