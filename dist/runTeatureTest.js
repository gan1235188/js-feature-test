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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/runTeatureTest.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import * as validators from './featureTest/index'
var index_1 = __webpack_require__(/*! ./validators/index */ "./src/validators/index.ts");
var tools_1 = __webpack_require__(/*! ./tools */ "./src/tools.ts");
function featureTest(content, config, validators, cb) {
    tools_1.setConfig(config);
    validators = index_1.validators.concat(validators || []);
    validators = uniqueValidators(validators);
    runValidators(content, validators, function (result, isDone) {
        cb && cb(result, isDone);
    });
}
exports.featureTest = featureTest;
function runValidators(content, validators, cb) {
    var featureTestResult = {};
    var counter = 1;
    for (var i = 0; i < validators.length; i++) {
        validatorInvoke(validators[i], featureTestResult, done, content);
    }
    function done() {
        cb(featureTestResult, ++counter >= validators.length);
    }
}
function validatorInvoke(_a, featureTestResult, cb, content) {
    var name = _a.name, test = _a.test;
    test(content, done);
    function done(result) {
        featureTestResult[name] = result;
        cb(result);
    }
}
function uniqueValidators(validators) {
    var result = [];
    validators.map(function (validator) {
        if (!find(result, function (item) { return item.name === validator.name; })) {
            result.push(validator);
        }
    });
    return result;
}
function find(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return true;
        }
    }
    return false;
}


/***/ }),

/***/ "./src/runTeatureTest.ts":
/*!*******************************!*\
  !*** ./src/runTeatureTest.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ./index */ "./src/index.ts");
var tools_1 = __webpack_require__(/*! ./tools */ "./src/tools.ts");
var params = tools_1.getSearchParams();
index_1.featureTest({}, { isOutput: true }, null, function (testResult, isDone) {
    isDone && saveFeatureMapToService(testResult, function () {
        params.back && (location.href = params.back);
    });
});
function saveFeatureMapToService(testResult, cb) {
    tools_1.sendAjax('post', location.href, testResult, function (isSuccess, data) {
        cb();
    });
}
function saveFeatureMapToCookie(testResult) {
    var expires = getExpireTime();
    setCookie('jsFeatureTest', JSON.stringify(testResult), expires, '/');
}
function getExpireTime() {
    return new Date().getTime() + 1000 * 60 * 60 * 24 * 15;
}
function setCookie(name, value, expires, path) {
    document.cookie = name + "=" + value + ";expires=" + new Date(expires).getTime() + ";path=" + path;
}


/***/ }),

/***/ "./src/tools.ts":
/*!**********************!*\
  !*** ./src/tools.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ./validators/types */ "./src/validators/types.ts");
var projectConfig = {
    isOutput: false
};
var defaultTestOption = {
    done: function () { },
    name: '',
    expression: '',
    type: types_1.TestType.expectNoWrong,
    resultCheckFn: function (result, opt) {
        opt.done(result === opt.expectResult);
    }
};
function setConfig(config) {
    projectConfig = __assign(__assign({}, projectConfig), config);
}
exports.setConfig = setConfig;
function getConfig() {
    return projectConfig;
}
exports.getConfig = getConfig;
function runTest(testOpt) {
    if (testOpt === void 0) { testOpt = defaultTestOption; }
    var opt = getTestOpt(testOpt);
    if (getConfig().isOutput) {
        opt = outputHook(opt);
    }
    switch (opt.type) {
        case types_1.TestType.expectNoWrong:
            return expectNoWrong(opt);
        case types_1.TestType.checkResult:
            return checkResult(opt);
        case types_1.TestType.expectThrowError:
            return expectThrowError(opt);
        default:
            return expectNoWrong(opt);
    }
}
exports.runTest = runTest;
function output(str) {
    document.write("<p>" + str + "</p>");
}
exports.output = output;
/**
 *
 * @param iterator
 * @param done
 *
 * var i = 0;
 * runIterator(function(next) {
 *  setTimeout(function() {
 *    console.log(i++)
 *    next(i < 10)
 *  }, 100)
 * }, done)
 */
