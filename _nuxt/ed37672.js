(window.webpackJsonp=window.webpackJsonp||[]).push([[39,18,19],{607:function(t,e,n){"use strict";n.r(e);n(90);var r=n(28),o=n(47),c=n(45),l=n(32),f=n(17),v=(n(14),n(91));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(o.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(v.Vue);h([Object(v.Prop)({required:!0})],y.prototype,"size",void 0),h([Object(v.Prop)({required:!0})],y.prototype,"total",void 0);var m=y=h([v.Component],y),j=n(97),component=Object(j.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("データセットの統計情報")]),t._v(" "),n("p",[t._v("\n    データセットに含まれる文字種を、頻度順文字種リストまたはコード順文字種リストで一覧できます。くずし字の一つ一つの文字の形の違いだけでなく、くずし字の元となる字母の違いによる異体字のバリエーションなど、実際の字形を画像で確認しながら、くずし字の学習などにご利用ください。文字をクリックすると字形一覧ページに移動します。文字の検索にはブラウザの検索機能を使って下さい。\n  ")]),t._v(" "),n("p",[t._v("\n    なおデータセット全体の統計情報については、くずし字データセット\n    文字種（くずし字）一覧、また検索にはくずし字データベース検索（ひらがな（変体仮名）・カタカナ・漢字）をご利用下さい。\n  ")]),t._v(" "),n("p",[t._v("\n    文字種："+t._s(t.size.toLocaleString())+" ／ 文字数："+t._s(t.total.toLocaleString())+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},608:function(t,e,n){"use strict";n.r(e);n(90);var r=n(28),o=n(47),c=n(45),l=n(32),f=n(17),v=(n(14),n(91));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(o.a)(n,t);var e=d(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://hi-ut.github.io/kuzushiji",t.headers=[{text:"文字種",value:"label"},{text:"出現回数",value:"size"},{text:"コード",value:"code"}],t}return n}(v.Vue);h([Object(v.Prop)({required:!0})],y.prototype,"items",void 0),h([Object(v.Prop)({})],y.prototype,"query",void 0);var m=y=h([v.Component],y),j=n(97),O=n(111),_=n.n(O),R=n(698),component=Object(j.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-data-table",{attrs:{headers:t.headers,items:t.items,"items-per-page":50},scopedSlots:t._u([{key:"item.label",fn:function(e){var r=e.item;return[n("nuxt-link",{attrs:{to:t.localePath({name:"unicode-id",params:{id:r.label},query:t.query})}},[t._v("\n        "+t._s(r.label)+"\n      ")])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VDataTable:R.a})},609:function(t,e,n){"use strict";n.r(e);n(90);var r=n(28),o=n(42),c=n(47),l=n(45),f=n(32),v=n(17),d=(n(14),n(91));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://hi-ut.github.io/kuzushiji",t.page=1,t.perPage=300,t}return Object(o.a)(n,[{key:"len",get:function(){return Math.ceil(this.items.length/this.perPage)}},{key:"initPage",value:function(){this.page=1}},{key:"items2",get:function(){for(var data=this.items,t=[],e=[],i=0;i<data.length;i++)i%12==0&&(t=[],e.push(t)),data[i].index=i+1,t.push(data[i]);return e}}]),n}(d.Vue);y([Object(d.Prop)({required:!0})],m.prototype,"items",void 0),y([Object(d.Prop)({})],m.prototype,"query",void 0),y([Object(d.Watch)("items")],m.prototype,"initPage",null);var j=m=y([d.Component],m),O=n(97),_=n(111),R=n.n(_),x=n(224),P=n(588),k=n(619),w=n(589),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mt-5"},[n("v-row",{attrs:{dense:""}},t._l(t.items.slice(t.perPage*(t.page-1),t.perPage*t.page),(function(e,r){return n("v-col",{key:r,attrs:{cols:"4",sm:"1"}},[n("v-card",{attrs:{outlined:""}},[n("div",{staticClass:"pa-2"},[n("small",[t._v(t._s(e.code))]),t._v(" "),n("h3",[n("nuxt-link",{attrs:{to:t.localePath({name:"unicode-id",params:{id:e.label},query:t.query})}},[t._v(t._s(e.label)+"\n              ")])],1),t._v(" "),n("div",{staticClass:"text-right"},[n("h4",[t._v(t._s(e.size.toLocaleString())+" "),n("small",[t._v("件")])]),t._v(" "),n("small",[t._v(t._s(e.index)+"位")])])])])],1)})),1),t._v(" "),n("div",{staticClass:"text-center mt-10"},[n("v-pagination",{attrs:{length:t.len,"total-visible":7},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;R()(component,{VCard:x.a,VCol:P.a,VPagination:k.a,VRow:w.a})},717:function(t,e,n){"use strict";n.r(e);n(90),n(43),n(22),n(29),n(48),n(37),n(9),n(51),n(54),n(40);var r=n(24),o=n(28),c=n(42),l=n(47),f=n(45),v=n(32),d=n(17),h=(n(78),n(14),n(38),n(183),n(91)),y=n(123),m=n.n(y),j=n(609),O=n(608),_=n(607);function R(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var k=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},w=function(t){Object(l.a)(f,t);var e,n=P(f);function f(){var t;return Object(o.a)(this,f),(t=n.apply(this,arguments)).title="くずし字データセット 文字種（くずし字）一覧",t.search="",t.layouts=[{icon:"mdi-view-grid",value:"grid"},{icon:"mdi-table",value:"table"}],t.layout_="grid",t.items=[],t.bh=[{text:t.$t("top"),disabled:!1,to:t.localePath({name:"index"}),exact:!0},{text:"文字種一覧"}],t.baseUrl="https://hi-ut.github.io/kuzushiji",t.total=0,t}return Object(c.a)(f,[{key:"head",value:function(){return{title:this.title}}},{key:"mounted",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,data,n,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get(this.baseUrl+"/data/001_list.json");case 2:for(e=t.sent,data=e.data,console.log(1),data.sort((function(a,b){return a.size<b.size?1:a.size>b.size?-1:0})),console.log(2),n=0,i=0;i<data.length;i++)r=data[i],n+=r.size,r.index=i+1;console.log(3),this.total=n,this.items=data;case 12:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"items2",get:function(){var t=this.search,e=this.items;if(!t)return e;var n,r=[],o=R(e);try{for(o.s();!(n=o.n()).done;){var c=n.value;if(t===c.label){r.push(c);break}}}catch(t){o.e(t)}finally{o.f()}return r}}]),f}(h.Vue),C=w=k([Object(h.Component)({components:{List:j.default,Table:O.default,Static:_.default}})],w),V=n(97),S=n(111),z=n.n(S),B=n(592),A=n(247),$=n(588),D=n(575),E=n(226),L=n(589),T=n(71),U=n(566),component=Object(V.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-sheet",{attrs:{color:"grey lighten-2"}},[n("v-container",{staticClass:"py-4",attrs:{fluid:""}},[n("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.bh},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),t._v(" "),n("v-container",{staticClass:"my-5"},[n("h2",{staticClass:"mb-5"},[t._v(t._s(t.title))]),t._v(" "),n("Static",{attrs:{size:t.items.length,total:t.total}}),t._v(" "),n("h4",{staticClass:"mt-10"},[t._v("文字種リスト")]),t._v(" "),n("v-text-field",{staticClass:"my-10",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",filled:"",rounded:"","background-color":"grey lighten-2","clear-icon":"mdi-close-circle",clearable:!0},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-row",[n("v-col"),t._v(" "),n("v-col",{staticClass:"text-right"},t._l(t.layouts,(function(option,e){return n("v-btn",{key:e,attrs:{icon:""},on:{click:function(e){t.layout_=option.value}}},[n("v-icon",{attrs:{color:t.layout_===option.value?"primary":""}},[t._v(t._s(option.icon))])],1)})),1)],1),t._v(" "),"grid"===t.layout_?[n("List",{attrs:{items:t.items2}})]:[n("Table",{attrs:{items:t.items2}})]],2)],1)}),[],!1,null,null,null);e.default=component.exports;z()(component,{VBreadcrumbs:B.a,VBtn:A.a,VCol:$.a,VContainer:D.a,VIcon:E.a,VRow:L.a,VSheet:T.a,VTextField:U.a})}}]);