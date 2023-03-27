var Ev = Object.defineProperty;
var Tv = (t, e, n) => e in t ? Ev(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var M = (t, e, n) => (Tv(t, typeof e != "symbol" ? e + "" : e, n), n), Kc = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var y = (t, e, n) => (Kc(t, e, "read from private field"), n ? n.call(t) : e.get(t)), E = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, H = (t, e, n, o) => (Kc(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n), U_ = (t, e, n, o) => ({
  set _(s) {
    H(t, e, s, n);
  },
  get _() {
    return y(t, e, o);
  }
}), W = (t, e, n) => (Kc(t, e, "access private method"), n);
var kc, ot, kh, xh, Do, F_, ss = {}, Sh = [], Av = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Fe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ch(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Eh(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? kc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Bi(t, l, o, s, null);
}
function Bi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++kh };
  return s == null && ot.vnode != null && ot.vnode(r), r;
}
function Lv() {
  return { current: null };
}
function xc(t) {
  return t.children;
}
function ji(t, e) {
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
function Th(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Th(t);
  }
}
function B_(t) {
  (!t.__d && (t.__d = !0) && Do.push(t) && !ls.__r++ || F_ !== ot.debounceRendering) && ((F_ = ot.debounceRendering) || setTimeout)(ls);
}
function ls() {
  for (var t; ls.__r = Do.length; )
    t = Do.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Do = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Fe({}, r)).__v = r.__v + 1, Wa(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? br(r), r.__h), Rh(o, r), r.__e != l && Th(r)));
    });
}
function Ah(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Sh, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Bi(null, a, null, null, a) : Array.isArray(a) ? Bi(xc, { children: a }, null, null, null) : a.__b > 0 ? Bi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Wa(t, a, u = u || ss, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Lh(a, _, t) : _ = Mh(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = br(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Dh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Nh(p[i], p[++i], p[++i]);
}
function Lh(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Lh(o, e, n) : Mh(n, o, o, s, o.__e, e));
  return e;
}
function Mh(t, e, n, o, s, r) {
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
function Mv(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || cs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || cs(t, r, e[r], n[r], o);
}
function j_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Av.test(e) ? n : n + "px";
}
function cs(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || j_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || j_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? V_ : z_, r) : t.removeEventListener(e, r ? V_ : z_, r);
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
function z_(t) {
  this.l[t.type + !1](ot.event ? ot.event(t) : t);
}
function V_(t) {
  this.l[t.type + !0](ot.event ? ot.event(t) : t);
}
function Wa(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ot.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new ji(p, g), i.constructor = b, i.render = Nv), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Fe({}, i.__s)), Fe(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Fe(Fe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === xc && h.key == null ? h.props.children : h, Ah(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Rv(n.__e, e, n, o, s, r, l, _);
    (h = ot.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ot.__e(x, e, n);
  }
}
function Rh(t, e) {
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
function Rv(t, e, n, o, s, r, l, c) {
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
    if (r = r && kc.call(t.childNodes), h = (d = n.props || ss).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Mv(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Ah(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && br(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Ch(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && cs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && cs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Nh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ot.__e(o, n);
  }
}
function Dh(t, e, n) {
  var o, s;
  if (ot.unmount && ot.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Nh(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Dh(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Ch(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Nv(t, e, n) {
  return this.constructor(t, n);
}
function Dv(t, e, n) {
  var o, s, r;
  ot.__ && ot.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Wa(e, t = (!o && n || e).__k = Eh(xc, null, [t]), s || ss, ss, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? kc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Rh(r, t);
}
kc = Sh.slice, ot = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, kh = 0, xh = function(t) {
  return t != null && t.constructor === void 0;
}, ji.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Fe({}, this.state), typeof t == "function" && (t = t(Fe({}, n), this.props)), t && Fe(n, t), t != null && this.__v && (e && this._sb.push(e), B_(this));
}, ji.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), B_(this));
}, ji.prototype.render = xc, Do = [], ls.__r = 0;
var Pv = 0;
function Ph(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Pv, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ot.vnode && ot.vnode(_), _;
}
var we;
class Ov {
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
const pa = /* @__PURE__ */ new Set([
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
class Ia extends Ov {
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
    return typeof e == "string" && (pa.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(Ia.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (pa.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
var $e, Vr, bn, Ao;
class Y_ extends Ia {
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
  return pa.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Hv(t, e) {
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
function Wv(t, e, n) {
  const o = Hv(t, e), s = o[o.length - 1];
  return s === void 0 ? n : s;
}
function Jc(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function ma(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (Jc(t) && Jc(n))
    for (const o in n)
      Jc(n[o]) ? (t[o] || Object.assign(t, { [o]: {} }), ma(t[o], n[o])) : Object.assign(t, { [o]: n[o] });
  return ma(t, ...e);
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
var Ua = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(Ua || {});
function kS(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / Ua[n]).toFixed(e) + n);
}
const xS = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const o = n[1];
  return t = t.replace(o, ""), Number.parseInt(t, 10) * Ua[o];
};
var $h;
let Fa = (($h = document.documentElement.getAttribute("lang")) == null ? void 0 : $h.toLowerCase()) ?? "zh_cn", Ne;
function Iv() {
  return Fa;
}
function Uv(t) {
  Fa = t.toLowerCase();
}
function Fv(t, e) {
  Ne || (Ne = {}), typeof t == "string" && (t = { [t]: e ?? {} }), ma(Ne, t);
}
function Ci(t, e, n, o, s, r) {
  Array.isArray(t) ? Ne && t.unshift(Ne) : t = Ne ? [Ne, t] : [t], typeof n == "string" && (r = s, s = o, o = n, n = void 0);
  const l = s || Fa;
  let c;
  for (const _ of t) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const i = r && _ === Ne ? `${r}.${e}` : e;
    if (c = Wv(h, i), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? It(c, ...Array.isArray(n) ? n : [n]) : c;
}
Ci.addLang = Fv;
Ci.getCode = Iv;
Ci.setCode = Uv;
function Bv(t) {
  return Object.fromEntries(Object.entries(t).map(([e, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [e, n];
  }));
}
const Zc = /* @__PURE__ */ new Map();
var ke, Bn, Zt;
class ie {
  constructor(e, n) {
    E(this, ke, void 0);
    E(this, Bn, void 0);
    E(this, Zt, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, this.constructor.EVENTS && H(this, Zt, new Y_(e, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, ke, { ...this.constructor.DEFAULT }), this.setOptions({ ...e instanceof HTMLElement ? Bv(e.dataset) : null, ...n }), this.constructor.all.set(e, this), H(this, Bn, e), this.init(), requestAnimationFrame(() => {
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
    let o = Y_.createEvent(e, n);
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
    if (Zc.has(e))
      return Zc.get(e);
    const n = /* @__PURE__ */ new Map();
    return Zc.set(e, n), n;
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
    M(this, "ref", Lv());
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
    Dv(/* @__PURE__ */ Ph(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
M(At, "Component");
var Ba, _t, Oh, Hh, Po, q_, Wh = {}, Ih = [], jv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Be(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Uh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ko(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ba.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return zi(t, l, o, s, null);
}
function zi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Oh };
  return s == null && _t.vnode != null && _t.vnode(r), r;
}
function zv() {
  return { current: null };
}
function ja(t) {
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
function Fh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Fh(t);
  }
}
function G_(t) {
  (!t.__d && (t.__d = !0) && Po.push(t) && !as.__r++ || q_ !== _t.debounceRendering) && ((q_ = _t.debounceRendering) || setTimeout)(as);
}
function as() {
  for (var t; as.__r = Po.length; )
    t = Po.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Po = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Be({}, r)).__v = r.__v + 1, Vh(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? wr(r), r.__h), Yv(o, r), r.__e != l && Fh(r)));
    });
}
function Bh(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Ih, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? zi(null, a, null, null, a) : Array.isArray(a) ? zi(ja, { children: a }, null, null, null) : a.__b > 0 ? zi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Vh(t, a, u = u || Wh, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = jh(a, _, t) : _ = zh(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = wr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && qh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Yh(p[i], p[++i], p[++i]);
}
function jh(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? jh(o, e, n) : zh(n, o, o, s, o.__e, e));
  return e;
}
function zh(t, e, n, o, s, r) {
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
    r === "children" || r === "key" || r in e || _s(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || _s(t, r, e[r], n[r], o);
}
function X_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || jv.test(e) ? n : n + "px";
}
function _s(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || X_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || X_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? J_ : K_, r) : t.removeEventListener(e, r ? J_ : K_, r);
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
function K_(t) {
  this.l[t.type + !1](_t.event ? _t.event(t) : t);
}
function J_(t) {
  this.l[t.type + !0](_t.event ? _t.event(t) : t);
}
function Vh(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = _t.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Oo(p, g), i.constructor = b, i.render = Gv), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Be({}, i.__s)), Be(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Be(Be({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === ja && h.key == null ? h.props.children : h, Bh(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = qv(n.__e, e, n, o, s, r, l, _);
    (h = _t.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), _t.__e(x, e, n);
  }
}
function Yv(t, e) {
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
function qv(t, e, n, o, s, r, l, c) {
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
    if (r = r && Ba.call(t.childNodes), h = (d = n.props || Wh).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Vv(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Bh(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && wr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Uh(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && _s(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && _s(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Yh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    _t.__e(o, n);
  }
}
function qh(t, e, n) {
  var o, s;
  if (_t.unmount && _t.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Yh(o, null, e)), (o = t.__c) != null) {
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
      o[s] && qh(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Uh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Gv(t, e, n) {
  return this.constructor(t, n);
}
Ba = Ih.slice, _t = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Oh = 0, Hh = function(t) {
  return t != null && t.constructor === void 0;
}, Oo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Be({}, this.state), typeof t == "function" && (t = t(Be({}, n), this.props)), t && Be(n, t), t != null && this.__v && (e && this._sb.push(e), G_(this));
}, Oo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), G_(this));
}, Oo.prototype.render = ja, Po = [], as.__r = 0;
var Xv = 0;
function qt(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Xv, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return _t.vnode && _t.vnode(_), _;
}
function Sc(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), o = (s, r) => {
    if (Array.isArray(s) && (r = s[1], s = s[0]), !s.length)
      return;
    const l = n.get(s);
    typeof l == "number" ? e[l][1] = !!r : (n.set(s, e.length), e.push([s, !!r]));
  };
  return t.forEach((s) => {
    typeof s == "function" && (s = s()), Array.isArray(s) ? Sc(...s).forEach(o) : s && typeof s == "object" ? Object.entries(s).forEach(o) : typeof s == "string" && s.split(" ").forEach((r) => o(r, !0));
  }), e.sort((s, r) => (n.get(s[0]) || 0) - (n.get(r[0]) || 0));
}
const F = (...t) => Sc(...t).reduce((e, [n, o]) => (o && e.push(n), e), []).join(" ");
function Kv({
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
function Gh({
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
function Jv({
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
function Zv({
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
function Qv(t) {
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
      m != null && (typeof m == "object" && !xh(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ Ph("div", { className: F(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? f.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && d.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(i, m.attrs)) : a.push(m));
    });
  }), f.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: f } }), [{
    className: F(d),
    style: u,
    ...i
  }, a];
}
function ga({
  tag: t = "div",
  ...e
}) {
  const [n, o] = Qv(e);
  return Eh(t, n, ...o);
}
function tb({ type: t, ...e }) {
  return /* @__PURE__ */ qt(ga, { ...e });
}
function Xh({
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
    M(this, "ref", zv());
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
        if (Hh(p))
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
  divider: Kv,
  item: Gh,
  heading: Jv,
  space: Zv,
  custom: tb,
  basic: Xh
}), M(Eo, "ROOT_TAG", "menu"), M(Eo, "NAME", "action-menu"), Eo);
class Z_ extends At {
}
M(Z_, "NAME", "actionmenu"), M(Z_, "Component", mo);
function Q_({
  ...t
}) {
  return /* @__PURE__ */ qt(Gh, { ...t });
}
var ua, Yr, se, jn;
let Kh = (ua = class extends mo {
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
    ], r.component = Q_), this.nestedTrigger === "hover")
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
}, Yr = new WeakMap(), se = new WeakMap(), jn = new WeakMap(), M(ua, "ItemComponents", {
  item: Q_
}), ua);
class tu extends At {
}
M(tu, "NAME", "actionmenunested"), M(tu, "Component", Kh);
var za, ut, Jh, Ho, eu, Zh = {}, Qh = [], eb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function je(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function td(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function nb(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? za.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Vi(t, l, o, s, null);
}
function Vi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Jh };
  return s == null && ut.vnode != null && ut.vnode(r), r;
}
function Va(t) {
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
function ed(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ed(t);
  }
}
function nu(t) {
  (!t.__d && (t.__d = !0) && Ho.push(t) && !us.__r++ || eu !== ut.debounceRendering) && ((eu = ut.debounceRendering) || setTimeout)(us);
}
function us() {
  for (var t; us.__r = Ho.length; )
    t = Ho.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Ho = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = je({}, r)).__v = r.__v + 1, id(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? $r(r), r.__h), rb(o, r), r.__e != l && ed(r)));
    });
}
function nd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Qh, g = m.length;
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
      id(t, a, u = u || Zh, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = od(a, _, t) : _ = rd(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = $r(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && ld(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      sd(p[i], p[++i], p[++i]);
}
function od(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? od(o, e, n) : rd(n, o, o, s, o.__e, e));
  return e;
}
function rd(t, e, n, o, s, r) {
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
function ob(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || fs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || fs(t, r, e[r], n[r], o);
}
function ou(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || eb.test(e) ? n : n + "px";
}
function fs(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || ou(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || ou(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? iu : ru, r) : t.removeEventListener(e, r ? iu : ru, r);
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
function ru(t) {
  this.l[t.type + !1](ut.event ? ut.event(t) : t);
}
function iu(t) {
  this.l[t.type + !0](ut.event ? ut.event(t) : t);
}
function id(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ut.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Wo(p, g), i.constructor = b, i.render = sb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = je({}, i.__s)), je(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = je(je({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === Va && h.key == null ? h.props.children : h, nd(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = ib(n.__e, e, n, o, s, r, l, _);
    (h = ut.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ut.__e(x, e, n);
  }
}
function rb(t, e) {
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
function ib(t, e, n, o, s, r, l, c) {
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
    if (r = r && za.call(t.childNodes), h = (d = n.props || Zh).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (ob(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, nd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && $r(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && td(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && fs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && fs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function sd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ut.__e(o, n);
  }
}
function ld(t, e, n) {
  var o, s;
  if (ut.unmount && ut.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || sd(o, null, e)), (o = t.__c) != null) {
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
      o[s] && ld(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || td(t.__e), t.__ = t.__e = t.__d = void 0;
}
function sb(t, e, n) {
  return this.constructor(t, n);
}
za = Qh.slice, ut = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Jh = 0, Wo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = je({}, this.state), typeof t == "function" && (t = t(je({}, n), this.props)), t && je(n, t), t != null && this.__v && (e && this._sb.push(e), nu(this));
}, Wo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), nu(this));
}, Wo.prototype.render = Va, Ho = [], us.__r = 0;
var lb = 0;
function So(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --lb, __source: s, __self: o };
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
    return nb(
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
class su extends At {
}
M(su, "NAME", "button"), M(su, "Component", fe);
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
var cb = 0;
function ab(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --cb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ya.vnode && ya.vnode(_), _;
}
var fa;
let Ya = (fa = class extends Kh {
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
    return /* @__PURE__ */ ab("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, M(fa, "NAME", "menu"), fa);
class lu extends At {
}
M(lu, "NAME", "menu"), M(lu, "Component", Ya);
let _b = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var cd, ft, ad, Io, cu, _d = {}, ud = [], ub = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ze(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function fd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Qc(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++ad };
  return s == null && ft.vnode != null && ft.vnode(r), r;
}
function qa(t) {
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
function hd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return hd(t);
  }
}
function au(t) {
  (!t.__d && (t.__d = !0) && Io.push(t) && !hs.__r++ || cu !== ft.debounceRendering) && ((cu = ft.debounceRendering) || setTimeout)(hs);
}
function hs() {
  for (var t; hs.__r = Io.length; )
    t = Io.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Io = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = ze({}, r)).__v = r.__v + 1, gd(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? kr(r), r.__h), hb(o, r), r.__e != l && hd(r)));
    });
}
function dd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || ud, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Qc(null, a, null, null, a) : Array.isArray(a) ? Qc(qa, { children: a }, null, null, null) : a.__b > 0 ? Qc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      gd(t, a, u = u || _d, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = pd(a, _, t) : _ = md(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = kr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && vd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      yd(p[i], p[++i], p[++i]);
}
function pd(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? pd(o, e, n) : md(n, o, o, s, o.__e, e));
  return e;
}
function md(t, e, n, o, s, r) {
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
function fb(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ds(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ds(t, r, e[r], n[r], o);
}
function _u(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || ub.test(e) ? n : n + "px";
}
function ds(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || _u(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || _u(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? fu : uu, r) : t.removeEventListener(e, r ? fu : uu, r);
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
function uu(t) {
  this.l[t.type + !1](ft.event ? ft.event(t) : t);
}
function fu(t) {
  this.l[t.type + !0](ft.event ? ft.event(t) : t);
}
function gd(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ft.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Uo(p, g), i.constructor = b, i.render = pb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = ze({}, i.__s)), ze(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = ze(ze({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === qa && h.key == null ? h.props.children : h, dd(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = db(n.__e, e, n, o, s, r, l, _);
    (h = ft.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ft.__e(x, e, n);
  }
}
function hb(t, e) {
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
function db(t, e, n, o, s, r, l, c) {
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
    if (r = r && cd.call(t.childNodes), h = (d = n.props || _d).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (fb(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, dd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && kr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && fd(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && ds(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && ds(t, "checked", f, d.checked, !1));
  }
  return t;
}
function yd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ft.__e(o, n);
  }
}
function vd(t, e, n) {
  var o, s;
  if (ft.unmount && ft.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || yd(o, null, e)), (o = t.__c) != null) {
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
      o[s] && vd(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || fd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function pb(t, e, n) {
  return this.constructor(t, n);
}
cd = ud.slice, ft = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, ad = 0, Uo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ze({}, this.state), typeof t == "function" && (t = t(ze({}, n), this.props)), t && ze(n, t), t != null && this.__v && (e && this._sb.push(e), au(this));
}, Uo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), au(this));
}, Uo.prototype.render = qa, Io = [], hs.__r = 0;
var mb = 0;
function gb(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --mb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ft.vnode && ft.vnode(_), _;
}
var va, On;
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
} }, On = function(t) {
  return t != null && t.constructor === void 0;
};
var yb = 0;
function ye(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --yb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return va.vnode && va.vnode(_), _;
}
var ba;
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
} };
var vb = 0;
function Cc(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --vb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ba.vnode && ba.vnode(_), _;
}
function bb({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Cc(fe, { type: n, ...o });
}
var bd, ht, wd, Fo, hu, $d = {}, kd = [], wb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ve(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function xd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ta(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++wd };
  return s == null && ht.vnode != null && ht.vnode(r), r;
}
function $b() {
  return { current: null };
}
function Ga(t) {
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
function Sd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Sd(t);
  }
}
function du(t) {
  (!t.__d && (t.__d = !0) && Fo.push(t) && !ps.__r++ || hu !== ht.debounceRendering) && ((hu = ht.debounceRendering) || setTimeout)(ps);
}
function ps() {
  for (var t; ps.__r = Fo.length; )
    t = Fo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Fo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ve({}, r)).__v = r.__v + 1, Ad(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? xr(r), r.__h), xb(o, r), r.__e != l && Sd(r)));
    });
}
function Cd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || kd, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ta(null, a, null, null, a) : Array.isArray(a) ? ta(Ga, { children: a }, null, null, null) : a.__b > 0 ? ta(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Ad(t, a, u = u || $d, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Ed(a, _, t) : _ = Td(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = xr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Md(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Ld(p[i], p[++i], p[++i]);
}
function Ed(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Ed(o, e, n) : Td(n, o, o, s, o.__e, e));
  return e;
}
function Td(t, e, n, o, s, r) {
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
function kb(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ms(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ms(t, r, e[r], n[r], o);
}
function pu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || wb.test(e) ? n : n + "px";
}
function ms(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || pu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || pu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? gu : mu, r) : t.removeEventListener(e, r ? gu : mu, r);
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
function mu(t) {
  this.l[t.type + !1](ht.event ? ht.event(t) : t);
}
function gu(t) {
  this.l[t.type + !0](ht.event ? ht.event(t) : t);
}
function Ad(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ht.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Bo(p, g), i.constructor = b, i.render = Cb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ve({}, i.__s)), Ve(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Ve(Ve({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === Ga && h.key == null ? h.props.children : h, Cd(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Sb(n.__e, e, n, o, s, r, l, _);
    (h = ht.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ht.__e(x, e, n);
  }
}
function xb(t, e) {
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
function Sb(t, e, n, o, s, r, l, c) {
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
    if (r = r && bd.call(t.childNodes), h = (d = n.props || $d).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (kb(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Cd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && xr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && xd(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && ms(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && ms(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Ld(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ht.__e(o, n);
  }
}
function Md(t, e, n) {
  var o, s;
  if (ht.unmount && ht.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Ld(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Md(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || xd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Cb(t, e, n) {
  return this.constructor(t, n);
}
bd = kd.slice, ht = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, wd = 0, Bo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ve({}, this.state), typeof t == "function" && (t = t(Ve({}, n), this.props)), t && Ve(n, t), t != null && this.__v && (e && this._sb.push(e), du(this));
}, Bo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), du(this));
}, Bo.prototype.render = Ga, Fo = [], ps.__r = 0;
var Eb = 0;
function Rd(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Eb, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ht.vnode && ht.vnode(_), _;
}
var Ec, rt, Nd, jo, yu, gs = {}, Dd = [], Tb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ye(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Pd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Od(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ec.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Yi(t, l, o, s, null);
}
function Yi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Nd };
  return s == null && rt.vnode != null && rt.vnode(r), r;
}
function Tc(t) {
  return t.children;
}
function qi(t, e) {
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
function Hd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Hd(t);
  }
}
function vu(t) {
  (!t.__d && (t.__d = !0) && jo.push(t) && !ys.__r++ || yu !== rt.debounceRendering) && ((yu = rt.debounceRendering) || setTimeout)(ys);
}
function ys() {
  for (var t; ys.__r = jo.length; )
    t = jo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), jo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ye({}, r)).__v = r.__v + 1, Xa(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Sr(r), r.__h), Fd(o, r), r.__e != l && Hd(r)));
    });
}
function Wd(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Dd, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Yi(null, a, null, null, a) : Array.isArray(a) ? Yi(Tc, { children: a }, null, null, null) : a.__b > 0 ? Yi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Xa(t, a, u = u || gs, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Id(a, _, t) : _ = Ud(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Sr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && jd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Bd(p[i], p[++i], p[++i]);
}
function Id(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Id(o, e, n) : Ud(n, o, o, s, o.__e, e));
  return e;
}
function Ud(t, e, n, o, s, r) {
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
function bu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Tb.test(e) ? n : n + "px";
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
  this.l[t.type + !1](rt.event ? rt.event(t) : t);
}
function $u(t) {
  this.l[t.type + !0](rt.event ? rt.event(t) : t);
}
function Xa(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = rt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new qi(p, g), i.constructor = b, i.render = Mb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ye({}, i.__s)), Ye(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Ye(Ye({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === Tc && h.key == null ? h.props.children : h, Wd(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Lb(n.__e, e, n, o, s, r, l, _);
    (h = rt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), rt.__e(x, e, n);
  }
}
function Fd(t, e) {
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
function Lb(t, e, n, o, s, r, l, c) {
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
    if (r = r && Ec.call(t.childNodes), h = (d = n.props || gs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Ab(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Wd(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Sr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Pd(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && vs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && vs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Bd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    rt.__e(o, n);
  }
}
function jd(t, e, n) {
  var o, s;
  if (rt.unmount && rt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Bd(o, null, e)), (o = t.__c) != null) {
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
      o[s] && jd(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Pd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Mb(t, e, n) {
  return this.constructor(t, n);
}
function Rb(t, e, n) {
  var o, s, r;
  rt.__ && rt.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Xa(e, t = (!o && n || e).__k = Od(Tc, null, [t]), s || gs, gs, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Ec.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Fd(r, t);
}
Ec = Dd.slice, rt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Nd = 0, qi.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ye({}, this.state), typeof t == "function" && (t = t(Ye({}, n), this.props)), t && Ye(n, t), t != null && this.__v && (e && this._sb.push(e), vu(this));
}, qi.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), vu(this));
}, qi.prototype.render = Tc, jo = [], ys.__r = 0;
function Nb(t) {
  return t.button === 2;
}
var Db = 0;
function Pb(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Db, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return rt.vnode && rt.vnode(_), _;
}
function Ka(t) {
  return t.split("-")[1];
}
function zd(t) {
  return t === "y" ? "height" : "width";
}
function Cr(t) {
  return t.split("-")[0];
}
function Vd(t) {
  return ["top", "bottom"].includes(Cr(t)) ? "x" : "y";
}
function ku(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Vd(e), _ = zd(c), h = o[_] / 2 - s[_] / 2, i = Cr(e), d = c === "x";
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
  switch (Ka(e)) {
    case "start":
      u[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      u[c] += h * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const Ob = async (t, e, n) => {
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
  } = ku(h, o, _), u = o, a = {}, f = 0;
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
      } = ku(h, u, _)), v = -1;
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
function Hb(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Wb(t) {
  return typeof t != "number" ? Hb(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function bs(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Ib(t, e) {
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
  } = e, f = Wb(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = bs(await r.getClippingRect({
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
  }, S = bs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Ub = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ws(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ub[e]);
}
function Fb(t, e, n) {
  n === void 0 && (n = !1);
  const o = Ka(t), s = Vd(t), r = zd(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = ws(l)), {
    main: l,
    cross: ws(l)
  };
}
const Bb = {
  start: "end",
  end: "start"
};
function wa(t) {
  return t.replace(/start|end/g, (e) => Bb[e]);
}
function jb(t) {
  const e = ws(t);
  return [wa(t), e, wa(e)];
}
function zb(t, e, n) {
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
function Vb(t, e, n, o) {
  const s = Ka(t);
  let r = zb(Cr(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(wa)))), r;
}
const Yd = function(t) {
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
      } = t, p = Cr(o), m = Cr(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [ws(l)] : jb(l));
      !d && a !== "none" && w.push(...Vb(l, f, a, g));
      const $ = [l, ...w], S = await Ib(e, v), A = [];
      let T = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = Fb(o, r, g);
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
  return Gd(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Ri;
function qd() {
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
function Gd(t) {
  return t instanceof Gt(t).Node;
}
function xu(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Gt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Ac(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = he(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function Yb(t) {
  return ["table", "td", "th"].includes(ln(t));
}
function Ja(t) {
  const e = /firefox/i.test(qd()), n = he(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function Xd() {
  return !/^((?!chrome|android).)*safari/i.test(qd());
}
function Za(t) {
  return ["html", "body", "#document"].includes(ln(t));
}
const Su = Math.min, zo = Math.max, $s = Math.round;
function Kd(t) {
  const e = he(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = $s(n) !== s || $s(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Jd(t) {
  return ee(t) ? t : t.contextElement;
}
const Zd = {
  x: 1,
  y: 1
};
function Hn(t) {
  const e = Jd(t);
  if (!Ce(e))
    return Zd;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = Kd(e);
  let l = (r ? $s(n.width) : n.width) / o, c = (r ? $s(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function An(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Jd(t);
  let _ = Zd;
  e && (o ? ee(o) && (_ = Hn(o)) : _ = Hn(t));
  const h = c ? Gt(c) : window, i = !Xd() && n;
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
  return ((Gd(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Lc(t) {
  return ee(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Qd(t) {
  return An(un(t)).left + Lc(t).scrollLeft;
}
function qb(t, e, n) {
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
    if ((ln(e) !== "body" || Ac(s)) && (l = Lc(e)), Ce(e)) {
      const _ = An(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = Qd(s));
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
    (xu(t) ? t.host : null) || // Fallback
    un(t)
  );
  return xu(e) ? e.host : e;
}
function Cu(t) {
  return !Ce(t) || he(t).position === "fixed" ? null : t.offsetParent;
}
function Gb(t) {
  let e = Er(t);
  for (; Ce(e) && !Za(e); ) {
    if (Ja(e))
      return e;
    e = Er(e);
  }
  return null;
}
function Eu(t) {
  const e = Gt(t);
  let n = Cu(t);
  for (; n && Yb(n) && he(n).position === "static"; )
    n = Cu(n);
  return n && (ln(n) === "html" || ln(n) === "body" && he(n).position === "static" && !Ja(n)) ? e : n || Gb(t) || e;
}
function Xb(t) {
  return Kd(t);
}
function Kb(t) {
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
  if ((s || !s && o !== "fixed") && ((ln(n) !== "body" || Ac(r)) && (l = Lc(n)), Ce(n))) {
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
function Jb(t, e) {
  const n = Gt(t), o = un(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = Xd();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Zb(t) {
  var e;
  const n = un(t), o = Lc(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = zo(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = zo(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + Qd(t);
  const _ = -o.scrollTop;
  return he(s || n).direction === "rtl" && (c += zo(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function tp(t) {
  const e = Er(t);
  return Za(e) ? t.ownerDocument.body : Ce(e) && Ac(e) ? e : tp(e);
}
function Vo(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = tp(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Gt(o);
  return s ? e.concat(r, r.visualViewport || [], Ac(o) ? o : []) : e.concat(o, Vo(o));
}
function Qb(t, e) {
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
function Tu(t, e, n) {
  return e === "viewport" ? bs(Jb(t, n)) : ee(e) ? Qb(e, n) : bs(Zb(un(t)));
}
function t0(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Vo(t).filter((c) => ee(c) && ln(c) !== "body"), s = null;
  const r = he(t).position === "fixed";
  let l = r ? Er(t) : t;
  for (; ee(l) && !Za(l); ) {
    const c = he(l), _ = Ja(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Er(l);
  }
  return e.set(t, o), o;
}
function e0(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? t0(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = Tu(e, i, s);
    return h.top = zo(d.top, h.top), h.right = Su(d.right, h.right), h.bottom = Su(d.bottom, h.bottom), h.left = zo(d.left, h.left), h;
  }, Tu(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const n0 = {
  getClippingRect: e0,
  convertOffsetParentRelativeRectToViewportRelativeRect: Kb,
  isElement: ee,
  getDimensions: Xb,
  getOffsetParent: Eu,
  getDocumentElement: un,
  getScale: Hn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || Eu, r = this.getDimensions;
    return {
      reference: qb(e, await s(n), o),
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
function o0(t, e, n, o) {
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
const ep = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: n0,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return Ob(t, e, {
    ...s,
    platform: r
  });
};
let r0 = class extends Ya {
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context menu-popup";
  }
  componentWillUnmount() {
    super.componentWillUnmount();
  }
  _getPopperOptions() {
    return {
      middleware: [Yd()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  _createPopper() {
    const e = this._getPopperOptions();
    this.ref.current && ep(this._getPopperElement(), this.ref.current, e).then(({ x: n, y: o }) => {
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
  renderToggleIcon() {
    return /* @__PURE__ */ Pb("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var De, zn, qr, Gr, fl, np, hl, op;
class Wt extends ie {
  constructor() {
    super(...arguments);
    E(this, fl);
    E(this, hl);
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
    return this.options.flip && ((r = s.middleware) == null || r.push(Yd())), s;
  }
  _createPopper() {
    const n = this._getPopperOptions(), o = this._getPopperElement();
    H(this, Gr, o0(o, this.menu, () => {
      ep(o, this.menu, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
        Object.assign(this.menu.style, {
          left: `${s}px`,
          top: `${r}px`
        });
        const _ = c.split("-")[0], h = W(this, fl, np).call(this, _);
        if (l.arrow && this.arrowEl) {
          const { x: i, y: d } = l.arrow;
          Object.assign(this.arrowEl.style, {
            left: i != null ? `${i}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...W(this, hl, op).call(this, _)
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Rb(Od(r0, n), this.menu), !0);
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
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)) || o && Nb(o))
      return;
    const l = this.getAll().entries(), c = new Set(s || []);
    for (const [i, d] of l)
      c.has(i) || d.hide();
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
}
De = new WeakMap(), zn = new WeakMap(), qr = new WeakMap(), Gr = new WeakMap(), fl = new WeakSet(), np = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, hl = new WeakSet(), op = function(n) {
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
function rp(t) {
  return t.split("-")[1];
}
function i0(t) {
  return t === "y" ? "height" : "width";
}
function ip(t) {
  return t.split("-")[0];
}
function sp(t) {
  return ["top", "bottom"].includes(ip(t)) ? "x" : "y";
}
function s0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function l0(t) {
  return typeof t != "number" ? s0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
const c0 = Math.min, a0 = Math.max;
function _0(t, e, n) {
  return a0(t, c0(e, n));
}
const u0 = (t) => ({
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
    const h = l0(o), i = {
      x: s,
      y: r
    }, d = sp(l), u = i0(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], T = w / 2 - a[u] / 2 + $, b = _0(S, T, A), R = rp(l) != null && T != b && c.reference[u] / 2 - (T < S ? h[f] : h[v]) - a[u] / 2 < 0 ? T < S ? S - T : A - T : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: T - b
      }
    };
  }
});
async function f0(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = ip(n), c = rp(n), _ = sp(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const h0 = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await f0(e, t);
      return {
        x: n + s.x,
        y: o + s.y,
        data: s
      };
    }
  };
};
var Vn, Yn, qn, dl, lp;
const N_ = class extends Wt {
  constructor() {
    super(...arguments);
    E(this, dl);
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
    (o == null ? void 0 : o.clearOthers) !== !1 && N_.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!y(this, Vn) && this.isHover && W(this, dl, lp).call(this), this.element.classList.add(this.elementShowClass)), s;
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
    return o && this.arrowEl && ((s = n.middleware) == null || s.push(h0(o)), (r = n.middleware) == null || r.push(u0({ element: this.arrowEl }))), n;
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
Vn = new WeakMap(), Yn = new WeakMap(), qn = new WeakMap(), dl = new WeakSet(), lp = function() {
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
const d0 = (t) => {
  const e = document.getElementsByClassName("with-dropdown-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Nt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Nt.clear({ event: t });
};
window.addEventListener("scroll", d0, !0);
var Xr, Gn;
class p0 extends Bo {
  constructor(n) {
    var o;
    super(n);
    E(this, Xr, void 0);
    E(this, Gn, $b());
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
    return /* @__PURE__ */ Rd("div", { ...o, children: n });
  }
}
Xr = new WeakMap(), Gn = new WeakMap();
class m0 extends p0 {
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
    return o.caret = s, /* @__PURE__ */ Rd(fe, { ...o });
  }
}
function cp({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Cc(m0, { type: n, ...o });
}
var Qa, dt, ap, _p, Yo, Au, up = {}, fp = [], g0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function hp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function y0(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Qa.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Gi(t, l, o, s, null);
}
function Gi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++ap };
  return s == null && dt.vnode != null && dt.vnode(r), r;
}
function t_(t) {
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
function Lu(t) {
  (!t.__d && (t.__d = !0) && Yo.push(t) && !ks.__r++ || Au !== dt.debounceRendering) && ((Au = dt.debounceRendering) || setTimeout)(ks);
}
function ks() {
  for (var t; ks.__r = Yo.length; )
    t = Yo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Yo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = qe({}, r)).__v = r.__v + 1, yp(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Tr(r), r.__h), b0(o, r), r.__e != l && dp(r)));
    });
}
function pp(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || fp, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Gi(null, a, null, null, a) : Array.isArray(a) ? Gi(t_, { children: a }, null, null, null) : a.__b > 0 ? Gi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      yp(t, a, u = u || up, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = mp(a, _, t) : _ = gp(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Tr(u));
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
function v0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || xs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || xs(t, r, e[r], n[r], o);
}
function Mu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || g0.test(e) ? n : n + "px";
}
function xs(t, e, n, o, s) {
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
function yp(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = dt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new qo(p, g), i.constructor = b, i.render = $0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = qe({}, i.__s)), qe(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = qe(qe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === t_ && h.key == null ? h.props.children : h, pp(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = w0(n.__e, e, n, o, s, r, l, _);
    (h = dt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), dt.__e(x, e, n);
  }
}
function b0(t, e) {
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
function w0(t, e, n, o, s, r, l, c) {
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
    if (r = r && Qa.call(t.childNodes), h = (d = n.props || up).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (v0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, pp(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Tr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && hp(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && xs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && xs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function vp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    dt.__e(o, n);
  }
}
function bp(t, e, n) {
  var o, s;
  if (dt.unmount && dt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || vp(o, null, e)), (o = t.__c) != null) {
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
      o[s] && bp(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || hp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function $0(t, e, n) {
  return this.constructor(t, n);
}
Qa = fp.slice, dt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, ap = 0, _p = function(t) {
  return t != null && t.constructor === void 0;
}, qo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qe({}, this.state), typeof t == "function" && (t = t(qe({}, n), this.props)), t && qe(n, t), t != null && this.__v && (e && this._sb.push(e), Lu(this));
}, qo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Lu(this));
}, qo.prototype.render = t_, Yo = [], ks.__r = 0;
var k0 = 0;
function Du(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --k0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return dt.vnode && dt.vnode(_), _;
}
let wp = class extends qo {
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
    return /* @__PURE__ */ Du(fe, { ...s }, o);
  }
  renderItem(e, n, o) {
    const { itemRender: s, defaultBtnProps: r, onClickItem: l } = e, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), s) {
      const _ = s.call(this, c, y0);
      if (_p(_))
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
    return /* @__PURE__ */ Du(
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
function x0({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Cc(wp, { type: n, ...o });
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
    return /* @__PURE__ */ Cc(e, { ...r });
  }
}, M(Pn, "ItemComponents", {
  item: bb,
  dropdown: cp,
  "btn-group": x0
}), M(Pn, "ROOT_TAG", "nav"), M(Pn, "NAME", "toolbar"), M(Pn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), Pn);
function S0({
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
function C0(t) {
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
let E0 = class extends Uo {
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
    return /* @__PURE__ */ gb(
      S0,
      {
        className: F("messager", _, s, l === !0 ? C0(r) : l, c ? "in" : ""),
        ...i
      }
    );
  }
};
var Xn, Ki;
class Xi extends At {
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
}, M(Xi, "NAME", "MessagerItem"), M(Xi, "EVENTS", !0), M(Xi, "Component", E0);
var wn, Kn, xe, pl, $p, ml, kp;
const D_ = class extends ie {
  constructor() {
    super(...arguments);
    E(this, pl);
    E(this, ml);
    E(this, wn, void 0);
    E(this, Kn, _b(6));
    E(this, xe, void 0);
  }
  get id() {
    return y(this, Kn);
  }
  get isShown() {
    var n;
    return !!((n = y(this, xe)) != null && n.isShown);
  }
  show(n) {
    this.setOptions(n), W(this, pl, $p).call(this).show();
  }
  hide() {
    var n;
    (n = y(this, xe)) == null || n.hide();
  }
  static show(n) {
    typeof n == "string" && (n = { content: n });
    const { container: o, ...s } = n, r = new D_(o || "body", s);
    return r.show(), r;
  }
};
let Ni = D_;
wn = new WeakMap(), Kn = new WeakMap(), xe = new WeakMap(), pl = new WeakSet(), $p = function() {
  if (y(this, xe))
    y(this, xe).setOptions(this.options);
  else {
    const n = W(this, ml, kp).call(this), o = new Xi(n, this.options);
    o.on("hidden", () => {
      o.destroy(), n.remove(), H(this, wn, void 0);
    }), H(this, xe, o);
  }
  return y(this, xe);
}, ml = new WeakSet(), kp = function() {
  if (y(this, wn))
    return y(this, wn);
  const { placement: n = "top" } = this.options;
  let o = this.element.querySelector(`.messagers-${n}`);
  o || (o = document.createElement("div"), o.className = `messagers messagers-${n}`, this.element.appendChild(o));
  let s = o.querySelector(`#messager-${y(this, Kn)}`);
  return s || (s = document.createElement("div"), s.className = "messager-holder", s.id = `messager-${y(this, Kn)}`, o.appendChild(s), H(this, wn, s)), s;
}, M(Ni, "NAME", "messager"), M(Ni, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
var xp, pt, Sp, Go, Pu, Cp = {}, Ep = [], T0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ge(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Tp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ea(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Sp };
  return s == null && pt.vnode != null && pt.vnode(r), r;
}
function e_(t) {
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
function Ap(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ap(t);
  }
}
function Ou(t) {
  (!t.__d && (t.__d = !0) && Go.push(t) && !Ss.__r++ || Pu !== pt.debounceRendering) && ((Pu = pt.debounceRendering) || setTimeout)(Ss);
}
function Ss() {
  for (var t; Ss.__r = Go.length; )
    t = Go.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Go = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ge({}, r)).__v = r.__v + 1, Np(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ar(r), r.__h), L0(o, r), r.__e != l && Ap(r)));
    });
}
function Lp(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Ep, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ea(null, a, null, null, a) : Array.isArray(a) ? ea(e_, { children: a }, null, null, null) : a.__b > 0 ? ea(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Np(t, a, u = u || Cp, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Mp(a, _, t) : _ = Rp(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Ar(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Pp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Dp(p[i], p[++i], p[++i]);
}
function Mp(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Mp(o, e, n) : Rp(n, o, o, s, o.__e, e));
  return e;
}
function Rp(t, e, n, o, s, r) {
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
function A0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Cs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Cs(t, r, e[r], n[r], o);
}
function Hu(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || T0.test(e) ? n : n + "px";
}
function Cs(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Hu(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Hu(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Iu : Wu, r) : t.removeEventListener(e, r ? Iu : Wu, r);
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
function Wu(t) {
  this.l[t.type + !1](pt.event ? pt.event(t) : t);
}
function Iu(t) {
  this.l[t.type + !0](pt.event ? pt.event(t) : t);
}
function Np(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = pt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Xo(p, g), i.constructor = b, i.render = R0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ge({}, i.__s)), Ge(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Ge(Ge({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === e_ && h.key == null ? h.props.children : h, Lp(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = M0(n.__e, e, n, o, s, r, l, _);
    (h = pt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), pt.__e(x, e, n);
  }
}
function L0(t, e) {
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
function M0(t, e, n, o, s, r, l, c) {
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
    if (r = r && xp.call(t.childNodes), h = (d = n.props || Cp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (A0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Lp(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ar(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Tp(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Cs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Cs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Dp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    pt.__e(o, n);
  }
}
function Pp(t, e, n) {
  var o, s;
  if (pt.unmount && pt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Dp(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Pp(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Tp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function R0(t, e, n) {
  return this.constructor(t, n);
}
xp = Ep.slice, pt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Sp = 0, Xo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ge({}, this.state), typeof t == "function" && (t = t(Ge({}, n), this.props)), t && Ge(n, t), t != null && this.__v && (e && this._sb.push(e), Ou(this));
}, Xo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ou(this));
}, Xo.prototype.render = e_, Go = [], Ss.__r = 0;
var N0 = 0;
function Di(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --N0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pt.vnode && pt.vnode(_), _;
}
var Ui;
let D0 = (Ui = class extends Xo {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: o, circleBgColor: s, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ Di("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ Di("circle", { cx: c, cy: c, r: l, stroke: s, "stroke-width": o }),
      /* @__PURE__ */ Di("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - e) / 100, "stroke-width": o }),
      /* @__PURE__ */ Di("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(e) })
    ] });
  }
}, M(Ui, "NAME", "zui.progress-circle"), M(Ui, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), Ui);
class Uu extends At {
}
M(Uu, "NAME", "table-sorter"), M(Uu, "Component", D0);
var n_, mt, Op, Ko, Fu, Hp = {}, Wp = [], P0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ip(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function O0(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? n_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Ji(t, l, o, s, null);
}
function Ji(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Op };
  return s == null && mt.vnode != null && mt.vnode(r), r;
}
function o_(t) {
  return t.children;
}
function Jo(t, e) {
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
function Up(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Up(t);
  }
}
function Bu(t) {
  (!t.__d && (t.__d = !0) && Ko.push(t) && !Es.__r++ || Fu !== mt.debounceRendering) && ((Fu = mt.debounceRendering) || setTimeout)(Es);
}
function Es() {
  for (var t; Es.__r = Ko.length; )
    t = Ko.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Ko = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Xe({}, r)).__v = r.__v + 1, zp(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Lr(r), r.__h), W0(o, r), r.__e != l && Up(r)));
    });
}
function Fp(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Wp, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ji(null, a, null, null, a) : Array.isArray(a) ? Ji(o_, { children: a }, null, null, null) : a.__b > 0 ? Ji(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      zp(t, a, u = u || Hp, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Bp(a, _, t) : _ = jp(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Lr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Yp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Vp(p[i], p[++i], p[++i]);
}
function Bp(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Bp(o, e, n) : jp(n, o, o, s, o.__e, e));
  return e;
}
function jp(t, e, n, o, s, r) {
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
function H0(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ts(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ts(t, r, e[r], n[r], o);
}
function ju(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || P0.test(e) ? n : n + "px";
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
            n && e in n || ju(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || ju(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Vu : zu, r) : t.removeEventListener(e, r ? Vu : zu, r);
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
function zu(t) {
  this.l[t.type + !1](mt.event ? mt.event(t) : t);
}
function Vu(t) {
  this.l[t.type + !0](mt.event ? mt.event(t) : t);
}
function zp(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = mt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Jo(p, g), i.constructor = b, i.render = U0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Xe({}, i.__s)), Xe(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Xe(Xe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === o_ && h.key == null ? h.props.children : h, Fp(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = I0(n.__e, e, n, o, s, r, l, _);
    (h = mt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), mt.__e(x, e, n);
  }
}
function W0(t, e) {
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
function I0(t, e, n, o, s, r, l, c) {
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
    if (r = r && n_.call(t.childNodes), h = (d = n.props || Hp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (H0(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Fp(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Lr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Ip(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ts(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ts(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Vp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    mt.__e(o, n);
  }
}
function Yp(t, e, n) {
  var o, s;
  if (mt.unmount && mt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Vp(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Yp(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Ip(t.__e), t.__ = t.__e = t.__d = void 0;
}
function U0(t, e, n) {
  return this.constructor(t, n);
}
n_ = Wp.slice, mt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Op = 0, Jo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xe({}, this.state), typeof t == "function" && (t = t(Xe({}, n), this.props)), t && Xe(n, t), t != null && this.__v && (e && this._sb.push(e), Bu(this));
}, Jo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Bu(this));
}, Jo.prototype.render = o_, Ko = [], Es.__r = 0;
var F0 = 0;
function Pi(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --F0, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return mt.vnode && mt.vnode(_), _;
}
let B0 = class extends Jo {
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
    return O0(
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
class Yu extends At {
}
M(Yu, "NAME", "switch"), M(Yu, "Component", B0);
function j0(t) {
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
function z0(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
function V0(t, e) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const l = o.top <= s && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const PS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: F,
  domReady: z0,
  getClassList: Sc,
  isElementVisible: V0,
  selectText: j0
}, Symbol.toStringTag, { value: "Module" })), Ee = document, As = window, qp = Ee.documentElement, Nn = Ee.createElement.bind(Ee), Gp = Nn("div"), na = Nn("table"), Y0 = Nn("tbody"), qu = Nn("tr"), { isArray: Mc, prototype: Xp } = Array, { concat: q0, filter: r_, indexOf: Kp, map: Jp, push: G0, slice: Zp, some: i_, splice: X0 } = Xp, K0 = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, J0 = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Z0 = /<.+>/, Q0 = /^\w+$/;
function s_(t, e) {
  const n = tw(e);
  return !t || !n && !vo(e) && !Ct(e) ? [] : !n && J0.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Q0.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Rc {
  constructor(e, n) {
    if (!e)
      return;
    if ($a(e))
      return e;
    let o = e;
    if (Dt(e)) {
      const s = ($a(n) ? n[0] : n) || Ee;
      if (o = K0.test(e) && "getElementById" in s ? s.getElementById(e.slice(1).replace(/\\/g, "")) : Z0.test(e) ? em(e) : s_(e, s), !o)
        return;
    } else if (Dn(e))
      return this.ready(e);
    (o.nodeType || o === As) && (o = [o]), this.length = o.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = o[s];
  }
  init(e, n) {
    return new Rc(e, n);
  }
}
const I = Rc.prototype, Y = I.init;
Y.fn = Y.prototype = I;
I.length = 0;
I.splice = X0;
typeof Symbol == "function" && (I[Symbol.iterator] = Xp[Symbol.iterator]);
function $a(t) {
  return t instanceof Rc;
}
function yo(t) {
  return !!t && t === t.window;
}
function vo(t) {
  return !!t && t.nodeType === 9;
}
function tw(t) {
  return !!t && t.nodeType === 11;
}
function Ct(t) {
  return !!t && t.nodeType === 1;
}
function ew(t) {
  return !!t && t.nodeType === 3;
}
function nw(t) {
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
function Qp(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function l_(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
Y.isWindow = yo;
Y.isFunction = Dn;
Y.isArray = Mc;
Y.isNumeric = Qp;
Y.isPlainObject = l_;
function Tt(t, e, n) {
  if (n) {
    let o = t.length;
    for (; o--; )
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  } else if (l_(t)) {
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
function Ls(...t) {
  const e = nw(t[0]) ? t.shift() : !1, n = t.shift(), o = t.length;
  if (!n)
    return {};
  if (!o)
    return Ls(e, Y, n);
  for (let s = 0; s < o; s++) {
    const r = t[s];
    for (const l in r)
      e && (Mc(r[l]) || l_(r[l])) ? ((!n[l] || n[l].constructor !== r[l].constructor) && (n[l] = new r[l].constructor()), Ls(e, n[l], r[l])) : n[l] = r[l];
  }
  return n;
}
Y.extend = Ls;
I.extend = function(t) {
  return Ls(I, t);
};
const ow = /\S+/g;
function Nc(t) {
  return Dt(t) ? t.match(ow) || [] : [];
}
I.toggleClass = function(t, e) {
  const n = Nc(t), o = !Ut(e);
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
  const e = Nc(t);
  return this.each((n, o) => {
    Ct(o) && Tt(e, (s, r) => {
      o.removeAttribute(r);
    });
  });
};
function rw(t, e) {
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
I.attr = rw;
I.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
I.hasClass = function(t) {
  return !!t && i_.call(this, (e) => Ct(e) && e.classList.contains(t));
};
I.get = function(t) {
  return Ut(t) ? Zp.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function iw(t) {
  return Ut(t) ? this.get().map((e) => Ct(e) || ew(e) ? e.textContent : "").join("") : this.each((e, n) => {
    Ct(n) && (n.textContent = t);
  });
}
I.text = iw;
function Te(t, e, n) {
  if (!Ct(t))
    return;
  const o = As.getComputedStyle(t, null);
  return n ? o.getPropertyValue(e) || void 0 : o[e] || t.style[e];
}
function ue(t, e) {
  return parseInt(Te(t, e), 10) || 0;
}
function Gu(t, e) {
  return ue(t, `border${e ? "Left" : "Top"}Width`) + ue(t, `padding${e ? "Left" : "Top"}`) + ue(t, `padding${e ? "Right" : "Bottom"}`) + ue(t, `border${e ? "Right" : "Bottom"}Width`);
}
const oa = {};
function sw(t) {
  if (oa[t])
    return oa[t];
  const e = Nn(t);
  Ee.body.insertBefore(e, null);
  const n = Te(e, "display");
  return Ee.body.removeChild(e), oa[t] = n !== "none" ? n : "block";
}
function Xu(t) {
  return Te(t, "display") === "none";
}
function tm(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function Dc(t) {
  return Dt(t) ? (e, n) => tm(n, t) : Dn(t) ? t : $a(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
I.filter = function(t) {
  const e = Dc(t);
  return Y(r_.call(this, (n, o) => e.call(n, o, n)));
};
function fn(t, e) {
  return e ? t.filter(e) : t;
}
I.detach = function(t) {
  return fn(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const lw = /^\s*<(\w+)[^>]*>/, cw = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Ku = {
  "*": Gp,
  tr: Y0,
  td: qu,
  th: qu,
  thead: na,
  tbody: na,
  tfoot: na
};
function em(t) {
  if (!Dt(t))
    return [];
  if (cw.test(t))
    return [Nn(RegExp.$1)];
  const e = lw.test(t) && RegExp.$1, n = Ku[e] || Ku["*"];
  return n.innerHTML = t, Y(n.childNodes).detach().get();
}
Y.parseHTML = em;
I.has = function(t) {
  const e = Dt(t) ? (n, o) => s_(t, o).length : (n, o) => o.contains(t);
  return this.filter(e);
};
I.not = function(t) {
  const e = Dc(t);
  return this.filter((n, o) => (!Dt(t) || Ct(o)) && !e.call(o, n, o));
};
function Re(t, e, n, o) {
  const s = [], r = Dn(e), l = o && Dc(o);
  for (let c = 0, _ = t.length; c < _; c++)
    if (r) {
      const h = e(t[c]);
      h.length && G0.apply(s, h);
    } else {
      let h = t[c][e];
      for (; h != null && !(o && l(-1, h)); )
        s.push(h), h = n ? h[e] : null;
    }
  return s;
}
function nm(t) {
  return t.multiple && t.options ? Re(r_.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function aw(t) {
  return arguments.length ? this.each((e, n) => {
    const o = n.multiple && n.options;
    if (o || _m.test(n.type)) {
      const s = Mc(t) ? Jp.call(t, String) : Mr(t) ? [] : [String(t)];
      o ? Tt(n.options, (r, l) => {
        l.selected = s.indexOf(l.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = Ut(t) || Mr(t) ? "" : t;
  }) : this[0] && nm(this[0]);
}
I.val = aw;
I.is = function(t) {
  const e = Dc(t);
  return i_.call(this, (n, o) => e.call(n, o, n));
};
Y.guid = 1;
function ge(t) {
  return t.length > 1 ? r_.call(t, (e, n, o) => Kp.call(o, e) === n) : t;
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
  return Kp.call(n, e);
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
  return Y(ge(Re(this, (e) => s_(t, e))));
};
const _w = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, uw = /^$|^module$|\/(java|ecma)script/i, fw = ["type", "src", "nonce", "noModule"];
function hw(t, e) {
  const n = Y(t);
  n.filter("script").add(n.find("script")).each((o, s) => {
    if (uw.test(s.type) && qp.contains(s)) {
      const r = Nn("script");
      r.text = s.textContent.replace(_w, ""), Tt(fw, (l, c) => {
        s[c] && (r[c] = s[c]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function dw(t, e, n, o, s) {
  o ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && hw(e, t.ownerDocument);
}
function hn(t, e, n, o, s, r, l, c) {
  return Tt(t, (_, h) => {
    Tt(Y(h), (i, d) => {
      Tt(Y(e), (u, a) => {
        const f = n ? d : a, v = n ? a : d, p = n ? i : u;
        dw(f, p ? v.cloneNode(!0) : v, o, s, !p);
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
function pw(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (Ut(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, o) => {
    Ct(o) && (e ? Y(o).empty().append(t) : o.innerHTML = t);
  });
}
I.html = pw;
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
  return Y(q0.apply([], Jp.call(this, (e, n) => t.call(e, n, e))));
};
I.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
I.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && Te(n, "position") === "static"; )
      n = n.offsetParent;
    return n || qp;
  });
};
I.slice = function(t, e) {
  return Y(Zp.call(this, t, e));
};
const mw = /-([a-z])/g;
function c_(t) {
  return t.replace(mw, (e, n) => n.toUpperCase());
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
    top: e.top + As.pageYOffset,
    left: e.left + As.pageXOffset
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
const om = {
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
      return t = om[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, o) => {
        o[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
I.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[om[t] || t];
  });
};
const gw = /^--/;
function a_(t) {
  return gw.test(t);
}
const ra = {}, { style: yw } = Gp, vw = ["webkit", "moz", "ms"];
function bw(t, e = a_(t)) {
  if (e)
    return t;
  if (!ra[t]) {
    const n = c_(t), o = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${vw.join(`${o} `)}${o}`.split(" ");
    Tt(s, (r, l) => {
      if (l in yw)
        return ra[t] = l, !1;
    });
  }
  return ra[t];
}
const ww = {
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
function rm(t, e, n = a_(t)) {
  return !n && !ww[t] && Qp(e) ? `${e}px` : e;
}
function $w(t, e) {
  if (Dt(t)) {
    const n = a_(t);
    return t = bw(t, n), arguments.length < 2 ? this[0] && Te(this[0], t, n) : t ? (e = rm(t, e, n), this.each((o, s) => {
      Ct(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
I.css = $w;
function im(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const kw = /^\s+|\s+$/;
function Ju(t, e) {
  const n = t.dataset[e] || t.dataset[c_(e)];
  return kw.test(n) ? n : im(JSON.parse, n);
}
function xw(t, e, n) {
  n = im(JSON.stringify, n), t.dataset[c_(e)] = n;
}
function Sw(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const o in this[0].dataset)
      n[o] = Ju(this[0], o);
    return n;
  }
  if (Dt(t))
    return arguments.length < 2 ? this[0] && Ju(this[0], t) : Ut(e) ? this : this.each((n, o) => {
      xw(o, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
I.data = Sw;
function sm(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
Tt([!0, !1], (t, e) => {
  Tt(["Width", "Height"], (n, o) => {
    const s = `${e ? "outer" : "inner"}${o}`;
    I[s] = function(r) {
      if (this[0])
        return yo(this[0]) ? e ? this[0][`inner${o}`] : this[0].document.documentElement[`client${o}`] : vo(this[0]) ? sm(this[0], o) : this[0][`${e ? "offset" : "client"}${o}`] + (r && e ? ue(this[0], `margin${n ? "Top" : "Left"}`) + ue(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Tt(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  I[n] = function(o) {
    if (!this[0])
      return Ut(o) ? void 0 : this;
    if (!arguments.length)
      return yo(this[0]) ? this[0].document.documentElement[`client${e}`] : vo(this[0]) ? sm(this[0], e) : this[0].getBoundingClientRect()[n] - Gu(this[0], !t);
    const s = parseInt(o, 10);
    return this.each((r, l) => {
      if (!Ct(l))
        return;
      const c = Te(l, "boxSizing");
      l.style[n] = rm(n, s + (c === "border-box" ? Gu(l, !t) : 0));
    });
  };
});
const Zu = "___cd";
I.toggle = function(t) {
  return this.each((e, n) => {
    if (!Ct(n))
      return;
    (Ut(t) ? Xu(n) : t) ? (n.style.display = n[Zu] || "", Xu(n) && (n.style.display = sw(n.tagName))) : (n[Zu] = Te(n, "display"), n.style.display = "none");
  });
};
I.hide = function() {
  return this.toggle(!1);
};
I.show = function() {
  return this.toggle(!0);
};
const Qu = "___ce", __ = ".", u_ = { focus: "focusin", blur: "focusout" }, lm = { mouseenter: "mouseover", mouseleave: "mouseout" }, Cw = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function f_(t) {
  return lm[t] || u_[t] || t;
}
function h_(t) {
  const e = t.split(__);
  return [e[0], e.slice(1).sort()];
}
I.trigger = function(t, e) {
  if (Dt(t)) {
    const [o, s] = h_(t), r = f_(o);
    if (!r)
      return this;
    const l = Cw.test(r) ? "MouseEvents" : "HTMLEvents";
    t = Ee.createEvent(l), t.initEvent(r, !0, !0), t.namespace = s.join(__), t.___ot = o;
  }
  t.___td = e;
  const n = t.___ot in u_;
  return this.each((o, s) => {
    n && Dn(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function cm(t) {
  return t[Qu] = t[Qu] || {};
}
function Ew(t, e, n, o, s) {
  const r = cm(t);
  r[e] = r[e] || [], r[e].push([n, o, s]), t.addEventListener(e, s);
}
function am(t, e) {
  return !e || !i_.call(e, (n) => t.indexOf(n) < 0);
}
function Ms(t, e, n, o, s) {
  const r = cm(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([l, c, _]) => {
      if (s && _.guid !== s.guid || !am(l, n) || o && o !== c)
        return !0;
      t.removeEventListener(e, _);
    }));
  else
    for (e in r)
      Ms(t, e, n, o, s);
}
I.off = function(t, e, n) {
  if (Ut(t))
    this.each((o, s) => {
      !Ct(s) && !vo(s) && !yo(s) || Ms(s);
    });
  else if (Dt(t))
    Dn(e) && (n = e, e = ""), Tt(Nc(t), (o, s) => {
      const [r, l] = h_(s), c = f_(r);
      this.each((_, h) => {
        !Ct(h) && !vo(h) && !yo(h) || Ms(h, c, l, e, n);
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
function Tw(t, e, n, o, s) {
  if (!Dt(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return Dt(e) || (Ut(e) || Mr(e) ? e = "" : Ut(n) ? (n = e, e = "") : (o = n, n = e, e = "")), Dn(o) || (o = n, n = void 0), o ? (Tt(Nc(t), (r, l) => {
    const [c, _] = h_(l), h = f_(c), i = c in lm, d = c in u_;
    h && this.each((u, a) => {
      if (!Ct(a) && !vo(a) && !yo(a))
        return;
      const f = function(v) {
        if (v.target[`___i${v.type}`])
          return v.stopImmediatePropagation();
        if (v.namespace && !am(_, v.namespace.split(__)) || !e && (d && (v.target !== a || v.___ot === h) || i && v.relatedTarget && a.contains(v.relatedTarget)))
          return;
        let p = a;
        if (e) {
          let g = v.target;
          for (; !tm(g, e); )
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
        s && Ms(a, h, _, e, f), m === !1 && (v.preventDefault(), v.stopPropagation());
      };
      f.guid = o.guid = o.guid || Y.guid++, Ew(a, h, _, e, f);
    });
  }), this) : this;
}
I.on = Tw;
function Aw(t, e, n, o) {
  return this.on(t, e, n, o, !0);
}
I.one = Aw;
const Lw = /\r?\n/g;
function Mw(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(Lw, `\r
`))}`;
}
const Rw = /file|reset|submit|button|image/i, _m = /radio|checkbox/i;
I.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    Tt(n.elements || [n], (o, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || Rw.test(s.type) || _m.test(s.type) && !s.checked)
        return;
      const r = nm(s);
      if (!Ut(r)) {
        const l = Mc(r) ? r : [r];
        Tt(l, (c, _) => {
          t += Mw(s.name, _);
        });
      }
    });
  }), t.slice(1);
};
Object.assign(window, { $: Y });
let Nw = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Kr, Pe, le, Jn, Zn, Zi;
const P_ = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    E(this, Zn);
    E(this, Kr, void 0);
    E(this, Pe, void 0);
    E(this, le, void 0);
    E(this, Jn, void 0);
    H(this, Kr, n), H(this, Pe, `ZUI_STORE:${e ?? Nw()}`), H(this, le, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return y(this, Kr);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (y(this, Jn) || H(this, Jn, new P_(y(this, Pe), "session")), y(this, Jn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const o = y(this, le).getItem(W(this, Zn, Zi).call(this, e));
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
    y(this, le).setItem(W(this, Zn, Zi).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    y(this, le).removeItem(W(this, Zn, Zi).call(this, e));
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
let Rs = P_;
Kr = new WeakMap(), Pe = new WeakMap(), le = new WeakMap(), Jn = new WeakMap(), Zn = new WeakSet(), Zi = function(e) {
  return `${y(this, Pe)}:${e}`;
};
const Dw = new Rs("DEFAULT");
function Pw(t, e = "local") {
  return new Rs(t, e);
}
Object.assign(Dw, { create: Pw });
var um, gt, fm, Zo, tf, hm = {}, dm = [], Ow = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ke(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function pm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ia(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++fm };
  return s == null && gt.vnode != null && gt.vnode(r), r;
}
function d_(t) {
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
function mm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return mm(t);
  }
}
function ef(t) {
  (!t.__d && (t.__d = !0) && Zo.push(t) && !Ns.__r++ || tf !== gt.debounceRendering) && ((tf = gt.debounceRendering) || setTimeout)(Ns);
}
function Ns() {
  for (var t; Ns.__r = Zo.length; )
    t = Zo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Zo = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ke({}, r)).__v = r.__v + 1, bm(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Rr(r), r.__h), Ww(o, r), r.__e != l && mm(r)));
    });
}
function gm(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || dm, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ia(null, a, null, null, a) : Array.isArray(a) ? ia(d_, { children: a }, null, null, null) : a.__b > 0 ? ia(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      bm(t, a, u = u || hm, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = ym(a, _, t) : _ = vm(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Rr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && $m(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      wm(p[i], p[++i], p[++i]);
}
function ym(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? ym(o, e, n) : vm(n, o, o, s, o.__e, e));
  return e;
}
function vm(t, e, n, o, s, r) {
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
function Hw(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ds(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ds(t, r, e[r], n[r], o);
}
function nf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ow.test(e) ? n : n + "px";
}
function Ds(t, e, n, o, s) {
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
  this.l[t.type + !1](gt.event ? gt.event(t) : t);
}
function rf(t) {
  this.l[t.type + !0](gt.event ? gt.event(t) : t);
}
function bm(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = gt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new Qo(p, g), i.constructor = b, i.render = Uw), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ke({}, i.__s)), Ke(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Ke(Ke({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === d_ && h.key == null ? h.props.children : h, gm(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Iw(n.__e, e, n, o, s, r, l, _);
    (h = gt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), gt.__e(x, e, n);
  }
}
function Ww(t, e) {
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
function Iw(t, e, n, o, s, r, l, c) {
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
    if (r = r && um.call(t.childNodes), h = (d = n.props || hm).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Hw(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, gm(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Rr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && pm(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ds(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ds(t, "checked", f, d.checked, !1));
  }
  return t;
}
function wm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    gt.__e(o, n);
  }
}
function $m(t, e, n) {
  var o, s;
  if (gt.unmount && gt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || wm(o, null, e)), (o = t.__c) != null) {
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
      o[s] && $m(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || pm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Uw(t, e, n) {
  return this.constructor(t, n);
}
um = dm.slice, gt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, fm = 0, Qo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ke({}, this.state), typeof t == "function" && (t = t(Ke({}, n), this.props)), t && Ke(n, t), t != null && this.__v && (e && this._sb.push(e), ef(this));
}, Qo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ef(this));
}, Qo.prototype.render = d_, Zo = [], Ns.__r = 0;
var Fw = 0;
function sa(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Fw, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return gt.vnode && gt.vnode(_), _;
}
function Bw(t) {
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
function jw(t) {
  const [e, n, o] = typeof t == "string" ? Bw(t) : t;
  return e * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function sf(t, e) {
  return jw(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function lf(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function zw(t, e, n) {
  t = t % 360 / 360, e = lf(e), n = lf(n);
  const o = n <= 0.5 ? n * (e + 1) : n + e - n * e, s = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? s + (o - s) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? s + (o - s) * (2 / 3 - l) * 6 : s);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function Vw(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function Yw(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t = t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t = t[0].toUpperCase() : t = t.length <= e ? t : t.substring(0, e), t;
}
let qw = class extends Qo {
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
      m.push("has-img"), $ = /* @__PURE__ */ sa("img", { className: "avatar-img", src: d, alt: _ });
    else if (_ != null && _.length) {
      const S = Yw(_, i);
      if (m.push("has-text", `has-text-${S.length}`), l)
        !c && l && (g.color = sf(l));
      else {
        const T = h ?? _, b = (typeof T == "number" ? T : Vw(T)) * u % 360;
        if (g.background = `hsl(${b},${a * 100}%,${f * 100}%)`, !c) {
          const x = zw(b, a, f);
          g.color = sf(x);
        }
      }
      let A;
      w && w < 14 * S.length && (A = { transform: `scale(${w / (14 * S.length)})`, whiteSpace: "nowrap" }), $ = /* @__PURE__ */ sa("div", { "data-actualSize": w, className: "avatar-text", style: A, children: S });
    }
    return /* @__PURE__ */ sa(
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
class cf extends At {
}
M(cf, "NAME", "avatar"), M(cf, "Component", qw);
class af extends At {
}
M(af, "NAME", "btngroup"), M(af, "Component", wp);
var Pc, it, km, tr, _f, Ps = {}, xm = [], Gw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Je(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Sm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Nr(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Pc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Qi(t, l, o, s, null);
}
function Qi(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++km };
  return s == null && it.vnode != null && it.vnode(r), r;
}
function Xw() {
  return { current: null };
}
function Oc(t) {
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
function Cm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Cm(t);
  }
}
function uf(t) {
  (!t.__d && (t.__d = !0) && tr.push(t) && !Os.__r++ || _f !== it.debounceRendering) && ((_f = it.debounceRendering) || setTimeout)(Os);
}
function Os() {
  for (var t; Os.__r = tr.length; )
    t = tr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), tr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Je({}, r)).__v = r.__v + 1, p_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Dr(r), r.__h), Lm(o, r), r.__e != l && Cm(r)));
    });
}
function Em(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || xm, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Qi(null, a, null, null, a) : Array.isArray(a) ? Qi(Oc, { children: a }, null, null, null) : a.__b > 0 ? Qi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      p_(t, a, u = u || Ps, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Tm(a, _, t) : _ = Am(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Dr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Rm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Mm(p[i], p[++i], p[++i]);
}
function Tm(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Tm(o, e, n) : Am(n, o, o, s, o.__e, e));
  return e;
}
function Am(t, e, n, o, s, r) {
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
    r === "children" || r === "key" || r in e || Hs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Hs(t, r, e[r], n[r], o);
}
function ff(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Gw.test(e) ? n : n + "px";
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
            n && e in n || ff(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || ff(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? df : hf, r) : t.removeEventListener(e, r ? df : hf, r);
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
function hf(t) {
  this.l[t.type + !1](it.event ? it.event(t) : t);
}
function df(t) {
  this.l[t.type + !0](it.event ? it.event(t) : t);
}
function p_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = it.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new er(p, g), i.constructor = b, i.render = Zw), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Je({}, i.__s)), Je(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Je(Je({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === Oc && h.key == null ? h.props.children : h, Em(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Jw(n.__e, e, n, o, s, r, l, _);
    (h = it.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), it.__e(x, e, n);
  }
}
function Lm(t, e) {
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
function Jw(t, e, n, o, s, r, l, c) {
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
    if (r = r && Pc.call(t.childNodes), h = (d = n.props || Ps).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Kw(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Em(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Dr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Sm(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Hs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Hs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Mm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    it.__e(o, n);
  }
}
function Rm(t, e, n) {
  var o, s;
  if (it.unmount && it.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Mm(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Rm(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Sm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Zw(t, e, n) {
  return this.constructor(t, n);
}
function Qw(t, e, n) {
  var o, s, r;
  it.__ && it.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], p_(e, t = (!o && n || e).__k = Nr(Oc, null, [t]), s || Ps, Ps, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Pc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Lm(r, t);
}
Pc = xm.slice, it = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, km = 0, er.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Je({}, this.state), typeof t == "function" && (t = t(Je({}, n), this.props)), t && Je(n, t), t != null && this.__v && (e && this._sb.push(e), uf(this));
}, er.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), uf(this));
}, er.prototype.render = Oc, tr = [], Os.__r = 0;
var t$ = 0;
function K(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --t$, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return it.vnode && it.vnode(_), _;
}
var Nm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Q = {}, e$ = {
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
  })(Nm, function() {
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
        }, z = this.$W, J = this.$M, kt = this.$D, B = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? U(1, 0) : U(31, 11);
          case d:
            return O ? U(1, J) : U(0, J + 1);
          case i:
            var Z = this.$locale().weekStart || 0, $t = (z < Z ? z + 7 : z) - Z;
            return U(O ? kt - $t : kt + (6 - $t), J);
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
        var P = R.p(D), U = function(J) {
          var kt = x(O);
          return R.w(kt.date(kt.date() + Math.round(J * k)), O);
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
        var O = k || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), U = this.$H, V = this.$m, z = this.$M, J = L.weekdays, kt = L.months, B = function(X, at, Pt, Ot) {
          return X && (X[at] || X(D, O)) || Pt[at].slice(0, Ot);
        }, Z = function(X) {
          return R.s(U % 12 || 12, X, "0");
        }, $t = L.meridiem || function(X, at, Pt) {
          var Ot = X < 12 ? "AM" : "PM";
          return Pt ? Ot.toLowerCase() : Ot;
        }, ct = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: R.s(z + 1, 2, "0"), MMM: B(L.monthsShort, z, kt, 3), MMMM: B(kt, z), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: B(L.weekdaysMin, this.$W, J, 2), ddd: B(L.weekdaysShort, this.$W, J, 3), dddd: J[this.$W], H: String(U), HH: R.s(U, 2, "0"), h: Z(1), hh: Z(2), a: $t(U, V, !0), A: $t(U, V, !1), m: String(V), mm: R.s(V, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(X, at) {
          return at || ct[X] || P.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(k, D, L) {
        var O, P = R.p(D), U = x(k), V = (U.utcOffset() - this.utcOffset()) * o, z = this - U, J = R.m(this, U);
        return J = (O = {}, O[a] = J / 12, O[d] = J, O[u] = J / 3, O[i] = (z - V) / 6048e5, O[h] = (z - V) / 864e5, O[_] = z / s, O[c] = z / o, O[l] = z / n, O)[P] || z, L ? J : R.a(J);
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
})(e$);
const ka = (t = 0, e = 0) => {
  const n = [];
  for (let o = t; o <= e; o++)
    n.push(o);
  return n;
}, Dm = (t, e) => {
  const n = Math.ceil(t.length / e);
  return new Array(e).fill({}).map((o, s) => t.slice(s * n, (s + 1) * n));
}, n$ = (t) => {
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
    return Dm(L, r);
  }, T = ["一", "二", "三", "四", "五", "六", "日"], b = A(), x = _ || Q().format(e);
  return /* @__PURE__ */ K("div", { className: F("datepicker-calendar-day"), children: [
    /* @__PURE__ */ K("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ K("div", { class: "flex", children: /* @__PURE__ */ K("button", { type: "button", className: "btn ghost", onClick: () => h("year"), children: [
        /* @__PURE__ */ K("span", { children: Q(x).format("YYYY 年 MM 月") }),
        /* @__PURE__ */ K("span", { class: "caret" })
      ] }) }),
      /* @__PURE__ */ K("div", { class: "flex", children: [
        i && /* @__PURE__ */ K("button", { type: "button", className: "btn ghost", onClick: () => {
          u();
        }, children: "今天" }),
        /* @__PURE__ */ K("button", { type: "button", className: "btn ghost", onClick: () => v(), children: /* @__PURE__ */ K("i", { className: "icon icon-angle-left" }) }),
        /* @__PURE__ */ K("button", { type: "button", className: "btn ghost", onClick: () => p(), children: /* @__PURE__ */ K("i", { className: "icon icon-angle-right" }) })
      ] })
    ] }),
    /* @__PURE__ */ K("table", { className: "datepicker-calendar-table not-hide-datepicker", children: [
      /* @__PURE__ */ K("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ K("tr", { children: T.map((R, q) => /* @__PURE__ */ K("th", { children: R }, q)) }) }),
      /* @__PURE__ */ K("tbody", { className: "datepicker-calendar-tbody", children: b.map((R, q) => /* @__PURE__ */ K("tr", { children: R.map((j, N) => {
        const C = ["text-center"];
        return j.isToday && C.push("datepicker-calendar-today"), j.isSelected && C.push("datepicker-calendar-selected-date"), j.isOtherMonth && C.push("datepicker-calendar-other-month"), j.isTag && C.push("datepicker-calendar-tag"), /* @__PURE__ */ K("td", { className: F(C), children: /* @__PURE__ */ K("div", { className: F("btn", "ghost", "datepicker-calendar-date", j.isDisable ? "disabled" : ""), onClick: j.onClick, children: !l && j.isOtherMonth ? "" : Q(j.date).format("DD") }) }, N);
      }) }, q)) })
    ] }),
    /* @__PURE__ */ K("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ K("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ K("span", { children: "清除" }) }),
      /* @__PURE__ */ K("button", { type: "button", className: "btn ghost text-primary", onClick: g, children: /* @__PURE__ */ K("span", { children: "确认" }) })
    ] })
  ] });
};
const o$ = (t) => {
  const { format: e, selectedDate: n, minDate: o, maxDate: s, year: r, handleChangeMonth: l } = t, c = Q(o).format("M"), _ = Q(s).format("M"), h = Dm(ka(1, 12), 3), i = (d, u) => {
    u || l(d);
  };
  return /* @__PURE__ */ K("div", { className: F("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ K("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ K("tbody", { className: "datepicker-calendar-month-table-body", children: h.map((d, u) => /* @__PURE__ */ K("tr", { children: d.map((a, f) => {
    const v = ["text-center"], p = Q(`${r}-${a}-01`).format(e), m = !!(c && Q(n).isBefore(c) || _ && Q(n).isBefore(_));
    return /* @__PURE__ */ K("td", { className: F(v), children: /* @__PURE__ */ K("div", { className: F("btn", "size-sm", "ghost", "datepicker-calendar-month", m ? "disabled" : ""), onClick: () => {
      i(p, m);
    }, children: [
      Q(p).format("MM"),
      " 月"
    ] }) }, f);
  }) }, u)) }) }) });
}, r$ = (t) => {
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
    /* @__PURE__ */ K("div", { className: F("datepicker-accordion-content", o === l ? "" : "hidden"), children: Nr(o$, {
      ...t,
      year: l.toString(),
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class i$ extends er {
  constructor() {
    super(...arguments);
    M(this, "DATEROWCOUNT", 6);
    M(this, "ref", Xw());
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
    return this.state.type === "day" ? Nr(n$, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : Nr(r$, {
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
function m_(t) {
  return t === "y" ? "height" : "width";
}
function bo(t) {
  return t.split("-")[0];
}
function Hc(t) {
  return ["top", "bottom"].includes(bo(t)) ? "x" : "y";
}
function pf(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Hc(e), _ = m_(c), h = o[_] / 2 - s[_] / 2, i = bo(e), d = c === "x";
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
const s$ = async (t, e, n) => {
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
  } = pf(h, o, _), u = o, a = {}, f = 0;
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
      } = pf(h, u, _)), v = -1;
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
function l$(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Pm(t) {
  return typeof t != "number" ? l$(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Ws(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function c$(t, e) {
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
  } = e, f = Pm(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = Ws(await r.getClippingRect({
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
  }, S = Ws(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const a$ = Math.min, _$ = Math.max;
function u$(t, e, n) {
  return _$(t, a$(e, n));
}
const f$ = (t) => ({
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
    const h = Pm(o), i = {
      x: s,
      y: r
    }, d = Hc(l), u = m_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], T = w / 2 - a[u] / 2 + $, b = u$(S, T, A), R = Ei(l) != null && T != b && c.reference[u] / 2 - (T < S ? h[f] : h[v]) - a[u] / 2 < 0 ? T < S ? S - T : A - T : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: T - b
      }
    };
  }
}), h$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Is(t) {
  return t.replace(/left|right|bottom|top/g, (e) => h$[e]);
}
function d$(t, e, n) {
  n === void 0 && (n = !1);
  const o = Ei(t), s = Hc(t), r = m_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Is(l)), {
    main: l,
    cross: Is(l)
  };
}
const p$ = {
  start: "end",
  end: "start"
};
function xa(t) {
  return t.replace(/start|end/g, (e) => p$[e]);
}
function m$(t) {
  const e = Is(t);
  return [xa(t), e, xa(e)];
}
function g$(t, e, n) {
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
function y$(t, e, n, o) {
  const s = Ei(t);
  let r = g$(bo(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(xa)))), r;
}
const v$ = function(t) {
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
      } = t, p = bo(o), m = bo(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [Is(l)] : m$(l));
      !d && a !== "none" && w.push(...y$(l, f, a, g));
      const $ = [l, ...w], S = await c$(e, v), A = [];
      let T = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = d$(o, r, g);
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
async function b$(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = bo(n), c = Ei(n), _ = Hc(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const w$ = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await b$(e, t);
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
  return Hm(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Oi;
function Om() {
  if (Oi)
    return Oi;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Oi = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Oi) : navigator.userAgent;
}
function Ae(t) {
  return t instanceof Xt(t).HTMLElement;
}
function ne(t) {
  return t instanceof Xt(t).Element;
}
function Hm(t) {
  return t instanceof Xt(t).Node;
}
function mf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Xt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Wc(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = de(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function $$(t) {
  return ["table", "td", "th"].includes(cn(t));
}
function g_(t) {
  const e = /firefox/i.test(Om()), n = de(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function Wm() {
  return !/^((?!chrome|android).)*safari/i.test(Om());
}
function y_(t) {
  return ["html", "body", "#document"].includes(cn(t));
}
const gf = Math.min, nr = Math.max, Us = Math.round;
function Im(t) {
  const e = de(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = Us(n) !== s || Us(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Um(t) {
  return ne(t) ? t : t.contextElement;
}
const Fm = {
  x: 1,
  y: 1
};
function Wn(t) {
  const e = Um(t);
  if (!Ae(e))
    return Fm;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = Im(e);
  let l = (r ? Us(n.width) : n.width) / o, c = (r ? Us(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Ln(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Um(t);
  let _ = Fm;
  e && (o ? ne(o) && (_ = Wn(o)) : _ = Wn(t));
  const h = c ? Xt(c) : window, i = !Wm() && n;
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
  return ((Hm(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ic(t) {
  return ne(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Bm(t) {
  return Ln(dn(t)).left + Ic(t).scrollLeft;
}
function k$(t, e, n) {
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
    if ((cn(e) !== "body" || Wc(s)) && (l = Ic(e)), Ae(e)) {
      const _ = Ln(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = Bm(s));
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
    (mf(t) ? t.host : null) || // Fallback
    dn(t)
  );
  return mf(e) ? e.host : e;
}
function yf(t) {
  return !Ae(t) || de(t).position === "fixed" ? null : t.offsetParent;
}
function x$(t) {
  let e = Pr(t);
  for (; Ae(e) && !y_(e); ) {
    if (g_(e))
      return e;
    e = Pr(e);
  }
  return null;
}
function vf(t) {
  const e = Xt(t);
  let n = yf(t);
  for (; n && $$(n) && de(n).position === "static"; )
    n = yf(n);
  return n && (cn(n) === "html" || cn(n) === "body" && de(n).position === "static" && !g_(n)) ? e : n || x$(t) || e;
}
function S$(t) {
  return Im(t);
}
function C$(t) {
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
  if ((s || !s && o !== "fixed") && ((cn(n) !== "body" || Wc(r)) && (l = Ic(n)), Ae(n))) {
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
function E$(t, e) {
  const n = Xt(t), o = dn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = Wm();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function T$(t) {
  var e;
  const n = dn(t), o = Ic(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = nr(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = nr(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + Bm(t);
  const _ = -o.scrollTop;
  return de(s || n).direction === "rtl" && (c += nr(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function jm(t) {
  const e = Pr(t);
  return y_(e) ? t.ownerDocument.body : Ae(e) && Wc(e) ? e : jm(e);
}
function or(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = jm(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Xt(o);
  return s ? e.concat(r, r.visualViewport || [], Wc(o) ? o : []) : e.concat(o, or(o));
}
function A$(t, e) {
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
function bf(t, e, n) {
  return e === "viewport" ? Ws(E$(t, n)) : ne(e) ? A$(e, n) : Ws(T$(dn(t)));
}
function L$(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = or(t).filter((c) => ne(c) && cn(c) !== "body"), s = null;
  const r = de(t).position === "fixed";
  let l = r ? Pr(t) : t;
  for (; ne(l) && !y_(l); ) {
    const c = de(l), _ = g_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Pr(l);
  }
  return e.set(t, o), o;
}
function M$(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? L$(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = bf(e, i, s);
    return h.top = nr(d.top, h.top), h.right = gf(d.right, h.right), h.bottom = gf(d.bottom, h.bottom), h.left = nr(d.left, h.left), h;
  }, bf(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const R$ = {
  getClippingRect: M$,
  convertOffsetParentRelativeRectToViewportRelativeRect: C$,
  isElement: ne,
  getDimensions: S$,
  getOffsetParent: vf,
  getDocumentElement: dn,
  getScale: Wn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || vf, r = this.getDimensions;
    return {
      reference: k$(e, await s(n), o),
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
function N$(t, e, n, o) {
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
const D$ = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: R$,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return s$(t, e, {
    ...s,
    platform: r
  });
};
var Qn, to, Lt, $n, Jr, Zr, Qr, Sa, gl, zm, yl, Vm, vl, Ym, bl, qm, wl, Gm, $l, Xm, kl, Km, xl;
const gn = class extends ie {
  constructor() {
    super(...arguments);
    E(this, Qr);
    E(this, gl);
    E(this, yl);
    E(this, vl);
    E(this, bl);
    E(this, wl);
    E(this, $l);
    E(this, kl);
    E(this, Qn, void 0);
    E(this, to, 0);
    E(this, Lt, void 0);
    E(this, $n, void 0);
    E(this, Jr, void 0);
    E(this, Zr, void 0);
    M(this, "hideLater", () => {
      y(this, xl).call(this), H(this, to, window.setTimeout(this.hide.bind(this), 100));
    });
    E(this, xl, () => {
      clearTimeout(y(this, to)), H(this, to, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, $n)) == null ? void 0 : n.classList.contains(gn.CLASS_SHOW);
  }
  get datepicker() {
    return y(this, $n) || W(this, yl, Vm).call(this);
  }
  get trigger() {
    return y(this, Jr) || this.element;
  }
  get elementShowClass() {
    return `with-${gn.NAME}-show`;
  }
  show(n) {
    return H(this, Jr, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(gn.CLASS_SHOW), this.datepicker.classList.add("fade"), W(this, $l, Xm).call(this), !0);
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
Qn = new WeakMap(), to = new WeakMap(), Lt = new WeakMap(), $n = new WeakMap(), Jr = new WeakMap(), Zr = new WeakMap(), Qr = new WeakSet(), Sa = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, gl = new WeakSet(), zm = function() {
  const n = W(this, Qr, Sa).call(this);
  return H(this, Lt, document.createElement("div")), y(this, Lt).style.position = "absolute", y(this, Lt).style.width = `${n}px`, y(this, Lt).style.height = `${n}px`, y(this, Lt).style.transform = "rotate(45deg)", y(this, Lt);
}, yl = new WeakSet(), Vm = function() {
  const n = gn.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), Qw(Nr(i$, { ...this.options }), o), this.options.arrow && o.append(W(this, gl, zm).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, $n, o), o;
}, vl = new WeakSet(), Ym = function() {
  var l;
  const n = W(this, Qr, Sa).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [w$(n), v$()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && y(this, Lt) && ((l = r.middleware) == null || l.push(f$({ element: y(this, Lt) }))), r;
}, bl = new WeakSet(), qm = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, wl = new WeakSet(), Gm = function(n) {
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
}, $l = new WeakSet(), Xm = function() {
  const n = W(this, vl, Ym).call(this), o = W(this, kl, Km).call(this);
  H(this, Zr, N$(o, this.datepicker, () => {
    D$(o, this.datepicker, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.datepicker.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, bl, qm).call(this, _);
      if (l.arrow && y(this, Lt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(y(this, Lt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Lt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, wl, Gm).call(this, _)
        });
      }
    });
  }));
}, kl = new WeakSet(), Km = function() {
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
}, xl = new WeakMap(), M(zt, "NAME", "datepicker"), M(zt, "CLASSNAME", "datepicker"), M(zt, "CLASS_SHOW", "show"), M(zt, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), M(zt, "DEFAULT", {
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
const P$ = (t) => {
  const e = document.getElementsByClassName("with-datepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(zt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || zt.clear({ event: t });
};
window.addEventListener("scroll", P$, !0);
function Jm(t, e, n) {
  if (n) {
    t.setAttribute("class", F(e));
    return;
  }
  Sc(t.getAttribute("class"), e).forEach(([o, s]) => {
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
function Fs(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, s]) => {
      Fs(t, o, s);
    });
  n !== void 0 && (n === null ? t.removeAttribute(e) : t.setAttribute(e, n));
}
var kn, ti, Oe, Sl, eo, ts;
const ve = class extends ie {
  constructor() {
    super(...arguments);
    E(this, eo);
    E(this, kn, 0);
    E(this, ti, void 0);
    E(this, Oe, void 0);
    E(this, Sl, (n) => {
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
    if (this.on("click", y(this, Sl)), this.options.responsive && typeof ResizeObserver < "u") {
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
    return Jm(o, [{
      "modal-trans": s,
      "modal-no-backdrop": !r
    }, ve.CLASS_SHOW, l]), Lo(o, {
      zIndex: `${ve.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), W(this, eo, ts).call(this, () => {
      o.classList.add(ve.CLASS_SHOWN), W(this, eo, ts).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(ve.CLASS_SHOWN), this.emit("hide", this), W(this, eo, ts).call(this, () => {
      this.modalElement.classList.remove(ve.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    o = o ?? this.options.size, Fs(s, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? Fs(s, "data-size", o) : o && (r.width = o), Lo(s, r), n = n ?? this.options.position ?? "fit";
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
kn = new WeakMap(), ti = new WeakMap(), Oe = new WeakMap(), Sl = new WeakMap(), eo = new WeakSet(), ts = function(n, o) {
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
var Uc, st, Zm, Mo, rr, wf, Bs = {}, Qm = [], O$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ze(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function tg(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function H$(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Uc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return es(t, l, o, s, null);
}
function es(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Zm };
  return s == null && st.vnode != null && st.vnode(r), r;
}
function W$() {
  return { current: null };
}
function Fc(t) {
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
function eg(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return eg(t);
  }
}
function $f(t) {
  (!t.__d && (t.__d = !0) && rr.push(t) && !js.__r++ || wf !== st.debounceRendering) && ((wf = st.debounceRendering) || setTimeout)(js);
}
function js() {
  for (var t; js.__r = rr.length; )
    t = rr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), rr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Ze({}, r)).__v = r.__v + 1, v_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Or(r), r.__h), ig(o, r), r.__e != l && eg(r)));
    });
}
function ng(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Qm, g = m.length;
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
      v_(t, a, u = u || Bs, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = og(a, _, t) : _ = rg(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Or(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && lg(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      sg(p[i], p[++i], p[++i]);
}
function og(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? og(o, e, n) : rg(n, o, o, s, o.__e, e));
  return e;
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
function I$(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || zs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || zs(t, r, e[r], n[r], o);
}
function kf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || O$.test(e) ? n : n + "px";
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
            n && e in n || kf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || kf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Sf : xf, r) : t.removeEventListener(e, r ? Sf : xf, r);
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
function xf(t) {
  this.l[t.type + !1](st.event ? st.event(t) : t);
}
function Sf(t) {
  this.l[t.type + !0](st.event ? st.event(t) : t);
}
function v_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = st.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new In(p, g), i.constructor = b, i.render = F$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ze({}, i.__s)), Ze(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Ze(Ze({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === Fc && h.key == null ? h.props.children : h, ng(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = U$(n.__e, e, n, o, s, r, l, _);
    (h = st.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), st.__e(x, e, n);
  }
}
function ig(t, e) {
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
function U$(t, e, n, o, s, r, l, c) {
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
    if (r = r && Uc.call(t.childNodes), h = (d = n.props || Bs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (I$(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, ng(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Or(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && tg(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && zs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && zs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function sg(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    st.__e(o, n);
  }
}
function lg(t, e, n) {
  var o, s;
  if (st.unmount && st.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || sg(o, null, e)), (o = t.__c) != null) {
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
      o[s] && lg(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || tg(t.__e), t.__ = t.__e = t.__d = void 0;
}
function F$(t, e, n) {
  return this.constructor(t, n);
}
function B$(t, e, n) {
  var o, s, r;
  st.__ && st.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], v_(e, t = (!o && n || e).__k = H$(Fc, null, [t]), s || Bs, Bs, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Uc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), ig(r, t);
}
Uc = Qm.slice, st = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Zm = 0, Mo = function(t) {
  return t != null && t.constructor === void 0;
}, In.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ze({}, this.state), typeof t == "function" && (t = t(Ze({}, n), this.props)), t && Ze(n, t), t != null && this.__v && (e && this._sb.push(e), $f(this));
}, In.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), $f(this));
}, In.prototype.render = Fc, rr = [], js.__r = 0;
var j$ = 0;
function St(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --j$, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return st.vnode && st.vnode(_), _;
}
let z$ = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
class cg extends In {
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
M(cg, "defaultProps", { closeBtn: !0 });
var ei, no, ni;
class V$ extends In {
  constructor() {
    super(...arguments);
    E(this, ei, W$());
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
function Y$(t, e) {
  const { custom: n, title: o, content: s } = e;
  return {
    body: s,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function q$(t, e) {
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
async function G$(t, e) {
  const { url: n, custom: o, title: s } = e;
  return {
    title: s,
    ...o,
    body: /* @__PURE__ */ St(V$, { url: n })
  };
}
const X$ = {
  custom: Y$,
  ajax: q$,
  iframe: G$
};
var oi, ri, ce, oo, ns, Cl, ag, ii, Ca;
const vr = class extends Ht {
  constructor() {
    super(...arguments);
    E(this, oo);
    E(this, Cl);
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
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), Fs(n, {
        id: o,
        style: this.options.style
      }), Jm(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, oi, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, ri, this.options.id || `modal-${z$()}`);
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
    const { modalElement: n, options: o } = this, { type: s, loadTimeout: r } = o, l = X$[s];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.classList.add(vr.LOADING_CLASS), await W(this, Cl, ag).call(this), r && H(this, ce, window.setTimeout(() => {
      H(this, ce, 0), W(this, ii, Ca).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await W(this, ii, Ca).call(this, this.options.failedTip) : c && typeof c == "object" && await W(this, oo, ns).call(this, c), y(this, ce) && (clearTimeout(y(this, ce)), H(this, ce, 0)), n.classList.remove(vr.LOADING_CLASS), !0;
  }
};
let Ro = vr;
oi = new WeakMap(), ri = new WeakMap(), ce = new WeakMap(), oo = new WeakSet(), ns = function(n) {
  return new Promise((o) => {
    if (Array.isArray(n))
      return this.modalElement.innerHTML = n[0], o();
    const { afterRender: s, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), s == null || s(l), o();
      },
      ...r
    }, B$(
      /* @__PURE__ */ St(cg, { ...n }),
      this.modalElement
    );
  });
}, Cl = new WeakSet(), ag = function() {
  const { loadingText: n } = this.options;
  return W(this, oo, ns).call(this, {
    body: /* @__PURE__ */ St("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ St("span", { className: "spinner" }),
      n ? /* @__PURE__ */ St("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, ii = new WeakSet(), Ca = function(n) {
  if (n)
    return W(this, oo, ns).call(this, {
      body: /* @__PURE__ */ St("div", { className: "modal-load-failed", children: n })
    });
}, M(Ro, "LOADING_CLASS", "loading"), M(Ro, "DEFAULT", {
  ...Ht.DEFAULT,
  loadTimeout: 1e4
});
var He, El, _g, Tl, ug, Al, fg;
class ir extends ie {
  constructor() {
    super(...arguments);
    E(this, El);
    E(this, Tl);
    E(this, Al);
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
    return W(this, Tl, ug).call(this).show();
  }
  hide() {
    var n;
    (n = y(this, He)) == null || n.hide();
  }
}
He = new WeakMap(), El = new WeakSet(), _g = function() {
  const {
    container: n,
    ...o
  } = this.options, s = o, r = this.element.getAttribute("href") || "";
  return s.type || (s.target || r[0] === "#" ? s.type = "static" : s.type = s.type || (s.url ? "iframe" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && r[0] !== "#" && (s.url = r), s;
}, Tl = new WeakSet(), ug = function() {
  const n = W(this, El, _g).call(this);
  let o = y(this, He);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Ht(W(this, Al, fg).call(this), n), H(this, He, o)) : (o = new Ro(this.container, n), H(this, He, o)), o;
}, Al = new WeakSet(), fg = function() {
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
var ha;
let K$ = (ha = class extends mo {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = F(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, M(ha, "NAME", "nav"), ha);
class Cf extends At {
}
M(Cf, "NAME", "nav"), M(Cf, "Component", K$);
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
var J$ = 0;
function rn(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --J$, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Ea.vnode && Ea.vnode(_), _;
}
function Hr(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function Z$({
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
const be = 24 * 60 * 60 * 1e3, Ft = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), Ti = (t, e = new Date()) => (t = Ft(t), e = Ft(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), Ef = (t, e = new Date()) => Ft(t).getFullYear() === Ft(e).getFullYear(), Q$ = (t, e = new Date()) => (t = Ft(t), e = Ft(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), WS = (t, e = new Date()) => {
  t = Ft(t), e = Ft(e);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(t.getTime() / n), s = Math.floor(e.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, IS = (t, e) => Ti(Ft(e), t), US = (t, e) => Ti(Ft(e).getTime() - be, t), FS = (t, e) => Ti(Ft(e).getTime() + be, t), BS = (t, e) => Ti(Ft(e).getTime() - 2 * be, t), Ta = (t, e = "yyyy-MM-dd hh:mm") => {
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
}, jS = (t, e, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = Ta(t, Ef(t) ? o.month : o.full);
  if (Ti(t, e))
    return s;
  const r = Ta(e, Ef(t, e) ? Q$(t, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, zS = (t) => {
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
}, Tf = (t, e, n = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, Tf(t, "day", n, o);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, Tf(t, "day", n, o);
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
function tk({
  key: t,
  type: e,
  page: n,
  text: o = "",
  pagerInfo: s,
  children: r,
  ...l
}) {
  const c = Hr(s, n);
  return o = typeof o == "function" ? o(c) : It(o, c), /* @__PURE__ */ rn(Xh, { ...l, children: [
    r,
    o
  ] });
}
function ek({
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
function nk({
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
  return r.text = typeof l == "function" ? l(e) : It(l, e), s.menu = { ...s.menu, className: F((c = s.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ rn(cp, { type: "dropdown", dropdown: s, ...r });
}
function ok({
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
let rk = (To = class extends go {
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
  link: Z$,
  info: tk,
  nav: ek,
  "size-menu": nk,
  goto: ok
}), To);
class Af extends At {
}
M(Af, "NAME", "pager"), M(Af, "Component", rk);
var hg, yt, dg, sr, Lf, pg = {}, mg = [], ik = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function gg(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function la(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++dg };
  return s == null && yt.vnode != null && yt.vnode(r), r;
}
function sk() {
  return { current: null };
}
function b_(t) {
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
function yg(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return yg(t);
  }
}
function Mf(t) {
  (!t.__d && (t.__d = !0) && sr.push(t) && !Vs.__r++ || Lf !== yt.debounceRendering) && ((Lf = yt.debounceRendering) || setTimeout)(Vs);
}
function Vs() {
  for (var t; Vs.__r = sr.length; )
    t = sr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), sr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = Qe({}, r)).__v = r.__v + 1, $g(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Wr(r), r.__h), ck(o, r), r.__e != l && yg(r)));
    });
}
function vg(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || mg, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? la(null, a, null, null, a) : Array.isArray(a) ? la(b_, { children: a }, null, null, null) : a.__b > 0 ? la(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      $g(t, a, u = u || pg, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = bg(a, _, t) : _ = wg(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Wr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && xg(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      kg(p[i], p[++i], p[++i]);
}
function bg(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? bg(o, e, n) : wg(n, o, o, s, o.__e, e));
  return e;
}
function wg(t, e, n, o, s, r) {
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
function lk(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ys(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ys(t, r, e[r], n[r], o);
}
function Rf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || ik.test(e) ? n : n + "px";
}
function Ys(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Rf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Rf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Df : Nf, r) : t.removeEventListener(e, r ? Df : Nf, r);
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
function Nf(t) {
  this.l[t.type + !1](yt.event ? yt.event(t) : t);
}
function Df(t) {
  this.l[t.type + !0](yt.event ? yt.event(t) : t);
}
function $g(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = yt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new sn(p, g), i.constructor = b, i.render = _k), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Qe({}, i.__s)), Qe(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = Qe(Qe({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === b_ && h.key == null ? h.props.children : h, vg(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = ak(n.__e, e, n, o, s, r, l, _);
    (h = yt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), yt.__e(x, e, n);
  }
}
function ck(t, e) {
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
function ak(t, e, n, o, s, r, l, c) {
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
    if (r = r && hg.call(t.childNodes), h = (d = n.props || pg).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (lk(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, vg(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Wr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && gg(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Ys(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Ys(t, "checked", f, d.checked, !1));
  }
  return t;
}
function kg(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    yt.__e(o, n);
  }
}
function xg(t, e, n) {
  var o, s;
  if (yt.unmount && yt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || kg(o, null, e)), (o = t.__c) != null) {
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
      o[s] && xg(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || gg(t.__e), t.__ = t.__e = t.__d = void 0;
}
function _k(t, e, n) {
  return this.constructor(t, n);
}
hg = mg.slice, yt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, dg = 0, sn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qe({}, this.state), typeof t == "function" && (t = t(Qe({}, n), this.props)), t && Qe(n, t), t != null && this.__v && (e && this._sb.push(e), Mf(this));
}, sn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Mf(this));
}, sn.prototype.render = b_, sr = [], Vs.__r = 0;
var uk = 0;
function nt(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --uk, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return yt.vnode && yt.vnode(_), _;
}
let fk = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Ll;
class hk extends sn {
  constructor() {
    super(...arguments);
    E(this, Ll, (n) => {
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
      /* @__PURE__ */ nt("div", { className: "picker-deselect-btn btn", onClick: y(this, Ll), "data-idx": u, children: /* @__PURE__ */ nt("span", { className: "close" }) })
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
Ll = new WeakMap();
var Ml;
class dk extends sn {
  constructor() {
    super(...arguments);
    E(this, Ml, (n) => {
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
    } = this.props, [d] = c, u = d ? /* @__PURE__ */ nt("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ nt("span", { className: "picker-select-placeholder", children: r }), a = d && _ ? /* @__PURE__ */ nt("button", { type: "button", className: "btn picker-deselect-btn", onClick: y(this, Ml), children: /* @__PURE__ */ nt("span", { className: "close" }) }) : null;
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
Ml = new WeakMap();
var Rl, Sg, si, Nl, li, Dl;
class pk extends sn {
  constructor() {
    super(...arguments);
    E(this, Rl);
    M(this, "state", { keys: "", shown: !1 });
    E(this, si, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    E(this, Nl, ({ item: n }) => {
      const o = this.props.items.find((s) => s.value === n.key);
      o && this.props.onSelectItem(o);
    });
    E(this, li, (n) => {
      this.setState({ keys: n.target.value });
    });
    E(this, Dl, () => {
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
        a ? /* @__PURE__ */ nt("button", { type: "button", className: "btn picker-menu-search-clear", onClick: y(this, Dl), children: /* @__PURE__ */ nt("span", { className: "close" }) }) : /* @__PURE__ */ nt("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ nt(Ya, { className: "picker-menu-list", items: W(this, Rl, Sg).call(this), onClickItem: y(this, Nl), ...h })
    ] });
  }
}
Rl = new WeakSet(), Sg = function() {
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
}, si = new WeakMap(), Nl = new WeakMap(), li = new WeakMap(), Dl = new WeakMap();
function Pf(t) {
  const e = /* @__PURE__ */ new Set();
  return t.reduce((n, o) => (e.has(o) || (e.add(o), n.push(o)), n), []);
}
var da, ci, ai, _i, ro, os, ui, Aa, Pl, Cg, Ol, Eg, Hl, Wl, Il, Ul, Fl, Tg;
let mk = (da = class extends sn {
  constructor(n) {
    super(n);
    E(this, ro);
    E(this, ui);
    E(this, Pl);
    E(this, Ol);
    E(this, Fl);
    E(this, ci, 0);
    E(this, ai, fk());
    E(this, _i, sk());
    E(this, Hl, (n, o) => {
      const { valueList: s } = this, r = new Set(n.map((c) => c.value)), l = s.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    E(this, Wl, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    E(this, Il, () => {
      this.close();
    });
    E(this, Ul, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = y(this, _i).current) == null || o.hide();
      });
    });
    this.state = {
      value: W(this, Pl, Cg).call(this, n.defaultValue) ?? "",
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
    return W(this, ui, Aa).call(this, this.state.value);
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
      const s = ++U_(this, ci)._;
      if (await W(this, ro, os).call(this, { loading: !0, items: [] }), n = await n(), y(this, ci) !== s)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await W(this, ro, os).call(this, o), n;
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
    await W(this, ro, os).call(this, { open: n }), n && this.loadItemList();
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
    } = this.props, l = r ? hk : dk;
    return /* @__PURE__ */ nt("div", { className: F("picker", n), style: o, id: `picker-${y(this, ai)}`, children: [
      /* @__PURE__ */ nt(l, { ...W(this, Ol, Eg).call(this) }),
      s,
      this.state.open ? /* @__PURE__ */ nt(pk, { ...W(this, Fl, Tg).call(this), ref: y(this, _i) }) : null
    ] });
  }
}, ci = new WeakMap(), ai = new WeakMap(), _i = new WeakMap(), ro = new WeakSet(), os = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, ui = new WeakSet(), Aa = function(n) {
  return typeof n == "string" ? Pf(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? Pf(n) : [];
}, Pl = new WeakSet(), Cg = function(n) {
  const o = W(this, ui, Aa).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, Ol = new WeakSet(), Eg = function() {
  const { placeholder: n, disabled: o } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: y(this, Wl),
    onDeselect: y(this, Hl)
  };
}, Hl = new WeakMap(), Wl = new WeakMap(), Il = new WeakMap(), Ul = new WeakMap(), Fl = new WeakSet(), Tg = function() {
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
    onRequestHide: y(this, Il),
    onSelectItem: y(this, Ul)
  };
}, M(da, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), da);
class Of extends At {
}
M(Of, "NAME", "picker"), M(Of, "Component", mk);
var Bc, lt, Ag, lr, Hf, qs = {}, Lg = [], gk = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function tn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Mg(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Rg(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Bc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return rs(t, l, o, s, null);
}
function rs(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Ag };
  return s == null && lt.vnode != null && lt.vnode(r), r;
}
function Hi() {
  return { current: null };
}
function jc(t) {
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
function Ng(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ng(t);
  }
}
function Wf(t) {
  (!t.__d && (t.__d = !0) && lr.push(t) && !Gs.__r++ || Hf !== lt.debounceRendering) && ((Hf = lt.debounceRendering) || setTimeout)(Gs);
}
function Gs() {
  for (var t; Gs.__r = lr.length; )
    t = lr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), lr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = tn({}, r)).__v = r.__v + 1, w_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ir(r), r.__h), Hg(o, r), r.__e != l && Ng(r)));
    });
}
function Dg(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Lg, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? rs(null, a, null, null, a) : Array.isArray(a) ? rs(jc, { children: a }, null, null, null) : a.__b > 0 ? rs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      w_(t, a, u = u || qs, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Pg(a, _, t) : _ = Og(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Ir(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Ig(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Wg(p[i], p[++i], p[++i]);
}
function Pg(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Pg(o, e, n) : Og(n, o, o, s, o.__e, e));
  return e;
}
function Og(t, e, n, o, s, r) {
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
    r === "children" || r === "key" || r in e || Xs(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Xs(t, r, e[r], n[r], o);
}
function If(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || gk.test(e) ? n : n + "px";
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
            n && e in n || If(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || If(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Ff : Uf, r) : t.removeEventListener(e, r ? Ff : Uf, r);
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
function Uf(t) {
  this.l[t.type + !1](lt.event ? lt.event(t) : t);
}
function Ff(t) {
  this.l[t.type + !0](lt.event ? lt.event(t) : t);
}
function w_(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = lt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new cr(p, g), i.constructor = b, i.render = bk), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = tn({}, i.__s)), tn(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = tn(tn({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === jc && h.key == null ? h.props.children : h, Dg(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = vk(n.__e, e, n, o, s, r, l, _);
    (h = lt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), lt.__e(x, e, n);
  }
}
function Hg(t, e) {
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
    if (r = r && Bc.call(t.childNodes), h = (d = n.props || qs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (yk(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Dg(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ir(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Mg(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && Xs(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && Xs(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Wg(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    lt.__e(o, n);
  }
}
function Ig(t, e, n) {
  var o, s;
  if (lt.unmount && lt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Wg(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Ig(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || Mg(t.__e), t.__ = t.__e = t.__d = void 0;
}
function bk(t, e, n) {
  return this.constructor(t, n);
}
function wk(t, e, n) {
  var o, s, r;
  lt.__ && lt.__(t, e), s = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], w_(e, t = (!o && n || e).__k = Rg(jc, null, [t]), s || qs, qs, e.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : e.firstChild ? Bc.call(e.childNodes) : null, r, !o && n ? n : s ? s.__e : e.firstChild, o), Hg(r, t);
}
Bc = Lg.slice, lt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Ag = 0, cr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tn({}, this.state), typeof t == "function" && (t = t(tn({}, n), this.props)), t && tn(n, t), t != null && this.__v && (e && this._sb.push(e), Wf(this));
}, cr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Wf(this));
}, cr.prototype.render = jc, lr = [], Gs.__r = 0;
var $k = 0;
function Bt(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --$k, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return lt.vnode && lt.vnode(_), _;
}
var Ks = {}, kk = {
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
  })(Nm, function() {
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
        }, z = this.$W, J = this.$M, kt = this.$D, B = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? U(1, 0) : U(31, 11);
          case d:
            return O ? U(1, J) : U(0, J + 1);
          case i:
            var Z = this.$locale().weekStart || 0, $t = (z < Z ? z + 7 : z) - Z;
            return U(O ? kt - $t : kt + (6 - $t), J);
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
        var P = R.p(D), U = function(J) {
          var kt = x(O);
          return R.w(kt.date(kt.date() + Math.round(J * k)), O);
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
        var O = k || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), U = this.$H, V = this.$m, z = this.$M, J = L.weekdays, kt = L.months, B = function(X, at, Pt, Ot) {
          return X && (X[at] || X(D, O)) || Pt[at].slice(0, Ot);
        }, Z = function(X) {
          return R.s(U % 12 || 12, X, "0");
        }, $t = L.meridiem || function(X, at, Pt) {
          var Ot = X < 12 ? "AM" : "PM";
          return Pt ? Ot.toLowerCase() : Ot;
        }, ct = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: R.s(z + 1, 2, "0"), MMM: B(L.monthsShort, z, kt, 3), MMMM: B(kt, z), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: B(L.weekdaysMin, this.$W, J, 2), ddd: B(L.weekdaysShort, this.$W, J, 3), dddd: J[this.$W], H: String(U), HH: R.s(U, 2, "0"), h: Z(1), hh: Z(2), a: $t(U, V, !0), A: $t(U, V, !1), m: String(V), mm: R.s(V, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(X, at) {
          return at || ct[X] || P.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(k, D, L) {
        var O, P = R.p(D), U = x(k), V = (U.utcOffset() - this.utcOffset()) * o, z = this - U, J = R.m(this, U);
        return J = (O = {}, O[a] = J / 12, O[d] = J, O[u] = J / 3, O[i] = (z - V) / 6048e5, O[h] = (z - V) / 864e5, O[_] = z / s, O[c] = z / o, O[l] = z / n, O)[P] || z, L ? J : R.a(J);
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
})(kk);
const xk = (t = "00:00:00") => {
  const e = Ks(`1989-01-01 ${t}`);
  return {
    hour: e.hour(),
    minute: e.minute(),
    second: e.second()
  };
};
function Sk() {
  let t = new Array(24).fill(0), e = new Array(60).fill(0), n = new Array(60).fill(0);
  return t = t.map((o, s) => o + s), e = e.map((o, s) => o + s), n = n.map((o, s) => o + s), { hourList: t, minuteList: e, secondList: n };
}
class Ck extends cr {
  constructor() {
    super(...arguments);
    M(this, "cellHeight", 24);
    M(this, "ref", Hi());
    M(this, "hourRef", Hi());
    M(this, "minuteRef", Hi());
    M(this, "secondRef", Hi());
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
    const s = xk(this.state.selectTime);
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
    const { showSeconds: n, style: o } = this.props, { hourList: s, minuteList: r, secondList: l } = Sk();
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
function $_(t) {
  return t === "y" ? "height" : "width";
}
function wo(t) {
  return t.split("-")[0];
}
function zc(t) {
  return ["top", "bottom"].includes(wo(t)) ? "x" : "y";
}
function Bf(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = zc(e), _ = $_(c), h = o[_] / 2 - s[_] / 2, i = wo(e), d = c === "x";
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
const Ek = async (t, e, n) => {
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
  } = Bf(h, o, _), u = o, a = {}, f = 0;
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
      } = Bf(h, u, _)), v = -1;
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
function Tk(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ug(t) {
  return typeof t != "number" ? Tk(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Js(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Ak(t, e) {
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
  } = e, f = Ug(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = Js(await r.getClippingRect({
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
  }, S = Js(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Lk = Math.min, Mk = Math.max;
function Rk(t, e, n) {
  return Mk(t, Lk(e, n));
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
    const h = Ug(o), i = {
      x: s,
      y: r
    }, d = zc(l), u = $_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], T = w / 2 - a[u] / 2 + $, b = Rk(S, T, A), R = Ai(l) != null && T != b && c.reference[u] / 2 - (T < S ? h[f] : h[v]) - a[u] / 2 < 0 ? T < S ? S - T : A - T : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: T - b
      }
    };
  }
}), Dk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Dk[e]);
}
function Pk(t, e, n) {
  n === void 0 && (n = !1);
  const o = Ai(t), s = zc(t), r = $_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Zs(l)), {
    main: l,
    cross: Zs(l)
  };
}
const Ok = {
  start: "end",
  end: "start"
};
function La(t) {
  return t.replace(/start|end/g, (e) => Ok[e]);
}
function Hk(t) {
  const e = Zs(t);
  return [La(t), e, La(e)];
}
function Wk(t, e, n) {
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
  const s = Ai(t);
  let r = Wk(wo(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(La)))), r;
}
const Uk = function(t) {
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
      } = t, p = wo(o), m = wo(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [Zs(l)] : Hk(l));
      !d && a !== "none" && w.push(...Ik(l, f, a, g));
      const $ = [l, ...w], S = await Ak(e, v), A = [];
      let T = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = Pk(o, r, g);
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
async function Fk(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = wo(n), c = Ai(n), _ = zc(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const Bk = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await Fk(e, t);
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
function pe(t) {
  return Kt(t).getComputedStyle(t);
}
function an(t) {
  return Bg(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Wi;
function Fg() {
  if (Wi)
    return Wi;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Wi = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Wi) : navigator.userAgent;
}
function Le(t) {
  return t instanceof Kt(t).HTMLElement;
}
function oe(t) {
  return t instanceof Kt(t).Element;
}
function Bg(t) {
  return t instanceof Kt(t).Node;
}
function jf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Kt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Vc(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: s
  } = pe(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function jk(t) {
  return ["table", "td", "th"].includes(an(t));
}
function k_(t) {
  const e = /firefox/i.test(Fg()), n = pe(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function jg() {
  return !/^((?!chrome|android).)*safari/i.test(Fg());
}
function x_(t) {
  return ["html", "body", "#document"].includes(an(t));
}
const zf = Math.min, ar = Math.max, Qs = Math.round;
function zg(t) {
  const e = pe(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = Qs(n) !== s || Qs(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Vg(t) {
  return oe(t) ? t : t.contextElement;
}
const Yg = {
  x: 1,
  y: 1
};
function Un(t) {
  const e = Vg(t);
  if (!Le(e))
    return Yg;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = zg(e);
  let l = (r ? Qs(n.width) : n.width) / o, c = (r ? Qs(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Mn(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Vg(t);
  let _ = Yg;
  e && (o ? oe(o) && (_ = Un(o)) : _ = Un(t));
  const h = c ? Kt(c) : window, i = !jg() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const v = Kt(c), p = o && oe(o) ? Kt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = Un(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
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
function pn(t) {
  return ((Bg(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Yc(t) {
  return oe(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function qg(t) {
  return Mn(pn(t)).left + Yc(t).scrollLeft;
}
function zk(t, e, n) {
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
    if ((an(e) !== "body" || Vc(s)) && (l = Yc(e)), Le(e)) {
      const _ = Mn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = qg(s));
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
    (jf(t) ? t.host : null) || // Fallback
    pn(t)
  );
  return jf(e) ? e.host : e;
}
function Vf(t) {
  return !Le(t) || pe(t).position === "fixed" ? null : t.offsetParent;
}
function Vk(t) {
  let e = Ur(t);
  for (; Le(e) && !x_(e); ) {
    if (k_(e))
      return e;
    e = Ur(e);
  }
  return null;
}
function Yf(t) {
  const e = Kt(t);
  let n = Vf(t);
  for (; n && jk(n) && pe(n).position === "static"; )
    n = Vf(n);
  return n && (an(n) === "html" || an(n) === "body" && pe(n).position === "static" && !k_(n)) ? e : n || Vk(t) || e;
}
function Yk(t) {
  return zg(t);
}
function qk(t) {
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
  if ((s || !s && o !== "fixed") && ((an(n) !== "body" || Vc(r)) && (l = Yc(n)), Le(n))) {
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
function Gk(t, e) {
  const n = Kt(t), o = pn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = jg();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Xk(t) {
  var e;
  const n = pn(t), o = Yc(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = ar(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = ar(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + qg(t);
  const _ = -o.scrollTop;
  return pe(s || n).direction === "rtl" && (c += ar(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Gg(t) {
  const e = Ur(t);
  return x_(e) ? t.ownerDocument.body : Le(e) && Vc(e) ? e : Gg(e);
}
function _r(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Gg(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Kt(o);
  return s ? e.concat(r, r.visualViewport || [], Vc(o) ? o : []) : e.concat(o, _r(o));
}
function Kk(t, e) {
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
function qf(t, e, n) {
  return e === "viewport" ? Js(Gk(t, n)) : oe(e) ? Kk(e, n) : Js(Xk(pn(t)));
}
function Jk(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = _r(t).filter((c) => oe(c) && an(c) !== "body"), s = null;
  const r = pe(t).position === "fixed";
  let l = r ? Ur(t) : t;
  for (; oe(l) && !x_(l); ) {
    const c = pe(l), _ = k_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Ur(l);
  }
  return e.set(t, o), o;
}
function Zk(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? Jk(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = qf(e, i, s);
    return h.top = ar(d.top, h.top), h.right = zf(d.right, h.right), h.bottom = zf(d.bottom, h.bottom), h.left = ar(d.left, h.left), h;
  }, qf(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Qk = {
  getClippingRect: Zk,
  convertOffsetParentRelativeRectToViewportRelativeRect: qk,
  isElement: oe,
  getDimensions: Yk,
  getOffsetParent: Yf,
  getDocumentElement: pn,
  getScale: Un,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || Yf, r = this.getDimensions;
    return {
      reference: zk(e, await s(n), o),
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
function tx(t, e, n, o) {
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
const ex = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: Qk,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return Ek(t, e, {
    ...s,
    platform: r
  });
};
var io, so, xn, fi, Mt, hi, di, Ma, Bl, Xg, jl, Kg, zl, Jg, Vl, Zg, Yl, Qg, ql, ty, Gl, ey, Xl;
const yn = class extends ie {
  constructor() {
    super(...arguments);
    E(this, di);
    E(this, Bl);
    E(this, jl);
    E(this, zl);
    E(this, Vl);
    E(this, Yl);
    E(this, ql);
    E(this, Gl);
    E(this, io, void 0);
    E(this, so, 0);
    E(this, xn, void 0);
    E(this, fi, void 0);
    E(this, Mt, void 0);
    E(this, hi, void 0);
    M(this, "hideLater", () => {
      y(this, Xl).call(this), H(this, so, window.setTimeout(this.hide.bind(this), 100));
    });
    E(this, Xl, () => {
      clearTimeout(y(this, so)), H(this, so, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, xn)) == null ? void 0 : n.classList.contains(yn.CLASS_SHOW);
  }
  get timepicker() {
    return y(this, xn) || W(this, jl, Kg).call(this);
  }
  get trigger() {
    return y(this, fi) || this.element;
  }
  get elementShowClass() {
    return `with-${yn.NAME}-show`;
  }
  show(n) {
    return H(this, fi, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(yn.CLASS_SHOW), W(this, ql, ty).call(this), !0);
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
io = new WeakMap(), so = new WeakMap(), xn = new WeakMap(), fi = new WeakMap(), Mt = new WeakMap(), hi = new WeakMap(), di = new WeakSet(), Ma = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Bl = new WeakSet(), Xg = function() {
  const n = W(this, di, Ma).call(this);
  return H(this, Mt, document.createElement("div")), y(this, Mt).style.position = "absolute", y(this, Mt).style.width = `${n}px`, y(this, Mt).style.height = `${n}px`, y(this, Mt).style.transform = "rotate(45deg)", y(this, Mt);
}, jl = new WeakSet(), Kg = function() {
  const n = yn.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), wk(Rg(Ck, { ...this.options }), o), this.options.arrow && o.append(W(this, Bl, Xg).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, xn, o), o;
}, zl = new WeakSet(), Jg = function() {
  var l;
  const n = W(this, di, Ma).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [Bk(n), Uk()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && y(this, Mt) && ((l = r.middleware) == null || l.push(Nk({ element: y(this, Mt) }))), r;
}, Vl = new WeakSet(), Zg = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Yl = new WeakSet(), Qg = function(n) {
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
}, ql = new WeakSet(), ty = function() {
  const n = W(this, zl, Jg).call(this), o = W(this, Gl, ey).call(this);
  H(this, hi, tx(o, this.timepicker, () => {
    ex(o, this.timepicker, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.timepicker.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, Vl, Zg).call(this, _);
      if (l.arrow && y(this, Mt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(y(this, Mt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Mt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, Yl, Qg).call(this, _)
        });
      }
    });
  }));
}, Gl = new WeakSet(), ey = function() {
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
}, Xl = new WeakMap(), M(Vt, "NAME", "timepicker"), M(Vt, "CLASSNAME", "timepicker"), M(Vt, "CLASS_SHOW", "show"), M(Vt, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), M(Vt, "DEFAULT", {
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
const nx = (t) => {
  const e = document.getElementsByClassName("with-timepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Vt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Vt.clear({ event: t });
};
window.addEventListener("scroll", nx, !0);
class Gf extends At {
}
M(Gf, "NAME", "toolbar"), M(Gf, "Component", go);
function Li(t) {
  return t.split("-")[1];
}
function S_(t) {
  return t === "y" ? "height" : "width";
}
function $o(t) {
  return t.split("-")[0];
}
function qc(t) {
  return ["top", "bottom"].includes($o(t)) ? "x" : "y";
}
function Xf(t, e, n) {
  let {
    reference: o,
    floating: s
  } = t;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = qc(e), _ = S_(c), h = o[_] / 2 - s[_] / 2, i = $o(e), d = c === "x";
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
const ox = async (t, e, n) => {
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
  } = Xf(h, o, _), u = o, a = {}, f = 0;
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
      } = Xf(h, u, _)), v = -1;
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
function rx(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ny(t) {
  return typeof t != "number" ? rx(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function tl(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function ix(t, e) {
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
  } = e, f = ny(a), p = c[u ? d === "floating" ? "reference" : "floating" : d], m = tl(await r.getClippingRect({
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
  }, S = tl(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const sx = Math.min, lx = Math.max;
function cx(t, e, n) {
  return lx(t, sx(e, n));
}
const ax = (t) => ({
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
    const h = ny(o), i = {
      x: s,
      y: r
    }, d = qc(l), u = S_(d), a = await _.getDimensions(n), f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[d] - i[d] - c.floating[u], m = i[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[u]);
    const $ = p / 2 - m / 2, S = h[f], A = w - a[u] - h[v], T = w / 2 - a[u] / 2 + $, b = cx(S, T, A), R = Li(l) != null && T != b && c.reference[u] / 2 - (T < S ? h[f] : h[v]) - a[u] / 2 < 0 ? T < S ? S - T : A - T : 0;
    return {
      [d]: i[d] - R,
      data: {
        [d]: b,
        centerOffset: T - b
      }
    };
  }
}), _x = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function el(t) {
  return t.replace(/left|right|bottom|top/g, (e) => _x[e]);
}
function ux(t, e, n) {
  n === void 0 && (n = !1);
  const o = Li(t), s = qc(t), r = S_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = el(l)), {
    main: l,
    cross: el(l)
  };
}
const fx = {
  start: "end",
  end: "start"
};
function Ra(t) {
  return t.replace(/start|end/g, (e) => fx[e]);
}
function hx(t) {
  const e = el(t);
  return [Ra(t), e, Ra(e)];
}
function dx(t, e, n) {
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
function px(t, e, n, o) {
  const s = Li(t);
  let r = dx($o(t), n === "start", o);
  return s && (r = r.map((l) => l + "-" + s), e && (r = r.concat(r.map(Ra)))), r;
}
const mx = function(t) {
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
      } = t, p = $o(o), m = $o(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !f ? [el(l)] : hx(l));
      !d && a !== "none" && w.push(...px(l, f, a, g));
      const $ = [l, ...w], S = await ix(e, v), A = [];
      let T = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(S[p]), i) {
        const {
          main: R,
          cross: q
        } = ux(o, r, g);
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
async function gx(t, e) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = $o(n), c = Li(n), _ = qc(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, i = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const yx = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, s = await gx(e, t);
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
function me(t) {
  return Jt(t).getComputedStyle(t);
}
function _n(t) {
  return ry(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Ii;
function oy() {
  if (Ii)
    return Ii;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Ii = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Ii) : navigator.userAgent;
}
function Me(t) {
  return t instanceof Jt(t).HTMLElement;
}
function re(t) {
  return t instanceof Jt(t).Element;
}
function ry(t) {
  return t instanceof Jt(t).Node;
}
function Kf(t) {
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
  } = me(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(s);
}
function vx(t) {
  return ["table", "td", "th"].includes(_n(t));
}
function C_(t) {
  const e = /firefox/i.test(oy()), n = me(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function iy() {
  return !/^((?!chrome|android).)*safari/i.test(oy());
}
function E_(t) {
  return ["html", "body", "#document"].includes(_n(t));
}
const Jf = Math.min, ur = Math.max, nl = Math.round;
function sy(t) {
  const e = me(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const s = t.offsetWidth, r = t.offsetHeight, l = nl(n) !== s || nl(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function ly(t) {
  return re(t) ? t : t.contextElement;
}
const cy = {
  x: 1,
  y: 1
};
function Fn(t) {
  const e = ly(t);
  if (!Me(e))
    return cy;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: s,
    fallback: r
  } = sy(e);
  let l = (r ? nl(n.width) : n.width) / o, c = (r ? nl(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Rn(t, e, n, o) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = ly(t);
  let _ = cy;
  e && (o ? re(o) && (_ = Fn(o)) : _ = Fn(t));
  const h = c ? Jt(c) : window, i = !iy() && n;
  let d = (l.left + (i && ((s = h.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const v = Jt(c), p = o && re(o) ? Jt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = Fn(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
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
  return ((ry(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Xc(t) {
  return re(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function ay(t) {
  return Rn(mn(t)).left + Xc(t).scrollLeft;
}
function bx(t, e, n) {
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
    if ((_n(e) !== "body" || Gc(s)) && (l = Xc(e)), Me(e)) {
      const _ = Rn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      s && (c.x = ay(s));
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
    (Kf(t) ? t.host : null) || // Fallback
    mn(t)
  );
  return Kf(e) ? e.host : e;
}
function Zf(t) {
  return !Me(t) || me(t).position === "fixed" ? null : t.offsetParent;
}
function wx(t) {
  let e = Fr(t);
  for (; Me(e) && !E_(e); ) {
    if (C_(e))
      return e;
    e = Fr(e);
  }
  return null;
}
function Qf(t) {
  const e = Jt(t);
  let n = Zf(t);
  for (; n && vx(n) && me(n).position === "static"; )
    n = Zf(n);
  return n && (_n(n) === "html" || _n(n) === "body" && me(n).position === "static" && !C_(n)) ? e : n || wx(t) || e;
}
function $x(t) {
  return sy(t);
}
function kx(t) {
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
  if ((s || !s && o !== "fixed") && ((_n(n) !== "body" || Gc(r)) && (l = Xc(n)), Me(n))) {
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
function xx(t, e) {
  const n = Jt(t), o = mn(t), s = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (s) {
    r = s.width, l = s.height;
    const h = iy();
    (h || !h && e === "fixed") && (c = s.offsetLeft, _ = s.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Sx(t) {
  var e;
  const n = mn(t), o = Xc(t), s = (e = t.ownerDocument) == null ? void 0 : e.body, r = ur(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = ur(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let c = -o.scrollLeft + ay(t);
  const _ = -o.scrollTop;
  return me(s || n).direction === "rtl" && (c += ur(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function _y(t) {
  const e = Fr(t);
  return E_(e) ? t.ownerDocument.body : Me(e) && Gc(e) ? e : _y(e);
}
function fr(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = _y(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Jt(o);
  return s ? e.concat(r, r.visualViewport || [], Gc(o) ? o : []) : e.concat(o, fr(o));
}
function Cx(t, e) {
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
function th(t, e, n) {
  return e === "viewport" ? tl(xx(t, n)) : re(e) ? Cx(e, n) : tl(Sx(mn(t)));
}
function Ex(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = fr(t).filter((c) => re(c) && _n(c) !== "body"), s = null;
  const r = me(t).position === "fixed";
  let l = r ? Fr(t) : t;
  for (; re(l) && !E_(l); ) {
    const c = me(l), _ = C_(l);
    (r ? !_ && !s : !_ && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position)) ? o = o.filter((i) => i !== l) : s = c, l = Fr(l);
  }
  return e.set(t, o), o;
}
function Tx(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = t;
  const l = [...n === "clippingAncestors" ? Ex(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, i) => {
    const d = th(e, i, s);
    return h.top = ur(d.top, h.top), h.right = Jf(d.right, h.right), h.bottom = Jf(d.bottom, h.bottom), h.left = ur(d.left, h.left), h;
  }, th(e, c, s));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Ax = {
  getClippingRect: Tx,
  convertOffsetParentRelativeRectToViewportRelativeRect: kx,
  isElement: re,
  getDimensions: $x,
  getOffsetParent: Qf,
  getDocumentElement: mn,
  getScale: Fn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const s = this.getOffsetParent || Qf, r = this.getDimensions;
    return {
      reference: bx(e, await s(n), o),
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
function Lx(t, e, n, o) {
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
const Mx = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: Ax,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return ox(t, e, {
    ...s,
    platform: r
  });
};
var lo, co, ao, Sn, Rt, Kl, pi, mi, Na, Jl, uy, Zl, fy, Ql, hy, tc, dy, ec, py, nc, my, oc, gy, _o, rc, yy;
const vn = class extends ie {
  constructor() {
    super(...arguments);
    E(this, mi);
    E(this, Jl);
    E(this, Zl);
    E(this, Ql);
    E(this, tc);
    E(this, ec);
    E(this, nc);
    E(this, oc);
    E(this, rc);
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
    return y(this, Sn) || W(this, Zl, fy).call(this);
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
    return this.setOptions(n), !y(this, lo) && this.isHover && W(this, rc, yy).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(vn.CLASS_SHOW), W(this, nc, my).call(this), !0;
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
lo = new WeakMap(), co = new WeakMap(), ao = new WeakMap(), Sn = new WeakMap(), Rt = new WeakMap(), Kl = new WeakMap(), pi = new WeakMap(), mi = new WeakSet(), Na = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Jl = new WeakSet(), uy = function() {
  const n = W(this, mi, Na).call(this);
  return H(this, Rt, document.createElement("div")), y(this, Rt).style.position = this.options.strategy, y(this, Rt).style.width = `${n}px`, y(this, Rt).style.height = `${n}px`, y(this, Rt).style.transform = "rotate(45deg)", y(this, Rt);
}, Zl = new WeakSet(), fy = function() {
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
  if (this.options.arrow && (o == null || o.append(W(this, Jl, uy).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, Sn, o), o;
}, Ql = new WeakSet(), hy = function() {
  var l;
  const n = W(this, mi, Na).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [yx(n), mx()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && y(this, Rt) && ((l = r.middleware) == null || l.push(ax({ element: y(this, Rt) }))), r;
}, tc = new WeakSet(), dy = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, ec = new WeakSet(), py = function(n) {
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
}, nc = new WeakSet(), my = function() {
  const n = W(this, Ql, hy).call(this), o = W(this, oc, gy).call(this);
  H(this, pi, Lx(o, this.tooltip, () => {
    Mx(o, this.tooltip, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.tooltip.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, tc, dy).call(this, _);
      if (l.arrow && y(this, Rt)) {
        const { x: i, y: d } = l.arrow;
        Object.assign(y(this, Rt).style, {
          left: i != null ? `${i}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Rt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, ec, py).call(this, _)
        });
      }
    });
  }));
}, oc = new WeakSet(), gy = function() {
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
}, _o = new WeakMap(), rc = new WeakSet(), yy = function() {
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
var vy, vt, by, hr, eh, wy = {}, $y = [], Rx = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function en(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ky(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ca(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++by };
  return s == null && vt.vnode != null && vt.vnode(r), r;
}
function T_(t) {
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
function xy(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return xy(t);
  }
}
function nh(t) {
  (!t.__d && (t.__d = !0) && hr.push(t) && !ol.__r++ || eh !== vt.debounceRendering) && ((eh = vt.debounceRendering) || setTimeout)(ol);
}
function ol() {
  for (var t; ol.__r = hr.length; )
    t = hr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), hr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = en({}, r)).__v = r.__v + 1, Ty(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Br(r), r.__h), Dx(o, r), r.__e != l && xy(r)));
    });
}
function Sy(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || $y, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ca(null, a, null, null, a) : Array.isArray(a) ? ca(T_, { children: a }, null, null, null) : a.__b > 0 ? ca(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Ty(t, a, u = u || wy, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Cy(a, _, t) : _ = Ey(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = Br(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Ly(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Ay(p[i], p[++i], p[++i]);
}
function Cy(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Cy(o, e, n) : Ey(n, o, o, s, o.__e, e));
  return e;
}
function Ey(t, e, n, o, s, r) {
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
function Nx(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || rl(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || rl(t, r, e[r], n[r], o);
}
function oh(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Rx.test(e) ? n : n + "px";
}
function rl(t, e, n, o, s) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || oh(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || oh(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? ih : rh, r) : t.removeEventListener(e, r ? ih : rh, r);
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
function rh(t) {
  this.l[t.type + !1](vt.event ? vt.event(t) : t);
}
function ih(t) {
  this.l[t.type + !0](vt.event ? vt.event(t) : t);
}
function Ty(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = vt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new dr(p, g), i.constructor = b, i.render = Ox), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = en({}, i.__s)), en(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = en(en({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === T_ && h.key == null ? h.props.children : h, Sy(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Px(n.__e, e, n, o, s, r, l, _);
    (h = vt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), vt.__e(x, e, n);
  }
}
function Dx(t, e) {
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
function Px(t, e, n, o, s, r, l, c) {
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
    if (r = r && vy.call(t.childNodes), h = (d = n.props || wy).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Nx(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, Sy(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Br(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && ky(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && rl(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && rl(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Ay(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    vt.__e(o, n);
  }
}
function Ly(t, e, n) {
  var o, s;
  if (vt.unmount && vt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Ay(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Ly(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || ky(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Ox(t, e, n) {
  return this.constructor(t, n);
}
vy = $y.slice, vt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, by = 0, dr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = en({}, this.state), typeof t == "function" && (t = t(en({}, n), this.props)), t && en(n, t), t != null && this.__v && (e && this._sb.push(e), nh(this));
}, dr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), nh(this));
}, dr.prototype.render = T_, hr = [], ol.__r = 0;
var Hx = 0;
function il(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Hx, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return vt.vnode && vt.vnode(_), _;
}
function Wx({
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
  d ? a = d(t, c) : l ? a = /* @__PURE__ */ il(l, { ...h }) : a = c;
  const { left: f, top: v, width: p, height: m } = o;
  return /* @__PURE__ */ il("div", { style: { width: p, height: m, left: f + s, top: v + r, ...n }, ...u, children: [
    a,
    i
  ] });
}
function Ix(t, e, n = 0, o = 0) {
  const s = t.left + n, r = t.top + o;
  return !(s > e.left + e.width || r > e.top + e.height || s + t.width < e.left || r + t.height < e.top);
}
let Ux = class extends dr {
  render() {
    const { width: e, height: n, cells: o, left: s, top: r, visibleBounding: l, onRenderCell: c, style: _, children: h, offsetX: i = 0, offsetY: d = 0, ...u } = this.props, a = l ? o.filter((f) => Ix(f.bounding, l, i, d)) : o;
    return /* @__PURE__ */ il("div", { style: { width: e, height: n, left: s, top: r, ..._ }, ...u, children: [
      a.map((f) => /* @__PURE__ */ il(Wx, { offsetX: i, offsetY: d, ...f })),
      h
    ] });
  }
};
class sh extends At {
}
M(sh, "NAME", "virtualgrid"), M(sh, "Component", Ux);
var Qt, gi, yi, We, xt, tt, ic, My, sc, Ry, vi, Da, lc, Ny, cc, Dy, bi, Pa, ac, Py, _c, Oy, uc, Hy;
class Fx {
  constructor(e, n = {}) {
    E(this, ic);
    E(this, sc);
    E(this, vi);
    E(this, lc);
    E(this, cc);
    E(this, bi);
    E(this, ac);
    E(this, _c);
    E(this, uc);
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
    W(this, cc, Dy).call(this), W(this, lc, Ny).call(this) && (this.beforeSubmit && !this.beforeSubmit(this.formData) || (this.method === "POST" ? W(this, uc, Hy).call(this) : W(this, _c, Oy).call(this)));
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
    y(this, Qt).reset(), W(this, vi, Da).call(this);
  }
}
Qt = new WeakMap(), gi = new WeakMap(), yi = new WeakMap(), We = new WeakMap(), xt = new WeakMap(), tt = new WeakMap(), ic = new WeakSet(), My = function(e, n) {
  const o = e.closest(".form-group");
  if (!o) {
    console.warn("Form element should be in .form-group!");
    return;
  }
  o.querySelectorAll(".form-tip").forEach((r) => r.remove());
  const s = document.createElement("div");
  s.innerText = n, s.classList.add("form-tip"), o.classList.add("has-error"), o.append(s);
}, sc = new WeakSet(), Ry = function(e) {
  const n = e.closest(".form-group");
  if (!n) {
    console.warn("Form element should be in .form-group!");
    return;
  }
  n.classList.remove("has-error"), n.querySelectorAll(".form-tip").forEach((o) => o.remove());
}, vi = new WeakSet(), Da = function() {
  y(this, Qt).querySelectorAll("[name]").forEach((n) => {
    W(this, sc, Ry).call(this, n);
  });
}, lc = new WeakSet(), Ny = function() {
  if (!this.rules || !Object.keys(this.rules).length)
    return !0;
  W(this, vi, Da).call(this);
  let e = !0;
  return y(this, Qt).querySelectorAll("[name]:not(.disabled)").forEach((n) => {
    const { name: o, value: s } = n, r = this.rules[o];
    if (!r)
      return;
    const l = (c) => "required" in c && c.required && !s || "regexp" in c && c.regexp && !c.regexp.test(s) || "validate" in c && c.validate && !c.validate(s) ? (W(this, ic, My).call(this, n, c.errMsg), e = !1) : !0;
    if (Array.isArray(r)) {
      for (const c of r)
        if (!l(c))
          break;
      return;
    }
    l(r);
  }), e;
}, cc = new WeakSet(), Dy = function() {
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
}, bi = new WeakSet(), Pa = function() {
  this.headers && Object.entries(this.headers).forEach(([e, n]) => {
    y(this, tt).setRequestHeader(e, n);
  }), y(this, tt).responseType = this.responseType, this.onLoadstart && y(this, tt).addEventListener("loadstart", this.onLoadstart), this.onLoad && y(this, tt).addEventListener("load", this.onLoad), this.onLoadend && y(this, tt).addEventListener("loadend", this.onLoadend), this.onProgress && y(this, tt).addEventListener("progress", this.onProgress), this.onError && y(this, tt).addEventListener("error", this.onError), this.onAbort && y(this, tt).addEventListener("abort", this.onAbort), this.onTimeout && y(this, tt).addEventListener("timeout", this.onTimeout);
}, ac = new WeakSet(), Py = function(e) {
  return Object.entries(e).map(([n, o]) => `${encodeURIComponent(n)}=${encodeURIComponent(o)}`).join("&");
}, _c = new WeakSet(), Oy = function() {
  const e = this.generateGetURL ? this.generateGetURL(this.url, this.formData) : `${this.url}?${W(this, ac, Py).call(this, y(this, We))}`;
  y(this, tt).open("GET", e), W(this, bi, Pa).call(this), y(this, tt).send();
}, uc = new WeakSet(), Hy = function() {
  y(this, tt).open("POST", this.url), W(this, bi, Pa).call(this);
  const e = this.formType === "AJAX" ? JSON.stringify(this.formData) : this.formData;
  y(this, tt).send(e);
}, M(Fx, "NAME", "zui.ajaxForm");
var A_, bt, Wy, Iy, pr, lh, Uy = {}, Fy = [], Bx = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function nn(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function By(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function L_(t, e, n) {
  var o, s, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? s = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? A_.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return is(t, l, o, s, null);
}
function is(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Wy };
  return s == null && bt.vnode != null && bt.vnode(r), r;
}
function jx() {
  return { current: null };
}
function M_(t) {
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
function jy(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return jy(t);
  }
}
function ch(t) {
  (!t.__d && (t.__d = !0) && pr.push(t) && !sl.__r++ || lh !== bt.debounceRendering) && ((lh = bt.debounceRendering) || setTimeout)(sl);
}
function sl() {
  for (var t; sl.__r = pr.length; )
    t = pr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), pr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = nn({}, r)).__v = r.__v + 1, qy(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? jr(r), r.__h), Vx(o, r), r.__e != l && jy(r)));
    });
}
function zy(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Fy, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? is(null, a, null, null, a) : Array.isArray(a) ? is(M_, { children: a }, null, null, null) : a.__b > 0 ? is(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      qy(t, a, u = u || Uy, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Vy(a, _, t) : _ = Yy(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = jr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && Xy(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Gy(p[i], p[++i], p[++i]);
}
function Vy(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? Vy(o, e, n) : Yy(n, o, o, s, o.__e, e));
  return e;
}
function Yy(t, e, n, o, s, r) {
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
function zx(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ll(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ll(t, r, e[r], n[r], o);
}
function ah(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Bx.test(e) ? n : n + "px";
}
function ll(t, e, n, o, s) {
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
function qy(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = bt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new mr(p, g), i.constructor = b, i.render = qx), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = nn({}, i.__s)), nn(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = nn(nn({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === M_ && h.key == null ? h.props.children : h, zy(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Yx(n.__e, e, n, o, s, r, l, _);
    (h = bt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), bt.__e(x, e, n);
  }
}
function Vx(t, e) {
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
function Yx(t, e, n, o, s, r, l, c) {
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
    if (r = r && A_.call(t.childNodes), h = (d = n.props || Uy).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (zx(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, zy(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && jr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && By(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && ll(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && ll(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Gy(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    bt.__e(o, n);
  }
}
function Xy(t, e, n) {
  var o, s;
  if (bt.unmount && bt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Gy(o, null, e)), (o = t.__c) != null) {
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
      o[s] && Xy(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || By(t.__e), t.__ = t.__e = t.__d = void 0;
}
function qx(t, e, n) {
  return this.constructor(t, n);
}
A_ = Fy.slice, bt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Wy = 0, Iy = function(t) {
  return t != null && t.constructor === void 0;
}, mr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = nn({}, this.state), typeof t == "function" && (t = t(nn({}, n), this.props)), t && nn(n, t), t != null && this.__v && (e && this._sb.push(e), ch(this));
}, mr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ch(this));
}, mr.prototype.render = M_, pr = [], sl.__r = 0;
var Gx = 0;
function G(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Gx, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return bt.vnode && bt.vnode(_), _;
}
let Xx = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Ky, wt, Jy, gr, fh, Zy = {}, Qy = [], Kx = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function on(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function tv(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function aa(t, e, n, o, s) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Jy };
  return s == null && wt.vnode != null && wt.vnode(r), r;
}
function R_(t) {
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
function ev(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ev(t);
  }
}
function hh(t) {
  (!t.__d && (t.__d = !0) && gr.push(t) && !cl.__r++ || fh !== wt.debounceRendering) && ((fh = wt.debounceRendering) || setTimeout)(cl);
}
function cl() {
  for (var t; cl.__r = gr.length; )
    t = gr.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), gr = [], t.some(function(e) {
      var n, o, s, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (s = on({}, r)).__v = r.__v + 1, iv(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? zr(r), r.__h), Zx(o, r), r.__e != l && ev(r)));
    });
}
function nv(t, e, n, o, s, r, l, c, _, h) {
  var i, d, u, a, f, v, p, m = o && o.__k || Qy, g = m.length;
  for (n.__k = [], i = 0; i < e.length; i++)
    if ((a = n.__k[i] = (a = e[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? aa(null, a, null, null, a) : Array.isArray(a) ? aa(R_, { children: a }, null, null, null) : a.__b > 0 ? aa(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      iv(t, a, u = u || Zy, s, r, l, c, _, h), f = a.__e, (d = a.ref) && u.ref != d && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(d, a.__c || f, a)), f != null ? (v == null && (v = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = ov(a, _, t) : _ = rv(t, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != t && (_ = zr(u));
    }
  for (n.__e = v, i = g; i--; )
    m[i] != null && lv(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      sv(p[i], p[++i], p[++i]);
}
function ov(t, e, n) {
  for (var o, s = t.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = t, e = typeof o.type == "function" ? ov(o, e, n) : rv(n, o, o, s, o.__e, e));
  return e;
}
function rv(t, e, n, o, s, r) {
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
function Jx(t, e, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || al(t, r, null, n[r], o);
  for (r in e)
    s && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || al(t, r, e[r], n[r], o);
}
function dh(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Kx.test(e) ? n : n + "px";
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
            n && e in n || dh(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || dh(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? mh : ph, r) : t.removeEventListener(e, r ? mh : ph, r);
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
function ph(t) {
  this.l[t.type + !1](wt.event ? wt.event(t) : t);
}
function mh(t) {
  this.l[t.type + !0](wt.event ? wt.event(t) : t);
}
function iv(t, e, n, o, s, r, l, c, _) {
  var h, i, d, u, a, f, v, p, m, g, w, $, S, A, T, b = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = wt.__b) && h(e);
  try {
    t:
      if (typeof b == "function") {
        if (p = e.props, m = (h = b.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (i = e.__c = n.__c).__ = i.__E : ("prototype" in b && b.prototype.render ? e.__c = i = new b(p, g) : (e.__c = i = new yr(p, g), i.constructor = b, i.render = tS), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), b.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = on({}, i.__s)), on(i.__s, b.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, d)
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
        i.state = i.__s, i.getChildContext != null && (o = on(on({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), T = h != null && h.type === R_ && h.key == null ? h.props.children : h, nv(t, Array.isArray(T) ? T : [T], e, n, o, s, r, l, c, _), i.base = e.__e, e.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Qx(n.__e, e, n, o, s, r, l, _);
    (h = wt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), wt.__e(x, e, n);
  }
}
function Zx(t, e) {
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
function Qx(t, e, n, o, s, r, l, c) {
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
    if (r = r && Ky.call(t.childNodes), h = (d = n.props || Zy).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || h) && (i && (h && i.__html == h.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Jx(t, u, d, s, c), i)
      e.__k = [];
    else if (f = e.props.children, nv(t, Array.isArray(f) ? f : [f], e, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && zr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && tv(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== t.value || a === "progress" && !f || a === "option" && f !== d.value) && al(t, "value", f, d.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== t.checked && al(t, "checked", f, d.checked, !1));
  }
  return t;
}
function sv(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    wt.__e(o, n);
  }
}
function lv(t, e, n) {
  var o, s;
  if (wt.unmount && wt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || sv(o, null, e)), (o = t.__c) != null) {
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
      o[s] && lv(o[s], e, n || typeof t.type != "function");
  n || t.__e == null || tv(t.__e), t.__ = t.__e = t.__d = void 0;
}
function tS(t, e, n) {
  return this.constructor(t, n);
}
Ky = Qy.slice, wt = { __e: function(t, e, n, o) {
  for (var s, r, l; e = e.__; )
    if ((s = e.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(t)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Jy = 0, yr.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = on({}, this.state), typeof t == "function" && (t = t(on({}, n), this.props)), t && on(n, t), t != null && this.__v && (e && this._sb.push(e), hh(this));
}, yr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), hh(this));
}, yr.prototype.render = R_, gr = [], cl.__r = 0;
var eS = 0;
function gh(t, e, n, o, s) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --eS, __source: s, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return wt.vnode && wt.vnode(_), _;
}
var Cn, En;
class yh extends yr {
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
    return o === "horz" ? (f.height = s, f.width = n, v.width = this.barSize, v.left = Math.round(Math.min(d, u) * (n - v.width) / d)) : (f.width = s, f.height = n, v.height = this.barSize, v.top = Math.round(Math.min(d, u) * (n - v.height) / d)), /* @__PURE__ */ gh(
      "div",
      {
        className: F("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": a
        }),
        style: f,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ gh(
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
function vh(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function cv({ col: t, className: e, height: n, row: o, onRenderCell: s, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
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
  }], v = ["dtable-cell-content", e], p = [c ?? ((b = o.data) == null ? void 0 : b[t.name]) ?? ""], m = s ? s(p, { row: o, col: t }, L_) : p, g = [], w = [], $ = {}, S = {};
  let A = "div";
  m == null || m.forEach((x) => {
    if (typeof x == "object" && x && !Iy(x) && ("html" in x || "className" in x || "style" in x || "attrs" in x || "children" in x || "tagName" in x)) {
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
function _a({ row: t, className: e, top: n = 0, left: o = 0, width: s, height: r, cols: l, CellComponent: c = cv, onRenderCell: _ }) {
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
function av({
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
  CellComponent: u = cv,
  onRenderCell: a,
  style: f,
  ...v
}) {
  let p = null;
  s != null && s.length && (p = /* @__PURE__ */ G(
    _a,
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
    _a,
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
    _a,
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
function nS({ height: t, onRenderRow: e, ...n }) {
  const o = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const s = e({ props: o }, L_);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ G("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ G(av, { ...o }) });
}
function oS({
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
    }, d = c == null ? void 0 : c({ props: i, row: h }, L_);
    return d && Object.assign(i, d), /* @__PURE__ */ G(av, { ...i });
  }) });
}
const _l = /* @__PURE__ */ new Map(), ul = [];
function _v(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && _l.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  _l.set(n, t), e != null && e.buildIn && !ul.includes(n) && ul.push(n);
}
function xo(t, e) {
  _v(t, e);
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
function uv(t) {
  return _l.delete(t);
}
function rS(t) {
  if (typeof t == "string") {
    const e = _l.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function fv(t, e, n) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = rS(o);
    s && (n.has(s.name) || ((r = s.plugins) != null && r.length && fv(t, s.plugins, n), t.push(s), n.add(s.name)));
  }), t;
}
function iS(t = [], e = !0) {
  return e && ul.length && t.unshift(...ul), t != null && t.length ? fv([], t, /* @__PURE__ */ new Set()) : [];
}
function bh() {
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
var Fi, Tn, uo, Ie, ae, Ue, Et, te, _e, fo, wi, $i, Se, ho, po, fc, hv, hc, dv, dc, pv, pc, mv, ki, Oa, mc, gc, xi, Si, yc, vc, bc, gv, wc, yv, $c, vv;
let sS = (Fi = class extends mr {
  constructor(n) {
    super(n);
    E(this, fc);
    E(this, hc);
    E(this, dc);
    E(this, pc);
    E(this, ki);
    E(this, bc);
    E(this, wc);
    E(this, $c);
    M(this, "ref", jx());
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
    E(this, mc, (n, o) => {
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
    E(this, gc, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), y(this, Et).forEach((s) => {
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
    E(this, yc, (n) => {
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
    E(this, vc, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, uo, n.id ?? `dtable-${Xx(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, Ue, Object.freeze(iS(n.plugins))), y(this, Ue).forEach((o) => {
      var c;
      const { methods: s, data: r, state: l } = o;
      s && Object.entries(s).forEach(([_, h]) => {
        typeof h == "function" && Object.assign(this, { [_]: h.bind(this) });
      }), r && Object.assign(y(this, fo), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = y(this, te)) == null ? void 0 : n.options) || y(this, ae) || bh();
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
    if (y(this, Ie) ? this.forceUpdate() : W(this, ki, Oa).call(this), y(this, Et).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", y(this, yc)), this.on("keydown", y(this, vc)), this.options.responsive) {
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
    y(this, Ie) ? W(this, ki, Oa).call(this) : y(this, Et).forEach((n) => {
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
    const n = W(this, $c, vv).call(this), { className: o, rowHover: s, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
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
          n && W(this, fc, hv).call(this, n),
          n && W(this, hc, dv).call(this, n),
          n && W(this, dc, pv).call(this, n),
          n && W(this, pc, mv).call(this, n)
        ]
      }
    );
  }
}, Tn = new WeakMap(), uo = new WeakMap(), Ie = new WeakMap(), ae = new WeakMap(), Ue = new WeakMap(), Et = new WeakMap(), te = new WeakMap(), _e = new WeakMap(), fo = new WeakMap(), wi = new WeakMap(), $i = new WeakMap(), Se = new WeakMap(), ho = new WeakMap(), po = new WeakMap(), fc = new WeakSet(), hv = function(n) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ G(
      nS,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: y(this, xi),
        onRenderRow: y(this, gc),
        ...s
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ G(
    ga,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, hc = new WeakSet(), dv = function(n) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ G(
    oS,
    {
      top: o,
      height: s,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: h,
      onRenderCell: y(this, xi),
      onRenderRow: y(this, mc),
      ...c
    }
  );
}, dc = new WeakSet(), pv = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const s = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ G(
    ga,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: s,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, pc = new WeakSet(), mv = function(n) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: i, scrollWidth: d } = r, { scrollbarSize: u = 12, horzScrollbarPos: a } = this.options;
  return i > d && o.push(
    /* @__PURE__ */ G(
      yh,
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
      yh,
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
}, ki = new WeakSet(), Oa = function() {
  var n;
  H(this, Ie, !1), (n = this.options.afterRender) == null || n.call(this), y(this, Et).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, mc = new WeakMap(), gc = new WeakMap(), xi = new WeakMap(), Si = new WeakMap(), yc = new WeakMap(), vc = new WeakMap(), bc = new WeakSet(), gv = function() {
  if (y(this, ae))
    return !1;
  const o = { ...bh(), ...y(this, Ue).reduce((s, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(s, l), s;
  }, {}), ...this.props };
  return H(this, ae, o), H(this, Et, y(this, Ue).reduce((s, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (s.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), s;
  }, [])), H(this, $i, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, wc = new WeakSet(), yv = function() {
  var J, kt;
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
      ...Cv
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
        ...Cv
      },
      flex: ct ? 0 : X === !0 ? 1 : typeof X == "number" ? X : 0,
      left: 0,
      width: vh(at, Pt, Ot),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((O_) => {
      var H_, W_;
      const Mi = (H_ = O_.colTypes) == null ? void 0 : H_[$t];
      if (Mi) {
        const I_ = typeof Mi == "function" ? Mi(et) : Mi;
        I_ && Object.assign(et.setting, I_);
      }
      (W_ = O_.onAddCol) == null || W_.call(this, et);
    }), et.width = vh(et.setting.width ?? et.width, et.setting.minWidth ?? Pt, et.setting.maxWidth ?? Ot), et.realWidth = et.realWidth || et.width, ct === "left" ? (et.left = f, f += et.width, _.push(et)) : ct === "right" ? (et.left = v, v += et.width, h.push(et)) : (et.left = p, p += et.width, i.push(et)), et.flex && a.push(et), u.push(et), d[et.name] = et;
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
    const Z = (J = B.onAddRows) == null ? void 0 : J.call(this, x);
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
}, $c = new WeakSet(), vv = function() {
  (W(this, bc, gv).call(this) || !y(this, te)) && W(this, wc, yv).call(this);
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
}, M(Fi, "addPlugin", _v), M(Fi, "removePlugin", uv), Fi);
function wh(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((s) => s.classList.add(o));
}
const lS = {
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
      wh(this, o);
    },
    mouseleave() {
      wh(this, !1);
    }
  }
}, cS = xo(lS, { buildIn: !0 });
function aS(t, e) {
  var l, c;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (_, h) => {
    s && !s.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !bv.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
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
function _S(t) {
  return this.state.checkedRows[t] ?? !1;
}
function bv() {
  var n, o;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, r) => s + (e.call(this, r.id) ? 1 : 0), 0)) : t === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function uS() {
  return Object.keys(this.state.checkedRows);
}
const fS = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: aS,
    isRowChecked: _S,
    isAllRowChecked: bv,
    getChecks: uS
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
}, hS = xo(fS);
var wv = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(wv || {});
function Ha(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, o = e.children && n && n[t];
  let s = !1, { parent: r } = e;
  for (; r; ) {
    const l = Ha.call(this, r);
    if (l.state !== "expanded") {
      s = !0;
      break;
    }
    r = l.parent;
  }
  return e.state = s ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Ha.call(this, e.parent).level + 1 : 0, e;
}
function dS(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !$v.call(this)), e) {
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
function $v() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function kv(t, e = 0, n, o = 0) {
  var s;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const l = t.get(r);
    l && (l.level === o && (l.order = e++), (s = l.children) != null && s.length && (e = kv(t, e, l.children, o + 1)));
  }
  return e;
}
function xv(t, e, n, o) {
  const s = t.getNestedRowInfo(e);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = n, xv(t, r, n, o);
  }), s;
}
function Sv(t, e, n, o, s) {
  var c;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : s[_]);
    return n === h;
  })) && (o[e] = n), r.parent && Sv(t, r.parent, n, o, s);
}
const pS = {
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
        const l = xv(this, s, r, o);
        l != null && l.parent && Sv(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: dS,
    isAllCollapsed: $v,
    getNestedRowInfo: Ha
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
    ), kv(this.data.nestedMap), t.sort((e, n) => {
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
}, mS = xo(pS);
const gS = {
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
        return typeof o == "function" ? t[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? t[0] = Ta(r, o) : s === "html" ? t[0] = { html: It(o, r) } : t[0] = It(o, r), t;
      }
    }
  }
}, yS = xo(gS, { buildIn: !0 }), vS = {
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
}, bS = xo(vS, { buildIn: !0 }), wS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: wv,
  checkable: hS,
  colHover: cS,
  nested: mS,
  rich: yS,
  sortType: bS
}, Symbol.toStringTag, { value: "Module" }));
class Co extends At {
}
M(Co, "NAME", "dtable"), M(Co, "Component", sS), M(Co, "definePlugin", xo), M(Co, "removePlugin", uv), M(Co, "plugins", wS);
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
  Z_ as ActionMenu,
  tu as ActionMenuNested,
  Fx as AjaxForm,
  cf as Avatar,
  af as BtnGroup,
  su as Button,
  Wt as ContextMenu,
  Co as DTable,
  zt as Datepicker,
  Nt as Dropdown,
  Ia as EventBus,
  lu as Menu,
  Ni as Messager,
  Ht as Modal,
  ir as ModalTrigger,
  Cf as Nav,
  No as NavTabs,
  Af as Pager,
  Of as Picker,
  Uu as ProgressCircle,
  Yu as Switch,
  be as TIME_DAY,
  Vt as Timepicker,
  Gf as Toolbar,
  Yt as Tooltip,
  sh as VirtualGrid,
  Fv as addI18nMap,
  PS as browser,
  Tf as calculateTimestamp,
  xS as convertBytes,
  Ft as createDate,
  kS as formatBytes,
  Ta as formatDate,
  jS as formatDateSpan,
  It as formatString,
  Iv as getLangCode,
  zS as getTimeBeforeDesc,
  Ci as i18n,
  BS as isDBY,
  Jc as isObject,
  Ti as isSameDay,
  Q$ as isSameMonth,
  WS as isSameWeek,
  Ef as isSameYear,
  IS as isToday,
  FS as isTomorrow,
  US as isYesterday,
  ma as mergeDeep,
  pa as nativeEvents,
  Uv as setLangCode,
  Dw as store
};
