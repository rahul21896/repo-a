/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/BookingForm.js":
/*!***************************************!*\
  !*** ./src/Components/BookingForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const BookingForm = () => {
  const [boxName, setBoxName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [shift, setShift] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [personName, setPersonName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [phoneNumber, setPhoneNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [hours, setHours] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [hourlyRate, setHourlyRate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [totalAmount, setTotalAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [advanceAmount, setAdvanceAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [remainAmount, setRemainAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [bookingBy, setBookingBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [dateTime, setDateTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [errBoxName, setErrBoxName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [errShift, setErrShift] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [errPersonName, setErrPersonName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [errPhoneNumber, setErrPhoneNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [errHours, setErrHours] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [errHourlyRate, setErrHourlyRate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [errAdvanceAmount, setErrAdvanceAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [errBookingBy, setErrBookingBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [errDateTime, setErrDateTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const boxList = [{
    label: 'Dhoni',
    value: 'dhoni'
  }, {
    label: 'Kohli',
    value: 'kohli'
  }];
  const shiftList = [{
    label: 'Morning',
    value: 'morning'
  }, {
    label: 'Night',
    value: 'night'
  }];
  const handleHours = value => {
    setHours(value);
    if (!isNaN(value) && !isNaN(hourlyRate)) {
      setTotalAmount(value * hourlyRate);
    } else {
      setTotalAmount(0);
    }
  };
  const handleHourlyRate = value => {
    setHourlyRate(value);
    if (!isNaN(value) && !isNaN(hours)) {
      setTotalAmount(value * hours);
    } else {
      setTotalAmount(0);
    }
  };
  const handleAdvanceAmount = value => {
    setAdvanceAmount(value);
    if (!isNaN(value) && !isNaN(totalAmount)) {
      setRemainAmount(totalAmount - value);
    } else {
      setRemainAmount(0);
    }
  };
  const checkTextValidation = (value, filedFunction) => {
    if (value === '' || value === null || value === undefined) {
      filedFunction(true);
      return true;
    } else {
      filedFunction(false);
      return false;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const field1 = checkTextValidation(personName, setErrPersonName);
    const field2 = checkTextValidation(phoneNumber, setErrPhoneNumber);
    const field3 = checkTextValidation(boxName, setErrBoxName);
    const field4 = checkTextValidation(shift, setErrShift);
    const field5 = checkTextValidation(dateTime, setErrDateTime);
    const field6 = checkTextValidation(hours, setErrHours);
    const field7 = checkTextValidation(hourlyRate, setErrHourlyRate);
    const field8 = checkTextValidation(advanceAmount, setErrAdvanceAmount);
    const field9 = checkTextValidation(bookingBy, setErrBookingBy);
    if (field1 || field2 || field3 || field4 || field5 || field6 || field7 || field8 || field9) {
      return false;
    }
    alert('rock');
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title"
  }, "Booking"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: e => handleSubmit(e)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "user-details"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "details"
  }, "Person Name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    placeholder: "Enter Person Name",
    value: personName,
    onInput: e => setPersonName(e.target.value)
  }), errPersonName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "error"
  }, "Person Name is Mandatory")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "details"
  }, "Phone Number"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    placeholder: "Enter Person number",
    value: phoneNumber,
    onInput: e => setPhoneNumber(e.target.value)
  }), errPhoneNumber && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "error"
  }, "Phone Number is Mandatory")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "details"
  }, "Box Name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    onChange: e => setBoxName(e.target.value)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, "Select Box"), boxList.map((item, index) => {
    const selected = item.value === boxName ? 'selected' : '';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: index,
      value: item.value,
      selected: selected
    }, item.label);
  })), errBoxName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "error"
  }, "Box Name is Mandatory")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "details"
  }, "Shift"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    onChange: e => setShift(e.target.value)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, "Select Box"), shiftList.map((item, index) => {
    const selected = item.value === shift ? 'selected' : '';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: index,
      value: item.value,
      selected: selected
    }, item.label);
  })), errShift && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "error"
  }, "Shift is Mandatory")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "details"
  }, "Date Time"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "datetime-local",
    placeholder: "Date Time",
    value: dateTime,
    onChange: e => setDateTime(e.target.value)
  }), errDateTime && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "error"
  }, "Date Time is Mandatory")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "details"
  }, "Hours"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    placeholder: "Enter Hours",
    min: 0,
    value: hours,
    onInput: e => handleHours(e.target.value)
  }), errHours && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "error"
  }, "Hours is Mandatory")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "details"
  }, "Hourly Rate"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    placeholder: "Enter Hourly Rate",
    min: 0,
    value: hourlyRate,
    onInput: e => handleHourlyRate(e.target.value)
  }), errHourlyRate && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "error"
  }, "Hourly Rate is Mandatory")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "details"
  }, "Total Amount"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    placeholder: "Total Amount",
    min: 0,
    value: totalAmount,
    readOnly: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "details"
  }, "Advance Amount"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    placeholder: "Advanced Amount",
    min: 0,
    value: advanceAmount,
    onInput: e => handleAdvanceAmount(e.target.value)
  }), errAdvanceAmount && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "error"
  }, "Advance Amount is Mandatory")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "details"
  }, "Remain Amount"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    placeholder: "Remain Amount",
    min: 0,
    value: remainAmount,
    readOnly: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "details"
  }, "Booking By"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    placeholder: "Enter Booking By Name",
    value: bookingBy,
    onInput: e => setBookingBy(e.target.value)
  }), errBookingBy && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "error"
  }, "Booking By is Mandatory"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "submit",
    value: "Submit"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingForm);

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_BookingForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/BookingForm */ "./src/Components/BookingForm.js");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");




/**
 * Import the stylesheet for the plugin.
 */


// Render the App component into the DOM
(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_BookingForm__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById('booking-form'));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map