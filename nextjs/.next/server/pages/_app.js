module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer/Footer.jsx":
/*!**************************************!*\
  !*** ./components/Footer/Footer.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/reducer */ "./context/reducer/index.js");
/* harmony import */ var _services_gitHub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/gitHub.service */ "./services/gitHub.service.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Footer_FooterStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Footer/FooterStyle */ "./styles/Footer/FooterStyle.js");


var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\components\\Footer\\Footer.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Footer() {
  const {
    context
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_reducer__WEBPACK_IMPORTED_MODULE_3__["Context"]);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    profile: {},
    email: "",
    linkedin: ""
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    Object(_services_gitHub_service__WEBPACK_IMPORTED_MODULE_4__["getUser"])().then(response => {
      setState({
        profile: response.data
      });
    });
    Object(_services_gitHub_service__WEBPACK_IMPORTED_MODULE_4__["getEmail"])().then(() => {
      setState(previousState => _objectSpread(_objectSpread({}, previousState), {}, {
        email: "eduardodusik@gmail.com",
        linkedin: "https://www.linkedin.com/in/eduardo-dos-santos-dusik-095100120/"
      }));
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Footer_FooterStyle__WEBPACK_IMPORTED_MODULE_6__["FooterStyle"], {
    children: !context.isLoading && !context.error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Element"], {
      name: "contact",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "footer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "social",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: `mailto:${state.email}`,
            target: "_top",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineMail"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: state.profile.html_url,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiFillGithub"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: state.linkedin,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiFillLinkedin"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "copyright",
          children: ["Developed by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: state.profile.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header/Header.jsx":
/*!**************************************!*\
  !*** ./components/Header/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-switch */ "react-switch");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Header_HeaderStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Header/HeaderStyle */ "./styles/Header/HeaderStyle.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\components\\Header\\Header.jsx";






const Header = ({
  toggleTheme
}) => {
  const {
    name
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"]);
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: bottom,
    1: setBottom
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const navbarHeight = 56;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    document.addEventListener("scroll", () => {
      const about = window.scrollY > navbarHeight;

      if (about !== scroll) {
        setScroll(about);
      }
    });

    window.onscroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setBottom(true);
      } else {
        setBottom(false);
      }
    };
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Header_HeaderStyle__WEBPACK_IMPORTED_MODULE_4__["HeaderStyle"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: "header " + (scroll ? "color" : "transparent"),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
          className: "navbar",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                activeClass: !bottom ? "active " : "remove",
                to: "about",
                spy: true,
                smooth: true,
                offset: -150,
                isDynamic: true,
                duration: 1000,
                delay: 50,
                alt: "about",
                children: "about"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                activeClass: !bottom ? "active " : "remove",
                to: "projects",
                spy: true,
                smooth: true,
                offset: -150,
                isDynamic: true,
                duration: 1000,
                delay: 50,
                alt: "projects",
                children: "projects"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                className: bottom ? "active" : "",
                to: "contact",
                spy: true,
                smooth: true,
                offset: 0,
                duration: 1000,
                isDynamic: true,
                delay: 50,
                activeClass: "active",
                alt: "contact",
                children: "contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "switch",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_switch__WEBPACK_IMPORTED_MODULE_3___default.a, {
            offHandleColor: "#E0E0DC",
            onHandleColor: "#E0E0DC",
            onChange: toggleTheme,
            checked: name === "dark",
            checkedIcon: false,
            uncheckedIcon: false,
            height: 14,
            width: 32,
            offColor: "#CCCCCC",
            handleDiameter: 20,
            onColor: "#6272a4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Loader/Loader.jsx":
/*!**************************************!*\
  !*** ./components/Loader/Loader.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Loader_LoaderStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Loader/LoaderStyle */ "./styles/Loader/LoaderStyle.js");

var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\components\\Loader\\Loader.jsx";



const Loader = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Loader_LoaderStyle__WEBPACK_IMPORTED_MODULE_2__["LoaderStyle"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "loader",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/Profile/Profile.jsx":
/*!****************************************!*\
  !*** ./components/Profile/Profile.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/reducer */ "./context/reducer/index.js");
/* harmony import */ var _services_gitHub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/gitHub.service */ "./services/gitHub.service.js");
/* harmony import */ var _styles_Profile_ProfileStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Profile/ProfileStyle */ "./styles/Profile/ProfileStyle.js");


var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\components\\Profile\\Profile.jsx";






function Projects() {
  const {
    context,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_reducer__WEBPACK_IMPORTED_MODULE_3__["Context"]);

  const emojis = __webpack_require__(/*! emojis */ "emojis");

  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    profile: {}
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    Object(_services_gitHub_service__WEBPACK_IMPORTED_MODULE_4__["getUser"])().then(response => {
      setState({
        profile: response.data
      });
    }).catch(() => {
      dispatch({
        name: "error",
        value: true
      });
    });
  }, [dispatch]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Element"], {
    name: "about",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Profile_ProfileStyle__WEBPACK_IMPORTED_MODULE_5__["ProfileStyle"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "background-particles-js",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "particles-js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "profile-details",
        children: [!context.isLoading && !context.error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            type: "image",
            src: state.profile.avatar_url,
            alt: state.profile.login
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: state.profile.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Developer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: state.profile.bio
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 8
          }, this)]
        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), " ", !context.isLoading && context.error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: [" ", emojis.unicode("error loading, please try again later :sob:"), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 7
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/Projects/Projects.jsx":
/*!******************************************!*\
  !*** ./components/Projects/Projects.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader/Loader */ "./components/Loader/Loader.jsx");
/* harmony import */ var _context_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/reducer */ "./context/reducer/index.js");
/* harmony import */ var _services_gitHub_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/gitHub.service */ "./services/gitHub.service.js");
/* harmony import */ var _styles_Projects_ProjectStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Projects/ProjectStyle */ "./styles/Projects/ProjectStyle.js");


var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\components\\Projects\\Projects.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Projects() {
  const {
    context,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_reducer__WEBPACK_IMPORTED_MODULE_4__["Context"]);

  const emojis = __webpack_require__(/*! emojis */ "emojis");

  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    repositories: [],
    showRepositories: []
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    Object(_services_gitHub_service__WEBPACK_IMPORTED_MODULE_5__["getRepositories"])().then(response => {
      setState(previousState => _objectSpread(_objectSpread({}, previousState), {}, {
        repositories: response.data,
        showRepositories: response.data
      }));
      setTimeout(() => {
        dispatch({
          name: "isLoading",
          value: false
        });
      }, 1000);
    }).catch(() => {
      dispatch({
        name: "isLoading",
        value: false
      });
      dispatch({
        name: "error",
        value: true
      });
    });
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const value = context.search;

    if (value && value.trim() !== "") {
      const repositories = concatQuery(value);
      const result = mapRepositories(repositories);

      if (result !== undefined) {
        setState(previousState => _objectSpread(_objectSpread({}, previousState), {}, {
          showRepositories: result
        }));
      }
    } else {
      setState(previousState => _objectSpread(_objectSpread({}, previousState), {}, {
        showRepositories: state.repositories
      }));
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [context.search]);

  const concatQuery = value => {
    value = value.toLowerCase();
    const name = state.repositories.filter(x => x.name ? x.name.toLowerCase().includes(value) : null);
    const language = state.repositories.filter(x => x.language ? x.language.toLowerCase().includes(value) : null);
    const description = state.repositories.filter(x => x.description ? x.description.toLowerCase().includes(value) : null);
    let listOfRepos = name.concat(language);
    listOfRepos = listOfRepos.concat(description);
    return listOfRepos;
  };

  const mapRepositories = repositories => {
    const reposMap = new Map();

    for (const repos of repositories) {
      reposMap.set(repos.id, repos);
    }

    const resultOfMap = [...reposMap.values()];
    return resultOfMap;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Projects_ProjectStyle__WEBPACK_IMPORTED_MODULE_6__["ProjectStyle"], {
    children: !context.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Element"], {
      name: "projects",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "repositories",
        children: state.repositories && state.showRepositories.length > 0 ? state.showRepositories.map(repo => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "repository",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: repo.html_url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: repo.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              children: repo.full_name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: emojis.unicode(repo.description)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "language",
              children: repo.language
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 11
            }, this)]
          }, repo.id, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 10
          }, this);
        }) : !context.error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "no-repo",
          children: emojis.unicode("No repository found :sob:")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 8
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Loader_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/Search/Search.jsx":
/*!**************************************!*\
  !*** ./components/Search/Search.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/reducer */ "./context/reducer/index.js");
