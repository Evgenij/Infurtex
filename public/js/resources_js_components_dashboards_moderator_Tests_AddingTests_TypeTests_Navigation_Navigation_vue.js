"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_dashboards_moderator_Tests_AddingTests_TypeTests_Navigation_Navigation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../FileLoader/FileLoader'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../Questions/SectionQuestions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../../enums'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
  name: "Navigation",
  components: {
    FileLoader: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../FileLoader/FileLoader'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    SectionQuestions: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../Questions/SectionQuestions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      textInstruction: '',
      questions: [],
      typeFL: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../../enums'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      navigationListData: [1, 2, 3, 4]
    };
  },
  methods: {
    addQuestionBlock: function addQuestionBlock(newQuestion) {
      this.questions.push(newQuestion);
    },
    removeQuestionBlock: function removeQuestionBlock(idRemovingQuestion) {
      //console.log(idRemovingQuestion)
      this.questions = this.questions.filter(function (el) {
        return el.id !== idRemovingQuestion;
      }); //console.log(this.questions)
    }
  }
});

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_52f1775b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=52f1775b&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue?vue&type=template&id=52f1775b&scoped=true&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_52f1775b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_52f1775b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "52f1775b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue?vue&type=template&id=52f1775b&scoped=true&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue?vue&type=template&id=52f1775b&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_52f1775b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_52f1775b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_52f1775b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=52f1775b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue?vue&type=template&id=52f1775b&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue?vue&type=template&id=52f1775b&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation/Navigation.vue?vue&type=template&id=52f1775b&scoped=true& ***!
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
    { staticClass: "navigation-block flex flex-col space-y-4" },
    [
      _c(
        "div",
        { staticClass: "first-click-block__instruction" },
        [
          _c("h2", { staticClass: "font-medium text-base" }, [
            _vm._v("Инструкция"),
          ]),
          _vm._v(" "),
          _c("vs-input", {
            staticClass: "w-full mt-2",
            attrs: {
              primary: "",
              placeholder: "Что нужно сделать в тесте ...",
            },
            model: {
              value: _vm.textInstruction,
              callback: function ($$v) {
                _vm.textInstruction = $$v
              },
              expression: "textInstruction",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "first-click-block__files" },
        [
          _c("file-loader", {
            attrs: {
              typeFileLoader: _vm.typeFL.Multiply,
              navigationList: true,
              "navigation-list-data": _vm.navigationListData,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "first-click-block__questions" },
        [
          _c("h2", { staticClass: "font-medium text-base mb-2" }, [
            _vm._v("Вопросы"),
          ]),
          _vm._v(" "),
          _c("section-questions", {
            attrs: { questions: _vm.questions },
            on: {
              "add-question-block": _vm.addQuestionBlock,
              "remove-question-block": _vm.removeQuestionBlock,
            },
          }),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);