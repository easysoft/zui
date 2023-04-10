var Fv = Object.defineProperty;
var Bv = (t, e, n) => e in t ? Fv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var L = (t, e, n) => (Bv(t, typeof e != "symbol" ? e + "" : e, n), n), qc = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var b = (t, e, n) => (qc(t, e, "read from private field"), n ? n.call(t) : e.get(t)), T = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, H = (t, e, n, o) => (qc(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n), I_ = (t, e, n, o) => ({
  set _(s) {
    H(t, e, s, n);
  },
  get _() {
    return b(t, e, o);
  }
}), I = (t, e, n) => (qc(t, e, "access private method"), n);
var wc, nt, Eh, Ah, No, U_, ls = {}, Th = [], jv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ie(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Mh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Lh(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? wc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ji(t, l, o, s, null);
}
function ji(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Eh };
  return s == null && nt.vnode != null && nt.vnode(r), r;
}
function zv() {
  return { current: null };
}
function $c(t) {
  return t.children;
}
function zi(t, e) {
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
function Nh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Nh(t);
  }
}
function F_(t) {
  (!t.__d && (t.__d = !0) && No.push(t) && !cs.__r++ || U_ !== nt.debounceRendering) && ((U_ = nt.debounceRendering) || setTimeout)(cs);
}
function cs() {
  for (var t; cs.__r = No.length; )
    t = No.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), No = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ie({}, r)).__v = r.__v + 1, Oa(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? wr(r), r.__h), Oh(o, r), r.__e != l && Nh(r)));
    });
}
function Rh(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || Th, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ji(null, a, null, null, a) : Array.isArray(a) ? ji($c, { children: a }, null, null, null) : a.__b > 0 ? ji(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Oa(t, a, u = u || ls, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Dh(a, _, t) : _ = Ph(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = wr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Wh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Hh(p[i], p[++i], p[++i]);
}
function Dh(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Dh(o, e, n) : Ph(n, o, o, s, o.__e, e));
  return e;
}
function Ph(t, e, n, o, s, r) {
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
function Vv(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || as(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || as(t, r, e[r], n[r], o);
}
function B_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || jv.test(e) ? n : n + "px";
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
            n && e in n || B_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || B_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? z_ : j_, r) : t.removeEventListener(e, r ? z_ : j_, r);
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
function j_(t) {
  this.l[t.type + !1](nt.event ? nt.event(t) : t);
}
function z_(t) {
  this.l[t.type + !0](nt.event ? nt.event(t) : t);
}
function Oa(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = nt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new zi(p, g), i.constructor = v, i.render = Gv), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ie({}, i.__s)), Ie(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = nt.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ie(Ie({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === $c && h.key == null ? h.props.children : h, Rh(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Yv(n.__e, e, n, o, s, r, l, _);
    (h = nt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), nt.__e(k, e, n);
  }
}
function Oh(t, e) {
  nt.__c && nt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      nt.__e(o, n.__v);
    }
  });
}
function Yv(t, e, n, o, s, r, l, c) {
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
    if (r = r && wc.call(t.childNodes), h = (d = n.props || ls).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Vv(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Rh(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && wr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Mh(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && as(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && as(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Hh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    nt.__e(o, n);
  }
}
function Wh(t, e, n) {
  var o, s;
  if (nt.unmount && nt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Hh(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        nt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Wh(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Mh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Gv(t, e, n) {
  return this.constructor(t, n);
}
function qv(t, e, n) {
  var o, s, r;
  nt.__ && nt.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Oa(e, t = (!o && n || e).__k = Lh($c, null, [t]), s || ls, ls, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? wc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Oh(r, t);
}
wc = Th.slice, nt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Eh = 0, Ah = function(t) {
  return t != null && t.constructor === void 0;
}, zi.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ie({}, this.state), typeof t == "function" && (t = t(Ie({}, n), this.props)), t && Ie(n, t), t != null && this.__v && (e && this._sb.push(e), F_(this));
}, zi.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), F_(this));
}, zi.prototype.render = $c, No = [], cs.__r = 0;
var Xv = 0;
function Ih(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Xv, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return nt.vnode && nt.vnode(_), _;
}
var ve;
class Kv {
  constructor(e = "") {
    T(this, ve, void 0);
    typeof e == "object" ? H(this, ve, e) : H(this, ve, document.appendChild(document.createComment(e)));
  }
  on(e, n, o) {
    b(this, ve).addEventListener(e, n, o);
  }
  once(e, n, o) {
    b(this, ve).addEventListener(e, n, { once: !0, ...o });
  }
  off(e, n, o) {
    b(this, ve).removeEventListener(e, n, o);
  }
  emit(e) {
    return b(this, ve).dispatchEvent(e), e;
  }
}
ve = new WeakMap();
const ha = /* @__PURE__ */ new Set([
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
class Ha extends Kv {
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
    return typeof e == "string" && (ha.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(Ha.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (ha.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
var be, Gr, yn, Eo;
class V_ extends Ha {
  constructor(n = "", o) {
    super(n);
    T(this, yn);
    T(this, be, /* @__PURE__ */ new Map());
    T(this, Gr, void 0);
    H(this, Gr, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, s) {
    n = I(this, yn, Eo).call(this, n), super.on(n, o, s), b(this, be).set(o, [n, s]);
  }
  off(n, o, s) {
    n = I(this, yn, Eo).call(this, n), super.off(n, o, s), b(this, be).delete(o);
  }
  once(n, o, s) {
    n = I(this, yn, Eo).call(this, n);
    const r = (l) => {
      o(l), b(this, be).delete(r);
    };
    super.once(n, r, s), b(this, be).set(r, [n, s]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = I(this, yn, Eo).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(b(this, be).entries()).forEach(([n, [o, s]]) => {
      super.off(o, n, s);
    }), b(this, be).clear();
  }
}
be = new WeakMap(), Gr = new WeakMap(), yn = new WeakSet(), Eo = function(n) {
  const o = b(this, Gr);
  return ha.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Zv(t, e) {
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
function Jv(t, e, n) {
  const o = Zv(t, e), s = o[o.length - 1];
  return s === void 0 ? n : s;
}
function Xc(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function da(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (Xc(t) && Xc(n))
    for (const o in n)
      Xc(n[o]) ? (t[o] || Object.assign(t, { [o]: {} }), da(t[o], n[o])) : Object.assign(t, { [o]: n[o] });
  return da(t, ...e);
}
function Wt(t, ...e) {
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
var Wa = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(Wa || {});
function YS(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / Wa[n]).toFixed(e) + n);
}
const GS = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const o = n[1];
  return t = t.replace(o, ""), Number.parseInt(t, 10) * Wa[o];
};
var Ch;
let Ia = ((Ch = document.documentElement.getAttribute("lang")) == null ? void 0 : Ch.toLowerCase()) ?? "zh_cn", Ne;
function Qv() {
  return Ia;
}
function tb(t) {
  Ia = t.toLowerCase();
}
function eb(t, e) {
  Ne || (Ne = {}), typeof t == "string" && (t = { [t]: e ?? {} }), da(Ne, t);
}
function xi(t, e, n, o, s, r) {
  Array.isArray(t) ? Ne && t.unshift(Ne) : t = Ne ? [Ne, t] : [t], typeof n == "string" && (r = s, s = o, o = n, n = void 0);
  const l = s || Ia;
  let c;
  for (const _ of t) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const i = r && _ === Ne ? `${r}.${e}` : e;
    if (c = Jv(h, i), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? Wt(c, ...Array.isArray(n) ? n : [n]) : c;
}
xi.addLang = eb;
xi.getCode = Qv;
xi.setCode = tb;
function nb(t) {
  return Object.fromEntries(Object.entries(t).map(([e, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [e, n];
  }));
}
const Kc = /* @__PURE__ */ new Map();
var we, Un, Zt;
class oe {
  constructor(e, n) {
    T(this, we, void 0);
    T(this, Un, void 0);
    T(this, Zt, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, this.constructor.EVENTS && H(this, Zt, new V_(e, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, we, { ...this.constructor.DEFAULT }), this.setOptions({ ...e instanceof HTMLElement ? nb(e.dataset) : null, ...n }), this.constructor.all.set(e, this), H(this, Un, e), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return b(this, we);
  }
  get element() {
    return b(this, Un);
  }
  get events() {
    return b(this, Zt);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(e) {
    return e && Object.assign(b(this, we), e), b(this, we);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(b(this, Un)), b(this, Zt) && (this.emit("destroyed", this), b(this, Zt).offAll());
  }
  on(e, n, o) {
    var s;
    (s = b(this, Zt)) == null || s.on(e, n, o);
  }
  once(e, n, o) {
    var s;
    (s = b(this, Zt)) == null || s.once(e, n, o);
  }
  off(e, n, o) {
    var s;
    (s = b(this, Zt)) == null || s.off(e, n, o);
  }
  emit(e, n) {
    var l;
    let o = V_.createEvent(e, n);
    const s = `on${e[0].toUpperCase()}${e.substring(1)}`, r = b(this, we)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = b(this, Zt)) == null ? void 0 : l.emit(e, n), o;
  }
  i18n(e, n, o) {
    return xi(b(this, we).i18n, e, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${e}}`;
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
    if (Kc.has(e))
      return Kc.get(e);
    const n = /* @__PURE__ */ new Map();
    return Kc.set(e, n), n;
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
we = new WeakMap(), Un = new WeakMap(), Zt = new WeakMap(), L(oe, "EVENTS", !1), L(oe, "DEFAULT", {});
class At extends oe {
  constructor() {
    super(...arguments);
    L(this, "ref", zv());
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
    qv(/* @__PURE__ */ Ih(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
L(At, "Component");
var Ua, _t, Uh, Fh, Ro, Y_, Bh = {}, jh = [], ob = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ue(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function zh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function wo(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ua.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Vi(t, l, o, s, null);
}
function Vi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Uh };
  return s == null && _t.vnode != null && _t.vnode(r), r;
}
function rb() {
  return { current: null };
}
function Fa(t) {
  return t.children;
}
function Do(t, e) {
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
function Vh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Vh(t);
  }
}
function G_(t) {
  (!t.__d && (t.__d = !0) && Ro.push(t) && !_s.__r++ || Y_ !== _t.debounceRendering) && ((Y_ = _t.debounceRendering) || setTimeout)(_s);
}
function _s() {
  for (var t; _s.__r = Ro.length; )
    t = Ro.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Ro = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ue({}, r)).__v = r.__v + 1, Xh(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? $r(r), r.__h), sb(o, r), r.__e != l && Vh(r)));
    });
}
function Yh(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || jh, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Vi(null, a, null, null, a) : Array.isArray(a) ? Vi(Fa, { children: a }, null, null, null) : a.__b > 0 ? Vi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Xh(t, a, u = u || Bh, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Gh(a, _, t) : _ = qh(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = $r(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Zh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Kh(p[i], p[++i], p[++i]);
}
function Gh(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Gh(o, e, n) : qh(n, o, o, s, o.__e, e));
  return e;
}
function qh(t, e, n, o, s, r) {
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
    r === "children" || r === "key" || r in e || us(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || us(t, r, e[r], n[r], o);
}
function q_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || ob.test(e) ? n : n + "px";
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
            n && e in n || q_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || q_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? K_ : X_, r) : t.removeEventListener(e, r ? K_ : X_, r);
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
function X_(t) {
  this.l[t.type + !1](_t.event ? _t.event(t) : t);
}
function K_(t) {
  this.l[t.type + !0](_t.event ? _t.event(t) : t);
}
function Xh(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = _t.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new Do(p, g), i.constructor = v, i.render = cb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ue({}, i.__s)), Ue(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = _t.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ue(Ue({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Fa && h.key == null ? h.props.children : h, Yh(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = lb(n.__e, e, n, o, s, r, l, _);
    (h = _t.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), _t.__e(k, e, n);
  }
}
function sb(t, e) {
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
    if (r = r && Ua.call(t.childNodes), h = (d = n.props || Bh).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (ib(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Yh(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && $r(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && zh(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && us(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && us(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Kh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    _t.__e(o, n);
  }
}
function Zh(t, e, n) {
  var o, s;
  if (_t.unmount && _t.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Kh(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Zh(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || zh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function cb(t, e, n) {
  return this.constructor(t, n);
}
Ua = jh.slice, _t = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Uh = 0, Fh = function(t) {
  return t != null && t.constructor === void 0;
}, Do.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ue({}, this.state), typeof t == "function" && (t = t(Ue({}, n), this.props)), t && Ue(n, t), t != null && this.__v && (e && this._sb.push(e), G_(this));
}, Do.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), G_(this));
}, Do.prototype.render = Fa, Ro = [], _s.__r = 0;
var ab = 0;
function Yt(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ab, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return _t.vnode && _t.vnode(_), _;
}
function kc(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), o = (s, r) => {
    if (Array.isArray(s) && (r = s[1], s = s[0]), !s.length)
      return;
    const l = n.get(s);
    typeof l == "number" ? e[l][1] = !!r : (n.set(s, e.length), e.push([s, !!r]));
  };
  return t.forEach((s) => {
    typeof s == "function" && (s = s()), Array.isArray(s) ? kc(...s).forEach(o) : s && typeof s == "object" ? Object.entries(s).forEach(o) : typeof s == "string" && s.split(" ").forEach((r) => o(r, !0));
  }), e.sort((s, r) => (n.get(s[0]) || 0) - (n.get(r[0]) || 0));
}
const F = (...t) => kc(...t).reduce((e, [n, o]) => (o && e.push(n), e), []).join(" ");
function _b({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: s
}) {
  return wo(t, {
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
    typeof c == "string" ? /* @__PURE__ */ Yt("i", { class: `icon ${c}` }) : c,
    /* @__PURE__ */ Yt("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof i == "string" ? /* @__PURE__ */ Yt("i", { class: `icon ${i}` }) : i
  ];
  return wo(t, {
    className: F(e, { disabled: r, active: l }),
    title: d,
    [t === "a" ? "href" : "data-url"]: s,
    [t === "a" ? "target" : "data-target"]: h,
    style: u,
    onClick: a,
    ...o
  }, ...f);
}
function ub({
  component: t = "div",
  className: e,
  text: n,
  attrs: o,
  children: s,
  style: r,
  onClick: l
}) {
  return wo(t, {
    className: F(e),
    style: r,
    onClick: l,
    ...o
  }, n, typeof s == "function" ? s() : s);
}
function fb({
  component: t = "div",
  className: e,
  style: n,
  space: o,
  flex: s,
  attrs: r,
  onClick: l,
  children: c
}) {
  return wo(t, {
    className: F(e),
    style: { width: o, height: o, flex: s, ...n },
    onClick: l,
    ...r
  }, c);
}
function hb(t) {
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
  return s.forEach((y) => {
    const p = [];
    typeof y == "string" && c && c[y] && (y = c[y]), typeof y == "function" ? _ ? p.push(..._.call(l, y, a, ...r)) : p.push(...y.call(l, a, ...r) ?? []) : p.push(y), p.forEach((m) => {
      m != null && (typeof m == "object" && !Ah(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ Ih("div", { className: F(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? f.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(i, m.attrs)) : a.push(m));
    });
  }), f.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: f } }), [{
    className: F(d),
    style: u,
    ...i
  }, a];
}
function pa({
  tag: t = "div",
  ...e
}) {
  const [n, o] = hb(e);
  return Lh(t, n, ...o);
}
function db({ type: t, ...e }) {
  return /* @__PURE__ */ Yt(pa, { ...e });
}
function Qh({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: s
}) {
  return wo(t, {
    className: F(e),
    style: o,
    ...s
  }, n);
}
var So;
let ho = (So = class extends Do {
  constructor() {
    super(...arguments);
    L(this, "ref", rb());
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
          return /* @__PURE__ */ Yt(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, wo);
        if (Fh(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: c = "item", component: _, key: h = s, rootAttrs: i, rootClass: d, rootStyle: u, rootChildren: a, ...f } = r;
    if (c === "html")
      return /* @__PURE__ */ Yt(
        "li",
        {
          className: F("action-menu-item", `${this.name}-html`, d, f.className),
          ...i,
          style: u || f.style,
          dangerouslySetInnerHTML: { __html: f.html }
        },
        h
      );
    const y = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || ho.ItemComponents[c] : _;
    return Object.assign(f, {
      type: c,
      component: typeof _ == "string" ? _ : void 0
    }), this.renderTypedItem(y, {
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
    const { children: r, className: l, key: c, ..._ } = o, { activeClass: h = "", activeKey: i, activeIcon: d } = this.props, u = d && i === c ? /* @__PURE__ */ Yt("i", { className: `checked icon icon-${d}` }) : null, a = i === c;
    return /* @__PURE__ */ Yt(
      "li",
      {
        className: F("action-menu-item", `${this.name}-${s.type}`, l, { [h]: a }),
        ..._,
        children: [
          /* @__PURE__ */ Yt(n, { ...s }),
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
      activeKey: y,
      ...p
    } = n, m = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ Yt(m, { class: F(this.name, l), style: s, ...p, ref: this.ref, children: [
      c && c.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, L(So, "ItemComponents", {
  divider: _b,
  item: Jh,
  heading: ub,
  space: fb,
  custom: db,
  basic: Qh
}), L(So, "ROOT_TAG", "menu"), L(So, "NAME", "action-menu"), So);
class Z_ extends At {
}
L(Z_, "NAME", "actionmenu"), L(Z_, "Component", ho);
function J_({
  ...t
}) {
  return /* @__PURE__ */ Yt(Jh, { ...t });
}
var aa, qr, re, Fn;
let td = (aa = class extends ho {
  constructor(n) {
    super(n);
    T(this, qr, /* @__PURE__ */ new Set());
    T(this, re, void 0);
    T(this, Fn, (n, o, s) => {
      this.toggleNestedMenu(n, o), s.preventDefault();
    });
    H(this, re, n.nestedShow === void 0), b(this, re) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
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
    const s = this.constructor, { name: r, controlledMenu: l, nestedShow: c, beforeDestroy: _, beforeRender: h, itemRender: i, activeClass: d, activeKey: u, onClickItem: a, afterRender: f, commonItemProps: y, activeIcon: p } = this.props;
    return /* @__PURE__ */ Yt(
      s,
      {
        items: o,
        name: r,
        nestedShow: b(this, re) ? this.state.nestedShow : c,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: l || this,
        commonItemProps: y,
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
    b(this, qr).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = J_), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: b(this, Fn).bind(this, l, !0),
        onMouseLeave: b(this, Fn).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = r;
      r.onClick = (i) => {
        b(this, Fn).call(this, l, void 0, i), h == null || h(i);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = b(this, re) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, o);
    if (!b(this, re))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...b(this, qr).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    b(this, re) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    b(this, re) && this.setState({ nestedShow: !1 });
  }
}, qr = new WeakMap(), re = new WeakMap(), Fn = new WeakMap(), L(aa, "ItemComponents", {
  item: J_
}), aa);
class Q_ extends At {
}
L(Q_, "NAME", "actionmenunested"), L(Q_, "Component", td);
var Ba, ut, ed, Po, tu, nd = {}, od = [], pb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Fe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function rd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function mb(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ba.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Yi(t, l, o, s, null);
}
function Yi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++ed };
  return s == null && ut.vnode != null && ut.vnode(r), r;
}
function ja(t) {
  return t.children;
}
function Oo(t, e) {
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
function eu(t) {
  (!t.__d && (t.__d = !0) && Po.push(t) && !fs.__r++ || tu !== ut.debounceRendering) && ((tu = ut.debounceRendering) || setTimeout)(fs);
}
function fs() {
  for (var t; fs.__r = Po.length; )
    t = Po.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Po = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Fe({}, r)).__v = r.__v + 1, ad(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? kr(r), r.__h), yb(o, r), r.__e != l && id(r)));
    });
}
function sd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || od, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Yi(null, a, null, null, a) : Array.isArray(a) ? Yi(ja, { children: a }, null, null, null) : a.__b > 0 ? Yi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      ad(t, a, u = u || nd, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = ld(a, _, t) : _ = cd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = kr(u));
    }
  for (n.__e = y, i = g; i--; )
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
function gb(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || hs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || hs(t, r, e[r], n[r], o);
}
function nu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || pb.test(e) ? n : n + "px";
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
            n && e in n || nu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || nu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? ru : ou, r) : t.removeEventListener(e, r ? ru : ou, r);
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
function ou(t) {
  this.l[t.type + !1](ut.event ? ut.event(t) : t);
}
function ru(t) {
  this.l[t.type + !0](ut.event ? ut.event(t) : t);
}
function ad(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ut.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new Oo(p, g), i.constructor = v, i.render = bb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Fe({}, i.__s)), Fe(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = ut.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Fe(Fe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === ja && h.key == null ? h.props.children : h, sd(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = vb(n.__e, e, n, o, s, r, l, _);
    (h = ut.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ut.__e(k, e, n);
  }
}
function yb(t, e) {
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
function vb(t, e, n, o, s, r, l, c) {
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
    if (r = r && Ba.call(t.childNodes), h = (d = n.props || nd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (gb(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, sd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && kr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && rd(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && hs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && hs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function _d(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ut.__e(o, n);
  }
}
function ud(t, e, n) {
  var o, s;
  if (ut.unmount && ut.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || _d(o, null, e)), (o = t.__c) != null) {
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
      o[s] && ud(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || rd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function bb(t, e, n) {
  return this.constructor(t, n);
}
Ba = od.slice, ut = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, ed = 0, Oo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Fe({}, this.state), typeof t == "function" && (t = t(Fe({}, n), this.props)), t && Fe(n, t), t != null && this.__v && (e && this._sb.push(e), eu(this));
}, Oo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), eu(this));
}, Oo.prototype.render = ja, Po = [], fs.__r = 0;
var wb = 0;
function ko(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --wb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ut.vnode && ut.vnode(_), _;
}
let _e = class extends Oo {
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
      trailingIcon: y,
      caret: p,
      square: m,
      hint: g,
      ...w
    } = this.props, $ = e || (l ? "a" : "button"), S = f == null || typeof f == "string" && !f.length || i && !u, A = p && S && !a && !y && !r && !i;
    return mb(
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
      i ? /* @__PURE__ */ ko("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof a == "string" ? /* @__PURE__ */ ko("i", { class: `icon ${a}` }) : a,
      S ? null : /* @__PURE__ */ ko("span", { className: "text", children: i ? u : f }),
      i ? null : r,
      i ? null : typeof y == "string" ? /* @__PURE__ */ ko("i", { class: `icon ${y}` }) : y,
      i ? null : p ? /* @__PURE__ */ ko("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class iu extends At {
}
L(iu, "NAME", "button"), L(iu, "Component", _e);
var ma;
ma = { __e: function(t, e, n, o) {
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
var $b = 0;
function kb(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --$b, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ma.vnode && ma.vnode(_), _;
}
var _a;
let za = (_a = class extends td {
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
    return /* @__PURE__ */ kb("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, L(_a, "NAME", "menu"), _a);
class su extends At {
}
L(su, "NAME", "menu"), L(su, "Component", za);
let xb = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var fd, ft, hd, Ho, lu, dd = {}, pd = [], Sb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Be(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function md(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Zc(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++hd };
  return s == null && ft.vnode != null && ft.vnode(r), r;
}
function Va(t) {
  return t.children;
}
function Wo(t, e) {
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
function gd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return gd(t);
  }
}
function cu(t) {
  (!t.__d && (t.__d = !0) && Ho.push(t) && !ds.__r++ || lu !== ft.debounceRendering) && ((lu = ft.debounceRendering) || setTimeout)(ds);
}
function ds() {
  for (var t; ds.__r = Ho.length; )
    t = Ho.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Ho = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Be({}, r)).__v = r.__v + 1, wd(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? xr(r), r.__h), Eb(o, r), r.__e != l && gd(r)));
    });
}
function yd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || pd, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Zc(null, a, null, null, a) : Array.isArray(a) ? Zc(Va, { children: a }, null, null, null) : a.__b > 0 ? Zc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      wd(t, a, u = u || dd, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = vd(a, _, t) : _ = bd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = xr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && kd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      $d(p[i], p[++i], p[++i]);
}
function vd(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? vd(o, e, n) : bd(n, o, o, s, o.__e, e));
  return e;
}
function bd(t, e, n, o, s, r) {
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
function Cb(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ps(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ps(t, r, e[r], n[r], o);
}
function au(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Sb.test(e) ? n : n + "px";
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
            n && e in n || au(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || au(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? uu : _u, r) : t.removeEventListener(e, r ? uu : _u, r);
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
function _u(t) {
  this.l[t.type + !1](ft.event ? ft.event(t) : t);
}
function uu(t) {
  this.l[t.type + !0](ft.event ? ft.event(t) : t);
}
function wd(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ft.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new Wo(p, g), i.constructor = v, i.render = Tb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Be({}, i.__s)), Be(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = ft.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Be(Be({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Va && h.key == null ? h.props.children : h, yd(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ab(n.__e, e, n, o, s, r, l, _);
    (h = ft.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ft.__e(k, e, n);
  }
}
function Eb(t, e) {
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
function Ab(t, e, n, o, s, r, l, c) {
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
    if (r = r && fd.call(t.childNodes), h = (d = n.props || dd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Cb(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, yd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && xr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && md(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && ps(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && ps(t, "checked", f, d.checked, !1));
  }
  return t;
}
function $d(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ft.__e(o, n);
  }
}
function kd(t, e, n) {
  var o, s;
  if (ft.unmount && ft.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || $d(o, null, e)), (o = t.__c) != null) {
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
      o[s] && kd(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || md(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Tb(t, e, n) {
  return this.constructor(t, n);
}
fd = pd.slice, ft = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, hd = 0, Wo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Be({}, this.state), typeof t == "function" && (t = t(Be({}, n), this.props)), t && Be(n, t), t != null && this.__v && (e && this._sb.push(e), cu(this));
}, Wo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), cu(this));
}, Wo.prototype.render = Va, Ho = [], ds.__r = 0;
var Mb = 0;
function Lb(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Mb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ft.vnode && ft.vnode(_), _;
}
var ga, Dn;
ga = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Dn = function(t) {
  return t != null && t.constructor === void 0;
};
var Nb = 0;
function me(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Nb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ga.vnode && ga.vnode(_), _;
}
var ya;
ya = { __e: function(t, e, n, o) {
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
var Rb = 0;
function xc(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Rb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ya.vnode && ya.vnode(_), _;
}
function Db({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ xc(_e, { type: n, ...o });
}
var xd, ht, Sd, Io, fu, Cd = {}, Ed = [], Pb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function je(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ad(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Jc(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Sd };
  return s == null && ht.vnode != null && ht.vnode(r), r;
}
function Ob() {
  return { current: null };
}
function Ya(t) {
  return t.children;
}
function Uo(t, e) {
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
function Td(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Td(t);
  }
}
function hu(t) {
  (!t.__d && (t.__d = !0) && Io.push(t) && !ms.__r++ || fu !== ht.debounceRendering) && ((fu = ht.debounceRendering) || setTimeout)(ms);
}
function ms() {
  for (var t; ms.__r = Io.length; )
    t = Io.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Io = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = je({}, r)).__v = r.__v + 1, Rd(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Sr(r), r.__h), Wb(o, r), r.__e != l && Td(r)));
    });
}
function Md(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || Ed, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Jc(null, a, null, null, a) : Array.isArray(a) ? Jc(Ya, { children: a }, null, null, null) : a.__b > 0 ? Jc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Rd(t, a, u = u || Cd, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Ld(a, _, t) : _ = Nd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Sr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Pd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Dd(p[i], p[++i], p[++i]);
}
function Ld(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Ld(o, e, n) : Nd(n, o, o, s, o.__e, e));
  return e;
}
function Nd(t, e, n, o, s, r) {
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
function Hb(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || gs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || gs(t, r, e[r], n[r], o);
}
function du(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Pb.test(e) ? n : n + "px";
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
  this.l[t.type + !1](ht.event ? ht.event(t) : t);
}
function mu(t) {
  this.l[t.type + !0](ht.event ? ht.event(t) : t);
}
function Rd(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ht.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new Uo(p, g), i.constructor = v, i.render = Ub), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = je({}, i.__s)), je(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = ht.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = je(je({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Ya && h.key == null ? h.props.children : h, Md(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ib(n.__e, e, n, o, s, r, l, _);
    (h = ht.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ht.__e(k, e, n);
  }
}
function Wb(t, e) {
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
function Ib(t, e, n, o, s, r, l, c) {
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
    if (r = r && xd.call(t.childNodes), h = (d = n.props || Cd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Hb(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Md(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Sr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Ad(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && gs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && gs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Dd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ht.__e(o, n);
  }
}
function Pd(t, e, n) {
  var o, s;
  if (ht.unmount && ht.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Dd(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Pd(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Ad(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Ub(t, e, n) {
  return this.constructor(t, n);
}
xd = Ed.slice, ht = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Sd = 0, Uo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = je({}, this.state), typeof t == "function" && (t = t(je({}, n), this.props)), t && je(n, t), t != null && this.__v && (e && this._sb.push(e), hu(this));
}, Uo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), hu(this));
}, Uo.prototype.render = Ya, Io = [], ms.__r = 0;
var Fb = 0;
function Od(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Fb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ht.vnode && ht.vnode(_), _;
}
var Sc, ot, Hd, Fo, gu, ys = {}, Wd = [], Bb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ze(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Id(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ud(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Sc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Gi(t, l, o, s, null);
}
function Gi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Hd };
  return s == null && ot.vnode != null && ot.vnode(r), r;
}
function Cc(t) {
  return t.children;
}
function qi(t, e) {
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
function Fd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Fd(t);
  }
}
function yu(t) {
  (!t.__d && (t.__d = !0) && Fo.push(t) && !vs.__r++ || gu !== ot.debounceRendering) && ((gu = ot.debounceRendering) || setTimeout)(vs);
}
function vs() {
  for (var t; vs.__r = Fo.length; )
    t = Fo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Fo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = ze({}, r)).__v = r.__v + 1, Ga(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Cr(r), r.__h), Vd(o, r), r.__e != l && Fd(r)));
    });
}
function Bd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || Wd, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Gi(null, a, null, null, a) : Array.isArray(a) ? Gi(Cc, { children: a }, null, null, null) : a.__b > 0 ? Gi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Ga(t, a, u = u || ys, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = jd(a, _, t) : _ = zd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Cr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Gd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Yd(p[i], p[++i], p[++i]);
}
function jd(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? jd(o, e, n) : zd(n, o, o, s, o.__e, e));
  return e;
}
function zd(t, e, n, o, s, r) {
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
function jb(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || bs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || bs(t, r, e[r], n[r], o);
}
function vu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Bb.test(e) ? n : n + "px";
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
  this.l[t.type + !1](ot.event ? ot.event(t) : t);
}
function wu(t) {
  this.l[t.type + !0](ot.event ? ot.event(t) : t);
}
function Ga(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ot.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new qi(p, g), i.constructor = v, i.render = Vb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = ze({}, i.__s)), ze(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = ot.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = ze(ze({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Cc && h.key == null ? h.props.children : h, Bd(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = zb(n.__e, e, n, o, s, r, l, _);
    (h = ot.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ot.__e(k, e, n);
  }
}
function Vd(t, e) {
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
function zb(t, e, n, o, s, r, l, c) {
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
    if (r = r && Sc.call(t.childNodes), h = (d = n.props || ys).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (jb(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Bd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Cr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Id(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && bs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && bs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Yd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ot.__e(o, n);
  }
}
function Gd(t, e, n) {
  var o, s;
  if (ot.unmount && ot.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Yd(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Gd(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Id(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Vb(t, e, n) {
  return this.constructor(t, n);
}
function Yb(t, e, n) {
  var o, s, r;
  ot.__ && ot.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Ga(e, t = (!o && n || e).__k = Ud(Cc, null, [t]), s || ys, ys, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Sc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Vd(r, t);
}
Sc = Wd.slice, ot = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Hd = 0, qi.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ze({}, this.state), typeof t == "function" && (t = t(ze({}, n), this.props)), t && ze(n, t), t != null && this.__v && (e && this._sb.push(e), yu(this));
}, qi.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), yu(this));
}, qi.prototype.render = Cc, Fo = [], vs.__r = 0;
function Gb(t) {
  return t.button === 2;
}
var qb = 0;
function Xb(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --qb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ot.vnode && ot.vnode(_), _;
}
function qa(t) {
  return t.split("-")[1];
}
function qd(t) {
  return t === "y" ? "height" : "width";
}
function Er(t) {
  return t.split("-")[0];
}
function Xd(t) {
  return ["top", "bottom"].includes(Er(t)) ? "x" : "y";
}
function $u(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Xd(e), _ = qd(c), h = o[_] / 2 - s[_] / 2, i = Er(e), d = c === "x";
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
  switch (qa(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const Kb = async (t, e, n) => {
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
  } = $u(h, o, _), u = o, a = {}, f = 0;
  for (let y = 0; y < c.length; y++) {
    const {
      name: p,
      fn: m
    } = c[y], {
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
      } = $u(h, u, _)), y = -1;
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
function Zb(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Jb(t) {
  return typeof t != "number" ? Zb(t) : {
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
async function Qb(t, e) {
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
  } = e, f = Jb(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = ws(await r.getClippingRect({
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
const t0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $s(t) {
  return t.replace(/left|right|bottom|top/g, (e) => t0[e]);
}
function e0(t, e, n) {
  n === void 0 && (n = !1);
  const o = qa(t), s = Xd(t), r = qd(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = $s(l)), {
    main: l,
    cross: $s(l)
  };
}
const n0 = {
  start: "end",
  end: "start"
};
function va(t) {
  return t.replace(/start|end/g, (e) => n0[e]);
}
function o0(t) {
  const e = $s(t);
  return [va(t), e, va(e)];
}
function r0(t, e, n) {
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
function i0(t, e, n, o) {
  const s = qa(t);
  let r = r0(Er(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(va)))), r;
}
const Kd = function(t) {
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
        ...y
      } = t, p = Er(o), m = Er(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [$s(l)] : o0(l));
      !d && a !== "none" && w.push(...i0(l, f, a, g));
      const $ = [l, ...w], S = await Qb(e, y), A = [];
      let E = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: N,
          cross: G
        } = e0(o, r, g);
        A.push(S[N], S[G]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var v;
        const N = (((v = s.flip) == null ? void 0 : v.index) || 0) + 1, G = $[N];
        if (G)
          return {
            data: {
              index: N,
              overflows: E
            },
            reset: {
              placement: G
            }
          };
        let j = "bottom";
        switch (u) {
          case "bestFit": {
            var k;
            const R = (k = E.map((C) => [C, C.overflows.filter((x) => x > 0).reduce((x, D) => x + D, 0)]).sort((C, x) => C[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            R && (j = R);
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
function ue(t) {
  return Gt(t).getComputedStyle(t);
}
function rn(t) {
  return Jd(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Ni;
function Zd() {
  if (Ni)
    return Ni;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Ni = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Ni) : navigator.userAgent;
}
function Se(t) {
  return t instanceof Gt(t).HTMLElement;
}
function Qt(t) {
  return t instanceof Gt(t).Element;
}
function Jd(t) {
  return t instanceof Gt(t).Node;
}
function ku(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Gt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Ec(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = ue(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function s0(t) {
  return ["table", "td", "th"].includes(rn(t));
}
function Xa(t) {
  const e = /firefox/i.test(Zd()), n = ue(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function Qd() {
  return !/^((?!chrome|android).)*safari/i.test(Zd());
}
function Ka(t) {
  return ["html", "body", "#document"].includes(rn(t));
}
const xu = Math.min, Bo = Math.max, ks = Math.round;
function tp(t) {
  const e = ue(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = ks(n) !== s || ks(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function ep(t) {
  return Qt(t) ? t : t.contextElement;
}
const np = {
  x: 1,
  y: 1
};
function Pn(t) {
  const e = ep(t);
  if (!Se(e))
    return np;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = tp(e);
  let l = (r ? ks(n.width) : n.width) / o, c = (r ? ks(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function En(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = ep(t);
  let _ = np;
  e && (o ? Qt(o) && (_ = Pn(o)) : _ = Pn(t));
  const h = c ? Gt(c) : window, i = !Qd() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const y = Gt(c), p = o && Qt(o) ? Gt(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
      const g = Pn(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
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
function an(t) {
  return ((Jd(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ac(t) {
  return Qt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function op(t) {
  return En(an(t)).left + Ac(t).scrollLeft;
}
function l0(t, e, n) {
  const o = Se(e), s = an(e), r = En(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((rn(e) !== "body" || Ec(s)) && (l = Ac(e)), Se(e)) {
      const _ = En(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = op(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Ar(t) {
  if (rn(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (ku(t) ? t.host : null) || // Fallback
    an(t)
  );
  return ku(e) ? e.host : e;
}
function Su(t) {
  return !Se(t) || ue(t).position === "fixed" ? null : t.offsetParent;
}
function c0(t) {
  let e = Ar(t);
  for (; Se(e) && !Ka(e); ) {
    if (Xa(e))
      return e;
    e = Ar(e);
  }
  return null;
}
function Cu(t) {
  const e = Gt(t);
  let n = Su(t);
  for (; n && s0(n) && ue(n).position === "static"; )
    n = Su(n);
  return n && (rn(n) === "html" || rn(n) === "body" && ue(n).position === "static" && !Xa(n)) ? e : n || c0(t) || e;
}
function a0(t) {
  return tp(t);
}
function _0(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const s = Se(n), r = an(n);
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
  if ((s || !s && o !== "fixed") && ((rn(n) !== "body" || Ec(r)) && (l = Ac(n)), Se(n))) {
    const h = En(n);
    c = Pn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function u0(t, e) {
  const n = Gt(t), o = an(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = Qd();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function f0(t) {
  var e;
  const n = an(t), o = Ac(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = Bo(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = Bo(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + op(t);
  const _ = -o.scrollTop;
  return ue(s || n).direction === "rtl" && (c += Bo(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function rp(t) {
  const e = Ar(t);
  return Ka(e) ? t.ownerDocument.body : Se(e) && Ec(e) ? e : rp(e);
}
function jo(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = rp(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Gt(o);
  return s ? e.concat(r, r.visualViewport || [], Ec(o) ? o : []) : e.concat(o, jo(o));
}
function h0(t, e) {
  const n = En(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Se(t) ? Pn(t) : {
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
function Eu(t, e, n) {
  return e === "viewport" ? ws(u0(t, n)) : Qt(e) ? h0(e, n) : ws(f0(an(t)));
}
function d0(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = jo(t).filter((c) => Qt(c) && rn(c) !== "body"), s = null;
  const r = ue(t).position === "fixed";
  let l = r ? Ar(t) : t;
  for (; Qt(l) && !Ka(l); ) {
    const c = ue(l), _ = Xa(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Ar(l);
  }
  return e.set(t, o), o;
}
function p0(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? d0(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = Eu(e, i, s);
    return h.top = Bo(d.top, h.top), h.right = xu(d.right, h.right), h.bottom = xu(d.bottom, h.bottom), h.left = Bo(d.left, h.left), h;
  }, Eu(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const m0 = {
  getClippingRect: p0,
  convertOffsetParentRelativeRectToViewportRelativeRect: _0,
  isElement: Qt,
  getDimensions: a0,
  getOffsetParent: Cu,
  getDocumentElement: an,
  getScale: Pn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || Cu, r = this.getDimensions;
    return {
      reference: l0(e, await s(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => ue(t).direction === "rtl"
};
function g0(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...Qt(t) ? jo(t) : t.contextElement ? jo(t.contextElement) : [], ...jo(e)] : [];
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
    }), Qt(t) && !c && i.observe(t), !Qt(t) && t.contextElement && !c && i.observe(t.contextElement), i.observe(e);
  }
  let d, u = c ? En(t) : null;
  c && a();
  function a() {
    const f = En(t);
    u && (f.x !== u.x || f.y !== u.y || f.width !== u.width || f.height !== u.height) && n(), u = f, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var f;
    h.forEach((y) => {
      _ && y.removeEventListener("scroll", n), r && y.removeEventListener("resize", n);
    }), (f = i) == null || f.disconnect(), i = null, c && cancelAnimationFrame(d);
  };
}
const ip = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: m0,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return Kb(t, e, {
    ...s,
    platform: r
  });
};
let y0 = class extends za {
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
      middleware: [Kd()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  _createPopper() {
    const e = this._getPopperOptions();
    this.ref.current && ip(this._getPopperElement(), this.ref.current, e).then(({ x: n, y: o }) => {
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
    return /* @__PURE__ */ Xb("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var Re, Bn, Xr, Kr, gl, sp, yl, lp;
class Ht extends oe {
  constructor() {
    super(...arguments);
    T(this, gl);
    T(this, yl);
    T(this, Re, void 0);
    T(this, Bn, void 0);
    T(this, Xr, void 0);
    L(this, "arrowEl");
    T(this, Kr, void 0);
  }
  get isShown() {
    var n;
    return (n = b(this, Re)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return b(this, Re) || this._ensureMenu();
  }
  get trigger() {
    return b(this, Xr) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, Xr, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var o, s;
    return (o = b(this, Kr)) == null || o.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((s = b(this, Re)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    super.destroy(), (n = b(this, Re)) == null || n.remove();
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
    return s.style.width = "max-content", s.style.position = this.options.strategy, s.style.top = "0", s.style.left = "0", H(this, Re, s), s;
  }
  _getPopperOptions() {
    var r;
    const { placement: n, strategy: o } = this.options, s = {
      middleware: [],
      placement: n,
      strategy: o
    };
    return this.options.flip && ((r = s.middleware) == null || r.push(Kd())), s;
  }
  _createPopper() {
    const n = this._getPopperOptions(), o = this._getPopperElement();
    H(this, Kr, g0(o, this.menu, () => {
      ip(o, this.menu, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
        Object.assign(this.menu.style, {
          left: `${s}px`,
          top: `${r}px`
        });
        const _ = c.split("-")[0], h = I(this, gl, sp).call(this, _);
        if (l.arrow && this.arrowEl) {
          const { x: i, y: d } = l.arrow;
          Object.assign(this.arrowEl.style, {
            left: i != null ? `${i}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...I(this, yl, lp).call(this, _)
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Yb(Ud(y0, n), this.menu), !0);
  }
  _getPopperElement() {
    return b(this, Bn) || H(this, Bn, {
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
    }), b(this, Bn);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)) || o && Gb(o))
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
Re = new WeakMap(), Bn = new WeakMap(), Xr = new WeakMap(), Kr = new WeakMap(), gl = new WeakSet(), sp = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, yl = new WeakSet(), lp = function(n) {
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
}, L(Ht, "NAME", "contextmenu"), L(Ht, "EVENTS", !0), L(Ht, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), L(Ht, "MENU_CLASS", "contextmenu"), L(Ht, "CLASS_SHOW", "show"), L(Ht, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (t) => {
  var o;
  const e = t.target;
  if ((o = e.closest) != null && o.call(e, `.${Ht.MENU_CLASS}`))
    return;
  const n = e.closest(Ht.MENU_SELECTOR);
  n && (Ht.ensure(n).show(t), t.preventDefault());
});
document.addEventListener("click", Ht.clear.bind(Ht));
function cp(t) {
  return t.split("-")[1];
}
function v0(t) {
  return t === "y" ? "height" : "width";
}
function ap(t) {
  return t.split("-")[0];
}
function _p(t) {
  return ["top", "bottom"].includes(ap(t)) ? "x" : "y";
}
function b0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function w0(t) {
  return typeof t != "number" ? b0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
const $0 = Math.min, k0 = Math.max;
function x0(t, e, n) {
  return k0(t, $0(e, n));
}
const S0 = (t) => ({
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
    const h = w0(o), i = {
      x: s,
      y: r
    }, d = _p(l), u = v0(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[y], E = w / 2 - a[u] / 2 + $, v = x0(S, E, A), N = cp(l) != null && E != v && c.reference[u] / 2 - (E < S ? h[f] : h[y]) - a[u] / 2 < 0 ? E < S ? S - E : A - E : 0;
    return {
      [d]: i[d] - N,
      data: {
        [d]: v,
        centerOffset: E - v
      }
    };
  }
});
async function C0(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = ap(n), c = cp(n), _ = _p(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const E0 = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await C0(e, t);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
var jn, zn, Vn, vl, up;
const N_ = class extends Ht {
  constructor() {
    super(...arguments);
    T(this, vl);
    T(this, jn, !1);
    T(this, zn, 0);
    L(this, "hideLater", () => {
      b(this, Vn).call(this), H(this, zn, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, Vn, () => {
      clearTimeout(b(this, zn)), H(this, zn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && N_.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!b(this, jn) && this.isHover && I(this, vl, up).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    b(this, jn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", b(this, Vn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 8 : 0;
  }
  _getPopperOptions() {
    var s, r;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && this.arrowEl && ((s = n.middleware) == null || s.push(E0(o)), (r = n.middleware) == null || r.push(S0({ element: this.arrowEl }))), n;
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
let Nt = N_;
jn = new WeakMap(), zn = new WeakMap(), Vn = new WeakMap(), vl = new WeakSet(), up = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", b(this, Vn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, jn, !0);
}, L(Nt, "NAME", "dropdown"), L(Nt, "MENU_CLASS", "dropdown-menu"), L(Nt, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), L(Nt, "DEFAULT", {
  ...Ht.DEFAULT,
  strategy: "fixed",
  trigger: "click"
});
document.addEventListener("click", function(t) {
  var o;
  const e = t.target, n = (o = e.closest) == null ? void 0 : o.call(e, Nt.MENU_SELECTOR);
  if (n) {
    const s = Nt.ensure(n);
    s.options.trigger === "click" && s.toggle();
  } else
    Nt.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  var s;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, Nt.MENU_SELECTOR);
  if (!n)
    return;
  const o = Nt.ensure(n);
  o.isHover && o.show();
});
const A0 = (t) => {
  const e = document.getElementsByClassName("with-dropdown-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Nt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Nt.clear({ event: t });
};
window.addEventListener("scroll", A0, !0);
var Zr, Yn;
class T0 extends Uo {
  constructor(n) {
    var o;
    super(n);
    T(this, Zr, void 0);
    T(this, Yn, Ob());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return b(this, Yn);
  }
  get triggerElement() {
    return b(this, Yn).current;
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
    }), H(this, Zr, Nt.ensure(this.triggerElement, {
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
    (n = b(this, Zr)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: s, ...r } = this.props;
    return {
      className: F("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: b(this, Yn)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ Od("div", { ...o, children: n });
  }
}
Zr = new WeakMap(), Yn = new WeakMap();
class M0 extends T0 {
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
    return o.caret = s, /* @__PURE__ */ Od(_e, { ...o });
  }
}
function fp({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ xc(M0, { type: n, ...o });
}
var Za, dt, hp, dp, zo, Au, pp = {}, mp = [], L0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ve(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function gp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function N0(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Za.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Xi(t, l, o, s, null);
}
function Xi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++hp };
  return s == null && dt.vnode != null && dt.vnode(r), r;
}
function Ja(t) {
  return t.children;
}
function Vo(t, e) {
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
function yp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return yp(t);
  }
}
function Tu(t) {
  (!t.__d && (t.__d = !0) && zo.push(t) && !xs.__r++ || Au !== dt.debounceRendering) && ((Au = dt.debounceRendering) || setTimeout)(xs);
}
function xs() {
  for (var t; xs.__r = zo.length; )
    t = zo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), zo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ve({}, r)).__v = r.__v + 1, $p(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Tr(r), r.__h), D0(o, r), r.__e != l && yp(r)));
    });
}
function vp(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || mp, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Xi(null, a, null, null, a) : Array.isArray(a) ? Xi(Ja, { children: a }, null, null, null) : a.__b > 0 ? Xi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      $p(t, a, u = u || pp, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = bp(a, _, t) : _ = wp(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Tr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && xp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      kp(p[i], p[++i], p[++i]);
}
function bp(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? bp(o, e, n) : wp(n, o, o, s, o.__e, e));
  return e;
}
function wp(t, e, n, o, s, r) {
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
function R0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ss(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ss(t, r, e[r], n[r], o);
}
function Mu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || L0.test(e) ? n : n + "px";
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
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Nu : Lu, r) : t.removeEventListener(e, r ? Nu : Lu, r);
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
function Lu(t) {
  this.l[t.type + !1](dt.event ? dt.event(t) : t);
}
function Nu(t) {
  this.l[t.type + !0](dt.event ? dt.event(t) : t);
}
function $p(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = dt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new Vo(p, g), i.constructor = v, i.render = O0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ve({}, i.__s)), Ve(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = dt.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ve(Ve({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Ja && h.key == null ? h.props.children : h, vp(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = P0(n.__e, e, n, o, s, r, l, _);
    (h = dt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), dt.__e(k, e, n);
  }
}
function D0(t, e) {
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
function P0(t, e, n, o, s, r, l, c) {
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
    if (r = r && Za.call(t.childNodes), h = (d = n.props || pp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (R0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, vp(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Tr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && gp(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ss(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ss(t, "checked", f, d.checked, !1));
  }
  return t;
}
function kp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    dt.__e(o, n);
  }
}
function xp(t, e, n) {
  var o, s;
  if (dt.unmount && dt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || kp(o, null, e)), (o = t.__c) != null) {
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
      o[s] && xp(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || gp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function O0(t, e, n) {
  return this.constructor(t, n);
}
Za = mp.slice, dt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, hp = 0, dp = function(t) {
  return t != null && t.constructor === void 0;
}, Vo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ve({}, this.state), typeof t == "function" && (t = t(Ve({}, n), this.props)), t && Ve(n, t), t != null && this.__v && (e && this._sb.push(e), Tu(this));
}, Vo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Tu(this));
}, Vo.prototype.render = Ja, zo = [], xs.__r = 0;
var H0 = 0;
function Ru(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --H0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return dt.vnode && dt.vnode(_), _;
}
let Sp = class extends Vo {
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
    return /* @__PURE__ */ Ru(_e, { ...s }, o);
  }
  renderItem(e, n, o) {
    const { itemRender: s, defaultBtnProps: r, onClickItem: l } = e, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), s) {
      const _ = s.call(this, c, N0);
      if (dp(_))
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
    return /* @__PURE__ */ Ru(
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
function W0({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ xc(Sp, { type: n, ...o });
}
var Rn;
let po = (Rn = class extends ho {
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
    return /* @__PURE__ */ xc(e, { ...r });
  }
}, L(Rn, "ItemComponents", {
  item: Db,
  dropdown: fp,
  "btn-group": W0
}), L(Rn, "ROOT_TAG", "nav"), L(Rn, "NAME", "toolbar"), L(Rn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), Rn);
function I0({
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
  c === !0 ? d = /* @__PURE__ */ me(_e, { className: "alert-close btn ghost", square: !0, onClick: _, children: /* @__PURE__ */ me("span", { class: "close" }) }) : Dn(c) ? d = c : typeof c == "object" && (d = /* @__PURE__ */ me(_e, { ...c, onClick: _ }));
  const u = Dn(n) ? n : n ? /* @__PURE__ */ me(po, { ...n }) : null;
  return /* @__PURE__ */ me("div", { className: F("alert", t), style: e, ...i, children: [
    Dn(h) ? h : typeof h == "string" ? /* @__PURE__ */ me("i", { className: `icon ${h}` }) : null,
    Dn(s) ? s : /* @__PURE__ */ me("div", { className: F("alert-content", r), children: [
      Dn(o) ? o : o && /* @__PURE__ */ me("div", { className: "alert-heading", children: o }),
      /* @__PURE__ */ me("div", { className: "alert-text", children: s }),
      o ? u : null
    ] }),
    o ? null : u,
    d,
    l
  ] });
}
function U0(t) {
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
let F0 = class extends Wo {
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
    return /* @__PURE__ */ Lb(
      I0,
      {
        className: F("messager", _, s, l === !0 ? U0(r) : l, c ? "in" : ""),
        ...i
      }
    );
  }
};
var Gn, Zi;
class Ki extends At {
  constructor() {
    super(...arguments);
    T(this, Gn);
    L(this, "_show", !1);
    L(this, "_showTimer", 0);
    L(this, "_afterRender", ({ firstRender: n }) => {
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
    this._show || (this.emit("show"), this.render(), this._show = !0, I(this, Gn, Zi).call(this, () => {
      this.emit("shown");
      const { time: n } = this.options;
      n && I(this, Gn, Zi).call(this, () => this.hide(), n);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), I(this, Gn, Zi).call(this, () => {
      this.emit("hidden");
    }));
  }
}
Gn = new WeakSet(), Zi = function(n, o = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, o);
}, L(Ki, "NAME", "MessagerItem"), L(Ki, "EVENTS", !0), L(Ki, "Component", F0);
var vn, qn, $e, bl, Cp, wl, Ep;
const R_ = class extends oe {
  constructor() {
    super(...arguments);
    T(this, bl);
    T(this, wl);
    T(this, vn, void 0);
    T(this, qn, xb(6));
    T(this, $e, void 0);
  }
  get id() {
    return b(this, qn);
  }
  get isShown() {
    var n;
    return !!((n = b(this, $e)) != null && n.isShown);
  }
  show(n) {
    this.setOptions(n), I(this, bl, Cp).call(this).show();
  }
  hide() {
    var n;
    (n = b(this, $e)) == null || n.hide();
  }
  static show(n) {
    typeof n == "string" && (n = { content: n });
    const { container: o, ...s } = n, r = new R_(o || "body", s);
    return r.show(), r;
  }
};
let Ri = R_;
vn = new WeakMap(), qn = new WeakMap(), $e = new WeakMap(), bl = new WeakSet(), Cp = function() {
  if (b(this, $e))
    b(this, $e).setOptions(this.options);
  else {
    const n = I(this, wl, Ep).call(this), o = new Ki(n, this.options);
    o.on("hidden", () => {
      o.destroy(), n.remove(), H(this, vn, void 0);
    }), H(this, $e, o);
  }
  return b(this, $e);
}, wl = new WeakSet(), Ep = function() {
  if (b(this, vn))
    return b(this, vn);
  const { placement: n = "top" } = this.options;
  let o = this.element.querySelector(`.messagers-${n}`);
  o || (o = document.createElement("div"), o.className = `messagers messagers-${n}`, this.element.appendChild(o));
  let s = o.querySelector(`#messager-${b(this, qn)}`);
  return s || (s = document.createElement("div"), s.className = "messager-holder", s.id = `messager-${b(this, qn)}`, o.appendChild(s), H(this, vn, s)), s;
}, L(Ri, "NAME", "messager"), L(Ri, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
var Ap, pt, Tp, Yo, Du, Mp = {}, Lp = [], B0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ye(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Np(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Qc(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Tp };
  return s == null && pt.vnode != null && pt.vnode(r), r;
}
function Qa(t) {
  return t.children;
}
function Go(t, e) {
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
function Rp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Rp(t);
  }
}
function Pu(t) {
  (!t.__d && (t.__d = !0) && Yo.push(t) && !Cs.__r++ || Du !== pt.debounceRendering) && ((Du = pt.debounceRendering) || setTimeout)(Cs);
}
function Cs() {
  for (var t; Cs.__r = Yo.length; )
    t = Yo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Yo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ye({}, r)).__v = r.__v + 1, Hp(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Mr(r), r.__h), z0(o, r), r.__e != l && Rp(r)));
    });
}
function Dp(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || Lp, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Qc(null, a, null, null, a) : Array.isArray(a) ? Qc(Qa, { children: a }, null, null, null) : a.__b > 0 ? Qc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Hp(t, a, u = u || Mp, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Pp(a, _, t) : _ = Op(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Mr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Ip(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Wp(p[i], p[++i], p[++i]);
}
function Pp(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Pp(o, e, n) : Op(n, o, o, s, o.__e, e));
  return e;
}
function Op(t, e, n, o, s, r) {
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
function j0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Es(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Es(t, r, e[r], n[r], o);
}
function Ou(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || B0.test(e) ? n : n + "px";
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
  this.l[t.type + !1](pt.event ? pt.event(t) : t);
}
function Wu(t) {
  this.l[t.type + !0](pt.event ? pt.event(t) : t);
}
function Hp(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = pt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new Go(p, g), i.constructor = v, i.render = Y0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ye({}, i.__s)), Ye(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = pt.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ye(Ye({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Qa && h.key == null ? h.props.children : h, Dp(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = V0(n.__e, e, n, o, s, r, l, _);
    (h = pt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), pt.__e(k, e, n);
  }
}
function z0(t, e) {
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
function V0(t, e, n, o, s, r, l, c) {
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
    if (r = r && Ap.call(t.childNodes), h = (d = n.props || Mp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (j0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Dp(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Mr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Np(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Es(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Es(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Wp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    pt.__e(o, n);
  }
}
function Ip(t, e, n) {
  var o, s;
  if (pt.unmount && pt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Wp(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Ip(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Np(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Y0(t, e, n) {
  return this.constructor(t, n);
}
Ap = Lp.slice, pt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Tp = 0, Go.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ye({}, this.state), typeof t == "function" && (t = t(Ye({}, n), this.props)), t && Ye(n, t), t != null && this.__v && (e && this._sb.push(e), Pu(this));
}, Go.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Pu(this));
}, Go.prototype.render = Qa, Yo = [], Cs.__r = 0;
var G0 = 0;
function Di(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --G0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pt.vnode && pt.vnode(_), _;
}
var Fi;
let q0 = (Fi = class extends Go {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: o, circleBgColor: s, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ Di("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ Di("circle", { cx: c, cy: c, r: l, stroke: s, "stroke-width": o }),
      /* @__PURE__ */ Di("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - e) / 100, "stroke-width": o }),
      /* @__PURE__ */ Di("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(e) })
    ] });
  }
}, L(Fi, "NAME", "zui.progress-circle"), L(Fi, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), Fi);
class Iu extends At {
}
L(Iu, "NAME", "table-sorter"), L(Iu, "Component", q0);
var t_, mt, Up, qo, Uu, Fp = {}, Bp = [], X0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ge(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function jp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function K0(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? t_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Ji(t, l, o, s, null);
}
function Ji(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Up };
  return s == null && mt.vnode != null && mt.vnode(r), r;
}
function e_(t) {
  return t.children;
}
function Xo(t, e) {
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
function zp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return zp(t);
  }
}
function Fu(t) {
  (!t.__d && (t.__d = !0) && qo.push(t) && !As.__r++ || Uu !== mt.debounceRendering) && ((Uu = mt.debounceRendering) || setTimeout)(As);
}
function As() {
  for (var t; As.__r = qo.length; )
    t = qo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), qo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ge({}, r)).__v = r.__v + 1, qp(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Lr(r), r.__h), J0(o, r), r.__e != l && zp(r)));
    });
}
function Vp(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || Bp, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ji(null, a, null, null, a) : Array.isArray(a) ? Ji(e_, { children: a }, null, null, null) : a.__b > 0 ? Ji(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      qp(t, a, u = u || Fp, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Yp(a, _, t) : _ = Gp(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Lr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Kp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Xp(p[i], p[++i], p[++i]);
}
function Yp(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Yp(o, e, n) : Gp(n, o, o, s, o.__e, e));
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
function Z0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ts(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ts(t, r, e[r], n[r], o);
}
function Bu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || X0.test(e) ? n : n + "px";
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
            n && e in n || Bu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Bu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? zu : ju, r) : t.removeEventListener(e, r ? zu : ju, r);
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
function ju(t) {
  this.l[t.type + !1](mt.event ? mt.event(t) : t);
}
function zu(t) {
  this.l[t.type + !0](mt.event ? mt.event(t) : t);
}
function qp(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = mt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new Xo(p, g), i.constructor = v, i.render = tw), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ge({}, i.__s)), Ge(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = mt.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ge(Ge({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === e_ && h.key == null ? h.props.children : h, Vp(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Q0(n.__e, e, n, o, s, r, l, _);
    (h = mt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), mt.__e(k, e, n);
  }
}
function J0(t, e) {
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
function Q0(t, e, n, o, s, r, l, c) {
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
    if (r = r && t_.call(t.childNodes), h = (d = n.props || Fp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Z0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Vp(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Lr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && jp(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ts(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ts(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Xp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    mt.__e(o, n);
  }
}
function Kp(t, e, n) {
  var o, s;
  if (mt.unmount && mt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Xp(o, null, e)), (o = t.__c) != null) {
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
  n || t.__e == null || jp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function tw(t, e, n) {
  return this.constructor(t, n);
}
t_ = Bp.slice, mt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Up = 0, Xo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ge({}, this.state), typeof t == "function" && (t = t(Ge({}, n), this.props)), t && Ge(n, t), t != null && this.__v && (e && this._sb.push(e), Fu(this));
}, Xo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Fu(this));
}, Xo.prototype.render = e_, qo = [], As.__r = 0;
var ew = 0;
function Pi(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ew, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return mt.vnode && mt.vnode(_), _;
}
let nw = class extends Xo {
  constructor() {
    super(...arguments);
    L(this, "state", { checked: !1 });
    L(this, "handleOnClick", () => {
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
    } = this.props, u = this.state.checked ? 1 : 0, a = n || "div", f = typeof l == "string" ? /* @__PURE__ */ Pi("i", { class: `icon ${l}` }) : l, y = typeof c == "string" ? /* @__PURE__ */ Pi("i", { class: `icon ${c}` }) : c, p = [
      /* @__PURE__ */ Pi("input", { onChange: i, type: "checkbox", value: u, checked: !!this.state.checked }),
      /* @__PURE__ */ Pi("label", { children: [
        f,
        r,
        y
      ] })
    ];
    return K0(
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
class Vu extends At {
}
L(Vu, "NAME", "switch"), L(Vu, "Component", nw);
function ow(t) {
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
function rw(t, e) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const l = o.top <= s && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const rC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: F,
  getClassList: kc,
  isElementVisible: rw,
  selectText: ow
}, Symbol.toStringTag, { value: "Module" })), Ce = document, Ms = window, Zp = Ce.documentElement, Ln = Ce.createElement.bind(Ce), Jp = Ln("div"), ta = Ln("table"), iw = Ln("tbody"), Yu = Ln("tr"), { isArray: Tc, prototype: Qp } = Array, { concat: sw, filter: n_, indexOf: tm, map: em, push: lw, slice: nm, some: o_, splice: cw } = Qp, aw = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, _w = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, uw = /<.+>/, fw = /^\w+$/;
function r_(t, e) {
  const n = hw(e);
  return !t || !n && !go(e) && !St(e) ? [] : !n && _w.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && fw.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Mc {
  constructor(e, n) {
    if (!e)
      return;
    if (ba(e))
      return e;
    let o = e;
    if (Rt(e)) {
      const s = (ba(n) ? n[0] : n) || Ce;
      if (o = aw.test(e) && "getElementById" in s ? s.getElementById(e.slice(1).replace(/\\/g, "")) : uw.test(e) ? im(e) : r_(e, s), !o)
        return;
    } else if (Nn(e))
      return this.ready(e);
    (o.nodeType || o === Ms) && (o = [o]), this.length = o.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = o[s];
  }
  init(e, n) {
    return new Mc(e, n);
  }
}
const W = Mc.prototype, Y = W.init;
Y.fn = Y.prototype = W;
W.length = 0;
W.splice = cw;
typeof Symbol == "function" && (W[Symbol.iterator] = Qp[Symbol.iterator]);
function ba(t) {
  return t instanceof Mc;
}
function mo(t) {
  return !!t && t === t.window;
}
function go(t) {
  return !!t && t.nodeType === 9;
}
function hw(t) {
  return !!t && t.nodeType === 11;
}
function St(t) {
  return !!t && t.nodeType === 1;
}
function dw(t) {
  return !!t && t.nodeType === 3;
}
function pw(t) {
  return typeof t == "boolean";
}
function Nn(t) {
  return typeof t == "function";
}
function Rt(t) {
  return typeof t == "string";
}
function It(t) {
  return t === void 0;
}
function Nr(t) {
  return t === null;
}
function om(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function i_(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
Y.isWindow = mo;
Y.isFunction = Nn;
Y.isArray = Tc;
Y.isNumeric = om;
Y.isPlainObject = i_;
function Et(t, e, n) {
  if (n) {
    let o = t.length;
    for (; o--; )
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  } else if (i_(t)) {
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
Y.each = Et;
W.each = function(t) {
  return Et(this, t);
};
W.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function Ls(...t) {
  const e = pw(t[0]) ? t.shift() : !1, n = t.shift(), o = t.length;
  if (!n)
    return {};
  if (!o)
    return Ls(e, Y, n);
  for (let s = 0; s < o; s++) {
    const r = t[s];
    for (const l in r)
      e && (Tc(r[l]) || i_(r[l])) ? ((!n[l] || n[l].constructor !== r[l].constructor) && (n[l] = new r[l].constructor()), Ls(e, n[l], r[l])) : n[l] = r[l];
  }
  return n;
}
Y.extend = Ls;
W.extend = function(t) {
  return Ls(W, t);
};
const mw = /\S+/g;
function Lc(t) {
  return Rt(t) ? t.match(mw) || [] : [];
}
W.toggleClass = function(t, e) {
  const n = Lc(t), o = !It(e);
  return this.each((s, r) => {
    St(r) && Et(n, (l, c) => {
      o ? e ? r.classList.add(c) : r.classList.remove(c) : r.classList.toggle(c);
    });
  });
};
W.addClass = function(t) {
  return this.toggleClass(t, !0);
};
W.removeAttr = function(t) {
  const e = Lc(t);
  return this.each((n, o) => {
    St(o) && Et(e, (s, r) => {
      o.removeAttribute(r);
    });
  });
};
function gw(t, e) {
  if (t) {
    if (Rt(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !St(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return Nr(n) ? void 0 : n;
      }
      return It(e) ? this : Nr(e) ? this.removeAttr(t) : this.each((n, o) => {
        St(o) && o.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
W.attr = gw;
W.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
W.hasClass = function(t) {
  return !!t && o_.call(this, (e) => St(e) && e.classList.contains(t));
};
W.get = function(t) {
  return It(t) ? nm.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
W.eq = function(t) {
  return Y(this.get(t));
};
W.first = function() {
  return this.eq(0);
};
W.last = function() {
  return this.eq(-1);
};
function yw(t) {
  return It(t) ? this.get().map((e) => St(e) || dw(e) ? e.textContent : "").join("") : this.each((e, n) => {
    St(n) && (n.textContent = t);
  });
}
W.text = yw;
function Ee(t, e, n) {
  if (!St(t))
    return;
  const o = Ms.getComputedStyle(t, null);
  return n ? o.getPropertyValue(e) || void 0 : o[e] || t.style[e];
}
function ae(t, e) {
  return parseInt(Ee(t, e), 10) || 0;
}
function Gu(t, e) {
  return ae(t, `border${e ? "Left" : "Top"}Width`) + ae(t, `padding${e ? "Left" : "Top"}`) + ae(t, `padding${e ? "Right" : "Bottom"}`) + ae(t, `border${e ? "Right" : "Bottom"}Width`);
}
const ea = {};
function vw(t) {
  if (ea[t])
    return ea[t];
  const e = Ln(t);
  Ce.body.insertBefore(e, null);
  const n = Ee(e, "display");
  return Ce.body.removeChild(e), ea[t] = n !== "none" ? n : "block";
}
function qu(t) {
  return Ee(t, "display") === "none";
}
function rm(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function Nc(t) {
  return Rt(t) ? (e, n) => rm(n, t) : Nn(t) ? t : ba(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
W.filter = function(t) {
  const e = Nc(t);
  return Y(n_.call(this, (n, o) => e.call(n, o, n)));
};
function _n(t, e) {
  return e ? t.filter(e) : t;
}
W.detach = function(t) {
  return _n(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const bw = /^\s*<(\w+)[^>]*>/, ww = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Xu = {
  "*": Jp,
  tr: iw,
  td: Yu,
  th: Yu,
  thead: ta,
  tbody: ta,
  tfoot: ta
};
function im(t) {
  if (!Rt(t))
    return [];
  if (ww.test(t))
    return [Ln(RegExp.$1)];
  const e = bw.test(t) && RegExp.$1, n = Xu[e] || Xu["*"];
  return n.innerHTML = t, Y(n.childNodes).detach().get();
}
Y.parseHTML = im;
W.has = function(t) {
  const e = Rt(t) ? (n, o) => r_(t, o).length : (n, o) => o.contains(t);
  return this.filter(e);
};
W.not = function(t) {
  const e = Nc(t);
  return this.filter((n, o) => (!Rt(t) || St(o)) && !e.call(o, n, o));
};
function Le(t, e, n, o) {
  const s = [], r = Nn(e), l = o && Nc(o);
  for (let c = 0, _ = t.length; c < _; c++)
    if (r) {
      const h = e(t[c]);
      h.length && lw.apply(s, h);
    } else {
      let h = t[c][e];
      for (; h != null && !(o && l(-1, h)); )
        s.push(h), h = n ? h[e] : null;
    }
  return s;
}
function sm(t) {
  return t.multiple && t.options ? Le(n_.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function $w(t) {
  return arguments.length ? this.each((e, n) => {
    const o = n.multiple && n.options;
    if (o || dm.test(n.type)) {
      const s = Tc(t) ? em.call(t, String) : Nr(t) ? [] : [String(t)];
      o ? Et(n.options, (r, l) => {
        l.selected = s.indexOf(l.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = It(t) || Nr(t) ? "" : t;
  }) : this[0] && sm(this[0]);
}
W.val = $w;
W.is = function(t) {
  const e = Nc(t);
  return o_.call(this, (n, o) => e.call(n, o, n));
};
Y.guid = 1;
function pe(t) {
  return t.length > 1 ? n_.call(t, (e, n, o) => tm.call(o, e) === n) : t;
}
Y.unique = pe;
W.add = function(t, e) {
  return Y(pe(this.get().concat(Y(t, e).get())));
};
W.children = function(t) {
  return _n(Y(pe(Le(this, (e) => e.children))), t);
};
W.parent = function(t) {
  return _n(Y(pe(Le(this, "parentNode"))), t);
};
W.index = function(t) {
  const e = t ? Y(t)[0] : this[0], n = t ? this : Y(e).parent().children();
  return tm.call(n, e);
};
W.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
W.siblings = function(t) {
  return _n(Y(pe(Le(this, (e) => Y(e).parent().children().not(e)))), t);
};
W.find = function(t) {
  return Y(pe(Le(this, (e) => r_(t, e))));
};
const kw = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, xw = /^$|^module$|\/(java|ecma)script/i, Sw = ["type", "src", "nonce", "noModule"];
function Cw(t, e) {
  const n = Y(t);
  n.filter("script").add(n.find("script")).each((o, s) => {
    if (xw.test(s.type) && Zp.contains(s)) {
      const r = Ln("script");
      r.text = s.textContent.replace(kw, ""), Et(Sw, (l, c) => {
        s[c] && (r[c] = s[c]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function Ew(t, e, n, o, s) {
  o ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && Cw(e, t.ownerDocument);
}
function un(t, e, n, o, s, r, l, c) {
  return Et(t, (_, h) => {
    Et(Y(h), (i, d) => {
      Et(Y(e), (u, a) => {
        const f = n ? d : a, y = n ? a : d, p = n ? i : u;
        Ew(f, p ? y.cloneNode(!0) : y, o, s, !p);
      }, c);
    }, l);
  }, r), e;
}
W.after = function() {
  return un(arguments, this, !1, !1, !1, !0, !0);
};
W.append = function() {
  return un(arguments, this, !1, !1, !0);
};
function Aw(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (It(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, o) => {
    St(o) && (e ? Y(o).empty().append(t) : o.innerHTML = t);
  });
}
W.html = Aw;
W.appendTo = function(t) {
  return un(arguments, this, !0, !1, !0);
};
W.wrapInner = function(t) {
  return this.each((e, n) => {
    const o = Y(n), s = o.contents();
    s.length ? s.wrapAll(t) : o.append(t);
  });
};
W.before = function() {
  return un(arguments, this, !1, !0);
};
W.wrapAll = function(t) {
  let e = Y(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
W.wrap = function(t) {
  return this.each((e, n) => {
    const o = Y(t)[0];
    Y(n).wrapAll(e ? o.cloneNode(!0) : o);
  });
};
W.insertAfter = function(t) {
  return un(arguments, this, !0, !1, !1, !1, !1, !0);
};
W.insertBefore = function(t) {
  return un(arguments, this, !0, !0);
};
W.prepend = function() {
  return un(arguments, this, !1, !0, !0, !0, !0);
};
W.prependTo = function(t) {
  return un(arguments, this, !0, !0, !0, !1, !1, !0);
};
W.contents = function() {
  return Y(pe(Le(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
W.next = function(t, e, n) {
  return _n(Y(pe(Le(this, "nextElementSibling", e, n))), t);
};
W.nextAll = function(t) {
  return this.next(t, !0);
};
W.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
W.parents = function(t, e) {
  return _n(Y(pe(Le(this, "parentElement", !0, e))), t);
};
W.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
W.prev = function(t, e, n) {
  return _n(Y(pe(Le(this, "previousElementSibling", e, n))), t);
};
W.prevAll = function(t) {
  return this.prev(t, !0);
};
W.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
W.map = function(t) {
  return Y(sw.apply([], em.call(this, (e, n) => t.call(e, n, e))));
};
W.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
W.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && Ee(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Zp;
  });
};
W.slice = function(t, e) {
  return Y(nm.call(this, t, e));
};
const Tw = /-([a-z])/g;
function s_(t) {
  return t.replace(Tw, (e, n) => n.toUpperCase());
}
W.ready = function(t) {
  const e = () => setTimeout(t, 0, Y);
  return Ce.readyState !== "loading" ? e() : Ce.addEventListener("DOMContentLoaded", e), this;
};
W.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = Y(e);
    n.replaceWith(n.children());
  }), this;
};
W.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + Ms.pageYOffset,
    left: e.left + Ms.pageXOffset
  };
};
W.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = Ee(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const o = t.ownerDocument;
    let s = t.offsetParent || o.documentElement;
    for (; (s === o.body || s === o.documentElement) && Ee(s, "position") === "static"; )
      s = s.parentNode;
    if (s !== t && St(s)) {
      const r = Y(s).offset();
      n.top -= r.top + ae(s, "borderTopWidth"), n.left -= r.left + ae(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - ae(t, "marginTop"),
    left: n.left - ae(t, "marginLeft")
  };
};
const lm = {
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
W.prop = function(t, e) {
  if (t) {
    if (Rt(t))
      return t = lm[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, o) => {
        o[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
W.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[lm[t] || t];
  });
};
const Mw = /^--/;
function l_(t) {
  return Mw.test(t);
}
const na = {}, { style: Lw } = Jp, Nw = ["webkit", "moz", "ms"];
function Rw(t, e = l_(t)) {
  if (e)
    return t;
  if (!na[t]) {
    const n = s_(t), o = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${Nw.join(`${o} `)}${o}`.split(" ");
    Et(s, (r, l) => {
      if (l in Lw)
        return na[t] = l, !1;
    });
  }
  return na[t];
}
const Dw = {
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
function cm(t, e, n = l_(t)) {
  return !n && !Dw[t] && om(e) ? `${e}px` : e;
}
function Pw(t, e) {
  if (Rt(t)) {
    const n = l_(t);
    return t = Rw(t, n), arguments.length < 2 ? this[0] && Ee(this[0], t, n) : t ? (e = cm(t, e, n), this.each((o, s) => {
      St(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
W.css = Pw;
function am(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Ow = /^\s+|\s+$/;
function Ku(t, e) {
  const n = t.dataset[e] || t.dataset[s_(e)];
  return Ow.test(n) ? n : am(JSON.parse, n);
}
function Hw(t, e, n) {
  n = am(JSON.stringify, n), t.dataset[s_(e)] = n;
}
function Ww(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const o in this[0].dataset)
      n[o] = Ku(this[0], o);
    return n;
  }
  if (Rt(t))
    return arguments.length < 2 ? this[0] && Ku(this[0], t) : It(e) ? this : this.each((n, o) => {
      Hw(o, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
W.data = Ww;
function _m(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
Et([!0, !1], (t, e) => {
  Et(["Width", "Height"], (n, o) => {
    const s = `${e ? "outer" : "inner"}${o}`;
    W[s] = function(r) {
      if (this[0])
        return mo(this[0]) ? e ? this[0][`inner${o}`] : this[0].document.documentElement[`client${o}`] : go(this[0]) ? _m(this[0], o) : this[0][`${e ? "offset" : "client"}${o}`] + (r && e ? ae(this[0], `margin${n ? "Top" : "Left"}`) + ae(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Et(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  W[n] = function(o) {
    if (!this[0])
      return It(o) ? void 0 : this;
    if (!arguments.length)
      return mo(this[0]) ? this[0].document.documentElement[`client${e}`] : go(this[0]) ? _m(this[0], e) : this[0].getBoundingClientRect()[n] - Gu(this[0], !t);
    const s = parseInt(o, 10);
    return this.each((r, l) => {
      if (!St(l))
        return;
      const c = Ee(l, "boxSizing");
      l.style[n] = cm(n, s + (c === "border-box" ? Gu(l, !t) : 0));
    });
  };
});
const Zu = "___cd";
W.toggle = function(t) {
  return this.each((e, n) => {
    if (!St(n))
      return;
    (It(t) ? qu(n) : t) ? (n.style.display = n[Zu] || "", qu(n) && (n.style.display = vw(n.tagName))) : (n[Zu] = Ee(n, "display"), n.style.display = "none");
  });
};
W.hide = function() {
  return this.toggle(!1);
};
W.show = function() {
  return this.toggle(!0);
};
const Ju = "___ce", c_ = ".", a_ = { focus: "focusin", blur: "focusout" }, um = { mouseenter: "mouseover", mouseleave: "mouseout" }, Iw = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function __(t) {
  return um[t] || a_[t] || t;
}
function u_(t) {
  const e = t.split(c_);
  return [e[0], e.slice(1).sort()];
}
W.trigger = function(t, e) {
  if (Rt(t)) {
    const [o, s] = u_(t), r = __(o);
    if (!r)
      return this;
    const l = Iw.test(r) ? "MouseEvents" : "HTMLEvents";
    t = Ce.createEvent(l), t.initEvent(r, !0, !0), t.namespace = s.join(c_), t.___ot = o;
  }
  t.___td = e;
  const n = t.___ot in a_;
  return this.each((o, s) => {
    n && Nn(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function fm(t) {
  return t[Ju] = t[Ju] || {};
}
function Uw(t, e, n, o, s) {
  const r = fm(t);
  r[e] = r[e] || [], r[e].push([n, o, s]), t.addEventListener(e, s);
}
function hm(t, e) {
  return !e || !o_.call(e, (n) => t.indexOf(n) < 0);
}
function Ns(t, e, n, o, s) {
  const r = fm(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([l, c, _]) => {
      if (s && _.guid !== s.guid || !hm(l, n) || o && o !== c)
        return !0;
      t.removeEventListener(e, _);
    }));
  else
    for (e in r)
      Ns(t, e, n, o, s);
}
W.off = function(t, e, n) {
  if (It(t))
    this.each((o, s) => {
      !St(s) && !go(s) && !mo(s) || Ns(s);
    });
  else if (Rt(t))
    Nn(e) && (n = e, e = ""), Et(Lc(t), (o, s) => {
      const [r, l] = u_(s), c = __(r);
      this.each((_, h) => {
        !St(h) && !go(h) && !mo(h) || Ns(h, c, l, e, n);
      });
    });
  else
    for (const o in t)
      this.off(o, t[o]);
  return this;
};
W.remove = function(t) {
  return _n(this, t).detach().off(), this;
};
W.replaceWith = function(t) {
  return this.before(t).remove();
};
W.replaceAll = function(t) {
  return Y(t).replaceWith(this), this;
};
function Fw(t, e, n, o, s) {
  if (!Rt(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return Rt(e) || (It(e) || Nr(e) ? e = "" : It(n) ? (n = e, e = "") : (o = n, n = e, e = "")), Nn(o) || (o = n, n = void 0), o ? (Et(Lc(t), (r, l) => {
    const [c, _] = u_(l), h = __(c), i = c in um, d = c in a_;
    h && this.each((u, a) => {
      if (!St(a) && !go(a) && !mo(a))
        return;
      const f = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !hm(_, y.namespace.split(c_)) || !e && (d && (y.target !== a || y.___ot === h) || i && y.relatedTarget && a.contains(y.relatedTarget)))
          return;
        let p = a;
        if (e) {
          let g = y.target;
          for (; !rm(g, e); )
            if (g === a || (g = g.parentNode, !g))
              return;
          p = g;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return p;
          }
        }), Object.defineProperty(y, "delegateTarget", {
          configurable: !0,
          get() {
            return a;
          }
        }), Object.defineProperty(y, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const m = o.call(p, y, y.___td);
        s && Ns(a, h, _, e, f), m === !1 && (y.preventDefault(), y.stopPropagation());
      };
      f.guid = o.guid = o.guid || Y.guid++, Uw(a, h, _, e, f);
    });
  }), this) : this;
}
W.on = Fw;
function Bw(t, e, n, o) {
  return this.on(t, e, n, o, !0);
}
W.one = Bw;
const jw = /\r?\n/g;
function zw(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(jw, `\r
`))}`;
}
const Vw = /file|reset|submit|button|image/i, dm = /radio|checkbox/i;
W.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    Et(n.elements || [n], (o, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || Vw.test(s.type) || dm.test(s.type) && !s.checked)
        return;
      const r = sm(s);
      if (!It(r)) {
        const l = Tc(r) ? r : [r];
        Et(l, (c, _) => {
          t += zw(s.name, _);
        });
      }
    });
  }), t.slice(1);
};
window.$ = Y;
const iC = Y;
/*! js-cookie v3.0.1 | MIT */
function Oi(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var o in n)
      t[o] = n[o];
  }
  return t;
}
var Yw = {
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
function wa(t, e) {
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
        return wa(this.converter, Oi({}, this.attributes, s));
      },
      withConverter: function(s) {
        return wa(Oi({}, this.converter, s), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(e) },
      converter: { value: Object.freeze(t) }
    }
  );
}
var Gw = wa(Yw, { path: "/" });
window.$ && Object.assign(window.$, { cookie: Gw });
var pm = function(t, e, n, o) {
  var s;
  e[0] = 0;
  for (var r = 1; r < e.length; r++) {
    var l = e[r++], c = e[r] ? (e[0] |= l ? 1 : 2, n[e[r++]]) : e[++r];
    l === 3 ? o[0] = c : l === 4 ? o[1] = Object.assign(o[1] || {}, c) : l === 5 ? (o[1] = o[1] || {})[e[++r]] = c : l === 6 ? o[1][e[++r]] += c + "" : l ? (s = t.apply(c, pm(t, c, n, ["", null])), o.push(s), c[0] ? e[0] |= 2 : (e[r - 2] = 0, e[r] = s)) : o.push(c);
  }
  return o;
}, Qu = /* @__PURE__ */ new Map();
function mm(t) {
  var e = Qu.get(this);
  return e || (e = /* @__PURE__ */ new Map(), Qu.set(this, e)), (e = pm(this, e.get(t) || (e.set(t, e = function(n) {
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
var Si, at, gm, ym, Ko, tf, vm, Rs = {}, bm = [], qw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function xe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function wm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ds(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Si.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Zo(t, l, o, s, null);
}
function Zo(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++gm };
  return s == null && at.vnode != null && at.vnode(r), r;
}
function Xw() {
  return { current: null };
}
function Ci(t) {
  return t.children;
}
function Jo(t, e) {
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
function $m(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return $m(t);
  }
}
function $a(t) {
  (!t.__d && (t.__d = !0) && Ko.push(t) && !Ps.__r++ || tf !== at.debounceRendering) && ((tf = at.debounceRendering) || setTimeout)(Ps);
}
function Ps() {
  for (var t; Ps.__r = Ko.length; )
    t = Ko.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Ko = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = xe({}, r)).__v = r.__v + 1, f_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Rr(r), r.__h), Em(o, r), r.__e != l && $m(r)));
    });
}
function km(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || bm, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Zo(null, a, null, null, a) : Array.isArray(a) ? Zo(Ci, { children: a }, null, null, null) : a.__b > 0 ? Zo(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      f_(t, a, u = u || Rs, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = xm(a, _, t) : _ = Cm(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Rr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Tm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Am(p[i], p[++i], p[++i]);
}
function xm(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? xm(o, e, n) : Cm(n, o, o, s, o.__e, e));
  return e;
}
function Sm(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    Sm(n, e);
  }) : e.push(t)), e;
}
function Cm(t, e, n, o, s, r) {
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
function Kw(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Os(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Os(t, r, e[r], n[r], o);
}
function ef(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || qw.test(e) ? n : n + "px";
}
function Os(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || ef(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || ef(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? of : nf, r) : t.removeEventListener(e, r ? of : nf, r);
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
function nf(t) {
  this.l[t.type + !1](at.event ? at.event(t) : t);
}
function of(t) {
  this.l[t.type + !0](at.event ? at.event(t) : t);
}
function f_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = at.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new Jo(p, g), i.constructor = v, i.render = Jw), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = xe({}, i.__s)), xe(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = at.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = xe(xe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Ci && h.key == null ? h.props.children : h, km(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Zw(n.__e, e, n, o, s, r, l, _);
    (h = at.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), at.__e(k, e, n);
  }
}
function Em(t, e) {
  at.__c && at.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      at.__e(o, n.__v);
    }
  });
}
function Zw(t, e, n, o, s, r, l, c) {
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
    if (r = r && Si.call(t.childNodes), h = (d = n.props || Rs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Kw(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, km(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Rr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && wm(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Os(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Os(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Am(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    at.__e(o, n);
  }
}
function Tm(t, e, n) {
  var o, s;
  if (at.unmount && at.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Am(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        at.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Tm(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || wm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Jw(t, e, n) {
  return this.constructor(t, n);
}
function Mm(t, e, n) {
  var o, s, r;
  at.__ && at.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], f_(e, t = (!o && n || e).__k = Ds(Ci, null, [t]), s || Rs, Rs, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Si.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Em(r, t);
}
function Lm(t, e) {
  Mm(t, e, Lm);
}
function Qw(t, e, n) {
  var o, s, r, l = xe({}, t.props);
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? Si.call(arguments, 2) : n), Zo(t.type, l, o || t.key, s || t.ref, null);
}
function t$(t, e) {
  var n = { __c: e = "__cC" + vm++, __: t, Consumer: function(o, s) {
    return o.children(s);
  }, Provider: function(o) {
    var s, r;
    return this.getChildContext || (s = [], (r = {})[e] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(l) {
      this.props.value !== l.value && s.some($a);
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
Si = bm.slice, at = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, gm = 0, ym = function(t) {
  return t != null && t.constructor === void 0;
}, Jo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = xe({}, this.state), typeof t == "function" && (t = t(xe({}, n), this.props)), t && xe(n, t), t != null && this.__v && (e && this._sb.push(e), $a(this));
}, Jo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), $a(this));
}, Jo.prototype.render = Ci, Ko = [], Ps.__r = 0, vm = 0;
const e$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: Jo,
  Fragment: Ci,
  cloneElement: Qw,
  createContext: t$,
  createElement: Ds,
  createRef: Xw,
  h: Ds,
  hydrate: Lm,
  get isValidElement() {
    return ym;
  },
  get options() {
    return at;
  },
  render: Mm,
  toChildArray: Sm
}, Symbol.toStringTag, { value: "Module" }));
var n$ = mm.bind(Ds);
Object.assign(window, { htm: mm, html: n$, preact: e$ });
let o$ = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Jr, De, ie, Xn, Kn, Qi;
const D_ = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    T(this, Kn);
    T(this, Jr, void 0);
    T(this, De, void 0);
    T(this, ie, void 0);
    T(this, Xn, void 0);
    H(this, Jr, n), H(this, De, `ZUI_STORE:${e ?? o$()}`), H(this, ie, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return b(this, Jr);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (b(this, Xn) || H(this, Xn, new D_(b(this, De), "session")), b(this, Xn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const o = b(this, ie).getItem(I(this, Kn, Qi).call(this, e));
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
    b(this, ie).setItem(I(this, Kn, Qi).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    b(this, ie).removeItem(I(this, Kn, Qi).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < b(this, ie).length; n++) {
      const o = b(this, ie).key(n);
      if (o != null && o.startsWith(b(this, De))) {
        const s = b(this, ie).getItem(o);
        typeof s == "string" && e(o.substring(b(this, De).length + 1), JSON.parse(s));
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
let Hs = D_;
Jr = new WeakMap(), De = new WeakMap(), ie = new WeakMap(), Xn = new WeakMap(), Kn = new WeakSet(), Qi = function(e) {
  return `${b(this, De)}:${e}`;
};
const r$ = new Hs("DEFAULT");
function i$(t, e = "local") {
  return new Hs(t, e);
}
Object.assign(r$, { create: i$ });
var Nm, gt, Rm, Qo, rf, Dm = {}, Pm = [], s$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Om(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function oa(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Rm };
  return s == null && gt.vnode != null && gt.vnode(r), r;
}
function h_(t) {
  return t.children;
}
function tr(t, e) {
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
function Hm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Hm(t);
  }
}
function sf(t) {
  (!t.__d && (t.__d = !0) && Qo.push(t) && !Ws.__r++ || rf !== gt.debounceRendering) && ((rf = gt.debounceRendering) || setTimeout)(Ws);
}
function Ws() {
  for (var t; Ws.__r = Qo.length; )
    t = Qo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Qo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = qe({}, r)).__v = r.__v + 1, Fm(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Dr(r), r.__h), c$(o, r), r.__e != l && Hm(r)));
    });
}
function Wm(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || Pm, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? oa(null, a, null, null, a) : Array.isArray(a) ? oa(h_, { children: a }, null, null, null) : a.__b > 0 ? oa(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Fm(t, a, u = u || Dm, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Im(a, _, t) : _ = Um(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Dr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && jm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Bm(p[i], p[++i], p[++i]);
}
function Im(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Im(o, e, n) : Um(n, o, o, s, o.__e, e));
  return e;
}
function Um(t, e, n, o, s, r) {
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
function l$(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Is(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Is(t, r, e[r], n[r], o);
}
function lf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || s$.test(e) ? n : n + "px";
}
function Is(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || lf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || lf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? af : cf, r) : t.removeEventListener(e, r ? af : cf, r);
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
function cf(t) {
  this.l[t.type + !1](gt.event ? gt.event(t) : t);
}
function af(t) {
  this.l[t.type + !0](gt.event ? gt.event(t) : t);
}
function Fm(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = gt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new tr(p, g), i.constructor = v, i.render = _$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = qe({}, i.__s)), qe(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = gt.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = qe(qe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === h_ && h.key == null ? h.props.children : h, Wm(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = a$(n.__e, e, n, o, s, r, l, _);
    (h = gt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), gt.__e(k, e, n);
  }
}
function c$(t, e) {
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
function a$(t, e, n, o, s, r, l, c) {
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
    if (r = r && Nm.call(t.childNodes), h = (d = n.props || Dm).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (l$(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Wm(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Dr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Om(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Is(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Is(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Bm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    gt.__e(o, n);
  }
}
function jm(t, e, n) {
  var o, s;
  if (gt.unmount && gt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Bm(o, null, e)), (o = t.__c) != null) {
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
      o[s] && jm(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Om(t.__e), t.__ = t.__e = t.__d = void 0;
}
function _$(t, e, n) {
  return this.constructor(t, n);
}
Nm = Pm.slice, gt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Rm = 0, tr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qe({}, this.state), typeof t == "function" && (t = t(qe({}, n), this.props)), t && qe(n, t), t != null && this.__v && (e && this._sb.push(e), sf(this));
}, tr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), sf(this));
}, tr.prototype.render = h_, Qo = [], Ws.__r = 0;
var u$ = 0;
function ra(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --u$, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return gt.vnode && gt.vnode(_), _;
}
function f$(t) {
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
function h$(t) {
  const [e, n, o] = typeof t == "string" ? f$(t) : t;
  return e * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function _f(t, e) {
  return h$(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function uf(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function d$(t, e, n) {
  t = t % 360 / 360, e = uf(e), n = uf(n);
  const o = n <= 0.5 ? n * (e + 1) : n + e - n * e, s = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? s + (o - s) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? s + (o - s) * (2 / 3 - l) * 6 : s);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function p$(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function m$(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t = t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t = t[0].toUpperCase() : t = t.length <= e ? t : t.substring(0, e), t;
}
let g$ = class extends tr {
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
      children: y,
      ...p
    } = this.props, m = ["avatar", e], g = { ...n, background: l, color: c };
    let w = 32;
    o && (typeof o == "number" ? (g.width = `${o}px`, g.height = `${o}px`, g.fontSize = `${Math.max(12, Math.round(o / 2))}px`, w = o) : (m.push(`size-${o}`), w = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), s ? m.push("circle") : r && (typeof r == "number" ? g.borderRadius = `${r}px` : m.push(`rounded-${r}`));
    let $;
    if (d)
      m.push("has-img"), $ = /* @__PURE__ */ ra("img", { className: "avatar-img", src: d, alt: _ });
    else if (_ != null && _.length) {
      const S = m$(_, i);
      if (m.push("has-text", `has-text-${S.length}`), l)
        !c && l && (g.color = _f(l));
      else {
        const E = h ?? _, v = (typeof E == "number" ? E : p$(E)) * u % 360;
        if (g.background = `hsl(${v},${a * 100}%,${f * 100}%)`, !c) {
          const k = d$(v, a, f);
          g.color = _f(k);
        }
      }
      let A;
      w && w < 14 * S.length && (A = { transform: `scale(${w / (14 * S.length)})`, whiteSpace: "nowrap" }), $ = /* @__PURE__ */ ra("div", { "data-actualSize": w, className: "avatar-text", style: A, children: S });
    }
    return /* @__PURE__ */ ra(
      "div",
      {
        className: F(m),
        style: g,
        ...p,
        children: [
          $,
          y
        ]
      }
    );
  }
};
class ff extends At {
}
L(ff, "NAME", "avatar"), L(ff, "Component", g$);
class hf extends At {
}
L(hf, "NAME", "btngroup"), L(hf, "Component", Sp);
var Rc, rt, zm, er, df, Us = {}, Vm = [], y$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ym(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Pr(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Rc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ts(t, l, o, s, null);
}
function ts(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++zm };
  return s == null && rt.vnode != null && rt.vnode(r), r;
}
function v$() {
  return { current: null };
}
function Dc(t) {
  return t.children;
}
function nr(t, e) {
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
function Gm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Gm(t);
  }
}
function pf(t) {
  (!t.__d && (t.__d = !0) && er.push(t) && !Fs.__r++ || df !== rt.debounceRendering) && ((df = rt.debounceRendering) || setTimeout)(Fs);
}
function Fs() {
  for (var t; Fs.__r = er.length; )
    t = er.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), er = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Xe({}, r)).__v = r.__v + 1, d_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Or(r), r.__h), Zm(o, r), r.__e != l && Gm(r)));
    });
}
function qm(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || Vm, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ts(null, a, null, null, a) : Array.isArray(a) ? ts(Dc, { children: a }, null, null, null) : a.__b > 0 ? ts(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      d_(t, a, u = u || Us, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Xm(a, _, t) : _ = Km(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Or(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Qm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Jm(p[i], p[++i], p[++i]);
}
function Xm(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Xm(o, e, n) : Km(n, o, o, s, o.__e, e));
  return e;
}
function Km(t, e, n, o, s, r) {
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
    r === "children" || r === "key" || r in e || Bs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Bs(t, r, e[r], n[r], o);
}
function mf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || y$.test(e) ? n : n + "px";
}
function Bs(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || mf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || mf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? yf : gf, r) : t.removeEventListener(e, r ? yf : gf, r);
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
function gf(t) {
  this.l[t.type + !1](rt.event ? rt.event(t) : t);
}
function yf(t) {
  this.l[t.type + !0](rt.event ? rt.event(t) : t);
}
function d_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = rt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new nr(p, g), i.constructor = v, i.render = $$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Xe({}, i.__s)), Xe(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = rt.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Xe(Xe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Dc && h.key == null ? h.props.children : h, qm(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = w$(n.__e, e, n, o, s, r, l, _);
    (h = rt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), rt.__e(k, e, n);
  }
}
function Zm(t, e) {
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
    if (r = r && Rc.call(t.childNodes), h = (d = n.props || Us).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (b$(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, qm(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Or(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Ym(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Bs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Bs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Jm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    rt.__e(o, n);
  }
}
function Qm(t, e, n) {
  var o, s;
  if (rt.unmount && rt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Jm(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Qm(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Ym(t.__e), t.__ = t.__e = t.__d = void 0;
}
function $$(t, e, n) {
  return this.constructor(t, n);
}
function k$(t, e, n) {
  var o, s, r;
  rt.__ && rt.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], d_(e, t = (!o && n || e).__k = Pr(Dc, null, [t]), s || Us, Us, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Rc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Zm(r, t);
}
Rc = Vm.slice, rt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, zm = 0, nr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xe({}, this.state), typeof t == "function" && (t = t(Xe({}, n), this.props)), t && Xe(n, t), t != null && this.__v && (e && this._sb.push(e), pf(this));
}, nr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), pf(this));
}, nr.prototype.render = Dc, er = [], Fs.__r = 0;
var x$ = 0;
function K(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --x$, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return rt.vnode && rt.vnode(_), _;
}
var tg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Q = {}, S$ = {
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
  })(tg, function() {
    var n = 1e3, o = 6e4, s = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", i = "week", d = "month", u = "quarter", a = "year", f = "date", y = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
      var C = ["th", "st", "nd", "rd"], x = R % 100;
      return "[" + R + (C[(x - 20) % 10] || C[x] || C[0]) + "]";
    } }, w = function(R, C, x) {
      var D = String(R);
      return !D || D.length >= C ? R : "" + Array(C + 1 - D.length).join(x) + R;
    }, $ = { s: w, z: function(R) {
      var C = -R.utcOffset(), x = Math.abs(C), D = Math.floor(x / 60), M = x % 60;
      return (C <= 0 ? "+" : "-") + w(D, 2, "0") + ":" + w(M, 2, "0");
    }, m: function R(C, x) {
      if (C.date() < x.date())
        return -R(x, C);
      var D = 12 * (x.year() - C.year()) + (x.month() - C.month()), M = C.clone().add(D, d), O = x - M < 0, P = C.clone().add(D + (O ? -1 : 1), d);
      return +(-(D + (x - M) / (O ? M - P : P - M)) || 0);
    }, a: function(R) {
      return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
    }, p: function(R) {
      return { M: d, y: a, w: i, d: h, D: f, h: _, m: c, s: l, ms: r, Q: u }[R] || String(R || "").toLowerCase().replace(/s$/, "");
    }, u: function(R) {
      return R === void 0;
    } }, S = "en", A = {};
    A[S] = g;
    var E = function(R) {
      return R instanceof G;
    }, v = function R(C, x, D) {
      var M;
      if (!C)
        return S;
      if (typeof C == "string") {
        var O = C.toLowerCase();
        A[O] && (M = O), x && (A[O] = x, M = O);
        var P = C.split("-");
        if (!M && P.length > 1)
          return R(P[0]);
      } else {
        var U = C.name;
        A[U] = C, M = U;
      }
      return !D && M && (S = M), M || !D && S;
    }, k = function(R, C) {
      if (E(R))
        return R.clone();
      var x = typeof C == "object" ? C : {};
      return x.date = R, x.args = arguments, new G(x);
    }, N = $;
    N.l = v, N.i = E, N.w = function(R, C) {
      return k(R, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var G = function() {
      function R(x) {
        this.$L = v(x.locale, null, !0), this.parse(x);
      }
      var C = R.prototype;
      return C.parse = function(x) {
        this.$d = function(D) {
          var M = D.date, O = D.utc;
          if (M === null)
            return new Date(NaN);
          if (N.u(M))
            return new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var P = M.match(p);
            if (P) {
              var U = P[2] - 1 || 0, V = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], U, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V)) : new Date(P[1], U, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V);
            }
          }
          return new Date(M);
        }(x), this.$x = x.x || {}, this.init();
      }, C.init = function() {
        var x = this.$d;
        this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
      }, C.$utils = function() {
        return N;
      }, C.isValid = function() {
        return this.$d.toString() !== y;
      }, C.isSame = function(x, D) {
        var M = k(x);
        return this.startOf(D) <= M && M <= this.endOf(D);
      }, C.isAfter = function(x, D) {
        return k(x) < this.startOf(D);
      }, C.isBefore = function(x, D) {
        return this.endOf(D) < k(x);
      }, C.$g = function(x, D, M) {
        return N.u(x) ? this[D] : this.set(M, x);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(x, D) {
        var M = this, O = !!N.u(D) || D, P = N.p(x), U = function(lt, X) {
          var ct = N.w(M.$u ? Date.UTC(M.$y, X, lt) : new Date(M.$y, X, lt), M);
          return O ? ct : ct.endOf(h);
        }, V = function(lt, X) {
          return N.w(M.toDate()[lt].apply(M.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), M);
        }, z = this.$W, Z = this.$M, kt = this.$D, B = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? U(1, 0) : U(31, 11);
          case d:
            return O ? U(1, Z) : U(0, Z + 1);
          case i:
            var J = this.$locale().weekStart || 0, $t = (z < J ? z + 7 : z) - J;
            return U(O ? kt - $t : kt + (6 - $t), Z);
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
        var M, O = N.p(x), P = "set" + (this.$u ? "UTC" : ""), U = (M = {}, M[h] = P + "Date", M[f] = P + "Date", M[d] = P + "Month", M[a] = P + "FullYear", M[_] = P + "Hours", M[c] = P + "Minutes", M[l] = P + "Seconds", M[r] = P + "Milliseconds", M)[O], V = O === h ? this.$D + (D - this.$W) : D;
        if (O === d || O === a) {
          var z = this.clone().set(f, 1);
          z.$d[U](V), z.init(), this.$d = z.set(f, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          U && this.$d[U](V);
        return this.init(), this;
      }, C.set = function(x, D) {
        return this.clone().$set(x, D);
      }, C.get = function(x) {
        return this[N.p(x)]();
      }, C.add = function(x, D) {
        var M, O = this;
        x = Number(x);
        var P = N.p(D), U = function(Z) {
          var kt = k(O);
          return N.w(kt.date(kt.date() + Math.round(Z * x)), O);
        };
        if (P === d)
          return this.set(d, this.$M + x);
        if (P === a)
          return this.set(a, this.$y + x);
        if (P === h)
          return U(1);
        if (P === i)
          return U(7);
        var V = (M = {}, M[c] = o, M[_] = s, M[l] = n, M)[P] || 1, z = this.$d.getTime() + x * V;
        return N.w(z, this);
      }, C.subtract = function(x, D) {
        return this.add(-1 * x, D);
      }, C.format = function(x) {
        var D = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || y;
        var O = x || "YYYY-MM-DDTHH:mm:ssZ", P = N.z(this), U = this.$H, V = this.$m, z = this.$M, Z = M.weekdays, kt = M.months, B = function(X, ct, Dt, Pt) {
          return X && (X[ct] || X(D, O)) || Dt[ct].slice(0, Pt);
        }, J = function(X) {
          return N.s(U % 12 || 12, X, "0");
        }, $t = M.meridiem || function(X, ct, Dt) {
          var Pt = X < 12 ? "AM" : "PM";
          return Dt ? Pt.toLowerCase() : Pt;
        }, lt = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: N.s(z + 1, 2, "0"), MMM: B(M.monthsShort, z, kt, 3), MMMM: B(kt, z), D: this.$D, DD: N.s(this.$D, 2, "0"), d: String(this.$W), dd: B(M.weekdaysMin, this.$W, Z, 2), ddd: B(M.weekdaysShort, this.$W, Z, 3), dddd: Z[this.$W], H: String(U), HH: N.s(U, 2, "0"), h: J(1), hh: J(2), a: $t(U, V, !0), A: $t(U, V, !1), m: String(V), mm: N.s(V, 2, "0"), s: String(this.$s), ss: N.s(this.$s, 2, "0"), SSS: N.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(X, ct) {
          return ct || lt[X] || P.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(x, D, M) {
        var O, P = N.p(D), U = k(x), V = (U.utcOffset() - this.utcOffset()) * o, z = this - U, Z = N.m(this, U);
        return Z = (O = {}, O[a] = Z / 12, O[d] = Z, O[u] = Z / 3, O[i] = (z - V) / 6048e5, O[h] = (z - V) / 864e5, O[_] = z / s, O[c] = z / o, O[l] = z / n, O)[P] || z, M ? Z : N.a(Z);
      }, C.daysInMonth = function() {
        return this.endOf(d).$D;
      }, C.$locale = function() {
        return A[this.$L];
      }, C.locale = function(x, D) {
        if (!x)
          return this.$L;
        var M = this.clone(), O = v(x, D, !0);
        return O && (M.$L = O), M;
      }, C.clone = function() {
        return N.w(this.$d, this);
      }, C.toDate = function() {
        return new Date(this.valueOf());
      }, C.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, C.toISOString = function() {
        return this.$d.toISOString();
      }, C.toString = function() {
        return this.$d.toUTCString();
      }, R;
    }(), j = G.prototype;
    return k.prototype = j, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", f]].forEach(function(R) {
      j[R[1]] = function(C) {
        return this.$g(C, R[0], R[1]);
      };
    }), k.extend = function(R, C) {
      return R.$i || (R(C, G, k), R.$i = !0), k;
    }, k.locale = v, k.isDayjs = E, k.unix = function(R) {
      return k(1e3 * R);
    }, k.en = A[S], k.Ls = A, k.p = {}, k;
  });
})(S$);
const ka = (t = 0, e = 0) => {
  const n = [];
  for (let o = t; o <= e; o++)
    n.push(o);
  return n;
}, eg = (t, e) => {
  const n = Math.ceil(t.length / e);
  return new Array(e).fill({}).map((o, s) => t.slice(s * n, (s + 1) * n));
}, C$ = (t) => {
  const { format: e, minDate: n, maxDate: o, tagDate: s, DATEROWCOUNT: r, showOtherMonth: l, clickDay: c, selectedDate: _, handleChangePanel: h, showToday: i, handleChange: d, clickToday: u } = t, a = (N) => Q(N).isValid() ? Q(N).add(1, "months").format(e) : "", f = (N) => Q(N).isValid() ? Q(N).subtract(1, "months").format(e) : "", y = () => {
    const N = f(_);
    d(N, !1);
  }, p = () => {
    const N = a(_);
    d(N, !1);
  }, m = () => {
    d("", !0);
  }, g = () => {
    d(_, !0);
  }, w = (N, G, j, R) => {
    const C = Q(), x = Q(_), D = new Array(N);
    for (let M = 0; M < N; M++) {
      const O = G + M + 1, P = j.set("date", O), U = R && !l ? !0 : n && P.isBefore(n, "date") || o && P.isAfter(o, "date");
      D[M] = {
        isSelected: x.isSame(j.set("date", O), "date"),
        isToday: C.isSame(P, "date"),
        isDisable: !!U,
        isTag: !!(s != null && s.includes(P.format(e))),
        date: P,
        isOtherMonth: R,
        onClick: () => U ? {} : c(P)
      };
    }
    return D;
  }, $ = () => {
    const N = Q(_), G = Q(), j = _ ? N : G, R = j.set("date", 1).day(), C = R === 0 ? 6 : R - 1, x = j.subtract(1, "month"), M = Number(x.endOf("month").get("date")) - C;
    return w(C, M, x, !0);
  }, S = () => {
    const N = Q(_), G = Q(), j = _ ? N : G, R = j.set("date", 1).day(), C = R === 0 ? 6 : R - 1, x = j.endOf("month").get("date"), D = j.add(1, "month"), M = 7 * 6 % (C + x);
    return w(M, 0, D, !0);
  }, A = () => {
    const N = _, G = Q(), j = _ ? Q(N) : G, R = j.endOf("month").get("date"), C = w(R, 0, j, !1), x = $(), D = S(), M = [...x, ...C, ...D];
    return eg(M, r);
  }, E = ["一", "二", "三", "四", "五", "六", "日"], v = A(), k = _ || Q().format(e);
  return /* @__PURE__ */ K("div", { className: F("datepicker-calendar-day"), children: [
    /* @__PURE__ */ K("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ K("div", { class: "flex", children: /* @__PURE__ */ K("button", { type: "button", className: "btn ghost", onClick: () => h("year"), children: [
        /* @__PURE__ */ K("span", { children: Q(k).format("YYYY 年 MM 月") }),
        /* @__PURE__ */ K("span", { class: "caret" })
      ] }) }),
      /* @__PURE__ */ K("div", { class: "flex", children: [
        i && /* @__PURE__ */ K("button", { type: "button", className: "btn ghost", onClick: () => {
          u();
        }, children: "今天" }),
        /* @__PURE__ */ K("button", { type: "button", className: "btn ghost", onClick: () => y(), children: /* @__PURE__ */ K("i", { className: "icon icon-angle-left" }) }),
        /* @__PURE__ */ K("button", { type: "button", className: "btn ghost", onClick: () => p(), children: /* @__PURE__ */ K("i", { className: "icon icon-angle-right" }) })
      ] })
    ] }),
    /* @__PURE__ */ K("table", { className: "datepicker-calendar-table not-hide-datepicker", children: [
      /* @__PURE__ */ K("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ K("tr", { children: E.map((N, G) => /* @__PURE__ */ K("th", { children: N }, G)) }) }),
      /* @__PURE__ */ K("tbody", { className: "datepicker-calendar-tbody", children: v.map((N, G) => /* @__PURE__ */ K("tr", { children: N.map((j, R) => {
        const C = ["text-center"];
        return j.isToday && C.push("datepicker-calendar-today"), j.isSelected && C.push("datepicker-calendar-selected-date"), j.isOtherMonth && C.push("datepicker-calendar-other-month"), j.isTag && C.push("datepicker-calendar-tag"), /* @__PURE__ */ K("td", { className: F(C), children: /* @__PURE__ */ K("div", { className: F("btn", "ghost", "datepicker-calendar-date", j.isDisable ? "disabled" : ""), onClick: j.onClick, children: !l && j.isOtherMonth ? "" : Q(j.date).format("DD") }) }, R);
      }) }, G)) })
    ] }),
    /* @__PURE__ */ K("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ K("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ K("span", { children: "清除" }) }),
      /* @__PURE__ */ K("button", { type: "button", className: "btn ghost text-primary", onClick: g, children: /* @__PURE__ */ K("span", { children: "确认" }) })
    ] })
  ] });
};
const E$ = (t) => {
  const { format: e, selectedDate: n, minDate: o, maxDate: s, year: r, handleChangeMonth: l } = t, c = Q(o).format("M"), _ = Q(s).format("M"), h = eg(ka(1, 12), 3), i = (d, u) => {
    u || l(d);
  };
  return /* @__PURE__ */ K("div", { className: F("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ K("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ K("tbody", { className: "datepicker-calendar-month-table-body", children: h.map((d, u) => /* @__PURE__ */ K("tr", { children: d.map((a, f) => {
    const y = ["text-center"], p = Q(`${r}-${a}-01`).format(e), m = !!(c && Q(n).isBefore(c) || _ && Q(n).isBefore(_));
    return /* @__PURE__ */ K("td", { className: F(y), children: /* @__PURE__ */ K("div", { className: F("btn", "size-sm", "ghost", "datepicker-calendar-month", m ? "disabled" : ""), onClick: () => {
      i(p, m);
    }, children: [
      Q(p).format("MM"),
      " 月"
    ] }) }, f);
  }) }, u)) }) }) });
}, A$ = (t) => {
  const { selectedDate: e, handleChangeMonth: n } = t;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = Q(e).year(), s = [...ka(o - 100, o), ...ka(o + 1, o + 100)], r = (l, c) => {
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
  return /* @__PURE__ */ K("div", { class: "datepicker-accordion scroll-smooth not-hide-datepicker", children: /* @__PURE__ */ K("ul", { children: s.map((l, c) => /* @__PURE__ */ K("li", { id: o === l ? "selected" : "", children: [
    /* @__PURE__ */ K("div", { class: "datepicker-accordion-title", onClick: (_) => r(_, l), children: l }),
    /* @__PURE__ */ K("div", { className: F("datepicker-accordion-content", o === l ? "" : "hidden"), children: Pr(E$, {
      ...t,
      year: l.toString(),
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class T$ extends nr {
  constructor() {
    super(...arguments);
    L(this, "DATEROWCOUNT", 6);
    L(this, "ref", v$());
    L(this, "state", {
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
    return this.state.type === "day" ? Pr(C$, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : Pr(A$, {
      ...this.props,
      selectedDate: this.state.selectedDate,
      handleChangeMonth: this.handleChangeMonth.bind(this)
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ K("div", { className: F("datepicker-calendar", n), ref: this.ref, children: this.renderPanel() });
  }
}
function Ei(t) {
  return t.split("-")[1];
}
function p_(t) {
  return t === "y" ? "height" : "width";
}
function yo(t) {
  return t.split("-")[0];
}
function Pc(t) {
  return ["top", "bottom"].includes(yo(t)) ? "x" : "y";
}
function vf(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Pc(e), _ = p_(c), h = o[_] / 2 - s[_] / 2, i = yo(e), d = c === "x";
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
const M$ = async (t, e, n) => {
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
  } = vf(h, o, _), u = o, a = {}, f = 0;
  for (let y = 0; y < c.length; y++) {
    const {
      name: p,
      fn: m
    } = c[y], {
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
      } = vf(h, u, _)), y = -1;
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
function L$(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ng(t) {
  return typeof t != "number" ? L$(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function js(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function N$(t, e) {
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
  } = e, f = ng(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = js(await r.getClippingRect({
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
  }, S = js(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const R$ = Math.min, D$ = Math.max;
function P$(t, e, n) {
  return D$(t, R$(e, n));
}
const O$ = (t) => ({
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
    const h = ng(o), i = {
      x: s,
      y: r
    }, d = Pc(l), u = p_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[y], E = w / 2 - a[u] / 2 + $, v = P$(S, E, A), N = Ei(l) != null && E != v && c.reference[u] / 2 - (E < S ? h[f] : h[y]) - a[u] / 2 < 0 ? E < S ? S - E : A - E : 0;
    return {
      [d]: i[d] - N,
      data: {
        [d]: v,
        centerOffset: E - v
      }
    };
  }
}), H$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function zs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => H$[e]);
}
function W$(t, e, n) {
  n === void 0 && (n = !1);
  const o = Ei(t), s = Pc(t), r = p_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = zs(l)), {
    main: l,
    cross: zs(l)
  };
}
const I$ = {
  start: "end",
  end: "start"
};
function xa(t) {
  return t.replace(/start|end/g, (e) => I$[e]);
}
function U$(t) {
  const e = zs(t);
  return [xa(t), e, xa(e)];
}
function F$(t, e, n) {
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
function B$(t, e, n, o) {
  const s = Ei(t);
  let r = F$(yo(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(xa)))), r;
}
const j$ = function(t) {
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
        ...y
      } = t, p = yo(o), m = yo(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [zs(l)] : U$(l));
      !d && a !== "none" && w.push(...B$(l, f, a, g));
      const $ = [l, ...w], S = await N$(e, y), A = [];
      let E = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: N,
          cross: G
        } = W$(o, r, g);
        A.push(S[N], S[G]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var v;
        const N = (((v = s.flip) == null ? void 0 : v.index) || 0) + 1, G = $[N];
        if (G)
          return {
            data: {
              index: N,
              overflows: E
            },
            reset: {
              placement: G
            }
          };
        let j = "bottom";
        switch (u) {
          case "bestFit": {
            var k;
            const R = (k = E.map((C) => [C, C.overflows.filter((x) => x > 0).reduce((x, D) => x + D, 0)]).sort((C, x) => C[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            R && (j = R);
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
async function z$(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = yo(n), c = Ei(n), _ = Pc(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const V$ = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await z$(e, t);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
function qt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function fe(t) {
  return qt(t).getComputedStyle(t);
}
function sn(t) {
  return rg(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Hi;
function og() {
  if (Hi)
    return Hi;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Hi = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Hi) : navigator.userAgent;
}
function Ae(t) {
  return t instanceof qt(t).HTMLElement;
}
function te(t) {
  return t instanceof qt(t).Element;
}
function rg(t) {
  return t instanceof qt(t).Node;
}
function bf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = qt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Oc(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = fe(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function Y$(t) {
  return ["table", "td", "th"].includes(sn(t));
}
function m_(t) {
  const e = /firefox/i.test(og()), n = fe(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function ig() {
  return !/^((?!chrome|android).)*safari/i.test(og());
}
function g_(t) {
  return ["html", "body", "#document"].includes(sn(t));
}
const wf = Math.min, or = Math.max, Vs = Math.round;
function sg(t) {
  const e = fe(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = Vs(n) !== s || Vs(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function lg(t) {
  return te(t) ? t : t.contextElement;
}
const cg = {
  x: 1,
  y: 1
};
function On(t) {
  const e = lg(t);
  if (!Ae(e))
    return cg;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = sg(e);
  let l = (r ? Vs(n.width) : n.width) / o, c = (r ? Vs(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function An(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = lg(t);
  let _ = cg;
  e && (o ? te(o) && (_ = On(o)) : _ = On(t));
  const h = c ? qt(c) : window, i = !ig() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const y = qt(c), p = o && te(o) ? qt(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
      const g = On(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat($.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat($.paddingTop)) * g.y, d *= g.x, u *= g.y, a *= g.x, f *= g.y, d += w.x, u += w.y, m = qt(m).frameElement;
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
function fn(t) {
  return ((rg(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Hc(t) {
  return te(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function ag(t) {
  return An(fn(t)).left + Hc(t).scrollLeft;
}
function G$(t, e, n) {
  const o = Ae(e), s = fn(e), r = An(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((sn(e) !== "body" || Oc(s)) && (l = Hc(e)), Ae(e)) {
      const _ = An(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = ag(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Hr(t) {
  if (sn(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (bf(t) ? t.host : null) || // Fallback
    fn(t)
  );
  return bf(e) ? e.host : e;
}
function $f(t) {
  return !Ae(t) || fe(t).position === "fixed" ? null : t.offsetParent;
}
function q$(t) {
  let e = Hr(t);
  for (; Ae(e) && !g_(e); ) {
    if (m_(e))
      return e;
    e = Hr(e);
  }
  return null;
}
function kf(t) {
  const e = qt(t);
  let n = $f(t);
  for (; n && Y$(n) && fe(n).position === "static"; )
    n = $f(n);
  return n && (sn(n) === "html" || sn(n) === "body" && fe(n).position === "static" && !m_(n)) ? e : n || q$(t) || e;
}
function X$(t) {
  return sg(t);
}
function K$(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const s = Ae(n), r = fn(n);
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
  if ((s || !s && o !== "fixed") && ((sn(n) !== "body" || Oc(r)) && (l = Hc(n)), Ae(n))) {
    const h = An(n);
    c = On(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Z$(t, e) {
  const n = qt(t), o = fn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = ig();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function J$(t) {
  var e;
  const n = fn(t), o = Hc(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = or(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = or(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + ag(t);
  const _ = -o.scrollTop;
  return fe(s || n).direction === "rtl" && (c += or(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function _g(t) {
  const e = Hr(t);
  return g_(e) ? t.ownerDocument.body : Ae(e) && Oc(e) ? e : _g(e);
}
function rr(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = _g(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = qt(o);
  return s ? e.concat(r, r.visualViewport || [], Oc(o) ? o : []) : e.concat(o, rr(o));
}
function Q$(t, e) {
  const n = An(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Ae(t) ? On(t) : {
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
function xf(t, e, n) {
  return e === "viewport" ? js(Z$(t, n)) : te(e) ? Q$(e, n) : js(J$(fn(t)));
}
function tk(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = rr(t).filter((c) => te(c) && sn(c) !== "body"), s = null;
  const r = fe(t).position === "fixed";
  let l = r ? Hr(t) : t;
  for (; te(l) && !g_(l); ) {
    const c = fe(l), _ = m_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Hr(l);
  }
  return e.set(t, o), o;
}
function ek(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? tk(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = xf(e, i, s);
    return h.top = or(d.top, h.top), h.right = wf(d.right, h.right), h.bottom = wf(d.bottom, h.bottom), h.left = or(d.left, h.left), h;
  }, xf(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const nk = {
  getClippingRect: ek,
  convertOffsetParentRelativeRectToViewportRelativeRect: K$,
  isElement: te,
  getDimensions: X$,
  getOffsetParent: kf,
  getDocumentElement: fn,
  getScale: On,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || kf, r = this.getDimensions;
    return {
      reference: G$(e, await s(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => fe(t).direction === "rtl"
};
function ok(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...te(t) ? rr(t) : t.contextElement ? rr(t.contextElement) : [], ...rr(e)] : [];
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
    }), te(t) && !c && i.observe(t), !te(t) && t.contextElement && !c && i.observe(t.contextElement), i.observe(e);
  }
  let d, u = c ? An(t) : null;
  c && a();
  function a() {
    const f = An(t);
    u && (f.x !== u.x || f.y !== u.y || f.width !== u.width || f.height !== u.height) && n(), u = f, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var f;
    h.forEach((y) => {
      _ && y.removeEventListener("scroll", n), r && y.removeEventListener("resize", n);
    }), (f = i) == null || f.disconnect(), i = null, c && cancelAnimationFrame(d);
  };
}
const rk = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: nk,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return M$(t, e, {
    ...s,
    platform: r
  });
};
var Zn, Jn, Tt, bn, Qr, ti, ei, Sa, $l, ug, kl, fg, xl, hg, Sl, dg, Cl, pg, El, mg, Al, gg, Tl;
const pn = class extends oe {
  constructor() {
    super(...arguments);
    T(this, ei);
    T(this, $l);
    T(this, kl);
    T(this, xl);
    T(this, Sl);
    T(this, Cl);
    T(this, El);
    T(this, Al);
    T(this, Zn, void 0);
    T(this, Jn, 0);
    T(this, Tt, void 0);
    T(this, bn, void 0);
    T(this, Qr, void 0);
    T(this, ti, void 0);
    L(this, "hideLater", () => {
      b(this, Tl).call(this), H(this, Jn, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, Tl, () => {
      clearTimeout(b(this, Jn)), H(this, Jn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, bn)) == null ? void 0 : n.classList.contains(pn.CLASS_SHOW);
  }
  get datepicker() {
    return b(this, bn) || I(this, kl, fg).call(this);
  }
  get trigger() {
    return b(this, Qr) || this.element;
  }
  get elementShowClass() {
    return `with-${pn.NAME}-show`;
  }
  show(n) {
    return H(this, Qr, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(pn.CLASS_SHOW), this.datepicker.classList.add("fade"), I(this, El, mg).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = b(this, ti)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = b(this, bn)) == null || o.classList.remove(pn.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
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
let jt = pn;
Zn = new WeakMap(), Jn = new WeakMap(), Tt = new WeakMap(), bn = new WeakMap(), Qr = new WeakMap(), ti = new WeakMap(), ei = new WeakSet(), Sa = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, $l = new WeakSet(), ug = function() {
  const n = I(this, ei, Sa).call(this);
  return H(this, Tt, document.createElement("div")), b(this, Tt).style.position = "absolute", b(this, Tt).style.width = `${n}px`, b(this, Tt).style.height = `${n}px`, b(this, Tt).style.transform = "rotate(45deg)", b(this, Tt);
}, kl = new WeakSet(), fg = function() {
  const n = pn.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), k$(Pr(T$, { ...this.options }), o), this.options.arrow && o.append(I(this, $l, ug).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, bn, o), o;
}, xl = new WeakSet(), hg = function() {
  var l;
  const n = I(this, ei, Sa).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [V$(n), j$()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && b(this, Tt) && ((l = r.middleware) == null || l.push(O$({ element: b(this, Tt) }))), r;
}, Sl = new WeakSet(), dg = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Cl = new WeakSet(), pg = function(n) {
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
}, El = new WeakSet(), mg = function() {
  const n = I(this, xl, hg).call(this), o = I(this, Al, gg).call(this);
  H(this, ti, ok(o, this.datepicker, () => {
    rk(o, this.datepicker, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.datepicker.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = I(this, Sl, dg).call(this, _);
      if (l.arrow && b(this, Tt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(b(this, Tt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-b(this, Tt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...I(this, Cl, pg).call(this, _)
        });
      }
    });
  }));
}, Al = new WeakSet(), gg = function() {
  return b(this, Zn) || H(this, Zn, {
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
  }), b(this, Zn);
}, Tl = new WeakMap(), L(jt, "NAME", "datepicker"), L(jt, "CLASSNAME", "datepicker"), L(jt, "CLASS_SHOW", "show"), L(jt, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), L(jt, "DEFAULT", {
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
  var s, r;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, jt.MENU_SELECTOR), o = (r = e.closest) == null ? void 0 : r.call(e, ".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? jt.ensure(n).toggle() : o || jt.clear({ event: t });
});
const ik = (t) => {
  var o;
  const e = document.getElementsByClassName("with-datepicker-show")[0];
  if (!e)
    return;
  const n = (o = e.closest) == null ? void 0 : o.call(e, jt.MENU_SELECTOR);
  !n || !t.target.contains(n) || jt.clear({ event: t });
};
window.addEventListener("scroll", ik, !0);
function yg(t, e, n) {
  if (n) {
    t.setAttribute("class", F(e));
    return;
  }
  kc(t.getAttribute("class"), e).forEach(([o, s]) => {
    t.classList.toggle(o, s);
  });
}
function Ao(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, s]) => {
      Ao(t, o, s);
    });
  n !== void 0 && (t.style[e] = typeof n == "number" ? `${n}px` : n);
}
function Ys(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, s]) => {
      Ys(t, o, s);
    });
  n !== void 0 && (n === null ? t.removeAttribute(e) : t.setAttribute(e, n));
}
var wn, ni, Pe, Ml, Qn, es;
const ge = class extends oe {
  constructor() {
    super(...arguments);
    T(this, Qn);
    T(this, wn, 0);
    T(this, ni, void 0);
    T(this, Pe, void 0);
    T(this, Ml, (n) => {
      const o = n.target;
      (o.closest(ge.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(ge.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", b(this, Ml)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const s = n.clientWidth, r = n.clientHeight;
          (!b(this, Pe) || b(this, Pe)[0] !== s || b(this, Pe)[1] !== r) && (H(this, Pe, [s, r]), this.layout());
        });
        o.observe(n), H(this, ni, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = b(this, ni)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: s, backdrop: r, className: l, style: c } = this.options;
    return yg(o, [{
      "modal-trans": s,
      "modal-no-backdrop": !r
    }, ge.CLASS_SHOW, l]), Ao(o, {
      zIndex: `${ge.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), I(this, Qn, es).call(this, () => {
      o.classList.add(ge.CLASS_SHOWN), I(this, Qn, es).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(ge.CLASS_SHOWN), this.emit("hide", this), I(this, Qn, es).call(this, () => {
      this.modalElement.classList.remove(ge.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    o = o ?? this.options.size, Ys(s, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? Ys(s, "data-size", o) : o && (r.width = o), Ao(s, r), n = n ?? this.options.position ?? "fit";
    const l = s.clientWidth, c = s.clientHeight;
    H(this, Pe, [l, c]), typeof n == "function" && (n = n({ width: l, height: c }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), Ao(s, _), Ao(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Ot = ge;
wn = new WeakMap(), ni = new WeakMap(), Pe = new WeakMap(), Ml = new WeakMap(), Qn = new WeakSet(), es = function(n, o) {
  b(this, wn) && (clearTimeout(b(this, wn)), H(this, wn, 0)), n && (this.options.animation ? H(this, wn, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, L(Ot, "NAME", "Modal"), L(Ot, "EVENTS", !0), L(Ot, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), L(Ot, "CLASS_SHOW", "show"), L(Ot, "CLASS_SHOWN", "in"), L(Ot, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), L(Ot, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Ot.all.forEach((t) => {
    const e = t;
    e.isShown && e.options.responsive && e.layout();
  });
});
var Wc, it, vg, To, ir, Sf, Gs = {}, bg = [], sk = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ke(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function wg(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function lk(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Wc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ns(t, l, o, s, null);
}
function ns(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++vg };
  return s == null && it.vnode != null && it.vnode(r), r;
}
function ck() {
  return { current: null };
}
function Ic(t) {
  return t.children;
}
function Hn(t, e) {
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
function $g(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return $g(t);
  }
}
function Cf(t) {
  (!t.__d && (t.__d = !0) && ir.push(t) && !qs.__r++ || Sf !== it.debounceRendering) && ((Sf = it.debounceRendering) || setTimeout)(qs);
}
function qs() {
  for (var t; qs.__r = ir.length; )
    t = ir.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ir = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ke({}, r)).__v = r.__v + 1, y_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Wr(r), r.__h), Cg(o, r), r.__e != l && $g(r)));
    });
}
function kg(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || bg, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ns(null, a, null, null, a) : Array.isArray(a) ? ns(Ic, { children: a }, null, null, null) : a.__b > 0 ? ns(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      y_(t, a, u = u || Gs, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = xg(a, _, t) : _ = Sg(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Wr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Ag(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Eg(p[i], p[++i], p[++i]);
}
function xg(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? xg(o, e, n) : Sg(n, o, o, s, o.__e, e));
  return e;
}
function Sg(t, e, n, o, s, r) {
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
function ak(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Xs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Xs(t, r, e[r], n[r], o);
}
function Ef(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || sk.test(e) ? n : n + "px";
}
function Xs(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Ef(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ef(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Tf : Af, r) : t.removeEventListener(e, r ? Tf : Af, r);
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
function Af(t) {
  this.l[t.type + !1](it.event ? it.event(t) : t);
}
function Tf(t) {
  this.l[t.type + !0](it.event ? it.event(t) : t);
}
function y_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = it.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new Hn(p, g), i.constructor = v, i.render = uk), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ke({}, i.__s)), Ke(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = it.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ke(Ke({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Ic && h.key == null ? h.props.children : h, kg(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = _k(n.__e, e, n, o, s, r, l, _);
    (h = it.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), it.__e(k, e, n);
  }
}
function Cg(t, e) {
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
function _k(t, e, n, o, s, r, l, c) {
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
    if (r = r && Wc.call(t.childNodes), h = (d = n.props || Gs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (ak(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, kg(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Wr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && wg(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Xs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Xs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Eg(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    it.__e(o, n);
  }
}
function Ag(t, e, n) {
  var o, s;
  if (it.unmount && it.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Eg(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Ag(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || wg(t.__e), t.__ = t.__e = t.__d = void 0;
}
function uk(t, e, n) {
  return this.constructor(t, n);
}
function fk(t, e, n) {
  var o, s, r;
  it.__ && it.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], y_(e, t = (!o && n || e).__k = lk(Ic, null, [t]), s || Gs, Gs, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Wc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Cg(r, t);
}
Wc = bg.slice, it = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, vg = 0, To = function(t) {
  return t != null && t.constructor === void 0;
}, Hn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ke({}, this.state), typeof t == "function" && (t = t(Ke({}, n), this.props)), t && Ke(n, t), t != null && this.__v && (e && this._sb.push(e), Cf(this));
}, Hn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Cf(this));
}, Hn.prototype.render = Ic, ir = [], qs.__r = 0;
var hk = 0;
function xt(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --hk, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return it.vnode && it.vnode(_), _;
}
let dk = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
class Tg extends Hn {
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
    return To(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ xt("div", { className: "modal-header", children: /* @__PURE__ */ xt("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : To(e) ? e : /* @__PURE__ */ xt("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ xt(po, { ...e }) : null,
      n ? /* @__PURE__ */ xt("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ xt("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? To(e) ? e : /* @__PURE__ */ xt("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return To(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ xt("div", { className: "modal-footer", children: n ? /* @__PURE__ */ xt(po, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ xt("div", { className: F("modal-dialog", e), style: n, children: /* @__PURE__ */ xt("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
L(Tg, "defaultProps", { closeBtn: !0 });
var oi, to, ri;
class pk extends Hn {
  constructor() {
    super(...arguments);
    T(this, oi, ck());
    T(this, to, void 0);
    L(this, "state", {});
    T(this, ri, () => {
      var s, r;
      const n = (r = (s = b(this, oi).current) == null ? void 0 : s.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = b(this, to);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, c = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, c.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, to, o);
    });
  }
  componentDidMount() {
    b(this, ri).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = b(this, to)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ xt(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: b(this, oi),
        onLoad: b(this, ri)
      }
    );
  }
}
oi = new WeakMap(), to = new WeakMap(), ri = new WeakMap();
function mk(t, e) {
  const { custom: n, title: o, content: s } = e;
  return {
    body: s,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function gk(t, e) {
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
    body: n === "html" ? /* @__PURE__ */ xt("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: _ } }) : _
  };
}
async function yk(t, e) {
  const { url: n, custom: o, title: s } = e;
  return {
    title: s,
    ...o,
    body: /* @__PURE__ */ xt(pk, { url: n })
  };
}
const vk = {
  custom: mk,
  ajax: gk,
  iframe: yk
};
var ii, si, se, eo, os, Ll, Mg, li, Ca;
const br = class extends Ot {
  constructor() {
    super(...arguments);
    T(this, eo);
    T(this, Ll);
    T(this, li);
    T(this, ii, void 0);
    T(this, si, void 0);
    T(this, se, void 0);
  }
  get id() {
    return b(this, si);
  }
  get loading() {
    return this.modalElement.classList.contains(br.LOADING_CLASS);
  }
  get modalElement() {
    let n = b(this, ii);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), Ys(n, {
        id: o,
        style: this.options.style
      }), yg(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, ii, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, si, this.options.id || `modal-${dk()}`);
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
    b(this, se) && clearTimeout(b(this, se));
    const { modalElement: n, options: o } = this, { type: s, loadTimeout: r } = o, l = vk[s];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.classList.add(br.LOADING_CLASS), await I(this, Ll, Mg).call(this), r && H(this, se, window.setTimeout(() => {
      H(this, se, 0), I(this, li, Ca).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await I(this, li, Ca).call(this, this.options.failedTip) : c && typeof c == "object" && await I(this, eo, os).call(this, c), b(this, se) && (clearTimeout(b(this, se)), H(this, se, 0)), n.classList.remove(br.LOADING_CLASS), !0;
  }
};
let Mo = br;
ii = new WeakMap(), si = new WeakMap(), se = new WeakMap(), eo = new WeakSet(), os = function(n) {
  return new Promise((o) => {
    if (Array.isArray(n))
      return this.modalElement.innerHTML = n[0], o();
    const { afterRender: s, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), s == null || s(l), o();
      },
      ...r
    }, fk(
      /* @__PURE__ */ xt(Tg, { ...n }),
      this.modalElement
    );
  });
}, Ll = new WeakSet(), Mg = function() {
  const { loadingText: n } = this.options;
  return I(this, eo, os).call(this, {
    body: /* @__PURE__ */ xt("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ xt("span", { className: "spinner" }),
      n ? /* @__PURE__ */ xt("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, li = new WeakSet(), Ca = function(n) {
  if (n)
    return I(this, eo, os).call(this, {
      body: /* @__PURE__ */ xt("div", { className: "modal-load-failed", children: n })
    });
}, L(Mo, "LOADING_CLASS", "loading"), L(Mo, "DEFAULT", {
  ...Ot.DEFAULT,
  loadTimeout: 1e4
});
var Oe, Nl, Lg, Rl, Ng, Dl, Rg;
class sr extends oe {
  constructor() {
    super(...arguments);
    T(this, Nl);
    T(this, Rl);
    T(this, Dl);
    T(this, Oe, void 0);
  }
  get modal() {
    return b(this, Oe);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return I(this, Rl, Ng).call(this).show();
  }
  hide() {
    var n;
    (n = b(this, Oe)) == null || n.hide();
  }
}
Oe = new WeakMap(), Nl = new WeakSet(), Lg = function() {
  const {
    container: n,
    ...o
  } = this.options, s = o, r = this.element.getAttribute("href") || "";
  return s.type || (s.target || r[0] === "#" ? s.type = "static" : s.type = s.type || (s.url ? "iframe" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && r[0] !== "#" && (s.url = r), s;
}, Rl = new WeakSet(), Ng = function() {
  const n = I(this, Nl, Lg).call(this);
  let o = b(this, Oe);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Ot(I(this, Dl, Rg).call(this), n), H(this, Oe, o)) : (o = new Mo(this.container, n), H(this, Oe, o)), o;
}, Dl = new WeakSet(), Rg = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const s = o.getAttribute("href");
      s != null && s.startsWith("#") && (n = s);
    }
  }
  return this.container.querySelector(n || ".modal");
}, L(sr, "NAME", "ModalTrigger"), L(sr, "EVENTS", !0), L(sr, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (t) => {
  var o;
  const e = t.target, n = (o = e.closest) == null ? void 0 : o.call(e, sr.TOGGLE_SELECTOR);
  if (n) {
    const s = sr.ensure(n);
    s && s.show(), console.log("> modalTrigger", s);
  }
});
var ua;
let bk = (ua = class extends ho {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = F(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, L(ua, "NAME", "nav"), ua);
class Mf extends At {
}
L(Mf, "NAME", "nav"), L(Mf, "Component", bk);
var Ea;
Ea = { __e: function(t, e, n, o) {
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
var wk = 0;
function nn(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --wk, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Ea.vnode && Ea.vnode(_), _;
}
function Ir(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function $k({
  key: t,
  type: e,
  btnType: n,
  page: o,
  format: s,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = Ir(r, o);
  return c.text === void 0 && !c.icon && s && (c.text = typeof s == "function" ? s(_) : Wt(s, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : Wt(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ nn(_e, { type: n, ...c });
}
const ye = 24 * 60 * 60 * 1e3, Ut = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), Ai = (t, e = new Date()) => (t = Ut(t), e = Ut(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), Lf = (t, e = new Date()) => Ut(t).getFullYear() === Ut(e).getFullYear(), kk = (t, e = new Date()) => (t = Ut(t), e = Ut(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), cC = (t, e = new Date()) => {
  t = Ut(t), e = Ut(e);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(t.getTime() / n), s = Math.floor(e.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, aC = (t, e) => Ai(Ut(e), t), _C = (t, e) => Ai(Ut(e).getTime() - ye, t), uC = (t, e) => Ai(Ut(e).getTime() + ye, t), fC = (t, e) => Ai(Ut(e).getTime() - 2 * ye, t), Aa = (t, e = "yyyy-MM-dd hh:mm") => {
  t = Ut(t);
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
}, hC = (t, e, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = Aa(t, Lf(t) ? o.month : o.full);
  if (Ai(t, e))
    return s;
  const r = Aa(e, Lf(t, e) ? kk(t, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, dC = (t) => {
  const e = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return e - ye * 7;
    case "oneMonth":
      return e - ye * 31;
    case "threeMonth":
      return e - ye * 31 * 3;
    case "halfYear":
      return e - ye * 183;
    case "oneYear":
      return e - ye * 365;
    case "twoYear":
      return e - 2 * (ye * 365);
    default:
      return 0;
  }
}, Nf = (t, e, n = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, Nf(t, "day", n, o);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, Nf(t, "day", n, o);
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
function xk({
  key: t,
  type: e,
  page: n,
  text: o = "",
  pagerInfo: s,
  children: r,
  ...l
}) {
  const c = Ir(s, n);
  return o = typeof o == "function" ? o(c) : Wt(o, c), /* @__PURE__ */ nn(Qh, { ...l, children: [
    r,
    o
  ] });
}
function Sk({
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
  const _ = { ...c, square: !0 }, h = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ nn(_e, { type: n, ..._ })), i = (u, a) => {
    const f = [];
    for (let y = u; y <= a; y++) {
      _.text = y, delete _.icon, _.disabled = !1;
      const p = Ir(s, y);
      l && (_.url = typeof l == "function" ? l(p) : Wt(l, p)), f.push(/* @__PURE__ */ nn(_e, { type: n, ..._, onClick: r }));
    }
    return f;
  };
  let d = [];
  return d = [...i(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= o ? d = [...d, ...i(2, s.pageTotal)] : s.page < o - 2 ? d = [...d, ...i(2, o - 2), h(), ...i(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - o + 3 ? d = [...d, h(), ...i(s.pageTotal - o + 3, s.pageTotal)] : d = [...d, h(), ...i(s.page - Math.ceil((o - 4) / 2), s.page + Math.floor((o - 4) / 2)), h(), ...i(s.pageTotal, s.pageTotal)]), d;
}
function Ck({
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
      url: typeof n == "function" ? n(h) : Wt(n, h)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(e) : Wt(l, e), s.menu = { ...s.menu, className: F((c = s.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ nn(fp, { type: "dropdown", dropdown: s, ...r });
}
function Ek({
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
  const u = (y) => {
    var p;
    d = Number((p = y.target) == null ? void 0 : p.value) || 1, d = d > s.pageTotal ? s.pageTotal : d;
  }, a = (y) => {
    if (!(y != null && y.target))
      return;
    d = d <= s.pageTotal ? d : s.pageTotal;
    const p = Ir(s, d);
    c && !c({ info: p, event: y }) || (y.target.href = i.url = typeof _ == "function" ? _(p) : Wt(_, p));
  }, f = Ir(s, e || 0);
  return i.url = typeof _ == "function" ? _(f) : Wt(_, f), i.className = F("input-group-addon", i.className), /* @__PURE__ */ nn("div", { className: F("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ nn("input", { type: "number", class: "form-control", max: s.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ nn(_e, { type: o, ...i, onClick: a })
  ] });
}
var Co;
let Ak = (Co = class extends po {
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
}, L(Co, "NAME", "pager"), L(Co, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), L(Co, "ItemComponents", {
  ...po.ItemComponents,
  link: $k,
  info: xk,
  nav: Sk,
  "size-menu": Ck,
  goto: Ek
}), Co);
class Rf extends At {
}
L(Rf, "NAME", "pager"), L(Rf, "Component", Ak);
var Dg, yt, Pg, lr, Df, Og = {}, Hg = [], Tk = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Wg(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ia(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Pg };
  return s == null && yt.vnode != null && yt.vnode(r), r;
}
function Mk() {
  return { current: null };
}
function v_(t) {
  return t.children;
}
function on(t, e) {
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
function Ig(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ig(t);
  }
}
function Pf(t) {
  (!t.__d && (t.__d = !0) && lr.push(t) && !Ks.__r++ || Df !== yt.debounceRendering) && ((Df = yt.debounceRendering) || setTimeout)(Ks);
}
function Ks() {
  for (var t; Ks.__r = lr.length; )
    t = lr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), lr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ze({}, r)).__v = r.__v + 1, jg(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ur(r), r.__h), Nk(o, r), r.__e != l && Ig(r)));
    });
}
function Ug(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || Hg, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ia(null, a, null, null, a) : Array.isArray(a) ? ia(v_, { children: a }, null, null, null) : a.__b > 0 ? ia(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      jg(t, a, u = u || Og, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Fg(a, _, t) : _ = Bg(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Ur(u));
    }
  for (n.__e = y, i = g; i--; )
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
function Lk(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Zs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Zs(t, r, e[r], n[r], o);
}
function Of(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Tk.test(e) ? n : n + "px";
}
function Zs(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Of(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Of(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Wf : Hf, r) : t.removeEventListener(e, r ? Wf : Hf, r);
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
function Hf(t) {
  this.l[t.type + !1](yt.event ? yt.event(t) : t);
}
function Wf(t) {
  this.l[t.type + !0](yt.event ? yt.event(t) : t);
}
function jg(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = yt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new on(p, g), i.constructor = v, i.render = Dk), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ze({}, i.__s)), Ze(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = yt.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ze(Ze({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === v_ && h.key == null ? h.props.children : h, Ug(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Rk(n.__e, e, n, o, s, r, l, _);
    (h = yt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), yt.__e(k, e, n);
  }
}
function Nk(t, e) {
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
function Rk(t, e, n, o, s, r, l, c) {
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
    if (r = r && Dg.call(t.childNodes), h = (d = n.props || Og).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Lk(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Ug(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ur(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Wg(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Zs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Zs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function zg(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    yt.__e(o, n);
  }
}
function Vg(t, e, n) {
  var o, s;
  if (yt.unmount && yt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || zg(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Vg(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Wg(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Dk(t, e, n) {
  return this.constructor(t, n);
}
Dg = Hg.slice, yt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Pg = 0, on.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof t == "function" && (t = t(Ze({}, n), this.props)), t && Ze(n, t), t != null && this.__v && (e && this._sb.push(e), Pf(this));
}, on.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Pf(this));
}, on.prototype.render = v_, lr = [], Ks.__r = 0;
var Pk = 0;
function et(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Pk, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return yt.vnode && yt.vnode(_), _;
}
let Ok = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Pl;
class Hk extends on {
  constructor() {
    super(...arguments);
    T(this, Pl, (n) => {
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
    return c.length ? i = /* @__PURE__ */ et("div", { className: "picker-multi-selections", children: c.map((d, u) => /* @__PURE__ */ et("div", { className: "picker-multi-selection", children: [
      d.text ?? d.value,
      /* @__PURE__ */ et("div", { className: "picker-deselect-btn btn", onClick: b(this, Pl), "data-idx": u, children: /* @__PURE__ */ et("span", { className: "close" }) })
    ] })) }) : i = /* @__PURE__ */ et("span", { className: "picker-select-placeholder", children: r }), /* @__PURE__ */ et(
      "div",
      {
        className: F("picker-select picker-select-multi form-control", n, { disabled: s, focused: l }),
        style: o,
        onClick: _,
        children: [
          i,
          h,
          /* @__PURE__ */ et("span", { class: "caret" })
        ]
      }
    );
  }
}
Pl = new WeakMap();
var Ol;
class Wk extends on {
  constructor() {
    super(...arguments);
    T(this, Ol, (n) => {
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
    } = this.props, [d] = c, u = d ? /* @__PURE__ */ et("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ et("span", { className: "picker-select-placeholder", children: r }), a = d && _ ? /* @__PURE__ */ et("button", { type: "button", className: "btn picker-deselect-btn", onClick: b(this, Ol), children: /* @__PURE__ */ et("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ et(
      "div",
      {
        className: F("picker-select picker-select-single form-control", n, { disabled: s, focused: l }),
        style: o,
        onClick: h,
        children: [
          u,
          i,
          a,
          /* @__PURE__ */ et("span", { class: "caret" })
        ]
      }
    );
  }
}
Ol = new WeakMap();
var Hl, Yg, ci, Wl, ai, Il;
class Ik extends on {
  constructor() {
    super(...arguments);
    T(this, Hl);
    L(this, "state", { keys: "", shown: !1 });
    T(this, ci, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    T(this, Wl, ({ item: n }) => {
      const o = this.props.items.find((s) => s.value === n.key);
      o && this.props.onSelectItem(o);
    });
    T(this, ai, (n) => {
      this.setState({ keys: n.target.value });
    });
    T(this, Il, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", b(this, ci)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", b(this, ci));
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
    return /* @__PURE__ */ et("div", { className: F("picker-menu", s, { shown: d, "has-search": a }), id: `picker-menu-${n}`, style: { maxHeight: l, maxWidth: c, width: _, ...r }, children: [
      o ? /* @__PURE__ */ et("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ et("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: i, value: u, onChange: b(this, ai), onInput: b(this, ai) }),
        a ? /* @__PURE__ */ et("button", { type: "button", className: "btn picker-menu-search-clear", onClick: b(this, Il), children: /* @__PURE__ */ et("span", { className: "close" }) }) : /* @__PURE__ */ et("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ et(za, { className: "picker-menu-list", items: I(this, Hl, Yg).call(this), onClickItem: b(this, Wl), ...h })
    ] });
  }
}
Hl = new WeakSet(), Yg = function() {
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
      typeof u == "string" && r.length && (u = /* @__PURE__ */ et("span", { dangerouslySetInnerHTML: { __html: r.reduce((a, f) => a.replace(f, `<span class="picker-menu-item-match">${f}</span>`), u) } })), l.push({
        key: _,
        active: s.has(_),
        text: u,
        ...d
      });
    }
    return l;
  }, []);
}, ci = new WeakMap(), Wl = new WeakMap(), ai = new WeakMap(), Il = new WeakMap();
function If(t) {
  const e = /* @__PURE__ */ new Set();
  return t.reduce((n, o) => (e.has(o) || (e.add(o), n.push(o)), n), []);
}
var fa, _i, ui, fi, no, rs, hi, Ta, Ul, Gg, Fl, qg, Bl, jl, zl, Vl, Yl, Xg;
let Uk = (fa = class extends on {
  constructor(n) {
    super(n);
    T(this, no);
    T(this, hi);
    T(this, Ul);
    T(this, Fl);
    T(this, Yl);
    T(this, _i, 0);
    T(this, ui, Ok());
    T(this, fi, Mk());
    T(this, Bl, (n, o) => {
      const { valueList: s } = this, r = new Set(n.map((c) => c.value)), l = s.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    T(this, jl, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    T(this, zl, () => {
      this.close();
    });
    T(this, Vl, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = b(this, fi).current) == null || o.hide();
      });
    });
    this.state = {
      value: I(this, Ul, Gg).call(this, n.defaultValue) ?? "",
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
    return I(this, hi, Ta).call(this, this.state.value);
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
      const s = ++I_(this, _i)._;
      if (await I(this, no, rs).call(this, { loading: !0, items: [] }), n = await n(), b(this, _i) !== s)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await I(this, no, rs).call(this, o), n;
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
    await I(this, no, rs).call(this, { open: n }), n && this.loadItemList();
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
    } = this.props, l = r ? Hk : Wk;
    return /* @__PURE__ */ et("div", { className: F("picker", n), style: o, id: `picker-${b(this, ui)}`, children: [
      /* @__PURE__ */ et(l, { ...I(this, Fl, qg).call(this) }),
      s,
      this.state.open ? /* @__PURE__ */ et(Ik, { ...I(this, Yl, Xg).call(this), ref: b(this, fi) }) : null
    ] });
  }
}, _i = new WeakMap(), ui = new WeakMap(), fi = new WeakMap(), no = new WeakSet(), rs = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, hi = new WeakSet(), Ta = function(n) {
  return typeof n == "string" ? If(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? If(n) : [];
}, Ul = new WeakSet(), Gg = function(n) {
  const o = I(this, hi, Ta).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, Fl = new WeakSet(), qg = function() {
  const { placeholder: n, disabled: o } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: b(this, jl),
    onDeselect: b(this, Bl)
  };
}, Bl = new WeakMap(), jl = new WeakMap(), zl = new WeakMap(), Vl = new WeakMap(), Yl = new WeakSet(), Xg = function() {
  const { search: n, menuClass: o, menuWidth: s, menuStyle: r, menuMaxHeight: l, menuMaxWidth: c } = this.props, { items: _ } = this.state;
  return {
    id: b(this, ui),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: s,
    maxHeight: l,
    maxWidth: c,
    onRequestHide: b(this, zl),
    onSelectItem: b(this, Vl)
  };
}, L(fa, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), fa);
class Uf extends At {
}
L(Uf, "NAME", "picker"), L(Uf, "Component", Uk);
var Uc, st, Kg, cr, Ff, Js = {}, Zg = [], Fk = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Je(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Jg(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Qg(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Uc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return is(t, l, o, s, null);
}
function is(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Kg };
  return s == null && st.vnode != null && st.vnode(r), r;
}
function Wi() {
  return { current: null };
}
function Fc(t) {
  return t.children;
}
function ar(t, e) {
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
function Bf(t) {
  (!t.__d && (t.__d = !0) && cr.push(t) && !Qs.__r++ || Ff !== st.debounceRendering) && ((Ff = st.debounceRendering) || setTimeout)(Qs);
}
function Qs() {
  for (var t; Qs.__r = cr.length; )
    t = cr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), cr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Je({}, r)).__v = r.__v + 1, b_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Fr(r), r.__h), ry(o, r), r.__e != l && ty(r)));
    });
}
function ey(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || Zg, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? is(null, a, null, null, a) : Array.isArray(a) ? is(Fc, { children: a }, null, null, null) : a.__b > 0 ? is(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      b_(t, a, u = u || Js, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = ny(a, _, t) : _ = oy(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Fr(u));
    }
  for (n.__e = y, i = g; i--; )
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
function Bk(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || tl(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || tl(t, r, e[r], n[r], o);
}
function jf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Fk.test(e) ? n : n + "px";
}
function tl(t, e, n, o, s) {
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
function b_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = st.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new ar(p, g), i.constructor = v, i.render = zk), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Je({}, i.__s)), Je(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = st.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Je(Je({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === Fc && h.key == null ? h.props.children : h, ey(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = jk(n.__e, e, n, o, s, r, l, _);
    (h = st.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), st.__e(k, e, n);
  }
}
function ry(t, e) {
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
function jk(t, e, n, o, s, r, l, c) {
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
    if (r = r && Uc.call(t.childNodes), h = (d = n.props || Js).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Bk(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, ey(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Fr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Jg(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && tl(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && tl(t, "checked", f, d.checked, !1));
  }
  return t;
}
function iy(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    st.__e(o, n);
  }
}
function sy(t, e, n) {
  var o, s;
  if (st.unmount && st.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || iy(o, null, e)), (o = t.__c) != null) {
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
      o[s] && sy(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Jg(t.__e), t.__ = t.__e = t.__d = void 0;
}
function zk(t, e, n) {
  return this.constructor(t, n);
}
function Vk(t, e, n) {
  var o, s, r;
  st.__ && st.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], b_(e, t = (!o && n || e).__k = Qg(Fc, null, [t]), s || Js, Js, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Uc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), ry(r, t);
}
Uc = Zg.slice, st = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Kg = 0, ar.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Je({}, this.state), typeof t == "function" && (t = t(Je({}, n), this.props)), t && Je(n, t), t != null && this.__v && (e && this._sb.push(e), Bf(this));
}, ar.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Bf(this));
}, ar.prototype.render = Fc, cr = [], Qs.__r = 0;
var Yk = 0;
function Ft(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Yk, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return st.vnode && st.vnode(_), _;
}
var el = {}, Gk = {
  get exports() {
    return el;
  },
  set exports(t) {
    el = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(tg, function() {
    var n = 1e3, o = 6e4, s = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", i = "week", d = "month", u = "quarter", a = "year", f = "date", y = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
      var C = ["th", "st", "nd", "rd"], x = R % 100;
      return "[" + R + (C[(x - 20) % 10] || C[x] || C[0]) + "]";
    } }, w = function(R, C, x) {
      var D = String(R);
      return !D || D.length >= C ? R : "" + Array(C + 1 - D.length).join(x) + R;
    }, $ = { s: w, z: function(R) {
      var C = -R.utcOffset(), x = Math.abs(C), D = Math.floor(x / 60), M = x % 60;
      return (C <= 0 ? "+" : "-") + w(D, 2, "0") + ":" + w(M, 2, "0");
    }, m: function R(C, x) {
      if (C.date() < x.date())
        return -R(x, C);
      var D = 12 * (x.year() - C.year()) + (x.month() - C.month()), M = C.clone().add(D, d), O = x - M < 0, P = C.clone().add(D + (O ? -1 : 1), d);
      return +(-(D + (x - M) / (O ? M - P : P - M)) || 0);
    }, a: function(R) {
      return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
    }, p: function(R) {
      return { M: d, y: a, w: i, d: h, D: f, h: _, m: c, s: l, ms: r, Q: u }[R] || String(R || "").toLowerCase().replace(/s$/, "");
    }, u: function(R) {
      return R === void 0;
    } }, S = "en", A = {};
    A[S] = g;
    var E = function(R) {
      return R instanceof G;
    }, v = function R(C, x, D) {
      var M;
      if (!C)
        return S;
      if (typeof C == "string") {
        var O = C.toLowerCase();
        A[O] && (M = O), x && (A[O] = x, M = O);
        var P = C.split("-");
        if (!M && P.length > 1)
          return R(P[0]);
      } else {
        var U = C.name;
        A[U] = C, M = U;
      }
      return !D && M && (S = M), M || !D && S;
    }, k = function(R, C) {
      if (E(R))
        return R.clone();
      var x = typeof C == "object" ? C : {};
      return x.date = R, x.args = arguments, new G(x);
    }, N = $;
    N.l = v, N.i = E, N.w = function(R, C) {
      return k(R, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var G = function() {
      function R(x) {
        this.$L = v(x.locale, null, !0), this.parse(x);
      }
      var C = R.prototype;
      return C.parse = function(x) {
        this.$d = function(D) {
          var M = D.date, O = D.utc;
          if (M === null)
            return new Date(NaN);
          if (N.u(M))
            return new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var P = M.match(p);
            if (P) {
              var U = P[2] - 1 || 0, V = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], U, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V)) : new Date(P[1], U, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V);
            }
          }
          return new Date(M);
        }(x), this.$x = x.x || {}, this.init();
      }, C.init = function() {
        var x = this.$d;
        this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
      }, C.$utils = function() {
        return N;
      }, C.isValid = function() {
        return this.$d.toString() !== y;
      }, C.isSame = function(x, D) {
        var M = k(x);
        return this.startOf(D) <= M && M <= this.endOf(D);
      }, C.isAfter = function(x, D) {
        return k(x) < this.startOf(D);
      }, C.isBefore = function(x, D) {
        return this.endOf(D) < k(x);
      }, C.$g = function(x, D, M) {
        return N.u(x) ? this[D] : this.set(M, x);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(x, D) {
        var M = this, O = !!N.u(D) || D, P = N.p(x), U = function(lt, X) {
          var ct = N.w(M.$u ? Date.UTC(M.$y, X, lt) : new Date(M.$y, X, lt), M);
          return O ? ct : ct.endOf(h);
        }, V = function(lt, X) {
          return N.w(M.toDate()[lt].apply(M.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), M);
        }, z = this.$W, Z = this.$M, kt = this.$D, B = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? U(1, 0) : U(31, 11);
          case d:
            return O ? U(1, Z) : U(0, Z + 1);
          case i:
            var J = this.$locale().weekStart || 0, $t = (z < J ? z + 7 : z) - J;
            return U(O ? kt - $t : kt + (6 - $t), Z);
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
        var M, O = N.p(x), P = "set" + (this.$u ? "UTC" : ""), U = (M = {}, M[h] = P + "Date", M[f] = P + "Date", M[d] = P + "Month", M[a] = P + "FullYear", M[_] = P + "Hours", M[c] = P + "Minutes", M[l] = P + "Seconds", M[r] = P + "Milliseconds", M)[O], V = O === h ? this.$D + (D - this.$W) : D;
        if (O === d || O === a) {
          var z = this.clone().set(f, 1);
          z.$d[U](V), z.init(), this.$d = z.set(f, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          U && this.$d[U](V);
        return this.init(), this;
      }, C.set = function(x, D) {
        return this.clone().$set(x, D);
      }, C.get = function(x) {
        return this[N.p(x)]();
      }, C.add = function(x, D) {
        var M, O = this;
        x = Number(x);
        var P = N.p(D), U = function(Z) {
          var kt = k(O);
          return N.w(kt.date(kt.date() + Math.round(Z * x)), O);
        };
        if (P === d)
          return this.set(d, this.$M + x);
        if (P === a)
          return this.set(a, this.$y + x);
        if (P === h)
          return U(1);
        if (P === i)
          return U(7);
        var V = (M = {}, M[c] = o, M[_] = s, M[l] = n, M)[P] || 1, z = this.$d.getTime() + x * V;
        return N.w(z, this);
      }, C.subtract = function(x, D) {
        return this.add(-1 * x, D);
      }, C.format = function(x) {
        var D = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || y;
        var O = x || "YYYY-MM-DDTHH:mm:ssZ", P = N.z(this), U = this.$H, V = this.$m, z = this.$M, Z = M.weekdays, kt = M.months, B = function(X, ct, Dt, Pt) {
          return X && (X[ct] || X(D, O)) || Dt[ct].slice(0, Pt);
        }, J = function(X) {
          return N.s(U % 12 || 12, X, "0");
        }, $t = M.meridiem || function(X, ct, Dt) {
          var Pt = X < 12 ? "AM" : "PM";
          return Dt ? Pt.toLowerCase() : Pt;
        }, lt = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: N.s(z + 1, 2, "0"), MMM: B(M.monthsShort, z, kt, 3), MMMM: B(kt, z), D: this.$D, DD: N.s(this.$D, 2, "0"), d: String(this.$W), dd: B(M.weekdaysMin, this.$W, Z, 2), ddd: B(M.weekdaysShort, this.$W, Z, 3), dddd: Z[this.$W], H: String(U), HH: N.s(U, 2, "0"), h: J(1), hh: J(2), a: $t(U, V, !0), A: $t(U, V, !1), m: String(V), mm: N.s(V, 2, "0"), s: String(this.$s), ss: N.s(this.$s, 2, "0"), SSS: N.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(X, ct) {
          return ct || lt[X] || P.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(x, D, M) {
        var O, P = N.p(D), U = k(x), V = (U.utcOffset() - this.utcOffset()) * o, z = this - U, Z = N.m(this, U);
        return Z = (O = {}, O[a] = Z / 12, O[d] = Z, O[u] = Z / 3, O[i] = (z - V) / 6048e5, O[h] = (z - V) / 864e5, O[_] = z / s, O[c] = z / o, O[l] = z / n, O)[P] || z, M ? Z : N.a(Z);
      }, C.daysInMonth = function() {
        return this.endOf(d).$D;
      }, C.$locale = function() {
        return A[this.$L];
      }, C.locale = function(x, D) {
        if (!x)
          return this.$L;
        var M = this.clone(), O = v(x, D, !0);
        return O && (M.$L = O), M;
      }, C.clone = function() {
        return N.w(this.$d, this);
      }, C.toDate = function() {
        return new Date(this.valueOf());
      }, C.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, C.toISOString = function() {
        return this.$d.toISOString();
      }, C.toString = function() {
        return this.$d.toUTCString();
      }, R;
    }(), j = G.prototype;
    return k.prototype = j, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", f]].forEach(function(R) {
      j[R[1]] = function(C) {
        return this.$g(C, R[0], R[1]);
      };
    }), k.extend = function(R, C) {
      return R.$i || (R(C, G, k), R.$i = !0), k;
    }, k.locale = v, k.isDayjs = E, k.unix = function(R) {
      return k(1e3 * R);
    }, k.en = A[S], k.Ls = A, k.p = {}, k;
  });
})(Gk);
const qk = (t = "00:00:00") => {
  const e = el(`1989-01-01 ${t}`);
  return {
    hour: e.hour(),
    minute: e.minute(),
    second: e.second()
  };
};
function Xk() {
  let t = new Array(24).fill(0), e = new Array(60).fill(0), n = new Array(60).fill(0);
  return t = t.map((o, s) => o + s), e = e.map((o, s) => o + s), n = n.map((o, s) => o + s), { hourList: t, minuteList: e, secondList: n };
}
class Kk extends ar {
  constructor() {
    super(...arguments);
    L(this, "cellHeight", 24);
    L(this, "ref", Wi());
    L(this, "hourRef", Wi());
    L(this, "minuteRef", Wi());
    L(this, "secondRef", Wi());
    L(this, "state", {
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
    const s = qk(this.state.selectTime);
    return o.map((r) => {
      const l = s[n] === r, c = { ...s, [n]: r };
      return /* @__PURE__ */ Ft(
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
    const { showSeconds: n, style: o } = this.props, { hourList: s, minuteList: r, secondList: l } = Xk();
    return /* @__PURE__ */ Ft("div", { className: F("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ Ft("div", { className: F("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ Ft("div", { className: "overflow-hidden", children: /* @__PURE__ */ Ft("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", s) }) }),
        /* @__PURE__ */ Ft("div", { className: "overflow-hidden", children: /* @__PURE__ */ Ft("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ Ft("div", { className: "overflow-hidden", children: /* @__PURE__ */ Ft("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ Ft("div", { className: F("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ Ft("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ Ft("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function Ti(t) {
  return t.split("-")[1];
}
function w_(t) {
  return t === "y" ? "height" : "width";
}
function vo(t) {
  return t.split("-")[0];
}
function Bc(t) {
  return ["top", "bottom"].includes(vo(t)) ? "x" : "y";
}
function Yf(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Bc(e), _ = w_(c), h = o[_] / 2 - s[_] / 2, i = vo(e), d = c === "x";
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
  switch (Ti(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const Zk = async (t, e, n) => {
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
  for (let y = 0; y < c.length; y++) {
    const {
      name: p,
      fn: m
    } = c[y], {
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
      } = Yf(h, u, _)), y = -1;
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
function Jk(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ly(t) {
  return typeof t != "number" ? Jk(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function nl(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Qk(t, e) {
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
  } = e, f = ly(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = nl(await r.getClippingRect({
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
  }, S = nl(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const tx = Math.min, ex = Math.max;
function nx(t, e, n) {
  return ex(t, tx(e, n));
}
const ox = (t) => ({
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
    const h = ly(o), i = {
      x: s,
      y: r
    }, d = Bc(l), u = w_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[y], E = w / 2 - a[u] / 2 + $, v = nx(S, E, A), N = Ti(l) != null && E != v && c.reference[u] / 2 - (E < S ? h[f] : h[y]) - a[u] / 2 < 0 ? E < S ? S - E : A - E : 0;
    return {
      [d]: i[d] - N,
      data: {
        [d]: v,
        centerOffset: E - v
      }
    };
  }
}), rx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ol(t) {
  return t.replace(/left|right|bottom|top/g, (e) => rx[e]);
}
function ix(t, e, n) {
  n === void 0 && (n = !1);
  const o = Ti(t), s = Bc(t), r = w_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = ol(l)), {
    main: l,
    cross: ol(l)
  };
}
const sx = {
  start: "end",
  end: "start"
};
function Ma(t) {
  return t.replace(/start|end/g, (e) => sx[e]);
}
function lx(t) {
  const e = ol(t);
  return [Ma(t), e, Ma(e)];
}
function cx(t, e, n) {
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
function ax(t, e, n, o) {
  const s = Ti(t);
  let r = cx(vo(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(Ma)))), r;
}
const _x = function(t) {
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
        ...y
      } = t, p = vo(o), m = vo(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [ol(l)] : lx(l));
      !d && a !== "none" && w.push(...ax(l, f, a, g));
      const $ = [l, ...w], S = await Qk(e, y), A = [];
      let E = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: N,
          cross: G
        } = ix(o, r, g);
        A.push(S[N], S[G]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var v;
        const N = (((v = s.flip) == null ? void 0 : v.index) || 0) + 1, G = $[N];
        if (G)
          return {
            data: {
              index: N,
              overflows: E
            },
            reset: {
              placement: G
            }
          };
        let j = "bottom";
        switch (u) {
          case "bestFit": {
            var k;
            const R = (k = E.map((C) => [C, C.overflows.filter((x) => x > 0).reduce((x, D) => x + D, 0)]).sort((C, x) => C[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            R && (j = R);
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
async function ux(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = vo(n), c = Ti(n), _ = Bc(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const fx = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await ux(e, t);
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
function he(t) {
  return Xt(t).getComputedStyle(t);
}
function ln(t) {
  return ay(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Ii;
function cy() {
  if (Ii)
    return Ii;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Ii = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Ii) : navigator.userAgent;
}
function Te(t) {
  return t instanceof Xt(t).HTMLElement;
}
function ee(t) {
  return t instanceof Xt(t).Element;
}
function ay(t) {
  return t instanceof Xt(t).Node;
}
function Gf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Xt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function jc(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = he(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function hx(t) {
  return ["table", "td", "th"].includes(ln(t));
}
function $_(t) {
  const e = /firefox/i.test(cy()), n = he(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function _y() {
  return !/^((?!chrome|android).)*safari/i.test(cy());
}
function k_(t) {
  return ["html", "body", "#document"].includes(ln(t));
}
const qf = Math.min, _r = Math.max, rl = Math.round;
function uy(t) {
  const e = he(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = rl(n) !== s || rl(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function fy(t) {
  return ee(t) ? t : t.contextElement;
}
const hy = {
  x: 1,
  y: 1
};
function Wn(t) {
  const e = fy(t);
  if (!Te(e))
    return hy;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = uy(e);
  let l = (r ? rl(n.width) : n.width) / o, c = (r ? rl(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Tn(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = fy(t);
  let _ = hy;
  e && (o ? ee(o) && (_ = Wn(o)) : _ = Wn(t));
  const h = c ? Xt(c) : window, i = !_y() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const y = Xt(c), p = o && ee(o) ? Xt(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
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
function hn(t) {
  return ((ay(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function zc(t) {
  return ee(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function dy(t) {
  return Tn(hn(t)).left + zc(t).scrollLeft;
}
function dx(t, e, n) {
  const o = Te(e), s = hn(e), r = Tn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((ln(e) !== "body" || jc(s)) && (l = zc(e)), Te(e)) {
      const _ = Tn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = dy(s));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Br(t) {
  if (ln(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (Gf(t) ? t.host : null) || // Fallback
    hn(t)
  );
  return Gf(e) ? e.host : e;
}
function Xf(t) {
  return !Te(t) || he(t).position === "fixed" ? null : t.offsetParent;
}
function px(t) {
  let e = Br(t);
  for (; Te(e) && !k_(e); ) {
    if ($_(e))
      return e;
    e = Br(e);
  }
  return null;
}
function Kf(t) {
  const e = Xt(t);
  let n = Xf(t);
  for (; n && hx(n) && he(n).position === "static"; )
    n = Xf(n);
  return n && (ln(n) === "html" || ln(n) === "body" && he(n).position === "static" && !$_(n)) ? e : n || px(t) || e;
}
function mx(t) {
  return uy(t);
}
function gx(t) {
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
  if ((s || !s && o !== "fixed") && ((ln(n) !== "body" || jc(r)) && (l = zc(n)), Te(n))) {
    const h = Tn(n);
    c = Wn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function yx(t, e) {
  const n = Xt(t), o = hn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = _y();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function vx(t) {
  var e;
  const n = hn(t), o = zc(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = _r(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = _r(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + dy(t);
  const _ = -o.scrollTop;
  return he(s || n).direction === "rtl" && (c += _r(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function py(t) {
  const e = Br(t);
  return k_(e) ? t.ownerDocument.body : Te(e) && jc(e) ? e : py(e);
}
function ur(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = py(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Xt(o);
  return s ? e.concat(r, r.visualViewport || [], jc(o) ? o : []) : e.concat(o, ur(o));
}
function bx(t, e) {
  const n = Tn(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Te(t) ? Wn(t) : {
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
function Zf(t, e, n) {
  return e === "viewport" ? nl(yx(t, n)) : ee(e) ? bx(e, n) : nl(vx(hn(t)));
}
function wx(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = ur(t).filter((c) => ee(c) && ln(c) !== "body"), s = null;
  const r = he(t).position === "fixed";
  let l = r ? Br(t) : t;
  for (; ee(l) && !k_(l); ) {
    const c = he(l), _ = $_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Br(l);
  }
  return e.set(t, o), o;
}
function $x(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? wx(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = Zf(e, i, s);
    return h.top = _r(d.top, h.top), h.right = qf(d.right, h.right), h.bottom = qf(d.bottom, h.bottom), h.left = _r(d.left, h.left), h;
  }, Zf(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const kx = {
  getClippingRect: $x,
  convertOffsetParentRelativeRectToViewportRelativeRect: gx,
  isElement: ee,
  getDimensions: mx,
  getOffsetParent: Kf,
  getDocumentElement: hn,
  getScale: Wn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || Kf, r = this.getDimensions;
    return {
      reference: dx(e, await s(n), o),
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
function xx(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...ee(t) ? ur(t) : t.contextElement ? ur(t.contextElement) : [], ...ur(e)] : [];
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
  let d, u = c ? Tn(t) : null;
  c && a();
  function a() {
    const f = Tn(t);
    u && (f.x !== u.x || f.y !== u.y || f.width !== u.width || f.height !== u.height) && n(), u = f, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var f;
    h.forEach((y) => {
      _ && y.removeEventListener("scroll", n), r && y.removeEventListener("resize", n);
    }), (f = i) == null || f.disconnect(), i = null, c && cancelAnimationFrame(d);
  };
}
const Sx = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: kx,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return Zk(t, e, {
    ...s,
    platform: r
  });
};
var oo, ro, $n, di, Mt, pi, mi, La, Gl, my, ql, gy, Xl, yy, Kl, vy, Zl, by, Jl, wy, Ql, $y, tc;
const mn = class extends oe {
  constructor() {
    super(...arguments);
    T(this, mi);
    T(this, Gl);
    T(this, ql);
    T(this, Xl);
    T(this, Kl);
    T(this, Zl);
    T(this, Jl);
    T(this, Ql);
    T(this, oo, void 0);
    T(this, ro, 0);
    T(this, $n, void 0);
    T(this, di, void 0);
    T(this, Mt, void 0);
    T(this, pi, void 0);
    L(this, "hideLater", () => {
      b(this, tc).call(this), H(this, ro, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, tc, () => {
      clearTimeout(b(this, ro)), H(this, ro, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, $n)) == null ? void 0 : n.classList.contains(mn.CLASS_SHOW);
  }
  get timepicker() {
    return b(this, $n) || I(this, ql, gy).call(this);
  }
  get trigger() {
    return b(this, di) || this.element;
  }
  get elementShowClass() {
    return `with-${mn.NAME}-show`;
  }
  show(n) {
    return H(this, di, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(mn.CLASS_SHOW), I(this, Jl, wy).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = b(this, pi)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = b(this, $n)) == null || o.classList.remove(mn.CLASS_SHOW), !0;
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
let zt = mn;
oo = new WeakMap(), ro = new WeakMap(), $n = new WeakMap(), di = new WeakMap(), Mt = new WeakMap(), pi = new WeakMap(), mi = new WeakSet(), La = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Gl = new WeakSet(), my = function() {
  const n = I(this, mi, La).call(this);
  return H(this, Mt, document.createElement("div")), b(this, Mt).style.position = "absolute", b(this, Mt).style.width = `${n}px`, b(this, Mt).style.height = `${n}px`, b(this, Mt).style.transform = "rotate(45deg)", b(this, Mt);
}, ql = new WeakSet(), gy = function() {
  const n = mn.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), Vk(Qg(Kk, { ...this.options }), o), this.options.arrow && o.append(I(this, Gl, my).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, $n, o), o;
}, Xl = new WeakSet(), yy = function() {
  var l;
  const n = I(this, mi, La).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [fx(n), _x()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && b(this, Mt) && ((l = r.middleware) == null || l.push(ox({ element: b(this, Mt) }))), r;
}, Kl = new WeakSet(), vy = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Zl = new WeakSet(), by = function(n) {
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
}, Jl = new WeakSet(), wy = function() {
  const n = I(this, Xl, yy).call(this), o = I(this, Ql, $y).call(this);
  H(this, pi, xx(o, this.timepicker, () => {
    Sx(o, this.timepicker, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.timepicker.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = I(this, Kl, vy).call(this, _);
      if (l.arrow && b(this, Mt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(b(this, Mt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-b(this, Mt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...I(this, Zl, by).call(this, _)
        });
      }
    });
  }));
}, Ql = new WeakSet(), $y = function() {
  return b(this, oo) || H(this, oo, {
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
  }), b(this, oo);
}, tc = new WeakMap(), L(zt, "NAME", "timepicker"), L(zt, "CLASSNAME", "timepicker"), L(zt, "CLASS_SHOW", "show"), L(zt, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), L(zt, "DEFAULT", {
  value: el().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(zt.MENU_SELECTOR);
  n ? zt.ensure(n).toggle() : zt.clear({ event: t });
});
const Cx = (t) => {
  const e = document.getElementsByClassName("with-timepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(zt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || zt.clear({ event: t });
};
window.addEventListener("scroll", Cx, !0);
class Jf extends At {
}
L(Jf, "NAME", "toolbar"), L(Jf, "Component", po);
function Mi(t) {
  return t.split("-")[1];
}
function x_(t) {
  return t === "y" ? "height" : "width";
}
function bo(t) {
  return t.split("-")[0];
}
function Vc(t) {
  return ["top", "bottom"].includes(bo(t)) ? "x" : "y";
}
function Qf(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Vc(e), _ = x_(c), h = o[_] / 2 - s[_] / 2, i = bo(e), d = c === "x";
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
  switch (Mi(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const Ex = async (t, e, n) => {
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
  } = Qf(h, o, _), u = o, a = {}, f = 0;
  for (let y = 0; y < c.length; y++) {
    const {
      name: p,
      fn: m
    } = c[y], {
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
      } = Qf(h, u, _)), y = -1;
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
function Ax(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ky(t) {
  return typeof t != "number" ? Ax(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function il(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Tx(t, e) {
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
  } = e, f = ky(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = il(await r.getClippingRect({
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
  }, S = il(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Mx = Math.min, Lx = Math.max;
function Nx(t, e, n) {
  return Lx(t, Mx(e, n));
}
const Rx = (t) => ({
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
    const h = ky(o), i = {
      x: s,
      y: r
    }, d = Vc(l), u = x_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[y], E = w / 2 - a[u] / 2 + $, v = Nx(S, E, A), N = Mi(l) != null && E != v && c.reference[u] / 2 - (E < S ? h[f] : h[y]) - a[u] / 2 < 0 ? E < S ? S - E : A - E : 0;
    return {
      [d]: i[d] - N,
      data: {
        [d]: v,
        centerOffset: E - v
      }
    };
  }
}), Dx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function sl(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Dx[e]);
}
function Px(t, e, n) {
  n === void 0 && (n = !1);
  const o = Mi(t), s = Vc(t), r = x_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = sl(l)), {
    main: l,
    cross: sl(l)
  };
}
const Ox = {
  start: "end",
  end: "start"
};
function Na(t) {
  return t.replace(/start|end/g, (e) => Ox[e]);
}
function Hx(t) {
  const e = sl(t);
  return [Na(t), e, Na(e)];
}
function Wx(t, e, n) {
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
function Ix(t, e, n, o) {
  const s = Mi(t);
  let r = Wx(bo(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(Na)))), r;
}
const Ux = function(t) {
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
        ...y
      } = t, p = bo(o), m = bo(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [sl(l)] : Hx(l));
      !d && a !== "none" && w.push(...Ix(l, f, a, g));
      const $ = [l, ...w], S = await Tx(e, y), A = [];
      let E = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: N,
          cross: G
        } = Px(o, r, g);
        A.push(S[N], S[G]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var v;
        const N = (((v = s.flip) == null ? void 0 : v.index) || 0) + 1, G = $[N];
        if (G)
          return {
            data: {
              index: N,
              overflows: E
            },
            reset: {
              placement: G
            }
          };
        let j = "bottom";
        switch (u) {
          case "bestFit": {
            var k;
            const R = (k = E.map((C) => [C, C.overflows.filter((x) => x > 0).reduce((x, D) => x + D, 0)]).sort((C, x) => C[1] - x[1])[0]) == null ? void 0 : k[0].placement;
            R && (j = R);
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
async function Fx(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = bo(n), c = Mi(n), _ = Vc(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const Bx = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await Fx(e, t);
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
function de(t) {
  return Kt(t).getComputedStyle(t);
}
function cn(t) {
  return Sy(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Ui;
function xy() {
  if (Ui)
    return Ui;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Ui = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Ui) : navigator.userAgent;
}
function Me(t) {
  return t instanceof Kt(t).HTMLElement;
}
function ne(t) {
  return t instanceof Kt(t).Element;
}
function Sy(t) {
  return t instanceof Kt(t).Node;
}
function th(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Kt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Yc(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = de(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function jx(t) {
  return ["table", "td", "th"].includes(cn(t));
}
function S_(t) {
  const e = /firefox/i.test(xy()), n = de(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function Cy() {
  return !/^((?!chrome|android).)*safari/i.test(xy());
}
function C_(t) {
  return ["html", "body", "#document"].includes(cn(t));
}
const eh = Math.min, fr = Math.max, ll = Math.round;
function Ey(t) {
  const e = de(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = ll(n) !== s || ll(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Ay(t) {
  return ne(t) ? t : t.contextElement;
}
const Ty = {
  x: 1,
  y: 1
};
function In(t) {
  const e = Ay(t);
  if (!Me(e))
    return Ty;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = Ey(e);
  let l = (r ? ll(n.width) : n.width) / o, c = (r ? ll(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Mn(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Ay(t);
  let _ = Ty;
  e && (o ? ne(o) && (_ = In(o)) : _ = In(t));
  const h = c ? Kt(c) : window, i = !Cy() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const y = Kt(c), p = o && ne(o) ? Kt(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
      const g = In(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
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
function dn(t) {
  return ((Sy(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Gc(t) {
  return ne(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function My(t) {
  return Mn(dn(t)).left + Gc(t).scrollLeft;
}
function zx(t, e, n) {
  const o = Me(e), s = dn(e), r = Mn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((cn(e) !== "body" || Yc(s)) && (l = Gc(e)), Me(e)) {
      const _ = Mn(e, !0);
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
function jr(t) {
  if (cn(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (th(t) ? t.host : null) || // Fallback
    dn(t)
  );
  return th(e) ? e.host : e;
}
function nh(t) {
  return !Me(t) || de(t).position === "fixed" ? null : t.offsetParent;
}
function Vx(t) {
  let e = jr(t);
  for (; Me(e) && !C_(e); ) {
    if (S_(e))
      return e;
    e = jr(e);
  }
  return null;
}
function oh(t) {
  const e = Kt(t);
  let n = nh(t);
  for (; n && jx(n) && de(n).position === "static"; )
    n = nh(n);
  return n && (cn(n) === "html" || cn(n) === "body" && de(n).position === "static" && !S_(n)) ? e : n || Vx(t) || e;
}
function Yx(t) {
  return Ey(t);
}
function Gx(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const s = Me(n), r = dn(n);
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
  if ((s || !s && o !== "fixed") && ((cn(n) !== "body" || Yc(r)) && (l = Gc(n)), Me(n))) {
    const h = Mn(n);
    c = In(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function qx(t, e) {
  const n = Kt(t), o = dn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = Cy();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Xx(t) {
  var e;
  const n = dn(t), o = Gc(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = fr(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = fr(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + My(t);
  const _ = -o.scrollTop;
  return de(s || n).direction === "rtl" && (c += fr(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Ly(t) {
  const e = jr(t);
  return C_(e) ? t.ownerDocument.body : Me(e) && Yc(e) ? e : Ly(e);
}
function hr(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Ly(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Kt(o);
  return s ? e.concat(r, r.visualViewport || [], Yc(o) ? o : []) : e.concat(o, hr(o));
}
function Kx(t, e) {
  const n = Mn(t, !0, e === "fixed"), o = n.top + t.clientTop, s = n.left + t.clientLeft, r = Me(t) ? In(t) : {
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
function rh(t, e, n) {
  return e === "viewport" ? il(qx(t, n)) : ne(e) ? Kx(e, n) : il(Xx(dn(t)));
}
function Zx(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = hr(t).filter((c) => ne(c) && cn(c) !== "body"), s = null;
  const r = de(t).position === "fixed";
  let l = r ? jr(t) : t;
  for (; ne(l) && !C_(l); ) {
    const c = de(l), _ = S_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = jr(l);
  }
  return e.set(t, o), o;
}
function Jx(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? Zx(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = rh(e, i, s);
    return h.top = fr(d.top, h.top), h.right = eh(d.right, h.right), h.bottom = eh(d.bottom, h.bottom), h.left = fr(d.left, h.left), h;
  }, rh(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Qx = {
  getClippingRect: Jx,
  convertOffsetParentRelativeRectToViewportRelativeRect: Gx,
  isElement: ne,
  getDimensions: Yx,
  getOffsetParent: oh,
  getDocumentElement: dn,
  getScale: In,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || oh, r = this.getDimensions;
    return {
      reference: zx(e, await s(n), o),
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
function tS(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = s && !c, h = _ || r ? [...ne(t) ? hr(t) : t.contextElement ? hr(t.contextElement) : [], ...hr(e)] : [];
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
    h.forEach((y) => {
      _ && y.removeEventListener("scroll", n), r && y.removeEventListener("resize", n);
    }), (f = i) == null || f.disconnect(), i = null, c && cancelAnimationFrame(d);
  };
}
const eS = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: Qx,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return Ex(t, e, {
    ...s,
    platform: r
  });
};
var io, so, lo, kn, Lt, ec, gi, yi, Ra, nc, Ny, oc, Ry, rc, Dy, ic, Py, sc, Oy, lc, Hy, cc, Wy, co, ac, Iy;
const gn = class extends oe {
  constructor() {
    super(...arguments);
    T(this, yi);
    T(this, nc);
    T(this, oc);
    T(this, rc);
    T(this, ic);
    T(this, sc);
    T(this, lc);
    T(this, cc);
    T(this, ac);
    T(this, io, !1);
    T(this, so, void 0);
    T(this, lo, 0);
    T(this, kn, void 0);
    T(this, Lt, void 0);
    T(this, ec, void 0);
    T(this, gi, void 0);
    L(this, "hideLater", () => {
      b(this, co).call(this), H(this, lo, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, co, () => {
      clearTimeout(b(this, lo)), H(this, lo, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, kn)) == null ? void 0 : n.classList.contains(gn.CLASS_SHOW);
  }
  get tooltip() {
    return b(this, kn) || I(this, oc, Ry).call(this);
  }
  get trigger() {
    return b(this, ec) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${gn.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !b(this, io) && this.isHover && I(this, ac, Iy).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(gn.CLASS_SHOW), I(this, lc, Hy).call(this), !0;
  }
  hide() {
    var n, o;
    return (n = b(this, gi)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = b(this, kn)) == null || o.classList.remove(gn.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    b(this, io) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", b(this, co)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, s = this.getAll().entries(), r = new Set(o || []);
    for (const [l, c] of s)
      r.has(l) || c.hide();
  }
};
let Vt = gn;
io = new WeakMap(), so = new WeakMap(), lo = new WeakMap(), kn = new WeakMap(), Lt = new WeakMap(), ec = new WeakMap(), gi = new WeakMap(), yi = new WeakSet(), Ra = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, nc = new WeakSet(), Ny = function() {
  const n = I(this, yi, Ra).call(this);
  return H(this, Lt, document.createElement("div")), b(this, Lt).style.position = this.options.strategy, b(this, Lt).style.width = `${n}px`, b(this, Lt).style.height = `${n}px`, b(this, Lt).style.transform = "rotate(45deg)", b(this, Lt);
}, oc = new WeakSet(), Ry = function() {
  var s;
  const n = gn.TOOLTIP_CLASS;
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
  if (this.options.arrow && (o == null || o.append(I(this, nc, Ny).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, kn, o), o;
}, rc = new WeakSet(), Dy = function() {
  var l;
  const n = I(this, yi, Ra).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [Bx(n), Ux()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && b(this, Lt) && ((l = r.middleware) == null || l.push(Rx({ element: b(this, Lt) }))), r;
}, ic = new WeakSet(), Py = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, sc = new WeakSet(), Oy = function(n) {
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
}, lc = new WeakSet(), Hy = function() {
  const n = I(this, rc, Dy).call(this), o = I(this, cc, Wy).call(this);
  H(this, gi, tS(o, this.tooltip, () => {
    eS(o, this.tooltip, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.tooltip.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = I(this, ic, Py).call(this, _);
      if (l.arrow && b(this, Lt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(b(this, Lt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-b(this, Lt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...I(this, sc, Oy).call(this, _)
        });
      }
    });
  }));
}, cc = new WeakSet(), Wy = function() {
  return b(this, so) || H(this, so, {
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
  }), b(this, so);
}, co = new WeakMap(), ac = new WeakSet(), Iy = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", b(this, co)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, io, !0);
}, L(Vt, "NAME", "tooltip"), L(Vt, "TOOLTIP_CLASS", "tooltip"), L(Vt, "CLASS_SHOW", "show"), L(Vt, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), L(Vt, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(t) {
  var o;
  const e = t.target, n = (o = e.closest) == null ? void 0 : o.call(e, Vt.MENU_SELECTOR);
  if (n) {
    const s = Vt.ensure(n);
    s.options.trigger === "click" && s.toggle();
  } else
    Vt.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  var s;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, Vt.MENU_SELECTOR);
  if (!n)
    return;
  const o = Vt.ensure(n);
  o.isHover && o.show();
});
var Uy, vt, Fy, dr, ih, By = {}, jy = [], nS = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function zy(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function sa(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Fy };
  return s == null && vt.vnode != null && vt.vnode(r), r;
}
function E_(t) {
  return t.children;
}
function pr(t, e) {
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
function sh(t) {
  (!t.__d && (t.__d = !0) && dr.push(t) && !cl.__r++ || ih !== vt.debounceRendering) && ((ih = vt.debounceRendering) || setTimeout)(cl);
}
function cl() {
  for (var t; cl.__r = dr.length; )
    t = dr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), dr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Qe({}, r)).__v = r.__v + 1, Xy(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? zr(r), r.__h), rS(o, r), r.__e != l && Vy(r)));
    });
}
function Yy(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || jy, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? sa(null, a, null, null, a) : Array.isArray(a) ? sa(E_, { children: a }, null, null, null) : a.__b > 0 ? sa(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Xy(t, a, u = u || By, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Gy(a, _, t) : _ = qy(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = zr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Zy(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Ky(p[i], p[++i], p[++i]);
}
function Gy(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Gy(o, e, n) : qy(n, o, o, s, o.__e, e));
  return e;
}
function qy(t, e, n, o, s, r) {
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
function oS(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || al(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || al(t, r, e[r], n[r], o);
}
function lh(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || nS.test(e) ? n : n + "px";
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
            n && e in n || lh(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || lh(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? ah : ch, r) : t.removeEventListener(e, r ? ah : ch, r);
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
function ch(t) {
  this.l[t.type + !1](vt.event ? vt.event(t) : t);
}
function ah(t) {
  this.l[t.type + !0](vt.event ? vt.event(t) : t);
}
function Xy(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = vt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new pr(p, g), i.constructor = v, i.render = sS), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Qe({}, i.__s)), Qe(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = vt.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = Qe(Qe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === E_ && h.key == null ? h.props.children : h, Yy(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = iS(n.__e, e, n, o, s, r, l, _);
    (h = vt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), vt.__e(k, e, n);
  }
}
function rS(t, e) {
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
function iS(t, e, n, o, s, r, l, c) {
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
    if (r = r && Uy.call(t.childNodes), h = (d = n.props || By).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (oS(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Yy(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && zr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && zy(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && al(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && al(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Ky(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    vt.__e(o, n);
  }
}
function Zy(t, e, n) {
  var o, s;
  if (vt.unmount && vt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Ky(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Zy(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || zy(t.__e), t.__ = t.__e = t.__d = void 0;
}
function sS(t, e, n) {
  return this.constructor(t, n);
}
Uy = jy.slice, vt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Fy = 0, pr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qe({}, this.state), typeof t == "function" && (t = t(Qe({}, n), this.props)), t && Qe(n, t), t != null && this.__v && (e && this._sb.push(e), sh(this));
}, pr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), sh(this));
}, pr.prototype.render = E_, dr = [], cl.__r = 0;
var lS = 0;
function _l(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --lS, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return vt.vnode && vt.vnode(_), _;
}
function cS({
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
  d ? a = d(t, c) : l ? a = /* @__PURE__ */ _l(l, { ...h }) : a = c;
  const { left: f, top: y, width: p, height: m } = o;
  return /* @__PURE__ */ _l("div", { style: { width: p, height: m, left: f + s, top: y + r, ...n }, ...u, children: [
    a,
    i
  ] });
}
function aS(t, e, n = 0, o = 0) {
  const s = t.left + n, r = t.top + o;
  return !(s > e.left + e.width || r > e.top + e.height || s + t.width < e.left || r + t.height < e.top);
}
let _S = class extends pr {
  render() {
    const { width: e, height: n, cells: o, left: s, top: r, visibleBounding: l, onRenderCell: c, style: _, children: h, offsetX: i = 0, offsetY: d = 0, ...u } = this.props, a = l ? o.filter((f) => aS(f.bounding, l, i, d)) : o;
    return /* @__PURE__ */ _l("div", { style: { width: e, height: n, left: s, top: r, ..._ }, ...u, children: [
      a.map((f) => /* @__PURE__ */ _l(cS, { offsetX: i, offsetY: d, ...f })),
      h
    ] });
  }
};
class _h extends At {
}
L(_h, "NAME", "virtualgrid"), L(_h, "Component", _S);
var A_, bt, Jy, Qy, mr, uh, tv = {}, ev = [], uS = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function tn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function nv(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function T_(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? A_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ss(t, l, o, s, null);
}
function ss(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Jy };
  return s == null && bt.vnode != null && bt.vnode(r), r;
}
function fS() {
  return { current: null };
}
function M_(t) {
  return t.children;
}
function gr(t, e) {
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
function fh(t) {
  (!t.__d && (t.__d = !0) && mr.push(t) && !ul.__r++ || uh !== bt.debounceRendering) && ((uh = bt.debounceRendering) || setTimeout)(ul);
}
function ul() {
  for (var t; ul.__r = mr.length; )
    t = mr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), mr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = tn({}, r)).__v = r.__v + 1, lv(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Vr(r), r.__h), dS(o, r), r.__e != l && ov(r)));
    });
}
function rv(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || ev, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ss(null, a, null, null, a) : Array.isArray(a) ? ss(M_, { children: a }, null, null, null) : a.__b > 0 ? ss(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      lv(t, a, u = u || tv, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = iv(a, _, t) : _ = sv(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Vr(u));
    }
  for (n.__e = y, i = g; i--; )
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
function hS(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || fl(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || fl(t, r, e[r], n[r], o);
}
function hh(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || uS.test(e) ? n : n + "px";
}
function fl(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || hh(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || hh(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? ph : dh, r) : t.removeEventListener(e, r ? ph : dh, r);
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
function dh(t) {
  this.l[t.type + !1](bt.event ? bt.event(t) : t);
}
function ph(t) {
  this.l[t.type + !0](bt.event ? bt.event(t) : t);
}
function lv(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = bt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new gr(p, g), i.constructor = v, i.render = mS), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = tn({}, i.__s)), tn(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = bt.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = tn(tn({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === M_ && h.key == null ? h.props.children : h, rv(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = pS(n.__e, e, n, o, s, r, l, _);
    (h = bt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), bt.__e(k, e, n);
  }
}
function dS(t, e) {
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
function pS(t, e, n, o, s, r, l, c) {
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
    if (r = r && A_.call(t.childNodes), h = (d = n.props || tv).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (hS(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, rv(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Vr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && nv(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && fl(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && fl(t, "checked", f, d.checked, !1));
  }
  return t;
}
function cv(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    bt.__e(o, n);
  }
}
function av(t, e, n) {
  var o, s;
  if (bt.unmount && bt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || cv(o, null, e)), (o = t.__c) != null) {
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
      o[s] && av(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || nv(t.__e), t.__ = t.__e = t.__d = void 0;
}
function mS(t, e, n) {
  return this.constructor(t, n);
}
A_ = ev.slice, bt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Jy = 0, Qy = function(t) {
  return t != null && t.constructor === void 0;
}, gr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tn({}, this.state), typeof t == "function" && (t = t(tn({}, n), this.props)), t && tn(n, t), t != null && this.__v && (e && this._sb.push(e), fh(this));
}, gr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), fh(this));
}, gr.prototype.render = M_, mr = [], ul.__r = 0;
var gS = 0;
function q(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --gS, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return bt.vnode && bt.vnode(_), _;
}
let yS = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var _v, wt, uv, yr, mh, fv = {}, hv = [], vS = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function en(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function dv(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function la(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++uv };
  return s == null && wt.vnode != null && wt.vnode(r), r;
}
function L_(t) {
  return t.children;
}
function vr(t, e) {
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
function pv(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return pv(t);
  }
}
function gh(t) {
  (!t.__d && (t.__d = !0) && yr.push(t) && !hl.__r++ || mh !== wt.debounceRendering) && ((mh = wt.debounceRendering) || setTimeout)(hl);
}
function hl() {
  for (var t; hl.__r = yr.length; )
    t = yr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), yr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = en({}, r)).__v = r.__v + 1, vv(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Yr(r), r.__h), wS(o, r), r.__e != l && pv(r)));
    });
}
function mv(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, y, p, m = o && o.__k || hv, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? la(null, a, null, null, a) : Array.isArray(a) ? la(L_, { children: a }, null, null, null) : a.__b > 0 ? la(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      vv(t, a, u = u || fv, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = gv(a, _, t) : _ = yv(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Yr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && wv(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      bv(p[i], p[++i], p[++i]);
}
function gv(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? gv(o, e, n) : yv(n, o, o, s, o.__e, e));
  return e;
}
function yv(t, e, n, o, s, r) {
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
function bS(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || dl(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || dl(t, r, e[r], n[r], o);
}
function yh(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || vS.test(e) ? n : n + "px";
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
            n && e in n || yh(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || yh(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? bh : vh, r) : t.removeEventListener(e, r ? bh : vh, r);
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
function vh(t) {
  this.l[t.type + !1](wt.event ? wt.event(t) : t);
}
function bh(t) {
  this.l[t.type + !0](wt.event ? wt.event(t) : t);
}
function vv(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, y, p, m, g, w, $, S, A, E, v = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = wt.__b) && h(e);
  try {
    t:
      if (typeof v == "function") {
        if (p = e.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? y = (i = e.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? e.__c = i = new v(p, g) : (e.__c = i = new vr(p, g), i.constructor = v, i.render = kS), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = en({}, i.__s)), en(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || e.__v === n.__v) {
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
        if (i.context = g, i.props = p, i.__v = e, i.__P = t, $ = wt.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), A = 0; A < i._sb.length; A++)
            i.__h.push(i._sb[A]);
          i._sb = [];
        } else
          do
            i.__d = !1, $ && $(e), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++S < 25);
        i.state = i.__s, i.getChildContext != null && (o = en(en({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), E = h != null && h.type === L_ && h.key == null ? h.props.children : h, mv(t, Array.isArray(E) ? E : [E], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = $S(n.__e, e, n, o, s, r, l, _);
    (h = wt.diffed) && h(e);
  } catch (k) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), wt.__e(k, e, n);
  }
}
function wS(t, e) {
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
function $S(t, e, n, o, s, r, l, c) {
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
    if (r = r && _v.call(t.childNodes), h = (d = n.props || fv).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (bS(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, mv(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Yr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && dv(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && dl(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && dl(t, "checked", f, d.checked, !1));
  }
  return t;
}
function bv(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    wt.__e(o, n);
  }
}
function wv(t, e, n) {
  var o, s;
  if (wt.unmount && wt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || bv(o, null, e)), (o = t.__c) != null) {
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
      o[s] && wv(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || dv(t.__e), t.__ = t.__e = t.__d = void 0;
}
function kS(t, e, n) {
  return this.constructor(t, n);
}
_v = hv.slice, wt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, uv = 0, vr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = en({}, this.state), typeof t == "function" && (t = t(en({}, n), this.props)), t && en(n, t), t != null && this.__v && (e && this._sb.push(e), gh(this));
}, vr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), gh(this));
}, vr.prototype.render = L_, yr = [], hl.__r = 0;
var xS = 0;
function wh(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --xS, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return wt.vnode && wt.vnode(_), _;
}
var xn, Sn;
class $h extends vr {
  constructor(n) {
    super(n);
    T(this, xn, 0);
    T(this, Sn, null);
    L(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, s = n.target;
      if (!(!s || !o) && (typeof o == "string" && s.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    L(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (b(this, xn) && cancelAnimationFrame(b(this, xn)), H(this, xn, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), H(this, xn, 0);
      })), n.preventDefault());
    });
    L(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    L(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    L(this, "_handleClick", (n) => {
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
    n && (H(this, Sn, typeof n == "string" ? document : n.current), b(this, Sn).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), b(this, Sn) && b(this, Sn).removeEventListener("wheel", this._handleWheel);
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
    }, y = {};
    return o === "horz" ? (f.height = s, f.width = n, y.width = this.barSize, y.left = Math.round(Math.min(d, u) * (n - y.width) / d)) : (f.width = s, f.height = n, y.height = this.barSize, y.top = Math.round(Math.min(d, u) * (n - y.height) / d)), /* @__PURE__ */ wh(
      "div",
      {
        className: F("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": a
        }),
        style: f,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ wh(
          "div",
          {
            className: "scrollbar-bar",
            style: y,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
xn = new WeakMap(), Sn = new WeakMap();
function kh(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function $v({ col: t, className: e, height: n, row: o, onRenderCell: s, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
  var v;
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
  }], y = ["dtable-cell-content", e], p = [c ?? ((v = o.data) == null ? void 0 : v[t.name]) ?? ""], m = s ? s(p, { row: o, col: t }, T_) : p, g = [], w = [], $ = {}, S = {};
  let A = "div";
  m == null || m.forEach((k) => {
    if (typeof k == "object" && k && !Qy(k) && ("html" in k || "className" in k || "style" in k || "attrs" in k || "children" in k || "tagName" in k)) {
      const N = k.outer ? g : w;
      k.html ? N.push(/* @__PURE__ */ q("div", { className: F("dtable-cell-html", k.className), style: k.style, dangerouslySetInnerHTML: { __html: k.html }, ...k.attrs ?? {} })) : (k.style && Object.assign(k.outer ? i : a, k.style), k.className && (k.outer ? f : y).push(k.className), k.children && N.push(k.children), k.attrs && Object.assign(k.outer ? $ : S, k.attrs)), k.tagName && !k.outer && (A = k.tagName);
    } else
      w.push(k);
  });
  const E = A;
  return /* @__PURE__ */ q(
    "div",
    {
      className: F(f),
      style: i,
      "data-col": t.name,
      ...h,
      ...$,
      children: [
        w.length > 0 && /* @__PURE__ */ q(E, { className: F(y), style: a, ...S, children: w }),
        g
      ]
    }
  );
}
function ca({ row: t, className: e, top: n = 0, left: o = 0, width: s, height: r, cols: l, CellComponent: c = $v, onRenderCell: _ }) {
  return /* @__PURE__ */ q("div", { className: F("dtable-cells", e), style: { top: n, left: o, width: s, height: r }, children: l.map((h) => h.visible ? /* @__PURE__ */ q(
    c,
    {
      col: h,
      row: t,
      onRenderCell: _
    },
    h.name
  ) : null) });
}
function kv({
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
  CellComponent: u = $v,
  onRenderCell: a,
  style: f,
  ...y
}) {
  let p = null;
  s != null && s.length && (p = /* @__PURE__ */ q(
    ca,
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
  l != null && l.length && (m = /* @__PURE__ */ q(
    ca,
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
  r != null && r.length && (g = /* @__PURE__ */ q(
    ca,
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
  return /* @__PURE__ */ q(
    "div",
    {
      className: F("dtable-row", e),
      style: w,
      "data-id": t.id,
      ...y,
      children: [
        p,
        m,
        g
      ]
    }
  );
}
function SS({ height: t, onRenderRow: e, ...n }) {
  const o = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const s = e({ props: o }, T_);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ q("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ q(kv, { ...o }) });
}
function CS({
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
  return e = { ...e, top: n, height: s }, /* @__PURE__ */ q("div", { className: F("dtable-rows", t), style: e, children: o.map((h) => {
    const i = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ..._
    }, d = c == null ? void 0 : c({ props: i, row: h }, T_);
    return d && Object.assign(i, d), /* @__PURE__ */ q(kv, { ...i });
  }) });
}
const pl = /* @__PURE__ */ new Map(), ml = [];
function xv(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && pl.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  pl.set(n, t), e != null && e.buildIn && !ml.includes(n) && ml.push(n);
}
function $o(t, e) {
  xv(t, e);
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
function Sv(t) {
  return pl.delete(t);
}
function ES(t) {
  if (typeof t == "string") {
    const e = pl.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function Cv(t, e, n) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = ES(o);
    s && (n.has(s.name) || ((r = s.plugins) != null && r.length && Cv(t, s.plugins, n), t.push(s), n.add(s.name)));
  }), t;
}
function AS(t = [], e = !0) {
  return e && ml.length && t.unshift(...ml), t != null && t.length ? Cv([], t, /* @__PURE__ */ new Set()) : [];
}
function xh() {
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
var Bi, Cn, ao, He, le, We, Ct, Jt, ce, _o, vi, bi, ke, uo, fo, _c, Ev, uc, Av, fc, Tv, hc, Mv, wi, Da, dc, pc, $i, ki, mc, gc, yc, Lv, vc, Nv, bc, Rv;
let TS = (Bi = class extends gr {
  constructor(n) {
    super(n);
    T(this, _c);
    T(this, uc);
    T(this, fc);
    T(this, hc);
    T(this, wi);
    T(this, yc);
    T(this, vc);
    T(this, bc);
    L(this, "ref", fS());
    T(this, Cn, 0);
    T(this, ao, void 0);
    T(this, He, !1);
    T(this, le, void 0);
    T(this, We, void 0);
    T(this, Ct, []);
    T(this, Jt, void 0);
    T(this, ce, /* @__PURE__ */ new Map());
    T(this, _o, {});
    T(this, vi, void 0);
    T(this, bi, []);
    L(this, "updateLayout", () => {
      b(this, Cn) && cancelAnimationFrame(b(this, Cn)), H(this, Cn, requestAnimationFrame(() => {
        H(this, Jt, void 0), this.forceUpdate(), H(this, Cn, 0);
      }));
    });
    T(this, ke, (n, o) => {
      o = o || n.type;
      const s = b(this, ce).get(o);
      if (s != null && s.length) {
        for (const r of s)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    T(this, uo, (n) => {
      b(this, ke).call(this, n, `window_${n.type}`);
    });
    T(this, fo, (n) => {
      b(this, ke).call(this, n, `document_${n.type}`);
    });
    T(this, dc, (n, o) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, n, o);
        s && Object.assign(n.props, s);
      }
      return b(this, Ct).forEach((s) => {
        if (s.onRenderRow) {
          const r = s.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    T(this, pc, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), b(this, Ct).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    T(this, $i, (n, o, s) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, s)), this.options[c] && (n = this.options[c].call(this, n, o, s)), b(this, Ct).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, s));
      }), n;
    });
    T(this, ki, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    T(this, mc, (n) => {
      var c, _, h, i, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: s, colName: r, cellElement: l } = o;
      if (s === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), b(this, Ct).forEach((u) => {
          var a;
          (a = u.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: u } = o, a = this.layout.visibleRows.find((f) => f.id === s);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: s, rowInfo: a, element: l, rowElement: u })) === !0)
            return;
          for (const f of b(this, Ct))
            if (((h = f.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: s, rowInfo: a, element: l, rowElement: u })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: a, element: u })) === !0)
          return;
        for (const f of b(this, Ct))
          if (((d = f.onRowClick) == null ? void 0 : d.call(this, n, { rowID: s, rowInfo: a, element: u })) === !0)
            return;
      }
    });
    T(this, gc, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, ao, n.id ?? `dtable-${yS(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, We, Object.freeze(AS(n.plugins))), b(this, We).forEach((o) => {
      var c;
      const { methods: s, data: r, state: l } = o;
      s && Object.entries(s).forEach(([_, h]) => {
        typeof h == "function" && Object.assign(this, { [_]: h.bind(this) });
      }), r && Object.assign(b(this, _o), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = b(this, Jt)) == null ? void 0 : n.options) || b(this, le) || xh();
  }
  get plugins() {
    return b(this, Ct);
  }
  get layout() {
    return b(this, Jt);
  }
  get id() {
    return b(this, ao);
  }
  get data() {
    return b(this, _o);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, le, void 0);
  }
  componentDidMount() {
    if (b(this, He) ? this.forceUpdate() : I(this, wi, Da).call(this), b(this, Ct).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", b(this, mc)), this.on("keydown", b(this, gc)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, vi, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    b(this, Ct).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    b(this, He) ? I(this, wi, Da).call(this) : b(this, Ct).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = b(this, vi)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of b(this, ce).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), b(this, uo)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), b(this, fo)) : n.removeEventListener(s, b(this, ke));
    b(this, Ct).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), b(this, We).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), H(this, _o, {}), b(this, ce).clear();
  }
  on(n, o, s) {
    var l;
    s && (n = `${s}_${n}`);
    const r = b(this, ce).get(n);
    r ? r.push(o) : (b(this, ce).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), b(this, uo)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), b(this, fo)) : (l = this.ref.current) == null || l.addEventListener(n, b(this, ke)));
  }
  off(n, o, s) {
    var c;
    s && (n = `${s}_${n}`);
    const r = b(this, ce).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (b(this, ce).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), b(this, uo)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), b(this, fo)) : (c = this.ref.current) == null || c.removeEventListener(n, b(this, ke)));
  }
  emitCustomEvent(n, o) {
    b(this, ke).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
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
      const { offsetLeft: y, offsetTop: p } = n;
      typeof y == "number" && (u = s + y), typeof p == "number" && (u = r + p);
    }
    const f = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, i - h)), u !== s && (f.scrollLeft = u)), typeof a == "number" && (a = Math.max(0, Math.min(a, l - c)), a !== r && (f.scrollTop = a)), Object.keys(f).length ? (this.setState(f, () => {
      var y;
      (y = this.options.onScroll) == null || y.call(this, f), o == null || o.call(this, !0);
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
    if (!b(this, le))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: s, state: r } = n;
    if (s === "layout")
      H(this, Jt, void 0);
    else if (s === "options") {
      if (H(this, le, void 0), !b(this, Jt))
        return;
      H(this, Jt, void 0);
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
    return xi(b(this, bi), n, o, s, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = I(this, bc, Rv).call(this), { className: o, rowHover: s, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], u = [];
    return n && b(this, Ct).forEach((a) => {
      var y;
      const f = (y = a.onRender) == null ? void 0 : y.call(this, n);
      f && (f.style && Object.assign(i, f.style), f.className && d.push(f.className), f.children && u.push(f.children));
    }), /* @__PURE__ */ q(
      "div",
      {
        id: b(this, ao),
        className: F(d),
        style: i,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && I(this, _c, Ev).call(this, n),
          n && I(this, uc, Av).call(this, n),
          n && I(this, fc, Tv).call(this, n),
          n && I(this, hc, Mv).call(this, n)
        ]
      }
    );
  }
}, Cn = new WeakMap(), ao = new WeakMap(), He = new WeakMap(), le = new WeakMap(), We = new WeakMap(), Ct = new WeakMap(), Jt = new WeakMap(), ce = new WeakMap(), _o = new WeakMap(), vi = new WeakMap(), bi = new WeakMap(), ke = new WeakMap(), uo = new WeakMap(), fo = new WeakMap(), _c = new WeakSet(), Ev = function(n) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ q(
      SS,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: b(this, $i),
        onRenderRow: b(this, pc),
        ...s
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ q(
    pa,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, uc = new WeakSet(), Av = function(n) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ q(
    CS,
    {
      top: o,
      height: s,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: h,
      onRenderCell: b(this, $i),
      onRenderRow: b(this, dc),
      ...c
    }
  );
}, fc = new WeakSet(), Tv = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const s = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ q(
    pa,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: s,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, hc = new WeakSet(), Mv = function(n) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: i, scrollWidth: d } = r, { scrollbarSize: u = 12, horzScrollbarPos: a } = this.options;
  return i > d && o.push(
    /* @__PURE__ */ q(
      $h,
      {
        type: "horz",
        scrollPos: s,
        scrollSize: i,
        clientSize: d,
        onScroll: b(this, ki),
        left: r.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -u) + h,
        size: u,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > c && o.push(
    /* @__PURE__ */ q(
      $h,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: c,
        onScroll: b(this, ki),
        right: 0,
        size: u,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, wi = new WeakSet(), Da = function() {
  var n;
  H(this, He, !1), (n = this.options.afterRender) == null || n.call(this), b(this, Ct).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, dc = new WeakMap(), pc = new WeakMap(), $i = new WeakMap(), ki = new WeakMap(), mc = new WeakMap(), gc = new WeakMap(), yc = new WeakSet(), Lv = function() {
  if (b(this, le))
    return !1;
  const o = { ...xh(), ...b(this, We).reduce((s, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(s, l), s;
  }, {}), ...this.props };
  return H(this, le, o), H(this, Ct, b(this, We).reduce((s, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (s.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), s;
  }, [])), H(this, bi, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, vc = new WeakSet(), Nv = function() {
  var Z, kt;
  const { plugins: n } = this;
  let o = b(this, le);
  const s = {
    flex: /* @__PURE__ */ q("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ q("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((B) => {
    var $t;
    const J = ($t = B.beforeLayout) == null ? void 0 : $t.call(this, o);
    J && (o = { ...o, ...J }), Object.assign(s, B.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], i = [], d = {}, u = [], a = [];
  let f = 0, y = 0, p = 0;
  o.cols.forEach((B) => {
    if (B.hidden)
      return;
    const {
      name: J,
      type: $t = "",
      fixed: lt = !1,
      flex: X = !1,
      width: ct = r,
      minWidth: Dt = l,
      maxWidth: Pt = c,
      ...Uv
    } = B, tt = {
      name: J,
      type: $t,
      setting: {
        name: J,
        type: $t,
        fixed: lt,
        flex: X,
        width: ct,
        minWidth: Dt,
        maxWidth: Pt,
        ...Uv
      },
      flex: lt ? 0 : X === !0 ? 1 : typeof X == "number" ? X : 0,
      left: 0,
      width: kh(ct, Dt, Pt),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((P_) => {
      var O_, H_;
      const Li = (O_ = P_.colTypes) == null ? void 0 : O_[$t];
      if (Li) {
        const W_ = typeof Li == "function" ? Li(tt) : Li;
        W_ && Object.assign(tt.setting, W_);
      }
      (H_ = P_.onAddCol) == null || H_.call(this, tt);
    }), tt.width = kh(tt.setting.width ?? tt.width, tt.setting.minWidth ?? Dt, tt.setting.maxWidth ?? Pt), tt.realWidth = tt.realWidth || tt.width, lt === "left" ? (tt.left = f, f += tt.width, _.push(tt)) : lt === "right" ? (tt.left = y, y += tt.width, h.push(tt)) : (tt.left = p, p += tt.width, i.push(tt)), tt.flex && a.push(tt), u.push(tt), d[tt.name] = tt;
  });
  let m = o.width, g = 0;
  const w = f + p + y;
  if (typeof m == "function" && (m = m.call(this, w)), m === "auto")
    g = w;
  else if (m === "100%") {
    const { parent: B } = this;
    if (B)
      g = B.clientWidth;
    else {
      g = 0, H(this, He, !0);
      return;
    }
  } else
    g = m ?? 0;
  const { data: $, rowKey: S = "id", rowHeight: A } = o, E = [], v = (B, J, $t) => {
    var X, ct;
    const lt = { data: $t ?? { [S]: B }, id: B, index: E.length, top: 0 };
    if ($t || (lt.lazy = !0), E.push(lt), ((X = o.onAddRow) == null ? void 0 : X.call(this, lt, J)) !== !1) {
      for (const Dt of n)
        if (((ct = Dt.onAddRow) == null ? void 0 : ct.call(this, lt, J)) === !1)
          return;
    }
  };
  if (typeof $ == "number")
    for (let B = 0; B < $; B++)
      v(`${B}`, B);
  else
    Array.isArray($) && $.forEach((B, J) => {
      typeof B == "object" ? v(`${B[S] ?? ""}`, J, B) : v(`${B ?? ""}`, J);
    });
  let k = E;
  const N = {};
  if (o.onAddRows) {
    const B = o.onAddRows.call(this, k);
    B && (k = B);
  }
  for (const B of n) {
    const J = (Z = B.onAddRows) == null ? void 0 : Z.call(this, k);
    J && (k = J);
  }
  k.forEach((B, J) => {
    N[B.id] = B, B.index = J, B.top = B.index * A;
  });
  const { header: G, footer: j } = o, R = G ? o.headerHeight || A : 0, C = j ? o.footerHeight || A : 0;
  let x = o.height, D = 0;
  const M = k.length * A, O = R + C + M;
  if (typeof x == "function" && (x = x.call(this, O)), x === "auto")
    D = O;
  else if (typeof x == "object")
    D = Math.min(x.max, Math.max(x.min, O));
  else if (x === "100%") {
    const { parent: B } = this;
    if (B)
      D = B.clientHeight;
    else {
      D = 0, H(this, He, !0);
      return;
    }
  } else
    D = x;
  const P = D - R - C, U = g - f - y, V = {
    options: o,
    allRows: E,
    width: g,
    height: D,
    rows: k,
    rowsMap: N,
    rowHeight: A,
    rowsHeight: P,
    rowsHeightTotal: M,
    header: G,
    footer: j,
    footerGenerators: s,
    headerHeight: R,
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
      fixedRightWidth: y
    }
  }, z = (kt = o.onLayout) == null ? void 0 : kt.call(this, V);
  z && Object.assign(V, z), n.forEach((B) => {
    if (B.onLayout) {
      const J = B.onLayout.call(this, V);
      J && Object.assign(V, J);
    }
  }), H(this, Jt, V);
}, bc = new WeakSet(), Rv = function() {
  (I(this, yc, Lv).call(this) || !b(this, Jt)) && I(this, vc, Nv).call(this);
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
  const { rowsHeightTotal: h, rowsHeight: i, rows: d, rowHeight: u } = n, a = Math.min(Math.max(0, h - i), this.state.scrollTop), f = Math.floor(a / u), y = a + i, p = Math.min(d.length, Math.ceil(y / u)), m = [], { rowDataGetter: g } = this.options;
  for (let w = f; w < p; w++) {
    const $ = d[w];
    $.lazy && g && ($.data = g([$.id])[0], $.lazy = !1), m.push($);
  }
  return n.visibleRows = m, n.scrollTop = a, n.scrollLeft = o, n;
}, L(Bi, "addPlugin", xv), L(Bi, "removePlugin", Sv), Bi);
function Sh(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((s) => s.classList.add(o));
}
const MS = {
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
      Sh(this, o);
    },
    mouseleave() {
      Sh(this, !1);
    }
  }
}, LS = $o(MS, { buildIn: !0 });
function NS(t, e) {
  var l, c;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (_, h) => {
    s && !s.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !Dv.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
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
function RS(t) {
  return this.state.checkedRows[t] ?? !1;
}
function Dv() {
  var n, o;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, r) => s + (e.call(this, r.id) ? 1 : 0), 0)) : t === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function DS() {
  return Object.keys(this.state.checkedRows);
}
const PS = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: NS,
    isRowChecked: RS,
    isAllRowChecked: Dv,
    getChecks: DS
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
        /* @__PURE__ */ q("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ q("input", { type: "checkbox", checked: t }) })
      ];
    },
    checkedInfo(t, e) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ q("div", { children: o.join(", ") })
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
      const _ = this.isRowChecked(o), h = ((c = this.options.checkboxRender) == null ? void 0 : c.call(this, _, o)) ?? /* @__PURE__ */ q("input", { type: "checkbox", checked: _ });
      t.unshift(h), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var l;
    const { id: o } = e, { checkbox: s } = n.setting;
    if (typeof s == "function" ? s.call(this, o) : s) {
      const c = this.isAllRowChecked(), _ = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, c, o)) ?? /* @__PURE__ */ q("input", { type: "checkbox", checked: c });
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
}, OS = $o(PS);
var Pv = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(Pv || {});
function Pa(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, o = e.children && n && n[t];
  let s = !1, { parent: r } = e;
  for (; r; ) {
    const l = Pa.call(this, r);
    if (l.state !== "expanded") {
      s = !0;
      break;
    }
    r = l.parent;
  }
  return e.state = s ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Pa.call(this, e.parent).level + 1 : 0, e;
}
function HS(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !Ov.call(this)), e) {
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
function Ov() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function Hv(t, e = 0, n, o = 0) {
  var s;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const l = t.get(r);
    l && (l.level === o && (l.order = e++), (s = l.children) != null && s.length && (e = Hv(t, e, l.children, o + 1)));
  }
  return e;
}
function Wv(t, e, n, o) {
  const s = t.getNestedRowInfo(e);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = n, Wv(t, r, n, o);
  }), s;
}
function Iv(t, e, n, o, s) {
  var c;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : s[_]);
    return n === h;
  })) && (o[e] = n), r.parent && Iv(t, r.parent, n, o, s);
}
const WS = {
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
        const l = Wv(this, s, r, o);
        l != null && l.parent && Iv(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: HS,
    isAllCollapsed: Ov,
    getNestedRowInfo: Pa
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
    ), Hv(this.data.nestedMap), t.sort((e, n) => {
      const o = this.getNestedRowInfo(e.id), s = this.getNestedRowInfo(n.id), r = (o.order ?? 0) - (s.order ?? 0);
      return r === 0 ? e.index - n.index : r;
    }), t;
  },
  onRenderCell(t, { col: e, row: n }) {
    var c;
    const { id: o, data: s } = n, { nestedToggle: r } = e.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && t.unshift(((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, o, e, s)) ?? /* @__PURE__ */ q("a", { role: "button", className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ q("span", { className: "toggle-icon" }) })), l.level) {
      let { nestedIndent: _ = r } = e.setting;
      _ && (_ === !0 && (_ = this.options.nestedIndent ?? 12), t.unshift(/* @__PURE__ */ q("div", { className: "dtable-nested-indent", style: { width: _ * l.level + "px" } })));
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var s;
    const { id: o } = e;
    return n.setting.nestedToggle && t.unshift(((s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, n, void 0)) ?? /* @__PURE__ */ q("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ q("span", { className: "toggle-icon" }) })), t;
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
}, IS = $o(WS);
const US = {
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
        const { linkTemplate: o = "", linkProps: s } = e.setting, r = Wt(o, n.data);
        return t[0] = /* @__PURE__ */ q("a", { href: r, ...s, children: t[0] }), t;
      }
    },
    avatar: {
      onRenderCell(t, { col: e, row: n }) {
        const { data: o } = n, { avatarWithName: s, avatarClass: r = "size-xs circle", avatarKey: l = `${e.name}Avatar` } = e.setting, c = /* @__PURE__ */ q("div", { className: `avatar ${r} flex-none`, children: /* @__PURE__ */ q("img", { src: o ? o[l] : "" }) });
        return s ? t.unshift(c) : t[0] = c, t;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(t, { col: e }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = e.setting, l = (n - o) / 2, c = n / 2, _ = t[0];
        return t[0] = /* @__PURE__ */ q("svg", { width: n, height: n, children: [
          /* @__PURE__ */ q("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: s, fill: "transparent" }),
          /* @__PURE__ */ q("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - _) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ q("text", { x: c, y: c + o, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${l}px` }, children: Math.round(_) })
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
            return h && (_ = { className: l, ...h, ..._ }), Wt(s, _);
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
        return typeof o == "function" ? t[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? t[0] = Aa(r, o) : s === "html" ? t[0] = { html: Wt(o, r) } : t[0] = Wt(o, r), t;
      }
    }
  }
}, FS = $o(US, { buildIn: !0 }), BS = {
  name: "sort-type",
  onRenderHeaderCell(t, { col: e }) {
    const { sortType: n } = e.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: s } = e.setting, r = n === !0 ? "none" : n;
      if (t.push(
        /* @__PURE__ */ q("div", { className: `dtable-sort dtable-sort-${r}` }),
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
}, jS = $o(BS, { buildIn: !0 }), zS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Pv,
  checkable: OS,
  colHover: LS,
  nested: IS,
  rich: FS,
  sortType: jS
}, Symbol.toStringTag, { value: "Module" }));
class xo extends At {
}
L(xo, "NAME", "dtable"), L(xo, "Component", TS), L(xo, "definePlugin", $o), L(xo, "removePlugin", Sv), L(xo, "plugins", zS);
var Bt;
class Lo extends oe {
  constructor() {
    super(...arguments);
    T(this, Bt, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Bt, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), b(this, Bt) && (this.addActive(b(this, Bt).parentElement, b(this, Bt)), b(this, Bt).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Bt, document.querySelector(n)), b(this, Bt) && (this.addActive(b(this, Bt).parentElement, b(this, Bt)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
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
Bt = new WeakMap(), L(Lo, "NAME", "NavTabs"), L(Lo, "NAV_CLASS", "nav-tabs"), L(Lo, "EVENTS", !0), L(Lo, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (t) => {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new Lo(t.target).showTarget());
});
export {
  Z_ as ActionMenu,
  Q_ as ActionMenuNested,
  ff as Avatar,
  hf as BtnGroup,
  iu as Button,
  Ht as ContextMenu,
  xo as DTable,
  jt as Datepicker,
  Nt as Dropdown,
  Ha as EventBus,
  su as Menu,
  Ri as Messager,
  Ot as Modal,
  sr as ModalTrigger,
  Mf as Nav,
  Lo as NavTabs,
  Rf as Pager,
  Uf as Picker,
  Iu as ProgressCircle,
  Vu as Switch,
  ye as TIME_DAY,
  zt as Timepicker,
  Jf as Toolbar,
  Vt as Tooltip,
  _h as VirtualGrid,
  eb as addI18nMap,
  rC as browser,
  Nf as calculateTimestamp,
  iC as cash,
  GS as convertBytes,
  Ut as createDate,
  YS as formatBytes,
  Aa as formatDate,
  hC as formatDateSpan,
  Wt as formatString,
  Qv as getLangCode,
  dC as getTimeBeforeDesc,
  xi as i18n,
  fC as isDBY,
  Xc as isObject,
  Ai as isSameDay,
  kk as isSameMonth,
  cC as isSameWeek,
  Lf as isSameYear,
  aC as isToday,
  uC as isTomorrow,
  _C as isYesterday,
  da as mergeDeep,
  ha as nativeEvents,
  tb as setLangCode,
  r$ as store
};
