(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{413:function(t,e,s){"use strict";s.r(e);s(160),s(161),s(162);const r=(t,e)=>{let s="https://dikiharyadi.com/";try{new Date(e)<new Date("2022-08-15")&&(s="https://dikiharyadi.com/")}catch(t){console.error("unable to parse this.$frontmatter.date",t)}const r=new URL(s);return r.pathname=t,r.toString()};var i={name:"Comments",components:{},computed:{embedSrc(){return"https://discuss.dikiharyadi.com/embed/comments?embed_url="+r(this.$frontmatter.permalink,this.$frontmatter.date)}},mounted(){window.DiscourseEmbed={discourseUrl:"https://discuss.dikiharyadi.com/",discourseEmbedUrl:r(this.$frontmatter.permalink,this.$frontmatter.date),discourseReferrerPolicy:"strict-origin-when-cross-origin"};const t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=window.DiscourseEmbed.discourseUrl+"javascripts/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)}},n=s(4),o=Object(n.a)(i,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",[t("h2",{staticClass:"type-h2"},[this._v("Comments")]),this._v(" "),t("div",{staticClass:"mt-4 mb-24",attrs:{id:"discourse-comments"}})])}],!1,null,null,null);e.default=o.exports}}]);