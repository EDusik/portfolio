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
/* harmony import */ var _context_reducer_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/reducer/reducer */ "./context/reducer/reducer.js");
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_reducer_reducer__WEBPACK_IMPORTED_MODULE_3__["Context"]);
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
/* harmony import */ var _context_reducer_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/reducer/reducer */ "./context/reducer/reducer.js");

var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\components\\Header\\Header.jsx";







const Header = ({
  toggleTheme
}) => {
  // const { name } = useContext(ThemeContext);
  const {
    context
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_reducer_reducer__WEBPACK_IMPORTED_MODULE_6__["Context"]);
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
                lineNumber: 39,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
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
                lineNumber: 54,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
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
                lineNumber: 69,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "switch",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_switch__WEBPACK_IMPORTED_MODULE_3___default.a, {
            onChange: toggleTheme,
            checked: context === "dark",
            checkedIcon: false,
            uncheckedIcon: false,
            height: 14,
            width: 32,
            offColor: "#999999",
            handleDiameter: 20,
            onColor: "#79B6F2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
/* harmony import */ var _context_reducer_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/reducer/reducer */ "./context/reducer/reducer.js");
/* harmony import */ var _services_gitHub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/gitHub.service */ "./services/gitHub.service.js");
/* harmony import */ var _styles_Profile_ProfileStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Profile/ProfileStyle */ "./styles/Profile/ProfileStyle.js");


var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\components\\Profile\\Profile.jsx";






function Projects() {
  const {
    context,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_reducer_reducer__WEBPACK_IMPORTED_MODULE_3__["Context"]);

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
/* harmony import */ var _context_reducer_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/reducer/reducer */ "./context/reducer/reducer.js");
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_reducer_reducer__WEBPACK_IMPORTED_MODULE_4__["Context"]);

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
/* harmony import */ var _context_reducer_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/reducer/reducer */ "./context/reducer/reducer.js");
/* harmony import */ var _styles_Search_SearchStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Search/SearchStyle */ "./styles/Search/SearchStyle.js");


var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\components\\Search\\Search.jsx";




function Search() {
  const {
    context,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_reducer_reducer__WEBPACK_IMPORTED_MODULE_2__["Context"]);

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

var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\context\\reducer\\reducer.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialContext = {
  search: "",
  isLoading: true,
  error: false,
  theme: _themes_light__WEBPACK_IMPORTED_MODULE_2__["default"]
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
    lineNumber: 22,
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
/* harmony import */ var _themes_light__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../themes/light */ "./themes/light.js");
/* harmony import */ var _themes_dark__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../themes/dark */ "./themes/dark.js");

var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\pages\\_app.js";








 // import usePersistedState from "../utils/utils";




