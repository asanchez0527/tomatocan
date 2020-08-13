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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/viewer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/viewer.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/viewer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/abejohnson/thinQ/tomatocan/app/javascript/packs/viewer.js: Unexpected token (29:6)\n\n  27 |       attendee.onclick = () => {\n  28 |         window.\n> 29 |       }\n     |       ^\n  30 |       var button = document.createElement(\"button\")\n  31 |       button.innerHTML = \"Block\"\n  32 |       button.className = \"blockbutton\"\n    at Parser._raise (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:757:17)\n    at Parser.raiseWithData (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:750:17)\n    at Parser.raise (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:744:17)\n    at Parser.unexpected (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:8834:16)\n    at Parser.parseIdentifierName (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:10877:18)\n    at Parser.parseIdentifier (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:10854:23)\n    at Parser.parseMaybePrivateName (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:10203:19)\n    at Parser.parseSubscript (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:9746:64)\n    at Parser.parseSubscripts (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:9711:19)\n    at Parser.parseExprSubscripts (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:9694:17)\n    at Parser.parseMaybeUnary (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:9668:21)\n    at Parser.parseExprOps (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:9538:23)\n    at Parser.parseMaybeConditional (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:9511:23)\n    at Parser.parseMaybeAssign (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:9466:21)\n    at Parser.parseExpression (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:9418:23)\n    at Parser.parseStatementContent (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:11339:23)\n    at Parser.parseStatement (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:11210:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:11785:25)\n    at Parser.parseBlockBody (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:11771:10)\n    at Parser.parseBlock (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:11755:10)\n    at Parser.parseFunctionBody (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:10758:24)\n    at Parser.parseArrowExpression (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:10727:10)\n    at Parser.parseParenAndDistinguishExpression (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:10341:12)\n    at Parser.parseExprAtom (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:10042:21)\n    at Parser.parseExprSubscripts (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:9688:23)\n    at Parser.parseMaybeUnary (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:9668:21)\n    at Parser.parseExprOps (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:9538:23)\n    at Parser.parseMaybeConditional (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:9511:23)\n    at Parser.parseMaybeAssign (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:9466:21)\n    at Parser.parseMaybeAssign (/Users/abejohnson/thinQ/tomatocan/node_modules/@babel/parser/lib/index.js:9498:25)");

/***/ })

/******/ });
//# sourceMappingURL=viewer-2ada9da6790c565930aa.js.map