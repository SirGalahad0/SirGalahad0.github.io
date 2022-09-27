/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// Бургер-меню\r\ndocument.querySelector('#check-menu').addEventListener('click', () => {\r\n    document.body.classList.toggle('_body-locked');\r\n});\r\n\r\ndocument.querySelectorAll('.header__burger-nav-link').forEach(element => {\r\n    element.addEventListener('click', () => {\r\n        document.getElementById('check-menu').checked = false;\r\n        document.body.classList.remove('_body-locked');\r\n    })\r\n});\r\n\r\n// Контроль input tel \r\nlet inputTel = document.querySelectorAll('.tel');\r\ninputTel.forEach(el => {\r\n    el.addEventListener('input', function() {\r\n        this.value = this.value.replace(/[^0-9\\-()+]/g, '');\r\n    });\r\n})\r\n\r\n// Выбор категорий\r\nlet typeSelect = document.querySelectorAll('.calc__type-block'),\r\nviewSelect = document.querySelectorAll('.view-block');\r\n\r\ntypeSelect.forEach(elem => {\r\n    elem.addEventListener('click', () => {\r\n        document.querySelector('.type-active').classList.remove('type-active')\r\n        elem.classList.add('type-active')\r\n    })\r\n});\r\n\r\nviewSelect.forEach(elem => {\r\n    elem.addEventListener('click', () => {\r\n        document.querySelector('.view-active').classList.remove('view-active')\r\n        elem.classList.add('view-active')\r\n    })\r\n});\r\n\r\n// Range-slider\r\nconst rangeInput = document.querySelectorAll('.calc__square-range-input input'),\r\nsquareInputMax = document.querySelector('.calc__square-label input'),\r\nprogress = document.querySelector(\".calc__square-slider .calc__slider-progress\");\r\n\r\nlet sliderGap = 2;\r\n\r\nsquareInputMax.addEventListener('input', function (event) {\r\n    setTimeout(() => {\r\n        if (squareInputMax.value > 200) squareInputMax.value = 200;\r\n        if (squareInputMax.value < 20) squareInputMax.value = 20;        \r\n        \r\n        progress.style.right = 100 - ((squareInputMax.value - 20) / rangeInput[1].max) * 100 + \"%\";    \r\n        rangeInput[1].value = squareInputMax.value - 20;\r\n    }, 1500);       \r\n})\r\n\r\nrangeInput.forEach(input => {\r\n    input.addEventListener(\"input\", e => {\r\n        //Получаем значения слайдеров\r\n        let minVal = parseInt(rangeInput[0].value),\r\n        maxVal = parseInt(rangeInput[1].value);\r\n\r\n        // Выводы значений для сервера\r\n        /* const minSquare = parseInt(rangeInput[0].value) + 20,\r\n        maxSquare = parseInt(rangeInput[1].value) + 20; */\r\n\r\n        if(maxVal - minVal < sliderGap) {\r\n            if(e.target.className === \"calc__square-range-min\") { //Если активный слайдер левый\r\n                rangeInput[0].value = maxVal - sliderGap;\r\n            } else {\r\n                rangeInput[1].value = minVal + sliderGap;\r\n            }\r\n        } else {\r\n            squareInputMax.value = maxVal + 20;\r\n            progress.style.left = (minVal / rangeInput[0].max) * 100 + \"%\";\r\n            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + \"%\";\r\n        }\r\n    });\r\n});\r\n\r\n// Слайдер wlider\r\n\r\nconst sliderElem = document.querySelectorAll('.wslider__slider-elem'),\r\nsliderBody = document.querySelector('.wslider__slider');\r\n\r\nlet count = 0,\r\nwidth = sliderBody.offsetWidth;\r\n\r\nconst buttonNext = document.querySelector('.wslider__slider-next'),\r\nbuttonPrev = document.querySelector('.wslider__slider-prev');\r\n\r\n// Кнопки слайдера wslider\r\nbuttonNext.addEventListener('click', () => {\r\n    paginationIndicator[count].removeAttribute('status');\r\n    count++;\r\n    if (count >= sliderElem.length) {\r\n        count = 0;\r\n        paginationIndicator[2].removeAttribute('status');\r\n        paginationIndicator[count].setAttribute('status', '1')\r\n    } \r\n    sliderBody.style.transform = 'translate(-'+count*width/3+'px)';\r\n    paginationIndicator[count].setAttribute('status', '1');\r\n});\r\n\r\nbuttonPrev.addEventListener('click', () => {\r\n    paginationIndicator[count].removeAttribute('status');\r\n    count--;\r\n    if (count < 0) {\r\n        count = 0;\r\n    }\r\n    paginationIndicator[count].setAttribute('status', '1');\r\n    sliderBody.style.transform = 'translate(-'+count*width/3+'px)';\r\n});\r\n\r\n// Пагинация для слайдера wlider\r\n\r\nlet paginationIndicator = document.querySelectorAll('.wslider__slider-indicator');\r\n\r\npaginationIndicator[count].setAttribute('status', '1');\r\n\r\n// Слайдер review\r\n\r\nconst revSliderElem = document.querySelectorAll('.review__slider-block'),\r\nrevSliderBody = document.querySelector('.review__slider-body');\r\n\r\nlet revCount = 0,\r\nrevWidth = revSliderBody.offsetWidth;\r\n\r\n//Кнопки слайдера review\r\n\r\nconst revButtonNext = document.querySelector('.review__slider-next'),\r\nrevButtonPrev = document.querySelector('.review__slider-prev');\r\n\r\nrevButtonNext.addEventListener('click', () => {\r\n    revCount++;\r\n    if (revCount >= revSliderElem.length) {\r\n        revCount = 0;\r\n    } \r\n    revSliderBody.style.transform = 'translate(-'+revCount*width/3+'px)';\r\n});\r\n\r\nrevButtonPrev.addEventListener('click', () => {\r\n    revCount--;\r\n    if (revCount < 0) {\r\n        revCount = 0;\r\n    }\r\n    revSliderBody.style.transform = 'translate(-'+revCount*width/3+'px)';\r\n});\r\n\r\n// Аккордеоны\r\n\r\nlet accordion = document.querySelectorAll('.question__accordion');\r\n\r\naccordion.forEach(elem => {\r\n    let accordionContent = elem.nextElementSibling;\r\n    elem.addEventListener('click', () => {\r\n        if(accordionContent.style.maxHeight) {\r\n            document.querySelectorAll('.question__content').forEach(el => el.style.maxHeight = null)\r\n            elem.lastElementChild.style.transform = 'rotate(0deg) scaleX(1.8)'\r\n        } else {\r\n            document.querySelectorAll('.question__content').forEach(el => el.style.maxHeight = null)\r\n            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';\r\n            elem.lastElementChild.style.transform = 'rotate(-180deg) scaleX(1.8)'\r\n        }\r\n    })\r\n})\n\n//# sourceURL=webpack://gulp-package/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;