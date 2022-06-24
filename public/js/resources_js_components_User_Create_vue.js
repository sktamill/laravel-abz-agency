"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Create",
  data: function data() {
    return {
      name: null,
      email: null,
      phone: null,
      position_id: null,
      photo: null,
      positionsAll: [],
      bearer: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiN2Y5YzcyYjBiYmQ3ZGExM2UxNjkyYjRhY2IzZDFiM2ExZTlmOGE2MmQwNDk4YjcxNzU1NDkwNWQ4ODI3MGVkYjRkYjBhZDFhNTEwMjVhMjQiLCJpYXQiOjE2NTYwNzcxNzMuNTQ1NDcyLCJuYmYiOjE2NTYwNzcxNzMuNTQ1NDcyLCJleHAiOjE2ODc2MTMxNzMuMzM2NDYsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.UNLLF_DdOjnkgB8StDfw5KQdK15RBc4rL_lTGiHRXEcv6NGdKkZoGh5atNOT9rk-k7eqWF9jorunsJ7tvwf5_Br4aUSFni0fsPxUur7L0upVCPuzLbUYBktX2gGvZO9OrVBUK7hzeiABImhbiWS9xhVpI3w4N1Awb21R8Cz0TXXsOU9Z3O_tfKcfL4zMGfjNubrS458qLYyVGuGMv_nw77aqTf87nKzmk1JONGW4vBM8HReOSKJHq7W-1FCbG-874rPcW5WrMAYWkgM8znOR4GpF-mJwgyJ1PV-vc2jgUJe3Tzun1RiQt8ni8XO62f8pZb_8tmNahz89pS8CvQlLsO3zlI8RqR7CrqIIVHl6j6GX3CdnGOztP8XB31OLWQsTsfpnGqE-kf9QTMwvBVkk3K8JJfH0uPv-jmA2m9TtwMJlek8y9PB3vSxlsD9PUmdS96ZINS8bwYIsR7Z9O9gCwkaN1NC2W6A52NboKJ3XJnovoTE1UYdeVpfEpx4-HhD2OAsp-2-QN6Uos5buxz_E5PMYzB2ff0_9dkDNjgrqGryPzqTTmcEOLrDf3FseHVJ4ruwkbP8JJIOCavuyUUGXwQPTmagPfxmCnKIrcYK8zo3GlkSBgu2rwbqPFJQU0e019pmDkkDgcBL8ZX1dLIbDkSraF9rrLl9NY2Xy6G5JEPw'
    };
  },
  mounted: function mounted() {
    this.getPositions();
  },
  methods: {
    store: function store() {
      var _this = this;

      var formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('phone', this.phone);
      formData.append('photo', this.photo);
      formData.append('position_id', this.position_id);
      axios.post('/api/v1/form', formData, {
        headers: {
          Authorization: "Bearer ".concat(this.bearer),
          Accept: 'application/json'
        }
      }).then(function (res) {
        _this.$router.push({
          name: 'user.index'
        });
      })["catch"](function (error) {
        console.log('Error:', error.response);
      });
    },
    getPositions: function getPositions() {
      var _this2 = this;

      axios.get('/api/v1/positions', {
        headers: {
          Authorization: "Bearer ".concat(this.bearer),
          Accept: 'application/json'
        }
      }).then(function (res) {
        _this2.positionsAll = res.data.data;
      });
    },
    processFile: function processFile(event) {
      this.photo = event.target.files[0];
    }
  },
  computed: {
    isDisabled: function isDisabled() {
      return this.name && this.email;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/User/Create.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/User/Create.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_17bcc2c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=17bcc2c5&scoped=true& */ "./resources/js/components/User/Create.vue?vue&type=template&id=17bcc2c5&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/User/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_17bcc2c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_17bcc2c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "17bcc2c5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/User/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/Create.vue?vue&type=template&id=17bcc2c5&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/User/Create.vue?vue&type=template&id=17bcc2c5&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_17bcc2c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_17bcc2c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_17bcc2c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=17bcc2c5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Create.vue?vue&type=template&id=17bcc2c5&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Create.vue?vue&type=template&id=17bcc2c5&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Create.vue?vue&type=template&id=17bcc2c5&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-25 mt-3" }, [
    _c("div", { staticClass: "mb-3" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.name,
            expression: "name",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Name" },
        domProps: { value: _vm.name },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.name = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mb-3" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.email,
            expression: "email",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Email" },
        domProps: { value: _vm.email },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.email = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mb-3" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.phone,
            expression: "phone",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Phone" },
        domProps: { value: _vm.phone },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.phone = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mb-3" }, [
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.position_id,
              expression: "position_id",
            },
          ],
          staticClass: "form-control",
          on: {
            change: function ($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function (o) {
                  return o.selected
                })
                .map(function (o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.position_id = $event.target.multiple
                ? $$selectedVal
                : $$selectedVal[0]
            },
          },
        },
        _vm._l(_vm.positionsAll, function (pos) {
          return _c("option", { domProps: { value: pos.id } }, [
            _vm._v(_vm._s(pos.title)),
          ])
        }),
        0
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mb-3" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "file" },
        on: {
          change: function ($event) {
            return _vm.processFile($event)
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mb-3" }, [
      _c("input", {
        staticClass: "btn btn-primary",
        attrs: { disabled: !_vm.isDisabled, type: "submit", value: "Add User" },
        on: {
          click: function ($event) {
            $event.preventDefault()
            return _vm.store.apply(null, arguments)
          },
        },
      }),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);