"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/card */ \"./src/components/card.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_lia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/lia */ \"./node_modules/react-icons/lia/index.esm.js\");\n\n\n\n\n\n\nconst Home = (param)=>{\n    let { user , contacts  } = param;\n    const logOutButton = react_icons_lia__WEBPACK_IMPORTED_MODULE_5__.LiaPowerOffSolid;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"body-main justify-between flex flex-col min-h-screen items-center py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"user-form-container p-0 min-h-[300px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_2__.UserCard, {\n                        user: user\n                    }, user.id, false, {\n                        fileName: \"/Users/Alves/Documents/Kenzie Academy/DesafioFullstackGit/front/front-desafio-fullstack/src/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"user-form-button w-auto m-0\",\n                                onClick: ()=>{\n                                    next_router__WEBPACK_IMPORTED_MODULE_3___default().push({\n                                        pathname: \"/contacts\",\n                                        query: {\n                                            context: \"add\"\n                                        }\n                                    });\n                                },\n                                children: \"Adicionar novo contato\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Alves/Documents/Kenzie Academy/DesafioFullstackGit/front/front-desafio-fullstack/src/pages/index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"user-form-button text-2xl w-auto mt-10 hover:text-red-600\",\n                                onClick: ()=>{\n                                    nookies__WEBPACK_IMPORTED_MODULE_4___default().destroy(null, \"fullstackProject.token\", {\n                                        path: \"/\"\n                                    });\n                                    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/login\");\n                                },\n                                children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(logOutButton)\n                            }, void 0, false, {\n                                fileName: \"/Users/Alves/Documents/Kenzie Academy/DesafioFullstackGit/front/front-desafio-fullstack/src/pages/index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Alves/Documents/Kenzie Academy/DesafioFullstackGit/front/front-desafio-fullstack/src/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Alves/Documents/Kenzie Academy/DesafioFullstackGit/front/front-desafio-fullstack/src/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"desktop:w-[80%] desktop:max-w-[976px] desktop:mx-auto desktop:my-0 desktop:flex desktop:flex-wrap desktop:flex-row desktop:items-start mt-16\",\n                children: contacts.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_2__.ContactCard, {\n                        contact: item\n                    }, item.id, false, {\n                        fileName: \"/Users/Alves/Documents/Kenzie Academy/DesafioFullstackGit/front/front-desafio-fullstack/src/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/Alves/Documents/Kenzie Academy/DesafioFullstackGit/front/front-desafio-fullstack/src/pages/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Alves/Documents/Kenzie Academy/DesafioFullstackGit/front/front-desafio-fullstack/src/pages/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUlnQztBQUVWO0FBRWxCO0FBR3FCO0FBUW5ELE1BQU1NLE9BQTRCO1FBQUMsRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUU7SUFDbkQsTUFBTUMsZUFBeUJKLDZEQUFnQkE7SUFDL0MscUJBQ0UsOERBQUNLO1FBQ0NDLFdBQVk7OzBCQUVaLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNWLHNEQUFRQTt3QkFBZU0sTUFBTUE7dUJBQWZBLEtBQUtNOzs7OztrQ0FDcEIsOERBQUNEO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQ0NILFdBQVU7Z0NBQ1ZJLFNBQVM7b0NBQ1BaLHVEQUFXYSxDQUFDO3dDQUNWQyxVQUFVO3dDQUNWQyxPQUFPOzRDQUNMQyxTQUFTO3dDQUNYO29DQUNGO2dDQUNGOzBDQUNEOzs7Ozs7MENBR0QsOERBQUNMO2dDQUNDSCxXQUFVO2dDQUNWSSxTQUFTO29DQUNQWCxzREFBZWdCLENBQUMsTUFBTSwwQkFBMEI7d0NBQUVDLE1BQU07b0NBQUk7b0NBQzVEbEIsdURBQVdhLENBQUM7Z0NBQ2Q7MENBRUNoQixjQUFBQSwwREFBbUJzQixDQUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkzQiw4REFBQ0c7Z0JBQ0NELFdBQVk7MEJBRVhILFNBQVNlLElBQUksQ0FBQ0MscUJBQ2IsOERBQUN0Qix5REFBV0E7d0JBQWV1QixTQUFTRDt1QkFBbEJBLEtBQUtYOzs7Ozs7Ozs7Ozs7Ozs7O0FBS2pDO0tBMUNNUDs7QUEwRU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSBcIkAvc2NoZW1hcy91c2VyLnNjaGVtYVwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcbmltcG9ydCB7IFVzZXJDYXJkLCBDb250YWN0Q2FyZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvY2FyZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgbm9va2llcyBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcbmltcG9ydCB7IENvbnRhY3REYXRhIH0gZnJvbSBcIkAvc2NoZW1hcy9jb250YWN0LnNjaGVtYVwiO1xuaW1wb3J0IHsgTGlhUG93ZXJPZmZTb2xpZCB9IGZyb20gXCJyZWFjdC1pY29ucy9saWFcIjtcbmltcG9ydCB7IEljb25UeXBlIH0gZnJvbSBcInJlYWN0LWljb25zXCI7XG5cbmludGVyZmFjZSBIb21lUHJvcHMge1xuICB1c2VyOiBVc2VyRGF0YTtcbiAgY29udGFjdHM6IENvbnRhY3REYXRhW107XG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlPEhvbWVQcm9wcz4gPSAoeyB1c2VyLCBjb250YWN0cyB9KSA9PiB7XG4gIGNvbnN0IGxvZ091dEJ1dHRvbjogSWNvblR5cGUgPSBMaWFQb3dlck9mZlNvbGlkO1xuICByZXR1cm4gKFxuICAgIDxtYWluXG4gICAgICBjbGFzc05hbWU9e2Bib2R5LW1haW4ganVzdGlmeS1iZXR3ZWVuIGZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIGl0ZW1zLWNlbnRlciBweS0xMGB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWZvcm0tY29udGFpbmVyIHAtMCBtaW4taC1bMzAwcHhdXCI+XG4gICAgICAgIDxVc2VyQ2FyZCBrZXk9e3VzZXIuaWR9IHVzZXI9e3VzZXJ9PjwvVXNlckNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlci1mb3JtLWJ1dHRvbiB3LWF1dG8gbS0wXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9jb250YWN0c1wiLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICBjb250ZXh0OiBcImFkZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGljaW9uYXIgbm92byBjb250YXRvXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlci1mb3JtLWJ1dHRvbiB0ZXh0LTJ4bCB3LWF1dG8gbXQtMTAgaG92ZXI6dGV4dC1yZWQtNjAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgbm9va2llcy5kZXN0cm95KG51bGwsIFwiZnVsbHN0YWNrUHJvamVjdC50b2tlblwiLCB7IHBhdGg6IFwiL1wiIH0pO1xuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQobG9nT3V0QnV0dG9uKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZGVza3RvcDp3LVs4MCVdIGRlc2t0b3A6bWF4LXctWzk3NnB4XSBkZXNrdG9wOm14LWF1dG8gZGVza3RvcDpteS0wIGRlc2t0b3A6ZmxleCBkZXNrdG9wOmZsZXgtd3JhcCBkZXNrdG9wOmZsZXgtcm93IGRlc2t0b3A6aXRlbXMtc3RhcnQgbXQtMTZgfVxuICAgICAgPlxuICAgICAgICB7Y29udGFjdHMubWFwKChpdGVtOiBDb250YWN0RGF0YSkgPT4gKFxuICAgICAgICAgIDxDb250YWN0Q2FyZCBrZXk9e2l0ZW0uaWR9IGNvbnRhY3Q9e2l0ZW19PjwvQ29udGFjdENhcmQ+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvb2NraWVzID0gbm9va2llcy5nZXQoY3R4KTtcbiAgICBjb25zdCB0b2tlbiA9IGNvb2NraWVzW1wiZnVsbHN0YWNrUHJvamVjdC50b2tlblwiXTtcbiAgICBjb25zdCB1c2VyRGF0YTogYW55ID0gand0X2RlY29kZShjb29ja2llc1tcImZ1bGxzdGFja1Byb2plY3QudG9rZW5cIl0pO1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhcGkuZ2V0KGAvdXNlcnMvJHt1c2VyRGF0YS5zdWJ9YCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgY29udGFjdHMgPSBhd2FpdCBhcGkuZ2V0KGAvY29udGFjdHMvYCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IHVzZXI6IHVzZXIuZGF0YSwgY29udGFjdHM6IGNvbnRhY3RzLmRhdGEgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHt9LFxuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgZGVzdGluYXRpb246IFwiL2xvZ2luXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJVc2VyQ2FyZCIsIkNvbnRhY3RDYXJkIiwicm91dGVyIiwibm9va2llcyIsIkxpYVBvd2VyT2ZmU29saWQiLCJIb21lIiwidXNlciIsImNvbnRhY3RzIiwibG9nT3V0QnV0dG9uIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImlkIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiY29udGV4dCIsImRlc3Ryb3kiLCJwYXRoIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsIml0ZW0iLCJjb250YWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});