(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{379:function(t,e,r){},381:function(t,e,r){"use strict";r.r(e);r(38);var s=r(16);const{normalize:n,isAbsolute:i}=r(163);var c={name:"LazyImage",mixins:[{methods:{requireAsset:function(t){if(!t)return"";if(Object(s.b)(t))return t;if(i(t)){const e=n(t).replace(/^\/|\/$/g,"");try{return r(164)("./"+e)}catch(t){return console.error("Could not load asset: ",e),""}}}}}],props:{alt:{type:String,required:!0},caption:{type:String,default:""},imgClass:{type:[Array,String],default:""},src:{type:String,required:!0},srcset:{type:Object,default:null},srcPlaceholder:{type:String,default:""},sizes:{type:String,default:""},ctx:{type:String,default:null}},computed:{srcsetString(){const t=this.srcset,e=this;return t?Object.keys(t).map((function(r,s){return`${e.requireAsset(t[r],e.ctx)} ${r}`})).join(", "):""}}},a=(r(384),r(4)),l=Object(a.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("v-lazy-image",{class:t.imgClass,attrs:{alt:t.alt,sizes:t.sizes,srcset:t.srcsetString,src:t.requireAsset(t.src),"src-placeholder":t.requireAsset(t.srcPlaceholder),loading:"lazy"}}),t._v(" "),t.caption?e("p",{staticClass:"type-p4 mt-3"},[t._v(t._s(t.caption))]):t._e()],1)}),[],!1,null,"5f678761",null);e.default=l.exports},384:function(t,e,r){"use strict";r(379)}}]);