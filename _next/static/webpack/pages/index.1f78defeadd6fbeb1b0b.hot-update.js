webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomePageBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePageBox */ "./components/HomePageBox.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Dylan\\personal\\website\\components\\Menu.js",
    _this = undefined,
    _s = $RefreshSig$();




var Menu = function Menu(_ref) {
  _s();

  var clickHandler = _ref.clickHandler,
      ready = _ref.ready,
      display = _ref.display,
      hoverHandler = _ref.hoverHandler;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {// loadCanvas(loadSpline);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      display: display ? "block" : "none"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full text-center p-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HomePageBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
        hoverHandler: hoverHandler,
        clickHandler: clickHandler,
        id: 1,
        color: "#ff0077",
        title: "About",
        content: "",
        classes: "transform  ".concat(ready > 0 ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50"),
        initialWidth: "w-full"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HomePageBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: 3,
        hoverHandler: hoverHandler,
        clickHandler: clickHandler,
        color: "#ffa200",
        title: "Software",
        content: "",
        classes: "transform  p-5 ".concat(ready > 1 ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50"),
        initialWidth: "w-full"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HomePageBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: 4,
        hoverHandler: hoverHandler,
        clickHandler: clickHandler,
        color: "#00eeff",
        title: "Photography",
        content: "",
        classes: "transform  ".concat(ready > 3 ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50"),
        initialWidth: "w-full"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full lg:flex"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_s(Menu, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Menu;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c;

$RefreshReg$(_c, "Menu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzIl0sIm5hbWVzIjpbIk1lbnUiLCJjbGlja0hhbmRsZXIiLCJyZWFkeSIsImRpc3BsYXkiLCJob3ZlckhhbmRsZXIiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9EO0FBQUE7O0FBQUEsTUFBakRDLFlBQWlELFFBQWpEQSxZQUFpRDtBQUFBLE1BQW5DQyxLQUFtQyxRQUFuQ0EsS0FBbUM7QUFBQSxNQUE1QkMsT0FBNEIsUUFBNUJBLE9BQTRCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUM3REMseURBQVMsQ0FBQyxZQUFNLENBQ1o7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRUYsYUFBTyxFQUFFQSxPQUFPLEdBQUcsT0FBSCxHQUFhO0FBQS9CLEtBQVo7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUFBLDhCQUNJLHFFQUFDLG9EQUFEO0FBQ0ksb0JBQVksRUFBRUMsWUFEbEI7QUFFSSxvQkFBWSxFQUFFSCxZQUZsQjtBQUdJLFVBQUUsRUFBRSxDQUhSO0FBSUksYUFBSyxFQUFFLFNBSlg7QUFLSSxhQUFLLEVBQUUsT0FMWDtBQU1JLGVBQU8sRUFBRSxFQU5iO0FBT0ksZUFBTyx1QkFDSEMsS0FBSyxHQUFHLENBQVIsR0FDTSx5QkFETixHQUVNLHNCQUhILENBUFg7QUFZSSxvQkFBWSxFQUFFO0FBWmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQWVJLHFFQUFDLG9EQUFEO0FBQ0ksVUFBRSxFQUFFLENBRFI7QUFFSSxvQkFBWSxFQUFFRSxZQUZsQjtBQUdJLG9CQUFZLEVBQUVILFlBSGxCO0FBSUksYUFBSyxFQUFFLFNBSlg7QUFLSSxhQUFLLEVBQUUsVUFMWDtBQU1JLGVBQU8sRUFBRSxFQU5iO0FBT0ksZUFBTywyQkFDSEMsS0FBSyxHQUFHLENBQVIsR0FDTSx5QkFETixHQUVNLHNCQUhILENBUFg7QUFZSSxvQkFBWSxFQUFFO0FBWmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSixlQTRDSSxxRUFBQyxvREFBRDtBQUNJLFVBQUUsRUFBRSxDQURSO0FBRUksb0JBQVksRUFBRUUsWUFGbEI7QUFHSSxvQkFBWSxFQUFFSCxZQUhsQjtBQUlJLGFBQUssRUFBRSxTQUpYO0FBS0ksYUFBSyxFQUFFLGFBTFg7QUFNSSxlQUFPLEVBQUUsRUFOYjtBQU9JLGVBQU8sdUJBQ0hDLEtBQUssR0FBRyxDQUFSLEdBQ00seUJBRE4sR0FFTSxzQkFISCxDQVBYO0FBWUksb0JBQVksRUFBRTtBQVpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBNERJO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdFSCxDQXJFRDs7R0FBTUYsSTs7S0FBQUEsSTtBQXNFU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWY3OGRlZmVhZGQ2ZmJlYjFiMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIb21lUGFnZUJveCBmcm9tIFwiLi9Ib21lUGFnZUJveFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IE1lbnUgPSAoeyBjbGlja0hhbmRsZXIsIHJlYWR5LCBkaXNwbGF5LCBob3ZlckhhbmRsZXIgfSkgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBsb2FkQ2FudmFzKGxvYWRTcGxpbmUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBkaXNwbGF5ID8gXCJibG9ja1wiIDogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgPEhvbWVQYWdlQm94XHJcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJIYW5kbGVyPXtob3ZlckhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXtjbGlja0hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e1wiI2ZmMDA3N1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkFib3V0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtgdHJhbnNmb3JtICAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkeSA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJvcGFjaXR5LTEwMCBzY2FsZS14LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwib3BhY2l0eS0wIHNjYWxlLXgtNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxXaWR0aD17XCJ3LWZ1bGxcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SG9tZVBhZ2VCb3hcclxuICAgICAgICAgICAgICAgICAgICBpZD17M31cclxuICAgICAgICAgICAgICAgICAgICBob3ZlckhhbmRsZXI9e2hvdmVySGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9e2NsaWNrSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCIjZmZhMjAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiU29mdHdhcmVcIn1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2B0cmFuc2Zvcm0gIHAtNSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkeSA+IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJvcGFjaXR5LTEwMCBzY2FsZS14LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwib3BhY2l0eS0wIHNjYWxlLXgtNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxXaWR0aD17XCJ3LWZ1bGxcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPEhvbWVQYWdlQm94XHJcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJIYW5kbGVyPXtob3ZlckhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXtjbGlja0hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e1wiIzdiMDBmZlwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkRlc2lnblwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17YHRyYW5zZm9ybSAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHkgPiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwib3BhY2l0eS0xMDAgc2NhbGUteC0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm9wYWNpdHktMCBzY2FsZS14LTUwXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsV2lkdGg9e1widy1mdWxsXCJ9XHJcbiAgICAgICAgICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8SG9tZVBhZ2VCb3hcclxuICAgICAgICAgICAgICAgICAgICBpZD17NH1cclxuICAgICAgICAgICAgICAgICAgICBob3ZlckhhbmRsZXI9e2hvdmVySGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9e2NsaWNrSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCIjMDBlZWZmXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiUGhvdG9ncmFwaHlcIn1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2B0cmFuc2Zvcm0gICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5ID4gM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm9wYWNpdHktMTAwIHNjYWxlLXgtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJvcGFjaXR5LTAgc2NhbGUteC01MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFdpZHRoPXtcInctZnVsbFwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOmZsZXhcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=