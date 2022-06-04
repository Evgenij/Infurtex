(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_dashboards_moderator_Tests_AddingTests_TypeTests_Navigation_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PictureAreas_PictureAreas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PictureAreas/PictureAreas */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AreasManager",
  components: {
    PictureAreas: _PictureAreas_PictureAreas__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      stateManager: {
        active: false
      }
    };
  },
  props: {
    active: {
      type: Boolean,
      "default": false
    },
    data: {
      type: Object,
      required: true
    },
    areasList: {
      type: Array
    }
  },
  methods: {
    closingManager: function closingManager() {
      this.$emit('closing', false);
    },
    getListAreas: function getListAreas(value) {
      this.data.areas = value;
    }
  },
  watch: {
    active: function active(val) {
      this.stateManager.active = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TargetArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TargetArea */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PictureAreas",
  data: function data() {
    return {
      colorsAreas: ['#ff6e33', '#40d85c', '#63b3ff', '#d68cff', '#1db7a7', '#eacc36'],
      mousedown: false,
      // state mouse down event
      originImgSize: {
        // root size image
        w: 0,
        h: 0,
        r: 0
      },
      url: this.cropUrl,
      posImg: {
        // position box image in screen
        top: 0,
        left: 0
      },
      scrollLeft: 0,
      scrollTop: 0,
      areas: [],
      moveTempX: 0,
      moveTempY: 0,
      moveCurrentX: 0,
      moveCurrentY: 0,
      temp: 0,
      dragdown: false,
      // state mouse event drag,
      move: false
    };
  },
  props: {
    cropUrl: {
      type: String,
      // default: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/45585072_925043081015026_6599956628924006400_o.jpg?_nc_cat=108&_nc_oc=AQlJUcFj4S_wGeX016thVhmgINU5wDV4xPBNSCIcYSti9Sm5WEPBDYO_kxK4aRP0Emo&_nc_ht=scontent.fhan2-3.fna&oh=052bb05956a1460d014205754da5a15b&oe=5DCC1053'
      "default": 'https://avatars.mds.yandex.net/i?id=e579939053592af27374094201442765-5869113-images-thumbs&n=13&exp=1'
    },
    posCorrection: {
      type: Boolean,
      "default": false
    },
    listAreas: {
      type: Array,
      required: true
    }
  },
  components: {
    TargetArea: _TargetArea__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {},
  beforeMount: function beforeMount() {
    this.areas = this.listAreas;
  },
  watch: {
    cropUrl: function cropUrl(val) {
      var _this2 = this;

      this.url = val;
      setTimeout(function () {
        _this2.setSize();
      }, 200);
    },
    // send data to parent when list areas change
    areas: function areas() {
      var _this3 = this;

      setTimeout(function () {
        _this3.getListAreas();
      }, 200);
    } // listAreas(){
    //     console.log('picture-areas watcher', this.areas, this.listAreas)
    //     this.areas = this.listAreas
    // }

  },
  methods: {
    areaDisplayPosX: function areaDisplayPosX(area) {
      return area.x + (this.posCorrection ? this.posImg.left : 0);
    },
    areaDisplayPosY: function areaDisplayPosY(area) {
      return area.y + (this.posCorrection ? this.posImg.top : 0);
    },
    mousePosX: function mousePosX(e) {
      return e.pageX - this.posImg.left;
    },
    mousePosY: function mousePosY(e) {
      return e.pageY - this.posImg.top;
    },
    setSize: function setSize() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var imgSize;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this4.url) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return _this4.getSize(_this4.url);

              case 4:
                imgSize = _context.sent;
                _this4.originImgSize = imgSize;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // Get the size of the src image
    getSize: function getSize(src) {
      var _this = this;

      var img = this.$el.querySelector('#c-crop--hide_img');
      return new Promise(function (resolve) {
        if (src && img) {
          img.onload = function () {
            // Compatible with unacceptable size
            var size = _this.getSizeImg(img);

            resolve(size);
          };

          img.src = src;
        } else {
          resolve({
            w: 0,
            h: 0,
            r: 0
          });
        }
      });
    },
    getSizeImg: function getSizeImg(img) {
      var w = img.width;
      var h = img.height;
      var r = w === 0 && h === 0 ? 0 : w / h;
      return {
        w: w,
        h: h,
        r: r
      };
    },
    calcPosOfBox: function calcPosOfBox() {
      // set posImg static
      var imageAreaRef = this.$refs['image-area'];
      this.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var imageAreaTop, imageAreaLeft;

      try {
        imageAreaTop = imageAreaRef.getBoundingClientRect().top;
        imageAreaLeft = imageAreaRef.getBoundingClientRect().left;
      } catch (e) {}

      this.posImg.top = imageAreaTop + this.scrollTop;
      this.posImg.left = imageAreaLeft + this.scrollLeft;
    },
    // draw rectangle on image mouseDown mouseMove mouseUp
    mouseDown: function mouseDown(e) {
      this.mousedown = true;
      var newAreaId = null;

      if (this.areas.length === 0) {
        var newArea = {
          id: 1,
          x: this.mousePosX(e),
          y: this.mousePosY(e),
          color: this.colorsAreas[this.getRandomInt(0, this.colorsAreas.length)],
          width: 0,
          height: 0,
          z: 0,
          resizable: true,
          screen: {
            id: 0,
            name: ''
          },
          name: '№1'
        };
        this.areas.push(newArea);
        this.temp = newArea.id;
      } else if (this.areas.length <= this.colorsAreas.length) {
        // last area id + 1
        newAreaId = this.areas.slice(-1).pop().id + 1;
        var _newArea = {
          id: newAreaId,
          x: this.mousePosX(e),
          y: this.mousePosY(e),
          color: this.colorsAreas[this.getRandomInt(0, this.colorsAreas.length)],
          width: 0,
          height: 0,
          z: 0,
          resizable: true,
          screen: {
            id: 0,
            name: ''
          },
          name: '№' + newAreaId
        };
        this.areas.push(_newArea);
        this.temp = _newArea.id;
      }
    },
    mouseMove: function mouseMove(e) {
      var _this5 = this;

      if (this.mousedown && this.areas.length <= this.colorsAreas.length) {
        this.areas.filter(function (x) {
          return x.id === _this5.temp;
        }).map(function (item) {
          if (e.pageX - item.x < 0 || e.pageY - item.y < 0) {
            item.width = 50;
            item.height = 50;
          } else {
            item.width = e.pageX - item.x - _this5.posImg.left - 8;
            item.height = e.pageY - item.y - _this5.posImg.top - 8;
          }
        });
      }
    },
    mouseUp: function mouseUp() {
      this.mousedown = false; // delete all point width is = 0

      this.areas = this.areas.filter(function (item) {
        return item.width !== 0 || item.height !== 0;
      });
    },
    // after click rectangle area select active resizable and dragable
    changeResizable: function changeResizable(id) {
      this.areas.filter(function (item) {
        return item.id === id;
      }).map(function (item) {
        item.resizable = true;
        item.z = 100;
      });
      this.areas.filter(function (item) {
        return item.id !== id;
      }).map(function (item) {
        item.resizable = false;
        item.z = 0;
      });
    },
    // delete item area
    deleteSelected: function deleteSelected(id) {
      this.areas = this.areas.filter(function (item) {
        return item.id !== id;
      });
    },
    // drag point around rectangle on image startDrag doDrag endDrag
    startDrag: function startDrag() {
      this.dragdown = true;
    },
    doDrag: function doDrag(item, type, e) {
      if (this.dragdown) {
        switch (type) {
          case 'sw':
            // fix drag outside box sw position
            if (e.pageX - this.posImg.left >= 0) {
              item.width = item.width + item.x - e.pageX + this.posImg.left;
              item.x = e.pageX - this.posImg.left;
            }

            if (e.pageY - this.posImg.top <= this.originImgSize.h) {
              item.height = e.pageY - this.posImg.top - item.y;
            } // fix minimum area


            if (item.width < 10) {
              item.x = item.x - 10;
              item.width = item.width + 10;
            }

            if (item.height < 10) {
              item.height = item.height + 10;
            }

            break;

          case 'se':
            // fix drag outside box se position
            if (e.pageX - this.posImg.left <= this.originImgSize.w) {
              item.width = e.pageX - this.posImg.left - item.x;
            }

            if (e.pageY - this.posImg.top <= this.originImgSize.h) {
              item.height = e.pageY - this.posImg.top - item.y;
            } // fix minimum area


            if (item.width < 10) {
              item.x = item.x - 10;
              item.width = item.width + 10;
            }

            if (item.height < 10) {
              item.height = item.height + 10;
            }

            break;

          case 'ne':
            // fix drag outside box ne position
            if (e.pageX - this.posImg.left <= this.originImgSize.w) {
              item.width = e.pageX - this.posImg.left - item.x;
            }

            if (e.pageY - this.posImg.top >= 0) {
              item.height = item.height + (item.y + this.posImg.top - e.pageY);
              item.y = e.pageY - this.posImg.top;
            } // fix minimum area


            if (item.width < 10) {
              item.x = item.x - 10;
              item.width = item.width + 10;
            }

            if (item.height < 10) {
              item.height = item.height + 10;
            }

            break;

          case 'nw':
            // fix drag outside box nw position
            if (e.pageY - this.posImg.top >= 0) {
              item.height = item.height + (item.y + this.posImg.top - e.pageY);
              item.y = e.pageY - this.posImg.top;
            }

            if (e.pageX - this.posImg.left >= 0) {
              item.width = item.width + item.x - e.pageX + this.posImg.left;
              item.x = e.pageX - this.posImg.left;
            } // fix minimum area


            if (item.width < 10) {
              item.x = item.x - 10;
              item.width = item.width + 10;
            }

            if (item.height < 10) {
              item.height = item.height + 10;
            }

            break;

          default:
            break;
        }
      }
    },
    endDrag: function endDrag() {
      this.dragdown = false;
    },
    // move rectangle area startMove doMove endMove
    startMove: function startMove(item, e) {
      this.move = true;
      this.moveTempX = e.clientX;
      this.moveTempY = e.clientY;
      this.moveCurrentX = item.x;
      this.moveCurrentY = item.y;
    },
    doMove: function doMove(item, e) {
      if (this.move) {
        var x = this.moveCurrentX + (e.clientX - this.moveTempX);
        var y = this.moveCurrentY + (e.clientY - this.moveTempY);
        var maxX = this.originImgSize.w - item.width;
        var maxY = this.originImgSize.h - item.height;

        if (x > 0 && y > 0 && x < maxX && y < maxY) {
          item.x = x;
          item.y = y;
        }
      }
    },
    endMove: function endMove() {
      this.move = false;
    },
    // send data from child to parent $emit
    getListAreas: function getListAreas() {
      this.$emit('getListAreas', this.areas);
    }
  },
  mounted: function mounted() {
    this.setSize();
    window.addEventListener('mousemove', this.calcPosOfBox);
    window.addEventListener('scroll', this.calcPosOfBox);
    this.calcPosOfBox();
    window.addEventListener('mouseup', this.mouseUp);
    window.addEventListener('mouseup', this.endMove);
    window.addEventListener('mouseup', this.endDrag);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "TargetArea",
  data: function data() {
    return {
      pos: null
    };
  },
  props: {
    item: {
      type: Object,
      "default": function _default() {
        return {
          id: 0,
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          z: 0,
          resizable: false
        };
      }
    },
    posCorrection: {
      type: Boolean,
      "default": true
    },
    posImg: {
      type: Object,
      "default": null
    },
    color: {
      type: String,
      "default": 'white'
    }
  },
  methods: {
    displayPosX: function displayPosX(item) {
      return item.x + (this.posCorrection ? this.posImg.left : 0);
    },
    displayPosY: function displayPosY(item) {
      return item.y + (this.posCorrection ? this.posImg.top : 0);
    },
    startDrag: function startDrag(item, type) {
      this.pos = type;
      document.addEventListener('mousemove', this.doDrag);
      this.$emit('startDrag');
    },
    doDrag: function doDrag(e) {
      this.$emit('doDrag', this.item, this.pos, e);
    }
  },
  updated: function updated() {
    if (this.item.resizable === false) {
      window.addEventListener('mouseup', document.removeEventListener('mousemove', this.doDrag));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AreasManager_AreasManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AreasManager/AreasManager */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue");
/* harmony import */ var _FileLoader_TypesFileLoader_SingleFileLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FileLoader/TypesFileLoader/SingleFileLoader */ "./resources/js/components/dashboards/moderator/Tests/FileLoader/TypesFileLoader/SingleFileLoader.vue");
//
//
//
//
//
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
  name: "NavigationScreen",
  components: {
    SingleFileLoader: _FileLoader_TypesFileLoader_SingleFileLoader__WEBPACK_IMPORTED_MODULE_1__["default"],
    AreasManager: _AreasManager_AreasManager__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      activeAreasManager: false,
      nameScreen: '',
      data: {
        img: '',
        areas: []
      }
    };
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    areasList: {
      type: Array
    }
  },
  mounted: function mounted() {
    this.nameScreen = this.name;
  },
  methods: {
    closing: function closing(val) {
      this.activeAreasManager = val;
    },
    changeFile: function changeFile(file) {
      this.data.img = file;
      this.data.areas = [];
      this.$emit('set-data', {
        id: this.id,
        data: this.data
      });
    },
    remove: function remove() {
      this.$emit('remove', this.id);
    },
    getNameScreen: function getNameScreen(idScreen) {
      return this.screensList.filter(function (screen) {
        return screen.id === idScreen;
      })[0].name;
    }
  },
  watch: {
    nameScreen: function nameScreen(val) {
      this.$emit('change-name', {
        id: this.id,
        val: val
      });
    },
    'data.areas': function dataAreas(val) {
      var _this = this;

      val.forEach(function (item) {
        if (item.screen.id !== 0) {
          item.screen.name = _this.getNameScreen(item.screen.id);
        } else {
          item.screen.name = 'Не выбрано';
        }
      }); //this.data.areas = this.data.areas.filter(screen => screen.id === val)[0].screen = "yyyyes!"
      //console.table(this.data.areas)
    }
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Questions_SectionQuestions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Questions/SectionQuestions */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/Questions/SectionQuestions.vue");
/* harmony import */ var _NavigationScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavigationScreen */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    NavigationScreen: _NavigationScreen__WEBPACK_IMPORTED_MODULE_1__["default"],
    SectionQuestions: _Questions_SectionQuestions__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      textInstruction: '',
      questions: [],
      screens: []
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
    },
    changeNameScreen: function changeNameScreen(data) {
      this.screens.filter(function (screen) {
        return screen.id === data.id;
      })[0].name = data.val; //this.questions.filter(el=>el.id === obj.id)[0].text = obj.text
    },
    setDataScreen: function setDataScreen(obj) {
      this.screens.filter(function (screen) {
        return screen.id === obj.id;
      })[0].data = obj.data;
    },
    addScreen: function addScreen() {
      var idScreen = this.screens.length + 1;
      this.screens.push({
        id: idScreen,
        name: 'Экран №' + idScreen,
        data: {}
      });
      this.openNotification('top-center', 'success', "<i class='bx bx-check'></i>");
    },
    removeScreen: function removeScreen(id) {
      this.screens = this.screens.filter(function (screen) {
        return screen.id !== id;
      });
    },
    openNotification: function openNotification() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var color = arguments.length > 1 ? arguments[1] : undefined;
      var icon = arguments.length > 2 ? arguments[2] : undefined;
      var noti = this.$vs.notification({
        icon: icon,
        color: color,
        position: position,
        title: 'Экран добавлен!',
        text: "\u041D\u043E\u0432\u044B\u0439 \u044D\u043A\u0440\u0430\u043D \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0441\u043F\u0438\u0441\u043E\u043A"
      });
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=style&index=0&id=39fd39a3&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=style&index=0&id=39fd39a3&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".link-to-screen[data-v-39fd39a3]:before {\n  content: \"\";\n  display: block;\n  width: 2px;\n  height: 24px;\n  background: #d1d7e0;\n  position: absolute;\n  left: 16px;\n  top: -50%;\n}\n.controls-areas[data-v-39fd39a3] {\n  min-width: 350px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=style&index=0&id=beea6dba&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=style&index=0&id=beea6dba&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.c-crop[data-v-beea6dba] {\n  display: inline-block;\n}\n.c-crop *[data-v-beea6dba] {\n  box-sizing: border-box;\n}\n.c-crop img[data-v-beea6dba] {\n  pointer-events: none;\n}\n.c-crop .c-crop--hide_main[data-v-beea6dba] {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n}\n.original-image[data-v-beea6dba] {\n  position: absolute;\n  left: 0;\n  width: 100%;\n}\n.panel-area[data-v-beea6dba] {\n  position: absolute;\n  z-index: 110;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: bold;\n}\n.panel-area.number span[data-v-beea6dba] {\n  color: white;\n  padding: 6px;\n  border-radius: 0 4px 4px 0;\n}\n.panel-area.delete span[data-v-beea6dba] {\n  color: white;\n  padding: 6px;\n  border-radius: 4px 0 0 4px;\n  cursor: pointer;\n}\n.select-areas--outline[data-v-beea6dba] {\n  border-radius: 4px;\n}\n.select-areas--delete_area[data-v-beea6dba] {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjCB0SCQuXtRLQAAABRklEQVQoz4XRMUiUcQCG8V//O6MhuuEwI4VDDg9ubDCC+ILzIgcFySEnP2wOkqDRMffAa+3wpqDBSRAPp6MlC+yTFsnS0EzBursp8ECHS3AIetYXXnjfhy5B2SuJlpZPKkaEbnAJDJh33w/v7SLntpvq5uz5G69IPFWUlZGRVTQrsaK/W74o8UiftHPS+kxJVIWUkucWLHvilkO/kfdY5K2OaR+DSQfqjrWNmzFkyIxxbcdWHZpMi7xzpGNJxl29KGhY0nFk3b0gZ0cH22q2lJVtqdnGiW9ywX8Idg3qQV6sYM2aglgePQbtpDXc0avpoUhDDbFIy0vXDWuk/BH76avIpje++OW7lGs+mzBqnqAqMfWPoza9FlJOfVAy5kTTqcuuuCpnwqx9z7S7svq98MDBBVk31M3Zv7hmRMWGpqYNC0rnus8AXqJjvC9MrWIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDgtMjlUMTY6MDk6MTErMDI6MDDV30hTAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA4LTI5VDE2OjA5OjExKzAyOjAwpILw7wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: white;\n  cursor: pointer;\n  border-radius: 100%;\n  height: 20px;\n  width: 20px;\n}\n.delete-area[data-v-beea6dba] {\n  position: absolute;\n  cursor: pointer;\n  padding: 5px;\n}\n.image-decorator *[data-v-beea6dba] {\n  -webkit-user-select: none;\n  /* user-select -- это нестандартное свойство */\n  -moz-user-select: none;\n  /* поэтому нужны префиксы */\n  -ms-user-select: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=style&index=0&id=74132d79&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=style&index=0&id=74132d79&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".select-areas-resize-handler[data-v-74132d79] {\n  position: absolute;\n  display: block;\n  background: white;\n  height: 12px;\n  width: 12px;\n  overflow: hidden;\n  border-radius: 2px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=style&index=0&id=39fd39a3&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=style&index=0&id=39fd39a3&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AreasManager_vue_vue_type_style_index_0_id_39fd39a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AreasManager.vue?vue&type=style&index=0&id=39fd39a3&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=style&index=0&id=39fd39a3&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AreasManager_vue_vue_type_style_index_0_id_39fd39a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AreasManager_vue_vue_type_style_index_0_id_39fd39a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=style&index=0&id=beea6dba&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=style&index=0&id=beea6dba&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PictureAreas_vue_vue_type_style_index_0_id_beea6dba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PictureAreas.vue?vue&type=style&index=0&id=beea6dba&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=style&index=0&id=beea6dba&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PictureAreas_vue_vue_type_style_index_0_id_beea6dba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PictureAreas_vue_vue_type_style_index_0_id_beea6dba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=style&index=0&id=74132d79&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=style&index=0&id=74132d79&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetArea_vue_vue_type_style_index_0_id_74132d79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TargetArea.vue?vue&type=style&index=0&id=74132d79&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=style&index=0&id=74132d79&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetArea_vue_vue_type_style_index_0_id_74132d79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetArea_vue_vue_type_style_index_0_id_74132d79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AreasManager_vue_vue_type_template_id_39fd39a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AreasManager.vue?vue&type=template&id=39fd39a3&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=template&id=39fd39a3&scoped=true&");
/* harmony import */ var _AreasManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AreasManager.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=script&lang=js&");
/* harmony import */ var _AreasManager_vue_vue_type_style_index_0_id_39fd39a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AreasManager.vue?vue&type=style&index=0&id=39fd39a3&lang=scss&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=style&index=0&id=39fd39a3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AreasManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AreasManager_vue_vue_type_template_id_39fd39a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AreasManager_vue_vue_type_template_id_39fd39a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "39fd39a3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PictureAreas_vue_vue_type_template_id_beea6dba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PictureAreas.vue?vue&type=template&id=beea6dba&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=template&id=beea6dba&scoped=true&");
/* harmony import */ var _PictureAreas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PictureAreas.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=script&lang=js&");
/* harmony import */ var _PictureAreas_vue_vue_type_style_index_0_id_beea6dba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PictureAreas.vue?vue&type=style&index=0&id=beea6dba&lang=scss&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=style&index=0&id=beea6dba&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PictureAreas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PictureAreas_vue_vue_type_template_id_beea6dba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PictureAreas_vue_vue_type_template_id_beea6dba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "beea6dba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TargetArea_vue_vue_type_template_id_74132d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TargetArea.vue?vue&type=template&id=74132d79&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=template&id=74132d79&scoped=true&");
/* harmony import */ var _TargetArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TargetArea.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=script&lang=js&");
/* harmony import */ var _TargetArea_vue_vue_type_style_index_0_id_74132d79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TargetArea.vue?vue&type=style&index=0&id=74132d79&lang=scss&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=style&index=0&id=74132d79&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TargetArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TargetArea_vue_vue_type_template_id_74132d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TargetArea_vue_vue_type_template_id_74132d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "74132d79",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavigationScreen_vue_vue_type_template_id_11339d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationScreen.vue?vue&type=template&id=11339d5c&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue?vue&type=template&id=11339d5c&scoped=true&");
/* harmony import */ var _NavigationScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationScreen.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavigationScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationScreen_vue_vue_type_template_id_11339d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavigationScreen_vue_vue_type_template_id_11339d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11339d5c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_6d5c0010_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=6d5c0010&scoped=true& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue?vue&type=template&id=6d5c0010&scoped=true&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_6d5c0010_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_6d5c0010_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6d5c0010",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue"
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

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AreasManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AreasManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AreasManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PictureAreas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PictureAreas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PictureAreas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TargetArea.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationScreen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=style&index=0&id=39fd39a3&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=style&index=0&id=39fd39a3&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AreasManager_vue_vue_type_style_index_0_id_39fd39a3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AreasManager.vue?vue&type=style&index=0&id=39fd39a3&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=style&index=0&id=39fd39a3&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=style&index=0&id=beea6dba&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=style&index=0&id=beea6dba&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PictureAreas_vue_vue_type_style_index_0_id_beea6dba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PictureAreas.vue?vue&type=style&index=0&id=beea6dba&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=style&index=0&id=beea6dba&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=style&index=0&id=74132d79&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=style&index=0&id=74132d79&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetArea_vue_vue_type_style_index_0_id_74132d79_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TargetArea.vue?vue&type=style&index=0&id=74132d79&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=style&index=0&id=74132d79&lang=scss&scoped=true&");


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

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=template&id=39fd39a3&scoped=true&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=template&id=39fd39a3&scoped=true& ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AreasManager_vue_vue_type_template_id_39fd39a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AreasManager_vue_vue_type_template_id_39fd39a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AreasManager_vue_vue_type_template_id_39fd39a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AreasManager.vue?vue&type=template&id=39fd39a3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=template&id=39fd39a3&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=template&id=beea6dba&scoped=true&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=template&id=beea6dba&scoped=true& ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PictureAreas_vue_vue_type_template_id_beea6dba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PictureAreas_vue_vue_type_template_id_beea6dba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PictureAreas_vue_vue_type_template_id_beea6dba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PictureAreas.vue?vue&type=template&id=beea6dba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=template&id=beea6dba&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=template&id=74132d79&scoped=true&":
/*!************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=template&id=74132d79&scoped=true& ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetArea_vue_vue_type_template_id_74132d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetArea_vue_vue_type_template_id_74132d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TargetArea_vue_vue_type_template_id_74132d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TargetArea.vue?vue&type=template&id=74132d79&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=template&id=74132d79&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue?vue&type=template&id=11339d5c&scoped=true&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue?vue&type=template&id=11339d5c&scoped=true& ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationScreen_vue_vue_type_template_id_11339d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationScreen_vue_vue_type_template_id_11339d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationScreen_vue_vue_type_template_id_11339d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationScreen.vue?vue&type=template&id=11339d5c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue?vue&type=template&id=11339d5c&scoped=true&");


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

/***/ "./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue?vue&type=template&id=6d5c0010&scoped=true&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue?vue&type=template&id=6d5c0010&scoped=true& ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_6d5c0010_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_6d5c0010_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_6d5c0010_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=6d5c0010&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue?vue&type=template&id=6d5c0010&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=template&id=39fd39a3&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/AreasManager.vue?vue&type=template&id=39fd39a3&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
    "vs-dialog",
    {
      staticClass: "h-full",
      attrs: { "overflow-hidden": "", "prevent-close": "", "full-screen": "" },
      on: { close: _vm.closingManager },
      model: {
        value: _vm.stateManager.active,
        callback: function ($$v) {
          _vm.$set(_vm.stateManager, "active", $$v)
        },
        expression: "stateManager.active",
      },
    },
    [
      _c("main", { staticClass: "flex space-x-4 h-full" }, [
        _c(
          "section",
          { staticClass: "w-4/5 overflow-y-scroll h-full rounded-lg" },
          [
            _c("picture-areas", {
              attrs: { "crop-url": _vm.data.img, listAreas: _vm.data.areas },
              on: { getListAreas: _vm.getListAreas },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "section",
          {
            staticClass:
              "controls-areas flex flex-col space-y-2 justify-between",
          },
          [
            _c("header", { staticClass: "py-3 border-b border-slate-100" }, [
              _c("h2", { staticClass: "font-bold mb-1 w-4/5" }, [
                _vm._v("Определите целевые области"),
              ]),
              _vm._v(" "),
              _c("h3", { staticClass: "text-slate-500 text-sm" }, [
                _vm._v(
                  "Для создания области зажмите левую кнопку мыши и тяните для выделения области"
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("main", { staticClass: "h-full overflow-hidden" }, [
              _c("h4", { staticClass: "font-bold text-sm mb-3" }, [
                _vm._v("Целевые области "),
                _c("span", { staticClass: "text-slate-400" }, [
                  _vm._v("(x" + _vm._s(_vm.data.areas.length) + ")"),
                ]),
              ]),
              _vm._v(" "),
              _vm.data.areas.length > 0
                ? _c(
                    "div",
                    {
                      staticClass:
                        "areas-list h-full overflow-y-scroll space-y-2 pr-3 pb-11",
                    },
                    _vm._l(_vm.data.areas, function (area) {
                      return _c(
                        "div",
                        {
                          staticClass:
                            "area flex flex-col space-y-1 rounded-lg border-2 border-slate-200 p-3",
                        },
                        [
                          _c(
                            "span",
                            {
                              staticClass:
                                "font-medium text-xs rounded-lg border-2 p-1 px-2 min-w-min",
                              style: {
                                color: area.color,
                                border: "2px solid " + area.color,
                                "margin-bottom": "30px",
                                width: "fit-content",
                              },
                            },
                            [
                              _vm._v(
                                "\n                        Целевая зона №" +
                                  _vm._s(area.id) +
                                  "\n                    "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("vs-input", {
                            staticClass: "w-full",
                            style: { "margin-bottom": "24px" },
                            attrs: {
                              placeholder: "название зоны",
                              label: "Название зоны",
                            },
                            model: {
                              value: area.name,
                              callback: function ($$v) {
                                _vm.$set(area, "name", $$v)
                              },
                              expression: "area.name",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "link-to-screen relative flex items-center",
                            },
                            [
                              _c("i", {
                                staticClass: "bx bx-link p-2 text-slate-400",
                              }),
                              _vm._v(" "),
                              _c(
                                "vs-select",
                                {
                                  staticClass: "w-full",
                                  attrs: {
                                    placeholder: "Название экрана",
                                    label: "Экран",
                                  },
                                  model: {
                                    value: area.screen.id,
                                    callback: function ($$v) {
                                      _vm.$set(area.screen, "id", $$v)
                                    },
                                    expression: "area.screen.id",
                                  },
                                },
                                [
                                  _vm._l(_vm.areasList, function (screen) {
                                    return [
                                      _c(
                                        "vs-option",
                                        {
                                          attrs: {
                                            label: screen.name,
                                            value: screen.id,
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(screen.name) +
                                              "\n                                    "
                                          ),
                                        ]
                                      ),
                                    ]
                                  }),
                                ],
                                2
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    }),
                    0
                  )
                : _c(
                    "section",
                    {
                      staticClass:
                        "flex items-center justify-center h-full text-slate-400 text-sm",
                    },
                    [
                      _c("i", { staticClass: "bx bx-info-circle mr-1" }),
                      _vm._v(" Целевые области отстутсвуют\n                "),
                    ]
                  ),
            ]),
            _vm._v(" "),
            _c(
              "footer",
              { staticClass: "buttons flex justify-end" },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "w-full",
                    attrs: { dark: "", flat: "" },
                    on: { click: _vm.closingManager },
                  },
                  [_vm._v("\n                    Отменить\n                ")]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    staticClass: "w-full",
                    attrs: { success: "" },
                    on: { click: _vm.closingManager },
                  },
                  [
                    _c("i", { staticClass: "bx bx-check" }),
                    _vm._v("\n                    Сохранить\n                "),
                  ]
                ),
              ],
              1
            ),
          ]
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=template&id=beea6dba&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/PictureAreas.vue?vue&type=template&id=beea6dba&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { ref: "image-area", staticClass: "image-decorator" }, [
    _c(
      "div",
      { staticClass: "relative" },
      [
        _vm.url
          ? _c("img", {
              staticClass: "original-image",
              attrs: { src: _vm.url, alt: "Original Image" },
            })
          : _vm._e(),
        _vm._v(" "),
        _c("div", {
          staticClass: "opacity-0 absolute cursor-crosshair",
          style: {
            "background-color": "rgb(0,0,0)",
            width: _vm.originImgSize.w + "px",
            height: _vm.originImgSize.h + "px",
          },
          on: { mousedown: _vm.mouseDown, mousemove: _vm.mouseMove },
        }),
        _vm._v(" "),
        _vm._l(_vm.areas, function (item) {
          return _c("div", { key: item.id }, [
            _c(
              "div",
              {
                on: {
                  mousedown: function ($event) {
                    $event.stopPropagation()
                    $event.preventDefault()
                    return _vm.startMove(item, $event)
                  },
                  mousemove: function ($event) {
                    return _vm.doMove(item, $event)
                  },
                },
              },
              [
                _c("div", {
                  staticClass: "select-areas--outline absolute cursor-default",
                  style: {
                    background: item.color,
                    width: item.width + 4 + "px",
                    height: item.height + 4 + "px",
                    left: _vm.areaDisplayPosX(item) - 2 + "px",
                    top: _vm.areaDisplayPosY(item) - 2 + "px",
                    "z-index": item.z,
                  },
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass:
                    "select-areas--background_area cursor-move absolute",
                  style: {
                    background:
                      "white url('" +
                      _vm.url +
                      "') -" +
                      item.x +
                      "px -" +
                      item.y +
                      "px / " +
                      _vm.originImgSize.w +
                      "px " +
                      _vm.originImgSize.h +
                      "px no-repeat",
                    opacity: 0.7,
                    width: item.width + "px",
                    height: item.height + "px",
                    left: _vm.areaDisplayPosX(item) + "px",
                    top: _vm.areaDisplayPosY(item) + "px",
                    "z-index": item.z + 2,
                  },
                  on: {
                    mouseenter: function ($event) {
                      return _vm.changeResizable(item.id)
                    },
                  },
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "panel-area number",
                    style: {
                      height: item.height + "px",
                      left: _vm.areaDisplayPosX(item) + "px",
                      top: _vm.areaDisplayPosY(item) + "px",
                    },
                  },
                  [
                    _c("span", { style: { background: item.color } }, [
                      _vm._v("\n\t\t\t\t\t\t\t" + _vm._s(item.id)),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "panel-area delete",
                    style: {
                      height: item.height + "px",
                      left:
                        _vm.areaDisplayPosX(item) + (item.width - 28) + "px",
                      top: _vm.areaDisplayPosY(item) + "px",
                    },
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "flex items-center justify-center z-10",
                        style: { background: item.color },
                        on: {
                          click: function ($event) {
                            return _vm.deleteSelected(item.id)
                          },
                        },
                      },
                      [_c("i", { staticClass: "bx bx-trash" })]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("target-area", {
                  attrs: {
                    item: item,
                    posImg: _vm.posImg,
                    "pos-correction": _vm.posCorrection,
                    color: item.color,
                  },
                  on: { startDrag: _vm.startDrag, doDrag: _vm.doDrag },
                }),
              ],
              1
            ),
          ])
        }),
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "c-crop--hide_main" }, [
      _c("img", {
        attrs: { id: "c-crop--hide_img", src: _vm.url, alt: "", width: "100%" },
      }),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=template&id=74132d79&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/AreasManager/PictureAreas/TargetArea.vue?vue&type=template&id=74132d79&scoped=true& ***!
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
  return _c("div", { staticClass: "handler" }, [
    _vm.item.resizable
      ? _c("div", {
          staticClass: "select-areas-resize-handler nw",
          style: {
            cursor: "nw-resize",
            "background-color": this.color,
            left: _vm.displayPosX(_vm.item) - 3 + "px",
            top: _vm.displayPosY(_vm.item) - 3 + "px",
            "z-index": _vm.item.z + 10,
          },
          on: {
            mousedown: function ($event) {
              $event.stopPropagation()
              $event.preventDefault()
              return _vm.startDrag(_vm.item, "nw")
            },
          },
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.item.resizable
      ? _c("div", {
          staticClass: "select-areas-resize-handler ne",
          style: {
            cursor: "ne-resize",
            "background-color": this.color,
            left: _vm.displayPosX(_vm.item) + _vm.item.width - 8 + "px",
            top: _vm.displayPosY(_vm.item) - 4 + "px",
            "z-index": _vm.item.z + 10,
          },
          on: {
            mousedown: function ($event) {
              $event.stopPropagation()
              $event.preventDefault()
              return _vm.startDrag(_vm.item, "ne")
            },
          },
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.item.resizable
      ? _c("div", {
          staticClass: "select-areas-resize-handler sw",
          style: {
            cursor: "sw-resize",
            "background-color": this.color,
            left: _vm.displayPosX(_vm.item) - 4 + "px",
            top: _vm.displayPosY(_vm.item) + _vm.item.height - 8 + "px",
            "z-index": _vm.item.z + 10,
          },
          on: {
            mousedown: function ($event) {
              $event.stopPropagation()
              $event.preventDefault()
              return _vm.startDrag(_vm.item, "sw")
            },
          },
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.item.resizable
      ? _c("div", {
          staticClass: "select-areas-resize-handler se",
          style: {
            cursor: "se-resize",
            "background-color": this.color,
            left: _vm.displayPosX(_vm.item) + _vm.item.width - 8 + "px",
            top: _vm.displayPosY(_vm.item) + _vm.item.height - 8 + "px",
            "z-index": _vm.item.z + 10,
          },
          on: {
            mousedown: function ($event) {
              $event.stopPropagation()
              $event.preventDefault()
              return _vm.startDrag(_vm.item, "se")
            },
          },
        })
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue?vue&type=template&id=11339d5c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/NavigationScreen.vue?vue&type=template&id=11339d5c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
        "navigation-screen p-3 pt-10 rounded-lg border-2 border-slate-100 flex flex-col space-y-3",
    },
    [
      _c("vs-input", {
        staticClass: "w-full",
        attrs: { placeholder: "название экрана", label: "Название экрана" },
        model: {
          value: _vm.nameScreen,
          callback: function ($$v) {
            _vm.nameScreen = $$v
          },
          expression: "nameScreen",
        },
      }),
      _vm._v(" "),
      _c("single-file-loader", {
        attrs: { navigation: true, areas: _vm.data.areas, id: _vm.id },
        on: {
          "add-area": function ($event) {
            _vm.activeAreasManager = !_vm.activeAreasManager
          },
          changeFile: _vm.changeFile,
        },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "button flex justify-end" }, [
        _c(
          "span",
          {
            staticClass:
              "text-sm text-red-400 hover:text-red-600 cursor-pointer",
            on: { click: _vm.remove },
          },
          [_vm._v("удалить экран")]
        ),
      ]),
      _vm._v(" "),
      _c("areas-manager", {
        attrs: {
          active: _vm.activeAreasManager,
          data: _vm.data,
          areas: _vm.areasList,
        },
        on: { closing: _vm.closing },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue?vue&type=template&id=6d5c0010&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboards/moderator/Tests/AddingTests/TypeTests/Navigation.vue?vue&type=template&id=6d5c0010&scoped=true& ***!
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
    "div",
    { staticClass: "navigation-block flex flex-col space-y-4" },
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
      _c("div", { staticClass: "navigation-block__screens" }, [
        _c(
          "header",
          { staticClass: "flex justify-between items-center mb-2" },
          [
            _c("h2", { staticClass: "font-medium text-base" }, [
              _vm._v("Экраны"),
            ]),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                attrs: { flat: "", success: "" },
                on: { click: _vm.addScreen },
              },
              [
                _c("i", { staticClass: "bx bx-plus left" }),
                _vm._v("\n                Добавить экран\n            "),
              ]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _vm.screens.length !== 0
          ? _c(
              "div",
              { staticClass: "screens-list flex flex-col space-y-2" },
              _vm._l(_vm.screens, function (screen, index) {
                return _c("navigation-screen", {
                  key: screen.id,
                  attrs: {
                    id: screen.id,
                    data: screen.data,
                    name: screen.name,
                    "screens-list": _vm.screens,
                  },
                  on: {
                    "change-name": _vm.changeNameScreen,
                    "set-data": _vm.setDataScreen,
                    remove: _vm.removeScreen,
                  },
                })
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
                  _vm._v("список экранов пуст"),
                ]),
              ]
            ),
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
              "p-2 px-3 rounded-lg flex items-center justify-center bg-green-500 mr-3\n            shadow-lg shadow-green-500/50",
          },
          [_c("i", { staticClass: "bx bxs-directions text-white text-sm" })]
        ),
        _vm._v("\n        Тест навигации\n    "),
      ]
    )
  },
]
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



/***/ })

}]);