function runIterator(iterator, done) {
    iterator(next);
    function next() {
        runIterator(iterator, done);
    }
}
exports.runIterator = runIterator;
function isEqual(expect, result) {
    if (expect === result)
        return true;
    if (expect !== expect && result !== result)
        return true;
    if (Array.isArray(expect) && Array.isArray(result)) {
        return isEqualArray(expect, result);
    }
    if (typeof expect === 'object' && typeof result === 'object') {
        return isEqualObject(expect, result);
    }
    return false;
}
exports.isEqual = isEqual;
function isEqualArray(expect, result) {
    if (expect.length !== result.length)
        return false;
    return expect.every(function (item, index) { return isEqual(item, result[index]); }) &&
        result.every(function (item, index) { return isEqual(item, expect[index]); });
}
exports.isEqualArray = isEqualArray;
function isEqualObject(expect, result) {
    var expectKeys = Object.keys(expect);
    var resultKeys = Object.keys(result);
    if (expectKeys.length !== resultKeys.length)
        return false;
    return expectKeys.every(function (key) { return isEqual(expect[key], result[key]); }) &&
        resultKeys.every(function (key) { return isEqual(result[key], expect[key]); });
}
exports.isEqualObject = isEqualObject;
function outputHook(opt) {
    var _done = opt.done;
    opt.done = function (result) {
        showOutput(result);
        _done(result);
    };
    function showOutput(result) {
        output('=================================');
        output("feature name: " + opt.name);
        output("test result: " + result);
        output("<pre>expression: " + opt.expression + "</pre>");
        output("test type: " + opt.type);
        opt.description && output("description: " + opt.description);
        opt.resultCheckFn && output('result check fn: ');
        opt.resultCheckFn && output("<pre>" + opt.resultCheckFn + "</pre>");
        opt.expectResult && output("exprect result: " + JSON.stringify(opt.expectResult));
    }
    return opt;
}
function getTestOpt(opt) {
    return __assign(__assign({}, defaultTestOption), opt);
}
function expectThrowError(opt) {
    try {
        createFunction(opt.expression)();
        return opt.done(false);
    }
    catch (e) {
        return opt.done(true);
    }
}
function expectNoWrong(opt) {
    try {
        createFunction(opt.expression)();
        return opt.done(true);
    }
    catch (e) { }
    return opt.done(false);
}
function checkResult(opt) {
    try {
        var fn = createFunction(opt.expression);
        var result = fn();
        return opt.resultCheckFn(result, opt);
    }
    catch (e) { }
    return opt.done(false);
}
function createFunction(body) {
    return new Function(body);
}
function sendAjax(method, url, data, cb) {
    var ajax = new XMLHttpRequest;
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            cb(true, ajax.responseText);
        }
        else {
            cb(false);
        }
    };
    ajax.onerror = function (ev) {
        cb(false, ev);
    };
    ajax.open(method.toLocaleUpperCase(), url, true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send(JSON.stringify(data));
}
exports.sendAjax = sendAjax;
function getSearchParams() {
    var search = location.search.slice(1);
    var paramList = decodeURIComponent(search).split('&');
    var result = {};
    for (var i = paramList.length - 1; i >= 0; i--) {
        var param = paramList[i].split('=');
        result[param[0]] = param[1];
    }
    return result;
}
exports.getSearchParams = getSearchParams;


/***/ }),

/***/ "./src/validators/ObjectSuper.validator.ts":
/*!*************************************************!*\
  !*** ./src/validators/ObjectSuper.validator.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\nvar obj2 = {\n  say () {\n    return super.say() + \"World!\"\n  }\n}\n";
var name = 'ObjectSuper';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/arrowFunctions.validator.ts":
/*!****************************************************!*\
  !*** ./src/validators/arrowFunctions.validator.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = '()=>1';
var name = 'arrowFunctions';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/asyncGeneratorFunctions.validator.ts":
/*!*************************************************************!*\
  !*** ./src/validators/asyncGeneratorFunctions.validator.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  async function* a() {\n    await 1;\n    yield 2;\n  }\n\n  return a().next()\n";
var name = 'asyncGeneratorFunctions';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            resultCheckFn: function (resultPromise) {
                try {
                    resultPromise.then(function (result) {
                        done(result && result.value === 2);
                    });
                }
                catch (e) {
                    done(false);
                }
            }
        });
    }
};


/***/ }),

