var gy = Object.defineProperty;
var yy = (e, t, n) => t in e ? gy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var M = (e, t, n) => (yy(e, typeof t != "symbol" ? t + "" : t, n), n), Sc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var y = (e, t, n) => (Sc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), E = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, H = (e, t, n, o) => (Sc(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n), t_ = (e, t, n, o) => ({
  set _(i) {
    H(e, t, i, n);
  },
  get _() {
    return y(e, t, o);
  }
}), W = (e, t, n) => (Sc(e, t, "access private method"), n);
var nc, te, Mu, Ru, go, n_, Bs = {}, Du = [], vy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Lt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Nu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Pu(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? nc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return xs(e, l, o, i, null);
}
function xs(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Mu };
  return i == null && te.vnode != null && te.vnode(r), r;
}
function by() {
  return { current: null };
}
function oc(e) {
  return e.children;
}
function Ss(e, t) {
  this.props = e, this.context = t;
}
function or(e, t) {
  if (t == null)
    return e.__ ? or(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? or(e) : null;
}
function Ou(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ou(e);
  }
}
function o_(e) {
  (!e.__d && (e.__d = !0) && go.push(e) && !js.__r++ || n_ !== te.debounceRendering) && ((n_ = te.debounceRendering) || setTimeout)(js);
}
function js() {
  for (var e; js.__r = go.length; )
    e = go.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), go = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Lt({}, r)).__v = r.__v + 1, aa(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? or(r), r.__h), Uu(o, r), r.__e != l && Ou(r)));
    });
}
function Hu(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Du, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? xs(null, a, null, null, a) : Array.isArray(a) ? xs(oc, { children: a }, null, null, null) : a.__b > 0 ? xs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      aa(e, a, f = f || Bs, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Wu(a, _, e) : _ = Iu(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = or(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Bu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Fu(p[s], p[++s], p[++s]);
}
function Wu(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Wu(o, t, n) : Iu(n, o, o, i, o.__e, t));
  return t;
}
function Iu(e, t, n, o, i, r) {
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
function wy(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || zs(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || zs(e, r, t[r], n[r], o);
}
function r_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || vy.test(t) ? n : n + "px";
}
function zs(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || r_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || r_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? i_ : s_, r) : e.removeEventListener(t, r ? i_ : s_, r);
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
function s_(e) {
  this.l[e.type + !1](te.event ? te.event(e) : e);
}
function i_(e) {
  this.l[e.type + !0](te.event ? te.event(e) : e);
}
function aa(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = te.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Ss(p, g), s.constructor = v, s.render = ky), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Lt({}, s.__s)), Lt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = te.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = Lt(Lt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === oc && h.key == null ? h.props.children : h, Hu(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = $y(n.__e, t, n, o, i, r, l, _);
    (h = te.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), te.__e(x, t, n);
  }
}
function Uu(e, t) {
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
function $y(e, t, n, o, i, r, l, c) {
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
    if (r = r && nc.call(e.childNodes), h = (d = n.props || Bs).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (wy(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Hu(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && or(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Nu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && zs(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && zs(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Fu(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    te.__e(o, n);
  }
}
function Bu(e, t, n) {
  var o, i;
  if (te.unmount && te.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Fu(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Bu(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Nu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ky(e, t, n) {
  return this.constructor(e, n);
}
function xy(e, t, n) {
  var o, i, r;
  te.__ && te.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], aa(t, e = (!o && n || t).__k = Pu(oc, null, [e]), i || Bs, Bs, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? nc.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), Uu(r, e);
}
nc = Du.slice, te = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Mu = 0, Ru = function(e) {
  return e != null && e.constructor === void 0;
}, Ss.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Lt({}, this.state), typeof e == "function" && (e = e(Lt({}, n), this.props)), e && Lt(n, e), e != null && this.__v && (t && this._sb.push(t), o_(this));
}, Ss.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), o_(this));
}, Ss.prototype.render = oc, go = [], js.__r = 0;
var Sy = 0;
function ju(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Sy, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return te.vnode && te.vnode(_), _;
}
var ht;
class Cy {
  constructor(t = "") {
    E(this, ht, void 0);
    typeof t == "object" ? H(this, ht, t) : H(this, ht, document.appendChild(document.createComment(t)));
  }
  on(t, n, o) {
    y(this, ht).addEventListener(t, n, o);
  }
  once(t, n, o) {
    y(this, ht).addEventListener(t, n, { once: !0, ...o });
  }
  off(t, n, o) {
    y(this, ht).removeEventListener(t, n, o);
  }
  emit(t) {
    return y(this, ht).dispatchEvent(t), t;
  }
}
ht = new WeakMap();
const Fc = /* @__PURE__ */ new Set([
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
class _a extends Cy {
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
    return typeof t == "string" && (Fc.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(_a.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (Fc.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
var dt, Er, ln, fo;
class l_ extends _a {
  constructor(n = "", o) {
    super(n);
    E(this, ln);
    E(this, dt, /* @__PURE__ */ new Map());
    E(this, Er, void 0);
    H(this, Er, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = W(this, ln, fo).call(this, n), super.on(n, o, i), y(this, dt).set(o, [n, i]);
  }
  off(n, o, i) {
    n = W(this, ln, fo).call(this, n), super.off(n, o, i), y(this, dt).delete(o);
  }
  once(n, o, i) {
    n = W(this, ln, fo).call(this, n);
    const r = (l) => {
      o(l), y(this, dt).delete(r);
    };
    super.once(n, r, i), y(this, dt).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = W(this, ln, fo).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(y(this, dt).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), y(this, dt).clear();
  }
}
dt = new WeakMap(), Er = new WeakMap(), ln = new WeakSet(), fo = function(n) {
  const o = y(this, Er);
  return Fc.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Ey(e, t) {
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
function Ay(e, t, n) {
  const o = Ey(e, t), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function Cc(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Bc(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (Cc(e) && Cc(n))
    for (const o in n)
      Cc(n[o]) ? (e[o] || Object.assign(e, { [o]: {} }), Bc(e[o], n[o])) : Object.assign(e, { [o]: n[o] });
  return Bc(e, ...t);
}
function Ne(e, ...t) {
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
var fa = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(fa || {});
function Ck(e, t = 2, n = "") {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / fa[n]).toFixed(t) + n);
}
const Ek = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const o = n[1];
  return e = e.replace(o, ""), Number.parseInt(e, 10) * fa[o];
};
var Lu;
let ua = ((Lu = document.documentElement.getAttribute("lang")) == null ? void 0 : Lu.toLowerCase()) ?? "zh_cn", $t;
function Ty() {
  return ua;
}
function Ly(e) {
  ua = e.toLowerCase();
}
function My(e, t) {
  $t || ($t = {}), typeof e == "string" && (e = { [e]: t ?? {} }), Bc($t, e);
}
function cs(e, t, n, o, i, r) {
  Array.isArray(e) ? $t && e.unshift($t) : e = $t ? [$t, e] : [e], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || ua;
  let c;
  for (const _ of e) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const s = r && _ === $t ? `${r}.${t}` : t;
    if (c = Ay(h, s), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? Ne(c, ...Array.isArray(n) ? n : [n]) : c;
}
cs.addLang = My;
cs.getCode = Ty;
cs.setCode = Ly;
function Ry(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [t, n];
  }));
}
const Ec = /* @__PURE__ */ new Map();
var pt, En, Ve;
class Ze {
  constructor(t, n) {
    E(this, pt, void 0);
    E(this, En, void 0);
    E(this, Ve, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && H(this, Ve, new l_(t, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, pt, { ...this.constructor.DEFAULT }), this.setOptions({ ...t instanceof HTMLElement ? Ry(t.dataset) : null, ...n }), this.constructor.all.set(t, this), H(this, En, t), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return y(this, pt);
  }
  get element() {
    return y(this, En);
  }
  get events() {
    return y(this, Ve);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(t) {
    return t && Object.assign(y(this, pt), t), y(this, pt);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(y(this, En)), y(this, Ve) && (this.emit("destroyed", this), y(this, Ve).offAll());
  }
  on(t, n, o) {
    var i;
    (i = y(this, Ve)) == null || i.on(t, n, o);
  }
  once(t, n, o) {
    var i;
    (i = y(this, Ve)) == null || i.once(t, n, o);
  }
  off(t, n, o) {
    var i;
    (i = y(this, Ve)) == null || i.off(t, n, o);
  }
  emit(t, n) {
    var l;
    let o = l_.createEvent(t, n);
    const i = `on${t[0].toUpperCase()}${t.substring(1)}`, r = y(this, pt)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = y(this, Ve)) == null ? void 0 : l.emit(t, n), o;
  }
  i18n(t, n, o) {
    return cs(y(this, pt).i18n, t, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${t}}`;
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
    if (Ec.has(t))
      return Ec.get(t);
    const n = /* @__PURE__ */ new Map();
    return Ec.set(t, n), n;
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
pt = new WeakMap(), En = new WeakMap(), Ve = new WeakMap(), M(Ze, "EVENTS", !1), M(Ze, "DEFAULT", {});
class Se extends Ze {
  constructor() {
    super(...arguments);
    M(this, "ref", by());
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
    xy(/* @__PURE__ */ ju(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
M(Se, "Component");
var ha, ce, zu, Vu, yo, c_, Yu = {}, Gu = [], Dy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Mt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function qu(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function so(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ha.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Cs(e, l, o, i, null);
}
function Cs(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++zu };
  return i == null && ce.vnode != null && ce.vnode(r), r;
}
function Ny() {
  return { current: null };
}
function da(e) {
  return e.children;
}
function vo(e, t) {
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
function Xu(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Xu(e);
  }
}
function a_(e) {
  (!e.__d && (e.__d = !0) && yo.push(e) && !Vs.__r++ || c_ !== ce.debounceRendering) && ((c_ = ce.debounceRendering) || setTimeout)(Vs);
}
function Vs() {
  for (var e; Vs.__r = yo.length; )
    e = yo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), yo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Mt({}, r)).__v = r.__v + 1, Qu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? rr(r), r.__h), Oy(o, r), r.__e != l && Xu(r)));
    });
}
function Ku(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Gu, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Cs(null, a, null, null, a) : Array.isArray(a) ? Cs(da, { children: a }, null, null, null) : a.__b > 0 ? Cs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Qu(e, a, f = f || Yu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Ju(a, _, e) : _ = Zu(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = rr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && th(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      eh(p[s], p[++s], p[++s]);
}
function Ju(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Ju(o, t, n) : Zu(n, o, o, i, o.__e, t));
  return t;
}
function Zu(e, t, n, o, i, r) {
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
function Py(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ys(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ys(e, r, t[r], n[r], o);
}
function __(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Dy.test(t) ? n : n + "px";
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
            n && t in n || __(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || __(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? u_ : f_, r) : e.removeEventListener(t, r ? u_ : f_, r);
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
function f_(e) {
  this.l[e.type + !1](ce.event ? ce.event(e) : e);
}
function u_(e) {
  this.l[e.type + !0](ce.event ? ce.event(e) : e);
}
function Qu(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ce.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new vo(p, g), s.constructor = v, s.render = Wy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Mt({}, s.__s)), Mt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = ce.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = Mt(Mt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === da && h.key == null ? h.props.children : h, Ku(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Hy(n.__e, t, n, o, i, r, l, _);
    (h = ce.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ce.__e(x, t, n);
  }
}
function Oy(e, t) {
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
function Hy(e, t, n, o, i, r, l, c) {
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
    if (r = r && ha.call(e.childNodes), h = (d = n.props || Yu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Py(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Ku(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && rr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && qu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Ys(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ys(e, "checked", u, d.checked, !1));
  }
  return e;
}
function eh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ce.__e(o, n);
  }
}
function th(e, t, n) {
  var o, i;
  if (ce.unmount && ce.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || eh(o, null, t)), (o = e.__c) != null) {
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
      o[i] && th(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || qu(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Wy(e, t, n) {
  return this.constructor(e, n);
}
ha = Gu.slice, ce = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, zu = 0, Vu = function(e) {
  return e != null && e.constructor === void 0;
}, vo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Mt({}, this.state), typeof e == "function" && (e = e(Mt({}, n), this.props)), e && Mt(n, e), e != null && this.__v && (t && this._sb.push(t), a_(this));
}, vo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), a_(this));
}, vo.prototype.render = da, yo = [], Vs.__r = 0;
var Iy = 0;
function rt(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Iy, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ce.vnode && ce.vnode(_), _;
}
function rc(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), o = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const l = n.get(i);
    typeof l == "number" ? t[l][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? rc(...i).forEach(o) : i && typeof i == "object" ? Object.entries(i).forEach(o) : typeof i == "string" && i.split(" ").forEach((r) => o(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const F = (...e) => rc(...e).reduce((t, [n, o]) => (o && t.push(n), t), []).join(" ");
function Uy({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return so(e, {
    className: F(t),
    style: o,
    ...i
  }, n);
}
function nh({
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
    typeof c == "string" ? /* @__PURE__ */ rt("i", { class: `icon ${c}` }) : c,
    /* @__PURE__ */ rt("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ rt("i", { class: `icon ${s}` }) : s
  ];
  return so(e, {
    className: F(t, { disabled: r, active: l }),
    title: d,
    [e === "a" ? "href" : "data-url"]: i,
    [e === "a" ? "target" : "data-target"]: h,
    style: f,
    onClick: a,
    ...o
  }, ...u);
}
function Fy({
  component: e = "div",
  className: t,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return so(e, {
    className: F(t),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function By({
  component: e = "div",
  className: t,
  style: n,
  space: o,
  flex: i,
  attrs: r,
  onClick: l,
  children: c
}) {
  return so(e, {
    className: F(t),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, c);
}
function jy(e) {
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
      m != null && (typeof m == "object" && !Ru(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ ju("div", { className: F(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? u.push(m.__html) : (m.style && Object.assign(f, m.style), m.className && d.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(s, m.attrs)) : a.push(m));
    });
  }), u.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: F(d),
    style: f,
    ...s
  }, a];
}
function jc({
  tag: e = "div",
  ...t
}) {
  const [n, o] = jy(t);
  return Pu(e, n, ...o);
}
function zy(e) {
  return /* @__PURE__ */ rt(jc, { ...e });
}
function oh({
  component: e = "div",
  className: t,
  children: n,
  style: o,
  attrs: i
}) {
  return so(e, {
    className: F(t),
    style: o,
    ...i
  }, n);
}
var ao;
let eo = (ao = class extends vo {
  constructor() {
    super(...arguments);
    M(this, "ref", Ny());
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
          return /* @__PURE__ */ rt(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, so);
        if (Vu(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: c = "item", component: _, key: h = i, rootAttrs: s, rootClass: d, rootStyle: f, rootChildren: a, ...u } = r, b = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || eo.ItemComponents[c] : _;
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
    return /* @__PURE__ */ rt(
      "li",
      {
        className: F(`${this.name}-${i.type}`, l),
        ..._,
        children: [
          /* @__PURE__ */ rt(n, { ...i }),
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
    return /* @__PURE__ */ rt(b, { class: F(this.name, l), ...u, ref: this.ref, children: [
      c && c.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, M(ao, "ItemComponents", {
  divider: Uy,
  item: nh,
  heading: Fy,
  space: By,
  custom: zy,
  basic: oh
}), M(ao, "ROOT_TAG", "menu"), M(ao, "NAME", "action-menu"), ao);
class h_ extends Se {
}
M(h_, "NAME", "actionmenu"), M(h_, "Component", eo);
function d_({
  ...e
}) {
  return /* @__PURE__ */ rt(nh, { ...e });
}
var Hc, Ar, Qe, An;
let rh = (Hc = class extends eo {
  constructor(n) {
    super(n);
    E(this, Ar, /* @__PURE__ */ new Set());
    E(this, Qe, void 0);
    E(this, An, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    H(this, Qe, n.nestedShow === void 0), y(this, Qe) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
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
    return /* @__PURE__ */ rt(
      i,
      {
        items: o,
        name: this.props.name,
        nestedShow: y(this, Qe) ? this.state.nestedShow : this.props.nestedShow,
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
    y(this, Ar).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = d_), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: y(this, An).bind(this, l, !0),
        onMouseLeave: y(this, An).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = r;
      r.onClick = (s) => {
        y(this, An).call(this, l, void 0, s), h == null || h(s);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = y(this, Qe) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!y(this, Qe))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...y(this, Ar).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    y(this, Qe) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    y(this, Qe) && this.setState({ nestedShow: !1 });
  }
}, Ar = new WeakMap(), Qe = new WeakMap(), An = new WeakMap(), M(Hc, "ItemComponents", {
  item: d_
}), Hc);
class p_ extends Se {
}
M(p_, "NAME", "actionmenunested"), M(p_, "Component", rh);
var pa, ae, sh, bo, m_, ih = {}, lh = [], Vy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Rt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ch(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Yy(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? pa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Es(e, l, o, i, null);
}
function Es(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++sh };
  return i == null && ae.vnode != null && ae.vnode(r), r;
}
function ma(e) {
  return e.children;
}
function wo(e, t) {
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
function ah(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ah(e);
  }
}
function g_(e) {
  (!e.__d && (e.__d = !0) && bo.push(e) && !Gs.__r++ || m_ !== ae.debounceRendering) && ((m_ = ae.debounceRendering) || setTimeout)(Gs);
}
function Gs() {
  for (var e; Gs.__r = bo.length; )
    e = bo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), bo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Rt({}, r)).__v = r.__v + 1, hh(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? sr(r), r.__h), qy(o, r), r.__e != l && ah(r)));
    });
}
function _h(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || lh, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Es(null, a, null, null, a) : Array.isArray(a) ? Es(ma, { children: a }, null, null, null) : a.__b > 0 ? Es(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      hh(e, a, f = f || ih, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = fh(a, _, e) : _ = uh(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = sr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && ph(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      dh(p[s], p[++s], p[++s]);
}
function fh(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? fh(o, t, n) : uh(n, o, o, i, o.__e, t));
  return t;
}
function uh(e, t, n, o, i, r) {
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
function Gy(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || qs(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || qs(e, r, t[r], n[r], o);
}
function y_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Vy.test(t) ? n : n + "px";
}
function qs(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || y_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || y_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? b_ : v_, r) : e.removeEventListener(t, r ? b_ : v_, r);
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
function v_(e) {
  this.l[e.type + !1](ae.event ? ae.event(e) : e);
}
function b_(e) {
  this.l[e.type + !0](ae.event ? ae.event(e) : e);
}
function hh(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ae.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new wo(p, g), s.constructor = v, s.render = Ky), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Rt({}, s.__s)), Rt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = ae.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = Rt(Rt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === ma && h.key == null ? h.props.children : h, _h(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Xy(n.__e, t, n, o, i, r, l, _);
    (h = ae.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ae.__e(x, t, n);
  }
}
function qy(e, t) {
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
function Xy(e, t, n, o, i, r, l, c) {
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
    if (r = r && pa.call(e.childNodes), h = (d = n.props || ih).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Gy(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, _h(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && sr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && ch(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && qs(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && qs(e, "checked", u, d.checked, !1));
  }
  return e;
}
function dh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ae.__e(o, n);
  }
}
function ph(e, t, n) {
  var o, i;
  if (ae.unmount && ae.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || dh(o, null, t)), (o = e.__c) != null) {
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
      o[i] && ph(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || ch(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ky(e, t, n) {
  return this.constructor(e, n);
}
pa = lh.slice, ae = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, sh = 0, wo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Rt({}, this.state), typeof e == "function" && (e = e(Rt({}, n), this.props)), e && Rt(n, e), e != null && this.__v && (t && this._sb.push(t), g_(this));
}, wo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), g_(this));
}, wo.prototype.render = ma, bo = [], Gs.__r = 0;
var Jy = 0;
function lo(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Jy, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ae.vnode && ae.vnode(_), _;
}
let st = class extends wo {
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
    } = this.props, $ = t || (l ? "a" : "button"), S = u == null || typeof u == "string" && !u.length || s && !f, T = p && S && !a && !b && !r && !s;
    return Yy(
      $,
      {
        className: F("btn", n, i, {
          "btn-caret": T,
          disabled: _ || s,
          active: h,
          loading: s,
          square: m === void 0 ? !T && !r && S : m
        }, o ? `size-${o}` : ""),
        title: g,
        [$ === "a" ? "href" : "data-url"]: l,
        [$ === "a" ? "target" : "data-target"]: c,
        type: $ === "button" ? "button" : void 0,
        ...w
      },
      s ? /* @__PURE__ */ lo("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof a == "string" ? /* @__PURE__ */ lo("i", { class: `icon ${a}` }) : a,
      S ? null : /* @__PURE__ */ lo("span", { className: "text", children: s ? f : u }),
      s ? null : r,
      s ? null : typeof b == "string" ? /* @__PURE__ */ lo("i", { class: `icon ${b}` }) : b,
      s ? null : p ? /* @__PURE__ */ lo("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class w_ extends Se {
}
M(w_, "NAME", "button"), M(w_, "Component", st);
var zc;
zc = { __e: function(e, t, n, o) {
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
var Zy = 0;
function Qy(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Zy, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return zc.vnode && zc.vnode(_), _;
}
var Wc;
let ga = (Wc = class extends rh {
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
    return /* @__PURE__ */ Qy("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
}, M(Wc, "NAME", "menu"), Wc);
class $_ extends Se {
}
M($_, "NAME", "menu"), M($_, "Component", ga);
let ev = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var mh, _e, gh, $o, k_, yh = {}, vh = [], tv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Dt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function bh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ac(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++gh };
  return i == null && _e.vnode != null && _e.vnode(r), r;
}
function ya(e) {
  return e.children;
}
function ko(e, t) {
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
function wh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return wh(e);
  }
}
function x_(e) {
  (!e.__d && (e.__d = !0) && $o.push(e) && !Xs.__r++ || k_ !== _e.debounceRendering) && ((k_ = _e.debounceRendering) || setTimeout)(Xs);
}
function Xs() {
  for (var e; Xs.__r = $o.length; )
    e = $o.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), $o = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Dt({}, r)).__v = r.__v + 1, Sh(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? ir(r), r.__h), ov(o, r), r.__e != l && wh(r)));
    });
}
function $h(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || vh, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ac(null, a, null, null, a) : Array.isArray(a) ? Ac(ya, { children: a }, null, null, null) : a.__b > 0 ? Ac(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Sh(e, a, f = f || yh, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = kh(a, _, e) : _ = xh(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = ir(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Eh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Ch(p[s], p[++s], p[++s]);
}
function kh(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? kh(o, t, n) : xh(n, o, o, i, o.__e, t));
  return t;
}
function xh(e, t, n, o, i, r) {
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
function nv(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ks(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ks(e, r, t[r], n[r], o);
}
function S_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || tv.test(t) ? n : n + "px";
}
function Ks(e, t, n, o, i) {
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
  this.l[e.type + !1](_e.event ? _e.event(e) : e);
}
function E_(e) {
  this.l[e.type + !0](_e.event ? _e.event(e) : e);
}
function Sh(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = _e.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new ko(p, g), s.constructor = v, s.render = sv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Dt({}, s.__s)), Dt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = _e.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = Dt(Dt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === ya && h.key == null ? h.props.children : h, $h(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = rv(n.__e, t, n, o, i, r, l, _);
    (h = _e.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), _e.__e(x, t, n);
  }
}
function ov(e, t) {
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
function rv(e, t, n, o, i, r, l, c) {
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
    if (r = r && mh.call(e.childNodes), h = (d = n.props || yh).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (nv(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, $h(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && ir(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && bh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Ks(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ks(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Ch(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    _e.__e(o, n);
  }
}
function Eh(e, t, n) {
  var o, i;
  if (_e.unmount && _e.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ch(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Eh(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || bh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function sv(e, t, n) {
  return this.constructor(e, n);
}
mh = vh.slice, _e = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, gh = 0, ko.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Dt({}, this.state), typeof e == "function" && (e = e(Dt({}, n), this.props)), e && Dt(n, e), e != null && this.__v && (t && this._sb.push(t), x_(this));
}, ko.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), x_(this));
}, ko.prototype.render = ya, $o = [], Xs.__r = 0;
var iv = 0;
function lv(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --iv, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return _e.vnode && _e.vnode(_), _;
}
var Vc, wn;
Vc = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, wn = function(e) {
  return e != null && e.constructor === void 0;
};
var cv = 0;
function _t(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --cv, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Vc.vnode && Vc.vnode(_), _;
}
var Yc;
Yc = { __e: function(e, t, n, o) {
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
var av = 0;
function sc(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --av, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Yc.vnode && Yc.vnode(_), _;
}
function _v({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ sc(st, { type: n, ...o });
}
var Ah, fe, Th, xo, A_, Lh = {}, Mh = [], fv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Nt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Rh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Tc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Th };
  return i == null && fe.vnode != null && fe.vnode(r), r;
}
function uv() {
  return { current: null };
}
function va(e) {
  return e.children;
}
function So(e, t) {
  this.props = e, this.context = t;
}
function lr(e, t) {
  if (t == null)
    return e.__ ? lr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? lr(e) : null;
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
function T_(e) {
  (!e.__d && (e.__d = !0) && xo.push(e) && !Js.__r++ || A_ !== fe.debounceRendering) && ((A_ = fe.debounceRendering) || setTimeout)(Js);
}
function Js() {
  for (var e; Js.__r = xo.length; )
    e = xo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), xo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Nt({}, r)).__v = r.__v + 1, Hh(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? lr(r), r.__h), dv(o, r), r.__e != l && Dh(r)));
    });
}
function Nh(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Mh, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Tc(null, a, null, null, a) : Array.isArray(a) ? Tc(va, { children: a }, null, null, null) : a.__b > 0 ? Tc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Hh(e, a, f = f || Lh, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Ph(a, _, e) : _ = Oh(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = lr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Ih(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Wh(p[s], p[++s], p[++s]);
}
function Ph(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Ph(o, t, n) : Oh(n, o, o, i, o.__e, t));
  return t;
}
function Oh(e, t, n, o, i, r) {
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
function hv(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Zs(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Zs(e, r, t[r], n[r], o);
}
function L_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || fv.test(t) ? n : n + "px";
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
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? R_ : M_, r) : e.removeEventListener(t, r ? R_ : M_, r);
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
function M_(e) {
  this.l[e.type + !1](fe.event ? fe.event(e) : e);
}
function R_(e) {
  this.l[e.type + !0](fe.event ? fe.event(e) : e);
}
function Hh(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = fe.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new So(p, g), s.constructor = v, s.render = mv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Nt({}, s.__s)), Nt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = fe.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = Nt(Nt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === va && h.key == null ? h.props.children : h, Nh(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = pv(n.__e, t, n, o, i, r, l, _);
    (h = fe.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), fe.__e(x, t, n);
  }
}
function dv(e, t) {
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
function pv(e, t, n, o, i, r, l, c) {
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
    if (r = r && Ah.call(e.childNodes), h = (d = n.props || Lh).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (hv(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Nh(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && lr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Rh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Zs(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Zs(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Wh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    fe.__e(o, n);
  }
}
function Ih(e, t, n) {
  var o, i;
  if (fe.unmount && fe.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Wh(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Ih(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Rh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function mv(e, t, n) {
  return this.constructor(e, n);
}
Ah = Mh.slice, fe = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Th = 0, So.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Nt({}, this.state), typeof e == "function" && (e = e(Nt({}, n), this.props)), e && Nt(n, e), e != null && this.__v && (t && this._sb.push(t), T_(this));
}, So.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), T_(this));
}, So.prototype.render = va, xo = [], Js.__r = 0;
var gv = 0;
function Uh(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --gv, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return fe.vnode && fe.vnode(_), _;
}
var ic, ne, Fh, Co, D_, Qs = {}, Bh = [], yv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Pt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function jh(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function zh(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ic.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return As(e, l, o, i, null);
}
function As(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Fh };
  return i == null && ne.vnode != null && ne.vnode(r), r;
}
function lc(e) {
  return e.children;
}
function Ts(e, t) {
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
function N_(e) {
  (!e.__d && (e.__d = !0) && Co.push(e) && !ei.__r++ || D_ !== ne.debounceRendering) && ((D_ = ne.debounceRendering) || setTimeout)(ei);
}
function ei() {
  for (var e; ei.__r = Co.length; )
    e = Co.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Co = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Pt({}, r)).__v = r.__v + 1, ba(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? cr(r), r.__h), Xh(o, r), r.__e != l && Vh(r)));
    });
}
function Yh(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Bh, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? As(null, a, null, null, a) : Array.isArray(a) ? As(lc, { children: a }, null, null, null) : a.__b > 0 ? As(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      ba(e, a, f = f || Qs, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Gh(a, _, e) : _ = qh(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = cr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Jh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Kh(p[s], p[++s], p[++s]);
}
function Gh(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Gh(o, t, n) : qh(n, o, o, i, o.__e, t));
  return t;
}
function qh(e, t, n, o, i, r) {
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
function vv(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ti(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ti(e, r, t[r], n[r], o);
}
function P_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || yv.test(t) ? n : n + "px";
}
function ti(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || P_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || P_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? H_ : O_, r) : e.removeEventListener(t, r ? H_ : O_, r);
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
function O_(e) {
  this.l[e.type + !1](ne.event ? ne.event(e) : e);
}
function H_(e) {
  this.l[e.type + !0](ne.event ? ne.event(e) : e);
}
function ba(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ne.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Ts(p, g), s.constructor = v, s.render = wv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Pt({}, s.__s)), Pt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = ne.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = Pt(Pt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === lc && h.key == null ? h.props.children : h, Yh(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = bv(n.__e, t, n, o, i, r, l, _);
    (h = ne.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ne.__e(x, t, n);
  }
}
function Xh(e, t) {
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
function bv(e, t, n, o, i, r, l, c) {
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
    if (r = r && ic.call(e.childNodes), h = (d = n.props || Qs).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (vv(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Yh(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && cr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && jh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && ti(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ti(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Kh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ne.__e(o, n);
  }
}
function Jh(e, t, n) {
  var o, i;
  if (ne.unmount && ne.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Kh(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Jh(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || jh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function wv(e, t, n) {
  return this.constructor(e, n);
}
function $v(e, t, n) {
  var o, i, r;
  ne.__ && ne.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], ba(t, e = (!o && n || t).__k = zh(lc, null, [e]), i || Qs, Qs, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? ic.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), Xh(r, e);
}
ic = Bh.slice, ne = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Fh = 0, Ts.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pt({}, this.state), typeof e == "function" && (e = e(Pt({}, n), this.props)), e && Pt(n, e), e != null && this.__v && (t && this._sb.push(t), N_(this));
}, Ts.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), N_(this));
}, Ts.prototype.render = lc, Co = [], ei.__r = 0;
function kv(e) {
  return e.button === 2;
}
var xv = 0;
function Sv(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --xv, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ne.vnode && ne.vnode(_), _;
}
function wa(e) {
  return e.split("-")[1];
}
function Zh(e) {
  return e === "y" ? "height" : "width";
}
function ar(e) {
  return e.split("-")[0];
}
function Qh(e) {
  return ["top", "bottom"].includes(ar(e)) ? "x" : "y";
}
function W_(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = Qh(t), _ = Zh(c), h = o[_] / 2 - i[_] / 2, s = ar(t), d = c === "x";
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
  switch (wa(t)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Cv = async (e, t, n) => {
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
  } = W_(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
      y: w,
      data: $,
      reset: S
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
        ...$
      }
    }, S && u <= 50) {
      u++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (h = S.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : S.rects), {
        x: s,
        y: d
      } = W_(h, f, _)), b = -1;
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
function Ev(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Av(e) {
  return typeof e != "number" ? Ev(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ni(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function Tv(e, t) {
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
  } = t, u = Av(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = ni(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = ni(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - S.top + u.top) / $.y,
    bottom: (S.bottom - m.bottom + u.bottom) / $.y,
    left: (m.left - S.left + u.left) / $.x,
    right: (S.right - m.right + u.right) / $.x
  };
}
const Lv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function oi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Lv[t]);
}
function Mv(e, t, n) {
  n === void 0 && (n = !1);
  const o = wa(e), i = Qh(e), r = Zh(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = oi(l)), {
    main: l,
    cross: oi(l)
  };
}
const Rv = {
  start: "end",
  end: "start"
};
function Gc(e) {
  return e.replace(/start|end/g, (t) => Rv[t]);
}
function Dv(e) {
  const t = oi(e);
  return [Gc(e), t, Gc(t)];
}
function Nv(e, t, n) {
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
function Pv(e, t, n, o) {
  const i = wa(e);
  let r = Nv(ar(e), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), t && (r = r.concat(r.map(Gc)))), r;
}
const ed = function(e) {
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
      } = e, p = ar(o), m = ar(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [oi(l)] : Dv(l));
      !d && a !== "none" && w.push(...Pv(l, u, a, g));
      const $ = [l, ...w], S = await Tv(t, b), T = [];
      let A = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && T.push(S[p]), s) {
        const {
          main: R,
          cross: V
        } = Mv(o, r, g);
        T.push(S[R], S[V]);
      }
      if (A = [...A, {
        placement: o,
        overflows: T
      }], !T.every((R) => R <= 0)) {
        var v;
        const R = (((v = i.flip) == null ? void 0 : v.index) || 0) + 1, V = $[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: A
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = A.map((C) => [C, C.overflows.filter((k) => k > 0).reduce((k, N) => k + N, 0)]).sort((C, k) => C[1] - k[1])[0]) == null ? void 0 : x[0].placement;
            D && (B = D);
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
function Fe(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function it(e) {
  return Fe(e).getComputedStyle(e);
}
function Xt(e) {
  return nd(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ds;
function td() {
  if (ds)
    return ds;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ds = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ds) : navigator.userAgent;
}
function yt(e) {
  return e instanceof Fe(e).HTMLElement;
}
function qe(e) {
  return e instanceof Fe(e).Element;
}
function nd(e) {
  return e instanceof Fe(e).Node;
}
function I_(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Fe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function cc(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = it(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i);
}
function Ov(e) {
  return ["table", "td", "th"].includes(Xt(e));
}
function $a(e) {
  const t = /firefox/i.test(td()), n = it(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function od() {
  return !/^((?!chrome|android).)*safari/i.test(td());
}
function ka(e) {
  return ["html", "body", "#document"].includes(Xt(e));
}
const U_ = Math.min, Eo = Math.max, ri = Math.round;
function rd(e) {
  const t = it(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, l = ri(n) !== i || ri(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function sd(e) {
  return qe(e) ? e : e.contextElement;
}
const id = {
  x: 1,
  y: 1
};
function $n(e) {
  const t = sd(e);
  if (!yt(t))
    return id;
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = rd(t);
  let l = (r ? ri(n.width) : n.width) / o, c = (r ? ri(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function mn(e, t, n, o) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = sd(e);
  let _ = id;
  t && (o ? qe(o) && (_ = $n(o)) : _ = $n(e));
  const h = c ? Fe(c) : window, s = !od() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Fe(c), p = o && qe(o) ? Fe(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = $n(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat($.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat($.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Fe(m).frameElement;
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
function Qt(e) {
  return ((nd(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ac(e) {
  return qe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function ld(e) {
  return mn(Qt(e)).left + ac(e).scrollLeft;
}
function Hv(e, t, n) {
  const o = yt(t), i = Qt(t), r = mn(e, !0, n === "fixed", t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Xt(t) !== "body" || cc(i)) && (l = ac(t)), yt(t)) {
      const _ = mn(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      i && (c.x = ld(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function _r(e) {
  if (Xt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node
    e.assignedSlot || // DOM Element detected
    e.parentNode || // ShadowRoot detected
    (I_(e) ? e.host : null) || // Fallback
    Qt(e)
  );
  return I_(t) ? t.host : t;
}
function F_(e) {
  return !yt(e) || it(e).position === "fixed" ? null : e.offsetParent;
}
function Wv(e) {
  let t = _r(e);
  for (; yt(t) && !ka(t); ) {
    if ($a(t))
      return t;
    t = _r(t);
  }
  return null;
}
function B_(e) {
  const t = Fe(e);
  let n = F_(e);
  for (; n && Ov(n) && it(n).position === "static"; )
    n = F_(n);
  return n && (Xt(n) === "html" || Xt(n) === "body" && it(n).position === "static" && !$a(n)) ? t : n || Wv(e) || t;
}
function Iv(e) {
  return rd(e);
}
function Uv(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const i = yt(n), r = Qt(n);
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
  if ((i || !i && o !== "fixed") && ((Xt(n) !== "body" || cc(r)) && (l = ac(n)), yt(n))) {
    const h = mn(n);
    c = $n(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - l.scrollLeft * c.x + _.x,
    y: t.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Fv(e, t) {
  const n = Fe(e), o = Qt(e), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = od();
    (h || !h && t === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Bv(e) {
  var t;
  const n = Qt(e), o = ac(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = Eo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Eo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + ld(e);
  const _ = -o.scrollTop;
  return it(i || n).direction === "rtl" && (c += Eo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function cd(e) {
  const t = _r(e);
  return ka(t) ? e.ownerDocument.body : yt(t) && cc(t) ? t : cd(t);
}
function Ao(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = cd(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Fe(o);
  return i ? t.concat(r, r.visualViewport || [], cc(o) ? o : []) : t.concat(o, Ao(o));
}
function jv(e, t) {
  const n = mn(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, r = yt(e) ? $n(e) : {
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
function j_(e, t, n) {
  return t === "viewport" ? ni(Fv(e, n)) : qe(t) ? jv(t, n) : ni(Bv(Qt(e)));
}
function zv(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Ao(e).filter((c) => qe(c) && Xt(c) !== "body"), i = null;
  const r = it(e).position === "fixed";
  let l = r ? _r(e) : e;
  for (; qe(l) && !ka(l); ) {
    const c = it(l), _ = $a(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = _r(l);
  }
  return t.set(e, o), o;
}
function Vv(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? zv(t, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = j_(t, s, i);
    return h.top = Eo(d.top, h.top), h.right = U_(d.right, h.right), h.bottom = U_(d.bottom, h.bottom), h.left = Eo(d.left, h.left), h;
  }, j_(t, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Yv = {
  getClippingRect: Vv,
  convertOffsetParentRelativeRectToViewportRelativeRect: Uv,
  isElement: qe,
  getDimensions: Iv,
  getOffsetParent: B_,
  getDocumentElement: Qt,
  getScale: $n,
  async getElementRects(e) {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const i = this.getOffsetParent || B_, r = this.getDimensions;
    return {
      reference: Hv(t, await i(n), o),
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
function Gv(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...qe(e) ? Ao(e) : e.contextElement ? Ao(e.contextElement) : [], ...Ao(t)] : [];
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
  let d, f = c ? mn(e) : null;
  c && a();
  function a() {
    const u = mn(e);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const ad = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Yv,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return Cv(e, t, {
    ...i,
    platform: r
  });
};
let qv = class extends ga {
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
      middleware: [ed()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var t;
    return (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  _createPopper() {
    const t = this._getPopperOptions();
    this.ref.current && ad(this._getPopperElement(), this.ref.current, t).then(({ x: n, y: o }) => {
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
    return /* @__PURE__ */ Sv("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var kt, Tn, Tr, Lr, Vi, _d, Yi, fd;
class De extends Ze {
  constructor() {
    super(...arguments);
    E(this, Vi);
    E(this, Yi);
    E(this, kt, void 0);
    E(this, Tn, void 0);
    E(this, Tr, void 0);
    M(this, "arrowEl");
    E(this, Lr, void 0);
  }
  get isShown() {
    var n;
    return (n = y(this, kt)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return y(this, kt) || this._ensureMenu();
  }
  get trigger() {
    return y(this, Tr) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, Tr, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var o, i;
    return (o = y(this, Lr)) == null || o.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((i = y(this, kt)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    super.destroy(), (n = y(this, kt)) == null || n.remove();
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
    return i.style.width = "max-content", i.style.position = this.options.strategy, i.style.top = "0", i.style.left = "0", H(this, kt, i), i;
  }
  _getPopperOptions() {
    var r;
    const { placement: n, strategy: o } = this.options, i = {
      middleware: [],
      placement: n,
      strategy: o
    };
    return this.options.flip && ((r = i.middleware) == null || r.push(ed())), i;
  }
  _createPopper() {
    const n = this._getPopperOptions(), o = this._getPopperElement();
    H(this, Lr, Gv(o, this.menu, () => {
      ad(o, this.menu, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
        Object.assign(this.menu.style, {
          left: `${i}px`,
          top: `${r}px`
        });
        const _ = c.split("-")[0], h = W(this, Vi, _d).call(this, _);
        if (l.arrow && this.arrowEl) {
          const { x: s, y: d } = l.arrow;
          Object.assign(this.arrowEl.style, {
            left: s != null ? `${s}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...W(this, Yi, fd).call(this, _)
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : ($v(zh(qv, n), this.menu), !0);
  }
  _getPopperElement() {
    return y(this, Tn) || H(this, Tn, {
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
    }), y(this, Tn);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)) || o && kv(o))
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
kt = new WeakMap(), Tn = new WeakMap(), Tr = new WeakMap(), Lr = new WeakMap(), Vi = new WeakSet(), _d = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Yi = new WeakSet(), fd = function(n) {
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
}, M(De, "NAME", "contextmenu"), M(De, "EVENTS", !0), M(De, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), M(De, "MENU_CLASS", "contextmenu"), M(De, "CLASS_SHOW", "show"), M(De, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  const t = e.target;
  if (t.closest(`.${De.MENU_CLASS}`))
    return;
  const n = t.closest(De.MENU_SELECTOR);
  n && (De.ensure(n).show(e), e.preventDefault());
});
document.addEventListener("click", De.clear.bind(De));
function ud(e) {
  return e.split("-")[1];
}
function Xv(e) {
  return e === "y" ? "height" : "width";
}
function hd(e) {
  return e.split("-")[0];
}
function dd(e) {
  return ["top", "bottom"].includes(hd(e)) ? "x" : "y";
}
function Kv(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Jv(e) {
  return typeof e != "number" ? Kv(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
const Zv = Math.min, Qv = Math.max;
function eb(e, t, n) {
  return Qv(e, Zv(t, n));
}
const tb = (e) => ({
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
    const h = Jv(o), s = {
      x: i,
      y: r
    }, d = dd(l), f = Xv(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const $ = p / 2 - m / 2, S = h[u], T = w - a[f] - h[b], A = w / 2 - a[f] / 2 + $, v = eb(S, A, T), R = ud(l) != null && A != v && c.reference[f] / 2 - (A < S ? h[u] : h[b]) - a[f] / 2 < 0 ? A < S ? S - A : T - A : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: v,
        centerOffset: A - v
      }
    };
  }
});
async function nb(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = hd(n), c = ud(n), _ = dd(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof t == "function" ? t(e) : t;
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
const ob = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, i = await nb(t, e);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
var Ln, Mn, Rn, Gi, pd;
const qa = class extends De {
  constructor() {
    super(...arguments);
    E(this, Gi);
    E(this, Ln, !1);
    E(this, Mn, 0);
    M(this, "hideLater", () => {
      y(this, Rn).call(this), H(this, Mn, window.setTimeout(this.hide.bind(this), 100));
    });
    E(this, Rn, () => {
      clearTimeout(y(this, Mn)), H(this, Mn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && qa.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!y(this, Ln) && this.isHover && W(this, Gi, pd).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    y(this, Ln) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", y(this, Rn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 8 : 0;
  }
  _getPopperOptions() {
    var i, r;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && this.arrowEl && ((i = n.middleware) == null || i.push(ob(o)), (r = n.middleware) == null || r.push(tb({ element: this.arrowEl }))), n;
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
let Te = qa;
Ln = new WeakMap(), Mn = new WeakMap(), Rn = new WeakMap(), Gi = new WeakSet(), pd = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", y(this, Rn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Ln, !0);
}, M(Te, "NAME", "dropdown"), M(Te, "MENU_CLASS", "dropdown-menu"), M(Te, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), M(Te, "DEFAULT", {
  ...De.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Te.MENU_SELECTOR);
  if (n) {
    const o = Te.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Te.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(Te.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Te.ensure(n);
  o.isHover && o.show();
});
const rb = (e) => {
  const t = document.getElementsByClassName("with-dropdown-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(Te.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || Te.clear({ event: e });
};
window.addEventListener("scroll", rb, !0);
var Mr, Dn;
class sb extends So {
  constructor(n) {
    var o;
    super(n);
    E(this, Mr, void 0);
    E(this, Dn, uv());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return y(this, Dn);
  }
  get triggerElement() {
    return y(this, Dn).current;
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
    }), H(this, Mr, Te.ensure(this.triggerElement, {
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
    (n = y(this, Mr)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: i, ...r } = this.props;
    return {
      className: F("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: y(this, Dn)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ Uh("div", { ...o, children: n });
  }
}
Mr = new WeakMap(), Dn = new WeakMap();
class ib extends sb {
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
    return o.caret = i, /* @__PURE__ */ Uh(st, { ...o });
  }
}
function md({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ sc(ib, { type: n, ...o });
}
var xa, ue, gd, yd, To, z_, vd = {}, bd = [], lb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ot(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function wd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function cb(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? xa.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Ls(e, l, o, i, null);
}
function Ls(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++gd };
  return i == null && ue.vnode != null && ue.vnode(r), r;
}
function Sa(e) {
  return e.children;
}
function Lo(e, t) {
  this.props = e, this.context = t;
}
function fr(e, t) {
  if (t == null)
    return e.__ ? fr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? fr(e) : null;
}
function $d(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return $d(e);
  }
}
function V_(e) {
  (!e.__d && (e.__d = !0) && To.push(e) && !si.__r++ || z_ !== ue.debounceRendering) && ((z_ = ue.debounceRendering) || setTimeout)(si);
}
function si() {
  for (var e; si.__r = To.length; )
    e = To.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), To = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ot({}, r)).__v = r.__v + 1, Cd(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? fr(r), r.__h), _b(o, r), r.__e != l && $d(r)));
    });
}
function kd(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || bd, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ls(null, a, null, null, a) : Array.isArray(a) ? Ls(Sa, { children: a }, null, null, null) : a.__b > 0 ? Ls(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Cd(e, a, f = f || vd, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = xd(a, _, e) : _ = Sd(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = fr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Ad(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Ed(p[s], p[++s], p[++s]);
}
function xd(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? xd(o, t, n) : Sd(n, o, o, i, o.__e, t));
  return t;
}
function Sd(e, t, n, o, i, r) {
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
function ab(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ii(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ii(e, r, t[r], n[r], o);
}
function Y_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || lb.test(t) ? n : n + "px";
}
function ii(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Y_(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Y_(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? q_ : G_, r) : e.removeEventListener(t, r ? q_ : G_, r);
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
function G_(e) {
  this.l[e.type + !1](ue.event ? ue.event(e) : e);
}
function q_(e) {
  this.l[e.type + !0](ue.event ? ue.event(e) : e);
}
function Cd(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ue.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Lo(p, g), s.constructor = v, s.render = ub), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ot({}, s.__s)), Ot(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = ue.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ot(Ot({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Sa && h.key == null ? h.props.children : h, kd(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = fb(n.__e, t, n, o, i, r, l, _);
    (h = ue.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ue.__e(x, t, n);
  }
}
function _b(e, t) {
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
function fb(e, t, n, o, i, r, l, c) {
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
    if (r = r && xa.call(e.childNodes), h = (d = n.props || vd).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (ab(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, kd(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && fr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && wd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && ii(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ii(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Ed(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ue.__e(o, n);
  }
}
function Ad(e, t, n) {
  var o, i;
  if (ue.unmount && ue.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ed(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Ad(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || wd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ub(e, t, n) {
  return this.constructor(e, n);
}
xa = bd.slice, ue = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, gd = 0, yd = function(e) {
  return e != null && e.constructor === void 0;
}, Lo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ot({}, this.state), typeof e == "function" && (e = e(Ot({}, n), this.props)), e && Ot(n, e), e != null && this.__v && (t && this._sb.push(t), V_(this));
}, Lo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), V_(this));
}, Lo.prototype.render = Sa, To = [], si.__r = 0;
var hb = 0;
function X_(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --hb, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ue.vnode && ue.vnode(_), _;
}
let Td = class extends Lo {
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
    return /* @__PURE__ */ X_(st, { ...i }, o);
  }
  renderItem(t, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = t, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), i) {
      const _ = i.call(this, c, cb);
      if (yd(_))
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
    return /* @__PURE__ */ X_(
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
function db({
  key: e,
  type: t,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ sc(Td, { type: n, ...o });
}
var bn;
let to = (bn = class extends eo {
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
    return /* @__PURE__ */ sc(t, { ...r });
  }
}, M(bn, "ItemComponents", {
  item: _v,
  dropdown: md,
  "btn-group": db
}), M(bn, "ROOT_TAG", "nav"), M(bn, "NAME", "toolbar"), M(bn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), bn);
function pb({
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
  c === !0 ? d = /* @__PURE__ */ _t(st, { className: "alert-close btn ghost", square: !0, onClick: _, children: /* @__PURE__ */ _t("span", { class: "close" }) }) : wn(c) ? d = c : typeof c == "object" && (d = /* @__PURE__ */ _t(st, { ...c, onClick: _ }));
  const f = wn(n) ? n : n ? /* @__PURE__ */ _t(to, { ...n }) : null;
  return /* @__PURE__ */ _t("div", { className: F("alert", e), style: t, ...s, children: [
    wn(h) ? h : typeof h == "string" ? /* @__PURE__ */ _t("i", { className: `icon ${h}` }) : null,
    wn(i) ? i : /* @__PURE__ */ _t("div", { className: F("alert-content", r), children: [
      wn(o) ? o : o && /* @__PURE__ */ _t("div", { className: "alert-heading", children: o }),
      /* @__PURE__ */ _t("div", { className: "alert-text", children: i }),
      o ? f : null
    ] }),
    o ? null : f,
    d,
    l
  ] });
}
function mb(e) {
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
let gb = class extends ko {
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
    return /* @__PURE__ */ lv(
      pb,
      {
        className: F("messager", _, i, l === !0 ? mb(r) : l, c ? "in" : ""),
        ...s
      }
    );
  }
};
var Nn, Rs;
class Ms extends Se {
  constructor() {
    super(...arguments);
    E(this, Nn);
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
    this._show || (this.emit("show"), this.render(), this._show = !0, W(this, Nn, Rs).call(this, () => {
      this.emit("shown");
      const { time: n } = this.options;
      n && W(this, Nn, Rs).call(this, () => this.hide(), n);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), W(this, Nn, Rs).call(this, () => {
      this.emit("hidden");
    }));
  }
}
Nn = new WeakSet(), Rs = function(n, o = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, o);
}, M(Ms, "NAME", "MessagerItem"), M(Ms, "EVENTS", !0), M(Ms, "Component", gb);
var cn, Pn, mt, qi, Ld, Xi, Md;
const Xa = class extends Ze {
  constructor() {
    super(...arguments);
    E(this, qi);
    E(this, Xi);
    E(this, cn, void 0);
    E(this, Pn, ev(6));
    E(this, mt, void 0);
  }
  get id() {
    return y(this, Pn);
  }
  get isShown() {
    var n;
    return !!((n = y(this, mt)) != null && n.isShown);
  }
  show(n) {
    this.setOptions(n), W(this, qi, Ld).call(this).show();
  }
  hide() {
    var n;
    (n = y(this, mt)) == null || n.hide();
  }
  static show(n) {
    typeof n == "string" && (n = { content: n });
    const { container: o, ...i } = n, r = new Xa(o || "body", i);
    return r.show(), r;
  }
};
let ps = Xa;
cn = new WeakMap(), Pn = new WeakMap(), mt = new WeakMap(), qi = new WeakSet(), Ld = function() {
  if (y(this, mt))
    y(this, mt).setOptions(this.options);
  else {
    const n = W(this, Xi, Md).call(this), o = new Ms(n, this.options);
    o.on("hidden", () => {
      o.destroy(), n.remove(), H(this, cn, void 0);
    }), H(this, mt, o);
  }
  return y(this, mt);
}, Xi = new WeakSet(), Md = function() {
  if (y(this, cn))
    return y(this, cn);
  const { placement: n = "top" } = this.options;
  let o = this.element.querySelector(`.messagers-${n}`);
  o || (o = document.createElement("div"), o.className = `messagers messagers-${n}`, this.element.appendChild(o));
  let i = o.querySelector(`#messager-${y(this, Pn)}`);
  return i || (i = document.createElement("div"), i.className = "messager-holder", i.id = `messager-${y(this, Pn)}`, o.appendChild(i), H(this, cn, i)), i;
}, M(ps, "NAME", "messager"), M(ps, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
var Rd, he, Dd, Mo, K_, Nd = {}, Pd = [], yb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ht(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Od(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Lc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Dd };
  return i == null && he.vnode != null && he.vnode(r), r;
}
function Ca(e) {
  return e.children;
}
function Ro(e, t) {
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
function Hd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Hd(e);
  }
}
function J_(e) {
  (!e.__d && (e.__d = !0) && Mo.push(e) && !li.__r++ || K_ !== he.debounceRendering) && ((K_ = he.debounceRendering) || setTimeout)(li);
}
function li() {
  for (var e; li.__r = Mo.length; )
    e = Mo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Mo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ht({}, r)).__v = r.__v + 1, Fd(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? ur(r), r.__h), bb(o, r), r.__e != l && Hd(r)));
    });
}
function Wd(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Pd, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Lc(null, a, null, null, a) : Array.isArray(a) ? Lc(Ca, { children: a }, null, null, null) : a.__b > 0 ? Lc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Fd(e, a, f = f || Nd, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Id(a, _, e) : _ = Ud(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = ur(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && jd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Bd(p[s], p[++s], p[++s]);
}
function Id(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Id(o, t, n) : Ud(n, o, o, i, o.__e, t));
  return t;
}
function Ud(e, t, n, o, i, r) {
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
function vb(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ci(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ci(e, r, t[r], n[r], o);
}
function Z_(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || yb.test(t) ? n : n + "px";
}
function ci(e, t, n, o, i) {
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
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? ef : Q_, r) : e.removeEventListener(t, r ? ef : Q_, r);
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
function Q_(e) {
  this.l[e.type + !1](he.event ? he.event(e) : e);
}
function ef(e) {
  this.l[e.type + !0](he.event ? he.event(e) : e);
}
function Fd(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = he.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Ro(p, g), s.constructor = v, s.render = $b), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ht({}, s.__s)), Ht(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = he.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ht(Ht({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Ca && h.key == null ? h.props.children : h, Wd(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = wb(n.__e, t, n, o, i, r, l, _);
    (h = he.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), he.__e(x, t, n);
  }
}
function bb(e, t) {
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
function wb(e, t, n, o, i, r, l, c) {
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
    if (r = r && Rd.call(e.childNodes), h = (d = n.props || Nd).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (vb(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Wd(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && ur(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Od(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && ci(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ci(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Bd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    he.__e(o, n);
  }
}
function jd(e, t, n) {
  var o, i;
  if (he.unmount && he.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Bd(o, null, t)), (o = e.__c) != null) {
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
      o[i] && jd(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Od(e.__e), e.__ = e.__e = e.__d = void 0;
}
function $b(e, t, n) {
  return this.constructor(e, n);
}
Rd = Pd.slice, he = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Dd = 0, Ro.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ht({}, this.state), typeof e == "function" && (e = e(Ht({}, n), this.props)), e && Ht(n, e), e != null && this.__v && (t && this._sb.push(t), J_(this));
}, Ro.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), J_(this));
}, Ro.prototype.render = Ca, Mo = [], li.__r = 0;
var kb = 0;
function ms(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --kb, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return he.vnode && he.vnode(_), _;
}
var $s;
let xb = ($s = class extends Ro {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: o, circleBgColor: i, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ ms("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ ms("circle", { cx: c, cy: c, r: l, stroke: i, "stroke-width": o }),
      /* @__PURE__ */ ms("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - t) / 100, "stroke-width": o }),
      /* @__PURE__ */ ms("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(t) })
    ] });
  }
}, M($s, "NAME", "zui.progress-circle"), M($s, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), $s);
class tf extends Se {
}
M(tf, "NAME", "table-sorter"), M(tf, "Component", xb);
var Ea, de, zd, Do, nf, Vd = {}, Yd = [], Sb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Wt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Gd(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Cb(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ea.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Ds(e, l, o, i, null);
}
function Ds(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++zd };
  return i == null && de.vnode != null && de.vnode(r), r;
}
function Aa(e) {
  return e.children;
}
function No(e, t) {
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
function qd(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return qd(e);
  }
}
function of(e) {
  (!e.__d && (e.__d = !0) && Do.push(e) && !ai.__r++ || nf !== de.debounceRendering) && ((nf = de.debounceRendering) || setTimeout)(ai);
}
function ai() {
  for (var e; ai.__r = Do.length; )
    e = Do.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Do = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Wt({}, r)).__v = r.__v + 1, Zd(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? hr(r), r.__h), Ab(o, r), r.__e != l && qd(r)));
    });
}
function Xd(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Yd, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ds(null, a, null, null, a) : Array.isArray(a) ? Ds(Aa, { children: a }, null, null, null) : a.__b > 0 ? Ds(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Zd(e, a, f = f || Vd, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Kd(a, _, e) : _ = Jd(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = hr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && ep(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Qd(p[s], p[++s], p[++s]);
}
function Kd(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Kd(o, t, n) : Jd(n, o, o, i, o.__e, t));
  return t;
}
function Jd(e, t, n, o, i, r) {
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
function Eb(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || _i(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || _i(e, r, t[r], n[r], o);
}
function rf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Sb.test(t) ? n : n + "px";
}
function _i(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || rf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || rf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? lf : sf, r) : e.removeEventListener(t, r ? lf : sf, r);
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
function sf(e) {
  this.l[e.type + !1](de.event ? de.event(e) : e);
}
function lf(e) {
  this.l[e.type + !0](de.event ? de.event(e) : e);
}
function Zd(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = de.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new No(p, g), s.constructor = v, s.render = Lb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Wt({}, s.__s)), Wt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = de.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = Wt(Wt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Aa && h.key == null ? h.props.children : h, Xd(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Tb(n.__e, t, n, o, i, r, l, _);
    (h = de.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), de.__e(x, t, n);
  }
}
function Ab(e, t) {
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
function Tb(e, t, n, o, i, r, l, c) {
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
    if (r = r && Ea.call(e.childNodes), h = (d = n.props || Vd).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Eb(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Xd(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && hr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Gd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && _i(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && _i(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Qd(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    de.__e(o, n);
  }
}
function ep(e, t, n) {
  var o, i;
  if (de.unmount && de.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Qd(o, null, t)), (o = e.__c) != null) {
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
      o[i] && ep(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Gd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Lb(e, t, n) {
  return this.constructor(e, n);
}
Ea = Yd.slice, de = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, zd = 0, No.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Wt({}, this.state), typeof e == "function" && (e = e(Wt({}, n), this.props)), e && Wt(n, e), e != null && this.__v && (t && this._sb.push(t), of(this));
}, No.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), of(this));
}, No.prototype.render = Aa, Do = [], ai.__r = 0;
var Mb = 0;
function gs(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Mb, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return de.vnode && de.vnode(_), _;
}
let Rb = class extends No {
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
      children: i,
      text: r,
      icon: l,
      surffixIcon: c,
      disabled: _,
      defaultChecked: h,
      onChange: s,
      ...d
    } = this.props, f = this.state.checked ? 1 : 0, a = n || "div", u = typeof l == "string" ? /* @__PURE__ */ gs("i", { class: `icon ${l}` }) : l, b = typeof c == "string" ? /* @__PURE__ */ gs("i", { class: `icon ${c}` }) : c, p = [
      /* @__PURE__ */ gs("input", { onChange: s, type: "checkbox", value: f, checked: !!this.state.checked }),
      /* @__PURE__ */ gs("label", { children: [
        u,
        r,
        b
      ] })
    ];
    return Cb(
      a,
      {
        className: F("switch", o, { disabled: _ }),
        onClick: this.handleOnClick,
        ...d
      },
      ...p,
      i
    );
  }
};
class cf extends Se {
}
M(cf, "NAME", "switch"), M(cf, "Component", Rb);
function Db(e) {
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
function Nb(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e);
}
function Pb(e, t) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const Wk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: F,
  domReady: Nb,
  getClassList: rc,
  isElementVisible: Pb,
  selectText: Db
}, Symbol.toStringTag, { value: "Module" }));
let Ob = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Rr, xt, et, On, Hn, Ns;
const Ka = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    E(this, Hn);
    E(this, Rr, void 0);
    E(this, xt, void 0);
    E(this, et, void 0);
    E(this, On, void 0);
    H(this, Rr, n), H(this, xt, `ZUI_STORE:${t ?? Ob()}`), H(this, et, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return y(this, Rr);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (y(this, On) || H(this, On, new Ka(y(this, xt), "session")), y(this, On));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const o = y(this, et).getItem(W(this, Hn, Ns).call(this, t));
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
    y(this, et).setItem(W(this, Hn, Ns).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    y(this, et).removeItem(W(this, Hn, Ns).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < y(this, et).length; n++) {
      const o = y(this, et).key(n);
      if (o != null && o.startsWith(y(this, xt))) {
        const i = y(this, et).getItem(o);
        typeof i == "string" && t(o.substring(y(this, xt).length + 1), JSON.parse(i));
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
let fi = Ka;
Rr = new WeakMap(), xt = new WeakMap(), et = new WeakMap(), On = new WeakMap(), Hn = new WeakSet(), Ns = function(t) {
  return `${y(this, xt)}:${t}`;
};
const Hb = new fi("DEFAULT");
function Wb(e, t = "local") {
  return new fi(e, t);
}
Object.assign(Hb, { create: Wb });
var tp, pe, np, Po, af, op = {}, rp = [], Ib = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function It(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function sp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Mc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++np };
  return i == null && pe.vnode != null && pe.vnode(r), r;
}
function Ta(e) {
  return e.children;
}
function Oo(e, t) {
  this.props = e, this.context = t;
}
function dr(e, t) {
  if (t == null)
    return e.__ ? dr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? dr(e) : null;
}
function ip(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ip(e);
  }
}
function _f(e) {
  (!e.__d && (e.__d = !0) && Po.push(e) && !ui.__r++ || af !== pe.debounceRendering) && ((af = pe.debounceRendering) || setTimeout)(ui);
}
function ui() {
  for (var e; ui.__r = Po.length; )
    e = Po.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Po = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = It({}, r)).__v = r.__v + 1, _p(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? dr(r), r.__h), Fb(o, r), r.__e != l && ip(r)));
    });
}
function lp(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || rp, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Mc(null, a, null, null, a) : Array.isArray(a) ? Mc(Ta, { children: a }, null, null, null) : a.__b > 0 ? Mc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      _p(e, a, f = f || op, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = cp(a, _, e) : _ = ap(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = dr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && up(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      fp(p[s], p[++s], p[++s]);
}
function cp(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? cp(o, t, n) : ap(n, o, o, i, o.__e, t));
  return t;
}
function ap(e, t, n, o, i, r) {
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
function Ub(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || hi(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || hi(e, r, t[r], n[r], o);
}
function ff(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ib.test(t) ? n : n + "px";
}
function hi(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ff(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ff(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? hf : uf, r) : e.removeEventListener(t, r ? hf : uf, r);
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
function uf(e) {
  this.l[e.type + !1](pe.event ? pe.event(e) : e);
}
function hf(e) {
  this.l[e.type + !0](pe.event ? pe.event(e) : e);
}
function _p(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = pe.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Oo(p, g), s.constructor = v, s.render = jb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = It({}, s.__s)), It(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = pe.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = It(It({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Ta && h.key == null ? h.props.children : h, lp(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Bb(n.__e, t, n, o, i, r, l, _);
    (h = pe.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), pe.__e(x, t, n);
  }
}
function Fb(e, t) {
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
function Bb(e, t, n, o, i, r, l, c) {
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
    if (r = r && tp.call(e.childNodes), h = (d = n.props || op).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Ub(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, lp(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && dr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && sp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && hi(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && hi(e, "checked", u, d.checked, !1));
  }
  return e;
}
function fp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    pe.__e(o, n);
  }
}
function up(e, t, n) {
  var o, i;
  if (pe.unmount && pe.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || fp(o, null, t)), (o = e.__c) != null) {
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
      o[i] && up(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || sp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function jb(e, t, n) {
  return this.constructor(e, n);
}
tp = rp.slice, pe = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, np = 0, Oo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = It({}, this.state), typeof e == "function" && (e = e(It({}, n), this.props)), e && It(n, e), e != null && this.__v && (t && this._sb.push(t), _f(this));
}, Oo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), _f(this));
}, Oo.prototype.render = Ta, Po = [], ui.__r = 0;
var zb = 0;
function Rc(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --zb, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pe.vnode && pe.vnode(_), _;
}
function Vb(e) {
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
function Yb(e) {
  const [t, n, o] = typeof e == "string" ? Vb(e) : e;
  return t * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function df(e, t) {
  return Yb(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function pf(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function Gb(e, t, n) {
  e = e % 360 / 360, t = pf(t), n = pf(n);
  const o = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? i + (o - i) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? i + (o - i) * (2 / 3 - l) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function qb(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function Xb(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= t ? e : e.substring(0, t), e;
}
let Kb = class extends Oo {
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
    let $;
    if (d)
      m.push("has-img"), $ = /* @__PURE__ */ Rc("img", { className: "avatar-img", src: d, alt: _ });
    else if (_ != null && _.length) {
      const S = Xb(_, s);
      if (m.push("has-text", `has-text-${S.length}`), l)
        !c && l && (g.color = df(l));
      else {
        const A = h ?? _, v = (typeof A == "number" ? A : qb(A)) * f % 360;
        if (g.background = `hsl(${v},${a * 100}%,${u * 100}%)`, !c) {
          const x = Gb(v, a, u);
          g.color = df(x);
        }
      }
      let T;
      w && w < 14 * S.length && (T = { transform: `scale(${w / (14 * S.length)})`, whiteSpace: "nowrap" }), $ = /* @__PURE__ */ Rc("div", { "data-actualSize": w, className: "avatar-text", style: T, children: S });
    }
    return /* @__PURE__ */ Rc(
      "div",
      {
        className: F(m),
        style: g,
        ...p,
        children: [
          $,
          b
        ]
      }
    );
  }
};
class mf extends Se {
}
M(mf, "NAME", "avatar"), M(mf, "Component", Kb);
class gf extends Se {
}
M(gf, "NAME", "btngroup"), M(gf, "Component", Td);
var _c, oe, hp, Ho, yf, di = {}, dp = [], Jb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ut(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function pp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function pr(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? _c.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Ps(e, l, o, i, null);
}
function Ps(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++hp };
  return i == null && oe.vnode != null && oe.vnode(r), r;
}
function Zb() {
  return { current: null };
}
function fc(e) {
  return e.children;
}
function Wo(e, t) {
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
function mp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return mp(e);
  }
}
function vf(e) {
  (!e.__d && (e.__d = !0) && Ho.push(e) && !pi.__r++ || yf !== oe.debounceRendering) && ((yf = oe.debounceRendering) || setTimeout)(pi);
}
function pi() {
  for (var e; pi.__r = Ho.length; )
    e = Ho.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ho = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ut({}, r)).__v = r.__v + 1, La(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? mr(r), r.__h), bp(o, r), r.__e != l && mp(r)));
    });
}
function gp(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || dp, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ps(null, a, null, null, a) : Array.isArray(a) ? Ps(fc, { children: a }, null, null, null) : a.__b > 0 ? Ps(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      La(e, a, f = f || di, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = yp(a, _, e) : _ = vp(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = mr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && $p(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      wp(p[s], p[++s], p[++s]);
}
function yp(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? yp(o, t, n) : vp(n, o, o, i, o.__e, t));
  return t;
}
function vp(e, t, n, o, i, r) {
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
function Qb(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || mi(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || mi(e, r, t[r], n[r], o);
}
function bf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Jb.test(t) ? n : n + "px";
}
function mi(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || bf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || bf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? $f : wf, r) : e.removeEventListener(t, r ? $f : wf, r);
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
function wf(e) {
  this.l[e.type + !1](oe.event ? oe.event(e) : e);
}
function $f(e) {
  this.l[e.type + !0](oe.event ? oe.event(e) : e);
}
function La(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = oe.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Wo(p, g), s.constructor = v, s.render = t0), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ut({}, s.__s)), Ut(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = oe.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ut(Ut({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === fc && h.key == null ? h.props.children : h, gp(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = e0(n.__e, t, n, o, i, r, l, _);
    (h = oe.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), oe.__e(x, t, n);
  }
}
function bp(e, t) {
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
function e0(e, t, n, o, i, r, l, c) {
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
    if (r = r && _c.call(e.childNodes), h = (d = n.props || di).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (Qb(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, gp(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && mr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && pp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && mi(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && mi(e, "checked", u, d.checked, !1));
  }
  return e;
}
function wp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    oe.__e(o, n);
  }
}
function $p(e, t, n) {
  var o, i;
  if (oe.unmount && oe.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || wp(o, null, t)), (o = e.__c) != null) {
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
      o[i] && $p(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || pp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function t0(e, t, n) {
  return this.constructor(e, n);
}
function n0(e, t, n) {
  var o, i, r;
  oe.__ && oe.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], La(t, e = (!o && n || t).__k = pr(fc, null, [e]), i || di, di, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? _c.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), bp(r, e);
}
_c = dp.slice, oe = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, hp = 0, Wo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ut({}, this.state), typeof e == "function" && (e = e(Ut({}, n), this.props)), e && Ut(n, e), e != null && this.__v && (t && this._sb.push(t), vf(this));
}, Wo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), vf(this));
}, Wo.prototype.render = fc, Ho = [], pi.__r = 0;
var o0 = 0;
function q(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --o0, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return oe.vnode && oe.vnode(_), _;
}
var kp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, J = {}, r0 = {
  get exports() {
    return J;
  },
  set exports(e) {
    J = e;
  }
};
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(kp, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var C = ["th", "st", "nd", "rd"], k = D % 100;
      return "[" + D + (C[(k - 20) % 10] || C[k] || C[0]) + "]";
    } }, w = function(D, C, k) {
      var N = String(D);
      return !N || N.length >= C ? D : "" + Array(C + 1 - N.length).join(k) + D;
    }, $ = { s: w, z: function(D) {
      var C = -D.utcOffset(), k = Math.abs(C), N = Math.floor(k / 60), L = k % 60;
      return (C <= 0 ? "+" : "-") + w(N, 2, "0") + ":" + w(L, 2, "0");
    }, m: function D(C, k) {
      if (C.date() < k.date())
        return -D(k, C);
      var N = 12 * (k.year() - C.year()) + (k.month() - C.month()), L = C.clone().add(N, d), O = k - L < 0, P = C.clone().add(N + (O ? -1 : 1), d);
      return +(-(N + (k - L) / (O ? L - P : P - L)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, S = "en", T = {};
    T[S] = g;
    var A = function(D) {
      return D instanceof V;
    }, v = function D(C, k, N) {
      var L;
      if (!C)
        return S;
      if (typeof C == "string") {
        var O = C.toLowerCase();
        T[O] && (L = O), k && (T[O] = k, L = O);
        var P = C.split("-");
        if (!L && P.length > 1)
          return D(P[0]);
      } else {
        var I = C.name;
        T[I] = C, L = I;
      }
      return !N && L && (S = L), L || !N && S;
    }, x = function(D, C) {
      if (A(D))
        return D.clone();
      var k = typeof C == "object" ? C : {};
      return k.date = D, k.args = arguments, new V(k);
    }, R = $;
    R.l = v, R.i = A, R.w = function(D, C) {
      return x(D, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var V = function() {
      function D(k) {
        this.$L = v(k.locale, null, !0), this.parse(k);
      }
      var C = D.prototype;
      return C.parse = function(k) {
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
              var I = P[2] - 1 || 0, z = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z);
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
        return this.$d.toString() !== b;
      }, C.isSame = function(k, N) {
        var L = x(k);
        return this.startOf(N) <= L && L <= this.endOf(N);
      }, C.isAfter = function(k, N) {
        return x(k) < this.startOf(N);
      }, C.isBefore = function(k, N) {
        return this.endOf(N) < x(k);
      }, C.$g = function(k, N, L) {
        return R.u(k) ? this[N] : this.set(L, k);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(k, N) {
        var L = this, O = !!R.u(N) || N, P = R.p(k), I = function(ie, G) {
          var le = R.w(L.$u ? Date.UTC(L.$y, G, ie) : new Date(L.$y, G, ie), L);
          return O ? le : le.endOf(h);
        }, z = function(ie, G) {
          return R.w(L.toDate()[ie].apply(L.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), L);
        }, j = this.$W, X = this.$M, we = this.$D, U = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, X) : I(0, X + 1);
          case s:
            var K = this.$locale().weekStart || 0, be = (j < K ? j + 7 : j) - K;
            return I(O ? we - be : we + (6 - be), X);
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
      }, C.endOf = function(k) {
        return this.startOf(k, !1);
      }, C.$set = function(k, N) {
        var L, O = R.p(k), P = "set" + (this.$u ? "UTC" : ""), I = (L = {}, L[h] = P + "Date", L[u] = P + "Date", L[d] = P + "Month", L[a] = P + "FullYear", L[_] = P + "Hours", L[c] = P + "Minutes", L[l] = P + "Seconds", L[r] = P + "Milliseconds", L)[O], z = O === h ? this.$D + (N - this.$W) : N;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[I](z), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](z);
        return this.init(), this;
      }, C.set = function(k, N) {
        return this.clone().$set(k, N);
      }, C.get = function(k) {
        return this[R.p(k)]();
      }, C.add = function(k, N) {
        var L, O = this;
        k = Number(k);
        var P = R.p(N), I = function(X) {
          var we = x(O);
          return R.w(we.date(we.date() + Math.round(X * k)), O);
        };
        if (P === d)
          return this.set(d, this.$M + k);
        if (P === a)
          return this.set(a, this.$y + k);
        if (P === h)
          return I(1);
        if (P === s)
          return I(7);
        var z = (L = {}, L[c] = o, L[_] = i, L[l] = n, L)[P] || 1, j = this.$d.getTime() + k * z;
        return R.w(j, this);
      }, C.subtract = function(k, N) {
        return this.add(-1 * k, N);
      }, C.format = function(k) {
        var N = this, L = this.$locale();
        if (!this.isValid())
          return L.invalidDate || b;
        var O = k || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), I = this.$H, z = this.$m, j = this.$M, X = L.weekdays, we = L.months, U = function(G, le, Le, Me) {
          return G && (G[le] || G(N, O)) || Le[le].slice(0, Me);
        }, K = function(G) {
          return R.s(I % 12 || 12, G, "0");
        }, be = L.meridiem || function(G, le, Le) {
          var Me = G < 12 ? "AM" : "PM";
          return Le ? Me.toLowerCase() : Me;
        }, ie = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: R.s(j + 1, 2, "0"), MMM: U(L.monthsShort, j, we, 3), MMMM: U(we, j), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: U(L.weekdaysMin, this.$W, X, 2), ddd: U(L.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(I), HH: R.s(I, 2, "0"), h: K(1), hh: K(2), a: be(I, z, !0), A: be(I, z, !1), m: String(z), mm: R.s(z, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(G, le) {
          return le || ie[G] || P.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(k, N, L) {
        var O, P = R.p(N), I = x(k), z = (I.utcOffset() - this.utcOffset()) * o, j = this - I, X = R.m(this, I);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - z) / 6048e5, O[h] = (j - z) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, L ? X : R.a(X);
      }, C.daysInMonth = function() {
        return this.endOf(d).$D;
      }, C.$locale = function() {
        return T[this.$L];
      }, C.locale = function(k, N) {
        if (!k)
          return this.$L;
        var L = this.clone(), O = v(k, N, !0);
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
    }(), B = V.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(D) {
      B[D[1]] = function(C) {
        return this.$g(C, D[0], D[1]);
      };
    }), x.extend = function(D, C) {
      return D.$i || (D(C, V, x), D.$i = !0), x;
    }, x.locale = v, x.isDayjs = A, x.unix = function(D) {
      return x(1e3 * D);
    }, x.en = T[S], x.Ls = T, x.p = {}, x;
  });
})(r0);
const qc = (e = 0, t = 0) => {
  const n = [];
  for (let o = e; o <= t; o++)
    n.push(o);
  return n;
}, xp = (e, t) => {
  const n = Math.ceil(e.length / t);
  return new Array(t).fill({}).map((o, i) => e.slice(i * n, (i + 1) * n));
}, s0 = (e) => {
  const { format: t, minDate: n, maxDate: o, tagDate: i, DATEROWCOUNT: r, showOtherMonth: l, clickDay: c, selectedDate: _, handleChangePanel: h, showToday: s, handleChange: d, clickToday: f } = e, a = (R) => J(R).isValid() ? J(R).add(1, "months").format(t) : "", u = (R) => J(R).isValid() ? J(R).subtract(1, "months").format(t) : "", b = () => {
    const R = u(_);
    d(R, !1);
  }, p = () => {
    const R = a(_);
    d(R, !1);
  }, m = () => {
    d("", !0);
  }, g = () => {
    d(_, !0);
  }, w = (R, V, B, D) => {
    const C = J(), k = J(_), N = new Array(R);
    for (let L = 0; L < R; L++) {
      const O = V + L + 1, P = B.set("date", O), I = D && !l ? !0 : n && P.isBefore(n, "date") || o && P.isAfter(o, "date");
      N[L] = {
        isSelected: k.isSame(B.set("date", O), "date"),
        isToday: C.isSame(P, "date"),
        isDisable: !!I,
        isTag: !!(i != null && i.includes(P.format(t))),
        date: P,
        isOtherMonth: D,
        onClick: () => I ? {} : c(P)
      };
    }
    return N;
  }, $ = () => {
    const R = J(_), V = J(), B = _ ? R : V, D = B.set("date", 1).day(), C = D === 0 ? 6 : D - 1, k = B.subtract(1, "month"), L = Number(k.endOf("month").get("date")) - C;
    return w(C, L, k, !0);
  }, S = () => {
    const R = J(_), V = J(), B = _ ? R : V, D = B.set("date", 1).day(), C = D === 0 ? 6 : D - 1, k = B.endOf("month").get("date"), N = B.add(1, "month"), L = 7 * 6 % (C + k);
    return w(L, 0, N, !0);
  }, T = () => {
    const R = _, V = J(), B = _ ? J(R) : V, D = B.endOf("month").get("date"), C = w(D, 0, B, !1), k = $(), N = S(), L = [...k, ...C, ...N];
    return xp(L, r);
  }, A = ["一", "二", "三", "四", "五", "六", "日"], v = T(), x = _ || J().format(t);
  return /* @__PURE__ */ q("div", { className: F("datepicker-calendar-day"), children: [
    /* @__PURE__ */ q("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ q("div", { class: "flex", children: /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => h("year"), children: [
        /* @__PURE__ */ q("span", { children: J(x).format("YYYY 年 MM 月") }),
        /* @__PURE__ */ q("span", { class: "caret" })
      ] }) }),
      /* @__PURE__ */ q("div", { class: "flex", children: [
        s && /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => {
          f();
        }, children: "今天" }),
        /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => b(), children: /* @__PURE__ */ q("i", { className: "icon icon-angle-left" }) }),
        /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => p(), children: /* @__PURE__ */ q("i", { className: "icon icon-angle-right" }) })
      ] })
    ] }),
    /* @__PURE__ */ q("table", { className: "datepicker-calendar-table not-hide-datepicker", children: [
      /* @__PURE__ */ q("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ q("tr", { children: A.map((R, V) => /* @__PURE__ */ q("th", { children: R }, V)) }) }),
      /* @__PURE__ */ q("tbody", { className: "datepicker-calendar-tbody", children: v.map((R, V) => /* @__PURE__ */ q("tr", { children: R.map((B, D) => {
        const C = ["text-center"];
        return B.isToday && C.push("datepicker-calendar-today"), B.isSelected && C.push("datepicker-calendar-selected-date"), B.isOtherMonth && C.push("datepicker-calendar-other-month"), B.isTag && C.push("datepicker-calendar-tag"), /* @__PURE__ */ q("td", { className: F(C), children: /* @__PURE__ */ q("div", { className: F("btn", "ghost", "datepicker-calendar-date", B.isDisable ? "disabled" : ""), onClick: B.onClick, children: !l && B.isOtherMonth ? "" : J(B.date).format("DD") }) }, D);
      }) }, V)) })
    ] }),
    /* @__PURE__ */ q("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ q("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ q("span", { children: "清除" }) }),
      /* @__PURE__ */ q("button", { type: "button", className: "btn ghost text-primary", onClick: g, children: /* @__PURE__ */ q("span", { children: "确认" }) })
    ] })
  ] });
};
const i0 = (e) => {
  const { format: t, selectedDate: n, minDate: o, maxDate: i, year: r, handleChangeMonth: l } = e, c = J(o).format("M"), _ = J(i).format("M"), h = xp(qc(1, 12), 3), s = (d, f) => {
    f || l(d);
  };
  return /* @__PURE__ */ q("div", { className: F("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ q("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ q("tbody", { className: "datepicker-calendar-month-table-body", children: h.map((d, f) => /* @__PURE__ */ q("tr", { children: d.map((a, u) => {
    const b = ["text-center"], p = J(`${r}-${a}-01`).format(t), m = !!(c && J(n).isBefore(c) || _ && J(n).isBefore(_));
    return /* @__PURE__ */ q("td", { className: F(b), children: /* @__PURE__ */ q("div", { className: F("btn", "size-sm", "ghost", "datepicker-calendar-month", m ? "disabled" : ""), onClick: () => {
      s(p, m);
    }, children: [
      J(p).format("MM"),
      " 月"
    ] }) }, u);
  }) }, f)) }) }) });
}, l0 = (e) => {
  const { selectedDate: t, handleChangeMonth: n } = e;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = J(t).year(), i = [...qc(o - 100, o), ...qc(o + 1, o + 100)], r = (l, c) => {
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
  return /* @__PURE__ */ q("div", { class: "datepicker-accordion scroll-smooth not-hide-datepicker", children: /* @__PURE__ */ q("ul", { children: i.map((l, c) => /* @__PURE__ */ q("li", { id: o === l ? "selected" : "", children: [
    /* @__PURE__ */ q("div", { class: "datepicker-accordion-title", onClick: (_) => r(_, l), children: l }),
    /* @__PURE__ */ q("div", { className: F("datepicker-accordion-content", o === l ? "" : "hidden"), children: pr(i0, {
      ...e,
      year: l.toString(),
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class c0 extends Wo {
  constructor() {
    super(...arguments);
    M(this, "DATEROWCOUNT", 6);
    M(this, "ref", Zb());
    M(this, "state", {
      selectedDate: this.props.date || J().format("YYYY-MM-DD"),
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
    const o = n === "subtract" ? J(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format) : J(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
    this.handleChange(o);
  }
  clickDay(n) {
    const o = J(n).format(this.props.format);
    this.handleChange(o);
  }
  clickToday() {
    this.handleChange(J().format(this.props.format));
  }
  renderPanel() {
    return this.state.type === "day" ? pr(s0, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : pr(l0, {
      ...this.props,
      selectedDate: this.state.selectedDate,
      handleChangeMonth: this.handleChangeMonth.bind(this)
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ q("div", { className: F("datepicker-calendar", n), ref: this.ref, children: this.renderPanel() });
  }
}
function as(e) {
  return e.split("-")[1];
}
function Ma(e) {
  return e === "y" ? "height" : "width";
}
function no(e) {
  return e.split("-")[0];
}
function uc(e) {
  return ["top", "bottom"].includes(no(e)) ? "x" : "y";
}
function kf(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = uc(t), _ = Ma(c), h = o[_] / 2 - i[_] / 2, s = no(t), d = c === "x";
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
  switch (as(t)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const a0 = async (e, t, n) => {
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
  } = kf(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
      y: w,
      data: $,
      reset: S
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
        ...$
      }
    }, S && u <= 50) {
      u++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (h = S.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : S.rects), {
        x: s,
        y: d
      } = kf(h, f, _)), b = -1;
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
function _0(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Sp(e) {
  return typeof e != "number" ? _0(e) : {
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
async function f0(e, t) {
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
  } = t, u = Sp(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = gi(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = gi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - S.top + u.top) / $.y,
    bottom: (S.bottom - m.bottom + u.bottom) / $.y,
    left: (m.left - S.left + u.left) / $.x,
    right: (S.right - m.right + u.right) / $.x
  };
}
const u0 = Math.min, h0 = Math.max;
function d0(e, t, n) {
  return h0(e, u0(t, n));
}
const p0 = (e) => ({
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
    const h = Sp(o), s = {
      x: i,
      y: r
    }, d = uc(l), f = Ma(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const $ = p / 2 - m / 2, S = h[u], T = w - a[f] - h[b], A = w / 2 - a[f] / 2 + $, v = d0(S, A, T), R = as(l) != null && A != v && c.reference[f] / 2 - (A < S ? h[u] : h[b]) - a[f] / 2 < 0 ? A < S ? S - A : T - A : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: v,
        centerOffset: A - v
      }
    };
  }
}), m0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => m0[t]);
}
function g0(e, t, n) {
  n === void 0 && (n = !1);
  const o = as(e), i = uc(e), r = Ma(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = yi(l)), {
    main: l,
    cross: yi(l)
  };
}
const y0 = {
  start: "end",
  end: "start"
};
function Xc(e) {
  return e.replace(/start|end/g, (t) => y0[t]);
}
function v0(e) {
  const t = yi(e);
  return [Xc(e), t, Xc(t)];
}
function b0(e, t, n) {
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
function w0(e, t, n, o) {
  const i = as(e);
  let r = b0(no(e), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), t && (r = r.concat(r.map(Xc)))), r;
}
const $0 = function(e) {
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
      } = e, p = no(o), m = no(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [yi(l)] : v0(l));
      !d && a !== "none" && w.push(...w0(l, u, a, g));
      const $ = [l, ...w], S = await f0(t, b), T = [];
      let A = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && T.push(S[p]), s) {
        const {
          main: R,
          cross: V
        } = g0(o, r, g);
        T.push(S[R], S[V]);
      }
      if (A = [...A, {
        placement: o,
        overflows: T
      }], !T.every((R) => R <= 0)) {
        var v;
        const R = (((v = i.flip) == null ? void 0 : v.index) || 0) + 1, V = $[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: A
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = A.map((C) => [C, C.overflows.filter((k) => k > 0).reduce((k, N) => k + N, 0)]).sort((C, k) => C[1] - k[1])[0]) == null ? void 0 : x[0].placement;
            D && (B = D);
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
async function k0(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = no(n), c = as(n), _ = uc(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof t == "function" ? t(e) : t;
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
const x0 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, i = await k0(t, e);
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
function lt(e) {
  return Be(e).getComputedStyle(e);
}
function Kt(e) {
  return Ep(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ys;
function Cp() {
  if (ys)
    return ys;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ys = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ys) : navigator.userAgent;
}
function vt(e) {
  return e instanceof Be(e).HTMLElement;
}
function Xe(e) {
  return e instanceof Be(e).Element;
}
function Ep(e) {
  return e instanceof Be(e).Node;
}
function xf(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Be(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function hc(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = lt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i);
}
function S0(e) {
  return ["table", "td", "th"].includes(Kt(e));
}
function Ra(e) {
  const t = /firefox/i.test(Cp()), n = lt(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Ap() {
  return !/^((?!chrome|android).)*safari/i.test(Cp());
}
function Da(e) {
  return ["html", "body", "#document"].includes(Kt(e));
}
const Sf = Math.min, Io = Math.max, vi = Math.round;
function Tp(e) {
  const t = lt(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, l = vi(n) !== i || vi(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Lp(e) {
  return Xe(e) ? e : e.contextElement;
}
const Mp = {
  x: 1,
  y: 1
};
function kn(e) {
  const t = Lp(e);
  if (!vt(t))
    return Mp;
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = Tp(t);
  let l = (r ? vi(n.width) : n.width) / o, c = (r ? vi(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function gn(e, t, n, o) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = Lp(e);
  let _ = Mp;
  t && (o ? Xe(o) && (_ = kn(o)) : _ = kn(e));
  const h = c ? Be(c) : window, s = !Ap() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Be(c), p = o && Xe(o) ? Be(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = kn(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat($.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat($.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Be(m).frameElement;
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
function en(e) {
  return ((Ep(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function dc(e) {
  return Xe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Rp(e) {
  return gn(en(e)).left + dc(e).scrollLeft;
}
function C0(e, t, n) {
  const o = vt(t), i = en(t), r = gn(e, !0, n === "fixed", t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Kt(t) !== "body" || hc(i)) && (l = dc(t)), vt(t)) {
      const _ = gn(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      i && (c.x = Rp(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function gr(e) {
  if (Kt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node
    e.assignedSlot || // DOM Element detected
    e.parentNode || // ShadowRoot detected
    (xf(e) ? e.host : null) || // Fallback
    en(e)
  );
  return xf(t) ? t.host : t;
}
function Cf(e) {
  return !vt(e) || lt(e).position === "fixed" ? null : e.offsetParent;
}
function E0(e) {
  let t = gr(e);
  for (; vt(t) && !Da(t); ) {
    if (Ra(t))
      return t;
    t = gr(t);
  }
  return null;
}
function Ef(e) {
  const t = Be(e);
  let n = Cf(e);
  for (; n && S0(n) && lt(n).position === "static"; )
    n = Cf(n);
  return n && (Kt(n) === "html" || Kt(n) === "body" && lt(n).position === "static" && !Ra(n)) ? t : n || E0(e) || t;
}
function A0(e) {
  return Tp(e);
}
function T0(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const i = vt(n), r = en(n);
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
  if ((i || !i && o !== "fixed") && ((Kt(n) !== "body" || hc(r)) && (l = dc(n)), vt(n))) {
    const h = gn(n);
    c = kn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - l.scrollLeft * c.x + _.x,
    y: t.y * c.y - l.scrollTop * c.y + _.y
  };
}
function L0(e, t) {
  const n = Be(e), o = en(e), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Ap();
    (h || !h && t === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function M0(e) {
  var t;
  const n = en(e), o = dc(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = Io(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Io(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Rp(e);
  const _ = -o.scrollTop;
  return lt(i || n).direction === "rtl" && (c += Io(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Dp(e) {
  const t = gr(e);
  return Da(t) ? e.ownerDocument.body : vt(t) && hc(t) ? t : Dp(t);
}
function Uo(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = Dp(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Be(o);
  return i ? t.concat(r, r.visualViewport || [], hc(o) ? o : []) : t.concat(o, Uo(o));
}
function R0(e, t) {
  const n = gn(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, r = vt(e) ? kn(e) : {
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
function Af(e, t, n) {
  return t === "viewport" ? gi(L0(e, n)) : Xe(t) ? R0(t, n) : gi(M0(en(e)));
}
function D0(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Uo(e).filter((c) => Xe(c) && Kt(c) !== "body"), i = null;
  const r = lt(e).position === "fixed";
  let l = r ? gr(e) : e;
  for (; Xe(l) && !Da(l); ) {
    const c = lt(l), _ = Ra(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = gr(l);
  }
  return t.set(e, o), o;
}
function N0(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? D0(t, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = Af(t, s, i);
    return h.top = Io(d.top, h.top), h.right = Sf(d.right, h.right), h.bottom = Sf(d.bottom, h.bottom), h.left = Io(d.left, h.left), h;
  }, Af(t, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const P0 = {
  getClippingRect: N0,
  convertOffsetParentRelativeRectToViewportRelativeRect: T0,
  isElement: Xe,
  getDimensions: A0,
  getOffsetParent: Ef,
  getDocumentElement: en,
  getScale: kn,
  async getElementRects(e) {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const i = this.getOffsetParent || Ef, r = this.getDimensions;
    return {
      reference: C0(t, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => lt(e).direction === "rtl"
};
function O0(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Xe(e) ? Uo(e) : e.contextElement ? Uo(e.contextElement) : [], ...Uo(t)] : [];
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
    }), Xe(e) && !c && s.observe(e), !Xe(e) && e.contextElement && !c && s.observe(e.contextElement), s.observe(t);
  }
  let d, f = c ? gn(e) : null;
  c && a();
  function a() {
    const u = gn(e);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const H0 = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: P0,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return a0(e, t, {
    ...i,
    platform: r
  });
};
var Wn, In, Ce, an, Dr, Nr, Pr, Kc, Ki, Np, Ji, Pp, Zi, Op, Qi, Hp, el, Wp, tl, Ip, nl, Up, ol;
const on = class extends Ze {
  constructor() {
    super(...arguments);
    E(this, Pr);
    E(this, Ki);
    E(this, Ji);
    E(this, Zi);
    E(this, Qi);
    E(this, el);
    E(this, tl);
    E(this, nl);
    E(this, Wn, void 0);
    E(this, In, 0);
    E(this, Ce, void 0);
    E(this, an, void 0);
    E(this, Dr, void 0);
    E(this, Nr, void 0);
    M(this, "hideLater", () => {
      y(this, ol).call(this), H(this, In, window.setTimeout(this.hide.bind(this), 100));
    });
    E(this, ol, () => {
      clearTimeout(y(this, In)), H(this, In, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, an)) == null ? void 0 : n.classList.contains(on.CLASS_SHOW);
  }
  get datepicker() {
    return y(this, an) || W(this, Ji, Pp).call(this);
  }
  get trigger() {
    return y(this, Dr) || this.element;
  }
  get elementShowClass() {
    return `with-${on.NAME}-show`;
  }
  show(n) {
    return H(this, Dr, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(on.CLASS_SHOW), this.datepicker.classList.add("fade"), W(this, tl, Ip).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = y(this, Nr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, an)) == null || o.classList.remove(on.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
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
let We = on;
Wn = new WeakMap(), In = new WeakMap(), Ce = new WeakMap(), an = new WeakMap(), Dr = new WeakMap(), Nr = new WeakMap(), Pr = new WeakSet(), Kc = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Ki = new WeakSet(), Np = function() {
  const n = W(this, Pr, Kc).call(this);
  return H(this, Ce, document.createElement("div")), y(this, Ce).style.position = "absolute", y(this, Ce).style.width = `${n}px`, y(this, Ce).style.height = `${n}px`, y(this, Ce).style.transform = "rotate(45deg)", y(this, Ce);
}, Ji = new WeakSet(), Pp = function() {
  const n = on.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), n0(pr(c0, { ...this.options }), o), this.options.arrow && o.append(W(this, Ki, Np).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, an, o), o;
}, Zi = new WeakSet(), Op = function() {
  var l;
  const n = W(this, Pr, Kc).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [x0(n), $0()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && y(this, Ce) && ((l = r.middleware) == null || l.push(p0({ element: y(this, Ce) }))), r;
}, Qi = new WeakSet(), Hp = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, el = new WeakSet(), Wp = function(n) {
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
}, tl = new WeakSet(), Ip = function() {
  const n = W(this, Zi, Op).call(this), o = W(this, nl, Up).call(this);
  H(this, Nr, O0(o, this.datepicker, () => {
    H0(o, this.datepicker, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.datepicker.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, Qi, Hp).call(this, _);
      if (l.arrow && y(this, Ce)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(y(this, Ce).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Ce).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, el, Wp).call(this, _)
        });
      }
    });
  }));
}, nl = new WeakSet(), Up = function() {
  return y(this, Wn) || H(this, Wn, {
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
  }), y(this, Wn);
}, ol = new WeakMap(), M(We, "NAME", "datepicker"), M(We, "CLASSNAME", "datepicker"), M(We, "CLASS_SHOW", "show"), M(We, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), M(We, "DEFAULT", {
  date: J().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(e) {
  const t = e.target, n = t.closest(We.MENU_SELECTOR), o = t.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? We.ensure(n).toggle() : o || We.clear({ event: e });
});
const W0 = (e) => {
  const t = document.getElementsByClassName("with-datepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(We.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || We.clear({ event: e });
};
window.addEventListener("scroll", W0, !0);
function Fp(e, t, n) {
  if (n) {
    e.setAttribute("class", F(t));
    return;
  }
  rc(e.getAttribute("class"), t).forEach(([o, i]) => {
    e.classList.toggle(o, i);
  });
}
function uo(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([o, i]) => {
      uo(e, o, i);
    });
  n !== void 0 && (e.style[t] = typeof n == "number" ? `${n}px` : n);
}
function bi(e, t, n) {
  if (typeof t == "object")
    return Object.entries(t).forEach(([o, i]) => {
      bi(e, o, i);
    });
  n !== void 0 && (n === null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
var _n, Or, St, rl, Un, Os;
const ft = class extends Ze {
  constructor() {
    super(...arguments);
    E(this, Un);
    E(this, _n, 0);
    E(this, Or, void 0);
    E(this, St, void 0);
    E(this, rl, (n) => {
      const o = n.target;
      (o.closest(ft.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(ft.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", y(this, rl)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const i = n.clientWidth, r = n.clientHeight;
          (!y(this, St) || y(this, St)[0] !== i || y(this, St)[1] !== r) && (H(this, St, [i, r]), this.layout());
        });
        o.observe(n), H(this, Or, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = y(this, Or)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: i, backdrop: r, className: l, style: c } = this.options;
    return Fp(o, [{
      "modal-trans": i,
      "modal-no-backdrop": !r
    }, ft.CLASS_SHOW, l]), uo(o, {
      zIndex: `${ft.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), W(this, Un, Os).call(this, () => {
      o.classList.add(ft.CLASS_SHOWN), W(this, Un, Os).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(ft.CLASS_SHOWN), this.emit("hide", this), W(this, Un, Os).call(this, () => {
      this.modalElement.classList.remove(ft.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    o = o ?? this.options.size, bi(i, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? bi(i, "data-size", o) : o && (r.width = o), uo(i, r), n = n ?? this.options.position ?? "fit";
    const l = i.clientWidth, c = i.clientHeight;
    H(this, St, [l, c]), typeof n == "function" && (n = n({ width: l, height: c }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), uo(i, _), uo(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Re = ft;
_n = new WeakMap(), Or = new WeakMap(), St = new WeakMap(), rl = new WeakMap(), Un = new WeakSet(), Os = function(n, o) {
  y(this, _n) && (clearTimeout(y(this, _n)), H(this, _n, 0)), n && (this.options.animation ? H(this, _n, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, M(Re, "NAME", "Modal"), M(Re, "EVENTS", !0), M(Re, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), M(Re, "CLASS_SHOW", "show"), M(Re, "CLASS_SHOWN", "in"), M(Re, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), M(Re, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Re.all.forEach((e) => {
    const t = e;
    t.isShown && t.options.responsive && t.layout();
  });
});
var pc, re, Bp, ho, Fo, Tf, wi = {}, jp = [], I0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ft(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function zp(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function U0(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? pc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Hs(e, l, o, i, null);
}
function Hs(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Bp };
  return i == null && re.vnode != null && re.vnode(r), r;
}
function F0() {
  return { current: null };
}
function mc(e) {
  return e.children;
}
function xn(e, t) {
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
function Vp(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Vp(e);
  }
}
function Lf(e) {
  (!e.__d && (e.__d = !0) && Fo.push(e) && !$i.__r++ || Tf !== re.debounceRendering) && ((Tf = re.debounceRendering) || setTimeout)($i);
}
function $i() {
  for (var e; $i.__r = Fo.length; )
    e = Fo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Fo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Ft({}, r)).__v = r.__v + 1, Na(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? yr(r), r.__h), Xp(o, r), r.__e != l && Vp(r)));
    });
}
function Yp(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || jp, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Hs(null, a, null, null, a) : Array.isArray(a) ? Hs(mc, { children: a }, null, null, null) : a.__b > 0 ? Hs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Na(e, a, f = f || wi, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Gp(a, _, e) : _ = qp(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = yr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Jp(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Kp(p[s], p[++s], p[++s]);
}
function Gp(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Gp(o, t, n) : qp(n, o, o, i, o.__e, t));
  return t;
}
function qp(e, t, n, o, i, r) {
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
function B0(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ki(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ki(e, r, t[r], n[r], o);
}
function Mf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || I0.test(t) ? n : n + "px";
}
function ki(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Mf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Mf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Df : Rf, r) : e.removeEventListener(t, r ? Df : Rf, r);
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
function Rf(e) {
  this.l[e.type + !1](re.event ? re.event(e) : e);
}
function Df(e) {
  this.l[e.type + !0](re.event ? re.event(e) : e);
}
function Na(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = re.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new xn(p, g), s.constructor = v, s.render = z0), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ft({}, s.__s)), Ft(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = re.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ft(Ft({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === mc && h.key == null ? h.props.children : h, Yp(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = j0(n.__e, t, n, o, i, r, l, _);
    (h = re.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), re.__e(x, t, n);
  }
}
function Xp(e, t) {
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
function j0(e, t, n, o, i, r, l, c) {
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
    if (r = r && pc.call(e.childNodes), h = (d = n.props || wi).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (B0(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Yp(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && yr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && zp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && ki(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && ki(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Kp(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    re.__e(o, n);
  }
}
function Jp(e, t, n) {
  var o, i;
  if (re.unmount && re.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Kp(o, null, t)), (o = e.__c) != null) {
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
      o[i] && Jp(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || zp(e.__e), e.__ = e.__e = e.__d = void 0;
}
function z0(e, t, n) {
  return this.constructor(e, n);
}
function V0(e, t, n) {
  var o, i, r;
  re.__ && re.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Na(t, e = (!o && n || t).__k = U0(mc, null, [e]), i || wi, wi, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? pc.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), Xp(r, e);
}
pc = jp.slice, re = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Bp = 0, ho = function(e) {
  return e != null && e.constructor === void 0;
}, xn.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ft({}, this.state), typeof e == "function" && (e = e(Ft({}, n), this.props)), e && Ft(n, e), e != null && this.__v && (t && this._sb.push(t), Lf(this));
}, xn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Lf(this));
}, xn.prototype.render = mc, Fo = [], $i.__r = 0;
var Y0 = 0;
function ke(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Y0, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return re.vnode && re.vnode(_), _;
}
let G0 = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
class Zp extends xn {
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
    return ho(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ ke("div", { className: "modal-header", children: /* @__PURE__ */ ke("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : ho(t) ? t : /* @__PURE__ */ ke("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ ke(to, { ...t }) : null,
      n ? /* @__PURE__ */ ke("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ ke("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? ho(t) ? t : /* @__PURE__ */ ke("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return ho(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ ke("div", { className: "modal-footer", children: n ? /* @__PURE__ */ ke(to, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ ke("div", { className: F("modal-dialog", t), style: n, children: /* @__PURE__ */ ke("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
M(Zp, "defaultProps", { closeBtn: !0 });
var Hr, Fn, Wr;
class q0 extends xn {
  constructor() {
    super(...arguments);
    E(this, Hr, F0());
    E(this, Fn, void 0);
    M(this, "state", {});
    E(this, Wr, () => {
      var i, r;
      const n = (r = (i = y(this, Hr).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = y(this, Fn);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, c = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, c.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, Fn, o);
    });
  }
  componentDidMount() {
    y(this, Wr).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = y(this, Fn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ ke(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: y(this, Hr),
        onLoad: y(this, Wr)
      }
    );
  }
}
Hr = new WeakMap(), Fn = new WeakMap(), Wr = new WeakMap();
function X0(e, t) {
  const { custom: n, title: o, content: i } = t;
  return {
    body: i,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function K0(e, t) {
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
    body: n === "html" ? /* @__PURE__ */ ke("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: _ } }) : _
  };
}
async function J0(e, t) {
  const { url: n, custom: o, title: i } = t;
  return {
    title: i,
    ...o,
    body: /* @__PURE__ */ ke(q0, { url: n })
  };
}
const Z0 = {
  custom: X0,
  ajax: K0,
  iframe: J0
};
var Ir, Ur, tt, Bn, Ws, sl, Qp, Fr, Jc;
const nr = class extends Re {
  constructor() {
    super(...arguments);
    E(this, Bn);
    E(this, sl);
    E(this, Fr);
    E(this, Ir, void 0);
    E(this, Ur, void 0);
    E(this, tt, void 0);
  }
  get id() {
    return y(this, Ur);
  }
  get loading() {
    return this.modalElement.classList.contains(nr.LOADING_CLASS);
  }
  get modalElement() {
    let n = y(this, Ir);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), bi(n, {
        id: o,
        style: this.options.style
      }), Fp(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, Ir, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, Ur, this.options.id || `modal-${G0()}`);
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
    y(this, tt) && clearTimeout(y(this, tt));
    const { modalElement: n, options: o } = this, { type: i, loadTimeout: r } = o, l = Z0[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.classList.add(nr.LOADING_CLASS), await W(this, sl, Qp).call(this), r && H(this, tt, window.setTimeout(() => {
      H(this, tt, 0), W(this, Fr, Jc).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await W(this, Fr, Jc).call(this, this.options.failedTip) : c && typeof c == "object" && await W(this, Bn, Ws).call(this, c), y(this, tt) && (clearTimeout(y(this, tt)), H(this, tt, 0)), n.classList.remove(nr.LOADING_CLASS), !0;
  }
};
let po = nr;
Ir = new WeakMap(), Ur = new WeakMap(), tt = new WeakMap(), Bn = new WeakSet(), Ws = function(n) {
  return new Promise((o) => {
    const { afterRender: i, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), i == null || i(l), o();
      },
      ...r
    }, V0(
      /* @__PURE__ */ ke(Zp, { ...n }),
      this.modalElement
    );
  });
}, sl = new WeakSet(), Qp = function() {
  const { loadingText: n } = this.options;
  return W(this, Bn, Ws).call(this, {
    body: /* @__PURE__ */ ke("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ ke("span", { className: "spinner" }),
      n ? /* @__PURE__ */ ke("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, Fr = new WeakSet(), Jc = function(n) {
  if (n)
    return W(this, Bn, Ws).call(this, {
      body: /* @__PURE__ */ ke("div", { className: "modal-load-failed", children: n })
    });
}, M(po, "LOADING_CLASS", "loading"), M(po, "DEFAULT", {
  ...Re.DEFAULT,
  loadTimeout: 1e4
});
var Ct, il, em, ll, tm, cl, nm;
class Bo extends Ze {
  constructor() {
    super(...arguments);
    E(this, il);
    E(this, ll);
    E(this, cl);
    E(this, Ct, void 0);
  }
  get modal() {
    return y(this, Ct);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return W(this, ll, tm).call(this).show();
  }
  hide() {
    var n;
    (n = y(this, Ct)) == null || n.hide();
  }
}
Ct = new WeakMap(), il = new WeakSet(), em = function() {
  const {
    container: n,
    ...o
  } = this.options, i = o, r = this.element.getAttribute("href") || "";
  return i.type || (i.target || r[0] === "#" ? i.type = "static" : i.type = i.type || (i.url ? "iframe" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && r[0] !== "#" && (i.url = r), i;
}, ll = new WeakSet(), tm = function() {
  const n = W(this, il, em).call(this);
  let o = y(this, Ct);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Re(W(this, cl, nm).call(this), n), H(this, Ct, o)) : (o = new po(this.container, n), H(this, Ct, o)), o;
}, cl = new WeakSet(), nm = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const i = o.getAttribute("href");
      i != null && i.startsWith("#") && (n = i);
    }
  }
  return this.container.querySelector(n || ".modal");
}, M(Bo, "NAME", "ModalTrigger"), M(Bo, "EVENTS", !0), M(Bo, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  const n = e.target.closest(Bo.TOGGLE_SELECTOR);
  if (n) {
    const o = Bo.ensure(n);
    o && o.show(), console.log("> modalTrigger", o);
  }
});
var Ic;
let Q0 = (Ic = class extends eo {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = F(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
}, M(Ic, "NAME", "nav"), Ic);
class Nf extends Se {
}
M(Nf, "NAME", "nav"), M(Nf, "Component", Q0);
var Zc;
Zc = { __e: function(e, t, n, o) {
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
var ew = 0;
function Gt(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ew, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Zc.vnode && Zc.vnode(_), _;
}
function vr(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function tw({
  key: e,
  type: t,
  btnType: n,
  page: o,
  format: i,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = vr(r, o);
  return c.text === void 0 && !c.icon && i && (c.text = typeof i == "function" ? i(_) : Ne(i, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : Ne(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ Gt(st, { type: n, ...c });
}
const ut = 24 * 60 * 60 * 1e3, Pe = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), _s = (e, t = new Date()) => (e = Pe(e), t = Pe(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Pf = (e, t = new Date()) => Pe(e).getFullYear() === Pe(t).getFullYear(), nw = (e, t = new Date()) => (e = Pe(e), t = Pe(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Fk = (e, t = new Date()) => {
  e = Pe(e), t = Pe(t);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, Bk = (e, t) => _s(Pe(t), e), jk = (e, t) => _s(Pe(t).getTime() - ut, e), zk = (e, t) => _s(Pe(t).getTime() + ut, e), Vk = (e, t) => _s(Pe(t).getTime() - 2 * ut, e), Qc = (e, t = "yyyy-MM-dd hh:mm") => {
  e = Pe(e);
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
}, Yk = (e, t, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = Qc(e, Pf(e) ? o.month : o.full);
  if (_s(e, t))
    return i;
  const r = Qc(t, Pf(e, t) ? nw(e, t) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, Gk = (e) => {
  const t = new Date().getTime();
  switch (e) {
    case "oneWeek":
      return t - ut * 7;
    case "oneMonth":
      return t - ut * 31;
    case "threeMonth":
      return t - ut * 31 * 3;
    case "halfYear":
      return t - ut * 183;
    case "oneYear":
      return t - ut * 365;
    case "twoYear":
      return t - 2 * (ut * 365);
    default:
      return 0;
  }
}, Of = (e, t, n = !0, o = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Of(e, "day", n, o);
    case "quarter":
      e *= 3;
    case "month":
      return e *= 30, Of(e, "day", n, o);
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
function ow({
  key: e,
  type: t,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const c = vr(i, n);
  return o = typeof o == "function" ? o(c) : Ne(o, c), /* @__PURE__ */ Gt(oh, { ...l, children: [
    r,
    o
  ] });
}
function rw({
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
  const _ = { ...c, square: !0 }, h = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ Gt(st, { type: n, ..._ })), s = (f, a) => {
    const u = [];
    for (let b = f; b <= a; b++) {
      _.text = b, delete _.icon, _.disabled = !1;
      const p = vr(i, b);
      l && (_.url = typeof l == "function" ? l(p) : Ne(l, p)), u.push(/* @__PURE__ */ Gt(st, { type: n, ..._, onClick: r }));
    }
    return u;
  };
  let d = [];
  return d = [...s(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= o ? d = [...d, ...s(2, i.pageTotal)] : i.page < o - 2 ? d = [...d, ...s(2, o - 2), h(), ...s(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - o + 3 ? d = [...d, h(), ...s(i.pageTotal - o + 3, i.pageTotal)] : d = [...d, h(), ...s(i.page - Math.ceil((o - 4) / 2), i.page + Math.floor((o - 4) / 2)), h(), ...s(i.pageTotal, i.pageTotal)]), d;
}
function sw({
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
      url: typeof n == "function" ? n(h) : Ne(n, h)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(t) : Ne(l, t), i.menu = { ...i.menu, className: F((c = i.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ Gt(md, { type: "dropdown", dropdown: i, ...r });
}
function iw({
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
    const p = vr(i, d);
    c && !c({ info: p, event: b }) || (b.target.href = s.url = typeof _ == "function" ? _(p) : Ne(_, p));
  }, u = vr(i, t || 0);
  return s.url = typeof _ == "function" ? _(u) : Ne(_, u), s.className = F("input-group-addon", s.className), /* @__PURE__ */ Gt("div", { className: F("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ Gt("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ Gt(st, { type: o, ...s, onClick: a })
  ] });
}
var _o;
let lw = (_o = class extends to {
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
}, M(_o, "NAME", "pager"), M(_o, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), M(_o, "ItemComponents", {
  ...to.ItemComponents,
  link: tw,
  info: ow,
  nav: rw,
  "size-menu": sw,
  goto: iw
}), _o);
class Hf extends Se {
}
M(Hf, "NAME", "pager"), M(Hf, "Component", lw);
var om, me, rm, jo, Wf, sm = {}, im = [], cw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Bt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function lm(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Dc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++rm };
  return i == null && me.vnode != null && me.vnode(r), r;
}
function aw() {
  return { current: null };
}
function Pa(e) {
  return e.children;
}
function qt(e, t) {
  this.props = e, this.context = t;
}
function br(e, t) {
  if (t == null)
    return e.__ ? br(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? br(e) : null;
}
function cm(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return cm(e);
  }
}
function If(e) {
  (!e.__d && (e.__d = !0) && jo.push(e) && !xi.__r++ || Wf !== me.debounceRendering) && ((Wf = me.debounceRendering) || setTimeout)(xi);
}
function xi() {
  for (var e; xi.__r = jo.length; )
    e = jo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), jo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Bt({}, r)).__v = r.__v + 1, um(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? br(r), r.__h), fw(o, r), r.__e != l && cm(r)));
    });
}
function am(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || im, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Dc(null, a, null, null, a) : Array.isArray(a) ? Dc(Pa, { children: a }, null, null, null) : a.__b > 0 ? Dc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      um(e, a, f = f || sm, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = _m(a, _, e) : _ = fm(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = br(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && dm(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      hm(p[s], p[++s], p[++s]);
}
function _m(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? _m(o, t, n) : fm(n, o, o, i, o.__e, t));
  return t;
}
function fm(e, t, n, o, i, r) {
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
function _w(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Si(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Si(e, r, t[r], n[r], o);
}
function Uf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || cw.test(t) ? n : n + "px";
}
function Si(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Uf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Uf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Bf : Ff, r) : e.removeEventListener(t, r ? Bf : Ff, r);
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
function Ff(e) {
  this.l[e.type + !1](me.event ? me.event(e) : e);
}
function Bf(e) {
  this.l[e.type + !0](me.event ? me.event(e) : e);
}
function um(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = me.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new qt(p, g), s.constructor = v, s.render = hw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Bt({}, s.__s)), Bt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = me.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = Bt(Bt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Pa && h.key == null ? h.props.children : h, am(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = uw(n.__e, t, n, o, i, r, l, _);
    (h = me.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), me.__e(x, t, n);
  }
}
function fw(e, t) {
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
function uw(e, t, n, o, i, r, l, c) {
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
    if (r = r && om.call(e.childNodes), h = (d = n.props || sm).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (_w(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, am(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && br(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && lm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Si(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Si(e, "checked", u, d.checked, !1));
  }
  return e;
}
function hm(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    me.__e(o, n);
  }
}
function dm(e, t, n) {
  var o, i;
  if (me.unmount && me.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || hm(o, null, t)), (o = e.__c) != null) {
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
      o[i] && dm(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || lm(e.__e), e.__ = e.__e = e.__d = void 0;
}
function hw(e, t, n) {
  return this.constructor(e, n);
}
om = im.slice, me = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, rm = 0, qt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Bt({}, this.state), typeof e == "function" && (e = e(Bt({}, n), this.props)), e && Bt(n, e), e != null && this.__v && (t && this._sb.push(t), If(this));
}, qt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), If(this));
}, qt.prototype.render = Pa, jo = [], xi.__r = 0;
var dw = 0;
function ee(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --dw, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return me.vnode && me.vnode(_), _;
}
let pw = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var al;
class mw extends qt {
  constructor() {
    super(...arguments);
    E(this, al, (n) => {
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
    return c.length ? s = /* @__PURE__ */ ee("div", { className: "picker-multi-selections", children: c.map((d, f) => /* @__PURE__ */ ee("div", { className: "picker-multi-selection", children: [
      d.text ?? d.value,
      /* @__PURE__ */ ee("div", { className: "picker-deselect-btn btn", onClick: y(this, al), "data-idx": f, children: /* @__PURE__ */ ee("span", { className: "close" }) })
    ] })) }) : s = /* @__PURE__ */ ee("span", { className: "picker-select-placeholder", children: r }), /* @__PURE__ */ ee(
      "div",
      {
        className: F("picker-select picker-select-multi form-control", n, { disabled: i, focused: l }),
        style: o,
        onClick: _,
        children: [
          s,
          h,
          /* @__PURE__ */ ee("span", { class: "caret" })
        ]
      }
    );
  }
}
al = new WeakMap();
var _l;
class gw extends qt {
  constructor() {
    super(...arguments);
    E(this, _l, (n) => {
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
    } = this.props, [d] = c, f = d ? /* @__PURE__ */ ee("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ ee("span", { className: "picker-select-placeholder", children: r }), a = d && _ ? /* @__PURE__ */ ee("button", { type: "button", className: "btn picker-deselect-btn", onClick: y(this, _l), children: /* @__PURE__ */ ee("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ ee(
      "div",
      {
        className: F("picker-select picker-select-single form-control", n, { disabled: i, focused: l }),
        style: o,
        onClick: h,
        children: [
          f,
          s,
          a,
          /* @__PURE__ */ ee("span", { class: "caret" })
        ]
      }
    );
  }
}
_l = new WeakMap();
var fl, pm, Br, ul, jr, hl;
class yw extends qt {
  constructor() {
    super(...arguments);
    E(this, fl);
    M(this, "state", { keys: "", shown: !1 });
    E(this, Br, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    E(this, ul, ({ item: n }) => {
      const o = this.props.items.find((i) => i.value === n.key);
      o && this.props.onSelectItem(o);
    });
    E(this, jr, (n) => {
      this.setState({ keys: n.target.value });
    });
    E(this, hl, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", y(this, Br)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", y(this, Br));
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
    return /* @__PURE__ */ ee("div", { className: F("picker-menu", i, { shown: d, "has-search": a }), id: `picker-menu-${n}`, style: { maxHeight: l, maxWidth: c, width: _, ...r }, children: [
      o ? /* @__PURE__ */ ee("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ ee("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: s, value: f, onChange: y(this, jr), onInput: y(this, jr) }),
        a ? /* @__PURE__ */ ee("button", { type: "button", className: "btn picker-menu-search-clear", onClick: y(this, hl), children: /* @__PURE__ */ ee("span", { className: "close" }) }) : /* @__PURE__ */ ee("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ ee(ga, { className: "picker-menu-list", items: W(this, fl, pm).call(this), onClickItem: y(this, ul), ...h })
    ] });
  }
}
fl = new WeakSet(), pm = function() {
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
      typeof f == "string" && r.length && (f = /* @__PURE__ */ ee("span", { dangerouslySetInnerHTML: { __html: r.reduce((a, u) => a.replace(u, `<span class="picker-menu-item-match">${u}</span>`), f) } })), l.push({
        key: _,
        active: i.has(_),
        text: f,
        ...d
      });
    }
    return l;
  }, []);
}, Br = new WeakMap(), ul = new WeakMap(), jr = new WeakMap(), hl = new WeakMap();
function jf(e) {
  const t = /* @__PURE__ */ new Set();
  return e.reduce((n, o) => (t.has(o) || (t.add(o), n.push(o)), n), []);
}
var Uc, zr, Vr, Yr, jn, Is, Gr, ea, dl, mm, pl, gm, ml, gl, yl, vl, bl, ym;
let vw = (Uc = class extends qt {
  constructor(n) {
    super(n);
    E(this, jn);
    E(this, Gr);
    E(this, dl);
    E(this, pl);
    E(this, bl);
    E(this, zr, 0);
    E(this, Vr, pw());
    E(this, Yr, aw());
    E(this, ml, (n, o) => {
      const { valueList: i } = this, r = new Set(n.map((c) => c.value)), l = i.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    E(this, gl, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    E(this, yl, () => {
      this.close();
    });
    E(this, vl, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = y(this, Yr).current) == null || o.hide();
      });
    });
    this.state = {
      value: W(this, dl, mm).call(this, n.defaultValue) ?? "",
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
    return W(this, Gr, ea).call(this, this.state.value);
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
      const i = ++t_(this, zr)._;
      if (await W(this, jn, Is).call(this, { loading: !0, items: [] }), n = await n(), y(this, zr) !== i)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await W(this, jn, Is).call(this, o), n;
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
    await W(this, jn, Is).call(this, { open: n }), n && this.loadItemList();
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
    } = this.props, l = r ? mw : gw;
    return /* @__PURE__ */ ee("div", { className: F("picker", n), style: o, id: `picker-${y(this, Vr)}`, children: [
      /* @__PURE__ */ ee(l, { ...W(this, pl, gm).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ ee(yw, { ...W(this, bl, ym).call(this), ref: y(this, Yr) }) : null
    ] });
  }
}, zr = new WeakMap(), Vr = new WeakMap(), Yr = new WeakMap(), jn = new WeakSet(), Is = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, Gr = new WeakSet(), ea = function(n) {
  return typeof n == "string" ? jf(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? jf(n) : [];
}, dl = new WeakSet(), mm = function(n) {
  const o = W(this, Gr, ea).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, pl = new WeakSet(), gm = function() {
  const { placeholder: n, disabled: o } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: y(this, gl),
    onDeselect: y(this, ml)
  };
}, ml = new WeakMap(), gl = new WeakMap(), yl = new WeakMap(), vl = new WeakMap(), bl = new WeakSet(), ym = function() {
  const { search: n, menuClass: o, menuWidth: i, menuStyle: r, menuMaxHeight: l, menuMaxWidth: c } = this.props, { items: _ } = this.state;
  return {
    id: y(this, Vr),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: i,
    maxHeight: l,
    maxWidth: c,
    onRequestHide: y(this, yl),
    onSelectItem: y(this, vl)
  };
}, M(Uc, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), Uc);
class zf extends Se {
}
M(zf, "NAME", "picker"), M(zf, "Component", vw);
var gc, se, vm, zo, Vf, Ci = {}, bm = [], bw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function jt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function wm(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function $m(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? gc.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Us(e, l, o, i, null);
}
function Us(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++vm };
  return i == null && se.vnode != null && se.vnode(r), r;
}
function vs() {
  return { current: null };
}
function yc(e) {
  return e.children;
}
function Vo(e, t) {
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
function km(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return km(e);
  }
}
function Yf(e) {
  (!e.__d && (e.__d = !0) && zo.push(e) && !Ei.__r++ || Vf !== se.debounceRendering) && ((Vf = se.debounceRendering) || setTimeout)(Ei);
}
function Ei() {
  for (var e; Ei.__r = zo.length; )
    e = zo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), zo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = jt({}, r)).__v = r.__v + 1, Oa(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? wr(r), r.__h), Em(o, r), r.__e != l && km(r)));
    });
}
function xm(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || bm, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Us(null, a, null, null, a) : Array.isArray(a) ? Us(yc, { children: a }, null, null, null) : a.__b > 0 ? Us(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Oa(e, a, f = f || Ci, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Sm(a, _, e) : _ = Cm(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = wr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Tm(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Am(p[s], p[++s], p[++s]);
}
function Sm(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Sm(o, t, n) : Cm(n, o, o, i, o.__e, t));
  return t;
}
function Cm(e, t, n, o, i, r) {
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
function ww(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ai(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ai(e, r, t[r], n[r], o);
}
function Gf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || bw.test(t) ? n : n + "px";
}
function Ai(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || Gf(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || Gf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? Xf : qf, r) : e.removeEventListener(t, r ? Xf : qf, r);
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
function qf(e) {
  this.l[e.type + !1](se.event ? se.event(e) : e);
}
function Xf(e) {
  this.l[e.type + !0](se.event ? se.event(e) : e);
}
function Oa(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = se.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Vo(p, g), s.constructor = v, s.render = kw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = jt({}, s.__s)), jt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = se.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = jt(jt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === yc && h.key == null ? h.props.children : h, xm(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = $w(n.__e, t, n, o, i, r, l, _);
    (h = se.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), se.__e(x, t, n);
  }
}
function Em(e, t) {
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
function $w(e, t, n, o, i, r, l, c) {
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
    if (r = r && gc.call(e.childNodes), h = (d = n.props || Ci).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (ww(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, xm(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && wr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && wm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Ai(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ai(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Am(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    se.__e(o, n);
  }
}
function Tm(e, t, n) {
  var o, i;
  if (se.unmount && se.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Am(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        se.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Tm(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || wm(e.__e), e.__ = e.__e = e.__d = void 0;
}
function kw(e, t, n) {
  return this.constructor(e, n);
}
function xw(e, t, n) {
  var o, i, r;
  se.__ && se.__(e, t), i = (o = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Oa(t, e = (!o && n || t).__k = $m(yc, null, [e]), i || Ci, Ci, t.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : t.firstChild ? gc.call(t.childNodes) : null, r, !o && n ? n : i ? i.__e : t.firstChild, o), Em(r, e);
}
gc = bm.slice, se = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, vm = 0, Vo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = jt({}, this.state), typeof e == "function" && (e = e(jt({}, n), this.props)), e && jt(n, e), e != null && this.__v && (t && this._sb.push(t), Yf(this));
}, Vo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Yf(this));
}, Vo.prototype.render = yc, zo = [], Ei.__r = 0;
var Sw = 0;
function Oe(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Sw, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return se.vnode && se.vnode(_), _;
}
var Ti = {}, Cw = {
  get exports() {
    return Ti;
  },
  set exports(e) {
    Ti = e;
  }
};
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(kp, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var C = ["th", "st", "nd", "rd"], k = D % 100;
      return "[" + D + (C[(k - 20) % 10] || C[k] || C[0]) + "]";
    } }, w = function(D, C, k) {
      var N = String(D);
      return !N || N.length >= C ? D : "" + Array(C + 1 - N.length).join(k) + D;
    }, $ = { s: w, z: function(D) {
      var C = -D.utcOffset(), k = Math.abs(C), N = Math.floor(k / 60), L = k % 60;
      return (C <= 0 ? "+" : "-") + w(N, 2, "0") + ":" + w(L, 2, "0");
    }, m: function D(C, k) {
      if (C.date() < k.date())
        return -D(k, C);
      var N = 12 * (k.year() - C.year()) + (k.month() - C.month()), L = C.clone().add(N, d), O = k - L < 0, P = C.clone().add(N + (O ? -1 : 1), d);
      return +(-(N + (k - L) / (O ? L - P : P - L)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, S = "en", T = {};
    T[S] = g;
    var A = function(D) {
      return D instanceof V;
    }, v = function D(C, k, N) {
      var L;
      if (!C)
        return S;
      if (typeof C == "string") {
        var O = C.toLowerCase();
        T[O] && (L = O), k && (T[O] = k, L = O);
        var P = C.split("-");
        if (!L && P.length > 1)
          return D(P[0]);
      } else {
        var I = C.name;
        T[I] = C, L = I;
      }
      return !N && L && (S = L), L || !N && S;
    }, x = function(D, C) {
      if (A(D))
        return D.clone();
      var k = typeof C == "object" ? C : {};
      return k.date = D, k.args = arguments, new V(k);
    }, R = $;
    R.l = v, R.i = A, R.w = function(D, C) {
      return x(D, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var V = function() {
      function D(k) {
        this.$L = v(k.locale, null, !0), this.parse(k);
      }
      var C = D.prototype;
      return C.parse = function(k) {
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
              var I = P[2] - 1 || 0, z = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z);
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
        return this.$d.toString() !== b;
      }, C.isSame = function(k, N) {
        var L = x(k);
        return this.startOf(N) <= L && L <= this.endOf(N);
      }, C.isAfter = function(k, N) {
        return x(k) < this.startOf(N);
      }, C.isBefore = function(k, N) {
        return this.endOf(N) < x(k);
      }, C.$g = function(k, N, L) {
        return R.u(k) ? this[N] : this.set(L, k);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(k, N) {
        var L = this, O = !!R.u(N) || N, P = R.p(k), I = function(ie, G) {
          var le = R.w(L.$u ? Date.UTC(L.$y, G, ie) : new Date(L.$y, G, ie), L);
          return O ? le : le.endOf(h);
        }, z = function(ie, G) {
          return R.w(L.toDate()[ie].apply(L.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), L);
        }, j = this.$W, X = this.$M, we = this.$D, U = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, X) : I(0, X + 1);
          case s:
            var K = this.$locale().weekStart || 0, be = (j < K ? j + 7 : j) - K;
            return I(O ? we - be : we + (6 - be), X);
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
      }, C.endOf = function(k) {
        return this.startOf(k, !1);
      }, C.$set = function(k, N) {
        var L, O = R.p(k), P = "set" + (this.$u ? "UTC" : ""), I = (L = {}, L[h] = P + "Date", L[u] = P + "Date", L[d] = P + "Month", L[a] = P + "FullYear", L[_] = P + "Hours", L[c] = P + "Minutes", L[l] = P + "Seconds", L[r] = P + "Milliseconds", L)[O], z = O === h ? this.$D + (N - this.$W) : N;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[I](z), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](z);
        return this.init(), this;
      }, C.set = function(k, N) {
        return this.clone().$set(k, N);
      }, C.get = function(k) {
        return this[R.p(k)]();
      }, C.add = function(k, N) {
        var L, O = this;
        k = Number(k);
        var P = R.p(N), I = function(X) {
          var we = x(O);
          return R.w(we.date(we.date() + Math.round(X * k)), O);
        };
        if (P === d)
          return this.set(d, this.$M + k);
        if (P === a)
          return this.set(a, this.$y + k);
        if (P === h)
          return I(1);
        if (P === s)
          return I(7);
        var z = (L = {}, L[c] = o, L[_] = i, L[l] = n, L)[P] || 1, j = this.$d.getTime() + k * z;
        return R.w(j, this);
      }, C.subtract = function(k, N) {
        return this.add(-1 * k, N);
      }, C.format = function(k) {
        var N = this, L = this.$locale();
        if (!this.isValid())
          return L.invalidDate || b;
        var O = k || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), I = this.$H, z = this.$m, j = this.$M, X = L.weekdays, we = L.months, U = function(G, le, Le, Me) {
          return G && (G[le] || G(N, O)) || Le[le].slice(0, Me);
        }, K = function(G) {
          return R.s(I % 12 || 12, G, "0");
        }, be = L.meridiem || function(G, le, Le) {
          var Me = G < 12 ? "AM" : "PM";
          return Le ? Me.toLowerCase() : Me;
        }, ie = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: R.s(j + 1, 2, "0"), MMM: U(L.monthsShort, j, we, 3), MMMM: U(we, j), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: U(L.weekdaysMin, this.$W, X, 2), ddd: U(L.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(I), HH: R.s(I, 2, "0"), h: K(1), hh: K(2), a: be(I, z, !0), A: be(I, z, !1), m: String(z), mm: R.s(z, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(G, le) {
          return le || ie[G] || P.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(k, N, L) {
        var O, P = R.p(N), I = x(k), z = (I.utcOffset() - this.utcOffset()) * o, j = this - I, X = R.m(this, I);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - z) / 6048e5, O[h] = (j - z) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, L ? X : R.a(X);
      }, C.daysInMonth = function() {
        return this.endOf(d).$D;
      }, C.$locale = function() {
        return T[this.$L];
      }, C.locale = function(k, N) {
        if (!k)
          return this.$L;
        var L = this.clone(), O = v(k, N, !0);
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
    }(), B = V.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(D) {
      B[D[1]] = function(C) {
        return this.$g(C, D[0], D[1]);
      };
    }), x.extend = function(D, C) {
      return D.$i || (D(C, V, x), D.$i = !0), x;
    }, x.locale = v, x.isDayjs = A, x.unix = function(D) {
      return x(1e3 * D);
    }, x.en = T[S], x.Ls = T, x.p = {}, x;
  });
})(Cw);
const Ew = (e = "00:00:00") => {
  const t = Ti(`1989-01-01 ${e}`);
  return {
    hour: t.hour(),
    minute: t.minute(),
    second: t.second()
  };
};
function Aw() {
  let e = new Array(24).fill(0), t = new Array(60).fill(0), n = new Array(60).fill(0);
  return e = e.map((o, i) => o + i), t = t.map((o, i) => o + i), n = n.map((o, i) => o + i), { hourList: e, minuteList: t, secondList: n };
}
class Tw extends Vo {
  constructor() {
    super(...arguments);
    M(this, "cellHeight", 24);
    M(this, "ref", vs());
    M(this, "hourRef", vs());
    M(this, "minuteRef", vs());
    M(this, "secondRef", vs());
    M(this, "state", {
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
    const i = Ew(this.state.selectTime);
    return o.map((r) => {
      const l = i[n] === r, c = { ...i, [n]: r };
      return /* @__PURE__ */ Oe(
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
    const { showSeconds: n, style: o } = this.props, { hourList: i, minuteList: r, secondList: l } = Aw();
    return /* @__PURE__ */ Oe("div", { className: F("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ Oe("div", { className: F("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ Oe("div", { className: "overflow-hidden", children: /* @__PURE__ */ Oe("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", i) }) }),
        /* @__PURE__ */ Oe("div", { className: "overflow-hidden", children: /* @__PURE__ */ Oe("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ Oe("div", { className: "overflow-hidden", children: /* @__PURE__ */ Oe("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ Oe("div", { className: F("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ Oe("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ Oe("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function fs(e) {
  return e.split("-")[1];
}
function Ha(e) {
  return e === "y" ? "height" : "width";
}
function oo(e) {
  return e.split("-")[0];
}
function vc(e) {
  return ["top", "bottom"].includes(oo(e)) ? "x" : "y";
}
function Kf(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = vc(t), _ = Ha(c), h = o[_] / 2 - i[_] / 2, s = oo(t), d = c === "x";
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
  switch (fs(t)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Lw = async (e, t, n) => {
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
  } = Kf(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
      y: w,
      data: $,
      reset: S
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
        ...$
      }
    }, S && u <= 50) {
      u++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (h = S.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : S.rects), {
        x: s,
        y: d
      } = Kf(h, f, _)), b = -1;
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
function Mw(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Lm(e) {
  return typeof e != "number" ? Mw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Li(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function Rw(e, t) {
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
  } = t, u = Lm(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Li(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Li(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - S.top + u.top) / $.y,
    bottom: (S.bottom - m.bottom + u.bottom) / $.y,
    left: (m.left - S.left + u.left) / $.x,
    right: (S.right - m.right + u.right) / $.x
  };
}
const Dw = Math.min, Nw = Math.max;
function Pw(e, t, n) {
  return Nw(e, Dw(t, n));
}
const Ow = (e) => ({
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
    const h = Lm(o), s = {
      x: i,
      y: r
    }, d = vc(l), f = Ha(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const $ = p / 2 - m / 2, S = h[u], T = w - a[f] - h[b], A = w / 2 - a[f] / 2 + $, v = Pw(S, A, T), R = fs(l) != null && A != v && c.reference[f] / 2 - (A < S ? h[u] : h[b]) - a[f] / 2 < 0 ? A < S ? S - A : T - A : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: v,
        centerOffset: A - v
      }
    };
  }
}), Hw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Mi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Hw[t]);
}
function Ww(e, t, n) {
  n === void 0 && (n = !1);
  const o = fs(e), i = vc(e), r = Ha(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = Mi(l)), {
    main: l,
    cross: Mi(l)
  };
}
const Iw = {
  start: "end",
  end: "start"
};
function ta(e) {
  return e.replace(/start|end/g, (t) => Iw[t]);
}
function Uw(e) {
  const t = Mi(e);
  return [ta(e), t, ta(t)];
}
function Fw(e, t, n) {
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
function Bw(e, t, n, o) {
  const i = fs(e);
  let r = Fw(oo(e), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), t && (r = r.concat(r.map(ta)))), r;
}
const jw = function(e) {
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
      } = e, p = oo(o), m = oo(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [Mi(l)] : Uw(l));
      !d && a !== "none" && w.push(...Bw(l, u, a, g));
      const $ = [l, ...w], S = await Rw(t, b), T = [];
      let A = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && T.push(S[p]), s) {
        const {
          main: R,
          cross: V
        } = Ww(o, r, g);
        T.push(S[R], S[V]);
      }
      if (A = [...A, {
        placement: o,
        overflows: T
      }], !T.every((R) => R <= 0)) {
        var v;
        const R = (((v = i.flip) == null ? void 0 : v.index) || 0) + 1, V = $[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: A
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = A.map((C) => [C, C.overflows.filter((k) => k > 0).reduce((k, N) => k + N, 0)]).sort((C, k) => C[1] - k[1])[0]) == null ? void 0 : x[0].placement;
            D && (B = D);
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
async function zw(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = oo(n), c = fs(n), _ = vc(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof t == "function" ? t(e) : t;
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
const Vw = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, i = await zw(t, e);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function je(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ct(e) {
  return je(e).getComputedStyle(e);
}
function Jt(e) {
  return Rm(e) ? (e.nodeName || "").toLowerCase() : "";
}
let bs;
function Mm() {
  if (bs)
    return bs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (bs = e.brands.map((t) => t.brand + "/" + t.version).join(" "), bs) : navigator.userAgent;
}
function bt(e) {
  return e instanceof je(e).HTMLElement;
}
function Ke(e) {
  return e instanceof je(e).Element;
}
function Rm(e) {
  return e instanceof je(e).Node;
}
function Jf(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function bc(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = ct(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i);
}
function Yw(e) {
  return ["table", "td", "th"].includes(Jt(e));
}
function Wa(e) {
  const t = /firefox/i.test(Mm()), n = ct(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Dm() {
  return !/^((?!chrome|android).)*safari/i.test(Mm());
}
function Ia(e) {
  return ["html", "body", "#document"].includes(Jt(e));
}
const Zf = Math.min, Yo = Math.max, Ri = Math.round;
function Nm(e) {
  const t = ct(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, l = Ri(n) !== i || Ri(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Pm(e) {
  return Ke(e) ? e : e.contextElement;
}
const Om = {
  x: 1,
  y: 1
};
function Sn(e) {
  const t = Pm(e);
  if (!bt(t))
    return Om;
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = Nm(t);
  let l = (r ? Ri(n.width) : n.width) / o, c = (r ? Ri(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function yn(e, t, n, o) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = Pm(e);
  let _ = Om;
  t && (o ? Ke(o) && (_ = Sn(o)) : _ = Sn(e));
  const h = c ? je(c) : window, s = !Dm() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = je(c), p = o && Ke(o) ? je(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = Sn(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat($.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat($.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = je(m).frameElement;
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
function tn(e) {
  return ((Rm(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function wc(e) {
  return Ke(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Hm(e) {
  return yn(tn(e)).left + wc(e).scrollLeft;
}
function Gw(e, t, n) {
  const o = bt(t), i = tn(t), r = yn(e, !0, n === "fixed", t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Jt(t) !== "body" || bc(i)) && (l = wc(t)), bt(t)) {
      const _ = yn(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      i && (c.x = Hm(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function $r(e) {
  if (Jt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node
    e.assignedSlot || // DOM Element detected
    e.parentNode || // ShadowRoot detected
    (Jf(e) ? e.host : null) || // Fallback
    tn(e)
  );
  return Jf(t) ? t.host : t;
}
function Qf(e) {
  return !bt(e) || ct(e).position === "fixed" ? null : e.offsetParent;
}
function qw(e) {
  let t = $r(e);
  for (; bt(t) && !Ia(t); ) {
    if (Wa(t))
      return t;
    t = $r(t);
  }
  return null;
}
function eu(e) {
  const t = je(e);
  let n = Qf(e);
  for (; n && Yw(n) && ct(n).position === "static"; )
    n = Qf(n);
  return n && (Jt(n) === "html" || Jt(n) === "body" && ct(n).position === "static" && !Wa(n)) ? t : n || qw(e) || t;
}
function Xw(e) {
  return Nm(e);
}
function Kw(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const i = bt(n), r = tn(n);
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
  if ((i || !i && o !== "fixed") && ((Jt(n) !== "body" || bc(r)) && (l = wc(n)), bt(n))) {
    const h = yn(n);
    c = Sn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - l.scrollLeft * c.x + _.x,
    y: t.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Jw(e, t) {
  const n = je(e), o = tn(e), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Dm();
    (h || !h && t === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Zw(e) {
  var t;
  const n = tn(e), o = wc(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = Yo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Yo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Hm(e);
  const _ = -o.scrollTop;
  return ct(i || n).direction === "rtl" && (c += Yo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Wm(e) {
  const t = $r(e);
  return Ia(t) ? e.ownerDocument.body : bt(t) && bc(t) ? t : Wm(t);
}
function Go(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = Wm(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = je(o);
  return i ? t.concat(r, r.visualViewport || [], bc(o) ? o : []) : t.concat(o, Go(o));
}
function Qw(e, t) {
  const n = yn(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, r = bt(e) ? Sn(e) : {
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
function tu(e, t, n) {
  return t === "viewport" ? Li(Jw(e, n)) : Ke(t) ? Qw(t, n) : Li(Zw(tn(e)));
}
function e$(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Go(e).filter((c) => Ke(c) && Jt(c) !== "body"), i = null;
  const r = ct(e).position === "fixed";
  let l = r ? $r(e) : e;
  for (; Ke(l) && !Ia(l); ) {
    const c = ct(l), _ = Wa(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = $r(l);
  }
  return t.set(e, o), o;
}
function t$(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? e$(t, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = tu(t, s, i);
    return h.top = Yo(d.top, h.top), h.right = Zf(d.right, h.right), h.bottom = Zf(d.bottom, h.bottom), h.left = Yo(d.left, h.left), h;
  }, tu(t, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const n$ = {
  getClippingRect: t$,
  convertOffsetParentRelativeRectToViewportRelativeRect: Kw,
  isElement: Ke,
  getDimensions: Xw,
  getOffsetParent: eu,
  getDocumentElement: tn,
  getScale: Sn,
  async getElementRects(e) {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const i = this.getOffsetParent || eu, r = this.getDimensions;
    return {
      reference: Gw(t, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => ct(e).direction === "rtl"
};
function o$(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Ke(e) ? Go(e) : e.contextElement ? Go(e.contextElement) : [], ...Go(t)] : [];
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
    }), Ke(e) && !c && s.observe(e), !Ke(e) && e.contextElement && !c && s.observe(e.contextElement), s.observe(t);
  }
  let d, f = c ? yn(e) : null;
  c && a();
  function a() {
    const u = yn(e);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const r$ = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: n$,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return Lw(e, t, {
    ...i,
    platform: r
  });
};
var zn, Vn, fn, qr, Ee, Xr, Kr, na, wl, Im, $l, Um, kl, Fm, xl, Bm, Sl, jm, Cl, zm, El, Vm, Al;
const rn = class extends Ze {
  constructor() {
    super(...arguments);
    E(this, Kr);
    E(this, wl);
    E(this, $l);
    E(this, kl);
    E(this, xl);
    E(this, Sl);
    E(this, Cl);
    E(this, El);
    E(this, zn, void 0);
    E(this, Vn, 0);
    E(this, fn, void 0);
    E(this, qr, void 0);
    E(this, Ee, void 0);
    E(this, Xr, void 0);
    M(this, "hideLater", () => {
      y(this, Al).call(this), H(this, Vn, window.setTimeout(this.hide.bind(this), 100));
    });
    E(this, Al, () => {
      clearTimeout(y(this, Vn)), H(this, Vn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, fn)) == null ? void 0 : n.classList.contains(rn.CLASS_SHOW);
  }
  get timepicker() {
    return y(this, fn) || W(this, $l, Um).call(this);
  }
  get trigger() {
    return y(this, qr) || this.element;
  }
  get elementShowClass() {
    return `with-${rn.NAME}-show`;
  }
  show(n) {
    return H(this, qr, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(rn.CLASS_SHOW), W(this, Cl, zm).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = y(this, Xr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, fn)) == null || o.classList.remove(rn.CLASS_SHOW), !0;
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
let Ie = rn;
zn = new WeakMap(), Vn = new WeakMap(), fn = new WeakMap(), qr = new WeakMap(), Ee = new WeakMap(), Xr = new WeakMap(), Kr = new WeakSet(), na = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, wl = new WeakSet(), Im = function() {
  const n = W(this, Kr, na).call(this);
  return H(this, Ee, document.createElement("div")), y(this, Ee).style.position = "absolute", y(this, Ee).style.width = `${n}px`, y(this, Ee).style.height = `${n}px`, y(this, Ee).style.transform = "rotate(45deg)", y(this, Ee);
}, $l = new WeakSet(), Um = function() {
  const n = rn.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), xw($m(Tw, { ...this.options }), o), this.options.arrow && o.append(W(this, wl, Im).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, fn, o), o;
}, kl = new WeakSet(), Fm = function() {
  var l;
  const n = W(this, Kr, na).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [Vw(n), jw()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && y(this, Ee) && ((l = r.middleware) == null || l.push(Ow({ element: y(this, Ee) }))), r;
}, xl = new WeakSet(), Bm = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Sl = new WeakSet(), jm = function(n) {
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
}, Cl = new WeakSet(), zm = function() {
  const n = W(this, kl, Fm).call(this), o = W(this, El, Vm).call(this);
  H(this, Xr, o$(o, this.timepicker, () => {
    r$(o, this.timepicker, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.timepicker.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, xl, Bm).call(this, _);
      if (l.arrow && y(this, Ee)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(y(this, Ee).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Ee).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, Sl, jm).call(this, _)
        });
      }
    });
  }));
}, El = new WeakSet(), Vm = function() {
  return y(this, zn) || H(this, zn, {
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
  }), y(this, zn);
}, Al = new WeakMap(), M(Ie, "NAME", "timepicker"), M(Ie, "CLASSNAME", "timepicker"), M(Ie, "CLASS_SHOW", "show"), M(Ie, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), M(Ie, "DEFAULT", {
  value: Ti().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Ie.MENU_SELECTOR);
  n ? Ie.ensure(n).toggle() : Ie.clear({ event: e });
});
const s$ = (e) => {
  const t = document.getElementsByClassName("with-timepicker-show")[0];
  if (!t)
    return;
  const n = typeof t.closest == "function" ? t.closest(Ie.MENU_SELECTOR) : null;
  !n || !e.target.contains(n) || Ie.clear({ event: e });
};
window.addEventListener("scroll", s$, !0);
class nu extends Se {
}
M(nu, "NAME", "toolbar"), M(nu, "Component", to);
function us(e) {
  return e.split("-")[1];
}
function Ua(e) {
  return e === "y" ? "height" : "width";
}
function ro(e) {
  return e.split("-")[0];
}
function $c(e) {
  return ["top", "bottom"].includes(ro(e)) ? "x" : "y";
}
function ou(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = $c(t), _ = Ua(c), h = o[_] / 2 - i[_] / 2, s = ro(t), d = c === "x";
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
  switch (us(t)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const i$ = async (e, t, n) => {
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
  } = ou(h, o, _), f = o, a = {}, u = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: p,
      fn: m
    } = c[b], {
      x: g,
      y: w,
      data: $,
      reset: S
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
        ...$
      }
    }, S && u <= 50) {
      u++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (h = S.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : S.rects), {
        x: s,
        y: d
      } = ou(h, f, _)), b = -1;
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
function l$(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ym(e) {
  return typeof e != "number" ? l$(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Di(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function c$(e, t) {
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
  } = t, u = Ym(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Di(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Di(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - S.top + u.top) / $.y,
    bottom: (S.bottom - m.bottom + u.bottom) / $.y,
    left: (m.left - S.left + u.left) / $.x,
    right: (S.right - m.right + u.right) / $.x
  };
}
const a$ = Math.min, _$ = Math.max;
function f$(e, t, n) {
  return _$(e, a$(t, n));
}
const u$ = (e) => ({
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
    const h = Ym(o), s = {
      x: i,
      y: r
    }, d = $c(l), f = Ua(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const $ = p / 2 - m / 2, S = h[u], T = w - a[f] - h[b], A = w / 2 - a[f] / 2 + $, v = f$(S, A, T), R = us(l) != null && A != v && c.reference[f] / 2 - (A < S ? h[u] : h[b]) - a[f] / 2 < 0 ? A < S ? S - A : T - A : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: v,
        centerOffset: A - v
      }
    };
  }
}), h$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ni(e) {
  return e.replace(/left|right|bottom|top/g, (t) => h$[t]);
}
function d$(e, t, n) {
  n === void 0 && (n = !1);
  const o = us(e), i = $c(e), r = Ua(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = Ni(l)), {
    main: l,
    cross: Ni(l)
  };
}
const p$ = {
  start: "end",
  end: "start"
};
function oa(e) {
  return e.replace(/start|end/g, (t) => p$[t]);
}
function m$(e) {
  const t = Ni(e);
  return [oa(e), t, oa(t)];
}
function g$(e, t, n) {
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
function y$(e, t, n, o) {
  const i = us(e);
  let r = g$(ro(e), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), t && (r = r.concat(r.map(oa)))), r;
}
const v$ = function(e) {
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
      } = e, p = ro(o), m = ro(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [Ni(l)] : m$(l));
      !d && a !== "none" && w.push(...y$(l, u, a, g));
      const $ = [l, ...w], S = await c$(t, b), T = [];
      let A = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && T.push(S[p]), s) {
        const {
          main: R,
          cross: V
        } = d$(o, r, g);
        T.push(S[R], S[V]);
      }
      if (A = [...A, {
        placement: o,
        overflows: T
      }], !T.every((R) => R <= 0)) {
        var v;
        const R = (((v = i.flip) == null ? void 0 : v.index) || 0) + 1, V = $[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: A
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = A.map((C) => [C, C.overflows.filter((k) => k > 0).reduce((k, N) => k + N, 0)]).sort((C, k) => C[1] - k[1])[0]) == null ? void 0 : x[0].placement;
            D && (B = D);
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
async function b$(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = ro(n), c = us(n), _ = $c(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof t == "function" ? t(e) : t;
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
const w$ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, i = await b$(t, e);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function ze(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function at(e) {
  return ze(e).getComputedStyle(e);
}
function Zt(e) {
  return qm(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ws;
function Gm() {
  if (ws)
    return ws;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ws = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ws) : navigator.userAgent;
}
function wt(e) {
  return e instanceof ze(e).HTMLElement;
}
function Je(e) {
  return e instanceof ze(e).Element;
}
function qm(e) {
  return e instanceof ze(e).Node;
}
function ru(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = ze(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function kc(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = at(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i);
}
function $$(e) {
  return ["table", "td", "th"].includes(Zt(e));
}
function Fa(e) {
  const t = /firefox/i.test(Gm()), n = at(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Xm() {
  return !/^((?!chrome|android).)*safari/i.test(Gm());
}
function Ba(e) {
  return ["html", "body", "#document"].includes(Zt(e));
}
const su = Math.min, qo = Math.max, Pi = Math.round;
function Km(e) {
  const t = at(e);
  let n = parseFloat(t.width), o = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, l = Pi(n) !== i || Pi(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Jm(e) {
  return Je(e) ? e : e.contextElement;
}
const Zm = {
  x: 1,
  y: 1
};
function Cn(e) {
  const t = Jm(e);
  if (!wt(t))
    return Zm;
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = Km(t);
  let l = (r ? Pi(n.width) : n.width) / o, c = (r ? Pi(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function vn(e, t, n, o) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), c = Jm(e);
  let _ = Zm;
  t && (o ? Je(o) && (_ = Cn(o)) : _ = Cn(e));
  const h = c ? ze(c) : window, s = !Xm() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = ze(c), p = o && Je(o) ? ze(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = Cn(m), w = m.getBoundingClientRect(), $ = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat($.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat($.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = ze(m).frameElement;
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
function nn(e) {
  return ((qm(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function xc(e) {
  return Je(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Qm(e) {
  return vn(nn(e)).left + xc(e).scrollLeft;
}
function k$(e, t, n) {
  const o = wt(t), i = nn(t), r = vn(e, !0, n === "fixed", t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Zt(t) !== "body" || kc(i)) && (l = xc(t)), wt(t)) {
      const _ = vn(t, !0);
      c.x = _.x + t.clientLeft, c.y = _.y + t.clientTop;
    } else
      i && (c.x = Qm(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function kr(e) {
  if (Zt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node
    e.assignedSlot || // DOM Element detected
    e.parentNode || // ShadowRoot detected
    (ru(e) ? e.host : null) || // Fallback
    nn(e)
  );
  return ru(t) ? t.host : t;
}
function iu(e) {
  return !wt(e) || at(e).position === "fixed" ? null : e.offsetParent;
}
function x$(e) {
  let t = kr(e);
  for (; wt(t) && !Ba(t); ) {
    if (Fa(t))
      return t;
    t = kr(t);
  }
  return null;
}
function lu(e) {
  const t = ze(e);
  let n = iu(e);
  for (; n && $$(n) && at(n).position === "static"; )
    n = iu(n);
  return n && (Zt(n) === "html" || Zt(n) === "body" && at(n).position === "static" && !Fa(n)) ? t : n || x$(e) || t;
}
function S$(e) {
  return Km(e);
}
function C$(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const i = wt(n), r = nn(n);
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
  if ((i || !i && o !== "fixed") && ((Zt(n) !== "body" || kc(r)) && (l = xc(n)), wt(n))) {
    const h = vn(n);
    c = Cn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - l.scrollLeft * c.x + _.x,
    y: t.y * c.y - l.scrollTop * c.y + _.y
  };
}
function E$(e, t) {
  const n = ze(e), o = nn(e), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Xm();
    (h || !h && t === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function A$(e) {
  var t;
  const n = nn(e), o = xc(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = qo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = qo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Qm(e);
  const _ = -o.scrollTop;
  return at(i || n).direction === "rtl" && (c += qo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function eg(e) {
  const t = kr(e);
  return Ba(t) ? e.ownerDocument.body : wt(t) && kc(t) ? t : eg(t);
}
function Xo(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = eg(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ze(o);
  return i ? t.concat(r, r.visualViewport || [], kc(o) ? o : []) : t.concat(o, Xo(o));
}
function T$(e, t) {
  const n = vn(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, r = wt(e) ? Cn(e) : {
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
function cu(e, t, n) {
  return t === "viewport" ? Di(E$(e, n)) : Je(t) ? T$(t, n) : Di(A$(nn(e)));
}
function L$(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Xo(e).filter((c) => Je(c) && Zt(c) !== "body"), i = null;
  const r = at(e).position === "fixed";
  let l = r ? kr(e) : e;
  for (; Je(l) && !Ba(l); ) {
    const c = at(l), _ = Fa(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = kr(l);
  }
  return t.set(e, o), o;
}
function M$(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? L$(t, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = cu(t, s, i);
    return h.top = qo(d.top, h.top), h.right = su(d.right, h.right), h.bottom = su(d.bottom, h.bottom), h.left = qo(d.left, h.left), h;
  }, cu(t, c, i));
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
  isElement: Je,
  getDimensions: S$,
  getOffsetParent: lu,
  getDocumentElement: nn,
  getScale: Cn,
  async getElementRects(e) {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const i = this.getOffsetParent || lu, r = this.getDimensions;
    return {
      reference: k$(t, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => at(e).direction === "rtl"
};
function D$(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Je(e) ? Xo(e) : e.contextElement ? Xo(e.contextElement) : [], ...Xo(t)] : [];
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
    }), Je(e) && !c && s.observe(e), !Je(e) && e.contextElement && !c && s.observe(e.contextElement), s.observe(t);
  }
  let d, f = c ? vn(e) : null;
  c && a();
  function a() {
    const u = vn(e);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const N$ = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: R$,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return i$(e, t, {
    ...i,
    platform: r
  });
};
var Yn, Gn, qn, un, Ae, Tl, Jr, Zr, ra, Ll, tg, Ml, ng, Rl, og, Dl, rg, Nl, sg, Pl, ig, Ol, lg, Xn, Hl, cg;
const sn = class extends Ze {
  constructor() {
    super(...arguments);
    E(this, Zr);
    E(this, Ll);
    E(this, Ml);
    E(this, Rl);
    E(this, Dl);
    E(this, Nl);
    E(this, Pl);
    E(this, Ol);
    E(this, Hl);
    E(this, Yn, !1);
    E(this, Gn, void 0);
    E(this, qn, 0);
    E(this, un, void 0);
    E(this, Ae, void 0);
    E(this, Tl, void 0);
    E(this, Jr, void 0);
    M(this, "hideLater", () => {
      y(this, Xn).call(this), H(this, qn, window.setTimeout(this.hide.bind(this), 100));
    });
    E(this, Xn, () => {
      clearTimeout(y(this, qn)), H(this, qn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = y(this, un)) == null ? void 0 : n.classList.contains(sn.CLASS_SHOW);
  }
  get tooltip() {
    return y(this, un) || W(this, Ml, ng).call(this);
  }
  get trigger() {
    return y(this, Tl) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${sn.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !y(this, Yn) && this.isHover && W(this, Hl, cg).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(sn.CLASS_SHOW), W(this, Pl, ig).call(this), !0;
  }
  hide() {
    var n, o;
    return (n = y(this, Jr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = y(this, un)) == null || o.classList.remove(sn.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    y(this, Yn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", y(this, Xn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, i = this.getAll().entries(), r = new Set(o || []);
    for (const [l, c] of i)
      r.has(l) || c.hide();
  }
};
let Ue = sn;
Yn = new WeakMap(), Gn = new WeakMap(), qn = new WeakMap(), un = new WeakMap(), Ae = new WeakMap(), Tl = new WeakMap(), Jr = new WeakMap(), Zr = new WeakSet(), ra = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Ll = new WeakSet(), tg = function() {
  const n = W(this, Zr, ra).call(this);
  return H(this, Ae, document.createElement("div")), y(this, Ae).style.position = this.options.strategy, y(this, Ae).style.width = `${n}px`, y(this, Ae).style.height = `${n}px`, y(this, Ae).style.transform = "rotate(45deg)", y(this, Ae);
}, Ml = new WeakSet(), ng = function() {
  var i;
  const n = sn.TOOLTIP_CLASS;
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
  if (this.options.arrow && (o == null || o.append(W(this, Ll, tg).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, un, o), o;
}, Rl = new WeakSet(), og = function() {
  var l;
  const n = W(this, Zr, ra).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [w$(n), v$()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && y(this, Ae) && ((l = r.middleware) == null || l.push(u$({ element: y(this, Ae) }))), r;
}, Dl = new WeakSet(), rg = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Nl = new WeakSet(), sg = function(n) {
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
}, Pl = new WeakSet(), ig = function() {
  const n = W(this, Rl, og).call(this), o = W(this, Ol, lg).call(this);
  H(this, Jr, D$(o, this.tooltip, () => {
    N$(o, this.tooltip, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, Dl, rg).call(this, _);
      if (l.arrow && y(this, Ae)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(y(this, Ae).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-y(this, Ae).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, Nl, sg).call(this, _)
        });
      }
    });
  }));
}, Ol = new WeakSet(), lg = function() {
  return y(this, Gn) || H(this, Gn, {
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
  }), y(this, Gn);
}, Xn = new WeakMap(), Hl = new WeakSet(), cg = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", y(this, Xn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Yn, !0);
}, M(Ue, "NAME", "tooltip"), M(Ue, "TOOLTIP_CLASS", "tooltip"), M(Ue, "CLASS_SHOW", "show"), M(Ue, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), M(Ue, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  const n = e.target.closest(Ue.MENU_SELECTOR);
  if (n) {
    const o = Ue.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Ue.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  const t = e.target, n = typeof t.closest == "function" ? t.closest(Ue.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Ue.ensure(n);
  o.isHover && o.show();
});
var ag, ge, _g, Ko, au, fg = {}, ug = [], P$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function zt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function hg(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Nc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++_g };
  return i == null && ge.vnode != null && ge.vnode(r), r;
}
function ja(e) {
  return e.children;
}
function Jo(e, t) {
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
function dg(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return dg(e);
  }
}
function _u(e) {
  (!e.__d && (e.__d = !0) && Ko.push(e) && !Oi.__r++ || au !== ge.debounceRendering) && ((au = ge.debounceRendering) || setTimeout)(Oi);
}
function Oi() {
  for (var e; Oi.__r = Ko.length; )
    e = Ko.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ko = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = zt({}, r)).__v = r.__v + 1, yg(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? xr(r), r.__h), H$(o, r), r.__e != l && dg(r)));
    });
}
function pg(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || ug, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Nc(null, a, null, null, a) : Array.isArray(a) ? Nc(ja, { children: a }, null, null, null) : a.__b > 0 ? Nc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      yg(e, a, f = f || fg, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = mg(a, _, e) : _ = gg(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = xr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && bg(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      vg(p[s], p[++s], p[++s]);
}
function mg(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? mg(o, t, n) : gg(n, o, o, i, o.__e, t));
  return t;
}
function gg(e, t, n, o, i, r) {
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
function O$(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Hi(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Hi(e, r, t[r], n[r], o);
}
function fu(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || P$.test(t) ? n : n + "px";
}
function Hi(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || fu(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || fu(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? hu : uu, r) : e.removeEventListener(t, r ? hu : uu, r);
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
function uu(e) {
  this.l[e.type + !1](ge.event ? ge.event(e) : e);
}
function hu(e) {
  this.l[e.type + !0](ge.event ? ge.event(e) : e);
}
function yg(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ge.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Jo(p, g), s.constructor = v, s.render = I$), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = zt({}, s.__s)), zt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = ge.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = zt(zt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === ja && h.key == null ? h.props.children : h, pg(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = W$(n.__e, t, n, o, i, r, l, _);
    (h = ge.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ge.__e(x, t, n);
  }
}
function H$(e, t) {
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
function W$(e, t, n, o, i, r, l, c) {
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
    if (r = r && ag.call(e.childNodes), h = (d = n.props || fg).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (O$(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, pg(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && xr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && hg(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Hi(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Hi(e, "checked", u, d.checked, !1));
  }
  return e;
}
function vg(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ge.__e(o, n);
  }
}
function bg(e, t, n) {
  var o, i;
  if (ge.unmount && ge.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || vg(o, null, t)), (o = e.__c) != null) {
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
      o[i] && bg(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || hg(e.__e), e.__ = e.__e = e.__d = void 0;
}
function I$(e, t, n) {
  return this.constructor(e, n);
}
ag = ug.slice, ge = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, _g = 0, Jo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = zt({}, this.state), typeof e == "function" && (e = e(zt({}, n), this.props)), e && zt(n, e), e != null && this.__v && (t && this._sb.push(t), _u(this));
}, Jo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), _u(this));
}, Jo.prototype.render = ja, Ko = [], Oi.__r = 0;
var U$ = 0;
function Wi(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --U$, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ge.vnode && ge.vnode(_), _;
}
function F$({
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
  d ? a = d(e, c) : l ? a = /* @__PURE__ */ Wi(l, { ...h }) : a = c;
  const { left: u, top: b, width: p, height: m } = o;
  return /* @__PURE__ */ Wi("div", { style: { width: p, height: m, left: u + i, top: b + r, ...n }, ...f, children: [
    a,
    s
  ] });
}
function B$(e, t, n = 0, o = 0) {
  const i = e.left + n, r = e.top + o;
  return !(i > t.left + t.width || r > t.top + t.height || i + e.width < t.left || r + e.height < t.top);
}
let j$ = class extends Jo {
  render() {
    const { width: t, height: n, cells: o, left: i, top: r, visibleBounding: l, onRenderCell: c, style: _, children: h, offsetX: s = 0, offsetY: d = 0, ...f } = this.props, a = l ? o.filter((u) => B$(u.bounding, l, s, d)) : o;
    return /* @__PURE__ */ Wi("div", { style: { width: t, height: n, left: i, top: r, ..._ }, ...f, children: [
      a.map((u) => /* @__PURE__ */ Wi(F$, { offsetX: s, offsetY: d, ...u })),
      h
    ] });
  }
};
class du extends Se {
}
M(du, "NAME", "virtualgrid"), M(du, "Component", j$);
var Ye, Qr, es, Et, $e, Z, Wl, wg, Il, $g, ts, sa, Ul, kg, Fl, xg, ns, ia, Bl, Sg, jl, Cg, zl, Eg;
class z$ {
  constructor(t, n = {}) {
    E(this, Wl);
    E(this, Il);
    E(this, ts);
    E(this, Ul);
    E(this, Fl);
    E(this, ns);
    E(this, Bl);
    E(this, jl);
    E(this, zl);
    E(this, Ye, void 0);
    E(this, Qr, void 0);
    E(this, es, void 0);
    E(this, Et, void 0);
    E(this, $e, void 0);
    E(this, Z, new XMLHttpRequest());
    var o, i;
    if (H(this, $e, n), H(this, Ye, t instanceof HTMLFormElement ? t : document.querySelector(t)), !(y(this, Ye) instanceof HTMLFormElement))
      throw new Error("Param form must be a HTMLFormElement.");
    if (H(this, es, (this.formEl.method ?? n.method ?? "POST").toUpperCase()), !["GET", "POST"].includes(this.method))
      throw new Error('Method must be "GET" or "POST"!');
    if (this.method === "GET" && (y(this, $e).formType = "AJAX"), H(this, Qr, y(this, Ye).action ?? n.url ?? ""), !this.url)
      throw new Error("Form action is required!");
    (o = this.formEl.querySelector("[data-type=submit]")) == null || o.addEventListener("click", () => {
      this.submit();
    }), (i = this.formEl.querySelector("[data-type=reset]")) == null || i.addEventListener("click", () => {
      this.reset();
    });
  }
  get responseType() {
    return y(this, $e).responseType ?? "json";
  }
  get formType() {
    return y(this, $e).formType ?? "AJAX";
  }
  get url() {
    return y(this, Qr);
  }
  get method() {
    return y(this, es);
  }
  get formEl() {
    return y(this, Ye);
  }
  get onLoad() {
    return y(this, $e).onLoad;
  }
  get onError() {
    return y(this, $e).onError;
  }
  get onLoadend() {
    return y(this, $e).onLoadend;
  }
  get onLoadstart() {
    return y(this, $e).onLoadstart;
  }
  get onProgress() {
    return y(this, $e).onProgress;
  }
  get onAbort() {
    return y(this, $e).onAbort;
  }
  get onTimeout() {
    return y(this, $e).onTimeout;
  }
  get beforeSubmit() {
    return y(this, $e).beforeSubmit;
  }
  get generateGetURL() {
    return y(this, $e).generateGetURL;
  }
  get formData() {
    return y(this, Et);
  }
  get headers() {
    return y(this, $e).headers;
  }
  get rules() {
    return y(this, $e).rules;
  }
  get timeout() {
    return y(this, $e).timeout;
  }
  get status() {
    return y(this, Z).status;
  }
  get statusText() {
    return y(this, Z).statusText;
  }
  get readyState() {
    return y(this, Z).readyState;
  }
  get response() {
    return y(this, Z).response;
  }
  get responseXML() {
    return y(this, Z).responseXML;
  }
  get responseText() {
    return y(this, Z).responseText;
  }
  get responseURL() {
    return y(this, Z).responseURL;
  }
  get withCredentials() {
    return y(this, Z).withCredentials;
  }
  get upload() {
    return y(this, Z).upload;
  }
  submit() {
    W(this, Fl, xg).call(this), W(this, Ul, kg).call(this) && (this.beforeSubmit && !this.beforeSubmit(this.formData) || (this.method === "POST" ? W(this, zl, Eg).call(this) : W(this, jl, Cg).call(this)));
  }
  abort() {
    y(this, Z).abort();
  }
  getAllResponseHeaders() {
    return y(this, Z).getAllResponseHeaders();
  }
  getResponseHeader(t) {
    return y(this, Z).getResponseHeader(t);
  }
  overrideMimeType(t) {
    return y(this, Z).overrideMimeType(t);
  }
  reset() {
    y(this, Ye).reset(), W(this, ts, sa).call(this);
  }
}
Ye = new WeakMap(), Qr = new WeakMap(), es = new WeakMap(), Et = new WeakMap(), $e = new WeakMap(), Z = new WeakMap(), Wl = new WeakSet(), wg = function(t, n) {
  const o = t.closest(".form-group");
  if (!o) {
    console.warn("Form element should be in .form-group!");
    return;
  }
  o.querySelectorAll(".form-tip").forEach((r) => r.remove());
  const i = document.createElement("div");
  i.innerText = n, i.classList.add("form-tip"), o.classList.add("has-error"), o.append(i);
}, Il = new WeakSet(), $g = function(t) {
  const n = t.closest(".form-group");
  if (!n) {
    console.warn("Form element should be in .form-group!");
    return;
  }
  n.classList.remove("has-error"), n.querySelectorAll(".form-tip").forEach((o) => o.remove());
}, ts = new WeakSet(), sa = function() {
  y(this, Ye).querySelectorAll("[name]").forEach((n) => {
    W(this, Il, $g).call(this, n);
  });
}, Ul = new WeakSet(), kg = function() {
  if (!this.rules || !Object.keys(this.rules).length)
    return !0;
  W(this, ts, sa).call(this);
  let t = !0;
  return y(this, Ye).querySelectorAll("[name]:not(.disabled)").forEach((n) => {
    const { name: o, value: i } = n, r = this.rules[o];
    if (!r)
      return;
    const l = (c) => "required" in c && c.required && !i || "regexp" in c && c.regexp && !c.regexp.test(i) || "validate" in c && c.validate && !c.validate(i) ? (W(this, Wl, wg).call(this, n, c.errMsg), t = !1) : !0;
    if (Array.isArray(r)) {
      for (const c of r)
        if (!l(c))
          break;
      return;
    }
    l(r);
  }), t;
}, Fl = new WeakSet(), xg = function() {
  const t = [...y(this, Ye).querySelectorAll("[name]:not(.disabled)")].filter((n) => !(n.tagName.toLowerCase() === "input" && (n.type.toLowerCase() === "radio" || n.type.toLowerCase() === "checkbox") && !n.checked));
  if (this.formType === "AJAX") {
    H(this, Et, {}), t.forEach(({ name: n, value: o, tagName: i, type: r }) => {
      const l = y(this, Et);
      if (i.toLowerCase() === "input" && r.toLowerCase() === "checkbox") {
        l[n] ? l[n].push(o) : l[n] = [o];
        return;
      }
      l[n] = o;
    });
    return;
  }
  H(this, Et, new FormData(this.formEl));
}, ns = new WeakSet(), ia = function() {
  this.headers && Object.entries(this.headers).forEach(([t, n]) => {
    y(this, Z).setRequestHeader(t, n);
  }), y(this, Z).responseType = this.responseType, this.onLoadstart && y(this, Z).addEventListener("loadstart", this.onLoadstart), this.onLoad && y(this, Z).addEventListener("load", this.onLoad), this.onLoadend && y(this, Z).addEventListener("loadend", this.onLoadend), this.onProgress && y(this, Z).addEventListener("progress", this.onProgress), this.onError && y(this, Z).addEventListener("error", this.onError), this.onAbort && y(this, Z).addEventListener("abort", this.onAbort), this.onTimeout && y(this, Z).addEventListener("timeout", this.onTimeout);
}, Bl = new WeakSet(), Sg = function(t) {
  return Object.entries(t).map(([n, o]) => `${encodeURIComponent(n)}=${encodeURIComponent(o)}`).join("&");
}, jl = new WeakSet(), Cg = function() {
  const t = this.generateGetURL ? this.generateGetURL(this.url, this.formData) : `${this.url}?${W(this, Bl, Sg).call(this, y(this, Et))}`;
  y(this, Z).open("GET", t), W(this, ns, ia).call(this), y(this, Z).send();
}, zl = new WeakSet(), Eg = function() {
  y(this, Z).open("POST", this.url), W(this, ns, ia).call(this);
  const t = this.formType === "AJAX" ? JSON.stringify(this.formData) : this.formData;
  y(this, Z).send(t);
}, M(z$, "NAME", "zui.ajaxForm");
var za, ye, Ag, Tg, Zo, pu, Lg = {}, Mg = [], V$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Vt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Rg(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Va(e, t, n) {
  var o, i, r, l = {};
  for (r in t)
    r == "key" ? o = t[r] : r == "ref" ? i = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? za.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return Fs(e, l, o, i, null);
}
function Fs(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ag };
  return i == null && ye.vnode != null && ye.vnode(r), r;
}
function Y$() {
  return { current: null };
}
function Ya(e) {
  return e.children;
}
function Qo(e, t) {
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
function Dg(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Dg(e);
  }
}
function mu(e) {
  (!e.__d && (e.__d = !0) && Zo.push(e) && !Ii.__r++ || pu !== ye.debounceRendering) && ((pu = ye.debounceRendering) || setTimeout)(Ii);
}
function Ii() {
  for (var e; Ii.__r = Zo.length; )
    e = Zo.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Zo = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Vt({}, r)).__v = r.__v + 1, Hg(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Sr(r), r.__h), q$(o, r), r.__e != l && Dg(r)));
    });
}
function Ng(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Mg, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Fs(null, a, null, null, a) : Array.isArray(a) ? Fs(Ya, { children: a }, null, null, null) : a.__b > 0 ? Fs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Hg(e, a, f = f || Lg, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Pg(a, _, e) : _ = Og(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Sr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Ig(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Wg(p[s], p[++s], p[++s]);
}
function Pg(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Pg(o, t, n) : Og(n, o, o, i, o.__e, t));
  return t;
}
function Og(e, t, n, o, i, r) {
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
function G$(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Ui(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Ui(e, r, t[r], n[r], o);
}
function gu(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || V$.test(t) ? n : n + "px";
}
function Ui(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || gu(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || gu(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? vu : yu, r) : e.removeEventListener(t, r ? vu : yu, r);
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
function yu(e) {
  this.l[e.type + !1](ye.event ? ye.event(e) : e);
}
function vu(e) {
  this.l[e.type + !0](ye.event ? ye.event(e) : e);
}
function Hg(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ye.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new Qo(p, g), s.constructor = v, s.render = K$), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Vt({}, s.__s)), Vt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = ye.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = Vt(Vt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Ya && h.key == null ? h.props.children : h, Ng(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = X$(n.__e, t, n, o, i, r, l, _);
    (h = ye.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ye.__e(x, t, n);
  }
}
function q$(e, t) {
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
function X$(e, t, n, o, i, r, l, c) {
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
    if (r = r && za.call(e.childNodes), h = (d = n.props || Lg).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (G$(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Ng(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Sr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Rg(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Ui(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Ui(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Wg(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ye.__e(o, n);
  }
}
function Ig(e, t, n) {
  var o, i;
  if (ye.unmount && ye.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Wg(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ye.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Ig(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || Rg(e.__e), e.__ = e.__e = e.__d = void 0;
}
function K$(e, t, n) {
  return this.constructor(e, n);
}
za = Mg.slice, ye = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Ag = 0, Tg = function(e) {
  return e != null && e.constructor === void 0;
}, Qo.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Vt({}, this.state), typeof e == "function" && (e = e(Vt({}, n), this.props)), e && Vt(n, e), e != null && this.__v && (t && this._sb.push(t), mu(this));
}, Qo.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), mu(this));
}, Qo.prototype.render = Ya, Zo = [], Ii.__r = 0;
var J$ = 0;
function Y(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --J$, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ye.vnode && ye.vnode(_), _;
}
let Z$ = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Ug, ve, Fg, er, bu, Bg = {}, jg = [], Q$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Yt(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function zg(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Pc(e, t, n, o, i) {
  var r = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Fg };
  return i == null && ve.vnode != null && ve.vnode(r), r;
}
function Ga(e) {
  return e.children;
}
function tr(e, t) {
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
function Vg(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Vg(e);
  }
}
function wu(e) {
  (!e.__d && (e.__d = !0) && er.push(e) && !Fi.__r++ || bu !== ve.debounceRendering) && ((bu = ve.debounceRendering) || setTimeout)(Fi);
}
function Fi() {
  for (var e; Fi.__r = er.length; )
    e = er.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), er = [], e.some(function(t) {
      var n, o, i, r, l, c;
      t.__d && (l = (r = (n = t).__v).__e, (c = n.__P) && (o = [], (i = Yt({}, r)).__v = r.__v + 1, Xg(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Cr(r), r.__h), tk(o, r), r.__e != l && Vg(r)));
    });
}
function Yg(e, t, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || jg, g = m.length;
  for (n.__k = [], s = 0; s < t.length; s++)
    if ((a = n.__k[s] = (a = t[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Pc(null, a, null, null, a) : Array.isArray(a) ? Pc(Ga, { children: a }, null, null, null) : a.__b > 0 ? Pc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Xg(e, a, f = f || Bg, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Gg(a, _, e) : _ = qg(e, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != e && (_ = Cr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Jg(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Kg(p[s], p[++s], p[++s]);
}
function Gg(e, t, n) {
  for (var o, i = e.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = e, t = typeof o.type == "function" ? Gg(o, t, n) : qg(n, o, o, i, o.__e, t));
  return t;
}
function qg(e, t, n, o, i, r) {
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
function ek(e, t, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Bi(e, r, null, n[r], o);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Bi(e, r, t[r], n[r], o);
}
function $u(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Q$.test(t) ? n : n + "px";
}
function Bi(e, t, n, o, i) {
  var r;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || $u(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || $u(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? xu : ku, r) : e.removeEventListener(t, r ? xu : ku, r);
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
function ku(e) {
  this.l[e.type + !1](ve.event ? ve.event(e) : e);
}
function xu(e) {
  this.l[e.type + !0](ve.event ? ve.event(e) : e);
}
function Xg(e, t, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, $, S, T, A, v = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = t.__e = n.__e, t.__h = null, r = [c]), (h = ve.__b) && h(t);
  try {
    e:
      if (typeof v == "function") {
        if (p = t.props, m = (h = v.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = t.__c = n.__c).__ = s.__E : ("prototype" in v && v.prototype.render ? t.__c = s = new v(p, g) : (t.__c = s = new tr(p, g), s.constructor = v, s.render = ok), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), v.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Yt({}, s.__s)), Yt(s.__s, v.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        if (s.context = g, s.props = p, s.__v = t, s.__P = e, $ = ve.__r, S = 0, "prototype" in v && v.prototype.render) {
          for (s.state = s.__s, s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), T = 0; T < s._sb.length; T++)
            s.__h.push(s._sb[T]);
          s._sb = [];
        } else
          do
            s.__d = !1, $ && $(t), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++S < 25);
        s.state = s.__s, s.getChildContext != null && (o = Yt(Yt({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), A = h != null && h.type === Ga && h.key == null ? h.props.children : h, Yg(e, Array.isArray(A) ? A : [A], t, n, o, i, r, l, c, _), s.base = t.__e, t.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = nk(n.__e, t, n, o, i, r, l, _);
    (h = ve.diffed) && h(t);
  } catch (x) {
    t.__v = null, (_ || r != null) && (t.__e = c, t.__h = !!_, r[r.indexOf(c)] = null), ve.__e(x, t, n);
  }
}
function tk(e, t) {
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
function nk(e, t, n, o, i, r, l, c) {
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
    if (r = r && Ug.call(e.childNodes), h = (d = n.props || Bg).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < e.attributes.length; u++)
          d[e.attributes[u].name] = e.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
    }
    if (ek(e, f, d, i, c), s)
      t.__k = [];
    else if (u = t.props.children, Yg(e, Array.isArray(u) ? u : [u], t, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Cr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && zg(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== d.value) && Bi(e, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== e.checked && Bi(e, "checked", u, d.checked, !1));
  }
  return e;
}
function Kg(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    ve.__e(o, n);
  }
}
function Jg(e, t, n) {
  var o, i;
  if (ve.unmount && ve.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Kg(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ve.__e(r, t);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Jg(o[i], t, n || typeof e.type != "function");
  n || e.__e == null || zg(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ok(e, t, n) {
  return this.constructor(e, n);
}
Ug = jg.slice, ve = { __e: function(e, t, n, o) {
  for (var i, r, l; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        e = c;
      }
  throw e;
} }, Fg = 0, tr.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Yt({}, this.state), typeof e == "function" && (e = e(Yt({}, n), this.props)), e && Yt(n, e), e != null && this.__v && (t && this._sb.push(t), wu(this));
}, tr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), wu(this));
}, tr.prototype.render = Ga, er = [], Fi.__r = 0;
var rk = 0;
function Su(e, t, n, o, i) {
  var r, l, c = {};
  for (l in t)
    l == "ref" ? r = t[l] : c[l] = t[l];
  var _ = { type: e, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --rk, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ve.vnode && ve.vnode(_), _;
}
var hn, dn;
class Cu extends tr {
  constructor(n) {
    super(n);
    E(this, hn, 0);
    E(this, dn, null);
    M(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, i = n.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    M(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (y(this, hn) && cancelAnimationFrame(y(this, hn)), H(this, hn, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), H(this, hn, 0);
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
    n && (H(this, dn, typeof n == "string" ? document : n.current), y(this, dn).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), y(this, dn) && y(this, dn).removeEventListener("wheel", this._handleWheel);
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
    return o === "horz" ? (u.height = i, u.width = n, b.width = this.barSize, b.left = Math.round(Math.min(d, f) * (n - b.width) / d)) : (u.width = i, u.height = n, b.height = this.barSize, b.top = Math.round(Math.min(d, f) * (n - b.height) / d)), /* @__PURE__ */ Su(
      "div",
      {
        className: F("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": a
        }),
        style: u,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ Su(
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
hn = new WeakMap(), dn = new WeakMap();
function Eu(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Zg({ col: e, className: t, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
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
  }], b = ["dtable-cell-content", t], p = [c ?? ((v = o.data) == null ? void 0 : v[e.name]) ?? ""], m = i ? i(p, { row: o, col: e }, Va) : p, g = [], w = [], $ = {}, S = {};
  let T = "div";
  m == null || m.forEach((x) => {
    if (typeof x == "object" && x && !Tg(x) && ("html" in x || "className" in x || "style" in x || "attrs" in x || "children" in x || "tagName" in x)) {
      const R = x.outer ? g : w;
      x.html ? R.push(/* @__PURE__ */ Y("div", { className: F("dtable-cell-html", x.className), style: x.style, dangerouslySetInnerHTML: { __html: x.html }, ...x.attrs ?? {} })) : (x.style && Object.assign(x.outer ? s : a, x.style), x.className && (x.outer ? u : b).push(x.className), x.children && R.push(x.children), x.attrs && Object.assign(x.outer ? $ : S, x.attrs)), x.tagName && !x.outer && (T = x.tagName);
    } else
      w.push(x);
  });
  const A = T;
  return /* @__PURE__ */ Y(
    "div",
    {
      className: F(u),
      style: s,
      "data-col": e.name,
      ...h,
      ...$,
      children: [
        w.length > 0 && /* @__PURE__ */ Y(A, { className: F(b), style: a, ...S, children: w }),
        g
      ]
    }
  );
}
function Oc({ row: e, className: t, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: c = Zg, onRenderCell: _ }) {
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
function Qg({
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
  CellComponent: f = Zg,
  onRenderCell: a,
  style: u,
  ...b
}) {
  let p = null;
  i != null && i.length && (p = /* @__PURE__ */ Y(
    Oc,
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
    Oc,
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
    Oc,
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
function sk({ height: e, onRenderRow: t, ...n }) {
  const o = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const i = t({ props: o }, Va);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ Y("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ Y(Qg, { ...o }) });
}
function ik({
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
    }, d = c == null ? void 0 : c({ props: s, row: h }, Va);
    return d && Object.assign(s, d), /* @__PURE__ */ Y(Qg, { ...s });
  }) });
}
const ji = /* @__PURE__ */ new Map(), zi = [];
function ey(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && ji.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  ji.set(n, e), t != null && t.buildIn && !zi.includes(n) && zi.push(n);
}
function io(e, t) {
  ey(e, t);
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
function ty(e) {
  return ji.delete(e);
}
function lk(e) {
  if (typeof e == "string") {
    const t = ji.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function ny(e, t, n) {
  return t.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = lk(o);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && ny(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function ck(e = [], t = !0) {
  return t && zi.length && e.unshift(...zi), e != null && e.length ? ny([], e, /* @__PURE__ */ new Set()) : [];
}
function Au() {
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
var ks, pn, Kn, At, nt, Tt, xe, Ge, ot, Jn, os, rs, gt, Zn, Qn, Vl, oy, Yl, ry, Gl, sy, ql, iy, ss, la, Xl, Kl, is, ls, Jl, Zl, Ql, ly, ec, cy, tc, ay;
let ak = (ks = class extends Qo {
  constructor(n) {
    super(n);
    E(this, Vl);
    E(this, Yl);
    E(this, Gl);
    E(this, ql);
    E(this, ss);
    E(this, Ql);
    E(this, ec);
    E(this, tc);
    M(this, "ref", Y$());
    E(this, pn, 0);
    E(this, Kn, void 0);
    E(this, At, !1);
    E(this, nt, void 0);
    E(this, Tt, void 0);
    E(this, xe, []);
    E(this, Ge, void 0);
    E(this, ot, /* @__PURE__ */ new Map());
    E(this, Jn, {});
    E(this, os, void 0);
    E(this, rs, []);
    M(this, "updateLayout", () => {
      y(this, pn) && cancelAnimationFrame(y(this, pn)), H(this, pn, requestAnimationFrame(() => {
        H(this, Ge, void 0), this.forceUpdate(), H(this, pn, 0);
      }));
    });
    E(this, gt, (n, o) => {
      o = o || n.type;
      const i = y(this, ot).get(o);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    E(this, Zn, (n) => {
      y(this, gt).call(this, n, `window_${n.type}`);
    });
    E(this, Qn, (n) => {
      y(this, gt).call(this, n, `document_${n.type}`);
    });
    E(this, Xl, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return y(this, xe).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    E(this, Kl, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), y(this, xe).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    E(this, is, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, i)), this.options[c] && (n = this.options[c].call(this, n, o, i)), y(this, xe).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, i));
      }), n;
    });
    E(this, ls, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    E(this, Jl, (n) => {
      var c, _, h, s, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), y(this, xe).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === i);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of y(this, xe))
            if (((h = u.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
          return;
        for (const u of y(this, xe))
          if (((d = u.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    E(this, Zl, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, Kn, n.id ?? `dtable-${Z$(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, Tt, Object.freeze(ck(n.plugins))), y(this, Tt).forEach((o) => {
      var c;
      const { methods: i, data: r, state: l } = o;
      i && Object.entries(i).forEach(([_, h]) => {
        typeof h == "function" && Object.assign(this, { [_]: h.bind(this) });
      }), r && Object.assign(y(this, Jn), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = y(this, Ge)) == null ? void 0 : n.options) || y(this, nt) || Au();
  }
  get plugins() {
    return y(this, xe);
  }
  get layout() {
    return y(this, Ge);
  }
  get id() {
    return y(this, Kn);
  }
  get data() {
    return y(this, Jn);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, nt, void 0);
  }
  componentDidMount() {
    if (y(this, At) ? this.forceUpdate() : W(this, ss, la).call(this), y(this, xe).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", y(this, Jl)), this.on("keydown", y(this, Zl)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, os, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    y(this, xe).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    y(this, At) ? W(this, ss, la).call(this) : y(this, xe).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = y(this, os)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of y(this, ot).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), y(this, Zn)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), y(this, Qn)) : n.removeEventListener(i, y(this, gt));
    y(this, xe).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), y(this, Tt).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), H(this, Jn, {}), y(this, ot).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = y(this, ot).get(n);
    r ? r.push(o) : (y(this, ot).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), y(this, Zn)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), y(this, Qn)) : (l = this.ref.current) == null || l.addEventListener(n, y(this, gt)));
  }
  off(n, o, i) {
    var c;
    i && (n = `${i}_${n}`);
    const r = y(this, ot).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (y(this, ot).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), y(this, Zn)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), y(this, Qn)) : (c = this.ref.current) == null || c.removeEventListener(n, y(this, gt)));
  }
  emitCustomEvent(n, o) {
    y(this, gt).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
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
    let l = i.id === "HEADER" ? r.setting.title : (_ = i.data) == null ? void 0 : _[r.name];
    const { cellValueGetter: c } = this.options;
    return c && (l = c.call(this, i, r, l)), l;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    if (!y(this, nt))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      H(this, Ge, void 0);
    else if (i === "options") {
      if (H(this, nt, void 0), !y(this, Ge))
        return;
      H(this, Ge, void 0);
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
    return cs(y(this, rs), n, o, i, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = W(this, tc, ay).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], f = [];
    return n && y(this, xe).forEach((a) => {
      var b;
      const u = (b = a.onRender) == null ? void 0 : b.call(this, n);
      u && (u.style && Object.assign(s, u.style), u.className && d.push(u.className), u.children && f.push(u.children));
    }), /* @__PURE__ */ Y(
      "div",
      {
        id: y(this, Kn),
        className: F(d),
        style: s,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && W(this, Vl, oy).call(this, n),
          n && W(this, Yl, ry).call(this, n),
          n && W(this, Gl, sy).call(this, n),
          n && W(this, ql, iy).call(this, n)
        ]
      }
    );
  }
}, pn = new WeakMap(), Kn = new WeakMap(), At = new WeakMap(), nt = new WeakMap(), Tt = new WeakMap(), xe = new WeakMap(), Ge = new WeakMap(), ot = new WeakMap(), Jn = new WeakMap(), os = new WeakMap(), rs = new WeakMap(), gt = new WeakMap(), Zn = new WeakMap(), Qn = new WeakMap(), Vl = new WeakSet(), oy = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ Y(
      sk,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: y(this, is),
        onRenderRow: y(this, Kl),
        ...i
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    jc,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, Yl = new WeakSet(), ry = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ Y(
    ik,
    {
      top: o,
      height: i,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: h,
      onRenderCell: y(this, is),
      onRenderRow: y(this, Xl),
      ...c
    }
  );
}, Gl = new WeakSet(), sy = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    jc,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: i,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, ql = new WeakSet(), iy = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: s, scrollWidth: d } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > d && o.push(
    /* @__PURE__ */ Y(
      Cu,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: s,
        clientSize: d,
        onScroll: y(this, ls),
        left: r.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -f) + h,
        size: f,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > c && o.push(
    /* @__PURE__ */ Y(
      Cu,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: c,
        onScroll: y(this, ls),
        right: 0,
        size: f,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, ss = new WeakSet(), la = function() {
  var n;
  H(this, At, !1), (n = this.options.afterRender) == null || n.call(this), y(this, xe).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, Xl = new WeakMap(), Kl = new WeakMap(), is = new WeakMap(), ls = new WeakMap(), Jl = new WeakMap(), Zl = new WeakMap(), Ql = new WeakSet(), ly = function() {
  if (y(this, nt))
    return !1;
  const o = { ...Au(), ...y(this, Tt).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return H(this, nt, o), H(this, xe, y(this, Tt).reduce((i, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (i.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), i;
  }, [])), H(this, rs, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, ec = new WeakSet(), cy = function() {
  var X, we;
  const { plugins: n } = this;
  let o = y(this, nt);
  const i = {
    flex: /* @__PURE__ */ Y("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ Y("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((U) => {
    var be;
    const K = (be = U.beforeLayout) == null ? void 0 : be.call(this, o);
    K && (o = { ...o, ...K }), Object.assign(i, U.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], s = [], d = {}, f = [], a = [];
  let u = 0, b = 0, p = 0;
  o.cols.forEach((U) => {
    if (U.hidden)
      return;
    const {
      name: K,
      type: be = "",
      fixed: ie = !1,
      flex: G = !1,
      width: le = r,
      minWidth: Le = l,
      maxWidth: Me = c,
      ...my
    } = U, Q = {
      name: K,
      type: be,
      setting: {
        name: K,
        type: be,
        fixed: ie,
        flex: G,
        width: le,
        minWidth: Le,
        maxWidth: Me,
        ...my
      },
      flex: ie ? 0 : G === !0 ? 1 : typeof G == "number" ? G : 0,
      left: 0,
      width: Eu(le, Le, Me),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((Ja) => {
      var Za, Qa;
      const hs = (Za = Ja.colTypes) == null ? void 0 : Za[be];
      if (hs) {
        const e_ = typeof hs == "function" ? hs(Q) : hs;
        e_ && Object.assign(Q.setting, e_);
      }
      (Qa = Ja.onAddCol) == null || Qa.call(this, Q);
    }), Q.width = Eu(Q.setting.width ?? Q.width, Q.setting.minWidth ?? Le, Q.setting.maxWidth ?? Me), Q.realWidth = Q.realWidth || Q.width, ie === "left" ? (Q.left = u, u += Q.width, _.push(Q)) : ie === "right" ? (Q.left = b, b += Q.width, h.push(Q)) : (Q.left = p, p += Q.width, s.push(Q)), Q.flex && a.push(Q), f.push(Q), d[Q.name] = Q;
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
      g = 0, H(this, At, !0);
      return;
    }
  } else
    g = m ?? 0;
  const { data: $, rowKey: S = "id", rowHeight: T } = o, A = [], v = (U, K, be) => {
    var G, le;
    const ie = { data: be ?? { [S]: U }, id: U, index: A.length, top: 0 };
    if (be || (ie.lazy = !0), A.push(ie), ((G = o.onAddRow) == null ? void 0 : G.call(this, ie, K)) !== !1) {
      for (const Le of n)
        if (((le = Le.onAddRow) == null ? void 0 : le.call(this, ie, K)) === !1)
          return;
    }
  };
  if (typeof $ == "number")
    for (let U = 0; U < $; U++)
      v(`${U}`, U);
  else
    Array.isArray($) && $.forEach((U, K) => {
      typeof U == "object" ? v(`${U[S] ?? ""}`, K, U) : v(`${U ?? ""}`, K);
    });
  let x = A;
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
    R[U.id] = U, U.index = K, U.top = U.index * T;
  });
  const { header: V, footer: B } = o, D = V ? o.headerHeight || T : 0, C = B ? o.footerHeight || T : 0;
  let k = o.height, N = 0;
  const L = x.length * T, O = D + C + L;
  if (typeof k == "function" && (k = k.call(this, O)), k === "auto")
    N = O;
  else if (typeof k == "object")
    N = Math.min(k.max, Math.max(k.min, O));
  else if (k === "100%") {
    const { parent: U } = this;
    if (U)
      N = U.clientHeight;
    else {
      N = 0, H(this, At, !0);
      return;
    }
  } else
    N = k;
  const P = N - D - C, I = g - u - b, z = {
    options: o,
    allRows: A,
    width: g,
    height: N,
    rows: x,
    rowsMap: R,
    rowHeight: T,
    rowsHeight: P,
    rowsHeightTotal: L,
    header: V,
    footer: B,
    footerGenerators: i,
    headerHeight: D,
    footerHeight: C,
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
  }, j = (we = o.onLayout) == null ? void 0 : we.call(this, z);
  j && Object.assign(z, j), n.forEach((U) => {
    if (U.onLayout) {
      const K = U.onLayout.call(this, z);
      K && Object.assign(z, K);
    }
  }), H(this, Ge, z);
}, tc = new WeakSet(), ay = function() {
  (W(this, Ql, ly).call(this) || !y(this, Ge)) && W(this, ec, cy).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: c } } = n;
  if (i.length) {
    const w = l - c;
    if (w > 0) {
      const $ = i.reduce((T, A) => T + A.flex, 0);
      let S = 0;
      i.forEach((T) => {
        const A = Math.min(w - S, Math.ceil(w * (T.flex / $)));
        T.realWidth = A + T.width, S += T.realWidth;
      });
    } else
      i.forEach(($) => {
        $.realWidth = $.width;
      });
  }
  o = Math.min(Math.max(0, c - l), o);
  let _ = 0;
  r.forEach((w) => {
    w.left = _, _ += w.realWidth, w.visible = w.left + w.realWidth >= o && w.left <= o + l;
  });
  const { rowsHeightTotal: h, rowsHeight: s, rows: d, rowHeight: f } = n, a = Math.min(Math.max(0, h - s), this.state.scrollTop), u = Math.floor(a / f), b = a + s, p = Math.min(d.length, Math.ceil(b / f)), m = [], { rowDataGetter: g } = this.options;
  for (let w = u; w < p; w++) {
    const $ = d[w];
    $.lazy && g && ($.data = g([$.id])[0], $.lazy = !1), m.push($);
  }
  return n.visibleRows = m, n.scrollTop = a, n.scrollLeft = o, n;
}, M(ks, "addPlugin", ey), M(ks, "removePlugin", ty), ks);
function Tu(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(o));
}
const _k = {
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
      Tu(this, o);
    },
    mouseleave() {
      Tu(this, !1);
    }
  }
}, fk = io(_k, { buildIn: !0 });
function uk(e, t) {
  var l, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (_, h) => {
    i && !i.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (e === void 0 ? (t === void 0 && (t = !_y.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
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
function hk(e) {
  return this.state.checkedRows[e] ?? !1;
}
function _y() {
  var n, o;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (t.call(this, r.id) ? 1 : 0), 0)) : e === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function dk() {
  return Object.keys(this.state.checkedRows);
}
const pk = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: uk,
    isRowChecked: hk,
    isAllRowChecked: _y,
    getChecks: dk
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
    n && (this.toggleCheckRows(n.checked), e.stopPropagation());
  },
  onRowClick(e, { rowID: t }) {
    const n = e.target;
    if (!n)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
}, mk = io(pk);
var fy = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(fy || {});
function ca(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, o = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const l = ca.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return t.state = i ? "hidden" : o ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? ca.call(this, t.parent).level + 1 : 0, t;
}
function gk(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !uy.call(this)), t) {
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
function uy() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function hy(e, t = 0, n, o = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const l = e.get(r);
    l && (l.level === o && (l.order = t++), (i = l.children) != null && i.length && (t = hy(e, t, l.children, o + 1)));
  }
  return t;
}
function dy(e, t, n, o) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, dy(e, r, n, o);
  }), i;
}
function py(e, t, n, o, i) {
  var c;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : i[_]);
    return n === h;
  })) && (o[t] = n), r.parent && py(e, r.parent, n, o, i);
}
const yk = {
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
        const l = dy(this, i, r, o);
        l != null && l.parent && py(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: gk,
    isAllCollapsed: uy,
    getNestedRowInfo: ca
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
    ), hy(this.data.nestedMap), e.sort((t, n) => {
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
}, vk = io(yk);
const bk = {
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
        const { linkTemplate: o = "", linkProps: i } = t.setting, r = Ne(o, n.data);
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
            return h && (_ = { className: l, ...h, ..._ }), Ne(i, _);
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
        return typeof o == "function" ? e[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? e[0] = Qc(r, o) : i === "html" ? e[0] = { html: Ne(o, r) } : e[0] = Ne(o, r), e;
      }
    }
  }
}, wk = io(bk, { buildIn: !0 }), $k = {
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
}, kk = io($k, { buildIn: !0 }), xk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: fy,
  checkable: mk,
  colHover: fk,
  nested: vk,
  rich: wk,
  sortType: kk
}, Symbol.toStringTag, { value: "Module" }));
class co extends Se {
}
M(co, "NAME", "dtable"), M(co, "Component", ak), M(co, "definePlugin", io), M(co, "removePlugin", ty), M(co, "plugins", xk);
var He;
class mo extends Ze {
  constructor() {
    super(...arguments);
    E(this, He, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, He, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), y(this, He) && (this.addActive(y(this, He).parentElement, y(this, He)), y(this, He).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, He, document.querySelector(n)), y(this, He) && (this.addActive(y(this, He).parentElement, y(this, He)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
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
He = new WeakMap(), M(mo, "NAME", "NavTabs"), M(mo, "NAV_CLASS", "nav-tabs"), M(mo, "EVENTS", !0), M(mo, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (e) => {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new mo(e.target).showTarget());
});
export {
  h_ as ActionMenu,
  p_ as ActionMenuNested,
  z$ as AjaxForm,
  mf as Avatar,
  gf as BtnGroup,
  w_ as Button,
  De as ContextMenu,
  co as DTable,
  We as Datepicker,
  Te as Dropdown,
  _a as EventBus,
  $_ as Menu,
  ps as Messager,
  Re as Modal,
  Bo as ModalTrigger,
  Nf as Nav,
  mo as NavTabs,
  Hf as Pager,
  zf as Picker,
  tf as ProgressCircle,
  cf as Switch,
  ut as TIME_DAY,
  Ie as Timepicker,
  nu as Toolbar,
  Ue as Tooltip,
  du as VirtualGrid,
  My as addI18nMap,
  Wk as browser,
  Of as calculateTimestamp,
  Ek as convertBytes,
  Pe as createDate,
  Ck as formatBytes,
  Qc as formatDate,
  Yk as formatDateSpan,
  Ne as formatString,
  Ty as getLangCode,
  Gk as getTimeBeforeDesc,
  cs as i18n,
  Vk as isDBY,
  Cc as isObject,
  _s as isSameDay,
  nw as isSameMonth,
  Fk as isSameWeek,
  Pf as isSameYear,
  Bk as isToday,
  zk as isTomorrow,
  jk as isYesterday,
  Bc as mergeDeep,
  Fc as nativeEvents,
  Ly as setLangCode,
  Hb as store
};
