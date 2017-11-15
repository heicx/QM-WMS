webpackJsonp([0],{

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(57),
  /* scopeId */
  "data-v-a313b65e",
  /* cssModules */
  null
)
Component.options.__file = "/Project/Github/QM-WMS/src/views/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a313b65e", Component.options)
  } else {
    hotAPI.reload("data-v-a313b65e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      orderForm: {
        value: ''
      },
      orderColumns: [{
        title: '订单号',
        width: 140,
        align: 'center',
        key: 'orderId'
      }, {
        title: '用户名',
        align: 'center',
        key: 'userName'
      }, {
        title: '联系方式',
        align: 'center',
        key: 'telphone'
      }, {
        title: '收货地址',
        align: 'center',
        key: 'address'
      }, {
        title: '商品名称',
        align: 'center',
        key: 'goodsName'
      }, {
        title: '商品价格',
        align: 'center',
        key: 'price'
      }, {
        title: '订单状态',
        align: 'center',
        key: 'status'
      }, {
        title: '下单时间',
        align: 'center',
        key: 'createTime'
      }, {
        title: '操作',
        key: 'action',
        width: 150,
        align: 'center',
        render: (h, params) => {
          return h('div', [h('Button', {
            props: {
              type: 'primary',
              size: 'small'
            },
            style: {
              marginRight: '5px'
            },
            on: {
              click: () => {
                this.show(params.index);
              }
            }
          }, '查看'), h('Button', {
            props: {
              type: 'error',
              size: 'small'
            },
            on: {
              click: () => {
                this.remove(params.index);
              }
            }
          }, '删除')]);
        }
      }],
      orderData: [{
        orderId: 'CX0007008120198',
        userName: 'heicx_sudo',
        telphone: '139****9908',
        address: '北京市朝阳区望京北路 1 号',
        goodsName: '滑步车',
        price: 1799,
        status: 1,
        createTime: '2017-10-10'
      }]
    };
  }
});

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('Row', {
    staticClass: "index-wrap",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "24"
    }
  }, [_vm._v("欢迎")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a313b65e", module.exports)
  }
}

/***/ })

});