/***/ "./src/validators/asyncToGenerator.validator.ts":
/*!******************************************************!*\
  !*** ./src/validators/asyncToGenerator.validator.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  async function a(){ await 1 }\n";
var name = 'asyncToGenerator';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/blockScopedFunctions.validator.ts":
/*!**********************************************************!*\
  !*** ./src/validators/blockScopedFunctions.validator.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  if(1) {\n    function a(){ return 1; }\n  }\n  \n  a()\n";
var name = 'blockScopedFunctions';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectThrowError,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/blockScoping.validator.ts":
/*!**************************************************!*\
  !*** ./src/validators/blockScoping.validator.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  if(1) {\n    var a = 1\n  }\n\n  a\n";
var name = 'blockScoping';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectThrowError,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/classProperties.validator.ts":
/*!*****************************************************!*\
  !*** ./src/validators/classProperties.validator.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  class A {\n    a = 1\n  }\n";
var name = 'classProperties';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/classes.vallidator.ts":
/*!**********************************************!*\
  !*** ./src/validators/classes.vallidator.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  class A {\n    a() { return 1; }\n  }\n\n  class B extends A {\n    b() { return 2;}\n  }\n\n  var b = new B()\n  return b.b()\n";
var name = 'classes';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: 2
        });
    }
};


/***/ }),

/***/ "./src/validators/computedProperties.validator.ts":
/*!********************************************************!*\
  !*** ./src/validators/computedProperties.validator.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  var key = 'key';\n  var obj = {\n    [key + 1]: 1\n  }\n\n  return obj.key1\n";
var name = 'computedProperties';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: 1
        });
    }
};


/***/ }),

/***/ "./src/validators/decorators.validator.ts":
/*!************************************************!*\
  !*** ./src/validators/decorators.validator.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  @annotation\n  class MyClass { }\n\n  function annotation(target) {\n    target.annotated = true;\n  }\n";
var name = 'decorators';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/destructuring.validator.ts":
/*!***************************************************!*\
  !*** ./src/validators/destructuring.validator.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  var {x, y} = {x: 1, y:1};\n  var [a, b, ...rest] = [1,2,3,4,5];\n  return {x, y, a, b, rest}\n";
var name = 'destructuring';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: { x: 1, y: 1, a: 1, b: 2, rest: [3, 4, 5] }
        });
    }
};


/***/ }),

/***/ "./src/validators/doExpressions.validator.ts":
/*!***************************************************!*\
  !*** ./src/validators/doExpressions.validator.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  var a = do {\n    if(true) {\n      'big';\n    } else {\n      'small';\n    }\n  };\n";
var name = 'doExpressions';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: 'big'
        });
    }
};


/***/ }),

/***/ "./src/validators/dotallRegex.validator.ts":
/*!*************************************************!*\
  !*** ./src/validators/dotallRegex.validator.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  return /./s.test('\\n')\n";
var name = 'dotallRegex';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: true
        });
    }
};


/***/ }),

/***/ "./src/validators/exponentiationOperator.validator.ts":
/*!************************************************************!*\
  !*** ./src/validators/exponentiationOperator.validator.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  return 2 ** 2\n";
var name = 'exponentiationOperator';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: 4
        });
    }
};


/***/ }),

/***/ "./src/validators/forOf.validator.ts":
/*!*******************************************!*\
  !*** ./src/validators/forOf.validator.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  for(var i of []){}\n";
var name = 'forOf';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/functionBind.validator.ts":
/*!**************************************************!*\
  !*** ./src/validators/functionBind.validator.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "{}::()=>{}";
var name = 'functionBind';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/functionName.validator.ts":
/*!**************************************************!*\
  !*** ./src/validators/functionName.validator.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  var fn = function(){}\n  return fn.name\n";
var name = 'functionName';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: 'fn'
        });
    }
};


/***/ }),

/***/ "./src/validators/functionSent.validator.ts":
/*!**************************************************!*\
  !*** ./src/validators/functionSent.validator.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  function *a() {\n    return function.sent\n  }\n\n  return a().next(1)\n";
var name = 'functionSent';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: 1
        });
    }
};


/***/ }),

