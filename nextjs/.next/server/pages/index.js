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
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.jsx");
/* harmony import */ var _styles_Global_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Global/Global */ "./styles/Global/Global.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.jsx");
/* harmony import */ var _components_Profile_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Profile/Profile */ "./components/Profile/Profile.jsx");
/* harmony import */ var _themes_light__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../themes/light */ "./themes/light.js");
/* harmony import */ var _themes_dark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../themes/dark */ "./themes/dark.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Projects/Projects */ "./components/Projects/Projects.jsx");

var _jsxFileName = "C:\\Users\\eduar\\Documents\\Projetos\\portfolio\\nextjs\\pages\\_app.js";






 // import usePersistedState from "../utils/utils";





const App = () => {
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("theme", _themes_light__WEBPACK_IMPORTED_MODULE_8__["default"]);

  const toggleTheme = () => {
    setTheme(theme.name === "light" ? _themes_dark__WEBPACK_IMPORTED_MODULE_9__["default"] : _themes_light__WEBPACK_IMPORTED_MODULE_8__["default"]);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const particlesJS = window.particlesJS;
    particlesJS.load("particles-js", "particles.json", function () {
      console.log("Success!");
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _themes_light__WEBPACK_IMPORTED_MODULE_8__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_reducer_reducer__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Global_Global__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
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
  foreground: "#f8f8f2",
  comment: "#6272a4",
  cyan: "#8be9fd",
  green: "#50fa7b",
  orange: "#ffb86c",
  pink: "#ff79c6",
  purple: "#bd93f9",
  red: "#ff5555",
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
  comment: "#6272a4",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanN4Iiwid2VicGFjazovLy8uL2NvbnRleHQvcmVkdWNlci9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9naXRIdWIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvRm9vdGVyL0Zvb3RlclN0eWxlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9HbG9iYWwvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9IZWFkZXIvSGVhZGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0xvYWRlci9Mb2FkZXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvUHJvZmlsZS9Qcm9maWxlU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1Byb2plY3RzL1Byb2plY3RzU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2RhcmsuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xpZ2h0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1vamlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJDb250ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwicHJvZmlsZSIsImVtYWlsIiwibGlua2VkaW4iLCJ1c2VFZmZlY3QiLCJnZXRVc2VyIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImdldEVtYWlsIiwicHJldmlvdXNTdGF0ZSIsImlzTG9hZGluZyIsImVycm9yIiwiaHRtbF91cmwiLCJuYW1lIiwiSGVhZGVyIiwidG9nZ2xlVGhlbWUiLCJzY3JvbGwiLCJzZXRTY3JvbGwiLCJib3R0b20iLCJzZXRCb3R0b20iLCJuYXZiYXJIZWlnaHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhYm91dCIsIndpbmRvdyIsInNjcm9sbFkiLCJvbnNjcm9sbCIsImlubmVySGVpZ2h0IiwiYm9keSIsInNjcm9sbEhlaWdodCIsIkxvYWRlciIsIlByb2plY3RzIiwiZGlzcGF0Y2giLCJlbW9qaXMiLCJyZXF1aXJlIiwiY2F0Y2giLCJ2YWx1ZSIsImF2YXRhcl91cmwiLCJsb2dpbiIsImJpbyIsInVuaWNvZGUiLCJyZXBvc2l0b3JpZXMiLCJzaG93UmVwb3NpdG9yaWVzIiwiZ2V0UmVwb3NpdG9yaWVzIiwic2V0VGltZW91dCIsInNlYXJjaCIsInRyaW0iLCJjb25jYXRRdWVyeSIsInJlc3VsdCIsIm1hcFJlcG9zaXRvcmllcyIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiZmlsdGVyIiwieCIsImluY2x1ZGVzIiwibGFuZ3VhZ2UiLCJkZXNjcmlwdGlvbiIsImxpc3RPZlJlcG9zIiwiY29uY2F0IiwicmVwb3NNYXAiLCJNYXAiLCJyZXBvcyIsInNldCIsImlkIiwicmVzdWx0T2ZNYXAiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJtYXAiLCJyZXBvIiwiZnVsbF9uYW1lIiwiaW5pdGlhbENvbnRleHQiLCJ0aGVtZSIsImxpZ2h0IiwiY3JlYXRlQ29udGV4dCIsInJlZHVjZXIiLCJhY3Rpb24iLCJuZXdTdGF0ZSIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsIkNvbnRleHRDb25zdW1lciIsIkNvbnN1bWVyIiwiZW52aXJvbm1lbnQiLCJ1cmwiLCJ1c2VyIiwicHVibGljIiwiQXBwIiwic2V0VGhlbWUiLCJkYXJrIiwicGFydGljbGVzSlMiLCJsb2FkIiwiY29uc29sZSIsImxvZyIsIkluZGV4UGFnZSIsImF4aW9zIiwiZ2V0IiwiRm9vdGVyU3R5bGUiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImJhY2tncm91bmQiLCJmb3JlZ3JvdW5kIiwiY29tbWVudCIsImN1cnJlbnRfbGluZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiSGVhZGVyU3R5bGUiLCJMb2FkZXJTdHlsZSIsIlByb2ZpbGVTdHlsZSIsInNreSIsIlByb2plY3RTdHlsZSIsImN5YW4iLCJncmVlbiIsIm9yYW5nZSIsInBpbmsiLCJwdXJwbGUiLCJyZWQiLCJ5ZWxsb3ciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0Es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Uk07QUFTYkMsUUFBTSxFQUFFLFNBVEs7QUFVYkMsTUFBSSxFQUFFLFNBVk87QUFXYkMsUUFBTSxFQUFFLFNBWEs7QUFZYkMsS0FBRyxFQUFFLFNBWlE7QUFhYkMsUUFBTSxFQUFFO0FBYkssQ0FBZDtBQWdCZTVDLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDaEJBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvcmVkdWNlci9yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IGdldEVtYWlsLCBnZXRVc2VyIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dpdEh1Yi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiwgQWlPdXRsaW5lTWFpbCwgQWlGaWxsTGlua2VkaW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgRm9vdGVyU3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0Zvb3Rlci9Gb290ZXJTdHlsZVwiO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCkge1xyXG5cdGNvbnN0IHsgY29udGV4dCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuXHRcdHByb2ZpbGU6IHt9LFxyXG5cdFx0ZW1haWw6IFwiXCIsXHJcblx0XHRsaW5rZWRpbjogXCJcIlxyXG5cdH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0VXNlcigpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRzZXRTdGF0ZSh7IHByb2ZpbGU6IHJlc3BvbnNlLmRhdGEgfSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRnZXRFbWFpbCgpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRzZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XHJcblx0XHRcdFx0Li4ucHJldmlvdXNTdGF0ZSxcclxuXHRcdFx0XHRlbWFpbDogXCJlZHVhcmRvZHVzaWtAZ21haWwuY29tXCIsXHJcblx0XHRcdFx0bGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2VkdWFyZG8tZG9zLXNhbnRvcy1kdXNpay0wOTUxMDAxMjAvXCJcclxuXHRcdFx0fSkpO1xyXG5cdFx0fSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZvb3RlclN0eWxlPlxyXG5cdFx0XHR7IWNvbnRleHQuaXNMb2FkaW5nICYmICFjb250ZXh0LmVycm9yID8gKFxyXG5cdFx0XHRcdDxFbGVtZW50IG5hbWU9XCJjb250YWN0XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2BtYWlsdG86JHtzdGF0ZS5lbWFpbH1gfSB0YXJnZXQ9XCJfdG9wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWlPdXRsaW5lTWFpbCAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtzdGF0ZS5wcm9maWxlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWlGaWxsR2l0aHViIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e3N0YXRlLmxpbmtlZGlufSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWlGaWxsTGlua2VkaW4gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdERldmVsb3BlZCBieSA8c3Ryb25nPntzdGF0ZS5wcm9maWxlLm5hbWV9PC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9FbGVtZW50PlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDw+PC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8L0Zvb3RlclN0eWxlPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCI7XHJcbmltcG9ydCB7IEhlYWRlclN0eWxlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9IZWFkZXIvSGVhZGVyU3R5bGVcIjtcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9yZWR1Y2VyL3JlZHVjZXJcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IHRvZ2dsZVRoZW1lIH0pID0+IHtcclxuXHQvLyBjb25zdCB7IG5hbWUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuXHRjb25zdCB7IGNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblx0Y29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbYm90dG9tLCBzZXRCb3R0b21dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IG5hdmJhckhlaWdodCA9IDU2O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFib3V0ID0gd2luZG93LnNjcm9sbFkgPiBuYXZiYXJIZWlnaHQ7XHJcblx0XHRcdGlmIChhYm91dCAhPT0gc2Nyb2xsKSB7XHJcblx0XHRcdFx0c2V0U2Nyb2xsKGFib3V0KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0d2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAod2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnNjcm9sbFkgPj0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpIHtcclxuXHRcdFx0XHRzZXRCb3R0b20odHJ1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0Qm90dG9tKGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxIZWFkZXJTdHlsZT5cclxuXHRcdFx0PGhlYWRlciBjbGFzc05hbWU9e1wiaGVhZGVyIFwiICsgKHNjcm9sbCA/IFwiY29sb3JcIiA6IFwidHJhbnNwYXJlbnRcIil9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG5cdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlQ2xhc3M9eyFib3R0b20gPyBcImFjdGl2ZSBcIiA6IFwicmVtb3ZlXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvPVwiYWJvdXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHk9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0PXstMTUwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0R5bmFtaWM9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uPXsxMDAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxheT17NTB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cImFib3V0XCJcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWJvdXRcclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUNsYXNzPXshYm90dG9tID8gXCJhY3RpdmUgXCIgOiBcInJlbW92ZVwifVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0bz1cInByb2plY3RzXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldD17LTE1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXNEeW5hbWljPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17MTAwMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsYXk9ezUwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJwcm9qZWN0c1wiXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByb2plY3RzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2JvdHRvbSA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0bz1cImNvbnRhY3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHk9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0PXswfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17MTAwMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXNEeW5hbWljPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxheT17NTB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiY29udGFjdFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhY3RcclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG5cdFx0XHRcdFx0XHQ8U3dpdGNoXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RvZ2dsZVRoZW1lfVxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2NvbnRleHQgPT09IFwiZGFya1wifVxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWRJY29uPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHR1bmNoZWNrZWRJY29uPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezE0fVxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoPXszMn1cclxuXHRcdFx0XHRcdFx0XHRvZmZDb2xvcj1cIiM5OTk5OTlcIlxyXG5cdFx0XHRcdFx0XHRcdGhhbmRsZURpYW1ldGVyPXsyMH1cclxuXHRcdFx0XHRcdFx0XHRvbkNvbG9yPVwiIzc5QjZGMlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9oZWFkZXI+XHJcblx0XHQ8L0hlYWRlclN0eWxlPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTG9hZGVyU3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0xvYWRlci9Mb2FkZXJTdHlsZVwiO1xyXG5cclxuY29uc3QgTG9hZGVyID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8TG9hZGVyU3R5bGU+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+XHJcblx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0xvYWRlclN0eWxlPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XHJcbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9yZWR1Y2VyL3JlZHVjZXJcIjtcclxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9naXRIdWIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQcm9maWxlU3R5bGUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL1Byb2ZpbGUvUHJvZmlsZVN0eWxlXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cygpIHtcclxuXHRjb25zdCB7IGNvbnRleHQsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cdGNvbnN0IGVtb2ppcyA9IHJlcXVpcmUoXCJlbW9qaXNcIik7XHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcblx0XHRwcm9maWxlOiB7fVxyXG5cdH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0VXNlcigpXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRzZXRTdGF0ZSh7IHByb2ZpbGU6IHJlc3BvbnNlLmRhdGEgfSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaCgoKSA9PiB7XHJcblx0XHRcdFx0ZGlzcGF0Y2goeyBuYW1lOiBcImVycm9yXCIsIHZhbHVlOiB0cnVlIH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9LCBbZGlzcGF0Y2hdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxFbGVtZW50IG5hbWU9XCJhYm91dFwiPlxyXG5cdFx0XHQ8UHJvZmlsZVN0eWxlPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1wYXJ0aWNsZXMtanNcIj5cclxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJwYXJ0aWNsZXMtanNcIj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtZGV0YWlsc1wiPlxyXG5cdFx0XHRcdFx0eyFjb250ZXh0LmlzTG9hZGluZyAmJiAhY29udGV4dC5lcnJvciA/IChcclxuXHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHR5cGU9XCJpbWFnZVwiIHNyYz17c3RhdGUucHJvZmlsZS5hdmF0YXJfdXJsfSBhbHQ9e3N0YXRlLnByb2ZpbGUubG9naW59IC8+XHJcblx0XHRcdFx0XHRcdFx0PGgxPntzdGF0ZS5wcm9maWxlLm5hbWV9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+RGV2ZWxvcGVyPC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8cD57c3RhdGUucHJvZmlsZS5iaW99PC9wPlxyXG5cdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDw+PC8+XHJcblx0XHRcdFx0XHQpfXtcIiBcIn1cclxuXHRcdFx0XHRcdHshY29udGV4dC5pc0xvYWRpbmcgJiYgY29udGV4dC5lcnJvciA/IChcclxuXHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHRcdDxoMz4ge2Vtb2ppcy51bmljb2RlKFwiZXJyb3IgbG9hZGluZywgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlciA6c29iOlwiKX0gPC9oMz5cclxuXHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDw+PC8+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L1Byb2ZpbGVTdHlsZT5cclxuXHRcdDwvRWxlbWVudD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL0xvYWRlci9Mb2FkZXJcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3JlZHVjZXIvcmVkdWNlclwiO1xyXG5pbXBvcnQgeyBnZXRSZXBvc2l0b3JpZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2l0SHViLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IFByb2plY3RTdHlsZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvUHJvamVjdHMvUHJvamVjdFN0eWxlXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cygpIHtcclxuXHRjb25zdCB7IGNvbnRleHQsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cdGNvbnN0IGVtb2ppcyA9IHJlcXVpcmUoXCJlbW9qaXNcIik7XHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcblx0XHRyZXBvc2l0b3JpZXM6IFtdLFxyXG5cdFx0c2hvd1JlcG9zaXRvcmllczogW11cclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGdldFJlcG9zaXRvcmllcygpXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRzZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XHJcblx0XHRcdFx0XHQuLi5wcmV2aW91c1N0YXRlLFxyXG5cdFx0XHRcdFx0cmVwb3NpdG9yaWVzOiByZXNwb25zZS5kYXRhLFxyXG5cdFx0XHRcdFx0c2hvd1JlcG9zaXRvcmllczogcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHRcdH0pKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgbmFtZTogXCJpc0xvYWRpbmdcIiwgdmFsdWU6IGZhbHNlIH0pO1xyXG5cdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKCkgPT4ge1xyXG5cdFx0XHRcdGRpc3BhdGNoKHsgbmFtZTogXCJpc0xvYWRpbmdcIiwgdmFsdWU6IGZhbHNlIH0pO1xyXG5cdFx0XHRcdGRpc3BhdGNoKHsgbmFtZTogXCJlcnJvclwiLCB2YWx1ZTogdHJ1ZSB9KTtcclxuXHRcdFx0fSk7XHJcblx0fSwgW2Rpc3BhdGNoXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IGNvbnRleHQuc2VhcmNoO1xyXG5cdFx0aWYgKHZhbHVlICYmIHZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xyXG5cdFx0XHRjb25zdCByZXBvc2l0b3JpZXMgPSBjb25jYXRRdWVyeSh2YWx1ZSk7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG1hcFJlcG9zaXRvcmllcyhyZXBvc2l0b3JpZXMpO1xyXG5cclxuXHRcdFx0aWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0c2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xyXG5cdFx0XHRcdFx0Li4ucHJldmlvdXNTdGF0ZSxcclxuXHRcdFx0XHRcdHNob3dSZXBvc2l0b3JpZXM6IHJlc3VsdFxyXG5cdFx0XHRcdH0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xyXG5cdFx0XHRcdC4uLnByZXZpb3VzU3RhdGUsXHJcblx0XHRcdFx0c2hvd1JlcG9zaXRvcmllczogc3RhdGUucmVwb3NpdG9yaWVzXHJcblx0XHRcdH0pKTtcclxuXHRcdH1cclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuXHR9LCBbY29udGV4dC5zZWFyY2hdKTtcclxuXHJcblx0Y29uc3QgY29uY2F0UXVlcnkgPSB2YWx1ZSA9PiB7XHJcblx0XHR2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRjb25zdCBuYW1lID0gc3RhdGUucmVwb3NpdG9yaWVzLmZpbHRlcih4ID0+ICh4Lm5hbWUgPyB4Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSkgOiBudWxsKSk7XHJcblx0XHRjb25zdCBsYW5ndWFnZSA9IHN0YXRlLnJlcG9zaXRvcmllcy5maWx0ZXIoeCA9PiAoeC5sYW5ndWFnZSA/IHgubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSkgOiBudWxsKSk7XHJcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IHN0YXRlLnJlcG9zaXRvcmllcy5maWx0ZXIoeCA9PlxyXG5cdFx0XHR4LmRlc2NyaXB0aW9uID8geC5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKSA6IG51bGxcclxuXHRcdCk7XHJcblxyXG5cdFx0bGV0IGxpc3RPZlJlcG9zID0gbmFtZS5jb25jYXQobGFuZ3VhZ2UpO1xyXG5cdFx0bGlzdE9mUmVwb3MgPSBsaXN0T2ZSZXBvcy5jb25jYXQoZGVzY3JpcHRpb24pO1xyXG5cclxuXHRcdHJldHVybiBsaXN0T2ZSZXBvcztcclxuXHR9O1xyXG5cclxuXHRjb25zdCBtYXBSZXBvc2l0b3JpZXMgPSByZXBvc2l0b3JpZXMgPT4ge1xyXG5cdFx0Y29uc3QgcmVwb3NNYXAgPSBuZXcgTWFwKCk7XHJcblx0XHRmb3IgKGNvbnN0IHJlcG9zIG9mIHJlcG9zaXRvcmllcykge1xyXG5cdFx0XHRyZXBvc01hcC5zZXQocmVwb3MuaWQsIHJlcG9zKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IHJlc3VsdE9mTWFwID0gWy4uLnJlcG9zTWFwLnZhbHVlcygpXTtcclxuXHRcdHJldHVybiByZXN1bHRPZk1hcDtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFByb2plY3RTdHlsZT5cclxuXHRcdFx0eyFjb250ZXh0LmlzTG9hZGluZyA/IChcclxuXHRcdFx0XHQ8RWxlbWVudCBuYW1lPVwicHJvamVjdHNcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVwb3NpdG9yaWVzXCI+XHJcblx0XHRcdFx0XHRcdHtzdGF0ZS5yZXBvc2l0b3JpZXMgJiYgc3RhdGUuc2hvd1JlcG9zaXRvcmllcy5sZW5ndGggPiAwID8gKFxyXG5cdFx0XHRcdFx0XHRcdHN0YXRlLnNob3dSZXBvc2l0b3JpZXMubWFwKHJlcG8gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZXBvc2l0b3J5XCIga2V5PXtyZXBvLmlkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtyZXBvLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVwby5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aT57cmVwby5mdWxsX25hbWV9PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPntlbW9qaXMudW5pY29kZShyZXBvLmRlc2NyaXB0aW9uKX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGFuZ3VhZ2VcIj57cmVwby5sYW5ndWFnZX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQpIDogIWNvbnRleHQuZXJyb3IgPyAoXHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibm8tcmVwb1wiPntlbW9qaXMudW5pY29kZShcIk5vIHJlcG9zaXRvcnkgZm91bmQgOnNvYjpcIil9PC9wPlxyXG5cdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdDw+PC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PExvYWRlciAvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9Qcm9qZWN0U3R5bGU+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBsaWdodCBmcm9tIFwiLi4vLi4vdGhlbWVzL2xpZ2h0XCI7XHJcblxyXG5jb25zdCBpbml0aWFsQ29udGV4dCA9IHtcclxuXHRzZWFyY2g6IFwiXCIsXHJcblx0aXNMb2FkaW5nOiB0cnVlLFxyXG5cdGVycm9yOiBmYWxzZSxcclxuXHR0aGVtZTogbGlnaHRcclxufTtcclxuXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsQ29udGV4dCwgYWN0aW9uKSA9PiB7XHJcblx0Y29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcblx0bmV3U3RhdGVbYWN0aW9uLm5hbWVdID0gYWN0aW9uLnZhbHVlO1xyXG5cdHJldHVybiBuZXdTdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHRjb25zdCBbY29udGV4dCA9IGluaXRpYWxDb250ZXh0LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIpO1xyXG5cdGNvbnN0IHZhbHVlID0geyBjb250ZXh0LCBkaXNwYXRjaCB9O1xyXG5cdHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xyXG59O1xyXG5cclxuY29uc3QgQ29udGV4dENvbnN1bWVyID0gQ29udGV4dC5Db25zdW1lcjtcclxuZXhwb3J0IHsgQ29udGV4dCwgQ29udGV4dFByb3ZpZGVyLCBDb250ZXh0Q29uc3VtZXIgfTtcclxuIiwiZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG5cdHVybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL1wiLFxyXG5cdHVzZXI6IFwiRUR1c2lrXCIsXHJcblx0cHVibGljOiBcImV2ZW50cy9wdWJsaWNcIlxyXG59O1xyXG4iLCJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9yZWR1Y2VyL3JlZHVjZXJcIjtcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9HbG9iYWwvR2xvYmFsXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5cclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlXCI7XHJcbi8vIGltcG9ydCB1c2VQZXJzaXN0ZWRTdGF0ZSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuXHJcbmltcG9ydCBsaWdodCBmcm9tIFwiLi4vdGhlbWVzL2xpZ2h0XCI7XHJcbmltcG9ydCBkYXJrIGZyb20gXCIuLi90aGVtZXMvZGFya1wiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuXHRjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwidGhlbWVcIiwgbGlnaHQpO1xyXG5cdGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG5cdFx0c2V0VGhlbWUodGhlbWUubmFtZSA9PT0gXCJsaWdodFwiID8gZGFyayA6IGxpZ2h0KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgcGFydGljbGVzSlMgPSB3aW5kb3cucGFydGljbGVzSlM7XHJcblx0XHRwYXJ0aWNsZXNKUy5sb2FkKFwicGFydGljbGVzLWpzXCIsIFwicGFydGljbGVzLmpzb25cIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3MhXCIpO1xyXG5cdFx0fSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFRoZW1lUHJvdmlkZXIgdGhlbWU9e2xpZ2h0fT5cclxuXHRcdFx0PENvbnRleHRQcm92aWRlcj5cclxuXHRcdFx0XHQ8R2xvYmFsU3R5bGUgLz5cclxuXHRcdFx0XHQ8SGVhZGVyIHRvZ2dsZVRoZW1lPXt0b2dnbGVUaGVtZX0gLz5cclxuXHRcdFx0XHQ8UHJvZmlsZSAvPlxyXG5cdFx0XHRcdDxQcm9qZWN0cyAvPlxyXG5cdFx0XHRcdDxGb290ZXIgLz5cclxuXHRcdFx0PC9Db250ZXh0UHJvdmlkZXI+XHJcblx0XHQ8L1RoZW1lUHJvdmlkZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL19hcHBcIjtcclxuXHJcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IChcclxuXHQ8ZGl2PlxyXG5cdFx0PEFwcCAvPlxyXG5cdDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmVwb3NpdG9yaWVzID0gKCkgPT4ge1xyXG5cdHJldHVybiBheGlvcy5nZXQoYCR7ZW52aXJvbm1lbnQudXJsfSR7ZW52aXJvbm1lbnQudXNlcn0vcmVwb3NgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKCkgPT4ge1xyXG5cdHJldHVybiBheGlvcy5nZXQoYCR7ZW52aXJvbm1lbnQudXJsfSR7ZW52aXJvbm1lbnQudXNlcn1gKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRFbWFpbCA9ICgpID0+IHtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KGAke2Vudmlyb25tZW50LnVybH0ke2Vudmlyb25tZW50LnVzZXJ9LyR7ZW52aXJvbm1lbnQucHVibGljfWApO1xyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlclN0eWxlID0gc3R5bGVkLmRpdmBcclxuXHJcbi5mb290ZXIge1xyXG4gIC5zb2NpYWwge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iYWNrZ3JvdW5kfTtcclxuICAgIHBhZGRpbmctdG9wOiA3OXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgICBhIHsgIFxyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb3JlZ3JvdW5kfTtcclxuICAgICAgc3ZnIHtcclxuICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggNXB4OyAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICA6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb21tZW50fTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb3B5cmlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jdXJyZW50X2xpbmV9O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29tbWVudH07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkdGV4dF9wcmltYXJ5O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBAaW5jbHVkZSBmb250X3ByaW1hcnk7IFxyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcmVncm91bmR9O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWAgIFxyXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4gICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJhY2tncm91bmR9O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9yZWdyb3VuZH07XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICB9XHJcblxyXG4gIGJvZHksIGlucHV0LCBidXR0b24ge1xyXG4gICAgZm9udDogMTRweCBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuXHJcbiAgI3Jvb3Qge1xyXG4gICAgbWF4LXdpZHRoOiAxMzMzcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDBweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICA6OnNlbGVjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZGFya2VzdDtcclxuICAgIGNvbG9yOiAkbGlnaHQ7ICAgIFxyXG4gIH1cclxuXHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH0gIFxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZDRkNGQztcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI0IyQjJCMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWw6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTk5OTk5O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJTdHlsZSA9IHN0eWxlZC5kaXZgXHJcblxyXG4uaGVhZGVyIHtcclxuICAudHJhbnNwYXJlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBAaW5jbHVkZSBmb250X3ByaW1hcnk7XHJcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbjtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcclxuICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcblxyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgIGNvbG9yOiAkdGV4dF9zZWNvbmRhcnk7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICB1bCB7ICAgICAgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwOyAgICAgICAgIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAuNWVtIDIuOGVtO1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMycHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogLjVlbSAxLjhlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMWVtXHJcbiAgICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogLjJlbSAuN2VtXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDBweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuMWVtIC41ZW1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjY1ZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNjVlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRsaWdodDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICRsaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zd2l0Y2gge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICB9XHJcbn1cclxuXHJcbi5jb2xvciB7XHJcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAkc2Vjb25kYXJ5O1xyXG5cclxuICAubmF2YmFyIHtcclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IDBlbSAwIC41ZW07XHJcbiAgICB9XHJcbiAgfSBcclxufVxyXG5gO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRlclN0eWxlID0gc3R5bGVkLmRpdmBcclxuICAubG9hZGVyIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkaW5mbzsgICAgXHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTUwcHgpO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxNTBweCk7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmcgMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAubG9hZGVyIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gIH0gICBcclxuXHJcbiAgQGtleWZyYW1lcyBsb2FkaW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcclxuICAgICAgb3BhY2l0eTowLjg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmcge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XHJcbiAgICAgIG9wYWNpdHk6MC44O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG5cclxuICBAaW5jbHVkZSBmb250X3NlY29uZGFyeTtcclxuICBjb2xvcjogJGxpZ2h0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuYmFja2dyb3VuZC1wYXJ0aWNsZXMtanMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNreX0sIHRyYW5zcGFyZW50KTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlOyAgICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgfVxyXG5cclxuICAjcGFydGljbGVzLWpzIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNzB2aDtcclxuICB9XHJcblxyXG4gIC5wcm9maWxlLWRldGFpbHMge1xyXG4gICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAgIHdpZHRoOiAxMDAlOyAgIFxyXG4gICAgICBwYWRkaW5nOiAxMHZoIDBweDsgXHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgNXB4ICR0ZXh0X3ByaW1hcnk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfSAgICBcclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmb250X3ByaW1hcnk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICAgIGNvbG9yOiAkbGlnaHQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDY4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyAgICAgICAgXHJcbiAgICAgICAgICBtYXJnaW46IDI1cHggMDsgXHJcbiAgICAgICAgICBAaW5jbHVkZSBmb250X3ByaW1hcnk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDU7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmb250X3ByaW1hcnk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgIGNvbG9yOiAkdGV4dF9zZWNvbmRhcnk7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MjBweCkge1xyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM4MHB4KSB7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZ2dztcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzgwcHgpIHsgIFxyXG4gICAgICAgICAgcGFkZGluZzogOHZoIDA7XHJcbiAgICAgICAgICBoMSwgaDIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfSAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2NjBweCkgeyAgXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgfSAgIFxyXG5cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1NjBweCkgeyAgXHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RTdHlsZSA9IHN0eWxlZC5kaXZgXHJcblxyXG4ucmVwb3NpdG9yaWVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtaW4taGVpZ2h0OiAyMnZoO1xyXG5cclxuICBpIHtcclxuICAgIGNvbG9yOiAkd2FybmluZztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7ICAgICAgXHJcbiAgICBjb2xvcjogJGluZm87XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJlcG9zaXRvcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XHJcbiAgICBjb2xvcjogJGxpZ2h0O1xyXG4gICAgQGluY2x1ZGUgZm9udF9jb2RlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAuMjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMTVweCAxNXB4O1xyXG4gICAgZmxleDogMSAxIDM0MHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBjb2xvcjogJHRleHRfcHJpbWFyeTtcclxuICB9XHJcblxyXG4gIHAubGFuZ3VhZ2Uge1xyXG4gICAgY29sb3I6ICRsaWdodDsgIFxyXG4gIH1cclxuICAgIFxyXG4gIHAubm8tcmVwbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAkdGV4dF9zZWNvbmRhcnk7XHJcbiAgICBAaW5jbHVkZSBmb250X3NlY29uZGFyeTtcclxuICB9XHJcbn1gO1xyXG4iLCJjb25zdCBkYXJrID0ge1xyXG5cdG5hbWU6IFwiZGFya1wiLFxyXG5cdGJhY2tncm91bmQ6IFwiIzI4MmEzNlwiLFxyXG5cdHNreTogXCIjMjMyNzQxXCIsXHJcblx0Y3VycmVudF9saW5lOiBcIiM0NDQ3NWFcIixcclxuXHRmb3JlZ3JvdW5kOiBcIiNmOGY4ZjJcIixcclxuXHRjb21tZW50OiBcIiM2MjcyYTRcIixcclxuXHRjeWFuOiBcIiM4YmU5ZmRcIixcclxuXHRncmVlbjogXCIjNTBmYTdiXCIsXHJcblx0b3JhbmdlOiBcIiNmZmI4NmNcIixcclxuXHRwaW5rOiBcIiNmZjc5YzZcIixcclxuXHRwdXJwbGU6IFwiI2JkOTNmOVwiLFxyXG5cdHJlZDogXCIjZmY1NTU1XCIsXHJcblx0eWVsbG93OiBcIiNmMWZhOGNcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFyaztcclxuIiwiY29uc3QgbGlnaHQgPSB7XHJcblx0bmFtZTogXCJsaWdodFwiLFxyXG5cdGJhY2tncm91bmQ6IFwiI2Y4ZjhmMlwiLFxyXG5cdHNreTogXCIjNjI3MmE0XCIsXHJcblx0Y3VycmVudF9saW5lOiBcIiM0NDQ3NWFcIixcclxuXHRmb3JlZ3JvdW5kOiBcIiMyODJhMzZcIixcclxuXHRjb21tZW50OiBcIiM2MjcyYTRcIixcclxuXHRjeWFuOiBcIiM4YmU5ZmRcIixcclxuXHRncmVlbjogXCIjNTBmYTdiXCIsXHJcblx0b3JhbmdlOiBcIiNmZmI4NmNcIixcclxuXHRwaW5rOiBcIiNmZjc5YzZcIixcclxuXHRwdXJwbGU6IFwiI2JkOTNmOVwiLFxyXG5cdHJlZDogXCIjZmY1NTU1XCIsXHJcblx0eWVsbG93OiBcIiNmMWZhOGNcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlnaHQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtb2ppc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3dpdGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9