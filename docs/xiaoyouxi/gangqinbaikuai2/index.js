!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=256)}({0:function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(39))},1:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},11:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},116:function(t,n,r){var e=r(117);t.exports=e},117:function(t,n,r){r(118);var e=r(6);t.exports=e.parseInt},118:function(t,n,r){var e=r(2),o=r(119);e({global:!0,forced:parseInt!=o},{parseInt:o})},119:function(t,n,r){var e=r(0),o=r(92).trim,i=r(78),u=e.parseInt,c=/^[+-]?0[Xx]/,f=8!==u(i+"08")||22!==u(i+"0x16");t.exports=f?function(t,n){var r=o(String(t));return u(r,n>>>0||(c.test(r)?16:10))}:u},13:function(t,n,r){var e=r(30),o=r(20);t.exports=function(t){return e(o(t))}},14:function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},15:function(t,n,r){var e=r(5),o=r(21),i=r(14),u=r(16),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},16:function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},17:function(t,n,r){var e=r(6);t.exports=function(t){return e[t+"Prototype"]}},18:function(t,n,r){t.exports=r(94)},19:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},2:function(t,n,r){"use strict";var e=r(0),o=r(33).f,i=r(40),u=r(6),c=r(24),f=r(8),a=r(4),l=function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var r,s,p,v,d,y,x,h,g=t.target,b=t.global,m=t.stat,w=t.proto,O=b?e:m?e[g]:(e[g]||{}).prototype,S=b?u:u[g]||(u[g]={}),j=S.prototype;for(p in n)r=!i(b?p:g+(m?".":"#")+p,t.forced)&&O&&a(O,p),d=S[p],r&&(y=t.noTargetGet?(h=o(O,p))&&h.value:O[p]),v=r&&y?y:n[p],r&&typeof d==typeof v||(x=t.bind&&r?c(v,e):t.wrap&&r?l(v):w&&"function"==typeof v?c(Function.call,v):v,(t.sham||v&&v.sham||d&&d.sham)&&f(x,"sham",!0),S[p]=x,w&&(a(u,s=g+"Prototype")||f(u,s,{}),u[s][p]=v,t.real&&j&&!j[p]&&f(j,p,v)))}},20:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},21:function(t,n,r){var e=r(5),o=r(1),i=r(31);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},22:function(t,n,r){var e=r(6),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},23:function(t,n,r){var e=r(35),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},24:function(t,n,r){var e=r(26);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},256:function(t,n,r){"use strict";r.r(n);var e=r(42),o=r.n(e),i=r(86),u=r.n(i),c=r(18),f=r.n(c),a=(r(257),null),l=0;function s(){for(var t=0;t<4;t++)v();y("main").onclick=function(t){!function(t){var n;3==l?alert("fuckyou!!不要再戳我了！"):-1==f()(n=t.target.className).call(n,"black")?(clearInterval(a),l=3,alert("结束")):(t.target.className="cell",t.target.parentNode.pass=1,y("score").innerHTML=u()(y("score").innerHTML)+1,u()(y("score").innerHTML)+1)}(t)}}function p(){var t=y("container"),n=u()(window.getComputedStyle(t,null).top);if(n+=5,t.style.top=n+"px",0==n)v(),t.style.top="-150px",function(){var t=y("container");6==t.children.length&&t.removeChild(t.lastChild)}();else if(-95==n){var r=t.children;5==r.length&&1!=r[r.length-1].pass&&(clearInterval(a),l=3,alert("你挂了！"))}}function v(){for(var t=d("row"),n=function(){var t=["cell","cell","cell","cell"],n=4*Math.random()|0;return t[n]="cell black",t}(),r=y("container"),e=0;e<4;e++)t.appendChild(d(n[e]));null==r.firstChild?r.appendChild(t):r.insertBefore(t,r.firstChild)}function d(t){var n=document.createElement("div");return n.className=t,n}function y(t){return document.getElementById(t)}y("anniu").onclick=function(){a=o()(p,20)},window.onload=function(){s()}},257:function(t,n,r){},26:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},3:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},30:function(t,n,r){var e=r(1),o=r(19),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},31:function(t,n,r){var e=r(0),o=r(3),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},33:function(t,n,r){var e=r(5),o=r(36),i=r(11),u=r(13),c=r(16),f=r(4),a=r(21),l=Object.getOwnPropertyDescriptor;n.f=e?l:function(t,n){if(t=u(t),n=c(n,!0),a)try{return l(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},34:function(t,n,r){var e=r(22);t.exports=e("navigator","userAgent")||""},35:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},36:function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},37:function(t,n,r){var e=r(5),o=r(1),i=r(4),u=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var r=[][t],a=!!i(n,"ACCESSORS")&&n.ACCESSORS,l=i(n,0)?n[0]:f,s=i(n,1)?n[1]:void 0;return c[t]=!!r&&!o((function(){if(a&&!e)return!0;var t={length:-1};a?u(t,1,{enumerable:!0,get:f}):t[1]=1,r.call(t,l,s)}))}},39:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},4:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},40:function(t,n,r){var e=r(1),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},42:function(t,n,r){t.exports=r(68)},46:function(t,n,r){var e=r(2),o=r(0),i=r(34),u=[].slice,c=function(t){return function(n,r){var e=arguments.length>2,o=e?u.call(arguments,2):void 0;return t(e?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,r)}};e({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:c(o.setTimeout),setInterval:c(o.setInterval)})},5:function(t,n,r){var e=r(1);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},6:function(t,n){t.exports={}},61:function(t,n,r){var e=r(35),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},68:function(t,n,r){r(46);var e=r(6);t.exports=e.setInterval},70:function(t,n,r){"use strict";var e=r(1);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},71:function(t,n,r){var e=r(13),o=r(23),i=r(61),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),l=i(u,a);if(t&&r!=r){for(;a>l;)if((c=f[l++])!=c)return!0}else for(;a>l;l++)if((t||l in f)&&f[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},78:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},8:function(t,n,r){var e=r(5),o=r(15),i=r(11);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},86:function(t,n,r){t.exports=r(116)},92:function(t,n,r){var e=r(20),o="["+r(78)+"]",i=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t){return function(n){var r=String(e(n));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(u,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},94:function(t,n,r){var e=r(95);t.exports=e},95:function(t,n,r){var e=r(96),o=Array.prototype;t.exports=function(t){var n=t.indexOf;return t===o||t instanceof Array&&n===o.indexOf?e:n}},96:function(t,n,r){r(97);var e=r(17);t.exports=e("Array").indexOf},97:function(t,n,r){"use strict";var e=r(2),o=r(71).indexOf,i=r(70),u=r(37),c=[].indexOf,f=!!c&&1/[1].indexOf(1,-0)<0,a=i("indexOf"),l=u("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:f||!a||!l},{indexOf:function(t){return f?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})}});