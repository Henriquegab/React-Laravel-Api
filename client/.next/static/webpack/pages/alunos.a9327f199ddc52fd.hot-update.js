"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/alunos",{

/***/ "./pages/alunos.jsx":
/*!**************************!*\
  !*** ./pages/alunos.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n\n// import '../styles/globals.css';\nvar App = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(App, _Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(App);\n    function App(props) {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, App);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            items: [],\n            DataisLoaded: false\n        };\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(App, [\n        {\n            // ComponentDidMount is used to\n            // execute the code \n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                var _this = this;\n                fetch(\"http://127.0.0.1:8000/api/aluno\").then(function(res) {\n                    return res.json();\n                }).then(function(json) {\n                    _this.setState({\n                        items: json,\n                        DataisLoaded: true\n                    });\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var _state = this.state, DataisLoaded = _state.DataisLoaded, items = _state.items;\n                if (!DataisLoaded) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \" Perae man kkkjkj \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\alunos.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\alunos.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 39\n                }, this);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"App\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \" Dados pegos da Api em Laravel usando React \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\alunos.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, this),\n                        \"  \",\n                        items.map(function(item) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                children: [\n                                    \"Nome: \",\n                                    item.nome,\n                                    \", Idade: \",\n                                    item.idade,\n                                    \", Sexo: \",\n                                    item.sexo\n                                ]\n                            }, item.id, true, {\n                                fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\alunos.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, _this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\alunos.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return App;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hbHVub3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztBQUEwQjtBQUMxQixrQ0FBa0M7QUFDbEMsT0FBUyxpQkE2Q047Ozs7YUE3Q0dDLEdBQUcsQ0FHV0MsS0FBSzs7O2tDQUNQQSxLQUFLLEVBQUU7UUFFYixNQUFLQyxLQUFLLEdBQUc7WUFDVEMsS0FBSyxFQUFFLEVBQUU7WUFDVEMsWUFBWSxFQUFFLEtBQUs7U0FDdEIsQ0FBQzs7Ozs7WUFHTiwrQkFBK0I7WUFDL0Isb0JBQW9CO1lBQ3BCQyxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUFqQkEsU0FBQUEsaUJBQWlCLEdBQUc7O2dCQUNoQkMsS0FBSyxDQUNHLGlDQUFpQyxDQUFDLENBQ2pDQyxJQUFJLENBQUMsU0FBQ0MsR0FBRzsyQkFBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7aUJBQUEsQ0FBQyxDQUN6QkYsSUFBSSxDQUFDLFNBQUNFLElBQUksRUFBSztvQkFDWixNQUFLQyxRQUFRLENBQUM7d0JBQ1ZQLEtBQUssRUFBRU0sSUFBSTt3QkFDWEwsWUFBWSxFQUFFLElBQUk7cUJBQ3JCLENBQUMsQ0FBQztpQkFDVixDQUFDO2FBQ1Q7OztZQUNETyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRzs7Z0JBQ0wsSUFBZ0MsTUFBVSxHQUFWLElBQUksQ0FBQ1QsS0FBSyxFQUFsQ0UsWUFBWSxHQUFZLE1BQVUsQ0FBbENBLFlBQVksRUFBRUQsS0FBSyxHQUFLLE1BQVUsQ0FBcEJBLEtBQUs7Z0JBQzNCLElBQUksQ0FBQ0MsWUFBWSxFQUFFLHFCQUFPLDhEQUFDUSxLQUFHOztzQ0FDMUIsOERBQUNDLElBQUU7c0NBQUMsb0JBQWtCOzs7OztnQ0FBSzt3QkFBQSxHQUFDOzs7Ozs7d0JBQU0sQ0FBRTtnQkFFeEMscUJBQ0EsOERBQUNELEtBQUc7b0JBQUNFLFNBQVMsRUFBRyxLQUFLOztzQ0FDbEIsOERBQUNELElBQUU7c0NBQUMsOENBQTRDOzs7OztnQ0FBSzt3QkFBQSxJQUFFO3dCQUNuRFYsS0FBSyxDQUFDWSxHQUFHLENBQUMsU0FBQ0MsSUFBSTtpREFDZiw4REFBQ0MsSUFBRTs7b0NBQW9CLFFBQ2I7b0NBQUVELElBQUksQ0FBQ0UsSUFBSTtvQ0FBRSxXQUNaO29DQUFFRixJQUFJLENBQUNHLEtBQUs7b0NBQUUsVUFDZjtvQ0FBRUgsSUFBSSxDQUFDSSxJQUFJOzsrQkFIVEosSUFBSSxDQUFDSyxFQUFFOzs7O3FDQUlWO3lCQUNSLENBQUM7Ozs7Ozt3QkFFSixDQUNSO2FBQ0w7Ozs7Q0FDSixDQTVDaUJ0Qix3REFBZSxDQTRDaEM7QUFFRCwrREFBZUMsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FsdW5vcy5qc3g/NmE2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgIFxyXG4gICAgICAgIC8vIENvbnN0cnVjdG9yIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgRGF0YWlzTG9hZGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIENvbXBvbmVudERpZE1vdW50IGlzIHVzZWQgdG9cclxuICAgICAgICAvLyBleGVjdXRlIHRoZSBjb2RlIFxyXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgICAgICBmZXRjaChcclxuICAgICAgICAgICAgICAgICAgICBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvYWx1bm9cIilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IGpzb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhaXNMb2FkZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgRGF0YWlzTG9hZGVkLCBpdGVtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAgICAgaWYgKCFEYXRhaXNMb2FkZWQpIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPiBQZXJhZSBtYW4ga2tramtqIDwvaDE+IDwvZGl2PiA7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIkFwcFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPiBEYWRvcyBwZWdvcyBkYSBBcGkgZW0gTGFyYXZlbCB1c2FuZG8gUmVhY3QgPC9oMT4gIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+ICggXHJcbiAgICAgICAgICAgICAgICAgICAgPG9sIGtleSA9IHsgaXRlbS5pZCB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTm9tZTogeyBpdGVtLm5vbWUgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElkYWRlOiB7IGl0ZW0uaWRhZGUgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNleG86IHsgaXRlbS5zZXhvIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4gICBcclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJpdGVtcyIsIkRhdGFpc0xvYWRlZCIsImNvbXBvbmVudERpZE1vdW50IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInNldFN0YXRlIiwicmVuZGVyIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwib2wiLCJub21lIiwiaWRhZGUiLCJzZXhvIiwiaWQiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/alunos.jsx\n"));

/***/ })

});