(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{584:function(e,t,r){var content=r(585);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("b1bed018",content,!0,{sourceMap:!1})},585:function(e,t,r){var n=r(19)(!1);n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=n},597:function(e,t,r){"use strict";r(11),r(9),r(10),r(14),r(12),r(16);var n=r(3),c=(r(76),r(584),r(85)),o=r(7);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),f=r(1),v=Object(f.h)("v-breadcrumbs__divider","li"),m=r(21);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(o.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(h,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},710:function(e,t,r){"use strict";r.r(t);r(90);var n=r(24),c=r(28),o=r(42),l=r(47),d=r(45),h=r(32),f=r(17),v=(r(78),r(14),r(38),r(184),r(56),r(73),r(91)),m=r(124),y=r.n(m);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(h.a)(e);if(t){var c=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var j=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},_=function(e){Object(l.a)(d,e);var t,r=O(d);function d(){var e;return Object(c.a)(this,d),(e=r.apply(this,arguments)).id=e.$route.params.id,e.search="",e.headers=[{text:"文字種",value:"label"},{text:"頻度",value:"size"},{text:"コード",value:"unicode"}],e.item={},e.items=[],e.bh=[],e.title="",e.baseUrl="https://hi-ut.github.io/kuzushiji",e.map={},e}return Object(o.a)(d,[{key:"head",value:function(){return{title:this.title}}},{key:"mounted",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(){var t,data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(this.baseUrl+"/data/book/"+this.id+".json");case 2:t=e.sent,data=t.data,this.title=data.label+"（"+this.id+"）",this.bh=[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{disabled:!1,to:this.localePath({name:"book"}),text:"データセット一覧",exact:!0},{text:this.title}],this.item=data,(r=data.list).sort((function(a,b){return a.size<b.size?1:a.size>b.size?-1:0})),this.items=r,this.search=decodeURIComponent(this.$route.hash.replace("#",""));case 11:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),d}(v.Vue),x=_=j([Object(v.Component)({})],_),w=r(97),P=r(111),k=r.n(P),S=r(597),R=r(575),z=r(698),C=r(226),D=r(71),$=r(566),component=Object(w.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-4",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:e.bh},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),e._v(" "),r("v-container",{staticClass:"my-5"},[r("h2",{staticClass:"mb-5"},[e._v(e._s(e.title))]),e._v(" "),r("h3",[e._v("データセットの統計情報")]),e._v(" "),r("p",[e._v("\n      データセットに含まれる文字種を、頻度順文字種リストまたはコード順文字種リストで一覧できます。くずし字の一つ一つの文字の形の違いだけでなく、くずし字の元となる字母の違いによる異体字のバリエーションなど、実際の字形を画像で確認しながら、くずし字の学習などにご利用ください。文字をクリックすると字形一覧ページに移動します。文字の検索にはブラウザの検索機能を使って下さい。\n    ")]),e._v(" "),r("p",[e._v("\n      なおデータセット全体の統計情報については、くずし字データセット\n      文字種（くずし字）一覧、また検索にはくずし字データベース検索（ひらがな（変体仮名）・カタカナ・漢字）をご利用下さい。\n    ")]),e._v(" "),e.item.size?r("p",[e._v("\n      文字種："+e._s(e.item.size.toLocaleString())+" ／ 文字数："+e._s(e.item.total.toLocaleString())+"\n    ")]):e._e(),e._v(" "),r("h4",[e._v("頻度順文字種リスト")]),e._v(" "),r("v-text-field",{staticClass:"my-10",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",filled:"",rounded:"","background-color":"grey lighten-2"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("v-data-table",{attrs:{headers:e.headers,items:e.items,"items-per-page":50,search:e.search},scopedSlots:e._u([{key:"item.label",fn:function(t){var n=t.item;return[r("nuxt-link",{attrs:{to:e.localePath({name:"unicode-id",params:{id:n.label},query:{id:e.id}})}},[e._v("\n          "+e._s(n.label)+"\n        ")])]}}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;k()(component,{VBreadcrumbs:S.a,VContainer:R.a,VDataTable:z.a,VIcon:C.a,VSheet:D.a,VTextField:$.a})}}]);