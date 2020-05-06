var app=function(){"use strict";var t=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")};var n=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};function e(t,n){return t(n={exports:{}},n.exports),n.exports}var r=e((function(t){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},n(e,r)}t.exports=n}));var o=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)},i=e((function(t){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n}));var u=function(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?n(t):e},c=e((function(t){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n}));var a=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=c(t)););return t};e((function(t){function n(e,r,o){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=n=Reflect.get:t.exports=n=function(t,n,e){var r=a(t,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(e):o.value}},n(e,r,o||e)}t.exports=n}));var f=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")};var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}},l=e((function(t){function n(e,o,i){return s()?t.exports=n=Reflect.construct:t.exports=n=function(t,n,e){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(t,o));return e&&r(i,e.prototype),i},n.apply(null,arguments)}t.exports=n}));e((function(t){function n(e){var o="function"==typeof Map?new Map:void 0;return t.exports=n=function(t){if(null===t||!f(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,n)}function n(){return l(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r(n,t)},n(e)}t.exports=n}));var p=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r};var h=function(t){if(Array.isArray(t))return p(t)};var v=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)};var d=function(t,n){if(t){if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?p(t,n):void 0}};var y=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var g=function(t){return h(t)||v(t)||d(t)||y()};function m(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var b,w=function(t,n,e){return n&&m(t.prototype,n),e&&m(t,e),t};function x(){}function $(t){return t()}function O(){return Object.create(null)}function R(t){t.forEach($)}function j(t){return"function"==typeof t}function S(t,n){return t!=t?n==n:t!==n||t&&"object"===i(t)||"function"==typeof t}function k(t){if(null==t)return x;for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var o=t.subscribe.apply(t,e);return o.unsubscribe?function(){return o.unsubscribe()}:o}function A(t,n,e){t.$$.on_destroy.push(k(n,e))}function L(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;return t.set(e),n}function E(t,n){t.appendChild(n)}function P(t,n,e){t.insertBefore(n,e||null)}function C(t){t.parentNode.removeChild(t)}function D(t,n){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function F(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function N(){return T(" ")}function M(t,n,e,r){return t.addEventListener(n,e,r),function(){return t.removeEventListener(n,e,r)}}function z(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function I(t){return""===t?void 0:+t}function q(t){return Array.from(t.childNodes)}function B(t,n){n=""+n,t.data!==n&&(t.data=n)}function G(t,n){(null!=n||t.value)&&(t.value=n)}function H(t){b=t}function Q(){if(!b)throw new Error("Function called outside component initialization");return b}function U(t){Q().$$.on_mount.push(t)}function Y(t){Q().$$.after_update.push(t)}var V=[],W=[],J=[],K=[],X=Promise.resolve(),Z=!1;function tt(t){J.push(t)}var nt=!1,et=new Set;function rt(){if(!nt){nt=!0;do{for(var t=0;t<V.length;t+=1){var n=V[t];H(n),ot(n.$$)}for(V.length=0;W.length;)W.pop()();for(var e=0;e<J.length;e+=1){var r=J[e];et.has(r)||(et.add(r),r())}J.length=0}while(V.length);for(;K.length;)K.pop()();Z=!1,nt=!1,et.clear()}}function ot(t){if(null!==t.fragment){t.update(),R(t.before_update);var n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(tt)}}var it=new Set;function ut(t,n){t&&t.i&&(it.delete(t),t.i(n))}function ct(t,n,e,r){if(t&&t.o){if(it.has(t))return;it.add(t),(void 0).c.push((function(){it.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function at(t,n){t.d(1),n.delete(t.key)}function ft(t){t&&t.c()}function st(t,n,e){var r=t.$$,o=r.fragment,i=r.on_mount,u=r.on_destroy,c=r.after_update;o&&o.m(n,e),tt((function(){var n=i.map($).filter(j);u?u.push.apply(u,g(n)):R(n),t.$$.on_mount=[]})),c.forEach(tt)}function lt(t,n){var e=t.$$;null!==e.fragment&&(R(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function pt(t,n){-1===t.$$.dirty[0]&&(V.push(t),Z||(Z=!0,X.then(rt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ht(t,n,e,r,o,i){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=b;H(t);var a=n.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:x,not_equal:o,bound:O(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:O(),dirty:u},s=!1;if(f.ctx=e?e(t,a,(function(n,e){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:e;return f.ctx&&o(f.ctx[n],f.ctx[n]=r)&&(f.bound[n]&&f.bound[n](r),s&&pt(t,n)),e})):[],f.update(),s=!0,R(f.before_update),f.fragment=!!r&&r(f.ctx),n.target){if(n.hydrate){var l=q(n.target);f.fragment&&f.fragment.l(l),l.forEach(C)}else f.fragment&&f.fragment.c();n.intro&&ut(t.$$.fragment),st(t,n.target,n.anchor),rt()}H(c)}var vt=function(){function n(){t(this,n)}return w(n,[{key:"$destroy",value:function(){lt(this,1),this.$destroy=x}},{key:"$on",value:function(t,n){var e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),function(){var t=e.indexOf(n);-1!==t&&e.splice(t,1)}}},{key:"$set",value:function(){}}]),n}(),dt=e((function(t){var n=function(t){var n=Object.prototype,e=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",u=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function a(t,n,e,r){var o=n&&n.prototype instanceof l?n:l,i=Object.create(o.prototype),u=new O(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return j()}for(e.method=o,e.arg=i;;){var u=e.delegate;if(u){var c=w(u,e);if(c){if(c===s)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var a=f(t,n,e);if("normal"===a.type){if(r=e.done?"completed":"suspendedYield",a.arg===s)continue;return{value:a.arg,done:e.done}}"throw"===a.type&&(r="completed",e.method="throw",e.arg=a.arg)}}}(t,e,u),i}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var s={};function l(){}function p(){}function h(){}var v={};v[o]=function(){return this};var d=Object.getPrototypeOf,y=d&&d(d(R([])));y&&y!==n&&e.call(y,o)&&(v=y);var g=h.prototype=l.prototype=Object.create(v);function m(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function b(t,n){var r;this._invoke=function(o,u){function c(){return new n((function(r,c){!function r(o,u,c,a){var s=f(t[o],t,u);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"===i(p)&&e.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):n.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,a)}))}a(s.arg)}(o,u,r,c)}))}return r=r?r.then(c,c):c()}}function w(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,w(t,n),"throw"===n.method))return s;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=f(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,s;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,s):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,s)}function x(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function $(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function R(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=g.constructor=h,h.constructor=p,h[c]=p.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(b.prototype),b.prototype[u]=function(){return this},t.AsyncIterator=b,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var u=new b(a(n,e,r,o),i);return t.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},m(g),g[c]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=R,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return u.type="throw",u.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),a=e.call(i,"finallyLoc");if(c&&a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=n,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),s},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),$(e),s}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;$(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:R(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}));var yt=function(t){if(Array.isArray(t))return t};var gt=function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return e}};var mt=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var bt=function(t,n){return yt(t)||gt(t,n)||d(t,n)||mt()};function wt(t,n,e,r,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void e(t)}c.done?n(a):Promise.resolve(a).then(r,o)}var xt=function(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function u(t){wt(i,r,o,u,c,"next",t)}function c(t){wt(i,r,o,u,c,"throw",t)}u(void 0)}))}};var $t=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t},Ot=[];function Rt(t,n){return{subscribe:jt(t,n).subscribe}}function jt(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,r=[];function o(e){if(S(t,e)&&(t=e,n)){for(var o=!Ot.length,i=0;i<r.length;i+=1){var u=r[i];u[1](),Ot.push(u,t)}if(o){for(var c=0;c<Ot.length;c+=2)Ot[c][0](Ot[c+1]);Ot.length=0}}}function i(n){o(n(t))}function u(i){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,c=[i,u];return r.push(c),1===r.length&&(n=e(o)||x),i(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(n(),n=null)}}return{set:o,update:i,subscribe:u}}function St(t,n,e){var r=!Array.isArray(t),o=r?[t]:t,i=n.length<2;return Rt(e,(function(t){var e=!1,u=[],c=0,a=x,f=function(){if(!c){a();var e=n(r?u[0]:u,t);i?t(e):a=j(e)?e:x}},s=o.map((function(t,n){return k(t,(function(t){u[n]=t,c&=~(1<<n),e&&f()}),(function(){c|=1<<n}))}));return e=!0,f(),function(){R(s),a()}}))}var kt=function(t){return function(n,e,r){return t(n,e,r)*r}},_t=function(t){throw Error("Invalid sort config: "+t)},At=function(t){var n=t||{},e=n.asc,r=n.desc,o=e?1:-1,i=e||r;if(e&&r)throw _t("Ambiguous object with `asc` and `desc` config properties");return i||_t("Expected `asc` or `desc` property"),{order:o,sortBy:i,comparer:t.comparer&&kt(t.comparer)}},Lt=function t(n,e,r,o){var i,u;if(!Array.isArray(e))return e;if(Array.isArray(r)&&r.length<2&&(r=r[0]),void 0===r||!0===r)i=function(t,e){return o(t,e,n)};else if("string"==typeof r){if(r.includes("."))throw _t("String syntax not allowed for nested properties.");i=function(t,e){return o(t[r],e[r],n)}}else if("function"==typeof r)i=function(t,e){return o(r(t),r(e),n)};else{if(!Array.isArray(r)){var c=At(r);return t(c.order,e,c.sortBy,c.comparer||o)}i=(u=o,function t(n,e,r,o,i,c,a){var f,s;if("string"==typeof n)f=c[n],s=a[n];else{if("function"!=typeof n){var l=At(n);return t(l.sortBy,e,r,l.order,l.comparer||u,c,a)}f=n(c),s=n(a)}var p=i(f,s,o);return e.length>r&&(0===p||null==f&&null==s)?t(e[r],e,r+1,o,i,c,a):p}).bind(void 0,r[0],r,1,n,o)}return e.sort(i)};function Et(t){var n=kt(t.comparer);return function(t){return{asc:function(e){return Lt(1,t,e,n)},desc:function(e){return Lt(-1,t,e,n)},by:function(e){return Lt(1,t,e,n)}}}}var Pt=Et({comparer:function(t,n,e){return null==t?e:null==n?-e:t<n?-1:t===n?0:1}});Pt.createNewInstance=Et;var Ct,Dt,Ft,Tt,Nt=(Dt=Date.now(),Ft=Dt,(Tt=Rt({ms:0},(function(t){return Ct=t,function(){}}))).update=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Ct&&(Ft=Date.now(),Ct({ms:Ft-Dt,stage:t})),""},Tt.reset=function(){Ct&&(Dt=Ft=Date.now(),Ct({ms:0}))},Tt),Mt=jt([]),zt=St(Mt,(function(t){return null==t})),It=jt({}),qt=jt([]);It.subscribe((function(t){return Nt.reset()})),qt.subscribe((function(t){return Nt.reset()}));var Bt=St([Mt,It],(function(t){var n=bt(t,2),e=n[0],r=n[1];if(e&&e.length>0){var o=Object.values(r),i=Array.isArray(e)&&e.filter((function(t){return o.reduce((function(n,e){return n&&e(t)}),!0)}));return Nt.update("Filtered"),i}}));St([Bt,qt],(function(t){return t})).subscribe((function(t){var n=bt(t,2),e=n[0],r=n[1];if(e&&e.length>0){var o=r.reduce((function(t,n){var r,o=n.ascending?"asc":"desc",u=i(e[0][n.field]);return r=n.func?n.func:"string"==u?function(t){return t[n.field].toLowerCase()}:function(t){return t[n.field]},t.push($t({},o,r)),t}),[]);o.length>0&&Pt(e).by(o),Nt.update("Sorted")}}));var Gt=e((function(t){var n={};!function(t){t.__type__="csv";var n="undefined"!=typeof jQuery&&jQuery.Deferred||"undefined"!=typeof _&&_.Deferred||function(){var t,n,e=new Promise((function(e,r){t=e,n=r}));return{resolve:t,reject:n,promise:function(){return e}}};t.fetch=function(e){var r=new n;if(e.file){var o=new FileReader,i=e.encoding||"UTF-8";o.onload=function(n){var o=t.extractFields(t.parse(n.target.result,e),e);o.useMemoryStore=!0,o.metadata={filename:e.file.name},r.resolve(o)},o.onerror=function(t){r.reject({error:{message:"Failed to load file. Code: "+t.target.error.code}})},o.readAsText(e.file,i)}else if(e.data){var u=t.extractFields(t.parse(e.data,e),e);u.useMemoryStore=!0,r.resolve(u)}else if(e.url){(window.fetch||function(t){var n=jQuery.get(t),e={then:function(t){return n.done(t),e},catch:function(t){return n.fail(t),e}};return e})(e.url).then((function(t){return t.text?t.text():t})).then((function(n){var o=t.extractFields(t.parse(n,e),e);o.useMemoryStore=!0,r.resolve(o)})).catch((function(t,n){r.reject({error:{message:"Failed to load file. "+t.statusText+". Code: "+t.status,request:t}})}))}return r.promise()},t.extractFields=function(t,n){return!0!==n.noHeaderRow&&t.length>0?{fields:t[0],records:t.slice(1)}:{records:t}},t.normalizeDialectOptions=function(t){var n={delimiter:",",doublequote:!0,lineterminator:"\n",quotechar:'"',skipinitialspace:!0,skipinitialrows:0};for(var e in t)"trim"===e?n.skipinitialspace=t.trim:n[e.toLowerCase()]=t[e];return n},t.parse=function(n,o){(!o||o&&!o.lineterminator)&&(n=t.normalizeLineTerminator(n,o));var u=t.normalizeDialectOptions(o);n=function(t,n){return t.charAt(t.length-n.length)!==n?t:t.substring(0,t.length-n.length)}(n,u.lineterminator);var c,a,f="",s=!1,l=!1,p="",h=[],v=[];for(a=function(t){return!0!==l&&(""===t?t=null:!0===u.skipinitialspace&&(t=i(t)),e.test(t)?t=parseInt(t,10):r.test(t)&&(t=parseFloat(t,10))),t},c=0;c<n.length;c+=1)f=n.charAt(c),!1!==s||f!==u.delimiter&&f!==u.lineterminator?f!==u.quotechar?p+=f:s?n.charAt(c+1)===u.quotechar?(p+=u.quotechar,c+=1):s=!1:(s=!0,l=!0):(p=a(p),h.push(p),f===u.lineterminator&&(v.push(h),h=[]),p="",l=!1);return p=a(p),h.push(p),v.push(h),u.skipinitialrows&&(v=v.slice(u.skipinitialrows)),v},t.normalizeLineTerminator=function(t,n){return(n=n||{}).lineterminator?t:t.replace(/(\r\n|\n|\r)/gm,"\n")},t.objectToArray=function(t){for(var n=[],e=[],r=[],o=0;o<t.fields.length;o++){var i=t.fields[o].id;r.push(i);var u=t.fields[o].label?t.fields[o].label:i;e.push(u)}n.push(e);for(o=0;o<t.records.length;o++){for(var c=[],a=t.records[o],f=0;f<r.length;f++)c.push(a[r[f]]);n.push(c)}return n},t.serialize=function(n,e){var r=null;r=n instanceof Array?n:t.objectToArray(n);var i,u,c,a=t.normalizeDialectOptions(e),f="",s="",l="",p="";for(c=function(t){return null===t?t="":"string"==typeof t&&o.test(t)?(a.doublequote&&(t=t.replace(/"/g,'""')),t=a.quotechar+t+a.quotechar):"number"==typeof t&&(t=t.toString(10)),t},i=0;i<r.length;i+=1)for(f=r[i],u=0;u<f.length;u+=1)s=c(f[u]),u===f.length-1?(p+=(l+=s)+a.lineterminator,l=""):l+=s+a.delimiter,s="";return p};var e=/^\d+$/,r=/^\d*\.\d+$|^\d+\.\d*$/,o=/^\s|\s$|,|"|\n/,i=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}(n);var e=e||{};e.Backend=e.Backend||{},e.Backend.CSV=n,t.exports&&(t.exports=n)}));function Ht(){return Qt.apply(this,arguments)}function Qt(){return(Qt=xt(dt.mark((function t(){var n,e;return dt.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Ut().then((function(){return Nt.update("Store reset complete")})),e=fetch("./Forbes2000.csv").then(Yt).then((function(t){return t.text()})).then((function(t){return Nt.update("Loaded")||t})),t.abrupt("return",Promise.all([e,n]).then((function(t){return Nt.update("Tasks ready")||t})).then(Vt).then((function(t){return Nt.update("Processed")||t})).then(Wt).then((function(t){return Nt.update("Store update complete")||t})).catch((function(t){return console.error(t)})));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Ut(){return new Promise((function(t){Nt.reset(),Mt.set(),t()}))}function Yt(t){if(t.ok)return t;throw{message:t.statusText,status:t.status}}function Vt(t){var n=bt(t,1)[0],e=[],r=Gt.parse(n);if(r&&r.length>0)for(var o=1;o<r.length;o++)e.push({Rank:r[o][1],Name:r[o][2],Country:r[o][3],Category:r[o][4],Sales:r[o][5],Profits:r[o][6],Assets:r[o][7],"Market value":r[o][8]});return[e]}function Wt(t){var n=bt(t,1)[0];return Mt.set(n),t}function Jt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function Kt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?Jt(Object(e),!0).forEach((function(n){$t(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Jt(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var Xt=jt({start:0,step:100,limit:0}),Zt=St(Xt,(function(t){return Math.min(t.limit,t.start/t.step+1)})),tn=St(Xt,(function(t){return Math.ceil(t.limit/t.step)})),nn=function(){Nt.reset(),Xt.update((function(t){return Kt({},t,{start:0})}))},en=function(){Nt.reset(),Xt.update((function(t){return Kt({},t,{start:Math.max(t.start-t.step,0)})}))},rn=function(){Nt.reset(),Xt.update((function(t){return Kt({},t,{start:Math.max(t.start,(t.start+t.step)%t.limit)})}))},on=function(){Nt.reset(),Xt.update((function(t){var n=t.start=(Math.ceil(t.limit/t.step)-1)*t.step;return Kt({},t,{start:n})}))};Bt.subscribe((function(t){t&&t.length>0?(Xt.update((function(n){return Kt({},n,{start:0,limit:t.length})})),Nt.update("Paging")):Xt.update((function(t){return Kt({},t,{start:0,limit:0})}))}));var un=St([Bt,Xt],(function(t){var n=bt(t,2),e=n[0],r=n[1];if(e&&e.length>0){var o=e.slice(r.start,r.start+r.step);return Nt.update("Sliced"),o}}));function cn(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function an(t){var n,e,r,o,i,u,c,a,f,s,l,p,h,v,d,y,g,m=(t[0]?t[0].length:0)+"",b=(t[1]?t[1].length:0)+"",w=(Array.isArray(t[2])?t[2].length:0)+"";return{c:function(){n=F("section"),(e=F("h1")).textContent="The Forbes 2000 Ranking of the World's Biggest Companies (Year 2004)",r=N(),(o=F("div")).innerHTML='\n\t\tSource: <a href="http://www.forbes.com">www.forbes.com</a>, assessed on November 26th, 2004.\n\t',i=N(),(u=F("div")).innerHTML='\n\t\tDataset: <a href="https://github.com/vincentarelbundock/Rdatasets/blob/master/doc/HSAUR/Forbes2000.html">github.com/vincentarelbundock/Rdatasets</a>.\n\t',c=N(),a=F("div"),f=T("Showing "),s=T(m),l=T(" \r\n\t\tof "),p=T(b),h=T(" records \r\n\t\t("),v=T(w),d=T(" total)\r\n\t\t"),y=F("input"),z(o,"class","svelte-1nvxiuh"),z(u,"class","svelte-1nvxiuh"),z(y,"type","button"),y.value="Reload data",y.disabled=t[3],z(a,"class","svelte-1nvxiuh"),z(n,"class","svelte-1nvxiuh")},m:function(t,m,b){P(t,n,m),E(n,e),E(n,r),E(n,o),E(n,i),E(n,u),E(n,c),E(n,a),E(a,f),E(a,s),E(a,l),E(a,p),E(a,h),E(a,v),E(a,d),E(a,y),b&&g(),g=M(y,"click",Ht)},p:function(t,n){var e=bt(n,1)[0];1&e&&m!==(m=(t[0]?t[0].length:0)+"")&&B(s,m),2&e&&b!==(b=(t[1]?t[1].length:0)+"")&&B(p,b),4&e&&w!==(w=(Array.isArray(t[2])?t[2].length:0)+"")&&B(v,w),8&e&&(y.disabled=t[3])},i:x,o:x,d:function(t){t&&C(n),g()}}}function fn(t,n,e){var r,o,i,u;return A(t,un,(function(t){return e(0,r=t)})),A(t,Bt,(function(t){return e(1,o=t)})),A(t,Mt,(function(t){return e(2,i=t)})),A(t,zt,(function(t){return e(3,u=t)})),[r,o,i,u]}var sn=function(e){o(a,e);var r,i=(r=a,function(){var t,n=c(r);if(cn()){var e=c(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return u(this,t)});function a(e){var r;return t(this,a),r=i.call(this),ht(n(r),e,fn,an,S,{}),r}return a}(vt);function ln(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function pn(t){var n,e,r,o,i,u,c,a,f,s,l,p,h,v,d,y,g,m,b,w,$,O,j;return{c:function(){n=F("section"),(e=F("h2")).textContent="Filtering",r=N(),o=F("div"),(i=F("label")).textContent="Name contains",u=N(),c=F("input"),a=N(),f=F("div"),(s=F("label")).textContent="Country contains",l=N(),p=F("input"),h=N(),v=F("div"),(d=F("label")).textContent="Category contains",y=N(),g=F("input"),m=N(),b=F("div"),(w=F("label")).textContent="Assets >=",$=N(),O=F("input"),z(i,"for","filterName"),z(i,"class","svelte-4zuvn5"),z(c,"id","filterName"),z(c,"type","text"),c.disabled=t[4],z(o,"class","svelte-4zuvn5"),z(s,"for","filterCountry"),z(s,"class","svelte-4zuvn5"),z(p,"id","filterCountry"),z(p,"type","text"),p.disabled=t[4],z(f,"class","svelte-4zuvn5"),z(d,"for","filterCategory"),z(d,"class","svelte-4zuvn5"),z(g,"id","filterCategory"),z(g,"type","text"),g.disabled=t[4],z(v,"class","svelte-4zuvn5"),z(w,"for","filterAssets"),z(w,"class","svelte-4zuvn5"),z(O,"id","filterAssets"),z(O,"type","number"),O.disabled=t[4],z(b,"class","svelte-4zuvn5")},m:function(x,S,k){P(x,n,S),E(n,e),E(n,r),E(n,o),E(o,i),E(o,u),E(o,c),G(c,t[0]),E(n,a),E(n,f),E(f,s),E(f,l),E(f,p),G(p,t[1]),E(n,h),E(n,v),E(v,d),E(v,y),E(v,g),G(g,t[2]),E(n,m),E(n,b),E(b,w),E(b,$),E(b,O),G(O,t[3]),k&&R(j),j=[M(c,"input",t[6]),M(p,"input",t[7]),M(g,"input",t[8]),M(O,"input",t[9])]},p:function(t,n){var e=bt(n,1)[0];16&e&&(c.disabled=t[4]),1&e&&c.value!==t[0]&&G(c,t[0]),16&e&&(p.disabled=t[4]),2&e&&p.value!==t[1]&&G(p,t[1]),16&e&&(g.disabled=t[4]),4&e&&g.value!==t[2]&&G(g,t[2]),16&e&&(O.disabled=t[4]),8&e&&I(O.value)!==t[3]&&G(O,t[3])},i:x,o:x,d:function(t){t&&C(n),R(j)}}}function hn(t,n,e){var r,o;A(t,It,(function(t){return e(5,r=t)})),A(t,zt,(function(t){return e(4,o=t)}));var i="",u="",c="",a=0;return t.$$.update=function(){1&t.$$.dirty&&L(It,r.name=function(t){return 0==i.length||t.Name&&t.Name.toLowerCase().includes(i)},r),2&t.$$.dirty&&L(It,r.country=function(t){return 0==u.length||t.Country&&t.Country.toLowerCase().includes(u)},r),4&t.$$.dirty&&L(It,r.category=function(t){return 0==c.length||t.Category&&t.Category.toLowerCase().includes(c)},r),8&t.$$.dirty&&L(It,r.assets=function(t){return t.Assets>=a},r)},[i,u,c,a,o,r,function(){i=this.value,e(0,i)},function(){u=this.value,e(1,u)},function(){c=this.value,e(2,c)},function(){a=I(this.value),e(3,a)}]}var vn=function(e){o(a,e);var r,i=(r=a,function(){var t,n=c(r);if(ln()){var e=c(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return u(this,t)});function a(e){var r;return t(this,a),r=i.call(this),ht(n(r),e,hn,pn,S,{}),r}return a}(vt);function dn(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function yn(t){var n,e,r,o,i,u,c,a,f,s,l,p,h,v,d,y,g;return{c:function(){n=F("section"),(e=F("h2")).textContent="Results",r=N(),o=F("span"),i=T("Page "),u=T(t[0]),c=T(" of "),a=T(t[1]),f=N(),s=F("input"),l=N(),p=F("input"),h=N(),v=F("input"),d=N(),y=F("input"),z(s,"type","button"),s.value="First",s.disabled=t[2],z(p,"type","button"),p.value="Prev",p.disabled=t[2],z(v,"type","button"),v.value="Next",v.disabled=t[2],z(y,"type","button"),y.value="Last",y.disabled=t[2],z(n,"class","svelte-1ssl7w")},m:function(t,m,b){P(t,n,m),E(n,e),E(n,r),E(n,o),E(o,i),E(o,u),E(o,c),E(o,a),E(n,f),E(n,s),E(n,l),E(n,p),E(n,h),E(n,v),E(n,d),E(n,y),b&&R(g),g=[M(s,"click",nn),M(p,"click",en),M(v,"click",rn),M(y,"click",on)]},p:function(t,n){var e=bt(n,1)[0];1&e&&B(u,t[0]),2&e&&B(a,t[1]),4&e&&(s.disabled=t[2]),4&e&&(p.disabled=t[2]),4&e&&(v.disabled=t[2]),4&e&&(y.disabled=t[2])},i:x,o:x,d:function(t){t&&C(n),R(g)}}}function gn(t,n,e){var r,o,i;return A(t,Zt,(function(t){return e(0,r=t)})),A(t,tn,(function(t){return e(1,o=t)})),A(t,zt,(function(t){return e(2,i=t)})),U((function(){return t=50,Nt.reset(),void Xt.update((function(n){return Kt({},n,{start:0,step:t})}));var t})),[r,o,i]}var mn=function(e){o(a,e);var r,i=(r=a,function(){var t,n=c(r);if(dn()){var e=c(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return u(this,t)});function a(e){var r;return t(this,a),r=i.call(this),ht(n(r),e,gn,yn,S,{}),r}return a}(vt);function bn(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function wn(t,n,e){var r=t.slice();return r[3]=n[e],r}function xn(t){var n,e,r=t[3]+"";return{c:function(){n=F("th"),e=T(r),z(n,"class","svelte-1whojv3")},m:function(t,r){P(t,n,r),E(n,e)},p:function(t,n){1&n&&r!==(r=t[3]+"")&&B(e,r)},d:function(t){t&&C(n)}}}function $n(t){for(var n,e,r=t[0],o=[],i=0;i<r.length;i+=1)o[i]=xn(wn(t,r,i));return{c:function(){n=F("thead"),e=F("tr");for(var t=0;t<o.length;t+=1)o[t].c()},m:function(t,r){P(t,n,r),E(n,e);for(var i=0;i<o.length;i+=1)o[i].m(e,null)},p:function(t,n){var i=bt(n,1)[0];if(1&i){var u;for(r=t[0],u=0;u<r.length;u+=1){var c=wn(t,r,u);o[u]?o[u].p(c,i):(o[u]=xn(c),o[u].c(),o[u].m(e,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=r.length}},i:x,o:x,d:function(t){t&&C(n),D(o,t)}}}function On(t,n,e){var r,o;return A(t,qt,(function(t){return e(1,t)})),A(t,Mt,(function(t){return e(2,r=t)})),Y((function(){return Nt.update("Header updated")})),U((function(){L(qt,[{field:"Rank",ascending:!0}])})),t.$$.update=function(){4&t.$$.dirty&&e(0,o=Object.keys(r&&r.length>1?r[0]:{}))},[o]}var Rn=function(e){o(a,e);var r,i=(r=a,function(){var t,n=c(r);if(bn()){var e=c(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return u(this,t)});function a(e){var r;return t(this,a),r=i.call(this),ht(n(r),e,On,$n,S,{}),r}return a}(vt);function jn(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Sn(t,n,e){var r=t.slice();return r[4]=n[e],r}function kn(t,n,e){var r=t.slice();return r[1]=n[e],r}function _n(t){var n,e,r=t[4]+"";return{c:function(){n=F("td"),e=T(r),z(n,"class","svelte-1vxjktx")},m:function(t,r){P(t,n,r),E(n,e)},p:function(t,n){1&n&&r!==(r=t[4]+"")&&B(e,r)},d:function(t){t&&C(n)}}}function An(t,n){for(var e,r,o=Object.values(n[1]),i=[],u=0;u<o.length;u+=1)i[u]=_n(Sn(n,o,u));return{key:t,first:null,c:function(){e=F("tr");for(var t=0;t<i.length;t+=1)i[t].c();r=N(),z(e,"class","svelte-1vxjktx"),this.first=e},m:function(t,n){P(t,e,n);for(var o=0;o<i.length;o+=1)i[o].m(e,null);E(e,r)},p:function(t,n){if(1&n){var u;for(o=Object.values(t[1]),u=0;u<o.length;u+=1){var c=Sn(t,o,u);i[u]?i[u].p(c,n):(i[u]=_n(c),i[u].c(),i[u].m(e,r))}for(;u<i.length;u+=1)i[u].d(1);i.length=o.length}},d:function(t){t&&C(e),D(i,t)}}}function Ln(t){for(var n,e=[],r=new Map,o=t[0]||[],i=function(t){return t[1].Rank},u=0;u<o.length;u+=1){var c=kn(t,o,u),a=i(c);r.set(a,e[u]=An(a,c))}return{c:function(){n=F("tbody");for(var t=0;t<e.length;t+=1)e[t].c()},m:function(t,r){P(t,n,r);for(var o=0;o<e.length;o+=1)e[o].m(n,null)},p:function(t,o){var u=bt(o,1)[0];if(1&u){var c=t[0]||[];e=function(t,n,e,r,o,i,u,c,a,f,s,l){for(var p=t.length,h=i.length,v=p,d={};v--;)d[t[v].key]=v;var y=[],g=new Map,m=new Map;for(v=h;v--;){var b=l(o,i,v),w=e(b),x=u.get(w);x?r&&x.p(b,n):(x=f(w,b)).c(),g.set(w,y[v]=x),w in d&&m.set(w,Math.abs(v-d[w]))}var $=new Set,O=new Set;function R(t){ut(t,1),t.m(c,s,u.has(t.key)),u.set(t.key,t),s=t.first,h--}for(;p&&h;){var j=y[h-1],S=t[p-1],k=j.key,_=S.key;j===S?(s=j.first,p--,h--):g.has(_)?!u.has(k)||$.has(k)?R(j):O.has(_)?p--:m.get(k)>m.get(_)?(O.add(k),R(j)):($.add(_),p--):(a(S,u),p--)}for(;p--;){var A=t[p];g.has(A.key)||a(A,u)}for(;h;)R(y[h-1]);return y}(e,u,i,1,t,c,r,n,at,An,null,kn)}},i:x,o:x,d:function(t){t&&C(n);for(var r=0;r<e.length;r+=1)e[r].d()}}}function En(t,n,e){var r;return A(t,un,(function(t){return e(0,r=t)})),Y((function(){return Nt.update("Table updated")})),[r]}var Pn=function(e){o(a,e);var r,i=(r=a,function(){var t,n=c(r);if(jn()){var e=c(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return u(this,t)});function a(e){var r;return t(this,a),r=i.call(this),ht(n(r),e,En,Ln,S,{}),r}return a}(vt);function Cn(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Dn(t){var n,e,r,o=new Rn({}),i=new Pn({});return{c:function(){n=F("table"),ft(o.$$.fragment),e=N(),ft(i.$$.fragment),z(n,"class","svelte-kytung")},m:function(t,u){P(t,n,u),st(o,n,null),E(n,e),st(i,n,null),r=!0},p:x,i:function(t){r||(ut(o.$$.fragment,t),ut(i.$$.fragment,t),r=!0)},o:function(t){ct(o.$$.fragment,t),ct(i.$$.fragment,t),r=!1},d:function(t){t&&C(n),lt(o),lt(i)}}}var Fn=function(e){o(a,e);var r,i=(r=a,function(){var t,n=c(r);if(Cn()){var e=c(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return u(this,t)});function a(e){var r;return t(this,a),r=i.call(this),ht(n(r),e,null,Dn,S,{}),r}return a}(vt);function Tn(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Nn(t){var n,e,r,o,i=new sn({}),u=new vn({}),c=new mn({}),a=new Fn({});return{c:function(){ft(i.$$.fragment),n=N(),ft(u.$$.fragment),e=N(),ft(c.$$.fragment),r=N(),ft(a.$$.fragment)},m:function(t,f){st(i,t,f),P(t,n,f),st(u,t,f),P(t,e,f),st(c,t,f),P(t,r,f),st(a,t,f),o=!0},p:x,i:function(t){o||(ut(i.$$.fragment,t),ut(u.$$.fragment,t),ut(c.$$.fragment,t),ut(a.$$.fragment,t),o=!0)},o:function(t){ct(i.$$.fragment,t),ct(u.$$.fragment,t),ct(c.$$.fragment,t),ct(a.$$.fragment,t),o=!1},d:function(t){lt(i,t),t&&C(n),lt(u,t),t&&C(e),lt(c,t),t&&C(r),lt(a,t)}}}function Mn(t){return Nt.subscribe((function(t){return console.log(t)})),U((function(){return Ht()})),[]}var zn=new(function(e){o(a,e);var r,i=(r=a,function(){var t,n=c(r);if(Tn()){var e=c(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return u(this,t)});function a(e){var r;return t(this,a),r=i.call(this),ht(n(r),e,Mn,Nn,S,{}),r}return a}(vt))({target:document.body});return window.app=zn,zn}();
