// CodeMirror version 3.20
//
// CodeMirror is the only global var we claim
window.CodeMirror = function() {
    "use strict";
    function x(e, n) {
        if (!(this instanceof x))
            return new x(e, n);
        this.options = n = n || {};
        for (var r in er)
            !n.hasOwnProperty(r) && er.hasOwnProperty(r) && (n[r] = er[r]);
        H(n);
        var i = typeof n.value == "string" ? 0: n.value.first, s = this.display = T(e, i);
        s.wrapper.CodeMirror = this, _(this), n.autofocus&&!v && It(this), this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: !1,
            draggingText: !1,
            highlight: new Qi
        }, O(this), n.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap");
        var o = n.value;
        typeof o == "string" && (o = new ui(n.value, n.mode)), Mt(this, ci)(this, o), t && setTimeout(os(Ft, this, !0), 20), Rt(this);
        var u;
        try {
            u = document.activeElement == s.input
        } catch (a) {}
        u || n.autofocus&&!v ? setTimeout(os(pn, this), 20) : dn(this), Mt(this, function() {
            for (var e in Zn)
                Zn.propertyIsEnumerable(e) && Zn[e](this, n[e], nr);
            for (var t = 0; t < or.length; ++t)
                or[t](this)
        })()
    }
    function T(e, t) {
        var r = {}, i = r.input = cs("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none; font-size: 4px;");
        return s ? i.style.width = "1000px" : i.setAttribute("wrap", "off"), d && (i.style.border = "1px solid black"), i.setAttribute("autocorrect", "off"), i.setAttribute("autocapitalize", "off"), i.setAttribute("spellcheck", "false"), r.inputDiv = cs("div", [i], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"), r.scrollbarH = cs("div", [cs("div", null, null, "height: 1px")], "CodeMirror-hscrollbar"), r.scrollbarV = cs("div", [cs("div", null, null, "width: 1px")], "CodeMirror-vscrollbar"), r.scrollbarFiller = cs("div", null, "CodeMirror-scrollbar-filler"), r.gutterFiller = cs("div", null, "CodeMirror-gutter-filler"), r.lineDiv = cs("div", null, "CodeMirror-code"), r.selectionDiv = cs("div", null, null, "position: relative; z-index: 1"), r.cursor = cs("div", " ", "CodeMirror-cursor"), r.otherCursor = cs("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"), r.measure = cs("div", null, "CodeMirror-measure"), r.lineSpace = cs("div", [r.measure, r.selectionDiv, r.lineDiv, r.cursor, r.otherCursor], null, "position: relative; outline: none"), r.mover = cs("div", [cs("div", [r.lineSpace], "CodeMirror-lines")], null, "position: relative"), r.sizer = cs("div", [r.mover], "CodeMirror-sizer"), r.heightForcer = cs("div", null, null, "position: absolute; height: " + Ji + "px; width: 1px;"), r.gutters = cs("div", null, "CodeMirror-gutters"), r.lineGutter = null, r.scroller = cs("div", [r.sizer, r.heightForcer, r.gutters], "CodeMirror-scroll"), r.scroller.setAttribute("tabIndex", "-1"), r.wrapper = cs("div", [r.inputDiv, r.scrollbarH, r.scrollbarV, r.scrollbarFiller, r.gutterFiller, r.scroller], "CodeMirror"), n && (r.gutters.style.zIndex =- 1, r.scroller.style.paddingRight = 0), e.appendChild ? e.appendChild(r.wrapper) : e(r.wrapper), d && (i.style.width = "0px"), s || (r.scroller.draggable=!0), l ? (r.inputDiv.style.height = "1px", r.inputDiv.style.position = "absolute") : n && (r.scrollbarH.style.minWidth = r.scrollbarV.style.minWidth = "18px"), r.viewOffset = r.lastSizeC = 0, r.showingFrom = r.showingTo = t, r.lineNumWidth = r.lineNumInnerWidth = r.lineNumChars = null, r.prevInput = "", r.alignWidgets=!1, r.pollingFast=!1, r.poll = new Qi, r.cachedCharWidth = r.cachedTextHeight = null, r.measureLineCache = [], r.measureLineCachePos = 0, r.inaccurateSelection=!1, r.maxLine = null, r.maxLineLength = 0, r.maxLineChanged=!1, r.wheelDX = r.wheelDY = r.wheelStartX = r.wheelStartY = null, r
    }
    function N(e) {
        e.doc.mode = x.getMode(e.options, e.doc.modeOption), e.doc.iter(function(e) {
            e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
        }), e.doc.frontier = e.doc.first, tt(e, 100), e.state.modeGen++, e.curOp && Pt(e)
    }
    function C(e) {
        e.options.lineWrapping ? (e.display.wrapper.className += " CodeMirror-wrap", e.display.sizer.style.minWidth = "") : (e.display.wrapper.className = e.display.wrapper.className.replace(" CodeMirror-wrap", ""), P(e)), L(e), Pt(e), vt(e), setTimeout(function() {
            B(e)
        }, 100)
    }
    function k(e) {
        var t = Ct(e.display), n = e.options.lineWrapping, r = n && Math.max(5, e.display.scroller.clientWidth / kt(e.display)-3);
        return function(i) {
            return Dr(e.doc, i) ? 0 : n ? (Math.ceil(i.text.length / r) || 1) * t : t
        }
    }
    function L(e) {
        var t = e.doc, n = k(e);
        t.iter(function(e) {
            var t = n(e);
            t != e.height && vi(e, t)
        })
    }
    function A(e) {
        var t = cr[e.options.keyMap], n = t.style;
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-keymap-\S+/g, "") + (n ? " cm-keymap-" + n : ""), e.state.disableInput = t.disableInput
    }
    function O(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), vt(e)
    }
    function M(e) {
        _(e), Pt(e), setTimeout(function() {
            F(e)
        }, 20)
    }
    function _(e) {
        var t = e.display.gutters, n = e.options.gutters;
        hs(t);
        for (var r = 0; r < n.length; ++r) {
            var i = n[r], s = t.appendChild(cs("div", null, "CodeMirror-gutter " + i));
            i == "CodeMirror-linenumbers" && (e.display.lineGutter = s, s.style.width = (e.display.lineNumWidth || 1) + "px")
        }
        t.style.display = r ? "" : "none"
    }
    function D(e, t) {
        if (t.height == 0)
            return 0;
        var n = t.text.length, r, i = t;
        while (r = Or(i)) {
            var s = r.find();
            i = hi(e, s.from.line), n += s.from.ch - s.to.ch
        }
        i = t;
        while (r = Mr(i)) {
            var s = r.find();
            n -= i.text.length - s.from.ch, i = hi(e, s.to.line), n += i.text.length - s.to.ch
        }
        return n
    }
    function P(e) {
        var t = e.display, n = e.doc;
        t.maxLine = hi(n, n.first), t.maxLineLength = D(n, t.maxLine), t.maxLineChanged=!0, n.iter(function(e) {
            var r = D(n, e);
            r > t.maxLineLength && (t.maxLineLength = r, t.maxLine = e)
        })
    }
    function H(e) {
        var t = ns(e.gutters, "CodeMirror-linenumbers");
        t==-1 && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t>-1&&!e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
    }
    function B(e) {
        var t = e.display, n = e.doc.height, r = n + ot(t);
        t.sizer.style.minHeight = t.heightForcer.style.top = r + "px", t.gutters.style.height = Math.max(r, t.scroller.clientHeight - Ji) + "px";
        var i = Math.max(r, t.scroller.scrollHeight), s = t.scroller.scrollWidth > t.scroller.clientWidth + 1, o = i > t.scroller.clientHeight + 1;
        o ? (t.scrollbarV.style.display = "block", t.scrollbarV.style.bottom = s ? bs(t.measure) + "px" : "0", t.scrollbarV.firstChild.style.height = i - t.scroller.clientHeight + t.scrollbarV.clientHeight + "px") : (t.scrollbarV.style.display = "", t.scrollbarV.firstChild.style.height = "0"), s ? (t.scrollbarH.style.display = "block", t.scrollbarH.style.right = o ? bs(t.measure) + "px" : "0", t.scrollbarH.firstChild.style.width = t.scroller.scrollWidth - t.scroller.clientWidth + t.scrollbarH.clientWidth + "px") : (t.scrollbarH.style.display = "", t.scrollbarH.firstChild.style.width = "0"), s && o ? (t.scrollbarFiller.style.display = "block", t.scrollbarFiller.style.height = t.scrollbarFiller.style.width = bs(t.measure) + "px") : t.scrollbarFiller.style.display = "", s && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (t.gutterFiller.style.display = "block", t.gutterFiller.style.height = bs(t.measure) + "px", t.gutterFiller.style.width = t.gutters.offsetWidth + "px") : t.gutterFiller.style.display = "", c && bs(t.measure) === 0 && (t.scrollbarV.style.minWidth = t.scrollbarH.style.minHeight = h ? "18px" : "12px", t.scrollbarV.style.pointerEvents = t.scrollbarH.style.pointerEvents = "none")
    }
    function j(e, t, n) {
        var r = e.scroller.scrollTop, i = e.wrapper.clientHeight;
        typeof n == "number" ? r = n : n && (r = n.top, i = n.bottom - n.top), r = Math.floor(r - st(e));
        var s = Math.ceil(r + i);
        return {
            from: gi(t, r),
            to: gi(t, s)
        }
    }
    function F(e) {
        var t = e.display;
        if (!t.alignWidgets && (!t.gutters.firstChild ||!e.options.fixedGutter))
            return;
        var n = R(t) - t.scroller.scrollLeft + e.doc.scrollLeft, r = t.gutters.offsetWidth, i = n + "px";
        for (var s = t.lineDiv.firstChild; s; s = s.nextSibling)
            if (s.alignable)
                for (var o = 0, u = s.alignable; o < u.length; ++o)
                    u[o].style.left = i;
        e.options.fixedGutter && (t.gutters.style.left = n + r + "px")
    }
    function I(e) {
        if (!e.options.lineNumbers)
            return !1;
        var t = e.doc, n = q(e.options, t.first + t.size-1), r = e.display;
        if (n.length != r.lineNumChars) {
            var i = r.measure.appendChild(cs("div", [cs("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")), s = i.firstChild.offsetWidth, o = i.offsetWidth - s;
            return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(s, r.lineGutter.offsetWidth - o), r.lineNumWidth = r.lineNumInnerWidth + o, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", !0
        }
        return !1
    }
    function q(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber))
    }
    function R(e) {
        return vs(e.scroller).left - vs(e.sizer).left
    }
    function U(e, t, n, r) {
        var i = e.display.showingFrom, s = e.display.showingTo, o, u = j(e.display, e.doc, n);
        for (var a=!0; ; a=!1) {
            var f = e.display.scroller.clientWidth;
            if (!z(e, t, u, r))
                break;
            o=!0, t = [], G(e), B(e);
            if (a && e.options.lineWrapping && f != e.display.scroller.clientWidth) {
                r=!0;
                continue
            }
            r=!1, n && (n = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, typeof n == "number" ? n : n.top)), u = j(e.display, e.doc, n);
            if (u.from >= e.display.showingFrom && u.to <= e.display.showingTo)
                break
        }
        return o && (zi(e, "update", e), (e.display.showingFrom != i || e.display.showingTo != s) && zi(e, "viewportChange", e, e.display.showingFrom, e.display.showingTo)), o
    }
    function z(e, t, n, r) {
        var i = e.display, s = e.doc;
        if (!i.wrapper.clientWidth) {
            i.showingFrom = i.showingTo = s.first, i.viewOffset = 0;
            return 
        }
        if (!r && t.length == 0 && n.from > i.showingFrom && n.to < i.showingTo)
            return;
        I(e) && (t = [{
            from: s.first,
            to: s.first + s.size
        }
        ]);
        var o = i.sizer.style.marginLeft = i.gutters.offsetWidth + "px";
        i.scrollbarH.style.left = e.options.fixedGutter ? o : "0";
        var u = Infinity;
        if (e.options.lineNumbers)
            for (var a = 0; a < t.length; ++a)
                t[a].diff && t[a].from < u && (u = t[a].from);
        var f = s.first + s.size, l = Math.max(n.from - e.options.viewportMargin, s.first), c = Math.min(f, n.to + e.options.viewportMargin);
        i.showingFrom < l && l - i.showingFrom < 20 && (l = Math.max(s.first, i.showingFrom)), i.showingTo > c && i.showingTo - c < 20 && (c = Math.min(f, i.showingTo));
        if (S) {
            l = mi(_r(s, hi(s, l)));
            while (c < f && Dr(s, hi(s, c)))++c
        }
        var h = [{
            from: Math.max(i.showingFrom, s.first),
            to: Math.min(i.showingTo, f)
        }
        ];
        h[0].from >= h[0].to ? h = [] : h = V(h, t);
        if (S)
            for (var a = 0; a < h.length; ++a) {
                var p = h[a], d;
                while (d = Mr(hi(s, p.to-1))) {
                    var v = d.find().from.line;
                    if (!(v > p.from)) {
                        h.splice(a--, 1);
                        break
                    }
                    p.to = v
                }
            }
        var m = 0;
        for (var a = 0; a < h.length; ++a) {
            var p = h[a];
            p.from < l && (p.from = l), p.to > c && (p.to = c), p.from >= p.to ? h.splice(a--, 1) : m += p.to - p.from
        }
        if (!r && m == c - l && l == i.showingFrom && c == i.showingTo) {
            X(e);
            return 
        }
        h.sort(function(e, t) {
            return e.from - t.from
        });
        try {
            var g = document.activeElement
        } catch (y) {}
        m < (c - l) * .7 && (i.lineDiv.style.display = "none"), J(e, l, c, h, u), i.lineDiv.style.display = "", g && document.activeElement != g && g.offsetHeight && g.focus();
        var b = l != i.showingFrom || c != i.showingTo || i.lastSizeC != i.wrapper.clientHeight;
        return b && (i.lastSizeC = i.wrapper.clientHeight, tt(e, 400)), i.showingFrom = l, i.showingTo = c, W(e), X(e), !0
    }
    function W(e) {
        var t = e.display, r = t.lineDiv.offsetTop;
        for (var i = t.lineDiv.firstChild, s; i; i = i.nextSibling)
            if (i.lineObj) {
                if (n) {
                    var o = i.offsetTop + i.offsetHeight;
                    s = o - r, r = o
                } else {
                    var u = vs(i);
                    s = u.bottom - u.top
                }
                var a = i.lineObj.height - s;
                s < 2 && (s = Ct(t));
                if (a > .001 || a<-0.001) {
                    vi(i.lineObj, s);
                    var f = i.lineObj.widgets;
                    if (f)
                        for (var l = 0; l < f.length; ++l)
                            f[l].height = f[l].node.offsetHeight
                }
            }
    }
    function X(e) {
        var t = e.display.viewOffset = yi(e, hi(e.doc, e.display.showingFrom));
        e.display.mover.style.top = t + "px"
    }
    function V(e, t) {
        for (var n = 0, r = t.length || 0; n < r; ++n) {
            var i = t[n], s = [], o = i.diff || 0;
            for (var u = 0, a = e.length; u < a; ++u) {
                var f = e[u];
                i.to <= f.from && i.diff ? s.push({
                    from: f.from + o,
                    to: f.to + o
                }) : i.to <= f.from || i.from >= f.to ? s.push(f) : (i.from > f.from && s.push({
                    from: f.from,
                    to: i.from
                }), i.to < f.to && s.push({
                    from : i.to + o, to : f.to + o
                }))
            }
            e = s
        }
        return e
    }
    function $(e) {
        var t = e.display, n = {}, r = {};
        for (var i = t.gutters.firstChild, s = 0; i; i = i.nextSibling, ++s)
            n[e.options.gutters[s]] = i.offsetLeft, r[e.options.gutters[s]] = i.offsetWidth;
        return {
            fixedPos: R(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: n,
            gutterWidth: r,
            wrapperWidth: t.wrapper.clientWidth
        }
    }
    function J(e, t, n, r, i) {
        function c(t) {
            var n = t.nextSibling;
            return s && m && e.display.currentWheelTarget == t ? (t.style.display = "none", t.lineObj = null) : t.parentNode.removeChild(t), n
        }
        var o = $(e), u = e.display, a = e.options.lineNumbers;
        !r.length && (!s ||!e.display.currentWheelTarget) && hs(u.lineDiv);
        var f = u.lineDiv, l = f.firstChild, h = r.shift(), p = t;
        e.doc.iter(t, n, function(t) {
            h && h.to == p && (h = r.shift());
            if (Dr(e.doc, t)) {
                t.height != 0 && vi(t, 0);
                if (t.widgets && l && l.previousSibling)
                    for (var n = 0; n < t.widgets.length; ++n) {
                        var s = t.widgets[n];
                        if (s.showIfHidden) {
                            var u = l.previousSibling;
                            if (/pre/i.test(u.nodeName)) {
                                var d = cs("div", null, null, "position: relative");
                                u.parentNode.replaceChild(d, u), d.appendChild(u), u = d
                            }
                            var v = u.appendChild(cs("div", [s.node], "CodeMirror-linewidget"));
                            s.handleMouseEvents || (v.ignoreEvents=!0), Q(s, v, u, o)
                        }
                    }
                } else if (h && h.from <= p && h.to > p) {
                    while (l.lineObj != t)
                        l = c(l);
                        a && i <= p && l.lineNumber && ds(l.lineNumber, q(e.options, p)), l = l.nextSibling
                } else {
                    if (t.widgets)
                        for (var m = 0, g = l, y; g && m < 20; ++m, g = g.nextSibling)
                            if (g.lineObj == t && /div/i.test(g.nodeName)) {
                                y = g;
                                break
                            }
                            var b = K(e, t, p, o, y);
                            if (b != y)
                                f.insertBefore(b, l);
                            else {
                                while (l != y)
                                    l = c(l);
                                    l = l.nextSibling
                            }
                            b.lineObj = t
                }
            ++p
        });
        while (l)
            l = c(l)
    }
    function K(e, t, r, i, s) {
        var o = Qr(e, t), u = o.pre, a = t.gutterMarkers, f = e.display, l, c = o.bgClass ? o.bgClass + " " + (t.bgClass || ""): t.bgClass;
        if (!e.options.lineNumbers&&!a&&!c&&!t.wrapClass&&!t.widgets)
            return u;
        if (s) {
            s.alignable = null;
            var h=!0, p = 0, d = null;
            for (var v = s.firstChild, m; v; v = m) {
                m = v.nextSibling;
                if (!/\bCodeMirror-linewidget\b/.test(v.className))
                    s.removeChild(v);
                else {
                    for (var g = 0; g < t.widgets.length; ++g) {
                        var y = t.widgets[g];
                        if (y.node == v.firstChild) {
                            !y.above&&!d && (d = v), Q(y, v, s, i), ++p;
                            break
                        }
                    }
                    if (g == t.widgets.length) {
                        h=!1;
                        break
                    }
                }
            }
            s.insertBefore(u, d), h && p == t.widgets.length && (l = s, s.className = t.wrapClass || "")
        }
        l || (l = cs("div", null, t.wrapClass, "position: relative"), l.appendChild(u)), c && l.insertBefore(cs("div", null, c + " CodeMirror-linebackground"), l.firstChild);
        if (e.options.lineNumbers || a) {
            var b = l.insertBefore(cs("div", null, null, "position: absolute; left: " + (e.options.fixedGutter ? i.fixedPos : - i.gutterTotalWidth) + "px"), l.firstChild);
            e.options.fixedGutter && (l.alignable || (l.alignable = [])).push(b), e.options.lineNumbers && (!a ||!a["CodeMirror-linenumbers"]) && (l.lineNumber = b.appendChild(cs("div", q(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + i.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + f.lineNumInnerWidth + "px")));
            if (a)
                for (var w = 0; w < e.options.gutters.length; ++w) {
                    var E = e.options.gutters[w], S = a.hasOwnProperty(E) && a[E];
                    S && b.appendChild(cs("div", [S], "CodeMirror-gutter-elt", "left: " + i.gutterLeft[E] + "px; width: " + i.gutterWidth[E] + "px"))
                }
            }
        n && (l.style.zIndex = 2);
        if (t.widgets && l != s)
            for (var g = 0, x = t.widgets; g < x.length; ++g) {
                var y = x[g], T = cs("div", [y.node], "CodeMirror-linewidget");
                y.handleMouseEvents || (T.ignoreEvents=!0), Q(y, T, l, i), y.above ? l.insertBefore(T, e.options.lineNumbers && t.height != 0 ? b : u) : l.appendChild(T), zi(y, "redraw")
            }
        return l
    }
    function Q(e, t, n, r) {
        if (e.noHScroll) {
            (n.alignable || (n.alignable = [])).push(t);
            var i = r.wrapperWidth;
            t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px"
        }
        e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft =- r.gutterTotalWidth + "px"))
    }
    function G(e) {
        var t = e.display, n = An(e.doc.sel.from, e.doc.sel.to);
        n || e.options.showCursorWhenSelecting ? Y(e) : t.cursor.style.display = t.otherCursor.style.display = "none", n ? t.selectionDiv.style.display = "none" : Z(e);
        if (e.options.moveInputWithCursor) {
            var r = Et(e, e.doc.sel.head, "div"), i = vs(t.wrapper), s = vs(t.lineDiv);
            t.inputDiv.style.top = Math.max(0, Math.min(t.wrapper.clientHeight-10, r.top + s.top - i.top)) + "px", t.inputDiv.style.left = Math.max(0, Math.min(t.wrapper.clientWidth-10, r.left + s.left - i.left)) + "px"
        }
    }
    function Y(e) {
        var t = e.display, n = Et(e, e.doc.sel.head, "div");
        t.cursor.style.left = n.left + "px", t.cursor.style.top = n.top + "px", t.cursor.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px", t.cursor.style.display = "", n.other ? (t.otherCursor.style.display = "", t.otherCursor.style.left = n.other.left + "px", t.otherCursor.style.top = n.other.top + "px", t.otherCursor.style.height = (n.other.bottom - n.other.top) * .85 + "px") : t.otherCursor.style.display = "none"
    }
    function Z(e) {
        function u(e, t, n, r) {
            t < 0 && (t = 0), i.appendChild(cs("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px; top: " + t + "px; width: " + (n == null ? s - e : n) + "px; height: " + (r - t) + "px"))
        }
        function a(t, r, i) {
            function h(n, r) {
                return wt(e, Ln(t, n), "div", a, r)
            }
            var a = hi(n, t), f = a.text.length, l, c;
            return Cs(bi(a), r || 0, i == null ? f : i, function(e, t, n) {
                var a = h(e, "left"), p, d, v;
                if (e == t)
                    p = a, d = v = a.left;
                else {
                    p = h(t-1, "right");
                    if (n == "rtl") {
                        var m = a;
                        a = p, p = m
                    }
                    d = a.left, v = p.right
                }
                r == null && e == 0 && (d = o), p.top - a.top > 3 && (u(d, a.top, null, a.bottom), d = o, a.bottom < p.top && u(d, a.bottom, null, p.top)), i == null && t == f && (v = s);
                if (!l || a.top < l.top || a.top == l.top && a.left < l.left)
                    l = a;
                if (!c || p.bottom > c.bottom || p.bottom == c.bottom && p.right > c.right)
                    c = p;
                d < o + 1 && (d = o), u(d, p.top, v - d, p.bottom)
            }), {
                start: l, end: c
            }
        }
        var t = e.display, n = e.doc, r = e.doc.sel, i = document.createDocumentFragment(), s = t.lineSpace.offsetWidth, o = ut(e.display);
        if (r.from.line == r.to.line)
            a(r.from.line, r.from.ch, r.to.ch);
        else {
            var f = hi(n, r.from.line), l = hi(n, r.to.line), c = _r(n, f) == _r(n, l), h = a(r.from.line, r.from.ch, c ? f.text.length : null).end, p = a(r.to.line, c ? 0 : null, r.to.ch).start;
            c && (h.top < p.top-2 ? (u(h.right, h.top, null, h.bottom), u(o, p.top, p.left, p.bottom)) : u(h.right, h.top, p.left - h.right, h.bottom)), h.bottom < p.top && u(o, h.bottom, null, p.top)
        }
        ps(t.selectionDiv, i), t.selectionDiv.style.display = ""
    }
    function et(e) {
        if (!e.state.focused)
            return;
        var t = e.display;
        clearInterval(t.blinker);
        var n=!0;
        t.cursor.style.visibility = t.otherCursor.style.visibility = "", e.options.cursorBlinkRate > 0 && (t.blinker = setInterval(function() {
            t.cursor.style.visibility = t.otherCursor.style.visibility = (n=!n) ? "" : "hidden"
        }, e.options.cursorBlinkRate))
    }
    function tt(e, t) {
        e.doc.mode.startState && e.doc.frontier < e.display.showingTo && e.state.highlight.set(t, os(nt, e))
    }
    function nt(e) {
        var t = e.doc;
        t.frontier < t.first && (t.frontier = t.first);
        if (t.frontier >= e.display.showingTo)
            return;
        var n =+ (new Date) + e.options.workTime, r = ar(t.mode, it(e, t.frontier)), i = [], s;
        t.iter(t.frontier, Math.min(t.first + t.size, e.display.showingTo + 500), function(o) {
            if (t.frontier >= e.display.showingFrom) {
                var u = o.styles;
                o.styles = Xr(e, o, r, !0);
                var a=!u || u.length != o.styles.length;
                for (var f = 0; !a && f < u.length; ++f)
                    a = u[f] != o.styles[f];
                a && (s && s.end == t.frontier ? s.end++ : i.push(s = {
                    start: t.frontier,
                    end: t.frontier + 1
                })), o.stateAfter = ar(t.mode, r)
            } else 
                $r(e, o.text, r), o.stateAfter = t.frontier%5 == 0 ? ar(t.mode, r) : null;
            ++t.frontier;
            if ( + (new Date) > n)
                return tt(e, e.options.workDelay), !0
        }), i.length && Mt(e, function() {
            for (var e = 0; e < i.length; ++e)
                Pt(this, i[e].start, i[e].end)
        })()
    }
    function rt(e, t, n) {
        var r, i, s = e.doc, o = n?-1 : t - (e.doc.mode.innerMode ? 1e3 : 100);
        for (var u = t; u > o; --u) {
            if (u <= s.first)
                return s.first;
            var a = hi(s, u-1);
            if (a.stateAfter && (!n || u <= s.frontier))
                return u;
            var f = Gi(a.text, null, e.options.tabSize);
            if (i == null || r > f)
                i = u-1, r = f
        }
        return i
    }
    function it(e, t, n) {
        var r = e.doc, i = e.display;
        if (!r.mode.startState)
            return !0;
        var s = rt(e, t, n), o = s > r.first && hi(r, s-1).stateAfter;
        return o ? o = ar(r.mode, o) : o = fr(r.mode), r.iter(s, t, function(n) {
            $r(e, n.text, o);
            var u = s == t-1 || s%5 == 0 || s >= i.showingFrom && s < i.showingTo;
            n.stateAfter = u ? ar(r.mode, o) : null, ++s
        }), n && (r.frontier = s), o
    }
    function st(e) {
        return e.lineSpace.offsetTop
    }
    function ot(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight
    }
    function ut(e) {
        var t = ps(e.measure, cs("pre", null, null, "text-align: left")).appendChild(cs("span", "x"));
        return t.offsetLeft
    }
    function at(e, t, n, r, i) {
        var s =- 1;
        r = r || ct(e, t);
        if (r.crude) {
            var o = r.left + n * r.width;
            return {
                left: o,
                right: o + r.width,
                top: r.top,
                bottom: r.bottom
            }
        }
        for (var u = n; ; u += s) {
            var a = r[u];
            if (a)
                break;
            s < 0 && u == 0 && (s = 1)
        }
        return i = u > n ? "left" : u < n ? "right" : i, i == "left" && a.leftSide ? a = a.leftSide : i == "right" && a.rightSide && (a = a.rightSide), {
            left: u < n ? a.right : a.left, right: u > n ? a.left : a.right, top: a.top, bottom: a.bottom
        }
    }
    function ft(e, t) {
        var n = e.display.measureLineCache;
        for (var r = 0; r < n.length; ++r) {
            var i = n[r];
            if (i.text == t.text && i.markedSpans == t.markedSpans && e.display.scroller.clientWidth == i.width && i.classes == t.textClass + "|" + t.wrapClass)
                return i
        }
    }
    function lt(e, t) {
        var n = ft(e, t);
        n && (n.text = n.measure = n.markedSpans = null)
    }
    function ct(e, t) {
        var n = ft(e, t);
        if (n)
            return n.measure;
        var r = ht(e, t), i = e.display.measureLineCache, s = {
            text: t.text,
            width: e.display.scroller.clientWidth,
            markedSpans: t.markedSpans,
            measure: r,
            classes: t.textClass + "|" + t.wrapClass
        };
        return i.length == 16 ? i[++e.display.measureLineCachePos%16] = s : i.push(s), r
    }
    function ht(e, i) {
        function b(e) {
            var t = e.top - v.top, n = e.bottom - v.top;
            n > y && (n = y), t < 0 && (t = 0);
            for (var r = m.length-2; r >= 0; r -= 2) {
                var i = m[r], s = m[r + 1];
                if (i > n || s < t)
                    continue;
                if (i <= t && s >= n || t <= i && n >= s || Math.min(n, s) - Math.max(t, i) >= n - t>>1) {
                    m[r] = Math.min(t, i), m[r + 1] = Math.max(n, s);
                    break
                }
            }
            return r < 0 && (r = m.length, m.push(t, n)), {
                left: e.left - v.left, right: e.right - v.left, top: r, bottom: null
            }
        }
        function w(e) {
            e.bottom = m[e.top + 1], e.top = m[e.top]
        }
        if (!e.options.lineWrapping && i.text.length >= e.options.crudeMeasuringFrom)
            return pt(e, i);
        var s = e.display, o = ss(i.text.length), u = Qr(e, i, o, !0).pre;
        if (t&&!n&&!e.options.lineWrapping && u.childNodes.length > 100) {
            var a = document.createDocumentFragment(), f = 10, l = u.childNodes.length;
            for (var c = 0, h = Math.ceil(l / f); c < h; ++c) {
                var p = cs("div", null, null, "display: inline-block");
                for (var d = 0; d < f && l; ++d)
                    p.appendChild(u.firstChild), --l;
                a.appendChild(p)
            }
            u.appendChild(a)
        }
        ps(s.measure, u);
        var v = vs(s.lineDiv), m = [], g = ss(i.text.length), y = u.offsetHeight;
        r && s.measure.first != u && ps(s.measure, u);
        for (var c = 0, E; c < o.length; ++c)
            if (E = o[c]) {
                var S = E, x = null;
                if (/\bCodeMirror-widget\b/.test(E.className) && E.getClientRects) {
                    E.firstChild.nodeType == 1 && (S = E.firstChild);
                    var T = S.getClientRects();
                    T.length > 1 && (x = g[c] = b(T[0]), x.rightSide = b(T[T.length-1]))
                }
                x || (x = g[c] = b(vs(S))), E.measureRight && (x.right = vs(E.measureRight).left), E.leftSide && (x.leftSide = b(vs(E.leftSide)))
            }
        hs(e.display.measure);
        for (var c = 0, E; c < g.length; ++c)
            if (E = g[c])
                w(E), E.leftSide && w(E.leftSide), E.rightSide && w(E.rightSide);
        return g
    }
    function pt(e, t) {
        var n = new Rr(t.text.slice(0, 100), null);
        t.textClass && (n.textClass = t.textClass);
        var r = ht(e, n), i = at(e, n, 0, r, "left"), s = at(e, n, 99, r, "right");
        return {
            crude: !0,
            top: i.top,
            left: i.left,
            bottom: i.bottom,
            width: (s.right - i.left) / 100
        }
    }
    function dt(e, t) {
        var n=!1;
        if (t.markedSpans)
            for (var r = 0; r < t.markedSpans; ++r) {
                var i = t.markedSpans[r];
                i.collapsed && (i.to == null || i.to == t.text.length) && (n=!0)
            }
        var s=!n && ft(e, t);
        if (s || t.text.length >= e.options.crudeMeasuringFrom)
            return at(e, t, t.text.length, s && s.measure, "right").right;
        var o = Qr(e, t, null, !0).pre, u = o.appendChild(Es(e.display.measure));
        return ps(e.display.measure, o), vs(u).right - vs(e.display.lineDiv).left
    }
    function vt(e) {
        e.display.measureLineCache.length = e.display.measureLineCachePos = 0, e.display.cachedCharWidth = e.display.cachedTextHeight = null, e.options.lineWrapping || (e.display.maxLineChanged=!0), e.display.lineNumChars = null
    }
    function mt() {
        return window.pageXOffset || (document.documentElement || document.body).scrollLeft
    }
    function gt() {
        return window.pageYOffset || (document.documentElement || document.body).scrollTop
    }
    function yt(e, t, n, r) {
        if (t.widgets)
            for (var i = 0; i < t.widgets.length; ++i)
                if (t.widgets[i].above) {
                    var s = Ir(t.widgets[i]);
                    n.top += s, n.bottom += s
                }
        if (r == "line")
            return n;
        r || (r = "local");
        var o = yi(e, t);
        r == "local" ? o += st(e.display) : o -= e.display.viewOffset;
        if (r == "page" || r == "window") {
            var u = vs(e.display.lineSpace);
            o += u.top + (r == "window" ? 0 : gt());
            var a = u.left + (r == "window" ? 0 : mt());
            n.left += a, n.right += a
        }
        return n.top += o, n.bottom += o, n
    }
    function bt(e, t, n) {
        if (n == "div")
            return t;
        var r = t.left, i = t.top;
        if (n == "page")
            r -= mt(), i -= gt();
        else if (n == "local" ||!n) {
            var s = vs(e.display.sizer);
            r += s.left, i += s.top
        }
        var o = vs(e.display.lineSpace);
        return {
            left: r - o.left,
            top: i - o.top
        }
    }
    function wt(e, t, n, r, i) {
        return r || (r = hi(e.doc, t.line)), yt(e, r, at(e, r, t.ch, null, i), n)
    }
    function Et(e, t, n, r, i) {
        function s(t, s) {
            var o = at(e, r, t, i, s ? "right" : "left");
            return s ? o.left = o.right : o.right = o.left, yt(e, r, o, n)
        }
        function o(e, t) {
            var n = u[t], r = n.level%2;
            return e == ks(n) && t && n.level < u[t-1].level ? (n = u[--t], e = Ls(n) - (n.level%2 ? 0 : 1), r=!0) : e == Ls(n) && t < u.length-1 && n.level < u[t + 1].level && (n = u[++t], e = ks(n) - n.level%2, r=!1), r && e == n.to && e > n.from ? s(e-1) : s(e, r)
        }
        r = r || hi(e.doc, t.line), i || (i = ct(e, r));
        var u = bi(r), a = t.ch;
        if (!u)
            return s(a);
        var f = Hs(u, a), l = o(a, f);
        return Ps != null && (l.other = o(a, Ps)), l
    }
    function St(e, t, n, r) {
        var i = new Ln(e, t);
        return i.xRel = r, n && (i.outside=!0), i
    }
    function xt(e, t, n) {
        var r = e.doc;
        n += e.display.viewOffset;
        if (n < 0)
            return St(r.first, 0, !0, -1);
        var i = gi(r, n), s = r.first + r.size-1;
        if (i > s)
            return St(r.first + r.size-1, hi(r, s).text.length, !0, 1);
        t < 0 && (t = 0);
        for (; ;) {
            var o = hi(r, i), u = Tt(e, o, i, t, n), a = Mr(o), f = a && a.find();
            if (!a ||!(u.ch > f.from.ch || u.ch == f.from.ch && u.xRel > 0))
                return u;
            i = f.to.line
        }
    }
    function Tt(e, t, n, r, i) {
        function f(r) {
            var i = Et(e, Ln(n, r), "line", t, a);
            return o=!0, s > i.bottom ? i.left - u : s < i.top ? i.left + u : (o=!1, i.left)
        }
        var s = i - yi(e, t), o=!1, u = 2 * e.display.wrapper.clientWidth, a = ct(e, t), l = bi(t), c = t.text.length, h = As(t), p = Os(t), d = f(h), v = o, m = f(p), g = o;
        if (r > m)
            return St(n, p, g, 1);
        for (; ;) {
            if (l ? p == h || p == js(t, h, 1) : p - h <= 1) {
                var y = r < d || r - d <= m - r ? h: p, b = r - (y == h ? d : m);
                while (ls.test(t.text.charAt(y)))++y;
                var w = St(n, y, y == h ? v : g, b < 0?-1 : b ? 1 : 0);
                return w
            }
            var E = Math.ceil(c / 2), S = h + E;
            if (l) {
                S = h;
                for (var x = 0; x < E; ++x)
                    S = js(t, S, 1)
                }
            var T = f(S);
            if (T > r) {
                p = S, m = T;
                if (g = o)
                    m += 1e3;
                c = E
            } else 
                h = S, d = T, v = o, c -= E
        }
    }
    function Ct(e) {
        if (e.cachedTextHeight != null)
            return e.cachedTextHeight;
        if (Nt == null) {
            Nt = cs("pre");
            for (var t = 0; t < 49; ++t)
                Nt.appendChild(document.createTextNode("x")), Nt.appendChild(cs("br"));
            Nt.appendChild(document.createTextNode("x"))
        }
        ps(e.measure, Nt);
        var n = Nt.offsetHeight / 50;
        return n > 3 && (e.cachedTextHeight = n), hs(e.measure), n || 1
    }
    function kt(e) {
        if (e.cachedCharWidth != null)
            return e.cachedCharWidth;
        var t = cs("span", "x"), n = cs("pre", [t]);
        ps(e.measure, n);
        var r = t.offsetWidth;
        return r > 2 && (e.cachedCharWidth = r), r || 10
    }
    function At(e) {
        e.curOp = {
            changes: [],
            forceUpdate: !1,
            updateInput: null,
            userSelChange: null,
            textChanged: null,
            selectionChanged: !1,
            cursorActivity: !1,
            updateMaxLine: !1,
            updateScrollPos: !1,
            id: ++Lt
        }, Ui++||(Ri = [])
    }
    function Ot(e) {
        var t = e.curOp, n = e.doc, r = e.display;
        e.curOp = null, t.updateMaxLine && P(e);
        if (r.maxLineChanged&&!e.options.lineWrapping && r.maxLine) {
            var i = dt(e, r.maxLine);
            r.sizer.style.minWidth = Math.max(0, i + 3 + Ji) + "px", r.maxLineChanged=!1;
            var s = Math.max(0, r.sizer.offsetLeft + r.sizer.offsetWidth - r.scroller.clientWidth);
            s < n.scrollLeft&&!t.updateScrollPos && en(e, Math.min(r.scroller.scrollLeft, s), !0)
        }
        var o, u;
        if (t.updateScrollPos)
            o = t.updateScrollPos;
        else if (t.selectionChanged && r.scroller.clientHeight) {
            var a = Et(e, n.sel.head);
            o = Wn(e, a.left, a.top, a.left, a.bottom)
        }
        if (t.changes.length || t.forceUpdate || o && o.scrollTop != null)
            u = U(e, t.changes, o && o.scrollTop, t.forceUpdate), e.display.scroller.offsetHeight && (e.doc.scrollTop = e.display.scroller.scrollTop);
        !u && t.selectionChanged && G(e);
        if (t.updateScrollPos) {
            var f = Math.max(0, Math.min(r.scroller.scrollHeight - r.scroller.clientHeight, o.scrollTop)), l = Math.max(0, Math.min(r.scroller.scrollWidth - r.scroller.clientWidth, o.scrollLeft));
            r.scroller.scrollTop = r.scrollbarV.scrollTop = n.scrollTop = f, r.scroller.scrollLeft = r.scrollbarH.scrollLeft = n.scrollLeft = l, F(e), t.scrollToPos && Un(e, Dn(e.doc, t.scrollToPos.from), Dn(e.doc, t.scrollToPos.to), t.scrollToPos.margin)
        } else 
            o && Rn(e);
        t.selectionChanged && et(e), e.state.focused && t.updateInput && Ft(e, t.userSelChange);
        var c = t.maybeHiddenMarkers, h = t.maybeUnhiddenMarkers;
        if (c)
            for (var p = 0; p < c.length; ++p)
                c[p].lines.length || qi(c[p], "hide");
        if (h)
            for (var p = 0; p < h.length; ++p)
                h[p].lines.length && qi(h[p], "unhide");
        var d;
        --Ui || (d = Ri, Ri = null), t.textChanged && qi(e, "change", e, t.textChanged), t.cursorActivity && qi(e, "cursorActivity", e);
        if (d)
            for (var p = 0; p < d.length; ++p)
                d[p]()
    }
    function Mt(e, t) {
        return function() {
            var n = e || this, r=!n.curOp;
            r && At(n);
            try {
                var i = t.apply(n, arguments)
            } finally {
                r && Ot(n)
            }
            return i
        }
    }
    function _t(e) {
        return function() {
            var t = this.cm&&!this.cm.curOp, n;
            t && At(this.cm);
            try {
                n = e.apply(this, arguments)
            } finally {
                t && Ot(this.cm)
            }
            return n
        }
    }
    function Dt(e, t) {
        var n=!e.curOp, r;
        n && At(e);
        try {
            r = t()
        } finally {
            n && Ot(e)
        }
        return r
    }
    function Pt(e, t, n, r) {
        t == null && (t = e.doc.first), n == null && (n = e.doc.first + e.doc.size), e.curOp.changes.push({
            from: t,
            to: n,
            diff: r
        })
    }
    function Ht(e) {
        if (e.display.pollingFast)
            return;
        e.display.poll.set(e.options.pollInterval, function() {
            jt(e), e.state.focused && Ht(e)
        })
    }
    function Bt(e) {
        function n() {
            var r = jt(e);
            !r&&!t ? (t=!0, e.display.poll.set(60, n)) : (e.display.pollingFast=!1, Ht(e))
        }
        var t=!1;
        e.display.pollingFast=!0, e.display.poll.set(20, n)
    }
    function jt(e) {
        var n = e.display.input, i = e.display.prevInput, s = e.doc, o = s.sel;
        if (!e.state.focused || xs(n) || qt(e) || e.state.disableInput)
            return !1;
        e.state.pasteIncoming && e.state.fakedLastChar && (n.value = n.value.substring(0, n.value.length-1), e.state.fakedLastChar=!1);
        var u = n.value;
        if (u == i && An(o.from, o.to))
            return !1;
        if (t&&!r && e.display.inputHasSelection === u)
            return Ft(e, !0), !1;
        var a=!e.curOp;
        a && At(e), o.shift=!1;
        var f = 0, l = Math.min(i.length, u.length);
        while (f < l && i.charCodeAt(f) == u.charCodeAt(f))++f;
        var c = o.from, h = o.to;
        f < i.length ? c = Ln(c.line, c.ch - (i.length - f)) : e.state.overwrite && An(c, h)&&!e.state.pasteIncoming && (h = Ln(h.line, Math.min(hi(s, h.line).text.length, h.ch + (u.length - f))));
        var p = e.curOp.updateInput, d = {
            from: c,
            to: h,
            text: Ss(u.slice(f)),
            origin: e.state.pasteIncoming ? "paste": "+input"
        };
        return En(e.doc, d, "end"), e.curOp.updateInput = p, zi(e, "inputRead", e, d), u.length > 1e3 || u.indexOf("\n")>-1 ? n.value = e.display.prevInput = "" : e.display.prevInput = u, a && Ot(e), e.state.pasteIncoming=!1, !0
    }
    function Ft(e, n) {
        var i, s, o = e.doc;
        if (!An(o.sel.from, o.sel.to)) {
            e.display.prevInput = "", i = Ts && (o.sel.to.line - o.sel.from.line > 100 || (s = e.getSelection()).length > 1e3);
            var u = i ? "-": s || e.getSelection();
            e.display.input.value = u, e.state.focused && ts(e.display.input), t&&!r && (e.display.inputHasSelection = u)
        } else 
            n && (e.display.prevInput = e.display.input.value = "", t&&!r && (e.display.inputHasSelection = null));
        e.display.inaccurateSelection = i
    }
    function It(e) {
        e.options.readOnly != "nocursor" && (!v || document.activeElement != e.display.input) && e.display.input.focus()
    }
    function qt(e) {
        return e.options.readOnly || e.doc.cantEdit
    }
    function Rt(e) {
        function i() {
            e.state.focused && setTimeout(os(It, e), 0)
        }
        function u() {
            o == null && (o = setTimeout(function() {
                o = null, n.cachedCharWidth = n.cachedTextHeight = ys = null, vt(e), Dt(e, os(Pt, e))
            }, 100))
        }
        function a() {
            for (var e = n.wrapper.parentNode; e && e != document.body; e = e.parentNode);
            e ? setTimeout(a, 5e3) : Ii(window, "resize", u)
        }
        function f(t) {
            if (Wi(e, t) || e.options.onDragEvent && e.options.onDragEvent(e, Mi(t)))
                return;
            Hi(t)
        }
        function c() {
            n.inaccurateSelection && (n.prevInput = "", n.inaccurateSelection=!1, n.input.value = e.getSelection(), ts(n.input))
        }
        var n = e.display;
        Fi(n.scroller, "mousedown", Mt(e, Vt)), t ? Fi(n.scroller, "dblclick", Mt(e, function(t) {
            if (Wi(e, t))
                return;
            var n = zt(e, t);
            if (!n || Kt(e, t) || Ut(e.display, t))
                return;
            _i(t);
            var r = Gn(hi(e.doc, n.line).text, n);
            Bn(e.doc, r.from, r.to)
        })) : Fi(n.scroller, "dblclick", function(t) {
            Wi(e, t) || _i(t)
        }), Fi(n.lineSpace, "selectstart", function(e) {
            Ut(n, e) || _i(e)
        }), w || Fi(n.scroller, "contextmenu", function(t) {
            mn(e, t)
        }), Fi(n.scroller, "scroll", function() {
            n.scroller.clientHeight && (Zt(e, n.scroller.scrollTop), en(e, n.scroller.scrollLeft, !0), qi(e, "scroll", e))
        }), Fi(n.scrollbarV, "scroll", function() {
            n.scroller.clientHeight && Zt(e, n.scrollbarV.scrollTop)
        }), Fi(n.scrollbarH, "scroll", function() {
            n.scroller.clientHeight && en(e, n.scrollbarH.scrollLeft)
        }), Fi(n.scroller, "mousewheel", function(t) {
            rn(e, t)
        }), Fi(n.scroller, "DOMMouseScroll", function(t) {
            rn(e, t)
        }), Fi(n.scrollbarH, "mousedown", i), Fi(n.scrollbarV, "mousedown", i), Fi(n.wrapper, "scroll", function() {
            n.wrapper.scrollTop = n.wrapper.scrollLeft = 0
        });
        var o;
        Fi(window, "resize", u), setTimeout(a, 5e3), Fi(n.input, "keyup", Mt(e, function(t) {
            if (Wi(e, t) || e.options.onKeyEvent && e.options.onKeyEvent(e, Mi(t)))
                return;
            t.keyCode == 16 && (e.doc.sel.shift=!1)
        })), Fi(n.input, "input", function() {
            t&&!r && e.display.inputHasSelection && (e.display.inputHasSelection = null), Bt(e)
        }), Fi(n.input, "keydown", Mt(e, cn)), Fi(n.input, "keypress", Mt(e, hn)), Fi(n.input, "focus", os(pn, e)), Fi(n.input, "blur", os(dn, e)), e.options.dragDrop && (Fi(n.scroller, "dragstart", function(t) {
            Yt(e, t)
        }), Fi(n.scroller, "dragenter", f), Fi(n.scroller, "dragover", f), Fi(n.scroller, "drop", Mt(e, Gt))), Fi(n.scroller, "paste", function(t) {
            if (Ut(n, t))
                return;
            It(e), Bt(e)
        }), Fi(n.input, "paste", function() {
            if (s&&!e.state.fakedLastChar&&!(new Date - e.state.lastMiddleDown < 200)) {
                var t = n.input.selectionStart, r = n.input.selectionEnd;
                n.input.value += "$", n.input.selectionStart = t, n.input.selectionEnd = r, e.state.fakedLastChar=!0
            }
            e.state.pasteIncoming=!0, Bt(e)
        }), Fi(n.input, "cut", c), Fi(n.input, "copy", c), l && Fi(n.sizer, "mouseup", function() {
            document.activeElement == n.input && n.input.blur(), It(e)
        })
    }
    function Ut(e, t) {
        for (var n = Bi(t); n != e.wrapper; n = n.parentNode)
            if (!n || n.ignoreEvents || n.parentNode == e.sizer && n != e.mover)
                return !0
    }
    function zt(e, t, n) {
        var r = e.display;
        if (!n) {
            var i = Bi(t);
            if (i == r.scrollbarH || i == r.scrollbarH.firstChild || i == r.scrollbarV || i == r.scrollbarV.firstChild || i == r.scrollbarFiller || i == r.gutterFiller)
                return null
        }
        var s, o, u = vs(r.lineSpace);
        try {
            s = t.clientX, o = t.clientY
        } catch (t) {
            return null
        }
        return xt(e, s - u.left, o - u.top)
    }
    function Vt(e) {
        function m(e) {
            if (An(v, e))
                return;
            v = e;
            if (f == "single") {
                Bn(n.doc, Dn(i, u), e);
                return 
            }
            p = Dn(i, p), d = Dn(i, d);
            if (f == "double") {
                var t = Gn(hi(i, e.line).text, e);
                On(e, p) ? Bn(n.doc, t.from, d) : Bn(n.doc, p, t.to)
            } else 
                f == "triple" && (On(e, p) ? Bn(n.doc, d, Dn(i, Ln(e.line, 0))) : Bn(n.doc, p, Dn(i, Ln(e.line + 1, 0))))
        }
        function b(e) {
            var t=++y, s = zt(n, e, !0);
            if (!s)
                return;
            if (!An(s, c)) {
                n.state.focused || pn(n), c = s, m(s);
                var o = j(r, i);
                (s.line >= o.to || s.line < o.from) && setTimeout(Mt(n, function() {
                    y == t && b(e)
                }), 150)
            } else {
                var u = e.clientY < g.top?-20 : e.clientY > g.bottom ? 20 : 0;
                u && setTimeout
                (Mt(n, function() {
                    if (y != t)
                        return;
                    r.scroller.scrollTop += u, b(e)
                }), 50)
            }
        }
        function E(e) {
            y = Infinity, _i(e), It(n), Ii(document, "mousemove", S), Ii(document, "mouseup", x)
        }
        if (Wi(this, e))
            return;
        var n = this, r = n.display, i = n.doc, o = i.sel;
        o.shift = e.shiftKey;
        if (Ut(r, e)) {
            s || (r.scroller.draggable=!1, setTimeout(function() {
                r.scroller.draggable=!0
            }, 100));
            return 
        }
        if (Kt(n, e))
            return;
        var u = zt(n, e);
        switch (ji(e)) {
        case 3:
            w && mn.call(n, n, e);
            return;
        case 2:
            s && (n.state.lastMiddleDown =+ (new Date)), u && Bn(n.doc, u), setTimeout(os(It, n), 20), _i(e);
            return 
        }
        if (!u) {
            Bi(e) == r.scroller && _i(e);
            return 
        }
        n.state.focused || pn(n);
        var a =+ (new Date), f = "single";
        if (Xt && Xt.time > a-400 && An(Xt.pos, u)
            )f = "triple", _i(e), setTimeout(os(It, n), 20), Yn(n, u.line);
        else if (Wt && Wt.time > a-400 && An(Wt.pos, u)
            ) {
            f = "double", Xt = {
                time: a,
                pos: u
            }, _i(e);
            var l = Gn(hi(i, u.line).text, u);
            Bn(n.doc, l.from, l.to)
        } else 
            Wt = {
                time: a,
                pos: u
            };
        var c = u;
        if (n.options.dragDrop && ms&&!qt(n)&&!An(o.from, o.to)&&!On(u, o.from)&&!On(o.to, u) && f == "single") {
            var h = Mt(n, function(t) {
                s && (r.scroller.draggable=!1), n.state.draggingText=!1, Ii(document, "mouseup", h), Ii(r.scroller, "drop", h), Math.abs(e.clientX - t.clientX) + Math.abs(e.clientY - t.clientY) < 10 && (_i(t), Bn(n.doc, u), It(n))
            });
            s && (r.scroller.draggable=!0), n.state.draggingText = h, r.scroller.dragDrop && r.scroller.dragDrop(), Fi(document, "mouseup", h), Fi(r.scroller, "drop", h);
            return 
        }
        _i(e), f == "single" && Bn(n.doc, Dn(i, u));
        var p = o.from, d = o.to, v = u, g = vs(r.wrapper), y = 0, S = Mt(n, function(e) {
            !t&&!ji(e) ? E(e) : b(e)
        }), x = Mt(n, E);
        Fi(document, "mousemove", S), Fi(document, "mouseup", x)
    }
    function $t(e, t, n, r, i) {
        try {
            var s = t.clientX, o = t.clientY
        } catch (t) {
            return !1
        }
        if (s >= Math.floor(vs(e.display.gutters).right))
            return !1;
        r && _i(t);
        var u = e.display, a = vs(u.lineDiv);
        if (o > a.bottom ||!Vi(e, n))
            return Pi(t);
        o -= a.top - u.viewOffset;
        for (var f = 0; f < e.options.gutters.length; ++f) {
            var l = u.gutters.childNodes[f];
            if (l && vs(l).right >= s) {
                var c = gi(e.doc, o), h = e.options.gutters[f];
                return i(e, n, e, c, h, t), Pi(t)
            }
        }
    }
    function Jt(e, t) {
        return Vi(e, "gutterContextMenu") ? $t(e, t, "gutterContextMenu", !1, qi) : !1
    }
    function Kt(e, t) {
        return $t(e, t, "gutterClick", !0, zi)
    }
    function Gt(e) {
        var n = this;
        if (Wi(n, e) || Ut(n.display, e) || n.options.onDragEvent && n.options.onDragEvent(n, Mi(e)))
            return;
        _i(e), t && (Qt =+ (new Date));
        var r = zt(n, e, !0), i = e.dataTransfer.files;
        if (!r || qt(n))
            return;
        if (i && i.length && window.FileReader && window.File) {
            var s = i.length, o = Array(s), u = 0, a = function(e, t) {
                var i = new FileReader;
                i.onload = function() {
                    o[t] = i.result, ++u == s && (r = Dn(n.doc, r), En(n.doc, {
                        from : r, to : r, text : Ss(o.join("\n")), origin: "paste"
                    }, "around"))
                }, i.readAsText(e)
            };
            for (var f = 0; f < s; ++f)
                a(i[f], f)
        } else {
            if (n.state.draggingText&&!On(r, n.doc.sel.from)&&!On(n.doc.sel.to, r)) {
                n.state.draggingText(e), setTimeout(os(It, n), 20);
                return 
            }
            try {
                var o = e.dataTransfer.getData("Text");
                if (o) {
                    var l = n.doc.sel.from, c = n.doc.sel.to;
                    Fn(n.doc, r, r), n.state.draggingText && kn(n.doc, "", l, c, "paste"), n.replaceSelection(o, null, "paste"), It(n)
                }
            } catch (e) {}
        }
    }
    function Yt(e, n) {
        if (t && (!e.state.draggingText||+(new Date) - Qt < 100)) {
            Hi(n);
            return 
        }
        if (Wi(e, n) || Ut(e.display, n))
            return;
        var r = e.getSelection();
        n.dataTransfer.setData("Text", r);
        if (n.dataTransfer.setDragImage&&!f) {
            var i = cs("img", null, null, "position: fixed; left: 0; top: 0;");
            i.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", a && (i.width = i.height = 1, e.display.wrapper.appendChild(i), i._top = i.offsetTop), n.dataTransfer.setDragImage(i, 0, 0), a && i.parentNode.removeChild(i)
        }
    }
    function Zt(t, n) {
        if (Math.abs(t.doc.scrollTop - n) < 2)
            return;
        t.doc.scrollTop = n, e || U(t, [], n), t.display.scroller.scrollTop != n && (t.display.scroller.scrollTop = n), t.display.scrollbarV.scrollTop != n && (t.display.scrollbarV.scrollTop = n), e && U(t, []), tt(t, 100)
    }
    function en(e, t, n) {
        if (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2)
            return;
        t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), e.doc.scrollLeft = t, F(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbarH.scrollLeft != t && (e.display.scrollbarH.scrollLeft = t)
    }
    function rn(t, n) {
        var r = n.wheelDeltaX, i = n.wheelDeltaY;
        r == null && n.detail && n.axis == n.HORIZONTAL_AXIS && (r = n.detail), i == null && n.detail && n.axis == n.VERTICAL_AXIS ? i = n.detail : i == null && (i = n.wheelDelta);
        var o = t.display, u = o.scroller;
        if (!(r && u.scrollWidth > u.clientWidth || i && u.scrollHeight > u.clientHeight))
            return;
        if (i && m && s)
            for (var f = n.target; f != u; f = f.parentNode)
                if (f.lineObj) {
                    t.display.currentWheelTarget = f;
                    break
                }
        if (r&&!e&&!a && nn != null) {
            i && Zt(t, Math.max(0, Math.min(u.scrollTop + i * nn, u.scrollHeight - u.clientHeight))), en(t, Math.max(0, Math.min(u.scrollLeft + r * nn, u.scrollWidth - u.clientWidth))), _i(n), o.wheelStartX = null;
            return 
        }
        if (i && nn != null) {
            var l = i * nn, c = t.doc.scrollTop, h = c + o.wrapper.clientHeight;
            l < 0 ? c = Math.max(0, c + l-50) : h = Math.min(t.doc.height, h + l + 50), U(t, [], {
                top: c,
                bottom: h
            })
        }
        tn < 20 && (o.wheelStartX == null ? (o.wheelStartX = u.scrollLeft, o.wheelStartY = u.scrollTop, o.wheelDX = r, o.wheelDY = i, setTimeout(function() {
            if (o.wheelStartX == null)return; var e = u.scrollLeft - o.wheelStartX, t = u.scrollTop - o.wheelStartY, n = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX; o.wheelStartX = o.wheelStartY = null; if (!n)return; nn = (nn * tn + n) / (tn + 1), ++tn
        }, 200)) : (o.wheelDX += r, o.wheelDY += i))
    }
    function sn(e, t, n) {
        if (typeof t == "string") {
            t = lr[t];
            if (!t)
                return !1
        }
        e.display.pollingFast && jt(e) && (e.display.pollingFast=!1);
        var r = e.doc, i = r.sel.shift, s=!1;
        try {
            qt(e) && (e.state.suppressEdits=!0), n && (r.sel.shift=!1), s = t(e) != Ki
        } finally {
            r.sel.shift = i, e.state.suppressEdits=!1
        }
        return s
    }
    function on(e) {
        var t = e.state.keyMaps.slice(0);
        return e.options.extraKeys && t.push(e.options.extraKeys), t.push(e.options.keyMap), t
    }
    function an(e, t) {
        var n = hr(e.options.keyMap), i = n.auto;
        clearTimeout(un), i&&!dr(t) && (un = setTimeout(function() {
            hr(e.options.keyMap) == n && (e.options.keyMap = i.call ? i.call(null, e) : i, A(e))
        }, 50));
        var s = vr(t, !0), o=!1;
        if (!s)
            return !1;
        var u = on(e);
        return t.shiftKey ? o = pr("Shift-" + s, u, function(t) {
            return sn(e, t, !0)
        }) || pr(s, u, function(t) {
            if (typeof t == "string" ? /^go[A-Z]/.test(t) : t.motion)
                return sn(e, t)
        }) : o = pr(s, u, function(t) {
            return sn(e, t)
        }), o && (_i(t), et(e), r && (t.oldKeyCode = t.keyCode, t.keyCode = 0), zi(e, "keyHandled", e, s, t)), o
    }
    function fn(e, t, n) {
        var r = pr("'" + n + "'", on(e), function(t) {
            return sn(e, t, !0)
        });
        return r && (_i(t), et(e), zi(e, "keyHandled", e, "'" + n + "'", t)), r
    }
    function cn(e) {
        var n = this;
        n.state.focused || pn(n);
        if (Wi(n, e) || n.options.onKeyEvent && n.options.onKeyEvent(n, Mi(e)))
            return;
        t && e.keyCode == 27 && (e.returnValue=!1);
        var r = e.keyCode;
        n.doc.sel.shift = r == 16 || e.shiftKey;
        var i = an(n, e);
        a && (ln = i ? r : null, !i && r == 88&&!Ts && (m ? e.metaKey : e.ctrlKey) && n.replaceSelection(""))
    }
    function hn(e) {
        var n = this;
        if (Wi(n, e) || n.options.onKeyEvent && n.options.onKeyEvent(n, Mi(e)))
            return;
        var i = e.keyCode, s = e.charCode;
        if (a && i == ln) {
            ln = null, _i(e);
            return 
        }
        if ((a && (!e.which || e.which < 10) || l) && an(n, e))
            return;
        var o = String.fromCharCode(s == null ? i : s);
        this.options.electricChars && this.doc.mode.electricChars && this.options.smartIndent&&!qt(this) && this.doc.mode.electricChars.indexOf(o)>-1 && setTimeout(Mt(n, function() {
            $n(n, n.doc.sel.to.line, "smart")
        }), 75);
        if (fn(n, e, o))
            return;
        t&&!r && (n.display.inputHasSelection = null), Bt(n)
    }
    function pn(e) {
        if (e.options.readOnly == "nocursor")
            return;
        e.state.focused || (qi(e, "focus", e), e.state.focused=!0, e.display.wrapper.className.search(/\bCodeMirror-focused\b/)==-1 && (e.display.wrapper.className += " CodeMirror-focused"), e.curOp || (Ft(e, !0), s && setTimeout(os(Ft, e, !0), 0))), Ht(e), et(e)
    }
    function dn(e) {
        e.state.focused && (qi(e, "blur", e), e.state.focused=!1, e.display.wrapper.className = e.display.wrapper.className.replace(" CodeMirror-focused", "")), clearInterval(e.display.blinker), setTimeout(function() {
            e.state.focused || (e.doc.sel.shift=!1)
        }, 150)
    }
    function mn(e, n) {
        function c() {
            if (i.input.selectionStart != null) {
                var e = i.input.value = "​" + (An(s.from, s.to) ? "" : i.input.value);
                i.prevInput = "​", i.input.selectionStart = 1, i.input.selectionEnd = e.length
            }
        }
        function h() {
            i.inputDiv.style.position = "relative", i.input.style.cssText = l, r && (i.scrollbarV.scrollTop = i.scroller.scrollTop = u), Ht(e);
            if (i.input.selectionStart != null) {
                (!t || r) && c(), clearTimeout(vn);
                var n = 0, s = function() {
                    i.prevInput == " " && i.input.selectionStart == 0 ? Mt(e, lr.selectAll)(e) : n++<10 ? vn = setTimeout(s, 500) : Ft(e)
                };
                vn = setTimeout(s, 200)
            }
        }
        if (Wi(e, n, "contextmenu"))
            return;
        var i = e.display, s = e.doc.sel;
        if (Ut(i, n) || Jt(e, n))
            return;
        var o = zt(e, n), u = i.scroller.scrollTop;
        if (!o || a)
            return;
        var f = e.options.resetSelectionOnContextMenu;
        f && (An(s.from, s.to) || On(o, s.from) ||!On(o, s.to)) && Mt(e, Fn)(e.doc, o, o);
        var l = i.input.style.cssText;
        i.inputDiv.style.position = "absolute", i.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (n.clientY-5) + "px; left: " + (n.clientX-5) + "px; z-index: 1000; background: white; outline: none;" + "border-width: 0; outline: none; overflow: hidden; opacity: .05; -ms-opacity: .05; filter: alpha(opacity=5);", It(e), Ft(e, !0), An(s.from, s.to) && (i.input.value = i.prevInput = " "), t&&!r && c();
        if (w) {
            Hi(n);
            var p = function() {
                Ii(window, "mouseup", p), setTimeout(h, 20)
            };
            Fi(window, "mouseup", p)
        } else 
            setTimeout(h, 50)
    }
    function yn(e, t, n) {
        if (!On(t.from, n))
            return Dn(e, n);
        var r = t.text.length-1 - (t.to.line - t.from.line);
        if (n.line > t.to.line + r) {
            var i = n.line - r, s = e.first + e.size-1;
            return i > s ? Ln(s, hi(e, s).text.length) : Pn(n, hi(e, i).text.length)
        }
        if (n.line == t.to.line + r)
            return Pn(n, es(t.text).length + (t.text.length == 1 ? t.from.ch : 0) + hi(e, t.to.line).text.length - t.to.ch);
        var o = n.line - t.from.line;
        return Pn(n, t.text[o].length + (o ? 0 : t.from.ch))
    }
    function bn(e, t, n) {
        if (n && typeof n == "object")
            return {
                anchor: yn(e, t, n.anchor),
                head: yn(e, t, n.head)
            };
        if (n == "start")
            return {
                anchor: t.from,
                head: t.from
            };
        var r = gn(t);
        if (n == "around")
            return {
                anchor: t.from,
                head: r
            };
        if (n == "end")
            return {
                anchor: r,
                head: r
            };
        var i = function(e) {
            if (On(e, t.from))
                return e;
            if (!On(t.to, e))
                return r;
            var n = e.line + t.text.length - (t.to.line - t.from.line)-1, i = e.ch;
            return e.line == t.to.line && (i += r.ch - t.to.ch), Ln(n, i)
        };
        return {
            anchor: i(e.sel.anchor),
            head: i(e.sel.head)
        }
    }
    function wn(e, t, n) {
        var r = {
            canceled: !1,
            from: t.from,
            to: t.to,
            text: t.text,
            origin: t.origin,
            cancel: function() {
                this.canceled=!0
            }
        };
        return n && (r.update = function(t, n, r, i) {
            t && (this.from = Dn(e, t)), n && (this.to = Dn(e, n)), r && (this.text = r), i !== undefined && (this.origin = i)
        }), qi(e, "beforeChange", e, r), e.cm && qi(e.cm, "beforeChange", e.cm, r), r.canceled ? null : {
            from: r.from,
            to: r.to,
            text: r.text,
            origin: r.origin
        }
    }
    function En(e, t, n, r) {
        if (e.cm) {
            if (!e.cm.curOp)
                return Mt(e.cm, En)(e, t, n, r);
            if (e.cm.state.suppressEdits)
                return 
        }
        if (Vi(e, "beforeChange") || e.cm && Vi(e.cm, "beforeChange")) {
            t = wn(e, t, !0);
            if (!t)
                return 
        }
        var i = E&&!r && Lr(e, t.from, t.to);
        if (i) {
            for (var s = i.length-1; s >= 1; --s)
                Sn(e, {
                    from: i[s].from,
                    to: i[s].to,
                    text: [""]
                });
            i.length && Sn(e, {
                from: i[0].from,
                to: i[0].to,
                text: t.text
            }, n)
        } else 
            Sn(e, t, n)
    }
    function Sn(e, t, n) {
        if (t.text.length == 1 && t.text[0] == "" && An(t.from, t.to))
            return;
        var r = bn(e, t, n);
        xi(e, t, r, e.cm ? e.cm.curOp.id : NaN), Nn(e, t, r, Cr(e, t));
        var i = [];
        li(e, function(e, n) {
            !n && ns(i, e.history)==-1 && (Ai(e.history, t), i.push(e.history)), Nn(e, t, null, Cr(e, t))
        })
    }
    function xn(e, t) {
        if (e.cm && e.cm.state.suppressEdits)
            return;
        var n = e.history, r = (t == "undo" ? n.done : n.undone).pop();
        if (!r)
            return;
        var i = {
            changes: [],
            anchorBefore: r.anchorAfter,
            headBefore: r.headAfter,
            anchorAfter: r.anchorBefore,
            headAfter: r.headBefore,
            generation: n.generation
        };
        (t == "undo" ? n.undone : n.done).push(i), n.generation = r.generation||++n.maxGeneration;
        var s = Vi(e, "beforeChange") || e.cm && Vi(e.cm, "beforeChange");
        for (var o = r.changes.length-1; o >= 0; --o) {
            var u = r.changes[o];
            u.origin = t;
            if (s&&!wn(e, u, !1)) {
                (t == "undo" ? n.done : n.undone).length = 0;
                return 
            }
            i.changes.push(Si(e, u));
            var a = o ? bn(e, u, null): {
                anchor: r.anchorBefore,
                head: r.headBefore
            };
            Nn(e, u, a, kr(e, u));
            var f = [];
            li(e, function(e, t) {
                !t && ns(f, e.history)==-1 && (Ai(e.history, u), f.push(e.history)), Nn(e, u, null, kr(e, u))
            })
        }
    }
    function Tn(e, t) {
        function n(e) {
            return Ln(e.line + t, e.ch)
        }
        e.first += t, e.cm && Pt(e.cm, e.first, e.first, t), e.sel.head = n(e.sel.head), e.sel.anchor = n(e.sel.anchor), e.sel.from = n(e.sel.from), e.sel.to = n(e.sel.to)
    }
    function Nn(e, t, n, r) {
        if (e.cm&&!e.cm.curOp)
            return Mt(e.cm, Nn)(e, t, n, r);
        if (t.to.line < e.first) {
            Tn(e, t.text.length-1 - (t.to.line - t.from.line));
            return 
        }
        if (t.from.line > e.lastLine())
            return;
        if (t.from.line < e.first) {
            var i = t.text.length-1 - (e.first - t.from.line);
            Tn(e, i), t = {
                from: Ln(e.first, 0),
                to: Ln(t.to.line + i, t.to.ch),
                text: [es(t.text)],
                origin: t.origin
            }
        }
        var s = e.lastLine();
        t.to.line > s && (t = {
            from: t.from,
            to: Ln(s, hi(e, s).text.length),
            text: [t.text[0]],
            origin: t.origin
        }), t.removed = pi(e, t.from, t.to), n || (n = bn(e, t, null)), e.cm ? Cn(e.cm, t, r, n) : ri(e, t, r, n)
    }
    function Cn(e, t, n, r) {
        var i = e.doc, s = e.display, o = t.from, u = t.to, a=!1, f = o.line;
        e.options.lineWrapping || (f = mi(_r(i, hi(i, o.line))), i.iter(f, u.line + 1, function(e) {
            if (e == s.maxLine)
                return a=!0, !0
        })), !On(i.sel.head, t.from)&&!On(t.to, i.sel.head) && (e.curOp.cursorActivity=!0), ri(i, t, n, r, k(e)), e.options.lineWrapping || (i.iter(f, o.line + t.text.length, function(e) {
            var t = D(i, e);
            t > s.maxLineLength && (s.maxLine = e, s.maxLineLength = t, s.maxLineChanged=!0, a=!1)
        }), a && (e.curOp.updateMaxLine=!0)), i.frontier = Math.min(i.frontier, o.line), tt(e, 400);
        var l = t.text.length - (u.line - o.line)-1;
        Pt(e, o.line, u.line + 1, l);
        if (Vi(e, "change")) {
            var c = {
                from: o,
                to: u,
                text: t.text,
                removed: t.removed,
                origin: t.origin
            };
            if (e.curOp.textChanged) {
                for (var h = e.curOp.textChanged; h.next; h = h.next);
                h.next = c
            } else 
                e.curOp.textChanged = c
        }
    }
    function kn(e, t, n, r, i) {
        r || (r = n);
        if (On(r, n)) {
            var s = r;
            r = n, n = s
        }
        typeof t == "string" && (t = Ss(t)), En(e, {
            from: n,
            to: r,
            text: t,
            origin: i
        }, null)
    }
    function Ln(e, t) {
        if (!(this instanceof Ln))
            return new Ln(e, t);
        this.line = e, this.ch = t
    }
    function An(e, t) {
        return e.line == t.line && e.ch == t.ch
    }
    function On(e, t) {
        return e.line < t.line || e.line == t.line && e.ch < t.ch
    }
    function Mn(e) {
        return Ln(e.line, e.ch)
    }
    function _n(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size-1))
    }
    function Dn(e, t) {
        if (t.line < e.first)
            return Ln(e.first, 0);
        var n = e.first + e.size-1;
        return t.line > n ? Ln(n, hi(e, n).text.length) : Pn(t, hi(e, t.line).text.length)
    }
    function Pn(e, t) {
        var n = e.ch;
        return n == null || n > t ? Ln(e.line, t) : n < 0 ? Ln(e.line, 0) : e
    }
    function Hn(e, t) {
        return t >= e.first && t < e.first + e.size
    }
    function Bn(e, t, n, r) {
        if (e.sel.shift || e.sel.extend) {
            var i = e.sel.anchor;
            if (n) {
                var s = On(t, i);
                s != On(n, i) ? (i = t, t = n) : s != On(t, n) && (t = n)
            }
            Fn(e, i, t, r)
        } else 
            Fn(e, t, n || t, r);
        e.cm && (e.cm.curOp.userSelChange=!0)
    }
    function jn(e, t, n) {
        var r = {
            anchor: t,
            head: n
        };
        return qi(e, "beforeSelectionChange", e, r), e.cm && qi(e.cm, "beforeSelectionChange", e.cm, r), r.anchor = Dn(e, r.anchor), r.head = Dn(e, r.head), r
    }
    function Fn(e, t, n, r, i) {
        if (!i && Vi(e, "beforeSelectionChange") || e.cm && Vi(e.cm, "beforeSelectionChange")) {
            var s = jn(e, t, n);
            n = s.head, t = s.anchor
        }
        var o = e.sel;
        o.goalColumn = null, r == null && (r = On(n, o.head)?-1 : 1);
        if (i ||!An(t, o.anchor))
            t = qn(e, t, r, i != "push");
        if (i ||!An(n, o.head))
            n = qn(e, n, r, i != "push");
        if (An(o.anchor, t) && An(o.head, n))
            return;
        o.anchor = t, o.head = n;
        var u = On(n, t);
        o.from = u ? n : t, o.to = u ? t : n, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = e.cm.curOp.cursorActivity=!0), zi(e, "cursorActivity", e)
    }
    function In(e) {
        Fn(e.doc, e.doc.sel.from, e.doc.sel.to, null, "push")
    }
    function qn(e, t, n, r) {
        var i=!1, s = t, o = n || 1;
        e.cantEdit=!1;
        e: for (; ;) {
            var u = hi(e, s.line);
            if (u.markedSpans)
                for (var a = 0; a < u.markedSpans.length; ++a) {
                    var f = u.markedSpans[a], l = f.marker;
                    if ((f.from == null || (l.inclusiveLeft ? f.from <= s.ch : f.from < s.ch)) && (f.to == null || (l.inclusiveRight ? f.to >= s.ch : f.to > s.ch))) {
                        if (r) {
                            qi(l, "beforeCursorEnter");
                            if (l.explicitlyCleared) {
                                if (!u.markedSpans)
                                    break;
                                    --a;
                                    continue
                            }
                        }
                        if (!l.atomic)
                            continue;
                            var c = l.find()[o < 0 ? "from": "to"];
                            if (An(c, s)) {
                                c.ch += o, c.ch < 0 ? c.line > e.first ? c = Dn(e, Ln(c.line-1)) : c = null : c.ch > u.text.length && (c.line < e.first + e.size-1 ? c = Ln(c.line + 1, 0) : c = null);
                                if (!c) {
                                    if (i)
                                        return r ? (e.cantEdit=!0, Ln(e.first, 0)) : qn(e, t, n, !0);
                                        i=!0, c = t, o =- o
                                }
                            }
                            s = c;
                            continue e
                    }
                }
            return s
        }
    }
    function Rn(e) {
        var t = Un(e, e.doc.sel.head, null, e.options.cursorScrollMargin);
        if (!e.state.focused)
            return;
        var n = e.display, r = vs(n.sizer), i = null;
        t.top + r.top < 0 ? i=!0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i=!1);
        if (i != null&&!p) {
            var s = n.cursor.style.display == "none";
            s && (n.cursor.style.display = "", n.cursor.style.left = t.left + "px", n.cursor.style.top = t.top - n.viewOffset + "px"), n.cursor.scrollIntoView(i), s && (n.cursor.style.display = "none")
        }
    }
    function Un(e, t, n, r) {
        r == null && (r = 0);
        for (; ;) {
            var i=!1, s = Et(e, t), o=!n || n == t ? s : Et(e, n), u = Wn(e, Math.min(s.left, o.left), Math.min(s.top, o.top) - r, Math.max(s.left, o.left), Math.max(s.bottom, o.bottom) + r), a = e.doc.scrollTop, f = e.doc.scrollLeft;
            u.scrollTop != null && (Zt(e, u.scrollTop), Math.abs(e.doc.scrollTop - a) > 1 && (i=!0)), u.scrollLeft != null && (en(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - f) > 1 && (i=!0));
            if (!i)
                return s
        }
    }
    function zn(e, t, n, r, i) {
        var s = Wn(e, t, n, r, i);
        s.scrollTop != null && Zt(e, s.scrollTop), s.scrollLeft != null && en(e, s.scrollLeft)
    }
    function Wn(e, t, n, r, i) {
        var s = e.display, o = Ct(e.display);
        n < 0 && (n = 0);
        var u = s.scroller.clientHeight - Ji, a = s.scroller.scrollTop, f = {}, l = e.doc.height + ot(s), c = n < o, h = i > l - o;
        if (n < a)
            f.scrollTop = c ? 0 : n;
        else if (i > a + u) {
            var p = Math.min(n, (h ? l : i) - u);
            p != a && (f.scrollTop = p)
        }
        var d = s.scroller.clientWidth - Ji, v = s.scroller.scrollLeft;
        t += s.gutters.offsetWidth, r += s.gutters.offsetWidth;
        var m = s.gutters.offsetWidth, g = t < m + 10;
        return t < v + m || g ? (g && (t = 0), f.scrollLeft = Math.max(0, t-10 - m)) : r > d + v-3 && (f.scrollLeft = r + 10 - d), f
    }
    function Xn(e, t, n) {
        e.curOp.updateScrollPos = {
            scrollLeft: t == null ? e.doc.scrollLeft: t,
            scrollTop: n == null ? e.doc.scrollTop: n
        }
    }
    function Vn(e, t, n) {
        var r = e.curOp.updateScrollPos || (e.curOp.updateScrollPos = {
            scrollLeft: e.doc.scrollLeft,
            scrollTop: e.doc.scrollTop
        }), i = e.display.scroller;
        r.scrollTop = Math.max(0, Math.min(i.scrollHeight - i.clientHeight, r.scrollTop + n)), r.scrollLeft = Math.max(0, Math.min(i.scrollWidth - i.clientWidth, r.scrollLeft + t))
    }
    function $n(e, t, n, r) {
        var i = e.doc;
        n == null && (n = "add");
        if (n == "smart")
            if (!e.doc.mode.indent)
                n = "prev";
            else 
                var s = it(e, t);
        var o = e.options.tabSize, u = hi(i, t), a = Gi(u.text, null, o), f = u.text.match(/^\s*/)[0], l;
        if (n == "smart") {
            l = e.doc.mode.indent(s, u.text.slice(f.length), u.text);
            if (l == Ki) {
                if (!r)
                    return;
                n = "prev"
            }
        }
        n == "prev" ? t > i.first ? l = Gi(hi(i, t-1).text, null, o) : l = 0 : n == "add" ? l = a + e.options.indentUnit : n == "subtract" ? l = a - e.options.indentUnit : typeof n == "number" && (l = a + n), l = Math.max(0, l);
        var c = "", h = 0;
        if (e.options.indentWithTabs)
            for (var p = Math.floor(l / o); p; --p)
                h += o, c += "	";
        h < l && (c += Zi(l - h)), c != f ? kn(e.doc, c, Ln(t, 0), Ln(t, f.length), "+input") : i.sel.head.line == t && i.sel.head.ch < f.length && Fn(i, Ln(t, f.length), Ln(t, f.length), 1), u.stateAfter = null
    }
    function Jn(e, t, n) {
        var r = t, i = t, s = e.doc;
        return typeof t == "number" ? i = hi(s, _n(s, t)) : r = mi(t), r == null ? null : n(i, r) ? (Pt(e, r, r + 1), i) : null
    }
    function Kn(e, t, n, r, i) {
        function l() {
            var t = s + n;
            return t < e.first || t >= e.first + e.size ? f=!1 : (s = t, a = hi(e, t))
        }
        function c(e) {
            var t = (i ? js : Fs)(a, o, n, !0);
            if (t == null) {
                if (!!e ||!l())
                    return f=!1;
                i ? o = (n < 0 ? Os : As)(a) : o = n < 0 ? a.text.length : 0
            } else 
                o = t;
            return !0
        }
        var s = t.line, o = t.ch, u = n, a = hi(e, s), f=!0;
        if (r == "char")
            c();
        else if (r == "column")
            c(!0);
        else if (r == "word" || r == "group") {
            var h = null, p = r == "group";
            for (var d=!0; ; d=!1) {
                if (n < 0&&!c(!d))
                    break;
                    var v = a.text.charAt(o) || "\n", m = as(v) ? "w": p ? /\s/.test(v) ? null: "p": null;
                    if (h && h != m) {
                        n < 0 && (n = 1, c());
                        break
                    }
                    m && (h = m);
                    if (n > 0&&!c(!d))
                        break
            }
        }
        var g = qn(e, Ln(s, o), u, !0);
        return f || (g.hitSide=!0), g
    }
    function Qn(e, t, n, r) {
        var i = e.doc, s = t.left, o;
        if (r == "page") {
            var u = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
            o = t.top + n * (u - (n < 0 ? 1.5 : .5) * Ct(e.display))
        } else 
            r == "line" && (o = n > 0 ? t.bottom + 3 : t.top-3);
        for (; ;) {
            var a = xt(e, s, o);
            if (!a.outside)
                break;
            if (n < 0 ? o <= 0 : o >= i.height) {
                a.hitSide=!0;
                break
            }
            o += n * 5
        }
        return a
    }
    function Gn(e, t) {
        var n = t.ch, r = t.ch;
        if (e) {
            (t.xRel < 0 || r == e.length) && n?--n:
            ++r;
            var i = e.charAt(n), s = as(i) ? as: /\s/.test(i) ? function(e) {
                return /\s/.test(e)
            }
            : function(e) {
                return !/\s/.test(e)&&!as(e)
            };
            while (n > 0 && s(e.charAt(n-1)))--n;
            while (r < e.length && s(e.charAt(r)))++r
        }
        return {
            from: Ln(t.line, n),
            to: Ln(t.line, r)
        }
    }
    function Yn(e, t) {
        Bn(e.doc, Ln(t, 0), Dn(e.doc, Ln(t + 1, 0)))
    }
    function tr(e, t, n, r) {
        x.defaults[e] = t, n && (Zn[e] = r ? function(e, t, r) {
            r != nr && n(e, t, r)
        } : n)
    }
    function ar(e, t) {
        if (t===!0)
            return t;
        if (e.copyState)
            return e.copyState(t);
        var n = {};
        for (var r in t) {
            var i = t[r];
            i instanceof Array && (i = i.concat([])), n[r] = i
        }
        return n
    }
    function fr(e, t, n) {
        return e.startState ? e.startState(t, n) : !0
    }
    function hr(e) {
        return typeof e == "string" ? cr[e] : e
    }
    function pr(e, t, n) {
        function r(t) {
            t = hr(t);
            var i = t[e];
            if (i===!1)
                return "stop";
            if (i != null && n(i))
                return !0;
            if (t.nofallthrough)
                return "stop";
            var s = t.fallthrough;
            if (s == null)
                return !1;
            if (Object.prototype.toString.call(s) != "[object Array]")
                return r(s);
            for (var o = 0, u = s.length; o < u; ++o) {
                var a = r(s[o]);
                if (a)
                    return a
            }
            return !1
        }
        for (var i = 0; i < t.length; ++i) {
            var s = r(t[i]);
            if (s)
                return s != "stop"
        }
    }
    function dr(e) {
        var t = Ns[e.keyCode];
        return t == "Ctrl" || t == "Alt" || t == "Shift" || t == "Mod"
    }
    function vr(e, t) {
        if (a && e.keyCode == 34 && e["char"])
            return !1;
        var n = Ns[e.keyCode];
        if (n == null || e.altGraphKey)
            return !1;
        e.altKey && (n = "Alt-" + n);
        if (b ? e.metaKey : e.ctrlKey)
            n = "Ctrl-" + n;
        if (b ? e.ctrlKey : e.metaKey)
            n = "Cmd-" + n;
        return !t && e.shiftKey && (n = "Shift-" + n), n
    }
    function mr(e, t) {
        this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0
    }
    function gr(e, t) {
        this.lines = [], this.type = t, this.doc = e
    }
    function yr(e, t, n, r, i) {
        if (r && r.shared)
            return wr(e, t, n, r, i);
        if (e.cm&&!e.cm.curOp)
            return Mt(e.cm, yr)(e, t, n, r, i);
        var s = new gr(e, i);
        if (On(n, t) || An(t, n) && i == "range" && (!r.inclusiveLeft ||!r.inclusiveRight))
            return s;
        r && is(r, s), s.replacedWith && (s.collapsed=!0, s.replacedWith = cs("span", [s.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || (s.replacedWith.ignoreEvents=!0)), s.collapsed && (S=!0), s.addToHistory && xi(e, {
            from: t,
            to: n,
            origin: "markText"
        }, {
            head: e.sel.head,
            anchor: e.sel.anchor
        }, NaN);
        var o = t.line, u = 0, a, f, l = e.cm, c;
        e.iter(o, n.line + 1, function(r) {
            l && s.collapsed&&!l.options.lineWrapping && _r(e, r) == l.display.maxLine && (c=!0);
            var i = {
                from: null,
                to: null,
                marker: s
            };
            u += r.text.length, o == t.line && (i.from = t.ch, u -= t.ch), o == n.line && (i.to = n.ch, u -= r.text.length - n.ch), s.collapsed && (o == n.line && (f = Ar(r, n.ch)), o == t.line ? a = Ar(r, t.ch) : vi(r, 0)), xr(r, i), ++o
        }), s.collapsed && e.iter(t.line, n.line + 1, function(t) {
            Dr(e, t) && vi(t, 0)
        }), s.clearOnEnter && Fi(s, "beforeCursorEnter", function() {
            s.clear()
        }), s.readOnly && (E=!0, (e.history.done.length || e.history.undone.length) && e.clearHistory());
        if (s.collapsed) {
            if (a != f)
                throw new Error("Inserting collapsed marker overlapping an existing one");
            s.size = u, s.atomic=!0
        }
        return l && (c && (l.curOp.updateMaxLine=!0), (s.className || s.title || s.startStyle || s.endStyle || s.collapsed) && Pt(l, t.line, n.line + 1), s.atomic && In(l)), s
    }
    function br(e, t) {
        this.markers = e, this.primary = t;
        for (var n = 0, r = this; n < e.length; ++n)
            e[n].parent = this, Fi(e[n], "clear", function() {
            r.clear()
        })
    }
    function wr(e, t, n, r, i) {
        r = is(r), r.shared=!1;
        var s = [yr(e, t, n, r, i)], o = s[0], u = r.replacedWith;
        return li(e, function(e) {
            u && (r.replacedWith = u.cloneNode(!0)), s.push(yr(e, Dn(e, t), Dn(e, n), r, i));
            for (var a = 0; a < e.linked.length; ++a)
                if (e.linked[a].isParent)
                    return;
            o = es(s)
        }), new br(s, o)
    }
    function Er(e, t) {
        if (e)
            for (var n = 0; n < e.length; ++n) {
                var r = e[n];
                if (r.marker == t)
                    return r
            }
    }
    function Sr(e, t) {
        for (var n, r = 0; r < e.length; ++r)
            e[r] != t && (n || (n = [])).push(e[r]);
        return n
    }
    function xr(e, t) {
        e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e)
    }
    function Tr(e, t, n) {
        if (e)
            for (var r = 0, i; r < e.length; ++r) {
                var s = e[r], o = s.marker, u = s.from == null || (o.inclusiveLeft ? s.from <= t : s.from < t);
                if (u || (o.inclusiveLeft && o.inclusiveRight || o.type == "bookmark") && s.from == t && (!n ||!s.marker.insertLeft)) {
                    var a = s.to == null || (o.inclusiveRight ? s.to >= t : s.to > t);
                    (i || (i = [])).push({
                        from: s.from,
                        to: a ? null: s.to,
                        marker: o
                    })
                }
            }
        return i
    }
    function Nr(e, t, n) {
        if (e)
            for (var r = 0, i; r < e.length; ++r) {
                var s = e[r], o = s.marker, u = s.to == null || (o.inclusiveRight ? s.to >= t : s.to > t);
                if (u || o.type == "bookmark" && s.from == t && (!n || s.marker.insertLeft)) {
                    var a = s.from == null || (o.inclusiveLeft ? s.from <= t : s.from < t);
                    (i || (i = [])).push({
                        from: a ? null: s.from - t,
                        to: s.to == null ? null: s.to - t,
                        marker: o
                    })
                }
            }
        return i
    }
    function Cr(e, t) {
        var n = Hn(e, t.from.line) && hi(e, t.from.line).markedSpans, r = Hn(e, t.to.line) && hi(e, t.to.line).markedSpans;
        if (!n&&!r)
            return null;
        var i = t.from.ch, s = t.to.ch, o = An(t.from, t.to), u = Tr(n, i, o), a = Nr(r, s, o), f = t.text.length == 1, l = es(t.text).length + (f ? i : 0);
        if (u)
            for (var c = 0; c < u.length; ++c) {
                var h = u[c];
                if (h.to == null) {
                    var p = Er(a, h.marker);
                    p ? f && (h.to = p.to == null ? null : p.to + l) : h.to = i
                }
            }
        if (a)
            for (var c = 0; c < a.length; ++c) {
                var h = a[c];
                h.to != null && (h.to += l);
                if (h.from == null) {
                    var p = Er(u, h.marker);
                    p || (h.from = l, f && (u || (u = [])).push(h))
                } else 
                    h.from += l, f && (u || (u = [])).push(h)
            }
        if (f && u) {
            for (var c = 0; c < u.length; ++c)
                u[c].from != null && u[c].from == u[c].to && u[c].marker.type != "bookmark" && u.splice(c--, 1);
            u.length || (u = null)
        }
        var d = [u];
        if (!f) {
            var v = t.text.length-2, m;
            if (v > 0 && u)
                for (var c = 0; c < u.length; ++c)
                    u[c].to == null && (m || (m = [])).push({
                        from: null,
                        to: null,
                        marker: u[c].marker
                    });
            for (var c = 0; c < v; ++c)
                d.push(m);
            d.push(a)
        }
        return d
    }
    function kr(e, t) {
        var n = Ni(e, t), r = Cr(e, t);
        if (!n)
            return r;
        if (!r)
            return n;
        for (var i = 0; i < n.length; ++i) {
            var s = n[i], o = r[i];
            if (s && o)
                e: for (var u = 0; u < o.length; ++u) {
                var a = o[u];
                for (var f = 0; f < s.length; ++f)
                    if (s[f].marker == a.marker)
                        continue e;
                        s.push(a)
                    } else 
                        o && (n[i] = o)
        }
        return n
    }
    function Lr(e, t, n) {
        var r = null;
        e.iter(t.line, n.line + 1, function(e) {
            if (e.markedSpans)
                for (var t = 0; t < e.markedSpans.length; ++t) {
                    var n = e.markedSpans[t].marker;
                    n.readOnly && (!r || ns(r, n)==-1) && (r || (r = [])).push(n)
                }
        });
        if (!r)
            return null;
        var i = [{
            from: t,
            to: n
        }
        ];
        for (var s = 0; s < r.length; ++s) {
            var o = r[s], u = o.find();
            for (var a = 0; a < i.length; ++a) {
                var f = i[a];
                if (On(f.to, u.from) || On(u.to, f.from))
                    continue;
                var l = [a, 1];
                (On(f.from, u.from) ||!o.inclusiveLeft && An(f.from, u.from)) && l.push({
                    from: f.from,
                    to: u.from
                }), (On(u.to, f.to) ||!o.inclusiveRight && An(f.to, u.to)) && l.push({
                    from: u.to,
                    to: f.to
                }), i.splice.apply(i, l), a += l.length-1
            }
        }
        return i
    }
    function Ar(e, t) {
        var n = S && e.markedSpans, r;
        if (n)
            for (var i, s = 0; s < n.length; ++s) {
                i = n[s];
                if (!i.marker.collapsed)
                    continue;
                    (i.from == null || i.from < t) && (i.to == null || i.to > t) && (!r || r.width < i.marker.width) && (r = i.marker)
            }
        return r
    }
    function Or(e) {
        return Ar(e, -1)
    }
    function Mr(e) {
        return Ar(e, e.text.length + 1)
    }
    function _r(e, t) {
        var n;
        while (n = Or(t))
            t = hi(e, n.find().from.line);
        return t
    }
    function Dr(e, t) {
        var n = S && t.markedSpans;
        if (n)
            for (var r, i = 0; i < n.length; ++i) {
                r = n[i];
                if (!r.marker.collapsed)
                    continue;
                    if (r.from == null)
                        return !0;
                        if (r.marker.replacedWith)
                            continue;
                            if (r.from == 0 && r.marker.inclusiveLeft && Pr(e, t, r))
                                return !0
            }
    }
    function Pr(e, t, n) {
        if (n.to == null) {
            var r = n.marker.find().to, i = hi(e, r.line);
            return Pr(e, i, Er(i.markedSpans, n.marker))
        }
        if (n.marker.inclusiveRight && n.to == t.text.length)
            return !0;
        for (var s, o = 0; o < t.markedSpans.length; ++o) {
            s = t.markedSpans[o];
            if (s.marker.collapsed&&!s.marker.replacedWith && s.from == n.to && (s.marker.inclusiveLeft || n.marker.inclusiveRight) && Pr(e, t, s))
                return !0
        }
    }
    function Hr(e) {
        var t = e.markedSpans;
        if (!t)
            return;
        for (var n = 0; n < t.length; ++n)
            t[n].marker.detachLine(e);
        e.markedSpans = null
    }
    function Br(e, t) {
        if (!t)
            return;
        for (var n = 0; n < t.length; ++n)
            t[n].marker.attachLine(e);
        e.markedSpans = t
    }
    function Fr(e) {
        return function() {
            var t=!this.cm.curOp;
            t && At(this.cm);
            try {
                var n = e.apply(this, arguments)
            } finally {
                t && Ot(this.cm)
            }
            return n
        }
    }
    function Ir(e) {
        return e.height != null ? e.height : ((!e.node.parentNode || e.node.parentNode.nodeType != 1) && ps(e.cm.display.measure, cs("div", [e.node], null, "position: relative")), e.height = e.node.offsetHeight)
    }
    function qr(e, t, n, r) {
        var i = new jr(e, n, r);
        return i.noHScroll && (e.display.alignWidgets=!0), Jn(e, t, function(t) {
            var n = t.widgets || (t.widgets = []);
            i.insertAt == null ? n.push(i) : n.splice(Math.min(n.length-1, Math.max(0, i.insertAt)), 0, i), i.line = t;
            if (!Dr(e.doc, t) || i.showIfHidden) {
                var r = yi(e, t) < e.doc.scrollTop;
                vi(t, t.height + Ir(i)), r && Vn(e, 0, i.height)
            }
            return !0
        }), i
    }
    function Ur(e, t, n, r) {
        e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), e.order != null && (e.order = null), Hr(e), Br(e, n);
        var i = r ? r(e): 1;
        i != e.height && vi(e, i)
    }
    function zr(e) {
        e.parent = null, Hr(e)
    }
    function Wr(e, t, n, r, i, s) {
        var o = n.flattenSpans;
        o == null && (o = e.options.flattenSpans);
        var u = 0, a = null, f = new mr(t, e.options.tabSize), l;
        t == "" && n.blankLine && n.blankLine(r);
        while (!f.eol()) {
            f.pos > e.options.maxHighlightLength ? (o=!1, s && $r(e, t, r, f.pos), f.pos = t.length, l = null) : l = n.token(f, r);
            if (!o || a != l)
                u < f.start && i(f.start, a), u = f.start, a = l;
            f.start = f.pos
        }
        while (u < f.pos) {
            var c = Math.min(f.pos, u + 5e4);
            i(c, a), u = c
        }
    }
    function Xr(e, t, n, r) {
        var i = [e.state.modeGen];
        Wr(e, t.text, e.doc.mode, n, function(e, t) {
            i.push(e, t)
        }, r);
        for (var s = 0; s < e.state.overlays.length; ++s) {
            var o = e.state.overlays[s], u = 1, a = 0;
            Wr(e, t.text, o.mode, !0, function(e, t) {
                var n = u;
                while (a < e) {
                    var r = i[u];
                    r > e && i.splice(u, 1, e, i[u + 1], r), u += 2, a = Math.min(e, r)
                }
                if (!t)
                    return;
                if (o.opaque)
                    i.splice(n, u - n, e, t), u = n + 2;
                else 
                    for (; n < u; n += 2) {
                        var s = i[n + 1];
                        i[n + 1] = s ? s + " " + t : t
                    }
            })
        }
        return i
    }
    function Vr(e, t) {
        if (!t.styles || t.styles[0] != e.state.modeGen)
            t.styles = Xr(e, t, t.stateAfter = it(e, mi(t)));
        return t.styles
    }
    function $r(e, t, n, r) {
        var i = e.doc.mode, s = new mr(t, e.options.tabSize);
        s.start = s.pos = r || 0, t == "" && i.blankLine && i.blankLine(n);
        while (!s.eol() && s.pos <= e.options.maxHighlightLength)
            i.token(s, n), s.start = s.pos
    }
    function Kr(e, t) {
        if (!e)
            return null;
        for (; ;) {
            var n = e.match(/(?:^|\s)line-(background-)?(\S+)/);
            if (!n)
                break;
            e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
            var r = n[1] ? "bgClass": "textClass";
            t[r] == null ? t[r] = n[2] : (new RegExp("(?:^|s)" + n[2] + "(?:$|s)")).test(t[r]) || (t[r] += " " + n[2])
        }
        return Jr[e] || (Jr[e] = "cm-" + e.replace(/ +/g, " cm-"))
    }
    function Qr(e, n, r, o) {
        var u, a = n, f=!0;
        while (u = Or(a))
            a = hi(e.doc, u.find().from.line);
        var l = {
            pre: cs("pre"),
            col: 0,
            pos: 0,
            measure: null,
            measuredSomething: !1,
            cm: e,
            copyWidgets: o
        };
        do {
            a.text && (f=!1), l.measure = a == n && r, l.pos = 0, l.addToken = l.measure ? Zr : Yr, (t || s) && e.getOption("lineWrapping") && (l.addToken = ei(l.addToken));
            var c = ni(a, l, Vr(e, a));
            r && a == n&&!l.measuredSomething && (r[0] = l.pre.appendChild(Es(e.display.measure)), l.measuredSomething=!0), c && (a = hi(e.doc, c.to.line))
        }
        while (c);
        r&&!l.measuredSomething&&!r[0] && (r[0] = l.pre.appendChild(f ? cs("span", " ") : Es(e.display.measure))), !l.pre.firstChild&&!Dr(e.doc, n) && l.pre.appendChild(document.createTextNode(" "));
        var h;
        if (r && (t || i) && (h = bi(a))) {
            var p = h.length-1;
            h[p].from == h[p].to&&--p;
            var d = h[p], v = h[p-1];
            if (d.from + 1 == d.to && v && d.level < v.level) {
                var m = r[l.pos-1];
                m && m.parentNode.insertBefore(m.measureRight = Es(e.display.measure), m.nextSibling)
            }
        }
        var g = l.textClass ? l.textClass + " " + (n.textClass || ""): n.textClass;
        return g && (l.pre.className = g), qi(e, "renderLine", e, n, l.pre), l
    }
    function Gr(e) {
        var t = cs("span", "•", "cm-invalidchar");
        return t.title = "\\u" + e.charCodeAt(0).toString(16), t
    }
    function Yr(e, t, n, r, i, s) {
        if (!t)
            return;
        var o = e.cm.options.specialChars;
        if (!o.test(t)) {
            e.col += t.length;
            var u = document.createTextNode(t)
        } else {
            var u = document.createDocumentFragment(), a = 0;
            for (; ;) {
                o.lastIndex = a;
                var f = o.exec(t), l = f ? f.index - a: t.length - a;
                l && (u.appendChild(document.createTextNode(t.slice(a, a + l))), e.col += l);
                if (!f)
                    break;
                a += l + 1;
                if (f[0] == "	") {
                    var c = e.cm.options.tabSize, h = c - e.col%c;
                    u.appendChild(cs("span", Zi(h), "cm-tab")), e.col += h
                } else {
                    var p = e.cm.options.specialCharPlaceholder(f[0]);
                    u.appendChild(p), e.col += 1
                }
            }
        }
        if (n || r || i || e.measure) {
            var d = n || "";
            r && (d += r), i && (d += i);
            var p = cs("span", [u], d);
            return s && (p.title = s), e.pre.appendChild(p)
        }
        e.pre.appendChild(u)
    }
    function Zr(e, n, r, i, s) {
        var o = e.cm.options.lineWrapping;
        for (var u = 0; u < n.length; ++u) {
            var a = n.charAt(u), f = u == 0;
            a >= "���" && a < "���" && u < n.length-1 ? (a = n.slice(u, u + 2), ++u) : u && o && gs(n, u) && e.pre.appendChild(cs("wbr"));
            var l = e.measure[e.pos], c = e.measure[e.pos] = Yr(e, a, r, f && i, u == n.length-1 && s);
            l && (c.leftSide = l.leftSide || l), t && o && a == " " && u&&!/\s/.test(n.charAt(u-1)) && u < n.length-1&&!/\s/.test(n.charAt(u + 1)) && (c.style.whiteSpace = "normal"), e.pos += a.length
        }
        n.length && (e.measuredSomething=!0)
    }
    function ei(e) {
        function t(e) {
            var t = " ";
            for (var n = 0; n < e.length-2; ++n)
                t += n%2 ? " " : " ";
            return t += " ", t
        }
        return function(n, r, i, s, o, u) {
            return e(n, r.replace(/ {3,}/g, t), i, s, o, u)
        }
    }
    function ti(e, t, n, r) {
        var i=!r && n.replacedWith;
        if (i) {
            e.copyWidgets && (i = i.cloneNode(!0)), e.pre.appendChild(i);
            if (e.measure) {
                if (t)
                    e.measure[e.pos] = i;
                else {
                    var s = Es(e.cm.display.measure);
                    if (n.type == "bookmark"&&!n.insertLeft)
                        e.measure[e.pos] = e.pre.appendChild(s);
                    else {
                        if (e.measure[e.pos])
                            return;
                        e.measure[e.pos] = e.pre.insertBefore(s, i)
                    }
                }
                e.measuredSomething=!0
            }
        }
        e.pos += t
    }
    function ni(e, t, n) {
        var r = e.markedSpans, i = e.text, s = 0;
        if (!r) {
            for (var o = 1; o < n.length; o += 2)
                t.addToken(t, i.slice(s, s = n[o]), Kr(n[o + 1], t));
            return 
        }
        var u = i.length, a = 0, o = 1, f = "", l, c = 0, h, p, d, v, m;
        for (; ;) {
            if (c == a) {
                h = p = d = v = "", m = null, c = Infinity;
                var g = [];
                for (var y = 0; y < r.length; ++y) {
                    var b = r[y], w = b.marker;
                    b.from <= a && (b.to == null || b.to > a) ? (b.to != null && c > b.to && (c = b.to, p = ""), w.className && (h += " " + w.className), w.startStyle && b.from == a && (d += " " + w.startStyle), w.endStyle && b.to == c && (p += " " + w.endStyle), w.title&&!v && (v = w.title), w.collapsed && (!m || m.marker.size < w.size) && (m = b)) : b.from > a && c > b.from && (c = b.from), w.type == "bookmark" && b.from == a && w.replacedWith && g.push(w)
                }
                if (m && (m.from || 0) == a) {
                    ti(t, (m.to == null ? u : m.to) - a, m.marker, m.from == null);
                    if (m.to == null)
                        return m.marker.find()
                    }
                if (!m && g.length)
                    for (var y = 0; y < g.length; ++y)
                        ti(t, 0, g[y])
                    }
            if (a >= u)
                break;
            var E = Math.min(u, c);
            for (; ;) {
                if (f) {
                    var S = a + f.length;
                    if (!m) {
                        var x = S > E ? f.slice(0, E - a): f;
                        t.addToken(t, x, l ? l + h : h, d, a + x.length == c ? p : "", v)
                    }
                    if (S >= E) {
                        f = f.slice(E - a), a = E;
                        break
                    }
                    a = S, d = ""
                }
                f = i.slice(s, s = n[o++]), l = Kr(n[o++], t)
            }
        }
    }
    function ri(e, t, n, r, i) {
        function s(e) {
            return n ? n[e] : null
        }
        function o(e, n, r) {
            Ur(e, n, r, i), zi(e, "change", e, t)
        }
        var u = t.from, a = t.to, f = t.text, l = hi(e, u.line), c = hi(e, a.line), h = es(f), p = s(f.length-1), d = a.line - u.line;
        if (u.ch == 0 && a.ch == 0 && h == "" && (!e.cm || e.cm.options.wholeLineUpdateBefore)) {
            for (var v = 0, m = f.length-1, g = []; v < m; ++v)
                g.push(new Rr(f[v], s(v), i));
            o(c, c.text, p), d && e.remove(u.line, d), g.length && e.insert(u.line, g)
        } else if (l == c
        )
            if (f.length == 1)
                o(l, l.text.slice(0, u.ch) + h + l.text.slice(a.ch), p);
            else {
                for (var g = [], v = 1, m = f.length-1; v < m; ++v)
                    g.push(new Rr(f[v], s(v), i));
                    g.push(new Rr(h + l.text.slice(a.ch), p, i)), o(l, l.text.slice(0, u.ch) + f[0], s(0)), e.insert(u.line + 1, g)
            } else if (f.length == 1)
                o(l, l.text.slice(0, u.ch) + f[0] + c.text.slice(a.ch), s(0)), e.remove(u.line + 1, d);
        else {
            o(l, l.text.slice(0, u.ch) + f[0], s(0)), o(c, h + c.text.slice(a.ch), p);
            for (var v = 1, m = f.length-1, g = []; v < m; ++v)
                g.push(new Rr(f[v], s(v), i));
            d > 1 && e.remove(u.line + 1, d-1), e.insert(u.line + 1, g)
        }
        zi(e, "change", e, t), Fn(e, r.anchor, r.head, null, !0)
    }
    function ii(e) {
        this.lines = e, this.parent = null;
        for (var t = 0, n = e.length, r = 0; t < n; ++t)
            e[t].parent = this, r += e[t].height;
        this.height = r
    }
    function si(e) {
        this.children = e;
        var t = 0, n = 0;
        for (var r = 0, i = e.length; r < i; ++r) {
            var s = e[r];
            t += s.chunkSize(), n += s.height, s.parent = this
        }
        this.size = t, this.height = n, this.parent = null
    }
    function li(e, t, n) {
        function r(e, i, s) {
            if (e.linked)
                for (var o = 0; o < e.linked.length; ++o) {
                    var u = e.linked[o];
                    if (u.doc == i)
                        continue;
                        var a = s && u.sharedHist;
                        if (n&&!a)
                            continue;
                            t(u.doc, a), r(u.doc, e, a)
                }
        }
        r(e, null, !0)
    }
    function ci(e, t) {
        if (t.cm)
            throw new Error("This document is already in use.");
        e.doc = t, t.cm = e, L(e), N(e), e.options.lineWrapping || P(e), e.options.mode = t.modeOption, Pt(e)
    }
    function hi(e, t) {
        t -= e.first;
        while (!e.lines)
            for (var n = 0; ; ++n) {
                var r = e.children[n], i = r.chunkSize();
                if (t < i) {
                    e = r;
                    break
                }
                t -= i
            }
        return e.lines[t]
    }
    function pi(e, t, n) {
        var r = [], i = t.line;
        return e.iter(t.line, n.line + 1, function(e) {
            var s = e.text;
            i == n.line && (s = s.slice(0, n.ch)), i == t.line && (s = s.slice(t.ch)), r.push(s), ++i
        }), r
    }
    function di(e, t, n) {
        var r = [];
        return e.iter(t, n, function(e) {
            r.push(e.text)
        }), r
    }
    function vi(e, t) {
        var n = t - e.height;
        for (var r = e; r; r = r.parent)
            r.height += n
    }
    function mi(e) {
        if (e.parent == null)
            return null;
        var t = e.parent, n = ns(t.lines, e);
        for (var r = t.parent; r; t = r, r = r.parent)
            for (var i = 0; ; ++i) {
                if (r.children[i] == t)
                    break;
                    n += r.children[i].chunkSize()
            }
        return n + t.first
    }
    function gi(e, t) {
        var n = e.first;
        e: do {
            for (var r = 0, i = e.children.length; r < i; ++r) {
                var s = e.children[r], o = s.height;
                if (t < o) {
                    e = s;
                    continue e
                }
                t -= o, n += s.chunkSize()
            }
            return n
        }
        while (!e.lines);
        for (var r = 0, i = e.lines.length; r < i; ++r) {
            var u = e.lines[r], a = u.height;
            if (t < a)
                break;
            t -= a
        }
        return n + r
    }
    function yi(e, t) {
        t = _r(e.doc, t);
        var n = 0, r = t.parent;
        for (var i = 0; i < r.lines.length; ++i) {
            var s = r.lines[i];
            if (s == t)
                break;
            n += s.height
        }
        for (var o = r.parent; o; r = o, o = r.parent)
            for (var i = 0; i < o.children.length; ++i) {
                var u = o.children[i];
                if (u == r)
                    break;
                    n += u.height
            }
        return n
    }
    function bi(e) {
        var t = e.order;
        return t == null && (t = e.order = Is(e.text)), t
    }
    function wi(e) {
        return {
            done: [],
            undone: [],
            undoDepth: Infinity,
            lastTime: 0,
            lastOp: null,
            lastOrigin: null,
            generation: e || 1,
            maxGeneration: e || 1
        }
    }
    function Ei(e, t, n, r) {
        var i = t["spans_" + e.id], s = 0;
        e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(n) {
            n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[s] = n.markedSpans), ++s
        })
    }
    function Si(e, t) {
        var n = {
            line: t.from.line,
            ch: t.from.ch
        }, r = {
            from: n,
            to: gn(t),
            text: pi(e, t.from, t.to)
        };
        return Ei(e, r, t.from.line, t.to.line + 1), li(e, function(e) {
            Ei(e, r, t.from.line, t.to.line + 1)
        }, !0), r
    }
    function xi(e, t, n, r) {
        var i = e.history;
        i.undone.length = 0;
        var s =+ (new Date), o = es(i.done);
        if (o && (i.lastOp == r || i.lastOrigin == t.origin && t.origin && (t.origin.charAt(0) == "+" && e.cm && i.lastTime > s - e.cm.options.historyEventDelay || t.origin.charAt(0) == "*"))) {
            var u = es(o.changes);
            An(t.from, t.to) && An(t.from, u.to) ? u.to = gn(t) : o.changes.push(Si(e, t)), o.anchorAfter = n.anchor, o.headAfter = n.head
        } else {
            o = {
                changes: [Si(e, t)],
                generation: i.generation,
                anchorBefore: e.sel.anchor,
                headBefore: e.sel.head,
                anchorAfter: n.anchor,
                headAfter: n.head
            }, i.done.push(o), i.generation=++i.maxGeneration;
            while (i.done.length > i.undoDepth)
                i.done.shift()
        }
        i.lastTime = s, i.lastOp = r, i.lastOrigin = t.origin
    }
    function Ti(e) {
        if (!e)
            return null;
        for (var t = 0, n; t < e.length; ++t)
            e[t].marker.explicitlyCleared ? n || (n = e.slice(0, t)) : n && n.push(e[t]);
        return n ? n.length ? n : null : e
    }
    function Ni(e, t) {
        var n = t["spans_" + e.id];
        if (!n)
            return null;
        for (var r = 0, i = []; r < t.text.length; ++r)
            i.push(Ti(n[r]));
        return i
    }
    function Ci(e, t) {
        for (var n = 0, r = []; n < e.length; ++n) {
            var i = e[n], s = i.changes, o = [];
            r.push({
                changes: o,
                anchorBefore: i.anchorBefore,
                headBefore: i.headBefore,
                anchorAfter: i.anchorAfter,
                headAfter: i.headAfter
            });
            for (var u = 0; u < s.length; ++u) {
                var a = s[u], f;
                o.push({
                    from: a.from,
                    to: a.to,
                    text: a.text
                });
                if (t)
                    for (var l in a)(f = l.match(/^spans_(\d+)$/)
                        ) && ns(t, Number(f[1]))>-1 && (es(o)[l] = a[l], delete a[l])
                    }
        }
        return r
    }
    function ki(e, t, n, r) {
        n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0)
    }
    function Li(e, t, n, r) {
        for (var i = 0; i < e.length; ++i) {
            var s = e[i], o=!0;
            for (var u = 0; u < s.changes.length; ++u) {
                var a = s.changes[u];
                s.copied || (a.from = Mn(a.from), a.to = Mn(a.to));
                if (n < a.from.line)
                    a.from.line += r, a.to.line += r;
                else if (t <= a.to.line) {
                    o=!1;
                    break
                }
            }
            s.copied || (s.anchorBefore = Mn(s.anchorBefore), s.headBefore = Mn(s.headBefore), s.anchorAfter = Mn(s.anchorAfter), s.readAfter = Mn(s.headAfter), s.copied=!0), o ? (ki(s.anchorBefore), ki(s.headBefore), ki(s.anchorAfter), ki(s.headAfter)) : (e.splice(0, i + 1), i = 0)
        }
    }
    function Ai(e, t) {
        var n = t.from.line, r = t.to.line, i = t.text.length - (r - n)-1;
        Li(e.done, n, r, i), Li(e.undone, n, r, i)
    }
    function Oi() {
        Hi(this)
    }
    function Mi(e) {
        return e.stop || (e.stop = Oi), e
    }
    function _i(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue=!1
    }
    function Di(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble=!0
    }
    function Pi(e) {
        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == 0
    }
    function Hi(e) {
        _i(e), Di(e)
    }
    function Bi(e) {
        return e.target || e.srcElement
    }
    function ji(e) {
        var t = e.which;
        return t == null && (e.button & 1 ? t = 1 : e.button & 2 ? t = 3 : e.button & 4 && (t = 2)), m && e.ctrlKey && t == 1 && (t = 3), t
    }
    function Fi(e, t, n) {
        if (e.addEventListener)
            e.addEventListener(t, n, !1);
        else if (e.attachEvent)
            e.attachEvent("on" + t, n);
        else {
            var r = e._handlers || (e._handlers = {}), i = r[t] || (r[t] = []);
            i.push(n)
        }
    }
    function Ii(e, t, n) {
        if (e.removeEventListener)
            e.removeEventListener(t, n, !1);
        else if (e.detachEvent)
            e.detachEvent("on" + t, n);
        else {
            var r = e._handlers && e._handlers[t];
            if (!r)
                return;
                for (var i = 0; i < r.length; ++i)
                    if (r[i] == n) {
                        r.splice(i, 1);
                        break
                    }
        }
    }
    function qi(e, t) {
        var n = e._handlers && e._handlers[t];
        if (!n)
            return;
        var r = Array.prototype.slice.call(arguments, 2);
        for (var i = 0; i < n.length; ++i)
            n[i].apply(null, r)
    }
    function zi(e, t) {
        function i(e) {
            return function() {
                e.apply(null, r)
            }
        }
        var n = e._handlers && e._handlers[t];
        if (!n)
            return;
        var r = Array.prototype.slice.call(arguments, 2);
        Ri || (++Ui, Ri = [], setTimeout(Xi, 0));
        for (var s = 0; s < n.length; ++s)
            Ri.push(i(n[s]))
    }
    function Wi(e, t, n) {
        return qi(e, n || t.type, e, t), Pi(t) || t.codemirrorIgnore
    }
    function Xi() {
        --Ui;
        var e = Ri;
        Ri = null;
        for (var t = 0; t < e.length; ++t)
            e[t]()
    }
    function Vi(e, t) {
        var n = e._handlers && e._handlers[t];
        return n && n.length > 0
    }
    function $i(e) {
        e.prototype.on = function(e, t) {
            Fi(this, e, t)
        }, e.prototype.off = function(e, t) {
            Ii(this, e, t)
        }
    }
    function Qi() {
        this.id = null
    }
    function Gi(e, t, n, r, i) {
        t == null && (t = e.search(/[^\s\u00a0]/), t==-1 && (t = e.length));
        for (var s = r || 0, o = i || 0; s < t; ++s)
            e.charAt(s) == "	" ? o += n - o%n : ++o;
        return o
    }
    function Zi(e) {
        while (Yi.length <= e)
            Yi.push(es(Yi) + " ");
        return Yi[e]
    }
    function es(e) {
        return e[e.length-1]
    }
    function ts(e) {
        if (d)
            e.selectionStart = 0, e.selectionEnd = e.value.length;
        else 
            try {
                e.select()
        } catch (t) {}
    }
    function ns(e, t) {
        if (e.indexOf)
            return e.indexOf(t);
        for (var n = 0, r = e.length; n < r; ++n)
            if (e[n] == t)
                return n;
        return -1
    }
    function rs(e, t) {
        function n() {}
        n.prototype = e;
        var r = new n;
        return t && is(t, r), r
    }
    function is(e, t) {
        t || (t = {});
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }
    function ss(e) {
        for (var t = [], n = 0; n < e; ++n)
            t.push(undefined);
        return t
    }
    function os(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function() {
            return e.apply(null, t)
        }
    }
    function as(e) {
        return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || us.test(e))
    }
    function fs(e) {
        for (var t in e)
            if (e.hasOwnProperty(t) && e[t])
                return !1;
        return !0
    }
    function cs(e, t, n, r) {
        var i = document.createElement(e);
        n && (i.className = n), r && (i.style.cssText = r);
        if (typeof t == "string")
            ds(i, t);
        else if (t)
            for (var s = 0; s < t.length; ++s)
                i.appendChild(t[s]);
        return i
    }
    function hs(e) {
        for (var t = e.childNodes.length; t > 0; --t)
            e.removeChild(e.firstChild);
        return e
    }
    function ps(e, t) {
        return hs(e).appendChild(t)
    }
    function ds(e, t) {
        r ? (e.innerHTML = "", e.appendChild(document.createTextNode(t))) : e.textContent = t
    }
    function vs(e) {
        return e.getBoundingClientRect()
    }
    function gs() {
        return !1
    }
    function bs(e) {
        if (ys != null)
            return ys;
        var t = cs("div", null, null, "width: 50px; height: 50px; overflow-x: scroll");
        return ps(e, t), t.offsetWidth && (ys = t.offsetHeight - t.clientHeight), ys || 0
    }
    function Es(e) {
        if (ws == null) {
            var t = cs("span", "​");
            ps(e, cs("span", [t, document.createTextNode("x")])), e.firstChild.offsetHeight != 0 && (ws = t.offsetWidth <= 1 && t.offsetHeight > 2&&!n)
        }
        return ws ? cs("span", "​") : cs("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px")
    }
    function Cs(e, t, n, r) {
        if (!e)
            return r(t, n, "ltr");
        var i=!1;
        for (var s = 0; s < e.length; ++s) {
            var o = e[s];
            if (o.from < n && o.to > t || t == n && o.to == t)
                r(Math.max(o.from, t), Math.min(o.to, n), o.level == 1 ? "rtl" : "ltr"), i=!0
        }
        i || r(t, n, "ltr")
    }
    function ks(e) {
        return e.level%2 ? e.to : e.from
    }
    function Ls(e) {
        return e.level%2 ? e.from : e.to
    }
    function As(e) {
        var t = bi(e);
        return t ? ks(t[0]) : 0
    }
    function Os(e) {
        var t = bi(e);
        return t ? Ls(es(t)) : e.text.length
    }
    function Ms(e, t) {
        var n = hi(e.doc, t), r = _r(e.doc, n);
        r != n && (t = mi(r));
        var i = bi(r), s = i ? i[0].level%2 ? Os(r): As(r): 0;
        return Ln(t, s)
    }
    function _s(e, t) {
        var n, r;
        while (n = Mr(r = hi(e.doc, t)))
            t = n.find().to.line;
        var i = bi(r), s = i ? i[0].level%2 ? As(r): Os(r): r.text.length;
        return Ln(t, s)
    }
    function Ds(e, t, n) {
        var r = e[0].level;
        return t == r?!0 : n == r?!1 : t < n
    }
    function Hs(e, t) {
        for (var n = 0, r; n < e.length; ++n) {
            var i = e[n];
            if (i.from < t && i.to > t)
                return Ps = null, n;
            if (i.from == t || i.to == t) {
                if (r != null)
                    return Ds(e, i.level, e[r].level) ? (Ps = r, n) : (Ps = n, r);
                r = n
            }
        }
        return Ps = null, r
    }
    function Bs(e, t, n, r) {
        if (!r)
            return t + n;
        do 
            t += n;
        while (t > 0 && ls.test(e.text.charAt(t)));
        return t
    }
    function js(e, t, n, r) {
        var i = bi(e);
        if (!i)
            return Fs(e, t, n, r);
        var s = Hs(i, t), o = i[s], u = Bs(e, t, o.level%2?-n : n, r);
        for (; ;) {
            if (u > o.from && u < o.to)
                return u;
            if (u == o.from || u == o.to)
                return Hs(i, u) == s ? u : (o = i[s += n], n > 0 == o.level%2 ? o.to : o.from);
            o = i[s += n];
            if (!o)
                return null;
            n > 0 == o.level%2 ? u = Bs(e, o.to, -1, r) : u = Bs(e, o.from, 1, r)
        }
    }
    function Fs(e, t, n, r) {
        var i = t + n;
        if (r)
            while (i > 0 && ls.test(e.text.charAt(i)))
                i += n;
        return i < 0 || i > e.text.length ? null : i
    }
    var e = /gecko\/\d/i.test(navigator.userAgent), t = /MSIE \d/.test(navigator.userAgent), n = t && (document.documentMode == null || document.documentMode < 8), r = t && (document.documentMode == null || document.documentMode < 9), i = /Trident\/([7-9]|\d{2,})\./.test(navigator.userAgent), s = /WebKit\//.test(navigator.userAgent), o = s && /Qt\/\d+\.\d+/.test(navigator.userAgent), u = /Chrome\//.test(navigator.userAgent), a = /Opera\//.test(navigator.userAgent), f = /Apple Computer/.test(navigator.vendor), l = /KHTML\//.test(navigator.userAgent), c = /Mac OS X 1\d\D([7-9]|\d\d)\D/.test(navigator.userAgent), h = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent), p = /PhantomJS/.test(navigator.userAgent), d = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent), v = d || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent), m = d || /Mac/.test(navigator.platform), g = /win/i.test(navigator.platform), y = a && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
    y && (y = Number(y[1])), y && y >= 15 && (a=!1, s=!0);
    var b = m && (o || a && (y == null || y < 12.11)), w = e || t&&!r, E=!1, S=!1, Nt, Lt = 0, Wt, Xt, Qt = 0, tn = 0, nn = null;
    t ? nn =- 0.53 : e ? nn = 15 : u ? nn =- 0.7 : f && (nn =- 1 / 3);
    var un, ln = null, vn, gn = x.changeEnd = function(e) {
        return e.text ? Ln(e.from.line + e.text.length-1, es(e.text).length + (e.text.length == 1 ? e.from.ch : 0)) : e.to
    };
    x.Pos = Ln, x.prototype = {
        constructor: x,
        focus: function() {
            window.focus(), It(this), Bt(this)
        },
        setOption: function(e, t) {
            var n = this.options, r = n[e];
            if (n[e] == t && e != "mode")
                return;
            n[e] = t, Zn.hasOwnProperty(e) && Mt(this, Zn[e])(this, t, r)
        },
        getOption: function(e) {
            return this.options[e]
        },
        getDoc: function() {
            return this.doc
        },
        addKeyMap: function(e, t) {
            this.state.keyMaps[t ? "push": "unshift"](e)
        },
        removeKeyMap: function(e) {
            var t = this.state.keyMaps;
            for (var n = 0; n < t.length; ++n)
                if (t[n] == e || typeof t[n] != "string" && t[n].name == e)
                    return t.splice(n, 1), !0
        },
        addOverlay: Mt(null, function(e, t) {
            var n = e.token ? e: x.getMode(this.options, e);
            if (n.startState)
                throw new Error("Overlays may not be stateful.");
            this.state.overlays.push({
                mode: n,
                modeSpec: e,
                opaque: t && t.opaque
            }), this.state.modeGen++, Pt(this)
        }),
        removeOverlay: Mt(null, function(e) {
            var t = this.state.overlays;
            for (var n = 0; n < t.length; ++n) {
                var r = t[n].modeSpec;
                if (r == e || typeof e == "string" && r.name == e) {
                    t.splice(n, 1), this.state.modeGen++, Pt(this);
                    return 
                }
            }
        }),
        indentLine: Mt(null, function(e, t, n) {
            typeof t != "string" && typeof t != "number" && (t == null ? t = this.options.smartIndent ? "smart" : "prev" : t = t ? "add" : "subtract"), Hn(this.doc, e) && $n(this, e, t, n)
        }),
        indentSelection: Mt(null, function(e) {
            var t = this.doc.sel;
            if (An(t.from, t.to))
                return $n(this, t.from.line, e);
            var n = t.to.line - (t.to.ch ? 0 : 1);
            for (var r = t.from.line; r <= n; ++r)
                $n(this, r, e)
        }),
        getTokenAt: function(e, t) {
            var n = this.doc;
            e = Dn(n, e);
            var r = it(this, e.line, t), i = this.doc.mode, s = hi(n, e.line), o = new mr(s.text, this.options.tabSize);
            while (o.pos < e.ch&&!o.eol()) {
                o.start = o.pos;
                var u = i.token(o, r)
            }
            return {
                start: o.start,
                end: o.pos,
                string: o.current(),
                className: u || null,
                type: u || null,
                state: r
            }
        },
        getTokenTypeAt: function(e) {
            e = Dn(this.doc, e);
            var t = Vr(this, hi(this.doc, e.line)), n = 0, r = (t.length-1) / 2, i = e.ch;
            if (i == 0)
                return t[2];
            for (; ;) {
                var s = n + r>>1;
                if ((s ? t[s * 2-1] : 0) >= i)
                    r = s;
                else {
                    if (!(t[s * 2 + 1] < i))
                        return t[s * 2 + 2];
                    n = s + 1
                }
            }
        },
        getModeAt: function(e) {
            var t = this.doc.mode;
            return t.innerMode ? x.innerMode(t, this.getTokenAt(e).state).mode : t
        },
        getHelper: function(e, t) {
            if (!ur.hasOwnProperty(t))
                return;
            var n = ur[t], r = this.getModeAt(e);
            return r[t] && n[r[t]] || r.helperType && n[r.helperType] || n[r.name]
        },
        getStateAfter: function(e, t) {
            var n = this.doc;
            return e = _n(n, e == null ? n.first + n.size-1 : e), it(this, e + 1, t)
        },
        cursorCoords: function(e, t) {
            var n, r = this.doc.sel;
            return e == null ? n = r.head : typeof e == "object" ? n = Dn(this.doc, e) : n = e ? r.from : r.to, Et(this, n, t || "page")
        },
        charCoords: function(e, t) {
            return wt(this, Dn(this.doc, e), t || "page")
        },
        coordsChar: function(e, t) {
            return e = bt(this, e, t || "page"), xt(this, e.left, e.top)
        },
        lineAtHeight: function(e, t) {
            return e = bt(this, {
                top: e,
                left: 0
            }, t || "page").top, gi(this.doc, e + this.display.viewOffset)
        },
        heightAtLine: function(e, t) {
            var n=!1, r = this.doc.first + this.doc.size-1;
            e < this.doc.first ? e = this.doc.first : e > r && (e = r, n=!0);
            var i = hi(this.doc, e);
            return yt(this, hi(this.doc, e), {
                top: 0,
                left: 0
            }, t || "page").top + (n ? i.height : 0)
        },
        defaultTextHeight: function() {
            return Ct(this.display)
        },
        defaultCharWidth: function() {
            return kt(this.display)
        },
        setGutterMarker: Mt(null, function(e, t, n) {
            return Jn(this, e, function(e) {
                var r = e.gutterMarkers || (e.gutterMarkers = {});
                return r[t] = n, !n && fs(r) && (e.gutterMarkers = null), !0
            })
        }),
        clearGutter: Mt(null, function(e) {
            var t = this, n = t.doc, r = n.first;
            n.iter(function(n) {
                n.gutterMarkers && n.gutterMarkers[e] && (n.gutterMarkers[e] = null, Pt(t, r, r + 1), fs(n.gutterMarkers) && (n.gutterMarkers = null)), ++r
            })
        }),
        addLineClass: Mt(null, function(e, t, n) {
            return Jn(this, e, function(e) {
                var r = t == "text" ? "textClass": t == "background" ? "bgClass": "wrapClass";
                if (!e[r])
                    e[r] = n;
                else {
                    if ((new RegExp("(?:^|\\s)" + n + "(?:$|\\s)")).test(e[r]))
                        return !1;
                    e[r] += " " + n
                }
                return !0
            })
        }),
        removeLineClass: Mt(null, function(e, t, n) {
            return Jn(this, e, function(e) {
                var r = t == "text" ? "textClass": t == "background" ? "bgClass": "wrapClass", i = e[r];
                if (!i)
                    return !1;
                if (n == null)
                    e[r] = null;
                else {
                    var s = i.match(new RegExp("(?:^|\\s+)" + n + "(?:$|\\s+)"));
                    if (!s)
                        return !1;
                    var o = s.index + s[0].length;
                    e[r] = i.slice(0, s.index) + (!s.index || o == i.length ? "" : " ") + i.slice(o) || null
                }
                return !0
            })
        }),
        addLineWidget: Mt(null, function(e, t, n) {
            return qr(this, e, t, n)
        }),
        removeLineWidget: function(e) {
            e.clear()
        },
        lineInfo: function(e) {
            if (typeof e == "number") {
                if (!Hn(this.doc, e))
                    return null;
                var t = e;
                e = hi(this.doc, e);
                if (!e)
                    return null
            } else {
                var t = mi(e);
                if (t == null)
                    return null
            }
            return {
                line: t,
                handle: e,
                text: e.text,
                gutterMarkers: e.gutterMarkers,
                textClass: e.textClass,
                bgClass: e.bgClass,
                wrapClass: e.wrapClass,
                widgets: e.widgets
            }
        },
        getViewport: function() {
            return {
                from: this.display.showingFrom,
                to: this.display.showingTo
            }
        },
        addWidget: function(e, t, n, r, i) {
            var s = this.display;
            e = Et(this, Dn(this.doc, e));
            var o = e.bottom, u = e.left;
            t.style.position = "absolute", s.sizer.appendChild(t);
            if (r == "over")
                o = e.top;
            else if (r == "above" || r == "near") {
                var a = Math.max(s.wrapper.clientHeight, this.doc.height), f = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
                (r == "above" || e.bottom + t.offsetHeight > a) && e.top > t.offsetHeight ? o = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= a && (o = e.bottom), u + t.offsetWidth > f && (u = f - t.offsetWidth)
            }
            t.style.top = o + "px", t.style.left = t.style.right = "", i == "right" ? (u = s.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : (i == "left" ? u = 0 : i == "middle" && (u = (s.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = u + "px"), n && zn(this, u, o, u + t.offsetWidth, o + t.offsetHeight)
        },
        triggerOnKeyDown: Mt(null, cn),
        execCommand: function(e) {
            return lr[e](this)
        },
        findPosH: function(e, t, n, r) {
            var i = 1;
            t < 0 && (i =- 1, t =- t);
            for (var s = 0, o = Dn(this.doc, e); s < t; ++s) {
                o = Kn(this.doc, o, i, n, r);
                if (o.hitSide)
                    break
            }
            return o
        },
        moveH: Mt(null, function(e, t) {
            var n = this.doc.sel, r;
            n.shift || n.extend || An(n.from, n.to) ? r = Kn(this.doc, n.head, e, t, this.options.rtlMoveVisually) : r = e < 0 ? n.from : n.to, Bn(this.doc, r, r, e)
        }),
        deleteH: Mt(null, function(e, t) {
            var n = this.doc.sel;
            An(n.from, n.to) ? kn(this.doc, "", n.from, Kn(this.doc, n.head, e, t, !1), "+delete") : kn(this.doc, "", n.from, n.to, "+delete"), this.curOp.userSelChange=!0
        }),
        findPosV: function(e, t, n, r) {
            var i = 1, s = r;
            t < 0 && (i =- 1, t =- t);
            for (var o = 0, u = Dn(this.doc, e); o < t; ++o) {
                var a = Et(this, u, "div");
                s == null ? s = a.left : a.left = s, u = Qn(this, a, i, n);
                if (u.hitSide)
                    break
            }
            return u
        },
        moveV: Mt(null, function(e, t) {
            var n = this.doc.sel, r = Et(this, n.head, "div");
            n.goalColumn != null && (r.left = n.goalColumn);
            var i = Qn(this, r, e, t);
            t == "page" && Vn(this, 0, wt(this, i, "div").top - r.top), Bn(this.doc, i, i, e), n.goalColumn = r.left
        }),
        toggleOverwrite: function(e) {
            if (e != null && e == this.state.overwrite)
                return;
            (this.state.overwrite=!this.state.overwrite) ? this.display.cursor.className += " CodeMirror-overwrite" : this.display.cursor.className = this.display.cursor.className.replace(" CodeMirror-overwrite", "")
        },
        hasFocus: function() {
            return this.state.focused
        },
        scrollTo: Mt(null, function(e, t) {
            Xn(this, e, t)
        }),
        getScrollInfo: function() {
            var e = this.display.scroller, t = Ji;
            return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height: e.scrollHeight - t,
                width: e.scrollWidth - t,
                clientHeight: e.clientHeight - t,
                clientWidth: e.clientWidth - t
            }
        },
        scrollIntoView: Mt(null, function(e, t) {
            e == null ? e = {
                from: this.doc.sel.head,
                to: null
            } : typeof e == "number" ? e = {
                from: Ln(e, 0),
                to: null
            } : e.from == null && (e = {
                from: e,
                to: null
            }), e.to || (e.to = e.from), t || (t = 0);
            var n = e;
            e.from.line != null && (this.curOp.scrollToPos = {
                from: e.from,
                to: e.to,
                margin: t
            }, n = {
                from : Et(this, e.from), to: Et(this, e.to)
            });
            var r = Wn(this,
            Math.min(n.from.left,
            n.to.left),
            Math.min(n.from.top,
            n.to.top) - t,
            Math.max(n.from.right,
            n.to.right),
            Math.max(n.from.bottom,
            n.to.bottom) + t);
            Xn(this,
            r.scrollLeft,
            r.scrollTop)
        }), setSize: Mt(null, function(e, t) {
            function n(e) {
                return typeof e == "number" || /^\d+$/.test(String(e)) ? e + "px" : e
            }
            e != null && (this.display.wrapper.style.width = n(e)), t != null && (this.display.wrapper.style.height = n(t)), this.options.lineWrapping && (this.display.measureLineCache.length = this.display.measureLineCachePos = 0), this.curOp.forceUpdate=!0
        }), operation: function(e) {
            return Dt(this, e)
        }, refresh: Mt(null, function() {
            var e = this.display.cachedTextHeight == null;
            vt(this), Xn(this, this.doc.scrollLeft, this.doc.scrollTop), Pt(this), e && L(this)
        }), swapDoc: Mt(null, function(e) {
            var t = this.doc;
            return t.cm = null, ci(this, e), vt(this), Ft(this, !0), Xn(this, e.scrollLeft, e.scrollTop), zi(this, "swapDoc", this, t), t
        }), getInputField: function() {
            return this.display.input
        }, getWrapperElement: function() {
            return this.display.wrapper
        }, getScrollerElement: function() {
            return this.display.scroller
        }, getGutterElement: function() {
            return this.display.gutters
        }
    }, $i(x);
    var Zn = x.optionHandlers = {}, er = x.defaults = {}, nr = x.Init = {
        toString: function() {
            return "CodeMirror.Init"
        }
    };
    tr("value", "", function(e, t) {
        e.setValue(t)
    }, !0), tr("mode", null, function(e, t) {
        e.doc.modeOption = t, N(e)
    }, !0), tr("indentUnit", 2, N, !0), tr("indentWithTabs", !1), tr("smartIndent", !0), tr("tabSize", 4, function(e) {
        N(e), vt(e), Pt(e)
    }, !0), tr("specialChars", /[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\ufeff]/g, function(e, t) {
        e.options.specialChars = new RegExp(t.source + (t.test("	") ? "" : "|	"), "g"), e.refresh()
    }, !0), tr("specialCharPlaceholder", Gr, function(e) {
        e.refresh()
    }, !0), tr("electricChars", !0), tr("rtlMoveVisually", !g), tr("wholeLineUpdateBefore", !0), tr("theme", "default", function(e) {
        O(e), M(e)
    }, !0), tr("keyMap", "default", A), tr("extraKeys", null), tr("onKeyEvent", null), tr("onDragEvent", null), tr("lineWrapping", !1, C, !0), tr("gutters", [], function(e) {
        H(e.options), M(e)
    }, !0), tr("fixedGutter", !0, function(e, t) {
        e.display.gutters.style.left = t ? R(e.display) + "px" : "0", e.refresh()
    }, !0), tr("coverGutterNextToScrollbar", !1, B, !0), tr("lineNumbers", !1, function(e) {
        H(e.options), M(e)
    }, !0), tr("firstLineNumber", 1, M, !0), tr("lineNumberFormatter", function(e) {
        return e
    }, M, !0), tr("showCursorWhenSelecting", !1, G, !0), tr("resetSelectionOnContextMenu", !0), tr("readOnly", !1, function(e, t) {
        t == "nocursor" ? (dn(e), e.display.input.blur(), e.display.disabled=!0) : (e.display.disabled=!1, t || Ft(e, !0))
    }), tr("dragDrop", !0), tr("cursorBlinkRate", 530), tr("cursorScrollMargin", 0), tr("cursorHeight", 1), tr("workTime", 100), tr("workDelay", 100), tr("flattenSpans", !0), tr("pollInterval", 100), tr("undoDepth", 40, function(e, t) {
        e.doc.history.undoDepth = t
    }), tr("historyEventDelay", 500), tr("viewportMargin", 10, function(e) {
        e.refresh()
    }, !0), tr("maxHighlightLength", 1e4, function(e) {
        N(e), e.refresh()
    }, !0), tr("crudeMeasuringFrom", 1e4), tr("moveInputWithCursor", !0, function(e, t) {
        t || (e.display.inputDiv.style.top = e.display.inputDiv.style.left = 0)
    }), tr("tabindex", null, function(e, t) {
        e.display.input.tabIndex = t || ""
    }), tr("autofocus", null);
    var rr = x.modes = {}, ir = x.mimeModes = {};
    x.defineMode = function(e, t) {
        !x.defaults.mode && e != "null" && (x.defaults.mode = e);
        if (arguments.length > 2) {
            t.dependencies = [];
            for (var n = 2; n < arguments.length; ++n)
                t.dependencies.push(arguments[n])
        }
        rr[e] = t
    }, x.defineMIME = function(e, t) {
        ir[e] = t
    }, x.resolveMode = function(e) {
        if (typeof e == "string" && ir.hasOwnProperty(e))
            e = ir[e];
        else if (e && typeof e.name == "string" && ir.hasOwnProperty(e.name)) {
            var t = ir[e.name];
            e = rs(t, e), e.name = t.name
        } else if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return x.resolveMode("application/xml");
        return typeof e == "string" ? {
            name: e
        } : e || {
            name: "null"
        }
    }, x.getMode = function(e, t) {
        var t = x.resolveMode(t), n = rr[t.name];
        if (!n)
            return x.getMode(e, "text/plain");
        var r = n(e, t);
        if (sr.hasOwnProperty(t.name)) {
            var i = sr[t.name];
            for (var s in i) {
                if (!i.hasOwnProperty(s))
                    continue;
                r.hasOwnProperty(s) && (r["_" + s] = r[s]), r[s] = i[s]
            }
        }
        return r.name = t.name, r
    }, x.defineMode("null", function() {
        return {
            token: function(e) {
                e.skipToEnd()
            }
        }
    }), x.defineMIME("text/plain", "null");
    var sr = x.modeExtensions = {};
    x.extendMode = function(e, t) {
        var n = sr.hasOwnProperty(e) ? sr[e]: sr[e] = {};
        is(t, n)
    }, x.defineExtension = function(e, t) {
        x.prototype[e] = t
    }, x.defineDocExtension = function(e, t) {
        ui.prototype[e] = t
    }, x.defineOption = tr;
    var or = [];
    x.defineInitHook = function(e) {
        or.push(e)
    };
    var ur = x.helpers = {};
    x.registerHelper = function(e, t, n) {
        ur.hasOwnProperty(e) || (ur[e] = x[e] = {}), ur[e][t] = n
    }, x.isWordChar = as, x.copyState = ar, x.startState = fr, x.innerMode = function(e, t) {
        while (e.innerMode) {
            var n = e.innerMode(t);
            if (!n || n.mode == e)
                break;
            t = n.state, e = n.mode
        }
        return n || {
            mode: e,
            state: t
        }
    };
    var lr = x.commands = {
        selectAll: function(e) {
            e.setSelection(Ln(e.firstLine(), 0), Ln(e.lastLine()))
        },
        killLine: function(e) {
            var t = e.getCursor(!0), n = e.getCursor(!1), r=!An(t, n);
            !r && e.getLine(t.line).length == t.ch ? e.replaceRange("", t, Ln(t.line + 1, 0), "+delete") : e.replaceRange("", t, r ? n : Ln(t.line), "+delete")
        },
        deleteLine: function(e) {
            var t = e.getCursor().line;
            e.replaceRange("", Ln(t, 0), Ln(t), "+delete")
        },
        delLineLeft: function(e) {
            var t = e.getCursor();
            e.replaceRange("", Ln(t.line, 0), t, "+delete")
        },
        undo: function(e) {
            e.undo()
        },
        redo: function(e) {
            e.redo()
        },
        goDocStart: function(e) {
            e.extendSelection(Ln(e.firstLine(), 0))
        },
        goDocEnd: function(e) {
            e.extendSelection(Ln(e.lastLine()))
        },
        goLineStart: function(e) {
            e.extendSelection(Ms(e, e.getCursor().line))
        },
        goLineStartSmart: function(e) {
            var t = e.getCursor(), n = Ms(e, t.line), r = e.getLineHandle(n.line), i = bi(r);
            if (!i || i[0].level == 0) {
                var s = Math.max(0, r.text.search(/\S/)), o = t.line == n.line && t.ch <= s && t.ch;
                e.extendSelection(Ln(n.line, o ? 0 : s))
            } else 
                e.extendSelection(n)
        },
        goLineEnd: function(e) {
            e.extendSelection(_s(e, e.getCursor().line))
        },
        goLineRight: function(e) {
            var t = e.charCoords(e.getCursor(), "div").top + 5;
            e.extendSelection(e.coordsChar({
                left: e.display.lineDiv.offsetWidth + 100,
                top: t
            }, "div"))
        },
        goLineLeft: function(e) {
            var t = e.charCoords(e.getCursor(), "div").top + 5;
            e.extendSelection(e.coordsChar({
                left: 0,
                top: t
            }, "div"))
        },
        goLineUp: function(e) {
            e.moveV(-1, "line")
        },
        goLineDown: function(e) {
            e.moveV(1, "line")
        },
        goPageUp: function(e) {
            e.moveV(-1, "page")
        },
        goPageDown: function(e) {
            e.moveV(1, "page")
        },
        goCharLeft: function(e) {
            e.moveH(-1, "char")
        },
        goCharRight: function(e) {
            e.moveH(1, "char")
        },
        goColumnLeft: function(e) {
            e.moveH(-1, "column")
        },
        goColumnRight: function(e) {
            e.moveH(1, "column")
        },
        goWordLeft: function(e) {
            e.moveH(-1, "word")
        },
        goGroupRight: function(e) {
            e.moveH(1, "group")
        },
        goGroupLeft: function(e) {
            e.moveH(-1, "group")
        },
        goWordRight: function(e) {
            e.moveH(1, "word")
        },
        delCharBefore: function(e) {
            e.deleteH(-1, "char")
        },
        delCharAfter: function(e) {
            e.deleteH(1, "char")
        },
        delWordBefore: function(e) {
            e.deleteH(-1, "word")
        },
        delWordAfter: function(e) {
            e.deleteH(1, "word")
        },
        delGroupBefore: function(e) {
            e.deleteH(-1, "group")
        },
        delGroupAfter: function(e) {
            e.deleteH(1, "group")
        },
        indentAuto: function(e) {
            e.indentSelection("smart")
        },
        indentMore: function(e) {
            e.indentSelection("add")
        },
        indentLess: function(e) {
            e.indentSelection("subtract")
        },
        insertTab: function(e) {
            e.replaceSelection("	", "end", "+input")
        },
        defaultTab: function(e) {
            e.somethingSelected() ? e.indentSelection("add") : e.replaceSelection("	", "end", "+input")
        },
        transposeChars: function(e) {
            var t = e.getCursor(), n = e.getLine(t.line);
            t.ch > 0 && t.ch < n.length-1 && e.replaceRange(n.charAt(t.ch) + n.charAt(t.ch-1), Ln(t.line, t.ch-1), Ln(t.line, t.ch + 1))
        },
        newlineAndIndent: function(e) {
            Mt(e, function() {
                e.replaceSelection("\n", "end", "+input"), e.indentLine(e.getCursor().line, null, !0)
            })()
        },
        toggleOverwrite: function(e) {
            e.toggleOverwrite()
        }
    }, cr = x.keyMap = {};
    cr.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite"
    }, cr.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Alt-Up": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Down": "goDocEnd",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        fallthrough: "basic"
    }, cr.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineStart",
        "Cmd-Right": "goLineEnd",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delLineLeft",
        fallthrough: ["basic", "emacsy"]
    }, cr["default"] = m ? cr.macDefault : cr.pcDefault, cr.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars"
    }, x.lookupKey = pr, x.isModifierKey = dr, x.keyName = vr, x.fromTextArea = function(e, t) {
        function i() {
            e.value = a.getValue()
        }
        t || (t = {}), t.value = e.value, !t.tabindex && e.tabindex && (t.tabindex = e.tabindex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder);
        if (t.autofocus == null) {
            var n = document.body;
            try {
                n = document.activeElement
            } catch (r) {}
            t.autofocus = n == e || e.getAttribute("autofocus") != null && n == document.body
        }
        if (e.form) {
            Fi(e.form, "submit", i);
            if (!t.leaveSubmitMethodAlone) {
                var s = e.form, o = s.submit;
                try {
                    var u = s.submit = function() {
                        i(), s.submit = o, s.submit(), s.submit = u
                    }
                } catch (r) {}
            }
        }
        e.style.display = "none";
        var a = x(function(t) {
            e.parentNode.insertBefore(t, e.nextSibling)
        }, t);
        return a.save = i, a.getTextArea = function() {
            return e
        }, a.toTextArea = function() {
            i(), e.parentNode.removeChild(a.getWrapperElement()), e.style.display = "", e.form && (Ii(e.form, "submit", i), typeof e.form.submit == "function" && (e.form.submit = o))
        }, a
    }, mr.prototype = {
        eol: function() {
            return this.pos >= this.string.length
        },
        sol: function() {
            return this.pos == 0
        },
        peek: function() {
            return this.string.charAt(this.pos) || undefined
        },
        next: function() {
            if (this.pos < this.string.length)
                return this.string.charAt(this.pos++)
        },
        eat: function(e) {
            var t = this.string.charAt(this.pos);
            if (typeof e == "string")
                var n = t == e;
            else 
                var n = t && (e.test ? e.test(t) : e(t));
            if (n)
                return ++this.pos, t
        },
        eatWhile: function(e) {
            var t = this.pos;
            while (this.eat(e));
            return this.pos > t
        },
        eatSpace: function() {
            var e = this.pos;
            while (/[\s\u00a0]/.test(this.string.charAt(this.pos)))++this.pos;
            return this.pos > e
        },
        skipToEnd: function() {
            this.pos = this.string.length
        },
        skipTo: function(e) {
            var t = this.string.indexOf(e, this.pos);
            if (t>-1)
                return this.pos = t, !0
        },
        backUp: function(e) {
            this.pos -= e
        },
        column: function() {
            return this.lastColumnPos < this.start && (this.lastColumnValue = Gi(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue
        },
        indentation: function() {
            return Gi(this.string, null, this.tabSize)
        },
        match: function(e, t, n) {
            if (typeof e != "string") {
                var s = this.string.slice(this.pos).match(e);
                return s && s.index > 0 ? null : (s && t!==!1 && (this.pos += s[0].length), s)
            }
            var r = function(e) {
                return n ? e.toLowerCase() : e
            }, i = this.string.substr(this.pos, e.length);
            if (r(i) == r(e))
                return t!==!1 && (this.pos += e.length), !0
        },
        current: function() {
            return this.string.slice(this.start, this.pos)
        }
    }, x.StringStream = mr, x.TextMarker = gr, $i(gr), gr.prototype.clear = function() {
        if (this.explicitlyCleared)
            return;
        var e = this.doc.cm, t = e&&!e.curOp;
        t && At(e);
        if (Vi(this, "clear")) {
            var n = this.find();
            n && zi(this, "clear", n.from, n.to)
        }
        var r = null, i = null;
        for (var s = 0; s < this.lines.length; ++s) {
            var o = this.lines[s], u = Er(o.markedSpans, this);
            u.to != null && (i = mi(o)), o.markedSpans = Sr(o.markedSpans, u), u.from != null ? r = mi(o) : this.collapsed&&!Dr(this.doc, o) && e && vi(o, Ct(e.display))
        }
        if (e && this.collapsed&&!e.options.lineWrapping)
            for (var s = 0; s < this.lines.length; ++s) {
                var a = _r(e.doc, this.lines[s]), f = D(e.doc, a);
                f > e.display.maxLineLength && (e.display.maxLine = a, e.display.maxLineLength = f, e.display.maxLineChanged=!0)
            }
        r != null && e && Pt(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared=!0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit=!1, e && In(e)), t && Ot(e)
    }, gr.prototype.find = function() {
        var e, t;
        for (var n = 0; n < this.lines.length; ++n) {
            var r = this.lines[n], i = Er(r.markedSpans, this);
            if (i.from != null || i.to != null) {
                var s = mi(r);
                i.from != null && (e = Ln(s, i.from)), i.to != null && (t = Ln(s, i.to))
            }
        }
        return this.type == "bookmark" ? e : e && {
            from: e,
            to: t
        }
    }, gr.prototype.changed = function() {
        var e = this.find(), t = this.doc.cm;
        if (!e ||!t)
            return;
        this.type != "bookmark" && (e = e.from);
        var n = hi(this.doc, e.line);
        lt(t, n);
        if (e.line >= t.display.showingFrom && e.line < t.display.showingTo) {
            for (var r = t.display.lineDiv.firstChild; r; r = r.nextSibling)
                if (r.lineObj == n) {
                    r.offsetHeight != n.height && vi(n, r.offsetHeight);
                    break
                }
            Dt(t, function() {
                t.curOp.selectionChanged = t.curOp.forceUpdate = t.curOp.updateMaxLine=!0
            })
        }
    }, gr.prototype.attachLine = function(e) {
        if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (!t.maybeHiddenMarkers || ns(t.maybeHiddenMarkers, this)==-1) && (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
        }
        this.lines.push(e)
    }, gr.prototype.detachLine = function(e) {
        this.lines.splice(ns(this.lines, e), 1);
        if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
        }
    }, x.SharedTextMarker = br, $i(br), br.prototype.clear = function() {
        if (this.explicitlyCleared)
            return;
        this.explicitlyCleared=!0;
        for (var e = 0; e < this.markers.length; ++e)
            this.markers[e].clear();
        zi(this, "clear")
    }, br.prototype.find = function() {
        return this.primary.find()
    };
    var jr = x.LineWidget = function(e, t, n) {
        if (n)
            for (var r in n)
                n.hasOwnProperty(r) && (this[r] = n[r]);
        this.cm = e, this.node = t
    };
    $i(jr), jr.prototype.clear = Fr(function() {
        var e = this.line.widgets, t = mi(this.line);
        if (t == null ||!e)
            return;
        for (var n = 0; n < e.length; ++n)
            e[n] == this && e.splice(n--, 1);
        e.length || (this.line.widgets = null);
        var r = yi(this.cm, this.line) < this.cm.doc.scrollTop;
        vi(this.line, Math.max(0, this.line.height - Ir(this))), r && Vn(this.cm, 0, - this.height), Pt(this.cm, t, t + 1)
    }), jr.prototype.changed = Fr(function() {
        var e = this.height;
        this.height = null;
        var t = Ir(this) - e;
        if (!t)
            return;
        vi(this.line, this.line.height + t);
        var n = mi(this.line);
        Pt(this.cm, n, n + 1)
    });
    var Rr = x.Line = function(e, t, n) {
        this.text = e, Br(this, t), this.height = n ? n(this) : 1
    };
    $i(Rr), Rr.prototype.lineNo = function() {
        return mi(this)
    };
    var Jr = {};
    ii.prototype = {
        chunkSize: function() {
            return this.lines.length
        },
        removeInner: function(e, t) {
            for (var n = e, r = e + t; n < r; ++n) {
                var i = this.lines[n];
                this.height -= i.height, zr(i), zi(i, "delete")
            }
            this.lines.splice(e, t)
        },
        collapse: function(e) {
            e.splice.apply(e, [e.length, 0].concat(this.lines))
        },
        insertInner: function(e, t, n) {
            this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
            for (var r = 0, i = t.length; r < i; ++r)
                t[r].parent = this
        },
        iterN: function(e, t, n) {
            for (var r = e + t; e < r; ++e)
                if (n(this.lines[e]))
                    return !0
        }
    }, si.prototype = {
        chunkSize: function() {
            return this.size
        },
        removeInner: function(e, t) {
            this.size -= t;
            for (var n = 0; n < this.children.length; ++n) {
                var r = this.children[n], i = r.chunkSize();
                if (e < i) {
                    var s = Math.min(t, i - e), o = r.height;
                    r.removeInner(e, s), this.height -= o - r.height, i == s && (this.children.splice(n--, 1), r.parent = null);
                    if ((t -= s) == 0)
                        break;
                    e = 0
                } else 
                    e -= i
            }
            if (this.size - t < 25) {
                var u = [];
                this.collapse(u), this.children = [new ii(u)], this.children[0].parent = this
            }
        },
        collapse: function(e) {
            for (var t = 0, n = this.children.length; t < n; ++t)
                this.children[t].collapse(e)
        },
        insertInner: function(e, t, n) {
            this.size += t.length, this.height += n;
            for (var r = 0, i = this.children.length; r < i; ++r) {
                var s = this.children[r], o = s.chunkSize();
                if (e <= o) {
                    s.insertInner(e, t, n);
                    if (s.lines && s.lines.length > 50) {
                        while (s.lines.length > 50) {
                            var u = s.lines.splice(s.lines.length-25, 25), a = new ii(u);
                            s.height -= a.height, this.children.splice(r + 1, 0, a), a.parent = this
                        }
                        this.maybeSpill()
                    }
                    break
                }
                e -= o
            }
        },
        maybeSpill: function() {
            if (this.children.length <= 10)
                return;
            var e = this;
            do {
                var t = e.children.splice(e.children.length-5, 5), n = new si(t);
                if (!e.parent) {
                    var r = new si(e.children);
                    r.parent = e, e.children = [r, n], e = r
                } else {
                    e.size -= n.size, e.height -= n.height;
                    var i = ns(e.parent.children, e);
                    e.parent.children.splice(i + 1, 0, n)
                }
                n.parent = e.parent
            }
            while (e.children.length > 10);
            e.parent.maybeSpill()
        },
        iterN: function(e, t, n) {
            for (var r = 0, i = this.children.length; r < i; ++r) {
                var s = this.children[r], o = s.chunkSize();
                if (e < o) {
                    var u = Math.min(t, o - e);
                    if (s.iterN(e, u, n))
                        return !0;
                    if ((t -= u) == 0)
                        break;
                    e = 0
                } else 
                    e -= o
            }
        }
    };
    var oi = 0, ui = x.Doc = function(e, t, n) {
        if (!(this instanceof ui))
            return new ui(e, t, n);
        n == null && (n = 0), si.call(this, [new ii([new Rr("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit=!1, this.history = wi(), this.cleanGeneration = 1, this.frontier = n;
        var r = Ln(n, 0);
        this.sel = {
            from: r,
            to: r,
            head: r,
            anchor: r,
            shift: !1,
            extend: !1,
            goalColumn: null
        }, this.id=++oi, this.modeOption = t, typeof e == "string" && (e = Ss(e)), ri(this, {
            from: r,
            to: r,
            text: e
        }, null, {
            head: r,
            anchor: r
        })
    };
    ui.prototype = rs(si.prototype, {
        constructor: ui,
        iter: function(e, t, n) {
            n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
        },
        insert: function(e, t) {
            var n = 0;
            for (var r = 0, i = t.length; r < i; ++r)
                n += t[r].height;
            this.insertInner(e - this.first, t, n)
        },
        remove: function(e, t) {
            this.removeInner(e - this.first, t)
        },
        getValue: function(e) {
            var t = di(this, this.first, this.first + this.size);
            return e===!1 ? t : t.join(e || "\n")
        },
        setValue: function(e) {
            var t = Ln(this.first, 0), n = this.first + this.size-1;
            En(this, {
                from: t,
                to: Ln(n, hi(this, n).text.length),
                text: Ss(e),
                origin: "setValue"
            }, {
                head: t,
                anchor: t
            }, !0)
        },
        replaceRange: function(e, t, n, r) {
            t = Dn(this, t), n = n ? Dn(this, n) : t, kn(this, e, t, n, r)
        },
        getRange: function(e, t, n) {
            var r = pi(this, Dn(this, e), Dn(this, t));
            return n===!1 ? r : r.join(n || "\n")
        },
        getLine: function(e) {
            var t = this.getLineHandle(e);
            return t && t.text
        },
        setLine: function(e, t) {
            Hn(this, e) && kn(this, t, Ln(e, 0), Dn(this, Ln(e)))
        },
        removeLine: function(e) {
            e ? kn(this, "", Dn(this, Ln(e-1)), Dn(this, Ln(e))) : kn(this, "", Ln(0, 0), Dn(this, Ln(1, 0)))
        },
        getLineHandle: function(e) {
            if (Hn(this, e))
                return hi(this, e)
        },
        getLineNumber: function(e) {
            return mi(e)
        },
        getLineHandleVisualStart: function(e) {
            return typeof e == "number" && (e = hi(this, e)), _r(this, e)
        },
        lineCount: function() {
            return this.size
        },
        firstLine: function() {
            return this.first
        },
        lastLine: function() {
            return this.first + this.size-1
        },
        clipPos: function(e) {
            return Dn(this, e)
        },
        getCursor: function(e) {
            var t = this.sel, n;
            return e == null || e == "head" ? n = t.head : e == "anchor" ? n = t.anchor : e == "end" || e===!1 ? n = t.to : n = t.from, Mn(n)
        },
        somethingSelected: function() {
            return !An(this.sel.head, this.sel.anchor)
        },
        setCursor: _t(function(e, t, n) {
            var r = Dn(this, typeof e == "number" ? Ln(e, t || 0) : e);
            n ? Bn(this, r) : Fn(this, r, r)
        }),
        setSelection: _t(function(e, t, n) {
            Fn(this, Dn(this, e), Dn(this, t || e), n)
        }),
        extendSelection: _t(function(e, t, n) {
            Bn(this, Dn(this, e), t && Dn(this, t), n)
        }),
        getSelection: function(e) {
            return this.getRange(this.sel.from, this.sel.to, e)
        },
        replaceSelection: function(e, t, n) {
            En(this, {
                from: this.sel.from,
                to: this.sel.to,
                text: Ss(e),
                origin: n
            }, t || "around")
        },
        undo: _t(function() {
            xn(this, "undo")
        }),
        redo: _t(function() {
            xn(this, "redo")
        }),
        setExtending: function(e) {
            this.sel.extend = e
        },
        historySize: function() {
            var e = this.history;
            return {
                undo: e.done.length,
                redo: e.undone.length
            }
        },
        clearHistory: function() {
            this.history = wi(this.history.maxGeneration)
        },
        markClean: function() {
            this.cleanGeneration = this.changeGeneration()
        },
        changeGeneration: function() {
            return this.history.lastOp = this.history.lastOrigin = null, this.history.generation
        },
        isClean: function(e) {
            return this.history.generation == (e || this.cleanGeneration)
        },
        getHistory: function() {
            return {
                done: Ci(this.history.done),
                undone: Ci(this.history.undone)
            }
        },
        setHistory: function(e) {
            var t = this.history = wi(this.history.maxGeneration);
            t.done = e.done.slice(0), t.undone = e.undone.slice(0)
        },
        markText: function(e, t, n) {
            return yr(this, Dn(this, e), Dn(this, t), n, "range")
        },
        setBookmark: function(e, t) {
            var n = {
                replacedWith: t && (t.nodeType == null ? t.widget : t),
                insertLeft: t && t.insertLeft
            };
            return e = Dn(this, e), yr(this, e, e, n, "bookmark")
        },
        findMarksAt: function(e) {
            e = Dn(this, e);
            var t = [], n = hi(this, e.line).markedSpans;
            if (n)
                for (var r = 0; r < n.length; ++r) {
                    var i = n[r];
                    (i.from == null || i.from <= e.ch) && (i.to == null || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                }
            return t
        },
        getAllMarks: function() {
            var e = [];
            return this.iter(function(t) {
                var n = t.markedSpans;
                if (n)
                    for (var r = 0; r < n.length; ++r)
                        n[r].from != null && e.push(n[r].marker)
            }), e
        },
        posFromIndex: function(e) {
            var t, n = this.first;
            return this.iter(function(r) {
                var i = r.text.length + 1;
                if (i > e)
                    return t = e, !0;
                e -= i, ++n
            }), Dn(this, Ln(n, t))
        },
        indexFromPos: function(e) {
            e = Dn(this, e);
            var t = e.ch;
            return e.line < this.first || e.ch < 0 ? 0 : (this.iter(this.first, e.line, function(e) {
                t += e.text.length + 1
            }), t)
        },
        copy: function(e) {
            var t = new ui(di(this, this.first, this.first + this.size), this.modeOption, this.first);
            return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = {
                from: this.sel.from,
                to: this.sel.to,
                head: this.sel.head,
                anchor: this.sel.anchor,
                shift: this.sel.shift,
                extend: !1,
                goalColumn: this.sel.goalColumn
            }, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
        },
        linkedDoc: function(e) {
            e || (e = {});
            var t = this.first, n = this.first + this.size;
            e.from != null && e.from > t && (t = e.from), e.to != null && e.to < n && (n = e.to);
            var r = new ui(di(this, t, n), e.mode || this.modeOption, t);
            return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
                doc: r,
                sharedHist: e.sharedHist
            }), r.linked = [{
                doc: this,
                isParent: !0,
                sharedHist: e.sharedHist
            }
            ], r
        },
        unlinkDoc: function(e) {
            e instanceof x && (e = e.doc);
            if (this.linked)
                for (var t = 0; t < this.linked.length; ++t) {
                    var n = this.linked[t];
                    if (n.doc != e)
                        continue;
                        this.linked.splice(t, 1), e.unlinkDoc(this);
                        break
                }
            if (e.history == this.history) {
                var r = [e.id];
                li(e, function(e) {
                    r.push(e.id)
                }, !0), e.history = wi(), e.history.done = Ci(this.history.done, r), e.history.undone = Ci(this.history.undone, r)
            }
        },
        iterLinkedDocs: function(e) {
            li(this, e)
        },
        getMode: function() {
            return this.mode
        },
        getEditor: function() {
            return this.cm
        }
    }), ui.prototype.eachLine = ui.prototype.iter;
    var ai = "iter insert remove copy getEditor".split(" ");
    for (var fi in ui.prototype)
        ui.prototype.hasOwnProperty(fi) && ns(ai, fi) < 0 && (x.prototype[fi] = function(e) {
            return function() {
                return e.apply(this.doc, arguments)
            }
        }(ui.prototype[fi]));
    $i(ui), x.e_stop = Hi, x.e_preventDefault = _i, x.e_stopPropagation = Di;
    var Ri, Ui = 0;
    x.on = Fi, x.off = Ii, x.signal = qi;
    var Ji = 30, Ki = x.Pass = {
        toString: function() {
            return "CodeMirror.Pass"
        }
    };
    Qi.prototype = {
        set: function(e, t) {
            clearTimeout(this.id), this.id = setTimeout(t, e)
        }
    }, x.countColumn = Gi;
    var Yi = [""], us = /[\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, ls = /[\u0300-\u036F\u0483-\u0487\u0488-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\uA66F\u1DC0–\u1DFF\u20D0–\u20FF\uA670-\uA672\uA674-\uA67D\uA69F\udc00-\udfff\uFE20–\uFE2F]/;
    x.replaceGetRect = function(e) {
        vs = e
    };
    var ms = function() {
        if (r)
            return !1;
        var e = cs("div");
        return "draggable"in e || "dragDrop"in e
    }();
    e ? gs = function(e, t) {
        return e.charCodeAt(t-1) == 36 && e.charCodeAt(t) == 39
    } : f&&!/Version\/([6-9]|\d\d)\b/.test(navigator.userAgent) ? gs = function(e, t) {
        return /\-[^ \-?]|\?[^ !\'\"\),.\-\/:;\?\]\}]/.test(e.slice(t-1, t + 1))
    } : s && /Chrome\/(?:29|[3-9]\d|\d\d\d)\./.test(navigator.userAgent) ? gs = function(e, t) {
        var n = e.charCodeAt(t-1);
        return n >= 8208 && n <= 8212
    } : s && (gs = function(e, t) {
        if (t > 1 && e.charCodeAt(t-1) == 45) {
            if (/\w/.test(e.charAt(t-2)) && /[^\-?\.]/.test(e.charAt(t)))
                return !0;
            if (t > 2 && /[\d\.,]/.test(e.charAt(t-2)) && /[\d\.,]/.test(e.charAt(t)))
                return !1
        }
        return /[~!#%&*)=+}\]\\|\"\.>,:;][({[<]|-[^\-?\.\u2010-\u201f\u2026]|\?[\w~`@#$%\^&*(_=+{[|><]|…[\w~`@#$%\^&*(_=+{[><]/.test(e.slice(t-1, t + 1))
    });
    var ys, ws, Ss = "\n\nb".split(/\n/).length != 3 ? function(e) {
        var t = 0, n = [], r = e.length;
        while (t <= r) {
            var i = e.indexOf("\n", t);
            i==-1 && (i = e.length);
            var s = e.slice(t, e.charAt(i-1) == "\r" ? i-1 : i), o = s.indexOf("\r");
            o!=-1 ? (n.push(s.slice(0, o)), t += o + 1) : (n.push(s), t = i + 1)
        }
        return n
    }
    : function(e) {
        return e.split(/\r\n?|\n/)
    };
    x.splitLines = Ss;
    var xs = window.getSelection ? function(e) {
        try {
            return e.selectionStart != e.selectionEnd
        } catch (t) {
            return !1
        }
    }
    : function(e) {
        try {
            var t = e.ownerDocument.selection.createRange()
        } catch (n) {}
        return !t || t.parentElement() != e?!1 : t.compareEndPoints("StartToEnd", t) != 0
    }, Ts = function() {
        var e = cs("div");
        return "oncopy"in e?!0 : (e.setAttribute("oncopy", "return;"), typeof e.oncopy == "function")
    }(), Ns = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        109: "-",
        107: "=",
        127: "Delete",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63276: "PageUp",
        63277: "PageDown",
        63275: "End",
        63273: "Home",
        63234: "Left",
        63232: "Up",
        63235: "Right",
        63233: "Down",
        63302: "Insert",
        63272: "Delete"
    };
    x.keyNames = Ns, function() {
        for (var e = 0; e < 10; e++)
            Ns[e + 48] = String(e);
        for (var e = 65; e <= 90; e++)
            Ns[e] = String.fromCharCode(e);
        for (var e = 1; e <= 12; e++)
            Ns[e + 111] = Ns[e + 63235] = "F" + e
    }();
    var Ps, Is = function() {
        function n(n) {
            return n <= 255 ? e.charAt(n) : 1424 <= n && n <= 1524 ? "R" : 1536 <= n && n <= 1791 ? t.charAt(n-1536) : 1792 <= n && n <= 2220 ? "r" : "L"
        }
        var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLL", t = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmmrrrrrrrrrrrrrrrrrr", r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, i = /[stwN]/, s = /[LRr]/, o = /[Lb1n]/, u = /[1n]/, a = "L";
        return function(e) {
            if (!r.test(e))
                return !1;
            var t = e.length, f = [];
            for (var l = 0, c; l < t; ++l)
                f.push(c = n(e.charCodeAt(l)));
            for (var l = 0, h = a; l < t; ++l) {
                var c = f[l];
                c == "m" ? f[l] = h : h = c
            }
            for (var l = 0, p = a; l < t; ++l) {
                var c = f[l];
                c == "1" && p == "r" ? f[l] = "n" : s.test(c) && (p = c, c == "r" && (f[l] = "R"))
            }
            for (var l = 1, h = f[0]; l < t-1; ++l) {
                var c = f[l];
                c == "+" && h == "1" && f[l + 1] == "1" ? f[l] = "1" : c == "," && h == f[l + 1] && (h == "1" || h == "n") && (f[l] = h), h = c
            }
            for (var l = 0; l < t; ++l) {
                var c = f[l];
                if (c == ",")
                    f[l] = "N";
                else if (c == "%") {
                    for (var d = l + 1; d < t && f[d] == "%"; ++d);
                    var v = l && f[l-1] == "!" || d < t-1 && f[d] == "1" ? "1" : "N";
                    for (var m = l; m < d; ++m)
                        f[m] = v;
                        l = d-1
                }
            }
            for (var l = 0, p = a; l < t; ++l) {
                var c = f[l];
                p == "L" && c == "1" ? f[l] = "L" : s.test(c) && (p = c)
            }
            for (var l = 0; l < t; ++l)
                if (i.test(f[l])) {
                    for (var d = l + 1; d < t && i.test(f[d]); ++d);
                    var g = (l ? f[l-1] : a) == "L", y = (d < t-1 ? f[d] : a) == "L", v = g || y ? "L": "R";
                    for (var m = l; m < d; ++m)
                        f[m] = v;
                        l = d-1
                }
            var b = [], w;
            for (var l = 0; l < t;)
                if (o.test(f[l])) {
                    var E = l;
                    for (++l; l < t && o.test(f[l]); ++l);
                    b.push({
                        from: E,
                        to: l,
                        level: 0
                    })
                } else {
                    var S = l, x = b.length;
                    for (++l; l < t && f[l] != "L"; ++l);
                    for (var m = S; m < l;)
                        if (u.test(f[m])) {
                            S < m && b.splice(x, 0, {
                                from: S,
                                to: m,
                                level: 1
                            });
                            var T = m;
                            for (++m; m < l && u.test(f[m]); ++m);
                            b.splice(x, 0, {
                                from: T,
                                to: m,
                                level: 2
                            }), S = m
                        } else 
                            ++m;
                            S < l && b.splice(x, 0, {
                                from: S,
                                to: l,
                                level: 1
                            })
                }
            return b[0].level == 1 && (w = e.match(/^\s+/)) && (b[0].from = w[0].length, b.unshift({
                from : 0, to : w[0].length, level : 0
            })), es(b).level == 1 && (w = e.match(/\s+$/)) && (es(b).to -= w[0].length, b.push({
                from : t - w[0].length, to : t, level : 0
            })), b[0].level != es(b).level && b.push({
                from: t,
                to: t,
                level: b[0].level
            }), b
        }
    }();
    return x.version = "3.20.0", x
}();
