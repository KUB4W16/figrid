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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  cursor: default !important;\n}\n*:focus {\n  outline: 0;\n}\n\n::selection {\n  color: #000;\n  background: rgba(24, 160, 251, 0.35);\n}\n\n::-webkit-scrollbar {\n  width: 7px;\n  height: 7px;\n  background-color: #0000;\n  padding: 1px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n::-webkit-scrollbar-corner {\n  background-color: #e5e5e5;\n}\n\nbody {\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  font-family: \"Inter\", sans-serif;\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 0.5fr 4fr 45px;\n  width: 100%;\n  height: 100%;\n}\n\n.header {\n  grid-row: 1;\n  grid-column: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #e5e5e5;\n}\n.header__title {\n  margin: 0;\n  padding: 0px 10px 0px 10px;\n  border-left: 1px solid #e5e5e5;\n  font-family: \"Inter\", sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n}\n.header__logo {\n  padding: 10px 15px 10px 10px;\n  height: 100%;\n}\n\n.section {\n  display: grid;\n  grid-gap: 4px 8px;\n  padding: 8px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.section--3x3 {\n  grid-template-columns: 0.6fr 0.6fr 1fr;\n  grid-template-rows: 30px 1fr 1fr;\n}\n.section--2x3 {\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 30px 1fr 1fr;\n}\n.section--1x2 {\n  grid-template-columns: 1fr;\n  grid-template-rows: 30px 1fr;\n}\n.section--1x2--full-size {\n  grid-column: 1;\n  grid-row: 2;\n}\n.section--hidden-overflow {\n  overflow: hidden;\n}\n.section--header-col-1 {\n  grid-row: 1;\n  grid-column: 1;\n}\n.section--header-col-2 {\n  grid-row: 1;\n  grid-column: 2;\n}\n.section--header-col-3 {\n  grid-row: 1;\n  grid-column: 3;\n}\n.section--col-1-row-1 {\n  grid-column: 1;\n  grid-row: 2;\n}\n.section--col-1-row-2 {\n  grid-column: 1;\n  grid-row: 3;\n}\n.section--col-2-row-1 {\n  grid-column: 2;\n  grid-row: 2;\n}\n.section--col-2-row-2 {\n  grid-column: 2;\n  grid-row: 3;\n}\n.section--col-3-row-1 {\n  grid-column: 3;\n  grid-row: 2;\n}\n.section--col-3-row-2 {\n  grid-column: 3;\n  grid-row: 3;\n}\n.section--disabled {\n  filter: grayscale(1);\n}\n.section__header {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  color: #333333;\n}\n.section__header__checkbox {\n  filter: unset;\n  margin-left: 10px;\n}\n.section__header__checkbox:checked {\n  filter: hue-rotate(340deg) brightness(1.2);\n}\n.section__header__label {\n  font-size: 9px;\n  font-weight: 600;\n  margin-left: 1px;\n  color: #333;\n}\n.section__header--flex {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.section__header--flex--space-between {\n  justify-content: space-between;\n}\n.section__basic-input {\n  user-select: none;\n  padding: 0;\n  outline: none;\n  height: 28px;\n  max-width: 88px;\n  position: relative;\n  margin: 1px 0;\n  width: 100%;\n  color: #333;\n  fill: #333;\n  border-radius: 2px;\n  background-clip: padding-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #0000;\n  font-size: 11px;\n}\n.section__basic-input:hover {\n  border: 1px solid #e5e5e5;\n}\n.section__basic-input:focus-within {\n  border: 1px solid #18a0fb;\n}\n.section__basic-input__label {\n  font-style: normal;\n  font-weight: normal;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  height: 28px;\n  width: 28px;\n  flex: 0 0 28px;\n  line-height: 28px;\n  font-size: 11px;\n  color: #b3b3b3;\n  fill: #b3b3b3;\n}\n.section__basic-input__label svg {\n  display: block;\n  margin: auto;\n  transform: translateZ(0);\n}\n.section__basic-input__input {\n  font-size: 11px;\n  padding-left: 0;\n  margin-left: 0;\n  border: none;\n  color: #333;\n  fill: #333;\n  background-color: #0000;\n  width: 100%;\n  padding: 0 0 0 7px;\n  height: 28px;\n  background-clip: padding-box;\n  min-width: 0;\n  background-clip: padding-box;\n}\n.section__color-input {\n  user-select: none;\n  padding: 0;\n  outline: none;\n  height: 28px;\n  max-width: 144px;\n  position: relative;\n  margin: 1px 0;\n  width: 100%;\n  color: #333;\n  fill: #333;\n  border-radius: 2px;\n  background-clip: padding-box;\n  display: flex;\n  align-items: center;\n  border: 1px solid #0000;\n  font-size: 11px;\n}\n.section__color-input:hover .section__color-input__opacity__input {\n  border-left: 1px solid #e5e5e5;\n  border-radius: 0px 1px 1px 0px;\n}\n.section__color-input:hover {\n  border: 1px solid #e5e5e5;\n}\n.section__color-input:focus-within .section__color-input__opacity__input {\n  border-left: 1px solid #e5e5e5;\n  border-radius: 0px 1px 1px 0px;\n}\n.section__color-input:focus-within {\n  border: 1px solid #18a0fb;\n}\n.section__color-input__color-preview {\n  user-select: none;\n  padding: 0;\n  border: 0;\n  outline: none;\n  flex: 0 0 16px;\n  margin: 8px 0 8px 7px;\n  border-radius: 1px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  position: relative;\n  flex-shrink: 0;\n  height: 16px;\n  width: 16px;\n}\n.section__color-input__input {\n  font-size: inherit;\n  user-select: none;\n  margin: 0;\n  outline: none;\n  background-color: transparent;\n  width: 100%;\n  padding: 0 0 0 7px;\n  height: 28px;\n  border: 1px solid transparent;\n  min-width: 0;\n  color: #333;\n  fill: #333;\n  border-radius: 2px;\n  background-clip: padding-box;\n  flex: 1 0 72px;\n}\n.section__color-input__opacity {\n  font-size: inherit;\n  color: #333;\n  fill: #333;\n  padding: 0;\n  outline: none;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  height: 28px;\n  margin: 1px 0;\n  flex: 0 0 48px;\n  border: 1px solid transparent;\n  margin-right: 0;\n  position: relative;\n}\n.section__color-input__opacity__input {\n  font-size: inherit;\n  user-select: none;\n  margin: 0;\n  outline: none;\n  background-color: transparent;\n  width: 100%;\n  padding: 0 0 0 7px;\n  height: 28px;\n  border: 1px solid transparent;\n  min-width: 0;\n  color: #333;\n  fill: #333;\n  border-radius: 2px;\n  background-clip: padding-box;\n}\n.section__selector {\n  position: relative;\n  height: 30px;\n  border-radius: 2px;\n  border: 2px solid transparent;\n  padding-left: 1px;\n  padding-right: 1px;\n  align-self: center;\n  justify-self: left;\n  overflow: hidden;\n  box-sizing: border-box;\n  background-clip: padding-box;\n  display: inline-flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n}\n.section__selector:hover::before {\n  border: 1px solid #e5e5e5;\n}\n.section__selector:before {\n  content: \"\";\n  width: calc(100% - 4px);\n  height: calc(100% - 4px);\n  position: absolute;\n  border: 1px solid #0000;\n  border-radius: 2px;\n}\n.section__selector__option {\n  flex: 0 0 24px;\n  width: 24px;\n  height: 24px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  flex-flow: row nowrap;\n  justify-content: center;\n  border: 1px solid transparent;\n  background-clip: padding-box;\n  position: relative;\n}\n.section__selector__option__inner {\n  transform: translateZ(0);\n}\n.section__selector__option--active {\n  background-color: #e5e5e5;\n  border-radius: 2px;\n  border-color: #e5e5e5;\n}\n.section__text {\n  font-size: 10px;\n  font-weight: 600;\n  margin: auto 0 auto 0;\n  display: none;\n}\n.section__text--active {\n  display: block;\n}\n.section__preview {\n  border-radius: 2px;\n  width: 100%;\n  height: 100%;\n  padding: 8px;\n  border: 1px solid #0000;\n  position: relative;\n}\n.section__preview:hover {\n  border: 1px solid #e5e5e5;\n}\n.section__preview:focus-within {\n  border: 1px solid #18a0fb;\n}\n.section__preview__cover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 9px;\n  width: calc(100% - 18px);\n  height: calc(100% - 18px);\n  background-color: #e5e5e5;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2px;\n  z-index: 9999;\n}\n.section__preview__inner {\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  background-color: #e5e5e5;\n  border-radius: 2px;\n  display: flex;\n  position: relative;\n  overflow: auto;\n  justify-content: center;\n  align-items: center;\n}\n.section__preview__inner__canvas {\n  transform: scale(0.5);\n  position: absolute;\n}\n\n.bottom-bar {\n  background-color: #2c2c2c;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.bottom-bar__button {\n  color: #fff;\n  background-color: #18a0fb;\n  border-color: transparent;\n  background-clip: border-box;\n  font-weight: 500;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30px;\n  width: 35%;\n  box-sizing: border-box;\n  border-radius: 6px;\n  line-height: 30px;\n  max-width: 200px;\n  text-align: center;\n  flex-shrink: 0;\n  text-align: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  letter-spacing: 0.053px;\n}\n\n.hidden-color-input {\n  display: none;\n  opacity: 0;\n}", "",{"version":3,"sources":["webpack://./src/ui.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter&display=swap\");\r\n\r\n$font: \"Inter\", sans-serif;\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  &:focus {\r\n    outline: 0;\r\n  }\r\n  cursor: default !important;\r\n}\r\n\r\n::selection {\r\n  color: #000;\r\n  background: rgba(#18a0fb, 0.35);\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 7px;\r\n  height: 7px;\r\n  background-color: #0000;\r\n  padding: 1px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  border-radius: 4px;\r\n  background-color: hsla(0, 0%, 0%, 0.1);\r\n}\r\n\r\n::-webkit-scrollbar-corner {\r\n  background-color: #e5e5e5;\r\n}\r\n\r\nbody {\r\n  overflow: hidden;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: $font;\r\n}\r\n\r\n.wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 1fr 0.5fr 4fr 45px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.header {\r\n  grid-row: 1;\r\n  grid-column: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  &__title {\r\n    margin: 0;\r\n    padding: 0px 10px 0px 10px;\r\n    border-left: 1px solid #e5e5e5;\r\n    font-family: $font;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n  }\r\n  &__logo {\r\n    padding: 10px 15px 10px 10px;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.section {\r\n  display: grid;\r\n  grid-gap: 4px 8px;\r\n  padding: 8px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  &--3x3 {\r\n    grid-template-columns: 0.6fr 0.6fr 1fr;\r\n    grid-template-rows: 30px 1fr 1fr;\r\n  }\r\n  &--2x3 {\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 30px 1fr 1fr;\r\n  }\r\n  &--1x2 {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 30px 1fr;\r\n    &--full-size {\r\n      grid-column: 1;\r\n      grid-row: 2;\r\n    }\r\n  }\r\n  &--hidden-overflow {\r\n    overflow: hidden;\r\n  }\r\n  &--header-col-1 {\r\n    grid-row: 1;\r\n    grid-column: 1;\r\n  }\r\n  &--header-col-2 {\r\n    grid-row: 1;\r\n    grid-column: 2;\r\n  }\r\n  &--header-col-3 {\r\n    grid-row: 1;\r\n    grid-column: 3;\r\n  }\r\n  &--col-1-row-1 {\r\n    grid-column: 1;\r\n    grid-row: 2;\r\n  }\r\n  &--col-1-row-2 {\r\n    grid-column: 1;\r\n    grid-row: 3;\r\n  }\r\n  &--col-2-row-1 {\r\n    grid-column: 2;\r\n    grid-row: 2;\r\n  }\r\n  &--col-2-row-2 {\r\n    grid-column: 2;\r\n    grid-row: 3;\r\n  }\r\n  &--col-3-row-1 {\r\n    grid-column: 3;\r\n    grid-row: 2;\r\n  }\r\n  &--col-3-row-2 {\r\n    grid-column: 3;\r\n    grid-row: 3;\r\n  }\r\n  &--disabled {\r\n    filter: grayscale(1);\r\n  }\r\n  &__header {\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 10px;\r\n    color: #333333;\r\n    &__checkbox {\r\n      filter: unset;\r\n      margin-left: 10px;\r\n      &:checked {\r\n        filter: hue-rotate(340deg) brightness(1.2);\r\n      }\r\n    }\r\n    &__label {\r\n      font-size: 9px;\r\n      font-weight: 600;\r\n      margin-left: 1px;\r\n      color: #333;\r\n    }\r\n    &--flex {\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      &--space-between {\r\n        justify-content: space-between;\r\n      }\r\n    }\r\n  }\r\n  &__basic-input {\r\n    user-select: none;\r\n    padding: 0;\r\n    outline: none;\r\n    height: 28px;\r\n    max-width: 88px;\r\n    position: relative;\r\n    margin: 1px 0;\r\n    width: 100%;\r\n    color: #333;\r\n    fill: #333;\r\n    border-radius: 2px;\r\n    // cursor: default;\r\n    background-clip: padding-box;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 1px solid #0000;\r\n    font-size: 11px;\r\n    &:hover {\r\n      border: 1px solid #e5e5e5;\r\n    }\r\n    &:focus-within {\r\n      border: 1px solid #18a0fb;\r\n    }\r\n    &__label {\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      align-items: center;\r\n      display: flex;\r\n      justify-content: center;\r\n      text-align: center;\r\n      height: 28px;\r\n      width: 28px;\r\n      flex: 0 0 28px;\r\n      line-height: 28px;\r\n      font-size: 11px;\r\n      color: #b3b3b3;\r\n      fill: #b3b3b3;\r\n      & svg {\r\n        display: block;\r\n        margin: auto;\r\n        transform: translateZ(0);\r\n      }\r\n    }\r\n    &__input {\r\n      font-size: 11px;\r\n      padding-left: 0;\r\n      margin-left: 0;\r\n      border: none;\r\n      color: #333;\r\n      fill: #333;\r\n      background-color: #0000;\r\n      width: 100%;\r\n      padding: 0 0 0 7px;\r\n      height: 28px;\r\n      background-clip: padding-box;\r\n      min-width: 0;\r\n      // cursor: default;\r\n      background-clip: padding-box;\r\n    }\r\n  }\r\n  &__color-input {\r\n    user-select: none;\r\n    padding: 0;\r\n    outline: none;\r\n    height: 28px;\r\n    max-width: 144px;\r\n    position: relative;\r\n    margin: 1px 0;\r\n    width: 100%;\r\n    color: #333;\r\n    fill: #333;\r\n    border-radius: 2px;\r\n    background-clip: padding-box;\r\n    display: flex;\r\n    align-items: center;\r\n    border: 1px solid #0000;\r\n    font-size: 11px;\r\n    &:hover &__opacity__input {\r\n      border-left: 1px solid #e5e5e5;\r\n      border-radius: 0px 1px 1px 0px;\r\n    }\r\n    &:hover {\r\n      border: 1px solid #e5e5e5;\r\n    }\r\n    &:focus-within &__opacity__input {\r\n      border-left: 1px solid #e5e5e5;\r\n      border-radius: 0px 1px 1px 0px;\r\n    }\r\n    &:focus-within {\r\n      border: 1px solid #18a0fb;\r\n    }\r\n    &__color-preview {\r\n      user-select: none;\r\n      padding: 0;\r\n      border: 0;\r\n      outline: none;\r\n      flex: 0 0 16px;\r\n      margin: 8px 0 8px 7px;\r\n      border-radius: 1px;\r\n      box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);\r\n      overflow: hidden;\r\n      position: relative;\r\n      flex-shrink: 0;\r\n      height: 16px;\r\n      width: 16px;\r\n    }\r\n    &__input {\r\n      font-size: inherit;\r\n      user-select: none;\r\n      margin: 0;\r\n      outline: none;\r\n      background-color: transparent;\r\n      width: 100%;\r\n      padding: 0 0 0 7px;\r\n      height: 28px;\r\n      border: 1px solid transparent;\r\n      min-width: 0;\r\n      color: #333;\r\n      fill: #333;\r\n      border-radius: 2px;\r\n      background-clip: padding-box;\r\n      flex: 1 0 72px;\r\n    }\r\n    &__opacity {\r\n      font-size: inherit;\r\n      color: #333;\r\n      fill: #333;\r\n      padding: 0;\r\n      outline: none;\r\n      user-select: none;\r\n      display: flex;\r\n      align-items: center;\r\n      height: 28px;\r\n      margin: 1px 0;\r\n      flex: 0 0 48px;\r\n      border: 1px solid transparent;\r\n      margin-right: 0;\r\n      position: relative;\r\n      &__input {\r\n        font-size: inherit;\r\n        user-select: none;\r\n        margin: 0;\r\n        outline: none;\r\n        background-color: transparent;\r\n        width: 100%;\r\n        padding: 0 0 0 7px;\r\n        height: 28px;\r\n        border: 1px solid transparent;\r\n        min-width: 0;\r\n        color: #333;\r\n        fill: #333;\r\n        border-radius: 2px;\r\n        // cursor: default;\r\n        background-clip: padding-box;\r\n      }\r\n    }\r\n  }\r\n  &__selector {\r\n    position: relative;\r\n    height: 30px;\r\n    border-radius: 2px;\r\n    border: 2px solid transparent;\r\n    padding-left: 1px;\r\n    padding-right: 1px;\r\n    align-self: center;\r\n    justify-self: left;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n    background-clip: padding-box;\r\n    display: inline-flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    &:hover::before {\r\n      border: 1px solid #e5e5e5;\r\n    }\r\n    &:before {\r\n      content: \"\";\r\n      width: calc(100% - 4px);\r\n      height: calc(100% - 4px);\r\n      position: absolute;\r\n      border: 1px solid #0000;\r\n      border-radius: 2px;\r\n    }\r\n    &__option {\r\n      flex: 0 0 24px;\r\n      width: 24px;\r\n      height: 24px;\r\n      box-sizing: border-box;\r\n      display: flex;\r\n      align-items: center;\r\n      flex-flow: row nowrap;\r\n      justify-content: center;\r\n      border: 1px solid transparent;\r\n      background-clip: padding-box;\r\n      position: relative;\r\n      &__inner {\r\n        transform: translateZ(0);\r\n      }\r\n      &--active {\r\n        background-color: #e5e5e5;\r\n        border-radius: 2px;\r\n        border-color: #e5e5e5;\r\n      }\r\n    }\r\n  }\r\n  &__text {\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n    margin: auto 0 auto 0;\r\n    display: none;\r\n    &--active {\r\n      display: block;\r\n    }\r\n  }\r\n  &__preview {\r\n    border-radius: 2px;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 8px;\r\n    border: 1px solid #0000;\r\n    position: relative;\r\n    &:hover {\r\n      border: 1px solid #e5e5e5;\r\n    }\r\n    &:focus-within {\r\n      border: 1px solid #18a0fb;\r\n    }\r\n    &__cover {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      margin: 9px;\r\n      width: calc(100% - 18px);\r\n      height: calc(100% - 18px);\r\n      background-color: #e5e5e5;\r\n      display: none;\r\n      justify-content: center;\r\n      align-items: center;\r\n      border-radius: 2px;\r\n      z-index: 9999;\r\n    }\r\n    &__inner {\r\n      padding: 8px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #e5e5e5;\r\n      border-radius: 2px;\r\n      display: flex;\r\n      position: relative;\r\n      overflow: auto;\r\n      justify-content: center;\r\n      align-items: center;\r\n      &__canvas {\r\n        transform: scale(0.5);\r\n        position: absolute;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.bottom-bar {\r\n  background-color: #2c2c2c;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  &__button {\r\n    color: #fff;\r\n    background-color: #18a0fb;\r\n    border-color: transparent;\r\n    background-clip: border-box;\r\n    font-weight: 500;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 30px;\r\n    width: 35%;\r\n    box-sizing: border-box;\r\n    border-radius: 6px;\r\n    line-height: 30px;\r\n    max-width: 200px;\r\n    text-align: center;\r\n    flex-shrink: 0;\r\n    text-align: center;\r\n    flex-shrink: 0;\r\n    font-size: 11px;\r\n    letter-spacing: 0.053px;\r\n  }\r\n}\r\n\r\n.hidden-color-input {\r\n  display: none;\r\n  opacity: 0;\r\n}\r\n"],"sourceRoot":""}]);
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
onmessage = (event) => {
  console.log(event);
  if (event.data.pluginMessage.type === "selection") {
    image.src =
      "data:image/svg+xml;base64," + event.data.pluginMessage.selection;
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
        // !todo: poprawić układ canvasa
        x = canvas.width / 2 - ((countX + 2) / 2) * (gap + w) + i * (w + gap);
        y = canvas.height / 2 - ((countY + 2) / 2) * (gap + h) + j * (h + gap);
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
    let ratio =
      image.width / image.height > 0 && shape === "SELECTION"
        ? image.width / image.height
        : 1;
    canvas.width = (countX + 3) * (size * ratio + gap) * 2;
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
        let s = document.querySelector(".section--2x3");
        s.querySelectorAll("input").forEach((i) => (i.disabled = true));
        s.classList.add("section--disabled");
      } else {
        document
          .querySelector(".section__text")
          .classList.remove("section__text--active");
        let s = document.querySelector(".section--2x3");
        s.querySelectorAll("input").forEach((i) => (i.disabled = false));
        s.classList.remove("section--disabled");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGFBQWE7QUFDL0Isb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE1BQU07QUFDOUM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EseUJBQXlCLGlCQUFpQixrQkFBa0I7QUFDNUQsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlncmlkLy4vc3JjL3VpLnNjc3MiLCJ3ZWJwYWNrOi8vZmlncmlkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9maWdyaWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9maWdyaWQvLi9zcmMvdWkuc2Nzcz9jOThkIiwid2VicGFjazovL2ZpZ3JpZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly9maWdyaWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmlncmlkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZpZ3JpZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZpZ3JpZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maWdyaWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmlncmlkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maWdyaWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maWdyaWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maWdyaWQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZpZ3JpZC8uL3NyYy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xcbn1cXG4qOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNCwgMTYwLCAyNTEsIDAuMzUpO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA3cHg7XFxuICBoZWlnaHQ6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwO1xcbiAgcGFkZGluZzogMXB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciA0ZnIgNDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XFxufVxcbi5oZWFkZXJfX3RpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTVlNWU1O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uaGVhZGVyX19sb2dvIHtcXG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogNHB4IDhweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xcbn1cXG4uc2VjdGlvbi0tM3gzIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC42ZnIgMC42ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDFmciAxZnI7XFxufVxcbi5zZWN0aW9uLS0yeDMge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDFmciAxZnI7XFxufVxcbi5zZWN0aW9uLS0xeDIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyO1xcbn1cXG4uc2VjdGlvbi0tMXgyLS1mdWxsLXNpemUge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMjtcXG59XFxuLnNlY3Rpb24tLWhpZGRlbi1vdmVyZmxvdyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc2VjdGlvbi0taGVhZGVyLWNvbC0xIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxufVxcbi5zZWN0aW9uLS1oZWFkZXItY29sLTIge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMjtcXG59XFxuLnNlY3Rpb24tLWhlYWRlci1jb2wtMyB7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAzO1xcbn1cXG4uc2VjdGlvbi0tY29sLTEtcm93LTEge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMjtcXG59XFxuLnNlY3Rpb24tLWNvbC0xLXJvdy0yIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDM7XFxufVxcbi5zZWN0aW9uLS1jb2wtMi1yb3ctMSB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAyO1xcbn1cXG4uc2VjdGlvbi0tY29sLTItcm93LTIge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMztcXG59XFxuLnNlY3Rpb24tLWNvbC0zLXJvdy0xIHtcXG4gIGdyaWQtY29sdW1uOiAzO1xcbiAgZ3JpZC1yb3c6IDI7XFxufVxcbi5zZWN0aW9uLS1jb2wtMy1yb3ctMiB7XFxuICBncmlkLWNvbHVtbjogMztcXG4gIGdyaWQtcm93OiAzO1xcbn1cXG4uc2VjdGlvbi0tZGlzYWJsZWQge1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XFxufVxcbi5zZWN0aW9uX19oZWFkZXIge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG4uc2VjdGlvbl9faGVhZGVyX19jaGVja2JveCB7XFxuICBmaWx0ZXI6IHVuc2V0O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5zZWN0aW9uX19oZWFkZXJfX2NoZWNrYm94OmNoZWNrZWQge1xcbiAgZmlsdGVyOiBodWUtcm90YXRlKDM0MGRlZykgYnJpZ2h0bmVzcygxLjIpO1xcbn1cXG4uc2VjdGlvbl9faGVhZGVyX19sYWJlbCB7XFxuICBmb250LXNpemU6IDlweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tbGVmdDogMXB4O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5zZWN0aW9uX19oZWFkZXItLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2VjdGlvbl9faGVhZGVyLS1mbGV4LS1zcGFjZS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNlY3Rpb25fX2Jhc2ljLWlucHV0IHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtYXgtd2lkdGg6IDg4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDFweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogIzMzMztcXG4gIGZpbGw6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG4uc2VjdGlvbl9fYmFzaWMtaW5wdXQ6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcXG59XFxuLnNlY3Rpb25fX2Jhc2ljLWlucHV0OmZvY3VzLXdpdGhpbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMThhMGZiO1xcbn1cXG4uc2VjdGlvbl9fYmFzaWMtaW5wdXRfX2xhYmVsIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgd2lkdGg6IDI4cHg7XFxuICBmbGV4OiAwIDAgMjhweDtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgY29sb3I6ICNiM2IzYjM7XFxuICBmaWxsOiAjYjNiM2IzO1xcbn1cXG4uc2VjdGlvbl9fYmFzaWMtaW5wdXRfX2xhYmVsIHN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG59XFxuLnNlY3Rpb25fX2Jhc2ljLWlucHV0X19pbnB1dCB7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZmlsbDogIzMzMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDAgMCA3cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG59XFxuLnNlY3Rpb25fX2NvbG9yLWlucHV0IHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtYXgtd2lkdGg6IDE0NHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAxcHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICMzMzM7XFxuICBmaWxsOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDA7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcbi5zZWN0aW9uX19jb2xvci1pbnB1dDpob3ZlciAuc2VjdGlvbl9fY29sb3ItaW5wdXRfX29wYWNpdHlfX2lucHV0IHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U1ZTVlNTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxcHggMXB4IDBweDtcXG59XFxuLnNlY3Rpb25fX2NvbG9yLWlucHV0OmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XFxufVxcbi5zZWN0aW9uX19jb2xvci1pbnB1dDpmb2N1cy13aXRoaW4gLnNlY3Rpb25fX2NvbG9yLWlucHV0X19vcGFjaXR5X19pbnB1dCB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNWU1ZTU7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMXB4IDFweCAwcHg7XFxufVxcbi5zZWN0aW9uX19jb2xvci1pbnB1dDpmb2N1cy13aXRoaW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE4YTBmYjtcXG59XFxuLnNlY3Rpb25fX2NvbG9yLWlucHV0X19jb2xvci1wcmV2aWV3IHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmbGV4OiAwIDAgMTZweDtcXG4gIG1hcmdpbjogOHB4IDAgOHB4IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG59XFxuLnNlY3Rpb25fX2NvbG9yLWlucHV0X19pbnB1dCB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAwIDAgN3B4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBtaW4td2lkdGg6IDA7XFxuICBjb2xvcjogIzMzMztcXG4gIGZpbGw6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgZmxleDogMSAwIDcycHg7XFxufVxcbi5zZWN0aW9uX19jb2xvci1pbnB1dF9fb3BhY2l0eSB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGZpbGw6ICMzMzM7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtYXJnaW46IDFweCAwO1xcbiAgZmxleDogMCAwIDQ4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnNlY3Rpb25fX2NvbG9yLWlucHV0X19vcGFjaXR5X19pbnB1dCB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAwIDAgN3B4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBtaW4td2lkdGg6IDA7XFxuICBjb2xvcjogIzMzMztcXG4gIGZpbGw6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbn1cXG4uc2VjdGlvbl9fc2VsZWN0b3Ige1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDFweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2VjdGlvbl9fc2VsZWN0b3I6aG92ZXI6OmJlZm9yZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xcbn1cXG4uc2VjdGlvbl9fc2VsZWN0b3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDRweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDRweCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLnNlY3Rpb25fX3NlbGVjdG9yX19vcHRpb24ge1xcbiAgZmxleDogMCAwIDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2VjdGlvbl9fc2VsZWN0b3JfX29wdGlvbl9faW5uZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbn1cXG4uc2VjdGlvbl9fc2VsZWN0b3JfX29wdGlvbi0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXItY29sb3I6ICNlNWU1ZTU7XFxufVxcbi5zZWN0aW9uX190ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW46IGF1dG8gMCBhdXRvIDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2VjdGlvbl9fdGV4dC0tYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uc2VjdGlvbl9fcHJldmlldyB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2VjdGlvbl9fcHJldmlldzpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xcbn1cXG4uc2VjdGlvbl9fcHJldmlldzpmb2N1cy13aXRoaW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE4YTBmYjtcXG59XFxuLnNlY3Rpb25fX3ByZXZpZXdfX2NvdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IDlweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxOHB4KTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMThweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcbi5zZWN0aW9uX19wcmV2aWV3X19pbm5lciB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zZWN0aW9uX19wcmV2aWV3X19pbm5lcl9fY2FudmFzIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmJvdHRvbS1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5ib3R0b20tYmFyX19idXR0b24ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThhMGZiO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDM1JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDUzcHg7XFxufVxcblxcbi5oaWRkZW4tY29sb3ItaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0Usc0JBQUE7RUFJQSwwQkFBQTtBQUxGO0FBRUU7RUFDRSxVQUFBO0FBQUo7O0FBS0E7RUFDRSxXQUFBO0VBQ0Esb0NBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQW5DSztBQWlDUDs7QUFLQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUZGO0FBR0U7RUFDRSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQXpERztFQTBESCxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0U7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQUZGO0FBR0U7RUFDRSxzQ0FBQTtFQUNBLGdDQUFBO0FBREo7QUFHRTtFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QUFESjtBQUdFO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtBQURKO0FBRUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUFOO0FBR0U7RUFDRSxnQkFBQTtBQURKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQURKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQURKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQURKO0FBR0U7RUFDRSxj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QSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFITjtBQUlNO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQUZSOztBQVFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUxGO0FBTUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFKSjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBTEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXImZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuJGZvbnQ6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgJjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICB9XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuOjpzZWxlY3Rpb24ge1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKCMxOGEwZmIsIDAuMzUpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiA3cHg7XFxyXFxuICBoZWlnaHQ6IDdweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwO1xcclxcbiAgcGFkZGluZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciA0ZnIgNDVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGdyaWQtcm93OiAxO1xcclxcbiAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U1ZTVlNTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIH1cXHJcXG4gICZfX2xvZ28ge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWdhcDogNHB4IDhweDtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xcclxcbiAgJi0tM3gzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjZmciAwLjZmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnIgMWZyO1xcclxcbiAgfVxcclxcbiAgJi0tMngzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyIDFmcjtcXHJcXG4gIH1cXHJcXG4gICYtLTF4MiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyO1xcclxcbiAgICAmLS1mdWxsLXNpemUge1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmLS1oaWRkZW4tb3ZlcmZsb3cge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgfVxcclxcbiAgJi0taGVhZGVyLWNvbC0xIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgfVxcclxcbiAgJi0taGVhZGVyLWNvbC0yIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgfVxcclxcbiAgJi0taGVhZGVyLWNvbC0zIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgfVxcclxcbiAgJi0tY29sLTEtcm93LTEge1xcclxcbiAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgZ3JpZC1yb3c6IDI7XFxyXFxuICB9XFxyXFxuICAmLS1jb2wtMS1yb3ctMiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICBncmlkLXJvdzogMztcXHJcXG4gIH1cXHJcXG4gICYtLWNvbC0yLXJvdy0xIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgIGdyaWQtcm93OiAyO1xcclxcbiAgfVxcclxcbiAgJi0tY29sLTItcm93LTIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDM7XFxyXFxuICB9XFxyXFxuICAmLS1jb2wtMy1yb3ctMSB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICBncmlkLXJvdzogMjtcXHJcXG4gIH1cXHJcXG4gICYtLWNvbC0zLXJvdy0yIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgIGdyaWQtcm93OiAzO1xcclxcbiAgfVxcclxcbiAgJi0tZGlzYWJsZWQge1xcclxcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG4gICZfX2hlYWRlciB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICBjb2xvcjogIzMzMzMzMztcXHJcXG4gICAgJl9fY2hlY2tib3gge1xcclxcbiAgICAgIGZpbHRlcjogdW5zZXQ7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgJjpjaGVja2VkIHtcXHJcXG4gICAgICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgzNDBkZWcpIGJyaWdodG5lc3MoMS4yKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJl9fbGFiZWwge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogOXB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcXHJcXG4gICAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgfVxcclxcbiAgICAmLS1mbGV4IHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAmLS1zcGFjZS1iZXR3ZWVuIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX2Jhc2ljLWlucHV0IHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMjhweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4OHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogMXB4IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgZmlsbDogIzMzMztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAvLyBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xcclxcbiAgICB9XFxyXFxuICAgICY6Zm9jdXMtd2l0aGluIHtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMThhMGZiO1xcclxcbiAgICB9XFxyXFxuICAgICZfX2xhYmVsIHtcXHJcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIGhlaWdodDogMjhweDtcXHJcXG4gICAgICB3aWR0aDogMjhweDtcXHJcXG4gICAgICBmbGV4OiAwIDAgMjhweDtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcXHJcXG4gICAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgICAgY29sb3I6ICNiM2IzYjM7XFxyXFxuICAgICAgZmlsbDogI2IzYjNiMztcXHJcXG4gICAgICAmIHN2ZyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJl9faW5wdXQge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICAgIGZpbGw6ICMzMzM7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgcGFkZGluZzogMCAwIDAgN3B4O1xcclxcbiAgICAgIGhlaWdodDogMjhweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgICAgIG1pbi13aWR0aDogMDtcXHJcXG4gICAgICAvLyBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fY29sb3ItaW5wdXQge1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDE0NHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogMXB4IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgZmlsbDogIzMzMztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICAmOmhvdmVyICZfX29wYWNpdHlfX2lucHV0IHtcXHJcXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNWU1ZTU7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDFweCAxcHggMHB4O1xcclxcbiAgICB9XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpmb2N1cy13aXRoaW4gJl9fb3BhY2l0eV9faW5wdXQge1xcclxcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U1ZTVlNTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggMXB4IDFweCAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpmb2N1cy13aXRoaW4ge1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOGEwZmI7XFxyXFxuICAgIH1cXHJcXG4gICAgJl9fY29sb3ItcHJldmlldyB7XFxyXFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICBmbGV4OiAwIDAgMTZweDtcXHJcXG4gICAgICBtYXJnaW46IDhweCAwIDhweCA3cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xcclxcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2IoMCAwIDAgLyAxMCUpO1xcclxcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgfVxcclxcbiAgICAmX19pbnB1dCB7XFxyXFxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDdweDtcXHJcXG4gICAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgbWluLXdpZHRoOiAwO1xcclxcbiAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICAgIGZpbGw6ICMzMzM7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICAgICAgZmxleDogMSAwIDcycHg7XFxyXFxuICAgIH1cXHJcXG4gICAgJl9fb3BhY2l0eSB7XFxyXFxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICAgIGZpbGw6ICMzMzM7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgICAgbWFyZ2luOiAxcHggMDtcXHJcXG4gICAgICBmbGV4OiAwIDAgNDhweDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICZfX2lucHV0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDAgMCA3cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMDtcXHJcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICAgICAgZmlsbDogIzMzMztcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgICAgIC8vIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19zZWxlY3RvciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICY6aG92ZXI6OmJlZm9yZSB7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcXHJcXG4gICAgfVxcclxcbiAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDRweCk7XFxyXFxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0cHgpO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIH1cXHJcXG4gICAgJl9fb3B0aW9uIHtcXHJcXG4gICAgICBmbGV4OiAwIDAgMjRweDtcXHJcXG4gICAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICZfX2lubmVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJi0tYWN0aXZlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6ICNlNWU1ZTU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX190ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBtYXJnaW46IGF1dG8gMCBhdXRvIDA7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICYtLWFjdGl2ZSB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX3ByZXZpZXcge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcXHJcXG4gICAgfVxcclxcbiAgICAmOmZvY3VzLXdpdGhpbiB7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE4YTBmYjtcXHJcXG4gICAgfVxcclxcbiAgICAmX19jb3ZlciB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIG1hcmdpbjogOXB4O1xcclxcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxOHB4KTtcXHJcXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE4cHgpO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgICB6LWluZGV4OiA5OTk5O1xcclxcbiAgICB9XFxyXFxuICAgICZfX2lubmVyIHtcXHJcXG4gICAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgJl9fY2FudmFzIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1iYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyYztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAmX19idXR0b24ge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4YTBmYjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1M3B4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuLWNvbG9yLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IGZ1bmN0aW9uKGNzcywgc3R5bGUpe1xuICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG4gIH07XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICB2YXIgbm9uY2UgPVxuICAgICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKHN0eWxlKXtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KFwiaGVhZFwiKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH07XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi91aS5zY3NzXCI7XHJcblxyXG5jb25zdCBTSEFQRVMgPSB7XHJcbiAgcmVjdGFuZ2xlOiBcIlJFQ1RBTkdMRVwiLFxyXG4gIHRyaWFuZ2xlOiBcIlRSSUFOR0xFXCIsXHJcbiAgZWxsaXBzZTogXCJFTExJUFNFXCIsXHJcbiAgc3RhcjogXCJTVEFSXCIsXHJcbiAgc2VsZWN0aW9uOiBcIlNFTEVDVElPTlwiLFxyXG59O1xyXG5cclxuY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gIGlmIChldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2UudHlwZSA9PT0gXCJzZWxlY3Rpb25cIikge1xyXG4gICAgaW1hZ2Uuc3JjID1cclxuICAgICAgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiICsgZXZlbnQuZGF0YS5wbHVnaW5NZXNzYWdlLnNlbGVjdGlvbjtcclxuICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZS50eXBlID09PSBcInNlbGVjdGlvbl90b29fY29tcGxleFwiKSB7XHJcbiAgICBpbWFnZS5zcmMgPSBcIlwiO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXplXCIpLnZhbHVlID0gZXZlbnQuZGF0YS5wbHVnaW5NZXNzYWdlLmhlaWdodDtcclxuICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZS50eXBlID09PSBcInNlbGVjdGlvbl9lbXB0eVwiKSB7XHJcbiAgICB2YXIgZWxlbWVudFRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuc2VjdGlvbl9fc2VsZWN0b3JfX29wdGlvbltkYXRhLXNoYXBlPVNFTEVDVElPTl1cIlxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnRUb1JlbW92ZSk7XHJcbiAgICBlbGVtZW50VG9SZW1vdmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50VG9SZW1vdmUpO1xyXG4gIH1cclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBsb2FkZWQpO1xyXG5cclxuZnVuY3Rpb24gZHJhd0dyaWQoY2FudmFzLCBjdHgsIGNvdW50WCwgY291bnRZLCBzaXplLCBnYXAsIGZpbGwsIHN0cm9rZSwgc2hhcGUpIHtcclxuICBzaXplID0gc2l6ZSAqIDI7XHJcbiAgZ2FwID0gZ2FwICogMjtcclxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgaWYgKGZpbGwuZW5hYmxlZCkge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI1wiICsgZmlsbC5jb2xvcjtcclxuICB9XHJcbiAgaWYgKHN0cm9rZS5lbmFibGVkKSB7XHJcbiAgICBjdHgubGluZVdpZHRoID0gc3Ryb2tlLndpZHRoICogNDtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiI1wiICsgc3Ryb2tlLmNvbG9yO1xyXG4gIH1cclxuICBmb3IgKHZhciBpID0gMTsgaSA8PSBjb3VudFg7IGkrKykge1xyXG4gICAgZm9yICh2YXIgaiA9IDE7IGogPD0gY291bnRZOyBqKyspIHtcclxuICAgICAgbGV0IHggPVxyXG4gICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSAoKGNvdW50WCArIDIpIC8gMikgKiAoZ2FwICsgc2l6ZSkgKyBpICogKHNpemUgKyBnYXApO1xyXG4gICAgICBsZXQgeSA9XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCAvIDIgLVxyXG4gICAgICAgICgoY291bnRZICsgMikgLyAyKSAqIChnYXAgKyBzaXplKSArXHJcbiAgICAgICAgaiAqIChzaXplICsgZ2FwKTtcclxuICAgICAgaWYgKHNoYXBlID09PSBTSEFQRVMucmVjdGFuZ2xlKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5yZWN0KHgsIHksIHNpemUsIHNpemUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBTSEFQRVMudHJpYW5nbGUpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyBzaXplLCB5KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyBzaXplIC8gMiwgeSAtIChzaXplICogTWF0aC5zcXJ0KDMpKSAvIDIpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hhcGUgPT09IFNIQVBFUy5lbGxpcHNlKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmMoeCwgeSwgc2l6ZSAvIDIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gU0hBUEVTLnN0YXIpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyAoc2l6ZSAvIDIpICogMC43NSwgeSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgKHNpemUgLyAzKSAqIDEuNSwgeSAtIChzaXplICogTWF0aC5zcXJ0KDIpKSAvIDQpO1xyXG4gICAgICAgIGN0eC5saW5lVG8oeCArIChzaXplIC8gMikgKiAxLjI1LCB5KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyBzaXplLCB5KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyAoc2l6ZSAvIDMpICogMiwgeSArIHNpemUgLyA0KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyAoc2l6ZSAvIDQpICogMywgeSArIChzaXplIC8gMykgKiAxLjc1KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyAoc2l6ZSAvIDQpICogMiwgeSArIHNpemUgLyAzKTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyBzaXplIC8gNCwgeSArIChzaXplIC8gMykgKiAxLjc1KTtcclxuICAgICAgICBjdHgubGluZVRvKHggKyBzaXplIC8gMywgeSArIHNpemUgLyA0KTtcclxuICAgICAgICBjdHgubGluZVRvKHgsIHkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBTSEFQRVMuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IGggPSBzaXplO1xyXG4gICAgICAgIGxldCB3ID0gKGltYWdlLndpZHRoICogaCkgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgLy8gIXRvZG86IHBvcHJhd2nEhyB1a8WCYWQgY2FudmFzYVxyXG4gICAgICAgIHggPSBjYW52YXMud2lkdGggLyAyIC0gKChjb3VudFggKyAyKSAvIDIpICogKGdhcCArIHcpICsgaSAqICh3ICsgZ2FwKTtcclxuICAgICAgICB5ID0gY2FudmFzLmhlaWdodCAvIDIgLSAoKGNvdW50WSArIDIpIC8gMikgKiAoZ2FwICsgaCkgKyBqICogKGggKyBnYXApO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHksIHcsIGgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgucmVjdCh4LCB5LCBzaXplLCBzaXplKTtcclxuICAgICAgfVxyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHguY2xpcCgpO1xyXG4gICAgICBpZiAoZmlsbC5lbmFibGVkKSB7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc3Ryb2tlLmVuYWJsZWQpIHtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgIH1cclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRlZCgpIHtcclxuICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZVwiKTtcclxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbFwiKTtcclxuXHJcbiAgY29uc3QgeENvdW50SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50WFwiKTtcclxuICBjb25zdCB5Q291bnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRZXCIpO1xyXG4gIGNvbnN0IHNpemVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l6ZVwiKTtcclxuICBjb25zdCBnYXBJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FwXCIpO1xyXG5cclxuICBjb25zdCBmaWxsQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpbGxTdGF0ZUNoZWNrYm94XCIpO1xyXG4gIGNvbnN0IHN0cm9rZUNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdHJva2VTdGF0ZUNoZWNrYm94XCIpO1xyXG5cclxuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JJbnB1dCA9IHtcclxuICAgIGlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhY2tncm91bmRDb2xvclwiKSxcclxuICAgIGhpZGRlbklucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhY2tncm91bmRIaWRkZW5Db2xvcklucHV0XCIpLFxyXG4gICAgb3BhY2l0eUlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhY2tncm91bmRPcGFjaXR5XCIpLFxyXG4gICAgY29sb3JQcmV2aWV3OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhY2tncm91bmRDb2xvclByZXZpZXdcIiksXHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbGxDb2xvcklucHV0ID0ge1xyXG4gICAgaW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsbENvbG9yXCIpLFxyXG4gICAgaGlkZGVuSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsbEhpZGRlbkNvbG9ySW5wdXRcIiksXHJcbiAgICBvcGFjaXR5SW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsbE9wYWNpdHlcIiksXHJcbiAgICBjb2xvclByZXZpZXc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsbENvbG9yUHJldmlld1wiKSxcclxuICAgIGVuYWJsZWQ6IGZpbGxDaGVja2JveC5jaGVja2VkLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0cm9rZUNvbG9ySW5wdXQgPSB7XHJcbiAgICBpbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdHJva2VDb2xvclwiKSxcclxuICAgIGhpZGRlbklucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0cm9rZUhpZGRlbkNvbG9ySW5wdXRcIiksXHJcbiAgICBvcGFjaXR5SW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3Ryb2tlT3BhY2l0eVwiKSxcclxuICAgIHdpZHRoSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3Ryb2tlV2lkdGhcIiksXHJcbiAgICBjb2xvclByZXZpZXc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3Ryb2tlQ29sb3JQcmV2aWV3XCIpLFxyXG4gICAgZW5hYmxlZDogc3Ryb2tlQ2hlY2tib3guY2hlY2tlZCxcclxuICB9O1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWN0aW9uX19zZWxlY3Rvcl9fb3B0aW9uXCIpO1xyXG5cclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpZXdDYW52YXNcIik7XHJcbiAgY2FudmFzLndpZHRoID0gY2FudmFzLm9mZnNldFdpZHRoO1xyXG4gIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMub2Zmc2V0SGVpZ2h0O1xyXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gIGNvbnN0IGlucHV0c0xpc3QgPSBbXHJcbiAgICB4Q291bnRJbnB1dCxcclxuICAgIHlDb3VudElucHV0LFxyXG4gICAgc2l6ZUlucHV0LFxyXG4gICAgZ2FwSW5wdXQsXHJcbiAgICBmaWxsQ29sb3JJbnB1dC5pbnB1dCxcclxuICAgIGZpbGxDb2xvcklucHV0Lm9wYWNpdHlJbnB1dCxcclxuICAgIHN0cm9rZUNvbG9ySW5wdXQuaW5wdXQsXHJcbiAgICBzdHJva2VDb2xvcklucHV0Lm9wYWNpdHlJbnB1dCxcclxuICAgIHN0cm9rZUNvbG9ySW5wdXQud2lkdGhJbnB1dCxcclxuICAgIGJhY2tncm91bmRDb2xvcklucHV0LmlucHV0LFxyXG4gICAgYmFja2dyb3VuZENvbG9ySW5wdXQub3BhY2l0eUlucHV0LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGNvbG9yUHJldmlld3MgPSBbXHJcbiAgICBmaWxsQ29sb3JJbnB1dC5jb2xvclByZXZpZXcsXHJcbiAgICBzdHJva2VDb2xvcklucHV0LmNvbG9yUHJldmlldyxcclxuICAgIGJhY2tncm91bmRDb2xvcklucHV0LmNvbG9yUHJldmlldyxcclxuICBdO1xyXG5cclxuICBjb25zdCBoaWRkZW5JbnB1dHMgPSBbXHJcbiAgICBmaWxsQ29sb3JJbnB1dC5oaWRkZW5JbnB1dCxcclxuICAgIHN0cm9rZUNvbG9ySW5wdXQuaGlkZGVuSW5wdXQsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3JJbnB1dC5oaWRkZW5JbnB1dCxcclxuICBdO1xyXG5cclxuICBmdW5jdGlvbiByZWZyZXNoQ2FudmFzKCkge1xyXG4gICAgdmFyIGZpbGxPcGFjaXR5ID0gKFxyXG4gICAgICAocGFyc2VJbnQoZmlsbENvbG9ySW5wdXQub3BhY2l0eUlucHV0LnZhbHVlLCAxMCkgKiAyNTUpIC9cclxuICAgICAgMTAwXHJcbiAgICApLnRvU3RyaW5nKDE2KTtcclxuICAgIHZhciBzdHJva2VPcGFjaXR5ID0gKFxyXG4gICAgICAocGFyc2VJbnQoc3Ryb2tlQ29sb3JJbnB1dC5vcGFjaXR5SW5wdXQudmFsdWUsIDEwKSAqIDI1NSkgL1xyXG4gICAgICAxMDBcclxuICAgICkudG9TdHJpbmcoMTYpO1xyXG4gICAgdmFyIGJhY2tncm91bmRPcGFjaXR5ID0gKFxyXG4gICAgICAocGFyc2VJbnQoYmFja2dyb3VuZENvbG9ySW5wdXQub3BhY2l0eUlucHV0LnZhbHVlLCAxMCkgKiAyNTUpIC9cclxuICAgICAgMTAwXHJcbiAgICApLnRvU3RyaW5nKDE2KTtcclxuICAgIGlmIChmaWxsT3BhY2l0eS5pbmNsdWRlcyhcIi5cIikpIHtcclxuICAgICAgZmlsbE9wYWNpdHkgPSBmaWxsT3BhY2l0eS5zbGljZSgwLCBmaWxsT3BhY2l0eS5pbmRleE9mKFwiLlwiKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsbE9wYWNpdHkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIGZpbGxPcGFjaXR5ID0gXCIwXCIgKyBmaWxsT3BhY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3Ryb2tlT3BhY2l0eS5pbmNsdWRlcyhcIi5cIikpIHtcclxuICAgICAgc3Ryb2tlT3BhY2l0eSA9IHN0cm9rZU9wYWNpdHkuc2xpY2UoMCwgc3Ryb2tlT3BhY2l0eS5pbmRleE9mKFwiLlwiKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3Ryb2tlT3BhY2l0eS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgc3Ryb2tlT3BhY2l0eSA9IFwiMFwiICsgc3Ryb2tlT3BhY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmFja2dyb3VuZE9wYWNpdHkuaW5jbHVkZXMoXCIuXCIpKSB7XHJcbiAgICAgIHN0cm9rZU9wYWNpdHkgPSBzdHJva2VPcGFjaXR5LnNsaWNlKDAsIHN0cm9rZU9wYWNpdHkuaW5kZXhPZihcIi5cIikpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJhY2tncm91bmRPcGFjaXR5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBzdHJva2VPcGFjaXR5ID0gXCIwXCIgKyBzdHJva2VPcGFjaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmaWxsQ29sb3IgPSBmaWxsQ29sb3JJbnB1dC5pbnB1dC52YWx1ZSArIGZpbGxPcGFjaXR5O1xyXG4gICAgdmFyIHN0cm9rZUNvbG9yID0gc3Ryb2tlQ29sb3JJbnB1dC5pbnB1dC52YWx1ZSArIHN0cm9rZU9wYWNpdHk7XHJcbiAgICB2YXIgYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9ySW5wdXQuaW5wdXQudmFsdWUgKyBiYWNrZ3JvdW5kT3BhY2l0eTtcclxuICAgIHZhciBzaXplID0gcGFyc2VJbnQoc2l6ZUlucHV0LnZhbHVlLCAxMCk7XHJcbiAgICB2YXIgZ2FwID0gcGFyc2VJbnQoZ2FwSW5wdXQudmFsdWUsIDEwKTtcclxuICAgIHZhciBjb3VudFggPSBwYXJzZUludCh4Q291bnRJbnB1dC52YWx1ZSwgMTApO1xyXG4gICAgdmFyIGNvdW50WSA9IHBhcnNlSW50KHlDb3VudElucHV0LnZhbHVlLCAxMCk7XHJcbiAgICB2YXIgc2hhcGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25fX3NlbGVjdG9yX19vcHRpb24tLWFjdGl2ZVwiKVxyXG4gICAgICAuZGF0YXNldC5zaGFwZTtcclxuICAgIHZhciBzdHJva2VXaWR0aCA9IHBhcnNlSW50KHN0cm9rZUNvbG9ySW5wdXQud2lkdGhJbnB1dC52YWx1ZSwgMTApO1xyXG4gICAgbGV0IHJhdGlvID1cclxuICAgICAgaW1hZ2Uud2lkdGggLyBpbWFnZS5oZWlnaHQgPiAwICYmIHNoYXBlID09PSBcIlNFTEVDVElPTlwiXHJcbiAgICAgICAgPyBpbWFnZS53aWR0aCAvIGltYWdlLmhlaWdodFxyXG4gICAgICAgIDogMTtcclxuICAgIGNhbnZhcy53aWR0aCA9IChjb3VudFggKyAzKSAqIChzaXplICogcmF0aW8gKyBnYXApICogMjtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSAoY291bnRZICsgMykgKiAoc2l6ZSArIGdhcCkgKiAyO1xyXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICBjYW52YXMucGFyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNcIiArIGJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICB2YXIgZmlsbCA9IHtcclxuICAgICAgZW5hYmxlZDogZmlsbENvbG9ySW5wdXQuZW5hYmxlZCxcclxuICAgICAgY29sb3I6IGZpbGxDb2xvcixcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHN0cm9rZSA9IHtcclxuICAgICAgZW5hYmxlZDogc3Ryb2tlQ29sb3JJbnB1dC5lbmFibGVkLFxyXG4gICAgICBjb2xvcjogc3Ryb2tlQ29sb3IsXHJcbiAgICAgIHdpZHRoOiBzdHJva2VXaWR0aCxcclxuICAgIH07XHJcblxyXG4gICAgZHJhd0dyaWQoY2FudmFzLCBjdHgsIGNvdW50WCwgY291bnRZLCBzaXplLCBnYXAsIGZpbGwsIHN0cm9rZSwgc2hhcGUpO1xyXG4gIH1cclxuXHJcbiAgZmlsbENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgZmlsbENvbG9ySW5wdXQuZW5hYmxlZCA9IGZpbGxDaGVja2JveC5jaGVja2VkO1xyXG4gICAgcmVmcmVzaENhbnZhcygpO1xyXG4gICAgZmlsbENvbG9ySW5wdXQuaW5wdXQuZGlzYWJsZWQgPSAhZmlsbENoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICBmaWxsQ29sb3JJbnB1dC5vcGFjaXR5SW5wdXQuZGlzYWJsZWQgPSAhZmlsbENoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICBmaWxsQ29sb3JJbnB1dC5jb2xvclByZXZpZXcucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gZmlsbENoZWNrYm94LmNoZWNrZWRcclxuICAgICAgPyAxXHJcbiAgICAgIDogMC4yNTtcclxuICB9KTtcclxuXHJcbiAgc3Ryb2tlQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBzdHJva2VDb2xvcklucHV0LmVuYWJsZWQgPSBzdHJva2VDaGVja2JveC5jaGVja2VkO1xyXG4gICAgcmVmcmVzaENhbnZhcygpO1xyXG4gICAgc3Ryb2tlQ29sb3JJbnB1dC5pbnB1dC5kaXNhYmxlZCA9ICFzdHJva2VDaGVja2JveC5jaGVja2VkO1xyXG4gICAgc3Ryb2tlQ29sb3JJbnB1dC53aWR0aElucHV0LmRpc2FibGVkID0gIXN0cm9rZUNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICBzdHJva2VDb2xvcklucHV0Lm9wYWNpdHlJbnB1dC5kaXNhYmxlZCA9ICFzdHJva2VDaGVja2JveC5jaGVja2VkO1xyXG4gICAgc3Ryb2tlQ29sb3JJbnB1dC5jb2xvclByZXZpZXcucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID1cclxuICAgICAgc3Ryb2tlQ2hlY2tib3guY2hlY2tlZCA/IDEgOiAwLjI1O1xyXG4gICAgc3Ryb2tlQ29sb3JJbnB1dC53aWR0aElucHV0LnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9XHJcbiAgICAgIHN0cm9rZUNoZWNrYm94LmNoZWNrZWQgPyAxIDogMC4yNTtcclxuICB9KTtcclxuXHJcbiAgZmlsbENvbG9ySW5wdXQuY29sb3JQcmV2aWV3LnN0eWxlLmJhY2tncm91bmRDb2xvciA9XHJcbiAgICBcIiNcIiArIGZpbGxDb2xvcklucHV0LmlucHV0LnZhbHVlO1xyXG4gIHN0cm9rZUNvbG9ySW5wdXQuY29sb3JQcmV2aWV3LnN0eWxlLmJhY2tncm91bmRDb2xvciA9XHJcbiAgICBcIiNcIiArIHN0cm9rZUNvbG9ySW5wdXQuaW5wdXQudmFsdWU7XHJcbiAgYmFja2dyb3VuZENvbG9ySW5wdXQuY29sb3JQcmV2aWV3LnN0eWxlLmJhY2tncm91bmRDb2xvciA9XHJcbiAgICBcIiNcIiArIGJhY2tncm91bmRDb2xvcklucHV0LmlucHV0LnZhbHVlO1xyXG5cclxuICByZWZyZXNoQ2FudmFzKCk7XHJcblxyXG4gIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICBpbnB1dHNMaXN0LnB1c2gob3B0aW9uKTtcclxuICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcclxuICAgICAgLy8gICBvcHRpb24uZGF0YXNldC5zaGFwZSA9PT0gXCJTRUxFQ1RJT05cIiAmJiAhaW1hZ2Uuc3JjLFxyXG4gICAgICAvLyAgIG9wdGlvbi5kYXRhc2V0LnNoYXBlLFxyXG4gICAgICAvLyAgIGltYWdlLnNyY1xyXG4gICAgICAvLyApO1xyXG4gICAgICBmb3IgKGNvbnN0IHNpYmxpbmcgb2Ygb3B0aW9uLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pIHtcclxuICAgICAgICBzaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWN0aW9uX19zZWxlY3Rvcl9fb3B0aW9uLS1hY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgICAgb3B0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCJzZWN0aW9uX19zZWxlY3Rvcl9fb3B0aW9uLS1hY3RpdmVcIik7XHJcbiAgICAgIHJlZnJlc2hDYW52YXMoKTtcclxuICAgICAgaWYgKG9wdGlvbi5kYXRhc2V0LnNoYXBlID09PSBcIlNFTEVDVElPTlwiKSB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25fX3RleHRcIilcclxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbl9fdGV4dC0tYWN0aXZlXCIpO1xyXG4gICAgICAgIGxldCBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uLS0yeDNcIik7XHJcbiAgICAgICAgcy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaSkgPT4gKGkuZGlzYWJsZWQgPSB0cnVlKSk7XHJcbiAgICAgICAgcy5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi0tZGlzYWJsZWRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25fX3RleHRcIilcclxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwic2VjdGlvbl9fdGV4dC0tYWN0aXZlXCIpO1xyXG4gICAgICAgIGxldCBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uLS0yeDNcIik7XHJcbiAgICAgICAgcy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaSkgPT4gKGkuZGlzYWJsZWQgPSBmYWxzZSkpO1xyXG4gICAgICAgIHMuY2xhc3NMaXN0LnJlbW92ZShcInNlY3Rpb24tLWRpc2FibGVkXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvcHRpb24uZGF0YXNldC5zaGFwZSA9PT0gXCJTRUxFQ1RJT05cIiAmJiAhaW1hZ2Uuc3JjKSB7XHJcbiAgICAgICAgdmFyIHByZXZpZXdDb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbl9fcHJldmlld19fY292ZXJcIik7XHJcbiAgICAgICAgcHJldmlld0NvdmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcHJldmlld0NvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uX19wcmV2aWV3X19jb3ZlclwiKTtcclxuICAgICAgICBwcmV2aWV3Q292ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgaGlkZGVuSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoaW5wdXQgPT09IGZpbGxDb2xvcklucHV0LmhpZGRlbklucHV0KSB7XHJcbiAgICAgIHZhciBvYmplY3QgPSBmaWxsQ29sb3JJbnB1dDtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IHN0cm9rZUNvbG9ySW5wdXQuaGlkZGVuSW5wdXQpIHtcclxuICAgICAgdmFyIG9iamVjdCA9IHN0cm9rZUNvbG9ySW5wdXQ7XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0ID09PSBiYWNrZ3JvdW5kQ29sb3JJbnB1dC5oaWRkZW5JbnB1dCkge1xyXG4gICAgICB2YXIgb2JqZWN0ID0gYmFja2dyb3VuZENvbG9ySW5wdXQ7XHJcbiAgICB9XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgb2JqZWN0LmlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUuc2xpY2UoMSk7XHJcbiAgICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKTtcclxuICAgICAgZXZlbnQuaW5pdEV2ZW50KFwiY2hhbmdlXCIsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgb2JqZWN0LmlucHV0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbG9yUHJldmlld3MuZm9yRWFjaCgocHJldmlldykgPT4ge1xyXG4gICAgcHJldmlldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAocHJldmlldyA9PT0gZmlsbENvbG9ySW5wdXQuY29sb3JQcmV2aWV3KSB7XHJcbiAgICAgICAgdmFyIG9iamVjdCA9IGZpbGxDb2xvcklucHV0O1xyXG4gICAgICB9IGVsc2UgaWYgKHByZXZpZXcgPT09IHN0cm9rZUNvbG9ySW5wdXQuY29sb3JQcmV2aWV3KSB7XHJcbiAgICAgICAgdmFyIG9iamVjdCA9IHN0cm9rZUNvbG9ySW5wdXQ7XHJcbiAgICAgIH0gZWxzZSBpZiAocHJldmlldyA9PT0gYmFja2dyb3VuZENvbG9ySW5wdXQuY29sb3JQcmV2aWV3KSB7XHJcbiAgICAgICAgdmFyIG9iamVjdCA9IGJhY2tncm91bmRDb2xvcklucHV0O1xyXG4gICAgICB9XHJcbiAgICAgIG9iamVjdC5oaWRkZW5JbnB1dC5jbGljaygpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGlucHV0c0xpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaW5wdXQgPT09IGZpbGxDb2xvcklucHV0LmlucHV0IHx8XHJcbiAgICAgICAgaW5wdXQgPT09IHN0cm9rZUNvbG9ySW5wdXQuaW5wdXQgfHxcclxuICAgICAgICBpbnB1dCA9PT0gYmFja2dyb3VuZENvbG9ySW5wdXQuaW5wdXRcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKGlucHV0ID09PSBmaWxsQ29sb3JJbnB1dC5pbnB1dCkge1xyXG4gICAgICAgICAgdmFyIG9iamVjdCA9IGZpbGxDb2xvcklucHV0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IHN0cm9rZUNvbG9ySW5wdXQuaW5wdXQpIHtcclxuICAgICAgICAgIHZhciBvYmplY3QgPSBzdHJva2VDb2xvcklucHV0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IGJhY2tncm91bmRDb2xvcklucHV0LmlucHV0KSB7XHJcbiAgICAgICAgICB2YXIgb2JqZWN0ID0gYmFja2dyb3VuZENvbG9ySW5wdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob2JqZWN0LmVuYWJsZWQpIHtcclxuICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gaW5wdXQudmFsdWUucmVwbGFjZSgvW14wLTlhLWZBLUZfXS9nLCBcIlwiKTtcclxuICAgICAgICAgIGlmIChpbnB1dFZhbHVlID09PSBcIlwiICYmIGlucHV0ID09PSBmaWxsQ29sb3JJbnB1dC5pbnB1dClcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IFwiQzRDNEM0XCI7XHJcbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gXCJcIiAmJiBpbnB1dCA9PT0gc3Ryb2tlQ29sb3JJbnB1dC5pbnB1dClcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IFwiMDAwMDAwXCI7XHJcbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSA9PSBcIlwiICYmIGlucHV0ID09PSBiYWNrZ3JvdW5kQ29sb3JJbnB1dC5pbnB1dClcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IFwiRTVFNUU1XCI7XHJcbiAgICAgICAgICBzd2l0Y2ggKGlucHV0VmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMToge1xyXG4gICAgICAgICAgICAgIGxldCBfY29sb3IgPSBpbnB1dFZhbHVlLnJlcGVhdCg2KTtcclxuICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IF9jb2xvci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgICAgICAgIGxldCBfY29sb3IgPSBpbnB1dFZhbHVlLnJlcGVhdCgzKTtcclxuICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IF9jb2xvci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMzoge1xyXG4gICAgICAgICAgICAgIGxldCBzcGxpdHRlZFZhbHVlcyA9IGlucHV0VmFsdWUuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgYCR7c3BsaXR0ZWRWYWx1ZXNbMF19JHtzcGxpdHRlZFZhbHVlc1swXX0ke3NwbGl0dGVkVmFsdWVzWzFdfSR7c3BsaXR0ZWRWYWx1ZXNbMV19JHtzcGxpdHRlZFZhbHVlc1syXX0ke3NwbGl0dGVkVmFsdWVzWzJdfWAudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIGNhc2UgNToge1xyXG4gICAgICAgICAgICAgIGxldCBzcGxpdHRlZFZhbHVlcyA9IGlucHV0VmFsdWVcclxuICAgICAgICAgICAgICAgIC5zdWJzdHIoMCwgaW5wdXRWYWx1ZS5sZW5ndGggLSAoaW5wdXRWYWx1ZS5sZW5ndGggLSAzKSlcclxuICAgICAgICAgICAgICAgIC5zcGxpdChcIlwiKTtcclxuICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICBgJHtzcGxpdHRlZFZhbHVlc1swXX0ke3NwbGl0dGVkVmFsdWVzWzBdfSR7c3BsaXR0ZWRWYWx1ZXNbMV19JHtzcGxpdHRlZFZhbHVlc1sxXX0ke3NwbGl0dGVkVmFsdWVzWzJdfSR7c3BsaXR0ZWRWYWx1ZXNbMl19YC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dFZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB2YXIgb3BhY2l0eSA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgICAgIChwYXJzZUludChvYmplY3Qub3BhY2l0eUlucHV0LnZhbHVlLCAxMCkgLyAxMDApICogMjU1XHJcbiAgICAgICAgICApLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgIG9iamVjdC5jb2xvclByZXZpZXcuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cclxuICAgICAgICAgICAgXCIjXCIgKyBpbnB1dC52YWx1ZSArIG9wYWNpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGlucHV0ID09PSBmaWxsQ29sb3JJbnB1dC5vcGFjaXR5SW5wdXQgfHxcclxuICAgICAgICBpbnB1dCA9PT0gc3Ryb2tlQ29sb3JJbnB1dC5vcGFjaXR5SW5wdXQgfHxcclxuICAgICAgICBpbnB1dCA9PT0gYmFja2dyb3VuZENvbG9ySW5wdXQub3BhY2l0eUlucHV0XHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChpbnB1dCA9PT0gZmlsbENvbG9ySW5wdXQub3BhY2l0eUlucHV0KSB7XHJcbiAgICAgICAgICB2YXIgb2JqZWN0ID0gZmlsbENvbG9ySW5wdXQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dCA9PT0gc3Ryb2tlQ29sb3JJbnB1dC5vcGFjaXR5SW5wdXQpIHtcclxuICAgICAgICAgIHZhciBvYmplY3QgPSBzdHJva2VDb2xvcklucHV0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IGJhY2tncm91bmRDb2xvcklucHV0Lm9wYWNpdHlJbnB1dCkge1xyXG4gICAgICAgICAgdmFyIG9iamVjdCA9IGJhY2tncm91bmRDb2xvcklucHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0LmVuYWJsZWQpIHtcclxuICAgICAgICAgIHZhciBjb2xvclByZXZpZXcgPSBvYmplY3QuY29sb3JQcmV2aWV3O1xyXG4gICAgICAgICAgdmFyIGNvbG9ySW5wdXQgPSBvYmplY3QuaW5wdXQ7XHJcbiAgICAgICAgICBpZiAocGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKSA+IDEwMCkge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IDEwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghaW5wdXQudmFsdWUuZW5kc1dpdGgoXCIlXCIpKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUgKyBcIiVcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHZhciBvcGFjaXR5ID0gTWF0aC5yb3VuZChcclxuICAgICAgICAgICAgKHBhcnNlSW50KGlucHV0LnZhbHVlLCAxMCkgLyAxMDApICogMjU1XHJcbiAgICAgICAgICApLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgIGNvbG9yUHJldmlldy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNcIiArIGNvbG9ySW5wdXQudmFsdWUgKyBvcGFjaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAocGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKSA8PSAwIHx8ICFwYXJzZUludChpbnB1dC52YWx1ZSwgMTApKSB7XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJlZnJlc2hDYW52YXMoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgc2NhbGUgPSAwLjU7XHJcbiAgY2FudmFzLnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2NhbGUgKz0gZXZlbnQuZGVsdGFZICogLTAuMDE7XHJcbiAgICAgIHNjYWxlID0gTWF0aC5taW4oTWF0aC5tYXgoMC4xMjUsIHNjYWxlKSwgNCk7XHJcbiAgICAgIGNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZX0pYDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB2YXIgZmlsbENvbG9yID0gXCIjXCIgKyBmaWxsQ29sb3JJbnB1dC5pbnB1dC52YWx1ZTtcclxuICAgIHZhciBzdHJva2VDb2xvciA9IFwiI1wiICsgc3Ryb2tlQ29sb3JJbnB1dC5pbnB1dC52YWx1ZTtcclxuICAgIHZhciBzaXplID0gcGFyc2VJbnQoc2l6ZUlucHV0LnZhbHVlLCAxMCk7XHJcbiAgICB2YXIgZ2FwID0gcGFyc2VJbnQoZ2FwSW5wdXQudmFsdWUsIDEwKTtcclxuICAgIHZhciBjb3VudFggPSBwYXJzZUludCh4Q291bnRJbnB1dC52YWx1ZSwgMTApO1xyXG4gICAgdmFyIGNvdW50WSA9IHBhcnNlSW50KHlDb3VudElucHV0LnZhbHVlLCAxMCk7XHJcbiAgICB2YXIgc2hhcGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25fX3NlbGVjdG9yX19vcHRpb24tLWFjdGl2ZVwiKVxyXG4gICAgICAuZGF0YXNldC5zaGFwZTtcclxuICAgIHZhciBmaWxsT3BhY2l0eSA9IHBhcnNlSW50KGZpbGxDb2xvcklucHV0Lm9wYWNpdHlJbnB1dC52YWx1ZSwgMTApIC8gMTAwO1xyXG4gICAgdmFyIHN0cm9rZU9wYWNpdHkgPSBwYXJzZUludChzdHJva2VDb2xvcklucHV0Lm9wYWNpdHlJbnB1dC52YWx1ZSwgMTApIC8gMTAwO1xyXG4gICAgdmFyIHN0cm9rZVdpZHRoID0gcGFyc2VJbnQoc3Ryb2tlQ29sb3JJbnB1dC53aWR0aElucHV0LnZhbHVlLCAxMCk7XHJcbiAgICB2YXIgZmlsbCA9IHtcclxuICAgICAgZW5hYmxlZDogZmlsbENvbG9ySW5wdXQuZW5hYmxlZCxcclxuICAgICAgY29sb3I6IGZpbGxDb2xvcixcclxuICAgICAgb3BhY2l0eTogZmlsbE9wYWNpdHksXHJcbiAgICB9O1xyXG4gICAgdmFyIHN0cm9rZSA9IHtcclxuICAgICAgZW5hYmxlZDogc3Ryb2tlQ29sb3JJbnB1dC5lbmFibGVkLFxyXG4gICAgICBjb2xvcjogc3Ryb2tlQ29sb3IsXHJcbiAgICAgIG9wYWNpdHk6IHN0cm9rZU9wYWNpdHksXHJcbiAgICAgIHdpZHRoOiBzdHJva2VXaWR0aCxcclxuICAgIH07XHJcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoXHJcbiAgICAgIHtcclxuICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XHJcbiAgICAgICAgICB0eXBlOiBcImNyZWF0ZS1ncmlkXCIsXHJcbiAgICAgICAgICBjb3VudFgsXHJcbiAgICAgICAgICBjb3VudFksXHJcbiAgICAgICAgICBmaWxsLFxyXG4gICAgICAgICAgc3Ryb2tlLFxyXG4gICAgICAgICAgZ2FwLFxyXG4gICAgICAgICAgc2l6ZSxcclxuICAgICAgICAgIHNoYXBlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiKlwiXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogXCJjYW5jZWxcIiB9IH0sIFwiKlwiKTtcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=