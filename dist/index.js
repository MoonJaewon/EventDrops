!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(t.eventDrops=t.eventDrops||{})}(this,function(t){"use strict";function r(t,r){return r={exports:{}},t(r,r.exports),r.exports}var n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=r(function(t,r){function e(t,r){return t.set(r[0],r[1]),t}function o(t,r){return t.add(r),t}function a(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}function u(t,r){for(var n=-1,e=t?t.length:0;++n<e&&!1!==r(t[n],n,t););return t}function i(t,r){for(var n=-1,e=r.length,o=t.length;++n<e;)t[o+n]=r[n];return t}function c(t,r,n,e){var o=-1,a=t?t.length:0;for(e&&a&&(n=t[++o]);++o<a;)n=r(n,t[o],o,t);return n}function f(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}function l(t,r){return null==t?void 0:t[r]}function s(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function p(t){var r=-1,n=Array(t.size);return t.forEach(function(t,e){n[++r]=[e,t]}),n}function d(t,r){return function(n){return t(r(n))}}function h(t){var r=-1,n=Array(t.size);return t.forEach(function(t){n[++r]=t}),n}function v(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function _(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function y(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function b(t){this.__data__=new _(t)}function g(t,r){var n=Rr(t)||at(t)?f(t.length,String):[],e=n.length,o=!!e;for(var a in t)!r&&!lr.call(t,a)||o&&("length"==a||J(a,e))||n.push(a);return n}function j(t,r,n){(void 0===n||ot(t[r],n))&&("number"!=typeof r||void 0!==n||r in t)||(t[r]=n)}function m(t,r,n){var e=t[r];lr.call(t,r)&&ot(e,n)&&(void 0!==n||r in t)||(t[r]=n)}function w(t,r){for(var n=t.length;n--;)if(ot(t[n][0],r))return n;return-1}function x(t,r){return t&&L(r,ht(r),t)}function A(t,r,n,e,o,a,i){var c;if(e&&(c=a?e(t,o,a,i):e(t)),void 0!==c)return c;if(!lt(t))return t;var f=Rr(t);if(f){if(c=Y(t),!r)return W(t,c)}else{var l=Cr(t),p=l==wt||l==xt;if(Wr(t))return F(t,r);if(l==St||l==gt||p&&!a){if(s(t))return a?t:{};if(c=q(p?{}:t),!r)return G(t,x(c,t))}else{if(!qt[l])return a?t:{};c=H(t,l,A,r)}}i||(i=new b);var d=i.get(t);if(d)return d;if(i.set(t,c),!f)var h=n?V(t):ht(t);return u(h||t,function(o,a){h&&(o=t[a=o]),m(c,a,A(o,r,n,e,a,t,i))}),c}function O(t){return lt(t)?br(t):{}}function S(t,r,n){var e=r(t);return Rr(t)?e:i(e,n(t))}function D(t){return!(!lt(t)||Z(t))&&(ct(t)||s(t)?dr:Nt).test(et(t))}function $(t){if(!tt(t))return xr(t);var r=[];for(var n in Object(t))lr.call(t,n)&&"constructor"!=n&&r.push(n);return r}function k(t){if(!lt(t))return nt(t);var r=tt(t),n=[];for(var e in t)("constructor"!=e||!r&&lr.call(t,e))&&n.push(e);return n}function E(t,r,n,e,o){if(t!==r){if(!Rr(r)&&!Lr(r))var a=k(r);u(a||r,function(u,i){if(a&&(u=r[i=u]),lt(u))o||(o=new b),M(t,r,i,n,E,e,o);else{var c=e?e(t[i],u,i+"",t,r,o):void 0;void 0===c&&(c=u),j(t,i,c)}})}}function M(t,r,n,e,o,a,u){var i=t[n],c=r[n],f=u.get(c);if(f)j(t,n,f);else{var l=a?a(i,c,n+"",t,r,u):void 0,s=void 0===l;s&&(l=c,Rr(c)||Lr(c)?Rr(i)?l=i:it(i)?l=W(i):(s=!1,l=A(c,!0)):pt(c)||at(c)?at(i)?l=dt(i):!lt(i)||e&&ct(i)?(s=!1,l=A(c,!0)):l=i:s=!1),s&&(u.set(c,l),o(l,c,e,a,u),u.delete(c)),j(t,n,l)}}function P(t,r){return r=Ar(void 0===r?t.length-1:r,0),function(){for(var n=arguments,e=-1,o=Ar(n.length-r,0),u=Array(o);++e<o;)u[e]=n[r+e];e=-1;for(var i=Array(r+1);++e<r;)i[e]=n[e];return i[r]=u,a(t,this,i)}}function F(t,r){if(r)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}function T(t){var r=new t.constructor(t.byteLength);return new _r(r).set(new _r(t)),r}function I(t,r){var n=r?T(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function B(t,r,n){return c(r?n(p(t),!0):p(t),e,new t.constructor)}function U(t){var r=new t.constructor(t.source,Vt.exec(t));return r.lastIndex=t.lastIndex,r}function z(t,r,n){return c(r?n(h(t),!0):h(t),o,new t.constructor)}function C(t){return Ur?Object(Ur.call(t)):{}}function R(t,r){var n=r?T(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function W(t,r){var n=-1,e=t.length;for(r||(r=Array(e));++n<e;)r[n]=t[n];return r}function L(t,r,n,e){n||(n={});for(var o=-1,a=r.length;++o<a;){var u=r[o],i=e?e(n[u],t[u],u,n,t):void 0;m(n,u,void 0===i?t[u]:i)}return n}function G(t,r){return L(t,zr(t),r)}function V(t){return S(t,ht,zr)}function N(t,r){var n=t.__data__;return Q(r)?n["string"==typeof r?"string":"hash"]:n.map}function X(t,r){var n=l(t,r);return D(n)?n:void 0}function Y(t){var r=t.length,n=t.constructor(r);return r&&"string"==typeof t[0]&&lr.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function q(t){return"function"!=typeof t.constructor||tt(t)?{}:O(yr(t))}function H(t,r,n,e){var o=t.constructor;switch(r){case Pt:return T(t);case jt:case mt:return new o(+t);case Ft:return I(t,e);case Tt:case It:case Bt:case Ut:case zt:case Ct:case Rt:case Wt:case Lt:return R(t,e);case At:return B(t,e,n);case Ot:case kt:return new o(t);case Dt:return U(t);case $t:return z(t,e,n);case Et:return C(t)}}function J(t,r){return!!(r=null==r?bt:r)&&("number"==typeof t||Xt.test(t))&&t>-1&&t%1==0&&t<r}function K(t,r,n){if(!lt(n))return!1;var e=typeof r;return!!("number"==e?ut(n)&&J(r,n.length):"string"==e&&r in n)&&ot(n[r],t)}function Q(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}function Z(t){return!!cr&&cr in t}function tt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||ur)}function rt(t,r,n,e,o,a){return lt(t)&&lt(r)&&(a.set(r,t),E(t,r,void 0,rt,a),a.delete(r)),t}function nt(t){var r=[];if(null!=t)for(var n in Object(t))r.push(n);return r}function et(t){if(null!=t){try{return fr.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function ot(t,r){return t===r||t!==t&&r!==r}function at(t){return it(t)&&lr.call(t,"callee")&&(!gr.call(t,"callee")||pr.call(t)==gt)}function ut(t){return null!=t&&ft(t.length)&&!ct(t)}function it(t){return st(t)&&ut(t)}function ct(t){var r=lt(t)?pr.call(t):"";return r==wt||r==xt}function ft(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=bt}function lt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function st(t){return!!t&&"object"==typeof t}function pt(t){if(!st(t)||pr.call(t)!=St||s(t))return!1;var r=yr(t);if(null===r)return!0;var n=lr.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&fr.call(n)==sr}function dt(t){return L(t,vt(t))}function ht(t){return ut(t)?g(t):$(t)}function vt(t){return ut(t)?g(t,!0):k(t)}var _t=200,yt="__lodash_hash_undefined__",bt=9007199254740991,gt="[object Arguments]",jt="[object Boolean]",mt="[object Date]",wt="[object Function]",xt="[object GeneratorFunction]",At="[object Map]",Ot="[object Number]",St="[object Object]",Dt="[object RegExp]",$t="[object Set]",kt="[object String]",Et="[object Symbol]",Mt="[object WeakMap]",Pt="[object ArrayBuffer]",Ft="[object DataView]",Tt="[object Float32Array]",It="[object Float64Array]",Bt="[object Int8Array]",Ut="[object Int16Array]",zt="[object Int32Array]",Ct="[object Uint8Array]",Rt="[object Uint8ClampedArray]",Wt="[object Uint16Array]",Lt="[object Uint32Array]",Gt=/[\\^$.*+?()[\]{}|]/g,Vt=/\w*$/,Nt=/^\[object .+?Constructor\]$/,Xt=/^(?:0|[1-9]\d*)$/,Yt={};Yt[Tt]=Yt[It]=Yt[Bt]=Yt[Ut]=Yt[zt]=Yt[Ct]=Yt[Rt]=Yt[Wt]=Yt[Lt]=!0,Yt[gt]=Yt["[object Array]"]=Yt[Pt]=Yt[jt]=Yt[Ft]=Yt[mt]=Yt["[object Error]"]=Yt[wt]=Yt[At]=Yt[Ot]=Yt[St]=Yt[Dt]=Yt[$t]=Yt[kt]=Yt[Mt]=!1;var qt={};qt[gt]=qt["[object Array]"]=qt[Pt]=qt[Ft]=qt[jt]=qt[mt]=qt[Tt]=qt[It]=qt[Bt]=qt[Ut]=qt[zt]=qt[At]=qt[Ot]=qt[St]=qt[Dt]=qt[$t]=qt[kt]=qt[Et]=qt[Ct]=qt[Rt]=qt[Wt]=qt[Lt]=!0,qt["[object Error]"]=qt[wt]=qt[Mt]=!1;var Ht="object"==typeof n&&n&&n.Object===Object&&n,Jt="object"==typeof self&&self&&self.Object===Object&&self,Kt=Ht||Jt||Function("return this")(),Qt=r&&!r.nodeType&&r,Zt=Qt&&!0&&t&&!t.nodeType&&t,tr=Zt&&Zt.exports===Qt,rr=tr&&Ht.process,nr=function(){try{return rr&&rr.binding("util")}catch(t){}}(),er=nr&&nr.isTypedArray,or=Array.prototype,ar=Function.prototype,ur=Object.prototype,ir=Kt["__core-js_shared__"],cr=function(){var t=/[^.]+$/.exec(ir&&ir.keys&&ir.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),fr=ar.toString,lr=ur.hasOwnProperty,sr=fr.call(Object),pr=ur.toString,dr=RegExp("^"+fr.call(lr).replace(Gt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),hr=tr?Kt.Buffer:void 0,vr=Kt.Symbol,_r=Kt.Uint8Array,yr=d(Object.getPrototypeOf,Object),br=Object.create,gr=ur.propertyIsEnumerable,jr=or.splice,mr=Object.getOwnPropertySymbols,wr=hr?hr.isBuffer:void 0,xr=d(Object.keys,Object),Ar=Math.max,Or=X(Kt,"DataView"),Sr=X(Kt,"Map"),Dr=X(Kt,"Promise"),$r=X(Kt,"Set"),kr=X(Kt,"WeakMap"),Er=X(Object,"create"),Mr=et(Or),Pr=et(Sr),Fr=et(Dr),Tr=et($r),Ir=et(kr),Br=vr?vr.prototype:void 0,Ur=Br?Br.valueOf:void 0;v.prototype.clear=function(){this.__data__=Er?Er(null):{}},v.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},v.prototype.get=function(t){var r=this.__data__;if(Er){var n=r[t];return n===yt?void 0:n}return lr.call(r,t)?r[t]:void 0},v.prototype.has=function(t){var r=this.__data__;return Er?void 0!==r[t]:lr.call(r,t)},v.prototype.set=function(t,r){return this.__data__[t]=Er&&void 0===r?yt:r,this},_.prototype.clear=function(){this.__data__=[]},_.prototype.delete=function(t){var r=this.__data__,n=w(r,t);return!(n<0||(n==r.length-1?r.pop():jr.call(r,n,1),0))},_.prototype.get=function(t){var r=this.__data__,n=w(r,t);return n<0?void 0:r[n][1]},_.prototype.has=function(t){return w(this.__data__,t)>-1},_.prototype.set=function(t,r){var n=this.__data__,e=w(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},y.prototype.clear=function(){this.__data__={hash:new v,map:new(Sr||_),string:new v}},y.prototype.delete=function(t){return N(this,t).delete(t)},y.prototype.get=function(t){return N(this,t).get(t)},y.prototype.has=function(t){return N(this,t).has(t)},y.prototype.set=function(t,r){return N(this,t).set(t,r),this},b.prototype.clear=function(){this.__data__=new _},b.prototype.delete=function(t){return this.__data__.delete(t)},b.prototype.get=function(t){return this.__data__.get(t)},b.prototype.has=function(t){return this.__data__.has(t)},b.prototype.set=function(t,r){var n=this.__data__;if(n instanceof _){var e=n.__data__;if(!Sr||e.length<_t-1)return e.push([t,r]),this;n=this.__data__=new y(e)}return n.set(t,r),this};var zr=mr?d(mr,Object):function(){return[]},Cr=function(t){return pr.call(t)};(Or&&Cr(new Or(new ArrayBuffer(1)))!=Ft||Sr&&Cr(new Sr)!=At||Dr&&"[object Promise]"!=Cr(Dr.resolve())||$r&&Cr(new $r)!=$t||kr&&Cr(new kr)!=Mt)&&(Cr=function(t){var r=pr.call(t),n=r==St?t.constructor:void 0,e=n?et(n):void 0;if(e)switch(e){case Mr:return Ft;case Pr:return At;case Fr:return"[object Promise]";case Tr:return $t;case Ir:return Mt}return r});var Rr=Array.isArray,Wr=wr||function(){return!1},Lr=er?function(t){return function(r){return t(r)}}(er):function(t){return st(t)&&ft(t.length)&&!!Yt[pr.call(t)]},Gr=P(function(t){return t.push(void 0,rt),a(Vr,void 0,t)}),Vr=function(t){return P(function(r,n){var e=-1,o=n.length,a=o>1?n[o-1]:void 0,u=o>2?n[2]:void 0;for(a=t.length>3&&"function"==typeof a?(o--,a):void 0,u&&K(n[0],n[1],u)&&(a=o<3?void 0:a,o=1),r=Object(r);++e<o;){var i=n[e];i&&t(r,i,e,a)}return r})}(function(t,r,n,e){E(t,r,n,e)});t.exports=Gr}),o=function(t,r){return function(n){var e=t.label.width,o=n.selectAll(".axis").data(function(t){return t});o.exit().remove(),o.enter().filter(function(t,r){return!r}).append("g").classed("axis",!0).attr("transform","translate("+e+",0)").call(d3.axisTop(r)),o.call(d3.axisTop(r))}},a=function(t,r){return function(n){var e=t.margin,o=t.bound.format,a=t.label.width,u=t.line.height,i=n.selectAll(".bound").data(function(t){return t}),c=n.data()[0].length;i.exit().remove(),i.enter().filter(function(t,r){return!r}).append("g").classed("bound",!0).classed("start",!0).attr("transform","translate("+a+", "+(u*c+e.top)+")").append("text").text(o(r.domain()[0])),i.enter().filter(function(t,r){return!r}).append("g").classed("bound",!0).classed("end",!0).attr("transform","translate("+a+", "+(u*c+e.top)+")").append("text").attr("x",r.range()[1]-e.right).attr("text-anchor","end").text(o(r.domain()[1])),i.selectAll(".bound.start text").text(o(r.domain()[0])),i.selectAll(".bound.end text").text(o(r.domain()[1]))}},u={metaballs:{blurDeviation:10,colorMatrix:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -10"},bound:{format:d3.timeFormat("%d %B %Y")},drop:{color:null,radius:5},label:{padding:20,text:function(t){return t.name+" ("+t.data.length+")"},width:200},line:{color:function(t,r){return d3.schemeCategory10[r]},height:40},margin:{top:20,right:10,bottom:20,left:10},range:{start:new Date((new Date).getTime()-31536e6),end:new Date}},i=r(function(t,r){function e(t,r){return!!(t?t.length:0)&&i(t,r,0)>-1}function o(t,r,n){for(var e=-1,o=t?t.length:0;++e<o;)if(n(r,t[e]))return!0;return!1}function a(t,r){for(var n=-1,e=t?t.length:0;++n<e;)if(r(t[n],n,t))return!0;return!1}function u(t,r,n,e){for(var o=t.length,a=n+(e?1:-1);e?a--:++a<o;)if(r(t[a],a,t))return a;return-1}function i(t,r,n){if(r!==r)return u(t,c,n);for(var e=n-1,o=t.length;++e<o;)if(t[e]===r)return e;return-1}function c(t){return t!==t}function f(t){return function(r){return null==r?void 0:r[t]}}function l(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}function s(t,r){return t.has(r)}function p(t,r){return null==t?void 0:t[r]}function d(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function h(t){var r=-1,n=Array(t.size);return t.forEach(function(t,e){n[++r]=[e,t]}),n}function v(t){var r=-1,n=Array(t.size);return t.forEach(function(t){n[++r]=t}),n}function _(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function y(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function b(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function g(t){var r=-1,n=t?t.length:0;for(this.__data__=new b;++r<n;)this.add(t[r])}function j(t){this.__data__=new y(t)}function m(t,r){var n=Pr(t)||rt(t)?l(t.length,String):[],e=n.length,o=!!e;for(var a in t)!r&&!ir.call(t,a)||o&&("length"==a||V(a,e))||n.push(a);return n}function w(t,r){for(var n=t.length;n--;)if(tt(t[n][0],r))return n;return-1}function x(t,r){for(var n=0,e=(r=N(r,t)?[r]:B(r)).length;null!=t&&n<e;)t=t[K(r[n++])];return n&&n==e?t:void 0}function A(t,r){return null!=t&&r in Object(t)}function O(t,r,n,e,o){return t===r||(null==t||null==r||!ut(t)&&!it(r)?t!==t&&r!==r:S(t,r,O,n,e,o))}function S(t,r,n,e,o,a){var u=Pr(t),i=Pr(r),c=xt,f=xt;u||(c=(c=Er(t))==wt?Mt:c),i||(f=(f=Er(r))==wt?Mt:f);var l=c==Mt&&!d(t),s=f==Mt&&!d(r),p=c==f;if(p&&!l)return a||(a=new j),u||Fr(t)?U(t,r,n,e,o,a):z(t,r,c,n,e,o,a);if(!(o&gt)){var h=l&&ir.call(t,"__wrapped__"),v=s&&ir.call(r,"__wrapped__");if(h||v){var _=h?t.value():t,y=v?r.value():r;return a||(a=new j),n(_,y,e,o,a)}}return!!p&&(a||(a=new j),C(t,r,n,e,o,a))}function D(t,r,n,e){var o=n.length,a=o,u=!e;if(null==t)return!a;for(t=Object(t);o--;){var i=n[o];if(u&&i[2]?i[1]!==t[i[0]]:!(i[0]in t))return!1}for(;++o<a;){var c=(i=n[o])[0],f=t[c],l=i[1];if(u&&i[2]){if(void 0===f&&!(c in t))return!1}else{var s=new j;if(e)var p=e(f,l,c,t,r,s);if(!(void 0===p?O(l,f,e,bt|gt,s):p))return!1}}return!0}function $(t){return!(!ut(t)||Y(t))&&(ot(t)||d(t)?fr:Vt).test(Q(t))}function k(t){return"function"==typeof t?t:null==t?dt:"object"==typeof t?Pr(t)?P(t[0],t[1]):M(t):ht(t)}function E(t){if(!q(t))return hr(t);var r=[];for(var n in Object(t))ir.call(t,n)&&"constructor"!=n&&r.push(n);return r}function M(t){var r=W(t);return 1==r.length&&r[0][2]?J(r[0][0],r[0][1]):function(n){return n===t||D(n,t,r)}}function P(t,r){return N(t)&&H(r)?J(K(t),r):function(n){var e=lt(n,t);return void 0===e&&e===r?st(n,t):O(r,e,void 0,bt|gt)}}function F(t){return function(r){return x(r,t)}}function T(t){if("string"==typeof t)return t;if(ct(t))return $r?$r.call(t):"";var r=t+"";return"0"==r&&1/t==-jt?"-0":r}function I(t,r,n){var a=-1,u=e,i=t.length,c=!0,f=[],l=f;if(n)c=!1,u=o;else if(i>=vt){var p=r?null:kr(t);if(p)return v(p);c=!1,u=s,l=new g}else l=r?[]:f;t:for(;++a<i;){var d=t[a],h=r?r(d):d;if(d=n||0!==d?d:0,c&&h===h){for(var _=l.length;_--;)if(l[_]===h)continue t;r&&l.push(h),f.push(d)}else u(l,h,n)||(l!==f&&l.push(h),f.push(d))}return f}function B(t){return Pr(t)?t:Mr(t)}function U(t,r,n,e,o,u){var i=o&gt,c=t.length,f=r.length;if(c!=f&&!(i&&f>c))return!1;var l=u.get(t);if(l&&u.get(r))return l==r;var s=-1,p=!0,d=o&bt?new g:void 0;for(u.set(t,r),u.set(r,t);++s<c;){var h=t[s],v=r[s];if(e)var _=i?e(v,h,s,r,t,u):e(h,v,s,t,r,u);if(void 0!==_){if(_)continue;p=!1;break}if(d){if(!a(r,function(t,r){if(!d.has(r)&&(h===t||n(h,t,e,o,u)))return d.add(r)})){p=!1;break}}else if(h!==v&&!n(h,v,e,o,u)){p=!1;break}}return u.delete(t),u.delete(r),p}function z(t,r,n,e,o,a,u){switch(n){case Ut:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case Bt:return!(t.byteLength!=r.byteLength||!e(new sr(t),new sr(r)));case At:case Ot:case Et:return tt(+t,+r);case St:return t.name==r.name&&t.message==r.message;case Pt:case Tt:return t==r+"";case kt:var i=h;case Ft:var c=a&gt;if(i||(i=v),t.size!=r.size&&!c)return!1;var f=u.get(t);if(f)return f==r;a|=bt,u.set(t,r);var l=U(i(t),i(r),e,o,a,u);return u.delete(t),l;case It:if(Dr)return Dr.call(t)==Dr.call(r)}return!1}function C(t,r,n,e,o,a){var u=o&gt,i=pt(t),c=i.length;if(c!=pt(r).length&&!u)return!1;for(var f=c;f--;){var l=i[f];if(!(u?l in r:ir.call(r,l)))return!1}var s=a.get(t);if(s&&a.get(r))return s==r;var p=!0;a.set(t,r),a.set(r,t);for(var d=u;++f<c;){var h=t[l=i[f]],v=r[l];if(e)var _=u?e(v,h,l,r,t,a):e(h,v,l,t,r,a);if(!(void 0===_?h===v||n(h,v,e,o,a):_)){p=!1;break}d||(d="constructor"==l)}if(p&&!d){var y=t.constructor,b=r.constructor;y!=b&&"constructor"in t&&"constructor"in r&&!("function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b)&&(p=!1)}return a.delete(t),a.delete(r),p}function R(t,r){var n=t.__data__;return X(r)?n["string"==typeof r?"string":"hash"]:n.map}function W(t){for(var r=pt(t),n=r.length;n--;){var e=r[n],o=t[e];r[n]=[e,o,H(o)]}return r}function L(t,r){var n=p(t,r);return $(n)?n:void 0}function G(t,r,n){for(var e,o=-1,a=(r=N(r,t)?[r]:B(r)).length;++o<a;){var u=K(r[o]);if(!(e=null!=t&&n(t,u)))break;t=t[u]}return e||!!(a=t?t.length:0)&&at(a)&&V(u,a)&&(Pr(t)||rt(t))}function V(t,r){return!!(r=null==r?mt:r)&&("number"==typeof t||Nt.test(t))&&t>-1&&t%1==0&&t<r}function N(t,r){if(Pr(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!ct(t))||(Ct.test(t)||!zt.test(t)||null!=r&&t in Object(r))}function X(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}function Y(t){return!!ar&&ar in t}function q(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||er)}function H(t){return t===t&&!ut(t)}function J(t,r){return function(n){return null!=n&&(n[t]===r&&(void 0!==r||t in Object(n)))}}function K(t){if("string"==typeof t||ct(t))return t;var r=t+"";return"0"==r&&1/t==-jt?"-0":r}function Q(t){if(null!=t){try{return ur.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Z(t,r){if("function"!=typeof t||r&&"function"!=typeof r)throw new TypeError(_t);var n=function(){var e=arguments,o=r?r.apply(this,e):e[0],a=n.cache;if(a.has(o))return a.get(o);var u=t.apply(this,e);return n.cache=a.set(o,u),u};return n.cache=new(Z.Cache||b),n}function tt(t,r){return t===r||t!==t&&r!==r}function rt(t){return et(t)&&ir.call(t,"callee")&&(!pr.call(t,"callee")||cr.call(t)==wt)}function nt(t){return null!=t&&at(t.length)&&!ot(t)}function et(t){return it(t)&&nt(t)}function ot(t){var r=ut(t)?cr.call(t):"";return r==Dt||r==$t}function at(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=mt}function ut(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function it(t){return!!t&&"object"==typeof t}function ct(t){return"symbol"==typeof t||it(t)&&cr.call(t)==It}function ft(t){return null==t?"":T(t)}function lt(t,r,n){var e=null==t?void 0:x(t,r);return void 0===e?n:e}function st(t,r){return null!=t&&G(t,r,A)}function pt(t){return nt(t)?m(t):E(t)}function dt(t){return t}function ht(t){return N(t)?f(K(t)):F(t)}var vt=200,_t="Expected a function",yt="__lodash_hash_undefined__",bt=1,gt=2,jt=1/0,mt=9007199254740991,wt="[object Arguments]",xt="[object Array]",At="[object Boolean]",Ot="[object Date]",St="[object Error]",Dt="[object Function]",$t="[object GeneratorFunction]",kt="[object Map]",Et="[object Number]",Mt="[object Object]",Pt="[object RegExp]",Ft="[object Set]",Tt="[object String]",It="[object Symbol]",Bt="[object ArrayBuffer]",Ut="[object DataView]",zt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ct=/^\w*$/,Rt=/^\./,Wt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lt=/[\\^$.*+?()[\]{}|]/g,Gt=/\\(\\)?/g,Vt=/^\[object .+?Constructor\]$/,Nt=/^(?:0|[1-9]\d*)$/,Xt={};Xt["[object Float32Array]"]=Xt["[object Float64Array]"]=Xt["[object Int8Array]"]=Xt["[object Int16Array]"]=Xt["[object Int32Array]"]=Xt["[object Uint8Array]"]=Xt["[object Uint8ClampedArray]"]=Xt["[object Uint16Array]"]=Xt["[object Uint32Array]"]=!0,Xt[wt]=Xt[xt]=Xt[Bt]=Xt[At]=Xt[Ut]=Xt[Ot]=Xt[St]=Xt[Dt]=Xt[kt]=Xt[Et]=Xt[Mt]=Xt[Pt]=Xt[Ft]=Xt[Tt]=Xt["[object WeakMap]"]=!1;var Yt="object"==typeof n&&n&&n.Object===Object&&n,qt="object"==typeof self&&self&&self.Object===Object&&self,Ht=Yt||qt||Function("return this")(),Jt=r&&!r.nodeType&&r,Kt=Jt&&!0&&t&&!t.nodeType&&t,Qt=Kt&&Kt.exports===Jt&&Yt.process,Zt=function(){try{return Qt&&Qt.binding("util")}catch(t){}}(),tr=Zt&&Zt.isTypedArray,rr=Array.prototype,nr=Function.prototype,er=Object.prototype,or=Ht["__core-js_shared__"],ar=function(){var t=/[^.]+$/.exec(or&&or.keys&&or.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ur=nr.toString,ir=er.hasOwnProperty,cr=er.toString,fr=RegExp("^"+ur.call(ir).replace(Lt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),lr=Ht.Symbol,sr=Ht.Uint8Array,pr=er.propertyIsEnumerable,dr=rr.splice,hr=function(t,r){return function(n){return t(r(n))}}(Object.keys,Object),vr=L(Ht,"DataView"),_r=L(Ht,"Map"),yr=L(Ht,"Promise"),br=L(Ht,"Set"),gr=L(Ht,"WeakMap"),jr=L(Object,"create"),mr=Q(vr),wr=Q(_r),xr=Q(yr),Ar=Q(br),Or=Q(gr),Sr=lr?lr.prototype:void 0,Dr=Sr?Sr.valueOf:void 0,$r=Sr?Sr.toString:void 0;_.prototype.clear=function(){this.__data__=jr?jr(null):{}},_.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},_.prototype.get=function(t){var r=this.__data__;if(jr){var n=r[t];return n===yt?void 0:n}return ir.call(r,t)?r[t]:void 0},_.prototype.has=function(t){var r=this.__data__;return jr?void 0!==r[t]:ir.call(r,t)},_.prototype.set=function(t,r){return this.__data__[t]=jr&&void 0===r?yt:r,this},y.prototype.clear=function(){this.__data__=[]},y.prototype.delete=function(t){var r=this.__data__,n=w(r,t);return!(n<0||(n==r.length-1?r.pop():dr.call(r,n,1),0))},y.prototype.get=function(t){var r=this.__data__,n=w(r,t);return n<0?void 0:r[n][1]},y.prototype.has=function(t){return w(this.__data__,t)>-1},y.prototype.set=function(t,r){var n=this.__data__,e=w(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},b.prototype.clear=function(){this.__data__={hash:new _,map:new(_r||y),string:new _}},b.prototype.delete=function(t){return R(this,t).delete(t)},b.prototype.get=function(t){return R(this,t).get(t)},b.prototype.has=function(t){return R(this,t).has(t)},b.prototype.set=function(t,r){return R(this,t).set(t,r),this},g.prototype.add=g.prototype.push=function(t){return this.__data__.set(t,yt),this},g.prototype.has=function(t){return this.__data__.has(t)},j.prototype.clear=function(){this.__data__=new y},j.prototype.delete=function(t){return this.__data__.delete(t)},j.prototype.get=function(t){return this.__data__.get(t)},j.prototype.has=function(t){return this.__data__.has(t)},j.prototype.set=function(t,r){var n=this.__data__;if(n instanceof y){var e=n.__data__;if(!_r||e.length<vt-1)return e.push([t,r]),this;n=this.__data__=new b(e)}return n.set(t,r),this};var kr=br&&1/v(new br([,-0]))[1]==jt?function(t){return new br(t)}:function(){},Er=function(t){return cr.call(t)};(vr&&Er(new vr(new ArrayBuffer(1)))!=Ut||_r&&Er(new _r)!=kt||yr&&"[object Promise]"!=Er(yr.resolve())||br&&Er(new br)!=Ft||gr&&"[object WeakMap]"!=Er(new gr))&&(Er=function(t){var r=cr.call(t),n=r==Mt?t.constructor:void 0,e=n?Q(n):void 0;if(e)switch(e){case mr:return Ut;case wr:return kt;case xr:return"[object Promise]";case Ar:return Ft;case Or:return"[object WeakMap]"}return r});var Mr=Z(function(t){t=ft(t);var r=[];return Rt.test(t)&&r.push(""),t.replace(Wt,function(t,n,e,o){r.push(e?o.replace(Gt,"$1"):n||t)}),r});Z.Cache=b;var Pr=Array.isArray,Fr=tr?function(t){return function(r){return t(r)}}(tr):function(t){return it(t)&&at(t.length)&&!!Xt[cr.call(t)]};t.exports=function(t,r){return t&&t.length?I(t,k(r,2)):[]}}),c=function(t){return function(r){return i(r.data,function(r){return Math.round(t(new Date(r.date)))})}},f=function(t,r){return function(n){var e=t.drop,o=e.color,a=e.radius,u=n.selectAll(".drop").data(c(r));u.enter().append("circle").classed("drop",!0).attr("r",a).attr("fill",o).merge(u).attr("cx",function(t){return r(new Date(t.date))}),u.exit().remove()}},l=function(t,r){return function(n){var e=t.metaballs,o=t.label,a=o.text,u=o.padding,i=o.width,c=t.line,l=c.color,s=c.height,p=n.selectAll(".drop-line").data(function(t){return t}),d=p.enter().append("g").classed("drop-line",!0).attr("fill",l).attr("transform",function(t,r){return"translate(0, "+r*s+")"});d.append("line").classed("line-separator",!0).attr("x1",i).attr("x2","100%").attr("y1",function(){return s}).attr("y2",function(){return s}),d.append("text").attr("x",i-u).attr("y",s/2).attr("dy","0.25em").attr("text-anchor","end").text(a);var h=d.append("g").classed("drops",!0).attr("transform",function(){return"translate("+i+", "+s/2+")"}).call(f(t,r));h.append("rect").attr("x",0).attr("y",-t.line.height/2).attr("width",1).attr("height",t.line.height).attr("fill","transparent"),e&&h.style("filter","url(#metaballs)"),p.selectAll("text").text(a),p.selectAll(".drops").call(f(t,r)),p.exit().remove()}},s=function(t,r,n,e){var o=d3.zoom();return o.on("zoom",function(){var t=d3.event.transform.rescaleX(n);d3.selectAll("svg").call(e(r,t))}),o},p=function(t){return function(r){var n=t.metaballs,e=n.blurDeviation,o=n.colorMatrix,a=r.append("defs").append("filter").attr("id","metaballs");a.append("feGaussianBlur").attr("in","SourceGraphic").attr("stdDeviation",e).attr("result","blur"),a.append("feColorMatrix").attr("in","blur").attr("mode","matrix").attr("values",o).attr("result","contrast"),a.append("feBlend").attr("in","SourceGraphic").attr("in2","contrast")}},d=function(t,r){return new Date(t)>=r[0]&&new Date(t)<=r[1]},h=function(t,r){return function(n){var e=r.domain().map(function(t){return new Date(t)}),u=n.data().map(function(t){return t.map(function(t){return t.fullData||(t.fullData=t.data),t.data=t.fullData.filter(function(t){return d(t.date,e)}),t})});n.data(u).call(l(t,r)).call(a(t,r)).call(o(t,r))}};t.withinRange=d,t.draw=h,t.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(r){var n=e(t,u),o=n.metaballs,a=n.label.width,i=n.line.height,c=n.range,f=c.start,l=c.end,d=n.margin,v=r.node().clientWidth-d.left-d.right,_=d3.scaleTime().domain([f,l]).range([0,v-a]),y=r.selectAll("svg").data(r.data());y.exit().remove();var b=y.enter().append("svg").attr("width",v).classed("event-drop-chart",!0).call(s(0,n,_,h));o&&b.call(p(n)),b.merge(y).attr("height",function(t){return(t.length+1)*i+d.top+d.bottom}),b.append("g").classed("viewport",!0).attr("transform","translate("+d.left+","+d.top+")").call(h(n,_))}},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