const App = () => {
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("theme", _themes_light__WEBPACK_IMPORTED_MODULE_10__["default"]);

  const toggleTheme = () => {
    setTheme(theme.name === "light" ? _themes_dark__WEBPACK_IMPORTED_MODULE_11__["default"] : _themes_light__WEBPACK_IMPORTED_MODULE_10__["default"]);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const particlesJS = window.particlesJS;
    particlesJS.load("particles-js", "particles.json", function () {
      console.log("Success!");
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _themes_light__WEBPACK_IMPORTED_MODULE_10__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_reducer_reducer__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Global_Global__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        toggleTheme: toggleTheme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile_Profile__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Search_Search__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
})([".footer{.social{height:200px;width:100%;background-color:", ";padding-top:79px;text-align:center;margin-top:15px;a{color:", ";svg{font-size:42px;margin:0px 5px;}:hover{cursor:pointer;color:", ";transition:.2s;}}}.copyright{background-color:", ";color:", ";width:100%;text-align:center;color:$text_primary;height:42px;line-height:3;font-size:14px;@include font_primary;strong{color:", ";font-weight:500;}}}"], props => props.theme.background, props => props.theme.foreground, props => props.theme.comment, props => props.theme.current_line, props => props.theme.comment, props => props.theme.foreground);

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
    color: ${props => props.theme.foreground};
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
    background: $darkest;
    color: $light;    
  }

  * {
    box-sizing: border-box;
  }  

  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background: #FCFCFC;
  }

  ::-webkit-scrollbar-thumb {
    background: #B2B2B2;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:vertical:hover{
    background: #999999;
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
})([".header{.transparent{background-color:transparent;}border:0;box-shadow:none;position:absolute;z-index:1;width:100%;@include font_primary;@include transition;.container{display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;width:1200px;max-width:100%;padding:0px 15px;height:56px;margin:0 auto;transition:1s;.navbar{color:$text_secondary;width:90%;padding-left:10%;ul{padding-left:0;text-align:center;li{display:inline;padding:.5em 2.8em;@media only screen and (max-width:632px){padding:.5em 1.8em;}@media only screen and (max-width:510px){padding:.5em 1em}@media only screen and (max-width:420px){padding:.2em .7em}@media only screen and (max-width:340px){padding:.1em .5em}a{font-size:0.75em;font-weight:bold;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;@media only screen and (max-width:380px){font-size:0.65em;}@media only screen and (max-width:380px){font-size:0.65em;}&:hover{color:$light;cursor:pointer;}}.active{color:$light;}}}}}.switch{width:10%;}}.color{@include transition;display:flex;justify-content:space-around;flex-wrap:wrap;position:fixed;height:52px;background-color:$primary;border-bottom:solid 4px $secondary;.navbar{ul{margin:0em 0 .5em;}}}"]);

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
})([".loader span{position:fixed;display:inline-block;width:300px;height:300px;border-radius:100%;background:$info;top:calc(50% - 150px);left:calc(50% - 150px);animation:loading 1.5s linear infinite;}.loader span:last-child{animation-delay:-0.9s;-webkit-animation-delay:-0.9s;}@keyframes loading{0%{transform:scale(0,0);opacity:0.8;}100%{transform:scale(1,1);opacity:0;}}@-webkit-keyframes loading{0%{-webkit-transform:scale(0,0);opacity:0.8;}100%{-webkit-transform:scale(1,1);opacity:0;}}"]);

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
})(["@include font_secondary;color:$light;text-align:center;height:70vh;width:100%;position:relative;.background-particles-js{width:100%;height:70vh;background-image:linear-gradient(180deg,", ",transparent);background-position:50% 50%;position:absolute;}#particles-js{width:100%;height:70vh;}.profile-details{height:70vh;width:100%;padding:10vh 0px;position:absolute;img{border:solid 5px $text_primary;border-radius:50%;width:200px;height:200px;background-color:$light;margin-bottom:15px;}h1{font-size:24px;font-weight:400;letter-spacing:5px;line-height:25px;text-transform:uppercase;margin:25px 0;@include font_primary;}h2{color:$light;font-size:68px;font-weight:700;line-height:90px;text-transform:capitalize;text-decoration:none;display:block;margin:25px 0;@include font_primary;}h3{font-size:24px;font-weight:400;letter-spacing:5px;text-transform:uppercase;margin:25px 0;line-height:5;@include font_primary;}p{text-align:center;max-width:30%;font-size:18px;display:inline-flex;color:$text_secondary;margin:0px 15px;}@media only screen and (max-width:1820px){p{max-width:40%;}}@media only screen and (max-width:1380px){p{max-width:50%;}}@media only screen and (max-width:1200px){p{max-width:80%;}}@media only screen and (max-width:768px){p{max-width:90%;}}@media only screen and (max-width:420px){p{max-width:100%;font-size:4vw;}h1{font-size:20px;}h2{font-size:16vw;}}@media only screen and (max-height:780px){padding:8vh 0;h1,h2{margin:5px 0;}img{margin-bottom:0;}}@media only screen and (max-height:660px){img{width:150px;height:150px;}h2{line-height:1.4;}}@media only screen and (max-height:560px){h2{font-size:50px;line-height:1;}}}"], props => props.theme.sky);

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
  displayName: "ProjectsStyle__ProjectStyle",
  componentId: "h4d0sj-0"
})([".repositories{display:flex;flex-wrap:wrap;max-width:1200px;margin:0 auto;min-height:22vh;i{color:$warning;font-size:14px;}a{font-size:16px;color:$info;display:inherit;line-height:2.6;text-decoration:none;&:hover{text-decoration:underline;}}.repository{background-color:$primary;padding:12px 18px;color:$light;@include font_code;border-radius:20px;line-height:.2;font-size:15px;margin:15px 15px;flex:1 1 340px;display:grid;min-height:180px;}p{line-height:1.2;color:$text_primary;}p.language{color:$light;}p.no-repo{text-align:center;width:100%;color:$text_secondary;@include font_secondary;}}"]);

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
})([".search{display:flex;flex-wrap:wrap;max-width:1200px;margin:0 auto;height:8vh;input{height:40px;margin:2.5vh 15px;width:100%;border:solid $text_primary 1px;border-radius:0px;padding:10px 8px;color:$primary;&:focus{border-color:$text_info;outline:none;box-shadow:inset 0 1px 2px rgba(27,31,35,.075),0 0 0 0.2em rgba(0,182,242,.9);}}}"]);

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
  sky: "#232741",
  current_line: "#44475a",
  text_primary: "#f8f8f2",
  text_secondary: "#bd93f9",
  comment: "#6272a4",
  info: "#8be9fd",
  sucess: "#50fa7b",
  warning: "#ffb86c",
  pink: "#ff79c6",
  danger: "#ff5555",
  yellow: "#f1fa8c"
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
  sky: "#6272a4",
  current_line: "#44475a",
  foreground: "#282a36",
  comment: "#ffffff",
  cyan: "#8be9fd",
  green: "#50fa7b",
  orange: "#ffb86c",
  pink: "#ff79c6",
  purple: "#bd93f9",
  red: "#ff5555",
  yellow: "#f1fa8c"
};
/* harmony default export */ __webpack_exports__["default"] = (light);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9yZWR1Y2VyL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2dpdEh1Yi5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9Gb290ZXIvRm9vdGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0dsb2JhbC9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hlYWRlci9IZWFkZXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvTG9hZGVyL0xvYWRlclN0eWxlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9Qcm9maWxlL1Byb2ZpbGVTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvUHJvamVjdHMvUHJvamVjdHNTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvU2VhcmNoL1NlYXJjaFN0eWxlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9kYXJrLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9saWdodC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtb2ppc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkZvb3RlciIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInByb2ZpbGUiLCJlbWFpbCIsImxpbmtlZGluIiwidXNlRWZmZWN0IiwiZ2V0VXNlciIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJnZXRFbWFpbCIsInByZXZpb3VzU3RhdGUiLCJpc0xvYWRpbmciLCJlcnJvciIsImh0bWxfdXJsIiwibmFtZSIsIkhlYWRlciIsInRvZ2dsZVRoZW1lIiwic2Nyb2xsIiwic2V0U2Nyb2xsIiwiYm90dG9tIiwic2V0Qm90dG9tIiwibmF2YmFySGVpZ2h0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWJvdXQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib25zY3JvbGwiLCJpbm5lckhlaWdodCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJMb2FkZXIiLCJQcm9qZWN0cyIsImRpc3BhdGNoIiwiZW1vamlzIiwicmVxdWlyZSIsImNhdGNoIiwidmFsdWUiLCJhdmF0YXJfdXJsIiwibG9naW4iLCJiaW8iLCJ1bmljb2RlIiwicmVwb3NpdG9yaWVzIiwic2hvd1JlcG9zaXRvcmllcyIsImdldFJlcG9zaXRvcmllcyIsInNldFRpbWVvdXQiLCJzZWFyY2giLCJ0cmltIiwiY29uY2F0UXVlcnkiLCJyZXN1bHQiLCJtYXBSZXBvc2l0b3JpZXMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsIngiLCJpbmNsdWRlcyIsImxhbmd1YWdlIiwiZGVzY3JpcHRpb24iLCJsaXN0T2ZSZXBvcyIsImNvbmNhdCIsInJlcG9zTWFwIiwiTWFwIiwicmVwb3MiLCJzZXQiLCJpZCIsInJlc3VsdE9mTWFwIiwidmFsdWVzIiwibGVuZ3RoIiwibWFwIiwicmVwbyIsImZ1bGxfbmFtZSIsIlNlYXJjaCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJpbml0aWFsQ29udGV4dCIsInRoZW1lIiwibGlnaHQiLCJjcmVhdGVDb250ZXh0IiwicmVkdWNlciIsImFjdGlvbiIsIm5ld1N0YXRlIiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VSZWR1Y2VyIiwiQ29udGV4dENvbnN1bWVyIiwiQ29uc3VtZXIiLCJlbnZpcm9ubWVudCIsInVybCIsInVzZXIiLCJwdWJsaWMiLCJBcHAiLCJzZXRUaGVtZSIsImRhcmsiLCJwYXJ0aWNsZXNKUyIsImxvYWQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJGb290ZXJTdHlsZSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiYmFja2dyb3VuZCIsImZvcmVncm91bmQiLCJjb21tZW50IiwiY3VycmVudF9saW5lIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJIZWFkZXJTdHlsZSIsIkxvYWRlclN0eWxlIiwiUHJvZmlsZVN0eWxlIiwic2t5IiwiUHJvamVjdFN0eWxlIiwiU2VhcmNoU3R5bGUiLCJ0ZXh0X3ByaW1hcnkiLCJ0ZXh0X3NlY29uZGFyeSIsImluZm8iLCJzdWNlc3MiLCJ3YXJuaW5nIiwicGluayIsImRhbmdlciIsInllbGxvdyIsImN5YW4iLCJncmVlbiIsIm9yYW5nZSIsInB1cnBsZSIsInJlZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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LFNBWlE7QUFhYkwsUUFBTSxFQUFFO0FBYkssQ0FBZDtBQWdCZTdDLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlZHVjZXIvcmVkdWNlclwiO1xyXG5pbXBvcnQgeyBnZXRFbWFpbCwgZ2V0VXNlciB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9naXRIdWIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBaUZpbGxHaXRodWIsIEFpT3V0bGluZU1haWwsIEFpRmlsbExpbmtlZGluIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IEZvb3RlclN0eWxlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9Gb290ZXIvRm9vdGVyU3R5bGVcIjtcclxuXHJcbmZ1bmN0aW9uIEZvb3RlcigpIHtcclxuXHRjb25zdCB7IGNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcblx0XHRwcm9maWxlOiB7fSxcclxuXHRcdGVtYWlsOiBcIlwiLFxyXG5cdFx0bGlua2VkaW46IFwiXCJcclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGdldFVzZXIoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0c2V0U3RhdGUoeyBwcm9maWxlOiByZXNwb25zZS5kYXRhIH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Z2V0RW1haWwoKS50aGVuKCgpID0+IHtcclxuXHRcdFx0c2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xyXG5cdFx0XHRcdC4uLnByZXZpb3VzU3RhdGUsXHJcblx0XHRcdFx0ZW1haWw6IFwiZWR1YXJkb2R1c2lrQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcdGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9lZHVhcmRvLWRvcy1zYW50b3MtZHVzaWstMDk1MTAwMTIwL1wiXHJcblx0XHRcdH0pKTtcclxuXHRcdH0pO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGb290ZXJTdHlsZT5cclxuXHRcdFx0eyFjb250ZXh0LmlzTG9hZGluZyAmJiAhY29udGV4dC5lcnJvciA/IChcclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwiY29udGFjdFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgbWFpbHRvOiR7c3RhdGUuZW1haWx9YH0gdGFyZ2V0PVwiX3RvcFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFpT3V0bGluZU1haWwgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj17c3RhdGUucHJvZmlsZS5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFpRmlsbEdpdGh1YiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtzdGF0ZS5saW5rZWRpbn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFpRmlsbExpbmtlZGluIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHREZXZlbG9wZWQgYnkgPHN0cm9uZz57c3RhdGUucHJvZmlsZS5uYW1lfTwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8PjwvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9Gb290ZXJTdHlsZT5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiO1xyXG5pbXBvcnQgeyBIZWFkZXJTdHlsZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvSGVhZGVyL0hlYWRlclN0eWxlXCI7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvcmVkdWNlci9yZWR1Y2VyXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyB0b2dnbGVUaGVtZSB9KSA9PiB7XHJcblx0Ly8gY29uc3QgeyBuYW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblx0Y29uc3QgeyBjb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cdGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2JvdHRvbSwgc2V0Qm90dG9tXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBuYXZiYXJIZWlnaHQgPSA1NjtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhYm91dCA9IHdpbmRvdy5zY3JvbGxZID4gbmF2YmFySGVpZ2h0O1xyXG5cdFx0XHRpZiAoYWJvdXQgIT09IHNjcm9sbCkge1xyXG5cdFx0XHRcdHNldFNjcm9sbChhYm91dCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZID49IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XHJcblx0XHRcdFx0c2V0Qm90dG9tKHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEJvdHRvbShmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8SGVhZGVyU3R5bGU+XHJcblx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPXtcImhlYWRlciBcIiArIChzY3JvbGwgPyBcImNvbG9yXCIgOiBcInRyYW5zcGFyZW50XCIpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuXHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUNsYXNzPXshYm90dG9tID8gXCJhY3RpdmUgXCIgOiBcInJlbW92ZVwifVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0bz1cImFib3V0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldD17LTE1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXNEeW5hbWljPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17MTAwMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsYXk9ezUwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJhYm91dFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFib3V0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVDbGFzcz17IWJvdHRvbSA/IFwiYWN0aXZlIFwiIDogXCJyZW1vdmVcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dG89XCJwcm9qZWN0c1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXQ9ey0xNTB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlzRHluYW1pYz17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb249ezEwMDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGF5PXs1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwicHJvamVjdHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9qZWN0c1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtib3R0b20gPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dG89XCJjb250YWN0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldD17MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb249ezEwMDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlzRHluYW1pYz17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsYXk9ezUwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cImNvbnRhY3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWN0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuXHRcdFx0XHRcdFx0PFN3aXRjaFxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0b2dnbGVUaGVtZX1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtjb250ZXh0ID09PSBcImRhcmtcIn1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkSWNvbj17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0dW5jaGVja2VkSWNvbj17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxNH1cclxuXHRcdFx0XHRcdFx0XHR3aWR0aD17MzJ9XHJcblx0XHRcdFx0XHRcdFx0b2ZmQ29sb3I9XCIjOTk5OTk5XCJcclxuXHRcdFx0XHRcdFx0XHRoYW5kbGVEaWFtZXRlcj17MjB9XHJcblx0XHRcdFx0XHRcdFx0b25Db2xvcj1cIiM3OUI2RjJcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0PC9IZWFkZXJTdHlsZT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExvYWRlclN0eWxlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9Mb2FkZXIvTG9hZGVyU3R5bGVcIjtcclxuXHJcbmNvbnN0IExvYWRlciA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PExvYWRlclN0eWxlPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxyXG5cdFx0XHRcdDxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3Bhbj48L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9Mb2FkZXJTdHlsZT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xyXG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvcmVkdWNlci9yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2l0SHViLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVN0eWxlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9Qcm9maWxlL1Byb2ZpbGVTdHlsZVwiO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcblx0Y29uc3QgeyBjb250ZXh0LCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHRjb25zdCBlbW9qaXMgPSByZXF1aXJlKFwiZW1vamlzXCIpO1xyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG5cdFx0cHJvZmlsZToge31cclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGdldFVzZXIoKVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0c2V0U3RhdGUoeyBwcm9maWxlOiByZXNwb25zZS5kYXRhIH0pO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKCkgPT4ge1xyXG5cdFx0XHRcdGRpc3BhdGNoKHsgbmFtZTogXCJlcnJvclwiLCB2YWx1ZTogdHJ1ZSB9KTtcclxuXHRcdFx0fSk7XHJcblx0fSwgW2Rpc3BhdGNoXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RWxlbWVudCBuYW1lPVwiYWJvdXRcIj5cclxuXHRcdFx0PFByb2ZpbGVTdHlsZT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtcGFydGljbGVzLWpzXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGlkPVwicGFydGljbGVzLWpzXCI+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWRldGFpbHNcIj5cclxuXHRcdFx0XHRcdHshY29udGV4dC5pc0xvYWRpbmcgJiYgIWNvbnRleHQuZXJyb3IgPyAoXHJcblx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0PGltZyB0eXBlPVwiaW1hZ2VcIiBzcmM9e3N0YXRlLnByb2ZpbGUuYXZhdGFyX3VybH0gYWx0PXtzdGF0ZS5wcm9maWxlLmxvZ2lufSAvPlxyXG5cdFx0XHRcdFx0XHRcdDxoMT57c3RhdGUucHJvZmlsZS5uYW1lfTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PGgyPkRldmVsb3BlcjwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PHA+e3N0YXRlLnByb2ZpbGUuYmlvfTwvcD5cclxuXHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8PjwvPlxyXG5cdFx0XHRcdFx0KX17XCIgXCJ9XHJcblx0XHRcdFx0XHR7IWNvbnRleHQuaXNMb2FkaW5nICYmIGNvbnRleHQuZXJyb3IgPyAoXHJcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+IHtlbW9qaXMudW5pY29kZShcImVycm9yIGxvYWRpbmcsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIgOnNvYjpcIil9IDwvaDM+XHJcblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8PjwvPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9Qcm9maWxlU3R5bGU+XHJcblx0XHQ8L0VsZW1lbnQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9Mb2FkZXIvTG9hZGVyXCI7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9yZWR1Y2VyL3JlZHVjZXJcIjtcclxuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yaWVzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dpdEh1Yi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9qZWN0U3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL1Byb2plY3RzL1Byb2plY3RTdHlsZVwiO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcblx0Y29uc3QgeyBjb250ZXh0LCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHRjb25zdCBlbW9qaXMgPSByZXF1aXJlKFwiZW1vamlzXCIpO1xyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG5cdFx0cmVwb3NpdG9yaWVzOiBbXSxcclxuXHRcdHNob3dSZXBvc2l0b3JpZXM6IFtdXHJcblx0fSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXRSZXBvc2l0b3JpZXMoKVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0c2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xyXG5cdFx0XHRcdFx0Li4ucHJldmlvdXNTdGF0ZSxcclxuXHRcdFx0XHRcdHJlcG9zaXRvcmllczogcmVzcG9uc2UuZGF0YSxcclxuXHRcdFx0XHRcdHNob3dSZXBvc2l0b3JpZXM6IHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0XHR9KSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IG5hbWU6IFwiaXNMb2FkaW5nXCIsIHZhbHVlOiBmYWxzZSB9KTtcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRkaXNwYXRjaCh7IG5hbWU6IFwiaXNMb2FkaW5nXCIsIHZhbHVlOiBmYWxzZSB9KTtcclxuXHRcdFx0XHRkaXNwYXRjaCh7IG5hbWU6IFwiZXJyb3JcIiwgdmFsdWU6IHRydWUgfSk7XHJcblx0XHRcdH0pO1xyXG5cdH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBjb250ZXh0LnNlYXJjaDtcclxuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZS50cmltKCkgIT09IFwiXCIpIHtcclxuXHRcdFx0Y29uc3QgcmVwb3NpdG9yaWVzID0gY29uY2F0UXVlcnkodmFsdWUpO1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBtYXBSZXBvc2l0b3JpZXMocmVwb3NpdG9yaWVzKTtcclxuXHJcblx0XHRcdGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcclxuXHRcdFx0XHRcdC4uLnByZXZpb3VzU3RhdGUsXHJcblx0XHRcdFx0XHRzaG93UmVwb3NpdG9yaWVzOiByZXN1bHRcclxuXHRcdFx0XHR9KSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcclxuXHRcdFx0XHQuLi5wcmV2aW91c1N0YXRlLFxyXG5cdFx0XHRcdHNob3dSZXBvc2l0b3JpZXM6IHN0YXRlLnJlcG9zaXRvcmllc1xyXG5cdFx0XHR9KSk7XHJcblx0XHR9XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcblx0fSwgW2NvbnRleHQuc2VhcmNoXSk7XHJcblxyXG5cdGNvbnN0IGNvbmNhdFF1ZXJ5ID0gdmFsdWUgPT4ge1xyXG5cdFx0dmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0Y29uc3QgbmFtZSA9IHN0YXRlLnJlcG9zaXRvcmllcy5maWx0ZXIoeCA9PiAoeC5uYW1lID8geC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpIDogbnVsbCkpO1xyXG5cdFx0Y29uc3QgbGFuZ3VhZ2UgPSBzdGF0ZS5yZXBvc2l0b3JpZXMuZmlsdGVyKHggPT4gKHgubGFuZ3VhZ2UgPyB4Lmxhbmd1YWdlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpIDogbnVsbCkpO1xyXG5cdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBzdGF0ZS5yZXBvc2l0b3JpZXMuZmlsdGVyKHggPT5cclxuXHRcdFx0eC5kZXNjcmlwdGlvbiA/IHguZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSkgOiBudWxsXHJcblx0XHQpO1xyXG5cclxuXHRcdGxldCBsaXN0T2ZSZXBvcyA9IG5hbWUuY29uY2F0KGxhbmd1YWdlKTtcclxuXHRcdGxpc3RPZlJlcG9zID0gbGlzdE9mUmVwb3MuY29uY2F0KGRlc2NyaXB0aW9uKTtcclxuXHJcblx0XHRyZXR1cm4gbGlzdE9mUmVwb3M7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbWFwUmVwb3NpdG9yaWVzID0gcmVwb3NpdG9yaWVzID0+IHtcclxuXHRcdGNvbnN0IHJlcG9zTWFwID0gbmV3IE1hcCgpO1xyXG5cdFx0Zm9yIChjb25zdCByZXBvcyBvZiByZXBvc2l0b3JpZXMpIHtcclxuXHRcdFx0cmVwb3NNYXAuc2V0KHJlcG9zLmlkLCByZXBvcyk7XHJcblx0XHR9XHJcblx0XHRjb25zdCByZXN1bHRPZk1hcCA9IFsuLi5yZXBvc01hcC52YWx1ZXMoKV07XHJcblx0XHRyZXR1cm4gcmVzdWx0T2ZNYXA7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxQcm9qZWN0U3R5bGU+XHJcblx0XHRcdHshY29udGV4dC5pc0xvYWRpbmcgPyAoXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cInByb2plY3RzXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlcG9zaXRvcmllc1wiPlxyXG5cdFx0XHRcdFx0XHR7c3RhdGUucmVwb3NpdG9yaWVzICYmIHN0YXRlLnNob3dSZXBvc2l0b3JpZXMubGVuZ3RoID4gMCA/IChcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZS5zaG93UmVwb3NpdG9yaWVzLm1hcChyZXBvID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVwb3NpdG9yeVwiIGtleT17cmVwby5pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17cmVwby5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3JlcG8ubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGk+e3JlcG8uZnVsbF9uYW1lfTwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57ZW1vamlzLnVuaWNvZGUocmVwby5kZXNjcmlwdGlvbil9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxhbmd1YWdlXCI+e3JlcG8ubGFuZ3VhZ2V9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0KSA6ICFjb250ZXh0LmVycm9yID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5vLXJlcG9cIj57ZW1vamlzLnVuaWNvZGUoXCJObyByZXBvc2l0b3J5IGZvdW5kIDpzb2I6XCIpfTwvcD5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8PjwvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxMb2FkZXIgLz5cclxuXHRcdFx0KX1cclxuXHRcdDwvUHJvamVjdFN0eWxlPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlZHVjZXIvcmVkdWNlclwiO1xyXG5pbXBvcnQgeyBTZWFyY2hTdHlsZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvU2VhcmNoL1NlYXJjaFN0eWxlXCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2goKSB7XHJcblx0Y29uc3QgeyBjb250ZXh0LCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHRjb25zdCBvbkNoYW5nZSA9IHZhbHVlID0+IHtcclxuXHRcdGRpc3BhdGNoKHsgbmFtZTogXCJzZWFyY2hcIiwgdmFsdWU6IHZhbHVlIH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8U2VhcmNoU3R5bGU+XHJcblx0XHRcdHshY29udGV4dC5pc0xvYWRpbmcgJiYgIWNvbnRleHQuZXJyb3IgPyAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJzZWFyY2hcIlxyXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwic2VhcmNoXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJzZWFyY2hcIlxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8PjwvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9TZWFyY2hTdHlsZT5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBsaWdodCBmcm9tIFwiLi4vLi4vdGhlbWVzL2xpZ2h0XCI7XHJcblxyXG5jb25zdCBpbml0aWFsQ29udGV4dCA9IHtcclxuXHRzZWFyY2g6IFwiXCIsXHJcblx0aXNMb2FkaW5nOiB0cnVlLFxyXG5cdGVycm9yOiBmYWxzZSxcclxuXHR0aGVtZTogbGlnaHRcclxufTtcclxuXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsQ29udGV4dCwgYWN0aW9uKSA9PiB7XHJcblx0Y29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcblx0bmV3U3RhdGVbYWN0aW9uLm5hbWVdID0gYWN0aW9uLnZhbHVlO1xyXG5cdHJldHVybiBuZXdTdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHRjb25zdCBbY29udGV4dCA9IGluaXRpYWxDb250ZXh0LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIpO1xyXG5cdGNvbnN0IHZhbHVlID0geyBjb250ZXh0LCBkaXNwYXRjaCB9O1xyXG5cdHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xyXG59O1xyXG5cclxuY29uc3QgQ29udGV4dENvbnN1bWVyID0gQ29udGV4dC5Db25zdW1lcjtcclxuZXhwb3J0IHsgQ29udGV4dCwgQ29udGV4dFByb3ZpZGVyLCBDb250ZXh0Q29uc3VtZXIgfTtcclxuIiwiZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG5cdHVybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL1wiLFxyXG5cdHVzZXI6IFwiRUR1c2lrXCIsXHJcblx0cHVibGljOiBcImV2ZW50cy9wdWJsaWNcIlxyXG59O1xyXG4iLCJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9yZWR1Y2VyL3JlZHVjZXJcIjtcclxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvR2xvYmFsL0dsb2JhbFwiO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVcIjtcclxuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaFwiO1xyXG4vLyBpbXBvcnQgdXNlUGVyc2lzdGVkU3RhdGUgZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XHJcblxyXG5pbXBvcnQgbGlnaHQgZnJvbSBcIi4uL3RoZW1lcy9saWdodFwiO1xyXG5pbXBvcnQgZGFyayBmcm9tIFwiLi4vdGhlbWVzL2RhcmtcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuXHRjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwidGhlbWVcIiwgbGlnaHQpO1xyXG5cdGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG5cdFx0c2V0VGhlbWUodGhlbWUubmFtZSA9PT0gXCJsaWdodFwiID8gZGFyayA6IGxpZ2h0KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgcGFydGljbGVzSlMgPSB3aW5kb3cucGFydGljbGVzSlM7XHJcblx0XHRwYXJ0aWNsZXNKUy5sb2FkKFwicGFydGljbGVzLWpzXCIsIFwicGFydGljbGVzLmpzb25cIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3MhXCIpO1xyXG5cdFx0fSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFRoZW1lUHJvdmlkZXIgdGhlbWU9e2xpZ2h0fT5cclxuXHRcdFx0PENvbnRleHRQcm92aWRlcj5cclxuXHRcdFx0XHQ8R2xvYmFsU3R5bGUgLz5cclxuXHRcdFx0XHQ8SGVhZGVyIHRvZ2dsZVRoZW1lPXt0b2dnbGVUaGVtZX0gLz5cclxuXHRcdFx0XHQ8UHJvZmlsZSAvPlxyXG5cdFx0XHRcdDxTZWFyY2ggLz5cclxuXHRcdFx0XHQ8UHJvamVjdHMgLz5cclxuXHRcdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHRcdDwvQ29udGV4dFByb3ZpZGVyPlxyXG5cdFx0PC9UaGVtZVByb3ZpZGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIi4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZXBvc2l0b3JpZXMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGF4aW9zLmdldChgJHtlbnZpcm9ubWVudC51cmx9JHtlbnZpcm9ubWVudC51c2VyfS9yZXBvc2ApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGF4aW9zLmdldChgJHtlbnZpcm9ubWVudC51cmx9JHtlbnZpcm9ubWVudC51c2VyfWApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEVtYWlsID0gKCkgPT4ge1xyXG5cdHJldHVybiBheGlvcy5nZXQoYCR7ZW52aXJvbm1lbnQudXJsfSR7ZW52aXJvbm1lbnQudXNlcn0vJHtlbnZpcm9ubWVudC5wdWJsaWN9YCk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG5cclxuLmZvb3RlciB7XHJcbiAgLnNvY2lhbCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJhY2tncm91bmR9O1xyXG4gICAgcGFkZGluZy10b3A6IDc5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAgIGEgeyAgXHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcmVncm91bmR9O1xyXG4gICAgICBzdmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICBtYXJnaW46IDBweCA1cHg7ICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIDpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbW1lbnR9O1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvcHlyaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmN1cnJlbnRfbGluZX07XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb21tZW50fTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICR0ZXh0X3ByaW1hcnk7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIEBpbmNsdWRlIGZvbnRfcHJpbWFyeTsgXHJcblxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9yZWdyb3VuZH07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59YDtcclxuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYCAgXHJcbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiAgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmFja2dyb3VuZH07XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb3JlZ3JvdW5kfTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIH1cclxuXHJcbiAgYm9keSwgaW5wdXQsIGJ1dHRvbiB7XHJcbiAgICBmb250OiAxNHB4IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG5cclxuICAjcm9vdCB7XHJcbiAgICBtYXgtd2lkdGg6IDEzMzNweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDIwcHggMHB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIDo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICRkYXJrZXN0O1xyXG4gICAgY29sb3I6ICRsaWdodDsgICAgXHJcbiAgfVxyXG5cclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfSAgXHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkNGQ0ZDO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQjJCMkIyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlclN0eWxlID0gc3R5bGVkLmRpdmBcclxuXHJcbi5oZWFkZXIge1xyXG4gIC50cmFuc3BhcmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIGJvcmRlcjogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBpbmNsdWRlIGZvbnRfcHJpbWFyeTtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxyXG4gICAgd2lkdGg6IDEyMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuXHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgY29sb3I6ICR0ZXh0X3NlY29uZGFyeTtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICAgIHVsIHsgICAgICBcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7ICAgICAgICAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMi44ZW07XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzJweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuNWVtIDEuOGVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTEwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogLjVlbSAxZW1cclxuICAgICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuMmVtIC43ZW1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC4xZW0gLjVlbVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNjVlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42NWVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJGxpZ2h0O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogJGxpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN3aXRjaCB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbG9yIHtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4ICRzZWNvbmRhcnk7XHJcblxyXG4gIC5uYXZiYXIge1xyXG4gICAgdWwge1xyXG4gICAgICBtYXJnaW46IDBlbSAwIC41ZW07XHJcbiAgICB9XHJcbiAgfSBcclxufVxyXG5gO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRlclN0eWxlID0gc3R5bGVkLmRpdmBcclxuICAubG9hZGVyIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkaW5mbzsgICAgXHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTUwcHgpO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxNTBweCk7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmcgMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAubG9hZGVyIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gIH0gICBcclxuXHJcbiAgQGtleWZyYW1lcyBsb2FkaW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcclxuICAgICAgb3BhY2l0eTowLjg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmcge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XHJcbiAgICAgIG9wYWNpdHk6MC44O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG5cclxuICBAaW5jbHVkZSBmb250X3NlY29uZGFyeTtcclxuICBjb2xvcjogJGxpZ2h0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuYmFja2dyb3VuZC1wYXJ0aWNsZXMtanMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNreX0sIHRyYW5zcGFyZW50KTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlOyAgICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgfVxyXG5cclxuICAjcGFydGljbGVzLWpzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtZGV0YWlscyB7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB3aWR0aDogMTAwJTsgICBcclxuICAgIHBhZGRpbmc6IDEwdmggMHB4OyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlcjogc29saWQgNXB4ICR0ZXh0X3ByaW1hcnk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnRfcHJpbWFyeTtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiAkbGlnaHQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjhweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyAgICAgICAgXHJcbiAgICAgIG1hcmdpbjogMjVweCAwOyBcclxuICAgICAgQGluY2x1ZGUgZm9udF9wcmltYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBtYXJnaW46IDI1cHggMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDU7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnRfcHJpbWFyeTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXgtd2lkdGg6IDMwJTtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgY29sb3I6ICR0ZXh0X3NlY29uZGFyeTtcclxuICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MjBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM4MHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE2dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3ODBweCkgeyAgXHJcbiAgICAgIHBhZGRpbmc6IDh2aCAwO1xyXG4gICAgICBoMSwgaDIge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfSAgIFxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY2MHB4KSB7ICBcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgfSAgIFxyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1NjBweCkgeyAgXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdFN0eWxlID0gc3R5bGVkLmRpdmBcclxuXHJcbi5yZXBvc2l0b3JpZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDIydmg7XHJcblxyXG4gIGkge1xyXG4gICAgY29sb3I6ICR3YXJuaW5nO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDsgICAgICBcclxuICAgIGNvbG9yOiAkaW5mbztcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMi42O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmVwb3NpdG9yeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgIHBhZGRpbmc6IDEycHggMThweDtcclxuICAgIGNvbG9yOiAkbGlnaHQ7XHJcbiAgICBAaW5jbHVkZSBmb250X2NvZGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IC4yO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDE1cHg7XHJcbiAgICBmbGV4OiAxIDEgMzQwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGNvbG9yOiAkdGV4dF9wcmltYXJ5O1xyXG4gIH1cclxuXHJcbiAgcC5sYW5ndWFnZSB7XHJcbiAgICBjb2xvcjogJGxpZ2h0OyAgXHJcbiAgfVxyXG4gICAgXHJcbiAgcC5uby1yZXBvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICR0ZXh0X3NlY29uZGFyeTtcclxuICAgIEBpbmNsdWRlIGZvbnRfc2Vjb25kYXJ5O1xyXG4gIH1cclxufWA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG4uc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBtYXJnaW46IDIuNXZoIDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAkdGV4dF9wcmltYXJ5IDFweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA4cHg7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR0ZXh0X2luZm87XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDI3LCAzMSwgMzUsIC4wNzUpLCAwIDAgMCAwLjJlbSByZ2JhKDAsIDE4MiwgMjQyLCAuOSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmA7XHJcbiIsImNvbnN0IGRhcmsgPSB7XHJcblx0bmFtZTogXCJkYXJrXCIsXHJcblx0YmFja2dyb3VuZDogXCIjMjgyYTM2XCIsXHJcblx0c2t5OiBcIiMyMzI3NDFcIixcclxuXHRjdXJyZW50X2xpbmU6IFwiIzQ0NDc1YVwiLFxyXG5cdHRleHRfcHJpbWFyeTogXCIjZjhmOGYyXCIsXHJcblx0dGV4dF9zZWNvbmRhcnk6IFwiI2JkOTNmOVwiLFxyXG5cdGNvbW1lbnQ6IFwiIzYyNzJhNFwiLFxyXG5cdGluZm86IFwiIzhiZTlmZFwiLFxyXG5cdHN1Y2VzczogXCIjNTBmYTdiXCIsXHJcblx0d2FybmluZzogXCIjZmZiODZjXCIsXHJcblx0cGluazogXCIjZmY3OWM2XCIsXHJcblx0ZGFuZ2VyOiBcIiNmZjU1NTVcIixcclxuXHR5ZWxsb3c6IFwiI2YxZmE4Y1wiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXJrO1xyXG4iLCJjb25zdCBsaWdodCA9IHtcclxuXHRuYW1lOiBcImxpZ2h0XCIsXHJcblx0YmFja2dyb3VuZDogXCIjZjhmOGYyXCIsXHJcblx0c2t5OiBcIiM2MjcyYTRcIixcclxuXHRjdXJyZW50X2xpbmU6IFwiIzQ0NDc1YVwiLFxyXG5cdGZvcmVncm91bmQ6IFwiIzI4MmEzNlwiLFxyXG5cdGNvbW1lbnQ6IFwiI2ZmZmZmZlwiLFxyXG5cdGN5YW46IFwiIzhiZTlmZFwiLFxyXG5cdGdyZWVuOiBcIiM1MGZhN2JcIixcclxuXHRvcmFuZ2U6IFwiI2ZmYjg2Y1wiLFxyXG5cdHBpbms6IFwiI2ZmNzljNlwiLFxyXG5cdHB1cnBsZTogXCIjYmQ5M2Y5XCIsXHJcblx0cmVkOiBcIiNmZjU1NTVcIixcclxuXHR5ZWxsb3c6IFwiI2YxZmE4Y1wiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaWdodDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1vamlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2FpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zd2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=