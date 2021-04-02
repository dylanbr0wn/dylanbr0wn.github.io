webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_HomeHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HomeHero */ "./components/HomeHero.js");
/* harmony import */ var react_cursor_position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cursor-position */ "./node_modules/react-cursor-position/dist/es/ReactCursorPosition.js");
/* harmony import */ var _components_PointerDisplayThing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PointerDisplayThing */ "./components/PointerDisplayThing.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/About */ "./components/About.js");
/* harmony import */ var _components_SixNine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SixNine */ "./components/SixNine.js");
/* harmony import */ var _components_Metea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Metea */ "./components/Metea.js");
/* harmony import */ var _components_Snake__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Snake */ "./components/Snake.js");
/* harmony import */ var react_instagram_embed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-instagram-embed */ "./node_modules/react-instagram-embed/es/index.js");
/* harmony import */ var _components_Photography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Photography */ "./components/Photography.js");
/* harmony import */ var _components_Software__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Software */ "./components/Software.js");


var _jsxFileName = "C:\\Users\\Dylan\\personal\\website\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();
















var Home = function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      ready = _useState[0],
      setReady = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("home"),
      route = _useState2[0],
      setRoute = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      keys = _useState3[0],
      setKeys = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      konami = _useState4[0],
      setKonami = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      hover = _useState5[0],
      setHover = _useState5[1];

  var routes = ["home", "about", "design", "software", "photography", "69", "metea", "snake"];
  var konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

  var incrementReady = function incrementReady(inc) {
    if (inc < 4) {
      setTimeout(function () {
        setReady(function (state) {
          return state + 1;
        });
        incrementReady(inc + 1);
      }, 250);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTimeout(function () {
      incrementReady(0);
    }, 1000);
    document.addEventListener("keydown", keyHandler);
  }, []);

  var keyHandler = function keyHandler(event) {
    konamiHandler(event);
    naviagationHandler(event);
    var charList = "abcdefghijklmnopqrstuvwxyz0123456789";
    if (!event.key) return;
    var key = event.key.toLowerCase(); // we are only interested in alphanumeric keys

    if (charList.indexOf(key) === -1) return;
    setKeys(function (state) {
      if (state.length > 4) {
        var substring = state + key;
        return substring.substr(-5);
      } else {
        return state + key;
      }
    });
  };

  var naviagationHandler = function naviagationHandler(event) {
    setRoute(function (state) {
      if (event.key === "Escape") {
        if (state !== "home") {
          _clickHandler(0);
        }
      }

      return state;
    });
  };

  var konamiHandler = function konamiHandler(event) {
    setKonami(function (state) {
      if (konamiCode.indexOf(event.key) < 0 || event.key !== konamiCode[state]) {
        return 0;
      }

      return state + 1;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (konami === konamiCode.length) {
      _clickHandler(7);
    }
  }, [konami]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (keys === "metea") {
      setKeys("");
      var win = window.open("https://youtu.be/EgT_us6AsDg?t=20", "_blank");
      win.focus();

      _clickHandler(6);
    }
  }, [keys]);

  var _clickHandler = function clickHandler(id) {
    if (id === 0) setHover(0);
    setReady(0);
    setTimeout(function () {
      setRoute(routes[id]);
      incrementReady(0);
    }, 200);
  };

  var hoverHandler = function hoverHandler(id) {
    if (route === "home") setHover(id);
  };

  var bgColors = ["transparent", "#ff0077", "#7b00ff", "#ffa200", "#00eeff"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "overflow-auto min-h-screen h-full bg-realGray-900",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          backgroundColor: bgColors[hover] || "transparent"
        },
        className: "w-full h-screen opacity-5 fixed top-0 left-0 transition-colors"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full h-full",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PointerDisplayThing__WEBPACK_IMPORTED_MODULE_5__["default"], {
          route: route,
          ready: ready,
          sixtyNineHandler: function sixtyNineHandler() {
            return _clickHandler(5);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_HomeHero__WEBPACK_IMPORTED_MODULE_3__["default"], {
          ready: ready
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: " text-white relative mx-auto max-w-7xl h-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
            hoverHandler: hoverHandler,
            display: route === "home",
            ready: ready,
            clickHandler: _clickHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_About__WEBPACK_IMPORTED_MODULE_8__["default"], {
            color: bgColors[1],
            display: route === "about",
            clickHandler: _clickHandler,
            ready: ready
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Photography__WEBPACK_IMPORTED_MODULE_13__["default"], {
            color: bgColors[4],
            display: route === "photography",
            clickHandler: _clickHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Software__WEBPACK_IMPORTED_MODULE_14__["default"], {
            color: bgColors[3],
            ready: ready,
            display: route === "software",
            clickHandler: _clickHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 25
          }, _this), route === "69" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SixNine__WEBPACK_IMPORTED_MODULE_9__["default"], {
            clickHandler: function clickHandler() {
              return _clickHandler(0);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 29
          }, _this), route === "metea" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Metea__WEBPACK_IMPORTED_MODULE_10__["default"], {
            clickHandler: function clickHandler() {
              return _clickHandler(0);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Snake__WEBPACK_IMPORTED_MODULE_11__["default"], {
            display: route === "snake",
            clickHandler: function clickHandler() {
              return _clickHandler(0);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 9
  }, _this);
};

_s(Home, "T5fp4LyIitScMoAPp1Jt1FzGFz8=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicmVhZHkiLCJzZXRSZWFkeSIsInJvdXRlIiwic2V0Um91dGUiLCJrZXlzIiwic2V0S2V5cyIsImtvbmFtaSIsInNldEtvbmFtaSIsImhvdmVyIiwic2V0SG92ZXIiLCJyb3V0ZXMiLCJrb25hbWlDb2RlIiwiaW5jcmVtZW50UmVhZHkiLCJpbmMiLCJzZXRUaW1lb3V0Iiwic3RhdGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlIYW5kbGVyIiwiZXZlbnQiLCJrb25hbWlIYW5kbGVyIiwibmF2aWFnYXRpb25IYW5kbGVyIiwiY2hhckxpc3QiLCJrZXkiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJzdWJzdHIiLCJjbGlja0hhbmRsZXIiLCJ3aW4iLCJ3aW5kb3ciLCJvcGVuIiwiZm9jdXMiLCJpZCIsImhvdmVySGFuZGxlciIsImJnQ29sb3JzIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLENBQUQsQ0FEbkI7QUFBQSxNQUNSQyxLQURRO0FBQUEsTUFDREMsUUFEQzs7QUFBQSxtQkFFV0Ysc0RBQVEsQ0FBQyxNQUFELENBRm5CO0FBQUEsTUFFUkcsS0FGUTtBQUFBLE1BRURDLFFBRkM7O0FBQUEsbUJBR1NKLHNEQUFRLENBQUMsRUFBRCxDQUhqQjtBQUFBLE1BR1JLLElBSFE7QUFBQSxNQUdGQyxPQUhFOztBQUFBLG1CQUlhTixzREFBUSxDQUFDLENB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aUNJLHFFQUFDLDZEQUFEO0FBQ0ksaUJBQUssRUFBRU8sUUFBUSxDQUFDLENBQUQsQ0FEbkI7QUFFSSxpQkFBSyxFQUFFckMsS0FGWDtBQUdJLG1CQUFPLEVBQUVFLEtBQUssS0FBSyxVQUh2QjtBQUlJLHdCQUFZLEVBQUU0QjtBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpDSixFQXVDSzVCLEtBQUssS0FBSyxJQUFWLGlCQUNHLHFFQUFDLDJEQUFEO0FBQVMsd0JBQVksRUFBRTtBQUFBLHFCQUFNNEIsYUFBWSxDQUFDLENBQUQsQ0FBbEI7QUFBQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhDUixFQTBDSzVCLEtBQUssS0FBSyxPQUFWLGlCQUNHLHFFQUFDLDBEQUFEO0FBQU8sd0JBQVksRUFBRTtBQUFBLHFCQUFNNEIsYUFBWSxDQUFDLENBQUQsQ0FBbEI7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTNDUixlQThDSSxxRUFBQywwREFBRDtBQUNJLG1CQUFPLEVBQUU1QixLQUFLLEtBQUssT0FEdkI7QUFFSSx3QkFBWSxFQUFFO0FBQUEscUJBQU00QixhQUFZLENBQUMsQ0FBRCxDQUFsQjtBQUFBO0FBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtRkgsQ0FyTkQ7O0dBQU1oQyxJOztLQUFBQSxJO0FBdU5TQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZGQ1NmI0ZWQzNWNjOTRhNzhlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIb21lSGVybyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lSGVyb1wiO1xuaW1wb3J0IFJlYWN0Q3Vyc29yUG9zaXRpb24gZnJvbSBcInJlYWN0LWN1cnNvci1wb3NpdGlvblwiO1xuaW1wb3J0IFBvaW50ZXJEaXNwbGF5VGhpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9pbnRlckRpc3BsYXlUaGluZ1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVudVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BYm91dFwiO1xuaW1wb3J0IFNpeE5pbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2l4TmluZVwiO1xuaW1wb3J0IE1ldGVhIGZyb20gXCIuLi9jb21wb25lbnRzL01ldGVhXCI7XG5pbXBvcnQgU25ha2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvU25ha2VcIjtcbmltcG9ydCBJbnN0YWdyYW1FbWJlZCBmcm9tIFwicmVhY3QtaW5zdGFncmFtLWVtYmVkXCI7XG5pbXBvcnQgUGhvdG9ncmFwaHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGhvdG9ncmFwaHlcIjtcbmltcG9ydCBTb2Z0d2FyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Tb2Z0d2FyZVwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIGNvbnN0IFtyZWFkeSwgc2V0UmVhZHldID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3JvdXRlLCBzZXRSb3V0ZV0gPSB1c2VTdGF0ZShcImhvbWVcIik7XG4gICAgY29uc3QgW2tleXMsIHNldEtleXNdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2tvbmFtaSwgc2V0S29uYW1pXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IHJvdXRlcyA9IFtcbiAgICAgICAgXCJob21lXCIsXG4gICAgICAgIFwiYWJvdXRcIixcbiAgICAgICAgXCJkZXNpZ25cIixcbiAgICAgICAgXCJzb2Z0d2FyZVwiLFxuICAgICAgICBcInBob3RvZ3JhcGh5XCIsXG4gICAgICAgIFwiNjlcIixcbiAgICAgICAgXCJtZXRlYVwiLFxuICAgICAgICBcInNuYWtlXCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGtvbmFtaUNvZGUgPSBbXG4gICAgICAgIFwiQXJyb3dVcFwiLFxuICAgICAgICBcIkFycm93VXBcIixcbiAgICAgICAgXCJBcnJvd0Rvd25cIixcbiAgICAgICAgXCJBcnJvd0Rvd25cIixcbiAgICAgICAgXCJBcnJvd0xlZnRcIixcbiAgICAgICAgXCJBcnJvd1JpZ2h0XCIsXG4gICAgICAgIFwiQXJyb3dMZWZ0XCIsXG4gICAgICAgIFwiQXJyb3dSaWdodFwiLFxuICAgICAgICBcImJcIixcbiAgICAgICAgXCJhXCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGluY3JlbWVudFJlYWR5ID0gaW5jID0+IHtcbiAgICAgICAgaWYgKGluYyA8IDQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFJlYWR5KHN0YXRlID0+IHN0YXRlICsgMSk7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50UmVhZHkoaW5jICsgMSk7XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaW5jcmVtZW50UmVhZHkoMCk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleUhhbmRsZXIpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGtleUhhbmRsZXIgPSBldmVudCA9PiB7XG4gICAgICAgIGtvbmFtaUhhbmRsZXIoZXZlbnQpO1xuICAgICAgICBuYXZpYWdhdGlvbkhhbmRsZXIoZXZlbnQpO1xuICAgICAgICBjb25zdCBjaGFyTGlzdCA9IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5XCI7XG4gICAgICAgIGlmICghZXZlbnQua2V5KSByZXR1cm47XG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIHdlIGFyZSBvbmx5IGludGVyZXN0ZWQgaW4gYWxwaGFudW1lcmljIGtleXNcbiAgICAgICAgaWYgKGNoYXJMaXN0LmluZGV4T2Yoa2V5KSA9PT0gLTEpIHJldHVybjtcbiAgICAgICAgc2V0S2V5cyhzdGF0ZSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgIGxldCBzdWJzdHJpbmcgPSBzdGF0ZSArIGtleTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3Vic3RyaW5nLnN1YnN0cigtNSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZSArIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG5hdmlhZ2F0aW9uSGFuZGxlciA9IGV2ZW50ID0+IHtcbiAgICAgICAgc2V0Um91dGUoc3RhdGUgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAhPT0gXCJob21lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGtvbmFtaUhhbmRsZXIgPSBldmVudCA9PiB7XG4gICAgICAgIHNldEtvbmFtaShzdGF0ZSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAga29uYW1pQ29kZS5pbmRleE9mKGV2ZW50LmtleSkgPCAwIHx8XG4gICAgICAgICAgICAgICAgZXZlbnQua2V5ICE9PSBrb25hbWlDb2RlW3N0YXRlXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgKyAxO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGtvbmFtaSA9PT0ga29uYW1pQ29kZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcig3KTtcbiAgICAgICAgfVxuICAgIH0sIFtrb25hbWldKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChrZXlzID09PSBcIm1ldGVhXCIpIHtcbiAgICAgICAgICAgIHNldEtleXMoXCJcIik7XG4gICAgICAgICAgICB2YXIgd2luID0gd2luZG93Lm9wZW4oXG4gICAgICAgICAgICAgICAgXCJodHRwczovL3lvdXR1LmJlL0VnVF91czZBc0RnP3Q9MjBcIixcbiAgICAgICAgICAgICAgICBcIl9ibGFua1wiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgd2luLmZvY3VzKCk7XG4gICAgICAgICAgICBjbGlja0hhbmRsZXIoNik7XG4gICAgICAgIH1cbiAgICB9LCBba2V5c10pO1xuXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gaWQgPT4ge1xuICAgICAgICBpZiAoaWQgPT09IDApIHNldEhvdmVyKDApO1xuICAgICAgICBzZXRSZWFkeSgwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRSb3V0ZShyb3V0ZXNbaWRdKTtcbiAgICAgICAgICAgIGluY3JlbWVudFJlYWR5KDApO1xuICAgICAgICB9LCAyMDApO1xuICAgIH07XG5cbiAgICBjb25zdCBob3ZlckhhbmRsZXIgPSBpZCA9PiB7XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gXCJob21lXCIpIHNldEhvdmVyKGlkKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYmdDb2xvcnMgPSBbXG4gICAgICAgIFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgXCIjZmYwMDc3XCIsXG4gICAgICAgIFwiIzdiMDBmZlwiLFxuICAgICAgICBcIiNmZmEyMDBcIixcbiAgICAgICAgXCIjMDBlZWZmXCIsXG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gbWluLWgtc2NyZWVuIGgtZnVsbCBiZy1yZWFsR3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3JzW2hvdmVyXSB8fCBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBoLXNjcmVlbiBvcGFjaXR5LTUgZml4ZWQgdG9wLTAgbGVmdC0wIHRyYW5zaXRpb24tY29sb3JzYH1cbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlID09PSBcIjY5XCIpIGNsaWNrSGFuZGxlcigwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gYmctcmVhbEdyYXktOTAwICB0b3AtMFwiXG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8UmVhY3RDdXJzb3JQb3NpdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCI+ICovfVxuICAgICAgICAgICAgICAgICAgICA8UG9pbnRlckRpc3BsYXlUaGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGU9e3JvdXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHk9e3JlYWR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l4dHlOaW5lSGFuZGxlcj17KCkgPT4gY2xpY2tIYW5kbGVyKDUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxIb21lSGVybyByZWFkeT17cmVhZHl9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSByZWxhdGl2ZSBteC1hdXRvIG1heC13LTd4bCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJIYW5kbGVyPXtob3ZlckhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17cm91dGUgPT09IFwiaG9tZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5PXtyZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBYm91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtiZ0NvbG9yc1sxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtyb3V0ZSA9PT0gXCJhYm91dFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5PXtyZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaG90b2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtiZ0NvbG9yc1s0XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtyb3V0ZSA9PT0gXCJwaG90b2dyYXBoeVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb3V0ZSA9PT0gXCJkZXNpZ25cIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xpY2tIYW5kbGVyKDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQ29sb3I6IFwiI2ZmMDA3N1wiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYWNrQnV0dG9uIHB4LTUgcHktMiB1cHBlcmNhc2UgbW91c2VMaW5rIG14LWF1dG8gdHJhbnNpdGlvbi1jb2xvcnMgbW9ub0ZvbnQgdGV4dC0zeGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNDBcIj57XCI8IEJhY2tcIn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFYXQgbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFNvZnR3YXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2JnQ29sb3JzWzNdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5PXtyZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtyb3V0ZSA9PT0gXCJzb2Z0d2FyZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb3V0ZSA9PT0gXCI2OVwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2l4TmluZSBjbGlja0hhbmRsZXI9eygpID0+IGNsaWNrSGFuZGxlcigwKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7cm91dGUgPT09IFwibWV0ZWFcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1ldGVhIGNsaWNrSGFuZGxlcj17KCkgPT4gY2xpY2tIYW5kbGVyKDApfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFNuYWtlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17cm91dGUgPT09IFwic25ha2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9eygpID0+IGNsaWNrSGFuZGxlcigwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogPC9SZWFjdEN1cnNvclBvc2l0aW9uPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9