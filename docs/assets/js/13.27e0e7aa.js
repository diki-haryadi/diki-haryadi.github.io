(window.webpackJsonp=window.webpackJsonp||[]).push([[13,16,25,29,30],{377:function(t,e,a){"use strict";a.r(e);var s={name:"UnstyledLink",mixins:[a(84).a],props:{item:{type:Object,default:()=>{}},to:{type:String,default:null}}},o=a(4),r=Object(o.a)(s,(function(){var t=this._self._c;return this.isInternal?t("RouterLink",{attrs:{to:this.link,exact:this.exact}},[this._t("default")],2):t("a",{attrs:{href:this.link,rel:this.rel,target:"_blank"}},[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},378:function(t,e,a){"use strict";a.r(e);var s=a(7),o={name:"PostTag",props:{link:{type:Boolean,default:()=>!1},tag:{type:Object,required:!0},dark:{type:Boolean,default:null},className:{type:String,default:""},callback:{type:Function,default:()=>{}},parent:{type:String,default:"card"}},computed:{computedClass(){return["post-tag leading-none p-1 mr-1 rounded cursor-pointer transition duration-300 ease-in-out",this.dark?"bg-white text-charcoal hover:bg-charcoalMuted hover:text-white my-1":"bg-white text-charcoalMuted hover:bg-charcoalMuted hover:text-white",this.className]}},methods:{handleTagClick(){this.trackTag(),this.$store.commit("appState/setActiveTags",[this.tag.slug])},addNewTag(){this.trackTag(),this.$store.commit("appState/addNewTag",[this.tag.slug]),this.callback()},trackTag(){const t={tag:this.tag.name,method:this.parent+"-select"};s.a.trackEvent(s.a.events.FILTER,t)}}},r=a(4),i=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.link?e("router-link",{class:t.computedClass,attrs:{to:{path:t.$localePath,query:{tags:t.tag.slug}},rel:"nofollow"},nativeOn:{click:function(e){return t.handleTagClick.apply(null,arguments)}}},[t._v("\n  #"+t._s(t.tag.name)+"\n")]):e("button",{class:t.computedClass,on:{click:t.addNewTag}},[t._v("\n  #"+t._s(t.tag.name)+"\n")])}),[],!1,null,null,null);e.default=i.exports},380:function(t,e,a){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(s,o,r){var i=o.prototype;r.utc=function(t){var e={date:t,utc:!0,args:arguments};return new o(e)},i.utc=function(e){var a=r(this.toDate(),{locale:this.$L,utc:!0});return e?a.add(this.utcOffset(),t):a},i.local=function(){return r(this.toDate(),{locale:this.$L,utc:!1})};var n=i.parse;i.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),n.call(this,t)};var l=i.init;i.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else l.call(this)};var c=i.utcOffset;i.utcOffset=function(s,o){var r=this.$utils().u;if(r(s))return this.$u?0:r(this.$offset)?c.call(this):this.$offset;if("string"==typeof s&&null===(s=function(t){void 0===t&&(t="");var s=t.match(e);if(!s)return null;var o=(""+s[0]).match(a)||["-",0,0],r=o[0],i=60*+o[1]+ +o[2];return 0===i?0:"+"===r?i:-i}(s)))return this;var i=Math.abs(s)<=16?60*s:s,n=this;if(o)return n.$offset=i,n.$u=0===s,n;if(0!==s){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(n=this.local().add(i+l,t)).$offset=i,n.$x.$localOffset=l}else n=this.utc();return n};var d=i.format;i.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,e)},i.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var u=i.toDate;i.toDate=function(t){return"s"===t&&this.$offset?r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():u.call(this)};var h=i.diff;i.diff=function(t,e,a){if(t&&this.$u===t.$u)return h.call(this,t,e,a);var s=this.local(),o=r(t).local();return h.call(s,o,e,a)}}}()},383:function(t,e,a){"use strict";a.r(e);var s=a(33),o=a(7),r={name:"PostSocials",components:{SVGIcon:s.default},props:{url:{type:String,default:""},title:{type:String,default:""}},data:()=>({socialLinks:[{text:"Twitter",network:"twitter",icon:"twitter-icon",twitterHandle:"IPFS"},{text:"Facebook",network:"facebook",icon:"facebook-icon"}],currentUrl:"",host:""}),mounted(){this.currentUrl=window.location.href,this.host=window.location.host},methods:{shareClick(t){o.a.trackEvent(o.a.events.SOCIAL_MEDIA_SHARE,{view:this.$route.path,text:t.text})}}},i=a(4),n=Object(i.a)(r,(function(){var t=this,e=t._self._c;return e("div",t._l(t.socialLinks,(function(a){return e("ShareNetwork",{key:a.text,staticClass:"mr-1 last:mr-0",attrs:{network:a.network,url:t.url?t.url:t.currentUrl,title:t.title?t.title:"",description:"",quote:`${t.title} ${t.url?t.url:t.currentUrl} via ${t.host}`,hashtags:"","twitter-user":a.twitterHandle},on:{open:function(e){return t.shareClick(a)}}},[e("SVGIcon",{staticClass:"w-6 h-6 opacity-50 fill-current text-blueGreen hover:opacity-100 transition transition-opacity duration-300 ease-in-out",attrs:{name:a.icon,title:a.text}})],1)})),1)}),[],!1,null,null,null);e.default=n.exports},390:function(t,e,a){},395:function(t,e,a){"use strict";a.r(e);a(12),a(26),a(160),a(161),a(162);var s=a(18),o=a(85),r=a.n(o),i=a(380),n=a.n(i),l=a(377),c=a(383),d=a(378),u=a(7),h={name:"VideoModalContent",components:{UnstyledLink:l.default,PostSocials:c.default,PostTag:d.default},props:{closeModal:{type:Function,default:()=>{}}},computed:{...Object(s.b)("appState",["videoModalCard"]),resolvedPath(){if(!this.videoModalCard.path.includes("youtube")||this.videoModalCard.path.includes("embed"))return this.videoModalCard.path;const t=new URL(this.videoModalCard.path),e=t.searchParams.get("t")&&t.searchParams.get("t").slice(0,t.searchParams.get("t").length-1),a=t.searchParams.get("v")||t.searchParams.get("list");return t.pathname.includes("list")?"https://www.youtube.com/embed/videoseries?list="+a:`https://www.youtube.com/embed/${a}?${e?"start="+e:""}`},resolvedDate(){return r.a.extend(n.a),r.a.utc(this.date).format(this.$themeLocaleConfig.dateFormat||"YYYY-MM-DD")},resolvedTags(){return!this.videoModalCard.frontmatter.tags||Array.isArray(this.videoModalCard.frontmatter.tags)?this.videoModalCard.frontmatter.tags:this.videoModalCard.frontmatter.tags.replace(/, /g,",").split(",").filter(t=>t)}},methods:{handleCatClick(){const t={category:this.videoModalCard.frontmatter.type.name,method:"video-modal-select"};u.a.trackEvent(u.a.events.FILTER,t),this.$store.commit("appState/setActiveCategory",this.videoModalCard.frontmatter.type),this.closeModal()}}},f=a(4),m=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"group rounded flex flex-col",attrs:{itemprop:"mainEntityOfPage"}},[e("article",{attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[e("h1",{staticClass:"type-h5 text-xl text-primary mr-4"},[e("UnstyledLink",{staticClass:"clamp-3 hover:underline",attrs:{to:t.videoModalCard.path}},[t._v("\n        "+t._s(t.videoModalCard.title)+"\n      ")])],1),t._v(" "),e("div",{staticClass:"cover embed-responsive embed-responsive-og my-4"},[e("iframe",{staticClass:"h-full w-full",attrs:{type:"text/html",src:t.resolvedPath,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",frameborder:"0"}})]),t._v(" "),e("div",{staticClass:"text-sm"},[e("time",{staticClass:"text-gray-dark",attrs:{pubdate:"",itemprop:"datePublished",datetime:t.videoModalCard.frontmatter.date}},[t._v("\n        "+t._s(t.resolvedDate)+"\n      ")]),t._v(" "),e("div",{staticClass:"mt-3 flex flex-wrap",attrs:{itemprop:"keywords"}},[t.videoModalCard.frontmatter.type?e("button",{staticClass:"p-1 bg-aquaMuted leading-none bg-opacity-50 rounded text-blueGreen font-semibold hover:bg-blueGreen hover:text-white text-sm mr-1",on:{click:function(e){return t.handleCatClick()}}},[t._v("\n          "+t._s(t.videoModalCard.frontmatter.type.name)+"\n        ")]):t._e(),t._v(" "),t._l(t.resolvedTags,(function(a){return e("PostTag",{key:a.slug,attrs:{tag:a,callback:t.closeModal,"class-name":"text-sm",parent:"video-modal"}})}))],2)]),t._v(" "),e("footer",{staticClass:"flex-grow"},[t.videoModalCard.frontmatter.description||t.videoModalCard.frontmatter.description?e("p",{staticClass:"type-p1 text-primary clamp-5",attrs:{itemprop:"description"}},[t._v("\n        "+t._s(t.videoModalCard.frontmatter.description||t.videoModalCard.frontmatter.description)+"\n      ")]):t._e()]),t._v(" "),e("div",{staticClass:"flex items-end mt-4"},[e("span",{staticClass:"text-sm text-gray-dark"},[t._v("Share this item:")]),t._v(" "),e("PostSocials",{staticClass:"flex ml-2",attrs:{url:t.videoModalCard.path,title:t.videoModalCard.frontmatter.title}})],1)])])}),[],!1,null,null,null);e.default=m.exports},398:function(t,e,a){"use strict";a(390)},409:function(t,e,a){"use strict";a.r(e);var s=a(18),o={name:"VideoModal",components:{VideoModalContent:a(395).default},props:{},data:()=>({show:!1}),computed:{...Object(s.b)("appState",["videoModalCard"])},watch:{},methods:{closeModal(){this.show=!1,document.querySelector("body").classList.remove("overflow-hidden")},openModal(){this.show=!0,document.querySelector("body").classList.add("overflow-hidden")}}},r=(a(398),a(4)),i=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[t.show?e("div",{staticClass:"fixed top-0 right-0 bottom-0 left-0 z-50"},[e("div",{staticClass:"fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-25",on:{click:function(e){return t.closeModal()}}}),t._v(" "),e("div",{staticClass:"modal-content absolute bg-white rounded w-11/12 md:w-4/5 max-w-screen-lg max-h-screen overflow-y-auto p-4 lg:p-8",attrs:{role:"dialog","aria-modal":"true"}},[t.videoModalCard?e("VideoModalContent",{attrs:{"close-modal":t.closeModal}}):t._e(),t._v(" "),e("button",{staticClass:"absolute top-0 right-0 mt-4 mr-4 text-blueGreen hover:underline font-bold text-xl",attrs:{type:"button"},on:{click:function(e){return t.closeModal()}}},[t._v("\n        X\n      ")])],1)]):t._e()])}),[],!1,null,"e028fa68",null);e.default=i.exports}}]);