/***/ "./src/validators/index.ts":
/*!*********************************!*\
  !*** ./src/validators/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var memberExpressionLiterals_validator_1 = __webpack_require__(/*! ./memberExpressionLiterals.validator */ "./src/validators/memberExpressionLiterals.validator.ts");
var functionBind_validator_1 = __webpack_require__(/*! ./functionBind.validator */ "./src/validators/functionBind.validator.ts");
var regenerator_validator_1 = __webpack_require__(/*! ./regenerator.validator */ "./src/validators/regenerator.validator.ts");
var spread_validator_1 = __webpack_require__(/*! ./spread.validator */ "./src/validators/spread.validator.ts");
var destructuring_validator_1 = __webpack_require__(/*! ./destructuring.validator */ "./src/validators/destructuring.validator.ts");
var optionalCatchBinding_validator_1 = __webpack_require__(/*! ./optionalCatchBinding.validator */ "./src/validators/optionalCatchBinding.validator.ts");
var unicodePropertyRegex_validator_1 = __webpack_require__(/*! ./unicodePropertyRegex.validator */ "./src/validators/unicodePropertyRegex.validator.ts");
var asyncToGenerator_validator_1 = __webpack_require__(/*! ./asyncToGenerator.validator */ "./src/validators/asyncToGenerator.validator.ts");
var arrowFunctions_validator_1 = __webpack_require__(/*! ./arrowFunctions.validator */ "./src/validators/arrowFunctions.validator.ts");
var blockScopedFunctions_validator_1 = __webpack_require__(/*! ./blockScopedFunctions.validator */ "./src/validators/blockScopedFunctions.validator.ts");
var blockScoping_validator_1 = __webpack_require__(/*! ./blockScoping.validator */ "./src/validators/blockScoping.validator.ts");
var classProperties_validator_1 = __webpack_require__(/*! ./classProperties.validator */ "./src/validators/classProperties.validator.ts");
var classes_vallidator_1 = __webpack_require__(/*! ./classes.vallidator */ "./src/validators/classes.vallidator.ts");
var computedProperties_validator_1 = __webpack_require__(/*! ./computedProperties.validator */ "./src/validators/computedProperties.validator.ts");
var dotallRegex_validator_1 = __webpack_require__(/*! ./dotallRegex.validator */ "./src/validators/dotallRegex.validator.ts");
var exponentiationOperator_validator_1 = __webpack_require__(/*! ./exponentiationOperator.validator */ "./src/validators/exponentiationOperator.validator.ts");
var forOf_validator_1 = __webpack_require__(/*! ./forOf.validator */ "./src/validators/forOf.validator.ts");
var functionName_validator_1 = __webpack_require__(/*! ./functionName.validator */ "./src/validators/functionName.validator.ts");
var instanceof_validator_1 = __webpack_require__(/*! ./instanceof.validator */ "./src/validators/instanceof.validator.ts");
var literals_validator_1 = __webpack_require__(/*! ./literals.validator */ "./src/validators/literals.validator.ts");
var propertyLiterals_validator_1 = __webpack_require__(/*! ./propertyLiterals.validator */ "./src/validators/propertyLiterals.validator.ts");
var namedCapturingGroupsRegex_validator_1 = __webpack_require__(/*! ./namedCapturingGroupsRegex.validator */ "./src/validators/namedCapturingGroupsRegex.validator.ts");
var newTarget_validator_1 = __webpack_require__(/*! ./newTarget.validator */ "./src/validators/newTarget.validator.ts");
var ObjectSuper_validator_1 = __webpack_require__(/*! ./ObjectSuper.validator */ "./src/validators/ObjectSuper.validator.ts");
var parameters_validator_1 = __webpack_require__(/*! ./parameters.validator */ "./src/validators/parameters.validator.ts");
var reservedWord_validator_1 = __webpack_require__(/*! ./reservedWord.validator */ "./src/validators/reservedWord.validator.ts");
var stickyRegex_validator_1 = __webpack_require__(/*! ./stickyRegex.validator */ "./src/validators/stickyRegex.validator.ts");
var templateLiterals_validator_1 = __webpack_require__(/*! ./templateLiterals.validator */ "./src/validators/templateLiterals.validator.ts");
var typeofSymbol_validator_1 = __webpack_require__(/*! ./typeofSymbol.validator */ "./src/validators/typeofSymbol.validator.ts");
var unicodeRegex_validator_1 = __webpack_require__(/*! ./unicodeRegex.validator */ "./src/validators/unicodeRegex.validator.ts");
var logicalAssignmentOperators_validator_1 = __webpack_require__(/*! ./logicalAssignmentOperators.validator */ "./src/validators/logicalAssignmentOperators.validator.ts");
var optionalChaining_validator_1 = __webpack_require__(/*! ./optionalChaining.validator */ "./src/validators/optionalChaining.validator.ts");
var pipelineOperator_validator_1 = __webpack_require__(/*! ./pipelineOperator.validator */ "./src/validators/pipelineOperator.validator.ts");
var nullishCoalescingOperator_validator_1 = __webpack_require__(/*! ./nullishCoalescingOperator.validator */ "./src/validators/nullishCoalescingOperator.validator.ts");
var doExpressions_validator_1 = __webpack_require__(/*! ./doExpressions.validator */ "./src/validators/doExpressions.validator.ts");
var functionSent_validator_1 = __webpack_require__(/*! ./functionSent.validator */ "./src/validators/functionSent.validator.ts");
var numericSeparator_validator_1 = __webpack_require__(/*! ./numericSeparator.validator */ "./src/validators/numericSeparator.validator.ts");
var throwExpressions_validator_1 = __webpack_require__(/*! ./throwExpressions.validator */ "./src/validators/throwExpressions.validator.ts");
var propertyMutators_validator_1 = __webpack_require__(/*! ./propertyMutators.validator */ "./src/validators/propertyMutators.validator.ts");
var asyncGeneratorFunctions_validator_1 = __webpack_require__(/*! ./asyncGeneratorFunctions.validator */ "./src/validators/asyncGeneratorFunctions.validator.ts");
var partialApplication_validator_1 = __webpack_require__(/*! ./partialApplication.validator */ "./src/validators/partialApplication.validator.ts");
var privateMethods_validator_1 = __webpack_require__(/*! ./privateMethods.validator */ "./src/validators/privateMethods.validator.ts");
var decorators_validator_1 = __webpack_require__(/*! ./decorators.validator */ "./src/validators/decorators.validator.ts");
exports.validators = [
    memberExpressionLiterals_validator_1.validator,
    functionBind_validator_1.validator,
    regenerator_validator_1.validator,
    spread_validator_1.validator,
    destructuring_validator_1.validator,
    optionalCatchBinding_validator_1.validator,
    unicodePropertyRegex_validator_1.validator,
    asyncToGenerator_validator_1.validator,
    arrowFunctions_validator_1.validator,
    blockScopedFunctions_validator_1.validator,
    blockScoping_validator_1.validator,
    classProperties_validator_1.validator,
    classes_vallidator_1.validator,
    computedProperties_validator_1.validator,
    dotallRegex_validator_1.validator,
    exponentiationOperator_validator_1.validator,
    forOf_validator_1.validator,
    functionName_validator_1.validator,
    instanceof_validator_1.validator,
    literals_validator_1.validator,
    propertyLiterals_validator_1.validator,
    namedCapturingGroupsRegex_validator_1.validator,
    newTarget_validator_1.validator,
    ObjectSuper_validator_1.validator,
    parameters_validator_1.validator,
    reservedWord_validator_1.validator,
    stickyRegex_validator_1.validator,
    templateLiterals_validator_1.validator,
    typeofSymbol_validator_1.validator,
    unicodeRegex_validator_1.validator,
    logicalAssignmentOperators_validator_1.validator,
    optionalChaining_validator_1.validator,
    pipelineOperator_validator_1.validator,
    nullishCoalescingOperator_validator_1.validator,
    doExpressions_validator_1.validator,
    functionSent_validator_1.validator,
    numericSeparator_validator_1.validator,
    throwExpressions_validator_1.validator,
    propertyMutators_validator_1.validator,
    asyncGeneratorFunctions_validator_1.validator,
    partialApplication_validator_1.validator,
    privateMethods_validator_1.validator,
    decorators_validator_1.validator
];


