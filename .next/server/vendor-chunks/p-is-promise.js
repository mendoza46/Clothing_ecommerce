"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-is-promise";
exports.ids = ["vendor-chunks/p-is-promise"];
exports.modules = {

/***/ "(ssr)/./node_modules/p-is-promise/index.js":
/*!********************************************!*\
  !*** ./node_modules/p-is-promise/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\nconst isObject = (value)=>value !== null && (typeof value === \"object\" || typeof value === \"function\");\nmodule.exports = (value)=>value instanceof Promise || isObject(value) && typeof value.then === \"function\" && typeof value.catch === \"function\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1pcy1wcm9taXNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsV0FBV0MsQ0FBQUEsUUFBU0EsVUFBVSxRQUNsQyxRQUFPQSxVQUFVLFlBQVksT0FBT0EsVUFBVSxVQUFTO0FBRXpEQyxPQUFPQyxPQUFPLEdBQUdGLENBQUFBLFFBQ2hCQSxpQkFBaUJHLFdBRWhCSixTQUFTQyxVQUNULE9BQU9BLE1BQU1JLElBQUksS0FBSyxjQUN0QixPQUFPSixNQUFNSyxLQUFLLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY29tbWVyY2UteXQtYnktbWlrZS8uL25vZGVfbW9kdWxlcy9wLWlzLXByb21pc2UvaW5kZXguanM/OGMxZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzT2JqZWN0ID0gdmFsdWUgPT4gdmFsdWUgIT09IG51bGwgJiZcblx0KHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSB2YWx1ZSA9PiAoXG5cdHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSB8fFxuXHQoXG5cdFx0aXNPYmplY3QodmFsdWUpICYmXG5cdFx0dHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2YgdmFsdWUuY2F0Y2ggPT09ICdmdW5jdGlvbidcblx0KVxuKTtcbiJdLCJuYW1lcyI6WyJpc09iamVjdCIsInZhbHVlIiwibW9kdWxlIiwiZXhwb3J0cyIsIlByb21pc2UiLCJ0aGVuIiwiY2F0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-is-promise/index.js\n");

/***/ })

};
;