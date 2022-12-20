/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/academic/App.vue?vue&type=script&setup=true&lang=ts":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/academic/App.vue?vue&type=script&setup=true&lang=ts ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _components_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header.vue */ \"./src/components/Header.vue\");\n/* harmony import */ var _components_StepPanel_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/StepPanel.vue */ \"./src/components/StepPanel.vue\");\n/* harmony import */ var _store_profile_academic_univ__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/profile/academic/univ */ \"./src/store/profile/academic/univ.ts\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n  __name: 'App',\n  setup(__props, {\n    expose\n  }) {\n    expose();\n    const __returned__ = {\n      Header: _components_Header_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      StepPanel: _components_StepPanel_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      get paper() {\n        return _store_profile_academic_univ__WEBPACK_IMPORTED_MODULE_3__.paper;\n      },\n      get schools() {\n        return _store_profile_academic_univ__WEBPACK_IMPORTED_MODULE_3__.schools;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n}));\n\n//# sourceURL=webpack://view/./src/pages/academic/App.vue?./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use%5B1%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/academic/App.vue?vue&type=template&id=01dcea06&ts=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/academic/App.vue?vue&type=template&id=01dcea06&ts=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"flex items-center justify-center w-5 h-5 mb-4 rounded-full bg-blue-300\"\n};\nconst _hoisted_2 = {\n  class: \"text-sm leading-5 text-gray-900\"\n};\nconst _hoisted_3 = {\n  class: \"text-sm leading-5 text-gray-500\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"Header\"]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.paper, paperitem => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(paperitem.number) + \".\" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(paperitem.auther) + \" \", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"i\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(paperitem.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\", (\" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(paperitem.date) + \"), \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(paperitem.publicedBy) + \". \", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(paperitem.doi), 1 /* TEXT */)]);\n  }), 256 /* UNKEYED_FRAGMENT */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.schools, school => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"StepPanel\"], {\n      stepsdata: school.sp,\n      achivedata: school.cp\n    }, null, 8 /* PROPS */, [\"stepsdata\", \"achivedata\"])]);\n  }), 256 /* UNKEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://view/./src/pages/academic/App.vue?./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use%5B1%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B4%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/pages/academic/main.ts":
/*!************************************!*\
  !*** ./src/pages/academic/main.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/pages/academic/App.vue\");\n/* harmony import */ var _assets_style_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/style/main.css */ \"./src/assets/style/main.css\");\n/* harmony import */ var _assets_style_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_style_main_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n//# sourceURL=webpack://view/./src/pages/academic/main.ts?");

/***/ }),

/***/ "./src/store/profile/academic/univ.ts":
/*!********************************************!*\
  !*** ./src/store/profile/academic/univ.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"paper\": function() { return /* binding */ paper; },\n/* harmony export */   \"schools\": function() { return /* binding */ schools; }\n/* harmony export */ });\nconst paper = [{\n  number: 1,\n  auther: \"WataruOnodera, NobuyukiHarab, ShihoAoki, ToruAsahia, NaoyaSawamura\",\n  title: \"Phylogenetic tree reconstruction via graph cut presented using a quantum-inspired computer\",\n  date: \"2023\",\n  publicedBy: \"Molecular Phylogenetics and Evolution\",\n  doi: \"https://doi.org/10.1016/j.ympev.2022.107636\"\n}];\nconst schools = [{\n  sp: {\n    steps: [{\n      step: \"Waseda University Honjo Senior High School\",\n      position: \"general cource\",\n      context: \"\",\n      time: \"2016.04-2019.03\"\n    }, {\n      step: \"Waseda University\",\n      position: \"Advanced Science and Engineering\",\n      context: \"Department of Biomedical Sciences, Asahi Lab\",\n      time: \"2019.04-2023.03\"\n    }, {\n      step: \"Waseda University\",\n      position: \"full-term doctoral program\",\n      context: \"School of Advanced Science and Engineering\",\n      time: \"2023.03-\"\n    }],\n    end: \"\"\n  },\n  cp: [{\n    headline: \"zaikenn\",\n    article: \"\",\n    urls: {\n      ref: \"\",\n      name: \"\"\n    }\n  }, {\n    headline: \"\",\n    article: \"\",\n    urls: {\n      ref: \"\",\n      name: \"\"\n    }\n  }]\n}];\n\n//# sourceURL=webpack://view/./src/store/profile/academic/univ.ts?");

/***/ }),

/***/ "./src/pages/academic/App.vue":
/*!************************************!*\
  !*** ./src/pages/academic/App.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_01dcea06_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=01dcea06&ts=true */ \"./src/pages/academic/App.vue?vue&type=template&id=01dcea06&ts=true\");\n/* harmony import */ var _App_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&setup=true&lang=ts */ \"./src/pages/academic/App.vue?vue&type=script&setup=true&lang=ts\");\n/* harmony import */ var _usr_app_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_usr_app_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_01dcea06_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/pages/academic/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://view/./src/pages/academic/App.vue?");

/***/ }),

/***/ "./src/pages/academic/App.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************!*\
  !*** ./src/pages/academic/App.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&setup=true&lang=ts */ \"./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/academic/App.vue?vue&type=script&setup=true&lang=ts\");\n \n\n//# sourceURL=webpack://view/./src/pages/academic/App.vue?");

/***/ }),

/***/ "./src/pages/academic/App.vue?vue&type=template&id=01dcea06&ts=true":
/*!**************************************************************************!*\
  !*** ./src/pages/academic/App.vue?vue&type=template&id=01dcea06&ts=true ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_01dcea06_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_01dcea06_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=01dcea06&ts=true */ \"./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/academic/App.vue?vue&type=template&id=01dcea06&ts=true\");\n\n\n//# sourceURL=webpack://view/./src/pages/academic/App.vue?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"academic": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkview"] = self["webpackChunkview"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors","chunk-common"], function() { return __webpack_require__("./src/pages/academic/main.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;