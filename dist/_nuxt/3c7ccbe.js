(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{189:function(t,e,l){"use strict";var r={name:"NavBar",data:function(){return{mobileToggle:!1}}},o=l(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"header-area header-3-area"},[t._m(0),t._v(" "),l("div",{staticClass:"main-header"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"main-header-item"},[l("div",{staticClass:"main-header-menus  d-flex justify-content-between align-items-center"},[t._m(1),t._v(" "),l("div",{staticClass:"toggle-btn ml-30 canvas_open"},[l("i",{staticClass:"fa fa-bars",on:{click:function(e){t.mobileToggle=!t.mobileToggle}}})]),t._v(" "),l("div",{staticClass:"header-menu d-none d-lg-block"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])]),t._v(" "),l("div",{class:"offcanvas_menu_wrapper "+(t.mobileToggle?"active":"")},[l("div",{staticClass:"canvas_close"},[l("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[l("i",{staticClass:"fa fa-times"})])]),t._v(" "),l("div",{staticClass:"text-left ",attrs:{id:"menu"}},[l("ul",{staticClass:"offcanvas_main_menu"},[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-top-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"header-top-item"},[e("div",{staticClass:"header-info"},[e("ul",[e("li",[e("a",{attrs:{href:"mailto:info@gama.co.tz?subject=Mail from  our Website"}},[e("i",{staticClass:"flaticon-email-2"}),this._v(" info@gama.co.tz")])]),this._v(" "),e("li",[e("a",{attrs:{href:"tel:+255682004439"}},[e("i",{staticClass:"flaticon-call"}),this._v("+255 682 004 439")])])])]),this._v(" "),e("div",{staticClass:"social"},[e("ul",[e("li",[e("a",{attrs:{href:"https://facebook.com/gamainctz"}},[e("i",{staticClass:"fa fa-facebook-f"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/gamainctz"}},[e("i",{staticClass:"fa fa-twitter"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://instagram.com/gamainctz"}},[e("i",{staticClass:"fa fa-instagram"})])])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-logo"},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:"/assets/images/logo-corporate.png",alt:""}})])])}],!1,null,"06204ac1",null);e.a=component.exports},190:function(t,e,l){"use strict";var r={name:"FooterTwo",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},o=l(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("footer",{staticClass:"footer-area"},[l("div",{staticClass:"container"},[t._m(0),t._v(" "),l("div",{staticClass:"footer-copyright align-items-left"},[l("p",[t._v("© Copyright "+t._s((new Date).getFullYear())+" Gama Incorporation Ltd. All rights reserved.")])])])]),t._v(" "),l("div",{staticClass:"go-top-area"},[l("div",{staticClass:"go-top-wrap"},[l("div",{staticClass:"go-top-btn-wrap"},[l("div",{class:"go-top go-top-btn "+(t.scrollBtn?"active":""),on:{click:t.scrollTop}},[l("i",{staticClass:"fa fa-angle-double-up"}),t._v(" "),l("i",{staticClass:"fa fa-angle-double-up"})])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"footer-main"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-3 col-md-6"},[l("div",{staticClass:"footer-widget mt-30"},[l("div",{staticClass:"footer-title pb-30"},[l("img",{attrs:{src:"/assets/images/logo-4.png",alt:"gama"}})]),t._v(" "),l("div",{staticClass:"footer-about-content"},[l("p",[t._v("Gama Incorporation Ltd")]),t._v(" "),l("p",[t._v("1 Nyalali Curve Masaki,"),l("br"),t._v(" Dar es Salaam, Tanzania")]),t._v(" "),l("div",{staticClass:"email"},[l("a",{attrs:{href:"mailto:info@gama.co.tz?subject=Mail from  our Website"}},[t._v("info@gama.co.tz")])]),t._v(" "),l("div",{staticClass:"call"},[l("a",{attrs:{href:"tel:+255682004439"}},[t._v("+255 68 200 4439")]),t._v(" "),l("a",{attrs:{href:"tel:+255715644006"}},[t._v("+255 71 564 4006")])])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[l("div",{staticClass:"footer-widget mt-30 ml-30"},[l("div",{staticClass:"footer-title pb-20"},[l("h4",{staticClass:"title"},[t._v("Useful Links")])]),t._v(" "),l("div",{staticClass:"footer-about-list d-flex"},[l("ul",{staticClass:"mr-70"},[l("li",[l("a",{attrs:{href:"/"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" Home")])]),t._v(" "),l("li",[l("a",{attrs:{href:"/about"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" About")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" Products")])]),t._v(" "),l("li",[l("a",{attrs:{href:"/contact"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" Contact")])])])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[l("div",{staticClass:"footer-widget mt-30 ml-30"},[l("div",{staticClass:"footer-title pb-20"},[l("h4",{staticClass:"title"},[t._v("Resources")])]),t._v(" "),l("div",{staticClass:"footer-about-list d-flex"},[l("ul",{staticClass:"mr-70"},[l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" Services & Warranty")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" Return Policy")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" Shipping & Delivery")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" Secure Payment")])])])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 col-sm-7"},[l("div",{staticClass:"footer-widget footer-news mt-30"},[l("div",{staticClass:"footer-title pb-40"},[l("h4",{staticClass:"title"},[t._v("Let's Connect")])]),t._v(" "),l("div",{staticClass:"footer-news-content"},[l("div",{staticClass:"news-item d-flex align-items-left"},[l("div",{staticClass:"news-item-content"},[l("p",[t._v("We are available on these platforms")])])]),t._v(" "),l("div",{staticClass:"news-item d-flex align-items-center mt-20 social"},[l("ul",[l("li",[l("a",{attrs:{href:"https://facebook.com/gamainctz"}},[l("i",{staticClass:"fa fa-facebook-f"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://twitter.com/gamainctz"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://instagram.com/gamainctz"}},[l("i",{staticClass:"fa fa-instagram"})])])])])])])])])])}],!1,null,"251068c4",null);e.a=component.exports},191:function(t,e,l){"use strict";var r={name:"ProjectSingle"},o=l(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"single-service-area pt-90 pb-120"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-lg-4 col-md-7 col-sm-9 order-lg-1 order-2"},[l("div",{staticClass:"service-sidebar mt-30"},[l("div",{staticClass:"service-sidebar-list"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"./product-ultrasonicmeter"}},[t._v("Ultrasonic Water Meter")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"./product-multijetmeter"}},[t._v(" Multijet Water Meter ")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"./product-smartenergymeter"}},[t._v("Smart Energy Meter")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"./product-regularthreephase"}},[t._v("Regular Three Phase Energy Meter")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"./product-regularsinglephase"}},[t._v("Regular Single Phase Energy Meter")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"./product-smartgasmeter"}},[t._v("Smart Gas Meter")])],1)])]),t._v(" "),t._m(0)])]),t._v(" "),t._m(1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"service-sidebar-help"},[e("h4",{staticClass:"title"},[this._v("Need Help?")]),this._v(" "),e("p",[this._v("Speak with a human to filling out a form? call corporate office and we will connect you with a team member who can help.")]),this._v(" "),e("span",[e("i",{staticClass:"flaticon-calling"}),this._v(" 92 666 888 0000")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-8 order-lg-2 order-1"},[l("div",{staticClass:"single-project mt-30"},[l("div",{staticClass:"single-project-thumb"},[l("img",{attrs:{src:"/assets/images/single-project-thumb-1.jpg",alt:""}})]),t._v(" "),l("div",{staticClass:"single-project-content"},[l("h3",{staticClass:"title"},[t._v("Factory Construction")]),t._v(" "),l("p",[t._v("Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum Take a look at our round up of the best shows coming soon to your telly box has been the is industrys. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of.")])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6 col-md-6"},[l("div",{staticClass:"single-project-thumb mt-30"},[l("img",{attrs:{src:"/assets/images/single-project-thumb-2.jpg",alt:""}})])]),t._v(" "),l("div",{staticClass:"col-lg-6 col-md-6"},[l("div",{staticClass:"single-project-thumb mt-30"},[l("img",{attrs:{src:"/assets/images/single-project-thumb-3.jpg",alt:""}})])])]),t._v(" "),l("div",{staticClass:"single-project-text"},[l("p",[t._v("Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry stan when an unknown printer took a galley.")]),t._v(" "),l("p",{staticClass:"text"},[t._v("When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like  including versions of.")]),t._v(" "),l("a",{staticClass:"main-btn mt-55",attrs:{href:"#"}},[t._v("Download our brochure")])])])])}],!1,null,"3dd59c60",null);e.a=component.exports},216:function(t,e,l){"use strict";l.r(e);var r=l(189),o=l(190),n=l(124),c={components:{ProjectSingle:l(191).a,PageHeader:n.a,FooterTwo:o.a,NavBar:r.a},head:function(){return{title:"Gama | Ultrasonic Water Meter"}}},v=l(8),component=Object(v.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NavBar"),this._v(" "),e("PageHeader",{attrs:{title:"Ultrasonic Water Meter"}}),this._v(" "),e("ProjectSingle"),this._v(" "),e("FooterTwo")],1)}),[],!1,null,"27d263ac",null);e.default=component.exports}}]);