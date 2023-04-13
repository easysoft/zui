var Fv = Object.defineProperty;
var Bv = (e, t, n) => t in e ? Fv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var D = (e, t, n) => (Bv(e, typeof t != "symbol" ? t + "" : t, n), n), Gc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var b = (e, t, n) => (Gc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, H = (e, t, n, o) => (Gc(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n), U_ = (e, t, n, o) => ({
  set _(s) {
    H(e, t, s, n);
  },
  get _() {
    return b(e, t, o);
  }
}), I = (e, t, n) => (Gc(e, t, "access private method"), n);
var bc, ne, Eh, Th, Ao, I_, ss = {}, Mh = [], jv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function It(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Lh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ah(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? bc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Bi(e, l, o, s, null);
}
function Bi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Eh };
  return s == null && ne.vnode != null && ne.vnode(r), r;
}
function zv() {
  return { current: null };
}
function wc(e) {
  return e.children;
}
function ji(e, t) {
  this.props = e, this.context = t;
}
function wr(e, t) {
  if (t == null)
    return e.__ ? wr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? wr(e) : null;
}
function Dh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Dh(e);
  }
}
function F_(e) {
  (!e.__d && (e.__d = !0) && Ao.push(e) && !ls.__r++ || I_ !== ne.debounceRendering) && ((I_ = ne.debounceRendering) || setTimeout)(ls);
}
function ls() {
  for (var e; ls.__r = Ao.length; )
    e = Ao.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ao = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = It({}, r)).__v = r.__v + 1, Ia(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? wr(r), r.__h), Oh(o, r), r.__e != l && Dh(r)));
    });
}
function Nh(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || Mh, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Bi(null, a, null, null, a) : Array.isArray(a) ? Bi(wc, { children: a }, null, null, null) : a.__b > 0 ? Bi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      Ia(e, a, u = u || ss, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Rh(a, _, e) : _ = Ph(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = wr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Wh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Hh(p[i], p[++i], p[++i]);
}
function Rh(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Rh(o, t, n) : Ph(n, o, o, s, o.__e, t));
  return t;
}
function Ph(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Vv(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || cs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || cs(e, r, t[r], n[r], o);
}
function B_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || jv.test(t) ? n : n + "px";
}
function cs(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || B_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || B_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? z_ : j_, r) : e.removeEventListener(t, r ? z_ : j_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function j_(e) {
  this.l[e.type + !1](ne.event ? ne.event(e) : e);
}
function z_(e) {
  this.l[e.type + !0](ne.event ? ne.event(e) : e);
}
function Ia(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = ne.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new ji(p, g), i.constructor = v, i.render = qv), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = It({}, i.__s)), It(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = ne.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = It(It({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === wc && d.key == null ? d.props.children : d, Nh(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Yv(n.__e, t, n, o, s, r, l, _);
    (d = ne.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ne.__e(x, t, n);
  }
}
function Oh(e, t) {
  ne.__c && ne.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ne.__e(o, n.__v);
    }
  });
}
function Yv(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && bc.call(e.childNodes), d = (h = n.props || ss).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Vv(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, Nh(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && wr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Lh(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && cs(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && cs(e, "checked", f, h.checked, !1));
  }
  return e;
}
function Hh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ne.__e(o, n);
  }
}
function Wh(e, t, n) {
  var o, s;
  if (ne.unmount && ne.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Hh(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ne.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Wh(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Lh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function qv(e, t, n) {
  return this.constructor(e, n);
}
function Gv(e, t, n) {
  var o, s, r;
  ne.__ && ne.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Ia(t, e = (!o && n || t).__k = Ah(wc, null, [e]), s || ss, ss, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? bc.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), Oh(r, e);
}
bc = Mh.slice, ne = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Eh = 0, Th = function(e) {
  return e != null && e.constructor === void 0;
}, ji.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = It({}, this.state), typeof e == "function" && (e = e(It({}, n), this.props)), e && It(n, e), e != null && this.__v && (t && this._sb.push(t), F_(this));
}, ji.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), F_(this));
}, ji.prototype.render = wc, Ao = [], ls.__r = 0;
var Xv = 0;
function Uh(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Xv, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ne.vnode && ne.vnode(_), _;
}
var vt;
class Kv {
  constructor(t = "") {
    L(this, vt, void 0);
    typeof t == "object" ? H(this, vt, t) : H(this, vt, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    b(this, vt).addEventListener(t, n, o);
  }
  once(t, n, o) {
    b(this, vt).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    b(this, vt).removeEventListener(t, n, o);
  }
  emit(t) {
    return b(this, vt).dispatchEvent(t), t;
  }
}
vt = new WeakMap();
const ga = /* @__PURE__ */ new Set([
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
class Fa extends Kv {
  on(t, n, o) {
    super.on(t, n, o);
  }
  off(t, n, o) {
    super.off(t, n, o);
  }
  once(t, n, o) {
    super.once(t, n, o);
  }
  emit(t, n) {
    return typeof t == "string" && (ga.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Fa.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (ga.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var bt, Yr, vn, Co;
class V_ extends Fa {
  constructor(n = "", o) {
    super(n);
    L(this, vn);
    L(this, bt, /* @__PURE__ */ new Map());
    L(this, Yr, void 0);
    H(this, Yr, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, s) {
    n = I(this, vn, Co).call(this, n), super.on(n, o, s), b(this, bt).set(o, [n, s]);
  }
  off(n, o, s) {
    n = I(this, vn, Co).call(this, n), super.off(n, o, s), b(this, bt).delete(o);
  }
  once(n, o, s) {
    n = I(this, vn, Co).call(this, n);
    const r = (l) => {
      o(l), b(this, bt).delete(r);
    };
    super.once(n, r, s), b(this, bt).set(r, [n, s]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = I(this, vn, Co).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(b(this, bt).entries()).forEach(([n, [o, s]]) => {
      super.off(o, n, s);
    }), b(this, bt).clear();
  }
}
bt = new WeakMap(), Yr = new WeakMap(), vn = new WeakSet(), Co = function(n) {
  const o = b(this, Yr);
  return ga.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Jv(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let o = e;
  const s = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), l;
    const c = r.indexOf("[");
    if (c > 0 && c < r.length - 1 && r.endsWith("]") && (l = r.substring(c + 1, r.length - 1), r = r.substring(0, c)), o = o[r], s.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], s.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return s;
}
function Zv(e, t, n) {
  const o = Jv(e, t), s = o[o.length - 1];
  return s === void 0 ? n : s;
}
function Xc(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function ya(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (Xc(e) && Xc(n))
    for (const o in n)
      Xc(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), ya(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return ya(e, ...t);
}
function We(e, ...t) {
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const n = t[0];
    return Object.keys(n).forEach((o) => {
      const s = n[o] ?? 0;
      e = e.replace(new RegExp(`\\{${o}\\}`, "g"), `${s}`);
    }), e;
  }
  for (let n = 0; n < t.length; n++) {
    const o = t[n] ?? "";
    e = e.replace(new RegExp(`\\{${n}\\}`, "g"), `${o}`);
  }
  return e;
}
var Ba = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Ba || {});
function Zx(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Ba[n]).toFixed(t) + n);
}
const Qx = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * Ba[o];
};
var Ch;
let ja = ((Ch = document.documentElement.getAttribute("lang")) == null ? void 0 : Ch.toLowerCase()) ?? "zh_cn", Nt;
function Qv() {
  return ja;
}
function eb(e) {
  ja = e.toLowerCase();
}
function tb(e, t) {
  Nt || (Nt = {}), typeof e == "string" && (e = { [e]: t ?? {} }), ya(Nt, e);
}
function ki(e, t, n, o, s, r) {
  Array.isArray(e) ? Nt && e.unshift(Nt) : e = Nt ? [Nt, e] : [e], typeof n == "string" && (r = s, s = o, o = n, n = void 0);
  const l = s || ja;
  let c;
  for (const _ of e) {
    if (!_)
      continue;
    const d = _[l];
    if (!d)
      continue;
    const i = r && _ === Nt ? `${r}.${t}` : t;
    if (c = Zv(d, i), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? We(c, ...Array.isArray(n) ? n : [n]) : c;
}
ki.addLang = tb;
ki.getCode = Qv;
ki.setCode = eb;
function nb(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
const Kc = /* @__PURE__ */ new Map();
var wt, zn, Je;
class ot {
  constructor(t, n) {
    L(this, wt, void 0);
    L(this, zn, void 0);
    L(this, Je, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && H(this, Je, new V_(t, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, wt, { ...this.constructor.DEFAULT }), this.setOptions({ ...t instanceof HTMLElement ? nb(t.dataset) : null, ...n }), this.constructor.all.set(t, this), H(this, zn, t), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return b(this, wt);
  }
  get element() {
    return b(this, zn);
  }
  get events() {
    return b(this, Je);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(t) {
    return t && Object.assign(b(this, wt), t), b(this, wt);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(b(this, zn)), b(this, Je) && (this.emit("destroyed", this), b(this, Je).offAll());
  }
  on(t, n, o) {
    var s;
    (s = b(this, Je)) == null || s.on(t, n, o);
  }
  once(t, n, o) {
    var s;
    (s = b(this, Je)) == null || s.once(t, n, o);
  }
  off(t, n, o) {
    var s;
    (s = b(this, Je)) == null || s.off(t, n, o);
  }
  emit(t, n) {
    var l;
    let o = V_.createEvent(t, n);
    const s = `on${t[0].toUpperCase()}${t.substring(1)}`, r = b(this, wt)[s];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = b(this, Je)) == null ? void 0 : l.emit(t, n), o;
  }
  i18n(t, n, o) {
    return ki(b(this, wt).i18n, t, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${t}}`;
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
    const t = this.NAME;
    if (Kc.has(t))
      return Kc.get(t);
    const n = /* @__PURE__ */ new Map();
    return Kc.set(t, n), n;
  }
  static getAll() {
    return this.all;
  }
  static get(t) {
    return this.all.get(t);
  }
  static ensure(t, n) {
    return this.get(t) || new this(t, n);
  }
}
wt = new WeakMap(), zn = new WeakMap(), Je = new WeakMap(), D(ot, "EVENTS", !1), D(ot, "DEFAULT", {});
class Te extends ot {
  constructor() {
    super(...arguments);
    D(this, "ref", zv());
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
    Gv(/* @__PURE__ */ Uh(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
D(Te, "Component");
var za, _e, Ih, Fh, Do, Y_, Bh = {}, jh = [], ob = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ft(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function zh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function wo(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? za.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return zi(e, l, o, s, null);
}
function zi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Ih };
  return s == null && _e.vnode != null && _e.vnode(r), r;
}
function rb() {
  return { current: null };
}
function Va(e) {
  return e.children;
}
function No(e, t) {
  this.props = e, this.context = t;
}
function $r(e, t) {
  if (t == null)
    return e.__ ? $r(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? $r(e) : null;
}
function Vh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Vh(e);
  }
}
function q_(e) {
  (!e.__d && (e.__d = !0) && Do.push(e) && !as.__r++ || Y_ !== _e.debounceRendering) && ((Y_ = _e.debounceRendering) || setTimeout)(as);
}
function as() {
  for (var e; as.__r = Do.length; )
    e = Do.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Do = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Ft({}, r)).__v = r.__v + 1, Xh(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? $r(r), r.__h), sb(o, r), r.__e != l && Vh(r)));
    });
}
function Yh(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || jh, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? zi(null, a, null, null, a) : Array.isArray(a) ? zi(Va, { children: a }, null, null, null) : a.__b > 0 ? zi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      Xh(e, a, u = u || Bh, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = qh(a, _, e) : _ = Gh(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = $r(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Jh(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Kh(p[i], p[++i], p[++i]);
}
function qh(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? qh(o, t, n) : Gh(n, o, o, s, o.__e, t));
  return t;
}
function Gh(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function ib(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || _s(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || _s(e, r, t[r], n[r], o);
}
function G_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || ob.test(t) ? n : n + "px";
}
function _s(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || G_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || G_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? K_ : X_, r) : e.removeEventListener(t, r ? K_ : X_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function X_(e) {
  this.l[e.type + !1](_e.event ? _e.event(e) : e);
}
function K_(e) {
  this.l[e.type + !0](_e.event ? _e.event(e) : e);
}
function Xh(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = _e.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new No(p, g), i.constructor = v, i.render = cb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Ft({}, i.__s)), Ft(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = _e.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = Ft(Ft({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === Va && d.key == null ? d.props.children : d, Yh(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = lb(n.__e, t, n, o, s, r, l, _);
    (d = _e.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), _e.__e(x, t, n);
  }
}
function sb(e, t) {
  _e.__c && _e.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      _e.__e(o, n.__v);
    }
  });
}
function lb(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && za.call(e.childNodes), d = (h = n.props || Bh).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ib(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, Yh(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && $r(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && zh(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && _s(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && _s(e, "checked", f, h.checked, !1));
  }
  return e;
}
function Kh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    _e.__e(o, n);
  }
}
function Jh(e, t, n) {
  var o, s;
  if (_e.unmount && _e.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Kh(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        _e.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Jh(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || zh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function cb(e, t, n) {
  return this.constructor(e, n);
}
za = jh.slice, _e = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ih = 0, Fh = function(e) {
  return e != null && e.constructor === void 0;
}, No.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ft({}, this.state), typeof e == "function" && (e = e(Ft({}, n), this.props)), e && Ft(n, e), e != null && this.__v && (t && this._sb.push(t), q_(this));
}, No.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), q_(this));
}, No.prototype.render = Va, Do = [], as.__r = 0;
var ab = 0;
function Ye(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ab, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return _e.vnode && _e.vnode(_), _;
}
function $c(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), o = (s, r) => {
    if (Array.isArray(s) && (r = s[1], s = s[0]), !s.length)
      return;
    const l = n.get(s);
    typeof l == "number" ? t[l][1] = !!r : (n.set(s, t.length), t.push([s, !!r]));
  };
  return e.forEach((s) => {
    typeof s == "function" && (s = s()), Array.isArray(s) ? $c(...s).forEach(o) : s && typeof s == "object" ? Object.entries(s).forEach(o) : typeof s == "string" && s.split(" ").forEach((r) => o(r, !0));
  }), t.sort((s, r) => (n.get(s[0]) || 0) - (n.get(r[0]) || 0));
}
const B = (...e) => $c(...e).reduce((t, [n, o]) => (o && t.push(n), t), []).join(" ");
function _b({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: s
}) {
  return wo(e, {
    className: B(t),
    style: o,
    ...s
  }, n);
}
function Zh({
  component: e = "a",
  className: t,
  children: n,
  attrs: o,
  url: s,
  disabled: r,
  active: l,
  icon: c,
  text: _,
  target: d,
  trailingIcon: i,
  hint: h,
  style: u,
  onClick: a
}) {
  const f = [
    typeof c == "string" ? /* @__PURE__ */ Ye("i", { class: `icon ${c}` }) : c,
    /* @__PURE__ */ Ye("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof i == "string" ? /* @__PURE__ */ Ye("i", { class: `icon ${i}` }) : i
  ];
  return wo(e, {
    className: B(t, { disabled: r, active: l }),
    title: h,
    [e === "a" ? "href" : "data-url"]: s,
    [e === "a" ? "target" : "data-target"]: d,
    style: u,
    onClick: a,
    ...o
  }, ...f);
}
function ub({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: s,
  style: r,
  onClick: l
}) {
  return wo(e, {
    className: B(t),
    style: r,
    onClick: l,
    ...o
  }, n, typeof s == "function" ? s() : s);
}
function fb({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: s,
  attrs: r,
  onClick: l,
  children: c
}) {
  return wo(e, {
    className: B(t),
    style: { width: o, height: o, flex: s, ...n },
    onClick: l,
    ...r
  }, c);
}
function hb(e) {
  const {
    tag: t,
    className: n,
    style: o,
    renders: s,
    generateArgs: r = [],
    generatorThis: l,
    generators: c,
    onGenerate: _,
    onRenderItem: d,
    ...i
  } = e, h = [n], u = { ...o }, a = [], f = [];
  return s.forEach((y) => {
    const p = [];
    typeof y == "string" && c && c[y] && (y = c[y]), typeof y == "function" ? _ ? p.push(..._.call(l, y, a, ...r)) : p.push(...y.call(l, a, ...r) ?? []) : p.push(y), p.forEach((m) => {
      m != null && (typeof m == "object" && !Th(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ Uh("div", { className: B(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? f.push(m.__html) : (m.style && Object.assign(u, m.style), m.className && h.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(i, m.attrs)) : a.push(m));
    });
  }), f.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: f } }), [{
    className: B(h),
    style: u,
    ...i
  }, a];
}
function va({
  tag: e = "div",
  ...t
}) {
  const [n, o] = hb(t);
  return Ah(e, n, ...o);
}
function db({ type: e, ...t }) {
  return /* @__PURE__ */ Ye(va, { ...t });
}
function Qh({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: s
}) {
  return wo(e, {
    className: B(t),
    style: o,
    ...s
  }, n);
}
var xt;
let kc = (xt = class extends No {
  constructor() {
    super(...arguments);
    D(this, "ref", rb());
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
    return r && Object.assign(c, r[o.type || "item"]), (l || o.onClick) && (c.onClick = this.handleItemClick.bind(this, c, s, o.onClick)), c.className = B(c.className), c;
  }
  renderItem(n, o, s) {
    const r = this.getItemRenderProps(n, o, s), { itemRender: l } = n;
    if (l) {
      if (typeof l == "object") {
        const p = l[o.type || "item"];
        if (p)
          return /* @__PURE__ */ Ye(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, wo);
        if (Fh(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: c = "item", component: _, key: d = s, rootAttrs: i, rootClass: h, rootStyle: u, rootChildren: a, ...f } = r;
    if (c === "html")
      return /* @__PURE__ */ Ye(
        "li",
        {
          className: B("action-menu-item", `${this.name}-html`, h, f.className),
          ...i,
          style: u || f.style,
          dangerouslySetInnerHTML: { __html: f.html }
        },
        d
      );
    const y = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || xt.ItemComponents[c] : _;
    return Object.assign(f, {
      type: c,
      component: typeof _ == "string" ? _ : void 0
    }), this.renderTypedItem(y, {
      className: B(h),
      children: a,
      style: u,
      key: d,
      ...i
    }, {
      ...f,
      type: c,
      component: typeof _ == "string" ? _ : void 0
    });
  }
  renderTypedItem(n, o, s) {
    const { children: r, className: l, key: c, ..._ } = o, { activeClass: d = "", activeKey: i, activeIcon: h } = this.props, u = h && i === c ? /* @__PURE__ */ Ye("i", { className: `checked icon icon-${h}` }) : null, a = i === c;
    return /* @__PURE__ */ Ye(
      "li",
      {
        className: B("action-menu-item", `${this.name}-${s.type}`, l, { [d]: a }),
        ..._,
        children: [
          /* @__PURE__ */ Ye(n, { ...s }),
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
      itemRender: d,
      onClickItem: i,
      beforeRender: h,
      afterRender: u,
      beforeDestroy: a,
      activeClass: f,
      activeKey: y,
      ...p
    } = n, m = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ Ye(m, { class: B(this.name, l), style: s, ...p, ref: this.ref, children: [
      c && c.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, D(xt, "ItemComponents", {
  divider: _b,
  item: Zh,
  heading: ub,
  space: fb,
  custom: db,
  basic: Qh
}), D(xt, "ROOT_TAG", "menu"), D(xt, "NAME", "action-menu"), xt);
class J_ extends Te {
}
D(J_, "NAME", "actionmenu"), D(J_, "Component", kc);
function Z_({
  ...e
}) {
  return /* @__PURE__ */ Ye(Zh, { ...e });
}
var ha, qr, rt, Vn;
let ed = (ha = class extends kc {
  constructor(n) {
    super(n);
    L(this, qr, /* @__PURE__ */ new Set());
    L(this, rt, void 0);
    L(this, Vn, (n, o, s) => {
      this.toggleNestedMenu(n, o), s.preventDefault();
    });
    H(this, rt, n.nestedShow === void 0), b(this, rt) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
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
    const s = this.constructor, { name: r, controlledMenu: l, nestedShow: c, beforeDestroy: _, beforeRender: d, itemRender: i, activeClass: h, activeKey: u, onClickItem: a, afterRender: f, commonItemProps: y, activeIcon: p } = this.props;
    return /* @__PURE__ */ Ye(
      s,
      {
        items: o,
        name: r,
        nestedShow: b(this, rt) ? this.state.nestedShow : c,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: l || this,
        commonItemProps: y,
        onClickItem: a,
        afterRender: f,
        beforeRender: d,
        beforeDestroy: _,
        itemRender: i,
        activeClass: h,
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
    ], r.component = Z_), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: b(this, Vn).bind(this, l, !0),
        onMouseLeave: b(this, Vn).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: d } = r;
      r.onClick = (i) => {
        b(this, Vn).call(this, l, void 0, i), d == null || d(i);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = b(this, rt) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(n, o);
    if (!b(this, rt))
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
    b(this, rt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    b(this, rt) && this.setState({ nestedShow: !1 });
  }
}, qr = new WeakMap(), rt = new WeakMap(), Vn = new WeakMap(), D(ha, "ItemComponents", {
  item: Z_
}), ha);
class Q_ extends Te {
}
D(Q_, "NAME", "actionmenunested"), D(Q_, "Component", ed);
var Ya, ue, td, Ro, eu, nd = {}, od = [], pb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Bt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function rd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function mb(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ya.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Vi(e, l, o, s, null);
}
function Vi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++td };
  return s == null && ue.vnode != null && ue.vnode(r), r;
}
function qa(e) {
  return e.children;
}
function Po(e, t) {
  this.props = e, this.context = t;
}
function kr(e, t) {
  if (t == null)
    return e.__ ? kr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? kr(e) : null;
}
function id(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return id(e);
  }
}
function tu(e) {
  (!e.__d && (e.__d = !0) && Ro.push(e) && !us.__r++ || eu !== ue.debounceRendering) && ((eu = ue.debounceRendering) || setTimeout)(us);
}
function us() {
  for (var e; us.__r = Ro.length; )
    e = Ro.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ro = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Bt({}, r)).__v = r.__v + 1, ad(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? kr(r), r.__h), yb(o, r), r.__e != l && id(r)));
    });
}
function sd(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || od, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Vi(null, a, null, null, a) : Array.isArray(a) ? Vi(qa, { children: a }, null, null, null) : a.__b > 0 ? Vi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      ad(e, a, u = u || nd, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = ld(a, _, e) : _ = cd(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = kr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && ud(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      _d(p[i], p[++i], p[++i]);
}
function ld(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? ld(o, t, n) : cd(n, o, o, s, o.__e, t));
  return t;
}
function cd(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function gb(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || fs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || fs(e, r, t[r], n[r], o);
}
function nu(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || pb.test(t) ? n : n + "px";
}
function fs(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || nu(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || nu(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ru : ou, r) : e.removeEventListener(t, r ? ru : ou, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function ou(e) {
  this.l[e.type + !1](ue.event ? ue.event(e) : e);
}
function ru(e) {
  this.l[e.type + !0](ue.event ? ue.event(e) : e);
}
function ad(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = ue.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Po(p, g), i.constructor = v, i.render = bb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Bt({}, i.__s)), Bt(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = ue.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = Bt(Bt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === qa && d.key == null ? d.props.children : d, sd(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = vb(n.__e, t, n, o, s, r, l, _);
    (d = ue.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ue.__e(x, t, n);
  }
}
function yb(e, t) {
  ue.__c && ue.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ue.__e(o, n.__v);
    }
  });
}
function vb(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && Ya.call(e.childNodes), d = (h = n.props || nd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (gb(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, sd(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && kr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && rd(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && fs(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && fs(e, "checked", f, h.checked, !1));
  }
  return e;
}
function _d(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ue.__e(o, n);
  }
}
function ud(e, t, n) {
  var o, s;
  if (ue.unmount && ue.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || _d(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ue.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && ud(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || rd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function bb(e, t, n) {
  return this.constructor(e, n);
}
Ya = od.slice, ue = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, td = 0, Po.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Bt({}, this.state), typeof e == "function" && (e = e(Bt({}, n), this.props)), e && Bt(n, e), e != null && this.__v && (t && this._sb.push(t), tu(this));
}, Po.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), tu(this));
}, Po.prototype.render = qa, Ro = [], us.__r = 0;
var wb = 0;
function ko(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --wb, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ue.vnode && ue.vnode(_), _;
}
let dt = class extends Po {
  render() {
    const {
      component: t,
      type: n,
      size: o,
      className: s,
      children: r,
      url: l,
      target: c,
      disabled: _,
      active: d,
      loading: i,
      loadingIcon: h,
      loadingText: u,
      icon: a,
      text: f,
      trailingIcon: y,
      caret: p,
      square: m,
      hint: g,
      ...w
    } = this.props, k = t || (l ? "a" : "button"), M = f == null || typeof f == "string" && !f.length || i && !u, T = p && M && !a && !y && !r && !i;
    return mb(
      k,
      {
        className: B("btn", n, s, {
          "btn-caret": T,
          disabled: _ || i,
          active: d,
          loading: i,
          square: m === void 0 ? !T && !r && M : m
        }, o ? `size-${o}` : ""),
        title: g,
        [k === "a" ? "href" : "data-url"]: l,
        [k === "a" ? "target" : "data-target"]: c,
        type: k === "button" ? "button" : void 0,
        ...w
      },
      i ? /* @__PURE__ */ ko("i", { class: `spin icon ${h || "icon-spinner-snake"}` }) : typeof a == "string" ? /* @__PURE__ */ ko("i", { class: `icon ${a}` }) : a,
      M ? null : /* @__PURE__ */ ko("span", { className: "text", children: i ? u : f }),
      i ? null : r,
      i ? null : typeof y == "string" ? /* @__PURE__ */ ko("i", { class: `icon ${y}` }) : y,
      i ? null : p ? /* @__PURE__ */ ko("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class iu extends Te {
}
D(iu, "NAME", "button"), D(iu, "Component", dt);
var ba;
ba = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} };
var $b = 0;
function kb(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --$b, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ba.vnode && ba.vnode(_), _;
}
var da;
let Ga = (da = class extends ed {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((o) => o.icon)), t.className = B(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((o) => this.isNestedItem(o)),
      "menu-popup": t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ kb("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
}, D(da, "NAME", "menu"), da);
class su extends Te {
}
D(su, "NAME", "menu"), D(su, "Component", Ga);
let xb = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var fd, fe, hd, Oo, lu, dd = {}, pd = [], Sb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function jt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function md(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Jc(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++hd };
  return s == null && fe.vnode != null && fe.vnode(r), r;
}
function Xa(e) {
  return e.children;
}
function Ho(e, t) {
  this.props = e, this.context = t;
}
function xr(e, t) {
  if (t == null)
    return e.__ ? xr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? xr(e) : null;
}
function gd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return gd(e);
  }
}
function cu(e) {
  (!e.__d && (e.__d = !0) && Oo.push(e) && !hs.__r++ || lu !== fe.debounceRendering) && ((lu = fe.debounceRendering) || setTimeout)(hs);
}
function hs() {
  for (var e; hs.__r = Oo.length; )
    e = Oo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Oo = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = jt({}, r)).__v = r.__v + 1, wd(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? xr(r), r.__h), Eb(o, r), r.__e != l && gd(r)));
    });
}
function yd(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || pd, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Jc(null, a, null, null, a) : Array.isArray(a) ? Jc(Xa, { children: a }, null, null, null) : a.__b > 0 ? Jc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      wd(e, a, u = u || dd, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = vd(a, _, e) : _ = bd(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = xr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && kd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      $d(p[i], p[++i], p[++i]);
}
function vd(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? vd(o, t, n) : bd(n, o, o, s, o.__e, t));
  return t;
}
function bd(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Cb(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ds(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ds(e, r, t[r], n[r], o);
}
function au(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Sb.test(t) ? n : n + "px";
}
function ds(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || au(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || au(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? uu : _u, r) : e.removeEventListener(t, r ? uu : _u, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function _u(e) {
  this.l[e.type + !1](fe.event ? fe.event(e) : e);
}
function uu(e) {
  this.l[e.type + !0](fe.event ? fe.event(e) : e);
}
function wd(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = fe.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Ho(p, g), i.constructor = v, i.render = Mb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = jt({}, i.__s)), jt(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = fe.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = jt(jt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === Xa && d.key == null ? d.props.children : d, yd(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Tb(n.__e, t, n, o, s, r, l, _);
    (d = fe.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), fe.__e(x, t, n);
  }
}
function Eb(e, t) {
  fe.__c && fe.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      fe.__e(o, n.__v);
    }
  });
}
function Tb(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && fd.call(e.childNodes), d = (h = n.props || dd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Cb(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, yd(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && xr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && md(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && ds(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && ds(e, "checked", f, h.checked, !1));
  }
  return e;
}
function $d(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    fe.__e(o, n);
  }
}
function kd(e, t, n) {
  var o, s;
  if (fe.unmount && fe.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || $d(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        fe.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && kd(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || md(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Mb(e, t, n) {
  return this.constructor(e, n);
}
fd = pd.slice, fe = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, hd = 0, Ho.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = jt({}, this.state), typeof e == "function" && (e = e(jt({}, n), this.props)), e && jt(n, e), e != null && this.__v && (t && this._sb.push(t), cu(this));
}, Ho.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), cu(this));
}, Ho.prototype.render = Xa, Oo = [], hs.__r = 0;
var Lb = 0;
function Ab(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Lb, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return fe.vnode && fe.vnode(_), _;
}
var wa, Pn;
wa = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Pn = function(e) {
  return e != null && e.constructor === void 0;
};
var Db = 0;
function mt(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Db, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return wa.vnode && wa.vnode(_), _;
}
var $a;
$a = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} };
var Nb = 0;
function xc(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Nb, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return $a.vnode && $a.vnode(_), _;
}
function Rb({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ xc(dt, { type: n, ...o });
}
var xd, he, Sd, Wo, fu, Cd = {}, Ed = [], Pb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function zt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Td(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Zc(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Sd };
  return s == null && he.vnode != null && he.vnode(r), r;
}
function Ob() {
  return { current: null };
}
function Ka(e) {
  return e.children;
}
function Uo(e, t) {
  this.props = e, this.context = t;
}
function Sr(e, t) {
  if (t == null)
    return e.__ ? Sr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Sr(e) : null;
}
function Md(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Md(e);
  }
}
function hu(e) {
  (!e.__d && (e.__d = !0) && Wo.push(e) && !ps.__r++ || fu !== he.debounceRendering) && ((fu = he.debounceRendering) || setTimeout)(ps);
}
function ps() {
  for (var e; ps.__r = Wo.length; )
    e = Wo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Wo = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = zt({}, r)).__v = r.__v + 1, Nd(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Sr(r), r.__h), Wb(o, r), r.__e != l && Md(r)));
    });
}
function Ld(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || Ed, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Zc(null, a, null, null, a) : Array.isArray(a) ? Zc(Ka, { children: a }, null, null, null) : a.__b > 0 ? Zc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      Nd(e, a, u = u || Cd, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Ad(a, _, e) : _ = Dd(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = Sr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Pd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Rd(p[i], p[++i], p[++i]);
}
function Ad(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Ad(o, t, n) : Dd(n, o, o, s, o.__e, t));
  return t;
}
function Dd(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Hb(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ms(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ms(e, r, t[r], n[r], o);
}
function du(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Pb.test(t) ? n : n + "px";
}
function ms(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || du(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || du(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? mu : pu, r) : e.removeEventListener(t, r ? mu : pu, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function pu(e) {
  this.l[e.type + !1](he.event ? he.event(e) : e);
}
function mu(e) {
  this.l[e.type + !0](he.event ? he.event(e) : e);
}
function Nd(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = he.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Uo(p, g), i.constructor = v, i.render = Ib), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = zt({}, i.__s)), zt(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = he.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = zt(zt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === Ka && d.key == null ? d.props.children : d, Ld(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ub(n.__e, t, n, o, s, r, l, _);
    (d = he.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), he.__e(x, t, n);
  }
}
function Wb(e, t) {
  he.__c && he.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      he.__e(o, n.__v);
    }
  });
}
function Ub(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && xd.call(e.childNodes), d = (h = n.props || Cd).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Hb(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, Ld(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Sr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Td(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && ms(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && ms(e, "checked", f, h.checked, !1));
  }
  return e;
}
function Rd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    he.__e(o, n);
  }
}
function Pd(e, t, n) {
  var o, s;
  if (he.unmount && he.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Rd(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        he.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Pd(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Td(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ib(e, t, n) {
  return this.constructor(e, n);
}
xd = Ed.slice, he = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Sd = 0, Uo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = zt({}, this.state), typeof e == "function" && (e = e(zt({}, n), this.props)), e && zt(n, e), e != null && this.__v && (t && this._sb.push(t), hu(this));
}, Uo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), hu(this));
}, Uo.prototype.render = Ka, Wo = [], ps.__r = 0;
var Fb = 0;
function Od(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Fb, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return he.vnode && he.vnode(_), _;
}
var Sc, oe, Hd, Io, gu, gs = {}, Wd = [], Bb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Vt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ud(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Id(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Sc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Yi(e, l, o, s, null);
}
function Yi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Hd };
  return s == null && oe.vnode != null && oe.vnode(r), r;
}
function Cc(e) {
  return e.children;
}
function qi(e, t) {
  this.props = e, this.context = t;
}
function Cr(e, t) {
  if (t == null)
    return e.__ ? Cr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Cr(e) : null;
}
function Fd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Fd(e);
  }
}
function yu(e) {
  (!e.__d && (e.__d = !0) && Io.push(e) && !ys.__r++ || gu !== oe.debounceRendering) && ((gu = oe.debounceRendering) || setTimeout)(ys);
}
function ys() {
  for (var e; ys.__r = Io.length; )
    e = Io.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Io = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Vt({}, r)).__v = r.__v + 1, Ja(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Cr(r), r.__h), Vd(o, r), r.__e != l && Fd(r)));
    });
}
function Bd(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || Wd, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Yi(null, a, null, null, a) : Array.isArray(a) ? Yi(Cc, { children: a }, null, null, null) : a.__b > 0 ? Yi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      Ja(e, a, u = u || gs, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = jd(a, _, e) : _ = zd(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = Cr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && qd(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Yd(p[i], p[++i], p[++i]);
}
function jd(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? jd(o, t, n) : zd(n, o, o, s, o.__e, t));
  return t;
}
function zd(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function jb(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || vs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || vs(e, r, t[r], n[r], o);
}
function vu(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Bb.test(t) ? n : n + "px";
}
function vs(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || vu(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || vu(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? wu : bu, r) : e.removeEventListener(t, r ? wu : bu, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function bu(e) {
  this.l[e.type + !1](oe.event ? oe.event(e) : e);
}
function wu(e) {
  this.l[e.type + !0](oe.event ? oe.event(e) : e);
}
function Ja(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = oe.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new qi(p, g), i.constructor = v, i.render = Vb), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Vt({}, i.__s)), Vt(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = oe.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = Vt(Vt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === Cc && d.key == null ? d.props.children : d, Bd(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = zb(n.__e, t, n, o, s, r, l, _);
    (d = oe.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), oe.__e(x, t, n);
  }
}
function Vd(e, t) {
  oe.__c && oe.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      oe.__e(o, n.__v);
    }
  });
}
function zb(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && Sc.call(e.childNodes), d = (h = n.props || gs).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (jb(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, Bd(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Cr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Ud(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && vs(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && vs(e, "checked", f, h.checked, !1));
  }
  return e;
}
function Yd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    oe.__e(o, n);
  }
}
function qd(e, t, n) {
  var o, s;
  if (oe.unmount && oe.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Yd(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        oe.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && qd(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Ud(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Vb(e, t, n) {
  return this.constructor(e, n);
}
function Yb(e, t, n) {
  var o, s, r;
  oe.__ && oe.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Ja(t, e = (!o && n || t).__k = Id(Cc, null, [e]), s || gs, gs, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Sc.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), Vd(r, e);
}
Sc = Wd.slice, oe = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Hd = 0, qi.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Vt({}, this.state), typeof e == "function" && (e = e(Vt({}, n), this.props)), e && Vt(n, e), e != null && this.__v && (t && this._sb.push(t), yu(this));
}, qi.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), yu(this));
}, qi.prototype.render = Cc, Io = [], ys.__r = 0;
function qb(e) {
  return e.button === 2;
}
var Gb = 0;
function Xb(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Gb, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return oe.vnode && oe.vnode(_), _;
}
function Za(e) {
  return e.split("-")[1];
}
function Gd(e) {
  return e === "y" ? "height" : "width";
}
function Fo(e) {
  return e.split("-")[0];
}
function Xd(e) {
  return ["top", "bottom"].includes(Fo(e)) ? "x" : "y";
}
function $u(e, t, n) {
  let { reference: o, floating: s } = e;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Xd(t), _ = Gd(c), d = o[_] / 2 - s[_] / 2, i = c === "x";
  let h;
  switch (Fo(t)) {
    case "top":
      h = { x: r, y: o.y - s.height };
      break;
    case "bottom":
      h = { x: r, y: o.y + o.height };
      break;
    case "right":
      h = { x: o.x + o.width, y: l };
      break;
    case "left":
      h = { x: o.x - s.width, y: l };
      break;
    default:
      h = { x: o.x, y: o.y };
  }
  switch (Za(t)) {
    case "start":
      h[c] -= d * (n && i ? -1 : 1);
      break;
    case "end":
      h[c] += d * (n && i ? -1 : 1);
  }
  return h;
}
const Kb = async (e, t, n) => {
  const { placement: o = "bottom", strategy: s = "absolute", middleware: r = [], platform: l } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({ reference: e, floating: t, strategy: s }), { x: i, y: h } = $u(d, o, _), u = o, a = {}, f = 0;
  for (let y = 0; y < c.length; y++) {
    const { name: p, fn: m } = c[y], { x: g, y: w, data: k, reset: M } = await m({ x: i, y: h, initialPlacement: o, placement: u, strategy: s, middlewareData: a, rects: d, platform: l, elements: { reference: e, floating: t } });
    i = g ?? i, h = w ?? h, a = { ...a, [p]: { ...a[p], ...k } }, M && f <= 50 && (f++, typeof M == "object" && (M.placement && (u = M.placement), M.rects && (d = M.rects === !0 ? await l.getElementRects({ reference: e, floating: t, strategy: s }) : M.rects), { x: i, y: h } = $u(d, u, _)), y = -1);
  }
  return { x: i, y: h, placement: u, strategy: s, middlewareData: a };
};
function Jb(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function bs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Zb(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: s, platform: r, rects: l, elements: c, strategy: _ } = e, { boundary: d = "clippingAncestors", rootBoundary: i = "viewport", elementContext: h = "floating", altBoundary: u = !1, padding: a = 0 } = t, f = Jb(a), y = c[u ? h === "floating" ? "reference" : "floating" : h], p = bs(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)), boundary: d, rootBoundary: i, strategy: _ })), m = h === "floating" ? { ...l.floating, x: o, y: s } : l.reference, g = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), w = await (r.isElement == null ? void 0 : r.isElement(g)) && await (r.getScale == null ? void 0 : r.getScale(g)) || { x: 1, y: 1 }, k = bs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: g, strategy: _ }) : m);
  return { top: (p.top - k.top + f.top) / w.y, bottom: (k.bottom - p.bottom + f.bottom) / w.y, left: (p.left - k.left + f.left) / w.x, right: (k.right - p.right + f.right) / w.x };
}
const Qb = ["top", "right", "bottom", "left"];
Qb.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const e0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ws(e) {
  return e.replace(/left|right|bottom|top/g, (t) => e0[t]);
}
function t0(e, t, n) {
  n === void 0 && (n = !1);
  const o = Za(e), s = Xd(e), r = Gd(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = ws(l)), { main: l, cross: ws(l) };
}
const n0 = { start: "end", end: "start" };
function Qc(e) {
  return e.replace(/start|end/g, (t) => n0[t]);
}
const Kd = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: o, middlewareData: s, rects: r, initialPlacement: l, platform: c, elements: _ } = t, { mainAxis: d = !0, crossAxis: i = !0, fallbackPlacements: h, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: a = "none", flipAlignment: f = !0, ...y } = e, p = Fo(o), m = Fo(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = h || (m || !f ? [ws(l)] : function(A) {
      const F = ws(A);
      return [Qc(A), F, Qc(F)];
    }(l));
    h || a === "none" || w.push(...function(A, F, j, R) {
      const S = Za(A);
      let $ = function(N, E, O) {
        const P = ["left", "right"], U = ["right", "left"], Y = ["top", "bottom"], V = ["bottom", "top"];
        switch (N) {
          case "top":
          case "bottom":
            return O ? E ? U : P : E ? P : U;
          case "left":
          case "right":
            return E ? Y : V;
          default:
            return [];
        }
      }(Fo(A), j === "start", R);
      return S && ($ = $.map((N) => N + "-" + S), F && ($ = $.concat($.map(Qc)))), $;
    }(l, f, a, g));
    const k = [l, ...w], M = await Zb(t, y), T = [];
    let C = ((n = s.flip) == null ? void 0 : n.overflows) || [];
    if (d && T.push(M[p]), i) {
      const { main: A, cross: F } = t0(o, r, g);
      T.push(M[A], M[F]);
    }
    if (C = [...C, { placement: o, overflows: T }], !T.every((A) => A <= 0)) {
      var v;
      const A = (((v = s.flip) == null ? void 0 : v.index) || 0) + 1, F = k[A];
      if (F)
        return { data: { index: A, overflows: C }, reset: { placement: F } };
      let j = "bottom";
      switch (u) {
        case "bestFit": {
          var x;
          const R = (x = C.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, N) => $ + N, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
          R && (j = R);
          break;
        }
        case "initialPlacement":
          j = l;
      }
      if (o !== j)
        return { reset: { placement: j } };
    }
    return {};
  } };
};
function qe(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function _t(e) {
  return qe(e).getComputedStyle(e);
}
function _n(e) {
  return Zd(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Ai;
function Jd() {
  if (Ai)
    return Ai;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Ai = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Ai) : navigator.userAgent;
}
function Ct(e) {
  return e instanceof qe(e).HTMLElement;
}
function Qe(e) {
  return e instanceof qe(e).Element;
}
function Zd(e) {
  return e instanceof qe(e).Node;
}
function ku(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof qe(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ec(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: s } = _t(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function o0(e) {
  return ["table", "td", "th"].includes(_n(e));
}
function ka(e) {
  const t = /firefox/i.test(Jd()), n = _t(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!o && o !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some((s) => {
    const r = n.contain;
    return r != null && r.includes(s);
  });
}
function Qd() {
  return !/^((?!chrome|android).)*safari/i.test(Jd());
}
function Qa(e) {
  return ["html", "body", "#document"].includes(_n(e));
}
const xu = Math.min, Bo = Math.max, $s = Math.round;
function ep(e) {
  const t = _t(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const s = e.offsetWidth, r = e.offsetHeight, l = $s(n) !== s || $s(o) !== r;
  return l && (n = s, o = r), { width: n, height: o, fallback: l };
}
function tp(e) {
  return Qe(e) ? e : e.contextElement;
}
const np = { x: 1, y: 1 };
function On(e) {
  const t = tp(e);
  if (!Ct(t))
    return np;
  const n = t.getBoundingClientRect(), { width: o, height: s, fallback: r } = ep(t);
  let l = (r ? $s(n.width) : n.width) / o, c = (r ? $s(n.height) : n.height) / s;
  return l && Number.isFinite(l) || (l = 1), c && Number.isFinite(c) || (c = 1), { x: l, y: c };
}
function Tn(e, t, n, o) {
  var s, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = tp(e);
  let _ = np;
  t && (o ? Qe(o) && (_ = On(o)) : _ = On(e));
  const d = c ? qe(c) : window, i = !Qd() && n;
  let h = (l.left + (i && ((s = d.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const y = qe(c), p = o && Qe(o) ? qe(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
      const g = On(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, h *= g.x, u *= g.y, a *= g.x, f *= g.y, h += w.x, u += w.y, m = qe(m).frameElement;
    }
  }
  return { width: a, height: f, top: u, right: h + a, bottom: u + f, left: h, x: h, y: u };
}
function on(e) {
  return ((Zd(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Tc(e) {
  return Qe(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function op(e) {
  return Tn(on(e)).left + Tc(e).scrollLeft;
}
function r0(e, t, n) {
  const o = Ct(t), s = on(t), r = Tn(e, !0, n === "fixed", t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (o || !o && n !== "fixed")
    if ((_n(t) !== "body" || Ec(s)) && (l = Tc(t)), Ct(t)) {
      const _ = Tn(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      s && (c.x = op(s));
  return { x: r.left + l.scrollLeft - c.x, y: r.top + l.scrollTop - c.y, width: r.width, height: r.height };
}
function Er(e) {
  if (_n(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (ku(e) ? e.host : null) || on(e);
  return ku(t) ? t.host : t;
}
function Su(e) {
  return Ct(e) && _t(e).position !== "fixed" ? e.offsetParent : null;
}
function Cu(e) {
  const t = qe(e);
  let n = Su(e);
  for (; n && o0(n) && _t(n).position === "static"; )
    n = Su(n);
  return n && (_n(n) === "html" || _n(n) === "body" && _t(n).position === "static" && !ka(n)) ? t : n || function(o) {
    let s = Er(o);
    for (; Ct(s) && !Qa(s); ) {
      if (ka(s))
        return s;
      s = Er(s);
    }
    return null;
  }(e) || t;
}
function rp(e) {
  const t = Er(e);
  return Qa(t) ? e.ownerDocument.body : Ct(t) && Ec(t) ? t : rp(t);
}
function jo(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = rp(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = qe(o);
  return s ? t.concat(r, r.visualViewport || [], Ec(o) ? o : []) : t.concat(o, jo(o));
}
function Eu(e, t, n) {
  return t === "viewport" ? bs(function(o, s) {
    const r = qe(o), l = on(o), c = r.visualViewport;
    let _ = l.clientWidth, d = l.clientHeight, i = 0, h = 0;
    if (c) {
      _ = c.width, d = c.height;
      const u = Qd();
      (u || !u && s === "fixed") && (i = c.offsetLeft, h = c.offsetTop);
    }
    return { width: _, height: d, x: i, y: h };
  }(e, n)) : Qe(t) ? function(o, s) {
    const r = Tn(o, !0, s === "fixed"), l = r.top + o.clientTop, c = r.left + o.clientLeft, _ = Ct(o) ? On(o) : { x: 1, y: 1 }, d = o.clientWidth * _.x, i = o.clientHeight * _.y, h = c * _.x, u = l * _.y;
    return { top: u, left: h, right: h + d, bottom: u + i, x: h, y: u, width: d, height: i };
  }(t, n) : bs(function(o) {
    var s;
    const r = on(o), l = Tc(o), c = (s = o.ownerDocument) == null ? void 0 : s.body, _ = Bo(r.scrollWidth, r.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0), d = Bo(r.scrollHeight, r.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0);
    let i = -l.scrollLeft + op(o);
    const h = -l.scrollTop;
    return _t(c || r).direction === "rtl" && (i += Bo(r.clientWidth, c ? c.clientWidth : 0) - _), { width: _, height: d, x: i, y: h };
  }(on(e)));
}
const i0 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: s } = e;
  const r = n === "clippingAncestors" ? function(d, i) {
    const h = i.get(d);
    if (h)
      return h;
    let u = jo(d).filter((p) => Qe(p) && _n(p) !== "body"), a = null;
    const f = _t(d).position === "fixed";
    let y = f ? Er(d) : d;
    for (; Qe(y) && !Qa(y); ) {
      const p = _t(y), m = ka(y);
      (f ? m || a : m || p.position !== "static" || !a || !["absolute", "fixed"].includes(a.position)) ? a = p : u = u.filter((g) => g !== y), y = Er(y);
    }
    return i.set(d, u), u;
  }(t, this._c) : [].concat(n), l = [...r, o], c = l[0], _ = l.reduce((d, i) => {
    const h = Eu(t, i, s);
    return d.top = Bo(h.top, d.top), d.right = xu(h.right, d.right), d.bottom = xu(h.bottom, d.bottom), d.left = Bo(h.left, d.left), d;
  }, Eu(t, c, s));
  return { width: _.right - _.left, height: _.bottom - _.top, x: _.left, y: _.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: o } = e;
  const s = Ct(n), r = on(n);
  if (n === r)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const _ = { x: 0, y: 0 };
  if ((s || !s && o !== "fixed") && ((_n(n) !== "body" || Ec(r)) && (l = Tc(n)), Ct(n))) {
    const d = Tn(n);
    c = On(n), _.x = d.x + n.clientLeft, _.y = d.y + n.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - l.scrollLeft * c.x + _.x, y: t.y * c.y - l.scrollTop * c.y + _.y };
}, isElement: Qe, getDimensions: function(e) {
  return ep(e);
}, getOffsetParent: Cu, getDocumentElement: on, getScale: On, async getElementRects(e) {
  let { reference: t, floating: n, strategy: o } = e;
  const s = this.getOffsetParent || Cu, r = this.getDimensions;
  return { reference: r0(t, await s(n), o), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => _t(e).direction === "rtl" };
function s0(e, t, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: s = !0, ancestorResize: r = !0, elementResize: l = !0, animationFrame: c = !1 } = o, _ = s && !c, d = _ || r ? [...Qe(e) ? jo(e) : e.contextElement ? jo(e.contextElement) : [], ...jo(t)] : [];
  d.forEach((a) => {
    _ && a.addEventListener("scroll", n, { passive: !0 }), r && a.addEventListener("resize", n);
  });
  let i, h = null;
  if (l) {
    let a = !0;
    h = new ResizeObserver(() => {
      a || n(), a = !1;
    }), Qe(e) && !c && h.observe(e), Qe(e) || !e.contextElement || c || h.observe(e.contextElement), h.observe(t);
  }
  let u = c ? Tn(e) : null;
  return c && function a() {
    const f = Tn(e);
    !u || f.x === u.x && f.y === u.y && f.width === u.width && f.height === u.height || n(), u = f, i = requestAnimationFrame(a);
  }(), n(), () => {
    var a;
    d.forEach((f) => {
      _ && f.removeEventListener("scroll", n), r && f.removeEventListener("resize", n);
    }), (a = h) == null || a.disconnect(), h = null, c && cancelAnimationFrame(i);
  };
}
const ip = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = { platform: i0, ...n }, r = { ...s.platform, _c: o };
  return Kb(e, t, { ...s, platform: r });
};
let l0 = class extends Ga {
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
    var t;
    return (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  _createPopper() {
    const t = this._getPopperOptions();
    this.ref.current && ip(this._getPopperElement(), this.ref.current, t).then(({ x: n, y: o }) => {
      Object.assign(this.ref.current.style, {
        left: `${n}px`,
        top: `${o}px`,
        position: "absolute"
      });
    });
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && this._createPopper();
  }
  beforeRender() {
    const t = super.beforeRender();
    return t.className = B(t.className, "menu-popup"), t;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ Xb("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var Rt, Yn, Gr, Xr, ml, sp, gl, lp;
class He extends ot {
  constructor() {
    super(...arguments);
    L(this, ml);
    L(this, gl);
    L(this, Rt, void 0);
    L(this, Yn, void 0);
    L(this, Gr, void 0);
    D(this, "arrowEl");
    L(this, Xr, void 0);
  }
  get isShown() {
    var n;
    return (n = b(this, Rt)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return b(this, Rt) || this._ensureMenu();
  }
  get trigger() {
    return b(this, Gr) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, Gr, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var o, s;
    return (o = b(this, Xr)) == null || o.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((s = b(this, Rt)) == null || s.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    super.destroy(), (n = b(this, Rt)) == null || n.remove();
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
    return s.style.width = "max-content", s.style.position = this.options.strategy, s.style.top = "0", s.style.left = "0", H(this, Rt, s), s;
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
    H(this, Xr, s0(o, this.menu, () => {
      ip(o, this.menu, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
        Object.assign(this.menu.style, {
          left: `${s}px`,
          top: `${r}px`
        });
        const _ = c.split("-")[0], d = I(this, ml, sp).call(this, _);
        if (l.arrow && this.arrowEl) {
          const { x: i, y: h } = l.arrow;
          Object.assign(this.arrowEl.style, {
            left: i != null ? `${i}px` : "",
            top: h != null ? `${h}px` : "",
            [d]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...I(this, gl, lp).call(this, _)
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Yb(Id(l0, n), this.menu), !0);
  }
  _getPopperElement() {
    return b(this, Yn) || H(this, Yn, {
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
    }), b(this, Yn);
  }
  static clear(n) {
    var _, d;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((d = (_ = o.target).closest) != null && d.call(_, r)) || o && qb(o))
      return;
    const l = this.getAll().entries(), c = new Set(s || []);
    for (const [i, h] of l)
      c.has(i) || h.hide();
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
Rt = new WeakMap(), Yn = new WeakMap(), Gr = new WeakMap(), Xr = new WeakMap(), ml = new WeakSet(), sp = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, gl = new WeakSet(), lp = function(n) {
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
}, D(He, "NAME", "contextmenu"), D(He, "EVENTS", !0), D(He, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), D(He, "MENU_CLASS", "contextmenu"), D(He, "CLASS_SHOW", "show"), D(He, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  var o;
  const t = e.target;
  if ((o = t.closest) != null && o.call(t, `.${He.MENU_CLASS}`))
    return;
  const n = t.closest(He.MENU_SELECTOR);
  n && (He.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", He.clear.bind(He));
function cp(e) {
  return e.split("-")[1];
}
function c0(e) {
  return e === "y" ? "height" : "width";
}
function ap(e) {
  return e.split("-")[0];
}
function _p(e) {
  return ["top", "bottom"].includes(ap(e)) ? "x" : "y";
}
function a0(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
const _0 = Math.min, u0 = Math.max;
function f0(e, t, n) {
  return u0(e, _0(t, n));
}
const h0 = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: o = 0 } = e || {}, { x: s, y: r, placement: l, rects: c, platform: _ } = t;
  if (n == null)
    return {};
  const d = a0(o), i = { x: s, y: r }, h = _p(l), u = c0(h), a = await _.getDimensions(n), f = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[h] - i[h] - c.floating[u], m = i[h] - c.reference[h], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
  let w = g ? h === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
  w === 0 && (w = c.floating[u]);
  const k = p / 2 - m / 2, M = d[f], T = w - a[u] - d[y], C = w / 2 - a[u] / 2 + k, v = f0(M, C, T), x = cp(l) != null && C != v && c.reference[u] / 2 - (C < M ? d[f] : d[y]) - a[u] / 2 < 0;
  return { [h]: i[h] - (x ? C < M ? M - C : T - C : 0), data: { [h]: v, centerOffset: C - v } };
} }), d0 = ["top", "right", "bottom", "left"];
d0.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const p0 = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: o } = t, s = await async function(r, l) {
      const { placement: c, platform: _, elements: d } = r, i = await (_.isRTL == null ? void 0 : _.isRTL(d.floating)), h = ap(c), u = cp(c), a = _p(c) === "x", f = ["left", "top"].includes(h) ? -1 : 1, y = i && a ? -1 : 1, p = typeof l == "function" ? l(r) : l;
      let { mainAxis: m, crossAxis: g, alignmentAxis: w } = typeof p == "number" ? { mainAxis: p, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p };
      return u && typeof w == "number" && (g = u === "end" ? -1 * w : w), a ? { x: g * y, y: m * f } : { x: m * f, y: g * y };
    }(t, e);
    return { x: n + s.x, y: o + s.y, data: s };
  } };
};
var qn, Gn, Xn, yl, up;
const D_ = class extends He {
  constructor() {
    super(...arguments);
    L(this, yl);
    L(this, qn, !1);
    L(this, Gn, 0);
    D(this, "hideLater", () => {
      b(this, Xn).call(this), H(this, Gn, window.setTimeout(this.hide.bind(this), 100));
    });
    L(this, Xn, () => {
      clearTimeout(b(this, Gn)), H(this, Gn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && D_.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const s = super.show(n);
    return s && (!b(this, qn) && this.isHover && I(this, yl, up).call(this), this.element.classList.add(this.elementShowClass)), s;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    b(this, qn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", b(this, Xn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
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
let De = D_;
qn = new WeakMap(), Gn = new WeakMap(), Xn = new WeakMap(), yl = new WeakSet(), up = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", b(this, Xn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, qn, !0);
}, D(De, "NAME", "dropdown"), D(De, "MENU_CLASS", "dropdown-menu"), D(De, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), D(De, "DEFAULT", {
  ...He.DEFAULT,
  strategy: "fixed",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  var o;
  const t = e.target, n = (o = t.closest) == null ? void 0 : o.call(t, De.MENU_SELECTOR);
  if (n) {
    const s = De.ensure(n);
    s.options.trigger === "click" && s.toggle();
  } else
    De.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, De.MENU_SELECTOR);
  if (!n)
    return;
  const o = De.ensure(n);
  o.isHover && o.show();
});
const m0 = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(De.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || De.clear({ event: e });
};
window.addEventListener("scroll", m0, !0);
var Kr, Kn;
class g0 extends Uo {
  constructor(n) {
    var o;
    super(n);
    L(this, Kr, void 0);
    L(this, Kn, Ob());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return b(this, Kn);
  }
  get triggerElement() {
    return b(this, Kn).current;
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
    }), H(this, Kr, De.ensure(this.triggerElement, {
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
    (n = b(this, Kr)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: s, ...r } = this.props;
    return {
      className: B("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: b(this, Kn)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ Od("div", { ...o, children: n });
  }
}
Kr = new WeakMap(), Kn = new WeakMap();
class y0 extends g0 {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var r;
    const { placement: t, show: n } = this.state, o = this.beforeRender();
    let { caret: s = !0 } = o;
    if (s !== !1 && (n || s === !0)) {
      const l = n ? t : (r = this.props.dropdown) == null ? void 0 : r.placement;
      s = (l === "top" ? "up" : l === "bottom" ? "down" : l) || (typeof s == "string" ? s : "") || "down";
    }
    return o.caret = s, /* @__PURE__ */ Od(dt, { ...o });
  }
}
function fp({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ xc(y0, { type: n, ...o });
}
var e_, de, hp, dp, zo, Tu, pp = {}, mp = [], v0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Yt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function gp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function b0(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? e_.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Gi(e, l, o, s, null);
}
function Gi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++hp };
  return s == null && de.vnode != null && de.vnode(r), r;
}
function t_(e) {
  return e.children;
}
function Vo(e, t) {
  this.props = e, this.context = t;
}
function Tr(e, t) {
  if (t == null)
    return e.__ ? Tr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Tr(e) : null;
}
function yp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return yp(e);
  }
}
function Mu(e) {
  (!e.__d && (e.__d = !0) && zo.push(e) && !ks.__r++ || Tu !== de.debounceRendering) && ((Tu = de.debounceRendering) || setTimeout)(ks);
}
function ks() {
  for (var e; ks.__r = zo.length; )
    e = zo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), zo = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Yt({}, r)).__v = r.__v + 1, $p(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Tr(r), r.__h), $0(o, r), r.__e != l && yp(r)));
    });
}
function vp(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || mp, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Gi(null, a, null, null, a) : Array.isArray(a) ? Gi(t_, { children: a }, null, null, null) : a.__b > 0 ? Gi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      $p(e, a, u = u || pp, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = bp(a, _, e) : _ = wp(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = Tr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && xp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      kp(p[i], p[++i], p[++i]);
}
function bp(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? bp(o, t, n) : wp(n, o, o, s, o.__e, t));
  return t;
}
function wp(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function w0(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || xs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || xs(e, r, t[r], n[r], o);
}
function Lu(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || v0.test(t) ? n : n + "px";
}
function xs(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Lu(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Lu(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Du : Au, r) : e.removeEventListener(t, r ? Du : Au, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Au(e) {
  this.l[e.type + !1](de.event ? de.event(e) : e);
}
function Du(e) {
  this.l[e.type + !0](de.event ? de.event(e) : e);
}
function $p(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = de.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Vo(p, g), i.constructor = v, i.render = x0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Yt({}, i.__s)), Yt(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = de.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = Yt(Yt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === t_ && d.key == null ? d.props.children : d, vp(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = k0(n.__e, t, n, o, s, r, l, _);
    (d = de.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), de.__e(x, t, n);
  }
}
function $0(e, t) {
  de.__c && de.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      de.__e(o, n.__v);
    }
  });
}
function k0(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && e_.call(e.childNodes), d = (h = n.props || pp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (w0(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, vp(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Tr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && gp(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && xs(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && xs(e, "checked", f, h.checked, !1));
  }
  return e;
}
function kp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    de.__e(o, n);
  }
}
function xp(e, t, n) {
  var o, s;
  if (de.unmount && de.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || kp(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        de.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && xp(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || gp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function x0(e, t, n) {
  return this.constructor(e, n);
}
e_ = mp.slice, de = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, hp = 0, dp = function(e) {
  return e != null && e.constructor === void 0;
}, Vo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Yt({}, this.state), typeof e == "function" && (e = e(Yt({}, n), this.props)), e && Yt(n, e), e != null && this.__v && (t && this._sb.push(t), Mu(this));
}, Vo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Mu(this));
}, Vo.prototype.render = t_, zo = [], ks.__r = 0;
var S0 = 0;
function Nu(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --S0, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return de.vnode && de.vnode(_), _;
}
let Sp = class extends Vo {
  componentDidMount() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  handleItemClick(t, n, o, s) {
    o && o.call(s.target, s);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: t, index: n, event: s });
  }
  beforeRender() {
    var o;
    const t = { ...this.props }, n = (o = t.beforeRender) == null ? void 0 : o.call(this, t);
    return n && Object.assign(t, n), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, n) {
    const { key: o = n, ...s } = t;
    return /* @__PURE__ */ Nu(dt, { ...s }, o);
  }
  renderItem(t, n, o) {
    const { itemRender: s, defaultBtnProps: r, onClickItem: l } = t, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), s) {
      const _ = s.call(this, c, b0);
      if (dp(_))
        return _;
      typeof _ == "object" && Object.assign(c, _);
    }
    return this.onRenderItem(c, o);
  }
  render() {
    const t = this.beforeRender(), {
      className: n,
      items: o,
      size: s,
      type: r,
      defaultBtnProps: l,
      children: c,
      itemRender: _,
      onClickItem: d,
      beforeRender: i,
      afterRender: h,
      beforeDestroy: u,
      ...a
    } = t;
    return /* @__PURE__ */ Nu(
      "div",
      {
        className: B("btn-group", s ? `size-${s}` : "", n),
        ...a,
        children: [
          o && o.map(this.renderItem.bind(this, t)),
          c
        ]
      }
    );
  }
};
function C0({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ xc(Sp, { type: n, ...o });
}
var Rn;
let yo = (Rn = class extends kc {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: o, ...s } = super.beforeRender();
    return s.className = B(s.className, o ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (s.style ? s.style.gap = t : s.style = { gap: t }), s;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, o) {
    const s = this.isBtnItem(o.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, r = {
      ...n,
      ...s,
      ...o,
      className: B(`${this.name}-${o.type}`, n.className, s.className, o.className),
      style: Object.assign({}, n.style, s.style, o.style)
    };
    return /* @__PURE__ */ xc(t, { ...r });
  }
}, D(Rn, "ItemComponents", {
  item: Rb,
  dropdown: fp,
  "btn-group": C0
}), D(Rn, "ROOT_TAG", "nav"), D(Rn, "NAME", "toolbar"), D(Rn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), Rn);
function E0({
  className: e,
  style: t,
  actions: n,
  heading: o,
  content: s,
  contentClass: r,
  children: l,
  close: c,
  onClose: _,
  icon: d,
  ...i
}) {
  let h;
  c === !0 ? h = /* @__PURE__ */ mt(dt, { className: "alert-close btn ghost", square: !0, onClick: _, children: /* @__PURE__ */ mt("span", { class: "close" }) }) : Pn(c) ? h = c : typeof c == "object" && (h = /* @__PURE__ */ mt(dt, { ...c, onClick: _ }));
  const u = Pn(n) ? n : n ? /* @__PURE__ */ mt(yo, { ...n }) : null;
  return /* @__PURE__ */ mt("div", { className: B("alert", e), style: t, ...i, children: [
    Pn(d) ? d : typeof d == "string" ? /* @__PURE__ */ mt("i", { className: `icon ${d}` }) : null,
    Pn(s) ? s : /* @__PURE__ */ mt("div", { className: B("alert-content", r), children: [
      Pn(o) ? o : o && /* @__PURE__ */ mt("div", { className: "alert-heading", children: o }),
      /* @__PURE__ */ mt("div", { className: "alert-text", children: s }),
      o ? u : null
    ] }),
    o ? null : u,
    h,
    l
  ] });
}
function T0(e) {
  if (e === "center")
    return "fade-from-center";
  if (e) {
    if (e.includes("top"))
      return "fade-from-top";
    if (e.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
let M0 = class extends Ho {
  componentDidMount() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  render() {
    const {
      afterRender: t,
      beforeDestroy: n,
      margin: o,
      type: s,
      placement: r,
      animation: l,
      show: c,
      className: _,
      time: d,
      ...i
    } = this.props;
    return /* @__PURE__ */ Ab(
      E0,
      {
        className: B("messager", _, s, l === !0 ? T0(r) : l, c ? "in" : ""),
        ...i
      }
    );
  }
};
var Jn, Ki;
class Xi extends Te {
  constructor() {
    super(...arguments);
    L(this, Jn);
    D(this, "_show", !1);
    D(this, "_showTimer", 0);
    D(this, "_afterRender", ({ firstRender: n }) => {
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
    this._show || (this.emit("show"), this.render(), this._show = !0, I(this, Jn, Ki).call(this, () => {
      this.emit("shown");
      const { time: n } = this.options;
      n && I(this, Jn, Ki).call(this, () => this.hide(), n);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), I(this, Jn, Ki).call(this, () => {
      this.emit("hidden");
    }));
  }
}
Jn = new WeakSet(), Ki = function(n, o = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, o);
}, D(Xi, "NAME", "MessagerItem"), D(Xi, "EVENTS", !0), D(Xi, "Component", M0);
var bn, Zn, $t, vl, Cp, bl, Ep;
const N_ = class extends ot {
  constructor() {
    super(...arguments);
    L(this, vl);
    L(this, bl);
    L(this, bn, void 0);
    L(this, Zn, xb(6));
    L(this, $t, void 0);
  }
  get id() {
    return b(this, Zn);
  }
  get isShown() {
    var n;
    return !!((n = b(this, $t)) != null && n.isShown);
  }
  show(n) {
    this.setOptions(n), I(this, vl, Cp).call(this).show();
  }
  hide() {
    var n;
    (n = b(this, $t)) == null || n.hide();
  }
  static show(n) {
    typeof n == "string" && (n = { content: n });
    const { container: o, ...s } = n, r = new N_(o || "body", s);
    return r.show(), r;
  }
};
let Di = N_;
bn = new WeakMap(), Zn = new WeakMap(), $t = new WeakMap(), vl = new WeakSet(), Cp = function() {
  if (b(this, $t))
    b(this, $t).setOptions(this.options);
  else {
    const n = I(this, bl, Ep).call(this), o = new Xi(n, this.options);
    o.on("hidden", () => {
      o.destroy(), n.remove(), H(this, bn, void 0);
    }), H(this, $t, o);
  }
  return b(this, $t);
}, bl = new WeakSet(), Ep = function() {
  if (b(this, bn))
    return b(this, bn);
  const { placement: n = "top" } = this.options;
  let o = this.element.querySelector(`.messagers-${n}`);
  o || (o = document.createElement("div"), o.className = `messagers messagers-${n}`, this.element.appendChild(o));
  let s = o.querySelector(`#messager-${b(this, Zn)}`);
  return s || (s = document.createElement("div"), s.className = "messager-holder", s.id = `messager-${b(this, Zn)}`, o.appendChild(s), H(this, bn, s)), s;
}, D(Di, "NAME", "messager"), D(Di, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
var Tp, pe, Mp, Yo, Ru, Lp = {}, Ap = [], L0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function qt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Dp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ea(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Mp };
  return s == null && pe.vnode != null && pe.vnode(r), r;
}
function n_(e) {
  return e.children;
}
function qo(e, t) {
  this.props = e, this.context = t;
}
function Mr(e, t) {
  if (t == null)
    return e.__ ? Mr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Mr(e) : null;
}
function Np(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Np(e);
  }
}
function Pu(e) {
  (!e.__d && (e.__d = !0) && Yo.push(e) && !Ss.__r++ || Ru !== pe.debounceRendering) && ((Ru = pe.debounceRendering) || setTimeout)(Ss);
}
function Ss() {
  for (var e; Ss.__r = Yo.length; )
    e = Yo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Yo = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = qt({}, r)).__v = r.__v + 1, Hp(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Mr(r), r.__h), D0(o, r), r.__e != l && Np(r)));
    });
}
function Rp(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || Ap, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ea(null, a, null, null, a) : Array.isArray(a) ? ea(n_, { children: a }, null, null, null) : a.__b > 0 ? ea(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      Hp(e, a, u = u || Lp, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Pp(a, _, e) : _ = Op(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = Mr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Up(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Wp(p[i], p[++i], p[++i]);
}
function Pp(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Pp(o, t, n) : Op(n, o, o, s, o.__e, t));
  return t;
}
function Op(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function A0(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Cs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Cs(e, r, t[r], n[r], o);
}
function Ou(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || L0.test(t) ? n : n + "px";
}
function Cs(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Ou(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ou(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Wu : Hu, r) : e.removeEventListener(t, r ? Wu : Hu, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Hu(e) {
  this.l[e.type + !1](pe.event ? pe.event(e) : e);
}
function Wu(e) {
  this.l[e.type + !0](pe.event ? pe.event(e) : e);
}
function Hp(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = pe.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new qo(p, g), i.constructor = v, i.render = R0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = qt({}, i.__s)), qt(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = pe.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = qt(qt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === n_ && d.key == null ? d.props.children : d, Rp(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = N0(n.__e, t, n, o, s, r, l, _);
    (d = pe.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), pe.__e(x, t, n);
  }
}
function D0(e, t) {
  pe.__c && pe.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      pe.__e(o, n.__v);
    }
  });
}
function N0(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && Tp.call(e.childNodes), d = (h = n.props || Lp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (A0(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, Rp(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Mr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Dp(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && Cs(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Cs(e, "checked", f, h.checked, !1));
  }
  return e;
}
function Wp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    pe.__e(o, n);
  }
}
function Up(e, t, n) {
  var o, s;
  if (pe.unmount && pe.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Wp(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        pe.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Up(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Dp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function R0(e, t, n) {
  return this.constructor(e, n);
}
Tp = Ap.slice, pe = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Mp = 0, qo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qt({}, this.state), typeof e == "function" && (e = e(qt({}, n), this.props)), e && qt(n, e), e != null && this.__v && (t && this._sb.push(t), Pu(this));
}, qo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Pu(this));
}, qo.prototype.render = n_, Yo = [], Ss.__r = 0;
var P0 = 0;
function Ni(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --P0, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pe.vnode && pe.vnode(_), _;
}
var Ii;
let O0 = (Ii = class extends qo {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: o, circleBgColor: s, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ Ni("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ Ni("circle", { cx: c, cy: c, r: l, stroke: s, "stroke-width": o }),
      /* @__PURE__ */ Ni("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - t) / 100, "stroke-width": o }),
      /* @__PURE__ */ Ni("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(t) })
    ] });
  }
}, D(Ii, "NAME", "zui.progress-circle"), D(Ii, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), Ii);
class Uu extends Te {
}
D(Uu, "NAME", "table-sorter"), D(Uu, "Component", O0);
var o_, me, Ip, Go, Iu, Fp = {}, Bp = [], H0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Gt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function jp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function W0(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? o_.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Ji(e, l, o, s, null);
}
function Ji(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Ip };
  return s == null && me.vnode != null && me.vnode(r), r;
}
function r_(e) {
  return e.children;
}
function Xo(e, t) {
  this.props = e, this.context = t;
}
function Lr(e, t) {
  if (t == null)
    return e.__ ? Lr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Lr(e) : null;
}
function zp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return zp(e);
  }
}
function Fu(e) {
  (!e.__d && (e.__d = !0) && Go.push(e) && !Es.__r++ || Iu !== me.debounceRendering) && ((Iu = me.debounceRendering) || setTimeout)(Es);
}
function Es() {
  for (var e; Es.__r = Go.length; )
    e = Go.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Go = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Gt({}, r)).__v = r.__v + 1, Gp(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Lr(r), r.__h), I0(o, r), r.__e != l && zp(r)));
    });
}
function Vp(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || Bp, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ji(null, a, null, null, a) : Array.isArray(a) ? Ji(r_, { children: a }, null, null, null) : a.__b > 0 ? Ji(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      Gp(e, a, u = u || Fp, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Yp(a, _, e) : _ = qp(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = Lr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Kp(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Xp(p[i], p[++i], p[++i]);
}
function Yp(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Yp(o, t, n) : qp(n, o, o, s, o.__e, t));
  return t;
}
function qp(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function U0(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ts(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ts(e, r, t[r], n[r], o);
}
function Bu(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || H0.test(t) ? n : n + "px";
}
function Ts(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Bu(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Bu(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? zu : ju, r) : e.removeEventListener(t, r ? zu : ju, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function ju(e) {
  this.l[e.type + !1](me.event ? me.event(e) : e);
}
function zu(e) {
  this.l[e.type + !0](me.event ? me.event(e) : e);
}
function Gp(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = me.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Xo(p, g), i.constructor = v, i.render = B0), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Gt({}, i.__s)), Gt(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = me.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = Gt(Gt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === r_ && d.key == null ? d.props.children : d, Vp(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = F0(n.__e, t, n, o, s, r, l, _);
    (d = me.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), me.__e(x, t, n);
  }
}
function I0(e, t) {
  me.__c && me.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      me.__e(o, n.__v);
    }
  });
}
function F0(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && o_.call(e.childNodes), d = (h = n.props || Fp).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (U0(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, Vp(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Lr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && jp(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && Ts(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Ts(e, "checked", f, h.checked, !1));
  }
  return e;
}
function Xp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    me.__e(o, n);
  }
}
function Kp(e, t, n) {
  var o, s;
  if (me.unmount && me.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Xp(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        me.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Kp(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || jp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function B0(e, t, n) {
  return this.constructor(e, n);
}
o_ = Bp.slice, me = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ip = 0, Xo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Gt({}, this.state), typeof e == "function" && (e = e(Gt({}, n), this.props)), e && Gt(n, e), e != null && this.__v && (t && this._sb.push(t), Fu(this));
}, Xo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Fu(this));
}, Xo.prototype.render = r_, Go = [], Es.__r = 0;
var j0 = 0;
function Ri(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --j0, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return me.vnode && me.vnode(_), _;
}
let z0 = class extends Xo {
  constructor() {
    super(...arguments);
    D(this, "state", { checked: !1 });
    D(this, "handleOnClick", () => {
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
      defaultChecked: d,
      onChange: i,
      ...h
    } = this.props, u = this.state.checked ? 1 : 0, a = n || "div", f = typeof l == "string" ? /* @__PURE__ */ Ri("i", { class: `icon ${l}` }) : l, y = typeof c == "string" ? /* @__PURE__ */ Ri("i", { class: `icon ${c}` }) : c, p = [
      /* @__PURE__ */ Ri("input", { onChange: i, type: "checkbox", value: u, checked: !!this.state.checked }),
      /* @__PURE__ */ Ri("label", { children: [
        f,
        r,
        y
      ] })
    ];
    return W0(
      a,
      {
        className: B("switch", o, { disabled: _ }),
        onClick: this.handleOnClick,
        ...h
      },
      ...p,
      s
    );
  }
};
class Vu extends Te {
}
D(Vu, "NAME", "switch"), D(Vu, "Component", z0);
function V0(e) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)
    return t.select(), !0;
  if (window.getSelection) {
    const n = window.getSelection();
    if (n) {
      const o = document.createRange();
      return o.selectNodeContents(t), n.removeAllRanges(), n.addRange(o), !0;
    }
  }
  return !1;
}
function Y0(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= s;
  const l = o.top <= s && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const aS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: B,
  getClassList: $c,
  isElementVisible: Y0,
  selectText: V0
}, Symbol.toStringTag, { value: "Module" })), Et = document, Ms = window, Jp = Et.documentElement, Dn = Et.createElement.bind(Et), Zp = Dn("div"), ta = Dn("table"), q0 = Dn("tbody"), Yu = Dn("tr"), { isArray: Mc, prototype: Qp } = Array, { concat: G0, filter: i_, indexOf: em, map: tm, push: X0, slice: nm, some: s_, splice: K0 } = Qp, J0 = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Z0 = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Q0 = /<.+>/, ew = /^\w+$/;
function l_(e, t) {
  const n = tw(t);
  return !e || !n && !bo(t) && !Se(t) ? [] : !n && Z0.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && ew.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class Lc {
  constructor(t, n) {
    if (!t)
      return;
    if (xa(t))
      return t;
    let o = t;
    if (Ne(t)) {
      const s = (xa(n) ? n[0] : n) || Et;
      if (o = J0.test(t) && "getElementById" in s ? s.getElementById(t.slice(1).replace(/\\/g, "")) : Q0.test(t) ? im(t) : l_(t, s), !o)
        return;
    } else if (Nn(t))
      return this.ready(t);
    (o.nodeType || o === Ms) && (o = [o]), this.length = o.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = o[s];
  }
  init(t, n) {
    return new Lc(t, n);
  }
}
const W = Lc.prototype, q = W.init;
q.fn = q.prototype = W;
W.length = 0;
W.splice = K0;
typeof Symbol == "function" && (W[Symbol.iterator] = Qp[Symbol.iterator]);
function xa(e) {
  return e instanceof Lc;
}
function vo(e) {
  return !!e && e === e.window;
}
function bo(e) {
  return !!e && e.nodeType === 9;
}
function tw(e) {
  return !!e && e.nodeType === 11;
}
function Se(e) {
  return !!e && e.nodeType === 1;
}
function nw(e) {
  return !!e && e.nodeType === 3;
}
function ow(e) {
  return typeof e == "boolean";
}
function Nn(e) {
  return typeof e == "function";
}
function Ne(e) {
  return typeof e == "string";
}
function Ue(e) {
  return e === void 0;
}
function Ar(e) {
  return e === null;
}
function om(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function c_(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
q.isWindow = vo;
q.isFunction = Nn;
q.isArray = Mc;
q.isNumeric = om;
q.isPlainObject = c_;
function Ee(e, t, n) {
  if (n) {
    let o = e.length;
    for (; o--; )
      if (t.call(e[o], o, e[o]) === !1)
        return e;
  } else if (c_(e)) {
    const o = Object.keys(e);
    for (let s = 0, r = o.length; s < r; s++) {
      const l = o[s];
      if (t.call(e[l], l, e[l]) === !1)
        return e;
    }
  } else
    for (let o = 0, s = e.length; o < s; o++)
      if (t.call(e[o], o, e[o]) === !1)
        return e;
  return e;
}
q.each = Ee;
W.each = function(e) {
  return Ee(this, e);
};
W.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Ls(...e) {
  const t = ow(e[0]) ? e.shift() : !1, n = e.shift(), o = e.length;
  if (!n)
    return {};
  if (!o)
    return Ls(t, q, n);
  for (let s = 0; s < o; s++) {
    const r = e[s];
    for (const l in r)
      t && (Mc(r[l]) || c_(r[l])) ? ((!n[l] || n[l].constructor !== r[l].constructor) && (n[l] = new r[l].constructor()), Ls(t, n[l], r[l])) : n[l] = r[l];
  }
  return n;
}
q.extend = Ls;
W.extend = function(e) {
  return Ls(W, e);
};
const rw = /\S+/g;
function Ac(e) {
  return Ne(e) ? e.match(rw) || [] : [];
}
W.toggleClass = function(e, t) {
  const n = Ac(e), o = !Ue(t);
  return this.each((s, r) => {
    Se(r) && Ee(n, (l, c) => {
      o ? t ? r.classList.add(c) : r.classList.remove(c) : r.classList.toggle(c);
    });
  });
};
W.addClass = function(e) {
  return this.toggleClass(e, !0);
};
W.removeAttr = function(e) {
  const t = Ac(e);
  return this.each((n, o) => {
    Se(o) && Ee(t, (s, r) => {
      o.removeAttribute(r);
    });
  });
};
function iw(e, t) {
  if (e) {
    if (Ne(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !Se(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return Ar(n) ? void 0 : n;
      }
      return Ue(t) ? this : Ar(t) ? this.removeAttr(e) : this.each((n, o) => {
        Se(o) && o.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
W.attr = iw;
W.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
W.hasClass = function(e) {
  return !!e && s_.call(this, (t) => Se(t) && t.classList.contains(e));
};
W.get = function(e) {
  return Ue(e) ? nm.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
W.eq = function(e) {
  return q(this.get(e));
};
W.first = function() {
  return this.eq(0);
};
W.last = function() {
  return this.eq(-1);
};
function sw(e) {
  return Ue(e) ? this.get().map((t) => Se(t) || nw(t) ? t.textContent : "").join("") : this.each((t, n) => {
    Se(n) && (n.textContent = e);
  });
}
W.text = sw;
function Tt(e, t, n) {
  if (!Se(e))
    return;
  const o = Ms.getComputedStyle(e, null);
  return n ? o.getPropertyValue(t) || void 0 : o[t] || e.style[t];
}
function at(e, t) {
  return parseInt(Tt(e, t), 10) || 0;
}
function qu(e, t) {
  return at(e, `border${t ? "Left" : "Top"}Width`) + at(e, `padding${t ? "Left" : "Top"}`) + at(e, `padding${t ? "Right" : "Bottom"}`) + at(e, `border${t ? "Right" : "Bottom"}Width`);
}
const na = {};
function lw(e) {
  if (na[e])
    return na[e];
  const t = Dn(e);
  Et.body.insertBefore(t, null);
  const n = Tt(t, "display");
  return Et.body.removeChild(t), na[e] = n !== "none" ? n : "block";
}
function Gu(e) {
  return Tt(e, "display") === "none";
}
function rm(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function Dc(e) {
  return Ne(e) ? (t, n) => rm(n, e) : Nn(e) ? e : xa(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
W.filter = function(e) {
  const t = Dc(e);
  return q(i_.call(this, (n, o) => t.call(n, o, n)));
};
function dn(e, t) {
  return t ? e.filter(t) : e;
}
W.detach = function(e) {
  return dn(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const cw = /^\s*<(\w+)[^>]*>/, aw = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Xu = {
  "*": Zp,
  tr: q0,
  td: Yu,
  th: Yu,
  thead: ta,
  tbody: ta,
  tfoot: ta
};
function im(e) {
  if (!Ne(e))
    return [];
  if (aw.test(e))
    return [Dn(RegExp.$1)];
  const t = cw.test(e) && RegExp.$1, n = Xu[t] || Xu["*"];
  return n.innerHTML = e, q(n.childNodes).detach().get();
}
q.parseHTML = im;
W.has = function(e) {
  const t = Ne(e) ? (n, o) => l_(e, o).length : (n, o) => o.contains(e);
  return this.filter(t);
};
W.not = function(e) {
  const t = Dc(e);
  return this.filter((n, o) => (!Ne(e) || Se(o)) && !t.call(o, n, o));
};
function Dt(e, t, n, o) {
  const s = [], r = Nn(t), l = o && Dc(o);
  for (let c = 0, _ = e.length; c < _; c++)
    if (r) {
      const d = t(e[c]);
      d.length && X0.apply(s, d);
    } else {
      let d = e[c][t];
      for (; d != null && !(o && l(-1, d)); )
        s.push(d), d = n ? d[t] : null;
    }
  return s;
}
function sm(e) {
  return e.multiple && e.options ? Dt(i_.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function _w(e) {
  return arguments.length ? this.each((t, n) => {
    const o = n.multiple && n.options;
    if (o || dm.test(n.type)) {
      const s = Mc(e) ? tm.call(e, String) : Ar(e) ? [] : [String(e)];
      o ? Ee(n.options, (r, l) => {
        l.selected = s.indexOf(l.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = Ue(e) || Ar(e) ? "" : e;
  }) : this[0] && sm(this[0]);
}
W.val = _w;
W.is = function(e) {
  const t = Dc(e);
  return s_.call(this, (n, o) => t.call(n, o, n));
};
q.guid = 1;
function pt(e) {
  return e.length > 1 ? i_.call(e, (t, n, o) => em.call(o, t) === n) : e;
}
q.unique = pt;
W.add = function(e, t) {
  return q(pt(this.get().concat(q(e, t).get())));
};
W.children = function(e) {
  return dn(q(pt(Dt(this, (t) => t.children))), e);
};
W.parent = function(e) {
  return dn(q(pt(Dt(this, "parentNode"))), e);
};
W.index = function(e) {
  const t = e ? q(e)[0] : this[0], n = e ? this : q(t).parent().children();
  return em.call(n, t);
};
W.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
W.siblings = function(e) {
  return dn(q(pt(Dt(this, (t) => q(t).parent().children().not(t)))), e);
};
W.find = function(e) {
  return q(pt(Dt(this, (t) => l_(e, t))));
};
const uw = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, fw = /^$|^module$|\/(java|ecma)script/i, hw = ["type", "src", "nonce", "noModule"];
function dw(e, t) {
  const n = q(e);
  n.filter("script").add(n.find("script")).each((o, s) => {
    if (fw.test(s.type) && Jp.contains(s)) {
      const r = Dn("script");
      r.text = s.textContent.replace(uw, ""), Ee(hw, (l, c) => {
        s[c] && (r[c] = s[c]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function pw(e, t, n, o, s) {
  o ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), s && dw(t, e.ownerDocument);
}
function pn(e, t, n, o, s, r, l, c) {
  return Ee(e, (_, d) => {
    Ee(q(d), (i, h) => {
      Ee(q(t), (u, a) => {
        const f = n ? h : a, y = n ? a : h, p = n ? i : u;
        pw(f, p ? y.cloneNode(!0) : y, o, s, !p);
      }, c);
    }, l);
  }, r), t;
}
W.after = function() {
  return pn(arguments, this, !1, !1, !1, !0, !0);
};
W.append = function() {
  return pn(arguments, this, !1, !1, !0);
};
function mw(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (Ue(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, o) => {
    Se(o) && (t ? q(o).empty().append(e) : o.innerHTML = e);
  });
}
W.html = mw;
W.appendTo = function(e) {
  return pn(arguments, this, !0, !1, !0);
};
W.wrapInner = function(e) {
  return this.each((t, n) => {
    const o = q(n), s = o.contents();
    s.length ? s.wrapAll(e) : o.append(e);
  });
};
W.before = function() {
  return pn(arguments, this, !1, !0);
};
W.wrapAll = function(e) {
  let t = q(e), n = t[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(t), this.appendTo(n);
};
W.wrap = function(e) {
  return this.each((t, n) => {
    const o = q(e)[0];
    q(n).wrapAll(t ? o.cloneNode(!0) : o);
  });
};
W.insertAfter = function(e) {
  return pn(arguments, this, !0, !1, !1, !1, !1, !0);
};
W.insertBefore = function(e) {
  return pn(arguments, this, !0, !0);
};
W.prepend = function() {
  return pn(arguments, this, !1, !0, !0, !0, !0);
};
W.prependTo = function(e) {
  return pn(arguments, this, !0, !0, !0, !1, !1, !0);
};
W.contents = function() {
  return q(pt(Dt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
W.next = function(e, t, n) {
  return dn(q(pt(Dt(this, "nextElementSibling", t, n))), e);
};
W.nextAll = function(e) {
  return this.next(e, !0);
};
W.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
W.parents = function(e, t) {
  return dn(q(pt(Dt(this, "parentElement", !0, t))), e);
};
W.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
W.prev = function(e, t, n) {
  return dn(q(pt(Dt(this, "previousElementSibling", t, n))), e);
};
W.prevAll = function(e) {
  return this.prev(e, !0);
};
W.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
W.map = function(e) {
  return q(G0.apply([], tm.call(this, (t, n) => e.call(t, n, t))));
};
W.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
W.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && Tt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Jp;
  });
};
W.slice = function(e, t) {
  return q(nm.call(this, e, t));
};
const gw = /-([a-z])/g;
function a_(e) {
  return e.replace(gw, (t, n) => n.toUpperCase());
}
W.ready = function(e) {
  const t = () => setTimeout(e, 0, q);
  return Et.readyState !== "loading" ? t() : Et.addEventListener("DOMContentLoaded", t), this;
};
W.unwrap = function() {
  return this.parent().each((e, t) => {
    if (t.tagName === "BODY")
      return;
    const n = q(t);
    n.replaceWith(n.children());
  }), this;
};
W.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const t = e.getBoundingClientRect();
  return {
    top: t.top + Ms.pageYOffset,
    left: t.left + Ms.pageXOffset
  };
};
W.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = Tt(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const o = e.ownerDocument;
    let s = e.offsetParent || o.documentElement;
    for (; (s === o.body || s === o.documentElement) && Tt(s, "position") === "static"; )
      s = s.parentNode;
    if (s !== e && Se(s)) {
      const r = q(s).offset();
      n.top -= r.top + at(s, "borderTopWidth"), n.left -= r.left + at(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - at(e, "marginTop"),
    left: n.left - at(e, "marginLeft")
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
W.prop = function(e, t) {
  if (e) {
    if (Ne(e))
      return e = lm[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, o) => {
        o[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
W.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[lm[e] || e];
  });
};
const yw = /^--/;
function __(e) {
  return yw.test(e);
}
const oa = {}, { style: vw } = Zp, bw = ["webkit", "moz", "ms"];
function ww(e, t = __(e)) {
  if (t)
    return e;
  if (!oa[e]) {
    const n = a_(e), o = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${bw.join(`${o} `)}${o}`.split(" ");
    Ee(s, (r, l) => {
      if (l in vw)
        return oa[e] = l, !1;
    });
  }
  return oa[e];
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
function cm(e, t, n = __(e)) {
  return !n && !$w[e] && om(t) ? `${t}px` : t;
}
function kw(e, t) {
  if (Ne(e)) {
    const n = __(e);
    return e = ww(e, n), arguments.length < 2 ? this[0] && Tt(this[0], e, n) : e ? (t = cm(e, t, n), this.each((o, s) => {
      Se(s) && (n ? s.style.setProperty(e, t) : s.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
W.css = kw;
function am(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const xw = /^\s+|\s+$/;
function Ku(e, t) {
  const n = e.dataset[t] || e.dataset[a_(t)];
  return xw.test(n) ? n : am(JSON.parse, n);
}
function Sw(e, t, n) {
  n = am(JSON.stringify, n), e.dataset[a_(t)] = n;
}
function Cw(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const o in this[0].dataset)
      n[o] = Ku(this[0], o);
    return n;
  }
  if (Ne(e))
    return arguments.length < 2 ? this[0] && Ku(this[0], e) : Ue(t) ? this : this.each((n, o) => {
      Sw(o, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
W.data = Cw;
function _m(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
Ee([!0, !1], (e, t) => {
  Ee(["Width", "Height"], (n, o) => {
    const s = `${t ? "outer" : "inner"}${o}`;
    W[s] = function(r) {
      if (this[0])
        return vo(this[0]) ? t ? this[0][`inner${o}`] : this[0].document.documentElement[`client${o}`] : bo(this[0]) ? _m(this[0], o) : this[0][`${t ? "offset" : "client"}${o}`] + (r && t ? at(this[0], `margin${n ? "Top" : "Left"}`) + at(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Ee(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  W[n] = function(o) {
    if (!this[0])
      return Ue(o) ? void 0 : this;
    if (!arguments.length)
      return vo(this[0]) ? this[0].document.documentElement[`client${t}`] : bo(this[0]) ? _m(this[0], t) : this[0].getBoundingClientRect()[n] - qu(this[0], !e);
    const s = parseInt(o, 10);
    return this.each((r, l) => {
      if (!Se(l))
        return;
      const c = Tt(l, "boxSizing");
      l.style[n] = cm(n, s + (c === "border-box" ? qu(l, !e) : 0));
    });
  };
});
const Ju = "___cd";
W.toggle = function(e) {
  return this.each((t, n) => {
    if (!Se(n))
      return;
    (Ue(e) ? Gu(n) : e) ? (n.style.display = n[Ju] || "", Gu(n) && (n.style.display = lw(n.tagName))) : (n[Ju] = Tt(n, "display"), n.style.display = "none");
  });
};
W.hide = function() {
  return this.toggle(!1);
};
W.show = function() {
  return this.toggle(!0);
};
const Zu = "___ce", u_ = ".", f_ = { focus: "focusin", blur: "focusout" }, um = { mouseenter: "mouseover", mouseleave: "mouseout" }, Ew = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function h_(e) {
  return um[e] || f_[e] || e;
}
function d_(e) {
  const t = e.split(u_);
  return [t[0], t.slice(1).sort()];
}
W.trigger = function(e, t) {
  if (Ne(e)) {
    const [o, s] = d_(e), r = h_(o);
    if (!r)
      return this;
    const l = Ew.test(r) ? "MouseEvents" : "HTMLEvents";
    e = Et.createEvent(l), e.initEvent(r, !0, !0), e.namespace = s.join(u_), e.___ot = o;
  }
  e.___td = t;
  const n = e.___ot in f_;
  return this.each((o, s) => {
    n && Nn(s[e.___ot]) && (s[`___i${e.type}`] = !0, s[e.___ot](), s[`___i${e.type}`] = !1), s.dispatchEvent(e);
  });
};
function fm(e) {
  return e[Zu] = e[Zu] || {};
}
function Tw(e, t, n, o, s) {
  const r = fm(e);
  r[t] = r[t] || [], r[t].push([n, o, s]), e.addEventListener(t, s);
}
function hm(e, t) {
  return !t || !s_.call(t, (n) => e.indexOf(n) < 0);
}
function As(e, t, n, o, s) {
  const r = fm(e);
  if (t)
    r[t] && (r[t] = r[t].filter(([l, c, _]) => {
      if (s && _.guid !== s.guid || !hm(l, n) || o && o !== c)
        return !0;
      e.removeEventListener(t, _);
    }));
  else
    for (t in r)
      As(e, t, n, o, s);
}
W.off = function(e, t, n) {
  if (Ue(e))
    this.each((o, s) => {
      !Se(s) && !bo(s) && !vo(s) || As(s);
    });
  else if (Ne(e))
    Nn(t) && (n = t, t = ""), Ee(Ac(e), (o, s) => {
      const [r, l] = d_(s), c = h_(r);
      this.each((_, d) => {
        !Se(d) && !bo(d) && !vo(d) || As(d, c, l, t, n);
      });
    });
  else
    for (const o in e)
      this.off(o, e[o]);
  return this;
};
W.remove = function(e) {
  return dn(this, e).detach().off(), this;
};
W.replaceWith = function(e) {
  return this.before(e).remove();
};
W.replaceAll = function(e) {
  return q(e).replaceWith(this), this;
};
function Mw(e, t, n, o, s) {
  if (!Ne(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], s);
    return this;
  }
  return Ne(t) || (Ue(t) || Ar(t) ? t = "" : Ue(n) ? (n = t, t = "") : (o = n, n = t, t = "")), Nn(o) || (o = n, n = void 0), o ? (Ee(Ac(e), (r, l) => {
    const [c, _] = d_(l), d = h_(c), i = c in um, h = c in f_;
    d && this.each((u, a) => {
      if (!Se(a) && !bo(a) && !vo(a))
        return;
      const f = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !hm(_, y.namespace.split(u_)) || !t && (h && (y.target !== a || y.___ot === d) || i && y.relatedTarget && a.contains(y.relatedTarget)))
          return;
        let p = a;
        if (t) {
          let g = y.target;
          for (; !rm(g, t); )
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
        s && As(a, d, _, t, f), m === !1 && (y.preventDefault(), y.stopPropagation());
      };
      f.guid = o.guid = o.guid || q.guid++, Tw(a, d, _, t, f);
    });
  }), this) : this;
}
W.on = Mw;
function Lw(e, t, n, o) {
  return this.on(e, t, n, o, !0);
}
W.one = Lw;
const Aw = /\r?\n/g;
function Dw(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(Aw, `\r
`))}`;
}
const Nw = /file|reset|submit|button|image/i, dm = /radio|checkbox/i;
W.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    Ee(n.elements || [n], (o, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || Nw.test(s.type) || dm.test(s.type) && !s.checked)
        return;
      const r = sm(s);
      if (!Ue(r)) {
        const l = Mc(r) ? r : [r];
        Ee(l, (c, _) => {
          e += Dw(s.name, _);
        });
      }
    });
  }), e.slice(1);
};
window.$ = q;
const _S = q;
/*! js-cookie v3.0.1 | MIT */
function Pi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var o in n)
      e[o] = n[o];
  }
  return e;
}
var Rw = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function Sa(e, t) {
  function n(s, r, l) {
    if (!(typeof document > "u")) {
      l = Pi({}, t, l), typeof l.expires == "number" && (l.expires = new Date(Date.now() + l.expires * 864e5)), l.expires && (l.expires = l.expires.toUTCString()), s = encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var c = "";
      for (var _ in l)
        l[_] && (c += "; " + _, l[_] !== !0 && (c += "=" + l[_].split(";")[0]));
      return document.cookie = s + "=" + e.write(r, s) + c;
    }
  }
  function o(s) {
    if (!(typeof document > "u" || arguments.length && !s)) {
      for (var r = document.cookie ? document.cookie.split("; ") : [], l = {}, c = 0; c < r.length; c++) {
        var _ = r[c].split("="), d = _.slice(1).join("=");
        try {
          var i = decodeURIComponent(_[0]);
          if (l[i] = e.read(d, i), s === i)
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
          Pi({}, r, {
            expires: -1
          })
        );
      },
      withAttributes: function(s) {
        return Sa(this.converter, Pi({}, this.attributes, s));
      },
      withConverter: function(s) {
        return Sa(Pi({}, this.converter, s), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var Pw = Sa(Rw, { path: "/" });
window.$ && Object.assign(window.$, { cookie: Pw });
var pm = function(e, t, n, o) {
  var s;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var l = t[r++], c = t[r] ? (t[0] |= l ? 1 : 2, n[t[r++]]) : t[++r];
    l === 3 ? o[0] = c : l === 4 ? o[1] = Object.assign(o[1] || {}, c) : l === 5 ? (o[1] = o[1] || {})[t[++r]] = c : l === 6 ? o[1][t[++r]] += c + "" : l ? (s = e.apply(c, pm(e, c, n, ["", null])), o.push(s), c[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = s)) : o.push(c);
  }
  return o;
}, Qu = /* @__PURE__ */ new Map();
function mm(e) {
  var t = Qu.get(this);
  return t || (t = /* @__PURE__ */ new Map(), Qu.set(this, t)), (t = pm(this, t.get(e) || (t.set(e, t = function(n) {
    for (var o, s, r = 1, l = "", c = "", _ = [0], d = function(u) {
      r === 1 && (u || (l = l.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? _.push(0, u, l) : r === 3 && (u || l) ? (_.push(3, u, l), r = 2) : r === 2 && l === "..." && u ? _.push(4, u, 0) : r === 2 && l && !u ? _.push(5, 0, !0, l) : r >= 5 && ((l || !u && r === 5) && (_.push(r, 0, l, s), r = 6), u && (_.push(r, u, 0, s), r = 6)), l = "";
    }, i = 0; i < n.length; i++) {
      i && (r === 1 && d(), d(i));
      for (var h = 0; h < n[i].length; h++)
        o = n[i][h], r === 1 ? o === "<" ? (d(), _ = [_], r = 3) : l += o : r === 4 ? l === "--" && o === ">" ? (r = 1, l = "") : l = o + l[0] : c ? o === c ? c = "" : l += o : o === '"' || o === "'" ? c = o : o === ">" ? (d(), r = 1) : r && (o === "=" ? (r = 5, s = l, l = "") : o === "/" && (r < 5 || n[i][h + 1] === ">") ? (d(), r === 3 && (_ = _[0]), r = _, (_ = _[0]).push(2, 0, r), r = 0) : o === " " || o === "	" || o === `
` || o === "\r" ? (d(), r = 2) : l += o), r === 3 && l === "!--" && (r = 4, _ = _[0]);
    }
    return d(), _;
  }(e)), t), arguments, [])).length > 1 ? t : t[0];
}
var xi, ae, gm, ym, Ko, ef, vm, Ds = {}, bm = [], Ow = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function St(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function wm(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ns(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? xi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Jo(e, l, o, s, null);
}
function Jo(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++gm };
  return s == null && ae.vnode != null && ae.vnode(r), r;
}
function Hw() {
  return { current: null };
}
function Si(e) {
  return e.children;
}
function Zo(e, t) {
  this.props = e, this.context = t;
}
function Dr(e, t) {
  if (t == null)
    return e.__ ? Dr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Dr(e) : null;
}
function $m(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return $m(e);
  }
}
function Ca(e) {
  (!e.__d && (e.__d = !0) && Ko.push(e) && !Rs.__r++ || ef !== ae.debounceRendering) && ((ef = ae.debounceRendering) || setTimeout)(Rs);
}
function Rs() {
  for (var e; Rs.__r = Ko.length; )
    e = Ko.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ko = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = St({}, r)).__v = r.__v + 1, p_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Dr(r), r.__h), Em(o, r), r.__e != l && $m(r)));
    });
}
function km(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || bm, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Jo(null, a, null, null, a) : Array.isArray(a) ? Jo(Si, { children: a }, null, null, null) : a.__b > 0 ? Jo(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      p_(e, a, u = u || Ds, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = xm(a, _, e) : _ = Cm(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = Dr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Mm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Tm(p[i], p[++i], p[++i]);
}
function xm(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? xm(o, t, n) : Cm(n, o, o, s, o.__e, t));
  return t;
}
function Sm(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
    Sm(n, t);
  }) : t.push(e)), t;
}
function Cm(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Ww(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ps(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ps(e, r, t[r], n[r], o);
}
function tf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ow.test(t) ? n : n + "px";
}
function Ps(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || tf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || tf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? of : nf, r) : e.removeEventListener(t, r ? of : nf, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function nf(e) {
  this.l[e.type + !1](ae.event ? ae.event(e) : e);
}
function of(e) {
  this.l[e.type + !0](ae.event ? ae.event(e) : e);
}
function p_(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = ae.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Zo(p, g), i.constructor = v, i.render = Iw), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = St({}, i.__s)), St(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = ae.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = St(St({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === Si && d.key == null ? d.props.children : d, km(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Uw(n.__e, t, n, o, s, r, l, _);
    (d = ae.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ae.__e(x, t, n);
  }
}
function Em(e, t) {
  ae.__c && ae.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ae.__e(o, n.__v);
    }
  });
}
function Uw(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && xi.call(e.childNodes), d = (h = n.props || Ds).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ww(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, km(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Dr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && wm(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && Ps(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Ps(e, "checked", f, h.checked, !1));
  }
  return e;
}
function Tm(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ae.__e(o, n);
  }
}
function Mm(e, t, n) {
  var o, s;
  if (ae.unmount && ae.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Tm(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ae.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Mm(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || wm(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Iw(e, t, n) {
  return this.constructor(e, n);
}
function Lm(e, t, n) {
  var o, s, r;
  ae.__ && ae.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], p_(t, e = (!o && n || t).__k = Ns(Si, null, [e]), s || Ds, Ds, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? xi.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), Em(r, e);
}
function Am(e, t) {
  Lm(e, t, Am);
}
function Fw(e, t, n) {
  var o, s, r, l = St({}, e.props);
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? xi.call(arguments, 2) : n), Jo(e.type, l, o || e.key, s || e.ref, null);
}
function Bw(e, t) {
  var n = { __c: t = "__cC" + vm++, __: e, Consumer: function(o, s) {
    return o.children(s);
  }, Provider: function(o) {
    var s, r;
    return this.getChildContext || (s = [], (r = {})[t] = this, this.getChildContext = function() {
      return r;
    }, this.shouldComponentUpdate = function(l) {
      this.props.value !== l.value && s.some(Ca);
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
xi = bm.slice, ae = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, gm = 0, ym = function(e) {
  return e != null && e.constructor === void 0;
}, Zo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = St({}, this.state), typeof e == "function" && (e = e(St({}, n), this.props)), e && St(n, e), e != null && this.__v && (t && this._sb.push(t), Ca(this));
}, Zo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ca(this));
}, Zo.prototype.render = Si, Ko = [], Rs.__r = 0, vm = 0;
const jw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: Zo,
  Fragment: Si,
  cloneElement: Fw,
  createContext: Bw,
  createElement: Ns,
  createRef: Hw,
  h: Ns,
  hydrate: Am,
  get isValidElement() {
    return ym;
  },
  get options() {
    return ae;
  },
  render: Lm,
  toChildArray: Sm
}, Symbol.toStringTag, { value: "Module" }));
var zw = mm.bind(Ns);
Object.assign(window, { htm: mm, html: zw, preact: jw });
let Vw = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Jr, Pt, it, Qn, eo, Zi;
const R_ = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    L(this, eo);
    L(this, Jr, void 0);
    L(this, Pt, void 0);
    L(this, it, void 0);
    L(this, Qn, void 0);
    H(this, Jr, n), H(this, Pt, `ZUI_STORE:${t ?? Vw()}`), H(this, it, n === "local" ? localStorage : sessionStorage);
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
    return this.type === "session" ? this : (b(this, Qn) || H(this, Qn, new R_(b(this, Pt), "session")), b(this, Qn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const o = b(this, it).getItem(I(this, eo, Zi).call(this, t));
    return typeof o == "string" ? JSON.parse(o) : o ?? n;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(t, n) {
    if (n == null)
      return this.remove(t);
    b(this, it).setItem(I(this, eo, Zi).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    b(this, it).removeItem(I(this, eo, Zi).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < b(this, it).length; n++) {
      const o = b(this, it).key(n);
      if (o != null && o.startsWith(b(this, Pt))) {
        const s = b(this, it).getItem(o);
        typeof s == "string" && t(o.substring(b(this, Pt).length + 1), JSON.parse(s));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const t = {};
    return this.each((n, o) => {
      t[n] = o;
    }), t;
  }
};
let Os = R_;
Jr = new WeakMap(), Pt = new WeakMap(), it = new WeakMap(), Qn = new WeakMap(), eo = new WeakSet(), Zi = function(t) {
  return `${b(this, Pt)}:${t}`;
};
const Yw = new Os("DEFAULT");
function qw(e, t = "local") {
  return new Os(e, t);
}
Object.assign(Yw, { create: qw });
var Dm, ge, Nm, Qo, rf, Rm = {}, Pm = [], Gw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Xt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Om(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ra(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Nm };
  return s == null && ge.vnode != null && ge.vnode(r), r;
}
function m_(e) {
  return e.children;
}
function er(e, t) {
  this.props = e, this.context = t;
}
function Nr(e, t) {
  if (t == null)
    return e.__ ? Nr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Nr(e) : null;
}
function Hm(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Hm(e);
  }
}
function sf(e) {
  (!e.__d && (e.__d = !0) && Qo.push(e) && !Hs.__r++ || rf !== ge.debounceRendering) && ((rf = ge.debounceRendering) || setTimeout)(Hs);
}
function Hs() {
  for (var e; Hs.__r = Qo.length; )
    e = Qo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Qo = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Xt({}, r)).__v = r.__v + 1, Fm(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Nr(r), r.__h), Kw(o, r), r.__e != l && Hm(r)));
    });
}
function Wm(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || Pm, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ra(null, a, null, null, a) : Array.isArray(a) ? ra(m_, { children: a }, null, null, null) : a.__b > 0 ? ra(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      Fm(e, a, u = u || Rm, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Um(a, _, e) : _ = Im(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = Nr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && jm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Bm(p[i], p[++i], p[++i]);
}
function Um(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Um(o, t, n) : Im(n, o, o, s, o.__e, t));
  return t;
}
function Im(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Xw(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ws(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ws(e, r, t[r], n[r], o);
}
function lf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Gw.test(t) ? n : n + "px";
}
function Ws(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || lf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || lf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? af : cf, r) : e.removeEventListener(t, r ? af : cf, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function cf(e) {
  this.l[e.type + !1](ge.event ? ge.event(e) : e);
}
function af(e) {
  this.l[e.type + !0](ge.event ? ge.event(e) : e);
}
function Fm(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = ge.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new er(p, g), i.constructor = v, i.render = Zw), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Xt({}, i.__s)), Xt(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = ge.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = Xt(Xt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === m_ && d.key == null ? d.props.children : d, Wm(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Jw(n.__e, t, n, o, s, r, l, _);
    (d = ge.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ge.__e(x, t, n);
  }
}
function Kw(e, t) {
  ge.__c && ge.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ge.__e(o, n.__v);
    }
  });
}
function Jw(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && Dm.call(e.childNodes), d = (h = n.props || Rm).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Xw(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, Wm(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Nr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Om(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && Ws(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Ws(e, "checked", f, h.checked, !1));
  }
  return e;
}
function Bm(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ge.__e(o, n);
  }
}
function jm(e, t, n) {
  var o, s;
  if (ge.unmount && ge.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Bm(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ge.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && jm(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Om(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Zw(e, t, n) {
  return this.constructor(e, n);
}
Dm = Pm.slice, ge = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Nm = 0, er.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xt({}, this.state), typeof e == "function" && (e = e(Xt({}, n), this.props)), e && Xt(n, e), e != null && this.__v && (t && this._sb.push(t), sf(this));
}, er.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), sf(this));
}, er.prototype.render = m_, Qo = [], Hs.__r = 0;
var Qw = 0;
function ia(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Qw, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ge.vnode && ge.vnode(_), _;
}
function e$(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    // r
    parseInt(e.slice(2, 4), 16),
    // g
    parseInt(e.slice(4, 6), 16)
    // b
  ];
}
function t$(e) {
  const [t, n, o] = typeof e == "string" ? e$(e) : e;
  return t * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function _f(e, t) {
  return t$(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function uf(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function n$(e, t, n) {
  e = e % 360 / 360, t = uf(t), n = uf(n);
  const o = n <= 0.5 ? n * (t + 1) : n + t - n * t, s = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? s + (o - s) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? s + (o - s) * (2 / 3 - l) * 6 : s);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function o$(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function r$(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
let i$ = class extends er {
  render() {
    const {
      className: t,
      style: n,
      size: o = "",
      circle: s,
      rounded: r,
      background: l,
      foreColor: c,
      text: _,
      code: d,
      maxTextLength: i = 2,
      src: h,
      hueDistance: u = 43,
      saturation: a = 0.4,
      lightness: f = 0.6,
      children: y,
      ...p
    } = this.props, m = ["avatar", t], g = { ...n, background: l, color: c };
    let w = 32;
    o && (typeof o == "number" ? (g.width = `${o}px`, g.height = `${o}px`, g.fontSize = `${Math.max(12, Math.round(o / 2))}px`, w = o) : (m.push(`size-${o}`), w = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), s ? m.push("circle") : r && (typeof r == "number" ? g.borderRadius = `${r}px` : m.push(`rounded-${r}`));
    let k;
    if (h)
      m.push("has-img"), k = /* @__PURE__ */ ia("img", { className: "avatar-img", src: h, alt: _ });
    else if (_ != null && _.length) {
      const M = r$(_, i);
      if (m.push("has-text", `has-text-${M.length}`), l)
        !c && l && (g.color = _f(l));
      else {
        const C = d ?? _, v = (typeof C == "number" ? C : o$(C)) * u % 360;
        if (g.background = `hsl(${v},${a * 100}%,${f * 100}%)`, !c) {
          const x = n$(v, a, f);
          g.color = _f(x);
        }
      }
      let T;
      w && w < 14 * M.length && (T = { transform: `scale(${w / (14 * M.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ ia("div", { "data-actualSize": w, className: "avatar-text", style: T, children: M });
    }
    return /* @__PURE__ */ ia(
      "div",
      {
        className: B(m),
        style: g,
        ...p,
        children: [
          k,
          y
        ]
      }
    );
  }
};
class ff extends Te {
}
D(ff, "NAME", "avatar"), D(ff, "Component", i$);
class hf extends Te {
}
D(hf, "NAME", "btngroup"), D(hf, "Component", Sp);
var Nc, re, zm, tr, df, Us = {}, Vm = [], s$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Kt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ym(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Rr(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Nc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Qi(e, l, o, s, null);
}
function Qi(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++zm };
  return s == null && re.vnode != null && re.vnode(r), r;
}
function l$() {
  return { current: null };
}
function Rc(e) {
  return e.children;
}
function nr(e, t) {
  this.props = e, this.context = t;
}
function Pr(e, t) {
  if (t == null)
    return e.__ ? Pr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Pr(e) : null;
}
function qm(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return qm(e);
  }
}
function pf(e) {
  (!e.__d && (e.__d = !0) && tr.push(e) && !Is.__r++ || df !== re.debounceRendering) && ((df = re.debounceRendering) || setTimeout)(Is);
}
function Is() {
  for (var e; Is.__r = tr.length; )
    e = tr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), tr = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Kt({}, r)).__v = r.__v + 1, g_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Pr(r), r.__h), Jm(o, r), r.__e != l && qm(r)));
    });
}
function Gm(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || Vm, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Qi(null, a, null, null, a) : Array.isArray(a) ? Qi(Rc, { children: a }, null, null, null) : a.__b > 0 ? Qi(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      g_(e, a, u = u || Us, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Xm(a, _, e) : _ = Km(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = Pr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Qm(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Zm(p[i], p[++i], p[++i]);
}
function Xm(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Xm(o, t, n) : Km(n, o, o, s, o.__e, t));
  return t;
}
function Km(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function c$(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Fs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Fs(e, r, t[r], n[r], o);
}
function mf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || s$.test(t) ? n : n + "px";
}
function Fs(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || mf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || mf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? yf : gf, r) : e.removeEventListener(t, r ? yf : gf, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function gf(e) {
  this.l[e.type + !1](re.event ? re.event(e) : e);
}
function yf(e) {
  this.l[e.type + !0](re.event ? re.event(e) : e);
}
function g_(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = re.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new nr(p, g), i.constructor = v, i.render = _$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Kt({}, i.__s)), Kt(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = re.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = Kt(Kt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === Rc && d.key == null ? d.props.children : d, Gm(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = a$(n.__e, t, n, o, s, r, l, _);
    (d = re.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), re.__e(x, t, n);
  }
}
function Jm(e, t) {
  re.__c && re.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      re.__e(o, n.__v);
    }
  });
}
function a$(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && Nc.call(e.childNodes), d = (h = n.props || Us).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (c$(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, Gm(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Pr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Ym(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && Fs(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Fs(e, "checked", f, h.checked, !1));
  }
  return e;
}
function Zm(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    re.__e(o, n);
  }
}
function Qm(e, t, n) {
  var o, s;
  if (re.unmount && re.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Zm(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        re.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Qm(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Ym(e.__e), e.__ = e.__e = e.__d = void 0;
}
function _$(e, t, n) {
  return this.constructor(e, n);
}
function u$(e, t, n) {
  var o, s, r;
  re.__ && re.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], g_(t, e = (!o && n || t).__k = Rr(Rc, null, [e]), s || Us, Us, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Nc.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), Jm(r, e);
}
Nc = Vm.slice, re = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, zm = 0, nr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof e == "function" && (e = e(Kt({}, n), this.props)), e && Kt(n, e), e != null && this.__v && (t && this._sb.push(t), pf(this));
}, nr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), pf(this));
}, nr.prototype.render = Rc, tr = [], Is.__r = 0;
var f$ = 0;
function K(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --f$, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return re.vnode && re.vnode(_), _;
}
var eg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Q = {}, h$ = {
  get exports() {
    return Q;
  },
  set exports(e) {
    Q = e;
  }
};
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(eg, function() {
    var n = 1e3, o = 6e4, s = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", d = "day", i = "week", h = "month", u = "quarter", a = "year", f = "date", y = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
      var S = ["th", "st", "nd", "rd"], $ = R % 100;
      return "[" + R + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(R, S, $) {
      var N = String(R);
      return !N || N.length >= S ? R : "" + Array(S + 1 - N.length).join($) + R;
    }, k = { s: w, z: function(R) {
      var S = -R.utcOffset(), $ = Math.abs(S), N = Math.floor($ / 60), E = $ % 60;
      return (S <= 0 ? "+" : "-") + w(N, 2, "0") + ":" + w(E, 2, "0");
    }, m: function R(S, $) {
      if (S.date() < $.date())
        return -R($, S);
      var N = 12 * ($.year() - S.year()) + ($.month() - S.month()), E = S.clone().add(N, h), O = $ - E < 0, P = S.clone().add(N + (O ? -1 : 1), h);
      return +(-(N + ($ - E) / (O ? E - P : P - E)) || 0);
    }, a: function(R) {
      return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
    }, p: function(R) {
      return { M: h, y: a, w: i, d, D: f, h: _, m: c, s: l, ms: r, Q: u }[R] || String(R || "").toLowerCase().replace(/s$/, "");
    }, u: function(R) {
      return R === void 0;
    } }, M = "en", T = {};
    T[M] = g;
    var C = function(R) {
      return R instanceof F;
    }, v = function R(S, $, N) {
      var E;
      if (!S)
        return M;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        T[O] && (E = O), $ && (T[O] = $, E = O);
        var P = S.split("-");
        if (!E && P.length > 1)
          return R(P[0]);
      } else {
        var U = S.name;
        T[U] = S, E = U;
      }
      return !N && E && (M = E), E || !N && M;
    }, x = function(R, S) {
      if (C(R))
        return R.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = R, $.args = arguments, new F($);
    }, A = k;
    A.l = v, A.i = C, A.w = function(R, S) {
      return x(R, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var F = function() {
      function R($) {
        this.$L = v($.locale, null, !0), this.parse($);
      }
      var S = R.prototype;
      return S.parse = function($) {
        this.$d = function(N) {
          var E = N.date, O = N.utc;
          if (E === null)
            return /* @__PURE__ */ new Date(NaN);
          if (A.u(E))
            return /* @__PURE__ */ new Date();
          if (E instanceof Date)
            return new Date(E);
          if (typeof E == "string" && !/Z$/i.test(E)) {
            var P = E.match(p);
            if (P) {
              var U = P[2] - 1 || 0, Y = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], U, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, Y)) : new Date(P[1], U, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, Y);
            }
          }
          return new Date(E);
        }($), this.$x = $.x || {}, this.init();
      }, S.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, S.$utils = function() {
        return A;
      }, S.isValid = function() {
        return this.$d.toString() !== y;
      }, S.isSame = function($, N) {
        var E = x($);
        return this.startOf(N) <= E && E <= this.endOf(N);
      }, S.isAfter = function($, N) {
        return x($) < this.startOf(N);
      }, S.isBefore = function($, N) {
        return this.endOf(N) < x($);
      }, S.$g = function($, N, E) {
        return A.u($) ? this[N] : this.set(E, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, N) {
        var E = this, O = !!A.u(N) || N, P = A.p($), U = function(le, X) {
          var ce = A.w(E.$u ? Date.UTC(E.$y, X, le) : new Date(E.$y, X, le), E);
          return O ? ce : ce.endOf(d);
        }, Y = function(le, X) {
          return A.w(E.toDate()[le].apply(E.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), E);
        }, V = this.$W, J = this.$M, ke = this.$D, z = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? U(1, 0) : U(31, 11);
          case h:
            return O ? U(1, J) : U(0, J + 1);
          case i:
            var Z = this.$locale().weekStart || 0, $e = (V < Z ? V + 7 : V) - Z;
            return U(O ? ke - $e : ke + (6 - $e), J);
          case d:
          case f:
            return Y(z + "Hours", 0);
          case _:
            return Y(z + "Minutes", 1);
          case c:
            return Y(z + "Seconds", 2);
          case l:
            return Y(z + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function($) {
        return this.startOf($, !1);
      }, S.$set = function($, N) {
        var E, O = A.p($), P = "set" + (this.$u ? "UTC" : ""), U = (E = {}, E[d] = P + "Date", E[f] = P + "Date", E[h] = P + "Month", E[a] = P + "FullYear", E[_] = P + "Hours", E[c] = P + "Minutes", E[l] = P + "Seconds", E[r] = P + "Milliseconds", E)[O], Y = O === d ? this.$D + (N - this.$W) : N;
        if (O === h || O === a) {
          var V = this.clone().set(f, 1);
          V.$d[U](Y), V.init(), this.$d = V.set(f, Math.min(this.$D, V.daysInMonth())).$d;
        } else
          U && this.$d[U](Y);
        return this.init(), this;
      }, S.set = function($, N) {
        return this.clone().$set($, N);
      }, S.get = function($) {
        return this[A.p($)]();
      }, S.add = function($, N) {
        var E, O = this;
        $ = Number($);
        var P = A.p(N), U = function(J) {
          var ke = x(O);
          return A.w(ke.date(ke.date() + Math.round(J * $)), O);
        };
        if (P === h)
          return this.set(h, this.$M + $);
        if (P === a)
          return this.set(a, this.$y + $);
        if (P === d)
          return U(1);
        if (P === i)
          return U(7);
        var Y = (E = {}, E[c] = o, E[_] = s, E[l] = n, E)[P] || 1, V = this.$d.getTime() + $ * Y;
        return A.w(V, this);
      }, S.subtract = function($, N) {
        return this.add(-1 * $, N);
      }, S.format = function($) {
        var N = this, E = this.$locale();
        if (!this.isValid())
          return E.invalidDate || y;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = A.z(this), U = this.$H, Y = this.$m, V = this.$M, J = E.weekdays, ke = E.months, z = function(X, ce, Re, Pe) {
          return X && (X[ce] || X(N, O)) || Re[ce].slice(0, Pe);
        }, Z = function(X) {
          return A.s(U % 12 || 12, X, "0");
        }, $e = E.meridiem || function(X, ce, Re) {
          var Pe = X < 12 ? "AM" : "PM";
          return Re ? Pe.toLowerCase() : Pe;
        }, le = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: V + 1, MM: A.s(V + 1, 2, "0"), MMM: z(E.monthsShort, V, ke, 3), MMMM: z(ke, V), D: this.$D, DD: A.s(this.$D, 2, "0"), d: String(this.$W), dd: z(E.weekdaysMin, this.$W, J, 2), ddd: z(E.weekdaysShort, this.$W, J, 3), dddd: J[this.$W], H: String(U), HH: A.s(U, 2, "0"), h: Z(1), hh: Z(2), a: $e(U, Y, !0), A: $e(U, Y, !1), m: String(Y), mm: A.s(Y, 2, "0"), s: String(this.$s), ss: A.s(this.$s, 2, "0"), SSS: A.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(X, ce) {
          return ce || le[X] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, N, E) {
        var O, P = A.p(N), U = x($), Y = (U.utcOffset() - this.utcOffset()) * o, V = this - U, J = A.m(this, U);
        return J = (O = {}, O[a] = J / 12, O[h] = J, O[u] = J / 3, O[i] = (V - Y) / 6048e5, O[d] = (V - Y) / 864e5, O[_] = V / s, O[c] = V / o, O[l] = V / n, O)[P] || V, E ? J : A.a(J);
      }, S.daysInMonth = function() {
        return this.endOf(h).$D;
      }, S.$locale = function() {
        return T[this.$L];
      }, S.locale = function($, N) {
        if (!$)
          return this.$L;
        var E = this.clone(), O = v($, N, !0);
        return O && (E.$L = O), E;
      }, S.clone = function() {
        return A.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, R;
    }(), j = F.prototype;
    return x.prototype = j, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", d], ["$M", h], ["$y", a], ["$D", f]].forEach(function(R) {
      j[R[1]] = function(S) {
        return this.$g(S, R[0], R[1]);
      };
    }), x.extend = function(R, S) {
      return R.$i || (R(S, F, x), R.$i = !0), x;
    }, x.locale = v, x.isDayjs = C, x.unix = function(R) {
      return x(1e3 * R);
    }, x.en = T[M], x.Ls = T, x.p = {}, x;
  });
})(h$);
const Ea = (e = 0, t = 0) => {
  const n = [];
  for (let o = e; o <= t; o++)
    n.push(o);
  return n;
}, tg = (e, t) => {
  const n = Math.ceil(e.length / t);
  return new Array(t).fill({}).map((o, s) => e.slice(s * n, (s + 1) * n));
}, d$ = (e) => {
  const { format: t, minDate: n, maxDate: o, tagDate: s, DATEROWCOUNT: r, showOtherMonth: l, clickDay: c, selectedDate: _, handleChangePanel: d, showToday: i, handleChange: h, clickToday: u } = e, a = (A) => Q(A).isValid() ? Q(A).add(1, "months").format(t) : "", f = (A) => Q(A).isValid() ? Q(A).subtract(1, "months").format(t) : "", y = () => {
    const A = f(_);
    h(A, !1);
  }, p = () => {
    const A = a(_);
    h(A, !1);
  }, m = () => {
    h("", !0);
  }, g = () => {
    h(_, !0);
  }, w = (A, F, j, R) => {
    const S = Q(), $ = Q(_), N = new Array(A);
    for (let E = 0; E < A; E++) {
      const O = F + E + 1, P = j.set("date", O), U = R && !l ? !0 : n && P.isBefore(n, "date") || o && P.isAfter(o, "date");
      N[E] = {
        isSelected: $.isSame(j.set("date", O), "date"),
        isToday: S.isSame(P, "date"),
        isDisable: !!U,
        isTag: !!(s != null && s.includes(P.format(t))),
        date: P,
        isOtherMonth: R,
        onClick: () => U ? {} : c(P)
      };
    }
    return N;
  }, k = () => {
    const A = Q(_), F = Q(), j = _ ? A : F, R = j.set("date", 1).day(), S = R === 0 ? 6 : R - 1, $ = j.subtract(1, "month"), E = Number($.endOf("month").get("date")) - S;
    return w(S, E, $, !0);
  }, M = () => {
    const A = Q(_), F = Q(), j = _ ? A : F, R = j.set("date", 1).day(), S = R === 0 ? 6 : R - 1, $ = j.endOf("month").get("date"), N = j.add(1, "month"), E = 7 * 6 % (S + $);
    return w(E, 0, N, !0);
  }, T = () => {
    const A = _, F = Q(), j = _ ? Q(A) : F, R = j.endOf("month").get("date"), S = w(R, 0, j, !1), $ = k(), N = M(), E = [...$, ...S, ...N];
    return tg(E, r);
  }, C = ["一", "二", "三", "四", "五", "六", "日"], v = T(), x = _ || Q().format(t);
  return /* @__PURE__ */ K("div", { className: B("datepicker-calendar-day"), children: [
    /* @__PURE__ */ K("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ K("div", { class: "flex", children: /* @__PURE__ */ K("button", { type: "button", className: "btn ghost", onClick: () => d("year"), children: [
        /* @__PURE__ */ K("span", { children: Q(x).format("YYYY 年 MM 月") }),
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
      /* @__PURE__ */ K("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ K("tr", { children: C.map((A, F) => /* @__PURE__ */ K("th", { children: A }, F)) }) }),
      /* @__PURE__ */ K("tbody", { className: "datepicker-calendar-tbody", children: v.map((A, F) => /* @__PURE__ */ K("tr", { children: A.map((j, R) => {
        const S = ["text-center"];
        return j.isToday && S.push("datepicker-calendar-today"), j.isSelected && S.push("datepicker-calendar-selected-date"), j.isOtherMonth && S.push("datepicker-calendar-other-month"), j.isTag && S.push("datepicker-calendar-tag"), /* @__PURE__ */ K("td", { className: B(S), children: /* @__PURE__ */ K("div", { className: B("btn", "ghost", "datepicker-calendar-date", j.isDisable ? "disabled" : ""), onClick: j.onClick, children: !l && j.isOtherMonth ? "" : Q(j.date).format("DD") }) }, R);
      }) }, F)) })
    ] }),
    /* @__PURE__ */ K("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ K("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ K("span", { children: "清除" }) }),
      /* @__PURE__ */ K("button", { type: "button", className: "btn ghost text-primary", onClick: g, children: /* @__PURE__ */ K("span", { children: "确认" }) })
    ] })
  ] });
};
const p$ = (e) => {
  const { format: t, selectedDate: n, minDate: o, maxDate: s, year: r, handleChangeMonth: l } = e, c = Q(o).format("M"), _ = Q(s).format("M"), d = tg(Ea(1, 12), 3), i = (h, u) => {
    u || l(h);
  };
  return /* @__PURE__ */ K("div", { className: B("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ K("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ K("tbody", { className: "datepicker-calendar-month-table-body", children: d.map((h, u) => /* @__PURE__ */ K("tr", { children: h.map((a, f) => {
    const y = ["text-center"], p = Q(`${r}-${a}-01`).format(t), m = !!(c && Q(n).isBefore(c) || _ && Q(n).isBefore(_));
    return /* @__PURE__ */ K("td", { className: B(y), children: /* @__PURE__ */ K("div", { className: B("btn", "size-sm", "ghost", "datepicker-calendar-month", m ? "disabled" : ""), onClick: () => {
      i(p, m);
    }, children: [
      Q(p).format("MM"),
      " 月"
    ] }) }, f);
  }) }, u)) }) }) });
}, m$ = (e) => {
  const { selectedDate: t, handleChangeMonth: n } = e;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = Q(t).year(), s = [...Ea(o - 100, o), ...Ea(o + 1, o + 100)], r = (l, c) => {
    var i, h, u;
    if (!(l != null && l.target))
      return;
    const _ = document.querySelectorAll(".datepicker-accordion > ul > li > .datepicker-accordion-title");
    for (let a = 0; a < _.length; a++)
      (i = _[a].nextElementSibling) != null && i.classList.contains("hidden") || (h = _[a].nextElementSibling) == null || h.classList.add("hidden");
    (u = l.target.nextElementSibling) == null || u.classList.toggle("hidden");
    const d = document.querySelector(".datepicker-accordion");
    d && (d.scrollTop + d.clientHeight === d.scrollHeight ? d.scrollTop = 0 : c < o ? d.scrollTop = d.scrollTop - 30 : d.scrollTop = d.scrollTop + 30);
  };
  return /* @__PURE__ */ K("div", { class: "datepicker-accordion scroll-smooth not-hide-datepicker", children: /* @__PURE__ */ K("ul", { children: s.map((l, c) => /* @__PURE__ */ K("li", { id: o === l ? "selected" : "", children: [
    /* @__PURE__ */ K("div", { class: "datepicker-accordion-title", onClick: (_) => r(_, l), children: l }),
    /* @__PURE__ */ K("div", { className: B("datepicker-accordion-content", o === l ? "" : "hidden"), children: Rr(p$, {
      ...e,
      year: l.toString(),
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class g$ extends nr {
  constructor() {
    super(...arguments);
    D(this, "DATEROWCOUNT", 6);
    D(this, "ref", l$());
    D(this, "state", {
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
    return this.state.type === "day" ? Rr(d$, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : Rr(m$, {
      ...this.props,
      selectedDate: this.state.selectedDate,
      handleChangeMonth: this.handleChangeMonth.bind(this)
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ K("div", { className: B("datepicker-calendar", n), ref: this.ref, children: this.renderPanel() });
  }
}
function Ci(e) {
  return e.split("-")[1];
}
function y_(e) {
  return e === "y" ? "height" : "width";
}
function Hn(e) {
  return e.split("-")[0];
}
function Pc(e) {
  return ["top", "bottom"].includes(Hn(e)) ? "x" : "y";
}
function vf(e, t, n) {
  let { reference: o, floating: s } = e;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Pc(t), _ = y_(c), d = o[_] / 2 - s[_] / 2, i = c === "x";
  let h;
  switch (Hn(t)) {
    case "top":
      h = { x: r, y: o.y - s.height };
      break;
    case "bottom":
      h = { x: r, y: o.y + o.height };
      break;
    case "right":
      h = { x: o.x + o.width, y: l };
      break;
    case "left":
      h = { x: o.x - s.width, y: l };
      break;
    default:
      h = { x: o.x, y: o.y };
  }
  switch (Ci(t)) {
    case "start":
      h[c] -= d * (n && i ? -1 : 1);
      break;
    case "end":
      h[c] += d * (n && i ? -1 : 1);
  }
  return h;
}
const y$ = async (e, t, n) => {
  const { placement: o = "bottom", strategy: s = "absolute", middleware: r = [], platform: l } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({ reference: e, floating: t, strategy: s }), { x: i, y: h } = vf(d, o, _), u = o, a = {}, f = 0;
  for (let y = 0; y < c.length; y++) {
    const { name: p, fn: m } = c[y], { x: g, y: w, data: k, reset: M } = await m({ x: i, y: h, initialPlacement: o, placement: u, strategy: s, middlewareData: a, rects: d, platform: l, elements: { reference: e, floating: t } });
    i = g ?? i, h = w ?? h, a = { ...a, [p]: { ...a[p], ...k } }, M && f <= 50 && (f++, typeof M == "object" && (M.placement && (u = M.placement), M.rects && (d = M.rects === !0 ? await l.getElementRects({ reference: e, floating: t, strategy: s }) : M.rects), { x: i, y: h } = vf(d, u, _)), y = -1);
  }
  return { x: i, y: h, placement: u, strategy: s, middlewareData: a };
};
function ng(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Bs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function v$(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: s, platform: r, rects: l, elements: c, strategy: _ } = e, { boundary: d = "clippingAncestors", rootBoundary: i = "viewport", elementContext: h = "floating", altBoundary: u = !1, padding: a = 0 } = t, f = ng(a), y = c[u ? h === "floating" ? "reference" : "floating" : h], p = Bs(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)), boundary: d, rootBoundary: i, strategy: _ })), m = h === "floating" ? { ...l.floating, x: o, y: s } : l.reference, g = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), w = await (r.isElement == null ? void 0 : r.isElement(g)) && await (r.getScale == null ? void 0 : r.getScale(g)) || { x: 1, y: 1 }, k = Bs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: g, strategy: _ }) : m);
  return { top: (p.top - k.top + f.top) / w.y, bottom: (k.bottom - p.bottom + f.bottom) / w.y, left: (p.left - k.left + f.left) / w.x, right: (k.right - p.right + f.right) / w.x };
}
const b$ = Math.min, w$ = Math.max;
function $$(e, t, n) {
  return w$(e, b$(t, n));
}
const k$ = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: o = 0 } = e || {}, { x: s, y: r, placement: l, rects: c, platform: _ } = t;
  if (n == null)
    return {};
  const d = ng(o), i = { x: s, y: r }, h = Pc(l), u = y_(h), a = await _.getDimensions(n), f = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[h] - i[h] - c.floating[u], m = i[h] - c.reference[h], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
  let w = g ? h === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
  w === 0 && (w = c.floating[u]);
  const k = p / 2 - m / 2, M = d[f], T = w - a[u] - d[y], C = w / 2 - a[u] / 2 + k, v = $$(M, C, T), x = Ci(l) != null && C != v && c.reference[u] / 2 - (C < M ? d[f] : d[y]) - a[u] / 2 < 0;
  return { [h]: i[h] - (x ? C < M ? M - C : T - C : 0), data: { [h]: v, centerOffset: C - v } };
} }), x$ = ["top", "right", "bottom", "left"];
x$.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const S$ = { left: "right", right: "left", bottom: "top", top: "bottom" };
function js(e) {
  return e.replace(/left|right|bottom|top/g, (t) => S$[t]);
}
function C$(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ci(e), s = Pc(e), r = y_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = js(l)), { main: l, cross: js(l) };
}
const E$ = { start: "end", end: "start" };
function sa(e) {
  return e.replace(/start|end/g, (t) => E$[t]);
}
const T$ = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: o, middlewareData: s, rects: r, initialPlacement: l, platform: c, elements: _ } = t, { mainAxis: d = !0, crossAxis: i = !0, fallbackPlacements: h, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: a = "none", flipAlignment: f = !0, ...y } = e, p = Hn(o), m = Hn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = h || (m || !f ? [js(l)] : function(A) {
      const F = js(A);
      return [sa(A), F, sa(F)];
    }(l));
    h || a === "none" || w.push(...function(A, F, j, R) {
      const S = Ci(A);
      let $ = function(N, E, O) {
        const P = ["left", "right"], U = ["right", "left"], Y = ["top", "bottom"], V = ["bottom", "top"];
        switch (N) {
          case "top":
          case "bottom":
            return O ? E ? U : P : E ? P : U;
          case "left":
          case "right":
            return E ? Y : V;
          default:
            return [];
        }
      }(Hn(A), j === "start", R);
      return S && ($ = $.map((N) => N + "-" + S), F && ($ = $.concat($.map(sa)))), $;
    }(l, f, a, g));
    const k = [l, ...w], M = await v$(t, y), T = [];
    let C = ((n = s.flip) == null ? void 0 : n.overflows) || [];
    if (d && T.push(M[p]), i) {
      const { main: A, cross: F } = C$(o, r, g);
      T.push(M[A], M[F]);
    }
    if (C = [...C, { placement: o, overflows: T }], !T.every((A) => A <= 0)) {
      var v;
      const A = (((v = s.flip) == null ? void 0 : v.index) || 0) + 1, F = k[A];
      if (F)
        return { data: { index: A, overflows: C }, reset: { placement: F } };
      let j = "bottom";
      switch (u) {
        case "bestFit": {
          var x;
          const R = (x = C.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, N) => $ + N, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
          R && (j = R);
          break;
        }
        case "initialPlacement":
          j = l;
      }
      if (o !== j)
        return { reset: { placement: j } };
    }
    return {};
  } };
}, M$ = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: o } = t, s = await async function(r, l) {
      const { placement: c, platform: _, elements: d } = r, i = await (_.isRTL == null ? void 0 : _.isRTL(d.floating)), h = Hn(c), u = Ci(c), a = Pc(c) === "x", f = ["left", "top"].includes(h) ? -1 : 1, y = i && a ? -1 : 1, p = typeof l == "function" ? l(r) : l;
      let { mainAxis: m, crossAxis: g, alignmentAxis: w } = typeof p == "number" ? { mainAxis: p, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p };
      return u && typeof w == "number" && (g = u === "end" ? -1 * w : w), a ? { x: g * y, y: m * f } : { x: m * f, y: g * y };
    }(t, e);
    return { x: n + s.x, y: o + s.y, data: s };
  } };
};
function Ge(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ut(e) {
  return Ge(e).getComputedStyle(e);
}
function un(e) {
  return rg(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Oi;
function og() {
  if (Oi)
    return Oi;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Oi = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Oi) : navigator.userAgent;
}
function Mt(e) {
  return e instanceof Ge(e).HTMLElement;
}
function et(e) {
  return e instanceof Ge(e).Element;
}
function rg(e) {
  return e instanceof Ge(e).Node;
}
function bf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Ge(e).ShadowRoot || e instanceof ShadowRoot;
}
function Oc(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: s } = ut(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function L$(e) {
  return ["table", "td", "th"].includes(un(e));
}
function Ta(e) {
  const t = /firefox/i.test(og()), n = ut(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!o && o !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some((s) => {
    const r = n.contain;
    return r != null && r.includes(s);
  });
}
function ig() {
  return !/^((?!chrome|android).)*safari/i.test(og());
}
function v_(e) {
  return ["html", "body", "#document"].includes(un(e));
}
const wf = Math.min, or = Math.max, zs = Math.round;
function sg(e) {
  const t = ut(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const s = e.offsetWidth, r = e.offsetHeight, l = zs(n) !== s || zs(o) !== r;
  return l && (n = s, o = r), { width: n, height: o, fallback: l };
}
function lg(e) {
  return et(e) ? e : e.contextElement;
}
const cg = { x: 1, y: 1 };
function Wn(e) {
  const t = lg(e);
  if (!Mt(t))
    return cg;
  const n = t.getBoundingClientRect(), { width: o, height: s, fallback: r } = sg(t);
  let l = (r ? zs(n.width) : n.width) / o, c = (r ? zs(n.height) : n.height) / s;
  return l && Number.isFinite(l) || (l = 1), c && Number.isFinite(c) || (c = 1), { x: l, y: c };
}
function Mn(e, t, n, o) {
  var s, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = lg(e);
  let _ = cg;
  t && (o ? et(o) && (_ = Wn(o)) : _ = Wn(e));
  const d = c ? Ge(c) : window, i = !ig() && n;
  let h = (l.left + (i && ((s = d.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const y = Ge(c), p = o && et(o) ? Ge(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
      const g = Wn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, h *= g.x, u *= g.y, a *= g.x, f *= g.y, h += w.x, u += w.y, m = Ge(m).frameElement;
    }
  }
  return { width: a, height: f, top: u, right: h + a, bottom: u + f, left: h, x: h, y: u };
}
function rn(e) {
  return ((rg(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Hc(e) {
  return et(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ag(e) {
  return Mn(rn(e)).left + Hc(e).scrollLeft;
}
function A$(e, t, n) {
  const o = Mt(t), s = rn(t), r = Mn(e, !0, n === "fixed", t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (o || !o && n !== "fixed")
    if ((un(t) !== "body" || Oc(s)) && (l = Hc(t)), Mt(t)) {
      const _ = Mn(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      s && (c.x = ag(s));
  return { x: r.left + l.scrollLeft - c.x, y: r.top + l.scrollTop - c.y, width: r.width, height: r.height };
}
function Or(e) {
  if (un(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (bf(e) ? e.host : null) || rn(e);
  return bf(t) ? t.host : t;
}
function $f(e) {
  return Mt(e) && ut(e).position !== "fixed" ? e.offsetParent : null;
}
function kf(e) {
  const t = Ge(e);
  let n = $f(e);
  for (; n && L$(n) && ut(n).position === "static"; )
    n = $f(n);
  return n && (un(n) === "html" || un(n) === "body" && ut(n).position === "static" && !Ta(n)) ? t : n || function(o) {
    let s = Or(o);
    for (; Mt(s) && !v_(s); ) {
      if (Ta(s))
        return s;
      s = Or(s);
    }
    return null;
  }(e) || t;
}
function _g(e) {
  const t = Or(e);
  return v_(t) ? e.ownerDocument.body : Mt(t) && Oc(t) ? t : _g(t);
}
function rr(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = _g(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ge(o);
  return s ? t.concat(r, r.visualViewport || [], Oc(o) ? o : []) : t.concat(o, rr(o));
}
function xf(e, t, n) {
  return t === "viewport" ? Bs(function(o, s) {
    const r = Ge(o), l = rn(o), c = r.visualViewport;
    let _ = l.clientWidth, d = l.clientHeight, i = 0, h = 0;
    if (c) {
      _ = c.width, d = c.height;
      const u = ig();
      (u || !u && s === "fixed") && (i = c.offsetLeft, h = c.offsetTop);
    }
    return { width: _, height: d, x: i, y: h };
  }(e, n)) : et(t) ? function(o, s) {
    const r = Mn(o, !0, s === "fixed"), l = r.top + o.clientTop, c = r.left + o.clientLeft, _ = Mt(o) ? Wn(o) : { x: 1, y: 1 }, d = o.clientWidth * _.x, i = o.clientHeight * _.y, h = c * _.x, u = l * _.y;
    return { top: u, left: h, right: h + d, bottom: u + i, x: h, y: u, width: d, height: i };
  }(t, n) : Bs(function(o) {
    var s;
    const r = rn(o), l = Hc(o), c = (s = o.ownerDocument) == null ? void 0 : s.body, _ = or(r.scrollWidth, r.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0), d = or(r.scrollHeight, r.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0);
    let i = -l.scrollLeft + ag(o);
    const h = -l.scrollTop;
    return ut(c || r).direction === "rtl" && (i += or(r.clientWidth, c ? c.clientWidth : 0) - _), { width: _, height: d, x: i, y: h };
  }(rn(e)));
}
const D$ = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: s } = e;
  const r = n === "clippingAncestors" ? function(d, i) {
    const h = i.get(d);
    if (h)
      return h;
    let u = rr(d).filter((p) => et(p) && un(p) !== "body"), a = null;
    const f = ut(d).position === "fixed";
    let y = f ? Or(d) : d;
    for (; et(y) && !v_(y); ) {
      const p = ut(y), m = Ta(y);
      (f ? m || a : m || p.position !== "static" || !a || !["absolute", "fixed"].includes(a.position)) ? a = p : u = u.filter((g) => g !== y), y = Or(y);
    }
    return i.set(d, u), u;
  }(t, this._c) : [].concat(n), l = [...r, o], c = l[0], _ = l.reduce((d, i) => {
    const h = xf(t, i, s);
    return d.top = or(h.top, d.top), d.right = wf(h.right, d.right), d.bottom = wf(h.bottom, d.bottom), d.left = or(h.left, d.left), d;
  }, xf(t, c, s));
  return { width: _.right - _.left, height: _.bottom - _.top, x: _.left, y: _.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: o } = e;
  const s = Mt(n), r = rn(n);
  if (n === r)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const _ = { x: 0, y: 0 };
  if ((s || !s && o !== "fixed") && ((un(n) !== "body" || Oc(r)) && (l = Hc(n)), Mt(n))) {
    const d = Mn(n);
    c = Wn(n), _.x = d.x + n.clientLeft, _.y = d.y + n.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - l.scrollLeft * c.x + _.x, y: t.y * c.y - l.scrollTop * c.y + _.y };
}, isElement: et, getDimensions: function(e) {
  return sg(e);
}, getOffsetParent: kf, getDocumentElement: rn, getScale: Wn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: o } = e;
  const s = this.getOffsetParent || kf, r = this.getDimensions;
  return { reference: A$(t, await s(n), o), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ut(e).direction === "rtl" };
function N$(e, t, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: s = !0, ancestorResize: r = !0, elementResize: l = !0, animationFrame: c = !1 } = o, _ = s && !c, d = _ || r ? [...et(e) ? rr(e) : e.contextElement ? rr(e.contextElement) : [], ...rr(t)] : [];
  d.forEach((a) => {
    _ && a.addEventListener("scroll", n, { passive: !0 }), r && a.addEventListener("resize", n);
  });
  let i, h = null;
  if (l) {
    let a = !0;
    h = new ResizeObserver(() => {
      a || n(), a = !1;
    }), et(e) && !c && h.observe(e), et(e) || !e.contextElement || c || h.observe(e.contextElement), h.observe(t);
  }
  let u = c ? Mn(e) : null;
  return c && function a() {
    const f = Mn(e);
    !u || f.x === u.x && f.y === u.y && f.width === u.width && f.height === u.height || n(), u = f, i = requestAnimationFrame(a);
  }(), n(), () => {
    var a;
    d.forEach((f) => {
      _ && f.removeEventListener("scroll", n), r && f.removeEventListener("resize", n);
    }), (a = h) == null || a.disconnect(), h = null, c && cancelAnimationFrame(i);
  };
}
const R$ = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = { platform: D$, ...n }, r = { ...s.platform, _c: o };
  return y$(e, t, { ...s, platform: r });
};
var to, no, Me, wn, Zr, Qr, ei, Ma, wl, ug, $l, fg, kl, hg, xl, dg, Sl, pg, Cl, mg, El, gg, Tl;
const mn = class extends ot {
  constructor() {
    super(...arguments);
    L(this, ei);
    L(this, wl);
    L(this, $l);
    L(this, kl);
    L(this, xl);
    L(this, Sl);
    L(this, Cl);
    L(this, El);
    L(this, to, void 0);
    L(this, no, 0);
    L(this, Me, void 0);
    L(this, wn, void 0);
    L(this, Zr, void 0);
    L(this, Qr, void 0);
    D(this, "hideLater", () => {
      b(this, Tl).call(this), H(this, no, window.setTimeout(this.hide.bind(this), 100));
    });
    L(this, Tl, () => {
      clearTimeout(b(this, no)), H(this, no, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, wn)) == null ? void 0 : n.classList.contains(mn.CLASS_SHOW);
  }
  get datepicker() {
    return b(this, wn) || I(this, $l, fg).call(this);
  }
  get trigger() {
    return b(this, Zr) || this.element;
  }
  get elementShowClass() {
    return `with-${mn.NAME}-show`;
  }
  show(n) {
    return H(this, Zr, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(mn.CLASS_SHOW), this.datepicker.classList.add("fade"), I(this, Cl, mg).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = b(this, Qr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = b(this, wn)) == null || o.classList.remove(mn.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  static clear(n) {
    var _, d;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-datepicker" } = n || {};
    if (o && r && ((d = (_ = o.target).closest) != null && d.call(_, r)))
      return;
    const l = this.getAll().entries(), c = new Set(s || []);
    for (const [i, h] of l)
      c.has(i) || h.hide();
  }
};
let je = mn;
to = new WeakMap(), no = new WeakMap(), Me = new WeakMap(), wn = new WeakMap(), Zr = new WeakMap(), Qr = new WeakMap(), ei = new WeakSet(), Ma = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, wl = new WeakSet(), ug = function() {
  const n = I(this, ei, Ma).call(this);
  return H(this, Me, document.createElement("div")), b(this, Me).style.position = "absolute", b(this, Me).style.width = `${n}px`, b(this, Me).style.height = `${n}px`, b(this, Me).style.transform = "rotate(45deg)", b(this, Me);
}, $l = new WeakSet(), fg = function() {
  const n = mn.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), u$(Rr(g$, { ...this.options }), o), this.options.arrow && o.append(I(this, wl, ug).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, wn, o), o;
}, kl = new WeakSet(), hg = function() {
  var l;
  const n = I(this, ei, Ma).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [M$(n), T$()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && b(this, Me) && ((l = r.middleware) == null || l.push(k$({ element: b(this, Me) }))), r;
}, xl = new WeakSet(), dg = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Sl = new WeakSet(), pg = function(n) {
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
}, Cl = new WeakSet(), mg = function() {
  const n = I(this, kl, hg).call(this), o = I(this, El, gg).call(this);
  H(this, Qr, N$(o, this.datepicker, () => {
    R$(o, this.datepicker, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.datepicker.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], d = I(this, xl, dg).call(this, _);
      if (l.arrow && b(this, Me)) {
        const { x: i, y: h } = l.arrow;
        Object.assign(b(this, Me).style, {
          left: i != null ? `${i}px` : "",
          top: h != null ? `${h}px` : "",
          [d]: `${-b(this, Me).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...I(this, Sl, pg).call(this, _)
        });
      }
    });
  }));
}, El = new WeakSet(), gg = function() {
  return b(this, to) || H(this, to, {
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
  }), b(this, to);
}, Tl = new WeakMap(), D(je, "NAME", "datepicker"), D(je, "CLASSNAME", "datepicker"), D(je, "CLASS_SHOW", "show"), D(je, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), D(je, "DEFAULT", {
  date: Q().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(e) {
  var s, r;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, je.MENU_SELECTOR), o = (r = t.closest) == null ? void 0 : r.call(t, ".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? je.ensure(n).toggle() : o || je.clear({ event: e });
});
const P$ = (e) => {
  var o;
  const t = document.getElementsByClassName("with-datepicker-show")[0];
  if (!t)
    return;
  const n = (o = t.closest) == null ? void 0 : o.call(t, je.MENU_SELECTOR);
  !n || !e.target.contains(n) || je.clear({ event: e });
};
window.addEventListener("scroll", P$, !0);
function yg(e, t, n) {
  if (n) {
    e.setAttribute("class", B(t));
    return;
  }
  $c(e.getAttribute("class"), t).forEach(([o, s]) => {
    e.classList.toggle(o, s);
  });
}
function Eo(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([o, s]) => {
      Eo(e, o, s);
    });
  n !== void 0 && (e.style[t] = typeof n == "number" ? `${n}px` : n);
}
function Vs(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([o, s]) => {
      Vs(e, o, s);
    });
  n !== void 0 && (n === null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
var $n, ti, Ot, Ml, oo, es;
const gt = class extends ot {
  constructor() {
    super(...arguments);
    L(this, oo);
    L(this, $n, 0);
    L(this, ti, void 0);
    L(this, Ot, void 0);
    L(this, Ml, (n) => {
      const o = n.target;
      (o.closest(gt.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(gt.CLASS_SHOW);
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
          (!b(this, Ot) || b(this, Ot)[0] !== s || b(this, Ot)[1] !== r) && (H(this, Ot, [s, r]), this.layout());
        });
        o.observe(n), H(this, ti, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = b(this, ti)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: s, backdrop: r, className: l, style: c } = this.options;
    return yg(o, [{
      "modal-trans": s,
      "modal-no-backdrop": !r
    }, gt.CLASS_SHOW, l]), Eo(o, {
      zIndex: `${gt.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), I(this, oo, es).call(this, () => {
      o.classList.add(gt.CLASS_SHOWN), I(this, oo, es).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(gt.CLASS_SHOWN), this.emit("hide", this), I(this, oo, es).call(this, () => {
      this.modalElement.classList.remove(gt.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    o = o ?? this.options.size, Vs(s, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? Vs(s, "data-size", o) : o && (r.width = o), Eo(s, r), n = n ?? this.options.position ?? "fit";
    const l = s.clientWidth, c = s.clientHeight;
    H(this, Ot, [l, c]), typeof n == "function" && (n = n({ width: l, height: c }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), Eo(s, _), Eo(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Oe = gt;
$n = new WeakMap(), ti = new WeakMap(), Ot = new WeakMap(), Ml = new WeakMap(), oo = new WeakSet(), es = function(n, o) {
  b(this, $n) && (clearTimeout(b(this, $n)), H(this, $n, 0)), n && (this.options.animation ? H(this, $n, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, D(Oe, "NAME", "Modal"), D(Oe, "EVENTS", !0), D(Oe, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), D(Oe, "CLASS_SHOW", "show"), D(Oe, "CLASS_SHOWN", "in"), D(Oe, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), D(Oe, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Oe.all.forEach((e) => {
    const t = e;
    t.isShown && t.options.responsive && t.layout();
  });
});
var Wc, ie, vg, To, ir, Sf, Ys = {}, bg = [], O$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Jt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function wg(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function H$(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Wc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return ts(e, l, o, s, null);
}
function ts(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++vg };
  return s == null && ie.vnode != null && ie.vnode(r), r;
}
function W$() {
  return { current: null };
}
function Uc(e) {
  return e.children;
}
function Un(e, t) {
  this.props = e, this.context = t;
}
function Hr(e, t) {
  if (t == null)
    return e.__ ? Hr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Hr(e) : null;
}
function $g(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return $g(e);
  }
}
function Cf(e) {
  (!e.__d && (e.__d = !0) && ir.push(e) && !qs.__r++ || Sf !== ie.debounceRendering) && ((Sf = ie.debounceRendering) || setTimeout)(qs);
}
function qs() {
  for (var e; qs.__r = ir.length; )
    e = ir.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), ir = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Jt({}, r)).__v = r.__v + 1, b_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Hr(r), r.__h), Cg(o, r), r.__e != l && $g(r)));
    });
}
function kg(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || bg, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ts(null, a, null, null, a) : Array.isArray(a) ? ts(Uc, { children: a }, null, null, null) : a.__b > 0 ? ts(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      b_(e, a, u = u || Ys, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = xg(a, _, e) : _ = Sg(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = Hr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Tg(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Eg(p[i], p[++i], p[++i]);
}
function xg(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? xg(o, t, n) : Sg(n, o, o, s, o.__e, t));
  return t;
}
function Sg(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function U$(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Gs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Gs(e, r, t[r], n[r], o);
}
function Ef(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || O$.test(t) ? n : n + "px";
}
function Gs(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Ef(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ef(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Mf : Tf, r) : e.removeEventListener(t, r ? Mf : Tf, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Tf(e) {
  this.l[e.type + !1](ie.event ? ie.event(e) : e);
}
function Mf(e) {
  this.l[e.type + !0](ie.event ? ie.event(e) : e);
}
function b_(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = ie.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new Un(p, g), i.constructor = v, i.render = F$), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Jt({}, i.__s)), Jt(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = ie.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = Jt(Jt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === Uc && d.key == null ? d.props.children : d, kg(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = I$(n.__e, t, n, o, s, r, l, _);
    (d = ie.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ie.__e(x, t, n);
  }
}
function Cg(e, t) {
  ie.__c && ie.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ie.__e(o, n.__v);
    }
  });
}
function I$(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && Wc.call(e.childNodes), d = (h = n.props || Ys).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (U$(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, kg(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Hr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && wg(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && Gs(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Gs(e, "checked", f, h.checked, !1));
  }
  return e;
}
function Eg(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ie.__e(o, n);
  }
}
function Tg(e, t, n) {
  var o, s;
  if (ie.unmount && ie.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Eg(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ie.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Tg(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || wg(e.__e), e.__ = e.__e = e.__d = void 0;
}
function F$(e, t, n) {
  return this.constructor(e, n);
}
function B$(e, t, n) {
  var o, s, r;
  ie.__ && ie.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], b_(t, e = (!o && n || t).__k = H$(Uc, null, [e]), s || Ys, Ys, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Wc.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), Cg(r, e);
}
Wc = bg.slice, ie = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, vg = 0, To = function(e) {
  return e != null && e.constructor === void 0;
}, Un.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Jt({}, this.state), typeof e == "function" && (e = e(Jt({}, n), this.props)), e && Jt(n, e), e != null && this.__v && (t && this._sb.push(t), Cf(this));
}, Un.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Cf(this));
}, Un.prototype.render = Uc, ir = [], qs.__r = 0;
var j$ = 0;
function xe(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --j$, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ie.vnode && ie.vnode(_), _;
}
let z$ = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
class Mg extends Un {
  componentDidMount() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  renderHeader() {
    const {
      header: t,
      title: n
    } = this.props;
    return To(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ xe("div", { className: "modal-header", children: /* @__PURE__ */ xe("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : To(t) ? t : /* @__PURE__ */ xe("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ xe(yo, { ...t }) : null,
      n ? /* @__PURE__ */ xe("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ xe("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? To(t) ? t : /* @__PURE__ */ xe("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return To(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ xe("div", { className: "modal-footer", children: n ? /* @__PURE__ */ xe(yo, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ xe("div", { className: B("modal-dialog", t), style: n, children: /* @__PURE__ */ xe("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
D(Mg, "defaultProps", { closeBtn: !0 });
var ni, ro, oi;
class V$ extends Un {
  constructor() {
    super(...arguments);
    L(this, ni, W$());
    L(this, ro, void 0);
    D(this, "state", {});
    L(this, oi, () => {
      var s, r;
      const n = (r = (s = b(this, ni).current) == null ? void 0 : s.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = b(this, ro);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, c = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, c.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, ro, o);
    });
  }
  componentDidMount() {
    b(this, oi).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = b(this, ro)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ xe(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: b(this, ni),
        onLoad: b(this, oi)
      }
    );
  }
}
ni = new WeakMap(), ro = new WeakMap(), oi = new WeakMap();
function Y$(e, t) {
  const { custom: n, title: o, content: s } = t;
  return {
    body: s,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function q$(e, t) {
  const { dataType: n, url: o, request: s, custom: r, title: l } = t, _ = await (await fetch(o, s)).text();
  if (n !== "html")
    try {
      const d = JSON.parse(_);
      return {
        title: l,
        ...r,
        ...d
      };
    } catch {
    }
  return t.replace !== !1 && n === "html" ? [_] : {
    title: l,
    ...r,
    body: n === "html" ? /* @__PURE__ */ xe("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: _ } }) : _
  };
}
async function G$(e, t) {
  const { url: n, custom: o, title: s } = t;
  return {
    title: s,
    ...o,
    body: /* @__PURE__ */ xe(V$, { url: n })
  };
}
const X$ = {
  custom: Y$,
  ajax: q$,
  iframe: G$
};
var ri, ii, st, io, ns, Ll, Lg, si, La;
const br = class extends Oe {
  constructor() {
    super(...arguments);
    L(this, io);
    L(this, Ll);
    L(this, si);
    L(this, ri, void 0);
    L(this, ii, void 0);
    L(this, st, void 0);
  }
  get id() {
    return b(this, ii);
  }
  get loading() {
    return this.modalElement.classList.contains(br.LOADING_CLASS);
  }
  get modalElement() {
    let n = b(this, ri);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), Vs(n, {
        id: o,
        style: this.options.style
      }), yg(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, ri, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, ii, this.options.id || `modal-${z$()}`);
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
    b(this, st) && clearTimeout(b(this, st));
    const { modalElement: n, options: o } = this, { type: s, loadTimeout: r } = o, l = X$[s];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.classList.add(br.LOADING_CLASS), await I(this, Ll, Lg).call(this), r && H(this, st, window.setTimeout(() => {
      H(this, st, 0), I(this, si, La).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await I(this, si, La).call(this, this.options.failedTip) : c && typeof c == "object" && await I(this, io, ns).call(this, c), b(this, st) && (clearTimeout(b(this, st)), H(this, st, 0)), n.classList.remove(br.LOADING_CLASS), !0;
  }
};
let Mo = br;
ri = new WeakMap(), ii = new WeakMap(), st = new WeakMap(), io = new WeakSet(), ns = function(n) {
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
      /* @__PURE__ */ xe(Mg, { ...n }),
      this.modalElement
    );
  });
}, Ll = new WeakSet(), Lg = function() {
  const { loadingText: n } = this.options;
  return I(this, io, ns).call(this, {
    body: /* @__PURE__ */ xe("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ xe("span", { className: "spinner" }),
      n ? /* @__PURE__ */ xe("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, si = new WeakSet(), La = function(n) {
  if (n)
    return I(this, io, ns).call(this, {
      body: /* @__PURE__ */ xe("div", { className: "modal-load-failed", children: n })
    });
}, D(Mo, "LOADING_CLASS", "loading"), D(Mo, "DEFAULT", {
  ...Oe.DEFAULT,
  loadTimeout: 1e4
});
var Ht, Al, Ag, Dl, Dg, Nl, Ng;
class sr extends ot {
  constructor() {
    super(...arguments);
    L(this, Al);
    L(this, Dl);
    L(this, Nl);
    L(this, Ht, void 0);
  }
  get modal() {
    return b(this, Ht);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return I(this, Dl, Dg).call(this).show();
  }
  hide() {
    var n;
    (n = b(this, Ht)) == null || n.hide();
  }
}
Ht = new WeakMap(), Al = new WeakSet(), Ag = function() {
  const {
    container: n,
    ...o
  } = this.options, s = o, r = this.element.getAttribute("href") || "";
  return s.type || (s.target || r[0] === "#" ? s.type = "static" : s.type = s.type || (s.url ? "iframe" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && r[0] !== "#" && (s.url = r), s;
}, Dl = new WeakSet(), Dg = function() {
  const n = I(this, Al, Ag).call(this);
  let o = b(this, Ht);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Oe(I(this, Nl, Ng).call(this), n), H(this, Ht, o)) : (o = new Mo(this.container, n), H(this, Ht, o)), o;
}, Nl = new WeakSet(), Ng = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const s = o.getAttribute("href");
      s != null && s.startsWith("#") && (n = s);
    }
  }
  return this.container.querySelector(n || ".modal");
}, D(sr, "NAME", "ModalTrigger"), D(sr, "EVENTS", !0), D(sr, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  var o;
  const t = e.target, n = (o = t.closest) == null ? void 0 : o.call(t, sr.TOGGLE_SELECTOR);
  if (n) {
    const s = sr.ensure(n);
    s && s.show(), console.log("> modalTrigger", s);
  }
});
var pa;
let K$ = (pa = class extends kc {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = B(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}, D(pa, "NAME", "nav"), pa);
class Lf extends Te {
}
D(Lf, "NAME", "nav"), D(Lf, "Component", K$);
var Aa;
Aa = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} };
var J$ = 0;
function sn(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --J$, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Aa.vnode && Aa.vnode(_), _;
}
function Wr(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Z$({
  key: e,
  type: t,
  btnType: n,
  page: o,
  format: s,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = Wr(r, o);
  return c.text === void 0 && !c.icon && s && (c.text = typeof s == "function" ? s(_) : We(s, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : We(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ sn(dt, { type: n, ...c });
}
const yt = 24 * 60 * 60 * 1e3, Ie = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), Ei = (e, t = /* @__PURE__ */ new Date()) => (e = Ie(e), t = Ie(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Af = (e, t = /* @__PURE__ */ new Date()) => Ie(e).getFullYear() === Ie(t).getFullYear(), Q$ = (e, t = /* @__PURE__ */ new Date()) => (e = Ie(e), t = Ie(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), hS = (e, t = /* @__PURE__ */ new Date()) => {
  e = Ie(e), t = Ie(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), s = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((s + 4) / 7);
}, dS = (e, t) => Ei(Ie(t), e), pS = (e, t) => Ei(Ie(t).getTime() - yt, e), mS = (e, t) => Ei(Ie(t).getTime() + yt, e), gS = (e, t) => Ei(Ie(t).getTime() - 2 * yt, e), Da = (e, t = "yyyy-MM-dd hh:mm") => {
  e = Ie(e);
  const n = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((o) => {
    if (new RegExp(`(${o})`).test(t)) {
      const s = `${n[o]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? s : `00${s}`.substring(s.length));
    }
  }), t;
}, yS = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, s = Da(e, Af(e) ? o.month : o.full);
  if (Ei(e, t))
    return s;
  const r = Da(t, Af(e, t) ? Q$(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", s).replace("{1}", r);
}, vS = (e) => {
  const t = (/* @__PURE__ */ new Date()).getTime();
  switch (e) {
    case "oneWeek":
      return t - yt * 7;
    case "oneMonth":
      return t - yt * 31;
    case "threeMonth":
      return t - yt * 31 * 3;
    case "halfYear":
      return t - yt * 183;
    case "oneYear":
      return t - yt * 365;
    case "twoYear":
      return t - 2 * (yt * 365);
    default:
      return 0;
  }
}, Df = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Df(e, "day", n, o);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, Df(e, "day", n, o);
    case "week":
      e *= 7;
      break;
    case "day":
      e *= 24;
      break;
    case "hour":
      e *= 60;
      break;
    case "minute":
      e *= 6e4;
      break;
    default:
      e = 0;
  }
  return n ? o + e : o - e;
};
function ek({
  key: e,
  type: t,
  page: n,
  text: o = "",
  pagerInfo: s,
  children: r,
  ...l
}) {
  const c = Wr(s, n);
  return o = typeof o == "function" ? o(c) : We(o, c), /* @__PURE__ */ sn(Qh, { ...l, children: [
    r,
    o
  ] });
}
function tk({
  key: e,
  type: t,
  btnType: n,
  count: o = 12,
  pagerInfo: s,
  onClick: r,
  linkCreator: l,
  ...c
}) {
  if (!s.pageTotal)
    return;
  const _ = { ...c, square: !0 }, d = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ sn(dt, { type: n, ..._ })), i = (u, a) => {
    const f = [];
    for (let y = u; y <= a; y++) {
      _.text = y, delete _.icon, _.disabled = !1;
      const p = Wr(s, y);
      l && (_.url = typeof l == "function" ? l(p) : We(l, p)), f.push(/* @__PURE__ */ sn(dt, { type: n, ..._, onClick: r }));
    }
    return f;
  };
  let h = [];
  return h = [...i(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= o ? h = [...h, ...i(2, s.pageTotal)] : s.page < o - 2 ? h = [...h, ...i(2, o - 2), d(), ...i(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - o + 3 ? h = [...h, d(), ...i(s.pageTotal - o + 3, s.pageTotal)] : h = [...h, d(), ...i(s.page - Math.ceil((o - 4) / 2), s.page + Math.floor((o - 4) / 2)), d(), ...i(s.pageTotal, s.pageTotal)]), h;
}
function nk({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: s = {},
  ...r
}) {
  var c;
  s.items = s.items ?? o.map((_) => {
    const d = { ...t, recPerPage: _ };
    return {
      text: `${_}`,
      url: typeof n == "function" ? n(d) : We(n, d)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(t) : We(l, t), s.menu = { ...s.menu, className: B((c = s.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ sn(fp, { type: "dropdown", dropdown: s, ...r });
}
function ok({
  key: e,
  page: t,
  type: n,
  btnType: o,
  pagerInfo: s,
  size: r,
  onClick: l,
  onChange: c,
  linkCreator: _,
  ...d
}) {
  const i = { ...d };
  let h;
  const u = (y) => {
    var p;
    h = Number((p = y.target) == null ? void 0 : p.value) || 1, h = h > s.pageTotal ? s.pageTotal : h;
  }, a = (y) => {
    if (!(y != null && y.target))
      return;
    h = h <= s.pageTotal ? h : s.pageTotal;
    const p = Wr(s, h);
    c && !c({ info: p, event: y }) || (y.target.href = i.url = typeof _ == "function" ? _(p) : We(_, p));
  }, f = Wr(s, t || 0);
  return i.url = typeof _ == "function" ? _(f) : We(_, f), i.className = B("input-group-addon", i.className), /* @__PURE__ */ sn("div", { className: B("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ sn("input", { type: "number", class: "form-control", max: s.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ sn(dt, { type: o, ...i, onClick: a })
  ] });
}
var So;
let rk = (So = class extends yo {
  get pagerInfo() {
    const { page: t = 1, recTotal: n = 0, recPerPage: o = 10 } = this.props;
    return { page: t, recTotal: n, recPerPage: o, pageTotal: o ? Math.ceil(n / o) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || t === "goto" || super.isBtnItem(t);
  }
  getItemRenderProps(t, n, o) {
    const s = super.getItemRenderProps(t, n, o), r = n.type || "item";
    return r === "info" ? Object.assign(s, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(s, { pagerInfo: this.pagerInfo, linkCreator: t.linkCreator }), s;
  }
}, D(So, "NAME", "pager"), D(So, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), D(So, "ItemComponents", {
  ...yo.ItemComponents,
  link: Z$,
  info: ek,
  nav: tk,
  "size-menu": nk,
  goto: ok
}), So);
class Nf extends Te {
}
D(Nf, "NAME", "pager"), D(Nf, "Component", rk);
var Rg, ye, Pg, lr, Rf, Og = {}, Hg = [], ik = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Zt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Wg(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function la(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Pg };
  return s == null && ye.vnode != null && ye.vnode(r), r;
}
function sk() {
  return { current: null };
}
function w_(e) {
  return e.children;
}
function ln(e, t) {
  this.props = e, this.context = t;
}
function Ur(e, t) {
  if (t == null)
    return e.__ ? Ur(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ur(e) : null;
}
function Ug(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ug(e);
  }
}
function Pf(e) {
  (!e.__d && (e.__d = !0) && lr.push(e) && !Xs.__r++ || Rf !== ye.debounceRendering) && ((Rf = ye.debounceRendering) || setTimeout)(Xs);
}
function Xs() {
  for (var e; Xs.__r = lr.length; )
    e = lr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), lr = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Zt({}, r)).__v = r.__v + 1, jg(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ur(r), r.__h), ck(o, r), r.__e != l && Ug(r)));
    });
}
function Ig(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || Hg, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? la(null, a, null, null, a) : Array.isArray(a) ? la(w_, { children: a }, null, null, null) : a.__b > 0 ? la(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      jg(e, a, u = u || Og, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = Fg(a, _, e) : _ = Bg(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = Ur(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Vg(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      zg(p[i], p[++i], p[++i]);
}
function Fg(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? Fg(o, t, n) : Bg(n, o, o, s, o.__e, t));
  return t;
}
function Bg(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function lk(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ks(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ks(e, r, t[r], n[r], o);
}
function Of(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || ik.test(t) ? n : n + "px";
}
function Ks(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Of(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Of(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Wf : Hf, r) : e.removeEventListener(t, r ? Wf : Hf, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Hf(e) {
  this.l[e.type + !1](ye.event ? ye.event(e) : e);
}
function Wf(e) {
  this.l[e.type + !0](ye.event ? ye.event(e) : e);
}
function jg(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = ye.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new ln(p, g), i.constructor = v, i.render = _k), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Zt({}, i.__s)), Zt(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = ye.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = Zt(Zt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === w_ && d.key == null ? d.props.children : d, Ig(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ak(n.__e, t, n, o, s, r, l, _);
    (d = ye.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ye.__e(x, t, n);
  }
}
function ck(e, t) {
  ye.__c && ye.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ye.__e(o, n.__v);
    }
  });
}
function ak(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && Rg.call(e.childNodes), d = (h = n.props || Og).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (lk(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, Ig(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ur(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Wg(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && Ks(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Ks(e, "checked", f, h.checked, !1));
  }
  return e;
}
function zg(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ye.__e(o, n);
  }
}
function Vg(e, t, n) {
  var o, s;
  if (ye.unmount && ye.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || zg(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ye.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Vg(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Wg(e.__e), e.__ = e.__e = e.__d = void 0;
}
function _k(e, t, n) {
  return this.constructor(e, n);
}
Rg = Hg.slice, ye = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Pg = 0, ln.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Zt({}, this.state), typeof e == "function" && (e = e(Zt({}, n), this.props)), e && Zt(n, e), e != null && this.__v && (t && this._sb.push(t), Pf(this));
}, ln.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Pf(this));
}, ln.prototype.render = w_, lr = [], Xs.__r = 0;
var uk = 0;
function te(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --uk, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ye.vnode && ye.vnode(_), _;
}
let fk = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Rl;
class hk extends ln {
  constructor() {
    super(...arguments);
    L(this, Rl, (n) => {
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
      children: d
    } = this.props;
    let i;
    return c.length ? i = /* @__PURE__ */ te("div", { className: "picker-multi-selections", children: c.map((h, u) => /* @__PURE__ */ te("div", { className: "picker-multi-selection", children: [
      h.text ?? h.value,
      /* @__PURE__ */ te("div", { className: "picker-deselect-btn btn", onClick: b(this, Rl), "data-idx": u, children: /* @__PURE__ */ te("span", { className: "close" }) })
    ] })) }) : i = /* @__PURE__ */ te("span", { className: "picker-select-placeholder", children: r }), /* @__PURE__ */ te(
      "div",
      {
        className: B("picker-select picker-select-multi form-control", n, { disabled: s, focused: l }),
        style: o,
        onClick: _,
        children: [
          i,
          d,
          /* @__PURE__ */ te("span", { class: "caret" })
        ]
      }
    );
  }
}
Rl = new WeakMap();
var Pl;
class dk extends ln {
  constructor() {
    super(...arguments);
    L(this, Pl, (n) => {
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
      onClick: d,
      children: i
    } = this.props, [h] = c, u = h ? /* @__PURE__ */ te("span", { className: "picker-single-selection", children: h.text ?? h.value }) : /* @__PURE__ */ te("span", { className: "picker-select-placeholder", children: r }), a = h && _ ? /* @__PURE__ */ te("button", { type: "button", className: "btn picker-deselect-btn", onClick: b(this, Pl), children: /* @__PURE__ */ te("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ te(
      "div",
      {
        className: B("picker-select picker-select-single form-control", n, { disabled: s, focused: l }),
        style: o,
        onClick: d,
        children: [
          u,
          i,
          a,
          /* @__PURE__ */ te("span", { class: "caret" })
        ]
      }
    );
  }
}
Pl = new WeakMap();
var Ol, Yg, li, Hl, ci, Wl;
class pk extends ln {
  constructor() {
    super(...arguments);
    L(this, Ol);
    D(this, "state", { keys: "", shown: !1 });
    L(this, li, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    L(this, Hl, ({ item: n }) => {
      const o = this.props.items.find((s) => s.value === n.key);
      o && this.props.onSelectItem(o);
    });
    L(this, ci, (n) => {
      this.setState({ keys: n.target.value });
    });
    L(this, Wl, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", b(this, li)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", b(this, li));
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
      menu: d,
      searchHint: i
    } = this.props, { shown: h, keys: u } = this.state, a = u.trim().length;
    return /* @__PURE__ */ te("div", { className: B("picker-menu", s, { shown: h, "has-search": a }), id: `picker-menu-${n}`, style: { maxHeight: l, maxWidth: c, width: _, ...r }, children: [
      o ? /* @__PURE__ */ te("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ te("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: i, value: u, onChange: b(this, ci), onInput: b(this, ci) }),
        a ? /* @__PURE__ */ te("button", { type: "button", className: "btn picker-menu-search-clear", onClick: b(this, Wl), children: /* @__PURE__ */ te("span", { className: "close" }) }) : /* @__PURE__ */ te("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ te(Ga, { className: "picker-menu-list", items: I(this, Ol, Yg).call(this), onClickItem: b(this, Hl), ...d })
    ] });
  }
}
Ol = new WeakSet(), Yg = function() {
  const { selections: n, items: o } = this.props, s = new Set(n), r = this.state.keys.toLowerCase().split(" ").filter((l) => l.length);
  return o.reduce((l, c) => {
    const {
      value: _,
      keys: d,
      text: i,
      ...h
    } = c;
    if (!r.length || r.every((u) => _.toLowerCase().includes(u) || (d == null ? void 0 : d.toLowerCase().includes(u)) || typeof i == "string" && i.toLowerCase().includes(u))) {
      let u = i ?? _;
      typeof u == "string" && r.length && (u = /* @__PURE__ */ te("span", { dangerouslySetInnerHTML: { __html: r.reduce((a, f) => a.replace(f, `<span class="picker-menu-item-match">${f}</span>`), u) } })), l.push({
        key: _,
        active: s.has(_),
        text: u,
        ...h
      });
    }
    return l;
  }, []);
}, li = new WeakMap(), Hl = new WeakMap(), ci = new WeakMap(), Wl = new WeakMap();
function Uf(e) {
  const t = /* @__PURE__ */ new Set();
  return e.reduce((n, o) => (t.has(o) || (t.add(o), n.push(o)), n), []);
}
var ma, ai, _i, ui, so, os, fi, Na, Ul, qg, Il, Gg, Fl, Bl, jl, zl, Vl, Xg;
let mk = (ma = class extends ln {
  constructor(n) {
    super(n);
    L(this, so);
    L(this, fi);
    L(this, Ul);
    L(this, Il);
    L(this, Vl);
    L(this, ai, 0);
    L(this, _i, fk());
    L(this, ui, sk());
    L(this, Fl, (n, o) => {
      const { valueList: s } = this, r = new Set(n.map((c) => c.value)), l = s.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    L(this, Bl, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    L(this, jl, () => {
      this.close();
    });
    L(this, zl, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = b(this, ui).current) == null || o.hide();
      });
    });
    this.state = {
      value: I(this, Ul, qg).call(this, n.defaultValue) ?? "",
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
    return I(this, fi, Na).call(this, this.state.value);
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
      const s = ++U_(this, ai)._;
      if (await I(this, so, os).call(this, { loading: !0, items: [] }), n = await n(), b(this, ai) !== s)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await I(this, so, os).call(this, o), n;
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
    await I(this, so, os).call(this, { open: n }), n && this.loadItemList();
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
    return /* @__PURE__ */ te("div", { className: B("picker", n), style: o, id: `picker-${b(this, _i)}`, children: [
      /* @__PURE__ */ te(l, { ...I(this, Il, Gg).call(this) }),
      s,
      this.state.open ? /* @__PURE__ */ te(pk, { ...I(this, Vl, Xg).call(this), ref: b(this, ui) }) : null
    ] });
  }
}, ai = new WeakMap(), _i = new WeakMap(), ui = new WeakMap(), so = new WeakSet(), os = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, fi = new WeakSet(), Na = function(n) {
  return typeof n == "string" ? Uf(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? Uf(n) : [];
}, Ul = new WeakSet(), qg = function(n) {
  const o = I(this, fi, Na).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, Il = new WeakSet(), Gg = function() {
  const { placeholder: n, disabled: o } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: b(this, Bl),
    onDeselect: b(this, Fl)
  };
}, Fl = new WeakMap(), Bl = new WeakMap(), jl = new WeakMap(), zl = new WeakMap(), Vl = new WeakSet(), Xg = function() {
  const { search: n, menuClass: o, menuWidth: s, menuStyle: r, menuMaxHeight: l, menuMaxWidth: c } = this.props, { items: _ } = this.state;
  return {
    id: b(this, _i),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: s,
    maxHeight: l,
    maxWidth: c,
    onRequestHide: b(this, jl),
    onSelectItem: b(this, zl)
  };
}, D(ma, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), ma);
class If extends Te {
}
D(If, "NAME", "picker"), D(If, "Component", mk);
var Ic, se, Kg, cr, Ff, Js = {}, Jg = [], gk = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Zg(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Qg(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ic.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return rs(e, l, o, s, null);
}
function rs(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Kg };
  return s == null && se.vnode != null && se.vnode(r), r;
}
function Hi() {
  return { current: null };
}
function Fc(e) {
  return e.children;
}
function ar(e, t) {
  this.props = e, this.context = t;
}
function Ir(e, t) {
  if (t == null)
    return e.__ ? Ir(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ir(e) : null;
}
function ey(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ey(e);
  }
}
function Bf(e) {
  (!e.__d && (e.__d = !0) && cr.push(e) && !Zs.__r++ || Ff !== se.debounceRendering) && ((Ff = se.debounceRendering) || setTimeout)(Zs);
}
function Zs() {
  for (var e; Zs.__r = cr.length; )
    e = cr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), cr = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = Qt({}, r)).__v = r.__v + 1, $_(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ir(r), r.__h), ry(o, r), r.__e != l && ey(r)));
    });
}
function ty(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || Jg, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? rs(null, a, null, null, a) : Array.isArray(a) ? rs(Fc, { children: a }, null, null, null) : a.__b > 0 ? rs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      $_(e, a, u = u || Js, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = ny(a, _, e) : _ = oy(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = Ir(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && sy(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      iy(p[i], p[++i], p[++i]);
}
function ny(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? ny(o, t, n) : oy(n, o, o, s, o.__e, t));
  return t;
}
function oy(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function yk(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Qs(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Qs(e, r, t[r], n[r], o);
}
function jf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || gk.test(t) ? n : n + "px";
}
function Qs(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || jf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || jf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Vf : zf, r) : e.removeEventListener(t, r ? Vf : zf, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function zf(e) {
  this.l[e.type + !1](se.event ? se.event(e) : e);
}
function Vf(e) {
  this.l[e.type + !0](se.event ? se.event(e) : e);
}
function $_(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = se.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new ar(p, g), i.constructor = v, i.render = bk), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = Qt({}, i.__s)), Qt(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = se.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = Qt(Qt({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === Fc && d.key == null ? d.props.children : d, ty(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = vk(n.__e, t, n, o, s, r, l, _);
    (d = se.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), se.__e(x, t, n);
  }
}
function ry(e, t) {
  se.__c && se.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      se.__e(o, n.__v);
    }
  });
}
function vk(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && Ic.call(e.childNodes), d = (h = n.props || Js).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (yk(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, ty(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ir(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && Zg(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && Qs(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && Qs(e, "checked", f, h.checked, !1));
  }
  return e;
}
function iy(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    se.__e(o, n);
  }
}
function sy(e, t, n) {
  var o, s;
  if (se.unmount && se.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || iy(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        se.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && sy(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || Zg(e.__e), e.__ = e.__e = e.__d = void 0;
}
function bk(e, t, n) {
  return this.constructor(e, n);
}
function wk(e, t, n) {
  var o, s, r;
  se.__ && se.__(e, t), s = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], $_(t, e = (!o && n || t).__k = Qg(Fc, null, [e]), s || Js, Js, t.ownerSVGElement !== void 0, !o && n ? [n] : s ? null : t.firstChild ? Ic.call(t.childNodes) : null, r, !o && n ? n : s ? s.__e : t.firstChild, o), ry(r, e);
}
Ic = Jg.slice, se = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Kg = 0, ar.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qt({}, this.state), typeof e == "function" && (e = e(Qt({}, n), this.props)), e && Qt(n, e), e != null && this.__v && (t && this._sb.push(t), Bf(this));
}, ar.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bf(this));
}, ar.prototype.render = Fc, cr = [], Zs.__r = 0;
var $k = 0;
function Fe(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --$k, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return se.vnode && se.vnode(_), _;
}
var el = {}, kk = {
  get exports() {
    return el;
  },
  set exports(e) {
    el = e;
  }
};
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(eg, function() {
    var n = 1e3, o = 6e4, s = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", d = "day", i = "week", h = "month", u = "quarter", a = "year", f = "date", y = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
      var S = ["th", "st", "nd", "rd"], $ = R % 100;
      return "[" + R + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(R, S, $) {
      var N = String(R);
      return !N || N.length >= S ? R : "" + Array(S + 1 - N.length).join($) + R;
    }, k = { s: w, z: function(R) {
      var S = -R.utcOffset(), $ = Math.abs(S), N = Math.floor($ / 60), E = $ % 60;
      return (S <= 0 ? "+" : "-") + w(N, 2, "0") + ":" + w(E, 2, "0");
    }, m: function R(S, $) {
      if (S.date() < $.date())
        return -R($, S);
      var N = 12 * ($.year() - S.year()) + ($.month() - S.month()), E = S.clone().add(N, h), O = $ - E < 0, P = S.clone().add(N + (O ? -1 : 1), h);
      return +(-(N + ($ - E) / (O ? E - P : P - E)) || 0);
    }, a: function(R) {
      return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
    }, p: function(R) {
      return { M: h, y: a, w: i, d, D: f, h: _, m: c, s: l, ms: r, Q: u }[R] || String(R || "").toLowerCase().replace(/s$/, "");
    }, u: function(R) {
      return R === void 0;
    } }, M = "en", T = {};
    T[M] = g;
    var C = function(R) {
      return R instanceof F;
    }, v = function R(S, $, N) {
      var E;
      if (!S)
        return M;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        T[O] && (E = O), $ && (T[O] = $, E = O);
        var P = S.split("-");
        if (!E && P.length > 1)
          return R(P[0]);
      } else {
        var U = S.name;
        T[U] = S, E = U;
      }
      return !N && E && (M = E), E || !N && M;
    }, x = function(R, S) {
      if (C(R))
        return R.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = R, $.args = arguments, new F($);
    }, A = k;
    A.l = v, A.i = C, A.w = function(R, S) {
      return x(R, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var F = function() {
      function R($) {
        this.$L = v($.locale, null, !0), this.parse($);
      }
      var S = R.prototype;
      return S.parse = function($) {
        this.$d = function(N) {
          var E = N.date, O = N.utc;
          if (E === null)
            return /* @__PURE__ */ new Date(NaN);
          if (A.u(E))
            return /* @__PURE__ */ new Date();
          if (E instanceof Date)
            return new Date(E);
          if (typeof E == "string" && !/Z$/i.test(E)) {
            var P = E.match(p);
            if (P) {
              var U = P[2] - 1 || 0, Y = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], U, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, Y)) : new Date(P[1], U, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, Y);
            }
          }
          return new Date(E);
        }($), this.$x = $.x || {}, this.init();
      }, S.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, S.$utils = function() {
        return A;
      }, S.isValid = function() {
        return this.$d.toString() !== y;
      }, S.isSame = function($, N) {
        var E = x($);
        return this.startOf(N) <= E && E <= this.endOf(N);
      }, S.isAfter = function($, N) {
        return x($) < this.startOf(N);
      }, S.isBefore = function($, N) {
        return this.endOf(N) < x($);
      }, S.$g = function($, N, E) {
        return A.u($) ? this[N] : this.set(E, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, N) {
        var E = this, O = !!A.u(N) || N, P = A.p($), U = function(le, X) {
          var ce = A.w(E.$u ? Date.UTC(E.$y, X, le) : new Date(E.$y, X, le), E);
          return O ? ce : ce.endOf(d);
        }, Y = function(le, X) {
          return A.w(E.toDate()[le].apply(E.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), E);
        }, V = this.$W, J = this.$M, ke = this.$D, z = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? U(1, 0) : U(31, 11);
          case h:
            return O ? U(1, J) : U(0, J + 1);
          case i:
            var Z = this.$locale().weekStart || 0, $e = (V < Z ? V + 7 : V) - Z;
            return U(O ? ke - $e : ke + (6 - $e), J);
          case d:
          case f:
            return Y(z + "Hours", 0);
          case _:
            return Y(z + "Minutes", 1);
          case c:
            return Y(z + "Seconds", 2);
          case l:
            return Y(z + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function($) {
        return this.startOf($, !1);
      }, S.$set = function($, N) {
        var E, O = A.p($), P = "set" + (this.$u ? "UTC" : ""), U = (E = {}, E[d] = P + "Date", E[f] = P + "Date", E[h] = P + "Month", E[a] = P + "FullYear", E[_] = P + "Hours", E[c] = P + "Minutes", E[l] = P + "Seconds", E[r] = P + "Milliseconds", E)[O], Y = O === d ? this.$D + (N - this.$W) : N;
        if (O === h || O === a) {
          var V = this.clone().set(f, 1);
          V.$d[U](Y), V.init(), this.$d = V.set(f, Math.min(this.$D, V.daysInMonth())).$d;
        } else
          U && this.$d[U](Y);
        return this.init(), this;
      }, S.set = function($, N) {
        return this.clone().$set($, N);
      }, S.get = function($) {
        return this[A.p($)]();
      }, S.add = function($, N) {
        var E, O = this;
        $ = Number($);
        var P = A.p(N), U = function(J) {
          var ke = x(O);
          return A.w(ke.date(ke.date() + Math.round(J * $)), O);
        };
        if (P === h)
          return this.set(h, this.$M + $);
        if (P === a)
          return this.set(a, this.$y + $);
        if (P === d)
          return U(1);
        if (P === i)
          return U(7);
        var Y = (E = {}, E[c] = o, E[_] = s, E[l] = n, E)[P] || 1, V = this.$d.getTime() + $ * Y;
        return A.w(V, this);
      }, S.subtract = function($, N) {
        return this.add(-1 * $, N);
      }, S.format = function($) {
        var N = this, E = this.$locale();
        if (!this.isValid())
          return E.invalidDate || y;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = A.z(this), U = this.$H, Y = this.$m, V = this.$M, J = E.weekdays, ke = E.months, z = function(X, ce, Re, Pe) {
          return X && (X[ce] || X(N, O)) || Re[ce].slice(0, Pe);
        }, Z = function(X) {
          return A.s(U % 12 || 12, X, "0");
        }, $e = E.meridiem || function(X, ce, Re) {
          var Pe = X < 12 ? "AM" : "PM";
          return Re ? Pe.toLowerCase() : Pe;
        }, le = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: V + 1, MM: A.s(V + 1, 2, "0"), MMM: z(E.monthsShort, V, ke, 3), MMMM: z(ke, V), D: this.$D, DD: A.s(this.$D, 2, "0"), d: String(this.$W), dd: z(E.weekdaysMin, this.$W, J, 2), ddd: z(E.weekdaysShort, this.$W, J, 3), dddd: J[this.$W], H: String(U), HH: A.s(U, 2, "0"), h: Z(1), hh: Z(2), a: $e(U, Y, !0), A: $e(U, Y, !1), m: String(Y), mm: A.s(Y, 2, "0"), s: String(this.$s), ss: A.s(this.$s, 2, "0"), SSS: A.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(X, ce) {
          return ce || le[X] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, N, E) {
        var O, P = A.p(N), U = x($), Y = (U.utcOffset() - this.utcOffset()) * o, V = this - U, J = A.m(this, U);
        return J = (O = {}, O[a] = J / 12, O[h] = J, O[u] = J / 3, O[i] = (V - Y) / 6048e5, O[d] = (V - Y) / 864e5, O[_] = V / s, O[c] = V / o, O[l] = V / n, O)[P] || V, E ? J : A.a(J);
      }, S.daysInMonth = function() {
        return this.endOf(h).$D;
      }, S.$locale = function() {
        return T[this.$L];
      }, S.locale = function($, N) {
        if (!$)
          return this.$L;
        var E = this.clone(), O = v($, N, !0);
        return O && (E.$L = O), E;
      }, S.clone = function() {
        return A.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, R;
    }(), j = F.prototype;
    return x.prototype = j, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", d], ["$M", h], ["$y", a], ["$D", f]].forEach(function(R) {
      j[R[1]] = function(S) {
        return this.$g(S, R[0], R[1]);
      };
    }), x.extend = function(R, S) {
      return R.$i || (R(S, F, x), R.$i = !0), x;
    }, x.locale = v, x.isDayjs = C, x.unix = function(R) {
      return x(1e3 * R);
    }, x.en = T[M], x.Ls = T, x.p = {}, x;
  });
})(kk);
const xk = (e = "00:00:00") => {
  const t = el(`1989-01-01 ${e}`);
  return {
    hour: t.hour(),
    minute: t.minute(),
    second: t.second()
  };
};
function Sk() {
  let e = new Array(24).fill(0), t = new Array(60).fill(0), n = new Array(60).fill(0);
  return e = e.map((o, s) => o + s), t = t.map((o, s) => o + s), n = n.map((o, s) => o + s), { hourList: e, minuteList: t, secondList: n };
}
class Ck extends ar {
  constructor() {
    super(...arguments);
    D(this, "cellHeight", 24);
    D(this, "ref", Hi());
    D(this, "hourRef", Hi());
    D(this, "minuteRef", Hi());
    D(this, "secondRef", Hi());
    D(this, "state", {
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
      return /* @__PURE__ */ Fe(
        "button",
        {
          className: B("btn", "size-sm", "ghost", "flex", { active: l }),
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
    return /* @__PURE__ */ Fe("div", { className: B("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ Fe("div", { className: B("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ Fe("div", { className: "overflow-hidden", children: /* @__PURE__ */ Fe("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", s) }) }),
        /* @__PURE__ */ Fe("div", { className: "overflow-hidden", children: /* @__PURE__ */ Fe("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ Fe("div", { className: "overflow-hidden", children: /* @__PURE__ */ Fe("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ Fe("div", { className: B("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ Fe("button", { className: B("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ Fe("button", { className: B("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function Ti(e) {
  return e.split("-")[1];
}
function k_(e) {
  return e === "y" ? "height" : "width";
}
function In(e) {
  return e.split("-")[0];
}
function Bc(e) {
  return ["top", "bottom"].includes(In(e)) ? "x" : "y";
}
function Yf(e, t, n) {
  let { reference: o, floating: s } = e;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Bc(t), _ = k_(c), d = o[_] / 2 - s[_] / 2, i = c === "x";
  let h;
  switch (In(t)) {
    case "top":
      h = { x: r, y: o.y - s.height };
      break;
    case "bottom":
      h = { x: r, y: o.y + o.height };
      break;
    case "right":
      h = { x: o.x + o.width, y: l };
      break;
    case "left":
      h = { x: o.x - s.width, y: l };
      break;
    default:
      h = { x: o.x, y: o.y };
  }
  switch (Ti(t)) {
    case "start":
      h[c] -= d * (n && i ? -1 : 1);
      break;
    case "end":
      h[c] += d * (n && i ? -1 : 1);
  }
  return h;
}
const Ek = async (e, t, n) => {
  const { placement: o = "bottom", strategy: s = "absolute", middleware: r = [], platform: l } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({ reference: e, floating: t, strategy: s }), { x: i, y: h } = Yf(d, o, _), u = o, a = {}, f = 0;
  for (let y = 0; y < c.length; y++) {
    const { name: p, fn: m } = c[y], { x: g, y: w, data: k, reset: M } = await m({ x: i, y: h, initialPlacement: o, placement: u, strategy: s, middlewareData: a, rects: d, platform: l, elements: { reference: e, floating: t } });
    i = g ?? i, h = w ?? h, a = { ...a, [p]: { ...a[p], ...k } }, M && f <= 50 && (f++, typeof M == "object" && (M.placement && (u = M.placement), M.rects && (d = M.rects === !0 ? await l.getElementRects({ reference: e, floating: t, strategy: s }) : M.rects), { x: i, y: h } = Yf(d, u, _)), y = -1);
  }
  return { x: i, y: h, placement: u, strategy: s, middlewareData: a };
};
function ly(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function tl(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Tk(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: s, platform: r, rects: l, elements: c, strategy: _ } = e, { boundary: d = "clippingAncestors", rootBoundary: i = "viewport", elementContext: h = "floating", altBoundary: u = !1, padding: a = 0 } = t, f = ly(a), y = c[u ? h === "floating" ? "reference" : "floating" : h], p = tl(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)), boundary: d, rootBoundary: i, strategy: _ })), m = h === "floating" ? { ...l.floating, x: o, y: s } : l.reference, g = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), w = await (r.isElement == null ? void 0 : r.isElement(g)) && await (r.getScale == null ? void 0 : r.getScale(g)) || { x: 1, y: 1 }, k = tl(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: g, strategy: _ }) : m);
  return { top: (p.top - k.top + f.top) / w.y, bottom: (k.bottom - p.bottom + f.bottom) / w.y, left: (p.left - k.left + f.left) / w.x, right: (k.right - p.right + f.right) / w.x };
}
const Mk = Math.min, Lk = Math.max;
function Ak(e, t, n) {
  return Lk(e, Mk(t, n));
}
const Dk = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: o = 0 } = e || {}, { x: s, y: r, placement: l, rects: c, platform: _ } = t;
  if (n == null)
    return {};
  const d = ly(o), i = { x: s, y: r }, h = Bc(l), u = k_(h), a = await _.getDimensions(n), f = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[h] - i[h] - c.floating[u], m = i[h] - c.reference[h], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
  let w = g ? h === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
  w === 0 && (w = c.floating[u]);
  const k = p / 2 - m / 2, M = d[f], T = w - a[u] - d[y], C = w / 2 - a[u] / 2 + k, v = Ak(M, C, T), x = Ti(l) != null && C != v && c.reference[u] / 2 - (C < M ? d[f] : d[y]) - a[u] / 2 < 0;
  return { [h]: i[h] - (x ? C < M ? M - C : T - C : 0), data: { [h]: v, centerOffset: C - v } };
} }), Nk = ["top", "right", "bottom", "left"];
Nk.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Rk = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Rk[t]);
}
function Pk(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ti(e), s = Bc(e), r = k_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = nl(l)), { main: l, cross: nl(l) };
}
const Ok = { start: "end", end: "start" };
function ca(e) {
  return e.replace(/start|end/g, (t) => Ok[t]);
}
const Hk = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: o, middlewareData: s, rects: r, initialPlacement: l, platform: c, elements: _ } = t, { mainAxis: d = !0, crossAxis: i = !0, fallbackPlacements: h, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: a = "none", flipAlignment: f = !0, ...y } = e, p = In(o), m = In(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = h || (m || !f ? [nl(l)] : function(A) {
      const F = nl(A);
      return [ca(A), F, ca(F)];
    }(l));
    h || a === "none" || w.push(...function(A, F, j, R) {
      const S = Ti(A);
      let $ = function(N, E, O) {
        const P = ["left", "right"], U = ["right", "left"], Y = ["top", "bottom"], V = ["bottom", "top"];
        switch (N) {
          case "top":
          case "bottom":
            return O ? E ? U : P : E ? P : U;
          case "left":
          case "right":
            return E ? Y : V;
          default:
            return [];
        }
      }(In(A), j === "start", R);
      return S && ($ = $.map((N) => N + "-" + S), F && ($ = $.concat($.map(ca)))), $;
    }(l, f, a, g));
    const k = [l, ...w], M = await Tk(t, y), T = [];
    let C = ((n = s.flip) == null ? void 0 : n.overflows) || [];
    if (d && T.push(M[p]), i) {
      const { main: A, cross: F } = Pk(o, r, g);
      T.push(M[A], M[F]);
    }
    if (C = [...C, { placement: o, overflows: T }], !T.every((A) => A <= 0)) {
      var v;
      const A = (((v = s.flip) == null ? void 0 : v.index) || 0) + 1, F = k[A];
      if (F)
        return { data: { index: A, overflows: C }, reset: { placement: F } };
      let j = "bottom";
      switch (u) {
        case "bestFit": {
          var x;
          const R = (x = C.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, N) => $ + N, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
          R && (j = R);
          break;
        }
        case "initialPlacement":
          j = l;
      }
      if (o !== j)
        return { reset: { placement: j } };
    }
    return {};
  } };
}, Wk = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: o } = t, s = await async function(r, l) {
      const { placement: c, platform: _, elements: d } = r, i = await (_.isRTL == null ? void 0 : _.isRTL(d.floating)), h = In(c), u = Ti(c), a = Bc(c) === "x", f = ["left", "top"].includes(h) ? -1 : 1, y = i && a ? -1 : 1, p = typeof l == "function" ? l(r) : l;
      let { mainAxis: m, crossAxis: g, alignmentAxis: w } = typeof p == "number" ? { mainAxis: p, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p };
      return u && typeof w == "number" && (g = u === "end" ? -1 * w : w), a ? { x: g * y, y: m * f } : { x: m * f, y: g * y };
    }(t, e);
    return { x: n + s.x, y: o + s.y, data: s };
  } };
};
function Xe(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ft(e) {
  return Xe(e).getComputedStyle(e);
}
function fn(e) {
  return ay(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Wi;
function cy() {
  if (Wi)
    return Wi;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Wi = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Wi) : navigator.userAgent;
}
function Lt(e) {
  return e instanceof Xe(e).HTMLElement;
}
function tt(e) {
  return e instanceof Xe(e).Element;
}
function ay(e) {
  return e instanceof Xe(e).Node;
}
function qf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Xe(e).ShadowRoot || e instanceof ShadowRoot;
}
function jc(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: s } = ft(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function Uk(e) {
  return ["table", "td", "th"].includes(fn(e));
}
function Ra(e) {
  const t = /firefox/i.test(cy()), n = ft(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!o && o !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some((s) => {
    const r = n.contain;
    return r != null && r.includes(s);
  });
}
function _y() {
  return !/^((?!chrome|android).)*safari/i.test(cy());
}
function x_(e) {
  return ["html", "body", "#document"].includes(fn(e));
}
const Gf = Math.min, _r = Math.max, ol = Math.round;
function uy(e) {
  const t = ft(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const s = e.offsetWidth, r = e.offsetHeight, l = ol(n) !== s || ol(o) !== r;
  return l && (n = s, o = r), { width: n, height: o, fallback: l };
}
function fy(e) {
  return tt(e) ? e : e.contextElement;
}
const hy = { x: 1, y: 1 };
function Fn(e) {
  const t = fy(e);
  if (!Lt(t))
    return hy;
  const n = t.getBoundingClientRect(), { width: o, height: s, fallback: r } = uy(t);
  let l = (r ? ol(n.width) : n.width) / o, c = (r ? ol(n.height) : n.height) / s;
  return l && Number.isFinite(l) || (l = 1), c && Number.isFinite(c) || (c = 1), { x: l, y: c };
}
function Ln(e, t, n, o) {
  var s, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = fy(e);
  let _ = hy;
  t && (o ? tt(o) && (_ = Fn(o)) : _ = Fn(e));
  const d = c ? Xe(c) : window, i = !_y() && n;
  let h = (l.left + (i && ((s = d.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const y = Xe(c), p = o && tt(o) ? Xe(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
      const g = Fn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, h *= g.x, u *= g.y, a *= g.x, f *= g.y, h += w.x, u += w.y, m = Xe(m).frameElement;
    }
  }
  return { width: a, height: f, top: u, right: h + a, bottom: u + f, left: h, x: h, y: u };
}
function cn(e) {
  return ((ay(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function zc(e) {
  return tt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function dy(e) {
  return Ln(cn(e)).left + zc(e).scrollLeft;
}
function Ik(e, t, n) {
  const o = Lt(t), s = cn(t), r = Ln(e, !0, n === "fixed", t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (o || !o && n !== "fixed")
    if ((fn(t) !== "body" || jc(s)) && (l = zc(t)), Lt(t)) {
      const _ = Ln(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      s && (c.x = dy(s));
  return { x: r.left + l.scrollLeft - c.x, y: r.top + l.scrollTop - c.y, width: r.width, height: r.height };
}
function Fr(e) {
  if (fn(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (qf(e) ? e.host : null) || cn(e);
  return qf(t) ? t.host : t;
}
function Xf(e) {
  return Lt(e) && ft(e).position !== "fixed" ? e.offsetParent : null;
}
function Kf(e) {
  const t = Xe(e);
  let n = Xf(e);
  for (; n && Uk(n) && ft(n).position === "static"; )
    n = Xf(n);
  return n && (fn(n) === "html" || fn(n) === "body" && ft(n).position === "static" && !Ra(n)) ? t : n || function(o) {
    let s = Fr(o);
    for (; Lt(s) && !x_(s); ) {
      if (Ra(s))
        return s;
      s = Fr(s);
    }
    return null;
  }(e) || t;
}
function py(e) {
  const t = Fr(e);
  return x_(t) ? e.ownerDocument.body : Lt(t) && jc(t) ? t : py(t);
}
function ur(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = py(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Xe(o);
  return s ? t.concat(r, r.visualViewport || [], jc(o) ? o : []) : t.concat(o, ur(o));
}
function Jf(e, t, n) {
  return t === "viewport" ? tl(function(o, s) {
    const r = Xe(o), l = cn(o), c = r.visualViewport;
    let _ = l.clientWidth, d = l.clientHeight, i = 0, h = 0;
    if (c) {
      _ = c.width, d = c.height;
      const u = _y();
      (u || !u && s === "fixed") && (i = c.offsetLeft, h = c.offsetTop);
    }
    return { width: _, height: d, x: i, y: h };
  }(e, n)) : tt(t) ? function(o, s) {
    const r = Ln(o, !0, s === "fixed"), l = r.top + o.clientTop, c = r.left + o.clientLeft, _ = Lt(o) ? Fn(o) : { x: 1, y: 1 }, d = o.clientWidth * _.x, i = o.clientHeight * _.y, h = c * _.x, u = l * _.y;
    return { top: u, left: h, right: h + d, bottom: u + i, x: h, y: u, width: d, height: i };
  }(t, n) : tl(function(o) {
    var s;
    const r = cn(o), l = zc(o), c = (s = o.ownerDocument) == null ? void 0 : s.body, _ = _r(r.scrollWidth, r.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0), d = _r(r.scrollHeight, r.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0);
    let i = -l.scrollLeft + dy(o);
    const h = -l.scrollTop;
    return ft(c || r).direction === "rtl" && (i += _r(r.clientWidth, c ? c.clientWidth : 0) - _), { width: _, height: d, x: i, y: h };
  }(cn(e)));
}
const Fk = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: s } = e;
  const r = n === "clippingAncestors" ? function(d, i) {
    const h = i.get(d);
    if (h)
      return h;
    let u = ur(d).filter((p) => tt(p) && fn(p) !== "body"), a = null;
    const f = ft(d).position === "fixed";
    let y = f ? Fr(d) : d;
    for (; tt(y) && !x_(y); ) {
      const p = ft(y), m = Ra(y);
      (f ? m || a : m || p.position !== "static" || !a || !["absolute", "fixed"].includes(a.position)) ? a = p : u = u.filter((g) => g !== y), y = Fr(y);
    }
    return i.set(d, u), u;
  }(t, this._c) : [].concat(n), l = [...r, o], c = l[0], _ = l.reduce((d, i) => {
    const h = Jf(t, i, s);
    return d.top = _r(h.top, d.top), d.right = Gf(h.right, d.right), d.bottom = Gf(h.bottom, d.bottom), d.left = _r(h.left, d.left), d;
  }, Jf(t, c, s));
  return { width: _.right - _.left, height: _.bottom - _.top, x: _.left, y: _.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: o } = e;
  const s = Lt(n), r = cn(n);
  if (n === r)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const _ = { x: 0, y: 0 };
  if ((s || !s && o !== "fixed") && ((fn(n) !== "body" || jc(r)) && (l = zc(n)), Lt(n))) {
    const d = Ln(n);
    c = Fn(n), _.x = d.x + n.clientLeft, _.y = d.y + n.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - l.scrollLeft * c.x + _.x, y: t.y * c.y - l.scrollTop * c.y + _.y };
}, isElement: tt, getDimensions: function(e) {
  return uy(e);
}, getOffsetParent: Kf, getDocumentElement: cn, getScale: Fn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: o } = e;
  const s = this.getOffsetParent || Kf, r = this.getDimensions;
  return { reference: Ik(t, await s(n), o), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ft(e).direction === "rtl" };
function Bk(e, t, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: s = !0, ancestorResize: r = !0, elementResize: l = !0, animationFrame: c = !1 } = o, _ = s && !c, d = _ || r ? [...tt(e) ? ur(e) : e.contextElement ? ur(e.contextElement) : [], ...ur(t)] : [];
  d.forEach((a) => {
    _ && a.addEventListener("scroll", n, { passive: !0 }), r && a.addEventListener("resize", n);
  });
  let i, h = null;
  if (l) {
    let a = !0;
    h = new ResizeObserver(() => {
      a || n(), a = !1;
    }), tt(e) && !c && h.observe(e), tt(e) || !e.contextElement || c || h.observe(e.contextElement), h.observe(t);
  }
  let u = c ? Ln(e) : null;
  return c && function a() {
    const f = Ln(e);
    !u || f.x === u.x && f.y === u.y && f.width === u.width && f.height === u.height || n(), u = f, i = requestAnimationFrame(a);
  }(), n(), () => {
    var a;
    d.forEach((f) => {
      _ && f.removeEventListener("scroll", n), r && f.removeEventListener("resize", n);
    }), (a = h) == null || a.disconnect(), h = null, c && cancelAnimationFrame(i);
  };
}
const jk = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = { platform: Fk, ...n }, r = { ...s.platform, _c: o };
  return Ek(e, t, { ...s, platform: r });
};
var lo, co, kn, hi, Le, di, pi, Pa, Yl, my, ql, gy, Gl, yy, Xl, vy, Kl, by, Jl, wy, Zl, $y, Ql;
const gn = class extends ot {
  constructor() {
    super(...arguments);
    L(this, pi);
    L(this, Yl);
    L(this, ql);
    L(this, Gl);
    L(this, Xl);
    L(this, Kl);
    L(this, Jl);
    L(this, Zl);
    L(this, lo, void 0);
    L(this, co, 0);
    L(this, kn, void 0);
    L(this, hi, void 0);
    L(this, Le, void 0);
    L(this, di, void 0);
    D(this, "hideLater", () => {
      b(this, Ql).call(this), H(this, co, window.setTimeout(this.hide.bind(this), 100));
    });
    L(this, Ql, () => {
      clearTimeout(b(this, co)), H(this, co, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, kn)) == null ? void 0 : n.classList.contains(gn.CLASS_SHOW);
  }
  get timepicker() {
    return b(this, kn) || I(this, ql, gy).call(this);
  }
  get trigger() {
    return b(this, hi) || this.element;
  }
  get elementShowClass() {
    return `with-${gn.NAME}-show`;
  }
  show(n) {
    return H(this, hi, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(gn.CLASS_SHOW), I(this, Jl, wy).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = b(this, di)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = b(this, kn)) == null || o.classList.remove(gn.CLASS_SHOW), !0;
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
    var _, d;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: s, ignoreSelector: r = ".not-hide-timepicker" } = n || {};
    if (o && r && ((d = (_ = o.target).closest) != null && d.call(_, r)))
      return;
    const l = this.getAll().entries(), c = new Set(s || []);
    for (const [i, h] of l)
      c.has(i) || h.hide();
  }
};
let ze = gn;
lo = new WeakMap(), co = new WeakMap(), kn = new WeakMap(), hi = new WeakMap(), Le = new WeakMap(), di = new WeakMap(), pi = new WeakSet(), Pa = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Yl = new WeakSet(), my = function() {
  const n = I(this, pi, Pa).call(this);
  return H(this, Le, document.createElement("div")), b(this, Le).style.position = "absolute", b(this, Le).style.width = `${n}px`, b(this, Le).style.height = `${n}px`, b(this, Le).style.transform = "rotate(45deg)", b(this, Le);
}, ql = new WeakSet(), gy = function() {
  const n = gn.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), wk(Qg(Ck, { ...this.options }), o), this.options.arrow && o.append(I(this, Yl, my).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, kn, o), o;
}, Gl = new WeakSet(), yy = function() {
  var l;
  const n = I(this, pi, Pa).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [Wk(n), Hk()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && b(this, Le) && ((l = r.middleware) == null || l.push(Dk({ element: b(this, Le) }))), r;
}, Xl = new WeakSet(), vy = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Kl = new WeakSet(), by = function(n) {
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
  const n = I(this, Gl, yy).call(this), o = I(this, Zl, $y).call(this);
  H(this, di, Bk(o, this.timepicker, () => {
    jk(o, this.timepicker, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.timepicker.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], d = I(this, Xl, vy).call(this, _);
      if (l.arrow && b(this, Le)) {
        const { x: i, y: h } = l.arrow;
        Object.assign(b(this, Le).style, {
          left: i != null ? `${i}px` : "",
          top: h != null ? `${h}px` : "",
          [d]: `${-b(this, Le).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...I(this, Kl, by).call(this, _)
        });
      }
    });
  }));
}, Zl = new WeakSet(), $y = function() {
  return b(this, lo) || H(this, lo, {
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
  }), b(this, lo);
}, Ql = new WeakMap(), D(ze, "NAME", "timepicker"), D(ze, "CLASSNAME", "timepicker"), D(ze, "CLASS_SHOW", "show"), D(ze, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), D(ze, "DEFAULT", {
  value: el().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(ze.MENU_SELECTOR);
  n ? ze.ensure(n).toggle() : ze.clear({ event: e });
});
const zk = (e) => {
  const t = document.getElementsByClassName("with-timepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(ze.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || ze.clear({ event: e });
};
window.addEventListener("scroll", zk, !0);
class Zf extends Te {
}
D(Zf, "NAME", "toolbar"), D(Zf, "Component", yo);
function Mi(e) {
  return e.split("-")[1];
}
function S_(e) {
  return e === "y" ? "height" : "width";
}
function Bn(e) {
  return e.split("-")[0];
}
function Vc(e) {
  return ["top", "bottom"].includes(Bn(e)) ? "x" : "y";
}
function Qf(e, t, n) {
  let { reference: o, floating: s } = e;
  const r = o.x + o.width / 2 - s.width / 2, l = o.y + o.height / 2 - s.height / 2, c = Vc(t), _ = S_(c), d = o[_] / 2 - s[_] / 2, i = c === "x";
  let h;
  switch (Bn(t)) {
    case "top":
      h = { x: r, y: o.y - s.height };
      break;
    case "bottom":
      h = { x: r, y: o.y + o.height };
      break;
    case "right":
      h = { x: o.x + o.width, y: l };
      break;
    case "left":
      h = { x: o.x - s.width, y: l };
      break;
    default:
      h = { x: o.x, y: o.y };
  }
  switch (Mi(t)) {
    case "start":
      h[c] -= d * (n && i ? -1 : 1);
      break;
    case "end":
      h[c] += d * (n && i ? -1 : 1);
  }
  return h;
}
const Vk = async (e, t, n) => {
  const { placement: o = "bottom", strategy: s = "absolute", middleware: r = [], platform: l } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({ reference: e, floating: t, strategy: s }), { x: i, y: h } = Qf(d, o, _), u = o, a = {}, f = 0;
  for (let y = 0; y < c.length; y++) {
    const { name: p, fn: m } = c[y], { x: g, y: w, data: k, reset: M } = await m({ x: i, y: h, initialPlacement: o, placement: u, strategy: s, middlewareData: a, rects: d, platform: l, elements: { reference: e, floating: t } });
    i = g ?? i, h = w ?? h, a = { ...a, [p]: { ...a[p], ...k } }, M && f <= 50 && (f++, typeof M == "object" && (M.placement && (u = M.placement), M.rects && (d = M.rects === !0 ? await l.getElementRects({ reference: e, floating: t, strategy: s }) : M.rects), { x: i, y: h } = Qf(d, u, _)), y = -1);
  }
  return { x: i, y: h, placement: u, strategy: s, middlewareData: a };
};
function ky(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function rl(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Yk(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: s, platform: r, rects: l, elements: c, strategy: _ } = e, { boundary: d = "clippingAncestors", rootBoundary: i = "viewport", elementContext: h = "floating", altBoundary: u = !1, padding: a = 0 } = t, f = ky(a), y = c[u ? h === "floating" ? "reference" : "floating" : h], p = rl(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)), boundary: d, rootBoundary: i, strategy: _ })), m = h === "floating" ? { ...l.floating, x: o, y: s } : l.reference, g = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), w = await (r.isElement == null ? void 0 : r.isElement(g)) && await (r.getScale == null ? void 0 : r.getScale(g)) || { x: 1, y: 1 }, k = rl(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: g, strategy: _ }) : m);
  return { top: (p.top - k.top + f.top) / w.y, bottom: (k.bottom - p.bottom + f.bottom) / w.y, left: (p.left - k.left + f.left) / w.x, right: (k.right - p.right + f.right) / w.x };
}
const qk = Math.min, Gk = Math.max;
function Xk(e, t, n) {
  return Gk(e, qk(t, n));
}
const Kk = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: o = 0 } = e || {}, { x: s, y: r, placement: l, rects: c, platform: _ } = t;
  if (n == null)
    return {};
  const d = ky(o), i = { x: s, y: r }, h = Vc(l), u = S_(h), a = await _.getDimensions(n), f = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", p = c.reference[u] + c.reference[h] - i[h] - c.floating[u], m = i[h] - c.reference[h], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
  let w = g ? h === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
  w === 0 && (w = c.floating[u]);
  const k = p / 2 - m / 2, M = d[f], T = w - a[u] - d[y], C = w / 2 - a[u] / 2 + k, v = Xk(M, C, T), x = Mi(l) != null && C != v && c.reference[u] / 2 - (C < M ? d[f] : d[y]) - a[u] / 2 < 0;
  return { [h]: i[h] - (x ? C < M ? M - C : T - C : 0), data: { [h]: v, centerOffset: C - v } };
} }), Jk = ["top", "right", "bottom", "left"];
Jk.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Zk = { left: "right", right: "left", bottom: "top", top: "bottom" };
function il(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Zk[t]);
}
function Qk(e, t, n) {
  n === void 0 && (n = !1);
  const o = Mi(e), s = Vc(e), r = S_(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = il(l)), { main: l, cross: il(l) };
}
const ex = { start: "end", end: "start" };
function aa(e) {
  return e.replace(/start|end/g, (t) => ex[t]);
}
const tx = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: o, middlewareData: s, rects: r, initialPlacement: l, platform: c, elements: _ } = t, { mainAxis: d = !0, crossAxis: i = !0, fallbackPlacements: h, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: a = "none", flipAlignment: f = !0, ...y } = e, p = Bn(o), m = Bn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = h || (m || !f ? [il(l)] : function(A) {
      const F = il(A);
      return [aa(A), F, aa(F)];
    }(l));
    h || a === "none" || w.push(...function(A, F, j, R) {
      const S = Mi(A);
      let $ = function(N, E, O) {
        const P = ["left", "right"], U = ["right", "left"], Y = ["top", "bottom"], V = ["bottom", "top"];
        switch (N) {
          case "top":
          case "bottom":
            return O ? E ? U : P : E ? P : U;
          case "left":
          case "right":
            return E ? Y : V;
          default:
            return [];
        }
      }(Bn(A), j === "start", R);
      return S && ($ = $.map((N) => N + "-" + S), F && ($ = $.concat($.map(aa)))), $;
    }(l, f, a, g));
    const k = [l, ...w], M = await Yk(t, y), T = [];
    let C = ((n = s.flip) == null ? void 0 : n.overflows) || [];
    if (d && T.push(M[p]), i) {
      const { main: A, cross: F } = Qk(o, r, g);
      T.push(M[A], M[F]);
    }
    if (C = [...C, { placement: o, overflows: T }], !T.every((A) => A <= 0)) {
      var v;
      const A = (((v = s.flip) == null ? void 0 : v.index) || 0) + 1, F = k[A];
      if (F)
        return { data: { index: A, overflows: C }, reset: { placement: F } };
      let j = "bottom";
      switch (u) {
        case "bestFit": {
          var x;
          const R = (x = C.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, N) => $ + N, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
          R && (j = R);
          break;
        }
        case "initialPlacement":
          j = l;
      }
      if (o !== j)
        return { reset: { placement: j } };
    }
    return {};
  } };
}, nx = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: o } = t, s = await async function(r, l) {
      const { placement: c, platform: _, elements: d } = r, i = await (_.isRTL == null ? void 0 : _.isRTL(d.floating)), h = Bn(c), u = Mi(c), a = Vc(c) === "x", f = ["left", "top"].includes(h) ? -1 : 1, y = i && a ? -1 : 1, p = typeof l == "function" ? l(r) : l;
      let { mainAxis: m, crossAxis: g, alignmentAxis: w } = typeof p == "number" ? { mainAxis: p, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p };
      return u && typeof w == "number" && (g = u === "end" ? -1 * w : w), a ? { x: g * y, y: m * f } : { x: m * f, y: g * y };
    }(t, e);
    return { x: n + s.x, y: o + s.y, data: s };
  } };
};
function Ke(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ht(e) {
  return Ke(e).getComputedStyle(e);
}
function hn(e) {
  return Sy(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Ui;
function xy() {
  if (Ui)
    return Ui;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Ui = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Ui) : navigator.userAgent;
}
function At(e) {
  return e instanceof Ke(e).HTMLElement;
}
function nt(e) {
  return e instanceof Ke(e).Element;
}
function Sy(e) {
  return e instanceof Ke(e).Node;
}
function eh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Ke(e).ShadowRoot || e instanceof ShadowRoot;
}
function Yc(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: s } = ht(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function ox(e) {
  return ["table", "td", "th"].includes(hn(e));
}
function Oa(e) {
  const t = /firefox/i.test(xy()), n = ht(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!o && o !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some((s) => {
    const r = n.contain;
    return r != null && r.includes(s);
  });
}
function Cy() {
  return !/^((?!chrome|android).)*safari/i.test(xy());
}
function C_(e) {
  return ["html", "body", "#document"].includes(hn(e));
}
const th = Math.min, fr = Math.max, sl = Math.round;
function Ey(e) {
  const t = ht(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const s = e.offsetWidth, r = e.offsetHeight, l = sl(n) !== s || sl(o) !== r;
  return l && (n = s, o = r), { width: n, height: o, fallback: l };
}
function Ty(e) {
  return nt(e) ? e : e.contextElement;
}
const My = { x: 1, y: 1 };
function jn(e) {
  const t = Ty(e);
  if (!At(t))
    return My;
  const n = t.getBoundingClientRect(), { width: o, height: s, fallback: r } = Ey(t);
  let l = (r ? sl(n.width) : n.width) / o, c = (r ? sl(n.height) : n.height) / s;
  return l && Number.isFinite(l) || (l = 1), c && Number.isFinite(c) || (c = 1), { x: l, y: c };
}
function An(e, t, n, o) {
  var s, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = Ty(e);
  let _ = My;
  t && (o ? nt(o) && (_ = jn(o)) : _ = jn(e));
  const d = c ? Ke(c) : window, i = !Cy() && n;
  let h = (l.left + (i && ((s = d.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / _.x, u = (l.top + (i && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, f = l.height / _.y;
  if (c) {
    const y = Ke(c), p = o && nt(o) ? Ke(o) : o;
    let m = y.frameElement;
    for (; m && o && p !== y; ) {
      const g = jn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, h *= g.x, u *= g.y, a *= g.x, f *= g.y, h += w.x, u += w.y, m = Ke(m).frameElement;
    }
  }
  return { width: a, height: f, top: u, right: h + a, bottom: u + f, left: h, x: h, y: u };
}
function an(e) {
  return ((Sy(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function qc(e) {
  return nt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ly(e) {
  return An(an(e)).left + qc(e).scrollLeft;
}
function rx(e, t, n) {
  const o = At(t), s = an(t), r = An(e, !0, n === "fixed", t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (o || !o && n !== "fixed")
    if ((hn(t) !== "body" || Yc(s)) && (l = qc(t)), At(t)) {
      const _ = An(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      s && (c.x = Ly(s));
  return { x: r.left + l.scrollLeft - c.x, y: r.top + l.scrollTop - c.y, width: r.width, height: r.height };
}
function Br(e) {
  if (hn(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (eh(e) ? e.host : null) || an(e);
  return eh(t) ? t.host : t;
}
function nh(e) {
  return At(e) && ht(e).position !== "fixed" ? e.offsetParent : null;
}
function oh(e) {
  const t = Ke(e);
  let n = nh(e);
  for (; n && ox(n) && ht(n).position === "static"; )
    n = nh(n);
  return n && (hn(n) === "html" || hn(n) === "body" && ht(n).position === "static" && !Oa(n)) ? t : n || function(o) {
    let s = Br(o);
    for (; At(s) && !C_(s); ) {
      if (Oa(s))
        return s;
      s = Br(s);
    }
    return null;
  }(e) || t;
}
function Ay(e) {
  const t = Br(e);
  return C_(t) ? e.ownerDocument.body : At(t) && Yc(t) ? t : Ay(t);
}
function hr(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = Ay(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ke(o);
  return s ? t.concat(r, r.visualViewport || [], Yc(o) ? o : []) : t.concat(o, hr(o));
}
function rh(e, t, n) {
  return t === "viewport" ? rl(function(o, s) {
    const r = Ke(o), l = an(o), c = r.visualViewport;
    let _ = l.clientWidth, d = l.clientHeight, i = 0, h = 0;
    if (c) {
      _ = c.width, d = c.height;
      const u = Cy();
      (u || !u && s === "fixed") && (i = c.offsetLeft, h = c.offsetTop);
    }
    return { width: _, height: d, x: i, y: h };
  }(e, n)) : nt(t) ? function(o, s) {
    const r = An(o, !0, s === "fixed"), l = r.top + o.clientTop, c = r.left + o.clientLeft, _ = At(o) ? jn(o) : { x: 1, y: 1 }, d = o.clientWidth * _.x, i = o.clientHeight * _.y, h = c * _.x, u = l * _.y;
    return { top: u, left: h, right: h + d, bottom: u + i, x: h, y: u, width: d, height: i };
  }(t, n) : rl(function(o) {
    var s;
    const r = an(o), l = qc(o), c = (s = o.ownerDocument) == null ? void 0 : s.body, _ = fr(r.scrollWidth, r.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0), d = fr(r.scrollHeight, r.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0);
    let i = -l.scrollLeft + Ly(o);
    const h = -l.scrollTop;
    return ht(c || r).direction === "rtl" && (i += fr(r.clientWidth, c ? c.clientWidth : 0) - _), { width: _, height: d, x: i, y: h };
  }(an(e)));
}
const ix = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: s } = e;
  const r = n === "clippingAncestors" ? function(d, i) {
    const h = i.get(d);
    if (h)
      return h;
    let u = hr(d).filter((p) => nt(p) && hn(p) !== "body"), a = null;
    const f = ht(d).position === "fixed";
    let y = f ? Br(d) : d;
    for (; nt(y) && !C_(y); ) {
      const p = ht(y), m = Oa(y);
      (f ? m || a : m || p.position !== "static" || !a || !["absolute", "fixed"].includes(a.position)) ? a = p : u = u.filter((g) => g !== y), y = Br(y);
    }
    return i.set(d, u), u;
  }(t, this._c) : [].concat(n), l = [...r, o], c = l[0], _ = l.reduce((d, i) => {
    const h = rh(t, i, s);
    return d.top = fr(h.top, d.top), d.right = th(h.right, d.right), d.bottom = th(h.bottom, d.bottom), d.left = fr(h.left, d.left), d;
  }, rh(t, c, s));
  return { width: _.right - _.left, height: _.bottom - _.top, x: _.left, y: _.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: o } = e;
  const s = At(n), r = an(n);
  if (n === r)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const _ = { x: 0, y: 0 };
  if ((s || !s && o !== "fixed") && ((hn(n) !== "body" || Yc(r)) && (l = qc(n)), At(n))) {
    const d = An(n);
    c = jn(n), _.x = d.x + n.clientLeft, _.y = d.y + n.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - l.scrollLeft * c.x + _.x, y: t.y * c.y - l.scrollTop * c.y + _.y };
}, isElement: nt, getDimensions: function(e) {
  return Ey(e);
}, getOffsetParent: oh, getDocumentElement: an, getScale: jn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: o } = e;
  const s = this.getOffsetParent || oh, r = this.getDimensions;
  return { reference: rx(t, await s(n), o), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ht(e).direction === "rtl" };
function sx(e, t, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: s = !0, ancestorResize: r = !0, elementResize: l = !0, animationFrame: c = !1 } = o, _ = s && !c, d = _ || r ? [...nt(e) ? hr(e) : e.contextElement ? hr(e.contextElement) : [], ...hr(t)] : [];
  d.forEach((a) => {
    _ && a.addEventListener("scroll", n, { passive: !0 }), r && a.addEventListener("resize", n);
  });
  let i, h = null;
  if (l) {
    let a = !0;
    h = new ResizeObserver(() => {
      a || n(), a = !1;
    }), nt(e) && !c && h.observe(e), nt(e) || !e.contextElement || c || h.observe(e.contextElement), h.observe(t);
  }
  let u = c ? An(e) : null;
  return c && function a() {
    const f = An(e);
    !u || f.x === u.x && f.y === u.y && f.width === u.width && f.height === u.height || n(), u = f, i = requestAnimationFrame(a);
  }(), n(), () => {
    var a;
    d.forEach((f) => {
      _ && f.removeEventListener("scroll", n), r && f.removeEventListener("resize", n);
    }), (a = h) == null || a.disconnect(), h = null, c && cancelAnimationFrame(i);
  };
}
const lx = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = { platform: ix, ...n }, r = { ...s.platform, _c: o };
  return Vk(e, t, { ...s, platform: r });
};
var ao, _o, uo, xn, Ae, ec, mi, gi, Ha, tc, Dy, nc, Ny, oc, Ry, rc, Py, ic, Oy, sc, Hy, lc, Wy, fo, cc, Uy;
const yn = class extends ot {
  constructor() {
    super(...arguments);
    L(this, gi);
    L(this, tc);
    L(this, nc);
    L(this, oc);
    L(this, rc);
    L(this, ic);
    L(this, sc);
    L(this, lc);
    L(this, cc);
    L(this, ao, !1);
    L(this, _o, void 0);
    L(this, uo, 0);
    L(this, xn, void 0);
    L(this, Ae, void 0);
    L(this, ec, void 0);
    L(this, mi, void 0);
    D(this, "hideLater", () => {
      b(this, fo).call(this), H(this, uo, window.setTimeout(this.hide.bind(this), 100));
    });
    L(this, fo, () => {
      clearTimeout(b(this, uo)), H(this, uo, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, xn)) == null ? void 0 : n.classList.contains(yn.CLASS_SHOW);
  }
  get tooltip() {
    return b(this, xn) || I(this, nc, Ny).call(this);
  }
  get trigger() {
    return b(this, ec) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${yn.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !b(this, ao) && this.isHover && I(this, cc, Uy).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(yn.CLASS_SHOW), I(this, sc, Hy).call(this), !0;
  }
  hide() {
    var n, o;
    return (n = b(this, mi)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = b(this, xn)) == null || o.classList.remove(yn.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    b(this, ao) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", b(this, fo)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, s = this.getAll().entries(), r = new Set(o || []);
    for (const [l, c] of s)
      r.has(l) || c.hide();
  }
};
let Ve = yn;
ao = new WeakMap(), _o = new WeakMap(), uo = new WeakMap(), xn = new WeakMap(), Ae = new WeakMap(), ec = new WeakMap(), mi = new WeakMap(), gi = new WeakSet(), Ha = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, tc = new WeakSet(), Dy = function() {
  const n = I(this, gi, Ha).call(this);
  return H(this, Ae, document.createElement("div")), b(this, Ae).style.position = this.options.strategy, b(this, Ae).style.width = `${n}px`, b(this, Ae).style.height = `${n}px`, b(this, Ae).style.transform = "rotate(45deg)", b(this, Ae);
}, nc = new WeakSet(), Ny = function() {
  var s;
  const n = yn.TOOLTIP_CLASS;
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
  if (this.options.arrow && (o == null || o.append(I(this, tc, Dy).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, xn, o), o;
}, oc = new WeakSet(), Ry = function() {
  var l;
  const n = I(this, gi, Ha).call(this), { strategy: o, placement: s } = this.options, r = {
    middleware: [nx(n), tx()],
    strategy: o,
    placement: s
  };
  return this.options.arrow && b(this, Ae) && ((l = r.middleware) == null || l.push(Kk({ element: b(this, Ae) }))), r;
}, rc = new WeakSet(), Py = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, ic = new WeakSet(), Oy = function(n) {
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
}, sc = new WeakSet(), Hy = function() {
  const n = I(this, oc, Ry).call(this), o = I(this, lc, Wy).call(this);
  H(this, mi, sx(o, this.tooltip, () => {
    lx(o, this.tooltip, n).then(({ x: s, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.tooltip.style, {
        left: `${s}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], d = I(this, rc, Py).call(this, _);
      if (l.arrow && b(this, Ae)) {
        const { x: i, y: h } = l.arrow;
        Object.assign(b(this, Ae).style, {
          left: i != null ? `${i}px` : "",
          top: h != null ? `${h}px` : "",
          [d]: `${-b(this, Ae).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...I(this, ic, Oy).call(this, _)
        });
      }
    });
  }));
}, lc = new WeakSet(), Wy = function() {
  return b(this, _o) || H(this, _o, {
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
  }), b(this, _o);
}, fo = new WeakMap(), cc = new WeakSet(), Uy = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", b(this, fo)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, ao, !0);
}, D(Ve, "NAME", "tooltip"), D(Ve, "TOOLTIP_CLASS", "tooltip"), D(Ve, "CLASS_SHOW", "show"), D(Ve, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), D(Ve, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  var o;
  const t = e.target, n = (o = t.closest) == null ? void 0 : o.call(t, Ve.MENU_SELECTOR);
  if (n) {
    const s = Ve.ensure(n);
    s.options.trigger === "click" && s.toggle();
  } else
    Ve.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Ve.MENU_SELECTOR);
  if (!n)
    return;
  const o = Ve.ensure(n);
  o.isHover && o.show();
});
var Iy, ve, Fy, dr, ih, By = {}, jy = [], cx = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function en(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function zy(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function _a(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Fy };
  return s == null && ve.vnode != null && ve.vnode(r), r;
}
function E_(e) {
  return e.children;
}
function pr(e, t) {
  this.props = e, this.context = t;
}
function jr(e, t) {
  if (t == null)
    return e.__ ? jr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? jr(e) : null;
}
function Vy(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Vy(e);
  }
}
function sh(e) {
  (!e.__d && (e.__d = !0) && dr.push(e) && !ll.__r++ || ih !== ve.debounceRendering) && ((ih = ve.debounceRendering) || setTimeout)(ll);
}
function ll() {
  for (var e; ll.__r = dr.length; )
    e = dr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), dr = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = en({}, r)).__v = r.__v + 1, Xy(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? jr(r), r.__h), _x(o, r), r.__e != l && Vy(r)));
    });
}
function Yy(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || jy, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? _a(null, a, null, null, a) : Array.isArray(a) ? _a(E_, { children: a }, null, null, null) : a.__b > 0 ? _a(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      Xy(e, a, u = u || By, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = qy(a, _, e) : _ = Gy(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = jr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && Jy(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      Ky(p[i], p[++i], p[++i]);
}
function qy(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? qy(o, t, n) : Gy(n, o, o, s, o.__e, t));
  return t;
}
function Gy(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function ax(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || cl(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || cl(e, r, t[r], n[r], o);
}
function lh(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || cx.test(t) ? n : n + "px";
}
function cl(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || lh(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || lh(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ah : ch, r) : e.removeEventListener(t, r ? ah : ch, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function ch(e) {
  this.l[e.type + !1](ve.event ? ve.event(e) : e);
}
function ah(e) {
  this.l[e.type + !0](ve.event ? ve.event(e) : e);
}
function Xy(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = ve.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new pr(p, g), i.constructor = v, i.render = fx), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = en({}, i.__s)), en(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = ve.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = en(en({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === E_ && d.key == null ? d.props.children : d, Yy(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ux(n.__e, t, n, o, s, r, l, _);
    (d = ve.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ve.__e(x, t, n);
  }
}
function _x(e, t) {
  ve.__c && ve.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ve.__e(o, n.__v);
    }
  });
}
function ux(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && Iy.call(e.childNodes), d = (h = n.props || By).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (ax(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, Yy(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && jr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && zy(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && cl(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && cl(e, "checked", f, h.checked, !1));
  }
  return e;
}
function Ky(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ve.__e(o, n);
  }
}
function Jy(e, t, n) {
  var o, s;
  if (ve.unmount && ve.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ky(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ve.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && Jy(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || zy(e.__e), e.__ = e.__e = e.__d = void 0;
}
function fx(e, t, n) {
  return this.constructor(e, n);
}
Iy = jy.slice, ve = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Fy = 0, pr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = en({}, this.state), typeof e == "function" && (e = e(en({}, n), this.props)), e && en(n, e), e != null && this.__v && (t && this._sb.push(t), sh(this));
}, pr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), sh(this));
}, pr.prototype.render = E_, dr = [], ll.__r = 0;
var hx = 0;
function al(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --hx, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ve.vnode && ve.vnode(_), _;
}
function dx({
  type: e,
  key: t,
  style: n,
  bounding: o,
  offsetX: s = 0,
  offsetY: r = 0,
  component: l,
  data: c,
  hidden: _,
  props: d,
  children: i,
  onRender: h,
  ...u
}) {
  if (_)
    return null;
  let a;
  h ? a = h(e, c) : l ? a = /* @__PURE__ */ al(l, { ...d }) : a = c;
  const { left: f, top: y, width: p, height: m } = o;
  return /* @__PURE__ */ al("div", { style: { width: p, height: m, left: f + s, top: y + r, ...n }, ...u, children: [
    a,
    i
  ] });
}
function px(e, t, n = 0, o = 0) {
  const s = e.left + n, r = e.top + o;
  return !(s > t.left + t.width || r > t.top + t.height || s + e.width < t.left || r + e.height < t.top);
}
let mx = class extends pr {
  render() {
    const { width: t, height: n, cells: o, left: s, top: r, visibleBounding: l, onRenderCell: c, style: _, children: d, offsetX: i = 0, offsetY: h = 0, ...u } = this.props, a = l ? o.filter((f) => px(f.bounding, l, i, h)) : o;
    return /* @__PURE__ */ al("div", { style: { width: t, height: n, left: s, top: r, ..._ }, ...u, children: [
      a.map((f) => /* @__PURE__ */ al(dx, { offsetX: i, offsetY: h, ...f })),
      d
    ] });
  }
};
class _h extends Te {
}
D(_h, "NAME", "virtualgrid"), D(_h, "Component", mx);
var T_, be, Zy, Qy, mr, uh, ev = {}, tv = [], gx = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function tn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function nv(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function M_(e, t, n) {
  var o, s, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? s = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? T_.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return is(e, l, o, s, null);
}
function is(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++Zy };
  return s == null && be.vnode != null && be.vnode(r), r;
}
function yx() {
  return { current: null };
}
function L_(e) {
  return e.children;
}
function gr(e, t) {
  this.props = e, this.context = t;
}
function zr(e, t) {
  if (t == null)
    return e.__ ? zr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? zr(e) : null;
}
function ov(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ov(e);
  }
}
function fh(e) {
  (!e.__d && (e.__d = !0) && mr.push(e) && !_l.__r++ || uh !== be.debounceRendering) && ((uh = be.debounceRendering) || setTimeout)(_l);
}
function _l() {
  for (var e; _l.__r = mr.length; )
    e = mr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), mr = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = tn({}, r)).__v = r.__v + 1, lv(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? zr(r), r.__h), bx(o, r), r.__e != l && ov(r)));
    });
}
function rv(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || tv, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? is(null, a, null, null, a) : Array.isArray(a) ? is(L_, { children: a }, null, null, null) : a.__b > 0 ? is(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      lv(e, a, u = u || ev, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = iv(a, _, e) : _ = sv(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = zr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && av(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      cv(p[i], p[++i], p[++i]);
}
function iv(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? iv(o, t, n) : sv(n, o, o, s, o.__e, t));
  return t;
}
function sv(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function vx(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ul(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ul(e, r, t[r], n[r], o);
}
function hh(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || gx.test(t) ? n : n + "px";
}
function ul(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || hh(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || hh(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ph : dh, r) : e.removeEventListener(t, r ? ph : dh, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function dh(e) {
  this.l[e.type + !1](be.event ? be.event(e) : e);
}
function ph(e) {
  this.l[e.type + !0](be.event ? be.event(e) : e);
}
function lv(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = be.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new gr(p, g), i.constructor = v, i.render = $x), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = tn({}, i.__s)), tn(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = be.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = tn(tn({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === L_ && d.key == null ? d.props.children : d, rv(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = wx(n.__e, t, n, o, s, r, l, _);
    (d = be.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), be.__e(x, t, n);
  }
}
function bx(e, t) {
  be.__c && be.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      be.__e(o, n.__v);
    }
  });
}
function wx(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && T_.call(e.childNodes), d = (h = n.props || ev).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (vx(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, rv(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && zr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && nv(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && ul(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && ul(e, "checked", f, h.checked, !1));
  }
  return e;
}
function cv(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    be.__e(o, n);
  }
}
function av(e, t, n) {
  var o, s;
  if (be.unmount && be.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || cv(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        be.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && av(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || nv(e.__e), e.__ = e.__e = e.__d = void 0;
}
function $x(e, t, n) {
  return this.constructor(e, n);
}
T_ = tv.slice, be = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Zy = 0, Qy = function(e) {
  return e != null && e.constructor === void 0;
}, gr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tn({}, this.state), typeof e == "function" && (e = e(tn({}, n), this.props)), e && tn(n, e), e != null && this.__v && (t && this._sb.push(t), fh(this));
}, gr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), fh(this));
}, gr.prototype.render = L_, mr = [], _l.__r = 0;
var kx = 0;
function G(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --kx, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return be.vnode && be.vnode(_), _;
}
let xx = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var _v, we, uv, yr, mh, fv = {}, hv = [], Sx = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function nn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function dv(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ua(e, t, n, o, s) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++uv };
  return s == null && we.vnode != null && we.vnode(r), r;
}
function A_(e) {
  return e.children;
}
function vr(e, t) {
  this.props = e, this.context = t;
}
function Vr(e, t) {
  if (t == null)
    return e.__ ? Vr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Vr(e) : null;
}
function pv(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return pv(e);
  }
}
function gh(e) {
  (!e.__d && (e.__d = !0) && yr.push(e) && !fl.__r++ || mh !== we.debounceRendering) && ((mh = we.debounceRendering) || setTimeout)(fl);
}
function fl() {
  for (var e; fl.__r = yr.length; )
    e = yr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), yr = [], e.some(function(t) {
      var n, o, s, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (s = nn({}, r)).__v = r.__v + 1, vv(c, r, s, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Vr(r), r.__h), Ex(o, r), r.__e != l && pv(r)));
    });
}
function mv(e, t, n, o, s, r, l, c, _, d) {
  var i, h, u, a, f, y, p, m = o && o.__k || hv, g = m.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if ((a = n.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ua(null, a, null, null, a) : Array.isArray(a) ? ua(A_, { children: a }, null, null, null) : a.__b > 0 ? ua(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (u = m[i]) === null || u && a.key == u.key && a.type === u.type)
        m[i] = void 0;
      else
        for (h = 0; h < g; h++) {
          if ((u = m[h]) && a.key == u.key && a.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      vv(e, a, u = u || fv, s, r, l, c, _, d), f = a.__e, (h = a.ref) && u.ref != h && (p || (p = []), u.ref && p.push(u.ref, null, a), p.push(h, a.__c || f, a)), f != null ? (y == null && (y = f), typeof a.type == "function" && a.__k === u.__k ? a.__d = _ = gv(a, _, e) : _ = yv(e, a, u, m, f, _), typeof n.type == "function" && (n.__d = _)) : _ && u.__e == _ && _.parentNode != e && (_ = Vr(u));
    }
  for (n.__e = y, i = g; i--; )
    m[i] != null && wv(m[i], m[i]);
  if (p)
    for (i = 0; i < p.length; i++)
      bv(p[i], p[++i], p[++i]);
}
function gv(e, t, n) {
  for (var o, s = e.__k, r = 0; s && r < s.length; r++)
    (o = s[r]) && (o.__ = e, t = typeof o.type == "function" ? gv(o, t, n) : yv(n, o, o, s, o.__e, t));
  return t;
}
function yv(e, t, n, o, s, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || s != r || s.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(s), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == s)
            break e;
        e.insertBefore(s, r), l = r;
      }
  return l !== void 0 ? l : s.nextSibling;
}
function Cx(e, t, n, o, s) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || hl(e, r, null, n[r], o);
  for (r in t)
    s && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || hl(e, r, t[r], n[r], o);
}
function yh(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Sx.test(t) ? n : n + "px";
}
function hl(e, t, n, o, s) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || yh(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || yh(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? bh : vh, r) : e.removeEventListener(t, r ? bh : vh, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function vh(e) {
  this.l[e.type + !1](we.event ? we.event(e) : e);
}
function bh(e) {
  this.l[e.type + !0](we.event ? we.event(e) : e);
}
function vv(e, t, n, o, s, r, l, c, _) {
  var d, i, h, u, a, f, y, p, m, g, w, k, M, T, C, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (d = we.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (d = v.contextType) && o[d.__c], g = d ? m ? m.props.value : d.__ : o, n.__c ? y = (i = t.__c = n.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(p, g) : (t.__c = i = new vr(p, g), i.constructor = v, i.render = Mx), m && m.sub(i), i.props = p, i.state || (i.state = {}), i.context = g, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = nn({}, i.__s)), nn(i.__s, v.getDerivedStateFromProps(p, i.__s))), u = i.props, a = i.state, h)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== u && i.componentWillReceiveProps != null && i.componentWillReceiveProps(p, g), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(p, i.__s, g) === !1 || t.__v === n.__v) {
            for (i.props = p, i.state = i.__s, t.__v !== n.__v && (i.__d = !1), i.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < i._sb.length; w++)
              i.__h.push(i._sb[w]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(p, i.__s, g), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(u, a, f);
          });
        }
        if (i.context = g, i.props = p, i.__v = t, i.__P = e, k = we.__r, M = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), T = 0; T < i._sb.length; T++)
            i.__h.push(i._sb[T]);
          i._sb = [];
        } else
          do
            i.__d = !1, k && k(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++M < 25);
        i.state = i.__s, i.getChildContext != null && (o = nn(nn({}, o), i.getChildContext())), h || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(u, a)), C = d != null && d.type === A_ && d.key == null ? d.props.children : d, mv(e, Array.isArray(C) ? C : [C], t, n, o, s, r, l, c, _), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), y && (i.__E = i.__ = null), i.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Tx(n.__e, t, n, o, s, r, l, _);
    (d = we.diffed) && d(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), we.__e(x, t, n);
  }
}
function Ex(e, t) {
  we.__c && we.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      we.__e(o, n.__v);
    }
  });
}
function Tx(e, t, n, o, s, r, l, c) {
  var _, d, i, h = n.props, u = t.props, a = t.type, f = 0;
  if (a === "svg" && (s = !0), r != null) {
    for (; f < r.length; f++)
      if ((_ = r[f]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[f] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, u.is && u), r = null, c = !1;
  }
  if (a === null)
    h === u || c && e.data === u || (e.data = u);
  else {
    if (r = r && _v.call(e.childNodes), d = (h = n.props || fv).dangerouslySetInnerHTML, i = u.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (h = {}, f = 0; f < e.attributes.length; f++)
          h[e.attributes[f].name] = e.attributes[f].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Cx(e, u, h, s, c), i)
      t.__k = [];
    else if (f = t.props.children, mv(e, Array.isArray(f) ? f : [f], t, n, o, s && a !== "foreignObject", r, l, r ? r[0] : n.__k && Vr(n, 0), c), r != null)
      for (f = r.length; f--; )
        r[f] != null && dv(r[f]);
    c || ("value" in u && (f = u.value) !== void 0 && (f !== e.value || a === "progress" && !f || a === "option" && f !== h.value) && hl(e, "value", f, h.value, !1), "checked" in u && (f = u.checked) !== void 0 && f !== e.checked && hl(e, "checked", f, h.checked, !1));
  }
  return e;
}
function bv(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    we.__e(o, n);
  }
}
function wv(e, t, n) {
  var o, s;
  if (we.unmount && we.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || bv(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        we.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (s = 0; s < o.length; s++)
      o[s] && wv(o[s], t, n || typeof e.type != "function");
  n || e.__e == null || dv(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Mx(e, t, n) {
  return this.constructor(e, n);
}
_v = hv.slice, we = { __e: function(e, t, n, o) {
  for (var s, r, l; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l)
          return s.__E = s;
      } catch (c) {
        e = c;
      }
  throw e;
} }, uv = 0, vr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = nn({}, this.state), typeof e == "function" && (e = e(nn({}, n), this.props)), e && nn(n, e), e != null && this.__v && (t && this._sb.push(t), gh(this));
}, vr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), gh(this));
}, vr.prototype.render = A_, yr = [], fl.__r = 0;
var Lx = 0;
function wh(e, t, n, o, s) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Lx, __source: s, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return we.vnode && we.vnode(_), _;
}
var Sn, Cn;
class $h extends vr {
  constructor(n) {
    super(n);
    L(this, Sn, 0);
    L(this, Cn, null);
    D(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, s = n.target;
      if (!(!s || !o) && (typeof o == "string" && s.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    D(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (b(this, Sn) && cancelAnimationFrame(b(this, Sn)), H(this, Sn, requestAnimationFrame(() => {
        const s = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + s * this.props.scrollSize / this.props.clientSize), H(this, Sn, 0);
      })), n.preventDefault());
    });
    D(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    D(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    D(this, "_handleClick", (n) => {
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
    n && (H(this, Cn, typeof n == "string" ? document : n.current), b(this, Cn).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), b(this, Cn) && b(this, Cn).removeEventListener("wheel", this._handleWheel);
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
      bottom: d,
      right: i
    } = this.props, { maxScrollPos: h, scrollPos: u } = this, { dragStart: a } = this.state, f = {
      left: c,
      top: _,
      bottom: d,
      right: i,
      ...l
    }, y = {};
    return o === "horz" ? (f.height = s, f.width = n, y.width = this.barSize, y.left = Math.round(Math.min(h, u) * (n - y.width) / h)) : (f.width = s, f.height = n, y.height = this.barSize, y.top = Math.round(Math.min(h, u) * (n - y.height) / h)), /* @__PURE__ */ wh(
      "div",
      {
        className: B("scrollbar", r, {
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
Sn = new WeakMap(), Cn = new WeakMap();
function kh(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function $v({ col: e, className: t, height: n, row: o, onRenderCell: s, style: r, outerStyle: l, children: c, outerClass: _, ...d }) {
  var v;
  const i = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...l
  }, { align: h, border: u } = e.setting, a = {
    justifyContent: h ? h === "left" ? "start" : h === "right" ? "end" : h : void 0,
    ...e.setting.cellStyle,
    ...r
  }, f = ["dtable-cell", _, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], y = ["dtable-cell-content", t], p = [c ?? ((v = o.data) == null ? void 0 : v[e.name]) ?? ""], m = s ? s(p, { row: o, col: e }, M_) : p, g = [], w = [], k = {}, M = {};
  let T = "div";
  m == null || m.forEach((x) => {
    if (typeof x == "object" && x && !Qy(x) && ("html" in x || "className" in x || "style" in x || "attrs" in x || "children" in x || "tagName" in x)) {
      const A = x.outer ? g : w;
      x.html ? A.push(/* @__PURE__ */ G("div", { className: B("dtable-cell-html", x.className), style: x.style, dangerouslySetInnerHTML: { __html: x.html }, ...x.attrs ?? {} })) : (x.style && Object.assign(x.outer ? i : a, x.style), x.className && (x.outer ? f : y).push(x.className), x.children && A.push(x.children), x.attrs && Object.assign(x.outer ? k : M, x.attrs)), x.tagName && !x.outer && (T = x.tagName);
    } else
      w.push(x);
  });
  const C = T;
  return /* @__PURE__ */ G(
    "div",
    {
      className: B(f),
      style: i,
      "data-col": e.name,
      ...d,
      ...k,
      children: [
        w.length > 0 && /* @__PURE__ */ G(C, { className: B(y), style: a, ...M, children: w }),
        g
      ]
    }
  );
}
function fa({ row: e, className: t, top: n = 0, left: o = 0, width: s, height: r, cols: l, CellComponent: c = $v, onRenderCell: _ }) {
  return /* @__PURE__ */ G("div", { className: B("dtable-cells", t), style: { top: n, left: o, width: s, height: r }, children: l.map((d) => d.visible ? /* @__PURE__ */ G(
    c,
    {
      col: d,
      row: e,
      onRenderCell: _
    },
    d.name
  ) : null) });
}
function kv({
  row: e,
  className: t,
  top: n,
  height: o,
  fixedLeftCols: s,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: c,
  scrollWidth: _,
  scrollColsWidth: d,
  fixedRightWidth: i,
  scrollLeft: h,
  CellComponent: u = $v,
  onRenderCell: a,
  style: f,
  ...y
}) {
  let p = null;
  s != null && s.length && (p = /* @__PURE__ */ G(
    fa,
    {
      className: "dtable-fixed-left",
      cols: s,
      width: c,
      row: e,
      CellComponent: u,
      onRenderCell: a
    }
  ));
  let m = null;
  l != null && l.length && (m = /* @__PURE__ */ G(
    fa,
    {
      className: "dtable-flexable",
      cols: l,
      left: c - h,
      width: Math.max(_, d),
      row: e,
      CellComponent: u,
      onRenderCell: a
    }
  ));
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ G(
    fa,
    {
      className: "dtable-fixed-right",
      cols: r,
      left: c + _,
      width: i,
      row: e,
      CellComponent: u,
      onRenderCell: a
    }
  ));
  const w = { top: n, height: o, lineHeight: `${o - 2}px`, ...f };
  return /* @__PURE__ */ G(
    "div",
    {
      className: B("dtable-row", t),
      style: w,
      "data-id": e.id,
      ...y,
      children: [
        p,
        m,
        g
      ]
    }
  );
}
function Ax({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const s = t({ props: o }, M_);
    s && Object.assign(o, s);
  }
  return /* @__PURE__ */ G("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ G(kv, { ...o }) });
}
function Dx({
  className: e,
  style: t,
  top: n,
  rows: o,
  height: s,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: c,
  ..._
}) {
  return t = { ...t, top: n, height: s }, /* @__PURE__ */ G("div", { className: B("dtable-rows", e), style: t, children: o.map((d) => {
    const i = {
      className: `dtable-row-${d.index % 2 ? "odd" : "even"}`,
      row: d,
      top: d.top - l,
      height: r,
      ..._
    }, h = c == null ? void 0 : c({ props: i, row: d }, M_);
    return h && Object.assign(i, h), /* @__PURE__ */ G(kv, { ...i });
  }) });
}
const dl = /* @__PURE__ */ new Map(), pl = [];
function xv(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && dl.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  dl.set(n, e), t != null && t.buildIn && !pl.includes(n) && pl.push(n);
}
function $o(e, t) {
  xv(e, t);
  const n = (o) => {
    if (!o)
      return e;
    const { defaultOptions: s, ...r } = e;
    return {
      ...r,
      defaultOptions: { ...s, ...o }
    };
  };
  return n.plugin = e, n;
}
function Sv(e) {
  return dl.delete(e);
}
function Nx(e) {
  if (typeof e == "string") {
    const t = dl.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Cv(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const s = Nx(o);
    s && (n.has(s.name) || ((r = s.plugins) != null && r.length && Cv(e, s.plugins, n), e.push(s), n.add(s.name)));
  }), e;
}
function Rx(e = [], t = !0) {
  return t && pl.length && e.unshift(...pl), e != null && e.length ? Cv([], e, /* @__PURE__ */ new Set()) : [];
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
var Fi, En, ho, Wt, lt, Ut, Ce, Ze, ct, po, yi, vi, kt, mo, go, ac, Ev, _c, Tv, uc, Mv, fc, Lv, bi, Wa, hc, dc, wi, $i, pc, mc, gc, Av, yc, Dv, vc, Nv;
let Px = (Fi = class extends gr {
  constructor(n) {
    super(n);
    L(this, ac);
    L(this, _c);
    L(this, uc);
    L(this, fc);
    L(this, bi);
    L(this, gc);
    L(this, yc);
    L(this, vc);
    D(this, "ref", yx());
    L(this, En, 0);
    L(this, ho, void 0);
    L(this, Wt, !1);
    L(this, lt, void 0);
    L(this, Ut, void 0);
    L(this, Ce, []);
    L(this, Ze, void 0);
    L(this, ct, /* @__PURE__ */ new Map());
    L(this, po, {});
    L(this, yi, void 0);
    L(this, vi, []);
    D(this, "updateLayout", () => {
      b(this, En) && cancelAnimationFrame(b(this, En)), H(this, En, requestAnimationFrame(() => {
        H(this, Ze, void 0), this.forceUpdate(), H(this, En, 0);
      }));
    });
    L(this, kt, (n, o) => {
      o = o || n.type;
      const s = b(this, ct).get(o);
      if (s != null && s.length) {
        for (const r of s)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    L(this, mo, (n) => {
      b(this, kt).call(this, n, `window_${n.type}`);
    });
    L(this, go, (n) => {
      b(this, kt).call(this, n, `document_${n.type}`);
    });
    L(this, hc, (n, o) => {
      if (this.options.onRenderRow) {
        const s = this.options.onRenderRow.call(this, n, o);
        s && Object.assign(n.props, s);
      }
      return b(this, Ce).forEach((s) => {
        if (s.onRenderRow) {
          const r = s.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    L(this, dc, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), b(this, Ce).forEach((s) => {
      s.onRenderHeaderRow && (n.props = s.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    L(this, wi, (n, o, s) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, s)), this.options[c] && (n = this.options[c].call(this, n, o, s)), b(this, Ce).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, s));
      }), n;
    });
    L(this, $i, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    L(this, pc, (n) => {
      var c, _, d, i, h;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: s, colName: r, cellElement: l } = o;
      if (s === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), b(this, Ce).forEach((u) => {
          var a;
          (a = u.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: u } = o, a = this.layout.visibleRows.find((f) => f.id === s);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: s, rowInfo: a, element: l, rowElement: u })) === !0)
            return;
          for (const f of b(this, Ce))
            if (((d = f.onCellClick) == null ? void 0 : d.call(this, n, { colName: r, rowID: s, rowInfo: a, element: l, rowElement: u })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, n, { rowID: s, rowInfo: a, element: u })) === !0)
          return;
        for (const f of b(this, Ce))
          if (((h = f.onRowClick) == null ? void 0 : h.call(this, n, { rowID: s, rowInfo: a, element: u })) === !0)
            return;
      }
    });
    L(this, mc, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, ho, n.id ?? `dtable-${xx(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, Ut, Object.freeze(Rx(n.plugins))), b(this, Ut).forEach((o) => {
      var c;
      const { methods: s, data: r, state: l } = o;
      s && Object.entries(s).forEach(([_, d]) => {
        typeof d == "function" && Object.assign(this, { [_]: d.bind(this) });
      }), r && Object.assign(b(this, po), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = b(this, Ze)) == null ? void 0 : n.options) || b(this, lt) || xh();
  }
  get plugins() {
    return b(this, Ce);
  }
  get layout() {
    return b(this, Ze);
  }
  get id() {
    return b(this, ho);
  }
  get data() {
    return b(this, po);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, lt, void 0);
  }
  componentDidMount() {
    if (b(this, Wt) ? this.forceUpdate() : I(this, bi, Wa).call(this), b(this, Ce).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([s, r]) => {
        r && this.on(s, r);
      }));
    }), this.on("click", b(this, pc)), this.on("keydown", b(this, mc)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, yi, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    b(this, Ce).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    b(this, Wt) ? I(this, bi, Wa).call(this) : b(this, Ce).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = b(this, yi)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const s of b(this, ct).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), b(this, mo)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), b(this, go)) : n.removeEventListener(s, b(this, kt));
    b(this, Ce).forEach((s) => {
      var r;
      (r = s.onUnmounted) == null || r.call(this);
    }), b(this, Ut).forEach((s) => {
      var r;
      (r = s.onDestory) == null || r.call(this);
    }), H(this, po, {}), b(this, ct).clear();
  }
  on(n, o, s) {
    var l;
    s && (n = `${s}_${n}`);
    const r = b(this, ct).get(n);
    r ? r.push(o) : (b(this, ct).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), b(this, mo)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), b(this, go)) : (l = this.ref.current) == null || l.addEventListener(n, b(this, kt)));
  }
  off(n, o, s) {
    var c;
    s && (n = `${s}_${n}`);
    const r = b(this, ct).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (b(this, ct).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), b(this, mo)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), b(this, go)) : (c = this.ref.current) == null || c.removeEventListener(n, b(this, kt)));
  }
  emitCustomEvent(n, o) {
    b(this, kt).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: s, scrollTop: r, rowsHeightTotal: l, rowsHeight: c, rowHeight: _, colsInfo: { scrollWidth: d, scrollColsWidth: i } } = this.layout, { to: h } = n;
    let { scrollLeft: u, scrollTop: a } = n;
    if (h === "up" || h === "down")
      a = r + (h === "down" ? 1 : -1) * Math.floor(c / _) * _;
    else if (h === "left" || h === "right")
      u = s + (h === "right" ? 1 : -1) * d;
    else if (h === "home")
      a = 0;
    else if (h === "end")
      a = l - c;
    else if (h === "left-begin")
      u = 0;
    else if (h === "right-end")
      u = i - d;
    else {
      const { offsetLeft: y, offsetTop: p } = n;
      typeof y == "number" && (u = s + y), typeof p == "number" && (u = r + p);
    }
    const f = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, i - d)), u !== s && (f.scrollLeft = u)), typeof a == "number" && (a = Math.max(0, Math.min(a, l - c)), a !== r && (f.scrollTop = a)), Object.keys(f).length ? (this.setState(f, () => {
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
    if (!b(this, lt))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: s, state: r } = n;
    if (s === "layout")
      H(this, Ze, void 0);
    else if (s === "options") {
      if (H(this, lt, void 0), !b(this, Ze))
        return;
      H(this, Ze, void 0);
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
    return ki(b(this, vi), n, o, s, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = I(this, vc, Nv).call(this), { className: o, rowHover: s, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: d } = this.options, i = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, h = ["dtable", o, {
      "dtable-hover-row": s,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": d
    }], u = [];
    return n && b(this, Ce).forEach((a) => {
      var y;
      const f = (y = a.onRender) == null ? void 0 : y.call(this, n);
      f && (f.style && Object.assign(i, f.style), f.className && h.push(f.className), f.children && u.push(f.children));
    }), /* @__PURE__ */ G(
      "div",
      {
        id: b(this, ho),
        className: B(h),
        style: i,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && I(this, ac, Ev).call(this, n),
          n && I(this, _c, Tv).call(this, n),
          n && I(this, uc, Mv).call(this, n),
          n && I(this, fc, Lv).call(this, n)
        ]
      }
    );
  }
}, En = new WeakMap(), ho = new WeakMap(), Wt = new WeakMap(), lt = new WeakMap(), Ut = new WeakMap(), Ce = new WeakMap(), Ze = new WeakMap(), ct = new WeakMap(), po = new WeakMap(), yi = new WeakMap(), vi = new WeakMap(), kt = new WeakMap(), mo = new WeakMap(), go = new WeakMap(), ac = new WeakSet(), Ev = function(n) {
  const { header: o, colsInfo: s, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ G(
      Ax,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: b(this, wi),
        onRenderRow: b(this, dc),
        ...s
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ G(
    va,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, _c = new WeakSet(), Tv = function(n) {
  const { headerHeight: o, rowsHeight: s, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: d } = n;
  return /* @__PURE__ */ G(
    Dx,
    {
      top: o,
      height: s,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: d,
      onRenderCell: b(this, wi),
      onRenderRow: b(this, hc),
      ...c
    }
  );
}, uc = new WeakSet(), Mv = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const s = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ G(
    va,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: s,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, fc = new WeakSet(), Lv = function(n) {
  const o = [], { scrollLeft: s, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: d } = n, { scrollColsWidth: i, scrollWidth: h } = r, { scrollbarSize: u = 12, horzScrollbarPos: a } = this.options;
  return i > h && o.push(
    /* @__PURE__ */ G(
      $h,
      {
        type: "horz",
        scrollPos: s,
        scrollSize: i,
        clientSize: h,
        onScroll: b(this, $i),
        left: r.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -u) + d,
        size: u,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > c && o.push(
    /* @__PURE__ */ G(
      $h,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: c,
        onScroll: b(this, $i),
        right: 0,
        size: u,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, bi = new WeakSet(), Wa = function() {
  var n;
  H(this, Wt, !1), (n = this.options.afterRender) == null || n.call(this), b(this, Ce).forEach((o) => {
    var s;
    return (s = o.afterRender) == null ? void 0 : s.call(this);
  });
}, hc = new WeakMap(), dc = new WeakMap(), wi = new WeakMap(), $i = new WeakMap(), pc = new WeakMap(), mc = new WeakMap(), gc = new WeakSet(), Av = function() {
  if (b(this, lt))
    return !1;
  const o = { ...xh(), ...b(this, Ut).reduce((s, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(s, l), s;
  }, {}), ...this.props };
  return H(this, lt, o), H(this, Ce, b(this, Ut).reduce((s, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (s.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), s;
  }, [])), H(this, vi, [this.options.i18n, ...this.plugins.map((s) => s.i18n)].filter(Boolean)), !0;
}, yc = new WeakSet(), Dv = function() {
  var J, ke;
  const { plugins: n } = this;
  let o = b(this, lt);
  const s = {
    flex: /* @__PURE__ */ G("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ G("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((z) => {
    var $e;
    const Z = ($e = z.beforeLayout) == null ? void 0 : $e.call(this, o);
    Z && (o = { ...o, ...Z }), Object.assign(s, z.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], d = [], i = [], h = {}, u = [], a = [];
  let f = 0, y = 0, p = 0;
  o.cols.forEach((z) => {
    if (z.hidden)
      return;
    const {
      name: Z,
      type: $e = "",
      fixed: le = !1,
      flex: X = !1,
      width: ce = r,
      minWidth: Re = l,
      maxWidth: Pe = c,
      ...Iv
    } = z, ee = {
      name: Z,
      type: $e,
      setting: {
        name: Z,
        type: $e,
        fixed: le,
        flex: X,
        width: ce,
        minWidth: Re,
        maxWidth: Pe,
        ...Iv
      },
      flex: le ? 0 : X === !0 ? 1 : typeof X == "number" ? X : 0,
      left: 0,
      width: kh(ce, Re, Pe),
      realWidth: 0,
      visible: !0,
      index: u.length
    };
    n.forEach((P_) => {
      var O_, H_;
      const Li = (O_ = P_.colTypes) == null ? void 0 : O_[$e];
      if (Li) {
        const W_ = typeof Li == "function" ? Li(ee) : Li;
        W_ && Object.assign(ee.setting, W_);
      }
      (H_ = P_.onAddCol) == null || H_.call(this, ee);
    }), ee.width = kh(ee.setting.width ?? ee.width, ee.setting.minWidth ?? Re, ee.setting.maxWidth ?? Pe), ee.realWidth = ee.realWidth || ee.width, le === "left" ? (ee.left = f, f += ee.width, _.push(ee)) : le === "right" ? (ee.left = y, y += ee.width, d.push(ee)) : (ee.left = p, p += ee.width, i.push(ee)), ee.flex && a.push(ee), u.push(ee), h[ee.name] = ee;
  });
  let m = o.width, g = 0;
  const w = f + p + y;
  if (typeof m == "function" && (m = m.call(this, w)), m === "auto")
    g = w;
  else if (m === "100%") {
    const { parent: z } = this;
    if (z)
      g = z.clientWidth;
    else {
      g = 0, H(this, Wt, !0);
      return;
    }
  } else
    g = m ?? 0;
  const { data: k, rowKey: M = "id", rowHeight: T } = o, C = [], v = (z, Z, $e) => {
    var X, ce;
    const le = { data: $e ?? { [M]: z }, id: z, index: C.length, top: 0 };
    if ($e || (le.lazy = !0), C.push(le), ((X = o.onAddRow) == null ? void 0 : X.call(this, le, Z)) !== !1) {
      for (const Re of n)
        if (((ce = Re.onAddRow) == null ? void 0 : ce.call(this, le, Z)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let z = 0; z < k; z++)
      v(`${z}`, z);
  else
    Array.isArray(k) && k.forEach((z, Z) => {
      typeof z == "object" ? v(`${z[M] ?? ""}`, Z, z) : v(`${z ?? ""}`, Z);
    });
  let x = C;
  const A = {};
  if (o.onAddRows) {
    const z = o.onAddRows.call(this, x);
    z && (x = z);
  }
  for (const z of n) {
    const Z = (J = z.onAddRows) == null ? void 0 : J.call(this, x);
    Z && (x = Z);
  }
  x.forEach((z, Z) => {
    A[z.id] = z, z.index = Z, z.top = z.index * T;
  });
  const { header: F, footer: j } = o, R = F ? o.headerHeight || T : 0, S = j ? o.footerHeight || T : 0;
  let $ = o.height, N = 0;
  const E = x.length * T, O = R + S + E;
  if (typeof $ == "function" && ($ = $.call(this, O)), $ === "auto")
    N = O;
  else if (typeof $ == "object")
    N = Math.min($.max, Math.max($.min, O));
  else if ($ === "100%") {
    const { parent: z } = this;
    if (z)
      N = z.clientHeight;
    else {
      N = 0, H(this, Wt, !0);
      return;
    }
  } else
    N = $;
  const P = N - R - S, U = g - f - y, Y = {
    options: o,
    allRows: C,
    width: g,
    height: N,
    rows: x,
    rowsMap: A,
    rowHeight: T,
    rowsHeight: P,
    rowsHeightTotal: E,
    header: F,
    footer: j,
    footerGenerators: s,
    headerHeight: R,
    footerHeight: S,
    colsMap: h,
    colsList: u,
    flexCols: a,
    colsInfo: {
      fixedLeftCols: _,
      fixedRightCols: d,
      scrollCols: i,
      fixedLeftWidth: f,
      scrollWidth: U,
      scrollColsWidth: p,
      fixedRightWidth: y
    }
  }, V = (ke = o.onLayout) == null ? void 0 : ke.call(this, Y);
  V && Object.assign(Y, V), n.forEach((z) => {
    if (z.onLayout) {
      const Z = z.onLayout.call(this, Y);
      Z && Object.assign(Y, Z);
    }
  }), H(this, Ze, Y);
}, vc = new WeakSet(), Nv = function() {
  (I(this, gc, Av).call(this) || !b(this, Ze)) && I(this, yc, Dv).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: s, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: c } } = n;
  if (s.length) {
    const w = l - c;
    if (w > 0) {
      const k = s.reduce((T, C) => T + C.flex, 0);
      let M = 0;
      s.forEach((T) => {
        const C = Math.min(w - M, Math.ceil(w * (T.flex / k)));
        T.realWidth = C + T.width, M += T.realWidth;
      });
    } else
      s.forEach((k) => {
        k.realWidth = k.width;
      });
  }
  o = Math.min(Math.max(0, c - l), o);
  let _ = 0;
  r.forEach((w) => {
    w.left = _, _ += w.realWidth, w.visible = w.left + w.realWidth >= o && w.left <= o + l;
  });
  const { rowsHeightTotal: d, rowsHeight: i, rows: h, rowHeight: u } = n, a = Math.min(Math.max(0, d - i), this.state.scrollTop), f = Math.floor(a / u), y = a + i, p = Math.min(h.length, Math.ceil(y / u)), m = [], { rowDataGetter: g } = this.options;
  for (let w = f; w < p; w++) {
    const k = h[w];
    k.lazy && g && (k.data = g([k.id])[0], k.lazy = !1), m.push(k);
  }
  return n.visibleRows = m, n.scrollTop = a, n.scrollLeft = o, n;
}, D(Fi, "addPlugin", xv), D(Fi, "removePlugin", Sv), Fi);
function Sh(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((s) => s.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((s) => s.classList.add(o));
}
const Ox = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var s;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const n = (s = e.target) == null ? void 0 : s.closest(".dtable-cell");
      if (!n || t === "header" && !n.closest(".dtable-header"))
        return;
      const o = (n == null ? void 0 : n.getAttribute("data-col")) ?? !1;
      Sh(this, o);
    },
    mouseleave() {
      Sh(this, !1);
    }
  }
}, Hx = $o(Ox, { buildIn: !0 });
function Wx(e, t) {
  var l, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: s } = this.options, r = (_, d) => {
    s && !s.call(this, _) || !!n[_] === d || (d ? n[_] = !0 : delete n[_], o[_] = d);
  };
  if (e === void 0 ? (t === void 0 && (t = !Rv.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
    r(_, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((_) => {
    r(_, t ?? !n[_]);
  })), Object.keys(o).length) {
    const _ = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, e, o, n);
    _ && Object.keys(_).forEach((d) => {
      _[d] ? n[d] = !0 : delete n[d];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var d;
      (d = this.options.onCheckChange) == null || d.call(this, o);
    });
  }
  return o;
}
function Ux(e) {
  return this.state.checkedRows[e] ?? !1;
}
function Rv() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((s, r) => s + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function Ix() {
  return Object.keys(this.state.checkedRows);
}
const Fx = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Wx,
    isRowChecked: Ux,
    isAllRowChecked: Rv,
    getChecks: Ix
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
      const e = this.isAllRowChecked();
      return [
        /* @__PURE__ */ G("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ G("input", { type: "checkbox", checked: e }) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ G("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var c;
    const { id: o } = t, { canRowCheckable: s } = this.options;
    if (s && !s.call(this, o))
      return e;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const _ = this.isRowChecked(o), d = ((c = this.options.checkboxRender) == null ? void 0 : c.call(this, _, o)) ?? /* @__PURE__ */ G("input", { type: "checkbox", checked: _ });
      e.unshift(d), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var l;
    const { id: o } = t, { checkbox: s } = n.setting;
    if (typeof s == "function" ? s.call(this, o) : s) {
      const c = this.isAllRowChecked(), _ = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, c, o)) ?? /* @__PURE__ */ G("input", { type: "checkbox", checked: c });
      e.unshift(_), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (this.isRowChecked(t.id))
      return { className: B(e.className, "is-checked") };
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!t)
      return;
    const n = t.closest('input[type="checkbox"],.dtable-checkbox');
    n && (this.toggleCheckRows(n.checked), e.stopPropagation());
  },
  onRowClick(e, { rowID: t }) {
    const n = e.target;
    if (!n)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
}, Bx = $o(Fx);
var Pv = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Pv || {});
function Ua(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let s = !1, { parent: r } = t;
  for (; r; ) {
    const l = Ua.call(this, r);
    if (l.state !== "expanded") {
      s = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = s ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Ua.call(this, t.parent).level + 1 : 0, t;
}
function jx(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !Ov.call(this)), t) {
      const s = o.entries();
      for (const [r, l] of s)
        l.state === "expanded" && (n[r] = !0);
    } else
      n = {};
  else {
    const s = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[s[0]]), s.forEach((r) => {
      const l = o.get(r);
      t && (l != null && l.children) ? n[r] = !0 : delete n[r];
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
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Hv(e, t = 0, n, o = 0) {
  var s;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    l && (l.level === o && (l.order = t++), (s = l.children) != null && s.length && (t = Hv(e, t, l.children, o + 1)));
  }
  return t;
}
function Wv(e, t, n, o) {
  const s = e.getNestedRowInfo(t);
  return !s || s.state === "" || !s.children || s.children.forEach((r) => {
    o[r] = n, Wv(e, r, n, o);
  }), s;
}
function Uv(e, t, n, o, s) {
  var c;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const d = !!(o[_] !== void 0 ? o[_] : s[_]);
    return n === d;
  })) && (o[t] = n), r.parent && Uv(e, r.parent, n, o, s);
}
const zx = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, t) {
      const { nestedMap: n } = this.data, o = n.get(e.id), s = n.get(t.id);
      return (o == null ? void 0 : o.parent) === (s == null ? void 0 : s.parent);
    },
    beforeCheckRows(e, t, n) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const o = {};
      return Object.entries(t).forEach(([s, r]) => {
        const l = Wv(this, s, r, o);
        l != null && l.parent && Uv(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: jx,
    isAllCollapsed: Ov,
    getNestedRowInfo: Ua
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var s, r;
    const { nestedMap: t } = this.data, n = (s = e.data) == null ? void 0 : s[this.options.nestedParentKey ?? "parent"], o = t.get(e.id) ?? {
      state: "",
      level: 0
    };
    if (o.parent = n, (r = e.data) != null && r[this.options.asParentKey ?? "asParent"] && (o.children = []), t.set(e.id, o), n) {
      let l = t.get(n);
      l || (l = {
        state: "",
        level: 0
      }, t.set(n, l)), l.children || (l.children = []), l.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), Hv(this.data.nestedMap), e.sort((t, n) => {
      const o = this.getNestedRowInfo(t.id), s = this.getNestedRowInfo(n.id), r = (o.order ?? 0) - (s.order ?? 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var c;
    const { id: o, data: s } = n, { nestedToggle: r } = t.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && e.unshift(((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, o, t, s)) ?? /* @__PURE__ */ G("a", { role: "button", className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ G("span", { className: "toggle-icon" }) })), l.level) {
      let { nestedIndent: _ = r } = t.setting;
      _ && (_ === !0 && (_ = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ G("div", { className: "dtable-nested-indent", style: { width: _ * l.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var s;
    const { id: o } = t;
    return n.setting.nestedToggle && e.unshift(((s = this.options.onRenderNestedToggle) == null ? void 0 : s.call(this, void 0, o, n, void 0)) ?? /* @__PURE__ */ G("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ G("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: B(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = B(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!(!t || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(e, { rowID: t }) {
    const n = e.target;
    if (!(!n || !this.getNestedRowInfo(t).children || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow(t), !0;
  }
}, Vx = $o(zx);
const Yx = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e) {
        return e[0] = {
          html: e[0]
        }, e;
      }
    },
    link: {
      onRenderCell(e, { col: t, row: n }) {
        const { linkTemplate: o = "", linkProps: s } = t.setting, r = We(o, n.data);
        return e[0] = /* @__PURE__ */ G("a", { href: r, ...s, children: e[0] }), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: o } = n, { avatarWithName: s, avatarClass: r = "size-xs circle", avatarKey: l = `${t.name}Avatar` } = t.setting, c = /* @__PURE__ */ G("div", { className: `avatar ${r} flex-none`, children: /* @__PURE__ */ G("img", { src: o ? o[l] : "" }) });
        return s ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: s = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, l = (n - o) / 2, c = n / 2, _ = e[0];
        return e[0] = /* @__PURE__ */ G("svg", { width: n, height: n, children: [
          /* @__PURE__ */ G("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: s, fill: "transparent" }),
          /* @__PURE__ */ G("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - _) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ G("text", { x: c, y: c + o, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${l}px` }, children: Math.round(_) })
        ] }), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: t, row: n }) {
        var c;
        const o = (c = n.data) == null ? void 0 : c[t.name];
        if (!o)
          return e;
        const { actionBtnTemplate: s = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = t.setting;
        return [{
          html: o.map((_) => {
            typeof _ == "string" && (_ = { action: _ });
            const d = r[_.action];
            return d && (_ = { className: l, ...d, ..._ }), We(s, _);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(e, { col: t }) {
        let { format: n } = t.setting;
        if (!n)
          return e;
        typeof n == "string" && (n = { type: "text", format: n });
        const { format: o, type: s } = n, r = e[0];
        return typeof o == "function" ? e[0] = s === "html" ? { html: o(r) } : o(r) : s === "datetime" ? e[0] = Da(r, o) : s === "html" ? e[0] = { html: We(o, r) } : e[0] = We(o, r), e;
      }
    }
  }
}, qx = $o(Yx, { buildIn: !0 }), Gx = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: s } = t.setting, r = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ G("div", { className: `dtable-sort dtable-sort-${r}` }),
        { outer: !0, attrs: { "data-sort": r } }
      ), o) {
        const l = typeof o == "function" ? o.call(this, t, r) : o;
        e.push(
          { tagName: "a", attrs: { href: l, ...s } }
        );
      }
    }
    return e;
  }
}, Xx = $o(Gx, { buildIn: !0 }), Kx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Pv,
  checkable: Bx,
  colHover: Hx,
  nested: Vx,
  rich: qx,
  sortType: Xx
}, Symbol.toStringTag, { value: "Module" }));
class xo extends Te {
}
D(xo, "NAME", "dtable"), D(xo, "Component", Px), D(xo, "definePlugin", $o), D(xo, "removePlugin", Sv), D(xo, "plugins", Kx);
var Be;
class Lo extends ot {
  constructor() {
    super(...arguments);
    L(this, Be, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Be, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), b(this, Be) && (this.addActive(b(this, Be).parentElement, b(this, Be)), b(this, Be).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Be, document.querySelector(n)), b(this, Be) && (this.addActive(b(this, Be).parentElement, b(this, Be)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
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
Be = new WeakMap(), D(Lo, "NAME", "NavTabs"), D(Lo, "NAV_CLASS", "nav-tabs"), D(Lo, "EVENTS", !0), D(Lo, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (e) => {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new Lo(e.target).showTarget());
});
export {
  J_ as ActionMenu,
  Q_ as ActionMenuNested,
  ff as Avatar,
  hf as BtnGroup,
  iu as Button,
  He as ContextMenu,
  xo as DTable,
  je as Datepicker,
  De as Dropdown,
  Fa as EventBus,
  su as Menu,
  Di as Messager,
  Oe as Modal,
  sr as ModalTrigger,
  Lf as Nav,
  Lo as NavTabs,
  Nf as Pager,
  If as Picker,
  Uu as ProgressCircle,
  Vu as Switch,
  yt as TIME_DAY,
  ze as Timepicker,
  Zf as Toolbar,
  Ve as Tooltip,
  _h as VirtualGrid,
  tb as addI18nMap,
  aS as browser,
  Df as calculateTimestamp,
  _S as cash,
  Qx as convertBytes,
  Ie as createDate,
  Zx as formatBytes,
  Da as formatDate,
  yS as formatDateSpan,
  We as formatString,
  Qv as getLangCode,
  vS as getTimeBeforeDesc,
  ki as i18n,
  gS as isDBY,
  Xc as isObject,
  Ei as isSameDay,
  Q$ as isSameMonth,
  hS as isSameWeek,
  Af as isSameYear,
  dS as isToday,
  mS as isTomorrow,
  pS as isYesterday,
  ya as mergeDeep,
  ga as nativeEvents,
  eb as setLangCode,
  Yw as store
};
