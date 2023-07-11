/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui.scss":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui.scss ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  cursor: default !important;\n}\n*:focus {\n  outline: 0;\n}\n\n::selection {\n  color: #000;\n  background: rgba(24, 160, 251, 0.35);\n}\n\n::-webkit-scrollbar {\n  width: 7px;\n  height: 7px;\n  background-color: #0000;\n  padding: 1px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n::-webkit-scrollbar-corner {\n  background-color: #e5e5e5;\n}\n\nbody {\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  font-family: \"Inter\", sans-serif;\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 0.5fr 4fr 45px;\n  width: 100%;\n  height: 100%;\n}\n\n.header {\n  grid-row: 1;\n  grid-column: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #e5e5e5;\n}\n.header__title {\n  margin: 0;\n  padding: 0px 10px 0px 10px;\n  border-left: 1px solid #e5e5e5;\n  font-family: \"Inter\", sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n}\n.header__logo {\n  padding: 10px 15px 10px 10px;\n  height: 100%;\n}\n\n.section {\n  display: grid;\n  grid-gap: 4px 8px;\n  padding: 8px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.section--3x3 {\n  grid-template-columns: 0.6fr 0.6fr 1fr;\n  grid-template-rows: 30px 1fr 1fr;\n}\n.section--2x3 {\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 30px 1fr 1fr;\n}\n.section--1x2 {\n  grid-template-columns: 1fr;\n  grid-template-rows: 30px 1fr;\n}\n.section--1x2--full-size {\n  grid-column: 1;\n  grid-row: 2;\n}\n.section--hidden-overflow {\n  overflow: hidden;\n}\n.section--header-col-1 {\n  grid-row: 1;\n  grid-column: 1;\n}\n.section--header-col-2 {\n  grid-row: 1;\n  grid-column: 2;\n}\n.section--header-col-3 {\n  grid-row: 1;\n  grid-column: 3;\n}\n.section--col-1-row-1 {\n  grid-column: 1;\n  grid-row: 2;\n}\n.section--col-1-row-2 {\n  grid-column: 1;\n  grid-row: 3;\n}\n.section--col-2-row-1 {\n  grid-column: 2;\n  grid-row: 2;\n}\n.section--col-2-row-2 {\n  grid-column: 2;\n  grid-row: 3;\n}\n.section--col-3-row-1 {\n  grid-column: 3;\n  grid-row: 2;\n}\n.section--col-3-row-2 {\n  grid-column: 3;\n  grid-row: 3;\n}\n.section__header {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  color: #333333;\n}\n.section__header__checkbox {\n  filter: unset;\n  margin-left: 10px;\n}\n.section__header__checkbox:checked {\n  filter: hue-rotate(340deg) brightness(1.2);\n}\n.section__header__label {\n  font-size: 9px;\n  font-weight: 600;\n  margin-left: 1px;\n  color: #333;\n}\n.section__header--flex {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.section__header--flex--space-between {\n  justify-content: space-between;\n}\n.section__basic-input {\n  user-select: none;\n  padding: 0;\n  outline: none;\n  height: 28px;\n  max-width: 88px;\n  position: relative;\n  margin: 1px 0;\n  width: 100%;\n  color: #333;\n  fill: #333;\n  border-radius: 2px;\n  background-clip: padding-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #0000;\n  font-size: 11px;\n}\n.section__basic-input:hover {\n  border: 1px solid #e5e5e5;\n}\n.section__basic-input:focus-within {\n  border: 1px solid #18a0fb;\n}\n.section__basic-input__label {\n  font-style: normal;\n  font-weight: normal;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  height: 28px;\n  width: 28px;\n  flex: 0 0 28px;\n  line-height: 28px;\n  font-size: 11px;\n  color: #b3b3b3;\n  fill: #b3b3b3;\n}\n.section__basic-input__label svg {\n  display: block;\n  margin: auto;\n  transform: translateZ(0);\n}\n.section__basic-input__input {\n  font-size: 11px;\n  padding-left: 0;\n  margin-left: 0;\n  border: none;\n  color: #333;\n  fill: #333;\n  background-color: #0000;\n  width: 100%;\n  padding: 0 0 0 7px;\n  height: 28px;\n  background-clip: padding-box;\n  min-width: 0;\n  background-clip: padding-box;\n}\n.section__color-input {\n  user-select: none;\n  padding: 0;\n  outline: none;\n  height: 28px;\n  max-width: 144px;\n  position: relative;\n  margin: 1px 0;\n  width: 100%;\n  color: #333;\n  fill: #333;\n  border-radius: 2px;\n  background-clip: padding-box;\n  display: flex;\n  align-items: center;\n  border: 1px solid #0000;\n  font-size: 11px;\n}\n.section__color-input:hover .section__color-input__opacity__input {\n  border-left: 1px solid #e5e5e5;\n  border-radius: 0px 1px 1px 0px;\n}\n.section__color-input:hover {\n  border: 1px solid #e5e5e5;\n}\n.section__color-input:focus-within .section__color-input__opacity__input {\n  border-left: 1px solid #e5e5e5;\n  border-radius: 0px 1px 1px 0px;\n}\n.section__color-input:focus-within {\n  border: 1px solid #18a0fb;\n}\n.section__color-input__color-preview {\n  user-select: none;\n  padding: 0;\n  border: 0;\n  outline: none;\n  flex: 0 0 16px;\n  margin: 8px 0 8px 7px;\n  border-radius: 1px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  position: relative;\n  flex-shrink: 0;\n  height: 16px;\n  width: 16px;\n}\n.section__color-input__input {\n  font-size: inherit;\n  user-select: none;\n  margin: 0;\n  outline: none;\n  background-color: transparent;\n  width: 100%;\n  padding: 0 0 0 7px;\n  height: 28px;\n  border: 1px solid transparent;\n  min-width: 0;\n  color: #333;\n  fill: #333;\n  border-radius: 2px;\n  background-clip: padding-box;\n  flex: 1 0 72px;\n}\n.section__color-input__opacity {\n  font-size: inherit;\n  color: #333;\n  fill: #333;\n  padding: 0;\n  outline: none;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  height: 28px;\n  margin: 1px 0;\n  flex: 0 0 48px;\n  border: 1px solid transparent;\n  margin-right: 0;\n  position: relative;\n}\n.section__color-input__opacity__input {\n  font-size: inherit;\n  user-select: none;\n  margin: 0;\n  outline: none;\n  background-color: transparent;\n  width: 100%;\n  padding: 0 0 0 7px;\n  height: 28px;\n  border: 1px solid transparent;\n  min-width: 0;\n  color: #333;\n  fill: #333;\n  border-radius: 2px;\n  background-clip: padding-box;\n}\n.section__selector {\n  position: relative;\n  height: 30px;\n  border-radius: 2px;\n  border: 2px solid transparent;\n  padding-left: 1px;\n  padding-right: 1px;\n  align-self: center;\n  justify-self: left;\n  overflow: hidden;\n  box-sizing: border-box;\n  background-clip: padding-box;\n  display: inline-flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n}\n.section__selector:hover::before {\n  border: 1px solid #e5e5e5;\n}\n.section__selector:before {\n  content: \"\";\n  width: calc(100% - 4px);\n  height: calc(100% - 4px);\n  position: absolute;\n  border: 1px solid #0000;\n  border-radius: 2px;\n}\n.section__selector__option {\n  flex: 0 0 24px;\n  width: 24px;\n  height: 24px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  flex-flow: row nowrap;\n  justify-content: center;\n  border: 1px solid transparent;\n  background-clip: padding-box;\n  position: relative;\n}\n.section__selector__option__inner {\n  transform: translateZ(0);\n}\n.section__selector__option--active {\n  background-color: #e5e5e5;\n  border-radius: 2px;\n  border-color: #e5e5e5;\n}\n.section__text {\n  font-size: 10px;\n  font-weight: 600;\n  margin: auto 0 auto 0;\n  display: none;\n}\n.section__text--active {\n  display: block;\n}\n.section__preview {\n  border-radius: 2px;\n  width: 100%;\n  height: 100%;\n  padding: 8px;\n  border: 1px solid #0000;\n  position: relative;\n}\n.section__preview:hover {\n  border: 1px solid #e5e5e5;\n}\n.section__preview:focus-within {\n  border: 1px solid #18a0fb;\n}\n.section__preview__cover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 9px;\n  width: calc(100% - 18px);\n  height: calc(100% - 18px);\n  background-color: #e5e5e5;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2px;\n  z-index: 9999;\n}\n.section__preview__inner {\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  background-color: #e5e5e5;\n  border-radius: 2px;\n  display: flex;\n  position: relative;\n  overflow: auto;\n  justify-content: center;\n  align-items: center;\n}\n.section__preview__inner__canvas {\n  transform: scale(0.5);\n  position: absolute;\n}\n\n.bottom-bar {\n  background-color: #2c2c2c;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.bottom-bar__button {\n  color: #fff;\n  background-color: #18a0fb;\n  border-color: transparent;\n  background-clip: border-box;\n  font-weight: 500;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30px;\n  width: 35%;\n  box-sizing: border-box;\n  border-radius: 6px;\n  line-height: 30px;\n  max-width: 200px;\n  text-align: center;\n  flex-shrink: 0;\n  text-align: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  letter-spacing: 0.053px;\n}\n\n.hidden-color-input {\n  display: none;\n  opacity: 0;\n}", "",{"version":3,"sources":["webpack://./src/ui.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter&display=swap\");\r\n\r\n$font: \"Inter\", sans-serif;\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  &:focus {\r\n    outline: 0;\r\n  }\r\n  cursor: default !important;\r\n}\r\n\r\n::selection {\r\n  color: #000;\r\n  background: rgba(#18a0fb, 0.35);\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 7px;\r\n  height: 7px;\r\n  background-color: #0000;\r\n  padding: 1px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  border-radius: 4px;\r\n  background-color: hsla(0, 0%, 0%, 0.1);\r\n}\r\n\r\n::-webkit-scrollbar-corner {\r\n  background-color: #e5e5e5;\r\n}\r\n\r\nbody {\r\n  overflow: hidden;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: $font;\r\n}\r\n\r\n.wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 1fr 0.5fr 4fr 45px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.header {\r\n  grid-row: 1;\r\n  grid-column: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  &__title {\r\n    margin: 0;\r\n    padding: 0px 10px 0px 10px;\r\n    border-left: 1px solid #e5e5e5;\r\n    font-family: $font;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n  }\r\n  &__logo {\r\n    padding: 10px 15px 10px 10px;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.section {\r\n  display: grid;\r\n  grid-gap: 4px 8px;\r\n  padding: 8px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  &--3x3 {\r\n    grid-template-columns: 0.6fr 0.6fr 1fr;\r\n    grid-template-rows: 30px 1fr 1fr;\r\n  }\r\n  &--2x3 {\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 30px 1fr 1fr;\r\n  }\r\n  &--1x2 {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 30px 1fr;\r\n    &--full-size {\r\n      grid-column: 1;\r\n      grid-row: 2;\r\n    }\r\n  }\r\n  &--hidden-overflow {\r\n    overflow: hidden;\r\n  }\r\n  &--header-col-1 {\r\n    grid-row: 1;\r\n    grid-column: 1;\r\n  }\r\n  &--header-col-2 {\r\n    grid-row: 1;\r\n    grid-column: 2;\r\n  }\r\n  &--header-col-3 {\r\n    grid-row: 1;\r\n    grid-column: 3;\r\n  }\r\n  &--col-1-row-1 {\r\n    grid-column: 1;\r\n    grid-row: 2;\r\n  }\r\n  &--col-1-row-2 {\r\n    grid-column: 1;\r\n    grid-row: 3;\r\n  }\r\n  &--col-2-row-1 {\r\n    grid-column: 2;\r\n    grid-row: 2;\r\n  }\r\n  &--col-2-row-2 {\r\n    grid-column: 2;\r\n    grid-row: 3;\r\n  }\r\n  &--col-3-row-1 {\r\n    grid-column: 3;\r\n    grid-row: 2;\r\n  }\r\n  &--col-3-row-2 {\r\n    grid-column: 3;\r\n    grid-row: 3;\r\n  }\r\n  &__header {\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 10px;\r\n    color: #333333;\r\n    &__checkbox {\r\n      filter: unset;\r\n      margin-left: 10px;\r\n      &:checked {\r\n        filter: hue-rotate(340deg) brightness(1.2);\r\n      }\r\n    }\r\n    &__label {\r\n      font-size: 9px;\r\n      font-weight: 600;\r\n      margin-left: 1px;\r\n      color: #333;\r\n    }\r\n    &--flex {\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      &--space-between {\r\n        justify-content: space-between;\r\n      }\r\n    }\r\n  }\r\n  &__basic-input {\r\n    user-select: none;\r\n    padding: 0;\r\n    outline: none;\r\n    height: 28px;\r\n    max-width: 88px;\r\n    position: relative;\r\n    margin: 1px 0;\r\n    width: 100%;\r\n    color: #333;\r\n    fill: #333;\r\n    border-radius: 2px;\r\n    // cursor: default;\r\n    background-clip: padding-box;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 1px solid #0000;\r\n    font-size: 11px;\r\n    &:hover {\r\n      border: 1px solid #e5e5e5;\r\n    }\r\n    &:focus-within {\r\n      border: 1px solid #18a0fb;\r\n    }\r\n    &__label {\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      align-items: center;\r\n      display: flex;\r\n      justify-content: center;\r\n      text-align: center;\r\n      height: 28px;\r\n      width: 28px;\r\n      flex: 0 0 28px;\r\n      line-height: 28px;\r\n      font-size: 11px;\r\n      color: #b3b3b3;\r\n      fill: #b3b3b3;\r\n      & svg {\r\n        display: block;\r\n        margin: auto;\r\n        transform: translateZ(0);\r\n      }\r\n    }\r\n    &__input {\r\n      font-size: 11px;\r\n      padding-left: 0;\r\n      margin-left: 0;\r\n      border: none;\r\n      color: #333;\r\n      fill: #333;\r\n      background-color: #0000;\r\n      width: 100%;\r\n      padding: 0 0 0 7px;\r\n      height: 28px;\r\n      background-clip: padding-box;\r\n      min-width: 0;\r\n      // cursor: default;\r\n      background-clip: padding-box;\r\n    }\r\n  }\r\n  &__color-input {\r\n    user-select: none;\r\n    padding: 0;\r\n    outline: none;\r\n    height: 28px;\r\n    max-width: 144px;\r\n    position: relative;\r\n    margin: 1px 0;\r\n    width: 100%;\r\n    color: #333;\r\n    fill: #333;\r\n    border-radius: 2px;\r\n    background-clip: padding-box;\r\n    display: flex;\r\n    align-items: center;\r\n    border: 1px solid #0000;\r\n    font-size: 11px;\r\n    &:hover &__opacity__input {\r\n      border-left: 1px solid #e5e5e5;\r\n      border-radius: 0px 1px 1px 0px;\r\n    }\r\n    &:hover {\r\n      border: 1px solid #e5e5e5;\r\n    }\r\n    &:focus-within &__opacity__input {\r\n      border-left: 1px solid #e5e5e5;\r\n      border-radius: 0px 1px 1px 0px;\r\n    }\r\n    &:focus-within {\r\n      border: 1px solid #18a0fb;\r\n    }\r\n    &__color-preview {\r\n      user-select: none;\r\n      padding: 0;\r\n      border: 0;\r\n      outline: none;\r\n      flex: 0 0 16px;\r\n      margin: 8px 0 8px 7px;\r\n      border-radius: 1px;\r\n      box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);\r\n      overflow: hidden;\r\n      position: relative;\r\n      flex-shrink: 0;\r\n      height: 16px;\r\n      width: 16px;\r\n    }\r\n    &__input {\r\n      font-size: inherit;\r\n      user-select: none;\r\n      margin: 0;\r\n      outline: none;\r\n      background-color: transparent;\r\n      width: 100%;\r\n      padding: 0 0 0 7px;\r\n      height: 28px;\r\n      border: 1px solid transparent;\r\n      min-width: 0;\r\n      color: #333;\r\n      fill: #333;\r\n      border-radius: 2px;\r\n      background-clip: padding-box;\r\n      flex: 1 0 72px;\r\n    }\r\n    &__opacity {\r\n      font-size: inherit;\r\n      color: #333;\r\n      fill: #333;\r\n      padding: 0;\r\n      outline: none;\r\n      user-select: none;\r\n      display: flex;\r\n      align-items: center;\r\n      height: 28px;\r\n      margin: 1px 0;\r\n      flex: 0 0 48px;\r\n      border: 1px solid transparent;\r\n      margin-right: 0;\r\n      position: relative;\r\n      &__input {\r\n        font-size: inherit;\r\n        user-select: none;\r\n        margin: 0;\r\n        outline: none;\r\n        background-color: transparent;\r\n        width: 100%;\r\n        padding: 0 0 0 7px;\r\n        height: 28px;\r\n        border: 1px solid transparent;\r\n        min-width: 0;\r\n        color: #333;\r\n        fill: #333;\r\n        border-radius: 2px;\r\n        // cursor: default;\r\n        background-clip: padding-box;\r\n      }\r\n    }\r\n  }\r\n  &__selector {\r\n    position: relative;\r\n    height: 30px;\r\n    border-radius: 2px;\r\n    border: 2px solid transparent;\r\n    padding-left: 1px;\r\n    padding-right: 1px;\r\n    align-self: center;\r\n    justify-self: left;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n    background-clip: padding-box;\r\n    display: inline-flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    &:hover::before {\r\n      border: 1px solid #e5e5e5;\r\n    }\r\n    &:before {\r\n      content: \"\";\r\n      width: calc(100% - 4px);\r\n      height: calc(100% - 4px);\r\n      position: absolute;\r\n      border: 1px solid #0000;\r\n      border-radius: 2px;\r\n    }\r\n    &__option {\r\n      flex: 0 0 24px;\r\n      width: 24px;\r\n      height: 24px;\r\n      box-sizing: border-box;\r\n      display: flex;\r\n      align-items: center;\r\n      flex-flow: row nowrap;\r\n      justify-content: center;\r\n      border: 1px solid transparent;\r\n      background-clip: padding-box;\r\n      position: relative;\r\n      &__inner {\r\n        transform: translateZ(0);\r\n      }\r\n      &--active {\r\n        background-color: #e5e5e5;\r\n        border-radius: 2px;\r\n        border-color: #e5e5e5;\r\n      }\r\n    }\r\n  }\r\n  &__text {\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n    margin: auto 0 auto 0;\r\n    display: none;\r\n    &--active {\r\n      display: block;\r\n    }\r\n  }\r\n  &__preview {\r\n    border-radius: 2px;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 8px;\r\n    border: 1px solid #0000;\r\n    position: relative;\r\n    &:hover {\r\n      border: 1px solid #e5e5e5;\r\n    }\r\n    &:focus-within {\r\n      border: 1px solid #18a0fb;\r\n    }\r\n    &__cover {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      margin: 9px;\r\n      width: calc(100% - 18px);\r\n      height: calc(100% - 18px);\r\n      background-color: #e5e5e5;\r\n      display: none;\r\n      justify-content: center;\r\n      align-items: center;\r\n      border-radius: 2px;\r\n      z-index: 9999;\r\n    }\r\n    &__inner {\r\n      padding: 8px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #e5e5e5;\r\n      border-radius: 2px;\r\n      display: flex;\r\n      position: relative;\r\n      overflow: auto;\r\n      justify-content: center;\r\n      align-items: center;\r\n      &__canvas {\r\n        transform: scale(0.5);\r\n        position: absolute;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.bottom-bar {\r\n  background-color: #2c2c2c;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  &__button {\r\n    color: #fff;\r\n    background-color: #18a0fb;\r\n    border-color: transparent;\r\n    background-clip: border-box;\r\n    font-weight: 500;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 30px;\r\n    width: 35%;\r\n    box-sizing: border-box;\r\n    border-radius: 6px;\r\n    line-height: 30px;\r\n    max-width: 200px;\r\n    text-align: center;\r\n    flex-shrink: 0;\r\n    text-align: center;\r\n    flex-shrink: 0;\r\n    font-size: 11px;\r\n    letter-spacing: 0.053px;\r\n  }\r\n}\r\n\r\n.hidden-color-input {\r\n  display: none;\r\n  opacity: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/ui.scss":
/*!*********************!*\
  !*** ./src/ui.scss ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./ui.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui.scss");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_4__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_4__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_4__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_4__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.scss */ "./src/ui.scss");


const SHAPES = {
  rectangle: "RECTANGLE",
  triangle: "TRIANGLE",
  ellipse: "ELLIPSE",
  star: "STAR",
  selection: "SELECTION",
};

const image = new Image();
var selection_size = 0;

onmessage = (event) => {
  if (event.data.pluginMessage.type === "selection") {
    image.src =
      "data:image/svg+xml;base64," + event.data.pluginMessage.selection;
    selection_size = event.data.pluginMessage.size; //!jak coś to usunąć
  } else if (event.data.pluginMessage.type === "selection_too_complex") {
    image.src = "";
    document.querySelector("#size").value = event.data.pluginMessage.height;
  } else if (event.data.pluginMessage.type === "selection_empty") {
    var elementToRemove = document.querySelector(
      ".section__selector__option[data-shape=SELECTION]"
    );
    console.log(elementToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove);
  }
};

window.addEventListener("load", loaded);

function drawGrid(canvas, ctx, countX, countY, size, gap, fill, stroke, shape) {
  size = size * 2;
  gap = gap * 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (fill.enabled) {
    ctx.fillStyle = "#" + fill.color;
  }
  if (stroke.enabled) {
    ctx.lineWidth = stroke.width * 4;
    ctx.strokeStyle = "#" + stroke.color;
  }
  for (var i = 1; i <= countX; i++) {
    for (var j = 1; j <= countY; j++) {
      let x =
        canvas.width / 2 - ((countX + 2) / 2) * (gap + size) + i * (size + gap);
      let y =
        canvas.height / 2 -
        ((countY + 2) / 2) * (gap + size) +
        j * (size + gap);
      if (shape === SHAPES.rectangle) {
        ctx.beginPath();
        ctx.rect(x, y, size, size);
      } else if (shape === SHAPES.triangle) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y - (size * Math.sqrt(3)) / 2);
        ctx.lineTo(x, y);
      } else if (shape === SHAPES.ellipse) {
        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, Math.PI * 2, true);
      } else if (shape === SHAPES.star) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + (size / 2) * 0.75, y);
        ctx.lineTo(x + (size / 3) * 1.5, y - (size * Math.sqrt(2)) / 4);
        ctx.lineTo(x + (size / 2) * 1.25, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + (size / 3) * 2, y + size / 4);
        ctx.lineTo(x + (size / 4) * 3, y + (size / 3) * 1.75);
        ctx.lineTo(x + (size / 4) * 2, y + size / 3);
        ctx.lineTo(x + size / 4, y + (size / 3) * 1.75);
        ctx.lineTo(x + size / 3, y + size / 4);
        ctx.lineTo(x, y);
      } else if (shape === SHAPES.selection) {
        let h = size;
        let w = (image.width * h) / image.height;
        ctx.drawImage(image, x, y, w, h);
      } else {
        ctx.beginPath();
        ctx.rect(x, y, size, size);
      }
      ctx.save();
      ctx.clip();
      if (fill.enabled) {
        ctx.fill();
      }
      if (stroke.enabled) {
        ctx.stroke();
      }
      ctx.restore();
    }
  }
}

