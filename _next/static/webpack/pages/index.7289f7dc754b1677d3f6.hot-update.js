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
            lineNumber: 212,
            columnNumber: 29
          }, _this), route === "metea" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Metea__WEBPACK_IMPORTED_MODULE_10__["default"], {
            clickHandler: function clickHandler() {
              return _clickHandler(0);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Snake__WEBPACK_IMPORTED_MODULE_11__["default"], {
            display: route === "snake",
            clickHandler: function clickHandler() {
              return _clickHandler(0);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicmVhZHkiLCJzZXRSZWFkeSIsInJvdXRlIiwic2V0Um91dGUiLCJrZXlzIiwic2V0S2V5cyIsImtvbmFtaSIsInNldEtvbmFtaSIsImhvdmVyIiwic2V0SG92ZXIiLCJyb3V0ZXMiLCJrb25hbWlDb2RlIiwiaW5jcmVtZW50UmVhZHkiLCJpbmMiLCJzZXRUaW1lb3V0Iiwic3RhdGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlIYW5kbGVyIiwiZXZlbnQiLCJrb25hbWlIYW5kbGVyIiwibmF2aWFnYXRpb25IYW5kbGVyIiwiY2hhckxpc3QiLCJrZXkiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJzdWJzdHIiLCJjbGlja0hhbmRsZXIiLCJ3aW4iLCJ3aW5kb3ciLCJvcGVuIiwiZm9jdXMiLCJpZCIsImhvdmVySGFuZGxlciIsImJnQ29sb3JzIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLENBQUQsQ0FEbkI7QUFBQSxNQUNSQyxLQURRO0FBQUEsTUFDREMsUUFEQzs7QUFBQSxtQkFFV0Ysc0RBQVEsQ0FBQyxNQUFELENBRm5CO0FBQUEsTUFFUkcsS0FGUTtBQUFBLE1BRURDLFFBRkM7O0FBQUEsbUJBR1NKLHNEQUFRLENBQUMsRUFBRCxDQUhqQjtBQUFBLE1BR1JLLElBSFE7QUFBQSxNQUdGQyxPQUhFOztBQUFBLG1CQUlhTixzREFBUSxDQUFDLENB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aUNJLHFFQUFDLDZEQUFEO0FBQ0ksaUJBQUssRUFBRU8sUUFBUSxDQUFDLENBQUQsQ0FEbkI7QUFFSSxtQkFBTyxFQUFFbkMsS0FBSyxLQUFLLFVBRnZCO0FBR0ksd0JBQVksRUFBRTRCO0FBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakNKLEVBc0NLNUIsS0FBSyxLQUFLLElBQVYsaUJBQ0cscUVBQUMsMkRBQUQ7QUFBUyx3QkFBWSxFQUFFO0FBQUEscUJBQU00QixhQUFZLENBQUMsQ0FBRCxDQUFsQjtBQUFBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkNSLEVBeUNLNUIsS0FBSyxLQUFLLE9BQVYsaUJBQ0cscUVBQUMsMERBQUQ7QUFBTyx3QkFBWSxFQUFFO0FBQUEscUJBQU00QixhQUFZLENBQUMsQ0FBRCxDQUFsQjtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMUNSLGVBNkNJLHFFQUFDLDBEQUFEO0FBQ0ksbUJBQU8sRUFBRTVCLEtBQUssS0FBSyxPQUR2QjtBQUVJLHdCQUFZLEVBQUU7QUFBQSxxQkFBTTRCLGFBQVksQ0FBQyxDQUFELENBQWxCO0FBQUE7QUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE3Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtGSCxDQXBORDs7R0FBTWhDLEk7O0tBQUFBLEk7QUFzTlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcyODlmN2RjNzU0YjE2NzdkM2Y2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhvbWVIZXJvIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWVIZXJvXCI7XG5pbXBvcnQgUmVhY3RDdXJzb3JQb3NpdGlvbiBmcm9tIFwicmVhY3QtY3Vyc29yLXBvc2l0aW9uXCI7XG5pbXBvcnQgUG9pbnRlckRpc3BsYXlUaGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb2ludGVyRGlzcGxheVRoaW5nXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZW51XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0Fib3V0XCI7XG5pbXBvcnQgU2l4TmluZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TaXhOaW5lXCI7XG5pbXBvcnQgTWV0ZWEgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWV0ZWFcIjtcbmltcG9ydCBTbmFrZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbmFrZVwiO1xuaW1wb3J0IEluc3RhZ3JhbUVtYmVkIGZyb20gXCJyZWFjdC1pbnN0YWdyYW0tZW1iZWRcIjtcbmltcG9ydCBQaG90b2dyYXBoeSBmcm9tIFwiLi4vY29tcG9uZW50cy9QaG90b2dyYXBoeVwiO1xuaW1wb3J0IFNvZnR3YXJlIGZyb20gXCIuLi9jb21wb25lbnRzL1NvZnR3YXJlXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgW3JlYWR5LCBzZXRSZWFkeV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbcm91dGUsIHNldFJvdXRlXSA9IHVzZVN0YXRlKFwiaG9tZVwiKTtcbiAgICBjb25zdCBba2V5cywgc2V0S2V5c10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBba29uYW1pLCBzZXRLb25hbWldID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3Qgcm91dGVzID0gW1xuICAgICAgICBcImhvbWVcIixcbiAgICAgICAgXCJhYm91dFwiLFxuICAgICAgICBcImRlc2lnblwiLFxuICAgICAgICBcInNvZnR3YXJlXCIsXG4gICAgICAgIFwicGhvdG9ncmFwaHlcIixcbiAgICAgICAgXCI2OVwiLFxuICAgICAgICBcIm1ldGVhXCIsXG4gICAgICAgIFwic25ha2VcIixcbiAgICBdO1xuXG4gICAgY29uc3Qga29uYW1pQ29kZSA9IFtcbiAgICAgICAgXCJBcnJvd1VwXCIsXG4gICAgICAgIFwiQXJyb3dVcFwiLFxuICAgICAgICBcIkFycm93RG93blwiLFxuICAgICAgICBcIkFycm93RG93blwiLFxuICAgICAgICBcIkFycm93TGVmdFwiLFxuICAgICAgICBcIkFycm93UmlnaHRcIixcbiAgICAgICAgXCJBcnJvd0xlZnRcIixcbiAgICAgICAgXCJBcnJvd1JpZ2h0XCIsXG4gICAgICAgIFwiYlwiLFxuICAgICAgICBcImFcIixcbiAgICBdO1xuXG4gICAgY29uc3QgaW5jcmVtZW50UmVhZHkgPSBpbmMgPT4ge1xuICAgICAgICBpZiAoaW5jIDwgNCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UmVhZHkoc3RhdGUgPT4gc3RhdGUgKyAxKTtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnRSZWFkeShpbmMgKyAxKTtcbiAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpbmNyZW1lbnRSZWFkeSgwKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5SGFuZGxlcik7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qga2V5SGFuZGxlciA9IGV2ZW50ID0+IHtcbiAgICAgICAga29uYW1pSGFuZGxlcihldmVudCk7XG4gICAgICAgIG5hdmlhZ2F0aW9uSGFuZGxlcihldmVudCk7XG4gICAgICAgIGNvbnN0IGNoYXJMaXN0ID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcbiAgICAgICAgaWYgKCFldmVudC5rZXkpIHJldHVybjtcbiAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gd2UgYXJlIG9ubHkgaW50ZXJlc3RlZCBpbiBhbHBoYW51bWVyaWMga2V5c1xuICAgICAgICBpZiAoY2hhckxpc3QuaW5kZXhPZihrZXkpID09PSAtMSkgcmV0dXJuO1xuICAgICAgICBzZXRLZXlzKHN0YXRlID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1YnN0cmluZyA9IHN0YXRlICsga2V5O1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzdHJpbmcuc3Vic3RyKC01KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlICsga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbmF2aWFnYXRpb25IYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgICAgICBzZXRSb3V0ZShzdGF0ZSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBcImhvbWVcIikge1xuICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXIoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qga29uYW1pSGFuZGxlciA9IGV2ZW50ID0+IHtcbiAgICAgICAgc2V0S29uYW1pKHN0YXRlID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBrb25hbWlDb2RlLmluZGV4T2YoZXZlbnQua2V5KSA8IDAgfHxcbiAgICAgICAgICAgICAgICBldmVudC5rZXkgIT09IGtvbmFtaUNvZGVbc3RhdGVdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSArIDE7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoa29uYW1pID09PSBrb25hbWlDb2RlLmxlbmd0aCkge1xuICAgICAgICAgICAgY2xpY2tIYW5kbGVyKDcpO1xuICAgICAgICB9XG4gICAgfSwgW2tvbmFtaV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGtleXMgPT09IFwibWV0ZWFcIikge1xuICAgICAgICAgICAgc2V0S2V5cyhcIlwiKTtcbiAgICAgICAgICAgIHZhciB3aW4gPSB3aW5kb3cub3BlbihcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8veW91dHUuYmUvRWdUX3VzNkFzRGc/dD0yMFwiLFxuICAgICAgICAgICAgICAgIFwiX2JsYW5rXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB3aW4uZm9jdXMoKTtcbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcig2KTtcbiAgICAgICAgfVxuICAgIH0sIFtrZXlzXSk7XG5cbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSBpZCA9PiB7XG4gICAgICAgIGlmIChpZCA9PT0gMCkgc2V0SG92ZXIoMCk7XG4gICAgICAgIHNldFJlYWR5KDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFJvdXRlKHJvdXRlc1tpZF0pO1xuICAgICAgICAgICAgaW5jcmVtZW50UmVhZHkoMCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhvdmVySGFuZGxlciA9IGlkID0+IHtcbiAgICAgICAgaWYgKHJvdXRlID09PSBcImhvbWVcIikgc2V0SG92ZXIoaWQpO1xuICAgIH07XG5cbiAgICBjb25zdCBiZ0NvbG9ycyA9IFtcbiAgICAgICAgXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICBcIiNmZjAwNzdcIixcbiAgICAgICAgXCIjN2IwMGZmXCIsXG4gICAgICAgIFwiI2ZmYTIwMFwiLFxuICAgICAgICBcIiMwMGVlZmZcIixcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBtaW4taC1zY3JlZW4gaC1mdWxsIGJnLXJlYWxHcmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmdDb2xvcnNbaG92ZXJdIHx8IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtc2NyZWVuIG9wYWNpdHktNSBmaXhlZCB0b3AtMCBsZWZ0LTAgdHJhbnNpdGlvbi1jb2xvcnNgfVxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGUgPT09IFwiNjlcIikgY2xpY2tIYW5kbGVyKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBiZy1yZWFsR3JheS05MDAgIHRvcC0wXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgey8qIDxSZWFjdEN1cnNvclBvc2l0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxQb2ludGVyRGlzcGxheVRoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZT17cm91dGV9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkeT17cmVhZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXh0eU5pbmVIYW5kbGVyPXsoKSA9PiBjbGlja0hhbmRsZXIoNSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEhvbWVIZXJvIHJlYWR5PXtyZWFkeX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIHJlbGF0aXZlIG14LWF1dG8gbWF4LXctN3hsIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlckhhbmRsZXI9e2hvdmVySGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtyb3V0ZSA9PT0gXCJob21lXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHk9e3JlYWR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEFib3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2JnQ29sb3JzWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e3JvdXRlID09PSBcImFib3V0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHk9e3JlYWR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFBob3RvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2JnQ29sb3JzWzRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e3JvdXRlID09PSBcInBob3RvZ3JhcGh5XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXtjbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFxuICAgICAgICAgICAgICAgICAgICAgICAge3JvdXRlID09PSBcImRlc2lnblwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbGlja0hhbmRsZXIoMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJDb2xvcjogXCIjZmYwMDc3XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhY2tCdXR0b24gcHgtNSBweS0yIHVwcGVyY2FzZSBtb3VzZUxpbmsgbXgtYXV0byB0cmFuc2l0aW9uLWNvbG9ycyBtb25vRm9udCB0ZXh0LTN4bFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00MFwiPntcIjwgQmFja1wifTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVhdCBtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8U29mdHdhcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17YmdDb2xvcnNbM119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17cm91dGUgPT09IFwic29mdHdhcmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cm91dGUgPT09IFwiNjlcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpeE5pbmUgY2xpY2tIYW5kbGVyPXsoKSA9PiBjbGlja0hhbmRsZXIoMCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge3JvdXRlID09PSBcIm1ldGVhXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRlYSBjbGlja0hhbmRsZXI9eygpID0+IGNsaWNrSGFuZGxlcigwKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbmFrZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e3JvdXRlID09PSBcInNuYWtlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXsoKSA9PiBjbGlja0hhbmRsZXIoMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDwvUmVhY3RDdXJzb3JQb3NpdGlvbj4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==