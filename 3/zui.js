var Cb = Object.defineProperty;
var Eb = (t, e, n) => e in t ? Cb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var M = (t, e, n) => (Eb(t, typeof e != "symbol" ? e + "" : e, n), n), ma = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var y = (t, e, n) => (ma(t, e, "read from private field"), n ? n.call(t) : e.get(t)), T = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, H = (t, e, n, o) => (ma(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n), uu = (t, e, n, o) => ({
  set _(s) {
    H(t, e, s, n);
  },
  get _() {
    return y(t, e, o);
  }
}), W = (t, e, n) => (ma(t, e, "access private method"), n);
var Bc, rt, td, ed, Io, fu, ws = {}, nd = [], Tb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ye(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function od(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function rd(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Bc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return os(t, l, o, s, null);
}
function os(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++td };
  return s == null && rt.vnode != null && rt.vnode(r), r;
}
function Ab() {
  return { current: null };
}
function jc(t) {
  return t.children;
}
function rs(t, e) {
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
function id(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return id(t);
  }
}
function hu(t) {
  (!t.__d && (t.__d = !0) && Io.push(t) && !$s.__r++ || fu !== rt.debounceRendering) && ((fu = rt.debounceRendering) || setTimeout)($s);
}
function $s() {
  for (var t; $s.__r = Io.length; )
    t = Io.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Io = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ye({}, r)).__v = r.__v + 1, l_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ar(r), r.__h), ad(o, r), r.__e != l && id(r)));
    });
}
function sd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || nd, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? os(null, a, null, null, a) : Array.isArray(a) ? os(jc, { children: a }, null, null, null) : a.__b > 0 ? os(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      l_(t, a, u = u || ws, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = ld(a, _, t) : _ = cd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Ar(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && ud(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      _d(p[i], p[++i], p[++i]);
}
function ld(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? ld(o, e, n) : cd(n, o, o, s, o.__e, e));
  return e;
}
function cd(t, e, n, o, s, r) {
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
function Lb(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ks(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ks(t, r, e[r], n[r], o);
}
function du(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Tb.test(e) ? n : n + "px";
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
            n && e in n || du(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || du(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? mu : pu, r) : t.removeEventListener(e, r ? mu : pu, r);
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
function pu(t) {
  this.l[t.type + !1](rt.event ? rt.event(t) : t);
}
function mu(t) {
  this.l[t.type + !0](rt.event ? rt.event(t) : t);
}
function l_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = rt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new rs(p, g), i.constructor = b, i.render = Rb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ye({}, i.__s)), Ye(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Ye(Ye({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === jc && h.key == null ? h.props.children : h, sd(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Mb(n.__e, e, n, o, s, r, l, _);
    (h = rt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), rt.__e(k, e, n);
  }
}
function ad(t, e) {
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
    if (r = r && Bc.call(t.childNodes), h = (d = n.props || ws).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Lb(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, sd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ar(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && od(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && ks(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && ks(t, "checked", f, d.checked, !1));
  }
  return t;
}
function _d(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    rt.__e(o, n);
  }
}
function ud(t, e, n) {
  var o, s;
  if (rt.unmount && rt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || _d(o, null, e)), (o = t.__c) != null) {
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
      o[s] && ud(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || od(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Rb(t, e, n) {
  return this.constructor(t, n);
}
function Db(t, e, n) {
  var o, s, r;
  rt.__ && rt.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], l_(e, t = (!o && n || e).__k = rd(jc, null, [t]), s || ws, ws, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Bc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), ad(r, t);
}
Bc = nd.slice, rt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, td = 0, ed = function(t) {
  return t != null && t.constructor === void 0;
}, rs.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ye({}, this.state), typeof t == "function" && (t = t(Ye({}, n), this.props)), t && Ye(n, t), t != null && this.__v && (e && this._sb.push(e), hu(this));
}, rs.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), hu(this));
}, rs.prototype.render = jc, Io = [], $s.__r = 0;
var Nb = 0;
function fd(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Nb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return rt.vnode && rt.vnode(_), _;
}
var ke;
class Pb {
  constructor(e = "") {
    T(this, ke, void 0);
    typeof e == "object" ? H(this, ke, e) : H(this, ke, document.appendChild(document.createComment(e)));
  }
  on(e, n, o) {
    y(this, ke).addEventListener(e, n, o);
  }
  once(e, n, o) {
    y(this, ke).addEventListener(e, n, { once: !0, ...o });
  }
  off(e, n, o) {
    y(this, ke).removeEventListener(e, n, o);
  }
  emit(e) {
    return y(this, ke).dispatchEvent(e), e;
  }
}
ke = new WeakMap();
const Pa = /* @__PURE__ */ new Set([
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
class c_ extends Pb {
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
    return typeof e == "string" && (Pa.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(c_.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (Pa.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
var xe, ei, Sn, Po;
class gu extends c_ {
  constructor(n = "", o) {
    super(n);
    T(this, Sn);
    T(this, xe, /* @__PURE__ */ new Map());
    T(this, ei, void 0);
    H(this, ei, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, s) {
    n = W(this, Sn, Po).call(this, n), super.on(n, o, s), y(this, xe).set(o, [n, s]);
  }
  off(n, o, s) {
    n = W(this, Sn, Po).call(this, n), super.off(n, o, s), y(this, xe).delete(o);
  }
  once(n, o, s) {
    n = W(this, Sn, Po).call(this, n);
    const r = (l) => {
      o(l), y(this, xe).delete(r);
    };
    super.once(n, r, s), y(this, xe).set(r, [n, s]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = W(this, Sn, Po).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(y(this, xe).entries()).forEach(([n, [o, s]]) => {
      super.off(o, n, s);
    }), y(this, xe).clear();
  }
}
xe = new WeakMap(), ei = new WeakMap(), Sn = new WeakSet(), Po = function(n) {
  const o = y(this, ei);
  return Pa.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Ob(t, e) {
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
function Hb(t, e, n) {
  const o = Ob(t, e), s = o[o.length - 1];
  return s === void 0 ? n : s;
}
function ga(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function Oa(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (ga(t) && ga(n))
    for (const o in n)
      ga(n[o]) ? (t[o] || Object.assign(t, { [o]: {} }), Oa(t[o], n[o])) : Object.assign(t, { [o]: n[o] });
  return Oa(t, ...e);
}
function Ft(t, ...e) {
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
var a_ = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(a_ || {});
function VC(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / a_[n]).toFixed(e) + n);
}
const YC = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const o = n[1];
  return t = t.replace(o, ""), Number.parseInt(t, 10) * a_[o];
};
var Qh;
let __ = ((Qh = document.documentElement.getAttribute("lang")) == null ? void 0 : Qh.toLowerCase()) ?? "zh_cn", He;
function Wb() {
  return __;
}
function Ub(t) {
  __ = t.toLowerCase();
}
function Ib(t, e) {
  He || (He = {}), typeof t == "string" && (t = { [t]: e ?? {} }), Oa(He, t);
}
function Oi(t, e, n, o, s, r) {
  Array.isArray(t) ? He && t.unshift(He) : t = He ? [He, t] : [t], typeof n == "string" && (r = s, s = o, o = n, n = void 0);
  const l = s || __;
  let c;
  for (const _ of t) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const i = r && _ === He ? `${r}.${e}` : e;
    if (c = Hb(h, i), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? Ft(c, ...Array.isArray(n) ? n : [n]) : c;
}
Oi.addLang = Ib;
Oi.getCode = Wb;
Oi.setCode = Ub;
function Fb(t) {
  return Object.fromEntries(Object.entries(t).map(([e, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [e, n];
  }));
}
const ya = /* @__PURE__ */ new Map();
var Se, Gn, te;
class le {
  constructor(e, n) {
    T(this, Se, void 0);
    T(this, Gn, void 0);
    T(this, te, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, this.constructor.EVENTS && H(this, te, new gu(e, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, Se, { ...this.constructor.DEFAULT }), this.setOptions({ ...e instanceof HTMLElement ? Fb(e.dataset) : null, ...n }), this.constructor.all.set(e, this), H(this, Gn, e), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return y(this, Se);
  }
  get element() {
    return y(this, Gn);
  }
  get events() {
    return y(this, te);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(e) {
    return e && Object.assign(y(this, Se), e), y(this, Se);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(y(this, Gn)), y(this, te) && (this.emit("destroyed", this), y(this, te).offAll());
  }
  on(e, n, o) {
    var s;
    (s = y(this, te)) == null || s.on(e, n, o);
  }
  once(e, n, o) {
    var s;
    (s = y(this, te)) == null || s.once(e, n, o);
  }
  off(e, n, o) {
    var s;
    (s = y(this, te)) == null || s.off(e, n, o);
  }
  emit(e, n) {
    var l;
    let o = gu.createEvent(e, n);
    const s = `on${e[0].toUpperCase()}${e.substring(1)}`, r = y(this, Se)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = y(this, te)) == null ? void 0 : l.emit(e, n), o;
  }
  i18n(e, n, o) {
    return Oi(y(this, Se).i18n, e, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${e}}`;
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
    if (ya.has(e))
      return ya.get(e);
    const n = /* @__PURE__ */ new Map();
    return ya.set(e, n), n;
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
Se = new WeakMap(), Gn = new WeakMap(), te = new WeakMap(), M(le, "EVENTS", !1), M(le, "DEFAULT", {});
class Mt extends le {
  constructor() {
    super(...arguments);
    M(this, "ref", Ab());
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
    Db(/* @__PURE__ */ fd(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
M(Mt, "Component");
var u_, ft, hd, dd, Fo, yu, pd = {}, md = [], Bb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function gd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ao(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? u_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return is(t, l, o, s, null);
}
function is(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++hd };
  return s == null && ft.vnode != null && ft.vnode(r), r;
}
function jb() {
  return { current: null };
}
function f_(t) {
  return t.children;
}
function Bo(t, e) {
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
function yd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return yd(t);
  }
}
function vu(t) {
  (!t.__d && (t.__d = !0) && Fo.push(t) && !xs.__r++ || yu !== ft.debounceRendering) && ((yu = ft.debounceRendering) || setTimeout)(xs);
}
function xs() {
  for (var t; xs.__r = Fo.length; )
    t = Fo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Fo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = qe({}, r)).__v = r.__v + 1, $d(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Lr(r), r.__h), Vb(o, r), r.__e != l && yd(r)));
    });
}
function vd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || md, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? is(null, a, null, null, a) : Array.isArray(a) ? is(f_, { children: a }, null, null, null) : a.__b > 0 ? is(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      $d(t, a, u = u || pd, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = bd(a, _, t) : _ = wd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Lr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && xd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      kd(p[i], p[++i], p[++i]);
}
function bd(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? bd(o, e, n) : wd(n, o, o, s, o.__e, e));
  return e;
}
function wd(t, e, n, o, s, r) {
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
function zb(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ss(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ss(t, r, e[r], n[r], o);
}
function bu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Bb.test(e) ? n : n + "px";
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
            n && e in n || bu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || bu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? $u : wu, r) : t.removeEventListener(e, r ? $u : wu, r);
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
function wu(t) {
  this.l[t.type + !1](ft.event ? ft.event(t) : t);
}
function $u(t) {
  this.l[t.type + !0](ft.event ? ft.event(t) : t);
}
function $d(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ft.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Bo(p, g), i.constructor = b, i.render = qb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = qe({}, i.__s)), qe(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = qe(qe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === f_ && h.key == null ? h.props.children : h, vd(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Yb(n.__e, e, n, o, s, r, l, _);
    (h = ft.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ft.__e(k, e, n);
  }
}
function Vb(t, e) {
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
function Yb(t, e, n, o, s, r, l, c) {
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
    if (r = r && u_.call(t.childNodes), h = (d = n.props || pd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (zb(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, vd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Lr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && gd(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ss(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ss(t, "checked", f, d.checked, !1));
  }
  return t;
}
function kd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ft.__e(o, n);
  }
}
function xd(t, e, n) {
  var o, s;
  if (ft.unmount && ft.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || kd(o, null, e)), (o = t.__c) != null) {
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
      o[s] && xd(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || gd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function qb(t, e, n) {
  return this.constructor(t, n);
}
u_ = md.slice, ft = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, hd = 0, dd = function(t) {
  return t != null && t.constructor === void 0;
}, Bo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qe({}, this.state), typeof t == "function" && (t = t(qe({}, n), this.props)), t && qe(n, t), t != null && this.__v && (e && this._sb.push(e), vu(this));
}, Bo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), vu(this));
}, Bo.prototype.render = f_, Fo = [], xs.__r = 0;
var Gb = 0;
function Xt(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Gb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ft.vnode && ft.vnode(_), _;
}
function zc(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), o = (s, r) => {
    if (Array.isArray(s) && (r = s[1], s = s[0]), !s.length)
      return;
    const l = n.get(s);
    typeof l == "number" ? e[l][1] = !!r : (n.set(s, e.length), e.push([s, !!r]));
  };
  return t.forEach((s) => {
    typeof s == "function" && (s = s()), Array.isArray(s) ? zc(...s).forEach(o) : s && typeof s == "object" ? Object.entries(s).forEach(o) : typeof s == "string" && s.split(" ").forEach((r) => o(r, !0));
  }), e.sort((s, r) => (n.get(s[0]) || 0) - (n.get(r[0]) || 0));
}
const F = (...t) => zc(...t).reduce((e, [n, o]) => (o && e.push(n), e), []).join(" ");
function Xb({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: s
}) {
  return Ao(t, {
    className: F(e),
    style: o,
    ...s
  }, n);
}
function Sd({
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
    typeof c == "string" ? /* @__PURE__ */ Xt("i", { class: `icon ${c}` }) : c,
    /* @__PURE__ */ Xt("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof i == "string" ? /* @__PURE__ */ Xt("i", { class: `icon ${i}` }) : i
  ];
  return Ao(t, {
    className: F(e, { disabled: r, active: l }),
    title: d,
    [t === "a" ? "href" : "data-url"]: s,
    [t === "a" ? "target" : "data-target"]: h,
    style: u,
    onClick: a,
    ...o
  }, ...f);
}
function Jb({
  component: t = "div",
  className: e,
  text: n,
  attrs: o,
  children: s,
  style: r,
  onClick: l
}) {
  return Ao(t, {
    className: F(e),
    style: r,
    onClick: l,
    ...o
  }, n, typeof s == "function" ? s() : s);
}
function Kb({
  component: t = "div",
  className: e,
  style: n,
  space: o,
  flex: s,
  attrs: r,
  onClick: l,
  children: c
}) {
  return Ao(t, {
    className: F(e),
    style: { width: o, height: o, flex: s, ...n },
    onClick: l,
    ...r
  }, c);
}
function Zb(t) {
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
      m != null && (typeof m == "object" && !ed(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ fd("div", { className: F(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? f.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(i, m.attrs)) : a.push(m));
    });
  }), f.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: f } }), [{
    className: F(d),
    style: u,
    ...i
  }, a];
}
function Ha({
  tag: t = "div",
  ...e
}) {
  const [n, o] = Zb(e);
  return rd(t, n, ...o);
}
function Qb({ type: t, ...e }) {
  return /* @__PURE__ */ Xt(Ha, { ...e });
}
function Cd({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: s
}) {
  return Ao(t, {
    className: F(e),
    style: o,
    ...s
  }, n);
}
var Do;
let $o = (Do = class extends Bo {
  constructor() {
    super(...arguments);
    M(this, "ref", jb());
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
          return /* @__PURE__ */ Xt(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, Ao);
        if (dd(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: c = "item", component: _, key: h = s, rootAttrs: i, rootClass: d, rootStyle: u, rootChildren: a, ...f } = r;
    if (c === "html")
      return /* @__PURE__ */ Xt(
        "li",
        {
          className: F("action-menu-item", `${this.name}-html`, d, f.className),
          ...i,
          style: u || f.style,
          dangerouslySetInnerHTML: { __html: f.html }
        },
        h
      );
    const v = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || $o.ItemComponents[c] : _;
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
    const { children: r, className: l, key: c, ..._ } = o, { activeClass: h = "", activeKey: i, activeIcon: d } = this.props, u = d && i === c ? /* @__PURE__ */ Xt("i", { className: `checked icon icon-${d}` }) : null, a = i === c;
    return /* @__PURE__ */ Xt(
      "li",
      {
        className: F("action-menu-item", `${this.name}-${s.type}`, l, { [h]: a }),
        ..._,
        children: [
          /* @__PURE__ */ Xt(n, { ...s }),
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
    return /* @__PURE__ */ Xt(m, { class: F(this.name, l), style: s, ...p, ref: this.ref, children: [
      c && c.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, M(Do, "ItemComponents", {
  divider: Xb,
  item: Sd,
  heading: Jb,
  space: Kb,
  custom: Qb,
  basic: Cd
}), M(Do, "ROOT_TAG", "menu"), M(Do, "NAME", "action-menu"), Do);
class ku extends Mt {
}
M(ku, "NAME", "actionmenu"), M(ku, "Component", $o);
function xu({
  ...t
}) {
  return /* @__PURE__ */ Xt(Sd, { ...t });
}
var Ma, ni, ce, Xn;
let Ed = (Ma = class extends $o {
  constructor(n) {
    super(n);
    T(this, ni, /* @__PURE__ */ new Set());
    T(this, ce, void 0);
    T(this, Xn, (n, o, s) => {
      this.toggleNestedMenu(n, o), s.preventDefault();
    });
    H(this, ce, n.nestedShow === void 0), y(this, ce) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
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
    return /* @__PURE__ */ Xt(
      s,
      {
        items: o,
        name: r,
        nestedShow: y(this, ce) ? this.state.nestedShow : c,
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
    y(this, ni).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = xu), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: y(this, Xn).bind(this, l, !0),
        onMouseLeave: y(this, Xn).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = r;
      r.onClick = (i) => {
        y(this, Xn).call(this, l, void 0, i), h == null || h(i);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = y(this, ce) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, o);
    if (!y(this, ce))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...y(this, ni).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    y(this, ce) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    y(this, ce) && this.setState({ nestedShow: !1 });
  }
}, ni = new WeakMap(), ce = new WeakMap(), Xn = new WeakMap(), M(Ma, "ItemComponents", {
  item: xu
}), Ma);
class Su extends Mt {
}
M(Su, "NAME", "actionmenunested"), M(Su, "Component", Ed);
var h_, ht, Td, jo, Cu, Ad = {}, Ld = [], t0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ge(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Md(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function e0(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? h_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ss(t, l, o, s, null);
}
function ss(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Td };
  return s == null && ht.vnode != null && ht.vnode(r), r;
}
function d_(t) {
  return t.children;
}
function zo(t, e) {
  this.props = t, this.context = e;
}
function Mr(t, e) {
  if (e == null)
    return t.__ ? Mr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Mr(t) : null;
}
function Rd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Rd(t);
  }
}
function Eu(t) {
  (!t.__d && (t.__d = !0) && jo.push(t) && !Cs.__r++ || Cu !== ht.debounceRendering) && ((Cu = ht.debounceRendering) || setTimeout)(Cs);
}
function Cs() {
  for (var t; Cs.__r = jo.length; )
    t = jo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), jo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ge({}, r)).__v = r.__v + 1, Od(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Mr(r), r.__h), o0(o, r), r.__e != l && Rd(r)));
    });
}
function Dd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Ld, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ss(null, a, null, null, a) : Array.isArray(a) ? ss(d_, { children: a }, null, null, null) : a.__b > 0 ? ss(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Od(t, a, u = u || Ad, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Nd(a, _, t) : _ = Pd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Mr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Wd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Hd(p[i], p[++i], p[++i]);
}
function Nd(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Nd(o, e, n) : Pd(n, o, o, s, o.__e, e));
  return e;
}
function Pd(t, e, n, o, s, r) {
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
function n0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Es(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Es(t, r, e[r], n[r], o);
}
function Tu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || t0.test(e) ? n : n + "px";
}
function Es(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Tu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Tu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Lu : Au, r) : t.removeEventListener(e, r ? Lu : Au, r);
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
function Au(t) {
  this.l[t.type + !1](ht.event ? ht.event(t) : t);
}
function Lu(t) {
  this.l[t.type + !0](ht.event ? ht.event(t) : t);
}
function Od(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ht.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new zo(p, g), i.constructor = b, i.render = i0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ge({}, i.__s)), Ge(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Ge(Ge({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === d_ && h.key == null ? h.props.children : h, Dd(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = r0(n.__e, e, n, o, s, r, l, _);
    (h = ht.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ht.__e(k, e, n);
  }
}
function o0(t, e) {
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
function r0(t, e, n, o, s, r, l, c) {
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
    if (r = r && h_.call(t.childNodes), h = (d = n.props || Ad).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (n0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Dd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Mr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Md(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Es(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Es(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Hd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ht.__e(o, n);
  }
}
function Wd(t, e, n) {
  var o, s;
  if (ht.unmount && ht.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Hd(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Wd(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Md(t.__e), t.__ = t.__e = t.__d = void 0;
}
function i0(t, e, n) {
  return this.constructor(t, n);
}
h_ = Ld.slice, ht = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Td = 0, zo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ge({}, this.state), typeof t == "function" && (t = t(Ge({}, n), this.props)), t && Ge(n, t), t != null && this.__v && (e && this._sb.push(e), Eu(this));
}, zo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Eu(this));
}, zo.prototype.render = d_, jo = [], Cs.__r = 0;
var s0 = 0;
function Mo(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --s0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ht.vnode && ht.vnode(_), _;
}
let de = class extends zo {
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
    return e0(
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
      i ? /* @__PURE__ */ Mo("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof a == "string" ? /* @__PURE__ */ Mo("i", { class: `icon ${a}` }) : a,
      S ? null : /* @__PURE__ */ Mo("span", { className: "text", children: i ? u : f }),
      i ? null : r,
      i ? null : typeof v == "string" ? /* @__PURE__ */ Mo("i", { class: `icon ${v}` }) : v,
      i ? null : p ? /* @__PURE__ */ Mo("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class Mu extends Mt {
}
M(Mu, "NAME", "button"), M(Mu, "Component", de);
var Wa;
Wa = { __e: function(t, e, n, o) {
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
var l0 = 0;
function c0(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --l0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Wa.vnode && Wa.vnode(_), _;
}
var Ra;
let p_ = (Ra = class extends Ed {
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
    return /* @__PURE__ */ c0("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, M(Ra, "NAME", "menu"), Ra);
class Ru extends Mt {
}
M(Ru, "NAME", "menu"), M(Ru, "Component", p_);
let a0 = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Ud, dt, Id, Vo, Du, Fd = {}, Bd = [], _0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function jd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function va(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Id };
  return s == null && dt.vnode != null && dt.vnode(r), r;
}
function m_(t) {
  return t.children;
}
function Yo(t, e) {
  this.props = t, this.context = e;
}
function Rr(t, e) {
  if (e == null)
    return t.__ ? Rr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Rr(t) : null;
}
function zd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return zd(t);
  }
}
function Nu(t) {
  (!t.__d && (t.__d = !0) && Vo.push(t) && !Ts.__r++ || Du !== dt.debounceRendering) && ((Du = dt.debounceRendering) || setTimeout)(Ts);
}
function Ts() {
  for (var t; Ts.__r = Vo.length; )
    t = Vo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Vo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Xe({}, r)).__v = r.__v + 1, Gd(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Rr(r), r.__h), f0(o, r), r.__e != l && zd(r)));
    });
}
function Vd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Bd, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? va(null, a, null, null, a) : Array.isArray(a) ? va(m_, { children: a }, null, null, null) : a.__b > 0 ? va(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Gd(t, a, u = u || Fd, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Yd(a, _, t) : _ = qd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Rr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Jd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Xd(p[i], p[++i], p[++i]);
}
function Yd(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Yd(o, e, n) : qd(n, o, o, s, o.__e, e));
  return e;
}
function qd(t, e, n, o, s, r) {
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
function u0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || As(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || As(t, r, e[r], n[r], o);
}
function Pu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || _0.test(e) ? n : n + "px";
}
function As(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Pu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Pu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Hu : Ou, r) : t.removeEventListener(e, r ? Hu : Ou, r);
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
function Ou(t) {
  this.l[t.type + !1](dt.event ? dt.event(t) : t);
}
function Hu(t) {
  this.l[t.type + !0](dt.event ? dt.event(t) : t);
}
function Gd(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = dt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Yo(p, g), i.constructor = b, i.render = d0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Xe({}, i.__s)), Xe(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Xe(Xe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === m_ && h.key == null ? h.props.children : h, Vd(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = h0(n.__e, e, n, o, s, r, l, _);
    (h = dt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), dt.__e(k, e, n);
  }
}
function f0(t, e) {
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
function h0(t, e, n, o, s, r, l, c) {
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
    if (r = r && Ud.call(t.childNodes), h = (d = n.props || Fd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (u0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Vd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Rr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && jd(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && As(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && As(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Xd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    dt.__e(o, n);
  }
}
function Jd(t, e, n) {
  var o, s;
  if (dt.unmount && dt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Xd(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Jd(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || jd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function d0(t, e, n) {
  return this.constructor(t, n);
}
Ud = Bd.slice, dt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Id = 0, Yo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xe({}, this.state), typeof t == "function" && (t = t(Xe({}, n), this.props)), t && Xe(n, t), t != null && this.__v && (e && this._sb.push(e), Nu(this));
}, Yo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Nu(this));
}, Yo.prototype.render = m_, Vo = [], Ts.__r = 0;
var p0 = 0;
function m0(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --p0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return dt.vnode && dt.vnode(_), _;
}
var Ua, Bn;
Ua = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Bn = function(t) {
  return t != null && t.constructor === void 0;
};
var g0 = 0;
function be(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --g0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Ua.vnode && Ua.vnode(_), _;
}
var Ia;
Ia = { __e: function(t, e, n, o) {
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
var y0 = 0;
function Vc(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --y0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Ia.vnode && Ia.vnode(_), _;
}
function v0({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Vc(de, { type: n, ...o });
}
var Kd, pt, Zd, qo, Wu, Qd = {}, tp = [], b0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Je(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ep(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ba(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Zd };
  return s == null && pt.vnode != null && pt.vnode(r), r;
}
function w0() {
  return { current: null };
}
function g_(t) {
  return t.children;
}
function Go(t, e) {
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
function np(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return np(t);
  }
}
function Uu(t) {
  (!t.__d && (t.__d = !0) && qo.push(t) && !Ls.__r++ || Wu !== pt.debounceRendering) && ((Wu = pt.debounceRendering) || setTimeout)(Ls);
}
function Ls() {
  for (var t; Ls.__r = qo.length; )
    t = qo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), qo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Je({}, r)).__v = r.__v + 1, sp(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Dr(r), r.__h), k0(o, r), r.__e != l && np(r)));
    });
}
function op(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || tp, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ba(null, a, null, null, a) : Array.isArray(a) ? ba(g_, { children: a }, null, null, null) : a.__b > 0 ? ba(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      sp(t, a, u = u || Qd, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = rp(a, _, t) : _ = ip(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Dr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && cp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      lp(p[i], p[++i], p[++i]);
}
function rp(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? rp(o, e, n) : ip(n, o, o, s, o.__e, e));
  return e;
}
function ip(t, e, n, o, s, r) {
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
function $0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ms(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ms(t, r, e[r], n[r], o);
}
function Iu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || b0.test(e) ? n : n + "px";
}
function Ms(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Iu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Iu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Bu : Fu, r) : t.removeEventListener(e, r ? Bu : Fu, r);
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
function Fu(t) {
  this.l[t.type + !1](pt.event ? pt.event(t) : t);
}
function Bu(t) {
  this.l[t.type + !0](pt.event ? pt.event(t) : t);
}
function sp(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = pt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Go(p, g), i.constructor = b, i.render = S0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Je({}, i.__s)), Je(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Je(Je({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === g_ && h.key == null ? h.props.children : h, op(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = x0(n.__e, e, n, o, s, r, l, _);
    (h = pt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), pt.__e(k, e, n);
  }
}
function k0(t, e) {
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
function x0(t, e, n, o, s, r, l, c) {
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
    if (r = r && Kd.call(t.childNodes), h = (d = n.props || Qd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if ($0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, op(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Dr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && ep(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ms(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ms(t, "checked", f, d.checked, !1));
  }
  return t;
}
function lp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    pt.__e(o, n);
  }
}
function cp(t, e, n) {
  var o, s;
  if (pt.unmount && pt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || lp(o, null, e)), (o = t.__c) != null) {
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
      o[s] && cp(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || ep(t.__e), t.__ = t.__e = t.__d = void 0;
}
function S0(t, e, n) {
  return this.constructor(t, n);
}
Kd = tp.slice, pt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Zd = 0, Go.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Je({}, this.state), typeof t == "function" && (t = t(Je({}, n), this.props)), t && Je(n, t), t != null && this.__v && (e && this._sb.push(e), Uu(this));
}, Go.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Uu(this));
}, Go.prototype.render = g_, qo = [], Ls.__r = 0;
var C0 = 0;
function ap(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --C0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pt.vnode && pt.vnode(_), _;
}
var Yc, it, _p, Xo, ju, Rs = {}, up = [], E0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ke(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function fp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function hp(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Yc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ls(t, l, o, s, null);
}
function ls(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++_p };
  return s == null && it.vnode != null && it.vnode(r), r;
}
function qc(t) {
  return t.children;
}
function cs(t, e) {
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
function dp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return dp(t);
  }
}
function zu(t) {
  (!t.__d && (t.__d = !0) && Xo.push(t) && !Ds.__r++ || ju !== it.debounceRendering) && ((ju = it.debounceRendering) || setTimeout)(Ds);
}
function Ds() {
  for (var t; Ds.__r = Xo.length; )
    t = Xo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Xo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ke({}, r)).__v = r.__v + 1, y_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Nr(r), r.__h), yp(o, r), r.__e != l && dp(r)));
    });
}
function pp(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || up, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ls(null, a, null, null, a) : Array.isArray(a) ? ls(qc, { children: a }, null, null, null) : a.__b > 0 ? ls(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      y_(t, a, u = u || Rs, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = mp(a, _, t) : _ = gp(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Nr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && bp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      vp(p[i], p[++i], p[++i]);
}
function mp(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? mp(o, e, n) : gp(n, o, o, s, o.__e, e));
  return e;
}
function gp(t, e, n, o, s, r) {
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
function T0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ns(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ns(t, r, e[r], n[r], o);
}
function Vu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || E0.test(e) ? n : n + "px";
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
            n && e in n || Vu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Vu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? qu : Yu, r) : t.removeEventListener(e, r ? qu : Yu, r);
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
function Yu(t) {
  this.l[t.type + !1](it.event ? it.event(t) : t);
}
function qu(t) {
  this.l[t.type + !0](it.event ? it.event(t) : t);
}
function y_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = it.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new cs(p, g), i.constructor = b, i.render = L0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ke({}, i.__s)), Ke(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Ke(Ke({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === qc && h.key == null ? h.props.children : h, pp(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = A0(n.__e, e, n, o, s, r, l, _);
    (h = it.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), it.__e(k, e, n);
  }
}
function yp(t, e) {
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
function A0(t, e, n, o, s, r, l, c) {
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
    if (r = r && Yc.call(t.childNodes), h = (d = n.props || Rs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (T0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, pp(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Nr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && fp(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ns(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ns(t, "checked", f, d.checked, !1));
  }
  return t;
}
function vp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    it.__e(o, n);
  }
}
function bp(t, e, n) {
  var o, s;
  if (it.unmount && it.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || vp(o, null, e)), (o = t.__c) != null) {
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
      o[s] && bp(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || fp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function L0(t, e, n) {
  return this.constructor(t, n);
}
function M0(t, e, n) {
  var o, s, r;
  it.__ && it.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], y_(e, t = (!o && n || e).__k = hp(qc, null, [t]), s || Rs, Rs, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Yc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), yp(r, t);
}
Yc = up.slice, it = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, _p = 0, cs.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ke({}, this.state), typeof t == "function" && (t = t(Ke({}, n), this.props)), t && Ke(n, t), t != null && this.__v && (e && this._sb.push(e), zu(this));
}, cs.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), zu(this));
}, cs.prototype.render = qc, Xo = [], Ds.__r = 0;
function R0(t) {
  return t.button === 2;
}
var D0 = 0;
function N0(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --D0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return it.vnode && it.vnode(_), _;
}
function v_(t) {
  return t.split("-")[1];
}
function wp(t) {
  return t === "y" ? "height" : "width";
}
function Pr(t) {
  return t.split("-")[0];
}
function $p(t) {
  return ["top", "bottom"].includes(Pr(t)) ? "x" : "y";
}
function Gu(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = $p(e), _ = wp(c), h = o[_] / 2 - s[_] / 2, i = Pr(e), d = c === "x";
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
  switch (v_(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const P0 = async (t, e, n) => {
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
  } = Gu(h, o, _), u = o, a = {}, f = 0;
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
      } = Gu(h, u, _)), v = -1;
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
function O0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function H0(t) {
  return typeof t != "number" ? O0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Ps(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function W0(t, e) {
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
  } = e, f = H0(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = Ps(await r.getClippingRect({
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
  }, S = Ps(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const U0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Os(t) {
  return t.replace(/left|right|bottom|top/g, (e) => U0[e]);
}
function I0(t, e, n) {
  n === void 0 && (n = !1);
  const o = v_(t), s = $p(t), r = wp(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Os(l)), {
    main: l,
    cross: Os(l)
  };
}
const F0 = {
  start: "end",
  end: "start"
};
function Fa(t) {
  return t.replace(/start|end/g, (e) => F0[e]);
}
function B0(t) {
  const e = Os(t);
  return [Fa(t), e, Fa(e)];
}
function j0(t, e, n) {
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
function z0(t, e, n, o) {
  const s = v_(t);
  let r = j0(Pr(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(Fa)))), r;
}
const kp = function(t) {
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
      } = t, p = Pr(o), m = Pr(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [Os(l)] : B0(l));
      !d && a !== "none" && w.push(...z0(l, f, a, g));
      const $ = [l, ...w], S = await W0(e, v), A = [];
      let E = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = I0(o, r, g);
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
            const D = (k = E.map((C) => [C, C.overflows.filter((x) => x > 0).reduce((x, N) => x + N, 0)]).sort((C, x) => C[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            D && (j = D);
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
function Jt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function pe(t) {
  return Jt(t).getComputedStyle(t);
}
function fn(t) {
  return Sp(t) ? (t.nodeName || "").toLowerCase() : "";
}
let zi;
function xp() {
  if (zi)
    return zi;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (zi = t.brands.map((e) => e.brand + "/" + e.version).join(" "), zi) : navigator.userAgent;
}
function Ae(t) {
  return t instanceof Jt(t).HTMLElement;
}
function oe(t) {
  return t instanceof Jt(t).Element;
}
function Sp(t) {
  return t instanceof Jt(t).Node;
}
function Xu(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Jt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Gc(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = pe(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function V0(t) {
  return ["table", "td", "th"].includes(fn(t));
}
function b_(t) {
  const e = /firefox/i.test(xp()), n = pe(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function Cp() {
  return !/^((?!chrome|android).)*safari/i.test(xp());
}
function w_(t) {
  return ["html", "body", "#document"].includes(fn(t));
}
const Ju = Math.min, Jo = Math.max, Hs = Math.round;
function Ep(t) {
  const e = pe(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = Hs(n) !== s || Hs(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Tp(t) {
  return oe(t) ? t : t.contextElement;
}
const Ap = {
  x: 1,
  y: 1
};
function jn(t) {
  const e = Tp(t);
  if (!Ae(e))
    return Ap;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = Ep(e);
  let l = (r ? Hs(n.width) : n.width) / o, c = (r ? Hs(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Nn(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Tp(t);
  let _ = Ap;
  e && (o ? oe(o) && (_ = jn(o)) : _ = jn(t));
  const h = c ? Jt(c) : window, i = !Cp() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const v = Jt(c), p = o && oe(o) ? Jt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = jn(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
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
  return ((Sp(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Xc(t) {
  return oe(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Lp(t) {
  return Nn(mn(t)).left + Xc(t).scrollLeft;
}
function Y0(t, e, n) {
  const o = Ae(e), s = mn(e), r = Nn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((fn(e) !== "body" || Gc(s)) && (l = Xc(e)), Ae(e)) {
      const _ = Nn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = Lp(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Or(t) {
  if (fn(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (Xu(t) ? t.host : null) || // Fallback
    mn(t)
  );
  return Xu(e) ? e.host : e;
}
function Ku(t) {
  return !Ae(t) || pe(t).position === "fixed" ? null : t.offsetParent;
}
function q0(t) {
  let e = Or(t);
  for (; Ae(e) && !w_(e); ) {
    if (b_(e))
      return e;
    e = Or(e);
  }
  return null;
}
function Zu(t) {
  const e = Jt(t);
  let n = Ku(t);
  for (; n && V0(n) && pe(n).position === "static"; )
    n = Ku(n);
  return n && (fn(n) === "html" || fn(n) === "body" && pe(n).position === "static" && !b_(n)) ? e : n || q0(t) || e;
}
function G0(t) {
  return Ep(t);
}
function X0(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const s = Ae(n), r = mn(n);
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
  if ((s || !s && o !== "fixed") && ((fn(n) !== "body" || Gc(r)) && (l = Xc(n)), Ae(n))) {
    const h = Nn(n);
    c = jn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function J0(t, e) {
  const n = Jt(t), o = mn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = Cp();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function K0(t) {
  var e;
  const n = mn(t), o = Xc(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = Jo(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = Jo(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + Lp(t);
  const _ = -o.scrollTop;
  return pe(s || n).direction === "rtl" && (c += Jo(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Mp(t) {
  const e = Or(t);
  return w_(e) ? t.ownerDocument.body : Ae(e) && Gc(e) ? e : Mp(e);
}
function Ko(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Mp(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Jt(o);
  return s ? e.concat(r, r.visualViewport || [], Gc(o) ? o : []) : e.concat(o, Ko(o));
}
function Z0(t, e) {
  const n = Nn(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Ae(t) ? jn(t) : {
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
function Qu(t, e, n) {
  return e === "viewport" ? Ps(J0(t, n)) : oe(e) ? Z0(e, n) : Ps(K0(mn(t)));
}
function Q0(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Ko(t).filter((c) => oe(c) && fn(c) !== "body"), s = null;
  const r = pe(t).position === "fixed";
  let l = r ? Or(t) : t;
  for (; oe(l) && !w_(l); ) {
    const c = pe(l), _ = b_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Or(l);
  }
  return e.set(t, o), o;
}
function tw(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? Q0(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = Qu(e, i, s);
    return h.top = Jo(d.top, h.top), h.right = Ju(d.right, h.right), h.bottom = Ju(d.bottom, h.bottom), h.left = Jo(d.left, h.left), h;
  }, Qu(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const ew = {
  getClippingRect: tw,
  convertOffsetParentRelativeRectToViewportRelativeRect: X0,
  isElement: oe,
  getDimensions: G0,
  getOffsetParent: Zu,
  getDocumentElement: mn,
  getScale: jn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || Zu, r = this.getDimensions;
    return {
      reference: Y0(e, await s(n), o),
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
function nw(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...oe(t) ? Ko(t) : t.contextElement ? Ko(t.contextElement) : [], ...Ko(e)] : [];
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
const Rp = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: ew,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return P0(t, e, {
    ...s,
    platform: r
  });
};
let ow = class extends p_ {
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
      middleware: [kp()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  _createPopper() {
    const e = this._getPopperOptions();
    this.ref.current && Rp(this._getPopperElement(), this.ref.current, e).then(({ x: n, y: o }) => {
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
    return /* @__PURE__ */ N0("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var Ue, Jn, oi, ri, Ml, Dp, Rl, Np;
class It extends le {
  constructor() {
    super(...arguments);
    T(this, Ml);
    T(this, Rl);
    T(this, Ue, void 0);
    T(this, Jn, void 0);
    T(this, oi, void 0);
    M(this, "arrowEl");
    T(this, ri, void 0);
  }
  get isShown() {
    var n;
    return (n = y(this, Ue)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return y(this, Ue) || this._ensureMenu();
  }
  get trigger() {
    return y(this, oi) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, oi, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var o, s;
    return (o = y(this, ri)) == null || o.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((s = y(this, Ue)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    super.destroy(), (n = y(this, Ue)) == null || n.remove();
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
    return s.style.width = "max-content", s.style.position = this.options.strategy, s.style.top = "0", s.style.left = "0", H(this, Ue, s), s;
  }
  _getPopperOptions() {
    var r;
    const { placement: n, strategy: o } = this.options, s = {
      middleware: [],
      placement: n,
      strategy: o
    };
    return this.options.flip && ((r = s.middleware) == null || r.push(kp())), s;
  }
  _createPopper() {
    const n = this._getPopperOptions(), o = this._getPopperElement();
    H(this, ri, nw(o, this.menu, () => {
      Rp(o, this.menu, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
        Object.assign(this.menu.style, {
          left: `${s}px`,
          top: `${r}px`
        });
        const _ = c.split("-")[0], h = W(this, Ml, Dp).call(this, _);
        if (l.arrow && this.arrowEl) {
          const { x: i, y: d } = l.arrow;
          Object.assign(this.arrowEl.style, {
            left: i != null ? `${i}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...W(this, Rl, Np).call(this, _)
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (M0(hp(ow, n), this.menu), !0);
  }
  _getPopperElement() {
    return y(this, Jn) || H(this, Jn, {
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
    }), y(this, Jn);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)) || o && R0(o))
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
Ue = new WeakMap(), Jn = new WeakMap(), oi = new WeakMap(), ri = new WeakMap(), Ml = new WeakSet(), Dp = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Rl = new WeakSet(), Np = function(n) {
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
}, M(It, "NAME", "contextmenu"), M(It, "EVENTS", !0), M(It, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), M(It, "MENU_CLASS", "contextmenu"), M(It, "CLASS_SHOW", "show"), M(It, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (t) => {
  var o;
  const e = t.target;
  if ((o = e.closest) != null && o.call(e, `.${It.MENU_CLASS}`))
    return;
  const n = e.closest(It.MENU_SELECTOR);
  n && (It.ensure(n).show(t), t.preventDefault());
});
document.addEventListener("click", It.clear.bind(It));
function Pp(t) {
  return t.split("-")[1];
}
function rw(t) {
  return t === "y" ? "height" : "width";
}
function Op(t) {
  return t.split("-")[0];
}
function Hp(t) {
  return ["top", "bottom"].includes(Op(t)) ? "x" : "y";
}
function iw(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function sw(t) {
  return typeof t != "number" ? iw(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
const lw = Math.min, cw = Math.max;
function aw(t, e, n) {
  return cw(t, lw(e, n));
}
const _w = (t) => ({
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
    const h = sw(o), i = {
      x: s,
      y: r
    }, d = Hp(l), u = rw(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], E = w / 2 - a[u] / 2 + $, b = aw(S, E, A), R = Pp(l) != null && E != b && c.reference[u] / 2 - (E < S ? h[f] : h[v]) - a[u] / 2 < 0 ? E < S ? S - E : A - E : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: E - b
      }
    };
  }
});
async function uw(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = Op(n), c = Pp(n), _ = Hp(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const fw = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await uw(e, t);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
var Kn, Zn, Qn, Dl, Wp;
const ru = class extends It {
  constructor() {
    super(...arguments);
    T(this, Dl);
    T(this, Kn, !1);
    T(this, Zn, 0);
    M(this, "hideLater", () => {
      y(this, Qn).call(this), H(this, Zn, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, Qn, () => {
      clearTimeout(y(this, Zn)), H(this, Zn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && ru.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!y(this, Kn) && this.isHover && W(this, Dl, Wp).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    y(this, Kn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", y(this, Qn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 8 : 0;
  }
  _getPopperOptions() {
    var s, r;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && this.arrowEl && ((s = n.middleware) == null || s.push(fw(o)), (r = n.middleware) == null || r.push(_w({ element: this.arrowEl }))), n;
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
let Pt = ru;
Kn = new WeakMap(), Zn = new WeakMap(), Qn = new WeakMap(), Dl = new WeakSet(), Wp = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", y(this, Qn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Kn, !0);
}, M(Pt, "NAME", "dropdown"), M(Pt, "MENU_CLASS", "dropdown-menu"), M(Pt, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), M(Pt, "DEFAULT", {
  ...It.DEFAULT,
  strategy: "fixed",
  trigger: "click"
});
document.addEventListener("click", function(t) {
  var o;
  const e = t.target, n = (o = e.closest) == null ? void 0 : o.call(e, Pt.MENU_SELECTOR);
  if (n) {
    const s = Pt.ensure(n);
    s.options.trigger === "click" && s.toggle();
  } else
    Pt.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  var s;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, Pt.MENU_SELECTOR);
  if (!n)
    return;
  const o = Pt.ensure(n);
  o.isHover && o.show();
});
const hw = (t) => {
  const e = document.getElementsByClassName("with-dropdown-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Pt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Pt.clear({ event: t });
};
window.addEventListener("scroll", hw, !0);
var ii, to;
class dw extends Go {
  constructor(n) {
    var o;
    super(n);
    T(this, ii, void 0);
    T(this, to, w0());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return y(this, to);
  }
  get triggerElement() {
    return y(this, to).current;
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
    }), H(this, ii, Pt.ensure(this.triggerElement, {
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
    (n = y(this, ii)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: s, ...r } = this.props;
    return {
      className: F("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: y(this, to)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ ap("div", { ...o, children: n });
  }
}
ii = new WeakMap(), to = new WeakMap();
class pw extends dw {
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
    return o.caret = s, /* @__PURE__ */ ap(de, { ...o });
  }
}
function Up({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Vc(pw, { type: n, ...o });
}
var $_, mt, Ip, Fp, Zo, tf, Bp = {}, jp = [], mw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function zp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function gw(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? $_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return as(t, l, o, s, null);
}
function as(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Ip };
  return s == null && mt.vnode != null && mt.vnode(r), r;
}
function k_(t) {
  return t.children;
}
function Qo(t, e) {
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
function Vp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Vp(t);
  }
}
function ef(t) {
  (!t.__d && (t.__d = !0) && Zo.push(t) && !Ws.__r++ || tf !== mt.debounceRendering) && ((tf = mt.debounceRendering) || setTimeout)(Ws);
}
function Ws() {
  for (var t; Ws.__r = Zo.length; )
    t = Zo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Zo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ze({}, r)).__v = r.__v + 1, Xp(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Hr(r), r.__h), vw(o, r), r.__e != l && Vp(r)));
    });
}
function Yp(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || jp, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? as(null, a, null, null, a) : Array.isArray(a) ? as(k_, { children: a }, null, null, null) : a.__b > 0 ? as(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Xp(t, a, u = u || Bp, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = qp(a, _, t) : _ = Gp(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Hr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Kp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Jp(p[i], p[++i], p[++i]);
}
function qp(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? qp(o, e, n) : Gp(n, o, o, s, o.__e, e));
  return e;
}
function Gp(t, e, n, o, s, r) {
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
function yw(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Us(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Us(t, r, e[r], n[r], o);
}
function nf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || mw.test(e) ? n : n + "px";
}
function Us(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || nf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || nf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? rf : of, r) : t.removeEventListener(e, r ? rf : of, r);
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
function of(t) {
  this.l[t.type + !1](mt.event ? mt.event(t) : t);
}
function rf(t) {
  this.l[t.type + !0](mt.event ? mt.event(t) : t);
}
function Xp(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = mt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Qo(p, g), i.constructor = b, i.render = ww), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ze({}, i.__s)), Ze(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Ze(Ze({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === k_ && h.key == null ? h.props.children : h, Yp(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = bw(n.__e, e, n, o, s, r, l, _);
    (h = mt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), mt.__e(k, e, n);
  }
}
function vw(t, e) {
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
function bw(t, e, n, o, s, r, l, c) {
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
    if (r = r && $_.call(t.childNodes), h = (d = n.props || Bp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (yw(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Yp(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Hr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && zp(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Us(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Us(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Jp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    mt.__e(o, n);
  }
}
function Kp(t, e, n) {
  var o, s;
  if (mt.unmount && mt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Jp(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Kp(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || zp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ww(t, e, n) {
  return this.constructor(t, n);
}
$_ = jp.slice, mt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Ip = 0, Fp = function(t) {
  return t != null && t.constructor === void 0;
}, Qo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof t == "function" && (t = t(Ze({}, n), this.props)), t && Ze(n, t), t != null && this.__v && (e && this._sb.push(e), ef(this));
}, Qo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ef(this));
}, Qo.prototype.render = k_, Zo = [], Ws.__r = 0;
var $w = 0;
function sf(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --$w, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return mt.vnode && mt.vnode(_), _;
}
let Zp = class extends Qo {
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
    return /* @__PURE__ */ sf(de, { ...s }, o);
  }
  renderItem(e, n, o) {
    const { itemRender: s, defaultBtnProps: r, onClickItem: l } = e, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), s) {
      const _ = s.call(this, c, gw);
      if (Fp(_))
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
    return /* @__PURE__ */ sf(
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
function kw({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Vc(Zp, { type: n, ...o });
}
var Fn;
let ko = (Fn = class extends $o {
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
    return /* @__PURE__ */ Vc(e, { ...r });
  }
}, M(Fn, "ItemComponents", {
  item: v0,
  dropdown: Up,
  "btn-group": kw
}), M(Fn, "ROOT_TAG", "nav"), M(Fn, "NAME", "toolbar"), M(Fn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), Fn);
function xw({
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
  c === !0 ? d = /* @__PURE__ */ be(de, { className: "alert-close btn ghost", square: !0, onClick: _, children: /* @__PURE__ */ be("span", { class: "close" }) }) : Bn(c) ? d = c : typeof c == "object" && (d = /* @__PURE__ */ be(de, { ...c, onClick: _ }));
  const u = Bn(n) ? n : n ? /* @__PURE__ */ be(ko, { ...n }) : null;
  return /* @__PURE__ */ be("div", { className: F("alert", t), style: e, ...i, children: [
    Bn(h) ? h : typeof h == "string" ? /* @__PURE__ */ be("i", { className: `icon ${h}` }) : null,
    Bn(s) ? s : /* @__PURE__ */ be("div", { className: F("alert-content", r), children: [
      Bn(o) ? o : o && /* @__PURE__ */ be("div", { className: "alert-heading", children: o }),
      /* @__PURE__ */ be("div", { className: "alert-text", children: s }),
      o ? u : null
    ] }),
    o ? null : u,
    d,
    l
  ] });
}
function Sw(t) {
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
let Cw = class extends Yo {
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
    return /* @__PURE__ */ m0(
      xw,
      {
        className: F("messager", _, s, l === !0 ? Sw(r) : l, c ? "in" : ""),
        ...i
      }
    );
  }
};
var eo, us;
class _s extends Mt {
  constructor() {
    super(...arguments);
    T(this, eo);
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
    this._show || (this.emit("show"), this.render(), this._show = !0, W(this, eo, us).call(this, () => {
      this.emit("shown");
      const { time: n } = this.options;
      n && W(this, eo, us).call(this, () => this.hide(), n);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), W(this, eo, us).call(this, () => {
      this.emit("hidden");
    }));
  }
}
eo = new WeakSet(), us = function(n, o = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, o);
}, M(_s, "NAME", "MessagerItem"), M(_s, "EVENTS", !0), M(_s, "Component", Cw);
var Cn, no, Ce, Nl, Qp, Pl, tm;
const iu = class extends le {
  constructor() {
    super(...arguments);
    T(this, Nl);
    T(this, Pl);
    T(this, Cn, void 0);
    T(this, no, a0(6));
    T(this, Ce, void 0);
  }
  get id() {
    return y(this, no);
  }
  get isShown() {
    var n;
    return !!((n = y(this, Ce)) != null && n.isShown);
  }
  show(n) {
    this.setOptions(n), W(this, Nl, Qp).call(this).show();
  }
  hide() {
    var n;
    (n = y(this, Ce)) == null || n.hide();
  }
  static show(n) {
    typeof n == "string" && (n = { content: n });
    const { container: o, ...s } = n, r = new iu(o || "body", s);
    return r.show(), r;
  }
};
let Vi = iu;
Cn = new WeakMap(), no = new WeakMap(), Ce = new WeakMap(), Nl = new WeakSet(), Qp = function() {
  if (y(this, Ce))
    y(this, Ce).setOptions(this.options);
  else {
    const n = W(this, Pl, tm).call(this), o = new _s(n, this.options);
    o.on("hidden", () => {
      o.destroy(), n.remove(), H(this, Cn, void 0);
    }), H(this, Ce, o);
  }
  return y(this, Ce);
}, Pl = new WeakSet(), tm = function() {
  if (y(this, Cn))
    return y(this, Cn);
  const { placement: n = "top" } = this.options;
  let o = this.element.querySelector(`.messagers-${n}`);
  o || (o = document.createElement("div"), o.className = `messagers messagers-${n}`, this.element.appendChild(o));
  let s = o.querySelector(`#messager-${y(this, no)}`);
  return s || (s = document.createElement("div"), s.className = "messager-holder", s.id = `messager-${y(this, no)}`, o.appendChild(s), H(this, Cn, s)), s;
}, M(Vi, "NAME", "messager"), M(Vi, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
var em, gt, nm, tr, lf, om = {}, rm = [], Ew = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function im(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function wa(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++nm };
  return s == null && gt.vnode != null && gt.vnode(r), r;
}
function x_(t) {
  return t.children;
}
function er(t, e) {
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
function sm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return sm(t);
  }
}
function cf(t) {
  (!t.__d && (t.__d = !0) && tr.push(t) && !Is.__r++ || lf !== gt.debounceRendering) && ((lf = gt.debounceRendering) || setTimeout)(Is);
}
function Is() {
  for (var t; Is.__r = tr.length; )
    t = tr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), tr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Qe({}, r)).__v = r.__v + 1, _m(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Wr(r), r.__h), Aw(o, r), r.__e != l && sm(r)));
    });
}
function lm(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || rm, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? wa(null, a, null, null, a) : Array.isArray(a) ? wa(x_, { children: a }, null, null, null) : a.__b > 0 ? wa(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      _m(t, a, u = u || om, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = cm(a, _, t) : _ = am(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Wr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && fm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      um(p[i], p[++i], p[++i]);
}
function cm(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? cm(o, e, n) : am(n, o, o, s, o.__e, e));
  return e;
}
function am(t, e, n, o, s, r) {
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
function Tw(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Fs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Fs(t, r, e[r], n[r], o);
}
function af(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ew.test(e) ? n : n + "px";
}
function Fs(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || af(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || af(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? uf : _f, r) : t.removeEventListener(e, r ? uf : _f, r);
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
function _f(t) {
  this.l[t.type + !1](gt.event ? gt.event(t) : t);
}
function uf(t) {
  this.l[t.type + !0](gt.event ? gt.event(t) : t);
}
function _m(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = gt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new er(p, g), i.constructor = b, i.render = Mw), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Qe({}, i.__s)), Qe(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Qe(Qe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === x_ && h.key == null ? h.props.children : h, lm(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Lw(n.__e, e, n, o, s, r, l, _);
    (h = gt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), gt.__e(k, e, n);
  }
}
function Aw(t, e) {
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
function Lw(t, e, n, o, s, r, l, c) {
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
    if (r = r && em.call(t.childNodes), h = (d = n.props || om).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Tw(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, lm(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Wr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && im(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Fs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Fs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function um(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    gt.__e(o, n);
  }
}
function fm(t, e, n) {
  var o, s;
  if (gt.unmount && gt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || um(o, null, e)), (o = t.__c) != null) {
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
      o[s] && fm(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || im(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Mw(t, e, n) {
  return this.constructor(t, n);
}
em = rm.slice, gt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, nm = 0, er.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qe({}, this.state), typeof t == "function" && (t = t(Qe({}, n), this.props)), t && Qe(n, t), t != null && this.__v && (e && this._sb.push(e), cf(this));
}, er.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), cf(this));
}, er.prototype.render = x_, tr = [], Is.__r = 0;
var Rw = 0;
function Yi(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Rw, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return gt.vnode && gt.vnode(_), _;
}
var es;
let Dw = (es = class extends er {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: o, circleBgColor: s, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ Yi("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ Yi("circle", { cx: c, cy: c, r: l, stroke: s, "stroke-width": o }),
      /* @__PURE__ */ Yi("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - e) / 100, "stroke-width": o }),
      /* @__PURE__ */ Yi("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(e) })
    ] });
  }
}, M(es, "NAME", "zui.progress-circle"), M(es, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), es);
class ff extends Mt {
}
M(ff, "NAME", "table-sorter"), M(ff, "Component", Dw);
var S_, yt, hm, nr, hf, dm = {}, pm = [], Nw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function tn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function mm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Pw(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? S_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return fs(t, l, o, s, null);
}
function fs(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++hm };
  return s == null && yt.vnode != null && yt.vnode(r), r;
}
function C_(t) {
  return t.children;
}
function or(t, e) {
  this.props = t, this.context = e;
}
function Ur(t, e) {
  if (e == null)
    return t.__ ? Ur(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Ur(t) : null;
}
function gm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return gm(t);
  }
}
function df(t) {
  (!t.__d && (t.__d = !0) && nr.push(t) && !Bs.__r++ || hf !== yt.debounceRendering) && ((hf = yt.debounceRendering) || setTimeout)(Bs);
}
function Bs() {
  for (var t; Bs.__r = nr.length; )
    t = nr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), nr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = tn({}, r)).__v = r.__v + 1, wm(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ur(r), r.__h), Hw(o, r), r.__e != l && gm(r)));
    });
}
function ym(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || pm, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? fs(null, a, null, null, a) : Array.isArray(a) ? fs(C_, { children: a }, null, null, null) : a.__b > 0 ? fs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      wm(t, a, u = u || dm, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = vm(a, _, t) : _ = bm(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Ur(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && km(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      $m(p[i], p[++i], p[++i]);
}
function vm(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? vm(o, e, n) : bm(n, o, o, s, o.__e, e));
  return e;
}
function bm(t, e, n, o, s, r) {
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
function Ow(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || js(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || js(t, r, e[r], n[r], o);
}
function pf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Nw.test(e) ? n : n + "px";
}
function js(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || pf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || pf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? gf : mf, r) : t.removeEventListener(e, r ? gf : mf, r);
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
function mf(t) {
  this.l[t.type + !1](yt.event ? yt.event(t) : t);
}
function gf(t) {
  this.l[t.type + !0](yt.event ? yt.event(t) : t);
}
function wm(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = yt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new or(p, g), i.constructor = b, i.render = Uw), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = tn({}, i.__s)), tn(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = tn(tn({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === C_ && h.key == null ? h.props.children : h, ym(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ww(n.__e, e, n, o, s, r, l, _);
    (h = yt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), yt.__e(k, e, n);
  }
}
function Hw(t, e) {
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
function Ww(t, e, n, o, s, r, l, c) {
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
    if (r = r && S_.call(t.childNodes), h = (d = n.props || dm).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Ow(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, ym(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ur(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && mm(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && js(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && js(t, "checked", f, d.checked, !1));
  }
  return t;
}
function $m(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    yt.__e(o, n);
  }
}
function km(t, e, n) {
  var o, s;
  if (yt.unmount && yt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || $m(o, null, e)), (o = t.__c) != null) {
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
      o[s] && km(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || mm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Uw(t, e, n) {
  return this.constructor(t, n);
}
S_ = pm.slice, yt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, hm = 0, or.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tn({}, this.state), typeof t == "function" && (t = t(tn({}, n), this.props)), t && tn(n, t), t != null && this.__v && (e && this._sb.push(e), df(this));
}, or.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), df(this));
}, or.prototype.render = C_, nr = [], Bs.__r = 0;
var Iw = 0;
function qi(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Iw, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return yt.vnode && yt.vnode(_), _;
}
let Fw = class extends or {
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
    } = this.props, u = this.state.checked ? 1 : 0, a = n || "div", f = typeof l == "string" ? /* @__PURE__ */ qi("i", { class: `icon ${l}` }) : l, v = typeof c == "string" ? /* @__PURE__ */ qi("i", { class: `icon ${c}` }) : c, p = [
      /* @__PURE__ */ qi("input", { onChange: i, type: "checkbox", value: u, checked: !!this.state.checked }),
      /* @__PURE__ */ qi("label", { children: [
        f,
        r,
        v
      ] })
    ];
    return Pw(
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
class yf extends Mt {
}
M(yf, "NAME", "switch"), M(yf, "Component", Fw);
const Le = document, zs = window, xm = Le.documentElement, Un = Le.createElement.bind(Le), Sm = Un("div"), $a = Un("table"), Bw = Un("tbody"), vf = Un("tr"), { isArray: Jc, prototype: Cm } = Array, { concat: jw, filter: E_, indexOf: Em, map: Tm, push: zw, slice: Am, some: T_, splice: Vw } = Cm, Yw = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, qw = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Gw = /<.+>/, Xw = /^\w+$/;
function A_(t, e) {
  const n = Jw(e);
  return !t || !n && !So(e) && !Tt(e) ? [] : !n && qw.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Xw.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Kc {
  constructor(e, n) {
    if (!e)
      return;
    if (Ba(e))
      return e;
    let o = e;
    if (Ot(e)) {
      const s = (Ba(n) ? n[0] : n) || Le;
      if (o = Yw.test(e) && "getElementById" in s ? s.getElementById(e.slice(1).replace(/\\/g, "")) : Gw.test(e) ? Rm(e) : A_(e, s), !o)
        return;
    } else if (In(e))
      return this.ready(e);
    (o.nodeType || o === zs) && (o = [o]), this.length = o.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = o[s];
  }
  init(e, n) {
    return new Kc(e, n);
  }
}
const U = Kc.prototype, Y = U.init;
Y.fn = Y.prototype = U;
U.length = 0;
U.splice = Vw;
typeof Symbol == "function" && (U[Symbol.iterator] = Cm[Symbol.iterator]);
function Ba(t) {
  return t instanceof Kc;
}
function xo(t) {
  return !!t && t === t.window;
}
function So(t) {
  return !!t && t.nodeType === 9;
}
function Jw(t) {
  return !!t && t.nodeType === 11;
}
function Tt(t) {
  return !!t && t.nodeType === 1;
}
function Kw(t) {
  return !!t && t.nodeType === 3;
}
function Zw(t) {
  return typeof t == "boolean";
}
function In(t) {
  return typeof t == "function";
}
function Ot(t) {
  return typeof t == "string";
}
function Bt(t) {
  return t === void 0;
}
function Ir(t) {
  return t === null;
}
function Lm(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function L_(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
Y.isWindow = xo;
Y.isFunction = In;
Y.isArray = Jc;
Y.isNumeric = Lm;
Y.isPlainObject = L_;
function Lt(t, e, n) {
  if (n) {
    let o = t.length;
    for (; o--; )
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  } else if (L_(t)) {
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
Y.each = Lt;
U.each = function(t) {
  return Lt(this, t);
};
U.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function Vs(...t) {
  const e = Zw(t[0]) ? t.shift() : !1, n = t.shift(), o = t.length;
  if (!n)
    return {};
  if (!o)
    return Vs(e, Y, n);
  for (let s = 0; s < o; s++) {
    const r = t[s];
    for (const l in r)
      e && (Jc(r[l]) || L_(r[l])) ? ((!n[l] || n[l].constructor !== r[l].constructor) && (n[l] = new r[l].constructor()), Vs(e, n[l], r[l])) : n[l] = r[l];
  }
  return n;
}
Y.extend = Vs;
U.extend = function(t) {
  return Vs(U, t);
};
const Qw = /\S+/g;
function Zc(t) {
  return Ot(t) ? t.match(Qw) || [] : [];
}
U.toggleClass = function(t, e) {
  const n = Zc(t), o = !Bt(e);
  return this.each((s, r) => {
    Tt(r) && Lt(n, (l, c) => {
      o ? e ? r.classList.add(c) : r.classList.remove(c) : r.classList.toggle(c);
    });
  });
};
U.addClass = function(t) {
  return this.toggleClass(t, !0);
};
U.removeAttr = function(t) {
  const e = Zc(t);
  return this.each((n, o) => {
    Tt(o) && Lt(e, (s, r) => {
      o.removeAttribute(r);
    });
  });
};
function t$(t, e) {
  if (t) {
    if (Ot(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !Tt(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return Ir(n) ? void 0 : n;
      }
      return Bt(e) ? this : Ir(e) ? this.removeAttr(t) : this.each((n, o) => {
        Tt(o) && o.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
U.attr = t$;
U.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
U.hasClass = function(t) {
  return !!t && T_.call(this, (e) => Tt(e) && e.classList.contains(t));
};
U.get = function(t) {
  return Bt(t) ? Am.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function e$(t) {
  return Bt(t) ? this.get().map((e) => Tt(e) || Kw(e) ? e.textContent : "").join("") : this.each((e, n) => {
    Tt(n) && (n.textContent = t);
  });
}
U.text = e$;
function Me(t, e, n) {
  if (!Tt(t))
    return;
  const o = zs.getComputedStyle(t, null);
  return n ? o.getPropertyValue(e) || void 0 : o[e] || t.style[e];
}
function he(t, e) {
  return parseInt(Me(t, e), 10) || 0;
}
function bf(t, e) {
  return he(t, `border${e ? "Left" : "Top"}Width`) + he(t, `padding${e ? "Left" : "Top"}`) + he(t, `padding${e ? "Right" : "Bottom"}`) + he(t, `border${e ? "Right" : "Bottom"}Width`);
}
const ka = {};
function n$(t) {
  if (ka[t])
    return ka[t];
  const e = Un(t);
  Le.body.insertBefore(e, null);
  const n = Me(e, "display");
  return Le.body.removeChild(e), ka[t] = n !== "none" ? n : "block";
}
function wf(t) {
  return Me(t, "display") === "none";
}
function Mm(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function Qc(t) {
  return Ot(t) ? (e, n) => Mm(n, t) : In(t) ? t : Ba(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
U.filter = function(t) {
  const e = Qc(t);
  return Y(E_.call(this, (n, o) => e.call(n, o, n)));
};
function gn(t, e) {
  return e ? t.filter(e) : t;
}
U.detach = function(t) {
  return gn(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const o$ = /^\s*<(\w+)[^>]*>/, r$ = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, $f = {
  "*": Sm,
  tr: Bw,
  td: vf,
  th: vf,
  thead: $a,
  tbody: $a,
  tfoot: $a
};
function Rm(t) {
  if (!Ot(t))
    return [];
  if (r$.test(t))
    return [Un(RegExp.$1)];
  const e = o$.test(t) && RegExp.$1, n = $f[e] || $f["*"];
  return n.innerHTML = t, Y(n.childNodes).detach().get();
}
Y.parseHTML = Rm;
U.has = function(t) {
  const e = Ot(t) ? (n, o) => A_(t, o).length : (n, o) => o.contains(t);
  return this.filter(e);
};
U.not = function(t) {
  const e = Qc(t);
  return this.filter((n, o) => (!Ot(t) || Tt(o)) && !e.call(o, n, o));
};
function Pe(t, e, n, o) {
  const s = [], r = In(e), l = o && Qc(o);
  for (let c = 0, _ = t.length; c < _; c++)
    if (r) {
      const h = e(t[c]);
      h.length && zw.apply(s, h);
    } else {
      let h = t[c][e];
      for (; h != null && !(o && l(-1, h)); )
        s.push(h), h = n ? h[e] : null;
    }
  return s;
}
function Dm(t) {
  return t.multiple && t.options ? Pe(E_.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function i$(t) {
  return arguments.length ? this.each((e, n) => {
    const o = n.multiple && n.options;
    if (o || Fm.test(n.type)) {
      const s = Jc(t) ? Tm.call(t, String) : Ir(t) ? [] : [String(t)];
      o ? Lt(n.options, (r, l) => {
        l.selected = s.indexOf(l.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = Bt(t) || Ir(t) ? "" : t;
  }) : this[0] && Dm(this[0]);
}
U.val = i$;
U.is = function(t) {
  const e = Qc(t);
  return T_.call(this, (n, o) => e.call(n, o, n));
};
Y.guid = 1;
function ve(t) {
  return t.length > 1 ? E_.call(t, (e, n, o) => Em.call(o, e) === n) : t;
}
Y.unique = ve;
U.add = function(t, e) {
  return Y(ve(this.get().concat(Y(t, e).get())));
};
U.children = function(t) {
  return gn(Y(ve(Pe(this, (e) => e.children))), t);
};
U.parent = function(t) {
  return gn(Y(ve(Pe(this, "parentNode"))), t);
};
U.index = function(t) {
  const e = t ? Y(t)[0] : this[0], n = t ? this : Y(e).parent().children();
  return Em.call(n, e);
};
U.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
U.siblings = function(t) {
  return gn(Y(ve(Pe(this, (e) => Y(e).parent().children().not(e)))), t);
};
U.find = function(t) {
  return Y(ve(Pe(this, (e) => A_(t, e))));
};
const s$ = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, l$ = /^$|^module$|\/(java|ecma)script/i, c$ = ["type", "src", "nonce", "noModule"];
function a$(t, e) {
  const n = Y(t);
  n.filter("script").add(n.find("script")).each((o, s) => {
    if (l$.test(s.type) && xm.contains(s)) {
      const r = Un("script");
      r.text = s.textContent.replace(s$, ""), Lt(c$, (l, c) => {
        s[c] && (r[c] = s[c]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function _$(t, e, n, o, s) {
  o ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && a$(e, t.ownerDocument);
}
function yn(t, e, n, o, s, r, l, c) {
  return Lt(t, (_, h) => {
    Lt(Y(h), (i, d) => {
      Lt(Y(e), (u, a) => {
        const f = n ? d : a, v = n ? a : d, p = n ? i : u;
        _$(f, p ? v.cloneNode(!0) : v, o, s, !p);
      }, c);
    }, l);
  }, r), e;
}
U.after = function() {
  return yn(arguments, this, !1, !1, !1, !0, !0);
};
U.append = function() {
  return yn(arguments, this, !1, !1, !0);
};
function u$(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (Bt(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, o) => {
    Tt(o) && (e ? Y(o).empty().append(t) : o.innerHTML = t);
  });
}
U.html = u$;
U.appendTo = function(t) {
  return yn(arguments, this, !0, !1, !0);
};
U.wrapInner = function(t) {
  return this.each((e, n) => {
    const o = Y(n), s = o.contents();
    s.length ? s.wrapAll(t) : o.append(t);
  });
};
U.before = function() {
  return yn(arguments, this, !1, !0);
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
  return yn(arguments, this, !0, !1, !1, !1, !1, !0);
};
U.insertBefore = function(t) {
  return yn(arguments, this, !0, !0);
};
U.prepend = function() {
  return yn(arguments, this, !1, !0, !0, !0, !0);
};
U.prependTo = function(t) {
  return yn(arguments, this, !0, !0, !0, !1, !1, !0);
};
U.contents = function() {
  return Y(ve(Pe(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
U.next = function(t, e, n) {
  return gn(Y(ve(Pe(this, "nextElementSibling", e, n))), t);
};
U.nextAll = function(t) {
  return this.next(t, !0);
};
U.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
U.parents = function(t, e) {
  return gn(Y(ve(Pe(this, "parentElement", !0, e))), t);
};
U.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
U.prev = function(t, e, n) {
  return gn(Y(ve(Pe(this, "previousElementSibling", e, n))), t);
};
U.prevAll = function(t) {
  return this.prev(t, !0);
};
U.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
U.map = function(t) {
  return Y(jw.apply([], Tm.call(this, (e, n) => t.call(e, n, e))));
};
U.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
U.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && Me(n, "position") === "static"; )
      n = n.offsetParent;
    return n || xm;
  });
};
U.slice = function(t, e) {
  return Y(Am.call(this, t, e));
};
const f$ = /-([a-z])/g;
function M_(t) {
  return t.replace(f$, (e, n) => n.toUpperCase());
}
U.ready = function(t) {
  const e = () => setTimeout(t, 0, Y);
  return Le.readyState !== "loading" ? e() : Le.addEventListener("DOMContentLoaded", e), this;
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
    top: e.top + zs.pageYOffset,
    left: e.left + zs.pageXOffset
  };
};
U.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = Me(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const o = t.ownerDocument;
    let s = t.offsetParent || o.documentElement;
    for (; (s === o.body || s === o.documentElement) && Me(s, "position") === "static"; )
      s = s.parentNode;
    if (s !== t && Tt(s)) {
      const r = Y(s).offset();
      n.top -= r.top + he(s, "borderTopWidth"), n.left -= r.left + he(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - he(t, "marginTop"),
    left: n.left - he(t, "marginLeft")
  };
};
const Nm = {
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
    if (Ot(t))
      return t = Nm[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, o) => {
        o[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
U.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[Nm[t] || t];
  });
};
const h$ = /^--/;
function R_(t) {
  return h$.test(t);
}
const xa = {}, { style: d$ } = Sm, p$ = ["webkit", "moz", "ms"];
function m$(t, e = R_(t)) {
  if (e)
    return t;
  if (!xa[t]) {
    const n = M_(t), o = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${p$.join(`${o} `)}${o}`.split(" ");
    Lt(s, (r, l) => {
      if (l in d$)
        return xa[t] = l, !1;
    });
  }
  return xa[t];
}
const g$ = {
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
function Pm(t, e, n = R_(t)) {
  return !n && !g$[t] && Lm(e) ? `${e}px` : e;
}
function y$(t, e) {
  if (Ot(t)) {
    const n = R_(t);
    return t = m$(t, n), arguments.length < 2 ? this[0] && Me(this[0], t, n) : t ? (e = Pm(t, e, n), this.each((o, s) => {
      Tt(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
U.css = y$;
function Om(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const v$ = /^\s+|\s+$/;
function kf(t, e) {
  const n = t.dataset[e] || t.dataset[M_(e)];
  return v$.test(n) ? n : Om(JSON.parse, n);
}
function b$(t, e, n) {
  n = Om(JSON.stringify, n), t.dataset[M_(e)] = n;
}
function w$(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const o in this[0].dataset)
      n[o] = kf(this[0], o);
    return n;
  }
  if (Ot(t))
    return arguments.length < 2 ? this[0] && kf(this[0], t) : Bt(e) ? this : this.each((n, o) => {
      b$(o, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
U.data = w$;
function Hm(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
Lt([!0, !1], (t, e) => {
  Lt(["Width", "Height"], (n, o) => {
    const s = `${e ? "outer" : "inner"}${o}`;
    U[s] = function(r) {
      if (this[0])
        return xo(this[0]) ? e ? this[0][`inner${o}`] : this[0].document.documentElement[`client${o}`] : So(this[0]) ? Hm(this[0], o) : this[0][`${e ? "offset" : "client"}${o}`] + (r && e ? he(this[0], `margin${n ? "Top" : "Left"}`) + he(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Lt(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  U[n] = function(o) {
    if (!this[0])
      return Bt(o) ? void 0 : this;
    if (!arguments.length)
      return xo(this[0]) ? this[0].document.documentElement[`client${e}`] : So(this[0]) ? Hm(this[0], e) : this[0].getBoundingClientRect()[n] - bf(this[0], !t);
    const s = parseInt(o, 10);
    return this.each((r, l) => {
      if (!Tt(l))
        return;
      const c = Me(l, "boxSizing");
      l.style[n] = Pm(n, s + (c === "border-box" ? bf(l, !t) : 0));
    });
  };
});
const xf = "___cd";
U.toggle = function(t) {
  return this.each((e, n) => {
    if (!Tt(n))
      return;
    (Bt(t) ? wf(n) : t) ? (n.style.display = n[xf] || "", wf(n) && (n.style.display = n$(n.tagName))) : (n[xf] = Me(n, "display"), n.style.display = "none");
  });
};
U.hide = function() {
  return this.toggle(!1);
};
U.show = function() {
  return this.toggle(!0);
};
const Sf = "___ce", D_ = ".", N_ = { focus: "focusin", blur: "focusout" }, Wm = { mouseenter: "mouseover", mouseleave: "mouseout" }, $$ = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function P_(t) {
  return Wm[t] || N_[t] || t;
}
function O_(t) {
  const e = t.split(D_);
  return [e[0], e.slice(1).sort()];
}
U.trigger = function(t, e) {
  if (Ot(t)) {
    const [o, s] = O_(t), r = P_(o);
    if (!r)
      return this;
    const l = $$.test(r) ? "MouseEvents" : "HTMLEvents";
    t = Le.createEvent(l), t.initEvent(r, !0, !0), t.namespace = s.join(D_), t.___ot = o;
  }
  t.___td = e;
  const n = t.___ot in N_;
  return this.each((o, s) => {
    n && In(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function Um(t) {
  return t[Sf] = t[Sf] || {};
}
function k$(t, e, n, o, s) {
  const r = Um(t);
  r[e] = r[e] || [], r[e].push([n, o, s]), t.addEventListener(e, s);
}
function Im(t, e) {
  return !e || !T_.call(e, (n) => t.indexOf(n) < 0);
}
function Ys(t, e, n, o, s) {
  const r = Um(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([l, c, _]) => {
      if (s && _.guid !== s.guid || !Im(l, n) || o && o !== c)
        return !0;
      t.removeEventListener(e, _);
    }));
  else
    for (e in r)
      Ys(t, e, n, o, s);
}
U.off = function(t, e, n) {
  if (Bt(t))
    this.each((o, s) => {
      !Tt(s) && !So(s) && !xo(s) || Ys(s);
    });
  else if (Ot(t))
    In(e) && (n = e, e = ""), Lt(Zc(t), (o, s) => {
      const [r, l] = O_(s), c = P_(r);
      this.each((_, h) => {
        !Tt(h) && !So(h) && !xo(h) || Ys(h, c, l, e, n);
      });
    });
  else
    for (const o in t)
      this.off(o, t[o]);
  return this;
};
U.remove = function(t) {
  return gn(this, t).detach().off(), this;
};
U.replaceWith = function(t) {
  return this.before(t).remove();
};
U.replaceAll = function(t) {
  return Y(t).replaceWith(this), this;
};
function x$(t, e, n, o, s) {
  if (!Ot(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return Ot(e) || (Bt(e) || Ir(e) ? e = "" : Bt(n) ? (n = e, e = "") : (o = n, n = e, e = "")), In(o) || (o = n, n = void 0), o ? (Lt(Zc(t), (r, l) => {
    const [c, _] = O_(l), h = P_(c), i = c in Wm, d = c in N_;
    h && this.each((u, a) => {
      if (!Tt(a) && !So(a) && !xo(a))
        return;
      const f = function(v) {
        if (v.target[`___i${v.type}`])
          return v.stopImmediatePropagation();
        if (v.namespace && !Im(_, v.namespace.split(D_)) || !e && (d && (v.target !== a || v.___ot === h) || i && v.relatedTarget && a.contains(v.relatedTarget)))
          return;
        let p = a;
        if (e) {
          let g = v.target;
          for (; !Mm(g, e); )
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
        s && Ys(a, h, _, e, f), m === !1 && (v.preventDefault(), v.stopPropagation());
      };
      f.guid = o.guid = o.guid || Y.guid++, k$(a, h, _, e, f);
    });
  }), this) : this;
}
U.on = x$;
function S$(t, e, n, o) {
  return this.on(t, e, n, o, !0);
}
U.one = S$;
const C$ = /\r?\n/g;
function E$(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(C$, `\r
`))}`;
}
const T$ = /file|reset|submit|button|image/i, Fm = /radio|checkbox/i;
U.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    Lt(n.elements || [n], (o, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || T$.test(s.type) || Fm.test(s.type) && !s.checked)
        return;
      const r = Dm(s);
      if (!Bt(r)) {
        const l = Jc(r) ? r : [r];
        Lt(l, (c, _) => {
          t += E$(s.name, _);
        });
      }
    });
  }), t.slice(1);
};
window.$ = Y;
const A$ = Y, Z = A$, H_ = window.document;
let Gi, Oe;
const L$ = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, M$ = /^(?:text|application)\/javascript/i, R$ = /^(?:text|application)\/xml/i, Bm = "application/json", jm = "text/html", D$ = /^\s*$/, ja = H_.createElement("a");
ja.href = window.location.href;
function N$(t, e, n) {
  const o = new CustomEvent(e, { detail: n });
  return Z(t).trigger(o, n), !o.defaultPrevented;
}
function Pn(t, e, n, o) {
  if (t.global)
    return N$(e || H_, n, o);
}
Z.active = 0;
function P$(t) {
  t.global && Z.active++ === 0 && Pn(t, null, "ajaxStart");
}
function O$(t) {
  t.global && !--Z.active && Pn(t, null, "ajaxStop");
}
function H$(t, e) {
  const n = e.context;
  if (e.beforeSend.call(n, t, e) === !1 || Pn(e, n, "ajaxBeforeSend", [t, e]) === !1)
    return !1;
  Pn(e, n, "ajaxSend", [t, e]);
}
function W$(t, e, n) {
  const o = n.context, s = "success";
  n.success.call(o, t, s, e), Pn(n, o, "ajaxSuccess", [e, n, t]), zm(s, e, n);
}
function Xi(t, e, n, o) {
  const s = o.context;
  o.error.call(s, n, e, t), Pn(o, s, "ajaxError", [n, o, t || e]), zm(e, n, o);
}
function zm(t, e, n) {
  const o = n.context;
  n.complete.call(o, e, t), Pn(n, o, "ajaxComplete", [e, n]), O$(n);
}
function U$(t, e, n) {
  if (n.dataFilter == We)
    return t;
  const o = n.context;
  return n.dataFilter.call(o, t, e);
}
function We() {
}
Z.ajaxSettings = {
  // Default type of request
  type: "GET",
  // Callback that is executed before request
  beforeSend: We,
  // Callback that is executed if the request succeeds
  success: We,
  // Callback that is executed the the server drops error
  error: We,
  // Callback that is executed on request complete (both: error and success)
  complete: We,
  // The context for the callbacks
  context: null,
  // Whether to trigger "global" Ajax events
  global: !0,
  // Transport
  xhr: function() {
    return new window.XMLHttpRequest();
  },
  // MIME types mapping
  // IIS returns Javascript as "application/x-javascript"
  accepts: {
    script: "text/javascript, application/javascript, application/x-javascript",
    json: Bm,
    xml: "application/xml, text/xml",
    html: jm,
    text: "text/plain"
  },
  // Whether the request is to another domain
  crossDomain: !1,
  // Default timeout
  timeout: 0,
  // Whether data should be serialized to string
  processData: !0,
  // Whether the browser should be allowed to cache GET responses
  cache: !0,
  //Used to handle the raw response data of XMLHttpRequest.
  //This is a pre-filtering function to sanitize the response.
  //The sanitized response should be returned
  dataFilter: We
};
function I$(t) {
  return t && (t = t.split(";", 2)[0]), t && (t == jm ? "html" : t == Bm ? "json" : M$.test(t) ? "script" : R$.test(t) && "xml") || "text";
}
function Vm(t, e) {
  return e == "" ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
}
function F$(t) {
  t.processData && t.data && typeof t.data != "string" && (t.data = Z.param(t.data, t.traditional)), t.data && (!t.type || t.type.toUpperCase() == "GET" || t.dataType == "jsonp") && (t.url = Vm(t.url, t.data), t.data = void 0);
}
Z.ajax = function(t) {
  var f;
  const e = Z.extend({}, t || {});
  let n, o;
  for (Gi in Z.ajaxSettings)
    e[Gi] === void 0 && (e[Gi] = Z.ajaxSettings[Gi]);
  P$(e), e.crossDomain || (n = H_.createElement("a"), n.href = e.url, n.href = n.href, e.crossDomain = ja.protocol + "//" + ja.host != n.protocol + "//" + n.host), e.url || (e.url = window.location.toString()), (o = e.url.indexOf("#")) > -1 && (e.url = e.url.slice(0, o)), F$(e);
  let s = e.dataType;
  /\?.+=\?/.test(e.url) && (s = "jsonp"), (e.cache === !1 || (!t || t.cache !== !0) && (s == "script" || s == "jsonp")) && (e.url = Vm(e.url, "_=" + Date.now()));
  let l = e.accepts[s];
  const c = {}, _ = function(v, p) {
    c[v.toLowerCase()] = [v, p];
  }, h = /^([\w-]+:)\/\//.test(e.url) ? RegExp.$1 : window.location.protocol, i = e.xhr(), d = i.setRequestHeader;
  let u;
  if (e.crossDomain || _("X-Requested-With", "XMLHttpRequest"), _("Accept", l || "*/*"), l = e.mimeType, l && (l.indexOf(",") > -1 && (l = l.split(",", 2)[0]), (f = i.overrideMimeType) == null || f.call(i, l)), (e.contentType || e.contentType !== !1 && e.data && e.type.toUpperCase() != "GET") && _("Content-Type", e.contentType || "application/x-www-form-urlencoded"), e.headers)
    for (Oe in e.headers)
      _(Oe, e.headers[Oe]);
  if (i.setRequestHeader = _, i.onreadystatechange = function() {
    if (i.readyState == 4) {
      i.onreadystatechange = We, clearTimeout(u);
      let v, p = !1;
      if (i.status >= 200 && i.status < 300 || i.status == 304 || i.status == 0 && h == "file:") {
        if (s = s || I$(e.mimeType || i.getResponseHeader("content-type")), i.responseType == "arraybuffer" || i.responseType == "blob")
          v = i.response;
        else {
          v = i.responseText;
          try {
            v = U$(v, s, e), s == "xml" ? v = i.responseXML : s == "json" && (v = D$.test(v) ? null : JSON.parse(v));
          } catch (m) {
            p = m;
          }
          if (p)
            return Xi(p, "parsererror", i, e);
        }
        W$(v, i, e);
      } else
        Xi(i.statusText || null, i.status ? "error" : "abort", i, e);
    }
  }, H$(i, e) === !1)
    return i.abort(), Xi(null, "abort", i, e), i;
  const a = "async" in e ? e.async : !0;
  if (i.open(e.type, e.url, a, e.username, e.password), e.xhrFields)
    for (Oe in e.xhrFields)
      i[Oe] = e.xhrFields[Oe];
  for (Oe in c)
    d.apply(i, c[Oe]);
  return e.timeout > 0 && (u = setTimeout(function() {
    i.onreadystatechange = We, i.abort(), Xi(null, "timeout", i, e);
  }, e.timeout)), i.send(e.data ? e.data : null), i;
};
function ta(t, e, n, o) {
  return Z.isFunction(e) && (o = n, n = e, e = void 0), Z.isFunction(n) || (o = n, n = void 0), {
    url: t,
    data: e,
    success: n,
    dataType: o
  };
}
Z.get = function(t, e, n, o) {
  return Z.ajax(ta(t, e, n, o));
};
Z.post = function(t, e, n, o) {
  const s = ta(t, e, n, o);
  return Z.ajax(Object.assign(s, { type: "POST" }));
};
Z.getJSON = function(t, e, n, o) {
  const s = ta(t, e, n, o);
  return s.dataType = "json", Z.ajax(s);
};
Z.fn.load = function(t, e, n) {
  if (!this.length)
    return this;
  const o = t.split(/\s/);
  let s;
  const r = ta(t, e, n), l = r.success;
  return o.length > 1 && (r.url = o[0], s = o[1]), r.success = (c, ..._) => {
    this.html(s ? Z("<div>").html(c.replace(L$, "")).find(s) : c), l == null || l.call(this, c, ..._);
  }, Z.ajax(r), this;
};
const Cf = encodeURIComponent;
function Ym(t, e, n, o) {
  const s = Z.isArray(e), r = Z.isPlainObject(e);
  Z.each(e, function(l, c) {
    const _ = Array.isArray(c) ? "array" : typeof c;
    o && (l = n ? o : o + "[" + (r || _ == "object" || _ == "array" ? l : "") + "]"), !o && s ? t.add(c.name, c.value) : _ == "array" || !n && _ == "object" ? Ym(t, c, n, l) : t.add(l, c);
  });
}
Z.param = function(t, e) {
  const n = [];
  return n.add = function(o, s) {
    Z.isFunction(s) && (s = s()), s == null && (s = ""), this.push(Cf(o) + "=" + Cf(s));
  }, Ym(n, t, e), n.join("&").replace(/%20/g, "+");
};
const oE = Object.assign(Z.ajax, {
  get: Z.get,
  post: Z.post,
  getJSON: Z.getJSON,
  param: Z.param,
  ajaxSettings: Z.ajaxSettings
});
function B$(t) {
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
function j$(t, e) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const l = o.top <= s && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const rE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: F,
  getClassList: zc,
  isElementVisible: j$,
  selectText: B$
}, Symbol.toStringTag, { value: "Module" }));
/*! js-cookie v3.0.1 | MIT */
function Ji(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var o in n)
      t[o] = n[o];
  }
  return t;
}
var z$ = {
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
function za(t, e) {
  function n(s, r, l) {
    if (!(typeof document > "u")) {
      l = Ji({}, e, l), typeof l.expires == "number" && (l.expires = new Date(Date.now() + l.expires * 864e5)), l.expires && (l.expires = l.expires.toUTCString()), s = encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
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
          Ji({}, r, {
            expires: -1
          })
        );
      },
      withAttributes: function(s) {
        return za(this.converter, Ji({}, this.attributes, s));
      },
      withConverter: function(s) {
        return za(Ji({}, this.converter, s), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(e) },
      converter: { value: Object.freeze(t) }
    }
  );
}
var V$ = za(z$, { path: "/" });
window.$ && Object.assign(window.$, { cookie: V$ });
var qm = function(t, e, n, o) {
  var s;
  e[0] = 0;
  for (var r = 1; r < e.length; r++) {
    var l = e[r++], c = e[r] ? (e[0] |= l ? 1 : 2, n[e[r++]]) : e[++r];
    l === 3 ? o[0] = c : l === 4 ? o[1] = Object.assign(o[1] || {}, c) : l === 5 ? (o[1] = o[1] || {})[e[++r]] = c : l === 6 ? o[1][e[++r]] += c + "" : l ? (s = t.apply(c, qm(t, c, n, ["", null])), o.push(s), c[0] ? e[0] |= 2 : (e[r - 2] = 0, e[r] = s)) : o.push(c);
  }
  return o;
}, Ef = /* @__PURE__ */ new Map();
function Gm(t) {
  var e = Ef.get(this);
  return e || (e = /* @__PURE__ */ new Map(), Ef.set(this, e)), (e = qm(this, e.get(t) || (e.set(t, e = function(n) {
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
var Hi, ut, Xm, Jm, rr, Tf, Km, qs = {}, Zm = [], Y$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Te(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Qm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Gs(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Hi.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ir(t, l, o, s, null);
}
function ir(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Xm };
  return s == null && ut.vnode != null && ut.vnode(r), r;
}
function q$() {
  return { current: null };
}
function Wi(t) {
  return t.children;
}
function sr(t, e) {
  this.props = t, this.context = e;
}
function Fr(t, e) {
  if (e == null)
    return t.__ ? Fr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Fr(t) : null;
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
function Va(t) {
  (!t.__d && (t.__d = !0) && rr.push(t) && !Xs.__r++ || Tf !== ut.debounceRendering) && ((Tf = ut.debounceRendering) || setTimeout)(Xs);
}
function Xs() {
  for (var t; Xs.__r = rr.length; )
    t = rr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), rr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Te({}, r)).__v = r.__v + 1, W_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Fr(r), r.__h), ig(o, r), r.__e != l && tg(r)));
    });
}
function eg(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Zm, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ir(null, a, null, null, a) : Array.isArray(a) ? ir(Wi, { children: a }, null, null, null) : a.__b > 0 ? ir(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      W_(t, a, u = u || qs, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = ng(a, _, t) : _ = rg(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Fr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && lg(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      sg(p[i], p[++i], p[++i]);
}
function ng(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? ng(o, e, n) : rg(n, o, o, s, o.__e, e));
  return e;
}
function og(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    og(n, e);
  }) : e.push(t)), e;
}
function rg(t, e, n, o, s, r) {
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
function G$(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Js(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Js(t, r, e[r], n[r], o);
}
function Af(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Y$.test(e) ? n : n + "px";
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
            n && e in n || Af(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Af(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Mf : Lf, r) : t.removeEventListener(e, r ? Mf : Lf, r);
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
function Lf(t) {
  this.l[t.type + !1](ut.event ? ut.event(t) : t);
}
function Mf(t) {
  this.l[t.type + !0](ut.event ? ut.event(t) : t);
}
function W_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ut.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new sr(p, g), i.constructor = b, i.render = J$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Te({}, i.__s)), Te(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Te(Te({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Wi && h.key == null ? h.props.children : h, eg(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = X$(n.__e, e, n, o, s, r, l, _);
    (h = ut.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ut.__e(k, e, n);
  }
}
function ig(t, e) {
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
function X$(t, e, n, o, s, r, l, c) {
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
    if (r = r && Hi.call(t.childNodes), h = (d = n.props || qs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (G$(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, eg(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Fr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Qm(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Js(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Js(t, "checked", f, d.checked, !1));
  }
  return t;
}
function sg(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ut.__e(o, n);
  }
}
function lg(t, e, n) {
  var o, s;
  if (ut.unmount && ut.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || sg(o, null, e)), (o = t.__c) != null) {
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
      o[s] && lg(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Qm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function J$(t, e, n) {
  return this.constructor(t, n);
}
function cg(t, e, n) {
  var o, s, r;
  ut.__ && ut.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], W_(e, t = (!o && n || e).__k = Gs(Wi, null, [t]), s || qs, qs, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Hi.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), ig(r, t);
}
function ag(t, e) {
  cg(t, e, ag);
}
function K$(t, e, n) {
  var o, s, r, l = Te({}, t.props);
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? Hi.call(arguments, 2) : n), ir(t.type, l, o || t.key, s || t.ref, null);
}
function Z$(t, e) {
  var n = { __c: e = "__cC" + Km++, __: t, Consumer: function(o, s) {
    return o.children(s);
  }, Provider: function(o) {
    var s, r;
    return this.getChildContext || (s = [], (r = {})[e] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(l) {
      this.props.value !== l.value && s.some(Va);
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
Hi = Zm.slice, ut = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Xm = 0, Jm = function(t) {
  return t != null && t.constructor === void 0;
}, sr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Te({}, this.state), typeof t == "function" && (t = t(Te({}, n), this.props)), t && Te(n, t), t != null && this.__v && (e && this._sb.push(e), Va(this));
}, sr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Va(this));
}, sr.prototype.render = Wi, rr = [], Xs.__r = 0, Km = 0;
const Q$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: sr,
  Fragment: Wi,
  cloneElement: K$,
  createContext: Z$,
  createElement: Gs,
  createRef: q$,
  h: Gs,
  hydrate: ag,
  get isValidElement() {
    return Jm;
  },
  get options() {
    return ut;
  },
  render: cg,
  toChildArray: og
}, Symbol.toStringTag, { value: "Module" }));
var tk = Gm.bind(Gs);
Object.assign(window, { htm: Gm, html: tk, preact: Q$ });
let ek = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var si, Ie, ae, oo, ro, hs;
const su = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    T(this, ro);
    T(this, si, void 0);
    T(this, Ie, void 0);
    T(this, ae, void 0);
    T(this, oo, void 0);
    H(this, si, n), H(this, Ie, `ZUI_STORE:${e ?? ek()}`), H(this, ae, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return y(this, si);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (y(this, oo) || H(this, oo, new su(y(this, Ie), "session")), y(this, oo));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const o = y(this, ae).getItem(W(this, ro, hs).call(this, e));
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
    y(this, ae).setItem(W(this, ro, hs).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    y(this, ae).removeItem(W(this, ro, hs).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < y(this, ae).length; n++) {
      const o = y(this, ae).key(n);
      if (o != null && o.startsWith(y(this, Ie))) {
        const s = y(this, ae).getItem(o);
        typeof s == "string" && e(o.substring(y(this, Ie).length + 1), JSON.parse(s));
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
let Ks = su;
si = new WeakMap(), Ie = new WeakMap(), ae = new WeakMap(), oo = new WeakMap(), ro = new WeakSet(), hs = function(e) {
  return `${y(this, Ie)}:${e}`;
};
const nk = new Ks("DEFAULT");
function ok(t, e = "local") {
  return new Ks(t, e);
}
Object.assign(nk, { create: ok });
var _g, vt, ug, lr, Rf, fg = {}, hg = [], rk = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function en(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function dg(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Sa(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++ug };
  return s == null && vt.vnode != null && vt.vnode(r), r;
}
function U_(t) {
  return t.children;
}
function cr(t, e) {
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
function pg(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return pg(t);
  }
}
function Df(t) {
  (!t.__d && (t.__d = !0) && lr.push(t) && !Zs.__r++ || Rf !== vt.debounceRendering) && ((Rf = vt.debounceRendering) || setTimeout)(Zs);
}
function Zs() {
  for (var t; Zs.__r = lr.length; )
    t = lr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), lr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = en({}, r)).__v = r.__v + 1, vg(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Br(r), r.__h), sk(o, r), r.__e != l && pg(r)));
    });
}
function mg(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || hg, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Sa(null, a, null, null, a) : Array.isArray(a) ? Sa(U_, { children: a }, null, null, null) : a.__b > 0 ? Sa(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      vg(t, a, u = u || fg, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = gg(a, _, t) : _ = yg(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Br(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && wg(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      bg(p[i], p[++i], p[++i]);
}
function gg(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? gg(o, e, n) : yg(n, o, o, s, o.__e, e));
  return e;
}
function yg(t, e, n, o, s, r) {
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
function ik(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Qs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Qs(t, r, e[r], n[r], o);
}
function Nf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || rk.test(e) ? n : n + "px";
}
function Qs(t, e, n, o, s) {
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
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Of : Pf, r) : t.removeEventListener(e, r ? Of : Pf, r);
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
function Pf(t) {
  this.l[t.type + !1](vt.event ? vt.event(t) : t);
}
function Of(t) {
  this.l[t.type + !0](vt.event ? vt.event(t) : t);
}
function vg(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = vt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new cr(p, g), i.constructor = b, i.render = ck), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = en({}, i.__s)), en(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = en(en({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === U_ && h.key == null ? h.props.children : h, mg(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = lk(n.__e, e, n, o, s, r, l, _);
    (h = vt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), vt.__e(k, e, n);
  }
}
function sk(t, e) {
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
function lk(t, e, n, o, s, r, l, c) {
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
    if (r = r && _g.call(t.childNodes), h = (d = n.props || fg).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (ik(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, mg(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Br(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && dg(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Qs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Qs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function bg(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    vt.__e(o, n);
  }
}
function wg(t, e, n) {
  var o, s;
  if (vt.unmount && vt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || bg(o, null, e)), (o = t.__c) != null) {
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
      o[s] && wg(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || dg(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ck(t, e, n) {
  return this.constructor(t, n);
}
_g = hg.slice, vt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, ug = 0, cr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = en({}, this.state), typeof t == "function" && (t = t(en({}, n), this.props)), t && en(n, t), t != null && this.__v && (e && this._sb.push(e), Df(this));
}, cr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Df(this));
}, cr.prototype.render = U_, lr = [], Zs.__r = 0;
var ak = 0;
function Ca(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ak, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return vt.vnode && vt.vnode(_), _;
}
function _k(t) {
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
function uk(t) {
  const [e, n, o] = typeof t == "string" ? _k(t) : t;
  return e * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function Hf(t, e) {
  return uk(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function Wf(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function fk(t, e, n) {
  t = t % 360 / 360, e = Wf(e), n = Wf(n);
  const o = n <= 0.5 ? n * (e + 1) : n + e - n * e, s = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? s + (o - s) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? s + (o - s) * (2 / 3 - l) * 6 : s);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function hk(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function dk(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t = t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t = t[0].toUpperCase() : t = t.length <= e ? t : t.substring(0, e), t;
}
let pk = class extends cr {
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
      m.push("has-img"), $ = /* @__PURE__ */ Ca("img", { className: "avatar-img", src: d, alt: _ });
    else if (_ != null && _.length) {
      const S = dk(_, i);
      if (m.push("has-text", `has-text-${S.length}`), l)
        !c && l && (g.color = Hf(l));
      else {
        const E = h ?? _, b = (typeof E == "number" ? E : hk(E)) * u % 360;
        if (g.background = `hsl(${b},${a * 100}%,${f * 100}%)`, !c) {
          const k = fk(b, a, f);
          g.color = Hf(k);
        }
      }
      let A;
      w && w < 14 * S.length && (A = { transform: `scale(${w / (14 * S.length)})`, whiteSpace: "nowrap" }), $ = /* @__PURE__ */ Ca("div", { "data-actualSize": w, className: "avatar-text", style: A, children: S });
    }
    return /* @__PURE__ */ Ca(
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
class Uf extends Mt {
}
M(Uf, "NAME", "avatar"), M(Uf, "Component", pk);
class If extends Mt {
}
M(If, "NAME", "btngroup"), M(If, "Component", Zp);
var ea, st, $g, ar, Ff, tl = {}, kg = [], mk = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function nn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function xg(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function jr(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ea.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ds(t, l, o, s, null);
}
function ds(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++$g };
  return s == null && st.vnode != null && st.vnode(r), r;
}
function gk() {
  return { current: null };
}
function na(t) {
  return t.children;
}
function _r(t, e) {
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
function Sg(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Sg(t);
  }
}
function Bf(t) {
  (!t.__d && (t.__d = !0) && ar.push(t) && !el.__r++ || Ff !== st.debounceRendering) && ((Ff = st.debounceRendering) || setTimeout)(el);
}
function el() {
  for (var t; el.__r = ar.length; )
    t = ar.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ar = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = nn({}, r)).__v = r.__v + 1, I_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? zr(r), r.__h), Ag(o, r), r.__e != l && Sg(r)));
    });
}
function Cg(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || kg, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ds(null, a, null, null, a) : Array.isArray(a) ? ds(na, { children: a }, null, null, null) : a.__b > 0 ? ds(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      I_(t, a, u = u || tl, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Eg(a, _, t) : _ = Tg(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = zr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Mg(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Lg(p[i], p[++i], p[++i]);
}
function Eg(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Eg(o, e, n) : Tg(n, o, o, s, o.__e, e));
  return e;
}
function Tg(t, e, n, o, s, r) {
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
function yk(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || nl(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || nl(t, r, e[r], n[r], o);
}
function jf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || mk.test(e) ? n : n + "px";
}
function nl(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || jf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || jf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Vf : zf, r) : t.removeEventListener(e, r ? Vf : zf, r);
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
function zf(t) {
  this.l[t.type + !1](st.event ? st.event(t) : t);
}
function Vf(t) {
  this.l[t.type + !0](st.event ? st.event(t) : t);
}
function I_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = st.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new _r(p, g), i.constructor = b, i.render = bk), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = nn({}, i.__s)), nn(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = nn(nn({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === na && h.key == null ? h.props.children : h, Cg(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = vk(n.__e, e, n, o, s, r, l, _);
    (h = st.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), st.__e(k, e, n);
  }
}
function Ag(t, e) {
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
function vk(t, e, n, o, s, r, l, c) {
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
    if (r = r && ea.call(t.childNodes), h = (d = n.props || tl).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (yk(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Cg(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && zr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && xg(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && nl(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && nl(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Lg(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    st.__e(o, n);
  }
}
function Mg(t, e, n) {
  var o, s;
  if (st.unmount && st.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Lg(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Mg(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || xg(t.__e), t.__ = t.__e = t.__d = void 0;
}
function bk(t, e, n) {
  return this.constructor(t, n);
}
function wk(t, e, n) {
  var o, s, r;
  st.__ && st.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], I_(e, t = (!o && n || e).__k = jr(na, null, [t]), s || tl, tl, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? ea.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Ag(r, t);
}
ea = kg.slice, st = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, $g = 0, _r.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = nn({}, this.state), typeof t == "function" && (t = t(nn({}, n), this.props)), t && nn(n, t), t != null && this.__v && (e && this._sb.push(e), Bf(this));
}, _r.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Bf(this));
}, _r.prototype.render = na, ar = [], el.__r = 0;
var $k = 0;
function J(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --$k, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return st.vnode && st.vnode(_), _;
}
var Rg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, tt = {}, kk = {
  get exports() {
    return tt;
  },
  set exports(t) {
    tt = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(Rg, function() {
    var n = 1e3, o = 6e4, s = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", i = "week", d = "month", u = "quarter", a = "year", f = "date", v = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var C = ["th", "st", "nd", "rd"], x = D % 100;
      return "[" + D + (C[(x - 20) % 10] || C[x] || C[0]) + "]";
    } }, w = function(D, C, x) {
      var N = String(D);
      return !N || N.length >= C ? D : "" + Array(C + 1 - N.length).join(x) + D;
    }, $ = { s: w, z: function(D) {
      var C = -D.utcOffset(), x = Math.abs(C), N = Math.floor(x / 60), L = x % 60;
      return (C <= 0 ? "+" : "-") + w(N, 2, "0") + ":" + w(L, 2, "0");
    }, m: function D(C, x) {
      if (C.date() < x.date())
        return -D(x, C);
      var N = 12 * (x.year() - C.year()) + (x.month() - C.month()), L = C.clone().add(N, d), O = x - L < 0, P = C.clone().add(N + (O ? -1 : 1), d);
      return +(-(N + (x - L) / (O ? L - P : P - L)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: d, y: a, w: i, d: h, D: f, h: _, m: c, s: l, ms: r, Q: u }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, S = "en", A = {};
    A[S] = g;
    var E = function(D) {
      return D instanceof q;
    }, b = function D(C, x, N) {
      var L;
      if (!C)
        return S;
      if (typeof C == "string") {
        var O = C.toLowerCase();
        A[O] && (L = O), x && (A[O] = x, L = O);
        var P = C.split("-");
        if (!L && P.length > 1)
          return D(P[0]);
      } else {
        var I = C.name;
        A[I] = C, L = I;
      }
      return !N && L && (S = L), L || !N && S;
    }, k = function(D, C) {
      if (E(D))
        return D.clone();
      var x = typeof C == "object" ? C : {};
      return x.date = D, x.args = arguments, new q(x);
    }, R = $;
    R.l = b, R.i = E, R.w = function(D, C) {
      return k(D, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var q = function() {
      function D(x) {
        this.$L = b(x.locale, null, !0), this.parse(x);
      }
      var C = D.prototype;
      return C.parse = function(x) {
        this.$d = function(N) {
          var L = N.date, O = N.utc;
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
      }, C.isSame = function(x, N) {
        var L = k(x);
        return this.startOf(N) <= L && L <= this.endOf(N);
      }, C.isAfter = function(x, N) {
        return k(x) < this.startOf(N);
      }, C.isBefore = function(x, N) {
        return this.endOf(N) < k(x);
      }, C.$g = function(x, N, L) {
        return R.u(x) ? this[N] : this.set(L, x);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(x, N) {
        var L = this, O = !!R.u(N) || N, P = R.p(x), I = function(at, X) {
          var _t = R.w(L.$u ? Date.UTC(L.$y, X, at) : new Date(L.$y, X, at), L);
          return O ? _t : _t.endOf(h);
        }, V = function(at, X) {
          return R.w(L.toDate()[at].apply(L.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), L);
        }, z = this.$W, K = this.$M, St = this.$D, B = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, K) : I(0, K + 1);
          case i:
            var Q = this.$locale().weekStart || 0, xt = (z < Q ? z + 7 : z) - Q;
            return I(O ? St - xt : St + (6 - xt), K);
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
      }, C.$set = function(x, N) {
        var L, O = R.p(x), P = "set" + (this.$u ? "UTC" : ""), I = (L = {}, L[h] = P + "Date", L[f] = P + "Date", L[d] = P + "Month", L[a] = P + "FullYear", L[_] = P + "Hours", L[c] = P + "Minutes", L[l] = P + "Seconds", L[r] = P + "Milliseconds", L)[O], V = O === h ? this.$D + (N - this.$W) : N;
        if (O === d || O === a) {
          var z = this.clone().set(f, 1);
          z.$d[I](V), z.init(), this.$d = z.set(f, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          I && this.$d[I](V);
        return this.init(), this;
      }, C.set = function(x, N) {
        return this.clone().$set(x, N);
      }, C.get = function(x) {
        return this[R.p(x)]();
      }, C.add = function(x, N) {
        var L, O = this;
        x = Number(x);
        var P = R.p(N), I = function(K) {
          var St = k(O);
          return R.w(St.date(St.date() + Math.round(K * x)), O);
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
      }, C.subtract = function(x, N) {
        return this.add(-1 * x, N);
      }, C.format = function(x) {
        var N = this, L = this.$locale();
        if (!this.isValid())
          return L.invalidDate || v;
        var O = x || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), I = this.$H, V = this.$m, z = this.$M, K = L.weekdays, St = L.months, B = function(X, _t, Ht, Wt) {
          return X && (X[_t] || X(N, O)) || Ht[_t].slice(0, Wt);
        }, Q = function(X) {
          return R.s(I % 12 || 12, X, "0");
        }, xt = L.meridiem || function(X, _t, Ht) {
          var Wt = X < 12 ? "AM" : "PM";
          return Ht ? Wt.toLowerCase() : Wt;
        }, at = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: R.s(z + 1, 2, "0"), MMM: B(L.monthsShort, z, St, 3), MMMM: B(St, z), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: B(L.weekdaysMin, this.$W, K, 2), ddd: B(L.weekdaysShort, this.$W, K, 3), dddd: K[this.$W], H: String(I), HH: R.s(I, 2, "0"), h: Q(1), hh: Q(2), a: xt(I, V, !0), A: xt(I, V, !1), m: String(V), mm: R.s(V, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(X, _t) {
          return _t || at[X] || P.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(x, N, L) {
        var O, P = R.p(N), I = k(x), V = (I.utcOffset() - this.utcOffset()) * o, z = this - I, K = R.m(this, I);
        return K = (O = {}, O[a] = K / 12, O[d] = K, O[u] = K / 3, O[i] = (z - V) / 6048e5, O[h] = (z - V) / 864e5, O[_] = z / s, O[c] = z / o, O[l] = z / n, O)[P] || z, L ? K : R.a(K);
      }, C.daysInMonth = function() {
        return this.endOf(d).$D;
      }, C.$locale = function() {
        return A[this.$L];
      }, C.locale = function(x, N) {
        if (!x)
          return this.$L;
        var L = this.clone(), O = b(x, N, !0);
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
      }, D;
    }(), j = q.prototype;
    return k.prototype = j, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", f]].forEach(function(D) {
      j[D[1]] = function(C) {
        return this.$g(C, D[0], D[1]);
      };
    }), k.extend = function(D, C) {
      return D.$i || (D(C, q, k), D.$i = !0), k;
    }, k.locale = b, k.isDayjs = E, k.unix = function(D) {
      return k(1e3 * D);
    }, k.en = A[S], k.Ls = A, k.p = {}, k;
  });
})(kk);
const Ya = (t = 0, e = 0) => {
  const n = [];
  for (let o = t; o <= e; o++)
    n.push(o);
  return n;
}, Dg = (t, e) => {
  const n = Math.ceil(t.length / e);
  return new Array(e).fill({}).map((o, s) => t.slice(s * n, (s + 1) * n));
}, xk = (t) => {
  const { format: e, minDate: n, maxDate: o, tagDate: s, DATEROWCOUNT: r, showOtherMonth: l, clickDay: c, selectedDate: _, handleChangePanel: h, showToday: i, handleChange: d, clickToday: u } = t, a = (R) => tt(R).isValid() ? tt(R).add(1, "months").format(e) : "", f = (R) => tt(R).isValid() ? tt(R).subtract(1, "months").format(e) : "", v = () => {
    const R = f(_);
    d(R, !1);
  }, p = () => {
    const R = a(_);
    d(R, !1);
  }, m = () => {
    d("", !0);
  }, g = () => {
    d(_, !0);
  }, w = (R, q, j, D) => {
    const C = tt(), x = tt(_), N = new Array(R);
    for (let L = 0; L < R; L++) {
      const O = q + L + 1, P = j.set("date", O), I = D && !l ? !0 : n && P.isBefore(n, "date") || o && P.isAfter(o, "date");
      N[L] = {
        isSelected: x.isSame(j.set("date", O), "date"),
        isToday: C.isSame(P, "date"),
        isDisable: !!I,
        isTag: !!(s != null && s.includes(P.format(e))),
        date: P,
        isOtherMonth: D,
        onClick: () => I ? {} : c(P)
      };
    }
    return N;
  }, $ = () => {
    const R = tt(_), q = tt(), j = _ ? R : q, D = j.set("date", 1).day(), C = D === 0 ? 6 : D - 1, x = j.subtract(1, "month"), L = Number(x.endOf("month").get("date")) - C;
    return w(C, L, x, !0);
  }, S = () => {
    const R = tt(_), q = tt(), j = _ ? R : q, D = j.set("date", 1).day(), C = D === 0 ? 6 : D - 1, x = j.endOf("month").get("date"), N = j.add(1, "month"), L = 7 * 6 % (C + x);
    return w(L, 0, N, !0);
  }, A = () => {
    const R = _, q = tt(), j = _ ? tt(R) : q, D = j.endOf("month").get("date"), C = w(D, 0, j, !1), x = $(), N = S(), L = [...x, ...C, ...N];
    return Dg(L, r);
  }, E = ["一", "二", "三", "四", "五", "六", "日"], b = A(), k = _ || tt().format(e);
  return /* @__PURE__ */ J("div", { className: F("datepicker-calendar-day"), children: [
    /* @__PURE__ */ J("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ J("div", { class: "flex", children: /* @__PURE__ */ J("button", { type: "button", className: "btn ghost", onClick: () => h("year"), children: [
        /* @__PURE__ */ J("span", { children: tt(k).format("YYYY 年 MM 月") }),
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
      /* @__PURE__ */ J("tbody", { className: "datepicker-calendar-tbody", children: b.map((R, q) => /* @__PURE__ */ J("tr", { children: R.map((j, D) => {
        const C = ["text-center"];
        return j.isToday && C.push("datepicker-calendar-today"), j.isSelected && C.push("datepicker-calendar-selected-date"), j.isOtherMonth && C.push("datepicker-calendar-other-month"), j.isTag && C.push("datepicker-calendar-tag"), /* @__PURE__ */ J("td", { className: F(C), children: /* @__PURE__ */ J("div", { className: F("btn", "ghost", "datepicker-calendar-date", j.isDisable ? "disabled" : ""), onClick: j.onClick, children: !l && j.isOtherMonth ? "" : tt(j.date).format("DD") }) }, D);
      }) }, q)) })
    ] }),
    /* @__PURE__ */ J("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ J("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ J("span", { children: "清除" }) }),
      /* @__PURE__ */ J("button", { type: "button", className: "btn ghost text-primary", onClick: g, children: /* @__PURE__ */ J("span", { children: "确认" }) })
    ] })
  ] });
};
const Sk = (t) => {
  const { format: e, selectedDate: n, minDate: o, maxDate: s, year: r, handleChangeMonth: l } = t, c = tt(o).format("M"), _ = tt(s).format("M"), h = Dg(Ya(1, 12), 3), i = (d, u) => {
    u || l(d);
  };
  return /* @__PURE__ */ J("div", { className: F("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ J("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ J("tbody", { className: "datepicker-calendar-month-table-body", children: h.map((d, u) => /* @__PURE__ */ J("tr", { children: d.map((a, f) => {
    const v = ["text-center"], p = tt(`${r}-${a}-01`).format(e), m = !!(c && tt(n).isBefore(c) || _ && tt(n).isBefore(_));
    return /* @__PURE__ */ J("td", { className: F(v), children: /* @__PURE__ */ J("div", { className: F("btn", "size-sm", "ghost", "datepicker-calendar-month", m ? "disabled" : ""), onClick: () => {
      i(p, m);
    }, children: [
      tt(p).format("MM"),
      " 月"
    ] }) }, f);
  }) }, u)) }) }) });
}, Ck = (t) => {
  const { selectedDate: e, handleChangeMonth: n } = t;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = tt(e).year(), s = [...Ya(o - 100, o), ...Ya(o + 1, o + 100)], r = (l, c) => {
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
    /* @__PURE__ */ J("div", { className: F("datepicker-accordion-content", o === l ? "" : "hidden"), children: jr(Sk, {
      ...t,
      year: l.toString(),
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class Ek extends _r {
  constructor() {
    super(...arguments);
    M(this, "DATEROWCOUNT", 6);
    M(this, "ref", gk());
    M(this, "state", {
      selectedDate: this.props.date || tt().format("YYYY-MM-DD"),
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
    const o = n === "subtract" ? tt(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format) : tt(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
    this.handleChange(o);
  }
  clickDay(n) {
    const o = tt(n).format(this.props.format);
    this.handleChange(o);
  }
  clickToday() {
    this.handleChange(tt().format(this.props.format));
  }
  renderPanel() {
    return this.state.type === "day" ? jr(xk, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : jr(Ck, {
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
function Ui(t) {
  return t.split("-")[1];
}
function F_(t) {
  return t === "y" ? "height" : "width";
}
function Co(t) {
  return t.split("-")[0];
}
function oa(t) {
  return ["top", "bottom"].includes(Co(t)) ? "x" : "y";
}
function Yf(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = oa(e), _ = F_(c), h = o[_] / 2 - s[_] / 2, i = Co(e), d = c === "x";
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
  switch (Ui(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const Tk = async (t, e, n) => {
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
  } = Yf(h, o, _), u = o, a = {}, f = 0;
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
      } = Yf(h, u, _)), v = -1;
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
function Ak(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ng(t) {
  return typeof t != "number" ? Ak(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ol(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Lk(t, e) {
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
  } = e, f = Ng(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = ol(await r.getClippingRect({
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
  }, S = ol(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Mk = Math.min, Rk = Math.max;
function Dk(t, e, n) {
  return Rk(t, Mk(e, n));
}
const Nk = (t) => ({
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
    const h = Ng(o), i = {
      x: s,
      y: r
    }, d = oa(l), u = F_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], E = w / 2 - a[u] / 2 + $, b = Dk(S, E, A), R = Ui(l) != null && E != b && c.reference[u] / 2 - (E < S ? h[f] : h[v]) - a[u] / 2 < 0 ? E < S ? S - E : A - E : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: E - b
      }
    };
  }
}), Pk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function rl(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Pk[e]);
}
function Ok(t, e, n) {
  n === void 0 && (n = !1);
  const o = Ui(t), s = oa(t), r = F_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = rl(l)), {
    main: l,
    cross: rl(l)
  };
}
const Hk = {
  start: "end",
  end: "start"
};
function qa(t) {
  return t.replace(/start|end/g, (e) => Hk[e]);
}
function Wk(t) {
  const e = rl(t);
  return [qa(t), e, qa(e)];
}
function Uk(t, e, n) {
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
function Ik(t, e, n, o) {
  const s = Ui(t);
  let r = Uk(Co(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(qa)))), r;
}
const Fk = function(t) {
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
      } = t, p = Co(o), m = Co(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [rl(l)] : Wk(l));
      !d && a !== "none" && w.push(...Ik(l, f, a, g));
      const $ = [l, ...w], S = await Lk(e, v), A = [];
      let E = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = Ok(o, r, g);
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
            const D = (k = E.map((C) => [C, C.overflows.filter((x) => x > 0).reduce((x, N) => x + N, 0)]).sort((C, x) => C[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            D && (j = D);
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
async function Bk(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = Co(n), c = Ui(n), _ = oa(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const jk = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await Bk(e, t);
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
function hn(t) {
  return Og(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Ki;
function Pg() {
  if (Ki)
    return Ki;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Ki = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Ki) : navigator.userAgent;
}
function Re(t) {
  return t instanceof Kt(t).HTMLElement;
}
function re(t) {
  return t instanceof Kt(t).Element;
}
function Og(t) {
  return t instanceof Kt(t).Node;
}
function qf(t) {
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
function zk(t) {
  return ["table", "td", "th"].includes(hn(t));
}
function B_(t) {
  const e = /firefox/i.test(Pg()), n = me(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function Hg() {
  return !/^((?!chrome|android).)*safari/i.test(Pg());
}
function j_(t) {
  return ["html", "body", "#document"].includes(hn(t));
}
const Gf = Math.min, ur = Math.max, il = Math.round;
function Wg(t) {
  const e = me(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = il(n) !== s || il(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Ug(t) {
  return re(t) ? t : t.contextElement;
}
const Ig = {
  x: 1,
  y: 1
};
function zn(t) {
  const e = Ug(t);
  if (!Re(e))
    return Ig;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = Wg(e);
  let l = (r ? il(n.width) : n.width) / o, c = (r ? il(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function On(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Ug(t);
  let _ = Ig;
  e && (o ? re(o) && (_ = zn(o)) : _ = zn(t));
  const h = c ? Kt(c) : window, i = !Hg() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const v = Kt(c), p = o && re(o) ? Kt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = zn(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
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
function vn(t) {
  return ((Og(t) ? t.ownerDocument : t.document) || window.document).documentElement;
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
function Fg(t) {
  return On(vn(t)).left + ia(t).scrollLeft;
}
function Vk(t, e, n) {
  const o = Re(e), s = vn(e), r = On(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((hn(e) !== "body" || ra(s)) && (l = ia(e)), Re(e)) {
      const _ = On(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = Fg(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Vr(t) {
  if (hn(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (qf(t) ? t.host : null) || // Fallback
    vn(t)
  );
  return qf(e) ? e.host : e;
}
function Xf(t) {
  return !Re(t) || me(t).position === "fixed" ? null : t.offsetParent;
}
function Yk(t) {
  let e = Vr(t);
  for (; Re(e) && !j_(e); ) {
    if (B_(e))
      return e;
    e = Vr(e);
  }
  return null;
}
function Jf(t) {
  const e = Kt(t);
  let n = Xf(t);
  for (; n && zk(n) && me(n).position === "static"; )
    n = Xf(n);
  return n && (hn(n) === "html" || hn(n) === "body" && me(n).position === "static" && !B_(n)) ? e : n || Yk(t) || e;
}
function qk(t) {
  return Wg(t);
}
function Gk(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const s = Re(n), r = vn(n);
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
  if ((s || !s && o !== "fixed") && ((hn(n) !== "body" || ra(r)) && (l = ia(n)), Re(n))) {
    const h = On(n);
    c = zn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Xk(t, e) {
  const n = Kt(t), o = vn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = Hg();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Jk(t) {
  var e;
  const n = vn(t), o = ia(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = ur(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = ur(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + Fg(t);
  const _ = -o.scrollTop;
  return me(s || n).direction === "rtl" && (c += ur(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Bg(t) {
  const e = Vr(t);
  return j_(e) ? t.ownerDocument.body : Re(e) && ra(e) ? e : Bg(e);
}
function fr(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Bg(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Kt(o);
  return s ? e.concat(r, r.visualViewport || [], ra(o) ? o : []) : e.concat(o, fr(o));
}
function Kk(t, e) {
  const n = On(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Re(t) ? zn(t) : {
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
function Kf(t, e, n) {
  return e === "viewport" ? ol(Xk(t, n)) : re(e) ? Kk(e, n) : ol(Jk(vn(t)));
}
function Zk(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = fr(t).filter((c) => re(c) && hn(c) !== "body"), s = null;
  const r = me(t).position === "fixed";
  let l = r ? Vr(t) : t;
  for (; re(l) && !j_(l); ) {
    const c = me(l), _ = B_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Vr(l);
  }
  return e.set(t, o), o;
}
function Qk(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? Zk(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = Kf(e, i, s);
    return h.top = ur(d.top, h.top), h.right = Gf(d.right, h.right), h.bottom = Gf(d.bottom, h.bottom), h.left = ur(d.left, h.left), h;
  }, Kf(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const tx = {
  getClippingRect: Qk,
  convertOffsetParentRelativeRectToViewportRelativeRect: Gk,
  isElement: re,
  getDimensions: qk,
  getOffsetParent: Jf,
  getDocumentElement: vn,
  getScale: zn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || Jf, r = this.getDimensions;
    return {
      reference: Vk(e, await s(n), o),
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
function ex(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...re(t) ? fr(t) : t.contextElement ? fr(t.contextElement) : [], ...fr(e)] : [];
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
  let d, u = c ? On(t) : null;
  c && a();
  function a() {
    const f = On(t);
    u && (f.x !== u.x || f.y !== u.y || f.width !== u.width || f.height !== u.height) && n(), u = f, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var f;
    h.forEach((v) => {
      _ && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), (f = i) == null || f.disconnect(), i = null, c && cancelAnimationFrame(d);
  };
}
const nx = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: tx,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return Tk(t, e, {
    ...s,
    platform: r
  });
};
var io, so, Rt, En, li, ci, ai, Ga, Ol, jg, Hl, zg, Wl, Vg, Ul, Yg, Il, qg, Fl, Gg, Bl, Xg, jl;
const $n = class extends le {
  constructor() {
    super(...arguments);
    T(this, ai);
    T(this, Ol);
    T(this, Hl);
    T(this, Wl);
    T(this, Ul);
    T(this, Il);
    T(this, Fl);
    T(this, Bl);
    T(this, io, void 0);
    T(this, so, 0);
    T(this, Rt, void 0);
    T(this, En, void 0);
    T(this, li, void 0);
    T(this, ci, void 0);
    M(this, "hideLater", () => {
      y(this, jl).call(this), H(this, so, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, jl, () => {
      clearTimeout(y(this, so)), H(this, so, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, En)) == null ? void 0 : n.classList.contains($n.CLASS_SHOW);
  }
  get datepicker() {
    return y(this, En) || W(this, Hl, zg).call(this);
  }
  get trigger() {
    return y(this, li) || this.element;
  }
  get elementShowClass() {
    return `with-${$n.NAME}-show`;
  }
  show(n) {
    return H(this, li, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add($n.CLASS_SHOW), this.datepicker.classList.add("fade"), W(this, Fl, Gg).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = y(this, ci)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, En)) == null || o.classList.remove($n.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
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
let Yt = $n;
io = new WeakMap(), so = new WeakMap(), Rt = new WeakMap(), En = new WeakMap(), li = new WeakMap(), ci = new WeakMap(), ai = new WeakSet(), Ga = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Ol = new WeakSet(), jg = function() {
  const n = W(this, ai, Ga).call(this);
  return H(this, Rt, document.createElement("div")), y(this, Rt).style.position = "absolute", y(this, Rt).style.width = `${n}px`, y(this, Rt).style.height = `${n}px`, y(this, Rt).style.transform = "rotate(45deg)", y(this, Rt);
}, Hl = new WeakSet(), zg = function() {
  const n = $n.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), wk(jr(Ek, { ...this.options }), o), this.options.arrow && o.append(W(this, Ol, jg).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, En, o), o;
}, Wl = new WeakSet(), Vg = function() {
  var l;
  const n = W(this, ai, Ga).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [jk(n), Fk()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && y(this, Rt) && ((l = r.middleware) == null || l.push(Nk({ element: y(this, Rt) }))), r;
}, Ul = new WeakSet(), Yg = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Il = new WeakSet(), qg = function(n) {
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
}, Fl = new WeakSet(), Gg = function() {
  const n = W(this, Wl, Vg).call(this), o = W(this, Bl, Xg).call(this);
  H(this, ci, ex(o, this.datepicker, () => {
    nx(o, this.datepicker, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.datepicker.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, Ul, Yg).call(this, _);
      if (l.arrow && y(this, Rt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(y(this, Rt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Rt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, Il, qg).call(this, _)
        });
      }
    });
  }));
}, Bl = new WeakSet(), Xg = function() {
  return y(this, io) || H(this, io, {
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
  }), y(this, io);
}, jl = new WeakMap(), M(Yt, "NAME", "datepicker"), M(Yt, "CLASSNAME", "datepicker"), M(Yt, "CLASS_SHOW", "show"), M(Yt, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), M(Yt, "DEFAULT", {
  date: tt().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(t) {
  var s, r;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, Yt.MENU_SELECTOR), o = (r = e.closest) == null ? void 0 : r.call(e, ".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? Yt.ensure(n).toggle() : o || Yt.clear({ event: t });
});
const ox = (t) => {
  var o;
  const e = document.getElementsByClassName("with-datepicker-show")[0];
  if (!e)
    return;
  const n = (o = e.closest) == null ? void 0 : o.call(e, Yt.MENU_SELECTOR);
  !n || !t.target.contains(n) || Yt.clear({ event: t });
};
window.addEventListener("scroll", ox, !0);
function Jg(t, e, n) {
  if (n) {
    t.setAttribute("class", F(e));
    return;
  }
  zc(t.getAttribute("class"), e).forEach(([o, s]) => {
    t.classList.toggle(o, s);
  });
}
function Oo(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, s]) => {
      Oo(t, o, s);
    });
  n !== void 0 && (t.style[e] = typeof n == "number" ? `${n}px` : n);
}
function sl(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, s]) => {
      sl(t, o, s);
    });
  n !== void 0 && (n === null ? t.removeAttribute(e) : t.setAttribute(e, n));
}
var Tn, _i, Fe, zl, lo, ps;
const we = class extends le {
  constructor() {
    super(...arguments);
    T(this, lo);
    T(this, Tn, 0);
    T(this, _i, void 0);
    T(this, Fe, void 0);
    T(this, zl, (n) => {
      const o = n.target;
      (o.closest(we.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(we.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", y(this, zl)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const s = n.clientWidth, r = n.clientHeight;
          (!y(this, Fe) || y(this, Fe)[0] !== s || y(this, Fe)[1] !== r) && (H(this, Fe, [s, r]), this.layout());
        });
        o.observe(n), H(this, _i, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = y(this, _i)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: s, backdrop: r, className: l, style: c } = this.options;
    return Jg(o, [{
      "modal-trans": s,
      "modal-no-backdrop": !r
    }, we.CLASS_SHOW, l]), Oo(o, {
      zIndex: `${we.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), W(this, lo, ps).call(this, () => {
      o.classList.add(we.CLASS_SHOWN), W(this, lo, ps).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(we.CLASS_SHOWN), this.emit("hide", this), W(this, lo, ps).call(this, () => {
      this.modalElement.classList.remove(we.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    o = o ?? this.options.size, sl(s, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? sl(s, "data-size", o) : o && (r.width = o), Oo(s, r), n = n ?? this.options.position ?? "fit";
    const l = s.clientWidth, c = s.clientHeight;
    H(this, Fe, [l, c]), typeof n == "function" && (n = n({ width: l, height: c }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), Oo(s, _), Oo(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Ut = we;
Tn = new WeakMap(), _i = new WeakMap(), Fe = new WeakMap(), zl = new WeakMap(), lo = new WeakSet(), ps = function(n, o) {
  y(this, Tn) && (clearTimeout(y(this, Tn)), H(this, Tn, 0)), n && (this.options.animation ? H(this, Tn, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, M(Ut, "NAME", "Modal"), M(Ut, "EVENTS", !0), M(Ut, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), M(Ut, "CLASS_SHOW", "show"), M(Ut, "CLASS_SHOWN", "in"), M(Ut, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), M(Ut, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Ut.all.forEach((t) => {
    const e = t;
    e.isShown && e.options.responsive && e.layout();
  });
});
var sa, lt, Kg, Ho, hr, Zf, ll = {}, Zg = [], rx = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function on(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Qg(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ix(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? sa.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ms(t, l, o, s, null);
}
function ms(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Kg };
  return s == null && lt.vnode != null && lt.vnode(r), r;
}
function sx() {
  return { current: null };
}
function la(t) {
  return t.children;
}
function Vn(t, e) {
  this.props = t, this.context = e;
}
function Yr(t, e) {
  if (e == null)
    return t.__ ? Yr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Yr(t) : null;
}
function ty(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ty(t);
  }
}
function Qf(t) {
  (!t.__d && (t.__d = !0) && hr.push(t) && !cl.__r++ || Zf !== lt.debounceRendering) && ((Zf = lt.debounceRendering) || setTimeout)(cl);
}
function cl() {
  for (var t; cl.__r = hr.length; )
    t = hr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), hr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = on({}, r)).__v = r.__v + 1, z_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Yr(r), r.__h), ry(o, r), r.__e != l && ty(r)));
    });
}
function ey(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Zg, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ms(null, a, null, null, a) : Array.isArray(a) ? ms(la, { children: a }, null, null, null) : a.__b > 0 ? ms(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      z_(t, a, u = u || ll, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = ny(a, _, t) : _ = oy(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Yr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && sy(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      iy(p[i], p[++i], p[++i]);
}
function ny(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? ny(o, e, n) : oy(n, o, o, s, o.__e, e));
  return e;
}
function oy(t, e, n, o, s, r) {
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
function lx(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || al(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || al(t, r, e[r], n[r], o);
}
function th(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || rx.test(e) ? n : n + "px";
}
function al(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || th(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || th(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? nh : eh, r) : t.removeEventListener(e, r ? nh : eh, r);
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
function eh(t) {
  this.l[t.type + !1](lt.event ? lt.event(t) : t);
}
function nh(t) {
  this.l[t.type + !0](lt.event ? lt.event(t) : t);
}
function z_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = lt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Vn(p, g), i.constructor = b, i.render = ax), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = on({}, i.__s)), on(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = on(on({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === la && h.key == null ? h.props.children : h, ey(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = cx(n.__e, e, n, o, s, r, l, _);
    (h = lt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), lt.__e(k, e, n);
  }
}
function ry(t, e) {
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
function cx(t, e, n, o, s, r, l, c) {
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
    if (r = r && sa.call(t.childNodes), h = (d = n.props || ll).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (lx(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, ey(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Yr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Qg(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && al(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && al(t, "checked", f, d.checked, !1));
  }
  return t;
}
function iy(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    lt.__e(o, n);
  }
}
function sy(t, e, n) {
  var o, s;
  if (lt.unmount && lt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || iy(o, null, e)), (o = t.__c) != null) {
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
      o[s] && sy(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Qg(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ax(t, e, n) {
  return this.constructor(t, n);
}
function _x(t, e, n) {
  var o, s, r;
  lt.__ && lt.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], z_(e, t = (!o && n || e).__k = ix(la, null, [t]), s || ll, ll, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? sa.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), ry(r, t);
}
sa = Zg.slice, lt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Kg = 0, Ho = function(t) {
  return t != null && t.constructor === void 0;
}, Vn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = on({}, this.state), typeof t == "function" && (t = t(on({}, n), this.props)), t && on(n, t), t != null && this.__v && (e && this._sb.push(e), Qf(this));
}, Vn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Qf(this));
}, Vn.prototype.render = la, hr = [], cl.__r = 0;
var ux = 0;
function Et(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ux, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return lt.vnode && lt.vnode(_), _;
}
let fx = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
class ly extends Vn {
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
    return Ho(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ Et("div", { className: "modal-header", children: /* @__PURE__ */ Et("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : Ho(e) ? e : /* @__PURE__ */ Et("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ Et(ko, { ...e }) : null,
      n ? /* @__PURE__ */ Et("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ Et("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? Ho(e) ? e : /* @__PURE__ */ Et("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return Ho(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ Et("div", { className: "modal-footer", children: n ? /* @__PURE__ */ Et(ko, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ Et("div", { className: F("modal-dialog", e), style: n, children: /* @__PURE__ */ Et("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
M(ly, "defaultProps", { closeBtn: !0 });
var ui, co, fi;
class hx extends Vn {
  constructor() {
    super(...arguments);
    T(this, ui, sx());
    T(this, co, void 0);
    M(this, "state", {});
    T(this, fi, () => {
      var s, r;
      const n = (r = (s = y(this, ui).current) == null ? void 0 : s.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = y(this, co);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, c = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, c.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, co, o);
    });
  }
  componentDidMount() {
    y(this, fi).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = y(this, co)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ Et(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: y(this, ui),
        onLoad: y(this, fi)
      }
    );
  }
}
ui = new WeakMap(), co = new WeakMap(), fi = new WeakMap();
function dx(t, e) {
  const { custom: n, title: o, content: s } = e;
  return {
    body: s,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function px(t, e) {
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
    body: n === "html" ? /* @__PURE__ */ Et("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: _ } }) : _
  };
}
async function mx(t, e) {
  const { url: n, custom: o, title: s } = e;
  return {
    title: s,
    ...o,
    body: /* @__PURE__ */ Et(hx, { url: n })
  };
}
const gx = {
  custom: dx,
  ajax: px,
  iframe: mx
};
var hi, di, _e, ao, gs, Vl, cy, pi, Xa;
const Tr = class extends Ut {
  constructor() {
    super(...arguments);
    T(this, ao);
    T(this, Vl);
    T(this, pi);
    T(this, hi, void 0);
    T(this, di, void 0);
    T(this, _e, void 0);
  }
  get id() {
    return y(this, di);
  }
  get loading() {
    return this.modalElement.classList.contains(Tr.LOADING_CLASS);
  }
  get modalElement() {
    let n = y(this, hi);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), sl(n, {
        id: o,
        style: this.options.style
      }), Jg(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, hi, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, di, this.options.id || `modal-${fx()}`);
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
    y(this, _e) && clearTimeout(y(this, _e));
    const { modalElement: n, options: o } = this, { type: s, loadTimeout: r } = o, l = gx[s];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.classList.add(Tr.LOADING_CLASS), await W(this, Vl, cy).call(this), r && H(this, _e, window.setTimeout(() => {
      H(this, _e, 0), W(this, pi, Xa).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await W(this, pi, Xa).call(this, this.options.failedTip) : c && typeof c == "object" && await W(this, ao, gs).call(this, c), y(this, _e) && (clearTimeout(y(this, _e)), H(this, _e, 0)), n.classList.remove(Tr.LOADING_CLASS), !0;
  }
};
let Wo = Tr;
hi = new WeakMap(), di = new WeakMap(), _e = new WeakMap(), ao = new WeakSet(), gs = function(n) {
  return new Promise((o) => {
    if (Array.isArray(n))
      return this.modalElement.innerHTML = n[0], o();
    const { afterRender: s, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), s == null || s(l), o();
      },
      ...r
    }, _x(
      /* @__PURE__ */ Et(ly, { ...n }),
      this.modalElement
    );
  });
}, Vl = new WeakSet(), cy = function() {
  const { loadingText: n } = this.options;
  return W(this, ao, gs).call(this, {
    body: /* @__PURE__ */ Et("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ Et("span", { className: "spinner" }),
      n ? /* @__PURE__ */ Et("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, pi = new WeakSet(), Xa = function(n) {
  if (n)
    return W(this, ao, gs).call(this, {
      body: /* @__PURE__ */ Et("div", { className: "modal-load-failed", children: n })
    });
}, M(Wo, "LOADING_CLASS", "loading"), M(Wo, "DEFAULT", {
  ...Ut.DEFAULT,
  loadTimeout: 1e4
});
var Be, Yl, ay, ql, _y, Gl, uy;
class dr extends le {
  constructor() {
    super(...arguments);
    T(this, Yl);
    T(this, ql);
    T(this, Gl);
    T(this, Be, void 0);
  }
  get modal() {
    return y(this, Be);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return W(this, ql, _y).call(this).show();
  }
  hide() {
    var n;
    (n = y(this, Be)) == null || n.hide();
  }
}
Be = new WeakMap(), Yl = new WeakSet(), ay = function() {
  const {
    container: n,
    ...o
  } = this.options, s = o, r = this.element.getAttribute("href") || "";
  return s.type || (s.target || r[0] === "#" ? s.type = "static" : s.type = s.type || (s.url ? "iframe" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && r[0] !== "#" && (s.url = r), s;
}, ql = new WeakSet(), _y = function() {
  const n = W(this, Yl, ay).call(this);
  let o = y(this, Be);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Ut(W(this, Gl, uy).call(this), n), H(this, Be, o)) : (o = new Wo(this.container, n), H(this, Be, o)), o;
}, Gl = new WeakSet(), uy = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const s = o.getAttribute("href");
      s != null && s.startsWith("#") && (n = s);
    }
  }
  return this.container.querySelector(n || ".modal");
}, M(dr, "NAME", "ModalTrigger"), M(dr, "EVENTS", !0), M(dr, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (t) => {
  var o;
  const e = t.target, n = (o = e.closest) == null ? void 0 : o.call(e, dr.TOGGLE_SELECTOR);
  if (n) {
    const s = dr.ensure(n);
    s && s.show(), console.log("> modalTrigger", s);
  }
});
var Da;
let yx = (Da = class extends $o {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = F(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, M(Da, "NAME", "nav"), Da);
class oh extends Mt {
}
M(oh, "NAME", "nav"), M(oh, "Component", yx);
var Ja;
Ja = { __e: function(t, e, n, o) {
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
var vx = 0;
function _n(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --vx, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Ja.vnode && Ja.vnode(_), _;
}
function qr(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function bx({
  key: t,
  type: e,
  btnType: n,
  page: o,
  format: s,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = qr(r, o);
  return c.text === void 0 && !c.icon && s && (c.text = typeof s == "function" ? s(_) : Ft(s, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : Ft(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ _n(de, { type: n, ...c });
}
const $e = 24 * 60 * 60 * 1e3, jt = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), Ii = (t, e = new Date()) => (t = jt(t), e = jt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), rh = (t, e = new Date()) => jt(t).getFullYear() === jt(e).getFullYear(), wx = (t, e = new Date()) => (t = jt(t), e = jt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), lE = (t, e = new Date()) => {
  t = jt(t), e = jt(e);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(t.getTime() / n), s = Math.floor(e.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, cE = (t, e) => Ii(jt(e), t), aE = (t, e) => Ii(jt(e).getTime() - $e, t), _E = (t, e) => Ii(jt(e).getTime() + $e, t), uE = (t, e) => Ii(jt(e).getTime() - 2 * $e, t), Ka = (t, e = "yyyy-MM-dd hh:mm") => {
  t = jt(t);
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
}, fE = (t, e, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = Ka(t, rh(t) ? o.month : o.full);
  if (Ii(t, e))
    return s;
  const r = Ka(e, rh(t, e) ? wx(t, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, hE = (t) => {
  const e = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return e - $e * 7;
    case "oneMonth":
      return e - $e * 31;
    case "threeMonth":
      return e - $e * 31 * 3;
    case "halfYear":
      return e - $e * 183;
    case "oneYear":
      return e - $e * 365;
    case "twoYear":
      return e - 2 * ($e * 365);
    default:
      return 0;
  }
}, ih = (t, e, n = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, ih(t, "day", n, o);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, ih(t, "day", n, o);
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
function $x({
  key: t,
  type: e,
  page: n,
  text: o = "",
  pagerInfo: s,
  children: r,
  ...l
}) {
  const c = qr(s, n);
  return o = typeof o == "function" ? o(c) : Ft(o, c), /* @__PURE__ */ _n(Cd, { ...l, children: [
    r,
    o
  ] });
}
function kx({
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
  const _ = { ...c, square: !0 }, h = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ _n(de, { type: n, ..._ })), i = (u, a) => {
    const f = [];
    for (let v = u; v <= a; v++) {
      _.text = v, delete _.icon, _.disabled = !1;
      const p = qr(s, v);
      l && (_.url = typeof l == "function" ? l(p) : Ft(l, p)), f.push(/* @__PURE__ */ _n(de, { type: n, ..._, onClick: r }));
    }
    return f;
  };
  let d = [];
  return d = [...i(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= o ? d = [...d, ...i(2, s.pageTotal)] : s.page < o - 2 ? d = [...d, ...i(2, o - 2), h(), ...i(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - o + 3 ? d = [...d, h(), ...i(s.pageTotal - o + 3, s.pageTotal)] : d = [...d, h(), ...i(s.page - Math.ceil((o - 4) / 2), s.page + Math.floor((o - 4) / 2)), h(), ...i(s.pageTotal, s.pageTotal)]), d;
}
function xx({
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
      url: typeof n == "function" ? n(h) : Ft(n, h)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(e) : Ft(l, e), s.menu = { ...s.menu, className: F((c = s.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ _n(Up, { type: "dropdown", dropdown: s, ...r });
}
function Sx({
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
    const p = qr(s, d);
    c && !c({ info: p, event: v }) || (v.target.href = i.url = typeof _ == "function" ? _(p) : Ft(_, p));
  }, f = qr(s, e || 0);
  return i.url = typeof _ == "function" ? _(f) : Ft(_, f), i.className = F("input-group-addon", i.className), /* @__PURE__ */ _n("div", { className: F("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ _n("input", { type: "number", class: "form-control", max: s.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ _n(de, { type: o, ...i, onClick: a })
  ] });
}
var No;
let Cx = (No = class extends ko {
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
}, M(No, "NAME", "pager"), M(No, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), M(No, "ItemComponents", {
  ...ko.ItemComponents,
  link: bx,
  info: $x,
  nav: kx,
  "size-menu": xx,
  goto: Sx
}), No);
class sh extends Mt {
}
M(sh, "NAME", "pager"), M(sh, "Component", Cx);
var fy, bt, hy, pr, lh, dy = {}, py = [], Ex = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function rn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function my(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ea(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++hy };
  return s == null && bt.vnode != null && bt.vnode(r), r;
}
function Tx() {
  return { current: null };
}
function V_(t) {
  return t.children;
}
function un(t, e) {
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
function ch(t) {
  (!t.__d && (t.__d = !0) && pr.push(t) && !_l.__r++ || lh !== bt.debounceRendering) && ((lh = bt.debounceRendering) || setTimeout)(_l);
}
function _l() {
  for (var t; _l.__r = pr.length; )
    t = pr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), pr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = rn({}, r)).__v = r.__v + 1, wy(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Gr(r), r.__h), Lx(o, r), r.__e != l && gy(r)));
    });
}
function yy(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || py, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ea(null, a, null, null, a) : Array.isArray(a) ? Ea(V_, { children: a }, null, null, null) : a.__b > 0 ? Ea(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      wy(t, a, u = u || dy, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = vy(a, _, t) : _ = by(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Gr(u));
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
function Ax(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ul(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ul(t, r, e[r], n[r], o);
}
function ah(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ex.test(e) ? n : n + "px";
}
function ul(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || ah(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || ah(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? uh : _h, r) : t.removeEventListener(e, r ? uh : _h, r);
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
function _h(t) {
  this.l[t.type + !1](bt.event ? bt.event(t) : t);
}
function uh(t) {
  this.l[t.type + !0](bt.event ? bt.event(t) : t);
}
function wy(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = bt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new un(p, g), i.constructor = b, i.render = Rx), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = rn({}, i.__s)), rn(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = rn(rn({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === V_ && h.key == null ? h.props.children : h, yy(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Mx(n.__e, e, n, o, s, r, l, _);
    (h = bt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), bt.__e(k, e, n);
  }
}
function Lx(t, e) {
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
function Mx(t, e, n, o, s, r, l, c) {
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
    if (r = r && fy.call(t.childNodes), h = (d = n.props || dy).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Ax(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, yy(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Gr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && my(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && ul(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && ul(t, "checked", f, d.checked, !1));
  }
  return t;
}
function $y(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    bt.__e(o, n);
  }
}
function ky(t, e, n) {
  var o, s;
  if (bt.unmount && bt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || $y(o, null, e)), (o = t.__c) != null) {
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
      o[s] && ky(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || my(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Rx(t, e, n) {
  return this.constructor(t, n);
}
fy = py.slice, bt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, hy = 0, un.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = rn({}, this.state), typeof t == "function" && (t = t(rn({}, n), this.props)), t && rn(n, t), t != null && this.__v && (e && this._sb.push(e), ch(this));
}, un.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ch(this));
}, un.prototype.render = V_, pr = [], _l.__r = 0;
var Dx = 0;
function ot(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Dx, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return bt.vnode && bt.vnode(_), _;
}
let Nx = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Xl;
class Px extends un {
  constructor() {
    super(...arguments);
    T(this, Xl, (n) => {
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
    return c.length ? i = /* @__PURE__ */ ot("div", { className: "picker-multi-selections", children: c.map((d, u) => /* @__PURE__ */ ot("div", { className: "picker-multi-selection", children: [
      d.text ?? d.value,
      /* @__PURE__ */ ot("div", { className: "picker-deselect-btn btn", onClick: y(this, Xl), "data-idx": u, children: /* @__PURE__ */ ot("span", { className: "close" }) })
    ] })) }) : i = /* @__PURE__ */ ot("span", { className: "picker-select-placeholder", children: r }), /* @__PURE__ */ ot(
      "div",
      {
        className: F("picker-select picker-select-multi form-control", n, { disabled: s, focused: l }),
        style: o,
        onClick: _,
        children: [
          i,
          h,
          /* @__PURE__ */ ot("span", { class: "caret" })
        ]
      }
    );
  }
}
Xl = new WeakMap();
var Jl;
class Ox extends un {
  constructor() {
    super(...arguments);
    T(this, Jl, (n) => {
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
    } = this.props, [d] = c, u = d ? /* @__PURE__ */ ot("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ ot("span", { className: "picker-select-placeholder", children: r }), a = d && _ ? /* @__PURE__ */ ot("button", { type: "button", className: "btn picker-deselect-btn", onClick: y(this, Jl), children: /* @__PURE__ */ ot("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ ot(
      "div",
      {
        className: F("picker-select picker-select-single form-control", n, { disabled: s, focused: l }),
        style: o,
        onClick: h,
        children: [
          u,
          i,
          a,
          /* @__PURE__ */ ot("span", { class: "caret" })
        ]
      }
    );
  }
}
Jl = new WeakMap();
var Kl, xy, mi, Zl, gi, Ql;
class Hx extends un {
  constructor() {
    super(...arguments);
    T(this, Kl);
    M(this, "state", { keys: "", shown: !1 });
    T(this, mi, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    T(this, Zl, ({ item: n }) => {
      const o = this.props.items.find((s) => s.value === n.key);
      o && this.props.onSelectItem(o);
    });
    T(this, gi, (n) => {
      this.setState({ keys: n.target.value });
    });
    T(this, Ql, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", y(this, mi)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", y(this, mi));
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
    return /* @__PURE__ */ ot("div", { className: F("picker-menu", s, { shown: d, "has-search": a }), id: `picker-menu-${n}`, style: { maxHeight: l, maxWidth: c, width: _, ...r }, children: [
      o ? /* @__PURE__ */ ot("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ ot("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: i, value: u, onChange: y(this, gi), onInput: y(this, gi) }),
        a ? /* @__PURE__ */ ot("button", { type: "button", className: "btn picker-menu-search-clear", onClick: y(this, Ql), children: /* @__PURE__ */ ot("span", { className: "close" }) }) : /* @__PURE__ */ ot("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ ot(p_, { className: "picker-menu-list", items: W(this, Kl, xy).call(this), onClickItem: y(this, Zl), ...h })
    ] });
  }
}
Kl = new WeakSet(), xy = function() {
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
      typeof u == "string" && r.length && (u = /* @__PURE__ */ ot("span", { dangerouslySetInnerHTML: { __html: r.reduce((a, f) => a.replace(f, `<span class="picker-menu-item-match">${f}</span>`), u) } })), l.push({
        key: _,
        active: s.has(_),
        text: u,
        ...d
      });
    }
    return l;
  }, []);
}, mi = new WeakMap(), Zl = new WeakMap(), gi = new WeakMap(), Ql = new WeakMap();
function fh(t) {
  const e = /* @__PURE__ */ new Set();
  return t.reduce((n, o) => (e.has(o) || (e.add(o), n.push(o)), n), []);
}
var Na, yi, vi, bi, _o, ys, wi, Za, tc, Sy, ec, Cy, nc, oc, rc, ic, sc, Ey;
let Wx = (Na = class extends un {
  constructor(n) {
    super(n);
    T(this, _o);
    T(this, wi);
    T(this, tc);
    T(this, ec);
    T(this, sc);
    T(this, yi, 0);
    T(this, vi, Nx());
    T(this, bi, Tx());
    T(this, nc, (n, o) => {
      const { valueList: s } = this, r = new Set(n.map((c) => c.value)), l = s.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    T(this, oc, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    T(this, rc, () => {
      this.close();
    });
    T(this, ic, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = y(this, bi).current) == null || o.hide();
      });
    });
    this.state = {
      value: W(this, tc, Sy).call(this, n.defaultValue) ?? "",
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
    return W(this, wi, Za).call(this, this.state.value);
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
      const s = ++uu(this, yi)._;
      if (await W(this, _o, ys).call(this, { loading: !0, items: [] }), n = await n(), y(this, yi) !== s)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await W(this, _o, ys).call(this, o), n;
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
    await W(this, _o, ys).call(this, { open: n }), n && this.loadItemList();
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
    } = this.props, l = r ? Px : Ox;
    return /* @__PURE__ */ ot("div", { className: F("picker", n), style: o, id: `picker-${y(this, vi)}`, children: [
      /* @__PURE__ */ ot(l, { ...W(this, ec, Cy).call(this) }),
      s,
      this.state.open ? /* @__PURE__ */ ot(Hx, { ...W(this, sc, Ey).call(this), ref: y(this, bi) }) : null
    ] });
  }
}, yi = new WeakMap(), vi = new WeakMap(), bi = new WeakMap(), _o = new WeakSet(), ys = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, wi = new WeakSet(), Za = function(n) {
  return typeof n == "string" ? fh(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? fh(n) : [];
}, tc = new WeakSet(), Sy = function(n) {
  const o = W(this, wi, Za).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, ec = new WeakSet(), Cy = function() {
  const { placeholder: n, disabled: o } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: y(this, oc),
    onDeselect: y(this, nc)
  };
}, nc = new WeakMap(), oc = new WeakMap(), rc = new WeakMap(), ic = new WeakMap(), sc = new WeakSet(), Ey = function() {
  const { search: n, menuClass: o, menuWidth: s, menuStyle: r, menuMaxHeight: l, menuMaxWidth: c } = this.props, { items: _ } = this.state;
  return {
    id: y(this, vi),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: s,
    maxHeight: l,
    maxWidth: c,
    onRequestHide: y(this, rc),
    onSelectItem: y(this, ic)
  };
}, M(Na, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), Na);
class hh extends Mt {
}
M(hh, "NAME", "picker"), M(hh, "Component", Wx);
var ca, ct, Ty, mr, dh, fl = {}, Ay = [], Ux = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function sn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ly(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function My(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ca.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return vs(t, l, o, s, null);
}
function vs(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Ty };
  return s == null && ct.vnode != null && ct.vnode(r), r;
}
function Zi() {
  return { current: null };
}
function aa(t) {
  return t.children;
}
function gr(t, e) {
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
function Ry(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ry(t);
  }
}
function ph(t) {
  (!t.__d && (t.__d = !0) && mr.push(t) && !hl.__r++ || dh !== ct.debounceRendering) && ((dh = ct.debounceRendering) || setTimeout)(hl);
}
function hl() {
  for (var t; hl.__r = mr.length; )
    t = mr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), mr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = sn({}, r)).__v = r.__v + 1, Y_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Xr(r), r.__h), Oy(o, r), r.__e != l && Ry(r)));
    });
}
function Dy(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Ay, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? vs(null, a, null, null, a) : Array.isArray(a) ? vs(aa, { children: a }, null, null, null) : a.__b > 0 ? vs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Y_(t, a, u = u || fl, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Ny(a, _, t) : _ = Py(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Xr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Wy(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Hy(p[i], p[++i], p[++i]);
}
function Ny(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Ny(o, e, n) : Py(n, o, o, s, o.__e, e));
  return e;
}
function Py(t, e, n, o, s, r) {
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
function Ix(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || dl(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || dl(t, r, e[r], n[r], o);
}
function mh(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ux.test(e) ? n : n + "px";
}
function dl(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || mh(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || mh(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? yh : gh, r) : t.removeEventListener(e, r ? yh : gh, r);
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
function gh(t) {
  this.l[t.type + !1](ct.event ? ct.event(t) : t);
}
function yh(t) {
  this.l[t.type + !0](ct.event ? ct.event(t) : t);
}
function Y_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ct.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new gr(p, g), i.constructor = b, i.render = Bx), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = sn({}, i.__s)), sn(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = ct.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = sn(sn({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === aa && h.key == null ? h.props.children : h, Dy(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Fx(n.__e, e, n, o, s, r, l, _);
    (h = ct.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ct.__e(k, e, n);
  }
}
function Oy(t, e) {
  ct.__c && ct.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ct.__e(o, n.__v);
    }
  });
}
function Fx(t, e, n, o, s, r, l, c) {
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
    if (r = r && ca.call(t.childNodes), h = (d = n.props || fl).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Ix(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Dy(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Xr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Ly(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && dl(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && dl(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Hy(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ct.__e(o, n);
  }
}
function Wy(t, e, n) {
  var o, s;
  if (ct.unmount && ct.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Hy(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ct.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Wy(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Ly(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Bx(t, e, n) {
  return this.constructor(t, n);
}
function jx(t, e, n) {
  var o, s, r;
  ct.__ && ct.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Y_(e, t = (!o && n || e).__k = My(aa, null, [t]), s || fl, fl, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? ca.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Oy(r, t);
}
ca = Ay.slice, ct = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Ty = 0, gr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = sn({}, this.state), typeof t == "function" && (t = t(sn({}, n), this.props)), t && sn(n, t), t != null && this.__v && (e && this._sb.push(e), ph(this));
}, gr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ph(this));
}, gr.prototype.render = aa, mr = [], hl.__r = 0;
var zx = 0;
function zt(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --zx, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ct.vnode && ct.vnode(_), _;
}
var pl = {}, Vx = {
  get exports() {
    return pl;
  },
  set exports(t) {
    pl = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(Rg, function() {
    var n = 1e3, o = 6e4, s = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", i = "week", d = "month", u = "quarter", a = "year", f = "date", v = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var C = ["th", "st", "nd", "rd"], x = D % 100;
      return "[" + D + (C[(x - 20) % 10] || C[x] || C[0]) + "]";
    } }, w = function(D, C, x) {
      var N = String(D);
      return !N || N.length >= C ? D : "" + Array(C + 1 - N.length).join(x) + D;
    }, $ = { s: w, z: function(D) {
      var C = -D.utcOffset(), x = Math.abs(C), N = Math.floor(x / 60), L = x % 60;
      return (C <= 0 ? "+" : "-") + w(N, 2, "0") + ":" + w(L, 2, "0");
    }, m: function D(C, x) {
      if (C.date() < x.date())
        return -D(x, C);
      var N = 12 * (x.year() - C.year()) + (x.month() - C.month()), L = C.clone().add(N, d), O = x - L < 0, P = C.clone().add(N + (O ? -1 : 1), d);
      return +(-(N + (x - L) / (O ? L - P : P - L)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: d, y: a, w: i, d: h, D: f, h: _, m: c, s: l, ms: r, Q: u }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, S = "en", A = {};
    A[S] = g;
    var E = function(D) {
      return D instanceof q;
    }, b = function D(C, x, N) {
      var L;
      if (!C)
        return S;
      if (typeof C == "string") {
        var O = C.toLowerCase();
        A[O] && (L = O), x && (A[O] = x, L = O);
        var P = C.split("-");
        if (!L && P.length > 1)
          return D(P[0]);
      } else {
        var I = C.name;
        A[I] = C, L = I;
      }
      return !N && L && (S = L), L || !N && S;
    }, k = function(D, C) {
      if (E(D))
        return D.clone();
      var x = typeof C == "object" ? C : {};
      return x.date = D, x.args = arguments, new q(x);
    }, R = $;
    R.l = b, R.i = E, R.w = function(D, C) {
      return k(D, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var q = function() {
      function D(x) {
        this.$L = b(x.locale, null, !0), this.parse(x);
      }
      var C = D.prototype;
      return C.parse = function(x) {
        this.$d = function(N) {
          var L = N.date, O = N.utc;
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
      }, C.isSame = function(x, N) {
        var L = k(x);
        return this.startOf(N) <= L && L <= this.endOf(N);
      }, C.isAfter = function(x, N) {
        return k(x) < this.startOf(N);
      }, C.isBefore = function(x, N) {
        return this.endOf(N) < k(x);
      }, C.$g = function(x, N, L) {
        return R.u(x) ? this[N] : this.set(L, x);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(x, N) {
        var L = this, O = !!R.u(N) || N, P = R.p(x), I = function(at, X) {
          var _t = R.w(L.$u ? Date.UTC(L.$y, X, at) : new Date(L.$y, X, at), L);
          return O ? _t : _t.endOf(h);
        }, V = function(at, X) {
          return R.w(L.toDate()[at].apply(L.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), L);
        }, z = this.$W, K = this.$M, St = this.$D, B = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, K) : I(0, K + 1);
          case i:
            var Q = this.$locale().weekStart || 0, xt = (z < Q ? z + 7 : z) - Q;
            return I(O ? St - xt : St + (6 - xt), K);
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
      }, C.$set = function(x, N) {
        var L, O = R.p(x), P = "set" + (this.$u ? "UTC" : ""), I = (L = {}, L[h] = P + "Date", L[f] = P + "Date", L[d] = P + "Month", L[a] = P + "FullYear", L[_] = P + "Hours", L[c] = P + "Minutes", L[l] = P + "Seconds", L[r] = P + "Milliseconds", L)[O], V = O === h ? this.$D + (N - this.$W) : N;
        if (O === d || O === a) {
          var z = this.clone().set(f, 1);
          z.$d[I](V), z.init(), this.$d = z.set(f, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          I && this.$d[I](V);
        return this.init(), this;
      }, C.set = function(x, N) {
        return this.clone().$set(x, N);
      }, C.get = function(x) {
        return this[R.p(x)]();
      }, C.add = function(x, N) {
        var L, O = this;
        x = Number(x);
        var P = R.p(N), I = function(K) {
          var St = k(O);
          return R.w(St.date(St.date() + Math.round(K * x)), O);
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
      }, C.subtract = function(x, N) {
        return this.add(-1 * x, N);
      }, C.format = function(x) {
        var N = this, L = this.$locale();
        if (!this.isValid())
          return L.invalidDate || v;
        var O = x || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), I = this.$H, V = this.$m, z = this.$M, K = L.weekdays, St = L.months, B = function(X, _t, Ht, Wt) {
          return X && (X[_t] || X(N, O)) || Ht[_t].slice(0, Wt);
        }, Q = function(X) {
          return R.s(I % 12 || 12, X, "0");
        }, xt = L.meridiem || function(X, _t, Ht) {
          var Wt = X < 12 ? "AM" : "PM";
          return Ht ? Wt.toLowerCase() : Wt;
        }, at = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: R.s(z + 1, 2, "0"), MMM: B(L.monthsShort, z, St, 3), MMMM: B(St, z), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: B(L.weekdaysMin, this.$W, K, 2), ddd: B(L.weekdaysShort, this.$W, K, 3), dddd: K[this.$W], H: String(I), HH: R.s(I, 2, "0"), h: Q(1), hh: Q(2), a: xt(I, V, !0), A: xt(I, V, !1), m: String(V), mm: R.s(V, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(X, _t) {
          return _t || at[X] || P.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(x, N, L) {
        var O, P = R.p(N), I = k(x), V = (I.utcOffset() - this.utcOffset()) * o, z = this - I, K = R.m(this, I);
        return K = (O = {}, O[a] = K / 12, O[d] = K, O[u] = K / 3, O[i] = (z - V) / 6048e5, O[h] = (z - V) / 864e5, O[_] = z / s, O[c] = z / o, O[l] = z / n, O)[P] || z, L ? K : R.a(K);
      }, C.daysInMonth = function() {
        return this.endOf(d).$D;
      }, C.$locale = function() {
        return A[this.$L];
      }, C.locale = function(x, N) {
        if (!x)
          return this.$L;
        var L = this.clone(), O = b(x, N, !0);
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
      }, D;
    }(), j = q.prototype;
    return k.prototype = j, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", f]].forEach(function(D) {
      j[D[1]] = function(C) {
        return this.$g(C, D[0], D[1]);
      };
    }), k.extend = function(D, C) {
      return D.$i || (D(C, q, k), D.$i = !0), k;
    }, k.locale = b, k.isDayjs = E, k.unix = function(D) {
      return k(1e3 * D);
    }, k.en = A[S], k.Ls = A, k.p = {}, k;
  });
})(Vx);
const Yx = (t = "00:00:00") => {
  const e = pl(`1989-01-01 ${t}`);
  return {
    hour: e.hour(),
    minute: e.minute(),
    second: e.second()
  };
};
function qx() {
  let t = new Array(24).fill(0), e = new Array(60).fill(0), n = new Array(60).fill(0);
  return t = t.map((o, s) => o + s), e = e.map((o, s) => o + s), n = n.map((o, s) => o + s), { hourList: t, minuteList: e, secondList: n };
}
class Gx extends gr {
  constructor() {
    super(...arguments);
    M(this, "cellHeight", 24);
    M(this, "ref", Zi());
    M(this, "hourRef", Zi());
    M(this, "minuteRef", Zi());
    M(this, "secondRef", Zi());
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
    const s = Yx(this.state.selectTime);
    return o.map((r) => {
      const l = s[n] === r, c = { ...s, [n]: r };
      return /* @__PURE__ */ zt(
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
    const { showSeconds: n, style: o } = this.props, { hourList: s, minuteList: r, secondList: l } = qx();
    return /* @__PURE__ */ zt("div", { className: F("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ zt("div", { className: F("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ zt("div", { className: "overflow-hidden", children: /* @__PURE__ */ zt("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", s) }) }),
        /* @__PURE__ */ zt("div", { className: "overflow-hidden", children: /* @__PURE__ */ zt("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ zt("div", { className: "overflow-hidden", children: /* @__PURE__ */ zt("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ zt("div", { className: F("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ zt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ zt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function Fi(t) {
  return t.split("-")[1];
}
function q_(t) {
  return t === "y" ? "height" : "width";
}
function Eo(t) {
  return t.split("-")[0];
}
function _a(t) {
  return ["top", "bottom"].includes(Eo(t)) ? "x" : "y";
}
function vh(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = _a(e), _ = q_(c), h = o[_] / 2 - s[_] / 2, i = Eo(e), d = c === "x";
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
  switch (Fi(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const Xx = async (t, e, n) => {
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
  } = vh(h, o, _), u = o, a = {}, f = 0;
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
      } = vh(h, u, _)), v = -1;
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
function Jx(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Uy(t) {
  return typeof t != "number" ? Jx(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ml(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Kx(t, e) {
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
  } = e, f = Uy(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = ml(await r.getClippingRect({
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
  }, S = ml(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Zx = Math.min, Qx = Math.max;
function tS(t, e, n) {
  return Qx(t, Zx(e, n));
}
const eS = (t) => ({
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
    const h = Uy(o), i = {
      x: s,
      y: r
    }, d = _a(l), u = q_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], E = w / 2 - a[u] / 2 + $, b = tS(S, E, A), R = Fi(l) != null && E != b && c.reference[u] / 2 - (E < S ? h[f] : h[v]) - a[u] / 2 < 0 ? E < S ? S - E : A - E : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: E - b
      }
    };
  }
}), nS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function gl(t) {
  return t.replace(/left|right|bottom|top/g, (e) => nS[e]);
}
function oS(t, e, n) {
  n === void 0 && (n = !1);
  const o = Fi(t), s = _a(t), r = q_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = gl(l)), {
    main: l,
    cross: gl(l)
  };
}
const rS = {
  start: "end",
  end: "start"
};
function Qa(t) {
  return t.replace(/start|end/g, (e) => rS[e]);
}
function iS(t) {
  const e = gl(t);
  return [Qa(t), e, Qa(e)];
}
function sS(t, e, n) {
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
function lS(t, e, n, o) {
  const s = Fi(t);
  let r = sS(Eo(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(Qa)))), r;
}
const cS = function(t) {
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
      } = t, p = Eo(o), m = Eo(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [gl(l)] : iS(l));
      !d && a !== "none" && w.push(...lS(l, f, a, g));
      const $ = [l, ...w], S = await Kx(e, v), A = [];
      let E = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = oS(o, r, g);
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
            const D = (k = E.map((C) => [C, C.overflows.filter((x) => x > 0).reduce((x, N) => x + N, 0)]).sort((C, x) => C[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            D && (j = D);
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
async function aS(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = Eo(n), c = Fi(n), _ = _a(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const _S = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await aS(e, t);
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
function dn(t) {
  return Fy(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Qi;
function Iy() {
  if (Qi)
    return Qi;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Qi = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Qi) : navigator.userAgent;
}
function De(t) {
  return t instanceof Zt(t).HTMLElement;
}
function ie(t) {
  return t instanceof Zt(t).Element;
}
function Fy(t) {
  return t instanceof Zt(t).Node;
}
function bh(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Zt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function ua(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = ge(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function uS(t) {
  return ["table", "td", "th"].includes(dn(t));
}
function G_(t) {
  const e = /firefox/i.test(Iy()), n = ge(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function By() {
  return !/^((?!chrome|android).)*safari/i.test(Iy());
}
function X_(t) {
  return ["html", "body", "#document"].includes(dn(t));
}
const wh = Math.min, yr = Math.max, yl = Math.round;
function jy(t) {
  const e = ge(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = yl(n) !== s || yl(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function zy(t) {
  return ie(t) ? t : t.contextElement;
}
const Vy = {
  x: 1,
  y: 1
};
function Yn(t) {
  const e = zy(t);
  if (!De(e))
    return Vy;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = jy(e);
  let l = (r ? yl(n.width) : n.width) / o, c = (r ? yl(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Hn(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = zy(t);
  let _ = Vy;
  e && (o ? ie(o) && (_ = Yn(o)) : _ = Yn(t));
  const h = c ? Zt(c) : window, i = !By() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const v = Zt(c), p = o && ie(o) ? Zt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = Yn(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
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
function bn(t) {
  return ((Fy(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function fa(t) {
  return ie(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Yy(t) {
  return Hn(bn(t)).left + fa(t).scrollLeft;
}
function fS(t, e, n) {
  const o = De(e), s = bn(e), r = Hn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((dn(e) !== "body" || ua(s)) && (l = fa(e)), De(e)) {
      const _ = Hn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = Yy(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Jr(t) {
  if (dn(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (bh(t) ? t.host : null) || // Fallback
    bn(t)
  );
  return bh(e) ? e.host : e;
}
function $h(t) {
  return !De(t) || ge(t).position === "fixed" ? null : t.offsetParent;
}
function hS(t) {
  let e = Jr(t);
  for (; De(e) && !X_(e); ) {
    if (G_(e))
      return e;
    e = Jr(e);
  }
  return null;
}
function kh(t) {
  const e = Zt(t);
  let n = $h(t);
  for (; n && uS(n) && ge(n).position === "static"; )
    n = $h(n);
  return n && (dn(n) === "html" || dn(n) === "body" && ge(n).position === "static" && !G_(n)) ? e : n || hS(t) || e;
}
function dS(t) {
  return jy(t);
}
function pS(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const s = De(n), r = bn(n);
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
  if ((s || !s && o !== "fixed") && ((dn(n) !== "body" || ua(r)) && (l = fa(n)), De(n))) {
    const h = Hn(n);
    c = Yn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function mS(t, e) {
  const n = Zt(t), o = bn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = By();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function gS(t) {
  var e;
  const n = bn(t), o = fa(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = yr(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = yr(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + Yy(t);
  const _ = -o.scrollTop;
  return ge(s || n).direction === "rtl" && (c += yr(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function qy(t) {
  const e = Jr(t);
  return X_(e) ? t.ownerDocument.body : De(e) && ua(e) ? e : qy(e);
}
function vr(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = qy(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Zt(o);
  return s ? e.concat(r, r.visualViewport || [], ua(o) ? o : []) : e.concat(o, vr(o));
}
function yS(t, e) {
  const n = Hn(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = De(t) ? Yn(t) : {
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
function xh(t, e, n) {
  return e === "viewport" ? ml(mS(t, n)) : ie(e) ? yS(e, n) : ml(gS(bn(t)));
}
function vS(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = vr(t).filter((c) => ie(c) && dn(c) !== "body"), s = null;
  const r = ge(t).position === "fixed";
  let l = r ? Jr(t) : t;
  for (; ie(l) && !X_(l); ) {
    const c = ge(l), _ = G_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Jr(l);
  }
  return e.set(t, o), o;
}
function bS(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? vS(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = xh(e, i, s);
    return h.top = yr(d.top, h.top), h.right = wh(d.right, h.right), h.bottom = wh(d.bottom, h.bottom), h.left = yr(d.left, h.left), h;
  }, xh(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const wS = {
  getClippingRect: bS,
  convertOffsetParentRelativeRectToViewportRelativeRect: pS,
  isElement: ie,
  getDimensions: dS,
  getOffsetParent: kh,
  getDocumentElement: bn,
  getScale: Yn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || kh, r = this.getDimensions;
    return {
      reference: fS(e, await s(n), o),
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
function $S(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...ie(t) ? vr(t) : t.contextElement ? vr(t.contextElement) : [], ...vr(e)] : [];
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
  let d, u = c ? Hn(t) : null;
  c && a();
  function a() {
    const f = Hn(t);
    u && (f.x !== u.x || f.y !== u.y || f.width !== u.width || f.height !== u.height) && n(), u = f, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var f;
    h.forEach((v) => {
      _ && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), (f = i) == null || f.disconnect(), i = null, c && cancelAnimationFrame(d);
  };
}
const kS = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: wS,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return Xx(t, e, {
    ...s,
    platform: r
  });
};
var uo, fo, An, $i, Dt, ki, xi, t_, lc, Gy, cc, Xy, ac, Jy, _c, Ky, uc, Zy, fc, Qy, hc, tv, dc;
const kn = class extends le {
  constructor() {
    super(...arguments);
    T(this, xi);
    T(this, lc);
    T(this, cc);
    T(this, ac);
    T(this, _c);
    T(this, uc);
    T(this, fc);
    T(this, hc);
    T(this, uo, void 0);
    T(this, fo, 0);
    T(this, An, void 0);
    T(this, $i, void 0);
    T(this, Dt, void 0);
    T(this, ki, void 0);
    M(this, "hideLater", () => {
      y(this, dc).call(this), H(this, fo, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, dc, () => {
      clearTimeout(y(this, fo)), H(this, fo, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, An)) == null ? void 0 : n.classList.contains(kn.CLASS_SHOW);
  }
  get timepicker() {
    return y(this, An) || W(this, cc, Xy).call(this);
  }
  get trigger() {
    return y(this, $i) || this.element;
  }
  get elementShowClass() {
    return `with-${kn.NAME}-show`;
  }
  show(n) {
    return H(this, $i, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(kn.CLASS_SHOW), W(this, fc, Qy).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = y(this, ki)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, An)) == null || o.classList.remove(kn.CLASS_SHOW), !0;
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
let qt = kn;
uo = new WeakMap(), fo = new WeakMap(), An = new WeakMap(), $i = new WeakMap(), Dt = new WeakMap(), ki = new WeakMap(), xi = new WeakSet(), t_ = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, lc = new WeakSet(), Gy = function() {
  const n = W(this, xi, t_).call(this);
  return H(this, Dt, document.createElement("div")), y(this, Dt).style.position = "absolute", y(this, Dt).style.width = `${n}px`, y(this, Dt).style.height = `${n}px`, y(this, Dt).style.transform = "rotate(45deg)", y(this, Dt);
}, cc = new WeakSet(), Xy = function() {
  const n = kn.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), jx(My(Gx, { ...this.options }), o), this.options.arrow && o.append(W(this, lc, Gy).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, An, o), o;
}, ac = new WeakSet(), Jy = function() {
  var l;
  const n = W(this, xi, t_).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [_S(n), cS()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && y(this, Dt) && ((l = r.middleware) == null || l.push(eS({ element: y(this, Dt) }))), r;
}, _c = new WeakSet(), Ky = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, uc = new WeakSet(), Zy = function(n) {
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
}, fc = new WeakSet(), Qy = function() {
  const n = W(this, ac, Jy).call(this), o = W(this, hc, tv).call(this);
  H(this, ki, $S(o, this.timepicker, () => {
    kS(o, this.timepicker, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.timepicker.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, _c, Ky).call(this, _);
      if (l.arrow && y(this, Dt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(y(this, Dt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Dt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, uc, Zy).call(this, _)
        });
      }
    });
  }));
}, hc = new WeakSet(), tv = function() {
  return y(this, uo) || H(this, uo, {
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
  }), y(this, uo);
}, dc = new WeakMap(), M(qt, "NAME", "timepicker"), M(qt, "CLASSNAME", "timepicker"), M(qt, "CLASS_SHOW", "show"), M(qt, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), M(qt, "DEFAULT", {
  value: pl().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(qt.MENU_SELECTOR);
  n ? qt.ensure(n).toggle() : qt.clear({ event: t });
});
const xS = (t) => {
  const e = document.getElementsByClassName("with-timepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(qt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || qt.clear({ event: t });
};
window.addEventListener("scroll", xS, !0);
class Sh extends Mt {
}
M(Sh, "NAME", "toolbar"), M(Sh, "Component", ko);
function Bi(t) {
  return t.split("-")[1];
}
function J_(t) {
  return t === "y" ? "height" : "width";
}
function To(t) {
  return t.split("-")[0];
}
function ha(t) {
  return ["top", "bottom"].includes(To(t)) ? "x" : "y";
}
function Ch(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = ha(e), _ = J_(c), h = o[_] / 2 - s[_] / 2, i = To(e), d = c === "x";
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
  switch (Bi(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const SS = async (t, e, n) => {
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
  } = Ch(h, o, _), u = o, a = {}, f = 0;
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
      } = Ch(h, u, _)), v = -1;
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
function CS(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ev(t) {
  return typeof t != "number" ? CS(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function vl(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function ES(t, e) {
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
  } = e, f = ev(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = vl(await r.getClippingRect({
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
  }, S = vl(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const TS = Math.min, AS = Math.max;
function LS(t, e, n) {
  return AS(t, TS(e, n));
}
const MS = (t) => ({
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
    const h = ev(o), i = {
      x: s,
      y: r
    }, d = ha(l), u = J_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], E = w / 2 - a[u] / 2 + $, b = LS(S, E, A), R = Bi(l) != null && E != b && c.reference[u] / 2 - (E < S ? h[f] : h[v]) - a[u] / 2 < 0 ? E < S ? S - E : A - E : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: E - b
      }
    };
  }
}), RS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function bl(t) {
  return t.replace(/left|right|bottom|top/g, (e) => RS[e]);
}
function DS(t, e, n) {
  n === void 0 && (n = !1);
  const o = Bi(t), s = ha(t), r = J_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = bl(l)), {
    main: l,
    cross: bl(l)
  };
}
const NS = {
  start: "end",
  end: "start"
};
function e_(t) {
  return t.replace(/start|end/g, (e) => NS[e]);
}
function PS(t) {
  const e = bl(t);
  return [e_(t), e, e_(e)];
}
function OS(t, e, n) {
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
function HS(t, e, n, o) {
  const s = Bi(t);
  let r = OS(To(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(e_)))), r;
}
const WS = function(t) {
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
      } = t, p = To(o), m = To(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [bl(l)] : PS(l));
      !d && a !== "none" && w.push(...HS(l, f, a, g));
      const $ = [l, ...w], S = await ES(e, v), A = [];
      let E = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = DS(o, r, g);
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
            const D = (k = E.map((C) => [C, C.overflows.filter((x) => x > 0).reduce((x, N) => x + N, 0)]).sort((C, x) => C[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            D && (j = D);
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
async function US(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = To(n), c = Bi(n), _ = ha(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const IS = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await US(e, t);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
function Qt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ye(t) {
  return Qt(t).getComputedStyle(t);
}
function pn(t) {
  return ov(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ts;
function nv() {
  if (ts)
    return ts;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ts = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ts) : navigator.userAgent;
}
function Ne(t) {
  return t instanceof Qt(t).HTMLElement;
}
function se(t) {
  return t instanceof Qt(t).Element;
}
function ov(t) {
  return t instanceof Qt(t).Node;
}
function Eh(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Qt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function da(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = ye(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function FS(t) {
  return ["table", "td", "th"].includes(pn(t));
}
function K_(t) {
  const e = /firefox/i.test(nv()), n = ye(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function rv() {
  return !/^((?!chrome|android).)*safari/i.test(nv());
}
function Z_(t) {
  return ["html", "body", "#document"].includes(pn(t));
}
const Th = Math.min, br = Math.max, wl = Math.round;
function iv(t) {
  const e = ye(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = wl(n) !== s || wl(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function sv(t) {
  return se(t) ? t : t.contextElement;
}
const lv = {
  x: 1,
  y: 1
};
function qn(t) {
  const e = sv(t);
  if (!Ne(e))
    return lv;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = iv(e);
  let l = (r ? wl(n.width) : n.width) / o, c = (r ? wl(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Wn(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = sv(t);
  let _ = lv;
  e && (o ? se(o) && (_ = qn(o)) : _ = qn(t));
  const h = c ? Qt(c) : window, i = !rv() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const v = Qt(c), p = o && se(o) ? Qt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = qn(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat($.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat($.paddingTop)) * g.y, d *= g.x, u *= g.y, a *= g.x, f *= g.y, d += w.x, u += w.y, m = Qt(m).frameElement;
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
function wn(t) {
  return ((ov(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function pa(t) {
  return se(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function cv(t) {
  return Wn(wn(t)).left + pa(t).scrollLeft;
}
function BS(t, e, n) {
  const o = Ne(e), s = wn(e), r = Wn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((pn(e) !== "body" || da(s)) && (l = pa(e)), Ne(e)) {
      const _ = Wn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = cv(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Kr(t) {
  if (pn(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (Eh(t) ? t.host : null) || // Fallback
    wn(t)
  );
  return Eh(e) ? e.host : e;
}
function Ah(t) {
  return !Ne(t) || ye(t).position === "fixed" ? null : t.offsetParent;
}
function jS(t) {
  let e = Kr(t);
  for (; Ne(e) && !Z_(e); ) {
    if (K_(e))
      return e;
    e = Kr(e);
  }
  return null;
}
function Lh(t) {
  const e = Qt(t);
  let n = Ah(t);
  for (; n && FS(n) && ye(n).position === "static"; )
    n = Ah(n);
  return n && (pn(n) === "html" || pn(n) === "body" && ye(n).position === "static" && !K_(n)) ? e : n || jS(t) || e;
}
function zS(t) {
  return iv(t);
}
function VS(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const s = Ne(n), r = wn(n);
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
  if ((s || !s && o !== "fixed") && ((pn(n) !== "body" || da(r)) && (l = pa(n)), Ne(n))) {
    const h = Wn(n);
    c = qn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function YS(t, e) {
  const n = Qt(t), o = wn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = rv();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function qS(t) {
  var e;
  const n = wn(t), o = pa(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = br(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = br(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + cv(t);
  const _ = -o.scrollTop;
  return ye(s || n).direction === "rtl" && (c += br(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function av(t) {
  const e = Kr(t);
  return Z_(e) ? t.ownerDocument.body : Ne(e) && da(e) ? e : av(e);
}
function wr(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = av(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Qt(o);
  return s ? e.concat(r, r.visualViewport || [], da(o) ? o : []) : e.concat(o, wr(o));
}
function GS(t, e) {
  const n = Wn(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Ne(t) ? qn(t) : {
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
function Mh(t, e, n) {
  return e === "viewport" ? vl(YS(t, n)) : se(e) ? GS(e, n) : vl(qS(wn(t)));
}
function XS(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = wr(t).filter((c) => se(c) && pn(c) !== "body"), s = null;
  const r = ye(t).position === "fixed";
  let l = r ? Kr(t) : t;
  for (; se(l) && !Z_(l); ) {
    const c = ye(l), _ = K_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Kr(l);
  }
  return e.set(t, o), o;
}
function JS(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? XS(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = Mh(e, i, s);
    return h.top = br(d.top, h.top), h.right = Th(d.right, h.right), h.bottom = Th(d.bottom, h.bottom), h.left = br(d.left, h.left), h;
  }, Mh(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const KS = {
  getClippingRect: JS,
  convertOffsetParentRelativeRectToViewportRelativeRect: VS,
  isElement: se,
  getDimensions: zS,
  getOffsetParent: Lh,
  getDocumentElement: wn,
  getScale: qn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || Lh, r = this.getDimensions;
    return {
      reference: BS(e, await s(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => ye(t).direction === "rtl"
};
function ZS(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...se(t) ? wr(t) : t.contextElement ? wr(t.contextElement) : [], ...wr(e)] : [];
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
    }), se(t) && !c && i.observe(t), !se(t) && t.contextElement && !c && i.observe(t.contextElement), i.observe(e);
  }
  let d, u = c ? Wn(t) : null;
  c && a();
  function a() {
    const f = Wn(t);
    u && (f.x !== u.x || f.y !== u.y || f.width !== u.width || f.height !== u.height) && n(), u = f, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var f;
    h.forEach((v) => {
      _ && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), (f = i) == null || f.disconnect(), i = null, c && cancelAnimationFrame(d);
  };
}
const QS = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: KS,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return SS(t, e, {
    ...s,
    platform: r
  });
};
var ho, po, mo, Ln, Nt, pc, Si, Ci, n_, mc, _v, gc, uv, yc, fv, vc, hv, bc, dv, wc, pv, $c, mv, go, kc, gv;
const xn = class extends le {
  constructor() {
    super(...arguments);
    T(this, Ci);
    T(this, mc);
    T(this, gc);
    T(this, yc);
    T(this, vc);
    T(this, bc);
    T(this, wc);
    T(this, $c);
    T(this, kc);
    T(this, ho, !1);
    T(this, po, void 0);
    T(this, mo, 0);
    T(this, Ln, void 0);
    T(this, Nt, void 0);
    T(this, pc, void 0);
    T(this, Si, void 0);
    M(this, "hideLater", () => {
      y(this, go).call(this), H(this, mo, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, go, () => {
      clearTimeout(y(this, mo)), H(this, mo, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, Ln)) == null ? void 0 : n.classList.contains(xn.CLASS_SHOW);
  }
  get tooltip() {
    return y(this, Ln) || W(this, gc, uv).call(this);
  }
  get trigger() {
    return y(this, pc) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${xn.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !y(this, ho) && this.isHover && W(this, kc, gv).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(xn.CLASS_SHOW), W(this, wc, pv).call(this), !0;
  }
  hide() {
    var n, o;
    return (n = y(this, Si)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, Ln)) == null || o.classList.remove(xn.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    y(this, ho) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", y(this, go)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, s = this.getAll().entries(), r = new Set(o || []);
    for (const [l, c] of s)
      r.has(l) || c.hide();
  }
};
let Gt = xn;
ho = new WeakMap(), po = new WeakMap(), mo = new WeakMap(), Ln = new WeakMap(), Nt = new WeakMap(), pc = new WeakMap(), Si = new WeakMap(), Ci = new WeakSet(), n_ = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, mc = new WeakSet(), _v = function() {
  const n = W(this, Ci, n_).call(this);
  return H(this, Nt, document.createElement("div")), y(this, Nt).style.position = this.options.strategy, y(this, Nt).style.width = `${n}px`, y(this, Nt).style.height = `${n}px`, y(this, Nt).style.transform = "rotate(45deg)", y(this, Nt);
}, gc = new WeakSet(), uv = function() {
  var s;
  const n = xn.TOOLTIP_CLASS;
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
  if (this.options.arrow && (o == null || o.append(W(this, mc, _v).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, Ln, o), o;
}, yc = new WeakSet(), fv = function() {
  var l;
  const n = W(this, Ci, n_).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [IS(n), WS()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && y(this, Nt) && ((l = r.middleware) == null || l.push(MS({ element: y(this, Nt) }))), r;
}, vc = new WeakSet(), hv = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, bc = new WeakSet(), dv = function(n) {
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
}, wc = new WeakSet(), pv = function() {
  const n = W(this, yc, fv).call(this), o = W(this, $c, mv).call(this);
  H(this, Si, ZS(o, this.tooltip, () => {
    QS(o, this.tooltip, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.tooltip.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, vc, hv).call(this, _);
      if (l.arrow && y(this, Nt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(y(this, Nt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Nt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, bc, dv).call(this, _)
        });
      }
    });
  }));
}, $c = new WeakSet(), mv = function() {
  return y(this, po) || H(this, po, {
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
  }), y(this, po);
}, go = new WeakMap(), kc = new WeakSet(), gv = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", y(this, go)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, ho, !0);
}, M(Gt, "NAME", "tooltip"), M(Gt, "TOOLTIP_CLASS", "tooltip"), M(Gt, "CLASS_SHOW", "show"), M(Gt, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), M(Gt, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(t) {
  var o;
  const e = t.target, n = (o = e.closest) == null ? void 0 : o.call(e, Gt.MENU_SELECTOR);
  if (n) {
    const s = Gt.ensure(n);
    s.options.trigger === "click" && s.toggle();
  } else
    Gt.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  var s;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, Gt.MENU_SELECTOR);
  if (!n)
    return;
  const o = Gt.ensure(n);
  o.isHover && o.show();
});
var yv, wt, vv, $r, Rh, bv = {}, wv = [], tC = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ln(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function $v(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ta(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++vv };
  return s == null && wt.vnode != null && wt.vnode(r), r;
}
function Q_(t) {
  return t.children;
}
function kr(t, e) {
  this.props = t, this.context = e;
}
function Zr(t, e) {
  if (e == null)
    return t.__ ? Zr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Zr(t) : null;
}
function kv(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return kv(t);
  }
}
function Dh(t) {
  (!t.__d && (t.__d = !0) && $r.push(t) && !$l.__r++ || Rh !== wt.debounceRendering) && ((Rh = wt.debounceRendering) || setTimeout)($l);
}
function $l() {
  for (var t; $l.__r = $r.length; )
    t = $r.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), $r = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = ln({}, r)).__v = r.__v + 1, Ev(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Zr(r), r.__h), nC(o, r), r.__e != l && kv(r)));
    });
}
function xv(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || wv, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ta(null, a, null, null, a) : Array.isArray(a) ? Ta(Q_, { children: a }, null, null, null) : a.__b > 0 ? Ta(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Ev(t, a, u = u || bv, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Sv(a, _, t) : _ = Cv(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Zr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Av(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Tv(p[i], p[++i], p[++i]);
}
function Sv(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Sv(o, e, n) : Cv(n, o, o, s, o.__e, e));
  return e;
}
function Cv(t, e, n, o, s, r) {
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
function eC(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || kl(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || kl(t, r, e[r], n[r], o);
}
function Nh(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || tC.test(e) ? n : n + "px";
}
function kl(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Nh(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Nh(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Oh : Ph, r) : t.removeEventListener(e, r ? Oh : Ph, r);
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
function Ph(t) {
  this.l[t.type + !1](wt.event ? wt.event(t) : t);
}
function Oh(t) {
  this.l[t.type + !0](wt.event ? wt.event(t) : t);
}
function Ev(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = wt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new kr(p, g), i.constructor = b, i.render = rC), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = ln({}, i.__s)), ln(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = ln(ln({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Q_ && h.key == null ? h.props.children : h, xv(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = oC(n.__e, e, n, o, s, r, l, _);
    (h = wt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), wt.__e(k, e, n);
  }
}
function nC(t, e) {
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
function oC(t, e, n, o, s, r, l, c) {
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
    if (r = r && yv.call(t.childNodes), h = (d = n.props || bv).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (eC(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, xv(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Zr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && $v(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && kl(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && kl(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Tv(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    wt.__e(o, n);
  }
}
function Av(t, e, n) {
  var o, s;
  if (wt.unmount && wt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Tv(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Av(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || $v(t.__e), t.__ = t.__e = t.__d = void 0;
}
function rC(t, e, n) {
  return this.constructor(t, n);
}
yv = wv.slice, wt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, vv = 0, kr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ln({}, this.state), typeof t == "function" && (t = t(ln({}, n), this.props)), t && ln(n, t), t != null && this.__v && (e && this._sb.push(e), Dh(this));
}, kr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Dh(this));
}, kr.prototype.render = Q_, $r = [], $l.__r = 0;
var iC = 0;
function xl(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --iC, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return wt.vnode && wt.vnode(_), _;
}
function sC({
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
  d ? a = d(t, c) : l ? a = /* @__PURE__ */ xl(l, { ...h }) : a = c;
  const { left: f, top: v, width: p, height: m } = o;
  return /* @__PURE__ */ xl("div", { style: { width: p, height: m, left: f + s, top: v + r, ...n }, ...u, children: [
    a,
    i
  ] });
}
function lC(t, e, n = 0, o = 0) {
  const s = t.left + n, r = t.top + o;
  return !(s > e.left + e.width || r > e.top + e.height || s + t.width < e.left || r + t.height < e.top);
}
let cC = class extends kr {
  render() {
    const { width: e, height: n, cells: o, left: s, top: r, visibleBounding: l, onRenderCell: c, style: _, children: h, offsetX: i = 0, offsetY: d = 0, ...u } = this.props, a = l ? o.filter((f) => lC(f.bounding, l, i, d)) : o;
    return /* @__PURE__ */ xl("div", { style: { width: e, height: n, left: s, top: r, ..._ }, ...u, children: [
      a.map((f) => /* @__PURE__ */ xl(sC, { offsetX: i, offsetY: d, ...f })),
      h
    ] });
  }
};
class Hh extends Mt {
}
M(Hh, "NAME", "virtualgrid"), M(Hh, "Component", cC);
var ee, Ei, Ti, je, Ct, et, xc, Lv, Sc, Mv, Ai, o_, Cc, Rv, Ec, Dv, Li, r_, Tc, Nv, Ac, Pv, Lc, Ov;
class aC {
  constructor(e, n = {}) {
    T(this, xc);
    T(this, Sc);
    T(this, Ai);
    T(this, Cc);
    T(this, Ec);
    T(this, Li);
    T(this, Tc);
    T(this, Ac);
    T(this, Lc);
    T(this, ee, void 0);
    T(this, Ei, void 0);
    T(this, Ti, void 0);
    T(this, je, void 0);
    T(this, Ct, void 0);
    T(this, et, new XMLHttpRequest());
    var o, s;
    if (H(this, Ct, n), H(this, ee, e instanceof HTMLFormElement ? e : document.querySelector(e)), !(y(this, ee) instanceof HTMLFormElement))
      throw new Error("Param form must be a HTMLFormElement.");
    if (H(this, Ti, (this.formEl.method ?? n.method ?? "POST").toUpperCase()), !["GET", "POST"].includes(this.method))
      throw new Error('Method must be "GET" or "POST"!');
    if (this.method === "GET" && (y(this, Ct).formType = "AJAX"), H(this, Ei, y(this, ee).action ?? n.url ?? ""), !this.url)
      throw new Error("Form action is required!");
    (o = this.formEl.querySelector("[data-type=submit]")) == null || o.addEventListener("click", () => {
      this.submit();
    }), (s = this.formEl.querySelector("[data-type=reset]")) == null || s.addEventListener("click", () => {
      this.reset();
    });
  }
  get responseType() {
    return y(this, Ct).responseType ?? "json";
  }
  get formType() {
    return y(this, Ct).formType ?? "AJAX";
  }
  get url() {
    return y(this, Ei);
  }
  get method() {
    return y(this, Ti);
  }
  get formEl() {
    return y(this, ee);
  }
  get onLoad() {
    return y(this, Ct).onLoad;
  }
  get onError() {
    return y(this, Ct).onError;
  }
  get onLoadend() {
    return y(this, Ct).onLoadend;
  }
  get onLoadstart() {
    return y(this, Ct).onLoadstart;
  }
  get onProgress() {
    return y(this, Ct).onProgress;
  }
  get onAbort() {
    return y(this, Ct).onAbort;
  }
  get onTimeout() {
    return y(this, Ct).onTimeout;
  }
  get beforeSubmit() {
    return y(this, Ct).beforeSubmit;
  }
  get generateGetURL() {
    return y(this, Ct).generateGetURL;
  }
  get formData() {
    return y(this, je);
  }
  get headers() {
    return y(this, Ct).headers;
  }
  get rules() {
    return y(this, Ct).rules;
  }
  get timeout() {
    return y(this, Ct).timeout;
  }
  get status() {
    return y(this, et).status;
  }
  get statusText() {
    return y(this, et).statusText;
  }
  get readyState() {
    return y(this, et).readyState;
  }
  get response() {
    return y(this, et).response;
  }
  get responseXML() {
    return y(this, et).responseXML;
  }
  get responseText() {
    return y(this, et).responseText;
  }
  get responseURL() {
    return y(this, et).responseURL;
  }
  get withCredentials() {
    return y(this, et).withCredentials;
  }
  get upload() {
    return y(this, et).upload;
  }
  submit() {
    W(this, Ec, Dv).call(this), W(this, Cc, Rv).call(this) && (this.beforeSubmit && !this.beforeSubmit(this.formData) || (this.method === "POST" ? W(this, Lc, Ov).call(this) : W(this, Ac, Pv).call(this)));
  }
  abort() {
    y(this, et).abort();
  }
  getAllResponseHeaders() {
    return y(this, et).getAllResponseHeaders();
  }
  getResponseHeader(e) {
    return y(this, et).getResponseHeader(e);
  }
  overrideMimeType(e) {
    return y(this, et).overrideMimeType(e);
  }
  reset() {
    y(this, ee).reset(), W(this, Ai, o_).call(this);
  }
}
ee = new WeakMap(), Ei = new WeakMap(), Ti = new WeakMap(), je = new WeakMap(), Ct = new WeakMap(), et = new WeakMap(), xc = new WeakSet(), Lv = function(e, n) {
  const o = e.closest(".form-group");
  if (!o) {
    console.warn("Form element should be in .form-group!");
    return;
  }
  o.querySelectorAll(".form-tip").forEach((r) => r.remove());
  const s = document.createElement("div");
  s.innerText = n, s.classList.add("form-tip"), o.classList.add("has-error"), o.append(s);
}, Sc = new WeakSet(), Mv = function(e) {
  const n = e.closest(".form-group");
  if (!n) {
    console.warn("Form element should be in .form-group!");
    return;
  }
  n.classList.remove("has-error"), n.querySelectorAll(".form-tip").forEach((o) => o.remove());
}, Ai = new WeakSet(), o_ = function() {
  y(this, ee).querySelectorAll("[name]").forEach((n) => {
    W(this, Sc, Mv).call(this, n);
  });
}, Cc = new WeakSet(), Rv = function() {
  if (!this.rules || !Object.keys(this.rules).length)
    return !0;
  W(this, Ai, o_).call(this);
  let e = !0;
  return y(this, ee).querySelectorAll("[name]:not(.disabled)").forEach((n) => {
    const { name: o, value: s } = n, r = this.rules[o];
    if (!r)
      return;
    const l = (c) => "required" in c && c.required && !s || "regexp" in c && c.regexp && !c.regexp.test(s) || "validate" in c && c.validate && !c.validate(s) ? (W(this, xc, Lv).call(this, n, c.errMsg), e = !1) : !0;
    if (Array.isArray(r)) {
      for (const c of r)
        if (!l(c))
          break;
      return;
    }
    l(r);
  }), e;
}, Ec = new WeakSet(), Dv = function() {
  const e = [...y(this, ee).querySelectorAll("[name]:not(.disabled)")].filter((n) => !(n.tagName.toLowerCase() === "input" && (n.type.toLowerCase() === "radio" || n.type.toLowerCase() === "checkbox") && !n.checked));
  if (this.formType === "AJAX") {
    H(this, je, {}), e.forEach(({ name: n, value: o, tagName: s, type: r }) => {
      const l = y(this, je);
      if (s.toLowerCase() === "input" && r.toLowerCase() === "checkbox") {
        l[n] ? l[n].push(o) : l[n] = [o];
        return;
      }
      l[n] = o;
    });
    return;
  }
  H(this, je, new FormData(this.formEl));
}, Li = new WeakSet(), r_ = function() {
  this.headers && Object.entries(this.headers).forEach(([e, n]) => {
    y(this, et).setRequestHeader(e, n);
  }), y(this, et).responseType = this.responseType, this.onLoadstart && y(this, et).addEventListener("loadstart", this.onLoadstart), this.onLoad && y(this, et).addEventListener("load", this.onLoad), this.onLoadend && y(this, et).addEventListener("loadend", this.onLoadend), this.onProgress && y(this, et).addEventListener("progress", this.onProgress), this.onError && y(this, et).addEventListener("error", this.onError), this.onAbort && y(this, et).addEventListener("abort", this.onAbort), this.onTimeout && y(this, et).addEventListener("timeout", this.onTimeout);
}, Tc = new WeakSet(), Nv = function(e) {
  return Object.entries(e).map(([n, o]) => `${encodeURIComponent(n)}=${encodeURIComponent(o)}`).join("&");
}, Ac = new WeakSet(), Pv = function() {
  const e = this.generateGetURL ? this.generateGetURL(this.url, this.formData) : `${this.url}?${W(this, Tc, Nv).call(this, y(this, je))}`;
  y(this, et).open("GET", e), W(this, Li, r_).call(this), y(this, et).send();
}, Lc = new WeakSet(), Ov = function() {
  y(this, et).open("POST", this.url), W(this, Li, r_).call(this);
  const e = this.formType === "AJAX" ? JSON.stringify(this.formData) : this.formData;
  y(this, et).send(e);
}, M(aC, "NAME", "zui.ajaxForm");
var tu, $t, Hv, Wv, xr, Wh, Uv = {}, Iv = [], _C = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function cn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Fv(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function eu(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? tu.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return bs(t, l, o, s, null);
}
function bs(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Hv };
  return s == null && $t.vnode != null && $t.vnode(r), r;
}
function uC() {
  return { current: null };
}
function nu(t) {
  return t.children;
}
function Sr(t, e) {
  this.props = t, this.context = e;
}
function Qr(t, e) {
  if (e == null)
    return t.__ ? Qr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Qr(t) : null;
}
function Bv(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Bv(t);
  }
}
function Uh(t) {
  (!t.__d && (t.__d = !0) && xr.push(t) && !Sl.__r++ || Wh !== $t.debounceRendering) && ((Wh = $t.debounceRendering) || setTimeout)(Sl);
}
function Sl() {
  for (var t; Sl.__r = xr.length; )
    t = xr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), xr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = cn({}, r)).__v = r.__v + 1, Yv(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Qr(r), r.__h), hC(o, r), r.__e != l && Bv(r)));
    });
}
function jv(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Iv, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? bs(null, a, null, null, a) : Array.isArray(a) ? bs(nu, { children: a }, null, null, null) : a.__b > 0 ? bs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Yv(t, a, u = u || Uv, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = zv(a, _, t) : _ = Vv(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Qr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Gv(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      qv(p[i], p[++i], p[++i]);
}
function zv(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? zv(o, e, n) : Vv(n, o, o, s, o.__e, e));
  return e;
}
function Vv(t, e, n, o, s, r) {
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
function fC(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Cl(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Cl(t, r, e[r], n[r], o);
}
function Ih(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || _C.test(e) ? n : n + "px";
}
function Cl(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Ih(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ih(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Bh : Fh, r) : t.removeEventListener(e, r ? Bh : Fh, r);
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
function Fh(t) {
  this.l[t.type + !1]($t.event ? $t.event(t) : t);
}
function Bh(t) {
  this.l[t.type + !0]($t.event ? $t.event(t) : t);
}
function Yv(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = $t.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Sr(p, g), i.constructor = b, i.render = pC), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = cn({}, i.__s)), cn(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = cn(cn({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === nu && h.key == null ? h.props.children : h, jv(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = dC(n.__e, e, n, o, s, r, l, _);
    (h = $t.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), $t.__e(k, e, n);
  }
}
function hC(t, e) {
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
function dC(t, e, n, o, s, r, l, c) {
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
    if (r = r && tu.call(t.childNodes), h = (d = n.props || Uv).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (fC(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, jv(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Qr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Fv(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Cl(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Cl(t, "checked", f, d.checked, !1));
  }
  return t;
}
function qv(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    $t.__e(o, n);
  }
}
function Gv(t, e, n) {
  var o, s;
  if ($t.unmount && $t.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || qv(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Gv(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Fv(t.__e), t.__ = t.__e = t.__d = void 0;
}
function pC(t, e, n) {
  return this.constructor(t, n);
}
tu = Iv.slice, $t = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Hv = 0, Wv = function(t) {
  return t != null && t.constructor === void 0;
}, Sr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = cn({}, this.state), typeof t == "function" && (t = t(cn({}, n), this.props)), t && cn(n, t), t != null && this.__v && (e && this._sb.push(e), Uh(this));
}, Sr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Uh(this));
}, Sr.prototype.render = nu, xr = [], Sl.__r = 0;
var mC = 0;
function G(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --mC, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return $t.vnode && $t.vnode(_), _;
}
let gC = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Xv, kt, Jv, Cr, jh, Kv = {}, Zv = [], yC = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function an(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Qv(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Aa(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Jv };
  return s == null && kt.vnode != null && kt.vnode(r), r;
}
function ou(t) {
  return t.children;
}
function Er(t, e) {
  this.props = t, this.context = e;
}
function ti(t, e) {
  if (e == null)
    return t.__ ? ti(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? ti(t) : null;
}
function tb(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return tb(t);
  }
}
function zh(t) {
  (!t.__d && (t.__d = !0) && Cr.push(t) && !El.__r++ || jh !== kt.debounceRendering) && ((jh = kt.debounceRendering) || setTimeout)(El);
}
function El() {
  for (var t; El.__r = Cr.length; )
    t = Cr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Cr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = an({}, r)).__v = r.__v + 1, rb(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? ti(r), r.__h), bC(o, r), r.__e != l && tb(r)));
    });
}
function eb(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Zv, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Aa(null, a, null, null, a) : Array.isArray(a) ? Aa(ou, { children: a }, null, null, null) : a.__b > 0 ? Aa(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      rb(t, a, u = u || Kv, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = nb(a, _, t) : _ = ob(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = ti(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && sb(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      ib(p[i], p[++i], p[++i]);
}
function nb(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? nb(o, e, n) : ob(n, o, o, s, o.__e, e));
  return e;
}
function ob(t, e, n, o, s, r) {
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
function vC(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Tl(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Tl(t, r, e[r], n[r], o);
}
function Vh(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || yC.test(e) ? n : n + "px";
}
function Tl(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Vh(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Vh(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? qh : Yh, r) : t.removeEventListener(e, r ? qh : Yh, r);
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
function Yh(t) {
  this.l[t.type + !1](kt.event ? kt.event(t) : t);
}
function qh(t) {
  this.l[t.type + !0](kt.event ? kt.event(t) : t);
}
function rb(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, E, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = kt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Er(p, g), i.constructor = b, i.render = $C), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = an({}, i.__s)), an(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = kt.__r, S = 0, "prototype" in b && b.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = an(an({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === ou && h.key == null ? h.props.children : h, eb(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = wC(n.__e, e, n, o, s, r, l, _);
    (h = kt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), kt.__e(k, e, n);
  }
}
function bC(t, e) {
  kt.__c && kt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      kt.__e(o, n.__v);
    }
  });
}
function wC(t, e, n, o, s, r, l, c) {
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
    if (r = r && Xv.call(t.childNodes), h = (d = n.props || Kv).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (vC(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, eb(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && ti(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Qv(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Tl(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Tl(t, "checked", f, d.checked, !1));
  }
  return t;
}
function ib(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    kt.__e(o, n);
  }
}
function sb(t, e, n) {
  var o, s;
  if (kt.unmount && kt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || ib(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        kt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && sb(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Qv(t.__e), t.__ = t.__e = t.__d = void 0;
}
function $C(t, e, n) {
  return this.constructor(t, n);
}
Xv = Zv.slice, kt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Jv = 0, Er.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = an({}, this.state), typeof t == "function" && (t = t(an({}, n), this.props)), t && an(n, t), t != null && this.__v && (e && this._sb.push(e), zh(this));
}, Er.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), zh(this));
}, Er.prototype.render = ou, Cr = [], El.__r = 0;
var kC = 0;
function Gh(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --kC, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return kt.vnode && kt.vnode(_), _;
}
var Mn, Rn;
class Xh extends Er {
  constructor(n) {
    super(n);
    T(this, Mn, 0);
    T(this, Rn, null);
    M(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, s = n.target;
      if (!(!s || !o) && (typeof o == "string" && s.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    M(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (y(this, Mn) && cancelAnimationFrame(y(this, Mn)), H(this, Mn, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), H(this, Mn, 0);
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
    n && (H(this, Rn, typeof n == "string" ? document : n.current), y(this, Rn).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), y(this, Rn) && y(this, Rn).removeEventListener("wheel", this._handleWheel);
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
    return o === "horz" ? (f.height = s, f.width = n, v.width = this.barSize, v.left = Math.round(Math.min(d, u) * (n - v.width) / d)) : (f.width = s, f.height = n, v.height = this.barSize, v.top = Math.round(Math.min(d, u) * (n - v.height) / d)), /* @__PURE__ */ Gh(
      "div",
      {
        className: F("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": a
        }),
        style: f,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ Gh(
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
Mn = new WeakMap(), Rn = new WeakMap();
function Jh(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function lb({ col: t, className: e, height: n, row: o, onRenderCell: s, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
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
  }], v = ["dtable-cell-content", e], p = [c ?? ((b = o.data) == null ? void 0 : b[t.name]) ?? ""], m = s ? s(p, { row: o, col: t }, eu) : p, g = [], w = [], $ = {}, S = {};
  let A = "div";
  m == null || m.forEach((k) => {
    if (typeof k == "object" && k && !Wv(k) && ("html" in k || "className" in k || "style" in k || "attrs" in k || "children" in k || "tagName" in k)) {
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
function La({ row: t, className: e, top: n = 0, left: o = 0, width: s, height: r, cols: l, CellComponent: c = lb, onRenderCell: _ }) {
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
function cb({
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
  CellComponent: u = lb,
  onRenderCell: a,
  style: f,
  ...v
}) {
  let p = null;
  s != null && s.length && (p = /* @__PURE__ */ G(
    La,
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
    La,
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
    La,
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
function xC({ height: t, onRenderRow: e, ...n }) {
  const o = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const s = e({ props: o }, eu);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ G("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ G(cb, { ...o }) });
}
function SC({
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
    }, d = c == null ? void 0 : c({ props: i, row: h }, eu);
    return d && Object.assign(i, d), /* @__PURE__ */ G(cb, { ...i });
  }) });
}
const Al = /* @__PURE__ */ new Map(), Ll = [];
function ab(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && Al.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Al.set(n, t), e != null && e.buildIn && !Ll.includes(n) && Ll.push(n);
}
function Lo(t, e) {
  ab(t, e);
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
function _b(t) {
  return Al.delete(t);
}
function CC(t) {
  if (typeof t == "string") {
    const e = Al.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function ub(t, e, n) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = CC(o);
    s && (n.has(s.name) || ((r = s.plugins) != null && r.length && ub(t, s.plugins, n), t.push(s), n.add(s.name)));
  }), t;
}
function EC(t = [], e = !0) {
  return e && Ll.length && t.unshift(...Ll), t != null && t.length ? ub([], t, /* @__PURE__ */ new Set()) : [];
}
function Kh() {
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
var ns, Dn, yo, ze, ue, Ve, At, ne, fe, vo, Mi, Ri, Ee, bo, wo, Mc, fb, Rc, hb, Dc, db, Nc, pb, Di, i_, Pc, Oc, Ni, Pi, Hc, Wc, Uc, mb, Ic, gb, Fc, yb;
let TC = (ns = class extends Sr {
  constructor(n) {
    super(n);
    T(this, Mc);
    T(this, Rc);
    T(this, Dc);
    T(this, Nc);
    T(this, Di);
    T(this, Uc);
    T(this, Ic);
    T(this, Fc);
    M(this, "ref", uC());
    T(this, Dn, 0);
    T(this, yo, void 0);
    T(this, ze, !1);
    T(this, ue, void 0);
    T(this, Ve, void 0);
    T(this, At, []);
    T(this, ne, void 0);
    T(this, fe, /* @__PURE__ */ new Map());
    T(this, vo, {});
    T(this, Mi, void 0);
    T(this, Ri, []);
    M(this, "updateLayout", () => {
      y(this, Dn) && cancelAnimationFrame(y(this, Dn)), H(this, Dn, requestAnimationFrame(() => {
        H(this, ne, void 0), this.forceUpdate(), H(this, Dn, 0);
      }));
    });
    T(this, Ee, (n, o) => {
      o = o || n.type;
      const s = y(this, fe).get(o);
      if (s != null && s.length) {
        for (const r of s)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    T(this, bo, (n) => {
      y(this, Ee).call(this, n, `window_${n.type}`);
    });
    T(this, wo, (n) => {
      y(this, Ee).call(this, n, `document_${n.type}`);
    });
    T(this, Pc, (n, o) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, n, o);
        s && Object.assign(n.props, s);
      }
      return y(this, At).forEach((s) => {
        if (s.onRenderRow) {
          const r = s.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    T(this, Oc, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), y(this, At).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    T(this, Ni, (n, o, s) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, s)), this.options[c] && (n = this.options[c].call(this, n, o, s)), y(this, At).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, s));
      }), n;
    });
    T(this, Pi, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    T(this, Hc, (n) => {
      var c, _, h, i, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: s, colName: r, cellElement: l } = o;
      if (s === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), y(this, At).forEach((u) => {
          var a;
          (a = u.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: u } = o, a = this.layout.visibleRows.find((f) => f.id === s);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: s, rowInfo: a, element: l, rowElement: u })) === !0)
            return;
          for (const f of y(this, At))
            if (((h = f.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: s, rowInfo: a, element: l, rowElement: u })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: a, element: u })) === !0)
          return;
        for (const f of y(this, At))
          if (((d = f.onRowClick) == null ? void 0 : d.call(this, n, { rowID: s, rowInfo: a, element: u })) === !0)
            return;
      }
    });
    T(this, Wc, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, yo, n.id ?? `dtable-${gC(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, Ve, Object.freeze(EC(n.plugins))), y(this, Ve).forEach((o) => {
      var c;
      const { methods: s, data: r, state: l } = o;
      s && Object.entries(s).forEach(([_, h]) => {
        typeof h == "function" && Object.assign(this, { [_]: h.bind(this) });
      }), r && Object.assign(y(this, vo), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = y(this, ne)) == null ? void 0 : n.options) || y(this, ue) || Kh();
  }
  get plugins() {
    return y(this, At);
  }
  get layout() {
    return y(this, ne);
  }
  get id() {
    return y(this, yo);
  }
  get data() {
    return y(this, vo);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, ue, void 0);
  }
  componentDidMount() {
    if (y(this, ze) ? this.forceUpdate() : W(this, Di, i_).call(this), y(this, At).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", y(this, Hc)), this.on("keydown", y(this, Wc)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, Mi, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    y(this, At).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    y(this, ze) ? W(this, Di, i_).call(this) : y(this, At).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = y(this, Mi)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of y(this, fe).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), y(this, bo)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), y(this, wo)) : n.removeEventListener(s, y(this, Ee));
    y(this, At).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), y(this, Ve).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), H(this, vo, {}), y(this, fe).clear();
  }
  on(n, o, s) {
    var l;
    s && (n = `${s}_${n}`);
    const r = y(this, fe).get(n);
    r ? r.push(o) : (y(this, fe).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), y(this, bo)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), y(this, wo)) : (l = this.ref.current) == null || l.addEventListener(n, y(this, Ee)));
  }
  off(n, o, s) {
    var c;
    s && (n = `${s}_${n}`);
    const r = y(this, fe).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (y(this, fe).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), y(this, bo)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), y(this, wo)) : (c = this.ref.current) == null || c.removeEventListener(n, y(this, Ee)));
  }
  emitCustomEvent(n, o) {
    y(this, Ee).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
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
    if (!y(this, ue))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: s, state: r } = n;
    if (s === "layout")
      H(this, ne, void 0);
    else if (s === "options") {
      if (H(this, ue, void 0), !y(this, ne))
        return;
      H(this, ne, void 0);
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
    return Oi(y(this, Ri), n, o, s, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = W(this, Fc, yb).call(this), { className: o, rowHover: s, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], u = [];
    return n && y(this, At).forEach((a) => {
      var v;
      const f = (v = a.onRender) == null ? void 0 : v.call(this, n);
      f && (f.style && Object.assign(i, f.style), f.className && d.push(f.className), f.children && u.push(f.children));
    }), /* @__PURE__ */ G(
      "div",
      {
        id: y(this, yo),
        className: F(d),
        style: i,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && W(this, Mc, fb).call(this, n),
          n && W(this, Rc, hb).call(this, n),
          n && W(this, Dc, db).call(this, n),
          n && W(this, Nc, pb).call(this, n)
        ]
      }
    );
  }
}, Dn = new WeakMap(), yo = new WeakMap(), ze = new WeakMap(), ue = new WeakMap(), Ve = new WeakMap(), At = new WeakMap(), ne = new WeakMap(), fe = new WeakMap(), vo = new WeakMap(), Mi = new WeakMap(), Ri = new WeakMap(), Ee = new WeakMap(), bo = new WeakMap(), wo = new WeakMap(), Mc = new WeakSet(), fb = function(n) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ G(
      xC,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: y(this, Ni),
        onRenderRow: y(this, Oc),
        ...s
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ G(
    Ha,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, Rc = new WeakSet(), hb = function(n) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ G(
    SC,
    {
      top: o,
      height: s,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: h,
      onRenderCell: y(this, Ni),
      onRenderRow: y(this, Pc),
      ...c
    }
  );
}, Dc = new WeakSet(), db = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const s = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ G(
    Ha,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: s,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, Nc = new WeakSet(), pb = function(n) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: i, scrollWidth: d } = r, { scrollbarSize: u = 12, horzScrollbarPos: a } = this.options;
  return i > d && o.push(
    /* @__PURE__ */ G(
      Xh,
      {
        type: "horz",
        scrollPos: s,
        scrollSize: i,
        clientSize: d,
        onScroll: y(this, Pi),
        left: r.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -u) + h,
        size: u,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > c && o.push(
    /* @__PURE__ */ G(
      Xh,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: c,
        onScroll: y(this, Pi),
        right: 0,
        size: u,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, Di = new WeakSet(), i_ = function() {
  var n;
  H(this, ze, !1), (n = this.options.afterRender) == null || n.call(this), y(this, At).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, Pc = new WeakMap(), Oc = new WeakMap(), Ni = new WeakMap(), Pi = new WeakMap(), Hc = new WeakMap(), Wc = new WeakMap(), Uc = new WeakSet(), mb = function() {
  if (y(this, ue))
    return !1;
  const o = { ...Kh(), ...y(this, Ve).reduce((s, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(s, l), s;
  }, {}), ...this.props };
  return H(this, ue, o), H(this, At, y(this, Ve).reduce((s, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (s.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), s;
  }, [])), H(this, Ri, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, Ic = new WeakSet(), gb = function() {
  var K, St;
  const { plugins: n } = this;
  let o = y(this, ue);
  const s = {
    flex: /* @__PURE__ */ G("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ G("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((B) => {
    var xt;
    const Q = (xt = B.beforeLayout) == null ? void 0 : xt.call(this, o);
    Q && (o = { ...o, ...Q }), Object.assign(s, B.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], i = [], d = {}, u = [], a = [];
  let f = 0, v = 0, p = 0;
  o.cols.forEach((B) => {
    if (B.hidden)
      return;
    const {
      name: Q,
      type: xt = "",
      fixed: at = !1,
      flex: X = !1,
      width: _t = r,
      minWidth: Ht = l,
      maxWidth: Wt = c,
      ...Sb
    } = B, nt = {
      name: Q,
      type: xt,
      setting: {
        name: Q,
        type: xt,
        fixed: at,
        flex: X,
        width: _t,
        minWidth: Ht,
        maxWidth: Wt,
        ...Sb
      },
      flex: at ? 0 : X === !0 ? 1 : typeof X == "number" ? X : 0,
      left: 0,
      width: Jh(_t, Ht, Wt),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((lu) => {
      var cu, au;
      const ji = (cu = lu.colTypes) == null ? void 0 : cu[xt];
      if (ji) {
        const _u = typeof ji == "function" ? ji(nt) : ji;
        _u && Object.assign(nt.setting, _u);
      }
      (au = lu.onAddCol) == null || au.call(this, nt);
    }), nt.width = Jh(nt.setting.width ?? nt.width, nt.setting.minWidth ?? Ht, nt.setting.maxWidth ?? Wt), nt.realWidth = nt.realWidth || nt.width, at === "left" ? (nt.left = f, f += nt.width, _.push(nt)) : at === "right" ? (nt.left = v, v += nt.width, h.push(nt)) : (nt.left = p, p += nt.width, i.push(nt)), nt.flex && a.push(nt), u.push(nt), d[nt.name] = nt;
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
      g = 0, H(this, ze, !0);
      return;
    }
  } else
    g = m ?? 0;
  const { data: $, rowKey: S = "id", rowHeight: A } = o, E = [], b = (B, Q, xt) => {
    var X, _t;
    const at = { data: xt ?? { [S]: B }, id: B, index: E.length, top: 0 };
    if (xt || (at.lazy = !0), E.push(at), ((X = o.onAddRow) == null ? void 0 : X.call(this, at, Q)) !== !1) {
      for (const Ht of n)
        if (((_t = Ht.onAddRow) == null ? void 0 : _t.call(this, at, Q)) === !1)
          return;
    }
  };
  if (typeof $ == "number")
    for (let B = 0; B < $; B++)
      b(`${B}`, B);
  else
    Array.isArray($) && $.forEach((B, Q) => {
      typeof B == "object" ? b(`${B[S] ?? ""}`, Q, B) : b(`${B ?? ""}`, Q);
    });
  let k = E;
  const R = {};
  if (o.onAddRows) {
    const B = o.onAddRows.call(this, k);
    B && (k = B);
  }
  for (const B of n) {
    const Q = (K = B.onAddRows) == null ? void 0 : K.call(this, k);
    Q && (k = Q);
  }
  k.forEach((B, Q) => {
    R[B.id] = B, B.index = Q, B.top = B.index * A;
  });
  const { header: q, footer: j } = o, D = q ? o.headerHeight || A : 0, C = j ? o.footerHeight || A : 0;
  let x = o.height, N = 0;
  const L = k.length * A, O = D + C + L;
  if (typeof x == "function" && (x = x.call(this, O)), x === "auto")
    N = O;
  else if (typeof x == "object")
    N = Math.min(x.max, Math.max(x.min, O));
  else if (x === "100%") {
    const { parent: B } = this;
    if (B)
      N = B.clientHeight;
    else {
      N = 0, H(this, ze, !0);
      return;
    }
  } else
    N = x;
  const P = N - D - C, I = g - f - v, V = {
    options: o,
    allRows: E,
    width: g,
    height: N,
    rows: k,
    rowsMap: R,
    rowHeight: A,
    rowsHeight: P,
    rowsHeightTotal: L,
    header: q,
    footer: j,
    footerGenerators: s,
    headerHeight: D,
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
  }, z = (St = o.onLayout) == null ? void 0 : St.call(this, V);
  z && Object.assign(V, z), n.forEach((B) => {
    if (B.onLayout) {
      const Q = B.onLayout.call(this, V);
      Q && Object.assign(V, Q);
    }
  }), H(this, ne, V);
}, Fc = new WeakSet(), yb = function() {
  (W(this, Uc, mb).call(this) || !y(this, ne)) && W(this, Ic, gb).call(this);
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
}, M(ns, "addPlugin", ab), M(ns, "removePlugin", _b), ns);
function Zh(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((s) => s.classList.add(o));
}
const AC = {
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
      Zh(this, o);
    },
    mouseleave() {
      Zh(this, !1);
    }
  }
}, LC = Lo(AC, { buildIn: !0 });
function MC(t, e) {
  var l, c;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (_, h) => {
    s && !s.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !vb.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
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
function RC(t) {
  return this.state.checkedRows[t] ?? !1;
}
function vb() {
  var n, o;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, r) => s + (e.call(this, r.id) ? 1 : 0), 0)) : t === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function DC() {
  return Object.keys(this.state.checkedRows);
}
const NC = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: MC,
    isRowChecked: RC,
    isAllRowChecked: vb,
    getChecks: DC
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
}, PC = Lo(NC);
var bb = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(bb || {});
function s_(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, o = e.children && n && n[t];
  let s = !1, { parent: r } = e;
  for (; r; ) {
    const l = s_.call(this, r);
    if (l.state !== "expanded") {
      s = !0;
      break;
    }
    r = l.parent;
  }
  return e.state = s ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? s_.call(this, e.parent).level + 1 : 0, e;
}
function OC(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !wb.call(this)), e) {
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
function wb() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function $b(t, e = 0, n, o = 0) {
  var s;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const l = t.get(r);
    l && (l.level === o && (l.order = e++), (s = l.children) != null && s.length && (e = $b(t, e, l.children, o + 1)));
  }
  return e;
}
function kb(t, e, n, o) {
  const s = t.getNestedRowInfo(e);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = n, kb(t, r, n, o);
  }), s;
}
function xb(t, e, n, o, s) {
  var c;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : s[_]);
    return n === h;
  })) && (o[e] = n), r.parent && xb(t, r.parent, n, o, s);
}
const HC = {
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
        const l = kb(this, s, r, o);
        l != null && l.parent && xb(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: OC,
    isAllCollapsed: wb,
    getNestedRowInfo: s_
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
    ), $b(this.data.nestedMap), t.sort((e, n) => {
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
}, WC = Lo(HC);
const UC = {
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
        const { linkTemplate: o = "", linkProps: s } = e.setting, r = Ft(o, n.data);
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
            return h && (_ = { className: l, ...h, ..._ }), Ft(s, _);
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
        return typeof o == "function" ? t[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? t[0] = Ka(r, o) : s === "html" ? t[0] = { html: Ft(o, r) } : t[0] = Ft(o, r), t;
      }
    }
  }
}, IC = Lo(UC, { buildIn: !0 }), FC = {
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
}, BC = Lo(FC, { buildIn: !0 }), jC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: bb,
  checkable: PC,
  colHover: LC,
  nested: WC,
  rich: IC,
  sortType: BC
}, Symbol.toStringTag, { value: "Module" }));
class Ro extends Mt {
}
M(Ro, "NAME", "dtable"), M(Ro, "Component", TC), M(Ro, "definePlugin", Lo), M(Ro, "removePlugin", _b), M(Ro, "plugins", jC);
var Vt;
class Uo extends le {
  constructor() {
    super(...arguments);
    T(this, Vt, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Vt, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), y(this, Vt) && (this.addActive(y(this, Vt).parentElement, y(this, Vt)), y(this, Vt).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Vt, document.querySelector(n)), y(this, Vt) && (this.addActive(y(this, Vt).parentElement, y(this, Vt)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
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
Vt = new WeakMap(), M(Uo, "NAME", "NavTabs"), M(Uo, "NAV_CLASS", "nav-tabs"), M(Uo, "EVENTS", !0), M(Uo, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (t) => {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new Uo(t.target).showTarget());
});
export {
  ku as ActionMenu,
  Su as ActionMenuNested,
  aC as AjaxForm,
  Uf as Avatar,
  If as BtnGroup,
  Mu as Button,
  It as ContextMenu,
  Ro as DTable,
  Yt as Datepicker,
  Pt as Dropdown,
  c_ as EventBus,
  Ru as Menu,
  Vi as Messager,
  Ut as Modal,
  dr as ModalTrigger,
  oh as Nav,
  Uo as NavTabs,
  sh as Pager,
  hh as Picker,
  ff as ProgressCircle,
  yf as Switch,
  $e as TIME_DAY,
  qt as Timepicker,
  Sh as Toolbar,
  Gt as Tooltip,
  Hh as VirtualGrid,
  Ib as addI18nMap,
  oE as ajax,
  rE as browser,
  ih as calculateTimestamp,
  A$ as cash,
  YC as convertBytes,
  jt as createDate,
  VC as formatBytes,
  Ka as formatDate,
  fE as formatDateSpan,
  Ft as formatString,
  Wb as getLangCode,
  hE as getTimeBeforeDesc,
  Oi as i18n,
  uE as isDBY,
  ga as isObject,
  Ii as isSameDay,
  wx as isSameMonth,
  lE as isSameWeek,
  rh as isSameYear,
  cE as isToday,
  _E as isTomorrow,
  aE as isYesterday,
  Oa as mergeDeep,
  Pa as nativeEvents,
  Ub as setLangCode,
  nk as store
};
