(function(t) {
    function e(e) {
        for (var s, i, l = e[0], r = e[1], c = e[2], u = 0, v = []; u < l.length; u++) i = l[u], Object.prototype.hasOwnProperty.call(n, i) && n[i] && v.push(n[i][0]), n[i] = 0;
        for (s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
        d && d(e);
        while (v.length) v.shift()();
        return o.push.apply(o, c || []), a()
    }

    function a() {
        for (var t, e = 0; e < o.length; e++) {
            for (var a = o[e], s = !0, i = 1; i < a.length; i++) {
                var l = a[i];
                0 !== n[l] && (s = !1)
            }
            s && (o.splice(e--, 1), t = r(r.s = a[0]))
        }
        return t
    }
    var s = {},
        i = { app: 0 },
        n = { app: 0 },
        o = [];

    function l(t) { return r.p + "js/" + ({ about: "about" }[t] || t) + "." + { about: "847866ee", "chunk-0ef41e6b": "5104362e", "chunk-5887f3e4": "2aeed189", "chunk-f8afc8c4": "10e353fa" }[t] + ".js" }

    function r(e) { if (s[e]) return s[e].exports; var a = s[e] = { i: e, l: !1, exports: {} }; return t[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports }
    r.e = function(t) {
        var e = [],
            a = { about: 1, "chunk-0ef41e6b": 1, "chunk-5887f3e4": 1, "chunk-f8afc8c4": 1 };
        i[t] ? e.push(i[t]) : 0 !== i[t] && a[t] && e.push(i[t] = new Promise((function(e, a) {
            for (var s = "css/" + ({ about: "about" }[t] || t) + "." + { about: "d1f69b2b", "chunk-0ef41e6b": "7792076f", "chunk-5887f3e4": "ff587140", "chunk-f8afc8c4": "b2f2bc8b" }[t] + ".css", n = r.p + s, o = document.getElementsByTagName("link"), l = 0; l < o.length; l++) {
                var c = o[l],
                    u = c.getAttribute("data-href") || c.getAttribute("href");
                if ("stylesheet" === c.rel && (u === s || u === n)) return e()
            }
            var v = document.getElementsByTagName("style");
            for (l = 0; l < v.length; l++) { c = v[l], u = c.getAttribute("data-href"); if (u === s || u === n) return e() }
            var d = document.createElement("link");
            d.rel = "stylesheet", d.type = "text/css", d.onload = e, d.onerror = function(e) {
                var s = e && e.target && e.target.src || n,
                    o = new Error("Loading CSS chunk " + t + " failed.\n(" + s + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = s, delete i[t], d.parentNode.removeChild(d), a(o)
            }, d.href = n;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(d)
        })).then((function() { i[t] = 0 })));
        var s = n[t];
        if (0 !== s)
            if (s) e.push(s[2]);
            else {
                var o = new Promise((function(e, a) { s = n[t] = [e, a] }));
                e.push(s[2] = o);
                var c, u = document.createElement("script");
                u.charset = "utf-8", u.timeout = 120, r.nc && u.setAttribute("nonce", r.nc), u.src = l(t);
                var v = new Error;
                c = function(e) {
                    u.onerror = u.onload = null, clearTimeout(d);
                    var a = n[t];
                    if (0 !== a) {
                        if (a) {
                            var s = e && ("load" === e.type ? "missing" : e.type),
                                i = e && e.target && e.target.src;
                            v.message = "Loading chunk " + t + " failed.\n(" + s + ": " + i + ")", v.name = "ChunkLoadError", v.type = s, v.request = i, a[1](v)
                        }
                        n[t] = void 0
                    }
                };
                var d = setTimeout((function() { c({ type: "timeout", target: u }) }), 12e4);
                u.onerror = u.onload = c, document.head.appendChild(u)
            }
        return Promise.all(e)
    }, r.m = t, r.c = s, r.d = function(t, e, a) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a }) }, r.r = function(t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var s in t) r.d(a, s, function(e) { return t[e] }.bind(null, s));
        return a
    }, r.n = function(t) { var e = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return r.d(e, "a", e), e }, r.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "/", r.oe = function(t) { throw console.error(t), t };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = c.push.bind(c);
    c.push = e, c = c.slice();
    for (var v = 0; v < c.length; v++) e(c[v]);
    var d = u;
    o.push([0, "chunk-vendors"]), a()
})({
    0: function(t, e, a) { t.exports = a("56d7") },
    "0f03": function(t, e, a) { t.exports = a.p + "./img/05.285e03a0.png" },
    "10cf": function(t, e, a) { t.exports = a.p + "./img/02.9f706046.png" },
    "204f": function(t, e, a) { t.exports = a.p + "./img/04.eb08f744.png" },
    "285b": function(t, e, a) {},
    "30a7": function(t, e, a) {
        "use strict";
        var s = a("285b"),
            i = a.n(s);
        i.a
    },
    "37be": function(t, e, a) { t.exports = a.p + "./img/大頭照2.e879890c.jpg" },
    "3e83": function(t, e, a) {},
    5334: function(t, e, a) { t.exports = a.p + "./img/01.abb7eec9.png" },
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        a("cadf"), a("551c"), a("f751"), a("097d");
        var s = a("2b0e"),
            i = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { attrs: { id: "app" } }, [a("header", { staticClass: "header-index js-scroll " }, [a("div", { staticClass: "container" }, [a("div", { staticClass: "navbar" }, [t._m(0), a("nav", { staticClass: "nav" }, [a("ul", [a("li", [a("router-link", { staticClass: "nav-item", attrs: { to: "/" } }, [t._v("自我簡介")])], 1), a("li", [a("router-link", { staticClass: "nav-item", attrs: { to: "/portfolio" } }, [t._v("作品集")])], 1), a("li", [a("router-link", { staticClass: "nav-item", attrs: { to: "/message" } }, [t._v("站內信")])], 1)])]), t._m(1)])]), a("div", { staticClass: "popup-menu" }, [a("div", { staticClass: "container-fluid" }, [a("div", { staticClass: "mark col-12" }), a("nav", { staticClass: "nav col-8 " }, [a("h4", [t._v("menu")]), a("ul", [a("li", [a("router-link", { staticClass: "nav-item", attrs: { to: "/" } }, [t._v("自我簡介")])], 1), a("li", [a("router-link", { staticClass: "nav-item", attrs: { to: "/portfolio" } }, [t._v("作品集")])], 1), a("li", [a("router-link", { staticClass: "nav-item", attrs: { to: "/message" } }, [t._v("站內信")])], 1)])])])])]), a("h1", [t._v("林耘滔個人履歷網站 YunTao Lin")]), a("router-view", { staticClass: "main" }), t._m(2)], 1)
            },
            n = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "social-bar" }, [a("a", { staticClass: "icon-btn", attrs: { href: "https://www.facebook.com/yuntao.lin", title: "Facebook" } }, [a("i", { staticClass: "icon icon-facebook-official" })]), a("a", { staticClass: "icon-btn", attrs: { href: "https://www.instagram.com/i456919yuntao/?hl=zh-tw", title: "Instagram" } }, [a("i", { staticClass: "icon icon-instagram" })]), a("a", { staticClass: "icon-btn", attrs: { href: "https://github.com/YunTaoLin", title: "Github" } }, [a("i", { staticClass: "icon icon-github" })])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("a", { staticClass: "menu-toggle", attrs: { href: "javascript:" } }, [a("span"), a("span"), a("span")])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("footer", [a("div", { staticClass: "container" }, [a("p", { staticClass: "copyright" }, [t._v("copyright © YunTao.Lin")])])])
            }],
            o = a("1157"),
            l = a.n(o),
            r = {
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
            c = r,
            u = (a("5c0b"), a("2877")),
            v = Object(u["a"])(c, i, n, !1, null, null, null),
            d = v.exports,
            p = a("8c4f"),
            m = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", { staticClass: "index" }, [s("div", { staticClass: "background" }), s("div", { staticClass: "wrap" }, [s("div", { staticClass: "mainArea" }, [s("section", { staticClass: "about" }, [s("div", { staticClass: "container" }, [s("img", { directives: [{ name: "parallax", rawName: "v-parallax", value: .5, expression: "0.5" }], staticClass: "d-img d-01 wow fadeIn", attrs: { src: a("5334"), alt: "裝飾圖片" } }), s("img", { directives: [{ name: "parallax", rawName: "v-parallax", value: .5, expression: "0.5" }], staticClass: "d-img d-02 wow fadeIn", attrs: { src: a("0f03"), alt: "裝飾圖片" } }), t._m(0)])]), s("section", { staticClass: "skill" }, [s("img", { directives: [{ name: "parallax", rawName: "v-parallax", value: .5, expression: "0.5" }], staticClass: "d-img d-03 wow fadeIn", attrs: { src: a("aab7"), alt: "裝飾圖片" } }), t._m(1)]), s("section", { staticClass: "works" }, [s("div", { staticClass: "container works-inner wow slideInUp" }, [s("div", { staticClass: "works-context" }, [t._m(2), s("div", { staticClass: "btn-group" }, [s("router-link", { staticClass: "workLink", attrs: { to: "/portfolio" } }, [t._v("前往作品集")]), t._m(3)], 1)])])])]), s("section", { staticClass: "experience  lean_bg-top lean_bg-bottom", attrs: { id: "experience" } }, [s("img", { directives: [{ name: "parallax", rawName: "v-parallax", value: .5, expression: "0.5" }], staticClass: "d-img d-04 wow fadeIn", attrs: { src: a("204f"), alt: "裝飾圖片" } }), s("img", { directives: [{ name: "parallax", rawName: "v-parallax", value: .5, expression: "0.5" }], staticClass: "d-img d-05 wow fadeIn", attrs: { src: a("10cf"), alt: "裝飾圖片" } }), s("img", { directives: [{ name: "parallax", rawName: "v-parallax", value: .5, expression: "0.5" }], staticClass: "d-img d-06 wow fadeIn", attrs: { src: a("a198"), alt: "裝飾圖片" } }), t._m(4)]), s("div", { staticClass: "fixed-btn-group" }, [s("router-link", { attrs: { to: "/message" } }, [s("div", { staticClass: "fixed-btn", attrs: { id: "contact" } }, [s("span", [s("i", { staticClass: "icon icon-mail" })]), s("p", [t._v("站內信")])])]), s("div", { staticClass: "fixed-btn", attrs: { id: "toTop" }, on: { click: t.backToTop } }, [s("span", [t._v("︿")]), s("p", [t._v("Top")])])], 1)])])
            },
            f = [function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", { staticClass: "row" }, [s("div", { staticClass: "about_context col-lg-5 col-12 order-lg-0 order-1 wow bounceInLeft" }, [s("h2", [t._v("About Me "), s("br"), s("span", {}, [t._v("你好，我是耘滔 YunTao")])]), s("p", [t._v("畢業於輔仁大學心理學系。"), s("br"), t._v("\n                  曾經的夢想是成為一位UX研究員，"), s("br"), t._v("\n                  後來因緣際會下接觸了前端技術，"), s("br"), t._v("\n                  發現自己在將網站實做出來的過程中，"), s("br"), t._v("\n                  可以獲得極大的成就感，"), s("br"), t._v("\n                  從此便對程式的世界產生了豐富的好奇心。"), s("br"), s("br"), t._v("\n                  期許未來能夠使用自身的經驗解決各種問題。\n                ")])]), s("div", { staticClass: "col-lg-5 col-12 " }, [s("div", { staticClass: "about_pic wow flipInY " }, [s("img", { attrs: { src: a("37be"), alt: "我的大頭照" } }), s("div", { staticClass: "say wow fadeIn", attrs: { "data-wow-delay": "2s" } }, [t._v("I'm YunTao !")])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", { staticClass: "container" }, [s("h2", [t._v("專業技能")]), s("div", { staticClass: "row" }, [s("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [s("div", { staticClass: "skill-html " }, [s("h3", [s("div", { staticClass: "pic" }, [s("img", { attrs: { src: a("855e"), alt: "HTML、CSS圖片" } })]), t._v("\n                       HTML、CSS\n                    ")]), s("ul", [s("li", [t._v("熟悉HTML5與CSS3，"), s("br"), t._v("建構符合W3C規範之網站，優化SEO。")]), s("li", [t._v("能夠完全手刻RWD切版，"), s("br"), t._v("能依照使用者情境設計響應式功能。")]), s("li", [t._v("以模組化方式建構CSS (SCSS)，"), s("br"), t._v("並遵循OOCSS或BEM命名規則。")]), s("li", [t._v("CSS preprocessor：SCSS")]), s("li", [t._v("CSS frameexperience：Bootstrap、Pure UI、")])])])]), s("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [s("div", { staticClass: "skill-js " }, [s("h3", [s("div", { staticClass: "pic" }, [s("img", { attrs: { src: a("d235"), alt: "Javascript圖片" } })]), t._v("\n                     Javascript\n                    ")]), s("ul", [s("li", [t._v("熟悉ES6語法，以及JS各項特性與原理。（eg. prototype、closure、scope）")]), s("li", [t._v("能夠使用原生JS實作出Jquery的各種動畫效果。")]), s("li", [t._v("熟悉Ajax串接後端API。")]), s("li", [t._v("有使用過Typescript的經驗。")]), s("li", [t._v("node.js搭配Express框架(學習中)")])])])]), s("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [s("div", { staticClass: "skill-vue " }, [s("h3", [s("div", { staticClass: "pic" }, [s("img", { attrs: { src: a("cf05"), alt: "Vue.js圖片" } })]), t._v("\n                      Vue.js\n                    ")]), s("ul", [s("li", [t._v("熟悉Vue的各種基礎功能，"), s("br"), t._v(" 以及使用Vue Devtools進行debug。")]), s("li", [t._v("了解Vue生命週期，以及使用時機。")]), s("li", [t._v("使用Vue router開發SPA網站。")]), s("li", [t._v("使用Vuex進行資料狀態管理。")]), s("li", [t._v("能夠開設Vue Cli專案進行開發。")]), s("li", [t._v("Nuxt.js（學習中）")])])])]), s("div", { staticClass: "col-lg-6 col-md-6 col-12" }, [s("div", { staticClass: "skill-dev wow slideInLeft" }, [s("h3", [t._v("\n                      開發工具\n                    ")]), s("ul", [s("li", [t._v("編輯器：VSCode、SublimeText3")]), s("li", [t._v("NPM套件管理。")]), s("li", [t._v("Git版本控管。")]), s("li", [t._v("Webpack自動化打包。")]), s("li", [t._v("Postman與Json-serve模擬RESTful API。")]), s("li", [t._v("有自己整理的Jquery常用插件清單。")]), s("li", [t._v("Google Search Console測試SEO成效。")]), s("li", [t._v("接觸過AWS平台")])])])]), s("div", { staticClass: "col-md-12 col-lg-6" }, [s("div", { staticClass: "skill-uiux wow slideInRight" }, [s("h3", [t._v("\n                      UIUX相關\n                    ")]), s("ul", [s("li", [t._v("大學期間曾在巨匠電腦進修平面設計。")]), s("li", [t._v("熟悉Adobe PS/AI/XD等軟體的基本操作。作品連結：\n                          "), s("a", { attrs: { target: "_blank", href: "https://drive.google.com/drive/folders/1nvwzZhNg07VXYGoW2Ly_PnikI3dHZoiN?usp=sharing" } }, [t._v("點我")])]), s("li", [t._v("清楚設計流程概念。eg. Wireframe、Prototype")]), s("li", [t._v("大學曾修過使用者經驗專題課程，該作品獲得班級小組第一名")]), s("li", [t._v("懂得使用Material Design提供的guideline優化UX設計。")])])]), s("div", { staticClass: "skill-other wow slideInRight" }, [s("h3", [t._v("\n                      其他技能\n                    ")]), s("ul", [s("li", [t._v("接觸過的程式語言：C++、Python、PHP。")]), s("li", [t._v("會使用基礎MySQL語法。")]), s("li", [t._v("Google Sheet：一年的功能性報表製作經驗。")]), s("li", [t._v("Google App Script（使用JS操作Google Drive)"), s("br"), s("ol", [s("li", [t._v("簡易API設計，搭配Google Sheet製作簡易資料庫。\n                              "), s("a", { attrs: { target: "_blank", href: "https://script.google.com/d/1labeaqLDyoxF7pxieAsqDtdJMCZwZqQ24DYMNXOCKwT--ngZg2n2og8K/edit?usp=sharing" } }, [t._v("點我")]), t._v("\n                              。\n                            ")]), s("li", [t._v("\n                               實習期間獨自完成能夠批量新增、修改試算表的應用程式，協助解決同事間繁瑣重複性高的工作。\n                              "), s("a", { attrs: { target: "_blank", href: "https://script.google.com/macros/s/AKfycbxVy3B3rDhOtD9QKr1fTOJWYfv9kCcGa-YAXaLXrK1RqNWgmGEP/exec" } }, [t._v("點我")]), t._v("\n                              。\n                            ")])])])])])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("h2", [t._v("作品集 "), a("span", [t._v("Portfolio")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("a", { staticClass: "gitLink", attrs: { href: "https://github.com/YunTaoLin?tab=repositories" } }, [t._v("Github"), a("i", { staticClass: "icon icon-github" })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "container" }, [a("h2", { staticClass: "subtitle wow bounceInUp " }, [t._v("其他經歷")]), a("div", { staticClass: "experience_list" }, [a("div", { staticClass: "experience_items wow bounceInLeft", attrs: { "data-wow-duration": "2s", "data-wow-delay": "0.5s" } }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "col-11 col-md-6 order-md-last" }, [a("div", { staticClass: "imgbox" }, [a("div", { staticClass: "imgbox_inner" }, [a("div", { staticClass: "img" })])])]), a("div", { staticClass: "col-11 col-lg-4 offset-lg-1 col-md-5 " }, [a("div", { staticClass: "experience_item_content--right " }, [a("h3", { staticClass: "experience_item_title", attrs: { id: "flow" } }, [t._v("若水國際-AI數據服務部")]), a("p", { staticClass: "experience_item_info" }, [t._v("2018/11月-2019/6月 擔任專案實習生")]), a("ol", [a("li", [t._v("參與18項AI人工智慧標註專案。")]), a("li", [t._v("依專案需求整理出標註原則以及執行流程。")]), a("li", [t._v("製作抽檢相關各式動態報表，檢視每日標註良率。")]), a("li", [t._v("製作標註原則相關教材、心智圖。")]), a("li", [t._v("協助標註師團隊各項行政相關事宜。")]), a("li", [t._v("統計分析標註結果與成效。")]), a("li", [t._v("與夥伴共同規劃抽檢師評核標準。")])])])])])]), a("div", { staticClass: "experience_items wow bounceInRight", attrs: { "data-wow-duration": "2s", "data-wow-delay": "0.5s" } }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "col-11 col-md-6" }, [a("div", { staticClass: "imgbox" }, [a("div", { staticClass: "imgbox_inner" }, [a("div", { staticClass: "img" })])])]), a("div", { staticClass: "col-11 col-md-5 col-lg-4 " }, [a("div", { staticClass: "experience_item_content--left " }, [a("h3", { staticClass: "experience_item_title" }, [t._v("JMOSA學生發展委員會")]), a("p", { staticClass: "experience_item_info" }, [t._v("2017/9月-2018年/2月 - 擔任學生代表共融營總召")]), a("ol", [a("li", [t._v("舉辦規模60人的營隊活動。")]), a("li", [t._v("為期半年的籌備期擔任會議主席。")]), a("li", [t._v("規劃各職位進度甘特圖，以及安排集訓期流程。")]), a("li", [t._v("撰寫企劃書，與夥伴共同籌劃9項課程教案。")]), a("li", [t._v("與場地、系院、商家進行溝通，調整營期內容。")]), a("li", [t._v("完成結案報告書，並完成經費核銷。")]), a("li", [t._v("學會溝通與協調，及團隊間如何有效率地合作。")])])])])])]), a("div", { staticClass: "experience_items wow bounceInLeft", attrs: { "data-wow-duration": "2s", "data-wow-delay": "0.5s" } }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "col-11 col-md-6 order-md-last" }, [a("div", { staticClass: "imgbox" }, [a("div", { staticClass: "imgbox_inner" }, [a("div", { staticClass: "img" })])])]), a("div", { staticClass: "col-11 col-lg-4 offset-lg-1 col-md-5 " }, [a("div", { staticClass: "experience_item_content--right" }, [a("h3", { staticClass: "experience_item_title" }, [t._v("輔大心理系學會")]), a("p", { staticClass: "experience_item_info" }, [t._v("2016/9月-2017/6月 - 擔任公關長 ")]), a("ol", [a("li", [t._v("管理學會粉絲專頁。 "), a("a", { attrs: { href: "https://goo.gl/7iABwk" } }, [t._v("點我")])]), a("li", [t._v("粉絲專頁追蹤數，由600多位(2016/9月)提升至800多位(2017/7月底)")]), a("li", [t._v("撰寫學年間，系上活動宣傳文案、活動倒數文。")]), a("li", [t._v("舉辦聖誕節抽獎活動，達成2.4K的觸及量。")])])])])])]), a("div", { staticClass: "experience_items wow bounceInRight", attrs: { "data-wow-duration": "2s", "data-wow-delay": "0.5s" } }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "col-11 col-md-6 " }, [a("div", { staticClass: "imgbox" }, [a("div", { staticClass: "imgbox_inner" }, [a("div", { staticClass: "img" })])])]), a("div", { staticClass: "col-11 col-md-5 col-lg-4 " }, [a("div", { staticClass: "experience_item_content--left" }, [a("h3", { staticClass: "experience_item_title" }, [t._v("勵德青少年服務隊")]), a("p", { staticClass: "experience_item_info" }, [t._v("2016/9月-2017/6月 - 擔任活動長")]), a("ol", [a("li", [t._v("每學期的寒暑假會到誠正矯治學校舉辦為期一週的服務營隊。")]), a("li", [t._v("參與過4次營隊服務，3次學期間平日服務。(營隊總人數含學員約90人)")]), a("li", [t._v("規劃營隊期間的各種活動教案、以及籌備期間舉辦社團裡的共融活動。")]), a("li", [t._v("多次撰寫舞台劇劇本、擔任主持人。")]), a("li", [t._v("常需要規劃活動，因而學習到如何發揮創意，以及各種活動主持的技巧。")])])])])])])])])
            }],
            g = { name: "home", data: function() { return {} }, methods: { backToTop: function() { l()("html, body").animate({ scrollTop: 0 }, 1e3) } }, created: function() { l()("html, body").scrollTop(0) }, mounted: function() { l()(window).scrollTop() < 1e3 && l()(".fixed-btn-group").hide(), l()(window).on("scroll", (function() { l()(window).scrollTop() >= 1e3 && l()(".fixed-btn-group").fadeIn(500), l()(window).scrollTop() < 1e3 && l()(".fixed-btn-group").fadeOut(500) })) }, destroyed: function() { l()(window).off("scroll") } },
            _ = g,
            h = (a("30a7"), Object(u["a"])(_, m, f, !1, null, "425aa1f0", null)),
            C = h.exports,
            b = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "wrap" }, [a("div", { staticClass: "banner" }, [a("div", { staticClass: "container-fluid" }, [a("div", { staticClass: "col-xl-6 offset-xl-1 col-lg-8" }, [a("div", { staticClass: "form-area wow fadeInUp" }, [t.success ? a("div", { staticClass: "success" }, [t._m(0), a("button", { on: { click: function(e) { t.success = !1 } } }, [t._v("＜發送其他訊息＞")])]) : a("form", [a("h2", [t._v("站內信")]), a("label", [a("span", [t._v("我的姓名：")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: t.name, expression: "name" }], attrs: { type: "text", placeholder: "Your Name" }, domProps: { value: t.name }, on: { input: function(e) { e.target.composing || (t.name = e.target.value) } } })]), a("label", [a("span", [t._v("我的信箱：")]), a("input", { directives: [{ name: "model", rawName: "v-model", value: t.email, expression: "email" }], attrs: { type: "email", placeholder: "Your Email" }, domProps: { value: t.email }, on: { input: function(e) { e.target.composing || (t.email = e.target.value) } } })]), a("label", [a("span", [t._v("我的留言：")]), a("textarea", { directives: [{ name: "model", rawName: "v-model", value: t.message, expression: "message" }], attrs: { cols: "30", rows: "7", placeholder: "Your Message" }, domProps: { value: t.message }, on: { input: function(e) { e.target.composing || (t.message = e.target.value) } } })]), a("button", { attrs: { id: "msg-btn" }, on: { click: t.updataMessage } }, [t._v(t._s(t.submit ? "上傳中..." : "送出"))])])])])])])])
            },
            w = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("h2", [a("i", { staticClass: "icon icon-mail" }), t._v("\n                                    站內信已送出！\n                                ")])
            }],
            x = (a("7f7f"), {
                data: function() { return { name: "", email: "", message: "", submit: !1, success: !1 } },
                methods: {
                    clear: function() { this.name = "", this.email = "", this.message = "" },
                    updataMessage: function() {
                        var t = this;
                        this.submit = !0, l.a.ajax({ type: "post", data: { name: this.name, email: this.email, message: this.message }, url: "https://script.google.com/macros/s/AKfycbwpjzFqOY8QwZSb3F9GJ_VX5euGVDHaVrcc24oqb4bqez4lJnE/exec" }).done((function() { t.clear(), t.submit = !1, t.success = !0 })).fail((function(e) { t.clear(), t.submit = !1, t.success = !0 }))
                    }
                },
                created: function() { l()("html, body").scrollTop(0) }
            }),
            k = x,
            y = (a("6d02"), Object(u["a"])(k, b, w, !1, null, "7ec35750", null)),
            S = y.exports;
        s["a"].use(p["a"]);
        var T = new p["a"]({ routes: [{ path: "/", name: "index", component: C }, { path: "/portfolio", name: "Works", component: function() { return a.e("about").then(a.bind(null, "1822")) } }, { path: "/works/updataFullpage", name: "updataFullpage", component: function() { return a.e("chunk-f8afc8c4").then(a.bind(null, "a27c")) } }, { path: "/works/updataPractical", name: "updataPractical", component: function() { return a.e("chunk-0ef41e6b").then(a.bind(null, "4a97")) } }, { path: "/works/updataMultipage", name: "updataMultipage", component: function() { return a.e("chunk-5887f3e4").then(a.bind(null, "3d82")) } }, { path: "/message", name: "Message", component: S }] }),
            E = a("b3b5");
        s["a"].config.productionTip = !1, s["a"].use(E["a"]), new s["a"]({ router: T, render: function(t) { return t(d) } }).$mount("#app")
    },
    "5c0b": function(t, e, a) {
        "use strict";
        var s = a("e332"),
            i = a.n(s);
        i.a
    },
    "6d02": function(t, e, a) {
        "use strict";
        var s = a("3e83"),
            i = a.n(s);
        i.a
    },
    "855e": function(t, e, a) { t.exports = a.p + "./img/CSS3_and_HTM.3e5b9f74.png" },
    a198: function(t, e, a) { t.exports = a.p + "./img/03.97e6948a.png" },
    aab7: function(t, e, a) { t.exports = a.p + "./img/maple.e5a64f63.png" },
    cf05: function(t, e, a) { t.exports = a.p + "./img/logo.c1dc63d6.png" },
    d235: function(t, e, a) { t.exports = a.p + "./img/JS.184596af.png" },
    e332: function(t, e, a) {}
});
//# sourceMappingURL=app.a238b545.js.map