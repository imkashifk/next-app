(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{23646:function(e,t,r){var n=r(67228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},46860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(23646),o=r(46860),s=r(60379),i=r(98206);e.exports=function(e){return n(e)||o(e)||s(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},78e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((n=r(67294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},45646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(s.AmpStateContext))};var n,o=(n=r(67294))&&n.__esModule?n:{default:n},s=r(78e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,s=e.hasQuery,i=void 0!==s&&s;return r||o&&i}},72717:function(e,t,r){"use strict";var n=r(59713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var s,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(67294)),a=(s=r(11585))&&s.__esModule?s:{default:s},c=r(78e3),u=r(15850),l=r(45646);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var s=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?s=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?s=!1:t.add(o.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var l=p[c];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?s=!1:r.add(l);else{var d=o.props[l],f=n[l]||new Set;"name"===l&&i||!f.has(d)?(f.add(d),n[l]=f):s=!1}}}return s}}()).reverse().map((function(e,r){var s=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,i.default.cloneElement(e,a)}return i.default.cloneElement(e,{key:s})}))}var y=function(e){var t=e.children,r=i.useContext(c.AmpStateContext),n=i.useContext(u.HeadManagerContext);return i.default.createElement(a.default,{reduceComponentsToState:v,headManager:n,inAmpMode:l.isInAmpMode(r)},t)};t.default=y},11585:function(e,t,r){"use strict";var n=r(319),o=r(34575),s=r(93913),i=(r(81506),r(2205)),a=r(78585),c=r(29754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(67294));var d=function(e){i(r,e);var t=u(r);function r(e){var s;return o(this,r),(s=t.call(this,e)).emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(n(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=d},53009:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(4942),o=r(67294),s=r(9008),i=r(4298),a=function(){!function(){var e=document.querySelector(".cursor-inner"),t=document.querySelector(".cursor-outer");window.onmousemove=function(r){t.style.transform="translate("+r.clientX+"px, "+r.clientY+"px)",e.style.transform="translate("+r.clientX+"px, "+r.clientY+"px)",r.clientY,r.clientX},document.querySelector(".cursor-pointer")&&(document.querySelector(".cursor-pointer").addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),t.classList.add("cursor-hover")})),document.querySelector(".cursor-pointer").addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),t.classList.remove("cursor-hover")})),e.style.visibility="visible",t.style.visibility="visible"),document.querySelectorAll("a").forEach((function(r){r.addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),t.classList.add("cursor-hover")}))})),document.querySelectorAll("a").forEach((function(r){r.addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),t.classList.remove("cursor-hover")}))})),e.style.visibility="visible",t.style.visibility="visible"}()},c=r(85893),u=function(){return o.useEffect((function(){a()}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"mouse-cursor cursor-outer"}),(0,c.jsx)("div",{className:"mouse-cursor cursor-inner"})]})},l=function(){var e=document.querySelector(".progress-wrap path"),t=e.getTotalLength();e.style.transition=e.style.WebkitTransition="none",e.style.strokeDasharray=t+" "+t,e.style.strokeDashoffset=t,e.getBoundingClientRect(),e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear";var r=function(){var r=window.pageYOffset,n=document.documentElement.scrollHeight-window.innerHeight,o=t-r*t/n;e.style.strokeDashoffset=o};r(),window.addEventListener("scroll",r);var n=document.querySelector(".progress-wrap");window.addEventListener("scroll",(function(){window.pageYOffset>150?n.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")})),n.addEventListener("click",(function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},d=function(){return o.useEffect((function(){l()}),[]),(0,c.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,c.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,c.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})})},f=function(){Pace.on("start",(function(){document.querySelector("#preloader").classList.remove("isdone"),document.querySelector(".loading").classList.remove("isdone")})),Pace.on("done",(function(){document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")})),document.querySelector("body").classList.contains("pace-done")&&(document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")),window.addEventListener("load",(function(){document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone"),document.querySelector(".pace-running.pace-running")&&document.querySelector(".pace-running.pace-running").classList.remove("pace-running")}))},p=r(82806),v=function(){return o.useEffect((function(){var e=document.querySelector("body");p.QP?(f(),e.classList.contains("hideX")&&e.classList.remove("hideX")):e.classList.add("hideX")})),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"".concat(!0===p.QP?"showX":"hideX"),children:[(0,c.jsxs)("div",{className:"loading",children:[(0,c.jsx)("span",{children:"L"}),(0,c.jsx)("span",{children:"o"}),(0,c.jsx)("span",{children:"a"}),(0,c.jsx)("span",{children:"d"}),(0,c.jsx)("span",{children:"i"}),(0,c.jsx)("span",{children:"n"}),(0,c.jsx)("span",{children:"g"})]}),(0,c.jsx)("div",{id:"preloader"})]}),p.QP?(0,c.jsx)(i.default,{id:"pace",strategy:"beforeInteractive",src:"/js/pace.min.js"}):""]})};r(14375);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){var t=e.Component,r=e.pageProps;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.default,{children:[(0,c.jsx)("title",{children:"Vie"}),(0,c.jsx)("link",{rel:"icon",href:"/img/favicon.ico"})]}),(0,c.jsx)(u,{}),(0,c.jsx)(v,{}),(0,c.jsx)(t,h({},r)),(0,c.jsx)(d,{}),(0,c.jsx)(i.default,{id:"wow",src:"/js/wow.min.js"}),(0,c.jsx)(i.default,{strategy:"beforeInteractive",id:"splitting",src:"/js/splitting.min.js"}),(0,c.jsx)(i.default,{id:"simpleParallax",src:"/js/simpleParallax.min.js"}),(0,c.jsx)(i.default,{id:"isotope",strategy:"beforeInteractive",src:"/js/isotope.pkgd.min.js"}),(0,c.jsx)(i.default,{id:"wowInit",strategy:"lazyOnload",children:"new WOW().init();"})]})}},81780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(53009)}])},14375:function(){},9008:function(e,t,r){e.exports=r(72717)},4298:function(e,t,r){e.exports=r(72189)},4942:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},82806:function(e){"use strict";e.exports=JSON.parse('{"E8":"/img/logo-light.png","Q1":"/img/logo-dark.png","QP":true}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],(function(){return t(81780),t(69898)}));var r=e.O();_N_E=r}]);