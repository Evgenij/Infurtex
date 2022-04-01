"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_dashboards_moderator_Tests_AddingTests_TypeTests_FirstClick_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../enums */ "./resources/js/enums.js");
/* harmony import */ var _TypeQuestions_TextQuestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TypeQuestions/TextQuestion */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue");
/* harmony import */ var _TypeQuestions_CheckboxQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TypeQuestions/CheckboxQuestion */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue");
/* harmony import */ var _TypeQuestions_RadioButtonQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TypeQuestions/RadioButtonQuestion */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue");
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
  name: "QuestionBlock",
  components: {
    RadioButtonQuestion: _TypeQuestions_RadioButtonQuestion__WEBPACK_IMPORTED_MODULE_3__["default"],
    CheckboxQuestion: _TypeQuestions_CheckboxQuestion__WEBPACK_IMPORTED_MODULE_2__["default"],
    TextQuestion: _TypeQuestions_TextQuestion__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      typeQuestion: _enums__WEBPACK_IMPORTED_MODULE_0__["default"].typeQuestion
    };
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    type: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    answers: {
      type: Array,
      required: true
    }
  },
  computed: {
    getTypeToText: function getTypeToText() {
      if (this.type === _enums__WEBPACK_IMPORTED_MODULE_0__["default"].typeQuestion.Text) {
        return "Текстовый ответ";
      } else if (this.type === _enums__WEBPACK_IMPORTED_MODULE_0__["default"].typeQuestion.CheckBox) {
        return "Выбор нескольких вариантов";
      } else if (this.type === _enums__WEBPACK_IMPORTED_MODULE_0__["default"].typeQuestion.Radio) {
        return "Выбор одного из нескольких вариантов";
      } else {
        return "Ответ по шкале";
      }
    } // questionTest(){
    //     let nameComponentQuestion = this.type ? 'TextQuestion' : 'UserInfo'
    //
    //     if (this.type === type.typeQuestion.Text) {
    //         nameComponentQuestion = "TextQuestion"
    //     } if (this.type === type.typeQuestion.CheckBox) {
    //         nameComponentQuestion = 'CheckboxQuestion'
    //     }
    //
    //     return () => import(`./TypeQuestions/${nameComponentQuestion}`)
    //},

  },
  methods: {
    remove: function remove() {
      this.$emit('remove-question', this.id);
    },
    removeAnswer: function removeAnswer(idAnswer) {
      console.log('remove - ', idAnswer);
      this.$emit('remove-answer', {
        id: this.id,
        idAnswer: idAnswer
      });
    },
    addAnswer: function addAnswer(answers) {
      console.log('1');
      this.$emit('add-answer', {
        id: this.id,
        answers: answers
      });
    },
    changeTextQuestion: function changeTextQuestion(val) {
      this.$emit('change-text-question', {
        id: this.id,
        text: val
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuestionBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionBlock */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../enums */ "./resources/js/enums.js");
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
  name: "SectionQuestions",
  components: {
    QuestionBlock: _QuestionBlock__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      activeTooltip: false,
      sectionQuestions: []
    };
  },
  props: {
    questions: {
      type: Array,
      required: true
    }
  },
  methods: {
    addNewQuestion: function addNewQuestion(type) {
      var newQuestionBlock = {
        id: this.questions.length + 1,
        type: type,
        text: '',
        answers: [{
          id: 1,
          value: ''
        }, {
          id: 2,
          value: ''
        }]
      };
      this.$emit('add-question-block', newQuestionBlock);
      this.switchStatePanel();
    },
    switchStatePanel: function switchStatePanel() {
      this.activeTooltip = !this.activeTooltip;
    },
    removeQuestion: function removeQuestion(idQuestion) {
      //this.questions = this.questions.filter(el => el.id !== idQuestion)
      this.$emit('remove-question-block', idQuestion);
    },
    removeAnswer: function removeAnswer(obj) {
      var question = this.questions.filter(function (el) {
        return el.id === obj.id;
      })[0];
      this.questions.filter(function (el) {
        return el.id === obj.id;
      })[0].answers = question.answers.filter(function (el) {
        return el.id !== obj.idAnswer;
      }); //console.log('!!! ', this.questions)
      //this.$emit('remove-answer', obj)
    },
    addAnswer: function addAnswer(obj) {
      //let question = this.questions.filter(el=>el.id === obj.id)[0]
      //console.log(question)
      this.questions.filter(function (el) {
        return el.id === obj.id;
      })[0].answers = obj.answers; //console.log(this.questions)
    },
    changeTextQuestion: function changeTextQuestion(obj) {
      this.questions.filter(function (el) {
        return el.id === obj.id;
      })[0].text = obj.text;
    }
  },
  computed: {
    setQuestions: function setQuestions() {
      this.sectionQuestions = this.$props.questions;
    }
  }
});

