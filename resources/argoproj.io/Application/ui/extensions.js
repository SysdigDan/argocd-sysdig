window.extensions=window.extensions||{},window.extensions.resources=window.extensions.resources||{},window.extensions.resources["argoproj.io/Application"]=function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=1)}([function(e,n){e.exports=window.React},function(e,n,r){"use strict";r.r(n),r.d(n,"Extension",(function(){return o})),r.d(n,"component",(function(){return i}));var t=r(0),o=function(e){var n=t.useState(null),r=n[0],o=n[1];return t.useEffect((function(){var e=fetch('https://app.au1.sysdig.com/api/scanning/runtime/v2/workflows/results?cursor&filter=kubernetes.namespace.name="sock-shop"&limit=100&order=desc&sort=runningVulnsBySev',{method:"GET",referrerPolicy:"origin-when-cross-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer f9bc946b-a894-406f-a563-98474047b5c7"}});o(e)}),[]),r?(console.log(e),console.log(r),t.createElement("div",null,"Hello ",e.resource.metadata.name,"!")):null},i=o}]);