(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{404:function(e,t,r){},444:function(e,t,r){"use strict";r(404)},449:function(e,t,r){"use strict";r.r(t);r(12),r(438);var a=r(442),s=r(33),i=(r(443),{name:"ImageCrop",components:{Cropper:a.a,SVGIcon:s.default},data:()=>({image:null,imageName:"",croppedImage:null}),methods:{zoom(e){this.$refs.cropper.zoom(e)},reset(){this.image=null,this.croppedImage=null},dragover(e){e.preventDefault(),e.currentTarget.classList.contains("border-solid")||(e.currentTarget.classList.remove("border-dashed"),e.currentTarget.classList.add("border-solid"))},dragleave(e){e.currentTarget.classList.add("border-dashed"),e.currentTarget.classList.remove("border-solid")},drop(e){e.preventDefault(),this.loadImage({target:{files:e.dataTransfer.files}}),e.currentTarget.classList.add("border-dashed"),e.currentTarget.classList.remove("border-solid")},loadImage(e){const t=e.target;if(t.files&&t.files[0]){const e=new FileReader;e.onload=e=>{this.image=e.target.result,this.imageName=t.files[0].name},e.readAsDataURL(t.files[0])}},crop(){const{coordinates:e,canvas:t}=this.$refs.cropper.getResult();this.coordinates=e,this.croppedImage=t.toDataURL()},download(){let e=this.imageName.split(".");const t=e.pop();e=e.join(".");const r=new Date,a=`${r.getFullYear()}-${("0"+(r.getMonth()+1)).slice(-2)}-${("0"+r.getDate()).slice(-2)}-cardheader-${e}.${t}`,s=document.createElement("a");s.href=this.croppedImage,s.download=a,s.click()}}}),n=(r(444),r(4)),o=Object(n.a)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex justify-center items-center h-screen w-full p-4"},[e.croppedImage?t("div",{staticClass:"flex flex-col grid-margins"},[t("div",[t("img",{attrs:{src:e.croppedImage}})]),e._v(" "),t("div",{staticClass:"flex items-center justify-center mt-4"},[t("button",{staticClass:"bg-blueGreen transition duration-300 hover:bg-blueGreenScreen text-white px-4 py-2 mr-4",on:{click:e.download}},[e._v("\n        Download\n      ")]),e._v(" "),t("button",{staticClass:"bg-blueGreen transition duration-300 hover:bg-blueGreenScreen text-white px-4 py-2",on:{click:e.reset}},[e._v("\n        Load a new image\n      ")])])]):e._e(),e._v(" "),e.image&&!e.croppedImage?t("div",{staticClass:"flex flex-col justify-center relative w-full h-screen grid-margins"},[t("div",{staticClass:"flex justify-center mb-3"},[t("button",{staticClass:"bg-blueGreen hover:bg-blueGreenScreen transition duration-300 ease-in-out text-white p-2 mr-4",on:{click:function(t){return e.zoom(1.5)}}},[t("SVGIcon",{staticClass:"color-white fill-current w-6 h-6",attrs:{name:"zoom-in",title:"Zoom in"}})],1),e._v(" "),t("button",{staticClass:"bg-blueGreen hover:bg-blueGreenScreen transition duration-300 ease-in-out text-white p-2 mr-4",on:{click:function(t){return e.zoom(.5)}}},[t("SVGIcon",{staticClass:"color-white fill-current w-6 h-6",attrs:{name:"zoom-out",title:"Zoom out"}})],1),e._v(" "),t("button",{staticClass:"bg-blueGreen hover:bg-blueGreenScreen transition duration-300 ease-in-out text-white p-2 mr-4",on:{click:e.crop}},[t("SVGIcon",{staticClass:"color-white fill-current w-6 h-6",attrs:{name:"save-icon",title:"Save"}})],1),e._v(" "),t("button",{staticClass:"bg-blueGreen hover:bg-blueGreenScreen transition duration-300 ease-in-out text-white p-2",on:{click:e.reset}},[t("SVGIcon",{staticClass:"color-white fill-current w-6 h-6",attrs:{name:"trash-icon",title:"Delete"}})],1)]),e._v(" "),t("cropper",{ref:"cropper",staticClass:"cropper",attrs:{debounce:!1,src:e.image,"stencil-props":{aspectRatio:1.91}}}),e._v(" "),e._m(0)],1):e._e(),e._v(" "),e.image||e.croppedImage?e._e():t("div",{staticClass:"image-upload flex flex-col items-center cursor-pointer justify-center bg-white text-blueGreen text-center h-screen w-full max-w-2xl opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out border-2 border-dashed rounded text-lg",on:{dragover:e.dragover,dragleave:e.dragleave,drop:e.drop,click:function(t){return e.$refs.file.click()}}},[t("input",{ref:"file",staticClass:"hidden",attrs:{type:"file",accept:"image/*"},on:{change:function(t){return e.loadImage(t)}}}),e._v("\n    Drag and drop an image"),t("br"),e._v("\n    (or click to browse)\n  ")])])}),[function(){var e=this._self._c;return e("div",{staticClass:"mt-3 mx-auto max-w-lg text-center"},[e("strong",[this._v("Pro tip:")]),this._v(" Avoid words in images, as they detract from\n      post or card titles and can be hard to read at small sizes.\n    ")])}],!1,null,"19cb7def",null);t.default=o.exports}}]);