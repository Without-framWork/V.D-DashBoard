var mainModule =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: testme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testme", function() { return testme; });
/* global alert */
function testme() {
  alert("hi!");
}
$(document).ready(function () {
  "use strict";

  // map
  var map;
  var marker;

  // Initialize the map
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 30.46917064636305,
        lng: 30.9207369266489
      },
      zoom: 10
    });

    // Add a marker when the user clicks on the map
    map.addListener("click", function (event) {
      if (marker) {
        marker.setMap(null);
      }
      marker = new google.maps.Marker({
        position: event.latLng,
        map: map
      });
    });
  }

  // Handle the "Save" button click event
  $("#saveLocation").on("click", function () {
    if (marker) {
      var latitude = marker.getPosition().lat();
      var longitude = marker.getPosition().lng();
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);

      // TODO: Save the latitude and longitude to your desired location
      // You can send an AJAX request to your server or perform any other necessary action
    }

    // Close the modal
    $("#modal-18").modal("hide");
  });

  // Trigger the map initialization when the modal is shown
  $("#modal-18").on("shown.bs.modal", function () {
    initMap();
  });

  // main-sidebar

  $(".data-btn").click(function () {
    $("nav ul .data-show").toggleClass("data-submenu");
    $("nav ul .one").toggleClass("rotate");
  });
  $(".structure-btn").click(function () {
    $("nav ul .structure-show").toggleClass("structure-submenu");
    $("nav ul .two").toggleClass("rotate");
  });
  $(".employees-btn").click(function () {
    $("nav ul .employees-show").toggleClass("employees-submenu");
    $("nav ul .there").toggleClass("rotate");
  });
  $(".departure-btn").click(function () {
    $("nav ul .departure-show").toggleClass("departure-submenu");
    $("nav ul .four").toggleClass("rotate");
  });

  //data-picker

  $(".date-range").daterangepicker({
    singleDatePicker: true
  });

  //upload-imaeg
  $(".select-image").on("click", function () {
    $("#image-upload").click();
  });

  //map

  $("#image-upload").on("change", function (event) {
    var file = event.target.files[0];
    var picture = $(".picture");
    var pictureSrc = $(".picture-src");
    if (file) {
      var reader = new FileReader();
      reader.onload = function () {
        picture.css("display", "block");
        pictureSrc.attr("src", reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      picture.css("display", "none");
      pictureSrc.attr("src", "#");
    }
  });
  //datepicker

  $("#datetimepicker4,#datetimepicker17,#datetimepicker20,#datetimepicker22,#datetimepicker23").datetimepicker({
    // format: "L",
    format: "YYYY-MM-DD",
    icons: {
      time: "far fa-clock"
      // date: "fa fa-calendar",
      // up: "fa fa-arrow-up",
      // down: "fa fa-arrow-down"
    }
  });
  // timepicker

  $("#datetimepicker3,#datetimepicker2,#datetimepicker1,#datetimepicker").datetimepicker({
    // format: "LT",
    format: "YYYY-MM-DD",
    icons: {
      time: "far fa-clock"
      // date: "fa fa-calendar",
      // up: "fa fa-arrow-up",
      // down: "fa fa-arrow-down"
    }
    // time: "fa fa-clock"
  });

  $(".repeater").repeater({
    show: function show() {
      $(this).slideDown();
    },
    hide: function hide(deleteElement) {
      $(this).slideUp(deleteElement);
    }
    // ready: function (setIndexes) {},
  });

  window.outerRepeater = $(".outer-repeater").repeater({
    isFirstItemUndeletable: true,
    show: function show() {
      $(this).show();
    },
    hide: function hide(deleteElement) {
      $(this).hide(deleteElement);
    }
  });
  $(".select2").select2({});
  $(".select2-tags").select2({
    tags: true,
    maximumSelectionLength: 2
  });
  $(".js-example-tags").select2({
    tags: true,
    maximumSelectionLength: 2
  });
  $(".main-Carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  //prouducts
  $(".proudct-Carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
  $(".js-example-tags").select2({
    tags: true,
    maximumSelectionLength: 2
  });

  // $('[data-toggle="datepicker"]').datepicker();

  $(window).on("load", function () {
    $("#myModal").modal("show");
  });
});

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: testme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/main */ "./js/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "testme", function() { return _js_main__WEBPACK_IMPORTED_MODULE_0__["testme"]; });

__webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map