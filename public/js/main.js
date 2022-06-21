function is_mobile() {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return !!(/windows phone/i.test(e) || /android/i.test(e) || (/iPad|iPhone|iPod/.test(e) && !window.MSStream));
}
function is_touch_device() {
    return !!("ontouchstart" in window);
}
function is_ie() {
    var e = window.navigator.userAgent,
        t = e.indexOf("MSIE ");
    return 0 < t
        ? parseInt(e.substring(t + 5, e.indexOf(".", t)), 10)
        : 0 < e.indexOf("Trident/")
        ? ((t = e.indexOf("rv:")), parseInt(e.substring(t + 3, e.indexOf(".", t)), 10))
        : 0 < (t = e.indexOf("Edge/")) && parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
}
function is_ie11() {
    return !window.ActiveXObject && "ActiveXObject" in window;
}
function version_ie() {
    return parseFloat(navigator.appVersion.split("MSIE")[1]);
}
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        i = Object.getPrototypeOf,
        s = n.slice,
        o = n.flat
            ? function (e) {
                  return n.flat.call(e);
              }
            : function (e) {
                  return n.concat.apply([], e);
              },
        r = n.push,
        a = n.indexOf,
        l = {},
        c = l.toString,
        u = l.hasOwnProperty,
        d = u.toString,
        h = d.call(Object),
        p = {},
        f = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        _ = function (e) {
            return null != e && e === e.window;
        },
        m = e.document,
        g = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function v(e, t, n) {
        var i,
            s,
            o = (n = n || m).createElement("script");
        if (((o.text = e), t)) for (i in g) (s = t[i] || (t.getAttribute && t.getAttribute(i))) && o.setAttribute(i, s);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
    }
    var y = "3.5.1",
        w = function (e, t) {
            return new w.fn.init(e, t);
        };
    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !f(e) && !_(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (w.fn = w.prototype = {
        jquery: y,
        constructor: w,
        length: 0,
        toArray: function () {
            return s.call(this);
        },
        get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return w.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                w.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                w.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                w.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: r,
        sort: n.sort,
        splice: n.splice,
    }),
        (w.extend = w.fn.extend = function () {
            var e,
                t,
                n,
                i,
                s,
                o,
                r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++), "object" == typeof r || f(r) || (r = {}), a === l && ((r = this), a--); a < l; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        (i = e[t]),
                            "__proto__" !== t &&
                                r !== i &&
                                (c && i && (w.isPlainObject(i) || (s = Array.isArray(i)))
                                    ? ((n = r[t]), (o = s && !Array.isArray(n) ? [] : s || w.isPlainObject(n) ? n : {}), (s = !1), (r[t] = w.extend(c, o, i)))
                                    : void 0 !== i && (r[t] = i));
            return r;
        }),
        w.extend({
            expando: "jQuery" + (y + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== c.call(e) || ((t = i(e)) && ("function" != typeof (n = u.call(t, "constructor") && t.constructor) || d.call(n) !== h)));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                v(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    i = 0;
                if (C(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : r.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : a.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, s = e.length; i < n; i++) e[s++] = t[i];
                return (e.length = s), e;
            },
            grep: function (e, t, n) {
                for (var i = [], s = 0, o = e.length, r = !n; s < o; s++) !t(e[s], s) !== r && i.push(e[s]);
                return i;
            },
            map: function (e, t, n) {
                var i,
                    s,
                    r = 0,
                    a = [];
                if (C(e)) for (i = e.length; r < i; r++) null != (s = t(e[r], r, n)) && a.push(s);
                else for (r in e) null != (s = t(e[r], r, n)) && a.push(s);
                return o(a);
            },
            guid: 1,
            support: p,
        }),
        "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
        });
    var k = (function (e) {
        var t,
            n,
            i,
            s,
            o,
            r,
            a,
            l,
            c,
            u,
            d,
            h,
            p,
            f,
            _,
            m,
            g,
            v,
            b,
            y = "sizzle" + 1 * new Date(),
            w = e.document,
            C = 0,
            k = 0,
            S = le(),
            x = le(),
            E = le(),
            O = le(),
            T = function (e, t) {
                return e === t && (d = !0), 0;
            },
            P = {}.hasOwnProperty,
            M = [],
            j = M.pop,
            D = M.push,
            $ = M.push,
            A = M.slice,
            H = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1;
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            N = "\\[" + I + "*(" + R + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + I + "*\\]",
            q = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            W = new RegExp(I + "+", "g"),
            U = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            B = new RegExp("^" + I + "*," + I + "*"),
            F = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            K = new RegExp(I + "|>"),
            z = new RegExp(q),
            Q = new RegExp("^" + R + "$"),
            Y = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i"),
            },
            V = /HTML$/i,
            X = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            se = function (e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            oe = function () {
                h();
            },
            re = ye(
                function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            $.apply((M = A.call(w.childNodes)), w.childNodes), M[w.childNodes.length].nodeType;
        } catch (t) {
            $ = {
                apply: M.length
                    ? function (e, t) {
                          D.apply(e, A.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                          e.length = n - 1;
                      },
            };
        }
        function ae(e, t, i, s) {
            var o,
                a,
                c,
                u,
                d,
                f,
                g,
                v = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (((i = i || []), "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return i;
            if (!s && (h(t), (t = t || p), _)) {
                if (11 !== w && (d = Z.exec(e)))
                    if ((o = d[1])) {
                        if (9 === w) {
                            if (!(c = t.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i;
                        } else if (v && (c = v.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i;
                    } else {
                        if (d[2]) return $.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return $.apply(i, t.getElementsByClassName(o)), i;
                    }
                if (n.qsa && !O[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (((g = e), (v = t), 1 === w && (K.test(e) || F.test(e)))) {
                        for (((v = (ee.test(e) && ge(t.parentNode)) || t) === t && n.scope) || ((u = t.getAttribute("id")) ? (u = u.replace(ie, se)) : t.setAttribute("id", (u = y))), a = (f = r(e)).length; a--; )
                            f[a] = (u ? "#" + u : ":scope") + " " + be(f[a]);
                        g = f.join(",");
                    }
                    try {
                        return $.apply(i, v.querySelectorAll(g)), i;
                    } catch (t) {
                        O(e, !0);
                    } finally {
                        u === y && t.removeAttribute("id");
                    }
                }
            }
            return l(e.replace(U, "$1"), t, i, s);
        }
        function le() {
            var e = [];
            return function t(n, s) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = s);
            };
        }
        function ce(e) {
            return (e[y] = !0), e;
        }
        function ue(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function de(e, t) {
            for (var n = e.split("|"), s = n.length; s--; ) i.attrHandle[n[s]] = t;
        }
        function he(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function pe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function fe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function _e(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (t.isDisabled !== !e && re(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function me(e) {
            return ce(function (t) {
                return (
                    (t = +t),
                    ce(function (n, i) {
                        for (var s, o = e([], n.length, t), r = o.length; r--; ) n[(s = o[r])] && (n[s] = !(i[s] = n[s]));
                    })
                );
            });
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = ae.support = {}),
        (o = ae.isXML = function (e) {
            var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
            return !V.test(t || (n && n.nodeName) || "HTML");
        }),
        (h = ae.setDocument = function (e) {
            var t,
                s,
                r = e ? e.ownerDocument || e : w;
            return (
                r != p &&
                    9 === r.nodeType &&
                    r.documentElement &&
                    ((f = (p = r).documentElement),
                    (_ = !o(p)),
                    w != p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", oe, !1) : s.attachEvent && s.attachEvent("onunload", oe)),
                    (n.scope = ue(function (e) {
                        return f.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                    })),
                    (n.attributes = ue(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ue(function (e) {
                        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
                    })),
                    (n.getElementsByClassName = J.test(p.getElementsByClassName)),
                    (n.getById = ue(function (e) {
                        return (f.appendChild(e).id = y), !p.getElementsByName || !p.getElementsByName(y).length;
                    })),
                    n.getById
                        ? ((i.filter.ID = function (e) {
                              var t = e.replace(te, ne);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (i.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && _) {
                                  var n = t.getElementById(e);
                                  return n ? [n] : [];
                              }
                          }))
                        : ((i.filter.ID = function (e) {
                              var t = e.replace(te, ne);
                              return function (e) {
                                  var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                  return n && n.value === t;
                              };
                          }),
                          (i.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && _) {
                                  var n,
                                      i,
                                      s,
                                      o = t.getElementById(e);
                                  if (o) {
                                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                      for (s = t.getElementsByName(e), i = 0; (o = s[i++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                  }
                                  return [];
                              }
                          })),
                    (i.find.TAG = n.getElementsByTagName
                        ? function (e, t) {
                              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                              var n,
                                  i = [],
                                  s = 0,
                                  o = t.getElementsByTagName(e);
                              if ("*" === e) {
                                  for (; (n = o[s++]); ) 1 === n.nodeType && i.push(n);
                                  return i;
                              }
                              return o;
                          }),
                    (i.find.CLASS =
                        n.getElementsByClassName &&
                        function (e, t) {
                            if (void 0 !== t.getElementsByClassName && _) return t.getElementsByClassName(e);
                        }),
                    (g = []),
                    (m = []),
                    (n.qsa = J.test(p.querySelectorAll)) &&
                        (ue(function (e) {
                            var t;
                            (f.appendChild(e).innerHTML = "<a id='" + y + "'></a><select id='" + y + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + I + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || m.push("\\[" + I + "*(?:value|" + L + ")"),
                                e.querySelectorAll("[id~=" + y + "-]").length || m.push("~="),
                                (t = p.createElement("input")).setAttribute("name", ""),
                                e.appendChild(t),
                                e.querySelectorAll("[name='']").length || m.push("\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"),
                                e.querySelectorAll(":checked").length || m.push(":checked"),
                                e.querySelectorAll("a#" + y + "+*").length || m.push(".#.+[+~]"),
                                e.querySelectorAll("\\\f"),
                                m.push("[\\r\\n\\f]");
                        }),
                        ue(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = p.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && m.push("name" + I + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                (f.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                m.push(",.*:");
                        })),
                    (n.matchesSelector = J.test((v = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector))) &&
                        ue(function (e) {
                            (n.disconnectedMatch = v.call(e, "*")), v.call(e, "[s!='']:x"), g.push("!=", q);
                        }),
                    (m = m.length && new RegExp(m.join("|"))),
                    (g = g.length && new RegExp(g.join("|"))),
                    (t = J.test(f.compareDocumentPosition)),
                    (b =
                        t || J.test(f.contains)
                            ? function (e, t) {
                                  var n = 9 === e.nodeType ? e.documentElement : e,
                                      i = t && t.parentNode;
                                  return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                              }
                            : function (e, t) {
                                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                  return !1;
                              }),
                    (T = t
                        ? function (e, t) {
                              if (e === t) return (d = !0), 0;
                              var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                              return (
                                  i ||
                                  (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === i)
                                      ? e == p || (e.ownerDocument == w && b(w, e))
                                          ? -1
                                          : t == p || (t.ownerDocument == w && b(w, t))
                                          ? 1
                                          : u
                                          ? H(u, e) - H(u, t)
                                          : 0
                                      : 4 & i
                                      ? -1
                                      : 1)
                              );
                          }
                        : function (e, t) {
                              if (e === t) return (d = !0), 0;
                              var n,
                                  i = 0,
                                  s = e.parentNode,
                                  o = t.parentNode,
                                  r = [e],
                                  a = [t];
                              if (!s || !o) return e == p ? -1 : t == p ? 1 : s ? -1 : o ? 1 : u ? H(u, e) - H(u, t) : 0;
                              if (s === o) return he(e, t);
                              for (n = e; (n = n.parentNode); ) r.unshift(n);
                              for (n = t; (n = n.parentNode); ) a.unshift(n);
                              for (; r[i] === a[i]; ) i++;
                              return i ? he(r[i], a[i]) : r[i] == w ? -1 : a[i] == w ? 1 : 0;
                          })),
                p
            );
        }),
        (ae.matches = function (e, t) {
            return ae(e, null, null, t);
        }),
        (ae.matchesSelector = function (e, t) {
            if ((h(e), n.matchesSelector && _ && !O[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t))))
                try {
                    var i = v.call(e, t);
                    if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                } catch (e) {
                    O(t, !0);
                }
            return 0 < ae(t, p, null, [e]).length;
        }),
        (ae.contains = function (e, t) {
            return (e.ownerDocument || e) != p && h(e), b(e, t);
        }),
        (ae.attr = function (e, t) {
            (e.ownerDocument || e) != p && h(e);
            var s = i.attrHandle[t.toLowerCase()],
                o = s && P.call(i.attrHandle, t.toLowerCase()) ? s(e, t, !_) : void 0;
            return void 0 !== o ? o : n.attributes || !_ ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }),
        (ae.escape = function (e) {
            return (e + "").replace(ie, se);
        }),
        (ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (ae.uniqueSort = function (e) {
            var t,
                i = [],
                s = 0,
                o = 0;
            if (((d = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(T), d)) {
                for (; (t = e[o++]); ) t === e[o] && (s = i.push(o));
                for (; s--; ) e.splice(i[s], 1);
            }
            return (u = null), e;
        }),
        (s = ae.getText = function (e) {
            var t,
                n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += s(t);
            return n;
        }),
        ((i = ae.selectors = {
            cacheLength: 50,
            createPseudo: ce,
            match: Y,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && ae.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return Y.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && z.test(n) && (t = r(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = S[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) &&
                            S(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (e, t, n) {
                    return function (i) {
                        var s = ae.attr(i, e);
                        return null == s
                            ? "!=" === t
                            : !t ||
                                  ((s += ""),
                                  "=" === t
                                      ? s === n
                                      : "!=" === t
                                      ? s !== n
                                      : "^=" === t
                                      ? n && 0 === s.indexOf(n)
                                      : "*=" === t
                                      ? n && -1 < s.indexOf(n)
                                      : "$=" === t
                                      ? n && s.slice(-n.length) === n
                                      : "~=" === t
                                      ? -1 < (" " + s.replace(W, " ") + " ").indexOf(n)
                                      : "|=" === t && (s === n || s.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function (e, t, n, i, s) {
                    var o = "nth" !== e.slice(0, 3),
                        r = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === s
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (t, n, l) {
                              var c,
                                  u,
                                  d,
                                  h,
                                  p,
                                  f,
                                  _ = o !== r ? "nextSibling" : "previousSibling",
                                  m = t.parentNode,
                                  g = a && t.nodeName.toLowerCase(),
                                  v = !l && !a,
                                  b = !1;
                              if (m) {
                                  if (o) {
                                      for (; _; ) {
                                          for (h = t; (h = h[_]); ) if (a ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
                                          f = _ = "only" === e && !f && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((f = [r ? m.firstChild : m.lastChild]), r && v)) {
                                      for (
                                          b = (p = (c = (u = (d = (h = m)[y] || (h[y] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], h = p && m.childNodes[p];
                                          (h = (++p && h && h[_]) || (b = p = 0) || f.pop());

                                      )
                                          if (1 === h.nodeType && ++b && h === t) {
                                              u[e] = [C, p, b];
                                              break;
                                          }
                                  } else if ((v && (b = p = (c = (u = (d = (h = t)[y] || (h[y] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && c[1]), !1 === b))
                                      for (
                                          ;
                                          (h = (++p && h && h[_]) || (b = p = 0) || f.pop()) &&
                                          ((a ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++b || (v && ((u = (d = h[y] || (h[y] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [C, b]), h !== t));

                                      );
                                  return (b -= s) === i || (b % i == 0 && 0 <= b / i);
                              }
                          };
                },
                PSEUDO: function (e, t) {
                    var n,
                        s = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    return s[y]
                        ? s(t)
                        : 1 < s.length
                        ? ((n = [e, e, "", t]),
                          i.setFilters.hasOwnProperty(e.toLowerCase())
                              ? ce(function (e, n) {
                                    for (var i, o = s(e, t), r = o.length; r--; ) e[(i = H(e, o[r]))] = !(n[i] = o[r]);
                                })
                              : function (e) {
                                    return s(e, 0, n);
                                })
                        : s;
                },
            },
            pseudos: {
                not: ce(function (e) {
                    var t = [],
                        n = [],
                        i = a(e.replace(U, "$1"));
                    return i[y]
                        ? ce(function (e, t, n, s) {
                              for (var o, r = i(e, null, s, []), a = e.length; a--; ) (o = r[a]) && (e[a] = !(t[a] = o));
                          })
                        : function (e, s, o) {
                              return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                          };
                }),
                has: ce(function (e) {
                    return function (t) {
                        return 0 < ae(e, t).length;
                    };
                }),
                contains: ce(function (e) {
                    return (
                        (e = e.replace(te, ne)),
                        function (t) {
                            return -1 < (t.textContent || s(t)).indexOf(e);
                        }
                    );
                }),
                lang: ce(function (e) {
                    return (
                        Q.test(e || "") || ae.error("unsupported lang: " + e),
                        (e = e.replace(te, ne).toLowerCase()),
                        function (t) {
                            var n;
                            do {
                                if ((n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function (e) {
                    return e === f;
                },
                focus: function (e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: _e(!1),
                disabled: _e(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !i.pseudos.empty(e);
                },
                header: function (e) {
                    return G.test(e.nodeName);
                },
                input: function (e) {
                    return X.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: me(function () {
                    return [0];
                }),
                last: me(function (e, t) {
                    return [t - 1];
                }),
                eq: me(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: me(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: me(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: me(function (e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
                    return e;
                }),
                gt: me(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                }),
            },
        }).pseudos.nth = i.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[t] = pe(t);
        for (t in { submit: !0, reset: !0 }) i.pseudos[t] = fe(t);
        function ve() {}
        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function ye(e, t, n) {
            var i = t.dir,
                s = t.next,
                o = s || i,
                r = n && "parentNode" === o,
                a = k++;
            return t.first
                ? function (t, n, s) {
                      for (; (t = t[i]); ) if (1 === t.nodeType || r) return e(t, n, s);
                      return !1;
                  }
                : function (t, n, l) {
                      var c,
                          u,
                          d,
                          h = [C, a];
                      if (l) {
                          for (; (t = t[i]); ) if ((1 === t.nodeType || r) && e(t, n, l)) return !0;
                      } else
                          for (; (t = t[i]); )
                              if (1 === t.nodeType || r)
                                  if (((u = (d = t[y] || (t[y] = {}))[t.uniqueID] || (d[t.uniqueID] = {})), s && s === t.nodeName.toLowerCase())) t = t[i] || t;
                                  else {
                                      if ((c = u[o]) && c[0] === C && c[1] === a) return (h[2] = c[2]);
                                      if (((u[o] = h)[2] = e(t, n, l))) return !0;
                                  }
                      return !1;
                  };
        }
        function we(e) {
            return 1 < e.length
                ? function (t, n, i) {
                      for (var s = e.length; s--; ) if (!e[s](t, n, i)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function Ce(e, t, n, i, s) {
            for (var o, r = [], a = 0, l = e.length, c = null != t; a < l; a++) (o = e[a]) && ((n && !n(o, i, s)) || (r.push(o), c && t.push(a)));
            return r;
        }
        function ke(e, t, n, i, s, o) {
            return (
                i && !i[y] && (i = ke(i)),
                s && !s[y] && (s = ke(s, o)),
                ce(function (o, r, a, l) {
                    var c,
                        u,
                        d,
                        h = [],
                        p = [],
                        f = r.length,
                        _ =
                            o ||
                            (function (e, t, n) {
                                for (var i = 0, s = t.length; i < s; i++) ae(e, t[i], n);
                                return n;
                            })(t || "*", a.nodeType ? [a] : a, []),
                        m = !e || (!o && t) ? _ : Ce(_, h, e, a, l),
                        g = n ? (s || (o ? e : f || i) ? [] : r) : m;
                    if ((n && n(m, g, a, l), i)) for (c = Ce(g, p), i(c, [], a, l), u = c.length; u--; ) (d = c[u]) && (g[p[u]] = !(m[p[u]] = d));
                    if (o) {
                        if (s || e) {
                            if (s) {
                                for (c = [], u = g.length; u--; ) (d = g[u]) && c.push((m[u] = d));
                                s(null, (g = []), c, l);
                            }
                            for (u = g.length; u--; ) (d = g[u]) && -1 < (c = s ? H(o, d) : h[u]) && (o[c] = !(r[c] = d));
                        }
                    } else (g = Ce(g === r ? g.splice(f, g.length) : g)), s ? s(null, r, g, l) : $.apply(r, g);
                })
            );
        }
        function Se(e) {
            for (
                var t,
                    n,
                    s,
                    o = e.length,
                    r = i.relative[e[0].type],
                    a = r || i.relative[" "],
                    l = r ? 1 : 0,
                    u = ye(
                        function (e) {
                            return e === t;
                        },
                        a,
                        !0
                    ),
                    d = ye(
                        function (e) {
                            return -1 < H(t, e);
                        },
                        a,
                        !0
                    ),
                    h = [
                        function (e, n, i) {
                            var s = (!r && (i || n !== c)) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                            return (t = null), s;
                        },
                    ];
                l < o;
                l++
            )
                if ((n = i.relative[e[l].type])) h = [ye(we(h), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[y]) {
                        for (s = ++l; s < o && !i.relative[e[s].type]; s++);
                        return ke(1 < l && we(h), 1 < l && be(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(U, "$1"), n, l < s && Se(e.slice(l, s)), s < o && Se((e = e.slice(s))), s < o && be(e));
                    }
                    h.push(n);
                }
            return we(h);
        }
        return (
            (ve.prototype = i.filters = i.pseudos),
            (i.setFilters = new ve()),
            (r = ae.tokenize = function (e, t) {
                var n,
                    s,
                    o,
                    r,
                    a,
                    l,
                    c,
                    u = x[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, l = [], c = i.preFilter; a; ) {
                    for (r in ((n && !(s = B.exec(a))) || (s && (a = a.slice(s[0].length) || a), l.push((o = []))),
                    (n = !1),
                    (s = F.exec(a)) && ((n = s.shift()), o.push({ value: n, type: s[0].replace(U, " ") }), (a = a.slice(n.length))),
                    i.filter))
                        !(s = Y[r].exec(a)) || (c[r] && !(s = c[r](s))) || ((n = s.shift()), o.push({ value: n, type: r, matches: s }), (a = a.slice(n.length)));
                    if (!n) break;
                }
                return t ? a.length : a ? ae.error(e) : x(e, l).slice(0);
            }),
            (a = ae.compile = function (e, t) {
                var n,
                    s,
                    o,
                    a,
                    l,
                    u,
                    d = [],
                    f = [],
                    m = E[e + " "];
                if (!m) {
                    for (t || (t = r(e)), n = t.length; n--; ) (m = Se(t[n]))[y] ? d.push(m) : f.push(m);
                    (m = E(
                        e,
                        ((s = f),
                        (a = 0 < (o = d).length),
                        (l = 0 < s.length),
                        (u = function (e, t, n, r, u) {
                            var d,
                                f,
                                m,
                                g = 0,
                                v = "0",
                                b = e && [],
                                y = [],
                                w = c,
                                k = e || (l && i.find.TAG("*", u)),
                                S = (C += null == w ? 1 : Math.random() || 0.1),
                                x = k.length;
                            for (u && (c = t == p || t || u); v !== x && null != (d = k[v]); v++) {
                                if (l && d) {
                                    for (f = 0, t || d.ownerDocument == p || (h(d), (n = !_)); (m = s[f++]); )
                                        if (m(d, t || p, n)) {
                                            r.push(d);
                                            break;
                                        }
                                    u && (C = S);
                                }
                                a && ((d = !m && d) && g--, e && b.push(d));
                            }
                            if (((g += v), a && v !== g)) {
                                for (f = 0; (m = o[f++]); ) m(b, y, t, n);
                                if (e) {
                                    if (0 < g) for (; v--; ) b[v] || y[v] || (y[v] = j.call(r));
                                    y = Ce(y);
                                }
                                $.apply(r, y), u && !e && 0 < y.length && 1 < g + o.length && ae.uniqueSort(r);
                            }
                            return u && ((C = S), (c = w)), b;
                        }),
                        a ? ce(u) : u)
                    )).selector = e;
                }
                return m;
            }),
            (l = ae.select = function (e, t, n, s) {
                var o,
                    l,
                    c,
                    u,
                    d,
                    h = "function" == typeof e && e,
                    p = !s && r((e = h.selector || e));
                if (((n = n || []), 1 === p.length)) {
                    if (2 < (l = p[0] = p[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && _ && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                        h && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                    }
                    for (o = Y.needsContext.test(e) ? 0 : l.length; o-- && ((c = l[o]), !i.relative[(u = c.type)]); )
                        if ((d = i.find[u]) && (s = d(c.matches[0].replace(te, ne), (ee.test(l[0].type) && ge(t.parentNode)) || t))) {
                            if ((l.splice(o, 1), !(e = s.length && be(l)))) return $.apply(n, s), n;
                            break;
                        }
                }
                return (h || a(e, p))(s, t, !_, n, !t || (ee.test(e) && ge(t.parentNode)) || t), n;
            }),
            (n.sortStable = y.split("").sort(T).join("") === y),
            (n.detectDuplicates = !!d),
            h(),
            (n.sortDetached = ue(function (e) {
                return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
            })),
            ue(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                de("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (n.attributes &&
                ue(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                de("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            ue(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                de(L, function (e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                }),
            ae
        );
    })(e);
    (w.find = k), (w.expr = k.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = k.uniqueSort), (w.text = k.getText), (w.isXMLDoc = k.isXML), (w.contains = k.contains), (w.escapeSelector = k.escape);
    var S = function (e, t, n) {
            for (var i = [], s = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (s && w(e).is(n)) break;
                    i.push(e);
                }
            return i;
        },
        x = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        E = w.expr.match.needsContext;
    function O(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var T = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function P(e, t, n) {
        return f(t)
            ? w.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
              })
            : t.nodeType
            ? w.grep(e, function (e) {
                  return (e === t) !== n;
              })
            : "string" != typeof t
            ? w.grep(e, function (e) {
                  return -1 < a.call(t, e) !== n;
              })
            : w.filter(t, e, n);
    }
    (w.filter = function (e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
                ? w.find.matchesSelector(i, e)
                    ? [i]
                    : []
                : w.find.matches(
                      e,
                      w.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        w.fn.extend({
            find: function (e) {
                var t,
                    n,
                    i = this.length,
                    s = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        w(e).filter(function () {
                            for (t = 0; t < i; t++) if (w.contains(s[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, s[t], n);
                return 1 < i ? w.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(P(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(P(this, e || [], !0));
            },
            is: function (e) {
                return !!P(this, "string" == typeof e && E.test(e) ? w(e) : e || [], !1).length;
            },
        });
    var M,
        j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (e, t, n) {
        var i, s;
        if (!e) return this;
        if (((n = n || M), "string" == typeof e)) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), T.test(i[1]) && w.isPlainObject(t))) for (i in t) f(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (s = m.getElementById(i[2])) && ((this[0] = s), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : f(e) ? (void 0 !== n.ready ? n.ready(e) : e(w)) : w.makeArray(e, this);
    }).prototype = w.fn),
        (M = w(m));
    var D = /^(?:parents|prev(?:Until|All))/,
        $ = { children: !0, contents: !0, next: !0, prev: !0 };
    function A(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                i = 0,
                s = this.length,
                o = [],
                r = "string" != typeof e && w(e);
            if (!E.test(e))
                for (; i < s; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? w.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? a.call(w(e), this[0]) : a.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        w.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return S(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return S(e, "parentNode", n);
                },
                next: function (e) {
                    return A(e, "nextSibling");
                },
                prev: function (e) {
                    return A(e, "previousSibling");
                },
                nextAll: function (e) {
                    return S(e, "nextSibling");
                },
                prevAll: function (e) {
                    return S(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return S(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return S(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return x((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return x(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (O(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
                },
            },
            function (e, t) {
                w.fn[e] = function (n, i) {
                    var s = w.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (s = w.filter(i, s)), 1 < this.length && ($[e] || w.uniqueSort(s), D.test(e) && s.reverse()), this.pushStack(s);
                };
            }
        );
    var H = /[^\x20\t\r\n\f]+/g;
    function L(e) {
        return e;
    }
    function I(e) {
        throw e;
    }
    function R(e, t, n, i) {
        var s;
        try {
            e && f((s = e.promise)) ? s.call(e).done(t).fail(n) : e && f((s = e.then)) ? s.call(e, t, n) : t.apply(void 0, [e].slice(i));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (w.Callbacks = function (e) {
        var t, n;
        e =
            "string" == typeof e
                ? ((t = e),
                  (n = {}),
                  w.each(t.match(H) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : w.extend({}, e);
        var i,
            s,
            o,
            r,
            a = [],
            l = [],
            c = -1,
            u = function () {
                for (r = r || e.once, o = i = !0; l.length; c = -1) for (s = l.shift(); ++c < a.length; ) !1 === a[c].apply(s[0], s[1]) && e.stopOnFalse && ((c = a.length), (s = !1));
                e.memory || (s = !1), (i = !1), r && (a = s ? [] : "");
            },
            d = {
                add: function () {
                    return (
                        a &&
                            (s && !i && ((c = a.length - 1), l.push(s)),
                            (function t(n) {
                                w.each(n, function (n, i) {
                                    f(i) ? (e.unique && d.has(i)) || a.push(i) : i && i.length && "string" !== b(i) && t(i);
                                });
                            })(arguments),
                            s && !i && u()),
                        this
                    );
                },
                remove: function () {
                    return (
                        w.each(arguments, function (e, t) {
                            for (var n; -1 < (n = w.inArray(t, a, n)); ) a.splice(n, 1), n <= c && c--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < w.inArray(e, a) : 0 < a.length;
                },
                empty: function () {
                    return a && (a = []), this;
                },
                disable: function () {
                    return (r = l = []), (a = s = ""), this;
                },
                disabled: function () {
                    return !a;
                },
                lock: function () {
                    return (r = l = []), s || i || (a = s = ""), this;
                },
                locked: function () {
                    return !!r;
                },
                fireWith: function (e, t) {
                    return r || ((t = [e, (t = t || []).slice ? t.slice() : t]), l.push(t), i || u()), this;
                },
                fire: function () {
                    return d.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return d;
    }),
        w.extend({
            Deferred: function (t) {
                var n = [
                        ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                        ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
                    ],
                    i = "pending",
                    s = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return s.then(null, e);
                        },
                        pipe: function () {
                            var e = arguments;
                            return w
                                .Deferred(function (t) {
                                    w.each(n, function (n, i) {
                                        var s = f(e[i[4]]) && e[i[4]];
                                        o[i[1]](function () {
                                            var e = s && s.apply(this, arguments);
                                            e && f(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, s ? [e] : arguments);
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        then: function (t, i, s) {
                            var o = 0;
                            function r(t, n, i, s) {
                                return function () {
                                    var a = this,
                                        l = arguments,
                                        c = function () {
                                            var e, c;
                                            if (!(t < o)) {
                                                if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                (c = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                    f(c)
                                                        ? s
                                                            ? c.call(e, r(o, n, L, s), r(o, n, I, s))
                                                            : (o++, c.call(e, r(o, n, L, s), r(o, n, I, s), r(o, n, L, n.notifyWith)))
                                                        : (i !== L && ((a = void 0), (l = [e])), (s || n.resolveWith)(a, l));
                                            }
                                        },
                                        u = s
                                            ? c
                                            : function () {
                                                  try {
                                                      c();
                                                  } catch (e) {
                                                      w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), o <= t + 1 && (i !== I && ((a = void 0), (l = [e])), n.rejectWith(a, l));
                                                  }
                                              };
                                    t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u));
                                };
                            }
                            return w
                                .Deferred(function (e) {
                                    n[0][3].add(r(0, e, f(s) ? s : L, e.notifyWith)), n[1][3].add(r(0, e, f(t) ? t : L)), n[2][3].add(r(0, e, f(i) ? i : I));
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? w.extend(e, s) : s;
                        },
                    },
                    o = {};
                return (
                    w.each(n, function (e, t) {
                        var r = t[2],
                            a = t[5];
                        (s[t[1]] = r.add),
                            a &&
                                r.add(
                                    function () {
                                        i = a;
                                    },
                                    n[3 - e][2].disable,
                                    n[3 - e][3].disable,
                                    n[0][2].lock,
                                    n[0][3].lock
                                ),
                            r.add(t[3].fire),
                            (o[t[0]] = function () {
                                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                            }),
                            (o[t[0] + "With"] = r.fireWith);
                    }),
                    s.promise(o),
                    t && t.call(o, o),
                    o
                );
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    o = s.call(arguments),
                    r = w.Deferred(),
                    a = function (e) {
                        return function (n) {
                            (i[e] = this), (o[e] = 1 < arguments.length ? s.call(arguments) : n), --t || r.resolveWith(i, o);
                        };
                    };
                if (t <= 1 && (R(e, r.done(a(n)).resolve, r.reject, !t), "pending" === r.state() || f(o[n] && o[n].then))) return r.then();
                for (; n--; ) R(o[n], a(n), r.reject);
                return r.promise();
            },
        });
    var N = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && N.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
        (w.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var q = w.Deferred();
    function W() {
        m.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), w.ready();
    }
    (w.fn.ready = function (e) {
        return (
            q.then(e).catch(function (e) {
                w.readyException(e);
            }),
            this
        );
    }),
        w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0) !== e && 0 < --w.readyWait) || q.resolveWith(m, [w]);
            },
        }),
        (w.ready.then = q.then),
        "complete" === m.readyState || ("loading" !== m.readyState && !m.documentElement.doScroll) ? e.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
    var U = function (e, t, n, i, s, o, r) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === b(n)) for (a in ((s = !0), n)) U(e, t, a, n[a], !0, o, r);
            else if (
                void 0 !== i &&
                ((s = !0),
                f(i) || (r = !0),
                c &&
                    (r
                        ? (t.call(e, i), (t = null))
                        : ((c = t),
                          (t = function (e, t, n) {
                              return c.call(w(e), n);
                          }))),
                t)
            )
                for (; a < l; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
            return s ? e : c ? t.call(e) : l ? t(e[0], n) : o;
        },
        B = /^-ms-/,
        F = /-([a-z])/g;
    function K(e, t) {
        return t.toUpperCase();
    }
    function z(e) {
        return e.replace(B, "ms-").replace(F, K);
    }
    var Q = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Y() {
        this.expando = w.expando + Y.uid++;
    }
    (Y.uid = 1),
        (Y.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), Q(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var i,
                    s = this.cache(e);
                if ("string" == typeof t) s[z(t)] = n;
                else for (i in t) s[z(i)] = t[i];
                return s;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in i ? [t] : t.match(H) || []).length;
                        for (; n--; ) delete i[t[n]];
                    }
                    (void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
            },
        });
    var V = new Y(),
        X = new Y(),
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;
    function Z(e, t, n) {
        var i, s;
        if (void 0 === n && 1 === e.nodeType)
            if (((i = "data-" + t.replace(J, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                try {
                    n = "true" === (s = n) || ("false" !== s && ("null" === s ? null : s === +s + "" ? +s : G.test(s) ? JSON.parse(s) : s));
                } catch (e) {}
                X.set(e, t, n);
            } else n = void 0;
        return n;
    }
    w.extend({
        hasData: function (e) {
            return X.hasData(e) || V.hasData(e);
        },
        data: function (e, t, n) {
            return X.access(e, t, n);
        },
        removeData: function (e, t) {
            X.remove(e, t);
        },
        _data: function (e, t, n) {
            return V.access(e, t, n);
        },
        _removeData: function (e, t) {
            V.remove(e, t);
        },
    }),
        w.fn.extend({
            data: function (e, t) {
                var n,
                    i,
                    s,
                    o = this[0],
                    r = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && ((s = X.get(o)), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
                        for (n = r.length; n--; ) r[n] && 0 === (i = r[n].name).indexOf("data-") && ((i = z(i.slice(5))), Z(o, i, s[i]));
                        V.set(o, "hasDataAttrs", !0);
                    }
                    return s;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          X.set(this, e);
                      })
                    : U(
                          this,
                          function (t) {
                              var n;
                              if (o && void 0 === t) return void 0 !== (n = X.get(o, e)) ? n : void 0 !== (n = Z(o, e)) ? n : void 0;
                              this.each(function () {
                                  X.set(this, e, t);
                              });
                          },
                          null,
                          t,
                          1 < arguments.length,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    X.remove(this, e);
                });
            },
        }),
        w.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return (t = (t || "fx") + "queue"), (i = V.get(e, t)), n && (!i || Array.isArray(n) ? (i = V.access(e, t, w.makeArray(n))) : i.push(n)), i || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = w.queue(e, t),
                    i = n.length,
                    s = n.shift(),
                    o = w._queueHooks(e, t);
                "inprogress" === s && ((s = n.shift()), i--),
                    s &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        s.call(
                            e,
                            function () {
                                w.dequeue(e, t);
                            },
                            o
                        )),
                    !i && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    V.get(e, n) ||
                    V.access(e, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            V.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        w.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? w.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = w.queue(this, e, t);
                              w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    w.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    i = 1,
                    s = w.Deferred(),
                    o = this,
                    r = this.length,
                    a = function () {
                        --i || s.resolveWith(o, [o]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; r--; ) (n = V.get(o[r], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), s.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = m.documentElement,
        se = function (e) {
            return w.contains(e.ownerDocument, e);
        },
        oe = { composed: !0 };
    ie.getRootNode &&
        (se = function (e) {
            return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
        });
    var re = function (e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && se(e) && "none" === w.css(e, "display"));
    };
    function ae(e, t, n, i) {
        var s,
            o,
            r = 20,
            a = i
                ? function () {
                      return i.cur();
                  }
                : function () {
                      return w.css(e, t, "");
                  },
            l = a(),
            c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (w.cssNumber[t] || ("px" !== c && +l)) && te.exec(w.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; r--; ) w.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (r = 0), (u /= o);
            (u *= 2), w.style(e, t, u + c), (n = n || []);
        }
        return n && ((u = +u || +l || 0), (s = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = u), (i.end = s))), s;
    }
    var le = {};
    function ce(e, t) {
        for (var n, i, s, o, r, a, l, c = [], u = 0, d = e.length; u < d; u++)
            (i = e[u]).style &&
                ((n = i.style.display),
                t
                    ? ("none" === n && ((c[u] = V.get(i, "display") || null), c[u] || (i.style.display = "")),
                      "" === i.style.display &&
                          re(i) &&
                          (c[u] =
                              ((l = r = o = void 0),
                              (r = (s = i).ownerDocument),
                              (a = s.nodeName),
                              (l = le[a]) || ((o = r.body.appendChild(r.createElement(a))), (l = w.css(o, "display")), o.parentNode.removeChild(o), "none" === l && (l = "block"), (le[a] = l)))))
                    : "none" !== n && ((c[u] = "none"), V.set(i, "display", n)));
        for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
        return e;
    }
    w.fn.extend({
        show: function () {
            return ce(this, !0);
        },
        hide: function () {
            return ce(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      re(this) ? w(this).show() : w(this).hide();
                  });
        },
    });
    var ue,
        de,
        he = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        fe = /^$|^module$|\/(?:java|ecma)script/i;
    (ue = m.createDocumentFragment().appendChild(m.createElement("div"))),
        (de = m.createElement("input")).setAttribute("type", "radio"),
        de.setAttribute("checked", "checked"),
        de.setAttribute("name", "t"),
        ue.appendChild(de),
        (p.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ue.innerHTML = "<textarea>x</textarea>"),
        (p.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue),
        (ue.innerHTML = "<option></option>"),
        (p.option = !!ue.lastChild);
    var _e = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function me(e, t) {
        var n;
        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && O(e, t)) ? w.merge([e], n) : n;
    }
    function ge(e, t) {
        for (var n = 0, i = e.length; n < i; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"));
    }
    (_e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead), (_e.th = _e.td), p.option || (_e.optgroup = _e.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ve = /<|&#?\w+;/;
    function be(e, t, n, i, s) {
        for (var o, r, a, l, c, u, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === b(o)) w.merge(h, o.nodeType ? [o] : o);
                else if (ve.test(o)) {
                    for (r = r || d.appendChild(t.createElement("div")), a = (pe.exec(o) || ["", ""])[1].toLowerCase(), l = _e[a] || _e._default, r.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], u = l[0]; u--; ) r = r.lastChild;
                    w.merge(h, r.childNodes), ((r = d.firstChild).textContent = "");
                } else h.push(t.createTextNode(o));
        for (d.textContent = "", p = 0; (o = h[p++]); )
            if (i && -1 < w.inArray(o, i)) s && s.push(o);
            else if (((c = se(o)), (r = me(d.appendChild(o), "script")), c && ge(r), n)) for (u = 0; (o = r[u++]); ) fe.test(o.type || "") && n.push(o);
        return d;
    }
    var ye = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
    function ke() {
        return !0;
    }
    function Se() {
        return !1;
    }
    function xe(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return m.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function Ee(e, t, n, i, s, o) {
        var r, a;
        if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Ee(e, a, n, i, t[a], o);
            return e;
        }
        if ((null == i && null == s ? ((s = n), (i = n = void 0)) : null == s && ("string" == typeof n ? ((s = i), (i = void 0)) : ((s = i), (i = n), (n = void 0))), !1 === s)) s = Se;
        else if (!s) return e;
        return (
            1 === o &&
                ((r = s),
                ((s = function (e) {
                    return w().off(e), r.apply(this, arguments);
                }).guid = r.guid || (r.guid = w.guid++))),
            e.each(function () {
                w.event.add(this, t, s, i, n);
            })
        );
    }
    function Oe(e, t, n) {
        n
            ? (V.set(e, t, !1),
              w.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                      var i,
                          o,
                          r = V.get(this, t);
                      if (1 & e.isTrigger && this[t]) {
                          if (r.length) (w.event.special[t] || {}).delegateType && e.stopPropagation();
                          else if (((r = s.call(arguments)), V.set(this, t, r), (i = n(this, t)), this[t](), r !== (o = V.get(this, t)) || i ? V.set(this, t, !1) : (o = {}), r !== o))
                              return e.stopImmediatePropagation(), e.preventDefault(), o.value;
                      } else r.length && (V.set(this, t, { value: w.event.trigger(w.extend(r[0], w.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
                  },
              }))
            : void 0 === V.get(e, t) && w.event.add(e, t, ke);
    }
    (w.event = {
        global: {},
        add: function (e, t, n, i, s) {
            var o,
                r,
                a,
                l,
                c,
                u,
                d,
                h,
                p,
                f,
                _,
                m = V.get(e);
            if (Q(e))
                for (
                    n.handler && ((n = (o = n).handler), (s = o.selector)),
                        s && w.find.matchesSelector(ie, s),
                        n.guid || (n.guid = w.guid++),
                        (l = m.events) || (l = m.events = Object.create(null)),
                        (r = m.handle) ||
                            (r = m.handle = function (t) {
                                return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                            }),
                        c = (t = (t || "").match(H) || [""]).length;
                    c--;

                )
                    (p = _ = (a = Ce.exec(t[c]) || [])[1]),
                        (f = (a[2] || "").split(".").sort()),
                        p &&
                            ((d = w.event.special[p] || {}),
                            (p = (s ? d.delegateType : d.bindType) || p),
                            (d = w.event.special[p] || {}),
                            (u = w.extend({ type: p, origType: _, data: i, handler: n, guid: n.guid, selector: s, needsContext: s && w.expr.match.needsContext.test(s), namespace: f.join(".") }, o)),
                            (h = l[p]) || (((h = l[p] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, i, f, r)) || (e.addEventListener && e.addEventListener(p, r))),
                            d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                            s ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                            (w.event.global[p] = !0));
        },
        remove: function (e, t, n, i, s) {
            var o,
                r,
                a,
                l,
                c,
                u,
                d,
                h,
                p,
                f,
                _,
                m = V.hasData(e) && V.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(H) || [""]).length; c--; )
                    if (((p = _ = (a = Ce.exec(t[c]) || [])[1]), (f = (a[2] || "").split(".").sort()), p)) {
                        for (d = w.event.special[p] || {}, h = l[(p = (i ? d.delegateType : d.bindType) || p)] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = h.length; o--; )
                            (u = h[o]),
                                (!s && _ !== u.origType) ||
                                    (n && n.guid !== u.guid) ||
                                    (a && !a.test(u.namespace)) ||
                                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                                    (h.splice(o, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                        r && !h.length && ((d.teardown && !1 !== d.teardown.call(e, f, m.handle)) || w.removeEvent(e, p, m.handle), delete l[p]);
                    } else for (p in l) w.event.remove(e, p + t[c], n, i, !0);
                w.isEmptyObject(l) && V.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                i,
                s,
                o,
                r,
                a = new Array(arguments.length),
                l = w.event.fix(e),
                c = (V.get(this, "events") || Object.create(null))[l.type] || [],
                u = w.event.special[l.type] || {};
            for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (((l.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, l))) {
                for (r = w.event.handlers.call(this, l, c), t = 0; (s = r[t++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = s.elem, n = 0; (o = s.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                        (l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace)) ||
                            ((l.handleObj = o), (l.data = o.data), void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
            }
        },
        handlers: function (e, t) {
            var n,
                i,
                s,
                o,
                r,
                a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], r = {}, n = 0; n < l; n++) void 0 === r[(s = (i = t[n]).selector + " ")] && (r[s] = i.needsContext ? -1 < w(s, this).index(c) : w.find(s, this, null, [c]).length), r[s] && o.push(i);
                        o.length && a.push({ elem: c, handlers: o });
                    }
            return (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: f(t)
                    ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                      },
                set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && O(t, "input") && Oe(t, "click", ke), !1;
                },
                trigger: function (e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && O(t, "input") && Oe(t, "click"), !0;
                },
                _default: function (e) {
                    var t = e.target;
                    return (he.test(t.type) && t.click && O(t, "input") && V.get(t, "click")) || O(t, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (w.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (w.Event = function (e, t) {
            if (!(this instanceof w.Event)) return new w.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? ke : Se),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && w.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: Se,
            isPropagationStopped: Se,
            isImmediatePropagationStopped: Se,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = ke), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = ke), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = ke), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        w.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && ye.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && we.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            w.event.addProp
        ),
        w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            w.event.special[e] = {
                setup: function () {
                    return Oe(this, e, xe), !1;
                },
                trigger: function () {
                    return Oe(this, e), !0;
                },
                delegateType: t,
            };
        }),
        w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        i = e.relatedTarget,
                        s = e.handleObj;
                    return (i && (i === this || w.contains(this, i))) || ((e.type = s.origType), (n = s.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        w.fn.extend({
            on: function (e, t, n, i) {
                return Ee(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
                return Ee(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
                var i, s;
                if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (s in e) this.off(s, t, e[s]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = Se),
                    this.each(function () {
                        w.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Te = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function je(e, t) {
        return (O(e, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0]) || e;
    }
    function De(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function $e(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function Ae(e, t) {
        var n, i, s, o, r, a;
        if (1 === t.nodeType) {
            if (V.hasData(e) && (a = V.get(e).events)) for (s in (V.remove(t, "handle events"), a)) for (n = 0, i = a[s].length; n < i; n++) w.event.add(t, s, a[s][n]);
            X.hasData(e) && ((o = X.access(e)), (r = w.extend({}, o)), X.set(t, r));
        }
    }
    function He(e, t, n, i) {
        t = o(t);
        var s,
            r,
            a,
            l,
            c,
            u,
            d = 0,
            h = e.length,
            _ = h - 1,
            m = t[0],
            g = f(m);
        if (g || (1 < h && "string" == typeof m && !p.checkClone && Pe.test(m)))
            return e.each(function (s) {
                var o = e.eq(s);
                g && (t[0] = m.call(this, s, o.html())), He(o, t, n, i);
            });
        if (h && ((r = (s = be(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === s.childNodes.length && (s = r), r || i)) {
            for (l = (a = w.map(me(s, "script"), De)).length; d < h; d++) (c = s), d !== _ && ((c = w.clone(c, !0, !0)), l && w.merge(a, me(c, "script"))), n.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument, w.map(a, $e), d = 0; d < l; d++)
                    (c = a[d]),
                        fe.test(c.type || "") &&
                            !V.access(c, "globalEval") &&
                            w.contains(u, c) &&
                            (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, u) : v(c.textContent.replace(Me, ""), c, u));
        }
        return e;
    }
    function Le(e, t, n) {
        for (var i, s = t ? w.filter(t, e) : e, o = 0; null != (i = s[o]); o++) n || 1 !== i.nodeType || w.cleanData(me(i)), i.parentNode && (n && se(i) && ge(me(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var i,
                s,
                o,
                r,
                a,
                l,
                c,
                u = e.cloneNode(!0),
                d = se(e);
            if (!(p.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e)))
                for (r = me(u), i = 0, s = (o = me(e)).length; i < s; i++)
                    (a = o[i]), "input" === (c = (l = r[i]).nodeName.toLowerCase()) && he.test(a.type) ? (l.checked = a.checked) : ("input" !== c && "textarea" !== c) || (l.defaultValue = a.defaultValue);
            if (t)
                if (n) for (o = o || me(e), r = r || me(u), i = 0, s = o.length; i < s; i++) Ae(o[i], r[i]);
                else Ae(e, u);
            return 0 < (r = me(u, "script")).length && ge(r, !d && me(e, "script")), u;
        },
        cleanData: function (e) {
            for (var t, n, i, s = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Q(n)) {
                    if ((t = n[V.expando])) {
                        if (t.events) for (i in t.events) s[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                        n[V.expando] = void 0;
                    }
                    n[X.expando] && (n[X.expando] = void 0);
                }
        },
    }),
        w.fn.extend({
            detach: function (e) {
                return Le(this, e, !0);
            },
            remove: function (e) {
                return Le(this, e);
            },
            text: function (e) {
                return U(
                    this,
                    function (e) {
                        return void 0 === e
                            ? w.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return He(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || je(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return He(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = je(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return He(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return He(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(me(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return w.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return U(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Te.test(e) && !_e[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return He(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(me(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            w.fn[e] = function (e) {
                for (var n, i = [], s = w(e), o = s.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), w(s[a])[t](n), r.apply(i, n.get());
                return this.pushStack(i);
            };
        });
    var Ie = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        Ne = function (e, t, n) {
            var i,
                s,
                o = {};
            for (s in t) (o[s] = e.style[s]), (e.style[s] = t[s]);
            for (s in ((i = n.call(e)), t)) e.style[s] = o[s];
            return i;
        },
        qe = new RegExp(ne.join("|"), "i");
    function We(e, t, n) {
        var i,
            s,
            o,
            r,
            a = e.style;
        return (
            (n = n || Re(e)) &&
                ("" !== (r = n.getPropertyValue(t) || n[t]) || se(e) || (r = w.style(e, t)),
                !p.pixelBoxStyles() && Ie.test(r) && qe.test(t) && ((i = a.width), (s = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = r), (r = n.width), (a.width = i), (a.minWidth = s), (a.maxWidth = o))),
            void 0 !== r ? r + "" : r
        );
    }
    function Ue(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function t() {
            if (u) {
                (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    ie.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                (i = "1%" !== t.top),
                    (l = 12 === n(t.marginLeft)),
                    (u.style.right = "60%"),
                    (r = 36 === n(t.right)),
                    (s = 36 === n(t.width)),
                    (u.style.position = "absolute"),
                    (o = 12 === n(u.offsetWidth / 3)),
                    ie.removeChild(c),
                    (u = null);
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var i,
            s,
            o,
            r,
            a,
            l,
            c = m.createElement("div"),
            u = m.createElement("div");
        u.style &&
            ((u.style.backgroundClip = "content-box"),
            (u.cloneNode(!0).style.backgroundClip = ""),
            (p.clearCloneStyle = "content-box" === u.style.backgroundClip),
            w.extend(p, {
                boxSizingReliable: function () {
                    return t(), s;
                },
                pixelBoxStyles: function () {
                    return t(), r;
                },
                pixelPosition: function () {
                    return t(), i;
                },
                reliableMarginLeft: function () {
                    return t(), l;
                },
                scrollboxSize: function () {
                    return t(), o;
                },
                reliableTrDimensions: function () {
                    var t, n, i, s;
                    return (
                        null == a &&
                            ((t = m.createElement("table")),
                            (n = m.createElement("tr")),
                            (i = m.createElement("div")),
                            (t.style.cssText = "position:absolute;left:-11111px"),
                            (n.style.height = "1px"),
                            (i.style.height = "9px"),
                            ie.appendChild(t).appendChild(n).appendChild(i),
                            (s = e.getComputedStyle(n)),
                            (a = 3 < parseInt(s.height)),
                            ie.removeChild(t)),
                        a
                    );
                },
            }));
    })();
    var Be = ["Webkit", "Moz", "ms"],
        Fe = m.createElement("div").style,
        Ke = {};
    function ze(e) {
        return (
            w.cssProps[e] ||
            Ke[e] ||
            (e in Fe
                ? e
                : (Ke[e] =
                      (function (e) {
                          for (var t = e[0].toUpperCase() + e.slice(1), n = Be.length; n--; ) if ((e = Be[n] + t) in Fe) return e;
                      })(e) || e))
        );
    }
    var Qe = /^(none|table(?!-c[ea]).+)/,
        Ye = /^--/,
        Ve = { position: "absolute", visibility: "hidden", display: "block" },
        Xe = { letterSpacing: "0", fontWeight: "400" };
    function Ge(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function Je(e, t, n, i, s, o) {
        var r = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; r < 4; r += 2)
            "margin" === n && (l += w.css(e, n + ne[r], !0, s)),
                i
                    ? ("content" === n && (l -= w.css(e, "padding" + ne[r], !0, s)), "margin" !== n && (l -= w.css(e, "border" + ne[r] + "Width", !0, s)))
                    : ((l += w.css(e, "padding" + ne[r], !0, s)), "padding" !== n ? (l += w.css(e, "border" + ne[r] + "Width", !0, s)) : (a += w.css(e, "border" + ne[r] + "Width", !0, s)));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5)) || 0), l;
    }
    function Ze(e, t, n) {
        var i = Re(e),
            s = (!p.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i),
            o = s,
            r = We(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ie.test(r)) {
            if (!n) return r;
            r = "auto";
        }
        return (
            ((!p.boxSizingReliable() && s) || (!p.reliableTrDimensions() && O(e, "tr")) || "auto" === r || (!parseFloat(r) && "inline" === w.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((s = "border-box" === w.css(e, "boxSizing", !1, i)), (o = a in e) && (r = e[a])),
            (r = parseFloat(r) || 0) + Je(e, t, n || (s ? "border" : "content"), o, i, r) + "px"
        );
    }
    function et(e, t, n, i, s) {
        return new et.prototype.init(e, t, n, i, s);
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s,
                    o,
                    r,
                    a = z(t),
                    l = Ye.test(t),
                    c = e.style;
                if ((l || (t = ze(a)), (r = w.cssHooks[t] || w.cssHooks[a]), void 0 === n)) return r && "get" in r && void 0 !== (s = r.get(e, !1, i)) ? s : c[t];
                "string" == (o = typeof n) && (s = te.exec(n)) && s[1] && ((n = ae(e, t, s)), (o = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== o || l || (n += (s && s[3]) || (w.cssNumber[a] ? "" : "px")),
                        p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                        (r && "set" in r && void 0 === (n = r.set(e, n, i))) || (l ? c.setProperty(t, n) : (c[t] = n)));
            }
        },
        css: function (e, t, n, i) {
            var s,
                o,
                r,
                a = z(t);
            return (
                Ye.test(t) || (t = ze(a)),
                (r = w.cssHooks[t] || w.cssHooks[a]) && "get" in r && (s = r.get(e, !0, n)),
                void 0 === s && (s = We(e, t, i)),
                "normal" === s && t in Xe && (s = Xe[t]),
                "" === n || n ? ((o = parseFloat(s)), !0 === n || isFinite(o) ? o || 0 : s) : s
            );
        },
    }),
        w.each(["height", "width"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n)
                        return !Qe.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? Ze(e, t, i)
                            : Ne(e, Ve, function () {
                                  return Ze(e, t, i);
                              });
                },
                set: function (e, n, i) {
                    var s,
                        o = Re(e),
                        r = !p.scrollboxSize() && "absolute" === o.position,
                        a = (r || i) && "border-box" === w.css(e, "boxSizing", !1, o),
                        l = i ? Je(e, t, i, a, o) : 0;
                    return (
                        a && r && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Je(e, t, "border", !1, o) - 0.5)),
                        l && (s = te.exec(n)) && "px" !== (s[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
                        Ge(0, n, l)
                    );
                },
            };
        }),
        (w.cssHooks.marginLeft = Ue(p.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(We(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            Ne(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (w.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, s = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) s[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                    return s;
                },
            }),
                "margin" !== e && (w.cssHooks[e + t].set = Ge);
        }),
        w.fn.extend({
            css: function (e, t) {
                return U(
                    this,
                    function (e, t, n) {
                        var i,
                            s,
                            o = {},
                            r = 0;
                        if (Array.isArray(t)) {
                            for (i = Re(e), s = t.length; r < s; r++) o[t[r]] = w.css(e, t[r], !1, i);
                            return o;
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((w.Tween = et).prototype = {
            constructor: et,
            init: function (e, t, n, i, s, o) {
                (this.elem = e), (this.prop = n), (this.easing = s || w.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (w.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = et.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : et.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = et.prototype),
        ((et.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!w.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)]) ? (e.elem[e.prop] = e.now) : w.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = et.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (w.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (w.fx = et.prototype.init),
        (w.fx.step = {});
    var tt,
        nt,
        it,
        st,
        ot = /^(?:toggle|show|hide)$/,
        rt = /queueHooks$/;
    function at() {
        nt && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
    }
    function lt() {
        return (
            e.setTimeout(function () {
                tt = void 0;
            }),
            (tt = Date.now())
        );
    }
    function ct(e, t) {
        var n,
            i = 0,
            s = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) s["margin" + (n = ne[i])] = s["padding" + n] = e;
        return t && (s.opacity = s.width = e), s;
    }
    function ut(e, t, n) {
        for (var i, s = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, r = s.length; o < r; o++) if ((i = s[o].call(n, t, e))) return i;
    }
    function dt(e, t, n) {
        var i,
            s,
            o = 0,
            r = dt.prefilters.length,
            a = w.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (s) return !1;
                for (var t = tt || lt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, r = c.tweens.length; o < r; o++) c.tweens[o].run(i);
                return a.notifyWith(e, [c, i, n]), i < 1 && r ? n : (r || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
            },
            c = a.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i;
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
                },
            }),
            u = c.props;
        for (
            (function (e, t) {
                var n, i, s, o, r;
                for (n in e)
                    if (((s = t[(i = z(n))]), (o = e[n]), Array.isArray(o) && ((s = o[1]), (o = e[n] = o[0])), n !== i && ((e[i] = o), delete e[n]), (r = w.cssHooks[i]) && ("expand" in r)))
                        for (n in ((o = r.expand(o)), delete e[i], o)) (n in e) || ((e[n] = o[n]), (t[n] = s));
                    else t[i] = s;
            })(u, c.opts.specialEasing);
            o < r;
            o++
        )
            if ((i = dt.prefilters[o].call(c, e, u, c.opts))) return f(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return (
            w.map(u, ut, c),
            f(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            w.fx.timer(w.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
            c
        );
    }
    (w.Animation = w.extend(dt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return ae(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            f(e) ? ((t = e), (e = ["*"])) : (e = e.match(H));
            for (var n, i = 0, s = e.length; i < s; i++) (n = e[i]), (dt.tweeners[n] = dt.tweeners[n] || []), dt.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var i,
                    s,
                    o,
                    r,
                    a,
                    l,
                    c,
                    u,
                    d = "width" in t || "height" in t,
                    h = this,
                    p = {},
                    f = e.style,
                    _ = e.nodeType && re(e),
                    m = V.get(e, "fxshow");
                for (i in (n.queue ||
                    (null == (r = w._queueHooks(e, "fx")).unqueued &&
                        ((r.unqueued = 0),
                        (a = r.empty.fire),
                        (r.empty.fire = function () {
                            r.unqueued || a();
                        })),
                    r.unqueued++,
                    h.always(function () {
                        h.always(function () {
                            r.unqueued--, w.queue(e, "fx").length || r.empty.fire();
                        });
                    })),
                t))
                    if (((s = t[i]), ot.test(s))) {
                        if ((delete t[i], (o = o || "toggle" === s), s === (_ ? "hide" : "show"))) {
                            if ("show" !== s || !m || void 0 === m[i]) continue;
                            _ = !0;
                        }
                        p[i] = (m && m[i]) || w.style(e, i);
                    }
                if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
                    for (i in (d &&
                        1 === e.nodeType &&
                        ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                        null == (c = m && m.display) && (c = V.get(e, "display")),
                        "none" === (u = w.css(e, "display")) && (c ? (u = c) : (ce([e], !0), (c = e.style.display || c), (u = w.css(e, "display")), ce([e]))),
                        ("inline" === u || ("inline-block" === u && null != c)) &&
                            "none" === w.css(e, "float") &&
                            (l ||
                                (h.done(function () {
                                    f.display = c;
                                }),
                                null == c && ((u = f.display), (c = "none" === u ? "" : u))),
                            (f.display = "inline-block"))),
                    n.overflow &&
                        ((f.overflow = "hidden"),
                        h.always(function () {
                            (f.overflow = n.overflow[0]), (f.overflowX = n.overflow[1]), (f.overflowY = n.overflow[2]);
                        })),
                    (l = !1),
                    p))
                        l ||
                            (m ? "hidden" in m && (_ = m.hidden) : (m = V.access(e, "fxshow", { display: c })),
                            o && (m.hidden = !_),
                            _ && ce([e], !0),
                            h.done(function () {
                                for (i in (_ || ce([e]), V.remove(e, "fxshow"), p)) w.style(e, i, p[i]);
                            })),
                            (l = ut(_ ? m[i] : 0, i, h)),
                            i in m || ((m[i] = l.start), _ && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
        },
    })),
        (w.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? w.extend({}, e) : { complete: n || (!n && t) || (f(e) && e), duration: e, easing: (n && t) || (t && !f(t) && t) };
            return (
                w.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in w.fx.speeds ? (i.duration = w.fx.speeds[i.duration]) : (i.duration = w.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    f(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
                }),
                i
            );
        }),
        w.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(re).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
            },
            animate: function (e, t, n, i) {
                var s = w.isEmptyObject(e),
                    o = w.speed(t, n, i),
                    r = function () {
                        var t = dt(this, w.extend({}, e), o);
                        (s || V.get(this, "finish")) && t.stop(!0);
                    };
                return (r.finish = r), s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r);
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            s = null != e && e + "queueHooks",
                            o = w.timers,
                            r = V.get(this);
                        if (s) r[s] && r[s].stop && i(r[s]);
                        else for (s in r) r[s] && r[s].stop && rt.test(s) && i(r[s]);
                        for (s = o.length; s--; ) o[s].elem !== this || (null != e && o[s].queue !== e) || (o[s].anim.stop(n), (t = !1), o.splice(s, 1));
                        (!t && n) || w.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = V.get(this),
                            i = n[e + "queue"],
                            s = n[e + "queueHooks"],
                            o = w.timers,
                            r = i ? i.length : 0;
                        for (n.finish = !0, w.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < r; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, i, s) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, i, s);
            };
        }),
        w.each({ slideDown: ct("show"), slideUp: ct("hide"), slideToggle: ct("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            w.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i);
            };
        }),
        (w.timers = []),
        (w.fx.tick = function () {
            var e,
                t = 0,
                n = w.timers;
            for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), (tt = void 0);
        }),
        (w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
            nt || ((nt = !0), at());
        }),
        (w.fx.stop = function () {
            nt = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (t, n) {
            return (
                (t = (w.fx && w.fx.speeds[t]) || t),
                (n = n || "fx"),
                this.queue(n, function (n, i) {
                    var s = e.setTimeout(n, t);
                    i.stop = function () {
                        e.clearTimeout(s);
                    };
                })
            );
        }),
        (it = m.createElement("input")),
        (st = m.createElement("select").appendChild(m.createElement("option"))),
        (it.type = "checkbox"),
        (p.checkOn = "" !== it.value),
        (p.optSelected = st.selected),
        ((it = m.createElement("input")).value = "t"),
        (it.type = "radio"),
        (p.radioValue = "t" === it.value);
    var ht,
        pt = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return U(this, w.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        },
    }),
        w.extend({
            attr: function (e, t, n) {
                var i,
                    s,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute
                        ? w.prop(e, t, n)
                        : ((1 === o && w.isXMLDoc(e)) || (s = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ht : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void w.removeAttr(e, t)
                                  : s && "set" in s && void 0 !== (i = s.set(e, n, t))
                                  ? i
                                  : (e.setAttribute(t, n + ""), n)
                              : s && "get" in s && null !== (i = s.get(e, t))
                              ? i
                              : null == (i = w.find.attr(e, t))
                              ? void 0
                              : i);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!p.radioValue && "radio" === t && O(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    i = 0,
                    s = t && t.match(H);
                if (s && 1 === e.nodeType) for (; (n = s[i++]); ) e.removeAttribute(n);
            },
        }),
        (ht = {
            set: function (e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = pt[t] || w.find.attr;
            pt[t] = function (e, t, i) {
                var s,
                    o,
                    r = t.toLowerCase();
                return i || ((o = pt[r]), (pt[r] = s), (s = null != n(e, t, i) ? r : null), (pt[r] = o)), s;
            };
        });
    var ft = /^(?:input|select|textarea|button)$/i,
        _t = /^(?:a|area)$/i;
    function mt(e) {
        return (e.match(H) || []).join(" ");
    }
    function gt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function vt(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(H)) || [];
    }
    w.fn.extend({
        prop: function (e, t) {
            return U(this, w.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        },
    }),
        w.extend({
            prop: function (e, t, n) {
                var i,
                    s,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (s = w.propHooks[t])),
                        void 0 !== n ? (s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : (e[t] = n)) : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = w.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ft.test(e.nodeName) || (_t.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        p.optSelected ||
            (w.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            w.propFix[this.toLowerCase()] = this;
        }),
        w.fn.extend({
            addClass: function (e) {
                var t,
                    n,
                    i,
                    s,
                    o,
                    r,
                    a,
                    l = 0;
                if (f(e))
                    return this.each(function (t) {
                        w(this).addClass(e.call(this, t, gt(this)));
                    });
                if ((t = vt(e)).length)
                    for (; (n = this[l++]); )
                        if (((s = gt(n)), (i = 1 === n.nodeType && " " + mt(s) + " "))) {
                            for (r = 0; (o = t[r++]); ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s !== (a = mt(i)) && n.setAttribute("class", a);
                        }
                return this;
            },
            removeClass: function (e) {
                var t,
                    n,
                    i,
                    s,
                    o,
                    r,
                    a,
                    l = 0;
                if (f(e))
                    return this.each(function (t) {
                        w(this).removeClass(e.call(this, t, gt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((t = vt(e)).length)
                    for (; (n = this[l++]); )
                        if (((s = gt(n)), (i = 1 === n.nodeType && " " + mt(s) + " "))) {
                            for (r = 0; (o = t[r++]); ) for (; -1 < i.indexOf(" " + o + " "); ) i = i.replace(" " + o + " ", " ");
                            s !== (a = mt(i)) && n.setAttribute("class", a);
                        }
                return this;
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i
                    ? t
                        ? this.addClass(e)
                        : this.removeClass(e)
                    : f(e)
                    ? this.each(function (n) {
                          w(this).toggleClass(e.call(this, n, gt(this), t), t);
                      })
                    : this.each(function () {
                          var t, s, o, r;
                          if (i) for (s = 0, o = w(this), r = vt(e); (t = r[s++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                          else (void 0 !== e && "boolean" !== n) || ((t = gt(this)) && V.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : V.get(this, "__className__") || ""));
                      });
            },
            hasClass: function (e) {
                var t,
                    n,
                    i = 0;
                for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && -1 < (" " + mt(gt(n)) + " ").indexOf(t)) return !0;
                return !1;
            },
        });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t,
                n,
                i,
                s = this[0];
            return arguments.length
                ? ((i = f(e)),
                  this.each(function (n) {
                      var s;
                      1 === this.nodeType &&
                          (null == (s = i ? e.call(this, n, w(this).val()) : e)
                              ? (s = "")
                              : "number" == typeof s
                              ? (s += "")
                              : Array.isArray(s) &&
                                (s = w.map(s, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value")) || (this.value = s));
                  }))
                : s
                ? (t = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(s, "value"))
                    ? n
                    : "string" == typeof (n = s.value)
                    ? n.replace(bt, "")
                    : null == n
                    ? ""
                    : n
                : void 0;
        },
    }),
        w.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = w.find.attr(e, "value");
                        return null != t ? t : mt(w.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            i,
                            s = e.options,
                            o = e.selectedIndex,
                            r = "select-one" === e.type,
                            a = r ? null : [],
                            l = r ? o + 1 : s.length;
                        for (i = o < 0 ? l : r ? o : 0; i < l; i++)
                            if (((n = s[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))) {
                                if (((t = w(n).val()), r)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function (e, t) {
                        for (var n, i, s = e.options, o = w.makeArray(t), r = s.length; r--; ) ((i = s[r]).selected = -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        w.each(["radio", "checkbox"], function () {
            (w.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < w.inArray(w(e).val(), t));
                },
            }),
                p.checkOn ||
                    (w.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (p.focusin = "onfocusin" in e);
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
            e.stopPropagation();
        };
    w.extend(w.event, {
        trigger: function (t, n, i, s) {
            var o,
                r,
                a,
                l,
                c,
                d,
                h,
                p,
                g = [i || m],
                v = u.call(t, "type") ? t.type : t,
                b = u.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((r = p = a = i = i || m),
                3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !yt.test(v + w.event.triggered) &&
                    (-1 < v.indexOf(".") && ((v = (b = v.split(".")).shift()), b.sort()),
                    (c = v.indexOf(":") < 0 && "on" + v),
                    ((t = t[w.expando] ? t : new w.Event(v, "object" == typeof t && t)).isTrigger = s ? 2 : 3),
                    (t.namespace = b.join(".")),
                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (t.result = void 0),
                    t.target || (t.target = i),
                    (n = null == n ? [t] : w.makeArray(n, [t])),
                    (h = w.event.special[v] || {}),
                    s || !h.trigger || !1 !== h.trigger.apply(i, n)))
            ) {
                if (!s && !h.noBubble && !_(i)) {
                    for (l = h.delegateType || v, yt.test(l + v) || (r = r.parentNode); r; r = r.parentNode) g.push(r), (a = r);
                    a === (i.ownerDocument || m) && g.push(a.defaultView || a.parentWindow || e);
                }
                for (o = 0; (r = g[o++]) && !t.isPropagationStopped(); )
                    (p = r),
                        (t.type = 1 < o ? l : h.bindType || v),
                        (d = (V.get(r, "events") || Object.create(null))[t.type] && V.get(r, "handle")) && d.apply(r, n),
                        (d = c && r[c]) && d.apply && Q(r) && ((t.result = d.apply(r, n)), !1 === t.result && t.preventDefault());
                return (
                    (t.type = v),
                    s ||
                        t.isDefaultPrevented() ||
                        (h._default && !1 !== h._default.apply(g.pop(), n)) ||
                        !Q(i) ||
                        (c &&
                            f(i[v]) &&
                            !_(i) &&
                            ((a = i[c]) && (i[c] = null),
                            (w.event.triggered = v),
                            t.isPropagationStopped() && p.addEventListener(v, wt),
                            i[v](),
                            t.isPropagationStopped() && p.removeEventListener(v, wt),
                            (w.event.triggered = void 0),
                            a && (i[c] = a))),
                    t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
            w.event.trigger(i, null, t);
        },
    }),
        w.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    w.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
            },
        }),
        p.focusin ||
            w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                    w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                    setup: function () {
                        var i = this.ownerDocument || this.document || this,
                            s = V.access(i, t);
                        s || i.addEventListener(e, n, !0), V.access(i, t, (s || 0) + 1);
                    },
                    teardown: function () {
                        var i = this.ownerDocument || this.document || this,
                            s = V.access(i, t) - 1;
                        s ? V.access(i, t, s) : (i.removeEventListener(e, n, !0), V.remove(i, t));
                    },
                };
            });
    var Ct = e.location,
        kt = { guid: Date.now() },
        St = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + t), n;
    };
    var xt = /\[\]$/,
        Et = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Tt = /^(?:input|select|textarea|keygen)/i;
    function Pt(e, t, n, i) {
        var s;
        if (Array.isArray(t))
            w.each(t, function (t, s) {
                n || xt.test(e) ? i(e, s) : Pt(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, n, i);
            });
        else if (n || "object" !== b(t)) i(e, t);
        else for (s in t) Pt(e + "[" + s + "]", t[s], n, i);
    }
    (w.param = function (e, t) {
        var n,
            i = [],
            s = function (e, t) {
                var n = f(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
            w.each(e, function () {
                s(this.name, this.value);
            });
        else for (n in e) Pt(n, e[n], t, s);
        return i.join("&");
    }),
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && Tt.test(this.nodeName) && !Ot.test(e) && (this.checked || !he.test(e));
                    })
                    .map(function (e, t) {
                        var n = w(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? w.map(n, function (e) {
                                  return { name: t.name, value: e.replace(Et, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(Et, "\r\n") };
                    })
                    .get();
            },
        });
    var Mt = /%20/g,
        jt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        At = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Lt = {},
        It = {},
        Rt = "*/".concat("*"),
        Nt = m.createElement("a");
    function qt(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var i,
                s = 0,
                o = t.toLowerCase().match(H) || [];
            if (f(n)) for (; (i = o[s++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        };
    }
    function Wt(e, t, n, i) {
        var s = {},
            o = e === It;
        function r(a) {
            var l;
            return (
                (s[a] = !0),
                w.each(e[a] || [], function (e, a) {
                    var c = a(t, n, i);
                    return "string" != typeof c || o || s[c] ? (o ? !(l = c) : void 0) : (t.dataTypes.unshift(c), r(c), !1);
                }),
                l
            );
        }
        return r(t.dataTypes[0]) || (!s["*"] && r("*"));
    }
    function Ut(e, t) {
        var n,
            i,
            s = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i), e;
    }
    (Nt.href = Ct.href),
        w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Ut(Ut(e, w.ajaxSettings), t) : Ut(w.ajaxSettings, e);
            },
            ajaxPrefilter: qt(Lt),
            ajaxTransport: qt(It),
            ajax: function (t, n) {
                "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                var i,
                    s,
                    o,
                    r,
                    a,
                    l,
                    c,
                    u,
                    d,
                    h,
                    p = w.ajaxSetup({}, n),
                    f = p.context || p,
                    _ = p.context && (f.nodeType || f.jquery) ? w(f) : w.event,
                    g = w.Deferred(),
                    v = w.Callbacks("once memory"),
                    b = p.statusCode || {},
                    y = {},
                    C = {},
                    k = "canceled",
                    S = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (c) {
                                if (!r) for (r = {}; (t = $t.exec(o)); ) r[t[1].toLowerCase() + " "] = (r[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = r[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return c ? o : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == c && ((e = C[e.toLowerCase()] = C[e.toLowerCase()] || e), (y[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == c && (p.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (c) S.always(e[S.status]);
                                else for (t in e) b[t] = [b[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || k;
                            return i && i.abort(t), x(0, t), this;
                        },
                    };
                if (
                    (g.promise(S),
                    (p.url = ((t || p.url || Ct.href) + "").replace(Ht, Ct.protocol + "//")),
                    (p.type = n.method || n.type || p.method || p.type),
                    (p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [""]),
                    null == p.crossDomain)
                ) {
                    l = m.createElement("a");
                    try {
                        (l.href = p.url), (l.href = l.href), (p.crossDomain = Nt.protocol + "//" + Nt.host != l.protocol + "//" + l.host);
                    } catch (t) {
                        p.crossDomain = !0;
                    }
                }
                if ((p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Wt(Lt, p, n, S), c)) return S;
                for (d in ((u = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !At.test(p.type)),
                (s = p.url.replace(jt, "")),
                p.hasContent
                    ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Mt, "+"))
                    : ((h = p.url.slice(s.length)),
                      p.data && (p.processData || "string" == typeof p.data) && ((s += (St.test(s) ? "&" : "?") + p.data), delete p.data),
                      !1 === p.cache && ((s = s.replace(Dt, "$1")), (h = (St.test(s) ? "&" : "?") + "_=" + kt.guid++ + h)),
                      (p.url = s + h)),
                p.ifModified && (w.lastModified[s] && S.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && S.setRequestHeader("If-None-Match", w.etag[s])),
                ((p.data && p.hasContent && !1 !== p.contentType) || n.contentType) && S.setRequestHeader("Content-Type", p.contentType),
                S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : p.accepts["*"]),
                p.headers))
                    S.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(f, S, p) || c)) return S.abort();
                if (((k = "abort"), v.add(p.complete), S.done(p.success), S.fail(p.error), (i = Wt(It, p, n, S)))) {
                    if (((S.readyState = 1), u && _.trigger("ajaxSend", [S, p]), c)) return S;
                    p.async &&
                        0 < p.timeout &&
                        (a = e.setTimeout(function () {
                            S.abort("timeout");
                        }, p.timeout));
                    try {
                        (c = !1), i.send(y, x);
                    } catch (t) {
                        if (c) throw t;
                        x(-1, t);
                    }
                } else x(-1, "No Transport");
                function x(t, n, r, l) {
                    var d,
                        h,
                        m,
                        y,
                        C,
                        k = n;
                    c ||
                        ((c = !0),
                        a && e.clearTimeout(a),
                        (i = void 0),
                        (o = l || ""),
                        (S.readyState = 0 < t ? 4 : 0),
                        (d = (200 <= t && t < 300) || 304 === t),
                        r &&
                            (y = (function (e, t, n) {
                                for (var i, s, o, r, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (i)
                                    for (s in a)
                                        if (a[s] && a[s].test(i)) {
                                            l.unshift(s);
                                            break;
                                        }
                                if (l[0] in n) o = l[0];
                                else {
                                    for (s in n) {
                                        if (!l[0] || e.converters[s + " " + l[0]]) {
                                            o = s;
                                            break;
                                        }
                                        r || (r = s);
                                    }
                                    o = o || r;
                                }
                                if (o) return o !== l[0] && l.unshift(o), n[o];
                            })(p, S, r)),
                        !d && -1 < w.inArray("script", p.dataTypes) && (p.converters["text script"] = function () {}),
                        (y = (function (e, t, n, i) {
                            var s,
                                o,
                                r,
                                a,
                                l,
                                c = {},
                                u = e.dataTypes.slice();
                            if (u[1]) for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                            for (o = u.shift(); o; )
                                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = o), (o = u.shift())))
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                        if (!(r = c[l + " " + o] || c["* " + o]))
                                            for (s in c)
                                                if ((a = s.split(" "))[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === r ? (r = c[s]) : !0 !== c[s] && ((o = a[0]), u.unshift(a[1]));
                                                    break;
                                                }
                                        if (!0 !== r)
                                            if (r && e.throws) t = r(t);
                                            else
                                                try {
                                                    t = r(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: r ? e : "No conversion from " + l + " to " + o };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(p, y, S, d)),
                        d
                            ? (p.ifModified && ((C = S.getResponseHeader("Last-Modified")) && (w.lastModified[s] = C), (C = S.getResponseHeader("etag")) && (w.etag[s] = C)),
                              204 === t || "HEAD" === p.type ? (k = "nocontent") : 304 === t ? (k = "notmodified") : ((k = y.state), (h = y.data), (d = !(m = y.error))))
                            : ((m = k), (!t && k) || ((k = "error"), t < 0 && (t = 0))),
                        (S.status = t),
                        (S.statusText = (n || k) + ""),
                        d ? g.resolveWith(f, [h, k, S]) : g.rejectWith(f, [S, k, m]),
                        S.statusCode(b),
                        (b = void 0),
                        u && _.trigger(d ? "ajaxSuccess" : "ajaxError", [S, p, d ? h : m]),
                        v.fireWith(f, [S, k]),
                        u && (_.trigger("ajaxComplete", [S, p]), --w.active || w.event.trigger("ajaxStop")));
                }
                return S;
            },
            getJSON: function (e, t, n) {
                return w.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return w.get(e, void 0, t, "script");
            },
        }),
        w.each(["get", "post"], function (e, t) {
            w[t] = function (e, n, i, s) {
                return f(n) && ((s = s || i), (i = n), (n = void 0)), w.ajax(w.extend({ url: e, type: t, dataType: s, data: n, success: i }, w.isPlainObject(e) && e));
            };
        }),
        w.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (w._evalUrl = function (e, t, n) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    w.globalEval(e, t, n);
                },
            });
        }),
        w.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (f(e) && (e = e.call(this[0])),
                        (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return f(e)
                    ? this.each(function (t) {
                          w(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = w(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = f(e);
                return this.each(function (n) {
                    w(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            w(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (w.expr.pseudos.hidden = function (e) {
            return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (w.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var Bt = { 0: 200, 1223: 204 },
        Ft = w.ajaxSettings.xhr();
    (p.cors = !!Ft && "withCredentials" in Ft),
        (p.ajax = Ft = !!Ft),
        w.ajaxTransport(function (t) {
            var n, i;
            if (p.cors || (Ft && !t.crossDomain))
                return {
                    send: function (s, o) {
                        var r,
                            a = t.xhr();
                        if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (r in t.xhrFields) a[r] = t.xhrFields[r];
                        for (r in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s)) a.setRequestHeader(r, s[r]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                    "abort" === e
                                        ? a.abort()
                                        : "error" === e
                                        ? "number" != typeof a.status
                                            ? o(0, "error")
                                            : o(a.status, a.statusText)
                                        : o(Bt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
                            };
                        }),
                            (a.onload = n()),
                            (i = a.onerror = a.ontimeout = n("error")),
                            void 0 !== a.onabort
                                ? (a.onabort = i)
                                : (a.onreadystatechange = function () {
                                      4 === a.readyState &&
                                          e.setTimeout(function () {
                                              n && i();
                                          });
                                  }),
                            (n = n("abort"));
                        try {
                            a.send((t.hasContent && t.data) || null);
                        } catch (s) {
                            if (n) throw s;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        w.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return w.globalEval(e), e;
                },
            },
        }),
        w.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        w.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
                return {
                    send: function (i, s) {
                        (t = w("<script>")
                            .attr(e.scriptAttrs || {})
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(), (n = null), e && s("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            m.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
        });
    var Kt,
        zt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = zt.pop() || w.expando + "_" + kt.guid++;
            return (this[e] = !0), e;
        },
    }),
        w.ajaxPrefilter("json jsonp", function (t, n, i) {
            var s,
                o,
                r,
                a = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0])
                return (
                    (s = t.jsonpCallback = f(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    a ? (t[a] = t[a].replace(Qt, "$1" + s)) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + s),
                    (t.converters["script json"] = function () {
                        return r || w.error(s + " was not called"), r[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (o = e[s]),
                    (e[s] = function () {
                        r = arguments;
                    }),
                    i.always(function () {
                        void 0 === o ? w(e).removeProp(s) : (e[s] = o), t[s] && ((t.jsonpCallback = n.jsonpCallback), zt.push(s)), r && f(o) && o(r[0]), (r = o = void 0);
                    }),
                    "script"
                );
        }),
        (p.createHTMLDocument = (((Kt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Kt.childNodes.length)),
        (w.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t || (p.createHTMLDocument ? (((i = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href), t.head.appendChild(i)) : (t = m)),
                  (o = !n && []),
                  (s = T.exec(e)) ? [t.createElement(s[1])] : ((s = be([e], t, o)), o && o.length && w(o).remove(), w.merge([], s.childNodes)));
            var i, s, o;
        }),
        (w.fn.load = function (e, t, n) {
            var i,
                s,
                o,
                r = this,
                a = e.indexOf(" ");
            return (
                -1 < a && ((i = mt(e.slice(a))), (e = e.slice(0, a))),
                f(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (s = "POST"),
                0 < r.length &&
                    w
                        .ajax({ url: e, type: s || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (o = arguments), r.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    r.each(function () {
                                        n.apply(this, o || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        (w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (w.offset = {
            setOffset: function (e, t, n) {
                var i,
                    s,
                    o,
                    r,
                    a,
                    l,
                    c = w.css(e, "position"),
                    u = w(e),
                    d = {};
                "static" === c && (e.style.position = "relative"),
                    (a = u.offset()),
                    (o = w.css(e, "top")),
                    (l = w.css(e, "left")),
                    ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? ((r = (i = u.position()).top), (s = i.left)) : ((r = parseFloat(o) || 0), (s = parseFloat(l) || 0)),
                    f(t) && (t = t.call(e, n, w.extend({}, a))),
                    null != t.top && (d.top = t.top - a.top + r),
                    null != t.left && (d.left = t.left - a.left + s),
                    "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d));
            },
        }),
        w.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              w.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    i = this[0];
                return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        i = this[0],
                        s = { top: 0, left: 0 };
                    if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"); ) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && (((s = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (s.left += w.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - s.top - w.css(i, "marginTop", !0), left: t.left - s.left - w.css(i, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === w.css(e, "position"); ) e = e.offsetParent;
                    return e || ie;
                });
            },
        }),
        w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            w.fn[e] = function (i) {
                return U(
                    this,
                    function (e, i, s) {
                        var o;
                        if ((_(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === s)) return o ? o[t] : e[i];
                        o ? o.scrollTo(n ? o.pageXOffset : s, n ? s : o.pageYOffset) : (e[i] = s);
                    },
                    e,
                    i,
                    arguments.length
                );
            };
        }),
        w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = Ue(p.pixelPosition, function (e, n) {
                if (n) return (n = We(e, t)), Ie.test(n) ? w(e).position()[t] + "px" : n;
            });
        }),
        w.each({ Height: "height", Width: "width" }, function (e, t) {
            w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
                w.fn[i] = function (s, o) {
                    var r = arguments.length && (n || "boolean" != typeof s),
                        a = n || (!0 === s || !0 === o ? "margin" : "border");
                    return U(
                        this,
                        function (t, n, s) {
                            var o;
                            return _(t)
                                ? 0 === i.indexOf("outer")
                                    ? t["inner" + e]
                                    : t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                : void 0 === s
                                ? w.css(t, n, a)
                                : w.style(t, n, s, a);
                        },
                        t,
                        r ? s : void 0,
                        r
                    );
                };
            });
        }),
        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            w.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        w.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            w.fn[t] = function (e, n) {
                return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
            };
        });
    var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (w.proxy = function (e, t) {
        var n, i, o;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), f(e)))
            return (
                (i = s.call(arguments, 2)),
                ((o = function () {
                    return e.apply(t || this, i.concat(s.call(arguments)));
                }).guid = e.guid = e.guid || w.guid++),
                o
            );
    }),
        (w.holdReady = function (e) {
            e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = O),
        (w.isFunction = f),
        (w.isWindow = _),
        (w.camelCase = z),
        (w.type = b),
        (w.now = Date.now),
        (w.isNumeric = function (e) {
            var t = w.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        (w.trim = function (e) {
            return null == e ? "" : (e + "").replace(Yt, "");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return w;
            });
    var Vt = e.jQuery,
        Xt = e.$;
    return (
        (w.noConflict = function (t) {
            return e.$ === w && (e.$ = Xt), t && e.jQuery === w && (e.jQuery = Vt), w;
        }),
        void 0 === t && (e.jQuery = e.$ = w),
        w
    );
}),
    void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
    (function (e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(["jquery"], function (t) {
                  return e(t, window);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("jquery"), window))
            : e(jQuery, window);
    })(function (e, t) {
        "use strict";
        function n(t) {
            return (
                0 <=
                (function (e, t) {
                    var n,
                        i = /^(\d+)\.(\d+)\.(\d+)/,
                        s = i.exec(e) || [],
                        o = i.exec(t) || [];
                    for (n = 1; n <= 3; n++) {
                        if (+s[n] > +o[n]) return 1;
                        if (+s[n] < +o[n]) return -1;
                    }
                    return 0;
                })(e.fn.jquery, t)
            );
        }
        (e.migrateVersion = "3.3.0"),
            t.console &&
                t.console.log &&
                ((e && n("3.0.0")) || t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
                e.migrateWarnings && t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
                t.console.log("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion));
        var i = {};
        function s(n) {
            var s = t.console;
            (e.migrateDeduplicateWarnings && i[n]) || ((i[n] = !0), e.migrateWarnings.push(n), s && s.warn && !e.migrateMute && (s.warn("JQMIGRATE: " + n), e.migrateTrace && s.trace && s.trace()));
        }
        function o(e, t, n, i) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return s(i), n;
                },
                set: function (e) {
                    s(i), (n = e);
                },
            });
        }
        function r(e, t, n, i) {
            e[t] = function () {
                return s(i), n.apply(this, arguments);
            };
        }
        (e.migrateDeduplicateWarnings = !0),
            (e.migrateWarnings = []),
            void 0 === e.migrateTrace && (e.migrateTrace = !0),
            (e.migrateReset = function () {
                (i = {}), (e.migrateWarnings.length = 0);
            }),
            "BackCompat" === t.document.compatMode && s("jQuery is not compatible with Quirks Mode");
        var a,
            l = {},
            c = e.fn.init,
            u = e.find,
            d = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (a in ((e.fn.init = function (e) {
            var t = Array.prototype.slice.call(arguments);
            return "string" == typeof e && "#" === e && (s("jQuery( '#' ) is not a valid selector"), (t[0] = [])), c.apply(this, t);
        }),
        (e.fn.init.prototype = e.fn),
        (e.find = function (e) {
            var n = Array.prototype.slice.call(arguments);
            if ("string" == typeof e && d.test(e))
                try {
                    t.document.querySelector(e);
                } catch (i) {
                    e = e.replace(h, function (e, t, n, i) {
                        return "[" + t + n + '"' + i + '"]';
                    });
                    try {
                        t.document.querySelector(e), s("Attribute selector with '#' must be quoted: " + n[0]), (n[0] = e);
                    } catch (e) {
                        s("Attribute selector with '#' was not fixed: " + n[0]);
                    }
                }
            return u.apply(this, n);
        }),
        u))
            Object.prototype.hasOwnProperty.call(u, a) && (e.find[a] = u[a]);
        if (
            (r(
                e.fn,
                "size",
                function () {
                    return this.length;
                },
                "jQuery.fn.size() is deprecated and removed; use the .length property"
            ),
            r(
                e,
                "parseJSON",
                function () {
                    return JSON.parse.apply(null, arguments);
                },
                "jQuery.parseJSON is deprecated; use JSON.parse"
            ),
            r(e, "holdReady", e.holdReady, "jQuery.holdReady is deprecated"),
            r(e, "unique", e.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"),
            o(e.expr, "filters", e.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
            o(e.expr, ":", e.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
            n("3.1.1") &&
                r(
                    e,
                    "trim",
                    function (e) {
                        return null == e ? "" : (e + "").replace(p, "");
                    },
                    "jQuery.trim is deprecated; use String.prototype.trim"
                ),
            n("3.2.0") &&
                r(
                    e,
                    "nodeName",
                    function (e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                    },
                    "jQuery.nodeName is deprecated"
                ),
            n("3.3.0") &&
                (r(
                    e,
                    "isNumeric",
                    function (e) {
                        var t = typeof e;
                        return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e));
                    },
                    "jQuery.isNumeric() is deprecated"
                ),
                e.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    l["[object " + t + "]"] = t.toLowerCase();
                }),
                r(
                    e,
                    "type",
                    function (e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[Object.prototype.toString.call(e)] || "object" : typeof e;
                    },
                    "jQuery.type is deprecated"
                ),
                r(
                    e,
                    "isFunction",
                    function (e) {
                        return "function" == typeof e;
                    },
                    "jQuery.isFunction() is deprecated"
                ),
                r(
                    e,
                    "isWindow",
                    function (e) {
                        return null != e && e === e.window;
                    },
                    "jQuery.isWindow() is deprecated"
                ),
                r(e, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")),
            e.ajax)
        ) {
            var f = e.ajax;
            e.ajax = function () {
                var e = f.apply(this, arguments);
                return (
                    e.promise && (r(e, "success", e.done, "jQXHR.success is deprecated and removed"), r(e, "error", e.fail, "jQXHR.error is deprecated and removed"), r(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
                );
            };
        }
        var _ = e.fn.removeAttr,
            m = e.fn.toggleClass,
            g = /\S+/g;
        function v(e) {
            return e.replace(/-([a-z])/g, function (e, t) {
                return t.toUpperCase();
            });
        }
        e.fn.removeAttr = function (t) {
            var n = this;
            return (
                e.each(t.match(g), function (t, i) {
                    e.expr.match.bool.test(i) && (s("jQuery.fn.removeAttr no longer sets boolean properties: " + i), n.prop(i, !1));
                }),
                _.apply(this, arguments)
            );
        };
        var b,
            y = !(e.fn.toggleClass = function (t) {
                return void 0 !== t && "boolean" != typeof t
                    ? m.apply(this, arguments)
                    : (s("jQuery.fn.toggleClass( boolean ) is deprecated"),
                      this.each(function () {
                          var n = (this.getAttribute && this.getAttribute("class")) || "";
                          n && e.data(this, "__className__", n), this.setAttribute && this.setAttribute("class", n || !1 === t ? "" : e.data(this, "__className__") || "");
                      }));
            }),
            w = /^[a-z]/,
            C = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        e.swap &&
            e.each(["height", "width", "reliableMarginRight"], function (t, n) {
                var i = e.cssHooks[n] && e.cssHooks[n].get;
                i &&
                    (e.cssHooks[n].get = function () {
                        var e;
                        return (y = !0), (e = i.apply(this, arguments)), (y = !1), e;
                    });
            }),
            (e.swap = function (e, t, n, i) {
                var o,
                    r,
                    a = {};
                for (r in (y || s("jQuery.swap() is undocumented and deprecated"), t)) (a[r] = e.style[r]), (e.style[r] = t[r]);
                for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = a[r];
                return o;
            }),
            n("3.4.0") &&
                "undefined" != typeof Proxy &&
                (e.cssProps = new Proxy(e.cssProps || {}, {
                    set: function () {
                        return s("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments);
                    },
                })),
            e.cssNumber || (e.cssNumber = {}),
            (b = e.fn.css),
            (e.fn.css = function (t, n) {
                var i = this;
                return (
                    "string" != typeof t &&
                        e.each(t, function (t, n) {
                            e.fn.css.call(i, t, n);
                        }),
                    "number" != typeof n ||
                        (function (e) {
                            return w.test(e) && C.test(e[0].toUpperCase() + e.slice(1));
                        })(v(t)) ||
                        s("Use of number-typed values is deprecated in jQuery.fn.css"),
                    b.apply(this, arguments)
                );
            });
        var k = e.data;
        if (
            ((e.data = function (t, n, i) {
                var o, r, a;
                if (n && "object" == typeof n && 2 === arguments.length) {
                    for (a in ((o = e.hasData(t) && k.call(this, t)), (r = {}), n)) a !== v(a) ? (s("jQuery.data() always sets/gets camelCased names: " + a), (o[a] = n[a])) : (r[a] = n[a]);
                    return k.call(this, t, r), n;
                }
                return n && "string" == typeof n && n !== v(n) && (o = e.hasData(t) && k.call(this, t)) && n in o
                    ? (s("jQuery.data() always sets/gets camelCased names: " + n), 2 < arguments.length && (o[n] = i), o[n])
                    : k.apply(this, arguments);
            }),
            e.fx)
        ) {
            var S,
                x,
                E = e.Tween.prototype.run,
                O = function (e) {
                    return e;
                };
            (e.Tween.prototype.run = function () {
                1 < e.easing[this.easing].length && (s("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), (e.easing[this.easing] = O)), E.apply(this, arguments);
            }),
                (S = e.fx.interval || 13),
                (x = "jQuery.fx.interval is deprecated"),
                t.requestAnimationFrame &&
                    Object.defineProperty(e.fx, "interval", {
                        configurable: !0,
                        enumerable: !0,
                        get: function () {
                            return t.document.hidden || s(x), S;
                        },
                        set: function (e) {
                            s(x), (S = e);
                        },
                    });
        }
        var T = e.fn.load,
            P = e.event.add,
            M = e.event.fix;
        function j(e) {
            var n = t.document.implementation.createHTMLDocument("");
            return (n.body.innerHTML = e), n.body && n.body.innerHTML;
        }
        function D(e) {
            var t = e.replace($, "<$1></$2>");
            t !== e && j(e) !== j(t) && s("HTML tags must be properly nested and closed: " + e);
        }
        (e.event.props = []),
            (e.event.fixHooks = {}),
            o(e.event.props, "concat", e.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"),
            (e.event.fix = function (t) {
                var n,
                    i = t.type,
                    o = this.fixHooks[i],
                    r = e.event.props;
                if (r.length) for (s("jQuery.event.props are deprecated and removed: " + r.join()); r.length; ) e.event.addProp(r.pop());
                if (o && !o._migrated_ && ((o._migrated_ = !0), s("jQuery.event.fixHooks are deprecated and removed: " + i), (r = o.props) && r.length)) for (; r.length; ) e.event.addProp(r.pop());
                return (n = M.call(this, t)), o && o.filter ? o.filter(n, t) : n;
            }),
            (e.event.add = function (e, n) {
                return e === t && "load" === n && "complete" === t.document.readyState && s("jQuery(window).on('load'...) called after load event occurred"), P.apply(this, arguments);
            }),
            e.each(["load", "unload", "error"], function (t, n) {
                e.fn[n] = function () {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return "load" === n && "string" == typeof e[0] ? T.apply(this, e) : (s("jQuery.fn." + n + "() is deprecated"), e.splice(0, 0, n), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this));
                };
            }),
            e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
                e.fn[n] = function (e, t) {
                    return s("jQuery.fn." + n + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
                };
            }),
            e(function () {
                e(t.document).triggerHandler("ready");
            }),
            (e.event.special.ready = {
                setup: function () {
                    this === t.document && s("'ready' event is deprecated");
                },
            }),
            e.fn.extend({
                bind: function (e, t, n) {
                    return s("jQuery.fn.bind() is deprecated"), this.on(e, null, t, n);
                },
                unbind: function (e, t) {
                    return s("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
                },
                delegate: function (e, t, n, i) {
                    return s("jQuery.fn.delegate() is deprecated"), this.on(t, e, n, i);
                },
                undelegate: function (e, t, n) {
                    return s("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                },
                hover: function (e, t) {
                    return s("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e);
                },
            });
        var $ = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            A = e.htmlPrefilter;
        (e.UNSAFE_restoreLegacyHtmlPrefilter = function () {
            e.htmlPrefilter = function (e) {
                return D(e), e.replace($, "<$1></$2>");
            };
        }),
            (e.htmlPrefilter = function (e) {
                return D(e), A(e);
            });
        var H = e.fn.offset;
        if (
            ((e.fn.offset = function () {
                var n,
                    i = this[0];
                if (i && i.nodeType) return (n = (i.ownerDocument || t.document).documentElement), e.contains(n, i) ? H.apply(this, arguments) : (s("jQuery.fn.offset() requires an element connected to a document"), { top: 0, left: 0 });
                s("jQuery.fn.offset() requires a valid DOM element");
            }),
            e.ajax)
        ) {
            var L = e.param;
            e.param = function (t, n) {
                var i = e.ajaxSettings && e.ajaxSettings.traditional;
                return void 0 === n && i && (s("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), (n = i)), L.call(this, t, n);
            };
        }
        var I = e.fn.andSelf || e.fn.addBack;
        if (
            ((e.fn.andSelf = function () {
                return s("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), I.apply(this, arguments);
            }),
            e.Deferred)
        ) {
            var R = e.Deferred,
                N = [
                    ["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory")],
                ];
            (e.Deferred = function (t) {
                var n = R(),
                    i = n.promise();
                return (
                    (n.pipe = i.pipe = function () {
                        var t = arguments;
                        return (
                            s("deferred.pipe() is deprecated"),
                            e
                                .Deferred(function (s) {
                                    e.each(N, function (e, o) {
                                        var r = "function" == typeof t[e] && t[e];
                                        n[o[1]](function () {
                                            var e = r && r.apply(this, arguments);
                                            e && "function" == typeof e.promise ? e.promise().done(s.resolve).fail(s.reject).progress(s.notify) : s[o[0] + "With"](this === i ? s.promise() : this, r ? [e] : arguments);
                                        });
                                    }),
                                        (t = null);
                                })
                                .promise()
                        );
                    }),
                    t && t.call(n, n),
                    n
                );
            }),
                (e.Deferred.exceptionHook = R.exceptionHook);
        }
        return e;
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t(((e = e || self).bootstrap = {}), e.jQuery);
    })(this, function (e, t) {
        "use strict";
        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        function i(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        }
        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t &&
                    (i = i.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? o(Object(n), !0).forEach(function (t) {
                          s(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : o(Object(n)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
        var a = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
                do {
                    e += ~~(1e6 * Math.random());
                } while (document.getElementById(e));
                return e;
            },
            getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : "";
                }
                try {
                    return document.querySelector(t) ? t : null;
                } catch (e) {
                    return null;
                }
            },
            getTransitionDurationFromElement: function (e) {
                if (!e) return 0;
                var n = t(e).css("transition-duration"),
                    i = t(e).css("transition-delay"),
                    s = parseFloat(n),
                    o = parseFloat(i);
                return s || o ? ((n = n.split(",")[0]), (i = i.split(",")[0]), 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
            },
            reflow: function (e) {
                return e.offsetHeight;
            },
            triggerTransitionEnd: function (e) {
                t(e).trigger("transitionend");
            },
            supportsTransitionEnd: function () {
                return Boolean("transitionend");
            },
            isElement: function (e) {
                return (e[0] || e).nodeType;
            },
            typeCheckConfig: function (e, t, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var s = n[i],
                            o = t[i],
                            r =
                                o && a.isElement(o)
                                    ? "element"
                                    : null === (l = o) || void 0 === l
                                    ? "" + l
                                    : {}.toString
                                          .call(l)
                                          .match(/\s([a-z]+)/i)[1]
                                          .toLowerCase();
                        if (!new RegExp(s).test(r)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + r + '" but expected type "' + s + '".');
                    }
                var l;
            },
            findShadowRoot: function (e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    var t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null;
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? a.findShadowRoot(e.parentNode) : null;
            },
            jQueryDetection: function () {
                if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = t.fn.jquery.split(" ")[0].split(".");
                if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
            },
        };
        a.jQueryDetection(),
            (t.fn.emulateTransitionEnd = function (e) {
                var n = this,
                    i = !1;
                return (
                    t(this).one(a.TRANSITION_END, function () {
                        i = !0;
                    }),
                    setTimeout(function () {
                        i || a.triggerTransitionEnd(n);
                    }, e),
                    this
                );
            }),
            (t.event.special[a.TRANSITION_END] = {
                bindType: "transitionend",
                delegateType: "transitionend",
                handle: function (e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
                },
            });
        var l = "alert",
            c = t.fn[l],
            u = (function () {
                function e(e) {
                    this._element = e;
                }
                var n = e.prototype;
                return (
                    (n.close = function (e) {
                        var t = this._element;
                        e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
                    }),
                    (n.dispose = function () {
                        t.removeData(this._element, "bs.alert"), (this._element = null);
                    }),
                    (n._getRootElement = function (e) {
                        var n = a.getSelectorFromElement(e),
                            i = !1;
                        return n && (i = document.querySelector(n)), i || (i = t(e).closest(".alert")[0]), i;
                    }),
                    (n._triggerCloseEvent = function (e) {
                        var n = t.Event("close.bs.alert");
                        return t(e).trigger(n), n;
                    }),
                    (n._removeElement = function (e) {
                        var n = this;
                        if ((t(e).removeClass("show"), t(e).hasClass("fade"))) {
                            var i = a.getTransitionDurationFromElement(e);
                            t(e)
                                .one(a.TRANSITION_END, function (t) {
                                    return n._destroyElement(e, t);
                                })
                                .emulateTransitionEnd(i);
                        } else this._destroyElement(e);
                    }),
                    (n._destroyElement = function (e) {
                        t(e).detach().trigger("closed.bs.alert").remove();
                    }),
                    (e._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = t(this),
                                s = i.data("bs.alert");
                            s || ((s = new e(this)), i.data("bs.alert", s)), "close" === n && s[n](this);
                        });
                    }),
                    (e._handleDismiss = function (e) {
                        return function (t) {
                            t && t.preventDefault(), e.close(this);
                        };
                    }),
                    i(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.5.0";
                            },
                        },
                    ]),
                    e
                );
            })();
        t(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', u._handleDismiss(new u())),
            (t.fn[l] = u._jQueryInterface),
            (t.fn[l].Constructor = u),
            (t.fn[l].noConflict = function () {
                return (t.fn[l] = c), u._jQueryInterface;
            });
        var d = t.fn.button,
            h = (function () {
                function e(e) {
                    this._element = e;
                }
                var n = e.prototype;
                return (
                    (n.toggle = function () {
                        var e = !0,
                            n = !0,
                            i = t(this._element).closest('[data-toggle="buttons"]')[0];
                        if (i) {
                            var s = this._element.querySelector('input:not([type="hidden"])');
                            if (s) {
                                if ("radio" === s.type)
                                    if (s.checked && this._element.classList.contains("active")) e = !1;
                                    else {
                                        var o = i.querySelector(".active");
                                        o && t(o).removeClass("active");
                                    }
                                e && (("checkbox" !== s.type && "radio" !== s.type) || (s.checked = !this._element.classList.contains("active")), t(s).trigger("change")), s.focus(), (n = !1);
                            }
                        }
                        this._element.hasAttribute("disabled") ||
                            this._element.classList.contains("disabled") ||
                            (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && t(this._element).toggleClass("active"));
                    }),
                    (n.dispose = function () {
                        t.removeData(this._element, "bs.button"), (this._element = null);
                    }),
                    (e._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = t(this).data("bs.button");
                            i || ((i = new e(this)), t(this).data("bs.button", i)), "toggle" === n && i[n]();
                        });
                    }),
                    i(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.5.0";
                            },
                        },
                    ]),
                    e
                );
            })();
        t(document)
            .on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                var n = e.target,
                    i = n;
                if ((t(n).hasClass("btn") || (n = t(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))) e.preventDefault();
                else {
                    var s = n.querySelector('input:not([type="hidden"])');
                    if (s && (s.hasAttribute("disabled") || s.classList.contains("disabled"))) return void e.preventDefault();
                    "LABEL" === i.tagName && s && "checkbox" === s.type && e.preventDefault(), h._jQueryInterface.call(t(n), "toggle");
                }
            })
            .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                var n = t(e.target).closest(".btn")[0];
                t(n).toggleClass("focus", /^focus(in)?$/.test(e.type));
            }),
            t(window).on("load.bs.button.data-api", function () {
                for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
                    var i = e[t],
                        s = i.querySelector('input:not([type="hidden"])');
                    s.checked || s.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
                }
                for (var o = 0, r = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < r; o++) {
                    var a = e[o];
                    "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active");
                }
            }),
            (t.fn.button = h._jQueryInterface),
            (t.fn.button.Constructor = h),
            (t.fn.button.noConflict = function () {
                return (t.fn.button = d), h._jQueryInterface;
            });
        var p = "carousel",
            f = t.fn[p],
            _ = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
            m = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
            g = { TOUCH: "touch", PEN: "pen" },
            v = (function () {
                function e(e, t) {
                    (this._items = null),
                        (this._interval = null),
                        (this._activeElement = null),
                        (this._isPaused = !1),
                        (this._isSliding = !1),
                        (this.touchTimeout = null),
                        (this.touchStartX = 0),
                        (this.touchDeltaX = 0),
                        (this._config = this._getConfig(t)),
                        (this._element = e),
                        (this._indicatorsElement = this._element.querySelector(".carousel-indicators")),
                        (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                        (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
                        this._addEventListeners();
                }
                var n = e.prototype;
                return (
                    (n.next = function () {
                        this._isSliding || this._slide("next");
                    }),
                    (n.nextWhenVisible = function () {
                        !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next();
                    }),
                    (n.prev = function () {
                        this._isSliding || this._slide("prev");
                    }),
                    (n.pause = function (e) {
                        e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                    }),
                    (n.cycle = function (e) {
                        e || (this._isPaused = !1),
                            this._interval && (clearInterval(this._interval), (this._interval = null)),
                            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                    }),
                    (n.to = function (e) {
                        var n = this;
                        this._activeElement = this._element.querySelector(".active.carousel-item");
                        var i = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0))
                            if (this._isSliding)
                                t(this._element).one("slid.bs.carousel", function () {
                                    return n.to(e);
                                });
                            else {
                                if (i === e) return this.pause(), void this.cycle();
                                var s = e > i ? "next" : "prev";
                                this._slide(s, this._items[e]);
                            }
                    }),
                    (n.dispose = function () {
                        t(this._element).off(".bs.carousel"),
                            t.removeData(this._element, "bs.carousel"),
                            (this._items = null),
                            (this._config = null),
                            (this._element = null),
                            (this._interval = null),
                            (this._isPaused = null),
                            (this._isSliding = null),
                            (this._activeElement = null),
                            (this._indicatorsElement = null);
                    }),
                    (n._getConfig = function (e) {
                        return (e = r(r({}, _), e)), a.typeCheckConfig(p, e, m), e;
                    }),
                    (n._handleSwipe = function () {
                        var e = Math.abs(this.touchDeltaX);
                        if (!(e <= 40)) {
                            var t = e / this.touchDeltaX;
                            (this.touchDeltaX = 0), t > 0 && this.prev(), t < 0 && this.next();
                        }
                    }),
                    (n._addEventListeners = function () {
                        var e = this;
                        this._config.keyboard &&
                            t(this._element).on("keydown.bs.carousel", function (t) {
                                return e._keydown(t);
                            }),
                            "hover" === this._config.pause &&
                                t(this._element)
                                    .on("mouseenter.bs.carousel", function (t) {
                                        return e.pause(t);
                                    })
                                    .on("mouseleave.bs.carousel", function (t) {
                                        return e.cycle(t);
                                    }),
                            this._config.touch && this._addTouchEventListeners();
                    }),
                    (n._addTouchEventListeners = function () {
                        var e = this;
                        if (this._touchSupported) {
                            var n = function (t) {
                                    e._pointerEvent && g[t.originalEvent.pointerType.toUpperCase()] ? (e.touchStartX = t.originalEvent.clientX) : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
                                },
                                i = function (t) {
                                    e._pointerEvent && g[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                                        e._handleSwipe(),
                                        "hover" === e._config.pause &&
                                            (e.pause(),
                                            e.touchTimeout && clearTimeout(e.touchTimeout),
                                            (e.touchTimeout = setTimeout(function (t) {
                                                return e.cycle(t);
                                            }, 500 + e._config.interval)));
                                };
                            t(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (e) {
                                return e.preventDefault();
                            }),
                                this._pointerEvent
                                    ? (t(this._element).on("pointerdown.bs.carousel", function (e) {
                                          return n(e);
                                      }),
                                      t(this._element).on("pointerup.bs.carousel", function (e) {
                                          return i(e);
                                      }),
                                      this._element.classList.add("pointer-event"))
                                    : (t(this._element).on("touchstart.bs.carousel", function (e) {
                                          return n(e);
                                      }),
                                      t(this._element).on("touchmove.bs.carousel", function (t) {
                                          return (function (t) {
                                              t.originalEvent.touches && t.originalEvent.touches.length > 1 ? (e.touchDeltaX = 0) : (e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX);
                                          })(t);
                                      }),
                                      t(this._element).on("touchend.bs.carousel", function (e) {
                                          return i(e);
                                      }));
                        }
                    }),
                    (n._keydown = function (e) {
                        if (!/input|textarea/i.test(e.target.tagName))
                            switch (e.which) {
                                case 37:
                                    e.preventDefault(), this.prev();
                                    break;
                                case 39:
                                    e.preventDefault(), this.next();
                            }
                    }),
                    (n._getItemIndex = function (e) {
                        return (this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : []), this._items.indexOf(e);
                    }),
                    (n._getItemByDirection = function (e, t) {
                        var n = "next" === e,
                            i = "prev" === e,
                            s = this._getItemIndex(t),
                            o = this._items.length - 1;
                        if (((i && 0 === s) || (n && s === o)) && !this._config.wrap) return t;
                        var r = (s + ("prev" === e ? -1 : 1)) % this._items.length;
                        return -1 === r ? this._items[this._items.length - 1] : this._items[r];
                    }),
                    (n._triggerSlideEvent = function (e, n) {
                        var i = this._getItemIndex(e),
                            s = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                            o = t.Event("slide.bs.carousel", { relatedTarget: e, direction: n, from: s, to: i });
                        return t(this._element).trigger(o), o;
                    }),
                    (n._setActiveIndicatorElement = function (e) {
                        if (this._indicatorsElement) {
                            var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                            t(n).removeClass("active");
                            var i = this._indicatorsElement.children[this._getItemIndex(e)];
                            i && t(i).addClass("active");
                        }
                    }),
                    (n._slide = function (e, n) {
                        var i,
                            s,
                            o,
                            r = this,
                            l = this._element.querySelector(".active.carousel-item"),
                            c = this._getItemIndex(l),
                            u = n || (l && this._getItemByDirection(e, l)),
                            d = this._getItemIndex(u),
                            h = Boolean(this._interval);
                        if (("next" === e ? ((i = "carousel-item-left"), (s = "carousel-item-next"), (o = "left")) : ((i = "carousel-item-right"), (s = "carousel-item-prev"), (o = "right")), u && t(u).hasClass("active")))
                            this._isSliding = !1;
                        else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && l && u) {
                            (this._isSliding = !0), h && this.pause(), this._setActiveIndicatorElement(u);
                            var p = t.Event("slid.bs.carousel", { relatedTarget: u, direction: o, from: c, to: d });
                            if (t(this._element).hasClass("slide")) {
                                t(u).addClass(s), a.reflow(u), t(l).addClass(i), t(u).addClass(i);
                                var f = parseInt(u.getAttribute("data-interval"), 10);
                                f ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = f)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
                                var _ = a.getTransitionDurationFromElement(l);
                                t(l)
                                    .one(a.TRANSITION_END, function () {
                                        t(u)
                                            .removeClass(i + " " + s)
                                            .addClass("active"),
                                            t(l).removeClass("active " + s + " " + i),
                                            (r._isSliding = !1),
                                            setTimeout(function () {
                                                return t(r._element).trigger(p);
                                            }, 0);
                                    })
                                    .emulateTransitionEnd(_);
                            } else t(l).removeClass("active"), t(u).addClass("active"), (this._isSliding = !1), t(this._element).trigger(p);
                            h && this.cycle();
                        }
                    }),
                    (e._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = t(this).data("bs.carousel"),
                                s = r(r({}, _), t(this).data());
                            "object" == typeof n && (s = r(r({}, s), n));
                            var o = "string" == typeof n ? n : s.slide;
                            if ((i || ((i = new e(this, s)), t(this).data("bs.carousel", i)), "number" == typeof n)) i.to(n);
                            else if ("string" == typeof o) {
                                if (void 0 === i[o]) throw new TypeError('No method named "' + o + '"');
                                i[o]();
                            } else s.interval && s.ride && (i.pause(), i.cycle());
                        });
                    }),
                    (e._dataApiClickHandler = function (n) {
                        var i = a.getSelectorFromElement(this);
                        if (i) {
                            var s = t(i)[0];
                            if (s && t(s).hasClass("carousel")) {
                                var o = r(r({}, t(s).data()), t(this).data()),
                                    l = this.getAttribute("data-slide-to");
                                l && (o.interval = !1), e._jQueryInterface.call(t(s), o), l && t(s).data("bs.carousel").to(l), n.preventDefault();
                            }
                        }
                    }),
                    i(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.5.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return _;
                            },
                        },
                    ]),
                    e
                );
            })();
        t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", v._dataApiClickHandler),
            t(window).on("load.bs.carousel.data-api", function () {
                for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
                    var s = t(e[n]);
                    v._jQueryInterface.call(s, s.data());
                }
            }),
            (t.fn[p] = v._jQueryInterface),
            (t.fn[p].Constructor = v),
            (t.fn[p].noConflict = function () {
                return (t.fn[p] = f), v._jQueryInterface;
            });
        var b = "collapse",
            y = t.fn[b],
            w = { toggle: !0, parent: "" },
            C = { toggle: "boolean", parent: "(string|element)" },
            k = (function () {
                function e(e, t) {
                    (this._isTransitioning = !1),
                        (this._element = e),
                        (this._config = this._getConfig(t)),
                        (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')));
                    for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, s = n.length; i < s; i++) {
                        var o = n[i],
                            r = a.getSelectorFromElement(o),
                            l = [].slice.call(document.querySelectorAll(r)).filter(function (t) {
                                return t === e;
                            });
                        null !== r && l.length > 0 && ((this._selector = r), this._triggerArray.push(o));
                    }
                    (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
                }
                var n = e.prototype;
                return (
                    (n.toggle = function () {
                        t(this._element).hasClass("show") ? this.hide() : this.show();
                    }),
                    (n.show = function () {
                        var n,
                            i,
                            s = this;
                        if (
                            !(
                                this._isTransitioning ||
                                t(this._element).hasClass("show") ||
                                (this._parent &&
                                    0 ===
                                        (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (e) {
                                            return "string" == typeof s._config.parent ? e.getAttribute("data-parent") === s._config.parent : e.classList.contains("collapse");
                                        })).length &&
                                    (n = null),
                                n && (i = t(n).not(this._selector).data("bs.collapse")) && i._isTransitioning)
                            )
                        ) {
                            var o = t.Event("show.bs.collapse");
                            if ((t(this._element).trigger(o), !o.isDefaultPrevented())) {
                                n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data("bs.collapse", null));
                                var r = this._getDimension();
                                t(this._element).removeClass("collapse").addClass("collapsing"),
                                    (this._element.style[r] = 0),
                                    this._triggerArray.length && t(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0),
                                    this.setTransitioning(!0);
                                var l = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                                    c = a.getTransitionDurationFromElement(this._element);
                                t(this._element)
                                    .one(a.TRANSITION_END, function () {
                                        t(s._element).removeClass("collapsing").addClass("collapse show"), (s._element.style[r] = ""), s.setTransitioning(!1), t(s._element).trigger("shown.bs.collapse");
                                    })
                                    .emulateTransitionEnd(c),
                                    (this._element.style[r] = this._element[l] + "px");
                            }
                        }
                    }),
                    (n.hide = function () {
                        var e = this;
                        if (!this._isTransitioning && t(this._element).hasClass("show")) {
                            var n = t.Event("hide.bs.collapse");
                            if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                                var i = this._getDimension();
                                (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px"), a.reflow(this._element), t(this._element).addClass("collapsing").removeClass("collapse show");
                                var s = this._triggerArray.length;
                                if (s > 0)
                                    for (var o = 0; o < s; o++) {
                                        var r = this._triggerArray[o],
                                            l = a.getSelectorFromElement(r);
                                        null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass("show") || t(r).addClass("collapsed").attr("aria-expanded", !1));
                                    }
                                this.setTransitioning(!0), (this._element.style[i] = "");
                                var c = a.getTransitionDurationFromElement(this._element);
                                t(this._element)
                                    .one(a.TRANSITION_END, function () {
                                        e.setTransitioning(!1), t(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                                    })
                                    .emulateTransitionEnd(c);
                            }
                        }
                    }),
                    (n.setTransitioning = function (e) {
                        this._isTransitioning = e;
                    }),
                    (n.dispose = function () {
                        t.removeData(this._element, "bs.collapse"), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                    }),
                    (n._getConfig = function (e) {
                        return ((e = r(r({}, w), e)).toggle = Boolean(e.toggle)), a.typeCheckConfig(b, e, C), e;
                    }),
                    (n._getDimension = function () {
                        return t(this._element).hasClass("width") ? "width" : "height";
                    }),
                    (n._getParent = function () {
                        var n,
                            i = this;
                        a.isElement(this._config.parent) ? ((n = this._config.parent), void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : (n = document.querySelector(this._config.parent));
                        var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                            o = [].slice.call(n.querySelectorAll(s));
                        return (
                            t(o).each(function (t, n) {
                                i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]);
                            }),
                            n
                        );
                    }),
                    (n._addAriaAndCollapsedClass = function (e, n) {
                        var i = t(e).hasClass("show");
                        n.length && t(n).toggleClass("collapsed", !i).attr("aria-expanded", i);
                    }),
                    (e._getTargetFromElement = function (e) {
                        var t = a.getSelectorFromElement(e);
                        return t ? document.querySelector(t) : null;
                    }),
                    (e._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = t(this),
                                s = i.data("bs.collapse"),
                                o = r(r(r({}, w), i.data()), "object" == typeof n && n ? n : {});
                            if ((!s && o.toggle && "string" == typeof n && /show|hide/.test(n) && (o.toggle = !1), s || ((s = new e(this, o)), i.data("bs.collapse", s)), "string" == typeof n)) {
                                if (void 0 === s[n]) throw new TypeError('No method named "' + n + '"');
                                s[n]();
                            }
                        });
                    }),
                    i(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.5.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return w;
                            },
                        },
                    ]),
                    e
                );
            })();
        t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = t(this),
                i = a.getSelectorFromElement(this),
                s = [].slice.call(document.querySelectorAll(i));
            t(s).each(function () {
                var e = t(this),
                    i = e.data("bs.collapse") ? "toggle" : n.data();
                k._jQueryInterface.call(e, i);
            });
        }),
            (t.fn[b] = k._jQueryInterface),
            (t.fn[b].Constructor = k),
            (t.fn[b].noConflict = function () {
                return (t.fn[b] = y), k._jQueryInterface;
            });
        var S = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
            x = (function () {
                for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) if (S && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                return 0;
            })(),
            E =
                S && window.Promise
                    ? function (e) {
                          var t = !1;
                          return function () {
                              t ||
                                  ((t = !0),
                                  window.Promise.resolve().then(function () {
                                      (t = !1), e();
                                  }));
                          };
                      }
                    : function (e) {
                          var t = !1;
                          return function () {
                              t ||
                                  ((t = !0),
                                  setTimeout(function () {
                                      (t = !1), e();
                                  }, x));
                          };
                      };
        function O(e) {
            return e && "[object Function]" === {}.toString.call(e);
        }
        function T(e, t) {
            if (1 !== e.nodeType) return [];
            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? n[t] : n;
        }
        function P(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function M(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body;
            }
            var t = T(e),
                n = t.overflow,
                i = t.overflowX,
                s = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + s + i) ? e : M(P(e));
        }
        function j(e) {
            return e && e.referenceNode ? e.referenceNode : e;
        }
        var D = S && !(!window.MSInputMethodContext || !document.documentMode),
            $ = S && /MSIE 10/.test(navigator.userAgent);
        function A(e) {
            return 11 === e ? D : 10 === e ? $ : D || $;
        }
        function H(e) {
            if (!e) return document.documentElement;
            for (var t = A(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; ) n = (e = e.nextElementSibling).offsetParent;
            var i = n && n.nodeName;
            return i && "BODY" !== i && "HTML" !== i ? (-1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === T(n, "position") ? H(n) : n) : e ? e.ownerDocument.documentElement : document.documentElement;
        }
        function L(e) {
            return null !== e.parentNode ? L(e.parentNode) : e;
        }
        function I(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                i = n ? e : t,
                s = n ? t : e,
                o = document.createRange();
            o.setStart(i, 0), o.setEnd(s, 0);
            var r,
                a,
                l = o.commonAncestorContainer;
            if ((e !== l && t !== l) || i.contains(s)) return "BODY" === (a = (r = l).nodeName) || ("HTML" !== a && H(r.firstElementChild) !== r) ? H(l) : l;
            var c = L(e);
            return c.host ? I(c.host, t) : I(e, L(t).host);
        }
        function R(e) {
            var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                n = e.nodeName;
            if ("BODY" === n || "HTML" === n) {
                var i = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || i)[t];
            }
            return e[t];
        }
        function N(e, t) {
            var n = "x" === t ? "Left" : "Top",
                i = "Left" === n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10);
        }
        function q(e, t, n, i) {
            return Math.max(
                t["offset" + e],
                t["scroll" + e],
                n["client" + e],
                n["offset" + e],
                n["scroll" + e],
                A(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0
            );
        }
        function W(e) {
            var t = e.body,
                n = e.documentElement,
                i = A(10) && getComputedStyle(n);
            return { height: q("Height", t, n, i), width: q("Width", t, n, i) };
        }
        var U = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            },
            B = (function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t;
                };
            })(),
            F = function (e, t, n) {
                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
            },
            K =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                    }
                    return e;
                };
        function z(e) {
            return K({}, e, { right: e.left + e.width, bottom: e.top + e.height });
        }
        function Q(e) {
            var t = {};
            try {
                if (A(10)) {
                    t = e.getBoundingClientRect();
                    var n = R(e, "top"),
                        i = R(e, "left");
                    (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
                } else t = e.getBoundingClientRect();
            } catch (e) {}
            var s = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
                o = "HTML" === e.nodeName ? W(e.ownerDocument) : {},
                r = o.width || e.clientWidth || s.width,
                a = o.height || e.clientHeight || s.height,
                l = e.offsetWidth - r,
                c = e.offsetHeight - a;
            if (l || c) {
                var u = T(e);
                (l -= N(u, "x")), (c -= N(u, "y")), (s.width -= l), (s.height -= c);
            }
            return z(s);
        }
        function Y(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = A(10),
                s = "HTML" === t.nodeName,
                o = Q(e),
                r = Q(t),
                a = M(e),
                l = T(t),
                c = parseFloat(l.borderTopWidth, 10),
                u = parseFloat(l.borderLeftWidth, 10);
            n && s && ((r.top = Math.max(r.top, 0)), (r.left = Math.max(r.left, 0)));
            var d = z({ top: o.top - r.top - c, left: o.left - r.left - u, width: o.width, height: o.height });
            if (((d.marginTop = 0), (d.marginLeft = 0), !i && s)) {
                var h = parseFloat(l.marginTop, 10),
                    p = parseFloat(l.marginLeft, 10);
                (d.top -= c - h), (d.bottom -= c - h), (d.left -= u - p), (d.right -= u - p), (d.marginTop = h), (d.marginLeft = p);
            }
            return (
                (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) &&
                    (d = (function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = R(t, "top"),
                            s = R(t, "left"),
                            o = n ? -1 : 1;
                        return (e.top += i * o), (e.bottom += i * o), (e.left += s * o), (e.right += s * o), e;
                    })(d, t)),
                d
            );
        }
        function V(e) {
            if (!e || !e.parentElement || A()) return document.documentElement;
            for (var t = e.parentElement; t && "none" === T(t, "transform"); ) t = t.parentElement;
            return t || document.documentElement;
        }
        function X(e, t, n, i) {
            var s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                o = { top: 0, left: 0 },
                r = s ? V(e) : I(e, j(t));
            if ("viewport" === i)
                o = (function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.ownerDocument.documentElement,
                        i = Y(e, n),
                        s = Math.max(n.clientWidth, window.innerWidth || 0),
                        o = Math.max(n.clientHeight, window.innerHeight || 0),
                        r = t ? 0 : R(n),
                        a = t ? 0 : R(n, "left");
                    return z({ top: r - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: s, height: o });
                })(r, s);
            else {
                var a = void 0;
                "scrollParent" === i ? "BODY" === (a = M(P(t))).nodeName && (a = e.ownerDocument.documentElement) : (a = "window" === i ? e.ownerDocument.documentElement : i);
                var l = Y(a, r, s);
                if (
                    "HTML" !== a.nodeName ||
                    (function e(t) {
                        var n = t.nodeName;
                        if ("BODY" === n || "HTML" === n) return !1;
                        if ("fixed" === T(t, "position")) return !0;
                        var i = P(t);
                        return !!i && e(i);
                    })(r)
                )
                    o = l;
                else {
                    var c = W(e.ownerDocument),
                        u = c.height,
                        d = c.width;
                    (o.top += l.top - l.marginTop), (o.bottom = u + l.top), (o.left += l.left - l.marginLeft), (o.right = d + l.left);
                }
            }
            var h = "number" == typeof (n = n || 0);
            return (o.left += h ? n : n.left || 0), (o.top += h ? n : n.top || 0), (o.right -= h ? n : n.right || 0), (o.bottom -= h ? n : n.bottom || 0), o;
        }
        function G(e) {
            return e.width * e.height;
        }
        function J(e, t, n, i, s) {
            var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var r = X(n, i, o, s),
                a = { top: { width: r.width, height: t.top - r.top }, right: { width: r.right - t.right, height: r.height }, bottom: { width: r.width, height: r.bottom - t.bottom }, left: { width: t.left - r.left, height: r.height } },
                l = Object.keys(a)
                    .map(function (e) {
                        return K({ key: e }, a[e], { area: G(a[e]) });
                    })
                    .sort(function (e, t) {
                        return t.area - e.area;
                    }),
                c = l.filter(function (e) {
                    var t = e.width,
                        i = e.height;
                    return t >= n.clientWidth && i >= n.clientHeight;
                }),
                u = c.length > 0 ? c[0].key : l[0].key,
                d = e.split("-")[1];
            return u + (d ? "-" + d : "");
        }
        function Z(e, t, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return Y(n, i ? V(t) : I(t, j(n)), i);
        }
        function ee(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
                n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
            return { width: e.offsetWidth + i, height: e.offsetHeight + n };
        }
        function te(e) {
            var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e];
            });
        }
        function ne(e, t, n) {
            n = n.split("-")[0];
            var i = ee(e),
                s = { width: i.width, height: i.height },
                o = -1 !== ["right", "left"].indexOf(n),
                r = o ? "top" : "left",
                a = o ? "left" : "top",
                l = o ? "height" : "width",
                c = o ? "width" : "height";
            return (s[r] = t[r] + t[l] / 2 - i[l] / 2), (s[a] = n === a ? t[a] - i[c] : t[te(a)]), s;
        }
        function ie(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function se(e, t, n) {
            return (
                (void 0 === n
                    ? e
                    : e.slice(
                          0,
                          (function (e, t, n) {
                              if (Array.prototype.findIndex)
                                  return e.findIndex(function (e) {
                                      return e[t] === n;
                                  });
                              var i = ie(e, function (e) {
                                  return e[t] === n;
                              });
                              return e.indexOf(i);
                          })(e, "name", n)
                      )
                ).forEach(function (e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = e.function || e.fn;
                    e.enabled && O(n) && ((t.offsets.popper = z(t.offsets.popper)), (t.offsets.reference = z(t.offsets.reference)), (t = n(t, e)));
                }),
                t
            );
        }
        function oe(e, t) {
            return e.some(function (e) {
                var n = e.name;
                return e.enabled && n === t;
            });
        }
        function re(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                var s = t[i],
                    o = s ? "" + s + n : e;
                if (void 0 !== document.body.style[o]) return o;
            }
            return null;
        }
        function ae(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window;
        }
        function le() {
            this.state.eventsEnabled ||
                (this.state = (function (e, t, n, i) {
                    (n.updateBound = i), ae(e).addEventListener("resize", n.updateBound, { passive: !0 });
                    var s = M(e);
                    return (
                        (function e(t, n, i, s) {
                            var o = "BODY" === t.nodeName,
                                r = o ? t.ownerDocument.defaultView : t;
                            r.addEventListener(n, i, { passive: !0 }), o || e(M(r.parentNode), n, i, s), s.push(r);
                        })(s, "scroll", n.updateBound, n.scrollParents),
                        (n.scrollElement = s),
                        (n.eventsEnabled = !0),
                        n
                    );
                })(this.reference, this.options, this.state, this.scheduleUpdate));
        }
        function ce(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function ue(e, t) {
            Object.keys(t).forEach(function (n) {
                var i = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && ce(t[n]) && (i = "px"), (e.style[n] = t[n] + i);
            });
        }
        var de = S && /Firefox/i.test(navigator.userAgent);
        function he(e, t, n) {
            var i = ie(e, function (e) {
                    return e.name === t;
                }),
                s =
                    !!i &&
                    e.some(function (e) {
                        return e.name === n && e.enabled && e.order < i.order;
                    });
            if (!s) {
                var o = "`" + t + "`",
                    r = "`" + n + "`";
                console.warn(r + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
            }
            return s;
        }
        var pe = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            fe = pe.slice(3);
        function _e(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = fe.indexOf(e),
                i = fe.slice(n + 1).concat(fe.slice(0, n));
            return t ? i.reverse() : i;
        }
        var me = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function () {},
                onUpdate: function () {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                i = t.split("-")[1];
                            if (i) {
                                var s = e.offsets,
                                    o = s.reference,
                                    r = s.popper,
                                    a = -1 !== ["bottom", "top"].indexOf(n),
                                    l = a ? "left" : "top",
                                    c = a ? "width" : "height",
                                    u = { start: F({}, l, o[l]), end: F({}, l, o[l] + o[c] - r[c]) };
                                e.offsets.popper = K({}, r, u[i]);
                            }
                            return e;
                        },
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function (e, t) {
                            var n,
                                i = t.offset,
                                s = e.placement,
                                o = e.offsets,
                                r = o.popper,
                                a = o.reference,
                                l = s.split("-")[0];
                            return (
                                (n = ce(+i)
                                    ? [+i, 0]
                                    : (function (e, t, n, i) {
                                          var s = [0, 0],
                                              o = -1 !== ["right", "left"].indexOf(i),
                                              r = e.split(/(\+|\-)/).map(function (e) {
                                                  return e.trim();
                                              }),
                                              a = r.indexOf(
                                                  ie(r, function (e) {
                                                      return -1 !== e.search(/,|\s/);
                                                  })
                                              );
                                          r[a] && -1 === r[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                                          var l = /\s*,\s*|\s+/,
                                              c = -1 !== a ? [r.slice(0, a).concat([r[a].split(l)[0]]), [r[a].split(l)[1]].concat(r.slice(a + 1))] : [r];
                                          return (
                                              (c = c.map(function (e, i) {
                                                  var s = (1 === i ? !o : o) ? "height" : "width",
                                                      r = !1;
                                                  return e
                                                      .reduce(function (e, t) {
                                                          return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? ((e[e.length - 1] = t), (r = !0), e) : r ? ((e[e.length - 1] += t), (r = !1), e) : e.concat(t);
                                                      }, [])
                                                      .map(function (e) {
                                                          return (function (e, t, n, i) {
                                                              var s = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                                                  o = +s[1],
                                                                  r = s[2];
                                                              if (!o) return e;
                                                              if (0 === r.indexOf("%")) {
                                                                  var a = void 0;
                                                                  switch (r) {
                                                                      case "%p":
                                                                          a = n;
                                                                          break;
                                                                      case "%":
                                                                      case "%r":
                                                                      default:
                                                                          a = i;
                                                                  }
                                                                  return (z(a)[t] / 100) * o;
                                                              }
                                                              return "vh" === r || "vw" === r
                                                                  ? (("vh" === r ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * o
                                                                  : o;
                                                          })(e, s, t, n);
                                                      });
                                              })).forEach(function (e, t) {
                                                  e.forEach(function (n, i) {
                                                      ce(n) && (s[t] += n * ("-" === e[i - 1] ? -1 : 1));
                                                  });
                                              }),
                                              s
                                          );
                                      })(i, r, a, l)),
                                "left" === l
                                    ? ((r.top += n[0]), (r.left -= n[1]))
                                    : "right" === l
                                    ? ((r.top += n[0]), (r.left += n[1]))
                                    : "top" === l
                                    ? ((r.left += n[0]), (r.top -= n[1]))
                                    : "bottom" === l && ((r.left += n[0]), (r.top += n[1])),
                                (e.popper = r),
                                e
                            );
                        },
                        offset: 0,
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function (e, t) {
                            var n = t.boundariesElement || H(e.instance.popper);
                            e.instance.reference === n && (n = H(n));
                            var i = re("transform"),
                                s = e.instance.popper.style,
                                o = s.top,
                                r = s.left,
                                a = s[i];
                            (s.top = ""), (s.left = ""), (s[i] = "");
                            var l = X(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                            (s.top = o), (s.left = r), (s[i] = a), (t.boundaries = l);
                            var c = t.priority,
                                u = e.offsets.popper,
                                d = {
                                    primary: function (e) {
                                        var n = u[e];
                                        return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), F({}, e, n);
                                    },
                                    secondary: function (e) {
                                        var n = "right" === e ? "left" : "top",
                                            i = u[n];
                                        return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), F({}, n, i);
                                    },
                                };
                            return (
                                c.forEach(function (e) {
                                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                    u = K({}, u, d[t](e));
                                }),
                                (e.offsets.popper = u),
                                e
                            );
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent",
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.offsets,
                                n = t.popper,
                                i = t.reference,
                                s = e.placement.split("-")[0],
                                o = Math.floor,
                                r = -1 !== ["top", "bottom"].indexOf(s),
                                a = r ? "right" : "bottom",
                                l = r ? "left" : "top",
                                c = r ? "width" : "height";
                            return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e;
                        },
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function (e, t) {
                            var n;
                            if (!he(e.instance.modifiers, "arrow", "keepTogether")) return e;
                            var i = t.element;
                            if ("string" == typeof i) {
                                if (!(i = e.instance.popper.querySelector(i))) return e;
                            } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                            var s = e.placement.split("-")[0],
                                o = e.offsets,
                                r = o.popper,
                                a = o.reference,
                                l = -1 !== ["left", "right"].indexOf(s),
                                c = l ? "height" : "width",
                                u = l ? "Top" : "Left",
                                d = u.toLowerCase(),
                                h = l ? "left" : "top",
                                p = l ? "bottom" : "right",
                                f = ee(i)[c];
                            a[p] - f < r[d] && (e.offsets.popper[d] -= r[d] - (a[p] - f)), a[d] + f > r[p] && (e.offsets.popper[d] += a[d] + f - r[p]), (e.offsets.popper = z(e.offsets.popper));
                            var _ = a[d] + a[c] / 2 - f / 2,
                                m = T(e.instance.popper),
                                g = parseFloat(m["margin" + u], 10),
                                v = parseFloat(m["border" + u + "Width"], 10),
                                b = _ - e.offsets.popper[d] - g - v;
                            return (b = Math.max(Math.min(r[c] - f, b), 0)), (e.arrowElement = i), (e.offsets.arrow = (F((n = {}), d, Math.round(b)), F(n, h, ""), n)), e;
                        },
                        element: "[x-arrow]",
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function (e, t) {
                            if (oe(e.instance.modifiers, "inner")) return e;
                            if (e.flipped && e.placement === e.originalPlacement) return e;
                            var n = X(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                i = e.placement.split("-")[0],
                                s = te(i),
                                o = e.placement.split("-")[1] || "",
                                r = [];
                            switch (t.behavior) {
                                case "flip":
                                    r = [i, s];
                                    break;
                                case "clockwise":
                                    r = _e(i);
                                    break;
                                case "counterclockwise":
                                    r = _e(i, !0);
                                    break;
                                default:
                                    r = t.behavior;
                            }
                            return (
                                r.forEach(function (a, l) {
                                    if (i !== a || r.length === l + 1) return e;
                                    (i = e.placement.split("-")[0]), (s = te(i));
                                    var c = e.offsets.popper,
                                        u = e.offsets.reference,
                                        d = Math.floor,
                                        h = ("left" === i && d(c.right) > d(u.left)) || ("right" === i && d(c.left) < d(u.right)) || ("top" === i && d(c.bottom) > d(u.top)) || ("bottom" === i && d(c.top) < d(u.bottom)),
                                        p = d(c.left) < d(n.left),
                                        f = d(c.right) > d(n.right),
                                        _ = d(c.top) < d(n.top),
                                        m = d(c.bottom) > d(n.bottom),
                                        g = ("left" === i && p) || ("right" === i && f) || ("top" === i && _) || ("bottom" === i && m),
                                        v = -1 !== ["top", "bottom"].indexOf(i),
                                        b = !!t.flipVariations && ((v && "start" === o && p) || (v && "end" === o && f) || (!v && "start" === o && _) || (!v && "end" === o && m)),
                                        y = !!t.flipVariationsByContent && ((v && "start" === o && f) || (v && "end" === o && p) || (!v && "start" === o && m) || (!v && "end" === o && _)),
                                        w = b || y;
                                    (h || g || w) &&
                                        ((e.flipped = !0),
                                        (h || g) && (i = r[l + 1]),
                                        w && (o = "end" === o ? "start" : "start" === o ? "end" : o),
                                        (e.placement = i + (o ? "-" + o : "")),
                                        (e.offsets.popper = K({}, e.offsets.popper, ne(e.instance.popper, e.offsets.reference, e.placement))),
                                        (e = se(e.instance.modifiers, e, "flip")));
                                }),
                                e
                            );
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                        flipVariations: !1,
                        flipVariationsByContent: !1,
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function (e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                i = e.offsets,
                                s = i.popper,
                                o = i.reference,
                                r = -1 !== ["left", "right"].indexOf(n),
                                a = -1 === ["top", "left"].indexOf(n);
                            return (s[r ? "left" : "top"] = o[n] - (a ? s[r ? "width" : "height"] : 0)), (e.placement = te(t)), (e.offsets.popper = z(s)), e;
                        },
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function (e) {
                            if (!he(e.instance.modifiers, "hide", "preventOverflow")) return e;
                            var t = e.offsets.reference,
                                n = ie(e.instance.modifiers, function (e) {
                                    return "preventOverflow" === e.name;
                                }).boundaries;
                            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                if (!0 === e.hide) return e;
                                (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                            } else {
                                if (!1 === e.hide) return e;
                                (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                            }
                            return e;
                        },
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function (e, t) {
                            var n = t.x,
                                i = t.y,
                                s = e.offsets.popper,
                                o = ie(e.instance.modifiers, function (e) {
                                    return "applyStyle" === e.name;
                                }).gpuAcceleration;
                            void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var r,
                                a,
                                l = void 0 !== o ? o : t.gpuAcceleration,
                                c = H(e.instance.popper),
                                u = Q(c),
                                d = { position: s.position },
                                h = (function (e, t) {
                                    var n = e.offsets,
                                        i = n.popper,
                                        s = n.reference,
                                        o = Math.round,
                                        r = Math.floor,
                                        a = function (e) {
                                            return e;
                                        },
                                        l = o(s.width),
                                        c = o(i.width),
                                        u = -1 !== ["left", "right"].indexOf(e.placement),
                                        d = -1 !== e.placement.indexOf("-"),
                                        h = t ? (u || d || l % 2 == c % 2 ? o : r) : a,
                                        p = t ? o : a;
                                    return { left: h(l % 2 == 1 && c % 2 == 1 && !d && t ? i.left - 1 : i.left), top: p(i.top), bottom: p(i.bottom), right: h(i.right) };
                                })(e, window.devicePixelRatio < 2 || !de),
                                p = "bottom" === n ? "top" : "bottom",
                                f = "right" === i ? "left" : "right",
                                _ = re("transform");
                            if (
                                ((a = "bottom" === p ? ("HTML" === c.nodeName ? -c.clientHeight + h.bottom : -u.height + h.bottom) : h.top),
                                (r = "right" === f ? ("HTML" === c.nodeName ? -c.clientWidth + h.right : -u.width + h.right) : h.left),
                                l && _)
                            )
                                (d[_] = "translate3d(" + r + "px, " + a + "px, 0)"), (d[p] = 0), (d[f] = 0), (d.willChange = "transform");
                            else {
                                var m = "bottom" === p ? -1 : 1,
                                    g = "right" === f ? -1 : 1;
                                (d[p] = a * m), (d[f] = r * g), (d.willChange = p + ", " + f);
                            }
                            var v = { "x-placement": e.placement };
                            return (e.attributes = K({}, v, e.attributes)), (e.styles = K({}, d, e.styles)), (e.arrowStyles = K({}, e.offsets.arrow, e.arrowStyles)), e;
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right",
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function (e) {
                            var t, n;
                            return (
                                ue(e.instance.popper, e.styles),
                                (t = e.instance.popper),
                                (n = e.attributes),
                                Object.keys(n).forEach(function (e) {
                                    !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
                                }),
                                e.arrowElement && Object.keys(e.arrowStyles).length && ue(e.arrowElement, e.arrowStyles),
                                e
                            );
                        },
                        onLoad: function (e, t, n, i, s) {
                            var o = Z(s, t, e, n.positionFixed),
                                r = J(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                            return t.setAttribute("x-placement", r), ue(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
                        },
                        gpuAcceleration: void 0,
                    },
                },
            },
            ge = (function () {
                function e(t, n) {
                    var i = this,
                        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    U(this, e),
                        (this.scheduleUpdate = function () {
                            return requestAnimationFrame(i.update);
                        }),
                        (this.update = E(this.update.bind(this))),
                        (this.options = K({}, e.Defaults, s)),
                        (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                        (this.reference = t && t.jquery ? t[0] : t),
                        (this.popper = n && n.jquery ? n[0] : n),
                        (this.options.modifiers = {}),
                        Object.keys(K({}, e.Defaults.modifiers, s.modifiers)).forEach(function (t) {
                            i.options.modifiers[t] = K({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {});
                        }),
                        (this.modifiers = Object.keys(this.options.modifiers)
                            .map(function (e) {
                                return K({ name: e }, i.options.modifiers[e]);
                            })
                            .sort(function (e, t) {
                                return e.order - t.order;
                            })),
                        this.modifiers.forEach(function (e) {
                            e.enabled && O(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state);
                        }),
                        this.update();
                    var o = this.options.eventsEnabled;
                    o && this.enableEventListeners(), (this.state.eventsEnabled = o);
                }
                return (
                    B(e, [
                        {
                            key: "update",
                            value: function () {
                                return function () {
                                    if (!this.state.isDestroyed) {
                                        var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                                        (e.offsets.reference = Z(this.state, this.popper, this.reference, this.options.positionFixed)),
                                            (e.placement = J(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                                            (e.originalPlacement = e.placement),
                                            (e.positionFixed = this.options.positionFixed),
                                            (e.offsets.popper = ne(this.popper, e.offsets.reference, e.placement)),
                                            (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                                            (e = se(this.modifiers, e)),
                                            this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
                                    }
                                }.call(this);
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                return function () {
                                    return (
                                        (this.state.isDestroyed = !0),
                                        oe(this.modifiers, "applyStyle") &&
                                            (this.popper.removeAttribute("x-placement"),
                                            (this.popper.style.position = ""),
                                            (this.popper.style.top = ""),
                                            (this.popper.style.left = ""),
                                            (this.popper.style.right = ""),
                                            (this.popper.style.bottom = ""),
                                            (this.popper.style.willChange = ""),
                                            (this.popper.style[re("transform")] = "")),
                                        this.disableEventListeners(),
                                        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                                        this
                                    );
                                }.call(this);
                            },
                        },
                        {
                            key: "enableEventListeners",
                            value: function () {
                                return le.call(this);
                            },
                        },
                        {
                            key: "disableEventListeners",
                            value: function () {
                                return function () {
                                    var e, t;
                                    this.state.eventsEnabled &&
                                        (cancelAnimationFrame(this.scheduleUpdate),
                                        (this.state =
                                            ((e = this.reference),
                                            (t = this.state),
                                            ae(e).removeEventListener("resize", t.updateBound),
                                            t.scrollParents.forEach(function (e) {
                                                e.removeEventListener("scroll", t.updateBound);
                                            }),
                                            (t.updateBound = null),
                                            (t.scrollParents = []),
                                            (t.scrollElement = null),
                                            (t.eventsEnabled = !1),
                                            t)));
                                }.call(this);
                            },
                        },
                    ]),
                    e
                );
            })();
        (ge.Utils = ("undefined" != typeof window ? window : global).PopperUtils), (ge.placements = pe), (ge.Defaults = me);
        var ve = "dropdown",
            be = t.fn[ve],
            ye = new RegExp("38|40|27"),
            we = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
            Ce = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
            ke = (function () {
                function e(e, t) {
                    (this._element = e), (this._popper = null), (this._config = this._getConfig(t)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
                }
                var n = e.prototype;
                return (
                    (n.toggle = function () {
                        if (!this._element.disabled && !t(this._element).hasClass("disabled")) {
                            var n = t(this._menu).hasClass("show");
                            e._clearMenus(), n || this.show(!0);
                        }
                    }),
                    (n.show = function (n) {
                        if ((void 0 === n && (n = !1), !(this._element.disabled || t(this._element).hasClass("disabled") || t(this._menu).hasClass("show")))) {
                            var i = { relatedTarget: this._element },
                                s = t.Event("show.bs.dropdown", i),
                                o = e._getParentFromElement(this._element);
                            if ((t(o).trigger(s), !s.isDefaultPrevented())) {
                                if (!this._inNavbar && n) {
                                    if (void 0 === ge) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                    var r = this._element;
                                    "parent" === this._config.reference ? (r = o) : a.isElement(this._config.reference) && ((r = this._config.reference), void 0 !== this._config.reference.jquery && (r = this._config.reference[0])),
                                        "scrollParent" !== this._config.boundary && t(o).addClass("position-static"),
                                        (this._popper = new ge(r, this._menu, this._getPopperConfig()));
                                }
                                "ontouchstart" in document.documentElement && 0 === t(o).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop),
                                    this._element.focus(),
                                    this._element.setAttribute("aria-expanded", !0),
                                    t(this._menu).toggleClass("show"),
                                    t(o).toggleClass("show").trigger(t.Event("shown.bs.dropdown", i));
                            }
                        }
                    }),
                    (n.hide = function () {
                        if (!this._element.disabled && !t(this._element).hasClass("disabled") && t(this._menu).hasClass("show")) {
                            var n = { relatedTarget: this._element },
                                i = t.Event("hide.bs.dropdown", n),
                                s = e._getParentFromElement(this._element);
                            t(s).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass("show"), t(s).toggleClass("show").trigger(t.Event("hidden.bs.dropdown", n)));
                        }
                    }),
                    (n.dispose = function () {
                        t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), (this._element = null), (this._menu = null), null !== this._popper && (this._popper.destroy(), (this._popper = null));
                    }),
                    (n.update = function () {
                        (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                    }),
                    (n._addEventListeners = function () {
                        var e = this;
                        t(this._element).on("click.bs.dropdown", function (t) {
                            t.preventDefault(), t.stopPropagation(), e.toggle();
                        });
                    }),
                    (n._getConfig = function (e) {
                        return (e = r(r(r({}, this.constructor.Default), t(this._element).data()), e)), a.typeCheckConfig(ve, e, this.constructor.DefaultType), e;
                    }),
                    (n._getMenuElement = function () {
                        if (!this._menu) {
                            var t = e._getParentFromElement(this._element);
                            t && (this._menu = t.querySelector(".dropdown-menu"));
                        }
                        return this._menu;
                    }),
                    (n._getPlacement = function () {
                        var e = t(this._element.parentNode),
                            n = "bottom-start";
                        return (
                            e.hasClass("dropup")
                                ? (n = t(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start")
                                : e.hasClass("dropright")
                                ? (n = "right-start")
                                : e.hasClass("dropleft")
                                ? (n = "left-start")
                                : t(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"),
                            n
                        );
                    }),
                    (n._detectNavbar = function () {
                        return t(this._element).closest(".navbar").length > 0;
                    }),
                    (n._getOffset = function () {
                        var e = this,
                            t = {};
                        return (
                            "function" == typeof this._config.offset
                                ? (t.fn = function (t) {
                                      return (t.offsets = r(r({}, t.offsets), e._config.offset(t.offsets, e._element) || {})), t;
                                  })
                                : (t.offset = this._config.offset),
                            t
                        );
                    }),
                    (n._getPopperConfig = function () {
                        var e = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                        return "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), r(r({}, e), this._config.popperConfig);
                    }),
                    (e._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = t(this).data("bs.dropdown");
                            if ((i || ((i = new e(this, "object" == typeof n ? n : null)), t(this).data("bs.dropdown", i)), "string" == typeof n)) {
                                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                i[n]();
                            }
                        });
                    }),
                    (e._clearMenus = function (n) {
                        if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
                            for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), s = 0, o = i.length; s < o; s++) {
                                var r = e._getParentFromElement(i[s]),
                                    a = t(i[s]).data("bs.dropdown"),
                                    l = { relatedTarget: i[s] };
                                if ((n && "click" === n.type && (l.clickEvent = n), a)) {
                                    var c = a._menu;
                                    if (t(r).hasClass("show") && !(n && (("click" === n.type && /input|textarea/i.test(n.target.tagName)) || ("keyup" === n.type && 9 === n.which)) && t.contains(r, n.target))) {
                                        var u = t.Event("hide.bs.dropdown", l);
                                        t(r).trigger(u),
                                            u.isDefaultPrevented() ||
                                                ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop),
                                                i[s].setAttribute("aria-expanded", "false"),
                                                a._popper && a._popper.destroy(),
                                                t(c).removeClass("show"),
                                                t(r).removeClass("show").trigger(t.Event("hidden.bs.dropdown", l)));
                                    }
                                }
                            }
                    }),
                    (e._getParentFromElement = function (e) {
                        var t,
                            n = a.getSelectorFromElement(e);
                        return n && (t = document.querySelector(n)), t || e.parentNode;
                    }),
                    (e._dataApiKeydownHandler = function (n) {
                        if (
                            !(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || (27 !== n.which && ((40 !== n.which && 38 !== n.which) || t(n.target).closest(".dropdown-menu").length)) : !ye.test(n.which)) &&
                            !this.disabled &&
                            !t(this).hasClass("disabled")
                        ) {
                            var i = e._getParentFromElement(this),
                                s = t(i).hasClass("show");
                            if (s || 27 !== n.which) {
                                if ((n.preventDefault(), n.stopPropagation(), !s || (s && (27 === n.which || 32 === n.which))))
                                    return 27 === n.which && t(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void t(this).trigger("click");
                                var o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (e) {
                                    return t(e).is(":visible");
                                });
                                if (0 !== o.length) {
                                    var r = o.indexOf(n.target);
                                    38 === n.which && r > 0 && r--, 40 === n.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus();
                                }
                            }
                        }
                    }),
                    i(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.5.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return we;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Ce;
                            },
                        },
                    ]),
                    e
                );
            })();
        t(document)
            .on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', ke._dataApiKeydownHandler)
            .on("keydown.bs.dropdown.data-api", ".dropdown-menu", ke._dataApiKeydownHandler)
            .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", ke._clearMenus)
            .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (e) {
                e.preventDefault(), e.stopPropagation(), ke._jQueryInterface.call(t(this), "toggle");
            })
            .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
                e.stopPropagation();
            }),
            (t.fn[ve] = ke._jQueryInterface),
            (t.fn[ve].Constructor = ke),
            (t.fn[ve].noConflict = function () {
                return (t.fn[ve] = be), ke._jQueryInterface;
            });
        var Se = t.fn.modal,
            xe = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            Ee = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
            Oe = (function () {
                function e(e, t) {
                    (this._config = this._getConfig(t)),
                        (this._element = e),
                        (this._dialog = e.querySelector(".modal-dialog")),
                        (this._backdrop = null),
                        (this._isShown = !1),
                        (this._isBodyOverflowing = !1),
                        (this._ignoreBackdropClick = !1),
                        (this._isTransitioning = !1),
                        (this._scrollbarWidth = 0);
                }
                var n = e.prototype;
                return (
                    (n.toggle = function (e) {
                        return this._isShown ? this.hide() : this.show(e);
                    }),
                    (n.show = function (e) {
                        var n = this;
                        if (!this._isShown && !this._isTransitioning) {
                            t(this._element).hasClass("fade") && (this._isTransitioning = !0);
                            var i = t.Event("show.bs.modal", { relatedTarget: e });
                            t(this._element).trigger(i),
                                this._isShown ||
                                    i.isDefaultPrevented() ||
                                    ((this._isShown = !0),
                                    this._checkScrollbar(),
                                    this._setScrollbar(),
                                    this._adjustDialog(),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    t(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (e) {
                                        return n.hide(e);
                                    }),
                                    t(this._dialog).on("mousedown.dismiss.bs.modal", function () {
                                        t(n._element).one("mouseup.dismiss.bs.modal", function (e) {
                                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
                                        });
                                    }),
                                    this._showBackdrop(function () {
                                        return n._showElement(e);
                                    }));
                        }
                    }),
                    (n.hide = function (e) {
                        var n = this;
                        if ((e && e.preventDefault(), this._isShown && !this._isTransitioning)) {
                            var i = t.Event("hide.bs.modal");
                            if ((t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                                this._isShown = !1;
                                var s = t(this._element).hasClass("fade");
                                if (
                                    (s && (this._isTransitioning = !0),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    t(document).off("focusin.bs.modal"),
                                    t(this._element).removeClass("show"),
                                    t(this._element).off("click.dismiss.bs.modal"),
                                    t(this._dialog).off("mousedown.dismiss.bs.modal"),
                                    s)
                                ) {
                                    var o = a.getTransitionDurationFromElement(this._element);
                                    t(this._element)
                                        .one(a.TRANSITION_END, function (e) {
                                            return n._hideModal(e);
                                        })
                                        .emulateTransitionEnd(o);
                                } else this._hideModal();
                            }
                        }
                    }),
                    (n.dispose = function () {
                        [window, this._element, this._dialog].forEach(function (e) {
                            return t(e).off(".bs.modal");
                        }),
                            t(document).off("focusin.bs.modal"),
                            t.removeData(this._element, "bs.modal"),
                            (this._config = null),
                            (this._element = null),
                            (this._dialog = null),
                            (this._backdrop = null),
                            (this._isShown = null),
                            (this._isBodyOverflowing = null),
                            (this._ignoreBackdropClick = null),
                            (this._isTransitioning = null),
                            (this._scrollbarWidth = null);
                    }),
                    (n.handleUpdate = function () {
                        this._adjustDialog();
                    }),
                    (n._getConfig = function (e) {
                        return (e = r(r({}, xe), e)), a.typeCheckConfig("modal", e, Ee), e;
                    }),
                    (n._triggerBackdropTransition = function () {
                        var e = this;
                        if ("static" === this._config.backdrop) {
                            var n = t.Event("hidePrevented.bs.modal");
                            if ((t(this._element).trigger(n), n.defaultPrevented)) return;
                            this._element.classList.add("modal-static");
                            var i = a.getTransitionDurationFromElement(this._element);
                            t(this._element)
                                .one(a.TRANSITION_END, function () {
                                    e._element.classList.remove("modal-static");
                                })
                                .emulateTransitionEnd(i),
                                this._element.focus();
                        } else this.hide();
                    }),
                    (n._showElement = function (e) {
                        var n = this,
                            i = t(this._element).hasClass("fade"),
                            s = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                        (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                            (this._element.style.display = "block"),
                            this._element.removeAttribute("aria-hidden"),
                            this._element.setAttribute("aria-modal", !0),
                            t(this._dialog).hasClass("modal-dialog-scrollable") && s ? (s.scrollTop = 0) : (this._element.scrollTop = 0),
                            i && a.reflow(this._element),
                            t(this._element).addClass("show"),
                            this._config.focus && this._enforceFocus();
                        var o = t.Event("shown.bs.modal", { relatedTarget: e }),
                            r = function () {
                                n._config.focus && n._element.focus(), (n._isTransitioning = !1), t(n._element).trigger(o);
                            };
                        if (i) {
                            var l = a.getTransitionDurationFromElement(this._dialog);
                            t(this._dialog).one(a.TRANSITION_END, r).emulateTransitionEnd(l);
                        } else r();
                    }),
                    (n._enforceFocus = function () {
                        var e = this;
                        t(document)
                            .off("focusin.bs.modal")
                            .on("focusin.bs.modal", function (n) {
                                document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus();
                            });
                    }),
                    (n._setEscapeEvent = function () {
                        var e = this;
                        this._isShown
                            ? t(this._element).on("keydown.dismiss.bs.modal", function (t) {
                                  e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition();
                              })
                            : this._isShown || t(this._element).off("keydown.dismiss.bs.modal");
                    }),
                    (n._setResizeEvent = function () {
                        var e = this;
                        this._isShown
                            ? t(window).on("resize.bs.modal", function (t) {
                                  return e.handleUpdate(t);
                              })
                            : t(window).off("resize.bs.modal");
                    }),
                    (n._hideModal = function () {
                        var e = this;
                        (this._element.style.display = "none"),
                            this._element.setAttribute("aria-hidden", !0),
                            this._element.removeAttribute("aria-modal"),
                            (this._isTransitioning = !1),
                            this._showBackdrop(function () {
                                t(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger("hidden.bs.modal");
                            });
                    }),
                    (n._removeBackdrop = function () {
                        this._backdrop && (t(this._backdrop).remove(), (this._backdrop = null));
                    }),
                    (n._showBackdrop = function (e) {
                        var n = this,
                            i = t(this._element).hasClass("fade") ? "fade" : "";
                        if (this._isShown && this._config.backdrop) {
                            if (
                                ((this._backdrop = document.createElement("div")),
                                (this._backdrop.className = "modal-backdrop"),
                                i && this._backdrop.classList.add(i),
                                t(this._backdrop).appendTo(document.body),
                                t(this._element).on("click.dismiss.bs.modal", function (e) {
                                    n._ignoreBackdropClick ? (n._ignoreBackdropClick = !1) : e.target === e.currentTarget && n._triggerBackdropTransition();
                                }),
                                i && a.reflow(this._backdrop),
                                t(this._backdrop).addClass("show"),
                                !e)
                            )
                                return;
                            if (!i) return void e();
                            var s = a.getTransitionDurationFromElement(this._backdrop);
                            t(this._backdrop).one(a.TRANSITION_END, e).emulateTransitionEnd(s);
                        } else if (!this._isShown && this._backdrop) {
                            t(this._backdrop).removeClass("show");
                            var o = function () {
                                n._removeBackdrop(), e && e();
                            };
                            if (t(this._element).hasClass("fade")) {
                                var r = a.getTransitionDurationFromElement(this._backdrop);
                                t(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(r);
                            } else o();
                        } else e && e();
                    }),
                    (n._adjustDialog = function () {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                    }),
                    (n._resetAdjustments = function () {
                        (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                    }),
                    (n._checkScrollbar = function () {
                        var e = document.body.getBoundingClientRect();
                        (this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                    }),
                    (n._setScrollbar = function () {
                        var e = this;
                        if (this._isBodyOverflowing) {
                            var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                                i = [].slice.call(document.querySelectorAll(".sticky-top"));
                            t(n).each(function (n, i) {
                                var s = i.style.paddingRight,
                                    o = t(i).css("padding-right");
                                t(i)
                                    .data("padding-right", s)
                                    .css("padding-right", parseFloat(o) + e._scrollbarWidth + "px");
                            }),
                                t(i).each(function (n, i) {
                                    var s = i.style.marginRight,
                                        o = t(i).css("margin-right");
                                    t(i)
                                        .data("margin-right", s)
                                        .css("margin-right", parseFloat(o) - e._scrollbarWidth + "px");
                                });
                            var s = document.body.style.paddingRight,
                                o = t(document.body).css("padding-right");
                            t(document.body)
                                .data("padding-right", s)
                                .css("padding-right", parseFloat(o) + this._scrollbarWidth + "px");
                        }
                        t(document.body).addClass("modal-open");
                    }),
                    (n._resetScrollbar = function () {
                        var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                        t(e).each(function (e, n) {
                            var i = t(n).data("padding-right");
                            t(n).removeData("padding-right"), (n.style.paddingRight = i || "");
                        });
                        var n = [].slice.call(document.querySelectorAll(".sticky-top"));
                        t(n).each(function (e, n) {
                            var i = t(n).data("margin-right");
                            void 0 !== i && t(n).css("margin-right", i).removeData("margin-right");
                        });
                        var i = t(document.body).data("padding-right");
                        t(document.body).removeData("padding-right"), (document.body.style.paddingRight = i || "");
                    }),
                    (n._getScrollbarWidth = function () {
                        var e = document.createElement("div");
                        (e.className = "modal-scrollbar-measure"), document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t;
                    }),
                    (e._jQueryInterface = function (n, i) {
                        return this.each(function () {
                            var s = t(this).data("bs.modal"),
                                o = r(r(r({}, xe), t(this).data()), "object" == typeof n && n ? n : {});
                            if ((s || ((s = new e(this, o)), t(this).data("bs.modal", s)), "string" == typeof n)) {
                                if (void 0 === s[n]) throw new TypeError('No method named "' + n + '"');
                                s[n](i);
                            } else o.show && s.show(i);
                        });
                    }),
                    i(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.5.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return xe;
                            },
                        },
                    ]),
                    e
                );
            })();
        t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
            var n,
                i = this,
                s = a.getSelectorFromElement(this);
            s && (n = document.querySelector(s));
            var o = t(n).data("bs.modal") ? "toggle" : r(r({}, t(n).data()), t(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
            var l = t(n).one("show.bs.modal", function (e) {
                e.isDefaultPrevented() ||
                    l.one("hidden.bs.modal", function () {
                        t(i).is(":visible") && i.focus();
                    });
            });
            Oe._jQueryInterface.call(t(n), o, this);
        }),
            (t.fn.modal = Oe._jQueryInterface),
            (t.fn.modal.Constructor = Oe),
            (t.fn.modal.noConflict = function () {
                return (t.fn.modal = Se), Oe._jQueryInterface;
            });
        var Te = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            Pe = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&\/:?]*(?:[#\/?]|$))/gi,
            Me = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+\/a-z]+=*$/i;
        function je(e, t, n) {
            if (0 === e.length) return e;
            if (n && "function" == typeof n) return n(e);
            for (
                var i = new window.DOMParser().parseFromString(e, "text/html"),
                    s = Object.keys(t),
                    o = [].slice.call(i.body.querySelectorAll("*")),
                    r = function (e, n) {
                        var i = o[e],
                            r = i.nodeName.toLowerCase();
                        if (-1 === s.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                        var a = [].slice.call(i.attributes),
                            l = [].concat(t["*"] || [], t[r] || []);
                        a.forEach(function (e) {
                            (function (e, t) {
                                var n = e.nodeName.toLowerCase();
                                if (-1 !== t.indexOf(n)) return -1 === Te.indexOf(n) || Boolean(e.nodeValue.match(Pe) || e.nodeValue.match(Me));
                                for (
                                    var i = t.filter(function (e) {
                                            return e instanceof RegExp;
                                        }),
                                        s = 0,
                                        o = i.length;
                                    s < o;
                                    s++
                                )
                                    if (n.match(i[s])) return !0;
                                return !1;
                            })(e, l) || i.removeAttribute(e.nodeName);
                        });
                    },
                    a = 0,
                    l = o.length;
                a < l;
                a++
            )
                r(a);
            return i.body.innerHTML;
        }
        var De = "tooltip",
            $e = t.fn[De],
            Ae = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            He = ["sanitize", "whiteList", "sanitizeFn"],
            Le = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)",
            },
            Ie = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
            Re = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: {
                    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "srcset", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: [],
                },
                popperConfig: null,
            },
            Ne = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip",
            },
            qe = (function () {
                function e(e, t) {
                    if (void 0 === ge) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = e), (this.config = this._getConfig(t)), (this.tip = null), this._setListeners();
                }
                var n = e.prototype;
                return (
                    (n.enable = function () {
                        this._isEnabled = !0;
                    }),
                    (n.disable = function () {
                        this._isEnabled = !1;
                    }),
                    (n.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled;
                    }),
                    (n.toggle = function (e) {
                        if (this._isEnabled)
                            if (e) {
                                var n = this.constructor.DATA_KEY,
                                    i = t(e.currentTarget).data(n);
                                i || ((i = new this.constructor(e.currentTarget, this._getDelegateConfig())), t(e.currentTarget).data(n, i)),
                                    (i._activeTrigger.click = !i._activeTrigger.click),
                                    i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                            } else {
                                if (t(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                                this._enter(null, this);
                            }
                    }),
                    (n.dispose = function () {
                        clearTimeout(this._timeout),
                            t.removeData(this.element, this.constructor.DATA_KEY),
                            t(this.element).off(this.constructor.EVENT_KEY),
                            t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                            this.tip && t(this.tip).remove(),
                            (this._isEnabled = null),
                            (this._timeout = null),
                            (this._hoverState = null),
                            (this._activeTrigger = null),
                            this._popper && this._popper.destroy(),
                            (this._popper = null),
                            (this.element = null),
                            (this.config = null),
                            (this.tip = null);
                    }),
                    (n.show = function () {
                        var e = this;
                        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var n = t.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            t(this.element).trigger(n);
                            var i = a.findShadowRoot(this.element),
                                s = t.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                            if (n.isDefaultPrevented() || !s) return;
                            var o = this.getTipElement(),
                                r = a.getUID(this.constructor.NAME);
                            o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && t(o).addClass("fade");
                            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                c = this._getAttachment(l);
                            this.addAttachmentClass(c);
                            var u = this._getContainer();
                            t(o).data(this.constructor.DATA_KEY, this),
                                t.contains(this.element.ownerDocument.documentElement, this.tip) || t(o).appendTo(u),
                                t(this.element).trigger(this.constructor.Event.INSERTED),
                                (this._popper = new ge(this.element, o, this._getPopperConfig(c))),
                                t(o).addClass("show"),
                                "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                            var d = function () {
                                e.config.animation && e._fixTransition();
                                var n = e._hoverState;
                                (e._hoverState = null), t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e);
                            };
                            if (t(this.tip).hasClass("fade")) {
                                var h = a.getTransitionDurationFromElement(this.tip);
                                t(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(h);
                            } else d();
                        }
                    }),
                    (n.hide = function (e) {
                        var n = this,
                            i = this.getTipElement(),
                            s = t.Event(this.constructor.Event.HIDE),
                            o = function () {
                                "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i),
                                    n._cleanTipClass(),
                                    n.element.removeAttribute("aria-describedby"),
                                    t(n.element).trigger(n.constructor.Event.HIDDEN),
                                    null !== n._popper && n._popper.destroy(),
                                    e && e();
                            };
                        if ((t(this.element).trigger(s), !s.isDefaultPrevented())) {
                            if (
                                (t(i).removeClass("show"),
                                "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop),
                                (this._activeTrigger.click = !1),
                                (this._activeTrigger.focus = !1),
                                (this._activeTrigger.hover = !1),
                                t(this.tip).hasClass("fade"))
                            ) {
                                var r = a.getTransitionDurationFromElement(i);
                                t(i).one(a.TRANSITION_END, o).emulateTransitionEnd(r);
                            } else o();
                            this._hoverState = "";
                        }
                    }),
                    (n.update = function () {
                        null !== this._popper && this._popper.scheduleUpdate();
                    }),
                    (n.isWithContent = function () {
                        return Boolean(this.getTitle());
                    }),
                    (n.addAttachmentClass = function (e) {
                        t(this.getTipElement()).addClass("bs-tooltip-" + e);
                    }),
                    (n.getTipElement = function () {
                        return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
                    }),
                    (n.setContent = function () {
                        var e = this.getTipElement();
                        this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass("fade show");
                    }),
                    (n.setElementContent = function (e, n) {
                        "object" != typeof n || (!n.nodeType && !n.jquery)
                            ? this.config.html
                                ? (this.config.sanitize && (n = je(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n))
                                : e.text(n)
                            : this.config.html
                            ? t(n).parent().is(e) || e.empty().append(n)
                            : e.text(t(n).text());
                    }),
                    (n.getTitle = function () {
                        var e = this.element.getAttribute("data-original-title");
                        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
                    }),
                    (n._getPopperConfig = function (e) {
                        var t = this;
                        return r(
                            r(
                                {},
                                {
                                    placement: e,
                                    modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } },
                                    onCreate: function (e) {
                                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                                    },
                                    onUpdate: function (e) {
                                        return t._handlePopperPlacementChange(e);
                                    },
                                }
                            ),
                            this.config.popperConfig
                        );
                    }),
                    (n._getOffset = function () {
                        var e = this,
                            t = {};
                        return (
                            "function" == typeof this.config.offset
                                ? (t.fn = function (t) {
                                      return (t.offsets = r(r({}, t.offsets), e.config.offset(t.offsets, e.element) || {})), t;
                                  })
                                : (t.offset = this.config.offset),
                            t
                        );
                    }),
                    (n._getContainer = function () {
                        return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container);
                    }),
                    (n._getAttachment = function (e) {
                        return Ie[e.toUpperCase()];
                    }),
                    (n._setListeners = function () {
                        var e = this;
                        this.config.trigger.split(" ").forEach(function (n) {
                            if ("click" === n)
                                t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                                    return e.toggle(t);
                                });
                            else if ("manual" !== n) {
                                var i = "hover" === n ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    s = "hover" === n ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                t(e.element)
                                    .on(i, e.config.selector, function (t) {
                                        return e._enter(t);
                                    })
                                    .on(s, e.config.selector, function (t) {
                                        return e._leave(t);
                                    });
                            }
                        }),
                            (this._hideModalHandler = function () {
                                e.element && e.hide();
                            }),
                            t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                            this.config.selector ? (this.config = r(r({}, this.config), {}, { trigger: "manual", selector: "" })) : this._fixTitle();
                    }),
                    (n._fixTitle = function () {
                        var e = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                    }),
                    (n._enter = function (e, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || t(e.currentTarget).data(i)) || ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())), t(e.currentTarget).data(i, n)),
                            e && (n._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0),
                            t(n.getTipElement()).hasClass("show") || "show" === n._hoverState
                                ? (n._hoverState = "show")
                                : (clearTimeout(n._timeout),
                                  (n._hoverState = "show"),
                                  n.config.delay && n.config.delay.show
                                      ? (n._timeout = setTimeout(function () {
                                            "show" === n._hoverState && n.show();
                                        }, n.config.delay.show))
                                      : n.show());
                    }),
                    (n._leave = function (e, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || t(e.currentTarget).data(i)) || ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())), t(e.currentTarget).data(i, n)),
                            e && (n._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1),
                            n._isWithActiveTrigger() ||
                                (clearTimeout(n._timeout),
                                (n._hoverState = "out"),
                                n.config.delay && n.config.delay.hide
                                    ? (n._timeout = setTimeout(function () {
                                          "out" === n._hoverState && n.hide();
                                      }, n.config.delay.hide))
                                    : n.hide());
                    }),
                    (n._isWithActiveTrigger = function () {
                        for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                        return !1;
                    }),
                    (n._getConfig = function (e) {
                        var n = t(this.element).data();
                        return (
                            Object.keys(n).forEach(function (e) {
                                -1 !== He.indexOf(e) && delete n[e];
                            }),
                            "number" == typeof (e = r(r(r({}, this.constructor.Default), n), "object" == typeof e && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }),
                            "number" == typeof e.title && (e.title = e.title.toString()),
                            "number" == typeof e.content && (e.content = e.content.toString()),
                            a.typeCheckConfig(De, e, this.constructor.DefaultType),
                            e.sanitize && (e.template = je(e.template, e.whiteList, e.sanitizeFn)),
                            e
                        );
                    }),
                    (n._getDelegateConfig = function () {
                        var e = {};
                        if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                        return e;
                    }),
                    (n._cleanTipClass = function () {
                        var e = t(this.getTipElement()),
                            n = e.attr("class").match(Ae);
                        null !== n && n.length && e.removeClass(n.join(""));
                    }),
                    (n._handlePopperPlacementChange = function (e) {
                        (this.tip = e.instance.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
                    }),
                    (n._fixTransition = function () {
                        var e = this.getTipElement(),
                            n = this.config.animation;
                        null === e.getAttribute("x-placement") && (t(e).removeClass("fade"), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = n));
                    }),
                    (e._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = t(this).data("bs.tooltip"),
                                s = "object" == typeof n && n;
                            if ((i || !/dispose|hide/.test(n)) && (i || ((i = new e(this, s)), t(this).data("bs.tooltip", i)), "string" == typeof n)) {
                                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                i[n]();
                            }
                        });
                    }),
                    i(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.5.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Re;
                            },
                        },
                        {
                            key: "NAME",
                            get: function () {
                                return De;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function () {
                                return "bs.tooltip";
                            },
                        },
                        {
                            key: "Event",
                            get: function () {
                                return Ne;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function () {
                                return ".bs.tooltip";
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Le;
                            },
                        },
                    ]),
                    e
                );
            })();
        (t.fn[De] = qe._jQueryInterface),
            (t.fn[De].Constructor = qe),
            (t.fn[De].noConflict = function () {
                return (t.fn[De] = $e), qe._jQueryInterface;
            });
        var We = "popover",
            Ue = t.fn[We],
            Be = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            Fe = r(
                r({}, qe.Default),
                {},
                { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }
            ),
            Ke = r(r({}, qe.DefaultType), {}, { content: "(string|element|function)" }),
            ze = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover",
            },
            Qe = (function (e) {
                var n, s;
                function o() {
                    return e.apply(this, arguments) || this;
                }
                (s = e), ((n = o).prototype = Object.create(s.prototype)), (n.prototype.constructor = n), (n.__proto__ = s);
                var r = o.prototype;
                return (
                    (r.isWithContent = function () {
                        return this.getTitle() || this._getContent();
                    }),
                    (r.addAttachmentClass = function (e) {
                        t(this.getTipElement()).addClass("bs-popover-" + e);
                    }),
                    (r.getTipElement = function () {
                        return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
                    }),
                    (r.setContent = function () {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(".popover-header"), this.getTitle());
                        var n = this._getContent();
                        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show");
                    }),
                    (r._getContent = function () {
                        return this.element.getAttribute("data-content") || this.config.content;
                    }),
                    (r._cleanTipClass = function () {
                        var e = t(this.getTipElement()),
                            n = e.attr("class").match(Be);
                        null !== n && n.length > 0 && e.removeClass(n.join(""));
                    }),
                    (o._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = t(this).data("bs.popover"),
                                i = "object" == typeof e ? e : null;
                            if ((n || !/dispose|hide/.test(e)) && (n || ((n = new o(this, i)), t(this).data("bs.popover", n)), "string" == typeof e)) {
                                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                                n[e]();
                            }
                        });
                    }),
                    i(o, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.5.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Fe;
                            },
                        },
                        {
                            key: "NAME",
                            get: function () {
                                return We;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function () {
                                return "bs.popover";
                            },
                        },
                        {
                            key: "Event",
                            get: function () {
                                return ze;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function () {
                                return ".bs.popover";
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Ke;
                            },
                        },
                    ]),
                    o
                );
            })(qe);
        (t.fn[We] = Qe._jQueryInterface),
            (t.fn[We].Constructor = Qe),
            (t.fn[We].noConflict = function () {
                return (t.fn[We] = Ue), Qe._jQueryInterface;
            });
        var Ye = "scrollspy",
            Ve = t.fn[Ye],
            Xe = { offset: 10, method: "auto", target: "" },
            Ge = { offset: "number", method: "string", target: "(string|element)" },
            Je = (function () {
                function e(e, n) {
                    var i = this;
                    (this._element = e),
                        (this._scrollElement = "BODY" === e.tagName ? window : e),
                        (this._config = this._getConfig(n)),
                        (this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item"),
                        (this._offsets = []),
                        (this._targets = []),
                        (this._activeTarget = null),
                        (this._scrollHeight = 0),
                        t(this._scrollElement).on("scroll.bs.scrollspy", function (e) {
                            return i._process(e);
                        }),
                        this.refresh(),
                        this._process();
                }
                var n = e.prototype;
                return (
                    (n.refresh = function () {
                        var e = this,
                            n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                            i = "auto" === this._config.method ? n : this._config.method,
                            s = "position" === i ? this._getScrollTop() : 0;
                        (this._offsets = []),
                            (this._targets = []),
                            (this._scrollHeight = this._getScrollHeight()),
                            [].slice
                                .call(document.querySelectorAll(this._selector))
                                .map(function (e) {
                                    var n,
                                        o = a.getSelectorFromElement(e);
                                    if ((o && (n = document.querySelector(o)), n)) {
                                        var r = n.getBoundingClientRect();
                                        if (r.width || r.height) return [t(n)[i]().top + s, o];
                                    }
                                    return null;
                                })
                                .filter(function (e) {
                                    return e;
                                })
                                .sort(function (e, t) {
                                    return e[0] - t[0];
                                })
                                .forEach(function (t) {
                                    e._offsets.push(t[0]), e._targets.push(t[1]);
                                });
                    }),
                    (n.dispose = function () {
                        t.removeData(this._element, "bs.scrollspy"),
                            t(this._scrollElement).off(".bs.scrollspy"),
                            (this._element = null),
                            (this._scrollElement = null),
                            (this._config = null),
                            (this._selector = null),
                            (this._offsets = null),
                            (this._targets = null),
                            (this._activeTarget = null),
                            (this._scrollHeight = null);
                    }),
                    (n._getConfig = function (e) {
                        if ("string" != typeof (e = r(r({}, Xe), "object" == typeof e && e ? e : {})).target && a.isElement(e.target)) {
                            var n = t(e.target).attr("id");
                            n || ((n = a.getUID(Ye)), t(e.target).attr("id", n)), (e.target = "#" + n);
                        }
                        return a.typeCheckConfig(Ye, e, Ge), e;
                    }),
                    (n._getScrollTop = function () {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                    }),
                    (n._getScrollHeight = function () {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                    }),
                    (n._getOffsetHeight = function () {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                    }),
                    (n._process = function () {
                        var e = this._getScrollTop() + this._config.offset,
                            t = this._getScrollHeight(),
                            n = this._config.offset + t - this._getOffsetHeight();
                        if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i);
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                            for (var s = this._offsets.length; s--; ) this._activeTarget !== this._targets[s] && e >= this._offsets[s] && (void 0 === this._offsets[s + 1] || e < this._offsets[s + 1]) && this._activate(this._targets[s]);
                        }
                    }),
                    (n._activate = function (e) {
                        (this._activeTarget = e), this._clear();
                        var n = this._selector.split(",").map(function (t) {
                                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                            }),
                            i = t([].slice.call(document.querySelectorAll(n.join(","))));
                        i.hasClass("dropdown-item")
                            ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active"))
                            : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),
                            t(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: e });
                    }),
                    (n._clear = function () {
                        [].slice
                            .call(document.querySelectorAll(this._selector))
                            .filter(function (e) {
                                return e.classList.contains("active");
                            })
                            .forEach(function (e) {
                                return e.classList.remove("active");
                            });
                    }),
                    (e._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = t(this).data("bs.scrollspy");
                            if ((i || ((i = new e(this, "object" == typeof n && n)), t(this).data("bs.scrollspy", i)), "string" == typeof n)) {
                                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                i[n]();
                            }
                        });
                    }),
                    i(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.5.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Xe;
                            },
                        },
                    ]),
                    e
                );
            })();
        t(window).on("load.bs.scrollspy.data-api", function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--; ) {
                var i = t(e[n]);
                Je._jQueryInterface.call(i, i.data());
            }
        }),
            (t.fn[Ye] = Je._jQueryInterface),
            (t.fn[Ye].Constructor = Je),
            (t.fn[Ye].noConflict = function () {
                return (t.fn[Ye] = Ve), Je._jQueryInterface;
            });
        var Ze = t.fn.tab,
            et = (function () {
                function e(e) {
                    this._element = e;
                }
                var n = e.prototype;
                return (
                    (n.show = function () {
                        var e = this;
                        if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass("active")) || t(this._element).hasClass("disabled"))) {
                            var n,
                                i,
                                s = t(this._element).closest(".nav, .list-group")[0],
                                o = a.getSelectorFromElement(this._element);
                            if (s) {
                                var r = "UL" === s.nodeName || "OL" === s.nodeName ? "> li > .active" : ".active";
                                i = (i = t.makeArray(t(s).find(r)))[i.length - 1];
                            }
                            var l = t.Event("hide.bs.tab", { relatedTarget: this._element }),
                                c = t.Event("show.bs.tab", { relatedTarget: i });
                            if ((i && t(i).trigger(l), t(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented())) {
                                o && (n = document.querySelector(o)), this._activate(this._element, s);
                                var u = function () {
                                    var n = t.Event("hidden.bs.tab", { relatedTarget: e._element }),
                                        s = t.Event("shown.bs.tab", { relatedTarget: i });
                                    t(i).trigger(n), t(e._element).trigger(s);
                                };
                                n ? this._activate(n, n.parentNode, u) : u();
                            }
                        }
                    }),
                    (n.dispose = function () {
                        t.removeData(this._element, "bs.tab"), (this._element = null);
                    }),
                    (n._activate = function (e, n, i) {
                        var s = this,
                            o = (!n || ("UL" !== n.nodeName && "OL" !== n.nodeName) ? t(n).children(".active") : t(n).find("> li > .active"))[0],
                            r = i && o && t(o).hasClass("fade"),
                            l = function () {
                                return s._transitionComplete(e, o, i);
                            };
                        if (o && r) {
                            var c = a.getTransitionDurationFromElement(o);
                            t(o).removeClass("show").one(a.TRANSITION_END, l).emulateTransitionEnd(c);
                        } else l();
                    }),
                    (n._transitionComplete = function (e, n, i) {
                        if (n) {
                            t(n).removeClass("active");
                            var s = t(n.parentNode).find("> .dropdown-menu .active")[0];
                            s && t(s).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
                        }
                        if (
                            (t(e).addClass("active"),
                            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                            a.reflow(e),
                            e.classList.contains("fade") && e.classList.add("show"),
                            e.parentNode && t(e.parentNode).hasClass("dropdown-menu"))
                        ) {
                            var o = t(e).closest(".dropdown")[0];
                            if (o) {
                                var r = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                                t(r).addClass("active");
                            }
                            e.setAttribute("aria-expanded", !0);
                        }
                        i && i();
                    }),
                    (e._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = t(this),
                                s = i.data("bs.tab");
                            if ((s || ((s = new e(this)), i.data("bs.tab", s)), "string" == typeof n)) {
                                if (void 0 === s[n]) throw new TypeError('No method named "' + n + '"');
                                s[n]();
                            }
                        });
                    }),
                    i(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.5.0";
                            },
                        },
                    ]),
                    e
                );
            })();
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
            e.preventDefault(), et._jQueryInterface.call(t(this), "show");
        }),
            (t.fn.tab = et._jQueryInterface),
            (t.fn.tab.Constructor = et),
            (t.fn.tab.noConflict = function () {
                return (t.fn.tab = Ze), et._jQueryInterface;
            });
        var tt = t.fn.toast,
            nt = { animation: "boolean", autohide: "boolean", delay: "number" },
            it = { animation: !0, autohide: !0, delay: 500 },
            st = (function () {
                function e(e, t) {
                    (this._element = e), (this._config = this._getConfig(t)), (this._timeout = null), this._setListeners();
                }
                var n = e.prototype;
                return (
                    (n.show = function () {
                        var e = this,
                            n = t.Event("show.bs.toast");
                        if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                            this._config.animation && this._element.classList.add("fade");
                            var i = function () {
                                e._element.classList.remove("showing"),
                                    e._element.classList.add("show"),
                                    t(e._element).trigger("shown.bs.toast"),
                                    e._config.autohide &&
                                        (e._timeout = setTimeout(function () {
                                            e.hide();
                                        }, e._config.delay));
                            };
                            if ((this._element.classList.remove("hide"), a.reflow(this._element), this._element.classList.add("showing"), this._config.animation)) {
                                var s = a.getTransitionDurationFromElement(this._element);
                                t(this._element).one(a.TRANSITION_END, i).emulateTransitionEnd(s);
                            } else i();
                        }
                    }),
                    (n.hide = function () {
                        if (this._element.classList.contains("show")) {
                            var e = t.Event("hide.bs.toast");
                            t(this._element).trigger(e), e.isDefaultPrevented() || this._close();
                        }
                    }),
                    (n.dispose = function () {
                        clearTimeout(this._timeout),
                            (this._timeout = null),
                            this._element.classList.contains("show") && this._element.classList.remove("show"),
                            t(this._element).off("click.dismiss.bs.toast"),
                            t.removeData(this._element, "bs.toast"),
                            (this._element = null),
                            (this._config = null);
                    }),
                    (n._getConfig = function (e) {
                        return (e = r(r(r({}, it), t(this._element).data()), "object" == typeof e && e ? e : {})), a.typeCheckConfig("toast", e, this.constructor.DefaultType), e;
                    }),
                    (n._setListeners = function () {
                        var e = this;
                        t(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
                            return e.hide();
                        });
                    }),
                    (n._close = function () {
                        var e = this,
                            n = function () {
                                e._element.classList.add("hide"), t(e._element).trigger("hidden.bs.toast");
                            };
                        if ((this._element.classList.remove("show"), this._config.animation)) {
                            var i = a.getTransitionDurationFromElement(this._element);
                            t(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i);
                        } else n();
                    }),
                    (e._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = t(this),
                                s = i.data("bs.toast");
                            if ((s || ((s = new e(this, "object" == typeof n && n)), i.data("bs.toast", s)), "string" == typeof n)) {
                                if (void 0 === s[n]) throw new TypeError('No method named "' + n + '"');
                                s[n](this);
                            }
                        });
                    }),
                    i(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.5.0";
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return nt;
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return it;
                            },
                        },
                    ]),
                    e
                );
            })();
        (t.fn.toast = st._jQueryInterface),
            (t.fn.toast.Constructor = st),
            (t.fn.toast.noConflict = function () {
                return (t.fn.toast = tt), st._jQueryInterface;
            }),
            (e.Alert = u),
            (e.Button = h),
            (e.Carousel = v),
            (e.Collapse = k),
            (e.Dropdown = ke),
            (e.Modal = Oe),
            (e.Popover = Qe),
            (e.Scrollspy = Je),
            (e.Tab = et),
            (e.Toast = st),
            (e.Tooltip = qe),
            (e.Util = a),
            Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.HSHeader = t()) : (e.HSHeader = t());
    })(window, function () {
        return (
            (d = {
                "./src/js/hs-header.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSHeader; });\n/* harmony import */ var _observers_sticky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers/sticky */ \"./src/js/observers/sticky.js\");\n/* harmony import */ var _observers_moment_show_hide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers/moment-show-hide */ \"./src/js/observers/moment-show-hide.js\");\n/* harmony import */ var _observers_show_hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers/show-hide */ \"./src/js/observers/show-hide.js\");\n/* harmony import */ var _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers/change-logo */ \"./src/js/observers/change-logo.js\");\n/* harmony import */ var _observers_hide_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observers/hide-section */ \"./src/js/observers/hide-section.js\");\n/* harmony import */ var _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers/change-appearance */ \"./src/js/observers/change-appearance.js\");\n/* harmony import */ var _observers_has_hidden_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observers/has-hidden-element */ \"./src/js/observers/has-hidden-element.js\");\n/* harmony import */ var _observers_floating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers/floating */ \"./src/js/observers/floating.js\");\n/* harmony import */ var _observers_without_behavior__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./observers/without-behavior */ \"./src/js/observers/without-behavior.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSHeader Plugin\n* @version: 2.0.0 (Mon, 25 Nov 2019)\n* @requires: jQuery v3.0 or later\n* @author: HtmlStream\n* @event-namespace: .HSHeader\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\n// Sticky\n // Moment Show / Hide\n\n // Show / Hide\n\n // Change Logo\n\n // Hide Section\n\n // Change Appearance\n\n // Has Hidden Element\n\n // Floating\n\n // Without Behavior\n\n\n\nvar HSHeader = /*#__PURE__*/function () {\n  function HSHeader(element, config, observers) {\n    _classCallCheck(this, HSHeader);\n\n    this.element = element;\n    this.config = config;\n    this.observers = observers && $.isPlainObject(observers) ? observers : {};\n    this.viewport = 'xs';\n    this.defaults = {\n      fixMoment: 0,\n      fixMomentClasses: null,\n      fixMomentExclude: null,\n      fixEffect: 'slide',\n      breakpoint: 'lg',\n      breakpointsMap: {\n        'md': 768,\n        'sm': 576,\n        'lg': 992,\n        'xl': 1200\n      },\n      effectCompensation: false,\n      effectCompensationStartClass: false,\n      effectCompensationEndClass: false\n    };\n  }\n\n  _createClass(HSHeader, [{\n    key: \"init\",\n    value: function init() {\n      var self = this,\n          element = this.element;\n      var dataSettings = element.attr('data-hs-header-options') ? JSON.parse(element.attr('data-hs-header-options')) : {};\n      if (!element || element.length !== 1 || element.data('HSHeader')) return;\n      this.config = $.extend(true, {}, this.defaults, dataSettings);\n\n      this._detectObservers();\n\n      this.fixMediaDifference(this.element);\n      this.checkViewport();\n      $(window).on('scroll.uHeader', function (e) {\n        window.HSHeader = null;\n\n        if ($(window).scrollTop() < self.config.fixMoment - 100 && self.config.effectCompensation === true) {\n          $(element).css({\n            top: -$(window).scrollTop()\n          }).addClass(self.config.effectCompensationStartClass).removeClass(self.config.effectCompensationEndClass);\n        } else if (self.config.effectCompensation === true) {\n          $(element).css({\n            top: 0\n          }).addClass(self.config.effectCompensationEndClass).removeClass(self.config.effectCompensationStartClass);\n        }\n\n        if ($(window).scrollTop() > 5 && !$(element).hasClass('scrolled')) {\n          $(element).addClass('scrolled');\n        }\n\n        if ($(window).scrollTop() < 5) {\n          $(element).removeClass('scrolled');\n        }\n\n        if (element.data('HSHeader')) {\n          self.notify();\n        }\n\n        element.data('HSHeader', this);\n      }).on('resize.uHeader', function (e) {\n        if (self.resizeTimeOutId) clearTimeout(self.resizeTimeOutId);\n        self.resizeTimeOutId = setTimeout(function () {\n          // self.checkViewport();\n          self.update();\n        }, 100);\n      }).trigger('scroll.uHeader');\n      return this.element;\n    }\n  }, {\n    key: \"header\",\n    value: function header(element, config, observers) {\n      if (!element || !element.length) return;\n      this.element = element;\n      this.config = config;\n      this.observers = observers && $.isPlainObject(observers) ? observers : {};\n      this.viewport = 'xs';\n      this.checkViewport();\n    }\n  }, {\n    key: \"_detectObservers\",\n    value: function _detectObservers() {\n      if (!this.element || !this.element.length) return;\n      var observers = this.observers = {\n        'xs': [],\n        'sm': [],\n        'md': [],\n        'lg': [],\n        'xl': []\n      };\n      /* ------------------------ xs -------------------------*/\n      // Has Hidden Element\n\n      if (this.element.hasClass('header-has-hidden-element')) {\n        observers['xs'].push(new _observers_has_hidden_element__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.element).init());\n      } // Sticky top\n\n\n      if (this.element.hasClass('header-sticky-top')) {\n        if (this.element.hasClass('header-show-hide')) {\n          observers['xs'].push(new _observers_moment_show_hide__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.element).init());\n        } else if (this.element.hasClass('header-toggle-section')) {\n          observers['xs'].push(new _observers_hide_section__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo')) {\n          observers['xs'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-appearance')) {\n          observers['xs'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n      } // Floating\n\n\n      if (this.element.hasClass('header-floating')) {\n        observers['xs'].push(new _observers_floating__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this.element).init());\n      }\n\n      if (this.element.hasClass('header-invulnerable')) {\n        observers['xs'].push(new _observers_without_behavior__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this.element).init());\n      } // Sticky bottom\n\n\n      if (this.element.hasClass('header-sticky-bottom')) {\n        if (this.element.hasClass('header-change-appearance')) {\n          observers['xs'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo')) {\n          observers['xs'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n      } // Abs top & Static\n\n\n      if (this.element.hasClass('header-abs-top') || this.element.hasClass('header-static')) {\n        if (this.element.hasClass('header-show-hide')) {\n          observers['xs'].push(new _observers_show_hide__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo')) {\n          observers['xs'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-appearance')) {\n          observers['xs'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n      } // Abs bottom & Abs top 2nd screen\n\n\n      if (this.element.hasClass('header-abs-bottom') || this.element.hasClass('header-abs-top-2nd-screen')) {\n        observers['xs'].push(new _observers_sticky__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.element).init());\n\n        if (this.element.hasClass('header-change-appearance')) {\n          observers['xs'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element, {\n            fixPointSelf: true\n          }).init());\n        }\n\n        if (this.element.hasClass('header-change-logo')) {\n          observers['xs'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element, {\n            fixPointSelf: true\n          }).init());\n        }\n      }\n      /* ------------------------ sm -------------------------*/\n      // Sticky top\n      // Has Hidden Element\n\n\n      if (this.element.hasClass('header-has-hidden-element-sm')) {\n        observers['sm'].push(new _observers_has_hidden_element__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.element).init());\n      }\n\n      if (this.element.hasClass('header-sticky-top-sm')) {\n        if (this.element.hasClass('header-show-hide-sm')) {\n          observers['sm'].push(new _observers_moment_show_hide__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.element).init());\n        } else if (this.element.hasClass('header-toggle-section-sm')) {\n          observers['sm'].push(new _observers_hide_section__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-sm')) {\n          observers['sm'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-appearance-sm')) {\n          observers['sm'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n      } // Floating\n\n\n      if (this.element.hasClass('header-floating-sm')) {\n        observers['sm'].push(new _observers_floating__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this.element).init());\n      }\n\n      if (this.element.hasClass('header-invulnerable-sm')) {\n        observers['sm'].push(new _observers_without_behavior__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this.element).init());\n      } // Sticky bottom\n\n\n      if (this.element.hasClass('header-sticky-bottom-sm')) {\n        if (this.element.hasClass('header-change-appearance-sm')) {\n          observers['sm'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-sm')) {\n          observers['sm'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n      } // Abs top & Static\n\n\n      if (this.element.hasClass('header-abs-top-sm') || this.element.hasClass('header-static-sm')) {\n        if (this.element.hasClass('header-show-hide-sm')) {\n          observers['sm'].push(new _observers_show_hide__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-sm')) {\n          observers['sm'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-appearance-sm')) {\n          observers['sm'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n      } // Abs bottom & Abs top 2nd screen\n\n\n      if (this.element.hasClass('header-abs-bottom-sm') || this.element.hasClass('header-abs-top-2nd-screen-sm')) {\n        observers['sm'].push(new _observers_sticky__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.element).init());\n\n        if (this.element.hasClass('header-change-appearance-sm')) {\n          observers['sm'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element, {\n            fixPointSelf: true\n          }).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-sm')) {\n          observers['sm'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element, {\n            fixPointSelf: true\n          }).init());\n        }\n      }\n      /* ------------------------ md -------------------------*/\n      // Has Hidden Element\n\n\n      if (this.element.hasClass('header-has-hidden-element-md')) {\n        observers['md'].push(new _observers_has_hidden_element__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.element).init());\n      } // Sticky top\n\n\n      if (this.element.hasClass('header-sticky-top-md')) {\n        if (this.element.hasClass('header-show-hide-md')) {\n          observers['md'].push(new _observers_moment_show_hide__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.element).init());\n        } else if (this.element.hasClass('header-toggle-section-md')) {\n          observers['md'].push(new _observers_hide_section__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-md')) {\n          observers['md'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-appearance-md')) {\n          observers['md'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n      } // Floating\n\n\n      if (this.element.hasClass('header-floating-md')) {\n        observers['md'].push(new _observers_floating__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this.element).init());\n      }\n\n      if (this.element.hasClass('header-invulnerable-md')) {\n        observers['md'].push(new _observers_without_behavior__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this.element).init());\n      } // Sticky bottom\n\n\n      if (this.element.hasClass('header-sticky-bottom-md')) {\n        if (this.element.hasClass('header-change-appearance-md')) {\n          observers['md'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-md')) {\n          observers['md'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n      } // Abs top & Static\n\n\n      if (this.element.hasClass('header-abs-top-md') || this.element.hasClass('header-static-md')) {\n        if (this.element.hasClass('header-show-hide-md')) {\n          observers['md'].push(new _observers_show_hide__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-md')) {\n          observers['md'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-appearance-md')) {\n          observers['md'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n      } // Abs bottom & Abs top 2nd screen\n\n\n      if (this.element.hasClass('header-abs-bottom-md') || this.element.hasClass('header-abs-top-2nd-screen-md')) {\n        observers['md'].push(new _observers_sticky__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.element).init());\n\n        if (this.element.hasClass('header-change-appearance-md')) {\n          observers['md'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element, {\n            fixPointSelf: true\n          }).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-md')) {\n          observers['md'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element, {\n            fixPointSelf: true\n          }).init());\n        }\n      }\n      /* ------------------------ lg -------------------------*/\n      // Has Hidden Element\n\n\n      if (this.element.hasClass('header-has-hidden-element-lg')) {\n        observers['lg'].push(new _observers_has_hidden_element__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.element).init());\n      } // Sticky top\n\n\n      if (this.element.hasClass('header-sticky-top-lg')) {\n        if (this.element.hasClass('header-show-hide-lg')) {\n          observers['lg'].push(new _observers_moment_show_hide__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.element).init());\n        } else if (this.element.hasClass('header-toggle-section-lg')) {\n          observers['lg'].push(new _observers_hide_section__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-lg')) {\n          observers['lg'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-appearance-lg')) {\n          observers['lg'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n      } // Floating\n\n\n      if (this.element.hasClass('header-floating-lg')) {\n        observers['lg'].push(new _observers_floating__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this.element).init());\n      }\n\n      if (this.element.hasClass('header-invulnerable-lg')) {\n        observers['lg'].push(new _observers_without_behavior__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this.element).init());\n      } // Sticky bottom\n\n\n      if (this.element.hasClass('header-sticky-bottom-lg')) {\n        if (this.element.hasClass('header-change-appearance-lg')) {\n          observers['lg'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-lg')) {\n          observers['lg'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n      } // Abs top & Static\n\n\n      if (this.element.hasClass('header-abs-top-lg') || this.element.hasClass('header-static-lg')) {\n        if (this.element.hasClass('header-show-hide-lg')) {\n          observers['lg'].push(new _observers_show_hide__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-lg')) {\n          observers['lg'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-appearance-lg')) {\n          observers['lg'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n      } // Abs bottom & Abs top 2nd screen\n\n\n      if (this.element.hasClass('header-abs-bottom-lg') || this.element.hasClass('header-abs-top-2nd-screen-lg')) {\n        observers['lg'].push(new _observers_sticky__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.element).init());\n\n        if (this.element.hasClass('header-change-appearance-lg')) {\n          observers['lg'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element, {\n            fixPointSelf: true\n          }).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-lg')) {\n          observers['lg'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element, {\n            fixPointSelf: true\n          }).init());\n        }\n      }\n      /* ------------------------ xl -------------------------*/\n      // Has Hidden Element\n\n\n      if (this.element.hasClass('header-has-hidden-element-xl')) {\n        observers['xl'].push(new _observers_has_hidden_element__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.element).init());\n      } // Sticky top\n\n\n      if (this.element.hasClass('header-sticky-top-xl')) {\n        if (this.element.hasClass('header-show-hide-xl')) {\n          observers['xl'].push(new _observers_moment_show_hide__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.element).init());\n        } else if (this.element.hasClass('header-toggle-section-xl')) {\n          observers['xl'].push(new _observers_hide_section__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-xl')) {\n          observers['xl'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-appearance-xl')) {\n          observers['xl'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n      } // Floating\n\n\n      if (this.element.hasClass('header-floating-xl')) {\n        observers['xl'].push(new _observers_floating__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this.element).init());\n      } // Sticky bottom\n\n\n      if (this.element.hasClass('header-invulnerable-xl')) {\n        observers['xl'].push(new _observers_without_behavior__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this.element).init());\n      } // Sticky bottom\n\n\n      if (this.element.hasClass('header-sticky-bottom-xl')) {\n        if (this.element.hasClass('header-change-appearance-xl')) {\n          observers['xl'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-xl')) {\n          observers['xl'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n      } // Abs top & Static\n\n\n      if (this.element.hasClass('header-abs-top-xl') || this.element.hasClass('header-static-xl')) {\n        if (this.element.hasClass('header-show-hide-xl')) {\n          observers['xl'].push(new _observers_show_hide__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-xl')) {\n          observers['xl'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element).init());\n        }\n\n        if (this.element.hasClass('header-change-appearance-xl')) {\n          observers['xl'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element).init());\n        }\n      } // Abs bottom & Abs top 2nd screen\n\n\n      if (this.element.hasClass('header-abs-bottom-xl') || this.element.hasClass('header-abs-top-2nd-screen-xl')) {\n        observers['xl'].push(new _observers_sticky__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.element).init());\n\n        if (this.element.hasClass('header-change-appearance-xl')) {\n          observers['xl'].push(new _observers_change_appearance__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.element, {\n            fixPointSelf: true\n          }).init());\n        }\n\n        if (this.element.hasClass('header-change-logo-xl')) {\n          observers['xl'].push(new _observers_change_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.element, {\n            fixPointSelf: true\n          }).init());\n        }\n      }\n\n      return observers;\n    }\n  }, {\n    key: \"fixMediaDifference\",\n    value: function fixMediaDifference(element) {\n      if (!element || !element.length || !element.filter('[class*=\"header-side\"]').length) return;\n      var toggleable;\n\n      if (element.hasClass('header-side-left-xl') || element.hasClass('header-side-right-xl')) {\n        toggleable = element.find('.navbar-expand-xl');\n\n        if (toggleable.length) {\n          toggleable.removeClass('navbar-expand-xl').addClass('navbar-expand-lg');\n        }\n      } else if (element.hasClass('header-side-left-lg') || element.hasClass('header-side-right-lg')) {\n        toggleable = element.find('.navbar-expand-lg');\n\n        if (toggleable.length) {\n          toggleable.removeClass('navbar-expand-lg').addClass('navbar-expand-md');\n        }\n      } else if (element.hasClass('header-side-left-md') || element.hasClass('header-side-right-md')) {\n        toggleable = element.find('.navbar-expand-md');\n\n        if (toggleable.length) {\n          toggleable.removeClass('navbar-expand-md').addClass('navbar-expand-sm');\n        }\n      } else if (element.hasClass('header-side-left-sm') || element.hasClass('header-side-right-sm')) {\n        toggleable = element.find('.navbar-expand-sm');\n\n        if (toggleable.length) {\n          toggleable.removeClass('navbar-expand-sm').addClass('navbar-expand');\n        }\n      }\n    }\n  }, {\n    key: \"checkViewport\",\n    value: function checkViewport() {\n      var $w = $(window);\n\n      if ($w.width() > this.config.breakpointsMap['sm'] && this.observers['sm'].length) {\n        this.prevViewport = this.viewport;\n        this.viewport = 'sm';\n\n        if (this.config.fixMoment && $w.scrollTop() > this.config.fixMoment) {\n          if (typeof this.config.breakpointsMap['sm'] === 'undefined') {\n            this.element.removeClass('js-header-fix-moment');\n          } else {\n            this.element.addClass('js-header-fix-moment');\n          }\n        }\n\n        return this;\n      }\n\n      if ($w.width() > this.config.breakpointsMap['md'] && this.observers['md'].length) {\n        this.prevViewport = this.viewport;\n        this.viewport = 'md';\n\n        if (this.config.fixMoment && $w.scrollTop() > this.config.fixMoment) {\n          if (typeof this.config.breakpointsMap['md'] === 'undefined') {\n            this.element.removeClass('js-header-fix-moment');\n          } else {\n            this.element.addClass('js-header-fix-moment');\n          }\n        }\n\n        return this;\n      }\n\n      if ($w.width() > this.config.breakpointsMap['lg'] && this.observers['lg'].length) {\n        this.prevViewport = this.viewport;\n        this.viewport = 'lg';\n\n        if (this.config.fixMoment && $w.scrollTop() > this.config.fixMoment) {\n          if (typeof this.config.breakpointsMap['lg'] === 'undefined') {\n            this.element.removeClass('js-header-fix-moment');\n          } else {\n            this.element.addClass('js-header-fix-moment');\n          }\n        }\n\n        return this;\n      }\n\n      if ($w.width() > this.config.breakpointsMap['xl'] && this.observers['xl'].length) {\n        this.prevViewport = this.viewport;\n        this.viewport = 'xl';\n\n        if (this.config.fixMoment && $w.scrollTop() > this.config.fixMoment) {\n          if (typeof this.config.breakpointsMap['xl'] === 'undefined') {\n            this.element.removeClass('js-header-fix-moment');\n          } else {\n            this.element.addClass('js-header-fix-moment');\n          }\n        }\n\n        return this;\n      }\n\n      if (this.prevViewport) this.prevViewport = this.viewport;\n\n      if (this.config.fixMoment && $w.scrollTop() > this.config.fixMoment) {\n        if (typeof this.config.breakpointsMap['xs'] === 'undefined') {\n          this.element.removeClass('js-header-fix-moment');\n        } else {\n          this.element.addClass('js-header-fix-moment');\n        }\n      }\n\n      this.viewport = 'xs';\n      return this;\n    }\n  }, {\n    key: \"notify\",\n    value: function notify() {\n      if (this.prevViewport) {\n        this.observers[this.prevViewport].forEach(function (observer) {\n          observer.destroy();\n        });\n        this.prevViewport = null;\n      }\n\n      this.observers[this.viewport].forEach(function (observer) {\n        observer.check();\n      });\n      return this;\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      for (var viewport in this.observers) {\n        this.observers[viewport].forEach(function (observer) {\n          observer.destroy();\n        });\n      }\n\n      this.prevViewport = null;\n      this.observers[this.viewport].forEach(function (observer) {\n        observer.reinit();\n      });\n      return this;\n    }\n  }]);\n\n  return HSHeader;\n}();\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/hs-header.js?"
                    );
                },
                "./src/js/observers/abstract.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSAbstractObserver; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HSAbstractObserver = /*#__PURE__*/function () {\n  function HSAbstractObserver(element) {\n    _classCallCheck(this, HSAbstractObserver);\n\n    this.element = element;\n    this.defaultState = true;\n  }\n\n  _createClass(HSAbstractObserver, [{\n    key: "reinit",\n    value: function reinit() {\n      this.destroy().init().check();\n    }\n  }]);\n\n  return HSAbstractObserver;\n}();\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/abstract.js?'
                    );
                },
                "./src/js/observers/change-appearance.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSHeaderChangeAppearanceObserver; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/js/observers/abstract.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar HSHeaderChangeAppearanceObserver = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderChangeAppearanceObserver, _HSAbstractObserver);\n\n  function HSHeaderChangeAppearanceObserver(element) {\n    var _this;\n\n    _classCallCheck(this, HSHeaderChangeAppearanceObserver);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(HSHeaderChangeAppearanceObserver).call(this, element));\n    _this.config = {\n      fixPointSelf: false\n    };\n    _this.dataSettings = _this.element.attr(\'data-hs-header-options\') ? JSON.parse(_this.element.attr(\'data-hs-header-options\')) : {};\n    return _this;\n  }\n\n  _createClass(HSHeaderChangeAppearanceObserver, [{\n    key: "init",\n    value: function init() {\n      if (this.element.hasClass(\'js-header-fix-moment\')) {\n        this.hasFixedClass = true;\n        this.element.removeClass(\'js-header-fix-moment\');\n      }\n\n      if (this.config.fixPointSelf) {\n        this.offset = this.element.offset().top;\n      } else {\n        this.offset = isFinite(this.dataSettings.fixMoment) ? this.dataSettings.fixMoment : 5;\n      }\n\n      if (this.hasFixedClass) {\n        this.hasFixedClass = false;\n        this.element.addClass(\'js-header-fix-moment\');\n      }\n\n      this.sections = this.element.find(\'[data-hs-header-item-options]\');\n      this.defaultState = true;\n      return this;\n    }\n  }, {\n    key: "destroy",\n    value: function destroy() {\n      this.toDefaultState();\n      return this;\n    }\n  }, {\n    key: "check",\n    value: function check() {\n      if (!this.sections.length) return this;\n      var $w = $(window),\n          docScrolled = $w.scrollTop();\n\n      if (docScrolled > this.offset && this.defaultState) {\n        this.changeState();\n      } else if (docScrolled <= this.offset && !this.defaultState) {\n        this.toDefaultState();\n      }\n\n      return this;\n    }\n  }, {\n    key: "changeState",\n    value: function changeState() {\n      this.sections.each(function (i, el) {\n        var $this = $(el),\n            dataSettings = $this.attr(\'data-hs-header-item-options\') ? JSON.parse($this.attr(\'data-hs-header-item-options\')) : {},\n            classes = dataSettings.fixMomentClasses,\n            exclude = dataSettings.fixMomentExclude;\n        if (!classes && !exclude) return;\n        $this.addClass(classes + \' js-header-change-moment\');\n        $this.removeClass(exclude);\n      });\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }, {\n    key: "toDefaultState",\n    value: function toDefaultState() {\n      this.sections.each(function (i, el) {\n        var $this = $(el),\n            dataSettings = $this.attr(\'data-hs-header-item-options\') ? JSON.parse($this.attr(\'data-hs-header-item-options\')) : {},\n            classes = dataSettings.fixMomentClasses,\n            exclude = dataSettings.fixMomentExclude;\n        if (!classes && !exclude) return;\n        $this.removeClass(classes + \' js-header-change-moment\');\n        $this.addClass(exclude);\n      });\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }]);\n\n  return HSHeaderChangeAppearanceObserver;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/change-appearance.js?'
                    );
                },
                "./src/js/observers/change-logo.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSHeaderChangeLogoObserver; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/js/observers/abstract.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar HSHeaderChangeLogoObserver = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderChangeLogoObserver, _HSAbstractObserver);\n\n  function HSHeaderChangeLogoObserver(element) {\n    var _this;\n\n    _classCallCheck(this, HSHeaderChangeLogoObserver);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(HSHeaderChangeLogoObserver).call(this, element));\n    _this.config = {\n      fixPointSelf: false\n    };\n    _this.dataSettings = _this.element.attr(\'data-hs-header-options\') ? JSON.parse(_this.element.attr(\'data-hs-header-options\')) : {};\n    return _this;\n  }\n\n  _createClass(HSHeaderChangeLogoObserver, [{\n    key: "init",\n    value: function init() {\n      if (this.element.hasClass(\'js-header-fix-moment\')) {\n        this.hasFixedClass = true;\n        this.element.removeClass(\'js-header-fix-moment\');\n      }\n\n      if (this.config.fixPointSelf) {\n        this.offset = this.element.offset().top;\n      } else {\n        this.offset = isFinite(this.dataSettings.fixMoment) ? this.dataSettings.fixMoment : 0;\n      }\n\n      if (this.hasFixedClass) {\n        this.hasFixedClass = false;\n        this.element.addClass(\'js-header-fix-moment\');\n      }\n\n      this.imgs = this.element.find(\'.header-logo-img\');\n      this.defaultState = true;\n      this.mainLogo = this.imgs.filter(\'.header-logo-img-main\');\n      this.additionalLogo = this.imgs.not(\'.header-logo-img-main\');\n      if (!this.imgs.length) return this;\n      return this;\n    }\n  }, {\n    key: "destroy",\n    value: function destroy() {\n      this.toDefaultState();\n      return this;\n    }\n  }, {\n    key: "check",\n    value: function check() {\n      var $w = $(window);\n      if (!this.imgs.length) return this;\n\n      if ($w.scrollTop() > this.offset && this.defaultState) {\n        this.changeState();\n      } else if ($w.scrollTop() <= this.offset && !this.defaultState) {\n        this.toDefaultState();\n      }\n\n      return this;\n    }\n  }, {\n    key: "changeState",\n    value: function changeState() {\n      if (this.mainLogo.length) {\n        this.mainLogo.removeClass(\'header-logo-img-main\');\n      }\n\n      if (this.additionalLogo.length) {\n        this.additionalLogo.addClass(\'header-logo-img-main\');\n      }\n\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }, {\n    key: "toDefaultState",\n    value: function toDefaultState() {\n      if (this.mainLogo.length) {\n        this.mainLogo.addClass(\'header-logo-img-main\');\n      }\n\n      if (this.additionalLogo.length) {\n        this.additionalLogo.removeClass(\'header-logo-img-main\');\n      }\n\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }]);\n\n  return HSHeaderChangeLogoObserver;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/change-logo.js?'
                    );
                },
                "./src/js/observers/floating.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSHeaderFloatingObserver; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/js/observers/abstract.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar HSHeaderFloatingObserver = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderFloatingObserver, _HSAbstractObserver);\n\n  function HSHeaderFloatingObserver(element) {\n    var _this;\n\n    _classCallCheck(this, HSHeaderFloatingObserver);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(HSHeaderFloatingObserver).call(this, element));\n    _this.dataSettings = _this.element.attr(\'data-hs-header-options\') ? JSON.parse(_this.element.attr(\'data-hs-header-options\')) : {};\n    return _this;\n  }\n\n  _createClass(HSHeaderFloatingObserver, [{\n    key: "init",\n    value: function init() {\n      this.offset = this.element.offset().top;\n      this.sections = this.element.find(\'.header-section\');\n      this.defaultState = true;\n      return this;\n    }\n  }, {\n    key: "destroy",\n    value: function destroy() {\n      this.toDefaultState();\n      return this;\n    }\n  }, {\n    key: "check",\n    value: function check() {\n      var $w = $(window),\n          docScrolled = $w.scrollTop();\n\n      if (docScrolled > this.offset && this.defaultState) {\n        this.changeState();\n      } else if (docScrolled <= this.offset && !this.defaultState) {\n        this.toDefaultState();\n      }\n\n      return this;\n    }\n  }, {\n    key: "changeState",\n    value: function changeState() {\n      this.element.addClass(\'js-header-fix-moment\').addClass(this.dataSettings.fixMomentClasses).removeClass(this.dataSettings.fixMomentExclude);\n\n      if (this.sections.length) {\n        this.sections.each(function (i, el) {\n          var $section = $(el),\n              dataSettings = $section.attr(\'data-hs-header-item-options\') ? JSON.parse($section.attr(\'data-hs-header-item-options\')) : {};\n          $section.addClass(dataSettings.fixMomentClasses).removeClass(dataSettings.fixMomentExclude);\n        });\n      }\n\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }, {\n    key: "toDefaultState",\n    value: function toDefaultState() {\n      this.element.removeClass(\'js-header-fix-moment\').removeClass(this.dataSettings.fixMomentClasses).addClass(this.dataSettings.fixMomentExclude);\n\n      if (this.sections.length) {\n        this.sections.each(function (i, el) {\n          var $section = $(el),\n              dataSettings = $section.attr(\'data-hs-header-item-options\') ? JSON.parse($section.attr(\'data-hs-header-item-options\')) : {};\n          $section.addClass(dataSettings.fixMomentClasses).removeClass(dataSettings.fixMomentExclude);\n        });\n      }\n\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }]);\n\n  return HSHeaderFloatingObserver;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/floating.js?'
                    );
                },
                "./src/js/observers/has-hidden-element.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSHeaderHasHiddenElement; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/js/observers/abstract.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar HSHeaderHasHiddenElement = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderHasHiddenElement, _HSAbstractObserver);\n\n  function HSHeaderHasHiddenElement(element) {\n    var _this;\n\n    _classCallCheck(this, HSHeaderHasHiddenElement);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(HSHeaderHasHiddenElement).call(this, element));\n    _this.config = {\n      animated: true\n    };\n    _this.dataSettings = _this.element.attr(\'data-hs-header-options\') ? JSON.parse(_this.element.attr(\'data-hs-header-options\')) : {};\n    return _this;\n  }\n\n  _createClass(HSHeaderHasHiddenElement, [{\n    key: "init",\n    value: function init() {\n      this.offset = isFinite(this.dataSettings.fixMoment) ? this.dataSettings.fixMoment : 5;\n      this.elements = this.element.find(\'.header-hidden-element\');\n      this.defaultState = true;\n      return this;\n    }\n  }, {\n    key: "destroy",\n    value: function destroy() {\n      this.toDefaultState();\n      return this;\n    }\n  }, {\n    key: "check",\n    value: function check() {\n      if (!this.elements.length) return this;\n      var $w = $(window),\n          docScrolled = $w.scrollTop();\n\n      if (docScrolled > this.offset && this.defaultState) {\n        this.changeState();\n      } else if (docScrolled <= this.offset && !this.defaultState) {\n        this.toDefaultState();\n      }\n\n      return this;\n    }\n  }, {\n    key: "changeState",\n    value: function changeState() {\n      if (this.config.animated) {\n        this.elements.stop().slideUp();\n      } else {\n        this.elements.hide();\n      }\n\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }, {\n    key: "toDefaultState",\n    value: function toDefaultState() {\n      if (this.config.animated) {\n        this.elements.stop().slideDown();\n      } else {\n        this.elements.show();\n      }\n\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }]);\n\n  return HSHeaderHasHiddenElement;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/has-hidden-element.js?'
                    );
                },
                "./src/js/observers/hide-section.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSHeaderHideSectionObserver; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/js/observers/abstract.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar HSHeaderHideSectionObserver = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderHideSectionObserver, _HSAbstractObserver);\n\n  function HSHeaderHideSectionObserver(element) {\n    var _this;\n\n    _classCallCheck(this, HSHeaderHideSectionObserver);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(HSHeaderHideSectionObserver).call(this, element));\n    _this.dataSettings = _this.element.attr(\'data-hs-header-options\') ? JSON.parse(_this.element.attr(\'data-hs-header-options\')) : {};\n    return _this;\n  }\n\n  _createClass(HSHeaderHideSectionObserver, [{\n    key: "init",\n    value: function init() {\n      this.offset = isFinite(this.dataSettings.fixMoment) ? this.dataSettings.fixMoment : 5;\n      this.section = this.element.find(\'.header-section-hidden\');\n      this.defaultState = true;\n      this.sectionHeight = this.section.length ? this.section.outerHeight() : 0;\n      return this;\n    }\n  }, {\n    key: "destroy",\n    value: function destroy() {\n      if (this.section.length) {\n        this.element.css({\n          \'margin-top\': 0\n        });\n      }\n\n      return this;\n    }\n  }, {\n    key: "check",\n    value: function check() {\n      if (!this.section.length) return this;\n      var $w = $(window),\n          docScrolled = $w.scrollTop();\n\n      if (docScrolled > this.offset && this.defaultState) {\n        this.changeState();\n      } else if (docScrolled <= this.offset && !this.defaultState) {\n        this.toDefaultState();\n      }\n\n      return this;\n    }\n  }, {\n    key: "changeState",\n    value: function changeState() {\n      var self = this;\n      this.element.stop().animate({\n        \'margin-top\': self.sectionHeight * -1 - 1 // last \'-1\' is a small fix\n\n      });\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }, {\n    key: "toDefaultState",\n    value: function toDefaultState() {\n      this.element.stop().animate({\n        \'margin-top\': 0\n      });\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }]);\n\n  return HSHeaderHideSectionObserver;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/hide-section.js?'
                    );
                },
                "./src/js/observers/moment-show-hide.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSHeaderMomentShowHideObserver; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/js/observers/abstract.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar HSHeaderMomentShowHideObserver = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderMomentShowHideObserver, _HSAbstractObserver);\n\n  function HSHeaderMomentShowHideObserver(element) {\n    var _this;\n\n    _classCallCheck(this, HSHeaderMomentShowHideObserver);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(HSHeaderMomentShowHideObserver).call(this, element));\n    _this.dataSettings = _this.element.attr(\'data-hs-header-options\') ? JSON.parse(_this.element.attr(\'data-hs-header-options\')) : {};\n    return _this;\n  }\n\n  _createClass(HSHeaderMomentShowHideObserver, [{\n    key: "init",\n    value: function init() {\n      this.direction = \'down\';\n      this.delta = 0;\n      this.defaultState = true;\n      this.offset = isFinite(this.dataSettings.fixMoment) && this.dataSettings.fixMoment !== 0 ? this.dataSettings.fixMoment : 5;\n      this.effect = this.dataSettings.fixEffect ? this.dataSettings.fixEffect : \'show-hide\';\n      return this;\n    }\n  }, {\n    key: "destroy",\n    value: function destroy() {\n      this.toDefaultState();\n      return this;\n    }\n  }, {\n    key: "checkDirection",\n    value: function checkDirection() {\n      if ($(window).scrollTop() > this.delta) {\n        this.direction = \'down\';\n      } else {\n        this.direction = \'up\';\n      }\n\n      this.delta = $(window).scrollTop();\n      return this;\n    }\n  }, {\n    key: "toDefaultState",\n    value: function toDefaultState() {\n      switch (this.effect) {\n        case \'slide\':\n          this.element.removeClass(\'header-moved-up\');\n          break;\n\n        case \'fade\':\n          this.element.removeClass(\'header-faded\');\n          break;\n\n        default:\n          this.element.removeClass(\'header-invisible\');\n      }\n\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }, {\n    key: "changeState",\n    value: function changeState() {\n      switch (this.effect) {\n        case \'slide\':\n          this.element.addClass(\'header-moved-up\');\n          break;\n\n        case \'fade\':\n          this.element.addClass(\'header-faded\');\n          break;\n\n        default:\n          this.element.addClass(\'header-invisible\');\n      }\n\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }, {\n    key: "check",\n    value: function check() {\n      var docScrolled = $(window).scrollTop();\n      this.checkDirection();\n\n      if (docScrolled >= this.offset && this.defaultState && this.direction === \'down\') {\n        this.changeState();\n      } else if (!this.defaultState && this.direction === \'up\') {\n        this.toDefaultState();\n      }\n\n      return this;\n    }\n  }]);\n\n  return HSHeaderMomentShowHideObserver;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/moment-show-hide.js?'
                    );
                },
                "./src/js/observers/show-hide.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSHeaderShowHideObserver; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ \"./src/js/observers/abstract.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar HSHeaderShowHideObserver = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderShowHideObserver, _HSAbstractObserver);\n\n  function HSHeaderShowHideObserver(element) {\n    var _this;\n\n    _classCallCheck(this, HSHeaderShowHideObserver);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(HSHeaderShowHideObserver).call(this, element));\n    _this.dataSettings = _this.element.attr('data-hs-header-options') ? JSON.parse(_this.element.attr('data-hs-header-options')) : {};\n    return _this;\n  }\n\n  _createClass(HSHeaderShowHideObserver, [{\n    key: \"init\",\n    value: function init() {\n      if (!this.defaultState && $(window).scrollTop() > this.offset) return this;\n      this.defaultState = true;\n      this.transitionDuration = parseFloat(getComputedStyle(this.element.get(0))['transition-duration'], 10) * 1000;\n      this.offset = isFinite(this.dataSettings.fixMoment) && this.dataSettings.fixMoment > this.element.outerHeight() ? this.dataSettings.fixMoment : this.element.outerHeight() + 100;\n      this.effect = this.dataSettings.fixEffect ? this.dataSettings.fixEffect : 'show-hide';\n      return this;\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      if (!this.defaultState && $(window).scrollTop() > this.offset) return this;\n      this.element.removeClass('header-untransitioned');\n\n      this._removeCap();\n\n      return this;\n    }\n  }, {\n    key: \"check\",\n    value: function check() {\n      var $w = $(window);\n\n      if ($w.scrollTop() > this.element.outerHeight() && !this.capInserted) {\n        this._insertCap();\n      } else if ($w.scrollTop() <= this.element.outerHeight() && this.capInserted) {\n        this._removeCap();\n      }\n\n      if ($w.scrollTop() > this.offset && this.defaultState) {\n        this.changeState();\n      } else if ($w.scrollTop() <= this.offset && !this.defaultState) {\n        this.toDefaultState();\n      }\n    }\n  }, {\n    key: \"changeState\",\n    value: function changeState() {\n      this.element.removeClass('header-untransitioned');\n      if (this.animationTimeoutId) clearTimeout(this.animationTimeoutId);\n\n      switch (this.effect) {\n        case 'fade':\n          this.element.removeClass('header-faded');\n          break;\n\n        case 'slide':\n          this.element.removeClass('header-moved-up');\n          break;\n\n        default:\n          this.element.removeClass('header-invisible');\n      }\n\n      this.defaultState = !this.defaultState;\n    }\n  }, {\n    key: \"toDefaultState\",\n    value: function toDefaultState() {\n      var self = this;\n      this.animationTimeoutId = setTimeout(function () {\n        self.element.addClass('header-untransitioned');\n      }, this.transitionDuration);\n\n      switch (this.effect) {\n        case 'fade':\n          this.element.addClass('header-faded');\n          break;\n\n        case 'slide':\n          this.element.addClass('header-moved-up');\n          break;\n\n        default:\n          this.element.addClass('header-invisible');\n      }\n\n      this.defaultState = !this.defaultState;\n    }\n  }, {\n    key: \"_insertCap\",\n    value: function _insertCap() {\n      this.element.addClass('js-header-fix-moment header-untransitioned');\n\n      if (this.element.hasClass('header-static')) {\n        $('html').css('padding-top', this.element.outerHeight());\n      }\n\n      switch (this.effect) {\n        case 'fade':\n          this.element.addClass('header-faded');\n          break;\n\n        case 'slide':\n          this.element.addClass('header-moved-up');\n          break;\n\n        default:\n          this.element.addClass('header-invisible');\n      }\n\n      this.capInserted = true;\n    }\n  }, {\n    key: \"_removeCap\",\n    value: function _removeCap() {\n      var self = this;\n      this.element.removeClass('js-header-fix-moment');\n\n      if (this.element.hasClass('header-static')) {\n        $('html').css('padding-top', 0);\n      }\n\n      if (this.removeCapTimeOutId) clearTimeout(this.removeCapTimeOutId);\n      this.removeCapTimeOutId = setTimeout(function () {\n        self.element.removeClass('header-moved-up header-faded header-invisible');\n      }, 10);\n      this.capInserted = false;\n    }\n  }]);\n\n  return HSHeaderShowHideObserver;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/show-hide.js?"
                    );
                },
                "./src/js/observers/sticky.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSHeaderStickObserver; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/js/observers/abstract.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar HSHeaderStickObserver = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderStickObserver, _HSAbstractObserver);\n\n  function HSHeaderStickObserver(element) {\n    _classCallCheck(this, HSHeaderStickObserver);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HSHeaderStickObserver).call(this, element));\n  }\n\n  _createClass(HSHeaderStickObserver, [{\n    key: "init",\n    value: function init() {\n      this.defaultState = true;\n      this.offset = this.element.offset().top;\n      return this;\n    }\n  }, {\n    key: "destroy",\n    value: function destroy() {\n      this.toDefaultState();\n      return this;\n    }\n  }, {\n    key: "check",\n    value: function check() {\n      var $w = $(window),\n          docScrolled = $w.scrollTop();\n\n      if (docScrolled > this.offset && this.defaultState) {\n        this.changeState();\n      } else if (docScrolled < this.offset && !this.defaultState) {\n        this.toDefaultState();\n      }\n\n      return this;\n    }\n  }, {\n    key: "changeState",\n    value: function changeState() {\n      this.element.addClass(\'js-header-fix-moment\');\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }, {\n    key: "toDefaultState",\n    value: function toDefaultState() {\n      this.element.removeClass(\'js-header-fix-moment\');\n      this.defaultState = !this.defaultState;\n      return this;\n    }\n  }]);\n\n  return HSHeaderStickObserver;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/sticky.js?'
                    );
                },
                "./src/js/observers/without-behavior.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSHeaderWithoutBehaviorObserver; });\n/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/js/observers/abstract.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar HSHeaderWithoutBehaviorObserver = /*#__PURE__*/function (_HSAbstractObserver) {\n  _inherits(HSHeaderWithoutBehaviorObserver, _HSAbstractObserver);\n\n  function HSHeaderWithoutBehaviorObserver(element) {\n    _classCallCheck(this, HSHeaderWithoutBehaviorObserver);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HSHeaderWithoutBehaviorObserver).call(this, element));\n  }\n\n  _createClass(HSHeaderWithoutBehaviorObserver, [{\n    key: "init",\n    value: function init() {\n      return this;\n    }\n  }, {\n    key: "check",\n    value: function check() {\n      return this;\n    }\n  }, {\n    key: "destroy",\n    value: function destroy() {\n      return this;\n    }\n  }, {\n    key: "changeState",\n    value: function changeState() {\n      return this;\n    }\n  }, {\n    key: "toDefaultState",\n    value: function toDefaultState() {\n      return this;\n    }\n  }]);\n\n  return HSHeaderWithoutBehaviorObserver;\n}(_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n\n//# sourceURL=webpack://HSHeader/./src/js/observers/without-behavior.js?'
                    );
                },
            }),
            (e = {}),
            (f.m = d),
            (f.c = e),
            (f.d = function (e, t, n) {
                f.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (f.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (f.t = function (e, t) {
                if ((1 & t && (e = f(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if ((f.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var i in e)
                        f.d(
                            n,
                            i,
                            function (t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return n;
            }),
            (f.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return f.d(t, "a", t), t;
            }),
            (f.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (f.p = ""),
            f((f.s = "./src/js/hs-header.js")).default
        );
        function f(t) {
            if (e[t]) return e[t].exports;
            var n = (e[t] = { i: t, l: !1, exports: {} });
            return d[t].call(n.exports, n, n.exports, f), (n.l = !0), n.exports;
        }
        var d, e;
    }),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.HSGoTo = t()) : (e.HSGoTo = t());
    })(window, function () {
        return (
            (d = {
                "./src/js/hs-go-to.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSGoTo; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HSGoTo = /*#__PURE__*/function () {\n  function HSGoTo(elem, settings) {\n    _classCallCheck(this, HSGoTo);\n\n    this.elem = elem;\n    this.defaults = {\n      pageContainerSelector: 'html, body',\n      targetSelector: null,\n      compensationSelector: null,\n      animationInit: 'animated',\n      animationIn: 'fadeInUp',\n      animationOut: 'fadeOutDown',\n      duration: 800,\n      offsetTop: 0,\n      position: {\n        init: null,\n        hide: null,\n        show: null\n      },\n      isReferencedToOtherPage: null,\n      preventEventClass: 'hs-go-to-prevent-event'\n    };\n    this.settings = settings;\n  }\n\n  _createClass(HSGoTo, [{\n    key: \"init\",\n    value: function init() {\n      var context = this,\n          $el = context.elem,\n          dataSettings = $el.attr('data-hs-go-to-options') ? JSON.parse($el.attr('data-hs-go-to-options')) : {},\n          options = Object.assign({}, context.defaults, dataSettings, context.settings);\n\n      options.targetOffsetTop = function () {\n        if ($(options.compensationSelector).length) {\n          return $(options.targetSelector) ? $(options.targetSelector).offset().top - $(options.compensationSelector).outerHeight() : 0;\n        } else {\n          return $(options.targetSelector).length ? $(options.targetSelector).offset().top : 0;\n        }\n      };\n\n      context._prepareObject($el, options); // Set Position\n\n\n      if (options.position) {\n        context._setPosition($el, options.position.init);\n      } // Click Events\n\n\n      $el.on('click', function (e) {\n        context._clickEvents($el, options, e);\n      }); // Scroll Events\n\n      if (options.animationIn && options.animationOut) {\n        $(window).on('scroll', function () {\n          context._scrollEvents($el, options);\n        });\n      }\n    }\n  }, {\n    key: \"_prepareObject\",\n    value: function _prepareObject(el, params) {\n      var options = params;\n\n      if (params.animationIn && params.animationOut) {\n        if (navigator.userAgent.match('MSIE 10.0;')) {\n          $('html').addClass('ie10');\n        }\n\n        el.addClass(\"\".concat(options.animationInit, \" \").concat(options.animationOut, \" \").concat(options.preventEventClass));\n      }\n    }\n  }, {\n    key: \"_setPosition\",\n    value: function _setPosition(el, params) {\n      var options = params;\n      el.css(options);\n    }\n  }, {\n    key: \"_clickEvents\",\n    value: function _clickEvents(el, params, event) {\n      var options = params;\n\n      if (!options.isReferencedToOtherPage) {\n        if (event) {\n          event.preventDefault();\n        }\n\n        $(options.pageContainerSelector).stop().animate({\n          scrollTop: options.targetOffsetTop()\n        }, options.duration);\n      }\n    }\n  }, {\n    key: \"_scrollEvents\",\n    value: function _scrollEvents(el, params) {\n      var options = params;\n      el.css('visibility', '');\n\n      if ($(window).scrollTop() >= options.offsetTop) {\n        if (options.position.show) {\n          el.css(options.position.show);\n        }\n\n        el.removeClass(options.animationOut).addClass(options.animationIn);\n      } else {\n        if (options.position.hide) {\n          el.css(options.position.hide);\n        }\n\n        el.removeClass(options.animationIn).addClass(options.animationOut);\n      }\n    }\n  }]);\n\n  return HSGoTo;\n}();\n\n\n\n//# sourceURL=webpack://HSGoTo/./src/js/hs-go-to.js?"
                    );
                },
            }),
            (e = {}),
            (f.m = d),
            (f.c = e),
            (f.d = function (e, t, n) {
                f.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (f.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (f.t = function (e, t) {
                if ((1 & t && (e = f(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if ((f.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var i in e)
                        f.d(
                            n,
                            i,
                            function (t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return n;
            }),
            (f.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return f.d(t, "a", t), t;
            }),
            (f.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (f.p = ""),
            f((f.s = "./src/js/hs-go-to.js")).default
        );
        function f(t) {
            if (e[t]) return e[t].exports;
            var n = (e[t] = { i: t, l: !1, exports: {} });
            return d[t].call(n.exports, n, n.exports, f), (n.l = !0), n.exports;
        }
        var d, e;
    }),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.HSUnfold = t()) : (e.HSUnfold = t());
    })(window, function () {
        return (
            (d = {
                "./src/js/hs-unfold.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSUnfold; });\n/* harmony import */ var _methods_smart_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/smart-position */ \"./src/js/methods/smart-position.js\");\n/* harmony import */ var _methods_close_element_with_specific_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/close-element-with-specific-effect */ \"./src/js/methods/close-element-with-specific-effect.js\");\n/* harmony import */ var _modes_simple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modes/simple */ \"./src/js/modes/simple.js\");\n/* harmony import */ var _methods_simple_show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/simple-show */ \"./src/js/methods/simple-show.js\");\n/* harmony import */ var _modes_css_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modes/css-animation */ \"./src/js/modes/css-animation.js\");\n/* harmony import */ var _methods_css_animation_show__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./methods/css-animation-show */ \"./src/js/methods/css-animation-show.js\");\n/* harmony import */ var _modes_slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modes/slide */ \"./src/js/modes/slide.js\");\n/* harmony import */ var _methods_slide_show__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./methods/slide-show */ \"./src/js/methods/slide-show.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n\nvar HSUnfold = /*#__PURE__*/function () {\n  function HSUnfold(elem, settings) {\n    _classCallCheck(this, HSUnfold);\n\n    this.elem = elem;\n    this.defaults = {\n      event: 'click',\n      type: 'simple',\n      duration: 300,\n      delay: 350,\n      easing: 'linear',\n      animationIn: 'slideInUp',\n      animationOut: 'fadeOut',\n      hideOnScroll: false,\n      hasOverlay: false,\n      smartPositionOff: false,\n      smartPositionOffEl: false,\n      isFullWindow: false,\n      wrapperSelector: '.hs-unfold',\n      contentSelector: '.hs-unfold-content',\n      invokerSelector: '.js-hs-unfold-invoker',\n      invokerActiveClass: '.hs-active',\n      overlayClass: '.hs-unfold-overlay',\n      overlayStyles: {},\n      initializedClass: '.hs-unfold-content-initialized',\n      hiddenClass: '.hs-unfold-hidden',\n      simpleEffectClass: '.hs-unfold-simple',\n      cssAnimationClass: '.hs-unfold-css-animation',\n      cssAnimatedClass: '.animated',\n      slideEffectClass: '.hs-unfold-jquery-slide',\n      reverseClass: '.hs-unfold-reverse-y',\n      unfoldTimeOut: null,\n      afterOpen: function afterOpen() {},\n      afterClose: function afterClose() {}\n    };\n    this.settings = settings;\n  }\n\n  _createClass(HSUnfold, [{\n    key: \"init\",\n    value: function init() {\n      var context = this; // Keycodes\n\n      var ESC_KEYCODE = 27,\n          TAB_KEYCODE = 9,\n          ENTER_KEYCODE = 13,\n          SPACE_KEYCODE = 32,\n          ARROW_UP_KEYCODE = 38,\n          ARROW_DOWN_KEYCODE = 40,\n          ARROW_RIGHT_KEYCODE = 39,\n          ARROW_LEFT_KEYCODE = 37; // Prevent scroll\n\n      function preventScroll(keycode) {\n        return function (e) {\n          if (e.which === keycode) {\n            e.preventDefault();\n          }\n        };\n      } // Get Item Settings\n\n\n      function getItemSettings(el) {\n        var $el = el,\n            dataSettings = $el.attr('data-hs-unfold-options') ? JSON.parse($el.attr('data-hs-unfold-options')) : {};\n        var options = Object.assign({}, context.defaults, context.settings, dataSettings);\n        return options;\n      } // Init Unfold\n\n\n      $(this.elem).each(function () {\n        context.UnfoldItem($(this));\n      }); // *****\n      // Start: ACCESSIBILITY\n      // *****\n\n      var myPreventScrollSpace = preventScroll(SPACE_KEYCODE),\n          myPreventScrollDown = preventScroll(ARROW_DOWN_KEYCODE),\n          myPreventScrollUp = preventScroll(ARROW_UP_KEYCODE);\n      var $items, index, itemSettings;\n      $(document).on('keyup', '[data-hs-unfold-invoker], [data-hs-unfold-content]', function (e) {\n        if (e.which !== ESC_KEYCODE && e.which !== TAB_KEYCODE && e.which !== ENTER_KEYCODE && e.which !== ARROW_UP_KEYCODE && e.which !== ARROW_DOWN_KEYCODE || _typeof($(e.target).attr('data-hs-unfold-invoker')) == ( true ? \"undefined\" : undefined)) {\n          return;\n        } //\n        // Start: PREVENT SCROLL\n        //\n\n\n        e.preventDefault();\n        e.stopPropagation();\n        window.addEventListener('keydown', myPreventScrollSpace, false);\n        window.addEventListener('keydown', myPreventScrollUp, false);\n        window.addEventListener('keydown', myPreventScrollDown, false); //\n        // End: PREVENT SCROLL\n        //\n\n        if (_typeof($(e.target).attr('data-hs-unfold-invoker')) !== ( true ? \"undefined\" : undefined) && $(e.target).attr('data-hs-unfold-invoker') !== false) {\n          itemSettings = getItemSettings($(e.target));\n          $items = [].slice.call($(itemSettings.target).find('a, button, input, select, textarea')).filter(function (item) {\n            return $(item).is(':visible');\n          });\n        }\n\n        index = $items.indexOf(e.target); //\n        // End: HAS ITEMS\n        //\n        // Up\n\n        if ($items.length > 0 && e.which === ARROW_UP_KEYCODE && index > 0) {\n          index--;\n        } // Down\n\n\n        if ($items.length > 0 && e.which === ARROW_DOWN_KEYCODE && index < $items.length - 1) {\n          index++;\n        } // Open Dropdown\n\n\n        if ($items.length <= 0 && (e.which === ARROW_DOWN_KEYCODE || e.which === ARROW_UP_KEYCODE || e.which === SPACE_KEYCODE || e.which === ENTER_KEYCODE)) {\n          if (!$(\"\".concat(itemSettings.target, \":visible\")).length) {\n            $(e.target).addClass(itemSettings.invokerActiveClass.slice(1));\n\n            if (itemSettings.type === 'css-animation') {\n              Object(_methods_css_animation_show__WEBPACK_IMPORTED_MODULE_5__[\"default\"])($(itemSettings.target), itemSettings);\n            } else if (itemSettings.type === 'jquery-slide') {\n              Object(_methods_slide_show__WEBPACK_IMPORTED_MODULE_7__[\"default\"])($(itemSettings.target), itemSettings, function () {});\n            } else {\n              Object(_methods_simple_show__WEBPACK_IMPORTED_MODULE_3__[\"default\"])($(itemSettings.target), itemSettings);\n            }\n          } else if ($(\"\".concat(itemSettings.target, \":visible\")).length) {\n            $($(itemSettings.target).find('a')[0]).focus();\n            return;\n          }\n        } // Close Self\n\n\n        if (e.which === ESC_KEYCODE) {\n          var _$target = $(\"\".concat(itemSettings.contentSelector, \":not(\").concat(itemSettings.hiddenClass, \")\")); // $(itemSettings.invokerActiveClass).focus();\n\n\n          Object(_methods_close_element_with_specific_effect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_$target, itemSettings, _$target.data('hs-unfold-content-animation-in'), _$target.data('hs-unfold-content-animation-out'));\n          return;\n        } // Close All\n\n\n        if (e.which === TAB_KEYCODE && $(e.target).closest('[data-hs-unfold-content]').length === 0) {\n          var $invoker = $('[data-hs-unfold-invoker].hs-active'),\n              $target = $('[data-hs-unfold-content]:visible'),\n              openedItemSettings = getItemSettings($invoker);\n          $invoker.removeClass('hs-active');\n          Object(_methods_close_element_with_specific_effect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($target, openedItemSettings, $target.data('hs-unfold-content-animation-in'), $target.data('hs-unfold-content-animation-out'));\n          return;\n        } //\n        // End: HAS ITEMS\n        //\n\n\n        $($items[index]).focus();\n      });\n      $(document).on('keyup', function (e) {\n        var $invoker, $target, openedItemSettings; // Close All\n\n        if (e.which === TAB_KEYCODE && $(e.target).closest('[data-hs-unfold-content]').length === 0) {\n          $invoker = $('[data-hs-unfold-invoker].hs-active');\n          $target = $('[data-hs-unfold-content]:visible');\n          openedItemSettings = getItemSettings($invoker);\n          $invoker.removeClass('hs-active');\n          Object(_methods_close_element_with_specific_effect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($target, openedItemSettings, $target.data('hs-unfold-content-animation-in'), $target.data('hs-unfold-content-animation-out'));\n        } // Close Self\n\n\n        if (e.which === ESC_KEYCODE) {\n          $invoker = $('[data-hs-unfold-invoker].hs-active');\n          $target = $('[data-hs-unfold-content]:visible');\n          openedItemSettings = getItemSettings($invoker);\n          $invoker.removeClass('hs-active');\n          Object(_methods_close_element_with_specific_effect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($target, openedItemSettings, $target.data('hs-unfold-content-animation-in'), $target.data('hs-unfold-content-animation-out'));\n        }\n      }); // *****\n      // End: ACCESSIBILITY\n      // *****\n    }\n  }, {\n    key: \"UnfoldItem\",\n    value: function UnfoldItem(el) {\n      var context = this,\n          $el = el,\n          itemDataSettings = el.attr('data-hs-unfold-options') ? JSON.parse(el.attr('data-hs-unfold-options')) : {};\n      var options = Object.assign({}, context.defaults, context.settings, itemDataSettings),\n          originalEvent = options.event;\n\n      context._prepareObjects($el, $(options.target), options);\n\n      function closeFunc() {\n        $(options.contentSelector).not($(options.target)).not($(options.target).parents(options.contentSelector)).each(function () {\n          $(options.invokerSelector).removeClass(options.invokerActiveClass.slice(1));\n          Object(_methods_close_element_with_specific_effect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($(this), options, $(this).attr('data-hs-unfold-content-animation-in'), $(this).attr('data-hs-unfold-content-animation-out'));\n        });\n      }\n\n      if (window.navigator.userAgent.indexOf('Mobile') !== -1) {\n        options.event = 'click';\n      } else {\n        options.event = originalEvent;\n      }\n\n      $el.on(options.event === 'hover' ? 'mouseenter' : 'click', closeFunc);\n      $(window).on('resize', function () {\n        if (window.navigator.userAgent.indexOf('Mobile') !== -1) {\n          options.event = 'click';\n        } else {\n          options.event = originalEvent;\n        }\n\n        $el[0].addEventListener(options.event === 'hover' ? 'mouseenter' : 'click', closeFunc);\n      });\n\n      if (options.type === 'css-animation') {\n        Object(_modes_css_animation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])($el, options, options.animationOut);\n      } else if (options.type === 'jquery-slide') {\n        Object(_modes_slide__WEBPACK_IMPORTED_MODULE_6__[\"default\"])($el, options);\n      } else {\n        Object(_modes_simple__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($el, options);\n      } // Document Events\n\n\n      $(window).on('click', function (e) {\n        var targetClass = \"\".concat(options.contentSelector, \":not(\").concat(options.hiddenClass, \")\"),\n            $target = $(targetClass);\n\n        if ($(e.target).closest(options.contentSelector).length === 0 && $(e.target).closest(options.invokerSelector).length === 0 && $target.length !== 0) {\n          $el.removeClass(options.invokerActiveClass.slice(1));\n          Object(_methods_close_element_with_specific_effect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($target, options, $target.data('hs-unfold-content-animation-in'), $target.data('hs-unfold-content-animation-out'));\n        } else if ($(e.target).closest(options.contentSelector).length !== 0 && $(e.target).closest(options.contentSelector).find(options.contentSelector).length !== 0 && $(e.target).closest(options.invokerSelector).length === 0 && !options.hasOverlay) {\n          Object(_methods_close_element_with_specific_effect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($(e.target).closest(options.contentSelector).find(targetClass), options, $(e.target).closest(options.contentSelector).find(targetClass).data('hs-unfold-content-animation-in'), $(e.target).closest(options.contentSelector).find(targetClass).data('hs-unfold-content-animation-out'));\n        }\n      }); // Resize and Scroll Events\n\n      $(window).on('resize scroll', function () {\n        if (!options.smartPositionOff) {\n          Object(_methods_smart_position__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($(options.target), $el, options);\n        }\n      });\n\n      if (options.hideOnScroll) {\n        $(window).on('scroll', function () {\n          $el.removeClass(options.invokerActiveClass.slice(1));\n          Object(_methods_close_element_with_specific_effect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($(options.target), options, options.animationIn, options.animationOut);\n        });\n      }\n    }\n  }, {\n    key: \"_prepareObjects\",\n    value: function _prepareObjects(el, target, config) {\n      el.addClass(config.invokerSelector.slice(1));\n      el.attr('data-hs-unfold-target', config.target);\n      el.attr('data-hs-unfold-invoker', '');\n      target.attr('data-hs-target-height', target.outerHeight());\n      target.attr('data-hs-unfold-content', '');\n      target.addClass(\"\".concat(config.hiddenClass.slice(1), \" \").concat(config.initializedClass.slice(1)));\n\n      if (config.hasOverlay && $(config.overlayClass).length === 0) {\n        $('body').append($(\"<div class=\\\"\".concat(config.overlayClass.slice(1), \"\\\"></div>\")).css(config.overlayStyles));\n      }\n\n      if (config.type === 'css-animation') {\n        target.attr('data-hs-unfold-content-animation-in', config.animationIn);\n        target.attr('data-hs-unfold-content-animation-out', config.animationOut);\n      }\n    }\n  }]);\n\n  return HSUnfold;\n}();\n\n\n\n//# sourceURL=webpack://HSUnfold/./src/js/hs-unfold.js?"
                    );
                },
                "./src/js/methods/close-element-with-specific-effect.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return closeElementWithSpecificEffect; });\n/* harmony import */ var _methods_simple_hide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/simple-hide */ "./src/js/methods/simple-hide.js");\n/* harmony import */ var _css_animation_hide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-animation-hide */ "./src/js/methods/css-animation-hide.js");\n/* harmony import */ var _methods_slide_hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../methods/slide-hide */ "./src/js/methods/slide-hide.js");\n\n\n\nfunction closeElementWithSpecificEffect(el, config, cssAnimationShowEffect, cssAnimationHideEffect) {\n  if (el.hasClass(config.hiddenClass.slice(1))) return;\n\n  if (el.hasClass(config.cssAnimationClass.slice(1))) {\n    Object(_css_animation_hide__WEBPACK_IMPORTED_MODULE_1__["default"])(el, config, cssAnimationHideEffect);\n    el.on(\'animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend\', function (e) {\n      if (el.hasClass(cssAnimationHideEffect)) {\n        el.removeClass(cssAnimationHideEffect).addClass(config.hiddenClass.slice(1));\n        config.afterClose();\n      }\n\n      if (el.hasClass(cssAnimationShowEffect)) {\n        config.afterOpen();\n      }\n\n      e.preventDefault();\n      e.stopPropagation();\n    });\n  } else if (el.hasClass(config.slideEffectClass.slice(1))) {\n    Object(_methods_slide_hide__WEBPACK_IMPORTED_MODULE_2__["default"])(el, config, function () {});\n  } else {\n    Object(_methods_simple_hide__WEBPACK_IMPORTED_MODULE_0__["default"])(el, config);\n  }\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/close-element-with-specific-effect.js?'
                    );
                },
                "./src/js/methods/css-animation-hide.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cssAnimationHide; });\nfunction cssAnimationHide(target, config, effect) {\n  target.removeClass($(target).attr('data-hs-unfold-content-animation-in')).addClass(effect);\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/css-animation-hide.js?"
                    );
                },
                "./src/js/methods/css-animation-show.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cssAnimationShow; });\nfunction cssAnimationShow(target, config) {\n  if (config.cssAnimatedClass) {\n    target.removeClass("".concat(config.hiddenClass.slice(1), " ").concat(config.animationOut)).addClass(config.animationIn);\n  } else {\n    target.removeClass("".concat(config.hiddenClass.slice(1), " ").concat(config.animationOut));\n    setTimeout(function () {\n      target.addClass(config.animationIn);\n    });\n  }\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/css-animation-show.js?'
                    );
                },
                "./src/js/methods/simple-hide.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return simpleHide; });\nfunction simpleHide(target, config) {\n  target.addClass(config.hiddenClass.slice(1));\n\n  if (config.hasOverlay) {\n    $(config.overlayClass).hide();\n  }\n\n  config.afterClose();\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/simple-hide.js?'
                    );
                },
                "./src/js/methods/simple-show.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return simpleShow; });\nfunction simpleShow(target, config) {\n  target.removeClass(config.hiddenClass.slice(1));\n\n  if (config.hasOverlay) {\n    $(config.overlayClass).show();\n  }\n\n  config.afterOpen();\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/simple-show.js?'
                    );
                },
                "./src/js/methods/slide-hide.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideHide; });\nfunction slideHide(target, config, callback) {\n  target.slideUp({\n    duration: config.duration,\n    easing: config.easing,\n    complete: function complete() {\n      callback();\n      config.afterClose();\n      target.addClass(config.hiddenClass.slice(1));\n    }\n  });\n\n  if (config.hasOverlay) {\n    $(config.overlayClass).fadeOut(200);\n  }\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/slide-hide.js?'
                    );
                },
                "./src/js/methods/slide-show.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideShow; });\nfunction slideShow(target, config, callback) {\n  target.removeClass(config.hiddenClass.slice(1)).stop().slideDown({\n    duration: config.duration,\n    easing: config.easing,\n    complete: function complete() {\n      callback();\n      config.afterOpen();\n    }\n  });\n\n  if (config.hasOverlay) {\n    $(config.overlayClass).fadeIn(200);\n  }\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/slide-show.js?'
                    );
                },
                "./src/js/methods/smart-position.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return smartPosition; });\nfunction smartPosition(el, invoker, config) {\n  var $w = $(window);\n  var styles = getComputedStyle(el.get(0)),\n      direction = Math.abs(parseInt(styles.left, 10)) < 40 ? 'left' : 'right',\n      targetOuterGeometry = el.offset(),\n      invokerOffsetTop = invoker.offset().top - $(window).scrollTop(); // Horizontal Axis\n\n  if (direction === 'right') {\n    if (targetOuterGeometry.left < 0) {\n      el.css({\n        left: 'auto',\n        right: (parseInt(el.css('right'), 10) - (targetOuterGeometry.left - 10)) * -1\n      });\n    }\n  } else {\n    if (targetOuterGeometry.left + el.outerWidth() > $w.width()) {\n      el.css({\n        right: 'auto',\n        left: parseInt(el.css('left'), 10) - (targetOuterGeometry.left + el.outerWidth() + 10 - $w.width())\n      });\n    }\n  } // Vertical Axis\n\n\n  if (!config.smartPositionOffEl) {\n    if (invokerOffsetTop > $w.height() / 2 && el.data('hs-target-height') - invoker.offset().top < 0 && !config.isFullWindow) {\n      el.addClass(config.reverseClass.slice(1));\n    } else {\n      el.removeClass(config.reverseClass.slice(1));\n    }\n  } else {\n    var table = $(config.smartPositionOffEl),\n        invokerTableOffset = invoker.offset().top - table.offset().top;\n\n    if (invokerTableOffset > table.height() / 2 && el.data('hs-target-height') - invoker.offset().top < 0 && !config.isFullWindow) {\n      el.addClass(config.reverseClass.slice(1));\n    } else {\n      el.removeClass(config.reverseClass.slice(1));\n    }\n  }\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/smart-position.js?"
                    );
                },
                "./src/js/modes/css-animation.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cssAnimation; });\n/* harmony import */ var _methods_smart_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/smart-position */ \"./src/js/methods/smart-position.js\");\n/* harmony import */ var _methods_css_animation_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../methods/css-animation-show */ \"./src/js/methods/css-animation-show.js\");\n/* harmony import */ var _methods_css_animation_hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../methods/css-animation-hide */ \"./src/js/methods/css-animation-hide.js\");\n\n\n\nfunction cssAnimation(el, config, hideEffect) {\n  $(config.target).addClass(\"\".concat(config.cssAnimationClass.slice(1), \" \").concat(config.cssAnimatedClass ? config.cssAnimatedClass.slice(1) : '')).css('animation-duration', \"\".concat(config.duration, \"ms\"));\n  $(config.target).on('animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend', function (e) {\n    if ($(config.target).hasClass(config.animationOut)) {\n      $(config.target).removeClass(config.animationOut).addClass(config.hiddenClass.slice(1));\n      config.afterClose();\n    }\n\n    if ($(config.target).hasClass(config.animationIn)) {\n      config.afterOpen();\n    }\n\n    e.preventDefault();\n    e.stopPropagation();\n  });\n  $(config.target).on('animationstart webkitAnimationStart mozAnimationStart MSAnimationStart oanimationstart', function (e) {\n    if ($(config.target).hasClass(config.animationOut)) {\n      if (config.hasOverlay) {\n        $(config.overlayClass).fadeOut(200);\n      }\n    } else if ($(config.target).hasClass(config.animationIn)) {\n      if (config.hasOverlay) {\n        $(config.overlayClass).fadeIn(200);\n      }\n    }\n\n    e.preventDefault();\n    e.stopPropagation();\n  });\n\n  function mouseEnterFunc() {\n    if (config.unfoldTimeOut) {\n      clearTimeout(config.unfoldTimeOut);\n    }\n\n    el.addClass(config.invokerActiveClass.slice(1));\n    Object(_methods_css_animation_show__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($(config.target), config);\n\n    if (!config.smartPositionOff) {\n      Object(_methods_smart_position__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($(config.target), el, config);\n    }\n  }\n\n  function mouseLeaveFunc() {\n    config.unfoldTimeOut = setTimeout(function () {\n      el.removeClass(config.invokerActiveClass.slice(1));\n      Object(_methods_css_animation_hide__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($(config.target), config, hideEffect);\n    }, config.delay);\n  }\n\n  function clickFunc() {\n    if (!$(config.target).hasClass(config.hiddenClass.slice(1))) {\n      el.removeClass(config.invokerActiveClass.slice(1));\n      Object(_methods_css_animation_hide__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($(config.target), config, hideEffect);\n    } else {\n      el.addClass(config.invokerActiveClass.slice(1));\n      Object(_methods_css_animation_show__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($(config.target), config);\n\n      if (!config.smartPositionOff) {\n        Object(_methods_smart_position__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($(config.target), el, config);\n      }\n\n      if (config.hasOverlay) {\n        $(config.overlayClass).fadeIn(200);\n      }\n    }\n  }\n\n  if (config.event === 'hover') {\n    // Hover\n    $(window).on('resize', function () {\n      if (window.navigator.userAgent.indexOf('Mobile') !== -1) {\n        el.parent(config.wrapperSelector)[0].removeEventListener('mouseenter', mouseEnterFunc, false);\n        el.parent(config.wrapperSelector)[0].removeEventListener('mouseleave', mouseLeaveFunc, false);\n        el[0].addEventListener('click', clickFunc, false);\n      } else {\n        el[0].removeEventListener('click', clickFunc, false);\n        el.parent(config.wrapperSelector)[0].addEventListener('mouseenter', mouseEnterFunc, false);\n        el.parent(config.wrapperSelector)[0].addEventListener('mouseleave', mouseLeaveFunc, false);\n      }\n    }).trigger('resize');\n  } else {\n    // Click\n    el[0].addEventListener('click', clickFunc, false);\n  }\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/modes/css-animation.js?"
                    );
                },
                "./src/js/modes/simple.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return simple; });\n/* harmony import */ var _methods_smart_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/smart-position */ "./src/js/methods/smart-position.js");\n/* harmony import */ var _methods_simple_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../methods/simple-show */ "./src/js/methods/simple-show.js");\n/* harmony import */ var _methods_simple_hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../methods/simple-hide */ "./src/js/methods/simple-hide.js");\n\n\n\nfunction simple(el, config) {\n  $(config.target).addClass(config.simpleEffectClass.slice(1));\n\n  function clickFunc() {\n    if (!$(config.target).hasClass(config.hiddenClass.slice(1))) {\n      el.removeClass(config.invokerActiveClass.slice(1));\n      Object(_methods_simple_hide__WEBPACK_IMPORTED_MODULE_2__["default"])($(config.target), config);\n    } else {\n      el.addClass(config.invokerActiveClass.slice(1));\n      Object(_methods_simple_show__WEBPACK_IMPORTED_MODULE_1__["default"])($(config.target), config);\n\n      if (!config.smartPositionOff) {\n        Object(_methods_smart_position__WEBPACK_IMPORTED_MODULE_0__["default"])($(config.target), el, config);\n      }\n    }\n  }\n\n  function mouseEnterFunc() {\n    el.addClass(config.invokerActiveClass.slice(1));\n    Object(_methods_simple_show__WEBPACK_IMPORTED_MODULE_1__["default"])($(config.target), config);\n\n    if (!config.smartPositionOff) {\n      Object(_methods_smart_position__WEBPACK_IMPORTED_MODULE_0__["default"])($(config.target), el, config);\n    }\n  }\n\n  function mouseLeaveFunc() {\n    el.removeClass(config.invokerActiveClass.slice(1));\n    Object(_methods_simple_hide__WEBPACK_IMPORTED_MODULE_2__["default"])($(config.target), config);\n  }\n\n  function initSimple() {\n    if (window.navigator.userAgent.indexOf(\'Mobile\') !== -1) {\n      el[0].addEventListener(\'click\', clickFunc);\n    } else {\n      if (config.event === \'hover\') {\n        // Hover\n        el.parent(config.wrapperSelector)[0].addEventListener(\'mouseenter\', mouseEnterFunc);\n        el.parent(config.wrapperSelector)[0].addEventListener(\'mouseleave\', mouseLeaveFunc);\n      } else {\n        // Click\n        el[0].addEventListener(\'click\', clickFunc);\n      }\n    }\n  }\n\n  $(window).on(\'resize\', function () {\n    initSimple();\n  });\n  initSimple();\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/modes/simple.js?'
                    );
                },
                "./src/js/modes/slide.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slide; });\n/* harmony import */ var _methods_smart_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/smart-position */ "./src/js/methods/smart-position.js");\n/* harmony import */ var _methods_slide_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../methods/slide-show */ "./src/js/methods/slide-show.js");\n/* harmony import */ var _methods_slide_hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../methods/slide-hide */ "./src/js/methods/slide-hide.js");\n/* harmony import */ var _methods_simple_hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../methods/simple-hide */ "./src/js/methods/simple-hide.js");\n/* harmony import */ var _methods_simple_show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../methods/simple-show */ "./src/js/methods/simple-show.js");\n\n\n\n\n\nfunction slide(el, config) {\n  $(config.target).addClass(config.slideEffectClass.slice(1)).css(\'display\', \'none\');\n\n  function clickFunc() {\n    if (!$(config.target).hasClass(config.hiddenClass.slice(1))) {\n      Object(_methods_slide_hide__WEBPACK_IMPORTED_MODULE_2__["default"])($(config.target), config, function () {\n        el.removeClass(config.invokerActiveClass.slice(1));\n      });\n    } else {\n      Object(_methods_slide_show__WEBPACK_IMPORTED_MODULE_1__["default"])($(config.target), config, function () {\n        el.addClass(config.invokerActiveClass.slice(1));\n      });\n\n      if (!config.smartPositionOff) {\n        Object(_methods_smart_position__WEBPACK_IMPORTED_MODULE_0__["default"])($(config.target), el, config);\n      }\n    }\n  }\n\n  function mouseEnterFunc() {\n    Object(_methods_slide_show__WEBPACK_IMPORTED_MODULE_1__["default"])($(config.target), config, function () {\n      el.addClass(config.invokerActiveClass.slice(1));\n    });\n\n    if (!config.smartPositionOff) {\n      Object(_methods_smart_position__WEBPACK_IMPORTED_MODULE_0__["default"])($(config.target), el, config);\n    }\n  }\n\n  function mouseLeaveFunc() {\n    Object(_methods_slide_hide__WEBPACK_IMPORTED_MODULE_2__["default"])($(config.target), config, function () {\n      el.removeClass(config.invokerActiveClass.slice(1));\n    });\n  }\n\n  function initSlide() {\n    if (window.navigator.userAgent.indexOf(\'Mobile\') !== -1) {\n      el[0].addEventListener(\'click\', clickFunc);\n    } else {\n      if (config.event === \'hover\') {\n        // Hover\n        el.parent(config.wrapperSelector)[0].addEventListener(\'mouseenter\', mouseEnterFunc);\n        el.parent(config.wrapperSelector)[0].addEventListener(\'mouseleave\', mouseLeaveFunc);\n      } else {\n        // Click\n        el[0].addEventListener(\'click\', clickFunc);\n      }\n    }\n  }\n\n  $(window).on(\'resize\', function () {\n    initSlide();\n  });\n  initSlide();\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/modes/slide.js?'
                    );
                },
            }),
            (e = {}),
            (f.m = d),
            (f.c = e),
            (f.d = function (e, t, n) {
                f.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (f.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (f.t = function (e, t) {
                if ((1 & t && (e = f(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if ((f.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var i in e)
                        f.d(
                            n,
                            i,
                            function (t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return n;
            }),
            (f.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return f.d(t, "a", t), t;
            }),
            (f.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (f.p = ""),
            f((f.s = "./src/js/hs-unfold.js")).default
        );
        function f(t) {
            if (e[t]) return e[t].exports;
            var n = (e[t] = { i: t, l: !1, exports: {} });
            return d[t].call(n.exports, n, n.exports, f), (n.l = !0), n.exports;
        }
        var d, e;
    }),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.HSMegaMenu = t()) : (e.HSMegaMenu = t());
    })(window, function () {
        return (
            (d = {
                "./src/js/hs-mega-menu.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSMegaMenu; });\n/* harmony import */ var _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/object-assign-deep */ "./src/js/methods/object-assign-deep.js");\n/* harmony import */ var _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _methods_get_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/get-type */ "./src/js/methods/get-type.js");\n/* harmony import */ var _methods_smart_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/smart-position */ "./src/js/methods/smart-position.js");\n/* harmony import */ var _methods_desktop_css_animation_enable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/desktop-css-animation-enable */ "./src/js/methods/desktop-css-animation-enable.js");\n/* harmony import */ var _methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/desktop-mouseenter-event-listener */ "./src/js/methods/desktop-mouseenter-event-listener.js");\n/* harmony import */ var _methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./methods/desktop-mouseleave-event-listener */ "./src/js/methods/desktop-mouseleave-event-listener.js");\n/* harmony import */ var _methods_desktop_click_event_listener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./methods/desktop-click-event-listener */ "./src/js/methods/desktop-click-event-listener.js");\n/* harmony import */ var _methods_mobile_click_event_listener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./methods/mobile-click-event-listener */ "./src/js/methods/mobile-click-event-listener.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSMegaMenu Plugin\n* @version: 2.0.0 (Mon, 25 Nov 2019)\n* @requires: jQuery v3.0 or later\n* @author: HtmlStream\n* @event-namespace: .HSMegaMenu\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\n\n\n\n\n\n\n\n\n\nvar HSMegaMenu = /*#__PURE__*/function () {\n  function HSMegaMenu(el, settings) {\n    _classCallCheck(this, HSMegaMenu);\n\n    this.el = el;\n    this.defaults = {\n      eventType: \'hover\',\n      direction: \'horizontal\',\n      breakpoint: \'lg\',\n      rtl: false,\n      isMenuOpened: false,\n      sideBarRatio: 1 / 4,\n      pageContainer: $(\'body\'),\n      mobileSpeed: 400,\n      duration: 300,\n      delay: 0,\n      itemOptions: {\n        megaMenuTimeOut: null,\n        desktop: {\n          animation: \'animated\',\n          animationIn: \'slideInUp\',\n          animationOut: false,\n          position: null,\n          maxWidth: null\n        }\n      },\n      classMap: {\n        rtl: \'.hs-rtl\',\n        reversed: \'.hs-reversed\',\n        initialized: \'.hs-menu-initialized\',\n        mobileState: \'.hs-mobile-state\',\n        invoker: \'.hs-mega-menu-invoker\',\n        subMenu: \'.hs-sub-menu\',\n        hasSubMenu: \'.hs-has-sub-menu\',\n        hasSubMenuActive: \'.hs-sub-menu-opened\',\n        megaMenu: \'.hs-mega-menu\',\n        hasMegaMenu: \'.hs-has-mega-menu\',\n        hasMegaMenuActive: \'.hs-mega-menu-opened\'\n      }\n    };\n    this.settings = settings;\n    this.state = null;\n  }\n\n  _createClass(HSMegaMenu, [{\n    key: "init",\n    value: function init() {\n      var context = this,\n          $el = $(context.el),\n          defaults = Object.assign({}, context.defaults),\n          dataSettings = $el.attr(\'data-hs-mega-menu-options\') ? JSON.parse($el.attr(\'data-hs-mega-menu-options\')) : {};\n      var settings = {};\n      settings = _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0___default()({}, defaults, settings, dataSettings, context.settings); // Resolution list\n\n      var resolutionsList = {\n        xs: 0,\n        sm: 576,\n        md: 768,\n        lg: 992,\n        xl: 1200\n      }; // Keycodes\n\n      var ESC_KEYCODE = 27,\n          TAB_KEYCODE = 9,\n          ENTER_KEYCODE = 13,\n          SPACE_KEYCODE = 32,\n          ARROW_UP_KEYCODE = 38,\n          ARROW_DOWN_KEYCODE = 40,\n          ARROW_RIGHT_KEYCODE = 39,\n          ARROW_LEFT_KEYCODE = 37; // Prevent scroll\n\n      function preventScroll(keycode) {\n        return function (e) {\n          if (e.which === keycode) {\n            e.preventDefault();\n          }\n        };\n      } // Get Item Settings\n\n\n      function getItemSettings(el) {\n        var $el = el,\n            dataSettings = $el.attr(\'data-hs-mega-menu-item-options\') ? JSON.parse($el.attr(\'data-hs-mega-menu-item-options\')) : {},\n            itemSettings = settings.itemOptions;\n        itemSettings = $.extend(true, itemSettings, dataSettings);\n\n        itemSettings.activeItemClass = function () {\n          return Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__["default"])($el, settings) === \'mega-menu\' ? settings.classMap.hasMegaMenuActive : settings.classMap.hasSubMenuActive;\n        };\n\n        return itemSettings;\n      } // State Detection\n\n\n      $(window).on(\'resize\', function () {\n        if (window.innerWidth < resolutionsList[settings.breakpoint]) {\n          context.state = \'mobile\';\n        } else {\n          context.state = \'desktop\';\n        }\n      }).trigger(\'resize\'); // Set RTL\n\n      if (settings.rtl) {\n        $el.addClass(settings.classMap.rtl.slice(1));\n      } // Init Menu Items\n\n\n      $el.find("".concat(settings.classMap.hasMegaMenu, ", ").concat(settings.classMap.hasSubMenu)).each(function () {\n        context.MegaMenuItem($(this), $(this).children(settings.classMap[Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__["default"])($(this), settings) === \'mega-menu\' ? \'megaMenu\' : \'subMenu\']), settings);\n      }); // Add Initialized Classes\n\n      $el.addClass("".concat(settings.classMap.initialized.slice(1), " hs-menu-").concat(settings.direction)); // *****\n      // Start: ACCESSIBILITY\n      // *****\n\n      var myPreventScrollSpace = preventScroll(SPACE_KEYCODE),\n          myPreventScrollDown = preventScroll(ARROW_DOWN_KEYCODE),\n          myPreventScrollUp = preventScroll(ARROW_UP_KEYCODE);\n      var $items,\n          index,\n          state = null;\n      $(document).on(\'keyup\', function () {\n        window.removeEventListener(\'keydown\', myPreventScrollSpace, false);\n        window.removeEventListener(\'keydown\', myPreventScrollUp, false);\n        window.removeEventListener(\'keydown\', myPreventScrollDown, false);\n      });\n      $(document).on(\'keyup\', "".concat(settings.classMap.hasMegaMenu, ", ").concat(settings.classMap.hasSubMenu), function (e) {\n        //\n        // Start: PREVENT SCROLL\n        //\n        e.preventDefault();\n        e.stopPropagation();\n        window.addEventListener(\'keydown\', myPreventScrollSpace, false);\n        window.addEventListener(\'keydown\', myPreventScrollUp, false);\n        window.addEventListener(\'keydown\', myPreventScrollDown, false); //\n        // End: PREVENT SCROLL\n        //\n        //\n        // Start: ELEMENT DETECTION\n        //\n\n        if ($(e.target).hasClass(settings.classMap.invoker.slice(1)) && !$(e.target).closest("".concat(settings.classMap.subMenu, ", ").concat(settings.classMap.megaMenu)).length) {\n          // console.log(\'Top level\');\n          if (state !== \'topLevel\') {\n            state = \'topLevel\';\n          }\n\n          $items = [].slice.call($(e.target).parent().parent().find(settings.classMap.invoker)).filter(function (item) {\n            if (!$(item).closest("".concat(settings.classMap.subMenu, ", ").concat(settings.classMap.megaMenu)).length) {\n              return $(item).is(\':visible\');\n            }\n          });\n        } else if ($(e.target).closest("".concat(settings.classMap.subMenu, ", ").concat(settings.classMap.megaMenu)).length && $(e.target).siblings("".concat(settings.classMap.subMenu, ", ").concat(settings.classMap.megaMenu)).length) {\n          // console.log(\'Has submenu and not top level\');\n          if (state !== \'hasSubmenu\') {\n            state = \'hasSubmenu\';\n          }\n\n          $items = [].slice.call($(e.target).parent().parent().find(settings.classMap.invoker)).filter(function (item) {\n            return $(item).is(\':visible\');\n          });\n        } else {\n          // console.log(\'Just element\');\n          if (state !== \'simple\') {\n            state = \'simple\';\n          }\n\n          $items = [].slice.call($(e.target).closest("".concat(settings.classMap.subMenu, ", ").concat(settings.classMap.megaMenu)).find(\'a, button\')).filter(function (item) {\n            return $(item).is(\':visible\');\n          });\n        } //\n        // End: ELEMENT DETECTION\n        //\n\n\n        index = $items.indexOf(e.target); //\n        // Start: TOP LEVEL\n        //\n        // Left\n\n        if (state === \'topLevel\' && e.which === ARROW_LEFT_KEYCODE && index > 0) {\n          index--;\n        } // Right\n\n\n        if (state === \'topLevel\' && e.which === ARROW_RIGHT_KEYCODE && index < $items.length - 1) {\n          index++;\n        } // Open Sub\n\n\n        if (state === \'topLevel\' && (e.which === ARROW_DOWN_KEYCODE || e.which === SPACE_KEYCODE || e.which === ENTER_KEYCODE)) {\n          if (!$(e.target).siblings("".concat(settings.classMap.megaMenu, ":visible, ").concat(settings.classMap.subMenu, ":visible")).length) {\n            Object(_methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__["default"])($(e.target).parent(), $(e.target).siblings(), settings, getItemSettings($(e.target).parent()))();\n          } else if ($(e.target).siblings("".concat(settings.classMap.megaMenu, ":visible, ").concat(settings.classMap.subMenu, ":visible")).length) {\n            $($(e.target).siblings("".concat(settings.classMap.megaMenu, ":visible, ").concat(settings.classMap.subMenu, ":visible")).find(\'a\')[0]).focus();\n            return;\n          }\n        } // Close Siblings\n\n\n        if (state === \'topLevel\' && (e.which === TAB_KEYCODE || e.which === ARROW_RIGHT_KEYCODE || e.which === ARROW_LEFT_KEYCODE) && $(e.target).closest("".concat(settings.classMap.hasMegaMenu, ", ").concat(settings.classMap.hasSubMenu)).parent().find("".concat(settings.classMap.megaMenu, ":visible, ").concat(settings.classMap.subMenu, ":visible")).length) {\n          Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__["default"])($(e.target).closest("".concat(settings.classMap.hasMegaMenu, ", ").concat(settings.classMap.hasSubMenu)), $(e.target).closest("".concat(settings.classMap.hasMegaMenu, ", ").concat(settings.classMap.hasSubMenu)).parent().find("".concat(settings.classMap.hasMegaMenuActive, " > ").concat(settings.classMap.megaMenu, ", ").concat(settings.classMap.hasSubMenuActive, " > ").concat(settings.classMap.subMenu)), settings, getItemSettings($(e.target).closest("".concat(settings.classMap.hasMegaMenu, ", ").concat(settings.classMap.hasSubMenu))))();\n        } //\n        // End: TOP LEVEL\n        //\n        //\n        // Start: HAS SUB-MENU BUT NOT TOP LEVEL\n        //\n        // Up\n\n\n        if (state === \'hasSubmenu\' && e.which === ARROW_UP_KEYCODE && index > 0) {\n          index--;\n        } // Down\n\n\n        if (state === \'hasSubmenu\' && e.which === ARROW_DOWN_KEYCODE && index < $items.length - 1) {\n          index++;\n        } // Open Sub\n\n\n        if (state === \'hasSubmenu\' && (e.which === ARROW_LEFT_KEYCODE || e.which === ARROW_RIGHT_KEYCODE || e.which === SPACE_KEYCODE || e.which === ENTER_KEYCODE)) {\n          if (!$(e.target).siblings("".concat(settings.classMap.megaMenu, ":visible, ").concat(settings.classMap.subMenu, ":visible")).length) {\n            Object(_methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__["default"])($(e.target).parent(), $(e.target).siblings(), settings, getItemSettings($(e.target).parent()))();\n          } else if ($(e.target).siblings("".concat(settings.classMap.megaMenu, ":visible, ").concat(settings.classMap.subMenu, ":visible")).length) {\n            $($(e.target).siblings("".concat(settings.classMap.megaMenu, ":visible, ").concat(settings.classMap.subMenu, ":visible")).find(\'a\')[0]).focus();\n            return;\n          }\n        } // Close Siblings\n\n\n        if (state === \'hasSubmenu\' && (e.which === TAB_KEYCODE || e.which === ARROW_DOWN_KEYCODE || e.which === ARROW_UP_KEYCODE) && $(e.target).closest("".concat(settings.classMap.hasMegaMenu, ", ").concat(settings.classMap.hasSubMenu)).parent().find("".concat(settings.classMap.megaMenu, ":visible, ").concat(settings.classMap.subMenu, ":visible")).length) {\n          Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__["default"])($(e.target).closest("".concat(settings.classMap.hasMegaMenu, ", ").concat(settings.classMap.hasSubMenu)), $(e.target).closest("".concat(settings.classMap.hasMegaMenu, ", ").concat(settings.classMap.hasSubMenu)).parent().find("".concat(settings.classMap.hasMegaMenuActive, " > ").concat(settings.classMap.megaMenu, ", ").concat(settings.classMap.hasSubMenuActive, " > ").concat(settings.classMap.subMenu)), settings, getItemSettings($(e.target).closest("".concat(settings.classMap.hasMegaMenu, ", ").concat(settings.classMap.hasSubMenu))))();\n        } //\n        // End: HAS SUB-MENU BUT NOT TOP LEVEL\n        //\n        //\n        // Start: SIMPLE\n        //\n        // Left, Up\n\n\n        if (state === \'simple\' && e.which === ARROW_UP_KEYCODE && index > 0) {\n          index--;\n        } // Right, Down\n\n\n        if (state === \'simple\' && e.which === ARROW_DOWN_KEYCODE && index < $items.length - 1) {\n          index++;\n        } // Close Siblings\n\n\n        if (state === \'simple\' && (e.which === ARROW_RIGHT_KEYCODE || e.which === ARROW_LEFT_KEYCODE) && $(e.target).closest(settings.classMap.hasSubMenu).parent().find(settings.classMap.subMenu).length) {\n          $(e.target).closest(settings.classMap.hasSubMenu).children(settings.classMap.invoker).focus();\n          Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__["default"])($(e.target).closest(settings.classMap.hasSubMenu), $(e.target).closest(settings.classMap.hasSubMenu).parent().find("".concat(settings.classMap.hasSubMenuActive, " > ").concat(settings.classMap.subMenu)), settings, getItemSettings($(e.target).closest(settings.classMap.hasSubMenu)))();\n          return;\n        } //\n        // End: SIMPLE\n        //\n        // Close Self\n\n\n        if (e.which === ESC_KEYCODE && context.state === \'desktop\' && $(e.target).closest("".concat(settings.classMap.hasMegaMenuActive, ", ").concat(settings.classMap.hasSubMenuActive)).length) {\n          $(e.target).closest("".concat(settings.classMap.hasMegaMenuActive, ", ").concat(settings.classMap.hasSubMenuActive)).children(settings.classMap.invoker).focus();\n          Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__["default"])($(e.target).closest("".concat(settings.classMap.hasMegaMenuActive, ", ").concat(settings.classMap.hasSubMenuActive)), $(e.target).closest("".concat(settings.classMap.hasMegaMenuActive, ", ").concat(settings.classMap.hasSubMenuActive)).find("".concat(settings.classMap.megaMenu, ", ").concat(settings.classMap.subMenu)), settings, getItemSettings($(e.target).closest("".concat(settings.classMap.hasMegaMenuActive, ", ").concat(settings.classMap.hasSubMenuActive))))();\n          return;\n        } // Reset index\n\n\n        if (index < 0) {\n          index = 0;\n        }\n\n        $($items[index]).focus();\n      });\n      $(document).on(\'keyup\', function (e) {\n        // Close All\n        if (e.which === TAB_KEYCODE && $(e.target).closest("".concat(settings.classMap.megaMenu, ", ").concat(settings.classMap.subMenu)).length === 0) {\n          Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__["default"])($("".concat(settings.classMap.hasMegaMenuActive, ", ").concat(settings.classMap.hasSubMenuActive)), $("".concat(settings.classMap.megaMenu, ":visible, ").concat(settings.classMap.subMenu, ":visible")), settings, getItemSettings($("".concat(settings.classMap.hasMegaMenuActive, ", ").concat(settings.classMap.hasSubMenuActive))))();\n        }\n      }); // *****\n      // End: ACCESSIBILITY\n      // *****\n    }\n  }, {\n    key: "MegaMenuItem",\n    value: function MegaMenuItem(el, menu, params) {\n      var context = this,\n          settings = params,\n          itemDataSettings = el.attr(\'data-hs-mega-menu-item-options\') ? JSON.parse(el.attr(\'data-hs-mega-menu-item-options\')) : {},\n          $el = el,\n          $menu = menu;\n      var itemSettings = {\n        eventType: itemDataSettings.eventType ? itemDataSettings.eventType : settings.eventType,\n        megaMenuTimeOut: null,\n        desktop: {\n          animation: \'animated\',\n          animationIn: \'slideInUp\',\n          animationOut: false,\n          position: null,\n          maxWidth: null\n        }\n      };\n      itemSettings = _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0___default()({}, settings, itemSettings, itemDataSettings);\n\n      itemSettings.activeItemClass = function () {\n        return Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__["default"])($el, itemSettings) === \'mega-menu\' ? itemSettings.classMap.hasMegaMenuActive : itemSettings.classMap.hasSubMenuActive;\n      }; // Set Menu Breakpoint Class\n\n\n      $menu.addClass(Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__["default"])($el, itemSettings) === \'mega-menu\' ? "hs-mega-menu-desktop-".concat(itemSettings.breakpoint) : "hs-sub-menu-desktop-".concat(itemSettings.breakpoint)); // Listeners\n\n      var myDesktopCSSAnimationEnable = Object(_methods_desktop_css_animation_enable__WEBPACK_IMPORTED_MODULE_3__["default"])($menu, itemSettings),\n          myDesktopMouseEnterEventListener = Object(_methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__["default"])($el, $menu, settings, itemSettings),\n          myDesktopMouseLeaveEventListener = Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__["default"])($el, $menu, settings, itemSettings),\n          myDesktopClickEventListener = Object(_methods_desktop_click_event_listener__WEBPACK_IMPORTED_MODULE_6__["default"])($el, $menu, settings, itemSettings),\n          myMobileClickEventListener = Object(_methods_mobile_click_event_listener__WEBPACK_IMPORTED_MODULE_7__["default"])($el, $menu, settings, itemSettings);\n\n      var mobileListeners = function mobileListeners() {\n        // Remove Desktop Listeners\n        $menu[0].removeEventListener(\'animationend\', myDesktopCSSAnimationEnable, false);\n        $menu[0].removeEventListener(\'webkitAnimationEnd\', myDesktopCSSAnimationEnable, false);\n        $el[0].removeEventListener(\'mouseenter\', myDesktopMouseEnterEventListener, false);\n        $el[0].removeEventListener(\'mouseleave\', myDesktopMouseLeaveEventListener, false); // $el.children(settings.classMap.invoker)[0].removeEventListener(\'focus\', myDesktopMouseEnterEventListener, false);\n\n        $el.children(itemSettings.classMap.invoker)[0].removeEventListener(\'click\', myDesktopClickEventListener, false); // Add Mobile Listeners\n\n        $el.children(itemSettings.classMap.invoker)[0].addEventListener(\'click\', myMobileClickEventListener, false);\n      },\n          desktopListeners = function desktopListeners() {\n        // Remove Mobile Listeners\n        $el.children(itemSettings.classMap.invoker)[0].removeEventListener(\'click\', myMobileClickEventListener, false); // Add Desktop Listeners\n\n        $menu[0].addEventListener(\'animationend\', myDesktopCSSAnimationEnable, false);\n        $menu[0].addEventListener(\'webkitAnimationEnd\', myDesktopCSSAnimationEnable, false);\n\n        if (itemSettings.eventType === \'hover\') {\n          $el[0].addEventListener(\'mouseenter\', myDesktopMouseEnterEventListener, false);\n          $el[0].addEventListener(\'mouseleave\', myDesktopMouseLeaveEventListener, false); // if (!$el.parents().hasClass(settings.classMap.subMenu.slice(1))) {\n          // \t$el.children(settings.classMap.invoker)[0].addEventListener(\'focus\', myDesktopMouseEnterEventListener, false);\n          // }\n        }\n\n        if (itemSettings.eventType === \'click\') {\n          $el.children(itemSettings.classMap.invoker)[0].addEventListener(\'click\', myDesktopClickEventListener, false);\n        }\n      };\n\n      if (itemSettings.desktop.maxWidth) {\n        $menu.css(\'max-width\', itemSettings.desktop.maxWidth);\n      }\n\n      if (itemSettings.desktop.position) {\n        $menu.addClass("hs-position-".concat(itemSettings.desktop.position));\n      } // Document Events\n\n\n      $(document).on(\'click\', function (e) {\n        if ($(e.target).closest($menu).length === 0 && $(e.target).closest(itemSettings.classMap.invoker).length === 0 && context.state === \'desktop\') {\n          $el.removeClass(itemSettings.activeItemClass().slice(1));\n          $menu.removeClass(itemSettings.desktop.animationIn);\n\n          if (itemSettings.animationOut) {\n            $menu.addClass(itemSettings.desktop.animationOut);\n          } else {\n            $menu.hide();\n          }\n        }\n      }); // Resize and Scroll Events\n\n      $(window).on(\'resize\', function () {\n        if (context.state === \'desktop\') {\n          Object(_methods_smart_position__WEBPACK_IMPORTED_MODULE_2__["default"])($menu, itemSettings);\n        }\n      }); // State Detection\n\n      $(window).on(\'resize\', function () {\n        if (context.state === \'mobile\') {\n          $menu.removeClass(itemSettings.desktop.animation).css(\'animation-duration\', \'\');\n          mobileListeners();\n        } else if (context.state === \'desktop\') {\n          $menu.addClass(itemSettings.desktop.animation).css(\'animation-duration\', "".concat(itemSettings.duration, "ms"));\n          desktopListeners();\n        }\n      }).trigger(\'resize\');\n    }\n  }]);\n\n  return HSMegaMenu;\n}();\n\n\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/hs-mega-menu.js?'
                    );
                },
                "./src/js/methods/desktop-click-event-listener.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return desktopClickEventListener; });\n/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-type */ "./src/js/methods/get-type.js");\n/* harmony import */ var _smart_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-position */ "./src/js/methods/smart-position.js");\n/* harmony import */ var _desktop_show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desktop-show */ "./src/js/methods/desktop-show.js");\n/* harmony import */ var _desktop_hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop-hide */ "./src/js/methods/desktop-hide.js");\n\n\n\n\nfunction desktopClickEventListener(el, menu, params, itemParams) {\n  return function () {\n    var $siblingInvokers = menu.parent("".concat(params.classMap.hasMegaMenu, ", ").concat(params.classMap.hasSubMenu)).siblings("".concat(params.classMap.hasMegaMenu).concat(params.classMap.hasMegaMenuActive, ", ").concat(params.classMap.hasSubMenu).concat(params.classMap.hasSubMenuActive));\n\n    if ($siblingInvokers.length) {\n      $siblingInvokers.each(function () {\n        var $el = $(this),\n            $menu = $el.children("".concat(params.classMap.megaMenu, ", ").concat(params.classMap.subMenu)),\n            itemDataSettings = $el.attr(\'data-hs-mega-menu-item-options\') ? JSON.parse($el.attr(\'data-hs-mega-menu-item-options\')) : {};\n        var itemSettings = {\n          desktop: {\n            animation: \'animated\',\n            animationIn: \'slideInUp\',\n            animationOut: \'fadeOut\',\n            position: null\n          }\n        };\n        itemSettings = Object.assign({}, itemSettings, itemDataSettings);\n\n        itemSettings.activeItemClass = function () {\n          return Object(_get_type__WEBPACK_IMPORTED_MODULE_0__["default"])($el, params) === \'mega-menu\' ? params.classMap.hasMegaMenuActive : params.classMap.hasSubMenuActive;\n        };\n\n        $el.removeClass(itemSettings.activeItemClass().slice(1));\n        Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_3__["default"])($el, $menu, params, itemSettings);\n      });\n    }\n\n    if (menu.is(\':hidden\')) {\n      el.addClass(itemParams.activeItemClass().slice(1));\n      Object(_desktop_show__WEBPACK_IMPORTED_MODULE_2__["default"])(el, menu, params, itemParams);\n      Object(_smart_position__WEBPACK_IMPORTED_MODULE_1__["default"])(menu, params);\n    } else {\n      el.removeClass(itemParams.activeItemClass().slice(1));\n      Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_3__["default"])(el, menu, params, itemParams);\n    }\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-click-event-listener.js?'
                    );
                },
                "./src/js/methods/desktop-css-animation-enable.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return desktopCSSAnimationEnable; });\nfunction desktopCSSAnimationEnable(menu, itemParams) {\n  return function (e) {\n    if (menu.hasClass(itemParams.desktop.animationOut)) {\n      menu.removeClass(itemParams.desktop.animationOut).hide();\n    }\n\n    e.preventDefault();\n    e.stopPropagation();\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-css-animation-enable.js?'
                    );
                },
                "./src/js/methods/desktop-hide.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return desktopHide; });\nfunction desktopHide(el, menu, params, itemParams) {\n  if (!menu.length) {\n    return this;\n  }\n\n  if (itemParams.desktop.animationOut) {\n    menu.removeClass(itemParams.desktop.animationIn).addClass(itemParams.desktop.animationOut).hide();\n  } else {\n    menu.removeClass(itemParams.desktop.animationIn).hide();\n  }\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-hide.js?'
                    );
                },
                "./src/js/methods/desktop-mouseenter-event-listener.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return desktopMouseEnterEventListener; });\n/* harmony import */ var _smart_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-position */ "./src/js/methods/smart-position.js");\n/* harmony import */ var _desktop_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop-show */ "./src/js/methods/desktop-show.js");\n/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-type */ "./src/js/methods/get-type.js");\n/* harmony import */ var _desktop_hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop-hide */ "./src/js/methods/desktop-hide.js");\n\n\n\n\nfunction desktopMouseEnterEventListener(el, menu, params, itemParams) {\n  return function () {\n    if (itemParams.megaMenuTimeOut) {\n      clearTimeout(itemParams.megaMenuTimeOut);\n    }\n\n    var $siblingInvokers = menu.parent("".concat(params.classMap.hasMegaMenu, ", ").concat(params.classMap.hasSubMenu)).siblings("".concat(params.classMap.hasMegaMenu).concat(params.classMap.hasMegaMenuActive, ", ").concat(params.classMap.hasSubMenu).concat(params.classMap.hasSubMenuActive));\n\n    if ($siblingInvokers.length) {\n      $siblingInvokers.each(function () {\n        var $el = $(this),\n            $menu = $el.children("".concat(params.classMap.megaMenu, ", ").concat(params.classMap.subMenu)),\n            itemDataSettings = $el.attr(\'data-hs-mega-menu-item-options\') ? JSON.parse($el.attr(\'data-hs-mega-menu-item-options\')) : {};\n        var itemSettings = {\n          desktop: {\n            animation: \'animated\',\n            animationIn: \'slideInUp\',\n            animationOut: \'fadeOut\',\n            position: null\n          }\n        };\n        itemSettings = Object.assign({}, itemSettings, itemDataSettings);\n\n        itemSettings.activeItemClass = function () {\n          return Object(_get_type__WEBPACK_IMPORTED_MODULE_2__["default"])($el, params) === \'mega-menu\' ? params.classMap.hasMegaMenuActive : params.classMap.hasSubMenuActive;\n        };\n\n        $el.removeClass(itemSettings.activeItemClass().slice(1));\n        Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_3__["default"])($el, $menu, params, itemSettings);\n      });\n    }\n\n    el.addClass(itemParams.activeItemClass().slice(1));\n    Object(_desktop_show__WEBPACK_IMPORTED_MODULE_1__["default"])(el, menu, params, itemParams);\n    Object(_smart_position__WEBPACK_IMPORTED_MODULE_0__["default"])(menu, params);\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-mouseenter-event-listener.js?'
                    );
                },
                "./src/js/methods/desktop-mouseleave-event-listener.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return desktopMouseLeaveEventListener; });\n/* harmony import */ var _desktop_hide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desktop-hide */ "./src/js/methods/desktop-hide.js");\n\nfunction desktopMouseLeaveEventListener(el, menu, params, itemParams) {\n  return function () {\n    itemParams.megaMenuTimeOut = setTimeout(function () {\n      el.removeClass(itemParams.activeItemClass().slice(1));\n      Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_0__["default"])(el, menu, params, itemParams);\n    }, params.delay);\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-mouseleave-event-listener.js?'
                    );
                },
                "./src/js/methods/desktop-show.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return desktopShow; });\nfunction desktopShow(el, menu, params, itemParams) {\n  menu.removeClass(itemParams.desktop.animationOut).show().addClass(itemParams.desktop.animationIn);\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-show.js?'
                    );
                },
                "./src/js/methods/get-type.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getType; });\nfunction getType(el, params) {\n  if (!el || !el.length) {\n    return false;\n  }\n\n  return el.hasClass(params.classMap.hasSubMenu.slice(1)) ? 'sub-menu' : el.hasClass(params.classMap.hasMegaMenu.slice(1)) ? 'mega-menu' : null;\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/get-type.js?"
                    );
                },
                "./src/js/methods/mobile-click-event-listener.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mobileClickEventListener; });\n/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-type */ "./src/js/methods/get-type.js");\n/* harmony import */ var _mobile_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-show */ "./src/js/methods/mobile-show.js");\n/* harmony import */ var _mobile_hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-hide */ "./src/js/methods/mobile-hide.js");\n\n\n\nfunction mobileClickEventListener(el, menu, params, itemParams) {\n  return function () {\n    var $siblingInvokers = menu.parent("".concat(params.classMap.hasMegaMenu, ", ").concat(params.classMap.hasSubMenu)).siblings("".concat(params.classMap.hasMegaMenu).concat(params.classMap.hasMegaMenuActive, ", ").concat(params.classMap.hasSubMenu).concat(params.classMap.hasSubMenuActive));\n\n    if ($siblingInvokers.length) {\n      $siblingInvokers.each(function () {\n        var $el = $(this),\n            $menu = $el.children("".concat(params.classMap.megaMenu, ", ").concat(params.classMap.subMenu)),\n            itemSettings = {};\n\n        itemSettings.activeItemClass = function () {\n          return Object(_get_type__WEBPACK_IMPORTED_MODULE_0__["default"])($el, params) === \'mega-menu\' ? params.classMap.hasMegaMenuActive : params.classMap.hasSubMenuActive;\n        };\n\n        Object(_mobile_hide__WEBPACK_IMPORTED_MODULE_2__["default"])($el, $menu, params, itemSettings);\n      });\n    }\n\n    if (menu.is(\':hidden\')) {\n      Object(_mobile_show__WEBPACK_IMPORTED_MODULE_1__["default"])(el, menu, params, itemParams);\n    } else {\n      Object(_mobile_hide__WEBPACK_IMPORTED_MODULE_2__["default"])(el, menu, params, itemParams);\n    }\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/mobile-click-event-listener.js?'
                    );
                },
                "./src/js/methods/mobile-hide.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mobileHide; });\nfunction mobileHide(el, menu, params, itemParams) {\n  if (!menu.length) {\n    return this;\n  }\n\n  el.removeClass(itemParams.activeItemClass().slice(1));\n  menu.slideUp(params.mobileSpeed);\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/mobile-hide.js?'
                    );
                },
                "./src/js/methods/mobile-show.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mobileShow; });\nfunction mobileShow(el, menu, params, itemParams) {\n  if (!menu.length) {\n    return this;\n  }\n\n  el.addClass(itemParams.activeItemClass().slice(1));\n  menu.slideDown(params.mobileSpeed);\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/mobile-show.js?'
                    );
                },
                "./src/js/methods/object-assign-deep.js": function (module, exports, __webpack_require__) {
                    "use strict";
                    eval(
                        "\n/*\n * OBJECT ASSIGN DEEP\n * Allows deep cloning of plain objects that contain primitives, nested plain objects, or nested plain arrays.\n */\n\n/*\n * A unified way of returning a string that describes the type of the given variable.\n */\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction getTypeOf(input) {\n  if (input === null) {\n    return 'null';\n  } else if (typeof input === 'undefined') {\n    return 'undefined';\n  } else if (_typeof(input) === 'object') {\n    return Array.isArray(input) ? 'array' : 'object';\n  }\n\n  return _typeof(input);\n}\n/*\n * Branching logic which calls the correct function to clone the given value base on its type.\n */\n\n\nfunction cloneValue(value) {\n  // The value is an object so lets clone it.\n  if (getTypeOf(value) === 'object') {\n    return quickCloneObject(value);\n  } // The value is an array so lets clone it.\n  else if (getTypeOf(value) === 'array') {\n      return quickCloneArray(value);\n    } // Any other value can just be copied.\n\n\n  return value;\n}\n/*\n * Enumerates the given array and returns a new array, with each of its values cloned (i.e. references broken).\n */\n\n\nfunction quickCloneArray(input) {\n  return input.map(cloneValue);\n}\n/*\n * Enumerates the properties of the given object (ignoring the prototype chain) and returns a new object, with each of\n * its values cloned (i.e. references broken).\n */\n\n\nfunction quickCloneObject(input) {\n  var output = {};\n\n  for (var key in input) {\n    if (!Object.prototype.hasOwnProperty.call(input, key)) {\n      continue;\n    }\n\n    output[key] = cloneValue(input[key]);\n  }\n\n  return output;\n}\n/*\n * Does the actual deep merging.\n */\n\n\nfunction executeDeepMerge(target) {\n  var _objects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n  var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var options = {\n    arrayBehaviour: _options.arrayBehaviour || 'replace' // Can be \"merge\" or \"replace\".\n\n  }; // Ensure we have actual objects for each.\n\n  var objects = _objects.map(function (object) {\n    return object || {};\n  });\n\n  var output = target || {}; // Enumerate the objects and their keys.\n\n  for (var oindex = 0; oindex < objects.length; oindex++) {\n    var object = objects[oindex];\n    var keys = Object.keys(object);\n\n    for (var kindex = 0; kindex < keys.length; kindex++) {\n      var key = keys[kindex];\n      var value = object[key];\n      var type = getTypeOf(value);\n      var existingValueType = getTypeOf(output[key]);\n\n      if (type === 'object') {\n        if (existingValueType !== 'undefined') {\n          var existingValue = existingValueType === 'object' ? output[key] : {};\n          output[key] = executeDeepMerge({}, [existingValue, quickCloneObject(value)], options);\n        } else {\n          output[key] = quickCloneObject(value);\n        }\n      } else if (type === 'array') {\n        if (existingValueType === 'array') {\n          var newValue = quickCloneArray(value);\n          output[key] = options.arrayBehaviour === 'merge' ? output[key].concat(newValue) : newValue;\n        } else {\n          output[key] = quickCloneArray(value);\n        }\n      } else {\n        output[key] = value;\n      }\n    }\n  }\n\n  return output;\n}\n/*\n * Merge all the supplied objects into the target object, breaking all references, including those of nested objects\n * and arrays, and even objects nested inside arrays. The first parameter is not mutated unlike Object.assign().\n * Properties in later objects will always overwrite.\n */\n\n\nmodule.exports = function objectAssignDeep(target) {\n  for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    objects[_key - 1] = arguments[_key];\n  }\n\n  return executeDeepMerge(target, objects);\n};\n/*\n * Same as objectAssignDeep() except it doesn't mutate the target object and returns an entirely new object.\n */\n\n\nmodule.exports.noMutate = function objectAssignDeepInto() {\n  for (var _len2 = arguments.length, objects = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    objects[_key2] = arguments[_key2];\n  }\n\n  return executeDeepMerge({}, objects);\n};\n/*\n * Allows an options object to be passed in to customise the behaviour of the function.\n */\n\n\nmodule.exports.withOptions = function objectAssignDeepInto(target, objects, options) {\n  return executeDeepMerge(target, objects, options);\n};\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/object-assign-deep.js?"
                    );
                },
                "./src/js/methods/smart-position.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return smartPosition; });\nfunction smartPosition(el, params) {\n  if (!el && !el.length) return;\n\n  if (!params.rtl) {\n    if (el.offset().left + el.outerWidth() > window.innerWidth) {\n      el.addClass(params.classMap.reversed.slice(1));\n    }\n  } else {\n    if (el.offset().left < 0) {\n      el.addClass(params.classMap.reversed.slice(1));\n    }\n  }\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/smart-position.js?'
                    );
                },
            }),
            (e = {}),
            (f.m = d),
            (f.c = e),
            (f.d = function (e, t, n) {
                f.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (f.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (f.t = function (e, t) {
                if ((1 & t && (e = f(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if ((f.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var i in e)
                        f.d(
                            n,
                            i,
                            function (t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return n;
            }),
            (f.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return f.d(t, "a", t), t;
            }),
            (f.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (f.p = ""),
            f((f.s = "./src/js/hs-mega-menu.js")).default
        );
        function f(t) {
            if (e[t]) return e[t].exports;
            var n = (e[t] = { i: t, l: !1, exports: {} });
            return d[t].call(n.exports, n, n.exports, f), (n.l = !0), n.exports;
        }
        var d, e;
    }),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.HSSwitchText = t()) : (e.HSSwitchText = t());
    })(window, function () {
        return (
            (d = {
                "./src/js/hs-switch-text.js": function (module, exports, __webpack_require__) {
                    "use strict";
                    eval(
                        "\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HSSwitchText = function () {\n\tfunction HSSwitchText(elem, settings) {\n\t\t_classCallCheck(this, HSSwitchText);\n\n\t\tthis.elem = elem;\n\t\tthis.defaults = {\n\t\t\ttarget: null,\n\t\t\teventType: 'change',\n\t\t\tafterChange: null,\n\t\t\tstartUpdateOnChange: false\n\t\t};\n\t\tthis.settings = settings;\n\t}\n\n\t_createClass(HSSwitchText, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tvar context = this,\n\t\t\t    $el = context.elem,\n\t\t\t    dataSettings = $el.attr('data-hs-switch-text-options') ? JSON.parse($el.attr('data-hs-switch-text-options')) : {};\n\t\t\tvar options = $.extend(true, context.defaults, dataSettings, context.settings);\n\n\t\t\t$el.on(options.eventType, function () {\n\t\t\t\tif (options.startUpdateOnChange) {\n\t\t\t\t\tvar newDataSettings = $el.attr('data-hs-switch-text-options') ? JSON.parse($el.attr('data-hs-switch-text-options')) : {};\n\t\t\t\t\toptions = $.extend(true, options, newDataSettings);\n\t\t\t\t}\n\n\t\t\t\tfor (var i = 0; i < options.target.length; i++) {\n\t\t\t\t\t$(options.target[i].selector).html(options.target[i].text);\n\t\t\t\t}\n\n\t\t\t\tif (typeof options.afterChange === \"function\") {\n\t\t\t\t\toptions.afterChange();\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}]);\n\n\treturn HSSwitchText;\n}();\n\nexports.default = HSSwitchText;\n\n//# sourceURL=webpack://HSSwitchText/./src/js/hs-switch-text.js?"
                    );
                },
            }),
            (e = {}),
            (f.m = d),
            (f.c = e),
            (f.d = function (e, t, n) {
                f.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (f.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (f.t = function (e, t) {
                if ((1 & t && (e = f(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if ((f.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var i in e)
                        f.d(
                            n,
                            i,
                            function (t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return n;
            }),
            (f.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return f.d(t, "a", t), t;
            }),
            (f.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (f.p = ""),
            f((f.s = "./src/js/hs-switch-text.js")).default
        );
        function f(t) {
            if (e[t]) return e[t].exports;
            var n = (e[t] = { i: t, l: !1, exports: {} });
            return d[t].call(n.exports, n, n.exports, f), (n.l = !0), n.exports;
        }
        var d, e;
    }),
    (function (e) {
        "function" == typeof define && define.amd
            ? define(["jquery"], function (t) {
                  return e(t, document, window, navigator);
              })
            : "object" == typeof exports
            ? e(require("jquery"), document, window, navigator)
            : e(jQuery, document, window, navigator);
    })(function (e, t, n, i, s) {
        var o,
            r,
            a = 0,
            l = ((o = i.userAgent), (r = /msie\s\d+/i), 0 < o.search(r) && 9 > (o = (o = r.exec(o).toString()).split(" ")[1]) && (e("html").addClass("lt-ie9"), !0));
        Function.prototype.bind ||
            (Function.prototype.bind = function (e) {
                var t = this,
                    n = [].slice;
                if ("function" != typeof t) throw new TypeError();
                var i = n.call(arguments, 1),
                    s = function () {
                        if (this instanceof s) {
                            (o = function () {}).prototype = t.prototype;
                            var o = new o(),
                                r = t.apply(o, i.concat(n.call(arguments)));
                            return Object(r) === r ? r : o;
                        }
                        return t.apply(e, i.concat(n.call(arguments)));
                    };
                return s;
            }),
            Array.prototype.indexOf ||
                (Array.prototype.indexOf = function (e, t) {
                    if (null == this) throw new TypeError('"this" is null or not defined');
                    var n = Object(this),
                        i = n.length >>> 0;
                    if (0 === i) return -1;
                    var s = +t || 0;
                    if ((1 / 0 === Math.abs(s) && (s = 0), s >= i)) return -1;
                    for (s = Math.max(0 <= s ? s : i - Math.abs(s), 0); s < i; ) {
                        if (s in n && n[s] === e) return s;
                        s++;
                    }
                    return -1;
                });
        var c = function (i, o, r) {
            (this.VERSION = "2.2.0"),
                (this.input = i),
                (this.plugin_count = r),
                (this.old_to = this.old_from = this.update_tm = this.calc_count = this.current_plugin = 0),
                (this.raf_id = this.old_min_interval = null),
                (this.no_diapason = this.force_redraw = this.dragging = !1),
                (this.has_tab_index = !0),
                (this.is_update = this.is_key = !1),
                (this.is_start = !0),
                (this.is_click = this.is_resize = this.is_active = this.is_finish = !1),
                (o = o || {}),
                (this.$cache = {
                    win: e(n),
                    body: e(t.body),
                    input: e(i),
                    cont: null,
                    rs: null,
                    min: null,
                    max: null,
                    from: null,
                    to: null,
                    single: null,
                    bar: null,
                    line: null,
                    s_single: null,
                    s_from: null,
                    s_to: null,
                    shad_single: null,
                    shad_from: null,
                    shad_to: null,
                    edge: null,
                    grid: null,
                    grid_labels: [],
                }),
                (this.coords = {
                    x_gap: 0,
                    x_pointer: 0,
                    w_rs: 0,
                    w_rs_old: 0,
                    w_handle: 0,
                    p_gap: 0,
                    p_gap_left: 0,
                    p_gap_right: 0,
                    p_step: 0,
                    p_pointer: 0,
                    p_handle: 0,
                    p_single_fake: 0,
                    p_single_real: 0,
                    p_from_fake: 0,
                    p_from_real: 0,
                    p_to_fake: 0,
                    p_to_real: 0,
                    p_bar_x: 0,
                    p_bar_w: 0,
                    grid_gap: 0,
                    big_num: 0,
                    big: [],
                    big_w: [],
                    big_p: [],
                    big_x: [],
                }),
                (this.labels = { w_min: 0, w_max: 0, w_from: 0, w_to: 0, w_single: 0, p_min: 0, p_max: 0, p_from_fake: 0, p_from_left: 0, p_to_fake: 0, p_to_left: 0, p_single_fake: 0, p_single_left: 0 });
            var a,
                l = this.$cache.input;
            for (a in ((i = l.prop("value")),
            (r = {
                type: "single",
                min: 10,
                max: 100,
                from: null,
                to: null,
                step: 1,
                min_interval: 0,
                max_interval: 0,
                drag_interval: !1,
                values: [],
                p_values: [],
                from_fixed: !1,
                from_min: null,
                from_max: null,
                from_shadow: !1,
                to_fixed: !1,
                to_min: null,
                to_max: null,
                to_shadow: !1,
                prettify_enabled: !0,
                prettify_separator: " ",
                prettify: null,
                force_edges: !1,
                keyboard: !0,
                grid: !1,
                grid_margin: !0,
                grid_num: 4,
                grid_snap: !1,
                hide_min_max: !1,
                hide_from_to: !1,
                prefix: "",
                postfix: "",
                max_postfix: "",
                decorate_both: !0,
                values_separator: " — ",
                input_values_separator: ";",
                disable: !1,
                block: !1,
                extra_classes: "",
                scope: null,
                onStart: null,
                onChange: null,
                onFinish: null,
                onUpdate: null,
            }),
            "INPUT" !== l[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", l[0]),
            ((l = {
                type: l.data("type"),
                min: l.data("min"),
                max: l.data("max"),
                from: l.data("from"),
                to: l.data("to"),
                step: l.data("step"),
                min_interval: l.data("minInterval"),
                max_interval: l.data("maxInterval"),
                drag_interval: l.data("dragInterval"),
                values: l.data("values"),
                from_fixed: l.data("fromFixed"),
                from_min: l.data("fromMin"),
                from_max: l.data("fromMax"),
                from_shadow: l.data("fromShadow"),
                to_fixed: l.data("toFixed"),
                to_min: l.data("toMin"),
                to_max: l.data("toMax"),
                to_shadow: l.data("toShadow"),
                prettify_enabled: l.data("prettifyEnabled"),
                prettify_separator: l.data("prettifySeparator"),
                force_edges: l.data("forceEdges"),
                keyboard: l.data("keyboard"),
                grid: l.data("grid"),
                grid_margin: l.data("gridMargin"),
                grid_num: l.data("gridNum"),
                grid_snap: l.data("gridSnap"),
                hide_min_max: l.data("hideMinMax"),
                hide_from_to: l.data("hideFromTo"),
                prefix: l.data("prefix"),
                postfix: l.data("postfix"),
                max_postfix: l.data("maxPostfix"),
                decorate_both: l.data("decorateBoth"),
                values_separator: l.data("valuesSeparator"),
                input_values_separator: l.data("inputValuesSeparator"),
                disable: l.data("disable"),
                block: l.data("block"),
                extra_classes: l.data("extraClasses"),
            }).values = l.values && l.values.split(",")),
            l))
                l.hasOwnProperty(a) && ((l[a] !== s && "" !== l[a]) || delete l[a]);
            i !== s &&
                "" !== i &&
                ((i = i.split(l.input_values_separator || o.input_values_separator || ";"))[0] && i[0] == +i[0] && (i[0] = +i[0]),
                i[1] && i[1] == +i[1] && (i[1] = +i[1]),
                o && o.values && o.values.length ? ((r.from = i[0] && o.values.indexOf(i[0])), (r.to = i[1] && o.values.indexOf(i[1]))) : ((r.from = i[0] && +i[0]), (r.to = i[1] && +i[1]))),
                e.extend(r, o),
                e.extend(r, l),
                (this.options = r),
                (this.update_check = {}),
                this.validate(),
                (this.result = { input: this.$cache.input, slider: null, min: this.options.min, max: this.options.max, from: this.options.from, from_percent: 0, from_value: null, to: this.options.to, to_percent: 0, to_value: null }),
                this.init();
        };
        (c.prototype = {
            init: function (e) {
                (this.no_diapason = !1),
                    (this.coords.p_step = this.convertToPercent(this.options.step, !0)),
                    (this.target = "base"),
                    this.toggleInput(),
                    this.append(),
                    this.setMinMax(),
                    e ? ((this.force_redraw = !0), this.calc(!0), this.callOnUpdate()) : ((this.force_redraw = !0), this.calc(!0), this.callOnStart()),
                    this.updateScene();
            },
            append: function () {
                this.$cache.input.before('<span class="irs js-irs-' + this.plugin_count + " " + this.options.extra_classes + '"></span>'),
                    this.$cache.input.prop("readonly", !0),
                    (this.$cache.cont = this.$cache.input.prev()),
                    (this.result.slider = this.$cache.cont),
                    this.$cache.cont.html(
                        '<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'
                    ),
                    (this.$cache.rs = this.$cache.cont.find(".irs")),
                    (this.$cache.min = this.$cache.cont.find(".irs-min")),
                    (this.$cache.max = this.$cache.cont.find(".irs-max")),
                    (this.$cache.from = this.$cache.cont.find(".irs-from")),
                    (this.$cache.to = this.$cache.cont.find(".irs-to")),
                    (this.$cache.single = this.$cache.cont.find(".irs-single")),
                    (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
                    (this.$cache.line = this.$cache.cont.find(".irs-line")),
                    (this.$cache.grid = this.$cache.cont.find(".irs-grid")),
                    "single" === this.options.type
                        ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'),
                          (this.$cache.edge = this.$cache.cont.find(".irs-bar-edge")),
                          (this.$cache.s_single = this.$cache.cont.find(".single")),
                          (this.$cache.from[0].style.visibility = "hidden"),
                          (this.$cache.to[0].style.visibility = "hidden"),
                          (this.$cache.shad_single = this.$cache.cont.find(".shadow-single")))
                        : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'),
                          (this.$cache.s_from = this.$cache.cont.find(".from")),
                          (this.$cache.s_to = this.$cache.cont.find(".to")),
                          (this.$cache.shad_from = this.$cache.cont.find(".shadow-from")),
                          (this.$cache.shad_to = this.$cache.cont.find(".shadow-to")),
                          this.setTopHandler()),
                    this.options.hide_from_to && ((this.$cache.from[0].style.display = "none"), (this.$cache.to[0].style.display = "none"), (this.$cache.single[0].style.display = "none")),
                    this.appendGrid(),
                    this.options.disable ? (this.appendDisableMask(), (this.$cache.input[0].disabled = !0)) : ((this.$cache.input[0].disabled = !1), this.removeDisableMask(), this.bindEvents()),
                    this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()),
                    this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize");
            },
            setTopHandler: function () {
                var e = this.options.max,
                    t = this.options.to;
                this.options.from > this.options.min && t === e ? this.$cache.s_from.addClass("type_last") : t < e && this.$cache.s_to.addClass("type_last");
            },
            changeLevel: function (e) {
                switch (e) {
                    case "single":
                        (this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake)), this.$cache.s_single.addClass("state_hover");
                        break;
                    case "from":
                        (this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake)), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                        break;
                    case "to":
                        (this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake)), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                        break;
                    case "both":
                        (this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake)),
                            (this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer)),
                            this.$cache.s_to.removeClass("type_last"),
                            this.$cache.s_from.removeClass("type_last");
                }
            },
            appendDisableMask: function () {
                this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled");
            },
            removeDisableMask: function () {
                this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled");
            },
            remove: function () {
                this.$cache.cont.remove(),
                    (this.$cache.cont = null),
                    this.$cache.line.off("keydown.irs_" + this.plugin_count),
                    this.$cache.body.off("touchmove.irs_" + this.plugin_count),
                    this.$cache.body.off("mousemove.irs_" + this.plugin_count),
                    this.$cache.win.off("touchend.irs_" + this.plugin_count),
                    this.$cache.win.off("mouseup.irs_" + this.plugin_count),
                    l && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)),
                    (this.$cache.grid_labels = []),
                    (this.coords.big = []),
                    (this.coords.big_w = []),
                    (this.coords.big_p = []),
                    (this.coords.big_x = []),
                    cancelAnimationFrame(this.raf_id);
            },
            bindEvents: function () {
                this.no_diapason ||
                    (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)),
                    this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)),
                    this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)),
                    this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)),
                    this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                    this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                    this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)),
                    this.options.drag_interval && "double" === this.options.type
                        ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")))
                        : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))),
                    "single" === this.options.type
                        ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                          this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                          this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                          this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                          this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                          this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                          this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")))
                        : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)),
                          this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)),
                          this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                          this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                          this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                          this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                          this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                          this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                          this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                          this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                          this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                          this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                          this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                          this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))),
                    this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")),
                    l && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))));
            },
            pointerFocus: function (e) {
                if (!this.target) {
                    var t = "single" === this.options.type ? this.$cache.single : this.$cache.from;
                    (e = t.offset().left), (e += t.width() / 2 - 1), this.pointerClick("single", { preventDefault: function () {}, pageX: e });
                }
            },
            pointerMove: function (e) {
                this.dragging && ((this.coords.x_pointer = (e.pageX || (e.originalEvent.touches && e.originalEvent.touches[0].pageX)) - this.coords.x_gap), this.calc());
            },
            pointerUp: function (t) {
                this.current_plugin === this.plugin_count &&
                    this.is_active &&
                    ((this.is_active = !1),
                    this.$cache.cont.find(".state_hover").removeClass("state_hover"),
                    (this.force_redraw = !0),
                    l && e("*").prop("unselectable", !1),
                    this.updateScene(),
                    this.restoreOriginalMinInterval(),
                    (e.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(),
                    (this.dragging = !1));
            },
            pointerDown: function (t, n) {
                n.preventDefault();
                var i = n.pageX || (n.originalEvent.touches && n.originalEvent.touches[0].pageX);
                2 !== n.button &&
                    ("both" === t && this.setTempMinInterval(),
                    t || (t = this.target || "from"),
                    (this.current_plugin = this.plugin_count),
                    (this.target = t),
                    (this.dragging = this.is_active = !0),
                    (this.coords.x_gap = this.$cache.rs.offset().left),
                    (this.coords.x_pointer = i - this.coords.x_gap),
                    this.calcPointerPercent(),
                    this.changeLevel(t),
                    l && e("*").prop("unselectable", !0),
                    this.$cache.line.trigger("focus"),
                    this.updateScene());
            },
            pointerClick: function (e, t) {
                t.preventDefault();
                var n = t.pageX || (t.originalEvent.touches && t.originalEvent.touches[0].pageX);
                2 !== t.button &&
                    ((this.current_plugin = this.plugin_count),
                    (this.target = e),
                    (this.is_click = !0),
                    (this.coords.x_gap = this.$cache.rs.offset().left),
                    (this.coords.x_pointer = +(n - this.coords.x_gap).toFixed()),
                    (this.force_redraw = !0),
                    this.calc(),
                    this.$cache.line.trigger("focus"));
            },
            key: function (e, t) {
                if (!(this.current_plugin !== this.plugin_count || t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)) {
                    switch (t.which) {
                        case 83:
                        case 65:
                        case 40:
                        case 37:
                            t.preventDefault(), this.moveByKey(!1);
                            break;
                        case 87:
                        case 68:
                        case 38:
                        case 39:
                            t.preventDefault(), this.moveByKey(!0);
                    }
                    return !0;
                }
            },
            moveByKey: function (e) {
                var t = this.coords.p_pointer,
                    n = (this.options.max - this.options.min) / 100;
                n = this.options.step / n;
                (this.coords.x_pointer = this.toFixed((this.coords.w_rs / 100) * (e ? t + n : t - n))), (this.is_key = !0), this.calc();
            },
            setMinMax: function () {
                if (this.options)
                    if (this.options.hide_min_max) (this.$cache.min[0].style.display = "none"), (this.$cache.max[0].style.display = "none");
                    else {
                        if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
                        else {
                            var e = this._prettify(this.options.min),
                                t = this._prettify(this.options.max);
                            (this.result.min_pretty = e), (this.result.max_pretty = t), this.$cache.min.html(this.decorate(e, this.options.min)), this.$cache.max.html(this.decorate(t, this.options.max));
                        }
                        (this.labels.w_min = this.$cache.min.outerWidth(!1)), (this.labels.w_max = this.$cache.max.outerWidth(!1));
                    }
            },
            setTempMinInterval: function () {
                var e = this.result.to - this.result.from;
                null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), (this.options.min_interval = e);
            },
            restoreOriginalMinInterval: function () {
                null !== this.old_min_interval && ((this.options.min_interval = this.old_min_interval), (this.old_min_interval = null));
            },
            calc: function (e) {
                if (this.options && (this.calc_count++, (10 === this.calc_count || e) && ((this.calc_count = 0), (this.coords.w_rs = this.$cache.rs.outerWidth(!1)), this.calcHandlePercent()), this.coords.w_rs)) {
                    switch (
                        (this.calcPointerPercent(),
                        (e = this.getHandleX()),
                        "both" === this.target && ((this.coords.p_gap = 0), (e = this.getHandleX())),
                        "click" === this.target && ((this.coords.p_gap = this.coords.p_handle / 2), (e = this.getHandleX()), (this.target = this.options.drag_interval ? "both_one" : this.chooseHandle(e))),
                        this.target)
                    ) {
                        case "base":
                            var t = (this.options.max - this.options.min) / 100;
                            (e = (this.result.from - this.options.min) / t),
                                (t = (this.result.to - this.options.min) / t),
                                (this.coords.p_single_real = this.toFixed(e)),
                                (this.coords.p_from_real = this.toFixed(e)),
                                (this.coords.p_to_real = this.toFixed(t)),
                                (this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max)),
                                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                (this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real)),
                                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)),
                                (this.target = null);
                            break;
                        case "single":
                            if (this.options.from_fixed) break;
                            (this.coords.p_single_real = this.convertToRealPercent(e)),
                                (this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real)),
                                (this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max)),
                                (this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real));
                            break;
                        case "from":
                            if (this.options.from_fixed) break;
                            (this.coords.p_from_real = this.convertToRealPercent(e)),
                                (this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real)),
                                this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real),
                                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                (this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                                (this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real));
                            break;
                        case "to":
                            if (this.options.to_fixed) break;
                            (this.coords.p_to_real = this.convertToRealPercent(e)),
                                (this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real)),
                                this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real),
                                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                (this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                                (this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
                            break;
                        case "both":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            (e = this.toFixed(e + 0.001 * this.coords.p_handle)),
                                (this.coords.p_from_real = this.convertToRealPercent(e) - this.coords.p_gap_left),
                                (this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real)),
                                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                (this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                                (this.coords.p_to_real = this.convertToRealPercent(e) + this.coords.p_gap_right),
                                (this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real)),
                                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                (this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
                            break;
                        case "both_one":
                            if (!this.options.from_fixed && !this.options.to_fixed) {
                                var n = this.convertToRealPercent(e),
                                    i = (e = this.result.to_percent - this.result.from_percent) / 2;
                                (t = n - i), (n = n + i);
                                0 > t && (n = (t = 0) + e),
                                    100 < n && (t = (n = 100) - e),
                                    (this.coords.p_from_real = this.calcWithStep(t)),
                                    (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                    (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                                    (this.coords.p_to_real = this.calcWithStep(n)),
                                    (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                    (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
                            }
                    }
                    "single" === this.options.type
                        ? ((this.coords.p_bar_x = this.coords.p_handle / 2),
                          (this.coords.p_bar_w = this.coords.p_single_fake),
                          (this.result.from_percent = this.coords.p_single_real),
                          (this.result.from = this.convertToValue(this.coords.p_single_real)),
                          (this.result.from_pretty = this._prettify(this.result.from)),
                          this.options.values.length && (this.result.from_value = this.options.values[this.result.from]))
                        : ((this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2)),
                          (this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake)),
                          (this.result.from_percent = this.coords.p_from_real),
                          (this.result.from = this.convertToValue(this.coords.p_from_real)),
                          (this.result.from_pretty = this._prettify(this.result.from)),
                          (this.result.to_percent = this.coords.p_to_real),
                          (this.result.to = this.convertToValue(this.coords.p_to_real)),
                          (this.result.to_pretty = this._prettify(this.result.to)),
                          this.options.values.length && ((this.result.from_value = this.options.values[this.result.from]), (this.result.to_value = this.options.values[this.result.to]))),
                        this.calcMinMax(),
                        this.calcLabels();
                }
            },
            calcPointerPercent: function () {
                this.coords.w_rs
                    ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer) ? (this.coords.x_pointer = 0) : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs),
                      (this.coords.p_pointer = this.toFixed((this.coords.x_pointer / this.coords.w_rs) * 100)))
                    : (this.coords.p_pointer = 0);
            },
            convertToRealPercent: function (e) {
                return (e / (100 - this.coords.p_handle)) * 100;
            },
            convertToFakePercent: function (e) {
                return (e / 100) * (100 - this.coords.p_handle);
            },
            getHandleX: function () {
                var e = 100 - this.coords.p_handle,
                    t = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                return 0 > t ? (t = 0) : t > e && (t = e), t;
            },
            calcHandlePercent: function () {
                (this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1)), (this.coords.p_handle = this.toFixed((this.coords.w_handle / this.coords.w_rs) * 100));
            },
            chooseHandle: function (e) {
                return "single" === this.options.type ? "single" : e >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? (this.options.to_fixed ? "from" : "to") : this.options.from_fixed ? "to" : "from";
            },
            calcMinMax: function () {
                this.coords.w_rs && ((this.labels.p_min = (this.labels.w_min / this.coords.w_rs) * 100), (this.labels.p_max = (this.labels.w_max / this.coords.w_rs) * 100));
            },
            calcLabels: function () {
                this.coords.w_rs &&
                    !this.options.hide_from_to &&
                    ("single" === this.options.type
                        ? ((this.labels.w_single = this.$cache.single.outerWidth(!1)),
                          (this.labels.p_single_fake = (this.labels.w_single / this.coords.w_rs) * 100),
                          (this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2))
                        : ((this.labels.w_from = this.$cache.from.outerWidth(!1)),
                          (this.labels.p_from_fake = (this.labels.w_from / this.coords.w_rs) * 100),
                          (this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2),
                          (this.labels.p_from_left = this.toFixed(this.labels.p_from_left)),
                          (this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake)),
                          (this.labels.w_to = this.$cache.to.outerWidth(!1)),
                          (this.labels.p_to_fake = (this.labels.w_to / this.coords.w_rs) * 100),
                          (this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2),
                          (this.labels.p_to_left = this.toFixed(this.labels.p_to_left)),
                          (this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake)),
                          (this.labels.w_single = this.$cache.single.outerWidth(!1)),
                          (this.labels.p_single_fake = (this.labels.w_single / this.coords.w_rs) * 100),
                          (this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2),
                          (this.labels.p_single_left = this.toFixed(this.labels.p_single_left))),
                    (this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)));
            },
            updateScene: function () {
                this.raf_id && (cancelAnimationFrame(this.raf_id), (this.raf_id = null)),
                    clearTimeout(this.update_tm),
                    (this.update_tm = null),
                    this.options && (this.drawHandles(), this.is_active ? (this.raf_id = requestAnimationFrame(this.updateScene.bind(this))) : (this.update_tm = setTimeout(this.updateScene.bind(this), 300)));
            },
            drawHandles: function () {
                (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
                    this.coords.w_rs &&
                        (this.coords.w_rs !== this.coords.w_rs_old && ((this.target = "base"), (this.is_resize = !0)),
                        (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) &&
                            (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), (this.force_redraw = !0), (this.coords.w_rs_old = this.coords.w_rs), this.drawShadow()),
                        this.coords.w_rs &&
                            (this.dragging || this.force_redraw || this.is_key) &&
                            ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) &&
                                (this.drawLabels(),
                                (this.$cache.bar[0].style.left = this.coords.p_bar_x + "%"),
                                (this.$cache.bar[0].style.width = this.coords.p_bar_w + "%"),
                                "single" === this.options.type
                                    ? (this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%")
                                    : ((this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%"),
                                      (this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%"),
                                      (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"),
                                      (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%")),
                                (this.$cache.single[0].style.left = this.labels.p_single_left + "%"),
                                this.writeToInput(),
                                (this.old_from === this.result.from && this.old_to === this.result.to) || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")),
                                (this.old_from = this.result.from),
                                (this.old_to = this.result.to),
                                this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(),
                                (this.is_key || this.is_click) && ((this.is_click = this.is_key = !1), this.callOnFinish()),
                                (this.is_finish = this.is_resize = this.is_update = !1)),
                            (this.force_redraw = this.is_click = this.is_key = this.is_start = !1)));
            },
            drawLabels: function () {
                if (this.options) {
                    var e = this.options.values.length,
                        t = this.options.p_values;
                    if (!this.options.hide_from_to)
                        if ("single" === this.options.type) {
                            if (e) e = this.decorate(t[this.result.from]);
                            else {
                                var n = this._prettify(this.result.from);
                                e = this.decorate(n, this.result.from);
                            }
                            this.$cache.single.html(e),
                                this.calcLabels(),
                                (this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible"),
                                (this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? "hidden" : "visible");
                        } else {
                            e
                                ? (this.options.decorate_both
                                      ? ((e = this.decorate(t[this.result.from])), (e += this.options.values_separator), (e += this.decorate(t[this.result.to])))
                                      : (e = this.decorate(t[this.result.from] + this.options.values_separator + t[this.result.to])),
                                  (n = this.decorate(t[this.result.from])),
                                  (t = this.decorate(t[this.result.to])))
                                : ((n = this._prettify(this.result.from)),
                                  (t = this._prettify(this.result.to)),
                                  this.options.decorate_both
                                      ? ((e = this.decorate(n, this.result.from)), (e += this.options.values_separator), (e += this.decorate(t, this.result.to)))
                                      : (e = this.decorate(n + this.options.values_separator + t, this.result.to)),
                                  (n = this.decorate(n, this.result.from)),
                                  (t = this.decorate(t, this.result.to))),
                                this.$cache.single.html(e),
                                this.$cache.from.html(n),
                                this.$cache.to.html(t),
                                this.calcLabels(),
                                (e = Math.min(this.labels.p_single_left, this.labels.p_from_left)),
                                (n = this.labels.p_single_left + this.labels.p_single_fake);
                            t = this.labels.p_to_left + this.labels.p_to_fake;
                            var i = Math.max(n, t);
                            this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left
                                ? ((this.$cache.from[0].style.visibility = "hidden"),
                                  (this.$cache.to[0].style.visibility = "hidden"),
                                  (this.$cache.single[0].style.visibility = "visible"),
                                  this.result.from === this.result.to
                                      ? ("from" === this.target
                                            ? (this.$cache.from[0].style.visibility = "visible")
                                            : "to" === this.target
                                            ? (this.$cache.to[0].style.visibility = "visible")
                                            : this.target || (this.$cache.from[0].style.visibility = "visible"),
                                        (this.$cache.single[0].style.visibility = "hidden"),
                                        (i = t))
                                      : ((this.$cache.from[0].style.visibility = "hidden"), (this.$cache.to[0].style.visibility = "hidden"), (this.$cache.single[0].style.visibility = "visible"), (i = Math.max(n, t))))
                                : ((this.$cache.from[0].style.visibility = "visible"), (this.$cache.to[0].style.visibility = "visible"), (this.$cache.single[0].style.visibility = "hidden")),
                                (this.$cache.min[0].style.visibility = e < this.labels.p_min + 1 ? "hidden" : "visible"),
                                (this.$cache.max[0].style.visibility = i > 100 - this.labels.p_max - 1 ? "hidden" : "visible");
                        }
                }
            },
            drawShadow: function () {
                var e = this.options,
                    t = this.$cache,
                    n = "number" == typeof e.from_min && !isNaN(e.from_min),
                    i = "number" == typeof e.from_max && !isNaN(e.from_max),
                    s = "number" == typeof e.to_min && !isNaN(e.to_min),
                    o = "number" == typeof e.to_max && !isNaN(e.to_max);
                "single" === e.type
                    ? e.from_shadow && (n || i)
                        ? ((n = this.convertToPercent(n ? e.from_min : e.min)),
                          (i = this.convertToPercent(i ? e.from_max : e.max) - n),
                          (n = this.toFixed(n - (this.coords.p_handle / 100) * n)),
                          (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
                          (n += this.coords.p_handle / 2),
                          (t.shad_single[0].style.display = "block"),
                          (t.shad_single[0].style.left = n + "%"),
                          (t.shad_single[0].style.width = i + "%"))
                        : (t.shad_single[0].style.display = "none")
                    : (e.from_shadow && (n || i)
                          ? ((n = this.convertToPercent(n ? e.from_min : e.min)),
                            (i = this.convertToPercent(i ? e.from_max : e.max) - n),
                            (n = this.toFixed(n - (this.coords.p_handle / 100) * n)),
                            (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
                            (n += this.coords.p_handle / 2),
                            (t.shad_from[0].style.display = "block"),
                            (t.shad_from[0].style.left = n + "%"),
                            (t.shad_from[0].style.width = i + "%"))
                          : (t.shad_from[0].style.display = "none"),
                      e.to_shadow && (s || o)
                          ? ((s = this.convertToPercent(s ? e.to_min : e.min)),
                            (e = this.convertToPercent(o ? e.to_max : e.max) - s),
                            (s = this.toFixed(s - (this.coords.p_handle / 100) * s)),
                            (e = this.toFixed(e - (this.coords.p_handle / 100) * e)),
                            (s += this.coords.p_handle / 2),
                            (t.shad_to[0].style.display = "block"),
                            (t.shad_to[0].style.left = s + "%"),
                            (t.shad_to[0].style.width = e + "%"))
                          : (t.shad_to[0].style.display = "none"));
            },
            writeToInput: function () {
                "single" === this.options.type
                    ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from))
                    : (this.options.values.length
                          ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value)
                          : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to),
                      this.$cache.input.data("from", this.result.from),
                      this.$cache.input.data("to", this.result.to));
            },
            callOnStart: function () {
                this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result));
            },
            callOnChange: function () {
                this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result));
            },
            callOnFinish: function () {
                this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result));
            },
            callOnUpdate: function () {
                this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result));
            },
            toggleInput: function () {
                this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), (this.has_tab_index = !this.has_tab_index);
            },
            convertToPercent: function (e, t) {
                var n = this.options.max - this.options.min;
                return n ? this.toFixed((t ? e : e - this.options.min) / (n / 100)) : ((this.no_diapason = !0), 0);
            },
            convertToValue: function (e) {
                var t,
                    n,
                    i = this.options.min,
                    s = this.options.max,
                    o = i.toString().split(".")[1],
                    r = s.toString().split(".")[1],
                    a = 0,
                    l = 0;
                return 0 === e
                    ? this.options.min
                    : 100 === e
                    ? this.options.max
                    : (o && (a = t = o.length),
                      r && (a = n = r.length),
                      t && n && (a = t >= n ? t : n),
                      0 > i && ((i = +(i + (l = Math.abs(i))).toFixed(a)), (s = +(s + l).toFixed(a))),
                      (e = ((s - i) / 100) * e + i),
                      (i = this.options.step.toString().split(".")[1]) ? (e = +e.toFixed(i.length)) : ((e /= this.options.step), (e = +(e *= this.options.step).toFixed(0))),
                      l && (e -= l),
                      (l = i ? +e.toFixed(i.length) : this.toFixed(e)) < this.options.min ? (l = this.options.min) : l > this.options.max && (l = this.options.max),
                      l);
            },
            calcWithStep: function (e) {
                var t = Math.round(e / this.coords.p_step) * this.coords.p_step;
                return 100 < t && (t = 100), 100 === e && (t = 100), this.toFixed(t);
            },
            checkMinInterval: function (e, t, n) {
                var i = this.options;
                return i.min_interval
                    ? ((e = this.convertToValue(e)), (t = this.convertToValue(t)), "from" === n ? t - e < i.min_interval && (e = t - i.min_interval) : e - t < i.min_interval && (e = t + i.min_interval), this.convertToPercent(e))
                    : e;
            },
            checkMaxInterval: function (e, t, n) {
                var i = this.options;
                return i.max_interval
                    ? ((e = this.convertToValue(e)), (t = this.convertToValue(t)), "from" === n ? t - e > i.max_interval && (e = t - i.max_interval) : e - t > i.max_interval && (e = t + i.max_interval), this.convertToPercent(e))
                    : e;
            },
            checkDiapason: function (e, t, n) {
                e = this.convertToValue(e);
                var i = this.options;
                return "number" != typeof t && (t = i.min), "number" != typeof n && (n = i.max), e < t && (e = t), e > n && (e = n), this.convertToPercent(e);
            },
            toFixed: function (e) {
                return +(e = e.toFixed(20));
            },
            _prettify: function (e) {
                return this.options.prettify_enabled ? (this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(e) : this.prettify(e)) : e;
            },
            prettify: function (e) {
                return e.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
            },
            checkEdges: function (e, t) {
                return this.options.force_edges ? (0 > e ? (e = 0) : e > 100 - t && (e = 100 - t), this.toFixed(e)) : this.toFixed(e);
            },
            validate: function () {
                var e,
                    t = this.options,
                    n = this.result,
                    i = t.values,
                    s = i.length;
                if (
                    ("string" == typeof t.min && (t.min = +t.min),
                    "string" == typeof t.max && (t.max = +t.max),
                    "string" == typeof t.from && (t.from = +t.from),
                    "string" == typeof t.to && (t.to = +t.to),
                    "string" == typeof t.step && (t.step = +t.step),
                    "string" == typeof t.from_min && (t.from_min = +t.from_min),
                    "string" == typeof t.from_max && (t.from_max = +t.from_max),
                    "string" == typeof t.to_min && (t.to_min = +t.to_min),
                    "string" == typeof t.to_max && (t.to_max = +t.to_max),
                    "string" == typeof t.grid_num && (t.grid_num = +t.grid_num),
                    t.max < t.min && (t.max = t.min),
                    s)
                )
                    for (t.p_values = [], t.min = 0, t.max = s - 1, t.step = 1, t.grid_num = t.max, t.grid_snap = !0, e = 0; e < s; e++) {
                        var o = +i[e];
                        isNaN(o) ? (o = i[e]) : ((i[e] = o), (o = this._prettify(o))), t.p_values.push(o);
                    }
                ("number" != typeof t.from || isNaN(t.from)) && (t.from = t.min),
                    ("number" != typeof t.to || isNaN(t.to)) && (t.to = t.max),
                    "single" === t.type
                        ? (t.from < t.min && (t.from = t.min), t.from > t.max && (t.from = t.max))
                        : (t.from < t.min && (t.from = t.min),
                          t.from > t.max && (t.from = t.max),
                          t.to < t.min && (t.to = t.min),
                          t.to > t.max && (t.to = t.max),
                          this.update_check.from && (this.update_check.from !== t.from && t.from > t.to && (t.from = t.to), this.update_check.to !== t.to && t.to < t.from && (t.to = t.from)),
                          t.from > t.to && (t.from = t.to),
                          t.to < t.from && (t.to = t.from)),
                    ("number" != typeof t.step || isNaN(t.step) || !t.step || 0 > t.step) && (t.step = 1),
                    "number" == typeof t.from_min && t.from < t.from_min && (t.from = t.from_min),
                    "number" == typeof t.from_max && t.from > t.from_max && (t.from = t.from_max),
                    "number" == typeof t.to_min && t.to < t.to_min && (t.to = t.to_min),
                    "number" == typeof t.to_max && t.from > t.to_max && (t.to = t.to_max),
                    n && (n.min !== t.min && (n.min = t.min), n.max !== t.max && (n.max = t.max), (n.from < n.min || n.from > n.max) && (n.from = t.from), (n.to < n.min || n.to > n.max) && (n.to = t.to)),
                    ("number" != typeof t.min_interval || isNaN(t.min_interval) || !t.min_interval || 0 > t.min_interval) && (t.min_interval = 0),
                    ("number" != typeof t.max_interval || isNaN(t.max_interval) || !t.max_interval || 0 > t.max_interval) && (t.max_interval = 0),
                    t.min_interval && t.min_interval > t.max - t.min && (t.min_interval = t.max - t.min),
                    t.max_interval && t.max_interval > t.max - t.min && (t.max_interval = t.max - t.min);
            },
            decorate: function (e, t) {
                var n = "",
                    i = this.options;
                return (
                    i.prefix && (n += i.prefix),
                    (n += e),
                    i.max_postfix && (i.values.length && e === i.p_values[i.max] ? ((n += i.max_postfix), i.postfix && (n += " ")) : t === i.max && ((n += i.max_postfix), i.postfix && (n += " "))),
                    i.postfix && (n += i.postfix),
                    n
                );
            },
            updateFrom: function () {
                (this.result.from = this.options.from),
                    (this.result.from_percent = this.convertToPercent(this.result.from)),
                    (this.result.from_pretty = this._prettify(this.result.from)),
                    this.options.values && (this.result.from_value = this.options.values[this.result.from]);
            },
            updateTo: function () {
                (this.result.to = this.options.to),
                    (this.result.to_percent = this.convertToPercent(this.result.to)),
                    (this.result.to_pretty = this._prettify(this.result.to)),
                    this.options.values && (this.result.to_value = this.options.values[this.result.to]);
            },
            updateResult: function () {
                (this.result.min = this.options.min), (this.result.max = this.options.max), this.updateFrom(), this.updateTo();
            },
            appendGrid: function () {
                if (this.options.grid) {
                    var e,
                        t = this.options,
                        n = t.max - t.min,
                        i = t.grid_num,
                        s = 4,
                        o = "";
                    if ((this.calcGridMargin(), t.grid_snap))
                        if (50 < n) {
                            i = 50 / t.step;
                            var r = this.toFixed(t.step / 0.5);
                        } else (i = n / t.step), (r = this.toFixed(t.step / (n / 100)));
                    else r = this.toFixed(100 / i);
                    for (4 < i && (s = 3), 7 < i && (s = 2), 14 < i && (s = 1), 28 < i && (s = 0), n = 0; n < i + 1; n++) {
                        var a = s,
                            l = this.toFixed(r * n);
                        100 < l && (l = 100), (this.coords.big[n] = l);
                        var c = (l - r * (n - 1)) / (a + 1);
                        for (e = 1; e <= a && 0 !== l; e++) {
                            o += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(l - c * e) + '%"></span>';
                        }
                        (o += '<span class="irs-grid-pol" style="left: ' + l + '%"></span>'),
                            (e = this.convertToValue(l)),
                            (o += '<span class="irs-grid-text js-grid-text-' + n + '" style="left: ' + l + '%">' + (e = t.values.length ? t.p_values[e] : this._prettify(e)) + "</span>");
                    }
                    (this.coords.big_num = Math.ceil(i + 1)), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(o), this.cacheGridLabels();
                }
            },
            cacheGridLabels: function () {
                var e,
                    t = this.coords.big_num;
                for (e = 0; e < t; e++) {
                    var n = this.$cache.grid.find(".js-grid-text-" + e);
                    this.$cache.grid_labels.push(n);
                }
                this.calcGridLabels();
            },
            calcGridLabels: function () {
                var e,
                    t = [],
                    n = [],
                    i = this.coords.big_num;
                for (e = 0; e < i; e++)
                    (this.coords.big_w[e] = this.$cache.grid_labels[e].outerWidth(!1)),
                        (this.coords.big_p[e] = this.toFixed((this.coords.big_w[e] / this.coords.w_rs) * 100)),
                        (this.coords.big_x[e] = this.toFixed(this.coords.big_p[e] / 2)),
                        (t[e] = this.toFixed(this.coords.big[e] - this.coords.big_x[e])),
                        (n[e] = this.toFixed(t[e] + this.coords.big_p[e]));
                for (
                    this.options.force_edges &&
                        (t[0] < -this.coords.grid_gap && ((t[0] = -this.coords.grid_gap), (n[0] = this.toFixed(t[0] + this.coords.big_p[0])), (this.coords.big_x[0] = this.coords.grid_gap)),
                        n[i - 1] > 100 + this.coords.grid_gap &&
                            ((n[i - 1] = 100 + this.coords.grid_gap), (t[i - 1] = this.toFixed(n[i - 1] - this.coords.big_p[i - 1])), (this.coords.big_x[i - 1] = this.toFixed(this.coords.big_p[i - 1] - this.coords.grid_gap)))),
                        this.calcGridCollision(2, t, n),
                        this.calcGridCollision(4, t, n),
                        e = 0;
                    e < i;
                    e++
                )
                    (t = this.$cache.grid_labels[e][0]), this.coords.big_x[e] !== Number.POSITIVE_INFINITY && (t.style.marginLeft = -this.coords.big_x[e] + "%");
            },
            calcGridCollision: function (e, t, n) {
                var i,
                    s = this.coords.big_num;
                for (i = 0; i < s; i += e) {
                    var o = i + e / 2;
                    if (o >= s) break;
                    this.$cache.grid_labels[o][0].style.visibility = n[i] <= t[o] ? "visible" : "hidden";
                }
            },
            calcGridMargin: function () {
                this.options.grid_margin &&
                    ((this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
                    this.coords.w_rs &&
                        ((this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1)),
                        (this.coords.p_handle = this.toFixed((this.coords.w_handle / this.coords.w_rs) * 100)),
                        (this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - 0.1)),
                        (this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%"),
                        (this.$cache.grid[0].style.left = this.coords.grid_gap + "%")));
            },
            update: function (t) {
                this.input &&
                    ((this.is_update = !0),
                    (this.options.from = this.result.from),
                    (this.options.to = this.result.to),
                    (this.update_check.from = this.result.from),
                    (this.update_check.to = this.result.to),
                    (this.options = e.extend(this.options, t)),
                    this.validate(),
                    this.updateResult(t),
                    this.toggleInput(),
                    this.remove(),
                    this.init(!0));
            },
            reset: function () {
                this.input && (this.updateResult(), this.update());
            },
            destroy: function () {
                this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), e.data(this.input, "ionRangeSlider", null), this.remove(), (this.options = this.input = null));
            },
        }),
            (e.fn.ionRangeSlider = function (t) {
                return this.each(function () {
                    e.data(this, "ionRangeSlider") || e.data(this, "ionRangeSlider", new c(this, t, a++));
                });
            }),
            (function () {
                for (var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !n.requestAnimationFrame; ++i)
                    (n.requestAnimationFrame = n[t[i] + "RequestAnimationFrame"]), (n.cancelAnimationFrame = n[t[i] + "CancelAnimationFrame"] || n[t[i] + "CancelRequestAnimationFrame"]);
                n.requestAnimationFrame ||
                    (n.requestAnimationFrame = function (t, i) {
                        var s = new Date().getTime(),
                            o = Math.max(0, 16 - (s - e)),
                            r = n.setTimeout(function () {
                                t(s + o);
                            }, o);
                        return (e = s + o), r;
                    }),
                    n.cancelAnimationFrame ||
                        (n.cancelAnimationFrame = function (e) {
                            clearTimeout(e);
                        });
            })();
    }),
    (function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? (module.exports = e(require("jquery"))) : e(jQuery);
    })(function (e) {
        e.extend(e.fn, {
            validate: function (t) {
                if (this.length) {
                    var n = e.data(this[0], "validator");
                    return (
                        n ||
                        (this.attr("novalidate", "novalidate"),
                        (n = new e.validator(t, this[0])),
                        e.data(this[0], "validator", n),
                        n.settings.onsubmit &&
                            (this.on("click.validate", ":submit", function (t) {
                                (n.submitButton = t.currentTarget), e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0);
                            }),
                            this.on("submit.validate", function (t) {
                                function i() {
                                    var i, s;
                                    return (
                                        n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)),
                                        !(n.settings.submitHandler && !n.settings.debug) || ((s = n.settings.submitHandler.call(n, n.currentForm, t)), i && i.remove(), void 0 !== s && s)
                                    );
                                }
                                return n.settings.debug && t.preventDefault(), n.cancelSubmit ? ((n.cancelSubmit = !1), i()) : n.form() ? (n.pendingRequest ? ((n.formSubmitted = !0), !1) : i()) : (n.focusInvalid(), !1);
                            })),
                        n)
                    );
                }
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
            },
            valid: function () {
                var t, n, i;
                return (
                    e(this[0]).is("form")
                        ? (t = this.validate().form())
                        : ((i = []),
                          (t = !0),
                          (n = e(this[0].form).validate()),
                          this.each(function () {
                              (t = n.element(this) && t) || (i = i.concat(n.errorList));
                          }),
                          (n.errorList = i)),
                    t
                );
            },
            rules: function (t, n) {
                var i,
                    s,
                    o,
                    r,
                    a,
                    l,
                    c = this[0],
                    u = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
                if (null != c && (!c.form && u && ((c.form = this.closest("form")[0]), (c.name = this.attr("name"))), null != c.form)) {
                    if (t)
                        switch (((i = e.data(c.form, "validator").settings), (s = i.rules), (o = e.validator.staticRules(c)), t)) {
                            case "add":
                                e.extend(o, e.validator.normalizeRule(n)), delete o.messages, (s[c.name] = o), n.messages && (i.messages[c.name] = e.extend(i.messages[c.name], n.messages));
                                break;
                            case "remove":
                                return n
                                    ? ((l = {}),
                                      e.each(n.split(/\s/), function (e, t) {
                                          (l[t] = o[t]), delete o[t];
                                      }),
                                      l)
                                    : (delete s[c.name], o);
                        }
                    return (
                        (r = e.validator.normalizeRules(e.extend({}, e.validator.classRules(c), e.validator.attributeRules(c), e.validator.dataRules(c), e.validator.staticRules(c)), c)).required &&
                            ((a = r.required), delete r.required, (r = e.extend({ required: a }, r))),
                        r.remote && ((a = r.remote), delete r.remote, (r = e.extend(r, { remote: a }))),
                        r
                    );
                }
            },
        }),
            e.extend(e.expr.pseudos || e.expr[":"], {
                blank: function (t) {
                    return !e.trim("" + e(t).val());
                },
                filled: function (t) {
                    var n = e(t).val();
                    return null !== n && !!e.trim("" + n);
                },
                unchecked: function (t) {
                    return !e(t).prop("checked");
                },
            }),
            (e.validator = function (t, n) {
                (this.settings = e.extend(!0, {}, e.validator.defaults, t)), (this.currentForm = n), this.init();
            }),
            (e.validator.format = function (t, n) {
                return 1 === arguments.length
                    ? function () {
                          var n = e.makeArray(arguments);
                          return n.unshift(t), e.validator.format.apply(this, n);
                      }
                    : void 0 === n
                    ? t
                    : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)),
                      n.constructor !== Array && (n = [n]),
                      e.each(n, function (e, n) {
                          t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
                              return n;
                          });
                      }),
                      t);
            }),
            e.extend(e.validator, {
                defaults: {
                    messages: {},
                    groups: {},
                    rules: {},
                    errorClass: "error",
                    pendingClass: "pending",
                    validClass: "valid",
                    errorElement: "label",
                    focusCleanup: !1,
                    focusInvalid: !0,
                    errorContainer: e([]),
                    errorLabelContainer: e([]),
                    onsubmit: !0,
                    ignore: ":hidden",
                    ignoreTitle: !1,
                    onfocusin: function (e) {
                        (this.lastActive = e), this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)));
                    },
                    onfocusout: function (e) {
                        this.checkable(e) || (!(e.name in this.submitted) && this.optional(e)) || this.element(e);
                    },
                    onkeyup: function (t, n) {
                        (9 === n.which && "" === this.elementValue(t)) || -1 !== e.inArray(n.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || ((t.name in this.submitted || t.name in this.invalid) && this.element(t));
                    },
                    onclick: function (e) {
                        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode);
                    },
                    highlight: function (t, n, i) {
                        "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i);
                    },
                    unhighlight: function (t, n, i) {
                        "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i);
                    },
                },
                setDefaults: function (t) {
                    e.extend(e.validator.defaults, t);
                },
                messages: {
                    required: "This field is required.",
                    remote: "Please fix this field.",
                    email: "Please enter a valid email address.",
                    url: "Please enter a valid URL.",
                    date: "Please enter a valid date.",
                    dateISO: "Please enter a valid date (ISO).",
                    number: "Please enter a valid number.",
                    digits: "Please enter only digits.",
                    equalTo: "Please enter the same value again.",
                    maxlength: e.validator.format("Please enter no more than {0} characters."),
                    minlength: e.validator.format("Please enter at least {0} characters."),
                    rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                    range: e.validator.format("Please enter a value between {0} and {1}."),
                    max: e.validator.format("Please enter a value less than or equal to {0}."),
                    min: e.validator.format("Please enter a value greater than or equal to {0}."),
                    step: e.validator.format("Please enter a multiple of {0}."),
                },
                autoCreateRanges: !1,
                prototype: {
                    init: function () {
                        function t(t) {
                            var n = void 0 !== e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");
                            if ((!this.form && n && ((this.form = e(this).closest("form")[0]), (this.name = e(this).attr("name"))), i === this.form)) {
                                var s = e.data(this.form, "validator"),
                                    o = "on" + t.type.replace(/^validate/, ""),
                                    r = s.settings;
                                r[o] && !e(this).is(r.ignore) && r[o].call(s, this, t);
                            }
                        }
                        (this.labelContainer = e(this.settings.errorLabelContainer)),
                            (this.errorContext = (this.labelContainer.length && this.labelContainer) || e(this.currentForm)),
                            (this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer)),
                            (this.submitted = {}),
                            (this.valueCache = {}),
                            (this.pendingRequest = 0),
                            (this.pending = {}),
                            (this.invalid = {}),
                            this.reset();
                        var n,
                            i = this.currentForm,
                            s = (this.groups = {});
                        e.each(this.settings.groups, function (t, n) {
                            "string" == typeof n && (n = n.split(/\s/)),
                                e.each(n, function (e, n) {
                                    s[n] = t;
                                });
                        }),
                            (n = this.settings.rules),
                            e.each(n, function (t, i) {
                                n[t] = e.validator.normalizeRule(i);
                            }),
                            e(this.currentForm)
                                .on(
                                    "focusin.validate focusout.validate keyup.validate",
                                    ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                                    t
                                )
                                .on("click.validate", "select, option, [type='radio'], [type='checkbox']", t),
                            this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                    },
                    form: function () {
                        return (
                            this.checkForm(), e.extend(this.submitted, this.errorMap), (this.invalid = e.extend({}, this.errorMap)), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                        );
                    },
                    checkForm: function () {
                        this.prepareForm();
                        for (var e = 0, t = (this.currentElements = this.elements()); t[e]; e++) this.check(t[e]);
                        return this.valid();
                    },
                    element: function (t) {
                        var n,
                            i,
                            s = this.clean(t),
                            o = this.validationTargetFor(s),
                            r = this,
                            a = !0;
                        return (
                            void 0 === o
                                ? delete this.invalid[s.name]
                                : (this.prepareElement(o),
                                  (this.currentElements = e(o)),
                                  (i = this.groups[o.name]) &&
                                      e.each(this.groups, function (e, t) {
                                          t === i && e !== o.name && (s = r.validationTargetFor(r.clean(r.findByName(e)))) && s.name in r.invalid && (r.currentElements.push(s), (a = r.check(s) && a));
                                      }),
                                  (n = !1 !== this.check(o)),
                                  (a = a && n),
                                  (this.invalid[o.name] = !n),
                                  this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                                  this.showErrors(),
                                  e(t).attr("aria-invalid", !n)),
                            a
                        );
                    },
                    showErrors: function (t) {
                        if (t) {
                            var n = this;
                            e.extend(this.errorMap, t),
                                (this.errorList = e.map(this.errorMap, function (e, t) {
                                    return { message: e, element: n.findByName(t)[0] };
                                })),
                                (this.successList = e.grep(this.successList, function (e) {
                                    return !(e.name in t);
                                }));
                        }
                        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
                    },
                    resetForm: function () {
                        e.fn.resetForm && e(this.currentForm).resetForm(), (this.invalid = {}), (this.submitted = {}), this.prepareForm(), this.hideErrors();
                        var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                        this.resetElements(t);
                    },
                    resetElements: function (e) {
                        var t;
                        if (this.settings.unhighlight) for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
                        else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
                    },
                    numberOfInvalids: function () {
                        return this.objectLength(this.invalid);
                    },
                    objectLength: function (e) {
                        var t,
                            n = 0;
                        for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
                        return n;
                    },
                    hideErrors: function () {
                        this.hideThese(this.toHide);
                    },
                    hideThese: function (e) {
                        e.not(this.containers).text(""), this.addWrapper(e).hide();
                    },
                    valid: function () {
                        return 0 === this.size();
                    },
                    size: function () {
                        return this.errorList.length;
                    },
                    focusInvalid: function () {
                        if (this.settings.focusInvalid)
                            try {
                                e(this.findLastActive() || (this.errorList.length && this.errorList[0].element) || [])
                                    .filter(":visible")
                                    .trigger("focus")
                                    .trigger("focusin");
                            } catch (e) {}
                    },
                    findLastActive: function () {
                        var t = this.lastActive;
                        return (
                            t &&
                            1 ===
                                e.grep(this.errorList, function (e) {
                                    return e.element.name === t.name;
                                }).length &&
                            t
                        );
                    },
                    elements: function () {
                        var t = this,
                            n = {};
                        return e(this.currentForm)
                            .find("input, select, textarea, [contenteditable]")
                            .not(":submit, :reset, :image, :disabled")
                            .not(this.settings.ignore)
                            .filter(function () {
                                var i = this.name || e(this).attr("name"),
                                    s = void 0 !== e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");
                                return (
                                    !i && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                                    s && ((this.form = e(this).closest("form")[0]), (this.name = i)),
                                    !(this.form !== t.currentForm || i in n || !t.objectLength(e(this).rules()) || ((n[i] = !0), 0))
                                );
                            });
                    },
                    clean: function (t) {
                        return e(t)[0];
                    },
                    errors: function () {
                        var t = this.settings.errorClass.split(" ").join(".");
                        return e(this.settings.errorElement + "." + t, this.errorContext);
                    },
                    resetInternals: function () {
                        (this.successList = []), (this.errorList = []), (this.errorMap = {}), (this.toShow = e([])), (this.toHide = e([]));
                    },
                    reset: function () {
                        this.resetInternals(), (this.currentElements = e([]));
                    },
                    prepareForm: function () {
                        this.reset(), (this.toHide = this.errors().add(this.containers));
                    },
                    prepareElement: function (e) {
                        this.reset(), (this.toHide = this.errorsFor(e));
                    },
                    elementValue: function (t) {
                        var n,
                            i,
                            s = e(t),
                            o = t.type,
                            r = void 0 !== s.attr("contenteditable") && "false" !== s.attr("contenteditable");
                        return "radio" === o || "checkbox" === o
                            ? this.findByName(t.name).filter(":checked").val()
                            : "number" === o && void 0 !== t.validity
                            ? t.validity.badInput
                                ? "NaN"
                                : s.val()
                            : ((n = r ? s.text() : s.val()),
                              "file" === o
                                  ? "C:\\fakepath\\" === n.substr(0, 12)
                                      ? n.substr(12)
                                      : (i = n.lastIndexOf("/")) >= 0
                                      ? n.substr(i + 1)
                                      : (i = n.lastIndexOf("\\")) >= 0
                                      ? n.substr(i + 1)
                                      : n
                                  : "string" == typeof n
                                  ? n.replace(/\r/g, "")
                                  : n);
                    },
                    check: function (t) {
                        t = this.validationTargetFor(this.clean(t));
                        var n,
                            i,
                            s,
                            o,
                            r = e(t).rules(),
                            a = e.map(r, function (e, t) {
                                return t;
                            }).length,
                            l = !1,
                            c = this.elementValue(t);
                        for (i in ("function" == typeof r.normalizer ? (o = r.normalizer) : "function" == typeof this.settings.normalizer && (o = this.settings.normalizer), o && ((c = o.call(t, c)), delete r.normalizer), r)) {
                            s = { method: i, parameters: r[i] };
                            try {
                                if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, c, t, s.parameters)) && 1 === a) {
                                    l = !0;
                                    continue;
                                }
                                if (((l = !1), "pending" === n)) return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                                if (!n) return this.formatAndAdd(t, s), !1;
                            } catch (e) {
                                throw (
                                    (this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method.", e),
                                    e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method."),
                                    e)
                                );
                            }
                        }
                        if (!l) return this.objectLength(r) && this.successList.push(t), !0;
                    },
                    customDataMessage: function (t, n) {
                        return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg");
                    },
                    customMessage: function (e, t) {
                        var n = this.settings.messages[e];
                        return n && (n.constructor === String ? n : n[t]);
                    },
                    findDefined: function () {
                        for (var e = 0; e < arguments.length; e++) if (void 0 !== arguments[e]) return arguments[e];
                    },
                    defaultMessage: function (t, n) {
                        "string" == typeof n && (n = { method: n });
                        var i = this.findDefined(
                                this.customMessage(t.name, n.method),
                                this.customDataMessage(t, n.method),
                                (!this.settings.ignoreTitle && t.title) || void 0,
                                e.validator.messages[n.method],
                                "<strong>Warning: No message defined for " + t.name + "</strong>"
                            ),
                            s = /\$?\{(\d+)\}/g;
                        return "function" == typeof i ? (i = i.call(this, n.parameters, t)) : s.test(i) && (i = e.validator.format(i.replace(s, "{$1}"), n.parameters)), i;
                    },
                    formatAndAdd: function (e, t) {
                        var n = this.defaultMessage(e, t);
                        this.errorList.push({ message: n, element: e, method: t.method }), (this.errorMap[e.name] = n), (this.submitted[e.name] = n);
                    },
                    addWrapper: function (e) {
                        return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
                    },
                    defaultShowErrors: function () {
                        var e, t, n;
                        for (e = 0; this.errorList[e]; e++)
                            (n = this.errorList[e]), this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                        if ((this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)) for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                        if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                        (this.toHide = this.toHide.not(this.toShow)), this.hideErrors(), this.addWrapper(this.toShow).show();
                    },
                    validElements: function () {
                        return this.currentElements.not(this.invalidElements());
                    },
                    invalidElements: function () {
                        return e(this.errorList).map(function () {
                            return this.element;
                        });
                    },
                    showLabel: function (t, n) {
                        var i,
                            s,
                            o,
                            r,
                            a = this.errorsFor(t),
                            l = this.idOrName(t),
                            c = e(t).attr("aria-describedby");
                        a.length
                            ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n))
                            : ((i = a = e("<" + this.settings.errorElement + ">")
                                  .attr("id", l + "-error")
                                  .addClass(this.settings.errorClass)
                                  .html(n || "")),
                              this.settings.wrapper &&
                                  (i = a
                                      .hide()
                                      .show()
                                      .wrap("<" + this.settings.wrapper + "/>")
                                      .parent()),
                              this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t),
                              a.is("label")
                                  ? a.attr("for", l)
                                  : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length &&
                                    ((o = a.attr("id")),
                                    c ? c.match(new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (c += " " + o) : (c = o),
                                    e(t).attr("aria-describedby", c),
                                    (s = this.groups[t.name]) &&
                                        ((r = this),
                                        e.each(r.groups, function (t, n) {
                                            n === s && e("[name='" + r.escapeCssMeta(t) + "']", r.currentForm).attr("aria-describedby", a.attr("id"));
                                        })))),
                            !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)),
                            (this.toShow = this.toShow.add(a));
                    },
                    errorsFor: function (t) {
                        var n = this.escapeCssMeta(this.idOrName(t)),
                            i = e(t).attr("aria-describedby"),
                            s = "label[for='" + n + "'], label[for='" + n + "'] *";
                        return i && (s = s + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(s);
                    },
                    escapeCssMeta: function (e) {
                        return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
                    },
                    idOrName: function (e) {
                        return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
                    },
                    validationTargetFor: function (t) {
                        return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0];
                    },
                    checkable: function (e) {
                        return /radio|checkbox/i.test(e.type);
                    },
                    findByName: function (t) {
                        return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']");
                    },
                    getLength: function (t, n) {
                        switch (n.nodeName.toLowerCase()) {
                            case "select":
                                return e("option:selected", n).length;
                            case "input":
                                if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length;
                        }
                        return t.length;
                    },
                    depend: function (e, t) {
                        return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t);
                    },
                    dependTypes: {
                        boolean: function (e) {
                            return e;
                        },
                        string: function (t, n) {
                            return !!e(t, n.form).length;
                        },
                        function: function (e, t) {
                            return e(t);
                        },
                    },
                    optional: function (t) {
                        var n = this.elementValue(t);
                        return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch";
                    },
                    startRequest: function (t) {
                        this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), (this.pending[t.name] = !0));
                    },
                    stopRequest: function (t, n) {
                        this.pendingRequest--,
                            this.pendingRequest < 0 && (this.pendingRequest = 0),
                            delete this.pending[t.name],
                            e(t).removeClass(this.settings.pendingClass),
                            n && 0 === this.pendingRequest && this.formSubmitted && this.form()
                                ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), (this.formSubmitted = !1))
                                : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), (this.formSubmitted = !1));
                    },
                    previousValue: function (t, n) {
                        return (n = ("string" == typeof n && n) || "remote"), e.data(t, "previousValue") || e.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, { method: n }) });
                    },
                    destroy: function () {
                        this.resetForm(),
                            e(this.currentForm)
                                .off(".validate")
                                .removeData("validator")
                                .find(".validate-equalTo-blur")
                                .off(".validate-equalTo")
                                .removeClass("validate-equalTo-blur")
                                .find(".validate-lessThan-blur")
                                .off(".validate-lessThan")
                                .removeClass("validate-lessThan-blur")
                                .find(".validate-lessThanEqual-blur")
                                .off(".validate-lessThanEqual")
                                .removeClass("validate-lessThanEqual-blur")
                                .find(".validate-greaterThanEqual-blur")
                                .off(".validate-greaterThanEqual")
                                .removeClass("validate-greaterThanEqual-blur")
                                .find(".validate-greaterThan-blur")
                                .off(".validate-greaterThan")
                                .removeClass("validate-greaterThan-blur");
                    },
                },
                classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
                addClassRules: function (t, n) {
                    t.constructor === String ? (this.classRuleSettings[t] = n) : e.extend(this.classRuleSettings, t);
                },
                classRules: function (t) {
                    var n = {},
                        i = e(t).attr("class");
                    return (
                        i &&
                            e.each(i.split(" "), function () {
                                this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]);
                            }),
                        n
                    );
                },
                normalizeAttributeRule: function (e, t, n, i) {
                    /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && ((i = Number(i)), isNaN(i) && (i = void 0)), i || 0 === i ? (e[n] = i) : t === n && "range" !== t && (e[n] = !0);
                },
                attributeRules: function (t) {
                    var n,
                        i,
                        s = {},
                        o = e(t),
                        r = t.getAttribute("type");
                    for (n in e.validator.methods) "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), (i = !!i)) : (i = o.attr(n)), this.normalizeAttributeRule(s, r, n, i);
                    return s.maxlength && /-1|2147483647|524288/.test(s.maxlength) && delete s.maxlength, s;
                },
                dataRules: function (t) {
                    var n,
                        i,
                        s = {},
                        o = e(t),
                        r = t.getAttribute("type");
                    for (n in e.validator.methods) "" === (i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase())) && (i = !0), this.normalizeAttributeRule(s, r, n, i);
                    return s;
                },
                staticRules: function (t) {
                    var n = {},
                        i = e.data(t.form, "validator");
                    return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n;
                },
                normalizeRules: function (t, n) {
                    return (
                        e.each(t, function (i, s) {
                            if (!1 !== s) {
                                if (s.param || s.depends) {
                                    var o = !0;
                                    switch (typeof s.depends) {
                                        case "string":
                                            o = !!e(s.depends, n.form).length;
                                            break;
                                        case "function":
                                            o = s.depends.call(n, n);
                                    }
                                    o ? (t[i] = void 0 === s.param || s.param) : (e.data(n.form, "validator").resetElements(e(n)), delete t[i]);
                                }
                            } else delete t[i];
                        }),
                        e.each(t, function (i, s) {
                            t[i] = e.isFunction(s) && "normalizer" !== i ? s(n) : s;
                        }),
                        e.each(["minlength", "maxlength"], function () {
                            t[this] && (t[this] = Number(t[this]));
                        }),
                        e.each(["rangelength", "range"], function () {
                            var n;
                            t[this] &&
                                (e.isArray(t[this]) ? (t[this] = [Number(t[this][0]), Number(t[this][1])]) : "string" == typeof t[this] && ((n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/)), (t[this] = [Number(n[0]), Number(n[1])])));
                        }),
                        e.validator.autoCreateRanges &&
                            (null != t.min && null != t.max && ((t.range = [t.min, t.max]), delete t.min, delete t.max),
                            null != t.minlength && null != t.maxlength && ((t.rangelength = [t.minlength, t.maxlength]), delete t.minlength, delete t.maxlength)),
                        t
                    );
                },
                normalizeRule: function (t) {
                    if ("string" == typeof t) {
                        var n = {};
                        e.each(t.split(/\s/), function () {
                            n[this] = !0;
                        }),
                            (t = n);
                    }
                    return t;
                },
                addMethod: function (t, n, i) {
                    (e.validator.methods[t] = n), (e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t]), n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t));
                },
                methods: {
                    required: function (t, n, i) {
                        if (!this.depend(i, n)) return "dependency-mismatch";
                        if ("select" === n.nodeName.toLowerCase()) {
                            var s = e(n).val();
                            return s && s.length > 0;
                        }
                        return this.checkable(n) ? this.getLength(t, n) > 0 : null != t && t.length > 0;
                    },
                    email: function (e, t) {
                        return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
                    },
                    url: function (e, t) {
                        return (
                            this.optional(t) ||
                            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
                                e
                            )
                        );
                    },
                    date: (function () {
                        var e = !1;
                        return function (t, n) {
                            return (
                                e ||
                                    ((e = !0),
                                    this.settings.debug &&
                                        window.console &&
                                        console.warn(
                                            "The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."
                                        )),
                                this.optional(n) || !/Invalid|NaN/.test(new Date(t).toString())
                            );
                        };
                    })(),
                    dateISO: function (e, t) {
                        return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
                    },
                    number: function (e, t) {
                        return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
                    },
                    digits: function (e, t) {
                        return this.optional(t) || /^\d+$/.test(e);
                    },
                    minlength: function (t, n, i) {
                        var s = e.isArray(t) ? t.length : this.getLength(t, n);
                        return this.optional(n) || s >= i;
                    },
                    maxlength: function (t, n, i) {
                        var s = e.isArray(t) ? t.length : this.getLength(t, n);
                        return this.optional(n) || s <= i;
                    },
                    rangelength: function (t, n, i) {
                        var s = e.isArray(t) ? t.length : this.getLength(t, n);
                        return this.optional(n) || (s >= i[0] && s <= i[1]);
                    },
                    min: function (e, t, n) {
                        return this.optional(t) || e >= n;
                    },
                    max: function (e, t, n) {
                        return this.optional(t) || e <= n;
                    },
                    range: function (e, t, n) {
                        return this.optional(t) || (e >= n[0] && e <= n[1]);
                    },
                    step: function (t, n, i) {
                        var s,
                            o = e(n).attr("type"),
                            r = "Step attribute on input type " + o + " is not supported.",
                            a = new RegExp("\\b" + o + "\\b"),
                            l = function (e) {
                                var t = ("" + e).match(/(?:\.(\d+))?$/);
                                return t && t[1] ? t[1].length : 0;
                            },
                            c = function (e) {
                                return Math.round(e * Math.pow(10, s));
                            },
                            u = !0;
                        if (o && !a.test(["text", "number", "range"].join())) throw new Error(r);
                        return (s = l(i)), (l(t) > s || c(t) % c(i) != 0) && (u = !1), this.optional(n) || u;
                    },
                    equalTo: function (t, n, i) {
                        var s = e(i);
                        return (
                            this.settings.onfocusout &&
                                s.not(".validate-equalTo-blur").length &&
                                s.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                                    e(n).valid();
                                }),
                            t === s.val()
                        );
                    },
                    remote: function (t, n, i, s) {
                        if (this.optional(n)) return "dependency-mismatch";
                        s = ("string" == typeof s && s) || "remote";
                        var o,
                            r,
                            a,
                            l = this.previousValue(n, s);
                        return (
                            this.settings.messages[n.name] || (this.settings.messages[n.name] = {}),
                            (l.originalMessage = l.originalMessage || this.settings.messages[n.name][s]),
                            (this.settings.messages[n.name][s] = l.message),
                            (i = ("string" == typeof i && { url: i }) || i),
                            (a = e.param(e.extend({ data: t }, i.data))),
                            l.old === a
                                ? l.valid
                                : ((l.old = a),
                                  (o = this),
                                  this.startRequest(n),
                                  ((r = {})[n.name] = t),
                                  e.ajax(
                                      e.extend(
                                          !0,
                                          {
                                              mode: "abort",
                                              port: "validate" + n.name,
                                              dataType: "json",
                                              data: r,
                                              context: o.currentForm,
                                              success: function (e) {
                                                  var i,
                                                      r,
                                                      a,
                                                      c = !0 === e || "true" === e;
                                                  (o.settings.messages[n.name][s] = l.originalMessage),
                                                      c
                                                          ? ((a = o.formSubmitted), o.resetInternals(), (o.toHide = o.errorsFor(n)), (o.formSubmitted = a), o.successList.push(n), (o.invalid[n.name] = !1), o.showErrors())
                                                          : ((i = {}), (r = e || o.defaultMessage(n, { method: s, parameters: t })), (i[n.name] = l.message = r), (o.invalid[n.name] = !0), o.showErrors(i)),
                                                      (l.valid = c),
                                                      o.stopRequest(n, c);
                                              },
                                          },
                                          i
                                      )
                                  ),
                                  "pending")
                        );
                    },
                },
            });
        var t,
            n = {};
        return (
            e.ajaxPrefilter
                ? e.ajaxPrefilter(function (e, t, i) {
                      var s = e.port;
                      "abort" === e.mode && (n[s] && n[s].abort(), (n[s] = i));
                  })
                : ((t = e.ajax),
                  (e.ajax = function (i) {
                      var s = ("mode" in i ? i : e.ajaxSettings).mode,
                          o = ("port" in i ? i : e.ajaxSettings).port;
                      return "abort" === s ? (n[o] && n[o].abort(), (n[o] = t.apply(this, arguments)), n[o]) : t.apply(this, arguments);
                  })),
            e
        );
    }),
    (function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? (module.exports = e(require("jquery"))) : e(jQuery);
    })(function (e) {
        "use strict";
        var t = window.Slick || {};
        ((t = (function () {
            var t = 0;
            return function (n, i) {
                var s,
                    o = this;
                (o.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(n),
                    appendDots: e(n),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, n) {
                        return e('<button type="button" />').text(n + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                }),
                    (o.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1,
                    }),
                    e.extend(o, o.initials),
                    (o.activeBreakpoint = null),
                    (o.animType = null),
                    (o.animProp = null),
                    (o.breakpoints = []),
                    (o.breakpointSettings = []),
                    (o.cssTransitions = !1),
                    (o.focussed = !1),
                    (o.interrupted = !1),
                    (o.hidden = "hidden"),
                    (o.paused = !0),
                    (o.positionProp = null),
                    (o.respondTo = null),
                    (o.rowCount = 1),
                    (o.shouldClick = !0),
                    (o.$slider = e(n)),
                    (o.$slidesCache = null),
                    (o.transformType = null),
                    (o.transitionType = null),
                    (o.visibilityChange = "visibilitychange"),
                    (o.windowWidth = 0),
                    (o.windowTimer = null),
                    (s = e(n).data("slick") || {}),
                    (o.options = e.extend({}, o.defaults, i, s)),
                    (o.currentSlide = o.options.initialSlide),
                    (o.originalSettings = o.options),
                    void 0 !== document.mozHidden
                        ? ((o.hidden = "mozHidden"), (o.visibilityChange = "mozvisibilitychange"))
                        : void 0 !== document.webkitHidden && ((o.hidden = "webkitHidden"), (o.visibilityChange = "webkitvisibilitychange")),
                    (o.autoPlay = e.proxy(o.autoPlay, o)),
                    (o.autoPlayClear = e.proxy(o.autoPlayClear, o)),
                    (o.autoPlayIterator = e.proxy(o.autoPlayIterator, o)),
                    (o.changeSlide = e.proxy(o.changeSlide, o)),
                    (o.clickHandler = e.proxy(o.clickHandler, o)),
                    (o.selectHandler = e.proxy(o.selectHandler, o)),
                    (o.setPosition = e.proxy(o.setPosition, o)),
                    (o.swipeHandler = e.proxy(o.swipeHandler, o)),
                    (o.dragHandler = e.proxy(o.dragHandler, o)),
                    (o.keyHandler = e.proxy(o.keyHandler, o)),
                    (o.instanceUid = t++),
                    (o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    o.registerBreakpoints(),
                    o.init(!0);
            };
        })()).prototype.activateADA = function () {
            this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
        }),
            (t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
                var s = this;
                if ("boolean" == typeof n) (i = n), (n = null);
                else if (n < 0 || n >= s.slideCount) return !1;
                s.unload(),
                    "number" == typeof n
                        ? 0 === n && 0 === s.$slides.length
                            ? e(t).appendTo(s.$slideTrack)
                            : i
                            ? e(t).insertBefore(s.$slides.eq(n))
                            : e(t).insertAfter(s.$slides.eq(n))
                        : !0 === i
                        ? e(t).prependTo(s.$slideTrack)
                        : e(t).appendTo(s.$slideTrack),
                    (s.$slides = s.$slideTrack.children(this.options.slide)),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    s.$slides.each(function (t, n) {
                        e(n).attr("data-slick-index", t);
                    }),
                    (s.$slidesCache = s.$slides),
                    s.reinit();
            }),
            (t.prototype.animateHeight = function () {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({ height: t }, e.options.speed);
                }
            }),
            (t.prototype.animateSlide = function (t, n) {
                var i = {},
                    s = this;
                s.animateHeight(),
                    !0 === s.options.rtl && !1 === s.options.vertical && (t = -t),
                    !1 === s.transformsEnabled
                        ? !1 === s.options.vertical
                            ? s.$slideTrack.animate({ left: t }, s.options.speed, s.options.easing, n)
                            : s.$slideTrack.animate({ top: t }, s.options.speed, s.options.easing, n)
                        : !1 === s.cssTransitions
                        ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                          e({ animStart: s.currentLeft }).animate(
                              { animStart: t },
                              {
                                  duration: s.options.speed,
                                  easing: s.options.easing,
                                  step: function (e) {
                                      (e = Math.ceil(e)), !1 === s.options.vertical ? ((i[s.animType] = "translate(" + e + "px, 0px)"), s.$slideTrack.css(i)) : ((i[s.animType] = "translate(0px," + e + "px)"), s.$slideTrack.css(i));
                                  },
                                  complete: function () {
                                      n && n.call();
                                  },
                              }
                          ))
                        : (s.applyTransition(),
                          (t = Math.ceil(t)),
                          !1 === s.options.vertical ? (i[s.animType] = "translate3d(" + t + "px, 0px, 0px)") : (i[s.animType] = "translate3d(0px," + t + "px, 0px)"),
                          s.$slideTrack.css(i),
                          n &&
                              setTimeout(function () {
                                  s.disableTransition(), n.call();
                              }, s.options.speed));
            }),
            (t.prototype.getNavTarget = function () {
                var t = this.options.asNavFor;
                return t && null !== t && (t = e(t).not(this.$slider)), t;
            }),
            (t.prototype.asNavFor = function (t) {
                var n = this.getNavTarget();
                null !== n &&
                    "object" == typeof n &&
                    n.each(function () {
                        var n = e(this).slick("getSlick");
                        n.unslicked || n.slideHandler(t, !0);
                    });
            }),
            (t.prototype.applyTransition = function (e) {
                var t = this,
                    n = {};
                !1 === t.options.fade ? (n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase) : (n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase),
                    !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
            }),
            (t.prototype.autoPlay = function () {
                var e = this;
                e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
            }),
            (t.prototype.autoPlayClear = function () {
                this.autoPlayTimer && clearInterval(this.autoPlayTimer);
            }),
            (t.prototype.autoPlayIterator = function () {
                var e = this,
                    t = e.currentSlide + e.options.slidesToScroll;
                e.paused ||
                    e.interrupted ||
                    e.focussed ||
                    (!1 === e.options.infinite &&
                        (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? (e.direction = 0) : 0 === e.direction && ((t = e.currentSlide - e.options.slidesToScroll), e.currentSlide - 1 == 0 && (e.direction = 1))),
                    e.slideHandler(t));
            }),
            (t.prototype.buildArrows = function () {
                var t = this;
                !0 === t.options.arrows &&
                    ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
                    (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
                    t.slideCount > t.options.slidesToShow
                        ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                          !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                        : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
            }),
            (t.prototype.buildDots = function () {
                var t,
                    n,
                    i = this;
                if (!0 === i.options.dots) {
                    for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                    (i.$dots = n.appendTo(i.options.appendDots)), i.$dots.find("li").first().addClass("slick-active");
                }
            }),
            (t.prototype.buildOut = function () {
                var t = this;
                (t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.$slides.each(function (t, n) {
                        e(n)
                            .attr("data-slick-index", t)
                            .data("originalStyling", e(n).attr("style") || "");
                    }),
                    t.$slider.addClass("slick-slider"),
                    (t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
                    (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                    t.$slideTrack.css("opacity", 0),
                    (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) || (t.options.slidesToScroll = 1),
                    e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.buildDots(),
                    t.updateDots(),
                    t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                    !0 === t.options.draggable && t.$list.addClass("draggable");
            }),
            (t.prototype.buildRows = function () {
                var e,
                    t,
                    n,
                    i,
                    s,
                    o,
                    r,
                    a = this;
                if (((i = document.createDocumentFragment()), (o = a.$slider.children()), a.options.rows > 1)) {
                    for (r = a.options.slidesPerRow * a.options.rows, s = Math.ceil(o.length / r), e = 0; e < s; e++) {
                        var l = document.createElement("div");
                        for (t = 0; t < a.options.rows; t++) {
                            var c = document.createElement("div");
                            for (n = 0; n < a.options.slidesPerRow; n++) {
                                var u = e * r + (t * a.options.slidesPerRow + n);
                                o.get(u) && c.appendChild(o.get(u));
                            }
                            l.appendChild(c);
                        }
                        i.appendChild(l);
                    }
                    a.$slider.empty().append(i),
                        a.$slider
                            .children()
                            .children()
                            .children()
                            .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
                }
            }),
            (t.prototype.checkResponsive = function (t, n) {
                var i,
                    s,
                    o,
                    r = this,
                    a = !1,
                    l = r.$slider.width(),
                    c = window.innerWidth || e(window).width();
                if (("window" === r.respondTo ? (o = c) : "slider" === r.respondTo ? (o = l) : "min" === r.respondTo && (o = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive)) {
                    for (i in ((s = null), r.breakpoints)) r.breakpoints.hasOwnProperty(i) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[i] && (s = r.breakpoints[i]) : o > r.breakpoints[i] && (s = r.breakpoints[i]));
                    null !== s
                        ? null !== r.activeBreakpoint
                            ? (s !== r.activeBreakpoint || n) &&
                              ((r.activeBreakpoint = s),
                              "unslick" === r.breakpointSettings[s] ? r.unslick(s) : ((r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s])), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)),
                              (a = s))
                            : ((r.activeBreakpoint = s),
                              "unslick" === r.breakpointSettings[s] ? r.unslick(s) : ((r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s])), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)),
                              (a = s))
                        : null !== r.activeBreakpoint && ((r.activeBreakpoint = null), (r.options = r.originalSettings), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), (a = s)),
                        t || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
                }
            }),
            (t.prototype.changeSlide = function (t, n) {
                var i,
                    s,
                    o = this,
                    r = e(t.currentTarget);
                switch ((r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), (i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll), t.data.message)) {
                    case "previous":
                        (s = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i), o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, n);
                        break;
                    case "next":
                        (s = 0 === i ? o.options.slidesToScroll : i), o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, n);
                        break;
                    case "index":
                        var a = 0 === t.data.index ? 0 : t.data.index || r.index() * o.options.slidesToScroll;
                        o.slideHandler(o.checkNavigable(a), !1, n), r.children().trigger("focus");
                        break;
                    default:
                        return;
                }
            }),
            (t.prototype.checkNavigable = function (e) {
                var t, n;
                if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1])) e = t[t.length - 1];
                else
                    for (var i in t) {
                        if (e < t[i]) {
                            e = n;
                            break;
                        }
                        n = t[i];
                    }
                return e;
            }),
            (t.prototype.cleanUpEvents = function () {
                var t = this;
                t.options.dots &&
                    null !== t.$dots &&
                    (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
                    !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
                    t.$slider.off("focus.slick blur.slick"),
                    !0 === t.options.arrows &&
                        t.slideCount > t.options.slidesToShow &&
                        (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
                        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
                        !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
                    t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
                    t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
                    t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                    t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
                    t.$list.off("click.slick", t.clickHandler),
                    e(document).off(t.visibilityChange, t.visibility),
                    t.cleanUpSlideEvents(),
                    !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
                    e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
                    e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
                    e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
                    e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
            }),
            (t.prototype.cleanUpSlideEvents = function () {
                var t = this;
                t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
            }),
            (t.prototype.cleanUpRows = function () {
                var e,
                    t = this;
                t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e));
            }),
            (t.prototype.clickHandler = function (e) {
                !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
            }),
            (t.prototype.destroy = function (t) {
                var n = this;
                n.autoPlayClear(),
                    (n.touchObject = {}),
                    n.cleanUpEvents(),
                    e(".slick-cloned", n.$slider).detach(),
                    n.$dots && n.$dots.remove(),
                    n.$prevArrow &&
                        n.$prevArrow.length &&
                        (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
                    n.$nextArrow &&
                        n.$nextArrow.length &&
                        (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
                    n.$slides &&
                        (n.$slides
                            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                            .removeAttr("aria-hidden")
                            .removeAttr("data-slick-index")
                            .each(function () {
                                e(this).attr("style", e(this).data("originalStyling"));
                            }),
                        n.$slideTrack.children(this.options.slide).detach(),
                        n.$slideTrack.detach(),
                        n.$list.detach(),
                        n.$slider.append(n.$slides)),
                    n.cleanUpRows(),
                    n.$slider.removeClass("slick-slider"),
                    n.$slider.removeClass("slick-initialized"),
                    n.$slider.removeClass("slick-dotted"),
                    (n.unslicked = !0),
                    t || n.$slider.trigger("destroy", [n]);
            }),
            (t.prototype.disableTransition = function (e) {
                var t = this,
                    n = {};
                (n[t.transitionType] = ""), !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
            }),
            (t.prototype.fadeSlide = function (e, t) {
                var n = this;
                !1 === n.cssTransitions
                    ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
                    : (n.applyTransition(e),
                      n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
                      t &&
                          setTimeout(function () {
                              n.disableTransition(e), t.call();
                          }, n.options.speed));
            }),
            (t.prototype.fadeSlideOut = function (e) {
                var t = this;
                !1 === t.cssTransitions ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
            }),
            (t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
                var t = this;
                null !== e && ((t.$slidesCache = t.$slides), t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
            }),
            (t.prototype.focusHandler = function () {
                var t = this;
                t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
                    n.stopImmediatePropagation();
                    var i = e(this);
                    setTimeout(function () {
                        t.options.pauseOnFocus && ((t.focussed = i.is(":focus")), t.autoPlay());
                    }, 0);
                });
            }),
            (t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
                return this.currentSlide;
            }),
            (t.prototype.getDotCount = function () {
                var e = this,
                    t = 0,
                    n = 0,
                    i = 0;
                if (!0 === e.options.infinite)
                    if (e.slideCount <= e.options.slidesToShow) ++i;
                    else for (; t < e.slideCount; ) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                else if (!0 === e.options.centerMode) i = e.slideCount;
                else if (e.options.asNavFor) for (; t < e.slideCount; ) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                return i - 1;
            }),
            (t.prototype.getLeft = function (e) {
                for (var t, n, i, s, o = this, r = 0, a = [], l = [], c = 0; c < o.$slides.length; c++) a[c] = o.$slides[c].clientHeight;
                ((o.slideOffset = 0),
                (n = o.$slides.first().outerHeight(!0)),
                !0 === o.options.infinite
                    ? (o.slideCount > o.options.slidesToShow &&
                          ((o.slideOffset = o.slideWidth * o.options.slidesToShow * -1),
                          (s = -1),
                          !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? (s = -1.5) : 1 === o.options.slidesToShow && (s = -2)),
                          !0 === o.options.vertical && !0 === o.options.infinite && (n = o.$slides.last().outerHeight(!0)),
                          (r = n * o.options.slidesToShow * s)),
                      o.slideCount % o.options.slidesToScroll != 0 &&
                          e + o.options.slidesToScroll > o.slideCount &&
                          o.slideCount > o.options.slidesToShow &&
                          (e > o.slideCount
                              ? ((o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1), (r = (o.options.slidesToShow - (e - o.slideCount)) * n * -1))
                              : ((o.slideOffset = (o.slideCount % o.options.slidesToScroll) * o.slideWidth * -1), (r = (o.slideCount % o.options.slidesToScroll) * n * -1))))
                    : e + o.options.slidesToShow > o.slideCount && ((o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth), (r = (e + o.options.slidesToShow - o.slideCount) * n)),
                o.slideCount <= o.options.slidesToShow && ((o.slideOffset = 0), (r = 0)),
                !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow
                    ? (o.slideOffset = (o.slideWidth * Math.floor(o.options.slidesToShow)) / 2 - (o.slideWidth * o.slideCount) / 2)
                    : !0 === o.options.centerMode && !0 === o.options.infinite
                    ? (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth)
                    : !0 === o.options.centerMode && ((o.slideOffset = 0), (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
                !1 === o.options.vertical)
                    ? (t = e * o.slideWidth * -1 + o.slideOffset)
                    : (t =
                          -1 *
                              (0 !== (l = a.slice(0, e)).length
                                  ? l.reduce(function (e, t) {
                                        return e + t;
                                    })
                                  : 0) +
                          r);
                return (
                    !0 === o.options.variableWidth &&
                        ((i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow)),
                        (t = !0 === o.options.rtl ? (i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                        !0 === o.options.centerMode &&
                            ((i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1)),
                            (t = !0 === o.options.rtl ? (i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                            (t += (o.$list.width() - i.outerWidth()) / 2))),
                    t
                );
            }),
            (t.prototype.getOption = t.prototype.slickGetOption = function (e) {
                return this.options[e];
            }),
            (t.prototype.getNavigableIndexes = function () {
                var e,
                    t = this,
                    n = 0,
                    i = 0,
                    s = [];
                for (!1 === t.options.infinite ? (e = t.slideCount) : ((n = -1 * t.options.slidesToScroll), (i = -1 * t.options.slidesToScroll), (e = 2 * t.slideCount)); n < e; )
                    s.push(n), (n = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                return s;
            }),
            (t.prototype.getSlick = function () {
                return this;
            }),
            (t.prototype.getSlideCount = function () {
                var t,
                    n,
                    i = this;
                return (
                    (n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0),
                    !0 === i.options.swipeToSlide
                        ? (i.$slideTrack.find(".slick-slide").each(function (s, o) {
                              if (o.offsetLeft - n + e(o).outerWidth() / 2 > -1 * i.swipeLeft) return (t = o), !1;
                          }),
                          Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1)
                        : i.options.slidesToScroll
                );
            }),
            (t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
                this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
            }),
            (t.prototype.init = function (t) {
                var n = this;
                e(n.$slider).hasClass("slick-initialized") ||
                    (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()),
                    t && n.$slider.trigger("init", [n]),
                    !0 === n.options.accessibility && n.initADA(),
                    n.options.autoplay && ((n.paused = !1), n.autoPlay());
            }),
            (t.prototype.initADA = function () {
                var t = this,
                    n = Math.ceil(t.slideCount / t.options.slidesToShow),
                    i = t.getNavigableIndexes().filter(function (e) {
                        return e >= 0 && e < t.slideCount;
                    });
                t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                    null !== t.$dots &&
                        (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
                            var s = i.indexOf(n);
                            e(this).attr({ role: "tabpanel", id: "slick-slide" + t.instanceUid + n, tabindex: -1 }), -1 !== s && e(this).attr({ "aria-describedby": "slick-slide-control" + t.instanceUid + s });
                        }),
                        t.$dots
                            .attr("role", "tablist")
                            .find("li")
                            .each(function (s) {
                                var o = i[s];
                                e(this).attr({ role: "presentation" }),
                                    e(this)
                                        .find("button")
                                        .first()
                                        .attr({ role: "tab", id: "slick-slide-control" + t.instanceUid + s, "aria-controls": "slick-slide" + t.instanceUid + o, "aria-label": s + 1 + " of " + n, "aria-selected": null, tabindex: "-1" });
                            })
                            .eq(t.currentSlide)
                            .find("button")
                            .attr({ "aria-selected": "true", tabindex: "0" })
                            .end());
                for (var s = t.currentSlide, o = s + t.options.slidesToShow; s < o; s++) t.$slides.eq(s).attr("tabindex", 0);
                t.activateADA();
            }),
            (t.prototype.initArrowEvents = function () {
                var e = this;
                !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide),
                    e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide),
                    !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)));
            }),
            (t.prototype.initDotEvents = function () {
                var t = this;
                !0 === t.options.dots && (e("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
                    !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
            }),
            (t.prototype.initSlideEvents = function () {
                var t = this;
                t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
            }),
            (t.prototype.initializeEvents = function () {
                var t = this;
                t.initArrowEvents(),
                    t.initDotEvents(),
                    t.initSlideEvents(),
                    t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler),
                    t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler),
                    t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler),
                    t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler),
                    t.$list.on("click.slick", t.clickHandler),
                    e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
                    !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                    e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
                    e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
                    e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
                    e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
                    e(t.setPosition);
            }),
            (t.prototype.initUI = function () {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
            }),
            (t.prototype.keyHandler = function (e) {
                var t = this;
                e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === e.keyCode && !0 === t.options.accessibility
                        ? t.changeSlide({ data: { message: !0 === t.options.rtl ? "next" : "previous" } })
                        : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? "previous" : "next" } }));
            }),
            (t.prototype.lazyLoad = function () {
                var t,
                    n,
                    i,
                    s = this;
                function o(t) {
                    e("img[data-lazy]", t).each(function () {
                        var t = e(this),
                            n = e(this).attr("data-lazy"),
                            i = e(this).attr("data-srcset"),
                            o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                            r = document.createElement("img");
                        (r.onload = function () {
                            t.animate({ opacity: 0 }, 100, function () {
                                i && (t.attr("srcset", i), o && t.attr("sizes", o)),
                                    t.attr("src", n).animate({ opacity: 1 }, 200, function () {
                                        t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                    }),
                                    s.$slider.trigger("lazyLoaded", [s, t, n]);
                            });
                        }),
                            (r.onerror = function () {
                                t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n]);
                            }),
                            (r.src = n);
                    });
                }
                if (
                    (!0 === s.options.centerMode
                        ? !0 === s.options.infinite
                            ? (i = (n = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2)
                            : ((n = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1))), (i = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide))
                        : ((n = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide), (i = Math.ceil(n + s.options.slidesToShow)), !0 === s.options.fade && (n > 0 && n--, i <= s.slideCount && i++)),
                    (t = s.$slider.find(".slick-slide").slice(n, i)),
                    "anticipated" === s.options.lazyLoad)
                )
                    for (var r = n - 1, a = i, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++) r < 0 && (r = s.slideCount - 1), (t = (t = t.add(l.eq(r))).add(l.eq(a))), r--, a++;
                o(t),
                    s.slideCount <= s.options.slidesToShow
                        ? o(s.$slider.find(".slick-slide"))
                        : s.currentSlide >= s.slideCount - s.options.slidesToShow
                        ? o(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow))
                        : 0 === s.currentSlide && o(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow));
            }),
            (t.prototype.loadSlider = function () {
                var e = this;
                e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
            }),
            (t.prototype.next = t.prototype.slickNext = function () {
                this.changeSlide({ data: { message: "next" } });
            }),
            (t.prototype.orientationChange = function () {
                this.checkResponsive(), this.setPosition();
            }),
            (t.prototype.pause = t.prototype.slickPause = function () {
                this.autoPlayClear(), (this.paused = !0);
            }),
            (t.prototype.play = t.prototype.slickPlay = function () {
                var e = this;
                e.autoPlay(), (e.options.autoplay = !0), (e.paused = !1), (e.focussed = !1), (e.interrupted = !1);
            }),
            (t.prototype.postSlide = function (t) {
                var n = this;
                n.unslicked ||
                    (n.$slider.trigger("afterChange", [n, t]),
                    (n.animating = !1),
                    n.slideCount > n.options.slidesToShow && n.setPosition(),
                    (n.swipeLeft = null),
                    n.options.autoplay && n.autoPlay(),
                    !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
            }),
            (t.prototype.prev = t.prototype.slickPrev = function () {
                this.changeSlide({ data: { message: "previous" } });
            }),
            (t.prototype.preventDefault = function (e) {
                e.preventDefault();
            }),
            (t.prototype.progressiveLazyLoad = function (t) {
                t = t || 1;
                var n,
                    i,
                    s,
                    o,
                    r,
                    a = this,
                    l = e("img[data-lazy]", a.$slider);
                l.length
                    ? ((n = l.first()),
                      (i = n.attr("data-lazy")),
                      (s = n.attr("data-srcset")),
                      (o = n.attr("data-sizes") || a.$slider.attr("data-sizes")),
                      ((r = document.createElement("img")).onload = function () {
                          s && (n.attr("srcset", s), o && n.attr("sizes", o)),
                              n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                              !0 === a.options.adaptiveHeight && a.setPosition(),
                              a.$slider.trigger("lazyLoaded", [a, n, i]),
                              a.progressiveLazyLoad();
                      }),
                      (r.onerror = function () {
                          t < 3
                              ? setTimeout(function () {
                                    a.progressiveLazyLoad(t + 1);
                                }, 500)
                              : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad());
                      }),
                      (r.src = i))
                    : a.$slider.trigger("allImagesLoaded", [a]);
            }),
            (t.prototype.refresh = function (t) {
                var n,
                    i,
                    s = this;
                (i = s.slideCount - s.options.slidesToShow),
                    !s.options.infinite && s.currentSlide > i && (s.currentSlide = i),
                    s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                    (n = s.currentSlide),
                    s.destroy(!0),
                    e.extend(s, s.initials, { currentSlide: n }),
                    s.init(),
                    t || s.changeSlide({ data: { message: "index", index: n } }, !1);
            }),
            (t.prototype.registerBreakpoints = function () {
                var t,
                    n,
                    i,
                    s = this,
                    o = s.options.responsive || null;
                if ("array" === e.type(o) && o.length) {
                    for (t in ((s.respondTo = s.options.respondTo || "window"), o))
                        if (((i = s.breakpoints.length - 1), o.hasOwnProperty(t))) {
                            for (n = o[t].breakpoint; i >= 0; ) s.breakpoints[i] && s.breakpoints[i] === n && s.breakpoints.splice(i, 1), i--;
                            s.breakpoints.push(n), (s.breakpointSettings[n] = o[t].settings);
                        }
                    s.breakpoints.sort(function (e, t) {
                        return s.options.mobileFirst ? e - t : t - e;
                    });
                }
            }),
            (t.prototype.reinit = function () {
                var t = this;
                (t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
                    t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
                    t.registerBreakpoints(),
                    t.setProps(),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.updateArrows(),
                    t.initArrowEvents(),
                    t.buildDots(),
                    t.updateDots(),
                    t.initDotEvents(),
                    t.cleanUpSlideEvents(),
                    t.initSlideEvents(),
                    t.checkResponsive(!1, !0),
                    !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                    t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                    t.setPosition(),
                    t.focusHandler(),
                    (t.paused = !t.options.autoplay),
                    t.autoPlay(),
                    t.$slider.trigger("reInit", [t]);
            }),
            (t.prototype.resize = function () {
                var t = this;
                e(window).width() !== t.windowWidth &&
                    (clearTimeout(t.windowDelay),
                    (t.windowDelay = window.setTimeout(function () {
                        (t.windowWidth = e(window).width()), t.checkResponsive(), t.unslicked || t.setPosition();
                    }, 50)));
            }),
            (t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
                var i = this;
                if (((e = "boolean" == typeof e ? (!0 === (t = e) ? 0 : i.slideCount - 1) : !0 === t ? --e : e), i.slideCount < 1 || e < 0 || e > i.slideCount - 1)) return !1;
                i.unload(),
                    !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(),
                    (i.$slides = i.$slideTrack.children(this.options.slide)),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slideTrack.append(i.$slides),
                    (i.$slidesCache = i.$slides),
                    i.reinit();
            }),
            (t.prototype.setCSS = function (e) {
                var t,
                    n,
                    i = this,
                    s = {};
                !0 === i.options.rtl && (e = -e),
                    (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (s[i.positionProp] = e),
                    !1 === i.transformsEnabled
                        ? i.$slideTrack.css(s)
                        : ((s = {}), !1 === i.cssTransitions ? ((s[i.animType] = "translate(" + t + ", " + n + ")"), i.$slideTrack.css(s)) : ((s[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(s)));
            }),
            (t.prototype.setDimensions = function () {
                var e = this;
                !1 === e.options.vertical
                    ? !0 === e.options.centerMode && e.$list.css({ padding: "0px " + e.options.centerPadding })
                    : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + " 0px" })),
                    (e.listWidth = e.$list.width()),
                    (e.listHeight = e.$list.height()),
                    !1 === e.options.vertical && !1 === e.options.variableWidth
                        ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length)))
                        : !0 === e.options.variableWidth
                        ? e.$slideTrack.width(5e3 * e.slideCount)
                        : ((e.slideWidth = Math.ceil(e.listWidth)), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
            }),
            (t.prototype.setFade = function () {
                var t,
                    n = this;
                n.$slides.each(function (i, s) {
                    (t = n.slideWidth * i * -1),
                        !0 === n.options.rtl ? e(s).css({ position: "relative", right: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 }) : e(s).css({ position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 });
                }),
                    n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 });
            }),
            (t.prototype.setHeight = function () {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t);
                }
            }),
            (t.prototype.setOption = t.prototype.slickSetOption = function () {
                var t,
                    n,
                    i,
                    s,
                    o,
                    r = this,
                    a = !1;
                if (
                    ("object" === e.type(arguments[0])
                        ? ((i = arguments[0]), (a = arguments[1]), (o = "multiple"))
                        : "string" === e.type(arguments[0]) &&
                          ((i = arguments[0]), (s = arguments[1]), (a = arguments[2]), "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? (o = "responsive") : void 0 !== arguments[1] && (o = "single")),
                    "single" === o)
                )
                    r.options[i] = s;
                else if ("multiple" === o)
                    e.each(i, function (e, t) {
                        r.options[e] = t;
                    });
                else if ("responsive" === o)
                    for (n in s)
                        if ("array" !== e.type(r.options.responsive)) r.options.responsive = [s[n]];
                        else {
                            for (t = r.options.responsive.length - 1; t >= 0; ) r.options.responsive[t].breakpoint === s[n].breakpoint && r.options.responsive.splice(t, 1), t--;
                            r.options.responsive.push(s[n]);
                        }
                a && (r.unload(), r.reinit());
            }),
            (t.prototype.setPosition = function () {
                var e = this;
                e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]);
            }),
            (t.prototype.setProps = function () {
                var e = this,
                    t = document.body.style;
                (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
                    "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
                    (void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition) || (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                    e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : (e.options.zIndex = e.defaults.zIndex)),
                    void 0 !== t.OTransform && ((e.animType = "OTransform"), (e.transformType = "-o-transform"), (e.transitionType = "OTransition"), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                    void 0 !== t.MozTransform &&
                        ((e.animType = "MozTransform"), (e.transformType = "-moz-transform"), (e.transitionType = "MozTransition"), void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
                    void 0 !== t.webkitTransform &&
                        ((e.animType = "webkitTransform"), (e.transformType = "-webkit-transform"), (e.transitionType = "webkitTransition"), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                    void 0 !== t.msTransform && ((e.animType = "msTransform"), (e.transformType = "-ms-transform"), (e.transitionType = "msTransition"), void 0 === t.msTransform && (e.animType = !1)),
                    void 0 !== t.transform && !1 !== e.animType && ((e.animType = "transform"), (e.transformType = "transform"), (e.transitionType = "transition")),
                    (e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType);
            }),
            (t.prototype.setSlideClasses = function (e) {
                var t,
                    n,
                    i,
                    s,
                    o = this;
                if (((n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode)) {
                    var r = o.options.slidesToShow % 2 == 0 ? 1 : 0;
                    (t = Math.floor(o.options.slidesToShow / 2)),
                        !0 === o.options.infinite &&
                            (e >= t && e <= o.slideCount - 1 - t
                                ? o.$slides
                                      .slice(e - t + r, e + t + 1)
                                      .addClass("slick-active")
                                      .attr("aria-hidden", "false")
                                : ((i = o.options.slidesToShow + e),
                                  n
                                      .slice(i - t + 1 + r, i + t + 2)
                                      .addClass("slick-active")
                                      .attr("aria-hidden", "false")),
                            0 === e ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")),
                        o.$slides.eq(e).addClass("slick-center");
                } else
                    e >= 0 && e <= o.slideCount - o.options.slidesToShow
                        ? o.$slides
                              .slice(e, e + o.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                        : n.length <= o.options.slidesToShow
                        ? n.addClass("slick-active").attr("aria-hidden", "false")
                        : ((s = o.slideCount % o.options.slidesToShow),
                          (i = !0 === o.options.infinite ? o.options.slidesToShow + e : e),
                          o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow
                              ? n
                                    .slice(i - (o.options.slidesToShow - s), i + s)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")
                              : n
                                    .slice(i, i + o.options.slidesToShow)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false"));
                ("ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad) || o.lazyLoad();
            }),
            (t.prototype.setupInfinite = function () {
                var t,
                    n,
                    i,
                    s = this;
                if ((!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && ((n = null), s.slideCount > s.options.slidesToShow))) {
                    for (i = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, t = s.slideCount; t > s.slideCount - i; t -= 1)
                        (n = t - 1),
                            e(s.$slides[n])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", n - s.slideCount)
                                .prependTo(s.$slideTrack)
                                .addClass("slick-cloned");
                    for (t = 0; t < i + s.slideCount; t += 1)
                        (n = t),
                            e(s.$slides[n])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", n + s.slideCount)
                                .appendTo(s.$slideTrack)
                                .addClass("slick-cloned");
                    s.$slideTrack
                        .find(".slick-cloned")
                        .find("[id]")
                        .each(function () {
                            e(this).attr("id", "");
                        });
                }
            }),
            (t.prototype.interrupt = function (e) {
                e || this.autoPlay(), (this.interrupted = e);
            }),
            (t.prototype.selectHandler = function (t) {
                var n = this,
                    i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                    s = parseInt(i.attr("data-slick-index"));
                s || (s = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(s, !1, !0) : n.slideHandler(s);
            }),
            (t.prototype.slideHandler = function (e, t, n) {
                var i,
                    s,
                    o,
                    r,
                    a,
                    l,
                    c = this;
                if (((t = t || !1), !((!0 === c.animating && !0 === c.options.waitForAnimate) || (!0 === c.options.fade && c.currentSlide === e))))
                    if (
                        (!1 === t && c.asNavFor(e),
                        (i = e),
                        (a = c.getLeft(i)),
                        (r = c.getLeft(c.currentSlide)),
                        (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
                        !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
                    )
                        !1 === c.options.fade &&
                            ((i = c.currentSlide),
                            !0 !== n
                                ? c.animateSlide(r, function () {
                                      c.postSlide(i);
                                  })
                                : c.postSlide(i));
                    else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll))
                        !1 === c.options.fade &&
                            ((i = c.currentSlide),
                            !0 !== n
                                ? c.animateSlide(r, function () {
                                      c.postSlide(i);
                                  })
                                : c.postSlide(i));
                    else {
                        if (
                            (c.options.autoplay && clearInterval(c.autoPlayTimer),
                            (s =
                                i < 0
                                    ? c.slideCount % c.options.slidesToScroll != 0
                                        ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                                        : c.slideCount + i
                                    : i >= c.slideCount
                                    ? c.slideCount % c.options.slidesToScroll != 0
                                        ? 0
                                        : i - c.slideCount
                                    : i),
                            (c.animating = !0),
                            c.$slider.trigger("beforeChange", [c, c.currentSlide, s]),
                            (o = c.currentSlide),
                            (c.currentSlide = s),
                            c.setSlideClasses(c.currentSlide),
                            c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide),
                            c.updateDots(),
                            c.updateArrows(),
                            !0 === c.options.fade)
                        )
                            return (
                                !0 !== n
                                    ? (c.fadeSlideOut(o),
                                      c.fadeSlide(s, function () {
                                          c.postSlide(s);
                                      }))
                                    : c.postSlide(s),
                                void c.animateHeight()
                            );
                        !0 !== n
                            ? c.animateSlide(a, function () {
                                  c.postSlide(s);
                              })
                            : c.postSlide(s);
                    }
            }),
            (t.prototype.startLoad = function () {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()),
                    !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
                    e.$slider.addClass("slick-loading");
            }),
            (t.prototype.swipeDirection = function () {
                var e,
                    t,
                    n,
                    i,
                    s = this;
                return (
                    (e = s.touchObject.startX - s.touchObject.curX),
                    (t = s.touchObject.startY - s.touchObject.curY),
                    (n = Math.atan2(t, e)),
                    (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
                    i <= 45 && i >= 0
                        ? !1 === s.options.rtl
                            ? "left"
                            : "right"
                        : i <= 360 && i >= 315
                        ? !1 === s.options.rtl
                            ? "left"
                            : "right"
                        : i >= 135 && i <= 225
                        ? !1 === s.options.rtl
                            ? "right"
                            : "left"
                        : !0 === s.options.verticalSwiping
                        ? i >= 35 && i <= 135
                            ? "down"
                            : "up"
                        : "vertical"
                );
            }),
            (t.prototype.swipeEnd = function (e) {
                var t,
                    n,
                    i = this;
                if (((i.dragging = !1), (i.swiping = !1), i.scrolling)) return (i.scrolling = !1), !1;
                if (((i.interrupted = !1), (i.shouldClick = !(i.touchObject.swipeLength > 10)), void 0 === i.touchObject.curX)) return !1;
                if ((!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe)) {
                    switch ((n = i.swipeDirection())) {
                        case "left":
                        case "down":
                            (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount()), (i.currentDirection = 0);
                            break;
                        case "right":
                        case "up":
                            (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount()), (i.currentDirection = 1);
                    }
                    "vertical" != n && (i.slideHandler(t), (i.touchObject = {}), i.$slider.trigger("swipe", [i, n]));
                } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), (i.touchObject = {}));
            }),
            (t.prototype.swipeHandler = function (e) {
                var t = this;
                if (!(!1 === t.options.swipe || ("ontouchend" in document && !1 === t.options.swipe) || (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))))
                    switch (
                        ((t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1),
                        (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
                        !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
                        e.data.action)
                    ) {
                        case "start":
                            t.swipeStart(e);
                            break;
                        case "move":
                            t.swipeMove(e);
                            break;
                        case "end":
                            t.swipeEnd(e);
                    }
            }),
            (t.prototype.swipeMove = function (e) {
                var t,
                    n,
                    i,
                    s,
                    o,
                    r,
                    a = this;
                return (
                    (o = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
                    !(!a.dragging || a.scrolling || (o && 1 !== o.length)) &&
                        ((t = a.getLeft(a.currentSlide)),
                        (a.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX),
                        (a.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY),
                        (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2)))),
                        (r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
                        !a.options.verticalSwiping && !a.swiping && r > 4
                            ? ((a.scrolling = !0), !1)
                            : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r),
                              (n = a.swipeDirection()),
                              void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && ((a.swiping = !0), e.preventDefault()),
                              (s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                              !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                              (i = a.touchObject.swipeLength),
                              (a.touchObject.edgeHit = !1),
                              !1 === a.options.infinite &&
                                  ((0 === a.currentSlide && "right" === n) || (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                                  ((i = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                              !1 === a.options.vertical ? (a.swipeLeft = t + i * s) : (a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * s),
                              !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * s),
                              !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
                );
            }),
            (t.prototype.swipeStart = function (e) {
                var t,
                    n = this;
                if (((n.interrupted = !0), 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)) return (n.touchObject = {}), !1;
                void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
                    (n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX),
                    (n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY),
                    (n.dragging = !0);
            }),
            (t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
                var e = this;
                null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
            }),
            (t.prototype.unload = function () {
                var t = this;
                e(".slick-cloned", t.$slider).remove(),
                    t.$dots && t.$dots.remove(),
                    t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
                    t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
                    t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
            }),
            (t.prototype.unslick = function (e) {
                var t = this;
                t.$slider.trigger("unslick", [t, e]), t.destroy();
            }),
            (t.prototype.updateArrows = function () {
                var e = this;
                Math.floor(e.options.slidesToShow / 2),
                    !0 === e.options.arrows &&
                        e.slideCount > e.options.slidesToShow &&
                        !e.options.infinite &&
                        (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        0 === e.currentSlide
                            ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode
                            ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : e.currentSlide >= e.slideCount - 1 &&
                              !0 === e.options.centerMode &&
                              (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
            }),
            (t.prototype.updateDots = function () {
                var e = this;
                null !== e.$dots &&
                    (e.$dots.find("li").removeClass("slick-active").end(),
                    e.$dots
                        .find("li")
                        .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
                        .addClass("slick-active"));
            }),
            (t.prototype.visibility = function () {
                var e = this;
                e.options.autoplay && (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
            }),
            (e.fn.slick = function () {
                var e,
                    n,
                    i = this,
                    s = arguments[0],
                    o = Array.prototype.slice.call(arguments, 1),
                    r = i.length;
                for (e = 0; e < r; e++) if (("object" == typeof s || void 0 === s ? (i[e].slick = new t(i[e], s)) : (n = i[e].slick[s].apply(i[e].slick, o)), void 0 !== n)) return n;
                return i;
            });
    }),
    (window.dzsprx_self_options = {}),
    (window.dzsprx_index = 0),
    (function (c) {
        (c.fn.dzsparallaxer = function (b) {
            if (void 0 === b && void 0 !== c(this).attr("data-options") && "" != c(this).attr("data-options")) {
                var n = c(this).attr("data-options");
                eval("window.dzsprx_self_options = " + n), (b = c.extend({}, window.dzsprx_self_options)), (window.dzsprx_self_options = c.extend({}, {}));
            }
            (b = c.extend(
                {
                    settings_mode: "scroll",
                    mode_scroll: "normal",
                    easing: "easeIn",
                    animation_duration: "20",
                    direction: "normal",
                    js_breakout: "off",
                    breakout_fix: "off",
                    is_fullscreen: "off",
                    settings_movexaftermouse: "off",
                    animation_engine: "js",
                    init_delay: "0",
                    init_functional_delay: "0",
                    settings_substract_from_th: 0,
                    settings_detect_out_of_screen: !0,
                    init_functional_remove_delay_on_scroll: "off",
                    settings_makeFunctional: !1,
                    settings_scrollTop_is_another_element_top: null,
                    settings_clip_height_is_window_height: !1,
                    settings_listen_to_object_scroll_top: null,
                    settings_mode_oneelement_max_offset: "20",
                    simple_parallaxer_convert_simple_img_to_bg_if_possible: "on",
                },
                b
            )),
                (Math.easeIn = function (e, t, n, i) {
                    return -n * (e /= i) * (e - 2) + t;
                }),
                (Math.easeOutQuad = function (e, t, n, i) {
                    return -n * (e /= i) * (e - 2) + t;
                }),
                (Math.easeInOutSine = function (e, t, n, i) {
                    return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
                }),
                (b.settings_mode_oneelement_max_offset = parseInt(b.settings_mode_oneelement_max_offset, 10));
            var m = parseInt(b.settings_mode_oneelement_max_offset, 10);
            this.each(function () {
                function n() {
                    if (1 == b.settings_makeFunctional) {
                        var e = !1,
                            t = document.URL,
                            n = t.indexOf("://") + 3,
                            i = t.indexOf("/", n);
                        if (
                            (-1 < (t = t.substring(n, i)).indexOf("l") && -1 < t.indexOf("c") && -1 < t.indexOf("o") && -1 < t.indexOf("l") && -1 < t.indexOf("a") && -1 < t.indexOf("h") && (e = !0),
                            -1 < t.indexOf("d") && -1 < t.indexOf("i") && -1 < t.indexOf("g") && -1 < t.indexOf("d") && -1 < t.indexOf("z") && -1 < t.indexOf("s") && (e = !0),
                            -1 < t.indexOf("o") && -1 < t.indexOf("z") && -1 < t.indexOf("e") && -1 < t.indexOf("h") && -1 < t.indexOf("t") && (e = !0),
                            -1 < t.indexOf("e") && -1 < t.indexOf("v") && -1 < t.indexOf("n") && -1 < t.indexOf("a") && -1 < t.indexOf("t") && (e = !0),
                            0 == e)
                        )
                            return;
                    }
                    b.settings_scrollTop_is_another_element_top && (z = b.settings_scrollTop_is_another_element_top),
                        (g = a.find(".dzsparallaxer--target").eq(0)),
                        0 < a.find(".dzsparallaxer--blackoverlay").length && (K = a.find(".dzsparallaxer--blackoverlay").eq(0)),
                        0 < a.find(".dzsparallaxer--fadeouttarget").length && (ba = a.find(".dzsparallaxer--fadeouttarget").eq(0)),
                        a.find(".dzsparallaxer--aftermouse").length &&
                            a.find(".dzsparallaxer--aftermouse").each(function () {
                                var e = c(this);
                                L.push(e);
                            }),
                        a.hasClass("wait-readyall") ||
                            setTimeout(function () {
                                B = Number(b.animation_duration);
                            }, 300),
                        a.addClass("mode-" + b.settings_mode),
                        a.addClass("animation-engine-" + b.animation_engine),
                        (h = a.height()),
                        "on" == b.settings_movexaftermouse && (x = a.width()),
                        g && ((k = g.height()), "on" == b.settings_movexaftermouse && (r = g.width())),
                        b.settings_substract_from_th && (k -= b.settings_substract_from_th),
                        (la = h),
                        "2" == b.breakout_fix && console.info(a.prev()),
                        a.attr("data-responsive-reference-width") && (M = Number(a.attr("data-responsive-reference-width"))),
                        a.attr("data-responsive-optimal-height") && (U = Number(a.attr("data-responsive-optimal-height"))),
                        a.find(".dzsprxseparator--bigcurvedline").length &&
                            a.find(".dzsprxseparator--bigcurvedline").each(function () {
                                var e = c(this),
                                    t = "#FFFFFF";
                                e.attr("data-color") && (t = e.attr("data-color")),
                                    e.append(
                                        '<svg class="display-block" width="100%"  viewBox="0 0 2500 100" preserveAspectRatio="none" ><path class="color-bg" fill="' +
                                            t +
                                            '" d="M2500,100H0c0,0-24.414-1.029,0-6.411c112.872-24.882,2648.299-14.37,2522.026-76.495L2500,100z"/></svg>'
                                    );
                            }),
                        a.find(".dzsprxseparator--2triangles").length &&
                            a.find(".dzsprxseparator--2triangles").each(function () {
                                var e = c(this),
                                    t = "#FFFFFF";
                                e.attr("data-color") && (t = e.attr("data-color")),
                                    e.append('<svg class="display-block" width="100%"  viewBox="0 0 1500 100" preserveAspectRatio="none" ><polygon class="color-bg" fill="' + t + '" points="1500,100 0,100 0,0 750,100 1500,0 "/></svg>');
                            }),
                        a.find(".dzsprxseparator--triangle").length &&
                            a.find(".dzsprxseparator--triangle").each(function () {
                                var e = c(this),
                                    t = "#FFFFFF";
                                e.attr("data-color") && (t = e.attr("data-color")),
                                    e.append('<svg class="display-block" width="100%"  viewBox="0 0 2200 100" preserveAspectRatio="none" ><polyline class="color-bg" fill="' + t + '" points="2200,100 0,100 0,0 2200,100 "/></svg>');
                            }),
                        a.get(0) &&
                            (a.get(0).api_set_scrollTop_is_another_element_top = function (e) {
                                z = e;
                            }),
                        "horizontal" == b.settings_mode &&
                            (g.wrap('<div class="dzsparallaxer--target-con"></div>'),
                            "20" != b.animation_duration && a.find(".horizontal-fog,.dzsparallaxer--target").css({ animation: "slideshow " + Number(b.animation_duration) / 1e3 + "s linear infinite" })),
                        is_touch_device() && a.addClass("is-touch"),
                        is_mobile() && a.addClass("is-mobile"),
                        0 < a.find(".divimage").length || 0 < a.find("img").length
                            ? (0 == (e = a.children(".divimage, img").eq(0)).length && (e = a.find(".divimage, img").eq(0)), e.attr("data-src") ? ((V = e.attr("data-src")), c(window).on("scroll.dzsprx" + N, u), u()) : aa())
                            : aa(),
                        "horizontal" == b.settings_mode && (g.before(g.clone()), g.prev().addClass("cloner"), (ca = g.parent().find(".cloner").eq(0)));
                }
                function aa() {
                    O ||
                        ((O = !0),
                        is_ie11() && a.addClass("is-ie-11"),
                        c(window).on("resize", W),
                        W(),
                        setInterval(function () {
                            W(null, { call_from: "autocheck" });
                        }, 2e3),
                        a.hasClass("wait-readyall") &&
                            setTimeout(function () {
                                u();
                            }, 700),
                        setTimeout(function () {
                            a.addClass("dzsprx-readyall"), u(), a.hasClass("wait-readyall") && (B = Number(b.animation_duration));
                        }, 1e3),
                        0 < a.find("*[data-parallaxanimation]").length &&
                            a.find("*[data-parallaxanimation]").each(function () {
                                var a = c(this);
                                if (a.attr("data-parallaxanimation")) {
                                    null == I && (I = []), I.push(a);
                                    var b = a.attr("data-parallaxanimation");
                                    b = ("window.aux_opts2 = " + b).replace(/'/g, '"');
                                    try {
                                        eval(b);
                                    } catch (e) {
                                        console.info(b, e), (window.aux_opts2 = null);
                                    }
                                    if (window.aux_opts2) {
                                        for (w = 0; w < window.aux_opts2.length; w++)
                                            0 == isNaN(Number(window.aux_opts2[w].initial)) && (window.aux_opts2[w].initial = Number(window.aux_opts2[w].initial)),
                                                0 == isNaN(Number(window.aux_opts2[w].mid)) && (window.aux_opts2[w].mid = Number(window.aux_opts2[w].mid)),
                                                0 == isNaN(Number(window.aux_opts2[w].final)) && (window.aux_opts2[w].final = Number(window.aux_opts2[w].final));
                                        a.data("parallax_options", window.aux_opts2);
                                    }
                                }
                            }),
                        da &&
                            ((D = !0),
                            setTimeout(function () {
                                D = !1;
                            }, da)),
                        a.hasClass("simple-parallax")
                            ? (g.wrap('<div class="simple-parallax-inner"></div>'),
                              "on" == b.simple_parallaxer_convert_simple_img_to_bg_if_possible && g.attr("data-src") && 0 == g.children().length && g.parent().addClass("is-image"),
                              0 < m && P())
                            : P(),
                        (ma = setInterval(xa, 1e3)),
                        setTimeout(function () {}, 1500),
                        a.hasClass("use-loading") &&
                            (0 < a.find(".divimage").length || 0 < a.children("img").length
                                ? 0 < a.find(".divimage").length &&
                                  (V &&
                                      (a
                                          .find(".divimage")
                                          .eq(0)
                                          .css("background-image", "url(" + V + ")"),
                                      a.find(".dzsparallaxer--target-con .divimage").css("background-image", "url(" + V + ")")),
                                  (E = String(a.find(".divimage").eq(0).css("background-image")).split('"')[1]),
                                  null == E && ((E = String(a.find(".divimage").eq(0).css("background-image")).split("url(")[1]), (E = String(E).split(")")[0])),
                                  (F = new Image()),
                                  (F.onload = function (e) {
                                      a.addClass("loaded"),
                                          "horizontal" == b.settings_mode &&
                                              (console.info(F, E, F.naturalWidth, x, r),
                                              (J = F.naturalWidth),
                                              (ea = F.naturalHeight),
                                              (r = (J / ea) * h),
                                              console.log(J, ea, r, h),
                                              g.hasClass("divimage"),
                                              console.info(ca),
                                              ca.css({ left: "calc(-100% + 1px)" }),
                                              g.css({ width: "100%" }),
                                              g.hasClass("repeat-pattern") && (console.info("nw - ", J, "cw - ", x), (r = Math.ceil(x / J) * J), console.info("tw - ", r)),
                                              a.find(".dzsparallaxer--target-con").css({ width: r }));
                                  }),
                                  (F.src = E))
                                : a.addClass("loaded"),
                            setTimeout(function () {
                                a.addClass("loaded"), na();
                            }, 1e4)),
                        (a.get(0).api_set_update_func = function (e) {
                            G = e;
                        }),
                        (a.get(0).api_handle_scroll = u),
                        (a.get(0).api_destroy = wa),
                        (a.get(0).api_destroy_listeners = ya),
                        (a.get(0).api_handle_resize = W),
                        ("scroll" != b.settings_mode && "oneelement" != b.settings_mode) ||
                            (c(window).off("scroll.dzsprx" + N), c(window).on("scroll.dzsprx" + N, u), u(), setTimeout(u, 1e3), document && document.addEventListener && document.addEventListener("touchmove", fa, !1)),
                        ("mouse_body" == b.settings_mode || "on" == b.settings_movexaftermouse || L.length) && c(document).on("mousemove", fa));
                }
                function wa() {
                    (G = null), (oa = !0), (G = null), c(window).off("scroll.dzsprx" + N, u), document && document.addEventListener && document.removeEventListener("touchmove", fa, !1);
                }
                function xa() {
                    ha = !0;
                }
                function ya() {
                    console.info("DESTROY LISTENERS", a), clearInterval(ma), c(window).off("scroll.dzsprx" + N);
                }
                function W(e, t) {
                    (x = a.width()), (X = window.innerWidth), (p = window.innerHeight);
                    var n = { call_from: "event" };
                    if ((t && (n = c.extend(n, t)), !1 !== O)) {
                        if ("oneelement" == b.settings_mode) {
                            var i = a.css("transform");
                            a.css("transform", "translate3d(0,0,0)");
                        }
                        if (((y = parseInt(a.offset().top, 10)), "autocheck" == n.call_from && 4 > Math.abs(pa - p) && 4 > Math.abs(qa - y))) return "oneelement" == b.settings_mode && a.css("transform", i), !1;
                        (pa = p),
                            (qa = y),
                            M && U && (x < M ? a.height((x / M) * U) : a.height(U)),
                            760 > x ? a.addClass("under-760") : a.removeClass("under-760"),
                            500 > x ? a.addClass("under-500") : a.removeClass("under-500"),
                            ia && clearTimeout(ia),
                            (ia = setTimeout(na, 700)),
                            "on" == b.js_breakout && (a.css("width", X + "px"), a.css("margin-left", "0"), 0 < a.offset().left && a.css("margin-left", "-" + a.offset().left + "px"));
                    }
                }
                function na() {
                    (h = a.outerHeight()),
                        (k = g.outerHeight()),
                        (p = window.innerHeight),
                        b.settings_substract_from_th && (k -= b.settings_substract_from_th),
                        b.settings_clip_height_is_window_height && (h = window.innerHeight),
                        0 == a.hasClass("allbody") &&
                            0 == a.hasClass("dzsparallaxer---window-height") &&
                            0 == M &&
                            (k <= la && 0 < k
                                ? ("oneelement" != b.settings_mode && 0 == a.hasClass("do-not-set-js-height") && 0 == a.hasClass("height-is-based-on-content") && a.height(k),
                                  (h = a.height()),
                                  is_ie() && 10 >= version_ie() ? g.css("top", "0") : g.css("transform", ""),
                                  K && K.css("opacity", "0"))
                                : "oneelement" != b.settings_mode && 0 == a.hasClass("do-not-set-js-height") && a.hasClass("height-is-based-on-content")),
                        g.attr("data-forcewidth_ratio") && (g.width(Number(g.attr("data-forcewidth_ratio")) * g.height()), g.width() < a.width() && g.width(a.width())),
                        clearTimeout(ra),
                        (ra = setTimeout(u, 200));
                }
                function fa(e) {
                    if ("mouse_body" == b.settings_mode) {
                        if (((l = e.pageY - c(window).scrollTop()), 0 == k)) return;
                        var t = (l / p) * (h - k);
                        0 < t && (t = 0), t < h - k && (t = h - k), 1 < (C = l / h) && (C = 1), 0 > C && (C = 0), (Q = t);
                    }
                    if ("on" == b.settings_movexaftermouse) {
                        var n = e.pageX;
                        0 < (n = (n / X) * (x - r)) && (n = 0), n < x - r && (n = x - r), (sa = n);
                    }
                    if (L)
                        for (n = e.pageX, e = e.clientY, (n = (n / X) * m * 2 - m) > m && (n = m), n < -m && (n = -m), (t = (e / p) * m * 4 - 2 * m) > m && (t = m), t < -m && (t = -m), e = 0; e < L.length; e++)
                            L[e].css({ top: t, left: n }, { queue: !1, duration: 100 });
                }
                function u(e, n) {
                    (l = c(window).scrollTop()),
                        (t = 0),
                        y > l - p && l < y + a.outerHeight() ? (D = !1) : b.settings_detect_out_of_screen && (D = !0),
                        z && ((l = -parseInt(z.css("top"), 10)), z.data("targettop") && (l = -z.data("targettop"))),
                        b.settings_listen_to_object_scroll_top && (l = b.settings_listen_to_object_scroll_top.val),
                        isNaN(l) && (l = 0),
                        e && "on" == b.init_functional_remove_delay_on_scroll && (D = !1);
                    var i = { force_vi_y: null, from: "", force_ch: null, force_th: null, force_th_only_big_diff: !0 };
                    if (
                        (n && (i = c.extend(i, n)),
                        b.settings_clip_height_is_window_height && (h = window.innerHeight),
                        null != i.force_ch && (h = i.force_ch),
                        null != i.force_th && (i.force_th_only_big_diff ? 20 < Math.abs(i.force_th - k) && (k = i.force_th) : (k = i.force_th)),
                        !1 === O && ((p = window.innerHeight), l + p >= a.offset().top && aa()),
                        0 != k && !1 !== O && ("scroll" == b.settings_mode || "oneelement" == b.settings_mode))
                    ) {
                        if ("oneelement" == b.settings_mode) {
                            var s = (l - y + p) / p;
                            a.attr("id"), 0 > s && (s = 0), 1 < s && (s = 1), "reverse" == b.direction && (s = Math.abs(1 - s)), (Q = t = 2 * s * b.settings_mode_oneelement_max_offset - b.settings_mode_oneelement_max_offset), a.attr("id");
                        }
                        if ("scroll" == b.settings_mode) {
                            if (
                                ("fromtop" == b.mode_scroll &&
                                    ((t = (l / h) * (h - k)),
                                    "on" == b.is_fullscreen && ((t = (l / (k - p)) * (h - k)), z && (t = (l / (z.height() - p)) * (h - k))),
                                    "reverse" == b.direction && ((t = (1 - l / h) * (h - k)), "on" == b.is_fullscreen && ((t = (1 - l / (k - p)) * (h - k)), z && (t = (1 - l / (z.height() - p)) * (h - k))))),
                                (y = a.offset().top),
                                z && (y = -parseInt(z.css("top"), 10)),
                                (s = (l - (y - p)) / (y + h - (y - p))),
                                "on" == b.is_fullscreen && ((s = l / (c("body").height() - p)), z && (s = l / (z.outerHeight() - p))),
                                1 < s && (s = 1),
                                0 > s && (s = 0),
                                I)
                            )
                                for (w = 0; w < I.length; w++) {
                                    var o = I[w],
                                        r = o.data("parallax_options");
                                    if (r)
                                        for (var u = 0; u < r.length; u++) {
                                            if (0.5 >= s) {
                                                var d = 2 * s,
                                                    f = 2 * s - 1;
                                                0 > f && (f = -f), (d = f * r[u].initial + d * r[u].mid);
                                            } else 0 > (f = (d = 2 * (s - 0.5)) - 1) && (f = -f), (d = f * r[u].mid + d * r[u].final);
                                            (f = (f = r[u].value).replace(/{{val}}/g, d)), o.css(r[u].property, f);
                                        }
                                }
                            "normal" == b.mode_scroll && ((t = s * (h - k)), "reverse" == b.direction && (t = (1 - s) * (h - k)), a.hasClass("debug-target") && console.info(b.mode_scroll, l, y, p, h, y + h, s)),
                                "fromtop" == b.mode_scroll && t < h - k && (t = h - k),
                                a.hasClass("simple-parallax") && (0 > (s = (l + p - y) / (p + k)) && (s = 0), 1 < s && (s = 1), (s = Math.abs(1 - s)), a.hasClass("is-mobile") && (m = a.height() / 2), (t = 2 * s * m - m)),
                                ba && (1 < (s = Math.abs((l - y) / a.outerHeight() - 1)) && (s = 1), 0 > s && (s = 0), ba.css("opacity", s)),
                                (C = l / h),
                                0 == a.hasClass("simple-parallax") && (0 < t && (t = 0), t < h - k && (t = h - k)),
                                1 < C && (C = 1),
                                0 > C && (C = 0),
                                i.force_vi_y && (t = i.force_vi_y),
                                (Q = t),
                                (ta = C),
                                (0 !== B && "css" != b.animation_engine) ||
                                    ((v = Q),
                                    0 == D &&
                                        (a.hasClass("simple-parallax")
                                            ? (g.parent().hasClass("is-image") || a.hasClass("simple-parallax--is-only-image")) && g.css("background-position-y", "calc(50% - " + parseInt(v, 10) + "px)")
                                            : is_ie() && 10 >= version_ie()
                                            ? g.css("top", v + "px")
                                            : (g.css("transform", "translate3d(" + H + "px," + v + "px,0)"), "oneelement" == b.settings_mode && a.css("transform", "translate3d(" + H + "px," + v + "px,0)"))));
                        }
                    }
                }
                function P() {
                    return D
                        ? (requestAnimFrame(P), !1)
                        : (isNaN(v) && (v = 0),
                          ha && (ha = !1),
                          "horizontal" != b.settings_mode &&
                              (0 === B || "css" == b.animation_engine
                                  ? (G && G(v), requestAnimFrame(P), !1)
                                  : ((Y = Q - (R = v)),
                                    (Z = ta - (S = T)),
                                    "easeIn" == b.easing && ((v = Number(Math.easeIn(1, R, Y, B).toFixed(5))), (T = Number(Math.easeIn(1, S, Z, B).toFixed(5)))),
                                    "easeOutQuad" == b.easing && ((v = Math.easeOutQuad(1, R, Y, B)), (T = Math.easeOutQuad(1, S, Z, B))),
                                    "easeInOutSine" == b.easing && ((v = Math.easeInOutSine(1, R, Y, B)), (T = Math.easeInOutSine(1, S, Z, B))),
                                    (H = 0),
                                    "on" == b.settings_movexaftermouse && ((ua = sa - (ja = H)), (H = Math.easeIn(1, ja, ua, B))),
                                    a.hasClass("simple-parallax")
                                        ? g.parent().hasClass("is-image") && g.css("background-position-y", "calc(50% - " + parseInt(v, 10) + "px)")
                                        : is_ie() && 10 >= version_ie()
                                        ? g.css("top", v + "px")
                                        : (g.css("transform", "translate3d(" + H + "px," + v + "px,0)"), "oneelement" == b.settings_mode && a.css("transform", "translate3d(" + H + "px," + v + "px,0)")),
                                    K && K.css("opacity", T),
                                    G && G(v),
                                    !oa && void requestAnimFrame(P))));
                }
                var a = c(this),
                    g = null,
                    ca = null,
                    K = null,
                    ba = null,
                    N = window.dzsprx_index++,
                    w = 0,
                    r = 0,
                    k = 0,
                    h = 0,
                    x = 0,
                    X = 0,
                    p = 0,
                    J = 0,
                    ea = 0,
                    pa = 0,
                    qa = 0,
                    la = 0,
                    ia = 0,
                    B = 0,
                    v = 0,
                    H = 0,
                    T = 0,
                    R = 0,
                    ja = 0,
                    S = 0,
                    Q = 0,
                    sa = 0,
                    ta = 0,
                    Y = 0,
                    ua = 0,
                    Z = 0,
                    G = null,
                    z = null,
                    l = 0,
                    t = 0,
                    C = 0,
                    y = 0,
                    V = "",
                    O = !1,
                    ha = !1,
                    I = null,
                    oa = !1,
                    D = !1,
                    ka = 0,
                    da = 0,
                    ma = 0,
                    ra = 0,
                    M = 0,
                    U = 0,
                    L = [],
                    F = null,
                    E = "";
                (ka = Number(b.init_delay)), (da = Number(b.init_functional_delay)), ka ? setTimeout(n, ka) : n();
            });
        }),
            (window.dzsprx_init = function (e, t) {
                if (void 0 !== t && void 0 !== t.init_each && 1 == t.init_each) {
                    var n,
                        i = 0;
                    for (n in t) i++;
                    1 == i && (t = void 0),
                        c(e).each(function () {
                            c(this).dzsparallaxer(t);
                        });
                } else c(e).dzsparallaxer(t);
            });
    })(jQuery),
    (window.requestAnimFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (e) {
            window.setTimeout(e, 1e3 / 60);
        }),
    jQuery(document).ready(function (e) {
        e(".dzsparallaxer---window-height").each(function () {
            function t() {
                n.height(window.innerHeight);
            }
            var n = e(this);
            e(window).on("resize", t), t();
        }),
            dzsprx_init(".dzsparallaxer.auto-init", { init_each: !0 });
    }),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.HSStickyBlock = t()) : (e.HSStickyBlock = t());
    })(window, function () {
        return (
            (d = {
                "./src/js/hs-sticky-block.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSStickyBlock; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSStickyBlock Plugin\n* @version: 2.0.0 (Mon, 25 Nov 2019)\n* @requires: jQuery v3.0 or laters\n* @author: HtmlStream\n* @event-namespace: .HSStickyBlock\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\nvar HSStickyBlock = /*#__PURE__*/function () {\n  function HSStickyBlock(elem, settings) {\n    _classCallCheck(this, HSStickyBlock);\n\n    this.elem = elem;\n    this.defaults = {\n      parentSelector: null,\n      parentWidth: null,\n      parentPaddingLeft: null,\n      parentOffsetLeft: null,\n      targetSelector: null,\n      targetHeight: 0,\n      stickyHeight: null,\n      stickyOffsetTop: 0,\n      stickyOffsetBottom: 0,\n      windowOffsetTop: 0,\n      startPoint: null,\n      endPoint: null,\n      resolutionsList: {\n        xs: 0,\n        sm: 576,\n        md: 768,\n        lg: 992,\n        xl: 1200\n      },\n      breakpoint: 'lg',\n      styles: {\n        position: 'fixed'\n      },\n      classMap: {\n        kill: 'hs-kill-sticky'\n      }\n    };\n    this.settings = settings;\n    this.init();\n  }\n\n  _createClass(HSStickyBlock, [{\n    key: \"init\",\n    value: function init() {\n      var context = this,\n          $el = context.elem,\n          dataSettings = $el.attr('data-hs-sticky-block-options') ? JSON.parse($el.attr('data-hs-sticky-block-options')) : {},\n          options = $.extend(true, context.defaults, dataSettings, context.settings);\n\n      context._setRules($el, options);\n\n      $(window).on('resize scroll', function () {\n        context.update();\n      });\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var context = this,\n          $el = context.elem,\n          dataSettings = $el.attr('data-hs-sticky-block-options') ? JSON.parse($el.attr('data-hs-sticky-block-options')) : {},\n          options = $.extend(true, context.defaults, dataSettings, context.settings);\n\n      context._setRules($el, options);\n    }\n  }, {\n    key: \"_updateOptions\",\n    value: function _updateOptions(el, params) {\n      var options = params;\n      options.windowOffsetTop = $(window).scrollTop();\n      options.startPoint = $.isNumeric(options.startPoint) ? options.startPoint : $(options.startPoint).offset().top;\n      options.endPoint = $.isNumeric(options.endPoint) ? options.endPoint : $(options.endPoint).offset().top;\n      options.parentWidth = $(options.parentSelector).width();\n      options.parentPaddingLeft = parseInt($(options.parentSelector).css('padding-left'));\n      options.parentOffsetLeft = $(options.parentSelector).offset().left;\n      options.targetHeight = options.targetSelector ? $(options.targetSelector).outerHeight() : 0;\n      options.stickyHeight = el.outerHeight();\n    }\n  }, {\n    key: \"_setRules\",\n    value: function _setRules(el, params) {\n      var context = this;\n      var options = params;\n\n      context._kill(el, options);\n\n      context._updateOptions(el, options);\n\n      if (!el.hasClass(options.classMap.kill)) {\n        if (options.windowOffsetTop >= options.startPoint - options.targetHeight - options.stickyOffsetTop && options.windowOffsetTop <= options.endPoint - options.targetHeight - options.stickyOffsetTop) {\n          context._add(el, options);\n\n          context._top(el, options);\n\n          context._parentSetHeight(options);\n        } else {\n          context._reset(el);\n\n          context._parentRemoveHeight(options);\n        }\n\n        if (options.windowOffsetTop >= options.endPoint - options.targetHeight - options.stickyHeight - options.stickyOffsetTop - options.stickyOffsetBottom) {\n          context._bottom(el, options);\n        }\n      }\n    }\n  }, {\n    key: \"_add\",\n    value: function _add(el, params) {\n      var options = params;\n      el.css({\n        position: options.styles.position,\n        left: options.parentOffsetLeft + options.parentPaddingLeft,\n        width: options.parentWidth\n      });\n    }\n  }, {\n    key: \"_top\",\n    value: function _top(el, params) {\n      var options = params;\n      el.css({\n        top: options.stickyOffsetTop + options.targetHeight\n      });\n    }\n  }, {\n    key: \"_bottom\",\n    value: function _bottom(el, params) {\n      var options = params;\n      el.css({\n        top: options.endPoint - options.windowOffsetTop - options.stickyHeight - options.stickyOffsetBottom\n      });\n    }\n  }, {\n    key: \"_reset\",\n    value: function _reset(el) {\n      el.css({\n        position: '',\n        top: '',\n        bottom: '',\n        left: '',\n        width: ''\n      });\n    }\n  }, {\n    key: \"_kill\",\n    value: function _kill(el, params) {\n      var context = this;\n      var options = params;\n\n      if (window.innerWidth <= options.resolutionsList[options.breakpoint]) {\n        el.addClass(options.classMap.kill);\n\n        context._reset(el);\n\n        context._parentRemoveHeight(options);\n      } else {\n        el.removeClass(options.classMap.kill);\n      }\n    }\n  }, {\n    key: \"_parentSetHeight\",\n    value: function _parentSetHeight(params) {\n      var options = params;\n      $(options.parentSelector).css({\n        height: options.stickyHeight\n      });\n    }\n  }, {\n    key: \"_parentRemoveHeight\",\n    value: function _parentRemoveHeight(params) {\n      var options = params;\n      $(options.parentSelector).css({\n        height: ''\n      });\n    }\n  }]);\n\n  return HSStickyBlock;\n}();\n\n\n\n//# sourceURL=webpack://HSStickyBlock/./src/js/hs-sticky-block.js?"
                    );
                },
            }),
            (e = {}),
            (f.m = d),
            (f.c = e),
            (f.d = function (e, t, n) {
                f.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (f.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (f.t = function (e, t) {
                if ((1 & t && (e = f(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if ((f.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var i in e)
                        f.d(
                            n,
                            i,
                            function (t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return n;
            }),
            (f.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return f.d(t, "a", t), t;
            }),
            (f.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (f.p = ""),
            f((f.s = "./src/js/hs-sticky-block.js")).default
        );
        function f(t) {
            if (e[t]) return e[t].exports;
            var n = (e[t] = { i: t, l: !1, exports: {} });
            return d[t].call(n.exports, n, n.exports, f), (n.l = !0), n.exports;
        }
        var d, e;
    }),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.HSScrollNav = t()) : (e.HSScrollNav = t());
    })(window, function () {
        return (
            (d = {
                "./src/classes/scroll-nav-section.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSScrollNavSection; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HSScrollNavSection = /*#__PURE__*/function () {\n  function HSScrollNavSection(element, config) {\n    _classCallCheck(this, HSScrollNavSection);\n\n    this.element = element;\n    this.config = config;\n    this.section = $(this.element.attr('href'));\n  }\n\n  _createClass(HSScrollNavSection, [{\n    key: \"show\",\n    value: function show(callback) {\n      var _this = this;\n\n      var self = this,\n          isCollbackFinished = false;\n\n      if (!this.section.length) {\n        return;\n      }\n\n      var timerId = setInterval(function () {\n        isCollbackFinished = self.config.beforeShow.call(self.section);\n\n        if (isCollbackFinished) {\n          clearInterval(timerId);\n\n          _this.changeHash();\n\n          $('html, body').stop().animate({\n            scrollTop: self.offset + self.config.customOffsetTop\n          }, {\n            duration: self.config.duration,\n            easing: self.config.easing,\n            complete: function complete() {\n              $('html, body').stop().animate({\n                scrollTop: self.offset + self.config.customOffsetTop\n              }, {\n                duration: self.config.duration,\n                easing: self.config.easing,\n                complete: function complete() {\n                  self.config.afterShow.call(self.section);\n\n                  if ($.isFunction(callback)) {\n                    callback();\n                  }\n                }\n              });\n            }\n          });\n        }\n      }, 100);\n    }\n  }, {\n    key: \"changeHash\",\n    value: function changeHash() {\n      this.section.attr('id', '');\n      $(this.config.sectionClass).removeClass(this.config.activeSectionClass);\n      this.section.addClass(this.config.activeSectionClass);\n      window.location.hash = this.element.attr('href');\n      this.section.attr('id', this.element.attr('href').slice(1));\n    }\n  }, {\n    key: \"highlight\",\n    value: function highlight() {\n      var parent = this.element.parent('li');\n\n      if (parent.length) {\n        parent.addClass(this.config.activeItemClass);\n      }\n    }\n  }, {\n    key: \"unhighlight\",\n    value: function unhighlight() {\n      var parent = this.element.parent('li');\n\n      if (parent.length) {\n        parent.removeClass(this.config.activeItemClass);\n      }\n    }\n  }, {\n    key: \"offset\",\n    get: function get() {\n      var header = this.config.header,\n          headerStyles = header.length ? getComputedStyle(header.get(0)) : false,\n          headerPosition = header.length ? headerStyles.position : false,\n          offset = this.section.offset().top;\n\n      if (header.length && (headerPosition === 'fixed' || headerPosition === 'absolute') && parseInt(headerStyles.top) === 0) {\n        offset = offset - header.outerHeight() - parseInt(headerStyles.marginTop);\n      }\n\n      if (this.config.over.length) {\n        offset = offset - this.config.over.outerHeight();\n      }\n\n      return offset;\n    }\n  }]);\n\n  return HSScrollNavSection;\n}();\n\n\n\n//# sourceURL=webpack://HSScrollNav/./src/classes/scroll-nav-section.js?"
                    );
                },
                "./src/js/hs-scroll-nav.js": function (module, __webpack_exports__, __webpack_require__) {
                    "use strict";
                    eval(
                        "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSScrollNav; });\n/* harmony import */ var _classes_scroll_nav_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/scroll-nav-section */ \"./src/classes/scroll-nav-section.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSScrollNav Plugin\n* @version: 2.0.0 (Mon, 25 Nov 2019)\n* @requires: jQuery v3.0 or later\n* @author: HtmlStream\n* @event-namespace: .HSScrollNav\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\n\n\nvar HSScrollNav = /*#__PURE__*/function () {\n  function HSScrollNav(element, config) {\n    _classCallCheck(this, HSScrollNav);\n\n    this.element = element;\n    this.defaults = {\n      duration: 400,\n      easing: 'linear',\n      over: $(),\n      sectionClass: '.scroll-nav-section',\n      customOffsetTop: 0,\n      activeItemClass: 'active',\n      activeSectionClass: 'active',\n      afterShow: function afterShow() {},\n      beforeShow: function beforeShow() {\n        return true;\n      },\n      header: $('.header')\n    };\n    this.config = config;\n  }\n\n  _createClass(HSScrollNav, [{\n    key: \"init\",\n    value: function init() {\n      var self = this,\n          element = this.element,\n          dataSettings = $(element).attr('data-hs-scroll-nav-options') ? JSON.parse($(element).attr('data-hs-scroll-nav-options')) : {};\n      this._items = $();\n      this.config = Object.assign({}, this.defaults, this.config, dataSettings);\n\n      this._makeItems();\n\n      this._bindEvents();\n\n      $(window).on('scroll.HSScrollNav', function () {\n        self.highlight();\n      }).trigger('scroll.HSScrollNav');\n    }\n  }, {\n    key: \"_makeItems\",\n    value: function _makeItems() {\n      var self = this;\n      this.element.find('a[href^=\"#\"]').each(function (i, el) {\n        var $this = $(el);\n\n        if (!$this.data('HSScrollNavSection')) {\n          $this.data('HSScrollNavSection', new _classes_scroll_nav_section__WEBPACK_IMPORTED_MODULE_0__[\"default\"]($this, self.config));\n          self._items = self._items.add($this);\n        }\n      });\n    }\n  }, {\n    key: \"_bindEvents\",\n    value: function _bindEvents() {\n      var self = this;\n      this.element.on('click.HSScrollNav', 'a[href^=\"#\"]', function (e) {\n        var link = this,\n            target = $(this).data('HSScrollNavSection'),\n            $parent = $(self.element).parent(),\n            parentID = $parent.attr('id'),\n            windW = window.innerWidth,\n            mobileDestroy = Boolean(self.element[0].dataset.mobileDestroy);\n\n        if (windW <= 769 && mobileDestroy === true) {\n          $('[data-target=\"#' + parentID + '\"]').trigger('click');\n          $('[data-target=\"#' + parentID + '\"] > .hamburger__box').removeClass('is-active');\n          $parent.on('hidden.bs.collapse', function () {\n            self._lockHightlight = true;\n            if (self.current) self.current.unhighlight();\n            link.blur();\n            self.current = $(link).data('HSScrollNavSection');\n            self.current.highlight();\n            target.show(function () {\n              self._lockHightlight = false;\n            });\n          });\n        } else {\n          self._lockHightlight = true;\n          if (self.current) self.current.unhighlight();\n          link.blur();\n          self.current = $(link).data('HSScrollNavSection');\n          self.current.highlight();\n          target.show(function () {\n            self._lockHightlight = false;\n          });\n        }\n\n        e.preventDefault();\n      });\n    }\n  }, {\n    key: \"highlight\",\n    value: function highlight() {\n      var self = this,\n          items,\n          currentItem,\n          current,\n          scrollTop;\n\n      if (!this._items.length || this._lockHightlight) {\n        return;\n      }\n\n      scrollTop = $(window).scrollTop();\n\n      this._items.each(function (i, el) {\n        var Section = $(el).data('HSScrollNavSection'),\n            $section = Section.section;\n\n        if (scrollTop > Section.offset) {\n          current = Section;\n        }\n      });\n\n      if (current && this.current !== current) {\n        this.unhighlight();\n        current.highlight();\n\n        if (this.current) {\n          current.changeHash();\n        }\n\n        this.current = current;\n      }\n    }\n  }, {\n    key: \"unhighlight\",\n    value: function unhighlight() {\n      this._items.each(function (i, el) {\n        $(el).data('HSScrollNavSection').unhighlight();\n      });\n    }\n  }]);\n\n  return HSScrollNav;\n}();\n\n\n\n//# sourceURL=webpack://HSScrollNav/./src/js/hs-scroll-nav.js?"
                    );
                },
            }),
            (e = {}),
            (f.m = d),
            (f.c = e),
            (f.d = function (e, t, n) {
                f.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (f.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (f.t = function (e, t) {
                if ((1 & t && (e = f(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if ((f.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var i in e)
                        f.d(
                            n,
                            i,
                            function (t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return n;
            }),
            (f.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return f.d(t, "a", t), t;
            }),
            (f.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (f.p = ""),
            f((f.s = "./src/js/hs-scroll-nav.js")).default
        );
        function f(t) {
            if (e[t]) return e[t].exports;
            var n = (e[t] = { i: t, l: !1, exports: {} });
            return d[t].call(n.exports, n, n.exports, f), (n.l = !0), n.exports;
        }
        var d, e;
    }),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.AOS = t()) : (e.AOS = t());
    })(this, function () {
        return (function (e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var s = (n[i] = { exports: {}, id: i, loaded: !1 });
                return e[i].call(s.exports, s, s.exports, t), (s.loaded = !0), s.exports;
            }
            var n = {};
            return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
        })([
            function (e, t, n) {
                "use strict";
                function i(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var s =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                            }
                            return e;
                        },
                    o = (i(n(1)), n(6)),
                    r = i(o),
                    a = i(n(7)),
                    l = i(n(8)),
                    c = i(n(9)),
                    u = i(n(10)),
                    d = i(n(11)),
                    h = i(n(14)),
                    p = [],
                    f = !1,
                    _ = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 },
                    m = function () {
                        if ((arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (f = !0), f)) return (p = (0, d.default)(p, _)), (0, u.default)(p, _.once), p;
                    },
                    g = function () {
                        (p = (0, h.default)()), m();
                    };
                e.exports = {
                    init: function (e) {
                        (_ = s(_, e)), (p = (0, h.default)());
                        var t = document.all && !window.atob;
                        return (function (e) {
                            return !0 === e || ("mobile" === e && c.default.mobile()) || ("phone" === e && c.default.phone()) || ("tablet" === e && c.default.tablet()) || ("function" == typeof e && !0 === e());
                        })(_.disable) || t
                            ? void p.forEach(function (e, t) {
                                  e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
                              })
                            : (_.disableMutationObserver ||
                                  l.default.isSupported() ||
                                  (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),
                                  (_.disableMutationObserver = !0)),
                              document.querySelector("body").setAttribute("data-aos-easing", _.easing),
                              document.querySelector("body").setAttribute("data-aos-duration", _.duration),
                              document.querySelector("body").setAttribute("data-aos-delay", _.delay),
                              "DOMContentLoaded" === _.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1
                                  ? m(!0)
                                  : "load" === _.startEvent
                                  ? window.addEventListener(_.startEvent, function () {
                                        m(!0);
                                    })
                                  : document.addEventListener(_.startEvent, function () {
                                        m(!0);
                                    }),
                              window.addEventListener("resize", (0, a.default)(m, _.debounceDelay, !0)),
                              window.addEventListener("orientationchange", (0, a.default)(m, _.debounceDelay, !0)),
                              window.addEventListener(
                                  "scroll",
                                  (0, r.default)(function () {
                                      (0, u.default)(p, _.once);
                                  }, _.throttleDelay)
                              ),
                              _.disableMutationObserver || l.default.ready("[data-aos]", g),
                              p);
                    },
                    refresh: m,
                    refreshHard: g,
                };
            },
            function (e, t) {},
            ,
            ,
            ,
            ,
            function (e, t) {
                (function (t) {
                    "use strict";
                    function n(e, t, n) {
                        function s(t) {
                            var n = d,
                                i = h;
                            return (d = h = void 0), (g = t), (f = e.apply(i, n));
                        }
                        function r(e) {
                            var n = e - m;
                            return void 0 === m || n >= t || n < 0 || (C && e - g >= p);
                        }
                        function l() {
                            var e = w();
                            return r(e)
                                ? c(e)
                                : void (_ = setTimeout(
                                      l,
                                      (function (e) {
                                          var n = t - (e - m);
                                          return C ? y(n, p - (e - g)) : n;
                                      })(e)
                                  ));
                        }
                        function c(e) {
                            return (_ = void 0), k && d ? s(e) : ((d = h = void 0), f);
                        }
                        function u() {
                            var e = w(),
                                n = r(e);
                            if (((d = arguments), (h = this), (m = e), n)) {
                                if (void 0 === _)
                                    return (function (e) {
                                        return (g = e), (_ = setTimeout(l, t)), v ? s(e) : f;
                                    })(m);
                                if (C) return (_ = setTimeout(l, t)), s(m);
                            }
                            return void 0 === _ && (_ = setTimeout(l, t)), f;
                        }
                        var d,
                            h,
                            p,
                            f,
                            _,
                            m,
                            g = 0,
                            v = !1,
                            C = !1,
                            k = !0;
                        if ("function" != typeof e) throw new TypeError(a);
                        return (
                            (t = o(t) || 0),
                            i(n) && ((v = !!n.leading), (p = (C = "maxWait" in n) ? b(o(n.maxWait) || 0, t) : p), (k = "trailing" in n ? !!n.trailing : k)),
                            (u.cancel = function () {
                                void 0 !== _ && clearTimeout(_), (g = 0), (d = m = h = _ = void 0);
                            }),
                            (u.flush = function () {
                                return void 0 === _ ? f : c(w());
                            }),
                            u
                        );
                    }
                    function i(e) {
                        var t = void 0 === e ? "undefined" : r(e);
                        return !!e && ("object" == t || "function" == t);
                    }
                    function s(e) {
                        return (
                            "symbol" == (void 0 === e ? "undefined" : r(e)) ||
                            ((function (e) {
                                return !!e && "object" == (void 0 === e ? "undefined" : r(e));
                            })(e) &&
                                v.call(e) == c)
                        );
                    }
                    function o(e) {
                        if ("number" == typeof e) return e;
                        if (s(e)) return l;
                        if (i(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = i(t) ? t + "" : t;
                        }
                        if ("string" != typeof e) return 0 === e ? e : +e;
                        e = e.replace(u, "");
                        var n = h.test(e);
                        return n || p.test(e) ? f(e.slice(2), n ? 2 : 8) : d.test(e) ? l : +e;
                    }
                    var r =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                  },
                        a = "Expected a function",
                        l = NaN,
                        c = "[object Symbol]",
                        u = /^\s+|\s+$/g,
                        d = /^[-+]0x[0-9a-f]+$/i,
                        h = /^0b[01]+$/i,
                        p = /^0o[0-7]+$/i,
                        f = parseInt,
                        _ = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
                        m = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                        g = _ || m || Function("return this")(),
                        v = Object.prototype.toString,
                        b = Math.max,
                        y = Math.min,
                        w = function () {
                            return g.Date.now();
                        };
                    e.exports = function (e, t, s) {
                        var o = !0,
                            r = !0;
                        if ("function" != typeof e) throw new TypeError(a);
                        return i(s) && ((o = "leading" in s ? !!s.leading : o), (r = "trailing" in s ? !!s.trailing : r)), n(e, t, { leading: o, maxWait: t, trailing: r });
                    };
                }.call(
                    t,
                    (function () {
                        return this;
                    })()
                ));
            },
            function (e, t) {
                (function (t) {
                    "use strict";
                    function n(e) {
                        var t = void 0 === e ? "undefined" : o(e);
                        return !!e && ("object" == t || "function" == t);
                    }
                    function i(e) {
                        return (
                            "symbol" == (void 0 === e ? "undefined" : o(e)) ||
                            ((function (e) {
                                return !!e && "object" == (void 0 === e ? "undefined" : o(e));
                            })(e) &&
                                g.call(e) == l)
                        );
                    }
                    function s(e) {
                        if ("number" == typeof e) return e;
                        if (i(e)) return a;
                        if (n(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = n(t) ? t + "" : t;
                        }
                        if ("string" != typeof e) return 0 === e ? e : +e;
                        e = e.replace(c, "");
                        var s = d.test(e);
                        return s || h.test(e) ? p(e.slice(2), s ? 2 : 8) : u.test(e) ? a : +e;
                    }
                    var o =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                  },
                        r = "Expected a function",
                        a = NaN,
                        l = "[object Symbol]",
                        c = /^\s+|\s+$/g,
                        u = /^[-+]0x[0-9a-f]+$/i,
                        d = /^0b[01]+$/i,
                        h = /^0o[0-7]+$/i,
                        p = parseInt,
                        f = "object" == (void 0 === t ? "undefined" : o(t)) && t && t.Object === Object && t,
                        _ = "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self && self.Object === Object && self,
                        m = f || _ || Function("return this")(),
                        g = Object.prototype.toString,
                        v = Math.max,
                        b = Math.min,
                        y = function () {
                            return m.Date.now();
                        };
                    e.exports = function (e, t, i) {
                        function o(t) {
                            var n = d,
                                i = h;
                            return (d = h = void 0), (g = t), (f = e.apply(i, n));
                        }
                        function a(e) {
                            var n = e - m;
                            return void 0 === m || n >= t || n < 0 || (C && e - g >= p);
                        }
                        function l() {
                            var e = y();
                            return a(e)
                                ? c(e)
                                : void (_ = setTimeout(
                                      l,
                                      (function (e) {
                                          var n = t - (e - m);
                                          return C ? b(n, p - (e - g)) : n;
                                      })(e)
                                  ));
                        }
                        function c(e) {
                            return (_ = void 0), k && d ? o(e) : ((d = h = void 0), f);
                        }
                        function u() {
                            var e = y(),
                                n = a(e);
                            if (((d = arguments), (h = this), (m = e), n)) {
                                if (void 0 === _)
                                    return (function (e) {
                                        return (g = e), (_ = setTimeout(l, t)), w ? o(e) : f;
                                    })(m);
                                if (C) return (_ = setTimeout(l, t)), o(m);
                            }
                            return void 0 === _ && (_ = setTimeout(l, t)), f;
                        }
                        var d,
                            h,
                            p,
                            f,
                            _,
                            m,
                            g = 0,
                            w = !1,
                            C = !1,
                            k = !0;
                        if ("function" != typeof e) throw new TypeError(r);
                        return (
                            (t = s(t) || 0),
                            n(i) && ((w = !!i.leading), (p = (C = "maxWait" in i) ? v(s(i.maxWait) || 0, t) : p), (k = "trailing" in i ? !!i.trailing : k)),
                            (u.cancel = function () {
                                void 0 !== _ && clearTimeout(_), (g = 0), (d = m = h = _ = void 0);
                            }),
                            (u.flush = function () {
                                return void 0 === _ ? f : c(y());
                            }),
                            u
                        );
                    };
                }.call(
                    t,
                    (function () {
                        return this;
                    })()
                ));
            },
            function (e, t) {
                "use strict";
                function n() {
                    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                }
                function i(e) {
                    e &&
                        e.forEach(function (e) {
                            var t = Array.prototype.slice.call(e.addedNodes),
                                n = Array.prototype.slice.call(e.removedNodes);
                            if (
                                (function e(t) {
                                    var n = void 0,
                                        i = void 0;
                                    for (n = 0; n < t.length; n += 1) {
                                        if ((i = t[n]).dataset && i.dataset.aos) return !0;
                                        if (i.children && e(i.children)) return !0;
                                    }
                                    return !1;
                                })(t.concat(n))
                            )
                                return s();
                        });
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var s = function () {};
                t.default = {
                    isSupported: function () {
                        return !!n();
                    },
                    ready: function (e, t) {
                        var o = window.document,
                            r = new (n())(i);
                        (s = t), r.observe(o.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
                    },
                };
            },
            function (e, t) {
                "use strict";
                function n() {
                    return navigator.userAgent || navigator.vendor || window.opera || "";
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var i = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function (t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t;
                        };
                    })(),
                    s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    o = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                    a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    l = (function () {
                        function e() {
                            !(function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, e);
                        }
                        return (
                            i(e, [
                                {
                                    key: "phone",
                                    value: function () {
                                        var e = n();
                                        return !(!s.test(e) && !o.test(e.substr(0, 4)));
                                    },
                                },
                                {
                                    key: "mobile",
                                    value: function () {
                                        var e = n();
                                        return !(!r.test(e) && !a.test(e.substr(0, 4)));
                                    },
                                },
                                {
                                    key: "tablet",
                                    value: function () {
                                        return this.mobile() && !this.phone();
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                t.default = new l();
            },
            function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                t.default = function (e, t) {
                    var n = window.pageYOffset,
                        i = window.innerHeight;
                    e.forEach(function (e, s) {
                        !(function (e, t, n) {
                            var i = e.node.getAttribute("data-aos-once");
                            t > e.position ? e.node.classList.add("aos-animate") : void 0 !== i && ("false" === i || (!n && "true" !== i)) && e.node.classList.remove("aos-animate");
                        })(e, i + n, t);
                    });
                };
            },
            function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var i = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(n(12));
                t.default = function (e, t) {
                    return (
                        e.forEach(function (e, n) {
                            e.node.classList.add("aos-init"), (e.position = (0, i.default)(e.node, t.offset));
                        }),
                        e
                    );
                };
            },
            function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var i = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(n(13));
                t.default = function (e, t) {
                    var n = 0,
                        s = 0,
                        o = window.innerHeight,
                        r = { offset: e.getAttribute("data-aos-offset"), anchor: e.getAttribute("data-aos-anchor"), anchorPlacement: e.getAttribute("data-aos-anchor-placement") };
                    switch ((r.offset && !isNaN(r.offset) && (s = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), (n = (0, i.default)(e).top), r.anchorPlacement)) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            n += e.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            n += e.offsetHeight;
                            break;
                        case "top-center":
                            n += o / 2;
                            break;
                        case "bottom-center":
                            n += o / 2 + e.offsetHeight;
                            break;
                        case "center-center":
                            n += o / 2 + e.offsetHeight / 2;
                            break;
                        case "top-top":
                            n += o;
                            break;
                        case "bottom-top":
                            n += e.offsetHeight + o;
                            break;
                        case "center-top":
                            n += e.offsetHeight / 2 + o;
                    }
                    return r.anchorPlacement || r.offset || isNaN(t) || (s = t), n + s;
                };
            },
            function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                t.default = function (e) {
                    for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
                        (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)), (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)), (e = e.offsetParent);
                    return { top: n, left: t };
                };
            },
            function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                t.default = function (e) {
                    return (
                        (e = e || document.querySelectorAll("[data-aos]")),
                        Array.prototype.map.call(e, function (e) {
                            return { node: e };
                        })
                    );
                };
            },
        ]);
    }),
    $.extend({
        HSCore: {
            init: function () {
                $(document).ready(function () {
                    $('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="popover"]').popover();
                });
            },
            components: {},
        },
    }),
    $.HSCore.init(),
    (function (e) {
        "use strict";
        e.HSCore.components.HSValidation = {
            defaults: { errorElement: "div", errorClass: "invalid-feedback" },
            init: function (t, n) {
                if (t.length) {
                    var i = Object.assign({}, this.defaults),
                        s = t.attr("data-hs-validation-options") ? JSON.parse(t.attr("data-hs-validation-options")) : {},
                        o = {
                            errorPlacement: this.errorPlacement,
                            highlight: this.highlight,
                            unhighlight: this.unHighlight,
                            submitHandler: this.submitHandler,
                            onkeyup: function (t) {
                                e(t).valid();
                            },
                        };
                    (o = e.extend(!0, i, o, s, n)), t.hasClass("js-step-form") ? e.validator.setDefaults({ ignore: ":hidden:not(.active select)" }) : e.validator.setDefaults({ ignore: ":hidden:not(select)" });
                    var r = t.validate(o);
                    return (
                        t.find("select").length &&
                            t.find("select").change(function () {
                                e(this).valid();
                            }),
                        r
                    );
                }
            },
            rules: function (t) {
                var n = Array.prototype.slice.call(arguments, 1);
                e.fn.rules.apply(t, n);
            },
            errorPlacement: function (t, n) {
                var i = e(n).data("error-msg-classes");
                t.addClass(i), t.appendTo(n.parents(".js-form-message"));
            },
            highlight: function (t) {
                var n = e(t),
                    i = n.data("error-class") ? n.data("error-class") : "is-invalid",
                    s = n.data("success-class") ? n.data("error-class") : "is-valid",
                    o = n.parents(".js-form-message").first(),
                    r = n;
                void 0 !== o.data("validate-state") ? (r = o) : o.find("[data-validate-state]").length && (r = o.find("[data-validate-state]")), r.removeClass(s).addClass(i);
            },
            unHighlight: function (t) {
                var n = e(t),
                    i = n.data("error-class") ? n.data("error-class") : "is-invalid",
                    s = n.data("success-class") ? n.data("error-class") : "is-valid",
                    o = n.parents(".js-form-message")[0],
                    r = n;
                void 0 !== o.data("validate-state") ? (r = o) : o.find("[data-validate-state]").length && (r = o.find("[data-validate-state]")), r.removeClass(i).addClass(s);
            },
            submitHandler: function (e) {
                e.submit();
            },
        };
    })(jQuery),
    (function (e) {
        "use strict";
        e.HSCore.components.HSIonRangeSlider = {
            defaults: {
                type: "single",
                hide_min_max: !0,
                hide_from_to: !0,
                foreground_target_el: null,
                secondary_target_el: null,
                secondary_val: { steps: null, values: null },
                result_min_target_el: null,
                result_max_target_el: null,
                cusOnChange: null,
            },
            init: function (t, n) {
                if (t.length && void 0 !== t.attr("data-hs-ion-range-slider-options")) {
                    var i = Object.assign({}, this.defaults),
                        s = t.attr("data-hs-ion-range-slider-options") ? JSON.parse(t.attr("data-hs-ion-range-slider-options")) : {},
                        o = {
                            onStart: function (t) {
                                if (o.foreground_target_el) {
                                    var n = 100 - (t.from_percent + (100 - t.to_percent));
                                    e(o.foreground_target_el).css({ left: t.from_percent + "%", width: n + "%" }),
                                        e(o.foreground_target_el + " > *").css({ width: e(o.foreground_target_el).parent().width(), transform: "translateX(-" + t.from_percent + "%)" });
                                }
                                if (
                                    (o.result_min_target_el && "single" === o.type
                                        ? e(o.result_min_target_el).is("input")
                                            ? e(o.result_min_target_el).val(t.from)
                                            : e(o.result_min_target_el).text(t.from)
                                        : (o.result_min_target_el || (o.result_max_target_el && "double" === o.type)) &&
                                          (e(o.result_min_target_el).is("input") ? e(o.result_min_target_el).val(t.from) : e(o.result_min_target_el).text(t.from),
                                          e(o.result_min_target_el).is("input") ? e(o.result_max_target_el).val(t.to) : e(o.result_max_target_el).text(t.to)),
                                    o.grid &&
                                        "single" === o.type &&
                                        e(t.slider)
                                            .find(".irs-grid-text")
                                            .each(function (n) {
                                                var i = e(this);
                                                e(i).text() === t.from && (e(t.slider).find(".irs-grid-text").removeClass("current"), e(i).addClass("current"));
                                            }),
                                    o.secondary_target_el)
                                ) {
                                    o.secondary_val.steps.push(t.max + 1), o.secondary_val.values.push(o.secondary_val.values[o.secondary_val.values.length - 1] + 1);
                                    for (var i = 0; i < o.secondary_val.steps.length; i++)
                                        t.from >= o.secondary_val.steps[i] &&
                                            t.from < o.secondary_val.steps[i + 1] &&
                                            (e(o.secondary_target_el).is("input") ? e(o.secondary_target_el).val(o.secondary_val.values[i]) : e(o.secondary_target_el).text(o.secondary_val.values[i]));
                                }
                            },
                            onChange: function (t) {
                                if (o.foreground_target_el) {
                                    var i = 100 - (t.from_percent + (100 - t.to_percent));
                                    e(o.foreground_target_el).css({ left: t.from_percent + "%", width: i + "%" }),
                                        e(o.foreground_target_el + "> *").css({ width: e(o.foreground_target_el).parent().width(), transform: "translateX(-" + t.from_percent + "%)" });
                                }
                                if (
                                    (o.result_min_target_el && "single" === o.type
                                        ? e(o.result_min_target_el).is("input")
                                            ? e(o.result_min_target_el).val(t.from)
                                            : e(o.result_min_target_el).text(t.from)
                                        : (o.result_min_target_el || (o.result_max_target_el && "double" === o.type)) &&
                                          (e(o.result_min_target_el).is("input") ? e(o.result_min_target_el).val(t.from) : e(o.result_min_target_el).text(t.from),
                                          e(o.result_min_target_el).is("input") ? e(o.result_max_target_el).val(t.to) : e(o.result_max_target_el).text(t.to)),
                                    o.grid &&
                                        "single" === o.type &&
                                        e(t.slider)
                                            .find(".irs-grid-text")
                                            .each(function (n) {
                                                var i = e(this);
                                                e(i).text() === t.from && (e(t.slider).find(".irs-grid-text").removeClass("current"), e(i).addClass("current"));
                                            }),
                                    o.secondary_target_el)
                                )
                                    for (var s = 0; s < o.secondary_val.steps.length; s++)
                                        t.from >= o.secondary_val.steps[s] &&
                                            t.from < o.secondary_val.steps[s + 1] &&
                                            (e(o.secondary_target_el).is("input") ? e(o.secondary_target_el).val(o.secondary_val.values[s]) : e(o.secondary_target_el).text(o.secondary_val.values[s]));
                                n && n.cusOnChange && "function" == typeof n.cusOnChange && n.cusOnChange();
                            },
                        };
                    o = e.extend(!0, i, o, s, n);
                    var r = t.ionRangeSlider(o),
                        a = t.data("ionRangeSlider");
                    return (
                        o.result_min_target_el && "single" === o.type && e(o.result_min_target_el).is("input")
                            ? e(o.result_min_target_el).on("change", function () {
                                  a.update({ from: e(this).val() });
                              })
                            : (o.result_min_target_el || (o.result_max_target_el && "double" === o.type && e(o.result_min_target_el).is("input")) || e(o.result_max_target_el).is("input")) &&
                              (e(o.result_min_target_el).on("change", function () {
                                  a.update({ from: e(this).val() });
                              }),
                              e(o.result_max_target_el).on("change", function () {
                                  a.update({ to: e(this).val() });
                              })),
                        e(window).on("resize", function () {
                            e(o.foreground_target_el + " > *").css({ width: e(o.foreground_target_el).parent().width() });
                        }),
                        r
                    );
                }
            },
        };
    })(jQuery),
    (function (e) {
        "use strict";
        e.HSCore.components.HSSlickCarousel = {
            defaults: {
                infinite: !1,
                pauseOnHover: !1,
                centerPadding: 0,
                lazyLoad: !1,
                prevArrow: null,
                nextArrow: null,
                autoplaySpeed: 3e3,
                speed: 300,
                initialDelay: 600,
                isThumbs: !1,
                isThumbsProgressCircle: !1,
                thumbsProgressContainer: null,
                thumbsProgressOptions: { color: "#000", width: 4 },
                animationIn: null,
                animationOut: null,
                dotsWithIcon: null,
                dotsFromTitles: null,
                dotsAsProgressLine: !1,
                hasDotsHelper: !1,
                counterSelector: null,
                counterDivider: "/",
                counterClassMap: { current: "slick-counter-current", total: "slick-counter-total", divider: "slick-counter-divider" },
            },
            init: function (t, n) {
                if (t.length) {
                    var i = this,
                        s = Object.assign({}, i.defaults),
                        o = t.attr("data-hs-slick-carousel-options") ? JSON.parse(t.attr("data-hs-slick-carousel-options")) : {},
                        r = { id: t.attr("id") };
                    (r = e.extend(s, r, o)),
                        (r = e.extend(
                            r,
                            {
                                customPaging: function (t, n) {
                                    var i = e(t.$slides[n]).data("hs-slick-carousel-slide-title");
                                    return i && r.dotsWithIcon
                                        ? "<span>" + i + "</span>" + r.dotsWithIcon
                                        : r.dotsWithIcon
                                        ? "<span></span>" + r.dotsWithIcon
                                        : i && r.dotsFromTitles
                                        ? "<span>" + i + "</span>"
                                        : i && !r.dotsFromTitles
                                        ? '<span></span><strong class="dot-title">' + i + "</strong>"
                                        : "<span></span>";
                                },
                            },
                            n
                        )),
                        t.find("[data-slide-type]").length && i.videoSupport(t),
                        t.on("init", function (e, n) {
                            i.transformOff(t, r, e, n);
                        }),
                        t.on("init", function (e, t) {
                            i.setCustomAnimation(e, t);
                        }),
                        r.animationIn &&
                            r.animationOut &&
                            t.on("init", function (e, t) {
                                i.setSingleClass(e, t);
                            }),
                        r.dotsAsProgressLine &&
                            t.on("init", function () {
                                i.setCustomLineDots(t, r);
                            }),
                        r.hasDotsHelper &&
                            t.on("init", function (e, t, n) {
                                i.setCustomDots(e, t, n);
                            }),
                        r.isThumbs &&
                            (r.isThumbsProgressCircle &&
                                t.on("init", function (e, n) {
                                    i.setCustomProgressCircle(t, r, e, n);
                                }),
                            e("#" + r.id).on("click", ".slick-slide", function (t) {
                                t.stopPropagation(), i.goToTargetSlide(e(this), r);
                            })),
                        t.on("init", function (e, n) {
                            i.setCustomCurrentClass(t, e, n);
                        }),
                        t.on("init", function (e, t) {
                            i.setInitialCustomAnimation(e, t);
                        }),
                        r.counterSelector &&
                            t.on("init", function (e, t) {
                                i.setCounter(r, e, t);
                            });
                    var a = t.slick(r);
                    return (
                        e(r.asNavFor)[0] && e(r.asNavFor)[0].dataset.hsSlickCarouselOptions && JSON.parse(e(r.asNavFor)[0].dataset.hsSlickCarouselOptions).isThumbsProgress && i.setInitialDelay(t, r),
                        t.on("beforeChange", function (e, n, s, o) {
                            i.setCustomClasses(t, e, n, s, o);
                        }),
                        r.counterSelector &&
                            t.on("beforeChange", function (e, t, n, s) {
                                i.counting(r, e, t, n, s);
                            }),
                        t.on("afterChange", function (e, t) {
                            i.setCustomAnimation(e, t);
                        }),
                        r.animationIn &&
                            r.animationOut &&
                            (t.on("afterChange", function (e, t, n, s) {
                                i.animationIn(r, e, t, n, s);
                            }),
                            t.on("beforeChange", function (e, t, n) {
                                i.animationOut(r, e, t, n);
                            }),
                            t.on("setPosition", function (e, t) {
                                i.setPosition(r, e, t);
                            })),
                        a
                    );
                }
            },
            transformOff: function (t, n, i, s) {
                var o = n;
                e(s.$slides).css("height", "auto"), o.isThumbs && o.slidesToShow >= e(s.$slides).length && t.addClass("slick-transform-off");
            },
            setCustomAnimation: function (t, n) {
                var i = e(n.$slides)[n.currentSlide],
                    s = e(i).find("[data-hs-slick-carousel-animation]");
                n.$slides.each(function (t) {
                    if (t !== n.currentSlide) {
                        var i = e(this).find("[data-hs-slick-carousel-animation]");
                        e(i).each(function () {
                            e(this).css({ opacity: 0 });
                        });
                    }
                }),
                    e(s).each(function () {
                        var t = e(this).data("hs-slick-carousel-animation"),
                            n = e(this).data("hs-slick-carousel-animation-delay"),
                            i = e(this).data("hs-slick-carousel-animation-duration");
                        e(this).css({ "animation-delay": n + "ms", "animation-duration": i + "ms" }),
                            e(this)
                                .addClass("animated " + t)
                                .css({ opacity: 1 });
                    });
            },
            setInitialCustomAnimation: function (t, n) {
                var i = e(n.$slides)[0],
                    s = e(i).find("[data-hs-slick-carousel-animation]");
                e(s).each(function () {
                    var t = e(this).data("hs-slick-carousel-animation");
                    e(this)
                        .addClass("animated " + t)
                        .css("opacity", 1);
                });
            },
            setSingleClass: function (t, n) {
                e(n.$slides).addClass("single-slide");
            },
            setCustomDots: function (e) {
                var t = e.find(".js-dots");
                t.length && t.append('<span class="dots-helper"></span>');
            },
            setCustomLineDots: function (t, n) {
                var i = t.find('[class="' + n.dotsClass + '"]'),
                    s = i.find("li");
                i.length &&
                    (setTimeout(function () {
                        t.addClass("slick-line-dots-ready");
                    }),
                    s.each(function () {
                        e(this).append('<span class="dot-line"><span class="dot-line-helper" style="transition-duration: ' + (n.autoplaySpeed + n.speed) + 'ms;"></span></span>');
                    }));
            },
            setCustomProgressCircle: function (t, n, i, s) {
                var o = n,
                    r = 0,
                    a = e('<style type="text/css"></style>');
                e(s.$slides).each(function (t) {
                    var n = e(
                            '<span class="slick-thumb-progress"><svg version="1.1" viewBox="0 0 160 160"><path class="slick-thumb-progress__path" d="M 79.98452083651917 4.000001576345426 A 76 76 0 1 1 79.89443752470656 4.0000733121155605 Z"></path></svg></span>'
                        ),
                        i = n.find("svg path");
                    (r = parseInt(i[0].getTotalLength())), e(s.$slides[t]).children(o.thumbsProgressContainer).append(n);
                }),
                    a.text(
                        ".slick-thumb-progress .slick-thumb-progress__path {opacity: 0;fill: transparent;stroke: " +
                            o.thumbsProgressOptions.color +
                            ";stroke-width: " +
                            o.thumbsProgressOptions.width +
                            ";stroke-dashoffset: " +
                            r +
                            ";stroke-dashoffset: 0px;}.slick-current .slick-thumb-progress .slick-thumb-progress__path {opacity: 1;-webkit-animation: " +
                            (s.options.autoplaySpeed + s.options.speed) +
                            "ms linear 0ms forwards dash;-moz-animation: " +
                            (s.options.autoplaySpeed + s.options.speed) +
                            "ms linear 0ms forwards dash;-o-animation: " +
                            (s.options.autoplaySpeed + s.options.speed) +
                            "ms linear 0ms forwards dash;animation: " +
                            (s.options.autoplaySpeed + s.options.speed) +
                            "ms linear 0ms forwards dash;}@-webkit-keyframes dash {from {stroke-dasharray: 0 " +
                            r +
                            ";} to {stroke-dasharray: " +
                            r +
                            " " +
                            r +
                            ";}}@-moz-keyframes dash {from {stroke-dasharray: 0 " +
                            r +
                            ";} to {stroke-dasharray: " +
                            r +
                            " " +
                            r +
                            ";}}@-moz-keyframes dash {from {stroke-dasharray: 0 " +
                            r +
                            ";} to {stroke-dasharray: " +
                            r +
                            " " +
                            r +
                            ";}}@keyframes dash {from {stroke-dasharray: 0 " +
                            r +
                            ";} to {stroke-dasharray: " +
                            r +
                            " " +
                            r +
                            ";}}"
                    ),
                    a.appendTo(t);
            },
            goToTargetSlide: function (t, n) {
                var i = n,
                    s = t.data("slick-index");
                e("#" + i.id).slick("slickCurrentSlide") !== s && e("#" + i.id).slick("slickGoTo", s);
            },
            setCustomCurrentClass: function (t) {
                var n = t.find(".js-dots");
                n.length && e(n[0].children[0]).addClass("slick-current");
            },
            setCounter: function (t, n, i) {
                var s = t;
                e(s.counterSelector).html(
                    '<span class="' + s.counterClassMap.current + '">1</span><span class="' + s.counterClassMap.divider + '">' + s.counterDivider + '</span><span class="' + s.counterClassMap.total + '">' + i.slideCount + "</span>"
                );
            },
            setInitialDelay: function (e, t) {
                var n = t;
                e.slick("slickPause"),
                    setTimeout(function () {
                        e.slick("slickPlay");
                    }, n.initialDelay);
            },
            setCustomClasses: function (t, n, i, s, o) {
                var r = e(i.$slides)[o],
                    a = e(i.$slides)[s],
                    l = t.find(".js-dots"),
                    c = e(r).find("[data-hs-slick-carousel-animation]"),
                    u = e(a).find("[data-hs-slick-carousel-animation]");
                e(u).each(function () {
                    var t = e(this).data("hs-slick-carousel-animation");
                    e(this).removeClass("animated " + t);
                }),
                    e(c).each(function () {
                        e(this).css({ opacity: 0 });
                    }),
                    l.length &&
                        (s > o ? (e(l[0].children).removeClass("slick-active-right"), e(l[0].children[o]).addClass("slick-active-right")) : e(l[0].children).removeClass("slick-active-right"),
                        e(l[0].children).removeClass("slick-current"),
                        setTimeout(function () {
                            e(l[0].children[o]).addClass("slick-current");
                        }, 0.25));
            },
            animationIn: function (t, n, i, s, o) {
                var r = t;
                e(i.$slides).removeClass("animated set-position " + r.animationIn + " " + r.animationOut);
            },
            animationOut: function (t, n, i, s) {
                var o = t;
                e(i.$slides[s]).addClass("animated " + o.animationOut);
            },
            setPosition: function (t, n, i) {
                var s = t;
                e(i.$slides[i.currentSlide]).addClass("animated set-position " + s.animationIn);
            },
            counting: function (t, n, i, s, o) {
                var r = t,
                    a = (o || 0) + 1;
                e(r.counterSelector).html(
                    '<span class="' + r.counterClassMap.current + '">' + a + '</span><span class="' + r.counterClassMap.divider + '">' + r.counterDivider + '</span><span class="' + r.counterClassMap.total + '">' + i.slideCount + "</span>"
                );
            },
            videoSupport: function (t) {
                t.length &&
                    t.on("beforeChange", function (t, n, i, s) {
                        var o,
                            r = e(n.$slides[i]).data("slide-type"),
                            a = e(n.$slides[i]).find("iframe").get(0);
                        if ("vimeo" === r) o = { method: "pause", value: "true" };
                        else {
                            if ("youtube" !== r) return !1;
                            o = { event: "command", func: "pauseVideo" };
                        }
                        void 0 !== a && a.contentWindow.postMessage(JSON.stringify(o), "*");
                    });
            },
            initTextAnimation: function (t, n) {
                if (window.TextFx && window.anime && t.length) {
                    var i = t.find(n);
                    i.length &&
                        (i.each(function (t, n) {
                            var i = e(n);
                            i.data("TextFx") || i.data("TextFx", new TextFx(i.get(0)));
                        }),
                        t.on("beforeChange", function (e, t, i, s) {
                            var o = t.$slider.find(".slick-track").children(),
                                r = o.eq(i),
                                a = o.eq(s);
                            (r = r.find(n)), (a = a.find(n)), r.length && r.data("TextFx").hide(r.data("effect") ? r.data("effect") : "fx1"), a.length && a.data("TextFx").show(a.data("effect") ? a.data("effect") : "fx1");
                        }));
                }
            },
        };
    })(jQuery),
    $(document).on("ready", function () {
        new HSHeader($("#header")).init(), new HSMegaMenu($(".js-mega-menu"), { desktop: { position: "left" } }).init(), new HSUnfold(".js-hs-unfold-invoker").init();
        var e = $.HSCore.components.HSIonRangeSlider.init($(".js-ion-range-slider"), {
            cusOnChange: function () {
                var e = $(".js-switch-text:checked"),
                    t = JSON.parse(e.attr("data-hs-switch-text-options"));
                (t.target[0].text = $("#rangeSliderResult").text()), (t.target[1].text = $("#rangeSliderSecondaryResult").text()), e.attr("data-hs-switch-text-options", JSON.stringify(t));
            },
        });
        $(".js-switch-text").each(function () {
            new HSSwitchText($(this), {
                afterChange: function () {
                    e.data("ionRangeSlider").update({ from: $(this)[0].target[0].text });
                },
            }).init();
        }),
            $(".js-validate").each(function () {
                $.HSCore.components.HSValidation.init($(this));
            }),
            AOS.init({ duration: 650, once: !0 }),
            $(".js-go-to").each(function () {
                new HSGoTo($(this)).init();
            }),
            $(".js-slick-carousel").each(function () {
                $.HSCore.components.HSSlickCarousel.init($(this));
            }),
            $(".js-sticky-block").each(function () {
                new HSStickyBlock($(this)).init();
            }),
            $(".js-scroll-nav").each(function () {
                new HSScrollNav($(this)).init();
            });
    });
