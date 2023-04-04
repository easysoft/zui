var Av = Object.defineProperty;
var Lv = (t, e, n) => e in t ? Av(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var M = (t, e, n) => (Lv(t, typeof e != "symbol" ? e + "" : e, n), n), Kc = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var y = (t, e, n) => (Kc(t, e, "read from private field"), n ? n.call(t) : e.get(t)), E = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, H = (t, e, n, o) => (Kc(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n), B_ = (t, e, n, o) => ({
  set _(s) {
    H(t, e, s, n);
  },
  get _() {
    return y(t, e, o);
  }
}), W = (t, e, n) => (Kc(t, e, "access private method"), n);
var xc, ot, Sh, Ch, Do, j_, ls = {}, Eh = [], Mv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Fe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Th(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ah(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? xc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ji(t, l, o, s, null);
}
function ji(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Sh };
  return s == null && ot.vnode != null && ot.vnode(r), r;
}
function Rv() {
  return { current: null };
}
function Sc(t) {
  return t.children;
}
function zi(t, e) {
  this.props = t, this.context = e;
}
function br(t, e) {
  if (e == null)
    return t.__ ? br(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? br(t) : null;
}
function Lh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Lh(t);
  }
}
function z_(t) {
  (!t.__d && (t.__d = !0) && Do.push(t) && !cs.__r++ || j_ !== ot.debounceRendering) && ((j_ = ot.debounceRendering) || setTimeout)(cs);
}
function cs() {
  for (var t; cs.__r = Do.length; )
    t = Do.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Do = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Fe({}, r)).__v = r.__v + 1, Ua(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? br(r), r.__h), Dh(o, r), r.__e != l && Lh(r)));
    });
}
function Mh(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Eh, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ji(null, a, null, null, a) : Array.isArray(a) ? ji(Sc, { children: a }, null, null, null) : a.__b > 0 ? ji(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Ua(t, a, u = u || ls, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Rh(a, _, t) : _ = Nh(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = br(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Oh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Ph(p[i], p[++i], p[++i]);
}
function Rh(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Rh(o, e, n) : Nh(n, o, o, s, o.__e, e));
  return e;
}
function Nh(t, e, n, o, s, r) {
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
function Nv(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || as(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || as(t, r, e[r], n[r], o);
}
function V_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Mv.test(e) ? n : n + "px";
}
function as(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || V_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || V_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? q_ : Y_, r) : t.removeEventListener(e, r ? q_ : Y_, r);
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
function Y_(t) {
  this.l[t.type + !1](ot.event ? ot.event(t) : t);
}
function q_(t) {
  this.l[t.type + !0](ot.event ? ot.event(t) : t);
}
function Ua(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ot.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new zi(p, g), i.constructor = b, i.render = Pv), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Fe({}, i.__s)), Fe(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = Fe(Fe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === Sc && h.key == null ? h.props.children : h, Mh(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Dv(n.__e, e, n, o, s, r, l, _);
    (h = ot.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ot.__e(x, e, n);
  }
}
function Dh(t, e) {
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
function Dv(t, e, n, o, s, r, l, c) {
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
    if (r = r && xc.call(t.childNodes), h = (d = n.props || ls).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Nv(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Mh(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && br(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Th(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && as(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && as(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Ph(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ot.__e(o, n);
  }
}
function Oh(t, e, n) {
  var o, s;
  if (ot.unmount && ot.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Ph(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Oh(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Th(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Pv(t, e, n) {
  return this.constructor(t, n);
}
function Ov(t, e, n) {
  var o, s, r;
  ot.__ && ot.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Ua(e, t = (!o && n || e).__k = Ah(Sc, null, [t]), s || ls, ls, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? xc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Dh(r, t);
}
xc = Eh.slice, ot = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Sh = 0, Ch = function(t) {
  return t != null && t.constructor === void 0;
}, zi.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Fe({}, this.state), typeof t == "function" && (t = t(Fe({}, n), this.props)), t && Fe(n, t), t != null && this.__v && (e && this._sb.push(e), z_(this));
}, zi.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), z_(this));
}, zi.prototype.render = Sc, Do = [], cs.__r = 0;
var Hv = 0;
function Hh(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Hv, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ot.vnode && ot.vnode(_), _;
}
var we;
class Wv {
  constructor(e = "") {
    E(this, we, void 0);
    typeof e == "object" ? H(this, we, e) : H(this, we, document.appendChild(document.createComment(e)));
  }
  on(e, n, o) {
    y(this, we).addEventListener(e, n, o);
  }
  once(e, n, o) {
    y(this, we).addEventListener(e, n, { once: !0, ...o });
  }
  off(e, n, o) {
    y(this, we).removeEventListener(e, n, o);
  }
  emit(e) {
    return y(this, we).dispatchEvent(e), e;
  }
}
we = new WeakMap();
const ma = /* @__PURE__ */ new Set([
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
class Fa extends Wv {
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
    return typeof e == "string" && (ma.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(Fa.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (ma.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
var $e, Vr, bn, Ao;
class G_ extends Fa {
  constructor(n = "", o) {
    super(n);
    E(this, bn);
    E(this, $e, /* @__PURE__ */ new Map());
    E(this, Vr, void 0);
    H(this, Vr, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, s) {
    n = W(this, bn, Ao).call(this, n), super.on(n, o, s), y(this, $e).set(o, [n, s]);
  }
  off(n, o, s) {
    n = W(this, bn, Ao).call(this, n), super.off(n, o, s), y(this, $e).delete(o);
  }
  once(n, o, s) {
    n = W(this, bn, Ao).call(this, n);
    const r = (l) => {
      o(l), y(this, $e).delete(r);
    };
    super.once(n, r, s), y(this, $e).set(r, [n, s]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = W(this, bn, Ao).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(y(this, $e).entries()).forEach(([n, [o, s]]) => {
      super.off(o, n, s);
    }), y(this, $e).clear();
  }
}
$e = new WeakMap(), Vr = new WeakMap(), bn = new WeakSet(), Ao = function(n) {
  const o = y(this, Vr);
  return ma.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Iv(t, e) {
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
function Uv(t, e, n) {
  const o = Iv(t, e), s = o[o.length - 1];
  return s === void 0 ? n : s;
}
function Zc(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function ga(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (Zc(t) && Zc(n))
    for (const o in n)
      Zc(n[o]) ? (t[o] || Object.assign(t, { [o]: {} }), ga(t[o], n[o])) : Object.assign(t, { [o]: n[o] });
  return ga(t, ...e);
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
var Ba = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(Ba || {});
function CS(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / Ba[n]).toFixed(e) + n);
}
const ES = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const o = n[1];
  return t = t.replace(o, ""), Number.parseInt(t, 10) * Ba[o];
};
var xh;
let ja = ((xh = document.documentElement.getAttribute("lang")) == null ? void 0 : xh.toLowerCase()) ?? "zh_cn", Ne;
function Fv() {
  return ja;
}
function Bv(t) {
  ja = t.toLowerCase();
}
function jv(t, e) {
  Ne || (Ne = {}), typeof t == "string" && (t = { [t]: e ?? {} }), ga(Ne, t);
}
function Ci(t, e, n, o, s, r) {
  Array.isArray(t) ? Ne && t.unshift(Ne) : t = Ne ? [Ne, t] : [t], typeof n == "string" && (r = s, s = o, o = n, n = void 0);
  const l = s || ja;
  let c;
  for (const _ of t) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const i = r && _ === Ne ? `${r}.${e}` : e;
    if (c = Uv(h, i), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? It(c, ...Array.isArray(n) ? n : [n]) : c;
}
Ci.addLang = jv;
Ci.getCode = Fv;
Ci.setCode = Bv;
function zv(t) {
  return Object.fromEntries(Object.entries(t).map(([e, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [e, n];
  }));
}
const Qc = /* @__PURE__ */ new Map();
var ke, Bn, Zt;
class ie {
  constructor(e, n) {
    E(this, ke, void 0);
    E(this, Bn, void 0);
    E(this, Zt, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, this.constructor.EVENTS && H(this, Zt, new G_(e, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, ke, { ...this.constructor.DEFAULT }), this.setOptions({ ...e instanceof HTMLElement ? zv(e.dataset) : null, ...n }), this.constructor.all.set(e, this), H(this, Bn, e), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return y(this, ke);
  }
  get element() {
    return y(this, Bn);
  }
  get events() {
    return y(this, Zt);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(e) {
    return e && Object.assign(y(this, ke), e), y(this, ke);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(y(this, Bn)), y(this, Zt) && (this.emit("destroyed", this), y(this, Zt).offAll());
  }
  on(e, n, o) {
    var s;
    (s = y(this, Zt)) == null || s.on(e, n, o);
  }
  once(e, n, o) {
    var s;
    (s = y(this, Zt)) == null || s.once(e, n, o);
  }
  off(e, n, o) {
    var s;
    (s = y(this, Zt)) == null || s.off(e, n, o);
  }
  emit(e, n) {
    var l;
    let o = G_.createEvent(e, n);
    const s = `on${e[0].toUpperCase()}${e.substring(1)}`, r = y(this, ke)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = y(this, Zt)) == null ? void 0 : l.emit(e, n), o;
  }
  i18n(e, n, o) {
    return Ci(y(this, ke).i18n, e, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${e}}`;
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
    if (Qc.has(e))
      return Qc.get(e);
    const n = /* @__PURE__ */ new Map();
    return Qc.set(e, n), n;
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
ke = new WeakMap(), Bn = new WeakMap(), Zt = new WeakMap(), M(ie, "EVENTS", !1), M(ie, "DEFAULT", {});
class At extends ie {
  constructor() {
    super(...arguments);
    M(this, "ref", Rv());
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
    Ov(/* @__PURE__ */ Hh(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
M(At, "Component");
var za, _t, Wh, Ih, Po, X_, Uh = {}, Fh = [], Vv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Be(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Bh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ko(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? za.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Vi(t, l, o, s, null);
}
function Vi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Wh };
  return s == null && _t.vnode != null && _t.vnode(r), r;
}
function Yv() {
  return { current: null };
}
function Va(t) {
  return t.children;
}
function Oo(t, e) {
  this.props = t, this.context = e;
}
function wr(t, e) {
  if (e == null)
    return t.__ ? wr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? wr(t) : null;
}
function jh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return jh(t);
  }
}
function J_(t) {
  (!t.__d && (t.__d = !0) && Po.push(t) && !_s.__r++ || X_ !== _t.debounceRendering) && ((X_ = _t.debounceRendering) || setTimeout)(_s);
}
function _s() {
  for (var t; _s.__r = Po.length; )
    t = Po.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Po = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Be({}, r)).__v = r.__v + 1, qh(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? wr(r), r.__h), Gv(o, r), r.__e != l && jh(r)));
    });
}
function zh(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Fh, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Vi(null, a, null, null, a) : Array.isArray(a) ? Vi(Va, { children: a }, null, null, null) : a.__b > 0 ? Vi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      qh(t, a, u = u || Uh, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Vh(a, _, t) : _ = Yh(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = wr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Xh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Gh(p[i], p[++i], p[++i]);
}
function Vh(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Vh(o, e, n) : Yh(n, o, o, s, o.__e, e));
  return e;
}
function Yh(t, e, n, o, s, r) {
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
function qv(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || us(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || us(t, r, e[r], n[r], o);
}
function K_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Vv.test(e) ? n : n + "px";
}
function us(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || K_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || K_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Q_ : Z_, r) : t.removeEventListener(e, r ? Q_ : Z_, r);
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
function Z_(t) {
  this.l[t.type + !1](_t.event ? _t.event(t) : t);
}
function Q_(t) {
  this.l[t.type + !0](_t.event ? _t.event(t) : t);
}
function qh(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = _t.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Oo(p, g), i.constructor = b, i.render = Jv), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Be({}, i.__s)), Be(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = Be(Be({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === Va && h.key == null ? h.props.children : h, zh(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Xv(n.__e, e, n, o, s, r, l, _);
    (h = _t.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), _t.__e(x, e, n);
  }
}
function Gv(t, e) {
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
function Xv(t, e, n, o, s, r, l, c) {
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
    if (r = r && za.call(t.childNodes), h = (d = n.props || Uh).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (qv(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, zh(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && wr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Bh(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && us(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && us(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Gh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    _t.__e(o, n);
  }
}
function Xh(t, e, n) {
  var o, s;
  if (_t.unmount && _t.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Gh(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Xh(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Bh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Jv(t, e, n) {
  return this.constructor(t, n);
}
za = Fh.slice, _t = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Wh = 0, Ih = function(t) {
  return t != null && t.constructor === void 0;
}, Oo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Be({}, this.state), typeof t == "function" && (t = t(Be({}, n), this.props)), t && Be(n, t), t != null && this.__v && (e && this._sb.push(e), J_(this));
}, Oo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), J_(this));
}, Oo.prototype.render = Va, Po = [], _s.__r = 0;
var Kv = 0;
function qt(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Kv, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return _t.vnode && _t.vnode(_), _;
}
function Cc(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), o = (s, r) => {
    if (Array.isArray(s) && (r = s[1], s = s[0]), !s.length)
      return;
    const l = n.get(s);
    typeof l == "number" ? e[l][1] = !!r : (n.set(s, e.length), e.push([s, !!r]));
  };
  return t.forEach((s) => {
    typeof s == "function" && (s = s()), Array.isArray(s) ? Cc(...s).forEach(o) : s && typeof s == "object" ? Object.entries(s).forEach(o) : typeof s == "string" && s.split(" ").forEach((r) => o(r, !0));
  }), e.sort((s, r) => (n.get(s[0]) || 0) - (n.get(r[0]) || 0));
}
const F = (...t) => Cc(...t).reduce((e, [n, o]) => (o && e.push(n), e), []).join(" ");
function Zv({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: s
}) {
  return ko(t, {
    className: F(e),
    style: o,
    ...s
  }, n);
}
function Jh({
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
    typeof c == "string" ? /* @__PURE__ */ qt("i", { class: `icon ${c}` }) : c,
    /* @__PURE__ */ qt("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof i == "string" ? /* @__PURE__ */ qt("i", { class: `icon ${i}` }) : i
  ];
  return ko(t, {
    className: F(e, { disabled: r, active: l }),
    title: d,
    [t === "a" ? "href" : "data-url"]: s,
    [t === "a" ? "target" : "data-target"]: h,
    style: u,
    onClick: a,
    ...o
  }, ...f);
}
function Qv({
  component: t = "div",
  className: e,
  text: n,
  attrs: o,
  children: s,
  style: r,
  onClick: l
}) {
  return ko(t, {
    className: F(e),
    style: r,
    onClick: l,
    ...o
  }, n, typeof s == "function" ? s() : s);
}
function tb({
  component: t = "div",
  className: e,
  style: n,
  space: o,
  flex: s,
  attrs: r,
  onClick: l,
  children: c
}) {
  return ko(t, {
    className: F(e),
    style: { width: o, height: o, flex: s, ...n },
    onClick: l,
    ...r
  }, c);
}
function eb(t) {
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
      m != null && (typeof m == "object" && !Ch(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ Hh("div", { className: F(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? f.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(i, m.attrs)) : a.push(m));
    });
  }), f.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: f } }), [{
    className: F(d),
    style: u,
    ...i
  }, a];
}
function ya({
  tag: t = "div",
  ...e
}) {
  const [n, o] = eb(e);
  return Ah(t, n, ...o);
}
function nb({ type: t, ...e }) {
  return /* @__PURE__ */ qt(ya, { ...e });
}
function Kh({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: s
}) {
  return ko(t, {
    className: F(e),
    style: o,
    ...s
  }, n);
}
var Eo;
let mo = (Eo = class extends Oo {
  constructor() {
    super(...arguments);
    M(this, "ref", Yv());
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
          return /* @__PURE__ */ qt(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, ko);
        if (Ih(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: c = "item", component: _, key: h = s, rootAttrs: i, rootClass: d, rootStyle: u, rootChildren: a, ...f } = r;
    if (c === "html")
      return /* @__PURE__ */ qt(
        "li",
        {
          className: F("action-menu-item", `${this.name}-html`, d, f.className),
          ...i,
          style: u || f.style,
          dangerouslySetInnerHTML: { __html: f.html }
        },
        h
      );
    const v = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || mo.ItemComponents[c] : _;
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
    const { children: r, className: l, key: c, ..._ } = o, { activeClass: h = "", activeKey: i, activeIcon: d } = this.props, u = d && i === c ? /* @__PURE__ */ qt("i", { className: `checked icon icon-${d}` }) : null, a = i === c;
    return /* @__PURE__ */ qt(
      "li",
      {
        className: F("action-menu-item", `${this.name}-${s.type}`, l, { [h]: a }),
        ..._,
        children: [
          /* @__PURE__ */ qt(n, { ...s }),
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
    return /* @__PURE__ */ qt(m, { class: F(this.name, l), style: s, ...p, ref: this.ref, children: [
      c && c.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, M(Eo, "ItemComponents", {
  divider: Zv,
  item: Jh,
  heading: Qv,
  space: tb,
  custom: nb,
  basic: Kh
}), M(Eo, "ROOT_TAG", "menu"), M(Eo, "NAME", "action-menu"), Eo);
class tu extends At {
}
M(tu, "NAME", "actionmenu"), M(tu, "Component", mo);
function eu({
  ...t
}) {
  return /* @__PURE__ */ qt(Jh, { ...t });
}
var fa, Yr, se, jn;
let Zh = (fa = class extends mo {
  constructor(n) {
    super(n);
    E(this, Yr, /* @__PURE__ */ new Set());
    E(this, se, void 0);
    E(this, jn, (n, o, s) => {
      this.toggleNestedMenu(n, o), s.preventDefault();
    });
    H(this, se, n.nestedShow === void 0), y(this, se) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
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
    return /* @__PURE__ */ qt(
      s,
      {
        items: o,
        name: r,
        nestedShow: y(this, se) ? this.state.nestedShow : c,
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
    y(this, Yr).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = eu), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: y(this, jn).bind(this, l, !0),
        onMouseLeave: y(this, jn).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = r;
      r.onClick = (i) => {
        y(this, jn).call(this, l, void 0, i), h == null || h(i);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = y(this, se) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, o);
    if (!y(this, se))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...y(this, Yr).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    y(this, se) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    y(this, se) && this.setState({ nestedShow: !1 });
  }
}, Yr = new WeakMap(), se = new WeakMap(), jn = new WeakMap(), M(fa, "ItemComponents", {
  item: eu
}), fa);
class nu extends At {
}
M(nu, "NAME", "actionmenunested"), M(nu, "Component", Zh);
var Ya, ut, Qh, Ho, ou, td = {}, ed = [], ob = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function je(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function nd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function rb(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ya.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Yi(t, l, o, s, null);
}
function Yi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Qh };
  return s == null && ut.vnode != null && ut.vnode(r), r;
}
function qa(t) {
  return t.children;
}
function Wo(t, e) {
  this.props = t, this.context = e;
}
function $r(t, e) {
  if (e == null)
    return t.__ ? $r(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? $r(t) : null;
}
function od(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return od(t);
  }
}
function ru(t) {
  (!t.__d && (t.__d = !0) && Ho.push(t) && !fs.__r++ || ou !== ut.debounceRendering) && ((ou = ut.debounceRendering) || setTimeout)(fs);
}
function fs() {
  for (var t; fs.__r = Ho.length; )
    t = Ho.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Ho = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = je({}, r)).__v = r.__v + 1, ld(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? $r(r), r.__h), sb(o, r), r.__e != l && od(r)));
    });
}
function rd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || ed, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Yi(null, a, null, null, a) : Array.isArray(a) ? Yi(qa, { children: a }, null, null, null) : a.__b > 0 ? Yi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      ld(t, a, u = u || td, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = id(a, _, t) : _ = sd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = $r(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && ad(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      cd(p[i], p[++i], p[++i]);
}
function id(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? id(o, e, n) : sd(n, o, o, s, o.__e, e));
  return e;
}
function sd(t, e, n, o, s, r) {
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
function ib(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || hs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || hs(t, r, e[r], n[r], o);
}
function iu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || ob.test(e) ? n : n + "px";
}
function hs(t, e, n, o, s) {
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
  this.l[t.type + !1](ut.event ? ut.event(t) : t);
}
function lu(t) {
  this.l[t.type + !0](ut.event ? ut.event(t) : t);
}
function ld(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ut.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Wo(p, g), i.constructor = b, i.render = cb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = je({}, i.__s)), je(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = je(je({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === qa && h.key == null ? h.props.children : h, rd(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = lb(n.__e, e, n, o, s, r, l, _);
    (h = ut.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ut.__e(x, e, n);
  }
}
function sb(t, e) {
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
function lb(t, e, n, o, s, r, l, c) {
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
    if (r = r && Ya.call(t.childNodes), h = (d = n.props || td).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (ib(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, rd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && $r(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && nd(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && hs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && hs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function cd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ut.__e(o, n);
  }
}
function ad(t, e, n) {
  var o, s;
  if (ut.unmount && ut.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || cd(o, null, e)), (o = t.__c) != null) {
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
      o[s] && ad(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || nd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function cb(t, e, n) {
  return this.constructor(t, n);
}
Ya = ed.slice, ut = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Qh = 0, Wo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = je({}, this.state), typeof t == "function" && (t = t(je({}, n), this.props)), t && je(n, t), t != null && this.__v && (e && this._sb.push(e), ru(this));
}, Wo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ru(this));
}, Wo.prototype.render = qa, Ho = [], fs.__r = 0;
var ab = 0;
function So(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ab, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ut.vnode && ut.vnode(_), _;
}
let fe = class extends Wo {
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
    return rb(
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
      i ? /* @__PURE__ */ So("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof a == "string" ? /* @__PURE__ */ So("i", { class: `icon ${a}` }) : a,
      S ? null : /* @__PURE__ */ So("span", { className: "text", children: i ? u : f }),
      i ? null : r,
      i ? null : typeof v == "string" ? /* @__PURE__ */ So("i", { class: `icon ${v}` }) : v,
      i ? null : p ? /* @__PURE__ */ So("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class cu extends At {
}
M(cu, "NAME", "button"), M(cu, "Component", fe);
var va;
va = { __e: function(t, e, n, o) {
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
var _b = 0;
function ub(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_b, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return va.vnode && va.vnode(_), _;
}
var ha;
let Ga = (ha = class extends Zh {
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
    return /* @__PURE__ */ ub("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, M(ha, "NAME", "menu"), ha);
class au extends At {
}
M(au, "NAME", "menu"), M(au, "Component", Ga);
let fb = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var _d, ft, ud, Io, _u, fd = {}, hd = [], hb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ze(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function dd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ta(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++ud };
  return s == null && ft.vnode != null && ft.vnode(r), r;
}
function Xa(t) {
  return t.children;
}
function Uo(t, e) {
  this.props = t, this.context = e;
}
function kr(t, e) {
  if (e == null)
    return t.__ ? kr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? kr(t) : null;
}
function pd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return pd(t);
  }
}
function uu(t) {
  (!t.__d && (t.__d = !0) && Io.push(t) && !ds.__r++ || _u !== ft.debounceRendering) && ((_u = ft.debounceRendering) || setTimeout)(ds);
}
function ds() {
  for (var t; ds.__r = Io.length; )
    t = Io.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Io = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = ze({}, r)).__v = r.__v + 1, vd(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? kr(r), r.__h), pb(o, r), r.__e != l && pd(r)));
    });
}
function md(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || hd, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ta(null, a, null, null, a) : Array.isArray(a) ? ta(Xa, { children: a }, null, null, null) : a.__b > 0 ? ta(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      vd(t, a, u = u || fd, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = gd(a, _, t) : _ = yd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = kr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && wd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      bd(p[i], p[++i], p[++i]);
}
function gd(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? gd(o, e, n) : yd(n, o, o, s, o.__e, e));
  return e;
}
function yd(t, e, n, o, s, r) {
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
function db(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ps(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ps(t, r, e[r], n[r], o);
}
function fu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || hb.test(e) ? n : n + "px";
}
function ps(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || fu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || fu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? du : hu, r) : t.removeEventListener(e, r ? du : hu, r);
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
function hu(t) {
  this.l[t.type + !1](ft.event ? ft.event(t) : t);
}
function du(t) {
  this.l[t.type + !0](ft.event ? ft.event(t) : t);
}
function vd(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ft.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Uo(p, g), i.constructor = b, i.render = gb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = ze({}, i.__s)), ze(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = ze(ze({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === Xa && h.key == null ? h.props.children : h, md(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = mb(n.__e, e, n, o, s, r, l, _);
    (h = ft.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ft.__e(x, e, n);
  }
}
function pb(t, e) {
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
    if (r = r && _d.call(t.childNodes), h = (d = n.props || fd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (db(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, md(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && kr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && dd(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && ps(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && ps(t, "checked", f, d.checked, !1));
  }
  return t;
}
function bd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ft.__e(o, n);
  }
}
function wd(t, e, n) {
  var o, s;
  if (ft.unmount && ft.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || bd(o, null, e)), (o = t.__c) != null) {
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
      o[s] && wd(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || dd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function gb(t, e, n) {
  return this.constructor(t, n);
}
_d = hd.slice, ft = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, ud = 0, Uo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ze({}, this.state), typeof t == "function" && (t = t(ze({}, n), this.props)), t && ze(n, t), t != null && this.__v && (e && this._sb.push(e), uu(this));
}, Uo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), uu(this));
}, Uo.prototype.render = Xa, Io = [], ds.__r = 0;
var yb = 0;
function vb(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --yb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ft.vnode && ft.vnode(_), _;
}
var ba, On;
ba = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, On = function(t) {
  return t != null && t.constructor === void 0;
};
var bb = 0;
function ye(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --bb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ba.vnode && ba.vnode(_), _;
}
var wa;
wa = { __e: function(t, e, n, o) {
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
var wb = 0;
function Ec(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --wb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return wa.vnode && wa.vnode(_), _;
}
function $b({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Ec(fe, { type: n, ...o });
}
var $d, ht, kd, Fo, pu, xd = {}, Sd = [], kb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ve(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Cd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ea(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++kd };
  return s == null && ht.vnode != null && ht.vnode(r), r;
}
function xb() {
  return { current: null };
}
function Ja(t) {
  return t.children;
}
function Bo(t, e) {
  this.props = t, this.context = e;
}
function xr(t, e) {
  if (e == null)
    return t.__ ? xr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? xr(t) : null;
}
function Ed(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ed(t);
  }
}
function mu(t) {
  (!t.__d && (t.__d = !0) && Fo.push(t) && !ms.__r++ || pu !== ht.debounceRendering) && ((pu = ht.debounceRendering) || setTimeout)(ms);
}
function ms() {
  for (var t; ms.__r = Fo.length; )
    t = Fo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Fo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ve({}, r)).__v = r.__v + 1, Md(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? xr(r), r.__h), Cb(o, r), r.__e != l && Ed(r)));
    });
}
function Td(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Sd, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ea(null, a, null, null, a) : Array.isArray(a) ? ea(Ja, { children: a }, null, null, null) : a.__b > 0 ? ea(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Md(t, a, u = u || xd, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Ad(a, _, t) : _ = Ld(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = xr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Nd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Rd(p[i], p[++i], p[++i]);
}
function Ad(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Ad(o, e, n) : Ld(n, o, o, s, o.__e, e));
  return e;
}
function Ld(t, e, n, o, s, r) {
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
function Sb(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || gs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || gs(t, r, e[r], n[r], o);
}
function gu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || kb.test(e) ? n : n + "px";
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
            n && e in n || gu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || gu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? vu : yu, r) : t.removeEventListener(e, r ? vu : yu, r);
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
function yu(t) {
  this.l[t.type + !1](ht.event ? ht.event(t) : t);
}
function vu(t) {
  this.l[t.type + !0](ht.event ? ht.event(t) : t);
}
function Md(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ht.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Bo(p, g), i.constructor = b, i.render = Tb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ve({}, i.__s)), Ve(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = Ve(Ve({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === Ja && h.key == null ? h.props.children : h, Td(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Eb(n.__e, e, n, o, s, r, l, _);
    (h = ht.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ht.__e(x, e, n);
  }
}
function Cb(t, e) {
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
function Eb(t, e, n, o, s, r, l, c) {
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
    if (r = r && $d.call(t.childNodes), h = (d = n.props || xd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Sb(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Td(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && xr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Cd(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && gs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && gs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Rd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ht.__e(o, n);
  }
}
function Nd(t, e, n) {
  var o, s;
  if (ht.unmount && ht.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Rd(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Nd(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Cd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Tb(t, e, n) {
  return this.constructor(t, n);
}
$d = Sd.slice, ht = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, kd = 0, Bo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ve({}, this.state), typeof t == "function" && (t = t(Ve({}, n), this.props)), t && Ve(n, t), t != null && this.__v && (e && this._sb.push(e), mu(this));
}, Bo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), mu(this));
}, Bo.prototype.render = Ja, Fo = [], ms.__r = 0;
var Ab = 0;
function Dd(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ab, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ht.vnode && ht.vnode(_), _;
}
var Tc, rt, Pd, jo, bu, ys = {}, Od = [], Lb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ye(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Hd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Wd(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Tc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return qi(t, l, o, s, null);
}
function qi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Pd };
  return s == null && rt.vnode != null && rt.vnode(r), r;
}
function Ac(t) {
  return t.children;
}
function Gi(t, e) {
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
function Id(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Id(t);
  }
}
function wu(t) {
  (!t.__d && (t.__d = !0) && jo.push(t) && !vs.__r++ || bu !== rt.debounceRendering) && ((bu = rt.debounceRendering) || setTimeout)(vs);
}
function vs() {
  for (var t; vs.__r = jo.length; )
    t = jo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), jo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ye({}, r)).__v = r.__v + 1, Ka(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Sr(r), r.__h), jd(o, r), r.__e != l && Id(r)));
    });
}
function Ud(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Od, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? qi(null, a, null, null, a) : Array.isArray(a) ? qi(Ac, { children: a }, null, null, null) : a.__b > 0 ? qi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Ka(t, a, u = u || ys, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Fd(a, _, t) : _ = Bd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Sr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Vd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      zd(p[i], p[++i], p[++i]);
}
function Fd(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Fd(o, e, n) : Bd(n, o, o, s, o.__e, e));
  return e;
}
function Bd(t, e, n, o, s, r) {
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
function Mb(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || bs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || bs(t, r, e[r], n[r], o);
}
function $u(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Lb.test(e) ? n : n + "px";
}
function bs(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || $u(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || $u(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? xu : ku, r) : t.removeEventListener(e, r ? xu : ku, r);
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
function ku(t) {
  this.l[t.type + !1](rt.event ? rt.event(t) : t);
}
function xu(t) {
  this.l[t.type + !0](rt.event ? rt.event(t) : t);
}
function Ka(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = rt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Gi(p, g), i.constructor = b, i.render = Nb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ye({}, i.__s)), Ye(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = Ye(Ye({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === Ac && h.key == null ? h.props.children : h, Ud(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Rb(n.__e, e, n, o, s, r, l, _);
    (h = rt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), rt.__e(x, e, n);
  }
}
function jd(t, e) {
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
function Rb(t, e, n, o, s, r, l, c) {
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
    if (r = r && Tc.call(t.childNodes), h = (d = n.props || ys).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Mb(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Ud(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Sr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Hd(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && bs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && bs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function zd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    rt.__e(o, n);
  }
}
function Vd(t, e, n) {
  var o, s;
  if (rt.unmount && rt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || zd(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Vd(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Hd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Nb(t, e, n) {
  return this.constructor(t, n);
}
function Db(t, e, n) {
  var o, s, r;
  rt.__ && rt.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Ka(e, t = (!o && n || e).__k = Wd(Ac, null, [t]), s || ys, ys, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Tc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), jd(r, t);
}
Tc = Od.slice, rt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Pd = 0, Gi.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ye({}, this.state), typeof t == "function" && (t = t(Ye({}, n), this.props)), t && Ye(n, t), t != null && this.__v && (e && this._sb.push(e), wu(this));
}, Gi.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), wu(this));
}, Gi.prototype.render = Ac, jo = [], vs.__r = 0;
function Pb(t) {
  return t.button === 2;
}
var Ob = 0;
function Hb(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ob, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return rt.vnode && rt.vnode(_), _;
}
function Za(t) {
  return t.split("-")[1];
}
function Yd(t) {
  return t === "y" ? "height" : "width";
}
function Cr(t) {
  return t.split("-")[0];
}
function qd(t) {
  return ["top", "bottom"].includes(Cr(t)) ? "x" : "y";
}
function Su(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = qd(e), _ = Yd(c), h = o[_] / 2 - s[_] / 2, i = Cr(e), d = c === "x";
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
  switch (Za(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const Wb = async (t, e, n) => {
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
  } = Su(h, o, _), u = o, a = {}, f = 0;
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
      } = Su(h, u, _)), v = -1;
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
function Ib(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ub(t) {
  return typeof t != "number" ? Ib(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ws(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Fb(t, e) {
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
  } = e, f = Ub(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = ws(await r.getClippingRect({
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
  }, S = ws(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Bb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $s(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Bb[e]);
}
function jb(t, e, n) {
  n === void 0 && (n = !1);
  const o = Za(t), s = qd(t), r = Yd(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = $s(l)), {
    main: l,
    cross: $s(l)
  };
}
const zb = {
  start: "end",
  end: "start"
};
function $a(t) {
  return t.replace(/start|end/g, (e) => zb[e]);
}
function Vb(t) {
  const e = $s(t);
  return [$a(t), e, $a(e)];
}
function Yb(t, e, n) {
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
function qb(t, e, n, o) {
  const s = Za(t);
  let r = Yb(Cr(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map($a)))), r;
}
const Gd = function(t) {
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
      } = t, p = Cr(o), m = Cr(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [$s(l)] : Vb(l));
      !d && a !== "none" && w.push(...qb(l, f, a, g));
      const $ = [l, ...w], S = await Fb(e, v), A = [];
      let T = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = jb(o, r, g);
        A.push(S[R], S[q]);
      }
      if (T = [...T, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var b;
        const R = (((b = s.flip) == null ? void 0 : b.index) || 0) + 1, q = $[R];
        if (q)
          return {
            data: {
              index: R,
              overflows: T
            },
            reset: {
              placement: q
            }
          };
        let j = "bottom";
        switch (u) {
          case "bestFit": {
            var x;
            const N = (x = T.map((C) => [C, C.overflows.filter((k) => k > 0).reduce((k, D) => k + D, 0)]).sort((C, k) => C[1] - k[1])[0]) == null ? void 0 : x[0].placement;
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
function Gt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function he(t) {
  return Gt(t).getComputedStyle(t);
}
function ln(t) {
  return Jd(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Ri;
function Xd() {
  if (Ri)
    return Ri;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Ri = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Ri) : navigator.userAgent;
}
function Ce(t) {
  return t instanceof Gt(t).HTMLElement;
}
function ee(t) {
  return t instanceof Gt(t).Element;
}
function Jd(t) {
  return t instanceof Gt(t).Node;
}
function Cu(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Gt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Lc(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = he(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function Gb(t) {
  return ["table", "td", "th"].includes(ln(t));
}
function Qa(t) {
  const e = /firefox/i.test(Xd()), n = he(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function Kd() {
  return !/^((?!chrome|android).)*safari/i.test(Xd());
}
function t_(t) {
  return ["html", "body", "#document"].includes(ln(t));
}
const Eu = Math.min, zo = Math.max, ks = Math.round;
function Zd(t) {
  const e = he(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = ks(n) !== s || ks(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Qd(t) {
  return ee(t) ? t : t.contextElement;
}
const tp = {
  x: 1,
  y: 1
};
function Hn(t) {
  const e = Qd(t);
  if (!Ce(e))
    return tp;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = Zd(e);
  let l = (r ? ks(n.width) : n.width) / o, c = (r ? ks(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function An(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Qd(t);
  let _ = tp;
  e && (o ? ee(o) && (_ = Hn(o)) : _ = Hn(t));
  const h = c ? Gt(c) : window, i = !Kd() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const v = Gt(c), p = o && ee(o) ? Gt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = Hn(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat($.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat($.paddingTop)) * g.y, d *= g.x, u *= g.y, a *= g.x, f *= g.y, d += w.x, u += w.y, m = Gt(m).frameElement;
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
function un(t) {
  return ((Jd(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Mc(t) {
  return ee(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function ep(t) {
  return An(un(t)).left + Mc(t).scrollLeft;
}
function Xb(t, e, n) {
  const o = Ce(e), s = un(e), r = An(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((ln(e) !== "body" || Lc(s)) && (l = Mc(e)), Ce(e)) {
      const _ = An(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = ep(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Er(t) {
  if (ln(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (Cu(t) ? t.host : null) || // Fallback
    un(t)
  );
  return Cu(e) ? e.host : e;
}
function Tu(t) {
  return !Ce(t) || he(t).position === "fixed" ? null : t.offsetParent;
}
function Jb(t) {
  let e = Er(t);
  for (; Ce(e) && !t_(e); ) {
    if (Qa(e))
      return e;
    e = Er(e);
  }
  return null;
}
function Au(t) {
  const e = Gt(t);
  let n = Tu(t);
  for (; n && Gb(n) && he(n).position === "static"; )
    n = Tu(n);
  return n && (ln(n) === "html" || ln(n) === "body" && he(n).position === "static" && !Qa(n)) ? e : n || Jb(t) || e;
}
function Kb(t) {
  return Zd(t);
}
function Zb(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const s = Ce(n), r = un(n);
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
  if ((s || !s && o !== "fixed") && ((ln(n) !== "body" || Lc(r)) && (l = Mc(n)), Ce(n))) {
    const h = An(n);
    c = Hn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Qb(t, e) {
  const n = Gt(t), o = un(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = Kd();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function t0(t) {
  var e;
  const n = un(t), o = Mc(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = zo(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = zo(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + ep(t);
  const _ = -o.scrollTop;
  return he(s || n).direction === "rtl" && (c += zo(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function np(t) {
  const e = Er(t);
  return t_(e) ? t.ownerDocument.body : Ce(e) && Lc(e) ? e : np(e);
}
function Vo(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = np(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Gt(o);
  return s ? e.concat(r, r.visualViewport || [], Lc(o) ? o : []) : e.concat(o, Vo(o));
}
function e0(t, e) {
  const n = An(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Ce(t) ? Hn(t) : {
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
function Lu(t, e, n) {
  return e === "viewport" ? ws(Qb(t, n)) : ee(e) ? e0(e, n) : ws(t0(un(t)));
}
function n0(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Vo(t).filter((c) => ee(c) && ln(c) !== "body"), s = null;
  const r = he(t).position === "fixed";
  let l = r ? Er(t) : t;
  for (; ee(l) && !t_(l); ) {
    const c = he(l), _ = Qa(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Er(l);
  }
  return e.set(t, o), o;
}
function o0(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? n0(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = Lu(e, i, s);
    return h.top = zo(d.top, h.top), h.right = Eu(d.right, h.right), h.bottom = Eu(d.bottom, h.bottom), h.left = zo(d.left, h.left), h;
  }, Lu(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const r0 = {
  getClippingRect: o0,
  convertOffsetParentRelativeRectToViewportRelativeRect: Zb,
  isElement: ee,
  getDimensions: Kb,
  getOffsetParent: Au,
  getDocumentElement: un,
  getScale: Hn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || Au, r = this.getDimensions;
    return {
      reference: Xb(e, await s(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => he(t).direction === "rtl"
};
function i0(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...ee(t) ? Vo(t) : t.contextElement ? Vo(t.contextElement) : [], ...Vo(e)] : [];
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
    }), ee(t) && !c && i.observe(t), !ee(t) && t.contextElement && !c && i.observe(t.contextElement), i.observe(e);
  }
  let d, u = c ? An(t) : null;
  c && a();
  function a() {
    const f = An(t);
    u && (f.x !== u.x || f.y !== u.y || f.width !== u.width || f.height !== u.height) && n(), u = f, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var f;
    h.forEach((v) => {
      _ && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), (f = i) == null || f.disconnect(), i = null, c && cancelAnimationFrame(d);
  };
}
const op = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: r0,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return Wb(t, e, {
    ...s,
    platform: r
  });
};
let s0 = class extends Ga {
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
      middleware: [Gd()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  _createPopper() {
    const e = this._getPopperOptions();
    this.ref.current && op(this._getPopperElement(), this.ref.current, e).then(({ x: n, y: o }) => {
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
    return /* @__PURE__ */ Hb("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var De, zn, qr, Gr, hl, rp, dl, ip;
class Wt extends ie {
  constructor() {
    super(...arguments);
    E(this, hl);
    E(this, dl);
    E(this, De, void 0);
    E(this, zn, void 0);
    E(this, qr, void 0);
    M(this, "arrowEl");
    E(this, Gr, void 0);
  }
  get isShown() {
    var n;
    return (n = y(this, De)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return y(this, De) || this._ensureMenu();
  }
  get trigger() {
    return y(this, qr) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, qr, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var o, s;
    return (o = y(this, Gr)) == null || o.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((s = y(this, De)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    super.destroy(), (n = y(this, De)) == null || n.remove();
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
    return s.style.width = "max-content", s.style.position = this.options.strategy, s.style.top = "0", s.style.left = "0", H(this, De, s), s;
  }
  _getPopperOptions() {
    var r;
    const { placement: n, strategy: o } = this.options, s = {
      middleware: [],
      placement: n,
      strategy: o
    };
    return this.options.flip && ((r = s.middleware) == null || r.push(Gd())), s;
  }
  _createPopper() {
    const n = this._getPopperOptions(), o = this._getPopperElement();
    H(this, Gr, i0(o, this.menu, () => {
      op(o, this.menu, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
        Object.assign(this.menu.style, {
          left: `${s}px`,
          top: `${r}px`
        });
        const _ = c.split("-")[0], h = W(this, hl, rp).call(this, _);
        if (l.arrow && this.arrowEl) {
          const { x: i, y: d } = l.arrow;
          Object.assign(this.arrowEl.style, {
            left: i != null ? `${i}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...W(this, dl, ip).call(this, _)
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Db(Wd(s0, n), this.menu), !0);
  }
  _getPopperElement() {
    return y(this, zn) || H(this, zn, {
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
    }), y(this, zn);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)) || o && Pb(o))
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
De = new WeakMap(), zn = new WeakMap(), qr = new WeakMap(), Gr = new WeakMap(), hl = new WeakSet(), rp = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, dl = new WeakSet(), ip = function(n) {
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
}, M(Wt, "NAME", "contextmenu"), M(Wt, "EVENTS", !0), M(Wt, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), M(Wt, "MENU_CLASS", "contextmenu"), M(Wt, "CLASS_SHOW", "show"), M(Wt, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (t) => {
  const e = t.target;
  if (e.closest(`.${Wt.MENU_CLASS}`))
    return;
  const n = e.closest(Wt.MENU_SELECTOR);
  n && (Wt.ensure(n).show(t), t.preventDefault());
});
document.addEventListener("click", Wt.clear.bind(Wt));
function sp(t) {
  return t.split("-")[1];
}
function l0(t) {
  return t === "y" ? "height" : "width";
}
function lp(t) {
  return t.split("-")[0];
}
function cp(t) {
  return ["top", "bottom"].includes(lp(t)) ? "x" : "y";
}
function c0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function a0(t) {
  return typeof t != "number" ? c0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
const _0 = Math.min, u0 = Math.max;
function f0(t, e, n) {
  return u0(t, _0(e, n));
}
const h0 = (t) => ({
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
    const h = a0(o), i = {
      x: s,
      y: r
    }, d = cp(l), u = l0(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], T = w / 2 - a[u] / 2 + $, b = f0(S, T, A), R = sp(l) != null && T != b && c.reference[u] / 2 - (T < S ? h[f] : h[v]) - a[u] / 2 < 0 ? T < S ? S - T : A - T : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: T - b
      }
    };
  }
});
async function d0(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = lp(n), c = sp(n), _ = cp(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const p0 = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await d0(e, t);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
var Vn, Yn, qn, pl, ap;
const P_ = class extends Wt {
  constructor() {
    super(...arguments);
    E(this, pl);
    E(this, Vn, !1);
    E(this, Yn, 0);
    M(this, "hideLater", () => {
      y(this, qn).call(this), H(this, Yn, window.setTimeout(this.hide.bind(this), 100));
    });
    E(this, qn, () => {
      clearTimeout(y(this, Yn)), H(this, Yn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && P_.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!y(this, Vn) && this.isHover && W(this, pl, ap).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    y(this, Vn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", y(this, qn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 8 : 0;
  }
  _getPopperOptions() {
    var s, r;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && this.arrowEl && ((s = n.middleware) == null || s.push(p0(o)), (r = n.middleware) == null || r.push(h0({ element: this.arrowEl }))), n;
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
let Nt = P_;
Vn = new WeakMap(), Yn = new WeakMap(), qn = new WeakMap(), pl = new WeakSet(), ap = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", y(this, qn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Vn, !0);
}, M(Nt, "NAME", "dropdown"), M(Nt, "MENU_CLASS", "dropdown-menu"), M(Nt, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), M(Nt, "DEFAULT", {
  ...Wt.DEFAULT,
  strategy: "fixed",
  trigger: "click"
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Nt.MENU_SELECTOR);
  if (n) {
    const o = Nt.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Nt.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(Nt.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Nt.ensure(n);
  o.isHover && o.show();
});
const m0 = (t) => {
  const e = document.getElementsByClassName("with-dropdown-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Nt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Nt.clear({ event: t });
};
window.addEventListener("scroll", m0, !0);
var Xr, Gn;
class g0 extends Bo {
  constructor(n) {
    var o;
    super(n);
    E(this, Xr, void 0);
    E(this, Gn, xb());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return y(this, Gn);
  }
  get triggerElement() {
    return y(this, Gn).current;
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
    }), H(this, Xr, Nt.ensure(this.triggerElement, {
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
    (n = y(this, Xr)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: s, ...r } = this.props;
    return {
      className: F("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: y(this, Gn)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ Dd("div", { ...o, children: n });
  }
}
Xr = new WeakMap(), Gn = new WeakMap();
class y0 extends g0 {
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
    return o.caret = s, /* @__PURE__ */ Dd(fe, { ...o });
  }
}
function _p({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Ec(y0, { type: n, ...o });
}
var e_, dt, up, fp, Yo, Mu, hp = {}, dp = [], v0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function pp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function b0(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? e_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Xi(t, l, o, s, null);
}
function Xi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++up };
  return s == null && dt.vnode != null && dt.vnode(r), r;
}
function n_(t) {
  return t.children;
}
function qo(t, e) {
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
function mp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return mp(t);
  }
}
function Ru(t) {
  (!t.__d && (t.__d = !0) && Yo.push(t) && !xs.__r++ || Mu !== dt.debounceRendering) && ((Mu = dt.debounceRendering) || setTimeout)(xs);
}
function xs() {
  for (var t; xs.__r = Yo.length; )
    t = Yo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Yo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = qe({}, r)).__v = r.__v + 1, bp(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Tr(r), r.__h), $0(o, r), r.__e != l && mp(r)));
    });
}
function gp(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || dp, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Xi(null, a, null, null, a) : Array.isArray(a) ? Xi(n_, { children: a }, null, null, null) : a.__b > 0 ? Xi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      bp(t, a, u = u || hp, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = yp(a, _, t) : _ = vp(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Tr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && $p(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      wp(p[i], p[++i], p[++i]);
}
function yp(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? yp(o, e, n) : vp(n, o, o, s, o.__e, e));
  return e;
}
function vp(t, e, n, o, s, r) {
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
function w0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ss(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ss(t, r, e[r], n[r], o);
}
function Nu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || v0.test(e) ? n : n + "px";
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
            n && e in n || Nu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Nu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Pu : Du, r) : t.removeEventListener(e, r ? Pu : Du, r);
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
function Du(t) {
  this.l[t.type + !1](dt.event ? dt.event(t) : t);
}
function Pu(t) {
  this.l[t.type + !0](dt.event ? dt.event(t) : t);
}
function bp(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = dt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new qo(p, g), i.constructor = b, i.render = x0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = qe({}, i.__s)), qe(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = qe(qe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === n_ && h.key == null ? h.props.children : h, gp(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = k0(n.__e, e, n, o, s, r, l, _);
    (h = dt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), dt.__e(x, e, n);
  }
}
function $0(t, e) {
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
function k0(t, e, n, o, s, r, l, c) {
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
    if (r = r && e_.call(t.childNodes), h = (d = n.props || hp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (w0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, gp(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Tr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && pp(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ss(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ss(t, "checked", f, d.checked, !1));
  }
  return t;
}
function wp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    dt.__e(o, n);
  }
}
function $p(t, e, n) {
  var o, s;
  if (dt.unmount && dt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || wp(o, null, e)), (o = t.__c) != null) {
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
      o[s] && $p(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || pp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function x0(t, e, n) {
  return this.constructor(t, n);
}
e_ = dp.slice, dt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, up = 0, fp = function(t) {
  return t != null && t.constructor === void 0;
}, qo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qe({}, this.state), typeof t == "function" && (t = t(qe({}, n), this.props)), t && qe(n, t), t != null && this.__v && (e && this._sb.push(e), Ru(this));
}, qo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ru(this));
}, qo.prototype.render = n_, Yo = [], xs.__r = 0;
var S0 = 0;
function Ou(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --S0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return dt.vnode && dt.vnode(_), _;
}
let kp = class extends qo {
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
    return /* @__PURE__ */ Ou(fe, { ...s }, o);
  }
  renderItem(e, n, o) {
    const { itemRender: s, defaultBtnProps: r, onClickItem: l } = e, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), s) {
      const _ = s.call(this, c, b0);
      if (fp(_))
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
    return /* @__PURE__ */ Ou(
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
function C0({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Ec(kp, { type: n, ...o });
}
var Pn;
let go = (Pn = class extends mo {
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
    return /* @__PURE__ */ Ec(e, { ...r });
  }
}, M(Pn, "ItemComponents", {
  item: $b,
  dropdown: _p,
  "btn-group": C0
}), M(Pn, "ROOT_TAG", "nav"), M(Pn, "NAME", "toolbar"), M(Pn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), Pn);
function E0({
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
  c === !0 ? d = /* @__PURE__ */ ye(fe, { className: "alert-close btn ghost", square: !0, onClick: _, children: /* @__PURE__ */ ye("span", { class: "close" }) }) : On(c) ? d = c : typeof c == "object" && (d = /* @__PURE__ */ ye(fe, { ...c, onClick: _ }));
  const u = On(n) ? n : n ? /* @__PURE__ */ ye(go, { ...n }) : null;
  return /* @__PURE__ */ ye("div", { className: F("alert", t), style: e, ...i, children: [
    On(h) ? h : typeof h == "string" ? /* @__PURE__ */ ye("i", { className: `icon ${h}` }) : null,
    On(s) ? s : /* @__PURE__ */ ye("div", { className: F("alert-content", r), children: [
      On(o) ? o : o && /* @__PURE__ */ ye("div", { className: "alert-heading", children: o }),
      /* @__PURE__ */ ye("div", { className: "alert-text", children: s }),
      o ? u : null
    ] }),
    o ? null : u,
    d,
    l
  ] });
}
function T0(t) {
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
let A0 = class extends Uo {
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
    return /* @__PURE__ */ vb(
      E0,
      {
        className: F("messager", _, s, l === !0 ? T0(r) : l, c ? "in" : ""),
        ...i
      }
    );
  }
};
var Xn, Ki;
class Ji extends At {
  constructor() {
    super(...arguments);
    E(this, Xn);
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
    this._show || (this.emit("show"), this.render(), this._show = !0, W(this, Xn, Ki).call(this, () => {
      this.emit("shown");
      const { time: n } = this.options;
      n && W(this, Xn, Ki).call(this, () => this.hide(), n);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), W(this, Xn, Ki).call(this, () => {
      this.emit("hidden");
    }));
  }
}
Xn = new WeakSet(), Ki = function(n, o = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, o);
}, M(Ji, "NAME", "MessagerItem"), M(Ji, "EVENTS", !0), M(Ji, "Component", A0);
var wn, Jn, xe, ml, xp, gl, Sp;
const O_ = class extends ie {
  constructor() {
    super(...arguments);
    E(this, ml);
    E(this, gl);
    E(this, wn, void 0);
    E(this, Jn, fb(6));
    E(this, xe, void 0);
  }
  get id() {
    return y(this, Jn);
  }
  get isShown() {
    var n;
    return !!((n = y(this, xe)) != null && n.isShown);
  }
  show(n) {
    this.setOptions(n), W(this, ml, xp).call(this).show();
  }
  hide() {
    var n;
    (n = y(this, xe)) == null || n.hide();
  }
  static show(n) {
    typeof n == "string" && (n = { content: n });
    const { container: o, ...s } = n, r = new O_(o || "body", s);
    return r.show(), r;
  }
};
let Ni = O_;
wn = new WeakMap(), Jn = new WeakMap(), xe = new WeakMap(), ml = new WeakSet(), xp = function() {
  if (y(this, xe))
    y(this, xe).setOptions(this.options);
  else {
    const n = W(this, gl, Sp).call(this), o = new Ji(n, this.options);
    o.on("hidden", () => {
      o.destroy(), n.remove(), H(this, wn, void 0);
    }), H(this, xe, o);
  }
  return y(this, xe);
}, gl = new WeakSet(), Sp = function() {
  if (y(this, wn))
    return y(this, wn);
  const { placement: n = "top" } = this.options;
  let o = this.element.querySelector(`.messagers-${n}`);
  o || (o = document.createElement("div"), o.className = `messagers messagers-${n}`, this.element.appendChild(o));
  let s = o.querySelector(`#messager-${y(this, Jn)}`);
  return s || (s = document.createElement("div"), s.className = "messager-holder", s.id = `messager-${y(this, Jn)}`, o.appendChild(s), H(this, wn, s)), s;
}, M(Ni, "NAME", "messager"), M(Ni, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
var Cp, pt, Ep, Go, Hu, Tp = {}, Ap = [], L0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ge(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Lp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function na(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Ep };
  return s == null && pt.vnode != null && pt.vnode(r), r;
}
function o_(t) {
  return t.children;
}
function Xo(t, e) {
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
function Mp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Mp(t);
  }
}
function Wu(t) {
  (!t.__d && (t.__d = !0) && Go.push(t) && !Cs.__r++ || Hu !== pt.debounceRendering) && ((Hu = pt.debounceRendering) || setTimeout)(Cs);
}
function Cs() {
  for (var t; Cs.__r = Go.length; )
    t = Go.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Go = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ge({}, r)).__v = r.__v + 1, Pp(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ar(r), r.__h), R0(o, r), r.__e != l && Mp(r)));
    });
}
function Rp(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Ap, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? na(null, a, null, null, a) : Array.isArray(a) ? na(o_, { children: a }, null, null, null) : a.__b > 0 ? na(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Pp(t, a, u = u || Tp, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Np(a, _, t) : _ = Dp(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Ar(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Hp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Op(p[i], p[++i], p[++i]);
}
function Np(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Np(o, e, n) : Dp(n, o, o, s, o.__e, e));
  return e;
}
function Dp(t, e, n, o, s, r) {
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
function M0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Es(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Es(t, r, e[r], n[r], o);
}
function Iu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || L0.test(e) ? n : n + "px";
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
            n && e in n || Iu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Iu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Fu : Uu, r) : t.removeEventListener(e, r ? Fu : Uu, r);
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
function Uu(t) {
  this.l[t.type + !1](pt.event ? pt.event(t) : t);
}
function Fu(t) {
  this.l[t.type + !0](pt.event ? pt.event(t) : t);
}
function Pp(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = pt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Xo(p, g), i.constructor = b, i.render = D0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ge({}, i.__s)), Ge(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = Ge(Ge({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === o_ && h.key == null ? h.props.children : h, Rp(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = N0(n.__e, e, n, o, s, r, l, _);
    (h = pt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), pt.__e(x, e, n);
  }
}
function R0(t, e) {
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
function N0(t, e, n, o, s, r, l, c) {
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
    if (r = r && Cp.call(t.childNodes), h = (d = n.props || Tp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (M0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Rp(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ar(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Lp(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Es(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Es(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Op(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    pt.__e(o, n);
  }
}
function Hp(t, e, n) {
  var o, s;
  if (pt.unmount && pt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Op(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Hp(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Lp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function D0(t, e, n) {
  return this.constructor(t, n);
}
Cp = Ap.slice, pt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Ep = 0, Xo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ge({}, this.state), typeof t == "function" && (t = t(Ge({}, n), this.props)), t && Ge(n, t), t != null && this.__v && (e && this._sb.push(e), Wu(this));
}, Xo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Wu(this));
}, Xo.prototype.render = o_, Go = [], Cs.__r = 0;
var P0 = 0;
function Di(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --P0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pt.vnode && pt.vnode(_), _;
}
var Fi;
let O0 = (Fi = class extends Xo {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: o, circleBgColor: s, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ Di("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ Di("circle", { cx: c, cy: c, r: l, stroke: s, "stroke-width": o }),
      /* @__PURE__ */ Di("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - e) / 100, "stroke-width": o }),
      /* @__PURE__ */ Di("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(e) })
    ] });
  }
}, M(Fi, "NAME", "zui.progress-circle"), M(Fi, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), Fi);
class Bu extends At {
}
M(Bu, "NAME", "table-sorter"), M(Bu, "Component", O0);
var r_, mt, Wp, Jo, ju, Ip = {}, Up = [], H0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Fp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function W0(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? r_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Zi(t, l, o, s, null);
}
function Zi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Wp };
  return s == null && mt.vnode != null && mt.vnode(r), r;
}
function i_(t) {
  return t.children;
}
function Ko(t, e) {
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
function Bp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Bp(t);
  }
}
function zu(t) {
  (!t.__d && (t.__d = !0) && Jo.push(t) && !Ts.__r++ || ju !== mt.debounceRendering) && ((ju = mt.debounceRendering) || setTimeout)(Ts);
}
function Ts() {
  for (var t; Ts.__r = Jo.length; )
    t = Jo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Jo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Xe({}, r)).__v = r.__v + 1, Yp(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Lr(r), r.__h), U0(o, r), r.__e != l && Bp(r)));
    });
}
function jp(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Up, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Zi(null, a, null, null, a) : Array.isArray(a) ? Zi(i_, { children: a }, null, null, null) : a.__b > 0 ? Zi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Yp(t, a, u = u || Ip, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = zp(a, _, t) : _ = Vp(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Lr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Gp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      qp(p[i], p[++i], p[++i]);
}
function zp(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? zp(o, e, n) : Vp(n, o, o, s, o.__e, e));
  return e;
}
function Vp(t, e, n, o, s, r) {
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
function I0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || As(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || As(t, r, e[r], n[r], o);
}
function Vu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || H0.test(e) ? n : n + "px";
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
  this.l[t.type + !1](mt.event ? mt.event(t) : t);
}
function qu(t) {
  this.l[t.type + !0](mt.event ? mt.event(t) : t);
}
function Yp(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = mt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Ko(p, g), i.constructor = b, i.render = B0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Xe({}, i.__s)), Xe(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = Xe(Xe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === i_ && h.key == null ? h.props.children : h, jp(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = F0(n.__e, e, n, o, s, r, l, _);
    (h = mt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), mt.__e(x, e, n);
  }
}
function U0(t, e) {
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
function F0(t, e, n, o, s, r, l, c) {
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
    if (r = r && r_.call(t.childNodes), h = (d = n.props || Ip).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (I0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, jp(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Lr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Fp(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && As(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && As(t, "checked", f, d.checked, !1));
  }
  return t;
}
function qp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    mt.__e(o, n);
  }
}
function Gp(t, e, n) {
  var o, s;
  if (mt.unmount && mt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || qp(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Gp(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Fp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function B0(t, e, n) {
  return this.constructor(t, n);
}
r_ = Up.slice, mt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Wp = 0, Ko.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xe({}, this.state), typeof t == "function" && (t = t(Xe({}, n), this.props)), t && Xe(n, t), t != null && this.__v && (e && this._sb.push(e), zu(this));
}, Ko.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), zu(this));
}, Ko.prototype.render = i_, Jo = [], Ts.__r = 0;
var j0 = 0;
function Pi(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --j0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return mt.vnode && mt.vnode(_), _;
}
let z0 = class extends Ko {
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
    } = this.props, u = this.state.checked ? 1 : 0, a = n || "div", f = typeof l == "string" ? /* @__PURE__ */ Pi("i", { class: `icon ${l}` }) : l, v = typeof c == "string" ? /* @__PURE__ */ Pi("i", { class: `icon ${c}` }) : c, p = [
      /* @__PURE__ */ Pi("input", { onChange: i, type: "checkbox", value: u, checked: !!this.state.checked }),
      /* @__PURE__ */ Pi("label", { children: [
        f,
        r,
        v
      ] })
    ];
    return W0(
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
class Gu extends At {
}
M(Gu, "NAME", "switch"), M(Gu, "Component", z0);
function V0(t) {
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
function Y0(t, e) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const l = o.top <= s && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const WS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: F,
  getClassList: Cc,
  isElementVisible: Y0,
  selectText: V0
}, Symbol.toStringTag, { value: "Module" })), Ee = document, Ls = window, Xp = Ee.documentElement, Nn = Ee.createElement.bind(Ee), Jp = Nn("div"), oa = Nn("table"), q0 = Nn("tbody"), Xu = Nn("tr"), { isArray: Rc, prototype: Kp } = Array, { concat: G0, filter: s_, indexOf: Zp, map: Qp, push: X0, slice: tm, some: l_, splice: J0 } = Kp, K0 = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Z0 = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Q0 = /<.+>/, tw = /^\w+$/;
function c_(t, e) {
  const n = ew(e);
  return !t || !n && !vo(e) && !Ct(e) ? [] : !n && Z0.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && tw.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Nc {
  constructor(e, n) {
    if (!e)
      return;
    if (ka(e))
      return e;
    let o = e;
    if (Dt(e)) {
      const s = (ka(n) ? n[0] : n) || Ee;
      if (o = K0.test(e) && "getElementById" in s ? s.getElementById(e.slice(1).replace(/\\/g, "")) : Q0.test(e) ? om(e) : c_(e, s), !o)
        return;
    } else if (Dn(e))
      return this.ready(e);
    (o.nodeType || o === Ls) && (o = [o]), this.length = o.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = o[s];
  }
  init(e, n) {
    return new Nc(e, n);
  }
}
const I = Nc.prototype, Y = I.init;
Y.fn = Y.prototype = I;
I.length = 0;
I.splice = J0;
typeof Symbol == "function" && (I[Symbol.iterator] = Kp[Symbol.iterator]);
function ka(t) {
  return t instanceof Nc;
}
function yo(t) {
  return !!t && t === t.window;
}
function vo(t) {
  return !!t && t.nodeType === 9;
}
function ew(t) {
  return !!t && t.nodeType === 11;
}
function Ct(t) {
  return !!t && t.nodeType === 1;
}
function nw(t) {
  return !!t && t.nodeType === 3;
}
function ow(t) {
  return typeof t == "boolean";
}
function Dn(t) {
  return typeof t == "function";
}
function Dt(t) {
  return typeof t == "string";
}
function Ut(t) {
  return t === void 0;
}
function Mr(t) {
  return t === null;
}
function em(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function a_(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
Y.isWindow = yo;
Y.isFunction = Dn;
Y.isArray = Rc;
Y.isNumeric = em;
Y.isPlainObject = a_;
function Tt(t, e, n) {
  if (n) {
    let o = t.length;
    for (; o--; )
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  } else if (a_(t)) {
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
Y.each = Tt;
I.each = function(t) {
  return Tt(this, t);
};
I.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function Ms(...t) {
  const e = ow(t[0]) ? t.shift() : !1, n = t.shift(), o = t.length;
  if (!n)
    return {};
  if (!o)
    return Ms(e, Y, n);
  for (let s = 0; s < o; s++) {
    const r = t[s];
    for (const l in r)
      e && (Rc(r[l]) || a_(r[l])) ? ((!n[l] || n[l].constructor !== r[l].constructor) && (n[l] = new r[l].constructor()), Ms(e, n[l], r[l])) : n[l] = r[l];
  }
  return n;
}
Y.extend = Ms;
I.extend = function(t) {
  return Ms(I, t);
};
const rw = /\S+/g;
function Dc(t) {
  return Dt(t) ? t.match(rw) || [] : [];
}
I.toggleClass = function(t, e) {
  const n = Dc(t), o = !Ut(e);
  return this.each((s, r) => {
    Ct(r) && Tt(n, (l, c) => {
      o ? e ? r.classList.add(c) : r.classList.remove(c) : r.classList.toggle(c);
    });
  });
};
I.addClass = function(t) {
  return this.toggleClass(t, !0);
};
I.removeAttr = function(t) {
  const e = Dc(t);
  return this.each((n, o) => {
    Ct(o) && Tt(e, (s, r) => {
      o.removeAttribute(r);
    });
  });
};
function iw(t, e) {
  if (t) {
    if (Dt(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !Ct(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return Mr(n) ? void 0 : n;
      }
      return Ut(e) ? this : Mr(e) ? this.removeAttr(t) : this.each((n, o) => {
        Ct(o) && o.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
I.attr = iw;
I.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
I.hasClass = function(t) {
  return !!t && l_.call(this, (e) => Ct(e) && e.classList.contains(t));
};
I.get = function(t) {
  return Ut(t) ? tm.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
I.eq = function(t) {
  return Y(this.get(t));
};
I.first = function() {
  return this.eq(0);
};
I.last = function() {
  return this.eq(-1);
};
function sw(t) {
  return Ut(t) ? this.get().map((e) => Ct(e) || nw(e) ? e.textContent : "").join("") : this.each((e, n) => {
    Ct(n) && (n.textContent = t);
  });
}
I.text = sw;
function Te(t, e, n) {
  if (!Ct(t))
    return;
  const o = Ls.getComputedStyle(t, null);
  return n ? o.getPropertyValue(e) || void 0 : o[e] || t.style[e];
}
function ue(t, e) {
  return parseInt(Te(t, e), 10) || 0;
}
function Ju(t, e) {
  return ue(t, `border${e ? "Left" : "Top"}Width`) + ue(t, `padding${e ? "Left" : "Top"}`) + ue(t, `padding${e ? "Right" : "Bottom"}`) + ue(t, `border${e ? "Right" : "Bottom"}Width`);
}
const ra = {};
function lw(t) {
  if (ra[t])
    return ra[t];
  const e = Nn(t);
  Ee.body.insertBefore(e, null);
  const n = Te(e, "display");
  return Ee.body.removeChild(e), ra[t] = n !== "none" ? n : "block";
}
function Ku(t) {
  return Te(t, "display") === "none";
}
function nm(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function Pc(t) {
  return Dt(t) ? (e, n) => nm(n, t) : Dn(t) ? t : ka(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
I.filter = function(t) {
  const e = Pc(t);
  return Y(s_.call(this, (n, o) => e.call(n, o, n)));
};
function fn(t, e) {
  return e ? t.filter(e) : t;
}
I.detach = function(t) {
  return fn(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const cw = /^\s*<(\w+)[^>]*>/, aw = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Zu = {
  "*": Jp,
  tr: q0,
  td: Xu,
  th: Xu,
  thead: oa,
  tbody: oa,
  tfoot: oa
};
function om(t) {
  if (!Dt(t))
    return [];
  if (aw.test(t))
    return [Nn(RegExp.$1)];
  const e = cw.test(t) && RegExp.$1, n = Zu[e] || Zu["*"];
  return n.innerHTML = t, Y(n.childNodes).detach().get();
}
Y.parseHTML = om;
I.has = function(t) {
  const e = Dt(t) ? (n, o) => c_(t, o).length : (n, o) => o.contains(t);
  return this.filter(e);
};
I.not = function(t) {
  const e = Pc(t);
  return this.filter((n, o) => (!Dt(t) || Ct(o)) && !e.call(o, n, o));
};
function Re(t, e, n, o) {
  const s = [], r = Dn(e), l = o && Pc(o);
  for (let c = 0, _ = t.length; c < _; c++)
    if (r) {
      const h = e(t[c]);
      h.length && X0.apply(s, h);
    } else {
      let h = t[c][e];
      for (; h != null && !(o && l(-1, h)); )
        s.push(h), h = n ? h[e] : null;
    }
  return s;
}
function rm(t) {
  return t.multiple && t.options ? Re(s_.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function _w(t) {
  return arguments.length ? this.each((e, n) => {
    const o = n.multiple && n.options;
    if (o || fm.test(n.type)) {
      const s = Rc(t) ? Qp.call(t, String) : Mr(t) ? [] : [String(t)];
      o ? Tt(n.options, (r, l) => {
        l.selected = s.indexOf(l.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = Ut(t) || Mr(t) ? "" : t;
  }) : this[0] && rm(this[0]);
}
I.val = _w;
I.is = function(t) {
  const e = Pc(t);
  return l_.call(this, (n, o) => e.call(n, o, n));
};
Y.guid = 1;
function ge(t) {
  return t.length > 1 ? s_.call(t, (e, n, o) => Zp.call(o, e) === n) : t;
}
Y.unique = ge;
I.add = function(t, e) {
  return Y(ge(this.get().concat(Y(t, e).get())));
};
I.children = function(t) {
  return fn(Y(ge(Re(this, (e) => e.children))), t);
};
I.parent = function(t) {
  return fn(Y(ge(Re(this, "parentNode"))), t);
};
I.index = function(t) {
  const e = t ? Y(t)[0] : this[0], n = t ? this : Y(e).parent().children();
  return Zp.call(n, e);
};
I.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
I.siblings = function(t) {
  return fn(Y(ge(Re(this, (e) => Y(e).parent().children().not(e)))), t);
};
I.find = function(t) {
  return Y(ge(Re(this, (e) => c_(t, e))));
};
const uw = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, fw = /^$|^module$|\/(java|ecma)script/i, hw = ["type", "src", "nonce", "noModule"];
function dw(t, e) {
  const n = Y(t);
  n.filter("script").add(n.find("script")).each((o, s) => {
    if (fw.test(s.type) && Xp.contains(s)) {
      const r = Nn("script");
      r.text = s.textContent.replace(uw, ""), Tt(hw, (l, c) => {
        s[c] && (r[c] = s[c]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function pw(t, e, n, o, s) {
  o ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && dw(e, t.ownerDocument);
}
function hn(t, e, n, o, s, r, l, c) {
  return Tt(t, (_, h) => {
    Tt(Y(h), (i, d) => {
      Tt(Y(e), (u, a) => {
        const f = n ? d : a, v = n ? a : d, p = n ? i : u;
        pw(f, p ? v.cloneNode(!0) : v, o, s, !p);
      }, c);
    }, l);
  }, r), e;
}
I.after = function() {
  return hn(arguments, this, !1, !1, !1, !0, !0);
};
I.append = function() {
  return hn(arguments, this, !1, !1, !0);
};
function mw(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (Ut(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, o) => {
    Ct(o) && (e ? Y(o).empty().append(t) : o.innerHTML = t);
  });
}
I.html = mw;
I.appendTo = function(t) {
  return hn(arguments, this, !0, !1, !0);
};
I.wrapInner = function(t) {
  return this.each((e, n) => {
    const o = Y(n), s = o.contents();
    s.length ? s.wrapAll(t) : o.append(t);
  });
};
I.before = function() {
  return hn(arguments, this, !1, !0);
};
I.wrapAll = function(t) {
  let e = Y(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
I.wrap = function(t) {
  return this.each((e, n) => {
    const o = Y(t)[0];
    Y(n).wrapAll(e ? o.cloneNode(!0) : o);
  });
};
I.insertAfter = function(t) {
  return hn(arguments, this, !0, !1, !1, !1, !1, !0);
};
I.insertBefore = function(t) {
  return hn(arguments, this, !0, !0);
};
I.prepend = function() {
  return hn(arguments, this, !1, !0, !0, !0, !0);
};
I.prependTo = function(t) {
  return hn(arguments, this, !0, !0, !0, !1, !1, !0);
};
I.contents = function() {
  return Y(ge(Re(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
I.next = function(t, e, n) {
  return fn(Y(ge(Re(this, "nextElementSibling", e, n))), t);
};
I.nextAll = function(t) {
  return this.next(t, !0);
};
I.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
I.parents = function(t, e) {
  return fn(Y(ge(Re(this, "parentElement", !0, e))), t);
};
I.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
I.prev = function(t, e, n) {
  return fn(Y(ge(Re(this, "previousElementSibling", e, n))), t);
};
I.prevAll = function(t) {
  return this.prev(t, !0);
};
I.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
I.map = function(t) {
  return Y(G0.apply([], Qp.call(this, (e, n) => t.call(e, n, e))));
};
I.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
I.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && Te(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Xp;
  });
};
I.slice = function(t, e) {
  return Y(tm.call(this, t, e));
};
const gw = /-([a-z])/g;
function __(t) {
  return t.replace(gw, (e, n) => n.toUpperCase());
}
I.ready = function(t) {
  const e = () => setTimeout(t, 0, Y);
  return Ee.readyState !== "loading" ? e() : Ee.addEventListener("DOMContentLoaded", e), this;
};
I.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = Y(e);
    n.replaceWith(n.children());
  }), this;
};
I.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + Ls.pageYOffset,
    left: e.left + Ls.pageXOffset
  };
};
I.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = Te(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const o = t.ownerDocument;
    let s = t.offsetParent || o.documentElement;
    for (; (s === o.body || s === o.documentElement) && Te(s, "position") === "static"; )
      s = s.parentNode;
    if (s !== t && Ct(s)) {
      const r = Y(s).offset();
      n.top -= r.top + ue(s, "borderTopWidth"), n.left -= r.left + ue(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - ue(t, "marginTop"),
    left: n.left - ue(t, "marginLeft")
  };
};
const im = {
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
I.prop = function(t, e) {
  if (t) {
    if (Dt(t))
      return t = im[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, o) => {
        o[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
I.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[im[t] || t];
  });
};
const yw = /^--/;
function u_(t) {
  return yw.test(t);
}
const ia = {}, { style: vw } = Jp, bw = ["webkit", "moz", "ms"];
function ww(t, e = u_(t)) {
  if (e)
    return t;
  if (!ia[t]) {
    const n = __(t), o = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${bw.join(`${o} `)}${o}`.split(" ");
    Tt(s, (r, l) => {
      if (l in vw)
        return ia[t] = l, !1;
    });
  }
  return ia[t];
}
const $w = {
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
function sm(t, e, n = u_(t)) {
  return !n && !$w[t] && em(e) ? `${e}px` : e;
}
function kw(t, e) {
  if (Dt(t)) {
    const n = u_(t);
    return t = ww(t, n), arguments.length < 2 ? this[0] && Te(this[0], t, n) : t ? (e = sm(t, e, n), this.each((o, s) => {
      Ct(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
I.css = kw;
function lm(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const xw = /^\s+|\s+$/;
function Qu(t, e) {
  const n = t.dataset[e] || t.dataset[__(e)];
  return xw.test(n) ? n : lm(JSON.parse, n);
}
function Sw(t, e, n) {
  n = lm(JSON.stringify, n), t.dataset[__(e)] = n;
}
function Cw(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const o in this[0].dataset)
      n[o] = Qu(this[0], o);
    return n;
  }
  if (Dt(t))
    return arguments.length < 2 ? this[0] && Qu(this[0], t) : Ut(e) ? this : this.each((n, o) => {
      Sw(o, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
I.data = Cw;
function cm(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
Tt([!0, !1], (t, e) => {
  Tt(["Width", "Height"], (n, o) => {
    const s = `${e ? "outer" : "inner"}${o}`;
    I[s] = function(r) {
      if (this[0])
        return yo(this[0]) ? e ? this[0][`inner${o}`] : this[0].document.documentElement[`client${o}`] : vo(this[0]) ? cm(this[0], o) : this[0][`${e ? "offset" : "client"}${o}`] + (r && e ? ue(this[0], `margin${n ? "Top" : "Left"}`) + ue(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Tt(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  I[n] = function(o) {
    if (!this[0])
      return Ut(o) ? void 0 : this;
    if (!arguments.length)
      return yo(this[0]) ? this[0].document.documentElement[`client${e}`] : vo(this[0]) ? cm(this[0], e) : this[0].getBoundingClientRect()[n] - Ju(this[0], !t);
    const s = parseInt(o, 10);
    return this.each((r, l) => {
      if (!Ct(l))
        return;
      const c = Te(l, "boxSizing");
      l.style[n] = sm(n, s + (c === "border-box" ? Ju(l, !t) : 0));
    });
  };
});
const tf = "___cd";
I.toggle = function(t) {
  return this.each((e, n) => {
    if (!Ct(n))
      return;
    (Ut(t) ? Ku(n) : t) ? (n.style.display = n[tf] || "", Ku(n) && (n.style.display = lw(n.tagName))) : (n[tf] = Te(n, "display"), n.style.display = "none");
  });
};
I.hide = function() {
  return this.toggle(!1);
};
I.show = function() {
  return this.toggle(!0);
};
const ef = "___ce", f_ = ".", h_ = { focus: "focusin", blur: "focusout" }, am = { mouseenter: "mouseover", mouseleave: "mouseout" }, Ew = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function d_(t) {
  return am[t] || h_[t] || t;
}
function p_(t) {
  const e = t.split(f_);
  return [e[0], e.slice(1).sort()];
}
I.trigger = function(t, e) {
  if (Dt(t)) {
    const [o, s] = p_(t), r = d_(o);
    if (!r)
      return this;
    const l = Ew.test(r) ? "MouseEvents" : "HTMLEvents";
    t = Ee.createEvent(l), t.initEvent(r, !0, !0), t.namespace = s.join(f_), t.___ot = o;
  }
  t.___td = e;
  const n = t.___ot in h_;
  return this.each((o, s) => {
    n && Dn(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function _m(t) {
  return t[ef] = t[ef] || {};
}
function Tw(t, e, n, o, s) {
  const r = _m(t);
  r[e] = r[e] || [], r[e].push([n, o, s]), t.addEventListener(e, s);
}
function um(t, e) {
  return !e || !l_.call(e, (n) => t.indexOf(n) < 0);
}
function Rs(t, e, n, o, s) {
  const r = _m(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([l, c, _]) => {
      if (s && _.guid !== s.guid || !um(l, n) || o && o !== c)
        return !0;
      t.removeEventListener(e, _);
    }));
  else
    for (e in r)
      Rs(t, e, n, o, s);
}
I.off = function(t, e, n) {
  if (Ut(t))
    this.each((o, s) => {
      !Ct(s) && !vo(s) && !yo(s) || Rs(s);
    });
  else if (Dt(t))
    Dn(e) && (n = e, e = ""), Tt(Dc(t), (o, s) => {
      const [r, l] = p_(s), c = d_(r);
      this.each((_, h) => {
        !Ct(h) && !vo(h) && !yo(h) || Rs(h, c, l, e, n);
      });
    });
  else
    for (const o in t)
      this.off(o, t[o]);
  return this;
};
I.remove = function(t) {
  return fn(this, t).detach().off(), this;
};
I.replaceWith = function(t) {
  return this.before(t).remove();
};
I.replaceAll = function(t) {
  return Y(t).replaceWith(this), this;
};
function Aw(t, e, n, o, s) {
  if (!Dt(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return Dt(e) || (Ut(e) || Mr(e) ? e = "" : Ut(n) ? (n = e, e = "") : (o = n, n = e, e = "")), Dn(o) || (o = n, n = void 0), o ? (Tt(Dc(t), (r, l) => {
    const [c, _] = p_(l), h = d_(c), i = c in am, d = c in h_;
    h && this.each((u, a) => {
      if (!Ct(a) && !vo(a) && !yo(a))
        return;
      const f = function(v) {
        if (v.target[`___i${v.type}`])
          return v.stopImmediatePropagation();
        if (v.namespace && !um(_, v.namespace.split(f_)) || !e && (d && (v.target !== a || v.___ot === h) || i && v.relatedTarget && a.contains(v.relatedTarget)))
          return;
        let p = a;
        if (e) {
          let g = v.target;
          for (; !nm(g, e); )
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
        s && Rs(a, h, _, e, f), m === !1 && (v.preventDefault(), v.stopPropagation());
      };
      f.guid = o.guid = o.guid || Y.guid++, Tw(a, h, _, e, f);
    });
  }), this) : this;
}
I.on = Aw;
function Lw(t, e, n, o) {
  return this.on(t, e, n, o, !0);
}
I.one = Lw;
const Mw = /\r?\n/g;
function Rw(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(Mw, `\r
`))}`;
}
const Nw = /file|reset|submit|button|image/i, fm = /radio|checkbox/i;
I.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    Tt(n.elements || [n], (o, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || Nw.test(s.type) || fm.test(s.type) && !s.checked)
        return;
      const r = rm(s);
      if (!Ut(r)) {
        const l = Rc(r) ? r : [r];
        Tt(l, (c, _) => {
          t += Rw(s.name, _);
        });
      }
    });
  }), t.slice(1);
};
window.$ = Y;
/*! js-cookie v3.0.1 | MIT */
function Oi(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var o in n)
      t[o] = n[o];
  }
  return t;
}
var Dw = {
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
function xa(t, e) {
  function n(s, r, l) {
    if (!(typeof document > "u")) {
      l = Oi({}, e, l), typeof l.expires == "number" && (l.expires = new Date(Date.now() + l.expires * 864e5)), l.expires && (l.expires = l.expires.toUTCString()), s = encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
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
          Oi({}, r, {
            expires: -1
          })
        );
      },
      withAttributes: function(s) {
        return xa(this.converter, Oi({}, this.attributes, s));
      },
      withConverter: function(s) {
        return xa(Oi({}, this.converter, s), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(e) },
      converter: { value: Object.freeze(t) }
    }
  );
}
var Pw = xa(Dw, { path: "/" });
window.$ && Object.assign(window.$, { cookie: Pw });
let Ow = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Jr, Pe, le, Kn, Zn, Qi;
const H_ = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    E(this, Zn);
    E(this, Jr, void 0);
    E(this, Pe, void 0);
    E(this, le, void 0);
    E(this, Kn, void 0);
    H(this, Jr, n), H(this, Pe, `ZUI_STORE:${e ?? Ow()}`), H(this, le, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return y(this, Jr);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (y(this, Kn) || H(this, Kn, new H_(y(this, Pe), "session")), y(this, Kn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const o = y(this, le).getItem(W(this, Zn, Qi).call(this, e));
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
    y(this, le).setItem(W(this, Zn, Qi).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    y(this, le).removeItem(W(this, Zn, Qi).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < y(this, le).length; n++) {
      const o = y(this, le).key(n);
      if (o != null && o.startsWith(y(this, Pe))) {
        const s = y(this, le).getItem(o);
        typeof s == "string" && e(o.substring(y(this, Pe).length + 1), JSON.parse(s));
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
let Ns = H_;
Jr = new WeakMap(), Pe = new WeakMap(), le = new WeakMap(), Kn = new WeakMap(), Zn = new WeakSet(), Qi = function(e) {
  return `${y(this, Pe)}:${e}`;
};
const Hw = new Ns("DEFAULT");
function Ww(t, e = "local") {
  return new Ns(t, e);
}
Object.assign(Hw, { create: Ww });
var hm, gt, dm, Zo, nf, pm = {}, mm = [], Iw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Je(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function gm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function sa(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++dm };
  return s == null && gt.vnode != null && gt.vnode(r), r;
}
function m_(t) {
  return t.children;
}
function Qo(t, e) {
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
function ym(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ym(t);
  }
}
function of(t) {
  (!t.__d && (t.__d = !0) && Zo.push(t) && !Ds.__r++ || nf !== gt.debounceRendering) && ((nf = gt.debounceRendering) || setTimeout)(Ds);
}
function Ds() {
  for (var t; Ds.__r = Zo.length; )
    t = Zo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Zo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Je({}, r)).__v = r.__v + 1, $m(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Rr(r), r.__h), Fw(o, r), r.__e != l && ym(r)));
    });
}
function vm(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || mm, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? sa(null, a, null, null, a) : Array.isArray(a) ? sa(m_, { children: a }, null, null, null) : a.__b > 0 ? sa(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      $m(t, a, u = u || pm, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = bm(a, _, t) : _ = wm(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Rr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && xm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      km(p[i], p[++i], p[++i]);
}
function bm(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? bm(o, e, n) : wm(n, o, o, s, o.__e, e));
  return e;
}
function wm(t, e, n, o, s, r) {
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
function Uw(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ps(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ps(t, r, e[r], n[r], o);
}
function rf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Iw.test(e) ? n : n + "px";
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
            n && e in n || rf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || rf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? lf : sf, r) : t.removeEventListener(e, r ? lf : sf, r);
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
function sf(t) {
  this.l[t.type + !1](gt.event ? gt.event(t) : t);
}
function lf(t) {
  this.l[t.type + !0](gt.event ? gt.event(t) : t);
}
function $m(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = gt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Qo(p, g), i.constructor = b, i.render = jw), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Je({}, i.__s)), Je(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = Je(Je({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === m_ && h.key == null ? h.props.children : h, vm(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Bw(n.__e, e, n, o, s, r, l, _);
    (h = gt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), gt.__e(x, e, n);
  }
}
function Fw(t, e) {
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
function Bw(t, e, n, o, s, r, l, c) {
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
    if (r = r && hm.call(t.childNodes), h = (d = n.props || pm).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Uw(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, vm(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Rr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && gm(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ps(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ps(t, "checked", f, d.checked, !1));
  }
  return t;
}
function km(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    gt.__e(o, n);
  }
}
function xm(t, e, n) {
  var o, s;
  if (gt.unmount && gt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || km(o, null, e)), (o = t.__c) != null) {
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
      o[s] && xm(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || gm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function jw(t, e, n) {
  return this.constructor(t, n);
}
hm = mm.slice, gt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, dm = 0, Qo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Je({}, this.state), typeof t == "function" && (t = t(Je({}, n), this.props)), t && Je(n, t), t != null && this.__v && (e && this._sb.push(e), of(this));
}, Qo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), of(this));
}, Qo.prototype.render = m_, Zo = [], Ds.__r = 0;
var zw = 0;
function la(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --zw, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return gt.vnode && gt.vnode(_), _;
}
function Vw(t) {
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
function Yw(t) {
  const [e, n, o] = typeof t == "string" ? Vw(t) : t;
  return e * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function cf(t, e) {
  return Yw(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function af(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function qw(t, e, n) {
  t = t % 360 / 360, e = af(e), n = af(n);
  const o = n <= 0.5 ? n * (e + 1) : n + e - n * e, s = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? s + (o - s) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? s + (o - s) * (2 / 3 - l) * 6 : s);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function Gw(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function Xw(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t = t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t = t[0].toUpperCase() : t = t.length <= e ? t : t.substring(0, e), t;
}
let Jw = class extends Qo {
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
      m.push("has-img"), $ = /* @__PURE__ */ la("img", { className: "avatar-img", src: d, alt: _ });
    else if (_ != null && _.length) {
      const S = Xw(_, i);
      if (m.push("has-text", `has-text-${S.length}`), l)
        !c && l && (g.color = cf(l));
      else {
        const T = h ?? _, b = (typeof T == "number" ? T : Gw(T)) * u % 360;
        if (g.background = `hsl(${b},${a * 100}%,${f * 100}%)`, !c) {
          const x = qw(b, a, f);
          g.color = cf(x);
        }
      }
      let A;
      w && w < 14 * S.length && (A = { transform: `scale(${w / (14 * S.length)})`, whiteSpace: "nowrap" }), $ = /* @__PURE__ */ la("div", { "data-actualSize": w, className: "avatar-text", style: A, children: S });
    }
    return /* @__PURE__ */ la(
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
class _f extends At {
}
M(_f, "NAME", "avatar"), M(_f, "Component", Jw);
class uf extends At {
}
M(uf, "NAME", "btngroup"), M(uf, "Component", kp);
var Oc, it, Sm, tr, ff, Os = {}, Cm = [], Kw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ke(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Em(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Nr(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Oc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ts(t, l, o, s, null);
}
function ts(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Sm };
  return s == null && it.vnode != null && it.vnode(r), r;
}
function Zw() {
  return { current: null };
}
function Hc(t) {
  return t.children;
}
function er(t, e) {
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
function Tm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Tm(t);
  }
}
function hf(t) {
  (!t.__d && (t.__d = !0) && tr.push(t) && !Hs.__r++ || ff !== it.debounceRendering) && ((ff = it.debounceRendering) || setTimeout)(Hs);
}
function Hs() {
  for (var t; Hs.__r = tr.length; )
    t = tr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), tr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ke({}, r)).__v = r.__v + 1, g_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Dr(r), r.__h), Rm(o, r), r.__e != l && Tm(r)));
    });
}
function Am(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Cm, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ts(null, a, null, null, a) : Array.isArray(a) ? ts(Hc, { children: a }, null, null, null) : a.__b > 0 ? ts(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      g_(t, a, u = u || Os, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Lm(a, _, t) : _ = Mm(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Dr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Dm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Nm(p[i], p[++i], p[++i]);
}
function Lm(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Lm(o, e, n) : Mm(n, o, o, s, o.__e, e));
  return e;
}
function Mm(t, e, n, o, s, r) {
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
function Qw(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ws(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ws(t, r, e[r], n[r], o);
}
function df(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Kw.test(e) ? n : n + "px";
}
function Ws(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || df(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || df(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? mf : pf, r) : t.removeEventListener(e, r ? mf : pf, r);
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
function pf(t) {
  this.l[t.type + !1](it.event ? it.event(t) : t);
}
function mf(t) {
  this.l[t.type + !0](it.event ? it.event(t) : t);
}
function g_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = it.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new er(p, g), i.constructor = b, i.render = e$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ke({}, i.__s)), Ke(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = Ke(Ke({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === Hc && h.key == null ? h.props.children : h, Am(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = t$(n.__e, e, n, o, s, r, l, _);
    (h = it.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), it.__e(x, e, n);
  }
}
function Rm(t, e) {
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
function t$(t, e, n, o, s, r, l, c) {
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
    if (r = r && Oc.call(t.childNodes), h = (d = n.props || Os).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Qw(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Am(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Dr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Em(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ws(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ws(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Nm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    it.__e(o, n);
  }
}
function Dm(t, e, n) {
  var o, s;
  if (it.unmount && it.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Nm(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Dm(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Em(t.__e), t.__ = t.__e = t.__d = void 0;
}
function e$(t, e, n) {
  return this.constructor(t, n);
}
function n$(t, e, n) {
  var o, s, r;
  it.__ && it.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], g_(e, t = (!o && n || e).__k = Nr(Hc, null, [t]), s || Os, Os, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Oc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Rm(r, t);
}
Oc = Cm.slice, it = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Sm = 0, er.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ke({}, this.state), typeof t == "function" && (t = t(Ke({}, n), this.props)), t && Ke(n, t), t != null && this.__v && (e && this._sb.push(e), hf(this));
}, er.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), hf(this));
}, er.prototype.render = Hc, tr = [], Hs.__r = 0;
var o$ = 0;
function J(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --o$, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return it.vnode && it.vnode(_), _;
}
var Pm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Q = {}, r$ = {
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
  })(Pm, function() {
    var n = 1e3, o = 6e4, s = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", i = "week", d = "month", u = "quarter", a = "year", f = "date", v = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var C = ["th", "st", "nd", "rd"], k = N % 100;
      return "[" + N + (C[(k - 20) % 10] || C[k] || C[0]) + "]";
    } }, w = function(N, C, k) {
      var D = String(N);
      return !D || D.length >= C ? N : "" + Array(C + 1 - D.length).join(k) + N;
    }, $ = { s: w, z: function(N) {
      var C = -N.utcOffset(), k = Math.abs(C), D = Math.floor(k / 60), L = k % 60;
      return (C <= 0 ? "+" : "-") + w(D, 2, "0") + ":" + w(L, 2, "0");
    }, m: function N(C, k) {
      if (C.date() < k.date())
        return -N(k, C);
      var D = 12 * (k.year() - C.year()) + (k.month() - C.month()), L = C.clone().add(D, d), O = k - L < 0, P = C.clone().add(D + (O ? -1 : 1), d);
      return +(-(D + (k - L) / (O ? L - P : P - L)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: a, w: i, d: h, D: f, h: _, m: c, s: l, ms: r, Q: u }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, S = "en", A = {};
    A[S] = g;
    var T = function(N) {
      return N instanceof q;
    }, b = function N(C, k, D) {
      var L;
      if (!C)
        return S;
      if (typeof C == "string") {
        var O = C.toLowerCase();
        A[O] && (L = O), k && (A[O] = k, L = O);
        var P = C.split("-");
        if (!L && P.length > 1)
          return N(P[0]);
      } else {
        var U = C.name;
        A[U] = C, L = U;
      }
      return !D && L && (S = L), L || !D && S;
    }, x = function(N, C) {
      if (T(N))
        return N.clone();
      var k = typeof C == "object" ? C : {};
      return k.date = N, k.args = arguments, new q(k);
    }, R = $;
    R.l = b, R.i = T, R.w = function(N, C) {
      return x(N, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var q = function() {
      function N(k) {
        this.$L = b(k.locale, null, !0), this.parse(k);
      }
      var C = N.prototype;
      return C.parse = function(k) {
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
              var U = P[2] - 1 || 0, V = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], U, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V)) : new Date(P[1], U, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V);
            }
          }
          return new Date(L);
        }(k), this.$x = k.x || {}, this.init();
      }, C.init = function() {
        var k = this.$d;
        this.$y = k.getFullYear(), this.$M = k.getMonth(), this.$D = k.getDate(), this.$W = k.getDay(), this.$H = k.getHours(), this.$m = k.getMinutes(), this.$s = k.getSeconds(), this.$ms = k.getMilliseconds();
      }, C.$utils = function() {
        return R;
      }, C.isValid = function() {
        return this.$d.toString() !== v;
      }, C.isSame = function(k, D) {
        var L = x(k);
        return this.startOf(D) <= L && L <= this.endOf(D);
      }, C.isAfter = function(k, D) {
        return x(k) < this.startOf(D);
      }, C.isBefore = function(k, D) {
        return this.endOf(D) < x(k);
      }, C.$g = function(k, D, L) {
        return R.u(k) ? this[D] : this.set(L, k);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(k, D) {
        var L = this, O = !!R.u(D) || D, P = R.p(k), U = function(ct, X) {
          var at = R.w(L.$u ? Date.UTC(L.$y, X, ct) : new Date(L.$y, X, ct), L);
          return O ? at : at.endOf(h);
        }, V = function(ct, X) {
          return R.w(L.toDate()[ct].apply(L.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), L);
        }, z = this.$W, K = this.$M, kt = this.$D, B = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? U(1, 0) : U(31, 11);
          case d:
            return O ? U(1, K) : U(0, K + 1);
          case i:
            var Z = this.$locale().weekStart || 0, $t = (z < Z ? z + 7 : z) - Z;
            return U(O ? kt - $t : kt + (6 - $t), K);
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
      }, C.endOf = function(k) {
        return this.startOf(k, !1);
      }, C.$set = function(k, D) {
        var L, O = R.p(k), P = "set" + (this.$u ? "UTC" : ""), U = (L = {}, L[h] = P + "Date", L[f] = P + "Date", L[d] = P + "Month", L[a] = P + "FullYear", L[_] = P + "Hours", L[c] = P + "Minutes", L[l] = P + "Seconds", L[r] = P + "Milliseconds", L)[O], V = O === h ? this.$D + (D - this.$W) : D;
        if (O === d || O === a) {
          var z = this.clone().set(f, 1);
          z.$d[U](V), z.init(), this.$d = z.set(f, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          U && this.$d[U](V);
        return this.init(), this;
      }, C.set = function(k, D) {
        return this.clone().$set(k, D);
      }, C.get = function(k) {
        return this[R.p(k)]();
      }, C.add = function(k, D) {
        var L, O = this;
        k = Number(k);
        var P = R.p(D), U = function(K) {
          var kt = x(O);
          return R.w(kt.date(kt.date() + Math.round(K * k)), O);
        };
        if (P === d)
          return this.set(d, this.$M + k);
        if (P === a)
          return this.set(a, this.$y + k);
        if (P === h)
          return U(1);
        if (P === i)
          return U(7);
        var V = (L = {}, L[c] = o, L[_] = s, L[l] = n, L)[P] || 1, z = this.$d.getTime() + k * V;
        return R.w(z, this);
      }, C.subtract = function(k, D) {
        return this.add(-1 * k, D);
      }, C.format = function(k) {
        var D = this, L = this.$locale();
        if (!this.isValid())
          return L.invalidDate || v;
        var O = k || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), U = this.$H, V = this.$m, z = this.$M, K = L.weekdays, kt = L.months, B = function(X, at, Pt, Ot) {
          return X && (X[at] || X(D, O)) || Pt[at].slice(0, Ot);
        }, Z = function(X) {
          return R.s(U % 12 || 12, X, "0");
        }, $t = L.meridiem || function(X, at, Pt) {
          var Ot = X < 12 ? "AM" : "PM";
          return Pt ? Ot.toLowerCase() : Ot;
        }, ct = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: R.s(z + 1, 2, "0"), MMM: B(L.monthsShort, z, kt, 3), MMMM: B(kt, z), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: B(L.weekdaysMin, this.$W, K, 2), ddd: B(L.weekdaysShort, this.$W, K, 3), dddd: K[this.$W], H: String(U), HH: R.s(U, 2, "0"), h: Z(1), hh: Z(2), a: $t(U, V, !0), A: $t(U, V, !1), m: String(V), mm: R.s(V, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(X, at) {
          return at || ct[X] || P.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(k, D, L) {
        var O, P = R.p(D), U = x(k), V = (U.utcOffset() - this.utcOffset()) * o, z = this - U, K = R.m(this, U);
        return K = (O = {}, O[a] = K / 12, O[d] = K, O[u] = K / 3, O[i] = (z - V) / 6048e5, O[h] = (z - V) / 864e5, O[_] = z / s, O[c] = z / o, O[l] = z / n, O)[P] || z, L ? K : R.a(K);
      }, C.daysInMonth = function() {
        return this.endOf(d).$D;
      }, C.$locale = function() {
        return A[this.$L];
      }, C.locale = function(k, D) {
        if (!k)
          return this.$L;
        var L = this.clone(), O = b(k, D, !0);
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
    return x.prototype = j, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", f]].forEach(function(N) {
      j[N[1]] = function(C) {
        return this.$g(C, N[0], N[1]);
      };
    }), x.extend = function(N, C) {
      return N.$i || (N(C, q, x), N.$i = !0), x;
    }, x.locale = b, x.isDayjs = T, x.unix = function(N) {
      return x(1e3 * N);
    }, x.en = A[S], x.Ls = A, x.p = {}, x;
  });
})(r$);
const Sa = (t = 0, e = 0) => {
  const n = [];
  for (let o = t; o <= e; o++)
    n.push(o);
  return n;
}, Om = (t, e) => {
  const n = Math.ceil(t.length / e);
  return new Array(e).fill({}).map((o, s) => t.slice(s * n, (s + 1) * n));
}, i$ = (t) => {
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
    const C = Q(), k = Q(_), D = new Array(R);
    for (let L = 0; L < R; L++) {
      const O = q + L + 1, P = j.set("date", O), U = N && !l ? !0 : n && P.isBefore(n, "date") || o && P.isAfter(o, "date");
      D[L] = {
        isSelected: k.isSame(j.set("date", O), "date"),
        isToday: C.isSame(P, "date"),
        isDisable: !!U,
        isTag: !!(s != null && s.includes(P.format(e))),
        date: P,
        isOtherMonth: N,
        onClick: () => U ? {} : c(P)
      };
    }
    return D;
  }, $ = () => {
    const R = Q(_), q = Q(), j = _ ? R : q, N = j.set("date", 1).day(), C = N === 0 ? 6 : N - 1, k = j.subtract(1, "month"), L = Number(k.endOf("month").get("date")) - C;
    return w(C, L, k, !0);
  }, S = () => {
    const R = Q(_), q = Q(), j = _ ? R : q, N = j.set("date", 1).day(), C = N === 0 ? 6 : N - 1, k = j.endOf("month").get("date"), D = j.add(1, "month"), L = 7 * 6 % (C + k);
    return w(L, 0, D, !0);
  }, A = () => {
    const R = _, q = Q(), j = _ ? Q(R) : q, N = j.endOf("month").get("date"), C = w(N, 0, j, !1), k = $(), D = S(), L = [...k, ...C, ...D];
    return Om(L, r);
  }, T = ["一", "二", "三", "四", "五", "六", "日"], b = A(), x = _ || Q().format(e);
  return /* @__PURE__ */ J("div", { className: F("datepicker-calendar-day"), children: [
    /* @__PURE__ */ J("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ J("div", { class: "flex", children: /* @__PURE__ */ J("button", { type: "button", className: "btn ghost", onClick: () => h("year"), children: [
        /* @__PURE__ */ J("span", { children: Q(x).format("YYYY 年 MM 月") }),
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
      /* @__PURE__ */ J("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ J("tr", { children: T.map((R, q) => /* @__PURE__ */ J("th", { children: R }, q)) }) }),
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
const s$ = (t) => {
  const { format: e, selectedDate: n, minDate: o, maxDate: s, year: r, handleChangeMonth: l } = t, c = Q(o).format("M"), _ = Q(s).format("M"), h = Om(Sa(1, 12), 3), i = (d, u) => {
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
}, l$ = (t) => {
  const { selectedDate: e, handleChangeMonth: n } = t;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = Q(e).year(), s = [...Sa(o - 100, o), ...Sa(o + 1, o + 100)], r = (l, c) => {
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
    /* @__PURE__ */ J("div", { className: F("datepicker-accordion-content", o === l ? "" : "hidden"), children: Nr(s$, {
      ...t,
      year: l.toString(),
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class c$ extends er {
  constructor() {
    super(...arguments);
    M(this, "DATEROWCOUNT", 6);
    M(this, "ref", Zw());
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
    return this.state.type === "day" ? Nr(i$, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : Nr(l$, {
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
function Ei(t) {
  return t.split("-")[1];
}
function y_(t) {
  return t === "y" ? "height" : "width";
}
function bo(t) {
  return t.split("-")[0];
}
function Wc(t) {
  return ["top", "bottom"].includes(bo(t)) ? "x" : "y";
}
function gf(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Wc(e), _ = y_(c), h = o[_] / 2 - s[_] / 2, i = bo(e), d = c === "x";
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
  switch (Ei(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const a$ = async (t, e, n) => {
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
  } = gf(h, o, _), u = o, a = {}, f = 0;
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
      } = gf(h, u, _)), v = -1;
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
function _$(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Hm(t) {
  return typeof t != "number" ? _$(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Is(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function u$(t, e) {
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
  } = e, f = Hm(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = Is(await r.getClippingRect({
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
  }, S = Is(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const f$ = Math.min, h$ = Math.max;
function d$(t, e, n) {
  return h$(t, f$(e, n));
}
const p$ = (t) => ({
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
    const h = Hm(o), i = {
      x: s,
      y: r
    }, d = Wc(l), u = y_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], T = w / 2 - a[u] / 2 + $, b = d$(S, T, A), R = Ei(l) != null && T != b && c.reference[u] / 2 - (T < S ? h[f] : h[v]) - a[u] / 2 < 0 ? T < S ? S - T : A - T : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: T - b
      }
    };
  }
}), m$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Us(t) {
  return t.replace(/left|right|bottom|top/g, (e) => m$[e]);
}
function g$(t, e, n) {
  n === void 0 && (n = !1);
  const o = Ei(t), s = Wc(t), r = y_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Us(l)), {
    main: l,
    cross: Us(l)
  };
}
const y$ = {
  start: "end",
  end: "start"
};
function Ca(t) {
  return t.replace(/start|end/g, (e) => y$[e]);
}
function v$(t) {
  const e = Us(t);
  return [Ca(t), e, Ca(e)];
}
function b$(t, e, n) {
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
function w$(t, e, n, o) {
  const s = Ei(t);
  let r = b$(bo(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(Ca)))), r;
}
const $$ = function(t) {
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
      } = t, p = bo(o), m = bo(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [Us(l)] : v$(l));
      !d && a !== "none" && w.push(...w$(l, f, a, g));
      const $ = [l, ...w], S = await u$(e, v), A = [];
      let T = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = g$(o, r, g);
        A.push(S[R], S[q]);
      }
      if (T = [...T, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var b;
        const R = (((b = s.flip) == null ? void 0 : b.index) || 0) + 1, q = $[R];
        if (q)
          return {
            data: {
              index: R,
              overflows: T
            },
            reset: {
              placement: q
            }
          };
        let j = "bottom";
        switch (u) {
          case "bestFit": {
            var x;
            const N = (x = T.map((C) => [C, C.overflows.filter((k) => k > 0).reduce((k, D) => k + D, 0)]).sort((C, k) => C[1] - k[1])[0]) == null ? void 0 : x[0].placement;
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
async function k$(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = bo(n), c = Ei(n), _ = Wc(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const x$ = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await k$(e, t);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
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
function cn(t) {
  return Im(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Hi;
function Wm() {
  if (Hi)
    return Hi;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Hi = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Hi) : navigator.userAgent;
}
function Ae(t) {
  return t instanceof Xt(t).HTMLElement;
}
function ne(t) {
  return t instanceof Xt(t).Element;
}
function Im(t) {
  return t instanceof Xt(t).Node;
}
function yf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Xt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Ic(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = de(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function S$(t) {
  return ["table", "td", "th"].includes(cn(t));
}
function v_(t) {
  const e = /firefox/i.test(Wm()), n = de(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function Um() {
  return !/^((?!chrome|android).)*safari/i.test(Wm());
}
function b_(t) {
  return ["html", "body", "#document"].includes(cn(t));
}
const vf = Math.min, nr = Math.max, Fs = Math.round;
function Fm(t) {
  const e = de(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = Fs(n) !== s || Fs(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Bm(t) {
  return ne(t) ? t : t.contextElement;
}
const jm = {
  x: 1,
  y: 1
};
function Wn(t) {
  const e = Bm(t);
  if (!Ae(e))
    return jm;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = Fm(e);
  let l = (r ? Fs(n.width) : n.width) / o, c = (r ? Fs(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Ln(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Bm(t);
  let _ = jm;
  e && (o ? ne(o) && (_ = Wn(o)) : _ = Wn(t));
  const h = c ? Xt(c) : window, i = !Um() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const v = Xt(c), p = o && ne(o) ? Xt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = Wn(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
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
function dn(t) {
  return ((Im(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Uc(t) {
  return ne(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function zm(t) {
  return Ln(dn(t)).left + Uc(t).scrollLeft;
}
function C$(t, e, n) {
  const o = Ae(e), s = dn(e), r = Ln(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((cn(e) !== "body" || Ic(s)) && (l = Uc(e)), Ae(e)) {
      const _ = Ln(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = zm(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Pr(t) {
  if (cn(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (yf(t) ? t.host : null) || // Fallback
    dn(t)
  );
  return yf(e) ? e.host : e;
}
function bf(t) {
  return !Ae(t) || de(t).position === "fixed" ? null : t.offsetParent;
}
function E$(t) {
  let e = Pr(t);
  for (; Ae(e) && !b_(e); ) {
    if (v_(e))
      return e;
    e = Pr(e);
  }
  return null;
}
function wf(t) {
  const e = Xt(t);
  let n = bf(t);
  for (; n && S$(n) && de(n).position === "static"; )
    n = bf(n);
  return n && (cn(n) === "html" || cn(n) === "body" && de(n).position === "static" && !v_(n)) ? e : n || E$(t) || e;
}
function T$(t) {
  return Fm(t);
}
function A$(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const s = Ae(n), r = dn(n);
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
  if ((s || !s && o !== "fixed") && ((cn(n) !== "body" || Ic(r)) && (l = Uc(n)), Ae(n))) {
    const h = Ln(n);
    c = Wn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function L$(t, e) {
  const n = Xt(t), o = dn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = Um();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function M$(t) {
  var e;
  const n = dn(t), o = Uc(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = nr(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = nr(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + zm(t);
  const _ = -o.scrollTop;
  return de(s || n).direction === "rtl" && (c += nr(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Vm(t) {
  const e = Pr(t);
  return b_(e) ? t.ownerDocument.body : Ae(e) && Ic(e) ? e : Vm(e);
}
function or(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Vm(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Xt(o);
  return s ? e.concat(r, r.visualViewport || [], Ic(o) ? o : []) : e.concat(o, or(o));
}
function R$(t, e) {
  const n = Ln(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Ae(t) ? Wn(t) : {
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
function $f(t, e, n) {
  return e === "viewport" ? Is(L$(t, n)) : ne(e) ? R$(e, n) : Is(M$(dn(t)));
}
function N$(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = or(t).filter((c) => ne(c) && cn(c) !== "body"), s = null;
  const r = de(t).position === "fixed";
  let l = r ? Pr(t) : t;
  for (; ne(l) && !b_(l); ) {
    const c = de(l), _ = v_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Pr(l);
  }
  return e.set(t, o), o;
}
function D$(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? N$(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = $f(e, i, s);
    return h.top = nr(d.top, h.top), h.right = vf(d.right, h.right), h.bottom = vf(d.bottom, h.bottom), h.left = nr(d.left, h.left), h;
  }, $f(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const P$ = {
  getClippingRect: D$,
  convertOffsetParentRelativeRectToViewportRelativeRect: A$,
  isElement: ne,
  getDimensions: T$,
  getOffsetParent: wf,
  getDocumentElement: dn,
  getScale: Wn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || wf, r = this.getDimensions;
    return {
      reference: C$(e, await s(n), o),
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
function O$(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...ne(t) ? or(t) : t.contextElement ? or(t.contextElement) : [], ...or(e)] : [];
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
  let d, u = c ? Ln(t) : null;
  c && a();
  function a() {
    const f = Ln(t);
    u && (f.x !== u.x || f.y !== u.y || f.width !== u.width || f.height !== u.height) && n(), u = f, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var f;
    h.forEach((v) => {
      _ && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), (f = i) == null || f.disconnect(), i = null, c && cancelAnimationFrame(d);
  };
}
const H$ = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: P$,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return a$(t, e, {
    ...s,
    platform: r
  });
};
var Qn, to, Lt, $n, Kr, Zr, Qr, Ea, yl, Ym, vl, qm, bl, Gm, wl, Xm, $l, Jm, kl, Km, xl, Zm, Sl;
const gn = class extends ie {
  constructor() {
    super(...arguments);
    E(this, Qr);
    E(this, yl);
    E(this, vl);
    E(this, bl);
    E(this, wl);
    E(this, $l);
    E(this, kl);
    E(this, xl);
    E(this, Qn, void 0);
    E(this, to, 0);
    E(this, Lt, void 0);
    E(this, $n, void 0);
    E(this, Kr, void 0);
    E(this, Zr, void 0);
    M(this, "hideLater", () => {
      y(this, Sl).call(this), H(this, to, window.setTimeout(this.hide.bind(this), 100));
    });
    E(this, Sl, () => {
      clearTimeout(y(this, to)), H(this, to, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, $n)) == null ? void 0 : n.classList.contains(gn.CLASS_SHOW);
  }
  get datepicker() {
    return y(this, $n) || W(this, vl, qm).call(this);
  }
  get trigger() {
    return y(this, Kr) || this.element;
  }
  get elementShowClass() {
    return `with-${gn.NAME}-show`;
  }
  show(n) {
    return H(this, Kr, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(gn.CLASS_SHOW), this.datepicker.classList.add("fade"), W(this, kl, Km).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = y(this, Zr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, $n)) == null || o.classList.remove(gn.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
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
let zt = gn;
Qn = new WeakMap(), to = new WeakMap(), Lt = new WeakMap(), $n = new WeakMap(), Kr = new WeakMap(), Zr = new WeakMap(), Qr = new WeakSet(), Ea = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, yl = new WeakSet(), Ym = function() {
  const n = W(this, Qr, Ea).call(this);
  return H(this, Lt, document.createElement("div")), y(this, Lt).style.position = "absolute", y(this, Lt).style.width = `${n}px`, y(this, Lt).style.height = `${n}px`, y(this, Lt).style.transform = "rotate(45deg)", y(this, Lt);
}, vl = new WeakSet(), qm = function() {
  const n = gn.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), n$(Nr(c$, { ...this.options }), o), this.options.arrow && o.append(W(this, yl, Ym).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, $n, o), o;
}, bl = new WeakSet(), Gm = function() {
  var l;
  const n = W(this, Qr, Ea).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [x$(n), $$()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && y(this, Lt) && ((l = r.middleware) == null || l.push(p$({ element: y(this, Lt) }))), r;
}, wl = new WeakSet(), Xm = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, $l = new WeakSet(), Jm = function(n) {
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
}, kl = new WeakSet(), Km = function() {
  const n = W(this, bl, Gm).call(this), o = W(this, xl, Zm).call(this);
  H(this, Zr, O$(o, this.datepicker, () => {
    H$(o, this.datepicker, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.datepicker.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, wl, Xm).call(this, _);
      if (l.arrow && y(this, Lt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(y(this, Lt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Lt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, $l, Jm).call(this, _)
        });
      }
    });
  }));
}, xl = new WeakSet(), Zm = function() {
  return y(this, Qn) || H(this, Qn, {
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
  }), y(this, Qn);
}, Sl = new WeakMap(), M(zt, "NAME", "datepicker"), M(zt, "CLASSNAME", "datepicker"), M(zt, "CLASS_SHOW", "show"), M(zt, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), M(zt, "DEFAULT", {
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
  const e = t.target, n = e.closest(zt.MENU_SELECTOR), o = e.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? zt.ensure(n).toggle() : o || zt.clear({ event: t });
});
const W$ = (t) => {
  const e = document.getElementsByClassName("with-datepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(zt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || zt.clear({ event: t });
};
window.addEventListener("scroll", W$, !0);
function Qm(t, e, n) {
  if (n) {
    t.setAttribute("class", F(e));
    return;
  }
  Cc(t.getAttribute("class"), e).forEach(([o, s]) => {
    t.classList.toggle(o, s);
  });
}
function Lo(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, s]) => {
      Lo(t, o, s);
    });
  n !== void 0 && (t.style[e] = typeof n == "number" ? `${n}px` : n);
}
function Bs(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, s]) => {
      Bs(t, o, s);
    });
  n !== void 0 && (n === null ? t.removeAttribute(e) : t.setAttribute(e, n));
}
var kn, ti, Oe, Cl, eo, es;
const ve = class extends ie {
  constructor() {
    super(...arguments);
    E(this, eo);
    E(this, kn, 0);
    E(this, ti, void 0);
    E(this, Oe, void 0);
    E(this, Cl, (n) => {
      const o = n.target;
      (o.closest(ve.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(ve.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", y(this, Cl)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const s = n.clientWidth, r = n.clientHeight;
          (!y(this, Oe) || y(this, Oe)[0] !== s || y(this, Oe)[1] !== r) && (H(this, Oe, [s, r]), this.layout());
        });
        o.observe(n), H(this, ti, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = y(this, ti)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: s, backdrop: r, className: l, style: c } = this.options;
    return Qm(o, [{
      "modal-trans": s,
      "modal-no-backdrop": !r
    }, ve.CLASS_SHOW, l]), Lo(o, {
      zIndex: `${ve.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), W(this, eo, es).call(this, () => {
      o.classList.add(ve.CLASS_SHOWN), W(this, eo, es).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(ve.CLASS_SHOWN), this.emit("hide", this), W(this, eo, es).call(this, () => {
      this.modalElement.classList.remove(ve.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    o = o ?? this.options.size, Bs(s, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? Bs(s, "data-size", o) : o && (r.width = o), Lo(s, r), n = n ?? this.options.position ?? "fit";
    const l = s.clientWidth, c = s.clientHeight;
    H(this, Oe, [l, c]), typeof n == "function" && (n = n({ width: l, height: c }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), Lo(s, _), Lo(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Ht = ve;
kn = new WeakMap(), ti = new WeakMap(), Oe = new WeakMap(), Cl = new WeakMap(), eo = new WeakSet(), es = function(n, o) {
  y(this, kn) && (clearTimeout(y(this, kn)), H(this, kn, 0)), n && (this.options.animation ? H(this, kn, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, M(Ht, "NAME", "Modal"), M(Ht, "EVENTS", !0), M(Ht, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), M(Ht, "CLASS_SHOW", "show"), M(Ht, "CLASS_SHOWN", "in"), M(Ht, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), M(Ht, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Ht.all.forEach((t) => {
    const e = t;
    e.isShown && e.options.responsive && e.layout();
  });
});
var Fc, st, tg, Mo, rr, kf, js = {}, eg = [], I$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ng(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function U$(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Fc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ns(t, l, o, s, null);
}
function ns(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++tg };
  return s == null && st.vnode != null && st.vnode(r), r;
}
function F$() {
  return { current: null };
}
function Bc(t) {
  return t.children;
}
function In(t, e) {
  this.props = t, this.context = e;
}
function Or(t, e) {
  if (e == null)
    return t.__ ? Or(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Or(t) : null;
}
function og(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return og(t);
  }
}
function xf(t) {
  (!t.__d && (t.__d = !0) && rr.push(t) && !zs.__r++ || kf !== st.debounceRendering) && ((kf = st.debounceRendering) || setTimeout)(zs);
}
function zs() {
  for (var t; zs.__r = rr.length; )
    t = rr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), rr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ze({}, r)).__v = r.__v + 1, w_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Or(r), r.__h), lg(o, r), r.__e != l && og(r)));
    });
}
function rg(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || eg, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ns(null, a, null, null, a) : Array.isArray(a) ? ns(Bc, { children: a }, null, null, null) : a.__b > 0 ? ns(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      w_(t, a, u = u || js, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = ig(a, _, t) : _ = sg(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Or(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && ag(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      cg(p[i], p[++i], p[++i]);
}
function ig(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? ig(o, e, n) : sg(n, o, o, s, o.__e, e));
  return e;
}
function sg(t, e, n, o, s, r) {
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
function B$(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Vs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Vs(t, r, e[r], n[r], o);
}
function Sf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || I$.test(e) ? n : n + "px";
}
function Vs(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Sf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Sf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Ef : Cf, r) : t.removeEventListener(e, r ? Ef : Cf, r);
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
function Cf(t) {
  this.l[t.type + !1](st.event ? st.event(t) : t);
}
function Ef(t) {
  this.l[t.type + !0](st.event ? st.event(t) : t);
}
function w_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = st.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new In(p, g), i.constructor = b, i.render = z$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ze({}, i.__s)), Ze(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = Ze(Ze({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === Bc && h.key == null ? h.props.children : h, rg(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = j$(n.__e, e, n, o, s, r, l, _);
    (h = st.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), st.__e(x, e, n);
  }
}
function lg(t, e) {
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
function j$(t, e, n, o, s, r, l, c) {
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
    if (r = r && Fc.call(t.childNodes), h = (d = n.props || js).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (B$(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, rg(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Or(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && ng(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Vs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Vs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function cg(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    st.__e(o, n);
  }
}
function ag(t, e, n) {
  var o, s;
  if (st.unmount && st.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || cg(o, null, e)), (o = t.__c) != null) {
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
      o[s] && ag(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || ng(t.__e), t.__ = t.__e = t.__d = void 0;
}
function z$(t, e, n) {
  return this.constructor(t, n);
}
function V$(t, e, n) {
  var o, s, r;
  st.__ && st.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], w_(e, t = (!o && n || e).__k = U$(Bc, null, [t]), s || js, js, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Fc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), lg(r, t);
}
Fc = eg.slice, st = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, tg = 0, Mo = function(t) {
  return t != null && t.constructor === void 0;
}, In.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof t == "function" && (t = t(Ze({}, n), this.props)), t && Ze(n, t), t != null && this.__v && (e && this._sb.push(e), xf(this));
}, In.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), xf(this));
}, In.prototype.render = Bc, rr = [], zs.__r = 0;
var Y$ = 0;
function St(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Y$, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return st.vnode && st.vnode(_), _;
}
let q$ = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
class _g extends In {
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
    return Mo(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ St("div", { className: "modal-header", children: /* @__PURE__ */ St("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : Mo(e) ? e : /* @__PURE__ */ St("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ St(go, { ...e }) : null,
      n ? /* @__PURE__ */ St("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ St("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? Mo(e) ? e : /* @__PURE__ */ St("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return Mo(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ St("div", { className: "modal-footer", children: n ? /* @__PURE__ */ St(go, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ St("div", { className: F("modal-dialog", e), style: n, children: /* @__PURE__ */ St("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
M(_g, "defaultProps", { closeBtn: !0 });
var ei, no, ni;
class G$ extends In {
  constructor() {
    super(...arguments);
    E(this, ei, F$());
    E(this, no, void 0);
    M(this, "state", {});
    E(this, ni, () => {
      var s, r;
      const n = (r = (s = y(this, ei).current) == null ? void 0 : s.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = y(this, no);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, c = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, c.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, no, o);
    });
  }
  componentDidMount() {
    y(this, ni).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = y(this, no)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ St(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: y(this, ei),
        onLoad: y(this, ni)
      }
    );
  }
}
ei = new WeakMap(), no = new WeakMap(), ni = new WeakMap();
function X$(t, e) {
  const { custom: n, title: o, content: s } = e;
  return {
    body: s,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function J$(t, e) {
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
    body: n === "html" ? /* @__PURE__ */ St("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: _ } }) : _
  };
}
async function K$(t, e) {
  const { url: n, custom: o, title: s } = e;
  return {
    title: s,
    ...o,
    body: /* @__PURE__ */ St(G$, { url: n })
  };
}
const Z$ = {
  custom: X$,
  ajax: J$,
  iframe: K$
};
var oi, ri, ce, oo, os, El, ug, ii, Ta;
const vr = class extends Ht {
  constructor() {
    super(...arguments);
    E(this, oo);
    E(this, El);
    E(this, ii);
    E(this, oi, void 0);
    E(this, ri, void 0);
    E(this, ce, void 0);
  }
  get id() {
    return y(this, ri);
  }
  get loading() {
    return this.modalElement.classList.contains(vr.LOADING_CLASS);
  }
  get modalElement() {
    let n = y(this, oi);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), Bs(n, {
        id: o,
        style: this.options.style
      }), Qm(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, oi, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, ri, this.options.id || `modal-${q$()}`);
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
    y(this, ce) && clearTimeout(y(this, ce));
    const { modalElement: n, options: o } = this, { type: s, loadTimeout: r } = o, l = Z$[s];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.classList.add(vr.LOADING_CLASS), await W(this, El, ug).call(this), r && H(this, ce, window.setTimeout(() => {
      H(this, ce, 0), W(this, ii, Ta).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await W(this, ii, Ta).call(this, this.options.failedTip) : c && typeof c == "object" && await W(this, oo, os).call(this, c), y(this, ce) && (clearTimeout(y(this, ce)), H(this, ce, 0)), n.classList.remove(vr.LOADING_CLASS), !0;
  }
};
let Ro = vr;
oi = new WeakMap(), ri = new WeakMap(), ce = new WeakMap(), oo = new WeakSet(), os = function(n) {
  return new Promise((o) => {
    if (Array.isArray(n))
      return this.modalElement.innerHTML = n[0], o();
    const { afterRender: s, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), s == null || s(l), o();
      },
      ...r
    }, V$(
      /* @__PURE__ */ St(_g, { ...n }),
      this.modalElement
    );
  });
}, El = new WeakSet(), ug = function() {
  const { loadingText: n } = this.options;
  return W(this, oo, os).call(this, {
    body: /* @__PURE__ */ St("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ St("span", { className: "spinner" }),
      n ? /* @__PURE__ */ St("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, ii = new WeakSet(), Ta = function(n) {
  if (n)
    return W(this, oo, os).call(this, {
      body: /* @__PURE__ */ St("div", { className: "modal-load-failed", children: n })
    });
}, M(Ro, "LOADING_CLASS", "loading"), M(Ro, "DEFAULT", {
  ...Ht.DEFAULT,
  loadTimeout: 1e4
});
var He, Tl, fg, Al, hg, Ll, dg;
class ir extends ie {
  constructor() {
    super(...arguments);
    E(this, Tl);
    E(this, Al);
    E(this, Ll);
    E(this, He, void 0);
  }
  get modal() {
    return y(this, He);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return W(this, Al, hg).call(this).show();
  }
  hide() {
    var n;
    (n = y(this, He)) == null || n.hide();
  }
}
He = new WeakMap(), Tl = new WeakSet(), fg = function() {
  const {
    container: n,
    ...o
  } = this.options, s = o, r = this.element.getAttribute("href") || "";
  return s.type || (s.target || r[0] === "#" ? s.type = "static" : s.type = s.type || (s.url ? "iframe" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && r[0] !== "#" && (s.url = r), s;
}, Al = new WeakSet(), hg = function() {
  const n = W(this, Tl, fg).call(this);
  let o = y(this, He);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Ht(W(this, Ll, dg).call(this), n), H(this, He, o)) : (o = new Ro(this.container, n), H(this, He, o)), o;
}, Ll = new WeakSet(), dg = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const s = o.getAttribute("href");
      s != null && s.startsWith("#") && (n = s);
    }
  }
  return this.container.querySelector(n || ".modal");
}, M(ir, "NAME", "ModalTrigger"), M(ir, "EVENTS", !0), M(ir, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (t) => {
  const n = t.target.closest(ir.TOGGLE_SELECTOR);
  if (n) {
    const o = ir.ensure(n);
    o && o.show(), console.log("> modalTrigger", o);
  }
});
var da;
let Q$ = (da = class extends mo {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = F(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, M(da, "NAME", "nav"), da);
class Tf extends At {
}
M(Tf, "NAME", "nav"), M(Tf, "Component", Q$);
var Aa;
Aa = { __e: function(t, e, n, o) {
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
var tk = 0;
function rn(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --tk, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Aa.vnode && Aa.vnode(_), _;
}
function Hr(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function ek({
  key: t,
  type: e,
  btnType: n,
  page: o,
  format: s,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = Hr(r, o);
  return c.text === void 0 && !c.icon && s && (c.text = typeof s == "function" ? s(_) : It(s, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : It(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ rn(fe, { type: n, ...c });
}
const be = 24 * 60 * 60 * 1e3, Ft = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), Ti = (t, e = new Date()) => (t = Ft(t), e = Ft(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), Af = (t, e = new Date()) => Ft(t).getFullYear() === Ft(e).getFullYear(), nk = (t, e = new Date()) => (t = Ft(t), e = Ft(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), FS = (t, e = new Date()) => {
  t = Ft(t), e = Ft(e);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(t.getTime() / n), s = Math.floor(e.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, BS = (t, e) => Ti(Ft(e), t), jS = (t, e) => Ti(Ft(e).getTime() - be, t), zS = (t, e) => Ti(Ft(e).getTime() + be, t), VS = (t, e) => Ti(Ft(e).getTime() - 2 * be, t), La = (t, e = "yyyy-MM-dd hh:mm") => {
  t = Ft(t);
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
}, YS = (t, e, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = La(t, Af(t) ? o.month : o.full);
  if (Ti(t, e))
    return s;
  const r = La(e, Af(t, e) ? nk(t, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, qS = (t) => {
  const e = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return e - be * 7;
    case "oneMonth":
      return e - be * 31;
    case "threeMonth":
      return e - be * 31 * 3;
    case "halfYear":
      return e - be * 183;
    case "oneYear":
      return e - be * 365;
    case "twoYear":
      return e - 2 * (be * 365);
    default:
      return 0;
  }
}, Lf = (t, e, n = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, Lf(t, "day", n, o);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, Lf(t, "day", n, o);
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
function ok({
  key: t,
  type: e,
  page: n,
  text: o = "",
  pagerInfo: s,
  children: r,
  ...l
}) {
  const c = Hr(s, n);
  return o = typeof o == "function" ? o(c) : It(o, c), /* @__PURE__ */ rn(Kh, { ...l, children: [
    r,
    o
  ] });
}
function rk({
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
  const _ = { ...c, square: !0 }, h = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ rn(fe, { type: n, ..._ })), i = (u, a) => {
    const f = [];
    for (let v = u; v <= a; v++) {
      _.text = v, delete _.icon, _.disabled = !1;
      const p = Hr(s, v);
      l && (_.url = typeof l == "function" ? l(p) : It(l, p)), f.push(/* @__PURE__ */ rn(fe, { type: n, ..._, onClick: r }));
    }
    return f;
  };
  let d = [];
  return d = [...i(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= o ? d = [...d, ...i(2, s.pageTotal)] : s.page < o - 2 ? d = [...d, ...i(2, o - 2), h(), ...i(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - o + 3 ? d = [...d, h(), ...i(s.pageTotal - o + 3, s.pageTotal)] : d = [...d, h(), ...i(s.page - Math.ceil((o - 4) / 2), s.page + Math.floor((o - 4) / 2)), h(), ...i(s.pageTotal, s.pageTotal)]), d;
}
function ik({
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
  return r.text = typeof l == "function" ? l(e) : It(l, e), s.menu = { ...s.menu, className: F((c = s.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ rn(_p, { type: "dropdown", dropdown: s, ...r });
}
function sk({
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
    const p = Hr(s, d);
    c && !c({ info: p, event: v }) || (v.target.href = i.url = typeof _ == "function" ? _(p) : It(_, p));
  }, f = Hr(s, e || 0);
  return i.url = typeof _ == "function" ? _(f) : It(_, f), i.className = F("input-group-addon", i.className), /* @__PURE__ */ rn("div", { className: F("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ rn("input", { type: "number", class: "form-control", max: s.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ rn(fe, { type: o, ...i, onClick: a })
  ] });
}
var To;
let lk = (To = class extends go {
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
}, M(To, "NAME", "pager"), M(To, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), M(To, "ItemComponents", {
  ...go.ItemComponents,
  link: ek,
  info: ok,
  nav: rk,
  "size-menu": ik,
  goto: sk
}), To);
class Mf extends At {
}
M(Mf, "NAME", "pager"), M(Mf, "Component", lk);
var pg, yt, mg, sr, Rf, gg = {}, yg = [], ck = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function vg(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ca(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++mg };
  return s == null && yt.vnode != null && yt.vnode(r), r;
}
function ak() {
  return { current: null };
}
function $_(t) {
  return t.children;
}
function sn(t, e) {
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
function bg(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return bg(t);
  }
}
function Nf(t) {
  (!t.__d && (t.__d = !0) && sr.push(t) && !Ys.__r++ || Rf !== yt.debounceRendering) && ((Rf = yt.debounceRendering) || setTimeout)(Ys);
}
function Ys() {
  for (var t; Ys.__r = sr.length; )
    t = sr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), sr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Qe({}, r)).__v = r.__v + 1, xg(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Wr(r), r.__h), uk(o, r), r.__e != l && bg(r)));
    });
}
function wg(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || yg, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ca(null, a, null, null, a) : Array.isArray(a) ? ca($_, { children: a }, null, null, null) : a.__b > 0 ? ca(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      xg(t, a, u = u || gg, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = $g(a, _, t) : _ = kg(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Wr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Cg(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Sg(p[i], p[++i], p[++i]);
}
function $g(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? $g(o, e, n) : kg(n, o, o, s, o.__e, e));
  return e;
}
function kg(t, e, n, o, s, r) {
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
function _k(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || qs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || qs(t, r, e[r], n[r], o);
}
function Df(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || ck.test(e) ? n : n + "px";
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
            n && e in n || Df(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Df(t.style, e, n[e]);
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
  this.l[t.type + !1](yt.event ? yt.event(t) : t);
}
function Of(t) {
  this.l[t.type + !0](yt.event ? yt.event(t) : t);
}
function xg(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = yt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new sn(p, g), i.constructor = b, i.render = hk), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Qe({}, i.__s)), Qe(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = Qe(Qe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === $_ && h.key == null ? h.props.children : h, wg(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = fk(n.__e, e, n, o, s, r, l, _);
    (h = yt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), yt.__e(x, e, n);
  }
}
function uk(t, e) {
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
function fk(t, e, n, o, s, r, l, c) {
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
    if (r = r && pg.call(t.childNodes), h = (d = n.props || gg).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (_k(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, wg(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Wr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && vg(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && qs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && qs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Sg(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    yt.__e(o, n);
  }
}
function Cg(t, e, n) {
  var o, s;
  if (yt.unmount && yt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Sg(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Cg(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || vg(t.__e), t.__ = t.__e = t.__d = void 0;
}
function hk(t, e, n) {
  return this.constructor(t, n);
}
pg = yg.slice, yt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, mg = 0, sn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qe({}, this.state), typeof t == "function" && (t = t(Qe({}, n), this.props)), t && Qe(n, t), t != null && this.__v && (e && this._sb.push(e), Nf(this));
}, sn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Nf(this));
}, sn.prototype.render = $_, sr = [], Ys.__r = 0;
var dk = 0;
function nt(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --dk, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return yt.vnode && yt.vnode(_), _;
}
let pk = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Ml;
class mk extends sn {
  constructor() {
    super(...arguments);
    E(this, Ml, (n) => {
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
      /* @__PURE__ */ nt("div", { className: "picker-deselect-btn btn", onClick: y(this, Ml), "data-idx": u, children: /* @__PURE__ */ nt("span", { className: "close" }) })
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
Ml = new WeakMap();
var Rl;
class gk extends sn {
  constructor() {
    super(...arguments);
    E(this, Rl, (n) => {
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
    } = this.props, [d] = c, u = d ? /* @__PURE__ */ nt("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ nt("span", { className: "picker-select-placeholder", children: r }), a = d && _ ? /* @__PURE__ */ nt("button", { type: "button", className: "btn picker-deselect-btn", onClick: y(this, Rl), children: /* @__PURE__ */ nt("span", { className: "close" }) }) : null;
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
Rl = new WeakMap();
var Nl, Eg, si, Dl, li, Pl;
class yk extends sn {
  constructor() {
    super(...arguments);
    E(this, Nl);
    M(this, "state", { keys: "", shown: !1 });
    E(this, si, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    E(this, Dl, ({ item: n }) => {
      const o = this.props.items.find((s) => s.value === n.key);
      o && this.props.onSelectItem(o);
    });
    E(this, li, (n) => {
      this.setState({ keys: n.target.value });
    });
    E(this, Pl, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", y(this, si)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", y(this, si));
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
        /* @__PURE__ */ nt("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: i, value: u, onChange: y(this, li), onInput: y(this, li) }),
        a ? /* @__PURE__ */ nt("button", { type: "button", className: "btn picker-menu-search-clear", onClick: y(this, Pl), children: /* @__PURE__ */ nt("span", { className: "close" }) }) : /* @__PURE__ */ nt("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ nt(Ga, { className: "picker-menu-list", items: W(this, Nl, Eg).call(this), onClickItem: y(this, Dl), ...h })
    ] });
  }
}
Nl = new WeakSet(), Eg = function() {
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
}, si = new WeakMap(), Dl = new WeakMap(), li = new WeakMap(), Pl = new WeakMap();
function Hf(t) {
  const e = /* @__PURE__ */ new Set();
  return t.reduce((n, o) => (e.has(o) || (e.add(o), n.push(o)), n), []);
}
var pa, ci, ai, _i, ro, rs, ui, Ma, Ol, Tg, Hl, Ag, Wl, Il, Ul, Fl, Bl, Lg;
let vk = (pa = class extends sn {
  constructor(n) {
    super(n);
    E(this, ro);
    E(this, ui);
    E(this, Ol);
    E(this, Hl);
    E(this, Bl);
    E(this, ci, 0);
    E(this, ai, pk());
    E(this, _i, ak());
    E(this, Wl, (n, o) => {
      const { valueList: s } = this, r = new Set(n.map((c) => c.value)), l = s.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    E(this, Il, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    E(this, Ul, () => {
      this.close();
    });
    E(this, Fl, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = y(this, _i).current) == null || o.hide();
      });
    });
    this.state = {
      value: W(this, Ol, Tg).call(this, n.defaultValue) ?? "",
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
    return W(this, ui, Ma).call(this, this.state.value);
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
      const s = ++B_(this, ci)._;
      if (await W(this, ro, rs).call(this, { loading: !0, items: [] }), n = await n(), y(this, ci) !== s)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await W(this, ro, rs).call(this, o), n;
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
    await W(this, ro, rs).call(this, { open: n }), n && this.loadItemList();
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
    } = this.props, l = r ? mk : gk;
    return /* @__PURE__ */ nt("div", { className: F("picker", n), style: o, id: `picker-${y(this, ai)}`, children: [
      /* @__PURE__ */ nt(l, { ...W(this, Hl, Ag).call(this) }),
      s,
      this.state.open ? /* @__PURE__ */ nt(yk, { ...W(this, Bl, Lg).call(this), ref: y(this, _i) }) : null
    ] });
  }
}, ci = new WeakMap(), ai = new WeakMap(), _i = new WeakMap(), ro = new WeakSet(), rs = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, ui = new WeakSet(), Ma = function(n) {
  return typeof n == "string" ? Hf(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? Hf(n) : [];
}, Ol = new WeakSet(), Tg = function(n) {
  const o = W(this, ui, Ma).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, Hl = new WeakSet(), Ag = function() {
  const { placeholder: n, disabled: o } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: y(this, Il),
    onDeselect: y(this, Wl)
  };
}, Wl = new WeakMap(), Il = new WeakMap(), Ul = new WeakMap(), Fl = new WeakMap(), Bl = new WeakSet(), Lg = function() {
  const { search: n, menuClass: o, menuWidth: s, menuStyle: r, menuMaxHeight: l, menuMaxWidth: c } = this.props, { items: _ } = this.state;
  return {
    id: y(this, ai),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: s,
    maxHeight: l,
    maxWidth: c,
    onRequestHide: y(this, Ul),
    onSelectItem: y(this, Fl)
  };
}, M(pa, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), pa);
class Wf extends At {
}
M(Wf, "NAME", "picker"), M(Wf, "Component", vk);
var jc, lt, Mg, lr, If, Gs = {}, Rg = [], bk = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function tn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ng(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Dg(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? jc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return is(t, l, o, s, null);
}
function is(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Mg };
  return s == null && lt.vnode != null && lt.vnode(r), r;
}
function Wi() {
  return { current: null };
}
function zc(t) {
  return t.children;
}
function cr(t, e) {
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
function Pg(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Pg(t);
  }
}
function Uf(t) {
  (!t.__d && (t.__d = !0) && lr.push(t) && !Xs.__r++ || If !== lt.debounceRendering) && ((If = lt.debounceRendering) || setTimeout)(Xs);
}
function Xs() {
  for (var t; Xs.__r = lr.length; )
    t = lr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), lr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = tn({}, r)).__v = r.__v + 1, k_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ir(r), r.__h), Ig(o, r), r.__e != l && Pg(r)));
    });
}
function Og(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Rg, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? is(null, a, null, null, a) : Array.isArray(a) ? is(zc, { children: a }, null, null, null) : a.__b > 0 ? is(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      k_(t, a, u = u || Gs, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Hg(a, _, t) : _ = Wg(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Ir(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Fg(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Ug(p[i], p[++i], p[++i]);
}
function Hg(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Hg(o, e, n) : Wg(n, o, o, s, o.__e, e));
  return e;
}
function Wg(t, e, n, o, s, r) {
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
function wk(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Js(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Js(t, r, e[r], n[r], o);
}
function Ff(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || bk.test(e) ? n : n + "px";
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
            n && e in n || Ff(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ff(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? jf : Bf, r) : t.removeEventListener(e, r ? jf : Bf, r);
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
function Bf(t) {
  this.l[t.type + !1](lt.event ? lt.event(t) : t);
}
function jf(t) {
  this.l[t.type + !0](lt.event ? lt.event(t) : t);
}
function k_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = lt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new cr(p, g), i.constructor = b, i.render = kk), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = tn({}, i.__s)), tn(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = tn(tn({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === zc && h.key == null ? h.props.children : h, Og(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = $k(n.__e, e, n, o, s, r, l, _);
    (h = lt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), lt.__e(x, e, n);
  }
}
function Ig(t, e) {
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
function $k(t, e, n, o, s, r, l, c) {
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
    if (r = r && jc.call(t.childNodes), h = (d = n.props || Gs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (wk(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Og(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ir(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Ng(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Js(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Js(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Ug(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    lt.__e(o, n);
  }
}
function Fg(t, e, n) {
  var o, s;
  if (lt.unmount && lt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Ug(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Fg(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Ng(t.__e), t.__ = t.__e = t.__d = void 0;
}
function kk(t, e, n) {
  return this.constructor(t, n);
}
function xk(t, e, n) {
  var o, s, r;
  lt.__ && lt.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], k_(e, t = (!o && n || e).__k = Dg(zc, null, [t]), s || Gs, Gs, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? jc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Ig(r, t);
}
jc = Rg.slice, lt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Mg = 0, cr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tn({}, this.state), typeof t == "function" && (t = t(tn({}, n), this.props)), t && tn(n, t), t != null && this.__v && (e && this._sb.push(e), Uf(this));
}, cr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Uf(this));
}, cr.prototype.render = zc, lr = [], Xs.__r = 0;
var Sk = 0;
function Bt(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Sk, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return lt.vnode && lt.vnode(_), _;
}
var Ks = {}, Ck = {
  get exports() {
    return Ks;
  },
  set exports(t) {
    Ks = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(Pm, function() {
    var n = 1e3, o = 6e4, s = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", i = "week", d = "month", u = "quarter", a = "year", f = "date", v = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var C = ["th", "st", "nd", "rd"], k = N % 100;
      return "[" + N + (C[(k - 20) % 10] || C[k] || C[0]) + "]";
    } }, w = function(N, C, k) {
      var D = String(N);
      return !D || D.length >= C ? N : "" + Array(C + 1 - D.length).join(k) + N;
    }, $ = { s: w, z: function(N) {
      var C = -N.utcOffset(), k = Math.abs(C), D = Math.floor(k / 60), L = k % 60;
      return (C <= 0 ? "+" : "-") + w(D, 2, "0") + ":" + w(L, 2, "0");
    }, m: function N(C, k) {
      if (C.date() < k.date())
        return -N(k, C);
      var D = 12 * (k.year() - C.year()) + (k.month() - C.month()), L = C.clone().add(D, d), O = k - L < 0, P = C.clone().add(D + (O ? -1 : 1), d);
      return +(-(D + (k - L) / (O ? L - P : P - L)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: a, w: i, d: h, D: f, h: _, m: c, s: l, ms: r, Q: u }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, S = "en", A = {};
    A[S] = g;
    var T = function(N) {
      return N instanceof q;
    }, b = function N(C, k, D) {
      var L;
      if (!C)
        return S;
      if (typeof C == "string") {
        var O = C.toLowerCase();
        A[O] && (L = O), k && (A[O] = k, L = O);
        var P = C.split("-");
        if (!L && P.length > 1)
          return N(P[0]);
      } else {
        var U = C.name;
        A[U] = C, L = U;
      }
      return !D && L && (S = L), L || !D && S;
    }, x = function(N, C) {
      if (T(N))
        return N.clone();
      var k = typeof C == "object" ? C : {};
      return k.date = N, k.args = arguments, new q(k);
    }, R = $;
    R.l = b, R.i = T, R.w = function(N, C) {
      return x(N, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var q = function() {
      function N(k) {
        this.$L = b(k.locale, null, !0), this.parse(k);
      }
      var C = N.prototype;
      return C.parse = function(k) {
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
              var U = P[2] - 1 || 0, V = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], U, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V)) : new Date(P[1], U, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V);
            }
          }
          return new Date(L);
        }(k), this.$x = k.x || {}, this.init();
      }, C.init = function() {
        var k = this.$d;
        this.$y = k.getFullYear(), this.$M = k.getMonth(), this.$D = k.getDate(), this.$W = k.getDay(), this.$H = k.getHours(), this.$m = k.getMinutes(), this.$s = k.getSeconds(), this.$ms = k.getMilliseconds();
      }, C.$utils = function() {
        return R;
      }, C.isValid = function() {
        return this.$d.toString() !== v;
      }, C.isSame = function(k, D) {
        var L = x(k);
        return this.startOf(D) <= L && L <= this.endOf(D);
      }, C.isAfter = function(k, D) {
        return x(k) < this.startOf(D);
      }, C.isBefore = function(k, D) {
        return this.endOf(D) < x(k);
      }, C.$g = function(k, D, L) {
        return R.u(k) ? this[D] : this.set(L, k);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(k, D) {
        var L = this, O = !!R.u(D) || D, P = R.p(k), U = function(ct, X) {
          var at = R.w(L.$u ? Date.UTC(L.$y, X, ct) : new Date(L.$y, X, ct), L);
          return O ? at : at.endOf(h);
        }, V = function(ct, X) {
          return R.w(L.toDate()[ct].apply(L.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), L);
        }, z = this.$W, K = this.$M, kt = this.$D, B = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? U(1, 0) : U(31, 11);
          case d:
            return O ? U(1, K) : U(0, K + 1);
          case i:
            var Z = this.$locale().weekStart || 0, $t = (z < Z ? z + 7 : z) - Z;
            return U(O ? kt - $t : kt + (6 - $t), K);
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
      }, C.endOf = function(k) {
        return this.startOf(k, !1);
      }, C.$set = function(k, D) {
        var L, O = R.p(k), P = "set" + (this.$u ? "UTC" : ""), U = (L = {}, L[h] = P + "Date", L[f] = P + "Date", L[d] = P + "Month", L[a] = P + "FullYear", L[_] = P + "Hours", L[c] = P + "Minutes", L[l] = P + "Seconds", L[r] = P + "Milliseconds", L)[O], V = O === h ? this.$D + (D - this.$W) : D;
        if (O === d || O === a) {
          var z = this.clone().set(f, 1);
          z.$d[U](V), z.init(), this.$d = z.set(f, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          U && this.$d[U](V);
        return this.init(), this;
      }, C.set = function(k, D) {
        return this.clone().$set(k, D);
      }, C.get = function(k) {
        return this[R.p(k)]();
      }, C.add = function(k, D) {
        var L, O = this;
        k = Number(k);
        var P = R.p(D), U = function(K) {
          var kt = x(O);
          return R.w(kt.date(kt.date() + Math.round(K * k)), O);
        };
        if (P === d)
          return this.set(d, this.$M + k);
        if (P === a)
          return this.set(a, this.$y + k);
        if (P === h)
          return U(1);
        if (P === i)
          return U(7);
        var V = (L = {}, L[c] = o, L[_] = s, L[l] = n, L)[P] || 1, z = this.$d.getTime() + k * V;
        return R.w(z, this);
      }, C.subtract = function(k, D) {
        return this.add(-1 * k, D);
      }, C.format = function(k) {
        var D = this, L = this.$locale();
        if (!this.isValid())
          return L.invalidDate || v;
        var O = k || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), U = this.$H, V = this.$m, z = this.$M, K = L.weekdays, kt = L.months, B = function(X, at, Pt, Ot) {
          return X && (X[at] || X(D, O)) || Pt[at].slice(0, Ot);
        }, Z = function(X) {
          return R.s(U % 12 || 12, X, "0");
        }, $t = L.meridiem || function(X, at, Pt) {
          var Ot = X < 12 ? "AM" : "PM";
          return Pt ? Ot.toLowerCase() : Ot;
        }, ct = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: R.s(z + 1, 2, "0"), MMM: B(L.monthsShort, z, kt, 3), MMMM: B(kt, z), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: B(L.weekdaysMin, this.$W, K, 2), ddd: B(L.weekdaysShort, this.$W, K, 3), dddd: K[this.$W], H: String(U), HH: R.s(U, 2, "0"), h: Z(1), hh: Z(2), a: $t(U, V, !0), A: $t(U, V, !1), m: String(V), mm: R.s(V, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(X, at) {
          return at || ct[X] || P.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(k, D, L) {
        var O, P = R.p(D), U = x(k), V = (U.utcOffset() - this.utcOffset()) * o, z = this - U, K = R.m(this, U);
        return K = (O = {}, O[a] = K / 12, O[d] = K, O[u] = K / 3, O[i] = (z - V) / 6048e5, O[h] = (z - V) / 864e5, O[_] = z / s, O[c] = z / o, O[l] = z / n, O)[P] || z, L ? K : R.a(K);
      }, C.daysInMonth = function() {
        return this.endOf(d).$D;
      }, C.$locale = function() {
        return A[this.$L];
      }, C.locale = function(k, D) {
        if (!k)
          return this.$L;
        var L = this.clone(), O = b(k, D, !0);
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
    return x.prototype = j, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", f]].forEach(function(N) {
      j[N[1]] = function(C) {
        return this.$g(C, N[0], N[1]);
      };
    }), x.extend = function(N, C) {
      return N.$i || (N(C, q, x), N.$i = !0), x;
    }, x.locale = b, x.isDayjs = T, x.unix = function(N) {
      return x(1e3 * N);
    }, x.en = A[S], x.Ls = A, x.p = {}, x;
  });
})(Ck);
const Ek = (t = "00:00:00") => {
  const e = Ks(`1989-01-01 ${t}`);
  return {
    hour: e.hour(),
    minute: e.minute(),
    second: e.second()
  };
};
function Tk() {
  let t = new Array(24).fill(0), e = new Array(60).fill(0), n = new Array(60).fill(0);
  return t = t.map((o, s) => o + s), e = e.map((o, s) => o + s), n = n.map((o, s) => o + s), { hourList: t, minuteList: e, secondList: n };
}
class Ak extends cr {
  constructor() {
    super(...arguments);
    M(this, "cellHeight", 24);
    M(this, "ref", Wi());
    M(this, "hourRef", Wi());
    M(this, "minuteRef", Wi());
    M(this, "secondRef", Wi());
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
    const s = Ek(this.state.selectTime);
    return o.map((r) => {
      const l = s[n] === r, c = { ...s, [n]: r };
      return /* @__PURE__ */ Bt(
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
    const { showSeconds: n, style: o } = this.props, { hourList: s, minuteList: r, secondList: l } = Tk();
    return /* @__PURE__ */ Bt("div", { className: F("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ Bt("div", { className: F("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ Bt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Bt("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", s) }) }),
        /* @__PURE__ */ Bt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Bt("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ Bt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Bt("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ Bt("div", { className: F("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ Bt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ Bt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function Ai(t) {
  return t.split("-")[1];
}
function x_(t) {
  return t === "y" ? "height" : "width";
}
function wo(t) {
  return t.split("-")[0];
}
function Vc(t) {
  return ["top", "bottom"].includes(wo(t)) ? "x" : "y";
}
function zf(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Vc(e), _ = x_(c), h = o[_] / 2 - s[_] / 2, i = wo(e), d = c === "x";
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
  switch (Ai(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const Lk = async (t, e, n) => {
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
  } = zf(h, o, _), u = o, a = {}, f = 0;
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
      } = zf(h, u, _)), v = -1;
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
function Mk(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Bg(t) {
  return typeof t != "number" ? Mk(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Zs(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Rk(t, e) {
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
  } = e, f = Bg(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = Zs(await r.getClippingRect({
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
  }, S = Zs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Nk = Math.min, Dk = Math.max;
function Pk(t, e, n) {
  return Dk(t, Nk(e, n));
}
const Ok = (t) => ({
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
    const h = Bg(o), i = {
      x: s,
      y: r
    }, d = Vc(l), u = x_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], T = w / 2 - a[u] / 2 + $, b = Pk(S, T, A), R = Ai(l) != null && T != b && c.reference[u] / 2 - (T < S ? h[f] : h[v]) - a[u] / 2 < 0 ? T < S ? S - T : A - T : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: T - b
      }
    };
  }
}), Hk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Qs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Hk[e]);
}
function Wk(t, e, n) {
  n === void 0 && (n = !1);
  const o = Ai(t), s = Vc(t), r = x_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Qs(l)), {
    main: l,
    cross: Qs(l)
  };
}
const Ik = {
  start: "end",
  end: "start"
};
function Ra(t) {
  return t.replace(/start|end/g, (e) => Ik[e]);
}
function Uk(t) {
  const e = Qs(t);
  return [Ra(t), e, Ra(e)];
}
function Fk(t, e, n) {
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
function Bk(t, e, n, o) {
  const s = Ai(t);
  let r = Fk(wo(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(Ra)))), r;
}
const jk = function(t) {
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
      } = t, p = wo(o), m = wo(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [Qs(l)] : Uk(l));
      !d && a !== "none" && w.push(...Bk(l, f, a, g));
      const $ = [l, ...w], S = await Rk(e, v), A = [];
      let T = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = Wk(o, r, g);
        A.push(S[R], S[q]);
      }
      if (T = [...T, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var b;
        const R = (((b = s.flip) == null ? void 0 : b.index) || 0) + 1, q = $[R];
        if (q)
          return {
            data: {
              index: R,
              overflows: T
            },
            reset: {
              placement: q
            }
          };
        let j = "bottom";
        switch (u) {
          case "bestFit": {
            var x;
            const N = (x = T.map((C) => [C, C.overflows.filter((k) => k > 0).reduce((k, D) => k + D, 0)]).sort((C, k) => C[1] - k[1])[0]) == null ? void 0 : x[0].placement;
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
async function zk(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = wo(n), c = Ai(n), _ = Vc(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const Vk = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await zk(e, t);
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
function an(t) {
  return zg(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Ii;
function jg() {
  if (Ii)
    return Ii;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Ii = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Ii) : navigator.userAgent;
}
function Le(t) {
  return t instanceof Jt(t).HTMLElement;
}
function oe(t) {
  return t instanceof Jt(t).Element;
}
function zg(t) {
  return t instanceof Jt(t).Node;
}
function Vf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Jt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Yc(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = pe(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function Yk(t) {
  return ["table", "td", "th"].includes(an(t));
}
function S_(t) {
  const e = /firefox/i.test(jg()), n = pe(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function Vg() {
  return !/^((?!chrome|android).)*safari/i.test(jg());
}
function C_(t) {
  return ["html", "body", "#document"].includes(an(t));
}
const Yf = Math.min, ar = Math.max, tl = Math.round;
function Yg(t) {
  const e = pe(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = tl(n) !== s || tl(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function qg(t) {
  return oe(t) ? t : t.contextElement;
}
const Gg = {
  x: 1,
  y: 1
};
function Un(t) {
  const e = qg(t);
  if (!Le(e))
    return Gg;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = Yg(e);
  let l = (r ? tl(n.width) : n.width) / o, c = (r ? tl(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Mn(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = qg(t);
  let _ = Gg;
  e && (o ? oe(o) && (_ = Un(o)) : _ = Un(t));
  const h = c ? Jt(c) : window, i = !Vg() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const v = Jt(c), p = o && oe(o) ? Jt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = Un(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
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
function pn(t) {
  return ((zg(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function qc(t) {
  return oe(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Xg(t) {
  return Mn(pn(t)).left + qc(t).scrollLeft;
}
function qk(t, e, n) {
  const o = Le(e), s = pn(e), r = Mn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((an(e) !== "body" || Yc(s)) && (l = qc(e)), Le(e)) {
      const _ = Mn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = Xg(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Ur(t) {
  if (an(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (Vf(t) ? t.host : null) || // Fallback
    pn(t)
  );
  return Vf(e) ? e.host : e;
}
function qf(t) {
  return !Le(t) || pe(t).position === "fixed" ? null : t.offsetParent;
}
function Gk(t) {
  let e = Ur(t);
  for (; Le(e) && !C_(e); ) {
    if (S_(e))
      return e;
    e = Ur(e);
  }
  return null;
}
function Gf(t) {
  const e = Jt(t);
  let n = qf(t);
  for (; n && Yk(n) && pe(n).position === "static"; )
    n = qf(n);
  return n && (an(n) === "html" || an(n) === "body" && pe(n).position === "static" && !S_(n)) ? e : n || Gk(t) || e;
}
function Xk(t) {
  return Yg(t);
}
function Jk(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const s = Le(n), r = pn(n);
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
  if ((s || !s && o !== "fixed") && ((an(n) !== "body" || Yc(r)) && (l = qc(n)), Le(n))) {
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
function Kk(t, e) {
  const n = Jt(t), o = pn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = Vg();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Zk(t) {
  var e;
  const n = pn(t), o = qc(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = ar(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = ar(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + Xg(t);
  const _ = -o.scrollTop;
  return pe(s || n).direction === "rtl" && (c += ar(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Jg(t) {
  const e = Ur(t);
  return C_(e) ? t.ownerDocument.body : Le(e) && Yc(e) ? e : Jg(e);
}
function _r(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Jg(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Jt(o);
  return s ? e.concat(r, r.visualViewport || [], Yc(o) ? o : []) : e.concat(o, _r(o));
}
function Qk(t, e) {
  const n = Mn(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Le(t) ? Un(t) : {
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
function Xf(t, e, n) {
  return e === "viewport" ? Zs(Kk(t, n)) : oe(e) ? Qk(e, n) : Zs(Zk(pn(t)));
}
function tx(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = _r(t).filter((c) => oe(c) && an(c) !== "body"), s = null;
  const r = pe(t).position === "fixed";
  let l = r ? Ur(t) : t;
  for (; oe(l) && !C_(l); ) {
    const c = pe(l), _ = S_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Ur(l);
  }
  return e.set(t, o), o;
}
function ex(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? tx(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = Xf(e, i, s);
    return h.top = ar(d.top, h.top), h.right = Yf(d.right, h.right), h.bottom = Yf(d.bottom, h.bottom), h.left = ar(d.left, h.left), h;
  }, Xf(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const nx = {
  getClippingRect: ex,
  convertOffsetParentRelativeRectToViewportRelativeRect: Jk,
  isElement: oe,
  getDimensions: Xk,
  getOffsetParent: Gf,
  getDocumentElement: pn,
  getScale: Un,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || Gf, r = this.getDimensions;
    return {
      reference: qk(e, await s(n), o),
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
function ox(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...oe(t) ? _r(t) : t.contextElement ? _r(t.contextElement) : [], ..._r(e)] : [];
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
const rx = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: nx,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return Lk(t, e, {
    ...s,
    platform: r
  });
};
var io, so, xn, fi, Mt, hi, di, Na, jl, Kg, zl, Zg, Vl, Qg, Yl, ty, ql, ey, Gl, ny, Xl, oy, Jl;
const yn = class extends ie {
  constructor() {
    super(...arguments);
    E(this, di);
    E(this, jl);
    E(this, zl);
    E(this, Vl);
    E(this, Yl);
    E(this, ql);
    E(this, Gl);
    E(this, Xl);
    E(this, io, void 0);
    E(this, so, 0);
    E(this, xn, void 0);
    E(this, fi, void 0);
    E(this, Mt, void 0);
    E(this, hi, void 0);
    M(this, "hideLater", () => {
      y(this, Jl).call(this), H(this, so, window.setTimeout(this.hide.bind(this), 100));
    });
    E(this, Jl, () => {
      clearTimeout(y(this, so)), H(this, so, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, xn)) == null ? void 0 : n.classList.contains(yn.CLASS_SHOW);
  }
  get timepicker() {
    return y(this, xn) || W(this, zl, Zg).call(this);
  }
  get trigger() {
    return y(this, fi) || this.element;
  }
  get elementShowClass() {
    return `with-${yn.NAME}-show`;
  }
  show(n) {
    return H(this, fi, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(yn.CLASS_SHOW), W(this, Gl, ny).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = y(this, hi)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, xn)) == null || o.classList.remove(yn.CLASS_SHOW), !0;
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
let Vt = yn;
io = new WeakMap(), so = new WeakMap(), xn = new WeakMap(), fi = new WeakMap(), Mt = new WeakMap(), hi = new WeakMap(), di = new WeakSet(), Na = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, jl = new WeakSet(), Kg = function() {
  const n = W(this, di, Na).call(this);
  return H(this, Mt, document.createElement("div")), y(this, Mt).style.position = "absolute", y(this, Mt).style.width = `${n}px`, y(this, Mt).style.height = `${n}px`, y(this, Mt).style.transform = "rotate(45deg)", y(this, Mt);
}, zl = new WeakSet(), Zg = function() {
  const n = yn.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), xk(Dg(Ak, { ...this.options }), o), this.options.arrow && o.append(W(this, jl, Kg).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, xn, o), o;
}, Vl = new WeakSet(), Qg = function() {
  var l;
  const n = W(this, di, Na).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [Vk(n), jk()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && y(this, Mt) && ((l = r.middleware) == null || l.push(Ok({ element: y(this, Mt) }))), r;
}, Yl = new WeakSet(), ty = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, ql = new WeakSet(), ey = function(n) {
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
}, Gl = new WeakSet(), ny = function() {
  const n = W(this, Vl, Qg).call(this), o = W(this, Xl, oy).call(this);
  H(this, hi, ox(o, this.timepicker, () => {
    rx(o, this.timepicker, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.timepicker.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, Yl, ty).call(this, _);
      if (l.arrow && y(this, Mt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(y(this, Mt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Mt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, ql, ey).call(this, _)
        });
      }
    });
  }));
}, Xl = new WeakSet(), oy = function() {
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
}, Jl = new WeakMap(), M(Vt, "NAME", "timepicker"), M(Vt, "CLASSNAME", "timepicker"), M(Vt, "CLASS_SHOW", "show"), M(Vt, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), M(Vt, "DEFAULT", {
  value: Ks().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Vt.MENU_SELECTOR);
  n ? Vt.ensure(n).toggle() : Vt.clear({ event: t });
});
const ix = (t) => {
  const e = document.getElementsByClassName("with-timepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Vt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Vt.clear({ event: t });
};
window.addEventListener("scroll", ix, !0);
class Jf extends At {
}
M(Jf, "NAME", "toolbar"), M(Jf, "Component", go);
function Li(t) {
  return t.split("-")[1];
}
function E_(t) {
  return t === "y" ? "height" : "width";
}
function $o(t) {
  return t.split("-")[0];
}
function Gc(t) {
  return ["top", "bottom"].includes($o(t)) ? "x" : "y";
}
function Kf(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Gc(e), _ = E_(c), h = o[_] / 2 - s[_] / 2, i = $o(e), d = c === "x";
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
  switch (Li(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const sx = async (t, e, n) => {
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
  } = Kf(h, o, _), u = o, a = {}, f = 0;
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
      } = Kf(h, u, _)), v = -1;
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
function lx(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ry(t) {
  return typeof t != "number" ? lx(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function el(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function cx(t, e) {
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
  } = e, f = ry(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = el(await r.getClippingRect({
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
  }, S = el(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const ax = Math.min, _x = Math.max;
function ux(t, e, n) {
  return _x(t, ax(e, n));
}
const fx = (t) => ({
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
    const h = ry(o), i = {
      x: s,
      y: r
    }, d = Gc(l), u = E_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], T = w / 2 - a[u] / 2 + $, b = ux(S, T, A), R = Li(l) != null && T != b && c.reference[u] / 2 - (T < S ? h[f] : h[v]) - a[u] / 2 < 0 ? T < S ? S - T : A - T : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: T - b
      }
    };
  }
}), hx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function nl(t) {
  return t.replace(/left|right|bottom|top/g, (e) => hx[e]);
}
function dx(t, e, n) {
  n === void 0 && (n = !1);
  const o = Li(t), s = Gc(t), r = E_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = nl(l)), {
    main: l,
    cross: nl(l)
  };
}
const px = {
  start: "end",
  end: "start"
};
function Da(t) {
  return t.replace(/start|end/g, (e) => px[e]);
}
function mx(t) {
  const e = nl(t);
  return [Da(t), e, Da(e)];
}
function gx(t, e, n) {
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
function yx(t, e, n, o) {
  const s = Li(t);
  let r = gx($o(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(Da)))), r;
}
const vx = function(t) {
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
      } = t, p = $o(o), m = $o(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [nl(l)] : mx(l));
      !d && a !== "none" && w.push(...yx(l, f, a, g));
      const $ = [l, ...w], S = await cx(e, v), A = [];
      let T = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = dx(o, r, g);
        A.push(S[R], S[q]);
      }
      if (T = [...T, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var b;
        const R = (((b = s.flip) == null ? void 0 : b.index) || 0) + 1, q = $[R];
        if (q)
          return {
            data: {
              index: R,
              overflows: T
            },
            reset: {
              placement: q
            }
          };
        let j = "bottom";
        switch (u) {
          case "bestFit": {
            var x;
            const N = (x = T.map((C) => [C, C.overflows.filter((k) => k > 0).reduce((k, D) => k + D, 0)]).sort((C, k) => C[1] - k[1])[0]) == null ? void 0 : x[0].placement;
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
async function bx(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = $o(n), c = Li(n), _ = Gc(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const wx = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await bx(e, t);
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
function _n(t) {
  return sy(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Ui;
function iy() {
  if (Ui)
    return Ui;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Ui = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Ui) : navigator.userAgent;
}
function Me(t) {
  return t instanceof Kt(t).HTMLElement;
}
function re(t) {
  return t instanceof Kt(t).Element;
}
function sy(t) {
  return t instanceof Kt(t).Node;
}
function Zf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Kt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Xc(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = me(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function $x(t) {
  return ["table", "td", "th"].includes(_n(t));
}
function T_(t) {
  const e = /firefox/i.test(iy()), n = me(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function ly() {
  return !/^((?!chrome|android).)*safari/i.test(iy());
}
function A_(t) {
  return ["html", "body", "#document"].includes(_n(t));
}
const Qf = Math.min, ur = Math.max, ol = Math.round;
function cy(t) {
  const e = me(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = ol(n) !== s || ol(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function ay(t) {
  return re(t) ? t : t.contextElement;
}
const _y = {
  x: 1,
  y: 1
};
function Fn(t) {
  const e = ay(t);
  if (!Me(e))
    return _y;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = cy(e);
  let l = (r ? ol(n.width) : n.width) / o, c = (r ? ol(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Rn(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = ay(t);
  let _ = _y;
  e && (o ? re(o) && (_ = Fn(o)) : _ = Fn(t));
  const h = c ? Kt(c) : window, i = !ly() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const v = Kt(c), p = o && re(o) ? Kt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = Fn(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
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
function mn(t) {
  return ((sy(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Jc(t) {
  return re(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function uy(t) {
  return Rn(mn(t)).left + Jc(t).scrollLeft;
}
function kx(t, e, n) {
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
    if ((_n(e) !== "body" || Xc(s)) && (l = Jc(e)), Me(e)) {
      const _ = Rn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = uy(s));
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
    (Zf(t) ? t.host : null) || // Fallback
    mn(t)
  );
  return Zf(e) ? e.host : e;
}
function th(t) {
  return !Me(t) || me(t).position === "fixed" ? null : t.offsetParent;
}
function xx(t) {
  let e = Fr(t);
  for (; Me(e) && !A_(e); ) {
    if (T_(e))
      return e;
    e = Fr(e);
  }
  return null;
}
function eh(t) {
  const e = Kt(t);
  let n = th(t);
  for (; n && $x(n) && me(n).position === "static"; )
    n = th(n);
  return n && (_n(n) === "html" || _n(n) === "body" && me(n).position === "static" && !T_(n)) ? e : n || xx(t) || e;
}
function Sx(t) {
  return cy(t);
}
function Cx(t) {
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
  if ((s || !s && o !== "fixed") && ((_n(n) !== "body" || Xc(r)) && (l = Jc(n)), Me(n))) {
    const h = Rn(n);
    c = Fn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Ex(t, e) {
  const n = Kt(t), o = mn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = ly();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Tx(t) {
  var e;
  const n = mn(t), o = Jc(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = ur(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = ur(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + uy(t);
  const _ = -o.scrollTop;
  return me(s || n).direction === "rtl" && (c += ur(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function fy(t) {
  const e = Fr(t);
  return A_(e) ? t.ownerDocument.body : Me(e) && Xc(e) ? e : fy(e);
}
function fr(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = fy(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Kt(o);
  return s ? e.concat(r, r.visualViewport || [], Xc(o) ? o : []) : e.concat(o, fr(o));
}
function Ax(t, e) {
  const n = Rn(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Me(t) ? Fn(t) : {
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
function nh(t, e, n) {
  return e === "viewport" ? el(Ex(t, n)) : re(e) ? Ax(e, n) : el(Tx(mn(t)));
}
function Lx(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = fr(t).filter((c) => re(c) && _n(c) !== "body"), s = null;
  const r = me(t).position === "fixed";
  let l = r ? Fr(t) : t;
  for (; re(l) && !A_(l); ) {
    const c = me(l), _ = T_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Fr(l);
  }
  return e.set(t, o), o;
}
function Mx(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? Lx(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = nh(e, i, s);
    return h.top = ur(d.top, h.top), h.right = Qf(d.right, h.right), h.bottom = Qf(d.bottom, h.bottom), h.left = ur(d.left, h.left), h;
  }, nh(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Rx = {
  getClippingRect: Mx,
  convertOffsetParentRelativeRectToViewportRelativeRect: Cx,
  isElement: re,
  getDimensions: Sx,
  getOffsetParent: eh,
  getDocumentElement: mn,
  getScale: Fn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || eh, r = this.getDimensions;
    return {
      reference: kx(e, await s(n), o),
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
function Nx(t, e, n, o) {
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
const Dx = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: Rx,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return sx(t, e, {
    ...s,
    platform: r
  });
};
var lo, co, ao, Sn, Rt, Kl, pi, mi, Pa, Zl, hy, Ql, dy, tc, py, ec, my, nc, gy, oc, yy, rc, vy, _o, ic, by;
const vn = class extends ie {
  constructor() {
    super(...arguments);
    E(this, mi);
    E(this, Zl);
    E(this, Ql);
    E(this, tc);
    E(this, ec);
    E(this, nc);
    E(this, oc);
    E(this, rc);
    E(this, ic);
    E(this, lo, !1);
    E(this, co, void 0);
    E(this, ao, 0);
    E(this, Sn, void 0);
    E(this, Rt, void 0);
    E(this, Kl, void 0);
    E(this, pi, void 0);
    M(this, "hideLater", () => {
      y(this, _o).call(this), H(this, ao, window.setTimeout(this.hide.bind(this), 100));
    });
    E(this, _o, () => {
      clearTimeout(y(this, ao)), H(this, ao, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, Sn)) == null ? void 0 : n.classList.contains(vn.CLASS_SHOW);
  }
  get tooltip() {
    return y(this, Sn) || W(this, Ql, dy).call(this);
  }
  get trigger() {
    return y(this, Kl) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${vn.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !y(this, lo) && this.isHover && W(this, ic, by).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(vn.CLASS_SHOW), W(this, oc, yy).call(this), !0;
  }
  hide() {
    var n, o;
    return (n = y(this, pi)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, Sn)) == null || o.classList.remove(vn.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    y(this, lo) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", y(this, _o)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, s = this.getAll().entries(), r = new Set(o || []);
    for (const [l, c] of s)
      r.has(l) || c.hide();
  }
};
let Yt = vn;
lo = new WeakMap(), co = new WeakMap(), ao = new WeakMap(), Sn = new WeakMap(), Rt = new WeakMap(), Kl = new WeakMap(), pi = new WeakMap(), mi = new WeakSet(), Pa = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Zl = new WeakSet(), hy = function() {
  const n = W(this, mi, Pa).call(this);
  return H(this, Rt, document.createElement("div")), y(this, Rt).style.position = this.options.strategy, y(this, Rt).style.width = `${n}px`, y(this, Rt).style.height = `${n}px`, y(this, Rt).style.transform = "rotate(45deg)", y(this, Rt);
}, Ql = new WeakSet(), dy = function() {
  var s;
  const n = vn.TOOLTIP_CLASS;
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
  if (this.options.arrow && (o == null || o.append(W(this, Zl, hy).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, Sn, o), o;
}, tc = new WeakSet(), py = function() {
  var l;
  const n = W(this, mi, Pa).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [wx(n), vx()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && y(this, Rt) && ((l = r.middleware) == null || l.push(fx({ element: y(this, Rt) }))), r;
}, ec = new WeakSet(), my = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, nc = new WeakSet(), gy = function(n) {
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
}, oc = new WeakSet(), yy = function() {
  const n = W(this, tc, py).call(this), o = W(this, rc, vy).call(this);
  H(this, pi, Nx(o, this.tooltip, () => {
    Dx(o, this.tooltip, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.tooltip.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, ec, my).call(this, _);
      if (l.arrow && y(this, Rt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(y(this, Rt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Rt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, nc, gy).call(this, _)
        });
      }
    });
  }));
}, rc = new WeakSet(), vy = function() {
  return y(this, co) || H(this, co, {
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
  }), y(this, co);
}, _o = new WeakMap(), ic = new WeakSet(), by = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", y(this, _o)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, lo, !0);
}, M(Yt, "NAME", "tooltip"), M(Yt, "TOOLTIP_CLASS", "tooltip"), M(Yt, "CLASS_SHOW", "show"), M(Yt, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), M(Yt, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Yt.MENU_SELECTOR);
  if (n) {
    const o = Yt.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Yt.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(Yt.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Yt.ensure(n);
  o.isHover && o.show();
});
var wy, vt, $y, hr, oh, ky = {}, xy = [], Px = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function en(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Sy(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function aa(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++$y };
  return s == null && vt.vnode != null && vt.vnode(r), r;
}
function L_(t) {
  return t.children;
}
function dr(t, e) {
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
function Cy(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Cy(t);
  }
}
function rh(t) {
  (!t.__d && (t.__d = !0) && hr.push(t) && !rl.__r++ || oh !== vt.debounceRendering) && ((oh = vt.debounceRendering) || setTimeout)(rl);
}
function rl() {
  for (var t; rl.__r = hr.length; )
    t = hr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), hr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = en({}, r)).__v = r.__v + 1, Ly(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Br(r), r.__h), Hx(o, r), r.__e != l && Cy(r)));
    });
}
function Ey(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || xy, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? aa(null, a, null, null, a) : Array.isArray(a) ? aa(L_, { children: a }, null, null, null) : a.__b > 0 ? aa(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Ly(t, a, u = u || ky, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Ty(a, _, t) : _ = Ay(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Br(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Ry(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      My(p[i], p[++i], p[++i]);
}
function Ty(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Ty(o, e, n) : Ay(n, o, o, s, o.__e, e));
  return e;
}
function Ay(t, e, n, o, s, r) {
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
function Ox(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || il(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || il(t, r, e[r], n[r], o);
}
function ih(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Px.test(e) ? n : n + "px";
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
            n && e in n || ih(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || ih(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? lh : sh, r) : t.removeEventListener(e, r ? lh : sh, r);
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
function sh(t) {
  this.l[t.type + !1](vt.event ? vt.event(t) : t);
}
function lh(t) {
  this.l[t.type + !0](vt.event ? vt.event(t) : t);
}
function Ly(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = vt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new dr(p, g), i.constructor = b, i.render = Ix), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = en({}, i.__s)), en(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = en(en({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === L_ && h.key == null ? h.props.children : h, Ey(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Wx(n.__e, e, n, o, s, r, l, _);
    (h = vt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), vt.__e(x, e, n);
  }
}
function Hx(t, e) {
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
function Wx(t, e, n, o, s, r, l, c) {
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
    if (r = r && wy.call(t.childNodes), h = (d = n.props || ky).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Ox(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Ey(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Br(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Sy(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && il(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && il(t, "checked", f, d.checked, !1));
  }
  return t;
}
function My(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    vt.__e(o, n);
  }
}
function Ry(t, e, n) {
  var o, s;
  if (vt.unmount && vt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || My(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Ry(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Sy(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Ix(t, e, n) {
  return this.constructor(t, n);
}
wy = xy.slice, vt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, $y = 0, dr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = en({}, this.state), typeof t == "function" && (t = t(en({}, n), this.props)), t && en(n, t), t != null && this.__v && (e && this._sb.push(e), rh(this));
}, dr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), rh(this));
}, dr.prototype.render = L_, hr = [], rl.__r = 0;
var Ux = 0;
function sl(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ux, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return vt.vnode && vt.vnode(_), _;
}
function Fx({
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
  d ? a = d(t, c) : l ? a = /* @__PURE__ */ sl(l, { ...h }) : a = c;
  const { left: f, top: v, width: p, height: m } = o;
  return /* @__PURE__ */ sl("div", { style: { width: p, height: m, left: f + s, top: v + r, ...n }, ...u, children: [
    a,
    i
  ] });
}
function Bx(t, e, n = 0, o = 0) {
  const s = t.left + n, r = t.top + o;
  return !(s > e.left + e.width || r > e.top + e.height || s + t.width < e.left || r + t.height < e.top);
}
let jx = class extends dr {
  render() {
    const { width: e, height: n, cells: o, left: s, top: r, visibleBounding: l, onRenderCell: c, style: _, children: h, offsetX: i = 0, offsetY: d = 0, ...u } = this.props, a = l ? o.filter((f) => Bx(f.bounding, l, i, d)) : o;
    return /* @__PURE__ */ sl("div", { style: { width: e, height: n, left: s, top: r, ..._ }, ...u, children: [
      a.map((f) => /* @__PURE__ */ sl(Fx, { offsetX: i, offsetY: d, ...f })),
      h
    ] });
  }
};
class ch extends At {
}
M(ch, "NAME", "virtualgrid"), M(ch, "Component", jx);
var Qt, gi, yi, We, xt, tt, sc, Ny, lc, Dy, vi, Oa, cc, Py, ac, Oy, bi, Ha, _c, Hy, uc, Wy, fc, Iy;
class zx {
  constructor(e, n = {}) {
    E(this, sc);
    E(this, lc);
    E(this, vi);
    E(this, cc);
    E(this, ac);
    E(this, bi);
    E(this, _c);
    E(this, uc);
    E(this, fc);
    E(this, Qt, void 0);
    E(this, gi, void 0);
    E(this, yi, void 0);
    E(this, We, void 0);
    E(this, xt, void 0);
    E(this, tt, new XMLHttpRequest());
    var o, s;
    if (H(this, xt, n), H(this, Qt, e instanceof HTMLFormElement ? e : document.querySelector(e)), !(y(this, Qt) instanceof HTMLFormElement))
      throw new Error("Param form must be a HTMLFormElement.");
    if (H(this, yi, (this.formEl.method ?? n.method ?? "POST").toUpperCase()), !["GET", "POST"].includes(this.method))
      throw new Error('Method must be "GET" or "POST"!');
    if (this.method === "GET" && (y(this, xt).formType = "AJAX"), H(this, gi, y(this, Qt).action ?? n.url ?? ""), !this.url)
      throw new Error("Form action is required!");
    (o = this.formEl.querySelector("[data-type=submit]")) == null || o.addEventListener("click", () => {
      this.submit();
    }), (s = this.formEl.querySelector("[data-type=reset]")) == null || s.addEventListener("click", () => {
      this.reset();
    });
  }
  get responseType() {
    return y(this, xt).responseType ?? "json";
  }
  get formType() {
    return y(this, xt).formType ?? "AJAX";
  }
  get url() {
    return y(this, gi);
  }
  get method() {
    return y(this, yi);
  }
  get formEl() {
    return y(this, Qt);
  }
  get onLoad() {
    return y(this, xt).onLoad;
  }
  get onError() {
    return y(this, xt).onError;
  }
  get onLoadend() {
    return y(this, xt).onLoadend;
  }
  get onLoadstart() {
    return y(this, xt).onLoadstart;
  }
  get onProgress() {
    return y(this, xt).onProgress;
  }
  get onAbort() {
    return y(this, xt).onAbort;
  }
  get onTimeout() {
    return y(this, xt).onTimeout;
  }
  get beforeSubmit() {
    return y(this, xt).beforeSubmit;
  }
  get generateGetURL() {
    return y(this, xt).generateGetURL;
  }
  get formData() {
    return y(this, We);
  }
  get headers() {
    return y(this, xt).headers;
  }
  get rules() {
    return y(this, xt).rules;
  }
  get timeout() {
    return y(this, xt).timeout;
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
    W(this, ac, Oy).call(this), W(this, cc, Py).call(this) && (this.beforeSubmit && !this.beforeSubmit(this.formData) || (this.method === "POST" ? W(this, fc, Iy).call(this) : W(this, uc, Wy).call(this)));
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
    y(this, Qt).reset(), W(this, vi, Oa).call(this);
  }
}
Qt = new WeakMap(), gi = new WeakMap(), yi = new WeakMap(), We = new WeakMap(), xt = new WeakMap(), tt = new WeakMap(), sc = new WeakSet(), Ny = function(e, n) {
  const o = e.closest(".form-group");
  if (!o) {
    console.warn("Form element should be in .form-group!");
    return;
  }
  o.querySelectorAll(".form-tip").forEach((r) => r.remove());
  const s = document.createElement("div");
  s.innerText = n, s.classList.add("form-tip"), o.classList.add("has-error"), o.append(s);
}, lc = new WeakSet(), Dy = function(e) {
  const n = e.closest(".form-group");
  if (!n) {
    console.warn("Form element should be in .form-group!");
    return;
  }
  n.classList.remove("has-error"), n.querySelectorAll(".form-tip").forEach((o) => o.remove());
}, vi = new WeakSet(), Oa = function() {
  y(this, Qt).querySelectorAll("[name]").forEach((n) => {
    W(this, lc, Dy).call(this, n);
  });
}, cc = new WeakSet(), Py = function() {
  if (!this.rules || !Object.keys(this.rules).length)
    return !0;
  W(this, vi, Oa).call(this);
  let e = !0;
  return y(this, Qt).querySelectorAll("[name]:not(.disabled)").forEach((n) => {
    const { name: o, value: s } = n, r = this.rules[o];
    if (!r)
      return;
    const l = (c) => "required" in c && c.required && !s || "regexp" in c && c.regexp && !c.regexp.test(s) || "validate" in c && c.validate && !c.validate(s) ? (W(this, sc, Ny).call(this, n, c.errMsg), e = !1) : !0;
    if (Array.isArray(r)) {
      for (const c of r)
        if (!l(c))
          break;
      return;
    }
    l(r);
  }), e;
}, ac = new WeakSet(), Oy = function() {
  const e = [...y(this, Qt).querySelectorAll("[name]:not(.disabled)")].filter((n) => !(n.tagName.toLowerCase() === "input" && (n.type.toLowerCase() === "radio" || n.type.toLowerCase() === "checkbox") && !n.checked));
  if (this.formType === "AJAX") {
    H(this, We, {}), e.forEach(({ name: n, value: o, tagName: s, type: r }) => {
      const l = y(this, We);
      if (s.toLowerCase() === "input" && r.toLowerCase() === "checkbox") {
        l[n] ? l[n].push(o) : l[n] = [o];
        return;
      }
      l[n] = o;
    });
    return;
  }
  H(this, We, new FormData(this.formEl));
}, bi = new WeakSet(), Ha = function() {
  this.headers && Object.entries(this.headers).forEach(([e, n]) => {
    y(this, tt).setRequestHeader(e, n);
  }), y(this, tt).responseType = this.responseType, this.onLoadstart && y(this, tt).addEventListener("loadstart", this.onLoadstart), this.onLoad && y(this, tt).addEventListener("load", this.onLoad), this.onLoadend && y(this, tt).addEventListener("loadend", this.onLoadend), this.onProgress && y(this, tt).addEventListener("progress", this.onProgress), this.onError && y(this, tt).addEventListener("error", this.onError), this.onAbort && y(this, tt).addEventListener("abort", this.onAbort), this.onTimeout && y(this, tt).addEventListener("timeout", this.onTimeout);
}, _c = new WeakSet(), Hy = function(e) {
  return Object.entries(e).map(([n, o]) => `${encodeURIComponent(n)}=${encodeURIComponent(o)}`).join("&");
}, uc = new WeakSet(), Wy = function() {
  const e = this.generateGetURL ? this.generateGetURL(this.url, this.formData) : `${this.url}?${W(this, _c, Hy).call(this, y(this, We))}`;
  y(this, tt).open("GET", e), W(this, bi, Ha).call(this), y(this, tt).send();
}, fc = new WeakSet(), Iy = function() {
  y(this, tt).open("POST", this.url), W(this, bi, Ha).call(this);
  const e = this.formType === "AJAX" ? JSON.stringify(this.formData) : this.formData;
  y(this, tt).send(e);
}, M(zx, "NAME", "zui.ajaxForm");
var M_, bt, Uy, Fy, pr, ah, By = {}, jy = [], Vx = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function nn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function zy(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function R_(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? M_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ss(t, l, o, s, null);
}
function ss(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Uy };
  return s == null && bt.vnode != null && bt.vnode(r), r;
}
function Yx() {
  return { current: null };
}
function N_(t) {
  return t.children;
}
function mr(t, e) {
  this.props = t, this.context = e;
}
function jr(t, e) {
  if (e == null)
    return t.__ ? jr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? jr(t) : null;
}
function Vy(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Vy(t);
  }
}
function _h(t) {
  (!t.__d && (t.__d = !0) && pr.push(t) && !ll.__r++ || ah !== bt.debounceRendering) && ((ah = bt.debounceRendering) || setTimeout)(ll);
}
function ll() {
  for (var t; ll.__r = pr.length; )
    t = pr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), pr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = nn({}, r)).__v = r.__v + 1, Xy(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? jr(r), r.__h), Gx(o, r), r.__e != l && Vy(r)));
    });
}
function Yy(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || jy, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ss(null, a, null, null, a) : Array.isArray(a) ? ss(N_, { children: a }, null, null, null) : a.__b > 0 ? ss(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Xy(t, a, u = u || By, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = qy(a, _, t) : _ = Gy(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = jr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Ky(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Jy(p[i], p[++i], p[++i]);
}
function qy(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? qy(o, e, n) : Gy(n, o, o, s, o.__e, e));
  return e;
}
function Gy(t, e, n, o, s, r) {
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
function qx(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || cl(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || cl(t, r, e[r], n[r], o);
}
function uh(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Vx.test(e) ? n : n + "px";
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
            n && e in n || uh(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || uh(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? hh : fh, r) : t.removeEventListener(e, r ? hh : fh, r);
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
function fh(t) {
  this.l[t.type + !1](bt.event ? bt.event(t) : t);
}
function hh(t) {
  this.l[t.type + !0](bt.event ? bt.event(t) : t);
}
function Xy(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = bt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new mr(p, g), i.constructor = b, i.render = Jx), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = nn({}, i.__s)), nn(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = nn(nn({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === N_ && h.key == null ? h.props.children : h, Yy(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Xx(n.__e, e, n, o, s, r, l, _);
    (h = bt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), bt.__e(x, e, n);
  }
}
function Gx(t, e) {
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
function Xx(t, e, n, o, s, r, l, c) {
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
    if (r = r && M_.call(t.childNodes), h = (d = n.props || By).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (qx(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Yy(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && jr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && zy(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && cl(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && cl(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Jy(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    bt.__e(o, n);
  }
}
function Ky(t, e, n) {
  var o, s;
  if (bt.unmount && bt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Jy(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Ky(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || zy(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Jx(t, e, n) {
  return this.constructor(t, n);
}
M_ = jy.slice, bt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Uy = 0, Fy = function(t) {
  return t != null && t.constructor === void 0;
}, mr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = nn({}, this.state), typeof t == "function" && (t = t(nn({}, n), this.props)), t && nn(n, t), t != null && this.__v && (e && this._sb.push(e), _h(this));
}, mr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), _h(this));
}, mr.prototype.render = N_, pr = [], ll.__r = 0;
var Kx = 0;
function G(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Kx, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return bt.vnode && bt.vnode(_), _;
}
let Zx = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Zy, wt, Qy, gr, dh, tv = {}, ev = [], Qx = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function on(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function nv(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function _a(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Qy };
  return s == null && wt.vnode != null && wt.vnode(r), r;
}
function D_(t) {
  return t.children;
}
function yr(t, e) {
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
function ov(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ov(t);
  }
}
function ph(t) {
  (!t.__d && (t.__d = !0) && gr.push(t) && !al.__r++ || dh !== wt.debounceRendering) && ((dh = wt.debounceRendering) || setTimeout)(al);
}
function al() {
  for (var t; al.__r = gr.length; )
    t = gr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), gr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = on({}, r)).__v = r.__v + 1, lv(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? zr(r), r.__h), eS(o, r), r.__e != l && ov(r)));
    });
}
function rv(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || ev, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? _a(null, a, null, null, a) : Array.isArray(a) ? _a(D_, { children: a }, null, null, null) : a.__b > 0 ? _a(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      lv(t, a, u = u || tv, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = iv(a, _, t) : _ = sv(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = zr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && av(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      cv(p[i], p[++i], p[++i]);
}
function iv(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? iv(o, e, n) : sv(n, o, o, s, o.__e, e));
  return e;
}
function sv(t, e, n, o, s, r) {
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
function tS(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || _l(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || _l(t, r, e[r], n[r], o);
}
function mh(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Qx.test(e) ? n : n + "px";
}
function _l(t, e, n, o, s) {
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
  this.l[t.type + !1](wt.event ? wt.event(t) : t);
}
function yh(t) {
  this.l[t.type + !0](wt.event ? wt.event(t) : t);
}
function lv(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = wt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new yr(p, g), i.constructor = b, i.render = oS), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = on({}, i.__s)), on(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          b.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
            for (i.props = p, i.state = i.__s, e.__v !== n.__v && (i.__d = !1), i.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
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
        i.state = i.__s, i.getChildContext != null && (o = on(on({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === D_ && h.key == null ? h.props.children : h, rv(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = nS(n.__e, e, n, o, s, r, l, _);
    (h = wt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), wt.__e(x, e, n);
  }
}
function eS(t, e) {
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
function nS(t, e, n, o, s, r, l, c) {
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
    if (r = r && Zy.call(t.childNodes), h = (d = n.props || tv).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (tS(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, rv(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && zr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && nv(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && _l(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && _l(t, "checked", f, d.checked, !1));
  }
  return t;
}
function cv(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    wt.__e(o, n);
  }
}
function av(t, e, n) {
  var o, s;
  if (wt.unmount && wt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || cv(o, null, e)), (o = t.__c) != null) {
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
      o[s] && av(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || nv(t.__e), t.__ = t.__e = t.__d = void 0;
}
function oS(t, e, n) {
  return this.constructor(t, n);
}
Zy = ev.slice, wt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Qy = 0, yr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = on({}, this.state), typeof t == "function" && (t = t(on({}, n), this.props)), t && on(n, t), t != null && this.__v && (e && this._sb.push(e), ph(this));
}, yr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ph(this));
}, yr.prototype.render = D_, gr = [], al.__r = 0;
var rS = 0;
function vh(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --rS, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return wt.vnode && wt.vnode(_), _;
}
var Cn, En;
class bh extends yr {
  constructor(n) {
    super(n);
    E(this, Cn, 0);
    E(this, En, null);
    M(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, s = n.target;
      if (!(!s || !o) && (typeof o == "string" && s.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    M(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (y(this, Cn) && cancelAnimationFrame(y(this, Cn)), H(this, Cn, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), H(this, Cn, 0);
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
    n && (H(this, En, typeof n == "string" ? document : n.current), y(this, En).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), y(this, En) && y(this, En).removeEventListener("wheel", this._handleWheel);
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
    return o === "horz" ? (f.height = s, f.width = n, v.width = this.barSize, v.left = Math.round(Math.min(d, u) * (n - v.width) / d)) : (f.width = s, f.height = n, v.height = this.barSize, v.top = Math.round(Math.min(d, u) * (n - v.height) / d)), /* @__PURE__ */ vh(
      "div",
      {
        className: F("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": a
        }),
        style: f,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ vh(
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
Cn = new WeakMap(), En = new WeakMap();
function wh(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function _v({ col: t, className: e, height: n, row: o, onRenderCell: s, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
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
  }], v = ["dtable-cell-content", e], p = [c ?? ((b = o.data) == null ? void 0 : b[t.name]) ?? ""], m = s ? s(p, { row: o, col: t }, R_) : p, g = [], w = [], $ = {}, S = {};
  let A = "div";
  m == null || m.forEach((x) => {
    if (typeof x == "object" && x && !Fy(x) && ("html" in x || "className" in x || "style" in x || "attrs" in x || "children" in x || "tagName" in x)) {
      const R = x.outer ? g : w;
      x.html ? R.push(/* @__PURE__ */ G("div", { className: F("dtable-cell-html", x.className), style: x.style, dangerouslySetInnerHTML: { __html: x.html }, ...x.attrs ?? {} })) : (x.style && Object.assign(x.outer ? i : a, x.style), x.className && (x.outer ? f : v).push(x.className), x.children && R.push(x.children), x.attrs && Object.assign(x.outer ? $ : S, x.attrs)), x.tagName && !x.outer && (A = x.tagName);
    } else
      w.push(x);
  });
  const T = A;
  return /* @__PURE__ */ G(
    "div",
    {
      className: F(f),
      style: i,
      "data-col": t.name,
      ...h,
      ...$,
      children: [
        w.length > 0 && /* @__PURE__ */ G(T, { className: F(v), style: a, ...S, children: w }),
        g
      ]
    }
  );
}
function ua({ row: t, className: e, top: n = 0, left: o = 0, width: s, height: r, cols: l, CellComponent: c = _v, onRenderCell: _ }) {
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
function uv({
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
  CellComponent: u = _v,
  onRenderCell: a,
  style: f,
  ...v
}) {
  let p = null;
  s != null && s.length && (p = /* @__PURE__ */ G(
    ua,
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
    ua,
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
    ua,
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
function iS({ height: t, onRenderRow: e, ...n }) {
  const o = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const s = e({ props: o }, R_);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ G("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ G(uv, { ...o }) });
}
function sS({
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
    }, d = c == null ? void 0 : c({ props: i, row: h }, R_);
    return d && Object.assign(i, d), /* @__PURE__ */ G(uv, { ...i });
  }) });
}
const ul = /* @__PURE__ */ new Map(), fl = [];
function fv(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && ul.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  ul.set(n, t), e != null && e.buildIn && !fl.includes(n) && fl.push(n);
}
function xo(t, e) {
  fv(t, e);
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
function hv(t) {
  return ul.delete(t);
}
function lS(t) {
  if (typeof t == "string") {
    const e = ul.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function dv(t, e, n) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = lS(o);
    s && (n.has(s.name) || ((r = s.plugins) != null && r.length && dv(t, s.plugins, n), t.push(s), n.add(s.name)));
  }), t;
}
function cS(t = [], e = !0) {
  return e && fl.length && t.unshift(...fl), t != null && t.length ? dv([], t, /* @__PURE__ */ new Set()) : [];
}
function $h() {
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
var Bi, Tn, uo, Ie, ae, Ue, Et, te, _e, fo, wi, $i, Se, ho, po, hc, pv, dc, mv, pc, gv, mc, yv, ki, Wa, gc, yc, xi, Si, vc, bc, wc, vv, $c, bv, kc, wv;
let aS = (Bi = class extends mr {
  constructor(n) {
    super(n);
    E(this, hc);
    E(this, dc);
    E(this, pc);
    E(this, mc);
    E(this, ki);
    E(this, wc);
    E(this, $c);
    E(this, kc);
    M(this, "ref", Yx());
    E(this, Tn, 0);
    E(this, uo, void 0);
    E(this, Ie, !1);
    E(this, ae, void 0);
    E(this, Ue, void 0);
    E(this, Et, []);
    E(this, te, void 0);
    E(this, _e, /* @__PURE__ */ new Map());
    E(this, fo, {});
    E(this, wi, void 0);
    E(this, $i, []);
    M(this, "updateLayout", () => {
      y(this, Tn) && cancelAnimationFrame(y(this, Tn)), H(this, Tn, requestAnimationFrame(() => {
        H(this, te, void 0), this.forceUpdate(), H(this, Tn, 0);
      }));
    });
    E(this, Se, (n, o) => {
      o = o || n.type;
      const s = y(this, _e).get(o);
      if (s != null && s.length) {
        for (const r of s)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    E(this, ho, (n) => {
      y(this, Se).call(this, n, `window_${n.type}`);
    });
    E(this, po, (n) => {
      y(this, Se).call(this, n, `document_${n.type}`);
    });
    E(this, gc, (n, o) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, n, o);
        s && Object.assign(n.props, s);
      }
      return y(this, Et).forEach((s) => {
        if (s.onRenderRow) {
          const r = s.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    E(this, yc, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), y(this, Et).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    E(this, xi, (n, o, s) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, s)), this.options[c] && (n = this.options[c].call(this, n, o, s)), y(this, Et).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, s));
      }), n;
    });
    E(this, Si, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    E(this, vc, (n) => {
      var c, _, h, i, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: s, colName: r, cellElement: l } = o;
      if (s === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), y(this, Et).forEach((u) => {
          var a;
          (a = u.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: u } = o, a = this.layout.visibleRows.find((f) => f.id === s);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: s, rowInfo: a, element: l, rowElement: u })) === !0)
            return;
          for (const f of y(this, Et))
            if (((h = f.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: s, rowInfo: a, element: l, rowElement: u })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: a, element: u })) === !0)
          return;
        for (const f of y(this, Et))
          if (((d = f.onRowClick) == null ? void 0 : d.call(this, n, { rowID: s, rowInfo: a, element: u })) === !0)
            return;
      }
    });
    E(this, bc, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, uo, n.id ?? `dtable-${Zx(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, Ue, Object.freeze(cS(n.plugins))), y(this, Ue).forEach((o) => {
      var c;
      const { methods: s, data: r, state: l } = o;
      s && Object.entries(s).forEach(([_, h]) => {
        typeof h == "function" && Object.assign(this, { [_]: h.bind(this) });
      }), r && Object.assign(y(this, fo), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = y(this, te)) == null ? void 0 : n.options) || y(this, ae) || $h();
  }
  get plugins() {
    return y(this, Et);
  }
  get layout() {
    return y(this, te);
  }
  get id() {
    return y(this, uo);
  }
  get data() {
    return y(this, fo);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, ae, void 0);
  }
  componentDidMount() {
    if (y(this, Ie) ? this.forceUpdate() : W(this, ki, Wa).call(this), y(this, Et).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", y(this, vc)), this.on("keydown", y(this, bc)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, wi, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    y(this, Et).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    y(this, Ie) ? W(this, ki, Wa).call(this) : y(this, Et).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = y(this, wi)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of y(this, _e).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), y(this, ho)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), y(this, po)) : n.removeEventListener(s, y(this, Se));
    y(this, Et).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), y(this, Ue).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), H(this, fo, {}), y(this, _e).clear();
  }
  on(n, o, s) {
    var l;
    s && (n = `${s}_${n}`);
    const r = y(this, _e).get(n);
    r ? r.push(o) : (y(this, _e).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), y(this, ho)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), y(this, po)) : (l = this.ref.current) == null || l.addEventListener(n, y(this, Se)));
  }
  off(n, o, s) {
    var c;
    s && (n = `${s}_${n}`);
    const r = y(this, _e).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (y(this, _e).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), y(this, ho)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), y(this, po)) : (c = this.ref.current) == null || c.removeEventListener(n, y(this, Se)));
  }
  emitCustomEvent(n, o) {
    y(this, Se).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
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
    if (!y(this, ae))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: s, state: r } = n;
    if (s === "layout")
      H(this, te, void 0);
    else if (s === "options") {
      if (H(this, ae, void 0), !y(this, te))
        return;
      H(this, te, void 0);
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
    return Ci(y(this, $i), n, o, s, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = W(this, kc, wv).call(this), { className: o, rowHover: s, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], u = [];
    return n && y(this, Et).forEach((a) => {
      var v;
      const f = (v = a.onRender) == null ? void 0 : v.call(this, n);
      f && (f.style && Object.assign(i, f.style), f.className && d.push(f.className), f.children && u.push(f.children));
    }), /* @__PURE__ */ G(
      "div",
      {
        id: y(this, uo),
        className: F(d),
        style: i,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && W(this, hc, pv).call(this, n),
          n && W(this, dc, mv).call(this, n),
          n && W(this, pc, gv).call(this, n),
          n && W(this, mc, yv).call(this, n)
        ]
      }
    );
  }
}, Tn = new WeakMap(), uo = new WeakMap(), Ie = new WeakMap(), ae = new WeakMap(), Ue = new WeakMap(), Et = new WeakMap(), te = new WeakMap(), _e = new WeakMap(), fo = new WeakMap(), wi = new WeakMap(), $i = new WeakMap(), Se = new WeakMap(), ho = new WeakMap(), po = new WeakMap(), hc = new WeakSet(), pv = function(n) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ G(
      iS,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: y(this, xi),
        onRenderRow: y(this, yc),
        ...s
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ G(
    ya,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, dc = new WeakSet(), mv = function(n) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ G(
    sS,
    {
      top: o,
      height: s,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: h,
      onRenderCell: y(this, xi),
      onRenderRow: y(this, gc),
      ...c
    }
  );
}, pc = new WeakSet(), gv = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const s = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ G(
    ya,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: s,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, mc = new WeakSet(), yv = function(n) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: i, scrollWidth: d } = r, { scrollbarSize: u = 12, horzScrollbarPos: a } = this.options;
  return i > d && o.push(
    /* @__PURE__ */ G(
      bh,
      {
        type: "horz",
        scrollPos: s,
        scrollSize: i,
        clientSize: d,
        onScroll: y(this, Si),
        left: r.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -u) + h,
        size: u,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > c && o.push(
    /* @__PURE__ */ G(
      bh,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: c,
        onScroll: y(this, Si),
        right: 0,
        size: u,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, ki = new WeakSet(), Wa = function() {
  var n;
  H(this, Ie, !1), (n = this.options.afterRender) == null || n.call(this), y(this, Et).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, gc = new WeakMap(), yc = new WeakMap(), xi = new WeakMap(), Si = new WeakMap(), vc = new WeakMap(), bc = new WeakMap(), wc = new WeakSet(), vv = function() {
  if (y(this, ae))
    return !1;
  const o = { ...$h(), ...y(this, Ue).reduce((s, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(s, l), s;
  }, {}), ...this.props };
  return H(this, ae, o), H(this, Et, y(this, Ue).reduce((s, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (s.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), s;
  }, [])), H(this, $i, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, $c = new WeakSet(), bv = function() {
  var K, kt;
  const { plugins: n } = this;
  let o = y(this, ae);
  const s = {
    flex: /* @__PURE__ */ G("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ G("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((B) => {
    var $t;
    const Z = ($t = B.beforeLayout) == null ? void 0 : $t.call(this, o);
    Z && (o = { ...o, ...Z }), Object.assign(s, B.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], i = [], d = {}, u = [], a = [];
  let f = 0, v = 0, p = 0;
  o.cols.forEach((B) => {
    if (B.hidden)
      return;
    const {
      name: Z,
      type: $t = "",
      fixed: ct = !1,
      flex: X = !1,
      width: at = r,
      minWidth: Pt = l,
      maxWidth: Ot = c,
      ...Tv
    } = B, et = {
      name: Z,
      type: $t,
      setting: {
        name: Z,
        type: $t,
        fixed: ct,
        flex: X,
        width: at,
        minWidth: Pt,
        maxWidth: Ot,
        ...Tv
      },
      flex: ct ? 0 : X === !0 ? 1 : typeof X == "number" ? X : 0,
      left: 0,
      width: wh(at, Pt, Ot),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((W_) => {
      var I_, U_;
      const Mi = (I_ = W_.colTypes) == null ? void 0 : I_[$t];
      if (Mi) {
        const F_ = typeof Mi == "function" ? Mi(et) : Mi;
        F_ && Object.assign(et.setting, F_);
      }
      (U_ = W_.onAddCol) == null || U_.call(this, et);
    }), et.width = wh(et.setting.width ?? et.width, et.setting.minWidth ?? Pt, et.setting.maxWidth ?? Ot), et.realWidth = et.realWidth || et.width, ct === "left" ? (et.left = f, f += et.width, _.push(et)) : ct === "right" ? (et.left = v, v += et.width, h.push(et)) : (et.left = p, p += et.width, i.push(et)), et.flex && a.push(et), u.push(et), d[et.name] = et;
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
      g = 0, H(this, Ie, !0);
      return;
    }
  } else
    g = m ?? 0;
  const { data: $, rowKey: S = "id", rowHeight: A } = o, T = [], b = (B, Z, $t) => {
    var X, at;
    const ct = { data: $t ?? { [S]: B }, id: B, index: T.length, top: 0 };
    if ($t || (ct.lazy = !0), T.push(ct), ((X = o.onAddRow) == null ? void 0 : X.call(this, ct, Z)) !== !1) {
      for (const Pt of n)
        if (((at = Pt.onAddRow) == null ? void 0 : at.call(this, ct, Z)) === !1)
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
  let x = T;
  const R = {};
  if (o.onAddRows) {
    const B = o.onAddRows.call(this, x);
    B && (x = B);
  }
  for (const B of n) {
    const Z = (K = B.onAddRows) == null ? void 0 : K.call(this, x);
    Z && (x = Z);
  }
  x.forEach((B, Z) => {
    R[B.id] = B, B.index = Z, B.top = B.index * A;
  });
  const { header: q, footer: j } = o, N = q ? o.headerHeight || A : 0, C = j ? o.footerHeight || A : 0;
  let k = o.height, D = 0;
  const L = x.length * A, O = N + C + L;
  if (typeof k == "function" && (k = k.call(this, O)), k === "auto")
    D = O;
  else if (typeof k == "object")
    D = Math.min(k.max, Math.max(k.min, O));
  else if (k === "100%") {
    const { parent: B } = this;
    if (B)
      D = B.clientHeight;
    else {
      D = 0, H(this, Ie, !0);
      return;
    }
  } else
    D = k;
  const P = D - N - C, U = g - f - v, V = {
    options: o,
    allRows: T,
    width: g,
    height: D,
    rows: x,
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
      scrollWidth: U,
      scrollColsWidth: p,
      fixedRightWidth: v
    }
  }, z = (kt = o.onLayout) == null ? void 0 : kt.call(this, V);
  z && Object.assign(V, z), n.forEach((B) => {
    if (B.onLayout) {
      const Z = B.onLayout.call(this, V);
      Z && Object.assign(V, Z);
    }
  }), H(this, te, V);
}, kc = new WeakSet(), wv = function() {
  (W(this, wc, vv).call(this) || !y(this, te)) && W(this, $c, bv).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: c } } = n;
  if (s.length) {
    const w = l - c;
    if (w > 0) {
      const $ = s.reduce((A, T) => A + T.flex, 0);
      let S = 0;
      s.forEach((A) => {
        const T = Math.min(w - S, Math.ceil(w * (A.flex / $)));
        A.realWidth = T + A.width, S += A.realWidth;
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
}, M(Bi, "addPlugin", fv), M(Bi, "removePlugin", hv), Bi);
function kh(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((s) => s.classList.add(o));
}
const _S = {
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
      kh(this, o);
    },
    mouseleave() {
      kh(this, !1);
    }
  }
}, uS = xo(_S, { buildIn: !0 });
function fS(t, e) {
  var l, c;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (_, h) => {
    s && !s.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !$v.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
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
function hS(t) {
  return this.state.checkedRows[t] ?? !1;
}
function $v() {
  var n, o;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, r) => s + (e.call(this, r.id) ? 1 : 0), 0)) : t === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function dS() {
  return Object.keys(this.state.checkedRows);
}
const pS = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: fS,
    isRowChecked: hS,
    isAllRowChecked: $v,
    getChecks: dS
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
}, mS = xo(pS);
var kv = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(kv || {});
function Ia(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, o = e.children && n && n[t];
  let s = !1, { parent: r } = e;
  for (; r; ) {
    const l = Ia.call(this, r);
    if (l.state !== "expanded") {
      s = !0;
      break;
    }
    r = l.parent;
  }
  return e.state = s ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Ia.call(this, e.parent).level + 1 : 0, e;
}
function gS(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !xv.call(this)), e) {
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
function xv() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function Sv(t, e = 0, n, o = 0) {
  var s;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const l = t.get(r);
    l && (l.level === o && (l.order = e++), (s = l.children) != null && s.length && (e = Sv(t, e, l.children, o + 1)));
  }
  return e;
}
function Cv(t, e, n, o) {
  const s = t.getNestedRowInfo(e);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = n, Cv(t, r, n, o);
  }), s;
}
function Ev(t, e, n, o, s) {
  var c;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : s[_]);
    return n === h;
  })) && (o[e] = n), r.parent && Ev(t, r.parent, n, o, s);
}
const yS = {
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
        const l = Cv(this, s, r, o);
        l != null && l.parent && Ev(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: gS,
    isAllCollapsed: xv,
    getNestedRowInfo: Ia
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
    ), Sv(this.data.nestedMap), t.sort((e, n) => {
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
}, vS = xo(yS);
const bS = {
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
        return typeof o == "function" ? t[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? t[0] = La(r, o) : s === "html" ? t[0] = { html: It(o, r) } : t[0] = It(o, r), t;
      }
    }
  }
}, wS = xo(bS, { buildIn: !0 }), $S = {
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
}, kS = xo($S, { buildIn: !0 }), xS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: kv,
  checkable: mS,
  colHover: uS,
  nested: vS,
  rich: wS,
  sortType: kS
}, Symbol.toStringTag, { value: "Module" }));
class Co extends At {
}
M(Co, "NAME", "dtable"), M(Co, "Component", aS), M(Co, "definePlugin", xo), M(Co, "removePlugin", hv), M(Co, "plugins", xS);
var jt;
class No extends ie {
  constructor() {
    super(...arguments);
    E(this, jt, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, jt, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), y(this, jt) && (this.addActive(y(this, jt).parentElement, y(this, jt)), y(this, jt).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, jt, document.querySelector(n)), y(this, jt) && (this.addActive(y(this, jt).parentElement, y(this, jt)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
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
jt = new WeakMap(), M(No, "NAME", "NavTabs"), M(No, "NAV_CLASS", "nav-tabs"), M(No, "EVENTS", !0), M(No, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (t) => {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new No(t.target).showTarget());
});
export {
  tu as ActionMenu,
  nu as ActionMenuNested,
  zx as AjaxForm,
  _f as Avatar,
  uf as BtnGroup,
  cu as Button,
  Wt as ContextMenu,
  Co as DTable,
  zt as Datepicker,
  Nt as Dropdown,
  Fa as EventBus,
  au as Menu,
  Ni as Messager,
  Ht as Modal,
  ir as ModalTrigger,
  Tf as Nav,
  No as NavTabs,
  Mf as Pager,
  Wf as Picker,
  Bu as ProgressCircle,
  Gu as Switch,
  be as TIME_DAY,
  Vt as Timepicker,
  Jf as Toolbar,
  Yt as Tooltip,
  ch as VirtualGrid,
  jv as addI18nMap,
  WS as browser,
  Lf as calculateTimestamp,
  ES as convertBytes,
  Ft as createDate,
  CS as formatBytes,
  La as formatDate,
  YS as formatDateSpan,
  It as formatString,
  Fv as getLangCode,
  qS as getTimeBeforeDesc,
  Ci as i18n,
  VS as isDBY,
  Zc as isObject,
  Ti as isSameDay,
  nk as isSameMonth,
  FS as isSameWeek,
  Af as isSameYear,
  BS as isToday,
  zS as isTomorrow,
  jS as isYesterday,
  ga as mergeDeep,
  ma as nativeEvents,
  Bv as setLangCode,
  Hw as store
};
