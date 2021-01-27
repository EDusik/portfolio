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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_app */ "./pages/_app.js");

var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\pages\\index.js";



const IndexPage = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 2
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvcmVkdWNlci9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9naXRIdWIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvRm9vdGVyL0Zvb3RlclN0eWxlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9HbG9iYWwvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9IZWFkZXIvSGVhZGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0xvYWRlci9Mb2FkZXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvUHJvZmlsZS9Qcm9maWxlU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1Byb2plY3RzL1Byb2plY3RTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvU2VhcmNoL1NlYXJjaFN0eWxlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9kYXJrLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9saWdodC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy91c2VEYXJrTW9kZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtb2ppc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkZvb3RlciIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInByb2ZpbGUiLCJlbWFpbCIsImxpbmtlZGluIiwidXNlRWZmZWN0IiwiZ2V0VXNlciIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJnZXRFbWFpbCIsInByZXZpb3VzU3RhdGUiLCJpc0xvYWRpbmciLCJlcnJvciIsImh0bWxfdXJsIiwibmFtZSIsIkhlYWRlciIsInRvZ2dsZVRoZW1lIiwiVGhlbWVDb250ZXh0Iiwic2Nyb2xsIiwic2V0U2Nyb2xsIiwiYm90dG9tIiwic2V0Qm90dG9tIiwibmF2YmFySGVpZ2h0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWJvdXQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib25zY3JvbGwiLCJpbm5lckhlaWdodCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJMb2FkZXIiLCJQcm9qZWN0cyIsImRpc3BhdGNoIiwiZW1vamlzIiwicmVxdWlyZSIsImNhdGNoIiwidmFsdWUiLCJhdmF0YXJfdXJsIiwibG9naW4iLCJiaW8iLCJ1bmljb2RlIiwicmVwb3NpdG9yaWVzIiwic2hvd1JlcG9zaXRvcmllcyIsImdldFJlcG9zaXRvcmllcyIsInNldFRpbWVvdXQiLCJzZWFyY2giLCJ0cmltIiwiY29uY2F0UXVlcnkiLCJyZXN1bHQiLCJtYXBSZXBvc2l0b3JpZXMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsIngiLCJpbmNsdWRlcyIsImxhbmd1YWdlIiwiZGVzY3JpcHRpb24iLCJsaXN0T2ZSZXBvcyIsImNvbmNhdCIsInJlcG9zTWFwIiwiTWFwIiwicmVwb3MiLCJzZXQiLCJpZCIsInJlc3VsdE9mTWFwIiwidmFsdWVzIiwibGVuZ3RoIiwibWFwIiwicmVwbyIsImZ1bGxfbmFtZSIsIlNlYXJjaCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJpbml0aWFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJyZWR1Y2VyIiwiYWN0aW9uIiwibmV3U3RhdGUiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJDb250ZXh0Q29uc3VtZXIiLCJDb25zdW1lciIsImVudmlyb25tZW50IiwidXJsIiwidXNlciIsInB1YmxpYyIsIkFwcCIsInRoZW1lIiwidXNlRGFya01vZGUiLCJ0aGVtZU1vZGUiLCJsaWdodCIsImRhcmsiLCJwYXJ0aWNsZXNKUyIsImxvYWQiLCJJbmRleFBhZ2UiLCJheGlvcyIsImdldCIsIkZvb3RlclN0eWxlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJmb290ZXJfYmFja2dyb3VuZF9zb2NpYWwiLCJmb290ZXJfdGV4dCIsImZvb3Rlcl90ZXh0X2hvdmVyIiwiZm9vdGVyX2JhY2tncm91bmQiLCJmb290ZXJfc3Ryb25nIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeV90ZXh0IiwiSGVhZGVyU3R5bGUiLCJuYXZiYXJfYmFja2dyb3VuZCIsIm5hdmJhcl9idXR0b24iLCJuYXZiYXJfYnV0dG9uX2hvdmVyIiwibmF2YmFyX2J1dHRvbl9hY3RpdmUiLCJuYXZiYXJfYmFja2dyb3VuZF9zY3JvbGxlZCIsIkxvYWRlclN0eWxlIiwibG9hZGVyX2NvbG9yIiwiUHJvZmlsZVN0eWxlIiwic2t5X2NvbG9yIiwiYmFja2dyb3VuZF9pbWFnZSIsInNlY29uZGFyeV90ZXh0IiwidGhpcmRfdGV4dCIsIlByb2plY3RTdHlsZSIsImFuY2hvcl90ZXh0IiwiYmFja2dyb3VuZF9yZXBvc2l0b3JpZXMiLCJkYW5nZXIiLCJTZWFyY2hTdHlsZSIsImluZm8iLCJ5ZWxsb3ciLCJzdWNjZXNzIiwid2FybmluZyIsInBpbmsiLCJzZXRUaGVtZSIsImNvbXBvbmVudE1vdW50ZWQiLCJzZXRDb21wb25lbnRNb3VudGVkIiwic2V0TW9kZSIsIm1vZGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibG9jYWxUaGVtZSIsImdldEl0ZW0iLCJtYXRjaE1lZGlhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNB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LEdBQUcsTUFBTTtBQUN6QixRQUFJMkUsS0FBSyxLQUFLLE9BQWQsRUFBdUI7QUFDdEJnRCxhQUFPLENBQUMsTUFBRCxDQUFQO0FBQ0EsS0FGRCxNQUVPO0FBQ05BLGFBQU8sQ0FBQyxPQUFELENBQVA7QUFDQTtBQUNELEdBTkQ7O0FBUUF2SSx5REFBUyxDQUFDLE1BQU07QUFDZixVQUFNMkksVUFBVSxHQUFHckgsTUFBTSxDQUFDbUgsWUFBUCxDQUFvQkcsT0FBcEIsQ0FBNEIsT0FBNUIsQ0FBbkI7QUFDQXRILFVBQU0sQ0FBQ3VILFVBQVAsSUFBcUIsQ0FBQ0YsVUFBdEIsR0FBbUNKLE9BQU8sQ0FBQyxPQUFELENBQTFDLEdBQXNESSxVQUFVLEdBQUdQLFFBQVEsQ0FBQ08sVUFBRCxDQUFYLEdBQTBCSixPQUFPLENBQUMsTUFBRCxDQUFqRztBQUNBRCx1QkFBbUIsQ0FBQyxJQUFELENBQW5CO0FBQ0EsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLFNBQU8sQ0FBQy9DLEtBQUQsRUFBUTNFLFdBQVIsRUFBcUJ5SCxnQkFBckIsQ0FBUDtBQUNBLENBdkJNLEM7Ozs7Ozs7Ozs7O0FDRlAsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IGdldEVtYWlsLCBnZXRVc2VyIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dpdEh1Yi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiwgQWlPdXRsaW5lTWFpbCwgQWlGaWxsTGlua2VkaW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgRm9vdGVyU3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0Zvb3Rlci9Gb290ZXJTdHlsZVwiO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCkge1xyXG5cdGNvbnN0IHsgY29udGV4dCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuXHRcdHByb2ZpbGU6IHt9LFxyXG5cdFx0ZW1haWw6IFwiXCIsXHJcblx0XHRsaW5rZWRpbjogXCJcIlxyXG5cdH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0VXNlcigpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRzZXRTdGF0ZSh7IHByb2ZpbGU6IHJlc3BvbnNlLmRhdGEgfSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRnZXRFbWFpbCgpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRzZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XHJcblx0XHRcdFx0Li4ucHJldmlvdXNTdGF0ZSxcclxuXHRcdFx0XHRlbWFpbDogXCJlZHVhcmRvZHVzaWtAZ21haWwuY29tXCIsXHJcblx0XHRcdFx0bGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2VkdWFyZG8tZG9zLXNhbnRvcy1kdXNpay0wOTUxMDAxMjAvXCJcclxuXHRcdFx0fSkpO1xyXG5cdFx0fSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZvb3RlclN0eWxlPlxyXG5cdFx0XHR7IWNvbnRleHQuaXNMb2FkaW5nICYmICFjb250ZXh0LmVycm9yID8gKFxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJjb250YWN0XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2BtYWlsdG86JHtzdGF0ZS5lbWFpbH1gfSB0YXJnZXQ9XCJfdG9wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWlPdXRsaW5lTWFpbCAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtzdGF0ZS5wcm9maWxlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWlGaWxsR2l0aHViIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e3N0YXRlLmxpbmtlZGlufSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWlGaWxsTGlua2VkaW4gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdERldmVsb3BlZCBieSA8c3Ryb25nPntzdGF0ZS5wcm9maWxlLm5hbWV9PC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDw+PC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8L0Zvb3RlclN0eWxlPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCI7XHJcbmltcG9ydCB7IEhlYWRlclN0eWxlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9IZWFkZXIvSGVhZGVyU3R5bGVcIjtcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyB0b2dnbGVUaGVtZSB9KSA9PiB7XHJcblx0Y29uc3QgeyBuYW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblxyXG5cdGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2JvdHRvbSwgc2V0Qm90dG9tXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBuYXZiYXJIZWlnaHQgPSA1NjtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhYm91dCA9IHdpbmRvdy5zY3JvbGxZID4gbmF2YmFySGVpZ2h0O1xyXG5cdFx0XHRpZiAoYWJvdXQgIT09IHNjcm9sbCkge1xyXG5cdFx0XHRcdHNldFNjcm9sbChhYm91dCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZID49IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XHJcblx0XHRcdFx0c2V0Qm90dG9tKHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEJvdHRvbShmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8SGVhZGVyU3R5bGU+XHJcblx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPXtcImhlYWRlciBcIiArIChzY3JvbGwgPyBcImNvbG9yXCIgOiBcInRyYW5zcGFyZW50XCIpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuXHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUNsYXNzPXshYm90dG9tID8gXCJhY3RpdmUgXCIgOiBcInJlbW92ZVwifVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0bz1cImFib3V0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldD17LTE1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXNEeW5hbWljPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17MTAwMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsYXk9ezUwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJhYm91dFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFib3V0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVDbGFzcz17IWJvdHRvbSA/IFwiYWN0aXZlIFwiIDogXCJyZW1vdmVcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dG89XCJwcm9qZWN0c1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXQ9ey0xNTB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlzRHluYW1pYz17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb249ezEwMDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGF5PXs1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwicHJvamVjdHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9qZWN0c1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtib3R0b20gPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dG89XCJjb250YWN0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldD17MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb249ezEwMDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlzRHluYW1pYz17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsYXk9ezUwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cImNvbnRhY3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWN0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuXHRcdFx0XHRcdFx0PFN3aXRjaFxyXG5cdFx0XHRcdFx0XHRcdG9mZkhhbmRsZUNvbG9yPVwiI0UwRTBEQ1wiXHJcblx0XHRcdFx0XHRcdFx0b25IYW5kbGVDb2xvcj1cIiNFMEUwRENcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0b2dnbGVUaGVtZX1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtuYW1lID09PSBcImRhcmtcIn1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkSWNvbj17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0dW5jaGVja2VkSWNvbj17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxNH1cclxuXHRcdFx0XHRcdFx0XHR3aWR0aD17MzJ9XHJcblx0XHRcdFx0XHRcdFx0b2ZmQ29sb3I9XCIjQ0NDQ0NDXCJcclxuXHRcdFx0XHRcdFx0XHRoYW5kbGVEaWFtZXRlcj17MjB9XHJcblx0XHRcdFx0XHRcdFx0b25Db2xvcj1cIiM2MjcyYTRcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0PC9IZWFkZXJTdHlsZT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExvYWRlclN0eWxlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9Mb2FkZXIvTG9hZGVyU3R5bGVcIjtcclxuXHJcbmNvbnN0IExvYWRlciA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PExvYWRlclN0eWxlPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxyXG5cdFx0XHRcdDxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3Bhbj48L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9Mb2FkZXJTdHlsZT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xyXG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvcmVkdWNlclwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dpdEh1Yi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVTdHlsZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvUHJvZmlsZS9Qcm9maWxlU3R5bGVcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG5cdGNvbnN0IHsgY29udGV4dCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblx0Y29uc3QgZW1vamlzID0gcmVxdWlyZShcImVtb2ppc1wiKTtcclxuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuXHRcdHByb2ZpbGU6IHt9XHJcblx0fSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXRVc2VyKClcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdHNldFN0YXRlKHsgcHJvZmlsZTogcmVzcG9uc2UuZGF0YSB9KTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRkaXNwYXRjaCh7IG5hbWU6IFwiZXJyb3JcIiwgdmFsdWU6IHRydWUgfSk7XHJcblx0XHRcdH0pO1xyXG5cdH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEVsZW1lbnQgbmFtZT1cImFib3V0XCI+XHJcblx0XHRcdDxQcm9maWxlU3R5bGU+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLXBhcnRpY2xlcy1qc1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBpZD1cInBhcnRpY2xlcy1qc1wiPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1kZXRhaWxzXCI+XHJcblx0XHRcdFx0XHR7IWNvbnRleHQuaXNMb2FkaW5nICYmICFjb250ZXh0LmVycm9yID8gKFxyXG5cdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgdHlwZT1cImltYWdlXCIgc3JjPXtzdGF0ZS5wcm9maWxlLmF2YXRhcl91cmx9IGFsdD17c3RhdGUucHJvZmlsZS5sb2dpbn0gLz5cclxuXHRcdFx0XHRcdFx0XHQ8aDE+e3N0YXRlLnByb2ZpbGUubmFtZX08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxoMj5EZXZlbG9wZXI8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDxwPntzdGF0ZS5wcm9maWxlLmJpb308L3A+XHJcblx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PD48Lz5cclxuXHRcdFx0XHRcdCl9e1wiIFwifVxyXG5cdFx0XHRcdFx0eyFjb250ZXh0LmlzTG9hZGluZyAmJiBjb250ZXh0LmVycm9yID8gKFxyXG5cdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdFx0PGgzPiB7ZW1vamlzLnVuaWNvZGUoXCJlcnJvciBsb2FkaW5nLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyIDpzb2I6XCIpfSA8L2gzPlxyXG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PD48Lz5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvUHJvZmlsZVN0eWxlPlxyXG5cdFx0PC9FbGVtZW50PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vTG9hZGVyL0xvYWRlclwiO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvcmVkdWNlclwiO1xyXG5pbXBvcnQgeyBnZXRSZXBvc2l0b3JpZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2l0SHViLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IFByb2plY3RTdHlsZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvUHJvamVjdHMvUHJvamVjdFN0eWxlXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cygpIHtcclxuXHRjb25zdCB7IGNvbnRleHQsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cdGNvbnN0IGVtb2ppcyA9IHJlcXVpcmUoXCJlbW9qaXNcIik7XHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcblx0XHRyZXBvc2l0b3JpZXM6IFtdLFxyXG5cdFx0c2hvd1JlcG9zaXRvcmllczogW11cclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGdldFJlcG9zaXRvcmllcygpXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRzZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XHJcblx0XHRcdFx0XHQuLi5wcmV2aW91c1N0YXRlLFxyXG5cdFx0XHRcdFx0cmVwb3NpdG9yaWVzOiByZXNwb25zZS5kYXRhLFxyXG5cdFx0XHRcdFx0c2hvd1JlcG9zaXRvcmllczogcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHRcdH0pKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgbmFtZTogXCJpc0xvYWRpbmdcIiwgdmFsdWU6IGZhbHNlIH0pO1xyXG5cdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKCkgPT4ge1xyXG5cdFx0XHRcdGRpc3BhdGNoKHsgbmFtZTogXCJpc0xvYWRpbmdcIiwgdmFsdWU6IGZhbHNlIH0pO1xyXG5cdFx0XHRcdGRpc3BhdGNoKHsgbmFtZTogXCJlcnJvclwiLCB2YWx1ZTogdHJ1ZSB9KTtcclxuXHRcdFx0fSk7XHJcblx0fSwgW2Rpc3BhdGNoXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IGNvbnRleHQuc2VhcmNoO1xyXG5cdFx0aWYgKHZhbHVlICYmIHZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xyXG5cdFx0XHRjb25zdCByZXBvc2l0b3JpZXMgPSBjb25jYXRRdWVyeSh2YWx1ZSk7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG1hcFJlcG9zaXRvcmllcyhyZXBvc2l0b3JpZXMpO1xyXG5cclxuXHRcdFx0aWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0c2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xyXG5cdFx0XHRcdFx0Li4ucHJldmlvdXNTdGF0ZSxcclxuXHRcdFx0XHRcdHNob3dSZXBvc2l0b3JpZXM6IHJlc3VsdFxyXG5cdFx0XHRcdH0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xyXG5cdFx0XHRcdC4uLnByZXZpb3VzU3RhdGUsXHJcblx0XHRcdFx0c2hvd1JlcG9zaXRvcmllczogc3RhdGUucmVwb3NpdG9yaWVzXHJcblx0XHRcdH0pKTtcclxuXHRcdH1cclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuXHR9LCBbY29udGV4dC5zZWFyY2hdKTtcclxuXHJcblx0Y29uc3QgY29uY2F0UXVlcnkgPSB2YWx1ZSA9PiB7XHJcblx0XHR2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRjb25zdCBuYW1lID0gc3RhdGUucmVwb3NpdG9yaWVzLmZpbHRlcih4ID0+ICh4Lm5hbWUgPyB4Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSkgOiBudWxsKSk7XHJcblx0XHRjb25zdCBsYW5ndWFnZSA9IHN0YXRlLnJlcG9zaXRvcmllcy5maWx0ZXIoeCA9PiAoeC5sYW5ndWFnZSA/IHgubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSkgOiBudWxsKSk7XHJcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IHN0YXRlLnJlcG9zaXRvcmllcy5maWx0ZXIoeCA9PlxyXG5cdFx0XHR4LmRlc2NyaXB0aW9uID8geC5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKSA6IG51bGxcclxuXHRcdCk7XHJcblxyXG5cdFx0bGV0IGxpc3RPZlJlcG9zID0gbmFtZS5jb25jYXQobGFuZ3VhZ2UpO1xyXG5cdFx0bGlzdE9mUmVwb3MgPSBsaXN0T2ZSZXBvcy5jb25jYXQoZGVzY3JpcHRpb24pO1xyXG5cclxuXHRcdHJldHVybiBsaXN0T2ZSZXBvcztcclxuXHR9O1xyXG5cclxuXHRjb25zdCBtYXBSZXBvc2l0b3JpZXMgPSByZXBvc2l0b3JpZXMgPT4ge1xyXG5cdFx0Y29uc3QgcmVwb3NNYXAgPSBuZXcgTWFwKCk7XHJcblx0XHRmb3IgKGNvbnN0IHJlcG9zIG9mIHJlcG9zaXRvcmllcykge1xyXG5cdFx0XHRyZXBvc01hcC5zZXQocmVwb3MuaWQsIHJlcG9zKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IHJlc3VsdE9mTWFwID0gWy4uLnJlcG9zTWFwLnZhbHVlcygpXTtcclxuXHRcdHJldHVybiByZXN1bHRPZk1hcDtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFByb2plY3RTdHlsZT5cclxuXHRcdFx0eyFjb250ZXh0LmlzTG9hZGluZyA/IChcclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwicHJvamVjdHNcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVwb3NpdG9yaWVzXCI+XHJcblx0XHRcdFx0XHRcdHtzdGF0ZS5yZXBvc2l0b3JpZXMgJiYgc3RhdGUuc2hvd1JlcG9zaXRvcmllcy5sZW5ndGggPiAwID8gKFxyXG5cdFx0XHRcdFx0XHRcdHN0YXRlLnNob3dSZXBvc2l0b3JpZXMubWFwKHJlcG8gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZXBvc2l0b3J5XCIga2V5PXtyZXBvLmlkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtyZXBvLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVwby5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aT57cmVwby5mdWxsX25hbWV9PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPntlbW9qaXMudW5pY29kZShyZXBvLmRlc2NyaXB0aW9uKX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGFuZ3VhZ2VcIj57cmVwby5sYW5ndWFnZX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQpIDogIWNvbnRleHQuZXJyb3IgPyAoXHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibm8tcmVwb1wiPntlbW9qaXMudW5pY29kZShcIk5vIHJlcG9zaXRvcnkgZm91bmQgOnNvYjpcIil9PC9wPlxyXG5cdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdDw+PC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9Qcm9qZWN0U3R5bGU+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvcmVkdWNlclwiO1xyXG5pbXBvcnQgeyBTZWFyY2hTdHlsZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvU2VhcmNoL1NlYXJjaFN0eWxlXCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2goKSB7XHJcblx0Y29uc3QgeyBjb250ZXh0LCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHRjb25zdCBvbkNoYW5nZSA9IHZhbHVlID0+IHtcclxuXHRcdGRpc3BhdGNoKHsgbmFtZTogXCJzZWFyY2hcIiwgdmFsdWU6IHZhbHVlIH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8U2VhcmNoU3R5bGU+XHJcblx0XHRcdHshY29udGV4dC5pc0xvYWRpbmcgJiYgIWNvbnRleHQuZXJyb3IgPyAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJzZWFyY2hcIlxyXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwic2VhcmNoXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJzZWFyY2hcIlxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8PjwvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9TZWFyY2hTdHlsZT5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL3JlZHVjZXIuanNcIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxDb250ZXh0ID0ge1xyXG5cdHNlYXJjaDogXCJcIixcclxuXHRpc0xvYWRpbmc6IHRydWUsXHJcblx0ZXJyb3I6IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbENvbnRleHQsIGFjdGlvbikgPT4ge1xyXG5cdGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xyXG5cdG5ld1N0YXRlW2FjdGlvbi5uYW1lXSA9IGFjdGlvbi52YWx1ZTtcclxuXHRyZXR1cm4gbmV3U3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgW2NvbnRleHQgPSBpbml0aWFsQ29udGV4dCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyKTtcclxuXHRjb25zdCB2YWx1ZSA9IHsgY29udGV4dCwgZGlzcGF0Y2ggfTtcclxuXHRyZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuXHJcbmNvbnN0IENvbnRleHRDb25zdW1lciA9IENvbnRleHQuQ29uc3VtZXI7XHJcbmV4cG9ydCB7IENvbnRleHQsIENvbnRleHRQcm92aWRlciwgQ29udGV4dENvbnN1bWVyIH07XHJcbiIsImV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuXHR1cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9cIixcclxuXHR1c2VyOiBcIkVEdXNpa1wiLFxyXG5cdHB1YmxpYzogXCJldmVudHMvcHVibGljXCJcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9yZWR1Y2VyXCI7XHJcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0dsb2JhbC9HbG9iYWxcIjtcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlXCI7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2hcIjtcclxuXHJcbmltcG9ydCBsaWdodCBmcm9tIFwiLi4vdGhlbWVzL2xpZ2h0XCI7XHJcbmltcG9ydCBkYXJrIGZyb20gXCIuLi90aGVtZXMvZGFya1wiO1xyXG5cclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VEYXJrTW9kZSB9IGZyb20gXCIuLi91dGlscy91c2VEYXJrTW9kZVwiO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG5cdGNvbnN0IFt0aGVtZSwgdG9nZ2xlVGhlbWVdID0gdXNlRGFya01vZGUoKTtcclxuXHRjb25zdCB0aGVtZU1vZGUgPSB0aGVtZSA9PT0gXCJsaWdodFwiID8gbGlnaHQgOiBkYXJrO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgcGFydGljbGVzSlMgPSB3aW5kb3cucGFydGljbGVzSlM7XHJcblx0XHRwYXJ0aWNsZXNKUy5sb2FkKFwicGFydGljbGVzLWpzXCIsIHRoZW1lID09PSBcImxpZ2h0XCIgPyBcIi9hc3NldHMvanNvbi9zbm93Lmpzb25cIiA6IFwiL2Fzc2V0cy9qc29uL3BhcnRpY2xlcy5qc29uXCIpO1xyXG5cdH0sIFt0aGVtZV0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PENvbnRleHRQcm92aWRlcj5cclxuXHRcdFx0PFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lTW9kZX0+XHJcblx0XHRcdFx0PEdsb2JhbFN0eWxlIC8+XHJcblx0XHRcdFx0PEhlYWRlciB0b2dnbGVUaGVtZT17dG9nZ2xlVGhlbWV9IC8+XHJcblx0XHRcdFx0PFByb2ZpbGUgLz5cclxuXHRcdFx0XHQ8U2VhcmNoIC8+XHJcblx0XHRcdFx0PFByb2plY3RzIC8+XHJcblx0XHRcdFx0PEZvb3RlciAvPlxyXG5cdFx0XHQ8L1RoZW1lUHJvdmlkZXI+XHJcblx0XHQ8L0NvbnRleHRQcm92aWRlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vX2FwcFwiO1xyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4gKFxyXG5cdDxkaXY+XHJcblx0XHQ8QXBwIC8+XHJcblx0PC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIi4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZXBvc2l0b3JpZXMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGF4aW9zLmdldChgJHtlbnZpcm9ubWVudC51cmx9JHtlbnZpcm9ubWVudC51c2VyfS9yZXBvc2ApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGF4aW9zLmdldChgJHtlbnZpcm9ubWVudC51cmx9JHtlbnZpcm9ubWVudC51c2VyfWApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEVtYWlsID0gKCkgPT4ge1xyXG5cdHJldHVybiBheGlvcy5nZXQoYCR7ZW52aXJvbm1lbnQudXJsfSR7ZW52aXJvbm1lbnQudXNlcn0vJHtlbnZpcm9ubWVudC5wdWJsaWN9YCk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG5cclxuLmZvb3RlciB7XHJcbiAgLnNvY2lhbCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvb3Rlcl9iYWNrZ3JvdW5kX3NvY2lhbH07XHJcbiAgICBwYWRkaW5nLXRvcDogNzlweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgYSB7ICBcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9vdGVyX3RleHR9O1xyXG4gICAgICBzdmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICBtYXJnaW46IDBweCA1cHg7ICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIDpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvb3Rlcl90ZXh0X2hvdmVyfTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb3B5cmlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb290ZXJfYmFja2dyb3VuZH07XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb290ZXJfdGV4dH07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvb3Rlcl9zdHJvbmd9O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB9XHJcblxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iYWNrZ3JvdW5kfTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlfdGV4dH07XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICB9XHJcblxyXG4gIGJvZHksIGlucHV0LCBidXR0b24ge1xyXG4gICAgZm9udDogMTRweCBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuXHJcbiAgI3Jvb3Qge1xyXG4gICAgbWF4LXdpZHRoOiAxMzMzcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDBweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICA6OnNlbGVjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlfdGV4dH07XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iYWNrZ3JvdW5kfTtcclxuICB9IFxyXG5cclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfSAgXHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNiMmIyYjJcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG5cclxuLmhlYWRlciB7XHJcbiAgLnRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubmF2YmFyX2JhY2tncm91bmR9O1xyXG4gIH1cclxuXHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcblxyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm5hdmJhcl9idXR0b259O1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgICAgdWwge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDsgICAgIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAuNWVtIDIuOGVtO1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMycHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogLjVlbSAxLjhlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xyXG4gICAgICAgICAgfSAgICBcclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC4yZW0gLjdlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC4xZW0gLjVlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuODVlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42NWVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjY1ZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm5hdmJhcl9idXR0b25faG92ZXJ9O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubmF2YmFyX2J1dHRvbl9hY3RpdmV9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN3aXRjaCB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbG9yIHtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5uYXZiYXJfYmFja2dyb3VuZF9zY3JvbGxlZH07XHJcblxyXG4gIC5uYXZiYXIge1xyXG4gICAgdWwge1xyXG4gICAgICBtYXJnaW46IDBlbSAwIC41ZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTG9hZGVyU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG4gIC5sb2FkZXIgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubG9hZGVyX2NvbG9yfTtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAxNTBweCk7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDE1MHB4KTtcclxuICAgIGFuaW1hdGlvbjogbG9hZGluZyAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5sb2FkZXIgc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgfSAgIFxyXG5cclxuICBAa2V5ZnJhbWVzIGxvYWRpbmcge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xyXG4gICAgICBvcGFjaXR5OjAuODtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgICBvcGFjaXR5OjA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcclxuICAgICAgb3BhY2l0eTowLjg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgICBvcGFjaXR5OjA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVTdHlsZSA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIEBpbmNsdWRlIGZvbnRfc2Vjb25kYXJ5O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlfdGV4dH07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNzB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5iYWNrZ3JvdW5kLXBhcnRpY2xlcy1qcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2t5X2NvbG9yfSwgdHJhbnNwYXJlbnQpOyAgICBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7ICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICB9XHJcblxyXG4gICNwYXJ0aWNsZXMtanMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZS1kZXRhaWxzIHtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIHdpZHRoOiAxMDAlOyAgIFxyXG4gICAgcGFkZGluZzogMTB2aCAwcHg7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgXHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmFja2dyb3VuZF9pbWFnZX07XHJcbiAgICAgIGJvcmRlcjogc29saWQgNXB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5X3RleHR9O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5X3RleHR9O1xyXG4gICAgICBAaW5jbHVkZSBmb250X3ByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlfdGV4dH07XHJcbiAgICAgIGZvbnQtc2l6ZTogNjhweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyAgICAgICAgXHJcbiAgICAgIG1hcmdpbjogMjVweCAwOyBcclxuICAgICAgQGluY2x1ZGUgZm9udF9wcmltYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aGlyZF90ZXh0fTtcclxuICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MjBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM4MHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE2dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3ODBweCkgeyAgXHJcbiAgICAgIHBhZGRpbmc6IDh2aCAwO1xyXG4gICAgICBoMSwgaDIge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfSAgIFxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY2MHB4KSB7ICBcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgfSAgIFxyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1NjBweCkgeyAgXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdFN0eWxlID0gc3R5bGVkLmRpdmBcclxuXHJcbi5yZXBvc2l0b3JpZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDIydmg7XHJcblxyXG4gIGkge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5X3RleHR9O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDsgICAgICBcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFuY2hvcl90ZXh0fTtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMi42O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmVwb3NpdG9yeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJhY2tncm91bmRfcmVwb3NpdG9yaWVzfTtcclxuICAgIHBhZGRpbmc6IDEycHggMThweDtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRoaXJkX3RleHR9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAuMjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMTVweCAxNXB4O1xyXG4gICAgZmxleDogMSAxIDM0MHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5X3RleHR9O1xyXG4gIH1cclxuXHJcbiAgcC5sYW5ndWFnZSB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kYW5nZXJ9O1xyXG4gIH1cclxuICAgIFxyXG4gIHAubm8tcmVwbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kYW5nZXJ9O1xyXG4gIH1cclxufWA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG4uc2VhcmNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6IDh2aDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAyLjV2aCAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5X3RleHR9IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggOHB4O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5X3RleHR9O1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgxODksIDE0NywgMjQ5LCAuMSk7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDI3LCAzMSwgMzUsIC4wNzUpLCAwIDAgMCAwLjE3ZW0gcmdiYSgxODksIDE0NywgMjQ5LCAuOSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcbiIsImNvbnN0IGRhcmsgPSB7XHJcblx0bmFtZTogXCJkYXJrXCIsXHJcblx0YmFja2dyb3VuZDogXCIjMjgyYTM2XCIsXHJcblx0YmFja2dyb3VuZF9yZXBvc2l0b3JpZXM6IFwiIzQ0NDc1YVwiLFxyXG5cdGJhY2tncm91bmRfaW1hZ2U6IFwiI2ZmZlwiLFxyXG5cdHNreV9jb2xvcjogXCIjMjMyNzQxXCIsXHJcblx0bG9hZGVyX2NvbG9yOiBcIiM2MjcyYTRcIixcclxuXHRuYXZiYXJfYmFja2dyb3VuZF9zY3JvbGxlZDogXCIjNDQ0NzVhXCIsXHJcblx0bmF2YmFyX2JhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuXHRuYXZiYXJfYnV0dG9uOiBcIiNlMGUwZGNcIixcclxuXHRuYXZiYXJfYnV0dG9uX2hvdmVyOiBcIiNmZmZcIixcclxuXHRuYXZiYXJfYnV0dG9uX2FjdGl2ZTogXCIjZmY1NTU1XCIsXHJcblx0cHJpbWFyeV90ZXh0OiBcIiNmZmZcIixcclxuXHRzZWNvbmRhcnlfdGV4dDogXCIjNjI3MmE0XCIsXHJcblx0dGhpcmRfdGV4dDogXCIjNDQ0NzVhXCIsXHJcblx0YW5jaG9yX3RleHQ6IFwiI2JkOTNmOVwiLFxyXG5cdGluZm86IFwiIzhiZTlmZFwiLFxyXG5cdHllbGxvdzogXCIjZjFmYThjXCIsXHJcblx0c3VjY2VzczogXCIjNTBmYTdiXCIsXHJcblx0d2FybmluZzogXCIjZmZiODZjXCIsXHJcblx0cGluazogXCIjZmY3OWM2XCIsXHJcblx0ZGFuZ2VyOiBcIiNmZjU1NTVcIixcclxuXHRmb290ZXJfYmFja2dyb3VuZDogXCIjNDQ0NzVhXCIsXHJcblx0Zm9vdGVyX2JhY2tncm91bmRfc29jaWFsOiBcIiMyODJhMzZcIixcclxuXHRmb290ZXJfdGV4dDogXCIjZTBlMGRjXCIsXHJcblx0Zm9vdGVyX3RleHRfaG92ZXI6IFwiI2ZmZlwiLFxyXG5cdGZvb3Rlcl9zdHJvbmc6IFwiI2ZmNTU1NVwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXJrO1xyXG4iLCJjb25zdCBsaWdodCA9IHtcclxuXHRuYW1lOiBcImxpZ2h0XCIsXHJcblx0YmFja2dyb3VuZDogXCIjZjhmOGYyXCIsXHJcblx0YmFja2dyb3VuZF9yZXBvc2l0b3JpZXM6IFwiI2ZmZlwiLFxyXG5cdGJhY2tncm91bmRfaW1hZ2U6IFwiI2ZmZlwiLFxyXG5cdHNreV9jb2xvcjogXCIjNjI3MmE0XCIsXHJcblx0bG9hZGVyX2NvbG9yOiBcIiM2MjcyYTRcIixcclxuXHRuYXZiYXJfYmFja2dyb3VuZF9zY3JvbGxlZDogXCIjZmZmXCIsXHJcblx0bmF2YmFyX2JhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuXHRuYXZiYXJfYnV0dG9uOiBcIiMyODJhMzZcIixcclxuXHRuYXZiYXJfYnV0dG9uX2hvdmVyOiBcIiM0NDQ3NWFcIixcclxuXHRuYXZiYXJfYnV0dG9uX2FjdGl2ZTogXCIjZmY1NTU1XCIsXHJcblx0cHJpbWFyeV90ZXh0OiBcIiMyODJhMzZcIixcclxuXHRzZWNvbmRhcnlfdGV4dDogXCIjNjI3MmE0XCIsXHJcblx0dGhpcmRfdGV4dDogXCIjNDQ0NzVhXCIsXHJcblx0YW5jaG9yX3RleHQ6IFwiI2JkOTNmOVwiLFxyXG5cdGluZm86IFwiIzhiZTlmZFwiLFxyXG5cdHllbGxvdzogXCIjZjFmYThjXCIsXHJcblx0c3VjY2VzczogXCIjNTBmYTdiXCIsXHJcblx0d2FybmluZzogXCIjZmZiODZjXCIsXHJcblx0cGluazogXCIjZmY3OWM2XCIsXHJcblx0ZGFuZ2VyOiBcIiNmZjU1NTVcIixcclxuXHRmb290ZXJfYmFja2dyb3VuZDogXCIjZmZmXCIsXHJcblx0Zm9vdGVyX2JhY2tncm91bmRfc29jaWFsOiBcIiNmOGY4ZjJcIixcclxuXHRmb290ZXJfdGV4dDogXCIjMjgyYTM2XCIsXHJcblx0Zm9vdGVyX3RleHRfaG92ZXI6IFwiIzQ0NDc1YVwiLFxyXG5cdGZvb3Rlcl9zdHJvbmc6IFwiI2ZmNTU1NVwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaWdodDtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZURhcmtNb2RlID0gKCkgPT4ge1xyXG5cdGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXCJsaWdodFwiKTtcclxuXHRjb25zdCBbY29tcG9uZW50TW91bnRlZCwgc2V0Q29tcG9uZW50TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3Qgc2V0TW9kZSA9IG1vZGUgPT4ge1xyXG5cdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgbW9kZSk7XHJcblx0XHRzZXRUaGVtZShtb2RlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcclxuXHRcdGlmICh0aGVtZSA9PT0gXCJsaWdodFwiKSB7XHJcblx0XHRcdHNldE1vZGUoXCJkYXJrXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0TW9kZShcImxpZ2h0XCIpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBsb2NhbFRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XHJcblx0XHR3aW5kb3cubWF0Y2hNZWRpYSAmJiAhbG9jYWxUaGVtZSA/IHNldE1vZGUoXCJsaWdodFwiKSA6IGxvY2FsVGhlbWUgPyBzZXRUaGVtZShsb2NhbFRoZW1lKSA6IHNldE1vZGUoXCJkYXJrXCIpO1xyXG5cdFx0c2V0Q29tcG9uZW50TW91bnRlZCh0cnVlKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiBbdGhlbWUsIHRvZ2dsZVRoZW1lLCBjb21wb25lbnRNb3VudGVkXTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1vamlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2FpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zd2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=