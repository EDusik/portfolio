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
            offColor: "#ccc",
            handleDiameter: 20,
            onColor: "#6272a4"
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
})([".footer{.social{height:200px;width:100%;background-color:", ";padding-top:79px;text-align:center;margin-top:15px;a{color:", ";svg{font-size:42px;margin:0px 5px;}:hover{cursor:pointer;color:", ";transition:.2s;}}}.copyright{background-color:", ";color:", ";width:100%;text-align:center;color:", ";height:42px;line-height:3;font-size:14px;strong{color:", ";font-weight:500;}}}"], props => props.theme.background, props => props.theme.text_primary, props => props.theme.current_line, props => props.theme.navbar, props => props.theme.comment, props => props.theme.text_primary, props => props.theme.danger);

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
})([".header{.transparent{background-color:transparent;}border:0;box-shadow:none;position:absolute;z-index:1;width:100%;@include font_primary;@include transition;.container{display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;width:1200px;max-width:100%;padding:0px 15px;height:56px;margin:0 auto;transition:1s;.navbar{color:", ";width:90%;padding-left:10%;ul{padding-left:0;text-align:center;li{display:inline;padding:.5em 2.8em;@media only screen and (max-width:632px){padding:.5em 1.8em;}@media only screen and (max-width:510px){padding:.5em 1em}@media only screen and (max-width:420px){padding:.2em .7em}@media only screen and (max-width:340px){padding:.1em .5em}a{font-size:0.75em;font-weight:bold;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;@media only screen and (max-width:380px){font-size:0.65em;}@media only screen and (max-width:380px){font-size:0.65em;}&:hover{color:", ";cursor:pointer;}}.active{color:", ";}}}}}.switch{width:10%;}}.color{@include transition;display:flex;justify-content:space-around;flex-wrap:wrap;position:fixed;height:52px;background-color:", ";.navbar{ul{margin:0em 0 .5em;}}}"], props => props.theme.text_primary, props => props.theme.sky, props => props.theme.danger, props => props.theme.navbar);

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
})([".loader span{position:fixed;display:inline-block;width:300px;height:300px;border-radius:100%;background:", ";top:calc(50% - 150px);left:calc(50% - 150px);animation:loading 1.5s linear infinite;}.loader span:last-child{animation-delay:-0.9s;-webkit-animation-delay:-0.9s;}@keyframes loading{0%{transform:scale(0,0);opacity:0.8;}100%{transform:scale(1,1);opacity:0;}}@-webkit-keyframes loading{0%{-webkit-transform:scale(0,0);opacity:0.8;}100%{-webkit-transform:scale(1,1);opacity:0;}}"], props => props.theme.sky);

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
})(["@include font_secondary;color:", ";text-align:center;height:70vh;width:100%;position:relative;.background-particles-js{width:100%;height:70vh;background-image:linear-gradient(180deg,", ",transparent);background-position:50% 50%;position:absolute;}#particles-js{width:100%;height:70vh;}.profile-details{height:70vh;width:100%;padding:10vh 0px;position:absolute;img{border:solid 5px ", ";border-radius:50%;width:200px;height:200px;background-color:", ";margin-bottom:15px;}h1{font-size:24px;font-weight:400;letter-spacing:5px;line-height:25px;text-transform:uppercase;margin:25px 0;color:", ";@include font_primary;}h2{color:$light;font-size:68px;font-weight:700;line-height:90px;text-transform:capitalize;text-decoration:none;display:block;margin:25px 0;@include font_primary;}h3{font-size:24px;font-weight:400;letter-spacing:5px;text-transform:uppercase;margin:25px 0;line-height:5;@include font_primary;}p{text-align:center;max-width:30%;font-size:18px;display:inline-flex;color:$text_secondary;color:", ";margin:0px 15px;}@media only screen and (max-width:1820px){p{max-width:40%;}}@media only screen and (max-width:1380px){p{max-width:50%;}}@media only screen and (max-width:1200px){p{max-width:80%;}}@media only screen and (max-width:768px){p{max-width:90%;}}@media only screen and (max-width:420px){p{max-width:100%;font-size:4vw;}h1{font-size:20px;}h2{font-size:16vw;}}@media only screen and (max-height:780px){padding:8vh 0;h1,h2{margin:5px 0;}img{margin-bottom:0;}}@media only screen and (max-height:660px){img{width:150px;height:150px;}h2{line-height:1.4;}}@media only screen and (max-height:560px){h2{font-size:50px;line-height:1;}}}"], props => props.theme.sky, props => props.theme.sky, props => props.theme.sky, props => props.theme.white, props => props.theme.text_primary, props => props.theme.sky);

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
})([".repositories{display:flex;flex-wrap:wrap;max-width:1200px;margin:0 auto;min-height:22vh;i{color:", ";font-size:14px;}a{font-size:16px;color:", ";;display:inherit;line-height:2.6;text-decoration:none;&:hover{text-decoration:underline;}}.repository{background-color:", ";padding:12px 18px;color:", ";border-radius:20px;line-height:.2;font-size:15px;margin:15px 15px;flex:1 1 340px;display:grid;min-height:180px;}p{line-height:1.2;color:", ";}p.language{color:", ";}p.no-repo{text-align:center;width:100%;color:", ";}}"], props => props.theme.sky, props => props.theme.text_secondary, props => props.theme.comment, props => props.theme.current_line, props => props.theme.text_primary, props => props.theme.danger, props => props.theme.danger);

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
})([".search{display:flex;flex-wrap:wrap;max-width:1200px;margin:0 auto;height:8vh;input{height:40px;margin:2.5vh 15px;width:100%;border:solid ", " 2px;border-radius:0px;padding:10px 8px;color:$primary;&:focus{border-color:", ";outline:none;box-shadow:inset 0 1px 2px rgba(27,31,35,.075),0 0 0 0.15em rgba(189,147,249,.9);}}}"], props => props.theme.text_secondary, props => props.theme.text_secondary);

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
  comment: "#ffffff",
  info: "#8be9fd",
  success: "#50fa7b",
  warning: "#ffb86c",
  pink: "#ff79c6",
  danger: "#ff5555",
  yellow: "#f1fa8c",
  white: "#fff",
  navbar: "#44475a"
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
  text_primary: "#282a36",
  text_secondary: "#bd93f9",
  comment: "#ffffff",
  info: "#8be9fd",
  success: "#50fa7b",
  orange: "#ffb86c",
  pink: "#ff79c6",
  danger: "#ff5555",
  yellow: "#f1fa8c",
  white: "#fff",
  navbar: "#fff"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9yZWR1Y2VyL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2dpdEh1Yi5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9Gb290ZXIvRm9vdGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0dsb2JhbC9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hlYWRlci9IZWFkZXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvTG9hZGVyL0xvYWRlclN0eWxlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9Qcm9maWxlL1Byb2ZpbGVTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvUHJvamVjdHMvUHJvamVjdFN0eWxlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9TZWFyY2gvU2VhcmNoU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2RhcmsuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xpZ2h0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1vamlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJDb250ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwicHJvZmlsZSIsImVtYWlsIiwibGlua2VkaW4iLCJ1c2VFZmZlY3QiLCJnZXRVc2VyIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImdldEVtYWlsIiwicHJldmlvdXNTdGF0ZSIsImlzTG9hZGluZyIsImVycm9yIiwiaHRtbF91cmwiLCJuYW1lIiwiSGVhZGVyIiwidG9nZ2xlVGhlbWUiLCJzY3JvbGwiLCJzZXRTY3JvbGwiLCJib3R0b20iLCJzZXRCb3R0b20iLCJuYXZiYXJIZWlnaHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhYm91dCIsIndpbmRvdyIsInNjcm9sbFkiLCJvbnNjcm9sbCIsImlubmVySGVpZ2h0IiwiYm9keSIsInNjcm9sbEhlaWdodCIsIkxvYWRlciIsIlByb2plY3RzIiwiZGlzcGF0Y2giLCJlbW9qaXMiLCJyZXF1aXJlIiwiY2F0Y2giLCJ2YWx1ZSIsImF2YXRhcl91cmwiLCJsb2dpbiIsImJpbyIsInVuaWNvZGUiLCJyZXBvc2l0b3JpZXMiLCJzaG93UmVwb3NpdG9yaWVzIiwiZ2V0UmVwb3NpdG9yaWVzIiwic2V0VGltZW91dCIsInNlYXJjaCIsInRyaW0iLCJjb25jYXRRdWVyeSIsInJlc3VsdCIsIm1hcFJlcG9zaXRvcmllcyIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiZmlsdGVyIiwieCIsImluY2x1ZGVzIiwibGFuZ3VhZ2UiLCJkZXNjcmlwdGlvbiIsImxpc3RPZlJlcG9zIiwiY29uY2F0IiwicmVwb3NNYXAiLCJNYXAiLCJyZXBvcyIsInNldCIsImlkIiwicmVzdWx0T2ZNYXAiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJtYXAiLCJyZXBvIiwiZnVsbF9uYW1lIiwiU2VhcmNoIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImluaXRpYWxDb250ZXh0IiwidGhlbWUiLCJsaWdodCIsImNyZWF0ZUNvbnRleHQiLCJyZWR1Y2VyIiwiYWN0aW9uIiwibmV3U3RhdGUiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJDb250ZXh0Q29uc3VtZXIiLCJDb25zdW1lciIsImVudmlyb25tZW50IiwidXJsIiwidXNlciIsInB1YmxpYyIsIkFwcCIsInNldFRoZW1lIiwiZGFyayIsInBhcnRpY2xlc0pTIiwibG9hZCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsIkZvb3RlclN0eWxlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJiYWNrZ3JvdW5kIiwidGV4dF9wcmltYXJ5IiwiY3VycmVudF9saW5lIiwibmF2YmFyIiwiY29tbWVudCIsImRhbmdlciIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiZm9yZWdyb3VuZCIsIkhlYWRlclN0eWxlIiwic2t5IiwiTG9hZGVyU3R5bGUiLCJQcm9maWxlU3R5bGUiLCJ3aGl0ZSIsIlByb2plY3RTdHlsZSIsInRleHRfc2Vjb25kYXJ5IiwiU2VhcmNoU3R5bGUiLCJpbmZvIiwic3VjY2VzcyIsIndhcm5pbmciLCJwaW5rIiwieWVsbG93Iiwib3JhbmdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUNqQixRQUFNO0FBQUVDO0FBQUYsTUFBY0Msd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUM7QUFDbENDLFdBQU8sRUFBRSxFQUR5QjtBQUVsQ0MsU0FBSyxFQUFFLEVBRjJCO0FBR2xDQyxZQUFRLEVBQUU7QUFId0IsR0FBRCxDQUFsQztBQU1BQyx5REFBUyxDQUFDLE1BQU07QUFDZkMsNEVBQU8sR0FBR0MsSUFBVixDQUFlQyxRQUFRLElBQUk7QUFDMUJSLGNBQVEsQ0FBQztBQUFFRSxlQUFPLEVBQUVNLFFBQVEsQ0FBQ0M7QUFBcEIsT0FBRCxDQUFSO0FBQ0EsS0FGRDtBQUlBQyw2RUFBUSxHQUFHSCxJQUFYLENBQWdCLE1BQU07QUFDckJQLGNBQVEsQ0FBQ1csYUFBYSxvQ0FDbEJBLGFBRGtCO0FBRXJCUixhQUFLLEVBQUUsd0JBRmM7QUFHckJDLGdCQUFRLEVBQUU7QUFIVyxRQUFkLENBQVI7QUFLQSxLQU5EO0FBT0EsR0FaUSxFQVlOLEVBWk0sQ0FBVDtBQWNBLHNCQUNDLHFFQUFDLHNFQUFEO0FBQUEsY0FDRSxDQUFDUixPQUFPLENBQUNnQixTQUFULElBQXNCLENBQUNoQixPQUFPLENBQUNpQixLQUEvQixnQkFDQSxxRUFBQyxvREFBRDtBQUFTLFVBQUksRUFBQyxTQUFkO0FBQUEsNkJBQ0M7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLGtDQUNDO0FBQUcsZ0JBQUksRUFBRyxVQUFTZCxLQUFLLENBQUNJLEtBQU0sRUFBL0I7QUFBa0Msa0JBQU0sRUFBQyxNQUF6QztBQUFBLG1DQUNDLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBSUM7QUFBRyxnQkFBSSxFQUFFSixLQUFLLENBQUNHLE9BQU4sQ0FBY1ksUUFBdkI7QUFBaUMsa0JBQU0sRUFBQyxRQUF4QztBQUFpRCxlQUFHLEVBQUMscUJBQXJEO0FBQUEsbUNBQ0MscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkQsZUFPQztBQUFHLGdCQUFJLEVBQUVmLEtBQUssQ0FBQ0ssUUFBZjtBQUF5QixrQkFBTSxFQUFDLFFBQWhDO0FBQXlDLGVBQUcsRUFBQyxxQkFBN0M7QUFBQSxtQ0FDQyxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFZQztBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLG1EQUNjO0FBQUEsc0JBQVNMLEtBQUssQ0FBQ0csT0FBTixDQUFjYTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZ0JBb0JBO0FBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTBCQTs7QUFFY3BCLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTXFCLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFxQjtBQUNuQztBQUNBLFFBQU07QUFBRXJCO0FBQUYsTUFBY0Msd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ29CLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCbEIsc0RBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNtQixNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQnBCLHNEQUFRLENBQUMsS0FBRCxDQUFwQztBQUNBLFFBQU1xQixZQUFZLEdBQUcsRUFBckI7QUFFQWpCLHlEQUFTLENBQUMsTUFBTTtBQUNma0IsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxNQUFNO0FBQ3pDLFlBQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxZQUEvQjs7QUFDQSxVQUFJRyxLQUFLLEtBQUtQLE1BQWQsRUFBc0I7QUFDckJDLGlCQUFTLENBQUNNLEtBQUQsQ0FBVDtBQUNBO0FBQ0QsS0FMRDs7QUFPQUMsVUFBTSxDQUFDRSxRQUFQLEdBQWtCLFlBQVk7QUFDN0IsVUFBSUYsTUFBTSxDQUFDRyxXQUFQLEdBQXFCSCxNQUFNLENBQUNDLE9BQTVCLElBQXVDSixRQUFRLENBQUNPLElBQVQsQ0FBY0MsWUFBekQsRUFBdUU7QUFDdEVWLGlCQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0EsT0FGRCxNQUVPO0FBQ05BLGlCQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0E7QUFDRCxLQU5EO0FBT0EsR0FmUSxDQUFUO0FBaUJBLHNCQUNDLHFFQUFDLHNFQUFEO0FBQUEsMkJBQ0M7QUFBUSxlQUFTLEVBQUUsYUFBYUgsTUFBTSxHQUFHLE9BQUgsR0FBYSxhQUFoQyxDQUFuQjtBQUFBLDZCQUNDO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxpQ0FDQztBQUFBLG9DQUNDO0FBQUEscUNBQ0MscUVBQUMsaURBQUQ7QUFDQywyQkFBVyxFQUFFLENBQUNFLE1BQUQsR0FBVSxTQUFWLEdBQXNCLFFBRHBDO0FBRUMsa0JBQUUsRUFBQyxPQUZKO0FBR0MsbUJBQUcsRUFBRSxJQUhOO0FBSUMsc0JBQU0sRUFBRSxJQUpUO0FBS0Msc0JBQU0sRUFBRSxDQUFDLEdBTFY7QUFNQyx5QkFBUyxFQUFFLElBTlo7QUFPQyx3QkFBUSxFQUFFLElBUFg7QUFRQyxxQkFBSyxFQUFFLEVBUlI7QUFTQyxtQkFBRyxFQUFDLE9BVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELGVBZ0JDO0FBQUEscUNBQ0MscUVBQUMsaURBQUQ7QUFDQywyQkFBVyxFQUFFLENBQUNBLE1BQUQsR0FBVSxTQUFWLEdBQXNCLFFBRHBDO0FBRUMsa0JBQUUsRUFBQyxVQUZKO0FBR0MsbUJBQUcsRUFBRSxJQUhOO0FBSUMsc0JBQU0sRUFBRSxJQUpUO0FBS0Msc0JBQU0sRUFBRSxDQUFDLEdBTFY7QUFNQyx5QkFBUyxFQUFFLElBTlo7QUFPQyx3QkFBUSxFQUFFLElBUFg7QUFRQyxxQkFBSyxFQUFFLEVBUlI7QUFTQyxtQkFBRyxFQUFDLFVBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWhCRCxlQStCQztBQUFBLHFDQUNDLHFFQUFDLGlEQUFEO0FBQ0MseUJBQVMsRUFBRUEsTUFBTSxHQUFHLFFBQUgsR0FBYyxFQURoQztBQUVDLGtCQUFFLEVBQUMsU0FGSjtBQUdDLG1CQUFHLEVBQUUsSUFITjtBQUlDLHNCQUFNLEVBQUUsSUFKVDtBQUtDLHNCQUFNLEVBQUUsQ0FMVDtBQU1DLHdCQUFRLEVBQUUsSUFOWDtBQU9DLHlCQUFTLEVBQUUsSUFQWjtBQVFDLHFCQUFLLEVBQUUsRUFSUjtBQVNDLDJCQUFXLEVBQUMsUUFUYjtBQVVDLG1CQUFHLEVBQUMsU0FWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBL0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFtREM7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxpQ0FDQyxxRUFBQyxtREFBRDtBQUNDLG9CQUFRLEVBQUVILFdBRFg7QUFFQyxtQkFBTyxFQUFFckIsT0FBTyxLQUFLLE1BRnRCO0FBR0MsdUJBQVcsRUFBRSxLQUhkO0FBSUMseUJBQWEsRUFBRSxLQUpoQjtBQUtDLGtCQUFNLEVBQUUsRUFMVDtBQU1DLGlCQUFLLEVBQUUsRUFOUjtBQU9DLG9CQUFRLEVBQUMsTUFQVjtBQVFDLDBCQUFjLEVBQUUsRUFSakI7QUFTQyxtQkFBTyxFQUFDO0FBVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUF1RUEsQ0EvRkQ7O0FBaUdlb0IscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFDQTs7QUFFQSxNQUFNZ0IsTUFBTSxHQUFHLE1BQU07QUFDcEIsc0JBQ0MscUVBQUMsc0VBQUQ7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBUUEsQ0FURDs7QUFXZUEscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsUUFBVCxHQUFvQjtBQUNuQixRQUFNO0FBQUVyQyxXQUFGO0FBQVdzQztBQUFYLE1BQXdCckMsd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FBeEM7O0FBQ0EsUUFBTXFDLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBRCxDQUF0Qjs7QUFDQSxRQUFNO0FBQUEsT0FBQ3JDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDO0FBQ2xDQyxXQUFPLEVBQUU7QUFEeUIsR0FBRCxDQUFsQztBQUlBRyx5REFBUyxDQUFDLE1BQU07QUFDZkMsNEVBQU8sR0FDTEMsSUFERixDQUNPQyxRQUFRLElBQUk7QUFDakJSLGNBQVEsQ0FBQztBQUFFRSxlQUFPLEVBQUVNLFFBQVEsQ0FBQ0M7QUFBcEIsT0FBRCxDQUFSO0FBQ0EsS0FIRixFQUlFNEIsS0FKRixDQUlRLE1BQU07QUFDWkgsY0FBUSxDQUFDO0FBQUVuQixZQUFJLEVBQUUsT0FBUjtBQUFpQnVCLGFBQUssRUFBRTtBQUF4QixPQUFELENBQVI7QUFDQSxLQU5GO0FBT0EsR0FSUSxFQVFOLENBQUNKLFFBQUQsQ0FSTSxDQUFUO0FBVUEsc0JBQ0MscUVBQUMsb0RBQUQ7QUFBUyxRQUFJLEVBQUMsT0FBZDtBQUFBLDJCQUNDLHFFQUFDLHlFQUFEO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUEsK0JBQ0M7QUFBSyxZQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBSUM7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsbUJBQ0UsQ0FBQ3RDLE9BQU8sQ0FBQ2dCLFNBQVQsSUFBc0IsQ0FBQ2hCLE9BQU8sQ0FBQ2lCLEtBQS9CLGdCQUNBO0FBQUEsa0NBQ0M7QUFBSyxnQkFBSSxFQUFDLE9BQVY7QUFBa0IsZUFBRyxFQUFFZCxLQUFLLENBQUNHLE9BQU4sQ0FBY3FDLFVBQXJDO0FBQWlELGVBQUcsRUFBRXhDLEtBQUssQ0FBQ0csT0FBTixDQUFjc0M7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQUEsc0JBQUt6QyxLQUFLLENBQUNHLE9BQU4sQ0FBY2E7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRCxlQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhELGVBSUM7QUFBQSxzQkFBSWhCLEtBQUssQ0FBQ0csT0FBTixDQUFjdUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRDtBQUFBLHdCQURBLGdCQVFBLHVKQVRGLEVBVUksR0FWSixFQVdFLENBQUM3QyxPQUFPLENBQUNnQixTQUFULElBQXNCaEIsT0FBTyxDQUFDaUIsS0FBOUIsZ0JBQ0EscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsaUNBQ0M7QUFBQSw0QkFBTXNCLE1BQU0sQ0FBQ08sT0FBUCxDQUFlLDZDQUFmLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxnQkFLQSx1SkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBNEJBOztBQUVjVCx1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbkIsUUFBTTtBQUFFckMsV0FBRjtBQUFXc0M7QUFBWCxNQUF3QnJDLHdEQUFVLENBQUNDLGdFQUFELENBQXhDOztBQUNBLFFBQU1xQyxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQUQsQ0FBdEI7O0FBQ0EsUUFBTTtBQUFBLE9BQUNyQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQztBQUNsQzBDLGdCQUFZLEVBQUUsRUFEb0I7QUFFbENDLG9CQUFnQixFQUFFO0FBRmdCLEdBQUQsQ0FBbEM7QUFLQXZDLHlEQUFTLENBQUMsTUFBTTtBQUNmd0Msb0ZBQWUsR0FDYnRDLElBREYsQ0FDT0MsUUFBUSxJQUFJO0FBQ2pCUixjQUFRLENBQUNXLGFBQWEsb0NBQ2xCQSxhQURrQjtBQUVyQmdDLG9CQUFZLEVBQUVuQyxRQUFRLENBQUNDLElBRkY7QUFHckJtQyx3QkFBZ0IsRUFBRXBDLFFBQVEsQ0FBQ0M7QUFITixRQUFkLENBQVI7QUFLQXFDLGdCQUFVLENBQUMsTUFBTTtBQUNoQlosZ0JBQVEsQ0FBQztBQUFFbkIsY0FBSSxFQUFFLFdBQVI7QUFBcUJ1QixlQUFLLEVBQUU7QUFBNUIsU0FBRCxDQUFSO0FBQ0EsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdBLEtBVkYsRUFXRUQsS0FYRixDQVdRLE1BQU07QUFDWkgsY0FBUSxDQUFDO0FBQUVuQixZQUFJLEVBQUUsV0FBUjtBQUFxQnVCLGFBQUssRUFBRTtBQUE1QixPQUFELENBQVI7QUFDQUosY0FBUSxDQUFDO0FBQUVuQixZQUFJLEVBQUUsT0FBUjtBQUFpQnVCLGFBQUssRUFBRTtBQUF4QixPQUFELENBQVI7QUFDQSxLQWRGO0FBZUEsR0FoQlEsRUFnQk4sQ0FBQ0osUUFBRCxDQWhCTSxDQUFUO0FBa0JBN0IseURBQVMsQ0FBQyxNQUFNO0FBQ2YsVUFBTWlDLEtBQUssR0FBRzFDLE9BQU8sQ0FBQ21ELE1BQXRCOztBQUNBLFFBQUlULEtBQUssSUFBSUEsS0FBSyxDQUFDVSxJQUFOLE9BQWlCLEVBQTlCLEVBQWtDO0FBQ2pDLFlBQU1MLFlBQVksR0FBR00sV0FBVyxDQUFDWCxLQUFELENBQWhDO0FBQ0EsWUFBTVksTUFBTSxHQUFHQyxlQUFlLENBQUNSLFlBQUQsQ0FBOUI7O0FBRUEsVUFBSU8sTUFBTSxLQUFLRSxTQUFmLEVBQTBCO0FBQ3pCcEQsZ0JBQVEsQ0FBQ1csYUFBYSxvQ0FDbEJBLGFBRGtCO0FBRXJCaUMsMEJBQWdCLEVBQUVNO0FBRkcsVUFBZCxDQUFSO0FBSUE7QUFDRCxLQVZELE1BVU87QUFDTmxELGNBQVEsQ0FBQ1csYUFBYSxvQ0FDbEJBLGFBRGtCO0FBRXJCaUMsd0JBQWdCLEVBQUU3QyxLQUFLLENBQUM0QztBQUZILFFBQWQsQ0FBUjtBQUlBLEtBakJjLENBa0JmOztBQUNBLEdBbkJRLEVBbUJOLENBQUMvQyxPQUFPLENBQUNtRCxNQUFULENBbkJNLENBQVQ7O0FBcUJBLFFBQU1FLFdBQVcsR0FBR1gsS0FBSyxJQUFJO0FBQzVCQSxTQUFLLEdBQUdBLEtBQUssQ0FBQ2UsV0FBTixFQUFSO0FBQ0EsVUFBTXRDLElBQUksR0FBR2hCLEtBQUssQ0FBQzRDLFlBQU4sQ0FBbUJXLE1BQW5CLENBQTBCQyxDQUFDLElBQUtBLENBQUMsQ0FBQ3hDLElBQUYsR0FBU3dDLENBQUMsQ0FBQ3hDLElBQUYsQ0FBT3NDLFdBQVAsR0FBcUJHLFFBQXJCLENBQThCbEIsS0FBOUIsQ0FBVCxHQUFnRCxJQUFoRixDQUFiO0FBQ0EsVUFBTW1CLFFBQVEsR0FBRzFELEtBQUssQ0FBQzRDLFlBQU4sQ0FBbUJXLE1BQW5CLENBQTBCQyxDQUFDLElBQUtBLENBQUMsQ0FBQ0UsUUFBRixHQUFhRixDQUFDLENBQUNFLFFBQUYsQ0FBV0osV0FBWCxHQUF5QkcsUUFBekIsQ0FBa0NsQixLQUFsQyxDQUFiLEdBQXdELElBQXhGLENBQWpCO0FBQ0EsVUFBTW9CLFdBQVcsR0FBRzNELEtBQUssQ0FBQzRDLFlBQU4sQ0FBbUJXLE1BQW5CLENBQTBCQyxDQUFDLElBQzlDQSxDQUFDLENBQUNHLFdBQUYsR0FBZ0JILENBQUMsQ0FBQ0csV0FBRixDQUFjTCxXQUFkLEdBQTRCRyxRQUE1QixDQUFxQ2xCLEtBQXJDLENBQWhCLEdBQThELElBRDNDLENBQXBCO0FBSUEsUUFBSXFCLFdBQVcsR0FBRzVDLElBQUksQ0FBQzZDLE1BQUwsQ0FBWUgsUUFBWixDQUFsQjtBQUNBRSxlQUFXLEdBQUdBLFdBQVcsQ0FBQ0MsTUFBWixDQUFtQkYsV0FBbkIsQ0FBZDtBQUVBLFdBQU9DLFdBQVA7QUFDQSxHQVpEOztBQWNBLFFBQU1SLGVBQWUsR0FBR1IsWUFBWSxJQUFJO0FBQ3ZDLFVBQU1rQixRQUFRLEdBQUcsSUFBSUMsR0FBSixFQUFqQjs7QUFDQSxTQUFLLE1BQU1DLEtBQVgsSUFBb0JwQixZQUFwQixFQUFrQztBQUNqQ2tCLGNBQVEsQ0FBQ0csR0FBVCxDQUFhRCxLQUFLLENBQUNFLEVBQW5CLEVBQXVCRixLQUF2QjtBQUNBOztBQUNELFVBQU1HLFdBQVcsR0FBRyxDQUFDLEdBQUdMLFFBQVEsQ0FBQ00sTUFBVCxFQUFKLENBQXBCO0FBQ0EsV0FBT0QsV0FBUDtBQUNBLEdBUEQ7O0FBU0Esc0JBQ0MscUVBQUMsMEVBQUQ7QUFBQSxjQUNFLENBQUN0RSxPQUFPLENBQUNnQixTQUFULGdCQUNBLHFFQUFDLG9EQUFEO0FBQVMsVUFBSSxFQUFDLFVBQWQ7QUFBQSw2QkFDQztBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLGtCQUNFYixLQUFLLENBQUM0QyxZQUFOLElBQXNCNUMsS0FBSyxDQUFDNkMsZ0JBQU4sQ0FBdUJ3QixNQUF2QixHQUFnQyxDQUF0RCxHQUNBckUsS0FBSyxDQUFDNkMsZ0JBQU4sQ0FBdUJ5QixHQUF2QixDQUEyQkMsSUFBSSxJQUFJO0FBQ2xDLDhCQUNDO0FBQUsscUJBQVMsRUFBQyxZQUFmO0FBQUEsb0NBQ0M7QUFBRyxrQkFBSSxFQUFFQSxJQUFJLENBQUN4RCxRQUFkO0FBQXdCLG9CQUFNLEVBQUMsUUFBL0I7QUFBd0MsaUJBQUcsRUFBQyxxQkFBNUM7QUFBQSx3QkFDRXdELElBQUksQ0FBQ3ZEO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUlDO0FBQUEsd0JBQUl1RCxJQUFJLENBQUNDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRCxlQUtDO0FBQUEsd0JBQUlwQyxNQUFNLENBQUNPLE9BQVAsQ0FBZTRCLElBQUksQ0FBQ1osV0FBcEI7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxELGVBTUM7QUFBRyx1QkFBUyxFQUFDLFVBQWI7QUFBQSx3QkFBeUJZLElBQUksQ0FBQ2I7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORDtBQUFBLGFBQWlDYSxJQUFJLENBQUNMLEVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQ7QUFVQSxTQVhELENBREEsR0FhRyxDQUFDckUsT0FBTyxDQUFDaUIsS0FBVCxnQkFDSDtBQUFHLG1CQUFTLEVBQUMsU0FBYjtBQUFBLG9CQUF3QnNCLE1BQU0sQ0FBQ08sT0FBUCxDQUFlLDJCQUFmO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREcsZ0JBR0g7QUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxnQkF3QkEscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUE4QkE7O0FBRWNULHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFFQTtBQUNBOztBQUVBLFNBQVN1QyxNQUFULEdBQWtCO0FBQ2pCLFFBQU07QUFBRTVFLFdBQUY7QUFBV3NDO0FBQVgsTUFBd0JyQyx3REFBVSxDQUFDQyxnRUFBRCxDQUF4Qzs7QUFDQSxRQUFNMkUsUUFBUSxHQUFHbkMsS0FBSyxJQUFJO0FBQ3pCSixZQUFRLENBQUM7QUFBRW5CLFVBQUksRUFBRSxRQUFSO0FBQWtCdUIsV0FBSyxFQUFFQTtBQUF6QixLQUFELENBQVI7QUFDQSxHQUZEOztBQUlBLHNCQUNDLHFFQUFDLHNFQUFEO0FBQUEsY0FDRSxDQUFDMUMsT0FBTyxDQUFDZ0IsU0FBVCxJQUFzQixDQUFDaEIsT0FBTyxDQUFDaUIsS0FBL0IsZ0JBQ0E7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDZCQUNDO0FBQ0MsWUFBSSxFQUFDLE1BRE47QUFFQyxZQUFJLEVBQUMsUUFGTjtBQUdDLHNCQUFXLFFBSFo7QUFJQyxVQUFFLEVBQUMsUUFKSjtBQUtDLGdCQUFRLEVBQUU2RCxLQUFLLElBQUlELFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFOLENBQWFyQyxLQUFkLENBTDVCO0FBTUMsbUJBQVcsRUFBQztBQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZ0JBWUE7QUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFrQkE7O0FBRWNrQyxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUVBLE1BQU1JLGNBQWMsR0FBRztBQUN0QjdCLFFBQU0sRUFBRSxFQURjO0FBRXRCbkMsV0FBUyxFQUFFLElBRlc7QUFHdEJDLE9BQUssRUFBRSxLQUhlO0FBSXRCZ0UsT0FBSyxFQUFFQyxxREFBS0E7QUFKVSxDQUF2QjtBQU9BLE1BQU1oRixPQUFPLGdCQUFHaUYsMkRBQWEsQ0FBQyxFQUFELENBQTdCOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUFDakYsS0FBSyxHQUFHNkUsY0FBVCxFQUF5QkssTUFBekIsS0FBb0M7QUFDbkQsUUFBTUMsUUFBUSxxQkFBUW5GLEtBQVIsQ0FBZDs7QUFDQW1GLFVBQVEsQ0FBQ0QsTUFBTSxDQUFDbEUsSUFBUixDQUFSLEdBQXdCa0UsTUFBTSxDQUFDM0MsS0FBL0I7QUFDQSxTQUFPNEMsUUFBUDtBQUNBLENBSkQ7O0FBTUEsTUFBTUMsZUFBZSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ3pDLFFBQU07QUFBQSxPQUFDeEYsT0FBTyxHQUFHZ0YsY0FBWDtBQUFBLE9BQTJCMUM7QUFBM0IsTUFBdUNtRCx3REFBVSxDQUFDTCxPQUFELENBQXZEO0FBQ0EsUUFBTTFDLEtBQUssR0FBRztBQUFFMUMsV0FBRjtBQUFXc0M7QUFBWCxHQUFkO0FBQ0Esc0JBQU8scUVBQUMsT0FBRCxDQUFTLFFBQVQ7QUFBa0IsU0FBSyxFQUFFSSxLQUF6QjtBQUFBLGNBQWlDOEM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0EsQ0FKRDs7QUFNQSxNQUFNRSxlQUFlLEdBQUd4RixPQUFPLENBQUN5RixRQUFoQzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQU8sTUFBTUMsV0FBVyxHQUFHO0FBQzFCQyxLQUFHLEVBQUUsK0JBRHFCO0FBRTFCQyxNQUFJLEVBQUUsUUFGb0I7QUFHMUJDLFFBQU0sRUFBRTtBQUhrQixDQUFwQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBRUE7QUFDQTs7QUFFQSxNQUFNQyxHQUFHLEdBQUcsTUFBTTtBQUNqQixRQUFNO0FBQUEsT0FBQ2YsS0FBRDtBQUFBLE9BQVFnQjtBQUFSLE1BQW9CNUYsc0RBQVEsQ0FBQyxPQUFELEVBQVU2RSxzREFBVixDQUFsQzs7QUFDQSxRQUFNN0QsV0FBVyxHQUFHLE1BQU07QUFDekI0RSxZQUFRLENBQUNoQixLQUFLLENBQUM5RCxJQUFOLEtBQWUsT0FBZixHQUF5QitFLHFEQUF6QixHQUFnQ2hCLHNEQUFqQyxDQUFSO0FBQ0EsR0FGRDs7QUFJQXpFLHlEQUFTLENBQUMsTUFBTTtBQUNmLFVBQU0wRixXQUFXLEdBQUdyRSxNQUFNLENBQUNxRSxXQUEzQjtBQUNBQSxlQUFXLENBQUNDLElBQVosQ0FBaUIsY0FBakIsRUFBaUMsZ0JBQWpDLEVBQW1ELFlBQVk7QUFDOURDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSxLQUZEO0FBR0EsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLHNCQUNDLHFFQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFcEIsc0RBQXRCO0FBQUEsMkJBQ0MscUVBQUMsd0VBQUQ7QUFBQSw4QkFDQyxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUMscUVBQUMsaUVBQUQ7QUFBUSxtQkFBVyxFQUFFN0Q7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxlQUdDLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEQsZUFJQyxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpELGVBS0MscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRCxlQU1DLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBWUEsQ0F6QkQ7O0FBMkJlMkUsa0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVPLE1BQU0vQyxlQUFlLEdBQUcsTUFBTTtBQUNwQyxTQUFPc0QsNENBQUssQ0FBQ0MsR0FBTixDQUFXLEdBQUVaLHNFQUFXLENBQUNDLEdBQUksR0FBRUQsc0VBQVcsQ0FBQ0UsSUFBSyxRQUFoRCxDQUFQO0FBQ0EsQ0FGTTtBQUlBLE1BQU1wRixPQUFPLEdBQUcsTUFBTTtBQUM1QixTQUFPNkYsNENBQUssQ0FBQ0MsR0FBTixDQUFXLEdBQUVaLHNFQUFXLENBQUNDLEdBQUksR0FBRUQsc0VBQVcsQ0FBQ0UsSUFBSyxFQUFoRCxDQUFQO0FBQ0EsQ0FGTTtBQUlBLE1BQU1oRixRQUFRLEdBQUcsTUFBTTtBQUM3QixTQUFPeUYsNENBQUssQ0FBQ0MsR0FBTixDQUFXLEdBQUVaLHNFQUFXLENBQUNDLEdBQUksR0FBRUQsc0VBQVcsQ0FBQ0UsSUFBSyxJQUFHRixzRUFBVyxDQUFDRyxNQUFPLEVBQXRFLENBQVA7QUFDQSxDQUZNLEM7Ozs7Ozs7Ozs7OztBQ1pQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNVSxXQUFXLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK1hBTUFDLEtBQUssSUFBSUEsS0FBSyxDQUFDM0IsS0FBTixDQUFZNEIsVUFOckIsRUFZVEQsS0FBSyxJQUFJQSxLQUFLLENBQUMzQixLQUFOLENBQVk2QixZQVpaLEVBbUJQRixLQUFLLElBQUlBLEtBQUssQ0FBQzNCLEtBQU4sQ0FBWThCLFlBbkJkLEVBMEJBSCxLQUFLLElBQUlBLEtBQUssQ0FBQzNCLEtBQU4sQ0FBWStCLE1BMUJyQixFQTJCWEosS0FBSyxJQUFJQSxLQUFLLENBQUMzQixLQUFOLENBQVlnQyxPQTNCVixFQThCWEwsS0FBSyxJQUFJQSxLQUFLLENBQUMzQixLQUFOLENBQVk2QixZQTlCVixFQW9DVEYsS0FBSyxJQUFJQSxLQUFLLENBQUMzQixLQUFOLENBQVlpQyxNQXBDWixDQUFqQixDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUVlQyxrSUFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCUCxLQUFLLElBQUlBLEtBQUssQ0FBQzNCLEtBQU4sQ0FBWTRCLFVBQVc7QUFDeEQsYUFBYUQsS0FBSyxJQUFJQSxLQUFLLENBQUMzQixLQUFOLENBQVltQyxVQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTlEQSxFOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUMsV0FBVyxHQUFHWCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdvQ0E0QlRDLEtBQUssSUFBSUEsS0FBSyxDQUFDM0IsS0FBTixDQUFZNkIsWUE1QlosRUFzRURGLEtBQUssSUFBSUEsS0FBSyxDQUFDM0IsS0FBTixDQUFZcUMsR0F0RXBCLEVBMkVIVixLQUFLLElBQUlBLEtBQUssQ0FBQzNCLEtBQU4sQ0FBWWlDLE1BM0VsQixFQThGRk4sS0FBSyxJQUFJQSxLQUFLLENBQUMzQixLQUFOLENBQVkrQixNQTlGbkIsQ0FBakIsQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1PLFdBQVcsR0FBR2Isd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0ZUFPTkMsS0FBSyxJQUFJQSxLQUFLLENBQUMzQixLQUFOLENBQVlxQyxHQVBmLENBQWpCLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNRSxZQUFZLEdBQUdkLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb25EQUdkQyxLQUFLLElBQUlBLEtBQUssQ0FBQzNCLEtBQU4sQ0FBWXFDLEdBSFAsRUFZdUJWLEtBQUssSUFBSUEsS0FBSyxDQUFDM0IsS0FBTixDQUFZcUMsR0FaNUMsRUE2QkNWLEtBQUssSUFBSUEsS0FBSyxDQUFDM0IsS0FBTixDQUFZcUMsR0E3QnRCLEVBaUNDVixLQUFLLElBQUlBLEtBQUssQ0FBQzNCLEtBQU4sQ0FBWXdDLEtBakN0QixFQTRDVmIsS0FBSyxJQUFJQSxLQUFLLENBQUMzQixLQUFOLENBQVk2QixZQTVDWCxFQTRFVkYsS0FBSyxJQUFJQSxLQUFLLENBQUMzQixLQUFOLENBQVlxQyxHQTVFWCxDQUFsQixDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUksWUFBWSxHQUFHaEIsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2Z0JBVVpDLEtBQUssSUFBSUEsS0FBSyxDQUFDM0IsS0FBTixDQUFZcUMsR0FWVCxFQWdCWlYsS0FBSyxJQUFJQSxLQUFLLENBQUMzQixLQUFOLENBQVkwQyxjQWhCVCxFQTBCRGYsS0FBSyxJQUFJQSxLQUFLLENBQUMzQixLQUFOLENBQVlnQyxPQTFCcEIsRUE0QlpMLEtBQUssSUFBSUEsS0FBSyxDQUFDM0IsS0FBTixDQUFZOEIsWUE1QlQsRUF3Q1pILEtBQUssSUFBSUEsS0FBSyxDQUFDM0IsS0FBTixDQUFZNkIsWUF4Q1QsRUE0Q1pGLEtBQUssSUFBSUEsS0FBSyxDQUFDM0IsS0FBTixDQUFZaUMsTUE1Q1QsRUFrRFpOLEtBQUssSUFBSUEsS0FBSyxDQUFDM0IsS0FBTixDQUFZaUMsTUFsRFQsQ0FBbEIsQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1VLFdBQVcsR0FBR2xCLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseVVBWUpDLEtBQUssSUFBSUEsS0FBSyxDQUFDM0IsS0FBTixDQUFZMEMsY0FaakIsRUFpQkZmLEtBQUssSUFBSUEsS0FBSyxDQUFDM0IsS0FBTixDQUFZMEMsY0FqQm5CLENBQWpCLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUEsTUFBTXpCLElBQUksR0FBRztBQUNaL0UsTUFBSSxFQUFFLE1BRE07QUFFWjBGLFlBQVUsRUFBRSxTQUZBO0FBR1pTLEtBQUcsRUFBRSxTQUhPO0FBSVpQLGNBQVksRUFBRSxTQUpGO0FBS1pELGNBQVksRUFBRSxTQUxGO0FBTVphLGdCQUFjLEVBQUUsU0FOSjtBQU9aVixTQUFPLEVBQUUsU0FQRztBQVFaWSxNQUFJLEVBQUUsU0FSTTtBQVNaQyxTQUFPLEVBQUUsU0FURztBQVVaQyxTQUFPLEVBQUUsU0FWRztBQVdaQyxNQUFJLEVBQUUsU0FYTTtBQVlaZCxRQUFNLEVBQUUsU0FaSTtBQWFaZSxRQUFNLEVBQUUsU0FiSTtBQWNaUixPQUFLLEVBQUUsTUFkSztBQWVaVCxRQUFNLEVBQUU7QUFmSSxDQUFiO0FBa0JlZCxtRUFBZixFOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQSxNQUFNaEIsS0FBSyxHQUFHO0FBQ2IvRCxNQUFJLEVBQUUsT0FETztBQUViMEYsWUFBVSxFQUFFLFNBRkM7QUFHYlMsS0FBRyxFQUFFLFNBSFE7QUFJYlAsY0FBWSxFQUFFLFNBSkQ7QUFLYkQsY0FBWSxFQUFFLFNBTEQ7QUFNYmEsZ0JBQWMsRUFBRSxTQU5IO0FBT2JWLFNBQU8sRUFBRSxTQVBJO0FBUWJZLE1BQUksRUFBRSxTQVJPO0FBU2JDLFNBQU8sRUFBRSxTQVRJO0FBVWJJLFFBQU0sRUFBRSxTQVZLO0FBV2JGLE1BQUksRUFBRSxTQVhPO0FBWWJkLFFBQU0sRUFBRSxTQVpLO0FBYWJlLFFBQU0sRUFBRSxTQWJLO0FBY2JSLE9BQUssRUFBRSxNQWRNO0FBZWJULFFBQU0sRUFBRTtBQWZLLENBQWQ7QUFrQmU5QixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9yZWR1Y2VyL3JlZHVjZXJcIjtcclxuaW1wb3J0IHsgZ2V0RW1haWwsIGdldFVzZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2l0SHViLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaU91dGxpbmVNYWlsLCBBaUZpbGxMaW5rZWRpbiB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyBGb290ZXJTdHlsZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvRm9vdGVyL0Zvb3RlclN0eWxlXCI7XHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKSB7XHJcblx0Y29uc3QgeyBjb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG5cdFx0cHJvZmlsZToge30sXHJcblx0XHRlbWFpbDogXCJcIixcclxuXHRcdGxpbmtlZGluOiBcIlwiXHJcblx0fSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXRVc2VyKCkudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdHNldFN0YXRlKHsgcHJvZmlsZTogcmVzcG9uc2UuZGF0YSB9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGdldEVtYWlsKCkudGhlbigoKSA9PiB7XHJcblx0XHRcdHNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcclxuXHRcdFx0XHQuLi5wcmV2aW91c1N0YXRlLFxyXG5cdFx0XHRcdGVtYWlsOiBcImVkdWFyZG9kdXNpa0BnbWFpbC5jb21cIixcclxuXHRcdFx0XHRsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZWR1YXJkby1kb3Mtc2FudG9zLWR1c2lrLTA5NTEwMDEyMC9cIlxyXG5cdFx0XHR9KSk7XHJcblx0XHR9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Rm9vdGVyU3R5bGU+XHJcblx0XHRcdHshY29udGV4dC5pc0xvYWRpbmcgJiYgIWNvbnRleHQuZXJyb3IgPyAoXHJcblx0XHRcdFx0PEVsZW1lbnQgbmFtZT1cImNvbnRhY3RcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YG1haWx0bzoke3N0YXRlLmVtYWlsfWB9IHRhcmdldD1cIl90b3BcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxBaU91dGxpbmVNYWlsIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e3N0YXRlLnByb2ZpbGUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxBaUZpbGxHaXRodWIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj17c3RhdGUubGlua2VkaW59IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxBaUZpbGxMaW5rZWRpbiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0RGV2ZWxvcGVkIGJ5IDxzdHJvbmc+e3N0YXRlLnByb2ZpbGUubmFtZX08L3N0cm9uZz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PD48Lz5cclxuXHRcdFx0KX1cclxuXHRcdDwvRm9vdGVyU3R5bGU+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gXCJyZWFjdC1zd2l0Y2hcIjtcclxuaW1wb3J0IHsgSGVhZGVyU3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0hlYWRlci9IZWFkZXJTdHlsZVwiO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlZHVjZXIvcmVkdWNlclwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgdG9nZ2xlVGhlbWUgfSkgPT4ge1xyXG5cdC8vIGNvbnN0IHsgbmFtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG5cdGNvbnN0IHsgY29udGV4dCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHRjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtib3R0b20sIHNldEJvdHRvbV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgbmF2YmFySGVpZ2h0ID0gNTY7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgYWJvdXQgPSB3aW5kb3cuc2Nyb2xsWSA+IG5hdmJhckhlaWdodDtcclxuXHRcdFx0aWYgKGFib3V0ICE9PSBzY3JvbGwpIHtcclxuXHRcdFx0XHRzZXRTY3JvbGwoYWJvdXQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cuc2Nyb2xsWSA+PSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCkge1xyXG5cdFx0XHRcdHNldEJvdHRvbSh0cnVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRCb3R0b20oZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEhlYWRlclN0eWxlPlxyXG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT17XCJoZWFkZXIgXCIgKyAoc2Nyb2xsID8gXCJjb2xvclwiIDogXCJ0cmFuc3BhcmVudFwiKX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcblx0XHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVDbGFzcz17IWJvdHRvbSA/IFwiYWN0aXZlIFwiIDogXCJyZW1vdmVcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dG89XCJhYm91dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXQ9ey0xNTB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlzRHluYW1pYz17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb249ezEwMDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGF5PXs1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiYWJvdXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhYm91dFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlQ2xhc3M9eyFib3R0b20gPyBcImFjdGl2ZSBcIiA6IFwicmVtb3ZlXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvPVwicHJvamVjdHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHk9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0PXstMTUwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0R5bmFtaWM9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uPXsxMDAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxheT17NTB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cInByb2plY3RzXCJcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvamVjdHNcclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Ym90dG9tID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvPVwiY29udGFjdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXQ9ezB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uPXsxMDAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0R5bmFtaWM9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGF5PXs1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJjb250YWN0XCJcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHQ8L25hdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcblx0XHRcdFx0XHRcdDxTd2l0Y2hcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dG9nZ2xlVGhlbWV9XHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17Y29udGV4dCA9PT0gXCJkYXJrXCJ9XHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZEljb249e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdHVuY2hlY2tlZEljb249e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdGhlaWdodD17MTR9XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9ezMyfVxyXG5cdFx0XHRcdFx0XHRcdG9mZkNvbG9yPVwiI2NjY1wiXHJcblx0XHRcdFx0XHRcdFx0aGFuZGxlRGlhbWV0ZXI9ezIwfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ29sb3I9XCIjNjI3MmE0XCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2hlYWRlcj5cclxuXHRcdDwvSGVhZGVyU3R5bGU+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMb2FkZXJTdHlsZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvTG9hZGVyL0xvYWRlclN0eWxlXCI7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxMb2FkZXJTdHlsZT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuXHRcdFx0XHQ8c3Bhbj48L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTG9hZGVyU3R5bGU+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcclxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlZHVjZXIvcmVkdWNlclwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dpdEh1Yi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVTdHlsZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvUHJvZmlsZS9Qcm9maWxlU3R5bGVcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG5cdGNvbnN0IHsgY29udGV4dCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblx0Y29uc3QgZW1vamlzID0gcmVxdWlyZShcImVtb2ppc1wiKTtcclxuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuXHRcdHByb2ZpbGU6IHt9XHJcblx0fSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXRVc2VyKClcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdHNldFN0YXRlKHsgcHJvZmlsZTogcmVzcG9uc2UuZGF0YSB9KTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRkaXNwYXRjaCh7IG5hbWU6IFwiZXJyb3JcIiwgdmFsdWU6IHRydWUgfSk7XHJcblx0XHRcdH0pO1xyXG5cdH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEVsZW1lbnQgbmFtZT1cImFib3V0XCI+XHJcblx0XHRcdDxQcm9maWxlU3R5bGU+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLXBhcnRpY2xlcy1qc1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBpZD1cInBhcnRpY2xlcy1qc1wiPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1kZXRhaWxzXCI+XHJcblx0XHRcdFx0XHR7IWNvbnRleHQuaXNMb2FkaW5nICYmICFjb250ZXh0LmVycm9yID8gKFxyXG5cdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgdHlwZT1cImltYWdlXCIgc3JjPXtzdGF0ZS5wcm9maWxlLmF2YXRhcl91cmx9IGFsdD17c3RhdGUucHJvZmlsZS5sb2dpbn0gLz5cclxuXHRcdFx0XHRcdFx0XHQ8aDE+e3N0YXRlLnByb2ZpbGUubmFtZX08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxoMj5EZXZlbG9wZXI8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDxwPntzdGF0ZS5wcm9maWxlLmJpb308L3A+XHJcblx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PD48Lz5cclxuXHRcdFx0XHRcdCl9e1wiIFwifVxyXG5cdFx0XHRcdFx0eyFjb250ZXh0LmlzTG9hZGluZyAmJiBjb250ZXh0LmVycm9yID8gKFxyXG5cdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdFx0PGgzPiB7ZW1vamlzLnVuaWNvZGUoXCJlcnJvciBsb2FkaW5nLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyIDpzb2I6XCIpfSA8L2gzPlxyXG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PD48Lz5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvUHJvZmlsZVN0eWxlPlxyXG5cdFx0PC9FbGVtZW50PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vTG9hZGVyL0xvYWRlclwiO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvcmVkdWNlci9yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IGdldFJlcG9zaXRvcmllcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9naXRIdWIuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgUHJvamVjdFN0eWxlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9Qcm9qZWN0cy9Qcm9qZWN0U3R5bGVcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG5cdGNvbnN0IHsgY29udGV4dCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblx0Y29uc3QgZW1vamlzID0gcmVxdWlyZShcImVtb2ppc1wiKTtcclxuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuXHRcdHJlcG9zaXRvcmllczogW10sXHJcblx0XHRzaG93UmVwb3NpdG9yaWVzOiBbXVxyXG5cdH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0UmVwb3NpdG9yaWVzKClcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdHNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcclxuXHRcdFx0XHRcdC4uLnByZXZpb3VzU3RhdGUsXHJcblx0XHRcdFx0XHRyZXBvc2l0b3JpZXM6IHJlc3BvbnNlLmRhdGEsXHJcblx0XHRcdFx0XHRzaG93UmVwb3NpdG9yaWVzOiByZXNwb25zZS5kYXRhXHJcblx0XHRcdFx0fSkpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goeyBuYW1lOiBcImlzTG9hZGluZ1wiLCB2YWx1ZTogZmFsc2UgfSk7XHJcblx0XHRcdFx0fSwgMTAwMCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaCgoKSA9PiB7XHJcblx0XHRcdFx0ZGlzcGF0Y2goeyBuYW1lOiBcImlzTG9hZGluZ1wiLCB2YWx1ZTogZmFsc2UgfSk7XHJcblx0XHRcdFx0ZGlzcGF0Y2goeyBuYW1lOiBcImVycm9yXCIsIHZhbHVlOiB0cnVlIH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9LCBbZGlzcGF0Y2hdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IHZhbHVlID0gY29udGV4dC5zZWFyY2g7XHJcblx0XHRpZiAodmFsdWUgJiYgdmFsdWUudHJpbSgpICE9PSBcIlwiKSB7XHJcblx0XHRcdGNvbnN0IHJlcG9zaXRvcmllcyA9IGNvbmNhdFF1ZXJ5KHZhbHVlKTtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gbWFwUmVwb3NpdG9yaWVzKHJlcG9zaXRvcmllcyk7XHJcblxyXG5cdFx0XHRpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRzZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XHJcblx0XHRcdFx0XHQuLi5wcmV2aW91c1N0YXRlLFxyXG5cdFx0XHRcdFx0c2hvd1JlcG9zaXRvcmllczogcmVzdWx0XHJcblx0XHRcdFx0fSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XHJcblx0XHRcdFx0Li4ucHJldmlvdXNTdGF0ZSxcclxuXHRcdFx0XHRzaG93UmVwb3NpdG9yaWVzOiBzdGF0ZS5yZXBvc2l0b3JpZXNcclxuXHRcdFx0fSkpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cdH0sIFtjb250ZXh0LnNlYXJjaF0pO1xyXG5cclxuXHRjb25zdCBjb25jYXRRdWVyeSA9IHZhbHVlID0+IHtcclxuXHRcdHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdGNvbnN0IG5hbWUgPSBzdGF0ZS5yZXBvc2l0b3JpZXMuZmlsdGVyKHggPT4gKHgubmFtZSA/IHgubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKSA6IG51bGwpKTtcclxuXHRcdGNvbnN0IGxhbmd1YWdlID0gc3RhdGUucmVwb3NpdG9yaWVzLmZpbHRlcih4ID0+ICh4Lmxhbmd1YWdlID8geC5sYW5ndWFnZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKSA6IG51bGwpKTtcclxuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gc3RhdGUucmVwb3NpdG9yaWVzLmZpbHRlcih4ID0+XHJcblx0XHRcdHguZGVzY3JpcHRpb24gPyB4LmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpIDogbnVsbFxyXG5cdFx0KTtcclxuXHJcblx0XHRsZXQgbGlzdE9mUmVwb3MgPSBuYW1lLmNvbmNhdChsYW5ndWFnZSk7XHJcblx0XHRsaXN0T2ZSZXBvcyA9IGxpc3RPZlJlcG9zLmNvbmNhdChkZXNjcmlwdGlvbik7XHJcblxyXG5cdFx0cmV0dXJuIGxpc3RPZlJlcG9zO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG1hcFJlcG9zaXRvcmllcyA9IHJlcG9zaXRvcmllcyA9PiB7XHJcblx0XHRjb25zdCByZXBvc01hcCA9IG5ldyBNYXAoKTtcclxuXHRcdGZvciAoY29uc3QgcmVwb3Mgb2YgcmVwb3NpdG9yaWVzKSB7XHJcblx0XHRcdHJlcG9zTWFwLnNldChyZXBvcy5pZCwgcmVwb3MpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgcmVzdWx0T2ZNYXAgPSBbLi4ucmVwb3NNYXAudmFsdWVzKCldO1xyXG5cdFx0cmV0dXJuIHJlc3VsdE9mTWFwO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UHJvamVjdFN0eWxlPlxyXG5cdFx0XHR7IWNvbnRleHQuaXNMb2FkaW5nID8gKFxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJwcm9qZWN0c1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZXBvc2l0b3JpZXNcIj5cclxuXHRcdFx0XHRcdFx0e3N0YXRlLnJlcG9zaXRvcmllcyAmJiBzdGF0ZS5zaG93UmVwb3NpdG9yaWVzLmxlbmd0aCA+IDAgPyAoXHJcblx0XHRcdFx0XHRcdFx0c3RhdGUuc2hvd1JlcG9zaXRvcmllcy5tYXAocmVwbyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlcG9zaXRvcnlcIiBrZXk9e3JlcG8uaWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e3JlcG8uaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXBvLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpPntyZXBvLmZ1bGxfbmFtZX08L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e2Vtb2ppcy51bmljb2RlKHJlcG8uZGVzY3JpcHRpb24pfTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsYW5ndWFnZVwiPntyZXBvLmxhbmd1YWdlfTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdCkgOiAhY29udGV4dC5lcnJvciA/IChcclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuby1yZXBvXCI+e2Vtb2ppcy51bmljb2RlKFwiTm8gcmVwb3NpdG9yeSBmb3VuZCA6c29iOlwiKX08L3A+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PD48Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvRWxlbWVudD5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8TG9hZGVyIC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8L1Byb2plY3RTdHlsZT5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9yZWR1Y2VyL3JlZHVjZXJcIjtcclxuaW1wb3J0IHsgU2VhcmNoU3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL1NlYXJjaC9TZWFyY2hTdHlsZVwiO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKCkge1xyXG5cdGNvbnN0IHsgY29udGV4dCwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblx0Y29uc3Qgb25DaGFuZ2UgPSB2YWx1ZSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7IG5hbWU6IFwic2VhcmNoXCIsIHZhbHVlOiB2YWx1ZSB9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFNlYXJjaFN0eWxlPlxyXG5cdFx0XHR7IWNvbnRleHQuaXNMb2FkaW5nICYmICFjb250ZXh0LmVycm9yID8gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwic2VhcmNoXCJcclxuXHRcdFx0XHRcdFx0YXJpYS1sYWJlbD1cInNlYXJjaFwiXHJcblx0XHRcdFx0XHRcdGlkPVwic2VhcmNoXCJcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PD48Lz5cclxuXHRcdFx0KX1cclxuXHRcdDwvU2VhcmNoU3R5bGU+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbGlnaHQgZnJvbSBcIi4uLy4uL3RoZW1lcy9saWdodFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbENvbnRleHQgPSB7XHJcblx0c2VhcmNoOiBcIlwiLFxyXG5cdGlzTG9hZGluZzogdHJ1ZSxcclxuXHRlcnJvcjogZmFsc2UsXHJcblx0dGhlbWU6IGxpZ2h0XHJcbn07XHJcblxyXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbENvbnRleHQsIGFjdGlvbikgPT4ge1xyXG5cdGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xyXG5cdG5ld1N0YXRlW2FjdGlvbi5uYW1lXSA9IGFjdGlvbi52YWx1ZTtcclxuXHRyZXR1cm4gbmV3U3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgW2NvbnRleHQgPSBpbml0aWFsQ29udGV4dCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyKTtcclxuXHRjb25zdCB2YWx1ZSA9IHsgY29udGV4dCwgZGlzcGF0Y2ggfTtcclxuXHRyZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuXHJcbmNvbnN0IENvbnRleHRDb25zdW1lciA9IENvbnRleHQuQ29uc3VtZXI7XHJcbmV4cG9ydCB7IENvbnRleHQsIENvbnRleHRQcm92aWRlciwgQ29udGV4dENvbnN1bWVyIH07XHJcbiIsImV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuXHR1cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9cIixcclxuXHR1c2VyOiBcIkVEdXNpa1wiLFxyXG5cdHB1YmxpYzogXCJldmVudHMvcHVibGljXCJcclxufTtcclxuIiwiaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvcmVkdWNlci9yZWR1Y2VyXCI7XHJcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0dsb2JhbC9HbG9iYWxcIjtcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlXCI7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2hcIjtcclxuLy8gaW1wb3J0IHVzZVBlcnNpc3RlZFN0YXRlIGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5cclxuaW1wb3J0IGxpZ2h0IGZyb20gXCIuLi90aGVtZXMvbGlnaHRcIjtcclxuaW1wb3J0IGRhcmsgZnJvbSBcIi4uL3RoZW1lcy9kYXJrXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcInRoZW1lXCIsIGxpZ2h0KTtcclxuXHRjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcclxuXHRcdHNldFRoZW1lKHRoZW1lLm5hbWUgPT09IFwibGlnaHRcIiA/IGRhcmsgOiBsaWdodCk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IHBhcnRpY2xlc0pTID0gd2luZG93LnBhcnRpY2xlc0pTO1xyXG5cdFx0cGFydGljbGVzSlMubG9hZChcInBhcnRpY2xlcy1qc1wiLCBcInBhcnRpY2xlcy5qc29uXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJTdWNjZXNzIVwiKTtcclxuXHRcdH0pO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtsaWdodH0+XHJcblx0XHRcdDxDb250ZXh0UHJvdmlkZXI+XHJcblx0XHRcdFx0PEdsb2JhbFN0eWxlIC8+XHJcblx0XHRcdFx0PEhlYWRlciB0b2dnbGVUaGVtZT17dG9nZ2xlVGhlbWV9IC8+XHJcblx0XHRcdFx0PFByb2ZpbGUgLz5cclxuXHRcdFx0XHQ8U2VhcmNoIC8+XHJcblx0XHRcdFx0PFByb2plY3RzIC8+XHJcblx0XHRcdFx0PEZvb3RlciAvPlxyXG5cdFx0XHQ8L0NvbnRleHRQcm92aWRlcj5cclxuXHRcdDwvVGhlbWVQcm92aWRlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmVwb3NpdG9yaWVzID0gKCkgPT4ge1xyXG5cdHJldHVybiBheGlvcy5nZXQoYCR7ZW52aXJvbm1lbnQudXJsfSR7ZW52aXJvbm1lbnQudXNlcn0vcmVwb3NgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKCkgPT4ge1xyXG5cdHJldHVybiBheGlvcy5nZXQoYCR7ZW52aXJvbm1lbnQudXJsfSR7ZW52aXJvbm1lbnQudXNlcn1gKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRFbWFpbCA9ICgpID0+IHtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KGAke2Vudmlyb25tZW50LnVybH0ke2Vudmlyb25tZW50LnVzZXJ9LyR7ZW52aXJvbm1lbnQucHVibGljfWApO1xyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlclN0eWxlID0gc3R5bGVkLmRpdmBcclxuXHJcbi5mb290ZXIge1xyXG4gIC5zb2NpYWwge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iYWNrZ3JvdW5kfTtcclxuICAgIHBhZGRpbmctdG9wOiA3OXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgICBhIHsgIFxyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0X3ByaW1hcnl9O1xyXG4gICAgICBzdmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICBtYXJnaW46IDBweCA1cHg7ICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIDpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmN1cnJlbnRfbGluZX07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29weXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubmF2YmFyfTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbW1lbnR9O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0X3ByaW1hcnl9O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZGFuZ2VyfTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbn1gO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2xvYmFsU3R5bGVgICBcclxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuICAqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB9XHJcblxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iYWNrZ3JvdW5kfTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcmVncm91bmR9O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgfVxyXG5cclxuICBib2R5LCBpbnB1dCwgYnV0dG9uIHtcclxuICAgIGZvbnQ6IDE0cHggUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9XHJcblxyXG4gICNyb290IHtcclxuICAgIG1heC13aWR0aDogMTMzM3B4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwcHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgOjpzZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogJGRhcmtlc3Q7XHJcbiAgICBjb2xvcjogJGxpZ2h0OyAgICBcclxuICB9XHJcblxyXG4gICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9ICBcclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNmY2ZjZmM7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI2IyYjJiMlxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJTdHlsZSA9IHN0eWxlZC5kaXZgXHJcblxyXG4uaGVhZGVyIHtcclxuICAudHJhbnNwYXJlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBAaW5jbHVkZSBmb250X3ByaW1hcnk7XHJcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbjtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcclxuICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcblxyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRfcHJpbWFyeX07XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICB1bCB7ICAgICAgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwOyAgICAgICAgIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAuNWVtIDIuOGVtO1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMycHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogLjVlbSAxLjhlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMWVtXHJcbiAgICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogLjJlbSAuN2VtXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDBweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuMWVtIC41ZW1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjY1ZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNjVlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2t5fTtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZGFuZ2VyfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zd2l0Y2gge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICB9XHJcbn1cclxuXHJcbi5jb2xvciB7XHJcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubmF2YmFyfTtcclxuXHJcbiAgLm5hdmJhciB7XHJcbiAgICB1bCB7XHJcbiAgICAgIG1hcmdpbjogMGVtIDAgLjVlbTtcclxuICAgIH1cclxuICB9IFxyXG59XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTG9hZGVyU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG4gIC5sb2FkZXIgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2t5fTsgICAgXHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTUwcHgpO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxNTBweCk7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmcgMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAubG9hZGVyIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gIH0gICBcclxuXHJcbiAgQGtleWZyYW1lcyBsb2FkaW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcclxuICAgICAgb3BhY2l0eTowLjg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmcge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XHJcbiAgICAgIG9wYWNpdHk6MC44O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG5cclxuICBAaW5jbHVkZSBmb250X3NlY29uZGFyeTtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5za3l9O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuYmFja2dyb3VuZC1wYXJ0aWNsZXMtanMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNreX0sIHRyYW5zcGFyZW50KTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlOyAgICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgfVxyXG5cclxuICAjcGFydGljbGVzLWpzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtZGV0YWlscyB7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB3aWR0aDogMTAwJTsgICBcclxuICAgIHBhZGRpbmc6IDEwdmggMHB4OyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlcjogc29saWQgNXB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2t5fTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUud2hpdGV9O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0X3ByaW1hcnl9O1xyXG4gICAgICBAaW5jbHVkZSBmb250X3ByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogJGxpZ2h0O1xyXG4gICAgICBmb250LXNpemU6IDY4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA5MHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBibG9jazsgICAgICAgIFxyXG4gICAgICBtYXJnaW46IDI1cHggMDsgXHJcbiAgICAgIEBpbmNsdWRlIGZvbnRfcHJpbWFyeTtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA1O1xyXG4gICAgICBAaW5jbHVkZSBmb250X3ByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGNvbG9yOiAkdGV4dF9zZWNvbmRhcnk7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNreX07XHJcbiAgICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxODIwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzODBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzgwcHgpIHsgIFxyXG4gICAgICBwYWRkaW5nOiA4dmggMDtcclxuICAgICAgaDEsIGgyIHtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH0gICBcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2NjBweCkgeyAgXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgIH0gICBcclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTYwcHgpIHsgIFxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RTdHlsZSA9IHN0eWxlZC5kaXZgXHJcblxyXG4ucmVwb3NpdG9yaWVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtaW4taGVpZ2h0OiAyMnZoO1xyXG5cclxuICBpIHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNreX07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAxNnB4OyAgICAgIFxyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dF9zZWNvbmRhcnl9OztcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMi42O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmVwb3NpdG9yeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbW1lbnR9O1xyXG4gICAgcGFkZGluZzogMTJweCAxOHB4O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY3VycmVudF9saW5lfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogLjI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDE1cHggMTVweDtcclxuICAgIGZsZXg6IDEgMSAzNDBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dF9wcmltYXJ5fTtcclxuICB9XHJcblxyXG4gIHAubGFuZ3VhZ2Uge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZGFuZ2VyfTtcclxuICB9XHJcbiAgICBcclxuICBwLm5vLXJlcG8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kYW5nZXJ9O1xyXG4gIH1cclxufWA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG4uc2VhcmNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6IDh2aDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAyLjV2aCAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dF9zZWNvbmRhcnl9IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggOHB4O1xyXG4gICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0X3NlY29uZGFyeX07XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDI3LCAzMSwgMzUsIC4wNzUpLCAwIDAgMCAwLjE1ZW0gcmdiYSgxODksIDE0NywgMjQ5LCAuOSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcbiIsImNvbnN0IGRhcmsgPSB7XHJcblx0bmFtZTogXCJkYXJrXCIsXHJcblx0YmFja2dyb3VuZDogXCIjMjgyYTM2XCIsXHJcblx0c2t5OiBcIiMyMzI3NDFcIixcclxuXHRjdXJyZW50X2xpbmU6IFwiIzQ0NDc1YVwiLFxyXG5cdHRleHRfcHJpbWFyeTogXCIjZjhmOGYyXCIsXHJcblx0dGV4dF9zZWNvbmRhcnk6IFwiI2JkOTNmOVwiLFxyXG5cdGNvbW1lbnQ6IFwiI2ZmZmZmZlwiLFxyXG5cdGluZm86IFwiIzhiZTlmZFwiLFxyXG5cdHN1Y2Nlc3M6IFwiIzUwZmE3YlwiLFxyXG5cdHdhcm5pbmc6IFwiI2ZmYjg2Y1wiLFxyXG5cdHBpbms6IFwiI2ZmNzljNlwiLFxyXG5cdGRhbmdlcjogXCIjZmY1NTU1XCIsXHJcblx0eWVsbG93OiBcIiNmMWZhOGNcIixcclxuXHR3aGl0ZTogXCIjZmZmXCIsXHJcblx0bmF2YmFyOiBcIiM0NDQ3NWFcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFyaztcclxuIiwiY29uc3QgbGlnaHQgPSB7XHJcblx0bmFtZTogXCJsaWdodFwiLFxyXG5cdGJhY2tncm91bmQ6IFwiI2Y4ZjhmMlwiLFxyXG5cdHNreTogXCIjNjI3MmE0XCIsXHJcblx0Y3VycmVudF9saW5lOiBcIiM0NDQ3NWFcIixcclxuXHR0ZXh0X3ByaW1hcnk6IFwiIzI4MmEzNlwiLFxyXG5cdHRleHRfc2Vjb25kYXJ5OiBcIiNiZDkzZjlcIixcclxuXHRjb21tZW50OiBcIiNmZmZmZmZcIixcclxuXHRpbmZvOiBcIiM4YmU5ZmRcIixcclxuXHRzdWNjZXNzOiBcIiM1MGZhN2JcIixcclxuXHRvcmFuZ2U6IFwiI2ZmYjg2Y1wiLFxyXG5cdHBpbms6IFwiI2ZmNzljNlwiLFxyXG5cdGRhbmdlcjogXCIjZmY1NTU1XCIsXHJcblx0eWVsbG93OiBcIiNmMWZhOGNcIixcclxuXHR3aGl0ZTogXCIjZmZmXCIsXHJcblx0bmF2YmFyOiBcIiNmZmZcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlnaHQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtb2ppc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3dpdGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9