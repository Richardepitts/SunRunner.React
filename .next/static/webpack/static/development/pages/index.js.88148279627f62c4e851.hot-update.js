webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Dock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Dock */ "./src/components/Dock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/tree-button/tree-button */ "./src/shared/tree-button/tree-button.js");
/* harmony import */ var _shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/medical-info-button/medical-info-button */ "./src/shared/medical-info-button/medical-info-button.js");
/* harmony import */ var _shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/doctors-button/doctors-button */ "./src/shared/doctors-button/doctors-button.js");
/* harmony import */ var _shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/lawyers-button/lawyers-button */ "./src/shared/lawyers-button/lawyers-button.js");
/* harmony import */ var _components_Business__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Business */ "./src/components/Business.js");
/* harmony import */ var _components_Consumer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Consumer */ "./src/components/Consumer.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.js");

var _jsxFileName = "/Users/websites/Documents/OEA-Next/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







 // import LegalInfoButton from '../shared/legal-info-button/legal-info-button'
// import ReviewsButton from '../shared/reviews-button/reviews-button';
// import NewsButton from '../shared/news-button/news-button';
// import InvestmentsButton from '../shared/investments-button/investments-button';
// import DashboardButton from '../shared/dashboard-button/dashboard-button';
// import ProductsButtons from '../shared/products-buttons/products-buttons';
// import MessagingButtons from '../shared/messaging-buttons/messaging-buttons';
// import ConsumerFinancialsButtons from '../shared/consumer-financials-buttons/consumer-financials-buttons';
// import RemainingButtons from '../shared/remaining-buttons/remaining-buttons';




 // So you want it to conditionally render the consumer or business component contingent on whether business is true
// Same with the dock

