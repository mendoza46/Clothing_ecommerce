/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/speedometer";
exports.ids = ["vendor-chunks/speedometer"];
exports.modules = {

/***/ "(ssr)/./node_modules/speedometer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/speedometer/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("var tick = 1;\nvar maxTick = 65535;\nvar resolution = 4;\nvar inc = function() {\n    tick = tick + 1 & maxTick;\n};\nvar timer = setInterval(inc, 1000 / resolution | 0);\nif (timer.unref) timer.unref();\nmodule.exports = function(seconds) {\n    var size = resolution * (seconds || 5);\n    var buffer = [\n        0\n    ];\n    var pointer = 1;\n    var last = tick - 1 & maxTick;\n    return function(delta) {\n        var dist = tick - last & maxTick;\n        if (dist > size) dist = size;\n        last = tick;\n        while(dist--){\n            if (pointer === size) pointer = 0;\n            buffer[pointer] = buffer[pointer === 0 ? size - 1 : pointer - 1];\n            pointer++;\n        }\n        if (delta) buffer[pointer - 1] += delta;\n        var top = buffer[pointer - 1];\n        var btm = buffer.length < size ? 0 : buffer[pointer === size ? 0 : pointer];\n        return buffer.length < resolution ? top : (top - btm) * resolution / buffer.length;\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY29tbWVyY2UteXQtYnktbWlrZS8uL25vZGVfbW9kdWxlcy9zcGVlZG9tZXRlci9pbmRleC5qcz8yMzM5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciB0aWNrID0gMVxudmFyIG1heFRpY2sgPSA2NTUzNVxudmFyIHJlc29sdXRpb24gPSA0XG52YXIgaW5jID0gZnVuY3Rpb24gKCkge1xuICB0aWNrID0gKHRpY2sgKyAxKSAmIG1heFRpY2tcbn1cblxudmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoaW5jLCAoMTAwMCAvIHJlc29sdXRpb24pIHwgMClcbmlmICh0aW1lci51bnJlZikgdGltZXIudW5yZWYoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZWNvbmRzKSB7XG4gIHZhciBzaXplID0gcmVzb2x1dGlvbiAqIChzZWNvbmRzIHx8IDUpXG4gIHZhciBidWZmZXIgPSBbMF1cbiAgdmFyIHBvaW50ZXIgPSAxXG4gIHZhciBsYXN0ID0gKHRpY2sgLSAxKSAmIG1heFRpY2tcblxuICByZXR1cm4gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgdmFyIGRpc3QgPSAodGljayAtIGxhc3QpICYgbWF4VGlja1xuICAgIGlmIChkaXN0ID4gc2l6ZSkgZGlzdCA9IHNpemVcbiAgICBsYXN0ID0gdGlja1xuXG4gICAgd2hpbGUgKGRpc3QtLSkge1xuICAgICAgaWYgKHBvaW50ZXIgPT09IHNpemUpIHBvaW50ZXIgPSAwXG4gICAgICBidWZmZXJbcG9pbnRlcl0gPSBidWZmZXJbcG9pbnRlciA9PT0gMCA/IHNpemUgLSAxIDogcG9pbnRlciAtIDFdXG4gICAgICBwb2ludGVyKytcbiAgICB9XG5cbiAgICBpZiAoZGVsdGEpIGJ1ZmZlcltwb2ludGVyIC0gMV0gKz0gZGVsdGFcblxuICAgIHZhciB0b3AgPSBidWZmZXJbcG9pbnRlciAtIDFdXG4gICAgdmFyIGJ0bSA9IGJ1ZmZlci5sZW5ndGggPCBzaXplID8gMCA6IGJ1ZmZlcltwb2ludGVyID09PSBzaXplID8gMCA6IHBvaW50ZXJdXG5cbiAgICByZXR1cm4gYnVmZmVyLmxlbmd0aCA8IHJlc29sdXRpb24gPyB0b3AgOiAodG9wIC0gYnRtKSAqIHJlc29sdXRpb24gLyBidWZmZXIubGVuZ3RoXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0aWNrIiwibWF4VGljayIsInJlc29sdXRpb24iLCJpbmMiLCJ0aW1lciIsInNldEludGVydmFsIiwidW5yZWYiLCJtb2R1bGUiLCJleHBvcnRzIiwic2Vjb25kcyIsInNpemUiLCJidWZmZXIiLCJwb2ludGVyIiwibGFzdCIsImRlbHRhIiwiZGlzdCIsInRvcCIsImJ0bSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsT0FBTztBQUNYLElBQUlDLFVBQVU7QUFDZCxJQUFJQyxhQUFhO0FBQ2pCLElBQUlDLE1BQU07SUFDUkgsT0FBTyxBQUFDQSxPQUFPLElBQUtDO0FBQ3RCO0FBRUEsSUFBSUcsUUFBUUMsWUFBWUYsS0FBSyxBQUFDLE9BQU9ELGFBQWM7QUFDbkQsSUFBSUUsTUFBTUUsS0FBSyxFQUFFRixNQUFNRSxLQUFLO0FBRTVCQyxPQUFPQyxPQUFPLEdBQUcsU0FBVUMsT0FBTztJQUNoQyxJQUFJQyxPQUFPUixhQUFjTyxDQUFBQSxXQUFXLENBQUE7SUFDcEMsSUFBSUUsU0FBUztRQUFDO0tBQUU7SUFDaEIsSUFBSUMsVUFBVTtJQUNkLElBQUlDLE9BQU8sQUFBQ2IsT0FBTyxJQUFLQztJQUV4QixPQUFPLFNBQVVhLEtBQUs7UUFDcEIsSUFBSUMsT0FBTyxBQUFDZixPQUFPYSxPQUFRWjtRQUMzQixJQUFJYyxPQUFPTCxNQUFNSyxPQUFPTDtRQUN4QkcsT0FBT2I7UUFFUCxNQUFPZSxPQUFRO1lBQ2IsSUFBSUgsWUFBWUYsTUFBTUUsVUFBVTtZQUNoQ0QsTUFBTSxDQUFDQyxRQUFRLEdBQUdELE1BQU0sQ0FBQ0MsWUFBWSxJQUFJRixPQUFPLElBQUlFLFVBQVUsRUFBRTtZQUNoRUE7UUFDRjtRQUVBLElBQUlFLE9BQU9ILE1BQU0sQ0FBQ0MsVUFBVSxFQUFFLElBQUlFO1FBRWxDLElBQUlFLE1BQU1MLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFO1FBQzdCLElBQUlLLE1BQU1OLE9BQU9PLE1BQU0sR0FBR1IsT0FBTyxJQUFJQyxNQUFNLENBQUNDLFlBQVlGLE9BQU8sSUFBSUUsUUFBUTtRQUUzRSxPQUFPRCxPQUFPTyxNQUFNLEdBQUdoQixhQUFhYyxNQUFNLEFBQUNBLENBQUFBLE1BQU1DLEdBQUUsSUFBS2YsYUFBYVMsT0FBT08sTUFBTTtJQUNwRjtBQUNGIiwiZmlsZSI6Iihzc3IpLy4vbm9kZV9tb2R1bGVzL3NwZWVkb21ldGVyL2luZGV4LmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/speedometer/index.js\n");

/***/ })

};
;