/***/ }),

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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RadioButtonQuestion",
  components: {
    AnswerBlock: _AnswerBlock__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      questionAnswers: [],
      textQuestion: ''
    };
  },
  props: {
    answers: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeAnswer: function removeAnswer(idAnswer) {
      if (this.questionAnswers.length > 2) {
        this.questionAnswers = this.questionAnswers.filter(function (el) {
          return el.id !== idAnswer;
        });
        this.$emit('remove-answer', idAnswer);
      }
    },
    addAnswer: function addAnswer() {
      var newIdAnswer = this.questionAnswers.length + 1;

      if (this.questionAnswers.length < 5) {
        this.questionAnswers.push({
          id: newIdAnswer,
          value: ''
        }); //console.log(this.questionAnswers)

        this.$emit('add-answer', this.questionAnswers);
      }
    },
    changeDataAnswer: function changeDataAnswer(obj) {
      this.questionAnswers.filter(function (el) {
        return el.id === obj.id;
      })[0].value = obj.val;
    }
  },
  watch: {
    textQuestion: function textQuestion() {
      this.$emit('change-text-question', this.textQuestion);
    }
  },
  // computed: {
  //     setQuestionAnswers(){
  //         this.questionAnswers = this.$props.answers
  //     },
  // },
  created: function created() {
    this.questionAnswers = this.$props.answers;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../enums */ "./resources/js/enums.js");
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
  name: "TextQuestion",
  data: function data() {
    return {
      textQuestion: ''
    };
  },
  watch: {
    textQuestion: function textQuestion() {
      this.$emit('change-text-question', this.textQuestion);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Questions_SectionQuestions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Questions/SectionQuestions */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../enums */ "./resources/js/enums.js");
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
  name: "FirstClick",
  components: {
    SectionQuestions: _Questions_SectionQuestions__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      questions: [{
        id: 1,
        type: _enums__WEBPACK_IMPORTED_MODULE_1__["default"].typeQuestion.Text,
        text: '',
        answers: [{
          id: 1,
          value: ''
        }]
      }, {
        id: 2,
        type: _enums__WEBPACK_IMPORTED_MODULE_1__["default"].typeQuestion.CheckBox,
        text: '',
        answers: [{
          id: 1,
          value: ''
        }, {
          id: 2,
          value: ''
        }, {
          id: 3,
          value: ''
        }, {
          id: 4,
          value: ''
        }]
      }, {
        id: 3,
        type: _enums__WEBPACK_IMPORTED_MODULE_1__["default"].typeQuestion.Radio,
        text: '',
        answers: [{
          id: 1,
          value: ''
        }, {
          id: 2,
          value: ''
        }, {
          id: 3,
          value: ''
        }]
      }]
    };
  },
  methods: {
    // removeAnswer(obj){
    //     console.log(obj)
    //     let question = this.questions.filter(el=>el.id === obj.id)[0].answers.filter(el=>el.id !== obj.idAnswer)
    //     console.log(question)
    //     this.questions.filter(el=>el.id === obj.id)[0].answers = question
    // },
    // addAnswer(){
    //
    // }
    addQuestionBlock: function addQuestionBlock(newQuestion) {
      this.questions.push(newQuestion);
    },
    removeQuestionBlock: function removeQuestionBlock(idRemovingQuestion) {
      console.log(idRemovingQuestion);
      this.questions = this.questions.filter(function (el) {
        return el.id !== idRemovingQuestion;
      });
      console.log(this.questions);
    }
  },
  watch: {
    questions: function questions(val) {
      console.log(val);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuestionBlock_vue_vue_type_template_id_15718759_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionBlock.vue?vue&type=template&id=15718759&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=template&id=15718759&scoped=true&");
/* harmony import */ var _QuestionBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionBlock.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuestionBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuestionBlock_vue_vue_type_template_id_15718759_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuestionBlock_vue_vue_type_template_id_15718759_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "15718759",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SectionQuestions_vue_vue_type_template_id_56706046_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionQuestions.vue?vue&type=template&id=56706046&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=template&id=56706046&scoped=true&");
/* harmony import */ var _SectionQuestions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionQuestions.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SectionQuestions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SectionQuestions_vue_vue_type_template_id_56706046_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SectionQuestions_vue_vue_type_template_id_56706046_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "56706046",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextQuestion_vue_vue_type_template_id_c20c11e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextQuestion.vue?vue&type=template&id=c20c11e6&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue?vue&type=template&id=c20c11e6&scoped=true&");
/* harmony import */ var _TextQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextQuestion.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TextQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextQuestion_vue_vue_type_template_id_c20c11e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TextQuestion_vue_vue_type_template_id_c20c11e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c20c11e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FirstClick_vue_vue_type_template_id_d6a796c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FirstClick.vue?vue&type=template&id=d6a796c8&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue?vue&type=template&id=d6a796c8&scoped=true&");
/* harmony import */ var _FirstClick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FirstClick.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FirstClick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FirstClick_vue_vue_type_template_id_d6a796c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FirstClick_vue_vue_type_template_id_d6a796c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d6a796c8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionBlock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionQuestions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionQuestions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionQuestions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextQuestion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstClick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FirstClick.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstClick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=template&id=15718759&scoped=true&":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=template&id=15718759&scoped=true& ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionBlock_vue_vue_type_template_id_15718759_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionBlock_vue_vue_type_template_id_15718759_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionBlock_vue_vue_type_template_id_15718759_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionBlock.vue?vue&type=template&id=15718759&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=template&id=15718759&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=template&id=56706046&scoped=true&":
/*!**************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=template&id=56706046&scoped=true& ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionQuestions_vue_vue_type_template_id_56706046_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionQuestions_vue_vue_type_template_id_56706046_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionQuestions_vue_vue_type_template_id_56706046_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionQuestions.vue?vue&type=template&id=56706046&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=template&id=56706046&scoped=true&");


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

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue?vue&type=template&id=c20c11e6&scoped=true&":
/*!************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue?vue&type=template&id=c20c11e6&scoped=true& ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextQuestion_vue_vue_type_template_id_c20c11e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextQuestion_vue_vue_type_template_id_c20c11e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextQuestion_vue_vue_type_template_id_c20c11e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextQuestion.vue?vue&type=template&id=c20c11e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue?vue&type=template&id=c20c11e6&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue?vue&type=template&id=d6a796c8&scoped=true&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue?vue&type=template&id=d6a796c8&scoped=true& ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstClick_vue_vue_type_template_id_d6a796c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstClick_vue_vue_type_template_id_d6a796c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstClick_vue_vue_type_template_id_d6a796c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FirstClick.vue?vue&type=template&id=d6a796c8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue?vue&type=template&id=d6a796c8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=template&id=15718759&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=template&id=15718759&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "question-block border-b border-slate-100 pb-4" },
    [
      _c(
        "header",
        { staticClass: "flex items-center justify-between" },
        [
          _c("span", { staticClass: "text-sm text-slate-400 font-normal" }, [
            _vm._v(" " + _vm._s(_vm.id + ". " + _vm.getTypeToText)),
          ]),
          _vm._v(" "),
          _c(
            "vs-button",
            { attrs: { dark: "", transparent: "" }, on: { click: _vm.remove } },
            [
              _vm._v("\n            Удалить вопрос\n            "),
              _c("i", { staticClass: "bx bx-trash right" }),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _vm.type === 1
        ? _c("text-question", {
            on: { "change-text-question": _vm.changeTextQuestion },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.type === 2
        ? _c("radio-button-question", {
            attrs: { text: _vm.text, answers: _vm.answers },
            on: {
              "remove-answer": _vm.removeAnswer,
              "add-answer": _vm.addAnswer,
              "change-text-question": _vm.changeTextQuestion,
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.type === 3
        ? _c("checkbox-question", {
            attrs: { answers: _vm.answers },
            on: {
              "remove-answer": _vm.removeAnswer,
              "add-answer": _vm.addAnswer,
              "change-text-question": _vm.changeTextQuestion,
            },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=template&id=56706046&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=template&id=56706046&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "questions flex flex-col space-y-4" },
    [
      _vm._l(_vm.questions, function (question, index) {
        return _c("question-block", {
          key: index,
          attrs: {
            id: question.id,
            text: question.text,
            type: question.type,
            answers: question.answers,
          },
          on: {
            "remove-question": _vm.removeQuestion,
            "remove-answer": _vm.removeAnswer,
            "add-answer": _vm.addAnswer,
            "change-text-question": _vm.changeTextQuestion,
          },
        })
      }),
      _vm._v(" "),
      _c(
        "footer",
        [
          _c(
            "vs-button",
            {
              staticClass: "w-full",
              attrs: { transparent: "", dark: "" },
              on: {
                click: function ($event) {
                  _vm.activeTooltip = !_vm.activeTooltip
                },
              },
            },
            [
              _c("i", { staticClass: "bx bx-plus left" }),
              _vm._v("\n            Добавить вопрос\n        "),
            ]
          ),
          _vm._v(" "),
          _vm.activeTooltip
            ? _c(
                "div",
                {
                  staticClass:
                    "footer__title flex flex-col border rounded-lg border-slate-100 p-4",
                },
                [
                  _c(
                    "h4",
                    { staticClass: "text-center text-sm mb-2 font-medium" },
                    [_vm._v("\n                Тип вопроса\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "buttons flex items-center space-x-2" },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: { flat: "", dark: "" },
                          on: {
                            click: function ($event) {
                              return _vm.addNewQuestion(1)
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "bx bx-font-family left" }),
                          _vm._v(
                            "\n                    Текстовый ответ\n                "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: { flat: "", dark: "" },
                          on: {
                            click: function ($event) {
                              return _vm.addNewQuestion(2)
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "bx bx-list-check left" }),
                          _vm._v(
                            "\n                    Один из нескольких\n                "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: { flat: "", dark: "" },
                          on: {
                            click: function ($event) {
                              return _vm.addNewQuestion(3)
                            },
                          },
                        },
                        [
                          _c("i", {
                            staticClass: "bx bx-select-multiple left",
                          }),
                          _vm._v(
                            "\n                    Несколько ответов\n                "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              )
            : _vm._e(),
        ],
        1
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



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
          value: _vm.textQuestion,
          callback: function ($$v) {
            _vm.textQuestion = $$v
          },
          expression: "textQuestion",
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
          _vm._l(_vm.questionAnswers, function (answer, index) {
            return _c("answer-block", {
              key: index,
              attrs: { id: answer.id, value: answer.value },
              on: { remove: _vm.removeAnswer, change: _vm.changeDataAnswer },
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
                attrs: {
                  success: "",
                  disabled: _vm.questionAnswers.length >= 5,
                },
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue?vue&type=template&id=c20c11e6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/TextQuestion.vue?vue&type=template&id=c20c11e6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "question mt-2 pt-4" },
    [
      _c("vs-input", {
        staticClass: "w-full mr-3",
        attrs: { primary: "", placeholder: "Текст вопроса", label: "Вопрос" },
        model: {
          value: _vm.textQuestion,
          callback: function ($$v) {
            _vm.textQuestion = $$v
          },
          expression: "textQuestion",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue?vue&type=template&id=d6a796c8&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue?vue&type=template&id=d6a796c8&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "first-click-block" }, [
    _c("div", { staticClass: "first-click-block__files" }, [
      _vm._v("\n            файлы\n        "),
    ]),
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);