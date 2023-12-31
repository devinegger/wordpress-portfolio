/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/cloud.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/cloud.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const cloud = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloud);
//# sourceMappingURL=cloud.js.map

/***/ }),

/***/ "./src/WeatherPill.js":
/*!****************************!*\
  !*** ./src/WeatherPill.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherPill),
/* harmony export */   populateWeather: () => (/* binding */ populateWeather)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons.js */ "./src/icons.js");



function WeatherPill({
  pillCount = ""
}) {
  let defaultIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "200",
    height: "200",
    viewBox: "0 0 200 200",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "200",
    height: "200",
    fill: "transparent"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "100",
    cy: "100",
    r: "70",
    fill: "#FFD100"
  }));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wp-block-create-block-current-weather__pill pill-${pillCount}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "wp-block-create-block-current-weather__day-name"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-create-block-current-weather__icon"
  }, defaultIcon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-create-block-current-weather__temps"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-create-block-current-weather__day"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-create-block-current-weather__night"
  })));
}
function populateWeather(forecast) {
  forecast.map((day, index) => {
    const date = new Date(day.dt * 1000);
    const dayName = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_1__.gmdate)("l", date);
    const highTemp = Math.round(day.temp.max);
    const lowTemp = Math.round(day.temp.min);
    const icon = day.weather[0].icon.substring(0, 2) + "d";
    const currentPill = document.querySelector(`.pill-${index}`);
    if (currentPill) {
      const pillName = currentPill.querySelector(".wp-block-create-block-current-weather__day-name");
      const pillIcon = currentPill.querySelector(".wp-block-create-block-current-weather__icon");
      const pillHigh = currentPill.querySelector(".wp-block-create-block-current-weather__day");
      const pillLow = currentPill.querySelector(".wp-block-create-block-current-weather__night");
      if (index === 0) {
        pillName.innerHTML = "today";
      } else {
        pillName.innerHTML = dayName;
      }
      pillIcon.innerHTML = _icons_js__WEBPACK_IMPORTED_MODULE_2__["default"][icon];
      pillHigh.innerHTML = highTemp;
      pillLow.innerHTML = lowTemp;
    }
  });
}

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLatLon: () => (/* binding */ getLatLon),
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
// Open Weather Map API Key
// this is a free key, but you can get your own at https://openweathermap.org/api
const appID = "529c579a705ff017b686d2796f662626";

// base Geo api endpoint url
let geoURL = "https://api.openweathermap.org/geo/1.0/";

// base weather api endpoint url
let weatherURL = "https://api.openweathermap.org/data/3.0/onecall?units=imperial&exclude=hourly,minutely,alerts,current";
async function getLatLon(location) {
  // set query params with zip
  geoURL += "zip?zip=" + location + ",US";

  // add appid to url
  geoURL += "&appid=" + appID;
  const response = await fetch(geoURL);
  const json = await response.json();
  let data = {};
  if (json.cod) {
    data.error = json.cod;
  } else {
    data.name = json.name;
    data.lat = Math.round(json.lat);
    data.lon = Math.round(json.lon);
  }
  return data;
}
async function getWeather(lat, lon) {
  // set query params with lat and lon
  weatherURL += "&lat=" + lat + "&lon=" + lon;

  // add key to url
  weatherURL += "&appid=" + appID;
  const response = await fetch(weatherURL);
  const json = await response.json();

  // console.log(json);

  // error response from latlon api call will return false
  if (!json.daily) {
    return false;
  }
  return json.daily;
}

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/cloud.js");
/* harmony import */ var _WeatherPill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WeatherPill */ "./src/WeatherPill.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


// get components for use in editor


// get cloud icon for use in toolbar


// get useState and useEffect React hooks


/** Internal dependencies */

// get weather pill component and populateWeather function


