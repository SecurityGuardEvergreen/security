! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = t.length,
                n = se.type(t);
            return "function" === n || se.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function i(t, e, n) {
            if (se.isFunction(e)) return se.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return se.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (pe.test(e)) return se.filter(e, t, n);
                e = se.filter(e, t)
            }
            return se.grep(t, function(t) {
                return se.inArray(t, e) >= 0 !== n
            })
        }

        function r(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function s(t) {
            var e = be[t] = {};
            return se.each(t.match(we) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function o() {
            me.addEventListener ? (me.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (me.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }

        function a() {
            (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (o(), se.ready())
        }

        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(Te, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ke.test(n) ? se.parseJSON(n) : n
                    } catch (r) {}
                    se.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function c(t) {
            var e;
            for (e in t)
                if (("data" !== e || !se.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function u(t, e, n, i) {
            if (se.acceptData(t)) {
                var r, s, o = se.expando,
                    a = t.nodeType,
                    l = a ? se.cache : t,
                    c = a ? t[o] : t[o] && o;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e) return c || (c = a ? t[o] = G.pop() || se.guid++ : o), l[c] || (l[c] = a ? {} : {
                    toJSON: se.noop
                }), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = se.extend(l[c], e) : l[c].data = se.extend(l[c].data, e)), s = l[c], i || (s.data || (s.data = {}), s = s.data), void 0 !== n && (s[se.camelCase(e)] = n), "string" == typeof e ? (r = s[e], null == r && (r = s[se.camelCase(e)])) : r = s, r
            }
        }

        function d(t, e, n) {
            if (se.acceptData(t)) {
                var i, r, s = t.nodeType,
                    o = s ? se.cache : t,
                    a = s ? t[se.expando] : se.expando;
                if (o[a]) {
                    if (e && (i = n ? o[a] : o[a].data)) {
                        se.isArray(e) ? e = e.concat(se.map(e, se.camelCase)) : e in i ? e = [e] : (e = se.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                        for (; r--;) delete i[e[r]];
                        if (n ? !c(i) : !se.isEmptyObject(i)) return
                    }(n || (delete o[a].data, c(o[a]))) && (s ? se.cleanData([t], !0) : ie.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
                }
            }
        }

        function h() {
            return !0
        }

        function p() {
            return !1
        }

        function f() {
            try {
                return me.activeElement
            } catch (t) {}
        }

        function m(t) {
            var e = Be.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function v(t, e) {
            var n, i, r = 0,
                s = typeof t.getElementsByTagName !== Se ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Se ? t.querySelectorAll(e || "*") : void 0;
            if (!s)
                for (s = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || se.nodeName(i, e) ? s.push(i) : se.merge(s, v(i, e));
            return void 0 === e || e && se.nodeName(t, e) ? se.merge([t], s) : s
        }

        function g(t) {
            Ae.test(t.type) && (t.defaultChecked = t.checked)
        }

        function y(t, e) {
            return se.nodeName(t, "table") && se.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function _(t) {
            return t.type = (null !== se.find.attr(t, "type")) + "/" + t.type, t
        }

        function w(t) {
            var e = Ge.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function b(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) se._data(n, "globalEval", !e || se._data(e[i], "globalEval"))
        }

        function C(t, e) {
            if (1 === e.nodeType && se.hasData(t)) {
                var n, i, r, s = se._data(t),
                    o = se._data(e, s),
                    a = s.events;
                if (a) {
                    delete o.handle, o.events = {};
                    for (n in a)
                        for (i = 0, r = a[n].length; r > i; i++) se.event.add(e, n, a[n][i])
                }
                o.data && (o.data = se.extend({}, o.data))
            }
        }

        function x(t, e) {
            var n, i, r;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[se.expando]) {
                    r = se._data(e);
                    for (i in r.events) se.removeEvent(e, i, r.handle);
                    e.removeAttribute(se.expando)
                }
                "script" === n && e.text !== t.text ? (_(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !se.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function S(e, n) {
            var i = se(n.createElement(e)).appendTo(n.body),
                r = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(i[0]).display : se.css(i[0], "display");
            return i.detach(), r
        }

        function k(t) {
            var e = me,
                n = tn[t];
            return n || (n = S(t, e), "none" !== n && n || (Ye = (Ye || se("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ye[0].contentWindow || Ye[0].contentDocument).document, e.write(), e.close(), n = S(t, e), Ye.detach()), tn[t] = n), n
        }

        function T(t, e) {
            return {
                get: function() {
                    var n = t();
                    return null != n ? n ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
                }
            }
        }

        function M(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = fn.length; r--;)
                if (e = fn[r] + n, e in t) return e;
            return i
        }

        function P(t, e) {
            for (var n, i, r, s = [], o = 0, a = t.length; a > o; o++) i = t[o], i.style && (s[o] = se._data(i, "olddisplay"), n = i.style.display, e ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Le(i) && (s[o] = se._data(i, "olddisplay", k(i.nodeName)))) : s[o] || (r = Le(i), (n && "none" !== n || !r) && se._data(i, "olddisplay", r ? n : se.css(i, "display"))));
            for (o = 0; a > o; o++) i = t[o], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[o] || "" : "none"));
            return t
        }

        function L(t, e, n) {
            var i = un.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function E(t, e, n, i, r) {
            for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += se.css(t, n + Pe[s], !0, r)), i ? ("content" === n && (o -= se.css(t, "padding" + Pe[s], !0, r)), "margin" !== n && (o -= se.css(t, "border" + Pe[s] + "Width", !0, r))) : (o += se.css(t, "padding" + Pe[s], !0, r), "padding" !== n && (o += se.css(t, "border" + Pe[s] + "Width", !0, r)));
            return o
        }

        function A(t, e, n) {
            var i = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                s = en(t),
                o = ie.boxSizing() && "border-box" === se.css(t, "boxSizing", !1, s);
            if (0 >= r || null == r) {
                if (r = nn(t, e, s), (0 > r || null == r) && (r = t.style[e]), sn.test(r)) return r;
                i = o && (ie.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + E(t, e, n || (o ? "border" : "content"), i, s) + "px"
        }

        function I(t, e, n, i, r) {
            return new I.prototype.init(t, e, n, i, r)
        }

        function $() {
            return setTimeout(function() {
                mn = void 0
            }), mn = se.now()
        }

        function D(t, e) {
            var n, i = {
                    height: t
                },
                r = 0;
            for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Pe[r], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function O(t, e, n) {
            for (var i, r = (bn[e] || []).concat(bn["*"]), s = 0, o = r.length; o > s; s++)
                if (i = r[s].call(n, e, t)) return i
        }

        function V(t, e, n) {
            var i, r, s, o, a, l, c, u, d = this,
                h = {},
                p = t.style,
                f = t.nodeType && Le(t),
                m = se._data(t, "fxshow");
            n.queue || (a = se._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, d.always(function() {
                d.always(function() {
                    a.unqueued--, se.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = se.css(t, "display"), u = k(t.nodeName), "none" === c && (c = u), "inline" === c && "none" === se.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== u ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || d.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (r = e[i], gn.exec(r)) {
                    if (delete e[i], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        f = !0
                    }
                    h[i] = m && m[i] || se.style(t, i)
                }
            if (!se.isEmptyObject(h)) {
                m ? "hidden" in m && (f = m.hidden) : m = se._data(t, "fxshow", {}), s && (m.hidden = !f), f ? se(t).show() : d.done(function() {
                    se(t).hide()
                }), d.done(function() {
                    var e;
                    se._removeData(t, "fxshow");
                    for (e in h) se.style(t, e, h[e])
                });
                for (i in h) o = O(f ? m[i] : 0, i, d), i in m || (m[i] = o.start, f && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function B(t, e) {
            var n, i, r, s, o;
            for (n in t)
                if (i = se.camelCase(n), r = e[i], s = t[n], se.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), o = se.cssHooks[i], o && "expand" in o) {
                    s = o.expand(s), delete t[i];
                    for (n in s) n in t || (t[n] = s[n], e[n] = r)
                } else e[i] = r
        }

        function j(t, e, n) {
            var i, r, s = 0,
                o = wn.length,
                a = se.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = mn || $(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, s = 1 - i, o = 0, l = c.tweens.length; l > o; o++) c.tweens[o].run(s);
                    return a.notifyWith(t, [c, s, n]), 1 > s && l ? n : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: se.extend({}, e),
                    opts: se.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: mn || $(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = se.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) c.tweens[n].run(1);
                        return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (B(u, c.opts.specialEasing); o > s; s++)
                if (i = wn[s].call(c, t, u, c.opts)) return i;
            return se.map(u, O, c), se.isFunction(c.opts.start) && c.opts.start.call(t, c), se.fx.timer(se.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function N(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    s = e.toLowerCase().match(we) || [];
                if (se.isFunction(n))
                    for (; i = s[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function H(t, e, n, i) {
            function r(a) {
                var l;
                return s[a] = !0, se.each(t[a] || [], function(t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                }), l
            }
            var s = {},
                o = t === Jn;
            return r(e.dataTypes[0]) || !s["*"] && r("*")
        }

        function R(t, e) {
            var n, i, r = se.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && se.extend(!0, t, n), t
        }

        function F(t, e, n) {
            for (var i, r, s, o, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r)
                for (o in a)
                    if (a[o] && a[o].test(r)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in n) s = l[0];
            else {
                for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        s = o;
                        break
                    }
                    i || (i = o)
                }
                s = s || i
            }
            return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
        }

        function z(t, e, n, i) {
            var r, s, o, a, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
            for (s = u.shift(); s;)
                if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (o = c[l + " " + s] || c["* " + s], !o)
                    for (r in c)
                        if (a = r.split(" "), a[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                            o === !0 ? o = c[r] : c[r] !== !0 && (s = a[0], u.unshift(a[1]));
                            break
                        }
                if (o !== !0)
                    if (o && t["throws"]) e = o(e);
                    else try {
                        e = o(e)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: o ? d : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function q(t, e, n, i) {
            var r;
            if (se.isArray(e)) se.each(e, function(e, r) {
                n || Xn.test(t) ? i(t, r) : q(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== se.type(e)) i(t, e);
            else
                for (r in e) q(t + "[" + r + "]", e[r], n, i)
        }

        function J() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function U() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function W(t) {
            return se.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var G = [],
            X = G.slice,
            Z = G.concat,
            Q = G.push,
            K = G.indexOf,
            Y = {},
            te = Y.toString,
            ee = Y.hasOwnProperty,
            ne = "".trim,
            ie = {},
            re = "1.11.0",
            se = function(t, e) {
                return new se.fn.init(t, e)
            },
            oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ae = /^-ms-/,
            le = /-([\da-z])/gi,
            ce = function(t, e) {
                return e.toUpperCase()
            };
        se.fn = se.prototype = {
            jquery: re,
            constructor: se,
            selector: "",
            length: 0,
            toArray: function() {
                return X.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : X.call(this)
            },
            pushStack: function(t) {
                var e = se.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return se.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(se.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(X.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Q,
            sort: G.sort,
            splice: G.splice
        }, se.extend = se.fn.extend = function() {
            var t, e, n, i, r, s, o = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || se.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
                if (null != (r = arguments[a]))
                    for (i in r) t = o[i], n = r[i], o !== n && (c && n && (se.isPlainObject(n) || (e = se.isArray(n))) ? (e ? (e = !1, s = t && se.isArray(t) ? t : []) : s = t && se.isPlainObject(t) ? t : {}, o[i] = se.extend(c, s, n)) : void 0 !== n && (o[i] = n));
            return o
        }, se.extend({
            expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === se.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === se.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return t - parseFloat(t) >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== se.type(t) || t.nodeType || se.isWindow(t)) return !1;
                try {
                    if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (ie.ownLast)
                    for (e in t) return ee.call(t, e);
                for (e in t);
                return void 0 === e || ee.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Y[te.call(t)] || "object" : typeof t
            },
            globalEval: function(e) {
                e && se.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(ae, "ms-").replace(le, ce)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, i) {
                var r, s = 0,
                    o = t.length,
                    a = n(t);
                if (i) {
                    if (a)
                        for (; o > s && (r = e.apply(t[s], i), r !== !1); s++);
                    else
                        for (s in t)
                            if (r = e.apply(t[s], i), r === !1) break
                } else if (a)
                    for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++);
                else
                    for (s in t)
                        if (r = e.call(t[s], s, t[s]), r === !1) break; return t
            },
            trim: ne && !ne.call("﻿ ") ? function(t) {
                return null == t ? "" : ne.call(t)
            } : function(t) {
                return null == t ? "" : (t + "").replace(oe, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? se.merge(i, "string" == typeof t ? [t] : t) : Q.call(i, t)), i
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (K) return K.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, r = t.length; n > i;) t[r++] = e[i++];
                if (n !== n)
                    for (; void 0 !== e[i];) t[r++] = e[i++];
                return t.length = r, t
            },
            grep: function(t, e, n) {
                for (var i, r = [], s = 0, o = t.length, a = !n; o > s; s++) i = !e(t[s], s), i !== a && r.push(t[s]);
                return r
            },
            map: function(t, e, i) {
                var r, s = 0,
                    o = t.length,
                    a = n(t),
                    l = [];
                if (a)
                    for (; o > s; s++) r = e(t[s], s, i), null != r && l.push(r);
                else
                    for (s in t) r = e(t[s], s, i), null != r && l.push(r);
                return Z.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, r;
                return "string" == typeof e && (r = t[e], e = t, t = r), se.isFunction(t) ? (n = X.call(arguments, 2), i = function() {
                    return t.apply(e || this, n.concat(X.call(arguments)))
                }, i.guid = t.guid = t.guid || se.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ie
        }), se.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            Y["[object " + e + "]"] = e.toLowerCase()
        });
        var ue = function(t) {
                function e(t, e, n, i) {
                    var r, s, o, a, l, c, d, f, m, v;
                    if ((e ? e.ownerDocument || e : H) !== I && A(e), e = e || I, n = n || [], !t || "string" != typeof t) return n;
                    if (1 !== (a = e.nodeType) && 9 !== a) return [];
                    if (D && !i) {
                        if (r = ye.exec(t))
                            if (o = r[1]) {
                                if (9 === a) {
                                    if (s = e.getElementById(o), !s || !s.parentNode) return n;
                                    if (s.id === o) return n.push(s), n
                                } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && j(e, s) && s.id === o) return n.push(s), n
                            } else {
                                if (r[2]) return Y.apply(n, e.getElementsByTagName(t)), n;
                                if ((o = r[3]) && x.getElementsByClassName && e.getElementsByClassName) return Y.apply(n, e.getElementsByClassName(o)), n
                            }
                        if (x.qsa && (!O || !O.test(t))) {
                            if (f = d = N, m = e, v = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                                for (c = h(t), (d = e.getAttribute("id")) ? f = d.replace(we, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + p(c[l]);
                                m = _e.test(t) && u(e.parentNode) || e, v = c.join(",")
                            }
                            if (v) try {
                                return Y.apply(n, m.querySelectorAll(v)), n
                            } catch (g) {} finally {
                                d || e.removeAttribute("id")
                            }
                        }
                    }
                    return b(t.replace(le, "$1"), e, n, i)
                }

                function n() {
                    function t(n, i) {
                        return e.push(n + " ") > S.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                    var e = [];
                    return t
                }

                function i(t) {
                    return t[N] = !0, t
                }

                function r(t) {
                    var e = I.createElement("div");
                    try {
                        return !!t(e)
                    } catch (n) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function s(t, e) {
                    for (var n = t.split("|"), i = t.length; i--;) S.attrHandle[n[i]] = e
                }

                function o(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function a(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }

                function l(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function c(t) {
                    return i(function(e) {
                        return e = +e, i(function(n, i) {
                            for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function u(t) {
                    return t && typeof t.getElementsByTagName !== W && t
                }

                function d() {}

                function h(t, n) {
                    var i, r, s, o, a, l, c, u = q[t + " "];
                    if (u) return n ? 0 : u.slice(0);
                    for (a = t, l = [], c = S.preFilter; a;) {
                        (!i || (r = ce.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = ue.exec(a)) && (i = r.shift(), s.push({
                            value: i,
                            type: r[0].replace(le, " ")
                        }), a = a.slice(i.length));
                        for (o in S.filter) !(r = fe[o].exec(a)) || c[o] && !(r = c[o](r)) || (i = r.shift(), s.push({
                            value: i,
                            type: o,
                            matches: r
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return n ? a.length : a ? e.error(t) : q(t, l).slice(0)
                }

                function p(t) {
                    for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                    return i
                }

                function f(t, e, n) {
                    var i = e.dir,
                        r = n && "parentNode" === i,
                        s = F++;
                    return e.first ? function(e, n, s) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || r) return t(e, n, s)
                    } : function(e, n, o) {
                        var a, l, c = [R, s];
                        if (o) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || r) && t(e, n, o)) return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || r) {
                                    if (l = e[N] || (e[N] = {}), (a = l[i]) && a[0] === R && a[1] === s) return c[2] = a[2];
                                    if (l[i] = c, c[2] = t(e, n, o)) return !0
                                }
                    }
                }

                function m(t) {
                    return t.length > 1 ? function(e, n, i) {
                        for (var r = t.length; r--;)
                            if (!t[r](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function v(t, e, n, i, r) {
                    for (var s, o = [], a = 0, l = t.length, c = null != e; l > a; a++)(s = t[a]) && (!n || n(s, i, r)) && (o.push(s), c && e.push(a));
                    return o
                }

                function g(t, e, n, r, s, o) {
                    return r && !r[N] && (r = g(r)), s && !s[N] && (s = g(s, o)), i(function(i, o, a, l) {
                        var c, u, d, h = [],
                            p = [],
                            f = o.length,
                            m = i || w(e || "*", a.nodeType ? [a] : a, []),
                            g = !t || !i && e ? m : v(m, h, t, a, l),
                            y = n ? s || (i ? t : f || r) ? [] : o : g;
                        if (n && n(g, y, a, l), r)
                            for (c = v(y, p), r(c, [], a, l), u = c.length; u--;)(d = c[u]) && (y[p[u]] = !(g[p[u]] = d));
                        if (i) {
                            if (s || t) {
                                if (s) {
                                    for (c = [], u = y.length; u--;)(d = y[u]) && c.push(g[u] = d);
                                    s(null, y = [], c, l)
                                }
                                for (u = y.length; u--;)(d = y[u]) && (c = s ? ee.call(i, d) : h[u]) > -1 && (i[c] = !(o[c] = d))
                            }
                        } else y = v(y === o ? y.splice(f, y.length) : y), s ? s(null, o, y, l) : Y.apply(o, y)
                    })
                }

                function y(t) {
                    for (var e, n, i, r = t.length, s = S.relative[t[0].type], o = s || S.relative[" "], a = s ? 1 : 0, l = f(function(t) {
                            return t === e
                        }, o, !0), c = f(function(t) {
                            return ee.call(e, t) > -1
                        }, o, !0), u = [function(t, n, i) {
                            return !s && (i || n !== P) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i))
                        }]; r > a; a++)
                        if (n = S.relative[t[a].type]) u = [f(m(u), n)];
                        else {
                            if (n = S.filter[t[a].type].apply(null, t[a].matches), n[N]) {
                                for (i = ++a; r > i && !S.relative[t[i].type]; i++);
                                return g(a > 1 && m(u), a > 1 && p(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(le, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && p(t))
                            }
                            u.push(n)
                        }
                    return m(u)
                }

                function _(t, n) {
                    var r = n.length > 0,
                        s = t.length > 0,
                        o = function(i, o, a, l, c) {
                            var u, d, h, p = 0,
                                f = "0",
                                m = i && [],
                                g = [],
                                y = P,
                                _ = i || s && S.find.TAG("*", c),
                                w = R += null == y ? 1 : Math.random() || .1,
                                b = _.length;
                            for (c && (P = o !== I && o); f !== b && null != (u = _[f]); f++) {
                                if (s && u) {
                                    for (d = 0; h = t[d++];)
                                        if (h(u, o, a)) {
                                            l.push(u);
                                            break
                                        }
                                    c && (R = w)
                                }
                                r && ((u = !h && u) && p--, i && m.push(u))
                            }
                            if (p += f, r && f !== p) {
                                for (d = 0; h = n[d++];) h(m, g, o, a);
                                if (i) {
                                    if (p > 0)
                                        for (; f--;) m[f] || g[f] || (g[f] = Q.call(l));
                                    g = v(g)
                                }
                                Y.apply(l, g), c && !i && g.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                            }
                            return c && (R = w, P = y), m
                        };
                    return r ? i(o) : o
                }

                function w(t, n, i) {
                    for (var r = 0, s = n.length; s > r; r++) e(t, n[r], i);
                    return i
                }

                function b(t, e, n, i) {
                    var r, s, o, a, l, c = h(t);
                    if (!i && 1 === c.length) {
                        if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && x.getById && 9 === e.nodeType && D && S.relative[s[1].type]) {
                            if (e = (S.find.ID(o.matches[0].replace(be, Ce), e) || [])[0], !e) return n;
                            t = t.slice(s.shift().value.length)
                        }
                        for (r = fe.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !S.relative[a = o.type]);)
                            if ((l = S.find[a]) && (i = l(o.matches[0].replace(be, Ce), _e.test(s[0].type) && u(e.parentNode) || e))) {
                                if (s.splice(r, 1), t = i.length && p(s), !t) return Y.apply(n, i), n;
                                break
                            }
                    }
                    return M(t, c)(i, e, !D, n, _e.test(t) && u(e.parentNode) || e), n
                }
                var C, x, S, k, T, M, P, L, E, A, I, $, D, O, V, B, j, N = "sizzle" + -new Date,
                    H = t.document,
                    R = 0,
                    F = 0,
                    z = n(),
                    q = n(),
                    J = n(),
                    U = function(t, e) {
                        return t === e && (E = !0), 0
                    },
                    W = "undefined",
                    G = 1 << 31,
                    X = {}.hasOwnProperty,
                    Z = [],
                    Q = Z.pop,
                    K = Z.push,
                    Y = Z.push,
                    te = Z.slice,
                    ee = Z.indexOf || function(t) {
                        for (var e = 0, n = this.length; n > e; e++)
                            if (this[e] === t) return e;
                        return -1
                    },
                    ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ie = "[\\x20\\t\\r\\n\\f]",
                    re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    se = re.replace("w", "w#"),
                    oe = "\\[" + ie + "*(" + re + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + se + ")|)|)" + ie + "*\\]",
                    ae = ":(" + re + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)",
                    le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                    ce = new RegExp("^" + ie + "*," + ie + "*"),
                    ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                    de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
                    he = new RegExp(ae),
                    pe = new RegExp("^" + se + "$"),
                    fe = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + oe),
                        PSEUDO: new RegExp("^" + ae),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + ne + ")$", "i"),
                        needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                    },
                    me = /^(?:input|select|textarea|button)$/i,
                    ve = /^h\d$/i,
                    ge = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    _e = /[+~]/,
                    we = /'|\\/g,
                    be = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
                    Ce = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    };
                try {
                    Y.apply(Z = te.call(H.childNodes), H.childNodes), Z[H.childNodes.length].nodeType
                } catch (xe) {
                    Y = {
                        apply: Z.length ? function(t, e) {
                            K.apply(t, te.call(e))
                        } : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                x = e.support = {}, T = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                }, A = e.setDocument = function(t) {
                    var e, n = t ? t.ownerDocument || t : H,
                        i = n.defaultView;
                    return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, $ = n.documentElement, D = !T(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                        A()
                    }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                        A()
                    })), x.attributes = r(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), x.getElementsByTagName = r(function(t) {
                        return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                    }), x.getElementsByClassName = ge.test(n.getElementsByClassName) && r(function(t) {
                        return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                    }), x.getById = r(function(t) {
                        return $.appendChild(t).id = N, !n.getElementsByName || !n.getElementsByName(N).length
                    }), x.getById ? (S.find.ID = function(t, e) {
                        if (typeof e.getElementById !== W && D) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : []
                        }
                    }, S.filter.ID = function(t) {
                        var e = t.replace(be, Ce);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete S.find.ID, S.filter.ID = function(t) {
                        var e = t.replace(be, Ce);
                        return function(t) {
                            var n = typeof t.getAttributeNode !== W && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), S.find.TAG = x.getElementsByTagName ? function(t, e) {
                        return typeof e.getElementsByTagName !== W ? e.getElementsByTagName(t) : void 0
                    } : function(t, e) {
                        var n, i = [],
                            r = 0,
                            s = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return s
                    }, S.find.CLASS = x.getElementsByClassName && function(t, e) {
                        return typeof e.getElementsByClassName !== W && D ? e.getElementsByClassName(t) : void 0
                    }, V = [], O = [], (x.qsa = ge.test(n.querySelectorAll)) && (r(function(t) {
                        t.innerHTML = "<select t=''><option selected=''></option></select>", t.querySelectorAll("[t^='']").length && O.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || O.push(":checked")
                    }), r(function(t) {
                        var e = n.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
                    })), (x.matchesSelector = ge.test(B = $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && r(function(t) {
                        x.disconnectedMatch = B.call(t, "div"), B.call(t, "[s!='']:x"), V.push("!=", ae)
                    }), O = O.length && new RegExp(O.join("|")), V = V.length && new RegExp(V.join("|")), e = ge.test($.compareDocumentPosition), j = e || ge.test($.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, U = e ? function(t, e) {
                        if (t === e) return E = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === H && j(H, t) ? -1 : e === n || e.ownerDocument === H && j(H, e) ? 1 : L ? ee.call(L, t) - ee.call(L, e) : 0 : 4 & i ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return E = !0, 0;
                        var i, r = 0,
                            s = t.parentNode,
                            a = e.parentNode,
                            l = [t],
                            c = [e];
                        if (!s || !a) return t === n ? -1 : e === n ? 1 : s ? -1 : a ? 1 : L ? ee.call(L, t) - ee.call(L, e) : 0;
                        if (s === a) return o(t, e);
                        for (i = t; i = i.parentNode;) l.unshift(i);
                        for (i = e; i = i.parentNode;) c.unshift(i);
                        for (; l[r] === c[r];) r++;
                        return r ? o(l[r], c[r]) : l[r] === H ? -1 : c[r] === H ? 1 : 0
                    }, n) : I
                }, e.matches = function(t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function(t, n) {
                    if ((t.ownerDocument || t) !== I && A(t), n = n.replace(de, "='$1']"), !(!x.matchesSelector || !D || V && V.test(n) || O && O.test(n))) try {
                        var i = B.call(t, n);
                        if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (r) {}
                    return e(n, I, null, [t]).length > 0
                }, e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== I && A(t), j(t, e)
                }, e.attr = function(t, e) {
                    (t.ownerDocument || t) !== I && A(t);
                    var n = S.attrHandle[e.toLowerCase()],
                        i = n && X.call(S.attrHandle, e.toLowerCase()) ? n(t, e, !D) : void 0;
                    return void 0 !== i ? i : x.attributes || !D ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }, e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function(t) {
                    var e, n = [],
                        i = 0,
                        r = 0;
                    if (E = !x.detectDuplicates, L = !x.sortStable && t.slice(0), t.sort(U), E) {
                        for (; e = t[r++];) e === t[r] && (i = n.push(r));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return L = null, t
                }, k = e.getText = function(t) {
                    var e, n = "",
                        i = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else
                        for (; e = t[i++];) n += k(e);
                    return n
                }, S = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(be, Ce), t[3] = (t[4] || t[5] || "").replace(be, Ce), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[5] && t[2];
                            return fe.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : n && he.test(n) && (e = h(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(be, Ce).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = z[t + " "];
                            return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && z(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== W && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, n, i) {
                            return function(r) {
                                var s = e.attr(r, t);
                                return null == s ? "!=" === n : n ? (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s + " ").indexOf(i) > -1 : "|=" === n ? s === i || s.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(t, e, n, i, r) {
                            var s = "nth" !== t.slice(0, 3),
                                o = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === r ? function(t) {
                                return !!t.parentNode
                            } : function(e, n, l) {
                                var c, u, d, h, p, f, m = s !== o ? "nextSibling" : "previousSibling",
                                    v = e.parentNode,
                                    g = a && e.nodeName.toLowerCase(),
                                    y = !l && !a;
                                if (v) {
                                    if (s) {
                                        for (; m;) {
                                            for (d = e; d = d[m];)
                                                if (a ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                            f = m = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [o ? v.firstChild : v.lastChild], o && y) {
                                        for (u = v[N] || (v[N] = {}), c = u[t] || [], p = c[0] === R && c[1], h = c[0] === R && c[2], d = p && v.childNodes[p]; d = ++p && d && d[m] || (h = p = 0) || f.pop();)
                                            if (1 === d.nodeType && ++h && d === e) {
                                                u[t] = [R, p, h];
                                                break
                                            }
                                    } else if (y && (c = (e[N] || (e[N] = {}))[t]) && c[0] === R) h = c[1];
                                    else
                                        for (;
                                            (d = ++p && d && d[m] || (h = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++h || (y && ((d[N] || (d[N] = {}))[t] = [R, h]), d !== e)););
                                    return h -= r, h === i || h % i === 0 && h / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, n) {
                            var r, s = S.pseudos[t] || S.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return s[N] ? s(n) : s.length > 1 ? (r = [t, t, "", n], S.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                                for (var i, r = s(t, n), o = r.length; o--;) i = ee.call(t, r[o]), t[i] = !(e[i] = r[o])
                            }) : function(t) {
                                return s(t, 0, r)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: i(function(t) {
                            var e = [],
                                n = [],
                                r = M(t.replace(le, "$1"));
                            return r[N] ? i(function(t, e, n, i) {
                                for (var s, o = r(t, null, i, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                            }) : function(t, i, s) {
                                return e[0] = t, r(e, null, s, n), !n.pop()
                            }
                        }),
                        has: i(function(t) {
                            return function(n) {
                                return e(t, n).length > 0
                            }
                        }),
                        contains: i(function(t) {
                            return function(e) {
                                return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                            }
                        }),
                        lang: i(function(t) {
                            return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(be, Ce).toLowerCase(),
                                function(e) {
                                    var n;
                                    do
                                        if (n = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                    while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === $
                        },
                        focus: function(t) {
                            return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !S.pseudos.empty(t)
                        },
                        header: function(t) {
                            return ve.test(t.nodeName)
                        },
                        input: function(t) {
                            return me.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(t, e) {
                            return [e - 1]
                        }),
                        eq: c(function(t, e, n) {
                            return [0 > n ? n + e : n]
                        }),
                        even: c(function(t, e) {
                            for (var n = 0; e > n; n += 2) t.push(n);
                            return t
                        }),
                        odd: c(function(t, e) {
                            for (var n = 1; e > n; n += 2) t.push(n);
                            return t
                        }),
                        lt: c(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                            return t
                        }),
                        gt: c(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }, S.pseudos.nth = S.pseudos.eq;
                for (C in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) S.pseudos[C] = a(C);
                for (C in {
                        submit: !0,
                        reset: !0
                    }) S.pseudos[C] = l(C);
                return d.prototype = S.filters = S.pseudos, S.setFilters = new d, M = e.compile = function(t, e) {
                        var n, i = [],
                            r = [],
                            s = J[t + " "];
                        if (!s) {
                            for (e || (e = h(t)), n = e.length; n--;) s = y(e[n]), s[N] ? i.push(s) : r.push(s);
                            s = J(t, _(r, i))
                        }
                        return s
                    }, x.sortStable = N.split("").sort(U).join("") === N, x.detectDuplicates = !!E, A(), x.sortDetached = r(function(t) {
                            return 1 & t.compareDocumentPosition(I.createElement("div"))
                            }), r(function(t) {
    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
}) || s("type|href|height|width", function(t, e, n) {
    return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
}), x.attributes && r(function(t) {
    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
}) || s("value", function(t, e, n) {
    return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
}), r(function(t) {
    return null == t.getAttribute("disabled")
}) || s(ne, function(t, e, n) {
    var i;
    return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
}), e
}(t);
se.find = ue, se.expr = ue.selectors, se.expr[":"] = se.expr.pseudos, se.unique = ue.uniqueSort, se.text = ue.getText, se.isXMLDoc = ue.isXML, se.contains = ue.contains;
var de = se.expr.match.needsContext,
    he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    pe = /^.[^:#\[\.,]*$/;
se.filter = function(t, e, n) {
    var i = e[0];
    return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? se.find.matchesSelector(i, t) ? [i] : [] : se.find.matches(t, se.grep(e, function(t) {
        return 1 === t.nodeType
    }))
}, se.fn.extend({
    find: function(t) {
        var e, n = [],
            i = this,
            r = i.length;
        if ("string" != typeof t) return this.pushStack(se(t).filter(function() {
            for (e = 0; r > e; e++)
                if (se.contains(i[e], this)) return !0
        }));
        for (e = 0; r > e; e++) se.find(t, i[e], n);
        return n = this.pushStack(r > 1 ? se.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
    },
    filter: function(t) {
        return this.pushStack(i(this, t || [], !1))
    },
    not: function(t) {
        return this.pushStack(i(this, t || [], !0))
    },
    is: function(t) {
        return !!i(this, "string" == typeof t && de.test(t) ? se(t) : t || [], !1).length
    }
});
var fe, me = t.document,
    ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ge = se.fn.init = function(t, e) {
        var n, i;
        if (!t) return this;
        if ("string" == typeof t) {
            if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ve.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || fe).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof se ? e[0] : e, se.merge(this, se.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : me, !0)), he.test(n[1]) && se.isPlainObject(e))
                    for (n in e) se.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            if (i = me.getElementById(n[2]), i && i.parentNode) {
                if (i.id !== n[2]) return fe.find(t);
                this.length = 1, this[0] = i
            }
            return this.context = me, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : se.isFunction(t) ? "undefined" != typeof fe.ready ? fe.ready(t) : t(se) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), se.makeArray(t, this))
    };
ge.prototype = se.fn, fe = se(me);
var ye = /^(?:parents|prev(?:Until|All))/,
    _e = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
se.extend({
    dir: function(t, e, n) {
        for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !se(r).is(n));) 1 === r.nodeType && i.push(r), r = r[e];
        return i
    },
    sibling: function(t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
    }
}), se.fn.extend({
    has: function(t) {
        var e, n = se(t, this),
            i = n.length;
        return this.filter(function() {
            for (e = 0; i > e; e++)
                if (se.contains(this, n[e])) return !0
        })
    },
    closest: function(t, e) {
        for (var n, i = 0, r = this.length, s = [], o = de.test(t) || "string" != typeof t ? se(t, e || this.context) : 0; r > i; i++)
            for (n = this[i]; n && n !== e; n = n.parentNode)
                if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && se.find.matchesSelector(n, t))) {
                    s.push(n);
                    break
                }
        return this.pushStack(s.length > 1 ? se.unique(s) : s)
    },
    index: function(t) {
        return t ? "string" == typeof t ? se.inArray(this[0], se(t)) : se.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(t, e) {
        return this.pushStack(se.unique(se.merge(this.get(), se(t, e))))
    },
    addBack: function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
}), se.each({
    parent: function(t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null
    },
    parents: function(t) {
        return se.dir(t, "parentNode")
    },
    parentsUntil: function(t, e, n) {
        return se.dir(t, "parentNode", n)
    },
    next: function(t) {
        return r(t, "nextSibling")
    },
    prev: function(t) {
        return r(t, "previousSibling")
    },
    nextAll: function(t) {
        return se.dir(t, "nextSibling")
    },
    prevAll: function(t) {
        return se.dir(t, "previousSibling")
    },
    nextUntil: function(t, e, n) {
        return se.dir(t, "nextSibling", n)
    },
    prevUntil: function(t, e, n) {
        return se.dir(t, "previousSibling", n)
    },
    siblings: function(t) {
        return se.sibling((t.parentNode || {}).firstChild, t)
    },
    children: function(t) {
        return se.sibling(t.firstChild)
    },
    contents: function(t) {
        return se.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : se.merge([], t.childNodes)
    }
}, function(t, e) {
    se.fn[t] = function(n, i) {
        var r = se.map(this, e, n);
        return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = se.filter(i, r)), this.length > 1 && (_e[t] || (r = se.unique(r)), ye.test(t) && (r = r.reverse())), this.pushStack(r)
    }
});
var we = /\S+/g,
    be = {};
se.Callbacks = function(t) {
    t = "string" == typeof t ? be[t] || s(t) : se.extend({}, t);
    var e, n, i, r, o, a, l = [],
        c = !t.once && [],
        u = function(s) {
            for (n = t.memory && s, i = !0, o = a || 0, a = 0, r = l.length, e = !0; l && r > o; o++)
                if (l[o].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                    n = !1;
                    break
                }
            e = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
        },
        d = {
            add: function() {
                if (l) {
                    var i = l.length;
                    ! function s(e) {
                        se.each(e, function(e, n) {
                            var i = se.type(n);
                            "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && s(n)
                        })
                    }(arguments), e ? r = l.length : n && (a = i, u(n))
                }
                return this
            },
            remove: function() {
                return l && se.each(arguments, function(t, n) {
                    for (var i;
                        (i = se.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (r >= i && r--, o >= i && o--)
                }), this
            },
            has: function(t) {
                return t ? se.inArray(t, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [], r = 0, this
            },
            disable: function() {
                return l = c = n = void 0, this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return c = void 0, n || d.disable(), this
            },
            locked: function() {
                return !c
            },
            fireWith: function(t, n) {
                return !l || i && !c || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? c.push(n) : u(n)), this
            },
            fire: function() {
                return d.fireWith(this, arguments), this
            },
            fired: function() {
                return !!i
            }
        };
    return d
}, se.extend({
    Deferred: function(t) {
        var e = [
                ["resolve", "done", se.Callbacks("once memory"), "resolved"],
                ["reject", "fail", se.Callbacks("once memory"), "rejected"],
                ["notify", "progress", se.Callbacks("memory")]
            ],
            n = "pending",
            i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments), this
                },
                then: function() {
                    var t = arguments;
                    return se.Deferred(function(n) {
                        se.each(e, function(e, s) {
                            var o = se.isFunction(t[e]) && t[e];
                            r[s[1]](function() {
                                var t = o && o.apply(this, arguments);
                                t && se.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === i ? n.promise() : this, o ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? se.extend(t, i) : i
                }
            },
            r = {};
        return i.pipe = i.then, se.each(e, function(t, s) {
            var o = s[2],
                a = s[3];
            i[s[1]] = o.add, a && o.add(function() {
                n = a
            }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
                return r[s[0] + "With"](this === r ? i : this, arguments), this
            }, r[s[0] + "With"] = o.fireWith
        }), i.promise(r), t && t.call(r, r), r
    },
    when: function(t) {
        var e, n, i, r = 0,
            s = X.call(arguments),
            o = s.length,
            a = 1 !== o || t && se.isFunction(t.promise) ? o : 0,
            l = 1 === a ? t : se.Deferred(),
            c = function(t, n, i) {
                return function(r) {
                    n[t] = this, i[t] = arguments.length > 1 ? X.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
        if (o > 1)
            for (e = new Array(o), n = new Array(o), i = new Array(o); o > r; r++) s[r] && se.isFunction(s[r].promise) ? s[r].promise().done(c(r, i, s)).fail(l.reject).progress(c(r, n, e)) : --a;
        return a || l.resolveWith(i, s), l.promise()
    }
});
var Ce;
se.fn.ready = function(t) {
    return se.ready.promise().done(t), this
}, se.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(t) {
        t ? se.readyWait++ : se.ready(!0)
    },
    ready: function(t) {
        if (t === !0 ? !--se.readyWait : !se.isReady) {
            if (!me.body) return setTimeout(se.ready);
            se.isReady = !0, t !== !0 && --se.readyWait > 0 || (Ce.resolveWith(me, [se]), se.fn.trigger && se(me).trigger("ready").off("ready"))
        }
    }
}), se.ready.promise = function(e) {
    if (!Ce)
        if (Ce = se.Deferred(), "complete" === me.readyState) setTimeout(se.ready);
        else if (me.addEventListener) me.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
    else {
        me.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
        var n = !1;
        try {
            n = null == t.frameElement && me.documentElement
        } catch (i) {}
        n && n.doScroll && ! function r() {
            if (!se.isReady) {
                try {
                    n.doScroll("left")
                } catch (t) {
                    return setTimeout(r, 50)
                }
                o(), se.ready()
            }
        }()
    }
    return Ce.promise(e)
};
var xe, Se = "undefined";
for (xe in se(ie)) break;
ie.ownLast = "0" !== xe, ie.inlineBlockNeedsLayout = !1, se(function() {
        var t, e, n = me.getElementsByTagName("body")[0];
        n && (t = me.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", e = me.createElement("div"), n.appendChild(t).appendChild(e), typeof e.style.zoom !== Se && (e.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ie.inlineBlockNeedsLayout = 3 === e.offsetWidth) && (n.style.zoom = 1)), n.removeChild(t), t = e = null)
    }),
    function() {
        var t = me.createElement("div");
        if (null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ie.deleteExpando = !1
            }
        }
        t = null
    }(), se.acceptData = function(t) {
        var e = se.noData[(t.nodeName + " ").toLowerCase()],
            n = +t.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Te = /([A-Z])/g;
se.extend({
    cache: {},
    noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(t) {
        return t = t.nodeType ? se.cache[t[se.expando]] : t[se.expando], !!t && !c(t)
    },
    data: function(t, e, n) {
        return u(t, e, n)
    },
    removeData: function(t, e) {
        return d(t, e)
    },
    _data: function(t, e, n) {
        return u(t, e, n, !0)
    },
    _removeData: function(t, e) {
        return d(t, e, !0)
    }
}), se.fn.extend({
    data: function(t, e) {
        var n, i, r, s = this[0],
            o = s && s.attributes;
        if (void 0 === t) {
            if (this.length && (r = se.data(s), 1 === s.nodeType && !se._data(s, "parsedAttrs"))) {
                for (n = o.length; n--;) i = o[n].name, 0 === i.indexOf("data-") && (i = se.camelCase(i.slice(5)), l(s, i, r[i]));
                se._data(s, "parsedAttrs", !0)
            }
            return r
        }
        return "object" == typeof t ? this.each(function() {
            se.data(this, t)
        }) : arguments.length > 1 ? this.each(function() {
            se.data(this, t, e)
        }) : s ? l(s, t, se.data(s, t)) : void 0
    },
    removeData: function(t) {
        return this.each(function() {
            se.removeData(this, t)
        })
    }
}), se.extend({
    queue: function(t, e, n) {
        var i;
        return t ? (e = (e || "fx") + "queue", i = se._data(t, e), n && (!i || se.isArray(n) ? i = se._data(t, e, se.makeArray(n)) : i.push(n)), i || []) : void 0
    },
    dequeue: function(t, e) {
        e = e || "fx";
        var n = se.queue(t, e),
            i = n.length,
            r = n.shift(),
            s = se._queueHooks(t, e),
            o = function() {
                se.dequeue(t, e)
            };
        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire()
    },
    _queueHooks: function(t, e) {
        var n = e + "queueHooks";
        return se._data(t, n) || se._data(t, n, {
            empty: se.Callbacks("once memory").add(function() {
                se._removeData(t, e + "queue"), se._removeData(t, n)
            })
        })
    }
}), se.fn.extend({
    queue: function(t, e) {
        var n = 2;
        return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? se.queue(this[0], t) : void 0 === e ? this : this.each(function() {
            var n = se.queue(this, t, e);
            se._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && se.dequeue(this, t)
        })
    },
    dequeue: function(t) {
        return this.each(function() {
            se.dequeue(this, t)
        })
    },
    clearQueue: function(t) {
        return this.queue(t || "fx", [])
    },
    promise: function(t, e) {
        var n, i = 1,
            r = se.Deferred(),
            s = this,
            o = this.length,
            a = function() {
                --i || r.resolveWith(s, [s])
            };
        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) n = se._data(s[o], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
        return a(), r.promise(e)
    }
});
var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Pe = ["Top", "Right", "Bottom", "Left"],
    Le = function(t, e) {
        return t = e || t, "none" === se.css(t, "display") || !se.contains(t.ownerDocument, t)
    },
    Ee = se.access = function(t, e, n, i, r, s, o) {
        var a = 0,
            l = t.length,
            c = null == n;
        if ("object" === se.type(n)) {
            r = !0;
            for (a in n) se.access(t, e, a, n[a], !0, s, o)
        } else if (void 0 !== i && (r = !0, se.isFunction(i) || (o = !0), c && (o ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                return c.call(se(t), n)
            })), e))
            for (; l > a; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : c ? e.call(t) : l ? e(t[0], n) : s
    },
    Ae = /^(?:checkbox|radio)$/i;
! function() {
    var t = me.createDocumentFragment(),
        e = me.createElement("div"),
        n = me.createElement("input");
    if (e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ie.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
            ie.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
        ie.deleteExpando = !0;
        try {
            delete e.test
        } catch (i) {
            ie.deleteExpando = !1
        }
    }
    t = e = n = null
}(),
function() {
    var e, n, i = me.createElement("div");
    for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + e, (ie[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ie[e + "Bubbles"] = i.attributes[n].expando === !1);
    i = null
}();
var Ie = /^(?:input|select|textarea)$/i,
    $e = /^key/,
    De = /^(?:mouse|contextmenu)|click/,
    Oe = /^(?:focusinfocus|focusoutblur)$/,
    Ve = /^([^.]*)(?:\.(.+)|)$/;
se.event = {
    global: {},
    add: function(t, e, n, i, r) {
        var s, o, a, l, c, u, d, h, p, f, m, v = se._data(t);
        if (v) {
            for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = se.guid++), (o = v.events) || (o = v.events = {}), (u = v.handle) || (u = v.handle = function(t) {
                    return typeof se === Se || t && se.event.triggered === t.type ? void 0 : se.event.dispatch.apply(u.elem, arguments)
                }, u.elem = t), e = (e || "").match(we) || [""], a = e.length; a--;) s = Ve.exec(e[a]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p && (c = se.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = se.event.special[p] || {}, d = se.extend({
                type: p,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && se.expr.match.needsContext.test(r),
                namespace: f.join(".")
            }, l), (h = o[p]) || (h = o[p] = [], h.delegateCount = 0, c.setup && c.setup.call(t, i, f, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), se.event.global[p] = !0);
            t = null
        }
    },
    remove: function(t, e, n, i, r) {
        var s, o, a, l, c, u, d, h, p, f, m, v = se.hasData(t) && se._data(t);
        if (v && (u = v.events)) {
            for (e = (e || "").match(we) || [""], c = e.length; c--;)
                if (a = Ve.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (d = se.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--;) o = h[s], !r && m !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, d.remove && d.remove.call(t, o));
                    l && !h.length && (d.teardown && d.teardown.call(t, f, v.handle) !== !1 || se.removeEvent(t, p, v.handle), delete u[p])
                } else
                    for (p in u) se.event.remove(t, p + e[c], n, i, !0);
            se.isEmptyObject(u) && (delete v.handle, se._removeData(t, "events"))
        }
    },
    trigger: function(e, n, i, r) {
        var s, o, a, l, c, u, d, h = [i || me],
            p = ee.call(e, "type") ? e.type : e,
            f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
        if (a = u = i = i || me, 3 !== i.nodeType && 8 !== i.nodeType && !Oe.test(p + se.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, e = e[se.expando] ? e : new se.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : se.makeArray(n, [e]), c = se.event.special[p] || {}, r || !c.trigger || c.trigger.apply(i, n) !== !1)) {
            if (!r && !c.noBubble && !se.isWindow(i)) {
                for (l = c.delegateType || p, Oe.test(l + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), u = a;
                u === (i.ownerDocument || me) && h.push(u.defaultView || u.parentWindow || t)
            }
            for (d = 0;
                (a = h[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l : c.bindType || p, s = (se._data(a, "events") || {})[e.type] && se._data(a, "handle"), s && s.apply(a, n), s = o && a[o], s && s.apply && se.acceptData(a) && (e.result = s.apply(a, n), e.result === !1 && e.preventDefault());
            if (e.type = p, !r && !e.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), n) === !1) && se.acceptData(i) && o && i[p] && !se.isWindow(i)) {
                u = i[o], u && (i[o] = null), se.event.triggered = p;
                try {
                    i[p]()
                } catch (m) {}
                se.event.triggered = void 0, u && (i[o] = u)
            }
            return e.result
        }
    },
    dispatch: function(t) {
        t = se.event.fix(t);
        var e, n, i, r, s, o = [],
            a = X.call(arguments),
            l = (se._data(this, "events") || {})[t.type] || [],
            c = se.event.special[t.type] || {};
        if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
            for (o = se.event.handlers.call(this, t, l), e = 0;
                (r = o[e++]) && !t.isPropagationStopped();)
                for (t.currentTarget = r.elem, s = 0;
                    (i = r.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((se.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, t), t.result
        }
    },
    handlers: function(t, e) {
        var n, i, r, s, o = [],
            a = e.delegateCount,
            l = t.target;
        if (a && l.nodeType && (!t.button || "click" !== t.type))
            for (; l != this; l = l.parentNode || this)
                if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                    for (r = [], s = 0; a > s; s++) i = e[s], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? se(n, this).index(l) >= 0 : se.find(n, this, null, [l]).length), r[n] && r.push(i);
                    r.length && o.push({
                        elem: l,
                        handlers: r
                    })
                }
        return a < e.length && o.push({
            elem: this,
            handlers: e.slice(a)
        }), o
    },
    fix: function(t) {
        if (t[se.expando]) return t;
        var e, n, i, r = t.type,
            s = t,
            o = this.fixHooks[r];
        for (o || (this.fixHooks[r] = o = De.test(r) ? this.mouseHooks : $e.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, t = new se.Event(s), e = i.length; e--;) n = i[e], t[n] = s[n];
        return t.target || (t.target = s.srcElement || me), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, s) : t
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(t, e) {
            return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
        }
    },
    mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(t, e) {
            var n, i, r, s = e.button,
                o = e.fromElement;
            return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || me, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
        }
    },
    special: {
        load: {
            noBubble: !0
        },
        focus: {
            trigger: function() {
                if (this !== f() && this.focus) try {
                    return this.focus(), !1
                } catch (t) {}
            },
            delegateType: "focusin"
        },
        blur: {
            trigger: function() {
                return this === f() && this.blur ? (this.blur(), !1) : void 0
            },
            delegateType: "focusout"
        },
        click: {
            trigger: function() {
                return se.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
            },
            _default: function(t) {
                return se.nodeName(t.target, "a")
            }
        },
        beforeunload: {
            postDispatch: function(t) {
                void 0 !== t.result && (t.originalEvent.returnValue = t.result)
            }
        }
    },
    simulate: function(t, e, n, i) {
        var r = se.extend(new se.Event, n, {
            type: t,
            isSimulated: !0,
            originalEvent: {}
        });
        i ? se.event.trigger(r, null, e) : se.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
    }
}, se.removeEvent = me.removeEventListener ? function(t, e, n) {
    t.removeEventListener && t.removeEventListener(e, n, !1)
} : function(t, e, n) {
    var i = "on" + e;
    t.detachEvent && (typeof t[i] === Se && (t[i] = null), t.detachEvent(i, n))
}, se.Event = function(t, e) {
    return this instanceof se.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && (t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault()) ? h : p) : this.type = t, e && se.extend(this, e), this.timeStamp = t && t.timeStamp || se.now(), void(this[se.expando] = !0)) : new se.Event(t, e)
}, se.Event.prototype = {
    isDefaultPrevented: p,
    isPropagationStopped: p,
    isImmediatePropagationStopped: p,
    preventDefault: function() {
        var t = this.originalEvent;
        this.isDefaultPrevented = h, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
    },
    stopPropagation: function() {
        var t = this.originalEvent;
        this.isPropagationStopped = h, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = h, this.stopPropagation()
    }
}, se.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
}, function(t, e) {
    se.event.special[t] = {
        delegateType: e,
        bindType: e,
        handle: function(t) {
            var n, i = this,
                r = t.relatedTarget,
                s = t.handleObj;
            return (!r || r !== i && !se.contains(i, r)) && (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
        }
    }
}), ie.submitBubbles || (se.event.special.submit = {
    setup: function() {
        return se.nodeName(this, "form") ? !1 : void se.event.add(this, "click._submit keypress._submit", function(t) {
            var e = t.target,
                n = se.nodeName(e, "input") || se.nodeName(e, "button") ? e.form : void 0;
            n && !se._data(n, "submitBubbles") && (se.event.add(n, "submit._submit", function(t) {
                t._submit_bubble = !0
            }), se._data(n, "submitBubbles", !0))
        })
    },
    postDispatch: function(t) {
        t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && se.event.simulate("submit", this.parentNode, t, !0))
    },
    teardown: function() {
        return se.nodeName(this, "form") ? !1 : void se.event.remove(this, "._submit")
    }
}), ie.changeBubbles || (se.event.special.change = {
    setup: function() {
        return Ie.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (se.event.add(this, "propertychange._change", function(t) {
            "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
        }), se.event.add(this, "click._change", function(t) {
            this._just_changed && !t.isTrigger && (this._just_changed = !1), se.event.simulate("change", this, t, !0)
        })), !1) : void se.event.add(this, "beforeactivate._change", function(t) {
            var e = t.target;
            Ie.test(e.nodeName) && !se._data(e, "changeBubbles") && (se.event.add(e, "change._change", function(t) {
                !this.parentNode || t.isSimulated || t.isTrigger || se.event.simulate("change", this.parentNode, t, !0)
            }), se._data(e, "changeBubbles", !0))
        })
    },
    handle: function(t) {
        var e = t.target;
        return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function() {
        return se.event.remove(this, "._change"), !Ie.test(this.nodeName)
    }
}), ie.focusinBubbles || se.each({
    focus: "focusin",
    blur: "focusout"
}, function(t, e) {
    var n = function(t) {
        se.event.simulate(e, t.target, se.event.fix(t), !0)
    };
    se.event.special[e] = {
        setup: function() {
            var i = this.ownerDocument || this,
                r = se._data(i, e);
            r || i.addEventListener(t, n, !0), se._data(i, e, (r || 0) + 1)
        },
        teardown: function() {
            var i = this.ownerDocument || this,
                r = se._data(i, e) - 1;
            r ? se._data(i, e, r) : (i.removeEventListener(t, n, !0), se._removeData(i, e))
        }
    }
}), se.fn.extend({
    on: function(t, e, n, i, r) {
        var s, o;
        if ("object" == typeof t) {
            "string" != typeof e && (n = n || e, e = void 0);
            for (s in t) this.on(s, e, n, t[s], r);
            return this
        }
        if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = p;
        else if (!i) return this;
        return 1 === r && (o = i, i = function(t) {
            return se().off(t), o.apply(this, arguments)
        }, i.guid = o.guid || (o.guid = se.guid++)), this.each(function() {
            se.event.add(this, t, i, n, e)
        })
    },
    one: function(t, e, n, i) {
        return this.on(t, e, n, i, 1)
    },
    off: function(t, e, n) {
        var i, r;
        if (t && t.preventDefault && t.handleObj) return i = t.handleObj, se(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof t) {
            for (r in t) this.off(r, e, t[r]);
            return this
        }
        return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = p), this.each(function() {
            se.event.remove(this, t, n, e)
        })
    },
    trigger: function(t, e) {
        return this.each(function() {
            se.event.trigger(t, e, this)
        })
    },
    triggerHandler: function(t, e) {
        var n = this[0];
        return n ? se.event.trigger(t, e, n, !0) : void 0
    }
});
var Be = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    je = / jQuery\d+="(?:null|\d+)"/g,
    Ne = new RegExp("<(?:" + Be + ")[\\s/>]", "i"),
    He = /^\s+/,
    Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Fe = /<([\w:]+)/,
    ze = /<tbody/i,
    qe = /<|&#?\w+;/,
    Je = /<(?:script|style|link)/i,
    Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
    We = /^$|\/(?:java|ecma)script/i,
    Ge = /^true\/(.*)/,
    Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Ze = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Qe = m(me),
    Ke = Qe.appendChild(me.createElement("div"));
Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td, se.extend({
    clone: function(t, e, n) {
        var i, r, s, o, a, l = se.contains(t.ownerDocument, t);
        if (ie.html5Clone || se.isXMLDoc(t) || !Ne.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (Ke.innerHTML = t.outerHTML, Ke.removeChild(s = Ke.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || se.isXMLDoc(t)))
            for (i = v(s), a = v(t), o = 0; null != (r = a[o]); ++o) i[o] && x(r, i[o]);
        if (e)
            if (n)
                for (a = a || v(t), i = i || v(s), o = 0; null != (r = a[o]); o++) C(r, i[o]);
            else C(t, s);
        return i = v(s, "script"), i.length > 0 && b(i, !l && v(t, "script")), i = a = r = null, s
    },
    buildFragment: function(t, e, n, i) {
        for (var r, s, o, a, l, c, u, d = t.length, h = m(e), p = [], f = 0; d > f; f++)
            if (s = t[f], s || 0 === s)
                if ("object" === se.type(s)) se.merge(p, s.nodeType ? [s] : s);
                else if (qe.test(s)) {
            for (a = a || h.appendChild(e.createElement("div")), l = (Fe.exec(s) || ["", ""])[1].toLowerCase(), u = Ze[l] || Ze._default, a.innerHTML = u[1] + s.replace(Re, "<$1></$2>") + u[2], r = u[0]; r--;) a = a.lastChild;
            if (!ie.leadingWhitespace && He.test(s) && p.push(e.createTextNode(He.exec(s)[0])), !ie.tbody)
                for (s = "table" !== l || ze.test(s) ? "<table>" !== u[1] || ze.test(s) ? 0 : a : a.firstChild, r = s && s.childNodes.length; r--;) se.nodeName(c = s.childNodes[r], "tbody") && !c.childNodes.length && s.removeChild(c);
            for (se.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
            a = h.lastChild
        } else p.push(e.createTextNode(s));
        for (a && h.removeChild(a), ie.appendChecked || se.grep(v(p, "input"), g), f = 0; s = p[f++];)
            if ((!i || -1 === se.inArray(s, i)) && (o = se.contains(s.ownerDocument, s), a = v(h.appendChild(s), "script"), o && b(a), n))
                for (r = 0; s = a[r++];) We.test(s.type || "") && n.push(s);
        return a = null, h
    },
    cleanData: function(t, e) {
        for (var n, i, r, s, o = 0, a = se.expando, l = se.cache, c = ie.deleteExpando, u = se.event.special; null != (n = t[o]); o++)
            if ((e || se.acceptData(n)) && (r = n[a], s = r && l[r])) {
                if (s.events)
                    for (i in s.events) u[i] ? se.event.remove(n, i) : se.removeEvent(n, i, s.handle);
                l[r] && (delete l[r], c ? delete n[a] : typeof n.removeAttribute !== Se ? n.removeAttribute(a) : n[a] = null, G.push(r))
            }
    }
}), se.fn.extend({
    text: function(t) {
        return Ee(this, function(t) {
            return void 0 === t ? se.text(this) : this.empty().append((this[0] && this[0].ownerDocument || me).createTextNode(t))
        }, null, t, arguments.length)
    },
    append: function() {
        return this.domManip(arguments, function(t) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var e = y(this, t);
                e.appendChild(t)
            }
        })
    },
    prepend: function() {
        return this.domManip(arguments, function(t) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var e = y(this, t);
                e.insertBefore(t, e.firstChild)
            }
        })
    },
    before: function() {
        return this.domManip(arguments, function(t) {
            this.parentNode && this.parentNode.insertBefore(t, this)
        })
    },
    after: function() {
        return this.domManip(arguments, function(t) {
            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
    },
    remove: function(t, e) {
        for (var n, i = t ? se.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || se.cleanData(v(n)), n.parentNode && (e && se.contains(n.ownerDocument, n) && b(v(n, "script")), n.parentNode.removeChild(n));
        return this
    },
    empty: function() {
        for (var t, e = 0; null != (t = this[e]); e++) {
            for (1 === t.nodeType && se.cleanData(v(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
            t.options && se.nodeName(t, "select") && (t.options.length = 0)
        }
        return this
    },
    clone: function(t, e) {
        return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
            return se.clone(this, t, e)
        })
    },
    html: function(t) {
        return Ee(this, function(t) {
            var e = this[0] || {},
                n = 0,
                i = this.length;
            if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(je, "") : void 0;
            if (!("string" != typeof t || Je.test(t) || !ie.htmlSerialize && Ne.test(t) || !ie.leadingWhitespace && He.test(t) || Ze[(Fe.exec(t) || ["", ""])[1].toLowerCase()])) {
                t = t.replace(Re, "<$1></$2>");
                try {
                    for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (se.cleanData(v(e, !1)), e.innerHTML = t);
                    e = 0
                } catch (r) {}
            }
            e && this.empty().append(t)
        }, null, t, arguments.length)
    },
    replaceWith: function() {
        var t = arguments[0];
        return this.domManip(arguments, function(e) {
            t = this.parentNode, se.cleanData(v(this)), t && t.replaceChild(e, this)
        }), t && (t.length || t.nodeType) ? this : this.remove()
    },
    detach: function(t) {
        return this.remove(t, !0)
    },
    domManip: function(t, e) {
        t = Z.apply([], t);
        var n, i, r, s, o, a, l = 0,
            c = this.length,
            u = this,
            d = c - 1,
            h = t[0],
            p = se.isFunction(h);
        if (p || c > 1 && "string" == typeof h && !ie.checkClone && Ue.test(h)) return this.each(function(n) {
            var i = u.eq(n);
            p && (t[0] = h.call(this, n, i.html())), i.domManip(t, e)
        });
        if (c && (a = se.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
            for (s = se.map(v(a, "script"), _), r = s.length; c > l; l++) i = a, l !== d && (i = se.clone(i, !0, !0), r && se.merge(s, v(i, "script"))), e.call(this[l], i, l);
            if (r)
                for (o = s[s.length - 1].ownerDocument, se.map(s, w), l = 0; r > l; l++) i = s[l], We.test(i.type || "") && !se._data(i, "globalEval") && se.contains(o, i) && (i.src ? se._evalUrl && se._evalUrl(i.src) : se.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Xe, "")));
            a = n = null
        }
        return this
    }
}), se.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
}, function(t, e) {
    se.fn[t] = function(t) {
        for (var n, i = 0, r = [], s = se(t), o = s.length - 1; o >= i; i++) n = i === o ? this : this.clone(!0), se(s[i])[e](n), Q.apply(r, n.get());
        return this.pushStack(r)
    }
});
var Ye, tn = {};
! function() {
    var t, e, n = me.createElement("div"),
        i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(t.style.opacity), ie.cssFloat = !!t.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === n.style.backgroundClip, t = n = null, ie.shrinkWrapBlocks = function() {
        var t, n, r, s;
        if (null == e) {
            if (t = me.getElementsByTagName("body")[0], !t) return;
            s = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = me.createElement("div"), r = me.createElement("div"), t.appendChild(n).appendChild(r), e = !1, typeof r.style.zoom !== Se && (r.style.cssText = i + ";width:1px;padding:1px;zoom:1", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", e = 3 !== r.offsetWidth), t.removeChild(n), t = n = r = null
        }
        return e
    }
}();
var en, nn, rn = /^margin/,
    sn = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"),
    on = /^(top|right|bottom|left)$/;
t.getComputedStyle ? (en = function(t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    }, nn = function(t, e, n) {
        var i, r, s, o, a = t.style;
        return n = n || en(t), o = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== o || se.contains(t.ownerDocument, t) || (o = se.style(t, e)), sn.test(o) && rn.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 === o ? o : o + ""
    }) : me.documentElement.currentStyle && (en = function(t) {
        return t.currentStyle
    }, nn = function(t, e, n) {
        var i, r, s, o, a = t.style;
        return n = n || en(t), o = n ? n[e] : void 0, null == o && a && a[e] && (o = a[e]), sn.test(o) && !on.test(e) && (i = a.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = i, s && (r.left = s)), void 0 === o ? o : o + "" || "auto"
    }), ! function() {
        function e() {
            var e, n, i = me.getElementsByTagName("body")[0];
            i && (e = me.createElement("div"), n = me.createElement("div"), e.style.cssText = c, i.appendChild(e).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", se.swap(i, null != i.style.zoom ? {
                zoom: 1
            } : {}, function() {
                r = 4 === n.offsetWidth
            }), s = !0, o = !1, a = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(n, null) || {}).top, s = "4px" === (t.getComputedStyle(n, null) || {
                width: "4px"
            }).width), i.removeChild(e), n = i = null)
        }
        var n, i, r, s, o, a, l = me.createElement("div"),
            c = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            u = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = l.getElementsByTagName("a")[0], n.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(n.style.opacity), ie.cssFloat = !!n.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === l.style.backgroundClip, n = l = null, se.extend(ie, {
                    reliableHiddenOffsets: function() {
                            if (null != i) return i;var t, e, n, r = me.createElement("div"),
    s = me.getElementsByTagName("body")[0];
return s ? (r.setAttribute("className", "t"), r.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = me.createElement("div"), t.style.cssText = c, s.appendChild(t).appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = r.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", i = n && 0 === e[0].offsetHeight, s.removeChild(t), r = s = null, i) : void 0
}, boxSizing: function() {
return null == r && e(), r
}, boxSizingReliable: function() {
return null == s && e(), s
}, pixelPosition: function() {
return null == o && e(), o
}, reliableMarginRight: function() {
var e, n, i, r;
if (null == a && t.getComputedStyle) {
    if (e = me.getElementsByTagName("body")[0], !e) return;
    n = me.createElement("div"), i = me.createElement("div"), n.style.cssText = c, e.appendChild(n).appendChild(i), r = i.appendChild(me.createElement("div")), r.style.cssText = i.style.cssText = u, r.style.marginRight = r.style.width = "0", i.style.width = "1px", a = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(n)
}
return a
}
})
}(), se.swap = function(t, e, n, i) {
    var r, s, o = {};
    for (s in e) o[s] = t.style[s], t.style[s] = e[s];
    r = n.apply(t, i || []);
    for (s in e) t.style[s] = o[s];
    return r
};
var an = /alpha\([^)]*\)/i,
    ln = /opacity\s*=\s*([^)]*)/,
    cn = /^(none|table(?!-c[ea]).+)/,
    un = new RegExp("^(" + Me + ")(.*)$", "i"),
    dn = new RegExp("^([+-])=(" + Me + ")", "i"),
    hn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    pn = {
        letterSpacing: 0,
        fontWeight: 400
    },
    fn = ["Webkit", "O", "Moz", "ms"];
se.extend({
    cssHooks: {
        opacity: {
            get: function(t, e) {
                if (e) {
                    var n = nn(t, "opacity");
                    return "" === n ? "1" : n
                }
            }
        }
    },
    cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    },
    cssProps: {
        "float": ie.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(t, e, n, i) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var r, s, o, a = se.camelCase(e),
                l = t.style;
            if (e = se.cssProps[a] || (se.cssProps[a] = M(l, a)), o = se.cssHooks[e] || se.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : l[e];
            if (s = typeof n, "string" === s && (r = dn.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(se.css(t, e)), s = "number"), null != n && n === n && ("number" !== s || se.cssNumber[a] || (n += "px"), ie.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(t, n, i))))) try {
                l[e] = "", l[e] = n
            } catch (c) {}
        }
    },
    css: function(t, e, n, i) {
        var r, s, o, a = se.camelCase(e);
        return e = se.cssProps[a] || (se.cssProps[a] = M(t.style, a)), o = se.cssHooks[e] || se.cssHooks[a], o && "get" in o && (s = o.get(t, !0, n)), void 0 === s && (s = nn(t, e, i)), "normal" === s && e in pn && (s = pn[e]), "" === n || n ? (r = parseFloat(s), n === !0 || se.isNumeric(r) ? r || 0 : s) : s
    }
}), se.each(["height", "width"], function(t, e) {
    se.cssHooks[e] = {
        get: function(t, n, i) {
            return n ? 0 === t.offsetWidth && cn.test(se.css(t, "display")) ? se.swap(t, hn, function() {
                return A(t, e, i)
            }) : A(t, e, i) : void 0
        },
        set: function(t, n, i) {
            var r = i && en(t);
            return L(t, n, i ? E(t, e, i, ie.boxSizing() && "border-box" === se.css(t, "boxSizing", !1, r), r) : 0)
        }
    }
}), ie.opacity || (se.cssHooks.opacity = {
    get: function(t, e) {
        return ln.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
    },
    set: function(t, e) {
        var n = t.style,
            i = t.currentStyle,
            r = se.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
            s = i && i.filter || n.filter || "";
        n.zoom = 1, (e >= 1 || "" === e) && "" === se.trim(s.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = an.test(s) ? s.replace(an, r) : s + " " + r)
    }
}), se.cssHooks.marginRight = T(ie.reliableMarginRight, function(t, e) {
    return e ? se.swap(t, {
        display: "inline-block"
    }, nn, [t, "marginRight"]) : void 0
}), se.each({
    margin: "",
    padding: "",
    border: "Width"
}, function(t, e) {
    se.cssHooks[t + e] = {
        expand: function(n) {
            for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Pe[i] + e] = s[i] || s[i - 2] || s[0];
            return r
        }
    }, rn.test(t) || (se.cssHooks[t + e].set = L)
}), se.fn.extend({
    css: function(t, e) {
        return Ee(this, function(t, e, n) {
            var i, r, s = {},
                o = 0;
            if (se.isArray(e)) {
                for (i = en(t), r = e.length; r > o; o++) s[e[o]] = se.css(t, e[o], !1, i);
                return s
            }
            return void 0 !== n ? se.style(t, e, n) : se.css(t, e)
        }, t, e, arguments.length > 1)
    },
    show: function() {
        return P(this, !0)
    },
    hide: function() {
        return P(this)
    },
    toggle: function(t) {
        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
            Le(this) ? se(this).show() : se(this).hide()
        })
    }
}), se.Tween = I, I.prototype = {
    constructor: I,
    init: function(t, e, n, i, r, s) {
        this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (se.cssNumber[n] ? "" : "px")
    },
    cur: function() {
        var t = I.propHooks[this.prop];
        return t && t.get ? t.get(this) : I.propHooks._default.get(this)
    },
    run: function(t) {
        var e, n = I.propHooks[this.prop];
        return this.pos = e = this.options.duration ? se.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
    }
}, I.prototype.init.prototype = I.prototype, I.propHooks = {
    _default: {
        get: function(t) {
            var e;
            return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = se.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
        },
        set: function(t) {
            se.fx.step[t.prop] ? se.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[se.cssProps[t.prop]] || se.cssHooks[t.prop]) ? se.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
        }
    }
}, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
    set: function(t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
    }
}, se.easing = {
    linear: function(t) {
        return t
    },
    swing: function(t) {
        return .5 - Math.cos(t * Math.PI) / 2
    }
}, se.fx = I.prototype.init, se.fx.step = {};
var mn, vn, gn = /^(?:toggle|show|hide)$/,
    yn = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"),
    _n = /queueHooks$/,
    wn = [V],
    bn = {
        "*": [function(t, e) {
            var n = this.createTween(t, e),
                i = n.cur(),
                r = yn.exec(e),
                s = r && r[3] || (se.cssNumber[t] ? "" : "px"),
                o = (se.cssNumber[t] || "px" !== s && +i) && yn.exec(se.css(n.elem, t)),
                a = 1,
                l = 20;
            if (o && o[3] !== s) {
                s = s || o[3], r = r || [], o = +i || 1;
                do a = a || ".5", o /= a, se.style(n.elem, t, o + s); while (a !== (a = n.cur() / i) && 1 !== a && --l)
            }
            return r && (o = n.start = +o || +i || 0, n.unit = s, n.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), n
        }]
    };
se.Animation = se.extend(j, {
        tweener: function(t, e) {
            se.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, r = t.length; r > i; i++) n = t[i], bn[n] = bn[n] || [], bn[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? wn.unshift(t) : wn.push(t)
        }
    }), se.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? se.extend({}, t) : {
            complete: n || !n && e || se.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !se.isFunction(e) && e
        };
        return i.duration = se.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in se.fx.speeds ? se.fx.speeds[i.duration] : se.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            se.isFunction(i.old) && i.old.call(this), i.queue && se.dequeue(this, i.queue)
        }, i
    }, se.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(Le).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var r = se.isEmptyObject(t),
                s = se.speed(e, n, i),
                o = function() {
                    var e = j(this, se.extend({}, t), s);
                    (r || se._data(this, "finish")) && e.stop(!0)
                };
            return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    r = null != t && t + "queueHooks",
                    s = se.timers,
                    o = se._data(this);
                if (r) o[r] && o[r].stop && i(o[r]);
                else
                    for (r in o) o[r] && o[r].stop && _n.test(r) && i(o[r]);
                for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
                (e || !n) && se.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, n = se._data(this),
                    i = n[t + "queue"],
                    r = n[t + "queueHooks"],
                    s = se.timers,
                    o = i ? i.length : 0;
                for (n.finish = !0, se.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; o > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), se.each(["toggle", "show", "hide"], function(t, e) {
        var n = se.fn[e];
        se.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(D(e, !0), t, i, r)
        }
    }), se.each({
        slideDown: D("show"),
        slideUp: D("hide"),
        slideToggle: D("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        se.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), se.timers = [], se.fx.tick = function() {
        var t, e = se.timers,
            n = 0;
        for (mn = se.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
        e.length || se.fx.stop(), mn = void 0
    }, se.fx.timer = function(t) {
        se.timers.push(t), t() ? se.fx.start() : se.timers.pop()
    }, se.fx.interval = 13, se.fx.start = function() {
        vn || (vn = setInterval(se.fx.tick, se.fx.interval))
    }, se.fx.stop = function() {
        clearInterval(vn), vn = null
    }, se.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, se.fn.delay = function(t, e) {
        return t = se.fx ? se.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
            var i = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    },
    function() {
        var t, e, n, i, r = me.createElement("div");
        r.setAttribute("className", "t"), r.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = r.getElementsByTagName("a")[0], n = me.createElement("select"), i = n.appendChild(me.createElement("option")), e = r.getElementsByTagName("input")[0], t.style.cssText = "top:1px", ie.getSetAttribute = "t" !== r.className, ie.style = /top/.test(t.getAttribute("style")), ie.hrefNormalized = "/a" === t.getAttribute("href"), ie.checkOn = !!e.value, ie.optSelected = i.selected, ie.enctype = !!me.createElement("form").enctype, n.disabled = !0, ie.optDisabled = !i.disabled, e = me.createElement("input"), e.setAttribute("value", ""), ie.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ie.radioValue = "t" === e.value, t = e = n = i = r = null
    }();
var Cn = /\r/g;
se.fn.extend({
    val: function(t) {
        var e, n, i, r = this[0];
        return arguments.length ? (i = se.isFunction(t), this.each(function(n) {
            var r;
            1 === this.nodeType && (r = i ? t.call(this, n, se(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : se.isArray(r) && (r = se.map(r, function(t) {
                return null == t ? "" : t + ""
            })), e = se.valHooks[this.type] || se.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
        })) : r ? (e = se.valHooks[r.type] || se.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Cn, "") : null == n ? "" : n)) : void 0
    }
}), se.extend({
    valHooks: {
        option: {
            get: function(t) {
                var e = se.find.attr(t, "value");
                return null != e ? e : se.text(t)
            }
        },
        select: {
            get: function(t) {
                for (var e, n, i = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : i.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                    if (n = i[l], !(!n.selected && l !== r || (ie.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && se.nodeName(n.parentNode, "optgroup"))) {
                        if (e = se(n).val(), s) return e;
                        o.push(e)
                    }
                return o
            },
            set: function(t, e) {
                for (var n, i, r = t.options, s = se.makeArray(e), o = r.length; o--;)
                    if (i = r[o], se.inArray(se.valHooks.option.get(i), s) >= 0) try {
                        i.selected = n = !0
                    } catch (a) {
                        i.scrollHeight
                    } else i.selected = !1;
                return n || (t.selectedIndex = -1), r
            }
        }
    }
}), se.each(["radio", "checkbox"], function() {
    se.valHooks[this] = {
        set: function(t, e) {
            return se.isArray(e) ? t.checked = se.inArray(se(t).val(), e) >= 0 : void 0
        }
    }, ie.checkOn || (se.valHooks[this].get = function(t) {
        return null === t.getAttribute("value") ? "on" : t.value
    })
});
var xn, Sn, kn = se.expr.attrHandle,
    Tn = /^(?:checked|selected)$/i,
    Mn = ie.getSetAttribute,
    Pn = ie.input;
se.fn.extend({
    attr: function(t, e) {
        return Ee(this, se.attr, t, e, arguments.length > 1)
    },
    removeAttr: function(t) {
        return this.each(function() {
            se.removeAttr(this, t)
        })
    }
}), se.extend({
    attr: function(t, e, n) {
        var i, r, s = t.nodeType;
        return t && 3 !== s && 8 !== s && 2 !== s ? typeof t.getAttribute === Se ? se.prop(t, e, n) : (1 === s && se.isXMLDoc(t) || (e = e.toLowerCase(), i = se.attrHooks[e] || (se.expr.match.bool.test(e) ? Sn : xn)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = se.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void se.removeAttr(t, e)) : void 0
    },
    removeAttr: function(t, e) {
        var n, i, r = 0,
            s = e && e.match(we);
        if (s && 1 === t.nodeType)
            for (; n = s[r++];) i = se.propFix[n] || n, se.expr.match.bool.test(n) ? Pn && Mn || !Tn.test(n) ? t[i] = !1 : t[se.camelCase("default-" + n)] = t[i] = !1 : se.attr(t, n, ""), t.removeAttribute(Mn ? n : i)
    },
    attrHooks: {
        type: {
            set: function(t, e) {
                if (!ie.radioValue && "radio" === e && se.nodeName(t, "input")) {
                    var n = t.value;
                    return t.setAttribute("type", e), n && (t.value = n), e
                }
            }
        }
    }
}), Sn = {
    set: function(t, e, n) {
        return e === !1 ? se.removeAttr(t, n) : Pn && Mn || !Tn.test(n) ? t.setAttribute(!Mn && se.propFix[n] || n, n) : t[se.camelCase("default-" + n)] = t[n] = !0, n
    }
}, se.each(se.expr.match.bool.source.match(/\w+/g), function(t, e) {
    var n = kn[e] || se.find.attr;
    kn[e] = Pn && Mn || !Tn.test(e) ? function(t, e, i) {
        var r, s;
        return i || (s = kn[e], kn[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, kn[e] = s), r
    } : function(t, e, n) {
        return n ? void 0 : t[se.camelCase("default-" + e)] ? e.toLowerCase() : null
    }
}), Pn && Mn || (se.attrHooks.value = {
    set: function(t, e, n) {
        return se.nodeName(t, "input") ? void(t.defaultValue = e) : xn && xn.set(t, e, n)
    }
}), Mn || (xn = {
    set: function(t, e, n) {
        var i = t.getAttributeNode(n);
        return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
    }
}, kn.id = kn.name = kn.coords = function(t, e, n) {
    var i;
    return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
}, se.valHooks.button = {
    get: function(t, e) {
        var n = t.getAttributeNode(e);
        return n && n.specified ? n.value : void 0
    },
    set: xn.set
}, se.attrHooks.contenteditable = {
    set: function(t, e, n) {
        xn.set(t, "" === e ? !1 : e, n)
    }
}, se.each(["width", "height"], function(t, e) {
    se.attrHooks[e] = {
        set: function(t, n) {
            return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
        }
    }
})), ie.style || (se.attrHooks.style = {
    get: function(t) {
        return t.style.cssText || void 0
    },
    set: function(t, e) {
        return t.style.cssText = e + ""
    }
});
var Ln = /^(?:input|select|textarea|button|object)$/i,
    En = /^(?:a|area)$/i;
se.fn.extend({
    prop: function(t, e) {
        return Ee(this, se.prop, t, e, arguments.length > 1)
    },
    removeProp: function(t) {
        return t = se.propFix[t] || t, this.each(function() {
            try {
                this[t] = void 0, delete this[t]
            } catch (e) {}
        })
    }
}), se.extend({
    propFix: {
        "for": "htmlFor",
        "class": "className"
    },
    prop: function(t, e, n) {
        var i, r, s, o = t.nodeType;
        return t && 3 !== o && 8 !== o && 2 !== o ? (s = 1 !== o || !se.isXMLDoc(t), s && (e = se.propFix[e] || e, r = se.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]) : void 0
    },
    propHooks: {
        tabIndex: {
            get: function(t) {
                var e = se.find.attr(t, "tabindex");
                return e ? parseInt(e, 10) : Ln.test(t.nodeName) || En.test(t.nodeName) && t.href ? 0 : -1
            }
        }
    }
}), ie.hrefNormalized || se.each(["href", "src"], function(t, e) {
    se.propHooks[e] = {
        get: function(t) {
            return t.getAttribute(e, 4)
        }
    }
}), ie.optSelected || (se.propHooks.selected = {
    get: function(t) {
        var e = t.parentNode;
        return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
    }
}), se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    se.propFix[this.toLowerCase()] = this
}), ie.enctype || (se.propFix.enctype = "encoding");
var An = /[\t\r\n\f]/g;
se.fn.extend({
    addClass: function(t) {
        var e, n, i, r, s, o, a = 0,
            l = this.length,
            c = "string" == typeof t && t;
        if (se.isFunction(t)) return this.each(function(e) {
            se(this).addClass(t.call(this, e, this.className))
        });
        if (c)
            for (e = (t || "").match(we) || []; l > a; a++)
                if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : " ")) {
                    for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                    o = se.trim(i), n.className !== o && (n.className = o)
                }
        return this
    },
    removeClass: function(t) {
        var e, n, i, r, s, o, a = 0,
            l = this.length,
            c = 0 === arguments.length || "string" == typeof t && t;
        if (se.isFunction(t)) return this.each(function(e) {
            se(this).removeClass(t.call(this, e, this.className))
        });
        if (c)
            for (e = (t || "").match(we) || []; l > a; a++)
                if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : "")) {
                    for (s = 0; r = e[s++];)
                        for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                    o = t ? se.trim(i) : "", n.className !== o && (n.className = o)
                }
        return this
    },
    toggleClass: function(t, e) {
        var n = typeof t;
        return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(se.isFunction(t) ? function(n) {
            se(this).toggleClass(t.call(this, n, this.className, e), e)
        } : function() {
            if ("string" === n)
                for (var e, i = 0, r = se(this), s = t.match(we) || []; e = s[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
            else(n === Se || "boolean" === n) && (this.className && se._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : se._data(this, "__className__") || "")
        })
    },
    hasClass: function(t) {
        for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
            if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(An, " ").indexOf(e) >= 0) return !0;
        return !1
    }
}), se.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
    se.fn[e] = function(t, n) {
        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
    }
}), se.fn.extend({
    hover: function(t, e) {
        return this.mouseenter(t).mouseleave(e || t)
    },
    bind: function(t, e, n) {
        return this.on(t, null, e, n)
    },
    unbind: function(t, e) {
        return this.off(t, null, e)
    },
    delegate: function(t, e, n, i) {
        return this.on(e, t, n, i)
    },
    undelegate: function(t, e, n) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
    }
});
var In = se.now(),
    $n = /\?/,
    Dn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
se.parseJSON = function(e) {
    if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
    var n, i = null,
        r = se.trim(e + "");
    return r && !se.trim(r.replace(Dn, function(t, e, r, s) {
        return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !s - !r, "")
    })) ? Function("return " + r)() : se.error("Invalid JSON: " + e)
}, se.parseXML = function(e) {
    var n, i;
    if (!e || "string" != typeof e) return null;
    try {
        t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
    } catch (r) {
        n = void 0
    }
    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || se.error("Invalid XML: " + e), n
};
var On, Vn, Bn = /#.*$/,
    jn = /([?&])_=[^&]*/,
    Nn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Hn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Rn = /^(?:GET|HEAD)$/,
    Fn = /^\/\//,
    zn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    qn = {},
    Jn = {},
    Un = "*/".concat("*");
try {
    Vn = location.href
} catch (Wn) {
    Vn = me.createElement("a"), Vn.href = "", Vn = Vn.href
}
On = zn.exec(Vn.toLowerCase()) || [], se.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
        url: Vn,
        type: "GET",
        isLocal: Hn.test(On[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
            "*": Un,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
        },
        contents: {
            xml: /xml/,
            html: /html/,
            json: /json/
        },
        responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
        },
        converters: {
            "* text": String,
            "text html": !0,
            "text json": se.parseJSON,
            "text xml": se.parseXML
        },
        flatOptions: {
            url: !0,
            context: !0
        }
    },
    ajaxSetup: function(t, e) {
        return e ? R(R(t, se.ajaxSettings), e) : R(se.ajaxSettings, t)
    },
    ajaxPrefilter: N(qn),
    ajaxTransport: N(Jn),
    ajax: function(t, e) {
        function n(t, e, n, i) {
            var r, u, g, y, w, C = e;
            2 !== _ && (_ = 2, a && clearTimeout(a), c = void 0, o = i || "", b.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (y = F(d, b, n)), y = z(d, y, b, r), r ? (d.ifModified && (w = b.getResponseHeader("Last-Modified"), w && (se.lastModified[s] = w), w = b.getResponseHeader("etag"), w && (se.etag[s] = w)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, u = y.data, g = y.error, r = !g)) : (g = C, (t || !C) && (C = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || C) + "", r ? f.resolveWith(h, [u, C, b]) : f.rejectWith(h, [b, C, g]), b.statusCode(v), v = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [b, d, r ? u : g]), m.fireWith(h, [b, C]), l && (p.trigger("ajaxComplete", [b, d]), --se.active || se.event.trigger("ajaxStop")))
        }
        "object" == typeof t && (e = t, t = void 0), e = e || {};
        var i, r, s, o, a, l, c, u, d = se.ajaxSetup({}, e),
            h = d.context || d,
            p = d.context && (h.nodeType || h.jquery) ? se(h) : se.event,
            f = se.Deferred(),
            m = se.Callbacks("once memory"),
            v = d.statusCode || {},
            g = {},
            y = {},
            _ = 0,
            w = "canceled",
            b = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === _) {
                        if (!u)
                            for (u = {}; e = Nn.exec(o);) u[e[1].toLowerCase()] = e[2];
                        e = u[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === _ ? o : null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return _ || (t = y[n] = y[n] || t, g[t] = e), this
                },
                overrideMimeType: function(t) {
                    return _ || (d.mimeType = t), this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > _)
                            for (e in t) v[e] = [v[e], t[e]];
                        else b.always(t[b.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || w;
                    return c && c.abort(e), n(0, e), this
                }
            };
        if (f.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, d.url = ((t || d.url || Vn) + "").replace(Bn, "").replace(Fn, On[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = se.trim(d.dataType || "*").toLowerCase().match(we) || [""], null == d.crossDomain && (i = zn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === On[1] && i[2] === On[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (On[3] || ("http:" === On[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = se.param(d.data, d.traditional)), H(qn, d, e, b), 2 === _) return b;
        l = d.global, l && 0 === se.active++ && se.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rn.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += ($n.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = jn.test(s) ? s.replace(jn, "$1_=" + In++) : s + ($n.test(s) ? "&" : "?") + "_=" + In++)), d.ifModified && (se.lastModified[s] && b.setRequestHeader("If-Modified-Since", se.lastModified[s]), se.etag[s] && b.setRequestHeader("If-None-Match", se.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", d.contentType), b.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Un + "; q=0.01" : "") : d.accepts["*"]);
        for (r in d.headers) b.setRequestHeader(r, d.headers[r]);
        if (d.beforeSend && (d.beforeSend.call(h, b, d) === !1 || 2 === _)) return b.abort();
        w = "abort";
        for (r in {
                success: 1,
                error: 1,
                complete: 1
            }) b[r](d[r]);
        if (c = H(Jn, d, e, b)) {
            b.readyState = 1, l && p.trigger("ajaxSend", [b, d]), d.async && d.timeout > 0 && (a = setTimeout(function() {
                b.abort("timeout")
            }, d.timeout));
            try {
                _ = 1, c.send(g, n)
            } catch (C) {
                if (!(2 > _)) throw C;
                n(-1, C)
            }
        } else n(-1, "No Transport");
        return b
    },
    getJSON: function(t, e, n) {
        return se.get(t, e, n, "json")
    },
    getScript: function(t, e) {
        return se.get(t, void 0, e, "script")
    }
}), se.each(["get", "post"], function(t, e) {
    se[e] = function(t, n, i, r) {
        return se.isFunction(n) && (r = r || i, i = n, n = void 0), se.ajax({
            url: t,
            type: e,
            dataType: r,
            data: n,
            success: i
        })
    }
}), se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
    se.fn[e] = function(t) {
        return this.on(e, t)
    }
}), se._evalUrl = function(t) {
    return se.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
    })
}, se.fn.extend({
    wrapAll: function(t) {
        if (se.isFunction(t)) return this.each(function(e) {
            se(this).wrapAll(t.call(this, e))
        });
        if (this[0]) {
            var e = se(t, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                return t
            }).append(this)
        }
        return this
    },
    wrapInner: function(t) {
        return this.each(se.isFunction(t) ? function(e) {
            se(this).wrapInner(t.call(this, e))
        } : function() {
            var e = se(this),
                n = e.contents();
            n.length ? n.wrapAll(t) : e.append(t)
        })
    },
    wrap: function(t) {
        var e = se.isFunction(t);
        return this.each(function(n) {
            se(this).wrapAll(e ? t.call(this, n) : t)
        })
    },
    unwrap: function() {
        return this.parent().each(function() {
            se.nodeName(this, "body") || se(this).replaceWith(this.childNodes)
        }).end()
    }
}), se.expr.filters.hidden = function(t) {
    return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || se.css(t, "display"))
}, se.expr.filters.visible = function(t) {
    return !se.expr.filters.hidden(t)
};
var Gn = /%20/g,
    Xn = /\[\]$/,
    Zn = /\r?\n/g,
    Qn = /^(?:submit|button|image|reset|file)$/i,
    Kn = /^(?:input|select|textarea|keygen)/i;
se.param = function(t, e) {
    var n, i = [],
        r = function(t, e) {
            e = se.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
    if (void 0 === e && (e = se.ajaxSettings && se.ajaxSettings.traditional), se.isArray(t) || t.jquery && !se.isPlainObject(t)) se.each(t, function() {
        r(this.name, this.value)
    });
    else
        for (n in t) q(n, t[n], e, r);
    return i.join("&").replace(Gn, "+")
}, se.fn.extend({
    serialize: function() {
        return se.param(this.serializeArray())
    },
    serializeArray: function() {
        return this.map(function() {
            var t = se.prop(this, "elements");
            return t ? se.makeArray(t) : this
        }).filter(function() {
            var t = this.type;
            return this.name && !se(this).is(":disabled") && Kn.test(this.nodeName) && !Qn.test(t) && (this.checked || !Ae.test(t))
        }).map(function(t, e) {
            var n = se(this).val();
            return null == n ? null : se.isArray(n) ? se.map(n, function(t) {
                return {
                    name: e.name,
                    value: t.replace(Zn, "\r\n")
                }
            }) : {
                name: e.name,
                value: n.replace(Zn, "\r\n")
            }
        }).get()
    }
}), se.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && J() || U()
} : J;
var Yn = 0,
    ti = {},
    ei = se.ajaxSettings.xhr();
t.ActiveXObject && se(t).on("unload", function() {
    for (var t in ti) ti[t](void 0, !0)
}), ie.cors = !!ei && "withCredentials" in ei, ei = ie.ajax = !!ei, ei && se.ajaxTransport(function(t) {
    if (!t.crossDomain || ie.cors) {
        var e;
        return {
            send: function(n, i) {
                var r, s = t.xhr(),
                    o = ++Yn;
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) s[r] = t.xhrFields[r];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                
                 t.async ? 4 === s.readyState ? setTimeout(e) : s.onreadystatechange = ti[o] = e : e()
            },
            abort: function() {
                e && e(void 0, !0)
            }
        }
    }
}), se.ajaxSetup({
    accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
        script: /(?:java|ecma)script/
    },
    converters: {
        "text script": function(t) {
            return se.globalEval(t), t
        }
    }
}), se.ajaxPrefilter("script", function(t) {
    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
}), se.ajaxTransport("script", function(t) {
    if (t.crossDomain) {
        var e, n = me.head || se("head")[0] || me.documentElement;
        return {
            send: function(i, r) {
                e = me.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                    (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                }, n.insertBefore(e, n.firstChild)
            },
            abort: function() {
                e && e.onload(void 0, !0)
            }
        }
    }
});
var ni = [],
    ii = /(=)\?(?=&|$)|\?\?/;
se.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
        var t = ni.pop() || se.expando + "_" + In++;
        return this[t] = !0, t
    }
}), se.ajaxPrefilter("json jsonp", function(e, n, i) {
    var r, s, o, a = e.jsonp !== !1 && (ii.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(e.data) && "data");
    return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = se.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ii, "$1" + r) : e.jsonp !== !1 && (e.url += ($n.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
        return o || se.error(r + " was not called"), o[0]
    }, e.dataTypes[0] = "json", s = t[r], t[r] = function() {
        o = arguments
    }, i.always(function() {
        t[r] = s, e[r] && (e.jsonpCallback = n.jsonpCallback, ni.push(r)), o && se.isFunction(s) && s(o[0]), o = s = void 0
    }), "script") : void 0
}), se.parseHTML = function(t, e, n) {
    if (!t || "string" != typeof t) return null;
    "boolean" == typeof e && (n = e, e = !1), e = e || me;
    var i = he.exec(t),
        r = !n && [];
    return i ? [e.createElement(i[1])] : (i = se.buildFragment([t], e, r), r && r.length && se(r).remove(), se.merge([], i.childNodes))
};
var ri = se.fn.load;
se.fn.load = function(t, e, n) {
    if ("string" != typeof t && ri) return ri.apply(this, arguments);
    var i, r, s, o = this,
        a = t.indexOf(" ");
    return a >= 0 && (i = t.slice(a, t.length), t = t.slice(0, a)), se.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (s = "POST"), o.length > 0 && se.ajax({
        url: t,
        type: s,
        dataType: "html",
        data: e
    }).done(function(t) {
        r = arguments, o.html(i ? se("<div>").append(se.parseHTML(t)).find(i) : t)
    }).complete(n && function(t, e) {
        o.each(n, r || [t.responseText, e, t])
    }), this
}, se.expr.filters.animated = function(t) {
    return se.grep(se.timers, function(e) {
        return t === e.elem
    }).length
};
var si = t.document.documentElement;
se.offset = {
    setOffset: function(t, e, n) {
        var i, r, s, o, a, l, c, u = se.css(t, "position"),
            d = se(t),
            h = {};
        "static" === u && (t.style.position = "relative"), a = d.offset(), s = se.css(t, "top"), l = se.css(t, "left"), c = ("absolute" === u || "fixed" === u) && se.inArray("auto", [s, l]) > -1, c ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), se.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : d.css(h)
    }
}, se.fn.extend({
    offset: function(t) {
        if (arguments.length) return void 0 === t ? this : this.each(function(e) {
            se.offset.setOffset(this, t, e)
        });
        var e, n, i = {
                top: 0,
                left: 0
            },
            r = this[0],
            s = r && r.ownerDocument;
        return s ? (e = s.documentElement, se.contains(e, r) ? (typeof r.getBoundingClientRect !== Se && (i = r.getBoundingClientRect()), n = W(s), {
            top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
            left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
        }) : i) : void 0
    },
    position: function() {
        if (this[0]) {
            var t, e, n = {
                    top: 0,
                    left: 0
                },
                i = this[0];
            return "fixed" === se.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), se.nodeName(t[0], "html") || (n = t.offset()), n.top += se.css(t[0], "borderTopWidth", !0), n.left += se.css(t[0], "borderLeftWidth", !0)), {
                top: e.top - n.top - se.css(i, "marginTop", !0),
                left: e.left - n.left - se.css(i, "marginLeft", !0)
            }
        }
    },
    offsetParent: function() {
        return this.map(function() {
            for (var t = this.offsetParent || si; t && !se.nodeName(t, "html") && "static" === se.css(t, "position");) t = t.offsetParent;
            return t || si
        })
    }
}), se.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
}, function(t, e) {
    var n = /Y/.test(e);
    se.fn[t] = function(i) {
        return Ee(this, function(t, i, r) {
            var s = W(t);
            return void 0 === r ? s ? e in s ? s[e] : s.document.documentElement[i] : t[i] : void(s ? s.scrollTo(n ? se(s).scrollLeft() : r, n ? r : se(s).scrollTop()) : t[i] = r)
        }, t, i, arguments.length, null)
    }
}), se.each(["top", "left"], function(t, e) {
    se.cssHooks[e] = T(ie.pixelPosition, function(t, n) {
        return n ? (n = nn(t, e), sn.test(n) ? se(t).position()[e] + "px" : n) : void 0
    })
}), se.each({
    Height: "height",
    Width: "width"
}, function(t, e) {
    se.each({
        padding: "inner" + t,
        content: e,
        "": "outer" + t
    }, function(n, i) {
        se.fn[i] = function(i, r) {
            var s = arguments.length && (n || "boolean" != typeof i),
                o = n || (i === !0 || r === !0 ? "margin" : "border");
            return Ee(this, function(e, n, i) {
                var r;
                return se.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? se.css(e, n, o) : se.style(e, n, i, o)
            }, e, s ? i : void 0, s, null)
        }
    })
}), se.fn.size = function() {
    return this.length
}, se.fn.andSelf = se.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return se
});
var oi = t.jQuery,
    ai = t.$;
return se.noConflict = function(e) {
return t.$ === se && (t.$ = ai), e && t.jQuery === se && (t.jQuery = oi), se
}, typeof e === Se && (t.jQuery = t.$ = se), se
}),
function(t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            CSRFProtection: function(e) {
                    var n = t('meta[name="csrf-token"]').attr("content");n && e.setRequestHeader("X-CSRF-Token", n)
}, refreshCSRFTokens: function() {
    var e = t("meta[name=csrf-token]").attr("content"),
        n = t("meta[name=csrf-param]").attr("content");
    t('form input[name="' + n + '"]').val(e)
}, fire: function(e, n, i) {
    var r = t.Event(n);
    return e.trigger(r, i), r.result !== !1
}, confirm: function(t) {
    return confirm(t)
}, ajax: function(e) {
    return t.ajax(e)
}, href: function(t) {
    return t.attr("href")
}, handleRemote: function(i) {
    var r, s, o, a, l, c, u, d;
    if (n.fire(i, "ajax:before")) {
        if (a = i.data("cross-domain"), l = a === e ? null : a, c = i.data("with-credentials") || null, u = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
            r = i.attr("method"), s = i.attr("action"), o = i.serializeArray();
            var h = i.data("ujs:submit-button");
            h && (o.push(h), i.data("ujs:submit-button", null))
        } else i.is(n.inputChangeSelector) ? (r = i.data("method"), s = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", s = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : (r = i.data("method"), s = n.href(i), o = i.data("params") || null);
        return d = {
            type: r || "GET",
            data: o,
            dataType: u,
            beforeSend: function(t, r) {
                return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r]) ? (i.trigger("ajax:send", t), void 0) : !1
            },
            success: function(t, e, n) {
                i.trigger("ajax:success", [t, e, n])
            },
            complete: function(t, e) {
                i.trigger("ajax:complete", [t, e])
            },
            error: function(t, e, n) {
                i.trigger("ajax:error", [t, e, n])
            },
            crossDomain: l
        }, c && (d.xhrFields = {
            withCredentials: c
        }), s && (d.url = s), n.ajax(d)
    }
    return !1
}, handleMethod: function(i) {
    var r = n.href(i),
        s = i.data("method"),
        o = i.attr("target"),
        a = t("meta[name=csrf-token]").attr("content"),
        l = t("meta[name=csrf-param]").attr("content"),
        c = t('<form method="post" action="' + r + '"></form>'),
        u = '<input name="_method" value="' + s + '" type="hidden" />';
    l !== e && a !== e && (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'), o && c.attr("target", o), c.hide().append(u).appendTo("body"), c.submit()
}, formElements: function(e, n) {
    return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
}, disableFormElements: function(e) {
    n.formElements(e, n.disableSelector).each(function() {
        n.disableFormElement(t(this))
    })
}, disableFormElement: function(t) {
    var n, i;
    n = t.is("button") ? "html" : "val", i = t.data("disable-with"), t.data("ujs:enable-with", t[n]()), i !== e && t[n](i), t.prop("disabled", !0)
}, enableFormElements: function(e) {
    n.formElements(e, n.enableSelector).each(function() {
        n.enableFormElement(t(this))
    })
}, enableFormElement: function(t) {
    var e = t.is("button") ? "html" : "val";
    t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
}, allowAction: function(t) {
    var e, i = t.data("confirm"),
        r = !1;
    return i ? (n.fire(t, "confirm") && (r = n.confirm(i), e = n.fire(t, "confirm:complete", [r])), r && e) : !0
}, blankInputs: function(e, n, i) {
    var r, s, o = t(),
        a = n || "input,textarea",
        l = e.find(a);
    return l.each(function() {
        if (r = t(this), s = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !s == !i) {
            if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
            o = o.add(r)
        }
    }), o.length ? o : !1
}, nonBlankInputs: function(t, e) {
    return n.blankInputs(t, e, !0)
}, stopEverything: function(e) {
    return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
}, disableElement: function(t) {
    var i = t.data("disable-with");
    t.data("ujs:enable-with", t.html()), i !== e && t.html(i), t.bind("click.railsDisable", function(t) {
        return n.stopEverything(t)
    })
}, enableElement: function(t) {
    t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
}
}, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
    t.crossDomain || n.CSRFProtection(i)
}), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
    n.enableElement(t(this))
}), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
    n.enableFormElement(t(this))
}), i.delegate(n.linkClickSelector, "click.rails", function(i) {
    var r = t(this),
        s = r.data("method"),
        o = r.data("params"),
        a = i.metaKey || i.ctrlKey;
    if (!n.allowAction(r)) return n.stopEverything(i);
    if (!a && r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== e) {
        if (a && (!s || "GET" === s) && !o) return !0;
        var l = n.handleRemote(r);
        return l === !1 ? n.enableElement(r) : l.error(function() {
            n.enableElement(r)
        }), !1
    }
    return r.data("method") ? (n.handleMethod(r), !1) : void 0
}), i.delegate(n.buttonClickSelector, "click.rails", function(e) {
    var i = t(this);
    if (!n.allowAction(i)) return n.stopEverything(e);
    i.is(n.buttonDisableSelector) && n.disableFormElement(i);
    var r = n.handleRemote(i);
    return r === !1 ? n.enableFormElement(i) : r.error(function() {
        n.enableFormElement(i)
    }), !1
}), i.delegate(n.inputChangeSelector, "change.rails", function(e) {
    var i = t(this);
    return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
}), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
    var r, s, o = t(this),
        a = o.data("remote") !== e;
    if (!n.allowAction(o)) return n.stopEverything(i);
    if (o.attr("novalidate") == e && (r = n.blankInputs(o, n.requiredInputSelector), r && n.fire(o, "ajax:aborted:required", [r]))) return n.stopEverything(i);
    if (a) {
        if (s = n.nonBlankInputs(o, n.fileInputSelector)) {
            setTimeout(function() {
                n.disableFormElements(o)
            }, 13);
            var l = n.fire(o, "ajax:aborted:file", [s]);
            return l || setTimeout(function() {
                n.enableFormElements(o)
            }, 13), l
        }
        return n.handleRemote(o), !1
    }
    setTimeout(function() {
        n.disableFormElements(o)
    }, 13)
}), i.delegate(n.formInputClickSelector, "click.rails", function(e) {
    var i = t(this);
    if (!n.allowAction(i)) return n.stopEverything(e);
    var r = i.attr("name"),
        s = r ? {
            name: r,
            value: i.val()
        } : null;
    i.closest("form").data("ujs:submit-button", s)
}), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(e) {
    this == e.target && n.disableFormElements(t(this))
}), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
    this == e.target && n.enableFormElements(t(this))
}), t(function() {
    n.refreshCSRFTokens()
}))
}(jQuery),
function(t) {
    if (!("EventSource" in t)) {
        var e = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
            n = function(t) {
                function n(t) {
                    s._pollTimer = setTimeout(function() {
                        r.call(s)
                    }, t)
                }

                function r() {
                    try {
                        if (s.readyState == s.CLOSED) return;
                        var t = new XMLHttpRequest;
                        t.open("GET", s.URL, !0), t.setRequestHeader("Accept", "text/event-stream"), t.setRequestHeader("Cache-Control", "no-cache"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), null != a && t.setRequestHeader("Last-Event-ID", a), l = "", t.timeout = 5e4, t.onreadystatechange = function() {
                            if (3 == this.readyState || 4 == this.readyState && 200 == this.status) {
                                s.readyState == s.CONNECTING && (s.readyState = s.OPEN, s.dispatchEvent("open", {
                                    type: "open"
                                }));
                                var t = "";
                                try {
                                    t = this.responseText || ""
                                } catch (r) {}
                                var c = t.substr(l.length).split("\n"),
                                    u = "message",
                                    d = [],
                                    h = 0,
                                    p = "";
                                for (l = t; h < c.length; h++)
                                    if (p = c[h].replace(e, ""), 0 == p.indexOf("event")) u = p.replace(/event:?\s*/, "");
                                    else if (0 == p.indexOf("retry")) retry = parseInt(p.replace(/retry:?\s*/, "")), isNaN(retry) || (o = retry);
                                else if (0 == p.indexOf("data")) d.push(p.replace(/data:?\s*/, ""));
                                else if (0 == p.indexOf("id:")) a = p.replace(/id:?\s*/, "");
                                else if (0 == p.indexOf("id")) a = null;
                                else if ("" == p && d.length) {
                                    var f = new i(d.join("\n"), s.url, a);
                                    s.dispatchEvent(u, f), d = [], u = "message"
                                }
                                4 == this.readyState && n(o)
                            } else s.readyState !== s.CLOSED && (4 == this.readyState ? (s.readyState = s.CONNECTING, s.dispatchEvent("error", {
                                type: "error"
                            }), n(o)) : 0 == this.readyState && n(o))
                        }, t.send(), setTimeout(function() {
                            t.abort()
                        }, t.timeout), s._xhr = t
                    } catch (r) {
                        s.dispatchEvent("error", {
                            type: "error",
                            data: r.message
                        })
                    }
                }
                var s = this,
                    o = 500,
                    a = null,
                    l = "";
                if (!t || "string" != typeof t) throw new SyntaxError("Not enough arguments");
                this.URL = t, this.readyState = this.CONNECTING, this._pollTimer = null, this._xhr = null, r()
            };
        n.prototype = {
            close: function() {
                this.readyState = this.CLOSED, clearInterval(this._pollTimer), this._xhr.abort()
            },
            CONNECTING: 0,
            OPEN: 1,
            CLOSED: 2,
            dispatchEvent: function(t, e) {
                var n = this["_" + t + "Handlers"];
                if (n)
                    for (var i = 0; i < n.length; i++) n[i].call(this, e);
                this["on" + t] && this["on" + t].call(this, e)
            },
            addEventListener: function(t, e) {
                this["_" + t + "Handlers"] || (this["_" + t + "Handlers"] = []), this["_" + t + "Handlers"].push(e)
            },
            removeEventListener: function(t, e) {
                var n = this["_" + t + "Handlers"];
                if (n)
                    for (var i = n.length - 1; i >= 0; --i)
                        if (n[i] === e) {
                            n.splice(i, 1);
                            break
                        }
            },
            onerror: null,
            onmessage: null,
            onopen: null,
            readyState: 0,
            URL: ""
        };
        var i = function(t, e, n) {
            this.data = t, this.origin = e, this.lastEventId = n || ""
        };
        i.prototype = {
            data: null,
            type: "message",
            lastEventId: "",
            origin: ""
        }, "module" in t && (module.exports = n), t.EventSource = n
    }
}(this),
function() {
    window.liveEvents = function(t, e) {
        // this.socket, this.debug = !0, this.log = function(t) {
        // this.debug && console.log(t)
        // }, this.handle = function(t) {
        //     var n, i;
        //     i = void 0;
        //     try {
        //         i = JSON.parse(t.data)
        //     } catch (r) {
        //         return n = r, self.log("Malformed message: " + t)
        //     }
        //     i && e(i)
        // }, this.connect = function() {
        //     var e;
        //     e = this, this.socket = new EventSource(t), socket.onmessage = this.handle, socket.onerror = function(t) {
        //         e.log(t)
        //     }
        // }, this.status = function() {
        //     var t;
        //     t = this, this.socket.readyState
        // }, "undefined" != typeof EventSource && t && this.connect()
    }
}.call(this), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, n, i, r) {
            return jQuery.easing[jQuery.easing.def](t, e, n, i, r)
        },
        easeInQuad: function(t, e, n, i, r) {
            return i * (e /= r) * e + n
        },
        easeOutQuad: function(t, e, n, i, r) {
            return -i * (e /= r) * (e - 2) + n
        },
        easeInOutQuad: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
        },
        easeInCubic: function(t, e, n, i, r) {
            return i * (e /= r) * e * e + n
        },
        easeOutCubic: function(t, e, n, i, r) {
            return i * ((e = e / r - 1) * e * e + 1) + n
        },
        easeInOutCubic: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
        },
        easeInQuart: function(t, e, n, i, r) {
            return i * (e /= r) * e * e * e + n
        },
        easeOutQuart: function(t, e, n, i, r) {
            return -i * ((e = e / r - 1) * e * e * e - 1) + n
        },
        easeInOutQuart: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
        },
        easeInQuint: function(t, e, n, i, r) {
            return i * (e /= r) * e * e * e * e + n
        },
        easeOutQuint: function(t, e, n, i, r) {
            return i * ((e = e / r - 1) * e * e * e * e + 1) + n
        },
        easeInOutQuint: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
        },
        easeInSine: function(t, e, n, i, r) {
            return -i * Math.cos(e / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(t, e, n, i, r) {
            return i * Math.sin(e / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(t, e, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * e / r) - 1) + n
        },
        easeInExpo: function(t, e, n, i, r) {
            return 0 == e ? n : i * Math.pow(2, 10 * (e / r - 1)) + n
        },
        easeOutExpo: function(t, e, n, i, r) {
            return e == r ? n + i : i * (-Math.pow(2, -10 * e / r) + 1) + n
        },
        easeInOutExpo: function(t, e, n, i, r) {
            return 0 == e ? n : e == r ? n + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (-Math.pow(2, -10 * --e) + 2) + n
        },
        easeInCirc: function(t, e, n, i, r) {
            return -i * (Math.sqrt(1 - (e /= r) * e) - 1) + n
        },
        easeOutCirc: function(t, e, n, i, r) {
            return i * Math.sqrt(1 - (e = e / r - 1) * e) + n
        },
        easeInOutCirc: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
        },
        easeInElastic: function(t, e, n, i, r) {
            var s = 1.70158,
                o = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= r)) return n + i;
            if (o || (o = .3 * r), a < Math.abs(i)) {
                a = i;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(i / a);
            return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - s) * Math.PI / o)) + n
        },
        easeOutElastic: function(t, e, n, i, r) {
            var s = 1.70158,
                o = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= r)) return n + i;
            if (o || (o = .3 * r), a < Math.abs(i)) {
                a = i;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * e) * Math.sin(2 * (e * r - s) * Math.PI / o) + i + n
        },
        easeInOutElastic: function(t, e, n, i, r) {
            var s = 1.70158,
                o = 0,
                a = i;
            if (0 == e) return n;
            if (2 == (e /= r / 2)) return n + i;
            if (o || (o = .3 * r * 1.5), a < Math.abs(i)) {
                a = i;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(i / a);
            return 1 > e ? -.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - s) * Math.PI / o) + n : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * r - s) * Math.PI / o) * .5 + i + n
        },
        easeInBack: function(t, e, n, i, r, s) {
            return void 0 == s && (s = 1.70158), i * (e /= r) * e * ((s + 1) * e - s) + n
        },
        easeOutBack: function(t, e, n, i, r, s) {
            return void 0 == s && (s = 1.70158), i * ((e = e / r - 1) * e * ((s + 1) * e + s) + 1) + n
        },
        easeInOutBack: function(t, e, n, i, r, s) {
            return void 0 == s && (s = 1.70158), (e /= r / 2) < 1 ? i / 2 * e * e * (((s *= 1.525) + 1) * e - s) + n : i / 2 * ((e -= 2) * e * (((s *= 1.525) + 1) * e + s) + 2) + n
        },
        easeInBounce: function(t, e, n, i, r) {
            return i - jQuery.easing.easeOutBounce(t, r - e, 0, i, r) + n
        },
        easeOutBounce: function(t, e, n, i, r) {
            return (e /= r) < 1 / 2.75 ? 7.5625 * i * e * e + n : 2 / 2.75 > e ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : 2.5 / 2.75 > e ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        },
        easeInOutBounce: function(t, e, n, i, r) {
            return r / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, i, r) + .5 * i + n
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e() {
            if (!t.contains(document.documentElement, this)) return t(this).timeago("dispose"), this;
            var e = n(this),
                o = s.settings;
            return isNaN(e.datetime) || (0 == o.cutoff || Math.abs(r(e.datetime)) < o.cutoff) && t(this).text(i(e.datetime)), this
        }

        function n(e) {
            if (e = t(e), !e.data("timeago")) {
                e.data("timeago", {
                    datetime: s.datetime(e)
                });
                var n = t.trim(e.text());
                s.settings.localeTitle ? e.attr("title", e.data("timeago").datetime.toLocaleString()) : !(n.length > 0) || s.isTime(e) && e.attr("title") || e.attr("title", n)
            }
            return e.data("timeago")
        }

        function i(t) {
            return s.inWords(r(t))
        }

        function r(t) {
            return (new Date).getTime() - t.getTime()
        }
        t.timeago = function(e) {
            return e instanceof Date ? i(e) : "string" == typeof e ? i(t.timeago.parse(e)) : "number" == typeof e ? i(new Date(e)) : i(t.timeago.datetime(e))
        };
        var s = t.timeago;
        t.extend(t.timeago, {
            settings: {
                refreshMillis: 6e4,
                allowPast: !0,
                allowFuture: !1,
                localeTitle: !1,
                cutoff: 0,
                strings: {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "ago",
                    suffixFromNow: "from now",
                    inPast: "any moment now",
                    seconds: "less than a minute",
                    minute: "about a minute",
                    minutes: "%d minutes",
                    hour: "about an hour",
                    hours: "about %d hours",
                    day: "a day",
                    days: "%d days",
                    month: "about a month",
                    months: "%d months",
                    year: "about a year",
                    years: "%d years",
                    wordSeparator: " ",
                    numbers: []
                }
            },
            inWords: function(e) {
                function n(n, r) {
                    var s = t.isFunction(n) ? n(r, e) : n,
                        o = i.numbers && i.numbers[r] || r;
                    return s.replace(/%d/i, o)
                }
                if (!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
                var i = this.settings.strings,
                    r = i.prefixAgo,
                    s = i.suffixAgo;
                if (this.settings.allowFuture && 0 > e && (r = i.prefixFromNow, s = i.suffixFromNow), !this.settings.allowPast && e >= 0) return this.settings.strings.inPast;
                var o = Math.abs(e) / 1e3,
                    a = o / 60,
                    l = a / 60,
                    c = l / 24,
                    u = c / 365,
                    d = 45 > o && n(i.seconds, Math.round(o)) || 90 > o && n(i.minute, 1) || 45 > a && n(i.minutes, Math.round(a)) || 90 > a && n(i.hour, 1) || 24 > l && n(i.hours, Math.round(l)) || 42 > l && n(i.day, 1) || 30 > c && n(i.days, Math.round(c)) || 45 > c && n(i.month, 1) || 365 > c && n(i.months, Math.round(c / 30)) || 1.5 > u && n(i.year, 1) || n(i.years, Math.round(u)),
                    h = i.wordSeparator || "";
                return void 0 === i.wordSeparator && (h = " "), t.trim([r, d, s].join(h))
            },
            parse: function(e) {
                var n = t.trim(e);
                return n = n.replace(/\.\d+/, ""), n = n.replace(/-/, "/").replace(/-/, "/"), n = n.replace(/T/, " ").replace(/Z/, " UTC"), n = n.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), n = n.replace(/([\+\-]\d\d)$/, " $100"), new Date(n)
            },
            datetime: function(e) {
                var n = s.isTime(e) ? t(e).attr("datetime") : t(e).attr("title");
                return s.parse(n)
            },
            isTime: function(e) {
                return "time" === t(e).get(0).tagName.toLowerCase()
            }
        });
        var o = {
            init: function() {
                var n = t.proxy(e, this);
                n();
                var i = s.settings;
                i.refreshMillis > 0 && (this._timeagoInterval = setInterval(n, i.refreshMillis))
            },
            update: function(n) {
                var i = s.parse(n);
                t(this).data("timeago", {
                    datetime: i
                }), s.settings.localeTitle && t(this).attr("title", i.toLocaleString()), e.apply(this)
            },
            updateFromDOM: function() {
                t(this).data("timeago", {
                    datetime: s.parse(s.isTime(this) ? t(this).attr("datetime") : t(this).attr("title"))
                }), e.apply(this)
            },
            dispose: function() {
                this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this._timeagoInterval = null)
            }
        };
        t.fn.timeago = function(t, e) {
            var n = t ? o[t] : o.init;
            if (!n) throw new Error("Unknown function name '" + t + "' for timeago");
            return this.each(function() {
                n.call(this, e)
            }), this
        }, document.createElement("abbr"), document.createElement("time")
    }),
    function(t) {
        t.extend(t.fn, {
            livequery: function(e, n, i) {
                var r, s = this;
                return t.isFunction(e) && (i = n, n = e, e = void 0), t.each(t.livequery.queries, function(t, o) {
                    return s.selector != o.selector || s.context != o.context || e != o.type || n && n.$lqguid != o.fn.$lqguid || i && i.$lqguid != o.fn2.$lqguid ? void 0 : (r = o) && !1
                }), r = r || new t.livequery(this.selector, this.context, e, n, i), r.stopped = !1, r.run(), this
            },
            expire: function(e, n, i) {
                var r = this;
                return t.isFunction(e) && (i = n, n = e, e = void 0), t.each(t.livequery.queries, function(s, o) {
                    r.selector != o.selector || r.context != o.context || e && e != o.type || n && n.$lqguid != o.fn.$lqguid || i && i.$lqguid != o.fn2.$lqguid || this.stopped || t.livequery.stop(o.id)
                }), this
            }
        }), t.livequery = function(e, n, i, r, s) {
            return this.selector = e, this.context = n, this.type = i, this.fn = r, this.fn2 = s, this.elements = [], this.stopped = !1, this.id = t.livequery.queries.push(this) - 1, r.$lqguid = r.$lqguid || t.livequery.guid++, s && (s.$lqguid = s.$lqguid || t.livequery.guid++), this
        }, t.livequery.prototype = {
            stop: function() {
                var t = this;
                this.type ? this.elements.unbind(this.type, this.fn) : this.fn2 && this.elements.each(function(e, n) {
                    t.fn2.apply(n)
                }), this.elements = [], this.stopped = !0
            },
            run: function() {
                if (!this.stopped) {
                    var e = this,
                        n = this.elements,
                        i = t(this.selector, this.context),
                        r = i.not(n);
                    this.elements = i, this.type ? (r.bind(this.type, this.fn), n.length > 0 && t.each(n, function(n, r) {
                        t.inArray(r, i) < 0 && t.event.remove(r, e.type, e.fn)
                    })) : (r.each(function() {
                        e.fn.apply(this)
                    }), this.fn2 && n.length > 0 && t.each(n, function(n, r) {
                        t.inArray(r, i) < 0 && e.fn2.apply(r)
                    }))
                }
            }
        }, t.extend(t.livequery, {
            guid: 0,
            queries: [],
            queue: [],
            running: !1,
            timeout: null,
            checkQueue: function() {
                if (t.livequery.running && t.livequery.queue.length)
                    for (var e = t.livequery.queue.length; e--;) t.livequery.queries[t.livequery.queue.shift()].run()
            },
            pause: function() {
                t.livequery.running = !1
            },
            play: function() {
                t.livequery.running = !0, t.livequery.run()
            },
            registerPlugin: function() {
                t.each(arguments, function(e, n) {
                    if (t.fn[n]) {
                        var i = t.fn[n];
                        t.fn[n] = function() {
                            var e = i.apply(this, arguments);
                            return t.livequery.run(), e
                        }
                    }
                })
            },
            run: function(e) {
                void 0 != e ? t.inArray(e, t.livequery.queue) < 0 && t.livequery.queue.push(e) : t.each(t.livequery.queries, function(e) {
                    t.inArray(e, t.livequery.queue) < 0 && t.livequery.queue.push(e)
                }), t.livequery.timeout && clearTimeout(t.livequery.timeout), t.livequery.timeout = setTimeout(t.livequery.checkQueue, 20)
            },
            stop: function(e) {
                void 0 != e ? t.livequery.queries[e].stop() : t.each(t.livequery.queries, function(e) {
                    t.livequery.queries[e].stop()
                })
            }
        }), t.livequery.registerPlugin("append", "prepend", "after", "before", "wrap", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "empty", "remove", "html"), t(function() {
            t.livequery.play()
        })
    }(jQuery),
    function(t) {
        var e = t.document,
            n = e.documentElement,
            i = "overthrow-enabled",
            r = "ontouchmove" in e,
            s = "WebkitOverflowScrolling" in n.style || "msOverflowStyle" in n.style || !r && t.screen.width > 800 || function() {
                var e = t.navigator.userAgent,
                    n = e.match(/AppleWebKit\/([0-9]+)/),
                    i = n && n[1],
                    r = n && i >= 534;
                return e.match(/Android ([0-9]+)/) && RegExp.$1 >= 3 && r || e.match(/ Version\/([0-9]+)/) && RegExp.$1 >= 0 && t.blackberry && r || e.indexOf("PlayBook") > -1 && r && -1 === !e.indexOf("Android 2") || e.match(/Firefox\/([0-9]+)/) && RegExp.$1 >= 4 || e.match(/wOSBrowser\/([0-9]+)/) && RegExp.$1 >= 233 && r || e.match(/NokiaBrowser\/([0-9\.]+)/) && 7.3 === parseFloat(RegExp.$1) && n && i >= 533
            }();
        t.overthrow = {}, t.overthrow.enabledClassName = i, t.overthrow.addClass = function() {
            -1 === n.className.indexOf(t.overthrow.enabledClassName) && (n.className += " " + t.overthrow.enabledClassName)
        }, t.overthrow.removeClass = function() {
            n.className = n.className.replace(t.overthrow.enabledClassName, "")
        }, t.overthrow.set = function() {
            s && t.overthrow.addClass()
        }, t.overthrow.canBeFilledWithPoly = r, t.overthrow.forget = function() {
            t.overthrow.removeClass()
        }, t.overthrow.support = s ? "native" : "none"
    }(this),
    function(t, e, n) {
        if (e !== n) {
            e.scrollIndicatorClassName = "overthrow";
            var i = t.document,
                r = i.documentElement,
                s = "native" === e.support,
                o = e.canBeFilledWithPoly,
                a = (e.configure, e.set),
                l = e.forget,
                c = e.scrollIndicatorClassName;
            e.closest = function(t, n) {
                return !n && t.className && t.className.indexOf(c) > -1 && t || e.closest(t.parentNode)
            };
            var u = !1;
            e.set = function() {
                if (a(), !u && !s && o) {
                    t.overthrow.addClass(), u = !0, e.support = "polyfilled", e.forget = function() {
                        l(), u = !1, i.removeEventListener && i.removeEventListener("touchstart", w, !1)
                    };
                    var c, d, h, p, f = [],
                        m = [],
                        v = function() {
                            f = [], d = null
                        },
                        g = function() {
                            m = [], h = null
                        },
                        y = function(t) {
                            p = c.querySelectorAll("textarea, input");
                            for (var e = 0, n = p.length; n > e; e++) p[e].style.pointerEvents = t
                        },
                        _ = function(t, e) {
                            if (i.createEvent) {
                                var r, s = (!e || e === n) && c.parentNode || c.touchchild || c;
                                s !== c && (r = i.createEvent("HTMLEvents"), r.initEvent("touchend", !0, !0), c.dispatchEvent(r), s.touchchild = c, c = s, s.dispatchEvent(t))
                            }
                        },
                        w = function(t) {
                            if (e.intercept && e.intercept(), v(), g(), c = e.closest(t.target), c && c !== r && !(t.touches.length > 1)) {
                                y("none");
                                var n = t,
                                    i = c.scrollTop,
                                    s = c.scrollLeft,
                                    o = c.offsetHeight,
                                    a = c.offsetWidth,
                                    l = t.touches[0].pageY,
                                    u = t.touches[0].pageX,
                                    p = c.scrollHeight,
                                    w = c.scrollWidth,
                                    b = function(t) {
                                        var e = i + l - t.touches[0].pageY,
                                            r = s + u - t.touches[0].pageX,
                                            y = e >= (f.length ? f[0] : 0),
                                            b = r >= (m.length ? m[0] : 0);
                                        e > 0 && p - o > e || r > 0 && w - a > r ? t.preventDefault() : _(n), d && y !== d && v(), h && b !== h && g(), d = y, h = b, c.scrollTop = e, c.scrollLeft = r, f.unshift(e), m.unshift(r), f.length > 3 && f.pop(), m.length > 3 && m.pop()
                                    },
                                    C = function() {
                                        y("auto"), setTimeout(function() {
                                            y("none")
                                        }, 450), c.removeEventListener("touchmove", b, !1), c.removeEventListener("touchend", C, !1)
                                    };
                                c.addEventListener("touchmove", b, !1), c.addEventListener("touchend", C, !1)
                            }
                        };
                    i.addEventListener("touchstart", w, !1)
                }
            }
        }
    }(this, this.overthrow),
    function(t, e, n) {
        if (e !== n) {
            e.easing = function(t, e, n, i) {
                return n * ((t = t / i - 1) * t * t + 1) + e
            }, e.tossing = !1;
            var i;
            e.toss = function(t, r) {
                e.intercept();
                var s, o, a = 0,
                    l = t.scrollLeft,
                    c = t.scrollTop,
                    u = {
                        top: "+0",
                        left: "+0",
                        duration: 50,
                        easing: e.easing,
                        finished: function() {}
                    },
                    d = !1;
                if (r)
                    for (var h in u) r[h] !== n && (u[h] = r[h]);
                return "string" == typeof u.left ? (u.left = parseFloat(u.left), s = u.left + l) : (s = u.left, u.left = u.left - l), "string" == typeof u.top ? (u.top = parseFloat(u.top), o = u.top + c) : (o = u.top, u.top = u.top - c), e.tossing = !0, i = setInterval(function() {
                    a++ < u.duration ? (t.scrollLeft = u.easing(a, l, u.left, u.duration), t.scrollTop = u.easing(a, c, u.top, u.duration)) : (s !== t.scrollLeft ? t.scrollLeft = s : (d && u.finished(), d = !0), o !== t.scrollTop ? t.scrollTop = o : (d && u.finished(), d = !0), e.intercept())
                }, 1), {
                    top: o,
                    left: s,
                    duration: e.duration,
                    easing: e.easing
                }
            }, e.intercept = function() {
                clearInterval(i), e.tossing = !1
            }
        }
    }(this, this.overthrow),
    function(t) {
        t.overthrow.set()
    }(this),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
    }(function(t) {
        function e(t) {
            return a.raw ? t : encodeURIComponent(t)
        }

        function n(t) {
            return a.raw ? t : decodeURIComponent(t)
        }

        function i(t) {
            return e(a.json ? JSON.stringify(t) : String(t))
        }

        function r(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(o, " ")), a.json ? JSON.parse(t) : t
            } catch (e) {}
        }

        function s(e, n) {
            var i = a.raw ? e : r(e);
            return t.isFunction(n) ? n(i) : i
        }
        var o = /\+/g,
            a = t.cookie = function(r, o, l) {
                if (void 0 !== o && !t.isFunction(o)) {
                    if (l = t.extend({}, a.defaults, l), "number" == typeof l.expires) {
                        var c = l.expires,
                            u = l.expires = new Date;
                        u.setTime(+u + 864e5 * c)
                    }
                    return document.cookie = [e(r), "=", i(o), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var d = r ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, f = h.length; f > p; p++) {
                    var m = h[p].split("="),
                        v = n(m.shift()),
                        g = m.join("=");
                    if (r && r === v) {
                        d = s(g, o);
                        break
                    }
                    r || void 0 === (g = s(g)) || (d[v] = g)
                }
                return d
            };
        a.defaults = {}, t.removeCookie = function(e, n) {
            return void 0 === t.cookie(e) ? !1 : (t.cookie(e, "", t.extend({}, n, {
                expires: -1
            })), !t.cookie(e))
        }
    }),
    function(t, e) {
        function n(n, i) {
            function r(t) {
                return ce.preferFlash && re && !ce.ignoreFlash && ce.flash[t] !== e && ce.flash[t]
            }

            function s(t) {
                return function(e) {
                    var n = this._s;
                    return n && n._a ? t.call(this, e) : null
                }
            }
            this.setupOptions = {
                url: n || null,
                flashVersion: 8,
                debugMode: !0,
                debugFlash: !1,
                useConsole: !0,
                consoleOnly: !0,
                waitForWindowLoad: !1,
                bgColor: "#ffffff",
                useHighPerformance: !1,
                flashPollingInterval: null,
                html5PollingInterval: null,
                flashLoadTimeout: 1e3,
                wmode: null,
                allowScriptAccess: "always",
                useFlashBlock: !1,
                useHTML5Audio: !0,
                html5Test: /^(probably|maybe)$/i,
                preferFlash: !1,
                noSWFCache: !1,
                idPrefix: "sound"
            }, this.defaultOptions = {
                autoLoad: !1,
                autoPlay: !1,
                from: null,
                loops: 1,
                onid3: null,
                onload: null,
                whileloading: null,
                onplay: null,
                onpause: null,
                onresume: null,
                whileplaying: null,
                onposition: null,
                onstop: null,
                onfailure: null,
                onfinish: null,
                multiShot: !0,
                multiShotEvents: !1,
                position: null,
                pan: 0,
                stream: !0,
                to: null,
                type: null,
                usePolicyFile: !1,
                volume: 100
            }, this.flash9Options = {
                isMovieStar: null,
                usePeakData: !1,
                useWaveformData: !1,
                useEQData: !1,
                onbufferchange: null,
                ondataerror: null
            }, this.movieStarOptions = {
                bufferTime: 3,
                serverURL: null,
                onconnect: null,
                duration: null
            }, this.audioFormats = {
                mp3: {
                    type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
                    required: !0
                },
                mp4: {
                    related: ["aac", "m4a", "m4b"],
                    type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
                    required: !1
                },
                ogg: {
                    type: ["audio/ogg; codecs=vorbis"],
                    required: !1
                },
                opus: {
                    type: ["audio/ogg; codecs=opus", "audio/opus"],
                    required: !1
                },
                wav: {
                    type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
                    required: !1
                }
            }, this.movieID = "sm2-container", this.id = i || "sm2movie", this.debugID = "soundmanager-debug", this.debugURLParam = /([#?&])debug=1/i, this.versionNumber = "V2.97a.20131201", this.altURL = this.movieURL = this.version = null, this.enabled = this.swfLoaded = !1, this.oMC = null, this.sounds = {}, this.soundIDs = [], this.didFlashBlock = this.muted = !1, this.filePattern = null, this.filePatterns = {
                flash8: /\.mp3(\?.*)?$/i,
                flash9: /\.mp3(\?.*)?$/i
            }, this.features = {
                buffering: !1,
                peakData: !1,
                waveformData: !1,
                eqData: !1,
                movieStar: !1
            }, this.sandbox = {}, this.html5 = {
                usingFlash: null
            }, this.flash = {}, this.ignoreFlash = this.html5Only = !1;
            var o, a, l, c, u, d, h, p, f, m, v, g, y, _, w, b, C, x, S, k, T, M, P, L, E, A, I, $, D, O, V, B, j, N, H, R, F, z, q, J, U, W, G, X, Z, Q, K, Y, te, ee, ne, ie, re, se, oe, ae, le, ce = this,
                ue = null,
                de = null,
                he = navigator.userAgent,
                pe = t.location.href.toString(),
                fe = document,
                me = [],
                ve = !1,
                ge = !1,
                ye = !1,
                _e = !1,
                we = !1,
                be = null,
                Ce = null,
                xe = !1,
                Se = !1,
                ke = 0,
                Te = null,
                Me = [],
                Pe = null,
                Le = Array.prototype.slice,
                Ee = !1,
                Ae = 0,
                Ie = he.match(/(ipad|iphone|ipod)/i),
                $e = he.match(/android/i),
                De = he.match(/msie/i),
                Oe = he.match(/webkit/i),
                Ve = he.match(/safari/i) && !he.match(/chrome/i),
                Be = he.match(/opera/i),
                je = he.match(/(mobile|pre\/|xoom)/i) || Ie || $e,
                Ne = !pe.match(/usehtml5audio/i) && !pe.match(/sm2\-ignorebadua/i) && Ve && !he.match(/silk/i) && he.match(/OS X 10_6_([3-7])/i),
                He = fe.hasFocus !== e ? fe.hasFocus() : null,
                Re = Ve && (fe.hasFocus === e || !fe.hasFocus()),
                Fe = !Re,
                ze = /(mp3|mp4|mpa|m4a|m4b)/i,
                qe = fe.location ? fe.location.protocol.match(/http/i) : null,
                Je = qe ? "" : "http://",
                Ue = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
                We = "mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),
                Ge = RegExp("\\.(" + We.join("|") + ")(\\?.*)?$", "i");
            this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i, this.useAltURL = !qe;
            var Xe;
            try {
                Xe = Audio !== e && (Be && opera !== e && 10 > opera.version() ? new Audio(null) : new Audio).canPlayType !== e
            } catch (Ze) {
                Xe = !1
            }
            this.hasHTML5 = Xe, this.setup = function(t) {
                    var n = !ce.url;
                    return t !== e && ye && Pe && ce.ok(), f(t), t && (n && L && t.url !== e && ce.beginDelayedInit(), !L && t.url !== e && "complete" === fe.readyState && setTimeout(M, 1)), ce
                }, this.supported = this.ok = function() {
                    return Pe ? ye && !_e : ce.useHTML5Audio && ce.hasHTML5
                }, this.getMovie = function(e) {
                    return a(e) || fe[e] || t[e]
                }, this.createSound = function(t, n) {
                    function i() {
                        return r = R(r), ce.sounds[r.id] = new o(r), ce.soundIDs.push(r.id), ce.sounds[r.id]
                    }
                    var r, s = null;
                    if (!ye || !ce.ok()) return !1;
                    if (n !== e && (t = {
                            id: t,
                            url: n
                        }), r = p(t), r.url = W(r.url), void 0 === r.id && (r.id = ce.setupOptions.idPrefix + Ae++), z(r.id, !0)) return ce.sounds[r.id];
                    if (Z(r)) s = i(), s._setup_html5(r);
                    else {
                        if (ce.html5Only || ce.html5.usingFlash && r.url && r.url.match(/data\:/i)) return i();
                        d > 8 && null === r.isMovieStar && (r.isMovieStar = !(!r.serverURL && !(r.type && r.type.match(Ue) || r.url && r.url.match(Ge)))), r = F(r, void 0), s = i(), 8 === d ? de._createSound(r.id, r.loops || 1, r.usePolicyFile) : (de._createSound(r.id, r.url, r.usePeakData, r.useWaveformData, r.useEQData, r.isMovieStar, r.isMovieStar ? r.bufferTime : !1, r.loops || 1, r.serverURL, r.duration || null, r.autoPlay, !0, r.autoLoad, r.usePolicyFile), r.serverURL || (s.connected = !0, r.onconnect && r.onconnect.apply(s))), !r.serverURL && (r.autoLoad || r.autoPlay) && s.load(r)
                    }
                    return !r.serverURL && r.autoPlay && s.play(), s
                }, this.destroySound = function(t, e) {
                    if (!z(t)) return !1;
                    var n, i = ce.sounds[t];
                    for (i._iO = {}, i.stop(), i.unload(), n = 0; n < ce.soundIDs.length; n++)
                        if (ce.soundIDs[n] === t) {
                            ce.soundIDs.splice(n, 1);
                            break
                        }
                    return e || i.destruct(!0), delete ce.sounds[t], !0
                }, this.load = function(t, e) {
                    return z(t) ? ce.sounds[t].load(e) : !1
                }, this.unload = function(t) {
                    return z(t) ? ce.sounds[t].unload() : !1
                }, this.onposition = this.onPosition = function(t, e, n, i) {
                    return z(t) ? ce.sounds[t].onposition(e, n, i) : !1
                }, this.clearOnPosition = function(t, e, n) {
                    return z(t) ? ce.sounds[t].clearOnPosition(e, n) : !1
                }, this.start = this.play = function(t, e) {
                    var n = null,
                        i = e && !(e instanceof Object);
                    if (!ye || !ce.ok()) return !1;
                    if (z(t, i)) i && (e = {
                        url: e
                    });
                    else {
                        if (!i) return !1;
                        i && (e = {
                            url: e
                        }), e && e.url && (e.id = t, n = ce.createSound(e).play())
                    }
                    return null === n && (n = ce.sounds[t].play(e)), n
                }, this.setPosition = function(t, e) {
                    return z(t) ? ce.sounds[t].setPosition(e) : !1
                }, this.stop = function(t) {
                    return z(t) ? ce.sounds[t].stop() : !1
                }, this.stopAll = function() {
                    for (var t in ce.sounds) ce.sounds.hasOwnProperty(t) && ce.sounds[t].stop()
                }, this.pause = function(t) {
                    return z(t) ? ce.sounds[t].pause() : !1
                }, this.pauseAll = function() {
                    var t;
                    for (t = ce.soundIDs.length - 1; t >= 0; t--) ce.sounds[ce.soundIDs[t]].pause()
                }, this.resume = function(t) {
                    return z(t) ? ce.sounds[t].resume() : !1
                }, this.resumeAll = function() {
                    var t;
                    for (t = ce.soundIDs.length - 1; t >= 0; t--) ce.sounds[ce.soundIDs[t]].resume()
                }, this.togglePause = function(t) {
                    return z(t) ? ce.sounds[t].togglePause() : !1
                }, this.setPan = function(t, e) {
                    return z(t) ? ce.sounds[t].setPan(e) : !1
                }, this.setVolume = function(t, e) {
                    return z(t) ? ce.sounds[t].setVolume(e) : !1
                }, this.mute = function(t) {
                    var e = 0;
                    if (t instanceof String && (t = null), t) return z(t) ? ce.sounds[t].mute() : !1;
                    for (e = ce.soundIDs.length - 1; e >= 0; e--) ce.sounds[ce.soundIDs[e]].mute();
                    return ce.muted = !0
                }, this.muteAll = function() {
                    ce.mute()
                }, this.unmute = function(t) {
                    if (t instanceof String && (t = null), t) return z(t) ? ce.sounds[t].unmute() : !1;
                    for (t = ce.soundIDs.length - 1; t >= 0; t--) ce.sounds[ce.soundIDs[t]].unmute();
                    return ce.muted = !1, !0
                }, this.unmuteAll = function() {
                    ce.unmute()
                }, this.toggleMute = function(t) {
                    return z(t) ? ce.sounds[t].toggleMute() : !1
                }, this.getMemoryUse = function() {
                    var t = 0;
                    return de && 8 !== d && (t = parseInt(de._getMemoryUse(), 10)), t
                }, this.disable = function(n) {
                    var i;
                    if (n === e && (n = !1), _e) return !1;
                    for (_e = !0, i = ce.soundIDs.length - 1; i >= 0; i--) O(ce.sounds[ce.soundIDs[i]]);
                    return h(n), ne.remove(t, "load", y), !0
                }, this.canPlayMIME = function(t) {
                    var e;
                    return ce.hasHTML5 && (e = Q({
                        type: t
                    })), !e && Pe && (e = t && ce.ok() ? !!(d > 8 && t.match(Ue) || t.match(ce.mimePattern)) : null), e
                }, this.canPlayURL = function(t) {
                    var e;
                    return ce.hasHTML5 && (e = Q({
                        url: t
                    })), !e && Pe && (e = t && ce.ok() ? !!t.match(ce.filePattern) : null), e
                }, this.canPlayLink = function(t) {
                    return t.type !== e && t.type && ce.canPlayMIME(t.type) ? !0 : ce.canPlayURL(t.href)
                }, this.getSoundById = function(t) {
                    return t ? ce.sounds[t] : null
                }, this.onready = function(e, n) {
                    if ("function" != typeof e) throw j("needFunction", "onready");
                    return n || (n = t), v("onready", e, n), g(), !0
                }, this.ontimeout = function(e, n) {
                    if ("function" != typeof e) throw j("needFunction", "ontimeout");
                    return n || (n = t), v("ontimeout", e, n), g({
                        type: "ontimeout"
                    }), !0
                }, this._wD = this._writeDebug = function() {
                    return !0
                }, this._debug = function() {}, this.reboot = function(e, n) {
                    var i, r, s;
                    for (i = ce.soundIDs.length - 1; i >= 0; i--) ce.sounds[ce.soundIDs[i]].destruct();
                    if (de) try {
                        De && (Ce = de.innerHTML), be = de.parentNode.removeChild(de)
                    } catch (o) {}
                    if (Ce = be = Pe = de = null, ce.enabled = L = ye = xe = Se = ve = ge = _e = Ee = ce.swfLoaded = !1, ce.soundIDs = [], ce.sounds = {}, Ae = 0, e) me = [];
                    else
                        for (i in me)
                            if (me.hasOwnProperty(i))
                                for (r = 0, s = me[i].length; s > r; r++) me[i][r].fired = !1; return ce.html5 = {
                        usingFlash: null
                    }, ce.flash = {}, ce.html5Only = !1, ce.ignoreFlash = !1, t.setTimeout(function() {
                        T(), n || ce.beginDelayedInit()
                    }, 20), ce
                }, this.reset = function() {
                    return ce.reboot(!0, !0)
                }, this.getMoviePercent = function() {
                    return de && "PercentLoaded" in de ? de.PercentLoaded() : null
                }, this.beginDelayedInit = function() {
                    we = !0, M(), setTimeout(function() {
                        return Se ? !1 : (A(), k(), Se = !0)
                    }, 20), _()
                }, this.destruct = function() {
                    ce.disable(!0)
                }, o = function(t) {
                    var n, i, r, s, o, a, l, c, u, h, f, m = this,
                        v = !1,
                        g = [],
                        y = 0,
                        _ = null;
                    i = n = null, this.sID = this.id = t.id, this.url = t.url, this._iO = this.instanceOptions = this.options = p(t), this.pan = this.options.pan, this.volume = this.options.volume, this.isHTML5 = !1, this._a = null, f = this.url ? !1 : !0, this.id3 = {}, this._debug = function() {}, this.load = function(t) {
                            var n, i = null;
                            if (t !== e ? m._iO = p(t, m.options) : (t = m.options, m._iO = t, _ && _ !== m.url && (m._iO.url = m.url, m.url = null)), m._iO.url || (m._iO.url = m.url), m._iO.url = W(m._iO.url), n = m.instanceOptions = m._iO, !n.url && !m.url) return m;
                            if (n.url === m.url && 0 !== m.readyState && 2 !== m.readyState) return 3 === m.readyState && n.onload && le(m, function() {
                                n.onload.apply(m, [!!m.duration])
                            }), m;
                            if (m.loaded = !1, m.readyState = 1, m.playState = 0, m.id3 = {}, Z(n)) i = m._setup_html5(n), i._called_load || (m._html5_canplay = !1, m.url !== n.url && (m._a.src = n.url, m.setPosition(0)), m._a.autobuffer = "auto", m._a.preload = "auto", m._a._called_load = !0);
                            else {
                                if (ce.html5Only || m._iO.url && m._iO.url.match(/data\:/i)) return m;
                                try {
    m.isHTML5 = !1, m._iO = F(R(n)), n = m._iO, 8 === d ? de._load(m.id, n.url, n.stream, n.autoPlay, n.usePolicyFile) : de._load(m.id, n.url, !!n.stream, !!n.autoPlay, n.loops || 1, !!n.autoLoad, n.usePolicyFile)
} catch (r) {
    I({
        type: "SMSOUND_LOAD_JS_EXCEPTION",
        fatal: !0
    })
}
}
return m.url = n.url, m
}, this.unload = function() {
    return 0 !== m.readyState && (m.isHTML5 ? (a(), m._a && (m._a.pause(), _ = Y(m._a))) : 8 === d ? de._unload(m.id, "about:blank") : de._unload(m.id), r()), m
}, this.destruct = function(t) {
    m.isHTML5 ? (a(), m._a && (m._a.pause(), Y(m._a), Ee || o(), m._a._s = null, m._a = null)) : (m._iO.onfailure = null, de._destroySound(m.id)), t || ce.destroySound(m.id, !0)
}, this.start = this.play = function(t, n) {
    var i, r, s, o, a;
    if (r = !0, r = null, n = n === e ? !0 : n, t || (t = {}), m.url && (m._iO.url = m.url), m._iO = p(m._iO, m.options), m._iO = p(t, m._iO), m._iO.url = W(m._iO.url), m.instanceOptions = m._iO, !m.isHTML5 && m._iO.serverURL && !m.connected) return m.getAutoPlay() || m.setAutoPlay(!0), m;
    if (Z(m._iO) && (m._setup_html5(m._iO), l()), 1 === m.playState && !m.paused && (i = m._iO.multiShot, i || (m.isHTML5 && m.setPosition(m._iO.position), r = m)), null !== r) return r;
    if (t.url && t.url !== m.url && (m.readyState || m.isHTML5 || 8 !== d || !f ? m.load(m._iO) : f = !1), m.loaded || (0 === m.readyState ? (m.isHTML5 || ce.html5Only ? m.isHTML5 ? m.load(m._iO) : r = m : (m._iO.autoPlay = !0, m.load(m._iO)), m.instanceOptions = m._iO) : 2 === m.readyState && (r = m)), null !== r) return r;
    if (!m.isHTML5 && 9 === d && 0 < m.position && m.position === m.duration && (t.position = 0), m.paused && 0 <= m.position && (!m._iO.serverURL || 0 < m.position)) m.resume();
    else {
        if (m._iO = p(t, m._iO), null !== m._iO.from && null !== m._iO.to && 0 === m.instanceCount && 0 === m.playState && !m._iO.serverURL) {
            if (i = function() {
                    m._iO = p(t, m._iO), m.play(m._iO)
                }, m.isHTML5 && !m._html5_canplay ? (m.load({
                    _oncanplay: i
                }), r = !1) : m.isHTML5 || m.loaded || m.readyState && 2 === m.readyState || (m.load({
                    onload: i
                }), r = !1), null !== r) return r;
            m._iO = h()
        }(!m.instanceCount || m._iO.multiShotEvents || m.isHTML5 && m._iO.multiShot && !Ee || !m.isHTML5 && d > 8 && !m.getAutoPlay()) && m.instanceCount++, m._iO.onposition && 0 === m.playState && c(m), m.playState = 1, m.paused = !1, m.position = m._iO.position === e || isNaN(m._iO.position) ? 0 : m._iO.position, m.isHTML5 || (m._iO = F(R(m._iO))), m._iO.onplay && n && (m._iO.onplay.apply(m), v = !0), m.setVolume(m._iO.volume, !0), m.setPan(m._iO.pan, !0), m.isHTML5 ? 2 > m.instanceCount ? (l(), r = m._setup_html5(), m.setPosition(m._iO.position), r.play()) : (s = new Audio(m._iO.url), o = function() {
            ne.remove(s, "ended", o), m._onfinish(m), Y(s), s = null
        }, a = function() {
            ne.remove(s, "canplay", a);
            try {
                s.currentTime = m._iO.position / 1e3
            } catch (t) {}
            s.play()
        }, ne.add(s, "ended", o), void 0 !== m._iO.volume && (s.volume = Math.max(0, Math.min(1, m._iO.volume / 100))), m.muted && (s.muted = !0), m._iO.position ? ne.add(s, "canplay", a) : s.play()) : (r = de._start(m.id, m._iO.loops || 1, 9 === d ? m.position : m.position / 1e3, m._iO.multiShot || !1), 9 === d && !r && m._iO.onplayerror && m._iO.onplayerror.apply(m))
    }
    return m
}, this.stop = function(t) {
    var e = m._iO;
    return 1 === m.playState && (m._onbufferchange(0), m._resetOnPosition(0), m.paused = !1, m.isHTML5 || (m.playState = 0), u(), e.to && m.clearOnPosition(e.to), m.isHTML5 ? m._a && (t = m.position, m.setPosition(0), m.position = t, m._a.pause(), m.playState = 0, m._onTimer(), a()) : (de._stop(m.id, t), e.serverURL && m.unload()), m.instanceCount = 0, m._iO = {}, e.onstop && e.onstop.apply(m)), m
}, this.setAutoPlay = function(t) {
    m._iO.autoPlay = t, m.isHTML5 || (de._setAutoPlay(m.id, t), t && !m.instanceCount && 1 === m.readyState && m.instanceCount++)
}, this.getAutoPlay = function() {
    return m._iO.autoPlay
}, this.setPosition = function(t) {
    t === e && (t = 0);
    var n = m.isHTML5 ? Math.max(t, 0) : Math.min(m.duration || m._iO.duration, Math.max(t, 0));
    if (m.position = n, t = m.position / 1e3, m._resetOnPosition(m.position), m._iO.position = n, m.isHTML5) {
        if (m._a) {
            if (m._html5_canplay) {
                if (m._a.currentTime !== t) try {
                    m._a.currentTime = t, (0 === m.playState || m.paused) && m._a.pause()
                } catch (i) {}
            } else if (t) return m;
            m.paused && m._onTimer(!0)
        }
    } else t = 9 === d ? m.position : t, m.readyState && 2 !== m.readyState && de._setPosition(m.id, t, m.paused || !m.playState, m._iO.multiShot);
    return m
}, this.pause = function(t) {
    return m.paused || 0 === m.playState && 1 !== m.readyState ? m : (m.paused = !0, m.isHTML5 ? (m._setup_html5().pause(), a()) : (t || t === e) && de._pause(m.id, m._iO.multiShot), m._iO.onpause && m._iO.onpause.apply(m), m)
}, this.resume = function() {
    var t = m._iO;
    return m.paused ? (m.paused = !1, m.playState = 1, m.isHTML5 ? (m._setup_html5().play(), l()) : (t.isMovieStar && !t.serverURL && m.setPosition(m.position), de._pause(m.id, t.multiShot)), !v && t.onplay ? (t.onplay.apply(m), v = !0) : t.onresume && t.onresume.apply(m), m) : m
}, this.togglePause = function() {
    return 0 === m.playState ? (m.play({
        position: 9 !== d || m.isHTML5 ? m.position / 1e3 : m.position
    }), m) : (m.paused ? m.resume() : m.pause(), m)
}, this.setPan = function(t, n) {
    return t === e && (t = 0), n === e && (n = !1), m.isHTML5 || de._setPan(m.id, t), m._iO.pan = t, n || (m.pan = t, m.options.pan = t), m
}, this.setVolume = function(t, n) {
    return t === e && (t = 100), n === e && (n = !1), m.isHTML5 ? m._a && (ce.muted && !m.muted && (m.muted = !0, m._a.muted = !0), m._a.volume = Math.max(0, Math.min(1, t / 100))) : de._setVolume(m.id, ce.muted && !m.muted || m.muted ? 0 : t), m._iO.volume = t, n || (m.volume = t, m.options.volume = t), m
}, this.mute = function() {
    return m.muted = !0, m.isHTML5 ? m._a && (m._a.muted = !0) : de._setVolume(m.id, 0), m
}, this.unmute = function() {
    m.muted = !1;
    var t = m._iO.volume !== e;
    return m.isHTML5 ? m._a && (m._a.muted = !1) : de._setVolume(m.id, t ? m._iO.volume : m.options.volume), m
}, this.toggleMute = function() {
    return m.muted ? m.unmute() : m.mute()
}, this.onposition = this.onPosition = function(t, n, i) {
    return g.push({
        position: parseInt(t, 10),
        method: n,
        scope: i !== e ? i : m,
        fired: !1
    }), m
}, this.clearOnPosition = function(t, e) {
    var n;
    if (t = parseInt(t, 10), isNaN(t)) return !1;
    for (n = 0; n < g.length; n++) t !== g[n].position || e && e !== g[n].method || (g[n].fired && y--, g.splice(n, 1))
}, this._processOnPosition = function() {
    var t, e;
    if (t = g.length, !t || !m.playState || y >= t) return !1;
    for (t -= 1; t >= 0; t--) e = g[t], !e.fired && m.position >= e.position && (e.fired = !0, y++, e.method.apply(e.scope, [e.position]));
    return !0
}, this._resetOnPosition = function(t) {
    var e, n;
    if (e = g.length, !e) return !1;
    for (e -= 1; e >= 0; e--) n = g[e], n.fired && t <= n.position && (n.fired = !1, y--);
    return !0
}, h = function() {
    var t, e, n = m._iO,
        i = n.from,
        r = n.to;
    return e = function() {
        m.clearOnPosition(r, e), m.stop()
    }, t = function() {
        null === r || isNaN(r) || m.onPosition(r, e)
    }, null !== i && !isNaN(i) && (n.position = i, n.multiShot = !1, t()), n
}, c = function() {
    var t, e = m._iO.onposition;
    if (e)
        for (t in e) e.hasOwnProperty(t) && m.onPosition(parseInt(t, 10), e[t])
}, u = function() {
    var t, e = m._iO.onposition;
    if (e)
        for (t in e) e.hasOwnProperty(t) && m.clearOnPosition(parseInt(t, 10))
}, l = function() {
    m.isHTML5 && q(m)
}, a = function() {
    m.isHTML5 && J(m)
}, r = function(t) {
    t || (g = [], y = 0), v = !1, m._hasTimer = null, m._a = null, m._html5_canplay = !1, m.bytesLoaded = null, m.bytesTotal = null, m.duration = m._iO && m._iO.duration ? m._iO.duration : null, m.durationEstimate = null, m.buffered = [], m.eqData = [], m.eqData.left = [], m.eqData.right = [], m.failures = 0, m.isBuffering = !1, m.instanceOptions = {}, m.instanceCount = 0, m.loaded = !1, m.metadata = {}, m.readyState = 0, m.muted = !1, m.paused = !1, m.peakData = {
        left: 0,
        right: 0
    }, m.waveformData = {
        left: [],
        right: []
    }, m.playState = 0, m.position = null, m.id3 = {}
}, r(), this._onTimer = function(t) {
    var e, r = !1,
        s = {};
    return m._hasTimer || t ? (m._a && (t || (0 < m.playState || 1 === m.readyState) && !m.paused) && (e = m._get_html5_duration(), e !== n && (n = e, m.duration = e, r = !0), m.durationEstimate = m.duration, e = 1e3 * m._a.currentTime || 0, e !== i && (i = e, r = !0), (r || t) && m._whileplaying(e, s, s, s, s)), r) : void 0
}, this._get_html5_duration = function() {
    var t = m._iO;
    return (t = m._a && m._a.duration ? 1e3 * m._a.duration : t && t.duration ? t.duration : null) && !isNaN(t) && 1 / 0 !== t ? t : null
}, this._apply_loop = function(t, e) {
    t.loop = e > 1 ? "loop" : ""
}, this._setup_html5 = function(t) {
    t = p(m._iO, t);
    var e, n = Ee ? ue : m._a,
        i = decodeURI(t.url);
    if (Ee ? i === decodeURI(ie) && (e = !0) : i === decodeURI(_) && (e = !0), n) {
        if (n._s)
            if (Ee) n._s && n._s.playState && !e && n._s.stop();
            else if (!Ee && i === decodeURI(_)) return m._apply_loop(n, t.loops), n;
        e || (_ && r(!1), n.src = t.url, ie = _ = m.url = t.url, n._called_load = !1)
    } else t.autoLoad || t.autoPlay ? (m._a = new Audio(t.url), m._a.load()) : m._a = Be && 10 > opera.version() ? new Audio(null) : new Audio, n = m._a, n._called_load = !1, Ee && (ue = n);
    return m.isHTML5 = !0, m._a = n, n._s = m, s(), m._apply_loop(n, t.loops), t.autoLoad || t.autoPlay ? m.load() : (n.autobuffer = !1, n.preload = "auto"), n
}, s = function() {
    if (m._a._added_events) return !1;
    var t;
    m._a._added_events = !0;
    for (t in ae) ae.hasOwnProperty(t) && m._a && m._a.addEventListener(t, ae[t], !1);
    return !0
}, o = function() {
    var t;
    m._a._added_events = !1;
    for (t in ae) ae.hasOwnProperty(t) && m._a && m._a.removeEventListener(t, ae[t], !1)
}, this._onload = function(t) {
    var e = !!t || !m.isHTML5 && 8 === d && m.duration;
    return m.loaded = e, m.readyState = e ? 3 : 2, m._onbufferchange(0), m._iO.onload && le(m, function() {
        m._iO.onload.apply(m, [e])
    }), !0
}, this._onbufferchange = function(t) {
    return 0 === m.playState || t && m.isBuffering || !t && !m.isBuffering ? !1 : (m.isBuffering = 1 === t, m._iO.onbufferchange && m._iO.onbufferchange.apply(m), !0)
}, this._onsuspend = function() {
    return m._iO.onsuspend && m._iO.onsuspend.apply(m), !0
}, this._onfailure = function(t, e, n) {
    m.failures++, m._iO.onfailure && 1 === m.failures && m._iO.onfailure(m, t, e, n)
}, this._onfinish = function() {
    var t = m._iO.onfinish;
    m._onbufferchange(0), m._resetOnPosition(0), m.instanceCount && (m.instanceCount--, m.instanceCount || (u(), m.playState = 0, m.paused = !1, m.instanceCount = 0, m.instanceOptions = {}, m._iO = {}, a(), m.isHTML5 && (m.position = 0)), (!m.instanceCount || m._iO.multiShotEvents) && t && le(m, function() {
        t.apply(m)
    }))
}, this._whileloading = function(t, e, n, i) {
    var r = m._iO;
    m.bytesLoaded = t, m.bytesTotal = e, m.duration = Math.floor(n), m.bufferLength = i, m.durationEstimate = m.isHTML5 || r.isMovieStar ? m.duration : r.duration ? m.duration > r.duration ? m.duration : r.duration : parseInt(m.bytesTotal / m.bytesLoaded * m.duration, 10), m.isHTML5 || (m.buffered = [{
        start: 0,
        end: m.duration
    }]), (3 !== m.readyState || m.isHTML5) && r.whileloading && r.whileloading.apply(m)
}, this._whileplaying = function(t, n, i, r, s) {
    var o = m._iO;
    return isNaN(t) || null === t ? !1 : (m.position = Math.max(0, t), m._processOnPosition(), !m.isHTML5 && d > 8 && (o.usePeakData && n !== e && n && (m.peakData = {
        left: n.leftPeak,
        right: n.rightPeak
    }), o.useWaveformData && i !== e && i && (m.waveformData = {
        left: i.split(","),
        right: r.split(",")
    }), o.useEQData && s !== e && s && s.leftEQ && (t = s.leftEQ.split(","), m.eqData = t, m.eqData.left = t, s.rightEQ !== e && s.rightEQ && (m.eqData.right = s.rightEQ.split(",")))), 1 === m.playState && (!m.isHTML5 && 8 === d && !m.position && m.isBuffering && m._onbufferchange(0), o.whileplaying && o.whileplaying.apply(m)), !0)
}, this._oncaptiondata = function(t) {
    m.captiondata = t, m._iO.oncaptiondata && m._iO.oncaptiondata.apply(m, [t])
}, this._onmetadata = function(t, e) {
    var n, i, r = {};
    for (n = 0, i = t.length; i > n; n++) r[t[n]] = e[n];
    m.metadata = r, m._iO.onmetadata && m._iO.onmetadata.apply(m)
}, this._onid3 = function(t, e) {
    var n, i, r = [];
    for (n = 0, i = t.length; i > n; n++) r[t[n]] = e[n];
    m.id3 = p(m.id3, r), m._iO.onid3 && m._iO.onid3.apply(m)
}, this._onconnect = function(t) {
    t = 1 === t, (m.connected = t) && (m.failures = 0, z(m.id) && (m.getAutoPlay() ? m.play(e, m.getAutoPlay()) : m._iO.autoLoad && m.load()), m._iO.onconnect && m._iO.onconnect.apply(m, [t]))
}, this._ondataerror = function() {
    0 < m.playState && m._iO.ondataerror && m._iO.ondataerror.apply(m)
}
}, E = function() {
    return fe.body || fe.getElementsByTagName("div")[0]
}, a = function(t) {
    return fe.getElementById(t)
}, p = function(t, n) {
    var i, r, s = t || {};
    i = n === e ? ce.defaultOptions : n;
    for (r in i) i.hasOwnProperty(r) && s[r] === e && (s[r] = "object" != typeof i[r] || null === i[r] ? i[r] : p(s[r], i[r]));
    return s
}, le = function(e, n) {
    e.isHTML5 || 8 !== d ? n() : t.setTimeout(n, 0)
}, m = {
    onready: 1,
    ontimeout: 1,
    defaultOptions: 1,
    flash9Options: 1,
    movieStarOptions: 1
}, f = function(t, n) {
    var i, r = !0,
        s = n !== e,
        o = ce.setupOptions;
    for (i in t)
        if (t.hasOwnProperty(i))
            if ("object" != typeof t[i] || null === t[i] || t[i] instanceof Array || t[i] instanceof RegExp) s && m[n] !== e ? ce[n][i] = t[i] : o[i] !== e ? (ce.setupOptions[i] = t[i], ce[i] = t[i]) : m[i] === e ? r = !1 : ce[i] instanceof Function ? ce[i].apply(ce, t[i] instanceof Array ? t[i] : [t[i]]) : ce[i] = t[i];
            else {
                if (m[i] !== e) return f(t[i], i);
                r = !1
            }
    return r
}, ne = function() {
    function e(t) {
        t = Le.call(t);
        var e = t.length;
        return i ? (t[1] = "on" + t[1], e > 3 && t.pop()) : 3 === e && t.push(!1), t
    }

    function n(t, e) {
        var n = t.shift(),
            s = [r[e]];
        i ? n[s](t[0], t[1]) : n[s].apply(n, t)
    }
    var i = t.attachEvent,
        r = {
            add: i ? "attachEvent" : "addEventListener",
            remove: i ? "detachEvent" : "removeEventListener"
        };
    return {
        add: function() {
            n(e(arguments), "add")
        },
        remove: function() {
            n(e(arguments), "remove")
        }
    }
}(), ae = {
    abort: s(function() {}),
    canplay: s(function() {
        var t, n = this._s;
        if (n._html5_canplay) return !0;
        if (n._html5_canplay = !0, n._onbufferchange(0), t = n._iO.position === e || isNaN(n._iO.position) ? null : n._iO.position / 1e3, n.position && this.currentTime !== t) try {
            this.currentTime = t
        } catch (i) {}
        n._iO._oncanplay && n._iO._oncanplay()
    }),
    canplaythrough: s(function() {
        var t = this._s;
        t.loaded || (t._onbufferchange(0), t._whileloading(t.bytesLoaded, t.bytesTotal, t._get_html5_duration()), t._onload(!0))
    }),
    ended: s(function() {
        this._s._onfinish()
    }),
    error: s(function() {
        this._s._onload(!1)
    }),
    loadeddata: s(function() {
        var t = this._s;
        !t._loaded && !Ve && (t.duration = t._get_html5_duration())
    }),
    loadedmetadata: s(function() {}),
    loadstart: s(function() {
        this._s._onbufferchange(1)
    }),
    play: s(function() {
        this._s._onbufferchange(0)
    }),
    playing: s(function() {
        this._s._onbufferchange(0)
    }),
    progress: s(function(t) {
        var e, n, i = this._s,
            r = 0,
            r = t.target.buffered;
        e = t.loaded || 0;
        var s = t.total || 1;
        if (i.buffered = [], r && r.length) {
            for (e = 0, n = r.length; n > e; e++) i.buffered.push({
                start: 1e3 * r.start(e),
                end: 1e3 * r.end(e)
            });
            r = 1e3 * (r.end(0) - r.start(0)), e = Math.min(1, r / (1e3 * t.target.duration))
        }
        isNaN(e) || (i._onbufferchange(0), i._whileloading(e, s, i._get_html5_duration()), e && s && e === s && ae.canplaythrough.call(this, t))
    }),
    ratechange: s(function() {}),
    suspend: s(function(t) {
        var e = this._s;
        ae.progress.call(this, t), e._onsuspend()
    }),
    stalled: s(function() {}),
    timeupdate: s(function() {
        this._s._onTimer()
    }),
    waiting: s(function() {
        this._s._onbufferchange(1)
    })
}, Z = function(t) {
    return t && (t.type || t.url || t.serverURL) ? t.serverURL || t.type && r(t.type) ? !1 : t.type ? Q({
        type: t.type
    }) : Q({
        url: t.url
    }) || ce.html5Only || t.url.match(/data\:/i) : !1
}, Y = function(t) {
    var e;
    return t && (e = Ve ? "about:blank" : ce.html5.canPlayType("audio/wav") ? "data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==" : "about:blank", t.src = e, void 0 !== t._called_unload && (t._called_load = !1)), Ee && (ie = null), e
}, Q = function(t) {
    if (!ce.useHTML5Audio || !ce.hasHTML5) return !1;
    var n = t.url || null;
    t = t.type || null;
    var i, s = ce.audioFormats;
    if (t && ce.html5[t] !== e) return ce.html5[t] && !r(t);
    if (!K) {
        K = [];
        for (i in s) s.hasOwnProperty(i) && (K.push(i), s[i].related && (K = K.concat(s[i].related)));
        K = RegExp("\\.(" + K.join("|") + ")(\\?.*)?$", "i")
    }
    return i = n ? n.toLowerCase().match(K) : null, i && i.length ? i = i[1] : t && (n = t.indexOf(";"), i = (-1 !== n ? t.substr(0, n) : t).substr(6)), i && ce.html5[i] !== e ? n = ce.html5[i] && !r(i) : (t = "audio/" + i, n = ce.html5.canPlayType({
        type: t
    }), n = (ce.html5[i] = n) && ce.html5[t] && !r(t)), n
}, ee = function() {
    function t(t) {
        var e, n = e = !1;
        if (!o || "function" != typeof o.canPlayType) return e;
        if (t instanceof Array) {
            for (s = 0, e = t.length; e > s; s++)(ce.html5[t[s]] || o.canPlayType(t[s]).match(ce.html5Test)) && (n = !0, ce.html5[t[s]] = !0, ce.flash[t[s]] = !!t[s].match(ze));
            e = n
        } else t = o && "function" == typeof o.canPlayType ? o.canPlayType(t) : !1, e = !(!t || !t.match(ce.html5Test));
        return e
    }
    if (!ce.useHTML5Audio || !ce.hasHTML5) return Pe = ce.html5.usingFlash = !0, !1;
    var n, i, r, s, o = Audio !== e ? Be && 10 > opera.version() ? new Audio(null) : new Audio : null,
        a = {};
    r = ce.audioFormats;
    for (n in r)
        if (r.hasOwnProperty(n) && (i = "audio/" + n, a[n] = t(r[n].type), a[i] = a[n], n.match(ze) ? (ce.flash[n] = !0, ce.flash[i] = !0) : (ce.flash[n] = !1, ce.flash[i] = !1), r[n] && r[n].related))
            for (s = r[n].related.length - 1; s >= 0; s--) a["audio/" + r[n].related[s]] = a[n], ce.html5[r[n].related[s]] = a[n], ce.flash[r[n].related[s]] = a[n];
    return a.canPlayType = o ? t : null, ce.html5 = p(ce.html5, a), ce.html5.usingFlash = X(), Pe = ce.html5.usingFlash, !0
}, S = {}, j = function() {}, R = function(t) {
    return 8 === d && 1 < t.loops && t.stream && (t.stream = !1), t
}, F = function(t) {
    return t && !t.usePolicyFile && (t.onid3 || t.usePeakData || t.useWaveformData || t.useEQData) && (t.usePolicyFile = !0), t
}, l = function() {
    return !1
}, O = function(t) {
    for (var e in t) t.hasOwnProperty(e) && "function" == typeof t[e] && (t[e] = l)
}, V = function(t) {
    t === e && (t = !1), (_e || t) && ce.disable(t)
}, B = function(t) {
    var e = null;
    if (t)
        if (t.match(/\.swf(\?.*)?$/i)) {
            if (e = t.substr(t.toLowerCase().lastIndexOf(".swf?") + 4)) return t
        } else t.lastIndexOf("/") !== t.length - 1 && (t += "/");
    return t = (t && -1 !== t.lastIndexOf("/") ? t.substr(0, t.lastIndexOf("/") + 1) : "./") + ce.movieURL, ce.noSWFCache && (t += "?ts=" + (new Date).getTime()), t
}, C = function() {
    d = parseInt(ce.flashVersion, 10), 8 !== d && 9 !== d && (ce.flashVersion = d = 8);
    var t = ce.debugMode || ce.debugFlash ? "_debug.swf" : ".swf";
    ce.useHTML5Audio && !ce.html5Only && ce.audioFormats.mp4.required && 9 > d && (ce.flashVersion = d = 9), ce.version = ce.versionNumber + (ce.html5Only ? " (HTML5-only mode)" : 9 === d ? " (AS3/Flash 9)" : " (AS2/Flash 8)"), d > 8 ? (ce.defaultOptions = p(ce.defaultOptions, ce.flash9Options), ce.features.buffering = !0, ce.defaultOptions = p(ce.defaultOptions, ce.movieStarOptions), ce.filePatterns.flash9 = RegExp("\\.(mp3|" + We.join("|") + ")(\\?.*)?$", "i"), ce.features.movieStar = !0) : ce.features.movieStar = !1, ce.filePattern = ce.filePatterns[8 !== d ? "flash9" : "flash8"], ce.movieURL = (8 === d ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", t), ce.features.peakData = ce.features.waveformData = ce.features.eqData = d > 8
}, $ = function(t, e) {
    return de ? (de._setPolling(t, e), void 0) : !1
}, D = function() {}, z = this.getSoundById, H = function() {
    var t = [];
    return ce.debugMode && t.push("sm2_debug"), ce.debugFlash && t.push("flash_debug"), ce.useHighPerformance && t.push("high_performance"), t.join(" ")
}, N = function() {
    j("fbHandler");
    var t = ce.getMoviePercent(),
        e = {
            type: "FLASHBLOCK"
        };
    return ce.html5Only ? !1 : (ce.ok() ? ce.oMC && (ce.oMC.className = [H(), "movieContainer", "swf_loaded" + (ce.didFlashBlock ? " swf_unblocked" : "")].join(" ")) : (Pe && (ce.oMC.className = H() + " movieContainer " + (null === t ? "swf_timedout" : "swf_error")), ce.didFlashBlock = !0, g({
        type: "ontimeout",
        ignoreInit: !0,
        error: e
    }), I(e)), void 0)
}, v = function(t, n, i) {
    me[t] === e && (me[t] = []), me[t].push({
        method: n,
        scope: i || null,
        fired: !1
    })
}, g = function(t) {
    if (t || (t = {
            type: ce.ok() ? "onready" : "ontimeout"
        }), !ye && t && !t.ignoreInit || "ontimeout" === t.type && (ce.ok() || _e && !t.ignoreInit)) return !1;
    var e, n = {
            success: t && t.ignoreInit ? ce.ok() : !_e
        },
        i = t && t.type ? me[t.type] || [] : [],
        r = [],
        n = [n],
        s = Pe && !ce.ok();
    for (t.error && (n[0].error = t.error), t = 0, e = i.length; e > t; t++) !0 !== i[t].fired && r.push(i[t]);
    if (r.length)
        for (t = 0, e = r.length; e > t; t++) r[t].scope ? r[t].method.apply(r[t].scope, n) : r[t].method.apply(this, n), s || (r[t].fired = !0);
    return !0
}, y = function() {
    t.setTimeout(function() {
        ce.useFlashBlock && N(), g(), "function" == typeof ce.onload && ce.onload.apply(t), ce.waitForWindowLoad && ne.add(t, "load", y)
    }, 1)
}, se = function() {
    if (re !== e) return re;
    var n, i = !1,
        r = navigator,
        s = r.plugins,
        o = t.ActiveXObject;
    if (s && s.length)(r = r.mimeTypes) && r["application/x-shockwave-flash"] && r["application/x-shockwave-flash"].enabledPlugin && r["application/x-shockwave-flash"].enabledPlugin.description && (i = !0);
    else if (o !== e && !he.match(/MSAppHost/i)) {
        try {
            n = new o("ShockwaveFlash.ShockwaveFlash")
        } catch (a) {
            n = null
        }
        i = !!n
    }
    return re = i
}, X = function() {
    var t, e, n = ce.audioFormats;
    if (Ie && he.match(/os (1|2|3_0|3_1)/i) ? (ce.hasHTML5 = !1, ce.html5Only = !0, ce.oMC && (ce.oMC.style.display = "none")) : !ce.useHTML5Audio || ce.html5 && ce.html5.canPlayType || (ce.hasHTML5 = !1), ce.useHTML5Audio && ce.hasHTML5)
        for (e in G = !0, n) n.hasOwnProperty(e) && n[e].required && (ce.html5.canPlayType(n[e].type) ? ce.preferFlash && (ce.flash[e] || ce.flash[n[e].type]) && (t = !0) : (G = !1, t = !0));
    return ce.ignoreFlash && (t = !1, G = !0), ce.html5Only = ce.hasHTML5 && ce.useHTML5Audio && !t, !ce.html5Only
}, W = function(t) {
    var e, n, i = 0;
    if (t instanceof Array) {
        for (e = 0, n = t.length; n > e; e++)
            if (t[e] instanceof Object) {
                if (ce.canPlayMIME(t[e].type)) {
                    i = e;
                    break
                }
            } else if (ce.canPlayURL(t[e])) {
            i = e;
            break
        }
        t[i].url && (t[i] = t[i].url), t = t[i]
    }
    return t
}, q = function(t) {
    t._hasTimer || (t._hasTimer = !0, !je && ce.html5PollingInterval && (null === Te && 0 === ke && (Te = setInterval(U, ce.html5PollingInterval)), ke++))
}, J = function(t) {
    t._hasTimer && (t._hasTimer = !1, !je && ce.html5PollingInterval && ke--)
}, U = function() {
    var t;
    if (null !== Te && !ke) return clearInterval(Te), Te = null, !1;
    for (t = ce.soundIDs.length - 1; t >= 0; t--) ce.sounds[ce.soundIDs[t]].isHTML5 && ce.sounds[ce.soundIDs[t]]._hasTimer && ce.sounds[ce.soundIDs[t]]._onTimer()
}, I = function(n) {
    n = n !== e ? n : {}, "function" == typeof ce.onerror && ce.onerror.apply(t, [{
        type: n.type !== e ? n.type : null
    }]), n.fatal !== e && n.fatal && ce.disable()
}, oe = function() {
    if (!Ne || !se()) return !1;
    var t, e, n = ce.audioFormats;
    for (e in n)
        if (n.hasOwnProperty(e) && ("mp3" === e || "mp4" === e) && (ce.html5[e] = !1, n[e] && n[e].related))
            for (t = n[e].related.length - 1; t >= 0; t--) ce.html5[n[e].related[t]] = !1
}, this._setSandboxType = function() {}, this._externalInterfaceOK = function() {
    return ce.swfLoaded ? !1 : (ce.swfLoaded = !0, Re = !1, Ne && oe(), setTimeout(u, De ? 100 : 1), void 0)
}, A = function(t, n) {
    function i(t, e) {
        return '<param name="' + t + '" value="' + e + '" />'
    }
    if (ve && ge) return !1;
    if (ce.html5Only) return C(), ce.oMC = a(ce.movieID), u(), ge = ve = !0, !1;
    var r, s, o, l = n || ce.url,
        c = ce.altURL || l,
        d = E(),
        h = H(),
        p = null,
        p = fe.getElementsByTagName("html")[0],
        p = p && p.dir && p.dir.match(/rtl/i);
    if (t = t === e ? ce.id : t, C(), ce.url = B(qe ? l : c), n = ce.url, ce.wmode = !ce.wmode && ce.useHighPerformance ? "transparent" : ce.wmode, null !== ce.wmode && (he.match(/msie 8/i) || !De && !ce.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (Me.push(S.spcWmode), ce.wmode = null), d = {
            name: t,
            id: t,
            src: n,
            quality: "high",
            allowScriptAccess: ce.allowScriptAccess,
            bgcolor: ce.bgColor,
            pluginspage: Je + "www.macromedia.com/go/getflashplayer",
            title: "JS/Flash audio component (SoundManager 2)",
            type: "application/x-shockwave-flash",
            wmode: ce.wmode,
            hasPriority: "true"
        }, ce.debugFlash && (d.FlashVars = "debug=1"), ce.wmode || delete d.wmode, De) l = fe.createElement("div"), s = ['<object id="' + t + '" data="' + n + '" type="' + d.type + '" title="' + d.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + Je + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', i("movie", n), i("AllowScriptAccess", ce.allowScriptAccess), i("quality", d.quality), ce.wmode ? i("wmode", ce.wmode) : "", i("bgcolor", ce.bgColor), i("hasPriority", "true"), ce.debugFlash ? i("FlashVars", d.FlashVars) : "", "</object>"].join("");
    else
        for (r in l = fe.createElement("embed"), d) d.hasOwnProperty(r) && l.setAttribute(r, d[r]);
    if (D(), h = H(), d = E())
        if (ce.oMC = a(ce.movieID) || fe.createElement("div"), ce.oMC.id) o = ce.oMC.className, ce.oMC.className = (o ? o + " " : "movieContainer") + (h ? " " + h : ""), ce.oMC.appendChild(l), De && (r = ce.oMC.appendChild(fe.createElement("div")), r.className = "sm2-object-box", r.innerHTML = s), ge = !0;
        else {
            if (ce.oMC.id = ce.movieID, ce.oMC.className = "movieContainer " + h, r = h = null, ce.useFlashBlock || (ce.useHighPerformance ? h = {
                    position: "fixed",
                    width: "8px",
                    height: "8px",
                    bottom: "0px",
                    left: "0px",
                    overflow: "hidden"
                } : (h = {
                    position: "absolute",
                    width: "6px",
                    height: "6px",
                    top: "-9999px",
                    left: "-9999px"
                }, p && (h.left = Math.abs(parseInt(h.left, 10)) + "px"))), Oe && (ce.oMC.style.zIndex = 1e4), !ce.debugFlash)
                for (o in h) h.hasOwnProperty(o) && (ce.oMC.style[o] = h[o]);
            try {
                De || ce.oMC.appendChild(l), d.appendChild(ce.oMC), De && (r = ce.oMC.appendChild(fe.createElement("div")), r.className = "sm2-object-box", r.innerHTML = s), ge = !0
            } catch (f) {
                throw Error(j("domError") + " \n" + f.toString())
            }
        }
    return ve = !0
}, k = function() {
    return ce.html5Only ? (A(), !1) : de || !ce.url ? !1 : (de = ce.getMovie(ce.id), de || (be ? (De ? ce.oMC.innerHTML = Ce : ce.oMC.appendChild(be), be = null, ve = !0) : A(ce.id, ce.url), de = ce.getMovie(ce.id)), "function" == typeof ce.oninitmovie && setTimeout(ce.oninitmovie, 1), !0)
}, _ = function() {
    setTimeout(w, 1e3)
}, b = function() {
    t.setTimeout(function() {
        ce.setup({
            preferFlash: !1
        }).reboot(), ce.didFlashBlock = !0, ce.beginDelayedInit()
    }, 1)
}, w = function() {
    var e, n = !1;
    return !ce.url || xe ? !1 : (xe = !0, ne.remove(t, "load", _), re && Re && !He ? !1 : (ye || (e = ce.getMoviePercent(), e > 0 && 100 > e && (n = !0)), setTimeout(function() {
        return e = ce.getMoviePercent(), n ? (xe = !1, t.setTimeout(_, 1), !1) : (!ye && Fe && (null === e ? ce.useFlashBlock || 0 === ce.flashLoadTimeout ? ce.useFlashBlock && N() : !ce.useFlashBlock && G ? b() : g({
            type: "ontimeout",
            ignoreInit: !0,
            error: {
                type: "INIT_FLASHBLOCK"
            }
        }) : 0 !== ce.flashLoadTimeout && (!ce.useFlashBlock && G ? b() : V(!0))), void 0)
    }, ce.flashLoadTimeout), void 0))
}, x = function() {
    return He || !Re ? (ne.remove(t, "focus", x), !0) : (He = Fe = !0, xe = !1, _(), ne.remove(t, "focus", x), !0)
}, h = function(e) {
    if (ye) return !1;
    if (ce.html5Only) return ye = !0, y(), !0;
    var n, i = !0;
    return ce.useFlashBlock && ce.flashLoadTimeout && !ce.getMoviePercent() || (ye = !0), n = {
        type: !re && Pe ? "NO_FLASH" : "INIT_TIMEOUT"
    }, (_e || e) && (ce.useFlashBlock && ce.oMC && (ce.oMC.className = H() + " " + (null === ce.getMoviePercent() ? "swf_timedout" : "swf_error")), g({
        type: "ontimeout",
        error: n,
        ignoreInit: !0
    }), I(n), i = !1), _e || (ce.waitForWindowLoad && !we ? ne.add(t, "load", y) : y()), i
}, c = function() {
    var t, n = ce.setupOptions;
    for (t in n) n.hasOwnProperty(t) && (ce[t] === e ? ce[t] = n[t] : ce[t] !== n[t] && (ce.setupOptions[t] = ce[t]))
}, u = function() {
    if (ye) return !1;
    if (ce.html5Only) return ye || (ne.remove(t, "load", ce.beginDelayedInit), ce.enabled = !0, h()), !0;
    k();
    try {
        de._externalInterfaceTest(!1), $(!0, ce.flashPollingInterval || (ce.useHighPerformance ? 10 : 50)), ce.debugMode || de._disableDebug(), ce.enabled = !0, ce.html5Only || ne.add(t, "unload", l)
    } catch (e) {
        return I({
            type: "JS_TO_FLASH_EXCEPTION",
            fatal: !0
        }), V(!0), h(), !1
    }
    return h(), ne.remove(t, "load", ce.beginDelayedInit), !0
}, M = function() {
    return L ? !1 : (L = !0, c(), D(), !re && ce.hasHTML5 && ce.setup({
        useHTML5Audio: !0,
        preferFlash: !1
    }), ee(), !re && Pe && (Me.push(S.needFlash), ce.setup({
        flashLoadTimeout: 1
    })), fe.removeEventListener && fe.removeEventListener("DOMContentLoaded", M, !1), k(), !0)
}, te = function() {
    return "complete" === fe.readyState && (M(), fe.detachEvent("onreadystatechange", te)), !0
}, P = function() {
    we = !0, ne.remove(t, "load", P)
}, T = function() {
    je && (ce.setupOptions.useHTML5Audio = !0, ce.setupOptions.preferFlash = !1, Ie || $e && !he.match(/android\s2\.3/i)) && (Ie && (ce.ignoreFlash = !0), Ee = !0)
}, T(), se(), ne.add(t, "focus", x), ne.add(t, "load", _), ne.add(t, "load", P), fe.addEventListener ? fe.addEventListener("DOMContentLoaded", M, !1) : fe.attachEvent ? fe.attachEvent("onreadystatechange", te) : I({
    type: "NO_DOM2_EVENTS",
    fatal: !0
})
}
var i = null;
void 0 !== t.SM2_DEFER && SM2_DEFER || (i = new n), t.SoundManager = n, t.soundManager = i
}(window),
function(t) {
    t.fn.maxlength = function(e) {
        var n = t(this);
        return n.each(function() {
            e = t.extend({}, {
                counterContainer: !1,
                text: "%left characters left"
            }, e);
            var n = t(this),
                i = {
                    options: e,
                    field: n,
                    counter: t('<div class="maxlength"></div>'),
                    maxLength: parseInt(n.attr("maxlength"), 10),
                    lastLength: null,
                    updateCounter: function() {
                        var e = this.field.val().length,
                            n = this.options.text.replace(/\B%(length|maxlength|left)\b/g, t.proxy(function(t, n) {
                                return "length" == n ? e : "maxlength" == n ? this.maxLength : this.maxLength - e
                            }, this));
                        this.counter.html(n), e != this.lastLength && this.updateLength(e)
                    },
                    updateLength: function(t) {
                        this.field.trigger("update.maxlength", [this.field, this.lastLength, t, this.maxLength, this.maxLength - t]), this.lastLength = t
                    }
                };
            i.maxLength && (i.field.data("maxlength", i).bind({
                "keyup change": function() {
                    t(this).data("maxlength").updateCounter()
                },
                "cut paste drop": function() {
                    setTimeout(t.proxy(function() {
                        t(this).data("maxlength").updateCounter()
                    }, this), 1)
                }
            }), e.counterContainer ? e.counterContainer.append(i.counter) : i.field.after(i.counter), i.updateCounter())
        }), n
    }
}(jQuery), ! function(t) {
    var e, n, i = "0.4.2",
        r = "hasOwnProperty",
        s = /[\.\/]/,
        o = /\s*,\s*/,
        a = "*",
        l = function(t, e) {
            return t - e
        },
        c = {
            n: {}
        },
        u = function() {
            for (var t = 0, e = this.length; e > t; t++)
                if ("undefined" != typeof this[t]) return this[t]
        },
        d = function() {
            for (var t = this.length; --t;)
                if ("undefined" != typeof this[t]) return this[t]
        },
        h = function(t, i) {
            t = String(t);
            var r, s = n,
                o = Array.prototype.slice.call(arguments, 2),
                a = h.listeners(t),
                c = 0,
                p = [],
                f = {},
                m = [],
                v = e;
            m.firstDefined = u, m.lastDefined = d, e = t, n = 0;
            for (var g = 0, y = a.length; y > g; g++) "zIndex" in a[g] && (p.push(a[g].zIndex), a[g].zIndex < 0 && (f[a[g].zIndex] = a[g]));
            for (p.sort(l); p[c] < 0;)
                if (r = f[p[c++]], m.push(r.apply(i, o)), n) return n = s, m;
            for (g = 0; y > g; g++)
                if (r = a[g], "zIndex" in r)
                    if (r.zIndex == p[c]) {
                        if (m.push(r.apply(i, o)), n) break;
                        do
                            if (c++, r = f[p[c]], r && m.push(r.apply(i, o)), n) break;
                        while (r)
                    } else f[r.zIndex] = r;
            else if (m.push(r.apply(i, o)), n) break;
            return n = s, e = v, m
        };
    h._events = c, h.listeners = function(t) {
        var e, n, i, r, o, l, u, d, h = t.split(s),
            p = c,
            f = [p],
            m = [];
        for (r = 0, o = h.length; o > r; r++) {
            for (d = [], l = 0, u = f.length; u > l; l++)
                for (p = f[l].n, n = [p[h[r]], p[a]], i = 2; i--;) e = n[i], e && (d.push(e), m = m.concat(e.f || []));
            f = d
        }
        return m
    }, h.on = function(t, e) {
        if (t = String(t), "function" != typeof e) return function() {};
        for (var n = t.split(o), i = 0, r = n.length; r > i; i++) ! function(t) {
            for (var n, i = t.split(s), r = c, o = 0, a = i.length; a > o; o++) r = r.n, r = r.hasOwnProperty(i[o]) && r[i[o]] || (r[i[o]] = {
                n: {}
            });
            for (r.f = r.f || [], o = 0, a = r.f.length; a > o; o++)
                if (r.f[o] == e) {
                    n = !0;
                    break
                }!n && r.f.push(e)
        }(n[i]);
        return function(t) {
            +t == +t && (e.zIndex = +t)
        }
    }, h.f = function(t) {
        var e = [].slice.call(arguments, 1);
        return function() {
            h.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
        }
    }, h.stop = function() {
        n = 1
    }, h.nt = function(t) {
        return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
    }, h.nts = function() {
        return e.split(s)
    }, h.off = h.unbind = function(t, e) {
        if (!t) return void(h._events = c = {
            n: {}
        });
        var n = t.split(o);
        if (n.length > 1)
            for (var i = 0, l = n.length; l > i; i++) h.off(n[i], e);
        else {
            n = t.split(s);
            var u, d, p, i, l, f, m, v = [c];
            for (i = 0, l = n.length; l > i; i++)
                for (f = 0; f < v.length; f += p.length - 2) {
                    if (p = [f, 1], u = v[f].n, n[i] != a) u[n[i]] && p.push(u[n[i]]);
                    else
                        for (d in u) u[r](d) && p.push(u[d]);
                    v.splice.apply(v, p)
                }
            for (i = 0, l = v.length; l > i; i++)
                for (u = v[i]; u.n;) {
                    if (e) {
                        if (u.f) {
                            for (f = 0, m = u.f.length; m > f; f++)
                                if (u.f[f] == e) {
                                    u.f.splice(f, 1);
                                    break
                                }!u.f.length && delete u.f
                        }
                        for (d in u.n)
                            if (u.n[r](d) && u.n[d].f) {
                                var g = u.n[d].f;
                                for (f = 0, m = g.length; m > f; f++)
                                    if (g[f] == e) {
                                        g.splice(f, 1);
                                        break
                                    }!g.length && delete u.n[d].f
                            }
                    } else {
                        delete u.f;
                        for (d in u.n) u.n[r](d) && u.n[d].f && delete u.n[d].f
                    }
                    u = u.n
                }
        }
    }, h.once = function(t, e) {
        var n = function() {
            return h.unbind(t, n), e.apply(this, arguments)
        };
        return h.on(t, n)
    }, h.version = i, h.toString = function() {
        return "You are running Eve " + i
    }, "undefined" != typeof module && module.exports ? module.exports = h : "function" == typeof define && define.amd ? define("eve", [], function() {
        return h
    }) : t.eve = h
}(this),
function(t, e) {
    "function" == typeof define && define.amd ? define(["eve"], function(n) {
        return e(t, n)
    }) : e(t, t.eve)
}(this, function(t, e) {
        var n = function(e) {
                var n = {},
                    i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                        setTimeout(t, 16)
                    },
                    r = Array.isArray || function(t) {
                        return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
                    },
                    s = 0,
                    o = "M" + (+new Date).toString(36),
                    a = function() {
                        return o + (s++).toString(36)
                    },
                    l = Date.now || function() {
                        return +new Date
                    },
                    c = function(t) {
                        var e = this;
                        if (null == t) return e.s;
                        var n = e.s - t;
                        e.b += e.dur * n, e.B += e.dur * n, e.s = t
                    },
                    u = function(t) {
                        var e = this;
                        return null == t ? e.spd : void(e.spd = t)
                    },
                    d = function(t) {
                        var e = this;
                        return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
                    },
                    h = function() {
                        var t = this;
                        delete n[t.id], t.update(), e("mina.stop." + t.id, t)
                    },
                    p = function() {
                        var t = this;
                        t.pdif || (delete n[t.id], t.update(), t.pdif = t.get() - t.b)
                    },
                    f = function() {
                        var t = this;
                        t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t)
                    },
                    m = function() {
                        var t, e = this;
                        if (r(e.start)) {
                            t = [];
                            for (var n = 0, i = e.start.length; i > n; n++) t[n] = +e.start[n] + (e.end[n] - e.start[n]) * e.easing(e.s)
                        } else t = +e.start + (e.end - e.start) * e.easing(e.s);
                        e.set(t)
                    },
                    v = function() {
                        var t = 0;
                        for (var r in n)
                            if (n.hasOwnProperty(r)) {
                                var s = n[r],
                                    o = s.get();
                                t++, s.s = (o - s.b) / (s.dur / s.spd), s.s >= 1 && (delete n[r], s.s = 1, t--, function(t) {
                                    setTimeout(function() {
                                        e("mina.finish." + t.id, t)
                                    })
                                }(s)), s.update()
                            }
                        t && i(v)
                    },
                    g = function(t, e, r, s, o, l, y) {
                        var _ = {
                            id: a(),
                            start: t,
                            end: e,
                            b: r,
                            s: 0,
                            dur: s - r,
                            spd: 1,
                            get: o,
                            set: l,
                            easing: y || g.linear,
                            status: c,
                            speed: u,
                            duration: d,
                            stop: h,
                            pause: p,
                            resume: f,
                            update: m
                        };
                        n[_.id] = _;
                        var w, b = 0;
                        for (w in n)
                            if (n.hasOwnProperty(w) && (b++, 2 == b)) break;
                        return 1 == b && i(v), _
                    };
                return g.time = l, g.getById = function(t) {
                    return n[t] || null
                }, g.linear = function(t) {
                    return t
                }, g.easeout = function(t) {
                    return Math.pow(t, 1.7)
                }, g.easein = function(t) {
                    return Math.pow(t, .48)
                }, g.easeinout = function(t) {
                    if (1 == t) return 1;
                    if (0 == t) return 0;
                    var e = .48 - t / 1.04,
                        n = Math.sqrt(.1734 + e * e),
                        i = n - e,
                        r = Math.pow(Math.abs(i), 1 / 3) * (0 > i ? -1 : 1),
                        s = -n - e,
                        o = Math.pow(Math.abs(s), 1 / 3) * (0 > s ? -1 : 1),
                        a = r + o + .5;
                    return 3 * (1 - a) * a * a + a * a * a
                }, g.backin = function(t) {
                    if (1 == t) return 1;
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                }, g.backout = function(t) {
                    if (0 == t) return 0;
                    t -= 1;
                    var e = 1.70158;
                    return t * t * ((e + 1) * t + e) + 1
                }, g.elastic = function(t) {
                    return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin(2 * (t - .075) * Math.PI / .3) + 1
                }, g.bounce = function(t) {
                    var e, n = 7.5625,
                        i = 2.75;
                    return 1 / i > t ? e = n * t * t : 2 / i > t ? (t -= 1.5 / i, e = n * t * t + .75) : 2.5 / i > t ? (t -= 2.25 / i, e = n * t * t + .9375) : (t -= 2.625 / i, e = n * t * t + .984375), e
                }, t.mina = g, g
            }("undefined" == typeof e ? function() {} : e),
            i = function() {
                function i(t, e) {
                    if (t) {
                        if (t.tagName) return S(t);
                        if (s(t, "array") && i.set) return i.set.apply(i, t);
                        if (t instanceof w) return t;
                        if (null == e) return t = k.doc.querySelector(t), S(t)
                    }
                    return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new x(t, e)
                }

                function r(t, e) {
                    if (e) {
                        if ("#text" == t && (t = k.doc.createTextNode(e.text || "")), "string" == typeof t && (t = r(t)), "string" == typeof e) return "xlink:" == e.substring(0, 6) ? t.getAttributeNS(G, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(X, e.substring(4)) : t.getAttribute(e);
                        for (var n in e)
                            if (e[T](n)) {
                                var i = M(e[n]);
                                i ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(G, n.substring(6), i) : "xml:" == n.substring(0, 4) ? t.setAttributeNS(X, n.substring(4), i) : t.setAttribute(n, i) : t.removeAttribute(n)
                            }
                    } else t = k.doc.createElementNS(X, t);
                    return t
                }

                function s(t, e) {
                    return e = M.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : "array" == e && (t instanceof Array || Array.isArray && Array.isArray(t)) ? !0 : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || B.call(t).slice(8, -1).toLowerCase() == e}

function o(t) {
    if ("function" == typeof t || Object(t) !== t) return t;
    var e = new t.constructor;
    for (var n in t) t[T](n) && (e[n] = o(t[n]));
    return e
}

function a(t, e) {
    for (var n = 0, i = t.length; i > n; n++)
        if (t[n] === e) return t.push(t.splice(n, 1)[0])
}

function l(t, e, n) {
    function i() {
        var r = Array.prototype.slice.call(arguments, 0),
            s = r.join("␀"),
            o = i.cache = i.cache || {},
            l = i.count = i.count || [];
        return o[T](s) ? (a(l, s), n ? n(o[s]) : o[s]) : (l.length >= 1e3 && delete o[l.shift()], l.push(s), o[s] = t.apply(e, r), n ? n(o[s]) : o[s])
    }
    return i
}

function c(t, e, n, i, r, s) {
    if (null == r) {
        var o = t - n,
            a = e - i;
        return o || a ? (180 + 180 * E.atan2(-a, -o) / D + 360) % 360 : 0
    }
    return c(t, e, r, s) - c(n, i, r, s)
}

function u(t) {
    return t % 360 * D / 180
}

function d(t) {
    return 180 * t / D % 360
}

function h(t) {
    var e = [];
    return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(t, n, i) {
        return i = i.split(/\s*,\s*|\s+/), "rotate" == n && 1 == i.length && i.push(0, 0), "scale" == n && (i.length > 2 ? i = i.slice(0, 2) : 2 == i.length && i.push(0, 0), 1 == i.length && i.push(i[0], 0, 0)), e.push("skewX" == n ? ["m", 1, 0, E.tan(u(i[0])), 1, 0, 0] : "skewY" == n ? ["m", 1, E.tan(u(i[0])), 0, 1, 0, 0] : [n.charAt(0)].concat(i)), t
    }), e
}

function p(t, e) {
    var n = re(t),
        r = new i.Matrix;
    if (n)
        for (var s = 0, o = n.length; o > s; s++) {
            var a, l, c, u, d, h = n[s],
                p = h.length,
                f = M(h[0]).toLowerCase(),
                m = h[0] != f,
                v = m ? r.invert() : 0;
            "t" == f && 2 == p ? r.translate(h[1], 0) : "t" == f && 3 == p ? m ? (a = v.x(0, 0), l = v.y(0, 0), c = v.x(h[1], h[2]), u = v.y(h[1], h[2]), r.translate(c - a, u - l)) : r.translate(h[1], h[2]) : "r" == f ? 2 == p ? (d = d || e, r.rotate(h[1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == p && (m ? (c = v.x(h[2], h[3]), u = v.y(h[2], h[3]), r.rotate(h[1], c, u)) : r.rotate(h[1], h[2], h[3])) : "s" == f ? 2 == p || 3 == p ? (d = d || e, r.scale(h[1], h[p - 1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == p ? m ? (c = v.x(h[2], h[3]), u = v.y(h[2], h[3]), r.scale(h[1], h[1], c, u)) : r.scale(h[1], h[1], h[2], h[3]) : 5 == p && (m ? (c = v.x(h[3], h[4]), u = v.y(h[3], h[4]), r.scale(h[1], h[2], c, u)) : r.scale(h[1], h[2], h[3], h[4])) : "m" == f && 7 == p && r.add(h[1], h[2], h[3], h[4], h[5], h[6])
        }
    return r
}

function f(t, e) {
    if (null == e) {
        var n = !0;
        if (e = t.node.getAttribute("linearGradient" == t.type || "radialGradient" == t.type ? "gradientTransform" : "pattern" == t.type ? "patternTransform" : "transform"), !e) return new i.Matrix;
        e = h(e)
    } else e = i._.rgTransform.test(e) ? M(e).replace(/\.{3}|\u2026/g, t._.transform || O) : h(e), s(e, "array") && (e = i.path ? i.path.toString.call(e) : M(e)), t._.transform = e;
    var r = p(e, t.getBBox(1));
    return n ? r : void(t.matrix = r)
}

function m(t) {
    var e = t.node.ownerSVGElement && S(t.node.ownerSVGElement) || t.node.parentNode && S(t.node.parentNode) || i.select("svg") || i(0, 0),
        n = e.select("defs"),
        r = null == n ? !1 : n.node;
    return r || (r = C("defs", e.node).node), r
}

function v(t) {
    return t.node.ownerSVGElement && S(t.node.ownerSVGElement) || i.select("svg")
}

function y(t, e, n) {
    function i(t) {
        if (null == t) return O;
        if (t == +t) return t;
        r(c, {
            width: t
        });
        try {
            return c.getBBox().width
        } catch (e) {
            return 0
        }
    }

    function s(t) {
        if (null == t) return O;
        if (t == +t) return t;
        r(c, {
            height: t
        });
        try {
            return c.getBBox().height
        } catch (e) {
            return 0
        }
    }

    function o(i, r) {
        null == e ? l[i] = r(t.attr(i) || 0) : i == e && (l = r(null == n ? t.attr(i) || 0 : n))
    }
    var a = v(t).node,
        l = {},
        c = a.querySelector(".svg---mgr");
    switch (c || (c = r("rect"), r(c, {
        x: -9e9,
        y: -9e9,
        width: 10,
        height: 10,
        "class": "svg---mgr",
        fill: "none"
    }), a.appendChild(c)), t.type) {
        case "rect":
            o("rx", i), o("ry", s);
        case "image":
            o("width", i), o("height", s);
        case "text":
            o("x", i), o("y", s);
            break;
        case "circle":
            o("cx", i), o("cy", s), o("r", i);
            break;
        case "ellipse":
            o("cx", i), o("cy", s), o("rx", i), o("ry", s);
            break;
        case "line":
            o("x1", i), o("x2", i), o("y1", s), o("y2", s);
            break;
        case "marker":
            o("refX", i), o("markerWidth", i), o("refY", s), o("markerHeight", s);
            break;
        case "radialGradient":
            o("fx", i), o("fy", s);
            break;
        case "tspan":
            o("dx", i), o("dy", s);
            break;
        default:
            o(e, i)
    }
    return a.removeChild(c), l
}

function _(t) {
    s(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
    for (var e = 0, n = 0, i = this.node; this[e];) delete this[e++];
    for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function(t) {
        i.appendChild(t.node)
    }) : i.appendChild(t[e].node);
    var r = i.childNodes;
    for (e = 0; e < r.length; e++) this[n++] = S(r[e]);
    return this
}

function w(t) {
    if (t.snap in Z) return Z[t.snap];
    var e, n = this.id = W();
    try {
        e = t.ownerSVGElement
    } catch (i) {}
    if (this.node = t, e && (this.paper = new x(e)), this.type = t.tagName, this.anims = {}, this._ = {
            transform: []
        }, t.snap = n, Z[n] = this, "g" == this.type && (this.add = _), this.type in {
            g: 1,
            mask: 1,
            pattern: 1
        })
        for (var r in x.prototype) x.prototype[T](r) && (this[r] = x.prototype[r])
}

function b(t) {
    this.node = t
}

function C(t, e) {
    var n = r(t);
    e.appendChild(n);
    var i = S(n);
    return i
}

function x(t, e) {
    var n, i, s, o = x.prototype;
    if (t && "svg" == t.tagName) {
        if (t.snap in Z) return Z[t.snap];
        var a = t.ownerDocument;
        n = new w(t), i = t.getElementsByTagName("desc")[0], s = t.getElementsByTagName("defs")[0], i || (i = r("desc"), i.appendChild(a.createTextNode("Created with Snap")), n.node.appendChild(i)), s || (s = r("defs"), n.node.appendChild(s)), n.defs = s;
        for (var l in o) o[T](l) && (n[l] = o[l]);
        n.paper = n.root = n
    } else n = C("svg", k.doc.body), r(n.node, {
        height: e,
        version: 1.1,
        width: t,
        xmlns: X
    });
    return n
}

function S(t) {
    return t ? t instanceof w || t instanceof b ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new x(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new x(t.contentDocument.getElementsByTagName("svg")[0]) : new w(t) : t
}
i.version = "0.3.0", i.toString = function() {
    return "Snap v" + this.version
}, i._ = {};
var k = {
    win: t,
    doc: t.document
};
i._.glob = k;
var T = "hasOwnProperty",
    M = String,
    P = parseFloat,
    L = parseInt,
    E = Math,
    A = E.max,
    I = E.min,
    $ = E.abs,
    D = (E.pow, E.PI),
    O = (E.round, ""),
    V = " ",
    B = Object.prototype.toString,
    j = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
    N = "   \n\f\r   ᠎             　\u2028\u2029",
    H = (i._.separator = new RegExp("[," + N + "]+"), new RegExp("[" + N + "]", "g"), new RegExp("[" + N + "]*,[" + N + "]*")),
    R = {
        hs: 1,
        rg: 1
    },
    F = new RegExp("([a-z])[" + N + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + N + "]*,?[" + N + "]*)+)", "ig"),
    z = new RegExp("([rstm])[" + N + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + N + "]*,?[" + N + "]*)+)", "ig"),
    q = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + N + "]*,?[" + N + "]*", "ig"),
    J = 0,
    U = "S" + (+new Date).toString(36),
    W = function() {
        return U + (J++).toString(36)
    },
    G = "http://www.w3.org/1999/xlink",
    X = "http://www.w3.org/2000/svg",
    Z = {},
    Q = i.url = function(t) {
        return "url('#" + t + "')"
    };
i._.$ = r, i._.id = W, i.format = function() {
    var t = /\{([^\}]+)\}/g,
        e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
        n = function(t, n, i) {
            var r = i;
            return n.replace(e, function(t, e, n, i, s) {
                e = e || i, r && (e in r && (r = r[e]), "function" == typeof r && s && (r = r()))
            }), r = (null == r || r == i ? t : r) + ""
        };
    return function(e, i) {
        return M(e).replace(t, function(t, e) {
            return n(t, e, i)
        })
    }
}(), i._.clone = o, i._.cacher = l, i.rad = u, i.deg = d, i.angle = c, i.is = s, i.snapTo = function(t, e, n) {
    if (n = s(n, "finite") ? n : 10, s(t, "array")) {
        for (var i = t.length; i--;)
            if ($(t[i] - e) <= n) return t[i]
    } else {
        t = +t;
        var r = e % t;
        if (n > r) return e - r;
        if (r > t - n) return e - r + t
    }
    return e
}, i.getRGB = l(function(t) {
    if (!t || (t = M(t)).indexOf("-") + 1) return {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        error: 1,
        toString: ee
    };
    if ("none" == t) return {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        toString: ee
    };
    if (!(R[T](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = K(t)), !t) return {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        error: 1,
        toString: ee
    };
    var e, n, r, o, a, l, c = t.match(j);
    return c ? (c[2] && (r = L(c[2].substring(5), 16), n = L(c[2].substring(3, 5), 16), e = L(c[2].substring(1, 3), 16)), c[3] && (r = L((a = c[3].charAt(3)) + a, 16), n = L((a = c[3].charAt(2)) + a, 16), e = L((a = c[3].charAt(1)) + a, 16)), c[4] && (l = c[4].split(H), e = P(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = P(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), r = P(l[2]), "%" == l[2].slice(-1) && (r *= 2.55), "rgba" == c[1].toLowerCase().slice(0, 4) && (o = P(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100)), c[5] ? (l = c[5].split(H), e = P(l[0]), "%" == l[0].slice(-1) && (e /= 100), n = P(l[1]), "%" == l[1].slice(-1) && (n /= 100), r = P(l[2]), "%" == l[2].slice(-1) && (r /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsba" == c[1].toLowerCase().slice(0, 4) && (o = P(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100), i.hsb2rgb(e, n, r, o)) : c[6] ? (l = c[6].split(H), e = P(l[0]), "%" == l[0].slice(-1) && (e /= 100), n = P(l[1]), "%" == l[1].slice(-1) && (n /= 100), r = P(l[2]), "%" == l[2].slice(-1) && (r /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsla" == c[1].toLowerCase().slice(0, 4) && (o = P(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100), i.hsl2rgb(e, n, r, o)) : (e = I(E.round(e), 255), n = I(E.round(n), 255), r = I(E.round(r), 255), o = I(A(o, 0), 1), c = {
        r: e,
        g: n,
        b: r,
        toString: ee
    }, c.hex = "#" + (16777216 | r | n << 8 | e << 16).toString(16).slice(1), c.opacity = s(o, "finite") ? o : 1, c)) : {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        error: 1,
        toString: ee
    }
}, i), i.hsb = l(function(t, e, n) {
    return i.hsb2rgb(t, e, n).hex
}), i.hsl = l(function(t, e, n) {
    return i.hsl2rgb(t, e, n).hex
}), i.rgb = l(function(t, e, n, i) {
    if (s(i, "finite")) {
        var r = E.round;
        return "rgba(" + [r(t), r(e), r(n), +i.toFixed(2)] + ")"
    }
    return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
});
var K = function(t) {
        var e = k.doc.getElementsByTagName("head")[0] || k.doc.getElementsByTagName("svg")[0],
            n = "rgb(255, 0, 0)";
        return (K = l(function(t) {
            if ("red" == t.toLowerCase()) return n;
            e.style.color = n, e.style.color = t;
            var i = k.doc.defaultView.getComputedStyle(e, O).getPropertyValue("color");
            return i == n ? null : i
        }))(t)
    },
    Y = function() {
        return "hsb(" + [this.h, this.s, this.b] + ")"
    },
    te = function() {
        return "hsl(" + [this.h, this.s, this.l] + ")"
    },
    ee = function() {
        return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
    },
    ne = function(t, e, n) {
        if (null == e && s(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && s(t, string)) {
            var r = i.getRGB(t);
            t = r.r, e = r.g, n = r.b
        }
        return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
    },
    ie = function(t, e, n, r) {
        t = E.round(255 * t), e = E.round(255 * e), n = E.round(255 * n);
        var o = {
            r: t,
            g: e,
            b: n,
            opacity: s(r, "finite") ? r : 1,
            hex: i.rgb(t, e, n),
            toString: ee
        };
        return s(r, "finite") && (o.opacity = r), o
    };
i.color = function(t) {
    var e;
    return s(t, "object") && "h" in t && "s" in t && "b" in t ? (e = i.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : s(t, "object") && "h" in t && "s" in t && "l" in t ? (e = i.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (s(t, "string") && (t = i.getRGB(t)), s(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = i.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = i.rgb2hsb(t), t.v = e.b) : (t = {
        hex: "none"
    }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = ee, t
}, i.hsb2rgb = function(t, e, n, i) {
    s(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, t = t.h, i = t.o), t *= 360;
    var r, o, a, l, c;
    return t = t % 360 / 60, c = n * e, l = c * (1 - $(t % 2 - 1)), r = o = a = n - c, t = ~~t, r += [c, l, 0, 0, l, c][t], o += [l, c, c, l, 0, 0][t], a += [0, 0, l, c, c, l][t], ie(r, o, a, i)
}, i.hsl2rgb = function(t, e, n, i) {
    s(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
    var r, o, a, l, c;
    return t = t % 360 / 60, c = 2 * e * (.5 > n ? n : 1 - n), l = c * (1 - $(t % 2 - 1)), r = o = a = n - c / 2, t = ~~t, r += [c, l, 0, 0, l, c][t], o += [l, c, c, l, 0, 0][t], a += [0, 0, l, c, c, l][t], ie(r, o, a, i)
}, i.rgb2hsb = function(t, e, n) {
    n = ne(t, e, n), t = n[0], e = n[1], n = n[2];
    var i, r, s, o;
    return s = A(t, e, n), o = s - I(t, e, n), i = 0 == o ? null : s == t ? (e - n) / o : s == e ? (n - t) / o + 2 : (t - e) / o + 4, i = (i + 360) % 6 * 60 / 360, r = 0 == o ? 0 : o / s, {
        h: i,
        s: r,
        b: s,
        toString: Y
    }
}, i.rgb2hsl = function(t, e, n) {
    n = ne(t, e, n), t = n[0], e = n[1], n = n[2];
    var i, r, s, o, a, l;
    return o = A(t, e, n), a = I(t, e, n), l = o - a, i = 0 == l ? null : o == t ? (e - n) / l : o == e ? (n - t) / l + 2 : (t - e) / l + 4, i = (i + 360) % 6 * 60 / 360, s = (o + a) / 2, r = 0 == l ? 0 : .5 > s ? l / (2 * s) : l / (2 - 2 * s), {
        h: i,
        s: r,
        l: s,
        toString: te
    }
}, i.parsePathString = function(t) {
    if (!t) return null;
    var e = i.path(t);
    if (e.arr) return i.path.clone(e.arr);
    var n = {
            a: 7,
            c: 6,
            o: 2,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            u: 3,
            z: 0
        },
        r = [];
    return s(t, "array") && s(t[0], "array") && (r = i.path.clone(t)), r.length || M(t).replace(F, function(t, e, i) {
        var s = [],
            o = e.toLowerCase();
        if (i.replace(q, function(t, e) {
                e && s.push(+e)
            }), "m" == o && s.length > 2 && (r.push([e].concat(s.splice(0, 2))), o = "l", e = "m" == e ? "l" : "L"), "o" == o && 1 == s.length && r.push([e, s[0]]), "r" == o) r.push([e].concat(s));
        else
            for (; s.length >= n[o] && (r.push([e].concat(s.splice(0, n[o]))), n[o]););
    }), r.toString = i.path.toString, e.arr = i.path.clone(r), r
};
var re = i.parseTransformString = function(t) {
    if (!t) return null;
    var e = [];
    return s(t, "array") && s(t[0], "array") && (e = i.path.clone(t)), e.length || M(t).replace(z, function(t, n, i) {
        var r = [];
        n.toLowerCase(), i.replace(q, function(t, e) {
            e && r.push(+e)
        }), e.push([n].concat(r))
    }), e.toString = i.path.toString, e
};
i._.svgTransform2string = h, i._.rgTransform = new RegExp("^[a-z][" + N + "]*-?\\.?\\d", "i"), i._.transform2matrix = p, i._unit2px = y, k.doc.contains || k.doc.compareDocumentPosition ? function(t, e) {
        var n = 9 == t.nodeType ? t.documentElement : t,
            i = e && e.parentNode;
        return t == i || !(!i || 1 != i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
    } : function(t, e) {
        if (e)
            for (; e;)
                if (e = e.parentNode, e == t) return !0;
        return !1
    }, i._.getSomeDefs = m, i._.getSomeSVG = v, i.select = function(t) {
        return S(k.doc.querySelector(t))
    }, i.selectAll = function(t) {
        for (var e = k.doc.querySelectorAll(t), n = (i.set || Array)(), r = 0; r < e.length; r++) n.push(S(e[r]));
        return n
    }, setInterval(function() {
        for (var t in Z)
            if (Z[T](t)) {
                var e = Z[t],
                    n = e.node;
                ("svg" != e.type && !n.ownerSVGElement || "svg" == e.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete Z[t]
            }
    }, 1e4),
    function(t) {
        function o(t) {
            function e(t, e) {
                var n = r(t.node, e);
                n = n && n.match(o), n = n && n[2], n && "#" == n.charAt() && (n = n.substring(1), n && (l[n] = (l[n] || []).concat(function(n) {
                    var i = {};
                    i[e] = Q(n), r(t.node, i)
                })))
            }

            function n(t) {
                var e = r(t.node, "xlink:href");
                e && "#" == e.charAt() && (e = e.substring(1), e && (l[e] = (l[e] || []).concat(function(e) {
                    t.attr("xlink:href", "#" + e)
                })))
            }
            for (var i, s = t.selectAll("*"), o = /^\s*url\(("|'|)(.*)\1\)\s*$/, a = [], l = {}, c = 0, u = s.length; u > c; c++) {
                i = s[c], e(i, "fill"), e(i, "stroke"), e(i, "filter"), e(i, "mask"), e(i, "clip-path"), n(i);
                var d = r(i.node, "id");
                d && (r(i.node, {
                    id: i.id
                }), a.push({
                    old: d,
                    id: i.id
                }))
            }
            for (c = 0, u = a.length; u > c; c++) {
                var h = l[a[c].old];
                if (h)
                    for (var p = 0, f = h.length; f > p; p++) h[p](a[c].id)
            }
        }

        function a(t, e, n) {
            return function(i) {
                var r = i.slice(t, e);
                return 1 == r.length && (r = r[0]), n ? n(r) : r
            }
        }

        function l(t) {
            return function() {
                var e = t ? "<" + this.type : "",
                    n = this.node.attributes,
                    i = this.node.childNodes;
                if (t)
                    for (var r = 0, s = n.length; s > r; r++) e += " " + n[r].name + '="' + n[r].value.replace(/"/g, '\\"') + '"';
                if (i.length) {
                    for (t && (e += ">"), r = 0, s = i.length; s > r; r++) 3 == i[r].nodeType ? e += i[r].nodeValue : 1 == i[r].nodeType && (e += S(i[r]).toString());
                    t && (e += "</" + this.type + ">")
                } else t && (e += "/>");
                return e
            }
        }
        t.attr = function(t, n) {
            var i = this;
            if (i.node, !t) return i;
            if (s(t, "string")) {
                if (!(arguments.length > 1)) return e("snap.util.getattr." + t, i).firstDefined();
                var r = {};
                r[t] = n, t = r
            }
            for (var o in t) t[T](o) && e("snap.util.attr." + o, i, t[o]);
            return i
        }, t.getBBox = function(t) {
            if (!i.Matrix || !i.path) return this.node.getBBox();
            var e = this,
                n = new i.Matrix;
            if (e.removed) return i._.box();
            for (;
                "use" == e.type;)
                if (t || (n = n.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original;
                else {
                    var r = e.attr("xlink:href");
                    e = e.original = e.node.ownerDocument.getElementById(r.substring(r.indexOf("#") + 1))
                }
            var s = e._,
                o = i.path.get[e.type] || i.path.get.deflt;
            try {
                return t ? (s.bboxwt = o ? i.path.getBBox(e.realPath = o(e)) : i._.box(e.node.getBBox()), i._.box(s.bboxwt)) : (e.realPath = o(e), e.matrix = e.transform().localMatrix, s.bbox = i.path.getBBox(i.path.map(e.realPath, n.add(e.matrix))), i._.box(s.bbox))
            } catch (a) {
                return i._.box()
            }
        };
        var c = function() {
            return this.string
        };
        t.transform = function(t) {
            var e = this._;
            if (null == t) {
                for (var n, s = this, o = new i.Matrix(this.node.getCTM()), a = f(this), l = [a], u = new i.Matrix, d = a.toTransformString(), h = M(a) == M(this.matrix) ? M(e.transform) : d;
                    "svg" != s.type && (s = s.parent());) l.push(f(s));
                for (n = l.length; n--;) u.add(l[n]);
                return {
                    string: h,
                    globalMatrix: o,
                    totalMatrix: u,
                    localMatrix: a,
                    diffMatrix: o.clone().add(a.invert()),
                    global: o.toTransformString(),
                    total: u.toTransformString(),
                    local: d,
                    toString: c
                }
            }
            return t instanceof i.Matrix ? this.matrix = t : f(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? r(this.node, {
                gradientTransform: this.matrix
            }) : "pattern" == this.type ? r(this.node, {
                patternTransform: this.matrix
            }) : r(this.node, {
                transform: this.matrix
            })), this
        }, t.parent = function() {
            return S(this.node.parentNode)
        }, t.append = t.add = function(t) {
            if (t) {
                if ("set" == t.type) {
                    var e = this;
                    return t.forEach(function(t) {
                        e.add(t)
                    }), this
                }
                t = S(t), this.node.appendChild(t.node), t.paper = this.paper
            }
            return this
        }, t.appendTo = function(t) {
            return t && (t = S(t), t.append(this)), this
        }, t.prepend = function(t) {
            if (t) {
                if ("set" == t.type) {
                    var e, n = this;
                    return t.forEach(function(t) {
                        e ? e.after(t) : n.prepend(t), e = t
                    }), this
                }
                t = S(t);
                var i = t.parent();
                this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), i && i.add()
            }
            return this
        }, t.prependTo = function(t) {
            return t = S(t), t.prepend(this), this
        }, t.before = function(t) {
            if ("set" == t.type) {
                var e = this;
                return t.forEach(function(t) {
                    var n = t.parent();
                    e.node.parentNode.insertBefore(t.node, e.node), n && n.add()
                }), this.parent().add(), this
            }
            t = S(t);
            var n = t.parent();
            return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), n && n.add(), t.paper = this.paper, this
        }, t.after = function(t) {
            t = S(t);
            var e = t.parent();
            return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
        }, t.insertBefore = function(t) {
            t = S(t);
            var e = this.parent();
            return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
        }, t.insertAfter = function(t) {
            t = S(t);
            var e = this.parent();
            return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
        }, t.remove = function() {
            var t = this.parent();
            return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
        }, t.select = function(t) {
            return S(this.node.querySelector(t))
        }, t.selectAll = function(t) {
            for (var e = this.node.querySelectorAll(t), n = (i.set || Array)(), r = 0; r < e.length; r++) n.push(S(e[r]));
            return n
        }, t.asPX = function(t, e) {
            return null == e && (e = this.attr(t)), +y(this, t, e)
        }, t.use = function() {
            var t, e = this.node.id;
            return e || (e = this.id, r(this.node, {
                id: e
            })), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? C(this.type, this.node.parentNode) : C("use", this.node.parentNode), r(t.node, {
                "xlink:href": "#" + e
            }), t.original = this, t
        };
        var u = /\S+/g;
        t.addClass = function(t) {
            var e, n, i, r, s = (t || "").match(u) || [],
                o = this.node,
                a = o.className.baseVal,
                l = a.match(u) || [];
            if (s.length) {
                for (e = 0; i = s[e++];) n = l.indexOf(i), ~n || l.push(i);
                r = l.join(" "), a != r && (o.className.baseVal = r)
            }
            return this
        }, t.removeClass = function(t) {
            var e, n, i, r, s = (t || "").match(u) || [],
                o = this.node,
                a = o.className.baseVal,
                l = a.match(u) || [];
            if (l.length) {
                for (e = 0; i = s[e++];) n = l.indexOf(i), ~n && l.splice(n, 1);
                r = l.join(" "), a != r && (o.className.baseVal = r)
            }
            return this
        }, t.hasClass = function(t) {
            var e = this.node,
                n = e.className.baseVal,
                i = n.match(u) || [];
            return !!~i.indexOf(t)
        }, t.toggleClass = function(t, e) {
            if (null != e) return e ? this.addClass(t) : this.removeClass(t);
            var n, i, r, s, o = (t || "").match(u) || [],
                a = this.node,
                l = a.className.baseVal,
                c = l.match(u) || [];
            for (n = 0; r = o[n++];) i = c.indexOf(r), ~i ? c.splice(i, 1) : c.push(r);
            return s = c.join(" "), l != s && (a.className.baseVal = s), this
        }, t.clone = function() {
            var t = S(this.node.cloneNode(!0));
            return r(t.node, "id") && r(t.node, {
                id: t.id
            }), o(t), t.insertAfter(this), t
        }, t.toDefs = function() {
            var t = m(this);
            return t.appendChild(this.node), this
        }, t.pattern = t.toPattern = function(t, e, n, i) {
            var o = C("pattern", m(this));
            return null == t && (t = this.getBBox()), s(t, "object") && "x" in t && (e = t.y, n = t.width, i = t.height, t = t.x), r(o.node, {
                x: t,
                y: e,
                width: n,
                height: i,
                patternUnits: "userSpaceOnUse",
                id: o.id,
                viewBox: [t, e, n, i].join(" ")
            }), o.node.appendChild(this.node), o
        }, t.marker = function(t, e, n, i, o, a) {
            var l = C("marker", m(this));
            return null == t && (t = this.getBBox()), s(t, "object") && "x" in t && (e = t.y, n = t.width, i = t.height, o = t.refX || t.cx, a = t.refY || t.cy, t = t.x), r(l.node, {
                viewBox: [t, e, n, i].join(V),
                markerWidth: n,
                markerHeight: i,
                orient: "auto",
                refX: o || 0,
                refY: a || 0,
                id: l.id
            }), l.node.appendChild(this.node), l
        };
        var d = function(t, e, i, r) {
            "function" != typeof i || i.length || (r = i, i = n.linear), this.attr = t, this.dur = e, i && (this.easing = i), r && (this.callback = r)
        };
        i._.Animation = d, i.animation = function(t, e, n, i) {
            return new d(t, e, n, i)
        }, t.inAnim = function() {
            var t = this,
                e = [];
            for (var n in t.anims) t.anims[T](n) && ! function(t) {
                e.push({
                    anim: new d(t._attrs, t.dur, t.easing, t._callback),
                    mina: t,
                    curStatus: t.status(),
                    status: function(e) {
                        return t.status(e)
                    },
                    stop: function() {
                        t.stop()
                    }
                })
            }(t.anims[n]);
            return e
        }, i.animate = function(t, i, r, s, o, a) {
            "function" != typeof o || o.length || (a = o, o = n.linear);
            var l = n.time(),
                c = n(t, i, l, l + s, n.time, r, o);
            return a && e.once("mina.finish." + c.id, a), c
        }, t.stop = function() {
            for (var t = this.inAnim(), e = 0, n = t.length; n > e; e++) t[e].stop();
            return this
        }, t.animate = function(t, i, r, o) {
            "function" != typeof r || r.length || (o = r, r = n.linear), t instanceof d && (o = t.callback, r = t.easing, i = r.dur, t = t.attr);
            var l, c, u, h, p = [],
                f = [],
                m = {},
                v = this;
            for (var g in t)
                if (t[T](g)) {
                    v.equal ? (h = v.equal(g, M(t[g])), l = h.from, c = h.to, u = h.f) : (l = +v.attr(g), c = +t[g]);
                    var y = s(l, "array") ? l.length : 1;
                    m[g] = a(p.length, p.length + y, u), p = p.concat(l), f = f.concat(c)
                }
            var _ = n.time(),
                w = n(p, f, _, _ + i, n.time, function(t) {
                    var e = {};
                    for (var n in m) m[T](n) && (e[n] = m[n](t));
                    v.attr(e)
                }, r);
            return v.anims[w.id] = w, w._attrs = t, w._callback = o, e("snap.animcreated." + v.id, w), e.once("mina.finish." + w.id, function() {
                delete v.anims[w.id], o && o.call(v)
            }), e.once("mina.stop." + w.id, function() {
                delete v.anims[w.id]
            }), v
        };
        var h = {};
        t.data = function(t, n) {
            var r = h[this.id] = h[this.id] || {};
            if (0 == arguments.length) return e("snap.data.get." + this.id, this, r, null), r;
            if (1 == arguments.length) {
                if (i.is(t, "object")) {
                    for (var s in t) t[T](s) && this.data(s, t[s]);
                    return this
                }
                return e("snap.data.get." + this.id, this, r[t], t), r[t]
            }
            return r[t] = n, e("snap.data.set." + this.id, this, n, t), this
        }, t.removeData = function(t) {
            return null == t ? h[this.id] = {} : h[this.id] && delete h[this.id][t], this
        }, t.outerSVG = t.toString = l(1), t.innerSVG = l()
    }(w.prototype), i.parse = function(t) {
        var e = k.doc.createDocumentFragment(),
            n = !0,
            i = k.doc.createElement("div");
        if (t = M(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n = !1), i.innerHTML = t, t = i.getElementsByTagName("svg")[0])
            if (n) e = t;
            else
                for (; t.firstChild;) e.appendChild(t.firstChild);
        return i.innerHTML = O, new b(e)
    }, b.prototype.select = w.prototype.select, b.prototype.selectAll = w.prototype.selectAll, i.fragment = function() {
        for (var t = Array.prototype.slice.call(arguments, 0), e = k.doc.createDocumentFragment(), n = 0, r = t.length; r > n; n++) {
            var s = t[n];
            s.node && s.node.nodeType && e.appendChild(s.node), s.nodeType && e.appendChild(s), "string" == typeof s && e.appendChild(i.parse(s).node)
        }
        return new b(e)
    }, i._.make = C, i._.wrap = S, x.prototype.el = function(t, e) {
        var n = C(t, this.node);
        return e && n.attr(e), n
    }, e.on("snap.util.getattr", function() {
        var t = e.nt();
        t = t.substring(t.lastIndexOf(".") + 1);
        var n = t.replace(/[A-Z]/g, function(t) {
            return "-" + t.toLowerCase()
        });
        return se[T](n) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : r(this.node, t)
    });
var se = {
    "alignment-baseline": 0,
    "baseline-shift": 0,
    clip: 0,
    "clip-path": 0,
    "clip-rule": 0,
    color: 0,
    "color-interpolation": 0,
    "color-interpolation-filters": 0,
    "color-profile": 0,
    "color-rendering": 0,
    cursor: 0,
    direction: 0,
    display: 0,
    "dominant-baseline": 0,
    "enable-background": 0,
    fill: 0,
    "fill-opacity": 0,
    "fill-rule": 0,
    filter: 0,
    "flood-color": 0,
    "flood-opacity": 0,
    font: 0,
    "font-family": 0,
    "font-size": 0,
    "font-size-adjust": 0,
    "font-stretch": 0,
    "font-style": 0,
    "font-variant": 0,
    "font-weight": 0,
    "glyph-orientation-horizontal": 0,
    "glyph-orientation-vertical": 0,
    "image-rendering": 0,
    kerning: 0,
    "letter-spacing": 0,
    "lighting-color": 0,
    marker: 0,
    "marker-end": 0,
    "marker-mid": 0,
    "marker-start": 0,
    mask: 0,
    opacity: 0,
    overflow: 0,
    "pointer-events": 0,
    "shape-rendering": 0,
    "stop-color": 0,
    "stop-opacity": 0,
    stroke: 0,
    "stroke-dasharray": 0,
    "stroke-dashoffset": 0,
    "stroke-linecap": 0,
    "stroke-linejoin": 0,
    "stroke-miterlimit": 0,
    "stroke-opacity": 0,
    "stroke-width": 0,
    "text-anchor": 0,
    "text-decoration": 0,
    "text-rendering": 0,
    "unicode-bidi": 0,
    visibility: 0,
    "word-spacing": 0,
    "writing-mode": 0
};
e.on("snap.util.attr", function(t) {
        var n = e.nt(),
            i = {};
        n = n.substring(n.lastIndexOf(".") + 1), i[n] = t;
        var s = n.replace(/-(\w)/gi, function(t, e) {
                return e.toUpperCase()
            }),
            o = n.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase()
            });
        se[T](o) ? this.node.style[s] = null == t ? O : t : r(this.node, i)
    }),
    function() {}(x.prototype), i.ajax = function(t, n, i, r) {
        var o = new XMLHttpRequest,
            a = W();
        if (o) {
            if (s(n, "function")) r = i, i = n, n = null;
            else if (s(n, "object")) {
                var l = [];
                for (var c in n) n.hasOwnProperty(c) && l.push(encodeURIComponent(c) + "=" + encodeURIComponent(n[c]));
                n = l.join("&")
            }
            return o.open(n ? "POST" : "GET", t, !0), n && (o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), i && (e.once("snap.ajax." + a + ".0", i), e.once("snap.ajax." + a + ".200", i), e.once("snap.ajax." + a + ".304", i)), o.onreadystatechange = function() {
                4 == o.readyState && e("snap.ajax." + a + "." + o.status, r, o)
            }, 4 == o.readyState ? o : (o.send(n), o)
        }
    }, i.load = function(t, e, n) {
        i.ajax(t, function(t) {
            var r = i.parse(t.responseText);
            n ? e.call(n, r) : e(r)
        })
    };
var oe = function(t) {
    var e = t.getBoundingClientRect(),
        n = t.ownerDocument,
        i = n.body,
        r = n.documentElement,
        s = r.clientTop || i.clientTop || 0,
        o = r.clientLeft || i.clientLeft || 0,
        a = e.top + (g.win.pageYOffset || r.scrollTop || i.scrollTop) - s,
        l = e.left + (g.win.pageXOffset || r.scrollLeft || i.scrollLeft) - o;
    return {
        y: a,
        x: l
    }
};
return i.getElementByPoint = function(t, e) {
    var n = this,
        i = (n.canvas, k.doc.elementFromPoint(t, e));
    if (k.win.opera && "svg" == i.tagName) {
        var r = oe(i),
            s = i.createSVGRect();
        s.x = t - r.x, s.y = e - r.y, s.width = s.height = 1;
        var o = i.getIntersectionList(s, null);
        o.length && (i = o[o.length - 1])
    }
    return i ? S(i) : null
}, i.plugin = function(t) {
    t(i, w, x, k, b)
}, k.win.Snap = i, i
}();
return i.plugin(function(t) {
        function e(t, e, i, r, s, o) {
            return null == e && "[object SVGMatrix]" == n.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +i, this.d = +r, this.e = +s, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }
        var n = Object.prototype.toString,
            i = String,
            r = Math,
            s = "";
        ! function(n) {
            function o(t) {
                return t[0] * t[0] + t[1] * t[1]
            }

            function a(t) {
                var e = r.sqrt(o(t));
                t[0] && (t[0] /= e), t[1] && (t[1] /= e)
            }
            n.add = function(t, n, i, r, s, o) {
                var a, l, c, u, d = [
                        [],
                        [],
                        []
                    ],
                    h = [
                        [this.a, this.c, this.e],
                        [this.b, this.d, this.f],
                        [0, 0, 1]
                    ],
                    p = [
                        [t, i, s],
                        [n, r, o],
                        [0, 0, 1]
                    ];
                for (t && t instanceof e && (p = [
                        [t.a, t.c, t.e],
                        [t.b, t.d, t.f],
                        [0, 0, 1]
                    ]), a = 0; 3 > a; a++)
                    for (l = 0; 3 > l; l++) {
                        for (u = 0, c = 0; 3 > c; c++) u += h[a][c] * p[c][l];
                        d[a][l] = u
                    }
                return this.a = d[0][0], this.b = d[1][0], this.c = d[0][1], this.d = d[1][1], this.e = d[0][2], this.f = d[1][2], this
            }, n.invert = function() {
                var t = this,
                    n = t.a * t.d - t.b * t.c;
                return new e(t.d / n, -t.b / n, -t.c / n, t.a / n, (t.c * t.f - t.d * t.e) / n, (t.b * t.e - t.a * t.f) / n)
            }, n.clone = function() {
                return new e(this.a, this.b, this.c, this.d, this.e, this.f)
            }, n.translate = function(t, e) {
                return this.add(1, 0, 0, 1, t, e)
            }, n.scale = function(t, e, n, i) {
                return null == e && (e = t), (n || i) && this.add(1, 0, 0, 1, n, i), this.add(t, 0, 0, e, 0, 0), (n || i) && this.add(1, 0, 0, 1, -n, -i), this
            }, n.rotate = function(e, n, i) {
                e = t.rad(e), n = n || 0, i = i || 0;
                var s = +r.cos(e).toFixed(9),
                    o = +r.sin(e).toFixed(9);
                return this.add(s, o, -o, s, n, i), this.add(1, 0, 0, 1, -n, -i)
            }, n.x = function(t, e) {
                return t * this.a + e * this.c + this.e
            }, n.y = function(t, e) {
                return t * this.b + e * this.d + this.f
            }, n.get = function(t) {
                return +this[i.fromCharCode(97 + t)].toFixed(4)
            }, n.toString = function() {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }, n.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, n.determinant = function() {
                return this.a * this.d - this.b * this.c
            }, n.split = function() {
                var e = {};
                e.dx = this.e, e.dy = this.f;
                var n = [
                    [this.a, this.c],
                    [this.b, this.d]
                ];
                e.scalex = r.sqrt(o(n[0])), a(n[0]), e.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * e.shear, n[1][1] - n[0][1] * e.shear], e.scaley = r.sqrt(o(n[1])), a(n[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
                var i = -n[0][1],
                    s = n[1][1];
                return 0 > s ? (e.rotate = t.deg(r.acos(s)), 0 > i && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(r.asin(i)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
            }, n.toTransformString = function(t) {
                var e = t || this.split();
                return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : s) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : s) + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : s))
            }
        }(e.prototype), t.Matrix = e, t.matrix = function(t, n, i, r, s, o) {
            return new e(t, n, i, r, s, o)
        }
    }), i.plugin(function(t, n, i, r, s) {
            function o(i) {
                return function(r) {
                    if (e.stop(), r instanceof s && 1 == r.node.childNodes.length && ("radialGradient" == r.node.firstChild.tagName || "linearGradient" == r.node.firstChild.tagName || "pattern" == r.node.firstChild.tagName) && (r = r.node.firstChild, p(this).appendChild(r), r = d(r)), r instanceof n)
                        if ("radialGradient" == r.type || "linearGradient" == r.type || "pattern" == r.type) {
                            r.node.id || m(r.node, {
                                id: r.id
                            });
                            var o = v(r.node.id)
                        } else o = r.attr(i);
                    else if (o = t.color(r), o.error) {
                        var a = t(p(this).ownerSVGElement).gradient(r);
                        a ? (a.node.id || m(a.node, {
                            id: a.id
                        }), o = v(a.node.id)) : o = r
                    } else o = g(o);
                    var l = {};
                    l[i] = o, m(this.node, l), this.node.style[i] = _
                }
            }

            function a(t) {
                e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
            }

            function l(t) {
                for (var e = [], n = t.childNodes, i = 0, r = n.length; r > i; i++) {
                    var s = n[i];
                    3 == s.nodeType && e.push(s.nodeValue), "tspan" == s.tagName && e.push(1 == s.childNodes.length && 3 == s.firstChild.nodeType ? s.firstChild.nodeValue : l(s))
                }
                return e
            }

            function c() {
                return e.stop(), this.node.style.fontSize
            }
            var u = t._.make,
                d = t._.wrap,
                h = t.is,
                p = t._.getSomeDefs,
                f = /^url\(#?([^)]+)\)$/,
                m = t._.$,
                v = t.url,
                g = String,
                y = t._.separator,
                _ = "";
            e.on("snap.util.attr.mask", function(t) {
                    if (t instanceof n || t instanceof s) {
                        if (e.stop(), t instanceof s && 1 == t.node.childNodes.length && (t = t.node.firstChild, p(this).appendChild(t), t = d(t)), "mask" == t.type) var i = t;
                        else i = u("mask", p(this)), i.node.appendChild(t.node);
                        !i.node.id && m(i.node, {
                            id: i.id
                        }), m(this.node, {
                            mask: v(i.id)
                        })
                    }
                }),
                function(t) {
                    e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
                }(function(t) {
                    if (t instanceof n || t instanceof s) {
                        if (e.stop(), "clipPath" == t.type) var i = t;
                        else i = u("clipPath", p(this)), i.node.appendChild(t.node), !i.node.id && m(i.node, {
                            id: i.id
                        });
                        m(this.node, {
                            "clip-path": v(i.id)
                        })
                    }
                }), e.on("snap.util.attr.fill", o("fill")), e.on("snap.util.attr.stroke", o("stroke"));
            var w = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
            e.on("snap.util.grad.parse", function(t) {
                    t = g(t);
                    var e = t.match(w);
                    if (!e) return null;
                    var n = e[1],
                        i = e[2],
                        r = e[3];
                    return i = i.split(/\s*,\s*/).map(function(t) {
                        return +t == t ? +t : t
                    }), 1 == i.length && 0 == i[0] && (i = []), r = r.split("-"), r = r.map(function(t) {
                        t = t.split(":");
                        var e = {
                            color: t[0]
                        };
                        return t[1] && (e.offset = parseFloat(t[1])), e
                    }), {
                        type: n,
                        params: i,
                        stops: r
                    }
                }), e.on("snap.util.attr.d", function(n) {
                    e.stop(), h(n, "array") && h(n[0], "array") && (n = t.path.toString.call(n)), n = g(n), n.match(/[ruo]/i) && (n = t.path.toAbsolute(n)), m(this.node, {
                        d: n
                    })
                })(-1), e.on("snap.util.attr.#text", function(t) {
                    e.stop(), t = g(t);
                    for (var n = r.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                    this.node.appendChild(n)
                })(-1), e.on("snap.util.attr.path", function(t) {
                    e.stop(), this.attr({
                        d: t
                    })
                })(-1), e.on("snap.util.attr.class", function(t) {
                    e.stop(), this.node.className.baseVal = t
                })(-1), e.on("snap.util.attr.viewBox", function(t) {
                    var n;
                    n = h(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : h(t, "array") ? t.join(" ") : t, m(this.node, {
                        viewBox: n
                    }), e.stop()
                })(-1), e.on("snap.util.attr.transform", function(t) {
                    this.transform(t), e.stop()
                })(-1), e.on("snap.util.attr.r", function(t) {
                    "rect" == this.type && (e.stop(), m(this.node, {
                        rx: t,
                        ry: t
                    }))
                })(-1), e.on("snap.util.attr.textpath", function(t) {
                    if (e.stop(), "text" == this.type) {
                        var i, r, s;
                        if (!t && this.textPath) {
                            for (r = this.textPath; r.node.firstChild;) this.node.appendChild(r.node.firstChild);
                            return r.remove(), void delete this.textPath
                        }
                        if (h(t, "string")) {
                            var o = p(this),
                                a = d(o.parentNode).path(t);
                            o.appendChild(a.node), i = a.id, a.attr({
                                id: i
                            })
                        } else t = d(t), t instanceof n && (i = t.attr("id"), i || (i = t.id, t.attr({
                            id: i
                        })));
                        if (i)
                            if (r = this.textPath, s = this.node, r) r.attr({
                                "xlink:href": "#" + i
                            });
                            else {
                                for (r = m("textPath", {
                                        "xlink:href": "#" + i
                                    }); s.firstChild;) r.appendChild(s.firstChild);
                                s.appendChild(r), this.textPath = d(r)
                            }
                    }
                })(-1), e.on("snap.util.attr.text", function(t) {
                    if ("text" == this.type) {
                        for (var n = this.node, i = function(t) {
                                var e = m("tspan");
                                if (h(t, "array"))
                                    for (var n = 0; n < t.length; n++) e.appendChild(i(t[n]));
                                else e.appendChild(r.doc.createTextNode(t));
                                return e.normalize && e.normalize(), e
                            }; n.firstChild;) n.removeChild(n.firstChild);
                        for (var s = i(t); s.firstChild;) n.appendChild(s.firstChild)
                    }
                    e.stop()
                })(-1), e.on("snap.util.attr.fontSize", a)(-1), e.on("snap.util.attr.font-size", a)(-1), e.on("snap.util.getattr.transform", function() {
                    return e.stop(), this.transform()
                })(-1), e.on("snap.util.getattr.textpath", function() {
                    return e.stop(), this.textPath
                })(-1),
                function() {
                    function n(n) {
                        return function() {
                            e.stop();
                            var i = r.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n);
                            return "none" == i ? i : t(r.doc.getElementById(i.match(f)[1]))
                        }
                    }

                    function i(t) {
                        return function(n) {
                                e.stop();var i = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
if ("" == n || !n) return void(this.node.style[i] = "none");
if ("marker" == n.type) {
    var r = n.node.id;
    return r || m(n.node, {
        id: n.id
    }), void(this.node.style[i] = v(r))
}
}
}
e.on("snap.util.getattr.marker-end", n("end"))(-1), e.on("snap.util.getattr.markerEnd", n("end"))(-1), e.on("snap.util.getattr.marker-start", n("start"))(-1), e.on("snap.util.getattr.markerStart", n("start"))(-1), e.on("snap.util.getattr.marker-mid", n("mid"))(-1), e.on("snap.util.getattr.markerMid", n("mid"))(-1), e.on("snap.util.attr.marker-end", i("end"))(-1), e.on("snap.util.attr.markerEnd", i("end"))(-1), e.on("snap.util.attr.marker-start", i("start"))(-1), e.on("snap.util.attr.markerStart", i("start"))(-1), e.on("snap.util.attr.marker-mid", i("mid"))(-1), e.on("snap.util.attr.markerMid", i("mid"))(-1)
}(), e.on("snap.util.getattr.r", function() {
return "rect" == this.type && m(this.node, "rx") == m(this.node, "ry") ? (e.stop(), m(this.node, "rx")) : void 0
})(-1), e.on("snap.util.getattr.text", function() {
if ("text" == this.type || "tspan" == this.type) {
    e.stop();
    var t = l(this.node);
    return 1 == t.length ? t[0] : t
}
})(-1), e.on("snap.util.getattr.#text", function() {
return this.node.textContent
})(-1), e.on("snap.util.getattr.viewBox", function() {
e.stop();
var n = m(this.node, "viewBox");
return n ? (n = n.split(y), t._.box(+n[0], +n[1], +n[2], +n[3])) : void 0
})(-1), e.on("snap.util.getattr.points", function() {
var t = m(this.node, "points");
return e.stop(), t ? t.split(y) : void 0
})(-1), e.on("snap.util.getattr.path", function() {
var t = m(this.node, "d");
return e.stop(), t
})(-1), e.on("snap.util.getattr.class", function() {
return this.node.className.baseVal
})(-1), e.on("snap.util.getattr.fontSize", c)(-1), e.on("snap.util.getattr.font-size", c)(-1)
}), i.plugin(function() {
        function t(t) {
            return t
        }

        function n(t) {
            return function(e) {
                return +e.toFixed(3) + t
            }
        }
        var i = {
                "+": function(t, e) {
                    return t + e
                },
                "-": function(t, e) {
                    return t - e
                },
                "/": function(t, e) {
                    return t / e
                },
                "*": function(t, e) {
                    return t * e
                }
            },
            r = String,
            s = /[a-z]+$/i,
            o = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        e.on("snap.util.attr", function(t) {
            var n = r(t).match(o);
            if (n) {
                var a = e.nt(),
                    l = a.substring(a.lastIndexOf(".") + 1),
                    c = this.attr(l),
                    u = {};
                e.stop();
                var d = n[3] || "",
                    h = c.match(s),
                    p = i[n[1]];
                if (h && h == d ? t = p(parseFloat(c), +n[2]) : (c = this.asPX(l), t = p(this.asPX(l), this.asPX(l, n[2] + d))), isNaN(c) || isNaN(t)) return;
                u[l] = t, this.attr(u)
            }
        })(-10), e.on("snap.util.equal", function(a, l) {
            var c = r(this.attr(a) || ""),
                u = r(l).match(o);
            if (u) {
                e.stop();
                var d = u[3] || "",
                    h = c.match(s),
                    p = i[u[1]];
                return h && h == d ? {
                    from: parseFloat(c),
                    to: p(parseFloat(c), +u[2]),
                    f: n(h)
                } : (c = this.asPX(a), {
                    from: c,
                    to: p(c, this.asPX(a, u[2] + d)),
                    f: t
                })
            }
        })(-10)
    }), i.plugin(function(t, n, i, r) {
        var s = i.prototype,
            o = t.is;
        s.rect = function(t, e, n, i, r, s) {
            var a;
            return null == s && (s = r), o(t, "object") && "[object Object]" == t ? a = t : null != t && (a = {
                x: t,
                y: e,
                width: n,
                height: i
            }, null != r && (a.rx = r, a.ry = s)), this.el("rect", a)
        }, s.circle = function(t, e, n) {
            var i;
            return o(t, "object") && "[object Object]" == t ? i = t : null != t && (i = {
                cx: t,
                cy: e,
                r: n
            }), this.el("circle", i)
        };
        var a = function() {
            function t() {
                this.parentNode.removeChild(this)
            }
            return function(e, n) {
                var i = r.doc.createElement("img"),
                    s = r.doc.body;
                i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function() {
                    n.call(i), i.onload = i.onerror = null, s.removeChild(i)
                }, i.onerror = t, s.appendChild(i), i.src = e
            }
        }();
        s.image = function(e, n, i, r, s) {
                var l = this.el("image");
                if (o(e, "object") && "src" in e) l.attr(e);
                else if (null != e) {
                    var c = {
                        "xlink:href": e,
                        preserveAspectRatio: "none"
                    };
                    null != n && null != i && (c.x = n, c.y = i), null != r && null != s ? (c.width = r, c.height = s) : a(e, function() {
                        t._.$(l.node, {
                            width: this.offsetWidth,
                            height: this.offsetHeight
                        })
                    }), t._.$(l.node, c)
                }
                return l
            }, s.ellipse = function(t, e, n, i) {
                var r;
                return o(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {
                    cx: t,
                    cy: e,
                    rx: n,
                    ry: i
                }), this.el("ellipse", r)
            }, s.path = function(t) {
                var e;
                return o(t, "object") && !o(t, "array") ? e = t : t && (e = {
                    d: t
                }), this.el("path", e)
            }, s.group = s.g = function(t) {
                var e = this.el("g");
                return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
            }, s.svg = function(t, e, n, i, r, s, a, l) {
                var c = {};
                return o(t, "object") && null == e ? c = t : (null != t && (c.x = t), null != e && (c.y = e), null != n && (c.width = n), null != i && (c.height = i), null != r && null != s && null != a && null != l && (c.viewBox = [r, s, a, l])), this.el("svg", c)
            }, s.mask = function(t) {
                var e = this.el("mask");
                return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
            }, s.ptrn = function(t, e, n, i, r, s, a, l) {
                if (o(t, "object")) var c = t;
                else arguments.length ? (c = {}, null != t && (c.x = t), null != e && (c.y = e), null != n && (c.width = n), null != i && (c.height = i), null != r && null != s && null != a && null != l && (c.viewBox = [r, s, a, l])) : c = {
                    patternUnits: "userSpaceOnUse"
                };
                return this.el("pattern", c)
            }, s.use = function(t) {
                return null != t ? (make("use", this.node), t instanceof n && (t.attr("id") || t.attr({
                    id: ID()
                }), t = t.attr("id")), this.el("use", {
                    "xlink:href": t
                })) : n.prototype.use.call(this)
            }, s.text = function(t, e, n) {
                var i = {};
                return o(t, "object") ? i = t : null != t && (i = {
                    x: t,
                    y: e,
                    text: n || ""
                }), this.el("text", i)
            }, s.line = function(t, e, n, i) {
                var r = {};
                return o(t, "object") ? r = t : null != t && (r = {
                    x1: t,
                    x2: n,
                    y1: e,
                    y2: i
                }), this.el("line", r)
            }, s.polyline = function(t) {
                arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                var e = {};
                return o(t, "object") && !o(t, "array") ? e = t : null != t && (e = {
                    points: t
                }), this.el("polyline", e)
            }, s.polygon = function(t) {
                arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                var e = {};
                return o(t, "object") && !o(t, "array") ? e = t : null != t && (e = {
                    points: t
                }), this.el("polygon", e)
            },
            function() {
                function n() {
                    return this.selectAll("stop")
                }

                function i(e, n) {
                    var i = c("stop"),
                        r = {
                            offset: +n + "%"
                        };
                    return e = t.color(e), r["stop-color"] = e.hex, e.opacity < 1 && (r["stop-opacity"] = e.opacity), c(i, r), this.node.appendChild(i), this
                }

                function r() {
                    if ("linearGradient" == this.type) {
                        var e = c(this.node, "x1") || 0,
                            n = c(this.node, "x2") || 1,
                            i = c(this.node, "y1") || 0,
                            r = c(this.node, "y2") || 0;
                        return t._.box(e, i, math.abs(n - e), math.abs(r - i))
                    }
                    var s = this.node.cx || .5,
                        o = this.node.cy || .5,
                        a = this.node.r || 0;
                    return t._.box(s - a, o - a, 2 * a, 2 * a)
                }

                function o(t, n) {
                    function i(t, e) {
                        for (var n = (e - d) / (t - h), i = h; t > i; i++) o[i].offset = +(+d + n * (i - h)).toFixed(2);
                        h = t, d = e
                    }
                    var r, s = e("snap.util.grad.parse", null, n).firstDefined();
                    if (!s) return null;
                    s.params.unshift(t), r = "l" == s.type.toLowerCase() ? a.apply(0, s.params) : l.apply(0, s.params), s.type != s.type.toLowerCase() && c(r.node, {
                        gradientUnits: "userSpaceOnUse"
                    });
                    var o = s.stops,
                        u = o.length,
                        d = 0,
                        h = 0;
                    u--;
                    for (var p = 0; u > p; p++) "offset" in o[p] && i(p, o[p].offset);
                    for (o[u].offset = o[u].offset || 100, i(u, o[u].offset), p = 0; u >= p; p++) {
                        var f = o[p];
                        r.addStop(f.color, f.offset)
                    }
                    return r
                }

                function a(e, s, o, a, l) {
                    var u = t._.make("linearGradient", e);
                    return u.stops = n, u.addStop = i, u.getBBox = r, null != s && c(u.node, {
                        x1: s,
                        y1: o,
                        x2: a,
                        y2: l
                    }), u
                }

                function l(e, s, o, a, l, u) {
                    var d = t._.make("radialGradient", e);
                    return d.stops = n, d.addStop = i, d.getBBox = r, null != s && c(d.node, {
                        cx: s,
                        cy: o,
                        r: a
                    }), null != l && null != u && c(d.node, {
                        fx: l,
                        fy: u
                    }), d
                }
                var c = t._.$;
                s.gradient = function(t) {
                    return o(this.defs, t)
                }, s.gradientLinear = function(t, e, n, i) {
                    return a(this.defs, t, e, n, i)
                }, s.gradientRadial = function(t, e, n, i, r) {
                    return l(this.defs, t, e, n, i, r)
                }, s.toString = function() {
                    var e, n = this.node.ownerDocument,
                        i = n.createDocumentFragment(),
                        r = n.createElement("div"),
                        s = this.node.cloneNode(!0);
                    return i.appendChild(r), r.appendChild(s), t._.$(s, {
                        xmlns: "http://www.w3.org/2000/svg"
                    }), e = r.innerHTML, i.removeChild(i.firstChild), e
                }, s.clear = function() {
                    for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : s.clear.call({
                        node: e
                    }), e = t
                }
            }()
    }), i.plugin(function(t, e) {
        function n(t) {
            var e = n.ps = n.ps || {};
            return e[t] ? e[t].sleep = 100 : e[t] = {
                sleep: 100
            }, setTimeout(function() {
                for (var n in e) e[V](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
            }), e[t]
        }

        function i(t, e, n, i) {
            return null == t && (t = e = n = i = 0), null == e && (e = t.y, n = t.width, i = t.height, t = t.x), {
                x: t,
                y: e,
                width: n,
                w: n,
                height: i,
                h: i,
                x2: t + n,
                y2: e + i,
                cx: t + n / 2,
                cy: e + i / 2,
                r1: N.min(n, i) / 2,
                r2: N.max(n, i) / 2,
                r0: N.sqrt(n * n + i * i) / 2,
                path: C(t, e, n, i),
                vb: [t, e, n, i].join(" ")
            }
        }

        function r() {
            return this.join(",").replace(B, "$1")
        }

        function s(t) {
            var e = O(t);
            return e.toString = r, e
        }

        function o(t, e, n, i, r, s, o, a, c) {
            return null == c ? p(t, e, n, i, r, s, o, a) : l(t, e, n, i, r, s, o, a, f(t, e, n, i, r, s, o, a, c))
        }

        function a(n, i) {
            function r(t) {
                return +(+t).toFixed(3)
            }
            return t._.cacher(function(t, s, a) {
                t instanceof e && (t = t.attr("d")), t = E(t);
                for (var c, u, d, h, p, f = "", m = {}, v = 0, g = 0, y = t.length; y > g; g++) {
                    if (d = t[g], "M" == d[0]) c = +d[1], u = +d[2];
                    else {
                        if (h = o(c, u, d[1], d[2], d[3], d[4], d[5], d[6]), v + h > s) {
                            if (i && !m.start) {
                                if (p = o(c, u, d[1], d[2], d[3], d[4], d[5], d[6], s - v), f += ["C" + r(p.start.x), r(p.start.y), r(p.m.x), r(p.m.y), r(p.x), r(p.y)], a) return f;
                                m.start = f, f = ["M" + r(p.x), r(p.y) + "C" + r(p.n.x), r(p.n.y), r(p.end.x), r(p.end.y), r(d[5]), r(d[6])].join(), v += h, c = +d[5], u = +d[6];
                                continue
                            }
                            if (!n && !i) return p = o(c, u, d[1], d[2], d[3], d[4], d[5], d[6], s - v)
                        }
                        v += h, c = +d[5], u = +d[6]
                    }
                    f += d.shift() + d
                }
                return m.end = f, p = n ? v : i ? m : l(c, u, d[0], d[1], d[2], d[3], d[4], d[5], 1)
            }, null, t._.clone)
        }

        function l(t, e, n, i, r, s, o, a, l) {
            var c = 1 - l,
                u = z(c, 3),
                d = z(c, 2),
                h = l * l,
                p = h * l,
                f = u * t + 3 * d * l * n + 3 * c * l * l * r + p * o,
                m = u * e + 3 * d * l * i + 3 * c * l * l * s + p * a,
                v = t + 2 * l * (n - t) + h * (r - 2 * n + t),
                g = e + 2 * l * (i - e) + h * (s - 2 * i + e),
                y = n + 2 * l * (r - n) + h * (o - 2 * r + n),
                _ = i + 2 * l * (s - i) + h * (a - 2 * s + i),
                w = c * t + l * n,
                b = c * e + l * i,
                C = c * r + l * o,
                x = c * s + l * a,
                S = 90 - 180 * N.atan2(v - y, g - _) / H;
            return {
                x: f,
                y: m,
                m: {
                    x: v,
                    y: g
                },
                n: {
                    x: y,
                    y: _
                },
                start: {
                    x: w,
                    y: b
                },
                end: {
                    x: C,
                    y: x
                },
                alpha: S
            }
        }

        function c(e, n, r, s, o, a, l, c) {
            t.is(e, "array") || (e = [e, n, r, s, o, a, l, c]);
            var u = L.apply(null, e);
            return i(u.min.x, u.min.y, u.max.x - u.min.x, u.max.y - u.min.y)
        }

        function u(t, e, n) {
            return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
        }

        function d(t, e) {
            return t = i(t), e = i(e), u(e, t.x, t.y) || u(e, t.x2, t.y) || u(e, t.x, t.y2) || u(e, t.x2, t.y2) || u(t, e.x, e.y) || u(t, e.x2, e.y) || u(t, e.x, e.y2) || u(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }

        function h(t, e, n, i, r) {
            var s = -3 * e + 9 * n - 9 * i + 3 * r,
                o = t * s + 6 * e - 12 * n + 6 * i;
            return t * o - 3 * e + 3 * n
        }

        function p(t, e, n, i, r, s, o, a, l) {
            null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l;
            for (var c = l / 2, u = 12, d = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, m = 0; u > m; m++) {
                var v = c * d[m] + c,
                    g = h(v, t, n, r, o),
                    y = h(v, e, i, s, a),
                    _ = g * g + y * y;
                f += p[m] * N.sqrt(_)
            }
            return c * f
        }

        function f(t, e, n, i, r, s, o, a, l) {
            if (!(0 > l || p(t, e, n, i, r, s, o, a) < l)) {
                var c, u = 1,
                    d = u / 2,
                    h = u - d,
                    f = .01;
                for (c = p(t, e, n, i, r, s, o, a, h); q(c - l) > f;) d /= 2, h += (l > c ? 1 : -1) * d, c = p(t, e, n, i, r, s, o, a, h);
                return h
            }
        }

        function m(t, e, n, i, r, s, o, a) {
            if (!(F(t, n) < R(r, o) || R(t, n) > F(r, o) || F(e, i) < R(s, a) || R(e, i) > F(s, a))) {
                var l = (t * i - e * n) * (r - o) - (t - n) * (r * a - s * o),
                    c = (t * i - e * n) * (s - a) - (e - i) * (r * a - s * o),
                    u = (t - n) * (s - a) - (e - i) * (r - o);
                if (u) {
                    var d = l / u,
                        h = c / u,
                        p = +d.toFixed(2),
                        f = +h.toFixed(2);
                    if (!(p < +R(t, n).toFixed(2) || p > +F(t, n).toFixed(2) || p < +R(r, o).toFixed(2) || p > +F(r, o).toFixed(2) || f < +R(e, i).toFixed(2) || f > +F(e, i).toFixed(2) || f < +R(s, a).toFixed(2) || f > +F(s, a).toFixed(2))) return {
                        x: d,
                        y: h
                    }
                }
            }
        }

        function v(t, e, n) {
            var i = c(t),
                r = c(e);
            if (!d(i, r)) return n ? 0 : [];
            for (var s = p.apply(0, t), o = p.apply(0, e), a = ~~(s / 8), u = ~~(o / 8), h = [], f = [], v = {}, g = n ? 0 : [], y = 0; a + 1 > y; y++) {
                var _ = l.apply(0, t.concat(y / a));
                h.push({
                    x: _.x,
                    y: _.y,
                    t: y / a
                })
            }
            for (y = 0; u + 1 > y; y++) _ = l.apply(0, e.concat(y / u)), f.push({
                x: _.x,
                y: _.y,
                t: y / u
            });
            for (y = 0; a > y; y++)
                for (var w = 0; u > w; w++) {
                    var b = h[y],
                        C = h[y + 1],
                        x = f[w],
                        S = f[w + 1],
                        k = q(C.x - b.x) < .001 ? "y" : "x",
                        T = q(S.x - x.x) < .001 ? "y" : "x",
                        M = m(b.x, b.y, C.x, C.y, x.x, x.y, S.x, S.y);
                    if (M) {
                        if (v[M.x.toFixed(4)] == M.y.toFixed(4)) continue;
                        v[M.x.toFixed(4)] = M.y.toFixed(4);
                        var P = b.t + q((M[k] - b[k]) / (C[k] - b[k])) * (C.t - b.t),
                            L = x.t + q((M[T] - x[T]) / (S[T] - x[T])) * (S.t - x.t);
                        P >= 0 && 1 >= P && L >= 0 && 1 >= L && (n ? g++ : g.push({
                            x: M.x,
                            y: M.y,
                            t1: P,
                            t2: L
                        }))
                    }
                }
            return g
        }

        function g(t, e) {
            return _(t, e)
        }

        function y(t, e) {
            return _(t, e, 1)
        }

        function _(t, e, n) {
            t = E(t), e = E(e);
            for (var i, r, s, o, a, l, c, u, d, h, p = n ? 0 : [], f = 0, m = t.length; m > f; f++) {
                var g = t[f];
                if ("M" == g[0]) i = a = g[1], r = l = g[2];
                else {
                    "C" == g[0] ? (d = [i, r].concat(g.slice(1)), i = d[6], r = d[7]) : (d = [i, r, i, r, a, l, a, l], i = a, r = l);
                    for (var y = 0, _ = e.length; _ > y; y++) {
                        var w = e[y];
                        if ("M" == w[0]) s = c = w[1], o = u = w[2];
                        else {
                            "C" == w[0] ? (h = [s, o].concat(w.slice(1)), s = h[6], o = h[7]) : (h = [s, o, s, o, c, u, c, u], s = c, o = u);
                            var b = v(d, h, n);
                            if (n) p += b;
                            else {
                                for (var C = 0, x = b.length; x > C; C++) b[C].segment1 = f, b[C].segment2 = y, b[C].bez1 = d, b[C].bez2 = h;
                                p = p.concat(b)
                            }
                        }
                    }
                }
            }
            return p
        }

        function w(t, e, n) {
            var i = b(t);
            return u(i, e, n) && _(t, [
                ["M", e, n],
                ["H", i.x2 + 10]
            ], 1) % 2 == 1
        }

        function b(t) {
            var e = n(t);
            if (e.bbox) return O(e.bbox);
            if (!t) return i();
            t = E(t);
            for (var r, s = 0, o = 0, a = [], l = [], c = 0, u = t.length; u > c; c++)
                if (r = t[c], "M" == r[0]) s = r[1], o = r[2], a.push(s), l.push(o);
                else {
                    var d = L(s, o, r[1], r[2], r[3], r[4], r[5], r[6]);
                    a = a.concat(d.min.x, d.max.x), l = l.concat(d.min.y, d.max.y), s = r[5], o = r[6]
                }
            var h = R.apply(0, a),
                p = R.apply(0, l),
                f = F.apply(0, a),
                m = F.apply(0, l),
                v = i(h, p, f - h, m - p);
            return e.bbox = O(v), v
        }

        function C(t, e, n, i, s) {
            if (s) return [
                ["M", +t + +s, e],
                ["l", n - 2 * s, 0],
                ["a", s, s, 0, 0, 1, s, s],
                ["l", 0, i - 2 * s],
                ["a", s, s, 0, 0, 1, -s, s],
                ["l", 2 * s - n, 0],
                ["a", s, s, 0, 0, 1, -s, -s],
                ["l", 0, 2 * s - i],
                ["a", s, s, 0, 0, 1, s, -s],
                ["z"]
            ];
            var o = [
                ["M", t, e],
                ["l", n, 0],
                ["l", 0, i],
                ["l", -n, 0],
                ["z"]
            ];
            return o.toString = r, o
        }

        function x(t, e, n, i, s) {
            if (null == s && null == i && (i = n), t = +t, e = +e, n = +n, i = +i, null != s) var o = Math.PI / 180,
                a = t + n * Math.cos(-i * o),
                l = t + n * Math.cos(-s * o),
                c = e + n * Math.sin(-i * o),
                u = e + n * Math.sin(-s * o),
                d = [
                    ["M", a, c],
                    ["A", n, n, 0, +(s - i > 180), 0, l, u]
                ];
            else d = [
                ["M", t, e],
                ["m", 0, -i],
                ["a", n, i, 0, 1, 1, 0, 2 * i],
                ["a", n, i, 0, 1, 1, 0, -2 * i],
                ["z"]
            ];
            return d.toString = r, d
        }

        function S(e) {
            var i = n(e),
                o = String.prototype.toLowerCase;
            if (i.rel) return s(i.rel);
            t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
            var a = [],
                l = 0,
                c = 0,
                u = 0,
                d = 0,
                h = 0;
            "M" == e[0][0] && (l = e[0][1], c = e[0][2], u = l, d = c, h++, a.push(["M", l, c]));
            for (var p = h, f = e.length; f > p; p++) {
                var m = a[p] = [],
                    v = e[p];
                if (v[0] != o.call(v[0])) switch (m[0] = o.call(v[0]), m[0]) {
                    case "a":
                        m[1] = v[1], m[2] = v[2], m[3] = v[3], m[4] = v[4], m[5] = v[5], m[6] = +(v[6] - l).toFixed(3), m[7] = +(v[7] - c).toFixed(3);
                        break;
                    case "v":
                        m[1] = +(v[1] - c).toFixed(3);
                        break;
                    case "m":
                        u = v[1], d = v[2];
                    default:
                        for (var g = 1, y = v.length; y > g; g++) m[g] = +(v[g] - (g % 2 ? l : c)).toFixed(3)
                } else {
                    m = a[p] = [], "m" == v[0] && (u = v[1] + l, d = v[2] + c);
                    for (var _ = 0, w = v.length; w > _; _++) a[p][_] = v[_]
                }
                var b = a[p].length;
                switch (a[p][0]) {
                    case "z":
                        l = u, c = d;
                        break;
                    case "h":
                        l += +a[p][b - 1];
                        break;
                    case "v":
                        c += +a[p][b - 1];
                        break;
                    default:
                        l += +a[p][b - 2], c += +a[p][b - 1]
                }
            }
            return a.toString = r, i.rel = s(a), a
        }

        function k(e) {
            var i = n(e);
            if (i.abs) return s(i.abs);
            if (D(e, "array") && D(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [
                ["M", 0, 0]
            ];
            var o, a = [],
                l = 0,
                c = 0,
                u = 0,
                d = 0,
                h = 0;
            "M" == e[0][0] && (l = +e[0][1], c = +e[0][2], u = l, d = c, h++, a[0] = ["M", l, c]);
            for (var p, f, m = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), v = h, g = e.length; g > v; v++) {
                if (a.push(p = []), f = e[v], o = f[0], o != o.toUpperCase()) switch (p[0] = o.toUpperCase(), p[0]) {
                        case "A":
                            p[1] = f[1], p[2] = f[2], p[3] = f[3], p[4] = f[4], p[5] = f[5], p[6] = +f[6] + l, p[7] = +f[7] + c;
                            break;
                        case "V":
                            p[1] = +f[1] + c;
                            break;
                        case "H":
                            p[1] = +f[1] + l;
                            break;
                        case "R":
                            for (var y = [l, c].concat(f.slice(1)), _ = 2, w = y.length; w > _; _++) y[_] = +y[_] + l, y[++_] = +y[_] + c;
                            a.pop(), a = a.concat(I(y, m));
                            break;
                        case "O":
                            a.pop(), y = x(l, c, f[1], f[2]), y.push(y[0]), a = a.concat(y);
                            break;
                        case "U":
                            a.pop(), a = a.concat(x(l, c, f[1], f[2], f[3])), p = ["U"].concat(a[a.length - 1].slice(-2));
                            break;
                        case "M":
                            u = +f[1] + l, d = +f[2] + c;
                        default:
                            for (_ = 1, w = f.length; w > _; _++) p[_] = +f[_] + (_ % 2 ? l : c)
                    } else if ("R" == o) y = [l, c].concat(f.slice(1)), a.pop(), a = a.concat(I(y, m)), p = ["R"].concat(f.slice(-2));
                    else if ("O" == o) a.pop(), y = x(l, c, f[1], f[2]), y.push(y[0]), a = a.concat(y);
                else if ("U" == o) a.pop(), a = a.concat(x(l, c, f[1], f[2], f[3])), p = ["U"].concat(a[a.length - 1].slice(-2));
                else
                    for (var b = 0, C = f.length; C > b; b++) p[b] = f[b];
                if (o = o.toUpperCase(), "O" != o) switch (p[0]) {
                    case "Z":
                        l = +u, c = +d;
                        break;
                    case "H":
                        l = p[1];
                        break;
                    case "V":
                        c = p[1];
                        break;
                    case "M":
                        u = p[p.length - 2], d = p[p.length - 1];
                    default:
                        l = p[p.length - 2], c = p[p.length - 1]
                }
            }
            return a.toString = r, i.abs = s(a), a
        }

        function T(t, e, n, i) {
            return [t, e, n, i, n, i]
        }

        function M(t, e, n, i, r, s) {
            var o = 1 / 3,
                a = 2 / 3;
            return [o * t + a * n, o * e + a * i, o * r + a * n, o * s + a * i, r, s]
        }

        function P(e, n, i, r, s, o, a, l, c, u) {
            var d, h = 120 * H / 180,
                p = H / 180 * (+s || 0),
                f = [],
                m = t._.cacher(function(t, e, n) {
                    var i = t * N.cos(n) - e * N.sin(n),
                        r = t * N.sin(n) + e * N.cos(n);
                    return {
                        x: i,
                        y: r
                    }
                });
            if (u) S = u[0], k = u[1], C = u[2], x = u[3];
            else {
                d = m(e, n, -p), e = d.x, n = d.y, d = m(l, c, -p), l = d.x, c = d.y;
                var v = (N.cos(H / 180 * s), N.sin(H / 180 * s), (e - l) / 2),
                    g = (n - c) / 2,
                    y = v * v / (i * i) + g * g / (r * r);
                y > 1 && (y = N.sqrt(y), i = y * i, r = y * r);
                var _ = i * i,
                    w = r * r,
                    b = (o == a ? -1 : 1) * N.sqrt(q((_ * w - _ * g * g - w * v * v) / (_ * g * g + w * v * v))),
                    C = b * i * g / r + (e + l) / 2,
                    x = b * -r * v / i + (n + c) / 2,
                    S = N.asin(((n - x) / r).toFixed(9)),
                    k = N.asin(((c - x) / r).toFixed(9));
                S = C > e ? H - S : S, k = C > l ? H - k : k, 0 > S && (S = 2 * H + S), 0 > k && (k = 2 * H + k), a && S > k && (S -= 2 * H), !a && k > S && (k -= 2 * H)
            }
            var T = k - S;
            if (q(T) > h) {
                var M = k,
                    L = l,
                    E = c;
                k = S + h * (a && k > S ? 1 : -1), l = C + i * N.cos(k), c = x + r * N.sin(k), f = P(l, c, i, r, s, 0, a, L, E, [k, M, C, x])
            }
            T = k - S;
            var A = N.cos(S),
                I = N.sin(S),
                $ = N.cos(k),
                D = N.sin(k),
                O = N.tan(T / 4),
                V = 4 / 3 * i * O,
                B = 4 / 3 * r * O,
                j = [e, n],
                R = [e + V * I, n - B * A],
                F = [l + V * D, c - B * $],
                z = [l, c];
            if (R[0] = 2 * j[0] - R[0], R[1] = 2 * j[1] - R[1], u) return [R, F, z].concat(f);
            f = [R, F, z].concat(f).join().split(",");
            for (var J = [], U = 0, W = f.length; W > U; U++) J[U] = U % 2 ? m(f[U - 1], f[U], p).y : m(f[U], f[U + 1], p).x;
            return J
        }

        function L(t, e, n, i, r, s, o, a) {
            for (var l, c, u, d, h, p, f, m, v = [], g = [
                    [],
                    []
                ], y = 0; 2 > y; ++y)
                if (0 == y ? (c = 6 * t - 12 * n + 6 * r, l = -3 * t + 9 * n - 9 * r + 3 * o, u = 3 * n - 3 * t) : (c = 6 * e - 12 * i + 6 * s, l = -3 * e + 9 * i - 9 * s + 3 * a, u = 3 * i - 3 * e), q(l) < 1e-12) {
                    if (q(c) < 1e-12) continue;
                    d = -u / c, d > 0 && 1 > d && v.push(d)
                } else f = c * c - 4 * u * l, m = N.sqrt(f), 0 > f || (h = (-c + m) / (2 * l), h > 0 && 1 > h && v.push(h), p = (-c - m) / (2 * l), p > 0 && 1 > p && v.push(p));
            for (var _, w = v.length, b = w; w--;) d = v[w], _ = 1 - d, g[0][w] = _ * _ * _ * t + 3 * _ * _ * d * n + 3 * _ * d * d * r + d * d * d * o, g[1][w] = _ * _ * _ * e + 3 * _ * _ * d * i + 3 * _ * d * d * s + d * d * d * a;
            return g[0][b] = t, g[1][b] = e, g[0][b + 1] = o, g[1][b + 1] = a, g[0].length = g[1].length = b + 2, {
                min: {
                    x: R.apply(0, g[0]),
                    y: R.apply(0, g[1])
                },
                max: {
                    x: F.apply(0, g[0]),
                    y: F.apply(0, g[1])
                }
            }
        }

        function E(t, e) {
            var i = !e && n(t);
            if (!e && i.curve) return s(i.curve);
            for (var r = k(t), o = e && k(e), a = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, l = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, c = (function(t, e, n) {
                    var i, r;
                    if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                    switch (!(t[0] in {
                        T: 1,
                        Q: 1
                    }) && (e.qx = e.qy = null), t[0]) {
                        case "M":
                            e.X = t[1], e.Y = t[2];
                            break;
                        case "A":
                            t = ["C"].concat(P.apply(0, [e.x, e.y].concat(t.slice(1))));
                            break;
                        case "S":
                            "C" == n || "S" == n ? (i = 2 * e.x - e.bx, r = 2 * e.y - e.by) : (i = e.x, r = e.y), t = ["C", i, r].concat(t.slice(1));
                            break;
                        case "T":
                            "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(M(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                            break;
                        case "Q":
                            e.qx = t[1], e.qy = t[2], t = ["C"].concat(M(e.x, e.y, t[1], t[2], t[3], t[4]));
                            break;
                        case "L":
                            t = ["C"].concat(T(e.x, e.y, t[1], t[2]));
                            break;
                        case "H":
                            t = ["C"].concat(T(e.x, e.y, t[1], e.y));
                            break;
                        case "V":
                            t = ["C"].concat(T(e.x, e.y, e.x, t[1]));
                            break;
                        case "Z":
                            t = ["C"].concat(T(e.x, e.y, e.X, e.Y))
                    }
                    return t
                }), u = function(t, e) {
                    if (t[e].length > 7) {
                        t[e].shift();
                        for (var n = t[e]; n.length;) h[e] = "A", o && (p[e] = "A"), t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                        t.splice(e, 1), g = F(r.length, o && o.length || 0)
                    }
                }, d = function(t, e, n, i, s) {
                    t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", i.x, i.y]), n.bx = 0, n.by = 0, n.x = t[s][1], n.y = t[s][2], g = F(r.length, o && o.length || 0))
                }, h = [], p = [], f = "", m = "", v = 0, g = F(r.length, o && o.length || 0); g > v; v++) {
                r[v] && (f = r[v][0]), "C" != f && (h[v] = f, v && (m = h[v - 1])), r[v] = c(r[v], a, m), "A" != h[v] && "C" == f && (h[v] = "C"), u(r, v), o && (o[v] && (f = o[v][0]), "C" != f && (p[v] = f, v && (m = p[v - 1])), o[v] = c(o[v], l, m), "A" != p[v] && "C" == f && (p[v] = "C"), u(o, v)), d(r, o, a, l, v), d(o, r, l, a, v);
                var y = r[v],
                    _ = o && o[v],
                    w = y.length,
                    b = o && _.length;
                a.x = y[w - 2], a.y = y[w - 1], a.bx = j(y[w - 4]) || a.x, a.by = j(y[w - 3]) || a.y, l.bx = o && (j(_[b - 4]) || l.x), l.by = o && (j(_[b - 3]) || l.y), l.x = o && _[b - 2], l.y = o && _[b - 1]
            }
            return o || (i.curve = s(r)), o ? [r, o] : r
        }

        function A(t, e) {
            if (!e) return t;
            var n, i, r, s, o, a, l;
            for (t = E(t), r = 0, o = t.length; o > r; r++)
                for (l = t[r], s = 1, a = l.length; a > s; s += 2) n = e.x(l[s], l[s + 1]), i = e.y(l[s], l[s + 1]), l[s] = n, l[s + 1] = i;
            return t
        }

        function I(t, e) {
            for (var n = [], i = 0, r = t.length; r - 2 * !e > i; i += 2) {
                var s = [{
                    x: +t[i - 2],
                    y: +t[i - 1]
                }, {
                    x: +t[i],
                    y: +t[i + 1]
                }, {
                    x: +t[i + 2],
                    y: +t[i + 3]
                }, {
                    x: +t[i + 4],
                    y: +t[i + 5]
                }];
                e ? i ? r - 4 == i ? s[3] = {
                    x: +t[0],
                    y: +t[1]
                } : r - 2 == i && (s[2] = {
                    x: +t[0],
                    y: +t[1]
                }, s[3] = {
                    x: +t[2],
                    y: +t[3]
                }) : s[0] = {
                    x: +t[r - 2],
                    y: +t[r - 1]
                } : r - 4 == i ? s[3] = s[2] : i || (s[0] = {
                    x: +t[i],
                    y: +t[i + 1]
                }), n.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
            }
            return n
        }
        var $ = e.prototype,
            D = t.is,
            O = t._.clone,
            V = "hasOwnProperty",
            B = /,?([a-z]),?/gi,
            j = parseFloat,
            N = Math,
            H = N.PI,
            R = N.min,
            F = N.max,
            z = N.pow,
            q = N.abs,
            J = a(1),
            U = a(),
            W = a(0, 1),
            G = t._unit2px,
            X = {
                path: function(t) {
                    return t.attr("path")
                },
                circle: function(t) {
                    var e = G(t);
                    return x(e.cx, e.cy, e.r)
                },
                ellipse: function(t) {
                    var e = G(t);
                    return x(e.cx || 0, e.cy || 0, e.rx, e.ry)
                },
                rect: function(t) {
                    var e = G(t);
                    return C(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
                },
                image: function(t) {
                    var e = G(t);
                    return C(e.x || 0, e.y || 0, e.width, e.height)
                },
                line: function(t) {
                    return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
                },
                polyline: function(t) {
                    return "M" + t.attr("points")
                },
                polygon: function(t) {
                    return "M" + t.attr("points") + "z"
                },
                deflt: function(t) {
                    var e = t.node.getBBox();
                    return C(e.x, e.y, e.width, e.height)
                }
            };
        t.path = n, t.path.getTotalLength = J, t.path.getPointAtLength = U, t.path.getSubpath = function(t, e, n) {
            if (this.getTotalLength(t) - n < 1e-6) return W(t, e).end;
            var i = W(t, n, 1);
            return e ? W(i, e).end : i
        }, $.getTotalLength = function() {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, $.getPointAtLength = function(t) {
            return U(this.attr("d"), t)
        }, $.getSubpath = function(e, n) {
            return t.path.getSubpath(this.attr("d"), e, n)
        }, t._.box = i, t.path.findDotsAtSegment = l, t.path.bezierBBox = c, t.path.isPointInsideBBox = u, t.path.isBBoxIntersect = d, t.path.intersection = g, t.path.intersectionNumber = y, t.path.isPointInside = w, t.path.getBBox = b, t.path.get = X, t.path.toRelative = S, t.path.toAbsolute = k, t.path.toCubic = E, t.path.map = A, t.path.toString = r, t.path.clone = s
    }), i.plugin(function(t) {
        var i = Math.max,
            r = Math.min,
            s = function(t) {
                if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t)
                    for (var e = 0, n = t.length; n > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
            },
            o = s.prototype;
        o.push = function() {
            for (var t, e, n = 0, i = arguments.length; i > n; n++) t = arguments[n], t && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
            return this
        }, o.pop = function() {
            return this.length && delete this[this.length--], this.items.pop()
        }, o.forEach = function(t, e) {
            for (var n = 0, i = this.items.length; i > n; n++)
                if (t.call(e, this.items[n], n) === !1) return this;
            return this
        }, o.animate = function(i, r, s, o) {
            "function" != typeof s || s.length || (o = s, s = n.linear), i instanceof t._.Animation && (o = i.callback, s = i.easing, r = s.dur, i = i.attr);
            var a = arguments;
            if (t.is(i, "array") && t.is(a[a.length - 1], "array")) var l = !0;
            var c, u = function() {
                    c ? this.b = c : c = this.b
                },
                d = 0,
                h = o && function() {
                    d++ == this.length && o.call(this)
                };
            return this.forEach(function(t, n) {
                e.once("snap.animcreated." + t.id, u), l ? a[n] && t.animate.apply(t, a[n]) : t.animate(i, r, s, h)
            })
        }, o.remove = function() {
            for (; this.length;) this.pop().remove();
            return this
        }, o.bind = function(t, e, n) {
            var i = {};
            if ("function" == typeof e) this.bindings[t] = e;
            else {
                var r = n || t;
                this.bindings[t] = function(t) {
                    i[r] = t, e.attr(i)
                }
            }
            return this
        }, o.attr = function(t) {
            var e = {};
            for (var n in t) this.bindings[n] ? this.bindings[n](t[n]) : e[n] = t[n];
            for (var i = 0, r = this.items.length; r > i; i++) this.items[i].attr(e);
            return this
        }, o.clear = function() {
            for (; this.length;) this.pop()
        }, o.splice = function(t, e) {
            t = 0 > t ? i(this.length + t, 0) : t, e = i(0, r(this.length - t, e));
            var n, o = [],
                a = [],
                l = [];
            for (n = 2; n < arguments.length; n++) l.push(arguments[n]);
            for (n = 0; e > n; n++) a.push(this[t + n]);
            for (; n < this.length - t; n++) o.push(this[t + n]);
            var c = l.length;
            for (n = 0; n < c + o.length; n++) this.items[t + n] = this[t + n] = c > n ? l[n] : o[n - c];
            for (n = this.items.length = this.length -= e - c; this[n];) delete this[n++];
            return new s(a)
        }, o.exclude = function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (this[e] == t) return this.splice(e, 1), !0;
            return !1
        }, o.insertAfter = function(t) {
            for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
            return this
        }, o.getBBox = function() {
            for (var t = [], e = [], n = [], s = [], o = this.items.length; o--;)
                if (!this.items[o].removed) {
                    var a = this.items[o].getBBox();
                    t.push(a.x), e.push(a.y), n.push(a.x + a.width), s.push(a.y + a.height)
                }
            return t = r.apply(0, t), e = r.apply(0, e), n = i.apply(0, n), s = i.apply(0, s), {
                x: t,
                y: e,
                x2: n,
                y2: s,
                width: n - t,
                height: s - e,
                cx: t + (n - t) / 2,
                cy: e + (s - e) / 2
            }
        }, o.clone = function(t) {
            t = new s;
            for (var e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].clone());
            return t
        }, o.toString = function() {
            return "Snap‘s set"
        }, o.type = "set", t.set = function() {
            var t = new s;
            return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
        }
    }), i.plugin(function(t, n) {
        function i(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
                case "t":
                    return [e, 0, 0];
                case "m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case "s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        }

        function r(e, n, r) {
            n = h(n).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], n = t.parseTransformString(n) || [];
            for (var s, o, a, u, d = Math.max(e.length, n.length), p = [], f = [], m = 0; d > m; m++) {
                if (a = e[m] || i(n[m]), u = n[m] || i(a), a[0] != u[0] || "r" == a[0].toLowerCase() && (a[2] != u[2] || a[3] != u[3]) || "s" == a[0].toLowerCase() && (a[3] != u[3] || a[4] != u[4])) {
                    e = t._.transform2matrix(e, r()), n = t._.transform2matrix(n, r()), p = [
                        ["m", e.a, e.b, e.c, e.d, e.e, e.f]
                    ], f = [
                        ["m", n.a, n.b, n.c, n.d, n.e, n.f]
                    ];
                    break
                }
                for (p[m] = [], f[m] = [], s = 0, o = Math.max(a.length, u.length); o > s; s++) s in a && (p[m][s] = a[s]), s in u && (f[m][s] = u[s])
            }
            return {
                from: c(p),
                to: c(f),
                f: l(p)
            }
        }

        function s(t) {
            return t
        }

        function o(t) {
            return function(e) {
                return +e.toFixed(3) + t
            }
        }

        function a(e) {
            return t.rgb(e[0], e[1], e[2])
        }

        function l(t) {
            var e, n, i, r, s, o, a = 0,
                l = [];
            for (e = 0, n = t.length; n > e; e++) {
                for (s = "[", o = ['"' + t[e][0] + '"'], i = 1, r = t[e].length; r > i; i++) o[i] = "val[" + a++ + "]";
                s += o + "]", l[e] = s
            }
            return Function("val", "return Snap.path.toString.call([" + l + "])")
        }

        function c(t) {
            for (var e = [], n = 0, i = t.length; i > n; n++)
                for (var r = 1, s = t[n].length; s > r; r++) e.push(t[n][r]);
            return e
        }
        var u = {},
            d = /[a-z]+$/i,
            h = String;
        u.stroke = u.fill = "colour", n.prototype.equal = function(t, n) {
            return e("snap.util.equal", this, t, n).firstDefined()
        }, e.on("snap.util.equal", function(e, n) {
            var i, p, f = h(this.attr(e) || ""),
                m = this;
            if (f == +f && n == +n) return {
                from: +f,
                to: +n,
                f: s
            };
            if ("colour" == u[e]) return i = t.color(f), p = t.color(n), {
                from: [i.r, i.g, i.b, i.opacity],
                to: [p.r, p.g, p.b, p.opacity],
                f: a
            };
            if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return n instanceof t.Matrix && (n = n.toTransformString()), t._.rgTransform.test(n) || (n = t._.svgTransform2string(n)), r(f, n, function() {
                return m.getBBox(1)
            });
            if ("d" == e || "path" == e) return i = t.path.toCubic(f, n), {
                from: c(i[0]),
                to: c(i[1]),
                f: l(i[0])
            };
            if ("points" == e) return i = h(f).split(t._.separator), p = h(n).split(t._.separator), {
                from: i,
                to: p,
                f: function(t) {
                    return t
                }
            };
            aUnit = f.match(d);
            var v = h(n).match(d);
            return aUnit && aUnit == v ? {
                from: parseFloat(f),
                to: parseFloat(n),
                f: o(aUnit)
            } : {
                from: this.asPX(e),
                to: this.asPX(e, n),
                f: s
            }
        })
    }), i.plugin(function(t, n, i, r) {
        for (var s = n.prototype, o = "hasOwnProperty", a = ("createTouch" in r.doc), l = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], c = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }, u = (function(t, e) {
                var n = "y" == t ? "scrollTop" : "scrollLeft",
                    i = e && e.node ? e.node.ownerDocument : r.doc;
                return i[n in i.documentElement ? "documentElement" : "body"][n]
            }), d = function() {
                this.returnValue = !1
            }, h = function() {
                return this.originalEvent.preventDefault()
            }, p = function() {
                this.cancelBubble = !0
            }, f = function() {
                return this.originalEvent.stopPropagation()
            }, m = function() {
                return r.doc.addEventListener ? function(t, e, n, i) {
                    var r = a && c[e] ? c[e] : e,
                        s = function(r) {
                            var s = u("y", i),
                                l = u("x", i);
                            if (a && c[o](e))
                                for (var d = 0, p = r.targetTouches && r.targetTouches.length; p > d; d++)
                                    if (r.targetTouches[d].target == t || t.contains(r.targetTouches[d].target)) {
                                        var m = r;
                                        r = r.targetTouches[d], r.originalEvent = m, r.preventDefault = h, r.stopPropagation = f;
                                        break
                                    }
                            var v = r.clientX + l,
                                g = r.clientY + s;
                            return n.call(i, r, v, g)
                        };
                    return e !== r && t.addEventListener(e, s, !1), t.addEventListener(r, s, !1),
                        function() {
                            return e !== r && t.removeEventListener(e, s, !1), t.removeEventListener(r, s, !1), !0
                        }
                } : r.doc.attachEvent ? function(t, e, n, i) {
                    var r = function(t) {
                        t = t || i.node.ownerDocument.window.event;
                        var e = u("y", i),
                            r = u("x", i),
                            s = t.clientX + r,
                            o = t.clientY + e;
                        return t.preventDefault = t.preventDefault || d, t.stopPropagation = t.stopPropagation || p, n.call(i, t, s, o)
                    };
                    t.attachEvent("on" + e, r);
                    var s = function() {
                        return t.detachEvent("on" + e, r), !0
                    };
                    return s
                } : void 0
            }(), v = [], g = function(t) {
                for (var n, i = t.clientX, r = t.clientY, s = u("y"), o = u("x"), l = v.length; l--;) {
                    if (n = v[l], a) {
                        for (var c, d = t.touches && t.touches.length; d--;)
                            if (c = t.touches[d], c.identifier == n.el._drag.id || n.el.node.contains(c.target)) {
                                i = c.clientX, r = c.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                                break
                            }
                    } else t.preventDefault();
                    var h = n.el.node;
                    h.nextSibling, h.parentNode, h.style.display, i += o, r += s, e("snap.drag.move." + n.el.id, n.move_scope || n.el, i - n.el._drag.x, r - n.el._drag.y, i, r, t)
                }
            }, y = function(n) {
                t.unmousemove(g).unmouseup(y);
                for (var i, r = v.length; r--;) i = v[r], i.el._drag = {}, e("snap.drag.end." + i.el.id, i.end_scope || i.start_scope || i.move_scope || i.el, n);
                v = []
            }, _ = l.length; _--;) ! function(e) {
            t[e] = s[e] = function(n, i) {
                return t.is(n, "function") && (this.events = this.events || [], this.events.push({
                    name: e,
                    f: n,
                    unbind: m(this.node || document, e, n, i || this)
                })), this
            }, t["un" + e] = s["un" + e] = function(t) {
                for (var n = this.events || [], i = n.length; i--;)
                    if (n[i].name == e && (n[i].f == t || !t)) return n[i].unbind(), n.splice(i, 1), !n.length && delete this.events, this;
                return this
            }
        }(l[_]);
        s.hover = function(t, e, n, i) {
            return this.mouseover(t, n).mouseout(e, i || n)
        }, s.unhover = function(t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var w = [];
        s.drag = function(n, i, r, s, o, a) {
            function l(l, c, u) {
                (l.originalEvent || l).preventDefault(), this._drag.x = c, this._drag.y = u, this._drag.id = l.identifier, !v.length && t.mousemove(g).mouseup(y), v.push({
                    el: this,
                    move_scope: s,
                    start_scope: o,
                    end_scope: a
                }), i && e.on("snap.drag.start." + this.id, i), n && e.on("snap.drag.move." + this.id, n), r && e.on("snap.drag.end." + this.id, r), e("snap.drag.start." + this.id, o || s || this, c, u, l)
            }
            if (!arguments.length) {
                var c;
                return this.drag(function(t, e) {
                    this.attr({
                        transform: c + (c ? "T" : "t") + [t, e]
                    })
                }, function() {
                    c = this.transform().local
                })
            }
            return this._drag = {}, w.push({
                el: this,
                start: l
            }), this.mousedown(l), this
        }, s.undrag = function() {
            for (var n = w.length; n--;) w[n].el == this && (this.unmousedown(w[n].start), w.splice(n, 1), e.unbind("snap.drag.*." + this.id));
            return !w.length && t.unmousemove(g).unmouseup(y), this
        }
    }), i.plugin(function(t, n, i) {
            var r = (n.prototype, i.prototype),
                s = /^\s*url\((.+)\)/,
                o = String,
                a = t._.$;
            t.filter = {}, r.filter = function(e) {
                    var i = this;
                    "svg" != i.type && (i = i.paper);
                    var r = t.parse(o(e)),
                        s = t._.id(),
                        l = (i.node.offsetWidth, i.node.offsetHeight, a("filter"));
                    return a(l, {
                        id: s,
                        filterUnits: "userSpaceOnUse"
                    }), l.appendChild(r.node), i.defs.appendChild(l), new n(l)
                }, e.on("snap.util.getattr.filter", function() {
                    e.stop();
                    var n = a(this.node, "filter");
                    if (n) {
                        var i = o(n).match(s);
                        return i && t.select(i[1])
                    }
                }), e.on("snap.util.attr.filter", function(i) {
                    if (i instanceof n && "filter" == i.type) {
                        e.stop();
                        var r = i.node.id;
                        r || (a(i.node, {
                            id: i.id
                        }), r = i.id), a(this.node, {
                            filter: t.url(r)
                        })
                    }
                    i && "none" != i || (e.stop(), this.node.removeAttribute("filter"))
                }), t.filter.blur = function(e, n) {
                    null == e && (e = 2);
                    var i = null == n ? e : [e, n];
                    return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
                        def: i
                    })
                }, t.filter.blur.toString = function() {
                    return this()
                }, t.filter.shadow = function(e, n, i, r, s) {
                    return "string" == typeof i && (r = i, s = r, i = 4), "string" != typeof r && (s = r, r = "#000"), r = r || "#000", null == i && (i = 4), null == s && (s = 1), null == e && (e = 0, n = 2), null == n && (n = e), r = t.color(r), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                        color: r,
                        dx: e,
                        dy: n,
                        blur: i,
                        opacity: s
                    })
                }, t.filter.shadow.toString = function() {
                    return this()
                }, t.filter.grayscale = function(e) {
                    return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                        a: .2126 + .7874 * (1 - e),
                        b: .7152 - .7152 * (1 - e),
                        c: .0722 - .0722 * (1 - e),
                        d: .2126 - .2126 * (1 - e),
                        e: .7152 + .2848 * (1 - e),
                        f: .0722 - .0722 * (1 - e),
                        g: .2126 - .2126 * (1 - e),
                        h: .0722 + .9278 * (1 - e)
                    })
                }, t.filter.grayscale.toString = function() {
                    return this()
                }, t.filter.sepia = function(e) {
                    return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                        a: .393 + .607 * (1 - e),
                        b: .769 - .769 * (1 - e),
                        c: .189 - .189 * (1 - e),
                        d: .349 - .349 * (1 - e),
                        e: .686 + .314 * (1 - e),
                        f: .168 - .168 * (1 - e),
                        g: .272 - .272 * (1 - e),
                        h: .534 - .534 * (1 - e),
                        i: .131 + .869 * (1 - e)
                    })
                }, t.filter.sepia.toString = function() {
                    return this()
                }, t.filter.saturate = function(e) {
                    return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                        amount: 1 - e
                    })
                }, t.filter.saturate.toString = function() {
                    return this()
                }, t.filter.hueRotate = function(e) {
                    return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                        angle: e
                    })
                }, t.filter.hueRotate.toString = function() {
                    return this()
                }, t.filter.invert = function(e) {
                    return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                        amount: e,
                        amount2: 1 - e
                    })
                }, t.filter.invert.toString = function() {
                    return this()
                }, t.filter.brightness = function(e) {
                    return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                        amount: e
                    })}, t.filter.brightness.toString = function() {
return this()
}, t.filter.contrast = function(e) {
return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
amount: e,
amount2: .5 - e / 2
})
}, t.filter.contrast.toString = function() {
return this()
}
}), i
}), + function(t) {
    "use strict";
    var e = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, e.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, e.prototype.to = function(e) {
        var n = this,
            i = this.getActiveIndex();
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            n.to(e)
        }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
    }, e.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, e.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, e.prototype.slide = function(e, n) {
        var i = this.$element.find(".item.active"),
            r = n || i[e](),
            s = this.interval,
            o = "next" == e ? "left" : "right",
            a = "next" == e ? "first" : "last",
            l = this;
        if (!r.length) {
            if (!this.options.wrap) return;
            r = this.$element.find(".item")[a]()
        }
        if (r.hasClass("active")) return this.sliding = !1;
        var c = t.Event("slide.bs.carousel", {
            relatedTarget: r[0],
            direction: o
        });
        return this.$element.trigger(c), c.isDefaultPrevented() ? void 0 : (this.sliding = !0, s && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
            var e = t(l.$indicators.children()[l.getActiveIndex()]);
            e && e.addClass("active")
        })), t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, i.addClass(o), r.addClass(o), i.one(t.support.transition.end, function() {
            r.removeClass([e, o].join(" ")).addClass("active"), i.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function() {
                l.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), s && this.cycle(), this)
    };
    var n = t.fn.carousel;
    t.fn.carousel = function(n) {
            return this.each(function() {
                var i = t(this),
                    r = i.data("bs.carousel"),
                    s = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n),
                    o = "string" == typeof n ? n : s.slide;
                r || i.data("bs.carousel", r = new e(this, s)), "number" == typeof n ? r.to(n) : o ? r[o]() : s.interval && r.pause().cycle()
            })
        }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
            return t.fn.carousel = n, this}, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
    var n, i = t(this),
        r = t(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
        s = t.extend({}, r.data(), i.data()),
        o = i.attr("data-slide-to");
    o && (s.interval = !1), r.carousel(s), (o = i.attr("data-slide-to")) && r.data("bs.carousel").to(o), e.preventDefault()
}), t(window).on("load", function() {
    t('[data-ride="carousel"]').each(function() {
        var e = t(this);
        e.carousel(e.data())
    })
})
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        t(i).remove(), t(r).each(function() {
            var i = n(t(this)),
                r = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", r)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", r))
        })
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }
    var i = ".dropdown-backdrop",
        r = "[data-toggle=dropdown]",
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.prototype.toggle = function(i) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var s = n(r),
                o = s.hasClass("open");
            if (e(), !o) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                s.toggleClass("open").trigger("shown.bs.dropdown", a), r.focus()
            }
            return !1
        }
    }, s.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var s = n(i),
                    o = s.hasClass("open");
                if (!o || o && 27 == e.keyCode) return 27 == e.which && s.find(r).focus(), i.click();
                var a = " li:not(.divider):visible a",
                    l = s.find("[role=menu]" + a + ", [role=listbox]" + a);
                if (l.length) {
                    var c = l.index(l.filter(":focus"));
                    38 == e.keyCode && c > 0 && c--, 40 == e.keyCode && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).focus()
                }
            }
        }
    };
    var o = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = o, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ", [role=menu], [role=listbox]", s.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };
    e.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a")[0],
                s = t.Event("show.bs.tab", {
                    relatedTarget: r
                });
            if (e.trigger(s), !s.isDefaultPrevented()) {
                var o = t(i);
                this.activate(e.parent("li"), n), this.activate(o, o.parent(), function() {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r
                    })
                })
            }
        }
    }, e.prototype.activate = function(e, n, i) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
        }
        var s = n.find("> .active"),
            o = i && t.support.transition && s.hasClass("fade");
        o ? s.one(t.support.transition.end, r).emulateTransitionEnd(150) : r(), s.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = function(n) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new e(this)), "string" == typeof n && r[n]()
        })
    }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
        e.preventDefault(), t(this).tab("show")
    })
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one(t.support.transition.end, function() {
            n = !0
        });
        var r = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function() {
        t.support.transition = e()
    })
}(jQuery), + function(t) {
    "use strict";
    var e = function(e, n) {
        this.options = n, this.$element = t(e), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function(t) {
        return this[this.isShown ? "hide" : "show"](t)
    }, e.prototype.show = function(e) {
        var n = this,
            i = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var i = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            i ? n.$element.find(".modal-dialog").one(t.support.transition.end, function() {
                n.$element.focus().trigger(r)
            }).emulateTransitionEnd(300) : n.$element.focus().trigger(r)
        }))
    }, e.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, e.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.focus()
        }, this))
    }, e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.removeBackdrop(), t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function(e) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = t.support.transition && n;
            if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            i ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
    };
    var n = t.fn.modal;
    t.fn.modal = function(n, i) {
        return this.each(function() {
            var r = t(this),
                s = r.data("bs.modal"),
                o = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n);
            s || r.data("bs.modal", s = new e(this, o)), "string" == typeof n ? s[n](i) : o.show && s.show(i)
        })
    }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var n = t(this),
            i = n.attr("href"),
            r = t(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(i) && i
            }, r.data(), n.data());
        n.is("a") && e.preventDefault(), r.modal(s, this).one("hide", function() {
            n.is(":visible") && n.focus()
        })
    }), t(document).on("show.bs.modal", ".modal", function() {
        t(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        t(document.body).removeClass("modal-open")
    })
}(jQuery), + function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, e.prototype.init = function(e, n, i) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i);
        for (var r = this.options.trigger.split(" "), s = r.length; s--;) {
            var o = r[s];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var a = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, e.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? (n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show), void 0) : n.show()
    }, e.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? (n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide), void 0) : n.hide()
    }, e.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(e), e.isDefaultPrevented()) return;
            var n = this,
                i = this.tip();
            this.setContent(), this.options.animation && i.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                s = /\s?auto?\s?/i,
                o = s.test(r);
            o && (r = r.replace(s, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            var a = this.getPosition(),
                l = i[0].offsetWidth,
                c = i[0].offsetHeight;
            if (o) {
                var u = this.$element.parent(),
                    d = r,
                    h = document.documentElement.scrollTop || document.body.scrollTop,
                    p = "body" == this.options.container ? window.innerWidth : u.outerWidth(),
                    f = "body" == this.options.container ? window.innerHeight : u.outerHeight(),
                    m = "body" == this.options.container ? 0 : u.offset().left;
                r = "bottom" == r && a.top + a.height + c - h > f ? "top" : "top" == r && a.top - h - c < 0 ? "bottom" : "right" == r && a.right + l > p ? "left" : "left" == r && a.left - l < m ? "right" : r, i.removeClass(d).addClass(r)
            }
            var v = this.getCalculatedOffset(r, a, l, c);
            this.applyPlacement(v, r), this.hoverState = null;
            var g = function() {
                n.$element.trigger("shown.bs." + n.type)
            };
            t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, g).emulateTransitionEnd(150) : g()
        }
    }, e.prototype.applyPlacement = function(e, n) {
        var i, r = this.tip(),
            s = r[0].offsetWidth,
            o = r[0].offsetHeight,
            a = parseInt(r.css("margin-top"), 10),
            l = parseInt(r.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(l) && (l = 0), e.top = e.top + a, e.left = e.left + l, t.offset.setOffset(r[0], t.extend({
            using: function(t) {
                r.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), r.addClass("in");
        var c = r[0].offsetWidth,
            u = r[0].offsetHeight;
        if ("top" == n && u != o && (i = !0, e.top = e.top + o - u), /bottom|top/.test(n)) {
            var d = 0;
            e.left < 0 && (d = -2 * e.left, e.left = 0, r.offset(e), c = r[0].offsetWidth, u = r[0].offsetHeight), this.replaceArrow(d - s + c, c, "left")
        } else this.replaceArrow(u - o, u, "top");
        i && r.offset(e)
    }, e.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function() {
        function e() {
            "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            i = this.tip(),
            r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function() {
        var e = this.$element[0];
        return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }, this.$element.offset())
    }, e.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, e.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, e.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var n = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, e.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = function(n) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.tooltip"),
                s = "object" == typeof n && n;
            (r || "destroy" != n) && (r || i.data("bs.tooltip", r = new e(this, s)), "string" == typeof n && r[n]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(jQuery),
function() {
    var t = [].slice;
    window.HAML = function() {
        function e() {}
        return e.escape = function(t) {
            return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#47;")
        }, e.cleanValue = function(t) {
            switch (t) {
                case null:
                case void 0:
                    return "";
                case !0:
                case !1:
                    return "" + t;
                default:
                    return t
            }
        }, e.extend = function() {
            var e, n, i, r, s, o, a;
            for (n = arguments[0], r = 2 <= arguments.length ? t.call(arguments, 1) : [], o = 0, a = r.length; a > o; o++) {
                i = r[o];
                for (e in i) s = i[e], n[e] = s
            }
            return n
        }, e.globals = function() {
            return {}
        }, e.context = function(t) {
            return this.extend({}, e.globals(), t)
        }, e.preserve = function(t) {
            return t.replace(/\n/g, "&#x000A;")
        }, e.findAndPreserve = function(t) {
            var e;
            return e = "textarea,pre".split(",").join("|"), t = t.replace(/\r/g, "").replace(RegExp("<(" + e + ")>([\\s\\S]*?)</\\1>", "g"), function(t, e, n) {
                return "<" + e + ">" + window.HAML.preserve(n) + "</" + e + ">"
            })
        }, e.surround = function(t, e, n) {
            var i;
            return t + (null != (i = n.call(this)) ? i.replace(/^\s+|\s+$/g, "") : void 0) + e
        }, e.succeed = function(t, e) {
            var n;
            return (null != (n = e.call(this)) ? n.replace(/\s+$/g, "") : void 0) + t
        }, e.precede = function(t, e) {
            var n;
            return t + (null != (n = e.call(this)) ? n.replace(/^\s+/g, "") : void 0)
        }, e.reference = function(t, e) {
            var n, i, r, s;
            return i = e ? e + "_" : "", i += "function" == typeof t.hamlObjectRef ? t.hamlObjectRef() : ((null != (s = t.constructor) ? s.name : void 0) || "object").replace(/\W+/g, "_").replace(/([a-z\d])([A-Z])/g, "$1_$2").toLowerCase(), n = "function" == typeof t.to_key ? t.to_key() : "function" == typeof t.id ? t.id() : t.id ? t.id : t, r = "class='" + i + "'", n ? r += " id='" + i + "_" + n + "'" : void 0
        }, e
    }()
}.call(this),
    function() {
        var t = this,
            e = t._,
            n = {},
            i = Array.prototype,
            r = Object.prototype,
            s = Function.prototype,
            o = i.push,
            a = i.slice,
            l = i.concat,
            c = r.toString,
            u = r.hasOwnProperty,
            d = i.forEach,
            h = i.map,
            p = i.reduce,
            f = i.reduceRight,
            m = i.filter,
            v = i.every,
            g = i.some,
            y = i.indexOf,
            _ = i.lastIndexOf,
            w = Array.isArray,
            b = Object.keys,
            C = s.bind,
            x = function(t) {
                return t instanceof x ? t : this instanceof x ? (this._wrapped = t, void 0) : new x(t)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : t._ = x, x.VERSION = "1.6.0";
        var S = x.each = x.forEach = function(t, e, i) {
            if (null == t) return t;
            if (d && t.forEach === d) t.forEach(e, i);
            else if (t.length === +t.length) {
                for (var r = 0, s = t.length; s > r; r++)
                    if (e.call(i, t[r], r, t) === n) return
            } else
                for (var o = x.keys(t), r = 0, s = o.length; s > r; r++)
                    if (e.call(i, t[o[r]], o[r], t) === n) return; return t
        };
        x.map = x.collect = function(t, e, n) {
            var i = [];
            return null == t ? i : h && t.map === h ? t.map(e, n) : (S(t, function(t, r, s) {
                i.push(e.call(n, t, r, s))
            }), i)
        };
        var k = "Reduce of empty array with no initial value";
        x.reduce = x.foldl = x.inject = function(t, e, n, i) {
            var r = arguments.length > 2;
            if (null == t && (t = []), p && t.reduce === p) return i && (e = x.bind(e, i)), r ? t.reduce(e, n) : t.reduce(e);
            if (S(t, function(t, s, o) {
                    r ? n = e.call(i, n, t, s, o) : (n = t, r = !0)
                }), !r) throw new TypeError(k);
            return n
        }, x.reduceRight = x.foldr = function(t, e, n, i) {
            var r = arguments.length > 2;
            if (null == t && (t = []), f && t.reduceRight === f) return i && (e = x.bind(e, i)), r ? t.reduceRight(e, n) : t.reduceRight(e);
            var s = t.length;
            if (s !== +s) {
                var o = x.keys(t);
                s = o.length
            }
            if (S(t, function(a, l, c) {
                    l = o ? o[--s] : --s, r ? n = e.call(i, n, t[l], l, c) : (n = t[l], r = !0)
                }), !r) throw new TypeError(k);
            return n
        }, x.find = x.detect = function(t, e, n) {
            var i;
            return T(t, function(t, r, s) {
                return e.call(n, t, r, s) ? (i = t, !0) : void 0
            }), i
        }, x.filter = x.select = function(t, e, n) {
            var i = [];
            return null == t ? i : m && t.filter === m ? t.filter(e, n) : (S(t, function(t, r, s) {
                e.call(n, t, r, s) && i.push(t)
            }), i)
        }, x.reject = function(t, e, n) {
            return x.filter(t, function(t, i, r) {
                return !e.call(n, t, i, r)
            }, n)
        }, x.every = x.all = function(t, e, i) {
            e || (e = x.identity);
            var r = !0;
            return null == t ? r : v && t.every === v ? t.every(e, i) : (S(t, function(t, s, o) {
                return (r = r && e.call(i, t, s, o)) ? void 0 : n
            }), !!r)
        };
        var T = x.some = x.any = function(t, e, i) {
            e || (e = x.identity);
            var r = !1;
            return null == t ? r : g && t.some === g ? t.some(e, i) : (S(t, function(t, s, o) {
                return r || (r = e.call(i, t, s, o)) ? n : void 0
            }), !!r)
        };
        x.contains = x.include = function(t, e) {
            return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : T(t, function(t) {
                return t === e
            })
        }, x.invoke = function(t, e) {
            var n = a.call(arguments, 2),
                i = x.isFunction(e);
            return x.map(t, function(t) {
                return (i ? e : t[e]).apply(t, n)
            })
        }, x.pluck = function(t, e) {
            return x.map(t, x.property(e))
        }, x.where = function(t, e) {
            return x.filter(t, x.matches(e))
        }, x.findWhere = function(t, e) {
            return x.find(t, x.matches(e))
        }, x.max = function(t, e, n) {
            if (!e && x.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
            var i = -1 / 0,
                r = -1 / 0;
            return S(t, function(t, s, o) {
                var a = e ? e.call(n, t, s, o) : t;
                a > r && (i = t, r = a)
            }), i
        }, x.min = function(t, e, n) {
            if (!e && x.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
            var i = 1 / 0,
                r = 1 / 0;
            return S(t, function(t, s, o) {
                var a = e ? e.call(n, t, s, o) : t;
                r > a && (i = t, r = a)
            }), i
        }, x.shuffle = function(t) {
            var e, n = 0,
                i = [];
            return S(t, function(t) {
                e = x.random(n++), i[n - 1] = i[e], i[e] = t
            }), i
        }, x.sample = function(t, e, n) {
            return null == e || n ? (t.length !== +t.length && (t = x.values(t)), t[x.random(t.length - 1)]) : x.shuffle(t).slice(0, Math.max(0, e))
        };
        var M = function(t) {
            return null == t ? x.identity : x.isFunction(t) ? t : x.property(t)
        };
        x.sortBy = function(t, e, n) {
            return e = M(e), x.pluck(x.map(t, function(t, i, r) {
                return {
                    value: t,
                    index: i,
                    criteria: e.call(n, t, i, r)
                }
            }).sort(function(t, e) {
                var n = t.criteria,
                    i = e.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return t.index - e.index
            }), "value")
        };
        var P = function(t) {
            return function(e, n, i) {
                var r = {};
                return n = M(n), S(e, function(s, o) {
                    var a = n.call(i, s, o, e);
                    t(r, a, s)
                }), r
            }
        };
        x.groupBy = P(function(t, e, n) {
            x.has(t, e) ? t[e].push(n) : t[e] = [n]
        }), x.indexBy = P(function(t, e, n) {
            t[e] = n
        }), x.countBy = P(function(t, e) {
            x.has(t, e) ? t[e]++ : t[e] = 1
        }), x.sortedIndex = function(t, e, n, i) {
            n = M(n);
            for (var r = n.call(i, e), s = 0, o = t.length; o > s;) {
                var a = s + o >>> 1;
                n.call(i, t[a]) < r ? s = a + 1 : o = a
            }
            return s
        }, x.toArray = function(t) {
            return t ? x.isArray(t) ? a.call(t) : t.length === +t.length ? x.map(t, x.identity) : x.values(t) : []
        }, x.size = function(t) {
            return null == t ? 0 : t.length === +t.length ? t.length : x.keys(t).length
        }, x.first = x.head = x.take = function(t, e, n) {
            return null == t ? void 0 : null == e || n ? t[0] : 0 > e ? [] : a.call(t, 0, e)
        }, x.initial = function(t, e, n) {
            return a.call(t, 0, t.length - (null == e || n ? 1 : e))
        }, x.last = function(t, e, n) {
            return null == t ? void 0 : null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
        }, x.rest = x.tail = x.drop = function(t, e, n) {
            return a.call(t, null == e || n ? 1 : e)
        }, x.compact = function(t) {
            return x.filter(t, x.identity)
        };
        var L = function(t, e, n) {
            return e && x.every(t, x.isArray) ? l.apply(n, t) : (S(t, function(t) {
                x.isArray(t) || x.isArguments(t) ? e ? o.apply(n, t) : L(t, e, n) : n.push(t)
            }), n)
        };
        x.flatten = function(t, e) {
            return L(t, e, [])
        }, x.without = function(t) {
            return x.difference(t, a.call(arguments, 1))
        }, x.partition = function(t, e, n) {
            e = M(e);
            var i = [],
                r = [];
            return S(t, function(t) {
                (e.call(n, t) ? i : r).push(t)
            }), [i, r]
        }, x.uniq = x.unique = function(t, e, n, i) {
            x.isFunction(e) && (i = n, n = e, e = !1);
            var r = n ? x.map(t, n, i) : t,
                s = [],
                o = [];
            return S(r, function(n, i) {
                (e ? i && o[o.length - 1] === n : x.contains(o, n)) || (o.push(n), s.push(t[i]))
            }), s
        }, x.union = function() {
            return x.uniq(x.flatten(arguments, !0))
        }, x.intersection = function(t) {
            var e = a.call(arguments, 1);
            return x.filter(x.uniq(t), function(t) {
                return x.every(e, function(e) {
                    return x.contains(e, t)
                })
            })
        }, x.difference = function(t) {
            var e = l.apply(i, a.call(arguments, 1));
            return x.filter(t, function(t) {
                return !x.contains(e, t)
            })
        }, x.zip = function() {
            for (var t = x.max(x.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = x.pluck(arguments, "" + n);
            return e
        }, x.object = function(t, e) {
            if (null == t) return {};
            for (var n = {}, i = 0, r = t.length; r > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
            return n
        }, x.indexOf = function(t, e, n) {
            if (null == t) return -1;
            var i = 0,
                r = t.length;
            if (n) {
                if ("number" != typeof n) return i = x.sortedIndex(t, e), t[i] === e ? i : -1;
                i = 0 > n ? Math.max(0, r + n) : n
            }
            if (y && t.indexOf === y) return t.indexOf(e, n);
            for (; r > i; i++)
                if (t[i] === e) return i;
            return -1
        }, x.lastIndexOf = function(t, e, n) {
            if (null == t) return -1;
            var i = null != n;
            if (_ && t.lastIndexOf === _) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
            for (var r = i ? n : t.length; r--;)
                if (t[r] === e) return r;
            return -1
        }, x.range = function(t, e, n) {
            arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((e - t) / n), 0), r = 0, s = new Array(i); i > r;) s[r++] = t, t += n;
            return s
        };
        var E = function() {};
        x.bind = function(t, e) {
            var n, i;
            if (C && t.bind === C) return C.apply(t, a.call(arguments, 1));
            if (!x.isFunction(t)) throw new TypeError;
            return n = a.call(arguments, 2), i = function() {
                if (!(this instanceof i)) return t.apply(e, n.concat(a.call(arguments)));
                E.prototype = t.prototype;
                var r = new E;
                E.prototype = null;
                var s = t.apply(r, n.concat(a.call(arguments)));
                return Object(s) === s ? s : r
            }
        }, x.partial = function(t) {
            var e = a.call(arguments, 1);
            return function() {
                for (var n = 0, i = e.slice(), r = 0, s = i.length; s > r; r++) i[r] === x && (i[r] = arguments[n++]);
                for (; n < arguments.length;) i.push(arguments[n++]);
                return t.apply(this, i)
            }
        }, x.bindAll = function(t) {
            var e = a.call(arguments, 1);
            if (0 === e.length) throw new Error("bindAll must be passed function names");
            return S(e, function(e) {
                t[e] = x.bind(t[e], t)
            }), t
        }, x.memoize = function(t, e) {
            var n = {};
            return e || (e = x.identity),
                function() {
                    var i = e.apply(this, arguments);
                    return x.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
                }
        }, x.delay = function(t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }, x.defer = function(t) {
            return x.delay.apply(x, [t, 1].concat(a.call(arguments, 1)))
        }, x.throttle = function(t, e, n) {
            var i, r, s, o = null,
                a = 0;
            n || (n = {});
            var l = function() {
                a = n.leading === !1 ? 0 : x.now(), o = null, s = t.apply(i, r), i = r = null
            };
            return function() {
                var c = x.now();
                a || n.leading !== !1 || (a = c);
                var u = e - (c - a);
                return i = this, r = arguments, 0 >= u ? (clearTimeout(o), o = null, a = c, s = t.apply(i, r), i = r = null) : o || n.trailing === !1 || (o = setTimeout(l, u)), s
            }
        }, x.debounce = function(t, e, n) {
            var i, r, s, o, a, l = function() {
                var c = x.now() - o;
                e > c ? i = setTimeout(l, e - c) : (i = null, n || (a = t.apply(s, r), s = r = null))
            };
            return function() {
                s = this, r = arguments, o = x.now();
                var c = n && !i;
                return i || (i = setTimeout(l, e)), c && (a = t.apply(s, r), s = r = null), a
            }
        }, x.once = function(t) {
            var e, n = !1;
            return function() {
                return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
            }
        }, x.wrap = function(t, e) {
            return x.partial(e, t)
        }, x.compose = function() {
            var t = arguments;
            return function() {
                for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
                return e[0]
            }
        }, x.after = function(t, e) {
            return function() {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }, x.keys = function(t) {
            if (!x.isObject(t)) return [];
            if (b) return b(t);
            var e = [];
            for (var n in t) x.has(t, n) && e.push(n);
            return e
        }, x.values = function(t) {
            for (var e = x.keys(t), n = e.length, i = new Array(n), r = 0; n > r; r++) i[r] = t[e[r]];
            return i
        }, x.pairs = function(t) {
            for (var e = x.keys(t), n = e.length, i = new Array(n), r = 0; n > r; r++) i[r] = [e[r], t[e[r]]];
            return i
        }, x.invert = function(t) {
            for (var e = {}, n = x.keys(t), i = 0, r = n.length; r > i; i++) e[t[n[i]]] = n[i];
            return e
        }, x.functions = x.methods = function(t) {
            var e = [];
            for (var n in t) x.isFunction(t[n]) && e.push(n);
            return e.sort()
        }, x.extend = function(t) {
            return S(a.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) t[n] = e[n]
            }), t
        }, x.pick = function(t) {
            var e = {},
                n = l.apply(i, a.call(arguments, 1));
            return S(n, function(n) {
                n in t && (e[n] = t[n])
            }), e
        }, x.omit = function(t) {
            var e = {},
                n = l.apply(i, a.call(arguments, 1));
            for (var r in t) x.contains(n, r) || (e[r] = t[r]);
            return e
        }, x.defaults = function(t) {
            return S(a.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) void 0 === t[n] && (t[n] = e[n])
            }), t
        }, x.clone = function(t) {
            return x.isObject(t) ? x.isArray(t) ? t.slice() : x.extend({}, t) : t
        }, x.tap = function(t, e) {
            return e(t), t
        };
        var A = function(t, e, n, i) {
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            if (null == t || null == e) return t === e;
            t instanceof x && (t = t._wrapped), e instanceof x && (e = e._wrapped);
            var r = c.call(t);
            if (r != c.call(e)) return !1;
            switch (r) {
                case "[object String]":
                    return t == String(e);
                case "[object Number]":
                    return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                case "[object Date]":
                case "[object Boolean]":
                    return +t == +e;
                case "[object RegExp]":
                    return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
            }
            if ("object" != typeof t || "object" != typeof e) return !1;
            for (var s = n.length; s--;)
                if (n[s] == t) return i[s] == e;
            var o = t.constructor,
                a = e.constructor;
            if (o !== a && !(x.isFunction(o) && o instanceof o && x.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1;
            n.push(t), i.push(e);
            var l = 0,
                u = !0;
            if ("[object Array]" == r) {
                if (l = t.length, u = l == e.length)
                    for (; l-- && (u = A(t[l], e[l], n, i)););
            } else {
                for (var d in t)
                    if (x.has(t, d) && (l++, !(u = x.has(e, d) && A(t[d], e[d], n, i)))) break;
                if (u) {
                    for (d in e)
                        if (x.has(e, d) && !l--) break;
                    u = !l
                }
            }
            return n.pop(), i.pop(), u
        };
        x.isEqual = function(t, e) {
            return A(t, e, [], [])
        }, x.isEmpty = function(t) {
            if (null == t) return !0;
            if (x.isArray(t) || x.isString(t)) return 0 === t.length;
            for (var e in t)
                if (x.has(t, e)) return !1;
            return !0
        }, x.isElement = function(t) {
            return !(!t || 1 !== t.nodeType)
        }, x.isArray = w || function(t) {
            return "[object Array]" == c.call(t)
        }, x.isObject = function(t) {
            return t === Object(t)
        }, S(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
            x["is" + t] = function(e) {
                return c.call(e) == "[object " + t + "]"
            }
        }), x.isArguments(arguments) || (x.isArguments = function(t) {
            return !(!t || !x.has(t, "callee"))
        }), "function" != typeof /./ && (x.isFunction = function(t) {
            return "function" == typeof t
        }), x.isFinite = function(t) {
            return isFinite(t) && !isNaN(parseFloat(t))
        }, x.isNaN = function(t) {
            return x.isNumber(t) && t != +t
        }, x.isBoolean = function(t) {
            return t === !0 || t === !1 || "[object Boolean]" == c.call(t)
        }, x.isNull = function(t) {
            return null === t
        }, x.isUndefined = function(t) {
            return void 0 === t
        }, x.has = function(t, e) {
            return u.call(t, e)
        }, x.noConflict = function() {
            return t._ = e, this
        }, x.identity = function(t) {
            return t
        }, x.constant = function(t) {
            return function() {
                return t
            }
        }, x.property = function(t) {
            return function(e) {
                return e[t]
            }
        }, x.matches = function(t) {
            return function(e) {
                if (e === t) return !0;
                for (var n in t)
                    if (t[n] !== e[n]) return !1;
                return !0
            }
        }, x.times = function(t, e, n) {
            for (var i = Array(Math.max(0, t)), r = 0; t > r; r++) i[r] = e.call(n, r);
            return i
        }, x.random = function(t, e) {
            return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
        }, x.now = Date.now || function() {
            return (new Date).getTime()
        };
        var I = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        I.unescape = x.invert(I.escape);
        var $ = {
            escape: new RegExp("[" + x.keys(I.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + x.keys(I.unescape).join("|") + ")", "g")
        };
        x.each(["escape", "unescape"], function(t) {
            x[t] = function(e) {
                return null == e ? "" : ("" + e).replace($[t], function(e) {
                    return I[t][e]
                })
            }
        }), x.result = function(t, e) {
            if (null == t) return void 0;
            var n = t[e];
            return x.isFunction(n) ? n.call(t) : n
        }, x.mixin = function(t) {
            S(x.functions(t), function(e) {
                var n = x[e] = t[e];
                x.prototype[e] = function() {
                    var t = [this._wrapped];
                    return o.apply(t, arguments), j.call(this, n.apply(x, t))
                }
            })
        };
        var D = 0;
        x.uniqueId = function(t) {
            var e = ++D + "";
            return t ? t + e : e
        }, x.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var O = /(.)^/,
            V = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "   ": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        x.template = function(t, e, n) {
            var i;
            n = x.defaults({}, n, x.templateSettings);
            var r = new RegExp([(n.escape || O).source, (n.interpolate || O).source, (n.evaluate || O).source].join("|") + "|$", "g"),
                s = 0,
                o = "__p+='";
            t.replace(r, function(e, n, i, r, a) {
                return o += t.slice(s, a).replace(B, function(t) {
                    return "\\" + V[t]
                }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (o += "';\n" + r + "\n__p+='"), s = a + e.length, e
            }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                i = new Function(n.variable || "obj", "_", o)
            } catch (a) {
                throw a.source = o, a
            }
            if (e) return i(e, x);
            var l = function(t) {
                return i.call(this, t, x)
            };
            return l.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", l
        }, x.chain = function(t) {
            return x(t).chain()
        };
        var j = function(t) {
            return this._chain ? x(t).chain() : t
        };
        x.mixin(x), S(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
            var e = i[t];
            x.prototype[t] = function() {
                var n = this._wrapped;
                return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], j.call(this, n)
            }
        }), S(["concat", "join", "slice"], function(t) {
            var e = i[t];
            x.prototype[t] = function() {
                return j.call(this, e.apply(this._wrapped, arguments))
            }
        }), x.extend(x.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        }), "function" == typeof define && define.amd && define("underscore", [], function() {
            return x
        })
    }.call(this),
    function(t, e) {
        if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(n, i, r) {
            t.Backbone = e(t, r, n, i)
        });
        else if ("undefined" != typeof exports) {
            var n, i = require("underscore");
            try {
                n = require("jquery")
            } catch (r) {}
            e(t, exports, i, n)
        } else t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
    }(this, function(t, e, n, i) {
            {
                var r = t.Backbone,
                    s = [],
                    o = (s.push, s.slice);
                s.splice
            }
            e.VERSION = "1.1.1", e.$ = i, e.noConflict = function() {
                return t.Backbone = r, this
            }, e.emulateHTTP = !1, e.emulateJSON = !1;
            var a = e.Events = {
                    on: function(t, e, n) {
                        if (!c(this, "on", t, [e, n]) || !e) return this;
                        this._events || (this._events = {});
                        var i = this._events[t] || (this._events[t] = []);
                        return i.push({
                            callback: e,
                            context: n,
                            ctx: n || this
                        }), this
                    },
                    once: function(t, e, i) {
                        if (!c(this, "once", t, [e, i]) || !e) return this;
                        var r = this,
                            s = n.once(function() {
                                r.off(t, s), e.apply(this, arguments)
                            });
                        return s._callback = e, this.on(t, s, i)
                    },
                    off: function(t, e, i) {
                        var r, s, o, a, l, u, d, h;
                        if (!this._events || !c(this, "off", t, [e, i])) return this;
                        if (!t && !e && !i) return this._events = void 0, this;
                        for (a = t ? [t] : n.keys(this._events), l = 0, u = a.length; u > l; l++)
                            if (t = a[l], o = this._events[t]) {
                                if (this._events[t] = r = [], e || i)
                                    for (d = 0, h = o.length; h > d; d++) s = o[d], (e && e !== s.callback && e !== s.callback._callback || i && i !== s.context) && r.push(s);
                                r.length || delete this._events[t]
                            }
                        return this
                    },
                    trigger: function(t) {
                        if (!this._events) return this;
                        var e = o.call(arguments, 1);
                        if (!c(this, "trigger", t, e)) return this;
                        var n = this._events[t],
                            i = this._events.all;
                        return n && u(n, e), i && u(i, arguments), this
                    },
                    stopListening: function(t, e, i) {
                        var r = this._listeningTo;
                        if (!r) return this;
                        var s = !e && !i;
                        i || "object" != typeof e || (i = this), t && ((r = {})[t._listenId] = t);
                        for (var o in r) t = r[o], t.off(e, i, this), (s || n.isEmpty(t._events)) && delete this._listeningTo[o];
                        return this
                    }
                },
                l = /\s+/,
                c = function(t, e, n, i) {
                    if (!n) return !0;if ("object" == typeof n) {
    for (var r in n) t[e].apply(t, [r, n[r]].concat(i));
    return !1
}
if (l.test(n)) {
    for (var s = n.split(l), o = 0, a = s.length; a > o; o++) t[e].apply(t, [s[o]].concat(i));
    return !1
}
return !0
}, u = function(t, e) {
    var n, i = -1,
        r = t.length,
        s = e[0],
        o = e[1],
        a = e[2];
    switch (e.length) {
        case 0:
            for (; ++i < r;)(n = t[i]).callback.call(n.ctx);
            return;
        case 1:
            for (; ++i < r;)(n = t[i]).callback.call(n.ctx, s);
            return;
        case 2:
            for (; ++i < r;)(n = t[i]).callback.call(n.ctx, s, o);
            return;
        case 3:
            for (; ++i < r;)(n = t[i]).callback.call(n.ctx, s, o, a);
            return;
        default:
            for (; ++i < r;)(n = t[i]).callback.apply(n.ctx, e);
            return
    }
}, d = {
    listenTo: "on",
    listenToOnce: "once"
};
n.each(d, function(t, e) {
    a[e] = function(e, i, r) {
        var s = this._listeningTo || (this._listeningTo = {}),
            o = e._listenId || (e._listenId = n.uniqueId("l"));
        return s[o] = e, r || "object" != typeof i || (r = this), e[t](i, r, this), this
    }
}), a.bind = a.on, a.unbind = a.off, n.extend(e, a);
var h = e.Model = function(t, e) {
    var i = t || {};
    e || (e = {}), this.cid = n.uniqueId("c"), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (i = this.parse(i, e) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, e), this.changed = {}, this.initialize.apply(this, arguments)
};
n.extend(h.prototype, a, {
    changed: null,
    validationError: null,
    idAttribute: "id",
    initialize: function() {},
    toJSON: function() {
        return n.clone(this.attributes)
    },
    sync: function() {
        return e.sync.apply(this, arguments)
    },
    get: function(t) {
        return this.attributes[t]
    },
    escape: function(t) {
        return n.escape(this.get(t))
    },
    has: function(t) {
        return null != this.get(t)
    },
    set: function(t, e, i) {
        var r, s, o, a, l, c, u, d;
        if (null == t) return this;
        if ("object" == typeof t ? (s = t, i = e) : (s = {})[t] = e, i || (i = {}), !this._validate(s, i)) return !1;
        o = i.unset, l = i.silent, a = [], c = this._changing, this._changing = !0, c || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), d = this.attributes, u = this._previousAttributes, this.idAttribute in s && (this.id = s[this.idAttribute]);
        for (r in s) e = s[r], n.isEqual(d[r], e) || a.push(r), n.isEqual(u[r], e) ? delete this.changed[r] : this.changed[r] = e, o ? delete d[r] : d[r] = e;
        if (!l) {
            a.length && (this._pending = i);
            for (var h = 0, p = a.length; p > h; h++) this.trigger("change:" + a[h], this, d[a[h]], i)
        }
        if (c) return this;
        if (!l)
            for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
        return this._pending = !1, this._changing = !1, this
    },
    unset: function(t, e) {
        return this.set(t, void 0, n.extend({}, e, {
            unset: !0
        }))
    },
    clear: function(t) {
        var e = {};
        for (var i in this.attributes) e[i] = void 0;
        return this.set(e, n.extend({}, t, {
            unset: !0
        }))
    },
    hasChanged: function(t) {
        return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
    },
    changedAttributes: function(t) {
        if (!t) return this.hasChanged() ? n.clone(this.changed) : !1;
        var e, i = !1,
            r = this._changing ? this._previousAttributes : this.attributes;
        for (var s in t) n.isEqual(r[s], e = t[s]) || ((i || (i = {}))[s] = e);
        return i
    },
    previous: function(t) {
        return null != t && this._previousAttributes ? this._previousAttributes[t] : null
    },
    previousAttributes: function() {
        return n.clone(this._previousAttributes)
    },
    fetch: function(t) {
        t = t ? n.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
        var e = this,
            i = t.success;
        return t.success = function(n) {
            return e.set(e.parse(n, t), t) ? (i && i(e, n, t), e.trigger("sync", e, n, t), void 0) : !1
        }, B(this, t), this.sync("read", this, t)
    },
    save: function(t, e, i) {
        var r, s, o, a = this.attributes;
        if (null == t || "object" == typeof t ? (r = t, i = e) : (r = {})[t] = e, i = n.extend({
                validate: !0
            }, i), r && !i.wait) {
            if (!this.set(r, i)) return !1
        } else if (!this._validate(r, i)) return !1;
        r && i.wait && (this.attributes = n.extend({}, a, r)), void 0 === i.parse && (i.parse = !0);
        var l = this,
            c = i.success;
        return i.success = function(t) {
            l.attributes = a;
            var e = l.parse(t, i);
            return i.wait && (e = n.extend(r || {}, e)), n.isObject(e) && !l.set(e, i) ? !1 : (c && c(l, t, i), l.trigger("sync", l, t, i), void 0)
        }, B(this, i), s = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === s && (i.attrs = r), o = this.sync(s, this, i), r && i.wait && (this.attributes = a), o
    },
    destroy: function(t) {
        t = t ? n.clone(t) : {};
        var e = this,
            i = t.success,
            r = function() {
                e.trigger("destroy", e, e.collection, t)
            };
        if (t.success = function(n) {
                (t.wait || e.isNew()) && r(), i && i(e, n, t), e.isNew() || e.trigger("sync", e, n, t)
            }, this.isNew()) return t.success(), !1;
        B(this, t);
        var s = this.sync("delete", this, t);
        return t.wait || r(), s
    },
    url: function() {
        var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || V();
        return this.isNew() ? t : t.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
    },
    parse: function(t) {
        return t
    },
    clone: function() {
        return new this.constructor(this.attributes)
    },
    isNew: function() {
        return !this.has(this.idAttribute)
    },
    isValid: function(t) {
        return this._validate({}, n.extend(t || {}, {
            validate: !0
        }))
    },
    _validate: function(t, e) {
        if (!e.validate || !this.validate) return !0;
        t = n.extend({}, this.attributes, t);
        var i = this.validationError = this.validate(t, e) || null;
        return i ? (this.trigger("invalid", this, i, n.extend(e, {
            validationError: i
        })), !1) : !0
    }
});
var p = ["keys", "values", "pairs", "invert", "pick", "omit"];
n.each(p, function(t) {
    h.prototype[t] = function() {
        var e = o.call(arguments);
        return e.unshift(this.attributes), n[t].apply(n, e)
    }
});
var f = e.Collection = function(t, e) {
        e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, n.extend({
            silent: !0
        }, e))
    },
    m = {
        add: !0,
        remove: !0,
        merge: !0
    },
    v = {
        add: !0,
        remove: !1
    };
n.extend(f.prototype, a, {
    model: h,
    initialize: function() {},
    toJSON: function(t) {
        return this.map(function(e) {
            return e.toJSON(t)
        })
    },
    sync: function() {
        return e.sync.apply(this, arguments)
    },
    add: function(t, e) {
        return this.set(t, n.extend({
            merge: !1
        }, e, v))
    },
    remove: function(t, e) {
        var i = !n.isArray(t);
        t = i ? [t] : n.clone(t), e || (e = {});
        var r, s, o, a;
        for (r = 0, s = t.length; s > r; r++) a = t[r] = this.get(t[r]), a && (delete this._byId[a.id], delete this._byId[a.cid], o = this.indexOf(a), this.models.splice(o, 1), this.length--, e.silent || (e.index = o, a.trigger("remove", a, this, e)), this._removeReference(a, e));
        return i ? t[0] : t
    },
    set: function(t, e) {
        e = n.defaults({}, e, m), e.parse && (t = this.parse(t, e));
        var i = !n.isArray(t);
        t = i ? t ? [t] : [] : n.clone(t);
        var r, s, o, a, l, c, u, d = e.at,
            p = this.model,
            f = this.comparator && null == d && e.sort !== !1,
            v = n.isString(this.comparator) ? this.comparator : null,
            g = [],
            y = [],
            _ = {},
            w = e.add,
            b = e.merge,
            C = e.remove,
            x = !f && w && C ? [] : !1;
        for (r = 0, s = t.length; s > r; r++) {
            if (l = t[r] || {}, o = l instanceof h ? a = l : l[p.prototype.idAttribute || "id"], c = this.get(o)) C && (_[c.cid] = !0), b && (l = l === a ? a.attributes : l, e.parse && (l = c.parse(l, e)), c.set(l, e), f && !u && c.hasChanged(v) && (u = !0)), t[r] = c;
            else if (w) {
                if (a = t[r] = this._prepareModel(l, e), !a) continue;
                g.push(a), this._addReference(a, e)
            }
            a = c || a, !x || !a.isNew() && _[a.id] || x.push(a), _[a.id] = !0
        }
        if (C) {
            for (r = 0, s = this.length; s > r; ++r) _[(a = this.models[r]).cid] || y.push(a);
            y.length && this.remove(y, e)
        }
        if (g.length || x && x.length)
            if (f && (u = !0), this.length += g.length, null != d)
                for (r = 0, s = g.length; s > r; r++) this.models.splice(d + r, 0, g[r]);
            else {
                x && (this.models.length = 0);
                var S = x || g;
                for (r = 0, s = S.length; s > r; r++) this.models.push(S[r])
            }
        if (u && this.sort({
                silent: !0
            }), !e.silent) {
            for (r = 0, s = g.length; s > r; r++)(a = g[r]).trigger("add", a, this, e);
            (u || x && x.length) && this.trigger("sort", this, e)
        }
        return i ? t[0] : t
    },
    reset: function(t, e) {
        e || (e = {});
        for (var i = 0, r = this.models.length; r > i; i++) this._removeReference(this.models[i], e);
        return e.previousModels = this.models, this._reset(), t = this.add(t, n.extend({
            silent: !0
        }, e)), e.silent || this.trigger("reset", this, e), t
    },
    push: function(t, e) {
        return this.add(t, n.extend({
            at: this.length
        }, e))
    },
    pop: function(t) {
        var e = this.at(this.length - 1);
        return this.remove(e, t), e
    },
    unshift: function(t, e) {
        return this.add(t, n.extend({
            at: 0
        }, e))
    },
    shift: function(t) {
        var e = this.at(0);
        return this.remove(e, t), e
    },
    slice: function() {
        return o.apply(this.models, arguments)
    },
    get: function(t) {
        return null == t ? void 0 : this._byId[t] || this._byId[t.id] || this._byId[t.cid]
    },
    at: function(t) {
        return this.models[t]
    },
    where: function(t, e) {
        return n.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
            for (var n in t)
                if (t[n] !== e.get(n)) return !1;
            return !0
        })
    },
    findWhere: function(t) {
        return this.where(t, !0)
    },
    sort: function(t) {
        if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
        return t || (t = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
    },
    pluck: function(t) {
        return n.invoke(this.models, "get", t)
    },
    fetch: function(t) {
        t = t ? n.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
        var e = t.success,
            i = this;
        return t.success = function(n) {
            var r = t.reset ? "reset" : "set";
            i[r](n, t), e && e(i, n, t), i.trigger("sync", i, n, t)
        }, B(this, t), this.sync("read", this, t)
    },
    create: function(t, e) {
        if (e = e ? n.clone(e) : {}, !(t = this._prepareModel(t, e))) return !1;
        e.wait || this.add(t, e);
        var i = this,
            r = e.success;
        return e.success = function(t, n) {
            e.wait && i.add(t, e), r && r(t, n, e)
        }, t.save(null, e), t
    },
    parse: function(t) {
        return t
    },
    clone: function() {
        return new this.constructor(this.models)
    },
    _reset: function() {
        this.length = 0, this.models = [], this._byId = {}
    },
    _prepareModel: function(t, e) {
        if (t instanceof h) return t;
        e = e ? n.clone(e) : {}, e.collection = this;
        var i = new this.model(t, e);
        return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i
    },
    _addReference: function(t) {
        this._byId[t.cid] = t, null != t.id && (this._byId[t.id] = t), t.collection || (t.collection = this), t.on("all", this._onModelEvent, this)
    },
    _removeReference: function(t) {
        this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
    },
    _onModelEvent: function(t, e, n, i) {
        ("add" !== t && "remove" !== t || n === this) && ("destroy" === t && this.remove(e, i), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
    }
});
var g = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
n.each(g, function(t) {
    f.prototype[t] = function() {
        var e = o.call(arguments);
        return e.unshift(this.models), n[t].apply(n, e)
    }
});
var y = ["groupBy", "countBy", "sortBy", "indexBy"];
n.each(y, function(t) {
    f.prototype[t] = function(e, i) {
        var r = n.isFunction(e) ? e : function(t) {
            return t.get(e)
        };
        return n[t](this.models, r, i)
    }
});
var _ = e.View = function(t) {
        this.cid = n.uniqueId("view"), t || (t = {}), n.extend(this, n.pick(t, b)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    },
    w = /^(\S+)\s*(.*)$/,
    b = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
n.extend(_.prototype, a, {
    tagName: "div",
    $: function(t) {
        return this.$el.find(t)
    },
    initialize: function() {},
    render: function() {
        return this
    },
    remove: function() {
        return this.$el.remove(), this.stopListening(), this
    },
    setElement: function(t, n) {
        return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
    },
    delegateEvents: function(t) {
        if (!t && !(t = n.result(this, "events"))) return this;
        this.undelegateEvents();
        for (var e in t) {
            var i = t[e];
            if (n.isFunction(i) || (i = this[t[e]]), i) {
                var r = e.match(w),
                    s = r[1],
                    o = r[2];
                i = n.bind(i, this), s += ".delegateEvents" + this.cid, "" === o ? this.$el.on(s, i) : this.$el.on(s, o, i)
            }
        }
        return this
    },
    undelegateEvents: function() {
        return this.$el.off(".delegateEvents" + this.cid), this
    },
    _ensureElement: function() {
        if (this.el) this.setElement(n.result(this, "el"), !1);
        else {
            var t = n.extend({}, n.result(this, "attributes"));
            this.id && (t.id = n.result(this, "id")), this.className && (t["class"] = n.result(this, "className"));
            var i = e.$("<" + n.result(this, "tagName") + ">").attr(t);
            this.setElement(i, !1)
        }
    }
}), e.sync = function(t, i, r) {
    var s = x[t];
    n.defaults(r || (r = {}), {
        emulateHTTP: e.emulateHTTP,
        emulateJSON: e.emulateJSON
    });
    var o = {
        type: s,
        dataType: "json"
    };
    if (r.url || (o.url = n.result(i, "url") || V()), null != r.data || !i || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json", o.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
            model: o.data
        } : {}), r.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s)) {
        o.type = "POST", r.emulateJSON && (o.data._method = s);
        var a = r.beforeSend;
        r.beforeSend = function(t) {
            return t.setRequestHeader("X-HTTP-Method-Override", s), a ? a.apply(this, arguments) : void 0
        }
    }
    "GET" === o.type || r.emulateJSON || (o.processData = !1), "PATCH" === o.type && C && (o.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    });
    var l = r.xhr = e.ajax(n.extend(o, r));
    return i.trigger("request", i, l, r), l
};
var C = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
    x = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
e.ajax = function() {
    return e.$.ajax.apply(e.$, arguments)
};
var S = e.Router = function(t) {
        t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    },
    k = /\((.*?)\)/g,
    T = /(\(\?)?:\w+/g,
    M = /\*\w+/g,
    P = /[\-{}\[\]+?.,\\\^$|#\s]/g;
n.extend(S.prototype, a, {
    initialize: function() {},
    route: function(t, i, r) {
        n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
        var s = this;
        return e.history.route(t, function(n) {
            var o = s._extractParameters(t, n);
            s.execute(r, o), s.trigger.apply(s, ["route:" + i].concat(o)), s.trigger("route", i, o), e.history.trigger("route", s, i, o)
        }), this
    },
    execute: function(t, e) {
        t && t.apply(this, e)
    },
    navigate: function(t, n) {
        return e.history.navigate(t, n), this
    },
    _bindRoutes: function() {
        if (this.routes) {
            this.routes = n.result(this, "routes");
            for (var t, e = n.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
        }
    },
    _routeToRegExp: function(t) {
        return t = t.replace(P, "\\$&").replace(k, "(?:$1)?").replace(T, function(t, e) {
            return e ? t : "([^/?]+)"
        }).replace(M, "([^?]*?)"), new RegExp("^" + t + "(?:\\?(.*))?$")
    },
    _extractParameters: function(t, e) {
        var i = t.exec(e).slice(1);
        return n.map(i, function(t, e) {
            return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null
        })
    }
});
var L = e.History = function() {
        this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    },
    E = /^[#\/]|\s+$/g,
    A = /^\/+|\/+$/g,
    I = /msie [\w.]+/,
    $ = /\/$/,
    D = /#.*$/;
L.started = !1, n.extend(L.prototype, a, {
    interval: 50,
    atRoot: function() {
        return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
    },
    getHash: function(t) {
        var e = (t || this).location.href.match(/#(.*)$/);
        return e ? e[1] : ""
    },
    getFragment: function(t, e) {
        if (null == t)
            if (this._hasPushState || !this._wantsHashChange || e) {
                t = decodeURI(this.location.pathname + this.location.search);
                var n = this.root.replace($, "");
                t.indexOf(n) || (t = t.slice(n.length))
            } else t = this.getHash();
        return t.replace(E, "")
    },
    start: function(t) {
        if (L.started) throw new Error("Backbone.history has already been started");
        L.started = !0, this.options = n.extend({
            root: "/"
        }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
        var i = this.getFragment(),
            r = document.documentMode,
            s = I.exec(navigator.userAgent.toLowerCase()) && (!r || 7 >= r);
        if (this.root = ("/" + this.root + "/").replace(A, "/"), s && this._wantsHashChange) {
            var o = e.$('<iframe src="javascript:0" tabindex="-1">');
            this.iframe = o.hide().appendTo("body")[0].contentWindow, this.navigate(i)
        }
        this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !s ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
        var a = this.location;
        if (this._wantsHashChange && this._wantsPushState) {
            if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
            this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(E, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
        }
        return this.options.silent ? void 0 : this.loadUrl()
    },
    stop: function() {
        e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), L.started = !1
    },
    route: function(t, e) {
        this.handlers.unshift({
            route: t,
            callback: e
        })
    },
    checkUrl: function() {
        var t = this.getFragment();
        return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), this.loadUrl(), void 0)
    },
    loadUrl: function(t) {
        return t = this.fragment = this.getFragment(t), n.any(this.handlers, function(e) {
            return e.route.test(t) ? (e.callback(t), !0) : void 0
        })
    },
    navigate: function(t, e) {
        if (!L.started) return !1;
        e && e !== !0 || (e = {
            trigger: !!e
        });
        var n = this.root + (t = this.getFragment(t || ""));
        if (t = t.replace(D, ""), this.fragment !== t) {
            if (this.fragment = t, "" === t && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
            else {
                if (!this._wantsHashChange) return this.location.assign(n);
                this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
            }
            return e.trigger ? this.loadUrl(t) : void 0
        }
    },
    _updateHash: function(t, e, n) {
        if (n) {
            var i = t.href.replace(/(javascript:|#).*$/, "");
            t.replace(i + "#" + e)
        } else t.hash = "#" + e
    }
}), e.history = new L;
var O = function(t, e) {
    var i, r = this;
    i = t && n.has(t, "constructor") ? t.constructor : function() {
        return r.apply(this, arguments)
    }, n.extend(i, r, e);
    var s = function() {
        this.constructor = i
    };
    return s.prototype = r.prototype, i.prototype = new s, t && n.extend(i.prototype, t), i.__super__ = r.prototype, i
};
h.extend = f.extend = S.extend = _.extend = L.extend = O;
var V = function() {
        throw new Error('A "url" property or function must be specified')
    },
    B = function(t, e) {
        var n = e.error;
        e.error = function(i) {
            n && n(t, i, e), t.trigger("error", t, i, e)
        }
    };
return e
});
var Marionette = function(t, e, n) {
        "use strict";

        function i(t, e) {
            var n = new Error(t);
            throw n.name = e || "Error", n
        }! function(t, e) {
            var n = t.ChildViewContainer;
            return t.ChildViewContainer = function(t, e) {
                var n = function(t) {
                    this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), e.each(t, this.add, this)
                };
                e.extend(n.prototype, {
                    add: function(t, e) {
                        var n = t.cid;
                        return this._views[n] = t, t.model && (this._indexByModel[t.model.cid] = n), e && (this._indexByCustom[e] = n), this._updateLength(), this
                    },
                    findByModel: function(t) {
                        return this.findByModelCid(t.cid)
                    },
                    findByModelCid: function(t) {
                        var e = this._indexByModel[t];
                        return this.findByCid(e)
                    },
                    findByCustom: function(t) {
                        var e = this._indexByCustom[t];
                        return this.findByCid(e)
                    },
                    findByIndex: function(t) {
                        return e.values(this._views)[t]
                    },
                    findByCid: function(t) {
                        return this._views[t]
                    },
                    remove: function(t) {
                        var n = t.cid;
                        return t.model && delete this._indexByModel[t.model.cid], e.any(this._indexByCustom, function(t, e) {
                            return t === n ? (delete this._indexByCustom[e], !0) : void 0
                        }, this), delete this._views[n], this._updateLength(), this
                    },
                    call: function(t) {
                        this.apply(t, e.tail(arguments))
                    },
                    apply: function(t, n) {
                        e.each(this._views, function(i) {
                            e.isFunction(i[t]) && i[t].apply(i, n || [])
                        })
                    },
                    _updateLength: function() {
                        this.length = e.size(this._views)
                    }
                });
                var i = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
                return e.each(i, function(t) {
                    n.prototype[t] = function() {
                        var n = e.values(this._views),
                            i = [n].concat(e.toArray(arguments));
                        return e[t].apply(e, i)
                    }
                }), n
            }(t, e), t.ChildViewContainer.VERSION = "0.1.4", t.ChildViewContainer.noConflict = function() {
                return t.ChildViewContainer = n, this
            }, t.ChildViewContainer
        }(e, n),
        function(t, e) {
            var n = t.Wreqr,
                i = t.Wreqr = {};
            return t.Wreqr.VERSION = "1.3.1", t.Wreqr.noConflict = function() {
                return t.Wreqr = n, this
            }, i.Handlers = function(t, e) {
                var n = function(t) {
                    this.options = t, this._wreqrHandlers = {}, e.isFunction(this.initialize) && this.initialize(t)
                };
                return n.extend = t.Model.extend, e.extend(n.prototype, t.Events, {
                    setHandlers: function(t) {
                        e.each(t, function(t, n) {
                            var i = null;
                            e.isObject(t) && !e.isFunction(t) && (i = t.context, t = t.callback), this.setHandler(n, t, i)
                        }, this)
                    },
                    setHandler: function(t, e, n) {
                        var i = {
                            callback: e,
                            context: n
                        };
                        this._wreqrHandlers[t] = i, this.trigger("handler:add", t, e, n)
                    },
                    hasHandler: function(t) {
                        return !!this._wreqrHandlers[t]
                    },
                    getHandler: function(t) {
                        var e = this._wreqrHandlers[t];
                        if (e) return function() {
                            var t = Array.prototype.slice.apply(arguments);
                            return e.callback.apply(e.context, t)
                        }
                    },
                    removeHandler: function(t) {
                        delete this._wreqrHandlers[t]
                    },
                    removeAllHandlers: function() {
                        this._wreqrHandlers = {}
                    }
                }), n
            }(t, e), i.CommandStorage = function() {
                var n = function(t) {
                    this.options = t, this._commands = {}, e.isFunction(this.initialize) && this.initialize(t)
                };
                return e.extend(n.prototype, t.Events, {
                    getCommands: function(t) {
                        var e = this._commands[t];
                        return e || (e = {
                            command: t,
                            instances: []
                        }, this._commands[t] = e), e
                    },
                    addCommand: function(t, e) {
                        var n = this.getCommands(t);
                        n.instances.push(e)
                    },
                    clearCommands: function(t) {
                        var e = this.getCommands(t);
                        e.instances = []
                    }
                }), n
            }(), i.Commands = function(t) {
                return t.Handlers.extend({
                    storageType: t.CommandStorage,
                    constructor: function(e) {
                        this.options = e || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this);
                        var n = Array.prototype.slice.call(arguments);
                        t.Handlers.prototype.constructor.apply(this, n)
                    },
                    execute: function(t, e) {
                        t = arguments[0], e = Array.prototype.slice.call(arguments, 1), this.hasHandler(t) ? this.getHandler(t).apply(this, e) : this.storage.addCommand(t, e)
                    },
                    _executeCommands: function(t, n, i) {
                        var r = this.storage.getCommands(t);
                        e.each(r.instances, function(t) {
                            n.apply(i, t)
                        }), this.storage.clearCommands(t)
                    },
                    _initializeStorage: function(t) {
                        var n, i = t.storageType || this.storageType;
                        n = e.isFunction(i) ? new i : i, this.storage = n
                    }
                })
            }(i), i.RequestResponse = function(t) {
                return t.Handlers.extend({
                    request: function() {
                        var t = arguments[0],
                            e = Array.prototype.slice.call(arguments, 1);
                        return this.hasHandler(t) ? this.getHandler(t).apply(this, e) : void 0
                    }
                })
            }(i), i.EventAggregator = function(t, e) {
                var n = function() {};
                return n.extend = t.Model.extend, e.extend(n.prototype, t.Events), n
            }(t, e), i.Channel = function() {
                var n = function(e) {
                    this.vent = new t.Wreqr.EventAggregator, this.reqres = new t.Wreqr.RequestResponse, this.commands = new t.Wreqr.Commands, this.channelName = e
                };
                return e.extend(n.prototype, {
                    reset: function() {
                        return this.vent.off(), this.vent.stopListening(), this.reqres.removeAllHandlers(), this.commands.removeAllHandlers(), this
                    },
                    connectEvents: function(t, e) {
                        return this._connect("vent", t, e), this
                    },
                    connectCommands: function(t, e) {
                        return this._connect("commands", t, e), this
                    },
                    connectRequests: function(t, e) {
                        return this._connect("reqres", t, e), this
                    },
                    _connect: function(t, n, i) {
                        if (n) {
                            i = i || this;
                            var r = "vent" === t ? "on" : "setHandler";
                            e.each(n, function(n, s) {
                                this[t][r](s, e.bind(n, i))
                            }, this)
                        }
                    }
                }), n
            }(i), i.radio = function(t) {
                var n = function() {
                    this._channels = {}, this.vent = {}, this.commands = {}, this.reqres = {}, this._proxyMethods()
                };
                e.extend(n.prototype, {
                    channel: function(t) {
                        if (!t) throw new Error("Channel must receive a name");
                        return this._getChannel(t)
                    },
                    _getChannel: function(e) {
                        var n = this._channels[e];
                        return n || (n = new t.Channel(e), this._channels[e] = n), n
                    },
                    _proxyMethods: function() {
                        e.each(["vent", "commands", "reqres"], function(t) {
                            e.each(i[t], function(e) {
                                this[t][e] = r(this, t, e)
                            }, this)
                        }, this)
                    }
                });
                var i = {
                        vent: ["on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce"],
                        commands: ["execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"],
                        reqres: ["request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"]
                    },
                    r = function(t, e, n) {
                        return function(i) {
                            var r = t._getChannel(i)[e],
                                s = Array.prototype.slice.call(arguments, 1);
                            return r[n].apply(r, s)
                        }
                    };
                return new n
            }(i), t.Wreqr
        }(e, n);
        var r = {};
        e.Marionette = r, r.$ = e.$;
        var s = Array.prototype.slice;
        return r.extend = e.Model.extend, r.getOption = function(t, e) {
                if (t && e) {
                    var n;
                    return n = t.options && e in t.options && void 0 !== t.options[e] ? t.options[e] : t[e]
                }
            }, r.normalizeMethods = function(t) {
                var e, i = {};
                return n.each(t, function(t, r) {
                    e = t, n.isFunction(e) || (e = this[e]), e && (i[r] = e)
                }, this), i
            }, r.normalizeUIKeys = function(t, e) {
                return "undefined" != typeof t ? (n.each(n.keys(t), function(n) {
                    var i = /@ui.[a-zA-Z_$0-9]*/g;
                    n.match(i) && (t[n.replace(i, function(t) {
                        return e[t.slice(4)]
                    })] = t[n], delete t[n])
                }), t) : void 0
            }, r.actAsCollection = function(t, e) {
                var i = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
                n.each(i, function(i) {
                    t[i] = function() {
                        var t = n.values(n.result(this, e)),
                            r = [t].concat(n.toArray(arguments));
                        return n[i].apply(n, r)
                    }
                })
            }, r.triggerMethod = function() {
                function t(t, e, n) {
                    return n.toUpperCase()
                }
                var e = /(^|:)(\w)/gi,
                    i = function(i) {
                        var r = "on" + i.replace(e, t),
                            s = this[r];
                        return n.isFunction(this.trigger) && this.trigger.apply(this, arguments), n.isFunction(s) ? s.apply(this, n.tail(arguments)) : void 0
                    };
                return i
            }(), r.MonitorDOMRefresh = function(t) {
                function e(t) {
                    t._isShown = !0, r(t)
                }

                function i(t) {
                    t._isRendered = !0, r(t)
                }

                function r(t) {
                    t._isShown && t._isRendered && s(t) && n.isFunction(t.triggerMethod) && t.triggerMethod("dom:refresh")
                }

                function s(e) {
                    return t.contains(e.el)
                }
                return function(t) {
                    t.listenTo(t, "show", function() {
                        e(t)
                    }), t.listenTo(t, "render", function() {
                        i(t)
                    })
                }
            }(document.documentElement),
            function(t) {
                function e(t, e, r, s) {
                    var o = s.split(/\s+/);
                    n.each(o, function(n) {
                        var s = t[n];
                        s || i("Method '" + n + "' was configured as an event handler, but does not exist."), t.listenTo(e, r, s)
                    })
                }

                function r(t, e, n, i) {
                    t.listenTo(e, n, i)
                }

                function s(t, e, i, r) {
                    var s = r.split(/\s+/);
                    n.each(s, function(n) {
                        var r = t[n];
                        t.stopListening(e, i, r)
                    })
                }

                function o(t, e, n, i) {
                    t.stopListening(e, n, i)
                }

                function a(t, e, i, r, s) {
                    e && i && (n.isFunction(i) && (i = i.call(t)), n.each(i, function(i, o) {
                        n.isFunction(i) ? r(t, e, o, i) : s(t, e, o, i)
                    }))
                }
                t.bindEntityEvents = function(t, n, i) {
                    a(t, n, i, r, e)
                }, t.unbindEntityEvents = function(t, e, n) {
                    a(t, e, n, o, s)
                }
            }(r), r.Callbacks = function() {
                this._deferred = r.$.Deferred(), this._callbacks = []
            }, n.extend(r.Callbacks.prototype, {
                add: function(t, e) {
                    this._callbacks.push({
                        cb: t,
                        ctx: e
                    }), this._deferred.done(function(n, i) {
                        e && (n = e), t.call(n, i)
                    })
                },
                run: function(t, e) {
                    this._deferred.resolve(e, t)
                },
                reset: function() {
                    var t = this._callbacks;
                    this._deferred = r.$.Deferred(), this._callbacks = [], n.each(t, function(t) {
                        this.add(t.cb, t.ctx)
                    }, this)
                }
            }), r.Controller = function(t) {
                this.triggerMethod = r.triggerMethod, this.options = t || {}, n.isFunction(this.initialize) && this.initialize(this.options)
            }, r.Controller.extend = r.extend, n.extend(r.Controller.prototype, e.Events, {
                close: function() {
                    this.stopListening();
                    var t = Array.prototype.slice.call(arguments);
                    this.triggerMethod.apply(this, ["close"].concat(t)), this.off()
                }
            }), r.Region = function(t) {
                if (this.options = t || {}, this.el = r.getOption(this, "el"), this.el || i("An 'el' must be specified for a region.", "NoElError"), this.initialize) {
                    var e = Array.prototype.slice.apply(arguments);
                    this.initialize.apply(this, e)
                }
            }, n.extend(r.Region, {
                buildRegion: function(t, e) {
                    var r = n.isString(t),
                        s = n.isString(t.selector),
                        o = n.isUndefined(t.regionType),
                        a = n.isFunction(t);
                    a || r || s || i("Region must be specified as a Region type, a selector string or an object with selector property");
                    var l, c;
                    r && (l = t), t.selector && (l = t.selector, delete t.selector), a && (c = t), !a && o && (c = e), t.regionType && (c = t.regionType, delete t.regionType), (r || a) && (t = {}), t.el = l;
                    var u = new c(t);
                    return t.parentEl && (u.getEl = function(e) {
                        var i = t.parentEl;
                        return n.isFunction(i) && (i = i()), i.find(e)
                    }), u
                }
            }), n.extend(r.Region.prototype, e.Events, {
                show: function(t, e) {
                    this.ensureEl();
                    var i = e || {},
                        s = t.isClosed || n.isUndefined(t.$el),
                        o = t !== this.currentView,
                        a = !!i.preventClose,
                        l = !a && o;
                    return l && this.close(), t.render(), r.triggerMethod.call(this, "before:show", t), n.isFunction(t.triggerMethod) ? t.triggerMethod("before:show") : r.triggerMethod.call(t, "before:show"), (o || s) && this.open(t), this.currentView = t, r.triggerMethod.call(this, "show", t), n.isFunction(t.triggerMethod) ? t.triggerMethod("show") : r.triggerMethod.call(t, "show"), this
                },
                ensureEl: function() {
                    this.$el && 0 !== this.$el.length || (this.$el = this.getEl(this.el))
                },
                getEl: function(t) {
                    return r.$(t)
                },
                open: function(t) {
                    this.$el.empty().append(t.el)
                },
                close: function() {
                    var t = this.currentView;
                    t && !t.isClosed && (t.close ? t.close() : t.remove && t.remove(), r.triggerMethod.call(this, "close", t), delete this.currentView)
                },
                attachView: function(t) {
                    this.currentView = t
                },
                reset: function() {
                    this.close(), delete this.$el
                }
            }), r.Region.extend = r.extend, r.RegionManager = function(t) {
                var e = t.Controller.extend({
                    constructor: function(e) {
                        this._regions = {}, t.Controller.prototype.constructor.call(this, e)
                    },
                    addRegions: function(t, e) {
                        var i = {};
                        return n.each(t, function(t, r) {
                            n.isString(t) && (t = {
                                selector: t
                            }), t.selector && (t = n.defaults({}, t, e));
                            var s = this.addRegion(r, t);
                            i[r] = s
                        }, this), i
                    },
                    addRegion: function(e, i) {
                        var r, s = n.isObject(i),
                            o = n.isString(i),
                            a = !!i.selector;
                        return r = o || s && a ? t.Region.buildRegion(i, t.Region) : n.isFunction(i) ? t.Region.buildRegion(i, t.Region) : i, this._store(e, r), this.triggerMethod("region:add", e, r), r
                    },
                    get: function(t) {
                        return this._regions[t]
                    },
                    removeRegion: function(t) {
                        var e = this._regions[t];
                        this._remove(t, e)
                    },
                    removeRegions: function() {
                        n.each(this._regions, function(t, e) {
                            this._remove(e, t)
                        }, this)
                    },
                    closeRegions: function() {
                        n.each(this._regions, function(t) {
                            t.close()
                        }, this)
                    },
                    close: function() {
                        this.removeRegions(), t.Controller.prototype.close.apply(this, arguments)
                    },
                    _store: function(t, e) {
                        this._regions[t] = e, this._setLength()
                    },
                    _remove: function(t, e) {
                        e.close(), e.stopListening(), delete this._regions[t], this._setLength(), this.triggerMethod("region:remove", t, e)
                    },
                    _setLength: function() {
                        this.length = n.size(this._regions)
                    }
                });
                return t.actAsCollection(e.prototype, "_regions"), e
            }(r), r.TemplateCache = function(t) {
                this.templateId = t
            }, n.extend(r.TemplateCache, {
                templateCaches: {},
                get: function(t) {
                    var e = this.templateCaches[t];
                    return e || (e = new r.TemplateCache(t), this.templateCaches[t] = e), e.load()
                },
                clear: function() {
                    var t, e = s.call(arguments),
                        n = e.length;
                    if (n > 0)
                        for (t = 0; n > t; t++) delete this.templateCaches[e[t]];
                    else this.templateCaches = {}
                }
            }), n.extend(r.TemplateCache.prototype, {
                load: function() {
                    if (this.compiledTemplate) return this.compiledTemplate;
                    var t = this.loadTemplate(this.templateId);
                    return this.compiledTemplate = this.compileTemplate(t), this.compiledTemplate
                },
                loadTemplate: function(t) {
                    var e = r.$(t).html();
                    return e && 0 !== e.length || i("Could not find template: '" + t + "'", "NoTemplateError"), e
                },
                compileTemplate: function(t) {
                    return n.template(t)
                }
            }), r.Renderer = {
                render: function(t, e) {
                    t || i("Cannot render the template since it's false, null or undefined.", "TemplateNotFoundError");
                    var n;
                    return (n = "function" == typeof t ? t : r.TemplateCache.get(t))(e)
                }
            }, r.View = e.View.extend({
                constructor: function(t) {
                    n.bindAll(this, "render"), this.options = n.extend({}, n.result(this, "options"), n.isFunction(t) ? t.call(this) : t), this.events = this.normalizeUIKeys(n.result(this, "events")), n.isObject(this.behaviors) && new r.Behaviors(this), e.View.prototype.constructor.apply(this, arguments), r.MonitorDOMRefresh(this), this.listenTo(this, "show", this.onShowCalled)
                },
                triggerMethod: r.triggerMethod,
                normalizeMethods: r.normalizeMethods,
                getTemplate: function() {
                    return r.getOption(this, "template")
                },
                mixinTemplateHelpers: function(t) {
                    t = t || {};
                    var e = r.getOption(this, "templateHelpers");
                    return n.isFunction(e) && (e = e.call(this)), n.extend(t, e)
                },
                normalizeUIKeys: function(t) {
                    var e = n.result(this, "ui");
                    return r.normalizeUIKeys(t, e)
                },
                configureTriggers: function() {
                    if (this.triggers) {
                        var t = {},
                            e = this.normalizeUIKeys(n.result(this, "triggers"));
                        return n.each(e, function(e, i) {
                            var r = n.isObject(e),
                                s = r ? e.event : e;
                            t[i] = function(t) {
                                if (t) {
                                    var n = t.preventDefault,
                                        i = t.stopPropagation,
                                        o = r ? e.preventDefault : n,
                                        a = r ? e.stopPropagation : i;
                                    o && n && n.apply(t), a && i && i.apply(t)
                                }
                                var l = {
                                    view: this,
                                    model: this.model,
                                    collection: this.collection
                                };
                                this.triggerMethod(s, l)
                            }
                        }, this), t
                    }
                },
                delegateEvents: function(t) {
                    this._delegateDOMEvents(t), r.bindEntityEvents(this, this.model, r.getOption(this, "modelEvents")), r.bindEntityEvents(this, this.collection, r.getOption(this, "collectionEvents"))
                },
                _delegateDOMEvents: function(t) {
                    t = t || this.events, n.isFunction(t) && (t = t.call(this));
                    var i = {},
                        r = n.result(this, "behaviorEvents") || {},
                        s = this.configureTriggers();
                    n.extend(i, r, t, s), e.View.prototype.delegateEvents.call(this, i)
                },
                undelegateEvents: function() {
                    var t = Array.prototype.slice.call(arguments);
                    e.View.prototype.undelegateEvents.apply(this, t), r.unbindEntityEvents(this, this.model, r.getOption(this, "modelEvents")), r.unbindEntityEvents(this, this.collection, r.getOption(this, "collectionEvents"))
                },
                onShowCalled: function() {},
                close: function() {
                    if (!this.isClosed) {
                        var t = Array.prototype.slice.call(arguments),
                            e = this.triggerMethod.apply(this, ["before:close"].concat(t));
                        e !== !1 && (this.isClosed = !0, this.triggerMethod.apply(this, ["close"].concat(t)), this.unbindUIElements(), this.remove())
                    }
                },
                bindUIElements: function() {
                    if (this.ui) {
                        this._uiBindings || (this._uiBindings = this.ui);
                        var t = n.result(this, "_uiBindings");
                        this.ui = {}, n.each(n.keys(t), function(e) {
                            var n = t[e];
                            this.ui[e] = this.$(n)
                        }, this)
                    }
                },
                unbindUIElements: function() {
                    this.ui && this._uiBindings && (n.each(this.ui, function(t, e) {
                        delete this.ui[e]
                    }, this), this.ui = this._uiBindings, delete this._uiBindings)
                }
            }), r.ItemView = r.View.extend({
                    constructor: function() {
                        r.View.prototype.constructor.apply(this, arguments)
                    },
                    serializeData: function() {
                        var t = {};
                        return this.model ? t = this.model.toJSON() : this.collection && (t = {
                            items: this.collection.toJSON()
                        }), t
                    },
                    render: function() {
                            this.isClosed = !1, this.triggerMethod("before:render", this), this.triggerMethod("item:before:render", this);var t = this.serializeData();
t = this.mixinTemplateHelpers(t);
var e = this.getTemplate(),
    n = r.Renderer.render(e, t);
return this.$el.html(n), this.bindUIElements(), this.triggerMethod("render", this), this.triggerMethod("item:rendered", this), this
}, close: function() {
this.isClosed || (this.triggerMethod("item:before:close"), r.View.prototype.close.apply(this, arguments), this.triggerMethod("item:closed"))
}
}), r.CollectionView = r.View.extend({
    itemViewEventPrefix: "itemview",
    constructor: function() {
        this._initChildViewStorage(), r.View.prototype.constructor.apply(this, arguments), this._initialEvents(), this.initRenderBuffer()
    },
    initRenderBuffer: function() {
        this.elBuffer = document.createDocumentFragment(), this._bufferedChildren = []
    },
    startBuffering: function() {
        this.initRenderBuffer(), this.isBuffering = !0
    },
    endBuffering: function() {
        this.isBuffering = !1, this.appendBuffer(this, this.elBuffer), this._triggerShowBufferedChildren(), this.initRenderBuffer()
    },
    _triggerShowBufferedChildren: function() {
        this._isShown && (n.each(this._bufferedChildren, function(t) {
            r.triggerMethod.call(t, "show")
        }), this._bufferedChildren = [])
    },
    _initialEvents: function() {
        this.collection && (this.listenTo(this.collection, "add", this.addChildView), this.listenTo(this.collection, "remove", this.removeItemView), this.listenTo(this.collection, "reset", this.render))
    },
    addChildView: function(t) {
        this.closeEmptyView();
        var e = this.getItemView(t),
            n = this.collection.indexOf(t);
        this.addItemView(t, e, n)
    },
    onShowCalled: function() {
        this.children.each(function(t) {
            r.triggerMethod.call(t, "show")
        })
    },
    triggerBeforeRender: function() {
        this.triggerMethod("before:render", this), this.triggerMethod("collection:before:render", this)
    },
    triggerRendered: function() {
        this.triggerMethod("render", this), this.triggerMethod("collection:rendered", this)
    },
    render: function() {
        return this.isClosed = !1, this.triggerBeforeRender(), this._renderChildren(), this.triggerRendered(), this
    },
    _renderChildren: function() {
        this.startBuffering(), this.closeEmptyView(), this.closeChildren(), this.isEmpty(this.collection) ? this.showEmptyView() : this.showCollection(), this.endBuffering()
    },
    showCollection: function() {
        var t;
        this.collection.each(function(e, n) {
            t = this.getItemView(e), this.addItemView(e, t, n)
        }, this)
    },
    showEmptyView: function() {
        var t = this.getEmptyView();
        if (t && !this._showingEmptyView) {
            this._showingEmptyView = !0;
            var n = new e.Model;
            this.addItemView(n, t, 0)
        }
    },
    closeEmptyView: function() {
        this._showingEmptyView && (this.closeChildren(), delete this._showingEmptyView)
    },
    getEmptyView: function() {
        return r.getOption(this, "emptyView")
    },
    getItemView: function() {
        var t = r.getOption(this, "itemView");
        return t || i("An `itemView` must be specified", "NoItemViewError"), t
    },
    addItemView: function(t, e, i) {
        var s = r.getOption(this, "itemViewOptions");
        n.isFunction(s) && (s = s.call(this, t, i));
        var o = this.buildItemView(t, e, s);
        return this.addChildViewEventForwarding(o), this.triggerMethod("before:item:added", o), this.children.add(o), this.renderItemView(o, i), this._isShown && !this.isBuffering && r.triggerMethod.call(o, "show"), this.triggerMethod("after:item:added", o), o
    },
    addChildViewEventForwarding: function(t) {
        var e = r.getOption(this, "itemViewEventPrefix");
        this.listenTo(t, "all", function() {
            var i = s.call(arguments),
                o = i[0],
                a = this.normalizeMethods(this.getItemEvents());
            i[0] = e + ":" + o, i.splice(1, 0, t), "undefined" != typeof a && n.isFunction(a[o]) && a[o].apply(this, i), r.triggerMethod.apply(this, i)
        }, this)
    },
    getItemEvents: function() {
        return n.isFunction(this.itemEvents) ? this.itemEvents.call(this) : this.itemEvents
    },
    renderItemView: function(t, e) {
        t.render(), this.appendHtml(this, t, e)
    },
    buildItemView: function(t, e, i) {
        var r = n.extend({
            model: t
        }, i);
        return new e(r)
    },
    removeItemView: function(t) {
        var e = this.children.findByModel(t);
        this.removeChildView(e), this.checkEmpty()
    },
    removeChildView: function(t) {
        t && (t.close ? t.close() : t.remove && t.remove(), this.stopListening(t), this.children.remove(t)), this.triggerMethod("item:removed", t)
    },
    isEmpty: function() {
        return !this.collection || 0 === this.collection.length
    },
    checkEmpty: function() {
        this.isEmpty(this.collection) && this.showEmptyView()
    },
    appendBuffer: function(t, e) {
        t.$el.append(e)
    },
    appendHtml: function(t, e) {
        t.isBuffering ? (t.elBuffer.appendChild(e.el), t._bufferedChildren.push(e)) : t.$el.append(e.el)
    },
    _initChildViewStorage: function() {
        this.children = new e.ChildViewContainer
    },
    close: function() {
        this.isClosed || (this.triggerMethod("collection:before:close"), this.closeChildren(), this.triggerMethod("collection:closed"), r.View.prototype.close.apply(this, arguments))
    },
    closeChildren: function() {
        this.children.each(function(t) {
            this.removeChildView(t)
        }, this), this.checkEmpty()
    }
}), r.CompositeView = r.CollectionView.extend({
    constructor: function() {
        r.CollectionView.prototype.constructor.apply(this, arguments)
    },
    _initialEvents: function() {
        this.once("render", function() {
            this.collection && (this.listenTo(this.collection, "add", this.addChildView), this.listenTo(this.collection, "remove", this.removeItemView), this.listenTo(this.collection, "reset", this._renderChildren))
        })
    },
    getItemView: function() {
        var t = r.getOption(this, "itemView") || this.constructor;
        return t || i("An `itemView` must be specified", "NoItemViewError"), t
    },
    serializeData: function() {
        var t = {};
        return this.model && (t = this.model.toJSON()), t
    },
    render: function() {
        this.isRendered = !0, this.isClosed = !1, this.resetItemViewContainer(), this.triggerBeforeRender();
        var t = this.renderModel();
        return this.$el.html(t), this.bindUIElements(), this.triggerMethod("composite:model:rendered"), this._renderChildren(), this.triggerMethod("composite:rendered"), this.triggerRendered(), this
    },
    _renderChildren: function() {
        this.isRendered && (this.triggerMethod("composite:collection:before:render"), r.CollectionView.prototype._renderChildren.call(this), this.triggerMethod("composite:collection:rendered"))
    },
    renderModel: function() {
        var t = {};
        t = this.serializeData(), t = this.mixinTemplateHelpers(t);
        var e = this.getTemplate();
        return r.Renderer.render(e, t)
    },
    appendBuffer: function(t, e) {
        var n = this.getItemViewContainer(t);
        n.append(e)
    },
    appendHtml: function(t, e) {
        if (t.isBuffering) t.elBuffer.appendChild(e.el), t._bufferedChildren.push(e);
        else {
            var n = this.getItemViewContainer(t);
            n.append(e.el)
        }
    },
    getItemViewContainer: function(t) {
        if ("$itemViewContainer" in t) return t.$itemViewContainer;
        var e, s = r.getOption(t, "itemViewContainer");
        if (s) {
            var o = n.isFunction(s) ? s.call(t) : s;
            e = "@" === o.charAt(0) && t.ui ? t.ui[o.substr(4)] : t.$(o), e.length <= 0 && i("The specified `itemViewContainer` was not found: " + t.itemViewContainer, "ItemViewContainerMissingError")
        } else e = t.$el;
        return t.$itemViewContainer = e, e
    },
    resetItemViewContainer: function() {
        this.$itemViewContainer && delete this.$itemViewContainer
    }
}), r.Layout = r.ItemView.extend({
    regionType: r.Region,
    constructor: function(t) {
        t = t || {}, this._firstRender = !0, this._initializeRegions(t), r.ItemView.prototype.constructor.call(this, t)
    },
    render: function() {
        return this.isClosed && this._initializeRegions(), this._firstRender ? this._firstRender = !1 : this.isClosed || this._reInitializeRegions(), r.ItemView.prototype.render.apply(this, arguments)
    },
    close: function() {
        this.isClosed || (this.regionManager.close(), r.ItemView.prototype.close.apply(this, arguments))
    },
    addRegion: function(t, e) {
        var n = {};
        return n[t] = e, this._buildRegions(n)[t]
    },
    addRegions: function(t) {
        return this.regions = n.extend({}, this.regions, t), this._buildRegions(t)
    },
    removeRegion: function(t) {
        return delete this.regions[t], this.regionManager.removeRegion(t)
    },
    getRegion: function(t) {
        return this.regionManager.get(t)
    },
    _buildRegions: function(t) {
        var e = this,
            n = {
                regionType: r.getOption(this, "regionType"),
                parentEl: function() {
                    return e.$el
                }
            };
        return this.regionManager.addRegions(t, n)
    },
    _initializeRegions: function(t) {
        var e;
        this._initRegionManager(), e = n.isFunction(this.regions) ? this.regions(t) : this.regions || {}, this.addRegions(e)
    },
    _reInitializeRegions: function() {
        this.regionManager.closeRegions(), this.regionManager.each(function(t) {
            t.reset()
        })
    },
    _initRegionManager: function() {
        this.regionManager = new r.RegionManager, this.listenTo(this.regionManager, "region:add", function(t, e) {
            this[t] = e, this.trigger("region:add", t, e)
        }), this.listenTo(this.regionManager, "region:remove", function(t, e) {
            delete this[t], this.trigger("region:remove", t, e)
        })
    }
}), r.Behavior = function(t, e) {
    function n(e, n) {
        this.view = n, this.defaults = t.result(this, "defaults") || {}, this.options = t.extend({}, this.defaults, e), this.$ = function() {
            return this.view.$.apply(this.view, arguments)
        }, this.initialize.apply(this, arguments)
    }
    return t.extend(n.prototype, e.Events, {
        initialize: function() {},
        close: function() {
            this.stopListening()
        },
        triggerMethod: r.triggerMethod
    }), n.extend = r.extend, n
}(n, e), r.Behaviors = function(t, e) {
    function n(t) {
        this.behaviors = n.parseBehaviors(t, e.result(t, "behaviors")), n.wrap(t, this.behaviors, ["bindUIElements", "unbindUIElements", "delegateEvents", "undelegateEvents", "behaviorEvents", "triggerMethod", "setElement", "close"])
    }
    var i = {
        setElement: function(t, n) {
            t.apply(this, e.tail(arguments, 2)), e.each(n, function(t) {
                t.$el = this.$el
            }, this)
        },
        close: function(t, n) {
            var i = e.tail(arguments, 2);
            t.apply(this, i), e.invoke(n, "close", i)
        },
        bindUIElements: function(t, n) {
            t.apply(this), e.invoke(n, t)
        },
        unbindUIElements: function(t, n) {
            t.apply(this), e.invoke(n, t)
        },
        triggerMethod: function(t, n) {
            var i = e.tail(arguments, 2);
            t.apply(this, i), e.each(n, function(e) {
                t.apply(e, i)
            })
        },
        delegateEvents: function(n, i) {
            var r = e.tail(arguments, 2);
            n.apply(this, r), e.each(i, function(e) {
                t.bindEntityEvents(e, this.model, t.getOption(e, "modelEvents")), t.bindEntityEvents(e, this.collection, t.getOption(e, "collectionEvents"))
            }, this)
        },
        undelegateEvents: function(n, i) {
            var r = e.tail(arguments, 2);
            n.apply(this, r), e.each(i, function(e) {
                t.unbindEntityEvents(e, this.model, t.getOption(e, "modelEvents")), t.unbindEntityEvents(e, this.collection, t.getOption(e, "collectionEvents"))
            }, this)
        },
        behaviorEvents: function(n, i) {
            var r = {},
                s = e.result(this, "ui");
            return e.each(i, function(n, i) {
                var o = {},
                    a = e.clone(e.result(n, "events")) || {},
                    l = e.result(n, "ui"),
                    c = e.extend({}, s, l);
                a = t.normalizeUIKeys(a, c), e.each(e.keys(a), function(t) {
                    var r = new Array(i + 2).join(" "),
                        s = t + r,
                        l = e.isFunction(a[t]) ? a[t] : n[a[t]];
                    o[s] = e.bind(l, n)
                }), r = e.extend(r, o)
            }), r
        }
    };
    return e.extend(n, {
        behaviorsLookup: function() {
            throw new Error("You must define where your behaviors are stored. See https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.behaviors.md#behaviorslookup")
        },
        getBehaviorClass: function(t, i) {
            return t.behaviorClass ? t.behaviorClass : e.isFunction(n.behaviorsLookup) ? n.behaviorsLookup.apply(this, arguments)[i] : n.behaviorsLookup[i]
        },
        parseBehaviors: function(t, i) {
            return e.map(i, function(e, i) {
                var r = n.getBehaviorClass(e, i);
                return new r(e, t)
            })
        },
        wrap: function(t, n, r) {
            e.each(r, function(r) {
                t[r] = e.partial(i[r], t[r], n)
            })
        }
    }), n
}(r, n), r.AppRouter = e.Router.extend({
    constructor: function(t) {
        e.Router.prototype.constructor.apply(this, arguments), this.options = t || {};
        var n = r.getOption(this, "appRoutes"),
            i = this._getController();
        this.processAppRoutes(i, n), this.on("route", this._processOnRoute, this)
    },
    appRoute: function(t, e) {
        var n = this._getController();
        this._addAppRoute(n, t, e)
    },
    _processOnRoute: function(t, e) {
        var i = n.invert(this.appRoutes)[t];
        n.isFunction(this.onRoute) && this.onRoute(t, i, e)
    },
    processAppRoutes: function(t, e) {
        if (e) {
            var i = n.keys(e).reverse();
            n.each(i, function(n) {
                this._addAppRoute(t, n, e[n])
            }, this)
        }
    },
    _getController: function() {
        return r.getOption(this, "controller")
    },
    _addAppRoute: function(t, e, r) {
        var s = t[r];
        s || i("Method '" + r + "' was not found on the controller"), this.route(e, r, n.bind(s, t))
    }
}), r.Application = function(t) {
    this._initRegionManager(), this._initCallbacks = new r.Callbacks, this.vent = new e.Wreqr.EventAggregator, this.commands = new e.Wreqr.Commands, this.reqres = new e.Wreqr.RequestResponse, this.submodules = {}, n.extend(this, t), this.triggerMethod = r.triggerMethod
}, n.extend(r.Application.prototype, e.Events, {
    execute: function() {
        this.commands.execute.apply(this.commands, arguments)
    },
    request: function() {
        return this.reqres.request.apply(this.reqres, arguments)
    },
    addInitializer: function(t) {
        this._initCallbacks.add(t)
    },
    start: function(t) {
        this.triggerMethod("initialize:before", t), this._initCallbacks.run(t, this), this.triggerMethod("initialize:after", t), this.triggerMethod("start", t)
    },
    addRegions: function(t) {
        return this._regionManager.addRegions(t)
    },
    closeRegions: function() {
        this._regionManager.closeRegions()
    },
    removeRegion: function(t) {
        this._regionManager.removeRegion(t)
    },
    getRegion: function(t) {
        return this._regionManager.get(t)
    },
    module: function(t, e) {
        var n = r.Module.getClass(e),
            i = s.call(arguments);
        return i.unshift(this), n.create.apply(n, i)
    },
    _initRegionManager: function() {
        this._regionManager = new r.RegionManager, this.listenTo(this._regionManager, "region:add", function(t, e) {
            this[t] = e
        }), this.listenTo(this._regionManager, "region:remove", function(t) {
            delete this[t]
        })
    }
}), r.Application.extend = r.extend, r.Module = function(t, e, i) {
    this.moduleName = t, this.options = n.extend({}, this.options, i), this.initialize = i.initialize || this.initialize, this.submodules = {}, this._setupInitializersAndFinalizers(), this.app = e, this.startWithParent = !0, this.triggerMethod = r.triggerMethod, n.isFunction(this.initialize) && this.initialize(this.options, t, e)
}, r.Module.extend = r.extend, n.extend(r.Module.prototype, e.Events, {
    initialize: function() {},
    addInitializer: function(t) {
        this._initializerCallbacks.add(t)
    },
    addFinalizer: function(t) {
        this._finalizerCallbacks.add(t)
    },
    start: function(t) {
        this._isInitialized || (n.each(this.submodules, function(e) {
            e.startWithParent && e.start(t)
        }), this.triggerMethod("before:start", t), this._initializerCallbacks.run(t, this), this._isInitialized = !0, this.triggerMethod("start", t))
    },
    stop: function() {
        this._isInitialized && (this._isInitialized = !1, r.triggerMethod.call(this, "before:stop"), n.each(this.submodules, function(t) {
            t.stop()
        }), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), r.triggerMethod.call(this, "stop"))
    },
    addDefinition: function(t, e) {
        this._runModuleDefinition(t, e)
    },
    _runModuleDefinition: function(t, i) {
        if (t) {
            var s = n.flatten([this, this.app, e, r, r.$, n, i]);
            t.apply(this, s)
        }
    },
    _setupInitializersAndFinalizers: function() {
        this._initializerCallbacks = new r.Callbacks, this._finalizerCallbacks = new r.Callbacks
    }
}), n.extend(r.Module, {
    create: function(t, e, i) {
        var r = t,
            o = s.call(arguments);
        o.splice(0, 3), e = e.split(".");
        var a = e.length,
            l = [];
        return l[a - 1] = i, n.each(e, function(e, n) {
            var s = r;
            r = this._getModule(s, e, t, i), this._addModuleDefinition(s, r, l[n], o)
        }, this), r
    },
    _getModule: function(t, e, i, r) {
        var s = n.extend({}, r),
            o = this.getClass(r),
            a = t[e];
        return a || (a = new o(e, i, s), t[e] = a, t.submodules[e] = a), a
    },
    getClass: function(t) {
        var e = r.Module;
        return t ? t.prototype instanceof e ? t : t.moduleClass || e : e
    },
    _addModuleDefinition: function(t, e, n, i) {
        var r = this._getDefine(n),
            s = this._getStartWithParent(n, e);
        r && e.addDefinition(r, i), this._addStartWithParent(t, e, s)
    },
    _getStartWithParent: function(t, e) {
        var i;
        return n.isFunction(t) && t.prototype instanceof r.Module ? (i = e.constructor.prototype.startWithParent, n.isUndefined(i) ? !0 : i) : n.isObject(t) ? (i = t.startWithParent, n.isUndefined(i) ? !0 : i) : !0
    },
    _getDefine: function(t) {
        return !n.isFunction(t) || t.prototype instanceof r.Module ? n.isObject(t) ? t.define : null : t
    },
    _addStartWithParent: function(t, e, n) {
        e.startWithParent = e.startWithParent && n, e.startWithParent && !e.startWithParentIsConfigured && (e.startWithParentIsConfigured = !0, t.addInitializer(function(t) {
            e.startWithParent && e.start(t)
        }))
    }
}), r
}(this, Backbone, _);
! function(t, e) {
    "object" == typeof exports ? module.exports = e(require("underscore"), require("backbone")) : "function" == typeof define && define.amd ? define(["underscore", "backbone"], e) : t.Backbone.Obscura = e(t._, t.Backbone)
}(this, function(t, e) {
    function n(n) {
        return {
            underscore: t,
            backbone: e
        }[n]
    }
    var i = function() {
        function t(e) {
            var n = t.cache[e];
            if (!n) {
                var i = {};
                n = t.cache[e] = {
                    id: e,
                    exports: i
                }, t.modules[e].call(i, n, i)
            }
            return n.exports
        }
        return t.cache = [], t.modules = [function(e) {
            function i(t, e) {
                this._superset = t, this._filtered = new o(t, e), this._sorted = new a(this._filtered, e), this._paginated = new l(this._sorted, e), c(this._paginated, this), u.call(this, this._filtered, p), u.call(this, this._sorted, m), u.call(this, this._paginated, g)
            }
            var r = n("underscore"),
                s = n("backbone"),
                o = t(2),
                a = t(5),
                l = t(4),
                c = t(1),
                u = t(7),
                d = {
                    superset: function() {
                        return this._superset
                    },
                    getFilteredLength: function() {
                        return this._filtered.length
                    },
                    removeTransforms: function() {
                        return this._filtered.resetFilters(), this._sorted.removeSort(), this._paginated.removePagination(), this
                    },
                    destroy: function() {
                        this.stopListening(), this._filtered.destroy(), this._sorted.destroy(), this._paginated.destroy(), this.length = 0, this.trigger("obscura:destroy")
                    }
                },
                h = ["filterBy", "removeFilter", "resetFilters", "refilter", "hasFilter", "getFilters"],
                p = ["filtered:add", "filtered:remove", "filtered:reset"],
                f = ["setSort", "reverseSort", "removeSort"],
                m = ["sorted:add", "sorted:remove"],
                v = ["setPerPage", "setPage", "getPerPage", "getNumPages", "getPage", "hasNextPage", "hasPrevPage", "nextPage", "prevPage", "movePage", "removePagination", "firstPage", "lastPage"],
                g = ["paginated:change:perPage", "paginated:change:page", "paginated:change:numPages"];
            r.each(h, function(t) {
                d[t] = function() {
                    var e = o.prototype[t].apply(this._filtered, arguments);
                    return e === this._filtered ? this : e
                }
            }), r.each(v, function(t) {
                d[t] = function() {
                    var e = l.prototype[t].apply(this._paginated, arguments);
                    return e === this._paginated ? this : e
                }
            }), r.each(f, function(t) {
                d[t] = function() {
                    var e = a.prototype[t].apply(this._sorted, arguments);
                    return e === this._sorted ? this : e
                }
            }), r.extend(i.prototype, d, s.Events), i.FilteredCollection = o, i.SortedCollection = a, i.PaginatedCollection = l, e.exports = i
        }, function(t) {
            function e(t, e) {
                function n() {
                    e.length = t.length
                }

                function a(n) {
                    var r = i.toArray(arguments),
                        s = "change" === n || "change:" === n.slice(0, 7);
                    "reset" === n && (e.models = t.models), i.contains(o, n) ? (i.contains(["add", "remove", "destroy"], n) ? r[2] = e : i.contains(["reset", "sort"], n) && (r[1] = e), e.trigger.apply(this, r)) : s && e.contains(r[1]) && e.trigger.apply(this, r)
                }
                var l = {};
                return i.each(i.functions(r.Collection.prototype), function(e) {
                    i.contains(s, e) || (l[e] = function() {
                        return t[e].apply(t, arguments)
                    })
                }), i.extend(e, r.Events, l), e.listenTo(t, "all", n), e.listenTo(t, "all", a), e.models = t.models, n(), e
            }
            var i = n("underscore"),
                r = n("backbone"),
                s = ["_onModelEvent", "_prepareModel", "_removeReference", "_reset", "add", "initialize", "sync", "remove", "reset", "set", "push", "pop", "unshift", "shift", "sort", "parse", "fetch", "create", "model", "off", "on", "listenTo", "listenToOnce", "bind", "trigger", "once", "stopListening"],
                o = ["add", "remove", "reset", "sort", "destroy"];
            t.exports = e
        }, function(e) {
            function i() {
                this._filterResultCache = {}
            }

            function r(t) {
                for (var e in this._filterResultCache) this._filterResultCache.hasOwnProperty(e) && delete this._filterResultCache[e][t]
            }

            function s(t, e) {
                this._filters[t] && r.call(this, t), this._filters[t] = e, this.trigger("filtered:add", t)
            }

            function o(t) {
                delete this._filters[t], r.call(this, t), this.trigger("filtered:remove", t)
            }

            function a(t) {
                this._filterResultCache[t.cid] || (this._filterResultCache[t.cid] = {});
                var e = this._filterResultCache[t.cid];
                for (var n in this._filters)
                    if (this._filters.hasOwnProperty(n) && (e.hasOwnProperty(n) || (e[n] = this._filters[n].fn(t)), !e[n])) return !1;
                return !0
            }

            function l() {
                var t = [];
                this._superset && (t = this._superset.filter(f.bind(a, this))), this._collection.reset(t), this.length = this._collection.length
            }

            function c(t) {
                if (this._filterResultCache[t.cid] = {}, a.call(this, t)) {
                    if (!this._collection.get(t.cid)) {
                        for (var e = this.superset().indexOf(t), n = null, i = e - 1; i >= 0; i -= 1)
                            if (this.contains(this.superset().at(i))) {
                                n = this.indexOf(this.superset().at(i)) + 1;
                                break
                            }
                        n = n || 0, this._collection.add(t, {
                            at: n
                        })
                    }
                } else this._collection.get(t.cid) && this._collection.remove(t);
                this.length = this._collection.length
            }

            function u(t) {
                this._filterResultCache[t.cid] = {}, a.call(this, t) || this._collection.get(t.cid) && this._collection.remove(t)
            }

            function d(t) {
                "change:" === t.slice(0, 7) && u.call(this, arguments[1])
            }

            function h(t) {
                this.contains(t) && this._collection.remove(t), this.length = this._collection.length
            }

            function p(t) {
                this._superset = t, this._collection = new m.Collection(t.toArray()), v(this._collection, this), this.resetFilters(), this.listenTo(this._superset, "reset sort", l), this.listenTo(this._superset, "add change", c), this.listenTo(this._superset, "remove", h), this.listenTo(this._superset, "all", d)
            }
            var f = n("underscore"),
                m = n("backbone"),
                v = t(1),
                g = t(3),
                y = {
                    defaultFilterName: "__default",
                    filterBy: function(t, e) {
                        return e || (e = t, t = this.defaultFilterName), s.call(this, t, g(e)), l.call(this), this
                    },
                    removeFilter: function(t) {
                        return t || (t = this.defaultFilterName), o.call(this, t), l.call(this), this
                    },
                    resetFilters: function() {
                        return this._filters = {}, i.call(this), this.trigger("filtered:reset"), l.call(this), this
                    },
                    superset: function() {
                        return this._superset
                    },
                    refilter: function(t) {
                        return "object" == typeof t && t.cid ? c.call(this, t) : (i.call(this), l.call(this)), this
                    },
                    getFilters: function() {
                        return f.keys(this._filters)
                    },
                    hasFilter: function(t) {
                        return f.contains(this.getFilters(), t)
                    },
                    destroy: function() {
                        this.stopListening(), this._collection.reset([]), this._superset = this._collection, this.length = 0, this.trigger("filtered:destroy")
                    }
                };
            f.extend(p.prototype, y, m.Events), e.exports = p
        }, function(t) {
            function e(t, e) {
                return function(n) {
                    return n.get(t) === e
                }
            }

            function i(t, e) {
                return function(n) {
                    return e(n.get(t))
                }
            }

            function r(t, e) {
                return a.isArray(e) || (e = null), {
                    fn: t,
                    keys: e
                }
            }

            function s(t) {
                var n = a.keys(t),
                    s = a.map(n, function(n) {
                        var r = t[n];
                        return a.isFunction(r) ? i(n, r) : e(n, r)
                    }),
                    o = function(t) {
                        for (var e = 0; e < s.length; e++)
                            if (!s[e](t)) return !1;
                        return !0
                    };
                return r(o, n)
            }

            function o(t, e) {
                return a.isFunction(t) ? r(t, e) : a.isObject(t) ? s(t) : void 0
            }
            var a = n("underscore");
            t.exports = o
        }, function(e) {
            function i() {
                var t = this.getPage() * this.getPerPage(),
                    e = t + this.getPerPage();
                return [t, e]
            }

            function r() {
                var t = i.call(this);
                this._collection.reset(this.superset().slice(t[0], t[1]))
            }

            function s() {
                var t = (this._totalPages, this.superset().length),
                    e = this.getPerPage(),
                    n = t % e === 0 ? t / e : Math.floor(t / e) + 1,
                    i = this._totalPages !== n;
                return this._totalPages = n, i && this.trigger("paginated:change:numPages", {
                    numPages: n
                }), this.getPage() >= n ? (this.setPage(n - 1), !0) : void 0
            }

            function o() {
                s.call(this) || r.call(this)
            }

            function a(t, e) {
                for (var n = u.max([t.length, e.length]), i = 0, r = 0; n > i; i += 1, r += 1)
                    if (t[i] !== e[r])
                        if (e[i - 1] === t[i]) r -= 1;
                        else {
                            if (e[i + 1] !== t[i]) return t[i];
                            r += 1
                        }
            }

            function l() {
                if (!s.call(this)) {
                    var t = i.call(this),
                        e = t[0],
                        n = t[1],
                        r = a(this.superset().slice(e, n), this._collection.toArray()),
                        o = a(this._collection.toArray(), this.superset().slice(e, n));
                    o && this._collection.remove(o), r && this._collection.add(r, {
                        at: this.superset().indexOf(r) - e
                    })
                }
            }

            function c(t, e) {
                this._superset = t, this._collection = new d.Collection(t.toArray()), this._page = 0, this.setPerPage(e && e.perPage ? e.perPage : null), h(this._collection, this), this.listenTo(this._superset, "add remove", l), this.listenTo(this._superset, "reset sort", o)
            }
            var u = n("underscore"),
                d = n("backbone"),
                h = t(1),
                p = {
                    removePagination: function() {
                        return this.setPerPage(null), this
                    },
                    setPerPage: function(t) {
                        return this._perPage = t, o.call(this), this.setPage(0), this.trigger("paginated:change:perPage", {
                            perPage: t,
                            numPages: this.getNumPages()
                        }), this
                    },
                    setPage: function(t) {
                        var e = 0,
                            n = this.getNumPages() - 1;
                        return t = t > e ? t : e, t = n > t ? t : n, t = 0 > t ? 0 : t, this._page = t, r.call(this), this.trigger("paginated:change:page", {
                            page: t
                        }), this
                    },
                    getPerPage: function() {
                        return this._perPage || this.superset().length || 1
                    },
                    getNumPages: function() {
                        return this._totalPages
                    },
                    getPage: function() {
                        return this._page
                    },
                    hasNextPage: function() {
                        return this.getPage() < this.getNumPages() - 1
                    },
                    hasPrevPage: function() {
                        return this.getPage() > 0
                    },
                    nextPage: function() {
                        return this.movePage(1), this
                    },
                    prevPage: function() {
                        return this.movePage(-1), this
                    },
                    firstPage: function() {
                        this.setPage(0)
                    },
                    lastPage: function() {
                        this.setPage(this.getNumPages() - 1)
                    },
                    movePage: function(t) {
                        return this.setPage(this.getPage() + t), this
                    },
                    superset: function() {
                        return this._superset
                    },
                    destroy: function() {
                        this.stopListening(), this._collection.reset([]), this._superset = this._collection, this._page = 0, this._totalPages = 0, this.length = 0, this.trigger("paginated:destroy")
                    }
                };
            u.extend(c.prototype, p, d.Events), e.exports = c
        }, function(e) {
            function i(t) {
                return u.isFunction(t) ? t : function(e) {
                    return e.get(t)
                }
            }

            function r(t) {
                return this._comparator ? this._reverse ? p(this._collection.toArray(), t, i(this._comparator)) : u.sortedIndex(this._collection.toArray(), t, i(this._comparator)) : this._superset.indexOf(t)
            }

            function s(t) {
                var e = r.call(this, t);
                this._collection.add(t, {
                    at: e
                })
            }

            function o(t) {
                this.contains(t) && this._collection.remove(t)
            }

            function a(t) {
                this.contains(t) && this._collection.indexOf(t) !== r.call(this, t) && (this._collection.remove(t), s.call(this, t))
            }

            function l() {
                if (!this._comparator) return this._collection.reset(this._superset.toArray()), void 0;
                var t = this._superset.sortBy(this._comparator);
                this._collection.reset(this._reverse ? t.reverse() : t)
            }

            function c(t) {
                this._superset = t, this._reverse = !1, this._comparator = null, this._collection = new d.Collection(t.toArray()), h(this._collection, this), this.listenTo(this._superset, "add", s), this.listenTo(this._superset, "remove", o), this.listenTo(this._superset, "change", a), this.listenTo(this._superset, "reset", l)
            }
            var u = n("underscore"),
                d = n("backbone"),
                h = t(1),
                p = t(6),
                f = {
                    setSort: function(t, e) {
                        return this._reverse = "desc" === e ? !0 : !1, this._comparator = t, l.call(this), t ? this.trigger("sorted:add") : this.trigger("sorted:remove"), this
                    },
                    reverseSort: function() {
                        return this._reverse = !this._reverse, l.call(this), this
                    },
                    removeSort: function() {
                        return this.setSort(), this
                    },
                    superset: function() {
                        return this._superset
                    },
                    destroy: function() {
                        this.stopListening(), this._collection.reset([]), this._superset = this._collection, this.length = 0, this.trigger("sorted:destroy")
                    }
                };
            u.extend(c.prototype, f, d.Events), e.exports = c
        }, function(t) {
            function e(t) {
                return r.isFunction(t) ? t : function(e) {
                    return e[t]
                }
            }

            function i(t, n, i, s) {
                i = null == i ? r.identity : e(i);
                for (var o = i.call(s, n), a = 0, l = t.length; l > a;) {
                    var c = a + l >>> 1;
                    i.call(s, t[c]) < o ? l = c : a = c + 1
                }
                return a
            }
            var r = n("underscore");
            t.exports = i
        }, function(t) {
            function e(t, e) {
                i.each(e, function(e) {
                    this.listenTo(t, e, function() {
                        var t = i.toArray(arguments);
                        t.unshift(e), this.trigger.apply(this, t)
                    })
                }, this)
            }
            var i = n("underscore");
            t.exports = e
        }], t(0)
    }();
    return i
}), Backbone.Syphon = function(t, e, n) {
        var i = {};
        i.ignoredTypes = ["button", "submit", "reset", "fieldset"], i.serialize = function(t, i) {
            var o = {},
                c = a(i),
                u = r(t, c);
            return n.each(u, function(t) {
                var n = e(t),
                    i = s(n),
                    r = c.keyExtractors.get(i),
                    a = r(n),
                    u = c.inputReaders.get(i),
                    d = u(n),
                    h = c.keyAssignmentValidators.get(i);
                if (h(n, a, d)) {
                    var p = c.keySplitter(a);
                    o = l(o, p, d)
                }
            }), o
        }, i.deserialize = function(t, i, o) {
            var l = a(o),
                u = r(t, l),
                d = c(l, i);
            n.each(u, function(t) {
                var n = e(t),
                    i = s(n),
                    r = l.keyExtractors.get(i),
                    o = r(n),
                    a = l.inputWriters.get(i),
                    c = d[o];
                a(n, c)
            })
        };
        var r = function(t, i) {
                var r = o(t),
                    a = r.elements;
                return a = n.reject(a, function(t) {
                    var r, o = s(t),
                        a = i.keyExtractors.get(o),
                        l = a(e(t)),
                        c = n.include(i.ignoredTypes, o),
                        u = n.include(i.include, l),
                        d = n.include(i.exclude, l);
                    return r = u ? !1 : i.include ? !0 : d || c
                })
            },
            s = function(t) {
                var n, i = e(t),
                    r = i[0].tagName,
                    s = r;
                return "input" === r.toLowerCase() && (n = i.attr("type"), s = n ? n : "text"), s.toLowerCase()
            },
            o = function(t) {
                return n.isUndefined(t.$el) && "form" === t.tagName.toLowerCase() ? t : t.$el.is("form") ? t.el : t.$("form")[0]
            },
            a = function(t) {
                var e = n.clone(t) || {};
                return e.ignoredTypes = n.clone(i.ignoredTypes), e.inputReaders = e.inputReaders || i.InputReaders, e.inputWriters = e.inputWriters || i.InputWriters, e.keyExtractors = e.keyExtractors || i.KeyExtractors, e.keySplitter = e.keySplitter || i.KeySplitter, e.keyJoiner = e.keyJoiner || i.KeyJoiner, e.keyAssignmentValidators = e.keyAssignmentValidators || i.KeyAssignmentValidators, e
            },
            l = function(t, e, i) {
                if (!e) return t;
                var r = e.shift();
                return t[r] || (t[r] = n.isArray(r) ? [] : {}), 0 === e.length && (n.isArray(t[r]) ? t[r].push(i) : t[r] = i), e.length > 0 && l(t[r], e, i), t
            },
            c = function(t, e, i) {
                var r = {};
                return n.each(e, function(e, s) {
                    var o = {};
                    i && (s = t.keyJoiner(i, s)), n.isArray(e) ? (s += "[]", o[s] = e) : n.isObject(e) ? o = c(t, e, s) : o[s] = e, n.extend(r, o)
                }), r
            };
        return i
    }(Backbone, jQuery, _), Backbone.Syphon.TypeRegistry = function() {
        this.registeredTypes = {}
    }, Backbone.Syphon.TypeRegistry.extend = Backbone.Model.extend, _.extend(Backbone.Syphon.TypeRegistry.prototype, {
        get: function(t) {
            var e = this.registeredTypes[t];
            return e || (e = this.registeredTypes["default"]), e
        },
        register: function(t, e) {
            this.registeredTypes[t] = e
        },
        registerDefault: function(t) {
            this.registeredTypes["default"] = t
        },
        unregister: function(t) {
            this.registeredTypes[t] && delete this.registeredTypes[t]
        }
    }), Backbone.Syphon.KeyExtractorSet = Backbone.Syphon.TypeRegistry.extend(), Backbone.Syphon.KeyExtractors = new Backbone.Syphon.KeyExtractorSet, Backbone.Syphon.KeyExtractors.registerDefault(function(t) {
        return t.prop("name")
    }), Backbone.Syphon.InputReaderSet = Backbone.Syphon.TypeRegistry.extend(), Backbone.Syphon.InputReaders = new Backbone.Syphon.InputReaderSet, Backbone.Syphon.InputReaders.registerDefault(function(t) {
        return t.val()
    }), Backbone.Syphon.InputReaders.register("checkbox", function(t) {
        var e = t.prop("checked");
        return e
    }), Backbone.Syphon.InputWriterSet = Backbone.Syphon.TypeRegistry.extend(), Backbone.Syphon.InputWriters = new Backbone.Syphon.InputWriterSet, Backbone.Syphon.InputWriters.registerDefault(function(t, e) {
        t.val(e)
    }), Backbone.Syphon.InputWriters.register("checkbox", function(t, e) {
        t.prop("checked", e)
    }), Backbone.Syphon.InputWriters.register("radio", function(t, e) {
        t.prop("checked", t.val() === e)
    }), Backbone.Syphon.KeyAssignmentValidatorSet = Backbone.Syphon.TypeRegistry.extend(), Backbone.Syphon.KeyAssignmentValidators = new Backbone.Syphon.KeyAssignmentValidatorSet, Backbone.Syphon.KeyAssignmentValidators.registerDefault(function() {
        return !0
    }), Backbone.Syphon.KeyAssignmentValidators.register("radio", function(t) {
        return t.prop("checked")
    }), Backbone.Syphon.KeySplitter = function(t) {
        var e = t.match(/[^\[\]]+/g);
        return t.indexOf("[]") === t.length - 2 && (lastKey = e.pop(), e.push([lastKey])), e
    }, Backbone.Syphon.KeyJoiner = function(t, e) {
        return t + "[" + e + "]"
    },
    function(t) {
        "function" == typeof define && define.amd ? define(["backbone", "underscore"], t) : "object" == typeof exports ? module.exports = t(require("backbone"), require("underscore")) : t(window.Backbone, window._)
    }(function(t, e) {
        var n = t.Router.prototype.route,
            i = function() {};
        e.extend(t.Router.prototype, {
            before: i,
            after: i,
            route: function(t, r, s) {
                s || (s = this[r]);
                var o = e.bind(function() {
                    var n, r = [t, e.toArray(arguments)];
                    if (n = e.isFunction(this.before) ? this.before : "undefined" != typeof this.before[t] ? this.before[t] : i, n.apply(this, r) !== !1) {
                        s && s.apply(this, arguments);
                        var o;
                        o = e.isFunction(this.after) ? this.after : "undefined" != typeof this.after[t] ? this.after[t] : i, o.apply(this, r)
                    }
                }, this);
                return n.call(this, t, r, o)
            }
        })
    }),
    function() {
        window.Debug = function() {}, window.run_intervals = function() {
            return function() {
                return {
                    free: [10, 15, 20, 30, 40, 50],
                    pro: [2, 5, 10, 15, 20, 30, 40, 50]
                }
            }
        }(this), window.Prey = {
            AppLayout: {},
            Models: {},
            Collections: {},
            Routers: {},
            Maps: {},
            Extensions: {},
            Analytics: {},
            Views: {
                B2B: {},
                B2C: {},
                General: {},
                Settings: {}
            },
            Helpers: {
                BootstrapHelpers: {},
                UrlHelpers: {}
            },
            initialize: function() {
                var t;
                return t = new Prey.Views.ApplicationLayout
            }
        }, Backbone.Syphon.InputReaders.register("checkbox", function(t) {
            return t.prop("checked") ? t.val() : !1
        }), window.h = function(t) {
            return t.replace(/(<([^>]+)>)/gi, "")
        }, jQuery.timeago.settings.strings = {
            // prefixAgo: I18n.t("time.agojs.prefixAgo"),
            // prefixFromNow: I18n.t("time.agojs.prefixFromNow"),
            // suffixAgo: I18n.t("time.agojs.suffixAgo"),
            // suffixFromNow: I18n.t("time.agojs.suffixFromNow"),
            // seconds: I18n.t("time.agojs.seconds"),
            // minute: I18n.t("time.agojs.minute"),
            // minutes: I18n.t("time.agojs.minutes"),
            // hour: I18n.t("time.agojs.hour"),
            // hours: I18n.t("time.agojs.hours"),
            // day: I18n.t("time.agojs.day"),
            // days: I18n.t("time.agojs.days"),
            // month: I18n.t("time.agojs.month"),
            // months: I18n.t("time.agojs.months"),
            // year: I18n.t("time.agojs.year"),
            // years: I18n.t("time.agojs.years")
        }, $(document).ready(function() {
            return Prey.initialize()
        })
    }.call(this),
    function() {
        Prey.Helpers.BootstrapHelpers.progressBar = function(t) {
                return $("<div class='progress progress-striped active'><div class='bar' style='width: " + t + "%;'></div></div>")
            }, Prey.Helpers.BootstrapHelpers.showModal = function(t, e, n) {
                return null == n && (n = {}), Debug("OPEN MODAL"), Prey.Helpers.BootstrapHelpers.cleanModal(), null == t && (t = ""), null == e && (e = ""), this.myModal = $("#modal"), this.modalHeader = $("#modal .modal-header"), this.modalBody = $("#modal .modal-container"), n.modal_name && this.myModal.attr("data-modal-name", n.modal_name), n.dialog_class && this.myModal.find(".modal-dialog").addClass(n.dialog_class), n.noheader ? this.modalHeader.addClass("hidden") : this.modalHeader.removeClass("hidden"), this.modalBody.html(t), this.myModal.modal("show"), this.myModal[0].className = "modal fade in", 0 !== e.length && this.modalHeader.find("h4").html(e), Prey.Helpers.gtmPushEvent("showModal", "UX", "show modal", n.modal_name || "unnamed modal"), this.myModal
            }, Prey.Helpers.BootstrapHelpers.hideModal = function() {
                return null == this.myModal && (this.myModal = $("#modal")), this.myModal.modal("hide"), $(".modal-backdrop").remove(), this.myModal
            }, Prey.Helpers.BootstrapHelpers.cleanModal = function() {
                var t, e;
                return e = $("#modal"), t = e.attr("data-modal-name"), "undefined" != typeof t && t !== !1 && e.attr("data-modal-name", ""), e.find(".modal-dialog").removeClass().addClass("modal-dialog"), e.find(".modal-container, .modal-title").html("")
            }, Prey.Helpers.BootstrapHelpers.showAutoHideModal = function(t, e) {
                return Prey.Helpers.BootstrapHelpers.showModal(t, e), setTimeout(function() {
                            return $("#modal").modal("hide")}, 3e3)
}, Prey.Helpers.Alert = {}, Prey.Helpers.Alert.render = function() {
    return function(t, e, n) {
        var i, r;
        return n = n || "", i = "<div class='alert'><div class=\"live-notification-item " + n + '">' + t + "<a class='close' data-dismiss='alert' aria-hidden='true'>&times;</a></div>", e && "" !== e && (i += "<small>" + e + "</small>"), i += "</div>", r = $(i), r.appendTo("#live-notifications"), setTimeout(function() {
            return r.fadeOut(function() {}), $(this).remove()
        }, 7e3)
    }
}(this), Prey.Helpers.Alert.success = function() {
    return function(t) {
        var e;
        return e = "string" == typeof t ? t : "Successfully updated.", Prey.Helpers.Alert.render(e, null, "success")
    }
}(this), Prey.Helpers.Alert.error = function() {
    return function(t, e) {
        var n;
        return n = "string" == typeof t ? t : t.message || "Couldn't save. Please try again.", Prey.Helpers.Alert.render(n, e, "error")
    }
}(this), Prey.Helpers.PlaySound = function() {
    return function(t) {
        return null == t && (t = "successSound"), t = soundManager.getSoundById(t), t.setVolume(50), t.play()
    }
}(this), Prey.Helpers.isTiny = function() {
    return function(t) {
        var e;
        return e = window.matchMedia("screen and (max-width: 480px)"), e.matches ? t(!0) : t(!1)
    }
}(this), Prey.Helpers.gtmPushEvent = function(t, e, n, i) {
    return dataLayer.push({
        event: t,
        gaEventCategory: e,
        gaEventAction: n,
        gaEventLabel: i
    })
}, Prey.Helpers.showOnboarding = function() {
    var t;
    return Debug("Try to Display onboarding"), current_account.get("skip_onboarding") ? void 0 : (t = new Prey.Views.onBoarding, t.render())
}
}.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            n = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        Prey.Extensions.View = function(e) {
            function i() {
                return this.transitionOut = t(this.transitionOut, this), this.transitionIn = t(this.transitionIn, this), this.close = t(this.close, this), this.disableViewingContent = t(this.disableViewingContent, this), this.enableViewingContent = t(this.enableViewingContent, this), this.render = t(this.render, this), this.handleMenu = t(this.handleMenu, this), this.handleCurrentView = t(this.handleCurrentView, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.initialize = function() {
                return Debug("INIT VIEW CONFIG"), this.old_view = window.current_view, window.current_view = this, this.displayTitle(), this.parent_section && this.parent_section.removeClass("viewing-content"), this.handleCurrentView(), window.device_map._onResize()
            }, i.prototype.handleCurrentView = function() {
                return $(".current").removeClass("current"), $(".viewing-content").removeClass("viewing-content"), _.each(this.view_for_current, function(t) {
                    return t.addClass("current")
                }), this.handleMenu()
            }, i.prototype.handleMenu = function() {
                return this.menu ? ($("#nav-main li a").removeClass("active"), $(this.menu).addClass("active")) : void 0
            }, i.prototype.render = function() {}, i.prototype.enableViewingContent = function() {
                return this.parent_section ? this.parent_section.addClass("viewing-content") : void 0
            }, i.prototype.disableViewingContent = function() {
                return this.parent_section ? this.parent_section.removeClass("viewing-content") : void 0
            }, i.prototype.setAsCurrentView = function() {
                return window.current_view = this
            }, i.prototype.close = function() {
                return Debug("CLOSED VIEW CALLED"), this.stopListening(), this.undelegateEvents(), this.unbind()
            }, i.prototype.transitionIn = function() {
                return Debug("TRANSITION IN")
            }, i.prototype.transitionOut = function() {
                return Debug("TRANSITION OUT")
            }, i.prototype.displayTitle = function() {
                return null != this.title ? document.title = "PREY: " + this.title : void 0
            }, i
        }(Backbone.View), Prey.Extensions.Modal = function(e) {
            function i() {
                return this.displayAlertError = t(this.displayAlertError, this), this.displayAlertSuccess = t(this.displayAlertSuccess, this), this.showState = t(this.showState, this), this.displayAsAlert = t(this.displayAsAlert, this), this.close = t(this.close, this), this.closeModal = t(this.closeModal, this), this.render = t(this.render, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.el = "#modal", i.prototype.initialize = function(t) {
                return null == t && (t = {}), this.closed = !1, window.current_modal = this, this.modal_title = t.modal_title || "", this.modal_options = t.modal_options || {}
            }, i.prototype.render = function() {
                return Prey.Helpers.BootstrapHelpers.showModal(this.template(), this.modal_title, this.modal_options)
            }, i.prototype.closeModal = function() {
                return Prey.Helpers.BootstrapHelpers.hideModal()
            }, i.prototype.setAsCurrent = function() {
                return window.current_modal = this
            }, i.prototype.close = function() {
                return this.closed = !0, this.stopListening(), this.undelegateEvents(), this.unbind(), Debug("Closing modal")
            }, i.prototype.isClosed = function() {
                return this.closed
            }, i.prototype.displayAsAlert = function() {
                return $(this.el).find(".modal-dialog").removeClass("modal-md modal-lg").addClass("modal-sm"), $(this.el).find(".modal-header").addClass("hidden")
            }, i.prototype.showState = function(t) {
                return $(this.el).find(".state").addClass("hidden"), $(this.el).find(".state-" + t).removeClass("hidden")
            }, i.prototype.displayAlertSuccess = function() {
                return this.displayAsAlert(), this.showState("success"), !1
            }, i.prototype.displayAlertError = function() {
                return this.displayAsAlert(), this.showState("error"), !1
            }, i.prototype.hideFooter = function() {
                return $(".modal-footer").addClass("hide")
            }, i
        }(Backbone.View)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Routers.main = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.routes = {
                app: "getDashboard",
                "devices/generate_csv": "getDevicesCSV",
                devices: "getDevices",
                "devices/:key": "getDevice",
                "devices/:key/config": "getDeviceSettings",
                "devices/:key/reports": "getDeviceReports",
                "devices/:key/reports/:id": "getDeviceReport",
                "devices/:key/activity": "getDeviceActivities",
                "devices/:key/backups": "getDeviceBackups",
                "devices/:key/browser": "getDeviceBrowser",
                "devices/:key/hardware": "getDeviceHardware",
                overview: "getOverview",
                settings: "getSettings",
                "subscription/new": "getSettings",
                "subscription/edit": "getAccountSettings",
                "settings/account": "getAccountSettings",
                "settings/devices": "getDeviceSetSettings",
                "settings/user-profile": "getUserProfileSettings",
                "settings/notifications": "getNotificationsSettings",
                "settings/billing": "getBillingsSettings",
                "subscription/billing_info": "getBillingsSettings",
                users: "getUsersSettings",
                "users/new": "getUsersNewSettings",
                "users/:id": "getUsersEditSettings"
            }, n
        }(Backbone.Router)
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/account_alerts"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='alert-content'>\n  <button class='close js-hide-modal' type='button'>&times;</button>\n  <i class='icon-warning-sign'></i>"), e.push("  " + t(I18n.t("messages.accounts.billing.payment_failed_link"))), e.push("</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/account_status_types"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<i class='icon-" + this.name.toLowerCase() + "'></i>\n<strong>" + t(this.count) + "</strong>\n<span>" + t(this.name) + "</span>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/activity"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<td class='activity-date'>" + t(this.name) + "</td>\n<td class='activity-device'>" + t(this.message) + "</td>\n<td class='activity-event'>\n  <abbr class='timeago' title='" + t(this.created_at) + "'></abbr>\n</td>\n<td class='activity-info'>" + t(this.message) + "</td>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2b/devices/device_item"] = function(t) {
            return function() {
                var t, e, n, i;
                return t = window.HAML.cleanValue, e = [], e.push("<td class='has-checkbox'>\n  <!--\n    <label class='checkbox'>\n      <input type='checkbox'>\n      <span></span>\n    </label>\n  -->\n</td>\n<td class='device-name'>\n  <!-- .status-led.is-warning -->\n  <a class='" + (this.missing ? "is-missing" : void 0) + "' href='/devices/" + t(this.key) + "' data-navigation='section'>\n    <h3>\n      <i class='icon-" + this.type.toLowerCase() + "'></i>\n      <span>" + t(h(this.name)) + "</span>\n    </h3>\n    <code>"), this.hardware && this.hardware.serial_number && e.push("      <abbr title='" + t(I18n.t("device.serial_number")) + "'>SN:</abbr>\n      <span>" + t(this.hardware.serial_number) + "</span>"), e.push("    </code>\n  </a>\n</td>\n<td class='device-name'>\n  <!-- .status-led.is-warning -->\n  <a class='" + (this.missing ? "is-missing" : void 0) + "' href='/devices/" + t(this.key) + "' data-navigation='section'>"), n = this.description.split(",")[0], i = this.description.split(",")[1], e.push("    <p class='os'>" + t(n) + "</p>\n    <p class='os-v'>" + t(i) + "</p>\n  </a>\n</td>\n<td class='client-version'>"), e.push("  " + t(this.client_version)), e.push("</td>\n<td class='device-type'>\n  <!-- /- %i{class:\"icon-" + this.type.toLowerCase() + '"} -->'), e.push("  " + t(this.type)), e.push("  <!-- .sr-only Tablet -->\n</td>\n<td class='device-os'>\n  <!-- %i.icon-android -->\n  <i class='icon-" + this.os.toLowerCase() + "'></i>\n  <div class='sr-only'>\n    <p class='os'>" + t(this.os) + "</p>\n    <p class='os-v'>" + t(this.os_version) + "</p>\n  </div>\n</td>\n<td class='reports_count'>"), e.push("  " + t(this.reports_count)), e.push("</td>\n<td class='state'>"), e.push("  " + t(this.state)), e.push("</td>\n<td class='device-seen'>\n  <abbr class='timeago' title='" + t(this.last_checked_in) + "'></abbr>\n</td>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/action_alert"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='device-action-alert device-action-item'>\n  <div class='device-action-icon'>\n    <i class='icon-alert-sign'></i>\n  </div>\n  <div class='device-action-label'>\n    <div class='text-action'>"), e.push("      " + t(I18n.t("messages.devices.actions_to_be_executed"))), e.push("    </div>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/action_link"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<a class='" + ["device-action-item", "" + t(this.status_class ? "is-running" : void 0)].sort().join(" ").replace(/^\s+|\s+$/g, "") + "' href='/devices/" + t(this.device_id) + "/module/" + t(this.name) + "' data-persistent='" + t(this.persistent ? "true" : void 0) + "' data-actionable='" + t(this.actionable ? "true" : void 0) + "' data-action-type='" + t(this.name) + "' data-toggle='tooltip' data-placement='left' title='" + t(I18n.t("actions." + this.name + ".name")) + "'>\n  <div class='device-action-icon'>\n    <i class='icon-" + this.name + "'></i>\n    <i class='icon-loader'></i>\n    <i class='icon-cancel'></i>\n  </div>\n  <div class='device-action-label'>\n    <div class='text-action'>"), e.push("      " + t(I18n.t("actions." + this.name + ".name"))), e.push("    </div>\n    <div class='text-cancel'>"), e.push("      " + t(I18n.t("actions.cancel"))), e.push("    </div>\n    <div class='text-help'>" + t(this.status_label) + "</div>\n  </div>\n  <span class='" + ["status-line", "" + t(this.status_class)].sort().join(" ").replace(/^\s+|\s+$/g, "") + "' title='" + t(I18n.t("misc.tooltip")) + "' data-toogle='tooltip' data-placement='top'></span>\n</a>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/actions"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<header class='segmented'>\n  <div class='title'>\n    <h1 class='text-left'>"), e.push("      " + t(I18n.t("actions.title"))), e.push("    </h1>\n  </div>\n  <div class='action'>\n    <a class='btn-full js-toggle-actions-width' href='#'>\n      <i class='icon-toggle-left'></i>\n      <i class='icon-toggle-right'></i>\n    </a>\n  </div>\n</header>\n<article class='nano'>\n  <div class='nano-content overthrow'>\n    <div id='action-alert'></div>\n    <ul id='device-actions-list'></ul>\n  </div>\n</article>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/activities"] = function(t) {
            return function() {
                var t, e;
                switch (t = window.HAML.cleanValue, e = [], e.push("<td class='activity-date'>\n  <abbr class='timeago' title='" + t(this.created_at) + "'></abbr>\n</td>\n<!-- %td.activity-device -->\n<td class='" + ["activity-event", "activity-" + t(this.name)].sort().join(" ").replace(/^\s+|\s+$/g, "") + "'>"), e.push("  " + t(I18n.t("events." + this.name, {
                    info: this.info
                }))), e.push("</td>\n<td class='activity-info'>"), this.name) {
                    case "got_location":
                        e.push("  LAT:"), e.push("  " + t(this.info.lat)), e.push("  LNG: "), e.push("  " + t(this.info.lng)), e.push("  ACC:"), e.push("  " + t(this.info.accuracy));
                        break;
                    default:
                        e.push("  " + t(this.info))
                }
                return e.push("</td>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/all"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<a class='" + ["device-item", "" + t(this.missing ? "is-missing" : void 0)].sort().join(" ").replace(/^\s+|\s+$/g, "") + "' href='/devices/" + t(this.key) + "' data-navigation='view'>"), (this.unread_report > 0 && this.unread_report < 1e3 || this.hardware_changes) && e.push("  <div class='notify'>\n    <i class='icon-notify'></i>\n  </div>"), e.push("  <div class='device-icon-container'>\n    <div class='" + ["device-icon", "device-" + t(this.icon)].sort().join(" ").replace(/^\s+|\s+$/g, "") + "'></div>"), this.missing && e.push("    <div class='device-icon-overlay'>\n      <div class='device-icon-content'>\n        <div class='device-icon-label'>\n          <span class='badge'>" + t(I18n.t("device.status.missing")) + "</span>\n        </div>\n      </div>\n    </div>"), e.push("  </div>\n  <div class='device-info'>\n    <div class='device-info-name ellipsis'>"), e.push("      " + t(h(this.name))), e.push("    </div>"), this.last_checked_in && e.push("    <div class='device-info-p'>\n      <div class='timeago-label'>" + t("" + I18n.t("device.status.last_seen") + ":") + "</div>\n      <abbr class='timeago' title='" + t(this.last_checked_in) + "'></abbr>\n    </div>"), e.push("  </div>\n</a>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/all_deletion"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='" + ["device-item", "" + t(this.missing ? "is-missing" : void 0)].sort().join(" ").replace(/^\s+|\s+$/g, "") + "'>\n  <label class='checkbox' for='" + t(this.key) + "'>\n    <div class='device-state'>\n      <input id='" + this.key + "' type='checkbox' value='" + t(this.key) + "' name='devices[]'>\n      <span></span>\n    </div>\n    <div class='device-icon-container'>\n      <div class='" + ["device-icon", "device-" + t(this.icon)].sort().join(" ").replace(/^\s+|\s+$/g, "") + "'></div>"), this.missing && e.push("      <div class='device-icon-overlay'>\n        <div class='device-icon-content'>\n          <div class='device-icon-label'>\n            <div class='badge'>" + t(I18n.t("device.status.missing")) + "</div>\n          </div>\n        </div>\n      </div>"), e.push("    </div>\n    <div class='device-info'>\n      <div class='device-info-name ellipsis'>"), e.push("        " + t(h(this.name))), e.push("      </div>\n      <div class='device-info-model ellipsis'>" + t(this.description) + "</div>\n    </div>\n  </label>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/config"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<header>\n  <a class='btn btn-hover pull-left' href='/devices/" + t(this.id) + "' data-navigation='view' data-back>\n    <i class='icon icon-back'></i>\n  </a>\n  <a class='btn btn-success pull-right' href='/devices/" + t(this.id) + "' data-navigation='view' data-back disabled>\n    <i class='icon icon-check'></i>\n  </a>\n  <h1>Configuration</h1>\n</header>\n<article class='nano'>\n  <div class='nano-content overthrow'>\n    <div class='block'>\n      DEVICE " + this.id + " Config\n    </div>\n  </div>\n  <div class='hidden nano-content overthrow'>\n  </div>\n</article>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/device_delay"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<label for='device_delay'>"), e.push("  " + t(I18n.t("v1.device.settings.delay"))), e.push("</label>\n<div class='interval'>\n  <div class='interval-value'>"), e.push("    " + t(I18n.t("time.minutes", {
                    time: this.get("delay")
                }))), e.push("  </div>\n  <a class='interval-action' href='#'>\n    <i class='icon-adjust'></i>\n  </a>\n</div>\n<div class='hidden' id='device-delay'>\n  <form id='device-delay-form' method='post' action='/devices/" + t(this.get("key")) + "' accept-charset='UTF-8'>\n    <div class='modal-body'>\n      <p class='help-block'>\n        <i class='icon-info-sign'></i>"), e.push("        " + t(I18n.t("actions.remove_from_queue"))), e.push("      </p>\n      <div class='select'>\n        <i class='caret'></i>\n        <select class='form-control' name='device[delay]'>"), _.each(this.get("delay_options"), function(n) {
                    return function(i) {
                        return n.get("delay") === i ? (e.push("          <option selected='selected' value='" + t(i) + "'>"), e.push("            " + t(I18n.t("time.minutes", {
                            time: i
                        }))), e.push("          </option>")) : (e.push("          <option value='" + t(i) + "'>"), e.push("            " + t(I18n.t("time.minutes", {
                            time: i
                        }))), e.push("          </option>")), ""
                    }
                }(this)), e.push("        </select>\n      </div>\n      <div class='text-warning'>\n        <i class='icon-alert-sign'></i>"), e.push("        " + t(I18n.t("device.notices.queued_actions"))), e.push("      </div>\n    </div>\n    <div class='modal-footer'>\n      <button class='disabled link link-success submit' type='submit' disabled='disabled' data-disable-with=\"<i class='loader small'></i>\">"), e.push("        " + t(I18n.t("device.buttons.change_frequency"))), e.push("      </button>\n    </div>\n  </form>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/forms/cancel_action"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<form action='/devices/" + t(this.device) + "/toggle_action' method='post' name='toggle-action'>\n  <div class='modal-body'>\n    <p class='help-block'>This will remove the action from the request queue.</p>\n    <input name='command' type='hidden' value='cancel'>\n    <input name='target' type='hidden' value=''>\n  </div>\n  <div class='modal-footer'>\n    <button class='link link-success submit' type='submit'>Yes, remove from queue</button>\n  </div>\n</form>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/forms/find_device"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<form id='find-device-form' action='/devices/" + t(this.id) + "/toggle_missing' method='post' name='toggle-stolen'>\n  <div class='modal-body'>\n    <input name='missing' type='hidden' value='true'>\n    <p>" + t(I18n.t("device.missing_dialog.desc")) + "</p>\n    <input name='authenticity_token' type='hidden' value='" + t($("meta[name='csrf-token']").attr("content")) + "'>\n    <br>\n    <div class='form-group'>\n      <label for='reports-interval'>" + t(I18n.t("device.missing_dialog.options.interval_title")) + "</label>\n      <div class='select'>\n        <i class='caret'></i>\n        <select class='form-control' id='stolen-frecuency' name='options[interval]'>"), "free" !== window.current_account.get("plan") && e.push("          <option value='2'>" + t("" + I18n.t("device.missing_dialog.options.interval_option", {
                    number: 2
                })) + "</option>"), e.push("          <option value='5'>" + t(I18n.t("device.missing_dialog.options.interval_option", {
                    number: 5
                })) + "</option>\n          <option value='10'>" + t(I18n.t("device.missing_dialog.options.interval_option", {
                    number: 10
                })) + "</option>\n          <option value='20'>" + t(I18n.t("device.missing_dialog.options.interval_option", {
                    number: 20
                })) + "</option>\n        </select>"), "free" === window.current_account.get("plan") && e.push("        <p class='alert alert-info' id='toggle-missing-upgrade-cta'>" + t(I18n.t("device.missing_dialog.upgrade_cta")) + "</p>"), e.push("      </div>\n    </div>"), current_device.displayReportAdvancedOptions() && (e.push("    <div class='collapsable'>\n      <div class='collapsable-header js-toggle-options'>\n        <i class='icon-settings'></i>\n        <span>" + t(I18n.t("device.missing_dialog.advanced_options")) + "</span>\n      </div>\n      <div class='collapsable-content inline-checkbox'>\n        <label class='checkbox'>\n          <input id='exclude_picture' name='options[exclude][]' type='checkbox' value='picture'>\n          <span></span>"), e.push("          " + t(I18n.t("device.missing_dialog.options.exclude_picture"))), e.push("        </label>"), current_device.is_android() || (e.push("        <label class='checkbox'>\n          <input id='exclude_screenshot' name='options[exclude][]' type='checkbox' value='screenshot'>\n          <span></span>"), e.push("          " + t(I18n.t("device.missing_dialog.options.exclude_screenshot"))), e.push("        </label>")), e.push("      </div>\n    </div>")), e.push("    <div id='ios-options'></div>\n  </div>\n  <div class='modal-footer'>\n    <button class='link link-danger submit' type='submit' data-disable-with=\"<i class='loader small'></i> \">"), e.push("      " + t(I18n.t("device.missing_dialog.action"))), e.push("    </button>\n  </div>\n</form>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/forms/send_action"] = function(t) {
            return function() {
                var t;
                return t = [], t.join("\n")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/forms/stop_action"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<form action='/devices/" + t(this.device) + "/toggle_action' method='post' name='toggle-action'>\n  <div class='modal-body'>\n    <p class='help-block'>This will instruct Prey to stop running .</p>\n    <input name='command' type='hidden' value='stop'>\n    <input name='target' type='hidden' value=''>\n  </div>\n  <div class='modal-footer'>\n    <button class='link link-success submit' type='submit'>Yes, remove from queue</button>\n  </div>\n</form>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/forms/toggle_missing"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='state state-default'>\n  <form id='toggle-missing-form' action='/devices/" + t(this.id) + "/toggle_missing' method='post' name='toggle-stolen'>\n    <div class='modal-body'>\n      <input name='missing' type='hidden' value='false'>\n      <p>" + t(I18n.t("device.recovered_dialog.desc")) + "</p>\n      <input name='command' type='hidden' value='stop'>\n      <input name='target' type='hidden' value='report'>\n      <input name='authenticity_token' type='hidden' value='" + t($("meta[name='csrf-token']").attr("content")) + "'>"), _.isNull(this.police_case_device) || e.push("      <div class='text-warning'>\n        <i class='icon-alert-sign'></i>\n        Esta acción revocará el acceso de la policía a nuevos reportes.\n      </div>"), e.push("    </div>\n    <div class='modal-footer'>\n      <button class='link link-success submit' type='submit' data-disable-with=\"<i class='loader small'></i> \">"), e.push("        " + t(I18n.t("device.recovered_dialog.action"))), e.push("      </button>\n    </div>\n  </form>\n</div>\n<div class='hidden state state-success'>\n  <div class='modal-alert modal-body modal-success'>\n    <i class='icon-check large'></i>\n    <h3>Dispositivo desenlazado</h3>\n    <p>La policía no recibirá más información desde este equipo.</p>\n    <br>\n    <div class='btn btn-ghost js-close-modal'>"), e.push("      " + t(I18n.t("buttons.accept"))), e.push("    </div>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/hardware_info_row"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='hardware-icon'>\n  <div class='icon-" + this.name + "'></div>\n</div>\n<div class='hardware-detail'>\n  <div class='hardware-title'>"), e.push("    " + t(I18n.t("hardware.groups." + this.name))), e.push("  </div>\n  <ul>"), _.each(this.data, function(n) {
                    return e.push("    <li class='hardware-info'>\n      <div class='hardware-info-title'>" + t(I18n.t("hardware." + n.key)) + "</div>\n      <div class='hardware-info-descripion'>" + t(n.value) + "</div>\n    </li>"), ""
                }), e.push("  </ul>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/last_location"] = function(t) {
            return function() {
                var t, e, n;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='map-popover-header'>"), e.push("  " + t(I18n.t("device.location.last_known"))), e.push("</div>\n<div class='map-popover-body'>\n  <div class='address'>" + t(I18n.t("device.location.loading_address")) + "</div>\n  <div class='located_at'>"), this.get("location").created_at && (n = new Date(this.get("location").created_at), e.push("    <abbr class='timeago' title='" + t(n.toJSON()) + "'></abbr>")), e.push("  </div>\n</div>\n<div class='map-popover-feedback'></div>\n<div class='map-popover-footer'>\n  <form id='locate-device' method='post' action='/devices/" + t(this.id) + "/request_data' name='locate-device'>\n    <input type='hidden' value='location' name='target'>\n    <button class='link link-success multi-states with-caret' type='submit'>\n      <div class='show-is-default state'>\n        <i class='icon-locate'></i>\n        <span>" + t(I18n.t("device.location.states.default")) + "</span>\n      </div>\n      <div class='show-is-loading state'>\n        <div class='loader xsmall'></div>\n        <span>" + t(I18n.t("device.location.states.contacting")) + "</span>\n      </div>\n      <div class='show-is-success state'>\n        <i class='loader xsmall'></i>\n        <span>" + t(I18n.t("device.location.states.waiting")) + "</span>\n      </div>\n    </button>\n  </form>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/map_loader"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='loader xlarge'>\n  <div class='loader-bar'></div>\n  <div class='loader-label'>"), e.push("    " + t(I18n.t("device.location.locating_device"))), e.push("  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/modals/confirm_delete"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-alert modal-body'>\n  <button class='close js-hide-modal' type='button'>&times;</button>\n  <div class='state state-default'>\n    <i class='icon-warning-sign large text-danger'></i>\n    <h3>" + t(I18n.t("v1.device.delete")) + "</h3>\n    <p>" + t(I18n.t("modals.delete_device.confirm")) + "</p>\n  </div>\n  <div class='hidden state state-loading text-danger'>\n    <h3>" + t(I18n.t("buttons.deleting")) + "</h3>\n    <p>" + t(I18n.t("modals.action_take_some_time")) + "</p>\n    <div class='loader small'></div>\n  </div>\n  <div class='hidden state state-error text-danger'>\n    <i class='icon-warning-sign large'></i>\n    <h3>" + t(I18n.t("modals.an_error_has_occurred")) + "</h3>\n    <p>" + t(I18n.t("messages.devices.destroy_error")) + "</p>\n  </div>\n  <div class='hidden state state-success'>\n    <i class='icon-check large'></i>\n    <h3>" + t(I18n.t("messages.devices.destroy_success_title")) + "</h3>\n    <p>" + t(I18n.t("messages.devices.destroy_success_desc")) + "</p>\n  </div>\n</div>\n<div class='modal-footer'>\n  <button class='alert-confirm link link-danger' type='submit' data-disable-with=\"<i class='loader small'></i> \">"), e.push("    " + t(I18n.t("modals.delete_device.submit"))), e.push("  </button>\n  <button class='alert-cancel link'>"), e.push("    " + t(I18n.t("buttons.cancel"))), e.push("  </button>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/modals/hardware_modifications"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-body'>\n  <div id='modified-content'></div>\n</div>\n<div class='modal-footer'>\n  <button class='alert-cancel clear-changes link' data-disable-with=\"<i class='loader small'></i> \">"), e.push("    " + t(I18n.t("buttons.clear_changes"))), e.push("  </button>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/modified_hardware_item"] = function(t) {
                return function() {
                        var t, e;
                        return t = window.HAML.cleanValue, e = [], e.push("<div class='hardware'>\n  <div class='hardware-icon'>\n    <div class='icon-" + this.name + "'></div>\n  </div>\n  <div class='hardware-detail'>\n    <div class='hardware-title'>"), e.push("      " + t(I18n.t("hardware.groups." + this.name))), e.push("      <small class='hardware-changed'>" + t(this.type) + "</small>\n    </div>\n    <div class='hardware-changes'>"), ("changed" === this.type || "removed" === this.type) && (e.push("      <ul class='hardware-before'>"), _.each(this.data, function(n) {
                                        return e.push("        <li class='hardware-info'>\n          <div class='hardware-info-title'>" + t(I18n.t("hardware." + n.key)) + "</div>\n          <div class='hardware-info-descripion'>" + t(n.value[0]) + "</div>\n        </li>"), ""}), e.push("      </ul>\n      <div class='hardware-middle'>\n        <i class='arrow'></i>\n      </div>")), ("added" === this.type || "changed" === this.type) && (e.push("      <ul class='hardware-after hardware-changed'>"), _.each(this.data, function(n) {
    return e.push("        <li class='hardware-info'>\n          <div class='hardware-info-title'>" + t(I18n.t("hardware." + n.key)) + "</div>\n          <div class='hardware-info-descripion'>" + t(n.value[1]) + "</div>\n        </li>"), ""
}), e.push("      </ul>")), e.push("    </div>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
}.call(window.HAML.context(t))
}
}.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/navigation"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<li>\n  <a href='/devices/" + t(this.key) + "' data-navigation='section' data-view='map'>\n    <i class='icon-map'></i>\n    <i class='arrow'></i>"), e.push("    " + t(I18n.t("navigation.device.map_and_actions"))), e.push("  </a>\n</li>\n<li>\n  <a class='js-hide-actions' href='/devices/" + t(this.key) + "/reports' data-navigation='view' data-view='reports'>\n    <i class='icon-reports'></i>\n    <i class='arrow'></i>"), this.unread_report > 0 && this.unread_report < 1e3 && e.push("    <div class='notify'>" + t(this.unread_report) + "</div>"), e.push("    " + t(I18n.t("navigation.device.reports"))), e.push("  </a>\n</li>\n<li>\n  <a href='/devices/" + t(this.key) + "/activity' data-navigation='section' data-view='activity'>\n    <i class='icon-activity'></i>\n    <i class='arrow'></i>"), e.push("    " + t(I18n.t("navigation.device.activity_log"))), e.push("  </a>\n</li>\n<li>\n  <a href='/devices/" + t(this.key) + "/hardware' data-navigation='section' data-view='hardware'>\n    <i class='icon-hardware'></i>\n    <i class='arrow'></i>"), this.hardware_changes && e.push("    <div class='notify'>\n      <i class='icon-notify'></i>\n    </div>"), e.push("    " + t(I18n.t("navigation.device.hardware_info"))), e.push("  </a>\n</li>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/network_interface_row"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='hardware-info-title'>" + t(this.key) + "</div>\n<div class='hardware-info-descripion'>" + t(this.value) + "</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/no_location"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='overlay-container'>\n  <div class='overlay-content'>\n    <div class='unknown-location'>\n      <form id='locate-device' method='post' action='/devices/" + t(this.id) + "/request_data' name='locate-device'>\n        <input type='hidden' value='location' name='target'>"), current_device.is_bash() ? e.push("        <div class='unknown-location-title'>" + t(I18n.t("device.location.time_to_upgrade")) + "</div>\n        <div class='unknown-location-desc'>" + t(I18n.t("device.location.disclaimer")) + "</div>") : e.push("        <div class='unknown-location-title'>" + t(I18n.t("device.location.unknown")) + "</div>\n        <div class='unknown-location-desc'>" + t(I18n.t("device.location.click_to_locate")) + "</div>\n        <button class='btn btn-success multi-states' type='submit'>\n          <div class='show-is-default state'>\n            <i class='icon-locate'></i>\n            <span>" + t(I18n.t("device.location.states.locate")) + "</span>\n          </div>\n          <div class='show-is-loading state'>\n            <div class='loader xsmall'></div>\n            <span>" + t(I18n.t("device.location.states.contacting")) + "</span>\n          </div>\n          <div class='show-is-success state'>\n            <i class='loader xsmall'></i>\n            <span>" + t(I18n.t("device.location.states.waiting")) + "</span>\n          </div>\n        </button>"), e.push("      </form>\n    </div>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/report_header"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='" + ["bar", "" + t(this.missing ? "device-missing" : void 0)].sort().join(" ").replace(/^\s+|\s+$/g, "") + "'>\n  <a class='btn btn-hover pull-left' href='/devices/" + t(this.id) + "' title='" + t(I18n.t("report.back_to_device")) + "' data-navigation='view' data-back data-toggle='tooltip' data-placement='right'>\n    <i class='icon-back'></i>\n  </a>\n  <div class='btn-group dropdown invisible js-enable-on-selection pull-right' title='" + t(I18n.t("misc.options")) + "' data-toggle='tooltip' data-placement='left'>\n    <button class='btn btn-hover dropdown-toggle' data-toggle='dropdown' type='button'>\n      <i class='caret'></i>\n    </button>\n    <div class='dark dropdown-menu' role='menu'>\n      <ul class='dropdown-group'>\n        <li>\n          <a class='dropdown-item'>\n            <i class='icon-favorite'>"), e.push("              " + t(I18n.t("report.mark_as_favorite"))), e.push("            </i>\n          </a>\n        </li>\n        <li>\n          <a class='dropdown-item'>\n            <i class='icon-delete'></i>"), e.push("            " + t(I18n.t("report.remove"))), e.push("          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <hgroup>\n    <h1 class='ellipsis'>" + t(this.name) + "</h1>\n    <small class='ellipsis'></small>\n  </hgroup>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/report_map"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='map-popover-header'>"), e.push("  " + t("" + I18n.t("report.report_number") + " #" + this.id)), e.push("  :\n</div>\n<div class='map-popover-body'>\n  <div class='location'>"), e.push("    " + t(this.location_address ? this.location_address : I18n.t("device.location.loading_address"))), e.push("  </div>\n  <div class='located_at'>\n    <!-- /= I18n.t(\"report.created_at\") -->\n    <abbr class='timeago' title='" + t(this.created_at) + "'></abbr>\n  </div>\n</div>\n<div class='map-popover-footer'>\n  <a class='link link-default report-detail with-caret' href='/devices/" + t(current_device.get("id")) + "/reports/" + t(this.id) + "' data-model='" + t(this.id) + "'>\n    <i class='icon-view'></i>"), e.push("    " + t(I18n.t("report.view_report_details"))), e.push("  </a>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/reports"] = function(t) {
            return function() {
                var t, e, n;
                return t = window.HAML.cleanValue, e = [], n = [this.screenshot_url, this.picture_url].filter(function(t) {
                    return t ? t : void 0
                }).length > 1 ? !0 : !1, e.push("<a class='" + ["report-item", "paper-stack-hover", "" + t(this.unread ? "is-unread" : void 0)].sort().join(" ").replace(/^\s+|\s+$/g, "") + "' id='report-item-" + this.id + "' href='" + t(this.path) + "' data-favorite='favorite'>\n  <div class='report-item-picture'>\n    <div class='" + ["paper-stack", "" + t(n ? "is-multiple" : void 0)].sort().join(" ").replace(/^\s+|\s+$/g, "") + "'>\n      <div class='image' style=\"background-image: url('" + t(this.image) + "')\"></div>\n    </div>\n  </div>\n  <div class='report-item-summary'>\n    <div>"), this.unread && e.push("      <div class='status-led' title='unread'></div>"), e.push("      " + t("#" + this.id)), e.push("    </div>\n    <abbr class='timeago' title='" + t(this.created_at) + "'></abbr>\n  </div>\n  <div class='report-item-icon'>\n    <i class='arrow'></i>\n  </div>\n</a>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/single"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='block'>\n  <div class='" + ["device-icon-container", "" + t(this.missing ? "is-missing" : void 0)].sort().join(" ").replace(/^\s+|\s+$/g, "") + "'>\n    <div class='" + ["device-icon", "device-" + t(this.icon)].sort().join(" ").replace(/^\s+|\s+$/g, "") + "'></div>"), this.missing && (e.push("    <div class='device-icon-overlay'>\n      <div class='device-icon-content'>\n        <div class='device-icon-label'>\n          <span class='badge'>"), e.push("            " + t(I18n.t("device.status.missing"))), e.push("          </span>\n        </div>\n      </div>\n    </div>")), e.push("  </div>\n  <div class='device-info'>\n    <div class='device-info-name hidden'>"), e.push("      " + t(h(this.name))), e.push("    </div>\n    <div class='device-info-model'>"), e.push("      " + t(this.description)), this.client_version && (e.push("      <br>\n      <strong>"), e.push("        " + t("Prey: " + this.client_version)), e.push("      </strong>")), e.push("    </div>"), this.client_outdated === !0 && (e.push("    <div class='device-info-alert'>\n      <div class='device-info-warning' title='" + t(I18n.t("device.notices.upgrade_notice")) + "' data-toggle='tooltip' data-placement='bottom'>\n        <i class='icon-warning-sign'></i>"), e.push("        " + t(I18n.t("device.status.outdated_client"))), e.push("      </div>\n    </div>")), e.push("    <div class='device-info-status'>\n      <div id='device-delay-setting'></div>\n      <div class='hidden' id='device-state-loading'>\n        <i class='icon-loader spin'></i>"), e.push("        " + t(I18n.t("device.status.updating"))), e.push("      </div>\n      <div id='device-state-loaded'></div>\n    </div>\n  </div>\n  <div class='device-info-action'>"), this.missing ? (e.push("    <a class='btn btn-block btn-lg btn-primary js-mark-as-recovered'>"), e.push("      " + t(I18n.t("device.buttons.mark_as_recovered"))), e.push("    </a>")) : (e.push("    <a class='btn btn-block btn-danger btn-lg js-mark-as-missing'>"), e.push("      " + t(I18n.t("device.buttons.mark_as_missing"))), e.push("    </a>")), e.push("  </div>\n  <div class='device-police-connection'>"), this.police_case_device ? e.push("    <p>Enlazado con la " + this.police_case_device.police_department.name + "</p>") : this.missing && "Chile" === current_account.get("detected_country") && e.push("    <a class='js-open-police-recomendation' href='#'>\n      <i class='icon-connect'></i>\n      <span>Enlazar con PDI</span>\n    </a>"), e.push("  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/single_header"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='" + ["bar", "" + t(this.missing ? "device-missing" : void 0)].sort().join(" ").replace(/^\s+|\s+$/g, "") + "'>\n  <a class='btn btn-hover pull-left' href='/devices' title='Back to all devices' data-navigation='view' data-back data-toggle='tooltip' data-placement='right'>\n    <i class='icon-back'></i>\n  </a>\n  <div class='btn-group dropdown pull-right' title='Options' data-toggle='tooltip' data-placement='left'>\n    <button class='btn btn-hover dropdown-toggle' data-toggle='dropdown' type='button'>\n      <i class='icon-settings'></i>\n    </button>\n    <div class='dark dropdown-menu' role='menu'>\n      <ul class='dropdown-group'>\n        <li>\n          <a class='dropdown-item' id='rename-device' href='#'>\n            <i class='icon-edit'></i>\n            <span>"), e.push("              " + t(I18n.t("device.buttons.rename"))), e.push("            </span>\n          </a>\n          <div class='dropdown-input hidden' id='rename-device-input'>\n            <div class='input-group'>\n              <input class='form-control input-sm' id='rename-device-input' type='text'>\n              <span class='input-group-btn'>\n                <a class='btn btn-default btn-sm'>\n                  <i class='icon-check'></i>\n                </a>\n              </span>\n            </div>\n          </div>\n        </li>\n        <li class='divider'></li>\n        <li>\n          <a class='dropdown-item' id='delete-device-btn' href='#'>\n            <i class='icon-delete'></i>"), e.push("            " + t(I18n.t("device.buttons.remove"))), e.push("          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <h1 class='ellipsis'>"), e.push("    " + t(h(this.name))), e.push("  </h1>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/b2c/devices/single_status"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], current_device.cached_model.get("virtual_status") && !current_device.is_bash() && (e.push("<div class='" + ["device-status", "status-" + t(current_device.cached_model.get("virtual_status"))].sort().join(" ").replace(/^\s+|\s+$/g, "") + "'>\n  <div class='status-led'></div>"), e.push("  " + t(I18n.t("device.status." + current_device.cached_model.get("virtual_status")))), e.push("</div>")), e.push("<div>"), this.last_checked_in ? e.push("  <div class='timeago-label'>" + t("" + I18n.t("device.status.last_seen") + ":") + "</div>\n  <abbr class='timeago' title='" + t(this.last_checked_in) + "'></abbr>") : (e.push("  <abbr class='timeago'>"), e.push("    " + t(I18n.t("device.status.never_been_seen"))), e.push("  </abbr>")), e.push("</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/disabled"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<content class='primary'>\n  <div class='empty-view'>\n    <div class='empty-content'>\n      <div class='error'>\n        <div class='feathers-top'></div>\n        <i class='icon-account'>\n          <i class='icon-forbidden text-danger'></i>\n        </i>\n        <h3>" + t(I18n.t("messages.accounts.disabled.title")) + "</h3>\n        <p>" + t(I18n.t("messages.accounts.disabled.contact_us")) + "</p>\n        <div>\n          <a class='btn btn-primary js-request-contact'>"), e.push("            " + t(I18n.t("help.contact_us"))), e.push("          </a>\n        </div>\n        <div class='feathers-bottom'></div>\n      </div>\n    </div>\n  </div>\n</content>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/error"] = function(t) {
            return function() {
                var t, e, n;
                return t = window.HAML.cleanValue, e = [], e.push("<content class='primary'>\n  <div class='empty-view'>\n    <div class='empty-content'>\n      <div class='error'>\n        <div class='feathers-top'></div>\n        <i class='icon-warning-sign large'></i>\n        <h3>There is nothing here.</h3>\n        <p>" + t(I18n.t("page_errors." + this.status)) + "</p>"), n = "/", 404 !== this.status && (n = window.location), e.push("        <a class='btn btn-primary' href='" + t(n) + "' data-dont-push='true'>"), e.push("          " + t(I18n.t("page_errors.try_again"))), e.push("        </a>\n        <div class='feathers-bottom'></div>\n      </div>\n    </div>\n  </div>\n</content>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/general/contact"] = function(t) {
            return function() {
                var t, e, n, i;
                return t = window.HAML.cleanValue, e = [], i = current_account.get("current_user").name, n = current_account.get("current_user").email, e.push("<div class='state state-default'>\n  <form action='/contact' method='post' accept-charset='UTF-8'>\n    <div class='modal-body'>\n      <div class='form-group'>\n        <p class='lead'>" + t(I18n.t("contact.desc")) + "</p>\n        <p class='lead'>\n          <small>"), e.push("            " + t(I18n.t("contact.help"))), e.push("            <a href='https://help.preyproject.com' target='_blank' data-dont-push='true'>help.preyproject.com</a>\n          </small>\n        </p>\n      </div>\n      <div class='form-group hidden'>\n        <input class='form-control' name='current_view' type='hidden' value='" + t(window.location.pathname) + "'>\n      </div>\n      <div class='form-group'>\n        <label>" + t(I18n.t("forms.labels.from")) + "</label>\n        <p class='form-control-static'>" + t("" + i + " &lt;" + n + "&gt") + "</p>\n      </div>\n      <div class='form-group'>\n        <label for='support_category'>" + t(I18n.t("forms.labels.subject")) + "</label>\n        <div class='select'>\n          <i class='caret'></i>\n          <select class='form-control' id='support_category' name='category'>\n            <option value=''>" + t(I18n.t("forms.choose_option")) + "</option>\n            <option value='ideas'>" + t(I18n.t("contact.topics.ideas")) + "</option>\n            <option value='support'>" + t(I18n.t("contact.topics.support")) + "</option>\n            <option value='other'>" + t(I18n.t("contact.topics.other")) + "</option>\n          </select>\n        </div>\n      </div>\n      <div class='form-group'>\n        <label for='support_message'>" + t(I18n.t("forms.labels.message")) + "</label>\n        <textarea class='form-control' id='support_message' name='message' placeholder='" + t(I18n.t("contact.message_placeholder")) + "'></textarea>\n      </div>\n      <div class='hidden response-status'></div>\n    </div>\n    <div class='modal-footer'>\n      <a class='js-send-message link link-success'>" + t(I18n.t("buttons.send")) + "</a>\n    </div>\n  </form>\n</div>\n<div class='hidden state state-success'>\n  <div class='modal-alert modal-body modal-success'>\n    <i class='icon-check large'></i>\n    <h3>" + t(I18n.t("contact.success_title")) + "</h3>\n    <p>" + t(I18n.t("contact.success_desc")) + "</p>\n    <br>\n    <div class='btn btn-ghost js-close-modal'>" + t(I18n.t("buttons.accept")) + "</div>\n  </div>\n</div>\n<div class='hidden state state-error'>\n  <div class='modal-alert modal-body modal-danger'>\n    <i class='icon-error large'></i>\n    <h3>" + t(I18n.t("contact.error_title")) + "</h3>\n    <p>" + t(I18n.t("contact.error_desc")) + "</p>\n    <br>\n    <div class='btn btn-ghost js-close-modal'>" + t(I18n.t("buttons.accept")) + "</div>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/ios_options"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='ios-force'>\n  <label for='force-alert'>\n    <input id='force-alert' type='checkbox'>"), e.push("    " + t(I18n.t("actions.ios.checkbox"))), e.push("  </label>\n  <div class='hidden msg'>\n    <div class='user-input'>\n      <div class='action-option' data-darr=''>\n        <label>" + t(I18n.t("actions.ios.label")) + "</label>\n        <select class='form-control' id='ios-option-select' name='options[ios_wakeup]'>"), _.each(Object.keys(I18n.t("actions.ios.options")), function(n) {
                    return e.push("          <option value='" + t(n) + "' data-msg='" + t(I18n.t("actions.ios.messages." + n)) + "'>"), e.push("            " + t(I18n.t("actions.ios.options." + n))), e.push("          </option>"), ""
                }), e.push("        </select>\n      </div>\n    </div>\n    <div class='ios-alert'>\n      <span class='app-name'>Prey</span>\n      <span class='app-msg'></span>\n      <small class='demo-tag'>demo</small>\n      <div class='ios-actions'>\n        <a href='#'>Close</a>\n        <a href='#'>Open</a>\n      </div>\n    </div>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/main_loader"] = function(t) {
            return function() {
                var t;
                return t = [], t.push("<div class='display-table'>\n  <div class='display-cell in-middle is-center'>\n    <div class='loader xlarge'></div>\n    <div class='logotipo'></div>\n  </div>\n</div>"), t.join("\n").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/onboarding"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='hidden whats-new-modal'>\n  <div class='whats-new-content'>\n    <div id='tourText'></div>\n    <div id='tourButtons'>\n      <a class='btn btn-primary' id='tourPrev' href='#'>"), e.push("        " + t(I18n.t("onboarding.buttons.prev"))), e.push("      </a>\n      <a class='btn btn-primary' id='tourNext' href='#'>"), e.push("        " + t(I18n.t("onboarding.buttons.next"))), e.push("      </a>\n      <a class='btn btn-primary hidden' id='tourFinish' href='#'>"), e.push("        " + t(I18n.t("onboarding.buttons.finish"))), e.push("      </a>\n      <a class='btn btn-primary hidden' id='tourStart' href='#'>"), e.push("        " + t(I18n.t("onboarding.buttons.start"))), e.push("      </a>\n    </div>\n  </div>\n  <button class='close-whats-new'>Close Menu</button>\n  <button class='btn btn-link set-show-again'>" + t(I18n.t("onboarding.buttons.show_again")) + "</button>\n  <div class='morph-shape' id='morph-shape' data-morph-open='M0,101L0,0c0,0,191.812-25.27,494.714-25.27C783.689-25.27,999,0,999,0v101H0z'>\n    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewbox='0 0 1000 100' preserveaspectratio='none'>\n      <path d='M0,101L0,0c0,0,191.812,97.833,494.714,97.833C783.689,97.833,999,0,999,0v101H0z'></path>\n    </svg>\n  </div>\n</div>\n<div class='hidden open-whats-new'>\n  <a class='whats-new-trigger'>"), e.push("    " + t(I18n.t("onboarding.buttons.psst"))), e.push("  </a>\n  <a class='close-button close-whats-new-alert'></a>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/overdue"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<content class='primary'>\n  <div class='empty-view'>\n    <div class='empty-content'>\n      <div class='error'>\n        <div class='feathers-top'></div>\n        <i class='icon-account'>\n          <i class='icon-forbidden text-danger'></i>\n        </i>\n        <h3>" + t(I18n.t("messages.accounts.billing.payment_overdue_title")) + "</h3>\n        <p>" + t(I18n.t("messages.accounts.billing.payment_overdue")) + "</p>\n        <p class='lead'>" + t(I18n.t("misc.step_n", {
                    number: 1
                })) + "</p>\n        <div>\n          <a class='btn btn-primary' id='overdue-change-credit-card'>"), e.push("            " + t(I18n.t("subscriptions.edit.update_credit_card"))), e.push("          </a>\n        </div>\n        <br>\n        <p class='lead'>" + t(I18n.t("misc.step_n", {
                    number: 2
                })) + "</p>\n        <div>\n          <a class='btn btn-primary' id='overdue-reenable-account' href='/subscription/reenable'>"), e.push("            " + t(I18n.t("subscriptions.edit.reenable_account"))), e.push("          </a>\n        </div>\n        <p>\n          <br>"), e.push("          " + t(I18n.t("common.or_you_can"))), e.push("          <a id='overdue-cancel-subscription' href='#' data-disable-with=\"" + t(I18n.t("cancel_subscription.button")) + " <i class='loader xsmall'></i>\">"), e.push("            " + t(I18n.t("cancel_subscription.button"))), e.push("          </a>\n        </p>\n        <div class='feathers-bottom'></div>\n      </div>\n    </div>\n  </div>\n</content>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/police/confirmation"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='state state-default'>\n  <form>\n    <div class='modal-body'>\n      <p class='lead'>"), e.push("        " + t(I18n.t("police.needed_info_tagline"))), e.push("      </p>\n      <p class='text-warning'>\n        <i class='icon-alert-sign'></i>"), e.push("        " + t(I18n.t("police.reminder_report"))), e.push("      </p>\n      <p class='text-warning'>\n        <i class='icon-alert-sign'></i>"), e.push("        " + t(I18n.t("police.reminder_info"))), e.push("      </p>\n      <hr>\n      <div class='form-group'>\n        <label for='case_institution'>"), e.push("          " + t(I18n.t("police.report.institution"))), e.push("          <span class='error'>*</span>\n        </label>\n        <div class='select'>\n          <i class='caret'></i>\n          <select class='form-control' id='case_institution' name='police_report[institution]' tabindex='1'></select>\n        </div>\n      </div>\n      <div class='form-group hidden' id='regions'>\n        <label for='case_region'>"), e.push("          " + t(I18n.t("police.report.region"))), e.push("          <span class='error'>*</span>\n        </label>\n        <div class='select'>\n          <i class='caret'></i>\n          <select class='form-control' id='case_region' name='police_report[region]' tabindex='2'>\n            <option value=''>"), e.push("              " + t(I18n.t("police.report.select_region"))), e.push("            </option>\n          </select>\n        </div>\n      </div>\n      <div class='form-group hidden' id='locations'>\n        <label for='case_unit'>"), e.push("          " + t(I18n.t("police.report.unit"))), e.push("          <span class='error'>*</span>\n        </label>\n        <div class='select'>\n          <i class='caret'></i>\n          <select class='form-control' id='case_unit_id' name='police_report[unit_id]' tabindex='3'></select>\n        </div>\n      </div>\n      <div class='form-group-col'>\n        <div class='form-group'>\n          <label for='case_loss_date'>"), e.push("            " + t(I18n.t("police.report.loss_date"))), e.push("            <span class='error'>*</span>\n          </label>\n          <input class='form-control' id='case_loss_date' name='police_report[loss_date]' tabindex='4' type='text' placeholder='dd/mm/aaaa'>\n        </div>\n        <div class='form-group'>\n          <label for='case_assigned_number'>"), e.push("            " + t(I18n.t("police.report.assigned_number"))), e.push("            <span class='error'>*</span>\n          </label>\n          <input class='form-control' id='case_assigned_number' name='police_report[assigned_number]' tabindex='5' type='text' value='" + t(this.assigned_number) + "'>\n        </div>\n      </div>\n      <div class='form-group-col'>\n        <div class='form-group'>\n          <label for='name'>"), e.push("            " + t(I18n.t("police.report.name"))), e.push("            <span class='error'>*</span>\n          </label>\n          <input class='form-control' id='name' name='police_report[name]' tabindex='6' type='text'>\n        </div>\n        <div class='form-group'>\n          <label for='last_name'>"), e.push("            " + t(I18n.t("police.report.last_name"))), e.push("            <span class='error'>*</span>\n            <small>" + t(I18n.t("police.report.required_for_confirmation")) + "</small>\n          </label>\n          <input class='form-control' id='last_name' name='police_report[last_name]' tabindex='7' type='text' value=''>\n        </div>\n      </div>\n      <div class='form-group-col'>\n        <div class='form-group'>\n          <label for='identification_number'>"), e.push("            " + t(I18n.t("police.report.identification_number"))), e.push("            <span class='error'>*</span>\n            <small>" + t(I18n.t("police.report.identification_number_hint")) + "</small>\n          </label>\n          <input class='form-control' id='identification_number' name='police_report[identification_number]' tabindex='8' type='text' placeholder='15555555-K'>\n        </div>\n        <div class='form-group'>\n          <label for='phone'>"), e.push("            " + t(I18n.t("police.report.phone"))), e.push("            <span class='error'>*</span>\n          </label>\n          <input class='form-control' id='phone' name='police_report[phone]' tabindex='9' type='text' value=''>\n        </div>\n      </div>\n      <div class='form-group'>\n        <label class='checkbox'>"), this.authorized ? e.push("          <input id='authorized' type='checkbox' name='police_report[authorized]' checked='true' tabindex='10'>") : e.push("          <input id='authorized' type='checkbox' name='police_report[authorized]' tabindex='10'>"), e.push("          <span></span>"), e.push("          " + t(I18n.t("police.report.authorization"))), e.push("        </label>\n      </div>\n      <p>"), e.push("        " + t(I18n.t("police.report.accept_description"))), e.push("      </p>\n    </div>\n    <div class='modal-footer'>\n      <button class='js-police-connect link link-success' data-gtm-event='accept-link-to-police'>"), e.push("        " + t(I18n.t("buttons.accept"))), e.push("      </button>\n      <button class='js-police-cancel link link-danger' data-gtm-event='abandon-link-to-police'>"), e.push("        " + t(I18n.t("buttons.cancel"))), e.push("      </button>\n    </div>\n  </form>\n</div>\n<div class='hidden state state-success'>\n  <div class='modal-alert modal-body modal-success'>\n    <i class='icon-check large'></i>\n    <h3>"), e.push("      " + t(I18n.t("police.success.title"))), e.push("    </h3>\n    <p>"), e.push("      " + t(I18n.t("police.success.desc", {
                    email: current_account.get("current_user").email
                }))), e.push("    </p>\n    <br>\n    <div class='btn btn-ghost js-close-modal'>"), e.push("      " + t(I18n.t("buttons.accept"))), e.push("    </div>\n  </div>\n</div>\n<div class='hidden state state-error'>\n  <div class='modal-alert modal-body modal-danger'>\n    <i class='icon-error large'></i>\n    <h3>" + t(I18n.t("police.error.title")) + "</h3>\n    <p>" + t(I18n.t("police.error.desc")) + "</p>\n    <br>\n    <div class='btn btn-ghost js-close-modal'>"), e.push("      " + t(I18n.t("buttons.accept"))), e.push("    </div>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/police/recommendation"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-alert modal-body'>\n  <i class='icon-connect large'></i>\n  <h3>" + t(I18n.t("police.recomendation.title")) + "</h3>\n  <p>\n    <strong>" + t(I18n.t("police.recomendation.tagline")) + "</strong>\n  </p>\n  <h4 class='in-modal text-warning'>\n    <i class='icon-alert-sign'></i>"), e.push("    " + t(I18n.t("police.important"))), e.push("  </h4>\n  <p class='text-warning'>"), e.push("    " + t(I18n.t("police.reminder_report"))), e.push("  </p>\n  <p>"), e.push("    " + t(I18n.t("police.recomendation.hint"))), e.push("    <a class='js-open-police-report small' href='#'>"), e.push("      " + t(I18n.t("police.recomendation.help"))), e.push("    </a>\n  </p>\n</div>\n<div class='modal-footer'>\n  <button class='js-police-connect link link-success' data-gtm-event='accept-recomendation'>"), e.push("    " + t(I18n.t("buttons.accept"))), e.push("  </button>\n  <button class='js-police-cancel link link-danger' data-gtm-event='dont-accept-recomendation'>"), e.push("    " + t(I18n.t("buttons.cancel"))), e.push("  </button>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/police/report"] = function(t) {
                return function() {
                        var t, e;
                        return t = window.HAML.cleanValue, e = [], e.push("<div class='state state-default'>\n  <form>\n    <div class='modal-body'>\n      <p class='lead'>"), e.push("        " + t("" + current_account.attributes.current_user.name + ",")), e.push("        " + t(I18n.t("police.report_help.tagline"))), e.push("        <ul>\n          <li>" + t("" + I18n.t("police.report_help.identification_number") + ".") + "</li>\n          <li>" + t("" + I18n.t("police.report_help.names") + ".") + "</li>\n          <li>" + t("" + I18n.t("police.report_help.serial_number") + ".") + "</li>\n          <li>" + t("" + I18n.t("police.report_help.type") + ".") + "</li>\n          <li>" + t("" + I18n.t("police.report_help.color") + ".") + "</li>\n          <li>" + t("" + I18n.t("police.report_help.value") + ".") + "</li>\n          <li>" + t("" + I18n.t("police.report_help.model") + ".") + "</li>\n          <li>" + t("" + I18n.t("police.report_help.desc") + ".") + "</li>\n          <li>" + t("" + I18n.t("police.report_help.loss_place") + ".") + "</li>\n        </ul>\n      </p>\n    </div>\n    <div class='modal-footer'>\n      <button class='js-close-modal link link-success' data-gtm-event='finish-link-to-police'>\n        OK\n      </button>\n    </div>\n  </form>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")}.call(window.HAML.context(t))
}
}.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/account"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<h4 class='pull-right'>\n  <small>\n    " + this.used + " / " + this.total), e.push("    " + t(I18n.t("navigation.main.devices"))), e.push("  </small>\n</h4>\n<h4 id='plan-name'>"), e.push("  " + t(I18n.t("plans.current"))), e.push("  :"), e.push("  " + t(I18n.t("plans.names." + this.plan))), e.push("</h4>\n<div class='progress progress-sm'>\n  <div class='progress-bar progress-bar-success' style='width: " + t(this.average) + "%'></div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/billing_info"] = function(t) {
            return function() {
                var t, e, n;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='billing-block'>\n  <div class='billing-container'>\n    <div class='billing-data'>"), "overdue" === current_account.get("state") ? (e.push("      <h5 class='strong'>\n        <i class='icon-warning-sign'></i>"), e.push("        " + t(I18n.t("subscriptions.overdue.title"))), e.push("      </h5>\n      <div>" + t(I18n.t("subscriptions.overdue.desc")) + "</div>")) : this.next_payment_on && (e.push("      <h5 class='strong'>" + t(I18n.t("billing.schedule")) + "</h5>\n      <div>"), e.push("        " + t(I18n.t("billing.will_billed", {
                    fee: I18n.toCurrency(this.fee),
                    date: I18n.l("date.formats.long", this.next_payment_on)
                }))), e.push("      </div>")), e.push("    </div>"), this.next_payment_on && (e.push("    <div class='billing-schedule'>"), n = new Date(Date.parse(this.next_payment_on)), e.push("      <div class='month'>" + t(I18n.strftime(n, "%b")) + "</div>\n      <div class='day'>" + t(this.next_payment_on.substr(8, 7)) + "</div>\n    </div>")), e.push("  </div>\n</div>\n<div class='billing-block'>\n  <div class='billing-container'>\n    <div class='billing-data'>\n      <h5 class='strong'>" + t(I18n.t("subscriptions.edit.update_credit_card")) + "</h5>\n      <div>" + t(I18n.t("subscriptions.edit.update_credit_card_info")) + "</div>\n      <a class='js-update-cc' href=''>" + t(I18n.t("subscriptions.edit.find_out_credit_cart_update")) + "</a>\n    </div>\n    <div class='billing-creditcard'></div>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/cancel_subscription"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div id='cancel-subscription'>\n  <div class='state state-default'>\n    <div class='modal-body'>\n      <div class='hidden' id='devices-for-deletion'>\n        <p class='keep-devices text-warning'>\n          <i class='icon-warning-sign'></i>"), e.push("          " + t(I18n.t("messages.subscriptions.keep_devices"))), e.push("        </p>\n        <ul class='device-list-cancelation js-device-list-selectable nav'></ul>\n      </div>\n      <p>" + t(I18n.t("v1.account.subscription.cancel_reasons.description")) + "</p>\n      <br>\n      <div class='select'>\n        <i class='caret'></i>\n        <select class='form-control' name='unsubscribe-reason'>"), _.each(cancel_reasons, function(n) {
                    return e.push("          <option value='" + t(n[1]) + "'>"), e.push("            " + t(n[0])), e.push("          </option>"), ""
                }), e.push("        </select>\n      </div>\n      <div class='form-control-error hidden'></div>\n      <div class='hidden response-status'></div>\n    </div>\n    <div class='modal-footer'>\n      <button class='js-cancel-subscription js-loader link link-danger' type='submit' data-disable-with=\"<i class='loader small'></i>\" data-gtm-event='cancel-subscription'>"), e.push("        " + t(I18n.t("v1.account.subscription.cancel"))), e.push("      </button>\n    </div>\n  </div>\n  <div class='hidden state state-confirm'>\n    <div class='modal-body'>\n      <p class='js-device_deletion_alert'>\n        <i class='icon-info-sign'></i>\n      </p>\n      <ul class='device-list-cancelation js-device-list-confirmation nav'></ul>\n      <p class='text-warning'>\n        <i class='icon-warning-sign'></i>"), e.push("        " + t(I18n.t("modals.action_undoable"))), e.push("      </p>\n    </div>\n    <div class='modal-footer'>\n      <button class='js-confirm js-loader link link-danger' type='submit' data-disable-with=\"<i class='loader small'></i> \">"), e.push("        " + t(I18n.t("v1.account.subscription.cancel"))), e.push("      </button>\n      <button class='js-cancel link'>"), e.push("        " + t(I18n.t("buttons.cancel"))), e.push("      </button>\n    </div>\n  </div>\n  <div class='hidden state state-error'>\n    <div class='modal-alert modal-body modal-danger'>\n      <i class='icon-warning-sign large'></i>\n      <h3></h3>\n      <p></p>\n      <br>\n      <div class='btn btn-ghost js-close-modal'>" + t(I18n.t("buttons.accept")) + "</div>\n    </div>\n  </div>\n  <div class='hidden state state-success'>\n    <div class='modal-alert modal-body modal-success'>\n      <i class='icon-check large'></i>\n      <h3>" + t(I18n.t("messages.subscriptions.cancel_success_title")) + "</h3>\n      <p>" + t(I18n.t("messages.subscriptions.cancel_success_desc")) + "</p>\n      <br>\n      <div class='btn btn-ghost js-close-modal'>" + t(I18n.t("buttons.accept")) + "</div>\n    </div>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/change_plan"] = function(t) {
            return function() {
                var t, e, n, i;
                return t = window.HAML.cleanValue, e = [], n = Prey.Views.Settings.Storage.current_plan.attributes, i = Prey.Views.Settings.Storage.subscription.get("interval"), e.push("<div class='modal-alert modal-body'>\n  <button class='close js-hide-modal' type='button'>&times;</button>\n  <div class='state state-default'>\n    <i class='icon-pro large text-warning'></i>\n    <h3>" + t(I18n.t("subscriptions.upgrade_to", {
                    name: this.name
                })) + "</h3>\n    <p>\n      <big>" + t(I18n.t("subscriptions.bill_will_change", {
                    interval: I18n.t("plans.intervals." + i),
                    from: I18n.toCurrency(n.monthly_fee),
                    to: I18n.toCurrency(this.monthly_fee)
                })) + "</big>\n    </p>\n    <p>" + t(I18n.t("subscriptions.upgrade_charges", {
                    name: this.name,
                    amount: I18n.toCurrency(this.new_amount),
                    interval: I18n.t("plans.intervals." + i)
                })) + "</p>\n    <div class='response-status-default'></div>\n  </div>\n  <div class='hidden state state-success'>\n    <i class='icon-check large'></i>\n    <h3>" + t(I18n.t("messages.subscriptions.upgrade_success_title")) + "</h3>\n    <div class='btn btn-ghost js-close-modal'>" + t(I18n.t("buttons.accept")) + "</div>\n    <div class='response-status-success'></div>\n  </div>\n</div>\n<div class='modal-footer'>\n  <button class='js-change-plan link link-success submit' type='submit' data-disable-with=\"<i class='loader small'></i>\" data-gtm-event='upgrade-plan'>"), e.push("    " + t(I18n.t("subscriptions.confirm.upgrade"))), e.push("  </button>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/close_account"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='state state-default'>\n  <div class='modal-alert modal-body'>\n    <button class='close js-hide-modal' type='button'>&times;</button>\n    <i class='icon-warning-sign large text-danger'></i>\n    <h3>" + t(I18n.t("messages.accounts.close_title")) + "</h3>\n    <p>"), e.push("      " + t(I18n.t("messages.accounts.close_desc"))), e.push("      <span class='strong text-danger'>" + t(I18n.t("messages.accounts.close_warning")) + "</span>\n    </p>\n    <label class='checkbox' data-gtm-event='close-account-check'>\n      <input type='checkbox'>\n      <span></span>"), e.push("      " + t(I18n.t("messages.accounts.close_confirm"))), e.push("    </label>\n  </div>\n  <div class='modal-footer'>\n    <a class='hidden link link-danger' href='/users/" + t(current_account.get("current_user").id) + "' rel='nofollow' data-method='delete' data-remote='true' data-disable-with=\"<i class='loader small'></i>\" data-gtm-event='close-account-confirm'>"), e.push("      " + t(I18n.t("messages.accounts.close_action"))), e.push("    </a>\n    <button class='js-hide-modal link' data-gtm-event='close-account-cancel'>"), e.push("      " + t(I18n.t("buttons.cancel"))), e.push("    </button>\n  </div>\n</div>\n<div class='hidden state state-error'>\n  <div class='modal-alert modal-body modal-danger'>\n    <i class='icon-warning-sign large'></i>\n    <h3>Titulo</h3>\n    <p>Descripción</p>\n    <br>\n    <div class='btn btn-ghost js-close-modal'>" + t(I18n.t("buttons.accept")) + "</div>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/invoice"] = function(t) {
            return function() {
                var t, e, n;
                return t = window.HAML.cleanValue, e = [], n = Prey.Views.Settings.Storage.subscription.get("client"), e.push("<div class='invoice' id='invoice'>\n  <div class='modal-body text-center'>\n    <button class='close js-hide-modal' type='button'>&times;</button>\n    <div class='invoice-block'>\n      <div class='invoice-logotype'></div>\n      <h3>" + t(I18n.t("invoice.number", {
                    id: this.id
                })) + "</h3>\n    </div>\n    <div class='invoice-block'>\n      <div class='strong'>" + t(n.name) + "</div>\n      <div class='small'>" + t(n.email) + "</div>\n      <div class='small'>" + n.address + ", " + n.country + "</div>\n    </div>\n    <div class='invoice-block'>\n      <div class='invoice-table'>\n        <div class='invoice-cell'>\n          <div class='strong'>" + t(I18n.t("time.date")) + "</div>\n          <div class='small'>" + t(I18n.l("date.formats.long", this.created_at)) + "</div>\n        </div>\n        <div class='invoice-cell'>\n          <div class='strong'>" + t(I18n.t("misc.description")) + "</div>\n          <div class='small'>" + t(this.description) + "</div>\n        </div>\n        <div class='invoice-cell'>\n          <h2>" + this.currency + " " + I18n.toCurrency(this.amount) + "</h2>\n        </div>\n      </div>\n    </div>\n    <div class='invoice-block'>\n      <div class='invoice-isotype'></div>\n      <div class='strong'>Fork Ltd.</div>\n      <div class='small'>1010 Miramar Tower, 132 Nathan Road</div>\n      <div class='small'>Kowoloon, Hong Kong (999077)</div>\n    </div>\n  </div>\n  <div class='modal-footer text-center'>\n    <div class='invoice-questions small'>\n      <div>" + t(I18n.t("invoice.questions")) + "</div>\n      <div class='strong'>"), e.push("        " + t(I18n.t("help.contact_us"))), e.push("        <a class='strong' href='mailto: sales@preyproject.com'>sales@preyproject.com</a>\n      </div>\n    </div>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/manage_users"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<header class='panel-header'>\n  <div class='page-content'>\n    <a class='btn btn-back btn-hover js-back-to-aside' href='#'>\n      <i class='icon-back'></i>\n    </a>\n    <h1>\n      <i class='icon-user'></i>"), e.push("      " + t(I18n.t("navigation.settings.users"))), e.push("    </h1>\n  </div>\n</header>\n<article class='nano panel-body'>\n  <div class='nano-content overthrow'>\n    <div class='page-content' id='manage-users-container'></div>\n  </div>\n</article>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/modals/account_status"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-alert modal-body'>\n  <div class='state state-default'>\n    <i class='loader medium'></i>\n    <h3>" + t(I18n.t("subscriptions.check_account_status")) + "</h3>\n    <div class='msg'></div>\n  </div>\n</div>\n<div class='hidden modal-footer'>\n  <button class='alert-confirm link link-success' type='submit' data-disable-with=\"<i class='loader small'></i> \">"), e.push("    " + t(I18n.t("common.y"))), e.push("  </button>\n  <button class='alert-cancel link'>"), e.push("    " + t(I18n.t("common.n"))), e.push("  </button>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/modals/confirm_downgrade"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-alert modal-body'>\n  <button class='close js-hide-modal' type='button'>&times;</button>\n  <div class='state state-default text-danger'>\n    <i class='icon-warning-sign large'></i>\n    <h3>" + t(I18n.t("downgrade.confirm_title")) + "</h3>\n    <p>" + t(I18n.t("downgrade.confirm_content")) + "</p>\n  </div>\n</div>\n<div class='modal-footer'>\n  <button class='alert-confirm link link-danger' type='submit' data-disable-with=\"<i class='loader small'></i> \" data-gtm-event='downgrade-plan'>"), e.push("    " + t(I18n.t("downgrade.confirm_button"))), e.push("  </button>\n  <button class='alert-cancel link'>"), e.push("    " + t(I18n.t("buttons.cancel"))), e.push("  </button>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/modals/confirm_period"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-alert modal-body'>\n  <h3>" + t(I18n.t("subscriptions.will_subscribe_to")) + "</h3>\n  <p class='lead'>" + t(I18n.t("subscriptions.will_subscribe_plan", {
                    name: this.name
                })) + "</p>\n  <div class='radio-options'>\n    <label class='radio' data-term='monthly'>\n      <input class='checkbox' name='billing-period' type='radio' value='mensual' checked>\n      <span></span>"), e.push("      " + t(I18n.toCurrency(this.monthly_fee))), e.push("      " + I18n.t("plans.usd_month") + "\n    </label>\n    <label class='radio' data-term='annual'>\n      <input class='checkbox' name='billing-period' type='radio' value='anual'>\n      <span></span>"), e.push("      " + t(I18n.toCurrency(this.yearly_fee))), e.push("      " + t(I18n.t("plans.usd_year"))), e.push("      " + t(I18n.t("plans.anual_discount_desc"))), e.push("    </label>\n  </div>\n</div>\n<div class='modal-footer'>\n  <button class='js-signup-plan-choose link link-success' type='submit' data-disable-with=\"<i class='loader small'></i> \">"), e.push("    " + t(I18n.t("buttons.continue"))), e.push("  </button>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/modals/confirm_user_delete"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-alert modal-body'>"), current_account.get("current_user").id !== this.id ? e.push("  <div class='state state-default text-danger'>\n    <h3>" + t(I18n.t("user.delete_confirm.confirm_title")) + "</h3>\n    <p>" + t(I18n.t("user.delete_confirm.confirm_content", {
                    name: this.name
                })) + "</p>\n  </div>\n  <div class='hidden state state-loading'>\n    <i class='loader medium'></i>\n    <h3>" + t(I18n.t("user.delete_confirm.removing_user")) + "</h3>\n    <div class='msg'></div>\n  </div>") : e.push("  <div class='state state-default text-danger'>\n    <i class='icon-warning-sign large'></i>\n    <h3>" + t(I18n.t("user.delete_confirm.confirm_title_alert")) + "</h3>\n    <p>" + t(I18n.t("user.delete_confirm.confirm_content_alert", {
                    name: this.name
                })) + "</p>\n  </div>\n  <div class='hidden state state-loading'>\n    <i class='loader medium'></i>\n    <h3>" + t(I18n.t("user.delete_confirm.removing_user_alert")) + "</h3>\n    <div class='msg'></div>\n  </div>"), e.push("</div>\n<div class='modal-footer'>"), current_account.get("current_user").id !== this.id ? (e.push("  <button class='alert-confirm link link-danger' type='submit' data-disable-with=\"<i class='loader small'></i> \" data-gtm-event='downgrade-plan'>"), e.push("    " + t(I18n.t("user.delete_confirm.confirm_button"))), e.push("  </button>")) : (e.push("  <button class='alert-confirm link link-danger' type='submit' data-disable-with=\"<i class='loader small'></i> \" data-gtm-event='downgrade-plan'>"), e.push("    " + t(I18n.t("user.delete_confirm.confirm_button_alert"))), e.push("  </button>")), e.push("  <button class='alert-cancel link'>"), e.push("    " + t(I18n.t("buttons.cancel"))), e.push("  </button>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/modals/csv_confirmation"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-alert modal-body'>\n  <div class='state state-default'>\n    <h3>" + t(I18n.t("events.csv_verification_title", {
                    info: this.devices
                })) + "</h3>\n    <h4>" + t(I18n.t("events.csv_verification_text", {
                    info: this.email
                })) + "</h4>\n  </div>\n  <div class='hidden state state-accept'>\n    <h4>" + t(I18n.t("events.csv_sent")) + "</h4>\n  </div>\n  <div class='hidden state state-error'>\n    <h4>" + t(I18n.t("events.csv_fail")) + "</h4>\n  </div>\n  <div class='hidden state state-loader'>\n    <i class='loader medium'></i>\n  </div>\n</div>\n<div class='modal-footer'>\n  <button class='alert-confirm link link-success' type='submit'>"), e.push("    " + t(I18n.t("buttons.accept"))), e.push("  </button>\n  <button class='alert-cancel link'>"), e.push("    " + t(I18n.t("buttons.cancel"))), e.push("  </button>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/modals/custom_plan_error"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-alert modal-body'>\n  <button class='close js-hide-modal' type='button'>&times;</button>\n  <i class='icon-alert large'></i>\n  <h3>" + t(I18n.t("custom_plan_errors.title")) + "</h3>\n  <p>" + t(I18n.t("custom_plan_errors.desc")) + "</p>\n</div>\n<div class='modal-footer'>\n  <button class='alert-confirm js-request-contact link'>"), e.push("    " + t(I18n.t("contact.title"))), e.push("  </button>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/modals/downgrade_error"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-alert modal-body modal-danger'>\n  <button class='close js-hide-modal' type='button'>&times;</button>\n  <i class='icon-error large'></i>\n  <h3>" + t(I18n.t("downgrade.error_title")) + "</h3>\n  <p>" + t(I18n.t("downgrade.error_desc")) + "</p>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/modals/pro_congrats"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-alert modal-body modal-primary'>\n  <button class='close js-hide-modal' type='button'>&times;</button>\n  <div class='pro-label'>PRO</div>\n  <h3>" + t(I18n.t("messages.subscriptions.payment_success.title")) + "</h3>\n  <div class='pro-message'>"), e.push("    " + t(I18n.t("messages.subscriptions.payment_success.thanks", {
                    slots: this.total
                }))), e.push("  </div>\n  <br>\n  <br>\n  <div class='features'>\n    <div class='feature'>\n      <div class='feature-tracking-reversed'></div>\n      <p class='lead'>" + t(I18n.t("messages.subscriptions.pro_features.tracking_title")) + "</p>\n    </div>\n    <div class='feature'>\n      <div class='feature-wipe-reversed'></div>\n      <p class='lead'>" + t(I18n.t("messages.subscriptions.pro_features.wipe_title")) + "</p>\n    </div>\n    <div class='feature'>\n      <div class='feature-reports-reversed'></div>\n      <p class='lead'>" + t(I18n.t("messages.subscriptions.pro_features.reports_title")) + "</p>\n    </div>\n    <div class='feature'>\n      <div class='feature-support-reversed'></div>\n      <p class='lead'>" + t(I18n.t("messages.subscriptions.pro_features.support_title")) + "</p>\n    </div>\n  </div>\n  <br>\n  <a class='btn btn-ghost js-close-modal' href=''>" + t(I18n.t("buttons.accept")) + "</a>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/modals/pro_features"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-body'>\n  <div class='features'>\n    <div class='feature'>\n      <div class='feature-tracking'></div>\n      <h3>" + t(I18n.t("messages.subscriptions.pro_features.tracking_title")) + "</h3>\n      <p>" + t(I18n.t("messages.subscriptions.pro_features.tracking_desc")) + "</p>\n    </div>\n    <div class='feature'>\n      <div class='feature-wipe'></div>\n      <h3>" + t(I18n.t("messages.subscriptions.pro_features.wipe_title")) + "</h3>\n      <p>" + t(I18n.t("messages.subscriptions.pro_features.wipe_desc")) + "</p>\n    </div>\n    <div class='feature'>\n      <div class='feature-reports'></div>\n      <h3>" + t(I18n.t("messages.subscriptions.pro_features.reports_title")) + "</h3>\n      <p>" + t(I18n.t("messages.subscriptions.pro_features.reports_desc")) + "</p>\n    </div>\n    <div class='feature'>\n      <div class='feature-support'></div>\n      <h3>" + t(I18n.t("messages.subscriptions.pro_features.support_title")) + "</h3>\n      <p>" + t(I18n.t("messages.subscriptions.pro_features.support_desc")) + "</p>\n    </div>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/modals/rollback"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-alert modal-body'>\n  <i class='icon-warning-sign large'></i>\n  <h3>" + t(I18n.t("modals.rollback.title")) + "</h3>\n  <p>" + t(I18n.t("modals.rollback.description")) + "</p>\n  <small>" + t(I18n.t("modals.rollback.hint")) + "</small>\n</div>\n<div class='modal-footer'>\n  <a class='link link-danger' href='/looks/switch_to/v1' data-dont-push='true' data-gtm-event='switch-to-l1'>"), e.push("    " + t(I18n.t("buttons.switch"))), e.push("  </a>\n  <a class='js-hide-modal link' href='#'>"), e.push("    " + t(I18n.t("buttons.cancel"))), e.push("  </a>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/modals/terms"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-body'>"), e.push("  " + t(I18n.t("payment_terms.body_html"))), e.push("</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/modals/upgrade_error"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-alert modal-body modal-danger'>\n  <button class='close js-hide-modal' type='button'>&times;</button>\n  <i class='icon-error large'></i>\n  <h3>" + t(I18n.t("upgrade.error_title")) + "</h3>\n  <p>" + t(I18n.t("upgrade.error_desc")) + "</p>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/modals/user_form"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='modal-alert modal-body'>\n  <i class='icon-warning-sign large'></i>\n  <h3>User</h3>\n</div>\n<div class='modal-footer'>\n  <a class='link link-danger' href='#' data-dont-push='true' data-gtm-event='switch-to-l1'>"), e.push("    " + t(I18n.t("buttons.switch"))), e.push("  </a>\n  <a class='js-hide-modal link' href='#'>"), e.push("    " + t(I18n.t("buttons.cancel"))), e.push("  </a>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/modals/user_new"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='hidden state state-default'>\n  <div class='modal-body'></div>\n</div>\n<div class='center-text state state-loading'>\n  <div class='modal-alert modal-body'>\n    <i class='loader medium'></i>\n  </div>\n</div>\n<div class='hidden state state-success'>\n  <div class='modal-alert modal-body modal-success'>\n    <i class='icon-check large'></i>\n    <h3>" + t(I18n.t("user.created_success")) + "</h3>\n    <p>" + t(I18n.t("user.created_success_msg")) + "</p>\n    <br>\n    <div class='btn btn-ghost js-close-modal'>"), e.push("      " + t(I18n.t("buttons.accept"))), e.push("    </div>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/payment_row"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='billing-invoice billing-table-data'>\n  <a class='js-invoice' href=''>"), e.push("    " + t(this.transaction_id)), e.push("  </a>\n</div>\n<div class='billing-date billing-table-data'>"), e.push("  " + t(I18n.l("date.formats.long", this.created_at))), e.push("</div>\n<div class='billing-plan billing-table-data'>"), e.push("  " + t(this.description)), e.push("</div>\n<div class='billing-amount billing-table-data'>"), e.push("  " + t(this.currency)), e.push("  " + t(I18n.toCurrency(this.amount))), e.push("</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/plan"] = function(t) {
            return function() {
                var t, e, n;
                return t = window.HAML.cleanValue, e = [], n = this.name.toLowerCase(), e.push("<div class='plan-name'>\n  <i class='" + ["hexagon", "" + t(n)].sort().join(" ").replace(/^\s+|\s+$/g, "") + "'></i>"), e.push("  " + t(this.name)), e.push("</div>\n<div class='plan-price'>\n  <strong>$" + this.monthly_fee + "</strong>\n  <small>"), e.push("    " + t(I18n.t("plans.usd_month"))), e.push("  </small>\n</div>\n<div class='plan-tagline'>" + t(I18n.t("plans.taglines." + n)) + "</div>\n<div class='plan-limits'>"), e.push("  " + t(I18n.t("plans.up_to", {
                    number: this.device_slots
                }))), e.push("</div>\n<div class='plan-actions'>"), n === current_account.get("plan") || this.alias === current_account.get("plan") ? e.push("  <div class='btn btn-default disabled'>" + t(I18n.t("plans.current")) + "</div>") : e.push("  <button class='btn btn-primary' data-gtm-event='choose-plan-" + t(n) + "'>\n    <span class='name'>" + t(I18n.t("plans.choose")) + "</span>\n    <span class='hidden loader xsmall'></span>\n  </button>"), e.push("</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/price_row"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='plan-name'>\n  <i class='" + ["hexagon", "" + t(this.name.toLowerCase())].sort().join(" ").replace(/^\s+|\s+$/g, "") + "'></i>"), e.push("  " + t(this.name)), e.push("</div>\n<div class='plan-price'>\n  <b>" + t(I18n.toCurrency(this.monthly_fee)) + "</b>\n  <small>" + t(I18n.t("plans.usd_month")) + "</small>\n</div>\n<div class='plan-characteristics'>"), e.push("  " + t(I18n.t("plans.up_to", {
                    number: this.device_slots
                }))), e.push("</div>\n<div class='choose-plan'>"), this.name.toLowerCase() === current_account.get("plan") || this.alias === current_account.get("plan") ? (e.push("  <button class='btn disabled'>"), e.push("    " + t(I18n.t("plans.current"))), e.push("  </button>")) : (e.push("  <button class='btn btn-default'>"), e.push("    " + t(I18n.t("plans.choose"))), e.push("  </button>")), e.push("</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/reenable_account"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='state state-default'>\n  <div class='modal-alert modal-body'>\n    <i class='loader medium'></i>\n    <h3>" + t(I18n.t("messages.subscriptions.credit_card_checking")) + "</h3>\n    <p>" + t(I18n.t("misc.wait_a_moment")) + "</p>\n  </div>\n</div>\n<div class='hidden state state-success'>\n  <div class='modal-alert modal-body modal-success'>\n    <i class='icon-check large'></i>\n    <h3>" + t(I18n.t("messages.subscriptions.credit_card_valid_title")) + "</h3>\n    <p>" + t(I18n.t("messages.subscriptions.credit_card_valid_desc")) + "</p>\n    <br>\n    <div class='btn btn-ghost js-reload-location'>" + t(I18n.t("buttons.accept")) + "</div>\n  </div>\n</div>\n<div class='hidden state state-error'>\n  <div class='modal-alert modal-body modal-danger'>\n    <i class='icon-error large'></i>\n    <h3>" + t(I18n.t("messages.subscriptions.credit_card_invalid_title")) + "</h3>\n    <p>" + t(I18n.t("messages.subscriptions.credit_card_invalid_desc")) + "</p>\n    <br>\n    <div class='btn btn-ghost js-close-modal'>" + t(I18n.t("buttons.accept")) + "</div>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/update_cc"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div id='update-cc'>\n  <div class='modal-body'>\n    <p>"), e.push("      " + t(I18n.t("subscriptions.edit.update_cc_description"))), e.push("      " + t(I18n.t("subscriptions.edit.only_a_minute"))), e.push("    </p>\n    <a class='btn btn-success center-button' href='https://futurepay.worldpay.com/fp/jsp/common/login_shopper.jsp' target='_BLANK'>"), e.push("      " + t(I18n.t("buttons.go_to"))), e.push("    </a>\n    <small class='center-text'>"), e.push("      " + t(I18n.t("subscriptions.edit.edit_cc_description"))), e.push("    </small>\n  </div>\n  <div class='modal-footer'>\n    <div class='video-container'></div>\n    <p class='questions'>"), e.push("      " + t(I18n.t("subscriptions.questions_contact"))), e.push("    </p>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/settings/user"] = function(t) {
                return function() {
                        var t, e;return t = window.HAML.cleanValue, e = [], e.push("<td>" + t(this.email) + "</td>\n<td>\n  <abbr class='timego'>\n    <abbr class='timeago' title='" + t(this.created_at) + "'></abbr>\n  </abbr>\n</td>\n<td>" + t(this.role) + "</td>\n<td>"), e.push("  " + t(this.key)), e.push("</td>\n<td>\n  <a href='/users/" + t(this.id) + "' data-toggle='modal' data-target='#modal-add_user' data-title='Edit'>Edit</a>\n</td>\n<td>\n  <a class='destroy-user' href='#'>\n    <i class='icon icon-uncheck'></i>\n  </a>\n</td>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
}.call(window.HAML.context(t))
}
}.call(this),
    function() {
        null == window.JST && (window.JST = {}), window.JST["v3/templates/upgrade_account"] = function(t) {
            return function() {
                var t, e;
                return t = window.HAML.cleanValue, e = [], e.push("<div class='force-update-cta'>\n  <div class='inner-cta'>\n    <span class='cta-name'>" + t(I18n.t("migration.title")) + "</span>\n    <div class='desc note'>\n      <p>" + t(I18n.t("migration.desc")) + "</p>\n      <a href='" + t(I18n.t("migration.info_url")) + "' target='_blank'>"), e.push("        " + t(I18n.t("migration.know_more"))), e.push("      </a>\n    </div>\n    <button class='btn btn-lg btn-success' data-disable-with=\"<i class='loader small'></i>\">"), e.push("      " + t(I18n.t("migration.button"))), e.push("    </button>\n  </div>\n  <i class='force-update-info icon-info'></i>\n  <div class='doing-update'>\n    <i class='icon-check xlarge'></i>\n    <p>" + t(I18n.t("migration.success")) + "</p>\n  </div>\n</div>"), e.join("\n").replace(/\s([\w-]+)='true'/gm, " $1").replace(/\s([\w-]+)='false'/gm, "").replace(/\s(?:id|class)=(['"])(\1)/gm, "")
            }.call(window.HAML.context(t))
        }
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            n = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        Prey.Models.Account = function(e) {
            function i() {
                return this.isDisabled = t(this.isDisabled, this), this.isOverdue = t(this.isOverdue, this), this.isFlagged = t(this.isFlagged, this), this.account_type = t(this.account_type, this), this.is_free = t(this.is_free, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.url = "/account_info.json", i.prototype.is_free = function() {
                return "free" === this.get("plan")
            }, i.prototype.account_type = function() {
                var t;
                return t = this.is_free() ? "free" : "pro"
            }, i.prototype.isFlagged = function() {
                return this.get("state").match(/flagg/)
            }, i.prototype.isOverdue = function() {
                return "overdue" === this.get("state")
            }, i.prototype.isDisabled = function() {
                return "disabled" === this.get("state")
            }, i.prototype.performUpgrade = function() {
                return (this.get("settings").main || {}).perform_upgrade
            }, i.prototype.performUpgradeNeeded = function() {
                return !this.is_free() && !this.performUpgrade()
            }, i.prototype.haveObsoleteDevices = function(t) {
                var e;
                return e = t.detect(function(t) {
                    return t.get("client_version") <= "0.6.4" ? t : void 0
                }), !_.isEmpty(e)
            }, i
        }(Backbone.Model)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            n = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        Prey.Models.DeviceCache = function(e) {
            function i() {
                return this.is_offline = t(this.is_offline, this), this.is_online = t(this.is_online, this), this.setOffline = t(this.setOffline, this), this.setOnline = t(this.setOnline, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.setOnline = function() {
                return this.set({
                    virtual_status: "online"
                })
            }, i.prototype.setOffline = function() {
                return this.set({
                    virtual_status: "offline"
                })
            }, i.prototype.is_online = function() {
                return "online" === this.get("virtual_status")
            }, i.prototype.is_offline = function() {
                return !this.is_online()
            }, i.prototype.setPingedAt = function() {
                return this.set({
                    pinged_at: Math.round(+new Date / 1e3)
                })
            }, i
        }(Backbone.Model), Prey.Models.Device = function(e) {
            function i() {
                return this.is_offline = t(this.is_offline, this), this.is_online = t(this.is_online, this), this.setOffline = t(this.setOffline, this), this.setOnline = t(this.setOnline, this), this.is_bash = t(this.is_bash, this), this.get_delay_options = t(this.get_delay_options, this), this.renameDevice = t(this.renameDevice, this), this.abortRequestLocation = t(this.abortRequestLocation, this), this.setResetTimer = t(this.setResetTimer, this), this.setStateTimer = t(this.setStateTimer, this), this.requestLocation = t(this.requestLocation, this), this.clearTimers = t(this.clearTimers, this), this.clearResetTimeout = t(this.clearResetTimeout, this), this.clearStateTimeout = t(this.clearStateTimeout, this), this.clearDeviceTimeout = t(this.clearDeviceTimeout, this), this.receiveLocation = t(this.receiveLocation, this), this.getLocation = t(this.getLocation, this), this.getHardwareInfo = t(this.getHardwareInfo, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.urlRoot = function() {
                return "/device"
            }, i.prototype.url = function() {
                return this.id ? "/devices/" + this.id + ".json" : "/devices.json"
            }, i.prototype.getHardwareInfo = function() {
                return this.set({
                    hardware: new Prey.Models.DeviceHardware({
                        device_id: this.id
                    })
                })
            }, i.prototype.getLocation = function() {
                var t, e;
                return t = [this.get("location").lat, this.get("location").lng], e = new Date, window.global_map.geocode(t, function(t) {
                    return function(n) {
                        return t.set({
                            location_address: n,
                            event_updated_at: e.getTime()
                        })
                    }
                }(this))
            }, i.prototype.setCacheTimestamp = function() {
                return this.getCachedModel().set({
                    last_checked_in: this.get("last_checked_in")
                })
            }, i.prototype.receiveLocation = function(t) {
                return this.distanceFromCheckIn(), this.fetch({
                    success: function(e) {
                        return function() {
                            return Debug("LOCATION"), Debug(e.get("last_checked_in")), e.set({
                                location: {
                                    lat: t.info.lat,
                                    lng: t.info.lng,
                                    accuracy: t.info.accuracy,
                                    created_at: e.get("last_checked_in")
                                },
                                event_received_at: t.created_at
                            })
                        }
                    }(this)
                }), this.setOnline()
            }, i.prototype.clearDeviceTimeout = function() {
                return this.set({
                    loading_location: "done"
                }), this.locate_timer ? clearTimeout(this.locate_timer) : void 0
            }, i.prototype.clearStateTimeout = function() {
                return this.state_timer ? clearTimeout(this.state_timer) : void 0
            }, i.prototype.clearResetTimeout = function() {
                return this.reset_timer ? clearTimeout(this.reset_timer) : void 0
            }, i.prototype.clearTimers = function() {
                return this.clearResetTimeout(), this.clearStateTimeout(), this.clearDeviceTimeout()
            }, i.prototype.requestLocation = function(t) {
                return null == t && (t = {}), this.is_bash() ? void 0 : this.request_location_xhr = $.ajax({
                    type: "POST",
                    url: "/devices/" + this.id + "/request_data",
                    data: {
                        target: "location"
                    },
                    beforeSend: function(t) {
                        return function() {
                            t.getCachedModel().setPingedAt(), t.set({
                                loading_location: "connecting"
                            }), t.clearResetTimeout(), t.checkSocket()
                        }
                    }(this),
                    success: function(t) {
                        return function(e, n) {
                            t.distanceFromCheckIn(), t.set({
                                loading_location: "waiting"
                            }), Debug("DEVICE auto location status " + n), t.locate_timer = setTimeout(function() {
                                return t.set({
                                    loading_location: "unreachable"
                                }), t.setOffline(), t.setResetTimer()
                            }, 8e4)
                        }
                    }(this),
                    error: function(t) {
                        return function() {
                            t.locate_timer = setTimeout(function() {
                                return t.setOffline(), t.set({
                                    loading_location: "error"
                                }), t.setResetTimer()
                            }, 2e4)
                        }
                    }(this)
                })
            }, i.prototype.setStateTimer = function() {
                return this.clearStateTimeout(), this.state_timer = setTimeout(function(t) {
                    return function() {
                        return Debug("STATE TIMER "), t.distanceFromCheckIn()
                    }
                }(this), 6e4)
            }, i.prototype.setResetTimer = function() {
                return this.reset_timer = setTimeout(function(t) {
                    return function() {
                        return t.set({
                            loading_location: "done"
                        })
                    }
                }(this), 1e4)
            }, i.prototype.abortRequestLocation = function() {
                return this.request_location_xhr && this.request_location_xhr.readyState > 0 && this.request_location_xhr.readyState < 4 ? this.request_location_xhr.abort() : void 0
            }, i.prototype.renameDevice = function(t) {
                return $.ajax({
                    type: "PUT",
                    url: "/devices/" + this.id + ".json",
                    data: t,
                    success: function(t) {
                        return function(e) {
                            var n;
                            n = new Date, t.set({
                                title: e.title,
                                name: e.title,
                                title_updated_at: n.getTime()
                            })
                        }
                    }(this),
                    error: function() {
                        return function(t) {
                            _.each(t.responseJSON.errors, function(t, e) {
                                return alert("" + e + " " + t[0])
                            })
                        }
                    }(this)
                })
            }, i.prototype.get_delay_options = function() {
                return this.set("delay_options", window.run_intervals()[current_account.account_type()])
            }, i.prototype.distanceFromCache = function() {
                return this.is_bash() ? void 0 : (this.clearStateTimeout(), this.setStateTimer(), Debug("get distance from cache!"))
            }, i.prototype.distanceFromCheckIn = function() {
                return this.fetch({
                    success: function(t) {
                        return function() {
                            return t.distanceFromCache()
                        }
                    }(this)
                })
            }, i.prototype.isTimestampChanged = function() {
                var t, e;
                return Debug("comparing timestamps with checked devices"), Debug("" + this.id + " added to list checked_devices"), Debug("current_device timestamp " + this.get("last_checked_in")), Debug("checked_device timestamp " + this.cached_model.get("last_checked_in")), t = Date.parse(this.get("last_checked_in")) - Date.parse(this.getCachedModel().get("last_checked_in")), Debug("checked timestamp " + t), e = t / 1e3, Debug("timestamp diff " + e), e >= 80
            }, i.prototype.requestLocationOnTimeout = function() {
                var t;
                return Debug("Check last pinged"), this.getCachedModel().get("pinged_at") ? (t = Math.round(+new Date / 1e3) - this.getCachedModel().get("pinged_at"), Debug("Elapsed time: " + t), this.getCachedModel().setPingedAt(), t >= 60 && this.isTimestampChanged() ? this.requestLocation() : void 0) : void 0
            }, i.prototype.copyState = function() {
                return this.set({
                    virtual_status: this.getCachedModel().get("virtual_status")
                })
            }, i.prototype.getCachedModel = function() {
                var t;
                return (this.cached_model = checked_devices.findWhere({
                    id: this.id
                })) ? this.cached_model : (t = new Prey.Models.DeviceCache({
                    id: this.id,
                    name: this.get("name"),
                    last_checked_in: this.get("last_checked_in")
                }), checked_devices.addModel(t), this.requestLocation(), this.getCachedModel())
            }, i.prototype.is_bash = function() {
                return this.get("client_outdated")
            }, i.prototype.is_node = function() {
                return !this.is_bash() && "Ios" !== this.get("os") && "Android" !== this.get("os")
            }, i.prototype.is_android = function() {
                return "Android" === this.get("os")
            }, i.prototype.is_ios = function() {
                return "Ios" === this.get("os")
            }, i.prototype.displayReportAdvancedOptions = function() {
                return !this.is_ios()
            }, i.prototype.setOnline = function() {
                return this.getCachedModel().setOnline(), this.setCacheTimestamp()
            }, i.prototype.setOffline = function() {
                return this.getCachedModel().setOffline(), this.setCacheTimestamp()
            }, i.prototype.is_online = function() {
                return this.getCachedModel().is_online()
            }, i.prototype.is_offline = function() {
                return this.getCachedModel().is_offline()
            }, i.prototype.excluded_module = function(t) {
                var e;
                return e = _.filter(current_device.get("excluded_module_list"), function(e) {
                    return e === t ? e : void 0
                }), _.any(e)
            }, i.prototype.checkSocket = function() {
                socket.readyState === socket.CLOSED && connect()
            }, i
        }(Backbone.Model), Prey.Models.DeviceStat = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return n(e, t), e.prototype.urlRoot = function() {
                return "/device/stats.json"
            }, e
        }(Backbone.Model)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Models.DeviceHardware = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.urlRoot = function() {
                return "/devices/" + this.get("device_id") + "/formatted_hardware_info.json"
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Models.DeviceModule = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.urlRoot = function() {
                return "/report"
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Models.Event = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.urlRoot = function() {
                return "/events.json"
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Models.Group = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.urlRoot = function() {
                return "/group"
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Models.Payment = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.urlRoot = function() {
                return "/subscription/payments.json"
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Models.Plan = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.yearly_amount = function() {
                var t;
                return t = 12 * this.get("monthly_fee"), t -= .1 * t, this.set({
                    yearly_fee: t
                }), t
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Models.PoliceCase = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.urlRoot = function() {
                return "/devices/" + this.get("device_id") + "/police_case.json"
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            n = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        Prey.Models.Report = function(e) {
            function i() {
                return this.getLocation = t(this.getLocation, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.urlRoot = function() {
                return "/report"
            }, i.prototype.getLocation = function() {
                return window.global_map.geocode(this.get("coords"), function(t) {
                    return function(e) {
                        return t.set({
                            location_address: e
                        })
                    }
                }(this))
            }, i.prototype.google_map_url = function() {
                return "https://www.google.com/maps?q=" + this.get("coords").join(",")
            }, i
        }(Backbone.Model)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Models.Subscription = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.url = function() {
                return "/subscription.json"
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Models.User = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.url = function() {
                return this.id ? "/users/" + this.id + ".json" : "/users.json"
            }, n
        }(Backbone.Model)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            },
            n = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
        Prey.Collections.Devices = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.model = Prey.Models.Device, n.prototype.url = function() {
                return "/devices.json"
            }, n
        }(Backbone.Collection), Prey.Collections.CheckedDevices = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.addModel = function(t) {
                var e;
                return null == t && (t = {}), (e = checked_devices.findWhere({
                    id: t.id
                })) ? e.set(t) : this.add(t)
            }, n
        }(Backbone.Collection), Prey.Collections.DeviceStats = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.model = Prey.Models.DeviceStat, n.prototype.url = function() {
                return "/devices/stats.json"
            }, n
        }(Backbone.Collection), Prey.Collections.DeviceModules = function(t) {
            function i() {
                return this.url = n(this.url, this), this.initialize = n(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return e(i, t), i.prototype.model = Prey.Models.DeviceModule, i.prototype.initialize = function(t) {
                return this.device_id = t.device_id
            }, i.prototype.url = function() {
                return "/devices/" + this.device_id + "/formatted_modules.json"
            }, i
        }(Backbone.Collection), Prey.Collections.DeviceHardware = function(t) {
            function i() {
                return this.url = n(this.url, this), this.initialize = n(this.initialize, this), this.url = n(this.url, this), i.__super__.constructor.apply(this, arguments)
            }
            return e(i, t), i.prototype.url = function() {}, i.prototype.initialize = function(t) {
                return t && t.device_id ? this.device_id = t.device_id : void 0
            }, i.prototype.url = function() {
                return "/devices/" + this.device_id + "/formatted_hardware_info.json"
            }, i
        }(Backbone.Collection), Prey.Collections.DeviceHardwareModified = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n
        }(Prey.Collections.DeviceHardware)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Collections.Events = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.model = Prey.Models.Event, n.prototype.url = function() {
                return "/events"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Collections.Groups = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.model = Prey.Models.Groups, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Collections.Payments = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.model = Prey.Models.Payment, n.prototype.url = function() {
                return "/subscription/payments.json"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Collections.Plans = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.model = Prey.Models.Plan, n.prototype.url = function() {
                return "/subscription/plans.json"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Collections.Reports = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.model = Prey.Models.Report, n.prototype.url = function() {
                return "/devices/" + current_device.get("key") + "/reports.json"
            }, n.prototype.device = function() {
                return this.get("device_id")
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        Prey.Collections.Users = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.model = Prey.Models.User, n.prototype.url = function() {
                return "/users.json"
            }, n
        }(Backbone.Collection)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            },
            n = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
        Prey.Views.FlaggedAlert = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.el = "#account-alerts", n.prototype.events = {
                "click .close": "close"
            }, n.prototype.initialize = function(t) {
                return this.account = t.account
            }, n.prototype.template = function() {
                return JST["v3/templates/account_alerts"](this.account.toJSON())
            }, n.prototype.render = function() {
                return window.current_account.isFlagged() ? ($(this.el).html(this.template()), this.show()) : void 0
            }, n.prototype.close = function() {
                return $(this.el).slideUp("slow"), !1
            }, n.prototype.show = function() {
                return $(this.el).slideDown("slow"), !1
            }, n
        }(Backbone.View), Prey.Views.OverdueAlert = function(t) {
            function i() {
                return this.cancelSubscription = n(this.cancelSubscription, this), this.updateCC = n(this.updateCC, this), this.isCurrent = n(this.isCurrent, this), this.hide = n(this.hide, this), this.render = n(this.render, this), this.handleCurrentView = n(this.handleCurrentView, this), this.template = n(this.template, this), this.initialize = n(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return e(i, t), i.prototype.el = "#overdue", i.prototype.events = {
                "click #overdue-change-credit-card": "updateCC",
                "click #overdue-cancel-subscription": "cancelSubscription",
                "click #overdue-reenable-account": "reenableAccount"
            }, i.prototype.view_for_current = [$("#overdue")], i.prototype.initialize = function(t) {
                return this.subscription = new Prey.Models.Subscription, this.update_cc = new Prey.Views.Settings.UpdateCC, this.status_modal = new Prey.Views.ReenableAccountModal, this.account = t.account, i.__super__.initialize.apply(this, arguments)
            }, i.prototype.template = function(t) {
                return null == t && (t = {}), JST["v3/templates/overdue"](this.account.toJSON())
            }, i.prototype.handleCurrentView = function() {
                return $(".current").removeClass("current"), $(this.el).addClass("current")
            }, i.prototype.render = function(t) {
                return window.overdue_active = !0, this.handleCurrentView(), $(this.el).html(this.template(t)), this.delegateEvents()
            }, i.prototype.hide = function() {
                return window.overdue_active = void 0, $(this.el).removeClass("current")
            }, i.prototype.isCurrent = function() {
                return $(this.el).hasClass("current")
            }, i.prototype.updateCC = function() {
                return this.update_cc.render()
            }, i.prototype.cancelSubscription = function() {
                return $.rails.disableElement($("#overdue-cancel-subscription")), this.cancel_modal = new Prey.Views.Settings.CancellSubscription({}), this.subscription.fetch({
                    success: function(t) {
                        return function() {
                            return t.cancel_modal.subscription = t.subscription, t.cancel_modal.render(), $.rails.enableElement($("#overdue-cancel-subscription")), $("#overdue-cancel-subscription i").remove()
                        }
                    }(this)
                })
            }, i.prototype.reenableAccount = function() {
                return this.status_modal.render(), this.status_modal.delegateEvents(), $.ajax({
                    url: "subscription/reenable",
                    dataType: "json",
                    method: "PUT",
                    success: function(t) {
                        return function(e) {
                            return "error" === e.status ? t.status_modal.displayError() : "success" === e.status ? (t.status_modal.displaySuccess(), setTimeout(function() {
                                return t.status_modal.reloadLocation()
                            }, 3e3)) : void 0
                        }
                    }(this),
                    error: function(t) {
                        return function() {
                            return t.status_modal.displayError()
                        }
                    }(this)
                }), !1
            }, i
        }(Backbone.View), Prey.Views.ReenableAccountModal = function(t) {
            function i() {
                return this.template = n(this.template, this), this.initialize = n(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return e(i, t), i.prototype.el = "#modal", i.prototype.events = {
                "click .js-close-modal": "closeModal",
                "click .js-reload-location": "reloadLocation"
            }, i.prototype.initialize = function() {
                return i.__super__.initialize.apply(this, arguments), this.modal_options = {
                    noheader: !0,
                    modal_name: "close-account",
                    dialog_class: "modal-sm"
                }
            }, i.prototype.template = function() {
                return JST["v3/templates/settings/reenable_account"]()
            }, i.prototype.displaySuccess = function() {
                return this.showState("success")
            }, i.prototype.displayError = function() {
                return this.showState("error")
            }, i.prototype.reloadLocation = function() {
                return window.location = "/"
            }, i
        }(Prey.Extensions.Modal), Prey.Views.DisabledAlert = function(t) {
            function i() {
                return this.isCurrent = n(this.isCurrent, this), this.hide = n(this.hide, this), this.render = n(this.render, this), this.handleCurrentView = n(this.handleCurrentView, this), this.template = n(this.template, this), this.initialize = n(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return e(i, t), i.prototype.el = "#overdue", i.prototype.view_for_current = [$("#overdue")], i.prototype.initialize = function(t) {
                return this.account = t.account, i.__super__.initialize.apply(this, arguments)
            }, i.prototype.template = function(t) {
                return null == t && (t = {}), JST["v3/templates/disabled"](this.account.toJSON())
            }, i.prototype.handleCurrentView = function() {
                return $(".current").removeClass("current"), $(this.el).addClass("current")
            }, i.prototype.render = function(t) {
                return window.overdue_active = !0, this.handleCurrentView(), $(this.el).html(this.template(t)), this.delegateEvents()
            }, i.prototype.hide = function() {
                return window.overdue_active = void 0, $(this.el).removeClass("current")
            }, i.prototype.isCurrent = function() {
                return $(this.el).hasClass("current")
            }, i
        }(Backbone.View)
    }.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            },
            n = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
        Prey.AppLayout = function(t) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return e(n, t), n.prototype.template = "app", n.prototype.regions = {
                    menu: "#main-navigation",
                    content: "main"
                }, n
            }(Backbone.Marionette.Layout), Prey.Views.ApplicationLayout = function(t) {
                function i() {
                    return this.setStateForCurrentDevice = n(this.setStateForCurrentDevice, this), this.addActivityFromEvent = n(this.addActivityFromEvent, this), this.addReportFromEvent = n(this.addReportFromEvent, this), this.eventListener = n(this.eventListener, this), this.setupCurrentAccount = n(this.setupCurrentAccount, this), this.setupLinks = n(this.setupLinks, this), this.initRouter = n(this.initRouter, this), this.setupLayout = n(this.setupLayout, this), this.setupMainLoader = n(this.setupMainLoader, this), this.setupAjax = n(this.setupAjax, this), this.defaultErrorHandler = n(this.defaultErrorHandler, this), this.initialize = n(this.initialize, this), this.enableFreqForm = n(this.enableFreqForm, this), this.submitDeviceDelay = n(this.submitDeviceDelay, this), i.__super__.constructor.apply(this, arguments)
                }
                return e(i, t), i.prototype.el = "body", i.prototype.events = {
                        "submit form.ajax": "submitAjaxForm",
                        "change input.ajax": "submitAjaxForm",
                        "click .js-show-menu": "showMainMenu",
                        "click .show-menu .overlay": "hideMainMenu",
                        "click #nav-main li a": "hideMainMenu",
                        "submit #locate-device": "locateDevice",
                        "change #device-delay-form select": "enableFreqForm",
                        "click  #device-delay-form .submit": "submitDeviceDelay",
                        "click .js-request-contact": "showContactModal"
                    }, i.prototype.submitDeviceDelay = function() {
                        return this.form_view = new Backbone.View({
                            el: ".modal-container #device-delay-form"
                        }), this.form_params = Backbone.Syphon.serialize(this.form_view), this.device = current_device, this.device.url = "/devices/" + this.device.get("key"), this.device.save(this.form_params, {
                            beforeSend: function(t) {
                                return function() {
                                    return $.rails.disableFormElements($(t.el).find(".modal-container #device-delay-form"))
                                }
                            }(this),
                            success: function() {
                                return function() {
                                    return Debug("SEND DELAY , SUCESS"), Prey.Helpers.BootstrapHelpers.hideModal(), window.device_actions.refresh(), !1
                                }
                            }(this),
                            error: function(t, e) {
                                return Debug("SEND ERROR , SUCESS " + e), !1
                            },
                            done: function(t) {
                                return function() {
                                    return $.rails.enableFormElements($(t.el).find(".modal-container #device-delay-form")), t.form_view.destroy()
                                }
                            }(this)
                        }), !1
                    }, i.prototype.enableFreqForm = function(t) {
                        var e, n;
                        return n = $(t.currentTarget).parents("form"), e = $(t.currentTarget).parents("form").find(".submit"), e.removeAttr("disabled").removeClass("disabled"), n.find(".text-warning").removeClass("hidden")
                    }, i.prototype.initialize = function() {
                        return Debug("Initializing Prey V3 Panel!"), this.setupMainLoader(), this.setupAjax(), this.setupGlobalMap(), this.setupCheckedDevicesCollection(), this.setupCurrentAccount(), this.setupGlobalViews(), this.setupLinks(), this.setupPlugins(), this.setupReportDetailClick(), this.eventListener(), this.setupInteractions(), this.setupSound(), $("abbr.timeago").livequery(function() {
                            return $(this).timeago()
                        }), this.listenTo(window.current_account, "error", this.defaultErrorHandler)
                    }, i.prototype.defaultErrorHandler = function(t, e) {
                        return error_view.render({
                            status: e.status
                        })
                    }, i.prototype.setupAjax = function() {
                        return $.ajaxSetup({
                            error: function(t) {
                                (404 === t.status || 500 === t.status) && error_view.render({
                                    status: t.status
                                })
                            }
                        })
                    }, i.prototype.setupMainLoader = function() {
                        return this.main_loader = new Prey.Views.MainLoader
                    }, i.prototype.setupLayout = function() {
                        return this.appLayout = new Prey.AppLayout
                    }, i.prototype.initRouter = function() {
                        var t;
                        return this.appLayout = new Prey.AppLayout, this.app_router = new Prey.Routers.main({
                                trailingSlashIsSignificant: !1
                            }), this.app_router.on("route", function(t) {
                                return function() {
                                    return error_view.isCurrent() && error_view.hide(), t.handleAccountStateAlerts(), t.setClassForCurrentView(), t.sendGACustomDimensionData()
                                }
                            }(this)), this.app_router.on("route:getDashboard", function(t) {
                                return function() {
                                    return Debug("DAHSBOARD ROUTE"), current_account.get("b2b") ? t.appLayout.content.show(new Prey.Views.B2B.Devices) : t.appLayout.content.show(new Prey.Views.B2C.Devices)
                                }
                            }(this)), this.app_router.on("route:getDevices", function(t) {
                                return function() {
                                    return t.flagged_alert.render(), current_account.get("b2b") ? t.appLayout.content.show(new Prey.Views.B2B.Devices) : t.appLayout.content.show(new Prey.Views.B2C.Devices)
                                }
                            }(this)), this.app_router.on("route:getDevice", function(t) {
                                return function(e) {
                                    return t.flagged_alert.render(), t.appLayout.content.show(new Prey.Views.B2C.Device({
                                        id: e
                                    }))
                                }
                            }(this)), this.app_router.on("route:getDeviceSettings", function(t) {
                                return function(e) {
                                    return t.appLayout.content.show(new Prey.Views.B2C.Device({
                                        id: e,
                                        section: "config"
                                    }))
                                }
                            }(this)), this.app_router.on("route:getDeviceReports", function(t) {
                                return function(e) {
                                    return t.appLayout.content.show(new Prey.Views.B2C.Device({
                                        id: e,
                                        section: "reports"
                                    }))
                                }
                            }(this)), this.app_router.on("route:getDeviceReport", function(t) {
                                return function(e, n) {
                                    return t.appLayout.content.show(new Prey.Views.B2C.Device({
                                        id: e,
                                        section: "report",
                                        report_id: n
                                    }))
                                }
                            }(this)), this.app_router.on("route:getDeviceReportDetail", function(t) {
                                return function(e, n) {
                                    return t.appLayout.content.show(new Prey.Views.B2C.Device({
                                        id: e,
                                        section: "report",
                                        report_id: n,
                                        detail: !0
                                    }))
                                }
                            }(this)), this.app_router.on("route:getDeviceActivities", function(t) {
                                return function(e) {
                                    return t.appLayout.content.show(new Prey.Views.B2C.Device({
                                        id: e,
                                        section: "activity"
                                    }))
                                }
                            }(this)), this.app_router.on("route:getDeviceHardware", function(t) {
                                return function(e) {
                                    return Debug("HARDWARE"), t.appLayout.content.show(new Prey.Views.B2C.Device({
                                        id: e,
                                        section: "hardware"
                                    }))
                                }
                            }(this)), this.app_router.on("route:getDeviceBackups", function() {
                                return function() {
                                    return Debug("BACKUP")
                                }
                            }(this)), this.app_router.on("route:getDeviceBrowser", function() {
                                return function() {
                                    return Debug("BROWSER")
                                }
                            }(this)), this.app_router.on("route:getSettings", function(t) {
                                return function() {
                                    return t.flagged_alert.render(), t.appLayout.content.show(new Prey.Views.Settings.Account)
                                }
                            }(this)), this.app_router.on("route:getAccountSettings", function(t) {
                                return function() {
                                    return t.flagged_alert.render(), t.appLayout.content.show(new Prey.Views.Settings.Account)
                                }
                            }(this)), this.app_router.on("route:getDeviceSetSettings", function(t) {
                                return function() {
                                    return t.flagged_alert.render(), t.appLayout.content.show(new Prey.Views.Settings.DeviceSet)
                                }
                            }(this)), this.app_router.on("route:getUserProfileSettings", function(t) {
                                return function() {
                                    return t.flagged_alert.render(), t.appLayout.content.show(new Prey.Views.Settings.UserProfile)
                                }
                            }(this)), this.app_router.on("route:getNotificationsSettings", function(t) {
                                return function() {
                                    return t.flagged_alert.render(), t.appLayout.content.show(new Prey.Views.Settings.Notifications)
                                }
                            }(this)), this.app_router.on("route:getBillingsSettings", function(t) {
                                return function() {
                                    return t.flagged_alert.render(), t.appLayout.content.show(new Prey.Views.Settings.Billing)
                                }
                            }(this)), this.app_router.on("route:getUsersSettings", function(t) {
                                return function() {
                                    return t.flagged_alert.render(), t.appLayout.content.show(new Prey.Views.Settings.Users)
                                }
                            }(this)), this.app_router.on("route:getUsersNewSettings", function(t) {
                                    return function() {
                                            return t.flagged_alert.render(), t.appLayout.content.show(new Prey.Views.Settings.UsersNew)}
}(this)), this.app_router.on("route:getUsersEditSettings", function(t) {
    return function(e) {
        return t.flagged_alert.render(), t.appLayout.content.show(new Prey.Views.Settings.Users({
            user_id: e
        }))
    }
}(this)), window.history && history.pushState ? Backbone.history.start({
    pushState: !0
}) : (Backbone.history.start({
    pushState: !1,
    silent: !0
}), t = window.location.pathname.substr(Backbone.history.options.root.length), Backbone.history.navigate(t, {
    trigger: !0
})), this.app_router.before = function() {
    return function() {
        return Debug("We navigated to another page, but the page callback and after filter did not run because we returned false from inside the before filter"), Prey.Helpers.BootstrapHelpers.hideModal(), !1
    }
}(this)
}, i.prototype.sendGACustomDimensionData = function() {
    return "undefined" != typeof current_account && null !== current_account ? dataLayer.push({
        event: "dimensionDataSent",
        deviceCount: current_account.get("used"),
        plan: current_account.get("plan")
    }) : void 0
}, i.prototype.setupLinks = function() {
    var t;
    return t = this, $("body").on("click", "a[href^='/']", function(e) {
        var n, i, r, s;
        return r = $(e.currentTarget), n = r.attr("href"), i = n.indexOf("logout") >= 0 || $(e.currentTarget).data("remote") || $(e.currentTarget).data("dont-push"), i || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey ? void 0 : (s = n.replace(/^\//, "").replace("#/", ""), window.data_navigation = r.data("navigation"), t.app_router.navigate(s, {
            trigger: !0
        }), !1)
    })
}, i.prototype.setupPlugins = function() {
    return $.fn.serializeObject = function() {
        var t, e, n;
        return n = {}, t = this.serializeArray(), e = $.each(this.find(":checkbox:not(:checked)"), function() {
            return t.push({
                name: $(this).attr("name"),
                value: "off"
            })
        }), $.each(t, function() {
            n[this.name] ? (n[this.name].push || (n[this.name] = [n[this.name]]), n[this.name].push(this.value || "")) : n[this.name] = this.value || ""
        }), n
    }
}, i.prototype.setupCheckedDevicesCollection = function() {
    return window.checked_devices = new Prey.Collections.CheckedDevices
}, i.prototype.setupCurrentAccount = function() {
    return window.current_account = new Prey.Models.Account, this.flagged_alert = new Prey.Views.FlaggedAlert({
        account: window.current_account
    }), this.overdue_alert = new Prey.Views.OverdueAlert({
        account: window.current_account
    }), this.disabled_alert = new Prey.Views.DisabledAlert({
        account: window.current_account
    }), window.overdue_alert = this.overdue_alert, window.current_account.fetch({
        url: "/account_info.json",
        success: function(t) {
            return function() {
                return t.initRouter(), t.main_loader.remove(), t.handleAccountStateAlerts(), Prey.Helpers.showOnboarding()
            }
        }(this)
    })
}, i.prototype.handleAccountStateAlerts = function() {
    return this.handleOverdueView(), this.handleDisabledView()
}, i.prototype.handleOverdueView = function() {
    return current_account.isOverdue() ? this.overdue_alert.render() : void 0
}, i.prototype.handleDisabledView = function() {
    return current_account.isDisabled() ? this.disabled_alert.render() : void 0
}, i.prototype.setClassForCurrentView = function() {
    var t, e, n, i, r, s;
    switch (Debug("Set class for current view!!!"), e = window.location.pathname.replace(/\//, ""), s = e.split("/"), r = s.length, n = s[0], i = "", t = "", n) {
        case "app":
        case "devices":
            1 === r ? i = "devices" : r >= 2 && (i = "device");
            break;
        case "settings":
            i = "settings", r >= 2 && (t = s[1])
    }
    $("body").attr("data-section", i).attr("data-content", t)
}, i.prototype.setupReportDetailClick = function() {
    return $(this.el).find(".report-detail").livequery("click", function() {
        return $.ajax({
            url: $(this).attr("href"),
            method: "GET",
            success: function(t) {
                return function(e) {
                    var n;
                    return Prey.Helpers.BootstrapHelpers.showModal("" + e, " ", {
                        dialog_class: "modal-lg",
                        noheader: !0
                    }), n = current_view.findChild(parseInt($(t).attr("data-model"))), n.removeNotification(), current_device ? current_device.fetch() : void 0
                }
            }(this)
        }), !1
    }), $("a[href^='/reports/']").livequery("click", function() {
        return $.ajax({
            url: $(this).attr("href"),
            method: "GET",
            contentType: "application/javascript",
            success: function(t) {
                return function(e) {
                    var n;
                    return Prey.Helpers.BootstrapHelpers.showModal("" + e, " ", {
                        dialog_class: "modal-lg",
                        noheader: !0
                    }), current_device && current_device.fetch(), current_view && "device-reports" === current_view.el.id ? (n = current_view.findChild(parseInt($(t).text())), n.removeNotification()) : void 0
                }
            }(this)
        }), !1
    })
}, i.prototype.setupGlobalMap = function() {
    }, i.prototype.eventListener = function() {
    return this.sse_events(), $(document).on("device_event", function(t) {
        return function(e, n) {
            if (Debug("LISTENING EVENTS"), n.name && (!current_device || current_device.id === n.device_key)) switch (t.addActivityFromEvent(n), n.name) {
                case "action_requested":
                    Prey.Helpers.Alert.success(I18n.t("events." + n.name)), window.device_actions && device_actions.refresh();
                    break;
                case "not_reachable":
                case "not_reached":
                    Prey.Helpers.Alert.error(I18n.t("events." + n.name)), t.setStateForCurrentDevice("offline", n), Prey.Helpers.PlaySound("errorSound");
                    break;
                case "now_reachable":
                case "reached":
                    Prey.Helpers.Alert.success(I18n.t("events." + n.name)), t.setStateForCurrentDevice("online", n), Prey.Helpers.PlaySound();
                    break;
                case "got_report":
                    Prey.Helpers.Alert.success(I18n.t("events." + n.name, {
                        info: n.info
                    })), Prey.Helpers.PlaySound(), t.addReportFromEvent(n), t.setStateForCurrentDevice("online", n);
                    break;
                case "got_location":
                    n.info.created_at = new Date, Prey.Helpers.Alert.success(I18n.t("events." + n.name)), current_device.receiveLocation(n), Prey.Helpers.PlaySound();
                    break;
                case "action_started":
                    Prey.Helpers.Alert.success(I18n.t("events." + n.name)), window.device_actions && device_actions.refresh(), Prey.Helpers.PlaySound(), t.setStateForCurrentDevice("online", n);
                    break;
                case "action_stopped":
                    Prey.Helpers.Alert.success(I18n.t("events." + n.name)), window.device_actions && device_actions.refresh(), t.setStateForCurrentDevice("online", n);
                    break;
                case "start_action_failed":
                    Prey.Helpers.Alert.error(I18n.t("events." + n.name)), window.device_actions && device_actions.refresh(), Prey.Helpers.PlaySound("errorSound");
                    break;
                case "tunnel_opened":
                    Prey.Helpers.Alert.success(I18n.t("events." + n.name))
            }
        }
    }(this))
}, i.prototype.addReportFromEvent = function(t) {
    var e;
    if (current_device && current_device.id === t.device_key) {
        if (!window.device_view || !window.device_view.device_reports_view) return;
        return e = new Prey.Models.Report, e.fetch({
            url: "/reports/" + t.info,
            success: function(t) {
                return device_view.device_reports_view.reports.add(t.toJSON())
            }
        })
    }
}, i.prototype.addActivityFromEvent = function(t) {
    var e;
    if (current_device && current_device.id === t.device_key) {
        if (!window.device_view || !window.device_view.device_activities_view) return;
        return e = new Prey.Models.Event(t), device_view.device_activities_view.activities.add(e.toJSON())
    }
}, i.prototype.setStateForCurrentDevice = function(t, e) {
    return current_device && current_device.id === e.device_key ? "online" === t ? (current_device.setOnline(), current_device.distanceFromCheckIn()) : (current_device.setOffline(), current_device.setStateTimer()) : void 0
}, i.prototype.sse_events = function() {
    var t;
    // return t = "/live/" + api_key, liveEvents(t, function(t) {
    //     return $(document).trigger("new_event", t), $(document).trigger(t.name, t), t.device_key ? (Debug("EVENT RECEIVED: " + t.name), $(document).trigger("device_event", t)) : void 0
    // })
}, i.prototype.showMainMenu = function() {
    return $("app").addClass("show-menu")
}, i.prototype.hideMainMenu = function() {
    return $("app").removeClass("show-menu")
}, i.prototype.setupInteractions = function() {
    return $(".collapsable-header").livequery("click", function() {
        return $(this).parent().find(".collapsable-content").slideToggle()
    }), $("p.retrieve-location").livequery(function() {
        return this.loc_div = $(this).find("span.location"), window.global_map.geocode($(this).data("location"), function(t) {
            return function(e) {
                return $(t.loc_div).text(e)
            }
        }(this))
    }), $(".js-back-to-aside").livequery("click", function(t) {
        return $(".viewing-content").removeClass("viewing-content"), t.stopPropagation(), !1
    }), $(".js-toggle-actions-mobile").livequery("click", function() {
        return device_actions ? (device_actions.$el.hasClass("device-actions-compressed") ? device_actions.expandActions() : device_actions.compressActions(), !1) : void 0
    }), $(".dropdown-menu").livequery("click", function(t) {
        return t.stopPropagation()
    }), $("[data-toggle='tooltip']").livequery(function() {
        return $(this).tooltip({
            delay: {
                show: 500,
                hide: 0
            }
        })
    }), $(".leaflet-control a").livequery(function() {
        return $(this).tooltip({
            delay: {
                show: 500,
                hide: 0
            },
            placement: "right"
        })
    }), $(".device-actions-compressed a").livequery(function() {
        return $(this).tooltip({
            delay: {
                show: 500,
                hide: 0
            },
            placement: "left"
        })
    }), $("body").find(".js-toggle-flow-panel").livequery("click", function() {
        return function() {
            var t, e;
            return e = $("body"), t = "hide-flow-panel", e.hasClass(t) ? e.removeClass(t) : e.addClass(t), !1
        }
    }(this)), $(".js-hide-modal").livequery("click", function() {
        return function() {
            return Prey.Helpers.BootstrapHelpers.hideModal()
        }
    }(this)), $(document).on("hidden.bs.modal", "#modal", function(t) {
        return function() {
            return Prey.Helpers.BootstrapHelpers.cleanModal(), $(t).off("hidden.bs.modal"), Debug("try to close modal"), window.current_modal && !window.current_modal.isClosed() ? window.current_modal.close() : void 0
        }
    }(this)), $("#alert-alert_message").livequery(function() {
        return $(this).attr("maxlength", 250), $(this).maxlength({
            text: I18n.t("misc.characters_left")
        })
    }), $("#toggle-action-form .text-warning").livequery(function() {
        return current_device.is_bash() && $(this).removeClass("hidden"), current_device.is_bash() ? void 0 : current_device.is_offline() ? $(this).removeClass("hidden") : $(this).addClass("hidden")
    }), $("#ios-options").livequery(function() {
        var t;
        return t = JST["v3/templates/ios_options"](current_device), current_device.is_ios() ? $("#ios-options").html(t) : void 0
    }), $("#toggle-action-form .ios-force, #find-device-form .ios-force").livequery(function() {
        var t, e;
        return t = $(".ios-alert .app-msg"), e = $("#ios-option-select option:selected").data("msg"), t.text(e), $(".ios-force #force-alert").on("click", function() {
            return $(".ios-force .msg").toggleClass("hidden")
        }), $("#ios-option-select").on("change", function(n) {
            return e = $(n.currentTarget).find("option:selected").data("msg"), t.text(e)
        })
    })
}, i.prototype.submitAjaxForm = function(t) {
    var e, n, i;
    return this.form = $(t.target).is("form") ? $(t.target) : $(t.target).parents("form"), n = $(t.target).hasClass("single"), i = this.form.attr("action"), e = this.form.serializeObject(), $.ajax({
        url: i,
        data: e,
        method: "POST",
        beforeSend: function(t) {
            return function() {
                return $.rails.disableFormElements(t.form)
            }
        }(this),
        success: function(t) {
            return function() {
                return Prey.Helpers.Alert.success("Updated"), $.rails.enableFormElements(t.form)
            }
        }(this),
        error: function(t) {
            return function(e) {
                var n;
                return n = _.collect(e.responseJSON, function(t, e) {
                    return "" + e + ": " + t[0]
                }).join(", "), Prey.Helpers.Alert.error("Error " + n), $.rails.enableFormElements(t.form)
            }
        }(this),
        done: function(t) {
            return function() {
                return $.rails.enableFormElements(t.form)
            }
        }(this)
    }), !1
}, i.prototype.setupSound = function() {
    return soundManager.url = "/swf/", soundManager.onready(function() {
        return soundManager.createSound({
            id: "successSound",
            url: "/sounds/MP3/Picked.mp3"
        }), soundManager.createSound({
            id: "errorSound",
            url: "/sounds/MP3/HighBoom.mp3"
        })
    })
}, i.prototype.locateDevice = function() {
    return Prey.Helpers.gtmPushEvent("locateDevice", "UX", "click", "locate-device"), current_device.requestLocation({
        force: !0
    }), !1
}, i.prototype.setupGlobalViews = function() {
    return window.error_view = new Prey.Views.Err
}, i.prototype.showContactModal = function() {
    return this.support_modal = new Prey.Views.General.RequestContact, this.support_modal.render(), !1
}, i
}(Backbone.View), Prey.Views.General.CornerNotice = function(t) {
    function n() {
        return n.__super__.constructor.apply(this, arguments)
    }
    return e(n, t), n.prototype.el = function() {
        return "#corner-notices"
    }, n.prototype.events = {
        "click .btn-success": "setupUpgrade"
    }, n.prototype.initialize = function() {
        return this.listenTo(window.current_account, "change:settings", this.checkSetting)
    }, n.prototype.setupUpgrade = function() {
        return $.ajax({
            url: "/settings/devices.json",
            method: "put",
            data: {
                settings: {
                    main: {
                        perform_upgrade: "on"
                    }
                }
            },
            beforeSend: function() {
                return $.rails.disableFormElement($(this.el).find(".btn-success"))
            },
            success: function(t) {
                return function() {
                    return $(".doing-update").addClass("true"), t.removeMessage()
                }
            }(this),
            complete: function() {
                return console.log("dsds")
            }
        }), !1
    }, n.prototype.removeMessage = function() {
        return current_account.fetch({
            success: function(t) {
                return function() {
                    return setTimeout(function() {
                        return $(".force-update-cta").fadeOut("slow"), $.rails.enableFormElement($(t.el).find(".btn-success"))
                    }, 1500)
                }
            }(this)
        })
    }, n.prototype.checkSetting = function() {
        var t, e;
        if (current_account.performUpgrade()) return $(this.el).addClass("hide"), e = $("#perform_upgrade"), t = e.parent(), t.find("span").addClass("icon icon-success"), t.find("input").remove(), t.removeClass("switch")
    }, n.prototype.hide = function() {
        return $(this.el).addClass("hide")
    }, n.prototype.show = function() {
        return $(this.el).addClass("show")
    }, n.prototype.template = function() {
        return JST["v3/templates/upgrade_account"]()
    }, n.prototype.render = function() {
        return $(this.el).html(this.template())
    }, n.prototype.display = function() {
        return this.render(), this.show(), this.checkSetting()
    }, n
}(Backbone.View), Prey.Views.General.RequestContact = function(t) {
    function i() {
        return this.sendMessage = n(this.sendMessage, this), this.template = n(this.template, this), this.initialize = n(this.initialize, this), i.__super__.constructor.apply(this, arguments)
    }
    return e(i, t), i.prototype.events = {
        "click .js-close-modal": "closeModal",
        "click .js-send-message": "sendMessage",
        "keyup textarea": "refreshValidation"
    }, i.prototype.initialize = function() {
        return i.__super__.initialize.apply(this, arguments), this.modal_title = "<i class='icon-contact'></i> " + I18n.t("contact.title"), this.modal_options = {
            modal_name: "contact"
        }
    }, i.prototype.template = function() {
        return JST["v3/templates/general/contact"]()
    }, i.prototype.refreshValidation = function() {
        var t;
        return t = $(this.el).find("textarea"), _.isEmpty(t.val()) ? void 0 : t.parents("form").find(".response-status").addClass("hidden")
    }, i.prototype.validateFields = function(t) {
        var e, n, i;
        return e = t.find("textarea"), n = t.find(".response-status"), i = t.find("#support_category"), _.isEmpty(e.val()) || _.isEmpty(i.val()) ? (n.removeClass("hidden").addClass("text-danger").html("<i class='icon-alert-sign'></i> " + I18n.t("forms.empty_fields")), !1) : (n.addClass("hidden"), !0)
    }, i.prototype.sendMessage = function(t) {
        var e, n, i, r;
        return e = $(t.currentTarget).parents("form"), n = e.find("textarea"), i = e.find(".response-status"), r = e.find("#support_category"), this.validateFields(e) ? $.ajax({
            url: e.attr("action"),
            method: e.attr("method"),
            data: e.serializeObject(),
            dataType: "json",
            beforeSend: function() {
                return function() {}
            }(this),
            success: function(t) {
                return function() {
                    t.displayAlertSuccess()
                }
            }(this),
            error: function(t) {
                return function() {
                    return t.displayAlertError()
                }
            }(this)
        }) : void 0
    }, i
}(Prey.Extensions.Modal)
}.call(this),
    function() {
        var t = {}.hasOwnProperty,
            e = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            },
            n = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
        Prey.Views.Dashboard = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.el = "#overview-activity", n.prototype.initialize = function() {
                return Debug("Dashboard init!"), this.activities = new Prey.Collections.Events, this.stats = new Prey.Collections.DeviceStats, this.activities_view = new Prey.Views.Dashboard.Activities({
                    collection: this.activities
                }), this.account_stats = new Prey.Views.Dashboard.AccountStats({
                    collection: this.stats
                }), this.activities.fetch(), this.stats.fetch()
            }, n
        }(Backbone.View), Prey.Views.Dashboard.AccountStat = function(t) {
            function i() {
                return this.template = n(this.template, this), i.__super__.constructor.apply(this, arguments)
            }
            return e(i, t), i.prototype.tagName = "li", i.prototype.template = function(t) {
                return JST["v3/templates/account_status_types"](t)
            }, i
        }(Backbone.Marionette.ItemView), Prey.Views.Dashboard.AccountStats = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.itemView = Prey.Views.Dashboard.AccountStat, n.prototype.el = "ul.list-inline.account-status-types", n
        }(Backbone.Marionette.CollectionView), Prey.Views.Dashboard.ActivityItem = function(t) {
            function i() {
                return this.template = n(this.template, this), i.__super__.constructor.apply(this, arguments)
            }
            return e(i, t), i.prototype.tagName = "tr", i.prototype.template = function(t) {
                return JST["v3/templates/activity"](t)
            }, i
        }(Backbone.Marionette.ItemView), Prey.Views.Dashboard.Activities = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return e(n, t), n.prototype.itemView = Prey.Views.Dashboard.ActivityItem, n.prototype.el = "#overview-activity table tbody", n
        }(Backbone.Marionette.CollectionView)
    }.call(this),
    function() {
        var __bind = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            __hasProp = {}.hasOwnProperty,
            __extends = function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) __hasProp.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
            };
        Prey.Views.B2B.Devices = function(_super) {
            function Devices() {
                return this.search = __bind(this.search, this), this.dispatchfilter = __bind(this.dispatchfilter, this), this.close = __bind(this.close, this), this.openModalCSV = __bind(this.openModalCSV, this), this.getDevicesFromSort = __bind(this.getDevicesFromSort, this), this.initialize = __bind(this.initialize, this), Devices.__super__.constructor.apply(this, arguments)
            }
            return __extends(Devices, _super), Devices.prototype.view_for_current = [$("#all-devices"), $("#all-devices #devices-table")], Devices.prototype.el = "#all-devices", Devices.prototype.menu = "#nav-primary-devices", Devices.prototype.events = {
                "keyup #search-devices": "dispatchfilter",
                "click .sort": "getDevicesFromSort",
                "click .js-render-csv-devices": "openModalCSV"
            }, Devices.prototype.initialize = function() {
                return this.devices = new Prey.Collections.Devices, this.filtered_devices = new Backbone.Obscura(this.devices), this.devices_view = new Prey.Views.B2B.DevicesCollection({
                    collection: this.filtered_devices
                }), this.page = 1, this.devices.fetch({
                    success: function(t) {
                        return function(e) {
                            return Debug(e.length), 0 === e.length ? t.devices_view.renderEmpty() : (t.devices_view.render(), t.displayFilters(), current_account.performUpgradeNeeded() && current_account.haveObsoleteDevices(e) ? t.displayCornerNotices() : void 0)
                        }
                    }(this)
                }), $(this.el).find(".filter-column").on("change", function(t) {
                    return function(e) {
                        return t.getDevicesFromFilter(e)
                    }
                }(this)), this.scrollableEl = $(this.el).find(".table-ov"), this.scrollableEl.on("scroll", function(t) {
                    return function() {
                        return t.checkScroll()
                    }
                }(this)), Devices.__super__.initialize.apply(this, arguments)
            }, Devices.prototype.checkScroll = function() {
                var t, e;
                return e = 100, t = this.scrollableEl[0], !this.isLoading && t.scrollTop + t.clientHeight + e > t.scrollHeight ? (this.page += 1, this.loadResults()) : void 0
            }, Devices.prototype.loadResults = function() {
                return this.isLoading = !0, this.devices.fetch({
                    data: $.param({
                        page: this.page,
                        q: this.q
                    }),
                    remove: !1,
                    success: function(t) {
                        return function() {
                            return t.isLoading = !1
                        }
                    }(this)
                })
            }, Devices.prototype.displayCornerNotices = function() {
                return this.corner_notice = new Prey.Views.General.CornerNotice, this.corner_notice.display()
            }, Devices.prototype.tableHeaderWidths = function() {
                return _.map($("#table-devices .columns-name th"), function(t) {
                    return $(t).outerWidth()
                })
            }, Devices.prototype.copyHeaderSize = function(t) {
                return _.each(t.find("th"), function(t) {
                    return function(e, n) {
                        $(e).outerWidth(t.tableHeaderWidths()[n])
                    }
                }(this))
            }, Devices.prototype.getDevicesFromSort = function(t) {
                var e;
                return e = $(t.currentTarget), this.column = e.data("sort"), this.direction = "asc", e.hasClass("sort-default") ? this.direction = "asc" : e.hasClass("sort-asc") ? this.direction = "desc" : e.hasClass("sort-desc") && (this.direction = "asc"), $("th.sort").removeClass("sort-desc").removeClass("sort-asc").removeClass("sort-default"), e.addClass("sort-" + this.direction), e.siblings().addClass("sort-default"), this.devices_view.collection.setSort(this.column, this.direction), !1
            }, Devices.prototype.openModalCSV = function() {
                return this.status_modal = new Prey.Views.B2B.CSV_Confirmation, this.status_modal.render(), !1
            }, Devices.prototype.close = function() {
                return Debug("CLOSING B2B"), this.devices_view.close(), Devices.__super__.close.apply(this, arguments)
            }, Devices.prototype.dispatchfilter = function(t) {
                var e;
                return e = t.currentTarget.value, this.q = e, this.page = 1, this.resetSorts(), clearTimeout(this.timeout), this.timeout = setTimeout(function(t) {
                    return function() {
                        return t.search(t.q)
                    }
                }(this), 600)
            }, Devices.prototype.clearFilters = function() {
                return _.each($(".filter-column"), function(t) {
                    return $(t).find("option:eq(0)").prop("selected", !0)
                }), this.filterbyColumns(this.selectedFilters())
            }, Devices.prototype.resetSorts = function() {
                return this.column = null, this.direction = null, $(".sort").addClass("sort-default").removeClass("sort-asc sort-desc")
            }, Devices.prototype.selectedFilters = function() {
                var t;
                return t = _.filter($(".filter-column option:selected"), function(t) {
                    return "" !== t.value
                })
            }, Devices.prototype.getDevicesFromFilter = function() {
                var t;
                return t = this.selectedFilters(), t.length > 0 ? (Debug("Filter by " + t), this.filterbyColumns(t)) : this.resetSearch()
            }, Devices.prototype.resetSearch = function() {
                return this.filtered_devices.resetFilters()
            }, Devices.prototype.filterbyColumns = function(t) {
                return this.filtered_devices.filterBy(function(e) {
                    return function(n) {
                        return e.filterConditionsForFilter(n, t)
                    }
                }(this)), !1
            }, Devices.prototype.filterConditionsForFilter = function(model, terms) {
                var conditions, matches;
                return matches = _.map(terms, function() {
                    return function(t) {
                        var e, n;
                        return n = t.value, e = t.parentNode.name.replace("filter-", ""), "" !== n ? "model.get('" + e + "') == '" + n + "'" : void 0
                    }
                }(this)), conditions = matches.join(" && "), eval(conditions)
            }, Devices.prototype.filterConditionsForSearch = function(t, e) {
                var n;
                return e = e.trim().toLowerCase(), n = new RegExp(e, "g"), t.get("name").toLowerCase().match(n) || t.get("key").toLowerCase().match(n) || !_.isNull(t.get("client_version")) && t.get("client_version").toLowerCase().match(n) || t.get("type").toLowerCase().match(n) || !_.isNull(t.get("state")) && t.get("state").toLowerCase().match(n) || t.get("description").toLowerCase().match(n) || !_.isNull(t.get("os")) && t.get("os").toLowerCase().match(n) || !_.isNull(t.get("os_version")) && t.get("os_version").toLowerCase().match(n) || !_.isNull(t.get("hardware")) && !_.isUndefined(t.get("hardware").serial_number) && t.get("hardware").serial_number.toLowerCase().match(n)
            }, Devices.prototype.search = function(t) {
                return this.isLoading = !0, this.devices.fetch({
                    data: $.param({
                        q: t
                    }),
                    success: function(t) {
                        return function() {
                            return t.isLoading = !1
                        }
                    }(this)
                }), !1
            }, Devices.prototype.cleanSelectOptions = function() {
                return _.each($("tr.filter select option"), function(t) {
                    return "" !== t.value ? $(t).remove() : void 0
                })
            }, Devices.prototype.displayFilters = function() {
                var t, e;
                return this.cleanSelectOptions(), e = $(this.el).find("tr.filter"), t = ["type", "os", "description", "state", "client_version", "reports_count"], _.each(t, function(t) {
                    return function(n) {
                        var i, r;
                        return i = e.find(".device-" + n + " select"), r = _.unique(_.compact(t.devices.pluck(n))), _.each(r, function(t) {
                            return i.append($("<option>", {
                                value: t,
                                text: t
                            }))
                        })
                    }
                }(this))
            }, Devices.prototype.copyWidthsToCloned = function() {
                return this.copyHeaderSize($(".cloned"))
            }, Devices.prototype.cloneFilters = function() {
                return $(".header-fix").clone().appendTo(".cloned"), this.copyWidthsToCloned(), $(this.el).find(".cloned .filter-column").on("change", function(t) {
                    return function(e) {
                        return t.getDevicesFromFilter(e), t.copyWidthsToCloned()
                    }
                }(this))
            }, Devices
        }(Prey.Extensions.View), Prey.Views.B2B.DevicesItem = function(t) {
            function e() {
                return this.template = __bind(this.template, this), e.__super__.constructor.apply(this, arguments)
            }
            return __extends(e, t), e.prototype.tagName = "tr", e.prototype.template = function(t) {
                return JST["v3/templates/b2b/devices/device_item"](t)
            }, e
        }(Backbone.Marionette.ItemView), Prey.Views.B2B.DevicesCollection = function(t) {
            function e() {
                return this.close = __bind(this.close, this), e.__super__.constructor.apply(this, arguments)
            }
            return __extends(e, t), e.prototype.el = "#devices-table tbody", e.prototype.itemView = Prey.Views.B2B.DevicesItem, e.prototype.initialize = function() {
                return $("#loader-view-b2b-devices-container").removeClass("hidden")
            }, e.prototype.onBeforeRender = function() {
                Debug("ABOUT TO RENDER DEVICES AS B2B LIST"), this.cleanIndicators(), $(this.el).html(""), 0 === this.collection.length
            }, e.prototype.renderEmpty = function() {
                return $("#loader-view-b2b-devices-container").addClass("hidden"), $("#empty-view-b2b-devices-container").removeClass("hidden")
            }, e.prototype.cleanIndicators = function() {
                return $("#loader-view-b2b-devices-container").addClass("hidden"), $("#empty-view-b2b-devices-container").addClass("hidden")
            }, e.prototype.close = function() {
                return $(this.el).html("")
            }, e
        }(Backbone.Marionette.CollectionView), Prey.Views.B2B.CSV_Confirmation = function(t) {
            function e() {
                return this.reject = __bind(this.reject, this), this.confirm = __bind(this.confirm, this), this.initialize = __bind(this.initialize, this), e.__super__.constructor.apply(this, arguments)
            }
            return __extends(e, t), e.prototype.initialize = function() {
                return e.__super__.initialize.apply(this, arguments), this.modal_options = {
                    noheader: !0,
                    modal_name: "csv_confirmation",
                    dialog_class: "modal-sm"
                }
            }, e.prototype.events = {
                "click .alert-confirm": "confirm",
                "click .alert-cancel": "reject"
            }, e.prototype.template = function() {
                var t;
                return t = {
                    email: current_account.get("current_user").email,
                    devices: current_account.attributes.used
                }, JST["v3/templates/settings/modals/csv_confirmation"](t)
            }, e.prototype.confirm = function() {
                return Debug("CLICK CONFIRM"), $.ajax("/devices/generate_csv", {
                    type: "GET",
                    dataType: "html",
                    beforeSend: function(t) {
                        return function() {
                            return $(t.el).find(".modal-footer").addClass("hidden"), t.showState("loader")
                        }
                    }(this),
                    success: function(t) {
                        return function() {
                            return t.showState("accept"), setTimeout(function() {
                                return t.closeModal()
                            }, 1500)
                        }
                    }(this),
                    error: function(t) {
                        return function() {
                            return t.showState("error")
                        }
                    }(this)
                }), !1
            }, e.prototype.reject = function() {
                return Debug("CLICK REJECT"), this.closeModal()
            }, e
        }(Prey.Extensions.Modal)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            n = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        Prey.Views.B2C.Device = function(e) {
                function i() {
                    return this.showPoliceRecommendation = t(this.showPoliceRecommendation, this), this.defaultErrorHandler = t(this.defaultErrorHandler, this), this.showMap = t(this.showMap, this), this.close = t(this.close, this), this.clearSecondaryViews = t(this.clearSecondaryViews, this), this.showHardware = t(this.showHardware, this), this.showActivities = t(this.showActivities, this), this.showReports = t(this.showReports, this), this.showSettings = t(this.showSettings, this), this.render_view = t(this.render_view, this), this.renderPrimaryView = t(this.renderPrimaryView, this), this.autoLocateOverlay = t(this.autoLocateOverlay, this), this.addMapPin = t(this.addMapPin, this), this.mapTemplate = t(this.mapTemplate, this), this.header = t(this.header, this), this.template = t(this.template, this), this.showToggleRecovered = t(this.showToggleRecovered, this), this.showToggleMissing = t(this.showToggleMissing, this), this.setLocateAlertMessage = t(this.setLocateAlertMessage, this), this.setDefaultLocateButton = t(this.setDefaultLocateButton, this), this.showLocationProgressReq = t(this.showLocationProgressReq, this), this.checkLocation = t(this.checkLocation, this), this.receiveLocation = t(this.receiveLocation, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.el = "#single-device #device-information", i.prototype.view_for_current = [$("#device"), $("#single-device")], i.prototype.parent_section = $("#device"), i.prototype.menu = "#nav-primary-devices", i.prototype.events = {
                        "click .js-mark-as-recovered": "showToggleMissing",
                        "click .js-mark-as-missing": "showToggleRecovered",
                        "click .js-open-police-recomendation": "showPoliceRecommendation"
                    }, i.prototype.initialize = function(t) {
                        return Debug("B2C Device " + t.id + "!"), this.section = t.section, this.device = new Prey.Models.Device({
                            id: t.id
                        }), window.device_view = this, t.report_id && (this.report_id = t.report_id), t.detail && (this.report_detail = t.detail), this.listenTo(this.device, "change:key", this.render_view), this.listenTo(this.device, "change:location_address change:event_updated_at", this.checkLocation), this.listenTo(this.device, "change:event_received_at", this.receiveLocation), this.listenTo(this.device, "change:loading_location", this.showLocationProgressReq), this.listenTo(this.device, "error", this.defaultErrorHandler), this.device.fetch(), this.title = 'Device "' + this.device.id + '"', $("#device-loader").removeClass("hidden"), i.__super__.initialize.apply(this, arguments)
                    }, i.prototype.receiveLocation = function() {
                        return window.location.pathname === "/devices/" + this.device.id ? (this.locating_modal && this.locating_modal.close(), this.device.clearDeviceTimeout(), this.addMapPin()) : void 0
                    }, i.prototype.checkLocation = function() {
                        return $(".map-popover-body .address").html(this.device.get("location_address"))
                    }, i.prototype.showLocationProgressReq = function() {
                        var t, e;
                        switch (Debug("LOCATION PROGRESS " + this.device.get("loading_location")), t = $("#location-alert").html(), e = "is-loading is-success is-error is-waiting", $("button.multi-states").removeClass(e), this.device.get("loading_location")) {
                            case "waiting":
                                return $("button.multi-states").addClass("is-success").attr("disabled", !0);
                            case "connecting":
                                return $("button.multi-states").addClass("is-loading").attr("disabled", !0);
                            case "unreachable":
                                return Prey.Helpers.PlaySound("errorSound"), this.setLocateAlertMessage(t, I18n.t("device.location.states.unreachable")), this.setDefaultLocateButton(e);
                            case "error":
                                return Prey.Helpers.PlaySound("errorSound"), this.setLocateAlertMessage(t, I18n.t("device.location.states.error")), this.setDefaultLocateButton(e);
                            case "done":
                                return $(".map-popover-feedback").html("")
                        }
                    }, i.prototype.setDefaultLocateButton = function(t) {
                        return $("button.multi-states").removeClass(t), $("button.multi-states").attr("disabled", !1)
                    }, i.prototype.setLocateAlertMessage = function(t, e) {
                        return $(".map-popover-feedback").html(t), $(".alert .alert-message").text(e)
                    }, i.prototype.showToggleMissing = function() {
                        var t;
                        return t = new Prey.Views.ToggleMissingForm({
                            model: this.device,
                            modal_title: I18n.t("device.recovered_dialog.title"),
                            modal_name: "mark-as-missing",
                            type: "toggle_missing"
                        }), t.render()
                    }, i.prototype.showToggleRecovered = function() {
                        var t;
                        return t = new Prey.Views.ToggleMissingForm({
                            model: this.device,
                            modal_title: I18n.t("device.missing_dialog.title"),
                            modal_name: "mark-as-recovered",
                            type: "find_device"
                        }), t.render()
                    }, i.prototype.template = function() {
                        return JST["v3/templates/b2c/devices/single"](this.device.toJSON())
                    }, i.prototype.header = function() {
                        return this.device_header || (this.device_header = new Prey.Views.B2C.DeviceHeader({
                            device: this.device
                        })), this.device_header.render()
                    }, i.prototype.mapTemplate = function() {
                        return JST["v3/templates/b2c/devices/last_location"](this.device)
                    }, i.prototype.addMapPin = function() {
                        var t, e;
                        return window.global_map.clearMarkers(), this.location = this.device.get("location"), t = [this.location.lat, this.location.lng], e = new L.marker(t, {
                            icon: window.global_map.deviceIcon()
                        }), e.addTo(window.device_map), this.location.accuracy && (window.circle = L.circle(t, this.location.accuracy, {
                            color: "#40BD0F",
                            opacity: .9,
                            weight: 3,
                            fillColor: "#40BD4F",
                            fillOpacity: .3
                        }), window.global_map.single_marker_layer.addLayer(circle)), window.global_map.single_marker_layer.addLayer(e), window.global_map.single_marker_layer.addTo(window.device_map), setTimeout(function() {
                            return window.device_map.setZoom(18), setTimeout(function() {
                                return Debug("CENTER HERE"), window.global_map.centerMap(t), window.device_map._onResize()
                            }, 400)
                        }, 30), e.on("popupopen", function(t) {
                            return function() {
                                return t.checkLocation(), t.showLocationProgressReq()
                            }
                        }(this)), e.bindPopup(this.mapTemplate()).openPopup(), this.device.getLocation(), window.global_map.setOwnerView("device-" + current_device.id)
                    }, i.prototype.autoLocateOverlay = function() {
                        return Debug("autoLocateOverlay"), this.locating_modal || (this.locating_modal = new Prey.Views.B2C.Device.LocatingModal({
                            model: this.device
                        })), this.locating_modal.render(), window.global_map.reset(1), window.global_map.setOwnerView("device-" + current_device.id)
                    }, i.prototype.renderPrimaryView = function() {
                        return $(this.el).html(this.template), this.header()
                    }, i.prototype.render_view = function() {
                        return window.current_device = this.device, this.location = this.device.get("location"), $("#device-setting-link").attr("href", "/devices/" + this.device.get("key") + "/config"), this.renderPrimaryView(), this.navigation_view = new Prey.Views.B2C.DeviceNavigation({
                            model: this.device
                        }), this.navigation_view.render(), window.global_map.clearMarkers(), window.device_actions = new Prey.Views.B2C.DeviceActions({
                            model: this.device
                        }), window.device_actions.render(), this.status_view = new Prey.Views.B2C.DeviceStatus({
                            device: this.device
                        }), Debug("SECTION IS " + this.section), "config" === this.section ? (this.showSettings(), this.enableViewingContent()) : "activity" === this.section ? (this.showActivities(), this.enableViewingContent()) : "hardware" === this.section ? this.showHardware() : "reports" === this.section ? this.showReports() : "report" === this.section ? this.showReports() : this.showMap(), $("#device-loader").addClass("hidden"), this.status_view.render(), this.device.distanceFromCache()}, i.prototype.showSettings = function() {
    return device_actions.show(), this.deviceSettingsView || (this.deviceSettingsView = new Prey.Views.B2C.DeviceSettings({
        model: this.device
    })), this.secondary_view = this.deviceSettingsView, this.secondary_view.render()
}, i.prototype.showReports = function() {
    return device_actions.hide(), this.device_reports_view || (this.device_reports_view = new Prey.Views.B2C.DeviceReports({
        model: this.device
    })), this.secondary_view = this.device_reports_view, this.locating_modal && this.locating_modal.close(), this.secondary_view.render()
}, i.prototype.showActivities = function() {
    return device_actions.hide(), this.device_activities_view || (this.device_activities_view = new Prey.Views.B2C.DeviceActivities({
        model: this.device
    })), this.secondary_view = this.device_activities_view, this.secondary_view.render()
}, i.prototype.showHardware = function() {
    return device_actions.hide(), this.device_hardware_view || (this.device_hardware_view = new Prey.Views.B2C.DeviceHardware({
        model: this.device
    })), this.secondary_view = this.device_hardware_view, this.secondary_view.render()
}, i.prototype.clearSecondaryViews = function() {
    return this.device_report_view && this.device_report_view.close(), this.device_activities_view && this.device_activities_view.close(), this.device_reports_view && this.device_reports_view.close(), this.deviceSettingsView && this.deviceSettingsView.close(), this.device_hardware_view ? this.device_hardware_view.close() : void 0
}, i.prototype.close = function() {
    return this.locating_modal && this.locating_modal.close(), this.device_header && this.device_header.close(), this.secondary_view && this.secondary_view.close(), this.clearSecondaryViews(), this.navigation_view.close(), window.device_actions && window.device_actions.close(), window.global_map.clearMarkers(), current_device.clearTimers(), $(this.el).html(""), i.__super__.close.apply(this, arguments)
}, i.prototype.showMap = function() {
    return device_actions.show(), this.location && !this.device.is_bash() ? this.addMapPin() : this.autoLocateOverlay(), $("#device-map .ellipsis").html(h(this.device.get("name"))), this.compareCheckedDevice(), $(".js-toggle-actions-mobile").removeClass("hidden")
}, i.prototype.defaultErrorHandler = function(t, e) {
    return 422 !== e.status ? error_view.render({
        status: e.status
    }) : void 0
}, i.prototype.showPoliceRecommendation = function() {
    return this.police_modal = new Prey.Views.PoliceRecommendation, this.police_modal.render(), !1
}, i.prototype.compareCheckedDevice = function() {
    return current_device.getCachedModel(), current_device.isTimestampChanged() ? current_device.requestLocation() : void 0
}, i
}(Prey.Extensions.View), Prey.Views.B2C.DeviceStatus = function(e) {
        function i() {
            return this.close = t(this.close, this), this.template = t(this.template, this), this.renderDelaySelect = t(this.renderDelaySelect, this), this.render = t(this.render, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.el = "#device-state-loaded", i.prototype.initialize = function(t) {
            return this.device = t.device, this.listenTo(this.device.getCachedModel(), "change:virtual_status", this.render), this.listenTo(this.device, "change:last_checked_in", this.render)
        }, i.prototype.render = function() {
            var t;
            return $("#device-state-loaded").html(this.template()), window.circle && (this.device.is_online() && window.circle.setStyle({
                color: "#40BD0F",
                fillColor: "#40BD4F"
            }), this.device.is_offline() && window.circle.setStyle({
                color: "#C0C7D1",
                fillColor: "#C0C7D1"
            })), (t = this.device.get("last_checked_in")) && $(this.el).find(".timeago").attr({
                title: t
            }), this.renderDelaySelect()
        }, i.prototype.renderDelaySelect = function() {
            return this.device.is_bash() ? (this.delay_setting_view = new Prey.Views.B2C.DeviceDelaySelect({
                device: this.device
            }), this.delay_setting_view.render(), this.device.get_delay_options()) : void 0
        }, i.prototype.template = function() {
            return JST["v3/templates/b2c/devices/single_status"](this.device.toJSON())
        }, i.prototype.close = function() {
            return this.device.clearStateTimeout(), $(this.el).html(""), this.stopListening(), this.undelegateEvents(), this.unbind()
        }, i
    }(Backbone.View), Prey.Views.B2C.DeviceDelaySelect = function(e) {
        function i() {
            return this.close = t(this.close, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.el = "#device-delay-setting", i.prototype.events = {
            "click .interval": "openSelectModal"
        }, i.prototype.initialize = function(t) {
            return this.device = t.device, this.device.is_bash() ? this.listenTo(this.device, "change:delay", this.render) : void 0
        }, i.prototype.template = function() {
            return JST["v3/templates/b2c/devices/device_delay"](this.device)
        }, i.prototype.render = function() {
            return $(this.el).html(this.template())
        }, i.prototype.close = function() {
            return $(this.el).html(""), this.stopListening(), this.undelegateEvents(), this.unbind()
        }, i.prototype.openSelectModal = function() {
            return Prey.Helpers.BootstrapHelpers.showModal("" + $("#device-delay").html(), "Change reports & actions frequency"), !1
        }, i
    }(Backbone.View), Prey.Views.B2C.DeviceHeader = function(e) {
        function i() {
            return this.changeTitle = t(this.changeTitle, this), this.loaded = t(this.loaded, this), this.loading = t(this.loading, this), this.showRenameInput = t(this.showRenameInput, this), this.hideRenameInput = t(this.hideRenameInput, this), this.renameDevice = t(this.renameDevice, this), this.detectChangedText = t(this.detectChangedText, this), this.close = t(this.close, this), this.renderDeleteModal = t(this.renderDeleteModal, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.el = "#device-header", i.prototype.initialize = function(t) {
            return Debug("INIT DEVICE HEADER"), this.device = t.device, this.listenTo(this.device, "change:title change:title_updated_at", this.changeTitle), $("#rename-device").livequery("click", function(t) {
                return function(e) {
                    return t.showRenameInput(e)
                }
            }(this)), $("#rename-device-input .btn").livequery("click", function(t) {
                return function(e) {
                    return t.renameDevice(e)
                }
            }(this)), $("#rename-device-input input").livequery("keyup", function(t) {
                return function(e) {
                    return 13 === e.keyCode ? t.renameDevice(e) : t.detectChangedText(e)
                }
            }(this)), $("#delete-device-btn").livequery("click", function(t) {
                return function() {
                    return t.renderDeleteModal(), !1
                }
            }(this))
        }, i.prototype.template = function() {
            return JST["v3/templates/b2c/devices/single_header"](this.device.toJSON())
        }, i.prototype.render = function() {
            return $(this.el).html(this.template())
        }, i.prototype.renderDeleteModal = function() {
            return this.delete_modal = new Prey.Views.B2C.Device.DeleteModal({
                model: this.device
            }), this.delete_modal.render()
        }, i.prototype.close = function() {
            return Debug("CLOSING DEVICE HEADER"), $(this.el).html(""), this.stopListening(), this.undelegateEvents(), this.unbind(), this.delete_modal && this.delete_modal.close(), $("#rename-device").expire("click"), $("#rename-device-input .btn").expire("click"), $("#rename-device-input input").expire("keyup"), $("#delete-device-btn").expire("click")
        }, i.prototype.detectChangedText = function() {
            return this.device.get("name") !== $("#rename-device-input input").val() ? $("#rename-device-input .btn").addClass("btn-success") : $("#rename-device-input .btn").removeClass("btn-success")
        }, i.prototype.renameDevice = function() {
            var t;
            return t = $("#rename-device-input input").val(), _.isEmpty(t) ? void 0 : (Debug("should rename device here"), $("#rename-device-input").addClass("hidden"), $("#rename-device").removeClass("hidden"), this.device.renameDevice({
                device: {
                    title: t
                }
            }), this.loading())
        }, i.prototype.hideRenameInput = function() {
            return $("#rename-device").parents(".btn-group").delay(1e3).removeClass("open"), !1
        }, i.prototype.showRenameInput = function(t) {
            return $(t.currentTarget).addClass("hidden"), $("#rename-device-input input").val(h(this.device.get("name"))), $("#rename-device-input").removeClass("hidden"), !1
        }, i.prototype.loading = function() {
            return $("#rename-device span").html("loading")
        }, i.prototype.loaded = function() {
            return $("#rename-device span").delay(1e3).html("Rename device"), this.hideRenameInput()
        }, i.prototype.changeTitle = function() {
            return $(this.el).find("h1.ellipsis").html(h(this.device.get("title"))), $("#device-map .ellipsis").html(h(this.device.get("title"))), this.loaded()
        }, i
    }(Backbone.View), Prey.Views.B2C.Device.DeleteModal = function(e) {
        function i() {
            return this.close = t(this.close, this), this.closeModal = t(this.closeModal, this), this.displayError = t(this.displayError, this), this.displaySuccess = t(this.displaySuccess, this), this.displayLoading = t(this.displayLoading, this), this.submit = t(this.submit, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.el = "#modal", i.prototype.events = {
            "click .alert-confirm": "submit",
            "click .alert-cancel": "closeModal"
        }, i.prototype.initialize = function(t) {
            return this.model = t.model, window.current_modal && window.current_modal.close(), window.current_modal = this
        }, i.prototype.template = function() {
            return JST["v3/templates/b2c/devices/modals/confirm_delete"](this.model.toJSON())
        }, i.prototype.render = function() {
            return Prey.Helpers.BootstrapHelpers.showModal(this.template(), I18n.t("v1.device.delete"), {
                noheader: !0,
                modal_name: "confirm-delete",
                dialog_class: "modal-sm"
            })
        }, i.prototype.submit = function() {
            return this.model.destroy({
                beforeSend: function(t) {
                    return function() {
                        return t.displayLoading()
                    }
                }(this),
                success: function(t) {
                    return function(e, n) {
                        return "success" === n.result ? current_account.fetch({
                            success: function() {
                                return t.displaySuccess(), setTimeout(function() {
                                    return Backbone.history.navigate("/devices", {
                                        trigger: !0
                                    }), t.closeModal()
                                }, 1e3)
                            }
                        }) : void 0
                    }
                }(this),
                error: function(t) {
                    return function(e, n) {
                        return 422 === n.status ? t.displayError() : t.closeModal()
                    }
                }(this)
            }), !1
        }, i.prototype.displayLoading = function() {
            return $(this.el).find(".modal-footer").addClass("hidden"), $(this.el).find(".state").addClass("hidden"), $(this.el).find(".state-loading").removeClass("hidden")
        }, i.prototype.displaySuccess = function() {
            return setTimeout(function(t) {
                return function() {
                    return $(t.el).find(".modal-footer").addClass("hidden"), $(t.el).find(".state").addClass("hidden"), $(t.el).find(".state-success").removeClass("hidden"), $(t.el).find(".modal-alert").addClass("modal-success")
                }
            }(this), 1e3)
        }, i.prototype.displayError = function() {
            return setTimeout(function(t) {
                return function() {
                    return $(t.el).find(".modal-footer").removeClass("hidden"), $(t.el).find(".state").addClass("hidden"), $(t.el).find(".state-error").removeClass("hidden")
                }
            }(this), 1e3)
        }, i.prototype.closeModal = function() {
            return Prey.Helpers.BootstrapHelpers.hideModal(), this.close()
        }, i.prototype.close = function() {
            return this.stopListening(), this.undelegateEvents(), this.unbind()
        }, i
    }(Backbone.View), Prey.Views.B2C.Device.LocatingModal = function(e) {
        function i() {
            return this.close = t(this.close, this), this.render = t(this.render, this), this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.el = "#device-map-overlay", i.prototype.template = function() {
            return JST["v3/templates/b2c/devices/no_location"](this.model.toJSON())
        }, i.prototype.render = function() {
            return $(this.el).html(this.template()), $(this.el).removeClass("hidden")
        }, i.prototype.close = function() {
            return $(this.el).addClass("hidden"), $(this.el).html(""), this.stopListening(), this.undelegateEvents(), this.unbind()
        }, i
    }(Backbone.View), Prey.Views.ToggleMissingForm = function(t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }
        return n(e, t), e.prototype.events = {
            "click .submit": "submitToggleMissing",
            "click .js-close-modal": "closeModal",
            submit: "submitToggleMissing"
        }, e.prototype.initialize = function(t) {
            return null == t && (t = {}), e.__super__.initialize.apply(this, arguments), this.model = t.model, this.type = t.type, this.modal_title = t.modal_title
        }, e.prototype.template = function() {
            return JST["v3/templates/b2c/devices/forms/" + this.type](this.model.toJSON())
        }, e.prototype.submitToggleMissing = function() {
            var t;
            return this.form_params = Backbone.Syphon.serialize(this), t = new Prey.Models.Device(this.form_params), t.url = "/devices/" + current_device.get("key") + "/toggle_missing", this.prev_case_state = current_device.get("police_case_device"), t.save(this.form_params, {
                beforeSend: function() {
                    return $.rails.disableElement($("#modal form button"))
                },
                success: function(t) {
                    return function(e) {
                        return Debug("SEND FORM"), e.get("target"), current_device.fetch({
                            success: function(e) {
                                var n;
                                return device_view.renderPrimaryView(), device_view.status_view.render(), n = "Chile", current_device.get("missing") ? current_account.get("detected_country") === n ? (current_modal.closeModal(), setTimeout(function() {
                                    return device_view.showPoliceRecommendation()
                                }, 400)) : Prey.Helpers.BootstrapHelpers.hideModal() : _.isNull(t.prev_case_state) ? (current_modal.closeModal(), void 0) : current_account.get("detected_country") === n && _.isNull(e.get("police_case_device")) ? t.displayAlertSuccess() : void 0
                            }
                        }), !1
                    }
                }(this),
                error: function() {
                    return error_view.render(), !1
                },
                done: function(t) {
                    return function() {
                        return $.rails.enableFormElements($(t.el).find("form"))
                    }
                }(this)
            }), !1
        }, e.prototype.is_find_device = function() {
            return "find_device" === this.type
        }, e.prototype.render = function() {
            return e.__super__.render.apply(this, arguments), $("#exclude_screenshot").prop("checked", current_device.excluded_module("get_screenshot")), $("#exclude_picture").prop("checked", current_device.excluded_module("webcam"))
        }, e
    }(Prey.Extensions.Modal), Prey.Views.B2C.DeviceActivities = function(e) {
        function i() {
            return this.close = t(this.close, this), this.searchActivities = t(this.searchActivities, this), this.dispatchfilter = t(this.dispatchfilter, this), this.render = t(this.render, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.el = "#device-activity", i.prototype.events = {
            "keyup #search-activity": "dispatchfilter"
        }, i.prototype.initialize = function(t) {
            return this.activities || (this.activities = new Prey.Collections.Events), this.filtered_activities = new Backbone.Obscura(this.activities), this.activities_view || (this.activities_view = new Prey.Views.B2C.Device.activitiesCollection({
                collection: this.filtered_activities.setSort("created_at", "desc")
            })), this.activities.on("add", function(t) {
                return function() {
                    return Debug("Activity item was added"), t.filtered_activities.setSort("id", "desc")
                }
            }(this)), this.activities.fetch({
                url: "/devices/" + t.model.id + "/events.json",
                reset: !0
            }), this.timeout = 0
        }, i.prototype.render = function() {
            return $(".current").removeClass("current"), $("#device").addClass("current"), $("#single-device").addClass("current"), $(this.el).addClass("current")
        }, i.prototype.dispatchfilter = function(t) {
            var e;
            return e = t.currentTarget.value, clearTimeout(this.timeout), this.timeout = setTimeout(this.searchActivities(e), 6e3)
        }, i.prototype.searchActivities = function(t) {
            return this.filtered_activities.filterBy(function() {
                return function(e) {
                    var n;
                    return n = new RegExp(t, "g"), e.get("message").match(n) || ("got_location" === e.get("name") ? e.get("info").lat.match(n) || e.get("info").lng.match(n) : e.get("info").match(n))
                }
            }(this)), !1
        }, i.prototype.close = function() {}, i
    }(Backbone.View), Prey.Views.B2C.DeviceHardware = function(e) {
        function i() {
            return this.close = t(this.close, this), this.closeNestedViews = t(this.closeNestedViews, this), this.render = t(this.render, this), this.getData = t(this.getData, this), this.fetchHardwareData = t(this.fetchHardwareData, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.el = "#device-hardware", i.prototype.initialize = function(t) {
            return this.model = t.model, $(this.el).addClass("current"), this.device_view = window.device_view, this.listenTo(this.model, "change:hardware", this.fetchHardwareData), this.model.getHardwareInfo(), i.__super__.initialize.apply(this, arguments)
        }, i.prototype.fetchHardwareData = function() {
            return this.hardware_info = this.model.get("hardware"), this.hardware_info.fetch({
                success: function(t) {
                    return function() {
                        return t.render(), t.getData()
                    }
                }(this)
            })
        }, i.prototype.getData = function() {
            return this.hardware_collection = new Prey.Collections.DeviceHardware(this.hardware_info.get("hardware")), this.hardware_info_view = new Prey.Views.B2C.Device.HardwareCollection({
                collection: this.hardware_collection
            }), this.hardware_info_view.render(), this.modified_collection = new Prey.Collections.DeviceHardware(this.hardware_info.get("modified")), this.hardware_changes_notice = new Prey.Views.B2C.DeviceHardwareNotice({
                collection: this.modified_collection
            }), this.hardware_changes_notice.render()
        }, i.prototype.render = function() {
            return $(".current").removeClass("current"), $("#device").addClass("current"), $("#single-device").addClass("current"), $(this.el).addClass("current")
        }, i.prototype.closeNestedViews = function() {
            return Debug("close nested views"), this.hardware_info_view && this.hardware_info_view.close(), this.hardware_changes_notice ? this.hardware_changes_notice.close() : void 0
        }, i.prototype.close = function() {
            return this.closeNestedViews(), this.stopListening(), this.undelegateEvents(), this.unbind()
        }, i
    }(Backbone.View), Prey.Views.B2C.DeviceHardwareNotice = function(e) {
        function i() {
            return this.close = t(this.close, this), this.showDetails = t(this.showDetails, this), this.render = t(this.render, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.el = "#modified-hardware-notice", i.prototype.events = {
            "click .btn": "showDetails"
        }, i.prototype.initialize = function(t) {
            return this.collection = t.collection, this.collection.isEmpty() ? $(this.el).addClass("hidden") : void 0
        }, i.prototype.render = function() {
            return this.collection.isEmpty() ? $(this.el).addClass("hidden") : ($(this.el).removeClass("hidden"), $(this.el).find("span").html(this.collection.length))
        }, i.prototype.showDetails = function() {
            return this.details = new Prey.Views.B2C.ModifiedHardwareModal({
                collection: this.collection
            }), this.details.render(), !1
        }, i.prototype.close = function() {
            return Debug("CLOSE NOTICE VIEW"), $(this.el).addClass("hidden"), this.stopListening(), this.undelegateEvents(), this.unbind(), this.details ? this.details.close() : void 0
        }, i
    }(Backbone.View), Prey.Views.B2C.ModifiedHardwareModal = function(e) {
        function i() {
            return this.clearChanges = t(this.clearChanges, this), this.close = t(this.close, this), this.closeModal = t(this.closeModal, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.el = "#modal", i.prototype.events = {
            "click button.clear-changes": "clearChanges"
        }, i.prototype.initialize = function(t) {
            return this.collection = t.collection, window.current_modal && window.current_modal.close(), window.current_modal = this
        }, i.prototype.template = function() {
            return JST["v3/templates/b2c/devices/modals/hardware_modifications"]()
        }, i.prototype.render = function() {
            return Prey.Helpers.BootstrapHelpers.showModal(this.template(), "Hardware modification details", {
                modal_name: "modified-hardware"
            }), this.modified_info_view = new Prey.Views.B2C.Device.HardwareModifiedCollection({
                collection: this.collection
            }), this.modified_info_view.render()
        }, i.prototype.closeModal = function() {
            return Prey.Helpers.BootstrapHelpers.hideModal(), this.close()
        }, i.prototype.close = function() {
            return this.stopListening(), this.undelegateEvents(), this.unbind(), this.modified_info_view ? this.modified_info_view.close() : void 0
        }, i.prototype.clearChanges = function() {
            var t;
            return t = $(this.el).find(".clear-changes"), $.rails.disableFormElement(t), $.ajax({
                url: "/devices/" + current_device.get("key") + ".json",
                method: "put",
                data: {
                    device: {
                        clear_hardware_changes: 1
                    }
                },
                beforeSend: function(t) {
                    return function() {
                        return $.rails.disableFormElement($(t.el).find("button"))
                    }
                }(this),
                success: function(t) {
                    return function() {
                        return $.rails.enableFormElement($(t.el).find("button")), device_view.secondary_view.fetchHardwareData(), current_device.fetch({
                            success: function() {
                                return current_view.navigation_view.render()
                            }
                        }), t.closeModal()
                    }
                }(this),
                error: function(t) {
                    return function(e) {
                        return $.rails.enableFormElement($(t.el).find("button")), Debug(e)
                    }
                }(this)
            }), !1
        }, i
    }(Backbone.View), Prey.Views.B2C.Device.HardwareModifiedItem = function(e) {
        function i() {
            return this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.tagName = "div", i.prototype.className = "hardware", i.prototype.template = function(t) {
            return JST["v3/templates/b2c/devices/modified_hardware_item"](t)
        }, i
    }(Backbone.Marionette.ItemView), Prey.Views.B2C.Device.HardwareModifiedCollection = function(t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }
        return n(e, t), e.prototype.itemView = Prey.Views.B2C.Device.HardwareModifiedItem, e.prototype.el = "#modified-content", e.prototype.onBeforeRender = function() {
            return this.el.innerHTML = ""
        }, e
    }(Backbone.Marionette.CollectionView), Prey.Views.B2C.Device.HardwareItem = function(e) {
        function i() {
            return this.onRender = t(this.onRender, this), this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.tagName = "div", i.prototype.template = function(t) {
            return JST["v3/templates/b2c/devices/hardware_info_row"](t)
        }, i.prototype.onRender = function() {
            return Debug("RENDERING HARDWARE"), $(this.el).addClass("hardware")
        }, i
    }(Backbone.Marionette.ItemView), Prey.Views.B2C.Device.HardwareCollection = function(t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }
        return n(e, t), e.prototype.itemView = Prey.Views.B2C.Device.HardwareItem, e.prototype.el = "#general-hardware-info", e.prototype.emptyView = Prey.Helpers.HWEmptyView, e.prototype.onBeforeRender = function() {
            return this.empty_view || (this.empty_view = new Prey.Helpers.HWEmptyView), this.collection.isEmpty() ? this.empty_view.render() : this.empty_view.close()
        }, e.prototype.close = function() {
            var t, e;
            if (!this.isClosed && (t = Array.prototype.slice.call(arguments), e = this.triggerMethod.apply(this, ["before:close"].concat(t)), e !== !1)) return this.isClosed = !0, this.triggerMethod.apply(this, ["close"].concat(t)), this.unbindUIElements(), this.stopListening(), this.undelegateEvents(), this.unbind(), this.el.innerHTML = "", Debug("CLOSING HW COLLECTION VIEW")
        }, e
    }(Backbone.Marionette.CollectionView), Prey.Views.B2C.DeviceSettings = function(e) {
        function i() {
            return this.showMap = t(this.showMap, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.el = "#device-config", i.prototype.initialize = function(t) {
            return Debug("B2C Device SETTINGS! model " + t.model), this.model = t.model, this.render()
        }, i.prototype.template = function() {
            return JST["v3/templates/b2c/devices/config"](this.model.toJSON())
        }, i.prototype.render = function() {
            return $(this.el).html(this.template), $(".current").removeClass("current"), $("#device").addClass("current"), $(this.el).addClass("current")
        }, i.prototype.showMap = function() {
            return this.map = JST["v3/templates/b2c/devices/map"](this.model.toJSON())
        }, i
    }(Backbone.View), Prey.Views.B2C.DeviceNavigation = function(e) {
        function i() {
            return this.close = t(this.close, this), this.renderSecondary = t(this.renderSecondary, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.el = "#nav-device", i.prototype.events = {
            "click li a": "renderSecondary"
        }, i.prototype.initialize = function(t) {
            return this.model = t.model, this.device_view = window.device_view, $(this.el).addClass("current"), this.listenTo(this.model, "change:unread_report", this.render)
        }, i.prototype.template = function() {
            return JST["v3/templates/b2c/devices/navigation"](this.model.toJSON())
        }, i.prototype.render = function() {
            return $(this.el).html(this.template)
        }, i.prototype.renderSecondary = function(t) {
            var e;
            switch (e = $(t.currentTarget), Backbone.history.navigate(e.attr("href"), {
                trigger: !1
            }), e.data("view")) {
                case "map":
                    return this.device_view.showMap(), this.device_view.handleCurrentView(), this.device_view.enableViewingContent();
                case "reports":
                    return this.device_view.showReports(), this.device_view.secondary_view.handleCurrentView();
                case "activity":
                    return this.device_view.showActivities(), this.device_view.secondary_view.render(), this.device_view.enableViewingContent();
                case "hardware":
                    return Debug("HARDWARE FROM LINKS!"), this.device_view.showHardware(), this.device_view.secondary_view.render(), this.device_view.enableViewingContent();
                default:
                    return "none"
            }
        }, i.prototype.close = function() {
            return this.stopListening(), this.undelegateEvents(), this.unbind()
        }, i
    }(Backbone.View), Prey.Views.B2C.DeviceReports = function(e) {
        function i() {
            return this.showSingleReport = t(this.showSingleReport, this), this.backToDevice = t(this.backToDevice, this), this.handleCurrentView = t(this.handleCurrentView, this), this.toggleReportMap = t(this.toggleReportMap, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.el = "#device-reports", i.prototype.menu = "#nav-primary-devices", i.prototype.view_for_current = [$("#device"), $("#device-reports")], i.prototype.parent_section = $("#device"), i.prototype.events = {
            "click .bar .btn.btn-hover": "backToDevice",
            "click .js-toggle-report-map": "toggleReportMap"
        }, i.prototype.initialize = function(t) {
            return this.model = t.model, $(this.el).addClass("current"), this.device_view = window.device_view, this.reports = new Prey.Collections.Reports, this.reports_view = new Prey.Views.B2C.Device.Reports({
                collection: this.reports,
                single_report: t.report_id
            }), this.reports.fetch({
                url: "/devices/" + t.model.id + "/reports.json",
                reset: !0
            }), $(this.el).find("header").html(this.template), this.reports_view.on("collection:rendered", function(t) {
                return function(e) {
                    return t.device_view.report_id ? t.showSingleReport(t.device_view.report_id) : e.displayStats()
                }
            }(this)), i.__super__.initialize.apply(this, arguments)
        }, i.prototype.template = function() {
            return JST["v3/templates/b2c/devices/report_header"](this.model.toJSON())
        }, i.prototype.render = function() {}, i.prototype.toggleReportMap = function(t) {
            return $(t.currentTarget).hasClass("active") ? void 0 : this.reports_view.toggleMapView(t)
        }, i.prototype.findChild = function(t) {
            var e;
            return e = this.reports.findWhere({
                id: t
            }), this.reports_view.children.findByModel(e)
        }, i.prototype.handleCurrentView = function() {
            return i.__super__.handleCurrentView.apply(this, arguments), this.reports_view.display_map ? this.reports_view.isMapReady() ? void 0 : this.reports_view.setupMap() : $("#device-report-detail").addClass("current")
        }, i.prototype.close = function() {
            return this.reports_view.close(), i.__super__.close.apply(this, arguments)
        }, i.prototype.backToDevice = function(t) {
            var e;
            return Debug("back to device silently"), e = $(t.currentTarget), Backbone.history.navigate(e.attr("href"), {
                trigger: !1
            }), this.device_view.handleCurrentView(), this.device_view.showMap()
        }, i.prototype.showSingleReport = function(t) {
            return this.reports_view.showSingleReport(t)
        }, i
    }(Prey.Extensions.View), Prey.Views.B2C.DeviceActionsNotice = function(e) {
        function i() {
            return this.close = t(this.close, this), this.render = t(this.render, this), this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.el = "#action-alert", i.prototype.template = function() {
            return JST["v3/templates/b2c/devices/action_alert"]()
        }, i.prototype.render = function() {
            return $(this.el).html(this.template), this.show()
        }, i.prototype.hide = function() {
            return $(this.el).addClass("hidden")
        }, i.prototype.show = function() {
            return $(this.el).removeClass("hidden")
        }, i.prototype.close = function() {
            return $(this.el).html(""), this.stopListening(), this.undelegateEvents(), this.unbind()
        }, i
    }(Backbone.View), Prey.Views.B2C.DeviceActions = function(e) {
        function i() {
            return this.toggleDeviceActionsWidth = t(this.toggleDeviceActionsWidth, this), this.compressActions = t(this.compressActions, this), this.expandActions = t(this.expandActions, this), this.handle = t(this.handle, this), this.mark_stopped = t(this.mark_stopped, this), this.mark_started = t(this.mark_started, this), this.handleDisplayForMobile = t(this.handleDisplayForMobile, this), this.show = t(this.show, this), this.hide = t(this.hide, this), this.close = t(this.close, this), this.hideNotice = t(this.hideNotice, this), this.showNotice = t(this.showNotice, this), this.refresh = t(this.refresh, this), this.handleNotice = t(this.handleNotice, this), this.isPendingActions = t(this.isPendingActions, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.el = "#device-actions-panel", i.prototype.events = {
            "click .js-toggle-actions-width": "toggleDeviceActionsWidth"
        }, i.prototype.initialize = function(t) {
            return this.model = t.model, this.actions = $(this.el), this.toggle = this.actions.find(".js-toggle-actions-width"), this.push_elements = $(".js-move-with-action-panel"), this.listenTo(this.model.getCachedModel(), "change:virtual_status", this.handleNotice), this.device_modules = new Prey.Collections.DeviceModules({
                device_id: this.model.id
            })
        }, i.prototype.template = function() {
            return JST["v3/templates/b2c/devices/actions"](this.model.toJSON())
        }, i.prototype.render = function() {
            return $(this.el).html(this.template), this.links = new Prey.Views.B2C.Device.collection_modules({
                collection: this.device_modules
            }), Debug("RENDER DEVICE ACTIONS"), this.device_modules.fetch({
                success: function(t) {
                    return function() {
                        return t.notice_view = new Prey.Views.B2C.DeviceActionsNotice, t.showNotice()
                    }
                }(this)
            }), this.show()
        }, i.prototype.isPendingActions = function() {
            var t;
            return t = this.device_modules.models.filter(function(t) {
                return t.get("pending_actions")
            }), t.length > 0
        }, i.prototype.handleNotice = function() {
            return Debug("HANDLE NOTICE"), this.model.is_offline() ? this.showNotice() : this.hideNotice()
        }, i.prototype.refresh = function() {
            return this.notice_view.hide(), this.device_modules.fetch({
                success: function(t) {
                    return function() {
                        return t.showNotice()
                    }
                }(this)
            })
        }, i.prototype.showNotice = function() {
            return Debug("SHOW NOTICE " + this.isPendingActions()), this.isPendingActions() ? this.model.is_offline() ? this.notice_view.render() : void 0 : void 0
        }, i.prototype.hideNotice = function() {
            return Debug("HIDE NOTICE"), this.isPendingActions() ? this.notice_view.hide() : void 0
        }, i.prototype.close = function() {
            return this.hide(), $(this.el).html(""), this.stopListening(), this.undelegateEvents(), this.unbind()
        }, i.prototype.hide = function() {
            return $(this.el).addClass("hidden"), this.push_elements.removeClass("push pull")
        }, i.prototype.show = function() {
            return this.handleDisplayForMobile(), $(this.el).removeClass("hidden")
        }, i.prototype.handleDisplayForMobile = function() {
            return Prey.Helpers.isTiny(function(t) {
                return function(e) {
                    return e ? t.compressActions() : t.expandActions()
                }
            }(this))
        }, i.prototype.mark_started = function(t) {
            var e;
            return e = this.device_modules.findWhere({
                name: t.info
            }), e.start(), window.device_actions.hideNotice()
        }, i.prototype.mark_stopped = function(t) {
            var e;
            return e = this.device_modules.findWhere({
                name: t.info
            }), e.stop(), window.device_actions.hideNotice()
        }, i.prototype.handle = function(t) {
            return JST["v3/templates/b2c/devices/forms/" + t.type], Prey.Helpers.BootstrapHelpers.showModal(t.type, "dsds"), !1
        }, i.prototype.expandActions = function() {
            return this.actions.removeClass("device-actions-compressed"), this.actions.addClass("device-actions-expanded"), this.toggle.attr("data-original-title", "Compress actions panel"), this.push_elements.removeClass("pull").addClass("push")
        }, i.prototype.compressActions = function() {
            return this.actions.removeClass("device-actions-expanded"), this.actions.addClass("device-actions-compressed"), this.toggle.attr("data-original-title", "Expand actions panel"), this.push_elements.removeClass("push").addClass("pull")
        }, i.prototype.toggleDeviceActionsWidth = function() {
            return this.toggle.tooltip("hide"), this.actions.hasClass("device-actions-compressed") ? this.expandActions() : this.compressActions(), window.device_map._onResize(), !1
        }, i
    }(Backbone.View), Prey.Views.B2C.Device.activityItem = function(e) {
        function i() {
            return this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.tagName = "tr", i.prototype.template = function(t) {
            return JST["v3/templates/b2c/devices/activities"](t)
        }, i
    }(Backbone.Marionette.ItemView), Prey.Views.B2C.Device.activitiesCollection = function(e) {
        function i() {
            return this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.itemView = Prey.Views.B2C.Device.activityItem, i.prototype.el = "#table-activity-log tbody", i.prototype.initialize = function() {}, i.prototype.onBeforeRender = function() {
            return this.el.innerHTML = ""
        }, i
    }(Backbone.Marionette.CollectionView), Prey.Views.B2C.Device.module_item = function(e) {
        function i() {
            return this.getModuleForm = t(this.getModuleForm, this), this.checkActionStates = t(this.checkActionStates, this), this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.prototype.tagName = "li", i.prototype.events = {
                "click .device-action-item": "getModuleForm"
            }, i.prototype.template = function() {
                return this.checkActionStates(), JST["v3/templates/b2c/devices/action_link"](this.model.toJSON())}, i.prototype.checkActionStates = function() {
    var t, e;
    return _.isNull(this.model.get("running_actions")) || (e = I18n.t("actions.active"), t = "is-active"), _.isNull(this.model.get("pending_actions")) || (e = I18n.t("actions.pending"), t = "status-blink is-pending"), this.model.set({
        status_class: t,
        status_label: e
    })
}, i.prototype.getModuleForm = function(t) {
    return this.target = $(t.currentTarget), $.ajax({
        url: this.target.attr("href"),
        method: "GET",
        beforeSend: function(t) {
            return function() {
                return t.target.addClass("is-loading")
            }
        }(this)
    }).done(function(t) {
        return function() {
            return t.target.removeClass("is-loading")
        }
    }(this)), !1
}, i
}(Backbone.Marionette.ItemView), Prey.Views.B2C.Device.collection_modules = function(t) {
    function e() {
        return e.__super__.constructor.apply(this, arguments)
    }
    return n(e, t), e.prototype.itemView = Prey.Views.B2C.Device.module_item, e.prototype.el = "#device-actions-list", e.prototype.onRender = function() {
        return Debug("DEVICE ACTION SHOW NOTICE PLEASE")
    }, e.prototype.onBeforeRender = function() {
        return this.el.innerHTML = ""
    }, e
}(Backbone.Marionette.CollectionView), Prey.Views.B2C.Device.ToggleActionForm = function(e) {
    function i() {
        return this.onSuccessCallback = t(this.onSuccessCallback, this), this.handleFormResponse = t(this.handleFormResponse, this), this.handleForm = t(this.handleForm, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.el = "#toggle-action-form", i.prototype.initialize = function(t) {
        return this.model = new Prey.Models.Device(t.model)
    }, i.prototype.events = {
        "submit form": "handleForm"
    }, i.prototype.handleForm = function() {
        var t;
        return this.form_params = Backbone.Syphon.serialize(this), t = new Prey.Models.Device(this.form_params), t.url = "/devices/" + this.model.get("key") + "/toggle_action", t.save(this.form_params, {
            beforeSend: function(t) {
                return function() {
                    return $(".form-control-error-message").remove(), $(".form-control-error").removeClass("form-control-error"), $.rails.disableFormElements($(t.el).find("form"))
                }
            }(this),
            success: function(t) {
                return function(e, n) {
                    t.handleFormResponse(e, n)
                }
            }(this),
            error: function(t) {
                return function(e, n) {
                    var i, r, s, o, a, l;
                    if (422 === n.status) {
                        if ($.rails.enableFormElements($(t.el).find("form")), n.responseJSON && n.responseJSON.errors)
                            for (s = Object.keys(n.responseJSON.errors), a = 0, l = s.length; l > a; a++) r = s[a], o = n.responseJSON.errors[r], i = $("#" + r), i.addClass("form-control-error"), i.after("<p class='form-control-error-message'>" + o + "</p>")
                    } else error_view.render()
                }
            }(this)
        }), !1
    }, i.prototype.handleFormResponse = function(t) {
        var e, n, i;
        return t.get("target"), e = $("[data-action-type='" + t.get("target") + "']"), n = e.find(".text-help"), i = e.find(".status-line"), "start" === this.form_params.command ? (e.addClass("is-running"), i.addClass("is-pending status-blink"), window.device_actions.showNotice(), n.html("This action is pending")) : (i.removeClass("is-pending is-active status-blink"), e.removeClass("is-running"), window.device_actions.render()), Prey.Helpers.BootstrapHelpers.hideModal()
    }, i.prototype.onSuccessCallback = function() {
        return Debug("SEND FORM")
    }, i
}(Backbone.View)
}.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            n = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        Prey.Views.B2C.Devices = function(e) {
            function i() {
                return this.defaultErrorHandler = t(this.defaultErrorHandler, this), this.close = t(this.close, this), this.initialize = t(this.initialize, this), this.launchModal = t(this.launchModal, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.el = "#device-list", i.prototype.menu = "#nav-primary-devices", i.prototype.view_for_current = [$("#device"), $("#device-list")], i.prototype.events = {
                "click a.js-add-device": "launchModal"
            }, i.prototype.launchModal = function() {
                var t;
                return t = $("#download-links").html(), Prey.Helpers.BootstrapHelpers.showModal(t, "Add New Device", {
                    noheader: !1,
                    modal_name: "add-device",
                    dialog_class: "modal-sm"
                }), !1
            }, i.prototype.initialize = function() {
                return Debug("B2C Devices list!"), this.devices || (this.devices = new Prey.Collections.Devices), this.devices_view || (this.devices_view = new Prey.Views.B2C.Devices.collection({
                    collection: this.devices
                })), this.title = "All Devices", window.global_map && (window.global_map.resetZoom(), window.global_map.clearMarkers()), this.listenTo(this.devices, "error", this.defaultErrorHandler), this.devices.fetch({
                    reset: !0
                }), this.devices.on("reset", function(t) {
                    return function() {
                        var e, n, i, r, s;
                        return e = window.current_account, s = e.get("used"), r = e.get("total"), n = Math.round(s / r * 100), n >= 100 && (n = 100), i = (n / 100).toFixed(1).replace(".", ""), $("#account-info").html(I18n.t("devices.stats", {
                            used: s,
                            total: r
                        })), $(".progress-bar").css({
                            width: "" + n + "%"
                        }).addClass("progress-meter-" + i), $(".upgrade-link").addClass("color-meter-" + i), current_account.performUpgradeNeeded() && current_account.haveObsoleteDevices(t.devices) ? t.displayCornerNotices() : void 0
                    }
                }(this)), i.__super__.initialize.apply(this, arguments)
            }, i.prototype.displayCornerNotices = function() {
                return this.corner_notice = new Prey.Views.General.CornerNotice, this.corner_notice.display()
            }, i.prototype.close = function() {
                return this.devices_view.close(), i.__super__.close.apply(this, arguments)
            }, i.prototype.defaultErrorHandler = function(t, e) {
                return 404 === e.status || 500 === e.status ? error_view.render({
                    status: e.status
                }) : void 0
            }, i
        }(Prey.Extensions.View), Prey.Views.B2C.Devices.item = function(e) {
            function i() {
                return this.addMapPin = t(this.addMapPin, this), this.showReportFromMarker = t(this.showReportFromMarker, this), this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.tagName = "li", i.prototype.template = function(t) {
                return JST["v3/templates/b2c/devices/all"](t)
            }, i.prototype.showReportFromMarker = function() {
                var t;
                return t = "/devices/" + this.model.get("key"), Backbone.history.navigate(t, {
                    trigger: !0
                })
            }, i.prototype.addMapPin = function() {
                var t, e;
                return t = this.model.get("location"), e = new L.marker([t.lat, t.lng], {
                    icon: window.global_map.deviceIcon()
                }), e.on("click", this.showReportFromMarker), window.global_map.addLayer(e), e
            }, i
        }(Backbone.Marionette.ItemView), Prey.Views.B2C.Devices.collection = function(e) {
            function i() {
                return this.close = t(this.close, this), this.onAfterItemAdded = t(this.onAfterItemAdded, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.itemView = Prey.Views.B2C.Devices.item, i.prototype.initialize = function() {
                return this.load_view = new Prey.Helpers.LoadItemsView({
                    el: "#empty-view-container"
                })
            }, i.prototype.el = "#device-list .devices ul", i.prototype.loadView = i.load_view, i.prototype.emptyView = Prey.Helpers.NoItemsView, i.prototype.onBeforeRender = function() {
                return Debug("ABOUT TO RENDER DEVICES"), this.load_view.close(), this.el.innerHTML = "", 0 === this.collection.length ? (new Prey.Helpers.NoItemsView, void 0) : window.global_map.buildMarkers()
            }, i.prototype.appendBuffer = function(t, e) {
                return t.$el.append(e), window.global_map.fitAllMarkers()
            }, i.prototype.onAfterItemAdded = function(t) {
                return t.model.get("location") ? t.addMapPin() : void 0
            }, i.prototype.close = function() {
                return this.$el.html("")
            }, i
        }(Backbone.Marionette.CollectionView)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            n = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        Prey.Views.B2C.Device.Reportitem = function(e) {
            function i() {
                return this.showPlainReport = t(this.showPlainReport, this), this.showReport = t(this.showReport, this), this.addMapPin = t(this.addMapPin, this), this.openPopup = t(this.openPopup, this), this.openPopUpAndCheckLocation = t(this.openPopUpAndCheckLocation, this), this.showMapFromMarker = t(this.showMapFromMarker, this), this.showMap = t(this.showMap, this), this.viewingSection = t(this.viewingSection, this), this.showMapOrPlainReport = t(this.showMapOrPlainReport, this), this.checkLocation = t(this.checkLocation, this), this.mapTemplate = t(this.mapTemplate, this), this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.tagName = "li", i.prototype.template = function(t) {
                return this.model = new Prey.Models.Report(t), this.listenTo(this.model, "change:location_address", this.checkLocation), JST["v3/templates/b2c/devices/reports"](t)
            }, i.prototype.events = {
                "click a.report-item": "showMapOrPlainReport"
            }, i.prototype.mapTemplate = function() {
                return JST["v3/templates/b2c/devices/report_map"](this.model.toJSON())
            }, i.prototype.checkLocation = function() {
                return $(".map-popover-body .location").html(this.model.get("location_address"))
            }, i.prototype.showMapOrPlainReport = function(t) {
                return this.viewingSection(), device_view.secondary_view.reports_view.display_map ? this.showMap(t) : this.showPlainReport(t)
            }, i.prototype.viewingSection = function() {
                return device_view.enableViewingContent()
            }, i.prototype.showMap = function(t) {
                var e;
                return this.showReport(t), e = $(this.el).find("a"), Backbone.history.navigate(e.attr("href"), {
                    trigger: !1
                }), $(e).addClass("active"), device_markers.hasLayer(this.marker) ? device_markers.zoomToShowLayer(this.marker, function(t) {
                    return function() {
                        return t.openPopUpAndCheckLocation(t.marker)
                    }
                }(this)) : this.openPopUpAndCheckLocation(this.marker), this.marker
            }, i.prototype.cleanActiveLinks = function() {
                return $("#device-reports ul.reports li a").removeClass("active")
            }, i.prototype.showMapFromMarker = function() {
                var t;
                return this.cleanActiveLinks(), this.model.getLocation(), t = $(this.el).find("a"), $(t).addClass("active"), Backbone.history.navigate(t.attr("href"), {
                    trigger: !1
                }), window.global_map.centerMap(this.model.get("coords")), !1
            }, i.prototype.openPopUpAndCheckLocation = function() {
                return this.showMapFromMarker(), this.marker.openPopup(), window.global_map.centerMap(this.model.get("coords"))
            }, i.prototype.openPopup = function() {
                return device_markers.hasLayer(this.marker) ? device_markers.zoomToShowLayer(this.marker, function(t) {
                    return function() {
                        return t.openPopUpAndCheckLocation(t.marker)
                    }
                }(this)) : this.openPopUpAndCheckLocation(this.marker)
            }, i.prototype.addMapPin = function() {
                return this.marker = new L.marker(this.model.get("coords"), {
                    icon: window.global_map.reportIcon()
                }), this.marker.on("click", this.showMapFromMarker), this.marker.on("popupopen", function(t) {
                    return function() {
                        return t.checkLocation()
                    }
                }(this)), this.marker.bindPopup(this.mapTemplate()), window.global_map.addLayer(this.marker), this.marker
            }, i.prototype.showReport = function(t) {
                return this.model.getLocation(), window.global_map.centerMap(this.model.get("coords")), this.cleanActiveLinks(), t.active ? $(this.el).find("a").addClass("active") : void 0
            }, i.prototype.showPlainReport = function(t) {
                var e;
                return e = $(t.currentTarget), Backbone.history.navigate(e.attr("href"), {
                    trigger: !1
                }), this.cleanActiveLinks(), $(e).addClass("active"), $("#device-report-detail .nano-content").addClass("hidden"), $("#device-report-detail").addClass("current"), $("#report-detail-view").removeClass("hidden"), $.ajax({
                    url: e.attr("href"),
                    method: "GET",
                    success: function(t) {
                        return function(e) {
                            return $("#report-detail-view").html("" + e), t.removeNotification(), current_device.fetch()
                        }
                    }(this),
                    error: function() {}
                })
            }, i.prototype.removeNotification = function() {
                return this.model.get("unread") ? (this.model.set({
                    unread: null
                }), this.render()) : void 0
            }, i
        }(Backbone.Marionette.ItemView), Prey.Views.B2C.Device.Reports = function(e) {
            function i() {
                return this.showSingleReport = t(this.showSingleReport, this), this.toggleMapView = t(this.toggleMapView, this), this.isSingle = t(this.isSingle, this), this.isMapReady = t(this.isMapReady, this), this.setupMap = t(this.setupMap, this), this.addMapPin = t(this.addMapPin, this), this.triggerActiveClick = t(this.triggerActiveClick, this), this.setupItemMarkers = t(this.setupItemMarkers, this), this.setupMapMarkers = t(this.setupMapMarkers, this), this.displayStats = t(this.displayStats, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.el = "#device-reports ul.reports", i.prototype.initialize = function(t) {
                return this.single = t.single_report, this.detail = t.detail, this.load_view = new Prey.Helpers.LoadItemsView({
                    el: "#reports-list-loader"
                }), this.detail_view = new Prey.Views.B2C.Device.ReportDetail, this.empty_view = new Prey.Helpers.NoReportItemsView, window.global_map.clearMarkers()
            }, i.prototype.itemView = Prey.Views.B2C.Device.Reportitem, i.prototype.loadView = i.load_view, i.prototype.displayStats = function() {
                var t;
                return t = "" + this.collection.length + " " + I18n.t("common.of") + " " + ("free" === window.current_account.get("plan") ? 10 : 100) + " " + I18n.t("reports.title"), $("#device-reports hgroup small.ellipsis").text(t), 0 === this.collection.length ? this.detail_view.displayEmpty() : this.detail_view.displayDefault({
                    msg: t
                })
            }, i.prototype.onBeforeRender = function() {
                return this.load_view.close(), Debug("REPORTS ABOUT TO RENDER"), this.setupMapMarkers(), 0 === this.collection.length ? this.empty_view.render() : this.empty_view.close()
            }, i.prototype.setupMapMarkers = function() {
                return this.collection.last() && this.collection.last().get("coords") && device_map.panTo(this.collection.last().get("coords")), window.global_map.buildMarkers()
            }, i.prototype.setupItemMarkers = function() {
                return this.children.each(function(t) {
                    return function(e) {
                        return t.addMapPin(e)
                    }
                }(this))
            }, i.prototype.triggerActiveClick = function() {
                var t;
                return t = this.children.find(function(t) {
                    return $(t.el).find("a").hasClass("active") ? t : void 0
                }), Debug("ACTIVE LINK: " + t), t ? t.showReport({
                    active: !0
                }) : void 0
            }, i.prototype.addMapPin = function(t) {
                if (this.single) {
                    if (t.model.get("id") === parseInt(this.single) && t.model.get("coords")) return t.showReport({
                        active: !0
                    })
                } else if (t.model.get("coords")) return t.addMapPin()
            }, i.prototype.setupMap = function() {
                return window.global_map.clearMarkers(), this.setupItemMarkers(), this.setupMapMarkers(), window.global_map.fitAllMarkers(), window.global_map.setOwnerView("reports-" + current_device.id), $(".js-toggle-actions-mobile").addClass("hidden"), this.collection.isEmpty() && window.global_map.resetZoom(), setTimeout(function() {
                    return window.device_map._onResize()
                }, 100)
            }, i.prototype.isMapReady = function() {
                return window.global_map.owned_by === "reports-" + current_device.id
            }, i.prototype.isSingle = function() {
                return this.single
            }, i.prototype.appendHtml = function(t, e) {
                return t.isBuffering ? (t.elBuffer.appendChild(e.el), t._bufferedChildren.push(e)) : t.$el.prepend(e.el)
            }, i.prototype.close = function() {
                var t, e;
                if (!this.isClosed && (t = Array.prototype.slice.call(arguments), e = this.triggerMethod.apply(this, ["before:close"].concat(t)), e !== !1)) return this.isClosed = !0, this.triggerMethod.apply(this, ["close"].concat(t)), this.unbindUIElements(), this.stopListening(), this.undelegateEvents(), this.unbind(), this.el.innerHTML = "", Debug("CLOSING REPORTS COLLECTION VIEW")
            }, i.prototype.onBeforeClose = function() {
                return $("#device-report-detail").removeClass("current"), $(".js-toggle-report-map").removeClass("active").first().addClass("active")
            }, i.prototype.onClose = function() {
                return $("#device-report-detail .nano-content").addClass("hidden")
            }, i.prototype.toggleMapView = function(t) {
                return $(".js-toggle-report-map").removeClass("active"), $(t.currentTarget).addClass("active"), this.display_map = $("#device-report-detail").hasClass("current"), this.display_map ? (this.detail_view.disableCurrent(), this.setupMap(), this.triggerActiveClick()) : this.detail_view.enableCurrent(), !1
            }, i.prototype.showSingleReport = function(t) {
                var e;
                return e = "/devices/" + current_device.get("key") + "/reports/" + t, $("#device-report-detail .nano-content").addClass("hidden"), $("#device-report-detail").addClass("current"), $("#report-detail-view").removeClass("hidden"), $("#report-item-" + t).addClass("active"), $.get(e, function(t) {
                    return $("#report-detail-view").html("" + t)
                })
            }, i
        }(Backbone.Marionette.CollectionView), Prey.Views.B2C.Device.ReportDetail = function(e) {
            function i() {
                return this.toggleCurrent = t(this.toggleCurrent, this), this.disableCurrent = t(this.disableCurrent, this), this.enableCurrent = t(this.enableCurrent, this), this.hide = t(this.hide, this), this.hideAll = t(this.hideAll, this), this.displayEmpty = t(this.displayEmpty, this), this.displayDefault = t(this.displayDefault, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.el = "#device-report-detail", i.prototype.initialize = function() {
                return $(this.el).addClass("current")
            }, i.prototype.template = function() {
                return $(this.el).html()
            }, i.prototype.displayDefault = function(t) {
                return null == t && (t = {}), this.hideAll(), $(this.el).find("#report-detail-default").removeClass("hidden"), t.msg ? $(this.el).find("#report-detail-default h3").text(t.msg) : void 0
            }, i.prototype.displayEmpty = function() {
                return this.hideAll(), $(this.el).find("#report-detail-empty").removeClass("hidden")
            }, i.prototype.hideAll = function() {
                return $(this.el).find("article").addClass("hidden")
            }, i.prototype.hide = function() {
                return this.disableCurrent(), this.hideAll()
            }, i.prototype.enableCurrent = function() {
                return $(this.el).addClass("current")
            }, i.prototype.disableCurrent = function() {
                return $(this.el).removeClass("current")
            }, i.prototype.toggleCurrent = function() {
                return $(this.el).hasClass("current") ? $(this.el).addClass("current") : $(this.el).removeClass("current")
            }, i
        }(Backbone.View)
    }.call(this),
    function() {}.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            n = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        Prey.Helpers.HWEmptyView = function(e) {
            function i() {
                return this.close = t(this.close, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.el = "#hardware-empty-content", i.prototype.initialize = function(t) {
                return null == t && (t = {}), t && t.el && (this.el = t.el), this.template()
            }, i.prototype.template = function() {
                return $(this.el).removeClass("hidden").html()
            }, i.prototype.close = function() {
                return $(this.el).addClass("hidden")
            }, i
        }(Backbone.View), Prey.Helpers.NoItemsView = function(e) {
            function i() {
                return this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.el = "#nodevices-view-container", i.prototype.initialize = function(t) {
                return null == t && (t = {}), this.template()
            }, i.prototype.template = function() {
                return $(this.el).removeClass("hidden").html()
            }, i
        }(Backbone.View), Prey.Helpers.NoReportItemsView = function(e) {
            function i() {
                return this.close = t(this.close, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.el = "#noreports-view-container", i.prototype.initialize = function() {}, i.prototype.template = function() {
                return $(this.el).removeClass("hidden").html()
            }, i.prototype.render = function() {
                return this.template()
            }, i.prototype.close = function() {
                return $(this.el).addClass("hidden")
            }, i
        }(Backbone.View), Prey.Helpers.LoadItemsView = function(e) {
            function i() {
                return this.close = t(this.close, this), this.render = t(this.render, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.el = "#empty-view-container", i.prototype.initialize = function(t) {
                return null == t && (t = {}), this.render()
            }, i.prototype.render = function() {
                return $(this.el).removeClass("hidden")
            }, i.prototype.close = function() {
                return $(this.el).addClass("hidden")
            }, i
        }(Backbone.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            n = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        Prey.Views.Err = function(e) {
            function i() {
                return this.isCurrent = t(this.isCurrent, this), this.hide = t(this.hide, this), this.render = t(this.render, this), this.handleCurrentView = t(this.handleCurrentView, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.el = "#errors", i.prototype.view_for_current = [$("#errors")], i.prototype.initialize = function() {
                return i.__super__.initialize.apply(this, arguments)
            }, i.prototype.template = function(t) {
                return null == t && (t = {}), JST["v3/templates/error"](t)
            }, i.prototype.handleCurrentView = function() {
                return $(".current").removeClass("current"), $(this.el).addClass("current")
            }, i.prototype.render = function(t) {
                return this.handleCurrentView(), $(this.el).html(this.template(t))
            }, i.prototype.hide = function() {
                return $(this.el).removeClass("current")
            }, i.prototype.isCurrent = function() {
                return $(this.el).hasClass("current")
            }, i
        }(Backbone.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            n = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        Prey.Views.MainLoader = function(e) {
            function i() {
                return this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.el = "#main-loader", i.prototype.initialize = function() {
                return this.render()
            }, i.prototype.template = function() {
                return $("#main-loader").html()
            }, i.prototype.render = function() {
                return this.template
            }, i
        }(Backbone.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            n = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        Prey.Views.B2C.DeviceMap = function(e) {
            function i() {
                return this.clearMarkers = t(this.clearMarkers, this), this.reportIconActive = t(this.reportIconActive, this), this.reportIcon = t(this.reportIcon, this), this.setOwnerView = t(this.setOwnerView, this), this.deviceIconActive = t(this.deviceIconActive, this), this.deviceIcon = t(this.deviceIcon, this), this.setIcon = t(this.setIcon, this), this.render = t(this.render, this), this.centerMap = t(this.centerMap, this), this.geocode = t(this.geocode, this), this.geocodeGOOGLE = t(this.geocodeGOOGLE, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.el = "#device-map", i.prototype.initialize = function() {

            }, i.prototype.geocoder = function() {
                return this.ga_geocode || (this.ga_geocode = new google.maps.Geocoder)
            }, i.prototype.geocodeGOOGLE = function(t, e) {
                var n, i;
                n = new google.maps.LatLng(t[0], t[1]), i = this.geocoder().geocode({
                    latLng: n
                }, function() {
                    return function(t, n) {
                        return i = "", n === google.maps.GeocoderStatus.OK ? t[0] ? (Debug("GOT LOCATION!!! " + t[0].formatted_address), e(t[0].formatted_address)) : Debug("No results found") : Debug("Geocoder failed due to: " + n), i
                    }
                }(this))
            }, i.prototype.geocode = function(t, e) {
                var n;
                return n = "https://api.tiles.mapbox.com/v3/prey.ik1cdij5/geocode/" + t[1] + "," + t[0] + ".json", $.ajax({
                    dataType: "json",
                    url: n,
                    success: function() {
                        return function(t) {
                            var n;
                            return t.results ? (n = "" + I18n.t("device.location.geo.near") + " " + t.results[0].map(function(t) {
                                return t.name
                            }).join(", "), Debug("GOT LOCATION!!! " + n), e(n)) : void 0
                        }
                    }(this)
                })
            }, i.prototype.centerMap = function(t) {
                return Debug("PAN MAP: " + t), device_map.panTo(t)
            }, i.prototype.render = function() {
                return $(this.el).addClass("visible")
            }, i.prototype.setIcon = function(t, e) {
                return L.icon({
                    iconUrl: t,
                    iconRetinaUrl: e,
                    shadowUrl: "/assets/v3/markers/shadow-66f82ad7fa78574fd976e8701a7fc21f.png",
                    shadowRetinaUrl: "/assets/v3/markers/shadow@2x-391c8a32d4c1da71aa071b7d3c95c6c6.png",
                    iconSize: [44, 54],
                    shadowSize: [28, 10],
                    iconAnchor: [22, 54],
                    shadowAnchor: [14, 5],
                    popupAnchor: [0, -65]
                })
            }, i.prototype.deviceIcon = function() {
                return new this.setIcon("/assets/v3/markers/default-a43e11c2fdb606d5f76035274d8a72b3.png", "/assets/v3/markers/default@2x-5667b78f115eeabbfd5ac4338d0086f0.png")
            }, i.prototype.deviceIconActive = function() {
                return new this.setIcon("/assets/v3/markers/default-active-5e3ca88e33b4eee5d198a57bcc9fcde7.png", "/assets/v3/markers/default-active@2x-1186576a769be656c7c7a5b8a64183da.png")
            }, i.prototype.setOwnerView = function(t) {
                return this.owned_by = t
            }, i.prototype.reportIcon = function() {
                return new this.setIcon("/assets/v3/markers/report-a9a592e4e4a42ad3f9f4982c925641b5.png", "/assets/v3/markers/report@2x-9a8fe7b728be75ebba6d33c33752a52d.png")
            }, i.prototype.reportIconActive = function() {
                return new this.setIcon("/assets/v3/markers/report-active-e9da3144b3e6c32869ecfb620772f272.png", "/assets/v3/markers/report-active@2x-7a8f584ea94eddb0c742be1855083979.png")
            }, i.prototype.clearMarkers = function() {
                return window.device_markers.clearLayers(window.device_markers.getLayers()), this.single_marker_layer.clearLayers(this.single_marker_layer.getLayers()), window.device_map.closePopup()
            }, i.prototype.popUpPosition = function(t) {
                return window.device_popup.options.offset = t, window.device_popup._updatePosition()
            }, i.prototype.fitAllMarkers = function() {
                return window.device_markers.getBounds()._northEast ? window.device_map.fitBounds(window.device_markers.getBounds()) : void 0
            }, i.prototype.fitSingleMarker = function() {
                return this.single_marker_layer.getBounds()._northEast ? window.device_map.fitBounds(this.single_marker_layer.getBounds()) : void 0
            }, i.prototype.buildMarkers = function() {
                return window.device_map.addLayer(window.device_markers)
            }, i.prototype.addLayer = function(t) {
                return window.device_markers.addLayer(t)
            }, i.prototype.reset = function(t) {
                return null == t && (t = 3), this.clearMarkers(), window.device_map.setZoom(t)
            }, i.prototype.resetZoom = function() {
                return window.device_map.setZoom(1)
            }, i
        }(Backbone.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            n = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        Prey.Views.onBoarding = function(e) {
            function i() {
                return this.render = t(this.render, this), this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
            }
            return n(i, e), i.prototype.el = "#onboarding-container", i.prototype.events = {
                "click .open-whats-new .whats-new-trigger": function() {
                    this.toggleMenu(), this.removeAlert()
                },
                "click .close-whats-new": function(t) {
                    t.preventDefault(), this.toggleMenu(), Prey.Helpers.gtmPushEvent("onboardingIndex", "UX", "where the user leaves onboarding", this.tour_index)
                },
                "click .close-whats-new-alert": function() {
                    this.removeAlert()
                },
                "click #tourButtons #tourNext": "playTourNext",
                "click #tourButtons #tourPrev": "playTourPrev",
                "click #tourButtons #tourStart": "playTourNext",
                "click #tourButtons #tourFinish": "skipTour",
                "click .set-show-again": "skipTour"
            }, i.prototype.initialize = function() {
                return this.options = {
                    data: [{
                        text: I18n.t("onboarding.step_0", {
                            user_name: this.getUserName()
                        })
                    }, {
                        text: I18n.t("onboarding.step_1", {
                            img: "/assets/v3/onboarding/win-step-1-30ae411af79adf9ee6d305b4e4212650.svg"
                        })
                    }, {
                        text: I18n.t("onboarding.step_2", {
                            img: "/assets/v3/onboarding/win-step-2-55c9c8cc5177220d29f372475e08034d.svg"
                        })
                    }, {
                        text: I18n.t("onboarding.step_3", {
                            img: "/assets/v3/onboarding/win-step-3-450ecb64f6c7fc9ab7ff3f4284cafc53.svg"
                        })
                    }, {
                        text: I18n.t("onboarding.step_4", {
                            img: "/assets/v3/onboarding/win-step-4-8952d28eeb4cb18828ebf70a4de54c3e.svg"
                        })
                    }, {
                        text: I18n.t("onboarding.step_5")
                    }]
                }
            }, i.prototype.removeAlert = function() {
                $(".open-whats-new").remove()
            }, i.prototype.getUserName = function() {
                return current_account.get("current_user").name
            }, i.prototype.toggleMenu = function() {
                return this.isAnimating ? !1 : (this.isAnimating = !0, this.isOpen ? ($(this.el).removeClass("init"), $(this.el).find("#tourText img").addClass("closed"), setTimeout(function(t) {
                    return function() {
                        t.path.attr("d", t.initialPath), t.isAnimating = !1
                    }
                }(this), 300)) : ($(this.el).addClass("init"), $(".whats-new-modal").removeClass("hidden"), this.initSimpleTour(), this.path.animate({
                    path: this.pathOpen
                }, 500, mina.bounceout, function(t) {
                    return function() {
                        t.isAnimating = !1
                    }
                }(this))), this.isOpen = !this.isOpen, void 0)
            }, i.prototype.initSimpleTour = function() {
                return this.current_tour_state = this.options.data[0], this.tour_index = this.options.data.indexOf(this.current_tour_state), this.renderTourState()
            }, i.prototype.playTourNext = function() {
                return this.current_tour_state = this.options.data[this.handleTourNextIndex()], this.renderTourState(), !1
            }, i.prototype.playTourPrev = function() {
                return this.current_tour_state = this.options.data[this.handleTourPrevIndex()], this.renderTourState(), !1
            }, i.prototype.renderTourState = function() {
                return $(this.el).find("#tourText").html(this.current_tour_state.text), this.handleButtonDisplay(), this.displayFinishStep()
            }, i.prototype.handleButtonDisplay = function() {
                return $("#tourButtons a.btn").addClass("hidden"), 0 === this.tour_index ? ($("#tourButtons #tourStart").removeClass("hidden as_link").text(I18n.t("onboarding.buttons.start")), $(".whats-new-modal .set-show-again").fadeIn("fast")) : this.tour_index !== this.options.data.length - 1 ? ($("#tourButtons #tourPrev").removeClass("hidden"), $("#tourButtons #tourNext").removeClass("hidden")) : this.tour_index === this.options.data.length - 1 ? ($("#tourButtons #tourFinish").removeClass("hidden"), $("#tourButtons #tourStart").removeClass("hidden"), $("#tourButtons #tourStart").addClass("as_link").text(I18n.t("onboarding.buttons.restart")), $(".whats-new-modal .set-show-again").fadeOut("fast")) : void 0
            }, i.prototype.handleTourNextIndex = function() {
                return this.tour_index = this.tour_index + 1 < this.options.data.length ? this.tour_index + 1 : 0
            }, i.prototype.handleTourPrevIndex = function() {
                return this.tour_index = this.tour_index - 1 <= 0 ? 0 : this.tour_index - 1
            }, i.prototype.displayFinishStep = function() {
                return this.tour_index === this.options.data.length - 1 ? ($("#tourFinish").removeClass("hidden"), $("#tourStart").removeClass("hidden")) : void 0
            }, i.prototype.displayTourButtons = function() {
                return $(this.el).find("#tourButtons")
            }, i.prototype.template = function() {
                return JST["v3/templates/onboarding"]()
            }, i.prototype.render = function() {
                return $(this.el).append(this.template()), this.s = Snap("#morph-shape"), this.path = this.s.select("path"), this.initialPath = this.path.attr("d"), this.pathOpen = $("#morph-shape").attr("data-morph-open"), this.isAnimating = !1, this.isOpen = !1, $(".open-whats-new").removeClass("hidden")
            }, i.prototype.skipTour = function() {
                return this.toggleMenu(), $(this.el).find(".open-whats-new").remove(), $.get("/?skip_welcome=1").done(function() {
                    return window.current_account.set({
                        skip_onboarding: 1
                    })
                }), !1
            }, i
        }(Backbone.View)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            n = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        Prey.Views.PoliceRecommendation = function(e) {
                function i() {
                    return this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.events = {
                    "click .js-police-connect": "submit",
                    "click .js-open-police-report": "showPoliceReportForm",
                    "click .js-open-police-confirmation": "showPoliceConfirmation",
                    "click .js-police-cancel": "cancel"
                }, i.prototype.initialize = function(t) {
                    return null == t && (t = {}), i.__super__.initialize.apply(this, arguments), this.modal_title = "<i class='icon-connect'></i>" + I18n.t("police.modal_title"), this.modal_options = {
                        modal_name: "police-recomendation"
                    }
                }, i.prototype.template = function() {
                    return JST["v3/templates/police/recommendation"]()
                }, i.prototype.showPoliceReportForm = function() {
                    return this.close(), this.police_modal = new Prey.Views.PoliceReportView, this.police_modal.render(), !1
                }, i.prototype.showPoliceConfirmation = function(t) {
                    return null == t && (t = {}), this.close(), this.police_modal = new Prey.Views.PoliceConfirmation, this.police_modal.model = new Prey.Models.PoliceCase(t), this.police_modal.render(), !1
                }, i.prototype.submit = function() {
                    return Debug("Accept recomendation , show police report form"), this.showPoliceConfirmation({})
                }, i.prototype.cancel = function() {
                    return this.closeModal()
                }, i
            }(Prey.Extensions.Modal), Prey.Views.PoliceReportView = function(t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return n(e, t), e.prototype.events = {
                        "click .js-police-generate-report": "displayAlertSuccess",
                        "click .js-close-modal": "closeModal"
                    }, e.prototype.initialize = function(t) {
                        return null == t && (t = {}), e.__super__.initialize.apply(this, arguments), this.model = new Prey.Models.PoliceCase({
                            device_id: current_device.id
                        }), this.modal_title = "Datos que te pedirá la policía", this.modal_options = {
                            modal_name: "police-report",
                            dialog_class: "modal-lg"
                        }}, e.prototype.template = function() {
    return JST["v3/templates/police/report"](this.model.toJSON())
}, e.prototype.closeModal = function() {
    return e.__super__.closeModal.apply(this, arguments), !1
}, e
}(Prey.Extensions.Modal), Prey.Views.PoliceConfirmation = function(e) {
    function i() {
        return this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.events = {
        "click .js-police-connect": "submit",
        "click .js-police-cancel": "cancelConnection",
        "click .js-close-modal": "closeModal",
        "change #case_region": "searchLocations",
        "change #case_institution": "displayLocationFields"
    }, i.prototype.initialize = function() {
        return i.__super__.initialize.apply(this, arguments), this.model = new Prey.Models.PoliceCase({
            device_id: current_device.id
        }), this.modal_title = I18n.t("police.report.title"), this.modal_options = {
            modal_name: "police-confirmation"
        }
    }, i.prototype.template = function() {
        return JST["v3/templates/police/confirmation"](this.model.toJSON())
    }, i.prototype.confirmConnection = function() {
        return Debug("Police Connection Confirmed!"), this.displayAlertSuccess(), current_device.fetch({
            success: function() {
                return function() {
                    return current_view.render_view()
                }
            }(this)
        })
    }, i.prototype.cancelConnection = function() {
        return Debug("Police Connection Revoked!"), this.closeModal(), !1
    }, i.prototype.submit = function() {
        var t;
        return this.form_params = Backbone.Syphon.serialize(this), t = this, $.ajax({
            method: "POST",
            data: this.form_params,
            url: "/devices/" + current_device.id + "/police_case",
            beforeSend: function() {},
            success: function() {
                return function() {
                    return t.confirmConnection()
                }
            }(this),
            error: function(t) {
                return function(e) {
                    return Debug("error"), Debug(e), t.displayValidations(e.responseJSON)
                }
            }(this),
            done: function() {
                return alert("done")
            }
        }), !1
    }, i.prototype.displayRegions = function(t) {
        var e;
        e = $("#case_region"), e.find("option").remove(), e.append("<option value=''>" + I18n.t("police.report.select_region") + "</option>"), _.each(t, function(t) {
            return e.append("<option value=" + t.id + ">" + t.name + "</option>")
        })
    }, i.prototype.displayWithModel = function() {
        return this.model.fetch({
            url: "/devices/" + current_device.id + "/police_case",
            success: function(t) {
                return function() {
                    return t.render()
                }
            }(this)
        })
    }, i.prototype.displayValidations = function(t) {
        return $(this.el).find("form .error").remove(), _.each(_.keys(t.errors), function(e) {
            return function(n) {
                var i, r, s, o, a;
                return r = n.replace(".", "_"), i = $(e.el).find("form #" + r), o = t.errors[n].join(", "), s = i.parent().find(".error"), s.length > 0 ? s.text("" + o) : (a = $("<span class='error'>" + o + "</span>"), i.parents(".form-group").append(a))
            }
        }(this))
    }, i.prototype.displayLocationFields = function(t) {
        return _.isEmpty($(t.currentTarget).val()) ? ($(".form-group#regions").addClass("hidden"), $(".form-group#locations").addClass("hidden")) : ($(".form-group#regions").removeClass("hidden"), $(".form-group#locations").removeClass("hidden"), this.clearSelectects())
    }, i.prototype.clearSelectects = function() {
        return $("#case_unit_id").html("").append("<option value=''>" + I18n.t("police.report.select_unit") + "</option>"), $("#case_region option:eq(0)").prop("selected", !0)
    }, i.prototype.getInstitutions = function() {
        return $.ajax({
            url: "/police/departments/PDI.json",
            success: function(t) {
                return function(e) {
                    var n;
                    n = $("#case_institution"), n.find("option").remove(), n.append("<option value=''>" + I18n.t("police.report.select_institution") + "</option>"), _.each(e.institutions, function(t) {
                        return n.append("<option value=" + t.id + ">" + t.name + "</option>")
                    }), t.displayRegions(e.regions)
                }
            }(this),
            error: function() {
                return alert("error retrieving police locations")
            }
        })
    }, i.prototype.searchLocations = function() {
        return $.ajax({
            url: "/police/departments/PDI/locations?region=" + $("#case_region").val() + "&institution=" + $("#case_institution").val(),
            success: function() {
                return function(t) {
                    var e;
                    e = $("#case_unit_id"), e.find("option").remove(), e.append("<option value=''>" + I18n.t("police.report.select_unit") + "</option>"), _.each(t, function(t) {
                        return e.append("<option value=" + t.id + ">" + t.name + "</option>")
                    })
                }
            }(this),
            error: function() {
                return alert("error retrieving police locations")
            }
        })
    }, i.prototype.closeModal = function() {
        return i.__super__.closeModal.apply(this, arguments), !1
    }, i.prototype.render = function() {
        return i.__super__.render.apply(this, arguments), this.getInstitutions()
    }, i
}(Prey.Extensions.Modal)
}.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            n = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        Prey.Views.Settings.Storage = {
                subscription: new Prey.Models.Subscription,
                payments: new Prey.Collections.Payments,
                plans: new Prey.Collections.Plans,
                verify_attempt: 0,
                resetAccount: function() {
                    return function() {
                        return current_account.fetch({
                            success: function() {
                                return _.isUndefined(window.overdue_active) || current_account.isOverdue() || Backbone.history.loadUrl(), Prey.Views.Settings.Storage.subscription.fetch({
                                    success: function() {
                                        return Prey.Views.Settings.Storage.plans.reset(), Prey.Views.Settings.Storage.plans.fetch()
                                    },
                                    error: function() {
                                        return Prey.Views.Settings.Storage.plans.reset(), Prey.Views.Settings.Storage.plans.fetch(), Prey.Views.Settings.Storage.subscription = new Prey.Models.Subscription
                                    }
                                })
                            }
                        })
                    }
                }(this),
                VerifyReturn: function() {
                    return function() {
                        return Debug("SHOULD VERIFY ACCOUNT STATUS"), Prey.Views.Settings.Storage.StatusModal && Prey.Views.Settings.Storage.StatusModal.close(), Prey.Views.Settings.Storage.StatusModal = new Prey.Views.Settings.CheckAccountStatus, Prey.Views.Settings.Storage.StatusModal.setAsCurrent(), Prey.Views.Settings.Storage.VerifyAccountStatus()
                    }
                }(this),
                PaymentReturn: function() {
                    return function() {
                        return new Prey.Views.Settings.ReturnSuccess, Prey.Views.Settings.Storage.resetAccount()
                    }
                }(this),
                VerifyAccountStatus: function() {
                    return function() {
                        return Prey.Views.Settings.Storage.verify_attempt++, Prey.Views.Settings.Storage.StatusModal.render(), $.getJSON("/subscription/verify", {
                            attempt: Prey.Views.Settings.Storage.verify_attempt
                        }, function(t) {
                            "success" === t.status ? (Debug("success!!"), Prey.Views.Settings.Storage.PaymentReturn()) : "waiting" === t.status ? (Debug("waiting!!"), setTimeout(Prey.Views.Settings.Storage.VerifyAccountStatus, 1e3)) : (Debug("error!!"), Prey.Views.Settings.Storage.StatusModal.promptRetry(), Prey.Views.Settings.Storage.StatusModal.delegateEvents())
                        })
                    }
                }(this)
            }, Prey.Views.Settings.Main = function(e) {
                function i() {
                    return this.defaultErrorHandler = t(this.defaultErrorHandler, this), this.close = t(this.close, this), this.resolveNavClick = t(this.resolveNavClick, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.el = "#settings #nav-settings", i.prototype.view_for_current = [$("#settings")], i.prototype.events = {
                    "click li a": "resolveNavClick"
                }, i.prototype.initialize = function() {
                    return this.listenTo(Prey.Views.Settings.Storage.subscription, "error", this.defaultErrorHandler), i.__super__.initialize.apply(this, arguments)
                }, i.prototype.resolveNavClick = function(t) {
                    var e;
                    return e = $(t.currentTarget), $(this.el).find("li a").removeClass("active"), e.attr("href") === "/" + Backbone.history.fragment ? current_view.enableViewingContent() : void 0
                }, i.prototype.close = function() {
                    return Debug("CLOSING VIEW SETTING MENU"), this.stopListening(), this.undelegateEvents(), this.unbind()
                }, i.prototype.defaultErrorHandler = function(t, e) {
                    return e.status < 500 ? void 0 : error_view.render({
                        status: e.status
                    })
                }, i
            }(Backbone.View), Prey.Views.Settings.Account = function(e) {
                function i() {
                    return this.close = t(this.close, this), this.renderPlans = t(this.renderPlans, this), this.handleSubViews = t(this.handleSubViews, this), this.render = t(this.render, this), this.renderStats = t(this.renderStats, this), this.renderCancellSubBtn = t(this.renderCancellSubBtn, this), this.updateStats = t(this.updateStats, this), this.template = t(this.template, this), this.showTerms = t(this.showTerms, this), this.showCloseAccountModal = t(this.showCloseAccountModal, this), this.showCancelSubscriptionModal = t(this.showCancelSubscriptionModal, this), this.showProFeatures = t(this.showProFeatures, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.el = "#account", i.prototype.view_for_current = [$("#account"), $("#settings")], i.prototype.parent_section = $("#settings"), i.prototype.menu = "#nav-primary-settings", i.prototype.initialize = function() {
                    return this.account = window.current_account, this.plans = Prey.Views.Settings.Storage.plans, this.plan_view = new Prey.Views.Settings.PlanCollection({
                        collection: this.plans
                    }), this.check_boxes = new Prey.Views.Settings.SubscriptionCheckboxes({
                        collection_view: this.plan_view
                    }), this.title = I18n.t("navigation.settings.account"), this.listenTo(this.plans, "reset", this.renderStats), this.updateStats(), i.__super__.initialize.apply(this, arguments), this.enableViewingContent(), this.listenTo(window.current_account, "change", this.renderStats)
                }, i.prototype.events = {
                    "click a.js-show-pro-features": "showProFeatures",
                    "click a.js-show-cancel-subscription": "showCancelSubscriptionModal",
                    "click a.js-show-terms": "showTerms",
                    "click a.js-show-close-account": "showCloseAccountModal"
                }, i.prototype.showProFeatures = function() {
                    var t;
                    return t = JST["v3/templates/settings/modals/pro_features"](), Prey.Helpers.BootstrapHelpers.showModal(t, I18n.t("messages.subscriptions.pro_features.title"), {
                        noheader: !1,
                        modal_name: "pro-features",
                        dialog_class: "modal-lg"
                    }), !1
                }, i.prototype.displayLimitDeviceAlert = function() {
                    return alert("TODO: build a modal for device limit in cancel subs"), !1
                }, i.prototype.showCancelSubscriptionModal = function() {
                    var t;
                    return t = new Prey.Views.Settings.CancellSubscription({
                        subscription: Prey.Views.Settings.Storage.subscription
                    }), t.render(), !1
                }, i.prototype.showCloseAccountModal = function() {
                    var t;
                    return t = new Prey.Views.Settings.CloseAccount, t.render(), !1
                }, i.prototype.showTerms = function() {
                    var t;
                    return t = JST["v3/templates/settings/modals/terms"](), Prey.Helpers.BootstrapHelpers.showModal(t, I18n.t("payment_terms.title"), {
                        modal_name: "terms",
                        dialog_class: "modal-md"
                    }), !1
                }, i.prototype.template = function() {
                    return JST["v3/templates/settings/account"](this.model)
                }, i.prototype.updateStats = function() {
                    var t, e, n, i, r;
                    return r = this.account.get("used"), i = this.account.get("total"), n = this.account.get("plan"), t = r / i * 100, e = (Math.round(t) / 100).toFixed(1).replace(".", ""), this.model = {
                        used: r,
                        total: i,
                        average: t,
                        plan: n
                    }, this.renderCancellSubBtn()
                }, i.prototype.renderCancellSubBtn = function() {
                    return "free" === this.account.get("plan") ? ($(".js-show-cancel-subscription").addClass("hidden"), this.check_boxes) : ($(".js-show-cancel-subscription").removeClass("hidden"), this.check_boxes.hide())
                }, i.prototype.renderStats = function() {
                    return Debug("CHANGED CURRENT ACCOUNT"), this.updateStats(), $(this.el).find("#account-status").html(this.template())
                }, i.prototype.render = function() {
                    return $(window).width() < 470 && "section" === window.data_navigation && ($(".viewing-content").removeClass("viewing-content"), window.from_sidebar = !1), $("#nav-settings li a").removeClass("active"), Prey.Helpers.isTiny(function() {
                        return function(t) {
                            return t ? void 0 : $("#settings-account-nav").addClass("active")
                        }
                    }(this)), this.settings_menu = new Prey.Views.Settings.Main, $(this.el).find("#account-status").html(this.template()), this.handleSubViews(), this.displayTitle()
                }, i.prototype.handleSubViews = function() {
                    return Prey.Views.Settings.Storage.subscription.fetch({
                        success: function(t) {
                            return function() {
                                return t.renderPlans()
                            }
                        }(this),
                        error: function(t) {
                            return function() {
                                return t.renderPlans()
                            }
                        }(this)
                    })
                }, i.prototype.renderPlans = function() {
                    return Prey.Views.Settings.Storage.plans.isEmpty() ? Prey.Views.Settings.Storage.plans.fetch({
                        sucess: this.check_boxes.render()
                    }) : this.plan_view.render()
                }, i.prototype.close = function() {
                    return i.__super__.close.apply(this, arguments), this.plan_view.close()
                }, i
            }(Prey.Extensions.View), Prey.Views.Settings.DeviceSet = function(e) {
                function i() {
                    return this.setActiveLink = t(this.setActiveLink, this), this.close = t(this.close, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.el = "#device-set", i.prototype.view_for_current = [$("#device-set"), $("#settings")], i.prototype.parent_section = $("#settings"), i.prototype.menu = "#nav-primary-settings", i.prototype.events = {
                    "click #nav-settings li a": "setActiveLink"
                }, i.prototype.initialize = function() {
                    return Debug("DEVICE SET"), this.settings_menu = new Prey.Views.Settings.Main, this.title = I18n.t("navigation.settings.device_management.title"), i.__super__.initialize.apply(this, arguments)
                }, i.prototype.close = function() {
                    return this.settings_menu.close(), i.__super__.close.apply(this, arguments)
                }, i.prototype.setActiveLink = function(t) {
                    return $("#nav-settings li a").removeClass("active"), $(t.currentTarget).addClass("active")
                }, i
            }(Prey.Extensions.View), Prey.Views.Settings.Billing = function(e) {
                function i() {
                    return this.close = t(this.close, this), this.render = t(this.render, this), this.initialize = t(this.initialize, this), this.updateCc = t(this.updateCc, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.el = "#billing", i.prototype.menu = "#nav-primary-settings", i.prototype.view_for_current = [$("#billing"), $("#settings")], i.prototype.parent_section = $("#settings"), i.prototype.events = {
                    "click a.js-update-cc": "updateCc"
                }, i.prototype.updateCc = function() {
                    var t;
                    return t = new Prey.Views.Settings.UpdateCC, t.render(), !1
                }, i.prototype.initialize = function() {
                    return Debug("BILLING"), i.__super__.initialize.apply(this, arguments), this.enableViewingContent(), $("#nav-settings li a").removeClass("active"), $("#settings-billing-nav").addClass("active"), this.load_view = new Prey.Helpers.LoadItemsView({
                        el: "#billing-info-loader"
                    }), this.payments_view = new Prey.Views.Settings.PaymentsCollection({
                        collection: Prey.Views.Settings.Storage.payments,
                        subscription: Prey.Views.Settings.Storage.subscription
                    }), this.billing_info = new Prey.Views.Settings.BillingInfo({
                        model: Prey.Views.Settings.Storage.subscription,
                        load_view: this.load_view
                    }), this.title = I18n.t("navigation.settings.billing_info"), Prey.Views.Settings.Storage.subscription.fetch({
                        success: function(t) {
                            return function() {
                                return t.billing_info.render(), Prey.Views.Settings.Storage.payments.fetch({
                                    success: function() {
                                        return t.payments_view.render(), $("#nosubscription-view-container").addClass("hidden")
                                    }
                                })
                            }
                        }(this),
                        error: function(t) {
                            return function(e, n) {
                                return 404 === n.status ? (t.payments_view.close(), t.billing_info.close(), $("#subscription-view-container").addClass("hidden"), new Prey.Helpers.NoItemsView({
                                    el: "#nosubscription-view-container"
                                })) : void 0
                            }
                        }(this)
                    })
                }, i.prototype.template = function() {
                    return $(this.el).html()
                }, i.prototype.render = function() {
                    return i.__super__.render.apply(this, arguments), $(this.el).html(this.template), this.displayTitle()
                }, i.prototype.close = function() {
                    return i.__super__.close.apply(this, arguments), this.billing_info.close()
                }, i
            }(Prey.Extensions.View), Prey.Views.Settings.UserProfile = function(e) {
                function i() {
                    return this.close = t(this.close, this), this.initialize = t(this.initialize, this), this.render = t(this.render, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.el = "#user-profile", i.prototype.menu = "#nav-primary-settings", i.prototype.view_for_current = [$("#user-profile"), $("#settings")], i.prototype.parent_section = $("#settings"), i.prototype.render = function() {
                    return $("#nav-settings li a").removeClass("active"), Prey.Helpers.isTiny(function() {
                        return function(t) {
                            return t ? void 0 : $("#settings-profile-nav").addClass("active")
                        }
                    }(this)), this.displayTitle()
                }, i.prototype.initialize = function() {
                    return this.settings_menu = new Prey.Views.Settings.Main, this.user_id = current_account.get("current_user").id, i.__super__.initialize.apply(this, arguments), this.enableViewingContent(), this.title = I18n.t("navigation.settings.profile")
                }, i.prototype.close = function() {
                    return this.settings_menu.close(), i.__super__.close.apply(this, arguments)
                }, i
            }(Prey.Extensions.View), Prey.Views.Settings.Notifications = function(e) {
                function i() {
                    return this.close = t(this.close, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.el = "#notifications", i.prototype.view_for_current = [$("#settings"), $("#notifications")], i.prototype.parent_section = $("#settings"), i.prototype.menu = "#nav-primary-settings", i.prototype.initialize = function() {
                    return this.settings_menu = new Prey.Views.Settings.Main, i.__super__.initialize.apply(this, arguments), this.title = I18n.t("navigation.settings.email_notifications"), this.enableViewingContent(), $("#nav-settings li a").removeClass("active"), Prey.Helpers.isTiny(function() {
                        return function(t) {
                            return t ? void 0 : $("#settings-notification-nav").addClass("active")
                        }
                    }(this)), this.displayTitle()
                }, i.prototype.close = function() {
                    return this.settings_menu.close(), i.__super__.close.apply(this, arguments)
                }, i
            }(Prey.Extensions.View), Prey.Views.Settings.BillingInfo = function(e) {
                function i() {
                    return this.close = t(this.close, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.el = "#billing-info", i.prototype.initialize = function(t) {
                    return this.load_view = t.load_view, this.subscription = t.model, this.listenTo(this.subscription, "change:id", this.render)
                }, i.prototype.template = function() {
                    return JST["v3/templates/settings/billing_info"](this.subscription.toJSON())
                }, i.prototype.render = function() {
                    return this.load_view.close(), $(this.el).html(this.template())
                }, i.prototype.close = function() {
                    return $(this.el).html(""), this.stopListening(), this.undelegateEvents(), this.unbind()
                }, i
            }(Backbone.View), Prey.Views.Settings.ConfirmBillingTermModal = function(e) {
                function i() {
                    return this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.initialize = function(t) {
                    return null == t && (t = {}), i.__super__.initialize.apply(this, arguments), this.price_view = t.price_view, this.model = this.price_view.model, current_account.set({
                        selected_plan: null
                    })
                }, i.prototype.events = {
                    "click .radio-options label": "changeBillingTerm",
                    "click .js-signup-plan-choose": "confirmPlanSelection"
                }, i.prototype.changeBillingTerm = function(t) {
                    var e;
                    return e = $(t.currentTarget), $(".billing-period ." + e.data("term") + " span").click()
                }, i.prototype.confirmPlanSelection = function() {
                    return $.rails.disableElement($(this.el).find(".js-signup-plan-choose")), this.price_view.handlePlanChoose()
                }, i.prototype.template = function() {
                    return this.model.yearly_amount(), JST["v3/templates/settings/modals/confirm_period"](this.model.toJSON())
                }, i
            }(Prey.Extensions.Modal), Prey.Views.Settings.PlanItem = function(e) {
                function i() {
                    return this.raiseDowngradeModal = t(this.raiseDowngradeModal, this), this.downgradeSubmit = t(this.downgradeSubmit, this), this.downgrade = t(this.downgrade, this), this.display_monthly = t(this.display_monthly, this), this.display_yearly = t(this.display_yearly, this), this.displayBillingTermPrice = t(this.displayBillingTermPrice, this), this.renderAmountStatus = t(this.renderAmountStatus, this), this.changePlan = t(this.changePlan, this), this.enableBtnState = t(this.enableBtnState, this), this.loadBtnState = t(this.loadBtnState, this), this.submitCheckout = t(this.submitCheckout, this), this.getFee = t(this.getFee, this), this.currentPlan = t(this.currentPlan, this), this.selectRow = t(this.selectRow, this), this.handlePlanChoose = t(this.handlePlanChoose, this), this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.tagName = "div", i.prototype.className = "plan", i.prototype.events = {
                    "click .plan-actions button": "handlePlanChoose"
                }, i.prototype.onRender = function() {
                    return (this.model.get("name").toLowerCase() === current_account.get("plan") || this.model.get("alias") === current_account.get("plan")) && (Prey.Views.Settings.Storage.current_plan = this.model, $(this.el).addClass("current")), this.displayBillingTermPrice(), this.handlePlanSelectionFromSignups()
                }, i.prototype.handlePlanSelectionFromSignups = function() {
                    var t;
                    if (current_account.get("selected_plan") !== current_account.get("plan")) return t = current_account.get("selected_plan"), t === this.model.get("alias") ? Prey.Views.Settings.Storage.subscription.isNew() ? (Debug("Selected Plan found"), this.confirm_billing_term = new Prey.Views.Settings.ConfirmBillingTermModal({
                        price_view: this
                    }), this.confirm_billing_term.render()) : (Debug("Selected Plan found on existing subscription"), Prey.Views.Settings.Storage.current_plan = this.model.collection.findWhere({
                        alias: current_account.get("plan")
                    }), this.handlePlanChoose()) : void 0
                }, i.prototype.template = function(t) {
                    return JST["v3/templates/settings/plan"](t)
                }, i.prototype.handlePlanChoose = function() {
                    var t, e, n;
                    return this.selectRow(), current_account.get("custom_plan") ? (e = new Prey.Views.Settings.PlanChangeErrorModal({
                        prefix: "custom_plan"
                    }), e.render(), void 0) : (current_account.set({
                        selected_plan: null
                    }), Prey.Views.Settings.Storage.subscription.isNew() ? (t = $(".billing-period input:checked").val(), n = {
                        plan: this.model.get("alias"),
                        interval: t,
                        discount_code: ""
                    }, this.submitCheckout(n)) : this.model.get("monthly_fee") > Prey.Views.Settings.Storage.current_plan.get("monthly_fee") ? this.getFee() : (t = $(".billing-period input:checked").val(), n = {
                        plan: this.model.get("alias"),
                        interval: t,
                        discount_code: ""
                    }, this.downgrade()))
                }, i.prototype.selectRow = function() {
                    return $(".plan").removeClass("selected-plan"), $(this.el).addClass("selected-plan")
                }, i.prototype.currentPlan = function() {
                    return Prey.Views.Settings.Storage.plans.find(function(t) {
                        return t.get("alias") === current_account.get("plan") || t.get("name").toLowerCase() === current_account.get("plan") ? t : void 0
                    })
                }, i.prototype.getFee = function() {
                    var t;
                    return t = this.model.get("alias").toLowerCase(), $.ajax({
                        type: "GET",
                        url: "/subscription/get_fee?plan=" + t,
                        beforeSend: function(t) {
                            return function() {
                                return t.loadBtnState()
                            }
                        }(this),
                        success: function(t) {
                            return function(e) {
                                var n;
                                n = new Backbone.Model, t.model.set({
                                    new_amount: e
                                }), t.renderAmountStatus({
                                    model: t.model
                                }), t.enableBtnState()
                            }
                        }(this),
                        error: function(t) {
                            return function(e, n) {
                                var i;
                                return Debug("ERROR!" + n), $(t.el).find("button .name").text(I18n.t("misc.error")), i = new Prey.Views.Settings.PlanChangeErrorModal({
                                    prefix: "upgrade",
                                    errors: e.responseJSON.errors
                                }), i.render(), setTimeout(function() {
                                    return t.enableBtnState()
                                }, 800)
                            }
                        }(this)
                    })
                }, i.prototype.submitCheckout = function(t) {
                    return this.loadBtnState(), Prey.Views.Settings.Storage.subscription.save(t, {
                        error: function(t) {
                            return function() {
                                var e;
                                return e = JST["v3/templates/settings/modals/upgrade_error"](), Prey.Helpers.BootstrapHelpers.showModal(e, "", {
                                    noheader: !0,
                                    modal_name: "upgrade-error",
                                    dialog_class: "modal-sm"
                                }), t.enableBtnState()
                            }
                        }(this),
                        success: function(t) {
                            return function(e, n) {
                                var i;
                                return i = new Prey.Views.Settings.WorldPayIframe(n), i.render(), t.enableBtnState()
                            }
                        }(this)
                    }), Debug("CHECKOUT FROM NEW"), !1
                }, i.prototype.loadBtnState = function() {
                    return $(this.el).find("button .loader").removeClass("hidden"), $(this.el).find("button .name").text(I18n.t("misc.please_wait"))
                }, i.prototype.enableBtnState = function() {
                    return $(this.el).find("button .loader").addClass("hidden"), $(this.el).find("button .name").text(I18n.t("plans.choose"))
                }, i.prototype.changePlan = function() {
                    var t;
                    return Debug("CHANGE PLAN HERE"), t = this.model.get("name").toLowerCase(), $.ajax({
                        type: "PUT",
                        url: "/subscription.json",
                        data: {
                            plan: t
                        },
                        success: function(t) {
                            return function(e) {
                                var n;
                                n = new Backone.Model, n.set({
                                    amount: e
                                }), t.renderAmountStatus({
                                    model: n
                                }), Debug(e)
                            }
                        }(this),
                        error: function() {
                            return function(t) {
                                _.each(t.responseJSON.errors, function(t, e) {
                                    return alert("" + e + " " + t[0])
                                })
                            }
                        }(this)
                    })
                }, i.prototype.renderAmountStatus = function(t) {
                    var e;
                    return Prey.Views.Settings.Storage.Amountstatus && Prey.Views.Settings.Storage.Amountstatus.close(), Prey.Views.Settings.Storage.Amountstatus = new Prey.Views.Settings.AmountStatus(t), e = Prey.Views.Settings.Storage.Amountstatus.template(), Prey.Helpers.BootstrapHelpers.showModal(e, "", {
                        noheader: !0,
                        modal_name: "change-plan",
                        dialog_class: "modal-sm"
                    }), !1
                }, i.prototype.displayBillingTermPrice = function() {
                    return this.payment_type = $(".billing-period input:checked").val(), "year" === this.payment_type && this.display_yearly(), "month" === this.payment_type ? this.display_monthly() : void 0
                }, i.prototype.display_yearly = function() {
                    var t;
                    return t = I18n.l("currency", this.model.yearly_amount()), $(this.el).find(".plan-price strong").text(t), $(this.el).find(".plan-price small").text(I18n.t("plans.usd_year"))
                }, i.prototype.display_monthly = function() {
                    var t;
                    return t = I18n.l("currency", this.model.get("monthly_fee")), $(this.el).find(".plan-price strong").text(t), $(this.el).find(".plan-price small").text(I18n.t("plans.usd_month"))
                }, i.prototype.downgrade = function() {
                    return this.raiseDowngradeModal()
                }, i.prototype.downgradeSubmit = function() {
                    var t, e;
                    return t = Prey.Views.Settings.Storage.subscription.get("interval"), e = {
                        plan: this.model.get("alias"),
                        interval: t,
                        discount_code: ""
                    }, Prey.Views.Settings.Storage.subscription.save(e, {
                        error: function(t, e) {
                            return this.data = t, this.res = e, setTimeout(function() {
                                return function() {
                                    var t;
                                    return t = new Prey.Views.Settings.PlanChangeErrorModal({
                                        prefix: "downgrade"
                                    }), t.render()
                                }
                            }(this), 400)
                        },
                        success: function(t) {
                            return function(e, n) {
                                return t.loadBtnState(), t.data = e, t.res = n, "error" === n.status ? (setTimeout(function() {
                                    var t;
                                    return t = new Prey.Views.Settings.PlanChangeErrorModal({
                                        prefix: "downgrade"
                                    }), t.render()
                                }, 400), t.enableBtnState()) : "success" === n.status ? (Prey.Helpers.gtmPushEvent("downgradePlan", "churn", "click", "downgrade-plan"), Prey.Views.Settings.Storage.resetAccount()) : void 0
                            }
                        }(this)
                    })
                }, i.prototype.raiseDowngradeModal = function() {
                    var t;
                    return t = new Prey.Views.Settings.ConfirmModal({
                        model: this.model,
                        parent_view: this
                    }), t.render()
                }, i
            }(Backbone.Marionette.ItemView), Prey.Views.Settings.PlanCollection = function(e) {
                function i() {
                    return this.close = t(this.close, this), this.onBeforeRender = t(this.onBeforeRender, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.itemView = Prey.Views.Settings.PlanItem, i.prototype.el = "#plans", i.prototype.initialize = function() {
                    return this.listenTo(this.collection, "request", function(t) {
                        return function() {
                            return t.load_view = new Prey.Helpers.LoadItemsView({
                                el: "#prices-loader"
                            })
                        }
                    }(this)), this.listenTo(this.collection, "add", function(t) {
                        return function() {
                            return t.load_view.close()
                        }
                    }(this)), this.listenTo(this.collection, "reset", function(t) {
                        return function() {
                            return $(t.el).html("")
                        }
                    }(this))
                }, i.prototype.onBeforeRender = function() {
                    return $(this.el).html("")
                }, i.prototype.close = function() {
                    return this.stopListening(), this.undelegateEvents(), this.unbind()
                }, i
            }(Backbone.Marionette.CollectionView), Prey.Views.Settings.ConfirmModal = function(e) {
                function i() {
                    return this.close = t(this.close, this), this.closeModal = t(this.closeModal, this), this.cancel = t(this.cancel, this), this.accept = t(this.accept, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.el = "#modal", i.prototype.events = {
                    "click button.link-danger": "accept",
                    "click button.link": "cancel"
                }, i.prototype.initialize = function(t) {
                    return this.model = t.model, window.current_modal = this, this.parent_view = t.parent_view
                }, i.prototype.template = function() {
                    return JST["v3/templates/settings/modals/confirm_downgrade"](this.model.toJSON())
                }, i.prototype.render = function() {
                    return Prey.Helpers.BootstrapHelpers.showModal(this.template(), "", {
                        noheader: !0,
                        modal_name: "confirm-modal",
                        dialog_class: "modal-sm"
                    })
                }, i.prototype.accept = function() {
                    return this.parent_view.downgradeSubmit(), !1
                }, i.prototype.cancel = function() {
                    return this.closeModal()
                }, i.prototype.closeModal = function() {
                    return Prey.Helpers.BootstrapHelpers.hideModal()
                }, i.prototype.close = function() {
                    return this.stopListening(), this.undelegateEvents(), this.unbind()
                }, i
            }(Backbone.View), Prey.Views.Settings.PlanChangeErrorModal = function(e) {
                function i() {
                    return this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.el = "#modal", i.prototype.initialize = function(t) {
                    return null == t && (t = {}), i.__super__.initialize.apply(this, arguments), this.errors = t.errors || {}, this.mode = t.prefix || "upgrade", this.modal_options = {
                        noheader: !0,
                        modal_name: "upgrade_error",
                        dialog_class: "modal-sm"
                    }, this.parent_view = t.parent_view
                }, i.prototype.template = function() {
                    return JST["v3/templates/settings/modals/" + this.mode + "_error"]()
                }, i.prototype.render = function() {
                    return Prey.Helpers.BootstrapHelpers.showModal(this.template(), this.modal_title, this.modal_options)
                }, i
            }(Prey.Extensions.Modal), Prey.Views.Settings.CheckAccountStatus = function(e) {
                function i() {
                    return this.reject = t(this.reject, this), this.confirm = t(this.confirm, this), this.hideLoader = t(this.hideLoader, this), this.promptRetry = t(this.promptRetry, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.initialize = function() {
                    return i.__super__.initialize.apply(this, arguments), Prey.Views.Settings.Storage.verify_attempt = 0, this.modal_options = {
                        noheader: !0,
                        modal_name: "account_status",
                        dialog_class: "modal-sm"
                    }, this.wp_modal = new Prey.Views.Settings.WorldPayIframe(Prey.Views.Settings.Storage.subscription)
                }, i.prototype.events = {
                    "click .alert-confirm": "confirm",
                    "click .alert-cancel": "reject"
                }, i.prototype.template = function() {
                    return JST["v3/templates/settings/modals/account_status"]()
                }, i.prototype.promptRetry = function() {
                    var t, e;
                    return this.hideLoader(), t = $(this.el).find(".modal-footer"), t.removeClass("hidden"), e = $(this.el).find(".msg"), e.text(I18n.t("subscriptions.process_failed.retry"))
                }, i.prototype.hideLoader = function() {
                    return $(this.el).find(".loader").addClass("hidden")
                }, i.prototype.confirm = function() {
                    return Debug("CLICK CONFIRM"), Prey.Views.Settings.Storage.verify_attempt = 0, this.wp_modal.render(), this.wp_modal.setAsCurrent()
                }, i.prototype.reject = function() {
                    var t;
                    return this.hideLoader(), t = $(this.el).find(".msg"), t.text(I18n.t("subscriptions.process_failed.no_problem")), $(this.el).find(".modal-footer").addClass("hidden"), setTimeout(function(t) {
                        return function() {
                            return t.closeModal()
                        }
                    }(this), 1500)
                }, i
            }(Prey.Extensions.Modal), Prey.Views.Settings.AmountStatus = function(e) {
                function i() {
                    return this.close = t(this.close, this), this.closeModal = t(this.closeModal, this), this.displayTryAgain = t(this.displayTryAgain, this), this.displayError = t(this.displayError, this), this.displaySuccess = t(this.displaySuccess, this), this.submitCheckout = t(this.submitCheckout, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
                }
                return n(i, e), i.prototype.el = "#modal", i.prototype.events = {
                    "click .js-change-plan": "submitCheckout",
                    "click .js-close-modal": "closeModal"
                }, i.prototype.initialize = function(t) {
                    return this.model = t.model, window.current_modal = this
                }, i.prototype.template = function() {
                    return JST["v3/templates/settings/change_plan"](this.model.toJSON())
                }, i.prototype.render = function() {
                    return $(this.el).html(this.template())
                }, i.prototype.submitCheckout = function() {
                    var t, e;
                    return Debug("CHECKOUT FROM UPDATE"), $.rails.disableElement($("#modal button.submit")), t = $(".billing-selection input:checked").val(), e = {
                        plan: this.model.get("alias"),
                        interval: t,
                        discount_code: ""
                    }, Prey.Views.Settings.Storage.subscription.save(e, {
                        error: function(t) {
                            return function() {
                                return t.displayError("something went wrong")
                            }
                        }(this),
                        success: function(t) {
                            return function(e, n) {
                                return "error" === n.status ? t.displayTryAgain(n.msg) : "success" === n.status && t.displaySuccess(), setTimeout(function() {
                                    return t.closeModal()
                                }, 3500), $.rails.enableElement($(t.el).find("button.submit"))
                            }
                        }(this)
                    })
                }, i.prototype.displaySuccess = function() {
                    return $(this.el).find("button.submit").addClass("hidden"), Prey.Views.Settings.Storage.resetAccount(), $(this.el).find(".modal-alert").addClass("modal-success"), $(this.el).find(".state").addClass("hidden"), $(this.el).find(".state-success").removeClass("hidden")
                }, i.prototype.displayError = function(t) {
                    return $(this.el).find(".response-status-default").text(t), $(this.el).find(".response-status-default").addClass("text-warning"), $(this.el).find("button.submit").text(I18n.t("misc.try_again")), $(this.el).find(".state").addClass("hidden"), $(this.el).find(".state-default").removeClass("hidden")
                }, i.prototype.displayTryAgain = function(t) {
                    return $(this.el).find(".response-status-default").text(t), $(this.el).find(".response-status-default").addClass("text-warning"), $(this.el).find("button.submit").text(I18n.t("misc.try_again")), $(this.el).find(".state").addClass("hidden"), $(this.el).find(".state-default").removeClass("hidden")
                }, i.prototype.closeModal = function() {
                    return Prey.Helpers.BootstrapHelpers.hideModal(), this.close()
                }, i.prototype.close = function() {
                    return this.stopListening(), this.undelegateEvents(), this.unbind()
                }, i
            }(Backbone.View), Prey.Views.Settings.SubscriptionCheckboxes = function(e) {
                function i() {
                    return this.alterCollection = t(this.alterCollection, this), this.changeBillingTerm = t(this.changeBillingTerm, this), this.hide = t(this.hide, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)}
return n(i, e), i.prototype.el = "#billing-period", i.prototype.events = {
    "change .checkbox": "changeBillingTerm"
}, i.prototype.initialize = function(t) {
    return this.collection_view = t.collection_view, this.listenTo(Prey.Views.Settings.Storage.subscription, "change:interval", this.alterCollection), this.listenTo(current_account, "change:plan", this.render)
}, i.prototype.template = function() {
    return $(this.el).html()
}, i.prototype.render = function() {
    return "free" === current_account.get("plan") && $(this.el).removeClass("hidden"), Prey.Views.Settings.Storage.subscription.isNew() || "year" !== Prey.Views.Settings.Storage.subscription.get("interval") ? void 0 : $(".annual label").trigger("click")
}, i.prototype.hide = function() {
    return $(this.el).addClass("hidden")
}, i.prototype.changeBillingTerm = function(t) {
    var e;
    return e = $(t.currentTarget).val(), this.alterCollection(e)
}, i.prototype.alterCollection = function(t) {
    return this.payment_type = t, this.collection_view.children.forEach(function() {
        return function(e) {
            return "year" === t && e.display_yearly(), "month" === t ? e.display_monthly() : void 0
        }
    }(this))
}, i
}(Backbone.View), Prey.Views.Settings.WorldPayIframe = function(e) {
    function i() {
        return this.close = t(this.close, this), this.renderReturnSucess = t(this.renderReturnSucess, this), this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.el = "#modal", i.prototype.initialize = function(t) {
        return null == t && (t = {}), Debug(t), this.uri = t.redirect || t.get("redirect"), this.msg = t.msg, i.__super__.initialize.apply(this, arguments)
    }, i.prototype.template = function() {
        return this.uri.match(/worldpay/g) ? "<iframe id='worldpay_frame' src='" + this.uri + "'></iframe>" : "<div class='alert alert-warning'> " + this.msg + " </div>"
    }, i.prototype.renderReturnSucess = function() {
        return this.render()
    }, i.prototype.close = function() {
        return this.verifyStatus(), this.stopListening(), this.undelegateEvents(), this.unbind()
    }, i.prototype.verifyStatus = function() {
        return Debug("SHOULD VERIFY ACCOUNT STATUS"), Prey.Views.Settings.Storage.StatusModal && Prey.Views.Settings.Storage.StatusModal.close(), Prey.Views.Settings.Storage.StatusModal = new Prey.Views.Settings.CheckAccountStatus, Prey.Views.Settings.Storage.StatusModal.setAsCurrent(), Prey.Views.Settings.Storage.VerifyAccountStatus()
    }, i
}(Prey.Extensions.Modal), Prey.Views.Settings.ReturnSuccess = function(e) {
    function i() {
        return this.close = t(this.close, this), this.closeModal = t(this.closeModal, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.el = "#modal", i.prototype.initialize = function() {
        return current_account.fetch({
            success: function(t) {
                return function() {
                    return t.render()
                }
            }(this)
        })
    }, i.prototype.template = function() {
        return JST["v3/templates/settings/modals/pro_congrats"](current_account.toJSON())
    }, i.prototype.render = function() {
        return Prey.Helpers.BootstrapHelpers.showModal(this.template(), "", {
            noheader: !0,
            modal_name: "pro-congrats",
            dialog_class: "modal-md"
        })
    }, i.prototype.closeModal = function() {
        return Prey.Helpers.BootstrapHelpers.hideModal(), this.close()
    }, i.prototype.close = function() {
        return this.stopListening(), this.undelegateEvents(), this.unbind()
    }, i
}(Backbone.View), Prey.Views.Settings.PaymentItem = function(e) {
    function i() {
        return this.downloadPdfInvoice = t(this.downloadPdfInvoice, this), this.showInvoice = t(this.showInvoice, this), this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.tagName = "div", i.prototype.className = "billing-row", i.prototype.events = {
        "click a.js-invoice": "showInvoice",
        "click a.js-pdf-invoice": "downloadPdfInvoice"
    }, i.prototype.template = function(t) {
        return JST["v3/templates/settings/payment_row"](t)
    }, i.prototype.showInvoice = function() {
        var t;
        return t = new Prey.Views.Settings.PaymentDetail({
            model: this.model
        }), t.render(), !1
    }, i.prototype.downloadPdfInvoice = function() {
        var t;
        return t = this.model.collection.indexOf(this.model) + 1, window.location = "/subscription/payments/" + t + ".pdf", !1
    }, i
}(Backbone.Marionette.ItemView), Prey.Views.Settings.PaymentsCollection = function(e) {
    function i() {
        return this.onBeforeRender = t(this.onBeforeRender, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.itemView = Prey.Views.Settings.PaymentItem, i.prototype.el = "#payments-records", i.prototype.initialize = function() {
        return this.load_view = new Prey.Helpers.LoadItemsView({
            el: "#subscription-loader"
        })
    }, i.prototype.onBeforeRender = function() {
        return this.load_view.close(), $("#payments-records-container .billing-table").removeClass("hidden"), $(this.el).html("")
    }, i
}(Backbone.Marionette.CollectionView), Prey.Views.Settings.PaymentDetail = function(e) {
    function i() {
        return this.render = t(this.render, this), this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.initialize = function(t) {
        return null == t && (t = {}), this.model = t.model
    }, i.prototype.template = function() {
        return JST["v3/templates/settings/invoice"](this.model.toJSON())
    }, i.prototype.render = function() {
        return Prey.Helpers.BootstrapHelpers.showModal(this.template(), "", {
            noheader: !0,
            modal_name: "invoice",
            dialog_class: "modal-sm modal-invoice"
        })
    }, i
}(Backbone.View), Prey.Views.Settings.UpdateCC = function(e) {
    function i() {
        return this.render = t(this.render, this), this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.initialize = function(t) {
        null == t && (t = {})
    }, i.prototype.template = function() {
        return JST["v3/templates/settings/update_cc"]()
    }, i.prototype.render = function() {
        return Prey.Helpers.BootstrapHelpers.showModal(this.template(), I18n.t("subscriptions.edit.how_to_update_cc"), {
            noheader: !1,
            modal_name: "update-creditcard",
            dialog_class: "modal-md"
        })
    }, i
}(Backbone.View), Prey.Views.Settings.CancellSubscription = function(e) {
    function i() {
        return this.closeModal = t(this.closeModal, this), this.close = t(this.close, this), this.displayTryAgain = t(this.displayTryAgain, this), this.displayError = t(this.displayError, this), this.displaySuccess = t(this.displaySuccess, this), this.displayConfirm = t(this.displayConfirm, this), this.displayDefault = t(this.displayDefault, this), this.displayAsAlert = t(this.displayAsAlert, this), this.showState = t(this.showState, this), this.validateReason = t(this.validateReason, this), this.validateCheckboxes = t(this.validateCheckboxes, this), this.submit = t(this.submit, this), this.show = t(this.show, this), this.hide = t(this.hide, this), this.cancelSubscription = t(this.cancelSubscription, this), this.render = t(this.render, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.el = "#modal", i.prototype.events = {
        "click .js-cancel-subscription": "handleCancelClick",
        "click .js-close-modal": "closeModal",
        "click .checkbox": "handleChange",
        "click .js-cancel": "displayDefault",
        "click .js-confirm": "submit"
    }, i.prototype.initialize = function(t) {
        return this.subscription = t.subscription, window.current_modal = this, this.devices = new Prey.Collections.Devices
    }, i.prototype.template = function() {
        return JST["v3/templates/settings/cancel_subscription"](this.subscription.toJSON())
    }, i.prototype.render = function() {
        var t;
        return t = I18n.t("v1.account.subscription.cancel_reasons.title"), Prey.Helpers.BootstrapHelpers.showModal(this.template(), t, {
            noheader: !1,
            modal_name: "cancel-subscription",
            dialog_class: "modal-md"
        }), this.devices.fetch({
            success: function(t) {
                return function(e) {
                    return e.length > 3 ? (t.devices_view = new Prey.Views.Settings.DeviceList({
                        collection: e
                    }), t.devices_view.render(), $(t.el).find("#devices-for-deletion").removeClass("hidden")) : void 0
                }
            }(this)
        })
    }, i.prototype.checkboxData = function() {
        return $(this.el).find("input").serializeObject()
    }, i.prototype.validateChecked = function() {
        var t;
        return t = $(this.el).find("input:checkbox:checked"), t.length > 3
    }, i.prototype.handleCancelClick = function() {
        return current_account.get("used") > 3 ? this.displayConfirm() : this.validateReason($(this.el).find(".select select").val()) ? this.cancelSubscription() : void 0
    }, i.prototype.handleChange = function(t) {
        var e, n, i;
        return $(this.el).find("input:checkbox:checked").length >= 3 ? (this.devices_view.$el.addClass("blocked"), $(this.el).addClass("blocked")) : this.devices_view.$el.removeClass("blocked"), this.validateChecked(t) ? !1 : (i = $(t.currentTarget), n = i.parents("li"), e = i.find("input"), e.is(":checked") ? n.addClass("selected") : n.removeClass("selected"))
    }, i.prototype.removeDevices = function() {
        return this.validateCheckboxes() ? $.ajax({
            method: "DELETE",
            url: "devices/keep",
            dataType: "json",
            data: this.checkboxData(),
            beforeSend: function(t) {
                return function() {
                    return $(t.el).find(".js-cancel").hide(), $.rails.disableElement($("#modal button.js-loader"))
                }
            }(this),
            success: function(t) {
                return function(e) {
                    return e.length <= 3 ? t.cancelSubscription() : t.displayError(I18n.t("messages.subscriptions.cancel_error_devices_title"), I18n.t("messages.subscriptions.cancel_error_devices_desc"))
                }
            }(this),
            error: function(t) {
                return function() {
                    return t.displayError(I18n.t("messages.subscriptions.cancel_error_devices_title"), I18n.t("messages.subscriptions.cancel_error_devices_desc"))
                }
            }(this)
        }).done(function() {
            return current_account.fetch()
        }) : void 0
    }, i.prototype.cancelSubscription = function() {
        var t;
        return t = {
            "unsubscribe-reason": $(this.el).find(".select select").val()
        }, $.ajax({
            data: t,
            url: "/subscription",
            method: "DELETE",
            dataType: "json",
            beforeSend: function() {
                return function() {
                    return $.rails.disableElement($("#modal button.js-loader"))
                }
            }(this),
            success: function(t) {
                return function(e) {
                    var n, i;
                    return "error" === e.status ? (i = I18n.t("messages.subscriptions.cancel_error_title"), n = I18n.t("messages.subscriptions.cancel_error_desc"), t.displayError(i, n), $.rails.enableElement($("#modal button.js-loader"))) : "success" === e.status ? (Prey.Views.Settings.Storage.resetAccount(), t.displaySuccess(), setTimeout(function() {
                        return t.closeModal()
                    }, 3500)) : void 0
                }
            }(this),
            error: function(t) {
                return function() {
                    return t.displayError(I18n.t("messages.subscriptions.cancel_error_title"), I18n.t("messages.subscriptions.cancel_error_desc"))
                }
            }(this)
        }).done(function() {
            return current_account.fetch()
        })
    }, i.prototype.hide = function() {
        return $(this.el).addClass("hidden")
    }, i.prototype.show = function() {
        return $(this.el).removeClass("hidden")
    }, i.prototype.submit = function() {
        var t;
        return t = $(this.el).find(".select select").val(), this.validateReason(t) ? current_account.get("used") > 3 ? this.removeDevices() : this.cancelSubscription() : void 0
    }, i.prototype.validateCheckboxes = function() {
        var t;
        return !_.isEmpty(this.checkboxData()["devices[]"]) && this.checkboxData()["devices[]"].length >= 1 ? this.valid = !0 : (t = $(this.el).find(".form-control-error"), t.addClass("text-danger"), t.html("<i class='icon-alert-sign'></i> " + I18n.t("cancel_subscription.select_devices_for_deletion")), t.removeClass("hidden"), this.valid = !1)
    }, i.prototype.validateReason = function(t) {
        var e;
        return _.isEmpty(t) ? (e = $(this.el).find(".form-control-error"), e.addClass("text-danger"), e.html("<i class='icon-alert-sign'></i> " + I18n.t("cancel_subscription.forgot_pick_cancel_reason")), e.removeClass("hidden"), this.valid = !1) : this.valid = !0
    }, i.prototype.showState = function(t) {
        return $(this.el).find(".state").addClass("hidden"), $(this.el).find(".state-" + t).removeClass("hidden"), $(this.el).find(".response-status, .form-control-error").addClass("hidden")
    }, i.prototype.displayAsAlert = function() {
        return $(this.el).find(".modal-dialog").removeClass("modal-md").addClass("modal-sm"), $(this.el).find(".modal-header").addClass("hidden")
    }, i.prototype.displayDefault = function() {
        return this.showState("default"), $(this.el).find(".js-device-list-confirmation").html("")
    }, i.prototype.displayConfirm = function() {
        var t, e, n;
        return $(this.el).find(".js-cancel").show(), this.validateCheckboxes() && this.validateReason($(this.el).find(".select select").val()) ? (this.showState("confirm"), t = $(this.el).find(".js-device-list-confirmation"), e = $(this.el).find(".js-device-list-selectable .selected").clone(), n = current_account.get("used") - e.length, t.append(e), t.find(".device-state").html("<i class='icon-success-sign'></i>"), t.find(".selected").removeClass("selected"), $(this.el).find(".js-device_deletion_alert").html("<i class='icon-info-sign'></i> " + I18n.t("messages.subscriptions.device_deletion_alert", {
            count: n
        }))) : (Debug("NOT VALID!!"), !1)
    }, i.prototype.displaySuccess = function() {
        return this.displayAsAlert(), this.showState("success")
    }, i.prototype.displayError = function(t, e) {
        return t && $(this.el).find(".state-error h3").text(t), e && $(this.el).find(".state-error p").text(e), this.displayAsAlert(), this.showState("error")
    }, i.prototype.displayTryAgain = function(t) {
        return $(this.el).find(".response-status").removeClass("hidden"), $(this.el).find(".form-control-error").addClass("hidden"), $(this.el).find(".response-status").html("<i class='icon-alert-sign'></i> " + t), $(this.el).find(".response-status").addClass("text-warning")
    }, i.prototype.close = function() {
        return this.devices_view && this.devices_view.close(), this.stopListening(), this.undelegateEvents(), this.unbind()
    }, i.prototype.closeModal = function() {
        return Prey.Helpers.BootstrapHelpers.hideModal(), this.close()
    }, i
}(Backbone.View), Prey.Views.Settings.CloseAccount = function(e) {
    function i() {
        return this.displayLoading = t(this.displayLoading, this), this.showCloseAccountButton = t(this.showCloseAccountButton, this), this.template = t(this.template, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.el = "#modal", i.prototype.events = {
        "change .checkbox input": "showCloseAccountButton",
        "click .link-danger": "displayLoading"
    }, i.prototype.initialize = function() {
        return i.__super__.initialize.apply(this, arguments), this.modal_title = "Cancel Account", this.modal_options = {
            noheader: !0,
            modal_name: "close-account",
            dialog_class: "modal-sm"
        }
    }, i.prototype.template = function() {
        return JST["v3/templates/settings/close_account"]()
    }, i.prototype.showCloseAccountButton = function(t) {
        var e;
        return e = $(this.el).find(".link-danger"), $(t.currentTarget).is(":checked") ? e.removeClass("hidden") : e.addClass("hidden")
    }, i.prototype.displayLoading = function() {
        return $(this.el).find(".link.js-hide-moda").addClass("hidden")
    }, i
}(Prey.Extensions.Modal), Prey.Views.Settings.DeviceItem = function(e) {
    function i() {
        return this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.tagName = "li", i.prototype.template = function(t) {
        return JST["v3/templates/b2c/devices/all_deletion"](t)
    }, i
}(Backbone.Marionette.ItemView), Prey.Views.Settings.DeviceList = function(e) {
    function i() {
        return this.close = t(this.close, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.itemView = Prey.Views.Settings.DeviceItem, i.prototype.el = "#modal .js-device-list-selectable", i.prototype.close = function() {
        return this.$el.html("")
    }, i
}(Backbone.Marionette.CollectionView), Prey.Views.Settings.ConfirmUserDeletion = function(e) {
    function i() {
        return this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.initialize = function(t) {
        return null == t && (t = {}), i.__super__.initialize.apply(this, arguments), this.user_view = t.user_view, this.model = this.user_view.model
    }, i.prototype.events = {
        "click .alert-confirm": "confirmUserDeletion",
        "click .alert-cancel": "closeModal"
    }, i.prototype.confirmUserDeletion = function() {
        return $.rails.disableElement($(this.el).find(".link-danger")), this.user_view.destroyUser()
    }, i.prototype.template = function() {
        return JST["v3/templates/settings/modals/confirm_user_delete"](this.model.toJSON())
    }, i
}(Prey.Extensions.Modal), Prey.Views.Settings.UsersNew = function(e) {
    function i() {
        return this.render = t(this.render, this), this.initialize = t(this.initialize, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.el = "#modal", i.prototype.initialize = function(t) {
        return null == t && (t = {}), this.modal_title = I18n.t("v1.users.new.title"), i.__super__.initialize.apply(this, arguments)
    }, i.prototype.template = function() {
        return JST["v3/templates/settings/modals/user_new"]
    }, i.prototype.render = function() {
        return Prey.Helpers.BootstrapHelpers.showModal(this.template(), this.modal_title, this.modal_options), $.ajax({
            dataType: "script",
            url: "/users/new",
            success: function() {
                return $("#modal .modal-body").html()
            }
        })
    }, i
}(Prey.Extensions.Modal), Prey.Views.Settings.UserItem = function(e) {
    function i() {
        return this.template = t(this.template, this), i.__super__.constructor.apply(this, arguments)
    }
    return n(i, e), i.prototype.tagName = "tr", i.prototype.events = {
        "click .destroy-user": "openDeleteUserConfirm"
    }, i.prototype.template = function(t) {
        return JST["v3/templates/settings/user"](t)
    }, i.prototype.openDeleteUserConfirm = function() {
        return this.modal = new Prey.Views.Settings.ConfirmUserDeletion({
            user_view: this
        }), this.modal.render()
    }, i.prototype.destroyUser = function() {
        return this.modal.showState("loading"), this.modal.hideFooter(), this.model.destroy({
            success: function(t) {
                return function(e, n) {
                    return "redirect" === n.status ? window.location = "/" : "ok" === n.status ? t.modal.closeModal() : void 0
                }
            }(this),
            error: function() {},
            done: function() {}
        })
    }, i.prototype.displayEdit = function() {
        return this.edit_view = new Prey.Views.Settings.UsersEdit({
            model: this.model
        }), this.edit_view.render(), !1
    }, i
}(Backbone.Marionette.ItemView), Prey.Views.Settings.UserCollection = function(t) {
    function e() {
        return e.__super__.constructor.apply(this, arguments)
    }
    return n(e, t), e.prototype.itemView = Prey.Views.Settings.UserItem, e.prototype.el = "#manage-users .table-responsive tbody", e.prototype.close = function() {
        return this.$el.html("")
    }, e
}(Backbone.Marionette.CollectionView), Prey.Views.Settings.Users = function(t) {
    function e() {
        return e.__super__.constructor.apply(this, arguments)
    }
    return n(e, t), e.prototype.el = "#manage-users", e.prototype.view_for_current = [$("#manage-users"), $("#settings")], e.prototype.parent_section = $("#settings"), e.prototype.menu = "#nav-primary-settings", e.prototype.events = {
        "click .js-add-user": "addUser"
    }, e.prototype.initialize = function(t) {
        return null == t && (t = {}), this.account = window.current_account, t.user_id ? this.user = new Prey.Models.User({
            id: t.user_id
        }) : (this.users = new Prey.Collections.Users, this.title = I18n.t("navigation.settings.users")), e.__super__.initialize.apply(this, arguments), this.enableViewingContent()
    }, e.prototype.addUser = function() {
        return this.add_user = new Prey.Views.Settings.UsersNew, this.add_user.render(), !1
    }, e.prototype.render = function() {
        return $("#nav-settings li a").removeClass("active"), Prey.Helpers.isTiny(function() {
            return function(t) {
                return t ? void 0 : $("#settings-users-nav").addClass("active")
            }
        }(this)), this.settings_menu = new Prey.Views.Settings.Main, this.users ? (this.users_view = new Prey.Views.Settings.UserCollection({
            collection: this.users
        }), this.users.fetch(), $("#manage-users #edit-user").addClass("hide"), $("#manage-users .table-responsive").removeClass("hide")) : this.user && (this.user_view = new Prey.Views.Settings.UsersEdit({
            model: this.user
        }), this.user_view.render(), $("#manage-users .table-responsive").addClass("hide"), $("#manage-users #edit-user").removeClass("hide")), this.displayTitle()
    }, e.prototype.close = function() {
        return $("#manage-users .table-responsive tbody").html(""), e.__super__.close.apply(this, arguments)
    }, e
}(Prey.Extensions.View), Prey.Views.Settings.UsersEdit = function(t) {
    function e() {
        return e.__super__.constructor.apply(this, arguments)
    }
    return n(e, t), e.prototype.el = "#manage-users", e.prototype.view_for_current = [$("#manage-users"), $("#settings")], e.prototype.parent_section = $("#settings"), e.prototype.menu = "#nav-primary-settings", e.prototype.template = function() {
        return JST["v3/templates/settings/users_edit"](this.model)
    }, e.prototype.initialize = function(t) {
        return null == t && (t = {}), this.model = t.model, this.title = I18n.t("navigation.settings.users"), e.__super__.initialize.apply(this, arguments), this.enableViewingContent()
    }, e.prototype.render = function() {
        return $("#nav-settings li a").removeClass("active"), $(this.el).find(".table-responsive").addClass("hide"), Prey.Helpers.isTiny(function() {
            return function(t) {
                return t ? void 0 : $("#settings-users-nav").addClass("active")
            }
        }(this)), this.settings_menu = new Prey.Views.Settings.Main, $.ajax({
            dataType: "script",
            url: "/users/" + this.model.id
        })
    }, e.prototype.close = function() {
        return e.__super__.close.apply(this, arguments)
    }, e
}(Prey.Extensions.View)
}.call(this),
    function() {}.call(this);