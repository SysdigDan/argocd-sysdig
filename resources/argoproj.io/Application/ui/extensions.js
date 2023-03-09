window["extensions"] = window["extensions"] || {}; window["extensions"]["resources"] = window["extensions"]["resources"] || {}; window["extensions"]["resources"]["argoproj.io/Application"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack://extensions.resources.argoproj.io/Application/./node_modules/process/browser.js?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: Extension, component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Extension\", function() { return Extension; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"component\", function() { return component; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n// import Moment from \"react-moment\";\nvar MAP_VULN = {\n    Critical: {\n        name: \"fa-shield\",\n        spin: false,\n        color: \"#AE44C5\",\n    },\n    High: {\n        name: \"fa-shield\",\n        spin: false,\n        color: \"#EE635E\",\n    },\n    Medium: {\n        name: \"fa-shield\",\n        spin: false,\n        color: \"#FA8C16\",\n    },\n    Low: {\n        name: \"fa-shield\",\n        spin: false,\n        color: \"#F6CA09\"\n    },\n    Negligible: {\n        name: \"fa-shield\",\n        spin: false,\n        color: \"#91A7B3\",\n    },\n};\nvar baseURL = 'https://app.au1.sysdig.com/api/scanning/runtime/v2/workflows/results?filter=kubernetes.namespace.name=\"sock-shop\"';\nvar sysdigAuthToken = process.env.SYSDIG_AUTH_TOKEN;\nconsole.log(\"DEBUG 1:\", sysdigAuthToken);\nvar Extension = function (props) {\n    console.log(\"DEBUG 2:\", props);\n    var makeAPICall = function () { return __awaiter(void 0, void 0, void 0, function () {\n        var response, data_1, e_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 3, , 4]);\n                    return [4 /*yield*/, fetch(baseURL, {\n                            headers: {\n                                'Authorization': 'Bearer ' + sysdigAuthToken\n                            },\n                        })];\n                case 1:\n                    response = _a.sent();\n                    return [4 /*yield*/, response.json()];\n                case 2:\n                    data_1 = _a.sent();\n                    console.log(\"DEBUG 3:\", { data: data_1 });\n                    return [3 /*break*/, 4];\n                case 3:\n                    e_1 = _a.sent();\n                    console.log(e_1);\n                    return [3 /*break*/, 4];\n                case 4: return [2 /*return*/];\n            }\n        });\n    }); };\n    react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"](function () {\n        makeAPICall();\n    }, []);\n    var r = __webpack_require__(/*! ./test_data.json */ \"./src/test_data.json\");\n    var data = r.data;\n    console.log(\"DEBUG 4:\", data);\n    var images = [];\n    for (var i = 0; i < data.length; i++)\n        images.push(data[i].recordDetails.mainAssetName);\n    console.log(\"DEBUG 5:\", images);\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: {\n                fontSize: \"20px\",\n                fontWeight: \"bold\",\n                textTransform: \"uppercase\",\n                textAlign: \"center\",\n                marginTop: \"10px\",\n                marginBottom: \"10px\",\n            } },\n            \"Sysdig Vulnerability Report - Application \",\n            props.resource.metadata.name),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: {\n                background: \"#fff\",\n                width: \"100%\",\n                boxShadow: \"1px 1px 1px #ccd6dd\",\n                borderRadius: \"4px\",\n                border: \"1px solid transparent\",\n                marginTop: \"10px\",\n                marginBottom: \"10px\",\n            } },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: {\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    justifyContent: \"space-evenly\",\n                } }, Object.keys(MAP_VULN).map(function (key) { return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: {\n                    margin: \"1rem\",\n                    textAlign: \"center\",\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                } },\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"i\", { \"qe-id\": \"utils-health-status-title\", title: key, className: \"fa fa-xl \" + MAP_VULN[key].name, style: {\n                        color: MAP_VULN[key].color,\n                        marginBottom: \"1rem\",\n                        marginTop: \"1rem\",\n                    } }),\n                key,\n                \":\")); }))),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: { display: \"flex\", flexDirection: \"column\" } }, data.map(function (val, key) { return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { \n            // title={`Workload: ${val.recordDetails.labels.kubernetes.workload.name}`}\n            title: \"Workload: \" + val.recordDetails.labels[\"kubernetes.workload.name\"], style: {\n                marginTop: \"2rem\",\n                padding: \"0.2rem\",\n                boxShadow: \"1px 1px 1px #ccd6dd\",\n                borderRadius: \"4px\",\n                border: \"1px solid transparent\",\n                backgroundColor: \"#fff\",\n                color: \"#363c4a\",\n                display: \"flex\",\n            } },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: {\n                    width: \"60px\",\n                    flexGrow: 1,\n                    color: \"#495763\",\n                    textAlign: \"center\",\n                } },\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"i\", { title: \"Workload\", className: \"icon argo-icon-application\" }),\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: { fontSize: \".7em\", color: \"#6d7f8b\" } }, \"workload\")),\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: {\n                    flexGrow: 100,\n                    padding: \"10px 20px 10px 10px\",\n                    lineHeight: \".95\",\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                } },\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: {\n                        fontSize: \"1em\",\n                        fontWeight: \"bold\",\n                        paddingBottom: \"5px\",\n                        overflow: \"hidden\",\n                        textOverflow: \"ellipsis\",\n                        textAlign: \"left\",\n                    } },\n                    \"Workload Name: \",\n                    val.recordDetails.labels[\"kubernetes.workload.name\"],\n                    \"Image Name: \",\n                    val.recordDetails.mainAssetName),\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: {\n                        fontSize: \".8em\",\n                        paddingBottom: \"5px\",\n                        overflow: \"hidden\",\n                        textOverflow: \"ellipsis\",\n                        textAlign: \"left\",\n                    } },\n                    \"Image Name: \",\n                    val.recordDetails.mainAssetName)))); })),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: {\n                background: \"#fff\",\n                width: \"100%\",\n                boxShadow: \"1px 1px 1px #ccd6dd\",\n                borderRadius: \"4px\",\n                border: \"1px solid transparent\",\n                marginTop: \"10px\",\n                marginBottom: \"10px\",\n            } },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"table\", { style: {\n                    width: \"inherit\",\n                } },\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", { style: {\n                        height: \"35px\",\n                    } },\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"Name\"),\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { style: { textAlign: \"center\" } }, \"Criical\"),\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { style: { textAlign: \"center\" } }, \"High\"),\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { style: { textAlign: \"center\" } }, \"Medium\"),\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { style: { textAlign: \"center\" } }, \"Low\"),\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { style: { textAlign: \"center\" } }, \"Negligible\"),\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { style: { textAlign: \"center\" } }, \"Exploits\"),\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", { style: { textAlign: \"center\" } }, \"Status\")),\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, data.map(function (val, key) {\n                    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", { key: key },\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, val.recordDetails.mainAssetName),\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, val.runningVulnsBySev[0] + val.runningVulnsBySev[1] + val.runningVulnsBySev[2]),\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, val.runningVulnsBySev[3]),\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, val.runningVulnsBySev[4] + val.runningVulnsBySev[5]),\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, val.runningVulnsBySev[6]),\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, val.runningVulnsBySev[7]),\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, val.exploitCount),\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, val.policyEvaluationsResult)));\n                }))))));\n};\nvar component = Extension;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack://extensions.resources.argoproj.io/Application/./src/index.tsx?");

/***/ }),

