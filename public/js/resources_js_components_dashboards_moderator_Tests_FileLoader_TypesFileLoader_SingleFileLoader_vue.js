"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_dashboards_moderator_Tests_FileLoader_TypesFileLoader_SingleFileLoader_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
  name: "SingleFileLoader",
  data: function data() {
    return {
      file: '',
      showPreview: false,
      imagePreview: ''
    };
  },
  props: {
    navigation: {
      type: Boolean,
      "default": false
    },
    areas: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    id: {
      type: Number,
      "default": 1
    },
    nameScreen: {
      type: String
    }
  },
  methods: {
    submitFile: function submitFile() {
      var formData = new FormData();
      formData.append('file', this.file);
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/file-preview', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function () {
        console.log('SUCCESS!!');
      })["catch"](function () {
        console.log('FAILURE!!');
      });
    },
    onImageChoose: function onImageChoose() {
      var _this = this;

      this.file = this.$refs.file.files[0];
      var reader = new FileReader();

      reader.onload = function () {
        _this.showPreview = true;
        _this.imagePreview = reader.result;
        _this.imageFile = reader.result;
      };

      reader.readAsDataURL(this.file); // reader.addEventListener("load", function () {
      //     this.showPreview = true;
      //     this.imagePreview = reader.result;
      //     this.imageFile = reader.result;
      // }.bind(this), false);
      // if( this.file ){
      //     if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
      //         reader.readAsDataURL( this.file );
      //     }
      // }
    },
    browseFile: function browseFile() {
      this.$refs["label-file"].click();
    },
    resetFile: function resetFile() {
      this.file = '';
    },
    addingArea: function addingArea() {
      this.$emit('add-area');
    }
  },
  watch: {
    imagePreview: function imagePreview() {
      this.$emit('changeFile', this.imagePreview);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=style&index=0&id=a7ce4cfe&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=style&index=0&id=a7ce4cfe&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".img-wrapper[data-v-a7ce4cfe] {\n  max-height: 250px;\n}\n.area__color[data-v-a7ce4cfe] {\n  width: 26px;\n  height: 26px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=style&index=0&id=a7ce4cfe&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=style&index=0&id=a7ce4cfe&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleFileLoader_vue_vue_type_style_index_0_id_a7ce4cfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleFileLoader.vue?vue&type=style&index=0&id=a7ce4cfe&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=style&index=0&id=a7ce4cfe&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleFileLoader_vue_vue_type_style_index_0_id_a7ce4cfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleFileLoader_vue_vue_type_style_index_0_id_a7ce4cfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SingleFileLoader_vue_vue_type_template_id_a7ce4cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleFileLoader.vue?vue&type=template&id=a7ce4cfe&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=template&id=a7ce4cfe&scoped=true&");
/* harmony import */ var _SingleFileLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleFileLoader.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=script&lang=js&");
/* harmony import */ var _SingleFileLoader_vue_vue_type_style_index_0_id_a7ce4cfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleFileLoader.vue?vue&type=style&index=0&id=a7ce4cfe&lang=scss&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=style&index=0&id=a7ce4cfe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SingleFileLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleFileLoader_vue_vue_type_template_id_a7ce4cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SingleFileLoader_vue_vue_type_template_id_a7ce4cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a7ce4cfe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleFileLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleFileLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleFileLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=style&index=0&id=a7ce4cfe&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=style&index=0&id=a7ce4cfe&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleFileLoader_vue_vue_type_style_index_0_id_a7ce4cfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleFileLoader.vue?vue&type=style&index=0&id=a7ce4cfe&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=style&index=0&id=a7ce4cfe&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=template&id=a7ce4cfe&scoped=true&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=template&id=a7ce4cfe&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleFileLoader_vue_vue_type_template_id_a7ce4cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleFileLoader_vue_vue_type_template_id_a7ce4cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleFileLoader_vue_vue_type_template_id_a7ce4cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleFileLoader.vue?vue&type=template&id=a7ce4cfe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=template&id=a7ce4cfe&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=template&id=a7ce4cfe&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=template&id=a7ce4cfe&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass:
        "single-file-loader w-full rounded-lg border-2 border-dashed\n        border-slate-300 p-6",
    },
    [
      _vm.file === ""
        ? _c(
            "main",
            {
              staticClass:
                "single-file-loader__content w-full flex items-center justify-between",
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "min-w-max",
                  attrs: { success: "" },
                  on: { click: _vm.browseFile },
                },
                [
                  _c("i", { staticClass: "bx bx-import left" }),
                  _vm._v("\n            Выбрать файл\n        "),
                ]
              ),
            ],
            1
          )
        : _c("section", { staticClass: "image grid grid-cols-2 gap-5" }, [
            _c(
              "div",
              {
                staticClass:
                  "img-wrapper rounded-lg flex items-center justify-center overflow-hidden bg-slate-100 border border-slate-200",
              },
              [
                _c("img", {
                  staticClass: "preview w-full rounded-lg",
                  attrs: { src: _vm.imagePreview, alt: this.file.name },
                }),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "image__data flex flex-col mb-4 pl-2" }, [
              _c("h5", { staticClass: "mb-2 font-medium pl-2" }, [
                _vm._v(_vm._s(this.file.name)),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "image__content flex" },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "min-w-max",
                      attrs: { flat: "", dark: "" },
                      on: { click: _vm.browseFile },
                    },
                    [
                      _c("i", { staticClass: "bx bx-reset left" }),
                      _vm._v(
                        "\n                    Изменить\n                "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm.navigation === false
                    ? _c(
                        "vs-button",
                        {
                          staticClass: "min-w-max",
                          staticStyle: { "min-width": "90px" },
                          attrs: {
                            danger: "",
                            flat: "",
                            "animation-type": "scale",
                          },
                          on: { click: _vm.resetFile },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "animate",
                                fn: function () {
                                  return [
                                    _vm._v(
                                      "\n                        Удалить\n                    "
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            false,
                            3080118668
                          ),
                        },
                        [_c("i", { staticClass: "bx bx-trash" })]
                      )
                    : _vm._e(),
                ],
                1
              ),
              _vm._v(" "),
              _vm.navigation === true
                ? _c(
                    "div",
                    {
                      staticClass:
                        "image__content flex flex-col space-y-2 pt-6 pl-2",
                    },
                    [
                      _c("h4", { staticClass: "text-sm font-medium" }, [
                        _vm._v("Целевые области "),
                        _c("span", { staticClass: "text-slate-400" }, [
                          _vm._v("(x" + _vm._s(_vm.areas.length) + ")"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "list-areas flex flex-col space-y-2" },
                        _vm._l(_vm.areas, function (area) {
                          return _c(
                            "div",
                            {
                              staticClass:
                                "area pb-2 border-b border-slate-100",
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "area__data flex items-center space-x-2",
                                },
                                [
                                  _c("div", {
                                    staticClass: "area__color rounded-lg",
                                    style: { background: area.color },
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "text-sm" }, [
                                    _vm._v(_vm._s(area.name)),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "area__screen flex items-center text-sm ml-1 mt-1 text-slate-400",
                                },
                                [
                                  _c("i", { staticClass: "bx bx-link mr-2" }),
                                  _vm._v(" "),
                                  area.screen.id !== 0
                                    ? [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(area.screen.name) +
                                            "\n                            "
                                        ),
                                      ]
                                    : [
                                        _c(
                                          "span",
                                          { staticClass: "text-red-500" },
                                          [_vm._v(_vm._s(area.screen.name))]
                                        ),
                                      ],
                                ],
                                2
                              ),
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "text-slate-400 hover:text-green-500 text-sm flex items-center cursor-pointer max-w-fit",
                          on: { click: _vm.addingArea },
                        },
                        [
                          _c("i", { staticClass: "bx bx-screenshot mr-1" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "pb-1" }, [
                            _vm._v("изменить области"),
                          ]),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]),
          ]),
      _vm._v(" "),
      _c("label", { ref: "label-file", attrs: { for: "file-" + _vm.id } }),
      _vm._v(" "),
      _c("input", {
        ref: "file",
        staticClass: "absolute hidden",
        attrs: {
          accept: ".jpg,.jpeg,.png",
          type: "file",
          id: "file-" + _vm.id,
        },
        on: {
          change: function ($event) {
            return _vm.onImageChoose()
          },
        },
      }),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "single-file-loader__text" }, [
      _c("h4", { staticClass: "font-bold mb-2" }, [
        _vm._v("Добавьте файл для теста"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-slate-600 text-base" }, [
        _vm._v("Поддерживаемые форматы - JPG, JPEG, PNG"),
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "text-slate-400 text-sm" }, [
        _vm._v("максимальный размер 10 Мб"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);