/***/ }),

/***/ "./src/validators/instanceof.validator.ts":
/*!************************************************!*\
  !*** ./src/validators/instanceof.validator.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  Symbol.hasInstance\n";
var name = 'instanceof';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/literals.validator.ts":
/*!**********************************************!*\
  !*** ./src/validators/literals.validator.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  return [0b11, 0o7, 'Hello\\u{000A}\\u{0009}!']\n";
var name = 'literals';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: [3, 7, 'Hello\n\t!']
        });
    }
};


/***/ }),

/***/ "./src/validators/logicalAssignmentOperators.validator.ts":
/*!****************************************************************!*\
  !*** ./src/validators/logicalAssignmentOperators.validator.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  var a = 0 ||= 3;\n  var b = 1 &&= 4;\n  return [a, b]\n";
var name = 'logicalAssignmentOperators';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: [3, 4]
        });
    }
};


/***/ }),

/***/ "./src/validators/memberExpressionLiterals.validator.ts":
/*!**************************************************************!*\
  !*** ./src/validators/memberExpressionLiterals.validator.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n    var obj = {}\n    obj.default = 1\n    return obj\n";
var name = 'memberExpressionLiterals';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            expression: testExpression,
            type: types_1.TestType.checkResult,
            resultCheckFn: function (expect, _a) {
                var done = _a.done;
                return done(expect['default'] === 1);
            }
        });
    }
};


/***/ }),