/* harmony import */ var _styles_Search_SearchStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Search/SearchStyle */ "./styles/Search/SearchStyle.js");


var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\components\\Search\\Search.jsx";




function Search() {
  const {
    context,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_reducer__WEBPACK_IMPORTED_MODULE_2__["Context"]);

  const onChange = value => {
    dispatch({
      name: "search",
      value: value
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Search_SearchStyle__WEBPACK_IMPORTED_MODULE_3__["SearchStyle"], {
    children: !context.isLoading && !context.error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "search",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "search",
        "aria-label": "search",
        id: "search",
        onChange: event => onChange(event.target.value),
        placeholder: "Search..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./context/reducer/index.js":
/*!**********************************!*\
  !*** ./context/reducer/index.js ***!
  \**********************************/
/*! exports provided: Context, ContextProvider, ContextConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer.js */ "./context/reducer/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _reducer_js__WEBPACK_IMPORTED_MODULE_0__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextProvider", function() { return _reducer_js__WEBPACK_IMPORTED_MODULE_0__["ContextProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextConsumer", function() { return _reducer_js__WEBPACK_IMPORTED_MODULE_0__["ContextConsumer"]; });



/***/ }),

/***/ "./context/reducer/reducer.js":
/*!************************************!*\
  !*** ./context/reducer/reducer.js ***!
  \************************************/
/*! exports provided: Context, ContextProvider, ContextConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextProvider", function() { return ContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextConsumer", function() { return ContextConsumer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\context\\reducer\\reducer.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialContext = {
  search: "",
  isLoading: true,
  error: false
};
const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});

const reducer = (state = initialContext, action) => {
  const newState = _objectSpread({}, state);

  newState[action.name] = action.value;
  return newState;
};

const ContextProvider = ({
  children
}) => {
  const {
    0: context = initialContext,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer);
  const value = {
    context,
    dispatch
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Context.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

const ContextConsumer = Context.Consumer;


/***/ }),

/***/ "./environments/environments.js":
/*!**************************************!*\
  !*** ./environments/environments.js ***!
  \**************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
  url: "https://api.github.com/users/",
  user: "EDusik",
  public: "events/public"
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/reducer */ "./context/reducer/index.js");
/* harmony import */ var _styles_Global_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Global/Global */ "./styles/Global/Global.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.jsx");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.jsx");
/* harmony import */ var _components_Profile_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Profile/Profile */ "./components/Profile/Profile.jsx");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Projects/Projects */ "./components/Projects/Projects.jsx");
/* harmony import */ var _components_Search_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Search/Search */ "./components/Search/Search.jsx");
/* harmony import */ var _themes_light__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../themes/light */ "./themes/light.js");
/* harmony import */ var _themes_dark__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../themes/dark */ "./themes/dark.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_useDarkMode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/useDarkMode */ "./utils/useDarkMode.js");

var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\pages\\_app.js";













const App = () => {
  const [theme, toggleTheme] = Object(_utils_useDarkMode__WEBPACK_IMPORTED_MODULE_12__["useDarkMode"])();
  const themeMode = theme === "light" ? _themes_light__WEBPACK_IMPORTED_MODULE_9__["default"] : _themes_dark__WEBPACK_IMPORTED_MODULE_10__["default"];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const particlesJS = window.particlesJS;
    particlesJS.load("particles-js", theme === "light" ? "/assets/json/snow.json" : "/assets/json/particles.json");
  }, [theme]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_reducer__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
      theme: themeMode,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Global_Global__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        toggleTheme: toggleTheme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile_Profile__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Search_Search__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./services/gitHub.service.js":
/*!************************************!*\
  !*** ./services/gitHub.service.js ***!
  \************************************/
/*! exports provided: getRepositories, getUser, getEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRepositories", function() { return getRepositories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmail", function() { return getEmail; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environments */ "./environments/environments.js");


const getRepositories = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_environments_environments__WEBPACK_IMPORTED_MODULE_1__["environment"].url}${_environments_environments__WEBPACK_IMPORTED_MODULE_1__["environment"].user}/repos`);
};
const getUser = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_environments_environments__WEBPACK_IMPORTED_MODULE_1__["environment"].url}${_environments_environments__WEBPACK_IMPORTED_MODULE_1__["environment"].user}`);
};
const getEmail = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_environments_environments__WEBPACK_IMPORTED_MODULE_1__["environment"].url}${_environments_environments__WEBPACK_IMPORTED_MODULE_1__["environment"].user}/${_environments_environments__WEBPACK_IMPORTED_MODULE_1__["environment"].public}`);
};

/***/ }),

/***/ "./styles/Footer/FooterStyle.js":
/*!**************************************!*\
  !*** ./styles/Footer/FooterStyle.js ***!
  \**************************************/
/*! exports provided: FooterStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterStyle", function() { return FooterStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FooterStyle",
  componentId: "sc-125tn6f-0"
})([".footer{.social{height:200px;width:100%;background-color:", ";padding-top:79px;text-align:center;margin-top:15px;a{color:", ";svg{font-size:42px;margin:0px 5px;}:hover{cursor:pointer;color:", ";transition:.2s;}}}.copyright{background-color:", ";color:", ";width:100%;text-align:center;height:42px;line-height:3;font-size:14px;strong{color:", ";font-weight:500;}}}"], props => props.theme.footer_background_social, props => props.theme.footer_text, props => props.theme.footer_text_hover, props => props.theme.footer_background, props => props.theme.footer_text, props => props.theme.footer_strong);

/***/ }),

/***/ "./styles/Global/Global.js":
/*!*********************************!*\
  !*** ./styles/Global/Global.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.primary_text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0px;
  }

  #root {
    max-width: 1333px;
    margin: 0 auto;
    padding: 20px 0 20px 0px;
  }

  button {
    cursor: pointer;
  }

  ::selection {
    background: ${props => props.theme.primary_text};
    color: ${props => props.theme.background};
  } 

  * {
    box-sizing: border-box;
  }  

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background: #fcfcfc;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:vertical:hover{
    background: #b2b2b2
  }
`);

/***/ }),

/***/ "./styles/Header/HeaderStyle.js":
/*!**************************************!*\
  !*** ./styles/Header/HeaderStyle.js ***!
  \**************************************/
