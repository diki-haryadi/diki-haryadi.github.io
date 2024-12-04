(window.webpackJsonp=window.webpackJsonp||[]).push([[4,9,11,17,20,25,26,27,29,30],{377:function(t,e,s){"use strict";s.r(e);var a={name:"UnstyledLink",mixins:[s(84).a],props:{item:{type:Object,default:()=>{}},to:{type:String,default:null}}},r=s(4),i=Object(r.a)(a,(function(){var t=this._self._c;return this.isInternal?t("RouterLink",{attrs:{to:this.link,exact:this.exact}},[this._t("default")],2):t("a",{attrs:{href:this.link,rel:this.rel,target:"_blank"}},[this._t("default")],2)}),[],!1,null,null,null);e.default=i.exports},378:function(t,e,s){"use strict";s.r(e);var a=s(7),r={name:"PostTag",props:{link:{type:Boolean,default:()=>!1},tag:{type:Object,required:!0},dark:{type:Boolean,default:null},className:{type:String,default:""},callback:{type:Function,default:()=>{}},parent:{type:String,default:"card"}},computed:{computedClass(){return["post-tag leading-none p-1 mr-1 rounded cursor-pointer transition duration-300 ease-in-out",this.dark?"bg-white text-charcoal hover:bg-charcoalMuted hover:text-white my-1":"bg-white text-charcoalMuted hover:bg-charcoalMuted hover:text-white",this.className]}},methods:{handleTagClick(){this.trackTag(),this.$store.commit("appState/setActiveTags",[this.tag.slug])},addNewTag(){this.trackTag(),this.$store.commit("appState/addNewTag",[this.tag.slug]),this.callback()},trackTag(){const t={tag:this.tag.name,method:this.parent+"-select"};a.a.trackEvent(a.a.events.FILTER,t)}}},i=s(4),n=Object(i.a)(r,(function(){var t=this,e=t._self._c;return t.link?e("router-link",{class:t.computedClass,attrs:{to:{path:t.$localePath,query:{tags:t.tag.slug}},rel:"nofollow"},nativeOn:{click:function(e){return t.handleTagClick.apply(null,arguments)}}},[t._v("\n  #"+t._s(t.tag.name)+"\n")]):e("button",{class:t.computedClass,on:{click:t.addNewTag}},[t._v("\n  #"+t._s(t.tag.name)+"\n")])}),[],!1,null,null,null);e.default=n.exports},379:function(t,e,s){},380:function(t,e,s){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(a,r,i){var n=r.prototype;i.utc=function(t){var e={date:t,utc:!0,args:arguments};return new r(e)},n.utc=function(e){var s=i(this.toDate(),{locale:this.$L,utc:!0});return e?s.add(this.utcOffset(),t):s},n.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var o=n.parse;n.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var l=n.init;n.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else l.call(this)};var c=n.utcOffset;n.utcOffset=function(a,r){var i=this.$utils().u;if(i(a))return this.$u?0:i(this.$offset)?c.call(this):this.$offset;if("string"==typeof a&&null===(a=function(t){void 0===t&&(t="");var a=t.match(e);if(!a)return null;var r=(""+a[0]).match(s)||["-",0,0],i=r[0],n=60*+r[1]+ +r[2];return 0===n?0:"+"===i?n:-n}(a)))return this;var n=Math.abs(a)<=16?60*a:a,o=this;if(r)return o.$offset=n,o.$u=0===a,o;if(0!==a){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(n+l,t)).$offset=n,o.$x.$localOffset=l}else o=this.utc();return o};var u=n.format;n.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return u.call(this,e)},n.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},n.isUTC=function(){return!!this.$u},n.toISOString=function(){return this.toDate().toISOString()},n.toString=function(){return this.toDate().toUTCString()};var d=n.toDate;n.toDate=function(t){return"s"===t&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var h=n.diff;n.diff=function(t,e,s){if(t&&this.$u===t.$u)return h.call(this,t,e,s);var a=this.local(),r=i(t).local();return h.call(a,r,e,s)}}}()},381:function(t,e,s){"use strict";s.r(e);s(38);var a=s(16);const{normalize:r,isAbsolute:i}=s(163);var n={name:"LazyImage",mixins:[{methods:{requireAsset:function(t){if(!t)return"";if(Object(a.b)(t))return t;if(i(t)){const e=r(t).replace(/^\/|\/$/g,"");try{return s(164)("./"+e)}catch(t){return console.error("Could not load asset: ",e),""}}}}}],props:{alt:{type:String,required:!0},caption:{type:String,default:""},imgClass:{type:[Array,String],default:""},src:{type:String,required:!0},srcset:{type:Object,default:null},srcPlaceholder:{type:String,default:""},sizes:{type:String,default:""},ctx:{type:String,default:null}},computed:{srcsetString(){const t=this.srcset,e=this;return t?Object.keys(t).map((function(s,a){return`${e.requireAsset(t[s],e.ctx)} ${s}`})).join(", "):""}}},o=(s(384),s(4)),l=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("v-lazy-image",{class:t.imgClass,attrs:{alt:t.alt,sizes:t.sizes,srcset:t.srcsetString,src:t.requireAsset(t.src),"src-placeholder":t.requireAsset(t.srcPlaceholder),loading:"lazy"}}),t._v(" "),t.caption?e("p",{staticClass:"type-p4 mt-3"},[t._v(t._s(t.caption))]):t._e()],1)}),[],!1,null,"5f678761",null);e.default=l.exports},382:function(t,e,s){"use strict";s.r(e);var a=s(18),r=s(7),i={name:"PostAuthor",components:{},props:{author:{type:Array,default:null},light:{type:Boolean,default:null},parent:{type:String,default:"card"}},computed:{...Object(a.b)("appState",["activeAuthor"]),computedClassName(){return["hover:underline cursor-pointer",this.light?"text-blueGreenLight":"hover:text-blueGreen"]}},methods:{handleAuthorClick(t){const e={author:t.name,method:this.parent+"-select"};r.a.trackEvent(r.a.events.FILTER,e),this.$store.commit("appState/setActiveAuthor",t)}}},n=s(4),o=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-row flex-wrap"},t._l(t.author,(function(s,a){return e("div",{key:s.name,staticClass:"flex flex-row flex-wrap",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[e("span",{staticClass:"flex flex-row",attrs:{itemprop:"name"}},[e("router-link",{attrs:{to:{path:t.$localePath,query:{author:s.slug}},rel:"nofollow"}},[e("span",{class:t.computedClassName,on:{click:function(e){return t.handleAuthorClick(s)}}},[t._v("\n          "+t._s(s.name)+"\n        ")])]),t._v(" "),e("span",[t._v(t._s(1!==t.author.length&&a!==t.author.length-1?", ":""))])],1)])})),0)}),[],!1,null,null,null);e.default=o.exports},383:function(t,e,s){"use strict";s.r(e);var a=s(33),r=s(7),i={name:"PostSocials",components:{SVGIcon:a.default},props:{url:{type:String,default:""},title:{type:String,default:""}},data:()=>({socialLinks:[{text:"Twitter",network:"twitter",icon:"twitter-icon",twitterHandle:"IPFS"},{text:"Facebook",network:"facebook",icon:"facebook-icon"}],currentUrl:"",host:""}),mounted(){this.currentUrl=window.location.href,this.host=window.location.host},methods:{shareClick(t){r.a.trackEvent(r.a.events.SOCIAL_MEDIA_SHARE,{view:this.$route.path,text:t.text})}}},n=s(4),o=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("div",t._l(t.socialLinks,(function(s){return e("ShareNetwork",{key:s.text,staticClass:"mr-1 last:mr-0",attrs:{network:s.network,url:t.url?t.url:t.currentUrl,title:t.title?t.title:"",description:"",quote:`${t.title} ${t.url?t.url:t.currentUrl} via ${t.host}`,hashtags:"","twitter-user":s.twitterHandle},on:{open:function(e){return t.shareClick(s)}}},[e("SVGIcon",{staticClass:"w-6 h-6 opacity-50 fill-current text-blueGreen hover:opacity-100 transition transition-opacity duration-300 ease-in-out",attrs:{name:s.icon,title:s.text}})],1)})),1)}),[],!1,null,null,null);e.default=o.exports},384:function(t,e,s){"use strict";s(379)},387:function(t,e,s){"use strict";s.r(e);var a={name:"Layout",mounted(){const{href:t}=window.location;t.includes("blog.ipfs.io")&&window.location.replace(t.replace("blog.ipfs.io","dikiharyadi.com")),t.includes("blog-ipfs-io")&&window.location.replace(t.replace("blog-ipfs-io","blog-ipfs-tech"))}},r=s(4),i=Object(r.a)(a,(function(){return(0,this._self._c)("div",[this._t("header"),this._v(" "),this._t("default"),this._v(" "),this._t("footer")],2)}),[],!1,null,null,null);e.default=i.exports},393:function(t,e,s){"use strict";s.r(e);var a={name:"Breadcrumbs",components:{UnstyledLink:s(377).default},props:{crumbs:{type:Array,required:!0}}},r=s(4),i=Object(r.a)(a,(function(){var t=this,e=t._self._c;return t.crumbs?e("div",{staticClass:"flex"},t._l(t.crumbs,(function(s,a){return e("div",{key:s.title},[0!=a?e("span",[t._v("|")]):t._e(),t._v(" "),e("div",{staticClass:"inline mr-1"},[s.link?e("UnstyledLink",{staticClass:"text-blueGreenLight hover:underline",attrs:{external:s.external,to:s.link}},[t._v("\n        "+t._s(s.title)+"\n      ")]):e("span",[t._v(t._s(s.title))])],1)])})),0):t._e()}),[],!1,null,null,null);e.default=i.exports},403:function(t,e,s){},412:function(t,e,s){"use strict";s.r(e);s(12),s(26);var a=s(85),r=s.n(a),i=s(380),n=s.n(i),o=s(393),l=s(381),c=s(382),u=s(383),d=s(378),h={name:"PostHero",components:{Breadcrumbs:o.default,LazyImage:l.default,PostAuthor:c.default,PostSocials:u.default,PostTag:d.default},props:{tags:{type:[Array,String],default:()=>[]},author:{type:Array,default:null},date:{type:String,default:null},image:{type:String,default:null},title:{type:String,default:null}},computed:{resolvedDate(){return r.a.extend(n.a),r.a.utc(this.date).format(this.$themeLocaleConfig.dateFormat||"YYYY-MM-DD")},resolvedTags(){return!this.tags||Array.isArray(this.tags)?this.tags:this.tags.replace(/, /g,",").split(",").filter(t=>t)},breadcrumbs(){return[{title:"Blog & news",link:this.$localePath}]}}},f=s(4),m=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"bg-gradient-6 text-white"},[e("div",{staticClass:"pt-20 pb-10 grid-margins max-w-6xl"},[e("Breadcrumbs",{staticClass:"mt-8",attrs:{crumbs:t.breadcrumbs}}),t._v(" "),e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 pt-4"},[e("div",{staticClass:"flex flex-col md:pr-8"},[e("h1",{staticClass:"type-h1"},[t._v(t._s(t.title))]),t._v(" "),e("PostAuthor",{attrs:{author:t.author,light:"",parent:"blog-post"}}),t._v(" "),e("time",{staticClass:"text-gray",attrs:{pubdate:"",itemprop:"datePublished",datetime:t.date}},[t._v("\n            "+t._s(t.resolvedDate)+"\n          ")])],1),t._v(" "),e("div",{staticClass:"mt-4 md:mt-0"},[e("LazyImage",{attrs:{"img-class":"object-contain rounded w-full",alt:t.$page.title,"src-placeholder":"/blog-post-placeholder.png",src:""+(t.image?t.image:"/blog-post-placeholder.png")}})],1)])],1)]),t._v(" "),e("div",{staticClass:"grid-margins pt-8 flex flex-wrap justify-between items-center max-w-5xl px-2 sm:px-6 md:px-0"},[t.resolvedTags.length?e("div",{staticClass:"tags flex flex-wrap text-sm text-gray-dark",attrs:{itemprop:"keywords"}},t._l(t.resolvedTags,(function(t){return e("PostTag",{key:t.slug,attrs:{tag:t,link:"",dark:"",parent:"blog-post"}})})),1):t._e(),t._v(" "),e("div",{staticClass:"flex my-1 text-sm text-gray-dark"},[t._v("\n      Share this item:\n      "),e("PostSocials",{staticClass:"flex max-w-3xl ml-2"})],1)])])}),[],!1,null,null,null);e.default=m.exports},413:function(t,e,s){"use strict";s.r(e);s(160),s(161),s(162);const a=(t,e)=>{let s="https://dikiharyadi.com/";try{new Date(e)<new Date("2022-08-15")&&(s="https://dikiharyadi.com/")}catch(t){console.error("unable to parse this.$frontmatter.date",t)}const a=new URL(s);return a.pathname=t,a.toString()};var r={name:"Comments",components:{},computed:{embedSrc(){return"https://discuss.dikiharyadi.com/embed/comments?embed_url="+a(this.$frontmatter.permalink,this.$frontmatter.date)}},mounted(){window.DiscourseEmbed={discourseUrl:"https://discuss.dikiharyadi.com/",discourseEmbedUrl:a(this.$frontmatter.permalink,this.$frontmatter.date),discourseReferrerPolicy:"strict-origin-when-cross-origin"};const t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=window.DiscourseEmbed.discourseUrl+"javascripts/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)}},i=s(4),n=Object(i.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",[t("h2",{staticClass:"type-h2"},[this._v("Comments")]),this._v(" "),t("div",{staticClass:"mt-4 mb-24",attrs:{id:"discourse-comments"}})])}],!1,null,null,null);e.default=n.exports},437:function(t,e,s){"use strict";s(403)},448:function(t,e,s){"use strict";s.r(e);s(12),s(39);var a=s(387),r=s(381),i=s(412),n=s(413),o={name:"BlogPost",components:{Layout:a.default,LazyImage:r.default,PostHero:i.default,Comments:n.default},data:()=>({showComments:null}),computed:{isVisible(){return!this.$root.$page.hidden}},mounted(){if(!this.isVisible&&this.$root.$page.frontmatter.type){const t=this.$root.$page.frontmatter.type;return this.$router.replace({path:"../?category="+t.slug})}if(!this.isVisible)return this.$router.replace({path:"../404"});const t=(window.location.pathname.match(/^(\/(?:ipfs|ipns)\/[^/]+)/)||[])[1]||"";t&&Array.from(document.querySelectorAll("iframe")).forEach(e=>{const s=e.getAttribute("src");s.startsWith("/")&&e.setAttribute("src",t+s)}),this.showComments=!!t||window.location.hostname.includes(".ipns.localhost")||"dikiharyadi.com"===window.location.hostname||"dikiharyadi.com.on.fleek.co"===window.location.hostname||"dikiharyadi.com-staging.on.fleek.co"===window.location.hostname}},l=(s(437),s(4)),c=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.isVisible?e("Layout",[e("article",{attrs:{itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[e("PostHero",{attrs:{title:t.$page.title,author:t.$frontmatter.author,date:t.$frontmatter.date,tags:t.$frontmatter.tags,image:t.$frontmatter.header_image}}),t._v(" "),e("div",{staticClass:"grid-margins max-w-5xl"},[t.$frontmatter.image?e("div",{staticClass:"blog type-rich my-12"},[e("LazyImage",{attrs:{alt:t.$page.title,src:t.$frontmatter.image?t.$frontmatter.image:"/blog-post-placeholder.png"}})],1):t._e(),t._v(" "),e("Content",{staticClass:"blog type-rich mb-10 mt-4 pt-4 border-t-2 border-gray border-opacity-25 px-2 sm:px-6 md:px-0",attrs:{itemprop:"articleBody"}}),t._v(" "),t.showComments?e("Comments"):t._e()],1)],1)]):t._e()}),[],!1,null,null,null);e.default=c.exports}}]);