(function(t){function i(i){for(var e,o,l=i[0],c=i[1],r=i[2],d=0,u=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);v&&v(i);while(u.length)u.shift()();return n.push.apply(n,r||[]),s()}function s(){for(var t,i=0;i<n.length;i++){for(var s=n[i],e=!0,l=1;l<s.length;l++){var c=s[l];0!==a[c]&&(e=!1)}e&&(n.splice(i--,1),t=o(o.s=s[0]))}return t}var e={},a={app:0},n=[];function o(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,i,s){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)o.d(s,e,function(i){return t[i]}.bind(null,e));return s},o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="/resume/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=i,l=l.slice();for(var r=0;r<l.length;r++)i(l[r]);var v=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,i,s){t.exports=s("56d7")},"023c":function(t,i,s){"use strict";var e=s("f1b3"),a=s.n(e);a.a},"0f03":function(t,i,s){t.exports=s.p+"img/05.285e03a0.png"},"37be":function(t,i,s){t.exports=s.p+"img/大頭照2.e879890c.jpg"},"3e83":function(t,i,s){},5334:function(t,i,s){t.exports=s.p+"img/01.abb7eec9.png"},"56d7":function(t,i,s){"use strict";s.r(i);s("cadf"),s("551c"),s("f751"),s("097d");var e=s("2b0e"),a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("header",{staticClass:"header-index js-scroll "},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar"},[t._m(0),s("nav",{staticClass:"nav"},[s("ul",[s("li",[s("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[t._v("個人簡介")])],1),s("li",[s("router-link",{staticClass:"nav-item",attrs:{to:"/portfolio"}},[t._v("作品集")])],1),s("li",[s("router-link",{staticClass:"nav-item",attrs:{to:"/experience"}},[t._v("社團&實習")])],1)])]),t._m(1)])]),s("div",{staticClass:"popup-menu"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"mark col-12"}),s("nav",{staticClass:"nav col-8 "},[s("h4",[t._v("menu")]),s("ul",[s("li",[s("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[t._v("個人簡介")])],1),s("li",[s("router-link",{staticClass:"nav-item",attrs:{to:"/portfolio"}},[t._v("作品集")])],1),s("li",[s("router-link",{staticClass:"nav-item",attrs:{to:"/experience"}},[t._v("社團&實習")])],1)])])])])]),s("h1",[t._v("林耘滔個人履歷網站 YunTao Lin")]),s("router-view",{staticClass:"main"}),t._m(2),s("div",{staticClass:"fixed-btn-group"},[s("router-link",{attrs:{to:"/message"}},[s("div",{staticClass:"fixed-btn",attrs:{id:"contact"}},[s("span",[s("i",{staticClass:"icon icon-mail"})]),s("p",[t._v("站內信")])])]),s("div",{staticClass:"fixed-btn",attrs:{id:"toTop"},on:{click:t.backToTop}},[s("span",[t._v("︿")]),s("p",[t._v("Top")])])],1)],1)},n=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"social-bar"},[s("a",{staticClass:"icon-btn",attrs:{href:"https://www.facebook.com/yuntao.lin",title:"Facebook"}},[s("i",{staticClass:"icon icon-facebook-official"})]),s("a",{staticClass:"icon-btn",attrs:{href:"https://www.instagram.com/i456919yuntao/?hl=zh-tw",title:"Instagram"}},[s("i",{staticClass:"icon icon-instagram"})]),s("a",{staticClass:"icon-btn",attrs:{href:"https://github.com/YunTaoLin",title:"Github"}},[s("i",{staticClass:"icon icon-github"})])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("a",{staticClass:"menu-toggle",attrs:{href:"javascript:"}},[s("span"),s("span"),s("span")])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("footer",[s("div",{staticClass:"container"},[s("p",{staticClass:"copyright"},[t._v("copyright © YunTao.Lin")])])])}],o=s("1157"),l=s.n(o),c={methods:{scrollEvent:function(){l()(window).on("scroll",(function(){window.scrollY;l()(window).scrollTop()>=200&&l()(".js-scroll").addClass("fading"),l()(window).scrollTop()<200&&l()(".js-scroll").removeClass("fading")}))},menuToggle:function(){l()(".header-index").toggleClass("active"),l()(".popup-menu").fadeToggle(),l()(".popup-menu  nav").toggleClass("nav-active")},backToTop:function(){l()("html, body").animate({scrollTop:0},1e3)},fixbtn:function(){l()(window).scrollTop()<1e3&&l()(".fixed-btn-group").hide(),l()(window).on("scroll",(function(){l()(window).scrollTop()>=1e3&&l()(".fixed-btn-group").fadeIn(500),l()(window).scrollTop()<1e3&&l()(".fixed-btn-group").fadeOut(500)}))}},mounted:function(){var t=this;this.scrollEvent(),this.fixbtn(),l()(".menu-toggle").on("click",(function(){return t.menuToggle()})),l()(".mark").on("click",(function(){return t.menuToggle()}))},beforeUpdate:function(){l()(".js-scroll").removeClass("fading"),l()(window).off("scroll"),l()(".menu-toggle").off("click"),l()(".mark").off("click"),l()(".header-index").removeClass("active"),l()(".popup-menu").hide(),l()(".popup-menu  nav").removeClass("nav-active")},updated:function(){var t=this;this.scrollEvent(),this.fixbtn(),l()(".menu-toggle").on("click",(function(){return t.menuToggle()})),l()(".mark").on("click",(function(){return t.menuToggle()}))}},r=c,v=(s("5c0b"),s("2877")),d=Object(v["a"])(r,a,n,!1,null,null,null),u=d.exports,_=s("8c4f"),m=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"index"},[e("div",{staticClass:"background"}),e("div",{staticClass:"wrap"},[e("div",{staticClass:"mainArea"},[e("section",{staticClass:"about"},[e("div",{staticClass:"container"},[e("img",{directives:[{name:"parallax",rawName:"v-parallax",value:.5,expression:"0.5"}],staticClass:"d-img d-01 wow fadeIn",attrs:{src:s("5334"),alt:"裝飾圖片"}}),e("img",{directives:[{name:"parallax",rawName:"v-parallax",value:.5,expression:"0.5"}],staticClass:"d-img d-02 wow fadeIn",attrs:{src:s("0f03"),alt:"裝飾圖片"}}),t._m(0)])]),e("section",{staticClass:"skill"},[e("img",{directives:[{name:"parallax",rawName:"v-parallax",value:.5,expression:"0.5"}],staticClass:"d-img d-03 wow fadeIn",attrs:{src:s("aab7"),alt:"裝飾圖片"}}),t._m(1)]),e("section",{staticClass:"works"},[e("div",{staticClass:"container works-inner wow slideInUp"},[e("div",{staticClass:"works-context"},[t._m(2),e("div",{staticClass:"btn-group"},[e("router-link",{staticClass:"workLink",attrs:{to:"/portfolio"}},[t._v("前往作品集")]),t._m(3)],1)])])])])])])},p=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row"},[e("div",{staticClass:"about_context col-lg-5 col-12 order-lg-0 order-1 wow bounceInLeft"},[e("h2",[t._v("About Me "),e("br"),e("span",{},[t._v("你好，我是耘滔 YunTao")])]),e("p",[t._v("畢業於輔仁大學心理學系。"),e("br"),t._v("\n                  曾經的夢想是成為一位UX研究員，"),e("br"),t._v("\n                  後來因緣際會下接觸了前端技術，"),e("br"),t._v("\n                  發現自己在將網站實做出來的過程中，"),e("br"),t._v("\n                  可以獲得極大的成就感，"),e("br"),t._v("\n                  從此便對程式的世界產生了豐富的好奇心。"),e("br"),e("br"),t._v("\n                  期許未來能夠使用自身的經驗解決各種問題。\n                ")])]),e("div",{staticClass:"col-lg-5 col-12 "},[e("div",{staticClass:"about_pic wow flipInY "},[e("img",{attrs:{src:s("37be"),alt:"我的大頭照"}}),e("div",{staticClass:"say wow fadeIn",attrs:{"data-wow-delay":"2s"}},[t._v("I'm YunTao !")])])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[e("h2",[t._v("專業技能")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 col-md-6 col-12"},[e("div",{staticClass:"skill-html "},[e("h3",[e("div",{staticClass:"pic"},[e("img",{attrs:{src:s("855e"),alt:"HTML、CSS圖片"}})]),t._v("\n                       HTML、CSS\n                    ")]),e("ul",[e("li",[t._v("了解使用語意化的方式架構HTML。")]),e("li",[t._v("熟悉RWD切版，響應各裝置版型。")]),e("li",[t._v("以模組化方式建構CSS (SCSS)，"),e("br"),t._v("並遵循OOCSS或BEM命名規則。")]),e("li",[t._v("CSS preprocessor：SCSS")]),e("li",[t._v("熟悉Bootstrap、Element等UI框架。")])])])]),e("div",{staticClass:"col-lg-4 col-md-6 col-12"},[e("div",{staticClass:"skill-js "},[e("h3",[e("div",{staticClass:"pic"},[e("img",{attrs:{src:s("d235"),alt:"Javascript圖片"}})]),t._v("\n                     Javascript\n                    ")]),e("ul",[e("li",[t._v("熟悉ES6語法，以及JS各項特性與原理。（eg. prototype、closure、scope）")]),e("li",[t._v("能夠使用原生JS實作出Jquery的各種動畫效果。")]),e("li",[t._v("熟悉Ajax串接後端API。")]),e("li",[t._v("熟悉非同步事件處理。")]),e("li",[t._v("有使用過Typescript的經驗。")])])])]),e("div",{staticClass:"col-lg-4 col-md-6 col-12"},[e("div",{staticClass:"skill-vue "},[e("h3",[e("div",{staticClass:"pic"},[e("img",{attrs:{src:s("cf05"),alt:"Vue.js圖片"}})]),t._v("\n                      Vue.js\n                    ")]),e("ul",[e("li",[t._v("熟悉Vue的各種功能，"),e("br"),t._v(" 以及使用Vue Devtools進行debug。")]),e("li",[t._v("了解Vue生命週期，以及使用時機。")]),e("li",[t._v("熟悉Vue router與Vuex。")]),e("li",[t._v("熟悉Vue Cli 2、3的相關配置。")]),e("li",[t._v("能夠切割組件進行封裝，便於維護。")]),e("li",[t._v("理解MVVM開發模式。")])])])]),e("div",{staticClass:"col-lg-6 col-md-6 col-12"},[e("div",{staticClass:"skill-node wow slideInLeft"},[e("h3",[e("div",{staticClass:"pic"},[e("img",{attrs:{src:"https://icon-library.net/images/nodejs-icon/nodejs-icon-13.jpg",alt:"Node.js圖片"}})]),t._v("\n                      Node.js\n                    ")]),e("ul",[e("li",[t._v("使用Express框架，並配置各項中間件。")]),e("li",[t._v("自行設計路由與API，進行CRUD。")]),e("li",[t._v("配置Session進行狀態管理。")]),e("li",[t._v("熟悉art-template模板引擎。")]),e("li",[t._v("會使用MySQL、MongoDB等資料庫。")]),e("li",[t._v("有獨自開發會員式部落格的經驗(前端+後端)。")])])]),e("div",{staticClass:"skill-dev wow slideInLeft"},[e("h3",[t._v("\n                      開發工具\n                    ")]),e("ul",[e("li",[t._v("編輯器：VSCode、SublimeText3")]),e("li",[t._v("NPM包管理工具。")]),e("li",[t._v("Git版本控管。")]),e("li",[t._v("Webpack自動化打包。(會配置、擴展)")]),e("li",[t._v("Postman與Json-serve模擬RESTful API。")]),e("li",[t._v("Google Search Console測試SEO成效。")])])])]),e("div",{staticClass:"col-md-12 col-lg-6"},[e("div",{staticClass:"skill-uiux wow slideInRight"},[e("h3",[t._v("\n                      UIUX相關\n                    ")]),e("ul",[e("li",[t._v("大學期間曾在巨匠電腦進修平面設計。")]),e("li",[t._v("熟悉Adobe PS/AI/XD等軟體的基本操作。作品連結：\n                          "),e("a",{attrs:{target:"_blank",href:"https://drive.google.com/drive/folders/1nvwzZhNg07VXYGoW2Ly_PnikI3dHZoiN?usp=sharing"}},[t._v("點我。")])]),e("li",[t._v("對設計流程有概念。eg. Wireframe、Prototype")]),e("li",[t._v("大學曾修過使用者經驗專題課程，該作品獲得班級小組第一名。")]),e("li",[t._v("懂得使用Material Design提供的guideline優化UX設計。")])])]),e("div",{staticClass:"skill-other wow slideInRight"},[e("h3",[t._v("\n                      其他技能\n                    ")]),e("ul",[e("li",[t._v("Linux遠端部屬經驗（Ubuntu）。")]),e("li",[t._v("Google Sheet：一年的功能性報表製作經驗。")]),e("li",[t._v("Google App Script（使用JS操作Google Drive)"),e("br"),e("ol",[e("li",[t._v("簡易API設計，搭配Google Sheet製作簡易資料庫。\n                              "),e("a",{attrs:{target:"_blank",href:"https://script.google.com/d/1S04DF740M--y9k6zVBY7Uvf3QwtmalQvJB2woPRmEzcoiZV0oTjjCQRK/edit?usp=sharing"}},[t._v("點我")]),t._v("\n                              。\n                            ")]),e("li",[t._v("\n                               實習期間獨自完成能夠批量新增、修改試算表的應用程式，協助同事們解決繁瑣重複性高的工作。\n                              "),e("a",{attrs:{target:"_blank",href:"https://script.google.com/macros/s/AKfycbxVy3B3rDhOtD9QKr1fTOJWYfv9kCcGa-YAXaLXrK1RqNWgmGEP/exec"}},[t._v("點我")]),t._v("\n                              。\n                            ")])])]),e("li",[t._v("其他接觸過的程式語言：C++、Python、PHP。")])])])])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("h2",[t._v("作品集 "),s("br"),s("p",[t._v("Portfolio")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("a",{staticClass:"gitLink",attrs:{href:"https://github.com/YunTaoLin?tab=repositories",target:"_blank"}},[t._v("Github"),s("i",{staticClass:"icon icon-github"})])}],f={name:"home",created:function(){l()("html, body").scrollTop(0)},destroyed:function(){l()(window).off("scroll")}},g=f,h=(s("bb8d"),Object(v["a"])(g,m,p,!1,null,"48c8d354",null)),b=h.exports,C=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"wrap"},[s("div",{staticClass:"banner"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"col-xl-6 offset-xl-1 col-lg-8"},[s("div",{staticClass:"form-area wow fadeInUp"},[t.success?s("div",{staticClass:"success"},[t._m(0),s("button",{on:{click:function(i){t.success=!1}}},[t._v("＜發送其他訊息＞")])]):s("form",[s("h2",[t._v("站內信")]),s("label",[s("span",[t._v("我的姓名：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Your Name"},domProps:{value:t.name},on:{input:function(i){i.target.composing||(t.name=i.target.value)}}})]),s("label",[s("span",[t._v("我的信箱：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Your Email"},domProps:{value:t.email},on:{input:function(i){i.target.composing||(t.email=i.target.value)}}})]),s("label",[s("span",[t._v("我的留言：")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{cols:"30",rows:"7",placeholder:"Your Message"},domProps:{value:t.message},on:{input:function(i){i.target.composing||(t.message=i.target.value)}}})]),s("button",{attrs:{id:"msg-btn"},on:{click:t.updataMessage}},[t._v(t._s(t.submit?"上傳中...":"送出"))])])])])])])])},w=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("h2",[s("i",{staticClass:"icon icon-mail"}),t._v("\n                                    站內信已送出！\n                                ")])}],x=(s("7f7f"),{data:function(){return{name:"",email:"",message:"",submit:!1,success:!1}},methods:{clear:function(){this.name="",this.email="",this.message=""},updataMessage:function(){var t=this;this.submit=!0,l.a.ajax({type:"post",data:{name:this.name,email:this.email,message:this.message},url:"https://script.google.com/macros/s/AKfycbwpjzFqOY8QwZSb3F9GJ_VX5euGVDHaVrcc24oqb4bqez4lJnE/exec"}).done((function(){t.clear(),t.submit=!1,t.success=!0})).fail((function(i){t.clear(),t.submit=!1,t.success=!0}))}},created:function(){l()("html, body").scrollTop(0)}}),k=x,y=(s("6d02"),Object(v["a"])(k,C,w,!1,null,"7ec35750",null)),P=y.exports,T=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("section",{staticClass:"Portfolio"},[t._m(0),t._m(1),s("otherPortfolio",{on:{loadingOK:t.loadingOK}}),s("loading",{attrs:{loading:t.loading}})],1)},j=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"Portfolio_item"},[e("div",{staticClass:"my_container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-12 col-md-7 col-lg-5 order-1 order-md-0"},[e("div",{staticClass:"Portfolio_info"},[e("h3",[t._v("前端共學平台 | 模擬專案")]),e("ul",[e("li",[e("strong",[t._v("前端使用技術")]),t._v("：\n              "),e("code",[t._v("Bootstrap")]),t._v(" + "),e("code",[t._v("Jquery")]),t._v(" + "),e("code",[t._v("Ajax")])]),e("li",[e("strong",[t._v("後端使用技術")]),t._v("：\n              "),e("code",[t._v("Node.js")]),t._v(" + "),e("code",[t._v("Express")]),t._v(" + "),e("code",[t._v("MongoDB")])]),e("li",[e("strong",[t._v("網站主題")]),t._v("：\n              會員式的共學平台，讓使用者們撰寫文章，並與他人進行互動")]),e("li",[e("strong",[t._v("美術設計")]),t._v("：\n              簡約式風格")]),e("li",[e("strong",[t._v("網站介紹")]),t._v("：\n                "),e("ul",[e("li",[t._v("用戶進行註冊、登入，即可在平台上發文。")]),e("li",[t._v("每篇文章皆有按讚、回覆的功能，可即時更新用戶所輸入的留言")]),e("li",[t._v("Session保存會員的登入狀態，並可在網站上進行進階操作。")]),e("li",[t._v("可以編輯自己的個人簡介、更換頭貼，並公開到自己的文章頁面。")]),e("li",[t._v("文章管理功能可顯示文章的詳細數據，另可進行刪除或編輯等操作。")]),e("li",[t._v("支持RWD及移動端優化，可在不同裝置、瀏覽器下使用。")])])])]),e("div",{staticClass:"btn-group"},[e("a",{staticClass:"my_btn",attrs:{href:"http://172.105.215.182/login",target:"_blank"}},[t._v("前往網站")]),e("a",{staticClass:"my_btn ",attrs:{href:"https://github.com/YunTaoLin/MyBlog",target:"_blank"}},[t._v("Github")])])])]),e("div",{staticClass:"col-12 col-md-5 col-lg-7 Portfolio_img"},[e("img",{attrs:{src:s("bfc1"),alt:""}})])])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"Portfolio_item"},[e("div",{staticClass:"my_container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-12 col-md-7 col-lg-5 order-1 order-md-0"},[e("div",{staticClass:"Portfolio_info"},[e("h3",[t._v("玩髮-實現你的想法 | 模擬專案")]),e("ul",[e("li",[e("strong",[t._v("前端使用技術")]),t._v("：\n              "),e("code",[t._v("Vue.js")]),t._v(" + "),e("code",[t._v("Bootstrap")]),t._v(" + "),e("code",[t._v("Ajax")])]),e("li",[e("strong",[t._v("網站主題")]),t._v("：\n              髮型沙龍店的形象官網")]),e("li",[e("strong",[t._v("美術設計")]),t._v("：\n              簡約式風格")]),e("li",[e("strong",[t._v("網站介紹")]),t._v("：\n                "),e("ul",[e("li",[t._v("全站使用 Vue cli 3 進行開發，搭配Vue-router設置前端路由。")]),e("li",[t._v("包含首頁、型錄、服務介紹、店址、預約系統等頁面。")]),e("li",[t._v("使用瀑布流排版展示熱門髮型。")]),e("li",[t._v("預約系統採用進度表設計，優化使用者操作體驗。")]),e("li",[t._v("支持RWD及移動端優化，可在不同裝置、瀏覽器下使用。")])])])]),e("div",{staticClass:"btn-group"},[e("a",{staticClass:"my_btn",attrs:{href:"https://yuntaolin.github.io/play-hair/dist/index.html#/home",target:"_blank"}},[t._v("前往網站")]),e("a",{staticClass:"my_btn",attrs:{href:"https://github.com/YunTaoLin/play-hair",target:"_blank"}},[t._v("Github")])])])]),e("div",{staticClass:"col-12 col-md-5 col-lg-7 Portfolio_img"},[e("img",{attrs:{src:s("d87a"),alt:""}})])])])])}],S=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("section",[t._m(0),t.nowPage.Fullpage>1?s("button",{staticClass:"left-btn",attrs:{id:"left-btn"},on:{click:function(i){return t.ToLeft(0)}}},[t._v("〈")]):t._e(),t.nowPage.Fullpage<t.totalPage.Fullpage?s("button",{staticClass:"right-btn",attrs:{id:"right-btn"},on:{click:function(i){return t.ToRight(0)}}},[t._v("〉")]):t._e(),s("div",{staticClass:"work",attrs:{id:"Fullpage"}},t._l(t.worksData,(function(i){return s("div",{key:i.id,staticClass:"work-item"},[s("div",{staticClass:"pic"},[s("a",{attrs:{href:i.webLink,target:"_blank"}},[s("img",{attrs:{src:i.img,alt:"作品"},on:{error:t.pleaceImg}})])]),s("div",{staticClass:"text"},[s("h4",[s("a",{attrs:{href:i.webLink,target:"_blank"}},[t._v(t._s(i.title))])]),s("p",[s("span"),t._v(t._s(i.context))]),s("p",{staticClass:"Anthor"},[s("a",{attrs:{href:i.webLink,target:"_blank"}},[t._v("前往網站")])])])])})),0)])},E=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("header",[s("p",{staticClass:"sm-title"},[t._v("Other Portfolio")]),s("h3",[t._v("次要作品")])])}],I={name:"Works",data:function(){return{view:[0],wherePage:[0],DB_link:"https://script.google.com/macros/s/AKfycbz32Dm9svOAHCGziwUm9JmLUZEX6srfBz9X90j92E5akBbc875b/exec",worksData:[],cardWidth:400}},mounted:function(){var t=this;l.a.ajax({type:"get",url:this.DB_link,data:{}}).done((function(i){t.worksData=i,l()("html, body").scrollTop(0),setTimeout((function(){t.cardWidth=l()(".work-item").outerWidth(!0)}),100),t.$emit("loadingOK")})).fail((function(){}))},computed:{totalPage:function(){var t=this.page();return{Fullpage:t}},nowPage:function(){var t=Math.round(this.totalPage.Fullpage/2)+this.wherePage[0];return{Fullpage:t}}},methods:{ToLeft:function(t){this.$set(this.wherePage,t,this.wherePage[t]-1),this.$set(this.view,t,this.view[t]+50);var i=document.getElementsByClassName("work");l()(i[t]).css("transition","1.5s"),l()(i[t]).css("transform","translateX("+this.view[t]+"vw)")},ToRight:function(t){this.$set(this.wherePage,t,this.wherePage[t]+1),this.$set(this.view,t,this.view[t]-50);var i=document.getElementsByClassName("work");l()(i[t]).css("transition","1.5s"),l()(i[t]).css("transform","translateX("+this.view[t]+"vw)","transition",".3s")},pleaceImg:function(t){l()(t.target).attr("src","https://i.imgur.com/BpdGQ21.png")},page:function(){return 2*Math.ceil((this.cardWidth*this.worksData.length-document.body.clientWidth)/2/(document.body.clientWidth/2))+1}}},O=I,L=(s("f1cb"),Object(v["a"])(O,S,E,!1,null,"6957cdec",null)),M=L.exports,$=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"loading"}},[t.loading?s("div",{staticClass:"loading"},[t._v("\n       Loading...\n       "),s("div",{staticClass:"inner-load"},[s("svg",[s("rect",{attrs:{id:"loading-rect"}})])])]):t._e()])},A=[],D={props:{loading:{type:Boolean,default:!1}}},V=D,B=(s("a8fe"),Object(v["a"])(V,$,A,!1,null,"6f697178",null)),Y=B.exports,G={components:{otherPortfolio:M,loading:Y},data:function(){return{loading:!0}},created:function(){l()("html, body").scrollTop(0)},destroyed:function(){l()(window).off("scroll")},methods:{loadingOK:function(){console.log("有"),this.loading=!1}}},J=G,N=(s("f522"),Object(v["a"])(J,T,j,!1,null,"311874af",null)),W=N.exports,R=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("section",{staticClass:"experience  lean_bg-top lean_bg-bottom",attrs:{id:"experience"}},[s("div",{staticClass:"background"}),s("div",{staticClass:"container"},[s("h2",{staticClass:"subtitle wow bounceInUp "},[t._v("社團與實習經歷")]),s("div",{staticClass:"experience_list"},[s("div",{staticClass:"experience_items wow bounceInLeft",attrs:{"data-wow-duration":"2s","data-wow-delay":"0.5s"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-11 col-md-6 order-md-last"},[s("div",{staticClass:"imgbox"},[s("div",{staticClass:"imgbox_inner"},[s("div",{staticClass:"img"})])])]),s("div",{staticClass:"col-11 col-lg-5 offset-lg-1  col-md-6 "},[s("div",{staticClass:"experience_item_content--right "},[s("h3",{staticClass:"experience_item_title",attrs:{id:"flow"}},[t._v("若水國際-AI數據服務部")]),s("p",{staticClass:"experience_item_info"},[t._v("2018/11月-2019/6月 擔任專案實習生")]),s("ol",[s("li",[t._v("參與18項AI人工智慧標註專案。")]),s("li",[t._v("依專案需求整理出標註原則以及執行流程。")]),s("li",[t._v("製作抽檢相關各式動態報表，檢視每日標註良率。")]),s("li",[t._v("製作標註原則相關教材、心智圖。")]),s("li",[t._v("協助標註師團隊各項行政相關事宜。")]),s("li",[t._v("統計分析標註結果與成效。")]),s("li",[t._v("與夥伴共同規劃抽檢師評核標準。")])])])])])]),s("div",{staticClass:"experience_items wow bounceInRight",attrs:{"data-wow-duration":"2s","data-wow-delay":"0.5s"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-11 col-md-6"},[s("div",{staticClass:"imgbox"},[s("div",{staticClass:"imgbox_inner"},[s("div",{staticClass:"img"})])])]),s("div",{staticClass:"col-11 col-md-5 col-lg-5 "},[s("div",{staticClass:"experience_item_content--left "},[s("h3",{staticClass:"experience_item_title"},[t._v("JMOSA學生發展委員會")]),s("p",{staticClass:"experience_item_info"},[t._v("2017/9月-2018年/2月 - 擔任學生代表共融營總召")]),s("ol",[s("li",[t._v("舉辦規模60人的營隊活動。")]),s("li",[t._v("為期半年的籌備期擔任會議主席。")]),s("li",[t._v("規劃各職位進度甘特圖，以及安排集訓期流程。")]),s("li",[t._v("撰寫企劃書，與夥伴共同籌劃9項課程教案。")]),s("li",[t._v("與場地、系院、商家進行溝通，調整營期內容。")]),s("li",[t._v("完成結案報告書，並完成經費核銷。")]),s("li",[t._v("學會溝通與協調，及團隊間如何有效率地合作。")])])])])])]),s("div",{staticClass:"experience_items wow bounceInLeft",attrs:{"data-wow-duration":"2s","data-wow-delay":"0.5s"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-11 col-md-6 order-md-last"},[s("div",{staticClass:"imgbox"},[s("div",{staticClass:"imgbox_inner"},[s("div",{staticClass:"img"})])])]),s("div",{staticClass:"col-11 col-lg-5 offset-lg-1  col-md-6 "},[s("div",{staticClass:"experience_item_content--right"},[s("h3",{staticClass:"experience_item_title"},[t._v("輔大心理系學會")]),s("p",{staticClass:"experience_item_info"},[t._v("2016/9月-2017/6月 - 擔任公關長 ")]),s("ol",[s("li",[t._v("管理學會粉絲專頁。 "),s("a",{attrs:{href:"https://goo.gl/7iABwk"}},[t._v("點我")]),t._v("。")]),s("li",[t._v("粉絲專頁追蹤數，由600多位(2016/9月)提升至800多位(2017/7月底)。")]),s("li",[t._v("撰寫學年間，系上活動宣傳文案、活動倒數文。")]),s("li",[t._v("舉辦聖誕節抽獎活動，達成2.4K的觸及量。")])])])])])]),s("div",{staticClass:"experience_items wow bounceInRight",attrs:{"data-wow-duration":"2s","data-wow-delay":"0.5s"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-11 col-md-6 "},[s("div",{staticClass:"imgbox"},[s("div",{staticClass:"imgbox_inner"},[s("div",{staticClass:"img"})])])]),s("div",{staticClass:"col-11 col-md-5 col-lg-5 "},[s("div",{staticClass:"experience_item_content--left"},[s("h3",{staticClass:"experience_item_title"},[t._v("勵德青少年服務隊")]),s("p",{staticClass:"experience_item_info"},[t._v("2016/9月-2017/6月 - 擔任活動長")]),s("ol",[s("li",[t._v("每學期的寒暑假會到誠正矯治學校舉辦為期一週的服務營隊。")]),s("li",[t._v("參與過4次營隊服務，3次學期間平日服務。(營隊總人數含學員約90人)")]),s("li",[t._v("規劃營隊期間的各種活動教案、以及籌備期間舉辦社團裡的共融活動。")]),s("li",[t._v("多次撰寫舞台劇劇本、擔任主持人。")]),s("li",[t._v("常需要規劃活動，因而學習到如何發揮創意，以及各種活動主持的技巧。")])])])])])])])])])}],X={created:function(){l()("html, body").scrollTop(0)},destroyed:function(){l()(window).off("scroll")}},F=X,K=(s("023c"),Object(v["a"])(F,R,U,!1,null,"947914e4",null)),z=K.exports;e["a"].use(_["a"]);var H=new _["a"]({routes:[{path:"/",name:"index",component:b},{path:"/experience",name:"Experience",component:z},{path:"/portfolio",name:"Portfolio",component:W},{path:"/message",name:"Message",component:P}]}),Q=s("b3b5");e["a"].config.productionTip=!1,e["a"].use(Q["a"]),new e["a"]({router:H,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,i,s){"use strict";var e=s("e332"),a=s.n(e);a.a},"6d02":function(t,i,s){"use strict";var e=s("3e83"),a=s.n(e);a.a},"855e":function(t,i,s){t.exports=s.p+"img/CSS3_and_HTM.3e5b9f74.png"},a8fe:function(t,i,s){"use strict";var e=s("bf2a"),a=s.n(e);a.a},aab7:function(t,i,s){t.exports=s.p+"img/maple.e5a64f63.png"},bb8d:function(t,i,s){"use strict";var e=s("e5cb"),a=s.n(e);a.a},bf2a:function(t,i,s){},bfc1:function(t,i,s){t.exports=s.p+"img/blog.36a7f57a.jpg"},cf05:function(t,i,s){t.exports=s.p+"img/logo.c1dc63d6.png"},cf16:function(t,i,s){},d235:function(t,i,s){t.exports=s.p+"img/JS.184596af.png"},d540:function(t,i,s){},d87a:function(t,i,s){t.exports=s.p+"img/玩髮.d33f0a45.jpg"},e332:function(t,i,s){},e5cb:function(t,i,s){},f1b3:function(t,i,s){},f1cb:function(t,i,s){"use strict";var e=s("cf16"),a=s.n(e);a.a},f522:function(t,i,s){"use strict";var e=s("d540"),a=s.n(e);a.a}});
//# sourceMappingURL=app.f2de8ec0.js.map