/*! exports provided: HeaderStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStyle", function() { return HeaderStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HeaderStyle",
  componentId: "sc-9mbxwp-0"
})([".header{.transparent{background-color:", ";}border:0;box-shadow:none;position:absolute;z-index:1;width:100%;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-ms-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease;.container{display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;width:1200px;max-width:100%;padding:0px 15px;height:56px;margin:0 auto;transition:1s;.navbar{color:", ";width:90%;padding-left:10%;ul{padding-left:0;text-align:center;li{display:inline;padding:.5em 2.8em;@media only screen and (max-width:632px){padding:.5em 1.8em;}@media only screen and (max-width:510px){padding:.5em 1em;}@media only screen and (max-width:420px){padding:.2em .7em;}@media only screen and (max-width:340px){padding:.1em .5em;}a{font-size:.85em;font-weight:bold;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;@media only screen and (max-width:380px){font-size:0.65em;}@media only screen and (max-width:380px){font-size:0.65em;}&:hover{color:", ";cursor:pointer;}}.active{color:", ";}}}}}.switch{width:10%;}}.color{@include transition;display:flex;justify-content:space-around;flex-wrap:wrap;position:fixed;height:52px;background-color:", ";.navbar{ul{margin:0em 0 .5em;}}}"], props => props.theme.navbar_background, props => props.theme.navbar_button, props => props.theme.navbar_button_hover, props => props.theme.navbar_button_active, props => props.theme.navbar_background_scrolled);

/***/ }),

/***/ "./styles/Loader/LoaderStyle.js":
/*!**************************************!*\
  !*** ./styles/Loader/LoaderStyle.js ***!
  \**************************************/
/*! exports provided: LoaderStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderStyle", function() { return LoaderStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LoaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LoaderStyle",
  componentId: "wlij3p-0"
})([".loader span{position:fixed;display:inline-block;width:300px;height:300px;border-radius:100%;background:", ";top:calc(50% - 150px);left:calc(50% - 150px);animation:loading 1.5s linear infinite;}.loader span:last-child{animation-delay:-0.9s;-webkit-animation-delay:-0.9s;}@keyframes loading{0%{transform:scale(0,0);opacity:0.8;}100%{transform:scale(1,1);opacity:0;}}@-webkit-keyframes loading{0%{-webkit-transform:scale(0,0);opacity:0.8;}100%{-webkit-transform:scale(1,1);opacity:0;}}"], props => props.theme.loader_color);

/***/ }),

/***/ "./styles/Profile/ProfileStyle.js":
/*!****************************************!*\
  !*** ./styles/Profile/ProfileStyle.js ***!
  \****************************************/
/*! exports provided: ProfileStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileStyle", function() { return ProfileStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ProfileStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProfileStyle",
  componentId: "sc-1mntejp-0"
})(["@include font_secondary;color:", ";text-align:center;height:70vh;width:100%;position:relative;.background-particles-js{width:100%;height:70vh;background-image:linear-gradient(180deg,", ",transparent);background-position:50% 50%;position:absolute;}#particles-js{width:100%;height:70vh;}.profile-details{height:70vh;width:100%;padding:10vh 0px;position:absolute;img{border-radius:50%;width:200px;height:200px;background-color:", ";border:solid 5px ", ";margin-bottom:15px;}h1{font-size:24px;font-weight:400;letter-spacing:5px;line-height:25px;text-transform:uppercase;margin:25px 0;color:", ";@include font_primary;}h2{color:", ";font-size:68px;font-weight:700;line-height:90px;text-transform:capitalize;text-decoration:none;display:block;margin:25px 0;@include font_primary;}p{text-align:center;max-width:30%;font-size:18px;display:inline-flex;color:", ";margin:0px 15px;}@media only screen and (max-width:1820px){p{max-width:40%;}}@media only screen and (max-width:1380px){p{max-width:50%;}}@media only screen and (max-width:1200px){p{max-width:80%;}}@media only screen and (max-width:768px){p{max-width:90%;}}@media only screen and (max-width:420px){p{max-width:100%;font-size:4vw;}h1{font-size:20px;}h2{font-size:16vw;}}@media only screen and (max-height:780px){padding:8vh 0;h1,h2{margin:5px 0;}img{margin-bottom:0;}}@media only screen and (max-height:660px){img{width:150px;height:150px;}h2{line-height:1.4;}}@media only screen and (max-height:560px){h2{font-size:50px;line-height:1;}}}"], props => props.theme.primary_text, props => props.theme.sky_color, props => props.theme.background_image, props => props.theme.secondary_text, props => props.theme.primary_text, props => props.theme.secondary_text, props => props.theme.third_text);

/***/ }),

/***/ "./styles/Projects/ProjectStyle.js":
/*!*****************************************!*\
  !*** ./styles/Projects/ProjectStyle.js ***!
  \*****************************************/
/*! exports provided: ProjectStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectStyle", function() { return ProjectStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ProjectStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProjectStyle",
  componentId: "sc-1xl0pyl-0"
})([".repositories{display:flex;flex-wrap:wrap;max-width:1200px;margin:0 auto;min-height:22vh;i{color:", ";font-size:14px;}a{font-size:16px;color:", ";display:inherit;line-height:2.6;text-decoration:none;&:hover{text-decoration:underline;}}.repository{background-color:", ";padding:12px 18px;color:", ";border-radius:20px;line-height:.2;font-size:15px;margin:15px 15px;flex:1 1 340px;display:grid;min-height:180px;}p{line-height:1.2;color:", ";}p.language{color:", ";}p.no-repo{text-align:center;font-size:1.2em;width:100%;color:", ";}}"], props => props.theme.secondary_text, props => props.theme.anchor_text, props => props.theme.background_repositories, props => props.theme.third_text, props => props.theme.primary_text, props => props.theme.danger, props => props.theme.danger);

/***/ }),

/***/ "./styles/Search/SearchStyle.js":
/*!**************************************!*\
  !*** ./styles/Search/SearchStyle.js ***!
  \**************************************/
/*! exports provided: SearchStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStyle", function() { return SearchStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SearchStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SearchStyle",
  componentId: "sc-1d1zxna-0"
})([".search{display:flex;flex-wrap:wrap;max-width:1200px;margin:0 auto;height:8vh;input{height:40px;margin:2.5vh 15px;width:100%;border:solid ", " 2px;border-radius:0px;padding:10px 8px;color:", ";&:focus{border-color:rgba(189,147,249,.1);outline:none;box-shadow:inset 0 1px 2px rgba(27,31,35,.075),0 0 0 0.17em rgba(189,147,249,.9);}}}"], props => props.theme.secondary_text, props => props.theme.secondary_text);

/***/ }),

/***/ "./themes/dark.js":
/*!************************!*\
  !*** ./themes/dark.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dark = {
  name: "dark",
  background: "#282a36",
  background_repositories: "#44475a",
  background_image: "#fff",
  sky_color: "#232741",
  loader_color: "#6272a4",
  navbar_background_scrolled: "#44475a",
  navbar_background: "transparent",
  navbar_button: "#e0e0dc",
  navbar_button_hover: "#fff",
  navbar_button_active: "#ff5555",
  primary_text: "#fff",
  secondary_text: "#6272a4",
  third_text: "#44475a",
  anchor_text: "#bd93f9",
  info: "#8be9fd",
  yellow: "#f1fa8c",
  success: "#50fa7b",
  warning: "#ffb86c",
  pink: "#ff79c6",
  danger: "#ff5555",
  footer_background: "#44475a",
  footer_background_social: "#282a36",
  footer_text: "#e0e0dc",
  footer_text_hover: "#fff",
  footer_strong: "#ff5555"
};
/* harmony default export */ __webpack_exports__["default"] = (dark);

/***/ }),

/***/ "./themes/light.js":
/*!*************************!*\
  !*** ./themes/light.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const light = {
  name: "light",
  background: "#f8f8f2",
  background_repositories: "#fff",
  background_image: "#fff",
  sky_color: "#6272a4",
  loader_color: "#6272a4",
  navbar_background_scrolled: "#fff",
  navbar_background: "transparent",
  navbar_button: "#282a36",
  navbar_button_hover: "#44475a",
  navbar_button_active: "#ff5555",
  primary_text: "#282a36",
  secondary_text: "#6272a4",
  third_text: "#44475a",
  anchor_text: "#bd93f9",
  info: "#8be9fd",
  yellow: "#f1fa8c",
  success: "#50fa7b",
  warning: "#ffb86c",
  pink: "#ff79c6",
  danger: "#ff5555",
  footer_background: "#fff",
  footer_background_social: "#f8f8f2",
  footer_text: "#282a36",
  footer_text_hover: "#44475a",
  footer_strong: "#ff5555"
};
/* harmony default export */ __webpack_exports__["default"] = (light);

