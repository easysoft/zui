var dg = Object.defineProperty;
var pg = (t, e, n) => e in t ? dg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var L = (t, e, n) => (pg(t, typeof e != "symbol" ? e + "" : e, n), n), Zl = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var v = (t, e, n) => (Zl(t, e, "read from private field"), n ? n.call(t) : e.get(t)), M = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, H = (t, e, n, o) => (Zl(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n), ka = (t, e, n, o) => ({
  set _(i) {
    H(t, e, i, n);
  },
  get _() {
    return v(t, e, o);
  }
}), W = (t, e, n) => (Zl(t, e, "access private method"), n);
var Al, tt, Gf, qf, ao, xa, Ss = {}, Xf = [], mg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function xe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Kf(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Zf(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Al.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return cs(t, l, o, i, null);
}
function cs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Gf };
  return i == null && tt.vnode != null && tt.vnode(r), r;
}
function gg() {
  return { current: null };
}
function Tl(t) {
  return t.children;
}
function as(t, e) {
  this.props = t, this.context = e;
}
function Go(t, e) {
  if (e == null)
    return t.__ ? Go(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Go(t) : null;
}
function Jf(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Jf(t);
  }
}
function Sa(t) {
  (!t.__d && (t.__d = !0) && ao.push(t) && !Cs.__r++ || xa !== tt.debounceRendering) && ((xa = tt.debounceRendering) || setTimeout)(Cs);
}
function Cs() {
  for (var t; Cs.__r = ao.length; )
    t = ao.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ao = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = xe({}, r)).__v = r.__v + 1, Dc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Go(r), r.__h), nu(o, r), r.__e != l && Jf(r)));
    });
}
function Qf(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Xf, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? cs(null, a, null, null, a) : Array.isArray(a) ? cs(Tl, { children: a }, null, null, null) : a.__b > 0 ? cs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Dc(t, a, f = f || Ss, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = tu(a, _, t) : _ = eu(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Go(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && ru(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      ou(p[s], p[++s], p[++s]);
}
function tu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? tu(o, e, n) : eu(n, o, o, i, o.__e, e));
  return e;
}
function eu(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function yg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Es(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Es(t, r, e[r], n[r], o);
}
function Ca(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || mg.test(e) ? n : n + "px";
}
function Es(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Ca(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ca(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Aa : Ea, r) : t.removeEventListener(e, r ? Aa : Ea, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
function Ea(t) {
  this.l[t.type + !1](tt.event ? tt.event(t) : t);
}
function Aa(t) {
  this.l[t.type + !0](tt.event ? tt.event(t) : t);
}
function Dc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = tt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new as(p, g), s.constructor = y, s.render = bg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = xe({}, s.__s)), xe(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = tt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = xe(xe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Tl && h.key == null ? h.props.children : h, Qf(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = vg(n.__e, e, n, o, i, r, l, _);
    (h = tt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), tt.__e(x, e, n);
  }
}
function nu(t, e) {
  tt.__c && tt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      tt.__e(o, n.__v);
    }
  });
}
function vg(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Al.call(t.childNodes), h = (d = n.props || Ss).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (yg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Qf(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Go(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Kf(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Es(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Es(t, "checked", u, d.checked, !1));
  }
  return t;
}
function ou(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    tt.__e(o, n);
  }
}
function ru(t, e, n) {
  var o, i;
  if (tt.unmount && tt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || ou(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        tt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && ru(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Kf(t.__e), t.__ = t.__e = t.__d = void 0;
}
function bg(t, e, n) {
  return this.constructor(t, n);
}
function wg(t, e, n) {
  var o, i, r;
  tt.__ && tt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Dc(e, t = (!o && n || e).__k = Zf(Tl, null, [t]), i || Ss, Ss, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Al.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), nu(r, t);
}
Al = Xf.slice, tt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Gf = 0, qf = function(t) {
  return t != null && t.constructor === void 0;
}, as.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = xe({}, this.state), typeof t == "function" && (t = t(xe({}, n), this.props)), t && xe(n, t), t != null && this.__v && (e && this._sb.push(e), Sa(this));
}, as.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Sa(this));
}, as.prototype.render = Tl, ao = [], Cs.__r = 0;
var $g = 0;
function su(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --$g, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return tt.vnode && tt.vnode(_), _;
}
var ce;
class kg {
  constructor(e = "") {
    M(this, ce, void 0);
    typeof e == "object" ? H(this, ce, e) : H(this, ce, document.appendChild(document.createComment(e)));
  }
  on(e, n, o) {
    v(this, ce).addEventListener(e, n, o);
  }
  once(e, n, o) {
    v(this, ce).addEventListener(e, n, { once: !0, ...o });
  }
  off(e, n, o) {
    v(this, ce).removeEventListener(e, n, o);
  }
  emit(e) {
    return v(this, ce).dispatchEvent(e), e;
  }
}
ce = new WeakMap();
const hc = /* @__PURE__ */ new Set([
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
class Rc extends kg {
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
    return typeof e == "string" && (hc.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(Rc.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (hc.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
var ae, gr, tn, ro;
class Ta extends Rc {
  constructor(n = "", o) {
    super(n);
    M(this, tn);
    M(this, ae, /* @__PURE__ */ new Map());
    M(this, gr, void 0);
    H(this, gr, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = W(this, tn, ro).call(this, n), super.on(n, o, i), v(this, ae).set(o, [n, i]);
  }
  off(n, o, i) {
    n = W(this, tn, ro).call(this, n), super.off(n, o, i), v(this, ae).delete(o);
  }
  once(n, o, i) {
    n = W(this, tn, ro).call(this, n);
    const r = (l) => {
      o(l), v(this, ae).delete(r);
    };
    super.once(n, r, i), v(this, ae).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = W(this, tn, ro).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(v(this, ae).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), v(this, ae).clear();
  }
}
ae = new WeakMap(), gr = new WeakMap(), tn = new WeakSet(), ro = function(n) {
  const o = v(this, gr);
  return hc.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function xg(t, e) {
  if (t == null)
    return [t, void 0];
  typeof e == "string" && (e = e.split("."));
  const n = e.join(".");
  let o = t;
  const i = [o];
  for (; typeof o == "object" && o !== null && e.length; ) {
    let r = e.shift(), l;
    const c = r.indexOf("[");
    if (c > 0 && c < r.length - 1 && r.endsWith("]") && (l = r.substring(c + 1, r.length - 1), r = r.substring(0, c)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${n}".`);
  }
  if (e.length)
    throw new Error(`Cannot access property with rest path "${e.join(".")}", the full path is "${n}".`);
  return i;
}
function Sg(t, e, n) {
  const o = xg(t, e), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function Jl(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function dc(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (Jl(t) && Jl(n))
    for (const o in n)
      Jl(n[o]) ? (t[o] || Object.assign(t, { [o]: {} }), dc(t[o], n[o])) : Object.assign(t, { [o]: n[o] });
  return dc(t, ...e);
}
function Lt(t, ...e) {
  if (e.length === 0)
    return t;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const n = e[0];
    return Object.keys(n).forEach((o) => {
      const i = n[o] ?? 0;
      t = t.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
    }), t;
  }
  for (let n = 0; n < e.length; n++) {
    const o = e[n] ?? "";
    t = t.replace(new RegExp(`\\{${n}\\}`, "g"), `${o}`);
  }
  return t;
}
var Pc = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(Pc || {});
function h$(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / Pc[n]).toFixed(e) + n);
}
const d$ = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const o = n[1];
  return t = t.replace(o, ""), Number.parseInt(t, 10) * Pc[o];
};
var Yf;
let Oc = ((Yf = document.documentElement.getAttribute("lang")) == null ? void 0 : Yf.toLowerCase()) ?? "zh_cn", ge;
function Cg() {
  return Oc;
}
function Eg(t) {
  Oc = t.toLowerCase();
}
function Ag(t, e) {
  ge || (ge = {}), typeof t == "string" && (t = { [t]: e ?? {} }), dc(ge, t);
}
function Gr(t, e, n, o, i, r) {
  Array.isArray(t) ? ge && t.unshift(ge) : t = ge ? [ge, t] : [t], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || Oc;
  let c;
  for (const _ of t) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const s = r && _ === ge ? `${r}.${e}` : e;
    if (c = Sg(h, s), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? Lt(c, ...Array.isArray(n) ? n : [n]) : c;
}
Gr.addLang = Ag;
Gr.getCode = Cg;
Gr.setCode = Eg;
function Tg(t) {
  return Object.fromEntries(Object.entries(t).map(([e, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [e, n];
  }));
}
const Ql = /* @__PURE__ */ new Map();
var _e, bn, Bt;
class Gt {
  constructor(e, n) {
    M(this, _e, void 0);
    M(this, bn, void 0);
    M(this, Bt, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, this.constructor.EVENTS && H(this, Bt, new Ta(e, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, _e, { ...this.constructor.DEFAULT }), this.setOptions({ ...e instanceof HTMLElement ? Tg(e.dataset) : null, ...n }), this.constructor.all.set(e, this), H(this, bn, e), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return v(this, _e);
  }
  get element() {
    return v(this, bn);
  }
  get events() {
    return v(this, Bt);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(e) {
    return e && Object.assign(v(this, _e), e), v(this, _e);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(v(this, bn)), v(this, Bt) && (this.emit("destroyed", this), v(this, Bt).offAll());
  }
  on(e, n, o) {
    var i;
    (i = v(this, Bt)) == null || i.on(e, n, o);
  }
  once(e, n, o) {
    var i;
    (i = v(this, Bt)) == null || i.once(e, n, o);
  }
  off(e, n, o) {
    var i;
    (i = v(this, Bt)) == null || i.off(e, n, o);
  }
  emit(e, n) {
    var l;
    let o = Ta.createEvent(e, n);
    const i = `on${e[0].toUpperCase()}${e.substring(1)}`, r = v(this, _e)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = v(this, Bt)) == null ? void 0 : l.emit(e, n), o;
  }
  i18n(e, n, o) {
    return Gr(v(this, _e).i18n, e, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${e}}`;
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
    if (Ql.has(e))
      return Ql.get(e);
    const n = /* @__PURE__ */ new Map();
    return Ql.set(e, n), n;
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
_e = new WeakMap(), bn = new WeakMap(), Bt = new WeakMap(), L(Gt, "EVENTS", !1), L(Gt, "DEFAULT", {});
class $t extends Gt {
  constructor() {
    super(...arguments);
    L(this, "ref", gg());
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
    wg(/* @__PURE__ */ su(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
L($t, "Component");
var Hc, lt, iu, lu, _o, Ma, cu = {}, au = [], Mg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Se(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function _u(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Jn(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Hc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return _s(t, l, o, i, null);
}
function _s(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++iu };
  return i == null && lt.vnode != null && lt.vnode(r), r;
}
function Lg() {
  return { current: null };
}
function Wc(t) {
  return t.children;
}
function fo(t, e) {
  this.props = t, this.context = e;
}
function qo(t, e) {
  if (e == null)
    return t.__ ? qo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? qo(t) : null;
}
function fu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return fu(t);
  }
}
function La(t) {
  (!t.__d && (t.__d = !0) && _o.push(t) && !As.__r++ || Ma !== lt.debounceRendering) && ((Ma = lt.debounceRendering) || setTimeout)(As);
}
function As() {
  for (var t; As.__r = _o.length; )
    t = _o.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), _o = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Se({}, r)).__v = r.__v + 1, pu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? qo(r), r.__h), Dg(o, r), r.__e != l && fu(r)));
    });
}
function uu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || au, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? _s(null, a, null, null, a) : Array.isArray(a) ? _s(Wc, { children: a }, null, null, null) : a.__b > 0 ? _s(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      pu(t, a, f = f || cu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = hu(a, _, t) : _ = du(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = qo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && gu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      mu(p[s], p[++s], p[++s]);
}
function hu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? hu(o, e, n) : du(n, o, o, i, o.__e, e));
  return e;
}
function du(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Ng(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ts(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ts(t, r, e[r], n[r], o);
}
function Na(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Mg.test(e) ? n : n + "px";
}
function Ts(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Na(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Na(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Ra : Da, r) : t.removeEventListener(e, r ? Ra : Da, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
function Da(t) {
  this.l[t.type + !1](lt.event ? lt.event(t) : t);
}
function Ra(t) {
  this.l[t.type + !0](lt.event ? lt.event(t) : t);
}
function pu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = lt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new fo(p, g), s.constructor = y, s.render = Pg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Se({}, s.__s)), Se(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = lt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Se(Se({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Wc && h.key == null ? h.props.children : h, uu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Rg(n.__e, e, n, o, i, r, l, _);
    (h = lt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), lt.__e(x, e, n);
  }
}
function Dg(t, e) {
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
function Rg(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Hc.call(t.childNodes), h = (d = n.props || cu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Ng(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, uu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && qo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && _u(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ts(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ts(t, "checked", u, d.checked, !1));
  }
  return t;
}
function mu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    lt.__e(o, n);
  }
}
function gu(t, e, n) {
  var o, i;
  if (lt.unmount && lt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || mu(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        lt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && gu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || _u(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Pg(t, e, n) {
  return this.constructor(t, n);
}
Hc = au.slice, lt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, iu = 0, lu = function(t) {
  return t != null && t.constructor === void 0;
}, fo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Se({}, this.state), typeof t == "function" && (t = t(Se({}, n), this.props)), t && Se(n, t), t != null && this.__v && (e && this._sb.push(e), La(this));
}, fo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), La(this));
}, fo.prototype.render = Wc, _o = [], As.__r = 0;
var Og = 0;
function Qt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Og, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return lt.vnode && lt.vnode(_), _;
}
function Ml(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), o = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const l = n.get(i);
    typeof l == "number" ? e[l][1] = !!r : (n.set(i, e.length), e.push([i, !!r]));
  };
  return t.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Ml(...i).forEach(o) : i && typeof i == "object" ? Object.entries(i).forEach(o) : typeof i == "string" && i.split(" ").forEach((r) => o(r, !0));
  }), e.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const F = (...t) => Ml(...t).reduce((e, [n, o]) => (o && e.push(n), e), []).join(" ");
function Hg({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: i
}) {
  return Jn(t, {
    className: F(e),
    style: o,
    ...i
  }, n);
}
function yu({
  component: t = "a",
  className: e,
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
    typeof c == "string" ? /* @__PURE__ */ Qt("i", { class: `icon ${c}` }) : c,
    /* @__PURE__ */ Qt("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ Qt("i", { class: `icon ${s}` }) : s
  ];
  return Jn(t, {
    className: F(e, { disabled: r, active: l }),
    title: d,
    [t === "a" ? "href" : "data-url"]: i,
    [t === "a" ? "target" : "data-target"]: h,
    style: f,
    onClick: a,
    ...o
  }, ...u);
}
function Wg({
  component: t = "div",
  className: e,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return Jn(t, {
    className: F(e),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function Ig({
  component: t = "div",
  className: e,
  style: n,
  space: o,
  flex: i,
  attrs: r,
  onClick: l,
  children: c
}) {
  return Jn(t, {
    className: F(e),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, c);
}
function Ug(t) {
  const {
    tag: e,
    className: n,
    style: o,
    renders: i,
    generateArgs: r = [],
    generatorThis: l,
    generators: c,
    onGenerate: _,
    onRenderItem: h,
    ...s
  } = t, d = [n], f = { ...o }, a = [], u = [];
  return i.forEach((b) => {
    const p = [];
    typeof b == "string" && c && c[b] && (b = c[b]), typeof b == "function" ? _ ? p.push(..._.call(l, b, a, ...r)) : p.push(...b.call(l, a, ...r) ?? []) : p.push(b), p.forEach((m) => {
      m != null && (typeof m == "object" && !qf(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ su("div", { className: F(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? u.push(m.__html) : (m.style && Object.assign(f, m.style), m.className && d.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(s, m.attrs)) : a.push(m));
    });
  }), u.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: F(d),
    style: f,
    ...s
  }, a];
}
function pc({
  tag: t = "div",
  ...e
}) {
  const [n, o] = Ug(e);
  return Zf(t, n, ...o);
}
function Fg(t) {
  return /* @__PURE__ */ Qt(pc, { ...t });
}
function vu({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: i
}) {
  return Jn(t, {
    className: F(e),
    style: o,
    ...i
  }, n);
}
var no;
let Gn = (no = class extends fo {
  constructor() {
    super(...arguments);
    L(this, "ref", Lg());
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
          return /* @__PURE__ */ Qt(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, Jn);
        if (lu(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: c = "item", component: _, key: h = i, rootAttrs: s, rootClass: d, rootStyle: f, rootChildren: a, ...u } = r, b = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || Gn.ItemComponents[c] : _;
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
    return /* @__PURE__ */ Qt(
      "li",
      {
        className: F(`${this.name}-${i.type}`, l),
        ..._,
        children: [
          /* @__PURE__ */ Qt(n, { ...i }),
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
    return /* @__PURE__ */ Qt(b, { class: F(this.name, l), ...u, ref: this.ref, children: [
      c && c.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, L(no, "ItemComponents", {
  divider: Hg,
  item: yu,
  heading: Wg,
  space: Ig,
  custom: Fg,
  basic: vu
}), L(no, "ROOT_TAG", "menu"), L(no, "NAME", "action-menu"), no);
class Pa extends $t {
}
L(Pa, "NAME", "actionmenu"), L(Pa, "Component", Gn);
function Oa({
  ...t
}) {
  return /* @__PURE__ */ Qt(yu, { ...t });
}
var ac, yr, qt, wn;
let bu = (ac = class extends Gn {
  constructor(n) {
    super(n);
    M(this, yr, /* @__PURE__ */ new Set());
    M(this, qt, void 0);
    M(this, wn, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    H(this, qt, n.nestedShow === void 0), v(this, qt) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
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
    return /* @__PURE__ */ Qt(
      i,
      {
        items: o,
        name: this.props.name,
        nestedShow: v(this, qt) ? this.state.nestedShow : this.props.nestedShow,
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
    v(this, yr).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = Oa), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: v(this, wn).bind(this, l, !0),
        onMouseLeave: v(this, wn).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = r;
      r.onClick = (s) => {
        v(this, wn).call(this, l, void 0, s), h == null || h(s);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = v(this, qt) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!v(this, qt))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...v(this, yr).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    v(this, qt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    v(this, qt) && this.setState({ nestedShow: !1 });
  }
}, yr = new WeakMap(), qt = new WeakMap(), wn = new WeakMap(), L(ac, "ItemComponents", {
  item: Oa
}), ac);
class Ha extends $t {
}
L(Ha, "NAME", "actionmenunested"), L(Ha, "Component", bu);
var Ic, ct, wu, uo, Wa, $u = {}, ku = [], Bg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ce(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function xu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function jg(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ic.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return fs(t, l, o, i, null);
}
function fs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++wu };
  return i == null && ct.vnode != null && ct.vnode(r), r;
}
function Uc(t) {
  return t.children;
}
function ho(t, e) {
  this.props = t, this.context = e;
}
function Xo(t, e) {
  if (e == null)
    return t.__ ? Xo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Xo(t) : null;
}
function Su(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Su(t);
  }
}
function Ia(t) {
  (!t.__d && (t.__d = !0) && uo.push(t) && !Ms.__r++ || Wa !== ct.debounceRendering) && ((Wa = ct.debounceRendering) || setTimeout)(Ms);
}
function Ms() {
  for (var t; Ms.__r = uo.length; )
    t = uo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), uo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ce({}, r)).__v = r.__v + 1, Tu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Xo(r), r.__h), zg(o, r), r.__e != l && Su(r)));
    });
}
function Cu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || ku, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? fs(null, a, null, null, a) : Array.isArray(a) ? fs(Uc, { children: a }, null, null, null) : a.__b > 0 ? fs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Tu(t, a, f = f || $u, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Eu(a, _, t) : _ = Au(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Xo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Lu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Mu(p[s], p[++s], p[++s]);
}
function Eu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Eu(o, e, n) : Au(n, o, o, i, o.__e, e));
  return e;
}
function Au(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Vg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ls(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ls(t, r, e[r], n[r], o);
}
function Ua(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Bg.test(e) ? n : n + "px";
}
function Ls(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Ua(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ua(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Ba : Fa, r) : t.removeEventListener(e, r ? Ba : Fa, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
function Fa(t) {
  this.l[t.type + !1](ct.event ? ct.event(t) : t);
}
function Ba(t) {
  this.l[t.type + !0](ct.event ? ct.event(t) : t);
}
function Tu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ct.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new ho(p, g), s.constructor = y, s.render = Gg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ce({}, s.__s)), Ce(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ct.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ce(Ce({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Uc && h.key == null ? h.props.children : h, Cu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Yg(n.__e, e, n, o, i, r, l, _);
    (h = ct.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ct.__e(x, e, n);
  }
}
function zg(t, e) {
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
function Yg(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Ic.call(t.childNodes), h = (d = n.props || $u).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Vg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Cu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Xo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && xu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ls(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ls(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Mu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ct.__e(o, n);
  }
}
function Lu(t, e, n) {
  var o, i;
  if (ct.unmount && ct.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Mu(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ct.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Lu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || xu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Gg(t, e, n) {
  return this.constructor(t, n);
}
Ic = ku.slice, ct = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, wu = 0, ho.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ce({}, this.state), typeof t == "function" && (t = t(Ce({}, n), this.props)), t && Ce(n, t), t != null && this.__v && (e && this._sb.push(e), Ia(this));
}, ho.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ia(this));
}, ho.prototype.render = Uc, uo = [], Ms.__r = 0;
var qg = 0;
function to(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --qg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ct.vnode && ct.vnode(_), _;
}
let te = class extends ho {
  render() {
    const {
      component: e,
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
    } = this.props, k = e || (l ? "a" : "button"), C = u == null || typeof u == "string" && !u.length || s && !f, A = C && !a && !b && !r && !s;
    return jg(
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
      s ? /* @__PURE__ */ to("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof a == "string" ? /* @__PURE__ */ to("i", { class: `icon ${a}` }) : a,
      C ? null : /* @__PURE__ */ to("span", { className: "text", children: s ? f : u }),
      s ? null : r,
      s ? null : typeof b == "string" ? /* @__PURE__ */ to("i", { class: `icon ${b}` }) : b,
      s ? null : p ? /* @__PURE__ */ to("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class ja extends $t {
}
L(ja, "NAME", "button"), L(ja, "Component", te);
var mc;
mc = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var Xg = 0;
function Kg(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Xg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return mc.vnode && mc.vnode(_), _;
}
var _c;
let Fc = (_c = class extends bu {
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
    return /* @__PURE__ */ Kg("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, L(_c, "NAME", "menu"), _c);
class Va extends $t {
}
L(Va, "NAME", "menu"), L(Va, "Component", Fc);
let Zg = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Nu, at, Du, po, za, Ru = {}, Pu = [], Jg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ee(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ou(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function tc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Du };
  return i == null && at.vnode != null && at.vnode(r), r;
}
function Bc(t) {
  return t.children;
}
function mo(t, e) {
  this.props = t, this.context = e;
}
function Ko(t, e) {
  if (e == null)
    return t.__ ? Ko(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Ko(t) : null;
}
function Hu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Hu(t);
  }
}
function Ya(t) {
  (!t.__d && (t.__d = !0) && po.push(t) && !Ns.__r++ || za !== at.debounceRendering) && ((za = at.debounceRendering) || setTimeout)(Ns);
}
function Ns() {
  for (var t; Ns.__r = po.length; )
    t = po.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), po = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ee({}, r)).__v = r.__v + 1, Fu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ko(r), r.__h), ty(o, r), r.__e != l && Hu(r)));
    });
}
function Wu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Pu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? tc(null, a, null, null, a) : Array.isArray(a) ? tc(Bc, { children: a }, null, null, null) : a.__b > 0 ? tc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Fu(t, a, f = f || Ru, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Iu(a, _, t) : _ = Uu(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Ko(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && ju(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Bu(p[s], p[++s], p[++s]);
}
function Iu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Iu(o, e, n) : Uu(n, o, o, i, o.__e, e));
  return e;
}
function Uu(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Qg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ds(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ds(t, r, e[r], n[r], o);
}
function Ga(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Jg.test(e) ? n : n + "px";
}
function Ds(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Ga(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ga(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Xa : qa, r) : t.removeEventListener(e, r ? Xa : qa, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
function qa(t) {
  this.l[t.type + !1](at.event ? at.event(t) : t);
}
function Xa(t) {
  this.l[t.type + !0](at.event ? at.event(t) : t);
}
function Fu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = at.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new mo(p, g), s.constructor = y, s.render = ny), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ee({}, s.__s)), Ee(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = at.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ee(Ee({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Bc && h.key == null ? h.props.children : h, Wu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = ey(n.__e, e, n, o, i, r, l, _);
    (h = at.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), at.__e(x, e, n);
  }
}
function ty(t, e) {
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
function ey(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Nu.call(t.childNodes), h = (d = n.props || Ru).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Qg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Wu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ko(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ou(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ds(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ds(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Bu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    at.__e(o, n);
  }
}
function ju(t, e, n) {
  var o, i;
  if (at.unmount && at.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Bu(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        at.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && ju(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Ou(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ny(t, e, n) {
  return this.constructor(t, n);
}
Nu = Pu.slice, at = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Du = 0, mo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ee({}, this.state), typeof t == "function" && (t = t(Ee({}, n), this.props)), t && Ee(n, t), t != null && this.__v && (e && this._sb.push(e), Ya(this));
}, mo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ya(this));
}, mo.prototype.render = Bc, po = [], Ns.__r = 0;
var oy = 0;
function ry(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --oy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return at.vnode && at.vnode(_), _;
}
var gc, dn;
gc = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, dn = function(t) {
  return t != null && t.constructor === void 0;
};
var sy = 0;
function se(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --sy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return gc.vnode && gc.vnode(_), _;
}
var yc;
yc = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var iy = 0;
function Ll(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --iy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return yc.vnode && yc.vnode(_), _;
}
function ly({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Ll(te, { type: n, ...o });
}
var Vu, _t, zu, go, Ka, Yu = {}, Gu = [], cy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ae(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function qu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ec(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++zu };
  return i == null && _t.vnode != null && _t.vnode(r), r;
}
function ay() {
  return { current: null };
}
function jc(t) {
  return t.children;
}
function yo(t, e) {
  this.props = t, this.context = e;
}
function Zo(t, e) {
  if (e == null)
    return t.__ ? Zo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Zo(t) : null;
}
function Xu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Xu(t);
  }
}
function Za(t) {
  (!t.__d && (t.__d = !0) && go.push(t) && !Rs.__r++ || Ka !== _t.debounceRendering) && ((Ka = _t.debounceRendering) || setTimeout)(Rs);
}
function Rs() {
  for (var t; Rs.__r = go.length; )
    t = go.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), go = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ae({}, r)).__v = r.__v + 1, Qu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Zo(r), r.__h), fy(o, r), r.__e != l && Xu(r)));
    });
}
function Ku(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Gu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ec(null, a, null, null, a) : Array.isArray(a) ? ec(jc, { children: a }, null, null, null) : a.__b > 0 ? ec(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Qu(t, a, f = f || Yu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Zu(a, _, t) : _ = Ju(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Zo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && eh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      th(p[s], p[++s], p[++s]);
}
function Zu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Zu(o, e, n) : Ju(n, o, o, i, o.__e, e));
  return e;
}
function Ju(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function _y(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ps(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ps(t, r, e[r], n[r], o);
}
function Ja(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || cy.test(e) ? n : n + "px";
}
function Ps(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Ja(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ja(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? t_ : Qa, r) : t.removeEventListener(e, r ? t_ : Qa, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
function Qa(t) {
  this.l[t.type + !1](_t.event ? _t.event(t) : t);
}
function t_(t) {
  this.l[t.type + !0](_t.event ? _t.event(t) : t);
}
function Qu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = _t.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new yo(p, g), s.constructor = y, s.render = hy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ae({}, s.__s)), Ae(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = _t.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ae(Ae({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === jc && h.key == null ? h.props.children : h, Ku(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = uy(n.__e, e, n, o, i, r, l, _);
    (h = _t.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), _t.__e(x, e, n);
  }
}
function fy(t, e) {
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
function uy(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Vu.call(t.childNodes), h = (d = n.props || Yu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (_y(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Ku(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Zo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && qu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ps(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ps(t, "checked", u, d.checked, !1));
  }
  return t;
}
function th(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    _t.__e(o, n);
  }
}
function eh(t, e, n) {
  var o, i;
  if (_t.unmount && _t.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || th(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        _t.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && eh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || qu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function hy(t, e, n) {
  return this.constructor(t, n);
}
Vu = Gu.slice, _t = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, zu = 0, yo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ae({}, this.state), typeof t == "function" && (t = t(Ae({}, n), this.props)), t && Ae(n, t), t != null && this.__v && (e && this._sb.push(e), Za(this));
}, yo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Za(this));
}, yo.prototype.render = jc, go = [], Rs.__r = 0;
var dy = 0;
function nh(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --dy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return _t.vnode && _t.vnode(_), _;
}
var Nl, et, oh, vo, e_, Os = {}, rh = [], py = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Te(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function sh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ih(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Nl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return us(t, l, o, i, null);
}
function us(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++oh };
  return i == null && et.vnode != null && et.vnode(r), r;
}
function Dl(t) {
  return t.children;
}
function hs(t, e) {
  this.props = t, this.context = e;
}
function Jo(t, e) {
  if (e == null)
    return t.__ ? Jo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Jo(t) : null;
}
function lh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return lh(t);
  }
}
function n_(t) {
  (!t.__d && (t.__d = !0) && vo.push(t) && !Hs.__r++ || e_ !== et.debounceRendering) && ((e_ = et.debounceRendering) || setTimeout)(Hs);
}
function Hs() {
  for (var t; Hs.__r = vo.length; )
    t = vo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), vo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Te({}, r)).__v = r.__v + 1, Vc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Jo(r), r.__h), fh(o, r), r.__e != l && lh(r)));
    });
}
function ch(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || rh, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? us(null, a, null, null, a) : Array.isArray(a) ? us(Dl, { children: a }, null, null, null) : a.__b > 0 ? us(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Vc(t, a, f = f || Os, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = ah(a, _, t) : _ = _h(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Jo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && hh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      uh(p[s], p[++s], p[++s]);
}
function ah(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? ah(o, e, n) : _h(n, o, o, i, o.__e, e));
  return e;
}
function _h(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function my(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ws(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ws(t, r, e[r], n[r], o);
}
function o_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || py.test(e) ? n : n + "px";
}
function Ws(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || o_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || o_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? s_ : r_, r) : t.removeEventListener(e, r ? s_ : r_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
function r_(t) {
  this.l[t.type + !1](et.event ? et.event(t) : t);
}
function s_(t) {
  this.l[t.type + !0](et.event ? et.event(t) : t);
}
function Vc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = et.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new hs(p, g), s.constructor = y, s.render = yy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Te({}, s.__s)), Te(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = et.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Te(Te({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Dl && h.key == null ? h.props.children : h, ch(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = gy(n.__e, e, n, o, i, r, l, _);
    (h = et.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), et.__e(x, e, n);
  }
}
function fh(t, e) {
  et.__c && et.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      et.__e(o, n.__v);
    }
  });
}
function gy(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Nl.call(t.childNodes), h = (d = n.props || Os).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (my(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, ch(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Jo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && sh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ws(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ws(t, "checked", u, d.checked, !1));
  }
  return t;
}
function uh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    et.__e(o, n);
  }
}
function hh(t, e, n) {
  var o, i;
  if (et.unmount && et.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || uh(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        et.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && hh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || sh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function yy(t, e, n) {
  return this.constructor(t, n);
}
function vy(t, e, n) {
  var o, i, r;
  et.__ && et.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Vc(e, t = (!o && n || e).__k = ih(Dl, null, [t]), i || Os, Os, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Nl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), fh(r, t);
}
Nl = rh.slice, et = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, oh = 0, hs.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Te({}, this.state), typeof t == "function" && (t = t(Te({}, n), this.props)), t && Te(n, t), t != null && this.__v && (e && this._sb.push(e), n_(this));
}, hs.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), n_(this));
}, hs.prototype.render = Dl, vo = [], Hs.__r = 0;
function by(t) {
  return t.button === 2;
}
var wy = 0;
function $y(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --wy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return et.vnode && et.vnode(_), _;
}
function zc(t) {
  return t.split("-")[1];
}
function dh(t) {
  return t === "y" ? "height" : "width";
}
function Qo(t) {
  return t.split("-")[0];
}
function ph(t) {
  return ["top", "bottom"].includes(Qo(t)) ? "x" : "y";
}
function i_(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = ph(e), _ = dh(c), h = o[_] / 2 - i[_] / 2, s = Qo(e), d = c === "x";
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
  switch (zc(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const ky = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = i_(h, o, _), f = o, a = {}, u = 0;
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
        reference: t,
        floating: e
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
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = i_(h, f, _)), b = -1;
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
function xy(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Sy(t) {
  return typeof t != "number" ? xy(t) : {
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
async function Cy(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = Sy(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Is(await r.getClippingRect({
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
  }, C = Is(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Ey = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Us(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ey[e]);
}
function Ay(t, e, n) {
  n === void 0 && (n = !1);
  const o = zc(t), i = ph(t), r = dh(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Us(l)), {
    main: l,
    cross: Us(l)
  };
}
const Ty = {
  start: "end",
  end: "start"
};
function vc(t) {
  return t.replace(/start|end/g, (e) => Ty[e]);
}
function My(t) {
  const e = Us(t);
  return [vc(t), e, vc(e)];
}
function Ly(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function Ny(t, e, n, o) {
  const i = zc(t);
  let r = Ly(Qo(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(vc)))), r;
}
const mh = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = t, p = Qo(o), m = Qo(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [Us(l)] : My(l));
      !d && a !== "none" && w.push(...Ny(l, u, a, g));
      const k = [l, ...w], C = await Cy(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: N,
          cross: z
        } = Ay(o, r, g);
        A.push(C[N], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var y;
        const N = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[N];
        if (z)
          return {
            data: {
              index: N,
              overflows: E
            },
            reset: {
              placement: z
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
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
function Wt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ee(t) {
  return Wt(t).getComputedStyle(t);
}
function Be(t) {
  return yh(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Qr;
function gh() {
  if (Qr)
    return Qr;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Qr = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Qr) : navigator.userAgent;
}
function he(t) {
  return t instanceof Wt(t).HTMLElement;
}
function je(t) {
  return t instanceof Wt(t).Element;
}
function yh(t) {
  return t instanceof Wt(t).Node;
}
function l_(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Wt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Rl(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = ee(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Dy(t) {
  return ["table", "td", "th"].includes(Be(t));
}
function Yc(t) {
  const e = /firefox/i.test(gh()), n = ee(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function vh() {
  return !/^((?!chrome|android).)*safari/i.test(gh());
}
function Gc(t) {
  return ["html", "body", "#document"].includes(Be(t));
}
const c_ = Math.min, bo = Math.max, Fs = Math.round;
function bh(t) {
  const e = ee(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = Fs(n) !== i || Fs(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function wh(t) {
  return je(t) ? t : t.contextElement;
}
const $h = {
  x: 1,
  y: 1
};
function pn(t) {
  const e = wh(t);
  if (!he(e))
    return $h;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = bh(e);
  let l = (r ? Fs(n.width) : n.width) / o, c = (r ? Fs(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function tr(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = wh(t);
  let _ = $h;
  e && (o ? je(o) && (_ = pn(o)) : _ = pn(t));
  const h = c ? Wt(c) : window, s = !vh() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Wt(c), p = o && je(o) ? Wt(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = pn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Wt(m).frameElement;
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
function Ge(t) {
  return ((yh(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Pl(t) {
  return je(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function kh(t) {
  return tr(Ge(t)).left + Pl(t).scrollLeft;
}
function Ry(t, e, n) {
  const o = he(e), i = Ge(e), r = tr(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Be(e) !== "body" || Rl(i)) && (l = Pl(e)), he(e)) {
      const _ = tr(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = kh(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function er(t) {
  if (Be(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (l_(t) ? t.host : null) || // Fallback
    Ge(t)
  );
  return l_(e) ? e.host : e;
}
function a_(t) {
  return !he(t) || ee(t).position === "fixed" ? null : t.offsetParent;
}
function Py(t) {
  let e = er(t);
  for (; he(e) && !Gc(e); ) {
    if (Yc(e))
      return e;
    e = er(e);
  }
  return null;
}
function __(t) {
  const e = Wt(t);
  let n = a_(t);
  for (; n && Dy(n) && ee(n).position === "static"; )
    n = a_(n);
  return n && (Be(n) === "html" || Be(n) === "body" && ee(n).position === "static" && !Yc(n)) ? e : n || Py(t) || e;
}
function Oy(t) {
  return bh(t);
}
function Hy(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = he(n), r = Ge(n);
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
  if ((i || !i && o !== "fixed") && ((Be(n) !== "body" || Rl(r)) && (l = Pl(n)), he(n))) {
    const h = tr(n);
    c = pn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Wy(t, e) {
  const n = Wt(t), o = Ge(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = vh();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Iy(t) {
  var e;
  const n = Ge(t), o = Pl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = bo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = bo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + kh(t);
  const _ = -o.scrollTop;
  return ee(i || n).direction === "rtl" && (c += bo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function xh(t) {
  const e = er(t);
  return Gc(e) ? t.ownerDocument.body : he(e) && Rl(e) ? e : xh(e);
}
function Sh(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = xh(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Wt(o);
  return i ? e.concat(r, r.visualViewport || [], Rl(o) ? o : []) : e.concat(o, Sh(o));
}
function Uy(t, e) {
  const n = tr(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = he(t) ? pn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
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
function f_(t, e, n) {
  return e === "viewport" ? Is(Wy(t, n)) : je(e) ? Uy(e, n) : Is(Iy(Ge(t)));
}
function Fy(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Sh(t).filter((c) => je(c) && Be(c) !== "body"), i = null;
  const r = ee(t).position === "fixed";
  let l = r ? er(t) : t;
  for (; je(l) && !Gc(l); ) {
    const c = ee(l), _ = Yc(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = er(l);
  }
  return e.set(t, o), o;
}
function By(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? Fy(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = f_(e, s, i);
    return h.top = bo(d.top, h.top), h.right = c_(d.right, h.right), h.bottom = c_(d.bottom, h.bottom), h.left = bo(d.left, h.left), h;
  }, f_(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const jy = {
  getClippingRect: By,
  convertOffsetParentRelativeRectToViewportRelativeRect: Hy,
  isElement: je,
  getDimensions: Oy,
  getOffsetParent: __,
  getDocumentElement: Ge,
  getScale: pn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || __, r = this.getDimensions;
    return {
      reference: Ry(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => ee(t).direction === "rtl"
}, Ch = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: jy,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return ky(t, e, {
    ...i,
    platform: r
  });
};
let Vy = class extends Fc {
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
      middleware: [mh()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  _createPopper() {
    const e = this._getPopperOptions();
    this.ref.current && Ch(this._getPopperElement(), this.ref.current, e).then(({ x: n, y: o }) => {
      Object.assign(this.ref.current.style, {
        left: `${n}px`,
        top: `${o}px`
      });
    });
  }
  afterRender(e) {
    super.afterRender(e), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ $y("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var ye, $n, vr;
class Mt extends Gt {
  constructor() {
    super(...arguments);
    M(this, ye, void 0);
    M(this, $n, void 0);
    M(this, vr, void 0);
    L(this, "arrowEl");
  }
  get isShown() {
    var n;
    return (n = v(this, ye)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return v(this, ye) || this._ensureMenu();
  }
  get trigger() {
    return v(this, vr) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, vr, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var o;
    return this.emit("hide", this).defaultPrevented ? !1 : ((o = v(this, ye)) == null || o.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    super.destroy(), (n = v(this, ye)) == null || n.remove();
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
    return i.style.width = "max-content", i.style.position = "absolute", i.style.top = "0", i.style.left = "0", H(this, ye, i), i;
  }
  _getPopperOptions() {
    var o;
    const n = {
      middleware: []
    };
    return this.options.flip && ((o = n.middleware) == null || o.push(mh())), this.options.placement && (n.placement = this.options.placement), n;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    Ch(this._getPopperElement(), this.menu, n).then(({ x: o, y: i, middlewareData: r }) => {
      if (Object.assign(this.menu.style, {
        left: `${o}px`,
        top: `${i}px`
      }), this.options.placement) {
        const l = this.options.placement.split("-")[0], c = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[l];
        if (r.arrow && this.arrowEl) {
          const { x: _, y: h } = r.arrow;
          Object.assign(this.arrowEl.style, {
            left: _ != null ? `${_}px` : "",
            top: h != null ? `${h}px` : "",
            [c]: `${-this.arrowEl.offsetWidth / 2}px`
          });
        }
      }
    });
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (vy(ih(Vy, n), this.menu), !0);
  }
  _getPopperElement() {
    return v(this, $n) || H(this, $n, {
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
    }), v(this, $n);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)) || o && by(o))
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
ye = new WeakMap(), $n = new WeakMap(), vr = new WeakMap(), L(Mt, "NAME", "contextmenu"), L(Mt, "EVENTS", !0), L(Mt, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), L(Mt, "MENU_CLASS", "contextmenu"), L(Mt, "CLASS_SHOW", "show"), L(Mt, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (t) => {
  const e = t.target;
  if (e.closest(`.${Mt.MENU_CLASS}`))
    return;
  const n = e.closest(Mt.MENU_SELECTOR);
  n && (Mt.ensure(n).show(t), t.preventDefault());
});
document.addEventListener("click", Mt.clear.bind(Mt));
function Eh(t) {
  return t.split("-")[1];
}
function zy(t) {
  return t === "y" ? "height" : "width";
}
function Ah(t) {
  return t.split("-")[0];
}
function Th(t) {
  return ["top", "bottom"].includes(Ah(t)) ? "x" : "y";
}
function Yy(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Gy(t) {
  return typeof t != "number" ? Yy(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
const qy = Math.min, Xy = Math.max;
function Ky(t, e, n) {
  return Xy(t, qy(e, n));
}
const Zy = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = Gy(o), s = {
      x: i,
      y: r
    }, d = Th(l), f = zy(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = Ky(C, E, A), N = Eh(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - N,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
});
async function Jy(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Ah(n), c = Eh(n), _ = Th(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const Qy = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await Jy(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
var kn, xn, Sn, Ci, Mh;
const ma = class extends Mt {
  constructor() {
    super(...arguments);
    M(this, Ci);
    M(this, kn, !1);
    M(this, xn, 0);
    L(this, "hideLater", () => {
      v(this, Sn).call(this), H(this, xn, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, Sn, () => {
      clearTimeout(v(this, xn)), H(this, xn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && ma.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!v(this, kn) && this.isHover && W(this, Ci, Mh).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    v(this, kn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", v(this, Sn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var i, r;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && ((i = n.middleware) == null || i.push(Qy(o + (this.options.offset ?? 0))), (r = n.middleware) == null || r.push(Zy({ element: this.arrowEl }))), n;
  }
  _ensureMenu() {
    const n = super._ensureMenu();
    if (this.options.arrow) {
      const o = document.createElement("div");
      this.arrowEl = o, this.arrowEl.style.position = "absolute", this.arrowEl.style.width = "8px", this.arrowEl.style.height = "8px", this.arrowEl.style.transform = "rotate(45deg)", this.arrowEl.style.background = "inherit", this.arrowEl.style.border = "inherit", n.append(o);
    }
    return n;
  }
  _getMenuOptions() {
    const n = super._getMenuOptions();
    if (n && this.options.arrow) {
      const { afterRender: o } = n;
      n.afterRender = (...i) => {
        o == null || o(...i);
      };
    }
    return n;
  }
};
let Ct = ma;
kn = new WeakMap(), xn = new WeakMap(), Sn = new WeakMap(), Ci = new WeakSet(), Mh = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", v(this, Sn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, kn, !0);
}, L(Ct, "NAME", "dropdown"), L(Ct, "MENU_CLASS", "dropdown-menu"), L(Ct, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), L(Ct, "DEFAULT", {
  ...Mt.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Ct.MENU_SELECTOR);
  if (n) {
    const o = Ct.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Ct.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(Ct.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Ct.ensure(n);
  o.isHover && o.show();
});
const tv = (t) => {
  const e = document.getElementsByClassName("with-dropdown-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Ct.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Ct.clear({ event: t });
};
window.addEventListener("scroll", tv, !0);
var br, Cn;
class ev extends yo {
  constructor(n) {
    var o;
    super(n);
    M(this, br, void 0);
    M(this, Cn, ay());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return v(this, Cn);
  }
  get triggerElement() {
    return v(this, Cn).current;
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
    }), H(this, br, Ct.ensure(this.triggerElement, {
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
    (n = v(this, br)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: i, ...r } = this.props;
    return {
      className: F("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: v(this, Cn)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ nh("div", { ...o, children: n });
  }
}
br = new WeakMap(), Cn = new WeakMap();
class nv extends ev {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var r;
    const { placement: e, show: n } = this.state, o = this.beforeRender();
    let { caret: i = !0 } = o;
    if (i !== !1 && (n || i === !0)) {
      const l = n ? e : (r = this.props.dropdown) == null ? void 0 : r.placement;
      i = (l === "top" ? "up" : l === "bottom" ? "down" : l) || (typeof i == "string" ? i : "") || "down";
    }
    return o.caret = i, /* @__PURE__ */ nh(te, { ...o });
  }
}
function Lh({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Ll(nv, { type: n, ...o });
}
var qc, ft, Nh, Dh, wo, u_, Rh = {}, Ph = [], ov = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Me(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Oh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function rv(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? qc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ds(t, l, o, i, null);
}
function ds(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Nh };
  return i == null && ft.vnode != null && ft.vnode(r), r;
}
function Xc(t) {
  return t.children;
}
function $o(t, e) {
  this.props = t, this.context = e;
}
function nr(t, e) {
  if (e == null)
    return t.__ ? nr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? nr(t) : null;
}
function Hh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Hh(t);
  }
}
function h_(t) {
  (!t.__d && (t.__d = !0) && wo.push(t) && !Bs.__r++ || u_ !== ft.debounceRendering) && ((u_ = ft.debounceRendering) || setTimeout)(Bs);
}
function Bs() {
  for (var t; Bs.__r = wo.length; )
    t = wo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), wo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Me({}, r)).__v = r.__v + 1, Fh(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? nr(r), r.__h), iv(o, r), r.__e != l && Hh(r)));
    });
}
function Wh(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Ph, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ds(null, a, null, null, a) : Array.isArray(a) ? ds(Xc, { children: a }, null, null, null) : a.__b > 0 ? ds(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Fh(t, a, f = f || Rh, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Ih(a, _, t) : _ = Uh(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = nr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && jh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Bh(p[s], p[++s], p[++s]);
}
function Ih(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Ih(o, e, n) : Uh(n, o, o, i, o.__e, e));
  return e;
}
function Uh(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function sv(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || js(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || js(t, r, e[r], n[r], o);
}
function d_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || ov.test(e) ? n : n + "px";
}
function js(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || d_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || d_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? m_ : p_, r) : t.removeEventListener(e, r ? m_ : p_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
function p_(t) {
  this.l[t.type + !1](ft.event ? ft.event(t) : t);
}
function m_(t) {
  this.l[t.type + !0](ft.event ? ft.event(t) : t);
}
function Fh(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ft.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new $o(p, g), s.constructor = y, s.render = cv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Me({}, s.__s)), Me(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ft.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Me(Me({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Xc && h.key == null ? h.props.children : h, Wh(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = lv(n.__e, e, n, o, i, r, l, _);
    (h = ft.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ft.__e(x, e, n);
  }
}
function iv(t, e) {
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
function lv(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && qc.call(t.childNodes), h = (d = n.props || Rh).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (sv(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Wh(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && nr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Oh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && js(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && js(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Bh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ft.__e(o, n);
  }
}
function jh(t, e, n) {
  var o, i;
  if (ft.unmount && ft.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Bh(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ft.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && jh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Oh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function cv(t, e, n) {
  return this.constructor(t, n);
}
qc = Ph.slice, ft = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Nh = 0, Dh = function(t) {
  return t != null && t.constructor === void 0;
}, $o.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Me({}, this.state), typeof t == "function" && (t = t(Me({}, n), this.props)), t && Me(n, t), t != null && this.__v && (e && this._sb.push(e), h_(this));
}, $o.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), h_(this));
}, $o.prototype.render = Xc, wo = [], Bs.__r = 0;
var av = 0;
function g_(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --av, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ft.vnode && ft.vnode(_), _;
}
let Vh = class extends $o {
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
  handleItemClick(e, n, o, i) {
    o && o.call(i.target, i);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: e, index: n, event: i });
  }
  beforeRender() {
    var o;
    const e = { ...this.props }, n = (o = e.beforeRender) == null ? void 0 : o.call(this, e);
    return n && Object.assign(e, n), typeof e.items == "function" && (e.items = e.items.call(this)), e;
  }
  onRenderItem(e, n) {
    const { key: o = n, ...i } = e;
    return /* @__PURE__ */ g_(te, { ...i }, o);
  }
  renderItem(e, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = e, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), i) {
      const _ = i.call(this, c, rv);
      if (Dh(_))
        return _;
      typeof _ == "object" && Object.assign(c, _);
    }
    return this.onRenderItem(c, o);
  }
  render() {
    const e = this.beforeRender(), {
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
    } = e;
    return /* @__PURE__ */ g_(
      "div",
      {
        className: F("btn-group", i ? `size-${i}` : "", n),
        ...a,
        children: [
          o && o.map(this.renderItem.bind(this, e)),
          c
        ]
      }
    );
  }
};
function _v({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Ll(Vh, { type: n, ...o });
}
var hn;
let qn = (hn = class extends Gn {
  beforeRender() {
    const { gap: e, btnProps: n, wrap: o, ...i } = super.beforeRender();
    return i.className = F(i.className, o ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (i.style ? i.style.gap = e : i.style = { gap: e }), i;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, n, o) {
    const i = this.isBtnItem(o.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, r = {
      ...n,
      ...i,
      ...o,
      className: F(`${this.name}-${o.type}`, n.className, i.className, o.className),
      style: Object.assign({}, n.style, i.style, o.style)
    };
    return /* @__PURE__ */ Ll(e, { ...r });
  }
}, L(hn, "ItemComponents", {
  item: ly,
  dropdown: Lh,
  "btn-group": _v
}), L(hn, "ROOT_TAG", "nav"), L(hn, "NAME", "toolbar"), L(hn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), hn);
function fv({
  className: t,
  style: e,
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
  c === !0 ? d = /* @__PURE__ */ se(te, { className: "alert-close btn ghost", square: !0, onClick: _, children: /* @__PURE__ */ se("span", { class: "close" }) }) : dn(c) ? d = c : typeof c == "object" && (d = /* @__PURE__ */ se(te, { ...c, onClick: _ }));
  const f = dn(n) ? n : n ? /* @__PURE__ */ se(qn, { ...n }) : null;
  return /* @__PURE__ */ se("div", { className: F("alert", t), style: e, ...s, children: [
    dn(h) ? h : typeof h == "string" ? /* @__PURE__ */ se("i", { className: `icon ${h}` }) : null,
    dn(i) ? i : /* @__PURE__ */ se("div", { className: F("alert-content", r), children: [
      dn(o) ? o : o && /* @__PURE__ */ se("div", { className: "alert-heading", children: o }),
      /* @__PURE__ */ se("div", { className: "alert-text", children: i }),
      o ? f : null
    ] }),
    o ? null : f,
    d,
    l
  ] });
}
function uv(t) {
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
let hv = class extends mo {
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
      type: i,
      placement: r,
      animation: l,
      show: c,
      className: _,
      time: h,
      ...s
    } = this.props;
    return /* @__PURE__ */ ry(
      fv,
      {
        className: F("messager", _, i, l === !0 ? uv(r) : l, c ? "in" : ""),
        ...s
      }
    );
  }
};
var En, ms;
class ps extends $t {
  constructor() {
    super(...arguments);
    M(this, En);
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
    this._show || (this.emit("show"), this.render(), this._show = !0, W(this, En, ms).call(this, () => {
      this.emit("shown");
      const { time: n } = this.options;
      n && W(this, En, ms).call(this, () => this.hide(), n);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), W(this, En, ms).call(this, () => {
      this.emit("hidden");
    }));
  }
}
En = new WeakSet(), ms = function(n, o = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, o);
}, L(ps, "NAME", "MessagerItem"), L(ps, "EVENTS", !0), L(ps, "Component", hv);
var en, An, fe, Ei, zh, Ai, Yh;
const ga = class extends Gt {
  constructor() {
    super(...arguments);
    M(this, Ei);
    M(this, Ai);
    M(this, en, void 0);
    M(this, An, Zg(6));
    M(this, fe, void 0);
  }
  get id() {
    return v(this, An);
  }
  get isShown() {
    var n;
    return !!((n = v(this, fe)) != null && n.isShown);
  }
  show(n) {
    this.setOptions(n), W(this, Ei, zh).call(this).show();
  }
  hide() {
    var n;
    (n = v(this, fe)) == null || n.hide();
  }
  static show(n) {
    typeof n == "string" && (n = { content: n });
    const { container: o, ...i } = n, r = new ga(o || "body", i);
    return r.show(), r;
  }
};
let ts = ga;
en = new WeakMap(), An = new WeakMap(), fe = new WeakMap(), Ei = new WeakSet(), zh = function() {
  if (v(this, fe))
    v(this, fe).setOptions(this.options);
  else {
    const n = W(this, Ai, Yh).call(this), o = new ps(n, this.options);
    o.on("hidden", () => {
      o.destroy(), n.remove(), H(this, en, void 0);
    }), H(this, fe, o);
  }
  return v(this, fe);
}, Ai = new WeakSet(), Yh = function() {
  if (v(this, en))
    return v(this, en);
  const { placement: n = "top" } = this.options;
  let o = this.element.querySelector(`.messagers-${n}`);
  o || (o = document.createElement("div"), o.className = `messagers messagers-${n}`, this.element.appendChild(o));
  let i = o.querySelector(`#messager-${v(this, An)}`);
  return i || (i = document.createElement("div"), i.className = "messager-holder", i.id = `messager-${v(this, An)}`, o.appendChild(i), H(this, en, i)), i;
}, L(ts, "NAME", "messager"), L(ts, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
var Gh, ut, qh, ko, y_, Xh = {}, Kh = [], dv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Le(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Zh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function nc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++qh };
  return i == null && ut.vnode != null && ut.vnode(r), r;
}
function Kc(t) {
  return t.children;
}
function xo(t, e) {
  this.props = t, this.context = e;
}
function or(t, e) {
  if (e == null)
    return t.__ ? or(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? or(t) : null;
}
function Jh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Jh(t);
  }
}
function v_(t) {
  (!t.__d && (t.__d = !0) && ko.push(t) && !Vs.__r++ || y_ !== ut.debounceRendering) && ((y_ = ut.debounceRendering) || setTimeout)(Vs);
}
function Vs() {
  for (var t; Vs.__r = ko.length; )
    t = ko.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ko = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Le({}, r)).__v = r.__v + 1, nd(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? or(r), r.__h), mv(o, r), r.__e != l && Jh(r)));
    });
}
function Qh(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Kh, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? nc(null, a, null, null, a) : Array.isArray(a) ? nc(Kc, { children: a }, null, null, null) : a.__b > 0 ? nc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      nd(t, a, f = f || Xh, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = td(a, _, t) : _ = ed(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = or(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && rd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      od(p[s], p[++s], p[++s]);
}
function td(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? td(o, e, n) : ed(n, o, o, i, o.__e, e));
  return e;
}
function ed(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function pv(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || zs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || zs(t, r, e[r], n[r], o);
}
function b_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || dv.test(e) ? n : n + "px";
}
function zs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || b_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || b_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? $_ : w_, r) : t.removeEventListener(e, r ? $_ : w_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
function w_(t) {
  this.l[t.type + !1](ut.event ? ut.event(t) : t);
}
function $_(t) {
  this.l[t.type + !0](ut.event ? ut.event(t) : t);
}
function nd(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ut.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new xo(p, g), s.constructor = y, s.render = yv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Le({}, s.__s)), Le(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ut.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Le(Le({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Kc && h.key == null ? h.props.children : h, Qh(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = gv(n.__e, e, n, o, i, r, l, _);
    (h = ut.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ut.__e(x, e, n);
  }
}
function mv(t, e) {
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
function gv(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Gh.call(t.childNodes), h = (d = n.props || Xh).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (pv(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Qh(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && or(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Zh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && zs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && zs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function od(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ut.__e(o, n);
  }
}
function rd(t, e, n) {
  var o, i;
  if (ut.unmount && ut.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || od(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ut.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && rd(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Zh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function yv(t, e, n) {
  return this.constructor(t, n);
}
Gh = Kh.slice, ut = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, qh = 0, xo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Le({}, this.state), typeof t == "function" && (t = t(Le({}, n), this.props)), t && Le(n, t), t != null && this.__v && (e && this._sb.push(e), v_(this));
}, xo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), v_(this));
}, xo.prototype.render = Kc, ko = [], Vs.__r = 0;
var vv = 0;
function es(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --vv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ut.vnode && ut.vnode(_), _;
}
var is;
let bv = (is = class extends xo {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: o, circleBgColor: i, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ es("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ es("circle", { cx: c, cy: c, r: l, stroke: i, "stroke-width": o }),
      /* @__PURE__ */ es("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - e) / 100, "stroke-width": o }),
      /* @__PURE__ */ es("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(e) })
    ] });
  }
}, L(is, "NAME", "zui.progress-circle"), L(is, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), is);
class k_ extends $t {
}
L(k_, "NAME", "table-sorter"), L(k_, "Component", bv);
function wv(t) {
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
function $v(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
function kv(t, e) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const x$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: F,
  domReady: $v,
  getClassList: Ml,
  isElementVisible: kv,
  selectText: wv
}, Symbol.toStringTag, { value: "Module" }));
let xv = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var wr, ve, Xt, Tn, Mn, gs;
const ya = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    M(this, Mn);
    M(this, wr, void 0);
    M(this, ve, void 0);
    M(this, Xt, void 0);
    M(this, Tn, void 0);
    H(this, wr, n), H(this, ve, `ZUI_STORE:${e ?? xv()}`), H(this, Xt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return v(this, wr);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (v(this, Tn) || H(this, Tn, new ya(v(this, ve), "session")), v(this, Tn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const o = v(this, Xt).getItem(W(this, Mn, gs).call(this, e));
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
    v(this, Xt).setItem(W(this, Mn, gs).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    v(this, Xt).removeItem(W(this, Mn, gs).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < v(this, Xt).length; n++) {
      const o = v(this, Xt).key(n);
      if (o != null && o.startsWith(v(this, ve))) {
        const i = v(this, Xt).getItem(o);
        typeof i == "string" && e(o.substring(v(this, ve).length + 1), JSON.parse(i));
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
let Ys = ya;
wr = new WeakMap(), ve = new WeakMap(), Xt = new WeakMap(), Tn = new WeakMap(), Mn = new WeakSet(), gs = function(e) {
  return `${v(this, ve)}:${e}`;
};
const Sv = new Ys("DEFAULT");
function Cv(t, e = "local") {
  return new Ys(t, e);
}
Object.assign(Sv, { create: Cv });
var sd, ht, id, So, x_, ld = {}, cd = [], Ev = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ne(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ad(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function oc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++id };
  return i == null && ht.vnode != null && ht.vnode(r), r;
}
function Zc(t) {
  return t.children;
}
function Co(t, e) {
  this.props = t, this.context = e;
}
function rr(t, e) {
  if (e == null)
    return t.__ ? rr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? rr(t) : null;
}
function _d(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return _d(t);
  }
}
function S_(t) {
  (!t.__d && (t.__d = !0) && So.push(t) && !Gs.__r++ || x_ !== ht.debounceRendering) && ((x_ = ht.debounceRendering) || setTimeout)(Gs);
}
function Gs() {
  for (var t; Gs.__r = So.length; )
    t = So.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), So = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ne({}, r)).__v = r.__v + 1, dd(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? rr(r), r.__h), Tv(o, r), r.__e != l && _d(r)));
    });
}
function fd(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || cd, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? oc(null, a, null, null, a) : Array.isArray(a) ? oc(Zc, { children: a }, null, null, null) : a.__b > 0 ? oc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      dd(t, a, f = f || ld, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = ud(a, _, t) : _ = hd(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = rr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && md(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      pd(p[s], p[++s], p[++s]);
}
function ud(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? ud(o, e, n) : hd(n, o, o, i, o.__e, e));
  return e;
}
function hd(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Av(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || qs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || qs(t, r, e[r], n[r], o);
}
function C_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ev.test(e) ? n : n + "px";
}
function qs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || C_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || C_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? A_ : E_, r) : t.removeEventListener(e, r ? A_ : E_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
function E_(t) {
  this.l[t.type + !1](ht.event ? ht.event(t) : t);
}
function A_(t) {
  this.l[t.type + !0](ht.event ? ht.event(t) : t);
}
function dd(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ht.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Co(p, g), s.constructor = y, s.render = Lv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ne({}, s.__s)), Ne(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ht.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ne(Ne({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Zc && h.key == null ? h.props.children : h, fd(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Mv(n.__e, e, n, o, i, r, l, _);
    (h = ht.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ht.__e(x, e, n);
  }
}
function Tv(t, e) {
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
function Mv(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && sd.call(t.childNodes), h = (d = n.props || ld).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Av(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, fd(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && rr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && ad(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && qs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && qs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function pd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ht.__e(o, n);
  }
}
function md(t, e, n) {
  var o, i;
  if (ht.unmount && ht.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || pd(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ht.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && md(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || ad(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Lv(t, e, n) {
  return this.constructor(t, n);
}
sd = cd.slice, ht = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, id = 0, Co.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ne({}, this.state), typeof t == "function" && (t = t(Ne({}, n), this.props)), t && Ne(n, t), t != null && this.__v && (e && this._sb.push(e), S_(this));
}, Co.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), S_(this));
}, Co.prototype.render = Zc, So = [], Gs.__r = 0;
var Nv = 0;
function rc(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Nv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ht.vnode && ht.vnode(_), _;
}
function Dv(t) {
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
function Rv(t) {
  const [e, n, o] = typeof t == "string" ? Dv(t) : t;
  return e * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function T_(t, e) {
  return Rv(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function M_(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function Pv(t, e, n) {
  t = t % 360 / 360, e = M_(e), n = M_(n);
  const o = n <= 0.5 ? n * (e + 1) : n + e - n * e, i = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? i + (o - i) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? i + (o - i) * (2 / 3 - l) * 6 : i);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function Ov(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function Hv(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t = t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t = t[0].toUpperCase() : t = t.length <= e ? t : t.substring(0, e), t;
}
let Wv = class extends Co {
  render() {
    const {
      className: e,
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
    } = this.props, m = ["avatar", e], g = { ...n, background: l, color: c };
    let w = 32;
    o && (typeof o == "number" ? (g.width = `${o}px`, g.height = `${o}px`, g.fontSize = `${Math.max(12, Math.round(o / 2))}px`, w = o) : (m.push(`size-${o}`), w = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), i ? m.push("circle") : r && (typeof r == "number" ? g.borderRadius = `${r}px` : m.push(`rounded-${r}`));
    let k;
    if (d)
      m.push("has-img"), k = /* @__PURE__ */ rc("img", { className: "avatar-img", src: d, alt: _ });
    else if (_ != null && _.length) {
      const C = Hv(_, s);
      if (m.push("has-text", `has-text-${C.length}`), l)
        !c && l && (g.color = T_(l));
      else {
        const E = h ?? _, y = (typeof E == "number" ? E : Ov(E)) * f % 360;
        if (g.background = `hsl(${y},${a * 100}%,${u * 100}%)`, !c) {
          const x = Pv(y, a, u);
          g.color = T_(x);
        }
      }
      let A;
      w && w < 14 * C.length && (A = { transform: `scale(${w / (14 * C.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ rc("div", { "data-actualSize": w, className: "avatar-text", style: A, children: C });
    }
    return /* @__PURE__ */ rc(
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
class L_ extends $t {
}
L(L_, "NAME", "avatar"), L(L_, "Component", Wv);
class N_ extends $t {
}
L(N_, "NAME", "btngroup"), L(N_, "Component", Vh);
var Ol, nt, gd, Eo, D_, Xs = {}, yd = [], Iv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function De(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function vd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function sr(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ol.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ys(t, l, o, i, null);
}
function ys(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++gd };
  return i == null && nt.vnode != null && nt.vnode(r), r;
}
function Uv() {
  return { current: null };
}
function Hl(t) {
  return t.children;
}
function Ao(t, e) {
  this.props = t, this.context = e;
}
function ir(t, e) {
  if (e == null)
    return t.__ ? ir(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? ir(t) : null;
}
function bd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return bd(t);
  }
}
function R_(t) {
  (!t.__d && (t.__d = !0) && Eo.push(t) && !Ks.__r++ || D_ !== nt.debounceRendering) && ((D_ = nt.debounceRendering) || setTimeout)(Ks);
}
function Ks() {
  for (var t; Ks.__r = Eo.length; )
    t = Eo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Eo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = De({}, r)).__v = r.__v + 1, Jc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? ir(r), r.__h), xd(o, r), r.__e != l && bd(r)));
    });
}
function wd(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || yd, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ys(null, a, null, null, a) : Array.isArray(a) ? ys(Hl, { children: a }, null, null, null) : a.__b > 0 ? ys(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Jc(t, a, f = f || Xs, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = $d(a, _, t) : _ = kd(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = ir(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Cd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Sd(p[s], p[++s], p[++s]);
}
function $d(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? $d(o, e, n) : kd(n, o, o, i, o.__e, e));
  return e;
}
function kd(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Fv(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Zs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Zs(t, r, e[r], n[r], o);
}
function P_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Iv.test(e) ? n : n + "px";
}
function Zs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || P_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || P_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? H_ : O_, r) : t.removeEventListener(e, r ? H_ : O_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
function O_(t) {
  this.l[t.type + !1](nt.event ? nt.event(t) : t);
}
function H_(t) {
  this.l[t.type + !0](nt.event ? nt.event(t) : t);
}
function Jc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = nt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Ao(p, g), s.constructor = y, s.render = jv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = De({}, s.__s)), De(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = nt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = De(De({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Hl && h.key == null ? h.props.children : h, wd(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Bv(n.__e, e, n, o, i, r, l, _);
    (h = nt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), nt.__e(x, e, n);
  }
}
function xd(t, e) {
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
function Bv(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Ol.call(t.childNodes), h = (d = n.props || Xs).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Fv(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, wd(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && ir(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && vd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Zs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Zs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Sd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    nt.__e(o, n);
  }
}
function Cd(t, e, n) {
  var o, i;
  if (nt.unmount && nt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Sd(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        nt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Cd(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || vd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function jv(t, e, n) {
  return this.constructor(t, n);
}
function Vv(t, e, n) {
  var o, i, r;
  nt.__ && nt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Jc(e, t = (!o && n || e).__k = sr(Hl, null, [t]), i || Xs, Xs, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Ol.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), xd(r, t);
}
Ol = yd.slice, nt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, gd = 0, Ao.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = De({}, this.state), typeof t == "function" && (t = t(De({}, n), this.props)), t && De(n, t), t != null && this.__v && (e && this._sb.push(e), R_(this));
}, Ao.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), R_(this));
}, Ao.prototype.render = Hl, Eo = [], Ks.__r = 0;
var zv = 0;
function q(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --zv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return nt.vnode && nt.vnode(_), _;
}
var Ed = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Z = {}, Yv = {
  get exports() {
    return Z;
  },
  set exports(t) {
    Z = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(Ed, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var S = ["th", "st", "nd", "rd"], $ = D % 100;
      return "[" + D + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(D, S, $) {
      var R = String(D);
      return !R || R.length >= S ? D : "" + Array(S + 1 - R.length).join($) + D;
    }, k = { s: w, z: function(D) {
      var S = -D.utcOffset(), $ = Math.abs(S), R = Math.floor($ / 60), T = $ % 60;
      return (S <= 0 ? "+" : "-") + w(R, 2, "0") + ":" + w(T, 2, "0");
    }, m: function D(S, $) {
      if (S.date() < $.date())
        return -D($, S);
      var R = 12 * ($.year() - S.year()) + ($.month() - S.month()), T = S.clone().add(R, d), O = $ - T < 0, P = S.clone().add(R + (O ? -1 : 1), d);
      return +(-(R + ($ - T) / (O ? T - P : P - T)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, C = "en", A = {};
    A[C] = g;
    var E = function(D) {
      return D instanceof z;
    }, y = function D(S, $, R) {
      var T;
      if (!S)
        return C;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        A[O] && (T = O), $ && (A[O] = $, T = O);
        var P = S.split("-");
        if (!T && P.length > 1)
          return D(P[0]);
      } else {
        var I = S.name;
        A[I] = S, T = I;
      }
      return !R && T && (C = T), T || !R && C;
    }, x = function(D, S) {
      if (E(D))
        return D.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = D, $.args = arguments, new z($);
    }, N = k;
    N.l = y, N.i = E, N.w = function(D, S) {
      return x(D, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var z = function() {
      function D($) {
        this.$L = y($.locale, null, !0), this.parse($);
      }
      var S = D.prototype;
      return S.parse = function($) {
        this.$d = function(R) {
          var T = R.date, O = R.utc;
          if (T === null)
            return new Date(NaN);
          if (N.u(T))
            return new Date();
          if (T instanceof Date)
            return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var P = T.match(p);
            if (P) {
              var I = P[2] - 1 || 0, V = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V);
            }
          }
          return new Date(T);
        }($), this.$x = $.x || {}, this.init();
      }, S.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, S.$utils = function() {
        return N;
      }, S.isValid = function() {
        return this.$d.toString() !== b;
      }, S.isSame = function($, R) {
        var T = x($);
        return this.startOf(R) <= T && T <= this.endOf(R);
      }, S.isAfter = function($, R) {
        return x($) < this.startOf(R);
      }, S.isBefore = function($, R) {
        return this.endOf(R) < x($);
      }, S.$g = function($, R, T) {
        return N.u($) ? this[R] : this.set(T, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, R) {
        var T = this, O = !!N.u(R) || R, P = N.p($), I = function(st, G) {
          var it = N.w(T.$u ? Date.UTC(T.$y, G, st) : new Date(T.$y, G, st), T);
          return O ? it : it.endOf(h);
        }, V = function(st, G) {
          return N.w(T.toDate()[st].apply(T.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), T);
        }, j = this.$W, X = this.$M, vt = this.$D, U = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, X) : I(0, X + 1);
          case s:
            var K = this.$locale().weekStart || 0, yt = (j < K ? j + 7 : j) - K;
            return I(O ? vt - yt : vt + (6 - yt), X);
          case h:
          case u:
            return V(U + "Hours", 0);
          case _:
            return V(U + "Minutes", 1);
          case c:
            return V(U + "Seconds", 2);
          case l:
            return V(U + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function($) {
        return this.startOf($, !1);
      }, S.$set = function($, R) {
        var T, O = N.p($), P = "set" + (this.$u ? "UTC" : ""), I = (T = {}, T[h] = P + "Date", T[u] = P + "Date", T[d] = P + "Month", T[a] = P + "FullYear", T[_] = P + "Hours", T[c] = P + "Minutes", T[l] = P + "Seconds", T[r] = P + "Milliseconds", T)[O], V = O === h ? this.$D + (R - this.$W) : R;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[I](V), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](V);
        return this.init(), this;
      }, S.set = function($, R) {
        return this.clone().$set($, R);
      }, S.get = function($) {
        return this[N.p($)]();
      }, S.add = function($, R) {
        var T, O = this;
        $ = Number($);
        var P = N.p(R), I = function(X) {
          var vt = x(O);
          return N.w(vt.date(vt.date() + Math.round(X * $)), O);
        };
        if (P === d)
          return this.set(d, this.$M + $);
        if (P === a)
          return this.set(a, this.$y + $);
        if (P === h)
          return I(1);
        if (P === s)
          return I(7);
        var V = (T = {}, T[c] = o, T[_] = i, T[l] = n, T)[P] || 1, j = this.$d.getTime() + $ * V;
        return N.w(j, this);
      }, S.subtract = function($, R) {
        return this.add(-1 * $, R);
      }, S.format = function($) {
        var R = this, T = this.$locale();
        if (!this.isValid())
          return T.invalidDate || b;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = N.z(this), I = this.$H, V = this.$m, j = this.$M, X = T.weekdays, vt = T.months, U = function(G, it, Et, At) {
          return G && (G[it] || G(R, O)) || Et[it].slice(0, At);
        }, K = function(G) {
          return N.s(I % 12 || 12, G, "0");
        }, yt = T.meridiem || function(G, it, Et) {
          var At = G < 12 ? "AM" : "PM";
          return Et ? At.toLowerCase() : At;
        }, st = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: N.s(j + 1, 2, "0"), MMM: U(T.monthsShort, j, vt, 3), MMMM: U(vt, j), D: this.$D, DD: N.s(this.$D, 2, "0"), d: String(this.$W), dd: U(T.weekdaysMin, this.$W, X, 2), ddd: U(T.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(I), HH: N.s(I, 2, "0"), h: K(1), hh: K(2), a: yt(I, V, !0), A: yt(I, V, !1), m: String(V), mm: N.s(V, 2, "0"), s: String(this.$s), ss: N.s(this.$s, 2, "0"), SSS: N.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(G, it) {
          return it || st[G] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, R, T) {
        var O, P = N.p(R), I = x($), V = (I.utcOffset() - this.utcOffset()) * o, j = this - I, X = N.m(this, I);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - V) / 6048e5, O[h] = (j - V) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, T ? X : N.a(X);
      }, S.daysInMonth = function() {
        return this.endOf(d).$D;
      }, S.$locale = function() {
        return A[this.$L];
      }, S.locale = function($, R) {
        if (!$)
          return this.$L;
        var T = this.clone(), O = y($, R, !0);
        return O && (T.$L = O), T;
      }, S.clone = function() {
        return N.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, D;
    }(), B = z.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(D) {
      B[D[1]] = function(S) {
        return this.$g(S, D[0], D[1]);
      };
    }), x.extend = function(D, S) {
      return D.$i || (D(S, z, x), D.$i = !0), x;
    }, x.locale = y, x.isDayjs = E, x.unix = function(D) {
      return x(1e3 * D);
    }, x.en = A[C], x.Ls = A, x.p = {}, x;
  });
})(Yv);
const bc = (t = 0, e = 0) => {
  const n = [];
  for (let o = t; o <= e; o++)
    n.push(o);
  return n;
}, Ad = (t, e) => {
  const n = Math.ceil(t.length / e);
  return new Array(e).fill({}).map((o, i) => t.slice(i * n, (i + 1) * n));
}, Gv = (t) => {
  const { format: e, minDate: n, maxDate: o, tagDate: i, DATEROWCOUNT: r, showOtherMonth: l, clickDay: c, selectedDate: _, handleChangePanel: h, showToday: s, handleChange: d, clickToday: f } = t, a = (N) => Z(N).isValid() ? Z(N).add(1, "months").format(e) : "", u = (N) => Z(N).isValid() ? Z(N).subtract(1, "months").format(e) : "", b = () => {
    const N = u(_);
    d(N, !1);
  }, p = () => {
    const N = a(_);
    d(N, !1);
  }, m = () => {
    d("", !0);
  }, g = () => {
    d(_, !0);
  }, w = (N, z, B, D) => {
    const S = Z(), $ = Z(_), R = new Array(N);
    for (let T = 0; T < N; T++) {
      const O = z + T + 1, P = B.set("date", O), I = D && !l ? !0 : n && P.isBefore(n, "date") || o && P.isAfter(o, "date");
      R[T] = {
        isSelected: $.isSame(B.set("date", O), "date"),
        isToday: S.isSame(P, "date"),
        isDisable: !!I,
        isTag: !!(i != null && i.includes(P.format(e))),
        date: P,
        isOtherMonth: D,
        onClick: () => I ? {} : c(P)
      };
    }
    return R;
  }, k = () => {
    const N = Z(_), z = Z(), B = _ ? N : z, D = B.set("date", 1).day(), S = D === 0 ? 6 : D - 1, $ = B.subtract(1, "month"), T = Number($.endOf("month").get("date")) - S;
    return w(S, T, $, !0);
  }, C = () => {
    const N = Z(_), z = Z(), B = _ ? N : z, D = B.set("date", 1).day(), S = D === 0 ? 6 : D - 1, $ = B.endOf("month").get("date"), R = B.add(1, "month"), T = 7 * 6 % (S + $);
    return w(T, 0, R, !0);
  }, A = () => {
    const N = _, z = Z(), B = _ ? Z(N) : z, D = B.endOf("month").get("date"), S = w(D, 0, B, !1), $ = k(), R = C(), T = [...$, ...S, ...R];
    return Ad(T, r);
  }, E = ["一", "二", "三", "四", "五", "六", "日"], y = A(), x = _ || Z().format(e);
  return /* @__PURE__ */ q("div", { className: F("datepicker-calendar-day"), children: [
    /* @__PURE__ */ q("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ q("div", { class: "flex", children: /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => h("year"), children: [
        /* @__PURE__ */ q("span", { children: Z(x).format("YYYY 年 MM 月") }),
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
      /* @__PURE__ */ q("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ q("tr", { children: E.map((N, z) => /* @__PURE__ */ q("th", { children: N }, z)) }) }),
      /* @__PURE__ */ q("tbody", { className: "datepicker-calendar-tbody", children: y.map((N, z) => /* @__PURE__ */ q("tr", { children: N.map((B, D) => {
        const S = ["text-center"];
        return B.isToday && S.push("datepicker-calendar-today"), B.isSelected && S.push("datepicker-calendar-selected-date"), B.isOtherMonth && S.push("datepicker-calendar-other-month"), B.isTag && S.push("datepicker-calendar-tag"), /* @__PURE__ */ q("td", { className: F(S), children: /* @__PURE__ */ q("div", { className: F("btn", "ghost", "datepicker-calendar-date", B.isDisable ? "disabled" : ""), onClick: B.onClick, children: !l && B.isOtherMonth ? "" : Z(B.date).format("DD") }) }, D);
      }) }, z)) })
    ] }),
    /* @__PURE__ */ q("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ q("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ q("span", { children: "清除" }) }),
      /* @__PURE__ */ q("button", { type: "button", className: "btn ghost text-primary", onClick: g, children: /* @__PURE__ */ q("span", { children: "确认" }) })
    ] })
  ] });
};
const qv = (t) => {
  const { format: e, selectedDate: n, minDate: o, maxDate: i, year: r, handleChangeMonth: l } = t, c = Z(o).format("M"), _ = Z(i).format("M"), h = Ad(bc(1, 12), 3), s = (d, f) => {
    f || l(d);
  };
  return /* @__PURE__ */ q("div", { className: F("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ q("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ q("tbody", { className: "datepicker-calendar-month-table-body", children: h.map((d, f) => /* @__PURE__ */ q("tr", { children: d.map((a, u) => {
    const b = ["text-center"], p = Z(`${r}-${a}-01`).format(e), m = !!(c && Z(n).isBefore(c) || _ && Z(n).isBefore(_));
    return /* @__PURE__ */ q("td", { className: F(b), children: /* @__PURE__ */ q("div", { className: F("btn", "size-sm", "ghost", "datepicker-calendar-month", m ? "disabled" : ""), onClick: () => {
      s(p, m);
    }, children: [
      Z(p).format("MM"),
      " 月"
    ] }) }, u);
  }) }, f)) }) }) });
}, Xv = (t) => {
  const { selectedDate: e, handleChangeMonth: n } = t;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = Z(e).year(), i = [...bc(o - 100, o), ...bc(o + 1, o + 100)], r = (l, c) => {
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
    /* @__PURE__ */ q("div", { className: F("datepicker-accordion-content", o === l ? "" : "hidden"), children: sr(qv, {
      ...t,
      year: l.toString(),
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class Kv extends Ao {
  constructor() {
    super(...arguments);
    L(this, "DATEROWCOUNT", 6);
    L(this, "ref", Uv());
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
    return this.state.type === "day" ? sr(Gv, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : sr(Xv, {
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
function qr(t) {
  return t.split("-")[1];
}
function Qc(t) {
  return t === "y" ? "height" : "width";
}
function Xn(t) {
  return t.split("-")[0];
}
function Wl(t) {
  return ["top", "bottom"].includes(Xn(t)) ? "x" : "y";
}
function W_(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = Wl(e), _ = Qc(c), h = o[_] / 2 - i[_] / 2, s = Xn(e), d = c === "x";
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
  switch (qr(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Zv = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
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
        reference: t,
        floating: e
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
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
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
function Jv(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Td(t) {
  return typeof t != "number" ? Jv(t) : {
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
async function Qv(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = Td(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Js(await r.getClippingRect({
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
  }, C = Js(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const tb = Math.min, eb = Math.max;
function nb(t, e, n) {
  return eb(t, tb(e, n));
}
const ob = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = Td(o), s = {
      x: i,
      y: r
    }, d = Wl(l), f = Qc(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = nb(C, E, A), N = qr(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - N,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), rb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Qs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => rb[e]);
}
function sb(t, e, n) {
  n === void 0 && (n = !1);
  const o = qr(t), i = Wl(t), r = Qc(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Qs(l)), {
    main: l,
    cross: Qs(l)
  };
}
const ib = {
  start: "end",
  end: "start"
};
function wc(t) {
  return t.replace(/start|end/g, (e) => ib[e]);
}
function lb(t) {
  const e = Qs(t);
  return [wc(t), e, wc(e)];
}
function cb(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function ab(t, e, n, o) {
  const i = qr(t);
  let r = cb(Xn(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(wc)))), r;
}
const _b = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = t, p = Xn(o), m = Xn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [Qs(l)] : lb(l));
      !d && a !== "none" && w.push(...ab(l, u, a, g));
      const k = [l, ...w], C = await Qv(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: N,
          cross: z
        } = sb(o, r, g);
        A.push(C[N], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var y;
        const N = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[N];
        if (z)
          return {
            data: {
              index: N,
              overflows: E
            },
            reset: {
              placement: z
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
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
async function fb(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Xn(n), c = qr(n), _ = Wl(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const ub = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await fb(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function It(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ne(t) {
  return It(t).getComputedStyle(t);
}
function Ve(t) {
  return Ld(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ns;
function Md() {
  if (ns)
    return ns;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ns = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ns) : navigator.userAgent;
}
function de(t) {
  return t instanceof It(t).HTMLElement;
}
function Vt(t) {
  return t instanceof It(t).Element;
}
function Ld(t) {
  return t instanceof It(t).Node;
}
function I_(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = It(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Il(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = ne(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function hb(t) {
  return ["table", "td", "th"].includes(Ve(t));
}
function ta(t) {
  const e = /firefox/i.test(Md()), n = ne(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Nd() {
  return !/^((?!chrome|android).)*safari/i.test(Md());
}
function ea(t) {
  return ["html", "body", "#document"].includes(Ve(t));
}
const U_ = Math.min, To = Math.max, ti = Math.round;
function Dd(t) {
  const e = ne(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = ti(n) !== i || ti(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Rd(t) {
  return Vt(t) ? t : t.contextElement;
}
const Pd = {
  x: 1,
  y: 1
};
function mn(t) {
  const e = Rd(t);
  if (!de(e))
    return Pd;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = Dd(e);
  let l = (r ? ti(n.width) : n.width) / o, c = (r ? ti(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function _n(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Rd(t);
  let _ = Pd;
  e && (o ? Vt(o) && (_ = mn(o)) : _ = mn(t));
  const h = c ? It(c) : window, s = !Nd() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = It(c), p = o && Vt(o) ? It(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = mn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = It(m).frameElement;
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
function qe(t) {
  return ((Ld(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ul(t) {
  return Vt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Od(t) {
  return _n(qe(t)).left + Ul(t).scrollLeft;
}
function db(t, e, n) {
  const o = de(e), i = qe(e), r = _n(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Ve(e) !== "body" || Il(i)) && (l = Ul(e)), de(e)) {
      const _ = _n(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = Od(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function lr(t) {
  if (Ve(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (I_(t) ? t.host : null) || // Fallback
    qe(t)
  );
  return I_(e) ? e.host : e;
}
function F_(t) {
  return !de(t) || ne(t).position === "fixed" ? null : t.offsetParent;
}
function pb(t) {
  let e = lr(t);
  for (; de(e) && !ea(e); ) {
    if (ta(e))
      return e;
    e = lr(e);
  }
  return null;
}
function B_(t) {
  const e = It(t);
  let n = F_(t);
  for (; n && hb(n) && ne(n).position === "static"; )
    n = F_(n);
  return n && (Ve(n) === "html" || Ve(n) === "body" && ne(n).position === "static" && !ta(n)) ? e : n || pb(t) || e;
}
function mb(t) {
  return Dd(t);
}
function gb(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = de(n), r = qe(n);
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
  if ((i || !i && o !== "fixed") && ((Ve(n) !== "body" || Il(r)) && (l = Ul(n)), de(n))) {
    const h = _n(n);
    c = mn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function yb(t, e) {
  const n = It(t), o = qe(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Nd();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function vb(t) {
  var e;
  const n = qe(t), o = Ul(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = To(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = To(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Od(t);
  const _ = -o.scrollTop;
  return ne(i || n).direction === "rtl" && (c += To(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Hd(t) {
  const e = lr(t);
  return ea(e) ? t.ownerDocument.body : de(e) && Il(e) ? e : Hd(e);
}
function Mo(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Hd(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = It(o);
  return i ? e.concat(r, r.visualViewport || [], Il(o) ? o : []) : e.concat(o, Mo(o));
}
function bb(t, e) {
  const n = _n(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = de(t) ? mn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
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
function j_(t, e, n) {
  return e === "viewport" ? Js(yb(t, n)) : Vt(e) ? bb(e, n) : Js(vb(qe(t)));
}
function wb(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Mo(t).filter((c) => Vt(c) && Ve(c) !== "body"), i = null;
  const r = ne(t).position === "fixed";
  let l = r ? lr(t) : t;
  for (; Vt(l) && !ea(l); ) {
    const c = ne(l), _ = ta(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = lr(l);
  }
  return e.set(t, o), o;
}
function $b(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? wb(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = j_(e, s, i);
    return h.top = To(d.top, h.top), h.right = U_(d.right, h.right), h.bottom = U_(d.bottom, h.bottom), h.left = To(d.left, h.left), h;
  }, j_(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const kb = {
  getClippingRect: $b,
  convertOffsetParentRelativeRectToViewportRelativeRect: gb,
  isElement: Vt,
  getDimensions: mb,
  getOffsetParent: B_,
  getDocumentElement: qe,
  getScale: mn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || B_, r = this.getDimensions;
    return {
      reference: db(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => ne(t).direction === "rtl"
};
function xb(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Vt(t) ? Mo(t) : t.contextElement ? Mo(t.contextElement) : [], ...Mo(e)] : [];
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
    }), Vt(t) && !c && s.observe(t), !Vt(t) && t.contextElement && !c && s.observe(t.contextElement), s.observe(e);
  }
  let d, f = c ? _n(t) : null;
  c && a();
  function a() {
    const u = _n(t);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const Sb = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: kb,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return Zv(t, e, {
    ...i,
    platform: r
  });
};
var Ln, Nn, kt, nn, $r, kr, xr, $c, Ti, Wd, Mi, Id, Li, Ud, Ni, Fd, Di, Bd, Ri, jd, Pi, Vd, Oi;
const Ze = class extends Gt {
  constructor() {
    super(...arguments);
    M(this, xr);
    M(this, Ti);
    M(this, Mi);
    M(this, Li);
    M(this, Ni);
    M(this, Di);
    M(this, Ri);
    M(this, Pi);
    M(this, Ln, void 0);
    M(this, Nn, 0);
    M(this, kt, void 0);
    M(this, nn, void 0);
    M(this, $r, void 0);
    M(this, kr, void 0);
    L(this, "hideLater", () => {
      v(this, Oi).call(this), H(this, Nn, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, Oi, () => {
      clearTimeout(v(this, Nn)), H(this, Nn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = v(this, nn)) == null ? void 0 : n.classList.contains(Ze.CLASS_SHOW);
  }
  get datepicker() {
    return v(this, nn) || W(this, Mi, Id).call(this);
  }
  get trigger() {
    return v(this, $r) || this.element;
  }
  get elementShowClass() {
    return `with-${Ze.NAME}-show`;
  }
  show(n) {
    return H(this, $r, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(Ze.CLASS_SHOW), this.datepicker.classList.add("fade"), W(this, Ri, jd).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = v(this, kr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = v(this, nn)) == null || o.classList.remove(Ze.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
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
let Pt = Ze;
Ln = new WeakMap(), Nn = new WeakMap(), kt = new WeakMap(), nn = new WeakMap(), $r = new WeakMap(), kr = new WeakMap(), xr = new WeakSet(), $c = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Ti = new WeakSet(), Wd = function() {
  const n = W(this, xr, $c).call(this);
  return H(this, kt, document.createElement("div")), v(this, kt).style.position = "absolute", v(this, kt).style.width = `${n}px`, v(this, kt).style.height = `${n}px`, v(this, kt).style.transform = "rotate(45deg)", v(this, kt);
}, Mi = new WeakSet(), Id = function() {
  const n = Ze.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), Vv(sr(Kv, { ...this.options }), o), this.options.arrow && o.append(W(this, Ti, Wd).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, nn, o), o;
}, Li = new WeakSet(), Ud = function() {
  var l;
  const n = W(this, xr, $c).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [ub(n), _b()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && v(this, kt) && ((l = r.middleware) == null || l.push(ob({ element: v(this, kt) }))), r;
}, Ni = new WeakSet(), Fd = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Di = new WeakSet(), Bd = function(n) {
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
}, Ri = new WeakSet(), jd = function() {
  const n = W(this, Li, Ud).call(this), o = W(this, Pi, Vd).call(this);
  H(this, kr, xb(o, this.datepicker, () => {
    Sb(o, this.datepicker, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.datepicker.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, Ni, Fd).call(this, _);
      if (l.arrow && v(this, kt)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(v(this, kt).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-v(this, kt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, Di, Bd).call(this, _)
        });
      }
    });
  }));
}, Pi = new WeakSet(), Vd = function() {
  return v(this, Ln) || H(this, Ln, {
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
  }), v(this, Ln);
}, Oi = new WeakMap(), L(Pt, "NAME", "datepicker"), L(Pt, "CLASSNAME", "datepicker"), L(Pt, "CLASS_SHOW", "show"), L(Pt, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), L(Pt, "DEFAULT", {
  date: Z().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(t) {
  const e = t.target, n = e.closest(Pt.MENU_SELECTOR), o = e.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? Pt.ensure(n).toggle() : o || Pt.clear({ event: t });
});
const Cb = (t) => {
  const e = document.getElementsByClassName("with-datepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Pt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Pt.clear({ event: t });
};
window.addEventListener("scroll", Cb, !0);
function zd(t, e, n) {
  if (n) {
    t.setAttribute("class", F(e));
    return;
  }
  Ml(t.getAttribute("class"), e).forEach(([o, i]) => {
    t.classList.toggle(o, i);
  });
}
function so(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, i]) => {
      so(t, o, i);
    });
  n !== void 0 && (t.style[e] = typeof n == "number" ? `${n}px` : n);
}
function ei(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, i]) => {
      ei(t, o, i);
    });
  n !== void 0 && (n === null ? t.removeAttribute(e) : t.setAttribute(e, n));
}
var on, Sr, be, Hi, Dn, vs;
const ie = class extends Gt {
  constructor() {
    super(...arguments);
    M(this, Dn);
    M(this, on, 0);
    M(this, Sr, void 0);
    M(this, be, void 0);
    M(this, Hi, (n) => {
      const o = n.target;
      (o.closest(ie.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(ie.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", v(this, Hi)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const i = n.clientWidth, r = n.clientHeight;
          (!v(this, be) || v(this, be)[0] !== i || v(this, be)[1] !== r) && (H(this, be, [i, r]), this.layout());
        });
        o.observe(n), H(this, Sr, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = v(this, Sr)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: i, backdrop: r, className: l, style: c } = this.options;
    return zd(o, [{
      "modal-trans": i,
      "modal-no-backdrop": !r
    }, ie.CLASS_SHOW, l]), so(o, {
      zIndex: `${ie.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), W(this, Dn, vs).call(this, () => {
      o.classList.add(ie.CLASS_SHOWN), W(this, Dn, vs).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(ie.CLASS_SHOWN), this.emit("hide", this), W(this, Dn, vs).call(this, () => {
      this.modalElement.classList.remove(ie.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    o = o ?? this.options.size, ei(i, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? ei(i, "data-size", o) : o && (r.width = o), so(i, r), n = n ?? this.options.position ?? "fit";
    const l = i.clientWidth, c = i.clientHeight;
    H(this, be, [l, c]), typeof n == "function" && (n = n({ width: l, height: c }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), so(i, _), so(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Tt = ie;
on = new WeakMap(), Sr = new WeakMap(), be = new WeakMap(), Hi = new WeakMap(), Dn = new WeakSet(), vs = function(n, o) {
  v(this, on) && (clearTimeout(v(this, on)), H(this, on, 0)), n && (this.options.animation ? H(this, on, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, L(Tt, "NAME", "Modal"), L(Tt, "EVENTS", !0), L(Tt, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), L(Tt, "CLASS_SHOW", "show"), L(Tt, "CLASS_SHOWN", "in"), L(Tt, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), L(Tt, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Tt.all.forEach((t) => {
    const e = t;
    e.isShown && e.options.responsive && e.layout();
  });
});
var Fl, ot, Yd, io, Lo, V_, ni = {}, Gd = [], Eb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Re(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function qd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ab(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Fl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return bs(t, l, o, i, null);
}
function bs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Yd };
  return i == null && ot.vnode != null && ot.vnode(r), r;
}
function Tb() {
  return { current: null };
}
function Bl(t) {
  return t.children;
}
function gn(t, e) {
  this.props = t, this.context = e;
}
function cr(t, e) {
  if (e == null)
    return t.__ ? cr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? cr(t) : null;
}
function Xd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Xd(t);
  }
}
function z_(t) {
  (!t.__d && (t.__d = !0) && Lo.push(t) && !oi.__r++ || V_ !== ot.debounceRendering) && ((V_ = ot.debounceRendering) || setTimeout)(oi);
}
function oi() {
  for (var t; oi.__r = Lo.length; )
    t = Lo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Lo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Re({}, r)).__v = r.__v + 1, na(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? cr(r), r.__h), Qd(o, r), r.__e != l && Xd(r)));
    });
}
function Kd(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Gd, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? bs(null, a, null, null, a) : Array.isArray(a) ? bs(Bl, { children: a }, null, null, null) : a.__b > 0 ? bs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      na(t, a, f = f || ni, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Zd(a, _, t) : _ = Jd(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = cr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && ep(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      tp(p[s], p[++s], p[++s]);
}
function Zd(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Zd(o, e, n) : Jd(n, o, o, i, o.__e, e));
  return e;
}
function Jd(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Mb(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ri(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ri(t, r, e[r], n[r], o);
}
function Y_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Eb.test(e) ? n : n + "px";
}
function ri(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Y_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Y_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? q_ : G_, r) : t.removeEventListener(e, r ? q_ : G_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
function G_(t) {
  this.l[t.type + !1](ot.event ? ot.event(t) : t);
}
function q_(t) {
  this.l[t.type + !0](ot.event ? ot.event(t) : t);
}
function na(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ot.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new gn(p, g), s.constructor = y, s.render = Nb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Re({}, s.__s)), Re(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ot.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Re(Re({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Bl && h.key == null ? h.props.children : h, Kd(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Lb(n.__e, e, n, o, i, r, l, _);
    (h = ot.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ot.__e(x, e, n);
  }
}
function Qd(t, e) {
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
function Lb(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Fl.call(t.childNodes), h = (d = n.props || ni).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Mb(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Kd(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && cr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && qd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ri(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ri(t, "checked", u, d.checked, !1));
  }
  return t;
}
function tp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ot.__e(o, n);
  }
}
function ep(t, e, n) {
  var o, i;
  if (ot.unmount && ot.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || tp(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ot.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && ep(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || qd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Nb(t, e, n) {
  return this.constructor(t, n);
}
function Db(t, e, n) {
  var o, i, r;
  ot.__ && ot.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], na(e, t = (!o && n || e).__k = Ab(Bl, null, [t]), i || ni, ni, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Fl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Qd(r, t);
}
Fl = Gd.slice, ot = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Yd = 0, io = function(t) {
  return t != null && t.constructor === void 0;
}, gn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Re({}, this.state), typeof t == "function" && (t = t(Re({}, n), this.props)), t && Re(n, t), t != null && this.__v && (e && this._sb.push(e), z_(this));
}, gn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), z_(this));
}, gn.prototype.render = Bl, Lo = [], oi.__r = 0;
var Rb = 0;
function bt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Rb, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ot.vnode && ot.vnode(_), _;
}
let Pb = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
class np extends gn {
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
    return io(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ bt("div", { className: "modal-header", children: /* @__PURE__ */ bt("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : io(e) ? e : /* @__PURE__ */ bt("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ bt(qn, { ...e }) : null,
      n ? /* @__PURE__ */ bt("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ bt("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? io(e) ? e : /* @__PURE__ */ bt("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return io(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ bt("div", { className: "modal-footer", children: n ? /* @__PURE__ */ bt(qn, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ bt("div", { className: F("modal-dialog", e), style: n, children: /* @__PURE__ */ bt("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
L(np, "defaultProps", { closeBtn: !0 });
var Cr, Rn, Er;
class Ob extends gn {
  constructor() {
    super(...arguments);
    M(this, Cr, Tb());
    M(this, Rn, void 0);
    L(this, "state", {});
    M(this, Er, () => {
      var i, r;
      const n = (r = (i = v(this, Cr).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = v(this, Rn);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, c = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, c.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, Rn, o);
    });
  }
  componentDidMount() {
    v(this, Er).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = v(this, Rn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ bt(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: v(this, Cr),
        onLoad: v(this, Er)
      }
    );
  }
}
Cr = new WeakMap(), Rn = new WeakMap(), Er = new WeakMap();
function Hb(t, e) {
  const { custom: n, title: o, content: i } = e;
  return {
    body: i,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function Wb(t, e) {
  const { dataType: n, url: o, request: i, custom: r, title: l } = e, _ = await (await fetch(o, i)).text();
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
    body: n === "html" ? /* @__PURE__ */ bt("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: _ } }) : _
  };
}
async function Ib(t, e) {
  const { url: n, custom: o, title: i } = e;
  return {
    title: i,
    ...o,
    body: /* @__PURE__ */ bt(Ob, { url: n })
  };
}
const Ub = {
  custom: Hb,
  ajax: Wb,
  iframe: Ib
};
var Ar, Tr, Kt, Pn, ws, Wi, op, Mr, kc;
const Yo = class extends Tt {
  constructor() {
    super(...arguments);
    M(this, Pn);
    M(this, Wi);
    M(this, Mr);
    M(this, Ar, void 0);
    M(this, Tr, void 0);
    M(this, Kt, void 0);
  }
  get id() {
    return v(this, Tr);
  }
  get loading() {
    return this.modalElement.classList.contains(Yo.LOADING_CLASS);
  }
  get modalElement() {
    let n = v(this, Ar);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), ei(n, {
        id: o,
        style: this.options.style
      }), zd(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, Ar, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, Tr, this.options.id || `modal-${Pb()}`);
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
    v(this, Kt) && clearTimeout(v(this, Kt));
    const { modalElement: n, options: o } = this, { type: i, loadTimeout: r } = o, l = Ub[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.classList.add(Yo.LOADING_CLASS), await W(this, Wi, op).call(this), r && H(this, Kt, window.setTimeout(() => {
      H(this, Kt, 0), W(this, Mr, kc).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await W(this, Mr, kc).call(this, this.options.failedTip) : c && typeof c == "object" && await W(this, Pn, ws).call(this, c), v(this, Kt) && (clearTimeout(v(this, Kt)), H(this, Kt, 0)), n.classList.remove(Yo.LOADING_CLASS), !0;
  }
};
let lo = Yo;
Ar = new WeakMap(), Tr = new WeakMap(), Kt = new WeakMap(), Pn = new WeakSet(), ws = function(n) {
  return new Promise((o) => {
    const { afterRender: i, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), i == null || i(l), o();
      },
      ...r
    }, Db(
      /* @__PURE__ */ bt(np, { ...n }),
      this.modalElement
    );
  });
}, Wi = new WeakSet(), op = function() {
  const { loadingText: n } = this.options;
  return W(this, Pn, ws).call(this, {
    body: /* @__PURE__ */ bt("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ bt("span", { className: "spinner" }),
      n ? /* @__PURE__ */ bt("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, Mr = new WeakSet(), kc = function(n) {
  if (n)
    return W(this, Pn, ws).call(this, {
      body: /* @__PURE__ */ bt("div", { className: "modal-load-failed", children: n })
    });
}, L(lo, "LOADING_CLASS", "loading"), L(lo, "DEFAULT", {
  ...Tt.DEFAULT,
  loadTimeout: 1e4
});
var we, Ii, rp, Ui, sp, Fi, ip;
class No extends Gt {
  constructor() {
    super(...arguments);
    M(this, Ii);
    M(this, Ui);
    M(this, Fi);
    M(this, we, void 0);
  }
  get modal() {
    return v(this, we);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return W(this, Ui, sp).call(this).show();
  }
  hide() {
    var n;
    (n = v(this, we)) == null || n.hide();
  }
}
we = new WeakMap(), Ii = new WeakSet(), rp = function() {
  const {
    container: n,
    ...o
  } = this.options, i = o, r = this.element.getAttribute("href") || "";
  return i.type || (i.target || r[0] === "#" ? i.type = "static" : i.type = i.type || (i.url ? "iframe" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && r[0] !== "#" && (i.url = r), i;
}, Ui = new WeakSet(), sp = function() {
  const n = W(this, Ii, rp).call(this);
  let o = v(this, we);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Tt(W(this, Fi, ip).call(this), n), H(this, we, o)) : (o = new lo(this.container, n), H(this, we, o)), o;
}, Fi = new WeakSet(), ip = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const i = o.getAttribute("href");
      i != null && i.startsWith("#") && (n = i);
    }
  }
  return this.container.querySelector(n || ".modal");
}, L(No, "NAME", "ModalTrigger"), L(No, "EVENTS", !0), L(No, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (t) => {
  const n = t.target.closest(No.TOGGLE_SELECTOR);
  if (n) {
    const o = No.ensure(n);
    o && o.show(), console.log("> modalTrigger", o);
  }
});
var fc;
let Fb = (fc = class extends Gn {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = F(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, L(fc, "NAME", "nav"), fc);
class X_ extends $t {
}
L(X_, "NAME", "nav"), L(X_, "Component", Fb);
var xc;
xc = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var Bb = 0;
function Ue(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Bb, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return xc.vnode && xc.vnode(_), _;
}
function ar(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function jb({
  key: t,
  type: e,
  btnType: n,
  page: o,
  format: i,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = ar(r, o);
  return c.text === void 0 && !c.icon && i && (c.text = typeof i == "function" ? i(_) : Lt(i, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : Lt(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ Ue(te, { type: n, ...c });
}
const le = 24 * 60 * 60 * 1e3, Nt = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), Xr = (t, e = new Date()) => (t = Nt(t), e = Nt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), K_ = (t, e = new Date()) => Nt(t).getFullYear() === Nt(e).getFullYear(), Vb = (t, e = new Date()) => (t = Nt(t), e = Nt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), E$ = (t, e = new Date()) => {
  t = Nt(t), e = Nt(e);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, A$ = (t, e) => Xr(Nt(e), t), T$ = (t, e) => Xr(Nt(e).getTime() - le, t), M$ = (t, e) => Xr(Nt(e).getTime() + le, t), L$ = (t, e) => Xr(Nt(e).getTime() - 2 * le, t), Sc = (t, e = "yyyy-MM-dd hh:mm") => {
  t = Nt(t);
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
      const i = `${n[o]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), e;
}, N$ = (t, e, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = Sc(t, K_(t) ? o.month : o.full);
  if (Xr(t, e))
    return i;
  const r = Sc(e, K_(t, e) ? Vb(t, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, D$ = (t) => {
  const e = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return e - le * 7;
    case "oneMonth":
      return e - le * 31;
    case "threeMonth":
      return e - le * 31 * 3;
    case "halfYear":
      return e - le * 183;
    case "oneYear":
      return e - le * 365;
    case "twoYear":
      return e - 2 * (le * 365);
    default:
      return 0;
  }
}, Z_ = (t, e, n = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, Z_(t, "day", n, o);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, Z_(t, "day", n, o);
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
function zb({
  key: t,
  type: e,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const c = ar(i, n);
  return o = typeof o == "function" ? o(c) : Lt(o, c), /* @__PURE__ */ Ue(vu, { ...l, children: [
    r,
    o
  ] });
}
function Yb({
  key: t,
  type: e,
  btnType: n,
  count: o = 12,
  pagerInfo: i,
  onClick: r,
  linkCreator: l,
  ...c
}) {
  if (!i.pageTotal)
    return;
  const _ = { ...c, square: !0 }, h = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ Ue(te, { type: n, ..._ })), s = (f, a) => {
    const u = [];
    for (let b = f; b <= a; b++) {
      _.text = b, delete _.icon, _.disabled = !1;
      const p = ar(i, b);
      l && (_.url = typeof l == "function" ? l(p) : Lt(l, p)), u.push(/* @__PURE__ */ Ue(te, { type: n, ..._, onClick: r }));
    }
    return u;
  };
  let d = [];
  return d = [...s(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= o ? d = [...d, ...s(2, i.pageTotal)] : i.page < o - 2 ? d = [...d, ...s(2, o - 2), h(), ...s(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - o + 3 ? d = [...d, h(), ...s(i.pageTotal - o + 3, i.pageTotal)] : d = [...d, h(), ...s(i.page - Math.ceil((o - 4) / 2), i.page + Math.floor((o - 4) / 2)), h(), ...s(i.pageTotal, i.pageTotal)]), d;
}
function Gb({
  type: t,
  pagerInfo: e,
  linkCreator: n,
  items: o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  ...r
}) {
  var c;
  i.items = i.items ?? o.map((_) => {
    const h = { ...e, recPerPage: _ };
    return {
      text: `${_}`,
      url: typeof n == "function" ? n(h) : Lt(n, h)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(e) : Lt(l, e), i.menu = { ...i.menu, className: F((c = i.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ Ue(Lh, { type: "dropdown", dropdown: i, ...r });
}
function qb({
  key: t,
  page: e,
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
    const p = ar(i, d);
    c && !c({ info: p, event: b }) || (b.target.href = s.url = typeof _ == "function" ? _(p) : Lt(_, p));
  }, u = ar(i, e || 0);
  return s.url = typeof _ == "function" ? _(u) : Lt(_, u), s.className = F("input-group-addon", s.className), /* @__PURE__ */ Ue("div", { className: F("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ Ue("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ Ue(te, { type: o, ...s, onClick: a })
  ] });
}
var oo;
let Xb = (oo = class extends qn {
  get pagerInfo() {
    const { page: e = 1, recTotal: n = 0, recPerPage: o = 10 } = this.props;
    return { page: e, recTotal: n, recPerPage: o, pageTotal: o ? Math.ceil(n / o) : 0 };
  }
  isBtnItem(e) {
    return e === "link" || e === "nav" || e === "size-menu" || e === "goto" || super.isBtnItem(e);
  }
  getItemRenderProps(e, n, o) {
    const i = super.getItemRenderProps(e, n, o), r = n.type || "item";
    return r === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: e.linkCreator }), i;
  }
}, L(oo, "NAME", "pager"), L(oo, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), L(oo, "ItemComponents", {
  ...qn.ItemComponents,
  link: jb,
  info: zb,
  nav: Yb,
  "size-menu": Gb,
  goto: qb
}), oo);
class J_ extends $t {
}
L(J_, "NAME", "pager"), L(J_, "Component", Xb);
var lp, dt, cp, Do, Q_, ap = {}, _p = [], Kb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Pe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function fp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function sc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++cp };
  return i == null && dt.vnode != null && dt.vnode(r), r;
}
function Zb() {
  return { current: null };
}
function oa(t) {
  return t.children;
}
function Fe(t, e) {
  this.props = t, this.context = e;
}
function _r(t, e) {
  if (e == null)
    return t.__ ? _r(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? _r(t) : null;
}
function up(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return up(t);
  }
}
function tf(t) {
  (!t.__d && (t.__d = !0) && Do.push(t) && !si.__r++ || Q_ !== dt.debounceRendering) && ((Q_ = dt.debounceRendering) || setTimeout)(si);
}
function si() {
  for (var t; si.__r = Do.length; )
    t = Do.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Do = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Pe({}, r)).__v = r.__v + 1, mp(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? _r(r), r.__h), Qb(o, r), r.__e != l && up(r)));
    });
}
function hp(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || _p, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? sc(null, a, null, null, a) : Array.isArray(a) ? sc(oa, { children: a }, null, null, null) : a.__b > 0 ? sc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      mp(t, a, f = f || ap, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = dp(a, _, t) : _ = pp(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = _r(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && yp(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      gp(p[s], p[++s], p[++s]);
}
function dp(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? dp(o, e, n) : pp(n, o, o, i, o.__e, e));
  return e;
}
function pp(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Jb(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ii(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ii(t, r, e[r], n[r], o);
}
function ef(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Kb.test(e) ? n : n + "px";
}
function ii(t, e, n, o, i) {
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
      if (i)
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
  this.l[t.type + !1](dt.event ? dt.event(t) : t);
}
function of(t) {
  this.l[t.type + !0](dt.event ? dt.event(t) : t);
}
function mp(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = dt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Fe(p, g), s.constructor = y, s.render = e0), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Pe({}, s.__s)), Pe(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = dt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Pe(Pe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === oa && h.key == null ? h.props.children : h, hp(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = t0(n.__e, e, n, o, i, r, l, _);
    (h = dt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), dt.__e(x, e, n);
  }
}
function Qb(t, e) {
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
function t0(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && lp.call(t.childNodes), h = (d = n.props || ap).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Jb(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, hp(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && _r(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && fp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ii(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ii(t, "checked", u, d.checked, !1));
  }
  return t;
}
function gp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    dt.__e(o, n);
  }
}
function yp(t, e, n) {
  var o, i;
  if (dt.unmount && dt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || gp(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        dt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && yp(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || fp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function e0(t, e, n) {
  return this.constructor(t, n);
}
lp = _p.slice, dt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, cp = 0, Fe.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pe({}, this.state), typeof t == "function" && (t = t(Pe({}, n), this.props)), t && Pe(n, t), t != null && this.__v && (e && this._sb.push(e), tf(this));
}, Fe.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), tf(this));
}, Fe.prototype.render = oa, Do = [], si.__r = 0;
var n0 = 0;
function Q(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --n0, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return dt.vnode && dt.vnode(_), _;
}
let o0 = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Bi;
class r0 extends Fe {
  constructor() {
    super(...arguments);
    M(this, Bi, (n) => {
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
      /* @__PURE__ */ Q("div", { className: "picker-deselect-btn btn", onClick: v(this, Bi), "data-idx": f, children: /* @__PURE__ */ Q("span", { className: "close" }) })
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
Bi = new WeakMap();
var ji;
class s0 extends Fe {
  constructor() {
    super(...arguments);
    M(this, ji, (n) => {
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
    } = this.props, [d] = c, f = d ? /* @__PURE__ */ Q("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ Q("span", { className: "picker-select-placeholder", children: r }), a = d && _ ? /* @__PURE__ */ Q("button", { type: "button", className: "btn picker-deselect-btn", onClick: v(this, ji), children: /* @__PURE__ */ Q("span", { className: "close" }) }) : null;
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
ji = new WeakMap();
var Vi, vp, Lr, zi, Nr, Yi;
class i0 extends Fe {
  constructor() {
    super(...arguments);
    M(this, Vi);
    L(this, "state", { keys: "", shown: !1 });
    M(this, Lr, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    M(this, zi, ({ item: n }) => {
      const o = this.props.items.find((i) => i.value === n.key);
      o && this.props.onSelectItem(o);
    });
    M(this, Nr, (n) => {
      this.setState({ keys: n.target.value });
    });
    M(this, Yi, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", v(this, Lr)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", v(this, Lr));
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
        /* @__PURE__ */ Q("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: s, value: f, onChange: v(this, Nr), onInput: v(this, Nr) }),
        a ? /* @__PURE__ */ Q("button", { type: "button", className: "btn picker-menu-search-clear", onClick: v(this, Yi), children: /* @__PURE__ */ Q("span", { className: "close" }) }) : /* @__PURE__ */ Q("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ Q(Fc, { className: "picker-menu-list", items: W(this, Vi, vp).call(this), onClickItem: v(this, zi), ...h })
    ] });
  }
}
Vi = new WeakSet(), vp = function() {
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
}, Lr = new WeakMap(), zi = new WeakMap(), Nr = new WeakMap(), Yi = new WeakMap();
function rf(t) {
  const e = /* @__PURE__ */ new Set();
  return t.reduce((n, o) => (e.has(o) || (e.add(o), n.push(o)), n), []);
}
var uc, Dr, Rr, Pr, On, $s, Or, Cc, Gi, bp, qi, wp, Xi, Ki, Zi, Ji, Qi, $p;
let l0 = (uc = class extends Fe {
  constructor(n) {
    super(n);
    M(this, On);
    M(this, Or);
    M(this, Gi);
    M(this, qi);
    M(this, Qi);
    M(this, Dr, 0);
    M(this, Rr, o0());
    M(this, Pr, Zb());
    M(this, Xi, (n, o) => {
      const { valueList: i } = this, r = new Set(n.map((c) => c.value)), l = i.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    M(this, Ki, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    M(this, Zi, () => {
      this.close();
    });
    M(this, Ji, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = v(this, Pr).current) == null || o.hide();
      });
    });
    this.state = {
      value: W(this, Gi, bp).call(this, n.defaultValue) ?? "",
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
    return W(this, Or, Cc).call(this, this.state.value);
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
      const i = ++ka(this, Dr)._;
      if (await W(this, On, $s).call(this, { loading: !0, items: [] }), n = await n(), v(this, Dr) !== i)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await W(this, On, $s).call(this, o), n;
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
    await W(this, On, $s).call(this, { open: n }), n && this.loadItemList();
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
    } = this.props, l = r ? r0 : s0;
    return /* @__PURE__ */ Q("div", { className: F("picker", n), style: o, id: `picker-${v(this, Rr)}`, children: [
      /* @__PURE__ */ Q(l, { ...W(this, qi, wp).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ Q(i0, { ...W(this, Qi, $p).call(this), ref: v(this, Pr) }) : null
    ] });
  }
}, Dr = new WeakMap(), Rr = new WeakMap(), Pr = new WeakMap(), On = new WeakSet(), $s = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, Or = new WeakSet(), Cc = function(n) {
  return typeof n == "string" ? rf(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? rf(n) : [];
}, Gi = new WeakSet(), bp = function(n) {
  const o = W(this, Or, Cc).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, qi = new WeakSet(), wp = function() {
  const { placeholder: n, disabled: o } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: v(this, Ki),
    onDeselect: v(this, Xi)
  };
}, Xi = new WeakMap(), Ki = new WeakMap(), Zi = new WeakMap(), Ji = new WeakMap(), Qi = new WeakSet(), $p = function() {
  const { search: n, menuClass: o, menuWidth: i, menuStyle: r, menuMaxHeight: l, menuMaxWidth: c } = this.props, { items: _ } = this.state;
  return {
    id: v(this, Rr),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: i,
    maxHeight: l,
    maxWidth: c,
    onRequestHide: v(this, Zi),
    onSelectItem: v(this, Ji)
  };
}, L(uc, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), uc);
class sf extends $t {
}
L(sf, "NAME", "picker"), L(sf, "Component", l0);
var jl, rt, kp, Ro, lf, li = {}, xp = [], c0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Oe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Sp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Cp(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? jl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ks(t, l, o, i, null);
}
function ks(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++kp };
  return i == null && rt.vnode != null && rt.vnode(r), r;
}
function os() {
  return { current: null };
}
function Vl(t) {
  return t.children;
}
function Po(t, e) {
  this.props = t, this.context = e;
}
function fr(t, e) {
  if (e == null)
    return t.__ ? fr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? fr(t) : null;
}
function Ep(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ep(t);
  }
}
function cf(t) {
  (!t.__d && (t.__d = !0) && Ro.push(t) && !ci.__r++ || lf !== rt.debounceRendering) && ((lf = rt.debounceRendering) || setTimeout)(ci);
}
function ci() {
  for (var t; ci.__r = Ro.length; )
    t = Ro.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Ro = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Oe({}, r)).__v = r.__v + 1, ra(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? fr(r), r.__h), Lp(o, r), r.__e != l && Ep(r)));
    });
}
function Ap(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || xp, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ks(null, a, null, null, a) : Array.isArray(a) ? ks(Vl, { children: a }, null, null, null) : a.__b > 0 ? ks(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      ra(t, a, f = f || li, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Tp(a, _, t) : _ = Mp(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = fr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Dp(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Np(p[s], p[++s], p[++s]);
}
function Tp(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Tp(o, e, n) : Mp(n, o, o, i, o.__e, e));
  return e;
}
function Mp(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function a0(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ai(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ai(t, r, e[r], n[r], o);
}
function af(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || c0.test(e) ? n : n + "px";
}
function ai(t, e, n, o, i) {
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
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? ff : _f, r) : t.removeEventListener(e, r ? ff : _f, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
  this.l[t.type + !1](rt.event ? rt.event(t) : t);
}
function ff(t) {
  this.l[t.type + !0](rt.event ? rt.event(t) : t);
}
function ra(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = rt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Po(p, g), s.constructor = y, s.render = f0), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Oe({}, s.__s)), Oe(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = rt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Oe(Oe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Vl && h.key == null ? h.props.children : h, Ap(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = _0(n.__e, e, n, o, i, r, l, _);
    (h = rt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), rt.__e(x, e, n);
  }
}
function Lp(t, e) {
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
function _0(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && jl.call(t.childNodes), h = (d = n.props || li).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (a0(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Ap(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && fr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Sp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ai(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ai(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Np(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    rt.__e(o, n);
  }
}
function Dp(t, e, n) {
  var o, i;
  if (rt.unmount && rt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Np(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        rt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Dp(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Sp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function f0(t, e, n) {
  return this.constructor(t, n);
}
function u0(t, e, n) {
  var o, i, r;
  rt.__ && rt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], ra(e, t = (!o && n || e).__k = Cp(Vl, null, [t]), i || li, li, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? jl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Lp(r, t);
}
jl = xp.slice, rt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, kp = 0, Po.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Oe({}, this.state), typeof t == "function" && (t = t(Oe({}, n), this.props)), t && Oe(n, t), t != null && this.__v && (e && this._sb.push(e), cf(this));
}, Po.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), cf(this));
}, Po.prototype.render = Vl, Ro = [], ci.__r = 0;
var h0 = 0;
function Dt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --h0, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return rt.vnode && rt.vnode(_), _;
}
var _i = {}, d0 = {
  get exports() {
    return _i;
  },
  set exports(t) {
    _i = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(Ed, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var S = ["th", "st", "nd", "rd"], $ = D % 100;
      return "[" + D + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(D, S, $) {
      var R = String(D);
      return !R || R.length >= S ? D : "" + Array(S + 1 - R.length).join($) + D;
    }, k = { s: w, z: function(D) {
      var S = -D.utcOffset(), $ = Math.abs(S), R = Math.floor($ / 60), T = $ % 60;
      return (S <= 0 ? "+" : "-") + w(R, 2, "0") + ":" + w(T, 2, "0");
    }, m: function D(S, $) {
      if (S.date() < $.date())
        return -D($, S);
      var R = 12 * ($.year() - S.year()) + ($.month() - S.month()), T = S.clone().add(R, d), O = $ - T < 0, P = S.clone().add(R + (O ? -1 : 1), d);
      return +(-(R + ($ - T) / (O ? T - P : P - T)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, C = "en", A = {};
    A[C] = g;
    var E = function(D) {
      return D instanceof z;
    }, y = function D(S, $, R) {
      var T;
      if (!S)
        return C;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        A[O] && (T = O), $ && (A[O] = $, T = O);
        var P = S.split("-");
        if (!T && P.length > 1)
          return D(P[0]);
      } else {
        var I = S.name;
        A[I] = S, T = I;
      }
      return !R && T && (C = T), T || !R && C;
    }, x = function(D, S) {
      if (E(D))
        return D.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = D, $.args = arguments, new z($);
    }, N = k;
    N.l = y, N.i = E, N.w = function(D, S) {
      return x(D, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var z = function() {
      function D($) {
        this.$L = y($.locale, null, !0), this.parse($);
      }
      var S = D.prototype;
      return S.parse = function($) {
        this.$d = function(R) {
          var T = R.date, O = R.utc;
          if (T === null)
            return new Date(NaN);
          if (N.u(T))
            return new Date();
          if (T instanceof Date)
            return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var P = T.match(p);
            if (P) {
              var I = P[2] - 1 || 0, V = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, V);
            }
          }
          return new Date(T);
        }($), this.$x = $.x || {}, this.init();
      }, S.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, S.$utils = function() {
        return N;
      }, S.isValid = function() {
        return this.$d.toString() !== b;
      }, S.isSame = function($, R) {
        var T = x($);
        return this.startOf(R) <= T && T <= this.endOf(R);
      }, S.isAfter = function($, R) {
        return x($) < this.startOf(R);
      }, S.isBefore = function($, R) {
        return this.endOf(R) < x($);
      }, S.$g = function($, R, T) {
        return N.u($) ? this[R] : this.set(T, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, R) {
        var T = this, O = !!N.u(R) || R, P = N.p($), I = function(st, G) {
          var it = N.w(T.$u ? Date.UTC(T.$y, G, st) : new Date(T.$y, G, st), T);
          return O ? it : it.endOf(h);
        }, V = function(st, G) {
          return N.w(T.toDate()[st].apply(T.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), T);
        }, j = this.$W, X = this.$M, vt = this.$D, U = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, X) : I(0, X + 1);
          case s:
            var K = this.$locale().weekStart || 0, yt = (j < K ? j + 7 : j) - K;
            return I(O ? vt - yt : vt + (6 - yt), X);
          case h:
          case u:
            return V(U + "Hours", 0);
          case _:
            return V(U + "Minutes", 1);
          case c:
            return V(U + "Seconds", 2);
          case l:
            return V(U + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function($) {
        return this.startOf($, !1);
      }, S.$set = function($, R) {
        var T, O = N.p($), P = "set" + (this.$u ? "UTC" : ""), I = (T = {}, T[h] = P + "Date", T[u] = P + "Date", T[d] = P + "Month", T[a] = P + "FullYear", T[_] = P + "Hours", T[c] = P + "Minutes", T[l] = P + "Seconds", T[r] = P + "Milliseconds", T)[O], V = O === h ? this.$D + (R - this.$W) : R;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[I](V), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](V);
        return this.init(), this;
      }, S.set = function($, R) {
        return this.clone().$set($, R);
      }, S.get = function($) {
        return this[N.p($)]();
      }, S.add = function($, R) {
        var T, O = this;
        $ = Number($);
        var P = N.p(R), I = function(X) {
          var vt = x(O);
          return N.w(vt.date(vt.date() + Math.round(X * $)), O);
        };
        if (P === d)
          return this.set(d, this.$M + $);
        if (P === a)
          return this.set(a, this.$y + $);
        if (P === h)
          return I(1);
        if (P === s)
          return I(7);
        var V = (T = {}, T[c] = o, T[_] = i, T[l] = n, T)[P] || 1, j = this.$d.getTime() + $ * V;
        return N.w(j, this);
      }, S.subtract = function($, R) {
        return this.add(-1 * $, R);
      }, S.format = function($) {
        var R = this, T = this.$locale();
        if (!this.isValid())
          return T.invalidDate || b;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = N.z(this), I = this.$H, V = this.$m, j = this.$M, X = T.weekdays, vt = T.months, U = function(G, it, Et, At) {
          return G && (G[it] || G(R, O)) || Et[it].slice(0, At);
        }, K = function(G) {
          return N.s(I % 12 || 12, G, "0");
        }, yt = T.meridiem || function(G, it, Et) {
          var At = G < 12 ? "AM" : "PM";
          return Et ? At.toLowerCase() : At;
        }, st = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: N.s(j + 1, 2, "0"), MMM: U(T.monthsShort, j, vt, 3), MMMM: U(vt, j), D: this.$D, DD: N.s(this.$D, 2, "0"), d: String(this.$W), dd: U(T.weekdaysMin, this.$W, X, 2), ddd: U(T.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(I), HH: N.s(I, 2, "0"), h: K(1), hh: K(2), a: yt(I, V, !0), A: yt(I, V, !1), m: String(V), mm: N.s(V, 2, "0"), s: String(this.$s), ss: N.s(this.$s, 2, "0"), SSS: N.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(G, it) {
          return it || st[G] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, R, T) {
        var O, P = N.p(R), I = x($), V = (I.utcOffset() - this.utcOffset()) * o, j = this - I, X = N.m(this, I);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - V) / 6048e5, O[h] = (j - V) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, T ? X : N.a(X);
      }, S.daysInMonth = function() {
        return this.endOf(d).$D;
      }, S.$locale = function() {
        return A[this.$L];
      }, S.locale = function($, R) {
        if (!$)
          return this.$L;
        var T = this.clone(), O = y($, R, !0);
        return O && (T.$L = O), T;
      }, S.clone = function() {
        return N.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, D;
    }(), B = z.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(D) {
      B[D[1]] = function(S) {
        return this.$g(S, D[0], D[1]);
      };
    }), x.extend = function(D, S) {
      return D.$i || (D(S, z, x), D.$i = !0), x;
    }, x.locale = y, x.isDayjs = E, x.unix = function(D) {
      return x(1e3 * D);
    }, x.en = A[C], x.Ls = A, x.p = {}, x;
  });
})(d0);
const p0 = (t = "00:00:00") => {
  const e = _i(`1989-01-01 ${t}`);
  return {
    hour: e.hour(),
    minute: e.minute(),
    second: e.second()
  };
};
function m0() {
  let t = new Array(24).fill(0), e = new Array(60).fill(0), n = new Array(60).fill(0);
  return t = t.map((o, i) => o + i), e = e.map((o, i) => o + i), n = n.map((o, i) => o + i), { hourList: t, minuteList: e, secondList: n };
}
class g0 extends Po {
  constructor() {
    super(...arguments);
    L(this, "cellHeight", 24);
    L(this, "ref", os());
    L(this, "hourRef", os());
    L(this, "minuteRef", os());
    L(this, "secondRef", os());
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
    const i = p0(this.state.selectTime);
    return o.map((r) => {
      const l = i[n] === r, c = { ...i, [n]: r };
      return /* @__PURE__ */ Dt(
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
    const { showSeconds: n, style: o } = this.props, { hourList: i, minuteList: r, secondList: l } = m0();
    return /* @__PURE__ */ Dt("div", { className: F("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ Dt("div", { className: F("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ Dt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Dt("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", i) }) }),
        /* @__PURE__ */ Dt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Dt("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ Dt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Dt("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ Dt("div", { className: F("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ Dt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ Dt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function Kr(t) {
  return t.split("-")[1];
}
function sa(t) {
  return t === "y" ? "height" : "width";
}
function Kn(t) {
  return t.split("-")[0];
}
function zl(t) {
  return ["top", "bottom"].includes(Kn(t)) ? "x" : "y";
}
function uf(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = zl(e), _ = sa(c), h = o[_] / 2 - i[_] / 2, s = Kn(e), d = c === "x";
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
  switch (Kr(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const y0 = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = uf(h, o, _), f = o, a = {}, u = 0;
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
        reference: t,
        floating: e
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
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = uf(h, f, _)), b = -1;
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
function v0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Rp(t) {
  return typeof t != "number" ? v0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function fi(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function b0(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = Rp(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = fi(await r.getClippingRect({
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
  }, C = fi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const w0 = Math.min, $0 = Math.max;
function k0(t, e, n) {
  return $0(t, w0(e, n));
}
const x0 = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = Rp(o), s = {
      x: i,
      y: r
    }, d = zl(l), f = sa(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = k0(C, E, A), N = Kr(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - N,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), S0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ui(t) {
  return t.replace(/left|right|bottom|top/g, (e) => S0[e]);
}
function C0(t, e, n) {
  n === void 0 && (n = !1);
  const o = Kr(t), i = zl(t), r = sa(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = ui(l)), {
    main: l,
    cross: ui(l)
  };
}
const E0 = {
  start: "end",
  end: "start"
};
function Ec(t) {
  return t.replace(/start|end/g, (e) => E0[e]);
}
function A0(t) {
  const e = ui(t);
  return [Ec(t), e, Ec(e)];
}
function T0(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function M0(t, e, n, o) {
  const i = Kr(t);
  let r = T0(Kn(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(Ec)))), r;
}
const L0 = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = t, p = Kn(o), m = Kn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [ui(l)] : A0(l));
      !d && a !== "none" && w.push(...M0(l, u, a, g));
      const k = [l, ...w], C = await b0(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: N,
          cross: z
        } = C0(o, r, g);
        A.push(C[N], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var y;
        const N = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[N];
        if (z)
          return {
            data: {
              index: N,
              overflows: E
            },
            reset: {
              placement: z
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
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
async function N0(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Kn(n), c = Kr(n), _ = zl(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const D0 = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await N0(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function Ut(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function oe(t) {
  return Ut(t).getComputedStyle(t);
}
function ze(t) {
  return Op(t) ? (t.nodeName || "").toLowerCase() : "";
}
let rs;
function Pp() {
  if (rs)
    return rs;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (rs = t.brands.map((e) => e.brand + "/" + e.version).join(" "), rs) : navigator.userAgent;
}
function pe(t) {
  return t instanceof Ut(t).HTMLElement;
}
function zt(t) {
  return t instanceof Ut(t).Element;
}
function Op(t) {
  return t instanceof Ut(t).Node;
}
function hf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Ut(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Yl(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = oe(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function R0(t) {
  return ["table", "td", "th"].includes(ze(t));
}
function ia(t) {
  const e = /firefox/i.test(Pp()), n = oe(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Hp() {
  return !/^((?!chrome|android).)*safari/i.test(Pp());
}
function la(t) {
  return ["html", "body", "#document"].includes(ze(t));
}
const df = Math.min, Oo = Math.max, hi = Math.round;
function Wp(t) {
  const e = oe(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = hi(n) !== i || hi(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Ip(t) {
  return zt(t) ? t : t.contextElement;
}
const Up = {
  x: 1,
  y: 1
};
function yn(t) {
  const e = Ip(t);
  if (!pe(e))
    return Up;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = Wp(e);
  let l = (r ? hi(n.width) : n.width) / o, c = (r ? hi(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function fn(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Ip(t);
  let _ = Up;
  e && (o ? zt(o) && (_ = yn(o)) : _ = yn(t));
  const h = c ? Ut(c) : window, s = !Hp() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Ut(c), p = o && zt(o) ? Ut(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = yn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Ut(m).frameElement;
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
function Xe(t) {
  return ((Op(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Gl(t) {
  return zt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Fp(t) {
  return fn(Xe(t)).left + Gl(t).scrollLeft;
}
function P0(t, e, n) {
  const o = pe(e), i = Xe(e), r = fn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((ze(e) !== "body" || Yl(i)) && (l = Gl(e)), pe(e)) {
      const _ = fn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = Fp(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function ur(t) {
  if (ze(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (hf(t) ? t.host : null) || // Fallback
    Xe(t)
  );
  return hf(e) ? e.host : e;
}
function pf(t) {
  return !pe(t) || oe(t).position === "fixed" ? null : t.offsetParent;
}
function O0(t) {
  let e = ur(t);
  for (; pe(e) && !la(e); ) {
    if (ia(e))
      return e;
    e = ur(e);
  }
  return null;
}
function mf(t) {
  const e = Ut(t);
  let n = pf(t);
  for (; n && R0(n) && oe(n).position === "static"; )
    n = pf(n);
  return n && (ze(n) === "html" || ze(n) === "body" && oe(n).position === "static" && !ia(n)) ? e : n || O0(t) || e;
}
function H0(t) {
  return Wp(t);
}
function W0(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = pe(n), r = Xe(n);
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
  if ((i || !i && o !== "fixed") && ((ze(n) !== "body" || Yl(r)) && (l = Gl(n)), pe(n))) {
    const h = fn(n);
    c = yn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function I0(t, e) {
  const n = Ut(t), o = Xe(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Hp();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function U0(t) {
  var e;
  const n = Xe(t), o = Gl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = Oo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Oo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Fp(t);
  const _ = -o.scrollTop;
  return oe(i || n).direction === "rtl" && (c += Oo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Bp(t) {
  const e = ur(t);
  return la(e) ? t.ownerDocument.body : pe(e) && Yl(e) ? e : Bp(e);
}
function Ho(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Bp(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ut(o);
  return i ? e.concat(r, r.visualViewport || [], Yl(o) ? o : []) : e.concat(o, Ho(o));
}
function F0(t, e) {
  const n = fn(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = pe(t) ? yn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
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
function gf(t, e, n) {
  return e === "viewport" ? fi(I0(t, n)) : zt(e) ? F0(e, n) : fi(U0(Xe(t)));
}
function B0(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Ho(t).filter((c) => zt(c) && ze(c) !== "body"), i = null;
  const r = oe(t).position === "fixed";
  let l = r ? ur(t) : t;
  for (; zt(l) && !la(l); ) {
    const c = oe(l), _ = ia(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = ur(l);
  }
  return e.set(t, o), o;
}
function j0(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? B0(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = gf(e, s, i);
    return h.top = Oo(d.top, h.top), h.right = df(d.right, h.right), h.bottom = df(d.bottom, h.bottom), h.left = Oo(d.left, h.left), h;
  }, gf(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const V0 = {
  getClippingRect: j0,
  convertOffsetParentRelativeRectToViewportRelativeRect: W0,
  isElement: zt,
  getDimensions: H0,
  getOffsetParent: mf,
  getDocumentElement: Xe,
  getScale: yn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || mf, r = this.getDimensions;
    return {
      reference: P0(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => oe(t).direction === "rtl"
};
function z0(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...zt(t) ? Ho(t) : t.contextElement ? Ho(t.contextElement) : [], ...Ho(e)] : [];
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
    }), zt(t) && !c && s.observe(t), !zt(t) && t.contextElement && !c && s.observe(t.contextElement), s.observe(e);
  }
  let d, f = c ? fn(t) : null;
  c && a();
  function a() {
    const u = fn(t);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const Y0 = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: V0,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return y0(t, e, {
    ...i,
    platform: r
  });
};
var Hn, Wn, rn, Hr, xt, Wr, Ir, Ac, tl, jp, el, Vp, nl, zp, ol, Yp, rl, Gp, sl, qp, il, Xp, ll;
const Je = class extends Gt {
  constructor() {
    super(...arguments);
    M(this, Ir);
    M(this, tl);
    M(this, el);
    M(this, nl);
    M(this, ol);
    M(this, rl);
    M(this, sl);
    M(this, il);
    M(this, Hn, void 0);
    M(this, Wn, 0);
    M(this, rn, void 0);
    M(this, Hr, void 0);
    M(this, xt, void 0);
    M(this, Wr, void 0);
    L(this, "hideLater", () => {
      v(this, ll).call(this), H(this, Wn, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, ll, () => {
      clearTimeout(v(this, Wn)), H(this, Wn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = v(this, rn)) == null ? void 0 : n.classList.contains(Je.CLASS_SHOW);
  }
  get timepicker() {
    return v(this, rn) || W(this, el, Vp).call(this);
  }
  get trigger() {
    return v(this, Hr) || this.element;
  }
  get elementShowClass() {
    return `with-${Je.NAME}-show`;
  }
  show(n) {
    return H(this, Hr, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(Je.CLASS_SHOW), W(this, sl, qp).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = v(this, Wr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = v(this, rn)) == null || o.classList.remove(Je.CLASS_SHOW), !0;
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
let Ot = Je;
Hn = new WeakMap(), Wn = new WeakMap(), rn = new WeakMap(), Hr = new WeakMap(), xt = new WeakMap(), Wr = new WeakMap(), Ir = new WeakSet(), Ac = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, tl = new WeakSet(), jp = function() {
  const n = W(this, Ir, Ac).call(this);
  return H(this, xt, document.createElement("div")), v(this, xt).style.position = "absolute", v(this, xt).style.width = `${n}px`, v(this, xt).style.height = `${n}px`, v(this, xt).style.transform = "rotate(45deg)", v(this, xt);
}, el = new WeakSet(), Vp = function() {
  const n = Je.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), u0(Cp(g0, { ...this.options }), o), this.options.arrow && o.append(W(this, tl, jp).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, rn, o), o;
}, nl = new WeakSet(), zp = function() {
  var l;
  const n = W(this, Ir, Ac).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [D0(n), L0()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && v(this, xt) && ((l = r.middleware) == null || l.push(x0({ element: v(this, xt) }))), r;
}, ol = new WeakSet(), Yp = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, rl = new WeakSet(), Gp = function(n) {
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
}, sl = new WeakSet(), qp = function() {
  const n = W(this, nl, zp).call(this), o = W(this, il, Xp).call(this);
  H(this, Wr, z0(o, this.timepicker, () => {
    Y0(o, this.timepicker, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.timepicker.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, ol, Yp).call(this, _);
      if (l.arrow && v(this, xt)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(v(this, xt).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-v(this, xt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, rl, Gp).call(this, _)
        });
      }
    });
  }));
}, il = new WeakSet(), Xp = function() {
  return v(this, Hn) || H(this, Hn, {
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
  }), v(this, Hn);
}, ll = new WeakMap(), L(Ot, "NAME", "timepicker"), L(Ot, "CLASSNAME", "timepicker"), L(Ot, "CLASS_SHOW", "show"), L(Ot, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), L(Ot, "DEFAULT", {
  value: _i().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Ot.MENU_SELECTOR);
  n ? Ot.ensure(n).toggle() : Ot.clear({ event: t });
});
const G0 = (t) => {
  const e = document.getElementsByClassName("with-timepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Ot.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Ot.clear({ event: t });
};
window.addEventListener("scroll", G0, !0);
class yf extends $t {
}
L(yf, "NAME", "toolbar"), L(yf, "Component", qn);
function Zr(t) {
  return t.split("-")[1];
}
function ca(t) {
  return t === "y" ? "height" : "width";
}
function Zn(t) {
  return t.split("-")[0];
}
function ql(t) {
  return ["top", "bottom"].includes(Zn(t)) ? "x" : "y";
}
function vf(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = ql(e), _ = ca(c), h = o[_] / 2 - i[_] / 2, s = Zn(e), d = c === "x";
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
  switch (Zr(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const q0 = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = vf(h, o, _), f = o, a = {}, u = 0;
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
        reference: t,
        floating: e
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
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = vf(h, f, _)), b = -1;
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
function X0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Kp(t) {
  return typeof t != "number" ? X0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function di(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function K0(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = Kp(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = di(await r.getClippingRect({
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
const Z0 = Math.min, J0 = Math.max;
function Q0(t, e, n) {
  return J0(t, Z0(e, n));
}
const tw = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = Kp(o), s = {
      x: i,
      y: r
    }, d = ql(l), f = ca(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = Q0(C, E, A), N = Zr(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - N,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), ew = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function pi(t) {
  return t.replace(/left|right|bottom|top/g, (e) => ew[e]);
}
function nw(t, e, n) {
  n === void 0 && (n = !1);
  const o = Zr(t), i = ql(t), r = ca(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = pi(l)), {
    main: l,
    cross: pi(l)
  };
}
const ow = {
  start: "end",
  end: "start"
};
function Tc(t) {
  return t.replace(/start|end/g, (e) => ow[e]);
}
function rw(t) {
  const e = pi(t);
  return [Tc(t), e, Tc(e)];
}
function sw(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function iw(t, e, n, o) {
  const i = Zr(t);
  let r = sw(Zn(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(Tc)))), r;
}
const lw = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...b
      } = t, p = Zn(o), m = Zn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [pi(l)] : rw(l));
      !d && a !== "none" && w.push(...iw(l, u, a, g));
      const k = [l, ...w], C = await K0(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: N,
          cross: z
        } = nw(o, r, g);
        A.push(C[N], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var y;
        const N = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[N];
        if (z)
          return {
            data: {
              index: N,
              overflows: E
            },
            reset: {
              placement: z
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const D = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
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
async function cw(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Zn(n), c = Zr(n), _ = ql(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const aw = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await cw(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function Ft(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function re(t) {
  return Ft(t).getComputedStyle(t);
}
function Ye(t) {
  return Jp(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ss;
function Zp() {
  if (ss)
    return ss;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ss = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ss) : navigator.userAgent;
}
function me(t) {
  return t instanceof Ft(t).HTMLElement;
}
function Yt(t) {
  return t instanceof Ft(t).Element;
}
function Jp(t) {
  return t instanceof Ft(t).Node;
}
function bf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Ft(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Xl(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = re(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function _w(t) {
  return ["table", "td", "th"].includes(Ye(t));
}
function aa(t) {
  const e = /firefox/i.test(Zp()), n = re(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Qp() {
  return !/^((?!chrome|android).)*safari/i.test(Zp());
}
function _a(t) {
  return ["html", "body", "#document"].includes(Ye(t));
}
const wf = Math.min, Wo = Math.max, mi = Math.round;
function tm(t) {
  const e = re(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = mi(n) !== i || mi(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function em(t) {
  return Yt(t) ? t : t.contextElement;
}
const nm = {
  x: 1,
  y: 1
};
function vn(t) {
  const e = em(t);
  if (!me(e))
    return nm;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = tm(e);
  let l = (r ? mi(n.width) : n.width) / o, c = (r ? mi(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function un(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = em(t);
  let _ = nm;
  e && (o ? Yt(o) && (_ = vn(o)) : _ = vn(t));
  const h = c ? Ft(c) : window, s = !Qp() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Ft(c), p = o && Yt(o) ? Ft(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = vn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Ft(m).frameElement;
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
function Ke(t) {
  return ((Jp(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Kl(t) {
  return Yt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function om(t) {
  return un(Ke(t)).left + Kl(t).scrollLeft;
}
function fw(t, e, n) {
  const o = me(e), i = Ke(e), r = un(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Ye(e) !== "body" || Xl(i)) && (l = Kl(e)), me(e)) {
      const _ = un(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = om(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function hr(t) {
  if (Ye(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (bf(t) ? t.host : null) || // Fallback
    Ke(t)
  );
  return bf(e) ? e.host : e;
}
function $f(t) {
  return !me(t) || re(t).position === "fixed" ? null : t.offsetParent;
}
function uw(t) {
  let e = hr(t);
  for (; me(e) && !_a(e); ) {
    if (aa(e))
      return e;
    e = hr(e);
  }
  return null;
}
function kf(t) {
  const e = Ft(t);
  let n = $f(t);
  for (; n && _w(n) && re(n).position === "static"; )
    n = $f(n);
  return n && (Ye(n) === "html" || Ye(n) === "body" && re(n).position === "static" && !aa(n)) ? e : n || uw(t) || e;
}
function hw(t) {
  return tm(t);
}
function dw(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = me(n), r = Ke(n);
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
  if ((i || !i && o !== "fixed") && ((Ye(n) !== "body" || Xl(r)) && (l = Kl(n)), me(n))) {
    const h = un(n);
    c = vn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function pw(t, e) {
  const n = Ft(t), o = Ke(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Qp();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function mw(t) {
  var e;
  const n = Ke(t), o = Kl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = Wo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Wo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + om(t);
  const _ = -o.scrollTop;
  return re(i || n).direction === "rtl" && (c += Wo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function rm(t) {
  const e = hr(t);
  return _a(e) ? t.ownerDocument.body : me(e) && Xl(e) ? e : rm(e);
}
function Io(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = rm(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ft(o);
  return i ? e.concat(r, r.visualViewport || [], Xl(o) ? o : []) : e.concat(o, Io(o));
}
function gw(t, e) {
  const n = un(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = me(t) ? vn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
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
  return e === "viewport" ? di(pw(t, n)) : Yt(e) ? gw(e, n) : di(mw(Ke(t)));
}
function yw(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Io(t).filter((c) => Yt(c) && Ye(c) !== "body"), i = null;
  const r = re(t).position === "fixed";
  let l = r ? hr(t) : t;
  for (; Yt(l) && !_a(l); ) {
    const c = re(l), _ = aa(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = hr(l);
  }
  return e.set(t, o), o;
}
function vw(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? yw(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = xf(e, s, i);
    return h.top = Wo(d.top, h.top), h.right = wf(d.right, h.right), h.bottom = wf(d.bottom, h.bottom), h.left = Wo(d.left, h.left), h;
  }, xf(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const bw = {
  getClippingRect: vw,
  convertOffsetParentRelativeRectToViewportRelativeRect: dw,
  isElement: Yt,
  getDimensions: hw,
  getOffsetParent: kf,
  getDocumentElement: Ke,
  getScale: vn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || kf, r = this.getDimensions;
    return {
      reference: fw(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => re(t).direction === "rtl"
};
function ww(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Yt(t) ? Io(t) : t.contextElement ? Io(t.contextElement) : [], ...Io(e)] : [];
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
    }), Yt(t) && !c && s.observe(t), !Yt(t) && t.contextElement && !c && s.observe(t.contextElement), s.observe(e);
  }
  let d, f = c ? un(t) : null;
  c && a();
  function a() {
    const u = un(t);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const $w = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: bw,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return q0(t, e, {
    ...i,
    platform: r
  });
};
var In, Un, Fn, sn, St, cl, Ur, Fr, Mc, al, sm, _l, im, fl, lm, ul, cm, hl, am, dl, _m, pl, fm, Bn, ml, um;
const Qe = class extends Gt {
  constructor() {
    super(...arguments);
    M(this, Fr);
    M(this, al);
    M(this, _l);
    M(this, fl);
    M(this, ul);
    M(this, hl);
    M(this, dl);
    M(this, pl);
    M(this, ml);
    M(this, In, !1);
    M(this, Un, void 0);
    M(this, Fn, 0);
    M(this, sn, void 0);
    M(this, St, void 0);
    M(this, cl, void 0);
    M(this, Ur, void 0);
    L(this, "hideLater", () => {
      v(this, Bn).call(this), H(this, Fn, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, Bn, () => {
      clearTimeout(v(this, Fn)), H(this, Fn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = v(this, sn)) == null ? void 0 : n.classList.contains(Qe.CLASS_SHOW);
  }
  get tooltip() {
    return v(this, sn) || W(this, _l, im).call(this);
  }
  get trigger() {
    return v(this, cl) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Qe.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !v(this, In) && this.isHover && W(this, ml, um).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Qe.CLASS_SHOW), W(this, dl, _m).call(this), !0;
  }
  hide() {
    var n, o;
    return (n = v(this, Ur)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = v(this, sn)) == null || o.classList.remove(Qe.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    v(this, In) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", v(this, Bn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, i = this.getAll().entries(), r = new Set(o || []);
    for (const [l, c] of i)
      r.has(l) || c.hide();
  }
};
let Ht = Qe;
In = new WeakMap(), Un = new WeakMap(), Fn = new WeakMap(), sn = new WeakMap(), St = new WeakMap(), cl = new WeakMap(), Ur = new WeakMap(), Fr = new WeakSet(), Mc = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, al = new WeakSet(), sm = function() {
  const n = W(this, Fr, Mc).call(this);
  return H(this, St, document.createElement("div")), v(this, St).style.position = this.options.strategy, v(this, St).style.width = `${n}px`, v(this, St).style.height = `${n}px`, v(this, St).style.transform = "rotate(45deg)", v(this, St);
}, _l = new WeakSet(), im = function() {
  var i;
  const n = Qe.TOOLTIP_CLASS;
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
  if (this.options.arrow && (o == null || o.append(W(this, al, sm).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, sn, o), o;
}, fl = new WeakSet(), lm = function() {
  var l;
  const n = W(this, Fr, Mc).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [aw(n), lw()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && v(this, St) && ((l = r.middleware) == null || l.push(tw({ element: v(this, St) }))), r;
}, ul = new WeakSet(), cm = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, hl = new WeakSet(), am = function(n) {
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
}, dl = new WeakSet(), _m = function() {
  const n = W(this, fl, lm).call(this), o = W(this, pl, fm).call(this);
  H(this, Ur, ww(o, this.tooltip, () => {
    $w(o, this.tooltip, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, ul, cm).call(this, _);
      if (l.arrow && v(this, St)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(v(this, St).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-v(this, St).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, hl, am).call(this, _)
        });
      }
    });
  }));
}, pl = new WeakSet(), fm = function() {
  return v(this, Un) || H(this, Un, {
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
  }), v(this, Un);
}, Bn = new WeakMap(), ml = new WeakSet(), um = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", v(this, Bn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, In, !0);
}, L(Ht, "NAME", "tooltip"), L(Ht, "TOOLTIP_CLASS", "tooltip"), L(Ht, "CLASS_SHOW", "show"), L(Ht, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), L(Ht, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Ht.MENU_SELECTOR);
  if (n) {
    const o = Ht.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Ht.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(Ht.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Ht.ensure(n);
  o.isHover && o.show();
});
var hm, pt, dm, Uo, Sf, pm = {}, mm = [], kw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function He(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function gm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ic(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++dm };
  return i == null && pt.vnode != null && pt.vnode(r), r;
}
function fa(t) {
  return t.children;
}
function Fo(t, e) {
  this.props = t, this.context = e;
}
function dr(t, e) {
  if (e == null)
    return t.__ ? dr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? dr(t) : null;
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
function Cf(t) {
  (!t.__d && (t.__d = !0) && Uo.push(t) && !gi.__r++ || Sf !== pt.debounceRendering) && ((Sf = pt.debounceRendering) || setTimeout)(gi);
}
function gi() {
  for (var t; gi.__r = Uo.length; )
    t = Uo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Uo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = He({}, r)).__v = r.__v + 1, $m(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? dr(r), r.__h), Sw(o, r), r.__e != l && ym(r)));
    });
}
function vm(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || mm, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ic(null, a, null, null, a) : Array.isArray(a) ? ic(fa, { children: a }, null, null, null) : a.__b > 0 ? ic(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      $m(t, a, f = f || pm, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = bm(a, _, t) : _ = wm(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = dr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && xm(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      km(p[s], p[++s], p[++s]);
}
function bm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? bm(o, e, n) : wm(n, o, o, i, o.__e, e));
  return e;
}
function wm(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function xw(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || yi(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || yi(t, r, e[r], n[r], o);
}
function Ef(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || kw.test(e) ? n : n + "px";
}
function yi(t, e, n, o, i) {
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
      if (i)
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
  this.l[t.type + !1](pt.event ? pt.event(t) : t);
}
function Tf(t) {
  this.l[t.type + !0](pt.event ? pt.event(t) : t);
}
function $m(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = pt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Fo(p, g), s.constructor = y, s.render = Ew), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = He({}, s.__s)), He(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = pt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = He(He({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === fa && h.key == null ? h.props.children : h, vm(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Cw(n.__e, e, n, o, i, r, l, _);
    (h = pt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), pt.__e(x, e, n);
  }
}
function Sw(t, e) {
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
function Cw(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && hm.call(t.childNodes), h = (d = n.props || pm).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (xw(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, vm(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && dr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && gm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && yi(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && yi(t, "checked", u, d.checked, !1));
  }
  return t;
}
function km(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    pt.__e(o, n);
  }
}
function xm(t, e, n) {
  var o, i;
  if (pt.unmount && pt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || km(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        pt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && xm(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || gm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Ew(t, e, n) {
  return this.constructor(t, n);
}
hm = mm.slice, pt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, dm = 0, Fo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = He({}, this.state), typeof t == "function" && (t = t(He({}, n), this.props)), t && He(n, t), t != null && this.__v && (e && this._sb.push(e), Cf(this));
}, Fo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Cf(this));
}, Fo.prototype.render = fa, Uo = [], gi.__r = 0;
var Aw = 0;
function vi(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Aw, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pt.vnode && pt.vnode(_), _;
}
function Tw({
  type: t,
  key: e,
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
  d ? a = d(t, c) : l ? a = /* @__PURE__ */ vi(l, { ...h }) : a = c;
  const { left: u, top: b, width: p, height: m } = o;
  return /* @__PURE__ */ vi("div", { style: { width: p, height: m, left: u + i, top: b + r, ...n }, ...f, children: [
    a,
    s
  ] });
}
function Mw(t, e, n = 0, o = 0) {
  const i = t.left + n, r = t.top + o;
  return !(i > e.left + e.width || r > e.top + e.height || i + t.width < e.left || r + t.height < e.top);
}
let Lw = class extends Fo {
  render() {
    const { width: e, height: n, cells: o, left: i, top: r, visibleBounding: l, onRenderCell: c, style: _, children: h, offsetX: s = 0, offsetY: d = 0, ...f } = this.props, a = l ? o.filter((u) => Mw(u.bounding, l, s, d)) : o;
    return /* @__PURE__ */ vi("div", { style: { width: e, height: n, left: i, top: r, ..._ }, ...f, children: [
      a.map((u) => /* @__PURE__ */ vi(Tw, { offsetX: s, offsetY: d, ...u })),
      h
    ] });
  }
};
class Mf extends $t {
}
L(Mf, "NAME", "virtualgrid"), L(Mf, "Component", Lw);
var ua, mt, Sm, Cm, Bo, Lf, Em = {}, Am = [], Nw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function We(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Tm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ha(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ua.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return xs(t, l, o, i, null);
}
function xs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Sm };
  return i == null && mt.vnode != null && mt.vnode(r), r;
}
function Dw() {
  return { current: null };
}
function da(t) {
  return t.children;
}
function jo(t, e) {
  this.props = t, this.context = e;
}
function pr(t, e) {
  if (e == null)
    return t.__ ? pr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? pr(t) : null;
}
function Mm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Mm(t);
  }
}
function Nf(t) {
  (!t.__d && (t.__d = !0) && Bo.push(t) && !bi.__r++ || Lf !== mt.debounceRendering) && ((Lf = mt.debounceRendering) || setTimeout)(bi);
}
function bi() {
  for (var t; bi.__r = Bo.length; )
    t = Bo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Bo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = We({}, r)).__v = r.__v + 1, Rm(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? pr(r), r.__h), Pw(o, r), r.__e != l && Mm(r)));
    });
}
function Lm(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Am, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? xs(null, a, null, null, a) : Array.isArray(a) ? xs(da, { children: a }, null, null, null) : a.__b > 0 ? xs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Rm(t, a, f = f || Em, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Nm(a, _, t) : _ = Dm(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = pr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Om(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Pm(p[s], p[++s], p[++s]);
}
function Nm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Nm(o, e, n) : Dm(n, o, o, i, o.__e, e));
  return e;
}
function Dm(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Rw(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || wi(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || wi(t, r, e[r], n[r], o);
}
function Df(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Nw.test(e) ? n : n + "px";
}
function wi(t, e, n, o, i) {
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
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Pf : Rf, r) : t.removeEventListener(e, r ? Pf : Rf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
function Rf(t) {
  this.l[t.type + !1](mt.event ? mt.event(t) : t);
}
function Pf(t) {
  this.l[t.type + !0](mt.event ? mt.event(t) : t);
}
function Rm(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = mt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new jo(p, g), s.constructor = y, s.render = Hw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = We({}, s.__s)), We(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = mt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = We(We({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === da && h.key == null ? h.props.children : h, Lm(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ow(n.__e, e, n, o, i, r, l, _);
    (h = mt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), mt.__e(x, e, n);
  }
}
function Pw(t, e) {
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
function Ow(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && ua.call(t.childNodes), h = (d = n.props || Em).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Rw(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Lm(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && pr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Tm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && wi(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && wi(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Pm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    mt.__e(o, n);
  }
}
function Om(t, e, n) {
  var o, i;
  if (mt.unmount && mt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Pm(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        mt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Om(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Tm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Hw(t, e, n) {
  return this.constructor(t, n);
}
ua = Am.slice, mt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Sm = 0, Cm = function(t) {
  return t != null && t.constructor === void 0;
}, jo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = We({}, this.state), typeof t == "function" && (t = t(We({}, n), this.props)), t && We(n, t), t != null && this.__v && (e && this._sb.push(e), Nf(this));
}, jo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Nf(this));
}, jo.prototype.render = da, Bo = [], bi.__r = 0;
var Ww = 0;
function Y(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ww, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return mt.vnode && mt.vnode(_), _;
}
let Iw = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Hm, gt, Wm, Vo, Of, Im = {}, Um = [], Uw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ie(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Fm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function lc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Wm };
  return i == null && gt.vnode != null && gt.vnode(r), r;
}
function pa(t) {
  return t.children;
}
function zo(t, e) {
  this.props = t, this.context = e;
}
function mr(t, e) {
  if (e == null)
    return t.__ ? mr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? mr(t) : null;
}
function Bm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Bm(t);
  }
}
function Hf(t) {
  (!t.__d && (t.__d = !0) && Vo.push(t) && !$i.__r++ || Of !== gt.debounceRendering) && ((Of = gt.debounceRendering) || setTimeout)($i);
}
function $i() {
  for (var t; $i.__r = Vo.length; )
    t = Vo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Vo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ie({}, r)).__v = r.__v + 1, Ym(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? mr(r), r.__h), Bw(o, r), r.__e != l && Bm(r)));
    });
}
function jm(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Um, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? lc(null, a, null, null, a) : Array.isArray(a) ? lc(pa, { children: a }, null, null, null) : a.__b > 0 ? lc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Ym(t, a, f = f || Im, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Vm(a, _, t) : _ = zm(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = mr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && qm(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Gm(p[s], p[++s], p[++s]);
}
function Vm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Vm(o, e, n) : zm(n, o, o, i, o.__e, e));
  return e;
}
function zm(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Fw(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ki(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ki(t, r, e[r], n[r], o);
}
function Wf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Uw.test(e) ? n : n + "px";
}
function ki(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Wf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Wf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Uf : If, r) : t.removeEventListener(e, r ? Uf : If, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
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
function If(t) {
  this.l[t.type + !1](gt.event ? gt.event(t) : t);
}
function Uf(t) {
  this.l[t.type + !0](gt.event ? gt.event(t) : t);
}
function Ym(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = gt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new zo(p, g), s.constructor = y, s.render = Vw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ie({}, s.__s)), Ie(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = gt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ie(Ie({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === pa && h.key == null ? h.props.children : h, jm(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = jw(n.__e, e, n, o, i, r, l, _);
    (h = gt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), gt.__e(x, e, n);
  }
}
function Bw(t, e) {
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
function jw(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Hm.call(t.childNodes), h = (d = n.props || Im).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Fw(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, jm(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && mr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Fm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ki(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ki(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Gm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    gt.__e(o, n);
  }
}
function qm(t, e, n) {
  var o, i;
  if (gt.unmount && gt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Gm(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        gt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && qm(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Fm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Vw(t, e, n) {
  return this.constructor(t, n);
}
Hm = Um.slice, gt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Wm = 0, zo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ie({}, this.state), typeof t == "function" && (t = t(Ie({}, n), this.props)), t && Ie(n, t), t != null && this.__v && (e && this._sb.push(e), Hf(this));
}, zo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Hf(this));
}, zo.prototype.render = pa, Vo = [], $i.__r = 0;
var zw = 0;
function Ff(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --zw, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return gt.vnode && gt.vnode(_), _;
}
var ln, cn;
class Bf extends zo {
  constructor(n) {
    super(n);
    M(this, ln, 0);
    M(this, cn, null);
    L(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, i = n.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    L(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (v(this, ln) && cancelAnimationFrame(v(this, ln)), H(this, ln, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), H(this, ln, 0);
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
    n && (H(this, cn, typeof n == "string" ? document : n.current), v(this, cn).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), v(this, cn) && v(this, cn).removeEventListener("wheel", this._handleWheel);
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
    return o === "horz" ? (u.height = i, u.width = n, b.width = this.barSize, b.left = Math.round(Math.min(d, f) * (n - b.width) / d)) : (u.width = i, u.height = n, b.height = this.barSize, b.top = Math.round(Math.min(d, f) * (n - b.height) / d)), /* @__PURE__ */ Ff(
      "div",
      {
        className: F("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": a
        }),
        style: u,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ Ff(
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
ln = new WeakMap(), cn = new WeakMap();
function jf(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function Xm({ col: t, className: e, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
  var y;
  const s = {
    left: t.left,
    width: t.realWidth,
    height: n,
    ...l
  }, { align: d, border: f } = t.setting, a = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...t.setting.cellStyle,
    ...r
  }, u = ["dtable-cell", _, t.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], b = ["dtable-cell-content", e], p = [c ?? ((y = o.data) == null ? void 0 : y[t.name]) ?? ""], m = i ? i(p, { row: o, col: t }, ha) : p, g = [], w = [], k = {}, C = {};
  let A = "div";
  m == null || m.forEach((x) => {
    if (typeof x == "object" && x && !Cm(x) && ("html" in x || "className" in x || "style" in x || "attrs" in x || "children" in x || "tagName" in x)) {
      const N = x.outer ? g : w;
      x.html ? N.push(/* @__PURE__ */ Y("div", { className: F("dtable-cell-html", x.className), style: x.style, dangerouslySetInnerHTML: { __html: x.html }, ...x.attrs ?? {} })) : (x.style && Object.assign(x.outer ? s : a, x.style), x.className && (x.outer ? u : b).push(x.className), x.children && N.push(x.children), x.attrs && Object.assign(x.outer ? k : C, x.attrs)), x.tagName && !x.outer && (A = x.tagName);
    } else
      w.push(x);
  });
  const E = A;
  return /* @__PURE__ */ Y(
    "div",
    {
      className: F(u),
      style: s,
      "data-col": t.name,
      ...h,
      ...k,
      children: [
        w.length > 0 && /* @__PURE__ */ Y(E, { className: F(b), style: a, ...C, children: w }),
        g
      ]
    }
  );
}
function cc({ row: t, className: e, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: c = Xm, onRenderCell: _ }) {
  return /* @__PURE__ */ Y("div", { className: F("dtable-cells", e), style: { top: n, left: o, width: i, height: r }, children: l.map((h) => h.visible ? /* @__PURE__ */ Y(
    c,
    {
      col: h,
      row: t,
      onRenderCell: _
    },
    h.name
  ) : null) });
}
function Km({
  row: t,
  className: e,
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
  CellComponent: f = Xm,
  onRenderCell: a,
  style: u,
  ...b
}) {
  let p = null;
  i != null && i.length && (p = /* @__PURE__ */ Y(
    cc,
    {
      className: "dtable-fixed-left",
      cols: i,
      width: c,
      row: t,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  let m = null;
  l != null && l.length && (m = /* @__PURE__ */ Y(
    cc,
    {
      className: "dtable-flexable",
      cols: l,
      left: c - d,
      width: Math.max(_, h),
      row: t,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ Y(
    cc,
    {
      className: "dtable-fixed-right",
      cols: r,
      left: c + _,
      width: s,
      row: t,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  const w = { top: n, height: o, lineHeight: `${o - 2}px`, ...u };
  return /* @__PURE__ */ Y(
    "div",
    {
      className: F("dtable-row", e),
      style: w,
      "data-id": t.id,
      ...b,
      children: [
        p,
        m,
        g
      ]
    }
  );
}
function Yw({ height: t, onRenderRow: e, ...n }) {
  const o = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const i = e({ props: o }, ha);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ Y("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ Y(Km, { ...o }) });
}
function Gw({
  className: t,
  style: e,
  top: n,
  rows: o,
  height: i,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: c,
  ..._
}) {
  return e = { ...e, top: n, height: i }, /* @__PURE__ */ Y("div", { className: F("dtable-rows", t), style: e, children: o.map((h) => {
    const s = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ..._
    }, d = c == null ? void 0 : c({ props: s, row: h }, ha);
    return d && Object.assign(s, d), /* @__PURE__ */ Y(Km, { ...s });
  }) });
}
const xi = /* @__PURE__ */ new Map(), Si = [];
function Zm(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && xi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  xi.set(n, t), e != null && e.buildIn && !Si.includes(n) && Si.push(n);
}
function Qn(t, e) {
  Zm(t, e);
  const n = (o) => {
    if (!o)
      return t;
    const { defaultOptions: i, ...r } = t;
    return {
      ...r,
      defaultOptions: { ...i, ...o }
    };
  };
  return n.plugin = t, n;
}
function Jm(t) {
  return xi.delete(t);
}
function qw(t) {
  if (typeof t == "string") {
    const e = xi.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function Qm(t, e, n) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = qw(o);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Qm(t, i.plugins, n), t.push(i), n.add(i.name)));
  }), t;
}
function Xw(t = [], e = !0) {
  return e && Si.length && t.unshift(...Si), t != null && t.length ? Qm([], t, /* @__PURE__ */ new Set()) : [];
}
function Vf() {
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
var ls, an, jn, $e, Zt, ke, wt, jt, Jt, Vn, Br, jr, ue, zn, Yn, gl, tg, yl, eg, vl, ng, bl, og, Vr, Lc, wl, $l, zr, Yr, kl, xl, Sl, rg, Cl, sg, El, ig;
let Kw = (ls = class extends jo {
  constructor(n) {
    super(n);
    M(this, gl);
    M(this, yl);
    M(this, vl);
    M(this, bl);
    M(this, Vr);
    M(this, Sl);
    M(this, Cl);
    M(this, El);
    L(this, "ref", Dw());
    M(this, an, 0);
    M(this, jn, void 0);
    M(this, $e, !1);
    M(this, Zt, void 0);
    M(this, ke, void 0);
    M(this, wt, []);
    M(this, jt, void 0);
    M(this, Jt, /* @__PURE__ */ new Map());
    M(this, Vn, {});
    M(this, Br, void 0);
    M(this, jr, []);
    L(this, "updateLayout", () => {
      v(this, an) && cancelAnimationFrame(v(this, an)), H(this, an, requestAnimationFrame(() => {
        H(this, jt, void 0), this.forceUpdate(), H(this, an, 0);
      }));
    });
    M(this, ue, (n, o) => {
      o = o || n.type;
      const i = v(this, Jt).get(o);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    M(this, zn, (n) => {
      v(this, ue).call(this, n, `window_${n.type}`);
    });
    M(this, Yn, (n) => {
      v(this, ue).call(this, n, `document_${n.type}`);
    });
    M(this, wl, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return v(this, wt).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    M(this, $l, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), v(this, wt).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    M(this, zr, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, i)), this.options[c] && (n = this.options[c].call(this, n, o, i)), v(this, wt).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, i));
      }), n;
    });
    M(this, Yr, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    M(this, kl, (n) => {
      var c, _, h, s, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), v(this, wt).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === i);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of v(this, wt))
            if (((h = u.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
          return;
        for (const u of v(this, wt))
          if (((d = u.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    M(this, xl, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, jn, n.id ?? `dtable-${Iw(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, ke, Object.freeze(Xw(n.plugins))), v(this, ke).forEach((o) => {
      var c;
      const { methods: i, data: r, state: l } = o;
      i && Object.entries(i).forEach(([_, h]) => {
        typeof h == "function" && Object.assign(this, { [_]: h.bind(this) });
      }), r && Object.assign(v(this, Vn), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = v(this, jt)) == null ? void 0 : n.options) || v(this, Zt) || Vf();
  }
  get plugins() {
    return v(this, wt);
  }
  get layout() {
    return v(this, jt);
  }
  get id() {
    return v(this, jn);
  }
  get data() {
    return v(this, Vn);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, Zt, void 0);
  }
  componentDidMount() {
    if (v(this, $e) ? this.forceUpdate() : W(this, Vr, Lc).call(this), v(this, wt).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", v(this, kl)), this.on("keydown", v(this, xl)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, Br, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    v(this, wt).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    v(this, $e) ? W(this, Vr, Lc).call(this) : v(this, wt).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = v(this, Br)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of v(this, Jt).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), v(this, zn)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), v(this, Yn)) : n.removeEventListener(i, v(this, ue));
    v(this, wt).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), v(this, ke).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), H(this, Vn, {}), v(this, Jt).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = v(this, Jt).get(n);
    r ? r.push(o) : (v(this, Jt).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), v(this, zn)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), v(this, Yn)) : (l = this.ref.current) == null || l.addEventListener(n, v(this, ue)));
  }
  off(n, o, i) {
    var c;
    i && (n = `${i}_${n}`);
    const r = v(this, Jt).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (v(this, Jt).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), v(this, zn)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), v(this, Yn)) : (c = this.ref.current) == null || c.removeEventListener(n, v(this, ue)));
  }
  emitCustomEvent(n, o) {
    v(this, ue).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
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
    if (!v(this, Zt))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      H(this, jt, void 0);
    else if (i === "options") {
      if (H(this, Zt, void 0), !v(this, jt))
        return;
      H(this, jt, void 0);
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
    return Gr(v(this, jr), n, o, i, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = W(this, El, ig).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], f = [];
    return n && v(this, wt).forEach((a) => {
      var b;
      const u = (b = a.onRender) == null ? void 0 : b.call(this, n);
      u && (u.style && Object.assign(s, u.style), u.className && d.push(u.className), u.children && f.push(u.children));
    }), /* @__PURE__ */ Y(
      "div",
      {
        id: v(this, jn),
        className: F(d),
        style: s,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && W(this, gl, tg).call(this, n),
          n && W(this, yl, eg).call(this, n),
          n && W(this, vl, ng).call(this, n),
          n && W(this, bl, og).call(this, n)
        ]
      }
    );
  }
}, an = new WeakMap(), jn = new WeakMap(), $e = new WeakMap(), Zt = new WeakMap(), ke = new WeakMap(), wt = new WeakMap(), jt = new WeakMap(), Jt = new WeakMap(), Vn = new WeakMap(), Br = new WeakMap(), jr = new WeakMap(), ue = new WeakMap(), zn = new WeakMap(), Yn = new WeakMap(), gl = new WeakSet(), tg = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ Y(
      Yw,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: v(this, zr),
        onRenderRow: v(this, $l),
        ...i
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    pc,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, yl = new WeakSet(), eg = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ Y(
    Gw,
    {
      top: o,
      height: i,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: h,
      onRenderCell: v(this, zr),
      onRenderRow: v(this, wl),
      ...c
    }
  );
}, vl = new WeakSet(), ng = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    pc,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: i,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, bl = new WeakSet(), og = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: s, scrollWidth: d } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > d && o.push(
    /* @__PURE__ */ Y(
      Bf,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: s,
        clientSize: d,
        onScroll: v(this, Yr),
        left: r.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -f) + h,
        size: f,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > c && o.push(
    /* @__PURE__ */ Y(
      Bf,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: c,
        onScroll: v(this, Yr),
        right: 0,
        size: f,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, Vr = new WeakSet(), Lc = function() {
  var n;
  H(this, $e, !1), (n = this.options.afterRender) == null || n.call(this), v(this, wt).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, wl = new WeakMap(), $l = new WeakMap(), zr = new WeakMap(), Yr = new WeakMap(), kl = new WeakMap(), xl = new WeakMap(), Sl = new WeakSet(), rg = function() {
  if (v(this, Zt))
    return !1;
  const o = { ...Vf(), ...v(this, ke).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return H(this, Zt, o), H(this, wt, v(this, ke).reduce((i, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (i.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), i;
  }, [])), H(this, jr, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Cl = new WeakSet(), sg = function() {
  var X, vt;
  const { plugins: n } = this;
  let o = v(this, Zt);
  const i = {
    flex: /* @__PURE__ */ Y("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ Y("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((U) => {
    var yt;
    const K = (yt = U.beforeLayout) == null ? void 0 : yt.call(this, o);
    K && (o = { ...o, ...K }), Object.assign(i, U.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], s = [], d = {}, f = [], a = [];
  let u = 0, b = 0, p = 0;
  o.cols.forEach((U) => {
    if (U.hidden)
      return;
    const {
      name: K,
      type: yt = "",
      fixed: st = !1,
      flex: G = !1,
      width: it = r,
      minWidth: Et = l,
      maxWidth: At = c,
      ...hg
    } = U, J = {
      name: K,
      type: yt,
      setting: {
        name: K,
        type: yt,
        fixed: st,
        flex: G,
        width: it,
        minWidth: Et,
        maxWidth: At,
        ...hg
      },
      flex: st ? 0 : G === !0 ? 1 : typeof G == "number" ? G : 0,
      left: 0,
      width: jf(it, Et, At),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((va) => {
      var ba, wa;
      const Jr = (ba = va.colTypes) == null ? void 0 : ba[yt];
      if (Jr) {
        const $a = typeof Jr == "function" ? Jr(J) : Jr;
        $a && Object.assign(J.setting, $a);
      }
      (wa = va.onAddCol) == null || wa.call(this, J);
    }), J.width = jf(J.setting.width ?? J.width, J.setting.minWidth ?? Et, J.setting.maxWidth ?? At), J.realWidth = J.realWidth || J.width, st === "left" ? (J.left = u, u += J.width, _.push(J)) : st === "right" ? (J.left = b, b += J.width, h.push(J)) : (J.left = p, p += J.width, s.push(J)), J.flex && a.push(J), f.push(J), d[J.name] = J;
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
      g = 0, H(this, $e, !0);
      return;
    }
  } else
    g = m ?? 0;
  const { data: k, rowKey: C = "id", rowHeight: A } = o, E = [], y = (U, K, yt) => {
    var G, it;
    const st = { data: yt ?? { [C]: U }, id: U, index: E.length, top: 0 };
    if (yt || (st.lazy = !0), E.push(st), ((G = o.onAddRow) == null ? void 0 : G.call(this, st, K)) !== !1) {
      for (const Et of n)
        if (((it = Et.onAddRow) == null ? void 0 : it.call(this, st, K)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let U = 0; U < k; U++)
      y(`${U}`, U);
  else
    Array.isArray(k) && k.forEach((U, K) => {
      typeof U == "object" ? y(`${U[C] ?? ""}`, K, U) : y(`${U ?? ""}`, K);
    });
  let x = E;
  const N = {};
  if (o.onAddRows) {
    const U = o.onAddRows.call(this, x);
    U && (x = U);
  }
  for (const U of n) {
    const K = (X = U.onAddRows) == null ? void 0 : X.call(this, x);
    K && (x = K);
  }
  x.forEach((U, K) => {
    N[U.id] = U, U.index = K, U.top = U.index * A;
  });
  const { header: z, footer: B } = o, D = z ? o.headerHeight || A : 0, S = B ? o.footerHeight || A : 0;
  let $ = o.height, R = 0;
  const T = x.length * A, O = D + S + T;
  if (typeof $ == "function" && ($ = $.call(this, O)), $ === "auto")
    R = O;
  else if (typeof $ == "object")
    R = Math.min($.max, Math.max($.min, O));
  else if ($ === "100%") {
    const { parent: U } = this;
    if (U)
      R = U.clientHeight;
    else {
      R = 0, H(this, $e, !0);
      return;
    }
  } else
    R = $;
  const P = R - D - S, I = g - u - b, V = {
    options: o,
    allRows: E,
    width: g,
    height: R,
    rows: x,
    rowsMap: N,
    rowHeight: A,
    rowsHeight: P,
    rowsHeightTotal: T,
    header: z,
    footer: B,
    footerGenerators: i,
    headerHeight: D,
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
  }, j = (vt = o.onLayout) == null ? void 0 : vt.call(this, V);
  j && Object.assign(V, j), n.forEach((U) => {
    if (U.onLayout) {
      const K = U.onLayout.call(this, V);
      K && Object.assign(V, K);
    }
  }), H(this, jt, V);
}, El = new WeakSet(), ig = function() {
  (W(this, Sl, rg).call(this) || !v(this, jt)) && W(this, Cl, sg).call(this);
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
}, L(ls, "addPlugin", Zm), L(ls, "removePlugin", Jm), ls);
function zf(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(o));
}
const Zw = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (t) => !!t.colHover,
  events: {
    mouseover(t) {
      var i;
      const { colHover: e } = this.options;
      if (!e)
        return;
      const n = (i = t.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!n || e === "header" && !n.closest(".dtable-header"))
        return;
      const o = (n == null ? void 0 : n.getAttribute("data-col")) ?? !1;
      zf(this, o);
    },
    mouseleave() {
      zf(this, !1);
    }
  }
}, Jw = Qn(Zw, { buildIn: !0 });
function Qw(t, e) {
  var l, c;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (_, h) => {
    i && !i.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !lg.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
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
function t$(t) {
  return this.state.checkedRows[t] ?? !1;
}
function lg() {
  var n, o;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (e.call(this, r.id) ? 1 : 0), 0)) : t === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function e$() {
  return Object.keys(this.state.checkedRows);
}
const n$ = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Qw,
    isRowChecked: t$,
    isAllRowChecked: lg,
    getChecks: e$
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
        /* @__PURE__ */ Y("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ Y("input", { type: "checkbox", checked: t }) })
      ];
    },
    checkedInfo(t, e) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ Y("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(t, { row: e, col: n }) {
    var c;
    const { id: o } = e, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, o))
      return t;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const _ = this.isRowChecked(o), h = ((c = this.options.checkboxRender) == null ? void 0 : c.call(this, _, o)) ?? /* @__PURE__ */ Y("input", { type: "checkbox", checked: _ });
      t.unshift(h), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var l;
    const { id: o } = e, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, o) : i) {
      const c = this.isAllRowChecked(), _ = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, c, o)) ?? /* @__PURE__ */ Y("input", { type: "checkbox", checked: c });
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
    n && this.toggleCheckRows(n.checked);
  },
  onRowClick(t, { rowID: e }) {
    const n = t.target;
    if (!n)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(e);
  }
}, o$ = Qn(n$);
var cg = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(cg || {});
function Nc(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, o = e.children && n && n[t];
  let i = !1, { parent: r } = e;
  for (; r; ) {
    const l = Nc.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return e.state = i ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Nc.call(this, e.parent).level + 1 : 0, e;
}
function r$(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !ag.call(this)), e) {
      const i = o.entries();
      for (const [r, l] of i)
        l.state === "expanded" && (n[r] = !0);
    } else
      n = {};
  else {
    const i = Array.isArray(t) ? t : [t];
    e === void 0 && (e = !n[i[0]]), i.forEach((r) => {
      const l = o.get(r);
      e && (l != null && l.children) ? n[r] = !0 : delete n[r];
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
function ag() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function _g(t, e = 0, n, o = 0) {
  var i;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const l = t.get(r);
    l && (l.level === o && (l.order = e++), (i = l.children) != null && i.length && (e = _g(t, e, l.children, o + 1)));
  }
  return e;
}
function fg(t, e, n, o) {
  const i = t.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, fg(t, r, n, o);
  }), i;
}
function ug(t, e, n, o, i) {
  var c;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : i[_]);
    return n === h;
  })) && (o[e] = n), r.parent && ug(t, r.parent, n, o, i);
}
const s$ = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(t, e) {
      const { nestedMap: n } = this.data, o = n.get(t.id), i = n.get(e.id);
      return (o == null ? void 0 : o.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(t, e, n) {
      if (!this.options.checkable || !(t != null && t.length))
        return;
      const o = {};
      return Object.entries(e).forEach(([i, r]) => {
        const l = fg(this, i, r, o);
        l != null && l.parent && ug(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: r$,
    isAllCollapsed: ag,
    getNestedRowInfo: Nc
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(t) {
    var i, r;
    const { nestedMap: e } = this.data, n = (i = t.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"], o = e.get(t.id) ?? {
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
    ), _g(this.data.nestedMap), t.sort((e, n) => {
      const o = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(n.id), r = (o.order ?? 0) - (i.order ?? 0);
      return r === 0 ? e.index - n.index : r;
    }), t;
  },
  onRenderCell(t, { col: e, row: n }) {
    var c;
    const { id: o, data: i } = n, { nestedToggle: r } = e.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && t.unshift(((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, o, e, i)) ?? /* @__PURE__ */ Y("a", { role: "button", className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ Y("span", { className: "toggle-icon" }) })), l.level) {
      let { nestedIndent: _ = r } = e.setting;
      _ && (_ === !0 && (_ = this.options.nestedIndent ?? 12), t.unshift(/* @__PURE__ */ Y("div", { className: "dtable-nested-indent", style: { width: _ * l.level + "px" } })));
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var i;
    const { id: o } = e;
    return n.setting.nestedToggle && t.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, o, n, void 0)) ?? /* @__PURE__ */ Y("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ Y("span", { className: "toggle-icon" }) })), t;
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
}, i$ = Qn(s$);
const l$ = {
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
        const { linkTemplate: o = "", linkProps: i } = e.setting, r = Lt(o, n.data);
        return t[0] = /* @__PURE__ */ Y("a", { href: r, ...i, children: t[0] }), t;
      }
    },
    avatar: {
      onRenderCell(t, { col: e, row: n }) {
        const { data: o } = n, { avatarWithName: i, avatarClass: r = "size-xs circle", avatarKey: l = `${e.name}Avatar` } = e.setting, c = /* @__PURE__ */ Y("div", { className: `avatar ${r} flex-none`, children: /* @__PURE__ */ Y("img", { src: o ? o[l] : "" }) });
        return i ? t.unshift(c) : t[0] = c, t;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(t, { col: e }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = e.setting, l = (n - o) / 2, c = n / 2, _ = t[0];
        return t[0] = /* @__PURE__ */ Y("svg", { width: n, height: n, children: [
          /* @__PURE__ */ Y("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ Y("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - _) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ Y("text", { x: c, y: c + o, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${l}px` }, children: Math.round(_) })
        ] }), t;
      }
    },
    actionButtons: {
      onRenderCell(t, { col: e, row: n }) {
        var c;
        const o = (c = n.data) == null ? void 0 : c[e.name];
        if (!o)
          return t;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = e.setting;
        return [{
          html: o.map((_) => {
            typeof _ == "string" && (_ = { action: _ });
            const h = r[_.action];
            return h && (_ = { className: l, ...h, ..._ }), Lt(i, _);
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
        const { format: o, type: i } = n, r = t[0];
        return typeof o == "function" ? t[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? t[0] = Sc(r, o) : i === "html" ? t[0] = { html: Lt(o, r) } : t[0] = Lt(o, r), t;
      }
    }
  }
}, c$ = Qn(l$, { buildIn: !0 }), a$ = {
  name: "sort-type",
  onRenderHeaderCell(t, { col: e }) {
    const { sortType: n } = e.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: i } = e.setting, r = n === !0 ? "none" : n;
      if (t.push(
        /* @__PURE__ */ Y("div", { className: `dtable-sort dtable-sort-${r}` }),
        { outer: !0, attrs: { "data-sort": r } }
      ), o) {
        const l = typeof o == "function" ? o.call(this, e, r) : o;
        t.push(
          { tagName: "a", attrs: { href: l, ...i } }
        );
      }
    }
    return t;
  }
}, _$ = Qn(a$, { buildIn: !0 }), f$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: cg,
  checkable: o$,
  colHover: Jw,
  nested: i$,
  rich: c$,
  sortType: _$
}, Symbol.toStringTag, { value: "Module" }));
class eo extends $t {
}
L(eo, "NAME", "dtable"), L(eo, "Component", Kw), L(eo, "definePlugin", Qn), L(eo, "removePlugin", Jm), L(eo, "plugins", f$);
var Rt;
class co extends Gt {
  constructor() {
    super(...arguments);
    M(this, Rt, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Rt, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), v(this, Rt) && (this.addActive(v(this, Rt).parentElement, v(this, Rt)), v(this, Rt).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Rt, document.querySelector(n)), v(this, Rt) && (this.addActive(v(this, Rt).parentElement, v(this, Rt)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
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
Rt = new WeakMap(), L(co, "NAME", "NavTabs"), L(co, "NAV_CLASS", "nav-tabs"), L(co, "EVENTS", !0), L(co, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (t) => {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new co(t.target).showTarget());
});
export {
  Pa as ActionMenu,
  Ha as ActionMenuNested,
  L_ as Avatar,
  N_ as BtnGroup,
  ja as Button,
  Mt as ContextMenu,
  eo as DTable,
  Pt as Datepicker,
  Ct as Dropdown,
  Rc as EventBus,
  Va as Menu,
  ts as Messager,
  Tt as Modal,
  No as ModalTrigger,
  X_ as Nav,
  co as NavTabs,
  J_ as Pager,
  sf as Picker,
  k_ as ProgressCircle,
  le as TIME_DAY,
  Ot as Timepicker,
  yf as Toolbar,
  Ht as Tooltip,
  Mf as VirtualGrid,
  Ag as addI18nMap,
  x$ as browser,
  Z_ as calculateTimestamp,
  d$ as convertBytes,
  Nt as createDate,
  h$ as formatBytes,
  Sc as formatDate,
  N$ as formatDateSpan,
  Lt as formatString,
  Cg as getLangCode,
  D$ as getTimeBeforeDesc,
  Gr as i18n,
  L$ as isDBY,
  Jl as isObject,
  Xr as isSameDay,
  Vb as isSameMonth,
  E$ as isSameWeek,
  K_ as isSameYear,
  A$ as isToday,
  M$ as isTomorrow,
  T$ as isYesterday,
  dc as mergeDeep,
  hc as nativeEvents,
  Eg as setLangCode,
  Sv as store
};