/***/ "./src/validators/namedCapturingGroupsRegex.validator.ts":
/*!***************************************************************!*\
  !*** ./src/validators/namedCapturingGroupsRegex.validator.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  var re = /(?<year>d{4})-(?<month>d{2})-(?<day>d{2})/;\n  return re.exec(\"1999-02-29\").groups.year\n";
var name = 'namedCapturingGroupsRegex';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: '1999',
        });
    }
};


/***/ }),

/***/ "./src/validators/newTarget.validator.ts":
/*!***********************************************!*\
  !*** ./src/validators/newTarget.validator.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  function Foo() {\n    return new.target\n  }\n  return Foo() === undefined && new Foo() === Foo\n";
var name = 'newTarget';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: true
        });
    }
};


/***/ }),

/***/ "./src/validators/nullishCoalescingOperator.validator.ts":
/*!***************************************************************!*\
  !*** ./src/validators/nullishCoalescingOperator.validator.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  return a ?? 1\n";
var name = 'nullishCoalescingOperator';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: 1
        });
    }
};


/***/ }),

/***/ "./src/validators/numericSeparator.validator.ts":
/*!******************************************************!*\
  !*** ./src/validators/numericSeparator.validator.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  return 1_000\n";
var name = 'numericSeparator';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: 1000
        });
    }
};


/***/ }),

/***/ "./src/validators/optionalCatchBinding.validator.ts":
/*!**********************************************************!*\
  !*** ./src/validators/optionalCatchBinding.validator.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = 'try{1}catch{}';
var name = 'optionalCatchBinding';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/optionalChaining.validator.ts":
/*!******************************************************!*\
  !*** ./src/validators/optionalChaining.validator.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  obj?.test?.name\n";
var name = 'optionalChaining';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/parameters.validator.ts":
/*!************************************************!*\
  !*** ./src/validators/parameters.validator.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  function a(x = 1) {}\n  function b({x}){}\n  function c(...x){}\n";
var name = 'parameters';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/partialApplication.validator.ts":
/*!********************************************************!*\
  !*** ./src/validators/partialApplication.validator.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  function add(x, y){ return x + y }\n  var add1 = add(1, ?)\n  return add1(1)\n";
var name = 'partialApplication';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: 2
        });
    }
};


/***/ }),

/***/ "./src/validators/pipelineOperator.validator.ts":
/*!******************************************************!*\
  !*** ./src/validators/pipelineOperator.validator.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  function add(x){\n    return function(y){\n      return x + y\n    }\n  }\n\n  return 1 |> add(1)\n";
var name = 'pipelineOperator';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: 2
        });
    }
};


/***/ }),

/***/ "./src/validators/privateMethods.validator.ts":
/*!****************************************************!*\
  !*** ./src/validators/privateMethods.validator.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  class Counter {\n    #xValue = 0;\n\n    get #x() { return this.#xValue; }\n    set #x(value) {\n      this.#xValue = value;\n    }\n\n    #clicked() {\n      this.#x++;\n    }\n  }\n";
var name = 'privateMethods';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/propertyLiterals.validator.ts":
/*!******************************************************!*\
  !*** ./src/validators/propertyLiterals.validator.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  return {\n    default: 1\n  }\n";
var name = 'propertyLiterals';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            resultCheckFn: function (expect) {
                return expect['default'] === 1;
            }
        });
    }
};


/***/ }),

