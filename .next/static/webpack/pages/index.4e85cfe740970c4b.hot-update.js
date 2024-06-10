/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/adBanner.js":
/*!********************************!*\
  !*** ./components/adBanner.js ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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
                // @ts-ignore importMeta is replaced in the loader
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
    })();


/***/ }),

/***/ "./components/profile.js":
/*!*******************************!*\
  !*** ./components/profile.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _adBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adBanner */ \"./components/adBanner.js\");\n/* harmony import */ var _adBanner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adBanner__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profile_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.module.css */ \"./components/profile.module.css\");\n/* harmony import */ var _profile_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Profile() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_profile_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/assets/rokcso-studio-compressed.png\",\n                    height: \"120\",\n                    alt: \"rokcso Studio\"\n                }, void 0, false, {\n                    fileName: \"/Users/rokcso/Developer/LangingPage/components/profile.js\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Hi there. \\uD83D\\uDC4B\"\n                }, void 0, false, {\n                    fileName: \"/Users/rokcso/Developer/LangingPage/components/profile.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"This is \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"rokcso\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rokcso/Developer/LangingPage/components/profile.js\",\n                            lineNumber: 15,\n                            columnNumber: 19\n                        }, this),\n                        \". I know a little about development and design. I build for myself first.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rokcso/Developer/LangingPage/components/profile.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_adBanner__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                    fileName: \"/Users/rokcso/Developer/LangingPage/components/profile.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rokcso/Developer/LangingPage/components/profile.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0M7QUFDUTtBQUUzQixTQUFTRTtJQUN0QixxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBV0gsbUVBQWE7OzhCQUMzQiw4REFBQ0s7b0JBQ0NDLEtBQUk7b0JBQ0pDLFFBQU87b0JBQ1BDLEtBQUk7Ozs7Ozs4QkFFTiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7O3dCQUFHO3NDQUNNLDhEQUFDQztzQ0FBSzs7Ozs7O3dCQUFhOzs7Ozs7OzhCQUc3Qiw4REFBQ1osa0RBQVFBOzs7Ozs7Ozs7Ozs7QUFJakI7S0FsQndCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2ZpbGUuanM/OGI4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRCYW5uZXIgZnJvbSBcIi4vYWRCYW5uZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJvZmlsZS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9hc3NldHMvcm9rY3NvLXN0dWRpby1jb21wcmVzc2VkLnBuZ1wiXG4gICAgICAgICAgaGVpZ2h0PVwiMTIwXCJcbiAgICAgICAgICBhbHQ9XCJyb2tjc28gU3R1ZGlvXCJcbiAgICAgICAgPjwvaW1nPlxuICAgICAgICA8aDQ+SGkgdGhlcmUuIPCfkYs8L2g0PlxuICAgICAgICA8aDE+XG4gICAgICAgICAgVGhpcyBpcyA8c3Bhbj5yb2tjc288L3NwYW4+LiBJIGtub3cgYSBsaXR0bGUgYWJvdXQgZGV2ZWxvcG1lbnQgYW5kXG4gICAgICAgICAgZGVzaWduLiBJIGJ1aWxkIGZvciBteXNlbGYgZmlyc3QuXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxBZEJhbm5lciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQWRCYW5uZXIiLCJzdHlsZXMiLCJQcm9maWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaW1nIiwic3JjIiwiaGVpZ2h0IiwiYWx0IiwiaDQiLCJoMSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/profile.js\n"));

/***/ })

});