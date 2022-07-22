"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/alunos";
exports.ids = ["pages/alunos"];
exports.modules = {

/***/ "./pages/alunos.jsx":
/*!**************************!*\
  !*** ./pages/alunos.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import '../styles/globals.css';\nclass App extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    // Constructor \n    constructor(props){\n        super(props);\n        this.state = {\n            items: [],\n            DataisLoaded: false\n        };\n    }\n    // ComponentDidMount is used to\n    // execute the code \n    componentDidMount() {\n        fetch(\"http://127.0.0.1:8000/api/aluno\").then((res)=>res.json()).then((json)=>{\n            this.setState({\n                items: json,\n                DataisLoaded: true\n            });\n        });\n    }\n    render() {\n        const { DataisLoaded , items  } = this.state;\n        if (!DataisLoaded) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \" Pleses wait some time.... \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\alunos.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, this),\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\alunos.jsx\",\n            lineNumber: 30,\n            columnNumber: 35\n        }, this);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"App\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \" Fetch data from an api in react \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\alunos.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, this),\n                \"  \",\n                items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                        children: [\n                            \"Nome: \",\n                            item.nome,\n                            \", Idade: \",\n                            item.idade,\n                            \", Sexo: \",\n                            item.sexo\n                        ]\n                    }, item.id, true, {\n                        fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\alunos.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\alunos.jsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hbHVub3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDLE1BQU1DLEdBQUcsU0FBU0Qsd0RBQWU7SUFFN0IsZUFBZTtJQUNmRyxZQUFZQyxLQUFLLENBQUU7UUFDZixLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDQyxLQUFLLEdBQUc7WUFDVEMsS0FBSyxFQUFFLEVBQUU7WUFDVEMsWUFBWSxFQUFFLEtBQUs7U0FDdEIsQ0FBQztLQUNMO0lBRUQsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQkMsaUJBQWlCLEdBQUc7UUFDaEJDLEtBQUssQ0FDYixpQ0FBaUMsQ0FBQyxDQUNyQkMsSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUN6QkYsSUFBSSxDQUFDLENBQUNFLElBQUksR0FBSztZQUNaLElBQUksQ0FBQ0MsUUFBUSxDQUFDO2dCQUNWUCxLQUFLLEVBQUVNLElBQUk7Z0JBQ1hMLFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUMsQ0FBQztTQUNOLENBQUM7S0FDVDtJQUNETyxNQUFNLEdBQUc7UUFDTCxNQUFNLEVBQUVQLFlBQVksR0FBRUQsS0FBSyxHQUFFLEdBQUcsSUFBSSxDQUFDRCxLQUFLO1FBQzFDLElBQUksQ0FBQ0UsWUFBWSxFQUFFLHFCQUFPLDhEQUFDUSxLQUFHOzs4QkFDMUIsOERBQUNDLElBQUU7OEJBQUMsNkJBQTJCOzs7Ozt3QkFBSztnQkFBQSxHQUFDOzs7Ozs7Z0JBQU0sQ0FBRTtRQUVqRCxxQkFDQSw4REFBQ0QsS0FBRztZQUFDRSxTQUFTLEVBQUcsS0FBSzs7OEJBQ2xCLDhEQUFDRCxJQUFFOzhCQUFDLG1DQUFpQzs7Ozs7d0JBQUs7Z0JBQUEsSUFBRTtnQkFDeENWLEtBQUssQ0FBQ1ksR0FBRyxDQUFDLENBQUNDLElBQUksaUJBQ2YsOERBQUNDLElBQUU7OzRCQUFvQixRQUNiOzRCQUFFRCxJQUFJLENBQUNFLElBQUk7NEJBQUUsV0FDWjs0QkFBRUYsSUFBSSxDQUFDRyxLQUFLOzRCQUFFLFVBQ2Y7NEJBQUVILElBQUksQ0FBQ0ksSUFBSTs7dUJBSFRKLElBQUksQ0FBQ0ssRUFBRTs7Ozs0QkFJVixDQUNQOzs7Ozs7Z0JBRUosQ0FDUjtLQUNMO0NBQ0E7QUFFRCxpRUFBZXZCLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2FsdW5vcy5qc3g/NmE2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgIFxyXG4gICAgLy8gQ29uc3RydWN0b3IgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgICAgICBEYXRhaXNMb2FkZWQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgXHJcbiAgICAvLyBDb21wb25lbnREaWRNb3VudCBpcyB1c2VkIHRvXHJcbiAgICAvLyBleGVjdXRlIHRoZSBjb2RlIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgZmV0Y2goXHJcblwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9hbHVub1wiKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IGpzb24sXHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YWlzTG9hZGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IERhdGFpc0xvYWRlZCwgaXRlbXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYgKCFEYXRhaXNMb2FkZWQpIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+IFBsZXNlcyB3YWl0IHNvbWUgdGltZS4uLi4gPC9oMT4gPC9kaXY+IDtcclxuICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiQXBwXCI+XHJcbiAgICAgICAgICAgIDxoMT4gRmV0Y2ggZGF0YSBmcm9tIGFuIGFwaSBpbiByZWFjdCA8L2gxPiAge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiAoIFxyXG4gICAgICAgICAgICAgICAgPG9sIGtleSA9IHsgaXRlbS5pZCB9ID5cclxuICAgICAgICAgICAgICAgICAgICBOb21lOiB7IGl0ZW0ubm9tZSB9LCBcclxuICAgICAgICAgICAgICAgICAgICBJZGFkZTogeyBpdGVtLmlkYWRlIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgIFNleG86IHsgaXRlbS5zZXhvIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxufVxyXG4gICBcclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIml0ZW1zIiwiRGF0YWlzTG9hZGVkIiwiY29tcG9uZW50RGlkTW91bnQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJvbCIsIm5vbWUiLCJpZGFkZSIsInNleG8iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/alunos.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/alunos.jsx"));
module.exports = __webpack_exports__;

})();