// use api functions


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function Edit(props) {
  // Get the attributes and function to set attributes from props
  const {
    attributes,
    setAttributes
  } = props;
  // Get the Block Wrapper props
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();

  // get the location text and set up a local state for it
  const [location, setLocation] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.location || "");

  // set boolean for whether the location is valid
  // if attributes.location contains a value, then it has been validated
  const [locationFound, setLocationFound] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(location.length >= 5);

  // set up a local state for status message
  const [status, setStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(locationFound ? attributes.locationName || "" : "Enter a valid US Zip Code");

  // This is a function that is passed to the Textcontrol component.
  // It is called when the location text is changed.
  // It sets the local state and the attributes.
  // It may also provide some validation against notallowed zips
  function setLocationContent(content) {
    let newZip = content;
    newZip = newZip.replace(/[^0-9]/g, "");
    // string replace with regex to remove non-numeric characters

    if (newZip.length >= 5) {
      // if the zip code is at least 5 characters, truncate it to 5
      newZip = newZip.substring(0, 5);
      if (newZip != attributes.location) {
        // if the new zip code is not the same as stored in attributes, skip validation

        setStatus("loading...");
        (async () => {
          const data = await (0,_api__WEBPACK_IMPORTED_MODULE_5__.getLatLon)(newZip);
          if (!data.error) {
            setLocationFound(true);
            setStatus(data.name);
            setAttributes({
              location: newZip,
              locationName: data.name,
              latitude: Math.round(data.lat),
              longitude: Math.round(data.lon)
            });
          } else {
            // if we get here, we have an error
            console.log(data.error);
            setStatus("Invalid Zip Code");
            setLocationFound(false);
          }
        })();
      } else {
        // zip code is the same as stored in attributes
        // set reset status and bounce out
        setStatus(attributes.locationName);
        setLocationFound(true);
      }
    } else {
      // zip is less than 5 characters - set status and bounce out
      setStatus("Enter a valid US Zip Code");
      setLocationFound(false);
    }
    // set the local state for location
    setLocation(newZip);
  }
  function setWeatherPills(numOfDays) {
    const weatherPills = [];
    for (let i = 0; i < numOfDays; i++) {
      weatherPills.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WeatherPill__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: i,
        pillCount: i
      }));
    }
    return weatherPills;
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (locationFound) {
      (async () => {
        const daily = await (0,_api__WEBPACK_IMPORTED_MODULE_5__.getWeather)(attributes.latitude, attributes.longitude);
        if (daily) {
          (0,_WeatherPill__WEBPACK_IMPORTED_MODULE_4__.populateWeather)(daily);
        }
      })();
    }
  }, [locationFound]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "setting"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "create-block-current-weather-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
    className: "blocks-base-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Zip Code", "current-weather")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Zip Code", "current-weather"),
    onChange: setLocationContent,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter a valid US Zip Code", "current-weather"),
    value: location
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, status)))), !locationFound ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Provide a zip code for the desired location.", "current-weather"),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Set a location for the Weather Widget", "current-weather")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Zip Code", "current-weather"),
    onChange: setLocationContent,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter a valid US Zip Code", "current-weather"),
    value: location
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-create-block-current-weather"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-create-block-current-weather__wrap"
  }, setWeatherPills(7))));
}

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const icons = {
  "01d": '<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="transparent"/><circle cx="100" cy="100" r="70" fill="#FFD100"/></svg>',
  "02d": '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="transparent"/><circle cx="137" cy="92" r="51" fill="#FFD100"/><path d="M154.773 113.834C151.974 113.834 149.295 114.316 146.813 115.189C146.839 115.065 146.873 114.948 146.899 114.832C149.655 101.684 141.747 89.0096 129.226 86.5313C122.567 85.209 115.943 87.047 110.791 91.0305C110.876 90.0824 110.936 89.1177 110.936 88.1447C110.928 70.9465 96.5754 57 78.8766 57C61.1779 57 46.8255 70.9465 46.8255 88.1447C46.8255 91.2717 47.3047 94.2822 48.1862 97.1264C46.5173 96.8686 44.7971 96.7272 43.0512 96.7272C25.3524 96.7189 11 110.665 11 127.864C11 143.423 22.7507 156.322 38.0959 158.634V158.775H39.2427C40.4922 158.917 41.7589 159 43.0426 159C44.3264 159 45.6016 158.917 46.8426 158.775H151.495C152.564 158.917 153.651 159 154.755 159C155.859 159 156.946 158.917 158.016 158.775C169.313 157.237 178 147.815 178 136.413C178 123.938 167.593 113.826 154.755 113.826L154.773 113.834Z" fill="#0096D1"/></svg>',
  "03d": '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="transparent"/><path d="M163.382 101.177C160.415 101.177 157.576 101.688 154.946 102.612C154.973 102.48 155.009 102.357 155.036 102.234C157.957 88.3122 149.576 74.8925 136.305 72.2685C129.248 70.8684 122.227 72.8144 116.766 77.0323C116.857 76.0285 116.921 75.007 116.921 73.9768C116.912 55.7669 101.7 41 82.9411 41C64.1825 41 48.9707 55.7669 48.9707 73.9768C48.9707 77.2876 49.4787 80.4753 50.413 83.4868C48.6441 83.2138 46.8209 83.0641 44.9704 83.0641C26.2119 83.0553 11 97.8222 11 116.032C11 132.507 23.4543 146.165 39.7184 148.613V148.762H40.9339C42.2582 148.912 43.6007 149 44.9614 149C46.322 149 47.6735 148.912 48.9888 148.762H159.908C161.041 148.912 162.193 149 163.363 149C164.534 149 165.686 148.912 166.82 148.762C178.793 147.133 188 137.157 188 125.084C188 111.876 176.97 101.168 163.363 101.168L163.382 101.177Z" fill="#0096D1"/></svg>',
  "04d": '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="transparent"/><path d="M171.475 83.904C169.364 83.904 167.342 84.2682 165.47 84.9274C165.489 84.8332 165.515 84.7453 165.534 84.6574C167.614 74.7318 161.647 65.1641 152.2 63.2933C147.176 62.2951 142.179 63.6825 138.291 66.6897C138.356 65.974 138.401 65.2457 138.401 64.5112C138.395 51.5283 127.566 41 114.212 41C100.859 41 90.03 51.5283 90.03 64.5112C90.03 66.8717 90.3916 69.1444 91.0567 71.2915C89.7975 71.0969 88.4996 70.9901 87.1823 70.9901C73.8288 70.9839 63 81.5121 63 94.4951C63 106.241 71.8658 115.978 83.4436 117.724V117.83H84.3089C85.2516 117.937 86.2073 118 87.1759 118C88.1445 118 89.1066 117.937 90.0429 117.83H169.002C169.809 117.937 170.629 118 171.462 118C172.295 118 173.115 117.937 173.922 117.83C182.446 116.669 189 109.556 189 100.949C189 91.5318 181.148 83.8978 171.462 83.8978L171.475 83.904Z" fill="#386AB1"/><path d="M153.449 107.328C150.74 107.328 148.135 107.799 145.732 108.678C145.753 108.563 145.784 108.438 145.816 108.322C148.494 95.2899 140.819 82.7284 128.674 80.2789C122.211 78.9704 115.79 80.7918 110.793 84.7382C110.877 83.7961 110.93 82.8435 110.93 81.8804C110.92 64.8177 97.0031 51 79.8395 51C62.6759 51 48.7489 64.8177 48.7489 81.87C48.7489 84.9685 49.2128 87.9519 50.0668 90.7677C48.4432 90.506 46.788 90.37 45.0906 90.37C27.9164 90.37 14 104.188 14 121.24C14 136.67 25.3967 149.441 40.2831 151.744V151.89H41.4006C42.613 152.037 155.579 152.037 156.612 151.89C167.566 150.362 176 141.024 176 129.729C176 117.367 165.9 107.339 153.449 107.339V107.328Z" fill="#0096D1"/></svg>',
  "09d": '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="white"/><path d="M167.31 60.6753C165.299 60.6753 163.374 61.0205 161.59 61.6454C161.609 61.5561 161.633 61.4728 161.652 61.3895C163.632 51.9795 157.95 42.9088 148.953 41.1352C144.168 40.1888 139.408 41.5042 135.706 44.3552C135.768 43.6766 135.811 42.9862 135.811 42.2899C135.804 29.9813 125.491 20 112.774 20C100.056 20 89.7428 29.9813 89.7428 42.2899C89.7428 44.5278 90.0872 46.6823 90.7206 48.7179C89.5214 48.5334 88.2853 48.4322 87.0308 48.4322C74.3131 48.4263 64 58.4076 64 70.7161C64 81.8521 72.4436 91.0835 83.4701 92.7381V92.8393H84.2942C85.192 92.9405 86.1022 93 87.0246 93C87.9471 93 88.8634 92.9405 89.7551 92.8393H164.954C165.723 92.9405 166.504 93 167.297 93C168.091 93 168.872 92.9405 169.64 92.8393C177.758 91.7382 184 84.9947 184 76.8347C184 67.9068 176.522 60.6693 167.297 60.6693L167.31 60.6753Z" fill="#386AB1"/><path d="M150.563 82.5395C147.987 82.5395 145.512 82.9873 143.226 83.823C143.247 83.7136 143.277 83.5942 143.307 83.4847C145.852 71.0973 138.556 59.1576 127.011 56.8294C120.867 55.5857 114.764 57.3169 110.013 61.068C110.093 60.1725 110.143 59.2671 110.143 58.3517C110.133 42.1336 96.9042 29 80.5882 29C64.2722 29 51.0329 42.1336 51.0329 58.3418C51.0329 61.2869 51.4739 64.1226 52.2857 66.799C50.7423 66.5503 49.1688 66.4209 47.5553 66.4209C31.2292 66.4209 18 79.5546 18 95.7627C18 110.429 28.8339 122.567 42.9852 124.756V124.896H44.0475C45.2001 125.035 152.587 125.035 153.569 124.896C163.982 123.443 172 114.568 172 103.832C172 92.0813 162.399 82.5495 150.563 82.5495V82.5395Z" fill="#0096D1"/><g clip-path="url(#clip0_3282_2516)"><path d="M64.6603 142.598L64.2084 142.362C62.031 141.222 59.3419 142.063 58.2022 144.24L52.484 155.164C51.3442 157.342 52.1854 160.031 54.3628 161.171L54.8146 161.407C56.992 162.547 59.6811 161.706 60.8209 159.528L66.5391 148.604C67.6788 146.427 66.8377 143.738 64.6603 142.598Z" fill="#386AB1"/><path d="M93.0333 138.825L92.5815 138.588C90.4041 137.449 87.715 138.29 86.5752 140.467L80.8571 151.391C79.7173 153.568 80.5585 156.258 82.7359 157.397L83.1877 157.634C85.3651 158.774 88.0542 157.932 89.194 155.755L94.9121 144.831C96.0519 142.654 95.2107 139.965 93.0333 138.825Z" fill="#386AB1"/><path d="M85.1452 169.981C86.3516 167.677 85.4632 164.832 83.1611 163.627C80.8589 162.421 78.0147 163.313 76.8083 165.617L76.2518 166.681C75.0454 168.985 75.9338 171.83 78.2359 173.035C80.5381 174.241 83.3823 173.349 84.5887 171.045L85.1452 169.981Z" fill="#386AB1"/><path d="M123.355 141.357C124.562 139.052 123.673 136.207 121.371 135.002C119.069 133.797 116.225 134.688 115.018 136.993L114.462 138.056C113.255 140.36 114.144 143.206 116.446 144.411C118.748 145.616 121.592 144.724 122.799 142.42L123.355 141.357Z" fill="#386AB1"/><path d="M75.578 124.716C76.7844 122.411 75.8961 119.566 73.5939 118.361C71.2917 117.156 68.4475 118.047 67.2411 120.352L65.1264 124.392C63.92 126.696 64.8084 129.541 67.1105 130.747C69.4127 131.952 72.2569 131.06 73.4633 128.756L75.578 124.716Z" fill="#386AB1"/><path d="M113.118 161.326L112.666 161.089C110.488 159.95 107.799 160.791 106.66 162.968L100.941 173.892C99.8017 176.07 100.643 178.759 102.82 179.898L103.272 180.135C105.449 181.275 108.139 180.433 109.278 178.256L114.996 167.332C116.136 165.155 115.295 162.466 113.118 161.326Z" fill="#386AB1"/></g><defs><clipPath id="clip0_3282_2516"><rect width="153.66" height="151.65" fill="transparent" transform="translate(18 29)"/></clipPath></defs></svg>',
  "10d": '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="transparent"/><ellipse cx="134.5" cy="63" rx="46.5" ry="47" fill="#FFD100"/><path d="M150.563 82.5395C147.987 82.5395 145.512 82.9873 143.226 83.823C143.247 83.7136 143.277 83.5942 143.307 83.4847C145.852 71.0973 138.556 59.1576 127.011 56.8294C120.867 55.5857 114.764 57.3169 110.013 61.068C110.093 60.1725 110.143 59.2671 110.143 58.3517C110.133 42.1336 96.9042 29 80.5882 29C64.2722 29 51.0329 42.1336 51.0329 58.3418C51.0329 61.2869 51.4739 64.1226 52.2857 66.799C50.7423 66.5503 49.1688 66.4209 47.5553 66.4209C31.2292 66.4209 18 79.5546 18 95.7627C18 110.429 28.8339 122.567 42.9852 124.756V124.896H44.0475C45.2001 125.035 152.587 125.035 153.569 124.896C163.982 123.443 172 114.568 172 103.832C172 92.0813 162.399 82.5495 150.563 82.5495V82.5395Z" fill="#0096D1"/><g clip-path="url(#clip0_3282_2552)"><path d="M64.6603 142.598L64.2084 142.362C62.031 141.222 59.3419 142.063 58.2022 144.24L52.484 155.164C51.3442 157.342 52.1854 160.031 54.3628 161.171L54.8146 161.407C56.992 162.547 59.6811 161.706 60.8209 159.528L66.5391 148.604C67.6788 146.427 66.8377 143.738 64.6603 142.598Z" fill="#386AB1"/><path d="M93.0333 138.825L92.5815 138.588C90.4041 137.449 87.715 138.29 86.5752 140.467L80.8571 151.391C79.7173 153.568 80.5585 156.258 82.7359 157.397L83.1877 157.634C85.3651 158.774 88.0542 157.932 89.194 155.755L94.9121 144.831C96.0519 142.654 95.2107 139.965 93.0333 138.825Z" fill="#386AB1"/><path d="M85.1452 169.981C86.3516 167.677 85.4632 164.832 83.1611 163.627C80.8589 162.421 78.0147 163.313 76.8083 165.617L76.2518 166.681C75.0454 168.985 75.9338 171.83 78.2359 173.035C80.5381 174.241 83.3823 173.349 84.5887 171.045L85.1452 169.981Z" fill="#386AB1"/><path d="M123.355 141.357C124.562 139.052 123.673 136.207 121.371 135.002C119.069 133.797 116.225 134.688 115.018 136.993L114.462 138.056C113.255 140.36 114.144 143.206 116.446 144.411C118.748 145.616 121.592 144.724 122.799 142.42L123.355 141.357Z" fill="#386AB1"/><path d="M75.578 124.716C76.7844 122.411 75.8961 119.566 73.5939 118.361C71.2917 117.156 68.4475 118.047 67.2411 120.352L65.1264 124.392C63.92 126.696 64.8084 129.541 67.1105 130.747C69.4127 131.952 72.2569 131.06 73.4633 128.756L75.578 124.716Z" fill="#386AB1"/><path d="M113.118 161.326L112.666 161.089C110.488 159.95 107.799 160.791 106.66 162.968L100.941 173.892C99.8017 176.07 100.643 178.759 102.82 179.898L103.272 180.135C105.449 181.275 108.139 180.433 109.278 178.256L114.996 167.332C116.136 165.155 115.295 162.466 113.118 161.326Z" fill="#386AB1"/></g><defs><clipPath id="clip0_3282_2552"><rect width="153.66" height="151.65" fill="white" transform="translate(18 29)"/></clipPath></defs></svg>',
  "11d": '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="transparent"/><path d="M166.31 67.6753C164.299 67.6753 162.374 68.0205 160.59 68.6454C160.609 68.5561 160.633 68.4728 160.652 68.3895C162.632 58.9795 156.95 49.9088 147.953 48.1352C143.168 47.1888 138.408 48.5042 134.706 51.3552C134.768 50.6766 134.811 49.9862 134.811 49.2899C134.804 36.9813 124.491 27 111.774 27C99.056 27 88.7428 36.9813 88.7428 49.2899C88.7428 51.5278 89.0872 53.6823 89.7206 55.7179C88.5214 55.5334 87.2853 55.4322 86.0308 55.4322C73.3131 55.4263 63 65.4076 63 77.7161C63 88.8521 71.4436 98.0835 82.4701 99.7381V99.8393H83.2942C84.192 99.9405 85.1022 100 86.0246 100C86.9471 100 87.8634 99.9405 88.7551 99.8393H163.954C164.723 99.9405 165.504 100 166.297 100C167.091 100 167.872 99.9405 168.64 99.8393C176.758 98.7382 183 91.9947 183 83.8347C183 74.9068 175.522 67.6693 166.297 67.6693L166.31 67.6753Z" fill="#386AB1"/><path d="M149.563 89.5395C146.987 89.5395 144.512 89.9873 142.226 90.823C142.247 90.7136 142.277 90.5942 142.307 90.4847C144.852 78.0973 137.556 66.1576 126.011 63.8294C119.867 62.5857 113.764 64.3169 109.013 68.068C109.093 67.1725 109.143 66.2671 109.143 65.3517C109.133 49.1336 95.9042 36 79.5882 36C63.2722 36 50.0329 49.1336 50.0329 65.3418C50.0329 68.2869 50.4739 71.1226 51.2857 73.799C49.7423 73.5503 48.1688 73.4209 46.5553 73.4209C30.2292 73.4209 17 86.5546 17 102.763C17 117.429 27.8339 129.567 41.9852 131.756V131.896H43.0475C44.2001 132.035 151.587 132.035 152.569 131.896C162.982 130.443 171 121.568 171 110.832C171 99.0813 161.399 89.5495 149.563 89.5495V89.5395Z" fill="#0096D1"/><g clip-path="url(#clip0_3282_2546)"><path d="M78.25 100H102.53L87.85 124.28H107.24L63 176.8L75.42 138.4H63L78.25 100Z" fill="#FFD100"/></g><defs><clipPath id="clip0_3282_2546"><rect width="44.24" height="76.8" fill="white" transform="translate(63 100)"/></clipPath></defs></svg>',
  "13d": '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="transparent"/><path d="M162.759 117.953C162.482 116.569 160.821 115.738 159.436 116.015L141.436 120.723L131.744 115.184L154.174 109.092C155.559 108.815 156.667 107.154 156.112 105.769C155.558 104.384 154.174 103.277 152.789 103.831L125.097 111.308L116.512 106.323C117.343 104.385 117.62 102.446 117.62 100.231C117.62 98.0155 117.343 96.0768 116.512 94.1384L125.097 89.1537L152.789 96.6308C154.174 96.9079 155.835 96.0768 156.112 94.6926C156.389 93.3079 155.558 91.6466 154.174 91.3697L131.744 85.2773L141.436 79.739L159.436 84.4466C160.821 84.7237 162.482 83.8926 162.759 82.5084C163.036 81.1237 162.205 79.4624 160.821 79.1855L148.083 75.8625L159.16 69.4932C160.545 68.6626 160.822 67.0008 160.268 65.6161C159.437 64.2314 157.775 63.9543 156.39 64.5084L145.313 70.8778L148.636 58.1398C148.913 56.7551 148.082 55.0938 146.698 54.8169C145.313 54.5398 143.652 55.3709 143.375 56.7551L138.668 74.7551L128.975 80.2934L135.068 57.863C135.345 56.4783 134.514 54.817 133.129 54.54C131.745 54.263 130.083 55.0941 129.806 56.4783L122.329 84.1707L113.745 89.1554C110.975 85.8324 107.375 83.8936 103.222 83.063V73.0936L123.437 53.1544C124.545 52.0467 124.545 50.385 123.437 49.2773C122.329 48.1697 120.668 48.1697 119.56 49.2773L103.222 65.3393V54.2622L116.514 40.9698C117.622 39.8622 117.622 38.2005 116.514 37.0928C115.407 35.9851 113.745 35.9851 112.637 37.0928L103.222 46.5086V33.7694C103.222 32.1076 102.114 31 100.452 31C98.7908 31 97.6831 32.1077 97.6831 33.7694V46.5074L88.5449 37.3691C87.4372 36.2615 85.7755 36.2615 84.6678 37.3691C83.5602 38.4768 83.5602 40.1385 84.6678 41.2462L97.683 54.5386V65.6157L81.345 49.2777C80.2374 48.17 78.5756 48.17 77.4679 49.2777C76.3603 50.3853 76.3603 52.047 77.4679 53.1548L97.6831 73.37V83.3393C93.5291 83.8934 89.9291 86.1087 87.1602 89.4317L78.5755 84.447L71.0984 56.7546C70.8214 55.37 69.1602 54.2622 67.7755 54.8164C66.3908 55.0934 65.2831 56.7546 65.8373 58.1393L71.9297 80.5697L62.2373 75.0315L57.5297 57.0315C57.2527 55.6468 55.5914 54.5391 54.2068 55.0932C52.8221 55.3703 51.7144 57.0315 52.2685 58.4162L55.5914 71.1542L44.5144 64.7848C43.1297 63.9542 41.4684 64.5078 40.6373 65.8925C39.8067 67.2771 40.3603 68.9384 41.7449 69.7695L52.822 76.1389L40.084 79.4618C38.6993 79.7389 37.5916 81.4001 38.1458 82.7847C38.4228 84.1694 40.084 85.0001 41.4687 84.723L59.4687 80.0154L69.1611 85.5536L46.7307 91.646C45.0685 91.646 44.2379 93.0307 44.7915 94.6925C45.0685 96.0771 46.7297 96.9078 48.1144 96.6307L75.8068 89.1536L84.3915 94.1383C83.5609 96.0765 83.2838 98.0154 83.2838 100.231C83.2838 102.446 83.5609 104.385 84.3915 106.323L75.8073 111.308L48.1149 103.831C46.4531 103.554 45.0685 104.385 44.7915 105.769C44.5145 107.154 45.3456 108.815 46.7297 109.092L69.1602 115.184L59.4677 120.723L41.4677 116.015C40.0831 115.738 38.4218 116.569 38.1448 117.953C37.8678 119.338 38.6989 120.999 40.0831 121.276L52.8211 124.599L41.744 130.968C40.3593 131.799 40.0822 133.461 40.6363 134.845C41.467 136.23 43.1287 136.507 44.5134 135.953L55.5905 129.584L52.2676 142.322C51.9905 143.706 52.8216 145.368 54.2058 145.645C55.5905 145.922 57.2518 145.091 57.5287 143.706L62.2363 125.706L71.9287 120.168L65.8363 142.599C65.5593 143.983 66.3904 145.645 67.7746 145.921C69.1592 146.199 70.8205 145.367 71.0975 143.983L78.5746 116.291L87.1593 111.306C89.9286 114.629 93.5286 116.568 97.6822 117.399V127.368L77.4682 147.307C76.3605 148.415 76.3605 150.076 77.4682 151.184C78.5758 152.292 80.2375 152.292 81.3452 151.184L97.6832 134.846V145.923L84.668 158.938C83.5604 160.046 83.5604 161.708 84.668 162.816C85.7757 163.923 87.4374 163.923 88.5451 162.816L97.6834 153.677V166.693C97.6834 168.354 98.791 169.462 100.453 169.462C102.114 169.462 103.222 168.354 103.222 166.693V153.955L112.36 163.093C113.468 164.2 115.13 164.2 116.237 163.093C117.345 161.985 117.345 160.323 116.237 159.216L103.222 145.923V134.846L119.56 151.184C120.668 152.292 122.33 152.292 123.437 151.184C124.545 150.077 124.545 148.415 123.437 147.307L103.222 127.092V117.123C107.376 116.568 110.976 114.353 113.745 111.03L122.33 116.015L129.807 143.707C130.084 144.815 131.191 145.645 132.576 145.645C134.514 145.645 135.622 143.984 135.345 142.045L129.253 119.615L138.945 125.153L143.653 143.153C143.93 144.538 145.591 145.369 146.976 145.092C148.361 144.815 149.468 143.153 148.914 141.769L145.591 129.031L156.668 135.4C158.053 136.231 159.714 135.677 160.545 134.292C161.376 132.908 160.823 131.246 159.438 130.415L148.361 124.046L161.099 120.723C162.483 121 163.314 119.338 162.76 117.954L162.759 117.953ZM100.451 111.861C94.0821 111.861 88.8208 106.599 88.8208 100.23C88.8208 93.8609 94.0826 88.5996 100.451 88.5996C106.821 88.5996 112.082 93.8613 112.082 100.23C112.082 106.6 106.821 111.861 100.451 111.861Z" fill="#386AB1"/></svg>',
  "50d": '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="transparent"/><path d="M63 52H125" stroke="#386AB1" stroke-width="8" stroke-linecap="round"/><path d="M31 74H125" stroke="#386AB1" stroke-width="8" stroke-linecap="round"/><path d="M19 111H138" stroke="#386AB1" stroke-width="8" stroke-linecap="round"/><path d="M49 129H163" stroke="#386AB1" stroke-width="8" stroke-linecap="round"/><path d="M63 148H131" stroke="#386AB1" stroke-width="8" stroke-linecap="round"/><path d="M63 92H182" stroke="#386AB1" stroke-width="8" stroke-linecap="round"/></svg>'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("create-block/current-weather", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WeatherPill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeatherPill */ "./src/WeatherPill.js");

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */


const numOfDays = 7;
let weatherPills = [];
for (let i = 0; i < numOfDays; i++) {
  weatherPills.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WeatherPill__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: i,
    pillCount: i
  }));
}
function save({
  attributes
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      textAlign: "center"
    },
    className: "wp-block-create-block-current-weather__location",
    "data-location": attributes.location,
    "data-latitude": attributes.latitude,
    "data-longitude": attributes.longitude
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-create-block-current-weather__wrap"
  }, weatherPills));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["date"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/current-weather","version":"1.0.0","title":"Current Weather","category":"widgets","icon":"palmtree","description":"A widget to display the 7 day weather for a given zip","attributes":{"location":{"type":"string","selector":"wp-block-create-block-current-weather__location"},"locationName":{"type":"string"},"latitude":{"type":"integer"},"longitude":{"type":"integer"}},"supports":{"html":false,"align":["full","wide"]},"textdomain":"current-weather","viewScript":"file:view.js","editorScript":"file:index.js","editorStyle":"file:index.css","style":"file:style-index.css"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcurrent_weather"] = self["webpackChunkcurrent_weather"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map