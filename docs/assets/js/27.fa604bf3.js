(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{382:function(t,e,a){"use strict";a.r(e);var r=a(18),o=a(7),n={name:"PostAuthor",components:{},props:{author:{type:Array,default:null},light:{type:Boolean,default:null},parent:{type:String,default:"card"}},computed:{...Object(r.b)("appState",["activeAuthor"]),computedClassName(){return["hover:underline cursor-pointer",this.light?"text-blueGreenLight":"hover:text-blueGreen"]}},methods:{handleAuthorClick(t){const e={author:t.name,method:this.parent+"-select"};o.a.trackEvent(o.a.events.FILTER,e),this.$store.commit("appState/setActiveAuthor",t)}}},l=a(4),s=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-row flex-wrap"},t._l(t.author,(function(a,r){return e("div",{key:a.name,staticClass:"flex flex-row flex-wrap",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[e("span",{staticClass:"flex flex-row",attrs:{itemprop:"name"}},[e("router-link",{attrs:{to:{path:t.$localePath,query:{author:a.slug}},rel:"nofollow"}},[e("span",{class:t.computedClassName,on:{click:function(e){return t.handleAuthorClick(a)}}},[t._v("\n          "+t._s(a.name)+"\n        ")])]),t._v(" "),e("span",[t._v(t._s(1!==t.author.length&&r!==t.author.length-1?", ":""))])],1)])})),0)}),[],!1,null,null,null);e.default=s.exports}}]);