/***/ }),

/***/ "./utils/useDarkMode.js":
/*!******************************!*\
  !*** ./utils/useDarkMode.js ***!
  \******************************/
/*! exports provided: useDarkMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDarkMode", function() { return useDarkMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDarkMode = () => {
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("light");
  const {
    0: componentMounted,
    1: setComponentMounted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const setMode = mode => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const localTheme = window.localStorage.getItem("theme");
    window.matchMedia && !localTheme ? setMode("light") : localTheme ? setTheme(localTheme) : setMode("dark");
    setComponentMounted(true);
  }, []);
  return [theme, toggleTheme, componentMounted];
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "emojis":
/*!*************************!*\
  !*** external "emojis" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emojis");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-switch":
/*!*******************************!*\
  !*** external "react-switch" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-switch");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvcmVkdWNlci9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9naXRIdWIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvRm9vdGVyL0Zvb3RlclN0eWxlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9HbG9iYWwvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9IZWFkZXIvSGVhZGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0xvYWRlci9Mb2FkZXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvUHJvZmlsZS9Qcm9maWxlU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1Byb2plY3RzL1Byb2plY3RTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvU2VhcmNoL1NlYXJjaFN0eWxlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9kYXJrLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9saWdodC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy91c2VEYXJrTW9kZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtb2ppc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkZvb3RlciIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInByb2ZpbGUiLCJlbWFpbCIsImxpbmtlZGluIiwidXNlRWZmZWN0IiwiZ2V0VXNlciIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJnZXRFbWFpbCIsInByZXZpb3VzU3RhdGUiLCJpc0xvYWRpbmciLCJlcnJvciIsImh0bWxfdXJsIiwibmFtZSIsIkhlYWRlciIsInRvZ2dsZVRoZW1lIiwiVGhlbWVDb250ZXh0Iiwic2Nyb2xsIiwic2V0U2Nyb2xsIiwiYm90dG9tIiwic2V0Qm90dG9tIiwibmF2YmFySGVpZ2h0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWJvdXQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib25zY3JvbGwiLCJpbm5lckhlaWdodCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJMb2FkZXIiLCJQcm9qZWN0cyIsImRpc3BhdGNoIiwiZW1vamlzIiwicmVxdWlyZSIsImNhdGNoIiwidmFsdWUiLCJhdmF0YXJfdXJsIiwibG9naW4iLCJiaW8iLCJ1bmljb2RlIiwicmVwb3NpdG9yaWVzIiwic2hvd1JlcG9zaXRvcmllcyIsImdldFJlcG9zaXRvcmllcyIsInNldFRpbWVvdXQiLCJzZWFyY2giLCJ0cmltIiwiY29uY2F0UXVlcnkiLCJyZXN1bHQiLCJtYXBSZXBvc2l0b3JpZXMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsIngiLCJpbmNsdWRlcyIsImxhbmd1YWdlIiwiZGVzY3JpcHRpb24iLCJsaXN0T2ZSZXBvcyIsImNvbmNhdCIsInJlcG9zTWFwIiwiTWFwIiwicmVwb3MiLCJzZXQiLCJpZCIsInJlc3VsdE9mTWFwIiwidmFsdWVzIiwibGVuZ3RoIiwibWFwIiwicmVwbyIsImZ1bGxfbmFtZSIsIlNlYXJjaCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJpbml0aWFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJyZWR1Y2VyIiwiYWN0aW9uIiwibmV3U3RhdGUiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJDb250ZXh0Q29uc3VtZXIiLCJDb25zdW1lciIsImVudmlyb25tZW50IiwidXJsIiwidXNlciIsInB1YmxpYyIsIkFwcCIsInRoZW1lIiwidXNlRGFya01vZGUiLCJ0aGVtZU1vZGUiLCJsaWdodCIsImRhcmsiLCJwYXJ0aWNsZXNKUyIsImxvYWQiLCJheGlvcyIsImdldCIsIkZvb3RlclN0eWxlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJmb290ZXJfYmFja2dyb3VuZF9zb2NpYWwiLCJmb290ZXJfdGV4dCIsImZvb3Rlcl90ZXh0X2hvdmVyIiwiZm9vdGVyX2JhY2tncm91bmQiLCJmb290ZXJfc3Ryb25nIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeV90ZXh0IiwiSGVhZGVyU3R5bGUiLCJuYXZiYXJfYmFja2dyb3VuZCIsIm5hdmJhcl9idXR0b24iLCJuYXZiYXJfYnV0dG9uX2hvdmVyIiwibmF2YmFyX2J1dHRvbl9hY3RpdmUiLCJuYXZiYXJfYmFja2dyb3VuZF9zY3JvbGxlZCIsIkxvYWRlclN0eWxlIiwibG9hZGVyX2NvbG9yIiwiUHJvZmlsZVN0eWxlIiwic2t5X2NvbG9yIiwiYmFja2dyb3VuZF9pbWFnZSIsInNlY29uZGFyeV90ZXh0IiwidGhpcmRfdGV4dCIsIlByb2plY3RTdHlsZSIsImFuY2hvcl90ZXh0IiwiYmFja2dyb3VuZF9yZXBvc2l0b3JpZXMiLCJkYW5nZXIiLCJTZWFyY2hTdHlsZSIsImluZm8iLCJ5ZWxsb3ciLCJzdWNjZXNzIiwid2FybmluZyIsInBpbmsiLCJzZXRUaGVtZSIsImNvbXBvbmVudE1vdW50ZWQiLCJzZXRDb21wb25lbnRNb3VudGVkIiwic2V0TW9kZSIsIm1vZGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibG9jYWxUaGVtZSIsImdldEl0ZW0iLCJtYXRjaE1lZGlhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtB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WUFBUCxDQUFvQkcsT0FBcEIsQ0FBNEIsT0FBNUIsQ0FBbkI7QUFDQXJILFVBQU0sQ0FBQ3NILFVBQVAsSUFBcUIsQ0FBQ0YsVUFBdEIsR0FBbUNKLE9BQU8sQ0FBQyxPQUFELENBQTFDLEdBQXNESSxVQUFVLEdBQUdQLFFBQVEsQ0FBQ08sVUFBRCxDQUFYLEdBQTBCSixPQUFPLENBQUMsTUFBRCxDQUFqRztBQUNBRCx1QkFBbUIsQ0FBQyxJQUFELENBQW5CO0FBQ0EsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLFNBQU8sQ0FBQzlDLEtBQUQsRUFBUTNFLFdBQVIsRUFBcUJ3SCxnQkFBckIsQ0FBUDtBQUNBLENBdkJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlAsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvcmVkdWNlclwiO1xyXG5pbXBvcnQgeyBnZXRFbWFpbCwgZ2V0VXNlciB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9naXRIdWIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBaUZpbGxHaXRodWIsIEFpT3V0bGluZU1haWwsIEFpRmlsbExpbmtlZGluIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IEZvb3RlclN0eWxlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9Gb290ZXIvRm9vdGVyU3R5bGVcIjtcclxuXHJcbmZ1bmN0aW9uIEZvb3RlcigpIHtcclxuXHRjb25zdCB7IGNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcblx0XHRwcm9maWxlOiB7fSxcclxuXHRcdGVtYWlsOiBcIlwiLFxyXG5cdFx0bGlua2VkaW46IFwiXCJcclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGdldFVzZXIoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0c2V0U3RhdGUoeyBwcm9maWxlOiByZXNwb25zZS5kYXRhIH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Z2V0RW1haWwoKS50aGVuKCgpID0+IHtcclxuXHRcdFx0c2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xyXG5cdFx0XHRcdC4uLnByZXZpb3VzU3RhdGUsXHJcblx0XHRcdFx0ZW1haWw6IFwiZWR1YXJkb2R1c2lrQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcdGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9lZHVhcmRvLWRvcy1zYW50b3MtZHVzaWstMDk1MTAwMTIwL1wiXHJcblx0XHRcdH0pKTtcclxuXHRcdH0pO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGb290ZXJTdHlsZT5cclxuXHRcdFx0eyFjb250ZXh0LmlzTG9hZGluZyAmJiAhY29udGV4dC5lcnJvciA/IChcclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwiY29udGFjdFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgbWFpbHRvOiR7c3RhdGUuZW1haWx9YH0gdGFyZ2V0PVwiX3RvcFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFpT3V0bGluZU1haWwgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj17c3RhdGUucHJvZmlsZS5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFpRmlsbEdpdGh1YiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtzdGF0ZS5saW5rZWRpbn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFpRmlsbExpbmtlZGluIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHREZXZlbG9wZWQgYnkgPHN0cm9uZz57c3RhdGUucHJvZmlsZS5uYW1lfTwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8PjwvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9Gb290ZXJTdHlsZT5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiO1xyXG5pbXBvcnQgeyBIZWFkZXJTdHlsZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvSGVhZGVyL0hlYWRlclN0eWxlXCI7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgdG9nZ2xlVGhlbWUgfSkgPT4ge1xyXG5cdGNvbnN0IHsgbmFtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG5cclxuXHRjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtib3R0b20sIHNldEJvdHRvbV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgbmF2YmFySGVpZ2h0ID0gNTY7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgYWJvdXQgPSB3aW5kb3cuc2Nyb2xsWSA+IG5hdmJhckhlaWdodDtcclxuXHRcdFx0aWYgKGFib3V0ICE9PSBzY3JvbGwpIHtcclxuXHRcdFx0XHRzZXRTY3JvbGwoYWJvdXQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cuc2Nyb2xsWSA+PSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCkge1xyXG5cdFx0XHRcdHNldEJvdHRvbSh0cnVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRCb3R0b20oZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEhlYWRlclN0eWxlPlxyXG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT17XCJoZWFkZXIgXCIgKyAoc2Nyb2xsID8gXCJjb2xvclwiIDogXCJ0cmFuc3BhcmVudFwiKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcblx0XHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVDbGFzcz17IWJvdHRvbSA/IFwiYWN0aXZlIFwiIDogXCJyZW1vdmVcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dG89XCJhYm91dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXQ9ey0xNTB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlzRHluYW1pYz17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb249ezEwMDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGF5PXs1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiYWJvdXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhYm91dFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlQ2xhc3M9eyFib3R0b20gPyBcImFjdGl2ZSBcIiA6IFwicmVtb3ZlXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvPVwicHJvamVjdHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHk9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0PXstMTUwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0R5bmFtaWM9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uPXsxMDAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxheT17NTB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cInByb2plY3RzXCJcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvamVjdHNcclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Ym90dG9tID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvPVwiY29udGFjdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXQ9ezB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uPXsxMDAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0R5bmFtaWM9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGF5PXs1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJjb250YWN0XCJcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHQ8L25hdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcblx0XHRcdFx0XHRcdDxTd2l0Y2hcclxuXHRcdFx0XHRcdFx0XHRvZmZIYW5kbGVDb2xvcj1cIiNFMEUwRENcIlxyXG5cdFx0XHRcdFx0XHRcdG9uSGFuZGxlQ29sb3I9XCIjRTBFMERDXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dG9nZ2xlVGhlbWV9XHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17bmFtZSA9PT0gXCJkYXJrXCJ9XHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZEljb249e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdHVuY2hlY2tlZEljb249e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdGhlaWdodD17MTR9XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9ezMyfVxyXG5cdFx0XHRcdFx0XHRcdG9mZkNvbG9yPVwiI0NDQ0NDQ1wiXHJcblx0XHRcdFx0XHRcdFx0aGFuZGxlRGlhbWV0ZXI9ezIwfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ29sb3I9XCIjNjI3MmE0XCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2hlYWRlcj5cclxuXHRcdDwvSGVhZGVyU3R5bGU+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMb2FkZXJTdHlsZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvTG9hZGVyL0xvYWRlclN0eWxlXCI7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxMb2FkZXJTdHlsZT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuXHRcdFx0XHQ8c3Bhbj48L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTG9hZGVyU3R5bGU+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcclxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlZHVjZXJcIjtcclxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9naXRIdWIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQcm9maWxlU3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL1Byb2ZpbGUvUHJvZmlsZVN0eWxlXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cygpIHtcclxuXHRjb25zdCB7IGNvbnRleHQsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cdGNvbnN0IGVtb2ppcyA9IHJlcXVpcmUoXCJlbW9qaXNcIik7XHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcblx0XHRwcm9maWxlOiB7fVxyXG5cdH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0VXNlcigpXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRzZXRTdGF0ZSh7IHByb2ZpbGU6IHJlc3BvbnNlLmRhdGEgfSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaCgoKSA9PiB7XHJcblx0XHRcdFx0ZGlzcGF0Y2goeyBuYW1lOiBcImVycm9yXCIsIHZhbHVlOiB0cnVlIH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9LCBbZGlzcGF0Y2hdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxFbGVtZW50IG5hbWU9XCJhYm91dFwiPlxyXG5cdFx0XHQ8UHJvZmlsZVN0eWxlPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1wYXJ0aWNsZXMtanNcIj5cclxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJwYXJ0aWNsZXMtanNcIj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtZGV0YWlsc1wiPlxyXG5cdFx0XHRcdFx0eyFjb250ZXh0LmlzTG9hZGluZyAmJiAhY29udGV4dC5lcnJvciA/IChcclxuXHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHR5cGU9XCJpbWFnZVwiIHNyYz17c3RhdGUucHJvZmlsZS5hdmF0YXJfdXJsfSBhbHQ9e3N0YXRlLnByb2ZpbGUubG9naW59IC8+XHJcblx0XHRcdFx0XHRcdFx0PGgxPntzdGF0ZS5wcm9maWxlLm5hbWV9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+RGV2ZWxvcGVyPC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8cD57c3RhdGUucHJvZmlsZS5iaW99PC9wPlxyXG5cdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDw+PC8+XHJcblx0XHRcdFx0XHQpfXtcIiBcIn1cclxuXHRcdFx0XHRcdHshY29udGV4dC5pc0xvYWRpbmcgJiYgY29udGV4dC5lcnJvciA/IChcclxuXHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHRcdDxoMz4ge2Vtb2ppcy51bmljb2RlKFwiZXJyb3IgbG9hZGluZywgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlciA6c29iOlwiKX0gPC9oMz5cclxuXHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDw+PC8+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L1Byb2ZpbGVTdHlsZT5cclxuXHRcdDwvRWxlbWVudD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL0xvYWRlci9Mb2FkZXJcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlZHVjZXJcIjtcclxuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yaWVzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dpdEh1Yi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9qZWN0U3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL1Byb2plY3RzL1Byb2plY3RTdHlsZVwiO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcblx0Y29uc3QgeyBjb250ZXh0LCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHRjb25zdCBlbW9qaXMgPSByZXF1aXJlKFwiZW1vamlzXCIpO1xyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG5cdFx0cmVwb3NpdG9yaWVzOiBbXSxcclxuXHRcdHNob3dSZXBvc2l0b3JpZXM6IFtdXHJcblx0fSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXRSZXBvc2l0b3JpZXMoKVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0c2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xyXG5cdFx0XHRcdFx0Li4ucHJldmlvdXNTdGF0ZSxcclxuXHRcdFx0XHRcdHJlcG9zaXRvcmllczogcmVzcG9uc2UuZGF0YSxcclxuXHRcdFx0XHRcdHNob3dSZXBvc2l0b3JpZXM6IHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0XHR9KSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IG5hbWU6IFwiaXNMb2FkaW5nXCIsIHZhbHVlOiBmYWxzZSB9KTtcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRkaXNwYXRjaCh7IG5hbWU6IFwiaXNMb2FkaW5nXCIsIHZhbHVlOiBmYWxzZSB9KTtcclxuXHRcdFx0XHRkaXNwYXRjaCh7IG5hbWU6IFwiZXJyb3JcIiwgdmFsdWU6IHRydWUgfSk7XHJcblx0XHRcdH0pO1xyXG5cdH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBjb250ZXh0LnNlYXJjaDtcclxuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZS50cmltKCkgIT09IFwiXCIpIHtcclxuXHRcdFx0Y29uc3QgcmVwb3NpdG9yaWVzID0gY29uY2F0UXVlcnkodmFsdWUpO1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBtYXBSZXBvc2l0b3JpZXMocmVwb3NpdG9yaWVzKTtcclxuXHJcblx0XHRcdGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcclxuXHRcdFx0XHRcdC4uLnByZXZpb3VzU3RhdGUsXHJcblx0XHRcdFx0XHRzaG93UmVwb3NpdG9yaWVzOiByZXN1bHRcclxuXHRcdFx0XHR9KSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcclxuXHRcdFx0XHQuLi5wcmV2aW91c1N0YXRlLFxyXG5cdFx0XHRcdHNob3dSZXBvc2l0b3JpZXM6IHN0YXRlLnJlcG9zaXRvcmllc1xyXG5cdFx0XHR9KSk7XHJcblx0XHR9XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcblx0fSwgW2NvbnRleHQuc2VhcmNoXSk7XHJcblxyXG5cdGNvbnN0IGNvbmNhdFF1ZXJ5ID0gdmFsdWUgPT4ge1xyXG5cdFx0dmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0Y29uc3QgbmFtZSA9IHN0YXRlLnJlcG9zaXRvcmllcy5maWx0ZXIoeCA9PiAoeC5uYW1lID8geC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpIDogbnVsbCkpO1xyXG5cdFx0Y29uc3QgbGFuZ3VhZ2UgPSBzdGF0ZS5yZXBvc2l0b3JpZXMuZmlsdGVyKHggPT4gKHgubGFuZ3VhZ2UgPyB4Lmxhbmd1YWdlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpIDogbnVsbCkpO1xyXG5cdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBzdGF0ZS5yZXBvc2l0b3JpZXMuZmlsdGVyKHggPT5cclxuXHRcdFx0eC5kZXNjcmlwdGlvbiA/IHguZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSkgOiBudWxsXHJcblx0XHQpO1xyXG5cclxuXHRcdGxldCBsaXN0T2ZSZXBvcyA9IG5hbWUuY29uY2F0KGxhbmd1YWdlKTtcclxuXHRcdGxpc3RPZlJlcG9zID0gbGlzdE9mUmVwb3MuY29uY2F0KGRlc2NyaXB0aW9uKTtcclxuXHJcblx0XHRyZXR1cm4gbGlzdE9mUmVwb3M7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbWFwUmVwb3NpdG9yaWVzID0gcmVwb3NpdG9yaWVzID0+IHtcclxuXHRcdGNvbnN0IHJlcG9zTWFwID0gbmV3IE1hcCgpO1xyXG5cdFx0Zm9yIChjb25zdCByZXBvcyBvZiByZXBvc2l0b3JpZXMpIHtcclxuXHRcdFx0cmVwb3NNYXAuc2V0KHJlcG9zLmlkLCByZXBvcyk7XHJcblx0XHR9XHJcblx0XHRjb25zdCByZXN1bHRPZk1hcCA9IFsuLi5yZXBvc01hcC52YWx1ZXMoKV07XHJcblx0XHRyZXR1cm4gcmVzdWx0T2ZNYXA7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxQcm9qZWN0U3R5bGU+XHJcblx0XHRcdHshY29udGV4dC5pc0xvYWRpbmcgPyAoXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInByb2plY3RzXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlcG9zaXRvcmllc1wiPlxyXG5cdFx0XHRcdFx0XHR7c3RhdGUucmVwb3NpdG9yaWVzICYmIHN0YXRlLnNob3dSZXBvc2l0b3JpZXMubGVuZ3RoID4gMCA/IChcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZS5zaG93UmVwb3NpdG9yaWVzLm1hcChyZXBvID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVwb3NpdG9yeVwiIGtleT17cmVwby5pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17cmVwby5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3JlcG8ubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGk+e3JlcG8uZnVsbF9uYW1lfTwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57ZW1vamlzLnVuaWNvZGUocmVwby5kZXNjcmlwdGlvbil9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxhbmd1YWdlXCI+e3JlcG8ubGFuZ3VhZ2V9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0KSA6ICFjb250ZXh0LmVycm9yID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5vLXJlcG9cIj57ZW1vamlzLnVuaWNvZGUoXCJObyByZXBvc2l0b3J5IGZvdW5kIDpzb2I6XCIpfTwvcD5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8PjwvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0KX1cclxuXHRcdDwvUHJvamVjdFN0eWxlPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlZHVjZXJcIjtcclxuaW1wb3J0IHsgU2VhcmNoU3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL1NlYXJjaC9TZWFyY2hTdHlsZVwiO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKCkge1xyXG5cdGNvbnN0IHsgY29udGV4dCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblx0Y29uc3Qgb25DaGFuZ2UgPSB2YWx1ZSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7IG5hbWU6IFwic2VhcmNoXCIsIHZhbHVlOiB2YWx1ZSB9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFNlYXJjaFN0eWxlPlxyXG5cdFx0XHR7IWNvbnRleHQuaXNMb2FkaW5nICYmICFjb250ZXh0LmVycm9yID8gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwic2VhcmNoXCJcclxuXHRcdFx0XHRcdFx0YXJpYS1sYWJlbD1cInNlYXJjaFwiXHJcblx0XHRcdFx0XHRcdGlkPVwic2VhcmNoXCJcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PD48Lz5cclxuXHRcdFx0KX1cclxuXHRcdDwvU2VhcmNoU3R5bGU+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9yZWR1Y2VyLmpzXCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBpbml0aWFsQ29udGV4dCA9IHtcclxuXHRzZWFyY2g6IFwiXCIsXHJcblx0aXNMb2FkaW5nOiB0cnVlLFxyXG5cdGVycm9yOiBmYWxzZVxyXG59O1xyXG5cclxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxDb250ZXh0LCBhY3Rpb24pID0+IHtcclxuXHRjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuXHRuZXdTdGF0ZVthY3Rpb24ubmFtZV0gPSBhY3Rpb24udmFsdWU7XHJcblx0cmV0dXJuIG5ld1N0YXRlO1xyXG59O1xyXG5cclxuY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdGNvbnN0IFtjb250ZXh0ID0gaW5pdGlhbENvbnRleHQsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlcik7XHJcblx0Y29uc3QgdmFsdWUgPSB7IGNvbnRleHQsIGRpc3BhdGNoIH07XHJcblx0cmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj47XHJcbn07XHJcblxyXG5jb25zdCBDb250ZXh0Q29uc3VtZXIgPSBDb250ZXh0LkNvbnN1bWVyO1xyXG5leHBvcnQgeyBDb250ZXh0LCBDb250ZXh0UHJvdmlkZXIsIENvbnRleHRDb25zdW1lciB9O1xyXG4iLCJleHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XHJcblx0dXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvXCIsXHJcblx0dXNlcjogXCJFRHVzaWtcIixcclxuXHRwdWJsaWM6IFwiZXZlbnRzL3B1YmxpY1wiXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvcmVkdWNlclwiO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9HbG9iYWwvR2xvYmFsXCI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZVwiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoXCI7XHJcblxyXG5pbXBvcnQgbGlnaHQgZnJvbSBcIi4uL3RoZW1lcy9saWdodFwiO1xyXG5pbXBvcnQgZGFyayBmcm9tIFwiLi4vdGhlbWVzL2RhcmtcIjtcclxuXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlRGFya01vZGUgfSBmcm9tIFwiLi4vdXRpbHMvdXNlRGFya01vZGVcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuXHRjb25zdCBbdGhlbWUsIHRvZ2dsZVRoZW1lXSA9IHVzZURhcmtNb2RlKCk7XHJcblx0Y29uc3QgdGhlbWVNb2RlID0gdGhlbWUgPT09IFwibGlnaHRcIiA/IGxpZ2h0IDogZGFyaztcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IHBhcnRpY2xlc0pTID0gd2luZG93LnBhcnRpY2xlc0pTO1xyXG5cdFx0cGFydGljbGVzSlMubG9hZChcInBhcnRpY2xlcy1qc1wiLCB0aGVtZSA9PT0gXCJsaWdodFwiID8gXCIvYXNzZXRzL2pzb24vc25vdy5qc29uXCIgOiBcIi9hc3NldHMvanNvbi9wYXJ0aWNsZXMuanNvblwiKTtcclxuXHR9LCBbdGhlbWVdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDb250ZXh0UHJvdmlkZXI+XHJcblx0XHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZU1vZGV9PlxyXG5cdFx0XHRcdDxHbG9iYWxTdHlsZSAvPlxyXG5cdFx0XHRcdDxIZWFkZXIgdG9nZ2xlVGhlbWU9e3RvZ2dsZVRoZW1lfSAvPlxyXG5cdFx0XHRcdDxQcm9maWxlIC8+XHJcblx0XHRcdFx0PFNlYXJjaCAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0cyAvPlxyXG5cdFx0XHRcdDxGb290ZXIgLz5cclxuXHRcdFx0PC9UaGVtZVByb3ZpZGVyPlxyXG5cdFx0PC9Db250ZXh0UHJvdmlkZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJlcG9zaXRvcmllcyA9ICgpID0+IHtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KGAke2Vudmlyb25tZW50LnVybH0ke2Vudmlyb25tZW50LnVzZXJ9L3JlcG9zYCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9ICgpID0+IHtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KGAke2Vudmlyb25tZW50LnVybH0ke2Vudmlyb25tZW50LnVzZXJ9YCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RW1haWwgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGF4aW9zLmdldChgJHtlbnZpcm9ubWVudC51cmx9JHtlbnZpcm9ubWVudC51c2VyfS8ke2Vudmlyb25tZW50LnB1YmxpY31gKTtcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJTdHlsZSA9IHN0eWxlZC5kaXZgXHJcblxyXG4uZm9vdGVyIHtcclxuICAuc29jaWFsIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9vdGVyX2JhY2tncm91bmRfc29jaWFsfTtcclxuICAgIHBhZGRpbmctdG9wOiA3OXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgICBhIHsgIFxyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb290ZXJfdGV4dH07XHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDVweDsgICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9vdGVyX3RleHRfaG92ZXJ9O1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvcHlyaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvb3Rlcl9iYWNrZ3JvdW5kfTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvb3Rlcl90ZXh0fTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9vdGVyX3N0cm9uZ307XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59YDtcclxuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJhY2tncm91bmR9O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeV90ZXh0fTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIH1cclxuXHJcbiAgYm9keSwgaW5wdXQsIGJ1dHRvbiB7XHJcbiAgICBmb250OiAxNHB4IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG5cclxuICAjcm9vdCB7XHJcbiAgICBtYXgtd2lkdGg6IDEzMzNweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDIwcHggMHB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIDo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeV90ZXh0fTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJhY2tncm91bmR9O1xyXG4gIH0gXHJcblxyXG4gICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9ICBcclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNmY2ZjZmM7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI2IyYjJiMlxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJTdHlsZSA9IHN0eWxlZC5kaXZgXHJcblxyXG4uaGVhZGVyIHtcclxuICAudHJhbnNwYXJlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5uYXZiYXJfYmFja2dyb3VuZH07XHJcbiAgfVxyXG5cclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgd2lkdGg6IDEyMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuXHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubmF2YmFyX2J1dHRvbn07XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwOyAgICAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMi44ZW07XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzJweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuNWVtIDEuOGVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTEwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogLjVlbSAxZW07XHJcbiAgICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogLjJlbSAuN2VtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogLjFlbSAuNWVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC44NWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjY1ZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNjVlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubmF2YmFyX2J1dHRvbl9ob3Zlcn07XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5uYXZiYXJfYnV0dG9uX2FjdGl2ZX07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3dpdGNoIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uY29sb3Ige1xyXG4gIEBpbmNsdWRlIHRyYW5zaXRpb247XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogNTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm5hdmJhcl9iYWNrZ3JvdW5kX3Njcm9sbGVkfTtcclxuXHJcbiAgLm5hdmJhciB7XHJcbiAgICB1bCB7XHJcbiAgICAgIG1hcmdpbjogMGVtIDAgLjVlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2FkZXJTdHlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgLmxvYWRlciBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sb2FkZXJfY29sb3J9O1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDE1MHB4KTtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nIDEuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRlciBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICB9ICAgXHJcblxyXG4gIEBrZXlmcmFtZXMgbG9hZGluZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XHJcbiAgICAgIG9wYWNpdHk6MC44O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xyXG4gICAgICBvcGFjaXR5OjAuODtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZVN0eWxlID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgQGluY2x1ZGUgZm9udF9zZWNvbmRhcnk7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeV90ZXh0fTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmJhY2tncm91bmQtcGFydGljbGVzLWpzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5za3lfY29sb3J9LCB0cmFuc3BhcmVudCk7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTsgICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gIH1cclxuXHJcbiAgI3BhcnRpY2xlcy1qcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICB9XHJcblxyXG4gIC5wcm9maWxlLWRldGFpbHMge1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgXHJcbiAgICBwYWRkaW5nOiAxMHZoIDBweDsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iYWNrZ3JvdW5kX2ltYWdlfTtcclxuICAgICAgYm9yZGVyOiBzb2xpZCA1cHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlfdGV4dH07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlfdGV4dH07XHJcbiAgICAgIEBpbmNsdWRlIGZvbnRfcHJpbWFyeTtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeV90ZXh0fTtcclxuICAgICAgZm9udC1zaXplOiA2OHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogOTBweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7ICAgICAgICBcclxuICAgICAgbWFyZ2luOiAyNXB4IDA7IFxyXG4gICAgICBAaW5jbHVkZSBmb250X3ByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRoaXJkX3RleHR9O1xyXG4gICAgICBtYXJnaW46IDBweCAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTgyMHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1heC13aWR0aDogNDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzgwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZ2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc4MHB4KSB7ICBcclxuICAgICAgcGFkZGluZzogOHZoIDA7XHJcbiAgICAgIGgxLCBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9ICAgXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjYwcHgpIHsgIFxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICB9ICAgXHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDU2MHB4KSB7ICBcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0U3R5bGUgPSBzdHlsZWQuZGl2YFxyXG5cclxuLnJlcG9zaXRvcmllcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWluLWhlaWdodDogMjJ2aDtcclxuXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlfdGV4dH07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAxNnB4OyAgICAgIFxyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYW5jaG9yX3RleHR9O1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXBvc2l0b3J5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmFja2dyb3VuZF9yZXBvc2l0b3JpZXN9O1xyXG4gICAgcGFkZGluZzogMTJweCAxOHB4O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGhpcmRfdGV4dH07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IC4yO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDE1cHg7XHJcbiAgICBmbGV4OiAxIDEgMzQwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlfdGV4dH07XHJcbiAgfVxyXG5cclxuICBwLmxhbmd1YWdlIHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRhbmdlcn07XHJcbiAgfVxyXG4gICAgXHJcbiAgcC5uby1yZXBvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRhbmdlcn07XHJcbiAgfVxyXG59YDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hTdHlsZSA9IHN0eWxlZC5kaXZgXHJcbi5zZWFyY2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogOHZoO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDIuNXZoIDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlfdGV4dH0gMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCA4cHg7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlfdGV4dH07XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE4OSwgMTQ3LCAyNDksIC4xKTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMjcsIDMxLCAzNSwgLjA3NSksIDAgMCAwIDAuMTdlbSByZ2JhKDE4OSwgMTQ3LCAyNDksIC45KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuIiwiY29uc3QgZGFyayA9IHtcclxuXHRuYW1lOiBcImRhcmtcIixcclxuXHRiYWNrZ3JvdW5kOiBcIiMyODJhMzZcIixcclxuXHRiYWNrZ3JvdW5kX3JlcG9zaXRvcmllczogXCIjNDQ0NzVhXCIsXHJcblx0YmFja2dyb3VuZF9pbWFnZTogXCIjZmZmXCIsXHJcblx0c2t5X2NvbG9yOiBcIiMyMzI3NDFcIixcclxuXHRsb2FkZXJfY29sb3I6IFwiIzYyNzJhNFwiLFxyXG5cdG5hdmJhcl9iYWNrZ3JvdW5kX3Njcm9sbGVkOiBcIiM0NDQ3NWFcIixcclxuXHRuYXZiYXJfYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG5cdG5hdmJhcl9idXR0b246IFwiI2UwZTBkY1wiLFxyXG5cdG5hdmJhcl9idXR0b25faG92ZXI6IFwiI2ZmZlwiLFxyXG5cdG5hdmJhcl9idXR0b25fYWN0aXZlOiBcIiNmZjU1NTVcIixcclxuXHRwcmltYXJ5X3RleHQ6IFwiI2ZmZlwiLFxyXG5cdHNlY29uZGFyeV90ZXh0OiBcIiM2MjcyYTRcIixcclxuXHR0aGlyZF90ZXh0OiBcIiM0NDQ3NWFcIixcclxuXHRhbmNob3JfdGV4dDogXCIjYmQ5M2Y5XCIsXHJcblx0aW5mbzogXCIjOGJlOWZkXCIsXHJcblx0eWVsbG93OiBcIiNmMWZhOGNcIixcclxuXHRzdWNjZXNzOiBcIiM1MGZhN2JcIixcclxuXHR3YXJuaW5nOiBcIiNmZmI4NmNcIixcclxuXHRwaW5rOiBcIiNmZjc5YzZcIixcclxuXHRkYW5nZXI6IFwiI2ZmNTU1NVwiLFxyXG5cdGZvb3Rlcl9iYWNrZ3JvdW5kOiBcIiM0NDQ3NWFcIixcclxuXHRmb290ZXJfYmFja2dyb3VuZF9zb2NpYWw6IFwiIzI4MmEzNlwiLFxyXG5cdGZvb3Rlcl90ZXh0OiBcIiNlMGUwZGNcIixcclxuXHRmb290ZXJfdGV4dF9ob3ZlcjogXCIjZmZmXCIsXHJcblx0Zm9vdGVyX3N0cm9uZzogXCIjZmY1NTU1XCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhcms7XHJcbiIsImNvbnN0IGxpZ2h0ID0ge1xyXG5cdG5hbWU6IFwibGlnaHRcIixcclxuXHRiYWNrZ3JvdW5kOiBcIiNmOGY4ZjJcIixcclxuXHRiYWNrZ3JvdW5kX3JlcG9zaXRvcmllczogXCIjZmZmXCIsXHJcblx0YmFja2dyb3VuZF9pbWFnZTogXCIjZmZmXCIsXHJcblx0c2t5X2NvbG9yOiBcIiM2MjcyYTRcIixcclxuXHRsb2FkZXJfY29sb3I6IFwiIzYyNzJhNFwiLFxyXG5cdG5hdmJhcl9iYWNrZ3JvdW5kX3Njcm9sbGVkOiBcIiNmZmZcIixcclxuXHRuYXZiYXJfYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG5cdG5hdmJhcl9idXR0b246IFwiIzI4MmEzNlwiLFxyXG5cdG5hdmJhcl9idXR0b25faG92ZXI6IFwiIzQ0NDc1YVwiLFxyXG5cdG5hdmJhcl9idXR0b25fYWN0aXZlOiBcIiNmZjU1NTVcIixcclxuXHRwcmltYXJ5X3RleHQ6IFwiIzI4MmEzNlwiLFxyXG5cdHNlY29uZGFyeV90ZXh0OiBcIiM2MjcyYTRcIixcclxuXHR0aGlyZF90ZXh0OiBcIiM0NDQ3NWFcIixcclxuXHRhbmNob3JfdGV4dDogXCIjYmQ5M2Y5XCIsXHJcblx0aW5mbzogXCIjOGJlOWZkXCIsXHJcblx0eWVsbG93OiBcIiNmMWZhOGNcIixcclxuXHRzdWNjZXNzOiBcIiM1MGZhN2JcIixcclxuXHR3YXJuaW5nOiBcIiNmZmI4NmNcIixcclxuXHRwaW5rOiBcIiNmZjc5YzZcIixcclxuXHRkYW5nZXI6IFwiI2ZmNTU1NVwiLFxyXG5cdGZvb3Rlcl9iYWNrZ3JvdW5kOiBcIiNmZmZcIixcclxuXHRmb290ZXJfYmFja2dyb3VuZF9zb2NpYWw6IFwiI2Y4ZjhmMlwiLFxyXG5cdGZvb3Rlcl90ZXh0OiBcIiMyODJhMzZcIixcclxuXHRmb290ZXJfdGV4dF9ob3ZlcjogXCIjNDQ0NzVhXCIsXHJcblx0Zm9vdGVyX3N0cm9uZzogXCIjZmY1NTU1XCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpZ2h0O1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRGFya01vZGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImxpZ2h0XCIpO1xyXG5cdGNvbnN0IFtjb21wb25lbnRNb3VudGVkLCBzZXRDb21wb25lbnRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBzZXRNb2RlID0gbW9kZSA9PiB7XHJcblx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBtb2RlKTtcclxuXHRcdHNldFRoZW1lKG1vZGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG5cdFx0aWYgKHRoZW1lID09PSBcImxpZ2h0XCIpIHtcclxuXHRcdFx0c2V0TW9kZShcImRhcmtcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRNb2RlKFwibGlnaHRcIik7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGxvY2FsVGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcclxuXHRcdHdpbmRvdy5tYXRjaE1lZGlhICYmICFsb2NhbFRoZW1lID8gc2V0TW9kZShcImxpZ2h0XCIpIDogbG9jYWxUaGVtZSA/IHNldFRoZW1lKGxvY2FsVGhlbWUpIDogc2V0TW9kZShcImRhcmtcIik7XHJcblx0XHRzZXRDb21wb25lbnRNb3VudGVkKHRydWUpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIFt0aGVtZSwgdG9nZ2xlVGhlbWUsIGNvbXBvbmVudE1vdW50ZWRdO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbW9qaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN3aXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==