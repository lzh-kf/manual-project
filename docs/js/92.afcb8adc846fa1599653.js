"use strict";(self.webpackChunkmanual_project=self.webpackChunkmanual_project||[]).push([[92],{9268:function(e,t,n){var r=n(3705);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}t.A=function(e){var t=o((0,r.BI)([]),2),n=t[0],i=t[1],a=o((0,r.li)(!1),2),u=a[0],l=a[1],c=o((0,r.li)(0),2),f=c[0],d=c[1];return{total:f,loading:u,tableData:n,handleQuery:function(t){l(!0),e(t).then((function(e){var t=e.total,n=e.list;i(n),d(t)})).finally((function(){l(!1)}))}}}},3705:function(e,t,n){n.d(t,{$C:function(){return a},BI:function(){return i},li:function(){return o}});var r=n(953),o=function(e){var t=(0,r.KR)(e);return[t,function(e){t.value=e}]},i=function(e){var t=(0,r.IJ)(e);return[t,function(e){t.value=e}]},a=function(e){var t=(0,r.Kh)(e);return[t,function(e){Object.assign(t,e)}]}},6253:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var r=n(9531),o=(n(6689),n(7619),n(8209)),i=(n(3672),n(306),n(7710)),a=(n(5576),n(7879)),u=(n(2630),n(8037),n(3441)),l=(n(7727),n(641)),c=n(953),f=n(3705),d=n(9268),s=n(5718);n(8273);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==p(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var w=function(e){return(0,l.Qi)("data-v-3b599d6e"),e=e(),(0,l.jt)(),e}((function(){return(0,l.Lk)("div",{class:"footer"},null,-1)})),g=(0,l.pM)({__name:"index",setup:function(e){var t=(0,d.A)((function(){return new Promise((function(e){setTimeout((function(){e({total:Math.floor(1e3*Math.random()),list:Array.from({length:10}).map((function(){return{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036".concat((new Date).getTime()),tag:"Home"}}))})}),1500)}))})),n=t.loading,p=t.tableData,b=t.handleQuery,y=v((0,f.$C)({userId:"",pageSize:10,pageNum:1}),2),h=y[0],g=y[1],O=function(){(0,s.nk)({type:"success",message:"申请成功",duration:1e4})};return b(h),function(e,t){var f=u.WK,d=i.xE,s=a.S2,y=i.US,v=o.o8,A=o.Up,S=r.L;return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)(y,{inline:!0,"label-suffix":":"},{default:(0,l.k6)((function(){return[(0,l.bF)(d,{label:"用户ID"},{default:(0,l.k6)((function(){return[(0,l.bF)(f,{modelValue:(0,c.R1)(h).userId,"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,c.R1)(h).userId=e}),clearable:""},null,8,["modelValue"])]})),_:1}),(0,l.bF)(d,null,{default:(0,l.k6)((function(){return[(0,l.bF)(s,{type:"primary",onClick:t[1]||(t[1]=function(e){return g(m(m({},h),{},{pageNum:1})),void b(h)}),loading:(0,c.R1)(n)},{default:(0,l.k6)((function(){return[(0,l.eW)("搜索")]})),_:1},8,["loading"])]})),_:1})]})),_:1}),(0,l.bo)(((0,l.uX)(),(0,l.Wv)(A,{data:(0,c.R1)(p),style:{width:"100%",height:"100%"}},{default:(0,l.k6)((function(){return[(0,l.bF)(v,{type:"index","min-width":"50",label:"序号"}),(0,l.bF)(v,{prop:"date",label:"日期"}),(0,l.bF)(v,{prop:"state",label:"所在州"}),(0,l.bF)(v,{prop:"city",label:"城市"}),(0,l.bF)(v,{prop:"address",label:"地址"}),(0,l.bF)(v,{prop:"zip",label:"压缩类型"}),(0,l.bF)(v,{prop:"tag",label:"标签"}),(0,l.bF)(v,{label:"操作"},{default:(0,l.k6)((function(){return[(0,l.bF)(s,{type:"primary",size:"default",onClick:O},{default:(0,l.k6)((function(){return[(0,l.eW)("申请好友")]})),_:1})]})),_:1})]})),_:1},8,["data"])),[[S,(0,c.R1)(n)]]),w])}}});var O=(0,n(6262).A)(g,[["__scopeId","data-v-3b599d6e"]])},7240:function(e,t,n){n.d(t,{A:function(){return k}});var r,o,i,a,u,l,c,f,d,s,p,b,m,y,v,h=!1;function w(){if(!h){h=!0;var e=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),n=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(b=/\b(iPhone|iP[ao]d)/.exec(e),m=/\b(iP[ao]d)/.exec(e),s=/Android/i.exec(e),y=/FBAN\/\w+;/i.exec(e),v=/Mobile/i.exec(e),p=!!/Win64/.exec(e),t){(r=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN)&&document&&document.documentMode&&(r=document.documentMode);var w=/(?:Trident\/(\d+.\d+))/.exec(e);l=w?parseFloat(w[1])+4:r,o=t[2]?parseFloat(t[2]):NaN,i=t[3]?parseFloat(t[3]):NaN,(a=t[4]?parseFloat(t[4]):NaN)?(t=/(?:Chrome\/(\d+\.\d+))/.exec(e),u=t&&t[1]?parseFloat(t[1]):NaN):u=NaN}else r=o=i=u=a=NaN;if(n){if(n[1]){var g=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);c=!g||parseFloat(g[1].replace("_","."))}else c=!1;f=!!n[2],d=!!n[3]}else c=f=d=!1}}var g,O={ie:function(){return w()||r},ieCompatibilityMode:function(){return w()||l>r},ie64:function(){return O.ie()&&p},firefox:function(){return w()||o},opera:function(){return w()||i},webkit:function(){return w()||a},safari:function(){return O.webkit()},chrome:function(){return w()||u},windows:function(){return w()||f},osx:function(){return w()||c},linux:function(){return w()||d},iphone:function(){return w()||b},mobile:function(){return w()||b||m||s||v},nativeApp:function(){return w()||y},android:function(){return w()||s},ipad:function(){return w()||m}},A=O,S=!!(typeof window<"u"&&window.document&&window.document.createElement),x={canUseDOM:S,canUseWorkers:typeof Worker<"u",canUseEventListeners:S&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:S&&!!window.screen,isInWorker:!S};x.canUseDOM&&(g=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""));var F=function(e,t){if(!x.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var o=document.createElement("div");o.setAttribute(n,"return;"),r="function"==typeof o[n]}return!r&&g&&"wheel"===e&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r};function j(e){var t=0,n=0,r=0,o=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),r=10*t,o=10*n,"deltaY"in e&&(o=e.deltaY),"deltaX"in e&&(r=e.deltaX),(r||o)&&e.deltaMode&&(1==e.deltaMode?(r*=40,o*=40):(r*=800,o*=800)),r&&!t&&(t=r<1?-1:1),o&&!n&&(n=o<1?-1:1),{spinX:t,spinY:n,pixelX:r,pixelY:o}}j.getEventType=function(){return A.firefox()?"DOMMouseScroll":F("wheel")?"wheel":"mousewheel"};var k=j;
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */}}]);