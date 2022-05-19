(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_dashboards_moderator_Tests_AddingTests_TypeTests_FirstClick_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AnswerBlock",
  data: function data() {
    return {
      valueAnswer: ''
    };
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    remove: function remove() {
      console.log('delete ', this.id, ' answer');
      this.$emit('remove', this.id);
    }
  },
  watch: {
    valueAnswer: function valueAnswer(val) {
      this.$emit('change', {
        val: val,
        id: this.id
      });
    }
  },
  computed: {
    setValueAnswer: function setValueAnswer() {
      this.valueAnswer = this.$props.value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    }
  },
  methods: {
    remove: function remove() {
      this.$emit('remove-question', this.id);
    },
    removeAnswer: function removeAnswer(idAnswer) {
      this.$emit('remove-answer', {
        id: this.id,
        idAnswer: idAnswer
      });
    },
    addAnswer: function addAnswer(answers) {
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
    },
    getIconsType: function getIconsType() {
      if (this.type === _enums__WEBPACK_IMPORTED_MODULE_0__["default"].typeQuestion.Text) {
        return "<i class=\"bx bx-receipt\"></i>";
      } else if (this.type === _enums__WEBPACK_IMPORTED_MODULE_0__["default"].typeQuestion.CheckBox) {
        return "<i class=\"bx bx-checkbox\"></i>" + "<i class=\"bx bx-checkbox-checked\"></i>" + "<i class=\"bx bx-checkbox-checked\"></i>";
      } else if (this.type === _enums__WEBPACK_IMPORTED_MODULE_0__["default"].typeQuestion.Radio) {
        return "<i class=\"bx bx-radio-circle\"></i>" + "<i class=\"bx bx-radio-circle-marked\"></i>" + "<i class=\"bx bx-radio-circle\"></i>";
      } else {
        return "Ответ по шкале";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  name: "CheckboxQuestion",
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Questions_SectionQuestions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Questions/SectionQuestions */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue");
/* harmony import */ var _FileLoader_FileLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../FileLoader/FileLoader */ "./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../enums */ "./resources/js/enums.js");
/* harmony import */ var _FileLoader_TypesFileLoader_SingleFileLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../FileLoader/TypesFileLoader/SingleFileLoader */ "./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue");
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
  name: "FirstClick",
  components: {
    SingleFileLoader: _FileLoader_TypesFileLoader_SingleFileLoader__WEBPACK_IMPORTED_MODULE_3__["default"],
    FileLoader: _FileLoader_FileLoader__WEBPACK_IMPORTED_MODULE_1__["default"],
    SectionQuestions: _Questions_SectionQuestions__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      textInstruction: '',
      typeFL: _enums__WEBPACK_IMPORTED_MODULE_2__["default"].typeFileLoader
    };
  },
  props: {
    dataTest: Object
  },
  methods: {
    addQuestionBlock: function addQuestionBlock(newQuestion) {
      this.dataTest.questions.push(newQuestion);
    },
    removeQuestionBlock: function removeQuestionBlock(idRemovingQuestion) {
      //console.log(idRemovingQuestion)
      this.dataTest.questions = this.dataTest.questions.filter(function (el) {
        return el.id !== idRemovingQuestion;
      }); //console.log(this.questions)
    }
  },
  watch: {
    textInstruction: function textInstruction() {
      this.$parent.$emit('changeInstruction', this.textInstruction);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../enums */ "./resources/js/enums.js");
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FileLoader",
  data: function data() {
    return {
      file: ''
    };
  },
  props: {
    typeFileLoader: _enums__WEBPACK_IMPORTED_MODULE_0__["default"].typeFileLoader,
    navigation: {
      type: Boolean,
      "default": false
    },
    imageFile: {
      type: String
    },
    areas: {
      type: Array
    }
  },
  methods: {
    addArea: function addArea() {
      this.$emit('add-area');
    },
    changeFile: function changeFile(file) {
      this.file = file;
    }
  },
  computed: {
    setTypeFileLoader: function setTypeFileLoader() {
      var nameFileLoaderComponent = '';

      if (this.typeFileLoader === _enums__WEBPACK_IMPORTED_MODULE_0__["default"].typeFileLoader.Single) {
        nameFileLoaderComponent = 'SingleFileLoader';
      } else {
        nameFileLoaderComponent = 'MultiplyFileLoader';
      }

      return function () {
        return __webpack_require__("./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader lazy recursive ^\\.\\/.*$")("./".concat(nameFileLoaderComponent));
      };
    }
  },
  watch: {
    file: function file() {
      this.$emit('changeFile', this.file);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AnswerBlock_vue_vue_type_template_id_39360d01_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnswerBlock.vue?vue&type=template&id=39360d01&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue?vue&type=template&id=39360d01&scoped=true&");
/* harmony import */ var _AnswerBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnswerBlock.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AnswerBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnswerBlock_vue_vue_type_template_id_39360d01_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AnswerBlock_vue_vue_type_template_id_39360d01_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "39360d01",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckboxQuestion_vue_vue_type_template_id_503a28ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckboxQuestion.vue?vue&type=template&id=503a28ba&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue?vue&type=template&id=503a28ba&scoped=true&");
/* harmony import */ var _CheckboxQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxQuestion.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CheckboxQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckboxQuestion_vue_vue_type_template_id_503a28ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CheckboxQuestion_vue_vue_type_template_id_503a28ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "503a28ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileLoader_vue_vue_type_template_id_68133b92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileLoader.vue?vue&type=template&id=68133b92&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue?vue&type=template&id=68133b92&scoped=true&");
/* harmony import */ var _FileLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileLoader.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileLoader_vue_vue_type_template_id_68133b92_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileLoader_vue_vue_type_template_id_68133b92_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "68133b92",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnswerBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AnswerBlock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnswerBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionQuestions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionQuestions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionQuestions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckboxQuestion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstClick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FirstClick.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstClick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleFileLoader_vue_vue_type_style_index_0_id_a7ce4cfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleFileLoader.vue?vue&type=style&index=0&id=a7ce4cfe&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=style&index=0&id=a7ce4cfe&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue?vue&type=template&id=39360d01&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue?vue&type=template&id=39360d01&scoped=true& ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnswerBlock_vue_vue_type_template_id_39360d01_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnswerBlock_vue_vue_type_template_id_39360d01_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnswerBlock_vue_vue_type_template_id_39360d01_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AnswerBlock.vue?vue&type=template&id=39360d01&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue?vue&type=template&id=39360d01&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=template&id=15718759&scoped=true&":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=template&id=15718759&scoped=true& ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionQuestions_vue_vue_type_template_id_56706046_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionQuestions_vue_vue_type_template_id_56706046_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionQuestions_vue_vue_type_template_id_56706046_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionQuestions.vue?vue&type=template&id=56706046&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue?vue&type=template&id=56706046&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue?vue&type=template&id=503a28ba&scoped=true&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue?vue&type=template&id=503a28ba&scoped=true& ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxQuestion_vue_vue_type_template_id_503a28ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxQuestion_vue_vue_type_template_id_503a28ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxQuestion_vue_vue_type_template_id_503a28ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckboxQuestion.vue?vue&type=template&id=503a28ba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue?vue&type=template&id=503a28ba&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=template&id=0219e729&scoped=true&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=template&id=0219e729&scoped=true& ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstClick_vue_vue_type_template_id_d6a796c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstClick_vue_vue_type_template_id_d6a796c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FirstClick_vue_vue_type_template_id_d6a796c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FirstClick.vue?vue&type=template&id=d6a796c8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/FirstClick.vue?vue&type=template&id=d6a796c8&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue?vue&type=template&id=68133b92&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue?vue&type=template&id=68133b92&scoped=true& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileLoader_vue_vue_type_template_id_68133b92_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileLoader_vue_vue_type_template_id_68133b92_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileLoader_vue_vue_type_template_id_68133b92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileLoader.vue?vue&type=template&id=68133b92&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue?vue&type=template&id=68133b92&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=template&id=a7ce4cfe&scoped=true&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=template&id=a7ce4cfe&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleFileLoader_vue_vue_type_template_id_a7ce4cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleFileLoader_vue_vue_type_template_id_a7ce4cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleFileLoader_vue_vue_type_template_id_a7ce4cfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleFileLoader.vue?vue&type=template&id=a7ce4cfe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=template&id=a7ce4cfe&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue?vue&type=template&id=39360d01&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/AnswerBlock.vue?vue&type=template&id=39360d01&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { staticClass: "answer-block flex items-center" },
    [
      _c(
        "span",
        { staticClass: "px-2 text-slate-300 text-sm" },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full",
        attrs: { primary: "", placeholder: "текст варианта" },
        model: {
          value: _vm.valueAnswer,
          callback: function ($$v) {
            _vm.valueAnswer = $$v
          },
          expression: "valueAnswer",
        },
      }),
      _vm._v(" "),
      _c(
        "vs-button",
        { attrs: { danger: "", transparent: "" }, on: { click: _vm.remove } },
        [_c("i", { staticClass: "bx bx-trash" })]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=template&id=15718759&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/QuestionBlock.vue?vue&type=template&id=15718759&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
          _c("div", { staticClass: "type flex" }, [
            _c(
              "span",
              { staticClass: "text-sm text-slate-400 font-normal mr-2" },
              [_vm._t("default"), _vm._v("." + _vm._s(_vm.getTypeToText))],
              2
            ),
            _vm._v(" "),
            _c("div", {
              staticClass: "icon flex text-slate-400 items-center",
              domProps: { innerHTML: _vm._s(_vm.getIconsType()) },
            }),
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "section-question" }, [
    _vm.questions.length !== 0
      ? _c(
          "main",
          { staticClass: "questions flex flex-col space-y-2" },
          _vm._l(_vm.questions, function (question, index) {
            return _c(
              "question-block",
              {
                key: question.id,
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
              },
              [_vm._v("\n            " + _vm._s(++index) + "\n        ")]
            )
          }),
          1
        )
      : _c(
          "div",
          {
            staticClass:
              "empty-screens border-2 p-6 rounded-lg border-slate-100 text-slate-400 text-sm flex items-center justify-center",
          },
          [
            _c("i", { staticClass: "bx bx-info-circle mr-1" }),
            _vm._v(" "),
            _c("span", { staticClass: "pb-1" }, [
              _vm._v("список вопросов пуст"),
            ]),
          ]
        ),
    _vm._v(" "),
    _c(
      "footer",
      [
        _c(
          "vs-button",
          {
            staticClass: "w-full",
            attrs: { transparent: "", success: "" },
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
                        _c("i", { staticClass: "bx bx-select-multiple left" }),
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue?vue&type=template&id=503a28ba&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/CheckboxQuestion.vue?vue&type=template&id=503a28ba&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
            return _c(
              "answer-block",
              {
                key: answer.id,
                attrs: { id: answer.id, value: answer.value },
                on: { remove: _vm.removeAnswer, change: _vm.changeDataAnswer },
              },
              [_vm._v(_vm._s(++index))]
            )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=template&id=0219e729&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/TypeQuestions/RadioButtonQuestion.vue?vue&type=template&id=0219e729&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
            return _c(
              "answer-block",
              {
                key: answer.id,
                attrs: { id: answer.id, value: answer.value },
                on: { remove: _vm.removeAnswer, change: _vm.changeDataAnswer },
              },
              [_vm._v(_vm._s(++index))]
            )
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

"use strict";
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

"use strict";
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
    "section",
    { staticClass: "first-click-block flex flex-col space-y-4" },
    [
      _vm._m(0),
      _vm._v(" "),
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
              value: _vm.dataTest.instruction,
              callback: function ($$v) {
                _vm.$set(_vm.dataTest, "instruction", $$v)
              },
              expression: "dataTest.instruction",
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
          _c("h2", { staticClass: "font-medium text-base mb-2" }, [
            _vm._v("Дизайн"),
          ]),
          _vm._v(" "),
          _c("single-file-loader"),
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
            attrs: { questions: _vm.dataTest.questions },
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
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "header",
      {
        staticClass:
          "flex items-center justify-center text-lg font-medium border-b border-slate-100 pb-4",
      },
      [
        _c(
          "div",
          {
            staticClass:
              "p-2 px-3 rounded-lg flex items-center justify-center bg-yellow-500 mr-3\n                shadow-lg shadow-yellow-500/50",
          },
          [_c("i", { staticClass: "bx bxs-pointer text-white text-sm" })]
        ),
        _vm._v("\n            Тест первого клика\n        "),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue?vue&type=template&id=68133b92&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/FileLoader.vue?vue&type=template&id=68133b92&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { staticClass: "file-loader flex flex-col space-y-2" },
    [
      _c(_vm.setTypeFileLoader, {
        tag: "component",
        attrs: {
          navigation: _vm.navigation,
          imageFile: _vm.file,
          areas: _vm.areas,
        },
        on: { "add-area": _vm.addArea, changeFile: _vm.changeFile },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=template&id=a7ce4cfe&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue?vue&type=template&id=a7ce4cfe&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader lazy recursive ^\\.\\/.*$":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/ lazy ^\.\/.*$ namespace object ***!
  \***********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./MultiplyFileLoader": [
		"./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/MultiplyFileLoader.vue",
		"resources_js_components_dashboards_moderator_Tests_FileLoader_TypesFileLoader_MultiplyFileLoa-ea46a7"
	],
	"./MultiplyFileLoader.vue": [
		"./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/MultiplyFileLoader.vue",
		"resources_js_components_dashboards_moderator_Tests_FileLoader_TypesFileLoader_MultiplyFileLoa-ea46a7"
	],
	"./SingleFileLoader": [
		"./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue",
		"resources_js_components_dashboards_moderator_Tests_FileLoader_TypesFileLoader_SingleFileLoader_vue"
	],
	"./SingleFileLoader.vue": [
		"./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue",
		"resources_js_components_dashboards_moderator_Tests_FileLoader_TypesFileLoader_SingleFileLoader_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

}]);