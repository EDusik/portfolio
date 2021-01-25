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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvcmVkdWNlci9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9naXRIdWIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvRm9vdGVyL0Zvb3RlclN0eWxlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9HbG9iYWwvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9IZWFkZXIvSGVhZGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0xvYWRlci9Mb2FkZXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvUHJvZmlsZS9Qcm9maWxlU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1Byb2plY3RzL1Byb2plY3RTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvU2VhcmNoL1NlYXJjaFN0eWxlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9kYXJrLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9saWdodC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtb2ppc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkZvb3RlciIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInByb2ZpbGUiLCJlbWFpbCIsImxpbmtlZGluIiwidXNlRWZmZWN0IiwiZ2V0VXNlciIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJnZXRFbWFpbCIsInByZXZpb3VzU3RhdGUiLCJpc0xvYWRpbmciLCJlcnJvciIsImh0bWxfdXJsIiwibmFtZSIsIkhlYWRlciIsInRvZ2dsZVRoZW1lIiwiVGhlbWVDb250ZXh0Iiwic2Nyb2xsIiwic2V0U2Nyb2xsIiwiYm90dG9tIiwic2V0Qm90dG9tIiwibmF2YmFySGVpZ2h0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWJvdXQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib25zY3JvbGwiLCJpbm5lckhlaWdodCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJMb2FkZXIiLCJQcm9qZWN0cyIsImRpc3BhdGNoIiwiZW1vamlzIiwicmVxdWlyZSIsImNhdGNoIiwidmFsdWUiLCJhdmF0YXJfdXJsIiwibG9naW4iLCJiaW8iLCJ1bmljb2RlIiwicmVwb3NpdG9yaWVzIiwic2hvd1JlcG9zaXRvcmllcyIsImdldFJlcG9zaXRvcmllcyIsInNldFRpbWVvdXQiLCJzZWFyY2giLCJ0cmltIiwiY29uY2F0UXVlcnkiLCJyZXN1bHQiLCJtYXBSZXBvc2l0b3JpZXMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsIngiLCJpbmNsdWRlcyIsImxhbmd1YWdlIiwiZGVzY3JpcHRpb24iLCJsaXN0T2ZSZXBvcyIsImNvbmNhdCIsInJlcG9zTWFwIiwiTWFwIiwicmVwb3MiLCJzZXQiLCJpZCIsInJlc3VsdE9mTWFwIiwidmFsdWVzIiwibGVuZ3RoIiwibWFwIiwicmVwbyIsImZ1bGxfbmFtZSIsIlNlYXJjaCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJpbml0aWFsQ29udGV4dCIsInRoZW1lIiwiZGFyayIsImNyZWF0ZUNvbnRleHQiLCJyZWR1Y2VyIiwiYWN0aW9uIiwibmV3U3RhdGUiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJDb250ZXh0Q29uc3VtZXIiLCJDb25zdW1lciIsImVudmlyb25tZW50IiwidXJsIiwidXNlciIsInB1YmxpYyIsIkFwcCIsInNldFRoZW1lIiwibGlnaHQiLCJwYXJ0aWNsZXNKUyIsImxvYWQiLCJjb25zb2xlIiwibG9nIiwiSW5kZXhQYWdlIiwiYXhpb3MiLCJnZXQiLCJGb290ZXJTdHlsZSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiZm9vdGVyX2JhY2tncm91bmRfc29jaWFsIiwiZm9vdGVyX3RleHQiLCJmb290ZXJfdGV4dF9ob3ZlciIsImZvb3Rlcl9iYWNrZ3JvdW5kIiwiY29tbWVudCIsImZvb3Rlcl9zdHJvbmciLCJjcmVhdGVHbG9iYWxTdHlsZSIsImJhY2tncm91bmQiLCJwcmltYXJ5X3RleHQiLCJIZWFkZXJTdHlsZSIsIm5hdmJhcl9iYWNrZ3JvdW5kIiwibmF2YmFyX2J1dHRvbiIsIm5hdmJhcl9idXR0b25faG92ZXIiLCJuYXZiYXJfYnV0dG9uX2FjdGl2ZSIsIm5hdmJhcl9iYWNrZ3JvdW5kX3Njcm9sbGVkIiwiTG9hZGVyU3R5bGUiLCJsb2FkZXJfY29sb3IiLCJQcm9maWxlU3R5bGUiLCJza3lfY29sb3IiLCJiYWNrZ3JvdW5kX2ltYWdlIiwic2Vjb25kYXJ5X3RleHQiLCJ0aGlyZF90ZXh0IiwiUHJvamVjdFN0eWxlIiwiYW5jaG9yX3RleHQiLCJiYWNrZ3JvdW5kX3JlcG9zaXRvcmllcyIsImRhbmdlciIsIlNlYXJjaFN0eWxlIiwiaW5mbyIsInllbGxvdyIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwicGluayIsInVzZVBlcnNpc3RlZFN0YXRlIiwia2V5IiwiaW5pdGl0YWxTdGF0ZSIsImxvY2FsU3RvcmF0ZSIsInN0b3JhZ2VWYWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7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O0FBRUEsU0FBUzRDLGlCQUFULENBQTJCQyxHQUEzQixFQUFnQ0MsYUFBaEMsRUFBK0M7QUFDOUMsUUFBTTtBQUFBLE9BQUM5SSxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxNQUFNO0FBQ3hDaUcsV0FBTyxDQUFDQyxHQUFSLENBQVl4RSxNQUFNLENBQUNtSCxZQUFuQjtBQUVBLFVBQU1DLFlBQVksR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxHQUFyQixDQUFyQjs7QUFFQSxRQUFJRyxZQUFKLEVBQWtCO0FBQ2pCLGFBQU9HLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixZQUFYLENBQVA7QUFDQSxLQUZELE1BRU87QUFDTixhQUFPRixhQUFQO0FBQ0E7QUFDRCxHQVZpQyxDQUFsQztBQVlBeEkseURBQVMsQ0FBQyxNQUFNO0FBQ2YySSxnQkFBWSxDQUFDSSxPQUFiLENBQXFCUixHQUFyQixFQUEwQk0sSUFBSSxDQUFDRyxTQUFMLENBQWV0SixLQUFmLENBQTFCO0FBQ0EsR0FGUSxFQUVOLENBQUM2SSxHQUFELEVBQU03SSxLQUFOLENBRk0sQ0FBVDtBQUlBLFNBQU8sQ0FBQ0EsS0FBRCxFQUFRQyxRQUFSLENBQVA7QUFDQTs7QUFFYzJJLGdGQUFmLEUsQ0FFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUM3Q0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IGdldEVtYWlsLCBnZXRVc2VyIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dpdEh1Yi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiwgQWlPdXRsaW5lTWFpbCwgQWlGaWxsTGlua2VkaW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgRm9vdGVyU3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0Zvb3Rlci9Gb290ZXJTdHlsZVwiO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCkge1xyXG5cdGNvbnN0IHsgY29udGV4dCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuXHRcdHByb2ZpbGU6IHt9LFxyXG5cdFx0ZW1haWw6IFwiXCIsXHJcblx0XHRsaW5rZWRpbjogXCJcIlxyXG5cdH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0VXNlcigpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRzZXRTdGF0ZSh7IHByb2ZpbGU6IHJlc3BvbnNlLmRhdGEgfSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRnZXRFbWFpbCgpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRzZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XHJcblx0XHRcdFx0Li4ucHJldmlvdXNTdGF0ZSxcclxuXHRcdFx0XHRlbWFpbDogXCJlZHVhcmRvZHVzaWtAZ21haWwuY29tXCIsXHJcblx0XHRcdFx0bGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2VkdWFyZG8tZG9zLXNhbnRvcy1kdXNpay0wOTUxMDAxMjAvXCJcclxuXHRcdFx0fSkpO1xyXG5cdFx0fSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZvb3RlclN0eWxlPlxyXG5cdFx0XHR7IWNvbnRleHQuaXNMb2FkaW5nICYmICFjb250ZXh0LmVycm9yID8gKFxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJjb250YWN0XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2BtYWlsdG86JHtzdGF0ZS5lbWFpbH1gfSB0YXJnZXQ9XCJfdG9wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWlPdXRsaW5lTWFpbCAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtzdGF0ZS5wcm9maWxlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWlGaWxsR2l0aHViIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e3N0YXRlLmxpbmtlZGlufSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWlGaWxsTGlua2VkaW4gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdERldmVsb3BlZCBieSA8c3Ryb25nPntzdGF0ZS5wcm9maWxlLm5hbWV9PC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDw+PC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8L0Zvb3RlclN0eWxlPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCI7XHJcbmltcG9ydCB7IEhlYWRlclN0eWxlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9IZWFkZXIvSGVhZGVyU3R5bGVcIjtcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyB0b2dnbGVUaGVtZSB9KSA9PiB7XHJcblx0Y29uc3QgeyBuYW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblxyXG5cdGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2JvdHRvbSwgc2V0Qm90dG9tXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBuYXZiYXJIZWlnaHQgPSA1NjtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhYm91dCA9IHdpbmRvdy5zY3JvbGxZID4gbmF2YmFySGVpZ2h0O1xyXG5cdFx0XHRpZiAoYWJvdXQgIT09IHNjcm9sbCkge1xyXG5cdFx0XHRcdHNldFNjcm9sbChhYm91dCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZID49IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XHJcblx0XHRcdFx0c2V0Qm90dG9tKHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEJvdHRvbShmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8SGVhZGVyU3R5bGU+XHJcblx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPXtcImhlYWRlciBcIiArIChzY3JvbGwgPyBcImNvbG9yXCIgOiBcInRyYW5zcGFyZW50XCIpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuXHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUNsYXNzPXshYm90dG9tID8gXCJhY3RpdmUgXCIgOiBcInJlbW92ZVwifVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0bz1cImFib3V0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldD17LTE1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXNEeW5hbWljPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17MTAwMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsYXk9ezUwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJhYm91dFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFib3V0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVDbGFzcz17IWJvdHRvbSA/IFwiYWN0aXZlIFwiIDogXCJyZW1vdmVcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dG89XCJwcm9qZWN0c1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXQ9ey0xNTB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlzRHluYW1pYz17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb249ezEwMDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGF5PXs1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwicHJvamVjdHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9qZWN0c1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtib3R0b20gPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dG89XCJjb250YWN0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldD17MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb249ezEwMDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlzRHluYW1pYz17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsYXk9ezUwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cImNvbnRhY3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWN0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuXHRcdFx0XHRcdFx0PFN3aXRjaFxyXG5cdFx0XHRcdFx0XHRcdG9mZkhhbmRsZUNvbG9yPVwiI0UwRTBEQ1wiXHJcblx0XHRcdFx0XHRcdFx0b25IYW5kbGVDb2xvcj1cIiNFMEUwRENcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0b2dnbGVUaGVtZX1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtuYW1lID09PSBcImRhcmtcIn1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkSWNvbj17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0dW5jaGVja2VkSWNvbj17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxNH1cclxuXHRcdFx0XHRcdFx0XHR3aWR0aD17MzJ9XHJcblx0XHRcdFx0XHRcdFx0b2ZmQ29sb3I9XCIjY2NjY2NcIlxyXG5cdFx0XHRcdFx0XHRcdGhhbmRsZURpYW1ldGVyPXsyMH1cclxuXHRcdFx0XHRcdFx0XHRvbkNvbG9yPVwiIzYyNzJhNFwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9oZWFkZXI+XHJcblx0XHQ8L0hlYWRlclN0eWxlPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTG9hZGVyU3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0xvYWRlci9Mb2FkZXJTdHlsZVwiO1xyXG5cclxuY29uc3QgTG9hZGVyID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8TG9hZGVyU3R5bGU+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+XHJcblx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0xvYWRlclN0eWxlPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XHJcbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2l0SHViLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVN0eWxlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9Qcm9maWxlL1Byb2ZpbGVTdHlsZVwiO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcblx0Y29uc3QgeyBjb250ZXh0LCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHRjb25zdCBlbW9qaXMgPSByZXF1aXJlKFwiZW1vamlzXCIpO1xyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG5cdFx0cHJvZmlsZToge31cclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGdldFVzZXIoKVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0c2V0U3RhdGUoeyBwcm9maWxlOiByZXNwb25zZS5kYXRhIH0pO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKCkgPT4ge1xyXG5cdFx0XHRcdGRpc3BhdGNoKHsgbmFtZTogXCJlcnJvclwiLCB2YWx1ZTogdHJ1ZSB9KTtcclxuXHRcdFx0fSk7XHJcblx0fSwgW2Rpc3BhdGNoXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RWxlbWVudCBuYW1lPVwiYWJvdXRcIj5cclxuXHRcdFx0PFByb2ZpbGVTdHlsZT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtcGFydGljbGVzLWpzXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGlkPVwicGFydGljbGVzLWpzXCI+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWRldGFpbHNcIj5cclxuXHRcdFx0XHRcdHshY29udGV4dC5pc0xvYWRpbmcgJiYgIWNvbnRleHQuZXJyb3IgPyAoXHJcblx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0PGltZyB0eXBlPVwiaW1hZ2VcIiBzcmM9e3N0YXRlLnByb2ZpbGUuYXZhdGFyX3VybH0gYWx0PXtzdGF0ZS5wcm9maWxlLmxvZ2lufSAvPlxyXG5cdFx0XHRcdFx0XHRcdDxoMT57c3RhdGUucHJvZmlsZS5uYW1lfTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PGgyPkRldmVsb3BlcjwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PHA+e3N0YXRlLnByb2ZpbGUuYmlvfTwvcD5cclxuXHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8PjwvPlxyXG5cdFx0XHRcdFx0KX17XCIgXCJ9XHJcblx0XHRcdFx0XHR7IWNvbnRleHQuaXNMb2FkaW5nICYmIGNvbnRleHQuZXJyb3IgPyAoXHJcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+IHtlbW9qaXMudW5pY29kZShcImVycm9yIGxvYWRpbmcsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIgOnNvYjpcIil9IDwvaDM+XHJcblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8PjwvPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9Qcm9maWxlU3R5bGU+XHJcblx0XHQ8L0VsZW1lbnQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9Mb2FkZXIvTG9hZGVyXCI7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IGdldFJlcG9zaXRvcmllcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9naXRIdWIuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgUHJvamVjdFN0eWxlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9Qcm9qZWN0cy9Qcm9qZWN0U3R5bGVcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG5cdGNvbnN0IHsgY29udGV4dCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblx0Y29uc3QgZW1vamlzID0gcmVxdWlyZShcImVtb2ppc1wiKTtcclxuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuXHRcdHJlcG9zaXRvcmllczogW10sXHJcblx0XHRzaG93UmVwb3NpdG9yaWVzOiBbXVxyXG5cdH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0UmVwb3NpdG9yaWVzKClcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdHNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcclxuXHRcdFx0XHRcdC4uLnByZXZpb3VzU3RhdGUsXHJcblx0XHRcdFx0XHRyZXBvc2l0b3JpZXM6IHJlc3BvbnNlLmRhdGEsXHJcblx0XHRcdFx0XHRzaG93UmVwb3NpdG9yaWVzOiByZXNwb25zZS5kYXRhXHJcblx0XHRcdFx0fSkpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goeyBuYW1lOiBcImlzTG9hZGluZ1wiLCB2YWx1ZTogZmFsc2UgfSk7XHJcblx0XHRcdFx0fSwgMTAwMCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaCgoKSA9PiB7XHJcblx0XHRcdFx0ZGlzcGF0Y2goeyBuYW1lOiBcImlzTG9hZGluZ1wiLCB2YWx1ZTogZmFsc2UgfSk7XHJcblx0XHRcdFx0ZGlzcGF0Y2goeyBuYW1lOiBcImVycm9yXCIsIHZhbHVlOiB0cnVlIH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9LCBbZGlzcGF0Y2hdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IHZhbHVlID0gY29udGV4dC5zZWFyY2g7XHJcblx0XHRpZiAodmFsdWUgJiYgdmFsdWUudHJpbSgpICE9PSBcIlwiKSB7XHJcblx0XHRcdGNvbnN0IHJlcG9zaXRvcmllcyA9IGNvbmNhdFF1ZXJ5KHZhbHVlKTtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gbWFwUmVwb3NpdG9yaWVzKHJlcG9zaXRvcmllcyk7XHJcblxyXG5cdFx0XHRpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRzZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XHJcblx0XHRcdFx0XHQuLi5wcmV2aW91c1N0YXRlLFxyXG5cdFx0XHRcdFx0c2hvd1JlcG9zaXRvcmllczogcmVzdWx0XHJcblx0XHRcdFx0fSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XHJcblx0XHRcdFx0Li4ucHJldmlvdXNTdGF0ZSxcclxuXHRcdFx0XHRzaG93UmVwb3NpdG9yaWVzOiBzdGF0ZS5yZXBvc2l0b3JpZXNcclxuXHRcdFx0fSkpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cdH0sIFtjb250ZXh0LnNlYXJjaF0pO1xyXG5cclxuXHRjb25zdCBjb25jYXRRdWVyeSA9IHZhbHVlID0+IHtcclxuXHRcdHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdGNvbnN0IG5hbWUgPSBzdGF0ZS5yZXBvc2l0b3JpZXMuZmlsdGVyKHggPT4gKHgubmFtZSA/IHgubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKSA6IG51bGwpKTtcclxuXHRcdGNvbnN0IGxhbmd1YWdlID0gc3RhdGUucmVwb3NpdG9yaWVzLmZpbHRlcih4ID0+ICh4Lmxhbmd1YWdlID8geC5sYW5ndWFnZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKSA6IG51bGwpKTtcclxuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gc3RhdGUucmVwb3NpdG9yaWVzLmZpbHRlcih4ID0+XHJcblx0XHRcdHguZGVzY3JpcHRpb24gPyB4LmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpIDogbnVsbFxyXG5cdFx0KTtcclxuXHJcblx0XHRsZXQgbGlzdE9mUmVwb3MgPSBuYW1lLmNvbmNhdChsYW5ndWFnZSk7XHJcblx0XHRsaXN0T2ZSZXBvcyA9IGxpc3RPZlJlcG9zLmNvbmNhdChkZXNjcmlwdGlvbik7XHJcblxyXG5cdFx0cmV0dXJuIGxpc3RPZlJlcG9zO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG1hcFJlcG9zaXRvcmllcyA9IHJlcG9zaXRvcmllcyA9PiB7XHJcblx0XHRjb25zdCByZXBvc01hcCA9IG5ldyBNYXAoKTtcclxuXHRcdGZvciAoY29uc3QgcmVwb3Mgb2YgcmVwb3NpdG9yaWVzKSB7XHJcblx0XHRcdHJlcG9zTWFwLnNldChyZXBvcy5pZCwgcmVwb3MpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgcmVzdWx0T2ZNYXAgPSBbLi4ucmVwb3NNYXAudmFsdWVzKCldO1xyXG5cdFx0cmV0dXJuIHJlc3VsdE9mTWFwO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UHJvamVjdFN0eWxlPlxyXG5cdFx0XHR7IWNvbnRleHQuaXNMb2FkaW5nID8gKFxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJwcm9qZWN0c1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZXBvc2l0b3JpZXNcIj5cclxuXHRcdFx0XHRcdFx0e3N0YXRlLnJlcG9zaXRvcmllcyAmJiBzdGF0ZS5zaG93UmVwb3NpdG9yaWVzLmxlbmd0aCA+IDAgPyAoXHJcblx0XHRcdFx0XHRcdFx0c3RhdGUuc2hvd1JlcG9zaXRvcmllcy5tYXAocmVwbyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlcG9zaXRvcnlcIiBrZXk9e3JlcG8uaWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e3JlcG8uaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXBvLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpPntyZXBvLmZ1bGxfbmFtZX08L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e2Vtb2ppcy51bmljb2RlKHJlcG8uZGVzY3JpcHRpb24pfTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsYW5ndWFnZVwiPntyZXBvLmxhbmd1YWdlfTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdCkgOiAhY29udGV4dC5lcnJvciA/IChcclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuby1yZXBvXCI+e2Vtb2ppcy51bmljb2RlKFwiTm8gcmVwb3NpdG9yeSBmb3VuZCA6c29iOlwiKX08L3A+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PD48Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8L1Byb2plY3RTdHlsZT5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFNlYXJjaFN0eWxlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9TZWFyY2gvU2VhcmNoU3R5bGVcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuXHRjb25zdCB7IGNvbnRleHQsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cdGNvbnN0IG9uQ2hhbmdlID0gdmFsdWUgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goeyBuYW1lOiBcInNlYXJjaFwiLCB2YWx1ZTogdmFsdWUgfSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxTZWFyY2hTdHlsZT5cclxuXHRcdFx0eyFjb250ZXh0LmlzTG9hZGluZyAmJiAhY29udGV4dC5lcnJvciA/IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0bmFtZT1cInNlYXJjaFwiXHJcblx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9XCJzZWFyY2hcIlxyXG5cdFx0XHRcdFx0XHRpZD1cInNlYXJjaFwiXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDw+PC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8L1NlYXJjaFN0eWxlPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vcmVkdWNlci5qc1wiO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbGlnaHQgZnJvbSBcIi4uLy4uL3RoZW1lcy9saWdodFwiO1xyXG5pbXBvcnQgZGFyayBmcm9tIFwiLi4vLi4vdGhlbWVzL2RhcmtcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxDb250ZXh0ID0ge1xyXG5cdHNlYXJjaDogXCJcIixcclxuXHRpc0xvYWRpbmc6IHRydWUsXHJcblx0ZXJyb3I6IGZhbHNlLFxyXG5cdHRoZW1lOiBkYXJrXHJcbn07XHJcblxyXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbENvbnRleHQsIGFjdGlvbikgPT4ge1xyXG5cdGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xyXG5cdG5ld1N0YXRlW2FjdGlvbi5uYW1lXSA9IGFjdGlvbi52YWx1ZTtcclxuXHRyZXR1cm4gbmV3U3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgW2NvbnRleHQgPSBpbml0aWFsQ29udGV4dCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyKTtcclxuXHRjb25zdCB2YWx1ZSA9IHsgY29udGV4dCwgZGlzcGF0Y2ggfTtcclxuXHRyZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuXHJcbmNvbnN0IENvbnRleHRDb25zdW1lciA9IENvbnRleHQuQ29uc3VtZXI7XHJcbmV4cG9ydCB7IENvbnRleHQsIENvbnRleHRQcm92aWRlciwgQ29udGV4dENvbnN1bWVyIH07XHJcbiIsImV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuXHR1cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9cIixcclxuXHR1c2VyOiBcIkVEdXNpa1wiLFxyXG5cdHB1YmxpYzogXCJldmVudHMvcHVibGljXCJcclxufTtcclxuIiwiaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9yZWR1Y2VyL3JlZHVjZXJcIjtcclxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvR2xvYmFsL0dsb2JhbFwiO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVcIjtcclxuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaFwiO1xyXG5pbXBvcnQgdXNlUGVyc2lzdGVkU3RhdGUgZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XHJcblxyXG5pbXBvcnQgbGlnaHQgZnJvbSBcIi4uL3RoZW1lcy9saWdodFwiO1xyXG5pbXBvcnQgZGFyayBmcm9tIFwiLi4vdGhlbWVzL2RhcmtcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuXHQvLyBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVBlcnNpc3RlZFN0YXRlKFwidGhlbWVcIiwgbGlnaHQpO1xyXG5cdGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXCJ0aGVtZVwiLCBsaWdodCk7XHJcblxyXG5cdGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG5cdFx0c2V0VGhlbWUodGhlbWUubmFtZSA9PT0gXCJsaWdodFwiID8gZGFyayA6IGxpZ2h0KTtcclxuXHR9O1xyXG5cclxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdC8vIFx0Y29uc3QgcGFydGljbGVzSlMgPSB3aW5kb3cucGFydGljbGVzSlM7XHJcblx0Ly8gXHRwYXJ0aWNsZXNKUy5sb2FkKFwicGFydGljbGVzLWpzXCIsIFwiL2Fzc2V0cy9qc29uL3BhcnRpY2xlcy5qc29uXCIsICgpID0+IHtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2codGhlbWUubmFtZSk7XHJcblx0Ly8gXHR9KTtcclxuXHQvLyB9LCBbdGhlbWUubmFtZV0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgcGFydGljbGVzSlMgPSB3aW5kb3cucGFydGljbGVzSlM7XHJcblx0XHRwYXJ0aWNsZXNKUy5sb2FkKFxyXG5cdFx0XHRcInBhcnRpY2xlcy1qc1wiLFxyXG5cdFx0XHR0aGVtZS5uYW1lID09PSBcImRhcmtcIiA/IFwiL2Fzc2V0cy9qc29uL3BhcnRpY2xlcy5qc29uXCIgOiBcIi9hc3NldHMvanNvbi9zbm93Lmpzb25cIixcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoZW1lLm5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH0sIFt0aGVtZS5uYW1lXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWUubmFtZSAhPT0gdW5kZWZpbmVkID8gdGhlbWUgOiBsaWdodH0+XHJcblx0XHRcdHsvKiA8VGhlbWVQcm92aWRlciB0aGVtZT17ZGFya30+ICovfVxyXG5cdFx0XHQ8Q29udGV4dFByb3ZpZGVyPlxyXG5cdFx0XHRcdDxHbG9iYWxTdHlsZSAvPlxyXG5cdFx0XHRcdDxIZWFkZXIgdG9nZ2xlVGhlbWU9e3RvZ2dsZVRoZW1lfSAvPlxyXG5cdFx0XHRcdDxQcm9maWxlIC8+XHJcblx0XHRcdFx0PFNlYXJjaCAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0cyAvPlxyXG5cdFx0XHRcdDxGb290ZXIgLz5cclxuXHRcdFx0PC9Db250ZXh0UHJvdmlkZXI+XHJcblx0XHQ8L1RoZW1lUHJvdmlkZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL19hcHBcIjtcclxuXHJcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IChcclxuXHQ8ZGl2PlxyXG5cdFx0PEFwcCAvPlxyXG5cdDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmVwb3NpdG9yaWVzID0gKCkgPT4ge1xyXG5cdHJldHVybiBheGlvcy5nZXQoYCR7ZW52aXJvbm1lbnQudXJsfSR7ZW52aXJvbm1lbnQudXNlcn0vcmVwb3NgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKCkgPT4ge1xyXG5cdHJldHVybiBheGlvcy5nZXQoYCR7ZW52aXJvbm1lbnQudXJsfSR7ZW52aXJvbm1lbnQudXNlcn1gKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRFbWFpbCA9ICgpID0+IHtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KGAke2Vudmlyb25tZW50LnVybH0ke2Vudmlyb25tZW50LnVzZXJ9LyR7ZW52aXJvbm1lbnQucHVibGljfWApO1xyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlclN0eWxlID0gc3R5bGVkLmRpdmBcclxuXHJcbi5mb290ZXIge1xyXG4gIC5zb2NpYWwge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb290ZXJfYmFja2dyb3VuZF9zb2NpYWx9O1xyXG4gICAgcGFkZGluZy10b3A6IDc5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAgIGEgeyAgXHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvb3Rlcl90ZXh0fTtcclxuICAgICAgc3ZnIHtcclxuICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggNXB4OyAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICA6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb290ZXJfdGV4dF9ob3Zlcn07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29weXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9vdGVyX2JhY2tncm91bmR9O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29tbWVudH07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvb3Rlcl90ZXh0fTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvb3Rlcl9zdHJvbmd9O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWAgIFxyXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4gICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJhY2tncm91bmR9O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeV90ZXh0fTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIH1cclxuXHJcbiAgYm9keSwgaW5wdXQsIGJ1dHRvbiB7XHJcbiAgICBmb250OiAxNHB4IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG5cclxuICAjcm9vdCB7XHJcbiAgICBtYXgtd2lkdGg6IDEzMzNweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDIwcHggMHB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC8qIDo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICRkYXJrZXN0O1xyXG4gICAgY29sb3I6ICRsaWdodDsgICAgXHJcbiAgfSAqL1xyXG5cclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfSAgXHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNiMmIyYjJcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG4gQGltcG9ydCBcImFzc2V0cy9zY3NzL2dsb2JhbHMuc2Nzc1wiO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgLnRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubmF2YmFyX2JhY2tncm91bmR9O1xyXG4gIH1cclxuXHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQGluY2x1ZGUgZm9udF9wcmltYXJ5O1xyXG4gIEBpbmNsdWRlIHRyYW5zaXRpb247XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbiAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG5cclxuICAgIC5uYXZiYXIge1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5uYXZiYXJfYnV0dG9ufTtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICAgIHVsIHsgICAgICBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7ICAgICAgICAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMi44ZW07XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzJweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuNWVtIDEuOGVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTEwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogLjVlbSAxZW1cclxuICAgICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuMmVtIC43ZW1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC4xZW0gLjVlbVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC44NWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42NWVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjY1ZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm5hdmJhcl9idXR0b25faG92ZXJ9OztcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubmF2YmFyX2J1dHRvbl9hY3RpdmV9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN3aXRjaCB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbG9yIHtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5uYXZiYXJfYmFja2dyb3VuZF9zY3JvbGxlZH07XHJcblxyXG4gIC5uYXZiYXIge1xyXG4gICAgdWwge1xyXG4gICAgICBtYXJnaW46IDBlbSAwIC41ZW07XHJcbiAgICB9XHJcbiAgfSBcclxufVxyXG5gO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRlclN0eWxlID0gc3R5bGVkLmRpdmBcclxuICAubG9hZGVyIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxvYWRlcl9jb2xvcn07ICAgIFxyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDE1MHB4KTtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nIDEuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRlciBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICB9ICAgXHJcblxyXG4gIEBrZXlmcmFtZXMgbG9hZGluZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XHJcbiAgICAgIG9wYWNpdHk6MC44O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xyXG4gICAgICBvcGFjaXR5OjAuODtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgIG9wYWNpdHk6MDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZVN0eWxlID0gc3R5bGVkLmRpdmBcclxuICBAaW1wb3J0IFwiYXNzZXRzL3Njc3MvZ2xvYmFscy5zY3NzXCI7XHJcblxyXG4gIEBpbmNsdWRlIGZvbnRfc2Vjb25kYXJ5O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlfdGV4dH07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNzB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5iYWNrZ3JvdW5kLXBhcnRpY2xlcy1qcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2t5X2NvbG9yfSwgdHJhbnNwYXJlbnQpOyAgICBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7ICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICB9XHJcblxyXG4gICNwYXJ0aWNsZXMtanMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZS1kZXRhaWxzIHtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIHdpZHRoOiAxMDAlOyAgIFxyXG4gICAgcGFkZGluZzogMTB2aCAwcHg7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgXHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmFja2dyb3VuZF9pbWFnZX07XHJcbiAgICAgIGJvcmRlcjogc29saWQgNXB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5X3RleHR9O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5X3RleHR9O1xyXG4gICAgICBAaW5jbHVkZSBmb250X3ByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlfdGV4dH07XHJcbiAgICAgIGZvbnQtc2l6ZTogNjhweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyAgICAgICAgXHJcbiAgICAgIG1hcmdpbjogMjVweCAwOyBcclxuICAgICAgQGluY2x1ZGUgZm9udF9wcmltYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aGlyZF90ZXh0fTtcclxuICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MjBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM4MHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE2dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3ODBweCkgeyAgXHJcbiAgICAgIHBhZGRpbmc6IDh2aCAwO1xyXG4gICAgICBoMSwgaDIge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfSAgIFxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY2MHB4KSB7ICBcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgfSAgIFxyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1NjBweCkgeyAgXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdFN0eWxlID0gc3R5bGVkLmRpdmBcclxuXHJcbi5yZXBvc2l0b3JpZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDIydmg7XHJcblxyXG4gIGkge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5X3RleHR9O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDsgICAgICBcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFuY2hvcl90ZXh0fTtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMi42O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmVwb3NpdG9yeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJhY2tncm91bmRfcmVwb3NpdG9yaWVzfTtcclxuICAgIHBhZGRpbmc6IDEycHggMThweDtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRoaXJkX3RleHR9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAuMjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMTVweCAxNXB4O1xyXG4gICAgZmxleDogMSAxIDM0MHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5X3RleHR9O1xyXG4gIH1cclxuXHJcbiAgcC5sYW5ndWFnZSB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kYW5nZXJ9O1xyXG4gIH1cclxuICAgIFxyXG4gIHAubm8tcmVwbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kYW5nZXJ9O1xyXG4gIH1cclxufWA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG4uc2VhcmNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6IDh2aDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAyLjV2aCAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2t5X2NvbG9yfSAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5X3RleHR9O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgyNywgMzEsIDM1LCAuMDc1KSwgMCAwIDAgMC4xNWVtIHJnYmEoMTg5LCAxNDcsIDI0OSwgLjkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5gO1xyXG4iLCJjb25zdCBkYXJrID0ge1xyXG5cdG5hbWU6IFwiZGFya1wiLFxyXG5cdGJhY2tncm91bmQ6IFwiIzI4MmEzNlwiLFxyXG5cdGJhY2tncm91bmRfcmVwb3NpdG9yaWVzOiBcIiM0NDQ3NWFcIixcclxuXHRiYWNrZ3JvdW5kX2ltYWdlOiBcIiNmZmZcIixcclxuXHRza3lfY29sb3I6IFwiIzIzMjc0MVwiLFxyXG5cdGxvYWRlcl9jb2xvcjogXCIjNjI3MmE0XCIsXHJcblx0bmF2YmFyX2JhY2tncm91bmRfc2Nyb2xsZWQ6IFwiIzQ0NDc1YVwiLFxyXG5cdG5hdmJhcl9iYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcblx0bmF2YmFyX2J1dHRvbjogXCIjZTBlMGRjXCIsXHJcblx0bmF2YmFyX2J1dHRvbl9ob3ZlcjogXCIjZmZmXCIsXHJcblx0bmF2YmFyX2J1dHRvbl9hY3RpdmU6IFwiI2ZmNTU1NVwiLFxyXG5cdHByaW1hcnlfdGV4dDogXCIjZmZmXCIsXHJcblx0c2Vjb25kYXJ5X3RleHQ6IFwiIzYyNzJhNFwiLFxyXG5cdHRoaXJkX3RleHQ6IFwiIzQ0NDc1YVwiLFxyXG5cdGFuY2hvcl90ZXh0OiBcIiNiZDkzZjlcIixcclxuXHRpbmZvOiBcIiM4YmU5ZmRcIixcclxuXHR5ZWxsb3c6IFwiI2YxZmE4Y1wiLFxyXG5cdHN1Y2Nlc3M6IFwiIzUwZmE3YlwiLFxyXG5cdHdhcm5pbmc6IFwiI2ZmYjg2Y1wiLFxyXG5cdHBpbms6IFwiI2ZmNzljNlwiLFxyXG5cdGRhbmdlcjogXCIjZmY1NTU1XCIsXHJcblx0Zm9vdGVyX2JhY2tncm91bmQ6IFwiIzQ0NDc1YVwiLFxyXG5cdGZvb3Rlcl9iYWNrZ3JvdW5kX3NvY2lhbDogXCIjMjgyYTM2XCIsXHJcblx0Zm9vdGVyX3RleHQ6IFwiI2UwZTBkY1wiLFxyXG5cdGZvb3Rlcl90ZXh0X2hvdmVyOiBcIiNmZmZcIixcclxuXHRmb290ZXJfc3Ryb25nOiBcIiNmZjU1NTVcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFyaztcclxuIiwiY29uc3QgbGlnaHQgPSB7XHJcblx0bmFtZTogXCJsaWdodFwiLFxyXG5cdGJhY2tncm91bmQ6IFwiI2Y4ZjhmMlwiLFxyXG5cdGJhY2tncm91bmRfcmVwb3NpdG9yaWVzOiBcIiNmZmZcIixcclxuXHRiYWNrZ3JvdW5kX2ltYWdlOiBcIiNmZmZcIixcclxuXHRza3lfY29sb3I6IFwiIzYyNzJhNFwiLFxyXG5cdGxvYWRlcl9jb2xvcjogXCIjNjI3MmE0XCIsXHJcblx0bmF2YmFyX2JhY2tncm91bmRfc2Nyb2xsZWQ6IFwiI2ZmZlwiLFxyXG5cdG5hdmJhcl9iYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcblx0bmF2YmFyX2J1dHRvbjogXCIjMjgyYTM2XCIsXHJcblx0bmF2YmFyX2J1dHRvbl9ob3ZlcjogXCIjNDQ0NzVhXCIsXHJcblx0bmF2YmFyX2J1dHRvbl9hY3RpdmU6IFwiI2ZmNTU1NVwiLFxyXG5cdHByaW1hcnlfdGV4dDogXCIjMjgyYTM2XCIsXHJcblx0c2Vjb25kYXJ5X3RleHQ6IFwiIzYyNzJhNFwiLFxyXG5cdHRoaXJkX3RleHQ6IFwiIzQ0NDc1YVwiLFxyXG5cdGFuY2hvcl90ZXh0OiBcIiNiZDkzZjlcIixcclxuXHRpbmZvOiBcIiM4YmU5ZmRcIixcclxuXHR5ZWxsb3c6IFwiI2YxZmE4Y1wiLFxyXG5cdHN1Y2Nlc3M6IFwiIzUwZmE3YlwiLFxyXG5cdHdhcm5pbmc6IFwiI2ZmYjg2Y1wiLFxyXG5cdHBpbms6IFwiI2ZmNzljNlwiLFxyXG5cdGRhbmdlcjogXCIjZmY1NTU1XCIsXHJcblx0Zm9vdGVyX2JhY2tncm91bmQ6IFwiI2ZmZlwiLFxyXG5cdGZvb3Rlcl9iYWNrZ3JvdW5kX3NvY2lhbDogXCIjZjhmOGYyXCIsXHJcblx0Zm9vdGVyX3RleHQ6IFwiIzI4MmEzNlwiLFxyXG5cdGZvb3Rlcl90ZXh0X2hvdmVyOiBcIiM0NDQ3NWFcIixcclxuXHRmb290ZXJfc3Ryb25nOiBcIiNmZjU1NTVcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlnaHQ7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZVBlcnNpc3RlZFN0YXRlKGtleSwgaW5pdGl0YWxTdGF0ZSkge1xyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmF0ZSk7XHJcblxyXG5cdFx0Y29uc3Qgc3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuXHJcblx0XHRpZiAoc3RvcmFnZVZhbHVlKSB7XHJcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKHN0b3JhZ2VWYWx1ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gaW5pdGl0YWxTdGF0ZTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcclxuXHR9LCBba2V5LCBzdGF0ZV0pO1xyXG5cclxuXHRyZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZV07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVBlcnNpc3RlZFN0YXRlO1xyXG5cclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gY29uc3QgdXNlU3RpY2t5U3RhdGUgPSAoZGVmYXVsdFZhbHVlLCBrZXkpID0+IHtcclxuLy8gXHRkZWJ1Z2dlcjtcclxuLy8gXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XHJcblxyXG4vLyBcdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vIFx0XHRjb25zdCBzdGlja3lWYWx1ZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG5cclxuLy8gXHRcdGlmIChzdGlja3lWYWx1ZSAhPT0gbnVsbCkge1xyXG4vLyBcdFx0XHRzZXRWYWx1ZShKU09OLnBhcnNlKHN0aWNreVZhbHVlKSk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0fSwgW2tleV0pO1xyXG5cclxuLy8gXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyBcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuLy8gXHR9LCBba2V5LCB2YWx1ZV0pO1xyXG5cclxuLy8gXHRyZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV07XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB1c2VTdGlja3lTdGF0ZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1vamlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2FpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zd2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=