(window.webpackJsonp=window.webpackJsonp||[]).push([[21,24],{406:function(t,e,n){"use strict";n.r(e);var r={name:"RSSSubscription",components:{SVGIcon:n(33).default},data:()=>({socialLinks:[{text:"Twitter",link:"http://twitter.com/ipfs",icon:"twitter-icon"},{text:"YouTube",link:"https://www.youtube.com/channel/UCdjsUXJ3QawK4O5L1kqqsew",icon:"youtube-icon"}]})},i=n(4),a=Object(i.a)(r,(function(){var t=this._self._c;return t("div",[this._l(this.socialLinks,(function(e,n){return t("a",{key:n,staticClass:"mr-2",attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[t("SVGIcon",{staticClass:"inline w-6 h-6 opacity-50 hover:opacity-100 fill-current text-blueGreen transition transition-opacity duration-300 ease-in-out",attrs:{name:e.icon,title:e.text}})],1)})),this._v(" "),t("a",{staticClass:"flex items-center text-gray-dark transition-filter duration-700 ease-in-out",attrs:{href:"/index.xml",rel:"noopener noreferrer"}},[t("SVGIcon",{staticClass:"inline w-6 h-6 color-green fill-current text-blueGreen opacity-50 hover:opacity-100 transition transition-opacity duration-300 ease-in-out",attrs:{name:"rss",title:"rss"}})],1)],2)}),[],!1,null,null,null);e.default=a.exports},451:function(t,e,n){"use strict";n.r(e);var r=n(406),i=n(7),a={name:"LinksAndSocial",components:{RSSSubscription:r.default},props:{blockLazyLoad:{type:Function,default:null}},computed:{},methods:{trackSubmitItem(){i.a.trackEvent(i.a.events.LINK_CLICK_SUBMIT_ITEM)},trackPressKit(){i.a.trackEvent(i.a.events.LINK_CLICK_PRESS_KIT)}}},s=n(4),o=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-10"},[e("h2",{staticClass:"mb-2"},[t._v("\n    Event organizer, content creator, or journalist?\n    "),e("a",{staticClass:"text-blueGreen hover:underline",attrs:{href:"https://airtable.com/shrNH8YWole1xc70I",target:"_blank",rel:"noopener noreferrer"},on:{click:t.trackSubmitItem}},[t._v("\n      Submit")]),t._v("\n    an item or view the\n    "),e("a",{staticClass:"text-blueGreen hover:underline",attrs:{href:"https://dikiharyadi.com/media/",rel:"noopener noreferrer"},on:{click:t.trackPressKit}},[t._v("Diki Haryadi press kit.")])]),t._v(" "),e("div",[t._v("\n    "+t._s("Prefer your news a different way? Try our ")+"\n    "),e("a",{staticClass:"text-blueGreen hover:underline",attrs:{href:"#newsletter-form"},on:{click:function(e){return t.blockLazyLoad()}}},[t._v("newsletter")]),t._v(t._s(", ")+"\n    "),e("a",{staticClass:"text-blueGreen hover:underline",attrs:{href:"/index.xml",rel:"noopener noreferrer"}},[t._v("RSS")]),t._v(t._s(", ")+"\n    "),e("span",{staticClass:"mr-1"},[t._v("or social media.")]),t._v(" "),e("div",{staticClass:"inline-flex"},[e("RSSSubscription",{staticClass:"flex"})],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);