var bg = Object.defineProperty;
var wg = (e, t, n) => t in e ? bg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var L = (e, t, n) => (wg(e, typeof t != "symbol" ? t + "" : t, n), n), nc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var y = (e, t, n) => (nc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), T = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, H = (e, t, n, o) => (nc(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n), Aa = (e, t, n, o) => ({
  set _(i) {
    H(e, t, i, n);
  },
  get _() {
    return y(e, t, o);
  }
}), W = (e, t, n) => (nc(e, t, "access private method"), n);
var Nl, ee, Jf, Qf, fo, Ta, As = {}, eu = [], $g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ct(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function tu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function nu(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Nl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return fs(e, l, o, i, null);
}
function fs(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Jf };
  return i == null && ee.vnode != null && ee.vnode(r), r;
}
function kg() {
  return { current: null };
}
function Dl(e) {
  return e.children;
}
function us(e, t) {
  this.props = e, this.context = t;
}
function Ko(e, t) {
  if (t == null)
    return e.__ ? Ko(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ko(e) : null;
}
function ou(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ou(e);
  }
}
function Ma(e) {
  (!e.__d && (e.__d = !0) && fo.push(e) && !Ts.__r++ || Ta !== ee.debounceRendering) && ((Ta = ee.debounceRendering) || setTimeout)(Ts);
}
function Ts() {
  for (var e; Ts.__r = fo.length; )
    e = fo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), fo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ct({}, r)).__v = r.__v + 1, Wc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ko(r), r.__h), lu(o, r), r.__e != l && ou(r)));
    });
}
function ru(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || eu, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? fs(null, a, null, null, a) : Array.isArray(a) ? fs(Dl, { children: a }, null, null, null) : a.__b > 0 ? fs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Wc(e, a, f = f || As, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = su(a, _, e) : _ = iu(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Ko(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && au(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      cu(p[s], p[++s], p[++s]);
}
function su(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? su(o, t, n) : iu(n, o, o, i, o.__e, t));
  return t;
}
function iu(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function xg(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ms(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ms(e, r, t[r], n[r], o);
}
function La(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || $g.test(t) ? n : n + "px";
}
function Ms(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || La(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || La(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Na : Ra, r) : e.removeEventListener(t, r ? Na : Ra, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function Ra(e) {
  this.l[e.type + !1](ee.event ? ee.event(e) : e);
}
function Na(e) {
  this.l[e.type + !0](ee.event ? ee.event(e) : e);
}
function Wc(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ee.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new us(p, g), s.constructor = v, s.render = Cg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ct({}, s.__s)), Ct(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = ee.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ct(Ct({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Dl && h.key == null ? h.props.children : h, ru(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Sg(n.__e, t, n, o, i, r, l, _);
    (h = ee.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ee.__e(x, t, n);
  }
}
function lu(e, t) {
  ee.__c && ee.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ee.__e(o, n.__v);
    }
  });
}
function Sg(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Nl.call(e.childNodes), h = (d = n.props || As).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (xg(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, ru(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ko(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && tu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Ms(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ms(e, "checked", u, d.checked, !1));
  }
  return e;
}
function cu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ee.__e(o, n);
  }
}
function au(e, t, n) {
  var o, i;
  if (ee.unmount && ee.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || cu(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ee.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && au(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || tu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Cg(e, t, n) {
  return this.constructor(e, n);
}
function Eg(e, t, n) {
  var o, i, r;
  ee.__ && ee.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Wc(t, e = (!o && n || t).__k = nu(Dl, null, [e]), i || As, As, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Nl.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), lu(r, e);
}
Nl = eu.slice, ee = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Jf = 0, Qf = function(e) {
  return e != null && e.constructor === void 0;
}, us.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ct({}, this.state), typeof e == "function" && (e = e(Ct({}, n), this.props)), e && Ct(n, e), e != null && this.__v && (t && this._sb.push(t), Ma(this));
}, us.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ma(this));
}, us.prototype.render = Dl, fo = [], Ts.__r = 0;
var Ag = 0;
function _u(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ag, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ee.vnode && ee.vnode(_), _;
}
var _t;
class Tg {
  constructor(t = "") {
    T(this, _t, void 0);
    typeof t == "object" ? H(this, _t, t) : H(this, _t, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    y(this, _t).addEventListener(t, n, o);
  }
  once(t, n, o) {
    y(this, _t).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    y(this, _t).removeEventListener(t, n, o);
  }
  emit(t) {
    return y(this, _t).dispatchEvent(t), t;
  }
}
_t = new WeakMap();
const yc = /* @__PURE__ */ new Set([
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
class Ic extends Tg {
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
    return typeof t == "string" && (yc.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Ic.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (yc.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var ft, vr, tn, io;
class Da extends Ic {
  constructor(n = "", o) {
    super(n);
    T(this, tn);
    T(this, ft, /* @__PURE__ */ new Map());
    T(this, vr, void 0);
    H(this, vr, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = W(this, tn, io).call(this, n), super.on(n, o, i), y(this, ft).set(o, [n, i]);
  }
  off(n, o, i) {
    n = W(this, tn, io).call(this, n), super.off(n, o, i), y(this, ft).delete(o);
  }
  once(n, o, i) {
    n = W(this, tn, io).call(this, n);
    const r = (l) => {
      o(l), y(this, ft).delete(r);
    };
    super.once(n, r, i), y(this, ft).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = W(this, tn, io).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(y(this, ft).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), y(this, ft).clear();
  }
}
ft = new WeakMap(), vr = new WeakMap(), tn = new WeakSet(), io = function(n) {
  const o = y(this, vr);
  return yc.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Mg(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let o = e;
  const i = [o];
  for (; typeof o == "object" && o !== null && t.length; ) {
    let r = t.shift(), l;
    const c = r.indexOf("[");
    if (c > 0 && c < r.length - 1 && r.endsWith("]") && (l = r.substring(c + 1, r.length - 1), r = r.substring(0, c)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return i;
}
function Lg(e, t, n) {
  const o = Mg(e, t), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function oc(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function vc(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (oc(e) && oc(n))
    for (const o in n)
      oc(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), vc(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return vc(e, ...t);
}
function Re(e, ...t) {
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const n = t[0];
    return Object.keys(n).forEach((o) => {
      const i = n[o] ?? 0;
      e = e.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
    }), e;
  }
  for (let n = 0; n < t.length; n++) {
    const o = t[n] ?? "";
    e = e.replace(new RegExp(`\\{${n}\\}`, "g"), `${o}`);
  }
  return e;
}
var Uc = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Uc || {});
function w$(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Uc[n]).toFixed(t) + n);
}
const $$ = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * Uc[o];
};
var Zf;
let Fc = ((Zf = document.documentElement.getAttribute("lang")) == null ? void 0 : Zf.toLowerCase()) ?? "zh_cn", vt;
function Rg() {
  return Fc;
}
function Ng(e) {
  Fc = e.toLowerCase();
}
function Dg(e, t) {
  vt || (vt = {}), typeof e == "string" && (e = { [e]: t ?? {} }), vc(vt, e);
}
function Kr(e, t, n, o, i, r) {
  Array.isArray(e) ? vt && e.unshift(vt) : e = vt ? [vt, e] : [e], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || Fc;
  let c;
  for (const _ of e) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const s = r && _ === vt ? `${r}.${t}` : t;
    if (c = Lg(h, s), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? Re(c, ...Array.isArray(n) ? n : [n]) : c;
}
Kr.addLang = Dg;
Kr.getCode = Rg;
Kr.setCode = Ng;
function Pg(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
const rc = /* @__PURE__ */ new Map();
var ut, $n, je;
class Xe {
  constructor(t, n) {
    T(this, ut, void 0);
    T(this, $n, void 0);
    T(this, je, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && H(this, je, new Da(t, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, ut, { ...this.constructor.DEFAULT }), this.setOptions({ ...t instanceof HTMLElement ? Pg(t.dataset) : null, ...n }), this.constructor.all.set(t, this), H(this, $n, t), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return y(this, ut);
  }
  get element() {
    return y(this, $n);
  }
  get events() {
    return y(this, je);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(t) {
    return t && Object.assign(y(this, ut), t), y(this, ut);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(y(this, $n)), y(this, je) && (this.emit("destroyed", this), y(this, je).offAll());
  }
  on(t, n, o) {
    var i;
    (i = y(this, je)) == null || i.on(t, n, o);
  }
  once(t, n, o) {
    var i;
    (i = y(this, je)) == null || i.once(t, n, o);
  }
  off(t, n, o) {
    var i;
    (i = y(this, je)) == null || i.off(t, n, o);
  }
  emit(t, n) {
    var l;
    let o = Da.createEvent(t, n);
    const i = `on${t[0].toUpperCase()}${t.substring(1)}`, r = y(this, ut)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = y(this, je)) == null ? void 0 : l.emit(t, n), o;
  }
  i18n(t, n, o) {
    return Kr(y(this, ut).i18n, t, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${t}}`;
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
    if (rc.has(t))
      return rc.get(t);
    const n = /* @__PURE__ */ new Map();
    return rc.set(t, n), n;
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
ut = new WeakMap(), $n = new WeakMap(), je = new WeakMap(), L(Xe, "EVENTS", !1), L(Xe, "DEFAULT", {});
class ke extends Xe {
  constructor() {
    super(...arguments);
    L(this, "ref", kg());
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
    Eg(/* @__PURE__ */ _u(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
L(ke, "Component");
var Bc, le, fu, uu, uo, Pa, hu = {}, du = [], Og = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Et(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function pu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function eo(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Bc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return hs(e, l, o, i, null);
}
function hs(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++fu };
  return i == null && le.vnode != null && le.vnode(r), r;
}
function Hg() {
  return { current: null };
}
function jc(e) {
  return e.children;
}
function ho(e, t) {
  this.props = e, this.context = t;
}
function Zo(e, t) {
  if (t == null)
    return e.__ ? Zo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Zo(e) : null;
}
function mu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return mu(e);
  }
}
function Oa(e) {
  (!e.__d && (e.__d = !0) && uo.push(e) && !Ls.__r++ || Pa !== le.debounceRendering) && ((Pa = le.debounceRendering) || setTimeout)(Ls);
}
function Ls() {
  for (var e; Ls.__r = uo.length; )
    e = uo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), uo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Et({}, r)).__v = r.__v + 1, bu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Zo(r), r.__h), Ig(o, r), r.__e != l && mu(r)));
    });
}
function gu(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || du, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? hs(null, a, null, null, a) : Array.isArray(a) ? hs(jc, { children: a }, null, null, null) : a.__b > 0 ? hs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      bu(e, a, f = f || hu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = yu(a, _, e) : _ = vu(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Zo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && $u(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      wu(p[s], p[++s], p[++s]);
}
function yu(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? yu(o, t, n) : vu(n, o, o, i, o.__e, t));
  return t;
}
function vu(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Wg(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Rs(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Rs(e, r, t[r], n[r], o);
}
function Ha(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Og.test(t) ? n : n + "px";
}
function Rs(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Ha(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ha(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Ia : Wa, r) : e.removeEventListener(t, r ? Ia : Wa, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function Wa(e) {
  this.l[e.type + !1](le.event ? le.event(e) : e);
}
function Ia(e) {
  this.l[e.type + !0](le.event ? le.event(e) : e);
}
function bu(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = le.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new ho(p, g), s.constructor = v, s.render = Fg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Et({}, s.__s)), Et(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = le.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Et(Et({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === jc && h.key == null ? h.props.children : h, gu(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ug(n.__e, t, n, o, i, r, l, _);
    (h = le.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), le.__e(x, t, n);
  }
}
function Ig(e, t) {
  le.__c && le.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      le.__e(o, n.__v);
    }
  });
}
function Ug(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Bc.call(e.childNodes), h = (d = n.props || hu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Wg(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, gu(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Zo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && pu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Rs(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Rs(e, "checked", u, d.checked, !1));
  }
  return e;
}
function wu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    le.__e(o, n);
  }
}
function $u(e, t, n) {
  var o, i;
  if (le.unmount && le.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || wu(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        le.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && $u(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || pu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Fg(e, t, n) {
  return this.constructor(e, n);
}
Bc = du.slice, le = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, fu = 0, uu = function(e) {
  return e != null && e.constructor === void 0;
}, ho.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Et({}, this.state), typeof e == "function" && (e = e(Et({}, n), this.props)), e && Et(n, e), e != null && this.__v && (t && this._sb.push(t), Oa(this));
}, ho.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Oa(this));
}, ho.prototype.render = jc, uo = [], Ls.__r = 0;
var Bg = 0;
function tt(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Bg, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return le.vnode && le.vnode(_), _;
}
function Pl(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), o = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const l = n.get(i);
    typeof l == "number" ? t[l][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Pl(...i).forEach(o) : i && typeof i == "object" ? Object.entries(i).forEach(o) : typeof i == "string" && i.split(" ").forEach((r) => o(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const F = (...e) => Pl(...e).reduce((t, [n, o]) => (o && t.push(n), t), []).join(" ");
function jg({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return eo(e, {
    className: F(t),
    style: o,
    ...i
  }, n);
}
function ku({
  component: e = "a",
  className: t,
  children: n,
  attrs: o,
  url: i,
  disabled: r,
  active: l,
  icon: c,
  text: _,
  target: h,
  trailingIcon: s,
  hint: d,
  style: f,
  onClick: a
}) {
  const u = [
    typeof c == "string" ? /* @__PURE__ */ tt("i", { class: `icon ${c}` }) : c,
    /* @__PURE__ */ tt("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ tt("i", { class: `icon ${s}` }) : s
  ];
  return eo(e, {
    className: F(t, { disabled: r, active: l }),
    title: d,
    [e === "a" ? "href" : "data-url"]: i,
    [e === "a" ? "target" : "data-target"]: h,
    style: f,
    onClick: a,
    ...o
  }, ...u);
}
function zg({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return eo(e, {
    className: F(t),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function Vg({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: i,
  attrs: r,
  onClick: l,
  children: c
}) {
  return eo(e, {
    className: F(t),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, c);
}
function Yg(e) {
  const {
    tag: t,
    className: n,
    style: o,
    renders: i,
    generateArgs: r = [],
    generatorThis: l,
    generators: c,
    onGenerate: _,
    onRenderItem: h,
    ...s
  } = e, d = [n], f = { ...o }, a = [], u = [];
  return i.forEach((b) => {
    const p = [];
    typeof b == "string" && c && c[b] && (b = c[b]), typeof b == "function" ? _ ? p.push(..._.call(l, b, a, ...r)) : p.push(...b.call(l, a, ...r) ?? []) : p.push(b), p.forEach((m) => {
      m != null && (typeof m == "object" && !Qf(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ _u("div", { className: F(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? u.push(m.__html) : (m.style && Object.assign(f, m.style), m.className && d.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(s, m.attrs)) : a.push(m));
    });
  }), u.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: F(d),
    style: f,
    ...s
  }, a];
}
function bc({
  tag: e = "div",
  ...t
}) {
  const [n, o] = Yg(t);
  return nu(e, n, ...o);
}
function qg(e) {
  return /* @__PURE__ */ tt(bc, { ...e });
}
function xu({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return eo(e, {
    className: F(t),
    style: o,
    ...i
  }, n);
}
var ro;
let Xn = (ro = class extends ho {
  constructor() {
    super(...arguments);
    L(this, "ref", Hg());
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
    var o, i;
    (i = (o = this.props).afterRender) == null || i.call(o, { menu: this, firstRender: n });
  }
  handleItemClick(n, o, i, r) {
    i && i.call(r.target, r);
    const { onClickItem: l } = this.props;
    l && l({ menu: this, item: n, index: o, event: r });
  }
  beforeRender() {
    var i;
    const n = { ...this.props };
    typeof n.items == "function" && (n.items = n.items(this));
    const o = (i = n.beforeRender) == null ? void 0 : i.call(n, { menu: this, options: n });
    return o && Object.assign(n, o), n;
  }
  getItemRenderProps(n, o, i) {
    const { itemProps: r, onClickItem: l } = n, c = { key: i, ...o };
    return r && Object.assign(c, r[o.type || "item"]), (l || o.onClick) && (c.onClick = this.handleItemClick.bind(this, c, i, o.onClick)), c.className = F(c.className), c;
  }
  renderItem(n, o, i) {
    const r = this.getItemRenderProps(n, o, i), { itemRender: l } = n;
    if (l) {
      if (typeof l == "object") {
        const p = l[o.type || "item"];
        if (p)
          return /* @__PURE__ */ tt(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, eo);
        if (uu(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: c = "item", component: _, key: h = i, rootAttrs: s, rootClass: d, rootStyle: f, rootChildren: a, ...u } = r, b = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || Xn.ItemComponents[c] : _;
    return Object.assign(u, {
      type: c,
      component: typeof _ == "string" ? _ : void 0
    }), this.renderTypedItem(b, {
      className: F(d),
      children: a,
      style: f,
      key: h,
      ...s
    }, {
      ...u,
      type: c,
      component: typeof _ == "string" ? _ : void 0
    });
  }
  renderTypedItem(n, o, i) {
    const { children: r, className: l, key: c, ..._ } = o;
    return /* @__PURE__ */ tt(
      "li",
      {
        className: F(`${this.name}-${i.type}`, l),
        ..._,
        children: [
          /* @__PURE__ */ tt(n, { ...i }),
          typeof r == "function" ? r() : r
        ]
      },
      c
    );
  }
  render() {
    const n = this.beforeRender(), {
      name: o,
      style: i,
      itemProps: r,
      className: l,
      items: c,
      children: _,
      itemRender: h,
      onClickItem: s,
      beforeRender: d,
      afterRender: f,
      beforeDestroy: a,
      ...u
    } = n, b = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ tt(b, { class: F(this.name, l), ...u, ref: this.ref, children: [
      c && c.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, L(ro, "ItemComponents", {
  divider: jg,
  item: ku,
  heading: zg,
  space: Vg,
  custom: qg,
  basic: xu
}), L(ro, "ROOT_TAG", "menu"), L(ro, "NAME", "action-menu"), ro);
class Ua extends ke {
}
L(Ua, "NAME", "actionmenu"), L(Ua, "Component", Xn);
function Fa({
  ...e
}) {
  return /* @__PURE__ */ tt(ku, { ...e });
}
var dc, br, Ke, kn;
let Su = (dc = class extends Xn {
  constructor(n) {
    super(n);
    T(this, br, /* @__PURE__ */ new Set());
    T(this, Ke, void 0);
    T(this, kn, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    H(this, Ke, n.nestedShow === void 0), y(this, Ke) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const n = super.beforeRender(), { nestedShow: o, nestedTrigger: i, defaultNestedShow: r, controlledMenu: l, ...c } = n;
    return c;
  }
  renderNestedMenu(n) {
    let { items: o } = n;
    if (!o || (typeof o == "function" && (o = o(n, this)), !o.length))
      return;
    const i = this.constructor;
    return /* @__PURE__ */ tt(
      i,
      {
        items: o,
        name: this.props.name,
        nestedShow: y(this, Ke) ? this.state.nestedShow : this.props.nestedShow,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: this.props.controlledMenu || this,
        itemProps: this.props.itemProps,
        onClickItem: this.props.onClickItem,
        afterRender: this.props.afterRender,
        beforeRender: this.props.beforeRender,
        beforeDestroy: this.props.beforeDestroy,
        itemRender: this.props.itemRender
      }
    );
  }
  isNestedItem(n) {
    return (!n.type || n.type === "item") && !!n.items;
  }
  renderToggleIcon(n, o) {
  }
  getItemRenderProps(n, o, i) {
    const r = super.getItemRenderProps(n, o, i);
    if (!this.isNestedItem(r))
      return r;
    const l = r.key ?? i;
    y(this, br).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = Fa), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: y(this, kn).bind(this, l, !0),
        onMouseLeave: y(this, kn).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = r;
      r.onClick = (s) => {
        y(this, kn).call(this, l, void 0, s), h == null || h(s);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = y(this, Ke) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!y(this, Ke))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...y(this, br).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    y(this, Ke) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    y(this, Ke) && this.setState({ nestedShow: !1 });
  }
}, br = new WeakMap(), Ke = new WeakMap(), kn = new WeakMap(), L(dc, "ItemComponents", {
  item: Fa
}), dc);
class Ba extends ke {
}
L(Ba, "NAME", "actionmenunested"), L(Ba, "Component", Su);
var zc, ce, Cu, po, ja, Eu = {}, Au = [], Gg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function At(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Tu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Xg(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? zc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return ds(e, l, o, i, null);
}
function ds(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Cu };
  return i == null && ce.vnode != null && ce.vnode(r), r;
}
function Vc(e) {
  return e.children;
}
function mo(e, t) {
  this.props = e, this.context = t;
}
function Jo(e, t) {
  if (t == null)
    return e.__ ? Jo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Jo(e) : null;
}
function Mu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Mu(e);
  }
}
function za(e) {
  (!e.__d && (e.__d = !0) && po.push(e) && !Ns.__r++ || ja !== ce.debounceRendering) && ((ja = ce.debounceRendering) || setTimeout)(Ns);
}
function Ns() {
  for (var e; Ns.__r = po.length; )
    e = po.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), po = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = At({}, r)).__v = r.__v + 1, Du(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Jo(r), r.__h), Zg(o, r), r.__e != l && Mu(r)));
    });
}
function Lu(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Au, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ds(null, a, null, null, a) : Array.isArray(a) ? ds(Vc, { children: a }, null, null, null) : a.__b > 0 ? ds(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Du(e, a, f = f || Eu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Ru(a, _, e) : _ = Nu(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Jo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Ou(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Pu(p[s], p[++s], p[++s]);
}
function Ru(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Ru(o, t, n) : Nu(n, o, o, i, o.__e, t));
  return t;
}
function Nu(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Kg(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ds(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ds(e, r, t[r], n[r], o);
}
function Va(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Gg.test(t) ? n : n + "px";
}
function Ds(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Va(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Va(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? qa : Ya, r) : e.removeEventListener(t, r ? qa : Ya, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function Ya(e) {
  this.l[e.type + !1](ce.event ? ce.event(e) : e);
}
function qa(e) {
  this.l[e.type + !0](ce.event ? ce.event(e) : e);
}
function Du(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ce.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new mo(p, g), s.constructor = v, s.render = Qg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = At({}, s.__s)), At(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = ce.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = At(At({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Vc && h.key == null ? h.props.children : h, Lu(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Jg(n.__e, t, n, o, i, r, l, _);
    (h = ce.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ce.__e(x, t, n);
  }
}
function Zg(e, t) {
  ce.__c && ce.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ce.__e(o, n.__v);
    }
  });
}
function Jg(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && zc.call(e.childNodes), h = (d = n.props || Eu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Kg(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Lu(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Jo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Tu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Ds(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ds(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Pu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ce.__e(o, n);
  }
}
function Ou(e, t, n) {
  var o, i;
  if (ce.unmount && ce.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Pu(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ce.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Ou(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Tu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Qg(e, t, n) {
  return this.constructor(e, n);
}
zc = Au.slice, ce = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Cu = 0, mo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = At({}, this.state), typeof e == "function" && (e = e(At({}, n), this.props)), e && At(n, e), e != null && this.__v && (t && this._sb.push(t), za(this));
}, mo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), za(this));
}, mo.prototype.render = Vc, po = [], Ns.__r = 0;
var ey = 0;
function no(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ey, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ce.vnode && ce.vnode(_), _;
}
let nt = class extends mo {
  render() {
    const {
      component: t,
      type: n,
      size: o,
      className: i,
      children: r,
      url: l,
      target: c,
      disabled: _,
      active: h,
      loading: s,
      loadingIcon: d,
      loadingText: f,
      icon: a,
      text: u,
      trailingIcon: b,
      caret: p,
      square: m,
      hint: g,
      ...w
    } = this.props, k = t || (l ? "a" : "button"), C = u == null || typeof u == "string" && !u.length || s && !f, A = C && !a && !b && !r && !s;
    return Xg(
      k,
      {
        className: F("btn", n, i, {
          "btn-caret": A,
          disabled: _ || s,
          active: h,
          loading: s,
          square: m === void 0 ? !A && !r && C : m
        }, o ? `size-${o}` : ""),
        title: g,
        [k === "a" ? "href" : "data-url"]: l,
        [k === "a" ? "target" : "data-target"]: c,
        type: k === "button" ? "button" : void 0,
        ...w
      },
      s ? /* @__PURE__ */ no("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof a == "string" ? /* @__PURE__ */ no("i", { class: `icon ${a}` }) : a,
      C ? null : /* @__PURE__ */ no("span", { className: "text", children: s ? f : u }),
      s ? null : r,
      s ? null : typeof b == "string" ? /* @__PURE__ */ no("i", { class: `icon ${b}` }) : b,
      s ? null : p ? /* @__PURE__ */ no("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class Ga extends ke {
}
L(Ga, "NAME", "button"), L(Ga, "Component", nt);
var wc;
wc = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} };
var ty = 0;
function ny(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ty, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return wc.vnode && wc.vnode(_), _;
}
var pc;
let Yc = (pc = class extends Su {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((o) => o.icon)), t.className = F(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((o) => this.isNestedItem(o))
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ ny("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
}, L(pc, "NAME", "menu"), pc);
class Xa extends ke {
}
L(Xa, "NAME", "menu"), L(Xa, "Component", Yc);
let oy = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Hu, ae, Wu, go, Ka, Iu = {}, Uu = [], ry = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Tt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Fu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function sc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Wu };
  return i == null && ae.vnode != null && ae.vnode(r), r;
}
function qc(e) {
  return e.children;
}
function yo(e, t) {
  this.props = e, this.context = t;
}
function Qo(e, t) {
  if (t == null)
    return e.__ ? Qo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Qo(e) : null;
}
function Bu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Bu(e);
  }
}
function Za(e) {
  (!e.__d && (e.__d = !0) && go.push(e) && !Ps.__r++ || Ka !== ae.debounceRendering) && ((Ka = ae.debounceRendering) || setTimeout)(Ps);
}
function Ps() {
  for (var e; Ps.__r = go.length; )
    e = go.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), go = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Tt({}, r)).__v = r.__v + 1, Yu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Qo(r), r.__h), iy(o, r), r.__e != l && Bu(r)));
    });
}
function ju(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Uu, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? sc(null, a, null, null, a) : Array.isArray(a) ? sc(qc, { children: a }, null, null, null) : a.__b > 0 ? sc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Yu(e, a, f = f || Iu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = zu(a, _, e) : _ = Vu(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Qo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Gu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      qu(p[s], p[++s], p[++s]);
}
function zu(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? zu(o, t, n) : Vu(n, o, o, i, o.__e, t));
  return t;
}
function Vu(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function sy(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Os(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Os(e, r, t[r], n[r], o);
}
function Ja(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || ry.test(t) ? n : n + "px";
}
function Os(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Ja(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Ja(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? e_ : Qa, r) : e.removeEventListener(t, r ? e_ : Qa, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function Qa(e) {
  this.l[e.type + !1](ae.event ? ae.event(e) : e);
}
function e_(e) {
  this.l[e.type + !0](ae.event ? ae.event(e) : e);
}
function Yu(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ae.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new yo(p, g), s.constructor = v, s.render = cy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Tt({}, s.__s)), Tt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = ae.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Tt(Tt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === qc && h.key == null ? h.props.children : h, ju(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ly(n.__e, t, n, o, i, r, l, _);
    (h = ae.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ae.__e(x, t, n);
  }
}
function iy(e, t) {
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
function ly(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Hu.call(e.childNodes), h = (d = n.props || Iu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (sy(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, ju(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Qo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Fu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Os(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Os(e, "checked", u, d.checked, !1));
  }
  return e;
}
function qu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ae.__e(o, n);
  }
}
function Gu(e, t, n) {
  var o, i;
  if (ae.unmount && ae.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || qu(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ae.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Gu(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Fu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function cy(e, t, n) {
  return this.constructor(e, n);
}
Hu = Uu.slice, ae = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Wu = 0, yo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Tt({}, this.state), typeof e == "function" && (e = e(Tt({}, n), this.props)), e && Tt(n, e), e != null && this.__v && (t && this._sb.push(t), Za(this));
}, yo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Za(this));
}, yo.prototype.render = qc, go = [], Ps.__r = 0;
var ay = 0;
function _y(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ay, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ae.vnode && ae.vnode(_), _;
}
var $c, mn;
$c = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, mn = function(e) {
  return e != null && e.constructor === void 0;
};
var fy = 0;
function lt(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --fy, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return $c.vnode && $c.vnode(_), _;
}
var kc;
kc = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} };
var uy = 0;
function Ol(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --uy, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return kc.vnode && kc.vnode(_), _;
}
function hy({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Ol(nt, { type: n, ...o });
}
var Xu, _e, Ku, vo, t_, Zu = {}, Ju = [], dy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Mt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Qu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ic(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ku };
  return i == null && _e.vnode != null && _e.vnode(r), r;
}
function py() {
  return { current: null };
}
function Gc(e) {
  return e.children;
}
function bo(e, t) {
  this.props = e, this.context = t;
}
function er(e, t) {
  if (t == null)
    return e.__ ? er(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? er(e) : null;
}
function eh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return eh(e);
  }
}
function n_(e) {
  (!e.__d && (e.__d = !0) && vo.push(e) && !Hs.__r++ || t_ !== _e.debounceRendering) && ((t_ = _e.debounceRendering) || setTimeout)(Hs);
}
function Hs() {
  for (var e; Hs.__r = vo.length; )
    e = vo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), vo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Mt({}, r)).__v = r.__v + 1, rh(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? er(r), r.__h), gy(o, r), r.__e != l && eh(r)));
    });
}
function th(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Ju, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ic(null, a, null, null, a) : Array.isArray(a) ? ic(Gc, { children: a }, null, null, null) : a.__b > 0 ? ic(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      rh(e, a, f = f || Zu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = nh(a, _, e) : _ = oh(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = er(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && ih(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      sh(p[s], p[++s], p[++s]);
}
function nh(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? nh(o, t, n) : oh(n, o, o, i, o.__e, t));
  return t;
}
function oh(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function my(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ws(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ws(e, r, t[r], n[r], o);
}
function o_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || dy.test(t) ? n : n + "px";
}
function Ws(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || o_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || o_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? s_ : r_, r) : e.removeEventListener(t, r ? s_ : r_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function r_(e) {
  this.l[e.type + !1](_e.event ? _e.event(e) : e);
}
function s_(e) {
  this.l[e.type + !0](_e.event ? _e.event(e) : e);
}
function rh(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = _e.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new bo(p, g), s.constructor = v, s.render = vy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Mt({}, s.__s)), Mt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = _e.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Mt(Mt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Gc && h.key == null ? h.props.children : h, th(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = yy(n.__e, t, n, o, i, r, l, _);
    (h = _e.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), _e.__e(x, t, n);
  }
}
function gy(e, t) {
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
function yy(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Xu.call(e.childNodes), h = (d = n.props || Zu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (my(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, th(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && er(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Qu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Ws(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ws(e, "checked", u, d.checked, !1));
  }
  return e;
}
function sh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    _e.__e(o, n);
  }
}
function ih(e, t, n) {
  var o, i;
  if (_e.unmount && _e.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || sh(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        _e.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && ih(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Qu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function vy(e, t, n) {
  return this.constructor(e, n);
}
Xu = Ju.slice, _e = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ku = 0, bo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Mt({}, this.state), typeof e == "function" && (e = e(Mt({}, n), this.props)), e && Mt(n, e), e != null && this.__v && (t && this._sb.push(t), n_(this));
}, bo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), n_(this));
}, bo.prototype.render = Gc, vo = [], Hs.__r = 0;
var by = 0;
function lh(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --by, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return _e.vnode && _e.vnode(_), _;
}
var Hl, te, ch, wo, i_, Is = {}, ah = [], wy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Lt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function _h(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function fh(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Hl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return ps(e, l, o, i, null);
}
function ps(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++ch };
  return i == null && te.vnode != null && te.vnode(r), r;
}
function Wl(e) {
  return e.children;
}
function ms(e, t) {
  this.props = e, this.context = t;
}
function tr(e, t) {
  if (t == null)
    return e.__ ? tr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? tr(e) : null;
}
function uh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return uh(e);
  }
}
function l_(e) {
  (!e.__d && (e.__d = !0) && wo.push(e) && !Us.__r++ || i_ !== te.debounceRendering) && ((i_ = te.debounceRendering) || setTimeout)(Us);
}
function Us() {
  for (var e; Us.__r = wo.length; )
    e = wo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), wo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Lt({}, r)).__v = r.__v + 1, Xc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? tr(r), r.__h), mh(o, r), r.__e != l && uh(r)));
    });
}
function hh(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || ah, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ps(null, a, null, null, a) : Array.isArray(a) ? ps(Wl, { children: a }, null, null, null) : a.__b > 0 ? ps(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Xc(e, a, f = f || Is, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = dh(a, _, e) : _ = ph(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = tr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && yh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      gh(p[s], p[++s], p[++s]);
}
function dh(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? dh(o, t, n) : ph(n, o, o, i, o.__e, t));
  return t;
}
function ph(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function $y(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Fs(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Fs(e, r, t[r], n[r], o);
}
function c_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || wy.test(t) ? n : n + "px";
}
function Fs(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || c_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || c_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? __ : a_, r) : e.removeEventListener(t, r ? __ : a_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function a_(e) {
  this.l[e.type + !1](te.event ? te.event(e) : e);
}
function __(e) {
  this.l[e.type + !0](te.event ? te.event(e) : e);
}
function Xc(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = te.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new ms(p, g), s.constructor = v, s.render = xy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Lt({}, s.__s)), Lt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = te.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Lt(Lt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Wl && h.key == null ? h.props.children : h, hh(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ky(n.__e, t, n, o, i, r, l, _);
    (h = te.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), te.__e(x, t, n);
  }
}
function mh(e, t) {
  te.__c && te.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      te.__e(o, n.__v);
    }
  });
}
function ky(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Hl.call(e.childNodes), h = (d = n.props || Is).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if ($y(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, hh(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && tr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && _h(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Fs(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Fs(e, "checked", u, d.checked, !1));
  }
  return e;
}
function gh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    te.__e(o, n);
  }
}
function yh(e, t, n) {
  var o, i;
  if (te.unmount && te.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || gh(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        te.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && yh(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || _h(e.__e), e.__ = e.__e = e.__d = void 0;
}
function xy(e, t, n) {
  return this.constructor(e, n);
}
function Sy(e, t, n) {
  var o, i, r;
  te.__ && te.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Xc(t, e = (!o && n || t).__k = fh(Wl, null, [e]), i || Is, Is, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Hl.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), mh(r, e);
}
Hl = ah.slice, te = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ch = 0, ms.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Lt({}, this.state), typeof e == "function" && (e = e(Lt({}, n), this.props)), e && Lt(n, e), e != null && this.__v && (t && this._sb.push(t), l_(this));
}, ms.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), l_(this));
}, ms.prototype.render = Wl, wo = [], Us.__r = 0;
function Cy(e) {
  return e.button === 2;
}
var Ey = 0;
function Ay(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ey, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return te.vnode && te.vnode(_), _;
}
function Kc(e) {
  return e.split("-")[1];
}
function vh(e) {
  return e === "y" ? "height" : "width";
}
function nr(e) {
  return e.split("-")[0];
}
function bh(e) {
  return ["top", "bottom"].includes(nr(e)) ? "x" : "y";
}
function f_(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = bh(t), _ = vh(c), h = o[_] / 2 - i[_] / 2, s = nr(t), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Kc(t)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Ty = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: s,
    y: d
  } = f_(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (s = g ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = f_(h, f, _)), b = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function My(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ly(e) {
  return typeof e != "number" ? My(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Bs(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function Ry(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = t, u = Ly(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Bs(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Bs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const Ny = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function js(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ny[t]);
}
function Dy(e, t, n) {
  n === void 0 && (n = !1);
  const o = Kc(e), i = bh(e), r = vh(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = js(l)), {
    main: l,
    cross: js(l)
  };
}
const Py = {
  start: "end",
  end: "start"
};
function xc(e) {
  return e.replace(/start|end/g, (t) => Py[t]);
}
function Oy(e) {
  const t = js(e);
  return [xc(e), t, xc(t)];
}
function Hy(e, t, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : o : t ? o : i;
    case "left":
    case "right":
      return t ? r : l;
    default:
      return [];
  }
}
function Wy(e, t, n, o) {
  const i = Kc(e);
  let r = Hy(nr(e), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), t && (r = r.concat(r.map(xc)))), r;
}
const wh = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = t, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = e, p = nr(o), m = nr(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [js(l)] : Oy(l));
      !d && a !== "none" && w.push(...Wy(l, u, a, g));
      const k = [l, ...w], C = await Ry(t, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: R,
          cross: V
        } = Dy(o, r, g);
        A.push(C[R], C[V]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var v;
        const R = (((v = i.flip) == null ? void 0 : v.index) || 0) + 1, V = k[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: E
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, D) => $ + D, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            N && (B = N);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function Ie(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ot(e) {
  return Ie(e).getComputedStyle(e);
}
function zt(e) {
  return kh(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ns;
function $h() {
  if (ns)
    return ns;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ns = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ns) : navigator.userAgent;
}
function pt(e) {
  return e instanceof Ie(e).HTMLElement;
}
function Ve(e) {
  return e instanceof Ie(e).Element;
}
function kh(e) {
  return e instanceof Ie(e).Node;
}
function u_(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Ie(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Il(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = ot(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i);
}
function Iy(e) {
  return ["table", "td", "th"].includes(zt(e));
}
function Zc(e) {
  const t = /firefox/i.test($h()), n = ot(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function xh() {
  return !/^((?!chrome|android).)*safari/i.test($h());
}
function Jc(e) {
  return ["html", "body", "#document"].includes(zt(e));
}
const h_ = Math.min, $o = Math.max, zs = Math.round;
function Sh(e) {
  const t = ot(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, l = zs(n) !== i || zs(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Ch(e) {
  return Ve(e) ? e : e.contextElement;
}
const Eh = {
  x: 1,
  y: 1
};
function gn(e) {
  const t = Ch(e);
  if (!pt(t))
    return Eh;
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = Sh(t);
  let l = (r ? zs(n.width) : n.width) / o, c = (r ? zs(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function fn(e, t, n, o) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = Ch(e);
  let _ = Eh;
  t && (o ? Ve(o) && (_ = gn(o)) : _ = gn(e));
  const h = c ? Ie(c) : window, s = !xh() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Ie(c), p = o && Ve(o) ? Ie(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = gn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Ie(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function Gt(e) {
  return ((kh(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ul(e) {
  return Ve(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Ah(e) {
  return fn(Gt(e)).left + Ul(e).scrollLeft;
}
function Uy(e, t, n) {
  const o = pt(t), i = Gt(t), r = fn(e, !0, n === "fixed", t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((zt(t) !== "body" || Il(i)) && (l = Ul(t)), pt(t)) {
      const _ = fn(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      i && (c.x = Ah(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function or(e) {
  if (zt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node
    e.assignedSlot || // DOM Element detected
    e.parentNode || // ShadowRoot detected
    (u_(e) ? e.host : null) || // Fallback
    Gt(e)
  );
  return u_(t) ? t.host : t;
}
function d_(e) {
  return !pt(e) || ot(e).position === "fixed" ? null : e.offsetParent;
}
function Fy(e) {
  let t = or(e);
  for (; pt(t) && !Jc(t); ) {
    if (Zc(t))
      return t;
    t = or(t);
  }
  return null;
}
function p_(e) {
  const t = Ie(e);
  let n = d_(e);
  for (; n && Iy(n) && ot(n).position === "static"; )
    n = d_(n);
  return n && (zt(n) === "html" || zt(n) === "body" && ot(n).position === "static" && !Zc(n)) ? t : n || Fy(e) || t;
}
function By(e) {
  return Sh(e);
}
function jy(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const i = pt(n), r = Gt(n);
  if (n === r)
    return t;
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
  if ((i || !i && o !== "fixed") && ((zt(n) !== "body" || Il(r)) && (l = Ul(n)), pt(n))) {
    const h = fn(n);
    c = gn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - l.scrollLeft * c.x + _.x,
    y: t.y * c.y - l.scrollTop * c.y + _.y
  };
}
function zy(e, t) {
  const n = Ie(e), o = Gt(e), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = xh();
    (h || !h && t === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Vy(e) {
  var t;
  const n = Gt(e), o = Ul(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = $o(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = $o(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Ah(e);
  const _ = -o.scrollTop;
  return ot(i || n).direction === "rtl" && (c += $o(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Th(e) {
  const t = or(e);
  return Jc(t) ? e.ownerDocument.body : pt(t) && Il(t) ? t : Th(t);
}
function ko(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = Th(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ie(o);
  return i ? t.concat(r, r.visualViewport || [], Il(o) ? o : []) : t.concat(o, ko(o));
}
function Yy(e, t) {
  const n = fn(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, r = pt(e) ? gn(e) : {
    x: 1,
    y: 1
  }, l = e.clientWidth * r.x, c = e.clientHeight * r.y, _ = i * r.x, h = o * r.y;
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
function m_(e, t, n) {
  return t === "viewport" ? Bs(zy(e, n)) : Ve(t) ? Yy(t, n) : Bs(Vy(Gt(e)));
}
function qy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = ko(e).filter((c) => Ve(c) && zt(c) !== "body"), i = null;
  const r = ot(e).position === "fixed";
  let l = r ? or(e) : e;
  for (; Ve(l) && !Jc(l); ) {
    const c = ot(l), _ = Zc(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = or(l);
  }
  return t.set(e, o), o;
}
function Gy(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? qy(t, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = m_(t, s, i);
    return h.top = $o(d.top, h.top), h.right = h_(d.right, h.right), h.bottom = h_(d.bottom, h.bottom), h.left = $o(d.left, h.left), h;
  }, m_(t, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Xy = {
  getClippingRect: Gy,
  convertOffsetParentRelativeRectToViewportRelativeRect: jy,
  isElement: Ve,
  getDimensions: By,
  getOffsetParent: p_,
  getDocumentElement: Gt,
  getScale: gn,
  async getElementRects(e) {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const i = this.getOffsetParent || p_, r = this.getDimensions;
    return {
      reference: Uy(t, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => ot(e).direction === "rtl"
};
function Ky(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Ve(e) ? ko(e) : e.contextElement ? ko(e.contextElement) : [], ...ko(t)] : [];
  h.forEach((u) => {
    _ && u.addEventListener("scroll", n, {
      passive: !0
    }), r && u.addEventListener("resize", n);
  });
  let s = null;
  if (l) {
    let u = !0;
    s = new ResizeObserver(() => {
      u || n(), u = !1;
    }), Ve(e) && !c && s.observe(e), !Ve(e) && e.contextElement && !c && s.observe(e.contextElement), s.observe(t);
  }
  let d, f = c ? fn(e) : null;
  c && a();
  function a() {
    const u = fn(e);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const Mh = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Xy,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return Ty(e, t, {
    ...i,
    platform: r
  });
};
let Zy = class extends Yc {
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
      middleware: [wh()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var t;
    return (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  _createPopper() {
    const t = this._getPopperOptions();
    this.ref.current && Mh(this._getPopperElement(), this.ref.current, t).then(({ x: n, y: o }) => {
      Object.assign(this.ref.current.style, {
        left: `${n}px`,
        top: `${o}px`
      });
    });
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ Ay("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var bt, xn, wr, $r, Ti, Lh, Mi, Rh;
class Le extends Xe {
  constructor() {
    super(...arguments);
    T(this, Ti);
    T(this, Mi);
    T(this, bt, void 0);
    T(this, xn, void 0);
    T(this, wr, void 0);
    L(this, "arrowEl");
    T(this, $r, void 0);
  }
  get isShown() {
    var n;
    return (n = y(this, bt)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return y(this, bt) || this._ensureMenu();
  }
  get trigger() {
    return y(this, wr) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, wr, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var o, i;
    return (o = y(this, $r)) == null || o.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((i = y(this, bt)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    super.destroy(), (n = y(this, bt)) == null || n.remove();
  }
  _ensureMenu() {
    var r;
    const { element: n } = this, o = this.constructor.MENU_CLASS;
    let i;
    if (this.isDynamic)
      i = document.createElement("div"), i.classList.add(o), document.body.appendChild(i);
    else if (n) {
      const l = n.getAttribute("href") ?? n.dataset.target;
      if ((l == null ? void 0 : l[0]) === "#" && (i = document.querySelector(l)), !i) {
        const c = n.nextElementSibling;
        c != null && c.classList.contains(o) ? i = c : i = (r = n.parentNode) == null ? void 0 : r.querySelector(`.${o}`);
      }
    }
    if (!i)
      throw new Error("ContextMenu: Cannot find menu element");
    return i.style.width = "max-content", i.style.position = this.options.strategy, i.style.top = "0", i.style.left = "0", H(this, bt, i), i;
  }
  _getPopperOptions() {
    var r;
    const { placement: n, strategy: o } = this.options, i = {
      middleware: [],
      placement: n,
      strategy: o
    };
    return this.options.flip && ((r = i.middleware) == null || r.push(wh())), i;
  }
  _createPopper() {
    const n = this._getPopperOptions(), o = this._getPopperElement();
    H(this, $r, Ky(o, this.menu, () => {
      Mh(o, this.menu, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
        Object.assign(this.menu.style, {
          left: `${i}px`,
          top: `${r}px`
        });
        const _ = c.split("-")[0], h = W(this, Ti, Lh).call(this, _);
        if (l.arrow && this.arrowEl) {
          const { x: s, y: d } = l.arrow;
          Object.assign(this.arrowEl.style, {
            left: s != null ? `${s}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...W(this, Mi, Rh).call(this, _)
          });
        }
      });
    }));
  }
  _getMenuOptions() {
    const { menu: n, items: o } = this.options;
    let i = o || (n == null ? void 0 : n.items);
    if (i)
      return typeof i == "function" && (i = i(this)), {
        nestedTrigger: "hover",
        ...n,
        items: i
      };
  }
  _renderMenu() {
    const n = this._getMenuOptions();
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (Sy(fh(Zy, n), this.menu), !0);
  }
  _getPopperElement() {
    return y(this, xn) || H(this, xn, {
      getBoundingClientRect: () => {
        const { trigger: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: o, clientY: i } = n;
          return {
            width: 0,
            height: 0,
            top: i,
            right: o,
            bottom: i,
            left: o
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), y(this, xn);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)) || o && Cy(o))
      return;
    const l = this.getAll().entries(), c = new Set(i || []);
    for (const [s, d] of l)
      c.has(s) || d.hide();
  }
  static show(n) {
    var l;
    const { event: o, ...i } = n, r = this.ensure(document.body);
    return Object.keys(i).length && r.setOptions(i), r.show(o), (l = o == null ? void 0 : o.stopPropagation) == null || l.call(o), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
bt = new WeakMap(), xn = new WeakMap(), wr = new WeakMap(), $r = new WeakMap(), Ti = new WeakSet(), Lh = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Mi = new WeakSet(), Rh = function(n) {
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
}, L(Le, "NAME", "contextmenu"), L(Le, "EVENTS", !0), L(Le, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), L(Le, "MENU_CLASS", "contextmenu"), L(Le, "CLASS_SHOW", "show"), L(Le, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${Le.MENU_CLASS}`))
    return;
  const n = t.closest(Le.MENU_SELECTOR);
  n && (Le.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", Le.clear.bind(Le));
function Nh(e) {
  return e.split("-")[1];
}
function Jy(e) {
  return e === "y" ? "height" : "width";
}
function Dh(e) {
  return e.split("-")[0];
}
function Ph(e) {
  return ["top", "bottom"].includes(Dh(e)) ? "x" : "y";
}
function Qy(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ev(e) {
  return typeof e != "number" ? Qy(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
const tv = Math.min, nv = Math.max;
function ov(e, t, n) {
  return nv(e, tv(t, n));
}
const rv = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: n,
      padding: o = 0
    } = e || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = t;
    if (n == null)
      return {};
    const h = ev(o), s = {
      x: i,
      y: r
    }, d = Ph(l), f = Jy(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, v = ov(C, E, A), R = Nh(l) != null && E != v && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: v,
        centerOffset: E - v
      }
    };
  }
});
async function sv(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Dh(n), c = Nh(n), _ = Ph(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
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
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const iv = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, i = await sv(t, e);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
var Sn, Cn, En, Li, Oh;
const wa = class extends Le {
  constructor() {
    super(...arguments);
    T(this, Li);
    T(this, Sn, !1);
    T(this, Cn, 0);
    L(this, "hideLater", () => {
      y(this, En).call(this), H(this, Cn, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, En, () => {
      clearTimeout(y(this, Cn)), H(this, Cn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && wa.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!y(this, Sn) && this.isHover && W(this, Li, Oh).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    y(this, Sn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", y(this, En)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 8 : 0;
  }
  _getPopperOptions() {
    var i, r;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && this.arrowEl && ((i = n.middleware) == null || i.push(iv(o)), (r = n.middleware) == null || r.push(rv({ element: this.arrowEl }))), n;
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
      n.afterRender = (...i) => {
        var r;
        this.arrowEl && ((r = this.menu.querySelector(".menu")) == null || r.appendChild(this.arrowEl)), o == null || o(...i);
      };
    }
    return n;
  }
};
let Ee = wa;
Sn = new WeakMap(), Cn = new WeakMap(), En = new WeakMap(), Li = new WeakSet(), Oh = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", y(this, En)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Sn, !0);
}, L(Ee, "NAME", "dropdown"), L(Ee, "MENU_CLASS", "dropdown-menu"), L(Ee, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), L(Ee, "DEFAULT", {
  ...Le.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Ee.MENU_SELECTOR);
  if (n) {
    const o = Ee.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Ee.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(Ee.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Ee.ensure(n);
  o.isHover && o.show();
});
const lv = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(Ee.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || Ee.clear({ event: e });
};
window.addEventListener("scroll", lv, !0);
var kr, An;
class cv extends bo {
  constructor(n) {
    var o;
    super(n);
    T(this, kr, void 0);
    T(this, An, py());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return y(this, An);
  }
  get triggerElement() {
    return y(this, An).current;
  }
  componentDidMount() {
    const { modifiers: n = [], ...o } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: i }) => {
        var l;
        const r = ((l = i.placement) == null ? void 0 : l.split("-").shift()) || "";
        this.setState({ placement: r });
      }
    }), H(this, kr, Ee.ensure(this.triggerElement, {
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
    (n = y(this, kr)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: i, ...r } = this.props;
    return {
      className: F("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: y(this, An)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ lh("div", { ...o, children: n });
  }
}
kr = new WeakMap(), An = new WeakMap();
class av extends cv {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var r;
    const { placement: t, show: n } = this.state, o = this.beforeRender();
    let { caret: i = !0 } = o;
    if (i !== !1 && (n || i === !0)) {
      const l = n ? t : (r = this.props.dropdown) == null ? void 0 : r.placement;
      i = (l === "top" ? "up" : l === "bottom" ? "down" : l) || (typeof i == "string" ? i : "") || "down";
    }
    return o.caret = i, /* @__PURE__ */ lh(nt, { ...o });
  }
}
function Hh({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Ol(av, { type: n, ...o });
}
var Qc, fe, Wh, Ih, xo, g_, Uh = {}, Fh = [], _v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Rt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Bh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function fv(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Qc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return gs(e, l, o, i, null);
}
function gs(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Wh };
  return i == null && fe.vnode != null && fe.vnode(r), r;
}
function ea(e) {
  return e.children;
}
function So(e, t) {
  this.props = e, this.context = t;
}
function rr(e, t) {
  if (t == null)
    return e.__ ? rr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? rr(e) : null;
}
function jh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return jh(e);
  }
}
function y_(e) {
  (!e.__d && (e.__d = !0) && xo.push(e) && !Vs.__r++ || g_ !== fe.debounceRendering) && ((g_ = fe.debounceRendering) || setTimeout)(Vs);
}
function Vs() {
  for (var e; Vs.__r = xo.length; )
    e = xo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), xo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Rt({}, r)).__v = r.__v + 1, qh(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? rr(r), r.__h), hv(o, r), r.__e != l && jh(r)));
    });
}
function zh(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Fh, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? gs(null, a, null, null, a) : Array.isArray(a) ? gs(ea, { children: a }, null, null, null) : a.__b > 0 ? gs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      qh(e, a, f = f || Uh, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Vh(a, _, e) : _ = Yh(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = rr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Xh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Gh(p[s], p[++s], p[++s]);
}
function Vh(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Vh(o, t, n) : Yh(n, o, o, i, o.__e, t));
  return t;
}
function Yh(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function uv(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ys(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ys(e, r, t[r], n[r], o);
}
function v_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || _v.test(t) ? n : n + "px";
}
function Ys(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || v_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || v_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? w_ : b_, r) : e.removeEventListener(t, r ? w_ : b_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function b_(e) {
  this.l[e.type + !1](fe.event ? fe.event(e) : e);
}
function w_(e) {
  this.l[e.type + !0](fe.event ? fe.event(e) : e);
}
function qh(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = fe.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new So(p, g), s.constructor = v, s.render = pv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Rt({}, s.__s)), Rt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = fe.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Rt(Rt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === ea && h.key == null ? h.props.children : h, zh(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = dv(n.__e, t, n, o, i, r, l, _);
    (h = fe.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), fe.__e(x, t, n);
  }
}
function hv(e, t) {
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
function dv(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Qc.call(e.childNodes), h = (d = n.props || Uh).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (uv(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, zh(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && rr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Bh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Ys(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ys(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Gh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    fe.__e(o, n);
  }
}
function Xh(e, t, n) {
  var o, i;
  if (fe.unmount && fe.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Gh(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        fe.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Xh(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Bh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function pv(e, t, n) {
  return this.constructor(e, n);
}
Qc = Fh.slice, fe = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Wh = 0, Ih = function(e) {
  return e != null && e.constructor === void 0;
}, So.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Rt({}, this.state), typeof e == "function" && (e = e(Rt({}, n), this.props)), e && Rt(n, e), e != null && this.__v && (t && this._sb.push(t), y_(this));
}, So.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), y_(this));
}, So.prototype.render = ea, xo = [], Vs.__r = 0;
var mv = 0;
function $_(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --mv, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return fe.vnode && fe.vnode(_), _;
}
let Kh = class extends So {
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
  handleItemClick(t, n, o, i) {
    o && o.call(i.target, i);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: t, index: n, event: i });
  }
  beforeRender() {
    var o;
    const t = { ...this.props }, n = (o = t.beforeRender) == null ? void 0 : o.call(this, t);
    return n && Object.assign(t, n), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, n) {
    const { key: o = n, ...i } = t;
    return /* @__PURE__ */ $_(nt, { ...i }, o);
  }
  renderItem(t, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = t, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), i) {
      const _ = i.call(this, c, fv);
      if (Ih(_))
        return _;
      typeof _ == "object" && Object.assign(c, _);
    }
    return this.onRenderItem(c, o);
  }
  render() {
    const t = this.beforeRender(), {
      className: n,
      items: o,
      size: i,
      type: r,
      defaultBtnProps: l,
      children: c,
      itemRender: _,
      onClickItem: h,
      beforeRender: s,
      afterRender: d,
      beforeDestroy: f,
      ...a
    } = t;
    return /* @__PURE__ */ $_(
      "div",
      {
        className: F("btn-group", i ? `size-${i}` : "", n),
        ...a,
        children: [
          o && o.map(this.renderItem.bind(this, t)),
          c
        ]
      }
    );
  }
};
function gv({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Ol(Kh, { type: n, ...o });
}
var pn;
let Kn = (pn = class extends Xn {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: o, ...i } = super.beforeRender();
    return i.className = F(i.className, o ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, o) {
    const i = this.isBtnItem(o.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, r = {
      ...n,
      ...i,
      ...o,
      className: F(`${this.name}-${o.type}`, n.className, i.className, o.className),
      style: Object.assign({}, n.style, i.style, o.style)
    };
    return /* @__PURE__ */ Ol(t, { ...r });
  }
}, L(pn, "ItemComponents", {
  item: hy,
  dropdown: Hh,
  "btn-group": gv
}), L(pn, "ROOT_TAG", "nav"), L(pn, "NAME", "toolbar"), L(pn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), pn);
function yv({
  className: e,
  style: t,
  actions: n,
  heading: o,
  content: i,
  contentClass: r,
  children: l,
  close: c,
  onClose: _,
  icon: h,
  ...s
}) {
  let d;
  c === !0 ? d = /* @__PURE__ */ lt(nt, { className: "alert-close btn ghost", square: !0, onClick: _, children: /* @__PURE__ */ lt("span", { class: "close" }) }) : mn(c) ? d = c : typeof c == "object" && (d = /* @__PURE__ */ lt(nt, { ...c, onClick: _ }));
  const f = mn(n) ? n : n ? /* @__PURE__ */ lt(Kn, { ...n }) : null;
  return /* @__PURE__ */ lt("div", { className: F("alert", e), style: t, ...s, children: [
    mn(h) ? h : typeof h == "string" ? /* @__PURE__ */ lt("i", { className: `icon ${h}` }) : null,
    mn(i) ? i : /* @__PURE__ */ lt("div", { className: F("alert-content", r), children: [
      mn(o) ? o : o && /* @__PURE__ */ lt("div", { className: "alert-heading", children: o }),
      /* @__PURE__ */ lt("div", { className: "alert-text", children: i }),
      o ? f : null
    ] }),
    o ? null : f,
    d,
    l
  ] });
}
function vv(e) {
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
let bv = class extends yo {
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
      type: i,
      placement: r,
      animation: l,
      show: c,
      className: _,
      time: h,
      ...s
    } = this.props;
    return /* @__PURE__ */ _y(
      yv,
      {
        className: F("messager", _, i, l === !0 ? vv(r) : l, c ? "in" : ""),
        ...s
      }
    );
  }
};
var Tn, vs;
class ys extends ke {
  constructor() {
    super(...arguments);
    T(this, Tn);
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
    this._show || (this.emit("show"), this.render(), this._show = !0, W(this, Tn, vs).call(this, () => {
      this.emit("shown");
      const { time: n } = this.options;
      n && W(this, Tn, vs).call(this, () => this.hide(), n);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), W(this, Tn, vs).call(this, () => {
      this.emit("hidden");
    }));
  }
}
Tn = new WeakSet(), vs = function(n, o = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, o);
}, L(ys, "NAME", "MessagerItem"), L(ys, "EVENTS", !0), L(ys, "Component", bv);
var nn, Mn, ht, Ri, Zh, Ni, Jh;
const $a = class extends Xe {
  constructor() {
    super(...arguments);
    T(this, Ri);
    T(this, Ni);
    T(this, nn, void 0);
    T(this, Mn, oy(6));
    T(this, ht, void 0);
  }
  get id() {
    return y(this, Mn);
  }
  get isShown() {
    var n;
    return !!((n = y(this, ht)) != null && n.isShown);
  }
  show(n) {
    this.setOptions(n), W(this, Ri, Zh).call(this).show();
  }
  hide() {
    var n;
    (n = y(this, ht)) == null || n.hide();
  }
  static show(n) {
    typeof n == "string" && (n = { content: n });
    const { container: o, ...i } = n, r = new $a(o || "body", i);
    return r.show(), r;
  }
};
let os = $a;
nn = new WeakMap(), Mn = new WeakMap(), ht = new WeakMap(), Ri = new WeakSet(), Zh = function() {
  if (y(this, ht))
    y(this, ht).setOptions(this.options);
  else {
    const n = W(this, Ni, Jh).call(this), o = new ys(n, this.options);
    o.on("hidden", () => {
      o.destroy(), n.remove(), H(this, nn, void 0);
    }), H(this, ht, o);
  }
  return y(this, ht);
}, Ni = new WeakSet(), Jh = function() {
  if (y(this, nn))
    return y(this, nn);
  const { placement: n = "top" } = this.options;
  let o = this.element.querySelector(`.messagers-${n}`);
  o || (o = document.createElement("div"), o.className = `messagers messagers-${n}`, this.element.appendChild(o));
  let i = o.querySelector(`#messager-${y(this, Mn)}`);
  return i || (i = document.createElement("div"), i.className = "messager-holder", i.id = `messager-${y(this, Mn)}`, o.appendChild(i), H(this, nn, i)), i;
}, L(os, "NAME", "messager"), L(os, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
var Qh, ue, ed, Co, k_, td = {}, nd = [], wv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Nt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function od(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function lc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++ed };
  return i == null && ue.vnode != null && ue.vnode(r), r;
}
function ta(e) {
  return e.children;
}
function Eo(e, t) {
  this.props = e, this.context = t;
}
function sr(e, t) {
  if (t == null)
    return e.__ ? sr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? sr(e) : null;
}
function rd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return rd(e);
  }
}
function x_(e) {
  (!e.__d && (e.__d = !0) && Co.push(e) && !qs.__r++ || k_ !== ue.debounceRendering) && ((k_ = ue.debounceRendering) || setTimeout)(qs);
}
function qs() {
  for (var e; qs.__r = Co.length; )
    e = Co.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Co = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Nt({}, r)).__v = r.__v + 1, cd(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? sr(r), r.__h), kv(o, r), r.__e != l && rd(r)));
    });
}
function sd(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || nd, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? lc(null, a, null, null, a) : Array.isArray(a) ? lc(ta, { children: a }, null, null, null) : a.__b > 0 ? lc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      cd(e, a, f = f || td, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = id(a, _, e) : _ = ld(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = sr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && _d(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      ad(p[s], p[++s], p[++s]);
}
function id(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? id(o, t, n) : ld(n, o, o, i, o.__e, t));
  return t;
}
function ld(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function $v(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Gs(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Gs(e, r, t[r], n[r], o);
}
function S_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || wv.test(t) ? n : n + "px";
}
function Gs(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || S_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || S_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? E_ : C_, r) : e.removeEventListener(t, r ? E_ : C_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function C_(e) {
  this.l[e.type + !1](ue.event ? ue.event(e) : e);
}
function E_(e) {
  this.l[e.type + !0](ue.event ? ue.event(e) : e);
}
function cd(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ue.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Eo(p, g), s.constructor = v, s.render = Sv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Nt({}, s.__s)), Nt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = ue.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Nt(Nt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === ta && h.key == null ? h.props.children : h, sd(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = xv(n.__e, t, n, o, i, r, l, _);
    (h = ue.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ue.__e(x, t, n);
  }
}
function kv(e, t) {
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
function xv(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Qh.call(e.childNodes), h = (d = n.props || td).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if ($v(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, sd(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && sr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && od(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Gs(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Gs(e, "checked", u, d.checked, !1));
  }
  return e;
}
function ad(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ue.__e(o, n);
  }
}
function _d(e, t, n) {
  var o, i;
  if (ue.unmount && ue.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ad(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ue.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && _d(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || od(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Sv(e, t, n) {
  return this.constructor(e, n);
}
Qh = nd.slice, ue = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ed = 0, Eo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Nt({}, this.state), typeof e == "function" && (e = e(Nt({}, n), this.props)), e && Nt(n, e), e != null && this.__v && (t && this._sb.push(t), x_(this));
}, Eo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), x_(this));
}, Eo.prototype.render = ta, Co = [], qs.__r = 0;
var Cv = 0;
function rs(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Cv, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ue.vnode && ue.vnode(_), _;
}
var as;
let Ev = (as = class extends Eo {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: o, circleBgColor: i, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ rs("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ rs("circle", { cx: c, cy: c, r: l, stroke: i, "stroke-width": o }),
      /* @__PURE__ */ rs("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - t) / 100, "stroke-width": o }),
      /* @__PURE__ */ rs("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(t) })
    ] });
  }
}, L(as, "NAME", "zui.progress-circle"), L(as, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), as);
class A_ extends ke {
}
L(A_, "NAME", "table-sorter"), L(A_, "Component", Ev);
function Av(e) {
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
function Tv(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Mv(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const R$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: F,
  domReady: Tv,
  getClassList: Pl,
  isElementVisible: Mv,
  selectText: Av
}, Symbol.toStringTag, { value: "Module" }));
let Lv = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var xr, wt, Ze, Ln, Rn, bs;
const ka = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    T(this, Rn);
    T(this, xr, void 0);
    T(this, wt, void 0);
    T(this, Ze, void 0);
    T(this, Ln, void 0);
    H(this, xr, n), H(this, wt, `ZUI_STORE:${t ?? Lv()}`), H(this, Ze, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return y(this, xr);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (y(this, Ln) || H(this, Ln, new ka(y(this, wt), "session")), y(this, Ln));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const o = y(this, Ze).getItem(W(this, Rn, bs).call(this, t));
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
    y(this, Ze).setItem(W(this, Rn, bs).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    y(this, Ze).removeItem(W(this, Rn, bs).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < y(this, Ze).length; n++) {
      const o = y(this, Ze).key(n);
      if (o != null && o.startsWith(y(this, wt))) {
        const i = y(this, Ze).getItem(o);
        typeof i == "string" && t(o.substring(y(this, wt).length + 1), JSON.parse(i));
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
let Xs = ka;
xr = new WeakMap(), wt = new WeakMap(), Ze = new WeakMap(), Ln = new WeakMap(), Rn = new WeakSet(), bs = function(t) {
  return `${y(this, wt)}:${t}`;
};
const Rv = new Xs("DEFAULT");
function Nv(e, t = "local") {
  return new Xs(e, t);
}
Object.assign(Rv, { create: Nv });
var fd, he, ud, Ao, T_, hd = {}, dd = [], Dv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Dt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function pd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function cc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++ud };
  return i == null && he.vnode != null && he.vnode(r), r;
}
function na(e) {
  return e.children;
}
function To(e, t) {
  this.props = e, this.context = t;
}
function ir(e, t) {
  if (t == null)
    return e.__ ? ir(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? ir(e) : null;
}
function md(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return md(e);
  }
}
function M_(e) {
  (!e.__d && (e.__d = !0) && Ao.push(e) && !Ks.__r++ || T_ !== he.debounceRendering) && ((T_ = he.debounceRendering) || setTimeout)(Ks);
}
function Ks() {
  for (var e; Ks.__r = Ao.length; )
    e = Ao.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ao = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Dt({}, r)).__v = r.__v + 1, bd(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? ir(r), r.__h), Ov(o, r), r.__e != l && md(r)));
    });
}
function gd(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || dd, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? cc(null, a, null, null, a) : Array.isArray(a) ? cc(na, { children: a }, null, null, null) : a.__b > 0 ? cc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      bd(e, a, f = f || hd, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = yd(a, _, e) : _ = vd(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = ir(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && $d(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      wd(p[s], p[++s], p[++s]);
}
function yd(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? yd(o, t, n) : vd(n, o, o, i, o.__e, t));
  return t;
}
function vd(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Pv(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Zs(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Zs(e, r, t[r], n[r], o);
}
function L_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Dv.test(t) ? n : n + "px";
}
function Zs(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || L_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || L_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? N_ : R_, r) : e.removeEventListener(t, r ? N_ : R_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function R_(e) {
  this.l[e.type + !1](he.event ? he.event(e) : e);
}
function N_(e) {
  this.l[e.type + !0](he.event ? he.event(e) : e);
}
function bd(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = he.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new To(p, g), s.constructor = v, s.render = Wv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Dt({}, s.__s)), Dt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = he.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Dt(Dt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === na && h.key == null ? h.props.children : h, gd(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Hv(n.__e, t, n, o, i, r, l, _);
    (h = he.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), he.__e(x, t, n);
  }
}
function Ov(e, t) {
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
function Hv(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && fd.call(e.childNodes), h = (d = n.props || hd).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Pv(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, gd(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && ir(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && pd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Zs(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Zs(e, "checked", u, d.checked, !1));
  }
  return e;
}
function wd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    he.__e(o, n);
  }
}
function $d(e, t, n) {
  var o, i;
  if (he.unmount && he.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || wd(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        he.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && $d(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || pd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Wv(e, t, n) {
  return this.constructor(e, n);
}
fd = dd.slice, he = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, ud = 0, To.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Dt({}, this.state), typeof e == "function" && (e = e(Dt({}, n), this.props)), e && Dt(n, e), e != null && this.__v && (t && this._sb.push(t), M_(this));
}, To.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), M_(this));
}, To.prototype.render = na, Ao = [], Ks.__r = 0;
var Iv = 0;
function ac(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Iv, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return he.vnode && he.vnode(_), _;
}
function Uv(e) {
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
function Fv(e) {
  const [t, n, o] = typeof e == "string" ? Uv(e) : e;
  return t * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function D_(e, t) {
  return Fv(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function P_(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function Bv(e, t, n) {
  e = e % 360 / 360, t = P_(t), n = P_(n);
  const o = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? i + (o - i) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? i + (o - i) * (2 / 3 - l) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function jv(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function zv(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
let Vv = class extends To {
  render() {
    const {
      className: t,
      style: n,
      size: o = "",
      circle: i,
      rounded: r,
      background: l,
      foreColor: c,
      text: _,
      code: h,
      maxTextLength: s = 2,
      src: d,
      hueDistance: f = 43,
      saturation: a = 0.4,
      lightness: u = 0.6,
      children: b,
      ...p
    } = this.props, m = ["avatar", t], g = { ...n, background: l, color: c };
    let w = 32;
    o && (typeof o == "number" ? (g.width = `${o}px`, g.height = `${o}px`, g.fontSize = `${Math.max(12, Math.round(o / 2))}px`, w = o) : (m.push(`size-${o}`), w = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), i ? m.push("circle") : r && (typeof r == "number" ? g.borderRadius = `${r}px` : m.push(`rounded-${r}`));
    let k;
    if (d)
      m.push("has-img"), k = /* @__PURE__ */ ac("img", { className: "avatar-img", src: d, alt: _ });
    else if (_ != null && _.length) {
      const C = zv(_, s);
      if (m.push("has-text", `has-text-${C.length}`), l)
        !c && l && (g.color = D_(l));
      else {
        const E = h ?? _, v = (typeof E == "number" ? E : jv(E)) * f % 360;
        if (g.background = `hsl(${v},${a * 100}%,${u * 100}%)`, !c) {
          const x = Bv(v, a, u);
          g.color = D_(x);
        }
      }
      let A;
      w && w < 14 * C.length && (A = { transform: `scale(${w / (14 * C.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ ac("div", { "data-actualSize": w, className: "avatar-text", style: A, children: C });
    }
    return /* @__PURE__ */ ac(
      "div",
      {
        className: F(m),
        style: g,
        ...p,
        children: [
          k,
          b
        ]
      }
    );
  }
};
class O_ extends ke {
}
L(O_, "NAME", "avatar"), L(O_, "Component", Vv);
class H_ extends ke {
}
L(H_, "NAME", "btngroup"), L(H_, "Component", Kh);
var Fl, ne, kd, Mo, W_, Js = {}, xd = [], Yv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Pt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Sd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function lr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Fl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return ws(e, l, o, i, null);
}
function ws(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++kd };
  return i == null && ne.vnode != null && ne.vnode(r), r;
}
function qv() {
  return { current: null };
}
function Bl(e) {
  return e.children;
}
function Lo(e, t) {
  this.props = e, this.context = t;
}
function cr(e, t) {
  if (t == null)
    return e.__ ? cr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? cr(e) : null;
}
function Cd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Cd(e);
  }
}
function I_(e) {
  (!e.__d && (e.__d = !0) && Mo.push(e) && !Qs.__r++ || W_ !== ne.debounceRendering) && ((W_ = ne.debounceRendering) || setTimeout)(Qs);
}
function Qs() {
  for (var e; Qs.__r = Mo.length; )
    e = Mo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Mo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Pt({}, r)).__v = r.__v + 1, oa(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? cr(r), r.__h), Md(o, r), r.__e != l && Cd(r)));
    });
}
function Ed(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || xd, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ws(null, a, null, null, a) : Array.isArray(a) ? ws(Bl, { children: a }, null, null, null) : a.__b > 0 ? ws(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      oa(e, a, f = f || Js, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Ad(a, _, e) : _ = Td(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = cr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Rd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Ld(p[s], p[++s], p[++s]);
}
function Ad(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Ad(o, t, n) : Td(n, o, o, i, o.__e, t));
  return t;
}
function Td(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Gv(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ei(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ei(e, r, t[r], n[r], o);
}
function U_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Yv.test(t) ? n : n + "px";
}
function ei(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || U_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || U_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? B_ : F_, r) : e.removeEventListener(t, r ? B_ : F_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function F_(e) {
  this.l[e.type + !1](ne.event ? ne.event(e) : e);
}
function B_(e) {
  this.l[e.type + !0](ne.event ? ne.event(e) : e);
}
function oa(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ne.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Lo(p, g), s.constructor = v, s.render = Kv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Pt({}, s.__s)), Pt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = ne.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Pt(Pt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Bl && h.key == null ? h.props.children : h, Ed(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Xv(n.__e, t, n, o, i, r, l, _);
    (h = ne.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ne.__e(x, t, n);
  }
}
function Md(e, t) {
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
function Xv(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Fl.call(e.childNodes), h = (d = n.props || Js).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Gv(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Ed(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && cr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Sd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && ei(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ei(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Ld(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ne.__e(o, n);
  }
}
function Rd(e, t, n) {
  var o, i;
  if (ne.unmount && ne.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ld(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ne.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Rd(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Sd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Kv(e, t, n) {
  return this.constructor(e, n);
}
function Zv(e, t, n) {
  var o, i, r;
  ne.__ && ne.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], oa(t, e = (!o && n || t).__k = lr(Bl, null, [e]), i || Js, Js, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Fl.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), Md(r, e);
}
Fl = xd.slice, ne = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, kd = 0, Lo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pt({}, this.state), typeof e == "function" && (e = e(Pt({}, n), this.props)), e && Pt(n, e), e != null && this.__v && (t && this._sb.push(t), I_(this));
}, Lo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), I_(this));
}, Lo.prototype.render = Bl, Mo = [], Qs.__r = 0;
var Jv = 0;
function G(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Jv, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ne.vnode && ne.vnode(_), _;
}
var Nd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Z = {}, Qv = {
  get exports() {
    return Z;
  },
  set exports(e) {
    Z = e;
  }
};
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Nd, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var S = ["th", "st", "nd", "rd"], $ = N % 100;
      return "[" + N + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(N, S, $) {
      var D = String(N);
      return !D || D.length >= S ? N : "" + Array(S + 1 - D.length).join($) + N;
    }, k = { s: w, z: function(N) {
      var S = -N.utcOffset(), $ = Math.abs(S), D = Math.floor($ / 60), M = $ % 60;
      return (S <= 0 ? "+" : "-") + w(D, 2, "0") + ":" + w(M, 2, "0");
    }, m: function N(S, $) {
      if (S.date() < $.date())
        return -N($, S);
      var D = 12 * ($.year() - S.year()) + ($.month() - S.month()), M = S.clone().add(D, d), O = $ - M < 0, P = S.clone().add(D + (O ? -1 : 1), d);
      return +(-(D + ($ - M) / (O ? M - P : P - M)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, C = "en", A = {};
    A[C] = g;
    var E = function(N) {
      return N instanceof V;
    }, v = function N(S, $, D) {
      var M;
      if (!S)
        return C;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        A[O] && (M = O), $ && (A[O] = $, M = O);
        var P = S.split("-");
        if (!M && P.length > 1)
          return N(P[0]);
      } else {
        var I = S.name;
        A[I] = S, M = I;
      }
      return !D && M && (C = M), M || !D && C;
    }, x = function(N, S) {
      if (E(N))
        return N.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = N, $.args = arguments, new V($);
    }, R = k;
    R.l = v, R.i = E, R.w = function(N, S) {
      return x(N, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var V = function() {
      function N($) {
        this.$L = v($.locale, null, !0), this.parse($);
      }
      var S = N.prototype;
      return S.parse = function($) {
        this.$d = function(D) {
          var M = D.date, O = D.utc;
          if (M === null)
            return new Date(NaN);
          if (R.u(M))
            return new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var P = M.match(p);
            if (P) {
              var I = P[2] - 1 || 0, z = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z);
            }
          }
          return new Date(M);
        }($), this.$x = $.x || {}, this.init();
      }, S.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, S.$utils = function() {
        return R;
      }, S.isValid = function() {
        return this.$d.toString() !== b;
      }, S.isSame = function($, D) {
        var M = x($);
        return this.startOf(D) <= M && M <= this.endOf(D);
      }, S.isAfter = function($, D) {
        return x($) < this.startOf(D);
      }, S.isBefore = function($, D) {
        return this.endOf(D) < x($);
      }, S.$g = function($, D, M) {
        return R.u($) ? this[D] : this.set(M, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, D) {
        var M = this, O = !!R.u(D) || D, P = R.p($), I = function(se, q) {
          var ie = R.w(M.$u ? Date.UTC(M.$y, q, se) : new Date(M.$y, q, se), M);
          return O ? ie : ie.endOf(h);
        }, z = function(se, q) {
          return R.w(M.toDate()[se].apply(M.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)), M);
        }, j = this.$W, X = this.$M, ve = this.$D, U = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, X) : I(0, X + 1);
          case s:
            var K = this.$locale().weekStart || 0, ye = (j < K ? j + 7 : j) - K;
            return I(O ? ve - ye : ve + (6 - ye), X);
          case h:
          case u:
            return z(U + "Hours", 0);
          case _:
            return z(U + "Minutes", 1);
          case c:
            return z(U + "Seconds", 2);
          case l:
            return z(U + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function($) {
        return this.startOf($, !1);
      }, S.$set = function($, D) {
        var M, O = R.p($), P = "set" + (this.$u ? "UTC" : ""), I = (M = {}, M[h] = P + "Date", M[u] = P + "Date", M[d] = P + "Month", M[a] = P + "FullYear", M[_] = P + "Hours", M[c] = P + "Minutes", M[l] = P + "Seconds", M[r] = P + "Milliseconds", M)[O], z = O === h ? this.$D + (D - this.$W) : D;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[I](z), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](z);
        return this.init(), this;
      }, S.set = function($, D) {
        return this.clone().$set($, D);
      }, S.get = function($) {
        return this[R.p($)]();
      }, S.add = function($, D) {
        var M, O = this;
        $ = Number($);
        var P = R.p(D), I = function(X) {
          var ve = x(O);
          return R.w(ve.date(ve.date() + Math.round(X * $)), O);
        };
        if (P === d)
          return this.set(d, this.$M + $);
        if (P === a)
          return this.set(a, this.$y + $);
        if (P === h)
          return I(1);
        if (P === s)
          return I(7);
        var z = (M = {}, M[c] = o, M[_] = i, M[l] = n, M)[P] || 1, j = this.$d.getTime() + $ * z;
        return R.w(j, this);
      }, S.subtract = function($, D) {
        return this.add(-1 * $, D);
      }, S.format = function($) {
        var D = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || b;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), I = this.$H, z = this.$m, j = this.$M, X = M.weekdays, ve = M.months, U = function(q, ie, Ae, Te) {
          return q && (q[ie] || q(D, O)) || Ae[ie].slice(0, Te);
        }, K = function(q) {
          return R.s(I % 12 || 12, q, "0");
        }, ye = M.meridiem || function(q, ie, Ae) {
          var Te = q < 12 ? "AM" : "PM";
          return Ae ? Te.toLowerCase() : Te;
        }, se = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: R.s(j + 1, 2, "0"), MMM: U(M.monthsShort, j, ve, 3), MMMM: U(ve, j), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: U(M.weekdaysMin, this.$W, X, 2), ddd: U(M.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(I), HH: R.s(I, 2, "0"), h: K(1), hh: K(2), a: ye(I, z, !0), A: ye(I, z, !1), m: String(z), mm: R.s(z, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(q, ie) {
          return ie || se[q] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, D, M) {
        var O, P = R.p(D), I = x($), z = (I.utcOffset() - this.utcOffset()) * o, j = this - I, X = R.m(this, I);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - z) / 6048e5, O[h] = (j - z) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, M ? X : R.a(X);
      }, S.daysInMonth = function() {
        return this.endOf(d).$D;
      }, S.$locale = function() {
        return A[this.$L];
      }, S.locale = function($, D) {
        if (!$)
          return this.$L;
        var M = this.clone(), O = v($, D, !0);
        return O && (M.$L = O), M;
      }, S.clone = function() {
        return R.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), B = V.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(N) {
      B[N[1]] = function(S) {
        return this.$g(S, N[0], N[1]);
      };
    }), x.extend = function(N, S) {
      return N.$i || (N(S, V, x), N.$i = !0), x;
    }, x.locale = v, x.isDayjs = E, x.unix = function(N) {
      return x(1e3 * N);
    }, x.en = A[C], x.Ls = A, x.p = {}, x;
  });
})(Qv);
const Sc = (e = 0, t = 0) => {
  const n = [];
  for (let o = e; o <= t; o++)
    n.push(o);
  return n;
}, Dd = (e, t) => {
  const n = Math.ceil(e.length / t);
  return new Array(t).fill({}).map((o, i) => e.slice(i * n, (i + 1) * n));
}, eb = (e) => {
  const { format: t, minDate: n, maxDate: o, tagDate: i, DATEROWCOUNT: r, showOtherMonth: l, clickDay: c, selectedDate: _, handleChangePanel: h, showToday: s, handleChange: d, clickToday: f } = e, a = (R) => Z(R).isValid() ? Z(R).add(1, "months").format(t) : "", u = (R) => Z(R).isValid() ? Z(R).subtract(1, "months").format(t) : "", b = () => {
    const R = u(_);
    d(R, !1);
  }, p = () => {
    const R = a(_);
    d(R, !1);
  }, m = () => {
    d("", !0);
  }, g = () => {
    d(_, !0);
  }, w = (R, V, B, N) => {
    const S = Z(), $ = Z(_), D = new Array(R);
    for (let M = 0; M < R; M++) {
      const O = V + M + 1, P = B.set("date", O), I = N && !l ? !0 : n && P.isBefore(n, "date") || o && P.isAfter(o, "date");
      D[M] = {
        isSelected: $.isSame(B.set("date", O), "date"),
        isToday: S.isSame(P, "date"),
        isDisable: !!I,
        isTag: !!(i != null && i.includes(P.format(t))),
        date: P,
        isOtherMonth: N,
        onClick: () => I ? {} : c(P)
      };
    }
    return D;
  }, k = () => {
    const R = Z(_), V = Z(), B = _ ? R : V, N = B.set("date", 1).day(), S = N === 0 ? 6 : N - 1, $ = B.subtract(1, "month"), M = Number($.endOf("month").get("date")) - S;
    return w(S, M, $, !0);
  }, C = () => {
    const R = Z(_), V = Z(), B = _ ? R : V, N = B.set("date", 1).day(), S = N === 0 ? 6 : N - 1, $ = B.endOf("month").get("date"), D = B.add(1, "month"), M = 7 * 6 % (S + $);
    return w(M, 0, D, !0);
  }, A = () => {
    const R = _, V = Z(), B = _ ? Z(R) : V, N = B.endOf("month").get("date"), S = w(N, 0, B, !1), $ = k(), D = C(), M = [...$, ...S, ...D];
    return Dd(M, r);
  }, E = ["一", "二", "三", "四", "五", "六", "日"], v = A(), x = _ || Z().format(t);
  return /* @__PURE__ */ G("div", { className: F("datepicker-calendar-day"), children: [
    /* @__PURE__ */ G("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ G("div", { class: "flex", children: /* @__PURE__ */ G("button", { type: "button", className: "btn ghost", onClick: () => h("year"), children: [
        /* @__PURE__ */ G("span", { children: Z(x).format("YYYY 年 MM 月") }),
        /* @__PURE__ */ G("span", { class: "caret" })
      ] }) }),
      /* @__PURE__ */ G("div", { class: "flex", children: [
        s && /* @__PURE__ */ G("button", { type: "button", className: "btn ghost", onClick: () => {
          f();
        }, children: "今天" }),
        /* @__PURE__ */ G("button", { type: "button", className: "btn ghost", onClick: () => b(), children: /* @__PURE__ */ G("i", { className: "icon icon-angle-left" }) }),
        /* @__PURE__ */ G("button", { type: "button", className: "btn ghost", onClick: () => p(), children: /* @__PURE__ */ G("i", { className: "icon icon-angle-right" }) })
      ] })
    ] }),
    /* @__PURE__ */ G("table", { className: "datepicker-calendar-table not-hide-datepicker", children: [
      /* @__PURE__ */ G("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ G("tr", { children: E.map((R, V) => /* @__PURE__ */ G("th", { children: R }, V)) }) }),
      /* @__PURE__ */ G("tbody", { className: "datepicker-calendar-tbody", children: v.map((R, V) => /* @__PURE__ */ G("tr", { children: R.map((B, N) => {
        const S = ["text-center"];
        return B.isToday && S.push("datepicker-calendar-today"), B.isSelected && S.push("datepicker-calendar-selected-date"), B.isOtherMonth && S.push("datepicker-calendar-other-month"), B.isTag && S.push("datepicker-calendar-tag"), /* @__PURE__ */ G("td", { className: F(S), children: /* @__PURE__ */ G("div", { className: F("btn", "ghost", "datepicker-calendar-date", B.isDisable ? "disabled" : ""), onClick: B.onClick, children: !l && B.isOtherMonth ? "" : Z(B.date).format("DD") }) }, N);
      }) }, V)) })
    ] }),
    /* @__PURE__ */ G("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ G("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ G("span", { children: "清除" }) }),
      /* @__PURE__ */ G("button", { type: "button", className: "btn ghost text-primary", onClick: g, children: /* @__PURE__ */ G("span", { children: "确认" }) })
    ] })
  ] });
};
const tb = (e) => {
  const { format: t, selectedDate: n, minDate: o, maxDate: i, year: r, handleChangeMonth: l } = e, c = Z(o).format("M"), _ = Z(i).format("M"), h = Dd(Sc(1, 12), 3), s = (d, f) => {
    f || l(d);
  };
  return /* @__PURE__ */ G("div", { className: F("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ G("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ G("tbody", { className: "datepicker-calendar-month-table-body", children: h.map((d, f) => /* @__PURE__ */ G("tr", { children: d.map((a, u) => {
    const b = ["text-center"], p = Z(`${r}-${a}-01`).format(t), m = !!(c && Z(n).isBefore(c) || _ && Z(n).isBefore(_));
    return /* @__PURE__ */ G("td", { className: F(b), children: /* @__PURE__ */ G("div", { className: F("btn", "size-sm", "ghost", "datepicker-calendar-month", m ? "disabled" : ""), onClick: () => {
      s(p, m);
    }, children: [
      Z(p).format("MM"),
      " 月"
    ] }) }, u);
  }) }, f)) }) }) });
}, nb = (e) => {
  const { selectedDate: t, handleChangeMonth: n } = e;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = Z(t).year(), i = [...Sc(o - 100, o), ...Sc(o + 1, o + 100)], r = (l, c) => {
    var s, d, f;
    if (!(l != null && l.target))
      return;
    const _ = document.querySelectorAll(".datepicker-accordion > ul > li > .datepicker-accordion-title");
    for (let a = 0; a < _.length; a++)
      (s = _[a].nextElementSibling) != null && s.classList.contains("hidden") || (d = _[a].nextElementSibling) == null || d.classList.add("hidden");
    (f = l.target.nextElementSibling) == null || f.classList.toggle("hidden");
    const h = document.querySelector(".datepicker-accordion");
    h && (h.scrollTop + h.clientHeight === h.scrollHeight ? h.scrollTop = 0 : c < o ? h.scrollTop = h.scrollTop - 30 : h.scrollTop = h.scrollTop + 30);
  };
  return /* @__PURE__ */ G("div", { class: "datepicker-accordion scroll-smooth not-hide-datepicker", children: /* @__PURE__ */ G("ul", { children: i.map((l, c) => /* @__PURE__ */ G("li", { id: o === l ? "selected" : "", children: [
    /* @__PURE__ */ G("div", { class: "datepicker-accordion-title", onClick: (_) => r(_, l), children: l }),
    /* @__PURE__ */ G("div", { className: F("datepicker-accordion-content", o === l ? "" : "hidden"), children: lr(tb, {
      ...e,
      year: l.toString(),
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class ob extends Lo {
  constructor() {
    super(...arguments);
    L(this, "DATEROWCOUNT", 6);
    L(this, "ref", qv());
    L(this, "state", {
      selectedDate: this.props.date || Z().format("YYYY-MM-DD"),
      type: "day"
    });
  }
  handleChange(n, o = !1) {
    var i, r;
    this.setState({ selectedDate: n }), o && ((r = (i = this.props).onChange) == null || r.call(i, n));
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
    const o = n === "subtract" ? Z(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format) : Z(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
    this.handleChange(o);
  }
  clickDay(n) {
    const o = Z(n).format(this.props.format);
    this.handleChange(o);
  }
  clickToday() {
    this.handleChange(Z().format(this.props.format));
  }
  renderPanel() {
    return this.state.type === "day" ? lr(eb, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : lr(nb, {
      ...this.props,
      selectedDate: this.state.selectedDate,
      handleChangeMonth: this.handleChangeMonth.bind(this)
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ G("div", { className: F("datepicker-calendar", n), ref: this.ref, children: this.renderPanel() });
  }
}
function Zr(e) {
  return e.split("-")[1];
}
function ra(e) {
  return e === "y" ? "height" : "width";
}
function Zn(e) {
  return e.split("-")[0];
}
function jl(e) {
  return ["top", "bottom"].includes(Zn(e)) ? "x" : "y";
}
function j_(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = jl(t), _ = ra(c), h = o[_] / 2 - i[_] / 2, s = Zn(t), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Zr(t)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const rb = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: s,
    y: d
  } = j_(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (s = g ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = j_(h, f, _)), b = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function sb(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Pd(e) {
  return typeof e != "number" ? sb(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ti(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function ib(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = t, u = Pd(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = ti(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = ti(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const lb = Math.min, cb = Math.max;
function ab(e, t, n) {
  return cb(e, lb(t, n));
}
const _b = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: n,
      padding: o = 0
    } = e || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = t;
    if (n == null)
      return {};
    const h = Pd(o), s = {
      x: i,
      y: r
    }, d = jl(l), f = ra(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, v = ab(C, E, A), R = Zr(l) != null && E != v && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: v,
        centerOffset: E - v
      }
    };
  }
}), fb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ni(e) {
  return e.replace(/left|right|bottom|top/g, (t) => fb[t]);
}
function ub(e, t, n) {
  n === void 0 && (n = !1);
  const o = Zr(e), i = jl(e), r = ra(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = ni(l)), {
    main: l,
    cross: ni(l)
  };
}
const hb = {
  start: "end",
  end: "start"
};
function Cc(e) {
  return e.replace(/start|end/g, (t) => hb[t]);
}
function db(e) {
  const t = ni(e);
  return [Cc(e), t, Cc(t)];
}
function pb(e, t, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : o : t ? o : i;
    case "left":
    case "right":
      return t ? r : l;
    default:
      return [];
  }
}
function mb(e, t, n, o) {
  const i = Zr(e);
  let r = pb(Zn(e), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), t && (r = r.concat(r.map(Cc)))), r;
}
const gb = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = t, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = e, p = Zn(o), m = Zn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [ni(l)] : db(l));
      !d && a !== "none" && w.push(...mb(l, u, a, g));
      const k = [l, ...w], C = await ib(t, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: R,
          cross: V
        } = ub(o, r, g);
        A.push(C[R], C[V]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var v;
        const R = (((v = i.flip) == null ? void 0 : v.index) || 0) + 1, V = k[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: E
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, D) => $ + D, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            N && (B = N);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
async function yb(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Zn(n), c = Zr(n), _ = jl(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
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
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const vb = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, i = await yb(t, e);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function Ue(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function rt(e) {
  return Ue(e).getComputedStyle(e);
}
function Vt(e) {
  return Hd(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ss;
function Od() {
  if (ss)
    return ss;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ss = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ss) : navigator.userAgent;
}
function mt(e) {
  return e instanceof Ue(e).HTMLElement;
}
function Ye(e) {
  return e instanceof Ue(e).Element;
}
function Hd(e) {
  return e instanceof Ue(e).Node;
}
function z_(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Ue(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function zl(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i);
}
function bb(e) {
  return ["table", "td", "th"].includes(Vt(e));
}
function sa(e) {
  const t = /firefox/i.test(Od()), n = rt(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Wd() {
  return !/^((?!chrome|android).)*safari/i.test(Od());
}
function ia(e) {
  return ["html", "body", "#document"].includes(Vt(e));
}
const V_ = Math.min, Ro = Math.max, oi = Math.round;
function Id(e) {
  const t = rt(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, l = oi(n) !== i || oi(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Ud(e) {
  return Ye(e) ? e : e.contextElement;
}
const Fd = {
  x: 1,
  y: 1
};
function yn(e) {
  const t = Ud(e);
  if (!mt(t))
    return Fd;
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = Id(t);
  let l = (r ? oi(n.width) : n.width) / o, c = (r ? oi(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function un(e, t, n, o) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = Ud(e);
  let _ = Fd;
  t && (o ? Ye(o) && (_ = yn(o)) : _ = yn(e));
  const h = c ? Ue(c) : window, s = !Wd() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Ue(c), p = o && Ye(o) ? Ue(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = yn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Ue(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function Xt(e) {
  return ((Hd(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Vl(e) {
  return Ye(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Bd(e) {
  return un(Xt(e)).left + Vl(e).scrollLeft;
}
function wb(e, t, n) {
  const o = mt(t), i = Xt(t), r = un(e, !0, n === "fixed", t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Vt(t) !== "body" || zl(i)) && (l = Vl(t)), mt(t)) {
      const _ = un(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      i && (c.x = Bd(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function ar(e) {
  if (Vt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node
    e.assignedSlot || // DOM Element detected
    e.parentNode || // ShadowRoot detected
    (z_(e) ? e.host : null) || // Fallback
    Xt(e)
  );
  return z_(t) ? t.host : t;
}
function Y_(e) {
  return !mt(e) || rt(e).position === "fixed" ? null : e.offsetParent;
}
function $b(e) {
  let t = ar(e);
  for (; mt(t) && !ia(t); ) {
    if (sa(t))
      return t;
    t = ar(t);
  }
  return null;
}
function q_(e) {
  const t = Ue(e);
  let n = Y_(e);
  for (; n && bb(n) && rt(n).position === "static"; )
    n = Y_(n);
  return n && (Vt(n) === "html" || Vt(n) === "body" && rt(n).position === "static" && !sa(n)) ? t : n || $b(e) || t;
}
function kb(e) {
  return Id(e);
}
function xb(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const i = mt(n), r = Xt(n);
  if (n === r)
    return t;
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
  if ((i || !i && o !== "fixed") && ((Vt(n) !== "body" || zl(r)) && (l = Vl(n)), mt(n))) {
    const h = un(n);
    c = yn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - l.scrollLeft * c.x + _.x,
    y: t.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Sb(e, t) {
  const n = Ue(e), o = Xt(e), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Wd();
    (h || !h && t === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Cb(e) {
  var t;
  const n = Xt(e), o = Vl(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = Ro(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Ro(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Bd(e);
  const _ = -o.scrollTop;
  return rt(i || n).direction === "rtl" && (c += Ro(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function jd(e) {
  const t = ar(e);
  return ia(t) ? e.ownerDocument.body : mt(t) && zl(t) ? t : jd(t);
}
function No(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = jd(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ue(o);
  return i ? t.concat(r, r.visualViewport || [], zl(o) ? o : []) : t.concat(o, No(o));
}
function Eb(e, t) {
  const n = un(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, r = mt(e) ? yn(e) : {
    x: 1,
    y: 1
  }, l = e.clientWidth * r.x, c = e.clientHeight * r.y, _ = i * r.x, h = o * r.y;
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
function G_(e, t, n) {
  return t === "viewport" ? ti(Sb(e, n)) : Ye(t) ? Eb(t, n) : ti(Cb(Xt(e)));
}
function Ab(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = No(e).filter((c) => Ye(c) && Vt(c) !== "body"), i = null;
  const r = rt(e).position === "fixed";
  let l = r ? ar(e) : e;
  for (; Ye(l) && !ia(l); ) {
    const c = rt(l), _ = sa(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = ar(l);
  }
  return t.set(e, o), o;
}
function Tb(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? Ab(t, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = G_(t, s, i);
    return h.top = Ro(d.top, h.top), h.right = V_(d.right, h.right), h.bottom = V_(d.bottom, h.bottom), h.left = Ro(d.left, h.left), h;
  }, G_(t, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Mb = {
  getClippingRect: Tb,
  convertOffsetParentRelativeRectToViewportRelativeRect: xb,
  isElement: Ye,
  getDimensions: kb,
  getOffsetParent: q_,
  getDocumentElement: Xt,
  getScale: yn,
  async getElementRects(e) {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const i = this.getOffsetParent || q_, r = this.getDimensions;
    return {
      reference: wb(t, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => rt(e).direction === "rtl"
};
function Lb(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Ye(e) ? No(e) : e.contextElement ? No(e.contextElement) : [], ...No(t)] : [];
  h.forEach((u) => {
    _ && u.addEventListener("scroll", n, {
      passive: !0
    }), r && u.addEventListener("resize", n);
  });
  let s = null;
  if (l) {
    let u = !0;
    s = new ResizeObserver(() => {
      u || n(), u = !1;
    }), Ye(e) && !c && s.observe(e), !Ye(e) && e.contextElement && !c && s.observe(e.contextElement), s.observe(t);
  }
  let d, f = c ? un(e) : null;
  c && a();
  function a() {
    const u = un(e);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const Rb = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Mb,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return rb(e, t, {
    ...i,
    platform: r
  });
};
var Nn, Dn, xe, on, Sr, Cr, Er, Ec, Di, zd, Pi, Vd, Oi, Yd, Hi, qd, Wi, Gd, Ii, Xd, Ui, Kd, Fi;
const Jt = class extends Xe {
  constructor() {
    super(...arguments);
    T(this, Er);
    T(this, Di);
    T(this, Pi);
    T(this, Oi);
    T(this, Hi);
    T(this, Wi);
    T(this, Ii);
    T(this, Ui);
    T(this, Nn, void 0);
    T(this, Dn, 0);
    T(this, xe, void 0);
    T(this, on, void 0);
    T(this, Sr, void 0);
    T(this, Cr, void 0);
    L(this, "hideLater", () => {
      y(this, Fi).call(this), H(this, Dn, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, Fi, () => {
      clearTimeout(y(this, Dn)), H(this, Dn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, on)) == null ? void 0 : n.classList.contains(Jt.CLASS_SHOW);
  }
  get datepicker() {
    return y(this, on) || W(this, Pi, Vd).call(this);
  }
  get trigger() {
    return y(this, Sr) || this.element;
  }
  get elementShowClass() {
    return `with-${Jt.NAME}-show`;
  }
  show(n) {
    return H(this, Sr, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(Jt.CLASS_SHOW), this.datepicker.classList.add("fade"), W(this, Ii, Xd).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = y(this, Cr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, on)) == null || o.classList.remove(Jt.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-datepicker" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)))
      return;
    const l = this.getAll().entries(), c = new Set(i || []);
    for (const [s, d] of l)
      c.has(s) || d.hide();
  }
};
let Oe = Jt;
Nn = new WeakMap(), Dn = new WeakMap(), xe = new WeakMap(), on = new WeakMap(), Sr = new WeakMap(), Cr = new WeakMap(), Er = new WeakSet(), Ec = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Di = new WeakSet(), zd = function() {
  const n = W(this, Er, Ec).call(this);
  return H(this, xe, document.createElement("div")), y(this, xe).style.position = "absolute", y(this, xe).style.width = `${n}px`, y(this, xe).style.height = `${n}px`, y(this, xe).style.transform = "rotate(45deg)", y(this, xe);
}, Pi = new WeakSet(), Vd = function() {
  const n = Jt.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), Zv(lr(ob, { ...this.options }), o), this.options.arrow && o.append(W(this, Di, zd).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, on, o), o;
}, Oi = new WeakSet(), Yd = function() {
  var l;
  const n = W(this, Er, Ec).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [vb(n), gb()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && y(this, xe) && ((l = r.middleware) == null || l.push(_b({ element: y(this, xe) }))), r;
}, Hi = new WeakSet(), qd = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Wi = new WeakSet(), Gd = function(n) {
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
}, Ii = new WeakSet(), Xd = function() {
  const n = W(this, Oi, Yd).call(this), o = W(this, Ui, Kd).call(this);
  H(this, Cr, Lb(o, this.datepicker, () => {
    Rb(o, this.datepicker, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.datepicker.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, Hi, qd).call(this, _);
      if (l.arrow && y(this, xe)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(y(this, xe).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, xe).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, Wi, Gd).call(this, _)
        });
      }
    });
  }));
}, Ui = new WeakSet(), Kd = function() {
  return y(this, Nn) || H(this, Nn, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: i } = n;
        return {
          width: 0,
          height: 0,
          top: i,
          right: o,
          bottom: i,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), y(this, Nn);
}, Fi = new WeakMap(), L(Oe, "NAME", "datepicker"), L(Oe, "CLASSNAME", "datepicker"), L(Oe, "CLASS_SHOW", "show"), L(Oe, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), L(Oe, "DEFAULT", {
  date: Z().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(e) {
  const t = e.target, n = t.closest(Oe.MENU_SELECTOR), o = t.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? Oe.ensure(n).toggle() : o || Oe.clear({ event: e });
});
const Nb = (e) => {
  const t = document.getElementsByClassName("with-datepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(Oe.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || Oe.clear({ event: e });
};
window.addEventListener("scroll", Nb, !0);
function Zd(e, t, n) {
  if (n) {
    e.setAttribute("class", F(t));
    return;
  }
  Pl(e.getAttribute("class"), t).forEach(([o, i]) => {
    e.classList.toggle(o, i);
  });
}
function lo(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([o, i]) => {
      lo(e, o, i);
    });
  n !== void 0 && (e.style[t] = typeof n == "number" ? `${n}px` : n);
}
function ri(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([o, i]) => {
      ri(e, o, i);
    });
  n !== void 0 && (n === null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
var rn, Ar, $t, Bi, Pn, $s;
const ct = class extends Xe {
  constructor() {
    super(...arguments);
    T(this, Pn);
    T(this, rn, 0);
    T(this, Ar, void 0);
    T(this, $t, void 0);
    T(this, Bi, (n) => {
      const o = n.target;
      (o.closest(ct.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(ct.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", y(this, Bi)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const i = n.clientWidth, r = n.clientHeight;
          (!y(this, $t) || y(this, $t)[0] !== i || y(this, $t)[1] !== r) && (H(this, $t, [i, r]), this.layout());
        });
        o.observe(n), H(this, Ar, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = y(this, Ar)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: i, backdrop: r, className: l, style: c } = this.options;
    return Zd(o, [{
      "modal-trans": i,
      "modal-no-backdrop": !r
    }, ct.CLASS_SHOW, l]), lo(o, {
      zIndex: `${ct.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), W(this, Pn, $s).call(this, () => {
      o.classList.add(ct.CLASS_SHOWN), W(this, Pn, $s).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(ct.CLASS_SHOWN), this.emit("hide", this), W(this, Pn, $s).call(this, () => {
      this.modalElement.classList.remove(ct.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    o = o ?? this.options.size, ri(i, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? ri(i, "data-size", o) : o && (r.width = o), lo(i, r), n = n ?? this.options.position ?? "fit";
    const l = i.clientWidth, c = i.clientHeight;
    H(this, $t, [l, c]), typeof n == "function" && (n = n({ width: l, height: c }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), lo(i, _), lo(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Me = ct;
rn = new WeakMap(), Ar = new WeakMap(), $t = new WeakMap(), Bi = new WeakMap(), Pn = new WeakSet(), $s = function(n, o) {
  y(this, rn) && (clearTimeout(y(this, rn)), H(this, rn, 0)), n && (this.options.animation ? H(this, rn, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, L(Me, "NAME", "Modal"), L(Me, "EVENTS", !0), L(Me, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), L(Me, "CLASS_SHOW", "show"), L(Me, "CLASS_SHOWN", "in"), L(Me, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), L(Me, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Me.all.forEach((e) => {
    const t = e;
    t.isShown && t.options.responsive && t.layout();
  });
});
var Yl, oe, Jd, co, Do, X_, si = {}, Qd = [], Db = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ot(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ep(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Pb(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Yl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return ks(e, l, o, i, null);
}
function ks(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Jd };
  return i == null && oe.vnode != null && oe.vnode(r), r;
}
function Ob() {
  return { current: null };
}
function ql(e) {
  return e.children;
}
function vn(e, t) {
  this.props = e, this.context = t;
}
function _r(e, t) {
  if (t == null)
    return e.__ ? _r(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? _r(e) : null;
}
function tp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return tp(e);
  }
}
function K_(e) {
  (!e.__d && (e.__d = !0) && Do.push(e) && !ii.__r++ || X_ !== oe.debounceRendering) && ((X_ = oe.debounceRendering) || setTimeout)(ii);
}
function ii() {
  for (var e; ii.__r = Do.length; )
    e = Do.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Do = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ot({}, r)).__v = r.__v + 1, la(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? _r(r), r.__h), sp(o, r), r.__e != l && tp(r)));
    });
}
function np(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Qd, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ks(null, a, null, null, a) : Array.isArray(a) ? ks(ql, { children: a }, null, null, null) : a.__b > 0 ? ks(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      la(e, a, f = f || si, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = op(a, _, e) : _ = rp(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = _r(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && lp(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      ip(p[s], p[++s], p[++s]);
}
function op(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? op(o, t, n) : rp(n, o, o, i, o.__e, t));
  return t;
}
function rp(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Hb(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || li(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || li(e, r, t[r], n[r], o);
}
function Z_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Db.test(t) ? n : n + "px";
}
function li(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Z_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Z_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Q_ : J_, r) : e.removeEventListener(t, r ? Q_ : J_, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function J_(e) {
  this.l[e.type + !1](oe.event ? oe.event(e) : e);
}
function Q_(e) {
  this.l[e.type + !0](oe.event ? oe.event(e) : e);
}
function la(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = oe.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new vn(p, g), s.constructor = v, s.render = Ib), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ot({}, s.__s)), Ot(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = oe.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ot(Ot({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === ql && h.key == null ? h.props.children : h, np(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Wb(n.__e, t, n, o, i, r, l, _);
    (h = oe.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), oe.__e(x, t, n);
  }
}
function sp(e, t) {
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
function Wb(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Yl.call(e.childNodes), h = (d = n.props || si).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Hb(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, np(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && _r(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && ep(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && li(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && li(e, "checked", u, d.checked, !1));
  }
  return e;
}
function ip(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    oe.__e(o, n);
  }
}
function lp(e, t, n) {
  var o, i;
  if (oe.unmount && oe.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ip(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        oe.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && lp(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ep(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ib(e, t, n) {
  return this.constructor(e, n);
}
function Ub(e, t, n) {
  var o, i, r;
  oe.__ && oe.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], la(t, e = (!o && n || t).__k = Pb(ql, null, [e]), i || si, si, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Yl.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), sp(r, e);
}
Yl = Qd.slice, oe = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Jd = 0, co = function(e) {
  return e != null && e.constructor === void 0;
}, vn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ot({}, this.state), typeof e == "function" && (e = e(Ot({}, n), this.props)), e && Ot(n, e), e != null && this.__v && (t && this._sb.push(t), K_(this));
}, vn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), K_(this));
}, vn.prototype.render = ql, Do = [], ii.__r = 0;
var Fb = 0;
function be(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Fb, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return oe.vnode && oe.vnode(_), _;
}
let Bb = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
class cp extends vn {
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
    return co(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ be("div", { className: "modal-header", children: /* @__PURE__ */ be("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : co(t) ? t : /* @__PURE__ */ be("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ be(Kn, { ...t }) : null,
      n ? /* @__PURE__ */ be("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ be("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? co(t) ? t : /* @__PURE__ */ be("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return co(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ be("div", { className: "modal-footer", children: n ? /* @__PURE__ */ be(Kn, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ be("div", { className: F("modal-dialog", t), style: n, children: /* @__PURE__ */ be("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
L(cp, "defaultProps", { closeBtn: !0 });
var Tr, On, Mr;
class jb extends vn {
  constructor() {
    super(...arguments);
    T(this, Tr, Ob());
    T(this, On, void 0);
    L(this, "state", {});
    T(this, Mr, () => {
      var i, r;
      const n = (r = (i = y(this, Tr).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = y(this, On);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, c = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, c.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, On, o);
    });
  }
  componentDidMount() {
    y(this, Mr).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = y(this, On)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ be(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: y(this, Tr),
        onLoad: y(this, Mr)
      }
    );
  }
}
Tr = new WeakMap(), On = new WeakMap(), Mr = new WeakMap();
function zb(e, t) {
  const { custom: n, title: o, content: i } = t;
  return {
    body: i,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function Vb(e, t) {
  const { dataType: n, url: o, request: i, custom: r, title: l } = t, _ = await (await fetch(o, i)).text();
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
  return {
    title: l,
    ...r,
    body: n === "html" ? /* @__PURE__ */ be("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: _ } }) : _
  };
}
async function Yb(e, t) {
  const { url: n, custom: o, title: i } = t;
  return {
    title: i,
    ...o,
    body: /* @__PURE__ */ be(jb, { url: n })
  };
}
const qb = {
  custom: zb,
  ajax: Vb,
  iframe: Yb
};
var Lr, Rr, Je, Hn, xs, ji, ap, Nr, Ac;
const Xo = class extends Me {
  constructor() {
    super(...arguments);
    T(this, Hn);
    T(this, ji);
    T(this, Nr);
    T(this, Lr, void 0);
    T(this, Rr, void 0);
    T(this, Je, void 0);
  }
  get id() {
    return y(this, Rr);
  }
  get loading() {
    return this.modalElement.classList.contains(Xo.LOADING_CLASS);
  }
  get modalElement() {
    let n = y(this, Lr);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), ri(n, {
        id: o,
        style: this.options.style
      }), Zd(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, Lr, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, Rr, this.options.id || `modal-${Bb()}`);
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
    y(this, Je) && clearTimeout(y(this, Je));
    const { modalElement: n, options: o } = this, { type: i, loadTimeout: r } = o, l = qb[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.classList.add(Xo.LOADING_CLASS), await W(this, ji, ap).call(this), r && H(this, Je, window.setTimeout(() => {
      H(this, Je, 0), W(this, Nr, Ac).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await W(this, Nr, Ac).call(this, this.options.failedTip) : c && typeof c == "object" && await W(this, Hn, xs).call(this, c), y(this, Je) && (clearTimeout(y(this, Je)), H(this, Je, 0)), n.classList.remove(Xo.LOADING_CLASS), !0;
  }
};
let ao = Xo;
Lr = new WeakMap(), Rr = new WeakMap(), Je = new WeakMap(), Hn = new WeakSet(), xs = function(n) {
  return new Promise((o) => {
    const { afterRender: i, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), i == null || i(l), o();
      },
      ...r
    }, Ub(
      /* @__PURE__ */ be(cp, { ...n }),
      this.modalElement
    );
  });
}, ji = new WeakSet(), ap = function() {
  const { loadingText: n } = this.options;
  return W(this, Hn, xs).call(this, {
    body: /* @__PURE__ */ be("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ be("span", { className: "spinner" }),
      n ? /* @__PURE__ */ be("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, Nr = new WeakSet(), Ac = function(n) {
  if (n)
    return W(this, Hn, xs).call(this, {
      body: /* @__PURE__ */ be("div", { className: "modal-load-failed", children: n })
    });
}, L(ao, "LOADING_CLASS", "loading"), L(ao, "DEFAULT", {
  ...Me.DEFAULT,
  loadTimeout: 1e4
});
var kt, zi, _p, Vi, fp, Yi, up;
class Po extends Xe {
  constructor() {
    super(...arguments);
    T(this, zi);
    T(this, Vi);
    T(this, Yi);
    T(this, kt, void 0);
  }
  get modal() {
    return y(this, kt);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return W(this, Vi, fp).call(this).show();
  }
  hide() {
    var n;
    (n = y(this, kt)) == null || n.hide();
  }
}
kt = new WeakMap(), zi = new WeakSet(), _p = function() {
  const {
    container: n,
    ...o
  } = this.options, i = o, r = this.element.getAttribute("href") || "";
  return i.type || (i.target || r[0] === "#" ? i.type = "static" : i.type = i.type || (i.url ? "iframe" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && r[0] !== "#" && (i.url = r), i;
}, Vi = new WeakSet(), fp = function() {
  const n = W(this, zi, _p).call(this);
  let o = y(this, kt);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Me(W(this, Yi, up).call(this), n), H(this, kt, o)) : (o = new ao(this.container, n), H(this, kt, o)), o;
}, Yi = new WeakSet(), up = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const i = o.getAttribute("href");
      i != null && i.startsWith("#") && (n = i);
    }
  }
  return this.container.querySelector(n || ".modal");
}, L(Po, "NAME", "ModalTrigger"), L(Po, "EVENTS", !0), L(Po, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  const n = e.target.closest(Po.TOGGLE_SELECTOR);
  if (n) {
    const o = Po.ensure(n);
    o && o.show(), console.log("> modalTrigger", o);
  }
});
var mc;
let Gb = (mc = class extends Xn {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = F(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}, L(mc, "NAME", "nav"), mc);
class ef extends ke {
}
L(ef, "NAME", "nav"), L(ef, "Component", Gb);
var Tc;
Tc = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} };
var Xb = 0;
function Bt(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Xb, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Tc.vnode && Tc.vnode(_), _;
}
function fr(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Kb({
  key: e,
  type: t,
  btnType: n,
  page: o,
  format: i,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = fr(r, o);
  return c.text === void 0 && !c.icon && i && (c.text = typeof i == "function" ? i(_) : Re(i, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : Re(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ Bt(nt, { type: n, ...c });
}
const at = 24 * 60 * 60 * 1e3, Ne = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), Jr = (e, t = new Date()) => (e = Ne(e), t = Ne(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), tf = (e, t = new Date()) => Ne(e).getFullYear() === Ne(t).getFullYear(), Zb = (e, t = new Date()) => (e = Ne(e), t = Ne(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), P$ = (e, t = new Date()) => {
  e = Ne(e), t = Ne(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, O$ = (e, t) => Jr(Ne(t), e), H$ = (e, t) => Jr(Ne(t).getTime() - at, e), W$ = (e, t) => Jr(Ne(t).getTime() + at, e), I$ = (e, t) => Jr(Ne(t).getTime() - 2 * at, e), Mc = (e, t = "yyyy-MM-dd hh:mm") => {
  e = Ne(e);
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
      const i = `${n[o]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), t;
}, U$ = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = Mc(e, tf(e) ? o.month : o.full);
  if (Jr(e, t))
    return i;
  const r = Mc(t, tf(e, t) ? Zb(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, F$ = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - at * 7;
    case "oneMonth":
      return t - at * 31;
    case "threeMonth":
      return t - at * 31 * 3;
    case "halfYear":
      return t - at * 183;
    case "oneYear":
      return t - at * 365;
    case "twoYear":
      return t - 2 * (at * 365);
    default:
      return 0;
  }
}, nf = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, nf(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, nf(e, "day", n, o);
    case "week":
      e *= 7;
    case "day":
      e *= 24;
    case "hour":
      e *= 60;
    case "minute":
      e *= 6e4;
      break;
    default:
      e = 0;
  }
  return n ? o + e : o - e;
};
function Jb({
  key: e,
  type: t,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const c = fr(i, n);
  return o = typeof o == "function" ? o(c) : Re(o, c), /* @__PURE__ */ Bt(xu, { ...l, children: [
    r,
    o
  ] });
}
function Qb({
  key: e,
  type: t,
  btnType: n,
  count: o = 12,
  pagerInfo: i,
  onClick: r,
  linkCreator: l,
  ...c
}) {
  if (!i.pageTotal)
    return;
  const _ = { ...c, square: !0 }, h = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ Bt(nt, { type: n, ..._ })), s = (f, a) => {
    const u = [];
    for (let b = f; b <= a; b++) {
      _.text = b, delete _.icon, _.disabled = !1;
      const p = fr(i, b);
      l && (_.url = typeof l == "function" ? l(p) : Re(l, p)), u.push(/* @__PURE__ */ Bt(nt, { type: n, ..._, onClick: r }));
    }
    return u;
  };
  let d = [];
  return d = [...s(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= o ? d = [...d, ...s(2, i.pageTotal)] : i.page < o - 2 ? d = [...d, ...s(2, o - 2), h(), ...s(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - o + 3 ? d = [...d, h(), ...s(i.pageTotal - o + 3, i.pageTotal)] : d = [...d, h(), ...s(i.page - Math.ceil((o - 4) / 2), i.page + Math.floor((o - 4) / 2)), h(), ...s(i.pageTotal, i.pageTotal)]), d;
}
function e0({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  ...r
}) {
  var c;
  i.items = i.items ?? o.map((_) => {
    const h = { ...t, recPerPage: _ };
    return {
      text: `${_}`,
      url: typeof n == "function" ? n(h) : Re(n, h)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(t) : Re(l, t), i.menu = { ...i.menu, className: F((c = i.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ Bt(Hh, { type: "dropdown", dropdown: i, ...r });
}
function t0({
  key: e,
  page: t,
  type: n,
  btnType: o,
  pagerInfo: i,
  size: r,
  onClick: l,
  onChange: c,
  linkCreator: _,
  ...h
}) {
  const s = { ...h };
  let d;
  const f = (b) => {
    var p;
    d = Number((p = b.target) == null ? void 0 : p.value) || 1, d = d > i.pageTotal ? i.pageTotal : d;
  }, a = (b) => {
    if (!(b != null && b.target))
      return;
    d = d <= i.pageTotal ? d : i.pageTotal;
    const p = fr(i, d);
    c && !c({ info: p, event: b }) || (b.target.href = s.url = typeof _ == "function" ? _(p) : Re(_, p));
  }, u = fr(i, t || 0);
  return s.url = typeof _ == "function" ? _(u) : Re(_, u), s.className = F("input-group-addon", s.className), /* @__PURE__ */ Bt("div", { className: F("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ Bt("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ Bt(nt, { type: o, ...s, onClick: a })
  ] });
}
var so;
let n0 = (so = class extends Kn {
  get pagerInfo() {
    const { page: t = 1, recTotal: n = 0, recPerPage: o = 10 } = this.props;
    return { page: t, recTotal: n, recPerPage: o, pageTotal: o ? Math.ceil(n / o) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || t === "goto" || super.isBtnItem(t);
  }
  getItemRenderProps(t, n, o) {
    const i = super.getItemRenderProps(t, n, o), r = n.type || "item";
    return r === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: t.linkCreator }), i;
  }
}, L(so, "NAME", "pager"), L(so, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), L(so, "ItemComponents", {
  ...Kn.ItemComponents,
  link: Kb,
  info: Jb,
  nav: Qb,
  "size-menu": e0,
  goto: t0
}), so);
class of extends ke {
}
L(of, "NAME", "pager"), L(of, "Component", n0);
var hp, de, dp, Oo, rf, pp = {}, mp = [], o0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ht(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function gp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function _c(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++dp };
  return i == null && de.vnode != null && de.vnode(r), r;
}
function r0() {
  return { current: null };
}
function ca(e) {
  return e.children;
}
function jt(e, t) {
  this.props = e, this.context = t;
}
function ur(e, t) {
  if (t == null)
    return e.__ ? ur(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? ur(e) : null;
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
function sf(e) {
  (!e.__d && (e.__d = !0) && Oo.push(e) && !ci.__r++ || rf !== de.debounceRendering) && ((rf = de.debounceRendering) || setTimeout)(ci);
}
function ci() {
  for (var e; ci.__r = Oo.length; )
    e = Oo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Oo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ht({}, r)).__v = r.__v + 1, $p(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? ur(r), r.__h), i0(o, r), r.__e != l && yp(r)));
    });
}
function vp(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || mp, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? _c(null, a, null, null, a) : Array.isArray(a) ? _c(ca, { children: a }, null, null, null) : a.__b > 0 ? _c(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      $p(e, a, f = f || pp, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = bp(a, _, e) : _ = wp(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = ur(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && xp(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      kp(p[s], p[++s], p[++s]);
}
function bp(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? bp(o, t, n) : wp(n, o, o, i, o.__e, t));
  return t;
}
function wp(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function s0(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ai(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ai(e, r, t[r], n[r], o);
}
function lf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || o0.test(t) ? n : n + "px";
}
function ai(e, t, n, o, i) {
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
      if (i)
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
  this.l[e.type + !1](de.event ? de.event(e) : e);
}
function af(e) {
  this.l[e.type + !0](de.event ? de.event(e) : e);
}
function $p(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = de.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new jt(p, g), s.constructor = v, s.render = c0), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ht({}, s.__s)), Ht(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = de.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ht(Ht({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === ca && h.key == null ? h.props.children : h, vp(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = l0(n.__e, t, n, o, i, r, l, _);
    (h = de.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), de.__e(x, t, n);
  }
}
function i0(e, t) {
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
function l0(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && hp.call(e.childNodes), h = (d = n.props || pp).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (s0(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, vp(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && ur(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && gp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && ai(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ai(e, "checked", u, d.checked, !1));
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
  var o, i;
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
    for (i = 0; i < o.length; i++)
      o[i] && xp(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || gp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function c0(e, t, n) {
  return this.constructor(e, n);
}
hp = mp.slice, de = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, dp = 0, jt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ht({}, this.state), typeof e == "function" && (e = e(Ht({}, n), this.props)), e && Ht(n, e), e != null && this.__v && (t && this._sb.push(t), sf(this));
}, jt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), sf(this));
}, jt.prototype.render = ca, Oo = [], ci.__r = 0;
var a0 = 0;
function Q(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --a0, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return de.vnode && de.vnode(_), _;
}
let _0 = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var qi;
class f0 extends jt {
  constructor() {
    super(...arguments);
    T(this, qi, (n) => {
      var l;
      const { onDeselect: o, selections: i } = this.props, r = (l = n.target.closest(".picker-deselect-btn")) == null ? void 0 : l.dataset.idx;
      r && o && (i != null && i.length) && (n.stopPropagation(), o([i[+r]], n));
    });
  }
  render() {
    const {
      className: n,
      style: o,
      disabled: i,
      placeholder: r,
      focused: l,
      selections: c = [],
      onClick: _,
      children: h
    } = this.props;
    let s;
    return c.length ? s = /* @__PURE__ */ Q("div", { className: "picker-multi-selections", children: c.map((d, f) => /* @__PURE__ */ Q("div", { className: "picker-multi-selection", children: [
      d.text ?? d.value,
      /* @__PURE__ */ Q("div", { className: "picker-deselect-btn btn", onClick: y(this, qi), "data-idx": f, children: /* @__PURE__ */ Q("span", { className: "close" }) })
    ] })) }) : s = /* @__PURE__ */ Q("span", { className: "picker-select-placeholder", children: r }), /* @__PURE__ */ Q(
      "div",
      {
        className: F("picker-select picker-select-multi form-control", n, { disabled: i, focused: l }),
        style: o,
        onClick: _,
        children: [
          s,
          h,
          /* @__PURE__ */ Q("span", { class: "caret" })
        ]
      }
    );
  }
}
qi = new WeakMap();
var Gi;
class u0 extends jt {
  constructor() {
    super(...arguments);
    T(this, Gi, (n) => {
      const { onDeselect: o, selections: i } = this.props;
      o && (i != null && i.length) && (n.stopPropagation(), o(i, n));
    });
  }
  render() {
    const {
      className: n,
      style: o,
      disabled: i,
      placeholder: r,
      focused: l,
      selections: c = [],
      onDeselect: _,
      onClick: h,
      children: s
    } = this.props, [d] = c, f = d ? /* @__PURE__ */ Q("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ Q("span", { className: "picker-select-placeholder", children: r }), a = d && _ ? /* @__PURE__ */ Q("button", { type: "button", className: "btn picker-deselect-btn", onClick: y(this, Gi), children: /* @__PURE__ */ Q("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ Q(
      "div",
      {
        className: F("picker-select picker-select-single form-control", n, { disabled: i, focused: l }),
        style: o,
        onClick: h,
        children: [
          f,
          s,
          a,
          /* @__PURE__ */ Q("span", { class: "caret" })
        ]
      }
    );
  }
}
Gi = new WeakMap();
var Xi, Sp, Dr, Ki, Pr, Zi;
class h0 extends jt {
  constructor() {
    super(...arguments);
    T(this, Xi);
    L(this, "state", { keys: "", shown: !1 });
    T(this, Dr, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    T(this, Ki, ({ item: n }) => {
      const o = this.props.items.find((i) => i.value === n.key);
      o && this.props.onSelectItem(o);
    });
    T(this, Pr, (n) => {
      this.setState({ keys: n.target.value });
    });
    T(this, Zi, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", y(this, Dr)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", y(this, Dr));
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
      className: i,
      style: r = {},
      maxHeight: l,
      maxWidth: c,
      width: _,
      menu: h,
      searchHint: s
    } = this.props, { shown: d, keys: f } = this.state, a = f.trim().length;
    return /* @__PURE__ */ Q("div", { className: F("picker-menu", i, { shown: d, "has-search": a }), id: `picker-menu-${n}`, style: { maxHeight: l, maxWidth: c, width: _, ...r }, children: [
      o ? /* @__PURE__ */ Q("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ Q("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: s, value: f, onChange: y(this, Pr), onInput: y(this, Pr) }),
        a ? /* @__PURE__ */ Q("button", { type: "button", className: "btn picker-menu-search-clear", onClick: y(this, Zi), children: /* @__PURE__ */ Q("span", { className: "close" }) }) : /* @__PURE__ */ Q("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ Q(Yc, { className: "picker-menu-list", items: W(this, Xi, Sp).call(this), onClickItem: y(this, Ki), ...h })
    ] });
  }
}
Xi = new WeakSet(), Sp = function() {
  const { selections: n, items: o } = this.props, i = new Set(n), r = this.state.keys.toLowerCase().split(" ").filter((l) => l.length);
  return o.reduce((l, c) => {
    const {
      value: _,
      keys: h,
      text: s,
      ...d
    } = c;
    if (!r.length || r.every((f) => _.toLowerCase().includes(f) || (h == null ? void 0 : h.toLowerCase().includes(f)) || typeof s == "string" && s.toLowerCase().includes(f))) {
      let f = s ?? _;
      typeof f == "string" && r.length && (f = /* @__PURE__ */ Q("span", { dangerouslySetInnerHTML: { __html: r.reduce((a, u) => a.replace(u, `<span class="picker-menu-item-match">${u}</span>`), f) } })), l.push({
        key: _,
        active: i.has(_),
        text: f,
        ...d
      });
    }
    return l;
  }, []);
}, Dr = new WeakMap(), Ki = new WeakMap(), Pr = new WeakMap(), Zi = new WeakMap();
function _f(e) {
  const t = /* @__PURE__ */ new Set();
  return e.reduce((n, o) => (t.has(o) || (t.add(o), n.push(o)), n), []);
}
var gc, Or, Hr, Wr, Wn, Ss, Ir, Lc, Ji, Cp, Qi, Ep, el, tl, nl, ol, rl, Ap;
let d0 = (gc = class extends jt {
  constructor(n) {
    super(n);
    T(this, Wn);
    T(this, Ir);
    T(this, Ji);
    T(this, Qi);
    T(this, rl);
    T(this, Or, 0);
    T(this, Hr, _0());
    T(this, Wr, r0());
    T(this, el, (n, o) => {
      const { valueList: i } = this, r = new Set(n.map((c) => c.value)), l = i.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    T(this, tl, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    T(this, nl, () => {
      this.close();
    });
    T(this, ol, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = y(this, Wr).current) == null || o.hide();
      });
    });
    this.state = {
      value: W(this, Ji, Cp).call(this, n.defaultValue) ?? "",
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
    return W(this, Ir, Lc).call(this, this.state.value);
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
      const i = ++Aa(this, Or)._;
      if (await W(this, Wn, Ss).call(this, { loading: !0, items: [] }), n = await n(), y(this, Or) !== i)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await W(this, Wn, Ss).call(this, o), n;
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
    await W(this, Wn, Ss).call(this, { open: n }), n && this.loadItemList();
  }
  open() {
    return this.toggle(!0);
  }
  close() {
    return this.toggle(!1);
  }
  toggleValue(n, o) {
    const { valueList: i } = this, r = i.indexOf(n);
    o !== !!r && (r > -1 ? i.splice(r, 1) : i.push(n), this.setState({ value: i.join(this.props.valueSplitter ?? ",") }));
  }
  render() {
    const {
      className: n,
      style: o,
      children: i,
      multi: r
    } = this.props, l = r ? f0 : u0;
    return /* @__PURE__ */ Q("div", { className: F("picker", n), style: o, id: `picker-${y(this, Hr)}`, children: [
      /* @__PURE__ */ Q(l, { ...W(this, Qi, Ep).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ Q(h0, { ...W(this, rl, Ap).call(this), ref: y(this, Wr) }) : null
    ] });
  }
}, Or = new WeakMap(), Hr = new WeakMap(), Wr = new WeakMap(), Wn = new WeakSet(), Ss = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, Ir = new WeakSet(), Lc = function(n) {
  return typeof n == "string" ? _f(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? _f(n) : [];
}, Ji = new WeakSet(), Cp = function(n) {
  const o = W(this, Ir, Lc).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, Qi = new WeakSet(), Ep = function() {
  const { placeholder: n, disabled: o } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: y(this, tl),
    onDeselect: y(this, el)
  };
}, el = new WeakMap(), tl = new WeakMap(), nl = new WeakMap(), ol = new WeakMap(), rl = new WeakSet(), Ap = function() {
  const { search: n, menuClass: o, menuWidth: i, menuStyle: r, menuMaxHeight: l, menuMaxWidth: c } = this.props, { items: _ } = this.state;
  return {
    id: y(this, Hr),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: i,
    maxHeight: l,
    maxWidth: c,
    onRequestHide: y(this, nl),
    onSelectItem: y(this, ol)
  };
}, L(gc, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), gc);
class ff extends ke {
}
L(ff, "NAME", "picker"), L(ff, "Component", d0);
var Gl, re, Tp, Ho, uf, _i = {}, Mp = [], p0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Wt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Lp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Rp(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Gl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Cs(e, l, o, i, null);
}
function Cs(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Tp };
  return i == null && re.vnode != null && re.vnode(r), r;
}
function is() {
  return { current: null };
}
function Xl(e) {
  return e.children;
}
function Wo(e, t) {
  this.props = e, this.context = t;
}
function hr(e, t) {
  if (t == null)
    return e.__ ? hr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? hr(e) : null;
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
function hf(e) {
  (!e.__d && (e.__d = !0) && Ho.push(e) && !fi.__r++ || uf !== re.debounceRendering) && ((uf = re.debounceRendering) || setTimeout)(fi);
}
function fi() {
  for (var e; fi.__r = Ho.length; )
    e = Ho.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ho = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Wt({}, r)).__v = r.__v + 1, aa(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? hr(r), r.__h), Hp(o, r), r.__e != l && Np(r)));
    });
}
function Dp(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Mp, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Cs(null, a, null, null, a) : Array.isArray(a) ? Cs(Xl, { children: a }, null, null, null) : a.__b > 0 ? Cs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      aa(e, a, f = f || _i, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Pp(a, _, e) : _ = Op(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = hr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Ip(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Wp(p[s], p[++s], p[++s]);
}
function Pp(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Pp(o, t, n) : Op(n, o, o, i, o.__e, t));
  return t;
}
function Op(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function m0(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ui(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ui(e, r, t[r], n[r], o);
}
function df(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || p0.test(t) ? n : n + "px";
}
function ui(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || df(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || df(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? mf : pf, r) : e.removeEventListener(t, r ? mf : pf, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function pf(e) {
  this.l[e.type + !1](re.event ? re.event(e) : e);
}
function mf(e) {
  this.l[e.type + !0](re.event ? re.event(e) : e);
}
function aa(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = re.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Wo(p, g), s.constructor = v, s.render = y0), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Wt({}, s.__s)), Wt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = re.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Wt(Wt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Xl && h.key == null ? h.props.children : h, Dp(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = g0(n.__e, t, n, o, i, r, l, _);
    (h = re.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), re.__e(x, t, n);
  }
}
function Hp(e, t) {
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
function g0(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && Gl.call(e.childNodes), h = (d = n.props || _i).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (m0(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Dp(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && hr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Lp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && ui(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ui(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Wp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    re.__e(o, n);
  }
}
function Ip(e, t, n) {
  var o, i;
  if (re.unmount && re.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Wp(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        re.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Ip(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Lp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function y0(e, t, n) {
  return this.constructor(e, n);
}
function v0(e, t, n) {
  var o, i, r;
  re.__ && re.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], aa(t, e = (!o && n || t).__k = Rp(Xl, null, [e]), i || _i, _i, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? Gl.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), Hp(r, e);
}
Gl = Mp.slice, re = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Tp = 0, Wo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Wt({}, this.state), typeof e == "function" && (e = e(Wt({}, n), this.props)), e && Wt(n, e), e != null && this.__v && (t && this._sb.push(t), hf(this));
}, Wo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), hf(this));
}, Wo.prototype.render = Xl, Ho = [], fi.__r = 0;
var b0 = 0;
function De(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --b0, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return re.vnode && re.vnode(_), _;
}
var hi = {}, w0 = {
  get exports() {
    return hi;
  },
  set exports(e) {
    hi = e;
  }
};
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Nd, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var S = ["th", "st", "nd", "rd"], $ = N % 100;
      return "[" + N + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(N, S, $) {
      var D = String(N);
      return !D || D.length >= S ? N : "" + Array(S + 1 - D.length).join($) + N;
    }, k = { s: w, z: function(N) {
      var S = -N.utcOffset(), $ = Math.abs(S), D = Math.floor($ / 60), M = $ % 60;
      return (S <= 0 ? "+" : "-") + w(D, 2, "0") + ":" + w(M, 2, "0");
    }, m: function N(S, $) {
      if (S.date() < $.date())
        return -N($, S);
      var D = 12 * ($.year() - S.year()) + ($.month() - S.month()), M = S.clone().add(D, d), O = $ - M < 0, P = S.clone().add(D + (O ? -1 : 1), d);
      return +(-(D + ($ - M) / (O ? M - P : P - M)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, C = "en", A = {};
    A[C] = g;
    var E = function(N) {
      return N instanceof V;
    }, v = function N(S, $, D) {
      var M;
      if (!S)
        return C;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        A[O] && (M = O), $ && (A[O] = $, M = O);
        var P = S.split("-");
        if (!M && P.length > 1)
          return N(P[0]);
      } else {
        var I = S.name;
        A[I] = S, M = I;
      }
      return !D && M && (C = M), M || !D && C;
    }, x = function(N, S) {
      if (E(N))
        return N.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = N, $.args = arguments, new V($);
    }, R = k;
    R.l = v, R.i = E, R.w = function(N, S) {
      return x(N, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var V = function() {
      function N($) {
        this.$L = v($.locale, null, !0), this.parse($);
      }
      var S = N.prototype;
      return S.parse = function($) {
        this.$d = function(D) {
          var M = D.date, O = D.utc;
          if (M === null)
            return new Date(NaN);
          if (R.u(M))
            return new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var P = M.match(p);
            if (P) {
              var I = P[2] - 1 || 0, z = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z);
            }
          }
          return new Date(M);
        }($), this.$x = $.x || {}, this.init();
      }, S.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, S.$utils = function() {
        return R;
      }, S.isValid = function() {
        return this.$d.toString() !== b;
      }, S.isSame = function($, D) {
        var M = x($);
        return this.startOf(D) <= M && M <= this.endOf(D);
      }, S.isAfter = function($, D) {
        return x($) < this.startOf(D);
      }, S.isBefore = function($, D) {
        return this.endOf(D) < x($);
      }, S.$g = function($, D, M) {
        return R.u($) ? this[D] : this.set(M, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, D) {
        var M = this, O = !!R.u(D) || D, P = R.p($), I = function(se, q) {
          var ie = R.w(M.$u ? Date.UTC(M.$y, q, se) : new Date(M.$y, q, se), M);
          return O ? ie : ie.endOf(h);
        }, z = function(se, q) {
          return R.w(M.toDate()[se].apply(M.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)), M);
        }, j = this.$W, X = this.$M, ve = this.$D, U = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, X) : I(0, X + 1);
          case s:
            var K = this.$locale().weekStart || 0, ye = (j < K ? j + 7 : j) - K;
            return I(O ? ve - ye : ve + (6 - ye), X);
          case h:
          case u:
            return z(U + "Hours", 0);
          case _:
            return z(U + "Minutes", 1);
          case c:
            return z(U + "Seconds", 2);
          case l:
            return z(U + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function($) {
        return this.startOf($, !1);
      }, S.$set = function($, D) {
        var M, O = R.p($), P = "set" + (this.$u ? "UTC" : ""), I = (M = {}, M[h] = P + "Date", M[u] = P + "Date", M[d] = P + "Month", M[a] = P + "FullYear", M[_] = P + "Hours", M[c] = P + "Minutes", M[l] = P + "Seconds", M[r] = P + "Milliseconds", M)[O], z = O === h ? this.$D + (D - this.$W) : D;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[I](z), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](z);
        return this.init(), this;
      }, S.set = function($, D) {
        return this.clone().$set($, D);
      }, S.get = function($) {
        return this[R.p($)]();
      }, S.add = function($, D) {
        var M, O = this;
        $ = Number($);
        var P = R.p(D), I = function(X) {
          var ve = x(O);
          return R.w(ve.date(ve.date() + Math.round(X * $)), O);
        };
        if (P === d)
          return this.set(d, this.$M + $);
        if (P === a)
          return this.set(a, this.$y + $);
        if (P === h)
          return I(1);
        if (P === s)
          return I(7);
        var z = (M = {}, M[c] = o, M[_] = i, M[l] = n, M)[P] || 1, j = this.$d.getTime() + $ * z;
        return R.w(j, this);
      }, S.subtract = function($, D) {
        return this.add(-1 * $, D);
      }, S.format = function($) {
        var D = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || b;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), I = this.$H, z = this.$m, j = this.$M, X = M.weekdays, ve = M.months, U = function(q, ie, Ae, Te) {
          return q && (q[ie] || q(D, O)) || Ae[ie].slice(0, Te);
        }, K = function(q) {
          return R.s(I % 12 || 12, q, "0");
        }, ye = M.meridiem || function(q, ie, Ae) {
          var Te = q < 12 ? "AM" : "PM";
          return Ae ? Te.toLowerCase() : Te;
        }, se = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: R.s(j + 1, 2, "0"), MMM: U(M.monthsShort, j, ve, 3), MMMM: U(ve, j), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: U(M.weekdaysMin, this.$W, X, 2), ddd: U(M.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(I), HH: R.s(I, 2, "0"), h: K(1), hh: K(2), a: ye(I, z, !0), A: ye(I, z, !1), m: String(z), mm: R.s(z, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(q, ie) {
          return ie || se[q] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, D, M) {
        var O, P = R.p(D), I = x($), z = (I.utcOffset() - this.utcOffset()) * o, j = this - I, X = R.m(this, I);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - z) / 6048e5, O[h] = (j - z) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, M ? X : R.a(X);
      }, S.daysInMonth = function() {
        return this.endOf(d).$D;
      }, S.$locale = function() {
        return A[this.$L];
      }, S.locale = function($, D) {
        if (!$)
          return this.$L;
        var M = this.clone(), O = v($, D, !0);
        return O && (M.$L = O), M;
      }, S.clone = function() {
        return R.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), B = V.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(N) {
      B[N[1]] = function(S) {
        return this.$g(S, N[0], N[1]);
      };
    }), x.extend = function(N, S) {
      return N.$i || (N(S, V, x), N.$i = !0), x;
    }, x.locale = v, x.isDayjs = E, x.unix = function(N) {
      return x(1e3 * N);
    }, x.en = A[C], x.Ls = A, x.p = {}, x;
  });
})(w0);
const $0 = (e = "00:00:00") => {
  const t = hi(`1989-01-01 ${e}`);
  return {
    hour: t.hour(),
    minute: t.minute(),
    second: t.second()
  };
};
function k0() {
  let e = new Array(24).fill(0), t = new Array(60).fill(0), n = new Array(60).fill(0);
  return e = e.map((o, i) => o + i), t = t.map((o, i) => o + i), n = n.map((o, i) => o + i), { hourList: e, minuteList: t, secondList: n };
}
class x0 extends Wo {
  constructor() {
    super(...arguments);
    L(this, "cellHeight", 24);
    L(this, "ref", is());
    L(this, "hourRef", is());
    L(this, "minuteRef", is());
    L(this, "secondRef", is());
    L(this, "state", {
      selectTime: this.props.value || "00:00:00"
    });
  }
  handleMoveTime(n) {
    var i, r, l;
    const o = "smooth";
    n.hour && this.hourRef.current && ((i = this.hourRef.current) == null || i.scrollTo({ behavior: o, top: n.hour * this.cellHeight })), n.minute && this.minuteRef.current && ((r = this.minuteRef.current) == null || r.scrollTo({ behavior: o, top: n.minute * this.cellHeight })), n.second && this.secondRef.current && ((l = this.secondRef.current) == null || l.scrollTo({ behavior: o, top: n.second * this.cellHeight }));
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
    const i = $0(this.state.selectTime);
    return o.map((r) => {
      const l = i[n] === r, c = { ...i, [n]: r };
      return /* @__PURE__ */ De(
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
    const { showSeconds: n, style: o } = this.props, { hourList: i, minuteList: r, secondList: l } = k0();
    return /* @__PURE__ */ De("div", { className: F("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ De("div", { className: F("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ De("div", { className: "overflow-hidden", children: /* @__PURE__ */ De("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", i) }) }),
        /* @__PURE__ */ De("div", { className: "overflow-hidden", children: /* @__PURE__ */ De("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ De("div", { className: "overflow-hidden", children: /* @__PURE__ */ De("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ De("div", { className: F("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ De("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ De("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function Qr(e) {
  return e.split("-")[1];
}
function _a(e) {
  return e === "y" ? "height" : "width";
}
function Jn(e) {
  return e.split("-")[0];
}
function Kl(e) {
  return ["top", "bottom"].includes(Jn(e)) ? "x" : "y";
}
function gf(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = Kl(t), _ = _a(c), h = o[_] / 2 - i[_] / 2, s = Jn(t), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Qr(t)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const S0 = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: s,
    y: d
  } = gf(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (s = g ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = gf(h, f, _)), b = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function C0(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Up(e) {
  return typeof e != "number" ? C0(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function di(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function E0(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = t, u = Up(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = di(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = di(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const A0 = Math.min, T0 = Math.max;
function M0(e, t, n) {
  return T0(e, A0(t, n));
}
const L0 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: n,
      padding: o = 0
    } = e || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = t;
    if (n == null)
      return {};
    const h = Up(o), s = {
      x: i,
      y: r
    }, d = Kl(l), f = _a(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, v = M0(C, E, A), R = Qr(l) != null && E != v && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: v,
        centerOffset: E - v
      }
    };
  }
}), R0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function pi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => R0[t]);
}
function N0(e, t, n) {
  n === void 0 && (n = !1);
  const o = Qr(e), i = Kl(e), r = _a(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = pi(l)), {
    main: l,
    cross: pi(l)
  };
}
const D0 = {
  start: "end",
  end: "start"
};
function Rc(e) {
  return e.replace(/start|end/g, (t) => D0[t]);
}
function P0(e) {
  const t = pi(e);
  return [Rc(e), t, Rc(t)];
}
function O0(e, t, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : o : t ? o : i;
    case "left":
    case "right":
      return t ? r : l;
    default:
      return [];
  }
}
function H0(e, t, n, o) {
  const i = Qr(e);
  let r = O0(Jn(e), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), t && (r = r.concat(r.map(Rc)))), r;
}
const W0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = t, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = e, p = Jn(o), m = Jn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [pi(l)] : P0(l));
      !d && a !== "none" && w.push(...H0(l, u, a, g));
      const k = [l, ...w], C = await E0(t, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: R,
          cross: V
        } = N0(o, r, g);
        A.push(C[R], C[V]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var v;
        const R = (((v = i.flip) == null ? void 0 : v.index) || 0) + 1, V = k[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: E
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, D) => $ + D, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            N && (B = N);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
async function I0(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Jn(n), c = Qr(n), _ = Kl(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
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
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const U0 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, i = await I0(t, e);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function Fe(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function st(e) {
  return Fe(e).getComputedStyle(e);
}
function Yt(e) {
  return Bp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ls;
function Fp() {
  if (ls)
    return ls;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ls = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ls) : navigator.userAgent;
}
function gt(e) {
  return e instanceof Fe(e).HTMLElement;
}
function qe(e) {
  return e instanceof Fe(e).Element;
}
function Bp(e) {
  return e instanceof Fe(e).Node;
}
function yf(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Fe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Zl(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = st(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i);
}
function F0(e) {
  return ["table", "td", "th"].includes(Yt(e));
}
function fa(e) {
  const t = /firefox/i.test(Fp()), n = st(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function jp() {
  return !/^((?!chrome|android).)*safari/i.test(Fp());
}
function ua(e) {
  return ["html", "body", "#document"].includes(Yt(e));
}
const vf = Math.min, Io = Math.max, mi = Math.round;
function zp(e) {
  const t = st(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, l = mi(n) !== i || mi(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Vp(e) {
  return qe(e) ? e : e.contextElement;
}
const Yp = {
  x: 1,
  y: 1
};
function bn(e) {
  const t = Vp(e);
  if (!gt(t))
    return Yp;
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = zp(t);
  let l = (r ? mi(n.width) : n.width) / o, c = (r ? mi(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function hn(e, t, n, o) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = Vp(e);
  let _ = Yp;
  t && (o ? qe(o) && (_ = bn(o)) : _ = bn(e));
  const h = c ? Fe(c) : window, s = !jp() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Fe(c), p = o && qe(o) ? Fe(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = bn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Fe(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function Kt(e) {
  return ((Bp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Jl(e) {
  return qe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function qp(e) {
  return hn(Kt(e)).left + Jl(e).scrollLeft;
}
function B0(e, t, n) {
  const o = gt(t), i = Kt(t), r = hn(e, !0, n === "fixed", t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Yt(t) !== "body" || Zl(i)) && (l = Jl(t)), gt(t)) {
      const _ = hn(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      i && (c.x = qp(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function dr(e) {
  if (Yt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node
    e.assignedSlot || // DOM Element detected
    e.parentNode || // ShadowRoot detected
    (yf(e) ? e.host : null) || // Fallback
    Kt(e)
  );
  return yf(t) ? t.host : t;
}
function bf(e) {
  return !gt(e) || st(e).position === "fixed" ? null : e.offsetParent;
}
function j0(e) {
  let t = dr(e);
  for (; gt(t) && !ua(t); ) {
    if (fa(t))
      return t;
    t = dr(t);
  }
  return null;
}
function wf(e) {
  const t = Fe(e);
  let n = bf(e);
  for (; n && F0(n) && st(n).position === "static"; )
    n = bf(n);
  return n && (Yt(n) === "html" || Yt(n) === "body" && st(n).position === "static" && !fa(n)) ? t : n || j0(e) || t;
}
function z0(e) {
  return zp(e);
}
function V0(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const i = gt(n), r = Kt(n);
  if (n === r)
    return t;
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
  if ((i || !i && o !== "fixed") && ((Yt(n) !== "body" || Zl(r)) && (l = Jl(n)), gt(n))) {
    const h = hn(n);
    c = bn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - l.scrollLeft * c.x + _.x,
    y: t.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Y0(e, t) {
  const n = Fe(e), o = Kt(e), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = jp();
    (h || !h && t === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function q0(e) {
  var t;
  const n = Kt(e), o = Jl(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = Io(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Io(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + qp(e);
  const _ = -o.scrollTop;
  return st(i || n).direction === "rtl" && (c += Io(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Gp(e) {
  const t = dr(e);
  return ua(t) ? e.ownerDocument.body : gt(t) && Zl(t) ? t : Gp(t);
}
function Uo(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = Gp(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Fe(o);
  return i ? t.concat(r, r.visualViewport || [], Zl(o) ? o : []) : t.concat(o, Uo(o));
}
function G0(e, t) {
  const n = hn(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, r = gt(e) ? bn(e) : {
    x: 1,
    y: 1
  }, l = e.clientWidth * r.x, c = e.clientHeight * r.y, _ = i * r.x, h = o * r.y;
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
function $f(e, t, n) {
  return t === "viewport" ? di(Y0(e, n)) : qe(t) ? G0(t, n) : di(q0(Kt(e)));
}
function X0(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Uo(e).filter((c) => qe(c) && Yt(c) !== "body"), i = null;
  const r = st(e).position === "fixed";
  let l = r ? dr(e) : e;
  for (; qe(l) && !ua(l); ) {
    const c = st(l), _ = fa(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = dr(l);
  }
  return t.set(e, o), o;
}
function K0(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? X0(t, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = $f(t, s, i);
    return h.top = Io(d.top, h.top), h.right = vf(d.right, h.right), h.bottom = vf(d.bottom, h.bottom), h.left = Io(d.left, h.left), h;
  }, $f(t, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Z0 = {
  getClippingRect: K0,
  convertOffsetParentRelativeRectToViewportRelativeRect: V0,
  isElement: qe,
  getDimensions: z0,
  getOffsetParent: wf,
  getDocumentElement: Kt,
  getScale: bn,
  async getElementRects(e) {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const i = this.getOffsetParent || wf, r = this.getDimensions;
    return {
      reference: B0(t, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => st(e).direction === "rtl"
};
function J0(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...qe(e) ? Uo(e) : e.contextElement ? Uo(e.contextElement) : [], ...Uo(t)] : [];
  h.forEach((u) => {
    _ && u.addEventListener("scroll", n, {
      passive: !0
    }), r && u.addEventListener("resize", n);
  });
  let s = null;
  if (l) {
    let u = !0;
    s = new ResizeObserver(() => {
      u || n(), u = !1;
    }), qe(e) && !c && s.observe(e), !qe(e) && e.contextElement && !c && s.observe(e.contextElement), s.observe(t);
  }
  let d, f = c ? hn(e) : null;
  c && a();
  function a() {
    const u = hn(e);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const Q0 = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Z0,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return S0(e, t, {
    ...i,
    platform: r
  });
};
var In, Un, sn, Ur, Se, Fr, Br, Nc, sl, Xp, il, Kp, ll, Zp, cl, Jp, al, Qp, _l, em, fl, tm, ul;
const Qt = class extends Xe {
  constructor() {
    super(...arguments);
    T(this, Br);
    T(this, sl);
    T(this, il);
    T(this, ll);
    T(this, cl);
    T(this, al);
    T(this, _l);
    T(this, fl);
    T(this, In, void 0);
    T(this, Un, 0);
    T(this, sn, void 0);
    T(this, Ur, void 0);
    T(this, Se, void 0);
    T(this, Fr, void 0);
    L(this, "hideLater", () => {
      y(this, ul).call(this), H(this, Un, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, ul, () => {
      clearTimeout(y(this, Un)), H(this, Un, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, sn)) == null ? void 0 : n.classList.contains(Qt.CLASS_SHOW);
  }
  get timepicker() {
    return y(this, sn) || W(this, il, Kp).call(this);
  }
  get trigger() {
    return y(this, Ur) || this.element;
  }
  get elementShowClass() {
    return `with-${Qt.NAME}-show`;
  }
  show(n) {
    return H(this, Ur, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(Qt.CLASS_SHOW), W(this, _l, em).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = y(this, Fr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, sn)) == null || o.classList.remove(Qt.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  static show(n) {
    var l;
    const { event: o, ...i } = n, r = this.ensure(document.body);
    return Object.keys(i).length && r.setOptions(i), r.show(o), (l = o == null ? void 0 : o.stopPropagation) == null || l.call(o), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-timepicker" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)))
      return;
    const l = this.getAll().entries(), c = new Set(i || []);
    for (const [s, d] of l)
      c.has(s) || d.hide();
  }
};
let He = Qt;
In = new WeakMap(), Un = new WeakMap(), sn = new WeakMap(), Ur = new WeakMap(), Se = new WeakMap(), Fr = new WeakMap(), Br = new WeakSet(), Nc = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, sl = new WeakSet(), Xp = function() {
  const n = W(this, Br, Nc).call(this);
  return H(this, Se, document.createElement("div")), y(this, Se).style.position = "absolute", y(this, Se).style.width = `${n}px`, y(this, Se).style.height = `${n}px`, y(this, Se).style.transform = "rotate(45deg)", y(this, Se);
}, il = new WeakSet(), Kp = function() {
  const n = Qt.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), v0(Rp(x0, { ...this.options }), o), this.options.arrow && o.append(W(this, sl, Xp).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, sn, o), o;
}, ll = new WeakSet(), Zp = function() {
  var l;
  const n = W(this, Br, Nc).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [U0(n), W0()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && y(this, Se) && ((l = r.middleware) == null || l.push(L0({ element: y(this, Se) }))), r;
}, cl = new WeakSet(), Jp = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, al = new WeakSet(), Qp = function(n) {
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
}, _l = new WeakSet(), em = function() {
  const n = W(this, ll, Zp).call(this), o = W(this, fl, tm).call(this);
  H(this, Fr, J0(o, this.timepicker, () => {
    Q0(o, this.timepicker, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.timepicker.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, cl, Jp).call(this, _);
      if (l.arrow && y(this, Se)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(y(this, Se).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Se).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, al, Qp).call(this, _)
        });
      }
    });
  }));
}, fl = new WeakSet(), tm = function() {
  return y(this, In) || H(this, In, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: i } = n;
        return {
          width: 0,
          height: 0,
          top: i,
          right: o,
          bottom: i,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), y(this, In);
}, ul = new WeakMap(), L(He, "NAME", "timepicker"), L(He, "CLASSNAME", "timepicker"), L(He, "CLASS_SHOW", "show"), L(He, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), L(He, "DEFAULT", {
  value: hi().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(He.MENU_SELECTOR);
  n ? He.ensure(n).toggle() : He.clear({ event: e });
});
const ew = (e) => {
  const t = document.getElementsByClassName("with-timepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(He.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || He.clear({ event: e });
};
window.addEventListener("scroll", ew, !0);
class kf extends ke {
}
L(kf, "NAME", "toolbar"), L(kf, "Component", Kn);
function es(e) {
  return e.split("-")[1];
}
function ha(e) {
  return e === "y" ? "height" : "width";
}
function Qn(e) {
  return e.split("-")[0];
}
function Ql(e) {
  return ["top", "bottom"].includes(Qn(e)) ? "x" : "y";
}
function xf(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = Ql(t), _ = ha(c), h = o[_] / 2 - i[_] / 2, s = Qn(t), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (es(t)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const tw = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: s,
    y: d
  } = xf(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (s = g ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = xf(h, f, _)), b = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function nw(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function nm(e) {
  return typeof e != "number" ? nw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function gi(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function ow(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = t, u = nm(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = gi(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = gi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const rw = Math.min, sw = Math.max;
function iw(e, t, n) {
  return sw(e, rw(t, n));
}
const lw = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: n,
      padding: o = 0
    } = e || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = t;
    if (n == null)
      return {};
    const h = nm(o), s = {
      x: i,
      y: r
    }, d = Ql(l), f = ha(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, v = iw(C, E, A), R = es(l) != null && E != v && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: v,
        centerOffset: E - v
      }
    };
  }
}), cw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => cw[t]);
}
function aw(e, t, n) {
  n === void 0 && (n = !1);
  const o = es(e), i = Ql(e), r = ha(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = yi(l)), {
    main: l,
    cross: yi(l)
  };
}
const _w = {
  start: "end",
  end: "start"
};
function Dc(e) {
  return e.replace(/start|end/g, (t) => _w[t]);
}
function fw(e) {
  const t = yi(e);
  return [Dc(e), t, Dc(t)];
}
function uw(e, t, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : o : t ? o : i;
    case "left":
    case "right":
      return t ? r : l;
    default:
      return [];
  }
}
function hw(e, t, n, o) {
  const i = es(e);
  let r = uw(Qn(e), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), t && (r = r.concat(r.map(Dc)))), r;
}
const dw = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = t, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = e, p = Qn(o), m = Qn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [yi(l)] : fw(l));
      !d && a !== "none" && w.push(...hw(l, u, a, g));
      const k = [l, ...w], C = await ow(t, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: R,
          cross: V
        } = aw(o, r, g);
        A.push(C[R], C[V]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var v;
        const R = (((v = i.flip) == null ? void 0 : v.index) || 0) + 1, V = k[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: E
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, D) => $ + D, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            N && (B = N);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
async function pw(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Qn(n), c = es(n), _ = Ql(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
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
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const mw = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, i = await pw(t, e);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function Be(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function it(e) {
  return Be(e).getComputedStyle(e);
}
function qt(e) {
  return rm(e) ? (e.nodeName || "").toLowerCase() : "";
}
let cs;
function om() {
  if (cs)
    return cs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (cs = e.brands.map((t) => t.brand + "/" + t.version).join(" "), cs) : navigator.userAgent;
}
function yt(e) {
  return e instanceof Be(e).HTMLElement;
}
function Ge(e) {
  return e instanceof Be(e).Element;
}
function rm(e) {
  return e instanceof Be(e).Node;
}
function Sf(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Be(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ec(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = it(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i);
}
function gw(e) {
  return ["table", "td", "th"].includes(qt(e));
}
function da(e) {
  const t = /firefox/i.test(om()), n = it(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function sm() {
  return !/^((?!chrome|android).)*safari/i.test(om());
}
function pa(e) {
  return ["html", "body", "#document"].includes(qt(e));
}
const Cf = Math.min, Fo = Math.max, vi = Math.round;
function im(e) {
  const t = it(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, l = vi(n) !== i || vi(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function lm(e) {
  return Ge(e) ? e : e.contextElement;
}
const cm = {
  x: 1,
  y: 1
};
function wn(e) {
  const t = lm(e);
  if (!yt(t))
    return cm;
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = im(t);
  let l = (r ? vi(n.width) : n.width) / o, c = (r ? vi(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function dn(e, t, n, o) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = lm(e);
  let _ = cm;
  t && (o ? Ge(o) && (_ = wn(o)) : _ = wn(e));
  const h = c ? Be(c) : window, s = !sm() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Be(c), p = o && Ge(o) ? Be(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = wn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Be(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function Zt(e) {
  return ((rm(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function tc(e) {
  return Ge(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function am(e) {
  return dn(Zt(e)).left + tc(e).scrollLeft;
}
function yw(e, t, n) {
  const o = yt(t), i = Zt(t), r = dn(e, !0, n === "fixed", t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((qt(t) !== "body" || ec(i)) && (l = tc(t)), yt(t)) {
      const _ = dn(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      i && (c.x = am(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function pr(e) {
  if (qt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node
    e.assignedSlot || // DOM Element detected
    e.parentNode || // ShadowRoot detected
    (Sf(e) ? e.host : null) || // Fallback
    Zt(e)
  );
  return Sf(t) ? t.host : t;
}
function Ef(e) {
  return !yt(e) || it(e).position === "fixed" ? null : e.offsetParent;
}
function vw(e) {
  let t = pr(e);
  for (; yt(t) && !pa(t); ) {
    if (da(t))
      return t;
    t = pr(t);
  }
  return null;
}
function Af(e) {
  const t = Be(e);
  let n = Ef(e);
  for (; n && gw(n) && it(n).position === "static"; )
    n = Ef(n);
  return n && (qt(n) === "html" || qt(n) === "body" && it(n).position === "static" && !da(n)) ? t : n || vw(e) || t;
}
function bw(e) {
  return im(e);
}
function ww(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const i = yt(n), r = Zt(n);
  if (n === r)
    return t;
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
  if ((i || !i && o !== "fixed") && ((qt(n) !== "body" || ec(r)) && (l = tc(n)), yt(n))) {
    const h = dn(n);
    c = wn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - l.scrollLeft * c.x + _.x,
    y: t.y * c.y - l.scrollTop * c.y + _.y
  };
}
function $w(e, t) {
  const n = Be(e), o = Zt(e), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = sm();
    (h || !h && t === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function kw(e) {
  var t;
  const n = Zt(e), o = tc(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = Fo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Fo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + am(e);
  const _ = -o.scrollTop;
  return it(i || n).direction === "rtl" && (c += Fo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function _m(e) {
  const t = pr(e);
  return pa(t) ? e.ownerDocument.body : yt(t) && ec(t) ? t : _m(t);
}
function Bo(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = _m(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Be(o);
  return i ? t.concat(r, r.visualViewport || [], ec(o) ? o : []) : t.concat(o, Bo(o));
}
function xw(e, t) {
  const n = dn(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, r = yt(e) ? wn(e) : {
    x: 1,
    y: 1
  }, l = e.clientWidth * r.x, c = e.clientHeight * r.y, _ = i * r.x, h = o * r.y;
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
function Tf(e, t, n) {
  return t === "viewport" ? gi($w(e, n)) : Ge(t) ? xw(t, n) : gi(kw(Zt(e)));
}
function Sw(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Bo(e).filter((c) => Ge(c) && qt(c) !== "body"), i = null;
  const r = it(e).position === "fixed";
  let l = r ? pr(e) : e;
  for (; Ge(l) && !pa(l); ) {
    const c = it(l), _ = da(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = pr(l);
  }
  return t.set(e, o), o;
}
function Cw(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? Sw(t, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = Tf(t, s, i);
    return h.top = Fo(d.top, h.top), h.right = Cf(d.right, h.right), h.bottom = Cf(d.bottom, h.bottom), h.left = Fo(d.left, h.left), h;
  }, Tf(t, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Ew = {
  getClippingRect: Cw,
  convertOffsetParentRelativeRectToViewportRelativeRect: ww,
  isElement: Ge,
  getDimensions: bw,
  getOffsetParent: Af,
  getDocumentElement: Zt,
  getScale: wn,
  async getElementRects(e) {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const i = this.getOffsetParent || Af, r = this.getDimensions;
    return {
      reference: yw(t, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => it(e).direction === "rtl"
};
function Aw(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Ge(e) ? Bo(e) : e.contextElement ? Bo(e.contextElement) : [], ...Bo(t)] : [];
  h.forEach((u) => {
    _ && u.addEventListener("scroll", n, {
      passive: !0
    }), r && u.addEventListener("resize", n);
  });
  let s = null;
  if (l) {
    let u = !0;
    s = new ResizeObserver(() => {
      u || n(), u = !1;
    }), Ge(e) && !c && s.observe(e), !Ge(e) && e.contextElement && !c && s.observe(e.contextElement), s.observe(t);
  }
  let d, f = c ? dn(e) : null;
  c && a();
  function a() {
    const u = dn(e);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const Tw = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Ew,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return tw(e, t, {
    ...i,
    platform: r
  });
};
var Fn, Bn, jn, ln, Ce, hl, jr, zr, Pc, dl, fm, pl, um, ml, hm, gl, dm, yl, pm, vl, mm, bl, gm, zn, wl, ym;
const en = class extends Xe {
  constructor() {
    super(...arguments);
    T(this, zr);
    T(this, dl);
    T(this, pl);
    T(this, ml);
    T(this, gl);
    T(this, yl);
    T(this, vl);
    T(this, bl);
    T(this, wl);
    T(this, Fn, !1);
    T(this, Bn, void 0);
    T(this, jn, 0);
    T(this, ln, void 0);
    T(this, Ce, void 0);
    T(this, hl, void 0);
    T(this, jr, void 0);
    L(this, "hideLater", () => {
      y(this, zn).call(this), H(this, jn, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, zn, () => {
      clearTimeout(y(this, jn)), H(this, jn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, ln)) == null ? void 0 : n.classList.contains(en.CLASS_SHOW);
  }
  get tooltip() {
    return y(this, ln) || W(this, pl, um).call(this);
  }
  get trigger() {
    return y(this, hl) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${en.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !y(this, Fn) && this.isHover && W(this, wl, ym).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(en.CLASS_SHOW), W(this, vl, mm).call(this), !0;
  }
  hide() {
    var n, o;
    return (n = y(this, jr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, ln)) == null || o.classList.remove(en.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    y(this, Fn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", y(this, zn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, i = this.getAll().entries(), r = new Set(o || []);
    for (const [l, c] of i)
      r.has(l) || c.hide();
  }
};
let We = en;
Fn = new WeakMap(), Bn = new WeakMap(), jn = new WeakMap(), ln = new WeakMap(), Ce = new WeakMap(), hl = new WeakMap(), jr = new WeakMap(), zr = new WeakSet(), Pc = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, dl = new WeakSet(), fm = function() {
  const n = W(this, zr, Pc).call(this);
  return H(this, Ce, document.createElement("div")), y(this, Ce).style.position = this.options.strategy, y(this, Ce).style.width = `${n}px`, y(this, Ce).style.height = `${n}px`, y(this, Ce).style.transform = "rotate(45deg)", y(this, Ce);
}, pl = new WeakSet(), um = function() {
  var i;
  const n = en.TOOLTIP_CLASS;
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
      l != null && l.classList.contains(n) ? o = l : o = (i = this.element.parentNode) == null ? void 0 : i.querySelector(`.${n}`);
    }
  }
  if (this.options.arrow && (o == null || o.append(W(this, dl, fm).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, ln, o), o;
}, ml = new WeakSet(), hm = function() {
  var l;
  const n = W(this, zr, Pc).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [mw(n), dw()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && y(this, Ce) && ((l = r.middleware) == null || l.push(lw({ element: y(this, Ce) }))), r;
}, gl = new WeakSet(), dm = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, yl = new WeakSet(), pm = function(n) {
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
}, vl = new WeakSet(), mm = function() {
  const n = W(this, ml, hm).call(this), o = W(this, bl, gm).call(this);
  H(this, jr, Aw(o, this.tooltip, () => {
    Tw(o, this.tooltip, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, gl, dm).call(this, _);
      if (l.arrow && y(this, Ce)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(y(this, Ce).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Ce).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, yl, pm).call(this, _)
        });
      }
    });
  }));
}, bl = new WeakSet(), gm = function() {
  return y(this, Bn) || H(this, Bn, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: i } = n;
        return {
          width: 0,
          height: 0,
          top: i,
          right: o,
          bottom: i,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), y(this, Bn);
}, zn = new WeakMap(), wl = new WeakSet(), ym = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", y(this, zn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Fn, !0);
}, L(We, "NAME", "tooltip"), L(We, "TOOLTIP_CLASS", "tooltip"), L(We, "CLASS_SHOW", "show"), L(We, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), L(We, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(We.MENU_SELECTOR);
  if (n) {
    const o = We.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    We.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(We.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = We.ensure(n);
  o.isHover && o.show();
});
var vm, pe, bm, jo, Mf, wm = {}, $m = [], Mw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function It(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function km(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function fc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++bm };
  return i == null && pe.vnode != null && pe.vnode(r), r;
}
function ma(e) {
  return e.children;
}
function zo(e, t) {
  this.props = e, this.context = t;
}
function mr(e, t) {
  if (t == null)
    return e.__ ? mr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? mr(e) : null;
}
function xm(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return xm(e);
  }
}
function Lf(e) {
  (!e.__d && (e.__d = !0) && jo.push(e) && !bi.__r++ || Mf !== pe.debounceRendering) && ((Mf = pe.debounceRendering) || setTimeout)(bi);
}
function bi() {
  for (var e; bi.__r = jo.length; )
    e = jo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), jo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = It({}, r)).__v = r.__v + 1, Am(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? mr(r), r.__h), Rw(o, r), r.__e != l && xm(r)));
    });
}
function Sm(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || $m, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? fc(null, a, null, null, a) : Array.isArray(a) ? fc(ma, { children: a }, null, null, null) : a.__b > 0 ? fc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Am(e, a, f = f || wm, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Cm(a, _, e) : _ = Em(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = mr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Mm(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Tm(p[s], p[++s], p[++s]);
}
function Cm(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Cm(o, t, n) : Em(n, o, o, i, o.__e, t));
  return t;
}
function Em(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Lw(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || wi(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || wi(e, r, t[r], n[r], o);
}
function Rf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Mw.test(t) ? n : n + "px";
}
function wi(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Rf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Rf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Df : Nf, r) : e.removeEventListener(t, r ? Df : Nf, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function Nf(e) {
  this.l[e.type + !1](pe.event ? pe.event(e) : e);
}
function Df(e) {
  this.l[e.type + !0](pe.event ? pe.event(e) : e);
}
function Am(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = pe.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new zo(p, g), s.constructor = v, s.render = Dw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = It({}, s.__s)), It(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = pe.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = It(It({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === ma && h.key == null ? h.props.children : h, Sm(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Nw(n.__e, t, n, o, i, r, l, _);
    (h = pe.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), pe.__e(x, t, n);
  }
}
function Rw(e, t) {
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
function Nw(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && vm.call(e.childNodes), h = (d = n.props || wm).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Lw(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Sm(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && mr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && km(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && wi(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && wi(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Tm(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    pe.__e(o, n);
  }
}
function Mm(e, t, n) {
  var o, i;
  if (pe.unmount && pe.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Tm(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        pe.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Mm(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || km(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Dw(e, t, n) {
  return this.constructor(e, n);
}
vm = $m.slice, pe = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, bm = 0, zo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = It({}, this.state), typeof e == "function" && (e = e(It({}, n), this.props)), e && It(n, e), e != null && this.__v && (t && this._sb.push(t), Lf(this));
}, zo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Lf(this));
}, zo.prototype.render = ma, jo = [], bi.__r = 0;
var Pw = 0;
function $i(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Pw, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pe.vnode && pe.vnode(_), _;
}
function Ow({
  type: e,
  key: t,
  style: n,
  bounding: o,
  offsetX: i = 0,
  offsetY: r = 0,
  component: l,
  data: c,
  hidden: _,
  props: h,
  children: s,
  onRender: d,
  ...f
}) {
  if (_)
    return null;
  let a;
  d ? a = d(e, c) : l ? a = /* @__PURE__ */ $i(l, { ...h }) : a = c;
  const { left: u, top: b, width: p, height: m } = o;
  return /* @__PURE__ */ $i("div", { style: { width: p, height: m, left: u + i, top: b + r, ...n }, ...f, children: [
    a,
    s
  ] });
}
function Hw(e, t, n = 0, o = 0) {
  const i = e.left + n, r = e.top + o;
  return !(i > t.left + t.width || r > t.top + t.height || i + e.width < t.left || r + e.height < t.top);
}
let Ww = class extends zo {
  render() {
    const { width: t, height: n, cells: o, left: i, top: r, visibleBounding: l, onRenderCell: c, style: _, children: h, offsetX: s = 0, offsetY: d = 0, ...f } = this.props, a = l ? o.filter((u) => Hw(u.bounding, l, s, d)) : o;
    return /* @__PURE__ */ $i("div", { style: { width: t, height: n, left: i, top: r, ..._ }, ...f, children: [
      a.map((u) => /* @__PURE__ */ $i(Ow, { offsetX: s, offsetY: d, ...u })),
      h
    ] });
  }
};
class Pf extends ke {
}
L(Pf, "NAME", "virtualgrid"), L(Pf, "Component", Ww);
var $e;
class Iw {
  constructor(t, n) {
    T(this, $e, void 0);
    L(this, "submitBtn");
    L(this, "resetBtn");
    L(this, "beforeSubmit");
    L(this, "success");
    L(this, "error");
    L(this, "finish");
    L(this, "ajaxUrl");
    L(this, "formData");
    L(this, "invalid");
    // 校验状态
    L(this, "timer");
    L(this, "novalidate");
    // 不校验
    L(this, "validity");
    // disabled: boolean; //禁用
    L(this, "rules");
    var o;
    if (this.ajaxUrl = "", this.formData = {}, this.timer = null, this.invalid = !1, H(this, $e, document.querySelector(`#${t}`)), y(this, $e)) {
      this.getAjaxFormData(y(this, $e), n), this.ajaxUrl = (y(this, $e).action ? y(this, $e).action : n.url) || "", this.submitBtn = document.querySelector(`#${t} [data-type=submit]`), this.resetBtn = document.querySelector(`#${t} [data-type=reset]`), this.submitBtn && this.submitBtn.addEventListener("click", () => {
        this.submitForm();
      }), this.resetBtn && this.resetBtn.addEventListener("click", () => this.reset()), y(this, $e).addEventListener("keydown", (r) => {
        if (r.target !== this.resetBtn)
          switch (r.keyCode) {
            case 13:
              this.submitForm();
              break;
          }
      }), this.novalidate = ((o = y(this, $e).dataset) == null ? void 0 : o.novalidate) === "true";
      const i = [...y(this, $e).querySelectorAll(".form-control:not(.disabled)")];
      this.validity = i.every((r) => r == null ? void 0 : r.validity), this.novalidate || i.forEach((r) => {
        r.tagName === "input" ? r.addEventListener("blur", () => {
          this.invalid = !this.validity;
        }) : r.addEventListener("change", () => {
          this.invalid = !this.validity;
        });
      });
    }
  }
  reset() {
    this.invalid = !1, y(this, $e).querySelectorAll(".form-control").forEach((n) => {
      this.removeError(n), n.value = null;
    });
  }
  addErrorTip(t, n) {
    const o = t.querySelectorAll(".form-tip");
    o != null && o.length && o.forEach((r) => {
      r.remove();
    });
    const i = document.createElement("div");
    i.innerText = n, i.classList.add("form-tip"), t.classList.add("has-error"), t.append(i);
  }
  removeError(t) {
    var n;
    t.parentElement.classList.remove("has-error"), (n = t.nextElementSibling) != null && n.classList.contains("form-tip") && t.nextElementSibling.remove();
  }
  checkRequired(t, n) {
    if (t.previousSibling.previousElementSibling.classList.contains("required"))
      if (/\S/.test(n))
        this.removeError(t);
      else
        return this.addErrorTip(t.parentElement, `${t.tagName === "INPUT" ? "请输入" : "请选择"}${t.previousElementSibling.innerText}`), !1;
  }
  beforeCheck(t, n, o) {
    var r;
    let i = !0;
    return o.required && !/\S/.test(n) ? (this.addErrorTip(t.parentElement, o.msg), i = !1, !1) : (this.removeError(t), (r = o.patterns) != null && r.length && o.patterns.forEach((c) => {
      if (c.reg.test(n))
        this.removeError(t);
      else
        return this.addErrorTip(t.parentElement, c.msg), i = !1, !1;
    }), this.invalid = !i, !0);
  }
  checkValidity() {
    if (this.novalidate || !this.rules || !Object.keys(this.rules).length)
      return !0;
    [...y(this, $e).querySelectorAll(".form-control:not(.disabled)")].reverse().forEach((o) => {
      for (const i in this.rules)
        i === o.id ? this.beforeCheck(o, this.formData[i], this.rules[i]) : this.checkRequired(o, o.value);
    });
  }
  getAjaxFormData(t, n) {
    typeof n == "function" && (n = { complete: n });
    const o = {};
    t.querySelectorAll(".form-control:not(.disabled)").forEach((r) => {
      o[r.id] = r.value || "";
    }), n.beforeSubmit && (this.beforeSubmit = n.beforeSubmit, delete n.beforeSubmit), n.success && (this.success = n.success, delete n.success), n.error && (this.error = n.error, delete n.error), n.finish && (this.finish = n.finish, delete n.finish), n.rules && (this.rules = { ...n.rules }, delete n.rules), this.formData = {
      timeout: window != null && window.config ? window == null ? void 0 : window.config.timeout : 0,
      dataType: "json",
      ...o,
      ...n
    };
  }
  changeFormDataToString(t) {
    const n = [], o = t.constructor == Array;
    let i;
    if (o)
      for (let r = 0; r < t.length; r++) {
        i = t[r];
        const l = i.name;
        i = i.value, n[n.length] = encodeURIComponent(l) + "=" + encodeURIComponent(i);
      }
    else
      for (const r in t)
        if (i = t[r], i && i.constructor == Array)
          for (const l in i)
            n[n.length] = encodeURIComponent(r) + "=" + encodeURIComponent(i[l]);
        else
          n[n.length] = encodeURIComponent(r) + "=" + encodeURIComponent(i);
    return n.join("&").replace(" ", "+");
  }
  ajaxRequest(t) {
    const { params: n, data: o, headers: i, timeout: r } = t;
    let l = t.url;
    const c = t.method ? t.method.toUpperCase() : "POST", _ = n ? this.changeFormDataToString(n) : null;
    let h = o || null;
    _ && (c == "GET" || h ? l += l.indexOf("?") >= 0 ? "&" : "?" + _ : h = _);
    const s = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    s.onreadystatechange = () => {
      let d = s.response || {};
      if (s.readyState === 4 && s.status === 200) {
        if (typeof d == "string" && (d = JSON.parse(d)), d === null || typeof d != "object")
          return d ? alert(d) : this.showFormMessage("No response.", "danger", null);
        d.result === "success" ? this.success && this.success(d) : (this._error(d), this.error && this.error(d));
      } else
        this._error(d), this.error && this.error(d);
      this.finish && this.finish(d);
    }, s.open(c, l, !0);
    for (const d in i) {
      const f = i[d];
      typeof f == "string" && s.setRequestHeader(d, f);
    }
    r && (this.timer = setInterval(() => {
      s.abort();
    })), s.send(h);
  }
  ajaxSubmit(t, n) {
    const o = {
      url: this.ajaxUrl,
      method: t.method,
      params: this.formData,
      data: null,
      headers: n.headers || { "Content-Type": "application/x-www-form-urlencoded" },
      timeout: n.timeout
    };
    this.ajaxRequest(o);
  }
  submitForm() {
    this.checkValidity() && this.ajaxSubmit(y(this, $e), this.formData);
  }
  showFormMessage(t, n, o) {
    console.log(n, o), alert(t);
  }
  _error(t) {
    const n = t.message || t.reason || t.error;
    if (typeof n == "string")
      this.showFormMessage(n, "danger", null);
    else if (typeof n == "object") {
      const o = [];
      for (const i in n) {
        const r = Array.isArray(n[i]) ? n[i].join("") : n[i], l = y(this, $e).querySelectorAll(`#${i}`);
        if (!(l != null && l.length)) {
          o.push(r);
          return;
        }
        l.forEach((c) => {
          this.addErrorTip(c.parentElement, n[i]);
        });
      }
      o.length && this.showFormMessage(o.join(""), "danger", null);
    }
  }
}
$e = new WeakMap(), L(Iw, "NAME", "zui.ajaxForm");
var ga, me, Lm, Rm, Vo, Of, Nm = {}, Dm = [], Uw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ut(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Pm(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ya(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ga.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Es(e, l, o, i, null);
}
function Es(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Lm };
  return i == null && me.vnode != null && me.vnode(r), r;
}
function Fw() {
  return { current: null };
}
function va(e) {
  return e.children;
}
function Yo(e, t) {
  this.props = e, this.context = t;
}
function gr(e, t) {
  if (t == null)
    return e.__ ? gr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? gr(e) : null;
}
function Om(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Om(e);
  }
}
function Hf(e) {
  (!e.__d && (e.__d = !0) && Vo.push(e) && !ki.__r++ || Of !== me.debounceRendering) && ((Of = me.debounceRendering) || setTimeout)(ki);
}
function ki() {
  for (var e; ki.__r = Vo.length; )
    e = Vo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Vo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ut({}, r)).__v = r.__v + 1, Um(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? gr(r), r.__h), jw(o, r), r.__e != l && Om(r)));
    });
}
function Hm(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Dm, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Es(null, a, null, null, a) : Array.isArray(a) ? Es(va, { children: a }, null, null, null) : a.__b > 0 ? Es(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Um(e, a, f = f || Nm, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Wm(a, _, e) : _ = Im(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = gr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Bm(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Fm(p[s], p[++s], p[++s]);
}
function Wm(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Wm(o, t, n) : Im(n, o, o, i, o.__e, t));
  return t;
}
function Im(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Bw(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || xi(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || xi(e, r, t[r], n[r], o);
}
function Wf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Uw.test(t) ? n : n + "px";
}
function xi(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Wf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Wf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Uf : If, r) : e.removeEventListener(t, r ? Uf : If, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function If(e) {
  this.l[e.type + !1](me.event ? me.event(e) : e);
}
function Uf(e) {
  this.l[e.type + !0](me.event ? me.event(e) : e);
}
function Um(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = me.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Yo(p, g), s.constructor = v, s.render = Vw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ut({}, s.__s)), Ut(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = me.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ut(Ut({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === va && h.key == null ? h.props.children : h, Hm(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = zw(n.__e, t, n, o, i, r, l, _);
    (h = me.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), me.__e(x, t, n);
  }
}
function jw(e, t) {
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
function zw(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && ga.call(e.childNodes), h = (d = n.props || Nm).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Bw(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Hm(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && gr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Pm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && xi(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && xi(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Fm(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    me.__e(o, n);
  }
}
function Bm(e, t, n) {
  var o, i;
  if (me.unmount && me.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Fm(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        me.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Bm(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Pm(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Vw(e, t, n) {
  return this.constructor(e, n);
}
ga = Dm.slice, me = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Lm = 0, Rm = function(e) {
  return e != null && e.constructor === void 0;
}, Yo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ut({}, this.state), typeof e == "function" && (e = e(Ut({}, n), this.props)), e && Ut(n, e), e != null && this.__v && (t && this._sb.push(t), Hf(this));
}, Yo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Hf(this));
}, Yo.prototype.render = va, Vo = [], ki.__r = 0;
var Yw = 0;
function Y(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Yw, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return me.vnode && me.vnode(_), _;
}
let qw = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var jm, ge, zm, qo, Ff, Vm = {}, Ym = [], Gw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ft(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function qm(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function uc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++zm };
  return i == null && ge.vnode != null && ge.vnode(r), r;
}
function ba(e) {
  return e.children;
}
function Go(e, t) {
  this.props = e, this.context = t;
}
function yr(e, t) {
  if (t == null)
    return e.__ ? yr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? yr(e) : null;
}
function Gm(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Gm(e);
  }
}
function Bf(e) {
  (!e.__d && (e.__d = !0) && qo.push(e) && !Si.__r++ || Ff !== ge.debounceRendering) && ((Ff = ge.debounceRendering) || setTimeout)(Si);
}
function Si() {
  for (var e; Si.__r = qo.length; )
    e = qo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), qo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ft({}, r)).__v = r.__v + 1, Jm(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? yr(r), r.__h), Kw(o, r), r.__e != l && Gm(r)));
    });
}
function Xm(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Ym, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? uc(null, a, null, null, a) : Array.isArray(a) ? uc(ba, { children: a }, null, null, null) : a.__b > 0 ? uc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Jm(e, a, f = f || Vm, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Km(a, _, e) : _ = Zm(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = yr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && eg(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Qm(p[s], p[++s], p[++s]);
}
function Km(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Km(o, t, n) : Zm(n, o, o, i, o.__e, t));
  return t;
}
function Zm(e, t, n, o, i, r) {
  var l, c, _;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    e:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break e;
        e.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Xw(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ci(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ci(e, r, t[r], n[r], o);
}
function jf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Gw.test(t) ? n : n + "px";
}
function Ci(e, t, n, o, i) {
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
      if (i)
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
  this.l[e.type + !1](ge.event ? ge.event(e) : e);
}
function Vf(e) {
  this.l[e.type + !0](ge.event ? ge.event(e) : e);
}
function Jm(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ge.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Go(p, g), s.constructor = v, s.render = Jw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ft({}, s.__s)), Ft(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          v.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || t.__v === n.__v) {
            for (s.props = p, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(x) {
              x && (x.__ = t);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, k = ge.__r, C = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ft(Ft({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === ba && h.key == null ? h.props.children : h, Xm(e, Array.isArray(E) ? E : [E], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Zw(n.__e, t, n, o, i, r, l, _);
    (h = ge.diffed) && h(t);
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
function Zw(e, t, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = t.props, a = t.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        e = _, r[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && e.data === f || (e.data = f);
  else {
    if (r = r && jm.call(e.childNodes), h = (d = n.props || Vm).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Xw(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Xm(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && yr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && qm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Ci(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ci(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Qm(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ge.__e(o, n);
  }
}
function eg(e, t, n) {
  var o, i;
  if (ge.unmount && ge.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Qm(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ge.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && eg(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || qm(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Jw(e, t, n) {
  return this.constructor(e, n);
}
jm = Ym.slice, ge = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, zm = 0, Go.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ft({}, this.state), typeof e == "function" && (e = e(Ft({}, n), this.props)), e && Ft(n, e), e != null && this.__v && (t && this._sb.push(t), Bf(this));
}, Go.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Bf(this));
}, Go.prototype.render = ba, qo = [], Si.__r = 0;
var Qw = 0;
function Yf(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Qw, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ge.vnode && ge.vnode(_), _;
}
var cn, an;
class qf extends Go {
  constructor(n) {
    super(n);
    T(this, cn, 0);
    T(this, an, null);
    L(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, i = n.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    L(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (y(this, cn) && cancelAnimationFrame(y(this, cn)), H(this, cn, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), H(this, cn, 0);
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
      const i = o.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: c } = this.props, _ = (r === "horz" ? n.clientX - i.left : n.clientY - i.top) - this.barSize / 2;
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
    const { clientSize: n, scrollSize: o, size: i = 12, minBarSize: r = 3 * i } = this.props;
    return Math.max(Math.round(n * n / o), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (H(this, an, typeof n == "string" ? document : n.current), y(this, an).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), y(this, an) && y(this, an).removeEventListener("wheel", this._handleWheel);
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
      size: i = 12,
      className: r,
      style: l,
      left: c,
      top: _,
      bottom: h,
      right: s
    } = this.props, { maxScrollPos: d, scrollPos: f } = this, { dragStart: a } = this.state, u = {
      left: c,
      top: _,
      bottom: h,
      right: s,
      ...l
    }, b = {};
    return o === "horz" ? (u.height = i, u.width = n, b.width = this.barSize, b.left = Math.round(Math.min(d, f) * (n - b.width) / d)) : (u.width = i, u.height = n, b.height = this.barSize, b.top = Math.round(Math.min(d, f) * (n - b.height) / d)), /* @__PURE__ */ Yf(
      "div",
      {
        className: F("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": a
        }),
        style: u,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ Yf(
          "div",
          {
            className: "scrollbar-bar",
            style: b,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
cn = new WeakMap(), an = new WeakMap();
function Gf(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function tg({ col: e, className: t, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
  var v;
  const s = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...l
  }, { align: d, border: f } = e.setting, a = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...e.setting.cellStyle,
    ...r
  }, u = ["dtable-cell", _, e.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], b = ["dtable-cell-content", t], p = [c ?? ((v = o.data) == null ? void 0 : v[e.name]) ?? ""], m = i ? i(p, { row: o, col: e }, ya) : p, g = [], w = [], k = {}, C = {};
  let A = "div";
  m == null || m.forEach((x) => {
    if (typeof x == "object" && x && !Rm(x) && ("html" in x || "className" in x || "style" in x || "attrs" in x || "children" in x || "tagName" in x)) {
      const R = x.outer ? g : w;
      x.html ? R.push(/* @__PURE__ */ Y("div", { className: F("dtable-cell-html", x.className), style: x.style, dangerouslySetInnerHTML: { __html: x.html }, ...x.attrs ?? {} })) : (x.style && Object.assign(x.outer ? s : a, x.style), x.className && (x.outer ? u : b).push(x.className), x.children && R.push(x.children), x.attrs && Object.assign(x.outer ? k : C, x.attrs)), x.tagName && !x.outer && (A = x.tagName);
    } else
      w.push(x);
  });
  const E = A;
  return /* @__PURE__ */ Y(
    "div",
    {
      className: F(u),
      style: s,
      "data-col": e.name,
      ...h,
      ...k,
      children: [
        w.length > 0 && /* @__PURE__ */ Y(E, { className: F(b), style: a, ...C, children: w }),
        g
      ]
    }
  );
}
function hc({ row: e, className: t, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: c = tg, onRenderCell: _ }) {
  return /* @__PURE__ */ Y("div", { className: F("dtable-cells", t), style: { top: n, left: o, width: i, height: r }, children: l.map((h) => h.visible ? /* @__PURE__ */ Y(
    c,
    {
      col: h,
      row: e,
      onRenderCell: _
    },
    h.name
  ) : null) });
}
function ng({
  row: e,
  className: t,
  top: n,
  height: o,
  fixedLeftCols: i,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: c,
  scrollWidth: _,
  scrollColsWidth: h,
  fixedRightWidth: s,
  scrollLeft: d,
  CellComponent: f = tg,
  onRenderCell: a,
  style: u,
  ...b
}) {
  let p = null;
  i != null && i.length && (p = /* @__PURE__ */ Y(
    hc,
    {
      className: "dtable-fixed-left",
      cols: i,
      width: c,
      row: e,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  let m = null;
  l != null && l.length && (m = /* @__PURE__ */ Y(
    hc,
    {
      className: "dtable-flexable",
      cols: l,
      left: c - d,
      width: Math.max(_, h),
      row: e,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ Y(
    hc,
    {
      className: "dtable-fixed-right",
      cols: r,
      left: c + _,
      width: s,
      row: e,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  const w = { top: n, height: o, lineHeight: `${o - 2}px`, ...u };
  return /* @__PURE__ */ Y(
    "div",
    {
      className: F("dtable-row", t),
      style: w,
      "data-id": e.id,
      ...b,
      children: [
        p,
        m,
        g
      ]
    }
  );
}
function e$({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const i = t({ props: o }, ya);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ Y("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ Y(ng, { ...o }) });
}
function t$({
  className: e,
  style: t,
  top: n,
  rows: o,
  height: i,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: c,
  ..._
}) {
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ Y("div", { className: F("dtable-rows", e), style: t, children: o.map((h) => {
    const s = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ..._
    }, d = c == null ? void 0 : c({ props: s, row: h }, ya);
    return d && Object.assign(s, d), /* @__PURE__ */ Y(ng, { ...s });
  }) });
}
const Ei = /* @__PURE__ */ new Map(), Ai = [];
function og(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Ei.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Ei.set(n, e), t != null && t.buildIn && !Ai.includes(n) && Ai.push(n);
}
function to(e, t) {
  og(e, t);
  const n = (o) => {
    if (!o)
      return e;
    const { defaultOptions: i, ...r } = e;
    return {
      ...r,
      defaultOptions: { ...i, ...o }
    };
  };
  return n.plugin = e, n;
}
function rg(e) {
  return Ei.delete(e);
}
function n$(e) {
  if (typeof e == "string") {
    const t = Ei.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function sg(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = n$(o);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && sg(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function o$(e = [], t = !0) {
  return t && Ai.length && e.unshift(...Ai), e != null && e.length ? sg([], e, /* @__PURE__ */ new Set()) : [];
}
function Xf() {
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
var _s, _n, Vn, xt, Qe, St, we, ze, et, Yn, Vr, Yr, dt, qn, Gn, $l, ig, kl, lg, xl, cg, Sl, ag, qr, Oc, Cl, El, Gr, Xr, Al, Tl, Ml, _g, Ll, fg, Rl, ug;
let r$ = (_s = class extends Yo {
  constructor(n) {
    super(n);
    T(this, $l);
    T(this, kl);
    T(this, xl);
    T(this, Sl);
    T(this, qr);
    T(this, Ml);
    T(this, Ll);
    T(this, Rl);
    L(this, "ref", Fw());
    T(this, _n, 0);
    T(this, Vn, void 0);
    T(this, xt, !1);
    T(this, Qe, void 0);
    T(this, St, void 0);
    T(this, we, []);
    T(this, ze, void 0);
    T(this, et, /* @__PURE__ */ new Map());
    T(this, Yn, {});
    T(this, Vr, void 0);
    T(this, Yr, []);
    L(this, "updateLayout", () => {
      y(this, _n) && cancelAnimationFrame(y(this, _n)), H(this, _n, requestAnimationFrame(() => {
        H(this, ze, void 0), this.forceUpdate(), H(this, _n, 0);
      }));
    });
    T(this, dt, (n, o) => {
      o = o || n.type;
      const i = y(this, et).get(o);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    T(this, qn, (n) => {
      y(this, dt).call(this, n, `window_${n.type}`);
    });
    T(this, Gn, (n) => {
      y(this, dt).call(this, n, `document_${n.type}`);
    });
    T(this, Cl, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return y(this, we).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    T(this, El, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), y(this, we).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    T(this, Gr, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, i)), this.options[c] && (n = this.options[c].call(this, n, o, i)), y(this, we).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, i));
      }), n;
    });
    T(this, Xr, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    T(this, Al, (n) => {
      var c, _, h, s, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), y(this, we).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === i);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of y(this, we))
            if (((h = u.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
          return;
        for (const u of y(this, we))
          if (((d = u.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    T(this, Tl, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, Vn, n.id ?? `dtable-${qw(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, St, Object.freeze(o$(n.plugins))), y(this, St).forEach((o) => {
      var c;
      const { methods: i, data: r, state: l } = o;
      i && Object.entries(i).forEach(([_, h]) => {
        typeof h == "function" && Object.assign(this, { [_]: h.bind(this) });
      }), r && Object.assign(y(this, Yn), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = y(this, ze)) == null ? void 0 : n.options) || y(this, Qe) || Xf();
  }
  get plugins() {
    return y(this, we);
  }
  get layout() {
    return y(this, ze);
  }
  get id() {
    return y(this, Vn);
  }
  get data() {
    return y(this, Yn);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, Qe, void 0);
  }
  componentDidMount() {
    if (y(this, xt) ? this.forceUpdate() : W(this, qr, Oc).call(this), y(this, we).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", y(this, Al)), this.on("keydown", y(this, Tl)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, Vr, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    y(this, we).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    y(this, xt) ? W(this, qr, Oc).call(this) : y(this, we).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = y(this, Vr)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of y(this, et).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), y(this, qn)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), y(this, Gn)) : n.removeEventListener(i, y(this, dt));
    y(this, we).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), y(this, St).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), H(this, Yn, {}), y(this, et).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = y(this, et).get(n);
    r ? r.push(o) : (y(this, et).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), y(this, qn)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), y(this, Gn)) : (l = this.ref.current) == null || l.addEventListener(n, y(this, dt)));
  }
  off(n, o, i) {
    var c;
    i && (n = `${i}_${n}`);
    const r = y(this, et).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (y(this, et).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), y(this, qn)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), y(this, Gn)) : (c = this.ref.current) == null || c.removeEventListener(n, y(this, dt)));
  }
  emitCustomEvent(n, o) {
    y(this, dt).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: i, scrollTop: r, rowsHeightTotal: l, rowsHeight: c, rowHeight: _, colsInfo: { scrollWidth: h, scrollColsWidth: s } } = this.layout, { to: d } = n;
    let { scrollLeft: f, scrollTop: a } = n;
    if (d === "up" || d === "down")
      a = r + (d === "down" ? 1 : -1) * Math.floor(c / _) * _;
    else if (d === "left" || d === "right")
      f = i + (d === "right" ? 1 : -1) * h;
    else if (d === "home")
      a = 0;
    else if (d === "end")
      a = l - c;
    else if (d === "left-begin")
      f = 0;
    else if (d === "right-end")
      f = s - h;
    else {
      const { offsetLeft: b, offsetTop: p } = n;
      typeof b == "number" && (f = i + b), typeof p == "number" && (f = r + p);
    }
    const u = {};
    return typeof f == "number" && (f = Math.max(0, Math.min(f, s - h)), f !== i && (u.scrollLeft = f)), typeof a == "number" && (a = Math.max(0, Math.min(a, l - c)), a !== r && (u.scrollTop = a)), Object.keys(u).length ? (this.setState(u, () => {
      var b;
      (b = this.options.onScroll) == null || b.call(this, u), o == null || o.call(this, !0);
    }), !0) : (o == null || o.call(this, !1), !1);
  }
  getColInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    const { colsMap: o, colsList: i } = this.layout;
    return typeof n == "number" ? i[n] : o[n];
  }
  getRowInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    if (n === -1 || n === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: o, rowsMap: i } = this.layout;
    return typeof n == "number" ? o[n] : i[n];
  }
  getCellValue(n, o) {
    var _;
    const i = typeof n == "object" ? n : this.getRowInfo(n);
    if (!i)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let l = i.id === "HEADER" ? r.setting.title ?? r.setting.name : (_ = i.data) == null ? void 0 : _[r.name];
    const { cellValueGetter: c } = this.options;
    return c && (l = c.call(this, i, r, l)), l;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    if (!y(this, Qe))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      H(this, ze, void 0);
    else if (i === "options") {
      if (H(this, Qe, void 0), !y(this, ze))
        return;
      H(this, ze, void 0);
    }
    this.setState(r ?? ((l) => ({ renderCount: l.renderCount + 1 })), o);
  }
  getPointerInfo(n) {
    const o = n.target;
    if (!o || o.closest(".no-cell-event"))
      return;
    const i = o.closest(".dtable-cell");
    if (!i)
      return;
    const r = i.closest(".dtable-row");
    if (!r)
      return;
    const l = i == null ? void 0 : i.getAttribute("data-col"), c = r == null ? void 0 : r.getAttribute("data-id");
    if (!(typeof l != "string" || typeof c != "string"))
      return {
        cellElement: i,
        rowElement: r,
        colName: l,
        rowID: c,
        target: o
      };
  }
  i18n(n, o, i) {
    return Kr(y(this, Yr), n, o, i, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = W(this, Rl, ug).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], f = [];
    return n && y(this, we).forEach((a) => {
      var b;
      const u = (b = a.onRender) == null ? void 0 : b.call(this, n);
      u && (u.style && Object.assign(s, u.style), u.className && d.push(u.className), u.children && f.push(u.children));
    }), /* @__PURE__ */ Y(
      "div",
      {
        id: y(this, Vn),
        className: F(d),
        style: s,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && W(this, $l, ig).call(this, n),
          n && W(this, kl, lg).call(this, n),
          n && W(this, xl, cg).call(this, n),
          n && W(this, Sl, ag).call(this, n)
        ]
      }
    );
  }
}, _n = new WeakMap(), Vn = new WeakMap(), xt = new WeakMap(), Qe = new WeakMap(), St = new WeakMap(), we = new WeakMap(), ze = new WeakMap(), et = new WeakMap(), Yn = new WeakMap(), Vr = new WeakMap(), Yr = new WeakMap(), dt = new WeakMap(), qn = new WeakMap(), Gn = new WeakMap(), $l = new WeakSet(), ig = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ Y(
      e$,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: y(this, Gr),
        onRenderRow: y(this, El),
        ...i
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    bc,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, kl = new WeakSet(), lg = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ Y(
    t$,
    {
      top: o,
      height: i,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: h,
      onRenderCell: y(this, Gr),
      onRenderRow: y(this, Cl),
      ...c
    }
  );
}, xl = new WeakSet(), cg = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    bc,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: i,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, Sl = new WeakSet(), ag = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: s, scrollWidth: d } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > d && o.push(
    /* @__PURE__ */ Y(
      qf,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: s,
        clientSize: d,
        onScroll: y(this, Xr),
        left: r.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -f) + h,
        size: f,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > c && o.push(
    /* @__PURE__ */ Y(
      qf,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: c,
        onScroll: y(this, Xr),
        right: 0,
        size: f,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, qr = new WeakSet(), Oc = function() {
  var n;
  H(this, xt, !1), (n = this.options.afterRender) == null || n.call(this), y(this, we).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, Cl = new WeakMap(), El = new WeakMap(), Gr = new WeakMap(), Xr = new WeakMap(), Al = new WeakMap(), Tl = new WeakMap(), Ml = new WeakSet(), _g = function() {
  if (y(this, Qe))
    return !1;
  const o = { ...Xf(), ...y(this, St).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return H(this, Qe, o), H(this, we, y(this, St).reduce((i, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (i.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), i;
  }, [])), H(this, Yr, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Ll = new WeakSet(), fg = function() {
  var X, ve;
  const { plugins: n } = this;
  let o = y(this, Qe);
  const i = {
    flex: /* @__PURE__ */ Y("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ Y("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((U) => {
    var ye;
    const K = (ye = U.beforeLayout) == null ? void 0 : ye.call(this, o);
    K && (o = { ...o, ...K }), Object.assign(i, U.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], s = [], d = {}, f = [], a = [];
  let u = 0, b = 0, p = 0;
  o.cols.forEach((U) => {
    if (U.hidden)
      return;
    const {
      name: K,
      type: ye = "",
      fixed: se = !1,
      flex: q = !1,
      width: ie = r,
      minWidth: Ae = l,
      maxWidth: Te = c,
      ...vg
    } = U, J = {
      name: K,
      type: ye,
      setting: {
        name: K,
        type: ye,
        fixed: se,
        flex: q,
        width: ie,
        minWidth: Ae,
        maxWidth: Te,
        ...vg
      },
      flex: se ? 0 : q === !0 ? 1 : typeof q == "number" ? q : 0,
      left: 0,
      width: Gf(ie, Ae, Te),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((xa) => {
      var Sa, Ca;
      const ts = (Sa = xa.colTypes) == null ? void 0 : Sa[ye];
      if (ts) {
        const Ea = typeof ts == "function" ? ts(J) : ts;
        Ea && Object.assign(J.setting, Ea);
      }
      (Ca = xa.onAddCol) == null || Ca.call(this, J);
    }), J.width = Gf(J.setting.width ?? J.width, J.setting.minWidth ?? Ae, J.setting.maxWidth ?? Te), J.realWidth = J.realWidth || J.width, se === "left" ? (J.left = u, u += J.width, _.push(J)) : se === "right" ? (J.left = b, b += J.width, h.push(J)) : (J.left = p, p += J.width, s.push(J)), J.flex && a.push(J), f.push(J), d[J.name] = J;
  });
  let m = o.width, g = 0;
  const w = u + p + b;
  if (typeof m == "function" && (m = m.call(this, w)), m === "auto")
    g = w;
  else if (m === "100%") {
    const { parent: U } = this;
    if (U)
      g = U.clientWidth;
    else {
      g = 0, H(this, xt, !0);
      return;
    }
  } else
    g = m ?? 0;
  const { data: k, rowKey: C = "id", rowHeight: A } = o, E = [], v = (U, K, ye) => {
    var q, ie;
    const se = { data: ye ?? { [C]: U }, id: U, index: E.length, top: 0 };
    if (ye || (se.lazy = !0), E.push(se), ((q = o.onAddRow) == null ? void 0 : q.call(this, se, K)) !== !1) {
      for (const Ae of n)
        if (((ie = Ae.onAddRow) == null ? void 0 : ie.call(this, se, K)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let U = 0; U < k; U++)
      v(`${U}`, U);
  else
    Array.isArray(k) && k.forEach((U, K) => {
      typeof U == "object" ? v(`${U[C] ?? ""}`, K, U) : v(`${U ?? ""}`, K);
    });
  let x = E;
  const R = {};
  if (o.onAddRows) {
    const U = o.onAddRows.call(this, x);
    U && (x = U);
  }
  for (const U of n) {
    const K = (X = U.onAddRows) == null ? void 0 : X.call(this, x);
    K && (x = K);
  }
  x.forEach((U, K) => {
    R[U.id] = U, U.index = K, U.top = U.index * A;
  });
  const { header: V, footer: B } = o, N = V ? o.headerHeight || A : 0, S = B ? o.footerHeight || A : 0;
  let $ = o.height, D = 0;
  const M = x.length * A, O = N + S + M;
  if (typeof $ == "function" && ($ = $.call(this, O)), $ === "auto")
    D = O;
  else if (typeof $ == "object")
    D = Math.min($.max, Math.max($.min, O));
  else if ($ === "100%") {
    const { parent: U } = this;
    if (U)
      D = U.clientHeight;
    else {
      D = 0, H(this, xt, !0);
      return;
    }
  } else
    D = $;
  const P = D - N - S, I = g - u - b, z = {
    options: o,
    allRows: E,
    width: g,
    height: D,
    rows: x,
    rowsMap: R,
    rowHeight: A,
    rowsHeight: P,
    rowsHeightTotal: M,
    header: V,
    footer: B,
    footerGenerators: i,
    headerHeight: N,
    footerHeight: S,
    colsMap: d,
    colsList: f,
    flexCols: a,
    colsInfo: {
      fixedLeftCols: _,
      fixedRightCols: h,
      scrollCols: s,
      fixedLeftWidth: u,
      scrollWidth: I,
      scrollColsWidth: p,
      fixedRightWidth: b
    }
  }, j = (ve = o.onLayout) == null ? void 0 : ve.call(this, z);
  j && Object.assign(z, j), n.forEach((U) => {
    if (U.onLayout) {
      const K = U.onLayout.call(this, z);
      K && Object.assign(z, K);
    }
  }), H(this, ze, z);
}, Rl = new WeakSet(), ug = function() {
  (W(this, Ml, _g).call(this) || !y(this, ze)) && W(this, Ll, fg).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: c } } = n;
  if (i.length) {
    const w = l - c;
    if (w > 0) {
      const k = i.reduce((A, E) => A + E.flex, 0);
      let C = 0;
      i.forEach((A) => {
        const E = Math.min(w - C, Math.ceil(w * (A.flex / k)));
        A.realWidth = E + A.width, C += A.realWidth;
      });
    } else
      i.forEach((k) => {
        k.realWidth = k.width;
      });
  }
  o = Math.min(Math.max(0, c - l), o);
  let _ = 0;
  r.forEach((w) => {
    w.left = _, _ += w.realWidth, w.visible = w.left + w.realWidth >= o && w.left <= o + l;
  });
  const { rowsHeightTotal: h, rowsHeight: s, rows: d, rowHeight: f } = n, a = Math.min(Math.max(0, h - s), this.state.scrollTop), u = Math.floor(a / f), b = a + s, p = Math.min(d.length, Math.ceil(b / f)), m = [], { rowDataGetter: g } = this.options;
  for (let w = u; w < p; w++) {
    const k = d[w];
    k.lazy && g && (k.data = g([k.id])[0], k.lazy = !1), m.push(k);
  }
  return n.visibleRows = m, n.scrollTop = a, n.scrollLeft = o, n;
}, L(_s, "addPlugin", og), L(_s, "removePlugin", rg), _s);
function Kf(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(o));
}
const s$ = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var i;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const n = (i = e.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!n || t === "header" && !n.closest(".dtable-header"))
        return;
      const o = (n == null ? void 0 : n.getAttribute("data-col")) ?? !1;
      Kf(this, o);
    },
    mouseleave() {
      Kf(this, !1);
    }
  }
}, i$ = to(s$, { buildIn: !0 });
function l$(e, t) {
  var l, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (_, h) => {
    i && !i.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (e === void 0 ? (t === void 0 && (t = !hg.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
    r(_, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((_) => {
    r(_, t ?? !n[_]);
  })), Object.keys(o).length) {
    const _ = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, e, o, n);
    _ && Object.keys(_).forEach((h) => {
      _[h] ? n[h] = !0 : delete n[h];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, o);
    });
  }
  return o;
}
function c$(e) {
  return this.state.checkedRows[e] ?? !1;
}
function hg() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function a$() {
  return Object.keys(this.state.checkedRows);
}
const _$ = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: l$,
    isRowChecked: c$,
    isAllRowChecked: hg,
    getChecks: a$
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
        /* @__PURE__ */ Y("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ Y("input", { type: "checkbox", checked: e }) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ Y("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var c;
    const { id: o } = t, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, o))
      return e;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const _ = this.isRowChecked(o), h = ((c = this.options.checkboxRender) == null ? void 0 : c.call(this, _, o)) ?? /* @__PURE__ */ Y("input", { type: "checkbox", checked: _ });
      e.unshift(h), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var l;
    const { id: o } = t, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, o) : i) {
      const c = this.isAllRowChecked(), _ = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, c, o)) ?? /* @__PURE__ */ Y("input", { type: "checkbox", checked: c });
      e.unshift(_), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (this.isRowChecked(t.id))
      return { className: F(e.className, "is-checked") };
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!t)
      return;
    const n = t.closest('input[type="checkbox"],.dtable-checkbox');
    n && this.toggleCheckRows(n.checked);
  },
  onRowClick(e, { rowID: t }) {
    const n = e.target;
    if (!n)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
}, f$ = to(_$);
var dg = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(dg || {});
function Hc(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const l = Hc.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = i ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Hc.call(this, t.parent).level + 1 : 0, t;
}
function u$(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !pg.call(this)), t) {
      const i = o.entries();
      for (const [r, l] of i)
        l.state === "expanded" && (n[r] = !0);
    } else
      n = {};
  else {
    const i = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[i[0]]), i.forEach((r) => {
      const l = o.get(r);
      t && (l != null && l.children) ? n[r] = !0 : delete n[r];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...n } }
  }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function pg() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function mg(e, t = 0, n, o = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    l && (l.level === o && (l.order = t++), (i = l.children) != null && i.length && (t = mg(e, t, l.children, o + 1)));
  }
  return t;
}
function gg(e, t, n, o) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, gg(e, r, n, o);
  }), i;
}
function yg(e, t, n, o, i) {
  var c;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : i[_]);
    return n === h;
  })) && (o[t] = n), r.parent && yg(e, r.parent, n, o, i);
}
const h$ = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, t) {
      const { nestedMap: n } = this.data, o = n.get(e.id), i = n.get(t.id);
      return (o == null ? void 0 : o.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(e, t, n) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const o = {};
      return Object.entries(t).forEach(([i, r]) => {
        const l = gg(this, i, r, o);
        l != null && l.parent && yg(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: u$,
    isAllCollapsed: pg,
    getNestedRowInfo: Hc
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var i, r;
    const { nestedMap: t } = this.data, n = (i = e.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"], o = t.get(e.id) ?? {
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
    ), mg(this.data.nestedMap), e.sort((t, n) => {
      const o = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = (o.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var c;
    const { id: o, data: i } = n, { nestedToggle: r } = t.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && e.unshift(((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, o, t, i)) ?? /* @__PURE__ */ Y("a", { role: "button", className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ Y("span", { className: "toggle-icon" }) })), l.level) {
      let { nestedIndent: _ = r } = t.setting;
      _ && (_ === !0 && (_ = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ Y("div", { className: "dtable-nested-indent", style: { width: _ * l.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i;
    const { id: o } = t;
    return n.setting.nestedToggle && e.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, o, n, void 0)) ?? /* @__PURE__ */ Y("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ Y("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: F(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = F(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, d$ = to(h$);
const p$ = {
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
        const { linkTemplate: o = "", linkProps: i } = t.setting, r = Re(o, n.data);
        return e[0] = /* @__PURE__ */ Y("a", { href: r, ...i, children: e[0] }), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: n }) {
        const { data: o } = n, { avatarWithName: i, avatarClass: r = "size-xs circle", avatarKey: l = `${t.name}Avatar` } = t.setting, c = /* @__PURE__ */ Y("div", { className: `avatar ${r} flex-none`, children: /* @__PURE__ */ Y("img", { src: o ? o[l] : "" }) });
        return i ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, l = (n - o) / 2, c = n / 2, _ = e[0];
        return e[0] = /* @__PURE__ */ Y("svg", { width: n, height: n, children: [
          /* @__PURE__ */ Y("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ Y("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - _) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ Y("text", { x: c, y: c + o, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${l}px` }, children: Math.round(_) })
        ] }), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: t, row: n }) {
        var c;
        const o = (c = n.data) == null ? void 0 : c[t.name];
        if (!o)
          return e;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = t.setting;
        return [{
          html: o.map((_) => {
            typeof _ == "string" && (_ = { action: _ });
            const h = r[_.action];
            return h && (_ = { className: l, ...h, ..._ }), Re(i, _);
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
        const { format: o, type: i } = n, r = e[0];
        return typeof o == "function" ? e[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? e[0] = Mc(r, o) : i === "html" ? e[0] = { html: Re(o, r) } : e[0] = Re(o, r), e;
      }
    }
  }
}, m$ = to(p$, { buildIn: !0 }), g$ = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: n } = t.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: i } = t.setting, r = n === !0 ? "none" : n;
      if (e.push(
        /* @__PURE__ */ Y("div", { className: `dtable-sort dtable-sort-${r}` }),
        { outer: !0, attrs: { "data-sort": r } }
      ), o) {
        const l = typeof o == "function" ? o.call(this, t, r) : o;
        e.push(
          { tagName: "a", attrs: { href: l, ...i } }
        );
      }
    }
    return e;
  }
}, y$ = to(g$, { buildIn: !0 }), v$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: dg,
  checkable: f$,
  colHover: i$,
  nested: d$,
  rich: m$,
  sortType: y$
}, Symbol.toStringTag, { value: "Module" }));
class oo extends ke {
}
L(oo, "NAME", "dtable"), L(oo, "Component", r$), L(oo, "definePlugin", to), L(oo, "removePlugin", rg), L(oo, "plugins", v$);
var Pe;
class _o extends Xe {
  constructor() {
    super(...arguments);
    T(this, Pe, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Pe, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), y(this, Pe) && (this.addActive(y(this, Pe).parentElement, y(this, Pe)), y(this, Pe).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Pe, document.querySelector(n)), y(this, Pe) && (this.addActive(y(this, Pe).parentElement, y(this, Pe)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
  }
  addActive(n, o) {
    const i = n.children;
    Array.from(i).forEach((l) => {
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
Pe = new WeakMap(), L(_o, "NAME", "NavTabs"), L(_o, "NAV_CLASS", "nav-tabs"), L(_o, "EVENTS", !0), L(_o, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (e) => {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new _o(e.target).showTarget());
});
export {
  Ua as ActionMenu,
  Ba as ActionMenuNested,
  Iw as AjaxForm,
  O_ as Avatar,
  H_ as BtnGroup,
  Ga as Button,
  Le as ContextMenu,
  oo as DTable,
  Oe as Datepicker,
  Ee as Dropdown,
  Ic as EventBus,
  Xa as Menu,
  os as Messager,
  Me as Modal,
  Po as ModalTrigger,
  ef as Nav,
  _o as NavTabs,
  of as Pager,
  ff as Picker,
  A_ as ProgressCircle,
  at as TIME_DAY,
  He as Timepicker,
  kf as Toolbar,
  We as Tooltip,
  Pf as VirtualGrid,
  Dg as addI18nMap,
  R$ as browser,
  nf as calculateTimestamp,
  $$ as convertBytes,
  Ne as createDate,
  w$ as formatBytes,
  Mc as formatDate,
  U$ as formatDateSpan,
  Re as formatString,
  Rg as getLangCode,
  F$ as getTimeBeforeDesc,
  Kr as i18n,
  I$ as isDBY,
  oc as isObject,
  Jr as isSameDay,
  Zb as isSameMonth,
  P$ as isSameWeek,
  tf as isSameYear,
  O$ as isToday,
  W$ as isTomorrow,
  H$ as isYesterday,
  vc as mergeDeep,
  yc as nativeEvents,
  Ng as setLangCode,
  Rv as store
};
