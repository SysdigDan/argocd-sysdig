window.extensions=window.extensions||{},window.extensions.resources=window.extensions.resources||{},window.extensions.resources["argoproj.io/Application"]=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n){e.exports=window.React},function(e,n,t){"use strict";t.r(n),t.d(n,"Extension",(function(){return i})),t.d(n,"component",(function(){return s}));var r=t(0),o=function(e,n,t,r){return new(t||(t=Promise))((function(o,u){function i(e){try{a(r.next(e))}catch(e){u(e)}}function s(e){try{a(r.throw(e))}catch(e){u(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}a((r=r.apply(e,n||[])).next())}))},u=function(e,n){var t,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function s(u){return function(s){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(e){u=[6,e],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}},i=function(e){console.log(e);var n=r.useState(null),t=n[0],i=n[1],s=r.useState(!0),a=s[0],c=s[1],l=r.useState(null),f=l[0],p=l[1];return r.useEffect((function(){o(void 0,void 0,void 0,(function(){var e,n,r;return u(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,4,5]),[4,fetch('https://app.au1.sysdig.com/api/scanning/runtime/v2/workflows/results?cursor&filter=kubernetes.namespace.name="sock-shop"&limit=100&order=desc&sort=runningVulnsBySev',{mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer f9bc946b-a894-406f-a563-98474047b5c7"}})];case 1:if(!(e=o.sent()).ok)throw new Error("This is an HTTP error: The status is "+e.status);return[4,e.json()];case 2:return n=o.sent(),i(n),console.log(t),p(null),[3,5];case 3:return r=o.sent(),p(r.message),console.log(f),i(null),[3,5];case 4:return c(!1),console.log(a),[7];case 5:return[2]}}))}))}),[]),r.createElement("div",null,"Hello ",e.resource.metadata.name,"!")},s=i}]);