/***/ "./src/validators/propertyMutators.validator.ts":
/*!******************************************************!*\
  !*** ./src/validators/propertyMutators.validator.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  var isCallSet = false\n  var obj = {\n    _a: '',\n    set a(x) {\n      isCallSet = true\n      this._a = x\n    },\n\n    get a() {\n      return 1\n    }\n  }\n\n  obj.a = 2\n  return isCallSet && obj.a\n";
var name = 'propertyMutators';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: 1
        });
    }
};


/***/ }),

/***/ "./src/validators/regenerator.validator.ts":
/*!*************************************************!*\
  !*** ./src/validators/regenerator.validator.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  function* a() {\n    yield 1;\n  }\n  a();\n  async function b() {\n    await 10\n  }\n  b();\n";
var name = 'regenerator';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            expression: testExpression,
            type: types_1.TestType.expectNoWrong
        });
    }
};


/***/ }),

/***/ "./src/validators/reservedWord.validator.ts":
/*!**************************************************!*\
  !*** ./src/validators/reservedWord.validator.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  var abstract = 1;\n  return abstract;\n";
var name = 'reservedWord';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: 1
        });
    }
};


/***/ }),

/***/ "./src/validators/spread.validator.ts":
/*!********************************************!*\
  !*** ./src/validators/spread.validator.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  var a = ['a', 'b', 'c'];\n  var b = [...a, 'foo'];\n";
var name = 'spread';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/stickyRegex.validator.ts":
/*!*************************************************!*\
  !*** ./src/validators/stickyRegex.validator.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  var a = /o+/y;\n";
var name = 'stickyRegex';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            expression: testExpression
        });
    }
};


/***/ }),

/***/ "./src/validators/templateLiterals.validator.ts":
/*!******************************************************!*\
  !*** ./src/validators/templateLiterals.validator.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = 'return `${1}`';
var name = 'templateLiterals';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: '1'
        });
    }
};


/***/ }),

/***/ "./src/validators/throwExpressions.validator.ts":
/*!******************************************************!*\
  !*** ./src/validators/throwExpressions.validator.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  return 1 || throw new Error('error')\n";
var name = 'throwExpressions';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: 1
        });
    }
};


/***/ }),

/***/ "./src/validators/typeofSymbol.validator.ts":
/*!**************************************************!*\
  !*** ./src/validators/typeofSymbol.validator.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "return typeof Symbol === 'symbol'";
var name = 'typeofSymbol';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: true
        });
    }
};


/***/ }),

/***/ "./src/validators/types.ts":
/*!*********************************!*\
  !*** ./src/validators/types.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TestType;
(function (TestType) {
    TestType["checkResult"] = "checkResult";
    TestType["expectNoWrong"] = "expectNoWrong";
    TestType["expectThrowError"] = "expectThrowError"; //抛出错误
})(TestType = exports.TestType || (exports.TestType = {}));


/***/ }),

/***/ "./src/validators/unicodePropertyRegex.validator.ts":
/*!**********************************************************!*\
  !*** ./src/validators/unicodePropertyRegex.validator.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var name = 'unicodePropertyRegex';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.expectNoWrong,
            //TODO: 如何测试
            expression: 'throw new Error("I don\'t know how to test it")'
        });
    }
};


/***/ }),

/***/ "./src/validators/unicodeRegex.validator.ts":
/*!**************************************************!*\
  !*** ./src/validators/unicodeRegex.validator.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../tools */ "./src/tools.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/validators/types.ts");
var testExpression = "\n  return /^.$/u.test('\uD83D\uDE04');\n";
var name = 'unicodeRegex';
exports.validator = {
    name: name,
    test: function (content, done) {
        return tools_1.runTest({
            done: done, name: name,
            description: 'https://www.babeljs.cn/docs/plugins',
            type: types_1.TestType.checkResult,
            expression: testExpression,
            expectResult: true
        });
    }
};


/***/ })

/******/ });