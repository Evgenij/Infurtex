"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_dashboards_moderator_Tests_AddingTests_Questions_TypeQuestions_RadioB-8870d6"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AnswerBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AnswerBlock */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue");
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
  name: "RadioButtonQuestion",
  components: {
    AnswerBlock: _AnswerBlock__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      text: '',
      answers: [{
        id: 1,
        value: ''
      }, {
        id: 2,
        value: ''
      }],
      checkedAnswers: []
    };
  },
  methods: {
    removeAnswer: function removeAnswer(idAnswer) {
      if (this.answers.length > 2) {
        this.answers = this.answers.filter(function (el) {
          return el.id !== idAnswer;
        });
      }
    },
    addAnswer: function addAnswer() {
      this.answers.push({
        id: this.answers.length + 1,
        value: ''
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RadioButtonQuestion_vue_vue_type_template_id_0219e729_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioButtonQuestion.vue?vue&type=template&id=0219e729&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=template&id=0219e729&scoped=true&");
/* harmony import */ var _RadioButtonQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioButtonQuestion.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RadioButtonQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RadioButtonQuestion_vue_vue_type_template_id_0219e729_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RadioButtonQuestion_vue_vue_type_template_id_0219e729_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0219e729",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioButtonQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RadioButtonQuestion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioButtonQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=template&id=0219e729&scoped=true&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=template&id=0219e729&scoped=true& ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioButtonQuestion_vue_vue_type_template_id_0219e729_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioButtonQuestion_vue_vue_type_template_id_0219e729_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioButtonQuestion_vue_vue_type_template_id_0219e729_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RadioButtonQuestion.vue?vue&type=template&id=0219e729&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=template&id=0219e729&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=template&id=0219e729&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=template&id=0219e729&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "question mt-2 flex flex-col pt-4" },
    [
      _c("vs-input", {
        staticClass: "w-full mr-3",
        attrs: { primary: "", placeholder: "Текст вопроса", label: "Вопрос" },
        model: {
          value: _vm.text,
          callback: function ($$v) {
            _vm.text = $$v
          },
          expression: "text",
        },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "answers flex flex-col space-y-1" }, [
        _c(
          "header",
          { staticClass: "answers__title text-sm font-medium py-1 pl-1 pt-3" },
          [_vm._v("Ответы")]
        ),
        _vm._v(" "),
        _c(
          "main",
          { staticClass: "answers__list flex flex-col space-y-2" },
          _vm._l(_vm.answers, function (answer) {
            return _c("answer-block", {
              key: answer.id,
              attrs: { id: answer.id, value: answer.value },
              on: { remove: _vm.removeAnswer },
            })
          }),
          1
        ),
        _vm._v(" "),
        _c(
          "footer",
          { staticClass: "answers__add-button flex justify-end py-2" },
          [
            _c(
              "vs-button",
              {
                attrs: { success: "", disabled: _vm.answers.length >= 5 },
                on: { click: _vm.addAnswer },
              },
              [_vm._v("Добавить вариант")]
            ),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);