function loaded() {
  const createButton = document.querySelector("#create");
  const cancelButton = document.querySelector("#cancel");

  const xCountInput = document.querySelector("#countX");
  const yCountInput = document.querySelector("#countY");
  const sizeInput = document.querySelector("#size");
  const gapInput = document.querySelector("#gap");

  const fillCheckbox = document.querySelector("#fillStateCheckbox");
  const strokeCheckbox = document.querySelector("#strokeStateCheckbox");

  const backgroundColorInput = {
    input: document.querySelector("#backgroundColor"),
    hiddenInput: document.querySelector("#backgroundHiddenColorInput"),
    opacityInput: document.querySelector("#backgroundOpacity"),
    colorPreview: document.querySelector("#backgroundColorPreview"),
    enabled: true,
  };

  const fillColorInput = {
    input: document.querySelector("#fillColor"),
    hiddenInput: document.querySelector("#fillHiddenColorInput"),
    opacityInput: document.querySelector("#fillOpacity"),
    colorPreview: document.querySelector("#fillColorPreview"),
    enabled: fillCheckbox.checked,
  };

  const strokeColorInput = {
    input: document.querySelector("#strokeColor"),
    hiddenInput: document.querySelector("#strokeHiddenColorInput"),
    opacityInput: document.querySelector("#strokeOpacity"),
    widthInput: document.querySelector("#strokeWidth"),
    colorPreview: document.querySelector("#strokeColorPreview"),
    enabled: strokeCheckbox.checked,
  };

  const options = document.querySelectorAll(".section__selector__option");

  const canvas = document.getElementById("previewCanvas");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const ctx = canvas.getContext("2d");

  const inputsList = [
    xCountInput,
    yCountInput,
    sizeInput,
    gapInput,
    fillColorInput.input,
    fillColorInput.opacityInput,
    strokeColorInput.input,
    strokeColorInput.opacityInput,
    strokeColorInput.widthInput,
    backgroundColorInput.input,
    backgroundColorInput.opacityInput,
  ];

  const colorPreviews = [
    fillColorInput.colorPreview,
    strokeColorInput.colorPreview,
    backgroundColorInput.colorPreview,
  ];

  const hiddenInputs = [
    fillColorInput.hiddenInput,
    strokeColorInput.hiddenInput,
    backgroundColorInput.hiddenInput,
  ];

  function refreshCanvas() {
    var fillOpacity = (
      (parseInt(fillColorInput.opacityInput.value, 10) * 255) /
      100
    ).toString(16);
    var strokeOpacity = (
      (parseInt(strokeColorInput.opacityInput.value, 10) * 255) /
      100
    ).toString(16);
    var backgroundOpacity = (
      (parseInt(backgroundColorInput.opacityInput.value, 10) * 255) /
      100
    ).toString(16);
    if (fillOpacity.includes(".")) {
      fillOpacity = fillOpacity.slice(0, fillOpacity.indexOf("."));
    }
    if (fillOpacity.length === 1) {
      fillOpacity = "0" + fillOpacity;
    }

    if (strokeOpacity.includes(".")) {
      strokeOpacity = strokeOpacity.slice(0, strokeOpacity.indexOf("."));
    }
    if (strokeOpacity.length === 1) {
      strokeOpacity = "0" + strokeOpacity;
    }

    if (backgroundOpacity.includes(".")) {
      strokeOpacity = strokeOpacity.slice(0, strokeOpacity.indexOf("."));
    }
    if (backgroundOpacity.length === 1) {
      strokeOpacity = "0" + strokeOpacity;
    }

    var fillColor = fillColorInput.input.value + fillOpacity;
    var strokeColor = strokeColorInput.input.value + strokeOpacity;
    var backgroundColor = backgroundColorInput.input.value + backgroundOpacity;
    var size = parseInt(sizeInput.value, 10);
    var gap = parseInt(gapInput.value, 10);
    var countX = parseInt(xCountInput.value, 10);
    var countY = parseInt(yCountInput.value, 10);
    var shape = document.querySelector(".section__selector__option--active")
      .dataset.shape;
    var strokeWidth = parseInt(strokeColorInput.widthInput.value, 10);

    canvas.width = (countX + 3) * (size + gap) * 2;
    canvas.height = (countY + 3) * (size + gap) * 2;
    canvas.style.width = canvas.width;
    canvas.style.height = canvas.height;
    canvas.parentNode.style.backgroundColor = "#" + backgroundColor;

    var fill = {
      enabled: fillColorInput.enabled,
      color: fillColor,
    };

    var stroke = {
      enabled: strokeColorInput.enabled,
      color: strokeColor,
      width: strokeWidth,
    };

    drawGrid(canvas, ctx, countX, countY, size, gap, fill, stroke, shape);
  }

  fillCheckbox.addEventListener("change", () => {
    fillColorInput.enabled = fillCheckbox.checked;
    refreshCanvas();
    fillColorInput.input.disabled = !fillCheckbox.checked;
    fillColorInput.opacityInput.disabled = !fillCheckbox.checked;
    fillColorInput.colorPreview.parentNode.style.opacity = fillCheckbox.checked
      ? 1
      : 0.25;
  });

  strokeCheckbox.addEventListener("change", () => {
    strokeColorInput.enabled = strokeCheckbox.checked;
    refreshCanvas();
    strokeColorInput.input.disabled = !strokeCheckbox.checked;
    strokeColorInput.widthInput.disabled = !strokeCheckbox.checked;
    strokeColorInput.opacityInput.disabled = !strokeCheckbox.checked;
    strokeColorInput.colorPreview.parentNode.style.opacity =
      strokeCheckbox.checked ? 1 : 0.25;
    strokeColorInput.widthInput.parentNode.style.opacity =
      strokeCheckbox.checked ? 1 : 0.25;
  });

  fillColorInput.colorPreview.style.backgroundColor =
    "#" + fillColorInput.input.value;
  strokeColorInput.colorPreview.style.backgroundColor =
    "#" + strokeColorInput.input.value;
  backgroundColorInput.colorPreview.style.backgroundColor =
    "#" + backgroundColorInput.input.value;

  refreshCanvas();

  options.forEach((option) => {
    inputsList.push(option);
    option.addEventListener("click", () => {
      // console.log(
      //   option.dataset.shape === "SELECTION" && !image.src,
      //   option.dataset.shape,
      //   image.src
      // );
      for (const sibling of option.parentElement.children) {
        sibling.classList.remove("section__selector__option--active");
      }
      option.classList.toggle("section__selector__option--active");
      refreshCanvas();
      if (option.dataset.shape === "SELECTION") {
        document
          .querySelector(".section__text")
          .classList.add("section__text--active");
        sizeInput.value = selection_size; //last change
      } else {
        document
          .querySelector(".section__text")
          .classList.remove("section__text--active");
      }
      if (option.dataset.shape === "SELECTION" && !image.src) {
        var previewCover = document.querySelector(".section__preview__cover");
        previewCover.style.display = "flex";
      } else {
        var previewCover = document.querySelector(".section__preview__cover");
        previewCover.style.display = "none";
      }
    });
  });

  hiddenInputs.forEach((input) => {
    if (input === fillColorInput.hiddenInput) {
      var object = fillColorInput;
    } else if (input === strokeColorInput.hiddenInput) {
      var object = strokeColorInput;
    } else if (input === backgroundColorInput.hiddenInput) {
      var object = backgroundColorInput;
    }
    input.addEventListener("change", () => {
      object.input.value = input.value.slice(1);
      var event = document.createEvent("HTMLEvents");
      event.initEvent("change", false, true);
      object.input.dispatchEvent(event);
    });
  });

  colorPreviews.forEach((preview) => {
    preview.addEventListener("click", () => {
      if (preview === fillColorInput.colorPreview) {
        var object = fillColorInput;
      } else if (preview === strokeColorInput.colorPreview) {
        var object = strokeColorInput;
      } else if (preview === backgroundColorInput.colorPreview) {
        var object = backgroundColorInput;
      }
      object.hiddenInput.click();
    });
  });

  inputsList.forEach((input) => {
    input.addEventListener("change", () => {
      if (
        input === fillColorInput.input ||
        input === strokeColorInput.input ||
        input === backgroundColorInput.input
      ) {
        if (input === fillColorInput.input) {
          var object = fillColorInput;
        } else if (input === strokeColorInput.input) {
          var object = strokeColorInput;
        } else if (input === backgroundColorInput.input) {
          var object = backgroundColorInput;
        }

        if (object.enabled) {
          var inputValue = input.value.replace(/[^0-9a-fA-F_]/g, "");
          if (inputValue === "" && input === fillColorInput.input)
            inputValue = "C4C4C4";
          if (inputValue === "" && input === strokeColorInput.input)
            inputValue = "000000";
          if (inputValue == "" && input === backgroundColorInput.input)
            inputValue = "E5E5E5";
          switch (inputValue.length) {
            case 1: {
              let _color = inputValue.repeat(6);
              input.value = _color.toUpperCase();
              break;
            }
            case 2: {
              let _color = inputValue.repeat(3);
              input.value = _color.toUpperCase();
              break;
            }
            case 3: {
              let splittedValues = inputValue.split("");
              input.value =
                `${splittedValues[0]}${splittedValues[0]}${splittedValues[1]}${splittedValues[1]}${splittedValues[2]}${splittedValues[2]}`.toUpperCase();
              break;
            }
            case 4:
            case 5: {
              let splittedValues = inputValue
                .substr(0, inputValue.length - (inputValue.length - 3))
                .split("");
              input.value =
                `${splittedValues[0]}${splittedValues[0]}${splittedValues[1]}${splittedValues[1]}${splittedValues[2]}${splittedValues[2]}`.toUpperCase();
              break;
            }
            default:
              input.value = inputValue.toUpperCase();
          }
          var opacity = Math.round(
            (parseInt(object.opacityInput.value, 10) / 100) * 255
          ).toString(16);
          object.colorPreview.style.backgroundColor =
            "#" + input.value + opacity;
        }
      } else if (
        input === fillColorInput.opacityInput ||
        input === strokeColorInput.opacityInput ||
        input === backgroundColorInput.opacityInput
      ) {
        if (input === fillColorInput.opacityInput) {
          var object = fillColorInput;
        } else if (input === strokeColorInput.opacityInput) {
          var object = strokeColorInput;
        } else if (input === backgroundColorInput.opacityInput) {
          var object = backgroundColorInput;
        }
        if (object.enabled) {
          var colorPreview = object.colorPreview;
          var colorInput = object.input;
          if (parseInt(input.value, 10) > 100) {
            input.value = 100;
          }
          if (!input.value.endsWith("%")) {
            input.value = input.value + "%";
          }
          var opacity = Math.round(
            (parseInt(input.value, 10) / 100) * 255
          ).toString(16);
          colorPreview.style.backgroundColor = "#" + colorInput.value + opacity;
        }
      } else {
        if (parseInt(input.value, 10) <= 0 || !parseInt(input.value, 10)) {
          input.value = 1;
        }
      }
      refreshCanvas();
    });
  });

  let scale = 0.5;
  canvas.parentNode.addEventListener("wheel", (event) => {
    if (event.ctrlKey) {
      event.preventDefault();
      scale += event.deltaY * -0.01;
      scale = Math.min(Math.max(0.125, scale), 4);
      canvas.style.transform = `scale(${scale})`;
    }
  });

  createButton.addEventListener("click", () => {
    var fillColor = "#" + fillColorInput.input.value;
    var strokeColor = "#" + strokeColorInput.input.value;
    var size = parseInt(sizeInput.value, 10);
    var gap = parseInt(gapInput.value, 10);
    var countX = parseInt(xCountInput.value, 10);
    var countY = parseInt(yCountInput.value, 10);
    var shape = document.querySelector(".section__selector__option--active")
      .dataset.shape;
    var fillOpacity = parseInt(fillColorInput.opacityInput.value, 10) / 100;
    var strokeOpacity = parseInt(strokeColorInput.opacityInput.value, 10) / 100;
    var strokeWidth = parseInt(strokeColorInput.widthInput.value, 10);
    var fill = {
      enabled: fillColorInput.enabled,
      color: fillColor,
      opacity: fillOpacity,
    };
    var stroke = {
      enabled: strokeColorInput.enabled,
      color: strokeColor,
      opacity: strokeOpacity,
      width: strokeWidth,
    };
    parent.postMessage(
      {
        pluginMessage: {
          type: "create-grid",
          countX,
          countY,
          fill,
          stroke,
          gap,
          size,
          shape,
        },
      },
      "*"
    );
  });

  cancelButton.addEventListener("click", () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVB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QTtBQUNBLGtCQUFrQixhQUFhO0FBQy9CLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0I7QUFDekk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0I7QUFDekk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsTUFBTTtBQUM5QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx5QkFBeUIsaUJBQWlCLGtCQUFrQjtBQUM1RCxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWdyaWQvLi9zcmMvdWkuc2NzcyIsIndlYnBhY2s6Ly9maWdyaWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZpZ3JpZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2ZpZ3JpZC8uL3NyYy91aS5zY3NzP2M5OGQiLCJ3ZWJwYWNrOi8vZmlncmlkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL2ZpZ3JpZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9maWdyaWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmlncmlkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmlncmlkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpZ3JpZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9maWdyaWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpZ3JpZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpZ3JpZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpZ3JpZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZmlncmlkLy4vc3JjL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXImZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XFxufVxcbio6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0LCAxNjAsIDI1MSwgMC4zNSk7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDdweDtcXG4gIGhlaWdodDogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA7XFxuICBwYWRkaW5nOiAxcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNWZyIDRmciA0NXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcXG59XFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNWU1ZTU7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5oZWFkZXJfX2xvZ28ge1xcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiA0cHggOHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XFxufVxcbi5zZWN0aW9uLS0zeDMge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjZmciAwLjZmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyIDFmcjtcXG59XFxuLnNlY3Rpb24tLTJ4MyB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyIDFmcjtcXG59XFxuLnNlY3Rpb24tLTF4MiB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnI7XFxufVxcbi5zZWN0aW9uLS0xeDItLWZ1bGwtc2l6ZSB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAyO1xcbn1cXG4uc2VjdGlvbi0taGlkZGVuLW92ZXJmbG93IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zZWN0aW9uLS1oZWFkZXItY29sLTEge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMTtcXG59XFxuLnNlY3Rpb24tLWhlYWRlci1jb2wtMiB7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbn1cXG4uc2VjdGlvbi0taGVhZGVyLWNvbC0zIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxufVxcbi5zZWN0aW9uLS1jb2wtMS1yb3ctMSB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAyO1xcbn1cXG4uc2VjdGlvbi0tY29sLTEtcm93LTIge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMztcXG59XFxuLnNlY3Rpb24tLWNvbC0yLXJvdy0xIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDI7XFxufVxcbi5zZWN0aW9uLS1jb2wtMi1yb3ctMiB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAzO1xcbn1cXG4uc2VjdGlvbi0tY29sLTMtcm93LTEge1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxuICBncmlkLXJvdzogMjtcXG59XFxuLnNlY3Rpb24tLWNvbC0zLXJvdy0yIHtcXG4gIGdyaWQtY29sdW1uOiAzO1xcbiAgZ3JpZC1yb3c6IDM7XFxufVxcbi5zZWN0aW9uX19oZWFkZXIge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4uc2VjdGlvbl9faGVhZGVyX19jaGVja2JveCB7XFxuICBmaWx0ZXI6IHVuc2V0O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5zZWN0aW9uX19oZWFkZXJfX2NoZWNrYm94OmNoZWNrZWQge1xcbiAgZmlsdGVyOiBodWUtcm90YXRlKDM0MGRlZykgYnJpZ2h0bmVzcygxLjIpO1xcbn1cXG4uc2VjdGlvbl9faGVhZGVyX19sYWJlbCB7XFxuICBmb250LXNpemU6IDlweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tbGVmdDogMXB4O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5zZWN0aW9uX19oZWFkZXItLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2VjdGlvbl9faGVhZGVyLS1mbGV4LS1zcGFjZS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNlY3Rpb25fX2Jhc2ljLWlucHV0IHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtYXgtd2lkdGg6IDg4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDFweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogIzMzMztcXG4gIGZpbGw6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG4uc2VjdGlvbl9fYmFzaWMtaW5wdXQ6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcXG59XFxuLnNlY3Rpb25fX2Jhc2ljLWlucHV0OmZvY3VzLXdpdGhpbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMThhMGZiO1xcbn1cXG4uc2VjdGlvbl9fYmFzaWMtaW5wdXRfX2xhYmVsIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgd2lkdGg6IDI4cHg7XFxuICBmbGV4OiAwIDAgMjhweDtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgY29sb3I6ICNiM2IzYjM7XFxuICBmaWxsOiAjYjNiM2IzO1xcbn1cXG4uc2VjdGlvbl9fYmFzaWMtaW5wdXRfX2xhYmVsIHN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG59XFxuLnNlY3Rpb25fX2Jhc2ljLWlucHV0X19pbnB1dCB7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZmlsbDogIzMzMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDAgMCA3cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG59XFxuLnNlY3Rpb25fX2NvbG9yLWlucHV0IHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtYXgtd2lkdGg6IDE0NHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAxcHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICMzMzM7XFxuICBmaWxsOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDA7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcbi5zZWN0aW9uX19jb2xvci1pbnB1dDpob3ZlciAuc2VjdGlvbl9fY29sb3ItaW5wdXRfX29wYWNpdHlfX2lucHV0IHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U1ZTVlNTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxcHggMXB4IDBweDtcXG59XFxuLnNlY3Rpb25fX2NvbG9yLWlucHV0OmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XFxufVxcbi5zZWN0aW9uX19jb2xvci1pbnB1dDpmb2N1cy13aXRoaW4gLnNlY3Rpb25fX2NvbG9yLWlucHV0X19vcGFjaXR5X19pbnB1dCB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNWU1ZTU7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMXB4IDFweCAwcHg7XFxufVxcbi5zZWN0aW9uX19jb2xvci1pbnB1dDpmb2N1cy13aXRoaW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE4YTBmYjtcXG59XFxuLnNlY3Rpb25fX2NvbG9yLWlucHV0X19jb2xvci1wcmV2aWV3IHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmbGV4OiAwIDAgMTZweDtcXG4gIG1hcmdpbjogOHB4IDAgOHB4IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG59XFxuLnNlY3Rpb25fX2NvbG9yLWlucHV0X19pbnB1dCB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAwIDAgN3B4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBtaW4td2lkdGg6IDA7XFxuICBjb2xvcjogIzMzMztcXG4gIGZpbGw6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgZmxleDogMSAwIDcycHg7XFxufVxcbi5zZWN0aW9uX19jb2xvci1pbnB1dF9fb3BhY2l0eSB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGZpbGw6ICMzMzM7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtYXJnaW46IDFweCAwO1xcbiAgZmxleDogMCAwIDQ4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnNlY3Rpb25fX2NvbG9yLWlucHV0X19vcGFjaXR5X19pbnB1dCB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAwIDAgN3B4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBtaW4td2lkdGg6IDA7XFxuICBjb2xvcjogIzMzMztcXG4gIGZpbGw6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbn1cXG4uc2VjdGlvbl9fc2VsZWN0b3Ige1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDFweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2VjdGlvbl9fc2VsZWN0b3I6aG92ZXI6OmJlZm9yZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xcbn1cXG4uc2VjdGlvbl9fc2VsZWN0b3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDRweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDRweCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLnNlY3Rpb25fX3NlbGVjdG9yX19vcHRpb24ge1xcbiAgZmxleDogMCAwIDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2VjdGlvbl9fc2VsZWN0b3JfX29wdGlvbl9faW5uZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbn1cXG4uc2VjdGlvbl9fc2VsZWN0b3JfX29wdGlvbi0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXItY29sb3I6ICNlNWU1ZTU7XFxufVxcbi5zZWN0aW9uX190ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW46IGF1dG8gMCBhdXRvIDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2VjdGlvbl9fdGV4dC0tYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uc2VjdGlvbl9fcHJldmlldyB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2VjdGlvbl9fcHJldmlldzpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xcbn1cXG4uc2VjdGlvbl9fcHJldmlldzpmb2N1cy13aXRoaW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE4YTBmYjtcXG59XFxuLnNlY3Rpb25fX3ByZXZpZXdfX2NvdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IDlweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxOHB4KTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMThweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcbi5zZWN0aW9uX19wcmV2aWV3X19pbm5lciB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zZWN0aW9uX19wcmV2aWV3X19pbm5lcl9fY2FudmFzIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmJvdHRvbS1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5ib3R0b20tYmFyX19idXR0b24ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThhMGZiO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDM1JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDUzcHg7XFxufVxcblxcbi5oaWRkZW4tY29sb3ItaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0Usc0JBQUE7RUFJQSwwQkFBQTtBQUxGO0FBRUU7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QTtBQUxGO0FBTUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFKSjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBTEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXImZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuJGZvbnQ6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgJjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICB9XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuOjpzZWxlY3Rpb24ge1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKCMxOGEwZmIsIDAuMzUpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiA3cHg7XFxyXFxuICBoZWlnaHQ6IDdweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwO1xcclxcbiAgcGFkZGluZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciA0ZnIgNDVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGdyaWQtcm93OiAxO1xcclxcbiAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U1ZTVlNTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIH1cXHJcXG4gICZfX2xvZ28ge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWdhcDogNHB4IDhweDtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xcclxcbiAgJi0tM3gzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjZmciAwLjZmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnIgMWZyO1xcclxcbiAgfVxcclxcbiAgJi0tMngzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyIDFmcjtcXHJcXG4gIH1cXHJcXG4gICYtLTF4MiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyO1xcclxcbiAgICAmLS1mdWxsLXNpemUge1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmLS1oaWRkZW4tb3ZlcmZsb3cge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgfVxcclxcbiAgJi0taGVhZGVyLWNvbC0xIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgfVxcclxcbiAgJi0taGVhZGVyLWNvbC0yIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgfVxcclxcbiAgJi0taGVhZGVyLWNvbC0zIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgfVxcclxcbiAgJi0tY29sLTEtcm93LTEge1xcclxcbiAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgZ3JpZC1yb3c6IDI7XFxyXFxuICB9XFxyXFxuICAmLS1jb2wtMS1yb3ctMiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICBncmlkLXJvdzogMztcXHJcXG4gIH1cXHJcXG4gICYtLWNvbC0yLXJvdy0xIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgIGdyaWQtcm93OiAyO1xcclxcbiAgfVxcclxcbiAgJi0tY29sLTItcm93LTIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDM7XFxyXFxuICB9XFxyXFxuICAmLS1jb2wtMy1yb3ctMSB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICBncmlkLXJvdzogMjtcXHJcXG4gIH1cXHJcXG4gICYtLWNvbC0zLXJvdy0yIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgIGdyaWQtcm93OiAzO1xcclxcbiAgfVxcclxcbiAgJl9faGVhZGVyIHtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcclxcbiAgICAmX19jaGVja2JveCB7XFxyXFxuICAgICAgZmlsdGVyOiB1bnNldDtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgICAmOmNoZWNrZWQge1xcclxcbiAgICAgICAgZmlsdGVyOiBodWUtcm90YXRlKDM0MGRlZykgYnJpZ2h0bmVzcygxLjIpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmX19sYWJlbCB7XFxyXFxuICAgICAgZm9udC1zaXplOiA5cHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMXB4O1xcclxcbiAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICB9XFxyXFxuICAgICYtLWZsZXgge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICYtLXNwYWNlLWJldHdlZW4ge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fYmFzaWMtaW5wdXQge1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDg4cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiAxcHggMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBmaWxsOiAjMzMzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIC8vIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwO1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpmb2N1cy13aXRoaW4ge1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOGEwZmI7XFxyXFxuICAgIH1cXHJcXG4gICAgJl9fbGFiZWwge1xcclxcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICAgIHdpZHRoOiAyOHB4O1xcclxcbiAgICAgIGZsZXg6IDAgMCAyOHB4O1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgICBjb2xvcjogI2IzYjNiMztcXHJcXG4gICAgICBmaWxsOiAjYjNiM2IzO1xcclxcbiAgICAgICYgc3ZnIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmX19pbnB1dCB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgY29sb3I6ICMzMzM7XFxyXFxuICAgICAgZmlsbDogIzMzMztcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBwYWRkaW5nOiAwIDAgMCA3cHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICAgICAgbWluLXdpZHRoOiAwO1xcclxcbiAgICAgIC8vIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19jb2xvci1pbnB1dCB7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgIG1heC13aWR0aDogMTQ0cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiAxcHggMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBmaWxsOiAjMzMzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwO1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgICY6aG92ZXIgJl9fb3BhY2l0eV9faW5wdXQge1xcclxcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U1ZTVlNTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggMXB4IDFweCAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcXHJcXG4gICAgfVxcclxcbiAgICAmOmZvY3VzLXdpdGhpbiAmX19vcGFjaXR5X19pbnB1dCB7XFxyXFxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTVlNWU1O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxcHggMXB4IDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAmOmZvY3VzLXdpdGhpbiB7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE4YTBmYjtcXHJcXG4gICAgfVxcclxcbiAgICAmX19jb2xvci1wcmV2aWV3IHtcXHJcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgIGZsZXg6IDAgMCAxNnB4O1xcclxcbiAgICAgIG1hcmdpbjogOHB4IDAgOHB4IDdweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XFxyXFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYigwIDAgMCAvIDEwJSk7XFxyXFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICB9XFxyXFxuICAgICZfX2lucHV0IHtcXHJcXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgcGFkZGluZzogMCAwIDAgN3B4O1xcclxcbiAgICAgIGhlaWdodDogMjhweDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBtaW4td2lkdGg6IDA7XFxyXFxuICAgICAgY29sb3I6ICMzMzM7XFxyXFxuICAgICAgZmlsbDogIzMzMztcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gICAgICBmbGV4OiAxIDAgNzJweDtcXHJcXG4gICAgfVxcclxcbiAgICAmX19vcGFjaXR5IHtcXHJcXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgICAgY29sb3I6ICMzMzM7XFxyXFxuICAgICAgZmlsbDogIzMzMztcXHJcXG4gICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGhlaWdodDogMjhweDtcXHJcXG4gICAgICBtYXJnaW46IDFweCAwO1xcclxcbiAgICAgIGZsZXg6IDAgMCA0OHB4O1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgJl9faW5wdXQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDdweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjhweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAwO1xcclxcbiAgICAgICAgY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICBmaWxsOiAjMzMzO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgICAgLy8gY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX3NlbGVjdG9yIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgJjpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xcclxcbiAgICB9XFxyXFxuICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNHB4KTtcXHJcXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDRweCk7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgfVxcclxcbiAgICAmX19vcHRpb24ge1xcclxcbiAgICAgIGZsZXg6IDAgMCAyNHB4O1xcclxcbiAgICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgJl9faW5uZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmLS1hY3RpdmUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2U1ZTVlNTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX3RleHQge1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbjogYXV0byAwIGF1dG8gMDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgJi0tYWN0aXZlIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fcHJldmlldyB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xcclxcbiAgICB9XFxyXFxuICAgICY6Zm9jdXMtd2l0aGluIHtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMThhMGZiO1xcclxcbiAgICB9XFxyXFxuICAgICZfX2NvdmVyIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgbWFyZ2luOiA5cHg7XFxyXFxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE4cHgpO1xcclxcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMThweCk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgIHotaW5kZXg6IDk5OTk7XFxyXFxuICAgIH1cXHJcXG4gICAgJl9faW5uZXIge1xcclxcbiAgICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAmX19jYW52YXMge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJjO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICZfX2J1dHRvbiB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThhMGZiO1xcclxcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDUzcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4tY29sb3ItaW5wdXQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3VpLnNjc3NcIjtcclxuXHJcbmNvbnN0IFNIQVBFUyA9IHtcclxuICByZWN0YW5nbGU6IFwiUkVDVEFOR0xFXCIsXHJcbiAgdHJpYW5nbGU6IFwiVFJJQU5HTEVcIixcclxuICBlbGxpcHNlOiBcIkVMTElQU0VcIixcclxuICBzdGFyOiBcIlNUQVJcIixcclxuICBzZWxlY3Rpb246IFwiU0VMRUNUSU9OXCIsXHJcbn07XHJcblxyXG5jb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG52YXIgc2VsZWN0aW9uX3NpemUgPSAwO1xyXG5cclxub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgaWYgKGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZS50eXBlID09PSBcInNlbGVjdGlvblwiKSB7XHJcbiAgICBpbWFnZS5zcmMgPVxyXG4gICAgICBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCIgKyBldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2Uuc2VsZWN0aW9uO1xyXG4gICAgc2VsZWN0aW9uX3NpemUgPSBldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2Uuc2l6ZTsgLy8hamFrIGNvxZsgdG8gdXN1bsSFxIdcclxuICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZS50eXBlID09PSBcInNlbGVjdGlvbl90b29fY29tcGxleFwiKSB7XHJcbiAgICBpbWFnZS5zcmMgPSBcIlwiO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXplXCIpLnZhbHVlID0gZXZlbnQuZGF0YS5wbHVnaW5NZXNzYWdlLmhlaWdodDtcclxuICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZS50eXBlID09PSBcInNlbGVjdGlvbl9lbXB0eVwiKSB7XHJcbiAgICB2YXIgZWxlbWVudFRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuc2VjdGlvbl9fc2VsZWN0b3JfX29wdGlvbltkYXRhLXNoYXBlPVNFTEVDVElPTl1cIlxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnRUb1JlbW92ZSk7XHJcbiAgICBlbGVtZW50VG9SZW1vdmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50VG9SZW1vdmUpO1xyXG4gIH1cclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBsb2FkZWQpO1xyXG5cclxuZnVuY3Rpb24gZHJhd0dyaWQoY2FudmFzLCBjdHgsIGNvdW50WCwgY291bnRZLCBzaXplLCBnYXAsIGZpbGwsIHN0cm9rZSwgc2hhcGUpIHtcclxuICBzaXplID0gc2l6ZSAqIDI7XHJcbiAgZ2FwID0gZ2FwICogMjtcclxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgaWYgKGZpbGwuZW5hYmxlZCkge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI1wiICsgZmlsbC5jb2xvcjtcclxuICB9XHJcbiAgaWYgKHN0cm9rZS5lbmFibGVkKSB7XHJcbiAgICBjdHgubGluZVdpZHRoID0gc3Ryb2tlLndpZHRoICogNDtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiI1wiICsgc3Ryb2tlLmNvbG9yO1xyXG4gIH1cclxuICBmb3IgKHZhciBpID0gMTsgaSA8PSBjb3VudFg7IGkrKykge1xyXG4gICAgZm9yICh2YXIgaiA9IDE7IGogPD0gY291bnRZOyBqKyspIHtcclxuICAgICAgbGV0IHggPVxyXG4gICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSAoKGNvdW50WCArIDIpIC8gMikgKiAoZ2FwICsgc2l6ZSkgKyBpICogKHNpemUgKyBnYXApO1xyXG4gICAgICBsZXQgeSA9XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCAvIDIgLVxyXG4gICAgICAgICgoY291bnRZICsgMikgLyAyKSAqIChnYXAgKyBzaXplKSArXHJcbiAgICAgICAgaiAqIChzaXplICsgZ2FwKTtcclxuICAgICAgaWYgKHNoYXBlID09PSBTSEFQRVMucmVjdGFuZ2xlKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5yZWN0KHgsIHksIHNpemUsIHNpemUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBTSEFQRVMudHJpYW5nbGUpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyBzaXplLCB5KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyBzaXplIC8gMiwgeSAtIChzaXplICogTWF0aC5zcXJ0KDMpKSAvIDIpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hhcGUgPT09IFNIQVBFUy5lbGxpcHNlKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmMoeCwgeSwgc2l6ZSAvIDIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gU0hBUEVTLnN0YXIpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyAoc2l6ZSAvIDIpICogMC43NSwgeSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgKHNpemUgLyAzKSAqIDEuNSwgeSAtIChzaXplICogTWF0aC5zcXJ0KDIpKSAvIDQpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeCArIChzaXplIC8gMikgKiAxLjI1LCB5KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyBzaXplLCB5KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyAoc2l6ZSAvIDMpICogMiwgeSArIHNpemUgLyA0KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyAoc2l6ZSAvIDQpICogMywgeSArIChzaXplIC8gMykgKiAxLjc1KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyAoc2l6ZSAvIDQpICogMiwgeSArIHNpemUgLyAzKTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyBzaXplIC8gNCwgeSArIChzaXplIC8gMykgKiAxLjc1KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyBzaXplIC8gMywgeSArIHNpemUgLyA0KTtcclxuICAgICAgICBjdHgubGluZVRvKHgsIHkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBTSEFQRVMuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IGggPSBzaXplO1xyXG4gICAgICAgIGxldCB3ID0gKGltYWdlLndpZHRoICogaCkgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSwgdywgaCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5yZWN0KHgsIHksIHNpemUsIHNpemUpO1xyXG4gICAgICB9XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC5jbGlwKCk7XHJcbiAgICAgIGlmIChmaWxsLmVuYWJsZWQpIHtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdHJva2UuZW5hYmxlZCkge1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgfVxyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZGVkKCkge1xyXG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlXCIpO1xyXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsXCIpO1xyXG5cclxuICBjb25zdCB4Q291bnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRYXCIpO1xyXG4gIGNvbnN0IHlDb3VudElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudFlcIik7XHJcbiAgY29uc3Qgc2l6ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXplXCIpO1xyXG4gIGNvbnN0IGdhcElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYXBcIik7XHJcblxyXG4gIGNvbnN0IGZpbGxDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsbFN0YXRlQ2hlY2tib3hcIik7XHJcbiAgY29uc3Qgc3Ryb2tlQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0cm9rZVN0YXRlQ2hlY2tib3hcIik7XHJcblxyXG4gIGNvbnN0IGJhY2tncm91bmRDb2xvcklucHV0ID0ge1xyXG4gICAgaW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFja2dyb3VuZENvbG9yXCIpLFxyXG4gICAgaGlkZGVuSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFja2dyb3VuZEhpZGRlbkNvbG9ySW5wdXRcIiksXHJcbiAgICBvcGFjaXR5SW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFja2dyb3VuZE9wYWNpdHlcIiksXHJcbiAgICBjb2xvclByZXZpZXc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFja2dyb3VuZENvbG9yUHJldmlld1wiKSxcclxuICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsbENvbG9ySW5wdXQgPSB7XHJcbiAgICBpbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaWxsQ29sb3JcIiksXHJcbiAgICBoaWRkZW5JbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaWxsSGlkZGVuQ29sb3JJbnB1dFwiKSxcclxuICAgIG9wYWNpdHlJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaWxsT3BhY2l0eVwiKSxcclxuICAgIGNvbG9yUHJldmlldzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaWxsQ29sb3JQcmV2aWV3XCIpLFxyXG4gICAgZW5hYmxlZDogZmlsbENoZWNrYm94LmNoZWNrZWQsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3Ryb2tlQ29sb3JJbnB1dCA9IHtcclxuICAgIGlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0cm9rZUNvbG9yXCIpLFxyXG4gICAgaGlkZGVuSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3Ryb2tlSGlkZGVuQ29sb3JJbnB1dFwiKSxcclxuICAgIG9wYWNpdHlJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdHJva2VPcGFjaXR5XCIpLFxyXG4gICAgd2lkdGhJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdHJva2VXaWR0aFwiKSxcclxuICAgIGNvbG9yUHJldmlldzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdHJva2VDb2xvclByZXZpZXdcIiksXHJcbiAgICBlbmFibGVkOiBzdHJva2VDaGVja2JveC5jaGVja2VkLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlY3Rpb25fX3NlbGVjdG9yX19vcHRpb25cIik7XHJcblxyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldmlld0NhbnZhc1wiKTtcclxuICBjYW52YXMud2lkdGggPSBjYW52YXMub2Zmc2V0V2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgY29uc3QgaW5wdXRzTGlzdCA9IFtcclxuICAgIHhDb3VudElucHV0LFxyXG4gICAgeUNvdW50SW5wdXQsXHJcbiAgICBzaXplSW5wdXQsXHJcbiAgICBnYXBJbnB1dCxcclxuICAgIGZpbGxDb2xvcklucHV0LmlucHV0LFxyXG4gICAgZmlsbENvbG9ySW5wdXQub3BhY2l0eUlucHV0LFxyXG4gICAgc3Ryb2tlQ29sb3JJbnB1dC5pbnB1dCxcclxuICAgIHN0cm9rZUNvbG9ySW5wdXQub3BhY2l0eUlucHV0LFxyXG4gICAgc3Ryb2tlQ29sb3JJbnB1dC53aWR0aElucHV0LFxyXG4gICAgYmFja2dyb3VuZENvbG9ySW5wdXQuaW5wdXQsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3JJbnB1dC5vcGFjaXR5SW5wdXQsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgY29sb3JQcmV2aWV3cyA9IFtcclxuICAgIGZpbGxDb2xvcklucHV0LmNvbG9yUHJldmlldyxcclxuICAgIHN0cm9rZUNvbG9ySW5wdXQuY29sb3JQcmV2aWV3LFxyXG4gICAgYmFja2dyb3VuZENvbG9ySW5wdXQuY29sb3JQcmV2aWV3LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGhpZGRlbklucHV0cyA9IFtcclxuICAgIGZpbGxDb2xvcklucHV0LmhpZGRlbklucHV0LFxyXG4gICAgc3Ryb2tlQ29sb3JJbnB1dC5oaWRkZW5JbnB1dCxcclxuICAgIGJhY2tncm91bmRDb2xvcklucHV0LmhpZGRlbklucHV0LFxyXG4gIF07XHJcblxyXG4gIGZ1bmN0aW9uIHJlZnJlc2hDYW52YXMoKSB7XHJcbiAgICB2YXIgZmlsbE9wYWNpdHkgPSAoXHJcbiAgICAgIChwYXJzZUludChmaWxsQ29sb3JJbnB1dC5vcGFjaXR5SW5wdXQudmFsdWUsIDEwKSAqIDI1NSkgL1xyXG4gICAgICAxMDBcclxuICAgICkudG9TdHJpbmcoMTYpO1xyXG4gICAgdmFyIHN0cm9rZU9wYWNpdHkgPSAoXHJcbiAgICAgIChwYXJzZUludChzdHJva2VDb2xvcklucHV0Lm9wYWNpdHlJbnB1dC52YWx1ZSwgMTApICogMjU1KSAvXHJcbiAgICAgIDEwMFxyXG4gICAgKS50b1N0cmluZygxNik7XHJcbiAgICB2YXIgYmFja2dyb3VuZE9wYWNpdHkgPSAoXHJcbiAgICAgIChwYXJzZUludChiYWNrZ3JvdW5kQ29sb3JJbnB1dC5vcGFjaXR5SW5wdXQudmFsdWUsIDEwKSAqIDI1NSkgL1xyXG4gICAgICAxMDBcclxuICAgICkudG9TdHJpbmcoMTYpO1xyXG4gICAgaWYgKGZpbGxPcGFjaXR5LmluY2x1ZGVzKFwiLlwiKSkge1xyXG4gICAgICBmaWxsT3BhY2l0eSA9IGZpbGxPcGFjaXR5LnNsaWNlKDAsIGZpbGxPcGFjaXR5LmluZGV4T2YoXCIuXCIpKTtcclxuICAgIH1cclxuICAgIGlmIChmaWxsT3BhY2l0eS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgZmlsbE9wYWNpdHkgPSBcIjBcIiArIGZpbGxPcGFjaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdHJva2VPcGFjaXR5LmluY2x1ZGVzKFwiLlwiKSkge1xyXG4gICAgICBzdHJva2VPcGFjaXR5ID0gc3Ryb2tlT3BhY2l0eS5zbGljZSgwLCBzdHJva2VPcGFjaXR5LmluZGV4T2YoXCIuXCIpKTtcclxuICAgIH1cclxuICAgIGlmIChzdHJva2VPcGFjaXR5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBzdHJva2VPcGFjaXR5ID0gXCIwXCIgKyBzdHJva2VPcGFjaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiYWNrZ3JvdW5kT3BhY2l0eS5pbmNsdWRlcyhcIi5cIikpIHtcclxuICAgICAgc3Ryb2tlT3BhY2l0eSA9IHN0cm9rZU9wYWNpdHkuc2xpY2UoMCwgc3Ryb2tlT3BhY2l0eS5pbmRleE9mKFwiLlwiKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYmFja2dyb3VuZE9wYWNpdHkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHN0cm9rZU9wYWNpdHkgPSBcIjBcIiArIHN0cm9rZU9wYWNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZpbGxDb2xvciA9IGZpbGxDb2xvcklucHV0LmlucHV0LnZhbHVlICsgZmlsbE9wYWNpdHk7XHJcbiAgICB2YXIgc3Ryb2tlQ29sb3IgPSBzdHJva2VDb2xvcklucHV0LmlucHV0LnZhbHVlICsgc3Ryb2tlT3BhY2l0eTtcclxuICAgIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3JJbnB1dC5pbnB1dC52YWx1ZSArIGJhY2tncm91bmRPcGFjaXR5O1xyXG4gICAgdmFyIHNpemUgPSBwYXJzZUludChzaXplSW5wdXQudmFsdWUsIDEwKTtcclxuICAgIHZhciBnYXAgPSBwYXJzZUludChnYXBJbnB1dC52YWx1ZSwgMTApO1xyXG4gICAgdmFyIGNvdW50WCA9IHBhcnNlSW50KHhDb3VudElucHV0LnZhbHVlLCAxMCk7XHJcbiAgICB2YXIgY291bnRZID0gcGFyc2VJbnQoeUNvdW50SW5wdXQudmFsdWUsIDEwKTtcclxuICAgIHZhciBzaGFwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbl9fc2VsZWN0b3JfX29wdGlvbi0tYWN0aXZlXCIpXHJcbiAgICAgIC5kYXRhc2V0LnNoYXBlO1xyXG4gICAgdmFyIHN0cm9rZVdpZHRoID0gcGFyc2VJbnQoc3Ryb2tlQ29sb3JJbnB1dC53aWR0aElucHV0LnZhbHVlLCAxMCk7XHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gKGNvdW50WCArIDMpICogKHNpemUgKyBnYXApICogMjtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSAoY291bnRZICsgMykgKiAoc2l6ZSArIGdhcCkgKiAyO1xyXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICBjYW52YXMucGFyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNcIiArIGJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICB2YXIgZmlsbCA9IHtcclxuICAgICAgZW5hYmxlZDogZmlsbENvbG9ySW5wdXQuZW5hYmxlZCxcclxuICAgICAgY29sb3I6IGZpbGxDb2xvcixcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHN0cm9rZSA9IHtcclxuICAgICAgZW5hYmxlZDogc3Ryb2tlQ29sb3JJbnB1dC5lbmFibGVkLFxyXG4gICAgICBjb2xvcjogc3Ryb2tlQ29sb3IsXHJcbiAgICAgIHdpZHRoOiBzdHJva2VXaWR0aCxcclxuICAgIH07XHJcblxyXG4gICAgZHJhd0dyaWQoY2FudmFzLCBjdHgsIGNvdW50WCwgY291bnRZLCBzaXplLCBnYXAsIGZpbGwsIHN0cm9rZSwgc2hhcGUpO1xyXG4gIH1cclxuXHJcbiAgZmlsbENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgZmlsbENvbG9ySW5wdXQuZW5hYmxlZCA9IGZpbGxDaGVja2JveC5jaGVja2VkO1xyXG4gICAgcmVmcmVzaENhbnZhcygpO1xyXG4gICAgZmlsbENvbG9ySW5wdXQuaW5wdXQuZGlzYWJsZWQgPSAhZmlsbENoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICBmaWxsQ29sb3JJbnB1dC5vcGFjaXR5SW5wdXQuZGlzYWJsZWQgPSAhZmlsbENoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICBmaWxsQ29sb3JJbnB1dC5jb2xvclByZXZpZXcucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gZmlsbENoZWNrYm94LmNoZWNrZWRcclxuICAgICAgPyAxXHJcbiAgICAgIDogMC4yNTtcclxuICB9KTtcclxuXHJcbiAgc3Ryb2tlQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBzdHJva2VDb2xvcklucHV0LmVuYWJsZWQgPSBzdHJva2VDaGVja2JveC5jaGVja2VkO1xyXG4gICAgcmVmcmVzaENhbnZhcygpO1xyXG4gICAgc3Ryb2tlQ29sb3JJbnB1dC5pbnB1dC5kaXNhYmxlZCA9ICFzdHJva2VDaGVja2JveC5jaGVja2VkO1xyXG4gICAgc3Ryb2tlQ29sb3JJbnB1dC53aWR0aElucHV0LmRpc2FibGVkID0gIXN0cm9rZUNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICBzdHJva2VDb2xvcklucHV0Lm9wYWNpdHlJbnB1dC5kaXNhYmxlZCA9ICFzdHJva2VDaGVja2JveC5jaGVja2VkO1xyXG4gICAgc3Ryb2tlQ29sb3JJbnB1dC5jb2xvclByZXZpZXcucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID1cclxuICAgICAgc3Ryb2tlQ2hlY2tib3guY2hlY2tlZCA/IDEgOiAwLjI1O1xyXG4gICAgc3Ryb2tlQ29sb3JJbnB1dC53aWR0aElucHV0LnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9XHJcbiAgICAgIHN0cm9rZUNoZWNrYm94LmNoZWNrZWQgPyAxIDogMC4yNTtcclxuICB9KTtcclxuXHJcbiAgZmlsbENvbG9ySW5wdXQuY29sb3JQcmV2aWV3LnN0eWxlLmJhY2tncm91bmRDb2xvciA9XHJcbiAgICBcIiNcIiArIGZpbGxDb2xvcklucHV0LmlucHV0LnZhbHVlO1xyXG4gIHN0cm9rZUNvbG9ySW5wdXQuY29sb3JQcmV2aWV3LnN0eWxlLmJhY2tncm91bmRDb2xvciA9XHJcbiAgICBcIiNcIiArIHN0cm9rZUNvbG9ySW5wdXQuaW5wdXQudmFsdWU7XHJcbiAgYmFja2dyb3VuZENvbG9ySW5wdXQuY29sb3JQcmV2aWV3LnN0eWxlLmJhY2tncm91bmRDb2xvciA9XHJcbiAgICBcIiNcIiArIGJhY2tncm91bmRDb2xvcklucHV0LmlucHV0LnZhbHVlO1xyXG5cclxuICByZWZyZXNoQ2FudmFzKCk7XHJcblxyXG4gIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICBpbnB1dHNMaXN0LnB1c2gob3B0aW9uKTtcclxuICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcclxuICAgICAgLy8gICBvcHRpb24uZGF0YXNldC5zaGFwZSA9PT0gXCJTRUxFQ1RJT05cIiAmJiAhaW1hZ2Uuc3JjLFxyXG4gICAgICAvLyAgIG9wdGlvbi5kYXRhc2V0LnNoYXBlLFxyXG4gICAgICAvLyAgIGltYWdlLnNyY1xyXG4gICAgICAvLyApO1xyXG4gICAgICBmb3IgKGNvbnN0IHNpYmxpbmcgb2Ygb3B0aW9uLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pIHtcclxuICAgICAgICBzaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWN0aW9uX19zZWxlY3Rvcl9fb3B0aW9uLS1hY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgICAgb3B0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCJzZWN0aW9uX19zZWxlY3Rvcl9fb3B0aW9uLS1hY3RpdmVcIik7XHJcbiAgICAgIHJlZnJlc2hDYW52YXMoKTtcclxuICAgICAgaWYgKG9wdGlvbi5kYXRhc2V0LnNoYXBlID09PSBcIlNFTEVDVElPTlwiKSB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25fX3RleHRcIilcclxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbl9fdGV4dC0tYWN0aXZlXCIpO1xyXG4gICAgICAgIHNpemVJbnB1dC52YWx1ZSA9IHNlbGVjdGlvbl9zaXplOyAvL2xhc3QgY2hhbmdlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25fX3RleHRcIilcclxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwic2VjdGlvbl9fdGV4dC0tYWN0aXZlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvcHRpb24uZGF0YXNldC5zaGFwZSA9PT0gXCJTRUxFQ1RJT05cIiAmJiAhaW1hZ2Uuc3JjKSB7XHJcbiAgICAgICAgdmFyIHByZXZpZXdDb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbl9fcHJldmlld19fY292ZXJcIik7XHJcbiAgICAgICAgcHJldmlld0NvdmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcHJldmlld0NvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uX19wcmV2aWV3X19jb3ZlclwiKTtcclxuICAgICAgICBwcmV2aWV3Q292ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgaGlkZGVuSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoaW5wdXQgPT09IGZpbGxDb2xvcklucHV0LmhpZGRlbklucHV0KSB7XHJcbiAgICAgIHZhciBvYmplY3QgPSBmaWxsQ29sb3JJbnB1dDtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IHN0cm9rZUNvbG9ySW5wdXQuaGlkZGVuSW5wdXQpIHtcclxuICAgICAgdmFyIG9iamVjdCA9IHN0cm9rZUNvbG9ySW5wdXQ7XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0ID09PSBiYWNrZ3JvdW5kQ29sb3JJbnB1dC5oaWRkZW5JbnB1dCkge1xyXG4gICAgICB2YXIgb2JqZWN0ID0gYmFja2dyb3VuZENvbG9ySW5wdXQ7XHJcbiAgICB9XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgb2JqZWN0LmlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUuc2xpY2UoMSk7XHJcbiAgICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKTtcclxuICAgICAgZXZlbnQuaW5pdEV2ZW50KFwiY2hhbmdlXCIsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgb2JqZWN0LmlucHV0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbG9yUHJldmlld3MuZm9yRWFjaCgocHJldmlldykgPT4ge1xyXG4gICAgcHJldmlldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAocHJldmlldyA9PT0gZmlsbENvbG9ySW5wdXQuY29sb3JQcmV2aWV3KSB7XHJcbiAgICAgICAgdmFyIG9iamVjdCA9IGZpbGxDb2xvcklucHV0O1xyXG4gICAgICB9IGVsc2UgaWYgKHByZXZpZXcgPT09IHN0cm9rZUNvbG9ySW5wdXQuY29sb3JQcmV2aWV3KSB7XHJcbiAgICAgICAgdmFyIG9iamVjdCA9IHN0cm9rZUNvbG9ySW5wdXQ7XHJcbiAgICAgIH0gZWxzZSBpZiAocHJldmlldyA9PT0gYmFja2dyb3VuZENvbG9ySW5wdXQuY29sb3JQcmV2aWV3KSB7XHJcbiAgICAgICAgdmFyIG9iamVjdCA9IGJhY2tncm91bmRDb2xvcklucHV0O1xyXG4gICAgICB9XHJcbiAgICAgIG9iamVjdC5oaWRkZW5JbnB1dC5jbGljaygpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGlucHV0c0xpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaW5wdXQgPT09IGZpbGxDb2xvcklucHV0LmlucHV0IHx8XHJcbiAgICAgICAgaW5wdXQgPT09IHN0cm9rZUNvbG9ySW5wdXQuaW5wdXQgfHxcclxuICAgICAgICBpbnB1dCA9PT0gYmFja2dyb3VuZENvbG9ySW5wdXQuaW5wdXRcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKGlucHV0ID09PSBmaWxsQ29sb3JJbnB1dC5pbnB1dCkge1xyXG4gICAgICAgICAgdmFyIG9iamVjdCA9IGZpbGxDb2xvcklucHV0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IHN0cm9rZUNvbG9ySW5wdXQuaW5wdXQpIHtcclxuICAgICAgICAgIHZhciBvYmplY3QgPSBzdHJva2VDb2xvcklucHV0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IGJhY2tncm91bmRDb2xvcklucHV0LmlucHV0KSB7XHJcbiAgICAgICAgICB2YXIgb2JqZWN0ID0gYmFja2dyb3VuZENvbG9ySW5wdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob2JqZWN0LmVuYWJsZWQpIHtcclxuICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gaW5wdXQudmFsdWUucmVwbGFjZSgvW14wLTlhLWZBLUZfXS9nLCBcIlwiKTtcclxuICAgICAgICAgIGlmIChpbnB1dFZhbHVlID09PSBcIlwiICYmIGlucHV0ID09PSBmaWxsQ29sb3JJbnB1dC5pbnB1dClcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IFwiQzRDNEM0XCI7XHJcbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gXCJcIiAmJiBpbnB1dCA9PT0gc3Ryb2tlQ29sb3JJbnB1dC5pbnB1dClcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IFwiMDAwMDAwXCI7XHJcbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSA9PSBcIlwiICYmIGlucHV0ID09PSBiYWNrZ3JvdW5kQ29sb3JJbnB1dC5pbnB1dClcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IFwiRTVFNUU1XCI7XHJcbiAgICAgICAgICBzd2l0Y2ggKGlucHV0VmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMToge1xyXG4gICAgICAgICAgICAgIGxldCBfY29sb3IgPSBpbnB1dFZhbHVlLnJlcGVhdCg2KTtcclxuICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IF9jb2xvci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgICAgICAgIGxldCBfY29sb3IgPSBpbnB1dFZhbHVlLnJlcGVhdCgzKTtcclxuICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IF9jb2xvci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMzoge1xyXG4gICAgICAgICAgICAgIGxldCBzcGxpdHRlZFZhbHVlcyA9IGlucHV0VmFsdWUuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgYCR7c3BsaXR0ZWRWYWx1ZXNbMF19JHtzcGxpdHRlZFZhbHVlc1swXX0ke3NwbGl0dGVkVmFsdWVzWzFdfSR7c3BsaXR0ZWRWYWx1ZXNbMV19JHtzcGxpdHRlZFZhbHVlc1syXX0ke3NwbGl0dGVkVmFsdWVzWzJdfWAudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIGNhc2UgNToge1xyXG4gICAgICAgICAgICAgIGxldCBzcGxpdHRlZFZhbHVlcyA9IGlucHV0VmFsdWVcclxuICAgICAgICAgICAgICAgIC5zdWJzdHIoMCwgaW5wdXRWYWx1ZS5sZW5ndGggLSAoaW5wdXRWYWx1ZS5sZW5ndGggLSAzKSlcclxuICAgICAgICAgICAgICAgIC5zcGxpdChcIlwiKTtcclxuICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICBgJHtzcGxpdHRlZFZhbHVlc1swXX0ke3NwbGl0dGVkVmFsdWVzWzBdfSR7c3BsaXR0ZWRWYWx1ZXNbMV19JHtzcGxpdHRlZFZhbHVlc1sxXX0ke3NwbGl0dGVkVmFsdWVzWzJdfSR7c3BsaXR0ZWRWYWx1ZXNbMl19YC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dFZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB2YXIgb3BhY2l0eSA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgICAgIChwYXJzZUludChvYmplY3Qub3BhY2l0eUlucHV0LnZhbHVlLCAxMCkgLyAxMDApICogMjU1XHJcbiAgICAgICAgICApLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgIG9iamVjdC5jb2xvclByZXZpZXcuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cclxuICAgICAgICAgICAgXCIjXCIgKyBpbnB1dC52YWx1ZSArIG9wYWNpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGlucHV0ID09PSBmaWxsQ29sb3JJbnB1dC5vcGFjaXR5SW5wdXQgfHxcclxuICAgICAgICBpbnB1dCA9PT0gc3Ryb2tlQ29sb3JJbnB1dC5vcGFjaXR5SW5wdXQgfHxcclxuICAgICAgICBpbnB1dCA9PT0gYmFja2dyb3VuZENvbG9ySW5wdXQub3BhY2l0eUlucHV0XHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChpbnB1dCA9PT0gZmlsbENvbG9ySW5wdXQub3BhY2l0eUlucHV0KSB7XHJcbiAgICAgICAgICB2YXIgb2JqZWN0ID0gZmlsbENvbG9ySW5wdXQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dCA9PT0gc3Ryb2tlQ29sb3JJbnB1dC5vcGFjaXR5SW5wdXQpIHtcclxuICAgICAgICAgIHZhciBvYmplY3QgPSBzdHJva2VDb2xvcklucHV0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IGJhY2tncm91bmRDb2xvcklucHV0Lm9wYWNpdHlJbnB1dCkge1xyXG4gICAgICAgICAgdmFyIG9iamVjdCA9IGJhY2tncm91bmRDb2xvcklucHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0LmVuYWJsZWQpIHtcclxuICAgICAgICAgIHZhciBjb2xvclByZXZpZXcgPSBvYmplY3QuY29sb3JQcmV2aWV3O1xyXG4gICAgICAgICAgdmFyIGNvbG9ySW5wdXQgPSBvYmplY3QuaW5wdXQ7XHJcbiAgICAgICAgICBpZiAocGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKSA+IDEwMCkge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IDEwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghaW5wdXQudmFsdWUuZW5kc1dpdGgoXCIlXCIpKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUgKyBcIiVcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHZhciBvcGFjaXR5ID0gTWF0aC5yb3VuZChcclxuICAgICAgICAgICAgKHBhcnNlSW50KGlucHV0LnZhbHVlLCAxMCkgLyAxMDApICogMjU1XHJcbiAgICAgICAgICApLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgIGNvbG9yUHJldmlldy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNcIiArIGNvbG9ySW5wdXQudmFsdWUgKyBvcGFjaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAocGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKSA8PSAwIHx8ICFwYXJzZUludChpbnB1dC52YWx1ZSwgMTApKSB7XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJlZnJlc2hDYW52YXMoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgc2NhbGUgPSAwLjU7XHJcbiAgY2FudmFzLnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2NhbGUgKz0gZXZlbnQuZGVsdGFZICogLTAuMDE7XHJcbiAgICAgIHNjYWxlID0gTWF0aC5taW4oTWF0aC5tYXgoMC4xMjUsIHNjYWxlKSwgNCk7XHJcbiAgICAgIGNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZX0pYDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB2YXIgZmlsbENvbG9yID0gXCIjXCIgKyBmaWxsQ29sb3JJbnB1dC5pbnB1dC52YWx1ZTtcclxuICAgIHZhciBzdHJva2VDb2xvciA9IFwiI1wiICsgc3Ryb2tlQ29sb3JJbnB1dC5pbnB1dC52YWx1ZTtcclxuICAgIHZhciBzaXplID0gcGFyc2VJbnQoc2l6ZUlucHV0LnZhbHVlLCAxMCk7XHJcbiAgICB2YXIgZ2FwID0gcGFyc2VJbnQoZ2FwSW5wdXQudmFsdWUsIDEwKTtcclxuICAgIHZhciBjb3VudFggPSBwYXJzZUludCh4Q291bnRJbnB1dC52YWx1ZSwgMTApO1xyXG4gICAgdmFyIGNvdW50WSA9IHBhcnNlSW50KHlDb3VudElucHV0LnZhbHVlLCAxMCk7XHJcbiAgICB2YXIgc2hhcGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25fX3NlbGVjdG9yX19vcHRpb24tLWFjdGl2ZVwiKVxyXG4gICAgICAuZGF0YXNldC5zaGFwZTtcclxuICAgIHZhciBmaWxsT3BhY2l0eSA9IHBhcnNlSW50KGZpbGxDb2xvcklucHV0Lm9wYWNpdHlJbnB1dC52YWx1ZSwgMTApIC8gMTAwO1xyXG4gICAgdmFyIHN0cm9rZU9wYWNpdHkgPSBwYXJzZUludChzdHJva2VDb2xvcklucHV0Lm9wYWNpdHlJbnB1dC52YWx1ZSwgMTApIC8gMTAwO1xyXG4gICAgdmFyIHN0cm9rZVdpZHRoID0gcGFyc2VJbnQoc3Ryb2tlQ29sb3JJbnB1dC53aWR0aElucHV0LnZhbHVlLCAxMCk7XHJcbiAgICB2YXIgZmlsbCA9IHtcclxuICAgICAgZW5hYmxlZDogZmlsbENvbG9ySW5wdXQuZW5hYmxlZCxcclxuICAgICAgY29sb3I6IGZpbGxDb2xvcixcclxuICAgICAgb3BhY2l0eTogZmlsbE9wYWNpdHksXHJcbiAgICB9O1xyXG4gICAgdmFyIHN0cm9rZSA9IHtcclxuICAgICAgZW5hYmxlZDogc3Ryb2tlQ29sb3JJbnB1dC5lbmFibGVkLFxyXG4gICAgICBjb2xvcjogc3Ryb2tlQ29sb3IsXHJcbiAgICAgIG9wYWNpdHk6IHN0cm9rZU9wYWNpdHksXHJcbiAgICAgIHdpZHRoOiBzdHJva2VXaWR0aCxcclxuICAgIH07XHJcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoXHJcbiAgICAgIHtcclxuICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XHJcbiAgICAgICAgICB0eXBlOiBcImNyZWF0ZS1ncmlkXCIsXHJcbiAgICAgICAgICBjb3VudFgsXHJcbiAgICAgICAgICBjb3VudFksXHJcbiAgICAgICAgICBmaWxsLFxyXG4gICAgICAgICAgc3Ryb2tlLFxyXG4gICAgICAgICAgZ2FwLFxyXG4gICAgICAgICAgc2l6ZSxcclxuICAgICAgICAgIHNoYXBlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiKlwiXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogXCJjYW5jZWxcIiB9IH0sIFwiKlwiKTtcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=