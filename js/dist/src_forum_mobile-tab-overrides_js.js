"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_forum_mobile-tab-overrides_js"],{

/***/ "./src/forum/mobile-tab-overrides.js":
/*!*******************************************!*\
  !*** ./src/forum/mobile-tab-overrides.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _acpl_mobile_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acpl-mobile-tab */ "@acpl-mobile-tab");
/* harmony import */ var _acpl_mobile_tab__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_acpl_mobile_tab__WEBPACK_IMPORTED_MODULE_1__);


var MobileTab = _acpl_mobile_tab__WEBPACK_IMPORTED_MODULE_1__.components.MobileTab,
  MobileTabItem = _acpl_mobile_tab__WEBPACK_IMPORTED_MODULE_1__.components.MobileTabItem;
console.log("componentimported");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  console.log("defualt module run");
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)(MobileTab.prototype, 'items', function (items) {
    console.log("Extending mobile tab");
    // Remove item
    items.remove('tags');
    // Add new item
    items.add('categories', m(MobileTabItem, {
      href: app.route('categories'),
      icon: "fas fa-label",
      label: app.translator.trans('my-ext.forum.my-item')
    }), 90);
  });
});

/***/ })

}]);
//# sourceMappingURL=src_forum_mobile-tab-overrides_js.js.map