/***/ "./src/test_data.json":
/*!****************************!*\
  !*** ./src/test_data.json ***!
  \****************************/
/*! exports provided: page, data, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"page\\\":{\\\"returned\\\":15,\\\"matched\\\":15,\\\"next\\\":null},\\\"data\\\":[{\\\"hashId\\\":\\\"a81382e1ec5bd5e5d4b644ca602b245c\\\",\\\"resultId\\\":\\\"174a60b887480f90a9536c2e6ee90192\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"weaveworksdemos/queue-master:0.3.1\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"queue-master\\\",\\\"kubernetes.workload.name\\\":\\\"queue-master\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,34,29,0,15,1,0],\\\"vulnsBySev\\\":[0,0,36,40,0,38,1,0],\\\"exploitCount\\\":6,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"failed\\\",\\\"hasAcceptedRisk\\\":false},{\\\"hashId\\\":\\\"e5ca46b8381dc5e809cf866a4a5f6043\\\",\\\"resultId\\\":\\\"174a60a26022a508c39b42070690e522\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"weaveworksdemos/shipping:0.4.8\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"shipping\\\",\\\"kubernetes.workload.name\\\":\\\"shipping\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,34,27,0,13,0,0],\\\"vulnsBySev\\\":[0,0,36,38,0,36,0,0],\\\"exploitCount\\\":6,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"failed\\\",\\\"hasAcceptedRisk\\\":false},{\\\"hashId\\\":\\\"68d5e65102e4c9aa361c2f7ac05d7175\\\",\\\"resultId\\\":\\\"174a60b54e8e8262b312bc8b80720862\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"weaveworksdemos/carts:0.4.8\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"carts\\\",\\\"kubernetes.workload.name\\\":\\\"carts\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,33,24,0,13,0,0],\\\"vulnsBySev\\\":[0,0,35,35,0,36,0,0],\\\"exploitCount\\\":6,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"failed\\\",\\\"hasAcceptedRisk\\\":false},{\\\"hashId\\\":\\\"32ec92e1e8f32c1b4b8b3cedc8597ae2\\\",\\\"resultId\\\":\\\"174a60a26022a508318e04a2059870a2\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"weaveworksdemos/orders:0.4.7\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"orders\\\",\\\"kubernetes.workload.name\\\":\\\"orders\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,33,24,0,13,0,0],\\\"vulnsBySev\\\":[0,0,35,35,0,36,0,0],\\\"exploitCount\\\":6,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"failed\\\",\\\"hasAcceptedRisk\\\":false},{\\\"hashId\\\":\\\"686c68577320a192487dcba1f19eded5\\\",\\\"resultId\\\":\\\"174a853e2ad0c3d17fd9a3f979a3f452\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"weaveworksdemos/front-end:0.3.12\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"front-end\\\",\\\"kubernetes.workload.name\\\":\\\"front-end\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,4,7,0,2,1,0],\\\"vulnsBySev\\\":[0,0,19,34,0,32,1,0],\\\"exploitCount\\\":0,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"passed\\\",\\\"hasAcceptedRisk\\\":false},{\\\"hashId\\\":\\\"efcff5d88b229d893941d11f9b9f2055\\\",\\\"resultId\\\":\\\"174a60b887480f900a62d81d4f1ad462\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"weaveworksdemos/catalogue:0.3.5\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"catalogue\\\",\\\"kubernetes.workload.name\\\":\\\"catalogue\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,0,0,0,0,0,0],\\\"vulnsBySev\\\":[0,0,2,6,0,18,0,0],\\\"exploitCount\\\":0,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"passed\\\",\\\"hasAcceptedRisk\\\":false},{\\\"hashId\\\":\\\"1e8812cc8c2097c471befd748782ab07\\\",\\\"resultId\\\":\\\"174a60b54e8e8262311ae716429e11c2\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"weaveworksdemos/payment:0.4.3\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"payment\\\",\\\"kubernetes.workload.name\\\":\\\"payment\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,0,0,0,0,0,0],\\\"vulnsBySev\\\":[0,0,2,6,0,18,0,0],\\\"exploitCount\\\":0,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"passed\\\",\\\"hasAcceptedRisk\\\":false},{\\\"hashId\\\":\\\"636a5157fcf6cf6b1977f50f79a2f088\\\",\\\"resultId\\\":\\\"174a60b54e8e8262ec31c53b86bcb6a2\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"mongo\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"carts-db\\\",\\\"kubernetes.workload.name\\\":\\\"carts-db\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,0,0,0,0,1,2],\\\"vulnsBySev\\\":[0,0,0,9,0,0,5,7],\\\"exploitCount\\\":0,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"passed\\\",\\\"hasAcceptedRisk\\\":false},{\\\"hashId\\\":\\\"bfa1f6b9afbc2d5e94800447dafdbf82\\\",\\\"resultId\\\":\\\"174a60b54e8e82629c50b4347bb1eb02\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"mongo\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"orders-db\\\",\\\"kubernetes.workload.name\\\":\\\"orders-db\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,0,0,0,0,1,2],\\\"vulnsBySev\\\":[0,0,0,9,0,0,5,7],\\\"exploitCount\\\":0,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"passed\\\",\\\"hasAcceptedRisk\\\":false},{\\\"hashId\\\":\\\"ea45d4e0ea7819be9dd4dd0d5bc7c6f3\\\",\\\"resultId\\\":\\\"174a60b887480f903c30f3643dbd7b02\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"weaveworksdemos/user:0.4.7\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"user\\\",\\\"kubernetes.workload.name\\\":\\\"user\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,0,0,0,0,0,0],\\\"vulnsBySev\\\":[0,0,0,2,0,10,0,0],\\\"exploitCount\\\":0,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"passed\\\",\\\"hasAcceptedRisk\\\":false},{\\\"hashId\\\":\\\"7454f0872d284fbc46234ec779b23638\\\",\\\"resultId\\\":\\\"174a60b54e8e82625b237ac2d1ba9b32\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"rabbitmq:3.6.8-management\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"rabbitmq\\\",\\\"kubernetes.workload.name\\\":\\\"rabbitmq\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,0,0,0,0,0,0],\\\"vulnsBySev\\\":[0,0,0,0,0,0,0,0],\\\"exploitCount\\\":0,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"passed\\\",\\\"hasAcceptedRisk\\\":false},{\\\"hashId\\\":\\\"1948b5b6298fb3ac382acc5cb8d93934\\\",\\\"resultId\\\":\\\"174a8522751cb0954e062f93418af682\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"redis:alpine\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"session-db\\\",\\\"kubernetes.workload.name\\\":\\\"session-db\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,0,0,0,0,0,0],\\\"vulnsBySev\\\":[0,0,0,0,0,0,0,0],\\\"exploitCount\\\":0,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"passed\\\",\\\"hasAcceptedRisk\\\":false},{\\\"hashId\\\":\\\"273f335da457b752cfa2314e52a6d424\\\",\\\"resultId\\\":\\\"174a60b54e8e8262b102b6ba07207bd2\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"kbudde/rabbitmq-exporter\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"rabbitmq-exporter\\\",\\\"kubernetes.workload.name\\\":\\\"rabbitmq\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,0,0,0,0,0,0],\\\"vulnsBySev\\\":[0,0,0,0,0,0,0,0],\\\"exploitCount\\\":0,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"passed\\\",\\\"hasAcceptedRisk\\\":false},{\\\"hashId\\\":\\\"88bd6bc00087a20f69bc5bff2df42e64\\\",\\\"resultId\\\":\\\"174a60b887480f90f6dfd7a9ba01dee2\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"weaveworksdemos/user-db:0.3.0\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"user-db\\\",\\\"kubernetes.workload.name\\\":\\\"user-db\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,0,0,0,0,0,0],\\\"vulnsBySev\\\":[0,0,0,0,0,0,0,0],\\\"exploitCount\\\":0,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"passed\\\",\\\"hasAcceptedRisk\\\":false},{\\\"hashId\\\":\\\"7da2c9a8e053e4a21f3c523f84425a40\\\",\\\"resultId\\\":\\\"174a60a26022a50861f74796b4c92ef2\\\",\\\"recordDetails\\\":{\\\"mainAssetName\\\":\\\"weaveworksdemos/catalogue-db:0.3.0\\\",\\\"labels\\\":{\\\"asset.type\\\":\\\"workload\\\",\\\"kubernetes.cluster.name\\\":\\\"crio-lab\\\",\\\"kubernetes.namespace.name\\\":\\\"sock-shop\\\",\\\"kubernetes.pod.container.name\\\":\\\"catalogue-db\\\",\\\"kubernetes.workload.name\\\":\\\"catalogue-db\\\",\\\"kubernetes.workload.type\\\":\\\"deployment\\\"}},\\\"runningVulnsBySev\\\":[0,0,0,0,0,0,0,0],\\\"vulnsBySev\\\":[0,0,0,0,0,0,0,0],\\\"exploitCount\\\":0,\\\"isEVEEnabled\\\":true,\\\"policyEvaluationsResult\\\":\\\"passed\\\",\\\"hasAcceptedRisk\\\":false}]}\");\n\n//# sourceURL=webpack://extensions.resources.argoproj.io/Application/./src/test_data.json?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"React\"]; }());\n\n//# sourceURL=webpack://extensions.resources.argoproj.io/Application/external_%22React%22?");

/***/ })

/******/ });