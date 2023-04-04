var ub = Object.defineProperty;
var fb = (t, e, n) => e in t ? ub(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var M = (t, e, n) => (fb(t, typeof e != "symbol" ? e + "" : e, n), n), aa = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var y = (t, e, n) => (aa(t, e, "read from private field"), n ? n.call(t) : e.get(t)), T = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, H = (t, e, n, o) => (aa(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n), nu = (t, e, n, o) => ({
  set _(s) {
    H(t, e, s, n);
  },
  get _() {
    return y(t, e, o);
  }
}), W = (t, e, n) => (aa(t, e, "access private method"), n);
var Oc, ot, zh, Vh, Oo, ou, ps = {}, Yh = [], hb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function je(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function qh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Gh(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Oc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Ki(t, l, o, s, null);
}
function Ki(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++zh };
  return s == null && ot.vnode != null && ot.vnode(r), r;
}
function db() {
  return { current: null };
}
function Hc(t) {
  return t.children;
}
function Zi(t, e) {
  this.props = t, this.context = e;
}
function Sr(t, e) {
  if (e == null)
    return t.__ ? Sr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Sr(t) : null;
}
function Xh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Xh(t);
  }
}
function ru(t) {
  (!t.__d && (t.__d = !0) && Oo.push(t) && !ms.__r++ || ou !== ot.debounceRendering) && ((ou = ot.debounceRendering) || setTimeout)(ms);
}
function ms() {
  for (var t; ms.__r = Oo.length; )
    t = Oo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Oo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = je({}, r)).__v = r.__v + 1, Qa(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Sr(r), r.__h), Qh(o, r), r.__e != l && Xh(r)));
    });
}
function Jh(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Yh, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ki(null, a, null, null, a) : Array.isArray(a) ? Ki(Hc, { children: a }, null, null, null) : a.__b > 0 ? Ki(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      Qa(t, a, u = u || ps, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Kh(a, _, t) : _ = Zh(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Sr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && ed(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      td(p[i], p[++i], p[++i]);
}
function Kh(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Kh(o, e, n) : Zh(n, o, o, s, o.__e, e));
  return e;
}
function Zh(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function pb(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || gs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || gs(t, r, e[r], n[r], o);
}
function iu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || hb.test(e) ? n : n + "px";
}
function gs(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || iu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || iu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? lu : su, r) : t.removeEventListener(e, r ? lu : su, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function su(t) {
  this.l[t.type + !1](ot.event ? ot.event(t) : t);
}
function lu(t) {
  this.l[t.type + !0](ot.event ? ot.event(t) : t);
}
function Qa(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ot.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Zi(p, g), i.constructor = b, i.render = gb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = je({}, i.__s)), je(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = ot.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = je(je({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Hc && h.key == null ? h.props.children : h, Jh(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = mb(n.__e, e, n, o, s, r, l, _);
    (h = ot.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ot.__e(k, e, n);
  }
}
function Qh(t, e) {
  ot.__c && ot.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ot.__e(o, n.__v);
    }
  });
}
function mb(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && Oc.call(t.childNodes), h = (d = n.props || ps).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (pb(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Jh(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Sr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && qh(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && gs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && gs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function td(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ot.__e(o, n);
  }
}
function ed(t, e, n) {
  var o, s;
  if (ot.unmount && ot.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || td(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ot.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && ed(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || qh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function gb(t, e, n) {
  return this.constructor(t, n);
}
function yb(t, e, n) {
  var o, s, r;
  ot.__ && ot.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Qa(e, t = (!o && n || e).__k = Gh(Hc, null, [t]), s || ps, ps, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Oc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Qh(r, t);
}
Oc = Yh.slice, ot = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, zh = 0, Vh = function(t) {
  return t != null && t.constructor === void 0;
}, Zi.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = je({}, this.state), typeof t == "function" && (t = t(je({}, n), this.props)), t && je(n, t), t != null && this.__v && (e && this._sb.push(e), ru(this));
}, Zi.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ru(this));
}, Zi.prototype.render = Hc, Oo = [], ms.__r = 0;
var vb = 0;
function nd(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --vb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ot.vnode && ot.vnode(_), _;
}
var $e;
class bb {
  constructor(e = "") {
    T(this, $e, void 0);
    typeof e == "object" ? H(this, $e, e) : H(this, $e, document.appendChild(document.createComment(e)));
  }
  on(e, n, o) {
    y(this, $e).addEventListener(e, n, o);
  }
  once(e, n, o) {
    y(this, $e).addEventListener(e, n, { once: !0, ...o });
  }
  off(e, n, o) {
    y(this, $e).removeEventListener(e, n, o);
  }
  emit(e) {
    return y(this, $e).dispatchEvent(e), e;
  }
}
$e = new WeakMap();
const Ta = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
class t_ extends bb {
  on(e, n, o) {
    super.on(e, n, o);
  }
  off(e, n, o) {
    super.off(e, n, o);
  }
  once(e, n, o) {
    super.once(e, n, o);
  }
  emit(e, n) {
    return typeof e == "string" && (Ta.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(t_.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (Ta.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
var ke, Kr, $n, Mo;
class cu extends t_ {
  constructor(n = "", o) {
    super(n);
    T(this, $n);
    T(this, ke, /* @__PURE__ */ new Map());
    T(this, Kr, void 0);
    H(this, Kr, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, s) {
    n = W(this, $n, Mo).call(this, n), super.on(n, o, s), y(this, ke).set(o, [n, s]);
  }
  off(n, o, s) {
    n = W(this, $n, Mo).call(this, n), super.off(n, o, s), y(this, ke).delete(o);
  }
  once(n, o, s) {
    n = W(this, $n, Mo).call(this, n);
    const r = (l) => {
      o(l), y(this, ke).delete(r);
    };
    super.once(n, r, s), y(this, ke).set(r, [n, s]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = W(this, $n, Mo).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(y(this, ke).entries()).forEach(([n, [o, s]]) => {
      super.off(o, n, s);
    }), y(this, ke).clear();
  }
}
ke = new WeakMap(), Kr = new WeakMap(), $n = new WeakSet(), Mo = function(n) {
  const o = y(this, Kr);
  return Ta.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function wb(t, e) {
  if (t == null)
    return [t, void 0];
  typeof e == "string" && (e = e.split("."));
  const n = e.join(".");
  let o = t;
  const s = [o];
  for (; typeof o == "object" && o !== null && e.length; ) {
    let r = e.shift(), l;
    const c = r.indexOf("[");
    if (c > 0 && c < r.length - 1 && r.endsWith("]") && (l = r.substring(c + 1, r.length - 1), r = r.substring(0, c)), o = o[r], s.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], s.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${n}".`);
  }
  if (e.length)
    throw new Error(`Cannot access property with rest path "${e.join(".")}", the full path is "${n}".`);
  return s;
}
function $b(t, e, n) {
  const o = wb(t, e), s = o[o.length - 1];
  return s === void 0 ? n : s;
}
function _a(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function Aa(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (_a(t) && _a(n))
    for (const o in n)
      _a(n[o]) ? (t[o] || Object.assign(t, { [o]: {} }), Aa(t[o], n[o])) : Object.assign(t, { [o]: n[o] });
  return Aa(t, ...e);
}
function It(t, ...e) {
  if (e.length === 0)
    return t;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const n = e[0];
    return Object.keys(n).forEach((o) => {
      const s = n[o] ?? 0;
      t = t.replace(new RegExp(`\\{${o}\\}`, "g"), `${s}`);
    }), t;
  }
  for (let n = 0; n < e.length; n++) {
    const o = e[n] ?? "";
    t = t.replace(new RegExp(`\\{${n}\\}`, "g"), `${o}`);
  }
  return t;
}
var e_ = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(e_ || {});
function gC(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / e_[n]).toFixed(e) + n);
}
const yC = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const o = n[1];
  return t = t.replace(o, ""), Number.parseInt(t, 10) * e_[o];
};
var jh;
let n_ = ((jh = document.documentElement.getAttribute("lang")) == null ? void 0 : jh.toLowerCase()) ?? "zh_cn", Pe;
function kb() {
  return n_;
}
function xb(t) {
  n_ = t.toLowerCase();
}
function Sb(t, e) {
  Pe || (Pe = {}), typeof t == "string" && (t = { [t]: e ?? {} }), Aa(Pe, t);
}
function Ri(t, e, n, o, s, r) {
  Array.isArray(t) ? Pe && t.unshift(Pe) : t = Pe ? [Pe, t] : [t], typeof n == "string" && (r = s, s = o, o = n, n = void 0);
  const l = s || n_;
  let c;
  for (const _ of t) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const i = r && _ === Pe ? `${r}.${e}` : e;
    if (c = $b(h, i), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? It(c, ...Array.isArray(n) ? n : [n]) : c;
}
Ri.addLang = Sb;
Ri.getCode = kb;
Ri.setCode = xb;
function Cb(t) {
  return Object.fromEntries(Object.entries(t).map(([e, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [e, n];
  }));
}
const ua = /* @__PURE__ */ new Map();
var xe, zn, Qt;
class se {
  constructor(e, n) {
    T(this, xe, void 0);
    T(this, zn, void 0);
    T(this, Qt, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, this.constructor.EVENTS && H(this, Qt, new cu(e, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, xe, { ...this.constructor.DEFAULT }), this.setOptions({ ...e instanceof HTMLElement ? Cb(e.dataset) : null, ...n }), this.constructor.all.set(e, this), H(this, zn, e), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return y(this, xe);
  }
  get element() {
    return y(this, zn);
  }
  get events() {
    return y(this, Qt);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(e) {
    return e && Object.assign(y(this, xe), e), y(this, xe);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(y(this, zn)), y(this, Qt) && (this.emit("destroyed", this), y(this, Qt).offAll());
  }
  on(e, n, o) {
    var s;
    (s = y(this, Qt)) == null || s.on(e, n, o);
  }
  once(e, n, o) {
    var s;
    (s = y(this, Qt)) == null || s.once(e, n, o);
  }
  off(e, n, o) {
    var s;
    (s = y(this, Qt)) == null || s.off(e, n, o);
  }
  emit(e, n) {
    var l;
    let o = cu.createEvent(e, n);
    const s = `on${e[0].toUpperCase()}${e.substring(1)}`, r = y(this, xe)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = y(this, Qt)) == null ? void 0 : l.emit(e, n), o;
  }
  i18n(e, n, o) {
    return Ri(y(this, xe).i18n, e, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${e}}`;
  }
  /**
   * Component internal name, like "Menu"
   */
  static get NAME() {
    throw new Error(`static NAME should be override in class ${this.name}`);
  }
  /**
   * Component data key, like "zui.menu"
   */
  static get KEY() {
    return `zui.${this.NAME}`;
  }
  static get all() {
    const e = this.NAME;
    if (ua.has(e))
      return ua.get(e);
    const n = /* @__PURE__ */ new Map();
    return ua.set(e, n), n;
  }
  static getAll() {
    return this.all;
  }
  static get(e) {
    return this.all.get(e);
  }
  static ensure(e, n) {
    return this.get(e) || new this(e, n);
  }
}
xe = new WeakMap(), zn = new WeakMap(), Qt = new WeakMap(), M(se, "EVENTS", !1), M(se, "DEFAULT", {});
class Lt extends se {
  constructor() {
    super(...arguments);
    M(this, "ref", db());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  destroy() {
    super.destroy(), this.element.innerHTML = "";
  }
  render(n) {
    const o = this.constructor.Component;
    yb(/* @__PURE__ */ nd(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
M(Lt, "Component");
var o_, ut, od, rd, Ho, au, id = {}, sd = [], Eb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ze(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ld(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function So(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? o_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Qi(t, l, o, s, null);
}
function Qi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++od };
  return s == null && ut.vnode != null && ut.vnode(r), r;
}
function Tb() {
  return { current: null };
}
function r_(t) {
  return t.children;
}
function Wo(t, e) {
  this.props = t, this.context = e;
}
function Cr(t, e) {
  if (e == null)
    return t.__ ? Cr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Cr(t) : null;
}
function cd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return cd(t);
  }
}
function _u(t) {
  (!t.__d && (t.__d = !0) && Ho.push(t) && !ys.__r++ || au !== ut.debounceRendering) && ((au = ut.debounceRendering) || setTimeout)(ys);
}
function ys() {
  for (var t; ys.__r = Ho.length; )
    t = Ho.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Ho = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = ze({}, r)).__v = r.__v + 1, fd(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Cr(r), r.__h), Lb(o, r), r.__e != l && cd(r)));
    });
}
function ad(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || sd, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Qi(null, a, null, null, a) : Array.isArray(a) ? Qi(r_, { children: a }, null, null, null) : a.__b > 0 ? Qi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      fd(t, a, u = u || id, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = _d(a, _, t) : _ = ud(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Cr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && dd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      hd(p[i], p[++i], p[++i]);
}
function _d(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? _d(o, e, n) : ud(n, o, o, s, o.__e, e));
  return e;
}
function ud(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Ab(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || vs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || vs(t, r, e[r], n[r], o);
}
function uu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Eb.test(e) ? n : n + "px";
}
function vs(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || uu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || uu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? hu : fu, r) : t.removeEventListener(e, r ? hu : fu, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function fu(t) {
  this.l[t.type + !1](ut.event ? ut.event(t) : t);
}
function hu(t) {
  this.l[t.type + !0](ut.event ? ut.event(t) : t);
}
function fd(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ut.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Wo(p, g), i.constructor = b, i.render = Rb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = ze({}, i.__s)), ze(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = ut.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = ze(ze({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === r_ && h.key == null ? h.props.children : h, ad(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Mb(n.__e, e, n, o, s, r, l, _);
    (h = ut.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ut.__e(k, e, n);
  }
}
function Lb(t, e) {
  ut.__c && ut.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ut.__e(o, n.__v);
    }
  });
}
function Mb(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && o_.call(t.childNodes), h = (d = n.props || id).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Ab(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, ad(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Cr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && ld(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && vs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && vs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function hd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ut.__e(o, n);
  }
}
function dd(t, e, n) {
  var o, s;
  if (ut.unmount && ut.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || hd(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ut.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && dd(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || ld(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Rb(t, e, n) {
  return this.constructor(t, n);
}
o_ = sd.slice, ut = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, od = 0, rd = function(t) {
  return t != null && t.constructor === void 0;
}, Wo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ze({}, this.state), typeof t == "function" && (t = t(ze({}, n), this.props)), t && ze(n, t), t != null && this.__v && (e && this._sb.push(e), _u(this));
}, Wo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), _u(this));
}, Wo.prototype.render = r_, Ho = [], ys.__r = 0;
var Nb = 0;
function Gt(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Nb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ut.vnode && ut.vnode(_), _;
}
function Wc(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), o = (s, r) => {
    if (Array.isArray(s) && (r = s[1], s = s[0]), !s.length)
      return;
    const l = n.get(s);
    typeof l == "number" ? e[l][1] = !!r : (n.set(s, e.length), e.push([s, !!r]));
  };
  return t.forEach((s) => {
    typeof s == "function" && (s = s()), Array.isArray(s) ? Wc(...s).forEach(o) : s && typeof s == "object" ? Object.entries(s).forEach(o) : typeof s == "string" && s.split(" ").forEach((r) => o(r, !0));
  }), e.sort((s, r) => (n.get(s[0]) || 0) - (n.get(r[0]) || 0));
}
const F = (...t) => Wc(...t).reduce((e, [n, o]) => (o && e.push(n), e), []).join(" ");
function Db({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: s
}) {
  return So(t, {
    className: F(e),
    style: o,
    ...s
  }, n);
}
function pd({
  component: t = "a",
  className: e,
  children: n,
  attrs: o,
  url: s,
  disabled: r,
  active: l,
  icon: c,
  text: _,
  target: h,
  trailingIcon: i,
  hint: d,
  style: u,
  onClick: a
}) {
  const f = [
    typeof c == "string" ? /* @__PURE__ */ Gt("i", { class: `icon ${c}` }) : c,
    /* @__PURE__ */ Gt("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof i == "string" ? /* @__PURE__ */ Gt("i", { class: `icon ${i}` }) : i
  ];
  return So(t, {
    className: F(e, { disabled: r, active: l }),
    title: d,
    [t === "a" ? "href" : "data-url"]: s,
    [t === "a" ? "target" : "data-target"]: h,
    style: u,
    onClick: a,
    ...o
  }, ...f);
}
function Pb({
  component: t = "div",
  className: e,
  text: n,
  attrs: o,
  children: s,
  style: r,
  onClick: l
}) {
  return So(t, {
    className: F(e),
    style: r,
    onClick: l,
    ...o
  }, n, typeof s == "function" ? s() : s);
}
function Ob({
  component: t = "div",
  className: e,
  style: n,
  space: o,
  flex: s,
  attrs: r,
  onClick: l,
  children: c
}) {
  return So(t, {
    className: F(e),
    style: { width: o, height: o, flex: s, ...n },
    onClick: l,
    ...r
  }, c);
}
function Hb(t) {
  const {
    tag: e,
    className: n,
    style: o,
    renders: s,
    generateArgs: r = [],
    generatorThis: l,
    generators: c,
    onGenerate: _,
    onRenderItem: h,
    ...i
  } = t, d = [n], u = { ...o }, a = [], f = [];
  return s.forEach((v) => {
    const p = [];
    typeof v == "string" && c && c[v] && (v = c[v]), typeof v == "function" ? _ ? p.push(..._.call(l, v, a, ...r)) : p.push(...v.call(l, a, ...r) ?? []) : p.push(v), p.forEach((m) => {
      m != null && (typeof m == "object" && !Vh(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ nd("div", { className: F(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? f.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(i, m.attrs)) : a.push(m));
    });
  }), f.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: f } }), [{
    className: F(d),
    style: u,
    ...i
  }, a];
}
function La({
  tag: t = "div",
  ...e
}) {
  const [n, o] = Hb(e);
  return Gh(t, n, ...o);
}
function Wb({ type: t, ...e }) {
  return /* @__PURE__ */ Gt(La, { ...e });
}
function md({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: s
}) {
  return So(t, {
    className: F(e),
    style: o,
    ...s
  }, n);
}
var Ao;
let yo = (Ao = class extends Wo {
  constructor() {
    super(...arguments);
    M(this, "ref", Tb());
  }
  get name() {
    return this.props.name ?? this.constructor.NAME;
  }
  componentDidMount() {
    this.afterRender(!0);
  }
  componentDidUpdate() {
    this.afterRender(!1);
  }
  componentWillUnmount() {
    var n, o;
    (o = (n = this.props).beforeDestroy) == null || o.call(n, { menu: this });
  }
  afterRender(n) {
    var o, s;
    (s = (o = this.props).afterRender) == null || s.call(o, { menu: this, firstRender: n });
  }
  handleItemClick(n, o, s, r) {
    s && s.call(r.target, r);
    const { onClickItem: l } = this.props;
    l && l({ menu: this, item: n, index: o, event: r });
  }
  beforeRender() {
    var s;
    const n = { ...this.props };
    typeof n.items == "function" && (n.items = n.items(this));
    const o = (s = n.beforeRender) == null ? void 0 : s.call(n, { menu: this, options: n });
    return o && Object.assign(n, o), n;
  }
  getItemRenderProps(n, o, s) {
    const { commonItemProps: r, onClickItem: l } = n, c = { key: s, ...o };
    return r && Object.assign(c, r[o.type || "item"]), (l || o.onClick) && (c.onClick = this.handleItemClick.bind(this, c, s, o.onClick)), c.className = F(c.className), c;
  }
  renderItem(n, o, s) {
    const r = this.getItemRenderProps(n, o, s), { itemRender: l } = n;
    if (l) {
      if (typeof l == "object") {
        const p = l[o.type || "item"];
        if (p)
          return /* @__PURE__ */ Gt(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, So);
        if (rd(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: c = "item", component: _, key: h = s, rootAttrs: i, rootClass: d, rootStyle: u, rootChildren: a, ...f } = r;
    if (c === "html")
      return /* @__PURE__ */ Gt(
        "li",
        {
          className: F("action-menu-item", `${this.name}-html`, d, f.className),
          ...i,
          style: u || f.style,
          dangerouslySetInnerHTML: { __html: f.html }
        },
        h
      );
    const v = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || yo.ItemComponents[c] : _;
    return Object.assign(f, {
      type: c,
      component: typeof _ == "string" ? _ : void 0
    }), this.renderTypedItem(v, {
      className: F(d),
      children: a,
      style: u,
      key: h,
      ...i
    }, {
      ...f,
      type: c,
      component: typeof _ == "string" ? _ : void 0
    });
  }
  renderTypedItem(n, o, s) {
    const { children: r, className: l, key: c, ..._ } = o, { activeClass: h = "", activeKey: i, activeIcon: d } = this.props, u = d && i === c ? /* @__PURE__ */ Gt("i", { className: `checked icon icon-${d}` }) : null, a = i === c;
    return /* @__PURE__ */ Gt(
      "li",
      {
        className: F("action-menu-item", `${this.name}-${s.type}`, l, { [h]: a }),
        ..._,
        children: [
          /* @__PURE__ */ Gt(n, { ...s }),
          u,
          typeof r == "function" ? r() : r
        ]
      },
      c
    );
  }
  render() {
    const n = this.beforeRender(), {
      name: o,
      style: s,
      commonItemProps: r,
      className: l,
      items: c,
      children: _,
      itemRender: h,
      onClickItem: i,
      beforeRender: d,
      afterRender: u,
      beforeDestroy: a,
      activeClass: f,
      activeKey: v,
      ...p
    } = n, m = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ Gt(m, { class: F(this.name, l), style: s, ...p, ref: this.ref, children: [
      c && c.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, M(Ao, "ItemComponents", {
  divider: Db,
  item: pd,
  heading: Pb,
  space: Ob,
  custom: Wb,
  basic: md
}), M(Ao, "ROOT_TAG", "menu"), M(Ao, "NAME", "action-menu"), Ao);
class du extends Lt {
}
M(du, "NAME", "actionmenu"), M(du, "Component", yo);
function pu({
  ...t
}) {
  return /* @__PURE__ */ Gt(pd, { ...t });
}
var xa, Zr, le, Vn;
let gd = (xa = class extends yo {
  constructor(n) {
    super(n);
    T(this, Zr, /* @__PURE__ */ new Set());
    T(this, le, void 0);
    T(this, Vn, (n, o, s) => {
      this.toggleNestedMenu(n, o), s.preventDefault();
    });
    H(this, le, n.nestedShow === void 0), y(this, le) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const n = super.beforeRender(), { nestedShow: o, nestedTrigger: s, defaultNestedShow: r, controlledMenu: l, ...c } = n;
    return c;
  }
  renderNestedMenu(n) {
    let { items: o } = n;
    if (!o || (typeof o == "function" && (o = o(n, this)), !o.length))
      return;
    const s = this.constructor, { name: r, controlledMenu: l, nestedShow: c, beforeDestroy: _, beforeRender: h, itemRender: i, activeClass: d, activeKey: u, onClickItem: a, afterRender: f, commonItemProps: v, activeIcon: p } = this.props;
    return /* @__PURE__ */ Gt(
      s,
      {
        items: o,
        name: r,
        nestedShow: y(this, le) ? this.state.nestedShow : c,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: l || this,
        commonItemProps: v,
        onClickItem: a,
        afterRender: f,
        beforeRender: h,
        beforeDestroy: _,
        itemRender: i,
        activeClass: d,
        activeKey: u,
        activeIcon: p
      }
    );
  }
  isNestedItem(n) {
    return (!n.type || n.type === "item") && !!n.items;
  }
  renderToggleIcon(n, o) {
  }
  getItemRenderProps(n, o, s) {
    const r = super.getItemRenderProps(n, o, s);
    if (!this.isNestedItem(r))
      return r;
    const l = r.key ?? s;
    y(this, Zr).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = pu), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: y(this, Vn).bind(this, l, !0),
        onMouseLeave: y(this, Vn).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = r;
      r.onClick = (i) => {
        y(this, Vn).call(this, l, void 0, i), h == null || h(i);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = y(this, le) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, o);
    if (!y(this, le))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...y(this, Zr).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
      o = !r[n];
    else if (!!r[n] == !!o)
      return !1;
    return o ? r[n] = o : delete r[n], this.setState({ nestedShow: { ...r } }), !0;
  }
  showNestedMenu(n) {
    return this.toggleNestedMenu(n, !0);
  }
  hideNestedMenu(n) {
    return this.toggleNestedMenu(n, !1);
  }
  showAllNestedMenu() {
    y(this, le) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    y(this, le) && this.setState({ nestedShow: !1 });
  }
}, Zr = new WeakMap(), le = new WeakMap(), Vn = new WeakMap(), M(xa, "ItemComponents", {
  item: pu
}), xa);
class mu extends Lt {
}
M(mu, "NAME", "actionmenunested"), M(mu, "Component", gd);
var i_, ft, yd, Uo, gu, vd = {}, bd = [], Ub = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ve(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function wd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ib(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? i_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ts(t, l, o, s, null);
}
function ts(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++yd };
  return s == null && ft.vnode != null && ft.vnode(r), r;
}
function s_(t) {
  return t.children;
}
function Io(t, e) {
  this.props = t, this.context = e;
}
function Er(t, e) {
  if (e == null)
    return t.__ ? Er(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Er(t) : null;
}
function $d(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return $d(t);
  }
}
function yu(t) {
  (!t.__d && (t.__d = !0) && Uo.push(t) && !bs.__r++ || gu !== ft.debounceRendering) && ((gu = ft.debounceRendering) || setTimeout)(bs);
}
function bs() {
  for (var t; bs.__r = Uo.length; )
    t = Uo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Uo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ve({}, r)).__v = r.__v + 1, Cd(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Er(r), r.__h), Bb(o, r), r.__e != l && $d(r)));
    });
}
function kd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || bd, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ts(null, a, null, null, a) : Array.isArray(a) ? ts(s_, { children: a }, null, null, null) : a.__b > 0 ? ts(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      Cd(t, a, u = u || vd, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = xd(a, _, t) : _ = Sd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Er(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Td(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Ed(p[i], p[++i], p[++i]);
}
function xd(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? xd(o, e, n) : Sd(n, o, o, s, o.__e, e));
  return e;
}
function Sd(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Fb(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ws(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ws(t, r, e[r], n[r], o);
}
function vu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ub.test(e) ? n : n + "px";
}
function ws(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || vu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || vu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? wu : bu, r) : t.removeEventListener(e, r ? wu : bu, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function bu(t) {
  this.l[t.type + !1](ft.event ? ft.event(t) : t);
}
function wu(t) {
  this.l[t.type + !0](ft.event ? ft.event(t) : t);
}
function Cd(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ft.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Io(p, g), i.constructor = b, i.render = zb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ve({}, i.__s)), Ve(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = ft.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ve(Ve({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === s_ && h.key == null ? h.props.children : h, kd(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = jb(n.__e, e, n, o, s, r, l, _);
    (h = ft.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ft.__e(k, e, n);
  }
}
function Bb(t, e) {
  ft.__c && ft.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ft.__e(o, n.__v);
    }
  });
}
function jb(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && i_.call(t.childNodes), h = (d = n.props || vd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Fb(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, kd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Er(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && wd(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && ws(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && ws(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Ed(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ft.__e(o, n);
  }
}
function Td(t, e, n) {
  var o, s;
  if (ft.unmount && ft.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Ed(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ft.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Td(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || wd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function zb(t, e, n) {
  return this.constructor(t, n);
}
i_ = bd.slice, ft = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, yd = 0, Io.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ve({}, this.state), typeof t == "function" && (t = t(Ve({}, n), this.props)), t && Ve(n, t), t != null && this.__v && (e && this._sb.push(e), yu(this));
}, Io.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), yu(this));
}, Io.prototype.render = s_, Uo = [], bs.__r = 0;
var Vb = 0;
function Eo(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Vb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ft.vnode && ft.vnode(_), _;
}
let he = class extends Io {
  render() {
    const {
      component: e,
      type: n,
      size: o,
      className: s,
      children: r,
      url: l,
      target: c,
      disabled: _,
      active: h,
      loading: i,
      loadingIcon: d,
      loadingText: u,
      icon: a,
      text: f,
      trailingIcon: v,
      caret: p,
      square: m,
      hint: g,
      ...w
    } = this.props, $ = e || (l ? "a" : "button"), S = f == null || typeof f == "string" && !f.length || i && !u, A = p && S && !a && !v && !r && !i;
    return Ib(
      $,
      {
        className: F("btn", n, s, {
          "btn-caret": A,
          disabled: _ || i,
          active: h,
          loading: i,
          square: m === void 0 ? !A && !r && S : m
        }, o ? `size-${o}` : ""),
        title: g,
        [$ === "a" ? "href" : "data-url"]: l,
        [$ === "a" ? "target" : "data-target"]: c,
        type: $ === "button" ? "button" : void 0,
        ...w
      },
      i ? /* @__PURE__ */ Eo("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof a == "string" ? /* @__PURE__ */ Eo("i", { class: `icon ${a}` }) : a,
      S ? null : /* @__PURE__ */ Eo("span", { className: "text", children: i ? u : f }),
      i ? null : r,
      i ? null : typeof v == "string" ? /* @__PURE__ */ Eo("i", { class: `icon ${v}` }) : v,
      i ? null : p ? /* @__PURE__ */ Eo("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class $u extends Lt {
}
M($u, "NAME", "button"), M($u, "Component", he);
var Ma;
Ma = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var Yb = 0;
function qb(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Yb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Ma.vnode && Ma.vnode(_), _;
}
var Sa;
let l_ = (Sa = class extends gd {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: n } = e;
    return n === void 0 && (n = e.items.some((o) => o.icon)), e.className = F(e.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": e.items.some((o) => this.isNestedItem(o))
    }), e;
  }
  renderToggleIcon(e) {
    return /* @__PURE__ */ qb("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, M(Sa, "NAME", "menu"), Sa);
class ku extends Lt {
}
M(ku, "NAME", "menu"), M(ku, "Component", l_);
let Gb = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Ad, ht, Ld, Fo, xu, Md = {}, Rd = [], Xb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ye(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Nd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function fa(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Ld };
  return s == null && ht.vnode != null && ht.vnode(r), r;
}
function c_(t) {
  return t.children;
}
function Bo(t, e) {
  this.props = t, this.context = e;
}
function Tr(t, e) {
  if (e == null)
    return t.__ ? Tr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Tr(t) : null;
}
function Dd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Dd(t);
  }
}
function Su(t) {
  (!t.__d && (t.__d = !0) && Fo.push(t) && !$s.__r++ || xu !== ht.debounceRendering) && ((xu = ht.debounceRendering) || setTimeout)($s);
}
function $s() {
  for (var t; $s.__r = Fo.length; )
    t = Fo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Fo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ye({}, r)).__v = r.__v + 1, Wd(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Tr(r), r.__h), Kb(o, r), r.__e != l && Dd(r)));
    });
}
function Pd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Rd, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? fa(null, a, null, null, a) : Array.isArray(a) ? fa(c_, { children: a }, null, null, null) : a.__b > 0 ? fa(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      Wd(t, a, u = u || Md, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Od(a, _, t) : _ = Hd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Tr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Id(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Ud(p[i], p[++i], p[++i]);
}
function Od(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Od(o, e, n) : Hd(n, o, o, s, o.__e, e));
  return e;
}
function Hd(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Jb(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ks(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ks(t, r, e[r], n[r], o);
}
function Cu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Xb.test(e) ? n : n + "px";
}
function ks(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Cu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Cu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Tu : Eu, r) : t.removeEventListener(e, r ? Tu : Eu, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Eu(t) {
  this.l[t.type + !1](ht.event ? ht.event(t) : t);
}
function Tu(t) {
  this.l[t.type + !0](ht.event ? ht.event(t) : t);
}
function Wd(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ht.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Bo(p, g), i.constructor = b, i.render = Qb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ye({}, i.__s)), Ye(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = ht.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ye(Ye({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === c_ && h.key == null ? h.props.children : h, Pd(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Zb(n.__e, e, n, o, s, r, l, _);
    (h = ht.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ht.__e(k, e, n);
  }
}
function Kb(t, e) {
  ht.__c && ht.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ht.__e(o, n.__v);
    }
  });
}
function Zb(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && Ad.call(t.childNodes), h = (d = n.props || Md).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Jb(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Pd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Tr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Nd(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && ks(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && ks(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Ud(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ht.__e(o, n);
  }
}
function Id(t, e, n) {
  var o, s;
  if (ht.unmount && ht.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Ud(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ht.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Id(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Nd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Qb(t, e, n) {
  return this.constructor(t, n);
}
Ad = Rd.slice, ht = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Ld = 0, Bo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ye({}, this.state), typeof t == "function" && (t = t(Ye({}, n), this.props)), t && Ye(n, t), t != null && this.__v && (e && this._sb.push(e), Su(this));
}, Bo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Su(this));
}, Bo.prototype.render = c_, Fo = [], $s.__r = 0;
var t0 = 0;
function e0(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --t0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ht.vnode && ht.vnode(_), _;
}
var Ra, Wn;
Ra = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Wn = function(t) {
  return t != null && t.constructor === void 0;
};
var n0 = 0;
function ve(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --n0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Ra.vnode && Ra.vnode(_), _;
}
var Na;
Na = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var o0 = 0;
function Uc(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --o0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Na.vnode && Na.vnode(_), _;
}
function r0({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Uc(he, { type: n, ...o });
}
var Fd, dt, Bd, jo, Au, jd = {}, zd = [], i0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Vd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ha(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Bd };
  return s == null && dt.vnode != null && dt.vnode(r), r;
}
function s0() {
  return { current: null };
}
function a_(t) {
  return t.children;
}
function zo(t, e) {
  this.props = t, this.context = e;
}
function Ar(t, e) {
  if (e == null)
    return t.__ ? Ar(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Ar(t) : null;
}
function Yd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Yd(t);
  }
}
function Lu(t) {
  (!t.__d && (t.__d = !0) && jo.push(t) && !xs.__r++ || Au !== dt.debounceRendering) && ((Au = dt.debounceRendering) || setTimeout)(xs);
}
function xs() {
  for (var t; xs.__r = jo.length; )
    t = jo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), jo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = qe({}, r)).__v = r.__v + 1, Jd(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ar(r), r.__h), c0(o, r), r.__e != l && Yd(r)));
    });
}
function qd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || zd, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ha(null, a, null, null, a) : Array.isArray(a) ? ha(a_, { children: a }, null, null, null) : a.__b > 0 ? ha(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      Jd(t, a, u = u || jd, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Gd(a, _, t) : _ = Xd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Ar(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Zd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Kd(p[i], p[++i], p[++i]);
}
function Gd(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Gd(o, e, n) : Xd(n, o, o, s, o.__e, e));
  return e;
}
function Xd(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function l0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ss(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ss(t, r, e[r], n[r], o);
}
function Mu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || i0.test(e) ? n : n + "px";
}
function Ss(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Mu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Mu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Nu : Ru, r) : t.removeEventListener(e, r ? Nu : Ru, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Ru(t) {
  this.l[t.type + !1](dt.event ? dt.event(t) : t);
}
function Nu(t) {
  this.l[t.type + !0](dt.event ? dt.event(t) : t);
}
function Jd(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = dt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new zo(p, g), i.constructor = b, i.render = _0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = qe({}, i.__s)), qe(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = dt.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = qe(qe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === a_ && h.key == null ? h.props.children : h, qd(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = a0(n.__e, e, n, o, s, r, l, _);
    (h = dt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), dt.__e(k, e, n);
  }
}
function c0(t, e) {
  dt.__c && dt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      dt.__e(o, n.__v);
    }
  });
}
function a0(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && Fd.call(t.childNodes), h = (d = n.props || jd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (l0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, qd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ar(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Vd(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ss(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ss(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Kd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    dt.__e(o, n);
  }
}
function Zd(t, e, n) {
  var o, s;
  if (dt.unmount && dt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Kd(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        dt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Zd(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Vd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function _0(t, e, n) {
  return this.constructor(t, n);
}
Fd = zd.slice, dt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Bd = 0, zo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qe({}, this.state), typeof t == "function" && (t = t(qe({}, n), this.props)), t && qe(n, t), t != null && this.__v && (e && this._sb.push(e), Lu(this));
}, zo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Lu(this));
}, zo.prototype.render = a_, jo = [], xs.__r = 0;
var u0 = 0;
function Qd(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --u0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return dt.vnode && dt.vnode(_), _;
}
var Ic, rt, tp, Vo, Du, Cs = {}, ep = [], f0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ge(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function np(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function op(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ic.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return es(t, l, o, s, null);
}
function es(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++tp };
  return s == null && rt.vnode != null && rt.vnode(r), r;
}
function Fc(t) {
  return t.children;
}
function ns(t, e) {
  this.props = t, this.context = e;
}
function Lr(t, e) {
  if (e == null)
    return t.__ ? Lr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Lr(t) : null;
}
function rp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return rp(t);
  }
}
function Pu(t) {
  (!t.__d && (t.__d = !0) && Vo.push(t) && !Es.__r++ || Du !== rt.debounceRendering) && ((Du = rt.debounceRendering) || setTimeout)(Es);
}
function Es() {
  for (var t; Es.__r = Vo.length; )
    t = Vo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Vo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ge({}, r)).__v = r.__v + 1, __(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Lr(r), r.__h), cp(o, r), r.__e != l && rp(r)));
    });
}
function ip(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || ep, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? es(null, a, null, null, a) : Array.isArray(a) ? es(Fc, { children: a }, null, null, null) : a.__b > 0 ? es(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      __(t, a, u = u || Cs, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = sp(a, _, t) : _ = lp(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Lr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && _p(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      ap(p[i], p[++i], p[++i]);
}
function sp(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? sp(o, e, n) : lp(n, o, o, s, o.__e, e));
  return e;
}
function lp(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function h0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ts(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ts(t, r, e[r], n[r], o);
}
function Ou(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || f0.test(e) ? n : n + "px";
}
function Ts(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Ou(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ou(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Wu : Hu, r) : t.removeEventListener(e, r ? Wu : Hu, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Hu(t) {
  this.l[t.type + !1](rt.event ? rt.event(t) : t);
}
function Wu(t) {
  this.l[t.type + !0](rt.event ? rt.event(t) : t);
}
function __(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = rt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new ns(p, g), i.constructor = b, i.render = p0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ge({}, i.__s)), Ge(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = rt.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ge(Ge({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Fc && h.key == null ? h.props.children : h, ip(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = d0(n.__e, e, n, o, s, r, l, _);
    (h = rt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), rt.__e(k, e, n);
  }
}
function cp(t, e) {
  rt.__c && rt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      rt.__e(o, n.__v);
    }
  });
}
function d0(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && Ic.call(t.childNodes), h = (d = n.props || Cs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (h0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, ip(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Lr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && np(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ts(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ts(t, "checked", f, d.checked, !1));
  }
  return t;
}
function ap(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    rt.__e(o, n);
  }
}
function _p(t, e, n) {
  var o, s;
  if (rt.unmount && rt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || ap(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        rt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && _p(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || np(t.__e), t.__ = t.__e = t.__d = void 0;
}
function p0(t, e, n) {
  return this.constructor(t, n);
}
function m0(t, e, n) {
  var o, s, r;
  rt.__ && rt.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], __(e, t = (!o && n || e).__k = op(Fc, null, [t]), s || Cs, Cs, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Ic.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), cp(r, t);
}
Ic = ep.slice, rt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, tp = 0, ns.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ge({}, this.state), typeof t == "function" && (t = t(Ge({}, n), this.props)), t && Ge(n, t), t != null && this.__v && (e && this._sb.push(e), Pu(this));
}, ns.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Pu(this));
}, ns.prototype.render = Fc, Vo = [], Es.__r = 0;
function g0(t) {
  return t.button === 2;
}
var y0 = 0;
function v0(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --y0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return rt.vnode && rt.vnode(_), _;
}
function u_(t) {
  return t.split("-")[1];
}
function up(t) {
  return t === "y" ? "height" : "width";
}
function Mr(t) {
  return t.split("-")[0];
}
function fp(t) {
  return ["top", "bottom"].includes(Mr(t)) ? "x" : "y";
}
function Uu(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = fp(e), _ = up(c), h = o[_] / 2 - s[_] / 2, i = Mr(e), d = c === "x";
  let u;
  switch (i) {
    case "top":
      u = {
        x: r,
        y: o.y - s.height
      };
      break;
    case "bottom":
      u = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      u = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      u = {
        x: o.x - s.width,
        y: l
      };
      break;
    default:
      u = {
        x: o.x,
        y: o.y
      };
  }
  switch (u_(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const b0 = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: s
  }), {
    x: i,
    y: d
  } = Uu(h, o, _), u = o, a = {}, f = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: p,
      fn: m
    } = c[v], {
      x: g,
      y: w,
      data: $,
      reset: S
    } = await m({
      x: i,
      y: d,
      initialPlacement: o,
      placement: u,
      strategy: s,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (i = g ?? i, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...$
      }
    }, S && f <= 50) {
      f++, typeof S == "object" && (S.placement && (u = S.placement), S.rects && (h = S.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: s
      }) : S.rects), {
        x: i,
        y: d
      } = Uu(h, u, _)), v = -1;
      continue;
    }
  }
  return {
    x: i,
    y: d,
    placement: u,
    strategy: s,
    middlewareData: a
  };
};
function w0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function $0(t) {
  return typeof t != "number" ? w0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function As(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function k0(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: s,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: i = "viewport",
    elementContext: d = "floating",
    altBoundary: u = !1,
    padding: a = 0
  } = e, f = $0(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = As(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: i,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: s
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = As(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - S.top + f.top) / $.y,
    bottom: (S.bottom - m.bottom + f.bottom) / $.y,
    left: (m.left - S.left + f.left) / $.x,
    right: (S.right - m.right + f.right) / $.x
  };
}
const x0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ls(t) {
  return t.replace(/left|right|bottom|top/g, (e) => x0[e]);
}
function S0(t, e, n) {
  n === void 0 && (n = !1);
  const o = u_(t), s = fp(t), r = up(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Ls(l)), {
    main: l,
    cross: Ls(l)
  };
}
const C0 = {
  start: "end",
  end: "start"
};
function Da(t) {
  return t.replace(/start|end/g, (e) => C0[e]);
}
function E0(t) {
  const e = Ls(t);
  return [Da(t), e, Da(e)];
}
function T0(t, e, n) {
  const o = ["left", "right"], s = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? s : o : e ? o : s;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function A0(t, e, n, o) {
  const s = u_(t);
  let r = T0(Mr(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(Da)))), r;
}
const hp = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: s,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: i = !0,
        fallbackPlacements: d,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: f = !0,
        ...v
      } = t, p = Mr(o), m = Mr(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [Ls(l)] : E0(l));
      !d && a !== "none" && w.push(...A0(l, f, a, g));
      const $ = [l, ...w], S = await k0(e, v), A = [];
      let E = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = S0(o, r, g);
        A.push(S[R], S[q]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var b;
        const R = (((b = s.flip) == null ? void 0 : b.index) || 0) + 1, q = $[R];
        if (q)
          return {
            data: {
              index: R,
              overflows: E
            },
            reset: {
              placement: q
            }
          };
        let j = "bottom";
        switch (u) {
          case "bestFit": {
            var k;
            const N = (k = E.map((C) => [C, C.overflows.filter((x) => x > 0).reduce((x, D) => x + D, 0)]).sort((C, x) => C[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            N && (j = N);
            break;
          }
          case "initialPlacement":
            j = l;
            break;
        }
        if (o !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
function Xt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function de(t) {
  return Xt(t).getComputedStyle(t);
}
function an(t) {
  return pp(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Ii;
function dp() {
  if (Ii)
    return Ii;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Ii = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Ii) : navigator.userAgent;
}
function Te(t) {
  return t instanceof Xt(t).HTMLElement;
}
function ne(t) {
  return t instanceof Xt(t).Element;
}
function pp(t) {
  return t instanceof Xt(t).Node;
}
function Iu(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Xt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Bc(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = de(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function L0(t) {
  return ["table", "td", "th"].includes(an(t));
}
function f_(t) {
  const e = /firefox/i.test(dp()), n = de(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function mp() {
  return !/^((?!chrome|android).)*safari/i.test(dp());
}
function h_(t) {
  return ["html", "body", "#document"].includes(an(t));
}
const Fu = Math.min, Yo = Math.max, Ms = Math.round;
function gp(t) {
  const e = de(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = Ms(n) !== s || Ms(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function yp(t) {
  return ne(t) ? t : t.contextElement;
}
const vp = {
  x: 1,
  y: 1
};
function Un(t) {
  const e = yp(t);
  if (!Te(e))
    return vp;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = gp(e);
  let l = (r ? Ms(n.width) : n.width) / o, c = (r ? Ms(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Mn(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = yp(t);
  let _ = vp;
  e && (o ? ne(o) && (_ = Un(o)) : _ = Un(t));
  const h = c ? Xt(c) : window, i = !mp() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const v = Xt(c), p = o && ne(o) ? Xt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = Un(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat($.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat($.paddingTop)) * g.y, d *= g.x, u *= g.y, a *= g.x, f *= g.y, d += w.x, u += w.y, m = Xt(m).frameElement;
    }
  }
  return {
    width: a,
    height: f,
    top: u,
    right: d + a,
    bottom: u + f,
    left: d,
    x: d,
    y: u
  };
}
function hn(t) {
  return ((pp(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function jc(t) {
  return ne(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function bp(t) {
  return Mn(hn(t)).left + jc(t).scrollLeft;
}
function M0(t, e, n) {
  const o = Te(e), s = hn(e), r = Mn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((an(e) !== "body" || Bc(s)) && (l = jc(e)), Te(e)) {
      const _ = Mn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = bp(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Rr(t) {
  if (an(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (Iu(t) ? t.host : null) || // Fallback
    hn(t)
  );
  return Iu(e) ? e.host : e;
}
function Bu(t) {
  return !Te(t) || de(t).position === "fixed" ? null : t.offsetParent;
}
function R0(t) {
  let e = Rr(t);
  for (; Te(e) && !h_(e); ) {
    if (f_(e))
      return e;
    e = Rr(e);
  }
  return null;
}
function ju(t) {
  const e = Xt(t);
  let n = Bu(t);
  for (; n && L0(n) && de(n).position === "static"; )
    n = Bu(n);
  return n && (an(n) === "html" || an(n) === "body" && de(n).position === "static" && !f_(n)) ? e : n || R0(t) || e;
}
function N0(t) {
  return gp(t);
}
function D0(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const s = Te(n), r = hn(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((s || !s && o !== "fixed") && ((an(n) !== "body" || Bc(r)) && (l = jc(n)), Te(n))) {
    const h = Mn(n);
    c = Un(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function P0(t, e) {
  const n = Xt(t), o = hn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = mp();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function O0(t) {
  var e;
  const n = hn(t), o = jc(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = Yo(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = Yo(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + bp(t);
  const _ = -o.scrollTop;
  return de(s || n).direction === "rtl" && (c += Yo(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function wp(t) {
  const e = Rr(t);
  return h_(e) ? t.ownerDocument.body : Te(e) && Bc(e) ? e : wp(e);
}
function qo(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = wp(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Xt(o);
  return s ? e.concat(r, r.visualViewport || [], Bc(o) ? o : []) : e.concat(o, qo(o));
}
function H0(t, e) {
  const n = Mn(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Te(t) ? Un(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = s * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function zu(t, e, n) {
  return e === "viewport" ? As(P0(t, n)) : ne(e) ? H0(e, n) : As(O0(hn(t)));
}
function W0(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = qo(t).filter((c) => ne(c) && an(c) !== "body"), s = null;
  const r = de(t).position === "fixed";
  let l = r ? Rr(t) : t;
  for (; ne(l) && !h_(l); ) {
    const c = de(l), _ = f_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Rr(l);
  }
  return e.set(t, o), o;
}
function U0(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? W0(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = zu(e, i, s);
    return h.top = Yo(d.top, h.top), h.right = Fu(d.right, h.right), h.bottom = Fu(d.bottom, h.bottom), h.left = Yo(d.left, h.left), h;
  }, zu(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const I0 = {
  getClippingRect: U0,
  convertOffsetParentRelativeRectToViewportRelativeRect: D0,
  isElement: ne,
  getDimensions: N0,
  getOffsetParent: ju,
  getDocumentElement: hn,
  getScale: Un,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || ju, r = this.getDimensions;
    return {
      reference: M0(e, await s(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => de(t).direction === "rtl"
};
function F0(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...ne(t) ? qo(t) : t.contextElement ? qo(t.contextElement) : [], ...qo(e)] : [];
  h.forEach((f) => {
    _ && f.addEventListener("scroll", n, {
      passive: !0
    }), r && f.addEventListener("resize", n);
  });
  let i = null;
  if (l) {
    let f = !0;
    i = new ResizeObserver(() => {
      f || n(), f = !1;
    }), ne(t) && !c && i.observe(t), !ne(t) && t.contextElement && !c && i.observe(t.contextElement), i.observe(e);
  }
  let d, u = c ? Mn(t) : null;
  c && a();
  function a() {
    const f = Mn(t);
    u && (f.x !== u.x || f.y !== u.y || f.width !== u.width || f.height !== u.height) && n(), u = f, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var f;
    h.forEach((v) => {
      _ && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), (f = i) == null || f.disconnect(), i = null, c && cancelAnimationFrame(d);
  };
}
const $p = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: I0,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return b0(t, e, {
    ...s,
    platform: r
  });
};
let B0 = class extends l_ {
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context";
  }
  componentWillUnmount() {
    super.componentWillUnmount();
  }
  _getPopperOptions() {
    return {
      middleware: [hp()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  _createPopper() {
    const e = this._getPopperOptions();
    this.ref.current && $p(this._getPopperElement(), this.ref.current, e).then(({ x: n, y: o }) => {
      Object.assign(this.ref.current.style, {
        left: `${n}px`,
        top: `${o}px`,
        position: "absolute"
      });
    });
  }
  afterRender(e) {
    super.afterRender(e), this.props.controlledMenu && this._createPopper();
  }
  beforeRender() {
    const e = super.beforeRender();
    return e.className = F(e.className, "menu-popup"), e;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ v0("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var Oe, Yn, Qr, ti, Sl, kp, Cl, xp;
class Ut extends se {
  constructor() {
    super(...arguments);
    T(this, Sl);
    T(this, Cl);
    T(this, Oe, void 0);
    T(this, Yn, void 0);
    T(this, Qr, void 0);
    M(this, "arrowEl");
    T(this, ti, void 0);
  }
  get isShown() {
    var n;
    return (n = y(this, Oe)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return y(this, Oe) || this._ensureMenu();
  }
  get trigger() {
    return y(this, Qr) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, Qr, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var o, s;
    return (o = y(this, ti)) == null || o.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((s = y(this, Oe)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    super.destroy(), (n = y(this, Oe)) == null || n.remove();
  }
  _ensureMenu() {
    var r;
    const { element: n } = this, o = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = document.createElement("div"), s.classList.add(o), document.body.appendChild(s);
    else if (n) {
      const l = n.getAttribute("href") ?? n.dataset.target;
      if ((l == null ? void 0 : l[0]) === "#" && (s = document.querySelector(l)), !s) {
        const c = n.nextElementSibling;
        c != null && c.classList.contains(o) ? s = c : s = (r = n.parentNode) == null ? void 0 : r.querySelector(`.${o}`);
      }
      s && s.classList.add("menu-popup");
    }
    if (!s)
      throw new Error("ContextMenu: Cannot find menu element");
    return s.style.width = "max-content", s.style.position = this.options.strategy, s.style.top = "0", s.style.left = "0", H(this, Oe, s), s;
  }
  _getPopperOptions() {
    var r;
    const { placement: n, strategy: o } = this.options, s = {
      middleware: [],
      placement: n,
      strategy: o
    };
    return this.options.flip && ((r = s.middleware) == null || r.push(hp())), s;
  }
  _createPopper() {
    const n = this._getPopperOptions(), o = this._getPopperElement();
    H(this, ti, F0(o, this.menu, () => {
      $p(o, this.menu, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
        Object.assign(this.menu.style, {
          left: `${s}px`,
          top: `${r}px`
        });
        const _ = c.split("-")[0], h = W(this, Sl, kp).call(this, _);
        if (l.arrow && this.arrowEl) {
          const { x: i, y: d } = l.arrow;
          Object.assign(this.arrowEl.style, {
            left: i != null ? `${i}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...W(this, Cl, xp).call(this, _)
          });
        }
      });
    }));
  }
  _getMenuOptions() {
    const { menu: n, items: o } = this.options;
    let s = o || (n == null ? void 0 : n.items);
    if (s)
      return typeof s == "function" && (s = s(this)), {
        nestedTrigger: "hover",
        ...n,
        items: s
      };
  }
  _renderMenu() {
    const n = this._getMenuOptions();
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (m0(op(B0, n), this.menu), !0);
  }
  _getPopperElement() {
    return y(this, Yn) || H(this, Yn, {
      getBoundingClientRect: () => {
        const { trigger: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: o, clientY: s } = n;
          return {
            width: 0,
            height: 0,
            top: s,
            right: o,
            bottom: s,
            left: o
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), y(this, Yn);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)) || o && g0(o))
      return;
    const l = this.getAll().entries(), c = new Set(s || []);
    for (const [i, d] of l)
      c.has(i) || d.hide();
  }
  static show(n) {
    const { event: o, ...s } = n, r = this.ensure(document.body);
    return Object.keys(s).length && r.setOptions(s), r.show(o), o instanceof Event && o.stopPropagation(), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
Oe = new WeakMap(), Yn = new WeakMap(), Qr = new WeakMap(), ti = new WeakMap(), Sl = new WeakSet(), kp = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Cl = new WeakSet(), xp = function(n) {
  return n === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : n === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : n === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, M(Ut, "NAME", "contextmenu"), M(Ut, "EVENTS", !0), M(Ut, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), M(Ut, "MENU_CLASS", "contextmenu"), M(Ut, "CLASS_SHOW", "show"), M(Ut, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (t) => {
  const e = t.target;
  if (e.closest(`.${Ut.MENU_CLASS}`))
    return;
  const n = e.closest(Ut.MENU_SELECTOR);
  n && (Ut.ensure(n).show(t), t.preventDefault());
});
document.addEventListener("click", Ut.clear.bind(Ut));
function Sp(t) {
  return t.split("-")[1];
}
function j0(t) {
  return t === "y" ? "height" : "width";
}
function Cp(t) {
  return t.split("-")[0];
}
function Ep(t) {
  return ["top", "bottom"].includes(Cp(t)) ? "x" : "y";
}
function z0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function V0(t) {
  return typeof t != "number" ? z0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
const Y0 = Math.min, q0 = Math.max;
function G0(t, e, n) {
  return q0(t, Y0(e, n));
}
const X0 = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: s,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = V0(o), i = {
      x: s,
      y: r
    }, d = Ep(l), u = j0(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], E = w / 2 - a[u] / 2 + $, b = G0(S, E, A), R = Sp(l) != null && E != b && c.reference[u] / 2 - (E < S ? h[f] : h[v]) - a[u] / 2 < 0 ? E < S ? S - E : A - E : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: E - b
      }
    };
  }
});
async function J0(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = Cp(n), c = Sp(n), _ = Ep(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: u,
    crossAxis: a,
    alignmentAxis: f
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof f == "number" && (a = c === "end" ? f * -1 : f), _ ? {
    x: a * i,
    y: u * h
  } : {
    x: u * h,
    y: a * i
  };
}
const K0 = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await J0(e, t);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
var qn, Gn, Xn, El, Tp;
const X_ = class extends Ut {
  constructor() {
    super(...arguments);
    T(this, El);
    T(this, qn, !1);
    T(this, Gn, 0);
    M(this, "hideLater", () => {
      y(this, Xn).call(this), H(this, Gn, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, Xn, () => {
      clearTimeout(y(this, Gn)), H(this, Gn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && X_.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!y(this, qn) && this.isHover && W(this, El, Tp).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    y(this, qn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", y(this, Xn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 8 : 0;
  }
  _getPopperOptions() {
    var s, r;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && this.arrowEl && ((s = n.middleware) == null || s.push(K0(o)), (r = n.middleware) == null || r.push(X0({ element: this.arrowEl }))), n;
  }
  _ensureMenu() {
    const n = super._ensureMenu();
    if (this.options.arrow) {
      const o = this._getArrowSize();
      this.arrowEl = document.createElement("div"), this.arrowEl.style.position = "absolute", this.arrowEl.style.width = `${o}px`, this.arrowEl.style.height = `${o}px`, this.arrowEl.style.transform = "rotate(45deg)", n.append(this.arrowEl);
    }
    return n;
  }
  _getMenuOptions() {
    const n = super._getMenuOptions();
    if (n && this.options.arrow) {
      const { afterRender: o } = n;
      n.afterRender = (...s) => {
        var r;
        this.arrowEl && ((r = this.menu.querySelector(".menu")) == null || r.appendChild(this.arrowEl)), o == null || o(...s);
      };
    }
    return n;
  }
};
let Dt = X_;
qn = new WeakMap(), Gn = new WeakMap(), Xn = new WeakMap(), El = new WeakSet(), Tp = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", y(this, Xn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, qn, !0);
}, M(Dt, "NAME", "dropdown"), M(Dt, "MENU_CLASS", "dropdown-menu"), M(Dt, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), M(Dt, "DEFAULT", {
  ...Ut.DEFAULT,
  strategy: "fixed",
  trigger: "click"
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Dt.MENU_SELECTOR);
  if (n) {
    const o = Dt.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Dt.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(Dt.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Dt.ensure(n);
  o.isHover && o.show();
});
const Z0 = (t) => {
  const e = document.getElementsByClassName("with-dropdown-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Dt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Dt.clear({ event: t });
};
window.addEventListener("scroll", Z0, !0);
var ei, Jn;
class Q0 extends zo {
  constructor(n) {
    var o;
    super(n);
    T(this, ei, void 0);
    T(this, Jn, s0());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return y(this, Jn);
  }
  get triggerElement() {
    return y(this, Jn).current;
  }
  componentDidMount() {
    const { modifiers: n = [], ...o } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: s }) => {
        var l;
        const r = ((l = s.placement) == null ? void 0 : l.split("-").shift()) || "";
        this.setState({ placement: r });
      }
    }), H(this, ei, Dt.ensure(this.triggerElement, {
      ...o,
      modifiers: n,
      onShow: () => {
        this.setState({ show: !0 });
      },
      onHide: () => {
        this.setState({ show: !0 });
      }
    }));
  }
  componentWillUnmount() {
    var n;
    (n = y(this, ei)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: s, ...r } = this.props;
    return {
      className: F("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: y(this, Jn)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ Qd("div", { ...o, children: n });
  }
}
ei = new WeakMap(), Jn = new WeakMap();
class tw extends Q0 {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var r;
    const { placement: e, show: n } = this.state, o = this.beforeRender();
    let { caret: s = !0 } = o;
    if (s !== !1 && (n || s === !0)) {
      const l = n ? e : (r = this.props.dropdown) == null ? void 0 : r.placement;
      s = (l === "top" ? "up" : l === "bottom" ? "down" : l) || (typeof s == "string" ? s : "") || "down";
    }
    return o.caret = s, /* @__PURE__ */ Qd(he, { ...o });
  }
}
function Ap({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Uc(tw, { type: n, ...o });
}
var d_, pt, Lp, Mp, Go, Vu, Rp = {}, Np = [], ew = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Dp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function nw(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? d_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return os(t, l, o, s, null);
}
function os(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Lp };
  return s == null && pt.vnode != null && pt.vnode(r), r;
}
function p_(t) {
  return t.children;
}
function Xo(t, e) {
  this.props = t, this.context = e;
}
function Nr(t, e) {
  if (e == null)
    return t.__ ? Nr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Nr(t) : null;
}
function Pp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Pp(t);
  }
}
function Yu(t) {
  (!t.__d && (t.__d = !0) && Go.push(t) && !Rs.__r++ || Vu !== pt.debounceRendering) && ((Vu = pt.debounceRendering) || setTimeout)(Rs);
}
function Rs() {
  for (var t; Rs.__r = Go.length; )
    t = Go.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Go = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Xe({}, r)).__v = r.__v + 1, Up(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Nr(r), r.__h), rw(o, r), r.__e != l && Pp(r)));
    });
}
function Op(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Np, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? os(null, a, null, null, a) : Array.isArray(a) ? os(p_, { children: a }, null, null, null) : a.__b > 0 ? os(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      Up(t, a, u = u || Rp, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Hp(a, _, t) : _ = Wp(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Nr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Fp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Ip(p[i], p[++i], p[++i]);
}
function Hp(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Hp(o, e, n) : Wp(n, o, o, s, o.__e, e));
  return e;
}
function Wp(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function ow(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ns(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ns(t, r, e[r], n[r], o);
}
function qu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || ew.test(e) ? n : n + "px";
}
function Ns(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || qu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || qu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Xu : Gu, r) : t.removeEventListener(e, r ? Xu : Gu, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Gu(t) {
  this.l[t.type + !1](pt.event ? pt.event(t) : t);
}
function Xu(t) {
  this.l[t.type + !0](pt.event ? pt.event(t) : t);
}
function Up(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = pt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Xo(p, g), i.constructor = b, i.render = sw), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Xe({}, i.__s)), Xe(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = pt.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Xe(Xe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === p_ && h.key == null ? h.props.children : h, Op(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = iw(n.__e, e, n, o, s, r, l, _);
    (h = pt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), pt.__e(k, e, n);
  }
}
function rw(t, e) {
  pt.__c && pt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      pt.__e(o, n.__v);
    }
  });
}
function iw(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && d_.call(t.childNodes), h = (d = n.props || Rp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (ow(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Op(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Nr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Dp(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ns(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ns(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Ip(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    pt.__e(o, n);
  }
}
function Fp(t, e, n) {
  var o, s;
  if (pt.unmount && pt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Ip(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        pt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Fp(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Dp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function sw(t, e, n) {
  return this.constructor(t, n);
}
d_ = Np.slice, pt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Lp = 0, Mp = function(t) {
  return t != null && t.constructor === void 0;
}, Xo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xe({}, this.state), typeof t == "function" && (t = t(Xe({}, n), this.props)), t && Xe(n, t), t != null && this.__v && (e && this._sb.push(e), Yu(this));
}, Xo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Yu(this));
}, Xo.prototype.render = p_, Go = [], Rs.__r = 0;
var lw = 0;
function Ju(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --lw, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pt.vnode && pt.vnode(_), _;
}
let Bp = class extends Xo {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  handleItemClick(e, n, o, s) {
    o && o.call(s.target, s);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: e, index: n, event: s });
  }
  beforeRender() {
    var o;
    const e = { ...this.props }, n = (o = e.beforeRender) == null ? void 0 : o.call(this, e);
    return n && Object.assign(e, n), typeof e.items == "function" && (e.items = e.items.call(this)), e;
  }
  onRenderItem(e, n) {
    const { key: o = n, ...s } = e;
    return /* @__PURE__ */ Ju(he, { ...s }, o);
  }
  renderItem(e, n, o) {
    const { itemRender: s, defaultBtnProps: r, onClickItem: l } = e, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), s) {
      const _ = s.call(this, c, nw);
      if (Mp(_))
        return _;
      typeof _ == "object" && Object.assign(c, _);
    }
    return this.onRenderItem(c, o);
  }
  render() {
    const e = this.beforeRender(), {
      className: n,
      items: o,
      size: s,
      type: r,
      defaultBtnProps: l,
      children: c,
      itemRender: _,
      onClickItem: h,
      beforeRender: i,
      afterRender: d,
      beforeDestroy: u,
      ...a
    } = e;
    return /* @__PURE__ */ Ju(
      "div",
      {
        className: F("btn-group", s ? `size-${s}` : "", n),
        ...a,
        children: [
          o && o.map(this.renderItem.bind(this, e)),
          c
        ]
      }
    );
  }
};
function cw({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Uc(Bp, { type: n, ...o });
}
var Hn;
let vo = (Hn = class extends yo {
  beforeRender() {
    const { gap: e, btnProps: n, wrap: o, ...s } = super.beforeRender();
    return s.className = F(s.className, o ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (s.style ? s.style.gap = e : s.style = { gap: e }), s;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, n, o) {
    const s = this.isBtnItem(o.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, r = {
      ...n,
      ...s,
      ...o,
      className: F(`${this.name}-${o.type}`, n.className, s.className, o.className),
      style: Object.assign({}, n.style, s.style, o.style)
    };
    return /* @__PURE__ */ Uc(e, { ...r });
  }
}, M(Hn, "ItemComponents", {
  item: r0,
  dropdown: Ap,
  "btn-group": cw
}), M(Hn, "ROOT_TAG", "nav"), M(Hn, "NAME", "toolbar"), M(Hn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), Hn);
function aw({
  className: t,
  style: e,
  actions: n,
  heading: o,
  content: s,
  contentClass: r,
  children: l,
  close: c,
  onClose: _,
  icon: h,
  ...i
}) {
  let d;
  c === !0 ? d = /* @__PURE__ */ ve(he, { className: "alert-close btn ghost", square: !0, onClick: _, children: /* @__PURE__ */ ve("span", { class: "close" }) }) : Wn(c) ? d = c : typeof c == "object" && (d = /* @__PURE__ */ ve(he, { ...c, onClick: _ }));
  const u = Wn(n) ? n : n ? /* @__PURE__ */ ve(vo, { ...n }) : null;
  return /* @__PURE__ */ ve("div", { className: F("alert", t), style: e, ...i, children: [
    Wn(h) ? h : typeof h == "string" ? /* @__PURE__ */ ve("i", { className: `icon ${h}` }) : null,
    Wn(s) ? s : /* @__PURE__ */ ve("div", { className: F("alert-content", r), children: [
      Wn(o) ? o : o && /* @__PURE__ */ ve("div", { className: "alert-heading", children: o }),
      /* @__PURE__ */ ve("div", { className: "alert-text", children: s }),
      o ? u : null
    ] }),
    o ? null : u,
    d,
    l
  ] });
}
function _w(t) {
  if (t === "center")
    return "fade-from-center";
  if (t) {
    if (t.includes("top"))
      return "fade-from-top";
    if (t.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
let uw = class extends Bo {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  render() {
    const {
      afterRender: e,
      beforeDestroy: n,
      margin: o,
      type: s,
      placement: r,
      animation: l,
      show: c,
      className: _,
      time: h,
      ...i
    } = this.props;
    return /* @__PURE__ */ e0(
      aw,
      {
        className: F("messager", _, s, l === !0 ? _w(r) : l, c ? "in" : ""),
        ...i
      }
    );
  }
};
var Kn, is;
class rs extends Lt {
  constructor() {
    super(...arguments);
    T(this, Kn);
    M(this, "_show", !1);
    M(this, "_showTimer", 0);
    M(this, "_afterRender", ({ firstRender: n }) => {
      n && this.show();
      const { margin: o } = this.options;
      o && (this.element.style.margin = `${o}px`);
    });
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (n) => {
      n.target.closest('.alert-close,[data-dismiss="messager"]') && (n.preventDefault(), n.stopPropagation(), this.hide());
    });
  }
  setOptions(n) {
    return n = super.setOptions(n), {
      ...n,
      show: this._show,
      afterRender: this._afterRender
    };
  }
  show() {
    this._show || (this.emit("show"), this.render(), this._show = !0, W(this, Kn, is).call(this, () => {
      this.emit("shown");
      const { time: n } = this.options;
      n && W(this, Kn, is).call(this, () => this.hide(), n);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), W(this, Kn, is).call(this, () => {
      this.emit("hidden");
    }));
  }
}
Kn = new WeakSet(), is = function(n, o = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, o);
}, M(rs, "NAME", "MessagerItem"), M(rs, "EVENTS", !0), M(rs, "Component", uw);
var kn, Zn, Se, Tl, jp, Al, zp;
const J_ = class extends se {
  constructor() {
    super(...arguments);
    T(this, Tl);
    T(this, Al);
    T(this, kn, void 0);
    T(this, Zn, Gb(6));
    T(this, Se, void 0);
  }
  get id() {
    return y(this, Zn);
  }
  get isShown() {
    var n;
    return !!((n = y(this, Se)) != null && n.isShown);
  }
  show(n) {
    this.setOptions(n), W(this, Tl, jp).call(this).show();
  }
  hide() {
    var n;
    (n = y(this, Se)) == null || n.hide();
  }
  static show(n) {
    typeof n == "string" && (n = { content: n });
    const { container: o, ...s } = n, r = new J_(o || "body", s);
    return r.show(), r;
  }
};
let Fi = J_;
kn = new WeakMap(), Zn = new WeakMap(), Se = new WeakMap(), Tl = new WeakSet(), jp = function() {
  if (y(this, Se))
    y(this, Se).setOptions(this.options);
  else {
    const n = W(this, Al, zp).call(this), o = new rs(n, this.options);
    o.on("hidden", () => {
      o.destroy(), n.remove(), H(this, kn, void 0);
    }), H(this, Se, o);
  }
  return y(this, Se);
}, Al = new WeakSet(), zp = function() {
  if (y(this, kn))
    return y(this, kn);
  const { placement: n = "top" } = this.options;
  let o = this.element.querySelector(`.messagers-${n}`);
  o || (o = document.createElement("div"), o.className = `messagers messagers-${n}`, this.element.appendChild(o));
  let s = o.querySelector(`#messager-${y(this, Zn)}`);
  return s || (s = document.createElement("div"), s.className = "messager-holder", s.id = `messager-${y(this, Zn)}`, o.appendChild(s), H(this, kn, s)), s;
}, M(Fi, "NAME", "messager"), M(Fi, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
var Vp, mt, Yp, Jo, Ku, qp = {}, Gp = [], fw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Je(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Xp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function da(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Yp };
  return s == null && mt.vnode != null && mt.vnode(r), r;
}
function m_(t) {
  return t.children;
}
function Ko(t, e) {
  this.props = t, this.context = e;
}
function Dr(t, e) {
  if (e == null)
    return t.__ ? Dr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Dr(t) : null;
}
function Jp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Jp(t);
  }
}
function Zu(t) {
  (!t.__d && (t.__d = !0) && Jo.push(t) && !Ds.__r++ || Ku !== mt.debounceRendering) && ((Ku = mt.debounceRendering) || setTimeout)(Ds);
}
function Ds() {
  for (var t; Ds.__r = Jo.length; )
    t = Jo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Jo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Je({}, r)).__v = r.__v + 1, tm(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Dr(r), r.__h), dw(o, r), r.__e != l && Jp(r)));
    });
}
function Kp(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Gp, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? da(null, a, null, null, a) : Array.isArray(a) ? da(m_, { children: a }, null, null, null) : a.__b > 0 ? da(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      tm(t, a, u = u || qp, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Zp(a, _, t) : _ = Qp(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Dr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && nm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      em(p[i], p[++i], p[++i]);
}
function Zp(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Zp(o, e, n) : Qp(n, o, o, s, o.__e, e));
  return e;
}
function Qp(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function hw(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ps(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ps(t, r, e[r], n[r], o);
}
function Qu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || fw.test(e) ? n : n + "px";
}
function Ps(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Qu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Qu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? ef : tf, r) : t.removeEventListener(e, r ? ef : tf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function tf(t) {
  this.l[t.type + !1](mt.event ? mt.event(t) : t);
}
function ef(t) {
  this.l[t.type + !0](mt.event ? mt.event(t) : t);
}
function tm(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = mt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Ko(p, g), i.constructor = b, i.render = mw), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Je({}, i.__s)), Je(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = mt.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Je(Je({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === m_ && h.key == null ? h.props.children : h, Kp(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = pw(n.__e, e, n, o, s, r, l, _);
    (h = mt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), mt.__e(k, e, n);
  }
}
function dw(t, e) {
  mt.__c && mt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      mt.__e(o, n.__v);
    }
  });
}
function pw(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && Vp.call(t.childNodes), h = (d = n.props || qp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (hw(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Kp(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Dr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Xp(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ps(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ps(t, "checked", f, d.checked, !1));
  }
  return t;
}
function em(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    mt.__e(o, n);
  }
}
function nm(t, e, n) {
  var o, s;
  if (mt.unmount && mt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || em(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        mt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && nm(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Xp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function mw(t, e, n) {
  return this.constructor(t, n);
}
Vp = Gp.slice, mt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Yp = 0, Ko.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Je({}, this.state), typeof t == "function" && (t = t(Je({}, n), this.props)), t && Je(n, t), t != null && this.__v && (e && this._sb.push(e), Zu(this));
}, Ko.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Zu(this));
}, Ko.prototype.render = m_, Jo = [], Ds.__r = 0;
var gw = 0;
function Bi(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --gw, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return mt.vnode && mt.vnode(_), _;
}
var Xi;
let yw = (Xi = class extends Ko {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: o, circleBgColor: s, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ Bi("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ Bi("circle", { cx: c, cy: c, r: l, stroke: s, "stroke-width": o }),
      /* @__PURE__ */ Bi("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - e) / 100, "stroke-width": o }),
      /* @__PURE__ */ Bi("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(e) })
    ] });
  }
}, M(Xi, "NAME", "zui.progress-circle"), M(Xi, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), Xi);
class nf extends Lt {
}
M(nf, "NAME", "table-sorter"), M(nf, "Component", yw);
var g_, gt, om, Zo, of, rm = {}, im = [], vw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ke(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function sm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function bw(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? g_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ss(t, l, o, s, null);
}
function ss(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++om };
  return s == null && gt.vnode != null && gt.vnode(r), r;
}
function y_(t) {
  return t.children;
}
function Qo(t, e) {
  this.props = t, this.context = e;
}
function Pr(t, e) {
  if (e == null)
    return t.__ ? Pr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Pr(t) : null;
}
function lm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return lm(t);
  }
}
function rf(t) {
  (!t.__d && (t.__d = !0) && Zo.push(t) && !Os.__r++ || of !== gt.debounceRendering) && ((of = gt.debounceRendering) || setTimeout)(Os);
}
function Os() {
  for (var t; Os.__r = Zo.length; )
    t = Zo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Zo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ke({}, r)).__v = r.__v + 1, um(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Pr(r), r.__h), $w(o, r), r.__e != l && lm(r)));
    });
}
function cm(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || im, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ss(null, a, null, null, a) : Array.isArray(a) ? ss(y_, { children: a }, null, null, null) : a.__b > 0 ? ss(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      um(t, a, u = u || rm, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = am(a, _, t) : _ = _m(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Pr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && hm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      fm(p[i], p[++i], p[++i]);
}
function am(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? am(o, e, n) : _m(n, o, o, s, o.__e, e));
  return e;
}
function _m(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function ww(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Hs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Hs(t, r, e[r], n[r], o);
}
function sf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || vw.test(e) ? n : n + "px";
}
function Hs(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || sf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || sf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? cf : lf, r) : t.removeEventListener(e, r ? cf : lf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function lf(t) {
  this.l[t.type + !1](gt.event ? gt.event(t) : t);
}
function cf(t) {
  this.l[t.type + !0](gt.event ? gt.event(t) : t);
}
function um(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = gt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Qo(p, g), i.constructor = b, i.render = xw), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ke({}, i.__s)), Ke(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = gt.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ke(Ke({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === y_ && h.key == null ? h.props.children : h, cm(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = kw(n.__e, e, n, o, s, r, l, _);
    (h = gt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), gt.__e(k, e, n);
  }
}
function $w(t, e) {
  gt.__c && gt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      gt.__e(o, n.__v);
    }
  });
}
function kw(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && g_.call(t.childNodes), h = (d = n.props || rm).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (ww(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, cm(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Pr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && sm(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Hs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Hs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function fm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    gt.__e(o, n);
  }
}
function hm(t, e, n) {
  var o, s;
  if (gt.unmount && gt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || fm(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        gt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && hm(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || sm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function xw(t, e, n) {
  return this.constructor(t, n);
}
g_ = im.slice, gt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, om = 0, Qo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ke({}, this.state), typeof t == "function" && (t = t(Ke({}, n), this.props)), t && Ke(n, t), t != null && this.__v && (e && this._sb.push(e), rf(this));
}, Qo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), rf(this));
}, Qo.prototype.render = y_, Zo = [], Os.__r = 0;
var Sw = 0;
function ji(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Sw, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return gt.vnode && gt.vnode(_), _;
}
let Cw = class extends Qo {
  constructor() {
    super(...arguments);
    M(this, "state", { checked: !1 });
    M(this, "handleOnClick", () => {
      this.setState({ checked: !this.state.checked });
    });
  }
  componentDidMount() {
    this.setState({ checked: this.props.defaultChecked ?? !1 });
  }
  render() {
    const {
      component: n,
      className: o,
      children: s,
      text: r,
      icon: l,
      surffixIcon: c,
      disabled: _,
      defaultChecked: h,
      onChange: i,
      ...d
    } = this.props, u = this.state.checked ? 1 : 0, a = n || "div", f = typeof l == "string" ? /* @__PURE__ */ ji("i", { class: `icon ${l}` }) : l, v = typeof c == "string" ? /* @__PURE__ */ ji("i", { class: `icon ${c}` }) : c, p = [
      /* @__PURE__ */ ji("input", { onChange: i, type: "checkbox", value: u, checked: !!this.state.checked }),
      /* @__PURE__ */ ji("label", { children: [
        f,
        r,
        v
      ] })
    ];
    return bw(
      a,
      {
        className: F("switch", o, { disabled: _ }),
        onClick: this.handleOnClick,
        ...d
      },
      ...p,
      s
    );
  }
};
class af extends Lt {
}
M(af, "NAME", "switch"), M(af, "Component", Cw);
function Ew(t) {
  const e = typeof t == "string" ? document.querySelector(t) : t;
  if (!e)
    return !1;
  if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)
    return e.select(), !0;
  if (window.getSelection) {
    const n = window.getSelection();
    if (n) {
      const o = document.createRange();
      return o.selectNodeContents(e), n.removeAllRanges(), n.addRange(o), !0;
    }
  }
  return !1;
}
function Tw(t, e) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const l = o.top <= s && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const AC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: F,
  getClassList: Wc,
  isElementVisible: Tw,
  selectText: Ew
}, Symbol.toStringTag, { value: "Module" })), Ae = document, Ws = window, dm = Ae.documentElement, Pn = Ae.createElement.bind(Ae), pm = Pn("div"), pa = Pn("table"), Aw = Pn("tbody"), _f = Pn("tr"), { isArray: zc, prototype: mm } = Array, { concat: Lw, filter: v_, indexOf: gm, map: ym, push: Mw, slice: vm, some: b_, splice: Rw } = mm, Nw = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Dw = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Pw = /<.+>/, Ow = /^\w+$/;
function w_(t, e) {
  const n = Hw(e);
  return !t || !n && !wo(e) && !Et(e) ? [] : !n && Dw.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Ow.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Vc {
  constructor(e, n) {
    if (!e)
      return;
    if (Pa(e))
      return e;
    let o = e;
    if (Pt(e)) {
      const s = (Pa(n) ? n[0] : n) || Ae;
      if (o = Nw.test(e) && "getElementById" in s ? s.getElementById(e.slice(1).replace(/\\/g, "")) : Pw.test(e) ? $m(e) : w_(e, s), !o)
        return;
    } else if (On(e))
      return this.ready(e);
    (o.nodeType || o === Ws) && (o = [o]), this.length = o.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = o[s];
  }
  init(e, n) {
    return new Vc(e, n);
  }
}
const U = Vc.prototype, Y = U.init;
Y.fn = Y.prototype = U;
U.length = 0;
U.splice = Rw;
typeof Symbol == "function" && (U[Symbol.iterator] = mm[Symbol.iterator]);
function Pa(t) {
  return t instanceof Vc;
}
function bo(t) {
  return !!t && t === t.window;
}
function wo(t) {
  return !!t && t.nodeType === 9;
}
function Hw(t) {
  return !!t && t.nodeType === 11;
}
function Et(t) {
  return !!t && t.nodeType === 1;
}
function Ww(t) {
  return !!t && t.nodeType === 3;
}
function Uw(t) {
  return typeof t == "boolean";
}
function On(t) {
  return typeof t == "function";
}
function Pt(t) {
  return typeof t == "string";
}
function Ft(t) {
  return t === void 0;
}
function Or(t) {
  return t === null;
}
function bm(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function $_(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
Y.isWindow = bo;
Y.isFunction = On;
Y.isArray = zc;
Y.isNumeric = bm;
Y.isPlainObject = $_;
function At(t, e, n) {
  if (n) {
    let o = t.length;
    for (; o--; )
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  } else if ($_(t)) {
    const o = Object.keys(t);
    for (let s = 0, r = o.length; s < r; s++) {
      const l = o[s];
      if (e.call(t[l], l, t[l]) === !1)
        return t;
    }
  } else
    for (let o = 0, s = t.length; o < s; o++)
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  return t;
}
Y.each = At;
U.each = function(t) {
  return At(this, t);
};
U.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function Us(...t) {
  const e = Uw(t[0]) ? t.shift() : !1, n = t.shift(), o = t.length;
  if (!n)
    return {};
  if (!o)
    return Us(e, Y, n);
  for (let s = 0; s < o; s++) {
    const r = t[s];
    for (const l in r)
      e && (zc(r[l]) || $_(r[l])) ? ((!n[l] || n[l].constructor !== r[l].constructor) && (n[l] = new r[l].constructor()), Us(e, n[l], r[l])) : n[l] = r[l];
  }
  return n;
}
Y.extend = Us;
U.extend = function(t) {
  return Us(U, t);
};
const Iw = /\S+/g;
function Yc(t) {
  return Pt(t) ? t.match(Iw) || [] : [];
}
U.toggleClass = function(t, e) {
  const n = Yc(t), o = !Ft(e);
  return this.each((s, r) => {
    Et(r) && At(n, (l, c) => {
      o ? e ? r.classList.add(c) : r.classList.remove(c) : r.classList.toggle(c);
    });
  });
};
U.addClass = function(t) {
  return this.toggleClass(t, !0);
};
U.removeAttr = function(t) {
  const e = Yc(t);
  return this.each((n, o) => {
    Et(o) && At(e, (s, r) => {
      o.removeAttribute(r);
    });
  });
};
function Fw(t, e) {
  if (t) {
    if (Pt(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !Et(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return Or(n) ? void 0 : n;
      }
      return Ft(e) ? this : Or(e) ? this.removeAttr(t) : this.each((n, o) => {
        Et(o) && o.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
U.attr = Fw;
U.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
U.hasClass = function(t) {
  return !!t && b_.call(this, (e) => Et(e) && e.classList.contains(t));
};
U.get = function(t) {
  return Ft(t) ? vm.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
U.eq = function(t) {
  return Y(this.get(t));
};
U.first = function() {
  return this.eq(0);
};
U.last = function() {
  return this.eq(-1);
};
function Bw(t) {
  return Ft(t) ? this.get().map((e) => Et(e) || Ww(e) ? e.textContent : "").join("") : this.each((e, n) => {
    Et(n) && (n.textContent = t);
  });
}
U.text = Bw;
function Le(t, e, n) {
  if (!Et(t))
    return;
  const o = Ws.getComputedStyle(t, null);
  return n ? o.getPropertyValue(e) || void 0 : o[e] || t.style[e];
}
function fe(t, e) {
  return parseInt(Le(t, e), 10) || 0;
}
function uf(t, e) {
  return fe(t, `border${e ? "Left" : "Top"}Width`) + fe(t, `padding${e ? "Left" : "Top"}`) + fe(t, `padding${e ? "Right" : "Bottom"}`) + fe(t, `border${e ? "Right" : "Bottom"}Width`);
}
const ma = {};
function jw(t) {
  if (ma[t])
    return ma[t];
  const e = Pn(t);
  Ae.body.insertBefore(e, null);
  const n = Le(e, "display");
  return Ae.body.removeChild(e), ma[t] = n !== "none" ? n : "block";
}
function ff(t) {
  return Le(t, "display") === "none";
}
function wm(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function qc(t) {
  return Pt(t) ? (e, n) => wm(n, t) : On(t) ? t : Pa(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
U.filter = function(t) {
  const e = qc(t);
  return Y(v_.call(this, (n, o) => e.call(n, o, n)));
};
function dn(t, e) {
  return e ? t.filter(e) : t;
}
U.detach = function(t) {
  return dn(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const zw = /^\s*<(\w+)[^>]*>/, Vw = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, hf = {
  "*": pm,
  tr: Aw,
  td: _f,
  th: _f,
  thead: pa,
  tbody: pa,
  tfoot: pa
};
function $m(t) {
  if (!Pt(t))
    return [];
  if (Vw.test(t))
    return [Pn(RegExp.$1)];
  const e = zw.test(t) && RegExp.$1, n = hf[e] || hf["*"];
  return n.innerHTML = t, Y(n.childNodes).detach().get();
}
Y.parseHTML = $m;
U.has = function(t) {
  const e = Pt(t) ? (n, o) => w_(t, o).length : (n, o) => o.contains(t);
  return this.filter(e);
};
U.not = function(t) {
  const e = qc(t);
  return this.filter((n, o) => (!Pt(t) || Et(o)) && !e.call(o, n, o));
};
function De(t, e, n, o) {
  const s = [], r = On(e), l = o && qc(o);
  for (let c = 0, _ = t.length; c < _; c++)
    if (r) {
      const h = e(t[c]);
      h.length && Mw.apply(s, h);
    } else {
      let h = t[c][e];
      for (; h != null && !(o && l(-1, h)); )
        s.push(h), h = n ? h[e] : null;
    }
  return s;
}
function km(t) {
  return t.multiple && t.options ? De(v_.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function Yw(t) {
  return arguments.length ? this.each((e, n) => {
    const o = n.multiple && n.options;
    if (o || Mm.test(n.type)) {
      const s = zc(t) ? ym.call(t, String) : Or(t) ? [] : [String(t)];
      o ? At(n.options, (r, l) => {
        l.selected = s.indexOf(l.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = Ft(t) || Or(t) ? "" : t;
  }) : this[0] && km(this[0]);
}
U.val = Yw;
U.is = function(t) {
  const e = qc(t);
  return b_.call(this, (n, o) => e.call(n, o, n));
};
Y.guid = 1;
function ye(t) {
  return t.length > 1 ? v_.call(t, (e, n, o) => gm.call(o, e) === n) : t;
}
Y.unique = ye;
U.add = function(t, e) {
  return Y(ye(this.get().concat(Y(t, e).get())));
};
U.children = function(t) {
  return dn(Y(ye(De(this, (e) => e.children))), t);
};
U.parent = function(t) {
  return dn(Y(ye(De(this, "parentNode"))), t);
};
U.index = function(t) {
  const e = t ? Y(t)[0] : this[0], n = t ? this : Y(e).parent().children();
  return gm.call(n, e);
};
U.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
U.siblings = function(t) {
  return dn(Y(ye(De(this, (e) => Y(e).parent().children().not(e)))), t);
};
U.find = function(t) {
  return Y(ye(De(this, (e) => w_(t, e))));
};
const qw = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Gw = /^$|^module$|\/(java|ecma)script/i, Xw = ["type", "src", "nonce", "noModule"];
function Jw(t, e) {
  const n = Y(t);
  n.filter("script").add(n.find("script")).each((o, s) => {
    if (Gw.test(s.type) && dm.contains(s)) {
      const r = Pn("script");
      r.text = s.textContent.replace(qw, ""), At(Xw, (l, c) => {
        s[c] && (r[c] = s[c]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function Kw(t, e, n, o, s) {
  o ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && Jw(e, t.ownerDocument);
}
function pn(t, e, n, o, s, r, l, c) {
  return At(t, (_, h) => {
    At(Y(h), (i, d) => {
      At(Y(e), (u, a) => {
        const f = n ? d : a, v = n ? a : d, p = n ? i : u;
        Kw(f, p ? v.cloneNode(!0) : v, o, s, !p);
      }, c);
    }, l);
  }, r), e;
}
U.after = function() {
  return pn(arguments, this, !1, !1, !1, !0, !0);
};
U.append = function() {
  return pn(arguments, this, !1, !1, !0);
};
function Zw(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (Ft(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, o) => {
    Et(o) && (e ? Y(o).empty().append(t) : o.innerHTML = t);
  });
}
U.html = Zw;
U.appendTo = function(t) {
  return pn(arguments, this, !0, !1, !0);
};
U.wrapInner = function(t) {
  return this.each((e, n) => {
    const o = Y(n), s = o.contents();
    s.length ? s.wrapAll(t) : o.append(t);
  });
};
U.before = function() {
  return pn(arguments, this, !1, !0);
};
U.wrapAll = function(t) {
  let e = Y(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
U.wrap = function(t) {
  return this.each((e, n) => {
    const o = Y(t)[0];
    Y(n).wrapAll(e ? o.cloneNode(!0) : o);
  });
};
U.insertAfter = function(t) {
  return pn(arguments, this, !0, !1, !1, !1, !1, !0);
};
U.insertBefore = function(t) {
  return pn(arguments, this, !0, !0);
};
U.prepend = function() {
  return pn(arguments, this, !1, !0, !0, !0, !0);
};
U.prependTo = function(t) {
  return pn(arguments, this, !0, !0, !0, !1, !1, !0);
};
U.contents = function() {
  return Y(ye(De(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
U.next = function(t, e, n) {
  return dn(Y(ye(De(this, "nextElementSibling", e, n))), t);
};
U.nextAll = function(t) {
  return this.next(t, !0);
};
U.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
U.parents = function(t, e) {
  return dn(Y(ye(De(this, "parentElement", !0, e))), t);
};
U.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
U.prev = function(t, e, n) {
  return dn(Y(ye(De(this, "previousElementSibling", e, n))), t);
};
U.prevAll = function(t) {
  return this.prev(t, !0);
};
U.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
U.map = function(t) {
  return Y(Lw.apply([], ym.call(this, (e, n) => t.call(e, n, e))));
};
U.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
U.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && Le(n, "position") === "static"; )
      n = n.offsetParent;
    return n || dm;
  });
};
U.slice = function(t, e) {
  return Y(vm.call(this, t, e));
};
const Qw = /-([a-z])/g;
function k_(t) {
  return t.replace(Qw, (e, n) => n.toUpperCase());
}
U.ready = function(t) {
  const e = () => setTimeout(t, 0, Y);
  return Ae.readyState !== "loading" ? e() : Ae.addEventListener("DOMContentLoaded", e), this;
};
U.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = Y(e);
    n.replaceWith(n.children());
  }), this;
};
U.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + Ws.pageYOffset,
    left: e.left + Ws.pageXOffset
  };
};
U.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = Le(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const o = t.ownerDocument;
    let s = t.offsetParent || o.documentElement;
    for (; (s === o.body || s === o.documentElement) && Le(s, "position") === "static"; )
      s = s.parentNode;
    if (s !== t && Et(s)) {
      const r = Y(s).offset();
      n.top -= r.top + fe(s, "borderTopWidth"), n.left -= r.left + fe(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - fe(t, "marginTop"),
    left: n.left - fe(t, "marginLeft")
  };
};
const xm = {
  /* GENERAL */
  class: "className",
  contenteditable: "contentEditable",
  /* LABEL */
  for: "htmlFor",
  /* INPUT */
  readonly: "readOnly",
  maxlength: "maxLength",
  tabindex: "tabIndex",
  /* TABLE */
  colspan: "colSpan",
  rowspan: "rowSpan",
  /* IMAGE */
  usemap: "useMap"
};
U.prop = function(t, e) {
  if (t) {
    if (Pt(t))
      return t = xm[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, o) => {
        o[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
U.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[xm[t] || t];
  });
};
const t$ = /^--/;
function x_(t) {
  return t$.test(t);
}
const ga = {}, { style: e$ } = pm, n$ = ["webkit", "moz", "ms"];
function o$(t, e = x_(t)) {
  if (e)
    return t;
  if (!ga[t]) {
    const n = k_(t), o = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${n$.join(`${o} `)}${o}`.split(" ");
    At(s, (r, l) => {
      if (l in e$)
        return ga[t] = l, !1;
    });
  }
  return ga[t];
}
const r$ = {
  animationIterationCount: !0,
  columnCount: !0,
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
  zIndex: !0
};
function Sm(t, e, n = x_(t)) {
  return !n && !r$[t] && bm(e) ? `${e}px` : e;
}
function i$(t, e) {
  if (Pt(t)) {
    const n = x_(t);
    return t = o$(t, n), arguments.length < 2 ? this[0] && Le(this[0], t, n) : t ? (e = Sm(t, e, n), this.each((o, s) => {
      Et(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
U.css = i$;
function Cm(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const s$ = /^\s+|\s+$/;
function df(t, e) {
  const n = t.dataset[e] || t.dataset[k_(e)];
  return s$.test(n) ? n : Cm(JSON.parse, n);
}
function l$(t, e, n) {
  n = Cm(JSON.stringify, n), t.dataset[k_(e)] = n;
}
function c$(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const o in this[0].dataset)
      n[o] = df(this[0], o);
    return n;
  }
  if (Pt(t))
    return arguments.length < 2 ? this[0] && df(this[0], t) : Ft(e) ? this : this.each((n, o) => {
      l$(o, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
U.data = c$;
function Em(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
At([!0, !1], (t, e) => {
  At(["Width", "Height"], (n, o) => {
    const s = `${e ? "outer" : "inner"}${o}`;
    U[s] = function(r) {
      if (this[0])
        return bo(this[0]) ? e ? this[0][`inner${o}`] : this[0].document.documentElement[`client${o}`] : wo(this[0]) ? Em(this[0], o) : this[0][`${e ? "offset" : "client"}${o}`] + (r && e ? fe(this[0], `margin${n ? "Top" : "Left"}`) + fe(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
At(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  U[n] = function(o) {
    if (!this[0])
      return Ft(o) ? void 0 : this;
    if (!arguments.length)
      return bo(this[0]) ? this[0].document.documentElement[`client${e}`] : wo(this[0]) ? Em(this[0], e) : this[0].getBoundingClientRect()[n] - uf(this[0], !t);
    const s = parseInt(o, 10);
    return this.each((r, l) => {
      if (!Et(l))
        return;
      const c = Le(l, "boxSizing");
      l.style[n] = Sm(n, s + (c === "border-box" ? uf(l, !t) : 0));
    });
  };
});
const pf = "___cd";
U.toggle = function(t) {
  return this.each((e, n) => {
    if (!Et(n))
      return;
    (Ft(t) ? ff(n) : t) ? (n.style.display = n[pf] || "", ff(n) && (n.style.display = jw(n.tagName))) : (n[pf] = Le(n, "display"), n.style.display = "none");
  });
};
U.hide = function() {
  return this.toggle(!1);
};
U.show = function() {
  return this.toggle(!0);
};
const mf = "___ce", S_ = ".", C_ = { focus: "focusin", blur: "focusout" }, Tm = { mouseenter: "mouseover", mouseleave: "mouseout" }, a$ = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function E_(t) {
  return Tm[t] || C_[t] || t;
}
function T_(t) {
  const e = t.split(S_);
  return [e[0], e.slice(1).sort()];
}
U.trigger = function(t, e) {
  if (Pt(t)) {
    const [o, s] = T_(t), r = E_(o);
    if (!r)
      return this;
    const l = a$.test(r) ? "MouseEvents" : "HTMLEvents";
    t = Ae.createEvent(l), t.initEvent(r, !0, !0), t.namespace = s.join(S_), t.___ot = o;
  }
  t.___td = e;
  const n = t.___ot in C_;
  return this.each((o, s) => {
    n && On(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function Am(t) {
  return t[mf] = t[mf] || {};
}
function _$(t, e, n, o, s) {
  const r = Am(t);
  r[e] = r[e] || [], r[e].push([n, o, s]), t.addEventListener(e, s);
}
function Lm(t, e) {
  return !e || !b_.call(e, (n) => t.indexOf(n) < 0);
}
function Is(t, e, n, o, s) {
  const r = Am(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([l, c, _]) => {
      if (s && _.guid !== s.guid || !Lm(l, n) || o && o !== c)
        return !0;
      t.removeEventListener(e, _);
    }));
  else
    for (e in r)
      Is(t, e, n, o, s);
}
U.off = function(t, e, n) {
  if (Ft(t))
    this.each((o, s) => {
      !Et(s) && !wo(s) && !bo(s) || Is(s);
    });
  else if (Pt(t))
    On(e) && (n = e, e = ""), At(Yc(t), (o, s) => {
      const [r, l] = T_(s), c = E_(r);
      this.each((_, h) => {
        !Et(h) && !wo(h) && !bo(h) || Is(h, c, l, e, n);
      });
    });
  else
    for (const o in t)
      this.off(o, t[o]);
  return this;
};
U.remove = function(t) {
  return dn(this, t).detach().off(), this;
};
U.replaceWith = function(t) {
  return this.before(t).remove();
};
U.replaceAll = function(t) {
  return Y(t).replaceWith(this), this;
};
function u$(t, e, n, o, s) {
  if (!Pt(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return Pt(e) || (Ft(e) || Or(e) ? e = "" : Ft(n) ? (n = e, e = "") : (o = n, n = e, e = "")), On(o) || (o = n, n = void 0), o ? (At(Yc(t), (r, l) => {
    const [c, _] = T_(l), h = E_(c), i = c in Tm, d = c in C_;
    h && this.each((u, a) => {
      if (!Et(a) && !wo(a) && !bo(a))
        return;
      const f = function(v) {
        if (v.target[`___i${v.type}`])
          return v.stopImmediatePropagation();
        if (v.namespace && !Lm(_, v.namespace.split(S_)) || !e && (d && (v.target !== a || v.___ot === h) || i && v.relatedTarget && a.contains(v.relatedTarget)))
          return;
        let p = a;
        if (e) {
          let g = v.target;
          for (; !wm(g, e); )
            if (g === a || (g = g.parentNode, !g))
              return;
          p = g;
        }
        Object.defineProperty(v, "currentTarget", {
          configurable: !0,
          get() {
            return p;
          }
        }), Object.defineProperty(v, "delegateTarget", {
          configurable: !0,
          get() {
            return a;
          }
        }), Object.defineProperty(v, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const m = o.call(p, v, v.___td);
        s && Is(a, h, _, e, f), m === !1 && (v.preventDefault(), v.stopPropagation());
      };
      f.guid = o.guid = o.guid || Y.guid++, _$(a, h, _, e, f);
    });
  }), this) : this;
}
U.on = u$;
function f$(t, e, n, o) {
  return this.on(t, e, n, o, !0);
}
U.one = f$;
const h$ = /\r?\n/g;
function d$(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(h$, `\r
`))}`;
}
const p$ = /file|reset|submit|button|image/i, Mm = /radio|checkbox/i;
U.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    At(n.elements || [n], (o, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || p$.test(s.type) || Mm.test(s.type) && !s.checked)
        return;
      const r = km(s);
      if (!Ft(r)) {
        const l = zc(r) ? r : [r];
        At(l, (c, _) => {
          t += d$(s.name, _);
        });
      }
    });
  }), t.slice(1);
};
window.$ = Y;
/*! js-cookie v3.0.1 | MIT */
function zi(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var o in n)
      t[o] = n[o];
  }
  return t;
}
var m$ = {
  read: function(t) {
    return t[0] === '"' && (t = t.slice(1, -1)), t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(t) {
    return encodeURIComponent(t).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function Oa(t, e) {
  function n(s, r, l) {
    if (!(typeof document > "u")) {
      l = zi({}, e, l), typeof l.expires == "number" && (l.expires = new Date(Date.now() + l.expires * 864e5)), l.expires && (l.expires = l.expires.toUTCString()), s = encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var c = "";
      for (var _ in l)
        l[_] && (c += "; " + _, l[_] !== !0 && (c += "=" + l[_].split(";")[0]));
      return document.cookie = s + "=" + t.write(r, s) + c;
    }
  }
  function o(s) {
    if (!(typeof document > "u" || arguments.length && !s)) {
      for (var r = document.cookie ? document.cookie.split("; ") : [], l = {}, c = 0; c < r.length; c++) {
        var _ = r[c].split("="), h = _.slice(1).join("=");
        try {
          var i = decodeURIComponent(_[0]);
          if (l[i] = t.read(h, i), s === i)
            break;
        } catch {
        }
      }
      return s ? l[s] : l;
    }
  }
  return Object.create(
    {
      set: n,
      get: o,
      remove: function(s, r) {
        n(
          s,
          "",
          zi({}, r, {
            expires: -1
          })
        );
      },
      withAttributes: function(s) {
        return Oa(this.converter, zi({}, this.attributes, s));
      },
      withConverter: function(s) {
        return Oa(zi({}, this.converter, s), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(e) },
      converter: { value: Object.freeze(t) }
    }
  );
}
var g$ = Oa(m$, { path: "/" });
window.$ && Object.assign(window.$, { cookie: g$ });
var Rm = function(t, e, n, o) {
  var s;
  e[0] = 0;
  for (var r = 1; r < e.length; r++) {
    var l = e[r++], c = e[r] ? (e[0] |= l ? 1 : 2, n[e[r++]]) : e[++r];
    l === 3 ? o[0] = c : l === 4 ? o[1] = Object.assign(o[1] || {}, c) : l === 5 ? (o[1] = o[1] || {})[e[++r]] = c : l === 6 ? o[1][e[++r]] += c + "" : l ? (s = t.apply(c, Rm(t, c, n, ["", null])), o.push(s), c[0] ? e[0] |= 2 : (e[r - 2] = 0, e[r] = s)) : o.push(c);
  }
  return o;
}, gf = /* @__PURE__ */ new Map();
function Nm(t) {
  var e = gf.get(this);
  return e || (e = /* @__PURE__ */ new Map(), gf.set(this, e)), (e = Rm(this, e.get(t) || (e.set(t, e = function(n) {
    for (var o, s, r = 1, l = "", c = "", _ = [0], h = function(u) {
      r === 1 && (u || (l = l.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? _.push(0, u, l) : r === 3 && (u || l) ? (_.push(3, u, l), r = 2) : r === 2 && l === "..." && u ? _.push(4, u, 0) : r === 2 && l && !u ? _.push(5, 0, !0, l) : r >= 5 && ((l || !u && r === 5) && (_.push(r, 0, l, s), r = 6), u && (_.push(r, u, 0, s), r = 6)), l = "";
    }, i = 0; i < n.length; i++) {
      i && (r === 1 && h(), h(i));
      for (var d = 0; d < n[i].length; d++)
        o = n[i][d], r === 1 ? o === "<" ? (h(), _ = [_], r = 3) : l += o : r === 4 ? l === "--" && o === ">" ? (r = 1, l = "") : l = o + l[0] : c ? o === c ? c = "" : l += o : o === '"' || o === "'" ? c = o : o === ">" ? (h(), r = 1) : r && (o === "=" ? (r = 5, s = l, l = "") : o === "/" && (r < 5 || n[i][d + 1] === ">") ? (h(), r === 3 && (_ = _[0]), r = _, (_ = _[0]).push(2, 0, r), r = 0) : o === " " || o === "	" || o === `
` || o === "\r" ? (h(), r = 2) : l += o), r === 3 && l === "!--" && (r = 4, _ = _[0]);
    }
    return h(), _;
  }(t)), e), arguments, [])).length > 1 ? e : e[0];
}
var Ni, _t, Dm, Pm, tr, yf, Om, Fs = {}, Hm = [], y$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ee(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Wm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Bs(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ni.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return er(t, l, o, s, null);
}
function er(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Dm };
  return s == null && _t.vnode != null && _t.vnode(r), r;
}
function v$() {
  return { current: null };
}
function Di(t) {
  return t.children;
}
function nr(t, e) {
  this.props = t, this.context = e;
}
function Hr(t, e) {
  if (e == null)
    return t.__ ? Hr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Hr(t) : null;
}
function Um(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Um(t);
  }
}
function Ha(t) {
  (!t.__d && (t.__d = !0) && tr.push(t) && !js.__r++ || yf !== _t.debounceRendering) && ((yf = _t.debounceRendering) || setTimeout)(js);
}
function js() {
  for (var t; js.__r = tr.length; )
    t = tr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), tr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ee({}, r)).__v = r.__v + 1, A_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Hr(r), r.__h), zm(o, r), r.__e != l && Um(r)));
    });
}
function Im(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Hm, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? er(null, a, null, null, a) : Array.isArray(a) ? er(Di, { children: a }, null, null, null) : a.__b > 0 ? er(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      A_(t, a, u = u || Fs, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Fm(a, _, t) : _ = jm(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Hr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Ym(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Vm(p[i], p[++i], p[++i]);
}
function Fm(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Fm(o, e, n) : jm(n, o, o, s, o.__e, e));
  return e;
}
function Bm(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    Bm(n, e);
  }) : e.push(t)), e;
}
function jm(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function b$(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || zs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || zs(t, r, e[r], n[r], o);
}
function vf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || y$.test(e) ? n : n + "px";
}
function zs(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || vf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || vf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? wf : bf, r) : t.removeEventListener(e, r ? wf : bf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function bf(t) {
  this.l[t.type + !1](_t.event ? _t.event(t) : t);
}
function wf(t) {
  this.l[t.type + !0](_t.event ? _t.event(t) : t);
}
function A_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = _t.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new nr(p, g), i.constructor = b, i.render = $$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ee({}, i.__s)), Ee(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = _t.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ee(Ee({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Di && h.key == null ? h.props.children : h, Im(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = w$(n.__e, e, n, o, s, r, l, _);
    (h = _t.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), _t.__e(k, e, n);
  }
}
function zm(t, e) {
  _t.__c && _t.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      _t.__e(o, n.__v);
    }
  });
}
function w$(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && Ni.call(t.childNodes), h = (d = n.props || Fs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (b$(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Im(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Hr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Wm(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && zs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && zs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Vm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    _t.__e(o, n);
  }
}
function Ym(t, e, n) {
  var o, s;
  if (_t.unmount && _t.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Vm(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        _t.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Ym(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Wm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function $$(t, e, n) {
  return this.constructor(t, n);
}
function qm(t, e, n) {
  var o, s, r;
  _t.__ && _t.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], A_(e, t = (!o && n || e).__k = Bs(Di, null, [t]), s || Fs, Fs, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Ni.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), zm(r, t);
}
function Gm(t, e) {
  qm(t, e, Gm);
}
function k$(t, e, n) {
  var o, s, r, l = Ee({}, t.props);
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? Ni.call(arguments, 2) : n), er(t.type, l, o || t.key, s || t.ref, null);
}
function x$(t, e) {
  var n = { __c: e = "__cC" + Om++, __: t, Consumer: function(o, s) {
    return o.children(s);
  }, Provider: function(o) {
    var s, r;
    return this.getChildContext || (s = [], (r = {})[e] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(l) {
      this.props.value !== l.value && s.some(Ha);
    }, this.sub = function(l) {
      s.push(l);
      var c = l.componentWillUnmount;
      l.componentWillUnmount = function() {
        s.splice(s.indexOf(l), 1), c && c.call(l);
      };
    }), o.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
Ni = Hm.slice, _t = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Dm = 0, Pm = function(t) {
  return t != null && t.constructor === void 0;
}, nr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ee({}, this.state), typeof t == "function" && (t = t(Ee({}, n), this.props)), t && Ee(n, t), t != null && this.__v && (e && this._sb.push(e), Ha(this));
}, nr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ha(this));
}, nr.prototype.render = Di, tr = [], js.__r = 0, Om = 0;
const S$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: nr,
  Fragment: Di,
  cloneElement: k$,
  createContext: x$,
  createElement: Bs,
  createRef: v$,
  h: Bs,
  hydrate: Gm,
  get isValidElement() {
    return Pm;
  },
  get options() {
    return _t;
  },
  render: qm,
  toChildArray: Bm
}, Symbol.toStringTag, { value: "Module" }));
var C$ = Nm.bind(Bs);
Object.assign(window, { htm: Nm, html: C$, preact: S$ });
let E$ = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var ni, He, ce, Qn, to, ls;
const K_ = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    T(this, to);
    T(this, ni, void 0);
    T(this, He, void 0);
    T(this, ce, void 0);
    T(this, Qn, void 0);
    H(this, ni, n), H(this, He, `ZUI_STORE:${e ?? E$()}`), H(this, ce, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return y(this, ni);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (y(this, Qn) || H(this, Qn, new K_(y(this, He), "session")), y(this, Qn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const o = y(this, ce).getItem(W(this, to, ls).call(this, e));
    return typeof o == "string" ? JSON.parse(o) : o ?? n;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(e, n) {
    if (n == null)
      return this.remove(e);
    y(this, ce).setItem(W(this, to, ls).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    y(this, ce).removeItem(W(this, to, ls).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < y(this, ce).length; n++) {
      const o = y(this, ce).key(n);
      if (o != null && o.startsWith(y(this, He))) {
        const s = y(this, ce).getItem(o);
        typeof s == "string" && e(o.substring(y(this, He).length + 1), JSON.parse(s));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const e = {};
    return this.each((n, o) => {
      e[n] = o;
    }), e;
  }
};
let Vs = K_;
ni = new WeakMap(), He = new WeakMap(), ce = new WeakMap(), Qn = new WeakMap(), to = new WeakSet(), ls = function(e) {
  return `${y(this, He)}:${e}`;
};
const T$ = new Vs("DEFAULT");
function A$(t, e = "local") {
  return new Vs(t, e);
}
Object.assign(T$, { create: A$ });
var Xm, yt, Jm, or, $f, Km = {}, Zm = [], L$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Qm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ya(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Jm };
  return s == null && yt.vnode != null && yt.vnode(r), r;
}
function L_(t) {
  return t.children;
}
function rr(t, e) {
  this.props = t, this.context = e;
}
function Wr(t, e) {
  if (e == null)
    return t.__ ? Wr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Wr(t) : null;
}
function tg(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return tg(t);
  }
}
function kf(t) {
  (!t.__d && (t.__d = !0) && or.push(t) && !Ys.__r++ || $f !== yt.debounceRendering) && (($f = yt.debounceRendering) || setTimeout)(Ys);
}
function Ys() {
  for (var t; Ys.__r = or.length; )
    t = or.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), or = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ze({}, r)).__v = r.__v + 1, rg(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Wr(r), r.__h), R$(o, r), r.__e != l && tg(r)));
    });
}
function eg(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Zm, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ya(null, a, null, null, a) : Array.isArray(a) ? ya(L_, { children: a }, null, null, null) : a.__b > 0 ? ya(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      rg(t, a, u = u || Km, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = ng(a, _, t) : _ = og(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Wr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && sg(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      ig(p[i], p[++i], p[++i]);
}
function ng(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? ng(o, e, n) : og(n, o, o, s, o.__e, e));
  return e;
}
function og(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function M$(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || qs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || qs(t, r, e[r], n[r], o);
}
function xf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || L$.test(e) ? n : n + "px";
}
function qs(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || xf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || xf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Cf : Sf, r) : t.removeEventListener(e, r ? Cf : Sf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Sf(t) {
  this.l[t.type + !1](yt.event ? yt.event(t) : t);
}
function Cf(t) {
  this.l[t.type + !0](yt.event ? yt.event(t) : t);
}
function rg(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = yt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new rr(p, g), i.constructor = b, i.render = D$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ze({}, i.__s)), Ze(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = yt.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ze(Ze({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === L_ && h.key == null ? h.props.children : h, eg(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = N$(n.__e, e, n, o, s, r, l, _);
    (h = yt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), yt.__e(k, e, n);
  }
}
function R$(t, e) {
  yt.__c && yt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      yt.__e(o, n.__v);
    }
  });
}
function N$(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && Xm.call(t.childNodes), h = (d = n.props || Km).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (M$(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, eg(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Wr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Qm(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && qs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && qs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function ig(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    yt.__e(o, n);
  }
}
function sg(t, e, n) {
  var o, s;
  if (yt.unmount && yt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || ig(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        yt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && sg(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Qm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function D$(t, e, n) {
  return this.constructor(t, n);
}
Xm = Zm.slice, yt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Jm = 0, rr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof t == "function" && (t = t(Ze({}, n), this.props)), t && Ze(n, t), t != null && this.__v && (e && this._sb.push(e), kf(this));
}, rr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), kf(this));
}, rr.prototype.render = L_, or = [], Ys.__r = 0;
var P$ = 0;
function va(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --P$, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return yt.vnode && yt.vnode(_), _;
}
function O$(t) {
  if (t.indexOf("#") === 0 && (t = t.slice(1)), t.length === 3 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), t.length !== 6)
    throw new Error(`Invalid HEX color "${t}".`);
  return [
    parseInt(t.slice(0, 2), 16),
    // r
    parseInt(t.slice(2, 4), 16),
    // g
    parseInt(t.slice(4, 6), 16)
    // b
  ];
}
function H$(t) {
  const [e, n, o] = typeof t == "string" ? O$(t) : t;
  return e * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function Ef(t, e) {
  return H$(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function Tf(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function W$(t, e, n) {
  t = t % 360 / 360, e = Tf(e), n = Tf(n);
  const o = n <= 0.5 ? n * (e + 1) : n + e - n * e, s = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? s + (o - s) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? s + (o - s) * (2 / 3 - l) * 6 : s);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function U$(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function I$(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t = t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t = t[0].toUpperCase() : t = t.length <= e ? t : t.substring(0, e), t;
}
let F$ = class extends rr {
  render() {
    const {
      className: e,
      style: n,
      size: o = "",
      circle: s,
      rounded: r,
      background: l,
      foreColor: c,
      text: _,
      code: h,
      maxTextLength: i = 2,
      src: d,
      hueDistance: u = 43,
      saturation: a = 0.4,
      lightness: f = 0.6,
      children: v,
      ...p
    } = this.props, m = ["avatar", e], g = { ...n, background: l, color: c };
    let w = 32;
    o && (typeof o == "number" ? (g.width = `${o}px`, g.height = `${o}px`, g.fontSize = `${Math.max(12, Math.round(o / 2))}px`, w = o) : (m.push(`size-${o}`), w = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), s ? m.push("circle") : r && (typeof r == "number" ? g.borderRadius = `${r}px` : m.push(`rounded-${r}`));
    let $;
    if (d)
      m.push("has-img"), $ = /* @__PURE__ */ va("img", { className: "avatar-img", src: d, alt: _ });
    else if (_ != null && _.length) {
      const S = I$(_, i);
      if (m.push("has-text", `has-text-${S.length}`), l)
        !c && l && (g.color = Ef(l));
      else {
        const E = h ?? _, b = (typeof E == "number" ? E : U$(E)) * u % 360;
        if (g.background = `hsl(${b},${a * 100}%,${f * 100}%)`, !c) {
          const k = W$(b, a, f);
          g.color = Ef(k);
        }
      }
      let A;
      w && w < 14 * S.length && (A = { transform: `scale(${w / (14 * S.length)})`, whiteSpace: "nowrap" }), $ = /* @__PURE__ */ va("div", { "data-actualSize": w, className: "avatar-text", style: A, children: S });
    }
    return /* @__PURE__ */ va(
      "div",
      {
        className: F(m),
        style: g,
        ...p,
        children: [
          $,
          v
        ]
      }
    );
  }
};
class Af extends Lt {
}
M(Af, "NAME", "avatar"), M(Af, "Component", F$);
class Lf extends Lt {
}
M(Lf, "NAME", "btngroup"), M(Lf, "Component", Bp);
var Gc, it, lg, ir, Mf, Gs = {}, cg = [], B$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ag(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ur(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Gc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return cs(t, l, o, s, null);
}
function cs(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++lg };
  return s == null && it.vnode != null && it.vnode(r), r;
}
function j$() {
  return { current: null };
}
function Xc(t) {
  return t.children;
}
function sr(t, e) {
  this.props = t, this.context = e;
}
function Ir(t, e) {
  if (e == null)
    return t.__ ? Ir(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Ir(t) : null;
}
function _g(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return _g(t);
  }
}
function Rf(t) {
  (!t.__d && (t.__d = !0) && ir.push(t) && !Xs.__r++ || Mf !== it.debounceRendering) && ((Mf = it.debounceRendering) || setTimeout)(Xs);
}
function Xs() {
  for (var t; Xs.__r = ir.length; )
    t = ir.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ir = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Qe({}, r)).__v = r.__v + 1, M_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ir(r), r.__h), dg(o, r), r.__e != l && _g(r)));
    });
}
function ug(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || cg, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? cs(null, a, null, null, a) : Array.isArray(a) ? cs(Xc, { children: a }, null, null, null) : a.__b > 0 ? cs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      M_(t, a, u = u || Gs, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = fg(a, _, t) : _ = hg(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Ir(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && mg(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      pg(p[i], p[++i], p[++i]);
}
function fg(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? fg(o, e, n) : hg(n, o, o, s, o.__e, e));
  return e;
}
function hg(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function z$(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Js(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Js(t, r, e[r], n[r], o);
}
function Nf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || B$.test(e) ? n : n + "px";
}
function Js(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Nf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Nf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Pf : Df, r) : t.removeEventListener(e, r ? Pf : Df, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Df(t) {
  this.l[t.type + !1](it.event ? it.event(t) : t);
}
function Pf(t) {
  this.l[t.type + !0](it.event ? it.event(t) : t);
}
function M_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = it.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new sr(p, g), i.constructor = b, i.render = Y$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Qe({}, i.__s)), Qe(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = it.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Qe(Qe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Xc && h.key == null ? h.props.children : h, ug(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = V$(n.__e, e, n, o, s, r, l, _);
    (h = it.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), it.__e(k, e, n);
  }
}
function dg(t, e) {
  it.__c && it.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      it.__e(o, n.__v);
    }
  });
}
function V$(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && Gc.call(t.childNodes), h = (d = n.props || Gs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (z$(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, ug(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ir(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && ag(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Js(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Js(t, "checked", f, d.checked, !1));
  }
  return t;
}
function pg(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    it.__e(o, n);
  }
}
function mg(t, e, n) {
  var o, s;
  if (it.unmount && it.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || pg(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        it.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && mg(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || ag(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Y$(t, e, n) {
  return this.constructor(t, n);
}
function q$(t, e, n) {
  var o, s, r;
  it.__ && it.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], M_(e, t = (!o && n || e).__k = Ur(Xc, null, [t]), s || Gs, Gs, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Gc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), dg(r, t);
}
Gc = cg.slice, it = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, lg = 0, sr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qe({}, this.state), typeof t == "function" && (t = t(Qe({}, n), this.props)), t && Qe(n, t), t != null && this.__v && (e && this._sb.push(e), Rf(this));
}, sr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Rf(this));
}, sr.prototype.render = Xc, ir = [], Xs.__r = 0;
var G$ = 0;
function J(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --G$, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return it.vnode && it.vnode(_), _;
}
var gg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Q = {}, X$ = {
  get exports() {
    return Q;
  },
  set exports(t) {
    Q = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(gg, function() {
    var n = 1e3, o = 6e4, s = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", i = "week", d = "month", u = "quarter", a = "year", f = "date", v = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var C = ["th", "st", "nd", "rd"], x = N % 100;
      return "[" + N + (C[(x - 20) % 10] || C[x] || C[0]) + "]";
    } }, w = function(N, C, x) {
      var D = String(N);
      return !D || D.length >= C ? N : "" + Array(C + 1 - D.length).join(x) + N;
    }, $ = { s: w, z: function(N) {
      var C = -N.utcOffset(), x = Math.abs(C), D = Math.floor(x / 60), L = x % 60;
      return (C <= 0 ? "+" : "-") + w(D, 2, "0") + ":" + w(L, 2, "0");
    }, m: function N(C, x) {
      if (C.date() < x.date())
        return -N(x, C);
      var D = 12 * (x.year() - C.year()) + (x.month() - C.month()), L = C.clone().add(D, d), O = x - L < 0, P = C.clone().add(D + (O ? -1 : 1), d);
      return +(-(D + (x - L) / (O ? L - P : P - L)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: a, w: i, d: h, D: f, h: _, m: c, s: l, ms: r, Q: u }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, S = "en", A = {};
    A[S] = g;
    var E = function(N) {
      return N instanceof q;
    }, b = function N(C, x, D) {
      var L;
      if (!C)
        return S;
      if (typeof C == "string") {
        var O = C.toLowerCase();
        A[O] && (L = O), x && (A[O] = x, L = O);
        var P = C.split("-");
        if (!L && P.length > 1)
          return N(P[0]);
      } else {
        var I = C.name;
        A[I] = C, L = I;
      }
      return !D && L && (S = L), L || !D && S;
    }, k = function(N, C) {
      if (E(N))
        return N.clone();
      var x = typeof C == "object" ? C : {};
      return x.date = N, x.args = arguments, new q(x);
    }, R = $;
    R.l = b, R.i = E, R.w = function(N, C) {
      return k(N, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var q = function() {
      function N(x) {
        this.$L = b(x.locale, null, !0), this.parse(x);
      }
      var C = N.prototype;
      return C.parse = function(x) {
        this.$d = function(D) {
          var L = D.date, O = D.utc;
          if (L === null)
            return new Date(NaN);
          if (R.u(L))
            return new Date();
          if (L instanceof Date)
            return new Date(L);
          if (typeof L == "string" && !/Z$/i.test(L)) {
            var P = L.match(p);
            if (P) {
              var I = P[2] - 1 || 0, V = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V);
            }
          }
          return new Date(L);
        }(x), this.$x = x.x || {}, this.init();
      }, C.init = function() {
        var x = this.$d;
        this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
      }, C.$utils = function() {
        return R;
      }, C.isValid = function() {
        return this.$d.toString() !== v;
      }, C.isSame = function(x, D) {
        var L = k(x);
        return this.startOf(D) <= L && L <= this.endOf(D);
      }, C.isAfter = function(x, D) {
        return k(x) < this.startOf(D);
      }, C.isBefore = function(x, D) {
        return this.endOf(D) < k(x);
      }, C.$g = function(x, D, L) {
        return R.u(x) ? this[D] : this.set(L, x);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(x, D) {
        var L = this, O = !!R.u(D) || D, P = R.p(x), I = function(ct, X) {
          var at = R.w(L.$u ? Date.UTC(L.$y, X, ct) : new Date(L.$y, X, ct), L);
          return O ? at : at.endOf(h);
        }, V = function(ct, X) {
          return R.w(L.toDate()[ct].apply(L.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), L);
        }, z = this.$W, K = this.$M, xt = this.$D, B = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, K) : I(0, K + 1);
          case i:
            var Z = this.$locale().weekStart || 0, kt = (z < Z ? z + 7 : z) - Z;
            return I(O ? xt - kt : xt + (6 - kt), K);
          case h:
          case f:
            return V(B + "Hours", 0);
          case _:
            return V(B + "Minutes", 1);
          case c:
            return V(B + "Seconds", 2);
          case l:
            return V(B + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, C.endOf = function(x) {
        return this.startOf(x, !1);
      }, C.$set = function(x, D) {
        var L, O = R.p(x), P = "set" + (this.$u ? "UTC" : ""), I = (L = {}, L[h] = P + "Date", L[f] = P + "Date", L[d] = P + "Month", L[a] = P + "FullYear", L[_] = P + "Hours", L[c] = P + "Minutes", L[l] = P + "Seconds", L[r] = P + "Milliseconds", L)[O], V = O === h ? this.$D + (D - this.$W) : D;
        if (O === d || O === a) {
          var z = this.clone().set(f, 1);
          z.$d[I](V), z.init(), this.$d = z.set(f, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          I && this.$d[I](V);
        return this.init(), this;
      }, C.set = function(x, D) {
        return this.clone().$set(x, D);
      }, C.get = function(x) {
        return this[R.p(x)]();
      }, C.add = function(x, D) {
        var L, O = this;
        x = Number(x);
        var P = R.p(D), I = function(K) {
          var xt = k(O);
          return R.w(xt.date(xt.date() + Math.round(K * x)), O);
        };
        if (P === d)
          return this.set(d, this.$M + x);
        if (P === a)
          return this.set(a, this.$y + x);
        if (P === h)
          return I(1);
        if (P === i)
          return I(7);
        var V = (L = {}, L[c] = o, L[_] = s, L[l] = n, L)[P] || 1, z = this.$d.getTime() + x * V;
        return R.w(z, this);
      }, C.subtract = function(x, D) {
        return this.add(-1 * x, D);
      }, C.format = function(x) {
        var D = this, L = this.$locale();
        if (!this.isValid())
          return L.invalidDate || v;
        var O = x || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), I = this.$H, V = this.$m, z = this.$M, K = L.weekdays, xt = L.months, B = function(X, at, Ot, Ht) {
          return X && (X[at] || X(D, O)) || Ot[at].slice(0, Ht);
        }, Z = function(X) {
          return R.s(I % 12 || 12, X, "0");
        }, kt = L.meridiem || function(X, at, Ot) {
          var Ht = X < 12 ? "AM" : "PM";
          return Ot ? Ht.toLowerCase() : Ht;
        }, ct = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: R.s(z + 1, 2, "0"), MMM: B(L.monthsShort, z, xt, 3), MMMM: B(xt, z), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: B(L.weekdaysMin, this.$W, K, 2), ddd: B(L.weekdaysShort, this.$W, K, 3), dddd: K[this.$W], H: String(I), HH: R.s(I, 2, "0"), h: Z(1), hh: Z(2), a: kt(I, V, !0), A: kt(I, V, !1), m: String(V), mm: R.s(V, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(X, at) {
          return at || ct[X] || P.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(x, D, L) {
        var O, P = R.p(D), I = k(x), V = (I.utcOffset() - this.utcOffset()) * o, z = this - I, K = R.m(this, I);
        return K = (O = {}, O[a] = K / 12, O[d] = K, O[u] = K / 3, O[i] = (z - V) / 6048e5, O[h] = (z - V) / 864e5, O[_] = z / s, O[c] = z / o, O[l] = z / n, O)[P] || z, L ? K : R.a(K);
      }, C.daysInMonth = function() {
        return this.endOf(d).$D;
      }, C.$locale = function() {
        return A[this.$L];
      }, C.locale = function(x, D) {
        if (!x)
          return this.$L;
        var L = this.clone(), O = b(x, D, !0);
        return O && (L.$L = O), L;
      }, C.clone = function() {
        return R.w(this.$d, this);
      }, C.toDate = function() {
        return new Date(this.valueOf());
      }, C.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, C.toISOString = function() {
        return this.$d.toISOString();
      }, C.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), j = q.prototype;
    return k.prototype = j, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", f]].forEach(function(N) {
      j[N[1]] = function(C) {
        return this.$g(C, N[0], N[1]);
      };
    }), k.extend = function(N, C) {
      return N.$i || (N(C, q, k), N.$i = !0), k;
    }, k.locale = b, k.isDayjs = E, k.unix = function(N) {
      return k(1e3 * N);
    }, k.en = A[S], k.Ls = A, k.p = {}, k;
  });
})(X$);
const Wa = (t = 0, e = 0) => {
  const n = [];
  for (let o = t; o <= e; o++)
    n.push(o);
  return n;
}, yg = (t, e) => {
  const n = Math.ceil(t.length / e);
  return new Array(e).fill({}).map((o, s) => t.slice(s * n, (s + 1) * n));
}, J$ = (t) => {
  const { format: e, minDate: n, maxDate: o, tagDate: s, DATEROWCOUNT: r, showOtherMonth: l, clickDay: c, selectedDate: _, handleChangePanel: h, showToday: i, handleChange: d, clickToday: u } = t, a = (R) => Q(R).isValid() ? Q(R).add(1, "months").format(e) : "", f = (R) => Q(R).isValid() ? Q(R).subtract(1, "months").format(e) : "", v = () => {
    const R = f(_);
    d(R, !1);
  }, p = () => {
    const R = a(_);
    d(R, !1);
  }, m = () => {
    d("", !0);
  }, g = () => {
    d(_, !0);
  }, w = (R, q, j, N) => {
    const C = Q(), x = Q(_), D = new Array(R);
    for (let L = 0; L < R; L++) {
      const O = q + L + 1, P = j.set("date", O), I = N && !l ? !0 : n && P.isBefore(n, "date") || o && P.isAfter(o, "date");
      D[L] = {
        isSelected: x.isSame(j.set("date", O), "date"),
        isToday: C.isSame(P, "date"),
        isDisable: !!I,
        isTag: !!(s != null && s.includes(P.format(e))),
        date: P,
        isOtherMonth: N,
        onClick: () => I ? {} : c(P)
      };
    }
    return D;
  }, $ = () => {
    const R = Q(_), q = Q(), j = _ ? R : q, N = j.set("date", 1).day(), C = N === 0 ? 6 : N - 1, x = j.subtract(1, "month"), L = Number(x.endOf("month").get("date")) - C;
    return w(C, L, x, !0);
  }, S = () => {
    const R = Q(_), q = Q(), j = _ ? R : q, N = j.set("date", 1).day(), C = N === 0 ? 6 : N - 1, x = j.endOf("month").get("date"), D = j.add(1, "month"), L = 7 * 6 % (C + x);
    return w(L, 0, D, !0);
  }, A = () => {
    const R = _, q = Q(), j = _ ? Q(R) : q, N = j.endOf("month").get("date"), C = w(N, 0, j, !1), x = $(), D = S(), L = [...x, ...C, ...D];
    return yg(L, r);
  }, E = ["一", "二", "三", "四", "五", "六", "日"], b = A(), k = _ || Q().format(e);
  return /* @__PURE__ */ J("div", { className: F("datepicker-calendar-day"), children: [
    /* @__PURE__ */ J("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ J("div", { class: "flex", children: /* @__PURE__ */ J("button", { type: "button", className: "btn ghost", onClick: () => h("year"), children: [
        /* @__PURE__ */ J("span", { children: Q(k).format("YYYY 年 MM 月") }),
        /* @__PURE__ */ J("span", { class: "caret" })
      ] }) }),
      /* @__PURE__ */ J("div", { class: "flex", children: [
        i && /* @__PURE__ */ J("button", { type: "button", className: "btn ghost", onClick: () => {
          u();
        }, children: "今天" }),
        /* @__PURE__ */ J("button", { type: "button", className: "btn ghost", onClick: () => v(), children: /* @__PURE__ */ J("i", { className: "icon icon-angle-left" }) }),
        /* @__PURE__ */ J("button", { type: "button", className: "btn ghost", onClick: () => p(), children: /* @__PURE__ */ J("i", { className: "icon icon-angle-right" }) })
      ] })
    ] }),
    /* @__PURE__ */ J("table", { className: "datepicker-calendar-table not-hide-datepicker", children: [
      /* @__PURE__ */ J("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ J("tr", { children: E.map((R, q) => /* @__PURE__ */ J("th", { children: R }, q)) }) }),
      /* @__PURE__ */ J("tbody", { className: "datepicker-calendar-tbody", children: b.map((R, q) => /* @__PURE__ */ J("tr", { children: R.map((j, N) => {
        const C = ["text-center"];
        return j.isToday && C.push("datepicker-calendar-today"), j.isSelected && C.push("datepicker-calendar-selected-date"), j.isOtherMonth && C.push("datepicker-calendar-other-month"), j.isTag && C.push("datepicker-calendar-tag"), /* @__PURE__ */ J("td", { className: F(C), children: /* @__PURE__ */ J("div", { className: F("btn", "ghost", "datepicker-calendar-date", j.isDisable ? "disabled" : ""), onClick: j.onClick, children: !l && j.isOtherMonth ? "" : Q(j.date).format("DD") }) }, N);
      }) }, q)) })
    ] }),
    /* @__PURE__ */ J("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ J("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ J("span", { children: "清除" }) }),
      /* @__PURE__ */ J("button", { type: "button", className: "btn ghost text-primary", onClick: g, children: /* @__PURE__ */ J("span", { children: "确认" }) })
    ] })
  ] });
};
const K$ = (t) => {
  const { format: e, selectedDate: n, minDate: o, maxDate: s, year: r, handleChangeMonth: l } = t, c = Q(o).format("M"), _ = Q(s).format("M"), h = yg(Wa(1, 12), 3), i = (d, u) => {
    u || l(d);
  };
  return /* @__PURE__ */ J("div", { className: F("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ J("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ J("tbody", { className: "datepicker-calendar-month-table-body", children: h.map((d, u) => /* @__PURE__ */ J("tr", { children: d.map((a, f) => {
    const v = ["text-center"], p = Q(`${r}-${a}-01`).format(e), m = !!(c && Q(n).isBefore(c) || _ && Q(n).isBefore(_));
    return /* @__PURE__ */ J("td", { className: F(v), children: /* @__PURE__ */ J("div", { className: F("btn", "size-sm", "ghost", "datepicker-calendar-month", m ? "disabled" : ""), onClick: () => {
      i(p, m);
    }, children: [
      Q(p).format("MM"),
      " 月"
    ] }) }, f);
  }) }, u)) }) }) });
}, Z$ = (t) => {
  const { selectedDate: e, handleChangeMonth: n } = t;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = Q(e).year(), s = [...Wa(o - 100, o), ...Wa(o + 1, o + 100)], r = (l, c) => {
    var i, d, u;
    if (!(l != null && l.target))
      return;
    const _ = document.querySelectorAll(".datepicker-accordion > ul > li > .datepicker-accordion-title");
    for (let a = 0; a < _.length; a++)
      (i = _[a].nextElementSibling) != null && i.classList.contains("hidden") || (d = _[a].nextElementSibling) == null || d.classList.add("hidden");
    (u = l.target.nextElementSibling) == null || u.classList.toggle("hidden");
    const h = document.querySelector(".datepicker-accordion");
    h && (h.scrollTop + h.clientHeight === h.scrollHeight ? h.scrollTop = 0 : c < o ? h.scrollTop = h.scrollTop - 30 : h.scrollTop = h.scrollTop + 30);
  };
  return /* @__PURE__ */ J("div", { class: "datepicker-accordion scroll-smooth not-hide-datepicker", children: /* @__PURE__ */ J("ul", { children: s.map((l, c) => /* @__PURE__ */ J("li", { id: o === l ? "selected" : "", children: [
    /* @__PURE__ */ J("div", { class: "datepicker-accordion-title", onClick: (_) => r(_, l), children: l }),
    /* @__PURE__ */ J("div", { className: F("datepicker-accordion-content", o === l ? "" : "hidden"), children: Ur(K$, {
      ...t,
      year: l.toString(),
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class Q$ extends sr {
  constructor() {
    super(...arguments);
    M(this, "DATEROWCOUNT", 6);
    M(this, "ref", j$());
    M(this, "state", {
      selectedDate: this.props.date || Q().format("YYYY-MM-DD"),
      type: "day"
    });
  }
  handleChange(n, o = !1) {
    var s, r;
    this.setState({ selectedDate: n }), o && ((r = (s = this.props).onChange) == null || r.call(s, n));
  }
  handleChangePanel(n) {
    this.setState({ type: n });
  }
  handleChangeMonth(n) {
    this.setState({ selectedDate: n, type: "day" });
  }
  handleChangeYear(n) {
    this.setState({ selectedDate: n, type: "month" });
  }
  changeYear(n) {
    const o = n === "subtract" ? Q(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format) : Q(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
    this.handleChange(o);
  }
  clickDay(n) {
    const o = Q(n).format(this.props.format);
    this.handleChange(o);
  }
  clickToday() {
    this.handleChange(Q().format(this.props.format));
  }
  renderPanel() {
    return this.state.type === "day" ? Ur(J$, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : Ur(Z$, {
      ...this.props,
      selectedDate: this.state.selectedDate,
      handleChangeMonth: this.handleChangeMonth.bind(this)
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ J("div", { className: F("datepicker-calendar", n), ref: this.ref, children: this.renderPanel() });
  }
}
function Pi(t) {
  return t.split("-")[1];
}
function R_(t) {
  return t === "y" ? "height" : "width";
}
function $o(t) {
  return t.split("-")[0];
}
function Jc(t) {
  return ["top", "bottom"].includes($o(t)) ? "x" : "y";
}
function Of(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Jc(e), _ = R_(c), h = o[_] / 2 - s[_] / 2, i = $o(e), d = c === "x";
  let u;
  switch (i) {
    case "top":
      u = {
        x: r,
        y: o.y - s.height
      };
      break;
    case "bottom":
      u = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      u = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      u = {
        x: o.x - s.width,
        y: l
      };
      break;
    default:
      u = {
        x: o.x,
        y: o.y
      };
  }
  switch (Pi(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const tk = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: s
  }), {
    x: i,
    y: d
  } = Of(h, o, _), u = o, a = {}, f = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: p,
      fn: m
    } = c[v], {
      x: g,
      y: w,
      data: $,
      reset: S
    } = await m({
      x: i,
      y: d,
      initialPlacement: o,
      placement: u,
      strategy: s,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (i = g ?? i, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...$
      }
    }, S && f <= 50) {
      f++, typeof S == "object" && (S.placement && (u = S.placement), S.rects && (h = S.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: s
      }) : S.rects), {
        x: i,
        y: d
      } = Of(h, u, _)), v = -1;
      continue;
    }
  }
  return {
    x: i,
    y: d,
    placement: u,
    strategy: s,
    middlewareData: a
  };
};
function ek(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function vg(t) {
  return typeof t != "number" ? ek(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Ks(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function nk(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: s,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: i = "viewport",
    elementContext: d = "floating",
    altBoundary: u = !1,
    padding: a = 0
  } = e, f = vg(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = Ks(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: i,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: s
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Ks(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - S.top + f.top) / $.y,
    bottom: (S.bottom - m.bottom + f.bottom) / $.y,
    left: (m.left - S.left + f.left) / $.x,
    right: (S.right - m.right + f.right) / $.x
  };
}
const ok = Math.min, rk = Math.max;
function ik(t, e, n) {
  return rk(t, ok(e, n));
}
const sk = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: s,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = vg(o), i = {
      x: s,
      y: r
    }, d = Jc(l), u = R_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], E = w / 2 - a[u] / 2 + $, b = ik(S, E, A), R = Pi(l) != null && E != b && c.reference[u] / 2 - (E < S ? h[f] : h[v]) - a[u] / 2 < 0 ? E < S ? S - E : A - E : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: E - b
      }
    };
  }
}), lk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => lk[e]);
}
function ck(t, e, n) {
  n === void 0 && (n = !1);
  const o = Pi(t), s = Jc(t), r = R_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Zs(l)), {
    main: l,
    cross: Zs(l)
  };
}
const ak = {
  start: "end",
  end: "start"
};
function Ua(t) {
  return t.replace(/start|end/g, (e) => ak[e]);
}
function _k(t) {
  const e = Zs(t);
  return [Ua(t), e, Ua(e)];
}
function uk(t, e, n) {
  const o = ["left", "right"], s = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? s : o : e ? o : s;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function fk(t, e, n, o) {
  const s = Pi(t);
  let r = uk($o(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(Ua)))), r;
}
const hk = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: s,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: i = !0,
        fallbackPlacements: d,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: f = !0,
        ...v
      } = t, p = $o(o), m = $o(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [Zs(l)] : _k(l));
      !d && a !== "none" && w.push(...fk(l, f, a, g));
      const $ = [l, ...w], S = await nk(e, v), A = [];
      let E = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = ck(o, r, g);
        A.push(S[R], S[q]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var b;
        const R = (((b = s.flip) == null ? void 0 : b.index) || 0) + 1, q = $[R];
        if (q)
          return {
            data: {
              index: R,
              overflows: E
            },
            reset: {
              placement: q
            }
          };
        let j = "bottom";
        switch (u) {
          case "bestFit": {
            var k;
            const N = (k = E.map((C) => [C, C.overflows.filter((x) => x > 0).reduce((x, D) => x + D, 0)]).sort((C, x) => C[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            N && (j = N);
            break;
          }
          case "initialPlacement":
            j = l;
            break;
        }
        if (o !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
async function dk(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = $o(n), c = Pi(n), _ = Jc(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: u,
    crossAxis: a,
    alignmentAxis: f
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof f == "number" && (a = c === "end" ? f * -1 : f), _ ? {
    x: a * i,
    y: u * h
  } : {
    x: u * h,
    y: a * i
  };
}
const pk = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await dk(e, t);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
function Jt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function pe(t) {
  return Jt(t).getComputedStyle(t);
}
function _n(t) {
  return wg(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Vi;
function bg() {
  if (Vi)
    return Vi;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Vi = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Vi) : navigator.userAgent;
}
function Me(t) {
  return t instanceof Jt(t).HTMLElement;
}
function oe(t) {
  return t instanceof Jt(t).Element;
}
function wg(t) {
  return t instanceof Jt(t).Node;
}
function Hf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Jt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Kc(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = pe(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function mk(t) {
  return ["table", "td", "th"].includes(_n(t));
}
function N_(t) {
  const e = /firefox/i.test(bg()), n = pe(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function $g() {
  return !/^((?!chrome|android).)*safari/i.test(bg());
}
function D_(t) {
  return ["html", "body", "#document"].includes(_n(t));
}
const Wf = Math.min, lr = Math.max, Qs = Math.round;
function kg(t) {
  const e = pe(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = Qs(n) !== s || Qs(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function xg(t) {
  return oe(t) ? t : t.contextElement;
}
const Sg = {
  x: 1,
  y: 1
};
function In(t) {
  const e = xg(t);
  if (!Me(e))
    return Sg;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = kg(e);
  let l = (r ? Qs(n.width) : n.width) / o, c = (r ? Qs(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Rn(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = xg(t);
  let _ = Sg;
  e && (o ? oe(o) && (_ = In(o)) : _ = In(t));
  const h = c ? Jt(c) : window, i = !$g() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const v = Jt(c), p = o && oe(o) ? Jt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = In(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat($.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat($.paddingTop)) * g.y, d *= g.x, u *= g.y, a *= g.x, f *= g.y, d += w.x, u += w.y, m = Jt(m).frameElement;
    }
  }
  return {
    width: a,
    height: f,
    top: u,
    right: d + a,
    bottom: u + f,
    left: d,
    x: d,
    y: u
  };
}
function mn(t) {
  return ((wg(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Zc(t) {
  return oe(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Cg(t) {
  return Rn(mn(t)).left + Zc(t).scrollLeft;
}
function gk(t, e, n) {
  const o = Me(e), s = mn(e), r = Rn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((_n(e) !== "body" || Kc(s)) && (l = Zc(e)), Me(e)) {
      const _ = Rn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = Cg(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Fr(t) {
  if (_n(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (Hf(t) ? t.host : null) || // Fallback
    mn(t)
  );
  return Hf(e) ? e.host : e;
}
function Uf(t) {
  return !Me(t) || pe(t).position === "fixed" ? null : t.offsetParent;
}
function yk(t) {
  let e = Fr(t);
  for (; Me(e) && !D_(e); ) {
    if (N_(e))
      return e;
    e = Fr(e);
  }
  return null;
}
function If(t) {
  const e = Jt(t);
  let n = Uf(t);
  for (; n && mk(n) && pe(n).position === "static"; )
    n = Uf(n);
  return n && (_n(n) === "html" || _n(n) === "body" && pe(n).position === "static" && !N_(n)) ? e : n || yk(t) || e;
}
function vk(t) {
  return kg(t);
}
function bk(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const s = Me(n), r = mn(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((s || !s && o !== "fixed") && ((_n(n) !== "body" || Kc(r)) && (l = Zc(n)), Me(n))) {
    const h = Rn(n);
    c = In(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function wk(t, e) {
  const n = Jt(t), o = mn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = $g();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function $k(t) {
  var e;
  const n = mn(t), o = Zc(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = lr(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = lr(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + Cg(t);
  const _ = -o.scrollTop;
  return pe(s || n).direction === "rtl" && (c += lr(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Eg(t) {
  const e = Fr(t);
  return D_(e) ? t.ownerDocument.body : Me(e) && Kc(e) ? e : Eg(e);
}
function cr(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Eg(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Jt(o);
  return s ? e.concat(r, r.visualViewport || [], Kc(o) ? o : []) : e.concat(o, cr(o));
}
function kk(t, e) {
  const n = Rn(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Me(t) ? In(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = s * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function Ff(t, e, n) {
  return e === "viewport" ? Ks(wk(t, n)) : oe(e) ? kk(e, n) : Ks($k(mn(t)));
}
function xk(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = cr(t).filter((c) => oe(c) && _n(c) !== "body"), s = null;
  const r = pe(t).position === "fixed";
  let l = r ? Fr(t) : t;
  for (; oe(l) && !D_(l); ) {
    const c = pe(l), _ = N_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Fr(l);
  }
  return e.set(t, o), o;
}
function Sk(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? xk(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = Ff(e, i, s);
    return h.top = lr(d.top, h.top), h.right = Wf(d.right, h.right), h.bottom = Wf(d.bottom, h.bottom), h.left = lr(d.left, h.left), h;
  }, Ff(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Ck = {
  getClippingRect: Sk,
  convertOffsetParentRelativeRectToViewportRelativeRect: bk,
  isElement: oe,
  getDimensions: vk,
  getOffsetParent: If,
  getDocumentElement: mn,
  getScale: In,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || If, r = this.getDimensions;
    return {
      reference: gk(e, await s(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => pe(t).direction === "rtl"
};
function Ek(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...oe(t) ? cr(t) : t.contextElement ? cr(t.contextElement) : [], ...cr(e)] : [];
  h.forEach((f) => {
    _ && f.addEventListener("scroll", n, {
      passive: !0
    }), r && f.addEventListener("resize", n);
  });
  let i = null;
  if (l) {
    let f = !0;
    i = new ResizeObserver(() => {
      f || n(), f = !1;
    }), oe(t) && !c && i.observe(t), !oe(t) && t.contextElement && !c && i.observe(t.contextElement), i.observe(e);
  }
  let d, u = c ? Rn(t) : null;
  c && a();
  function a() {
    const f = Rn(t);
    u && (f.x !== u.x || f.y !== u.y || f.width !== u.width || f.height !== u.height) && n(), u = f, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var f;
    h.forEach((v) => {
      _ && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), (f = i) == null || f.disconnect(), i = null, c && cancelAnimationFrame(d);
  };
}
const Tk = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: Ck,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return tk(t, e, {
    ...s,
    platform: r
  });
};
var eo, no, Mt, xn, oi, ri, ii, Ia, Ll, Tg, Ml, Ag, Rl, Lg, Nl, Mg, Dl, Rg, Pl, Ng, Ol, Dg, Hl;
const vn = class extends se {
  constructor() {
    super(...arguments);
    T(this, ii);
    T(this, Ll);
    T(this, Ml);
    T(this, Rl);
    T(this, Nl);
    T(this, Dl);
    T(this, Pl);
    T(this, Ol);
    T(this, eo, void 0);
    T(this, no, 0);
    T(this, Mt, void 0);
    T(this, xn, void 0);
    T(this, oi, void 0);
    T(this, ri, void 0);
    M(this, "hideLater", () => {
      y(this, Hl).call(this), H(this, no, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, Hl, () => {
      clearTimeout(y(this, no)), H(this, no, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, xn)) == null ? void 0 : n.classList.contains(vn.CLASS_SHOW);
  }
  get datepicker() {
    return y(this, xn) || W(this, Ml, Ag).call(this);
  }
  get trigger() {
    return y(this, oi) || this.element;
  }
  get elementShowClass() {
    return `with-${vn.NAME}-show`;
  }
  show(n) {
    return H(this, oi, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(vn.CLASS_SHOW), this.datepicker.classList.add("fade"), W(this, Pl, Ng).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = y(this, ri)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, xn)) == null || o.classList.remove(vn.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-datepicker" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)))
      return;
    const l = this.getAll().entries(), c = new Set(s || []);
    for (const [i, d] of l)
      c.has(i) || d.hide();
  }
};
let Vt = vn;
eo = new WeakMap(), no = new WeakMap(), Mt = new WeakMap(), xn = new WeakMap(), oi = new WeakMap(), ri = new WeakMap(), ii = new WeakSet(), Ia = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Ll = new WeakSet(), Tg = function() {
  const n = W(this, ii, Ia).call(this);
  return H(this, Mt, document.createElement("div")), y(this, Mt).style.position = "absolute", y(this, Mt).style.width = `${n}px`, y(this, Mt).style.height = `${n}px`, y(this, Mt).style.transform = "rotate(45deg)", y(this, Mt);
}, Ml = new WeakSet(), Ag = function() {
  const n = vn.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), q$(Ur(Q$, { ...this.options }), o), this.options.arrow && o.append(W(this, Ll, Tg).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, xn, o), o;
}, Rl = new WeakSet(), Lg = function() {
  var l;
  const n = W(this, ii, Ia).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [pk(n), hk()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && y(this, Mt) && ((l = r.middleware) == null || l.push(sk({ element: y(this, Mt) }))), r;
}, Nl = new WeakSet(), Mg = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Dl = new WeakSet(), Rg = function(n) {
  return n === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : n === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : n === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, Pl = new WeakSet(), Ng = function() {
  const n = W(this, Rl, Lg).call(this), o = W(this, Ol, Dg).call(this);
  H(this, ri, Ek(o, this.datepicker, () => {
    Tk(o, this.datepicker, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.datepicker.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, Nl, Mg).call(this, _);
      if (l.arrow && y(this, Mt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(y(this, Mt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Mt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, Dl, Rg).call(this, _)
        });
      }
    });
  }));
}, Ol = new WeakSet(), Dg = function() {
  return y(this, eo) || H(this, eo, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: s } = n;
        return {
          width: 0,
          height: 0,
          top: s,
          right: o,
          bottom: s,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), y(this, eo);
}, Hl = new WeakMap(), M(Vt, "NAME", "datepicker"), M(Vt, "CLASSNAME", "datepicker"), M(Vt, "CLASS_SHOW", "show"), M(Vt, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), M(Vt, "DEFAULT", {
  date: Q().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(t) {
  const e = t.target, n = e.closest(Vt.MENU_SELECTOR), o = e.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? Vt.ensure(n).toggle() : o || Vt.clear({ event: t });
});
const Ak = (t) => {
  const e = document.getElementsByClassName("with-datepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Vt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Vt.clear({ event: t });
};
window.addEventListener("scroll", Ak, !0);
function Pg(t, e, n) {
  if (n) {
    t.setAttribute("class", F(e));
    return;
  }
  Wc(t.getAttribute("class"), e).forEach(([o, s]) => {
    t.classList.toggle(o, s);
  });
}
function Ro(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, s]) => {
      Ro(t, o, s);
    });
  n !== void 0 && (t.style[e] = typeof n == "number" ? `${n}px` : n);
}
function tl(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, s]) => {
      tl(t, o, s);
    });
  n !== void 0 && (n === null ? t.removeAttribute(e) : t.setAttribute(e, n));
}
var Sn, si, We, Wl, oo, as;
const be = class extends se {
  constructor() {
    super(...arguments);
    T(this, oo);
    T(this, Sn, 0);
    T(this, si, void 0);
    T(this, We, void 0);
    T(this, Wl, (n) => {
      const o = n.target;
      (o.closest(be.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(be.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", y(this, Wl)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const s = n.clientWidth, r = n.clientHeight;
          (!y(this, We) || y(this, We)[0] !== s || y(this, We)[1] !== r) && (H(this, We, [s, r]), this.layout());
        });
        o.observe(n), H(this, si, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = y(this, si)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: s, backdrop: r, className: l, style: c } = this.options;
    return Pg(o, [{
      "modal-trans": s,
      "modal-no-backdrop": !r
    }, be.CLASS_SHOW, l]), Ro(o, {
      zIndex: `${be.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), W(this, oo, as).call(this, () => {
      o.classList.add(be.CLASS_SHOWN), W(this, oo, as).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(be.CLASS_SHOWN), this.emit("hide", this), W(this, oo, as).call(this, () => {
      this.modalElement.classList.remove(be.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    o = o ?? this.options.size, tl(s, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? tl(s, "data-size", o) : o && (r.width = o), Ro(s, r), n = n ?? this.options.position ?? "fit";
    const l = s.clientWidth, c = s.clientHeight;
    H(this, We, [l, c]), typeof n == "function" && (n = n({ width: l, height: c }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), Ro(s, _), Ro(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Wt = be;
Sn = new WeakMap(), si = new WeakMap(), We = new WeakMap(), Wl = new WeakMap(), oo = new WeakSet(), as = function(n, o) {
  y(this, Sn) && (clearTimeout(y(this, Sn)), H(this, Sn, 0)), n && (this.options.animation ? H(this, Sn, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, M(Wt, "NAME", "Modal"), M(Wt, "EVENTS", !0), M(Wt, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), M(Wt, "CLASS_SHOW", "show"), M(Wt, "CLASS_SHOWN", "in"), M(Wt, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), M(Wt, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Wt.all.forEach((t) => {
    const e = t;
    e.isShown && e.options.responsive && e.layout();
  });
});
var Qc, st, Og, No, ar, Bf, el = {}, Hg = [], Lk = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function tn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Wg(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Mk(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Qc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return _s(t, l, o, s, null);
}
function _s(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Og };
  return s == null && st.vnode != null && st.vnode(r), r;
}
function Rk() {
  return { current: null };
}
function ta(t) {
  return t.children;
}
function Fn(t, e) {
  this.props = t, this.context = e;
}
function Br(t, e) {
  if (e == null)
    return t.__ ? Br(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Br(t) : null;
}
function Ug(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ug(t);
  }
}
function jf(t) {
  (!t.__d && (t.__d = !0) && ar.push(t) && !nl.__r++ || Bf !== st.debounceRendering) && ((Bf = st.debounceRendering) || setTimeout)(nl);
}
function nl() {
  for (var t; nl.__r = ar.length; )
    t = ar.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ar = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = tn({}, r)).__v = r.__v + 1, P_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Br(r), r.__h), jg(o, r), r.__e != l && Ug(r)));
    });
}
function Ig(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Hg, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? _s(null, a, null, null, a) : Array.isArray(a) ? _s(ta, { children: a }, null, null, null) : a.__b > 0 ? _s(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      P_(t, a, u = u || el, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Fg(a, _, t) : _ = Bg(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Br(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Vg(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      zg(p[i], p[++i], p[++i]);
}
function Fg(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Fg(o, e, n) : Bg(n, o, o, s, o.__e, e));
  return e;
}
function Bg(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Nk(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ol(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ol(t, r, e[r], n[r], o);
}
function zf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Lk.test(e) ? n : n + "px";
}
function ol(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || zf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || zf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Yf : Vf, r) : t.removeEventListener(e, r ? Yf : Vf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Vf(t) {
  this.l[t.type + !1](st.event ? st.event(t) : t);
}
function Yf(t) {
  this.l[t.type + !0](st.event ? st.event(t) : t);
}
function P_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = st.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Fn(p, g), i.constructor = b, i.render = Pk), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = tn({}, i.__s)), tn(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = st.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = tn(tn({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === ta && h.key == null ? h.props.children : h, Ig(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Dk(n.__e, e, n, o, s, r, l, _);
    (h = st.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), st.__e(k, e, n);
  }
}
function jg(t, e) {
  st.__c && st.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      st.__e(o, n.__v);
    }
  });
}
function Dk(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && Qc.call(t.childNodes), h = (d = n.props || el).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Nk(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Ig(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Br(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Wg(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && ol(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && ol(t, "checked", f, d.checked, !1));
  }
  return t;
}
function zg(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    st.__e(o, n);
  }
}
function Vg(t, e, n) {
  var o, s;
  if (st.unmount && st.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || zg(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        st.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Vg(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Wg(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Pk(t, e, n) {
  return this.constructor(t, n);
}
function Ok(t, e, n) {
  var o, s, r;
  st.__ && st.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], P_(e, t = (!o && n || e).__k = Mk(ta, null, [t]), s || el, el, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Qc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), jg(r, t);
}
Qc = Hg.slice, st = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Og = 0, No = function(t) {
  return t != null && t.constructor === void 0;
}, Fn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tn({}, this.state), typeof t == "function" && (t = t(tn({}, n), this.props)), t && tn(n, t), t != null && this.__v && (e && this._sb.push(e), jf(this));
}, Fn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), jf(this));
}, Fn.prototype.render = ta, ar = [], nl.__r = 0;
var Hk = 0;
function Ct(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Hk, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return st.vnode && st.vnode(_), _;
}
let Wk = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
class Yg extends Fn {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  renderHeader() {
    const {
      header: e,
      title: n
    } = this.props;
    return No(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ Ct("div", { className: "modal-header", children: /* @__PURE__ */ Ct("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : No(e) ? e : /* @__PURE__ */ Ct("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ Ct(vo, { ...e }) : null,
      n ? /* @__PURE__ */ Ct("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ Ct("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? No(e) ? e : /* @__PURE__ */ Ct("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return No(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ Ct("div", { className: "modal-footer", children: n ? /* @__PURE__ */ Ct(vo, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ Ct("div", { className: F("modal-dialog", e), style: n, children: /* @__PURE__ */ Ct("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
M(Yg, "defaultProps", { closeBtn: !0 });
var li, ro, ci;
class Uk extends Fn {
  constructor() {
    super(...arguments);
    T(this, li, Rk());
    T(this, ro, void 0);
    M(this, "state", {});
    T(this, ci, () => {
      var s, r;
      const n = (r = (s = y(this, li).current) == null ? void 0 : s.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = y(this, ro);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, c = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, c.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, ro, o);
    });
  }
  componentDidMount() {
    y(this, ci).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = y(this, ro)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ Ct(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: y(this, li),
        onLoad: y(this, ci)
      }
    );
  }
}
li = new WeakMap(), ro = new WeakMap(), ci = new WeakMap();
function Ik(t, e) {
  const { custom: n, title: o, content: s } = e;
  return {
    body: s,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function Fk(t, e) {
  const { dataType: n, url: o, request: s, custom: r, title: l } = e, _ = await (await fetch(o, s)).text();
  if (n !== "html")
    try {
      const h = JSON.parse(_);
      return {
        title: l,
        ...r,
        ...h
      };
    } catch {
    }
  return e.replace !== !1 && n === "html" ? [_] : {
    title: l,
    ...r,
    body: n === "html" ? /* @__PURE__ */ Ct("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: _ } }) : _
  };
}
async function Bk(t, e) {
  const { url: n, custom: o, title: s } = e;
  return {
    title: s,
    ...o,
    body: /* @__PURE__ */ Ct(Uk, { url: n })
  };
}
const jk = {
  custom: Ik,
  ajax: Fk,
  iframe: Bk
};
var ai, _i, ae, io, us, Ul, qg, ui, Fa;
const xr = class extends Wt {
  constructor() {
    super(...arguments);
    T(this, io);
    T(this, Ul);
    T(this, ui);
    T(this, ai, void 0);
    T(this, _i, void 0);
    T(this, ae, void 0);
  }
  get id() {
    return y(this, _i);
  }
  get loading() {
    return this.modalElement.classList.contains(xr.LOADING_CLASS);
  }
  get modalElement() {
    let n = y(this, ai);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), tl(n, {
        id: o,
        style: this.options.style
      }), Pg(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, ai, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, _i, this.options.id || `modal-${Wk()}`);
  }
  show(n) {
    return super.show(n) ? (this.buildDialog(), !0) : !1;
  }
  render(n) {
    super.render(n), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    y(this, ae) && clearTimeout(y(this, ae));
    const { modalElement: n, options: o } = this, { type: s, loadTimeout: r } = o, l = jk[s];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.classList.add(xr.LOADING_CLASS), await W(this, Ul, qg).call(this), r && H(this, ae, window.setTimeout(() => {
      H(this, ae, 0), W(this, ui, Fa).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await W(this, ui, Fa).call(this, this.options.failedTip) : c && typeof c == "object" && await W(this, io, us).call(this, c), y(this, ae) && (clearTimeout(y(this, ae)), H(this, ae, 0)), n.classList.remove(xr.LOADING_CLASS), !0;
  }
};
let Do = xr;
ai = new WeakMap(), _i = new WeakMap(), ae = new WeakMap(), io = new WeakSet(), us = function(n) {
  return new Promise((o) => {
    if (Array.isArray(n))
      return this.modalElement.innerHTML = n[0], o();
    const { afterRender: s, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), s == null || s(l), o();
      },
      ...r
    }, Ok(
      /* @__PURE__ */ Ct(Yg, { ...n }),
      this.modalElement
    );
  });
}, Ul = new WeakSet(), qg = function() {
  const { loadingText: n } = this.options;
  return W(this, io, us).call(this, {
    body: /* @__PURE__ */ Ct("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ Ct("span", { className: "spinner" }),
      n ? /* @__PURE__ */ Ct("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, ui = new WeakSet(), Fa = function(n) {
  if (n)
    return W(this, io, us).call(this, {
      body: /* @__PURE__ */ Ct("div", { className: "modal-load-failed", children: n })
    });
}, M(Do, "LOADING_CLASS", "loading"), M(Do, "DEFAULT", {
  ...Wt.DEFAULT,
  loadTimeout: 1e4
});
var Ue, Il, Gg, Fl, Xg, Bl, Jg;
class _r extends se {
  constructor() {
    super(...arguments);
    T(this, Il);
    T(this, Fl);
    T(this, Bl);
    T(this, Ue, void 0);
  }
  get modal() {
    return y(this, Ue);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return W(this, Fl, Xg).call(this).show();
  }
  hide() {
    var n;
    (n = y(this, Ue)) == null || n.hide();
  }
}
Ue = new WeakMap(), Il = new WeakSet(), Gg = function() {
  const {
    container: n,
    ...o
  } = this.options, s = o, r = this.element.getAttribute("href") || "";
  return s.type || (s.target || r[0] === "#" ? s.type = "static" : s.type = s.type || (s.url ? "iframe" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && r[0] !== "#" && (s.url = r), s;
}, Fl = new WeakSet(), Xg = function() {
  const n = W(this, Il, Gg).call(this);
  let o = y(this, Ue);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Wt(W(this, Bl, Jg).call(this), n), H(this, Ue, o)) : (o = new Do(this.container, n), H(this, Ue, o)), o;
}, Bl = new WeakSet(), Jg = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const s = o.getAttribute("href");
      s != null && s.startsWith("#") && (n = s);
    }
  }
  return this.container.querySelector(n || ".modal");
}, M(_r, "NAME", "ModalTrigger"), M(_r, "EVENTS", !0), M(_r, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (t) => {
  const n = t.target.closest(_r.TOGGLE_SELECTOR);
  if (n) {
    const o = _r.ensure(n);
    o && o.show(), console.log("> modalTrigger", o);
  }
});
var Ca;
let zk = (Ca = class extends yo {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = F(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, M(Ca, "NAME", "nav"), Ca);
class qf extends Lt {
}
M(qf, "NAME", "nav"), M(qf, "Component", zk);
var Ba;
Ba = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var Vk = 0;
function ln(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Vk, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Ba.vnode && Ba.vnode(_), _;
}
function jr(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function Yk({
  key: t,
  type: e,
  btnType: n,
  page: o,
  format: s,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = jr(r, o);
  return c.text === void 0 && !c.icon && s && (c.text = typeof s == "function" ? s(_) : It(s, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : It(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ ln(he, { type: n, ...c });
}
const we = 24 * 60 * 60 * 1e3, Bt = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), Oi = (t, e = new Date()) => (t = Bt(t), e = Bt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), Gf = (t, e = new Date()) => Bt(t).getFullYear() === Bt(e).getFullYear(), qk = (t, e = new Date()) => (t = Bt(t), e = Bt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), RC = (t, e = new Date()) => {
  t = Bt(t), e = Bt(e);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(t.getTime() / n), s = Math.floor(e.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, NC = (t, e) => Oi(Bt(e), t), DC = (t, e) => Oi(Bt(e).getTime() - we, t), PC = (t, e) => Oi(Bt(e).getTime() + we, t), OC = (t, e) => Oi(Bt(e).getTime() - 2 * we, t), ja = (t, e = "yyyy-MM-dd hh:mm") => {
  t = Bt(t);
  const n = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours(),
    "H+": t.getHours() % 12,
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "S+": t.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e = e.replace(RegExp.$1, `${t.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((o) => {
    if (new RegExp(`(${o})`).test(e)) {
      const s = `${n[o]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? s : `00${s}`.substring(s.length));
    }
  }), e;
}, HC = (t, e, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = ja(t, Gf(t) ? o.month : o.full);
  if (Oi(t, e))
    return s;
  const r = ja(e, Gf(t, e) ? qk(t, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, WC = (t) => {
  const e = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return e - we * 7;
    case "oneMonth":
      return e - we * 31;
    case "threeMonth":
      return e - we * 31 * 3;
    case "halfYear":
      return e - we * 183;
    case "oneYear":
      return e - we * 365;
    case "twoYear":
      return e - 2 * (we * 365);
    default:
      return 0;
  }
}, Xf = (t, e, n = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, Xf(t, "day", n, o);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, Xf(t, "day", n, o);
    case "week":
      t *= 7;
    case "day":
      t *= 24;
    case "hour":
      t *= 60;
    case "minute":
      t *= 6e4;
      break;
    default:
      t = 0;
  }
  return n ? o + t : o - t;
};
function Gk({
  key: t,
  type: e,
  page: n,
  text: o = "",
  pagerInfo: s,
  children: r,
  ...l
}) {
  const c = jr(s, n);
  return o = typeof o == "function" ? o(c) : It(o, c), /* @__PURE__ */ ln(md, { ...l, children: [
    r,
    o
  ] });
}
function Xk({
  key: t,
  type: e,
  btnType: n,
  count: o = 12,
  pagerInfo: s,
  onClick: r,
  linkCreator: l,
  ...c
}) {
  if (!s.pageTotal)
    return;
  const _ = { ...c, square: !0 }, h = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ ln(he, { type: n, ..._ })), i = (u, a) => {
    const f = [];
    for (let v = u; v <= a; v++) {
      _.text = v, delete _.icon, _.disabled = !1;
      const p = jr(s, v);
      l && (_.url = typeof l == "function" ? l(p) : It(l, p)), f.push(/* @__PURE__ */ ln(he, { type: n, ..._, onClick: r }));
    }
    return f;
  };
  let d = [];
  return d = [...i(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= o ? d = [...d, ...i(2, s.pageTotal)] : s.page < o - 2 ? d = [...d, ...i(2, o - 2), h(), ...i(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - o + 3 ? d = [...d, h(), ...i(s.pageTotal - o + 3, s.pageTotal)] : d = [...d, h(), ...i(s.page - Math.ceil((o - 4) / 2), s.page + Math.floor((o - 4) / 2)), h(), ...i(s.pageTotal, s.pageTotal)]), d;
}
function Jk({
  type: t,
  pagerInfo: e,
  linkCreator: n,
  items: o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: s = {},
  ...r
}) {
  var c;
  s.items = s.items ?? o.map((_) => {
    const h = { ...e, recPerPage: _ };
    return {
      text: `${_}`,
      url: typeof n == "function" ? n(h) : It(n, h)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(e) : It(l, e), s.menu = { ...s.menu, className: F((c = s.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ ln(Ap, { type: "dropdown", dropdown: s, ...r });
}
function Kk({
  key: t,
  page: e,
  type: n,
  btnType: o,
  pagerInfo: s,
  size: r,
  onClick: l,
  onChange: c,
  linkCreator: _,
  ...h
}) {
  const i = { ...h };
  let d;
  const u = (v) => {
    var p;
    d = Number((p = v.target) == null ? void 0 : p.value) || 1, d = d > s.pageTotal ? s.pageTotal : d;
  }, a = (v) => {
    if (!(v != null && v.target))
      return;
    d = d <= s.pageTotal ? d : s.pageTotal;
    const p = jr(s, d);
    c && !c({ info: p, event: v }) || (v.target.href = i.url = typeof _ == "function" ? _(p) : It(_, p));
  }, f = jr(s, e || 0);
  return i.url = typeof _ == "function" ? _(f) : It(_, f), i.className = F("input-group-addon", i.className), /* @__PURE__ */ ln("div", { className: F("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ ln("input", { type: "number", class: "form-control", max: s.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ ln(he, { type: o, ...i, onClick: a })
  ] });
}
var Lo;
let Zk = (Lo = class extends vo {
  get pagerInfo() {
    const { page: e = 1, recTotal: n = 0, recPerPage: o = 10 } = this.props;
    return { page: e, recTotal: n, recPerPage: o, pageTotal: o ? Math.ceil(n / o) : 0 };
  }
  isBtnItem(e) {
    return e === "link" || e === "nav" || e === "size-menu" || e === "goto" || super.isBtnItem(e);
  }
  getItemRenderProps(e, n, o) {
    const s = super.getItemRenderProps(e, n, o), r = n.type || "item";
    return r === "info" ? Object.assign(s, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(s, { pagerInfo: this.pagerInfo, linkCreator: e.linkCreator }), s;
  }
}, M(Lo, "NAME", "pager"), M(Lo, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), M(Lo, "ItemComponents", {
  ...vo.ItemComponents,
  link: Yk,
  info: Gk,
  nav: Xk,
  "size-menu": Jk,
  goto: Kk
}), Lo);
class Jf extends Lt {
}
M(Jf, "NAME", "pager"), M(Jf, "Component", Zk);
var Kg, vt, Zg, ur, Kf, Qg = {}, ty = [], Qk = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function en(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ey(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ba(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Zg };
  return s == null && vt.vnode != null && vt.vnode(r), r;
}
function tx() {
  return { current: null };
}
function O_(t) {
  return t.children;
}
function cn(t, e) {
  this.props = t, this.context = e;
}
function zr(t, e) {
  if (e == null)
    return t.__ ? zr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? zr(t) : null;
}
function ny(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ny(t);
  }
}
function Zf(t) {
  (!t.__d && (t.__d = !0) && ur.push(t) && !rl.__r++ || Kf !== vt.debounceRendering) && ((Kf = vt.debounceRendering) || setTimeout)(rl);
}
function rl() {
  for (var t; rl.__r = ur.length; )
    t = ur.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ur = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = en({}, r)).__v = r.__v + 1, sy(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? zr(r), r.__h), nx(o, r), r.__e != l && ny(r)));
    });
}
function oy(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || ty, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ba(null, a, null, null, a) : Array.isArray(a) ? ba(O_, { children: a }, null, null, null) : a.__b > 0 ? ba(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      sy(t, a, u = u || Qg, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = ry(a, _, t) : _ = iy(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = zr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && cy(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      ly(p[i], p[++i], p[++i]);
}
function ry(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? ry(o, e, n) : iy(n, o, o, s, o.__e, e));
  return e;
}
function iy(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function ex(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || il(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || il(t, r, e[r], n[r], o);
}
function Qf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Qk.test(e) ? n : n + "px";
}
function il(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Qf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Qf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? eh : th, r) : t.removeEventListener(e, r ? eh : th, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function th(t) {
  this.l[t.type + !1](vt.event ? vt.event(t) : t);
}
function eh(t) {
  this.l[t.type + !0](vt.event ? vt.event(t) : t);
}
function sy(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = vt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new cn(p, g), i.constructor = b, i.render = rx), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = en({}, i.__s)), en(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = vt.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = en(en({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === O_ && h.key == null ? h.props.children : h, oy(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = ox(n.__e, e, n, o, s, r, l, _);
    (h = vt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), vt.__e(k, e, n);
  }
}
function nx(t, e) {
  vt.__c && vt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      vt.__e(o, n.__v);
    }
  });
}
function ox(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && Kg.call(t.childNodes), h = (d = n.props || Qg).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (ex(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, oy(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && zr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && ey(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && il(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && il(t, "checked", f, d.checked, !1));
  }
  return t;
}
function ly(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    vt.__e(o, n);
  }
}
function cy(t, e, n) {
  var o, s;
  if (vt.unmount && vt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || ly(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        vt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && cy(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || ey(t.__e), t.__ = t.__e = t.__d = void 0;
}
function rx(t, e, n) {
  return this.constructor(t, n);
}
Kg = ty.slice, vt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Zg = 0, cn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = en({}, this.state), typeof t == "function" && (t = t(en({}, n), this.props)), t && en(n, t), t != null && this.__v && (e && this._sb.push(e), Zf(this));
}, cn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Zf(this));
}, cn.prototype.render = O_, ur = [], rl.__r = 0;
var ix = 0;
function nt(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ix, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return vt.vnode && vt.vnode(_), _;
}
let sx = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var jl;
class lx extends cn {
  constructor() {
    super(...arguments);
    T(this, jl, (n) => {
      var l;
      const { onDeselect: o, selections: s } = this.props, r = (l = n.target.closest(".picker-deselect-btn")) == null ? void 0 : l.dataset.idx;
      r && o && (s != null && s.length) && (n.stopPropagation(), o([s[+r]], n));
    });
  }
  render() {
    const {
      className: n,
      style: o,
      disabled: s,
      placeholder: r,
      focused: l,
      selections: c = [],
      onClick: _,
      children: h
    } = this.props;
    let i;
    return c.length ? i = /* @__PURE__ */ nt("div", { className: "picker-multi-selections", children: c.map((d, u) => /* @__PURE__ */ nt("div", { className: "picker-multi-selection", children: [
      d.text ?? d.value,
      /* @__PURE__ */ nt("div", { className: "picker-deselect-btn btn", onClick: y(this, jl), "data-idx": u, children: /* @__PURE__ */ nt("span", { className: "close" }) })
    ] })) }) : i = /* @__PURE__ */ nt("span", { className: "picker-select-placeholder", children: r }), /* @__PURE__ */ nt(
      "div",
      {
        className: F("picker-select picker-select-multi form-control", n, { disabled: s, focused: l }),
        style: o,
        onClick: _,
        children: [
          i,
          h,
          /* @__PURE__ */ nt("span", { class: "caret" })
        ]
      }
    );
  }
}
jl = new WeakMap();
var zl;
class cx extends cn {
  constructor() {
    super(...arguments);
    T(this, zl, (n) => {
      const { onDeselect: o, selections: s } = this.props;
      o && (s != null && s.length) && (n.stopPropagation(), o(s, n));
    });
  }
  render() {
    const {
      className: n,
      style: o,
      disabled: s,
      placeholder: r,
      focused: l,
      selections: c = [],
      onDeselect: _,
      onClick: h,
      children: i
    } = this.props, [d] = c, u = d ? /* @__PURE__ */ nt("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ nt("span", { className: "picker-select-placeholder", children: r }), a = d && _ ? /* @__PURE__ */ nt("button", { type: "button", className: "btn picker-deselect-btn", onClick: y(this, zl), children: /* @__PURE__ */ nt("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ nt(
      "div",
      {
        className: F("picker-select picker-select-single form-control", n, { disabled: s, focused: l }),
        style: o,
        onClick: h,
        children: [
          u,
          i,
          a,
          /* @__PURE__ */ nt("span", { class: "caret" })
        ]
      }
    );
  }
}
zl = new WeakMap();
var Vl, ay, fi, Yl, hi, ql;
class ax extends cn {
  constructor() {
    super(...arguments);
    T(this, Vl);
    M(this, "state", { keys: "", shown: !1 });
    T(this, fi, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    T(this, Yl, ({ item: n }) => {
      const o = this.props.items.find((s) => s.value === n.key);
      o && this.props.onSelectItem(o);
    });
    T(this, hi, (n) => {
      this.setState({ keys: n.target.value });
    });
    T(this, ql, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", y(this, fi)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", y(this, fi));
  }
  show() {
    this.state.shown || this.setState({ shown: !0 });
  }
  hide() {
    this.state.shown && this.setState({ shown: !1 }, () => {
      window.setTimeout(() => {
        var n, o;
        (o = (n = this.props).onRequestHide) == null || o.call(n);
      }, 200);
    });
  }
  render() {
    const {
      id: n,
      search: o,
      className: s,
      style: r = {},
      maxHeight: l,
      maxWidth: c,
      width: _,
      menu: h,
      searchHint: i
    } = this.props, { shown: d, keys: u } = this.state, a = u.trim().length;
    return /* @__PURE__ */ nt("div", { className: F("picker-menu", s, { shown: d, "has-search": a }), id: `picker-menu-${n}`, style: { maxHeight: l, maxWidth: c, width: _, ...r }, children: [
      o ? /* @__PURE__ */ nt("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ nt("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: i, value: u, onChange: y(this, hi), onInput: y(this, hi) }),
        a ? /* @__PURE__ */ nt("button", { type: "button", className: "btn picker-menu-search-clear", onClick: y(this, ql), children: /* @__PURE__ */ nt("span", { className: "close" }) }) : /* @__PURE__ */ nt("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ nt(l_, { className: "picker-menu-list", items: W(this, Vl, ay).call(this), onClickItem: y(this, Yl), ...h })
    ] });
  }
}
Vl = new WeakSet(), ay = function() {
  const { selections: n, items: o } = this.props, s = new Set(n), r = this.state.keys.toLowerCase().split(" ").filter((l) => l.length);
  return o.reduce((l, c) => {
    const {
      value: _,
      keys: h,
      text: i,
      ...d
    } = c;
    if (!r.length || r.every((u) => _.toLowerCase().includes(u) || (h == null ? void 0 : h.toLowerCase().includes(u)) || typeof i == "string" && i.toLowerCase().includes(u))) {
      let u = i ?? _;
      typeof u == "string" && r.length && (u = /* @__PURE__ */ nt("span", { dangerouslySetInnerHTML: { __html: r.reduce((a, f) => a.replace(f, `<span class="picker-menu-item-match">${f}</span>`), u) } })), l.push({
        key: _,
        active: s.has(_),
        text: u,
        ...d
      });
    }
    return l;
  }, []);
}, fi = new WeakMap(), Yl = new WeakMap(), hi = new WeakMap(), ql = new WeakMap();
function nh(t) {
  const e = /* @__PURE__ */ new Set();
  return t.reduce((n, o) => (e.has(o) || (e.add(o), n.push(o)), n), []);
}
var Ea, di, pi, mi, so, fs, gi, za, Gl, _y, Xl, uy, Jl, Kl, Zl, Ql, tc, fy;
let _x = (Ea = class extends cn {
  constructor(n) {
    super(n);
    T(this, so);
    T(this, gi);
    T(this, Gl);
    T(this, Xl);
    T(this, tc);
    T(this, di, 0);
    T(this, pi, sx());
    T(this, mi, tx());
    T(this, Jl, (n, o) => {
      const { valueList: s } = this, r = new Set(n.map((c) => c.value)), l = s.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    T(this, Kl, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    T(this, Zl, () => {
      this.close();
    });
    T(this, Ql, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = y(this, mi).current) == null || o.hide();
      });
    });
    this.state = {
      value: W(this, Gl, _y).call(this, n.defaultValue) ?? "",
      open: !1,
      loading: !1,
      search: "",
      items: Array.isArray(n.items) ? n.items : []
    };
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return W(this, gi, za).call(this, this.state.value);
  }
  componentDidMount() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this);
  }
  async loadItemList() {
    let { items: n } = this.props;
    if (typeof n == "function") {
      const s = ++nu(this, di)._;
      if (await W(this, so, fs).call(this, { loading: !0, items: [] }), n = await n(), y(this, di) !== s)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await W(this, so, fs).call(this, o), n;
  }
  getItemList() {
    return this.state.items;
  }
  getItemMap() {
    return this.getItemList().reduce((n, o) => (n[o.value] = o, n), {});
  }
  getItemByValue(n) {
    return this.getItemList().find((o) => o.value === n);
  }
  getSelections() {
    const n = this.getItemMap();
    return this.valueList.map((o) => n[o] || { value: o });
  }
  async toggle(n) {
    if (n === void 0)
      n = !this.state.open;
    else if (n === this.state.open)
      return;
    await W(this, so, fs).call(this, { open: n }), n && this.loadItemList();
  }
  open() {
    return this.toggle(!0);
  }
  close() {
    return this.toggle(!1);
  }
  toggleValue(n, o) {
    const { valueList: s } = this, r = s.indexOf(n);
    o !== !!r && (r > -1 ? s.splice(r, 1) : s.push(n), this.setState({ value: s.join(this.props.valueSplitter ?? ",") }));
  }
  render() {
    const {
      className: n,
      style: o,
      children: s,
      multi: r
    } = this.props, l = r ? lx : cx;
    return /* @__PURE__ */ nt("div", { className: F("picker", n), style: o, id: `picker-${y(this, pi)}`, children: [
      /* @__PURE__ */ nt(l, { ...W(this, Xl, uy).call(this) }),
      s,
      this.state.open ? /* @__PURE__ */ nt(ax, { ...W(this, tc, fy).call(this), ref: y(this, mi) }) : null
    ] });
  }
}, di = new WeakMap(), pi = new WeakMap(), mi = new WeakMap(), so = new WeakSet(), fs = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, gi = new WeakSet(), za = function(n) {
  return typeof n == "string" ? nh(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? nh(n) : [];
}, Gl = new WeakSet(), _y = function(n) {
  const o = W(this, gi, za).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, Xl = new WeakSet(), uy = function() {
  const { placeholder: n, disabled: o } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: y(this, Kl),
    onDeselect: y(this, Jl)
  };
}, Jl = new WeakMap(), Kl = new WeakMap(), Zl = new WeakMap(), Ql = new WeakMap(), tc = new WeakSet(), fy = function() {
  const { search: n, menuClass: o, menuWidth: s, menuStyle: r, menuMaxHeight: l, menuMaxWidth: c } = this.props, { items: _ } = this.state;
  return {
    id: y(this, pi),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: s,
    maxHeight: l,
    maxWidth: c,
    onRequestHide: y(this, Zl),
    onSelectItem: y(this, Ql)
  };
}, M(Ea, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), Ea);
class oh extends Lt {
}
M(oh, "NAME", "picker"), M(oh, "Component", _x);
var ea, lt, hy, fr, rh, sl = {}, dy = [], ux = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function nn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function py(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function my(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ea.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return hs(t, l, o, s, null);
}
function hs(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++hy };
  return s == null && lt.vnode != null && lt.vnode(r), r;
}
function Yi() {
  return { current: null };
}
function na(t) {
  return t.children;
}
function hr(t, e) {
  this.props = t, this.context = e;
}
function Vr(t, e) {
  if (e == null)
    return t.__ ? Vr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Vr(t) : null;
}
function gy(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return gy(t);
  }
}
function ih(t) {
  (!t.__d && (t.__d = !0) && fr.push(t) && !ll.__r++ || rh !== lt.debounceRendering) && ((rh = lt.debounceRendering) || setTimeout)(ll);
}
function ll() {
  for (var t; ll.__r = fr.length; )
    t = fr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), fr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = nn({}, r)).__v = r.__v + 1, H_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Vr(r), r.__h), wy(o, r), r.__e != l && gy(r)));
    });
}
function yy(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || dy, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? hs(null, a, null, null, a) : Array.isArray(a) ? hs(na, { children: a }, null, null, null) : a.__b > 0 ? hs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      H_(t, a, u = u || sl, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = vy(a, _, t) : _ = by(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Vr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && ky(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      $y(p[i], p[++i], p[++i]);
}
function vy(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? vy(o, e, n) : by(n, o, o, s, o.__e, e));
  return e;
}
function by(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function fx(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || cl(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || cl(t, r, e[r], n[r], o);
}
function sh(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || ux.test(e) ? n : n + "px";
}
function cl(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || sh(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || sh(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? ch : lh, r) : t.removeEventListener(e, r ? ch : lh, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function lh(t) {
  this.l[t.type + !1](lt.event ? lt.event(t) : t);
}
function ch(t) {
  this.l[t.type + !0](lt.event ? lt.event(t) : t);
}
function H_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = lt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new hr(p, g), i.constructor = b, i.render = dx), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = nn({}, i.__s)), nn(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = lt.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = nn(nn({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === na && h.key == null ? h.props.children : h, yy(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = hx(n.__e, e, n, o, s, r, l, _);
    (h = lt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), lt.__e(k, e, n);
  }
}
function wy(t, e) {
  lt.__c && lt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      lt.__e(o, n.__v);
    }
  });
}
function hx(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && ea.call(t.childNodes), h = (d = n.props || sl).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (fx(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, yy(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Vr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && py(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && cl(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && cl(t, "checked", f, d.checked, !1));
  }
  return t;
}
function $y(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    lt.__e(o, n);
  }
}
function ky(t, e, n) {
  var o, s;
  if (lt.unmount && lt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || $y(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        lt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && ky(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || py(t.__e), t.__ = t.__e = t.__d = void 0;
}
function dx(t, e, n) {
  return this.constructor(t, n);
}
function px(t, e, n) {
  var o, s, r;
  lt.__ && lt.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], H_(e, t = (!o && n || e).__k = my(na, null, [t]), s || sl, sl, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? ea.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), wy(r, t);
}
ea = dy.slice, lt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, hy = 0, hr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = nn({}, this.state), typeof t == "function" && (t = t(nn({}, n), this.props)), t && nn(n, t), t != null && this.__v && (e && this._sb.push(e), ih(this));
}, hr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ih(this));
}, hr.prototype.render = na, fr = [], ll.__r = 0;
var mx = 0;
function jt(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --mx, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return lt.vnode && lt.vnode(_), _;
}
var al = {}, gx = {
  get exports() {
    return al;
  },
  set exports(t) {
    al = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(gg, function() {
    var n = 1e3, o = 6e4, s = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", i = "week", d = "month", u = "quarter", a = "year", f = "date", v = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var C = ["th", "st", "nd", "rd"], x = N % 100;
      return "[" + N + (C[(x - 20) % 10] || C[x] || C[0]) + "]";
    } }, w = function(N, C, x) {
      var D = String(N);
      return !D || D.length >= C ? N : "" + Array(C + 1 - D.length).join(x) + N;
    }, $ = { s: w, z: function(N) {
      var C = -N.utcOffset(), x = Math.abs(C), D = Math.floor(x / 60), L = x % 60;
      return (C <= 0 ? "+" : "-") + w(D, 2, "0") + ":" + w(L, 2, "0");
    }, m: function N(C, x) {
      if (C.date() < x.date())
        return -N(x, C);
      var D = 12 * (x.year() - C.year()) + (x.month() - C.month()), L = C.clone().add(D, d), O = x - L < 0, P = C.clone().add(D + (O ? -1 : 1), d);
      return +(-(D + (x - L) / (O ? L - P : P - L)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: a, w: i, d: h, D: f, h: _, m: c, s: l, ms: r, Q: u }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, S = "en", A = {};
    A[S] = g;
    var E = function(N) {
      return N instanceof q;
    }, b = function N(C, x, D) {
      var L;
      if (!C)
        return S;
      if (typeof C == "string") {
        var O = C.toLowerCase();
        A[O] && (L = O), x && (A[O] = x, L = O);
        var P = C.split("-");
        if (!L && P.length > 1)
          return N(P[0]);
      } else {
        var I = C.name;
        A[I] = C, L = I;
      }
      return !D && L && (S = L), L || !D && S;
    }, k = function(N, C) {
      if (E(N))
        return N.clone();
      var x = typeof C == "object" ? C : {};
      return x.date = N, x.args = arguments, new q(x);
    }, R = $;
    R.l = b, R.i = E, R.w = function(N, C) {
      return k(N, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var q = function() {
      function N(x) {
        this.$L = b(x.locale, null, !0), this.parse(x);
      }
      var C = N.prototype;
      return C.parse = function(x) {
        this.$d = function(D) {
          var L = D.date, O = D.utc;
          if (L === null)
            return new Date(NaN);
          if (R.u(L))
            return new Date();
          if (L instanceof Date)
            return new Date(L);
          if (typeof L == "string" && !/Z$/i.test(L)) {
            var P = L.match(p);
            if (P) {
              var I = P[2] - 1 || 0, V = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V);
            }
          }
          return new Date(L);
        }(x), this.$x = x.x || {}, this.init();
      }, C.init = function() {
        var x = this.$d;
        this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
      }, C.$utils = function() {
        return R;
      }, C.isValid = function() {
        return this.$d.toString() !== v;
      }, C.isSame = function(x, D) {
        var L = k(x);
        return this.startOf(D) <= L && L <= this.endOf(D);
      }, C.isAfter = function(x, D) {
        return k(x) < this.startOf(D);
      }, C.isBefore = function(x, D) {
        return this.endOf(D) < k(x);
      }, C.$g = function(x, D, L) {
        return R.u(x) ? this[D] : this.set(L, x);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(x, D) {
        var L = this, O = !!R.u(D) || D, P = R.p(x), I = function(ct, X) {
          var at = R.w(L.$u ? Date.UTC(L.$y, X, ct) : new Date(L.$y, X, ct), L);
          return O ? at : at.endOf(h);
        }, V = function(ct, X) {
          return R.w(L.toDate()[ct].apply(L.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), L);
        }, z = this.$W, K = this.$M, xt = this.$D, B = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, K) : I(0, K + 1);
          case i:
            var Z = this.$locale().weekStart || 0, kt = (z < Z ? z + 7 : z) - Z;
            return I(O ? xt - kt : xt + (6 - kt), K);
          case h:
          case f:
            return V(B + "Hours", 0);
          case _:
            return V(B + "Minutes", 1);
          case c:
            return V(B + "Seconds", 2);
          case l:
            return V(B + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, C.endOf = function(x) {
        return this.startOf(x, !1);
      }, C.$set = function(x, D) {
        var L, O = R.p(x), P = "set" + (this.$u ? "UTC" : ""), I = (L = {}, L[h] = P + "Date", L[f] = P + "Date", L[d] = P + "Month", L[a] = P + "FullYear", L[_] = P + "Hours", L[c] = P + "Minutes", L[l] = P + "Seconds", L[r] = P + "Milliseconds", L)[O], V = O === h ? this.$D + (D - this.$W) : D;
        if (O === d || O === a) {
          var z = this.clone().set(f, 1);
          z.$d[I](V), z.init(), this.$d = z.set(f, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          I && this.$d[I](V);
        return this.init(), this;
      }, C.set = function(x, D) {
        return this.clone().$set(x, D);
      }, C.get = function(x) {
        return this[R.p(x)]();
      }, C.add = function(x, D) {
        var L, O = this;
        x = Number(x);
        var P = R.p(D), I = function(K) {
          var xt = k(O);
          return R.w(xt.date(xt.date() + Math.round(K * x)), O);
        };
        if (P === d)
          return this.set(d, this.$M + x);
        if (P === a)
          return this.set(a, this.$y + x);
        if (P === h)
          return I(1);
        if (P === i)
          return I(7);
        var V = (L = {}, L[c] = o, L[_] = s, L[l] = n, L)[P] || 1, z = this.$d.getTime() + x * V;
        return R.w(z, this);
      }, C.subtract = function(x, D) {
        return this.add(-1 * x, D);
      }, C.format = function(x) {
        var D = this, L = this.$locale();
        if (!this.isValid())
          return L.invalidDate || v;
        var O = x || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), I = this.$H, V = this.$m, z = this.$M, K = L.weekdays, xt = L.months, B = function(X, at, Ot, Ht) {
          return X && (X[at] || X(D, O)) || Ot[at].slice(0, Ht);
        }, Z = function(X) {
          return R.s(I % 12 || 12, X, "0");
        }, kt = L.meridiem || function(X, at, Ot) {
          var Ht = X < 12 ? "AM" : "PM";
          return Ot ? Ht.toLowerCase() : Ht;
        }, ct = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: R.s(z + 1, 2, "0"), MMM: B(L.monthsShort, z, xt, 3), MMMM: B(xt, z), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: B(L.weekdaysMin, this.$W, K, 2), ddd: B(L.weekdaysShort, this.$W, K, 3), dddd: K[this.$W], H: String(I), HH: R.s(I, 2, "0"), h: Z(1), hh: Z(2), a: kt(I, V, !0), A: kt(I, V, !1), m: String(V), mm: R.s(V, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(X, at) {
          return at || ct[X] || P.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(x, D, L) {
        var O, P = R.p(D), I = k(x), V = (I.utcOffset() - this.utcOffset()) * o, z = this - I, K = R.m(this, I);
        return K = (O = {}, O[a] = K / 12, O[d] = K, O[u] = K / 3, O[i] = (z - V) / 6048e5, O[h] = (z - V) / 864e5, O[_] = z / s, O[c] = z / o, O[l] = z / n, O)[P] || z, L ? K : R.a(K);
      }, C.daysInMonth = function() {
        return this.endOf(d).$D;
      }, C.$locale = function() {
        return A[this.$L];
      }, C.locale = function(x, D) {
        if (!x)
          return this.$L;
        var L = this.clone(), O = b(x, D, !0);
        return O && (L.$L = O), L;
      }, C.clone = function() {
        return R.w(this.$d, this);
      }, C.toDate = function() {
        return new Date(this.valueOf());
      }, C.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, C.toISOString = function() {
        return this.$d.toISOString();
      }, C.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), j = q.prototype;
    return k.prototype = j, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", f]].forEach(function(N) {
      j[N[1]] = function(C) {
        return this.$g(C, N[0], N[1]);
      };
    }), k.extend = function(N, C) {
      return N.$i || (N(C, q, k), N.$i = !0), k;
    }, k.locale = b, k.isDayjs = E, k.unix = function(N) {
      return k(1e3 * N);
    }, k.en = A[S], k.Ls = A, k.p = {}, k;
  });
})(gx);
const yx = (t = "00:00:00") => {
  const e = al(`1989-01-01 ${t}`);
  return {
    hour: e.hour(),
    minute: e.minute(),
    second: e.second()
  };
};
function vx() {
  let t = new Array(24).fill(0), e = new Array(60).fill(0), n = new Array(60).fill(0);
  return t = t.map((o, s) => o + s), e = e.map((o, s) => o + s), n = n.map((o, s) => o + s), { hourList: t, minuteList: e, secondList: n };
}
class bx extends hr {
  constructor() {
    super(...arguments);
    M(this, "cellHeight", 24);
    M(this, "ref", Yi());
    M(this, "hourRef", Yi());
    M(this, "minuteRef", Yi());
    M(this, "secondRef", Yi());
    M(this, "state", {
      selectTime: this.props.value || "00:00:00"
    });
  }
  handleMoveTime(n) {
    var s, r, l;
    const o = "smooth";
    n.hour && this.hourRef.current && ((s = this.hourRef.current) == null || s.scrollTo({ behavior: o, top: n.hour * this.cellHeight })), n.minute && this.minuteRef.current && ((r = this.minuteRef.current) == null || r.scrollTo({ behavior: o, top: n.minute * this.cellHeight })), n.second && this.secondRef.current && ((l = this.secondRef.current) == null || l.scrollTo({ behavior: o, top: n.second * this.cellHeight }));
  }
  handleChange(n) {
    this.handleMoveTime(n), this.setState({ selectTime: this.getTimeString(n) });
  }
  getTimeString(n) {
    return this.props.showSeconds ? `${(n == null ? void 0 : n.hour) && this.addZero(n.hour) || "00"}:${(n == null ? void 0 : n.minute) && this.addZero(n.minute) || "00"}:${(n == null ? void 0 : n.second) && this.addZero(n.second) || "00"}` : `${(n == null ? void 0 : n.hour) && this.addZero(n.hour) || "00"}:${(n == null ? void 0 : n.minute) && this.addZero(n.minute) || "00"}`;
  }
  addZero(n) {
    return n < 10 ? `0${n}` : n;
  }
  renderColumn(n, o) {
    const s = yx(this.state.selectTime);
    return o.map((r) => {
      const l = s[n] === r, c = { ...s, [n]: r };
      return /* @__PURE__ */ jt(
        "button",
        {
          className: F("btn", "size-sm", "ghost", "flex", { active: l }),
          type: "button",
          onClick: () => this.handleChange(c),
          children: this.addZero(r)
        },
        `unit-${n}-${r}`
      );
    });
  }
  onSubmit() {
    console.log(this.state.selectTime), this.props.onChange && this.props.onChange(this.state.selectTime);
  }
  onClear() {
    this.setState({ selectTime: "" }), this.props.onChange && this.props.onChange("");
  }
  render() {
    const { showSeconds: n, style: o } = this.props, { hourList: s, minuteList: r, secondList: l } = vx();
    return /* @__PURE__ */ jt("div", { className: F("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ jt("div", { className: F("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ jt("div", { className: "overflow-hidden", children: /* @__PURE__ */ jt("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", s) }) }),
        /* @__PURE__ */ jt("div", { className: "overflow-hidden", children: /* @__PURE__ */ jt("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ jt("div", { className: "overflow-hidden", children: /* @__PURE__ */ jt("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ jt("div", { className: F("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ jt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ jt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function Hi(t) {
  return t.split("-")[1];
}
function W_(t) {
  return t === "y" ? "height" : "width";
}
function ko(t) {
  return t.split("-")[0];
}
function oa(t) {
  return ["top", "bottom"].includes(ko(t)) ? "x" : "y";
}
function ah(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = oa(e), _ = W_(c), h = o[_] / 2 - s[_] / 2, i = ko(e), d = c === "x";
  let u;
  switch (i) {
    case "top":
      u = {
        x: r,
        y: o.y - s.height
      };
      break;
    case "bottom":
      u = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      u = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      u = {
        x: o.x - s.width,
        y: l
      };
      break;
    default:
      u = {
        x: o.x,
        y: o.y
      };
  }
  switch (Hi(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const wx = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: s
  }), {
    x: i,
    y: d
  } = ah(h, o, _), u = o, a = {}, f = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: p,
      fn: m
    } = c[v], {
      x: g,
      y: w,
      data: $,
      reset: S
    } = await m({
      x: i,
      y: d,
      initialPlacement: o,
      placement: u,
      strategy: s,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (i = g ?? i, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...$
      }
    }, S && f <= 50) {
      f++, typeof S == "object" && (S.placement && (u = S.placement), S.rects && (h = S.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: s
      }) : S.rects), {
        x: i,
        y: d
      } = ah(h, u, _)), v = -1;
      continue;
    }
  }
  return {
    x: i,
    y: d,
    placement: u,
    strategy: s,
    middlewareData: a
  };
};
function $x(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function xy(t) {
  return typeof t != "number" ? $x(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function _l(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function kx(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: s,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: i = "viewport",
    elementContext: d = "floating",
    altBoundary: u = !1,
    padding: a = 0
  } = e, f = xy(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = _l(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: i,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: s
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = _l(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - S.top + f.top) / $.y,
    bottom: (S.bottom - m.bottom + f.bottom) / $.y,
    left: (m.left - S.left + f.left) / $.x,
    right: (S.right - m.right + f.right) / $.x
  };
}
const xx = Math.min, Sx = Math.max;
function Cx(t, e, n) {
  return Sx(t, xx(e, n));
}
const Ex = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: s,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = xy(o), i = {
      x: s,
      y: r
    }, d = oa(l), u = W_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], E = w / 2 - a[u] / 2 + $, b = Cx(S, E, A), R = Hi(l) != null && E != b && c.reference[u] / 2 - (E < S ? h[f] : h[v]) - a[u] / 2 < 0 ? E < S ? S - E : A - E : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: E - b
      }
    };
  }
}), Tx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ul(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Tx[e]);
}
function Ax(t, e, n) {
  n === void 0 && (n = !1);
  const o = Hi(t), s = oa(t), r = W_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = ul(l)), {
    main: l,
    cross: ul(l)
  };
}
const Lx = {
  start: "end",
  end: "start"
};
function Va(t) {
  return t.replace(/start|end/g, (e) => Lx[e]);
}
function Mx(t) {
  const e = ul(t);
  return [Va(t), e, Va(e)];
}
function Rx(t, e, n) {
  const o = ["left", "right"], s = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? s : o : e ? o : s;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function Nx(t, e, n, o) {
  const s = Hi(t);
  let r = Rx(ko(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(Va)))), r;
}
const Dx = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: s,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: i = !0,
        fallbackPlacements: d,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: f = !0,
        ...v
      } = t, p = ko(o), m = ko(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [ul(l)] : Mx(l));
      !d && a !== "none" && w.push(...Nx(l, f, a, g));
      const $ = [l, ...w], S = await kx(e, v), A = [];
      let E = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = Ax(o, r, g);
        A.push(S[R], S[q]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var b;
        const R = (((b = s.flip) == null ? void 0 : b.index) || 0) + 1, q = $[R];
        if (q)
          return {
            data: {
              index: R,
              overflows: E
            },
            reset: {
              placement: q
            }
          };
        let j = "bottom";
        switch (u) {
          case "bestFit": {
            var k;
            const N = (k = E.map((C) => [C, C.overflows.filter((x) => x > 0).reduce((x, D) => x + D, 0)]).sort((C, x) => C[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            N && (j = N);
            break;
          }
          case "initialPlacement":
            j = l;
            break;
        }
        if (o !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
async function Px(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = ko(n), c = Hi(n), _ = oa(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: u,
    crossAxis: a,
    alignmentAxis: f
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof f == "number" && (a = c === "end" ? f * -1 : f), _ ? {
    x: a * i,
    y: u * h
  } : {
    x: u * h,
    y: a * i
  };
}
const Ox = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await Px(e, t);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
function Kt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function me(t) {
  return Kt(t).getComputedStyle(t);
}
function un(t) {
  return Cy(t) ? (t.nodeName || "").toLowerCase() : "";
}
let qi;
function Sy() {
  if (qi)
    return qi;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (qi = t.brands.map((e) => e.brand + "/" + e.version).join(" "), qi) : navigator.userAgent;
}
function Re(t) {
  return t instanceof Kt(t).HTMLElement;
}
function re(t) {
  return t instanceof Kt(t).Element;
}
function Cy(t) {
  return t instanceof Kt(t).Node;
}
function _h(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Kt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function ra(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = me(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function Hx(t) {
  return ["table", "td", "th"].includes(un(t));
}
function U_(t) {
  const e = /firefox/i.test(Sy()), n = me(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function Ey() {
  return !/^((?!chrome|android).)*safari/i.test(Sy());
}
function I_(t) {
  return ["html", "body", "#document"].includes(un(t));
}
const uh = Math.min, dr = Math.max, fl = Math.round;
function Ty(t) {
  const e = me(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = fl(n) !== s || fl(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Ay(t) {
  return re(t) ? t : t.contextElement;
}
const Ly = {
  x: 1,
  y: 1
};
function Bn(t) {
  const e = Ay(t);
  if (!Re(e))
    return Ly;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = Ty(e);
  let l = (r ? fl(n.width) : n.width) / o, c = (r ? fl(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Nn(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Ay(t);
  let _ = Ly;
  e && (o ? re(o) && (_ = Bn(o)) : _ = Bn(t));
  const h = c ? Kt(c) : window, i = !Ey() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const v = Kt(c), p = o && re(o) ? Kt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = Bn(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat($.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat($.paddingTop)) * g.y, d *= g.x, u *= g.y, a *= g.x, f *= g.y, d += w.x, u += w.y, m = Kt(m).frameElement;
    }
  }
  return {
    width: a,
    height: f,
    top: u,
    right: d + a,
    bottom: u + f,
    left: d,
    x: d,
    y: u
  };
}
function gn(t) {
  return ((Cy(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ia(t) {
  return re(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function My(t) {
  return Nn(gn(t)).left + ia(t).scrollLeft;
}
function Wx(t, e, n) {
  const o = Re(e), s = gn(e), r = Nn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((un(e) !== "body" || ra(s)) && (l = ia(e)), Re(e)) {
      const _ = Nn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = My(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Yr(t) {
  if (un(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (_h(t) ? t.host : null) || // Fallback
    gn(t)
  );
  return _h(e) ? e.host : e;
}
function fh(t) {
  return !Re(t) || me(t).position === "fixed" ? null : t.offsetParent;
}
function Ux(t) {
  let e = Yr(t);
  for (; Re(e) && !I_(e); ) {
    if (U_(e))
      return e;
    e = Yr(e);
  }
  return null;
}
function hh(t) {
  const e = Kt(t);
  let n = fh(t);
  for (; n && Hx(n) && me(n).position === "static"; )
    n = fh(n);
  return n && (un(n) === "html" || un(n) === "body" && me(n).position === "static" && !U_(n)) ? e : n || Ux(t) || e;
}
function Ix(t) {
  return Ty(t);
}
function Fx(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const s = Re(n), r = gn(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((s || !s && o !== "fixed") && ((un(n) !== "body" || ra(r)) && (l = ia(n)), Re(n))) {
    const h = Nn(n);
    c = Bn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Bx(t, e) {
  const n = Kt(t), o = gn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = Ey();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function jx(t) {
  var e;
  const n = gn(t), o = ia(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = dr(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = dr(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + My(t);
  const _ = -o.scrollTop;
  return me(s || n).direction === "rtl" && (c += dr(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Ry(t) {
  const e = Yr(t);
  return I_(e) ? t.ownerDocument.body : Re(e) && ra(e) ? e : Ry(e);
}
function pr(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Ry(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Kt(o);
  return s ? e.concat(r, r.visualViewport || [], ra(o) ? o : []) : e.concat(o, pr(o));
}
function zx(t, e) {
  const n = Nn(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Re(t) ? Bn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = s * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function dh(t, e, n) {
  return e === "viewport" ? _l(Bx(t, n)) : re(e) ? zx(e, n) : _l(jx(gn(t)));
}
function Vx(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = pr(t).filter((c) => re(c) && un(c) !== "body"), s = null;
  const r = me(t).position === "fixed";
  let l = r ? Yr(t) : t;
  for (; re(l) && !I_(l); ) {
    const c = me(l), _ = U_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Yr(l);
  }
  return e.set(t, o), o;
}
function Yx(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? Vx(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = dh(e, i, s);
    return h.top = dr(d.top, h.top), h.right = uh(d.right, h.right), h.bottom = uh(d.bottom, h.bottom), h.left = dr(d.left, h.left), h;
  }, dh(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const qx = {
  getClippingRect: Yx,
  convertOffsetParentRelativeRectToViewportRelativeRect: Fx,
  isElement: re,
  getDimensions: Ix,
  getOffsetParent: hh,
  getDocumentElement: gn,
  getScale: Bn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || hh, r = this.getDimensions;
    return {
      reference: Wx(e, await s(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => me(t).direction === "rtl"
};
function Gx(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...re(t) ? pr(t) : t.contextElement ? pr(t.contextElement) : [], ...pr(e)] : [];
  h.forEach((f) => {
    _ && f.addEventListener("scroll", n, {
      passive: !0
    }), r && f.addEventListener("resize", n);
  });
  let i = null;
  if (l) {
    let f = !0;
    i = new ResizeObserver(() => {
      f || n(), f = !1;
    }), re(t) && !c && i.observe(t), !re(t) && t.contextElement && !c && i.observe(t.contextElement), i.observe(e);
  }
  let d, u = c ? Nn(t) : null;
  c && a();
  function a() {
    const f = Nn(t);
    u && (f.x !== u.x || f.y !== u.y || f.width !== u.width || f.height !== u.height) && n(), u = f, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var f;
    h.forEach((v) => {
      _ && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), (f = i) == null || f.disconnect(), i = null, c && cancelAnimationFrame(d);
  };
}
const Xx = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: qx,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return wx(t, e, {
    ...s,
    platform: r
  });
};
var lo, co, Cn, yi, Rt, vi, bi, Ya, ec, Ny, nc, Dy, oc, Py, rc, Oy, ic, Hy, sc, Wy, lc, Uy, cc;
const bn = class extends se {
  constructor() {
    super(...arguments);
    T(this, bi);
    T(this, ec);
    T(this, nc);
    T(this, oc);
    T(this, rc);
    T(this, ic);
    T(this, sc);
    T(this, lc);
    T(this, lo, void 0);
    T(this, co, 0);
    T(this, Cn, void 0);
    T(this, yi, void 0);
    T(this, Rt, void 0);
    T(this, vi, void 0);
    M(this, "hideLater", () => {
      y(this, cc).call(this), H(this, co, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, cc, () => {
      clearTimeout(y(this, co)), H(this, co, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, Cn)) == null ? void 0 : n.classList.contains(bn.CLASS_SHOW);
  }
  get timepicker() {
    return y(this, Cn) || W(this, nc, Dy).call(this);
  }
  get trigger() {
    return y(this, yi) || this.element;
  }
  get elementShowClass() {
    return `with-${bn.NAME}-show`;
  }
  show(n) {
    return H(this, yi, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(bn.CLASS_SHOW), W(this, sc, Wy).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = y(this, vi)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, Cn)) == null || o.classList.remove(bn.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  static show(n) {
    var l;
    const { event: o, ...s } = n, r = this.ensure(document.body);
    return Object.keys(s).length && r.setOptions(s), r.show(o), (l = o == null ? void 0 : o.stopPropagation) == null || l.call(o), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-timepicker" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)))
      return;
    const l = this.getAll().entries(), c = new Set(s || []);
    for (const [i, d] of l)
      c.has(i) || d.hide();
  }
};
let Yt = bn;
lo = new WeakMap(), co = new WeakMap(), Cn = new WeakMap(), yi = new WeakMap(), Rt = new WeakMap(), vi = new WeakMap(), bi = new WeakSet(), Ya = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, ec = new WeakSet(), Ny = function() {
  const n = W(this, bi, Ya).call(this);
  return H(this, Rt, document.createElement("div")), y(this, Rt).style.position = "absolute", y(this, Rt).style.width = `${n}px`, y(this, Rt).style.height = `${n}px`, y(this, Rt).style.transform = "rotate(45deg)", y(this, Rt);
}, nc = new WeakSet(), Dy = function() {
  const n = bn.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), px(my(bx, { ...this.options }), o), this.options.arrow && o.append(W(this, ec, Ny).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, Cn, o), o;
}, oc = new WeakSet(), Py = function() {
  var l;
  const n = W(this, bi, Ya).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [Ox(n), Dx()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && y(this, Rt) && ((l = r.middleware) == null || l.push(Ex({ element: y(this, Rt) }))), r;
}, rc = new WeakSet(), Oy = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, ic = new WeakSet(), Hy = function(n) {
  return n === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : n === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : n === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, sc = new WeakSet(), Wy = function() {
  const n = W(this, oc, Py).call(this), o = W(this, lc, Uy).call(this);
  H(this, vi, Gx(o, this.timepicker, () => {
    Xx(o, this.timepicker, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.timepicker.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, rc, Oy).call(this, _);
      if (l.arrow && y(this, Rt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(y(this, Rt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Rt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, ic, Hy).call(this, _)
        });
      }
    });
  }));
}, lc = new WeakSet(), Uy = function() {
  return y(this, lo) || H(this, lo, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: s } = n;
        return {
          width: 0,
          height: 0,
          top: s,
          right: o,
          bottom: s,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), y(this, lo);
}, cc = new WeakMap(), M(Yt, "NAME", "timepicker"), M(Yt, "CLASSNAME", "timepicker"), M(Yt, "CLASS_SHOW", "show"), M(Yt, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), M(Yt, "DEFAULT", {
  value: al().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Yt.MENU_SELECTOR);
  n ? Yt.ensure(n).toggle() : Yt.clear({ event: t });
});
const Jx = (t) => {
  const e = document.getElementsByClassName("with-timepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Yt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Yt.clear({ event: t });
};
window.addEventListener("scroll", Jx, !0);
class ph extends Lt {
}
M(ph, "NAME", "toolbar"), M(ph, "Component", vo);
function Wi(t) {
  return t.split("-")[1];
}
function F_(t) {
  return t === "y" ? "height" : "width";
}
function xo(t) {
  return t.split("-")[0];
}
function sa(t) {
  return ["top", "bottom"].includes(xo(t)) ? "x" : "y";
}
function mh(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = sa(e), _ = F_(c), h = o[_] / 2 - s[_] / 2, i = xo(e), d = c === "x";
  let u;
  switch (i) {
    case "top":
      u = {
        x: r,
        y: o.y - s.height
      };
      break;
    case "bottom":
      u = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      u = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      u = {
        x: o.x - s.width,
        y: l
      };
      break;
    default:
      u = {
        x: o.x,
        y: o.y
      };
  }
  switch (Wi(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const Kx = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: s
  }), {
    x: i,
    y: d
  } = mh(h, o, _), u = o, a = {}, f = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: p,
      fn: m
    } = c[v], {
      x: g,
      y: w,
      data: $,
      reset: S
    } = await m({
      x: i,
      y: d,
      initialPlacement: o,
      placement: u,
      strategy: s,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (i = g ?? i, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...$
      }
    }, S && f <= 50) {
      f++, typeof S == "object" && (S.placement && (u = S.placement), S.rects && (h = S.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: s
      }) : S.rects), {
        x: i,
        y: d
      } = mh(h, u, _)), v = -1;
      continue;
    }
  }
  return {
    x: i,
    y: d,
    placement: u,
    strategy: s,
    middlewareData: a
  };
};
function Zx(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Iy(t) {
  return typeof t != "number" ? Zx(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function hl(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Qx(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: s,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: i = "viewport",
    elementContext: d = "floating",
    altBoundary: u = !1,
    padding: a = 0
  } = e, f = Iy(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = hl(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: i,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: s
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = hl(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - S.top + f.top) / $.y,
    bottom: (S.bottom - m.bottom + f.bottom) / $.y,
    left: (m.left - S.left + f.left) / $.x,
    right: (S.right - m.right + f.right) / $.x
  };
}
const tS = Math.min, eS = Math.max;
function nS(t, e, n) {
  return eS(t, tS(e, n));
}
const oS = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: s,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = Iy(o), i = {
      x: s,
      y: r
    }, d = sa(l), u = F_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], E = w / 2 - a[u] / 2 + $, b = nS(S, E, A), R = Wi(l) != null && E != b && c.reference[u] / 2 - (E < S ? h[f] : h[v]) - a[u] / 2 < 0 ? E < S ? S - E : A - E : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: E - b
      }
    };
  }
}), rS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function dl(t) {
  return t.replace(/left|right|bottom|top/g, (e) => rS[e]);
}
function iS(t, e, n) {
  n === void 0 && (n = !1);
  const o = Wi(t), s = sa(t), r = F_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = dl(l)), {
    main: l,
    cross: dl(l)
  };
}
const sS = {
  start: "end",
  end: "start"
};
function qa(t) {
  return t.replace(/start|end/g, (e) => sS[e]);
}
function lS(t) {
  const e = dl(t);
  return [qa(t), e, qa(e)];
}
function cS(t, e, n) {
  const o = ["left", "right"], s = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? s : o : e ? o : s;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function aS(t, e, n, o) {
  const s = Wi(t);
  let r = cS(xo(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(qa)))), r;
}
const _S = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: s,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: i = !0,
        fallbackPlacements: d,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: f = !0,
        ...v
      } = t, p = xo(o), m = xo(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [dl(l)] : lS(l));
      !d && a !== "none" && w.push(...aS(l, f, a, g));
      const $ = [l, ...w], S = await Qx(e, v), A = [];
      let E = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = iS(o, r, g);
        A.push(S[R], S[q]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var b;
        const R = (((b = s.flip) == null ? void 0 : b.index) || 0) + 1, q = $[R];
        if (q)
          return {
            data: {
              index: R,
              overflows: E
            },
            reset: {
              placement: q
            }
          };
        let j = "bottom";
        switch (u) {
          case "bestFit": {
            var k;
            const N = (k = E.map((C) => [C, C.overflows.filter((x) => x > 0).reduce((x, D) => x + D, 0)]).sort((C, x) => C[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            N && (j = N);
            break;
          }
          case "initialPlacement":
            j = l;
            break;
        }
        if (o !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
async function uS(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = xo(n), c = Wi(n), _ = sa(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: u,
    crossAxis: a,
    alignmentAxis: f
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof f == "number" && (a = c === "end" ? f * -1 : f), _ ? {
    x: a * i,
    y: u * h
  } : {
    x: u * h,
    y: a * i
  };
}
const fS = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await uS(e, t);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
function Zt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ge(t) {
  return Zt(t).getComputedStyle(t);
}
function fn(t) {
  return By(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Gi;
function Fy() {
  if (Gi)
    return Gi;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Gi = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Gi) : navigator.userAgent;
}
function Ne(t) {
  return t instanceof Zt(t).HTMLElement;
}
function ie(t) {
  return t instanceof Zt(t).Element;
}
function By(t) {
  return t instanceof Zt(t).Node;
}
function gh(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Zt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function la(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = ge(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function hS(t) {
  return ["table", "td", "th"].includes(fn(t));
}
function B_(t) {
  const e = /firefox/i.test(Fy()), n = ge(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function jy() {
  return !/^((?!chrome|android).)*safari/i.test(Fy());
}
function j_(t) {
  return ["html", "body", "#document"].includes(fn(t));
}
const yh = Math.min, mr = Math.max, pl = Math.round;
function zy(t) {
  const e = ge(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = pl(n) !== s || pl(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Vy(t) {
  return ie(t) ? t : t.contextElement;
}
const Yy = {
  x: 1,
  y: 1
};
function jn(t) {
  const e = Vy(t);
  if (!Ne(e))
    return Yy;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = zy(e);
  let l = (r ? pl(n.width) : n.width) / o, c = (r ? pl(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Dn(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Vy(t);
  let _ = Yy;
  e && (o ? ie(o) && (_ = jn(o)) : _ = jn(t));
  const h = c ? Zt(c) : window, i = !jy() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const v = Zt(c), p = o && ie(o) ? Zt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = jn(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat($.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat($.paddingTop)) * g.y, d *= g.x, u *= g.y, a *= g.x, f *= g.y, d += w.x, u += w.y, m = Zt(m).frameElement;
    }
  }
  return {
    width: a,
    height: f,
    top: u,
    right: d + a,
    bottom: u + f,
    left: d,
    x: d,
    y: u
  };
}
function yn(t) {
  return ((By(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ca(t) {
  return ie(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function qy(t) {
  return Dn(yn(t)).left + ca(t).scrollLeft;
}
function dS(t, e, n) {
  const o = Ne(e), s = yn(e), r = Dn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((fn(e) !== "body" || la(s)) && (l = ca(e)), Ne(e)) {
      const _ = Dn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = qy(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function qr(t) {
  if (fn(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (gh(t) ? t.host : null) || // Fallback
    yn(t)
  );
  return gh(e) ? e.host : e;
}
function vh(t) {
  return !Ne(t) || ge(t).position === "fixed" ? null : t.offsetParent;
}
function pS(t) {
  let e = qr(t);
  for (; Ne(e) && !j_(e); ) {
    if (B_(e))
      return e;
    e = qr(e);
  }
  return null;
}
function bh(t) {
  const e = Zt(t);
  let n = vh(t);
  for (; n && hS(n) && ge(n).position === "static"; )
    n = vh(n);
  return n && (fn(n) === "html" || fn(n) === "body" && ge(n).position === "static" && !B_(n)) ? e : n || pS(t) || e;
}
function mS(t) {
  return zy(t);
}
function gS(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const s = Ne(n), r = yn(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((s || !s && o !== "fixed") && ((fn(n) !== "body" || la(r)) && (l = ca(n)), Ne(n))) {
    const h = Dn(n);
    c = jn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function yS(t, e) {
  const n = Zt(t), o = yn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = jy();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function vS(t) {
  var e;
  const n = yn(t), o = ca(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = mr(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = mr(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + qy(t);
  const _ = -o.scrollTop;
  return ge(s || n).direction === "rtl" && (c += mr(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Gy(t) {
  const e = qr(t);
  return j_(e) ? t.ownerDocument.body : Ne(e) && la(e) ? e : Gy(e);
}
function gr(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Gy(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Zt(o);
  return s ? e.concat(r, r.visualViewport || [], la(o) ? o : []) : e.concat(o, gr(o));
}
function bS(t, e) {
  const n = Dn(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Ne(t) ? jn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = s * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function wh(t, e, n) {
  return e === "viewport" ? hl(yS(t, n)) : ie(e) ? bS(e, n) : hl(vS(yn(t)));
}
function wS(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = gr(t).filter((c) => ie(c) && fn(c) !== "body"), s = null;
  const r = ge(t).position === "fixed";
  let l = r ? qr(t) : t;
  for (; ie(l) && !j_(l); ) {
    const c = ge(l), _ = B_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = qr(l);
  }
  return e.set(t, o), o;
}
function $S(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? wS(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = wh(e, i, s);
    return h.top = mr(d.top, h.top), h.right = yh(d.right, h.right), h.bottom = yh(d.bottom, h.bottom), h.left = mr(d.left, h.left), h;
  }, wh(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const kS = {
  getClippingRect: $S,
  convertOffsetParentRelativeRectToViewportRelativeRect: gS,
  isElement: ie,
  getDimensions: mS,
  getOffsetParent: bh,
  getDocumentElement: yn,
  getScale: jn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || bh, r = this.getDimensions;
    return {
      reference: dS(e, await s(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => ge(t).direction === "rtl"
};
function xS(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...ie(t) ? gr(t) : t.contextElement ? gr(t.contextElement) : [], ...gr(e)] : [];
  h.forEach((f) => {
    _ && f.addEventListener("scroll", n, {
      passive: !0
    }), r && f.addEventListener("resize", n);
  });
  let i = null;
  if (l) {
    let f = !0;
    i = new ResizeObserver(() => {
      f || n(), f = !1;
    }), ie(t) && !c && i.observe(t), !ie(t) && t.contextElement && !c && i.observe(t.contextElement), i.observe(e);
  }
  let d, u = c ? Dn(t) : null;
  c && a();
  function a() {
    const f = Dn(t);
    u && (f.x !== u.x || f.y !== u.y || f.width !== u.width || f.height !== u.height) && n(), u = f, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var f;
    h.forEach((v) => {
      _ && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), (f = i) == null || f.disconnect(), i = null, c && cancelAnimationFrame(d);
  };
}
const SS = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: kS,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return Kx(t, e, {
    ...s,
    platform: r
  });
};
var ao, _o, uo, En, Nt, ac, wi, $i, Ga, _c, Xy, uc, Jy, fc, Ky, hc, Zy, dc, Qy, pc, tv, mc, ev, fo, gc, nv;
const wn = class extends se {
  constructor() {
    super(...arguments);
    T(this, $i);
    T(this, _c);
    T(this, uc);
    T(this, fc);
    T(this, hc);
    T(this, dc);
    T(this, pc);
    T(this, mc);
    T(this, gc);
    T(this, ao, !1);
    T(this, _o, void 0);
    T(this, uo, 0);
    T(this, En, void 0);
    T(this, Nt, void 0);
    T(this, ac, void 0);
    T(this, wi, void 0);
    M(this, "hideLater", () => {
      y(this, fo).call(this), H(this, uo, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, fo, () => {
      clearTimeout(y(this, uo)), H(this, uo, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, En)) == null ? void 0 : n.classList.contains(wn.CLASS_SHOW);
  }
  get tooltip() {
    return y(this, En) || W(this, uc, Jy).call(this);
  }
  get trigger() {
    return y(this, ac) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${wn.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !y(this, ao) && this.isHover && W(this, gc, nv).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(wn.CLASS_SHOW), W(this, pc, tv).call(this), !0;
  }
  hide() {
    var n, o;
    return (n = y(this, wi)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, En)) == null || o.classList.remove(wn.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    y(this, ao) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", y(this, fo)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, s = this.getAll().entries(), r = new Set(o || []);
    for (const [l, c] of s)
      r.has(l) || c.hide();
  }
};
let qt = wn;
ao = new WeakMap(), _o = new WeakMap(), uo = new WeakMap(), En = new WeakMap(), Nt = new WeakMap(), ac = new WeakMap(), wi = new WeakMap(), $i = new WeakSet(), Ga = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, _c = new WeakSet(), Xy = function() {
  const n = W(this, $i, Ga).call(this);
  return H(this, Nt, document.createElement("div")), y(this, Nt).style.position = this.options.strategy, y(this, Nt).style.width = `${n}px`, y(this, Nt).style.height = `${n}px`, y(this, Nt).style.transform = "rotate(45deg)", y(this, Nt);
}, uc = new WeakSet(), Jy = function() {
  var s;
  const n = wn.TOOLTIP_CLASS;
  let o;
  if (this.isDynamic) {
    o = document.createElement("div");
    const r = this.options.className ? this.options.className.split(" ") : [];
    let l = [n, this.options.type || ""];
    l = l.concat(r), o.classList.add(...l), o[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const r = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (r != null && r.startsWith("#") && (o = document.querySelector(r)), !o) {
      const l = this.element.nextElementSibling;
      l != null && l.classList.contains(n) ? o = l : o = (s = this.element.parentNode) == null ? void 0 : s.querySelector(`.${n}`);
    }
  }
  if (this.options.arrow && (o == null || o.append(W(this, _c, Xy).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, En, o), o;
}, fc = new WeakSet(), Ky = function() {
  var l;
  const n = W(this, $i, Ga).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [fS(n), _S()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && y(this, Nt) && ((l = r.middleware) == null || l.push(oS({ element: y(this, Nt) }))), r;
}, hc = new WeakSet(), Zy = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, dc = new WeakSet(), Qy = function(n) {
  return n === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : n === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : n === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, pc = new WeakSet(), tv = function() {
  const n = W(this, fc, Ky).call(this), o = W(this, mc, ev).call(this);
  H(this, wi, xS(o, this.tooltip, () => {
    SS(o, this.tooltip, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.tooltip.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, hc, Zy).call(this, _);
      if (l.arrow && y(this, Nt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(y(this, Nt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Nt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, dc, Qy).call(this, _)
        });
      }
    });
  }));
}, mc = new WeakSet(), ev = function() {
  return y(this, _o) || H(this, _o, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: s } = n;
        return {
          width: 0,
          height: 0,
          top: s,
          right: o,
          bottom: s,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), y(this, _o);
}, fo = new WeakMap(), gc = new WeakSet(), nv = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", y(this, fo)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, ao, !0);
}, M(qt, "NAME", "tooltip"), M(qt, "TOOLTIP_CLASS", "tooltip"), M(qt, "CLASS_SHOW", "show"), M(qt, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), M(qt, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(qt.MENU_SELECTOR);
  if (n) {
    const o = qt.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    qt.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(qt.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = qt.ensure(n);
  o.isHover && o.show();
});
var ov, bt, rv, yr, $h, iv = {}, sv = [], CS = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function on(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function lv(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function wa(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++rv };
  return s == null && bt.vnode != null && bt.vnode(r), r;
}
function z_(t) {
  return t.children;
}
function vr(t, e) {
  this.props = t, this.context = e;
}
function Gr(t, e) {
  if (e == null)
    return t.__ ? Gr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Gr(t) : null;
}
function cv(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return cv(t);
  }
}
function kh(t) {
  (!t.__d && (t.__d = !0) && yr.push(t) && !ml.__r++ || $h !== bt.debounceRendering) && (($h = bt.debounceRendering) || setTimeout)(ml);
}
function ml() {
  for (var t; ml.__r = yr.length; )
    t = yr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), yr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = on({}, r)).__v = r.__v + 1, fv(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Gr(r), r.__h), TS(o, r), r.__e != l && cv(r)));
    });
}
function av(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || sv, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? wa(null, a, null, null, a) : Array.isArray(a) ? wa(z_, { children: a }, null, null, null) : a.__b > 0 ? wa(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      fv(t, a, u = u || iv, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = _v(a, _, t) : _ = uv(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Gr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && dv(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      hv(p[i], p[++i], p[++i]);
}
function _v(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? _v(o, e, n) : uv(n, o, o, s, o.__e, e));
  return e;
}
function uv(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function ES(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || gl(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || gl(t, r, e[r], n[r], o);
}
function xh(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || CS.test(e) ? n : n + "px";
}
function gl(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || xh(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || xh(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Ch : Sh, r) : t.removeEventListener(e, r ? Ch : Sh, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Sh(t) {
  this.l[t.type + !1](bt.event ? bt.event(t) : t);
}
function Ch(t) {
  this.l[t.type + !0](bt.event ? bt.event(t) : t);
}
function fv(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = bt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new vr(p, g), i.constructor = b, i.render = LS), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = on({}, i.__s)), on(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = bt.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = on(on({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === z_ && h.key == null ? h.props.children : h, av(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = AS(n.__e, e, n, o, s, r, l, _);
    (h = bt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), bt.__e(k, e, n);
  }
}
function TS(t, e) {
  bt.__c && bt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      bt.__e(o, n.__v);
    }
  });
}
function AS(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && ov.call(t.childNodes), h = (d = n.props || iv).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (ES(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, av(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Gr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && lv(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && gl(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && gl(t, "checked", f, d.checked, !1));
  }
  return t;
}
function hv(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    bt.__e(o, n);
  }
}
function dv(t, e, n) {
  var o, s;
  if (bt.unmount && bt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || hv(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        bt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && dv(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || lv(t.__e), t.__ = t.__e = t.__d = void 0;
}
function LS(t, e, n) {
  return this.constructor(t, n);
}
ov = sv.slice, bt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, rv = 0, vr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = on({}, this.state), typeof t == "function" && (t = t(on({}, n), this.props)), t && on(n, t), t != null && this.__v && (e && this._sb.push(e), kh(this));
}, vr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), kh(this));
}, vr.prototype.render = z_, yr = [], ml.__r = 0;
var MS = 0;
function yl(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --MS, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return bt.vnode && bt.vnode(_), _;
}
function RS({
  type: t,
  key: e,
  style: n,
  bounding: o,
  offsetX: s = 0,
  offsetY: r = 0,
  component: l,
  data: c,
  hidden: _,
  props: h,
  children: i,
  onRender: d,
  ...u
}) {
  if (_)
    return null;
  let a;
  d ? a = d(t, c) : l ? a = /* @__PURE__ */ yl(l, { ...h }) : a = c;
  const { left: f, top: v, width: p, height: m } = o;
  return /* @__PURE__ */ yl("div", { style: { width: p, height: m, left: f + s, top: v + r, ...n }, ...u, children: [
    a,
    i
  ] });
}
function NS(t, e, n = 0, o = 0) {
  const s = t.left + n, r = t.top + o;
  return !(s > e.left + e.width || r > e.top + e.height || s + t.width < e.left || r + t.height < e.top);
}
let DS = class extends vr {
  render() {
    const { width: e, height: n, cells: o, left: s, top: r, visibleBounding: l, onRenderCell: c, style: _, children: h, offsetX: i = 0, offsetY: d = 0, ...u } = this.props, a = l ? o.filter((f) => NS(f.bounding, l, i, d)) : o;
    return /* @__PURE__ */ yl("div", { style: { width: e, height: n, left: s, top: r, ..._ }, ...u, children: [
      a.map((f) => /* @__PURE__ */ yl(RS, { offsetX: i, offsetY: d, ...f })),
      h
    ] });
  }
};
class Eh extends Lt {
}
M(Eh, "NAME", "virtualgrid"), M(Eh, "Component", DS);
var te, ki, xi, Ie, St, tt, yc, pv, vc, mv, Si, Xa, bc, gv, wc, yv, Ci, Ja, $c, vv, kc, bv, xc, wv;
class PS {
  constructor(e, n = {}) {
    T(this, yc);
    T(this, vc);
    T(this, Si);
    T(this, bc);
    T(this, wc);
    T(this, Ci);
    T(this, $c);
    T(this, kc);
    T(this, xc);
    T(this, te, void 0);
    T(this, ki, void 0);
    T(this, xi, void 0);
    T(this, Ie, void 0);
    T(this, St, void 0);
    T(this, tt, new XMLHttpRequest());
    var o, s;
    if (H(this, St, n), H(this, te, e instanceof HTMLFormElement ? e : document.querySelector(e)), !(y(this, te) instanceof HTMLFormElement))
      throw new Error("Param form must be a HTMLFormElement.");
    if (H(this, xi, (this.formEl.method ?? n.method ?? "POST").toUpperCase()), !["GET", "POST"].includes(this.method))
      throw new Error('Method must be "GET" or "POST"!');
    if (this.method === "GET" && (y(this, St).formType = "AJAX"), H(this, ki, y(this, te).action ?? n.url ?? ""), !this.url)
      throw new Error("Form action is required!");
    (o = this.formEl.querySelector("[data-type=submit]")) == null || o.addEventListener("click", () => {
      this.submit();
    }), (s = this.formEl.querySelector("[data-type=reset]")) == null || s.addEventListener("click", () => {
      this.reset();
    });
  }
  get responseType() {
    return y(this, St).responseType ?? "json";
  }
  get formType() {
    return y(this, St).formType ?? "AJAX";
  }
  get url() {
    return y(this, ki);
  }
  get method() {
    return y(this, xi);
  }
  get formEl() {
    return y(this, te);
  }
  get onLoad() {
    return y(this, St).onLoad;
  }
  get onError() {
    return y(this, St).onError;
  }
  get onLoadend() {
    return y(this, St).onLoadend;
  }
  get onLoadstart() {
    return y(this, St).onLoadstart;
  }
  get onProgress() {
    return y(this, St).onProgress;
  }
  get onAbort() {
    return y(this, St).onAbort;
  }
  get onTimeout() {
    return y(this, St).onTimeout;
  }
  get beforeSubmit() {
    return y(this, St).beforeSubmit;
  }
  get generateGetURL() {
    return y(this, St).generateGetURL;
  }
  get formData() {
    return y(this, Ie);
  }
  get headers() {
    return y(this, St).headers;
  }
  get rules() {
    return y(this, St).rules;
  }
  get timeout() {
    return y(this, St).timeout;
  }
  get status() {
    return y(this, tt).status;
  }
  get statusText() {
    return y(this, tt).statusText;
  }
  get readyState() {
    return y(this, tt).readyState;
  }
  get response() {
    return y(this, tt).response;
  }
  get responseXML() {
    return y(this, tt).responseXML;
  }
  get responseText() {
    return y(this, tt).responseText;
  }
  get responseURL() {
    return y(this, tt).responseURL;
  }
  get withCredentials() {
    return y(this, tt).withCredentials;
  }
  get upload() {
    return y(this, tt).upload;
  }
  submit() {
    W(this, wc, yv).call(this), W(this, bc, gv).call(this) && (this.beforeSubmit && !this.beforeSubmit(this.formData) || (this.method === "POST" ? W(this, xc, wv).call(this) : W(this, kc, bv).call(this)));
  }
  abort() {
    y(this, tt).abort();
  }
  getAllResponseHeaders() {
    return y(this, tt).getAllResponseHeaders();
  }
  getResponseHeader(e) {
    return y(this, tt).getResponseHeader(e);
  }
  overrideMimeType(e) {
    return y(this, tt).overrideMimeType(e);
  }
  reset() {
    y(this, te).reset(), W(this, Si, Xa).call(this);
  }
}
te = new WeakMap(), ki = new WeakMap(), xi = new WeakMap(), Ie = new WeakMap(), St = new WeakMap(), tt = new WeakMap(), yc = new WeakSet(), pv = function(e, n) {
  const o = e.closest(".form-group");
  if (!o) {
    console.warn("Form element should be in .form-group!");
    return;
  }
  o.querySelectorAll(".form-tip").forEach((r) => r.remove());
  const s = document.createElement("div");
  s.innerText = n, s.classList.add("form-tip"), o.classList.add("has-error"), o.append(s);
}, vc = new WeakSet(), mv = function(e) {
  const n = e.closest(".form-group");
  if (!n) {
    console.warn("Form element should be in .form-group!");
    return;
  }
  n.classList.remove("has-error"), n.querySelectorAll(".form-tip").forEach((o) => o.remove());
}, Si = new WeakSet(), Xa = function() {
  y(this, te).querySelectorAll("[name]").forEach((n) => {
    W(this, vc, mv).call(this, n);
  });
}, bc = new WeakSet(), gv = function() {
  if (!this.rules || !Object.keys(this.rules).length)
    return !0;
  W(this, Si, Xa).call(this);
  let e = !0;
  return y(this, te).querySelectorAll("[name]:not(.disabled)").forEach((n) => {
    const { name: o, value: s } = n, r = this.rules[o];
    if (!r)
      return;
    const l = (c) => "required" in c && c.required && !s || "regexp" in c && c.regexp && !c.regexp.test(s) || "validate" in c && c.validate && !c.validate(s) ? (W(this, yc, pv).call(this, n, c.errMsg), e = !1) : !0;
    if (Array.isArray(r)) {
      for (const c of r)
        if (!l(c))
          break;
      return;
    }
    l(r);
  }), e;
}, wc = new WeakSet(), yv = function() {
  const e = [...y(this, te).querySelectorAll("[name]:not(.disabled)")].filter((n) => !(n.tagName.toLowerCase() === "input" && (n.type.toLowerCase() === "radio" || n.type.toLowerCase() === "checkbox") && !n.checked));
  if (this.formType === "AJAX") {
    H(this, Ie, {}), e.forEach(({ name: n, value: o, tagName: s, type: r }) => {
      const l = y(this, Ie);
      if (s.toLowerCase() === "input" && r.toLowerCase() === "checkbox") {
        l[n] ? l[n].push(o) : l[n] = [o];
        return;
      }
      l[n] = o;
    });
    return;
  }
  H(this, Ie, new FormData(this.formEl));
}, Ci = new WeakSet(), Ja = function() {
  this.headers && Object.entries(this.headers).forEach(([e, n]) => {
    y(this, tt).setRequestHeader(e, n);
  }), y(this, tt).responseType = this.responseType, this.onLoadstart && y(this, tt).addEventListener("loadstart", this.onLoadstart), this.onLoad && y(this, tt).addEventListener("load", this.onLoad), this.onLoadend && y(this, tt).addEventListener("loadend", this.onLoadend), this.onProgress && y(this, tt).addEventListener("progress", this.onProgress), this.onError && y(this, tt).addEventListener("error", this.onError), this.onAbort && y(this, tt).addEventListener("abort", this.onAbort), this.onTimeout && y(this, tt).addEventListener("timeout", this.onTimeout);
}, $c = new WeakSet(), vv = function(e) {
  return Object.entries(e).map(([n, o]) => `${encodeURIComponent(n)}=${encodeURIComponent(o)}`).join("&");
}, kc = new WeakSet(), bv = function() {
  const e = this.generateGetURL ? this.generateGetURL(this.url, this.formData) : `${this.url}?${W(this, $c, vv).call(this, y(this, Ie))}`;
  y(this, tt).open("GET", e), W(this, Ci, Ja).call(this), y(this, tt).send();
}, xc = new WeakSet(), wv = function() {
  y(this, tt).open("POST", this.url), W(this, Ci, Ja).call(this);
  const e = this.formType === "AJAX" ? JSON.stringify(this.formData) : this.formData;
  y(this, tt).send(e);
}, M(PS, "NAME", "zui.ajaxForm");
var V_, wt, $v, kv, br, Th, xv = {}, Sv = [], OS = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function rn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Cv(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Y_(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? V_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ds(t, l, o, s, null);
}
function ds(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++$v };
  return s == null && wt.vnode != null && wt.vnode(r), r;
}
function HS() {
  return { current: null };
}
function q_(t) {
  return t.children;
}
function wr(t, e) {
  this.props = t, this.context = e;
}
function Xr(t, e) {
  if (e == null)
    return t.__ ? Xr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Xr(t) : null;
}
function Ev(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ev(t);
  }
}
function Ah(t) {
  (!t.__d && (t.__d = !0) && br.push(t) && !vl.__r++ || Th !== wt.debounceRendering) && ((Th = wt.debounceRendering) || setTimeout)(vl);
}
function vl() {
  for (var t; vl.__r = br.length; )
    t = br.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), br = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = rn({}, r)).__v = r.__v + 1, Mv(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Xr(r), r.__h), US(o, r), r.__e != l && Ev(r)));
    });
}
function Tv(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Sv, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ds(null, a, null, null, a) : Array.isArray(a) ? ds(q_, { children: a }, null, null, null) : a.__b > 0 ? ds(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      Mv(t, a, u = u || xv, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Av(a, _, t) : _ = Lv(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Xr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Nv(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Rv(p[i], p[++i], p[++i]);
}
function Av(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Av(o, e, n) : Lv(n, o, o, s, o.__e, e));
  return e;
}
function Lv(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function WS(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || bl(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || bl(t, r, e[r], n[r], o);
}
function Lh(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || OS.test(e) ? n : n + "px";
}
function bl(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Lh(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Lh(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Rh : Mh, r) : t.removeEventListener(e, r ? Rh : Mh, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Mh(t) {
  this.l[t.type + !1](wt.event ? wt.event(t) : t);
}
function Rh(t) {
  this.l[t.type + !0](wt.event ? wt.event(t) : t);
}
function Mv(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = wt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new wr(p, g), i.constructor = b, i.render = FS), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = rn({}, i.__s)), rn(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = wt.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = rn(rn({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === q_ && h.key == null ? h.props.children : h, Tv(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = IS(n.__e, e, n, o, s, r, l, _);
    (h = wt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), wt.__e(k, e, n);
  }
}
function US(t, e) {
  wt.__c && wt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      wt.__e(o, n.__v);
    }
  });
}
function IS(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && V_.call(t.childNodes), h = (d = n.props || xv).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (WS(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Tv(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Xr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Cv(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && bl(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && bl(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Rv(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    wt.__e(o, n);
  }
}
function Nv(t, e, n) {
  var o, s;
  if (wt.unmount && wt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Rv(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        wt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Nv(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Cv(t.__e), t.__ = t.__e = t.__d = void 0;
}
function FS(t, e, n) {
  return this.constructor(t, n);
}
V_ = Sv.slice, wt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, $v = 0, kv = function(t) {
  return t != null && t.constructor === void 0;
}, wr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = rn({}, this.state), typeof t == "function" && (t = t(rn({}, n), this.props)), t && rn(n, t), t != null && this.__v && (e && this._sb.push(e), Ah(this));
}, wr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ah(this));
}, wr.prototype.render = q_, br = [], vl.__r = 0;
var BS = 0;
function G(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --BS, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return wt.vnode && wt.vnode(_), _;
}
let jS = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Dv, $t, Pv, $r, Nh, Ov = {}, Hv = [], zS = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function sn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Wv(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function $a(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Pv };
  return s == null && $t.vnode != null && $t.vnode(r), r;
}
function G_(t) {
  return t.children;
}
function kr(t, e) {
  this.props = t, this.context = e;
}
function Jr(t, e) {
  if (e == null)
    return t.__ ? Jr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Jr(t) : null;
}
function Uv(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Uv(t);
  }
}
function Dh(t) {
  (!t.__d && (t.__d = !0) && $r.push(t) && !wl.__r++ || Nh !== $t.debounceRendering) && ((Nh = $t.debounceRendering) || setTimeout)(wl);
}
function wl() {
  for (var t; wl.__r = $r.length; )
    t = $r.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), $r = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = sn({}, r)).__v = r.__v + 1, jv(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Jr(r), r.__h), YS(o, r), r.__e != l && Uv(r)));
    });
}
function Iv(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Hv, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? $a(null, a, null, null, a) : Array.isArray(a) ? $a(G_, { children: a }, null, null, null) : a.__b > 0 ? $a(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((u = m[d]) && a.key == u.key && a.type === u.type) {
            m[d] = void 0;
            break;
          }
          u = null;
        }
      jv(t, a, u = u || Ov, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Fv(a, _, t) : _ = Bv(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Jr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Vv(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      zv(p[i], p[++i], p[++i]);
}
function Fv(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Fv(o, e, n) : Bv(n, o, o, s, o.__e, e));
  return e;
}
function Bv(t, e, n, o, s, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break t;
        t.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function VS(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || $l(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || $l(t, r, e[r], n[r], o);
}
function Ph(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || zS.test(e) ? n : n + "px";
}
function $l(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Ph(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ph(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Hh : Oh, r) : t.removeEventListener(e, r ? Hh : Oh, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Oh(t) {
  this.l[t.type + !1]($t.event ? $t.event(t) : t);
}
function Hh(t) {
  this.l[t.type + !0]($t.event ? $t.event(t) : t);
}
function jv(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = $t.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new kr(p, g), i.constructor = b, i.render = GS), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = sn({}, i.__s)), sn(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(k) {
              k && (k.__ = e);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break t;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = $t.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = sn(sn({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === G_ && h.key == null ? h.props.children : h, Iv(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = qS(n.__e, e, n, o, s, r, l, _);
    (h = $t.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), $t.__e(k, e, n);
  }
}
function YS(t, e) {
  $t.__c && $t.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      $t.__e(o, n.__v);
    }
  });
}
function qS(t, e, n, o, s, r, l, c) {
  var _, h, i, d = n.props, u = e.props, a = e.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[f] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(u);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    d === u || c && t.data === u || (t.data = u);
  else {
    if (r = r && Dv.call(t.childNodes), h = (d = n.props || Ov).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (VS(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Iv(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Jr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Wv(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && $l(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && $l(t, "checked", f, d.checked, !1));
  }
  return t;
}
function zv(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    $t.__e(o, n);
  }
}
function Vv(t, e, n) {
  var o, s;
  if ($t.unmount && $t.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || zv(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        $t.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Vv(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Wv(t.__e), t.__ = t.__e = t.__d = void 0;
}
function GS(t, e, n) {
  return this.constructor(t, n);
}
Dv = Hv.slice, $t = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Pv = 0, kr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = sn({}, this.state), typeof t == "function" && (t = t(sn({}, n), this.props)), t && sn(n, t), t != null && this.__v && (e && this._sb.push(e), Dh(this));
}, kr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Dh(this));
}, kr.prototype.render = G_, $r = [], wl.__r = 0;
var XS = 0;
function Wh(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --XS, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return $t.vnode && $t.vnode(_), _;
}
var Tn, An;
class Uh extends kr {
  constructor(n) {
    super(n);
    T(this, Tn, 0);
    T(this, An, null);
    M(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, s = n.target;
      if (!(!s || !o) && (typeof o == "string" && s.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    M(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (y(this, Tn) && cancelAnimationFrame(y(this, Tn)), H(this, Tn, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), H(this, Tn, 0);
      })), n.preventDefault());
    });
    M(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    M(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    M(this, "_handleClick", (n) => {
      const o = n.currentTarget;
      if (!o)
        return;
      const s = o.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: c } = this.props, _ = (r === "horz" ? n.clientX - s.left : n.clientY - s.top) - this.barSize / 2;
      this.scroll(_ * c / l), n.preventDefault();
    });
    this.state = {
      scrollPos: this.props.defaultScrollPos ?? 0,
      dragStart: !1
    };
  }
  get scrollPos() {
    return this.props.scrollPos ?? this.state.scrollPos;
  }
  get controlled() {
    return this.props.scrollPos !== void 0;
  }
  get maxScrollPos() {
    const { scrollSize: n, clientSize: o } = this.props;
    return Math.max(0, n - o);
  }
  get barSize() {
    const { clientSize: n, scrollSize: o, size: s = 12, minBarSize: r = 3 * s } = this.props;
    return Math.max(Math.round(n * n / o), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (H(this, An, typeof n == "string" ? document : n.current), y(this, An).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), y(this, An) && y(this, An).removeEventListener("wheel", this._handleWheel);
  }
  scroll(n) {
    return n = Math.max(0, Math.min(Math.round(n), this.maxScrollPos)), n === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(n) : this.setState({
      scrollPos: n
    }, this._afterScroll.bind(this, n)), !0);
  }
  scrollOffset(n) {
    return this.scroll(this.scrollPos + n);
  }
  _afterScroll(n) {
    const { onScroll: o } = this.props;
    o && o(n, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: n,
      type: o,
      size: s = 12,
      className: r,
      style: l,
      left: c,
      top: _,
      bottom: h,
      right: i
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: a } = this.state, f = {
      left: c,
      top: _,
      bottom: h,
      right: i,
      ...l
    }, v = {};
    return o === "horz" ? (f.height = s, f.width = n, v.width = this.barSize, v.left = Math.round(Math.min(d, u) * (n - v.width) / d)) : (f.width = s, f.height = n, v.height = this.barSize, v.top = Math.round(Math.min(d, u) * (n - v.height) / d)), /* @__PURE__ */ Wh(
      "div",
      {
        className: F("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": a
        }),
        style: f,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ Wh(
          "div",
          {
            className: "scrollbar-bar",
            style: v,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
Tn = new WeakMap(), An = new WeakMap();
function Ih(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function Yv({ col: t, className: e, height: n, row: o, onRenderCell: s, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
  var b;
  const i = {
    left: t.left,
    width: t.realWidth,
    height: n,
    ...l
  }, { align: d, border: u } = t.setting, a = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...t.setting.cellStyle,
    ...r
  }, f = ["dtable-cell", _, t.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], v = ["dtable-cell-content", e], p = [c ?? ((b = o.data) == null ? void 0 : b[t.name]) ?? ""], m = s ? s(p, { row: o, col: t }, Y_) : p, g = [], w = [], $ = {}, S = {};
  let A = "div";
  m == null || m.forEach((k) => {
    if (typeof k == "object" && k && !kv(k) && ("html" in k || "className" in k || "style" in k || "attrs" in k || "children" in k || "tagName" in k)) {
      const R = k.outer ? g : w;
      k.html ? R.push(/* @__PURE__ */ G("div", { className: F("dtable-cell-html", k.className), style: k.style, dangerouslySetInnerHTML: { __html: k.html }, ...k.attrs ?? {} })) : (k.style && Object.assign(k.outer ? i : a, k.style), k.className && (k.outer ? f : v).push(k.className), k.children && R.push(k.children), k.attrs && Object.assign(k.outer ? $ : S, k.attrs)), k.tagName && !k.outer && (A = k.tagName);
    } else
      w.push(k);
  });
  const E = A;
  return /* @__PURE__ */ G(
    "div",
    {
      className: F(f),
      style: i,
      "data-col": t.name,
      ...h,
      ...$,
      children: [
        w.length > 0 && /* @__PURE__ */ G(E, { className: F(v), style: a, ...S, children: w }),
        g
      ]
    }
  );
}
function ka({ row: t, className: e, top: n = 0, left: o = 0, width: s, height: r, cols: l, CellComponent: c = Yv, onRenderCell: _ }) {
  return /* @__PURE__ */ G("div", { className: F("dtable-cells", e), style: { top: n, left: o, width: s, height: r }, children: l.map((h) => h.visible ? /* @__PURE__ */ G(
    c,
    {
      col: h,
      row: t,
      onRenderCell: _
    },
    h.name
  ) : null) });
}
function qv({
  row: t,
  className: e,
  top: n,
  height: o,
  fixedLeftCols: s,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: c,
  scrollWidth: _,
  scrollColsWidth: h,
  fixedRightWidth: i,
  scrollLeft: d,
  CellComponent: u = Yv,
  onRenderCell: a,
  style: f,
  ...v
}) {
  let p = null;
  s != null && s.length && (p = /* @__PURE__ */ G(
    ka,
    {
      className: "dtable-fixed-left",
      cols: s,
      width: c,
      row: t,
      CellComponent: u,
      onRenderCell: a
    }
  ));
  let m = null;
  l != null && l.length && (m = /* @__PURE__ */ G(
    ka,
    {
      className: "dtable-flexable",
      cols: l,
      left: c - d,
      width: Math.max(_, h),
      row: t,
      CellComponent: u,
      onRenderCell: a
    }
  ));
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ G(
    ka,
    {
      className: "dtable-fixed-right",
      cols: r,
      left: c + _,
      width: i,
      row: t,
      CellComponent: u,
      onRenderCell: a
    }
  ));
  const w = { top: n, height: o, lineHeight: `${o - 2}px`, ...f };
  return /* @__PURE__ */ G(
    "div",
    {
      className: F("dtable-row", e),
      style: w,
      "data-id": t.id,
      ...v,
      children: [
        p,
        m,
        g
      ]
    }
  );
}
function JS({ height: t, onRenderRow: e, ...n }) {
  const o = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const s = e({ props: o }, Y_);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ G("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ G(qv, { ...o }) });
}
function KS({
  className: t,
  style: e,
  top: n,
  rows: o,
  height: s,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: c,
  ..._
}) {
  return e = { ...e, top: n, height: s }, /* @__PURE__ */ G("div", { className: F("dtable-rows", t), style: e, children: o.map((h) => {
    const i = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ..._
    }, d = c == null ? void 0 : c({ props: i, row: h }, Y_);
    return d && Object.assign(i, d), /* @__PURE__ */ G(qv, { ...i });
  }) });
}
const kl = /* @__PURE__ */ new Map(), xl = [];
function Gv(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && kl.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  kl.set(n, t), e != null && e.buildIn && !xl.includes(n) && xl.push(n);
}
function Co(t, e) {
  Gv(t, e);
  const n = (o) => {
    if (!o)
      return t;
    const { defaultOptions: s, ...r } = t;
    return {
      ...r,
      defaultOptions: { ...s, ...o }
    };
  };
  return n.plugin = t, n;
}
function Xv(t) {
  return kl.delete(t);
}
function ZS(t) {
  if (typeof t == "string") {
    const e = kl.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function Jv(t, e, n) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = ZS(o);
    s && (n.has(s.name) || ((r = s.plugins) != null && r.length && Jv(t, s.plugins, n), t.push(s), n.add(s.name)));
  }), t;
}
function QS(t = [], e = !0) {
  return e && xl.length && t.unshift(...xl), t != null && t.length ? Jv([], t, /* @__PURE__ */ new Set()) : [];
}
function Fh() {
  return {
    cols: [],
    data: [],
    rowKey: "id",
    width: "100%",
    height: "auto",
    rowHeight: 35,
    defaultColWidth: 80,
    minColWidth: 20,
    maxColWidth: 9999,
    header: !0,
    footer: !1,
    headerHeight: 0,
    footerHeight: 0,
    rowHover: !0,
    colHover: !1,
    cellHover: !1,
    bordered: !1,
    striped: !0,
    responsive: !1,
    scrollbarHover: !0,
    horzScrollbarPos: "outside"
  };
}
var Ji, Ln, ho, Fe, _e, Be, Tt, ee, ue, po, Ei, Ti, Ce, mo, go, Sc, Kv, Cc, Zv, Ec, Qv, Tc, tb, Ai, Ka, Ac, Lc, Li, Mi, Mc, Rc, Nc, eb, Dc, nb, Pc, ob;
let tC = (Ji = class extends wr {
  constructor(n) {
    super(n);
    T(this, Sc);
    T(this, Cc);
    T(this, Ec);
    T(this, Tc);
    T(this, Ai);
    T(this, Nc);
    T(this, Dc);
    T(this, Pc);
    M(this, "ref", HS());
    T(this, Ln, 0);
    T(this, ho, void 0);
    T(this, Fe, !1);
    T(this, _e, void 0);
    T(this, Be, void 0);
    T(this, Tt, []);
    T(this, ee, void 0);
    T(this, ue, /* @__PURE__ */ new Map());
    T(this, po, {});
    T(this, Ei, void 0);
    T(this, Ti, []);
    M(this, "updateLayout", () => {
      y(this, Ln) && cancelAnimationFrame(y(this, Ln)), H(this, Ln, requestAnimationFrame(() => {
        H(this, ee, void 0), this.forceUpdate(), H(this, Ln, 0);
      }));
    });
    T(this, Ce, (n, o) => {
      o = o || n.type;
      const s = y(this, ue).get(o);
      if (s != null && s.length) {
        for (const r of s)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    T(this, mo, (n) => {
      y(this, Ce).call(this, n, `window_${n.type}`);
    });
    T(this, go, (n) => {
      y(this, Ce).call(this, n, `document_${n.type}`);
    });
    T(this, Ac, (n, o) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, n, o);
        s && Object.assign(n.props, s);
      }
      return y(this, Tt).forEach((s) => {
        if (s.onRenderRow) {
          const r = s.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    T(this, Lc, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), y(this, Tt).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    T(this, Li, (n, o, s) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, s)), this.options[c] && (n = this.options[c].call(this, n, o, s)), y(this, Tt).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, s));
      }), n;
    });
    T(this, Mi, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    T(this, Mc, (n) => {
      var c, _, h, i, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: s, colName: r, cellElement: l } = o;
      if (s === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), y(this, Tt).forEach((u) => {
          var a;
          (a = u.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: u } = o, a = this.layout.visibleRows.find((f) => f.id === s);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: s, rowInfo: a, element: l, rowElement: u })) === !0)
            return;
          for (const f of y(this, Tt))
            if (((h = f.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: s, rowInfo: a, element: l, rowElement: u })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: a, element: u })) === !0)
          return;
        for (const f of y(this, Tt))
          if (((d = f.onRowClick) == null ? void 0 : d.call(this, n, { rowID: s, rowInfo: a, element: u })) === !0)
            return;
      }
    });
    T(this, Rc, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, ho, n.id ?? `dtable-${jS(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, Be, Object.freeze(QS(n.plugins))), y(this, Be).forEach((o) => {
      var c;
      const { methods: s, data: r, state: l } = o;
      s && Object.entries(s).forEach(([_, h]) => {
        typeof h == "function" && Object.assign(this, { [_]: h.bind(this) });
      }), r && Object.assign(y(this, po), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = y(this, ee)) == null ? void 0 : n.options) || y(this, _e) || Fh();
  }
  get plugins() {
    return y(this, Tt);
  }
  get layout() {
    return y(this, ee);
  }
  get id() {
    return y(this, ho);
  }
  get data() {
    return y(this, po);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, _e, void 0);
  }
  componentDidMount() {
    if (y(this, Fe) ? this.forceUpdate() : W(this, Ai, Ka).call(this), y(this, Tt).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", y(this, Mc)), this.on("keydown", y(this, Rc)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, Ei, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    y(this, Tt).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    y(this, Fe) ? W(this, Ai, Ka).call(this) : y(this, Tt).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = y(this, Ei)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of y(this, ue).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), y(this, mo)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), y(this, go)) : n.removeEventListener(s, y(this, Ce));
    y(this, Tt).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), y(this, Be).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), H(this, po, {}), y(this, ue).clear();
  }
  on(n, o, s) {
    var l;
    s && (n = `${s}_${n}`);
    const r = y(this, ue).get(n);
    r ? r.push(o) : (y(this, ue).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), y(this, mo)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), y(this, go)) : (l = this.ref.current) == null || l.addEventListener(n, y(this, Ce)));
  }
  off(n, o, s) {
    var c;
    s && (n = `${s}_${n}`);
    const r = y(this, ue).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (y(this, ue).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), y(this, mo)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), y(this, go)) : (c = this.ref.current) == null || c.removeEventListener(n, y(this, Ce)));
  }
  emitCustomEvent(n, o) {
    y(this, Ce).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: s, scrollTop: r, rowsHeightTotal: l, rowsHeight: c, rowHeight: _, colsInfo: { scrollWidth: h, scrollColsWidth: i } } = this.layout, { to: d } = n;
    let { scrollLeft: u, scrollTop: a } = n;
    if (d === "up" || d === "down")
      a = r + (d === "down" ? 1 : -1) * Math.floor(c / _) * _;
    else if (d === "left" || d === "right")
      u = s + (d === "right" ? 1 : -1) * h;
    else if (d === "home")
      a = 0;
    else if (d === "end")
      a = l - c;
    else if (d === "left-begin")
      u = 0;
    else if (d === "right-end")
      u = i - h;
    else {
      const { offsetLeft: v, offsetTop: p } = n;
      typeof v == "number" && (u = s + v), typeof p == "number" && (u = r + p);
    }
    const f = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, i - h)), u !== s && (f.scrollLeft = u)), typeof a == "number" && (a = Math.max(0, Math.min(a, l - c)), a !== r && (f.scrollTop = a)), Object.keys(f).length ? (this.setState(f, () => {
      var v;
      (v = this.options.onScroll) == null || v.call(this, f), o == null || o.call(this, !0);
    }), !0) : (o == null || o.call(this, !1), !1);
  }
  getColInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    const { colsMap: o, colsList: s } = this.layout;
    return typeof n == "number" ? s[n] : o[n];
  }
  getRowInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    if (n === -1 || n === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: o, rowsMap: s } = this.layout;
    return typeof n == "number" ? o[n] : s[n];
  }
  getCellValue(n, o) {
    var _;
    const s = typeof n == "object" ? n : this.getRowInfo(n);
    if (!s)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let l = s.id === "HEADER" ? r.setting.title : (_ = s.data) == null ? void 0 : _[r.name];
    const { cellValueGetter: c } = this.options;
    return c && (l = c.call(this, s, r, l)), l;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    if (!y(this, _e))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: s, state: r } = n;
    if (s === "layout")
      H(this, ee, void 0);
    else if (s === "options") {
      if (H(this, _e, void 0), !y(this, ee))
        return;
      H(this, ee, void 0);
    }
    this.setState(r ?? ((l) => ({ renderCount: l.renderCount + 1 })), o);
  }
  getPointerInfo(n) {
    const o = n.target;
    if (!o || o.closest(".no-cell-event"))
      return;
    const s = o.closest(".dtable-cell");
    if (!s)
      return;
    const r = s.closest(".dtable-row");
    if (!r)
      return;
    const l = s == null ? void 0 : s.getAttribute("data-col"), c = r == null ? void 0 : r.getAttribute("data-id");
    if (!(typeof l != "string" || typeof c != "string"))
      return {
        cellElement: s,
        rowElement: r,
        colName: l,
        rowID: c,
        target: o
      };
  }
  i18n(n, o, s) {
    return Ri(y(this, Ti), n, o, s, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = W(this, Pc, ob).call(this), { className: o, rowHover: s, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], u = [];
    return n && y(this, Tt).forEach((a) => {
      var v;
      const f = (v = a.onRender) == null ? void 0 : v.call(this, n);
      f && (f.style && Object.assign(i, f.style), f.className && d.push(f.className), f.children && u.push(f.children));
    }), /* @__PURE__ */ G(
      "div",
      {
        id: y(this, ho),
        className: F(d),
        style: i,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && W(this, Sc, Kv).call(this, n),
          n && W(this, Cc, Zv).call(this, n),
          n && W(this, Ec, Qv).call(this, n),
          n && W(this, Tc, tb).call(this, n)
        ]
      }
    );
  }
}, Ln = new WeakMap(), ho = new WeakMap(), Fe = new WeakMap(), _e = new WeakMap(), Be = new WeakMap(), Tt = new WeakMap(), ee = new WeakMap(), ue = new WeakMap(), po = new WeakMap(), Ei = new WeakMap(), Ti = new WeakMap(), Ce = new WeakMap(), mo = new WeakMap(), go = new WeakMap(), Sc = new WeakSet(), Kv = function(n) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ G(
      JS,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: y(this, Li),
        onRenderRow: y(this, Lc),
        ...s
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ G(
    La,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, Cc = new WeakSet(), Zv = function(n) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ G(
    KS,
    {
      top: o,
      height: s,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: h,
      onRenderCell: y(this, Li),
      onRenderRow: y(this, Ac),
      ...c
    }
  );
}, Ec = new WeakSet(), Qv = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const s = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ G(
    La,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: s,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, Tc = new WeakSet(), tb = function(n) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: i, scrollWidth: d } = r, { scrollbarSize: u = 12, horzScrollbarPos: a } = this.options;
  return i > d && o.push(
    /* @__PURE__ */ G(
      Uh,
      {
        type: "horz",
        scrollPos: s,
        scrollSize: i,
        clientSize: d,
        onScroll: y(this, Mi),
        left: r.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -u) + h,
        size: u,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > c && o.push(
    /* @__PURE__ */ G(
      Uh,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: c,
        onScroll: y(this, Mi),
        right: 0,
        size: u,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, Ai = new WeakSet(), Ka = function() {
  var n;
  H(this, Fe, !1), (n = this.options.afterRender) == null || n.call(this), y(this, Tt).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, Ac = new WeakMap(), Lc = new WeakMap(), Li = new WeakMap(), Mi = new WeakMap(), Mc = new WeakMap(), Rc = new WeakMap(), Nc = new WeakSet(), eb = function() {
  if (y(this, _e))
    return !1;
  const o = { ...Fh(), ...y(this, Be).reduce((s, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(s, l), s;
  }, {}), ...this.props };
  return H(this, _e, o), H(this, Tt, y(this, Be).reduce((s, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (s.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), s;
  }, [])), H(this, Ti, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, Dc = new WeakSet(), nb = function() {
  var K, xt;
  const { plugins: n } = this;
  let o = y(this, _e);
  const s = {
    flex: /* @__PURE__ */ G("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ G("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((B) => {
    var kt;
    const Z = (kt = B.beforeLayout) == null ? void 0 : kt.call(this, o);
    Z && (o = { ...o, ...Z }), Object.assign(s, B.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], i = [], d = {}, u = [], a = [];
  let f = 0, v = 0, p = 0;
  o.cols.forEach((B) => {
    if (B.hidden)
      return;
    const {
      name: Z,
      type: kt = "",
      fixed: ct = !1,
      flex: X = !1,
      width: at = r,
      minWidth: Ot = l,
      maxWidth: Ht = c,
      ..._b
    } = B, et = {
      name: Z,
      type: kt,
      setting: {
        name: Z,
        type: kt,
        fixed: ct,
        flex: X,
        width: at,
        minWidth: Ot,
        maxWidth: Ht,
        ..._b
      },
      flex: ct ? 0 : X === !0 ? 1 : typeof X == "number" ? X : 0,
      left: 0,
      width: Ih(at, Ot, Ht),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((Z_) => {
      var Q_, tu;
      const Ui = (Q_ = Z_.colTypes) == null ? void 0 : Q_[kt];
      if (Ui) {
        const eu = typeof Ui == "function" ? Ui(et) : Ui;
        eu && Object.assign(et.setting, eu);
      }
      (tu = Z_.onAddCol) == null || tu.call(this, et);
    }), et.width = Ih(et.setting.width ?? et.width, et.setting.minWidth ?? Ot, et.setting.maxWidth ?? Ht), et.realWidth = et.realWidth || et.width, ct === "left" ? (et.left = f, f += et.width, _.push(et)) : ct === "right" ? (et.left = v, v += et.width, h.push(et)) : (et.left = p, p += et.width, i.push(et)), et.flex && a.push(et), u.push(et), d[et.name] = et;
  });
  let m = o.width, g = 0;
  const w = f + p + v;
  if (typeof m == "function" && (m = m.call(this, w)), m === "auto")
    g = w;
  else if (m === "100%") {
    const { parent: B } = this;
    if (B)
      g = B.clientWidth;
    else {
      g = 0, H(this, Fe, !0);
      return;
    }
  } else
    g = m ?? 0;
  const { data: $, rowKey: S = "id", rowHeight: A } = o, E = [], b = (B, Z, kt) => {
    var X, at;
    const ct = { data: kt ?? { [S]: B }, id: B, index: E.length, top: 0 };
    if (kt || (ct.lazy = !0), E.push(ct), ((X = o.onAddRow) == null ? void 0 : X.call(this, ct, Z)) !== !1) {
      for (const Ot of n)
        if (((at = Ot.onAddRow) == null ? void 0 : at.call(this, ct, Z)) === !1)
          return;
    }
  };
  if (typeof $ == "number")
    for (let B = 0; B < $; B++)
      b(`${B}`, B);
  else
    Array.isArray($) && $.forEach((B, Z) => {
      typeof B == "object" ? b(`${B[S] ?? ""}`, Z, B) : b(`${B ?? ""}`, Z);
    });
  let k = E;
  const R = {};
  if (o.onAddRows) {
    const B = o.onAddRows.call(this, k);
    B && (k = B);
  }
  for (const B of n) {
    const Z = (K = B.onAddRows) == null ? void 0 : K.call(this, k);
    Z && (k = Z);
  }
  k.forEach((B, Z) => {
    R[B.id] = B, B.index = Z, B.top = B.index * A;
  });
  const { header: q, footer: j } = o, N = q ? o.headerHeight || A : 0, C = j ? o.footerHeight || A : 0;
  let x = o.height, D = 0;
  const L = k.length * A, O = N + C + L;
  if (typeof x == "function" && (x = x.call(this, O)), x === "auto")
    D = O;
  else if (typeof x == "object")
    D = Math.min(x.max, Math.max(x.min, O));
  else if (x === "100%") {
    const { parent: B } = this;
    if (B)
      D = B.clientHeight;
    else {
      D = 0, H(this, Fe, !0);
      return;
    }
  } else
    D = x;
  const P = D - N - C, I = g - f - v, V = {
    options: o,
    allRows: E,
    width: g,
    height: D,
    rows: k,
    rowsMap: R,
    rowHeight: A,
    rowsHeight: P,
    rowsHeightTotal: L,
    header: q,
    footer: j,
    footerGenerators: s,
    headerHeight: N,
    footerHeight: C,
    colsMap: d,
    colsList: u,
    flexCols: a,
    colsInfo: {
      fixedLeftCols: _,
      fixedRightCols: h,
      scrollCols: i,
      fixedLeftWidth: f,
      scrollWidth: I,
      scrollColsWidth: p,
      fixedRightWidth: v
    }
  }, z = (xt = o.onLayout) == null ? void 0 : xt.call(this, V);
  z && Object.assign(V, z), n.forEach((B) => {
    if (B.onLayout) {
      const Z = B.onLayout.call(this, V);
      Z && Object.assign(V, Z);
    }
  }), H(this, ee, V);
}, Pc = new WeakSet(), ob = function() {
  (W(this, Nc, eb).call(this) || !y(this, ee)) && W(this, Dc, nb).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: c } } = n;
  if (s.length) {
    const w = l - c;
    if (w > 0) {
      const $ = s.reduce((A, E) => A + E.flex, 0);
      let S = 0;
      s.forEach((A) => {
        const E = Math.min(w - S, Math.ceil(w * (A.flex / $)));
        A.realWidth = E + A.width, S += A.realWidth;
      });
    } else
      s.forEach(($) => {
        $.realWidth = $.width;
      });
  }
  o = Math.min(Math.max(0, c - l), o);
  let _ = 0;
  r.forEach((w) => {
    w.left = _, _ += w.realWidth, w.visible = w.left + w.realWidth >= o && w.left <= o + l;
  });
  const { rowsHeightTotal: h, rowsHeight: i, rows: d, rowHeight: u } = n, a = Math.min(Math.max(0, h - i), this.state.scrollTop), f = Math.floor(a / u), v = a + i, p = Math.min(d.length, Math.ceil(v / u)), m = [], { rowDataGetter: g } = this.options;
  for (let w = f; w < p; w++) {
    const $ = d[w];
    $.lazy && g && ($.data = g([$.id])[0], $.lazy = !1), m.push($);
  }
  return n.visibleRows = m, n.scrollTop = a, n.scrollLeft = o, n;
}, M(Ji, "addPlugin", Gv), M(Ji, "removePlugin", Xv), Ji);
function Bh(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((s) => s.classList.add(o));
}
const eC = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (t) => !!t.colHover,
  events: {
    mouseover(t) {
      var s;
      const { colHover: e } = this.options;
      if (!e)
        return;
      const n = (s = t.target) == null ? void 0 : s.closest(".dtable-cell");
      if (!n || e === "header" && !n.closest(".dtable-header"))
        return;
      const o = (n == null ? void 0 : n.getAttribute("data-col")) ?? !1;
      Bh(this, o);
    },
    mouseleave() {
      Bh(this, !1);
    }
  }
}, nC = Co(eC, { buildIn: !0 });
function oC(t, e) {
  var l, c;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (_, h) => {
    s && !s.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !rb.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
    r(_, !!e);
  })) : (Array.isArray(t) || (t = [t]), t.forEach((_) => {
    r(_, e ?? !n[_]);
  })), Object.keys(o).length) {
    const _ = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, t, o, n);
    _ && Object.keys(_).forEach((h) => {
      _[h] ? n[h] = !0 : delete n[h];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, o);
    });
  }
  return o;
}
function rC(t) {
  return this.state.checkedRows[t] ?? !1;
}
function rb() {
  var n, o;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, r) => s + (e.call(this, r.id) ? 1 : 0), 0)) : t === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function iC() {
  return Object.keys(this.state.checkedRows);
}
const sC = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: oC,
    isRowChecked: rC,
    isAllRowChecked: rb,
    getChecks: iC
  },
  i18n: {
    zh_cn: {
      checkedCountInfo: "已选择 {selected} 项",
      totalCountInfo: "共 {total} 项"
    },
    en: {
      checkedCountInfo: "Selected {selected} items",
      totalCountInfo: "Total {total} items"
    }
  },
  footer: {
    checkbox() {
      const t = this.isAllRowChecked();
      return [
        /* @__PURE__ */ G("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ G("input", { type: "checkbox", checked: t }) })
      ];
    },
    checkedInfo(t, e) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ G("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(t, { row: e, col: n }) {
    var c;
    const { id: o } = e, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, o))
      return t;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const _ = this.isRowChecked(o), h = ((c = this.options.checkboxRender) == null ? void 0 : c.call(this, _, o)) ?? /* @__PURE__ */ G("input", { type: "checkbox", checked: _ });
      t.unshift(h), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var l;
    const { id: o } = e, { checkbox: s } = n.setting;
    if (typeof s == "function" ? s.call(this, o) : s) {
      const c = this.isAllRowChecked(), _ = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, c, o)) ?? /* @__PURE__ */ G("input", { type: "checkbox", checked: c });
      t.unshift(_), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderRow({ props: t, row: e }) {
    if (this.isRowChecked(e.id))
      return { className: F(t.className, "is-checked") };
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!e)
      return;
    const n = e.closest('input[type="checkbox"],.dtable-checkbox');
    n && (this.toggleCheckRows(n.checked), t.stopPropagation());
  },
  onRowClick(t, { rowID: e }) {
    const n = t.target;
    if (!n)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(e);
  }
}, lC = Co(sC);
var ib = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(ib || {});
function Za(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, o = e.children && n && n[t];
  let s = !1, { parent: r } = e;
  for (; r; ) {
    const l = Za.call(this, r);
    if (l.state !== "expanded") {
      s = !0;
      break;
    }
    r = l.parent;
  }
  return e.state = s ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Za.call(this, e.parent).level + 1 : 0, e;
}
function cC(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !sb.call(this)), e) {
      const s = o.entries();
      for (const [r, l] of s)
        l.state === "expanded" && (n[r] = !0);
    } else
      n = {};
  else {
    const s = Array.isArray(t) ? t : [t];
    e === void 0 && (e = !n[s[0]]), s.forEach((r) => {
      const l = o.get(r);
      e && (l != null && l.children) ? n[r] = !0 : delete n[r];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...n } }
  }, () => {
    var s;
    (s = this.options.onNestedChange) == null || s.call(this);
  });
}
function sb() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function lb(t, e = 0, n, o = 0) {
  var s;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const l = t.get(r);
    l && (l.level === o && (l.order = e++), (s = l.children) != null && s.length && (e = lb(t, e, l.children, o + 1)));
  }
  return e;
}
function cb(t, e, n, o) {
  const s = t.getNestedRowInfo(e);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = n, cb(t, r, n, o);
  }), s;
}
function ab(t, e, n, o, s) {
  var c;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : s[_]);
    return n === h;
  })) && (o[e] = n), r.parent && ab(t, r.parent, n, o, s);
}
const aC = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(t, e) {
      const { nestedMap: n } = this.data, o = n.get(t.id), s = n.get(e.id);
      return (o == null ? void 0 : o.parent) === (s == null ? void 0 : s.parent);
    },
    beforeCheckRows(t, e, n) {
      if (!this.options.checkable || !(t != null && t.length))
        return;
      const o = {};
      return Object.entries(e).forEach(([s, r]) => {
        const l = cb(this, s, r, o);
        l != null && l.parent && ab(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: cC,
    isAllCollapsed: sb,
    getNestedRowInfo: Za
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(t) {
    var s, r;
    const { nestedMap: e } = this.data, n = (s = t.data) == null ? void 0 : s[this.options.nestedParentKey ?? "parent"], o = e.get(t.id) ?? {
      state: "",
      level: 0
    };
    if (o.parent = n, (r = t.data) != null && r[this.options.asParentKey ?? "asParent"] && (o.children = []), e.set(t.id, o), n) {
      let l = e.get(n);
      l || (l = {
        state: "",
        level: 0
      }, e.set(n, l)), l.children || (l.children = []), l.children.push(t.id);
    }
  },
  onAddRows(t) {
    return t = t.filter(
      (e) => this.getNestedRowInfo(e.id).state !== "hidden"
      /* hidden */
    ), lb(this.data.nestedMap), t.sort((e, n) => {
      const o = this.getNestedRowInfo(e.id), s = this.getNestedRowInfo(n.id), r = (o.order ?? 0) - (s.order ?? 0);
      return r === 0 ? e.index - n.index : r;
    }), t;
  },
  onRenderCell(t, { col: e, row: n }) {
    var c;
    const { id: o, data: s } = n, { nestedToggle: r } = e.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && t.unshift(((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, o, e, s)) ?? /* @__PURE__ */ G("a", { role: "button", className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ G("span", { className: "toggle-icon" }) })), l.level) {
      let { nestedIndent: _ = r } = e.setting;
      _ && (_ === !0 && (_ = this.options.nestedIndent ?? 12), t.unshift(/* @__PURE__ */ G("div", { className: "dtable-nested-indent", style: { width: _ * l.level + "px" } })));
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var s;
    const { id: o } = e;
    return n.setting.nestedToggle && t.unshift(((s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, n, void 0)) ?? /* @__PURE__ */ G("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ G("span", { className: "toggle-icon" }) })), t;
  },
  onRenderRow({ props: t, row: e }) {
    const n = this.getNestedRowInfo(e.id);
    return {
      className: F(t.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: t }) {
    return t.className = F(t.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!(!e || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(t, { rowID: e }) {
    const n = t.target;
    if (!(!n || !this.getNestedRowInfo(e).children || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow(e), !0;
  }
}, _C = Co(aC);
const uC = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(t) {
        return t[0] = {
          html: t[0]
        }, t;
      }
    },
    link: {
      onRenderCell(t, { col: e, row: n }) {
        const { linkTemplate: o = "", linkProps: s } = e.setting, r = It(o, n.data);
        return t[0] = /* @__PURE__ */ G("a", { href: r, ...s, children: t[0] }), t;
      }
    },
    avatar: {
      onRenderCell(t, { col: e, row: n }) {
        const { data: o } = n, { avatarWithName: s, avatarClass: r = "size-xs circle", avatarKey: l = `${e.name}Avatar` } = e.setting, c = /* @__PURE__ */ G("div", { className: `avatar ${r} flex-none`, children: /* @__PURE__ */ G("img", { src: o ? o[l] : "" }) });
        return s ? t.unshift(c) : t[0] = c, t;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(t, { col: e }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = e.setting, l = (n - o) / 2, c = n / 2, _ = t[0];
        return t[0] = /* @__PURE__ */ G("svg", { width: n, height: n, children: [
          /* @__PURE__ */ G("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: s, fill: "transparent" }),
          /* @__PURE__ */ G("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - _) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ G("text", { x: c, y: c + o, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${l}px` }, children: Math.round(_) })
        ] }), t;
      }
    },
    actionButtons: {
      onRenderCell(t, { col: e, row: n }) {
        var c;
        const o = (c = n.data) == null ? void 0 : c[e.name];
        if (!o)
          return t;
        const { actionBtnTemplate: s = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = e.setting;
        return [{
          html: o.map((_) => {
            typeof _ == "string" && (_ = { action: _ });
            const h = r[_.action];
            return h && (_ = { className: l, ...h, ..._ }), It(s, _);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(t, { col: e }) {
        let { format: n } = e.setting;
        if (!n)
          return t;
        typeof n == "string" && (n = { type: "text", format: n });
        const { format: o, type: s } = n, r = t[0];
        return typeof o == "function" ? t[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? t[0] = ja(r, o) : s === "html" ? t[0] = { html: It(o, r) } : t[0] = It(o, r), t;
      }
    }
  }
}, fC = Co(uC, { buildIn: !0 }), hC = {
  name: "sort-type",
  onRenderHeaderCell(t, { col: e }) {
    const { sortType: n } = e.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: s } = e.setting, r = n === !0 ? "none" : n;
      if (t.push(
        /* @__PURE__ */ G("div", { className: `dtable-sort dtable-sort-${r}` }),
        { outer: !0, attrs: { "data-sort": r } }
      ), o) {
        const l = typeof o == "function" ? o.call(this, e, r) : o;
        t.push(
          { tagName: "a", attrs: { href: l, ...s } }
        );
      }
    }
    return t;
  }
}, dC = Co(hC, { buildIn: !0 }), pC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: ib,
  checkable: lC,
  colHover: nC,
  nested: _C,
  rich: fC,
  sortType: dC
}, Symbol.toStringTag, { value: "Module" }));
class To extends Lt {
}
M(To, "NAME", "dtable"), M(To, "Component", tC), M(To, "definePlugin", Co), M(To, "removePlugin", Xv), M(To, "plugins", pC);
var zt;
class Po extends se {
  constructor() {
    super(...arguments);
    T(this, zt, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, zt, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), y(this, zt) && (this.addActive(y(this, zt).parentElement, y(this, zt)), y(this, zt).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, zt, document.querySelector(n)), y(this, zt) && (this.addActive(y(this, zt).parentElement, y(this, zt)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
  }
  addActive(n, o) {
    const s = n.children;
    Array.from(s).forEach((l) => {
      l.classList.remove("active"), l.classList.contains("fade") && l.classList.remove("in");
    }), o.classList.add("active"), o.classList.contains("fade") && this.transition(o).then(function() {
      o.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(n) {
    return new Promise(function(o) {
      setTimeout(() => {
        n.classList.add("in"), o();
      }, 100);
    });
  }
}
zt = new WeakMap(), M(Po, "NAME", "NavTabs"), M(Po, "NAV_CLASS", "nav-tabs"), M(Po, "EVENTS", !0), M(Po, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (t) => {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new Po(t.target).showTarget());
});
export {
  du as ActionMenu,
  mu as ActionMenuNested,
  PS as AjaxForm,
  Af as Avatar,
  Lf as BtnGroup,
  $u as Button,
  Ut as ContextMenu,
  To as DTable,
  Vt as Datepicker,
  Dt as Dropdown,
  t_ as EventBus,
  ku as Menu,
  Fi as Messager,
  Wt as Modal,
  _r as ModalTrigger,
  qf as Nav,
  Po as NavTabs,
  Jf as Pager,
  oh as Picker,
  nf as ProgressCircle,
  af as Switch,
  we as TIME_DAY,
  Yt as Timepicker,
  ph as Toolbar,
  qt as Tooltip,
  Eh as VirtualGrid,
  Sb as addI18nMap,
  AC as browser,
  Xf as calculateTimestamp,
  yC as convertBytes,
  Bt as createDate,
  gC as formatBytes,
  ja as formatDate,
  HC as formatDateSpan,
  It as formatString,
  kb as getLangCode,
  WC as getTimeBeforeDesc,
  Ri as i18n,
  OC as isDBY,
  _a as isObject,
  Oi as isSameDay,
  qk as isSameMonth,
  RC as isSameWeek,
  Gf as isSameYear,
  NC as isToday,
  PC as isTomorrow,
  DC as isYesterday,
  Aa as mergeDeep,
  Ta as nativeEvents,
  xb as setLangCode,
  T$ as store
};
