(function(t) {
    function a(a) {
        for (var i, o, l = a[0], c = a[1], r = a[2], d = 0, v = []; d < l.length; d++) o = l[d], Object.prototype.hasOwnProperty.call(s, o) && s[o] && v.push(s[o][0]), s[o] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        u && u(a);
        while (v.length) v.shift()();
        return n.push.apply(n, r || []), e()
    }

    function e() {
        for (var t, a = 0; a < n.length; a++) {
            for (var e = n[a], i = !0, l = 1; l < e.length; l++) {
                var c = e[l];
                0 !== s[c] && (i = !1)
            }
            i && (n.splice(a--, 1), t = o(o.s = e[0]))
        }
        return t
    }
    var i = {},
        s = { app: 0 },
        n = [];

    function o(a) { if (i[a]) return i[a].exports; var e = i[a] = { i: a, l: !1, exports: {} }; return t[a].call(e.exports, e, e.exports, o), e.l = !0, e.exports }
    o.m = t, o.c = i, o.d = function(t, a, e) { o.o(t, a) || Object.defineProperty(t, a, { enumerable: !0, get: e }) }, o.r = function(t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, a) {
        if (1 & a && (t = o(t)), 8 & a) return t;
        if (4 & a && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (o.r(e), Object.defineProperty(e, "default", { enumerable: !0, value: t }), 2 & a && "string" != typeof t)
            for (var i in t) o.d(e, i, function(a) { return t[a] }.bind(null, i));
        return e
    }, o.n = function(t) { var a = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return o.d(a, "a", a), a }, o.o = function(t, a) { return Object.prototype.hasOwnProperty.call(t, a) }, o.p = "/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = l.push.bind(l);
    l.push = a, l = l.slice();
    for (var r = 0; r < l.length; r++) a(l[r]);
    var u = c;
    n.push([0, "chunk-vendors"]), e()
})({
    0: function(t, a, e) { t.exports = e("56d7") },
    "0713": function(t, a, e) {},
    "0a21": function(t, a, e) {},
    "0f03": function(t, a, e) { t.exports = e.p + "resume/img/05.285e03a0.png" },
    "10cf": function(t, a, e) { t.exports = e.p + "resume/img/02.9f706046.png" },
    "204f": function(t, a, e) { t.exports = e.p + "resume/img/04.eb08f744.png" },
    2550: function(t, a, e) {},
    "2d86": function(t, a, e) {},
    "37be": function(t, a, e) { t.exports = e.p + "resume/img/大頭照2.e879890c.jpg" },
    "3e83": function(t, a, e) {},
    5334: function(t, a, e) { t.exports = e.p + "resume/img/01.abb7eec9.png" },
    5406: function(t, a, e) {},
    "56d7": function(t, a, e) {
        "use strict";
        e.r(a);
        e("cadf"), e("551c"), e("f751"), e("097d");
        var i = e("2b0e"),
            s = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { attrs: { id: "app" } }, [e("header", { staticClass: "header-index js-scroll " }, [e("div", { staticClass: "container" }, [e("div", { staticClass: "navbar" }, [t._m(0), e("nav", { staticClass: "nav" }, [e("ul", [e("li", [e("router-link", { staticClass: "nav-item", attrs: { to: "/" } }, [t._v("自我簡介")])], 1), e("li", [e("router-link", { staticClass: "nav-item", attrs: { to: "/portfolio" } }, [t._v("作品集")])], 1), e("li", [e("router-link", { staticClass: "nav-item", attrs: { to: "/message" } }, [t._v("站內信")])], 1)])]), t._m(1)])]), e("div", { staticClass: "popup-menu" }, [e("div", { staticClass: "container-fluid" }, [e("div", { staticClass: "mark col-12" }), e("nav", { staticClass: "nav col-8 " }, [e("h4", [t._v("menu")]), e("ul", [e("li", [e("router-link", { staticClass: "nav-item", attrs: { to: "/" } }, [t._v("自我簡介")])], 1), e("li", [e("router-link", { staticClass: "nav-item", attrs: { to: "/portfolio" } }, [t._v("作品集")])], 1), e("li", [e("router-link", { staticClass: "nav-item", attrs: { to: "/message" } }, [t._v("站內信")])], 1)])])])])]), e("h1", [t._v("林耘滔個人履歷網站 YunTao Lin")]), e("router-view", { staticClass: "main" }), t._m(2)], 1)
            },
            n = [function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "social-bar" }, [e("a", { staticClass: "icon-btn", attrs: { href: "https://www.facebook.com/yuntao.lin", title: "Facebook" } }, [e("i", { staticClass: "icon icon-facebook-official" })]), e("a", { staticClass: "icon-btn", attrs: { href: "https://www.instagram.com/i456919yuntao/?hl=zh-tw", title: "Instagram" } }, [e("i", { staticClass: "icon icon-instagram" })]), e("a", { staticClass: "icon-btn", attrs: { href: "https://github.com/YunTaoLin", title: "Github" } }, [e("i", { staticClass: "icon icon-github" })])])
            }, function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("a", { staticClass: "menu-toggle", attrs: { href: "javascript:" } }, [e("span"), e("span"), e("span")])
            }, function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("footer", [e("div", { staticClass: "container" }, [e("p", { staticClass: "copyright" }, [t._v("copyright © YunTao.Lin")])])])
            }],
            o = e("1157"),
            l = e.n(o),
            c = {
                methods: {
                    scrollEvent: function() {
                        l()(window).on("scroll", (function() {
                            window.scrollY;
                            l()(window).scrollTop() >= 200 && l()(".js-scroll").addClass("fading"), l()(window).scrollTop() < 200 && l()(".js-scroll").removeClass("fading")
                        }))
                    },
                    menuToggle: function() { l()(".header-index").toggleClass("active"), l()(".popup-menu").fadeToggle(), l()(".popup-menu  nav").toggleClass("nav-active") }
                },
                mounted: function() {
                    var t = this;
                    this.scrollEvent(), l()(".menu-toggle").on("click", (function() { return t.menuToggle() })), l()(".mark").on("click", (function() { return t.menuToggle() }))
                },
                beforeUpdate: function() { l()(".js-scroll").removeClass("fading"), l()(window).off("scroll"), l()(".menu-toggle").off("click"), l()(".mark").off("click"), l()(".header-index").removeClass("active"), l()(".popup-menu").hide(), l()(".popup-menu  nav").removeClass("nav-active") },
                updated: function() {
                    var t = this;
                    this.scrollEvent(), l()(".menu-toggle").on("click", (function() { return t.menuToggle() })), l()(".mark").on("click", (function() { return t.menuToggle() }))
                }
            },
            r = c,
            u = (e("5c0b"), e("2877")),
            d = Object(u["a"])(r, s, n, !1, null, null, null),
            v = d.exports,
            p = e("8c4f"),
            m = function() {
                var t = this,
                    a = t.$createElement,
                    i = t._self._c || a;
                return i("div", { staticClass: "index" }, [i("div", { staticClass: "background" }), i("div", { staticClass: "wrap" }, [i("div", { staticClass: "mainArea" }, [i("section", { staticClass: "about" }, [i("div", { staticClass: "container" }, [i("img", { directives: [{ name: "parallax", rawName: "v-parallax", value: .5, expression: "0.5" }], staticClass: "d-img d-01 wow fadeIn", attrs: { src: e("5334"), alt: "裝飾圖片" } }), i("img", { directives: [{ name: "parallax", rawName: "v-parallax", value: .5, expression: "0.5" }], staticClass: "d-img d-02 wow fadeIn", attrs: { src: e("0f03"), alt: "裝飾圖片" } }), t._m(0)])]), i("section", { staticClass: "skill" }, [i("img", { directives: [{ name: "parallax", rawName: "v-parallax", value: .5, expression: "0.5" }], staticClass: "d-img d-03 wow fadeIn", attrs: { src: e("aab7"), alt: "裝飾圖片" } }), t._m(1)]), i("section", { staticClass: "works" }, [i("div", { staticClass: "container works-inner wow slideInUp" }, [i("div", { staticClass: "works-context" }, [t._m(2), i("div", { staticClass: "btn-group" }, [i("router-link", { staticClass: "workLink", attrs: { to: "/portfolio" } }, [t._v("前往作品集")]), t._m(3)], 1)])])])]), i("section", { staticClass: "experience  lean_bg-top lean_bg-bottom", attrs: { id: "experience" } }, [i("img", { directives: [{ name: "parallax", rawName: "v-parallax", value: .5, expression: "0.5" }], staticClass: "d-img d-04 wow fadeIn", attrs: { src: e("204f"), alt: "裝飾圖片" } }), i("img", { directives: [{ name: "parallax", rawName: "v-parallax", value: .5, expression: "0.5" }], staticClass: "d-img d-05 wow fadeIn", attrs: { src: e("10cf"), alt: "裝飾圖片" } }), i("img", { directives: [{ name: "parallax", rawName: "v-parallax", value: .5, expression: "0.5" }], staticClass: "d-img d-06 wow fadeIn", attrs: { src: e("a198"), alt: "裝飾圖片" } }), t._m(4)]), i("div", { staticClass: "fixed-btn-group" }, [i("router-link", { attrs: { to: "/message" } }, [i("div", { staticClass: "fixed-btn", attrs: { id: "contact" } }, [i("span", [i("i", { staticClass: "icon icon-mail" })]), i("p", [t._v("站內信")])])]), i("div", { staticClass: "fixed-btn", attrs: { id: "toTop" }, on: { click: t.backToTop } }, [i("span", [t._v("︿")]), i("p", [t._v("Top")])])], 1)])])
            },
            g = [function() {
                var t = this,
                    a = t.$createElement,
                    i = t._self._c || a;
                return i("div", { staticClass: "row" }, [i("div", { staticClass: "about_context col-lg-5 col-12 order-lg-0 order-1 wow bounceInLeft" }, [i("h2", [t._v("About Me "), i("br"), i("span", {}, [t._v("你好，我是耘滔 YunTao")])]), i("p", [t._v("畢業於輔仁大學心理學系。"), i("br"), t._v("\n                  曾經的夢想是成為一位UX研究員，"), i("br"), t._v("\n                  後來因緣際會下接觸了前端技術，"), i("br"), t._v("\n                  發現自己在將網站實做出來的過程中，"), i("br"), t._v("\n                  可以獲得極大的成就感，"), i("br"), t._v("\n                  從此便對程式的世界產生了豐富的好奇心。"), i("br"), i("br"), t._v("\n                  期許未來能夠使用自身的經驗解決各種問題。\n                ")])]), i("div", { staticClass: "col-lg-5 col-12 " }, [i("div", { staticClass: "about_pic wow flipInY " }, [i("img", { attrs: { src: e("37be"), alt: "我的大頭照" } }), i("div", { staticClass: "say wow fadeIn", attrs: { "data-wow-delay": "2s" } }, [t._v("I'm YunTao !")])])])])
            }, function() {
                var t = this,
                    a = t.$createElement,
                    i = t._self._c || a;
                return i("div", { staticClass: "container" }, [i("h2", [t._v("專業技能")]), i("div", { staticClass: "row" }, [i("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [i("div", { staticClass: "skill-html " }, [i("h3", [i("div", { staticClass: "pic" }, [i("img", { attrs: { src: e("855e"), alt: "HTML、CSS圖片" } })]), t._v("\n                       HTML、CSS\n                    ")]), i("ul", [i("li", [t._v("熟悉HTML5與CSS3，"), i("br"), t._v("建構符合W3C規範之網站，優化SEO。")]), i("li", [t._v("能夠完全手刻RWD切版，"), i("br"), t._v("能依照使用者情境設計響應式功能。")]), i("li", [t._v("以模組化方式建構CSS (SCSS)，"), i("br"), t._v("並遵循OOCSS或BEM命名規則。")]), i("li", [t._v("CSS preprocessor：SCSS")]), i("li", [t._v("CSS frameexperience：Bootstrap、Pure UI")])])])]), i("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [i("div", { staticClass: "skill-js " }, [i("h3", [i("div", { staticClass: "pic" }, [i("img", { attrs: { src: e("d235"), alt: "Javascript圖片" } })]), t._v("\n                     Javascript\n                    ")]), i("ul", [i("li", [t._v("熟悉ES6語法，以及JS各項特性與原理。（eg. prototype、closure、scope）")]), i("li", [t._v("能夠使用原生JS實作出Jquery的各種動畫效果。")]), i("li", [t._v("熟悉Ajax串接後端API。")]), i("li", [t._v("有使用過Typescript的經驗。")]), i("li", [t._v("node.js搭配Express框架(學習中)")])])])]), i("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [i("div", { staticClass: "skill-vue " }, [i("h3", [i("div", { staticClass: "pic" }, [i("img", { attrs: { src: e("cf05"), alt: "Vue.js圖片" } })]), t._v("\n                      Vue.js\n                    ")]), i("ul", [i("li", [t._v("熟悉Vue的各種基礎功能，"), i("br"), t._v(" 以及使用Vue Devtools進行debug。")]), i("li", [t._v("了解Vue生命週期，以及使用時機。")]), i("li", [t._v("使用Vue router開發SPA網站。")]), i("li", [t._v("使用Vuex進行資料狀態管理。")]), i("li", [t._v("能夠開設Vue Cli專案進行開發。")]), i("li", [t._v("Nuxt.js（學習中）")])])])]), i("div", { staticClass: "col-lg-6 col-md-6 col-12" }, [i("div", { staticClass: "skill-dev wow slideInLeft" }, [i("h3", [t._v("\n                      開發工具\n                    ")]), i("ul", [i("li", [t._v("編輯器：VSCode、SublimeText3")]), i("li", [t._v("NPM套件管理。")]), i("li", [t._v("Git版本控管。")]), i("li", [t._v("Webpack自動化打包。")]), i("li", [t._v("Postman與Json-serve模擬RESTful API。")]), i("li", [t._v("有自己整理的Jquery常用插件清單。")]), i("li", [t._v("Google Search Console測試SEO成效。")]), i("li", [t._v("接觸過AWS平台。")])])])]), i("div", { staticClass: "col-md-12 col-lg-6" }, [i("div", { staticClass: "skill-uiux wow slideInRight" }, [i("h3", [t._v("\n                      UIUX相關\n                    ")]), i("ul", [i("li", [t._v("大學期間曾在巨匠電腦進修平面設計。")]), i("li", [t._v("熟悉Adobe PS/AI/XD等軟體的基本操作。作品連結：\n                          "), i("a", { attrs: { target: "_blank", href: "https://drive.google.com/drive/folders/1nvwzZhNg07VXYGoW2Ly_PnikI3dHZoiN?usp=sharing" } }, [t._v("點我。")])]), i("li", [t._v("清楚設計流程概念。eg. Wireframe、Prototype")]), i("li", [t._v("大學曾修過使用者經驗專題課程，該作品獲得班級小組第一名。")]), i("li", [t._v("懂得使用Material Design提供的guideline優化UX設計。")])])]), i("div", { staticClass: "skill-other wow slideInRight" }, [i("h3", [t._v("\n                      其他技能\n                    ")]), i("ul", [i("li", [t._v("接觸過的程式語言：C++、Python、PHP。")]), i("li", [t._v("會使用基礎MySQL語法。")]), i("li", [t._v("Google Sheet：一年的功能性報表製作經驗。")]), i("li", [t._v("Google App Script（使用JS操作Google Drive)"), i("br"), i("ol", [i("li", [t._v("簡易API設計，搭配Google Sheet製作簡易資料庫。\n                              "), i("a", { attrs: { target: "_blank", href: "https://script.google.com/d/1labeaqLDyoxF7pxieAsqDtdJMCZwZqQ24DYMNXOCKwT--ngZg2n2og8K/edit?usp=sharing" } }, [t._v("點我")]), t._v("\n                              。\n                            ")]), i("li", [t._v("\n                               實習期間獨自完成能夠批量新增、修改試算表的應用程式，協助同事們解決繁瑣重複性高的工作。\n                              "), i("a", { attrs: { target: "_blank", href: "https://script.google.com/macros/s/AKfycbxVy3B3rDhOtD9QKr1fTOJWYfv9kCcGa-YAXaLXrK1RqNWgmGEP/exec" } }, [t._v("點我")]), t._v("\n                              。\n                            ")])])])])])])])])
            }, function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("h2", [t._v("作品集 "), e("span", [t._v("Portfolio")])])
            }, function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("a", { staticClass: "gitLink", attrs: { href: "https://github.com/YunTaoLin?tab=repositories" } }, [t._v("Github"), e("i", { staticClass: "icon icon-github" })])
            }, function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "container" }, [e("h2", { staticClass: "subtitle wow bounceInUp " }, [t._v("其他經歷")]), e("div", { staticClass: "experience_list" }, [e("div", { staticClass: "experience_items wow bounceInLeft", attrs: { "data-wow-duration": "2s", "data-wow-delay": "0.5s" } }, [e("div", { staticClass: "row" }, [e("div", { staticClass: "col-11 col-md-6 order-md-last" }, [e("div", { staticClass: "imgbox" }, [e("div", { staticClass: "imgbox_inner" }, [e("div", { staticClass: "img" })])])]), e("div", { staticClass: "col-11 col-lg-4 offset-lg-1 col-md-5 " }, [e("div", { staticClass: "experience_item_content--right " }, [e("h3", { staticClass: "experience_item_title", attrs: { id: "flow" } }, [t._v("若水國際-AI數據服務部")]), e("p", { staticClass: "experience_item_info" }, [t._v("2018/11月-2019/6月 擔任專案實習生")]), e("ol", [e("li", [t._v("參與18項AI人工智慧標註專案。")]), e("li", [t._v("依專案需求整理出標註原則以及執行流程。")]), e("li", [t._v("製作抽檢相關各式動態報表，檢視每日標註良率。")]), e("li", [t._v("製作標註原則相關教材、心智圖。")]), e("li", [t._v("協助標註師團隊各項行政相關事宜。")]), e("li", [t._v("統計分析標註結果與成效。")]), e("li", [t._v("與夥伴共同規劃抽檢師評核標準。")])])])])])]), e("div", { staticClass: "experience_items wow bounceInRight", attrs: { "data-wow-duration": "2s", "data-wow-delay": "0.5s" } }, [e("div", { staticClass: "row" }, [e("div", { staticClass: "col-11 col-md-6" }, [e("div", { staticClass: "imgbox" }, [e("div", { staticClass: "imgbox_inner" }, [e("div", { staticClass: "img" })])])]), e("div", { staticClass: "col-11 col-md-5 col-lg-4 " }, [e("div", { staticClass: "experience_item_content--left " }, [e("h3", { staticClass: "experience_item_title" }, [t._v("JMOSA學生發展委員會")]), e("p", { staticClass: "experience_item_info" }, [t._v("2017/9月-2018年/2月 - 擔任學生代表共融營總召")]), e("ol", [e("li", [t._v("舉辦規模60人的營隊活動。")]), e("li", [t._v("為期半年的籌備期擔任會議主席。")]), e("li", [t._v("規劃各職位進度甘特圖，以及安排集訓期流程。")]), e("li", [t._v("撰寫企劃書，與夥伴共同籌劃9項課程教案。")]), e("li", [t._v("與場地、系院、商家進行溝通，調整營期內容。")]), e("li", [t._v("完成結案報告書，並完成經費核銷。")]), e("li", [t._v("學會溝通與協調，及團隊間如何有效率地合作。")])])])])])]), e("div", { staticClass: "experience_items wow bounceInLeft", attrs: { "data-wow-duration": "2s", "data-wow-delay": "0.5s" } }, [e("div", { staticClass: "row" }, [e("div", { staticClass: "col-11 col-md-6 order-md-last" }, [e("div", { staticClass: "imgbox" }, [e("div", { staticClass: "imgbox_inner" }, [e("div", { staticClass: "img" })])])]), e("div", { staticClass: "col-11 col-lg-4 offset-lg-1 col-md-5 " }, [e("div", { staticClass: "experience_item_content--right" }, [e("h3", { staticClass: "experience_item_title" }, [t._v("輔大心理系學會")]), e("p", { staticClass: "experience_item_info" }, [t._v("2016/9月-2017/6月 - 擔任公關長 ")]), e("ol", [e("li", [t._v("管理學會粉絲專頁。 "), e("a", { attrs: { href: "https://goo.gl/7iABwk" } }, [t._v("點我。")])]), e("li", [t._v("粉絲專頁追蹤數，由600多位(2016/9月)提升至800多位(2017/7月底)。")]), e("li", [t._v("撰寫學年間，系上活動宣傳文案、活動倒數文。")]), e("li", [t._v("舉辦聖誕節抽獎活動，達成2.4K的觸及量。")])])])])])]), e("div", { staticClass: "experience_items wow bounceInRight", attrs: { "data-wow-duration": "2s", "data-wow-delay": "0.5s" } }, [e("div", { staticClass: "row" }, [e("div", { staticClass: "col-11 col-md-6 " }, [e("div", { staticClass: "imgbox" }, [e("div", { staticClass: "imgbox_inner" }, [e("div", { staticClass: "img" })])])]), e("div", { staticClass: "col-11 col-md-5 col-lg-4 " }, [e("div", { staticClass: "experience_item_content--left" }, [e("h3", { staticClass: "experience_item_title" }, [t._v("勵德青少年服務隊")]), e("p", { staticClass: "experience_item_info" }, [t._v("2016/9月-2017/6月 - 擔任活動長")]), e("ol", [e("li", [t._v("每學期的寒暑假會到誠正矯治學校舉辦為期一週的服務營隊。")]), e("li", [t._v("參與過4次營隊服務，3次學期間平日服務。(營隊總人數含學員約90人)")]), e("li", [t._v("規劃營隊期間的各種活動教案、以及籌備期間舉辦社團裡的共融活動。")]), e("li", [t._v("多次撰寫舞台劇劇本、擔任主持人。")]), e("li", [t._v("常需要規劃活動，因而學習到如何發揮創意，以及各種活動主持的技巧。")])])])])])])])])
            }],
            f = { name: "home", data: function() { return {} }, methods: { backToTop: function() { l()("html, body").animate({ scrollTop: 0 }, 1e3) } }, created: function() { l()("html, body").scrollTop(0) }, mounted: function() { l()(window).scrollTop() < 1e3 && l()(".fixed-btn-group").hide(), l()(window).on("scroll", (function() { l()(window).scrollTop() >= 1e3 && l()(".fixed-btn-group").fadeIn(500), l()(window).scrollTop() < 1e3 && l()(".fixed-btn-group").fadeOut(500) })) }, destroyed: function() { l()(window).off("scroll") } },
            _ = f,
            h = (e("b669"), Object(u["a"])(_, m, g, !1, null, "646f9fdf", null)),
            w = h.exports,
            b = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "wrap" }, [e("div", { staticClass: "banner" }, [e("div", { staticClass: "container-fluid" }, [e("div", { staticClass: "col-xl-6 offset-xl-1 col-lg-8" }, [e("div", { staticClass: "form-area wow fadeInUp" }, [t.success ? e("div", { staticClass: "success" }, [t._m(0), e("button", { on: { click: function(a) { t.success = !1 } } }, [t._v("＜發送其他訊息＞")])]) : e("form", [e("h2", [t._v("站內信")]), e("label", [e("span", [t._v("我的姓名：")]), e("input", { directives: [{ name: "model", rawName: "v-model", value: t.name, expression: "name" }], attrs: { type: "text", placeholder: "Your Name" }, domProps: { value: t.name }, on: { input: function(a) { a.target.composing || (t.name = a.target.value) } } })]), e("label", [e("span", [t._v("我的信箱：")]), e("input", { directives: [{ name: "model", rawName: "v-model", value: t.email, expression: "email" }], attrs: { type: "email", placeholder: "Your Email" }, domProps: { value: t.email }, on: { input: function(a) { a.target.composing || (t.email = a.target.value) } } })]), e("label", [e("span", [t._v("我的留言：")]), e("textarea", { directives: [{ name: "model", rawName: "v-model", value: t.message, expression: "message" }], attrs: { cols: "30", rows: "7", placeholder: "Your Message" }, domProps: { value: t.message }, on: { input: function(a) { a.target.composing || (t.message = a.target.value) } } })]), e("button", { attrs: { id: "msg-btn" }, on: { click: t.updataMessage } }, [t._v(t._s(t.submit ? "上傳中..." : "送出"))])])])])])])])
            },
            C = [function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("h2", [e("i", { staticClass: "icon icon-mail" }), t._v("\n                                    站內信已送出！\n                                ")])
            }],
            x = (e("7f7f"), {
                data: function() { return { name: "", email: "", message: "", submit: !1, success: !1 } },
                methods: {
                    clear: function() { this.name = "", this.email = "", this.message = "" },
                    updataMessage: function() {
                        var t = this;
                        this.submit = !0, l.a.ajax({ type: "post", data: { name: this.name, email: this.email, message: this.message }, url: "https://script.google.com/macros/s/AKfycbwpjzFqOY8QwZSb3F9GJ_VX5euGVDHaVrcc24oqb4bqez4lJnE/exec" }).done((function() { t.clear(), t.submit = !1, t.success = !0 })).fail((function(a) { t.clear(), t.submit = !1, t.success = !0 }))
                    }
                },
                created: function() { l()("html, body").scrollTop(0) }
            }),
            k = x,
            D = (e("6d02"), Object(u["a"])(k, b, C, !1, null, "7ec35750", null)),
            L = D.exports,
            y = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "wrapper" }, [e("transition", { attrs: { name: "loading" } }, [t.loading ? e("div", { staticClass: "loading" }, [t._v("\n          Loading...\n          "), e("div", { staticClass: "inner-load" }, [e("svg", [e("rect", { attrs: { id: "loading-rect" } })])])]) : t._e()]), e("section", [e("router-link", { staticClass: "plus-btn", attrs: { to: "/works/updataFullpage" } }, [e("span", [t._v("管理作品")])]), t._m(0), t.nowPage.Fullpage > 1 ? e("button", { staticClass: "left-btn", attrs: { id: "left-btn" }, on: { click: function(a) { return t.ToLeft(0) } } }, [t._v("〈")]) : t._e(), t.nowPage.Fullpage < t.totalPage.Fullpage ? e("button", { staticClass: "right-btn", attrs: { id: "right-btn" }, on: { click: function(a) { return t.ToRight(0) } } }, [t._v("〉")]) : t._e(), e("div", { staticClass: "work", attrs: { id: "Fullpage" } }, t._l(t.worksData.Fullpage, (function(a) { return e("div", { key: a.id, staticClass: "work-item" }, [e("div", { staticClass: "pic" }, [e("a", { attrs: { href: a.webLink } }, [e("img", { attrs: { src: a.img, alt: "作品" }, on: { error: t.pleaceImg } })])]), e("div", { staticClass: "text" }, [e("h4", [e("a", { attrs: { href: a.webLink } }, [t._v(t._s(a.title))])]), e("p", [e("span", [t._v("簡介：")]), t._v(t._s(a.context))]), e("p", { staticClass: "Anthor" }, [e("a", { attrs: { href: a.webLink } }, [t._v("＜前往網站＞")])]), e("a", { staticClass: "btn", attrs: { href: a.gitLink } }, [t._v("Github")])])]) })), 0)], 1), e("section", [e("router-link", { staticClass: "plus-btn", attrs: { to: "/works/updataMultipage" } }, [e("span", [t._v("管理作品")])]), t._m(1), t.nowPage.Multipage > 1 ? e("button", { staticClass: "left-btn", attrs: { id: "left-btn" }, on: { click: function(a) { return t.ToLeft(1) } } }, [t._v(" 〈 ")]) : t._e(), t.nowPage.Multipage < t.totalPage.Multipage ? e("button", { staticClass: "right-btn", attrs: { id: "right-btn" }, on: { click: function(a) { return t.ToRight(1) } } }, [t._v("〉")]) : t._e(), e("div", { staticClass: "work", attrs: { id: "Multipage" } }, t._l(t.worksData.Multipage, (function(a) { return e("div", { key: a.id, staticClass: "work-item" }, [e("div", { staticClass: "pic" }, [e("a", { attrs: { href: a.webLink } }, [e("img", { attrs: { src: a.img, alt: "作品" }, on: { error: t.pleaceImg } })])]), e("div", { staticClass: "text" }, [e("h4", [e("a", { attrs: { href: a.webLink } }, [t._v(t._s(a.title))])]), e("p", [e("span", [t._v("簡介：")]), t._v(t._s(a.context))]), e("p", { staticClass: "Anthor" }, [e("a", { attrs: { href: a.webLink } }, [t._v(" ＜前往網站＞ ")])]), e("a", { staticClass: "btn", attrs: { href: a.gitLink } }, [t._v("Github")])])]) })), 0)], 1), e("section", [e("router-link", { staticClass: "plus-btn", attrs: { to: "/works/updataPractical" } }, [e("span", [t._v("管理作品")])]), t._m(2), t.nowPage.Practical > 1 ? e("button", { staticClass: "left-btn", attrs: { id: "left-btn" }, on: { click: function(a) { return t.ToLeft(2) } } }, [t._v(" 〈 ")]) : t._e(), t.nowPage.Practical < t.totalPage.Practical ? e("button", { staticClass: "right-btn", attrs: { id: "right-btn" }, on: { click: function(a) { return t.ToRight(2) } } }, [t._v("〉")]) : t._e(), e("div", { staticClass: "work", attrs: { id: "Practical" } }, t._l(t.worksData.Practical, (function(a) { return e("div", { key: a.id, staticClass: "work-item" }, [e("div", { staticClass: "pic" }, [e("a", { attrs: { href: a.webLink } }, [e("img", { attrs: { src: a.img, alt: "作品" }, on: { error: t.pleaceImg } })])]), e("div", { staticClass: "text" }, [e("h4", [e("a", { attrs: { href: a.webLink } }, [t._v(t._s(a.title))])]), e("p", [e("span", [t._v("簡介：")]), t._v(t._s(a.context))]), e("p", { staticClass: "Anthor" }, [e("a", { attrs: { href: a.webLink } }, [t._v("＜前往網站＞")])]), e("a", { staticClass: "btn", attrs: { href: a.gitLink } }, [t._v("Github")])])]) })), 0)], 1)], 1)
            },
            P = [function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("header", [e("p", { staticClass: "sm-title" }, [t._v("Fullpage Web")]), e("h3", [t._v("一頁式網站")])])
            }, function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("header", [e("p", { staticClass: "sm-title" }, [t._v("Multipage web")]), e("h3", [t._v("多頁式網站")])])
            }, function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("header", [e("p", { staticClass: "sm-title" }, [t._v("Component Design")]), e("h3", [t._v("元件設計")])])
            }],
            j = {
                name: "Works",
                data: function() { return { loading: !0, view: [0, 0, 0], wherePage: [0, 0, 0], DB_link: ["https://script.google.com/macros/s/AKfycbz32Dm9svOAHCGziwUm9JmLUZEX6srfBz9X90j92E5akBbc875b/exec", "https://script.google.com/a/gapp.fju.edu.tw/macros/s/AKfycbyeG3c8vQEPB9N_Xcjx_-ryR1qR2wC1rdjf2ISf/exec", "https://script.google.com/a/gapp.fju.edu.tw/macros/s/AKfycbz4F8nvmDHfZDwlAhT_l31cvd8Zu9nduor2VvhDyA/exec"], worksData: { Fullpage: [], Practical: [], Multipage: [] }, cardWidth: 400 } },
                mounted: function() { for (var t = this, a = this.DB_link.length, e = ["Fullpage", "Practical", "Multipage"], i = function(a) { l.a.ajax({ type: "get", url: t.DB_link[a], data: {} }).done((function(i) { t.worksData[e[a]] = i, 2 == a && (l()("html, body").scrollTop(0), t.loading = !1), t.cardWidth = l()(".work-item").outerWidth(!0) })).fail((function() { 2 == a && (t.loading = !1) })) }, s = 0; s < a; s++) i(s) },
                computed: {
                    totalPage: function() {
                        var t = this.page("Fullpage"),
                            a = this.page("Multipage"),
                            e = this.page("Practical");
                        return { Fullpage: t, Multipage: a, Practical: e }
                    },
                    nowPage: function() {
                        var t = Math.round(this.totalPage.Fullpage / 2) + this.wherePage[0],
                            a = Math.round(this.totalPage.Multipage / 2) + this.wherePage[1],
                            e = Math.round(this.totalPage.Practical / 2) + this.wherePage[2];
                        return { Fullpage: t, Multipage: a, Practical: e }
                    }
                },
                methods: {
                    ToLeft: function(t) {
                        this.$set(this.wherePage, t, this.wherePage[t] - 1), this.$set(this.view, t, this.view[t] + 50);
                        var a = document.getElementsByClassName("work");
                        l()(a[t]).css("transition", "1.5s"), l()(a[t]).css("transform", "translateX(" + this.view[t] + "vw)")
                    },
                    ToRight: function(t) {
                        this.$set(this.wherePage, t, this.wherePage[t] + 1), this.$set(this.view, t, this.view[t] - 50);
                        var a = document.getElementsByClassName("work");
                        l()(a[t]).css("transition", "1.5s"), l()(a[t]).css("transform", "translateX(" + this.view[t] + "vw)", "transition", ".3s")
                    },
                    pleaceImg: function(t) { l()(t.target).attr("src", "https://i.imgur.com/BpdGQ21.png") },
                    page: function(t) { return 2 * Math.ceil((this.cardWidth * this.worksData[t].length - document.body.clientWidth) / 2 / (document.body.clientWidth / 2)) + 1 }
                }
            },
            T = j,
            E = (e("c99c"), Object(u["a"])(T, y, P, !1, null, "163f620c", null)),
            S = E.exports,
            A = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "warp" }, [e("div", { staticClass: "banner" }), e("div", { staticClass: "container" }, [e("div", { staticClass: "sex" }), e("h2", [t._v("Fullpage web作品集")]), e("div", { staticClass: "row" }, [e("form", { staticClass: "col-12 col-lg-6" }, [e("h2", [t._v("新增作品集")]), e("label", [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.Data.title, expression: "Data.title" }], attrs: { type: "text", id: "title" }, domProps: { value: t.Data.title }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "title", a.target.value) } } }), e("span", [t._v("網站標題")])]), e("label", [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.Data.webLink, expression: "Data.webLink" }], attrs: { type: "text", id: "webLink" }, domProps: { value: t.Data.webLink }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "webLink", a.target.value) } } }), e("span", [t._v("網站連結")])]), e("label", [e("textarea", { directives: [{ name: "model", rawName: "v-model", value: t.Data.context, expression: "Data.context" }], attrs: { id: "context", cols: "30", rows: "3" }, domProps: { value: t.Data.context }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "context", a.target.value) } } }), e("span", { staticClass: "spical" }, [t._v("簡單描述")])]), e("label", [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.Data.gitLink, expression: "Data.gitLink" }], attrs: { type: "text", id: "gitLink" }, domProps: { value: t.Data.gitLink }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "gitLink", a.target.value) } } }), e("span", [t._v("原始碼連結")])]), e("label", [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.Data.img, expression: "Data.img" }], attrs: { type: "text", id: "img", placeholder: "" }, domProps: { value: t.Data.img }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "img", a.target.value) } } }), e("span", [t._v("圖片src")])]), t._m(0), e("div", { staticClass: "btn-gruop" }, [e("button", { attrs: { id: "updata" }, on: { click: t.updata } }, [t._v("上傳")]), e("router-link", { attrs: { to: "/portfolio" } }, [e("button", { staticClass: "mt-1", attrs: { id: "cancel" } }, [t._v("取消")])])], 1)]), e("div", { staticClass: "list-control col-12 col-lg-6" }, [t.Loading ? e("div", { staticClass: "list-control-inner col-12" }, [e("p", { staticClass: "Loading" }, [t._v("Loading...")])]) : e("div", { staticClass: "list-control-inner col-12 col-lg-10" }, [t._m(1), e("div", { staticClass: "list" }, [e("ul", t._l(t.worksData, (function(a, i) { return e("li", { key: a.id }, [e("div", { staticClass: "web-title", attrs: { title: a.title } }, [t._v(t._s(a.title))]), e("div", { staticClass: "context", attrs: { title: a.context } }, [t._v(t._s(a.context))]), e("div", { staticClass: "control" }, [e("button", { attrs: { id: "del" }, on: { click: function(a) { return t.del(i) } } }, [e("i", { staticClass: "icon icon-trash-empty" })])])]) })), 0)])])])])])])
            },
            $ = [function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("p", [e("span", [e("br")])])
            }, function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "list-header" }, [e("ul", [e("li", [t._v("網站名稱")]), e("li", [t._v("說明")]), e("li", [t._v("操作")])])])
            }],
            M = {
                data: function() { return { Data: { method: "write", id: 0, title: "", context: "", img: "", gitLink: "", webLink: "", name: "" }, worksData: [], Loading: !0 } },
                computed: { screen: function() { return window.screen.width } },
                methods: {
                    cancel: function() { this.Data.title = "", this.Data.context = "", this.Data.img = "", this.Data.gitLink = "", this.Data.webLink = "", this.Data.name = "" },
                    updata: function() {
                        var t = this;
                        this.Loading = !0, l()(".sex > div").addClass("say"), l.a.ajax({ type: "post", data: { method: "write", title: l()("#title").val(), context: l()("#context").val(), img: l()("#img").val(), gitLink: l()("#gitLink").val(), webLink: l()("#webLink").val(), name: "YunTao" }, url: "https://script.google.com/macros/s/AKfycbz32Dm9svOAHCGziwUm9JmLUZEX6srfBz9X90j92E5akBbc875b/exec" }).done((function() { t.get(), setTimeout((function() { l()(".sex > div").removeClass("say") }), 2e3) })).fail((function() { t.cancel(), t.get(), setTimeout((function() { l()(".sex > div").removeClass("say") }), 2e3) }))
                    },
                    del: function(t) {
                        var a = this,
                            e = prompt("請輸入密碼");
                        if (850330 == e) {
                            this.Loading = !0;
                            var i = this.worksData[t].id;
                            l.a.ajax({ type: "get", data: { method: "Delete", id: i }, url: "https://script.google.com/macros/s/AKfycbz32Dm9svOAHCGziwUm9JmLUZEX6srfBz9X90j92E5akBbc875b/exec" }).done((function(t) { a.worksData = t, a.Loading = !1 })).fail((function() {}))
                        } else alert("密碼錯誤")
                    },
                    get: function() {
                        var t = this;
                        this.Loading = !0, l.a.ajax({ type: "get", url: "https://script.google.com/macros/s/AKfycbz32Dm9svOAHCGziwUm9JmLUZEX6srfBz9X90j92E5akBbc875b/exec", data: { method: "read" } }).done((function(a) { t.worksData = a, t.Loading = !1 })).fail((function() {}))
                    }
                },
                mounted: function() { this.get() }
            },
            I = M,
            N = (e("94ad"), Object(u["a"])(I, A, $, !1, null, "6a9c15f5", null)),
            O = N.exports,
            G = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "warp" }, [e("div", { staticClass: "banner" }), e("div", { staticClass: "container" }, [e("div", { staticClass: "sex" }), e("h2", [t._v("Multipage web作品集")]), e("div", { staticClass: "row" }, [e("form", { staticClass: "col-12 col-lg-6" }, [e("h2", [t._v("新增作品集")]), e("label", [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.Data.title, expression: "Data.title" }], attrs: { type: "text", id: "title" }, domProps: { value: t.Data.title }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "title", a.target.value) } } }), e("span", [t._v("網站標題")])]), e("label", [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.Data.webLink, expression: "Data.webLink" }], attrs: { type: "text", id: "webLink" }, domProps: { value: t.Data.webLink }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "webLink", a.target.value) } } }), e("span", [t._v("網站連結")])]), e("label", [e("textarea", { directives: [{ name: "model", rawName: "v-model", value: t.Data.context, expression: "Data.context" }], attrs: { id: "context", cols: "30", rows: "3" }, domProps: { value: t.Data.context }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "context", a.target.value) } } }), e("span", { staticClass: "spical" }, [t._v("簡單描述")])]), e("label", [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.Data.gitLink, expression: "Data.gitLink" }], attrs: { type: "text", id: "gitLink" }, domProps: { value: t.Data.gitLink }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "gitLink", a.target.value) } } }), e("span", [t._v("原始碼連結")])]), e("label", [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.Data.img, expression: "Data.img" }], attrs: { type: "text", id: "img", placeholder: "" }, domProps: { value: t.Data.img }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "img", a.target.value) } } }), e("span", [t._v("圖片src")])]), t._m(0), e("div", { staticClass: "btn-gruop" }, [e("button", { attrs: { id: "updata" }, on: { click: t.updata } }, [t._v("上傳")]), e("router-link", { attrs: { to: "/portfolio" } }, [e("button", { staticClass: "mt-1", attrs: { id: "cancel" } }, [t._v("取消")])])], 1)]), e("div", { staticClass: "list-control col-12 col-lg-6" }, [t.Loading ? e("div", { staticClass: "list-control-inner col-12" }, [e("p", { staticClass: "Loading" }, [t._v("Loading...")])]) : e("div", { staticClass: "list-control-inner col-12 col-lg-10" }, [t._m(1), e("div", { staticClass: "list" }, [e("ul", t._l(t.worksData, (function(a, i) { return e("li", { key: a.id }, [e("div", { staticClass: "web-title", attrs: { title: a.title } }, [t._v(t._s(a.title))]), e("div", { staticClass: "context", attrs: { title: a.context } }, [t._v(t._s(a.context))]), e("div", { staticClass: "control" }, [e("button", { attrs: { id: "del" }, on: { click: function(a) { return t.del(i) } } }, [e("i", { staticClass: "icon icon-trash-empty" })])])]) })), 0)])])])])])])
            },
            F = [function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("p", [e("span", [e("br")])])
            }, function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "list-header" }, [e("ul", [e("li", [t._v("網站名稱")]), e("li", [t._v("說明")]), e("li", [t._v("操作")])])])
            }],
            X = {
                data: function() { return { Data: { method: "write", id: 0, title: "", context: "", img: "", gitLink: "", webLink: "", name: "" }, worksData: [], Loading: !0 } },
                computed: { screen: function() { return window.screen.width } },
                methods: {
                    cancel: function() { this.Data.title = "", this.Data.context = "", this.Data.img = "", this.Data.gitLink = "", this.Data.webLink = "", this.Data.name = "" },
                    updata: function() {
                        var t = this;
                        this.Loading = !0, l()(".sex > div").addClass("say"), l.a.ajax({ type: "post", data: { method: "write", title: l()("#title").val(), context: l()("#context").val(), img: l()("#img").val(), gitLink: l()("#gitLink").val(), webLink: l()("#webLink").val(), name: "YunTao" }, url: "https://script.google.com/a/gapp.fju.edu.tw/macros/s/AKfycbz4F8nvmDHfZDwlAhT_l31cvd8Zu9nduor2VvhDyA/exec" }).done((function() { t.get(), setTimeout((function() { l()(".sex > div").removeClass("say") }), 2e3) })).fail((function() { t.cancel(), t.get(), setTimeout((function() { l()(".sex > div").removeClass("say") }), 2e3) }))
                    },
                    del: function(t) {
                        var a = this,
                            e = prompt("請輸入密碼");
                        if (850330 == e) {
                            this.Loading = !0;
                            var i = this.worksData[t].id;
                            l.a.ajax({ type: "get", data: { method: "Delete", id: i }, url: "https://script.google.com/a/gapp.fju.edu.tw/macros/s/AKfycbz4F8nvmDHfZDwlAhT_l31cvd8Zu9nduor2VvhDyA/exec" }).done((function(t) { a.worksData = t, a.Loading = !1 }))
                        } else alert("密碼錯誤")
                    },
                    get: function() {
                        var t = this;
                        this.Loading = !0, l.a.ajax({ type: "get", url: "https://script.google.com/a/gapp.fju.edu.tw/macros/s/AKfycbz4F8nvmDHfZDwlAhT_l31cvd8Zu9nduor2VvhDyA/exec", data: { method: "read" } }).done((function(a) { t.worksData = a, t.Loading = !1 })).fail((function() {}))
                    }
                },
                mounted: function() { this.get() }
            },
            B = X,
            z = (e("6127"), Object(u["a"])(B, G, F, !1, null, "31bb3e72", null)),
            J = z.exports,
            K = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "warp" }, [e("div", { staticClass: "banner" }), e("div", { staticClass: "container" }, [e("div", { staticClass: "sex" }), e("h2", [t._v("Component Design 元件設計")]), e("div", { staticClass: "row" }, [e("form", { staticClass: "col-12 col-lg-6" }, [e("h2", [t._v("新增作品集")]), e("label", [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.Data.title, expression: "Data.title" }], attrs: { type: "text", id: "title" }, domProps: { value: t.Data.title }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "title", a.target.value) } } }), e("span", [t._v("網站標題")])]), e("label", [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.Data.webLink, expression: "Data.webLink" }], attrs: { type: "text", id: "webLink" }, domProps: { value: t.Data.webLink }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "webLink", a.target.value) } } }), e("span", [t._v("網站連結")])]), e("label", [e("textarea", { directives: [{ name: "model", rawName: "v-model", value: t.Data.context, expression: "Data.context" }], attrs: { id: "context", cols: "30", rows: "3" }, domProps: { value: t.Data.context }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "context", a.target.value) } } }), e("span", { staticClass: "spical" }, [t._v("簡單描述")])]), e("label", [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.Data.gitLink, expression: "Data.gitLink" }], attrs: { type: "text", id: "gitLink" }, domProps: { value: t.Data.gitLink }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "gitLink", a.target.value) } } }), e("span", [t._v("原始碼連結")])]), e("label", [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.Data.img, expression: "Data.img" }], attrs: { type: "text", id: "img", placeholder: "" }, domProps: { value: t.Data.img }, on: { input: function(a) { a.target.composing || t.$set(t.Data, "img", a.target.value) } } }), e("span", [t._v("圖片src")])]), t._m(0), e("div", { staticClass: "btn-gruop" }, [e("button", { attrs: { id: "updata" }, on: { click: t.updata } }, [t._v("上傳")]), e("router-link", { attrs: { to: "/portfolio" } }, [e("button", { staticClass: "mt-1", attrs: { id: "cancel" } }, [t._v("取消")])])], 1)]), e("div", { staticClass: "list-control col-12 col-lg-6" }, [t.Loading ? e("div", { staticClass: "list-control-inner col-12" }, [e("p", { staticClass: "Loading" }, [t._v("Loading...")])]) : e("div", { staticClass: "list-control-inner col-12 col-lg-10" }, [t._m(1), e("div", { staticClass: "list" }, [e("ul", t._l(t.worksData, (function(a, i) { return e("li", { key: a.id }, [e("div", { staticClass: "web-title", attrs: { title: a.title } }, [t._v(t._s(a.title))]), e("div", { staticClass: "context", attrs: { title: a.context } }, [t._v(t._s(a.context))]), e("div", { staticClass: "control" }, [e("button", { attrs: { id: "del" }, on: { click: function(a) { return t.del(i) } } }, [e("i", { staticClass: "icon icon-trash-empty" })])])]) })), 0)])])])])])])
            },
            R = [function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("p", [e("span", [e("br")])])
            }, function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "list-header" }, [e("ul", [e("li", [t._v("網站名稱")]), e("li", [t._v("說明")]), e("li", [t._v("操作")])])])
            }],
            Y = {
                data: function() { return { Data: { method: "write", id: 0, title: "", context: "", img: "", gitLink: "", webLink: "", name: "" }, worksData: [], Loading: !0 } },
                computed: { screen: function() { return window.screen.width } },
                methods: {
                    cancel: function() { this.Data.title = "", this.Data.context = "", this.Data.img = "", this.Data.gitLink = "", this.Data.webLink = "", this.Data.name = "" },
                    updata: function() {
                        var t = this;
                        this.Loading = !0, l()(".sex > div").addClass("say"), l.a.ajax({ type: "post", data: { method: "write", title: l()("#title").val(), context: l()("#context").val(), img: l()("#img").val(), gitLink: l()("#gitLink").val(), webLink: l()("#webLink").val(), name: "YunTao" }, url: "https://script.google.com/a/gapp.fju.edu.tw/macros/s/AKfycbyeG3c8vQEPB9N_Xcjx_-ryR1qR2wC1rdjf2ISf/exec" }).done((function() { t.get(), setTimeout((function() { l()(".sex > div").removeClass("say") }), 2e3) })).fail((function() { t.cancel(), t.get(), setTimeout((function() { l()(".sex > div").removeClass("say") }), 2e3) }))
                    },
                    del: function(t) {
                        var a = this,
                            e = prompt("請輸入密碼");
                        if (850330 == e) {
                            this.Loading = !0;
                            var i = this.worksData[t].id;
                            l.a.ajax({ type: "get", data: { method: "Delete", id: i }, url: "https://script.google.com/a/gapp.fju.edu.tw/macros/s/AKfycbyeG3c8vQEPB9N_Xcjx_-ryR1qR2wC1rdjf2ISf/exec" }).done((function(t) { a.worksData = t, a.Loading = !1 })).fail((function() {}))
                        } else alert("密碼錯誤")
                    },
                    get: function() {
                        var t = this;
                        this.Loading = !0, l.a.ajax({ type: "get", url: "https://script.google.com/a/gapp.fju.edu.tw/macros/s/AKfycbyeG3c8vQEPB9N_Xcjx_-ryR1qR2wC1rdjf2ISf/exec", data: { method: "read" } }).done((function(a) { t.worksData = a, t.Loading = !1 })).fail((function() {}))
                    }
                },
                mounted: function() { this.get() }
            },
            V = Y,
            Z = (e("b3cc"), Object(u["a"])(V, K, R, !1, null, "f0b3cade", null)),
            U = Z.exports;
        i["a"].use(p["a"]);
        var W = new p["a"]({ routes: [{ path: "/", name: "index", component: w }, { path: "/portfolio", name: "Works", component: S }, { path: "/works/updataFullpage", name: "updataFullpage", component: O }, { path: "/works/updataPractical", name: "updataPractical", component: J }, { path: "/works/updataMultipage", name: "updataMultipage", component: U }, { path: "/message", name: "Message", component: L }] }),
            H = e("b3b5");
        i["a"].config.productionTip = !1, i["a"].use(H["a"]), new i["a"]({ router: W, render: function(t) { return t(v) } }).$mount("#app")
    },
    "5c0b": function(t, a, e) {
        "use strict";
        var i = e("e332"),
            s = e.n(i);
        s.a
    },
    6127: function(t, a, e) {
        "use strict";
        var i = e("0a21"),
            s = e.n(i);
        s.a
    },
    "6d02": function(t, a, e) {
        "use strict";
        var i = e("3e83"),
            s = e.n(i);
        s.a
    },
    "855e": function(t, a, e) { t.exports = e.p + "resume/img/CSS3_and_HTM.3e5b9f74.png" },
    "94ad": function(t, a, e) {
        "use strict";
        var i = e("2d86"),
            s = e.n(i);
        s.a
    },
    a198: function(t, a, e) { t.exports = e.p + "resume/img/03.97e6948a.png" },
    aab7: function(t, a, e) { t.exports = e.p + "resume/img/maple.e5a64f63.png" },
    b3cc: function(t, a, e) {
        "use strict";
        var i = e("2550"),
            s = e.n(i);
        s.a
    },
    b669: function(t, a, e) {
        "use strict";
        var i = e("5406"),
            s = e.n(i);
        s.a
    },
    c99c: function(t, a, e) {
        "use strict";
        var i = e("0713"),
            s = e.n(i);
        s.a
    },
    cf05: function(t, a, e) { t.exports = e.p + "resume/img/logo.c1dc63d6.png" },
    d235: function(t, a, e) { t.exports = e.p + "resume/img/JS.184596af.png" },
    e332: function(t, a, e) {}
});
//# sourceMappingURL=app.276ae9ae.js.map