/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build/practice2/email-form.js":
/*!***************************************!*\
  !*** ./build/practice2/email-form.js ***!
  \***************************************/
/***/ (() => {

eval("const regapp = Vue.createApp({});\r\n// eslint-disable-next-line vue/multi-word-component-names\r\nregapp.component('reg', {\r\n    template: '<div>'\r\n        + '<form id=\"regform\"> '\r\n        + '<p>Регистрация</p>'\r\n        + '<label id=\"email-label\" for=\"email\">Email</label>'\r\n        + '<input type=\"email\" placeholder=\"user@gmail.com\" id=\"email\" name=\"email\"/>'\r\n        + '<div v-if=\"auth\">'\r\n        + '<label id=\"pass-label\" for=\"password\">Password</label>'\r\n        + '<input type=\"password\" placeholder=\"Password\" id=\"pass\" v-model=\"pass\"/>'\r\n        + '<label id=\"conf-label\" for=\"password\">Confirm password</label>'\r\n        + '<input type=\"password\" placeholder=\"Confirm password\" id=\"conf-pass\" v-model=\"confpass\"/>'\r\n        + '</div>'\r\n        + '<button type=\"button\" id=\"btn\" v-on:click=\"nextStep\">Отправить</button>'\r\n        + '</form>'\r\n        + '</div>',\r\n    data() {\r\n        return {\r\n            pass: null,\r\n            confpass: null,\r\n            auth: false,\r\n        };\r\n    },\r\n    methods: {\r\n        nextStep() {\r\n            if (!this.auth) {\r\n                alert('Письмо отправлено на указанную почту');\r\n                this.auth = true;\r\n            }\r\n            else {\r\n                if (this.pass !== this.confpass) {\r\n                    alert('Пароли не совпадают!');\r\n                }\r\n                else {\r\n                    alert('Регистрация прошла успешно!');\r\n                }\r\n            }\r\n        },\r\n    },\r\n});\r\nregapp.mount('#app');\r\n\n\n//# sourceURL=webpack://web/./build/practice2/email-form.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./build/practice2/email-form.js"]();
/******/ 	
/******/ })()
;