(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[9],{100:function(r,t,e){"use strict";e.d(t,"a",(function(){return p}));var n=e(5),a=e.n(n),o=e(7),i=e.n(o),c=e(16),u=e.n(c),s=e(56);function f(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function l(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?f(Object(e),!0).forEach((function(t){i()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function p(r,t,e,n){var o=Object(s.a)(t);return function(){var t=u()(a.a.mark((function t(i,c,u,s){var f;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.trackingEnabled){t.next=3;break}return t.abrupt("return");case 3:return e(),f={send_to:"site_kit",event_category:i,event_label:u,value:s},t.abrupt("return",new Promise((function(r){var t,e,a=setTimeout((function(){n.console.warn('Tracking event "'.concat(c,'" (category "').concat(i,'") took too long to fire.')),r()}),1e3),u=function(){clearTimeout(a),r()};o("event",c,l(l({},f),{},{event_callback:u})),(null===(t=n._gaUserPrefs)||void 0===t||null===(e=t.ioo)||void 0===e?void 0:e.call(t))&&u()})));case 6:case"end":return t.stop()}}),t)})));return function(r,e,n,a){return t.apply(this,arguments)}}()}},1217:function(r,t,e){"use strict";e.r(t);var n=e(3),a=e.n(n),o=e(60),i=e(129),c=e(7),u=e.n(c),s=e(10),f=e.n(s),l=e(13);function p(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function d(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?p(Object(e),!0).forEach((function(t){u()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}var g={initialState:{},actions:{setValues:function(r,t){return f()(r&&"string"==typeof r,"a valid formName is required for setting values."),f()(Object(l.isPlainObject)(t),"formData must be an object."),{payload:{formName:r,formData:t},type:"SET_FORM_VALUES"}}},controls:{},reducer:function(r,t){var e=t.type,n=t.payload;switch(e){case"SET_FORM_VALUES":var a=n.formName,o=n.formData;return d(d({},r),{},u()({},a,d(d({},r[a]||{}),o)));default:return r}},resolvers:{},selectors:{getValue:function(r,t,e){return(r[t]||{})[e]},hasForm:function(r,t){return!!r[t]}}},v=e(29),b=Object(n.combineStores)(n.commonStore,g,Object(i.a)(v.a),Object(o.b)(v.a));b.initialState,b.actions,b.controls,b.reducer,b.resolvers,b.selectors;a.a.registerStore(v.a,b)},129:function(r,t,e){"use strict";e.d(t,"a",(function(){return v})),e.d(t,"c",(function(){return h})),e.d(t,"b",(function(){return m}));var n=e(23),a=e.n(n),o=e(7),i=e.n(o),c=e(5),u=e.n(c),s=e(10),f=e.n(s),l=e(3),p=e.n(l),d=e(38),g=e(9),v=function(r){var t;f()(r,"storeName is required to create a snapshot store.");var e={},n={deleteSnapshot:u.a.mark((function r(){var t;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,{payload:{},type:"DELETE_SNAPSHOT"};case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})),restoreSnapshot:u.a.mark((function r(){var t,e,n,a,o,i,c=arguments;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},e=t.clearAfterRestore,n=void 0===e||e,r.next=4,{payload:{},type:"RESTORE_SNAPSHOT"};case 4:if(a=r.sent,o=a.cacheHit,i=a.value,!o){r.next=13;break}return r.next=10,{payload:{snapshot:i},type:"SET_STATE_FROM_SNAPSHOT"};case 10:if(!n){r.next=13;break}return r.next=13,{payload:{},type:"DELETE_SNAPSHOT"};case 13:return r.abrupt("return",o);case 14:case"end":return r.stop()}}),r)})),createSnapshot:u.a.mark((function r(){var t;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,{payload:{},type:"CREATE_SNAPSHOT"};case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)}))},o=(t={},i()(t,"DELETE_SNAPSHOT",(function(){return Object(d.c)("datastore::cache::".concat(r))})),i()(t,"CREATE_SNAPSHOT",Object(l.createRegistryControl)((function(t){return function(){return Object(d.f)("datastore::cache::".concat(r),t.stores[r].store.getState())}}))),i()(t,"RESTORE_SNAPSHOT",(function(){return Object(d.d)("datastore::cache::".concat(r),g.b)})),t);return{initialState:e,actions:n,controls:o,reducer:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case"SET_STATE_FROM_SNAPSHOT":var i=o.snapshot,c=(i.error,a()(i,["error"]));return c;default:return r}}}},b=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.a;return Object.values(r.stores).filter((function(r){return Object.keys(r.getActions()).includes("restoreSnapshot")}))},h=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.a;return Promise.all(b(r).map((function(r){return r.getActions().createSnapshot()})))},m=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.a;return Promise.all(b(r).map((function(r){return r.getActions().restoreSnapshot()})))}},2:function(r,t){r.exports=googlesitekit.i18n},29:function(r,t,e){"use strict";e.d(t,"a",(function(){return n}));var n="core/forms"},3:function(r,t){r.exports=googlesitekit.data},35:function(r,t,e){"use strict";e.d(t,"a",(function(){return n})),e.d(t,"b",(function(){return a}));var n="_googlesitekitDataLayer",a="data-googlesitekit-gtag"},36:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return O})),e.d(t,"b",(function(){return m})),e.d(t,"c",(function(){return y}));var n=e(98),a=r._googlesitekitTrackingData||{},o=a.activeModules,i=void 0===o?[]:o,c=a.isSiteKitScreen,u=a.trackingEnabled,s=a.trackingID,f=a.referenceSiteURL,l=a.userIDHash,p=a.isAuthenticated,d={activeModules:i,trackingEnabled:u,trackingID:s,referenceSiteURL:f,userIDHash:l,isSiteKitScreen:c,userRoles:a.userRoles,isAuthenticated:p,pluginVersion:"1.139.0"},g=Object(n.a)(d),v=g.enableTracking,b=g.disableTracking,h=(g.isTrackingEnabled,g.initializeSnippet),m=g.trackEvent,y=g.trackEventOnce;function O(r){r?v():b()}c&&u&&h()}).call(this,e(26))},38:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return l})),e.d(t,"d",(function(){return m})),e.d(t,"f",(function(){return y})),e.d(t,"c",(function(){return O})),e.d(t,"e",(function(){return j})),e.d(t,"b",(function(){return w}));var n=e(5),a=e.n(n),o=e(16),i=e.n(o),c=(e(27),e(9));function u(r,t){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=function(r,t){if(!r)return;if("string"==typeof r)return s(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(r,t)}(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var n=0,a=function(){};return{s:a,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return i=r.done,r},e:function(r){c=!0,o=r},f:function(){try{i||null==e.return||e.return()}finally{if(c)throw o}}}}function s(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var f,l="googlesitekit_",p="".concat(l).concat("1.139.0","_").concat(r._googlesitekitBaseData.storagePrefix,"_"),d=["sessionStorage","localStorage"],g=[].concat(d),v=function(){var t=i()(a.a.mark((function t(e){var n,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r[e]){t.next=3;break}return t.abrupt("return",!1);case 3:return t.prev=3,o="__storage_test__",n.setItem(o,o),n.removeItem(o),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(3),t.abrupt("return",t.t0 instanceof DOMException&&(22===t.t0.code||1014===t.t0.code||"QuotaExceededError"===t.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.t0.name)&&0!==n.length);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(r){return t.apply(this,arguments)}}();function b(){return h.apply(this,arguments)}function h(){return(h=i()(a.a.mark((function t(){var e,n,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===f){t.next=2;break}return t.abrupt("return",f);case 2:e=u(g),t.prev=3,e.s();case 5:if((n=e.n()).done){t.next=15;break}if(o=n.value,!f){t.next=9;break}return t.abrupt("continue",13);case 9:return t.next=11,v(o);case 11:if(!t.sent){t.next=13;break}f=r[o];case 13:t.next=5;break;case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(3),e.e(t.t0);case 20:return t.prev=20,e.f(),t.finish(20);case 23:return void 0===f&&(f=null),t.abrupt("return",f);case 25:case"end":return t.stop()}}),t,null,[[3,17,20,23]])})))).apply(this,arguments)}var m=function(){var r=i()(a.a.mark((function r(t){var e,n,o,i,c,u,s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b();case 2:if(!(e=r.sent)){r.next=10;break}if(!(n=e.getItem("".concat(p).concat(t)))){r.next=10;break}if(o=JSON.parse(n),i=o.timestamp,c=o.ttl,u=o.value,s=o.isError,!i||c&&!(Math.round(Date.now()/1e3)-i<c)){r.next=10;break}return r.abrupt("return",{cacheHit:!0,value:u,isError:s});case 10:return r.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),y=function(){var t=i()(a.a.mark((function t(e,n){var o,i,u,s,f,l,d,g,v=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=v.length>2&&void 0!==v[2]?v[2]:{},i=o.ttl,u=void 0===i?c.b:i,s=o.timestamp,f=void 0===s?Math.round(Date.now()/1e3):s,l=o.isError,d=void 0!==l&&l,t.next=3,b();case 3:if(!(g=t.sent)){t.next=14;break}return t.prev=5,g.setItem("".concat(p).concat(e),JSON.stringify({timestamp:f,ttl:u,value:n,isError:d})),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(5),r.console.warn("Encountered an unexpected storage error:",t.t0),t.abrupt("return",!1);case 14:return t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[5,10]])})));return function(r,e){return t.apply(this,arguments)}}(),O=function(){var t=i()(a.a.mark((function t(e){var n,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:if(!(n=t.sent)){t.next=14;break}return t.prev=4,o=e.startsWith(l)?e:"".concat(p).concat(e),n.removeItem(o),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(4),r.console.warn("Encountered an unexpected storage error:",t.t0),t.abrupt("return",!1);case 14:return t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(r){return t.apply(this,arguments)}}(),j=function(){var t=i()(a.a.mark((function t(){var e,n,o,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:if(!(e=t.sent)){t.next=14;break}for(t.prev=4,n=[],o=0;o<e.length;o++)0===(i=e.key(o)).indexOf(l)&&n.push(i);return t.abrupt("return",n);case 10:return t.prev=10,t.t0=t.catch(4),r.console.warn("Encountered an unexpected storage error:",t.t0),t.abrupt("return",[]);case 14:return t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(){return t.apply(this,arguments)}}(),w=function(){var r=i()(a.a.mark((function r(){var t,e,n,o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b();case 2:if(!r.sent){r.next=25;break}return r.next=6,j();case 6:t=r.sent,e=u(t),r.prev=8,e.s();case 10:if((n=e.n()).done){r.next=16;break}return o=n.value,r.next=14,O(o);case 14:r.next=10;break;case 16:r.next=21;break;case 18:r.prev=18,r.t0=r.catch(8),e.e(r.t0);case 21:return r.prev=21,e.f(),r.finish(21);case 24:return r.abrupt("return",!0);case 25:return r.abrupt("return",!1);case 26:case"end":return r.stop()}}),r,null,[[8,18,21,24]])})));return function(){return r.apply(this,arguments)}}()}).call(this,e(26))},50:function(r,t,e){"use strict";(function(r){var n,a;e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return i}));var o=new Set((null===(n=r)||void 0===n||null===(a=n._googlesitekitBaseData)||void 0===a?void 0:a.enabledFeatures)||[]),i=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return t instanceof Set&&t.has(r)}}).call(this,e(26))},56:function(r,t,e){"use strict";e.d(t,"a",(function(){return a}));var n=e(35);function a(r){return function(){r[n.a]=r[n.a]||[],r[n.a].push(arguments)}}},60:function(r,t,e){"use strict";e.d(t,"a",(function(){return b})),e.d(t,"b",(function(){return h}));var n=e(7),a=e.n(n),o=e(32),i=e.n(o),c=e(109),u=e(10),s=e.n(u),f=e(93),l=e.n(f),p=e(9);function d(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function g(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?d(Object(e),!0).forEach((function(t){a()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function v(r,t){if(t&&Array.isArray(t)){var e=t.map((function(r){return"object"===i()(r)?Object(p.I)(r):r}));return"".concat(r,"::").concat(l()(JSON.stringify(e)))}return r}var b={receiveError:function(r,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return s()(r,"error is required."),s()(t,"baseName is required."),s()(e&&Array.isArray(e),"args must be an array."),{type:"RECEIVE_ERROR",payload:{error:r,baseName:t,args:e}}},clearError:function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return s()(r,"baseName is required."),s()(t&&Array.isArray(t),"args must be an array."),{type:"CLEAR_ERROR",payload:{baseName:r,args:t}}},clearErrors:function(r){return{type:"CLEAR_ERRORS",payload:{baseName:r}}}};function h(r){s()(r,"storeName must be defined.");var t={getErrorForSelector:function(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return s()(e,"selectorName is required."),t.getError(r,e,n)},getErrorForAction:function(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return s()(e,"actionName is required."),t.getError(r,e,n)},getError:function(r,t,e){var n=r.errors;return s()(t,"baseName is required."),n[v(t,e)]},getErrors:function(r){var t=new Set(Object.values(r.errors));return Array.from(t)},getMetaDataForError:function(r,t){var e=Object.keys(r.errors).find((function(e){return r.errors[e]===t}));return e?{baseName:e.substring(0,e.indexOf("::")),args:r.errorArgs[e]}:null},getSelectorDataForError:Object(c.b)((function(t){return function(e,n){var a=t(r).getMetaDataForError(n);if(a){var o=a.baseName,i=a.args;if(!!t(r)[o])return{storeName:r,name:o,args:i}}return null}})),hasErrors:function(r){return t.getErrors(r).length>0}};return{initialState:{errors:{},errorArgs:{}},actions:b,controls:{},reducer:function(r,t){var e=t.type,n=t.payload;switch(e){case"RECEIVE_ERROR":var o=n.baseName,i=n.args,c=n.error,u=v(o,i);return g(g({},r),{},{errors:g(g({},r.errors||{}),{},a()({},u,c)),errorArgs:g(g({},r.errorArgs||{}),{},a()({},u,i))});case"CLEAR_ERROR":var s=n.baseName,f=n.args,l=g({},r),p=v(s,f);return l.errors=g({},r.errors||{}),l.errorArgs=g({},r.errorArgs||{}),delete l.errors[p],delete l.errorArgs[p],l;case"CLEAR_ERRORS":var d=n.baseName,b=g({},r);if(d)for(var h in b.errors=g({},r.errors||{}),b.errorArgs=g({},r.errorArgs||{}),b.errors)(h===d||h.startsWith("".concat(d,"::")))&&(delete b.errors[h],delete b.errorArgs[h]);else b.errors={},b.errorArgs={};return b;default:return r}},resolvers:{},selectors:t}}},71:function(r,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return c}));var n=e(32),a=e.n(n),o=e(78),i=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:o.a.sanitize(r,t)}};function c(r){var t,e="object"===a()(r)?r.toString():r;return null==e||null===(t=e.replace)||void 0===t?void 0:t.call(e,/\/+$/,"")}},78:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return a}));var n=e(144),a=e.n(n)()(r)}).call(this,e(26))},79:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return S})),e.d(t,"d",(function(){return E})),e.d(t,"e",(function(){return _})),e.d(t,"c",(function(){return N})),e.d(t,"b",(function(){return D}));var n=e(15),a=e.n(n),o=e(32),i=e.n(o),c=e(7),u=e.n(c),s=e(23),f=e.n(s),l=e(13),p=e(55),d=e.n(p),g=e(2);function v(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function b(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?v(Object(e),!0).forEach((function(t){u()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}var h=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=O(r,t),n=e.formatUnit,a=e.formatDecimal;try{return n()}catch(r){return a()}},m=function(r){var t=y(r),e=t.hours,n=t.minutes,a=t.seconds;return a=("0"+a).slice(-2),n=("0"+n).slice(-2),"00"===(e=("0"+e).slice(-2))?"".concat(n,":").concat(a):"".concat(e,":").concat(n,":").concat(a)},y=function(r){return r=parseInt(r,10),Number.isNaN(r)&&(r=0),{hours:Math.floor(r/60/60),minutes:Math.floor(r/60%60),seconds:Math.floor(r%60)}},O=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=y(r),n=e.hours,a=e.minutes,o=e.seconds;return{hours:n,minutes:a,seconds:o,formatUnit:function(){var e=t.unitDisplay,i=b(b({unitDisplay:void 0===e?"short":e},f()(t,["unitDisplay"])),{},{style:"unit"});return 0===r?_(o,b(b({},i),{},{unit:"second"})):Object(g.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(g._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),o?_(o,b(b({},i),{},{unit:"second"})):"",a?_(a,b(b({},i),{},{unit:"minute"})):"",n?_(n,b(b({},i),{},{unit:"hour"})):"").trim()},formatDecimal:function(){var t=Object(g.sprintf)(// translators: %s: number of seconds with "s" as the abbreviated unit.
Object(g.__)("%ds","google-site-kit"),o);if(0===r)return t;var e=Object(g.sprintf)(// translators: %s: number of minutes with "m" as the abbreviated unit.
Object(g.__)("%dm","google-site-kit"),a),i=Object(g.sprintf)(// translators: %s: number of hours with "h" as the abbreviated unit.
Object(g.__)("%dh","google-site-kit"),n);return Object(g.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(g._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),o?t:"",a?e:"",n?i:"").trim()}}},j=function(r){return 1e6<=r?Math.round(r/1e5)/10:1e4<=r?Math.round(r/1e3):1e3<=r?Math.round(r/100)/10:r},w=function(r){var t={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=r?Object(g.sprintf)(// translators: %s: an abbreviated number in millions.
Object(g.__)("%sM","google-site-kit"),_(j(r),r%10==0?{}:t)):1e4<=r?Object(g.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(g.__)("%sK","google-site-kit"),_(j(r))):1e3<=r?Object(g.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(g.__)("%sK","google-site-kit"),_(j(r),r%10==0?{}:t)):_(r,{signDisplay:"never",maximumFractionDigits:1})};function S(r){var t={};return"%"===r?t={style:"percent",maximumFractionDigits:2}:"s"===r?t={style:"duration",unitDisplay:"narrow"}:r&&"string"==typeof r?t={style:"currency",currency:r}:Object(l.isPlainObject)(r)&&(t=b({},r)),t}function E(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r=Object(l.isFinite)(r)?r:Number(r),Object(l.isFinite)(r)||(console.warn("Invalid number",r,i()(r)),r=0);var e=S(t),n=e.style,a=void 0===n?"metric":n;return"metric"===a?w(r):"duration"===a?h(r,e):"durationISO"===a?m(r):_(r,e)}var k=d()(console.warn),_=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.locale,n=void 0===e?D():e,o=f()(t,["locale"]);try{return new Intl.NumberFormat(n,o).format(r)}catch(t){k("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(n),", ").concat(JSON.stringify(o)," ).format( ").concat(i()(r)," )"),t.message)}for(var c={currencyDisplay:"narrow",currencySign:"accounting",style:"unit"},u=["signDisplay","compactDisplay"],s={},l=0,p=Object.entries(o);l<p.length;l++){var d=a()(p[l],2),g=d[0],v=d[1];c[g]&&v===c[g]||(u.includes(g)||(s[g]=v))}try{return new Intl.NumberFormat(n,s).format(r)}catch(t){return new Intl.NumberFormat(n).format(r)}},N=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.locale,n=void 0===e?D():e,a=t.style,o=void 0===a?"long":a,i=t.type,c=void 0===i?"conjunction":i;if(Intl.ListFormat){var u=new Intl.ListFormat(n,{style:o,type:c});return u.format(r)}
/* translators: used between list items, there is a space after the comma. */var s=Object(g.__)(", ","google-site-kit");return r.join(s)},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,e=Object(l.get)(t,["_googlesitekitLegacyData","locale"]);if(e){var n=e.match(/^(\w{2})?(_)?(\w{2})/);if(n&&n[0])return n[0].replace(/_/g,"-")}return t.navigator.language}}).call(this,e(26))},80:function(r,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"a",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return c}));var n=e(106);function a(r){try{return new URL(r).pathname}catch(r){}return null}function o(r,t){try{return new URL(t,r).href}catch(r){}return("string"==typeof r?r:"")+("string"==typeof t?t:"")}function i(r){return"string"!=typeof r?r:r.replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")}function c(r,t){if(!Object(n.a)(r))return r;if(r.length<=t)return r;var e=new URL(r),a=r.replace(e.origin,"");if(a.length<t)return a;var o=a.length-Math.floor(t)+1;return"…"+a.substr(o)}},85:function(r,t,e){"use strict";(function(r){var n=e(1),a=e.n(n),o=e(12),i=e.n(o);function ChangeArrow(t){var e=t.direction,n=t.invertColor,a=t.width,o=t.height;return r.createElement("svg",{className:i()("googlesitekit-change-arrow","googlesitekit-change-arrow--".concat(e),{"googlesitekit-change-arrow--inverted-color":n}),width:a,height:o,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",fill:"currentColor"}))}ChangeArrow.propTypes={direction:a.a.string,invertColor:a.a.bool,width:a.a.number,height:a.a.number},ChangeArrow.defaultProps={direction:"up",invertColor:!1,width:9,height:9},t.a=ChangeArrow}).call(this,e(4))},87:function(r,t,e){"use strict";e.d(t,"a",(function(){return o}));var n=e(10),a=e.n(n),o=function(r,t){var e=t.dateRangeLength;a()(Array.isArray(r),"report must be an array to partition."),a()(Number.isInteger(e)&&e>0,"dateRangeLength must be a positive integer.");var n=-1*e;return{currentRange:r.slice(n),compareRange:r.slice(2*n,n)}}},9:function(r,t,e){"use strict";e.d(t,"J",(function(){return a.b})),e.d(t,"K",(function(){return a.c})),e.d(t,"G",(function(){return o.a})),e.d(t,"L",(function(){return o.b})),e.d(t,"I",(function(){return f})),e.d(t,"n",(function(){return l.a})),e.d(t,"C",(function(){return l.d})),e.d(t,"D",(function(){return l.e})),e.d(t,"z",(function(){return l.c})),e.d(t,"s",(function(){return l.b})),e.d(t,"A",(function(){return v})),e.d(t,"k",(function(){return b})),e.d(t,"j",(function(){return h})),e.d(t,"d",(function(){return S})),e.d(t,"c",(function(){return E})),e.d(t,"e",(function(){return k})),e.d(t,"b",(function(){return _})),e.d(t,"a",(function(){return N})),e.d(t,"g",(function(){return D})),e.d(t,"f",(function(){return A})),e.d(t,"o",(function(){return x})),e.d(t,"x",(function(){return R})),e.d(t,"q",(function(){return P})),e.d(t,"H",(function(){return T})),e.d(t,"t",(function(){return L})),e.d(t,"w",(function(){return I})),e.d(t,"l",(function(){return M})),e.d(t,"p",(function(){return F.b})),e.d(t,"i",(function(){return F.a})),e.d(t,"u",(function(){return C.b})),e.d(t,"r",(function(){return C.a})),e.d(t,"B",(function(){return C.c})),e.d(t,"y",(function(){return H})),e.d(t,"v",(function(){return U})),e.d(t,"F",(function(){return q})),e.d(t,"E",(function(){return V.a})),e.d(t,"h",(function(){return K})),e.d(t,"M",(function(){return z})),e.d(t,"m",(function(){return B}));var n=e(13),a=e(36),o=e(71),i=e(32),c=e.n(i),u=e(93),s=e.n(u),f=function(r){return s()(JSON.stringify(function r(t){var e={};return Object.keys(t).sort().forEach((function(n){var a=t[n];a&&"object"===c()(a)&&!Array.isArray(a)&&(a=r(a)),e[n]=a})),e}(r)))};e(96);var l=e(79);function p(r){return r.replace(new RegExp("\\[([^\\]]+)\\]\\((https?://[^/]+\\.\\w+/?.*?)\\)","gi"),'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function d(r){return"<p>".concat(r.replace(/\n{2,}/g,"</p><p>"),"</p>")}function g(r){return r.replace(/\n/gi,"<br>")}function v(r){for(var t=r,e=0,n=[p,d,g];e<n.length;e++){t=(0,n[e])(t)}return t}var b=function(r){return r=parseFloat(r),isNaN(r)||0===r?[0,0,0,0]:[Math.floor(r/60/60),Math.floor(r/60%60),Math.floor(r%60),Math.floor(1e3*r)-1e3*Math.floor(r)]},h=function(r){var t=r&&!Number.isInteger(r)?new Date(r).getTime():r;return isNaN(t)||!t?0:t},m=e(15),y=e.n(m),O=e(10),j=e.n(O),w=e(2),S="Invalid dateString parameter, it must be a string.",E='Invalid date range, it must be a string with the format "last-x-days".',k=60,_=60*k,N=24*_,D=7*N,A=30*N;function x(){var r=function(r){return Object(w.sprintf)(
/* translators: %s: number of days */
Object(w._n)("Last %s day","Last %s days",r,"google-site-kit"),r)};return{"last-7-days":{slug:"last-7-days",label:r(7),days:7},"last-14-days":{slug:"last-14-days",label:r(14),days:14},"last-28-days":{slug:"last-28-days",label:r(28),days:28},"last-90-days":{slug:"last-90-days",label:r(90),days:90}}}function R(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!Object(n.isString)(r))return!1;var t=r.split("-");if(3!==t.length)return!1;var e=new Date(r);return Object(n.isDate)(e)&&!isNaN(e)}function P(r){j()(Object(n.isDate)(r)&&!isNaN(r),"Date param must construct to a valid date instance or be a valid date instance itself.");var t="".concat(r.getMonth()+1),e="".concat(r.getDate());return[r.getFullYear(),t.length<2?"0".concat(t):t,e.length<2?"0".concat(e):e].join("-")}function T(r){j()(R(r),S);var t=r.split("-"),e=y()(t,3),n=e[0],a=e[1],o=e[2];return new Date(n,a-1,o)}function L(r,t){return P(M(r,t*N))}function I(r){var t=r.split("-");return 3===t.length&&"last"===t[0]&&!Number.isNaN(t[1])&&!Number.isNaN(parseFloat(t[1]))&&"days"===t[2]}function M(r,t){j()(R(r)||Object(n.isDate)(r)&&!isNaN(r),S);var e=R(r)?Date.parse(r):r.getTime();return new Date(e-1e3*t)}var F=e(97),C=e(80);function H(r){var t=parseFloat(r)||0;return!!Number.isInteger(t)&&t>0}function U(r){if("number"==typeof r)return!0;var t=(r||"").toString();return!!t&&!isNaN(t)}var $=e(27),J=e.n($),q=function(r){return Array.isArray(r)?J()(r).sort():r},V=e(87);function K(r,t){var e=function(r){return"0"===r||0===r};if(e(r)&&e(t))return 0;if(e(r)||Number.isNaN(r))return null;var n=(t-r)/r;return Number.isNaN(n)||!Number.isFinite(n)?null:n}var z=function(r){try{return JSON.parse(r)&&!!r}catch(r){return!1}},B=function(r){if(!r)return"";var t=r.replace(/&#(\d+);/g,(function(r,t){return String.fromCharCode(t)})).replace(/(\\)/g,"");return Object(n.unescape)(t)}},96:function(r,t,e){"use strict";(function(r){e(48),e(49)}).call(this,e(26))},97:function(r,t,e){"use strict";(function(r){e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return i}));var n=e(218),a=e(85),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Number.isNaN(Number(t)))return"";var o=e.invertColor,i=void 0!==o&&o;return Object(n.a)(r.createElement(a.a,{direction:t>0?"up":"down",invertColor:i}))},i=function(r,t){return r>0&&t>0?r/t-1:r>0?1:t>0?-1:0}}).call(this,e(4))},98:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return l}));var n=e(7),a=e.n(n),o=e(13),i=e(99),c=e(100);function u(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function s(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(Object(e),!0).forEach((function(t){a()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}var f={activeModules:[],isAuthenticated:!1,referenceSiteURL:"",trackingEnabled:!1,trackingID:"",userIDHash:"",userRoles:[]};function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,a=s(s({},f),t);a.referenceSiteURL&&(a.referenceSiteURL=a.referenceSiteURL.toString().replace(/\/+$/,""));var u=Object(i.a)(a,e),l=Object(c.a)(a,e,u,n),p={},d=function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];var n=JSON.stringify(t);p[n]||(p[n]=Object(o.once)(l)),p[n].apply(p,t)};return{enableTracking:function(){a.trackingEnabled=!0},disableTracking:function(){a.trackingEnabled=!1},initializeSnippet:u,isTrackingEnabled:function(){return!!a.trackingEnabled},trackEvent:l,trackEventOnce:d}}}).call(this,e(26))},99:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return i}));var n=e(56),a=e(35),o=e(50);function i(t,e){var i,c=Object(n.a)(e),u=t.activeModules,s=t.referenceSiteURL,f=t.userIDHash,l=t.userRoles,p=void 0===l?[]:l,d=t.isAuthenticated,g=t.pluginVersion;return function(){var e=r.document;if(void 0===i&&(i=!!e.querySelector("script[".concat(a.b,"]"))),!i){i=!0;var n=(null==p?void 0:p.length)?p.join(","):"";c("js",new Date),c("config",t.trackingID,{groups:"site_kit",send_page_view:t.isSiteKitScreen,domain:s,plugin_version:g||"",enabled_features:Array.from(o.a).join(","),active_modules:u.join(","),authenticated:d?"1":"0",user_properties:{user_roles:n,user_identifier:f}});var l=e.createElement("script");return l.setAttribute(a.b,""),l.async=!0,l.src="https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID,"&l=").concat(a.a),e.head.appendChild(l),{scriptTagSrc:"https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID,"&l=").concat(a.a)}}}}}).call(this,e(26))}},[[1217,1,0]]]);