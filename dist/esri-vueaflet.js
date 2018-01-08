(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("leaflet");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export testIcon */
/* unused harmony export filterBaseIcon */
/* unused harmony export filterSelectedIcon */
/* unused harmony export layerTypeLookup */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return registerComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);




function testIcon() {
  return __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.icon(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, {
    iconUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-east.png',
    iconRetinaUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-east@2x.png',
    iconSize: [31, 27],
    iconAnchor: [13.5, 17.5],
    popupAnchor: [0, -11]
  }));
}

function filterBaseIcon(slug) {
  return __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.icon(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, {
    iconUrl: '../static/svg/marker-colorfill-' + slug + '.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  }));
}

function filterSelectedIcon(slug) {
  return __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.icon(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, {
    iconUrl: '../static/svg/marker-selected-' + slug + '.svg',
    iconSize: [70, 70],
    iconAnchor: [35, 35]
  }));
}

function layerTypeLookup(type) {
  var layerTypes = {
    marker: 'l-marker'
  };

  if (!layerTypes[type]) throw new Error('[layerTypeLookup] layer type does not exist');

  return layerTypes[type];
}

var registerComponents = function registerComponents(Vue, components) {
  if (!Vue || !components) throw new Error('[registerComponents] missing params');

  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(components).forEach(function (key) {
    var c = components[key];
    Vue.component(c.name, c);
  });
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vueaflet__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vueaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vueaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_esri_leaflet__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_esri_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_esri_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vueaflet_src_store_mutation_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vueaflet_src_store_mutation_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vueaflet_src_store_mutation_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vuex__);

//
//








// TODO: loop through events
var events = ['loading', 'load', 'createfeature', 'removefeature', 'addfeature'];

var EFeatureLayer = {
  name: 'e-feature-layer',

  inject: ['mapId'],

  props: {
    // see https://esri.github.io/esri-leaflet/api-reference/layers/feature-layer.html for options
    options: {
      type: Object,
      required: true,
      validator: function validator(value) {
        return !!value.url;
      },
      default: function _default() {
        return {};
      }
    },
    name: String,
    order: {
      type: Number,
      default: 1
    }
  },

  data: function data() {
    return {
      innerLayer: {}
    };
  },
  created: function created() {
    var existingLayer = this.getNamedLayer(this.name);

    // TODO: remove pointToLayer, allow parent to pass additional config options
    this.innerLayer = existingLayer || __WEBPACK_IMPORTED_MODULE_3_esri_leaflet___default.a.featureLayer(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.options));

    // if a layer already exists with this name, then just re add it back to the main map
    this.name && !existingLayer ? this.addNamedLayer({
      id: this.mapId,
      name: this.name,
      order: this.order,
      layer: this.innerLayer
    }) : this.addLayer({
      id: this.mapId,
      layer: this.innerLayer
    });
  },
  mounted: function mounted() {
    this.$emit('ready', this.name);
    __WEBPACK_IMPORTED_MODULE_1_vueaflet__["VueafletBus"].$emit('feature-layer-' + this.mapId + '-ready', this.name);
  },
  destroyed: function destroyed() {
    // don't ever! remove the named layer, that way it can be reused
    this.removeLayer({ id: this.mapId, layer: this.innerLayer });
  },


  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_6_vuex__["mapGetters"])(['getNamedLayer'])),

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_6_vuex__["mapMutations"])({
    addLayer: __WEBPACK_IMPORTED_MODULE_4_vueaflet_src_store_mutation_types__["VUEAFLET_ADD_MAP_LAYER"],
    addNamedLayer: __WEBPACK_IMPORTED_MODULE_4_vueaflet_src_store_mutation_types__["VUEAFLET_ADD_NAMED_LAYER"],
    removeLayer: __WEBPACK_IMPORTED_MODULE_4_vueaflet_src_store_mutation_types__["VUEAFLET_REMOVE_MAP_LAYER"]
  }))
};

/* harmony default export */ __webpack_exports__["a"] = (EFeatureLayer);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vueaflet");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("esri-leaflet");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vueaflet/src/store/mutation-types");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vueaflet__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vueaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vueaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_esri_leaflet__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_esri_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_esri_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vueaflet_src_store_mutation_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vueaflet_src_store_mutation_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vueaflet_src_store_mutation_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuex__);

//
//







// TODO: add event loop
var events = ['loading', 'load'];

