(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{385:function(t,e,s){},391:function(t,e,s){"use strict";s(385)},396:function(t,e,s){"use strict";s.r(e);s(12),s(159),s(26);var a=s(18),r={name:"ActiveTags",props:{numberOfPosts:{type:Number,required:!0}},computed:{...Object(a.b)("appState",["tagsList","activeCategory","activeTags","searchedText","activeAuthor"]),resolvedActiveCategory(){return this.activeCategory?`type "${this.activeCategory.name}"`:"all types"},resolvedSearchedText(){return`"${this.searchedText.join(" ")}"`}},methods:{tagClick(t){const e=this.activeTags.filter(e=>e!==t);this.$store.commit("appState/setActiveTags",e)},handleClear(){this.$store.commit("appState/clearFilters")}}},n=(s(391),s(4)),i=Object(n.a)(r,(function(){var t=this,e=t._self._c;return t.activeTags.length||t.searchedText.length||"all types"!==t.resolvedActiveCategory||t.activeAuthor?e("div",{staticClass:"border border-plBlack border-opacity-10 flex justify-between items-start rounded p-2"},[e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"flex flex-wrap"},[e("span",{staticClass:"p-2 pl-1"},[0===t.numberOfPosts?e("strong",[t._v(" No results were found ")]):t._e(),t._v(" "),t.numberOfPosts>0?e("span",[t._v("\n          Displaying\n          "),e("strong",[t._v(t._s(t.numberOfPosts)+" result"+t._s(1!==t.numberOfPosts?"s":""))]),t._v("\n          (newest first)\n        ")]):t._e(),t._v("\n        of "+t._s(t.resolvedActiveCategory)+"\n        "),t.activeAuthor?e("span",[t._v(" by "+t._s(t.activeAuthor.name)+" ")]):t._e(),t._v(" "),t.searchedText.length?e("span",[t._v("\n          for "+t._s(t.resolvedSearchedText)+"\n        ")]):t._e(),t._v(" "),t.activeTags.length?e("span",[t._v("with tag"+t._s(t.activeTags.length>1?"s":"")+":")]):t._e()]),t._v(" "),e("div",{staticClass:"tags flex flex-wrap items-center -mb-2",attrs:{itemprop:"keywords"}},t._l(t.activeTags,(function(s){return e("button",{key:s,staticClass:"multiselect__tag active-tag text-sm",on:{click:function(e){return t.tagClick(s)}}},[e("span",[t._v("#"+t._s(t.tagsList.find(t=>t.slug===s).name))]),e("i",{staticClass:"multiselect__tag-icon"})])})),0)]),t._v(" "),0===t.numberOfPosts?e("div",{staticClass:"mt-2"},[t._v("\n      "+t._s("Try removing some your search parameters, or ")+"\n      "),e("router-link",{staticClass:"text-blueGreen",attrs:{to:{path:"/"}},nativeOn:{click:function(e){return t.handleClear()}}},[t._v("\n        return to the blog & news index.\n      ")])],1):t._e()]),t._v(" "),e("button",{staticClass:"p-1 l-4 text-blueGreen hover:text-blueGreenScreen transition duration-300 ease-in-out cursor-pointer",on:{click:function(e){return t.handleClear()}}},[t._v("\n    ✕\n  ")])]):t._e()}),[],!1,null,"55f21fb6",null);e.default=i.exports}}]);