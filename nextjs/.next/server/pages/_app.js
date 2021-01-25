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
            offColor: "#ccccc",
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
/* harmony import */ var _themes_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../themes/light */ "./themes/light.js");
/* harmony import */ var _themes_dark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../themes/dark */ "./themes/dark.js");

var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\context\\reducer\\reducer.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialContext = {
  search: "",
  isLoading: true,
  error: false,
  theme: _themes_dark__WEBPACK_IMPORTED_MODULE_3__["default"]
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
    lineNumber: 23,
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_reducer_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/reducer/reducer */ "./context/reducer/reducer.js");
/* harmony import */ var _styles_Global_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Global/Global */ "./styles/Global/Global.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.jsx");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.jsx");
/* harmony import */ var _components_Profile_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Profile/Profile */ "./components/Profile/Profile.jsx");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Projects/Projects */ "./components/Projects/Projects.jsx");
/* harmony import */ var _components_Search_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Search/Search */ "./components/Search/Search.jsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _themes_light__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../themes/light */ "./themes/light.js");
/* harmony import */ var _themes_dark__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../themes/dark */ "./themes/dark.js");

var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\pages\\_app.js";













const App = () => {
  // const [theme, setTheme] = usePersistedState("theme", light);
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("theme", _themes_light__WEBPACK_IMPORTED_MODULE_11__["default"]);

  const toggleTheme = () => {
    setTheme(theme.name === "light" ? _themes_dark__WEBPACK_IMPORTED_MODULE_12__["default"] : _themes_light__WEBPACK_IMPORTED_MODULE_11__["default"]);
  }; // useEffect(() => {
  // 	const particlesJS = window.particlesJS;
  // 	particlesJS.load("particles-js", "/assets/json/particles.json", () => {
  // 		console.log(theme.name);
  // 	});
  // }, [theme.name]);


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const particlesJS = window.particlesJS;
    particlesJS.load("particles-js", theme.name === "dark" ? "/assets/json/particles.json" : "/assets/json/snow.json", () => {
      console.log(theme.name);
    });
  }, [theme.name]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme.name !== undefined ? theme : _themes_light__WEBPACK_IMPORTED_MODULE_11__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_reducer_reducer__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Global_Global__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        toggleTheme: toggleTheme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile_Profile__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Search_Search__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
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
})([".footer{.social{height:200px;width:100%;background-color:", ";padding-top:79px;text-align:center;margin-top:15px;a{color:", ";svg{font-size:42px;margin:0px 5px;}:hover{cursor:pointer;color:", ";transition:.2s;}}}.copyright{background-color:", ";color:", ";width:100%;text-align:center;color:", ";height:42px;line-height:3;font-size:14px;strong{color:", ";font-weight:500;}}}"], props => props.theme.footer_background_social, props => props.theme.footer_text, props => props.theme.footer_text_hover, props => props.theme.footer_background, props => props.theme.comment, props => props.theme.footer_text, props => props.theme.footer_strong);

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
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

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

  /* ::selection {
    background: $darkest;
    color: $light;    
  } */

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
})(["@import \"assets/scss/globals.scss\";.header{.transparent{background-color:", ";}border:0;box-shadow:none;position:absolute;z-index:1;width:100%;@include font_primary;@include transition;.container{display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;width:1200px;max-width:100%;padding:0px 15px;height:56px;margin:0 auto;transition:1s;.navbar{color:", ";width:90%;padding-left:10%;ul{padding-left:0;text-align:center;li{display:inline;padding:.5em 2.8em;@media only screen and (max-width:632px){padding:.5em 1.8em;}@media only screen and (max-width:510px){padding:.5em 1em}@media only screen and (max-width:420px){padding:.2em .7em}@media only screen and (max-width:340px){padding:.1em .5em}a{font-size:.85em;font-weight:bold;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;@media only screen and (max-width:380px){font-size:0.65em;}@media only screen and (max-width:380px){font-size:0.65em;}&:hover{color:", ";;cursor:pointer;}}.active{color:", ";}}}}}.switch{width:10%;}}.color{@include transition;display:flex;justify-content:space-around;flex-wrap:wrap;position:fixed;height:52px;background-color:", ";.navbar{ul{margin:0em 0 .5em;}}}"], props => props.theme.navbar_background, props => props.theme.navbar_button, props => props.theme.navbar_button_hover, props => props.theme.navbar_button_active, props => props.theme.navbar_background_scrolled);

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
})(["@import \"assets/scss/globals.scss\";@include font_secondary;color:", ";text-align:center;height:70vh;width:100%;position:relative;.background-particles-js{width:100%;height:70vh;background-image:linear-gradient(180deg,", ",transparent);background-position:50% 50%;position:absolute;}#particles-js{width:100%;height:70vh;}.profile-details{height:70vh;width:100%;padding:10vh 0px;position:absolute;img{border-radius:50%;width:200px;height:200px;background-color:", ";border:solid 5px ", ";margin-bottom:15px;}h1{font-size:24px;font-weight:400;letter-spacing:5px;line-height:25px;text-transform:uppercase;margin:25px 0;color:", ";@include font_primary;}h2{color:", ";font-size:68px;font-weight:700;line-height:90px;text-transform:capitalize;text-decoration:none;display:block;margin:25px 0;@include font_primary;}p{text-align:center;max-width:30%;font-size:18px;display:inline-flex;color:", ";margin:0px 15px;}@media only screen and (max-width:1820px){p{max-width:40%;}}@media only screen and (max-width:1380px){p{max-width:50%;}}@media only screen and (max-width:1200px){p{max-width:80%;}}@media only screen and (max-width:768px){p{max-width:90%;}}@media only screen and (max-width:420px){p{max-width:100%;font-size:4vw;}h1{font-size:20px;}h2{font-size:16vw;}}@media only screen and (max-height:780px){padding:8vh 0;h1,h2{margin:5px 0;}img{margin-bottom:0;}}@media only screen and (max-height:660px){img{width:150px;height:150px;}h2{line-height:1.4;}}@media only screen and (max-height:560px){h2{font-size:50px;line-height:1;}}}"], props => props.theme.primary_text, props => props.theme.sky_color, props => props.theme.background_image, props => props.theme.secondary_text, props => props.theme.primary_text, props => props.theme.secondary_text, props => props.theme.third_text);

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
})([".search{display:flex;flex-wrap:wrap;max-width:1200px;margin:0 auto;height:8vh;input{height:40px;margin:2.5vh 15px;width:100%;border:solid ", " 2px;border-radius:0px;padding:10px 8px;color:$primary;&:focus{border-color:", ";outline:none;box-shadow:inset 0 1px 2px rgba(27,31,35,.075),0 0 0 0.15em rgba(189,147,249,.9);}}}"], props => props.theme.sky_color, props => props.theme.secondary_text);

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

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function usePersistedState(key, inititalState) {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => {
    console.log(window.localStorate);
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return inititalState;
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

/* harmony default export */ __webpack_exports__["default"] = (usePersistedState); // import React from "react";
// const useStickyState = (defaultValue, key) => {
// 	debugger;
// 	const [value, setValue] = React.useState(defaultValue);
// 	React.useEffect(() => {
// 		const stickyValue = window.localStorage.getItem(key);
// 		if (stickyValue !== null) {
// 			setValue(JSON.parse(stickyValue));
// 		}
// 	}, [key]);
// 	React.useEffect(() => {
// 		window.localStorage.setItem(key, JSON.stringify(value));
// 	}, [key, value]);
// 	return [value, setValue];
// };
// export default useStickyState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvcmVkdWNlci9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9naXRIdWIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvRm9vdGVyL0Zvb3RlclN0eWxlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9HbG9iYWwvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9IZWFkZXIvSGVhZGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0xvYWRlci9Mb2FkZXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvUHJvZmlsZS9Qcm9maWxlU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1Byb2plY3RzL1Byb2plY3RTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvU2VhcmNoL1NlYXJjaFN0eWxlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9kYXJrLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9saWdodC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtb2ppc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkZvb3RlciIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInByb2ZpbGUiLCJlbWFpbCIsImxpbmtlZGluIiwidXNlRWZmZWN0IiwiZ2V0VXNlciIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJnZXRFbWFpbCIsInByZXZpb3VzU3RhdGUiLCJpc0xvYWRpbmciLCJlcnJvciIsImh0bWxfdXJsIiwibmFtZSIsIkhlYWRlciIsInRvZ2dsZVRoZW1lIiwiVGhlbWVDb250ZXh0Iiwic2Nyb2xsIiwic2V0U2Nyb2xsIiwiYm90dG9tIiwic2V0Qm90dG9tIiwibmF2YmFySGVpZ2h0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWJvdXQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib25zY3JvbGwiLCJpbm5lckhlaWdodCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJMb2FkZXIiLCJQcm9qZWN0cyIsImRpc3BhdGNoIiwiZW1vamlzIiwicmVxdWlyZSIsImNhdGNoIiwidmFsdWUiLCJhdmF0YXJfdXJsIiwibG9naW4iLCJiaW8iLCJ1bmljb2RlIiwicmVwb3NpdG9yaWVzIiwic2hvd1JlcG9zaXRvcmllcyIsImdldFJlcG9zaXRvcmllcyIsInNldFRpbWVvdXQiLCJzZWFyY2giLCJ0cmltIiwiY29uY2F0UXVlcnkiLCJyZXN1bHQiLCJtYXBSZXBvc2l0b3JpZXMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsIngiLCJpbmNsdWRlcyIsImxhbmd1YWdlIiwiZGVzY3JpcHRpb24iLCJsaXN0T2ZSZXBvcyIsImNvbmNhdCIsInJlcG9zTWFwIiwiTWFwIiwicmVwb3MiLCJzZXQiLCJpZCIsInJlc3VsdE9mTWFwIiwidmFsdWVzIiwibGVuZ3RoIiwibWFwIiwicmVwbyIsImZ1bGxfbmFtZSIsIlNlYXJjaCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJpbml0aWFsQ29udGV4dCIsInRoZW1lIiwiZGFyayIsImNyZWF0ZUNvbnRleHQiLCJyZWR1Y2VyIiwiYWN0aW9uIiwibmV3U3RhdGUiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJDb250ZXh0Q29uc3VtZXIiLCJDb25zdW1lciIsImVudmlyb25tZW50IiwidXJsIiwidXNlciIsInB1YmxpYyIsIkFwcCIsInNldFRoZW1lIiwibGlnaHQiLCJwYXJ0aWNsZXNKUyIsImxvYWQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJGb290ZXJTdHlsZSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiZm9vdGVyX2JhY2tncm91bmRfc29jaWFsIiwiZm9vdGVyX3RleHQiLCJmb290ZXJfdGV4dF9ob3ZlciIsImZvb3Rlcl9iYWNrZ3JvdW5kIiwiY29tbWVudCIsImZvb3Rlcl9zdHJvbmciLCJjcmVhdGVHbG9iYWxTdHlsZSIsImJhY2tncm91bmQiLCJwcmltYXJ5X3RleHQiLCJIZWFkZXJTdHlsZSIsIm5hdmJhcl9iYWNrZ3JvdW5kIiwibmF2YmFyX2J1dHRvbiIsIm5hdmJhcl9idXR0b25faG92ZXIiLCJuYXZiYXJfYnV0dG9uX2FjdGl2ZSIsIm5hdmJhcl9iYWNrZ3JvdW5kX3Njcm9sbGVkIiwiTG9hZGVyU3R5bGUiLCJsb2FkZXJfY29sb3IiLCJQcm9maWxlU3R5bGUiLCJza3lfY29sb3IiLCJiYWNrZ3JvdW5kX2ltYWdlIiwic2Vjb25kYXJ5X3RleHQiLCJ0aGlyZF90ZXh0IiwiUHJvamVjdFN0eWxlIiwiYW5jaG9yX3RleHQiLCJiYWNrZ3JvdW5kX3JlcG9zaXRvcmllcyIsImRhbmdlciIsIlNlYXJjaFN0eWxlIiwiaW5mbyIsInllbGxvdyIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwicGluayIsInVzZVBlcnNpc3RlZFN0YXRlIiwia2V5IiwiaW5pdGl0YWxTdGF0ZSIsImxvY2FsU3RvcmF0ZSIsInN0b3JhZ2VWYWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LFlBQVksQ0FBQ0MsT0FBYixDQUFxQkwsR0FBckIsQ0FBckI7O0FBRUEsUUFBSUcsWUFBSixFQUFrQjtBQUNqQixhQUFPRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osWUFBWCxDQUFQO0FBQ0EsS0FGRCxNQUVPO0FBQ04sYUFBT0YsYUFBUDtBQUNBO0FBQ0QsR0FWaUMsQ0FBbEM7QUFZQXZJLHlEQUFTLENBQUMsTUFBTTtBQUNmMEksZ0JBQVksQ0FBQ0ksT0FBYixDQUFxQlIsR0FBckIsRUFBMEJNLElBQUksQ0FBQ0csU0FBTCxDQUFlckosS0FBZixDQUExQjtBQUNBLEdBRlEsRUFFTixDQUFDNEksR0FBRCxFQUFNNUksS0FBTixDQUZNLENBQVQ7QUFJQSxTQUFPLENBQUNBLEtBQUQsRUFBUUMsUUFBUixDQUFQO0FBQ0E7O0FBRWMwSSxnRkFBZixFLENBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlZHVjZXJcIjtcclxuaW1wb3J0IHsgZ2V0RW1haWwsIGdldFVzZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2l0SHViLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaU91dGxpbmVNYWlsLCBBaUZpbGxMaW5rZWRpbiB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyBGb290ZXJTdHlsZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvRm9vdGVyL0Zvb3RlclN0eWxlXCI7XHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKSB7XHJcblx0Y29uc3QgeyBjb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG5cdFx0cHJvZmlsZToge30sXHJcblx0XHRlbWFpbDogXCJcIixcclxuXHRcdGxpbmtlZGluOiBcIlwiXHJcblx0fSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXRVc2VyKCkudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdHNldFN0YXRlKHsgcHJvZmlsZTogcmVzcG9uc2UuZGF0YSB9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGdldEVtYWlsKCkudGhlbigoKSA9PiB7XHJcblx0XHRcdHNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcclxuXHRcdFx0XHQuLi5wcmV2aW91c1N0YXRlLFxyXG5cdFx0XHRcdGVtYWlsOiBcImVkdWFyZG9kdXNpa0BnbWFpbC5jb21cIixcclxuXHRcdFx0XHRsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZWR1YXJkby1kb3Mtc2FudG9zLWR1c2lrLTA5NTEwMDEyMC9cIlxyXG5cdFx0XHR9KSk7XHJcblx0XHR9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Rm9vdGVyU3R5bGU+XHJcblx0XHRcdHshY29udGV4dC5pc0xvYWRpbmcgJiYgIWNvbnRleHQuZXJyb3IgPyAoXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cImNvbnRhY3RcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YG1haWx0bzoke3N0YXRlLmVtYWlsfWB9IHRhcmdldD1cIl90b3BcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxBaU91dGxpbmVNYWlsIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e3N0YXRlLnByb2ZpbGUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxBaUZpbGxHaXRodWIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj17c3RhdGUubGlua2VkaW59IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxBaUZpbGxMaW5rZWRpbiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0RGV2ZWxvcGVkIGJ5IDxzdHJvbmc+e3N0YXRlLnByb2ZpbGUubmFtZX08L3N0cm9uZz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PD48Lz5cclxuXHRcdFx0KX1cclxuXHRcdDwvRm9vdGVyU3R5bGU+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gXCJyZWFjdC1zd2l0Y2hcIjtcclxuaW1wb3J0IHsgSGVhZGVyU3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0hlYWRlci9IZWFkZXJTdHlsZVwiO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IHRvZ2dsZVRoZW1lIH0pID0+IHtcclxuXHRjb25zdCB7IG5hbWUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuXHJcblx0Y29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbYm90dG9tLCBzZXRCb3R0b21dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IG5hdmJhckhlaWdodCA9IDU2O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFib3V0ID0gd2luZG93LnNjcm9sbFkgPiBuYXZiYXJIZWlnaHQ7XHJcblx0XHRcdGlmIChhYm91dCAhPT0gc2Nyb2xsKSB7XHJcblx0XHRcdFx0c2V0U2Nyb2xsKGFib3V0KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0d2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAod2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnNjcm9sbFkgPj0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpIHtcclxuXHRcdFx0XHRzZXRCb3R0b20odHJ1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0Qm90dG9tKGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxIZWFkZXJTdHlsZT5cclxuXHRcdFx0PGhlYWRlciBjbGFzc05hbWU9e1wiaGVhZGVyIFwiICsgKHNjcm9sbCA/IFwiY29sb3JcIiA6IFwidHJhbnNwYXJlbnRcIil9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG5cdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlQ2xhc3M9eyFib3R0b20gPyBcImFjdGl2ZSBcIiA6IFwicmVtb3ZlXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvPVwiYWJvdXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHk9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0PXstMTUwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0R5bmFtaWM9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uPXsxMDAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxheT17NTB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cImFib3V0XCJcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWJvdXRcclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUNsYXNzPXshYm90dG9tID8gXCJhY3RpdmUgXCIgOiBcInJlbW92ZVwifVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0bz1cInByb2plY3RzXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldD17LTE1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXNEeW5hbWljPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17MTAwMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsYXk9ezUwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJwcm9qZWN0c1wiXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByb2plY3RzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2JvdHRvbSA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0bz1cImNvbnRhY3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHk9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0PXswfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17MTAwMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXNEeW5hbWljPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxheT17NTB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiY29udGFjdFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhY3RcclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG5cdFx0XHRcdFx0XHQ8U3dpdGNoXHJcblx0XHRcdFx0XHRcdFx0b2ZmSGFuZGxlQ29sb3I9XCIjRTBFMERDXCJcclxuXHRcdFx0XHRcdFx0XHRvbkhhbmRsZUNvbG9yPVwiI0UwRTBEQ1wiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RvZ2dsZVRoZW1lfVxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e25hbWUgPT09IFwiZGFya1wifVxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWRJY29uPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHR1bmNoZWNrZWRJY29uPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezE0fVxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoPXszMn1cclxuXHRcdFx0XHRcdFx0XHRvZmZDb2xvcj1cIiNjY2NjY1wiXHJcblx0XHRcdFx0XHRcdFx0aGFuZGxlRGlhbWV0ZXI9ezIwfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ29sb3I9XCIjNjI3MmE0XCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2hlYWRlcj5cclxuXHRcdDwvSGVhZGVyU3R5bGU+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMb2FkZXJTdHlsZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvTG9hZGVyL0xvYWRlclN0eWxlXCI7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxMb2FkZXJTdHlsZT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuXHRcdFx0XHQ8c3Bhbj48L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTG9hZGVyU3R5bGU+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcclxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlZHVjZXJcIjtcclxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9naXRIdWIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQcm9maWxlU3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL1Byb2ZpbGUvUHJvZmlsZVN0eWxlXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cygpIHtcclxuXHRjb25zdCB7IGNvbnRleHQsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cdGNvbnN0IGVtb2ppcyA9IHJlcXVpcmUoXCJlbW9qaXNcIik7XHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcblx0XHRwcm9maWxlOiB7fVxyXG5cdH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0VXNlcigpXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRzZXRTdGF0ZSh7IHByb2ZpbGU6IHJlc3BvbnNlLmRhdGEgfSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaCgoKSA9PiB7XHJcblx0XHRcdFx0ZGlzcGF0Y2goeyBuYW1lOiBcImVycm9yXCIsIHZhbHVlOiB0cnVlIH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9LCBbZGlzcGF0Y2hdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxFbGVtZW50IG5hbWU9XCJhYm91dFwiPlxyXG5cdFx0XHQ8UHJvZmlsZVN0eWxlPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1wYXJ0aWNsZXMtanNcIj5cclxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJwYXJ0aWNsZXMtanNcIj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtZGV0YWlsc1wiPlxyXG5cdFx0XHRcdFx0eyFjb250ZXh0LmlzTG9hZGluZyAmJiAhY29udGV4dC5lcnJvciA/IChcclxuXHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHR5cGU9XCJpbWFnZVwiIHNyYz17c3RhdGUucHJvZmlsZS5hdmF0YXJfdXJsfSBhbHQ9e3N0YXRlLnByb2ZpbGUubG9naW59IC8+XHJcblx0XHRcdFx0XHRcdFx0PGgxPntzdGF0ZS5wcm9maWxlLm5hbWV9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+RGV2ZWxvcGVyPC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8cD57c3RhdGUucHJvZmlsZS5iaW99PC9wPlxyXG5cdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDw+PC8+XHJcblx0XHRcdFx0XHQpfXtcIiBcIn1cclxuXHRcdFx0XHRcdHshY29udGV4dC5pc0xvYWRpbmcgJiYgY29udGV4dC5lcnJvciA/IChcclxuXHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHRcdDxoMz4ge2Vtb2ppcy51bmljb2RlKFwiZXJyb3IgbG9hZGluZywgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlciA6c29iOlwiKX0gPC9oMz5cclxuXHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDw+PC8+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L1Byb2ZpbGVTdHlsZT5cclxuXHRcdDwvRWxlbWVudD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL0xvYWRlci9Mb2FkZXJcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlZHVjZXJcIjtcclxuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yaWVzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dpdEh1Yi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9qZWN0U3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL1Byb2plY3RzL1Byb2plY3RTdHlsZVwiO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcblx0Y29uc3QgeyBjb250ZXh0LCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHRjb25zdCBlbW9qaXMgPSByZXF1aXJlKFwiZW1vamlzXCIpO1xyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG5cdFx0cmVwb3NpdG9yaWVzOiBbXSxcclxuXHRcdHNob3dSZXBvc2l0b3JpZXM6IFtdXHJcblx0fSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXRSZXBvc2l0b3JpZXMoKVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0c2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xyXG5cdFx0XHRcdFx0Li4ucHJldmlvdXNTdGF0ZSxcclxuXHRcdFx0XHRcdHJlcG9zaXRvcmllczogcmVzcG9uc2UuZGF0YSxcclxuXHRcdFx0XHRcdHNob3dSZXBvc2l0b3JpZXM6IHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0XHR9KSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IG5hbWU6IFwiaXNMb2FkaW5nXCIsIHZhbHVlOiBmYWxzZSB9KTtcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRkaXNwYXRjaCh7IG5hbWU6IFwiaXNMb2FkaW5nXCIsIHZhbHVlOiBmYWxzZSB9KTtcclxuXHRcdFx0XHRkaXNwYXRjaCh7IG5hbWU6IFwiZXJyb3JcIiwgdmFsdWU6IHRydWUgfSk7XHJcblx0XHRcdH0pO1xyXG5cdH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBjb250ZXh0LnNlYXJjaDtcclxuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZS50cmltKCkgIT09IFwiXCIpIHtcclxuXHRcdFx0Y29uc3QgcmVwb3NpdG9yaWVzID0gY29uY2F0UXVlcnkodmFsdWUpO1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBtYXBSZXBvc2l0b3JpZXMocmVwb3NpdG9yaWVzKTtcclxuXHJcblx0XHRcdGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcclxuXHRcdFx0XHRcdC4uLnByZXZpb3VzU3RhdGUsXHJcblx0XHRcdFx0XHRzaG93UmVwb3NpdG9yaWVzOiByZXN1bHRcclxuXHRcdFx0XHR9KSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcclxuXHRcdFx0XHQuLi5wcmV2aW91c1N0YXRlLFxyXG5cdFx0XHRcdHNob3dSZXBvc2l0b3JpZXM6IHN0YXRlLnJlcG9zaXRvcmllc1xyXG5cdFx0XHR9KSk7XHJcblx0XHR9XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcblx0fSwgW2NvbnRleHQuc2VhcmNoXSk7XHJcblxyXG5cdGNvbnN0IGNvbmNhdFF1ZXJ5ID0gdmFsdWUgPT4ge1xyXG5cdFx0dmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0Y29uc3QgbmFtZSA9IHN0YXRlLnJlcG9zaXRvcmllcy5maWx0ZXIoeCA9PiAoeC5uYW1lID8geC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpIDogbnVsbCkpO1xyXG5cdFx0Y29uc3QgbGFuZ3VhZ2UgPSBzdGF0ZS5yZXBvc2l0b3JpZXMuZmlsdGVyKHggPT4gKHgubGFuZ3VhZ2UgPyB4Lmxhbmd1YWdlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpIDogbnVsbCkpO1xyXG5cdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBzdGF0ZS5yZXBvc2l0b3JpZXMuZmlsdGVyKHggPT5cclxuXHRcdFx0eC5kZXNjcmlwdGlvbiA/IHguZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSkgOiBudWxsXHJcblx0XHQpO1xyXG5cclxuXHRcdGxldCBsaXN0T2ZSZXBvcyA9IG5hbWUuY29uY2F0KGxhbmd1YWdlKTtcclxuXHRcdGxpc3RPZlJlcG9zID0gbGlzdE9mUmVwb3MuY29uY2F0KGRlc2NyaXB0aW9uKTtcclxuXHJcblx0XHRyZXR1cm4gbGlzdE9mUmVwb3M7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbWFwUmVwb3NpdG9yaWVzID0gcmVwb3NpdG9yaWVzID0+IHtcclxuXHRcdGNvbnN0IHJlcG9zTWFwID0gbmV3IE1hcCgpO1xyXG5cdFx0Zm9yIChjb25zdCByZXBvcyBvZiByZXBvc2l0b3JpZXMpIHtcclxuXHRcdFx0cmVwb3NNYXAuc2V0KHJlcG9zLmlkLCByZXBvcyk7XHJcblx0XHR9XHJcblx0XHRjb25zdCByZXN1bHRPZk1hcCA9IFsuLi5yZXBvc01hcC52YWx1ZXMoKV07XHJcblx0XHRyZXR1cm4gcmVzdWx0T2ZNYXA7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxQcm9qZWN0U3R5bGU+XHJcblx0XHRcdHshY29udGV4dC5pc0xvYWRpbmcgPyAoXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInByb2plY3RzXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlcG9zaXRvcmllc1wiPlxyXG5cdFx0XHRcdFx0XHR7c3RhdGUucmVwb3NpdG9yaWVzICYmIHN0YXRlLnNob3dSZXBvc2l0b3JpZXMubGVuZ3RoID4gMCA/IChcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZS5zaG93UmVwb3NpdG9yaWVzLm1hcChyZXBvID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVwb3NpdG9yeVwiIGtleT17cmVwby5pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17cmVwby5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3JlcG8ubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGk+e3JlcG8uZnVsbF9uYW1lfTwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57ZW1vamlzLnVuaWNvZGUocmVwby5kZXNjcmlwdGlvbil9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxhbmd1YWdlXCI+e3JlcG8ubGFuZ3VhZ2V9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0KSA6ICFjb250ZXh0LmVycm9yID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5vLXJlcG9cIj57ZW1vamlzLnVuaWNvZGUoXCJObyByZXBvc2l0b3J5IGZvdW5kIDpzb2I6XCIpfTwvcD5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8PjwvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0KX1cclxuXHRcdDwvUHJvamVjdFN0eWxlPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlZHVjZXJcIjtcclxuaW1wb3J0IHsgU2VhcmNoU3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL1NlYXJjaC9TZWFyY2hTdHlsZVwiO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKCkge1xyXG5cdGNvbnN0IHsgY29udGV4dCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblx0Y29uc3Qgb25DaGFuZ2UgPSB2YWx1ZSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7IG5hbWU6IFwic2VhcmNoXCIsIHZhbHVlOiB2YWx1ZSB9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFNlYXJjaFN0eWxlPlxyXG5cdFx0XHR7IWNvbnRleHQuaXNMb2FkaW5nICYmICFjb250ZXh0LmVycm9yID8gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwic2VhcmNoXCJcclxuXHRcdFx0XHRcdFx0YXJpYS1sYWJlbD1cInNlYXJjaFwiXHJcblx0XHRcdFx0XHRcdGlkPVwic2VhcmNoXCJcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PD48Lz5cclxuXHRcdFx0KX1cclxuXHRcdDwvU2VhcmNoU3R5bGU+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9yZWR1Y2VyLmpzXCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBsaWdodCBmcm9tIFwiLi4vLi4vdGhlbWVzL2xpZ2h0XCI7XHJcbmltcG9ydCBkYXJrIGZyb20gXCIuLi8uLi90aGVtZXMvZGFya1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbENvbnRleHQgPSB7XHJcblx0c2VhcmNoOiBcIlwiLFxyXG5cdGlzTG9hZGluZzogdHJ1ZSxcclxuXHRlcnJvcjogZmFsc2UsXHJcblx0dGhlbWU6IGRhcmtcclxufTtcclxuXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsQ29udGV4dCwgYWN0aW9uKSA9PiB7XHJcblx0Y29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcblx0bmV3U3RhdGVbYWN0aW9uLm5hbWVdID0gYWN0aW9uLnZhbHVlO1xyXG5cdHJldHVybiBuZXdTdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHRjb25zdCBbY29udGV4dCA9IGluaXRpYWxDb250ZXh0LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIpO1xyXG5cdGNvbnN0IHZhbHVlID0geyBjb250ZXh0LCBkaXNwYXRjaCB9O1xyXG5cdHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xyXG59O1xyXG5cclxuY29uc3QgQ29udGV4dENvbnN1bWVyID0gQ29udGV4dC5Db25zdW1lcjtcclxuZXhwb3J0IHsgQ29udGV4dCwgQ29udGV4dFByb3ZpZGVyLCBDb250ZXh0Q29uc3VtZXIgfTtcclxuIiwiZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG5cdHVybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL1wiLFxyXG5cdHVzZXI6IFwiRUR1c2lrXCIsXHJcblx0cHVibGljOiBcImV2ZW50cy9wdWJsaWNcIlxyXG59O1xyXG4iLCJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRleHRQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L3JlZHVjZXIvcmVkdWNlclwiO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9HbG9iYWwvR2xvYmFsXCI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZVwiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoXCI7XHJcbmltcG9ydCB1c2VQZXJzaXN0ZWRTdGF0ZSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuXHJcbmltcG9ydCBsaWdodCBmcm9tIFwiLi4vdGhlbWVzL2xpZ2h0XCI7XHJcbmltcG9ydCBkYXJrIGZyb20gXCIuLi90aGVtZXMvZGFya1wiO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG5cdC8vIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlUGVyc2lzdGVkU3RhdGUoXCJ0aGVtZVwiLCBsaWdodCk7XHJcblx0Y29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcInRoZW1lXCIsIGxpZ2h0KTtcclxuXHJcblx0Y29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcblx0XHRzZXRUaGVtZSh0aGVtZS5uYW1lID09PSBcImxpZ2h0XCIgPyBkYXJrIDogbGlnaHQpO1xyXG5cdH07XHJcblxyXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0Ly8gXHRjb25zdCBwYXJ0aWNsZXNKUyA9IHdpbmRvdy5wYXJ0aWNsZXNKUztcclxuXHQvLyBcdHBhcnRpY2xlc0pTLmxvYWQoXCJwYXJ0aWNsZXMtanNcIiwgXCIvYXNzZXRzL2pzb24vcGFydGljbGVzLmpzb25cIiwgKCkgPT4ge1xyXG5cdC8vIFx0XHRjb25zb2xlLmxvZyh0aGVtZS5uYW1lKTtcclxuXHQvLyBcdH0pO1xyXG5cdC8vIH0sIFt0aGVtZS5uYW1lXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBwYXJ0aWNsZXNKUyA9IHdpbmRvdy5wYXJ0aWNsZXNKUztcclxuXHRcdHBhcnRpY2xlc0pTLmxvYWQoXHJcblx0XHRcdFwicGFydGljbGVzLWpzXCIsXHJcblx0XHRcdHRoZW1lLm5hbWUgPT09IFwiZGFya1wiID8gXCIvYXNzZXRzL2pzb24vcGFydGljbGVzLmpzb25cIiA6IFwiL2Fzc2V0cy9qc29uL3Nub3cuanNvblwiLFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhlbWUubmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fSwgW3RoZW1lLm5hbWVdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZS5uYW1lICE9PSB1bmRlZmluZWQgPyB0aGVtZSA6IGxpZ2h0fT5cclxuXHRcdFx0ey8qIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtkYXJrfT4gKi99XHJcblx0XHRcdDxDb250ZXh0UHJvdmlkZXI+XHJcblx0XHRcdFx0PEdsb2JhbFN0eWxlIC8+XHJcblx0XHRcdFx0PEhlYWRlciB0b2dnbGVUaGVtZT17dG9nZ2xlVGhlbWV9IC8+XHJcblx0XHRcdFx0PFByb2ZpbGUgLz5cclxuXHRcdFx0XHQ8U2VhcmNoIC8+XHJcblx0XHRcdFx0PFByb2plY3RzIC8+XHJcblx0XHRcdFx0PEZvb3RlciAvPlxyXG5cdFx0XHQ8L0NvbnRleHRQcm92aWRlcj5cclxuXHRcdDwvVGhlbWVQcm92aWRlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmVwb3NpdG9yaWVzID0gKCkgPT4ge1xyXG5cdHJldHVybiBheGlvcy5nZXQoYCR7ZW52aXJvbm1lbnQudXJsfSR7ZW52aXJvbm1lbnQudXNlcn0vcmVwb3NgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKCkgPT4ge1xyXG5cdHJldHVybiBheGlvcy5nZXQoYCR7ZW52aXJvbm1lbnQudXJsfSR7ZW52aXJvbm1lbnQudXNlcn1gKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRFbWFpbCA9ICgpID0+IHtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KGAke2Vudmlyb25tZW50LnVybH0ke2Vudmlyb25tZW50LnVzZXJ9LyR7ZW52aXJvbm1lbnQucHVibGljfWApO1xyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlclN0eWxlID0gc3R5bGVkLmRpdmBcclxuXHJcbi5mb290ZXIge1xyXG4gIC5zb2NpYWwge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb290ZXJfYmFja2dyb3VuZF9zb2NpYWx9O1xyXG4gICAgcGFkZGluZy10b3A6IDc5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAgIGEgeyAgXHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvb3Rlcl90ZXh0fTtcclxuICAgICAgc3ZnIHtcclxuICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggNXB4OyAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICA6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb290ZXJfdGV4dF9ob3Zlcn07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29weXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9vdGVyX2JhY2tncm91bmR9O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29tbWVudH07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvb3Rlcl90ZXh0fTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvb3Rlcl9zdHJvbmd9O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWAgIFxyXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4gICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJhY2tncm91bmR9O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeV90ZXh0fTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIH1cclxuXHJcbiAgYm9keSwgaW5wdXQsIGJ1dHRvbiB7XHJcbiAgICBmb250OiAxNHB4IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG5cclxuICAjcm9vdCB7XHJcbiAgICBtYXgtd2lkdGg6IDEzMzNweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDIwcHggMHB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC8qIDo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICRkYXJrZXN0O1xyXG4gICAgY29sb3I6ICRsaWdodDsgICAgXHJcbiAgfSAqL1xyXG5cclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfSAgXHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNiMmIyYjJcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG4gQGltcG9ydCBcImFzc2V0cy9zY3NzL2dsb2JhbHMuc2Nzc1wiO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgLnRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubmF2YmFyX2JhY2tncm91bmR9O1xyXG4gIH1cclxuXHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQGluY2x1ZGUgZm9udF9wcmltYXJ5O1xyXG4gIEBpbmNsdWRlIHRyYW5zaXRpb247XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbiAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG5cclxuICAgIC5uYXZiYXIge1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5uYXZiYXJfYnV0dG9ufTtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICAgIHVsIHsgICAgICBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7ICAgICAgICAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMi44ZW07XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzJweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuNWVtIDEuOGVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTEwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogLjVlbSAxZW1cclxuICAgICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuMmVtIC43ZW1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC4xZW0gLjVlbVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC44NWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42NWVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjY1ZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm5hdmJhcl9idXR0b25faG92ZXJ9OztcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubmF2YmFyX2J1dHRvbl9hY3RpdmV9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN3aXRjaCB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbG9yIHtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5uYXZiYXJfYmFja2dyb3VuZF9zY3JvbGxlZH07XHJcblxyXG4gIC5uYXZiYXIge1xyXG4gICAgdWwge1xyXG4gICAgICBtYXJnaW46IDBlbSAwIC41ZW07XHJcbiAgICB9XHJcbiAgfSBcclxufVxyXG5gO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRlclN0eWxlID0gc3R5bGVkLmRpdmBcclxuICAubG9hZGVyIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxvYWRlcl9jb2xvcn07ICAgIFxyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDE1MHB4KTtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nIDEuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRlciBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICB9ICAgXHJcblxyXG4gIEBrZXlmcmFtZXMgbG9hZGluZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XHJcbiAgICAgIG9wYWNpdHk6MC44O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xyXG4gICAgICBvcGFjaXR5OjAuODtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZVN0eWxlID0gc3R5bGVkLmRpdmBcclxuICBAaW1wb3J0IFwiYXNzZXRzL3Njc3MvZ2xvYmFscy5zY3NzXCI7XHJcblxyXG4gIEBpbmNsdWRlIGZvbnRfc2Vjb25kYXJ5O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlfdGV4dH07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNzB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5iYWNrZ3JvdW5kLXBhcnRpY2xlcy1qcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2t5X2NvbG9yfSwgdHJhbnNwYXJlbnQpOyAgICBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7ICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICB9XHJcblxyXG4gICNwYXJ0aWNsZXMtanMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZS1kZXRhaWxzIHtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIHdpZHRoOiAxMDAlOyAgIFxyXG4gICAgcGFkZGluZzogMTB2aCAwcHg7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgXHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmFja2dyb3VuZF9pbWFnZX07XHJcbiAgICAgIGJvcmRlcjogc29saWQgNXB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5X3RleHR9O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5X3RleHR9O1xyXG4gICAgICBAaW5jbHVkZSBmb250X3ByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlfdGV4dH07XHJcbiAgICAgIGZvbnQtc2l6ZTogNjhweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyAgICAgICAgXHJcbiAgICAgIG1hcmdpbjogMjVweCAwOyBcclxuICAgICAgQGluY2x1ZGUgZm9udF9wcmltYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aGlyZF90ZXh0fTtcclxuICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MjBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM4MHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE2dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3ODBweCkgeyAgXHJcbiAgICAgIHBhZGRpbmc6IDh2aCAwO1xyXG4gICAgICBoMSwgaDIge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfSAgIFxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY2MHB4KSB7ICBcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgfSAgIFxyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1NjBweCkgeyAgXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdFN0eWxlID0gc3R5bGVkLmRpdmBcclxuXHJcbi5yZXBvc2l0b3JpZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDIydmg7XHJcblxyXG4gIGkge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5X3RleHR9O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDsgICAgICBcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFuY2hvcl90ZXh0fTtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMi42O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmVwb3NpdG9yeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJhY2tncm91bmRfcmVwb3NpdG9yaWVzfTtcclxuICAgIHBhZGRpbmc6IDEycHggMThweDtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRoaXJkX3RleHR9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAuMjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMTVweCAxNXB4O1xyXG4gICAgZmxleDogMSAxIDM0MHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5X3RleHR9O1xyXG4gIH1cclxuXHJcbiAgcC5sYW5ndWFnZSB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kYW5nZXJ9O1xyXG4gIH1cclxuICAgIFxyXG4gIHAubm8tcmVwbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kYW5nZXJ9O1xyXG4gIH1cclxufWA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG4uc2VhcmNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6IDh2aDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAyLjV2aCAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2t5X2NvbG9yfSAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5X3RleHR9O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgyNywgMzEsIDM1LCAuMDc1KSwgMCAwIDAgMC4xNWVtIHJnYmEoMTg5LCAxNDcsIDI0OSwgLjkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5gO1xyXG4iLCJjb25zdCBkYXJrID0ge1xyXG5cdG5hbWU6IFwiZGFya1wiLFxyXG5cdGJhY2tncm91bmQ6IFwiIzI4MmEzNlwiLFxyXG5cdGJhY2tncm91bmRfcmVwb3NpdG9yaWVzOiBcIiM0NDQ3NWFcIixcclxuXHRiYWNrZ3JvdW5kX2ltYWdlOiBcIiNmZmZcIixcclxuXHRza3lfY29sb3I6IFwiIzIzMjc0MVwiLFxyXG5cdGxvYWRlcl9jb2xvcjogXCIjNjI3MmE0XCIsXHJcblx0bmF2YmFyX2JhY2tncm91bmRfc2Nyb2xsZWQ6IFwiIzQ0NDc1YVwiLFxyXG5cdG5hdmJhcl9iYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcblx0bmF2YmFyX2J1dHRvbjogXCIjZTBlMGRjXCIsXHJcblx0bmF2YmFyX2J1dHRvbl9ob3ZlcjogXCIjZmZmXCIsXHJcblx0bmF2YmFyX2J1dHRvbl9hY3RpdmU6IFwiI2ZmNTU1NVwiLFxyXG5cdHByaW1hcnlfdGV4dDogXCIjZmZmXCIsXHJcblx0c2Vjb25kYXJ5X3RleHQ6IFwiIzYyNzJhNFwiLFxyXG5cdHRoaXJkX3RleHQ6IFwiIzQ0NDc1YVwiLFxyXG5cdGFuY2hvcl90ZXh0OiBcIiNiZDkzZjlcIixcclxuXHRpbmZvOiBcIiM4YmU5ZmRcIixcclxuXHR5ZWxsb3c6IFwiI2YxZmE4Y1wiLFxyXG5cdHN1Y2Nlc3M6IFwiIzUwZmE3YlwiLFxyXG5cdHdhcm5pbmc6IFwiI2ZmYjg2Y1wiLFxyXG5cdHBpbms6IFwiI2ZmNzljNlwiLFxyXG5cdGRhbmdlcjogXCIjZmY1NTU1XCIsXHJcblx0Zm9vdGVyX2JhY2tncm91bmQ6IFwiIzQ0NDc1YVwiLFxyXG5cdGZvb3Rlcl9iYWNrZ3JvdW5kX3NvY2lhbDogXCIjMjgyYTM2XCIsXHJcblx0Zm9vdGVyX3RleHQ6IFwiI2UwZTBkY1wiLFxyXG5cdGZvb3Rlcl90ZXh0X2hvdmVyOiBcIiNmZmZcIixcclxuXHRmb290ZXJfc3Ryb25nOiBcIiNmZjU1NTVcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFyaztcclxuIiwiY29uc3QgbGlnaHQgPSB7XHJcblx0bmFtZTogXCJsaWdodFwiLFxyXG5cdGJhY2tncm91bmQ6IFwiI2Y4ZjhmMlwiLFxyXG5cdGJhY2tncm91bmRfcmVwb3NpdG9yaWVzOiBcIiNmZmZcIixcclxuXHRiYWNrZ3JvdW5kX2ltYWdlOiBcIiNmZmZcIixcclxuXHRza3lfY29sb3I6IFwiIzYyNzJhNFwiLFxyXG5cdGxvYWRlcl9jb2xvcjogXCIjNjI3MmE0XCIsXHJcblx0bmF2YmFyX2JhY2tncm91bmRfc2Nyb2xsZWQ6IFwiI2ZmZlwiLFxyXG5cdG5hdmJhcl9iYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcblx0bmF2YmFyX2J1dHRvbjogXCIjMjgyYTM2XCIsXHJcblx0bmF2YmFyX2J1dHRvbl9ob3ZlcjogXCIjNDQ0NzVhXCIsXHJcblx0bmF2YmFyX2J1dHRvbl9hY3RpdmU6IFwiI2ZmNTU1NVwiLFxyXG5cdHByaW1hcnlfdGV4dDogXCIjMjgyYTM2XCIsXHJcblx0c2Vjb25kYXJ5X3RleHQ6IFwiIzYyNzJhNFwiLFxyXG5cdHRoaXJkX3RleHQ6IFwiIzQ0NDc1YVwiLFxyXG5cdGFuY2hvcl90ZXh0OiBcIiNiZDkzZjlcIixcclxuXHRpbmZvOiBcIiM4YmU5ZmRcIixcclxuXHR5ZWxsb3c6IFwiI2YxZmE4Y1wiLFxyXG5cdHN1Y2Nlc3M6IFwiIzUwZmE3YlwiLFxyXG5cdHdhcm5pbmc6IFwiI2ZmYjg2Y1wiLFxyXG5cdHBpbms6IFwiI2ZmNzljNlwiLFxyXG5cdGRhbmdlcjogXCIjZmY1NTU1XCIsXHJcblx0Zm9vdGVyX2JhY2tncm91bmQ6IFwiI2ZmZlwiLFxyXG5cdGZvb3Rlcl9iYWNrZ3JvdW5kX3NvY2lhbDogXCIjZjhmOGYyXCIsXHJcblx0Zm9vdGVyX3RleHQ6IFwiIzI4MmEzNlwiLFxyXG5cdGZvb3Rlcl90ZXh0X2hvdmVyOiBcIiM0NDQ3NWFcIixcclxuXHRmb290ZXJfc3Ryb25nOiBcIiNmZjU1NTVcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlnaHQ7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZVBlcnNpc3RlZFN0YXRlKGtleSwgaW5pdGl0YWxTdGF0ZSkge1xyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmF0ZSk7XHJcblxyXG5cdFx0Y29uc3Qgc3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuXHJcblx0XHRpZiAoc3RvcmFnZVZhbHVlKSB7XHJcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKHN0b3JhZ2VWYWx1ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gaW5pdGl0YWxTdGF0ZTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcclxuXHR9LCBba2V5LCBzdGF0ZV0pO1xyXG5cclxuXHRyZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZV07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVBlcnNpc3RlZFN0YXRlO1xyXG5cclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gY29uc3QgdXNlU3RpY2t5U3RhdGUgPSAoZGVmYXVsdFZhbHVlLCBrZXkpID0+IHtcclxuLy8gXHRkZWJ1Z2dlcjtcclxuLy8gXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XHJcblxyXG4vLyBcdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vIFx0XHRjb25zdCBzdGlja3lWYWx1ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG5cclxuLy8gXHRcdGlmIChzdGlja3lWYWx1ZSAhPT0gbnVsbCkge1xyXG4vLyBcdFx0XHRzZXRWYWx1ZShKU09OLnBhcnNlKHN0aWNreVZhbHVlKSk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0fSwgW2tleV0pO1xyXG5cclxuLy8gXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyBcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuLy8gXHR9LCBba2V5LCB2YWx1ZV0pO1xyXG5cclxuLy8gXHRyZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV07XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB1c2VTdGlja3lTdGF0ZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1vamlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2FpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zd2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=