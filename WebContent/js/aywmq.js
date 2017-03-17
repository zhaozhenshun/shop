/*aywmq
 26-12-2014 */
!
function(a, b) {
    var c, d = a._AYWM;
    d && "version" in d ? c = d.gpa: (c = function() {
        var a = ( + new Date).toString(36),
        b = Math.random().toString(36).substring(2, 7);
        return a + b
    } (), d = a._AYWM = {
        version: "1.01",
        gpa: c,
        collector: {}
    });
    var e = a[b] ? a[b] : a[b] = [],
    f = Array.prototype,
    g = Object.prototype,
    h = (Function.prototype, g.toString),
    i = g.hasOwnProperty,
    j = {},
    k = {
        nativeKeys: Object.keys
    };
    k.slice = f.slice,
    k.isArray = Array.isArray ||
    function(a) {
        return "[object Array]" == h.call(a)
    },
    k.has = function(a, b) {
        return i.call(a, b)
    },
    k.isObject = function(a) {
        return a === Object(a)
    },
    k.isFunction = function(a) {
        return "function" == typeof a
    };
    var l = function(a) {
        return k.isFunction(a) ? a: function(b) {
            return b[a]
        }
    };
    k.each = function(a, b, c) {
        if (null != a) if (f.forEach && a.forEach === f.forEach) a.forEach(b, c);
        else if (a.length === +a.length) {
            for (var d = 0,
            e = a.length; e > d; d++) if (b.call(c, a[d], d, a) === j) return
        } else for (var g = k.keys(a), d = 0, e = g.length; e > d; d++) if (b.call(c, a[g[d]], g[d], a) === j) return
    },
    k.keys = k.nativeKeys ||
    function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [];
        for (var c in a) k.has(a, c) && b.push(c);
        return b
    },
    k.sortedIndex = function(a, b, c, d) {
        c = null == c ? k.identity: l(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f;) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h
        }
        return f
    },
    k.indexOf = function(a, b, c) {
        if (null == a) return - 1;
        var d = 0,
        e = a.length;
        if (c) {
            if ("number" != typeof c) return d = k.sortedIndex(a, b),
            a[d] === b ? d: -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        if (f.indexOf && a.indexOf === f.indexOf) return a.indexOf(b, c);
        for (; e > d; d++) if (a[d] === b) return d;
        return - 1
    },
    k.extend = function(a) {
        return k.each(k.slice.call(arguments, 1),
        function(b) {
            if (b) for (var c in b) a[c] = b[c]
        }),
        a
    },
    k.clone = function(a) {
        return k.isObject(a) ? k.isArray(a) ? a.slice() : k.extend({},
        a) : a
    },
    k.keys = Object.keys ||
    function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [];
        for (var c in a) k.has(a, c) && b.push(c);
        return b
    },
    k.values = function(a) {
        for (var b = k.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
        return d
    },
    k.encodeParams = function(a) {
        return encodeURIComponent(a)
    },
    k.trim = function(a) {
        return a.replace(/(^\s*)|(\s*$)/g, "")
    };
    var m, n = {
        getItem: function(a) {
            return a ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null: null
        },
        setItem: function(a, b, c, d, e, f) {
            if (!a || /^(?:expires|max\-age|path|domain|secure)$/i.test(a)) return ! 1;
            var g = "";
            if (c) switch (c.constructor) {
            case Number:
                g = 1 / 0 === c ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT": "; max-age=" + c;
                break;
            case String:
                g = "; expires=" + c;
                break;
            case Date:
                g = "; expires=" + c.toUTCString()
            }
            return document.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + g + (e ? "; domain=" + e: "") + (d ? "; path=" + d: "") + (f ? "; secure": ""),
            !0
        },
        removeItem: function(a, b, c) {
            return this.hasItem(a) ? (document.cookie = encodeURIComponent(a) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (c ? "; domain=" + c: "") + (b ? "; path=" + b: ""), !0) : !1
        },
        hasItem: function(a) {
            return a ? new RegExp("(?:^|;\\s*)" + encodeURIComponent(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie) : !1
        },
        keys: function() {
            for (var a = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), b = a.length, c = 0; b > c; c++) a[c] = decodeURIComponent(a[c]);
            return a
        },
        set: function(a, b, c, d, e, f) {
            var g = encodeURIComponent(a) + "=" + encodeURIComponent(b);
            c instanceof Date && (g += "; expires=" + c.toGMTString()),
            d && (g += "; path=" + d),
            e && (g += "; domain=" + e),
            f && (g += "; secure"),
            document.cookie = g
        }
    },
    o = function() {
        return /(iphone|ios|android|mini|mobile|mobi|Nokia|Symbian|iPod|iPad|Windows\s+Phone|MQQBrowser|wp7|wp8|UCBrowser7|UCWEB|360\s+Aphone\s+Browser)/i.test(navigator.userAgent) ? !0 : !1
    } (),
    p = "https:" === location.protocol ? !0 : !1,
    q = 18e5;
    m = new Date,
    m.setTime(m.getTime() + 31536e6);
    var r = {
        domain: "",
        cookiepath: ""
    },
    s = {
        db: !0,
        sitecode: !0,
        userid: !0,
        userflag: !0
    },
    t = {
        sitecode: "ao",
        evtcate: "ec",
        evtaction: "ea",
        evtlable: "el",
        evtvalue: "ev",
        externalsrc: "oc",
        sekeyword: "kw",
        searchengine: "se"
    },
    u = function() {
        this.db = "",
        this.sitecode = "",
        this.gid = "",
        this.gname = "",
        this.gcate = "",
        this.gprice = "",
        this.gnum = "",
        this.og = [],
        this.ofristflag = "",
        this.orderid = "",
        this.ordermoney = "",
        this.orderstatus = "",
        this.paytype = "",
        this.promotion = "",
        this.cg = [],
        this.userid = "",
        this.userflag = "",
        this.keywords = "",
        this.convtype = "",
        this.convaction = "",
        this.convid = "",
        this.convvalue = "",
        this.tag = "",
        this.kv = [],
        this.evtcate = "",
        this.evtaction = "",
        this.evtlable = "",
        this.evtvalue = "",
        this.audage = "",
        this.audgender = "",
        this.audeducation = "",
        this.carttype = "",
        this.other = {},
        this.gimgurl = "",
        this.gorgprice = "",
        this.gdisprice = "",
        this.gdisrate = "",
        this.gcatename = "",
        this.gbrand = "",
        this.externalsrc = "",
        this.searchengine = "",
        this.sekeyword = ""
    },
    v = {
        og: {
            ogcate: "",
            ogname: "",
            ogid: "",
            ognum: "",
            ogprice: "",
            ogurl: "",
            ogimgurl: "",
            ogorgprice: "",
            ogdisprice: "",
            ogdisrate: "",
            ogcatename: "",
            ogbrand: ""
        },
        cg: {
            cgcate: "",
            cgname: "",
            cgid: "",
            cgnum: "",
            cgprice: "",
            cgurl: "",
            cgimgurl: "",
            cgorgprice: "",
            cgdisprice: "",
            cgdisrate: "",
            cgcatename: "",
            cgbrand: ""
        },
        kv: {
            tkey: "",
            tvalue: ""
        },
        isArray: function(a) {
            return v.og.hasOwnProperty(a) ? "og": v.cg.hasOwnProperty(a) ? "cg": v.kv.hasOwnProperty(a) ? "kv": !1
        },
        setArrItem: function(a) {
            return k.clone(v[a])
        }
    },
    w = ["gcate", "gname", "gid", "gnum", "gprice"],
    x = ["audage", "audgender", "audeducation"],
    y = ["convtype", "convaction", "convid", "convvalue"],
    z = ["userid", "userflag", "orderid", "ordermoney", "og", "ofristflag", "product", "person", "cg", "keywords", "promotion", "oval", "orderstatus", "paytype"],
    A = ["gimgurl", "gorgprice", "gbrand", "gcatename", "gdisprice", "gdisrate"],
    B = ["ogurl", "ogimgurl", "ogorgprice", "ogdisprice", "ogdisrate", "ogcatename", "ogbrand"],
    C = ["cgurl", "cgimgurl", "cgorgprice", "cgdisprice", "cgdisrate", "cgcatename", "cgbrand"],
    D = !0,
    E = function(a) {
        return function(b) {
            return void 0 == b[a] ? "": k.encodeParams(b[a])
        }
    },
    F = function(a) {
        var b = a;
        return function(c) {
            var d = [],
            e = c[a] || [],
            f = [],
            g = "og" === b ? B: C;
            k.each(e,
            function(a) {
                if (k.isObject(a)) {
                    var c, e, h = {};
                    "og" === b ? (c = void 0 == a.ogid ? "": k.encodeParams(a.ogid), e = void 0 == a.ogname ? "": k.encodeParams(a.ogname)) : (c = void 0 == a.cgid ? "": k.encodeParams(a.cgid), e = void 0 == a.cgname ? "": k.encodeParams(a.cgname));
                    var i = [];
                    k.each(a,
                    function(a, b) {
                        if (k.indexOf(g, b) < 0) {
                            var c = void 0 == a || "ogname" == b || "cgname" == b ? "": k.encodeParams(a);
                            i.push(c),
                            ("ogprice" === b || "cgprice" === b) && (h[b] = k.encodeParams(a))
                        } else h[b] = k.encodeParams(a)
                    }),
                    d.push(i.join("^")),
                    ("" !== c || "" !== e) && (h.id = c, h.value = e, f.push(h))
                }
            });
            var h = void 0 == c.carttype ? "": k.encodeParams(c.carttype),
            i = "";
            return "cg" == b && (i = "" !== h || "" !== d.join("|") ? h + "@": ""),
            {
                val: i + d.join("|"),
                ds: f
            }
        }
    },
    G = {
        userid: E("userid"),
        userflag: E("userflag"),
        orderid: E("orderid"),
        ordermoney: E("ordermoney"),
        ofristflag: E("ofristflag"),
        person: function(a) {
            var b = [],
            c = 1;
            return k.each(x,
            function(d) {
                var e = void 0 == a[d] ? "": k.encodeParams(a[d]);
                "" !== e && (c = 0),
                b.push(e)
            }),
            c ? "": b.join("|")
        },
        keywords: E("keywords"),
        promotion: E("promotion"),
        oval: E("oval"),
        orderstatus: E("orderstatus"),
        paytype: E("paytype"),
        product: function(a) {
            var b = [],
            c = 1;
            return k.each(w,
            function(d) {
                var e = void 0 == a[d] || "gname" === d ? "": k.encodeParams(a[d]);
                "" !== e && (c = 0),
                b.push(e)
            }),
            {
                val: c ? "": b.join("^")
            }
        },
        cg: F("cg"),
        og: F("og")
    },
    H = d.collector[b] || (d.collector[b] = new u),
    I = function() {
        return p ? "https://idigger.allyes.com/main/adftrack": "http://idigger.allyes.com/main/adftrack"
    } (),
    J = {
        setCkWmv: function() {
            var a = "",
            b = document.domain,
            c = r.domain;
            if ("www." == b.substring(0, 4) && (b = b.substring(4, b.length)), "" == r.domain) a = b;
            else {
                c = "www." == c.substring(0, 4) ? c.substring(3, c.length) : c,
                b = "." == c.substring(0, 1) ? "." + b: b;
                var d = c.length,
                e = b.length;
                e - d >= 0 && b.indexOf(c) == e - d && (a = c)
            }
            r.domain = a.toLowerCase();
            var f = "",
            g = r.cookiepath,
            h = document.location.pathname;
            if ("" == g || "/" == g) f = g;
            else if (0 == g.indexOf("/")) {
                var i = g.lastIndexOf("/");
                i != g.length - 1 && (g += "/"),
                0 == h.indexOf(g) && (f = g)
            }
            if (r.cookiepath = f, !n.getItem("__wmv")) {
                var j = Math.floor( + new Date / 1e3);
                return void n.setItem("__wmv", j + ".1", m, f, a)
            }
            if (!n.getItem("__wms")) {
                var k = n.getItem("__wmv").split(".");
                return void(k.length >= 2 && (k[1] = parseInt(k[1], 10) + 1, n.setItem("__wmv", k.join("."), m, f, a)))
            }
            n.setItem("__wmv", n.getItem("__wmv"), m, f, a)
        },
        pushHandler: function(a) {
            var b = a || e;
            k.each(b,
            function(a) {
                J.setWmColledtor(a)
            })
        },
        setWmColledtor: function(a) {
            if (k.isArray(a)) {
                if ("_trackPoint" === a[0]) return void J.trackPoint();
                var b = v.isArray(a[0]);
                if (b) {
                    for (var c = v.setArrItem(b), d = 0; d < a.length; d += 2) {
                        var e = a[d];
                        "" === c[e] && (c[e] = a[d + 1] || "")
                    }
                    H[b].push(c)
                } else {
                    for (var f = !1,
                    d = 0; d < a.length; d += 2) H.hasOwnProperty(a[d]) && "other" !== a[d] ? H[a[d]] = a[d + 1] || "": r.hasOwnProperty(a[d]) ? (r[a[d]] = k.trim(a[d + 1] || ""), f = !0) : H.other[a[d]] = a[d + 1] || "";
                    f && J.setCkWmv()
                }
            }
        },
        clearWmColledtor: function() {
            k.each(H,
            function(a, b) {
                return k.isFunction(a) || s.hasOwnProperty(b) ? void 0 : k.isArray(a) ? void(H[b] = []) : void(H[b] = "")
            }),
            H.other = {}
        },
        IFCCookieMapping: function() {
            var a = document.createElement("iframe");
            a.src = "http://wmcdn.allyes.com/adxcm_base_idigger.htm",
            a.style.width = "0px",
            a.style.height = "0px",
            a.style.marginheight = "0px",
            a.style.marginwidth = "0px",
            a.style.position = "absolute",
            a.style.top = "-100px",
            a.style.left = "-100px",
            a.style.FRAMEBORDER = "0",
            a.style.SCROLLING = "0",
            a.style.display = "none";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b)
        },
        getParams: function() {
            var a = [],
            b = [];
            return k.each(z,
            function(c) {
                var d = G[c](H);
                k.isObject(d) ? (void 0 !== d.val && a.push(d.val), d.ds && (b = b.concat(d.ds))) : a.push(d)
            }),
            {
                ecms: a.join("`"),
                ds: b
            }
        },
        getAcvParams: function() {
            var a = [];
            return k.each(y,
            function(b) {
                a.push(b + "|" + E(b)(H))
            }),
            a.join(";")
        },
        getTkvParams: function() {
            var a = [];
            return k.each(H.kv,
            function(b) {
                a.push(E("tkey")(b) + "|" + E("tvalue")(b))
            }),
            a.join(";")
        },
        getOtherParams: function() {
            var a = [],
            b = "",
            c = [].concat(z, y, w, x, ["carttype"], A);
            return k.each(H,
            function(d, e) {
                if (! (k.isArray(d) || k.isFunction(d) || k.indexOf(c, e) > -1)) {
                    if ("other" === e) {
                        var f = [];
                        return k.each(d,
                        function(a, b) {
                            f.push(k.encodeParams(b) + "|" + k.encodeParams(void 0 == a ? "": a))
                        }),
                        void(b = "&ctd=" + f.join(";"))
                    }
                    var g = t[e] || e;
                    a.push(g + "=" + k.encodeParams(void 0 == d ? "": d))
                }
            }),
            {
                ctd: b,
                val: a.join("&")
            }
        },
        getWmvParams: function() {
            var a = "",
            b = "",
            c = "1";
            if (n.getItem("__wmv")) {
                var d = n.getItem("__wmv").split(".");
                d.length >= 2 && (a = d[0], b = d[1]),
                c = 0
            } else c = "1";
            return "1" == b && (c = "1"),
            "&cct=" + a + "&sc=" + b + "&nv=" + c
        },
        getHostParams: function() {
            var a = document.location;
            return "&hn=" + k.encodeParams(a.hostname) + "&pu=" + k.encodeParams(a.pathname + a.search) + "&rf=" + k.encodeParams(document.referrer)
        },
        getEcompParams: function() {
            var a = "";
            return a += "&epi=" + E("gid")(H),
            a += "&epn=" + E("gname")(H),
            a += "&epu=" + k.encodeParams(document.location.pathname + document.location.search),
            a += "&hn=" + k.encodeParams(document.location.hostname),
            a += "&imu=" + E("gimgurl")(H),
            a += "&pri=" + E("gprice")(H),
            a += "&opri=" + E("gorgprice")(H),
            a += "&dpri=" + E("gdisprice")(H),
            a += "&drat=" + E("gdisrate")(H),
            a += "&brd=" + E("gbrand")(H),
            a += "&cid=" + E("gcate")(H),
            a += "&cnm=" + E("gcatename")(H),
            a += "&prom=" + E("promotion")(H)
        },
        send: function(a) {
            var b = new Image;
            b.onload = b.onerror = function() {},
            b.src = I + a + "&gpa=" + c + "&r=" + (new Date).getTime()
        },
        trackPoint: function() {
            o || p || J.IFCCookieMapping();
            var a = J.getParams(),
            b = a.ds || [],
            c = a.ecms || "",
            d = J.getAcvParams(),
            e = J.getTkvParams(),
            f = J.getWmvParams(),
            g = J.getOtherParams(),
            h = g.val,
            i = g.ctd;
            J.send("?lt=i&" + h + i + "&acv=" + d + "&ecm=" + c + "&tkv=" + e + f + J.getHostParams());
            var j = void 0 == H.sitecode ? "": k.encodeParams(H.sitecode),
            l = void 0 == H.db ? "": k.encodeParams(H.db),
            m = "?lt=p&db=" + l;
            m += "&ao=" + j,
            D && k.each(b,
            function(a) {
                if (k.isObject(a)) {
                    var b = m,
                    c = k.encodeParams(a.id || ""),
                    d = k.encodeParams(a.ogurl || "" || a.cgurl || "");
                    "" != c && "" != d && (b += "&epi=" + c, b += "&epn=" + k.encodeParams(a.value || ""), b += "&epu=" + d, b += "&hn=" + k.encodeParams(document.location.hostname), b += "&imu=" + k.encodeParams(a.ogimgurl || "" || a.cgimgurl || ""), b += "&pri=" + k.encodeParams(a.ogprice || "" || a.cgprice || ""), b += "&opri=" + k.encodeParams(a.ogorgprice || "" || a.cgorgprice || ""), b += "&dpri=" + k.encodeParams(a.ogdisprice || "" || a.cgdisprice || ""), b += "&drat=" + k.encodeParams(a.ogdisrate || "" || a.cgdisrate || ""), b += "&brd=" + k.encodeParams(a.ogbrand || "" || a.cgbrand || ""), b += "&cid=" + k.encodeParams(a.ogcate || "" || a.cgcate || ""), b += "&cnm=" + k.encodeParams(a.ogcatename || "" || a.cgcatename || ""), b += i, J.send(b))
                }
            }),
            "" != E("gid")(H) && (m += J.getEcompParams() + i, J.send(m)),
            J.clearWmColledtor()
        }
    };
    if (J.pushHandler(), J.setCkWmv(), !n.getItem("__wms")) {
        var K = new Date;
        K.setTime(K.getTime() + q),
        n.setItem("__wms", Math.floor( + K / 1e3), K)
    }
    var L = e.push,
    M = function() {
        var a = k.slice.call(arguments, 0);
        L.call(this, a),
        J && J.pushHandler(a)
    };
    e.push = M
} (window, "_wmmq");