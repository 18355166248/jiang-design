(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"9kvl":function(e,t,n){"use strict";var r=n("FfOG");n.d(t,"a",(function(){return r["b"]}));n("bCY9")},jfwR:function(e,t,n){"use strict";function r(){var e=u(n("rjBl"));return r=function(){return e},e}function o(){var e=n("ncnp");return o=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var f=function(e){return e.render()},p=function(e,t){var n=[],u=e.match.params.uuid,i=void 0===e.location.query.wrapper,a=t[u];if(a){var p=c(c({},a.previewerProps),{},{hideActions:(a.previewerProps.hideActions||[]).concat(["EXTERNAL"])});void 0!==e.location.query.capture&&(p.motions=(p.motions||[]).slice(),p.motions.unshift("autoplay"),p.motions.every((function(e){return!e.startsWith("capture")}))&&p.motions.push("capture:[id|=root]")),n=i?[r()["default"].createElement(f,{render:function(){return(0,o().useMotions)(p.motions||[],"undefined"!==typeof window?document.documentElement:null),r()["default"].createElement("div",{},r()["default"].createElement(a.component))}})]:[p,r()["default"].createElement(a.component)]}return n};t["default"]=p}}]);