var EDynamicMapLayer = {
  name: 'e-dynamic-map-layer',

  inject: ['mapId'],

  props: {
    // see https://esri.github.io/esri-leaflet/api-reference/layers/dynamic-map-layer.html for options
    options: {
      type: Object,
      required: true,
      validator: function validator(value) {
        return !!value.url;
      },
      default: function _default() {
        return {};
      }
    },
    name: String,
    order: {
      type: Number,
      default: 1
    }
  },

  data: function data() {
    return {
      innerLayer: {}
    };
  },


  watch: {
    'options.layers': {
      handler: function handler(newLayers) {
        this.innerLayer.options.layers = newLayers;
        this.innerLayer.redraw();
      },

      deep: true
    },
    'options.opacity': function optionsOpacity(newOpacity) {
      if (newOpacity !== null || newOpacity !== undefined) {
        this.innerLayer.options.opacity = newOpacity;
        this.innerLayer.redraw();
      }
    }
  },

  created: function created() {
    var existingLayer = this.getNamedLayer(this.name);

    this.innerLayer = existingLayer || __WEBPACK_IMPORTED_MODULE_3_esri_leaflet___default.a.dynamicMapLayer(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.options));

    // if a layer already exists with this name, then just re-add it back to the main map
    this.name && !existingLayer ? this.addNamedLayer({
      id: this.mapId,
      name: this.name,
      order: this.order,
      layer: this.innerLayer
    }) : this.addLayer({
      id: this.mapId,
      order: this.order,
      layer: this.innerLayer
    });
  },
  mounted: function mounted() {
    this.$emit('ready', this.name);
    __WEBPACK_IMPORTED_MODULE_1_vueaflet__["VueafletBus"].$emit('dynamic-map-layer-' + this.mapId + '-ready', this.name);
  },
  destroyed: function destroyed() {
    // don't ever! remove the named layer, that way it can be reused
    this.removeLayer({ id: this.mapId, layer: this.innerLayer });
  },


  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["mapGetters"])(['getNamedLayer'])),

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["mapMutations"])({
    addLayer: __WEBPACK_IMPORTED_MODULE_4_vueaflet_src_store_mutation_types__["VUEAFLET_ADD_MAP_LAYER"],
    addNamedLayer: __WEBPACK_IMPORTED_MODULE_4_vueaflet_src_store_mutation_types__["VUEAFLET_ADD_NAMED_LAYER"],
    removeLayer: __WEBPACK_IMPORTED_MODULE_4_vueaflet_src_store_mutation_types__["VUEAFLET_REMOVE_MAP_LAYER"]
  }))
};

/* harmony default export */ __webpack_exports__["a"] = (EDynamicMapLayer);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(13);



// TODO: test options
var createInstaller = function createInstaller(components) {
  return function (Vue, options) {
    // do something with options
    Object(__WEBPACK_IMPORTED_MODULE_0_utils__["a" /* registerComponents */])(Vue, components);
  };
};

var createEsriVueaflet = function createEsriVueaflet() {
  return { install: createInstaller(__WEBPACK_IMPORTED_MODULE_1__components__) };
};

/* harmony default export */ __webpack_exports__["default"] = (createEsriVueaflet());

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EFeatureLayer_EFeatureLayer__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EFeatureLayer", function() { return __WEBPACK_IMPORTED_MODULE_0__EFeatureLayer_EFeatureLayer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EDynamicMapLayer_EDynamicMapLayer__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EDynamicMapLayer", function() { return __WEBPACK_IMPORTED_MODULE_1__EDynamicMapLayer_EDynamicMapLayer__["a"]; });



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EFeatureLayer_vue__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ad6e391_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EFeatureLayer_vue__ = __webpack_require__(15);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EFeatureLayer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ad6e391_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EFeatureLayer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/EFeatureLayer/EFeatureLayer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ad6e391", Component.options)
  } else {
    hotAPI.reload("data-v-3ad6e391", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3ad6e391", esExports)
  }
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EDynamicMapLayer_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_554fc6af_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EDynamicMapLayer_vue__ = __webpack_require__(17);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EDynamicMapLayer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_554fc6af_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EDynamicMapLayer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/EDynamicMapLayer/EDynamicMapLayer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-554fc6af", Component.options)
  } else {
    hotAPI.reload("data-v-554fc6af", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-554fc6af", esExports)
  }
}

/***/ })
/******/ ]);
});