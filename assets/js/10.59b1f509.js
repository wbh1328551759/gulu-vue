(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{302:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},303:function(t,n,s){var a=s(24),e="["+s(302)+"]",r=RegExp("^"+e+e+"*"),o=RegExp(e+e+"*$"),c=function(t){return function(n){var s=String(a(n));return 1&t&&(s=s.replace(r,"")),2&t&&(s=s.replace(o,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},305:function(t,n,s){"use strict";var a=s(1),e=s(303).trim;a({target:"String",proto:!0,forced:s(307)("trim")},{trim:function(){return e(this)}})},306:function(t,n,s){"use strict";var a=s(6),e=s(4),r=s(94),o=s(11),c=s(7),i=s(18),l=s(310),p=s(44),f=s(2),u=s(29),g=s(65).f,v=s(25).f,d=s(9).f,m=s(303).trim,h=e.Number,w=h.prototype,_="Number"==i(u(w)),b=function(t){var n,s,a,e,r,o,c,i,l=p(t,!1);if("string"==typeof l&&l.length>2)if(43===(n=(l=m(l)).charCodeAt(0))||45===n){if(88===(s=l.charCodeAt(2))||120===s)return NaN}else if(48===n){switch(l.charCodeAt(1)){case 66:case 98:a=2,e=49;break;case 79:case 111:a=8,e=55;break;default:return+l}for(o=(r=l.slice(2)).length,c=0;c<o;c++)if((i=r.charCodeAt(c))<48||i>e)return NaN;return parseInt(r,a)}return+l};if(r("Number",!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var C,N=function(t){var n=arguments.length<1?0:t,s=this;return s instanceof N&&(_?f((function(){w.valueOf.call(s)})):"Number"!=i(s))?l(new h(b(n)),s,N):b(n)},y=a?g(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)c(h,C=y[x])&&!c(N,C)&&d(N,C,v(h,C));N.prototype=w,w.constructor=N,o(e,"Number",N)}},307:function(t,n,s){var a=s(2),e=s(302);t.exports=function(t){return a((function(){return!!e[t]()||"​᠎"!="​᠎"[t]()||e[t].name!==t}))}},308:function(t,n,s){},309:function(t,n,s){},310:function(t,n,s){var a=s(5),e=s(95);t.exports=function(t,n,s){var r,o;return e&&"function"==typeof(r=n.constructor)&&r!==s&&a(o=r.prototype)&&o!==s.prototype&&e(t,o),t}},319:function(t,n,s){"use strict";var a=s(308);s.n(a).a},320:function(t,n,s){"use strict";var a=s(309);s.n(a).a},321:function(t,n,s){"use strict";s(92),s(165),s(306),s(93);var a={name:"GuluRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(n){n.gutter=t.gutter}))}},e=(s(319),s(43)),r=Object(e.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"455dcdac",null);n.a=r.exports},322:function(t,n,s){"use strict";s(167),s(92),s(166),s(306),s(96),s(93);var a=s(30),e=function(t){var n=Object.keys(t),s=!0;return n.forEach((function(t){["span","offset"].includes(t)||(s=!1)})),s},r={name:"GuluCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:e},narrowPc:{type:Object,validator:e},pc:{type:Object,validator:e},widePc:{type:Object,validator:e}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var s=[];return t.span&&s.push("col-".concat(n).concat(t.span)),t.offset&&s.push("offset-".concat(n).concat(t.offset)),s}},computed:{colClass:function(){var t=this.span,n=this.offset,s=this.ipad,e=this.narrowPc,r=this.pc,o=this.widePc,c=this.createClasses;return[].concat(Object(a.a)(c({span:t,offset:n})),Object(a.a)(c(s,"ipad-")),Object(a.a)(c(e,"narrow-pc-")),Object(a.a)(c(r,"pc-")),Object(a.a)(c(o,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},o=(s(320),s(43)),c=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"4ffb5a20",null);n.a=c.exports},350:function(t,n,s){},415:function(t,n,s){"use strict";var a=s(350);s.n(a).a},459:function(t,n,s){"use strict";s.r(n);s(305);var a=s(321),e=s(322),r={components:{"g-row":a.a,"g-col":e.a},data:function(){return{content:'\n<template>\n  <div class="offset-wrapper">\n    <g-row class="row">\n      <g-col class="item" span="8">\n        <span>col-8</span>\n      </g-col>\n      <g-col class="item" span="8">\n        <span>col-8</span>\n      </g-col>\n      <g-col class="item" span="4" offset="4">\n        <span>col-4</span>\n      </g-col>\n    </g-row>\n    <g-row class="row">\n      <g-col class="item" span="8">\n        <span>col-8</span>\n      </g-col>\n      <g-col class="item" span="5" offset="3">\n        <span>col-5</span>\n      </g-col>\n      <g-col class="item" span="4" offset="4">\n        <span>col-4</span>\n      </g-col>\n    </g-row>\n    <g-row class="row">\n      <g-col class="item" span="2" offset="6">\n        <span>col-2</span>\n      </g-col>\n      <g-col class="item" span="5" offset="3">\n        <span>col-5</span>\n      </g-col>\n      <g-col class="item" span="4" offset="4">\n        <span>col-4</span>\n      </g-col>\n    </g-row>\n    <pre><code>{{content}}</code></pre>\n  </div>\n</template>\n<style lang="scss" scoped>\n$background: #3eaf7c;\n$wrapper-top: 10px;\n$font-color: white;\n* {\n  box-sizing: border-box;\n}\n.offset-wrapper {\n  padding-top: $wrapper-top;\n  > .row {\n    > .item {\n      text-align: center;\n      color: $font-color;\n      > span {\n        display: block;\n        background: $background;\n      }\n    }\n  }\n}\n</style>\n      '.trim()}}},o=(s(415),s(43)),c=Object(o.a)(r,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"offset-wrapper"},[s("g-row",{staticClass:"row"},[s("g-col",{staticClass:"item",attrs:{span:"8"}},[s("span",[t._v("col-8")])]),t._v(" "),s("g-col",{staticClass:"item",attrs:{span:"8"}},[s("span",[t._v("col-8")])]),t._v(" "),s("g-col",{staticClass:"item",attrs:{span:"4",offset:"4"}},[s("span",[t._v("col-4")])])],1),t._v(" "),s("g-row",{staticClass:"row"},[s("g-col",{staticClass:"item",attrs:{span:"8"}},[s("span",[t._v("col-8")])]),t._v(" "),s("g-col",{staticClass:"item",attrs:{span:"5",offset:"3"}},[s("span",[t._v("col-5")])]),t._v(" "),s("g-col",{staticClass:"item",attrs:{span:"4",offset:"4"}},[s("span",[t._v("col-4")])])],1),t._v(" "),s("g-row",{staticClass:"row"},[s("g-col",{staticClass:"item",attrs:{span:"2",offset:"6"}},[s("span",[t._v("col-2")])]),t._v(" "),s("g-col",{staticClass:"item",attrs:{span:"5",offset:"3"}},[s("span",[t._v("col-5")])]),t._v(" "),s("g-col",{staticClass:"item",attrs:{span:"4",offset:"4"}},[s("span",[t._v("col-4")])])],1),t._v(" "),s("pre",[s("code",[t._v(t._s(t.content))])])],1)}),[],!1,null,"7d16e8a8",null);n.default=c.exports}}]);