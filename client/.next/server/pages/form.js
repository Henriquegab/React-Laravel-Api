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
exports.id = "pages/form";
exports.ids = ["pages/form"];
exports.modules = {

/***/ "./pages/form.jsx":
/*!************************!*\
  !*** ./pages/form.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Apps extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    submitContact = async (event)=>{\n        event.preventDefault();\n        alert(`So your name is ${event.target.name.value}?`);\n    };\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"flex flex-col\",\n            onSubmit: \"{submitContact}\",\n            method: \"post\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    for: \"nome\",\n                    children: \"Nome:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\form.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"nome\",\n                    name: \"nome\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\form.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\form.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    for: \"idade\",\n                    children: \"Idade:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\form.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    id: \"idade\",\n                    name: \"idade\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\form.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\form.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    for: \"sexo\",\n                    children: \"Sexo:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\form.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"sexo\",\n                    name: \"sexo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\form.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\form.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\henrique.cruz\\\\Documents\\\\code\\\\React-Laravel-Api\\\\client\\\\pages\\\\form.jsx\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Apps);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3JtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBCO0FBQzFCLE1BQU1DLElBQUksU0FBU0Qsd0RBQWU7SUFJOUJHLGFBQWEsR0FBRyxPQUFPQyxLQUFLLEdBQUs7UUFDN0JBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDdkJDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixLQUFLLENBQUNHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0RCxDQUFDO0lBRUpDLE1BQU0sR0FBRTtRQUNKLHFCQUNJLDhEQUFDQyxNQUFJO1lBQUNDLFNBQVMsRUFBQyxlQUFlO1lBQUNDLFFBQVEsRUFBQyxpQkFBaUI7WUFBQ0MsTUFBTSxFQUFDLE1BQU07OzhCQUNwRSw4REFBQ0MsT0FBSztvQkFBQ0MsR0FBRyxFQUFDLE1BQU07OEJBQUMsT0FBSzs7Ozs7d0JBQVE7OEJBQy9CLDhEQUFDQyxPQUFLO29CQUFDQyxJQUFJLEVBQUMsTUFBTTtvQkFBQ0MsRUFBRSxFQUFDLE1BQU07b0JBQUNYLElBQUksRUFBQyxNQUFNOzs7Ozt3QkFBRzs4QkFDM0MsOERBQUNZLElBQUU7Ozs7d0JBQUc7OEJBQ04sOERBQUNMLE9BQUs7b0JBQUNDLEdBQUcsRUFBQyxPQUFPOzhCQUFDLFFBQU07Ozs7O3dCQUFROzhCQUNqQyw4REFBQ0MsT0FBSztvQkFBQ0MsSUFBSSxFQUFDLFFBQVE7b0JBQUNDLEVBQUUsRUFBQyxPQUFPO29CQUFDWCxJQUFJLEVBQUMsT0FBTzs7Ozs7d0JBQUc7OEJBRS9DLDhEQUFDWSxJQUFFOzs7O3dCQUFHOzhCQUNOLDhEQUFDTCxPQUFLO29CQUFDQyxHQUFHLEVBQUMsTUFBTTs4QkFBQyxPQUFLOzs7Ozt3QkFBUTs4QkFDL0IsOERBQUNDLE9BQUs7b0JBQUNDLElBQUksRUFBQyxNQUFNO29CQUFDQyxFQUFFLEVBQUMsTUFBTTtvQkFBQ1gsSUFBSSxFQUFDLE1BQU07Ozs7O3dCQUFHOzhCQUMzQyw4REFBQ2EsUUFBTTtvQkFBQ0gsSUFBSSxFQUFDLFFBQVE7OEJBQUMsUUFBTTs7Ozs7d0JBQVM7Ozs7OztnQkFDbEMsQ0FFVDtLQUNMO0NBSUo7QUFFRCxpRUFBZWpCLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2Zvcm0uanN4PzEwNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuY2xhc3MgQXBwcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG5cclxuXHJcbiAgICBzdWJtaXRDb250YWN0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBhbGVydChgU28geW91ciBuYW1lIGlzICR7ZXZlbnQudGFyZ2V0Lm5hbWUudmFsdWV9P2ApO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiIG9uU3VibWl0PVwie3N1Ym1pdENvbnRhY3R9XCIgbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5vbWVcIj5Ob21lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5vbWVcIiBuYW1lPVwibm9tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpZGFkZVwiPklkYWRlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwiaWRhZGVcIiBuYW1lPVwiaWRhZGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzZXhvXCI+U2V4bzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZXhvXCIgbmFtZT1cInNleG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwczsiXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBzIiwiQ29tcG9uZW50Iiwic3VibWl0Q29udGFjdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInJlbmRlciIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsIm1ldGhvZCIsImxhYmVsIiwiZm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJiciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/form.jsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/form.jsx"));
module.exports = __webpack_exports__;

})();