(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{179:function(t,e,n){var content=n(182);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("37dcb7ba",content,!0,{sourceMap:!1})},180:function(t,e,n){var content=n(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("6759f5ab",content,!0,{sourceMap:!1})},181:function(t,e,n){"use strict";var r=n(179);n.n(r).a},182:function(t,e,n){(e=n(61)(!1)).push([t.i,"*[data-v-1fe7ff52]{box-sizing:border-box}span[data-v-1fe7ff52]{font-size:72px}button[data-v-1fe7ff52],input[data-v-1fe7ff52]{display:block;margin:20px;width:100%;text-align:center;font-size:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:none}input[data-v-1fe7ff52]{outline:1px dashed #fff}.post-it[data-v-1fe7ff52]{font-size:36px;display:flex;flex-direction:column;align-items:center;justify-content:center;width:210px;height:210px;margin:0 auto;color:#000;background:#eee8aa;-webkit-clip-path:polygon(0 0,25% 0,2% 33%,35% 0,100% 0,100% 100%,0 100%);clip-path:polygon(0 0,25% 0,2% 33%,35% 0,100% 0,100% 100%,0 100%)}",""]),t.exports=e},183:function(t,e,n){"use strict";var r=n(180);n.n(r).a},184:function(t,e,n){(e=n(61)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""]),t.exports=e},185:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{isEditing:!1,text:"Hellou!"}},methods:{setText:function(t){this.text=t.target.value,this.isEditing=!1},editText:function(t){var e=this;this.isEditing=!0,this.$nextTick((function(){return e.$refs.form_input.focus()}))}}},o=(n(181),n(22)),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-it"},[t.isEditing?n("span",[t._v("📝")]):n("span",[t._v("👋")]),t._v(" "),t.isEditing?n("input",{ref:"form_input",attrs:{placeholder:[[t.text]],type:"text"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setText(e)}}}):n("button",{attrs:{type:"button"},on:{click:t.editText}},[t._v("\n    "+t._s(t.text)+"\n  ")])])}),[],!1,null,"1fe7ff52",null).exports,l=(n(78),n(20),n(21),n(13),n(63),n(56)),f=n(75),d={props:{value:{type:Object,default:function(){return{x:0,y:0,text:""}}}},methods:{handleInput:function(){this.$emit("input",{x:parseInt(this.$refs.x.value),y:parseInt(this.$refs.y.value),text:this.$refs.text.value})}}};function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h={components:{Card:Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:function(e){return t.$emit("delete")}}},[t._v("Delete")]),t._v(" "),n("div",[t._v("\n    X:\n    "),n("input",{ref:"x",attrs:{type:"number"},domProps:{value:t.value.x},on:{input:t.handleInput}})]),t._v(" "),n("div",[t._v("\n    Y:\n    "),n("input",{ref:"y",attrs:{type:"number"},domProps:{value:t.value.y},on:{input:t.handleInput}})]),t._v(" "),n("div",[t._v("\n    Text: "),n("input",{ref:"text",domProps:{value:t.value.text},on:{input:t.handleInput}})])])}),[],!1,null,null,null).exports},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.b)(["cards"])),methods:{addCard:function(){this.$store.commit("addCard")},deleteCard:function(t){this.$store.commit("deleteCard",t)},updateCard:function(t,e){this.$store.commit("updateCard",{index:t,card:e})}}},x={components:{Logo:c,Board:Object(o.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.cards,(function(e,r){return n("div",[n("card",{key:r,attrs:{value:e},on:{input:function(e){return t.updateCard(r,e)},delete:function(e){return t.deleteCard(r)}}})],1)})),t._v(" "),n("button",{on:{click:t.addCard}},[t._v("Add new card")])],2)}),[],!1,null,null,null).exports}},m=(n(183),Object(o.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",[e("logo"),this._v(" "),e("h1",{staticClass:"title"},[this._v("\n      koffer\n    ")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("\n      Moderationskoffer\n    ")]),this._v(" "),e("board")],1)])}),[],!1,null,null,null));e.default=m.exports}}]);