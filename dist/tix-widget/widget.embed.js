!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="https://cdn.tiket.com/tix-widget/",r(r.s=2)}({2:function(t,e){for(var r=document.getElementsByTagName("script"),n=0,o=r.length;n<o;n++){var a=r[n];if(console.log(n,a),/widget\.embed\./.test(a.src)&&!a.getAttribute("data-twid")){var u=a;u.setAttribute("data-twid",n);var i=u.getAttribute("data-type"),c={color:u.getAttribute("data-color"),background:u.getAttribute("data-background"),content:u.getAttribute("data-content"),css:u.getAttribute("data-css"),className:u.getAttribute("data-className")};window.WidgetCore.create(u.parentNode,i,c)}}}});