let consumer = "/Consumer.png";
let business = "/Business.png";
class Index extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      soundBoolean: false,
      balloonBoolean: false,
      panelOpen: false,
      businessBoolean: true,
      menuBoolean: true,
      navBoolean: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "twirlFunction", () => {
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });
      console.log("parent businessBoolean State changed:" + this.state.businessBoolean);

      if (this.state.businessBoolean) {
        console.log("True logged");
        let business = document.querySelector(".business");
        business.style.display = "inline";
        let consumer = document.querySelector(".consumer");
        consumer.style.display = "none";
      } else if (!this.state.businessBoolean) {
        console.log("false logged");
        let consumer = document.querySelector(".consumer");
        consumer.style.display = "none";
        let business = document.querySelector(".consumer");
        business.style.display = "none";
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "soundFunction", () => {
      this.setState({
        soundBoolean: !this.state.soundBoolean
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "menuFunction", () => {
      this.setState({
        menuBoolean: !this.state.menuBoolean
      });

      if (this.state.menuBoolean) {
        let menu = document.querySelector(".menu");
        menu.style.display = "inline";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "none";
      } else if (!this.state.menuBoolean) {
        let menu = document.querySelector(".menu");
        menu.style.display = "none";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "inline";
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navFunction", () => {
      this.setState({
        navBoolean: !this.state.navBoolean
      });

      if (this.state.navBoolean) {
        let nav = document.querySelector(".nav");
        nav.style.display = "inline";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "none";
      } else if (!this.state.menuBoolean) {
        let nav = document.querySelector(".nav");
        nav.style.display = "none";
        let mainContainer = document.querySelector(".main-container");
        mainContainer.style.display = "inline";
      }
    });
  }

  businessClickedParent(value) {}

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-804348549" + " " + "parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-804348549" + " " + "child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(_components_Dock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      nav: this.navFunction,
      twirl: this.twirlFunction,
      sound: this.soundFunction,
      menu: this.menuFunction,
      onClick: this.toggleDock,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-804348549" + " " + "business",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx(_components_Business__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-804348549" + " " + "consumer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx(_components_Consumer__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-804348549" + " " + "menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-804348549" + " " + "nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "804348549",
      __self: this
    }, ".mock-image.jsx-804348549{height:1536px;width:2048px;}.nav.jsx-804348549{display:none;}.menu.jsx-804348549{display:none;}.consumer.jsx-804348549{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.business.jsx-804348549{display:none;}.parent.jsx-804348549{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.image.jsx-804348549{width:1536px;height:2048px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRIZ0IsQUFJc0IsQUFLQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBU0EsYUF4QmpCLEFBSUEsQUFRQSxBQWFrQixDQTlCRixhQUNoQixBQThCQSwrQ0FsQkEsQUFRdUIsNkZBQ0ksbUdBQzNCIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvRG9jayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyZWVCdXR0b24gZnJvbSAnLi4vc2hhcmVkL3RyZWUtYnV0dG9uL3RyZWUtYnV0dG9uJztcbmltcG9ydCBNZWRpY2FsSW5mb0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbWVkaWNhbC1pbmZvLWJ1dHRvbi9tZWRpY2FsLWluZm8tYnV0dG9uJztcbmltcG9ydCBEb2N0b3JzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9kb2N0b3JzLWJ1dHRvbi9kb2N0b3JzLWJ1dHRvbic7XG5pbXBvcnQgTGF3eWVyc0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbGF3eWVycy1idXR0b24vbGF3eWVycy1idXR0b24nO1xuLy8gaW1wb3J0IExlZ2FsSW5mb0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbGVnYWwtaW5mby1idXR0b24vbGVnYWwtaW5mby1idXR0b24nXG4vLyBpbXBvcnQgUmV2aWV3c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvcmV2aWV3cy1idXR0b24vcmV2aWV3cy1idXR0b24nO1xuLy8gaW1wb3J0IE5ld3NCdXR0b24gZnJvbSAnLi4vc2hhcmVkL25ld3MtYnV0dG9uL25ld3MtYnV0dG9uJztcbi8vIGltcG9ydCBJbnZlc3RtZW50c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvaW52ZXN0bWVudHMtYnV0dG9uL2ludmVzdG1lbnRzLWJ1dHRvbic7XG4vLyBpbXBvcnQgRGFzaGJvYXJkQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9kYXNoYm9hcmQtYnV0dG9uL2Rhc2hib2FyZC1idXR0b24nO1xuLy8gaW1wb3J0IFByb2R1Y3RzQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvcHJvZHVjdHMtYnV0dG9ucy9wcm9kdWN0cy1idXR0b25zJztcbi8vIGltcG9ydCBNZXNzYWdpbmdCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9tZXNzYWdpbmctYnV0dG9ucy9tZXNzYWdpbmctYnV0dG9ucyc7XG4vLyBpbXBvcnQgQ29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvY29uc3VtZXItZmluYW5jaWFscy1idXR0b25zL2NvbnN1bWVyLWZpbmFuY2lhbHMtYnV0dG9ucyc7XG4vLyBpbXBvcnQgUmVtYWluaW5nQnV0dG9ucyBmcm9tICcuLi9zaGFyZWQvcmVtYWluaW5nLWJ1dHRvbnMvcmVtYWluaW5nLWJ1dHRvbnMnO1xuaW1wb3J0IEJ1c2luZXNzIGZyb20gJy4uL2NvbXBvbmVudHMvQnVzaW5lc3MnO1xuaW1wb3J0IENvbnN1bWVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29uc3VtZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xuXG4vLyBTbyB5b3Ugd2FudCBpdCB0byBjb25kaXRpb25hbGx5IHJlbmRlciB0aGUgY29uc3VtZXIgb3IgYnVzaW5lc3MgY29tcG9uZW50IGNvbnRpbmdlbnQgb24gd2hldGhlciBidXNpbmVzcyBpcyB0cnVlXG4vLyBTYW1lIHdpdGggdGhlIGRvY2tcblxubGV0IGNvbnN1bWVyID0gXCIvQ29uc3VtZXIucG5nXCJcbmxldCBidXNpbmVzcyA9IFwiL0J1c2luZXNzLnBuZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc291bmRCb29sZWFuOiBmYWxzZSxcbiAgICAgICAgYmFsbG9vbkJvb2xlYW46IGZhbHNlLFxuICAgICAgICBwYW5lbE9wZW46IGZhbHNlLFxuICAgICAgICBidXNpbmVzc0Jvb2xlYW46IHRydWUsXG4gICAgICAgIG1lbnVCb29sZWFuOiB0cnVlLFxuICAgICAgICBuYXZCb29sZWFuOiB0cnVlXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgIH1cblxuICAgIGJ1c2luZXNzQ2xpY2tlZFBhcmVudCh2YWx1ZSkge1xuXG4gICAgfVxuICAgIHR3aXJsRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2J1c2luZXNzQm9vbGVhbjogIXRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFufSlcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJlbnQgYnVzaW5lc3NCb29sZWFuIFN0YXRlIGNoYW5nZWQ6XCIgKyB0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbilcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYnVzaW5lc3NCb29sZWFuKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRydWUgbG9nZ2VkXCIpXG4gICAgICAgICAgICBsZXQgYnVzaW5lc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1c2luZXNzXCIpXG4gICAgICAgICAgICBidXNpbmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuICAgICAgICBsZXQgY29uc3VtZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnN1bWVyXCIpXG4gICAgICAgIGNvbnN1bWVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWxzZSBsb2dnZWRcIilcbiAgICAgICAgICAgIGxldCBjb25zdW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uc3VtZXJcIilcbiAgICAgICAgICAgIGNvbnN1bWVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IGJ1c2luZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25zdW1lclwiKVxuICAgICAgICAgICAgYnVzaW5lc3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb3VuZEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzb3VuZEJvb2xlYW46ICF0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbn0pXG4gICAgfVxuXG4gICAgbWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW51Qm9vbGVhbjogIXRoaXMuc3RhdGUubWVudUJvb2xlYW59KVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tZW51Qm9vbGVhbikgeyBcbiAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpXG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUubWVudUJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpXG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmF2Qm9vbGVhbjogIXRoaXMuc3RhdGUubmF2Qm9vbGVhbn0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm5hdkJvb2xlYW4pIHsgXG4gICAgICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIilcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLm1lbnVCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIilcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgPERvY2sgbmF2PXt0aGlzLm5hdkZ1bmN0aW9ufSB0d2lybD17dGhpcy50d2lybEZ1bmN0aW9ufSBzb3VuZD17IHRoaXMuc291bmRGdW5jdGlvbiB9IG1lbnU9e3RoaXMubWVudUZ1bmN0aW9ufSBvbkNsaWNrPXt0aGlzLnRvZ2dsZURvY2t9PjwvRG9jaz5cbiAgICAgICAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzXCI+XG4gICAgPEJ1c2luZXNzPjwvQnVzaW5lc3M+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyXCI+XG4gICAgPENvbnN1bWVyPjwvQ29uc3VtZXI+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgPE1lbnU+PC9NZW51PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICA8TmF2PjwvTmF2PlxuICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgIFxuXG4gICAgLm1vY2staW1hZ2UgeyBcbiAgICAgICAgaGVpZ2h0OjE1MzZweDtcbiAgICAgICAgd2lkdGg6MjA0OHB4O1xuICAgIH1cblxuICAgIC5uYXZ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1lbnUgeyBcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuY29uc3VtZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5idXNpbmVzcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnBhcmVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAuY2hpbGQge1xuICAgIH1cblxuICAgIC5pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIGhlaWdodDogMjA0OHB4O1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvY3VycmVudHByaWNlLmpzb24nKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBicGk6IGRhdGEuYnBpXG4gIH07XG59XG5cblxuLy8gPHZpZGVvIHByZWxvYWQ9XCJhdXRvXCIgYXV0b1BsYXkgbG9vcCBjbGFzc05hbWU9XCJmdWxsc2NyZWVuLXZpZGVvXCIgd2lkdGg9XCIxNTM2XCIgaGVpZ2h0PVwiMjA0OFwiPlxuLy8gPHNvdXJjZSBzcmM9XCIvVHJlZS5tcDRcIiBcbi8vICAgICB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XG4vLyAgIDwvdmlkZW8+XG5cbi8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuLy8gICAgIGNvbnN0IHZpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnVsbHNjcmVlbi12aWRlb1wiKVxuLy8gICAgIGNvbnNvbGUubG9nKHZpZClcbi8vICAgICB2aWQucGxheSgpXG4vLyB9XG5cbi8vIDxUcmVlQnV0dG9uPjwvVHJlZUJ1dHRvbj5cbi8vIDxNZWRpY2FsSW5mb0J1dHRvbj48L01lZGljYWxJbmZvQnV0dG9uPlxuLy8gPERvY3RvcnNCdXR0b24+PC9Eb2N0b3JzQnV0dG9uPlxuLy8gPExhd3llcnNCdXR0b24+PC9MYXd5ZXJzQnV0dG9uPlxuLy8gPExlZ2FsSW5mb0J1dHRvbj48L0xlZ2FsSW5mb0J1dHRvbj5cbi8vIDxSZXZpZXdzQnV0dG9uPjwvUmV2aWV3c0J1dHRvbj5cbi8vIDxOZXdzQnV0dG9uPjwvTmV3c0J1dHRvbj5cbi8vIDxJbnZlc3RtZW50c0J1dHRvbj48L0ludmVzdG1lbnRzQnV0dG9uPlxuLy8gPERhc2hib2FyZEJ1dHRvbj48L0Rhc2hib2FyZEJ1dHRvbj5cbi8vIDxQcm9kdWN0c0J1dHRvbnM+PC9Qcm9kdWN0c0J1dHRvbnM+XG4vLyA8TWVzc2FnaW5nQnV0dG9ucz48L01lc3NhZ2luZ0J1dHRvbnM+XG4vLyA8Q29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucz48L0NvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+XG4vLyA8UmVtYWluaW5nQnV0dG9ucz48L1JlbWFpbmluZ0J1dHRvbnM+Il19 */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/pages/index.js */"));
  }

}

Index.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi
  };
}; // <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
// <source src="/Tree.mp4" 
//     type="video/mp4"></source>
//   </video>
// componentDidMount() {
//     const vid = document.querySelector(".fullscreen-video")
//     console.log(vid)
//     vid.play()
// }
// <TreeButton></TreeButton>
// <MedicalInfoButton></MedicalInfoButton>
// <DoctorsButton></DoctorsButton>
// <LawyersButton></LawyersButton>
// <LegalInfoButton></LegalInfoButton>
// <ReviewsButton></ReviewsButton>
// <NewsButton></NewsButton>
// <InvestmentsButton></InvestmentsButton>
// <DashboardButton></DashboardButton>
// <ProductsButtons></ProductsButtons>
// <MessagingButtons></MessagingButtons>
// <ConsumerFinancialsButtons></ConsumerFinancialsButtons>
// <RemainingButtons></RemainingButtons>

/***/ })

})
//# sourceMappingURL=index.js.88148279627f62c4e851.hot-update.js.map