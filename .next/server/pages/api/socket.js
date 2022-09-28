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
exports.id = "pages/api/socket";
exports.ids = ["pages/api/socket"];
exports.modules = {

/***/ "Socket.IO":
/*!****************************!*\
  !*** external "Socket.IO" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("Socket.IO");;

/***/ }),

/***/ "(api)/./pages/api/socket.js":
/*!*****************************!*\
  !*** ./pages/api/socket.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var Socket_IO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Socket.IO */ \"Socket.IO\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([Socket_IO__WEBPACK_IMPORTED_MODULE_0__]);\nSocket_IO__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst SocketHandler = (req, res)=>{\n    if (res.socket.server.io) console.log(\"Socket is already running\");\n    else {\n        console.log(\"Socket is initializing\");\n        const io = new Socket_IO__WEBPACK_IMPORTED_MODULE_0__.Server(res.socket.server);\n        res.socket.server.io = io;\n        io.on(\"connection\", (socket)=>{\n            socket.on(\"input-change\", (msg, id)=>{\n                console.log(\"id to server\", id);\n                socket.broadcast.to(id).emit(\"update-input\", msg);\n            });\n            socket.on(\"join-room\", (id)=>{\n                socket.join(id);\n            });\n        });\n    }\n    res.end();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketHandler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc29ja2V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1DO0FBRW5DLE1BQU1DLGFBQWEsR0FBRyxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsR0FBSztJQUMvQixJQUFJQSxHQUFHLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxFQUFFLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO1NBQzdEO1FBQ0RELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdCQUF3QixDQUFDO1FBQ3JDLE1BQU1GLEVBQUUsR0FBRyxJQUFJTiw2Q0FBTSxDQUFDRyxHQUFHLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDO1FBQ3hDRixHQUFHLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxFQUFFLEdBQUdBLEVBQUU7UUFFekJBLEVBQUUsQ0FBQ0csRUFBRSxDQUFDLFlBQVksRUFBRUwsQ0FBQUEsTUFBTSxHQUFJO1lBQzFCQSxNQUFNLENBQUNLLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQ0MsR0FBRyxFQUFFQyxFQUFFLEdBQUs7Z0JBQ25DSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLEVBQUVHLEVBQUUsQ0FBQztnQkFDL0JQLE1BQU0sQ0FBQ1EsU0FBUyxDQUFDQyxFQUFFLENBQUNGLEVBQUUsQ0FBQyxDQUFDRyxJQUFJLENBQUMsY0FBYyxFQUFFSixHQUFHLENBQUM7WUFDckQsQ0FBQyxDQUFDO1lBQ0ZOLE1BQU0sQ0FBQ0ssRUFBRSxDQUFDLFdBQVcsRUFBRUUsQ0FBQUEsRUFBRSxHQUFJO2dCQUN6QlAsTUFBTSxDQUFDVyxJQUFJLENBQUNKLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0RSLEdBQUcsQ0FBQ2EsR0FBRyxFQUFFO0FBQ2IsQ0FBQztBQUVELGlFQUFlZixhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pc3Npb25zLWh1Yi8uL3BhZ2VzL2FwaS9zb2NrZXQuanM/OTM1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICdTb2NrZXQuSU8nO1xyXG5cclxuY29uc3QgU29ja2V0SGFuZGxlciA9IChyZXEscmVzKSA9PiB7XHJcbiAgICBpZiAocmVzLnNvY2tldC5zZXJ2ZXIuaW8pIGNvbnNvbGUubG9nKCdTb2NrZXQgaXMgYWxyZWFkeSBydW5uaW5nJylcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTb2NrZXQgaXMgaW5pdGlhbGl6aW5nJylcclxuICAgICAgICBjb25zdCBpbyA9IG5ldyBTZXJ2ZXIocmVzLnNvY2tldC5zZXJ2ZXIpXHJcbiAgICAgICAgcmVzLnNvY2tldC5zZXJ2ZXIuaW8gPSBpb1xyXG5cclxuICAgICAgICBpby5vbignY29ubmVjdGlvbicsIHNvY2tldCA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vbignaW5wdXQtY2hhbmdlJywgKG1zZywgaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpZCB0byBzZXJ2ZXInLCBpZClcclxuICAgICAgICAgICAgICAgIHNvY2tldC5icm9hZGNhc3QudG8oaWQpLmVtaXQoJ3VwZGF0ZS1pbnB1dCcsIG1zZylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc29ja2V0Lm9uKCdqb2luLXJvb20nLCBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuam9pbihpZClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVzLmVuZCgpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvY2tldEhhbmRsZXI7Il0sIm5hbWVzIjpbIlNlcnZlciIsIlNvY2tldEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzb2NrZXQiLCJzZXJ2ZXIiLCJpbyIsImNvbnNvbGUiLCJsb2ciLCJvbiIsIm1zZyIsImlkIiwiYnJvYWRjYXN0IiwidG8iLCJlbWl0Iiwiam9pbiIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/socket.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/socket.js"));
module.exports = __webpack_exports__;

})();