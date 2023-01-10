var cg = Object.defineProperty;
var ag = (t, e, n) => e in t ? cg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var L = (t, e, n) => (ag(t, typeof e != "symbol" ? e + "" : e, n), n), Yl = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var v = (t, e, n) => (Yl(t, e, "read from private field"), n ? n.call(t) : e.get(t)), M = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, H = (t, e, n, o) => (Yl(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n), ga = (t, e, n, o) => ({
  set _(i) {
    H(t, e, i, n);
  },
  get _() {
    return v(t, e, o);
  }
}), W = (t, e, n) => (Yl(t, e, "access private method"), n);
var kl, tt, Ff, Bf, lo, ya, ws = {}, jf = [], _g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ke(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Vf(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function zf(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? kl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return rs(t, l, o, i, null);
}
function rs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ff };
  return i == null && tt.vnode != null && tt.vnode(r), r;
}
function fg() {
  return { current: null };
}
function xl(t) {
  return t.children;
}
function ss(t, e) {
  this.props = t, this.context = e;
}
function Vo(t, e) {
  if (e == null)
    return t.__ ? Vo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Vo(t) : null;
}
function Yf(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Yf(t);
  }
}
function va(t) {
  (!t.__d && (t.__d = !0) && lo.push(t) && !$s.__r++ || ya !== tt.debounceRendering) && ((ya = tt.debounceRendering) || setTimeout)($s);
}
function $s() {
  for (var t; $s.__r = lo.length; )
    t = lo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), lo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = ke({}, r)).__v = r.__v + 1, Ec(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Vo(r), r.__h), Kf(o, r), r.__e != l && Yf(r)));
    });
}
function Gf(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || jf, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? rs(null, a, null, null, a) : Array.isArray(a) ? rs(xl, { children: a }, null, null, null) : a.__b > 0 ? rs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Ec(t, a, f = f || ws, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = qf(a, _, t) : _ = Xf(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Vo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Jf(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Zf(p[s], p[++s], p[++s]);
}
function qf(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? qf(o, e, n) : Xf(n, o, o, i, o.__e, e));
  return e;
}
function Xf(t, e, n, o, i, r) {
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
function ug(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ks(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ks(t, r, e[r], n[r], o);
}
function ba(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || _g.test(e) ? n : n + "px";
}
function ks(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || ba(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || ba(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? $a : wa, r) : t.removeEventListener(e, r ? $a : wa, r);
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
function wa(t) {
  this.l[t.type + !1](tt.event ? tt.event(t) : t);
}
function $a(t) {
  this.l[t.type + !0](tt.event ? tt.event(t) : t);
}
function Ec(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = tt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new ss(p, g), s.constructor = y, s.render = dg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ke({}, s.__s)), ke(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = ke(ke({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === xl && h.key == null ? h.props.children : h, Gf(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = hg(n.__e, e, n, o, i, r, l, _);
    (h = tt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), tt.__e(x, e, n);
  }
}
function Kf(t, e) {
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
function hg(t, e, n, o, i, r, l, c) {
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
    if (r = r && kl.call(t.childNodes), h = (d = n.props || ws).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (ug(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Gf(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Vo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Vf(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ks(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ks(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Zf(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    tt.__e(o, n);
  }
}
function Jf(t, e, n) {
  var o, i;
  if (tt.unmount && tt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Zf(o, null, e)), (o = t.__c) != null) {
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
      o[i] && Jf(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Vf(t.__e), t.__ = t.__e = t.__d = void 0;
}
function dg(t, e, n) {
  return this.constructor(t, n);
}
function pg(t, e, n) {
  var o, i, r;
  tt.__ && tt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Ec(e, t = (!o && n || e).__k = zf(xl, null, [t]), i || ws, ws, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? kl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Kf(r, t);
}
kl = jf.slice, tt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Ff = 0, Bf = function(t) {
  return t != null && t.constructor === void 0;
}, ss.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ke({}, this.state), typeof t == "function" && (t = t(ke({}, n), this.props)), t && ke(n, t), t != null && this.__v && (e && this._sb.push(e), va(this));
}, ss.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), va(this));
}, ss.prototype.render = xl, lo = [], $s.__r = 0;
var mg = 0;
function Qf(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --mg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return tt.vnode && tt.vnode(_), _;
}
var le;
class gg {
  constructor(e = "") {
    M(this, le, void 0);
    typeof e == "object" ? H(this, le, e) : H(this, le, document.appendChild(document.createComment(e)));
  }
  on(e, n, o) {
    v(this, le).addEventListener(e, n, o);
  }
  once(e, n, o) {
    v(this, le).addEventListener(e, n, { once: !0, ...o });
  }
  off(e, n, o) {
    v(this, le).removeEventListener(e, n, o);
  }
  emit(e) {
    return v(this, le).dispatchEvent(e), e;
  }
}
le = new WeakMap();
const cc = /* @__PURE__ */ new Set([
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
class Ac extends gg {
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
    return typeof e == "string" && (cc.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(Ac.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (cc.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
var ce, pr, Qe, no;
class ka extends Ac {
  constructor(n = "", o) {
    super(n);
    M(this, Qe);
    M(this, ce, /* @__PURE__ */ new Map());
    M(this, pr, void 0);
    H(this, pr, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = W(this, Qe, no).call(this, n), super.on(n, o, i), v(this, ce).set(o, [n, i]);
  }
  off(n, o, i) {
    n = W(this, Qe, no).call(this, n), super.off(n, o, i), v(this, ce).delete(o);
  }
  once(n, o, i) {
    n = W(this, Qe, no).call(this, n);
    const r = (l) => {
      o(l), v(this, ce).delete(r);
    };
    super.once(n, r, i), v(this, ce).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = W(this, Qe, no).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(v(this, ce).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), v(this, ce).clear();
  }
}
ce = new WeakMap(), pr = new WeakMap(), Qe = new WeakSet(), no = function(n) {
  const o = v(this, pr);
  return cc.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function yg(t, e) {
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
function vg(t, e, n) {
  const o = yg(t, e), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function Gl(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function ac(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (Gl(t) && Gl(n))
    for (const o in n)
      Gl(n[o]) ? (t[o] || Object.assign(t, { [o]: {} }), ac(t[o], n[o])) : Object.assign(t, { [o]: n[o] });
  return ac(t, ...e);
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
var Tc = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(Tc || {});
function i$(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / Tc[n]).toFixed(e) + n);
}
const l$ = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const o = n[1];
  return t = t.replace(o, ""), Number.parseInt(t, 10) * Tc[o];
};
var Uf;
let Mc = ((Uf = document.documentElement.getAttribute("lang")) == null ? void 0 : Uf.toLowerCase()) ?? "zh_cn", me;
function bg() {
  return Mc;
}
function wg(t) {
  Mc = t.toLowerCase();
}
function $g(t, e) {
  me || (me = {}), typeof t == "string" && (t = { [t]: e ?? {} }), ac(me, t);
}
function jr(t, e, n, o, i, r) {
  Array.isArray(t) ? me && t.unshift(me) : t = me ? [me, t] : [t], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || Mc;
  let c;
  for (const _ of t) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const s = r && _ === me ? `${r}.${e}` : e;
    if (c = vg(h, s), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? Lt(c, ...Array.isArray(n) ? n : [n]) : c;
}
jr.addLang = $g;
jr.getCode = bg;
jr.setCode = wg;
function kg(t) {
  return Object.fromEntries(Object.entries(t).map(([e, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [e, n];
  }));
}
const ql = /* @__PURE__ */ new Map();
var ae, yn, Ft;
class zt {
  constructor(e, n) {
    M(this, ae, void 0);
    M(this, yn, void 0);
    M(this, Ft, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, this.constructor.EVENTS && H(this, Ft, new ka(e, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, ae, { ...this.constructor.DEFAULT }), this.setOptions({ ...e instanceof HTMLElement ? kg(e.dataset) : null, ...n }), this.constructor.all.set(e, this), H(this, yn, e), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return v(this, ae);
  }
  get element() {
    return v(this, yn);
  }
  get events() {
    return v(this, Ft);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(e) {
    return e && Object.assign(v(this, ae), e), v(this, ae);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(v(this, yn)), v(this, Ft) && (this.emit("destroyed", this), v(this, Ft).offAll());
  }
  on(e, n, o) {
    var i;
    (i = v(this, Ft)) == null || i.on(e, n, o);
  }
  once(e, n, o) {
    var i;
    (i = v(this, Ft)) == null || i.once(e, n, o);
  }
  off(e, n, o) {
    var i;
    (i = v(this, Ft)) == null || i.off(e, n, o);
  }
  emit(e, n) {
    var l;
    let o = ka.createEvent(e, n);
    const i = `on${e[0].toUpperCase()}${e.substring(1)}`, r = v(this, ae)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = v(this, Ft)) == null ? void 0 : l.emit(e, n), o;
  }
  i18n(e, n, o) {
    return jr(v(this, ae).i18n, e, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${e}}`;
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
    if (ql.has(e))
      return ql.get(e);
    const n = /* @__PURE__ */ new Map();
    return ql.set(e, n), n;
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
ae = new WeakMap(), yn = new WeakMap(), Ft = new WeakMap(), L(zt, "EVENTS", !1), L(zt, "DEFAULT", {});
class kt extends zt {
  constructor() {
    super(...arguments);
    L(this, "ref", fg());
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
    pg(/* @__PURE__ */ Qf(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
L(kt, "Component");
var Lc, lt, tu, eu, co, xa, nu = {}, ou = [], xg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function xe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ru(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Kn(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Lc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return is(t, l, o, i, null);
}
function is(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++tu };
  return i == null && lt.vnode != null && lt.vnode(r), r;
}
function Sg() {
  return { current: null };
}
function Dc(t) {
  return t.children;
}
function ao(t, e) {
  this.props = t, this.context = e;
}
function zo(t, e) {
  if (e == null)
    return t.__ ? zo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? zo(t) : null;
}
function su(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return su(t);
  }
}
function Sa(t) {
  (!t.__d && (t.__d = !0) && co.push(t) && !xs.__r++ || xa !== lt.debounceRendering) && ((xa = lt.debounceRendering) || setTimeout)(xs);
}
function xs() {
  for (var t; xs.__r = co.length; )
    t = co.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), co = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = xe({}, r)).__v = r.__v + 1, au(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? zo(r), r.__h), Eg(o, r), r.__e != l && su(r)));
    });
}
function iu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || ou, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? is(null, a, null, null, a) : Array.isArray(a) ? is(Dc, { children: a }, null, null, null) : a.__b > 0 ? is(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      au(t, a, f = f || nu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = lu(a, _, t) : _ = cu(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = zo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && fu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      _u(p[s], p[++s], p[++s]);
}
function lu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? lu(o, e, n) : cu(n, o, o, i, o.__e, e));
  return e;
}
function cu(t, e, n, o, i, r) {
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
function Cg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ss(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ss(t, r, e[r], n[r], o);
}
function Ca(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || xg.test(e) ? n : n + "px";
}
function Ss(t, e, n, o, i) {
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
  this.l[t.type + !1](lt.event ? lt.event(t) : t);
}
function Aa(t) {
  this.l[t.type + !0](lt.event ? lt.event(t) : t);
}
function au(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = lt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new ao(p, g), s.constructor = y, s.render = Tg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = xe({}, s.__s)), xe(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = xe(xe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Dc && h.key == null ? h.props.children : h, iu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ag(n.__e, e, n, o, i, r, l, _);
    (h = lt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), lt.__e(x, e, n);
  }
}
function Eg(t, e) {
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
function Ag(t, e, n, o, i, r, l, c) {
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
    if (r = r && Lc.call(t.childNodes), h = (d = n.props || nu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Cg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, iu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && zo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && ru(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ss(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ss(t, "checked", u, d.checked, !1));
  }
  return t;
}
function _u(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    lt.__e(o, n);
  }
}
function fu(t, e, n) {
  var o, i;
  if (lt.unmount && lt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || _u(o, null, e)), (o = t.__c) != null) {
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
      o[i] && fu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || ru(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Tg(t, e, n) {
  return this.constructor(t, n);
}
Lc = ou.slice, lt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, tu = 0, eu = function(t) {
  return t != null && t.constructor === void 0;
}, ao.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = xe({}, this.state), typeof t == "function" && (t = t(xe({}, n), this.props)), t && xe(n, t), t != null && this.__v && (e && this._sb.push(e), Sa(this));
}, ao.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Sa(this));
}, ao.prototype.render = Dc, co = [], xs.__r = 0;
var Mg = 0;
function Jt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Mg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return lt.vnode && lt.vnode(_), _;
}
function Sl(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), o = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const l = n.get(i);
    typeof l == "number" ? e[l][1] = !!r : (n.set(i, e.length), e.push([i, !!r]));
  };
  return t.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Sl(...i).forEach(o) : i && typeof i == "object" ? Object.entries(i).forEach(o) : typeof i == "string" && i.split(" ").forEach((r) => o(r, !0));
  }), e.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const F = (...t) => Sl(...t).reduce((e, [n, o]) => (o && e.push(n), e), []).join(" ");
function Lg({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: i
}) {
  return Kn(t, {
    className: F(e),
    style: o,
    ...i
  }, n);
}
function uu({
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
    typeof c == "string" ? /* @__PURE__ */ Jt("i", { class: `icon ${c}` }) : c,
    /* @__PURE__ */ Jt("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ Jt("i", { class: `icon ${s}` }) : s
  ];
  return Kn(t, {
    className: F(e, { disabled: r, active: l }),
    title: d,
    [t === "a" ? "href" : "data-url"]: i,
    [t === "a" ? "target" : "data-target"]: h,
    style: f,
    onClick: a,
    ...o
  }, ...u);
}
function Dg({
  component: t = "div",
  className: e,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return Kn(t, {
    className: F(e),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function Ng({
  component: t = "div",
  className: e,
  style: n,
  space: o,
  flex: i,
  attrs: r,
  onClick: l,
  children: c
}) {
  return Kn(t, {
    className: F(e),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, c);
}
function Rg(t) {
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
      m != null && (typeof m == "object" && !Bf(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ Qf("div", { className: F(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? u.push(m.__html) : (m.style && Object.assign(f, m.style), m.className && d.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(s, m.attrs)) : a.push(m));
    });
  }), u.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: F(d),
    style: f,
    ...s
  }, a];
}
function _c({
  tag: t = "div",
  ...e
}) {
  const [n, o] = Rg(e);
  return zf(t, n, ...o);
}
function Pg(t) {
  return /* @__PURE__ */ Jt(_c, { ...t });
}
function hu({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: i
}) {
  return Kn(t, {
    className: F(e),
    style: o,
    ...i
  }, n);
}
var to;
let zn = (to = class extends ao {
  constructor() {
    super(...arguments);
    L(this, "ref", Sg());
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
          return /* @__PURE__ */ Jt(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, Kn);
        if (eu(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: c = "item", component: _, key: h = i, rootAttrs: s, rootClass: d, rootStyle: f, rootChildren: a, ...u } = r, b = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || zn.ItemComponents[c] : _;
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
    return /* @__PURE__ */ Jt(
      "li",
      {
        className: F(`${this.name}-${i.type}`, l),
        ..._,
        children: [
          /* @__PURE__ */ Jt(n, { ...i }),
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
    return /* @__PURE__ */ Jt(b, { class: F(this.name, l), ...u, ref: this.ref, children: [
      c && c.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, L(to, "ItemComponents", {
  divider: Lg,
  item: uu,
  heading: Dg,
  space: Ng,
  custom: Pg,
  basic: hu
}), L(to, "ROOT_TAG", "menu"), L(to, "NAME", "action-menu"), to);
class Ta extends kt {
}
L(Ta, "NAME", "actionmenu"), L(Ta, "Component", zn);
function Ma({
  ...t
}) {
  return /* @__PURE__ */ Jt(uu, { ...t });
}
var rc, mr, Yt, vn;
let du = (rc = class extends zn {
  constructor(n) {
    super(n);
    M(this, mr, /* @__PURE__ */ new Set());
    M(this, Yt, void 0);
    M(this, vn, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    H(this, Yt, n.nestedShow === void 0), v(this, Yt) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
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
    return /* @__PURE__ */ Jt(
      i,
      {
        items: o,
        name: this.props.name,
        nestedShow: v(this, Yt) ? this.state.nestedShow : this.props.nestedShow,
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
    v(this, mr).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = Ma), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: v(this, vn).bind(this, l, !0),
        onMouseLeave: v(this, vn).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = r;
      r.onClick = (s) => {
        v(this, vn).call(this, l, void 0, s), h == null || h(s);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = v(this, Yt) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!v(this, Yt))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...v(this, mr).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
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
    v(this, Yt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    v(this, Yt) && this.setState({ nestedShow: !1 });
  }
}, mr = new WeakMap(), Yt = new WeakMap(), vn = new WeakMap(), L(rc, "ItemComponents", {
  item: Ma
}), rc);
class La extends kt {
}
L(La, "NAME", "actionmenunested"), L(La, "Component", du);
var Nc, ct, pu, _o, Da, mu = {}, gu = [], Og = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Se(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function yu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Hg(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Nc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ls(t, l, o, i, null);
}
function ls(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++pu };
  return i == null && ct.vnode != null && ct.vnode(r), r;
}
function Rc(t) {
  return t.children;
}
function fo(t, e) {
  this.props = t, this.context = e;
}
function Yo(t, e) {
  if (e == null)
    return t.__ ? Yo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Yo(t) : null;
}
function vu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return vu(t);
  }
}
function Na(t) {
  (!t.__d && (t.__d = !0) && _o.push(t) && !Cs.__r++ || Da !== ct.debounceRendering) && ((Da = ct.debounceRendering) || setTimeout)(Cs);
}
function Cs() {
  for (var t; Cs.__r = _o.length; )
    t = _o.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), _o = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Se({}, r)).__v = r.__v + 1, ku(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Yo(r), r.__h), Ig(o, r), r.__e != l && vu(r)));
    });
}
function bu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || gu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ls(null, a, null, null, a) : Array.isArray(a) ? ls(Rc, { children: a }, null, null, null) : a.__b > 0 ? ls(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      ku(t, a, f = f || mu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = wu(a, _, t) : _ = $u(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Yo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Su(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      xu(p[s], p[++s], p[++s]);
}
function wu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? wu(o, e, n) : $u(n, o, o, i, o.__e, e));
  return e;
}
function $u(t, e, n, o, i, r) {
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
function Wg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Es(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Es(t, r, e[r], n[r], o);
}
function Ra(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Og.test(e) ? n : n + "px";
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
            n && e in n || Ra(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ra(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Oa : Pa, r) : t.removeEventListener(e, r ? Oa : Pa, r);
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
function Pa(t) {
  this.l[t.type + !1](ct.event ? ct.event(t) : t);
}
function Oa(t) {
  this.l[t.type + !0](ct.event ? ct.event(t) : t);
}
function ku(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ct.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new fo(p, g), s.constructor = y, s.render = Fg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Se({}, s.__s)), Se(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = Se(Se({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Rc && h.key == null ? h.props.children : h, bu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ug(n.__e, e, n, o, i, r, l, _);
    (h = ct.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ct.__e(x, e, n);
  }
}
function Ig(t, e) {
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
function Ug(t, e, n, o, i, r, l, c) {
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
    if (r = r && Nc.call(t.childNodes), h = (d = n.props || mu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Wg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, bu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Yo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && yu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Es(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Es(t, "checked", u, d.checked, !1));
  }
  return t;
}
function xu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ct.__e(o, n);
  }
}
function Su(t, e, n) {
  var o, i;
  if (ct.unmount && ct.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || xu(o, null, e)), (o = t.__c) != null) {
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
      o[i] && Su(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || yu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Fg(t, e, n) {
  return this.constructor(t, n);
}
Nc = gu.slice, ct = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, pu = 0, fo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Se({}, this.state), typeof t == "function" && (t = t(Se({}, n), this.props)), t && Se(n, t), t != null && this.__v && (e && this._sb.push(e), Na(this));
}, fo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Na(this));
}, fo.prototype.render = Rc, _o = [], Cs.__r = 0;
var Bg = 0;
function Jn(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Bg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ct.vnode && ct.vnode(_), _;
}
let Qt = class extends fo {
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
    return Hg(
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
      s ? /* @__PURE__ */ Jn("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof a == "string" ? /* @__PURE__ */ Jn("i", { class: `icon ${a}` }) : a,
      C ? null : /* @__PURE__ */ Jn("span", { className: "text", children: s ? f : u }),
      s ? null : r,
      s ? null : typeof b == "string" ? /* @__PURE__ */ Jn("i", { class: `icon ${b}` }) : b,
      s ? null : p ? /* @__PURE__ */ Jn("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class Ha extends kt {
}
L(Ha, "NAME", "button"), L(Ha, "Component", Qt);
var fc;
fc = { __e: function(t, e, n, o) {
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
var jg = 0;
function Vg(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --jg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return fc.vnode && fc.vnode(_), _;
}
var sc;
let Pc = (sc = class extends du {
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
    return /* @__PURE__ */ Vg("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, L(sc, "NAME", "menu"), sc);
class Wa extends kt {
}
L(Wa, "NAME", "menu"), L(Wa, "Component", Pc);
let zg = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Cu, at, Eu, uo, Ia, Au = {}, Tu = [], Yg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ce(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Mu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Xl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Eu };
  return i == null && at.vnode != null && at.vnode(r), r;
}
function Oc(t) {
  return t.children;
}
function ho(t, e) {
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
function Lu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Lu(t);
  }
}
function Ua(t) {
  (!t.__d && (t.__d = !0) && uo.push(t) && !As.__r++ || Ia !== at.debounceRendering) && ((Ia = at.debounceRendering) || setTimeout)(As);
}
function As() {
  for (var t; As.__r = uo.length; )
    t = uo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), uo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ce({}, r)).__v = r.__v + 1, Pu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Go(r), r.__h), qg(o, r), r.__e != l && Lu(r)));
    });
}
function Du(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Tu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Xl(null, a, null, null, a) : Array.isArray(a) ? Xl(Oc, { children: a }, null, null, null) : a.__b > 0 ? Xl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Pu(t, a, f = f || Au, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Nu(a, _, t) : _ = Ru(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Go(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Hu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Ou(p[s], p[++s], p[++s]);
}
function Nu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Nu(o, e, n) : Ru(n, o, o, i, o.__e, e));
  return e;
}
function Ru(t, e, n, o, i, r) {
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
function Gg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ts(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ts(t, r, e[r], n[r], o);
}
function Fa(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Yg.test(e) ? n : n + "px";
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
            n && e in n || Fa(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Fa(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? ja : Ba, r) : t.removeEventListener(e, r ? ja : Ba, r);
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
function Ba(t) {
  this.l[t.type + !1](at.event ? at.event(t) : t);
}
function ja(t) {
  this.l[t.type + !0](at.event ? at.event(t) : t);
}
function Pu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = at.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new ho(p, g), s.constructor = y, s.render = Kg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ce({}, s.__s)), Ce(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = Ce(Ce({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Oc && h.key == null ? h.props.children : h, Du(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Xg(n.__e, e, n, o, i, r, l, _);
    (h = at.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), at.__e(x, e, n);
  }
}
function qg(t, e) {
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
function Xg(t, e, n, o, i, r, l, c) {
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
    if (r = r && Cu.call(t.childNodes), h = (d = n.props || Au).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Gg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Du(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Go(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Mu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ts(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ts(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Ou(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    at.__e(o, n);
  }
}
function Hu(t, e, n) {
  var o, i;
  if (at.unmount && at.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Ou(o, null, e)), (o = t.__c) != null) {
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
      o[i] && Hu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Mu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Kg(t, e, n) {
  return this.constructor(t, n);
}
Cu = Tu.slice, at = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Eu = 0, ho.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ce({}, this.state), typeof t == "function" && (t = t(Ce({}, n), this.props)), t && Ce(n, t), t != null && this.__v && (e && this._sb.push(e), Ua(this));
}, ho.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ua(this));
}, ho.prototype.render = Oc, uo = [], As.__r = 0;
var Zg = 0;
function Jg(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Zg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return at.vnode && at.vnode(_), _;
}
var uc, un;
uc = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, un = function(t) {
  return t != null && t.constructor === void 0;
};
var Qg = 0;
function re(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Qg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return uc.vnode && uc.vnode(_), _;
}
var hc;
hc = { __e: function(t, e, n, o) {
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
var ty = 0;
function Cl(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ty, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return hc.vnode && hc.vnode(_), _;
}
function ey({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Cl(Qt, { type: n, ...o });
}
var Wu, _t, Iu, po, Va, Uu = {}, Fu = [], ny = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ee(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Bu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Kl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Iu };
  return i == null && _t.vnode != null && _t.vnode(r), r;
}
function oy() {
  return { current: null };
}
function Hc(t) {
  return t.children;
}
function mo(t, e) {
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
function ju(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ju(t);
  }
}
function za(t) {
  (!t.__d && (t.__d = !0) && po.push(t) && !Ms.__r++ || Va !== _t.debounceRendering) && ((Va = _t.debounceRendering) || setTimeout)(Ms);
}
function Ms() {
  for (var t; Ms.__r = po.length; )
    t = po.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), po = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ee({}, r)).__v = r.__v + 1, Gu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? qo(r), r.__h), sy(o, r), r.__e != l && ju(r)));
    });
}
function Vu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Fu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Kl(null, a, null, null, a) : Array.isArray(a) ? Kl(Hc, { children: a }, null, null, null) : a.__b > 0 ? Kl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Gu(t, a, f = f || Uu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = zu(a, _, t) : _ = Yu(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = qo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Xu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      qu(p[s], p[++s], p[++s]);
}
function zu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? zu(o, e, n) : Yu(n, o, o, i, o.__e, e));
  return e;
}
function Yu(t, e, n, o, i, r) {
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
function ry(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ls(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ls(t, r, e[r], n[r], o);
}
function Ya(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || ny.test(e) ? n : n + "px";
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
            n && e in n || Ya(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ya(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? qa : Ga, r) : t.removeEventListener(e, r ? qa : Ga, r);
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
function Ga(t) {
  this.l[t.type + !1](_t.event ? _t.event(t) : t);
}
function qa(t) {
  this.l[t.type + !0](_t.event ? _t.event(t) : t);
}
function Gu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = _t.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new mo(p, g), s.constructor = y, s.render = ly), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ee({}, s.__s)), Ee(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = Ee(Ee({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Hc && h.key == null ? h.props.children : h, Vu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = iy(n.__e, e, n, o, i, r, l, _);
    (h = _t.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), _t.__e(x, e, n);
  }
}
function sy(t, e) {
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
function iy(t, e, n, o, i, r, l, c) {
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
    if (r = r && Wu.call(t.childNodes), h = (d = n.props || Uu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (ry(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Vu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && qo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Bu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ls(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ls(t, "checked", u, d.checked, !1));
  }
  return t;
}
function qu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    _t.__e(o, n);
  }
}
function Xu(t, e, n) {
  var o, i;
  if (_t.unmount && _t.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || qu(o, null, e)), (o = t.__c) != null) {
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
      o[i] && Xu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Bu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ly(t, e, n) {
  return this.constructor(t, n);
}
Wu = Fu.slice, _t = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Iu = 0, mo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ee({}, this.state), typeof t == "function" && (t = t(Ee({}, n), this.props)), t && Ee(n, t), t != null && this.__v && (e && this._sb.push(e), za(this));
}, mo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), za(this));
}, mo.prototype.render = Hc, po = [], Ms.__r = 0;
var cy = 0;
function Ku(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --cy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return _t.vnode && _t.vnode(_), _;
}
var El, et, Zu, go, Xa, Ds = {}, Ju = [], ay = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ae(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Qu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function th(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? El.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return cs(t, l, o, i, null);
}
function cs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Zu };
  return i == null && et.vnode != null && et.vnode(r), r;
}
function Al(t) {
  return t.children;
}
function as(t, e) {
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
function eh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return eh(t);
  }
}
function Ka(t) {
  (!t.__d && (t.__d = !0) && go.push(t) && !Ns.__r++ || Xa !== et.debounceRendering) && ((Xa = et.debounceRendering) || setTimeout)(Ns);
}
function Ns() {
  for (var t; Ns.__r = go.length; )
    t = go.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), go = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ae({}, r)).__v = r.__v + 1, Wc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Xo(r), r.__h), sh(o, r), r.__e != l && eh(r)));
    });
}
function nh(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Ju, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? cs(null, a, null, null, a) : Array.isArray(a) ? cs(Al, { children: a }, null, null, null) : a.__b > 0 ? cs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Wc(t, a, f = f || Ds, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = oh(a, _, t) : _ = rh(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Xo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && lh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      ih(p[s], p[++s], p[++s]);
}
function oh(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? oh(o, e, n) : rh(n, o, o, i, o.__e, e));
  return e;
}
function rh(t, e, n, o, i, r) {
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
    r === "children" || r === "key" || r in e || Rs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Rs(t, r, e[r], n[r], o);
}
function Za(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || ay.test(e) ? n : n + "px";
}
function Rs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Za(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Za(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Qa : Ja, r) : t.removeEventListener(e, r ? Qa : Ja, r);
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
function Ja(t) {
  this.l[t.type + !1](et.event ? et.event(t) : t);
}
function Qa(t) {
  this.l[t.type + !0](et.event ? et.event(t) : t);
}
function Wc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = et.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new as(p, g), s.constructor = y, s.render = uy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ae({}, s.__s)), Ae(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = Ae(Ae({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Al && h.key == null ? h.props.children : h, nh(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = fy(n.__e, e, n, o, i, r, l, _);
    (h = et.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), et.__e(x, e, n);
  }
}
function sh(t, e) {
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
function fy(t, e, n, o, i, r, l, c) {
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
    if (r = r && El.call(t.childNodes), h = (d = n.props || Ds).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (_y(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, nh(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Xo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Qu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Rs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Rs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function ih(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    et.__e(o, n);
  }
}
function lh(t, e, n) {
  var o, i;
  if (et.unmount && et.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || ih(o, null, e)), (o = t.__c) != null) {
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
      o[i] && lh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Qu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function uy(t, e, n) {
  return this.constructor(t, n);
}
function hy(t, e, n) {
  var o, i, r;
  et.__ && et.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Wc(e, t = (!o && n || e).__k = th(Al, null, [t]), i || Ds, Ds, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? El.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), sh(r, t);
}
El = Ju.slice, et = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Zu = 0, as.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ae({}, this.state), typeof t == "function" && (t = t(Ae({}, n), this.props)), t && Ae(n, t), t != null && this.__v && (e && this._sb.push(e), Ka(this));
}, as.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ka(this));
}, as.prototype.render = Al, go = [], Ns.__r = 0;
function dy(t) {
  return t.button === 2;
}
var py = 0;
function my(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --py, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return et.vnode && et.vnode(_), _;
}
function Ic(t) {
  return t.split("-")[1];
}
function ch(t) {
  return t === "y" ? "height" : "width";
}
function Ko(t) {
  return t.split("-")[0];
}
function ah(t) {
  return ["top", "bottom"].includes(Ko(t)) ? "x" : "y";
}
function t_(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = ah(e), _ = ch(c), h = o[_] / 2 - i[_] / 2, s = Ko(e), d = c === "x";
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
  switch (Ic(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const gy = async (t, e, n) => {
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
  } = t_(h, o, _), f = o, a = {}, u = 0;
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
      } = t_(h, f, _)), b = -1;
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
function yy(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function vy(t) {
  return typeof t != "number" ? yy(t) : {
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
async function by(t, e) {
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
  } = e, u = vy(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Ps(await r.getClippingRect({
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
  }, C = Ps(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const wy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Os(t) {
  return t.replace(/left|right|bottom|top/g, (e) => wy[e]);
}
function $y(t, e, n) {
  n === void 0 && (n = !1);
  const o = Ic(t), i = ah(t), r = ch(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Os(l)), {
    main: l,
    cross: Os(l)
  };
}
const ky = {
  start: "end",
  end: "start"
};
function dc(t) {
  return t.replace(/start|end/g, (e) => ky[e]);
}
function xy(t) {
  const e = Os(t);
  return [dc(t), e, dc(e)];
}
function Sy(t, e, n) {
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
function Cy(t, e, n, o) {
  const i = Ic(t);
  let r = Sy(Ko(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(dc)))), r;
}
const _h = function(t) {
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
      } = t, p = Ko(o), m = Ko(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [Os(l)] : xy(l));
      !d && a !== "none" && w.push(...Cy(l, u, a, g));
      const k = [l, ...w], C = await by(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: D,
          cross: z
        } = $y(o, r, g);
        A.push(C[D], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((D) => D <= 0)) {
        var y;
        const D = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[D];
        if (z)
          return {
            data: {
              index: D,
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
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
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
function Ht(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function te(t) {
  return Ht(t).getComputedStyle(t);
}
function Fe(t) {
  return uh(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Xr;
function fh() {
  if (Xr)
    return Xr;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Xr = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Xr) : navigator.userAgent;
}
function ue(t) {
  return t instanceof Ht(t).HTMLElement;
}
function Be(t) {
  return t instanceof Ht(t).Element;
}
function uh(t) {
  return t instanceof Ht(t).Node;
}
function e_(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Ht(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Tl(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = te(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Ey(t) {
  return ["table", "td", "th"].includes(Fe(t));
}
function Uc(t) {
  const e = /firefox/i.test(fh()), n = te(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function hh() {
  return !/^((?!chrome|android).)*safari/i.test(fh());
}
function Fc(t) {
  return ["html", "body", "#document"].includes(Fe(t));
}
const n_ = Math.min, yo = Math.max, Hs = Math.round;
function dh(t) {
  const e = te(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = Hs(n) !== i || Hs(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function ph(t) {
  return Be(t) ? t : t.contextElement;
}
const mh = {
  x: 1,
  y: 1
};
function hn(t) {
  const e = ph(t);
  if (!ue(e))
    return mh;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = dh(e);
  let l = (r ? Hs(n.width) : n.width) / o, c = (r ? Hs(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function Zo(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = ph(t);
  let _ = mh;
  e && (o ? Be(o) && (_ = hn(o)) : _ = hn(t));
  const h = c ? Ht(c) : window, s = !hh() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Ht(c), p = o && Be(o) ? Ht(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = hn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Ht(m).frameElement;
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
  return ((uh(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ml(t) {
  return Be(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function gh(t) {
  return Zo(Ge(t)).left + Ml(t).scrollLeft;
}
function Ay(t, e, n) {
  const o = ue(e), i = Ge(e), r = Zo(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Fe(e) !== "body" || Tl(i)) && (l = Ml(e)), ue(e)) {
      const _ = Zo(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = gh(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function Jo(t) {
  if (Fe(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (e_(t) ? t.host : null) || // Fallback
    Ge(t)
  );
  return e_(e) ? e.host : e;
}
function o_(t) {
  return !ue(t) || te(t).position === "fixed" ? null : t.offsetParent;
}
function Ty(t) {
  let e = Jo(t);
  for (; ue(e) && !Fc(e); ) {
    if (Uc(e))
      return e;
    e = Jo(e);
  }
  return null;
}
function r_(t) {
  const e = Ht(t);
  let n = o_(t);
  for (; n && Ey(n) && te(n).position === "static"; )
    n = o_(n);
  return n && (Fe(n) === "html" || Fe(n) === "body" && te(n).position === "static" && !Uc(n)) ? e : n || Ty(t) || e;
}
function My(t) {
  return dh(t);
}
function Ly(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = ue(n), r = Ge(n);
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
  if ((i || !i && o !== "fixed") && ((Fe(n) !== "body" || Tl(r)) && (l = Ml(n)), ue(n))) {
    const h = Zo(n);
    c = hn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function Dy(t, e) {
  const n = Ht(t), o = Ge(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = hh();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Ny(t) {
  var e;
  const n = Ge(t), o = Ml(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = yo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = yo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + gh(t);
  const _ = -o.scrollTop;
  return te(i || n).direction === "rtl" && (c += yo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function yh(t) {
  const e = Jo(t);
  return Fc(e) ? t.ownerDocument.body : ue(e) && Tl(e) ? e : yh(e);
}
function vh(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = yh(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ht(o);
  return i ? e.concat(r, r.visualViewport || [], Tl(o) ? o : []) : e.concat(o, vh(o));
}
function Ry(t, e) {
  const n = Zo(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = ue(t) ? hn(t) : {
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
function s_(t, e, n) {
  return e === "viewport" ? Ps(Dy(t, n)) : Be(e) ? Ry(e, n) : Ps(Ny(Ge(t)));
}
function Py(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = vh(t).filter((c) => Be(c) && Fe(c) !== "body"), i = null;
  const r = te(t).position === "fixed";
  let l = r ? Jo(t) : t;
  for (; Be(l) && !Fc(l); ) {
    const c = te(l), _ = Uc(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = Jo(l);
  }
  return e.set(t, o), o;
}
function Oy(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? Py(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = s_(e, s, i);
    return h.top = yo(d.top, h.top), h.right = n_(d.right, h.right), h.bottom = n_(d.bottom, h.bottom), h.left = yo(d.left, h.left), h;
  }, s_(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Hy = {
  getClippingRect: Oy,
  convertOffsetParentRelativeRectToViewportRelativeRect: Ly,
  isElement: Be,
  getDimensions: My,
  getOffsetParent: r_,
  getDocumentElement: Ge,
  getScale: hn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || r_, r = this.getDimensions;
    return {
      reference: Ay(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => te(t).direction === "rtl"
}, bh = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Hy,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return gy(t, e, {
    ...i,
    platform: r
  });
};
let Wy = class extends Pc {
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
      middleware: [_h()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  _createPopper() {
    const e = this._getPopperOptions();
    this.ref.current && bh(this._getPopperElement(), this.ref.current, e).then(({ x: n, y: o }) => {
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
    return /* @__PURE__ */ my("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var ge, bn, gr;
class Mt extends zt {
  constructor() {
    super(...arguments);
    M(this, ge, void 0);
    M(this, bn, void 0);
    M(this, gr, void 0);
    L(this, "arrowEl");
  }
  get isShown() {
    var n;
    return (n = v(this, ge)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return v(this, ge) || this._ensureMenu();
  }
  get trigger() {
    return v(this, gr) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, gr, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var o;
    return this.emit("hide", this).defaultPrevented ? !1 : ((o = v(this, ge)) == null || o.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    super.destroy(), (n = v(this, ge)) == null || n.remove();
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
    return i.style.width = "max-content", i.style.position = "absolute", i.style.top = "0", i.style.left = "0", H(this, ge, i), i;
  }
  _getPopperOptions() {
    var o;
    const n = {
      middleware: []
    };
    return this.options.flip && ((o = n.middleware) == null || o.push(_h())), this.options.placement && (n.placement = this.options.placement), n;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    bh(this._getPopperElement(), this.menu, n).then(({ x: o, y: i, middlewareData: r }) => {
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
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (hy(th(Wy, n), this.menu), !0);
  }
  _getPopperElement() {
    return v(this, bn) || H(this, bn, {
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
    }), v(this, bn);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)) || o && dy(o))
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
ge = new WeakMap(), bn = new WeakMap(), gr = new WeakMap(), L(Mt, "NAME", "contextmenu"), L(Mt, "EVENTS", !0), L(Mt, "DEFAULT", {
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
function wh(t) {
  return t.split("-")[1];
}
function Iy(t) {
  return t === "y" ? "height" : "width";
}
function $h(t) {
  return t.split("-")[0];
}
function kh(t) {
  return ["top", "bottom"].includes($h(t)) ? "x" : "y";
}
function Uy(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Fy(t) {
  return typeof t != "number" ? Uy(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
const By = Math.min, jy = Math.max;
function Vy(t, e, n) {
  return jy(t, By(e, n));
}
const zy = (t) => ({
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
    const h = Fy(o), s = {
      x: i,
      y: r
    }, d = kh(l), f = Iy(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = Vy(C, E, A), D = wh(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - D,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
});
async function Yy(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = $h(n), c = wh(n), _ = kh(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const Gy = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await Yy(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
var wn, $n, kn, $i, xh;
const _a = class extends Mt {
  constructor() {
    super(...arguments);
    M(this, $i);
    M(this, wn, !1);
    M(this, $n, 0);
    L(this, "hideLater", () => {
      v(this, kn).call(this), H(this, $n, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, kn, () => {
      clearTimeout(v(this, $n)), H(this, $n, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && _a.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!v(this, wn) && this.isHover && W(this, $i, xh).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    v(this, wn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", v(this, kn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 5 : 0;
  }
  _getPopperOptions() {
    var i, r;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && ((i = n.middleware) == null || i.push(Gy(o + (this.options.offset ?? 0))), (r = n.middleware) == null || r.push(zy({ element: this.arrowEl }))), n;
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
let Ct = _a;
wn = new WeakMap(), $n = new WeakMap(), kn = new WeakMap(), $i = new WeakSet(), xh = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", v(this, kn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, wn, !0);
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
const qy = (t) => {
  const e = document.getElementsByClassName("with-dropdown-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Ct.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Ct.clear({ event: t });
};
window.addEventListener("scroll", qy, !0);
var yr, xn;
class Xy extends mo {
  constructor(n) {
    var o;
    super(n);
    M(this, yr, void 0);
    M(this, xn, oy());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return v(this, xn);
  }
  get triggerElement() {
    return v(this, xn).current;
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
    }), H(this, yr, Ct.ensure(this.triggerElement, {
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
    (n = v(this, yr)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: i, ...r } = this.props;
    return {
      className: F("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: v(this, xn)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ Ku("div", { ...o, children: n });
  }
}
yr = new WeakMap(), xn = new WeakMap();
class Ky extends Xy {
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
    return o.caret = i, /* @__PURE__ */ Ku(Qt, { ...o });
  }
}
function Sh({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Cl(Ky, { type: n, ...o });
}
var Bc, ft, Ch, Eh, vo, i_, Ah = {}, Th = [], Zy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Te(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Mh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Jy(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Bc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return _s(t, l, o, i, null);
}
function _s(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ch };
  return i == null && ft.vnode != null && ft.vnode(r), r;
}
function jc(t) {
  return t.children;
}
function bo(t, e) {
  this.props = t, this.context = e;
}
function Qo(t, e) {
  if (e == null)
    return t.__ ? Qo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Qo(t) : null;
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
function l_(t) {
  (!t.__d && (t.__d = !0) && vo.push(t) && !Ws.__r++ || i_ !== ft.debounceRendering) && ((i_ = ft.debounceRendering) || setTimeout)(Ws);
}
function Ws() {
  for (var t; Ws.__r = vo.length; )
    t = vo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), vo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Te({}, r)).__v = r.__v + 1, Ph(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Qo(r), r.__h), tv(o, r), r.__e != l && Lh(r)));
    });
}
function Dh(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Th, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? _s(null, a, null, null, a) : Array.isArray(a) ? _s(jc, { children: a }, null, null, null) : a.__b > 0 ? _s(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Ph(t, a, f = f || Ah, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Nh(a, _, t) : _ = Rh(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Qo(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Hh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Oh(p[s], p[++s], p[++s]);
}
function Nh(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Nh(o, e, n) : Rh(n, o, o, i, o.__e, e));
  return e;
}
function Rh(t, e, n, o, i, r) {
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
function Qy(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Is(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Is(t, r, e[r], n[r], o);
}
function c_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Zy.test(e) ? n : n + "px";
}
function Is(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || c_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || c_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? __ : a_, r) : t.removeEventListener(e, r ? __ : a_, r);
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
function a_(t) {
  this.l[t.type + !1](ft.event ? ft.event(t) : t);
}
function __(t) {
  this.l[t.type + !0](ft.event ? ft.event(t) : t);
}
function Ph(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ft.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new bo(p, g), s.constructor = y, s.render = nv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Te({}, s.__s)), Te(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = Te(Te({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === jc && h.key == null ? h.props.children : h, Dh(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = ev(n.__e, e, n, o, i, r, l, _);
    (h = ft.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ft.__e(x, e, n);
  }
}
function tv(t, e) {
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
function ev(t, e, n, o, i, r, l, c) {
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
    if (r = r && Bc.call(t.childNodes), h = (d = n.props || Ah).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Qy(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Dh(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Qo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Mh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Is(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Is(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Oh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ft.__e(o, n);
  }
}
function Hh(t, e, n) {
  var o, i;
  if (ft.unmount && ft.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Oh(o, null, e)), (o = t.__c) != null) {
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
      o[i] && Hh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Mh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function nv(t, e, n) {
  return this.constructor(t, n);
}
Bc = Th.slice, ft = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Ch = 0, Eh = function(t) {
  return t != null && t.constructor === void 0;
}, bo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Te({}, this.state), typeof t == "function" && (t = t(Te({}, n), this.props)), t && Te(n, t), t != null && this.__v && (e && this._sb.push(e), l_(this));
}, bo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), l_(this));
}, bo.prototype.render = jc, vo = [], Ws.__r = 0;
var ov = 0;
function f_(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ov, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ft.vnode && ft.vnode(_), _;
}
let Wh = class extends bo {
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
    return /* @__PURE__ */ f_(Qt, { ...i }, o);
  }
  renderItem(e, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = e, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), i) {
      const _ = i.call(this, c, Jy);
      if (Eh(_))
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
    return /* @__PURE__ */ f_(
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
function rv({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Cl(Wh, { type: n, ...o });
}
var fn;
let Yn = (fn = class extends zn {
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
    return /* @__PURE__ */ Cl(e, { ...r });
  }
}, L(fn, "ItemComponents", {
  item: ey,
  dropdown: Sh,
  "btn-group": rv
}), L(fn, "ROOT_TAG", "nav"), L(fn, "NAME", "toolbar"), L(fn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), fn);
function sv({
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
  c === !0 ? d = /* @__PURE__ */ re(Qt, { className: "alert-close btn ghost", square: !0, onClick: _, children: /* @__PURE__ */ re("span", { class: "close" }) }) : un(c) ? d = c : typeof c == "object" && (d = /* @__PURE__ */ re(Qt, { ...c, onClick: _ }));
  const f = un(n) ? n : n ? /* @__PURE__ */ re(Yn, { ...n }) : null;
  return /* @__PURE__ */ re("div", { className: F("alert", t), style: e, ...s, children: [
    un(h) ? h : typeof h == "string" ? /* @__PURE__ */ re("i", { className: `icon ${h}` }) : null,
    un(i) ? i : /* @__PURE__ */ re("div", { className: F("alert-content", r), children: [
      un(o) ? o : o && /* @__PURE__ */ re("div", { className: "alert-heading", children: o }),
      /* @__PURE__ */ re("div", { className: "alert-text", children: i }),
      o ? f : null
    ] }),
    o ? null : f,
    d,
    l
  ] });
}
function iv(t) {
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
let lv = class extends ho {
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
    return /* @__PURE__ */ Jg(
      sv,
      {
        className: F("messager", _, i, l === !0 ? iv(r) : l, c ? "in" : ""),
        ...s
      }
    );
  }
};
var Sn, us;
class fs extends kt {
  constructor() {
    super(...arguments);
    M(this, Sn);
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
    this._show || (this.emit("show"), this.render(), this._show = !0, W(this, Sn, us).call(this, () => {
      this.emit("shown");
      const { time: n } = this.options;
      n && W(this, Sn, us).call(this, () => this.hide(), n);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), W(this, Sn, us).call(this, () => {
      this.emit("hidden");
    }));
  }
}
Sn = new WeakSet(), us = function(n, o = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, o);
}, L(fs, "NAME", "MessagerItem"), L(fs, "EVENTS", !0), L(fs, "Component", lv);
var tn, Cn, _e, ki, Ih, xi, Uh;
const fa = class extends zt {
  constructor() {
    super(...arguments);
    M(this, ki);
    M(this, xi);
    M(this, tn, void 0);
    M(this, Cn, zg(6));
    M(this, _e, void 0);
  }
  get id() {
    return v(this, Cn);
  }
  get isShown() {
    var n;
    return !!((n = v(this, _e)) != null && n.isShown);
  }
  show(n) {
    this.setOptions(n), W(this, ki, Ih).call(this).show();
  }
  hide() {
    var n;
    (n = v(this, _e)) == null || n.hide();
  }
  static show(n) {
    typeof n == "string" && (n = { content: n });
    const { container: o, ...i } = n, r = new fa(o || "body", i);
    return r.show(), r;
  }
};
let Kr = fa;
tn = new WeakMap(), Cn = new WeakMap(), _e = new WeakMap(), ki = new WeakSet(), Ih = function() {
  if (v(this, _e))
    v(this, _e).setOptions(this.options);
  else {
    const n = W(this, xi, Uh).call(this), o = new fs(n, this.options);
    o.on("hidden", () => {
      o.destroy(), n.remove(), H(this, tn, void 0);
    }), H(this, _e, o);
  }
  return v(this, _e);
}, xi = new WeakSet(), Uh = function() {
  if (v(this, tn))
    return v(this, tn);
  const { placement: n = "top" } = this.options;
  let o = this.element.querySelector(`.messagers-${n}`);
  o || (o = document.createElement("div"), o.className = `messagers messagers-${n}`, this.element.appendChild(o));
  let i = o.querySelector(`#messager-${v(this, Cn)}`);
  return i || (i = document.createElement("div"), i.className = "messager-holder", i.id = `messager-${v(this, Cn)}`, o.appendChild(i), H(this, tn, i)), i;
}, L(Kr, "NAME", "messager"), L(Kr, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
var Fh, ut, Bh, wo, u_, jh = {}, Vh = [], cv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Me(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function zh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Zl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Bh };
  return i == null && ut.vnode != null && ut.vnode(r), r;
}
function Vc(t) {
  return t.children;
}
function $o(t, e) {
  this.props = t, this.context = e;
}
function tr(t, e) {
  if (e == null)
    return t.__ ? tr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? tr(t) : null;
}
function Yh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Yh(t);
  }
}
function h_(t) {
  (!t.__d && (t.__d = !0) && wo.push(t) && !Us.__r++ || u_ !== ut.debounceRendering) && ((u_ = ut.debounceRendering) || setTimeout)(Us);
}
function Us() {
  for (var t; Us.__r = wo.length; )
    t = wo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), wo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Me({}, r)).__v = r.__v + 1, Kh(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? tr(r), r.__h), _v(o, r), r.__e != l && Yh(r)));
    });
}
function Gh(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Vh, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Zl(null, a, null, null, a) : Array.isArray(a) ? Zl(Vc, { children: a }, null, null, null) : a.__b > 0 ? Zl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Kh(t, a, f = f || jh, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = qh(a, _, t) : _ = Xh(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = tr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Jh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Zh(p[s], p[++s], p[++s]);
}
function qh(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? qh(o, e, n) : Xh(n, o, o, i, o.__e, e));
  return e;
}
function Xh(t, e, n, o, i, r) {
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
function av(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Fs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Fs(t, r, e[r], n[r], o);
}
function d_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || cv.test(e) ? n : n + "px";
}
function Fs(t, e, n, o, i) {
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
  this.l[t.type + !1](ut.event ? ut.event(t) : t);
}
function m_(t) {
  this.l[t.type + !0](ut.event ? ut.event(t) : t);
}
function Kh(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ut.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new $o(p, g), s.constructor = y, s.render = uv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Me({}, s.__s)), Me(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = Me(Me({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Vc && h.key == null ? h.props.children : h, Gh(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = fv(n.__e, e, n, o, i, r, l, _);
    (h = ut.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ut.__e(x, e, n);
  }
}
function _v(t, e) {
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
function fv(t, e, n, o, i, r, l, c) {
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
    if (r = r && Fh.call(t.childNodes), h = (d = n.props || jh).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (av(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Gh(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && tr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && zh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Fs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Fs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Zh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ut.__e(o, n);
  }
}
function Jh(t, e, n) {
  var o, i;
  if (ut.unmount && ut.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Zh(o, null, e)), (o = t.__c) != null) {
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
      o[i] && Jh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || zh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function uv(t, e, n) {
  return this.constructor(t, n);
}
Fh = Vh.slice, ut = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Bh = 0, $o.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Me({}, this.state), typeof t == "function" && (t = t(Me({}, n), this.props)), t && Me(n, t), t != null && this.__v && (e && this._sb.push(e), h_(this));
}, $o.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), h_(this));
}, $o.prototype.render = Vc, wo = [], Us.__r = 0;
var hv = 0;
function Zr(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --hv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ut.vnode && ut.vnode(_), _;
}
var ns;
let dv = (ns = class extends $o {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: o, circleBgColor: i, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ Zr("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ Zr("circle", { cx: c, cy: c, r: l, stroke: i, "stroke-width": o }),
      /* @__PURE__ */ Zr("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - e) / 100, "stroke-width": o }),
      /* @__PURE__ */ Zr("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(e) })
    ] });
  }
}, L(ns, "NAME", "zui.progress-circle"), L(ns, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), ns);
class g_ extends kt {
}
L(g_, "NAME", "table-sorter"), L(g_, "Component", dv);
function pv(t) {
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
function mv(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
function gv(t, e) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const g$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: F,
  domReady: mv,
  getClassList: Sl,
  isElementVisible: gv,
  selectText: pv
}, Symbol.toStringTag, { value: "Module" }));
let yv = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var vr, ye, Gt, En, An, hs;
const ua = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    M(this, An);
    M(this, vr, void 0);
    M(this, ye, void 0);
    M(this, Gt, void 0);
    M(this, En, void 0);
    H(this, vr, n), H(this, ye, `ZUI_STORE:${e ?? yv()}`), H(this, Gt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return v(this, vr);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (v(this, En) || H(this, En, new ua(v(this, ye), "session")), v(this, En));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const o = v(this, Gt).getItem(W(this, An, hs).call(this, e));
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
    v(this, Gt).setItem(W(this, An, hs).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    v(this, Gt).removeItem(W(this, An, hs).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < v(this, Gt).length; n++) {
      const o = v(this, Gt).key(n);
      if (o != null && o.startsWith(v(this, ye))) {
        const i = v(this, Gt).getItem(o);
        typeof i == "string" && e(o.substring(v(this, ye).length + 1), JSON.parse(i));
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
let Bs = ua;
vr = new WeakMap(), ye = new WeakMap(), Gt = new WeakMap(), En = new WeakMap(), An = new WeakSet(), hs = function(e) {
  return `${v(this, ye)}:${e}`;
};
const vv = new Bs("DEFAULT");
function bv(t, e = "local") {
  return new Bs(t, e);
}
Object.assign(vv, { create: bv });
var Qh, ht, td, ko, y_, ed = {}, nd = [], wv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Le(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function od(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Jl(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++td };
  return i == null && ht.vnode != null && ht.vnode(r), r;
}
function zc(t) {
  return t.children;
}
function xo(t, e) {
  this.props = t, this.context = e;
}
function er(t, e) {
  if (e == null)
    return t.__ ? er(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? er(t) : null;
}
function rd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return rd(t);
  }
}
function v_(t) {
  (!t.__d && (t.__d = !0) && ko.push(t) && !js.__r++ || y_ !== ht.debounceRendering) && ((y_ = ht.debounceRendering) || setTimeout)(js);
}
function js() {
  for (var t; js.__r = ko.length; )
    t = ko.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ko = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Le({}, r)).__v = r.__v + 1, cd(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? er(r), r.__h), kv(o, r), r.__e != l && rd(r)));
    });
}
function sd(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || nd, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Jl(null, a, null, null, a) : Array.isArray(a) ? Jl(zc, { children: a }, null, null, null) : a.__b > 0 ? Jl(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      cd(t, a, f = f || ed, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = id(a, _, t) : _ = ld(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = er(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && _d(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      ad(p[s], p[++s], p[++s]);
}
function id(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? id(o, e, n) : ld(n, o, o, i, o.__e, e));
  return e;
}
function ld(t, e, n, o, i, r) {
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
function $v(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Vs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Vs(t, r, e[r], n[r], o);
}
function b_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || wv.test(e) ? n : n + "px";
}
function Vs(t, e, n, o, i) {
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
  this.l[t.type + !1](ht.event ? ht.event(t) : t);
}
function $_(t) {
  this.l[t.type + !0](ht.event ? ht.event(t) : t);
}
function cd(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ht.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new xo(p, g), s.constructor = y, s.render = Sv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Le({}, s.__s)), Le(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = Le(Le({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === zc && h.key == null ? h.props.children : h, sd(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = xv(n.__e, e, n, o, i, r, l, _);
    (h = ht.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ht.__e(x, e, n);
  }
}
function kv(t, e) {
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
function xv(t, e, n, o, i, r, l, c) {
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
    if (r = r && Qh.call(t.childNodes), h = (d = n.props || ed).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if ($v(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, sd(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && er(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && od(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Vs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Vs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function ad(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ht.__e(o, n);
  }
}
function _d(t, e, n) {
  var o, i;
  if (ht.unmount && ht.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || ad(o, null, e)), (o = t.__c) != null) {
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
      o[i] && _d(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || od(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Sv(t, e, n) {
  return this.constructor(t, n);
}
Qh = nd.slice, ht = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, td = 0, xo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Le({}, this.state), typeof t == "function" && (t = t(Le({}, n), this.props)), t && Le(n, t), t != null && this.__v && (e && this._sb.push(e), v_(this));
}, xo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), v_(this));
}, xo.prototype.render = zc, ko = [], js.__r = 0;
var Cv = 0;
function Ql(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Cv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ht.vnode && ht.vnode(_), _;
}
function Ev(t) {
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
function Av(t) {
  const [e, n, o] = typeof t == "string" ? Ev(t) : t;
  return e * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function k_(t, e) {
  return Av(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function x_(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function Tv(t, e, n) {
  t = t % 360 / 360, e = x_(e), n = x_(n);
  const o = n <= 0.5 ? n * (e + 1) : n + e - n * e, i = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? i + (o - i) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? i + (o - i) * (2 / 3 - l) * 6 : i);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function Mv(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function Lv(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t = t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t = t[0].toUpperCase() : t = t.length <= e ? t : t.substring(0, e), t;
}
let Dv = class extends xo {
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
      m.push("has-img"), k = /* @__PURE__ */ Ql("img", { className: "avatar-img", src: d, alt: _ });
    else if (_ != null && _.length) {
      const C = Lv(_, s);
      if (m.push("has-text", `has-text-${C.length}`), l)
        !c && l && (g.color = k_(l));
      else {
        const E = h ?? _, y = (typeof E == "number" ? E : Mv(E)) * f % 360;
        if (g.background = `hsl(${y},${a * 100}%,${u * 100}%)`, !c) {
          const x = Tv(y, a, u);
          g.color = k_(x);
        }
      }
      let A;
      w && w < 14 * C.length && (A = { transform: `scale(${w / (14 * C.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ Ql("div", { "data-actualSize": w, className: "avatar-text", style: A, children: C });
    }
    return /* @__PURE__ */ Ql(
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
class S_ extends kt {
}
L(S_, "NAME", "avatar"), L(S_, "Component", Dv);
class C_ extends kt {
}
L(C_, "NAME", "btngroup"), L(C_, "Component", Wh);
var Ll, nt, fd, So, E_, zs = {}, ud = [], Nv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function De(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function hd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function nr(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ll.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ds(t, l, o, i, null);
}
function ds(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++fd };
  return i == null && nt.vnode != null && nt.vnode(r), r;
}
function Rv() {
  return { current: null };
}
function Dl(t) {
  return t.children;
}
function Co(t, e) {
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
function dd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return dd(t);
  }
}
function A_(t) {
  (!t.__d && (t.__d = !0) && So.push(t) && !Ys.__r++ || E_ !== nt.debounceRendering) && ((E_ = nt.debounceRendering) || setTimeout)(Ys);
}
function Ys() {
  for (var t; Ys.__r = So.length; )
    t = So.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), So = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = De({}, r)).__v = r.__v + 1, Yc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? or(r), r.__h), yd(o, r), r.__e != l && dd(r)));
    });
}
function pd(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || ud, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ds(null, a, null, null, a) : Array.isArray(a) ? ds(Dl, { children: a }, null, null, null) : a.__b > 0 ? ds(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Yc(t, a, f = f || zs, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = md(a, _, t) : _ = gd(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = or(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && bd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      vd(p[s], p[++s], p[++s]);
}
function md(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? md(o, e, n) : gd(n, o, o, i, o.__e, e));
  return e;
}
function gd(t, e, n, o, i, r) {
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
function Pv(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Gs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Gs(t, r, e[r], n[r], o);
}
function T_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Nv.test(e) ? n : n + "px";
}
function Gs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || T_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || T_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? L_ : M_, r) : t.removeEventListener(e, r ? L_ : M_, r);
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
function M_(t) {
  this.l[t.type + !1](nt.event ? nt.event(t) : t);
}
function L_(t) {
  this.l[t.type + !0](nt.event ? nt.event(t) : t);
}
function Yc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = nt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Co(p, g), s.constructor = y, s.render = Hv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = De({}, s.__s)), De(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = De(De({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Dl && h.key == null ? h.props.children : h, pd(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ov(n.__e, e, n, o, i, r, l, _);
    (h = nt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), nt.__e(x, e, n);
  }
}
function yd(t, e) {
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
function Ov(t, e, n, o, i, r, l, c) {
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
    if (r = r && Ll.call(t.childNodes), h = (d = n.props || zs).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Pv(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, pd(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && or(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && hd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Gs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Gs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function vd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    nt.__e(o, n);
  }
}
function bd(t, e, n) {
  var o, i;
  if (nt.unmount && nt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || vd(o, null, e)), (o = t.__c) != null) {
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
      o[i] && bd(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || hd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Hv(t, e, n) {
  return this.constructor(t, n);
}
function Wv(t, e, n) {
  var o, i, r;
  nt.__ && nt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Yc(e, t = (!o && n || e).__k = nr(Dl, null, [t]), i || zs, zs, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Ll.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), yd(r, t);
}
Ll = ud.slice, nt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, fd = 0, Co.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = De({}, this.state), typeof t == "function" && (t = t(De({}, n), this.props)), t && De(n, t), t != null && this.__v && (e && this._sb.push(e), A_(this));
}, Co.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), A_(this));
}, Co.prototype.render = Dl, So = [], Ys.__r = 0;
var Iv = 0;
function q(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Iv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return nt.vnode && nt.vnode(_), _;
}
var wd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Z = {}, Uv = {
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
  })(wd, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var S = ["th", "st", "nd", "rd"], $ = N % 100;
      return "[" + N + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(N, S, $) {
      var R = String(N);
      return !R || R.length >= S ? N : "" + Array(S + 1 - R.length).join($) + N;
    }, k = { s: w, z: function(N) {
      var S = -N.utcOffset(), $ = Math.abs(S), R = Math.floor($ / 60), T = $ % 60;
      return (S <= 0 ? "+" : "-") + w(R, 2, "0") + ":" + w(T, 2, "0");
    }, m: function N(S, $) {
      if (S.date() < $.date())
        return -N($, S);
      var R = 12 * ($.year() - S.year()) + ($.month() - S.month()), T = S.clone().add(R, d), O = $ - T < 0, P = S.clone().add(R + (O ? -1 : 1), d);
      return +(-(R + ($ - T) / (O ? T - P : P - T)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, C = "en", A = {};
    A[C] = g;
    var E = function(N) {
      return N instanceof z;
    }, y = function N(S, $, R) {
      var T;
      if (!S)
        return C;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        A[O] && (T = O), $ && (A[O] = $, T = O);
        var P = S.split("-");
        if (!T && P.length > 1)
          return N(P[0]);
      } else {
        var I = S.name;
        A[I] = S, T = I;
      }
      return !R && T && (C = T), T || !R && C;
    }, x = function(N, S) {
      if (E(N))
        return N.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = N, $.args = arguments, new z($);
    }, D = k;
    D.l = y, D.i = E, D.w = function(N, S) {
      return x(N, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var z = function() {
      function N($) {
        this.$L = y($.locale, null, !0), this.parse($);
      }
      var S = N.prototype;
      return S.parse = function($) {
        this.$d = function(R) {
          var T = R.date, O = R.utc;
          if (T === null)
            return new Date(NaN);
          if (D.u(T))
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
        return D;
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
        return D.u($) ? this[R] : this.set(T, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, R) {
        var T = this, O = !!D.u(R) || R, P = D.p($), I = function(st, G) {
          var it = D.w(T.$u ? Date.UTC(T.$y, G, st) : new Date(T.$y, G, st), T);
          return O ? it : it.endOf(h);
        }, V = function(st, G) {
          return D.w(T.toDate()[st].apply(T.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), T);
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
        var T, O = D.p($), P = "set" + (this.$u ? "UTC" : ""), I = (T = {}, T[h] = P + "Date", T[u] = P + "Date", T[d] = P + "Month", T[a] = P + "FullYear", T[_] = P + "Hours", T[c] = P + "Minutes", T[l] = P + "Seconds", T[r] = P + "Milliseconds", T)[O], V = O === h ? this.$D + (R - this.$W) : R;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[I](V), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](V);
        return this.init(), this;
      }, S.set = function($, R) {
        return this.clone().$set($, R);
      }, S.get = function($) {
        return this[D.p($)]();
      }, S.add = function($, R) {
        var T, O = this;
        $ = Number($);
        var P = D.p(R), I = function(X) {
          var vt = x(O);
          return D.w(vt.date(vt.date() + Math.round(X * $)), O);
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
        return D.w(j, this);
      }, S.subtract = function($, R) {
        return this.add(-1 * $, R);
      }, S.format = function($) {
        var R = this, T = this.$locale();
        if (!this.isValid())
          return T.invalidDate || b;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = D.z(this), I = this.$H, V = this.$m, j = this.$M, X = T.weekdays, vt = T.months, U = function(G, it, Et, At) {
          return G && (G[it] || G(R, O)) || Et[it].slice(0, At);
        }, K = function(G) {
          return D.s(I % 12 || 12, G, "0");
        }, yt = T.meridiem || function(G, it, Et) {
          var At = G < 12 ? "AM" : "PM";
          return Et ? At.toLowerCase() : At;
        }, st = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: D.s(j + 1, 2, "0"), MMM: U(T.monthsShort, j, vt, 3), MMMM: U(vt, j), D: this.$D, DD: D.s(this.$D, 2, "0"), d: String(this.$W), dd: U(T.weekdaysMin, this.$W, X, 2), ddd: U(T.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(I), HH: D.s(I, 2, "0"), h: K(1), hh: K(2), a: yt(I, V, !0), A: yt(I, V, !1), m: String(V), mm: D.s(V, 2, "0"), s: String(this.$s), ss: D.s(this.$s, 2, "0"), SSS: D.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(G, it) {
          return it || st[G] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, R, T) {
        var O, P = D.p(R), I = x($), V = (I.utcOffset() - this.utcOffset()) * o, j = this - I, X = D.m(this, I);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - V) / 6048e5, O[h] = (j - V) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, T ? X : D.a(X);
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
        return D.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), B = z.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(N) {
      B[N[1]] = function(S) {
        return this.$g(S, N[0], N[1]);
      };
    }), x.extend = function(N, S) {
      return N.$i || (N(S, z, x), N.$i = !0), x;
    }, x.locale = y, x.isDayjs = E, x.unix = function(N) {
      return x(1e3 * N);
    }, x.en = A[C], x.Ls = A, x.p = {}, x;
  });
})(Uv);
const pc = (t = 0, e = 0) => {
  const n = [];
  for (let o = t; o <= e; o++)
    n.push(o);
  return n;
}, $d = (t, e) => {
  const n = Math.ceil(t.length / e);
  return new Array(e).fill({}).map((o, i) => t.slice(i * n, (i + 1) * n));
}, Fv = (t) => {
  const { format: e, minDate: n, maxDate: o, tagDate: i, DATEROWCOUNT: r, showOtherMonth: l, clickDay: c, selectedDate: _, handleChangePanel: h, showToday: s, handleChange: d, clickToday: f } = t, a = (D) => Z(D).isValid() ? Z(D).add(1, "months").format(e) : "", u = (D) => Z(D).isValid() ? Z(D).subtract(1, "months").format(e) : "", b = () => {
    const D = u(_);
    d(D, !1);
  }, p = () => {
    const D = a(_);
    d(D, !1);
  }, m = () => {
    d("", !0);
  }, g = () => {
    d(_, !0);
  }, w = (D, z, B, N) => {
    const S = Z(), $ = Z(_), R = new Array(D);
    for (let T = 0; T < D; T++) {
      const O = z + T + 1, P = B.set("date", O), I = N && !l ? !0 : n && P.isBefore(n, "date") || o && P.isAfter(o, "date");
      R[T] = {
        isSelected: $.isSame(B.set("date", O), "date"),
        isToday: S.isSame(P, "date"),
        isDisable: !!I,
        isTag: !!(i != null && i.includes(P.format(e))),
        date: P,
        isOtherMonth: N,
        onClick: () => I ? {} : c(P)
      };
    }
    return R;
  }, k = () => {
    const D = Z(_), z = Z(), B = _ ? D : z, N = B.set("date", 1).day(), S = N === 0 ? 6 : N - 1, $ = B.subtract(1, "month"), T = Number($.endOf("month").get("date")) - S;
    return w(S, T, $, !0);
  }, C = () => {
    const D = Z(_), z = Z(), B = _ ? D : z, N = B.set("date", 1).day(), S = N === 0 ? 6 : N - 1, $ = B.endOf("month").get("date"), R = B.add(1, "month"), T = 7 * 6 % (S + $);
    return w(T, 0, R, !0);
  }, A = () => {
    const D = _, z = Z(), B = _ ? Z(D) : z, N = B.endOf("month").get("date"), S = w(N, 0, B, !1), $ = k(), R = C(), T = [...$, ...S, ...R];
    return $d(T, r);
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
      /* @__PURE__ */ q("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ q("tr", { children: E.map((D, z) => /* @__PURE__ */ q("th", { children: D }, z)) }) }),
      /* @__PURE__ */ q("tbody", { className: "datepicker-calendar-tbody", children: y.map((D, z) => /* @__PURE__ */ q("tr", { children: D.map((B, N) => {
        const S = ["text-center"];
        return B.isToday && S.push("datepicker-calendar-today"), B.isSelected && S.push("datepicker-calendar-selected-date"), B.isOtherMonth && S.push("datepicker-calendar-other-month"), B.isTag && S.push("datepicker-calendar-tag"), /* @__PURE__ */ q("td", { className: F(S), children: /* @__PURE__ */ q("div", { className: F("btn", "ghost", "datepicker-calendar-date", B.isDisable ? "disabled" : ""), onClick: B.onClick, children: !l && B.isOtherMonth ? "" : Z(B.date).format("DD") }) }, N);
      }) }, z)) })
    ] }),
    /* @__PURE__ */ q("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ q("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ q("span", { children: "清除" }) }),
      /* @__PURE__ */ q("button", { type: "button", className: "btn ghost text-primary", onClick: g, children: /* @__PURE__ */ q("span", { children: "确认" }) })
    ] })
  ] });
};
const Bv = (t) => {
  const { format: e, selectedDate: n, minDate: o, maxDate: i, year: r, handleChangeMonth: l } = t, c = Z(o).format("M"), _ = Z(i).format("M"), h = $d(pc(1, 12), 3), s = (d, f) => {
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
}, jv = (t) => {
  const { selectedDate: e, handleChangeMonth: n } = t;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = Z(e).year(), i = [...pc(o - 100, o), ...pc(o + 1, o + 100)], r = (l, c) => {
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
    /* @__PURE__ */ q("div", { className: F("datepicker-accordion-content", o === l ? "" : "hidden"), children: nr(Bv, {
      ...t,
      year: l.toString(),
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class Vv extends Co {
  constructor() {
    super(...arguments);
    L(this, "DATEROWCOUNT", 6);
    L(this, "ref", Rv());
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
    return this.state.type === "day" ? nr(Fv, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : nr(jv, {
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
function Vr(t) {
  return t.split("-")[1];
}
function Gc(t) {
  return t === "y" ? "height" : "width";
}
function Gn(t) {
  return t.split("-")[0];
}
function Nl(t) {
  return ["top", "bottom"].includes(Gn(t)) ? "x" : "y";
}
function D_(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = Nl(e), _ = Gc(c), h = o[_] / 2 - i[_] / 2, s = Gn(e), d = c === "x";
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
  switch (Vr(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const zv = async (t, e, n) => {
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
  } = D_(h, o, _), f = o, a = {}, u = 0;
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
      } = D_(h, f, _)), b = -1;
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
function Yv(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function kd(t) {
  return typeof t != "number" ? Yv(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function qs(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Gv(t, e) {
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
  } = e, u = kd(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = qs(await r.getClippingRect({
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
  }, C = qs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const qv = Math.min, Xv = Math.max;
function Kv(t, e, n) {
  return Xv(t, qv(e, n));
}
const Zv = (t) => ({
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
    const h = kd(o), s = {
      x: i,
      y: r
    }, d = Nl(l), f = Gc(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = Kv(C, E, A), D = Vr(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - D,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), Jv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Jv[e]);
}
function Qv(t, e, n) {
  n === void 0 && (n = !1);
  const o = Vr(t), i = Nl(t), r = Gc(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Xs(l)), {
    main: l,
    cross: Xs(l)
  };
}
const tb = {
  start: "end",
  end: "start"
};
function mc(t) {
  return t.replace(/start|end/g, (e) => tb[e]);
}
function eb(t) {
  const e = Xs(t);
  return [mc(t), e, mc(e)];
}
function nb(t, e, n) {
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
function ob(t, e, n, o) {
  const i = Vr(t);
  let r = nb(Gn(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(mc)))), r;
}
const rb = function(t) {
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
      } = t, p = Gn(o), m = Gn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [Xs(l)] : eb(l));
      !d && a !== "none" && w.push(...ob(l, u, a, g));
      const k = [l, ...w], C = await Gv(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: D,
          cross: z
        } = Qv(o, r, g);
        A.push(C[D], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((D) => D <= 0)) {
        var y;
        const D = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[D];
        if (z)
          return {
            data: {
              index: D,
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
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
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
async function sb(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Gn(n), c = Vr(n), _ = Nl(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const ib = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await sb(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
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
function je(t) {
  return Sd(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Jr;
function xd() {
  if (Jr)
    return Jr;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Jr = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Jr) : navigator.userAgent;
}
function he(t) {
  return t instanceof Wt(t).HTMLElement;
}
function jt(t) {
  return t instanceof Wt(t).Element;
}
function Sd(t) {
  return t instanceof Wt(t).Node;
}
function N_(t) {
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
function lb(t) {
  return ["table", "td", "th"].includes(je(t));
}
function qc(t) {
  const e = /firefox/i.test(xd()), n = ee(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Cd() {
  return !/^((?!chrome|android).)*safari/i.test(xd());
}
function Xc(t) {
  return ["html", "body", "#document"].includes(je(t));
}
const R_ = Math.min, Eo = Math.max, Ks = Math.round;
function Ed(t) {
  const e = ee(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = Ks(n) !== i || Ks(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Ad(t) {
  return jt(t) ? t : t.contextElement;
}
const Td = {
  x: 1,
  y: 1
};
function dn(t) {
  const e = Ad(t);
  if (!he(e))
    return Td;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = Ed(e);
  let l = (r ? Ks(n.width) : n.width) / o, c = (r ? Ks(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function an(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Ad(t);
  let _ = Td;
  e && (o ? jt(o) && (_ = dn(o)) : _ = dn(t));
  const h = c ? Wt(c) : window, s = !Cd() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Wt(c), p = o && jt(o) ? Wt(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = dn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
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
function qe(t) {
  return ((Sd(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Pl(t) {
  return jt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Md(t) {
  return an(qe(t)).left + Pl(t).scrollLeft;
}
function cb(t, e, n) {
  const o = he(e), i = qe(e), r = an(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((je(e) !== "body" || Rl(i)) && (l = Pl(e)), he(e)) {
      const _ = an(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = Md(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function rr(t) {
  if (je(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (N_(t) ? t.host : null) || // Fallback
    qe(t)
  );
  return N_(e) ? e.host : e;
}
function P_(t) {
  return !he(t) || ee(t).position === "fixed" ? null : t.offsetParent;
}
function ab(t) {
  let e = rr(t);
  for (; he(e) && !Xc(e); ) {
    if (qc(e))
      return e;
    e = rr(e);
  }
  return null;
}
function O_(t) {
  const e = Wt(t);
  let n = P_(t);
  for (; n && lb(n) && ee(n).position === "static"; )
    n = P_(n);
  return n && (je(n) === "html" || je(n) === "body" && ee(n).position === "static" && !qc(n)) ? e : n || ab(t) || e;
}
function _b(t) {
  return Ed(t);
}
function fb(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = he(n), r = qe(n);
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
  if ((i || !i && o !== "fixed") && ((je(n) !== "body" || Rl(r)) && (l = Pl(n)), he(n))) {
    const h = an(n);
    c = dn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function ub(t, e) {
  const n = Wt(t), o = qe(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Cd();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function hb(t) {
  var e;
  const n = qe(t), o = Pl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = Eo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Eo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Md(t);
  const _ = -o.scrollTop;
  return ee(i || n).direction === "rtl" && (c += Eo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Ld(t) {
  const e = rr(t);
  return Xc(e) ? t.ownerDocument.body : he(e) && Rl(e) ? e : Ld(e);
}
function Ao(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Ld(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Wt(o);
  return i ? e.concat(r, r.visualViewport || [], Rl(o) ? o : []) : e.concat(o, Ao(o));
}
function db(t, e) {
  const n = an(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = he(t) ? dn(t) : {
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
function H_(t, e, n) {
  return e === "viewport" ? qs(ub(t, n)) : jt(e) ? db(e, n) : qs(hb(qe(t)));
}
function pb(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Ao(t).filter((c) => jt(c) && je(c) !== "body"), i = null;
  const r = ee(t).position === "fixed";
  let l = r ? rr(t) : t;
  for (; jt(l) && !Xc(l); ) {
    const c = ee(l), _ = qc(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = rr(l);
  }
  return e.set(t, o), o;
}
function mb(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? pb(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = H_(e, s, i);
    return h.top = Eo(d.top, h.top), h.right = R_(d.right, h.right), h.bottom = R_(d.bottom, h.bottom), h.left = Eo(d.left, h.left), h;
  }, H_(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const gb = {
  getClippingRect: mb,
  convertOffsetParentRelativeRectToViewportRelativeRect: fb,
  isElement: jt,
  getDimensions: _b,
  getOffsetParent: O_,
  getDocumentElement: qe,
  getScale: dn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || O_, r = this.getDimensions;
    return {
      reference: cb(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => ee(t).direction === "rtl"
};
function yb(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...jt(t) ? Ao(t) : t.contextElement ? Ao(t.contextElement) : [], ...Ao(e)] : [];
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
    }), jt(t) && !c && s.observe(t), !jt(t) && t.contextElement && !c && s.observe(t.contextElement), s.observe(e);
  }
  let d, f = c ? an(t) : null;
  c && a();
  function a() {
    const u = an(t);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((b) => {
      _ && b.removeEventListener("scroll", n), r && b.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const vb = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: gb,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return zv(t, e, {
    ...i,
    platform: r
  });
};
var Tn, Mn, xt, en, br, wr, $r, gc, Si, Dd, Ci, Nd, Ei, Rd, Ai, Pd, Ti, Od, Mi, Hd, Li, Wd, Di;
const Ze = class extends zt {
  constructor() {
    super(...arguments);
    M(this, $r);
    M(this, Si);
    M(this, Ci);
    M(this, Ei);
    M(this, Ai);
    M(this, Ti);
    M(this, Mi);
    M(this, Li);
    M(this, Tn, void 0);
    M(this, Mn, 0);
    M(this, xt, void 0);
    M(this, en, void 0);
    M(this, br, void 0);
    M(this, wr, void 0);
    L(this, "hideLater", () => {
      v(this, Di).call(this), H(this, Mn, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, Di, () => {
      clearTimeout(v(this, Mn)), H(this, Mn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = v(this, en)) == null ? void 0 : n.classList.contains(Ze.CLASS_SHOW);
  }
  get datepicker() {
    return v(this, en) || W(this, Ci, Nd).call(this);
  }
  get trigger() {
    return v(this, br) || this.element;
  }
  get elementShowClass() {
    return `with-${Ze.NAME}-show`;
  }
  show(n) {
    return H(this, br, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(Ze.CLASS_SHOW), this.datepicker.classList.add("fade"), W(this, Mi, Hd).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = v(this, wr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = v(this, en)) == null || o.classList.remove(Ze.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
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
Tn = new WeakMap(), Mn = new WeakMap(), xt = new WeakMap(), en = new WeakMap(), br = new WeakMap(), wr = new WeakMap(), $r = new WeakSet(), gc = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Si = new WeakSet(), Dd = function() {
  const n = W(this, $r, gc).call(this);
  return H(this, xt, document.createElement("div")), v(this, xt).style.position = "absolute", v(this, xt).style.width = `${n}px`, v(this, xt).style.height = `${n}px`, v(this, xt).style.transform = "rotate(45deg)", v(this, xt);
}, Ci = new WeakSet(), Nd = function() {
  const n = Ze.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), Wv(nr(Vv, { ...this.options }), o), this.options.arrow && o.append(W(this, Si, Dd).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, en, o), o;
}, Ei = new WeakSet(), Rd = function() {
  var l;
  const n = W(this, $r, gc).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [ib(n), rb()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && v(this, xt) && ((l = r.middleware) == null || l.push(Zv({ element: v(this, xt) }))), r;
}, Ai = new WeakSet(), Pd = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Ti = new WeakSet(), Od = function(n) {
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
}, Mi = new WeakSet(), Hd = function() {
  const n = W(this, Ei, Rd).call(this), o = W(this, Li, Wd).call(this);
  H(this, wr, yb(o, this.datepicker, () => {
    vb(o, this.datepicker, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.datepicker.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, Ai, Pd).call(this, _);
      if (l.arrow && v(this, xt)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(v(this, xt).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-v(this, xt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, Ti, Od).call(this, _)
        });
      }
    });
  }));
}, Li = new WeakSet(), Wd = function() {
  return v(this, Tn) || H(this, Tn, {
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
  }), v(this, Tn);
}, Di = new WeakMap(), L(Pt, "NAME", "datepicker"), L(Pt, "CLASSNAME", "datepicker"), L(Pt, "CLASS_SHOW", "show"), L(Pt, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), L(Pt, "DEFAULT", {
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
const bb = (t) => {
  const e = document.getElementsByClassName("with-datepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Pt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Pt.clear({ event: t });
};
window.addEventListener("scroll", bb, !0);
function Id(t, e, n) {
  if (n) {
    t.setAttribute("class", F(e));
    return;
  }
  Sl(t.getAttribute("class"), e).forEach(([o, i]) => {
    t.classList.toggle(o, i);
  });
}
function oo(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, i]) => {
      oo(t, o, i);
    });
  n !== void 0 && (t.style[e] = typeof n == "number" ? `${n}px` : n);
}
function Zs(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, i]) => {
      Zs(t, o, i);
    });
  n !== void 0 && (n === null ? t.removeAttribute(e) : t.setAttribute(e, n));
}
var nn, kr, ve, Ni, Ln, ps;
const se = class extends zt {
  constructor() {
    super(...arguments);
    M(this, Ln);
    M(this, nn, 0);
    M(this, kr, void 0);
    M(this, ve, void 0);
    M(this, Ni, (n) => {
      const o = n.target;
      (o.closest(se.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(se.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", v(this, Ni)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const i = n.clientWidth, r = n.clientHeight;
          (!v(this, ve) || v(this, ve)[0] !== i || v(this, ve)[1] !== r) && (H(this, ve, [i, r]), this.layout());
        });
        o.observe(n), H(this, kr, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = v(this, kr)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: i, backdrop: r, className: l, style: c } = this.options;
    return Id(o, [{
      "modal-trans": i,
      "modal-no-backdrop": !r
    }, se.CLASS_SHOW, l]), oo(o, {
      zIndex: `${se.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), W(this, Ln, ps).call(this, () => {
      o.classList.add(se.CLASS_SHOWN), W(this, Ln, ps).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(se.CLASS_SHOWN), this.emit("hide", this), W(this, Ln, ps).call(this, () => {
      this.modalElement.classList.remove(se.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    o = o ?? this.options.size, Zs(i, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? Zs(i, "data-size", o) : o && (r.width = o), oo(i, r), n = n ?? this.options.position ?? "fit";
    const l = i.clientWidth, c = i.clientHeight;
    H(this, ve, [l, c]), typeof n == "function" && (n = n({ width: l, height: c }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), oo(i, _), oo(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Tt = se;
nn = new WeakMap(), kr = new WeakMap(), ve = new WeakMap(), Ni = new WeakMap(), Ln = new WeakSet(), ps = function(n, o) {
  v(this, nn) && (clearTimeout(v(this, nn)), H(this, nn, 0)), n && (this.options.animation ? H(this, nn, window.setTimeout(n, o ?? this.options.transTime)) : n());
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
var Ol, ot, Ud, ro, To, W_, Js = {}, Fd = [], wb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ne(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Bd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function $b(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ol.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ms(t, l, o, i, null);
}
function ms(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ud };
  return i == null && ot.vnode != null && ot.vnode(r), r;
}
function kb() {
  return { current: null };
}
function Hl(t) {
  return t.children;
}
function pn(t, e) {
  this.props = t, this.context = e;
}
function sr(t, e) {
  if (e == null)
    return t.__ ? sr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? sr(t) : null;
}
function jd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return jd(t);
  }
}
function I_(t) {
  (!t.__d && (t.__d = !0) && To.push(t) && !Qs.__r++ || W_ !== ot.debounceRendering) && ((W_ = ot.debounceRendering) || setTimeout)(Qs);
}
function Qs() {
  for (var t; Qs.__r = To.length; )
    t = To.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), To = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ne({}, r)).__v = r.__v + 1, Kc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? sr(r), r.__h), Gd(o, r), r.__e != l && jd(r)));
    });
}
function Vd(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Fd, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ms(null, a, null, null, a) : Array.isArray(a) ? ms(Hl, { children: a }, null, null, null) : a.__b > 0 ? ms(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Kc(t, a, f = f || Js, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = zd(a, _, t) : _ = Yd(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = sr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Xd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      qd(p[s], p[++s], p[++s]);
}
function zd(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? zd(o, e, n) : Yd(n, o, o, i, o.__e, e));
  return e;
}
function Yd(t, e, n, o, i, r) {
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
function xb(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ti(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ti(t, r, e[r], n[r], o);
}
function U_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || wb.test(e) ? n : n + "px";
}
function ti(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || U_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || U_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? B_ : F_, r) : t.removeEventListener(e, r ? B_ : F_, r);
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
function F_(t) {
  this.l[t.type + !1](ot.event ? ot.event(t) : t);
}
function B_(t) {
  this.l[t.type + !0](ot.event ? ot.event(t) : t);
}
function Kc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ot.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new pn(p, g), s.constructor = y, s.render = Cb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ne({}, s.__s)), Ne(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = Ne(Ne({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Hl && h.key == null ? h.props.children : h, Vd(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Sb(n.__e, e, n, o, i, r, l, _);
    (h = ot.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ot.__e(x, e, n);
  }
}
function Gd(t, e) {
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
function Sb(t, e, n, o, i, r, l, c) {
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
    if (r = r && Ol.call(t.childNodes), h = (d = n.props || Js).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (xb(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Vd(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && sr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Bd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ti(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ti(t, "checked", u, d.checked, !1));
  }
  return t;
}
function qd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ot.__e(o, n);
  }
}
function Xd(t, e, n) {
  var o, i;
  if (ot.unmount && ot.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || qd(o, null, e)), (o = t.__c) != null) {
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
      o[i] && Xd(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Bd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Cb(t, e, n) {
  return this.constructor(t, n);
}
function Eb(t, e, n) {
  var o, i, r;
  ot.__ && ot.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Kc(e, t = (!o && n || e).__k = $b(Hl, null, [t]), i || Js, Js, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Ol.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Gd(r, t);
}
Ol = Fd.slice, ot = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Ud = 0, ro = function(t) {
  return t != null && t.constructor === void 0;
}, pn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ne({}, this.state), typeof t == "function" && (t = t(Ne({}, n), this.props)), t && Ne(n, t), t != null && this.__v && (e && this._sb.push(e), I_(this));
}, pn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), I_(this));
}, pn.prototype.render = Hl, To = [], Qs.__r = 0;
var Ab = 0;
function bt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ab, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ot.vnode && ot.vnode(_), _;
}
let Tb = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
class Kd extends pn {
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
    return ro(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ bt("div", { className: "modal-header", children: /* @__PURE__ */ bt("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : ro(e) ? e : /* @__PURE__ */ bt("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ bt(Yn, { ...e }) : null,
      n ? /* @__PURE__ */ bt("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ bt("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? ro(e) ? e : /* @__PURE__ */ bt("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return ro(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ bt("div", { className: "modal-footer", children: n ? /* @__PURE__ */ bt(Yn, { ...n }) : null });
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
L(Kd, "defaultProps", { closeBtn: !0 });
var xr, Dn, Sr;
class Mb extends pn {
  constructor() {
    super(...arguments);
    M(this, xr, kb());
    M(this, Dn, void 0);
    L(this, "state", {});
    M(this, Sr, () => {
      var i, r;
      const n = (r = (i = v(this, xr).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = v(this, Dn);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, c = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, c.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, Dn, o);
    });
  }
  componentDidMount() {
    v(this, Sr).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = v(this, Dn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ bt(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: v(this, xr),
        onLoad: v(this, Sr)
      }
    );
  }
}
xr = new WeakMap(), Dn = new WeakMap(), Sr = new WeakMap();
function Lb(t, e) {
  const { custom: n, title: o, content: i } = e;
  return {
    body: i,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function Db(t, e) {
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
async function Nb(t, e) {
  const { url: n, custom: o, title: i } = e;
  return {
    title: i,
    ...o,
    body: /* @__PURE__ */ bt(Mb, { url: n })
  };
}
const Rb = {
  custom: Lb,
  ajax: Db,
  iframe: Nb
};
var Cr, Er, qt, Nn, gs, Ri, Zd, Ar, yc;
const jo = class extends Tt {
  constructor() {
    super(...arguments);
    M(this, Nn);
    M(this, Ri);
    M(this, Ar);
    M(this, Cr, void 0);
    M(this, Er, void 0);
    M(this, qt, void 0);
  }
  get id() {
    return v(this, Er);
  }
  get loading() {
    return this.modalElement.classList.contains(jo.LOADING_CLASS);
  }
  get modalElement() {
    let n = v(this, Cr);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), Zs(n, {
        id: o,
        style: this.options.style
      }), Id(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, Cr, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, Er, this.options.id || `modal-${Tb()}`);
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
    v(this, qt) && clearTimeout(v(this, qt));
    const { modalElement: n, options: o } = this, { type: i, loadTimeout: r } = o, l = Rb[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.classList.add(jo.LOADING_CLASS), await W(this, Ri, Zd).call(this), r && H(this, qt, window.setTimeout(() => {
      H(this, qt, 0), W(this, Ar, yc).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await W(this, Ar, yc).call(this, this.options.failedTip) : c && typeof c == "object" && await W(this, Nn, gs).call(this, c), v(this, qt) && (clearTimeout(v(this, qt)), H(this, qt, 0)), n.classList.remove(jo.LOADING_CLASS), !0;
  }
};
let so = jo;
Cr = new WeakMap(), Er = new WeakMap(), qt = new WeakMap(), Nn = new WeakSet(), gs = function(n) {
  return new Promise((o) => {
    const { afterRender: i, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), i == null || i(l), o();
      },
      ...r
    }, Eb(
      /* @__PURE__ */ bt(Kd, { ...n }),
      this.modalElement
    );
  });
}, Ri = new WeakSet(), Zd = function() {
  const { loadingText: n } = this.options;
  return W(this, Nn, gs).call(this, {
    body: /* @__PURE__ */ bt("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ bt("span", { className: "spinner" }),
      n ? /* @__PURE__ */ bt("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, Ar = new WeakSet(), yc = function(n) {
  if (n)
    return W(this, Nn, gs).call(this, {
      body: /* @__PURE__ */ bt("div", { className: "modal-load-failed", children: n })
    });
}, L(so, "LOADING_CLASS", "loading"), L(so, "DEFAULT", {
  ...Tt.DEFAULT,
  loadTimeout: 1e4
});
var be, Pi, Jd, Oi, Qd, Hi, tp;
class Mo extends zt {
  constructor() {
    super(...arguments);
    M(this, Pi);
    M(this, Oi);
    M(this, Hi);
    M(this, be, void 0);
  }
  get modal() {
    return v(this, be);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return W(this, Oi, Qd).call(this).show();
  }
  hide() {
    var n;
    (n = v(this, be)) == null || n.hide();
  }
}
be = new WeakMap(), Pi = new WeakSet(), Jd = function() {
  const {
    container: n,
    ...o
  } = this.options, i = o, r = this.element.getAttribute("href") || "";
  return i.type || (i.target || r[0] === "#" ? i.type = "static" : i.type = i.type || (i.url ? "iframe" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && r[0] !== "#" && (i.url = r), i;
}, Oi = new WeakSet(), Qd = function() {
  const n = W(this, Pi, Jd).call(this);
  let o = v(this, be);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Tt(W(this, Hi, tp).call(this), n), H(this, be, o)) : (o = new so(this.container, n), H(this, be, o)), o;
}, Hi = new WeakSet(), tp = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const i = o.getAttribute("href");
      i != null && i.startsWith("#") && (n = i);
    }
  }
  return this.container.querySelector(n || ".modal");
}, L(Mo, "NAME", "ModalTrigger"), L(Mo, "EVENTS", !0), L(Mo, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (t) => {
  const n = t.target.closest(Mo.TOGGLE_SELECTOR);
  if (n) {
    const o = Mo.ensure(n);
    o && o.show(), console.log("> modalTrigger", o);
  }
});
var ic;
let Pb = (ic = class extends zn {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = F(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, L(ic, "NAME", "nav"), ic);
class j_ extends kt {
}
L(j_, "NAME", "nav"), L(j_, "Component", Pb);
var vc;
vc = { __e: function(t, e, n, o) {
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
var Ob = 0;
function Ie(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ob, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return vc.vnode && vc.vnode(_), _;
}
function ir(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function Hb({
  key: t,
  type: e,
  btnType: n,
  page: o,
  format: i,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = ir(r, o);
  return c.text === void 0 && !c.icon && i && (c.text = typeof i == "function" ? i(_) : Lt(i, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : Lt(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ Ie(Qt, { type: n, ...c });
}
const ie = 24 * 60 * 60 * 1e3, Dt = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), zr = (t, e = new Date()) => (t = Dt(t), e = Dt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), V_ = (t, e = new Date()) => Dt(t).getFullYear() === Dt(e).getFullYear(), Wb = (t, e = new Date()) => (t = Dt(t), e = Dt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), b$ = (t, e = new Date()) => {
  t = Dt(t), e = Dt(e);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, w$ = (t, e) => zr(Dt(e), t), $$ = (t, e) => zr(Dt(e).getTime() - ie, t), k$ = (t, e) => zr(Dt(e).getTime() + ie, t), x$ = (t, e) => zr(Dt(e).getTime() - 2 * ie, t), bc = (t, e = "yyyy-MM-dd hh:mm") => {
  t = Dt(t);
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
}, S$ = (t, e, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = bc(t, V_(t) ? o.month : o.full);
  if (zr(t, e))
    return i;
  const r = bc(e, V_(t, e) ? Wb(t, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, C$ = (t) => {
  const e = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return e - ie * 7;
    case "oneMonth":
      return e - ie * 31;
    case "threeMonth":
      return e - ie * 31 * 3;
    case "halfYear":
      return e - ie * 183;
    case "oneYear":
      return e - ie * 365;
    case "twoYear":
      return e - 2 * (ie * 365);
    default:
      return 0;
  }
}, z_ = (t, e, n = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, z_(t, "day", n, o);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, z_(t, "day", n, o);
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
function Ib({
  key: t,
  type: e,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const c = ir(i, n);
  return o = typeof o == "function" ? o(c) : Lt(o, c), /* @__PURE__ */ Ie(hu, { ...l, children: [
    r,
    o
  ] });
}
function Ub({
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
  const _ = { ...c, square: !0 }, h = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ Ie(Qt, { type: n, ..._ })), s = (f, a) => {
    const u = [];
    for (let b = f; b <= a; b++) {
      _.text = b, delete _.icon, _.disabled = !1;
      const p = ir(i, b);
      l && (_.url = typeof l == "function" ? l(p) : Lt(l, p)), u.push(/* @__PURE__ */ Ie(Qt, { type: n, ..._, onClick: r }));
    }
    return u;
  };
  let d = [];
  return d = [...s(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= o ? d = [...d, ...s(2, i.pageTotal)] : i.page < o - 2 ? d = [...d, ...s(2, o - 2), h(), ...s(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - o + 3 ? d = [...d, h(), ...s(i.pageTotal - o + 3, i.pageTotal)] : d = [...d, h(), ...s(i.page - Math.ceil((o - 4) / 2), i.page + Math.floor((o - 4) / 2)), h(), ...s(i.pageTotal, i.pageTotal)]), d;
}
function Fb({
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
  return r.text = typeof l == "function" ? l(e) : Lt(l, e), i.menu = { ...i.menu, className: F((c = i.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ Ie(Sh, { type: "dropdown", dropdown: i, ...r });
}
function Bb({
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
    const p = ir(i, d);
    c && !c({ info: p, event: b }) || (b.target.href = s.url = typeof _ == "function" ? _(p) : Lt(_, p));
  }, u = ir(i, e || 0);
  return s.url = typeof _ == "function" ? _(u) : Lt(_, u), s.className = F("input-group-addon", s.className), /* @__PURE__ */ Ie("div", { className: F("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ Ie("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ Ie(Qt, { type: o, ...s, onClick: a })
  ] });
}
var eo;
let jb = (eo = class extends Yn {
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
}, L(eo, "NAME", "pager"), L(eo, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), L(eo, "ItemComponents", {
  ...Yn.ItemComponents,
  link: Hb,
  info: Ib,
  nav: Ub,
  "size-menu": Fb,
  goto: Bb
}), eo);
class Y_ extends kt {
}
L(Y_, "NAME", "pager"), L(Y_, "Component", jb);
var ep, dt, np, Lo, G_, op = {}, rp = [], Vb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Re(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function sp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function tc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++np };
  return i == null && dt.vnode != null && dt.vnode(r), r;
}
function zb() {
  return { current: null };
}
function Zc(t) {
  return t.children;
}
function Ue(t, e) {
  this.props = t, this.context = e;
}
function lr(t, e) {
  if (e == null)
    return t.__ ? lr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? lr(t) : null;
}
function ip(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ip(t);
  }
}
function q_(t) {
  (!t.__d && (t.__d = !0) && Lo.push(t) && !ei.__r++ || G_ !== dt.debounceRendering) && ((G_ = dt.debounceRendering) || setTimeout)(ei);
}
function ei() {
  for (var t; ei.__r = Lo.length; )
    t = Lo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Lo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Re({}, r)).__v = r.__v + 1, _p(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? lr(r), r.__h), Gb(o, r), r.__e != l && ip(r)));
    });
}
function lp(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || rp, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? tc(null, a, null, null, a) : Array.isArray(a) ? tc(Zc, { children: a }, null, null, null) : a.__b > 0 ? tc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      _p(t, a, f = f || op, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = cp(a, _, t) : _ = ap(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = lr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && up(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      fp(p[s], p[++s], p[++s]);
}
function cp(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? cp(o, e, n) : ap(n, o, o, i, o.__e, e));
  return e;
}
function ap(t, e, n, o, i, r) {
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
function Yb(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ni(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ni(t, r, e[r], n[r], o);
}
function X_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Vb.test(e) ? n : n + "px";
}
function ni(t, e, n, o, i) {
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
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Z_ : K_, r) : t.removeEventListener(e, r ? Z_ : K_, r);
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
function K_(t) {
  this.l[t.type + !1](dt.event ? dt.event(t) : t);
}
function Z_(t) {
  this.l[t.type + !0](dt.event ? dt.event(t) : t);
}
function _p(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = dt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Ue(p, g), s.constructor = y, s.render = Xb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Re({}, s.__s)), Re(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = Re(Re({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Zc && h.key == null ? h.props.children : h, lp(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = qb(n.__e, e, n, o, i, r, l, _);
    (h = dt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), dt.__e(x, e, n);
  }
}
function Gb(t, e) {
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
function qb(t, e, n, o, i, r, l, c) {
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
    if (r = r && ep.call(t.childNodes), h = (d = n.props || op).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Yb(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, lp(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && lr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && sp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ni(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ni(t, "checked", u, d.checked, !1));
  }
  return t;
}
function fp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    dt.__e(o, n);
  }
}
function up(t, e, n) {
  var o, i;
  if (dt.unmount && dt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || fp(o, null, e)), (o = t.__c) != null) {
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
      o[i] && up(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || sp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Xb(t, e, n) {
  return this.constructor(t, n);
}
ep = rp.slice, dt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, np = 0, Ue.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Re({}, this.state), typeof t == "function" && (t = t(Re({}, n), this.props)), t && Re(n, t), t != null && this.__v && (e && this._sb.push(e), q_(this));
}, Ue.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), q_(this));
}, Ue.prototype.render = Zc, Lo = [], ei.__r = 0;
var Kb = 0;
function Q(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Kb, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return dt.vnode && dt.vnode(_), _;
}
let Zb = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Wi;
class Jb extends Ue {
  constructor() {
    super(...arguments);
    M(this, Wi, (n) => {
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
      /* @__PURE__ */ Q("div", { className: "picker-deselect-btn btn", onClick: v(this, Wi), "data-idx": f, children: /* @__PURE__ */ Q("span", { className: "close" }) })
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
Wi = new WeakMap();
var Ii;
class Qb extends Ue {
  constructor() {
    super(...arguments);
    M(this, Ii, (n) => {
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
    } = this.props, [d] = c, f = d ? /* @__PURE__ */ Q("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ Q("span", { className: "picker-select-placeholder", children: r }), a = d && _ ? /* @__PURE__ */ Q("button", { type: "button", className: "btn picker-deselect-btn", onClick: v(this, Ii), children: /* @__PURE__ */ Q("span", { className: "close" }) }) : null;
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
Ii = new WeakMap();
var Ui, hp, Tr, Fi, Mr, Bi;
class t0 extends Ue {
  constructor() {
    super(...arguments);
    M(this, Ui);
    L(this, "state", { keys: "", shown: !1 });
    M(this, Tr, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    M(this, Fi, ({ item: n }) => {
      const o = this.props.items.find((i) => i.value === n.key);
      o && this.props.onSelectItem(o);
    });
    M(this, Mr, (n) => {
      this.setState({ keys: n.target.value });
    });
    M(this, Bi, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", v(this, Tr)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", v(this, Tr));
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
        /* @__PURE__ */ Q("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: s, value: f, onChange: v(this, Mr), onInput: v(this, Mr) }),
        a ? /* @__PURE__ */ Q("button", { type: "button", className: "btn picker-menu-search-clear", onClick: v(this, Bi), children: /* @__PURE__ */ Q("span", { className: "close" }) }) : /* @__PURE__ */ Q("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ Q(Pc, { className: "picker-menu-list", items: W(this, Ui, hp).call(this), onClickItem: v(this, Fi), ...h })
    ] });
  }
}
Ui = new WeakSet(), hp = function() {
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
}, Tr = new WeakMap(), Fi = new WeakMap(), Mr = new WeakMap(), Bi = new WeakMap();
function J_(t) {
  const e = /* @__PURE__ */ new Set();
  return t.reduce((n, o) => (e.has(o) || (e.add(o), n.push(o)), n), []);
}
var lc, Lr, Dr, Nr, Rn, ys, Rr, wc, ji, dp, Vi, pp, zi, Yi, Gi, qi, Xi, mp;
let e0 = (lc = class extends Ue {
  constructor(n) {
    super(n);
    M(this, Rn);
    M(this, Rr);
    M(this, ji);
    M(this, Vi);
    M(this, Xi);
    M(this, Lr, 0);
    M(this, Dr, Zb());
    M(this, Nr, zb());
    M(this, zi, (n, o) => {
      const { valueList: i } = this, r = new Set(n.map((c) => c.value)), l = i.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    M(this, Yi, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    M(this, Gi, () => {
      this.close();
    });
    M(this, qi, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = v(this, Nr).current) == null || o.hide();
      });
    });
    this.state = {
      value: W(this, ji, dp).call(this, n.defaultValue) ?? "",
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
    return W(this, Rr, wc).call(this, this.state.value);
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
      const i = ++ga(this, Lr)._;
      if (await W(this, Rn, ys).call(this, { loading: !0, items: [] }), n = await n(), v(this, Lr) !== i)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await W(this, Rn, ys).call(this, o), n;
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
    await W(this, Rn, ys).call(this, { open: n }), n && this.loadItemList();
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
    } = this.props, l = r ? Jb : Qb;
    return /* @__PURE__ */ Q("div", { className: F("picker", n), style: o, id: `picker-${v(this, Dr)}`, children: [
      /* @__PURE__ */ Q(l, { ...W(this, Vi, pp).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ Q(t0, { ...W(this, Xi, mp).call(this), ref: v(this, Nr) }) : null
    ] });
  }
}, Lr = new WeakMap(), Dr = new WeakMap(), Nr = new WeakMap(), Rn = new WeakSet(), ys = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, Rr = new WeakSet(), wc = function(n) {
  return typeof n == "string" ? J_(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? J_(n) : [];
}, ji = new WeakSet(), dp = function(n) {
  const o = W(this, Rr, wc).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, Vi = new WeakSet(), pp = function() {
  const { placeholder: n, disabled: o } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: v(this, Yi),
    onDeselect: v(this, zi)
  };
}, zi = new WeakMap(), Yi = new WeakMap(), Gi = new WeakMap(), qi = new WeakMap(), Xi = new WeakSet(), mp = function() {
  const { search: n, menuClass: o, menuWidth: i, menuStyle: r, menuMaxHeight: l, menuMaxWidth: c } = this.props, { items: _ } = this.state;
  return {
    id: v(this, Dr),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: i,
    maxHeight: l,
    maxWidth: c,
    onRequestHide: v(this, Gi),
    onSelectItem: v(this, qi)
  };
}, L(lc, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), lc);
class Q_ extends kt {
}
L(Q_, "NAME", "picker"), L(Q_, "Component", e0);
var Wl, rt, gp, Do, tf, oi = {}, yp = [], n0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Pe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function vp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function bp(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Wl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return vs(t, l, o, i, null);
}
function vs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++gp };
  return i == null && rt.vnode != null && rt.vnode(r), r;
}
function Qr() {
  return { current: null };
}
function Il(t) {
  return t.children;
}
function No(t, e) {
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
function wp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return wp(t);
  }
}
function ef(t) {
  (!t.__d && (t.__d = !0) && Do.push(t) && !ri.__r++ || tf !== rt.debounceRendering) && ((tf = rt.debounceRendering) || setTimeout)(ri);
}
function ri() {
  for (var t; ri.__r = Do.length; )
    t = Do.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Do = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Pe({}, r)).__v = r.__v + 1, Jc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? cr(r), r.__h), Sp(o, r), r.__e != l && wp(r)));
    });
}
function $p(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || yp, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? vs(null, a, null, null, a) : Array.isArray(a) ? vs(Il, { children: a }, null, null, null) : a.__b > 0 ? vs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Jc(t, a, f = f || oi, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = kp(a, _, t) : _ = xp(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = cr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Ep(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Cp(p[s], p[++s], p[++s]);
}
function kp(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? kp(o, e, n) : xp(n, o, o, i, o.__e, e));
  return e;
}
function xp(t, e, n, o, i, r) {
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
function o0(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || si(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || si(t, r, e[r], n[r], o);
}
function nf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || n0.test(e) ? n : n + "px";
}
function si(t, e, n, o, i) {
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
function of(t) {
  this.l[t.type + !1](rt.event ? rt.event(t) : t);
}
function rf(t) {
  this.l[t.type + !0](rt.event ? rt.event(t) : t);
}
function Jc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = rt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new No(p, g), s.constructor = y, s.render = s0), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Pe({}, s.__s)), Pe(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = Pe(Pe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Il && h.key == null ? h.props.children : h, $p(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = r0(n.__e, e, n, o, i, r, l, _);
    (h = rt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), rt.__e(x, e, n);
  }
}
function Sp(t, e) {
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
function r0(t, e, n, o, i, r, l, c) {
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
    if (r = r && Wl.call(t.childNodes), h = (d = n.props || oi).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (o0(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, $p(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && cr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && vp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && si(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && si(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Cp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    rt.__e(o, n);
  }
}
function Ep(t, e, n) {
  var o, i;
  if (rt.unmount && rt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Cp(o, null, e)), (o = t.__c) != null) {
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
      o[i] && Ep(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || vp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function s0(t, e, n) {
  return this.constructor(t, n);
}
function i0(t, e, n) {
  var o, i, r;
  rt.__ && rt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Jc(e, t = (!o && n || e).__k = bp(Il, null, [t]), i || oi, oi, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Wl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Sp(r, t);
}
Wl = yp.slice, rt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, gp = 0, No.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pe({}, this.state), typeof t == "function" && (t = t(Pe({}, n), this.props)), t && Pe(n, t), t != null && this.__v && (e && this._sb.push(e), ef(this));
}, No.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ef(this));
}, No.prototype.render = Il, Do = [], ri.__r = 0;
var l0 = 0;
function Nt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --l0, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return rt.vnode && rt.vnode(_), _;
}
var ii = {}, c0 = {
  get exports() {
    return ii;
  },
  set exports(t) {
    ii = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(wd, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var S = ["th", "st", "nd", "rd"], $ = N % 100;
      return "[" + N + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(N, S, $) {
      var R = String(N);
      return !R || R.length >= S ? N : "" + Array(S + 1 - R.length).join($) + N;
    }, k = { s: w, z: function(N) {
      var S = -N.utcOffset(), $ = Math.abs(S), R = Math.floor($ / 60), T = $ % 60;
      return (S <= 0 ? "+" : "-") + w(R, 2, "0") + ":" + w(T, 2, "0");
    }, m: function N(S, $) {
      if (S.date() < $.date())
        return -N($, S);
      var R = 12 * ($.year() - S.year()) + ($.month() - S.month()), T = S.clone().add(R, d), O = $ - T < 0, P = S.clone().add(R + (O ? -1 : 1), d);
      return +(-(R + ($ - T) / (O ? T - P : P - T)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, C = "en", A = {};
    A[C] = g;
    var E = function(N) {
      return N instanceof z;
    }, y = function N(S, $, R) {
      var T;
      if (!S)
        return C;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        A[O] && (T = O), $ && (A[O] = $, T = O);
        var P = S.split("-");
        if (!T && P.length > 1)
          return N(P[0]);
      } else {
        var I = S.name;
        A[I] = S, T = I;
      }
      return !R && T && (C = T), T || !R && C;
    }, x = function(N, S) {
      if (E(N))
        return N.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = N, $.args = arguments, new z($);
    }, D = k;
    D.l = y, D.i = E, D.w = function(N, S) {
      return x(N, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var z = function() {
      function N($) {
        this.$L = y($.locale, null, !0), this.parse($);
      }
      var S = N.prototype;
      return S.parse = function($) {
        this.$d = function(R) {
          var T = R.date, O = R.utc;
          if (T === null)
            return new Date(NaN);
          if (D.u(T))
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
        return D;
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
        return D.u($) ? this[R] : this.set(T, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, R) {
        var T = this, O = !!D.u(R) || R, P = D.p($), I = function(st, G) {
          var it = D.w(T.$u ? Date.UTC(T.$y, G, st) : new Date(T.$y, G, st), T);
          return O ? it : it.endOf(h);
        }, V = function(st, G) {
          return D.w(T.toDate()[st].apply(T.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), T);
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
        var T, O = D.p($), P = "set" + (this.$u ? "UTC" : ""), I = (T = {}, T[h] = P + "Date", T[u] = P + "Date", T[d] = P + "Month", T[a] = P + "FullYear", T[_] = P + "Hours", T[c] = P + "Minutes", T[l] = P + "Seconds", T[r] = P + "Milliseconds", T)[O], V = O === h ? this.$D + (R - this.$W) : R;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[I](V), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](V);
        return this.init(), this;
      }, S.set = function($, R) {
        return this.clone().$set($, R);
      }, S.get = function($) {
        return this[D.p($)]();
      }, S.add = function($, R) {
        var T, O = this;
        $ = Number($);
        var P = D.p(R), I = function(X) {
          var vt = x(O);
          return D.w(vt.date(vt.date() + Math.round(X * $)), O);
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
        return D.w(j, this);
      }, S.subtract = function($, R) {
        return this.add(-1 * $, R);
      }, S.format = function($) {
        var R = this, T = this.$locale();
        if (!this.isValid())
          return T.invalidDate || b;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = D.z(this), I = this.$H, V = this.$m, j = this.$M, X = T.weekdays, vt = T.months, U = function(G, it, Et, At) {
          return G && (G[it] || G(R, O)) || Et[it].slice(0, At);
        }, K = function(G) {
          return D.s(I % 12 || 12, G, "0");
        }, yt = T.meridiem || function(G, it, Et) {
          var At = G < 12 ? "AM" : "PM";
          return Et ? At.toLowerCase() : At;
        }, st = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: D.s(j + 1, 2, "0"), MMM: U(T.monthsShort, j, vt, 3), MMMM: U(vt, j), D: this.$D, DD: D.s(this.$D, 2, "0"), d: String(this.$W), dd: U(T.weekdaysMin, this.$W, X, 2), ddd: U(T.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(I), HH: D.s(I, 2, "0"), h: K(1), hh: K(2), a: yt(I, V, !0), A: yt(I, V, !1), m: String(V), mm: D.s(V, 2, "0"), s: String(this.$s), ss: D.s(this.$s, 2, "0"), SSS: D.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(G, it) {
          return it || st[G] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, R, T) {
        var O, P = D.p(R), I = x($), V = (I.utcOffset() - this.utcOffset()) * o, j = this - I, X = D.m(this, I);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - V) / 6048e5, O[h] = (j - V) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, T ? X : D.a(X);
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
        return D.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), B = z.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(N) {
      B[N[1]] = function(S) {
        return this.$g(S, N[0], N[1]);
      };
    }), x.extend = function(N, S) {
      return N.$i || (N(S, z, x), N.$i = !0), x;
    }, x.locale = y, x.isDayjs = E, x.unix = function(N) {
      return x(1e3 * N);
    }, x.en = A[C], x.Ls = A, x.p = {}, x;
  });
})(c0);
const a0 = (t) => {
  const e = ii(`1989-01-01 ${t || "00:00:00"}`);
  return {
    hour: e.hour(),
    minute: e.minute(),
    second: e.second()
  };
};
function _0() {
  let t = new Array(24).fill(0), e = new Array(60).fill(0), n = new Array(60).fill(0);
  return t = t.map((o, i) => o + i), e = e.map((o, i) => o + i), n = n.map((o, i) => o + i), { hourList: t, minuteList: e, secondList: n };
}
class f0 extends No {
  constructor() {
    super(...arguments);
    L(this, "cellHeight", 24);
    L(this, "ref", Qr());
    L(this, "hourRef", Qr());
    L(this, "minuteRef", Qr());
    L(this, "secondRef", Qr());
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
    const i = a0(this.state.selectTime);
    return o.map((r) => {
      const l = i[n] === r, c = { ...i, [n]: r };
      return /* @__PURE__ */ Nt(
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
    const { showSeconds: n, style: o } = this.props, { hourList: i, minuteList: r, secondList: l } = _0();
    return /* @__PURE__ */ Nt("div", { className: F("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ Nt("div", { className: F("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ Nt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Nt("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", i) }) }),
        /* @__PURE__ */ Nt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Nt("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ Nt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Nt("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ Nt("div", { className: F("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ Nt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ Nt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function Yr(t) {
  return t.split("-")[1];
}
function Qc(t) {
  return t === "y" ? "height" : "width";
}
function qn(t) {
  return t.split("-")[0];
}
function Ul(t) {
  return ["top", "bottom"].includes(qn(t)) ? "x" : "y";
}
function sf(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = Ul(e), _ = Qc(c), h = o[_] / 2 - i[_] / 2, s = qn(e), d = c === "x";
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
  switch (Yr(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const u0 = async (t, e, n) => {
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
  } = sf(h, o, _), f = o, a = {}, u = 0;
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
      } = sf(h, f, _)), b = -1;
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
function h0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ap(t) {
  return typeof t != "number" ? h0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function li(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function d0(t, e) {
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
  } = e, u = Ap(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = li(await r.getClippingRect({
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
  }, C = li(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const p0 = Math.min, m0 = Math.max;
function g0(t, e, n) {
  return m0(t, p0(e, n));
}
const y0 = (t) => ({
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
    const h = Ap(o), s = {
      x: i,
      y: r
    }, d = Ul(l), f = Qc(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = g0(C, E, A), D = Yr(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - D,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), v0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ci(t) {
  return t.replace(/left|right|bottom|top/g, (e) => v0[e]);
}
function b0(t, e, n) {
  n === void 0 && (n = !1);
  const o = Yr(t), i = Ul(t), r = Qc(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = ci(l)), {
    main: l,
    cross: ci(l)
  };
}
const w0 = {
  start: "end",
  end: "start"
};
function $c(t) {
  return t.replace(/start|end/g, (e) => w0[e]);
}
function $0(t) {
  const e = ci(t);
  return [$c(t), e, $c(e)];
}
function k0(t, e, n) {
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
function x0(t, e, n, o) {
  const i = Yr(t);
  let r = k0(qn(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map($c)))), r;
}
const S0 = function(t) {
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
      } = t, p = qn(o), m = qn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [ci(l)] : $0(l));
      !d && a !== "none" && w.push(...x0(l, u, a, g));
      const k = [l, ...w], C = await d0(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: D,
          cross: z
        } = b0(o, r, g);
        A.push(C[D], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((D) => D <= 0)) {
        var y;
        const D = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[D];
        if (z)
          return {
            data: {
              index: D,
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
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
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
async function C0(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = qn(n), c = Yr(n), _ = Ul(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const E0 = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await C0(e, t);
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
  return Mp(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ts;
function Tp() {
  if (ts)
    return ts;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ts = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ts) : navigator.userAgent;
}
function de(t) {
  return t instanceof It(t).HTMLElement;
}
function ze(t) {
  return t instanceof It(t).Element;
}
function Mp(t) {
  return t instanceof It(t).Node;
}
function lf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = It(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Fl(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = ne(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function A0(t) {
  return ["table", "td", "th"].includes(Ve(t));
}
function ta(t) {
  const e = /firefox/i.test(Tp()), n = ne(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Lp() {
  return !/^((?!chrome|android).)*safari/i.test(Tp());
}
function ea(t) {
  return ["html", "body", "#document"].includes(Ve(t));
}
const cf = Math.min, Ro = Math.max, ai = Math.round;
function Dp(t) {
  const e = ne(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = ai(n) !== i || ai(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Np(t) {
  return ze(t) ? t : t.contextElement;
}
const Rp = {
  x: 1,
  y: 1
};
function mn(t) {
  const e = Np(t);
  if (!de(e))
    return Rp;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = Dp(e);
  let l = (r ? ai(n.width) : n.width) / o, c = (r ? ai(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function ar(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Np(t);
  let _ = Rp;
  e && (o ? ze(o) && (_ = mn(o)) : _ = mn(t));
  const h = c ? It(c) : window, s = !Lp() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = It(c), p = o && ze(o) ? It(o) : o;
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
function Xe(t) {
  return ((Mp(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Bl(t) {
  return ze(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Pp(t) {
  return ar(Xe(t)).left + Bl(t).scrollLeft;
}
function T0(t, e, n) {
  const o = de(e), i = Xe(e), r = ar(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Ve(e) !== "body" || Fl(i)) && (l = Bl(e)), de(e)) {
      const _ = ar(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = Pp(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function _r(t) {
  if (Ve(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (lf(t) ? t.host : null) || // Fallback
    Xe(t)
  );
  return lf(e) ? e.host : e;
}
function af(t) {
  return !de(t) || ne(t).position === "fixed" ? null : t.offsetParent;
}
function M0(t) {
  let e = _r(t);
  for (; de(e) && !ea(e); ) {
    if (ta(e))
      return e;
    e = _r(e);
  }
  return null;
}
function _f(t) {
  const e = It(t);
  let n = af(t);
  for (; n && A0(n) && ne(n).position === "static"; )
    n = af(n);
  return n && (Ve(n) === "html" || Ve(n) === "body" && ne(n).position === "static" && !ta(n)) ? e : n || M0(t) || e;
}
function L0(t) {
  return Dp(t);
}
function D0(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = de(n), r = Xe(n);
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
  if ((i || !i && o !== "fixed") && ((Ve(n) !== "body" || Fl(r)) && (l = Bl(n)), de(n))) {
    const h = ar(n);
    c = mn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function N0(t, e) {
  const n = It(t), o = Xe(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Lp();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function R0(t) {
  var e;
  const n = Xe(t), o = Bl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = Ro(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Ro(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Pp(t);
  const _ = -o.scrollTop;
  return ne(i || n).direction === "rtl" && (c += Ro(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Op(t) {
  const e = _r(t);
  return ea(e) ? t.ownerDocument.body : de(e) && Fl(e) ? e : Op(e);
}
function Hp(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Op(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = It(o);
  return i ? e.concat(r, r.visualViewport || [], Fl(o) ? o : []) : e.concat(o, Hp(o));
}
function P0(t, e) {
  const n = ar(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = de(t) ? mn(t) : {
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
function ff(t, e, n) {
  return e === "viewport" ? li(N0(t, n)) : ze(e) ? P0(e, n) : li(R0(Xe(t)));
}
function O0(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Hp(t).filter((c) => ze(c) && Ve(c) !== "body"), i = null;
  const r = ne(t).position === "fixed";
  let l = r ? _r(t) : t;
  for (; ze(l) && !ea(l); ) {
    const c = ne(l), _ = ta(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = _r(l);
  }
  return e.set(t, o), o;
}
function H0(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? O0(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = ff(e, s, i);
    return h.top = Ro(d.top, h.top), h.right = cf(d.right, h.right), h.bottom = cf(d.bottom, h.bottom), h.left = Ro(d.left, h.left), h;
  }, ff(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const W0 = {
  getClippingRect: H0,
  convertOffsetParentRelativeRectToViewportRelativeRect: D0,
  isElement: ze,
  getDimensions: L0,
  getOffsetParent: _f,
  getDocumentElement: Xe,
  getScale: mn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || _f, r = this.getDimensions;
    return {
      reference: T0(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => ne(t).direction === "rtl"
}, I0 = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: W0,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return u0(t, e, {
    ...i,
    platform: r
  });
};
var Pn, On, on, Pr, wt, Ki, Wp, Zi, Ip, Ji, Up, Qi, Fp, tl, Bp, el, jp, nl;
class Zt extends zt {
  constructor() {
    super(...arguments);
    M(this, Ki);
    M(this, Zi);
    M(this, Ji);
    M(this, Qi);
    M(this, tl);
    M(this, el);
    M(this, Pn, void 0);
    M(this, On, 0);
    M(this, on, void 0);
    M(this, Pr, void 0);
    M(this, wt, void 0);
    L(this, "hideLater", () => {
      v(this, nl).call(this), H(this, On, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, nl, () => {
      clearTimeout(v(this, On)), H(this, On, 0);
    });
  }
  get isShown() {
    var n;
    return (n = v(this, on)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get timepicker() {
    return v(this, on) || W(this, Ji, Up).call(this);
  }
  get trigger() {
    return v(this, Pr) || this.element;
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n) {
    return H(this, Pr, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(this.constructor.CLASS_SHOW), W(this, tl, Bp).call(this), !0);
  }
  hide() {
    var n;
    return this.element.classList.remove(this.elementShowClass), (n = v(this, on)) == null || n.classList.remove(this.constructor.CLASS_SHOW), !0;
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
}
Pn = new WeakMap(), On = new WeakMap(), on = new WeakMap(), Pr = new WeakMap(), wt = new WeakMap(), Ki = new WeakSet(), Wp = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 4;
}, Zi = new WeakSet(), Ip = function() {
  const n = document.createElement("div");
  return H(this, wt, n), v(this, wt).style.position = "absolute", v(this, wt).style.width = "8px", v(this, wt).style.height = "8px", v(this, wt).style.transform = "rotate(45deg)", v(this, wt).style.background = "inherit", v(this, wt).style.border = "inherit", v(this, wt).style.borderBottomStyle = "none", v(this, wt).style.borderRightStyle = "none", n;
}, Ji = new WeakSet(), Up = function() {
  const n = this.constructor.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), i0(bp(f0, { ...this.options }), o), this.options.arrow && o.append(W(this, Zi, Ip).call(this)), o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, on, o), o;
}, Qi = new WeakSet(), Fp = function() {
  var i;
  const n = W(this, Ki, Wp).call(this), o = {
    middleware: [E0(n + 3), S0()]
  };
  return this.options.arrow && v(this, wt) && ((i = o.middleware) == null || i.push(y0({ element: v(this, wt) }))), this.options.placement && (o.placement = this.options.placement), o;
}, tl = new WeakSet(), Bp = function() {
  const n = W(this, Qi, Fp).call(this);
  I0(W(this, el, jp).call(this), this.timepicker, n).then(({ x: o, y: i, middlewareData: r }) => {
    if (Object.assign(this.timepicker.style, {
      left: `${o}px`,
      top: `${i}px`
    }), this.options.placement) {
      const l = this.options.placement.split("-")[0], c = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[l];
      if (r.arrow && v(this, wt)) {
        const { x: _, y: h } = r.arrow;
        Object.assign(v(this, wt).style, {
          left: _ != null ? `${_}px` : "",
          top: h != null ? `${h}px` : "",
          [c]: `${-v(this, wt).offsetWidth / 2}px`
        });
      }
    }
  });
}, el = new WeakSet(), jp = function() {
  return v(this, Pn) || H(this, Pn, {
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
  }), v(this, Pn);
}, nl = new WeakMap(), L(Zt, "NAME", "timepicker"), L(Zt, "CLASSNAME", "timepicker"), L(Zt, "CLASS_SHOW", "show"), L(Zt, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), L(Zt, "DEFAULT", {
  value: ii().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  // trigger: 'click',
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Zt.MENU_SELECTOR);
  n ? Zt.ensure(n).toggle() : Zt.clear({ event: t });
});
const U0 = (t) => {
  const e = document.getElementsByClassName("with-timepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Zt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Zt.clear({ event: t });
};
window.addEventListener("scroll", U0, !0);
class uf extends kt {
}
L(uf, "NAME", "toolbar"), L(uf, "Component", Yn);
function Gr(t) {
  return t.split("-")[1];
}
function na(t) {
  return t === "y" ? "height" : "width";
}
function Xn(t) {
  return t.split("-")[0];
}
function jl(t) {
  return ["top", "bottom"].includes(Xn(t)) ? "x" : "y";
}
function hf(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = jl(e), _ = na(c), h = o[_] / 2 - i[_] / 2, s = Xn(e), d = c === "x";
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
  switch (Gr(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const F0 = async (t, e, n) => {
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
  } = hf(h, o, _), f = o, a = {}, u = 0;
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
      } = hf(h, f, _)), b = -1;
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
function B0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Vp(t) {
  return typeof t != "number" ? B0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function _i(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function j0(t, e) {
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
  } = e, u = Vp(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = _i(await r.getClippingRect({
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
  }, C = _i(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const V0 = Math.min, z0 = Math.max;
function Y0(t, e, n) {
  return z0(t, V0(e, n));
}
const G0 = (t) => ({
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
    const h = Vp(o), s = {
      x: i,
      y: r
    }, d = jl(l), f = na(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[b], E = w / 2 - a[f] / 2 + k, y = Y0(C, E, A), D = Gr(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[b]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - D,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), q0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function fi(t) {
  return t.replace(/left|right|bottom|top/g, (e) => q0[e]);
}
function X0(t, e, n) {
  n === void 0 && (n = !1);
  const o = Gr(t), i = jl(t), r = na(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = fi(l)), {
    main: l,
    cross: fi(l)
  };
}
const K0 = {
  start: "end",
  end: "start"
};
function kc(t) {
  return t.replace(/start|end/g, (e) => K0[e]);
}
function Z0(t) {
  const e = fi(t);
  return [kc(t), e, kc(e)];
}
function J0(t, e, n) {
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
function Q0(t, e, n, o) {
  const i = Gr(t);
  let r = J0(Xn(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(kc)))), r;
}
const tw = function(t) {
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
      } = t, p = Xn(o), m = Xn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [fi(l)] : Z0(l));
      !d && a !== "none" && w.push(...Q0(l, u, a, g));
      const k = [l, ...w], C = await j0(e, b), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: D,
          cross: z
        } = X0(o, r, g);
        A.push(C[D], C[z]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((D) => D <= 0)) {
        var y;
        const D = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, z = k[D];
        if (z)
          return {
            data: {
              index: D,
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
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, R) => $ + R, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
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
async function ew(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Xn(n), c = Gr(n), _ = jl(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
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
const nw = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await ew(e, t);
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
function Ye(t) {
  return Yp(t) ? (t.nodeName || "").toLowerCase() : "";
}
let es;
function zp() {
  if (es)
    return es;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (es = t.brands.map((e) => e.brand + "/" + e.version).join(" "), es) : navigator.userAgent;
}
function pe(t) {
  return t instanceof Ut(t).HTMLElement;
}
function Vt(t) {
  return t instanceof Ut(t).Element;
}
function Yp(t) {
  return t instanceof Ut(t).Node;
}
function df(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Ut(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Vl(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = oe(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function ow(t) {
  return ["table", "td", "th"].includes(Ye(t));
}
function oa(t) {
  const e = /firefox/i.test(zp()), n = oe(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Gp() {
  return !/^((?!chrome|android).)*safari/i.test(zp());
}
function ra(t) {
  return ["html", "body", "#document"].includes(Ye(t));
}
const pf = Math.min, Po = Math.max, ui = Math.round;
function qp(t) {
  const e = oe(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = ui(n) !== i || ui(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Xp(t) {
  return Vt(t) ? t : t.contextElement;
}
const Kp = {
  x: 1,
  y: 1
};
function gn(t) {
  const e = Xp(t);
  if (!pe(e))
    return Kp;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = qp(e);
  let l = (r ? ui(n.width) : n.width) / o, c = (r ? ui(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function _n(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Xp(t);
  let _ = Kp;
  e && (o ? Vt(o) && (_ = gn(o)) : _ = gn(t));
  const h = c ? Ut(c) : window, s = !Gp() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const b = Ut(c), p = o && Vt(o) ? Ut(o) : o;
    let m = b.frameElement;
    for (; m && o && p !== b; ) {
      const g = gn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
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
function Ke(t) {
  return ((Yp(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function zl(t) {
  return Vt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Zp(t) {
  return _n(Ke(t)).left + zl(t).scrollLeft;
}
function rw(t, e, n) {
  const o = pe(e), i = Ke(e), r = _n(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Ye(e) !== "body" || Vl(i)) && (l = zl(e)), pe(e)) {
      const _ = _n(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = Zp(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function fr(t) {
  if (Ye(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (df(t) ? t.host : null) || // Fallback
    Ke(t)
  );
  return df(e) ? e.host : e;
}
function mf(t) {
  return !pe(t) || oe(t).position === "fixed" ? null : t.offsetParent;
}
function sw(t) {
  let e = fr(t);
  for (; pe(e) && !ra(e); ) {
    if (oa(e))
      return e;
    e = fr(e);
  }
  return null;
}
function gf(t) {
  const e = Ut(t);
  let n = mf(t);
  for (; n && ow(n) && oe(n).position === "static"; )
    n = mf(n);
  return n && (Ye(n) === "html" || Ye(n) === "body" && oe(n).position === "static" && !oa(n)) ? e : n || sw(t) || e;
}
function iw(t) {
  return qp(t);
}
function lw(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = pe(n), r = Ke(n);
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
  if ((i || !i && o !== "fixed") && ((Ye(n) !== "body" || Vl(r)) && (l = zl(n)), pe(n))) {
    const h = _n(n);
    c = gn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function cw(t, e) {
  const n = Ut(t), o = Ke(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Gp();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function aw(t) {
  var e;
  const n = Ke(t), o = zl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = Po(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Po(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Zp(t);
  const _ = -o.scrollTop;
  return oe(i || n).direction === "rtl" && (c += Po(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Jp(t) {
  const e = fr(t);
  return ra(e) ? t.ownerDocument.body : pe(e) && Vl(e) ? e : Jp(e);
}
function Oo(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Jp(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ut(o);
  return i ? e.concat(r, r.visualViewport || [], Vl(o) ? o : []) : e.concat(o, Oo(o));
}
function _w(t, e) {
  const n = _n(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = pe(t) ? gn(t) : {
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
function yf(t, e, n) {
  return e === "viewport" ? _i(cw(t, n)) : Vt(e) ? _w(e, n) : _i(aw(Ke(t)));
}
function fw(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Oo(t).filter((c) => Vt(c) && Ye(c) !== "body"), i = null;
  const r = oe(t).position === "fixed";
  let l = r ? fr(t) : t;
  for (; Vt(l) && !ra(l); ) {
    const c = oe(l), _ = oa(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = fr(l);
  }
  return e.set(t, o), o;
}
function uw(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? fw(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = yf(e, s, i);
    return h.top = Po(d.top, h.top), h.right = pf(d.right, h.right), h.bottom = pf(d.bottom, h.bottom), h.left = Po(d.left, h.left), h;
  }, yf(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const hw = {
  getClippingRect: uw,
  convertOffsetParentRelativeRectToViewportRelativeRect: lw,
  isElement: Vt,
  getDimensions: iw,
  getOffsetParent: gf,
  getDocumentElement: Ke,
  getScale: gn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || gf, r = this.getDimensions;
    return {
      reference: rw(e, await i(n), o),
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
function dw(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Vt(t) ? Oo(t) : t.contextElement ? Oo(t.contextElement) : [], ...Oo(e)] : [];
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
const pw = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: hw,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return F0(t, e, {
    ...i,
    platform: r
  });
};
var Hn, Wn, In, rn, St, ol, Or, Hr, xc, rl, Qp, sl, tm, il, em, ll, nm, cl, om, al, rm, _l, sm, Un, fl, im;
const Je = class extends zt {
  constructor() {
    super(...arguments);
    M(this, Hr);
    M(this, rl);
    M(this, sl);
    M(this, il);
    M(this, ll);
    M(this, cl);
    M(this, al);
    M(this, _l);
    M(this, fl);
    M(this, Hn, !1);
    M(this, Wn, void 0);
    M(this, In, 0);
    M(this, rn, void 0);
    M(this, St, void 0);
    M(this, ol, void 0);
    M(this, Or, void 0);
    L(this, "hideLater", () => {
      v(this, Un).call(this), H(this, In, window.setTimeout(this.hide.bind(this), 100));
    });
    M(this, Un, () => {
      clearTimeout(v(this, In)), H(this, In, 0);
    });
  }
  get isShown() {
    var n;
    return (n = v(this, rn)) == null ? void 0 : n.classList.contains(Je.CLASS_SHOW);
  }
  get tooltip() {
    return v(this, rn) || W(this, sl, tm).call(this);
  }
  get trigger() {
    return v(this, ol) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Je.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !v(this, Hn) && this.isHover && W(this, fl, im).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Je.CLASS_SHOW), W(this, al, rm).call(this), !0;
  }
  hide() {
    var n, o;
    return (n = v(this, Or)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = v(this, rn)) == null || o.classList.remove(Je.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    v(this, Hn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", v(this, Un)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, i = this.getAll().entries(), r = new Set(o || []);
    for (const [l, c] of i)
      r.has(l) || c.hide();
  }
};
let Ot = Je;
Hn = new WeakMap(), Wn = new WeakMap(), In = new WeakMap(), rn = new WeakMap(), St = new WeakMap(), ol = new WeakMap(), Or = new WeakMap(), Hr = new WeakSet(), xc = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, rl = new WeakSet(), Qp = function() {
  const n = W(this, Hr, xc).call(this);
  return H(this, St, document.createElement("div")), v(this, St).style.position = this.options.strategy, v(this, St).style.width = `${n}px`, v(this, St).style.height = `${n}px`, v(this, St).style.transform = "rotate(45deg)", v(this, St);
}, sl = new WeakSet(), tm = function() {
  var i;
  const n = Je.TOOLTIP_CLASS;
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
  if (this.options.arrow && (o == null || o.append(W(this, rl, Qp).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, rn, o), o;
}, il = new WeakSet(), em = function() {
  var l;
  const n = W(this, Hr, xc).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [nw(n), tw()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && v(this, St) && ((l = r.middleware) == null || l.push(G0({ element: v(this, St) }))), r;
}, ll = new WeakSet(), nm = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, cl = new WeakSet(), om = function(n) {
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
}, al = new WeakSet(), rm = function() {
  const n = W(this, il, em).call(this), o = W(this, _l, sm).call(this);
  H(this, Or, dw(o, this.tooltip, () => {
    pw(o, this.tooltip, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, ll, nm).call(this, _);
      if (l.arrow && v(this, St)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(v(this, St).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-v(this, St).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, cl, om).call(this, _)
        });
      }
    });
  }));
}, _l = new WeakSet(), sm = function() {
  return v(this, Wn) || H(this, Wn, {
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
  }), v(this, Wn);
}, Un = new WeakMap(), fl = new WeakSet(), im = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", v(this, Un)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Hn, !0);
}, L(Ot, "NAME", "tooltip"), L(Ot, "TOOLTIP_CLASS", "tooltip"), L(Ot, "CLASS_SHOW", "show"), L(Ot, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), L(Ot, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Ot.MENU_SELECTOR);
  if (n) {
    const o = Ot.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Ot.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(Ot.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Ot.ensure(n);
  o.isHover && o.show();
});
var lm, pt, cm, Ho, vf, am = {}, _m = [], mw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Oe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function fm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ec(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++cm };
  return i == null && pt.vnode != null && pt.vnode(r), r;
}
function sa(t) {
  return t.children;
}
function Wo(t, e) {
  this.props = t, this.context = e;
}
function ur(t, e) {
  if (e == null)
    return t.__ ? ur(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? ur(t) : null;
}
function um(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return um(t);
  }
}
function bf(t) {
  (!t.__d && (t.__d = !0) && Ho.push(t) && !hi.__r++ || vf !== pt.debounceRendering) && ((vf = pt.debounceRendering) || setTimeout)(hi);
}
function hi() {
  for (var t; hi.__r = Ho.length; )
    t = Ho.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Ho = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Oe({}, r)).__v = r.__v + 1, mm(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? ur(r), r.__h), yw(o, r), r.__e != l && um(r)));
    });
}
function hm(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || _m, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ec(null, a, null, null, a) : Array.isArray(a) ? ec(sa, { children: a }, null, null, null) : a.__b > 0 ? ec(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      mm(t, a, f = f || am, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = dm(a, _, t) : _ = pm(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = ur(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && ym(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      gm(p[s], p[++s], p[++s]);
}
function dm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? dm(o, e, n) : pm(n, o, o, i, o.__e, e));
  return e;
}
function pm(t, e, n, o, i, r) {
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
function gw(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || di(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || di(t, r, e[r], n[r], o);
}
function wf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || mw.test(e) ? n : n + "px";
}
function di(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || wf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || wf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? kf : $f, r) : t.removeEventListener(e, r ? kf : $f, r);
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
function $f(t) {
  this.l[t.type + !1](pt.event ? pt.event(t) : t);
}
function kf(t) {
  this.l[t.type + !0](pt.event ? pt.event(t) : t);
}
function mm(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = pt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Wo(p, g), s.constructor = y, s.render = bw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Oe({}, s.__s)), Oe(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = Oe(Oe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === sa && h.key == null ? h.props.children : h, hm(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = vw(n.__e, e, n, o, i, r, l, _);
    (h = pt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), pt.__e(x, e, n);
  }
}
function yw(t, e) {
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
function vw(t, e, n, o, i, r, l, c) {
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
    if (r = r && lm.call(t.childNodes), h = (d = n.props || am).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (gw(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, hm(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && ur(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && fm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && di(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && di(t, "checked", u, d.checked, !1));
  }
  return t;
}
function gm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    pt.__e(o, n);
  }
}
function ym(t, e, n) {
  var o, i;
  if (pt.unmount && pt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || gm(o, null, e)), (o = t.__c) != null) {
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
      o[i] && ym(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || fm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function bw(t, e, n) {
  return this.constructor(t, n);
}
lm = _m.slice, pt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, cm = 0, Wo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Oe({}, this.state), typeof t == "function" && (t = t(Oe({}, n), this.props)), t && Oe(n, t), t != null && this.__v && (e && this._sb.push(e), bf(this));
}, Wo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), bf(this));
}, Wo.prototype.render = sa, Ho = [], hi.__r = 0;
var ww = 0;
function pi(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ww, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pt.vnode && pt.vnode(_), _;
}
function $w({
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
  d ? a = d(t, c) : l ? a = /* @__PURE__ */ pi(l, { ...h }) : a = c;
  const { left: u, top: b, width: p, height: m } = o;
  return /* @__PURE__ */ pi("div", { style: { width: p, height: m, left: u + i, top: b + r, ...n }, ...f, children: [
    a,
    s
  ] });
}
function kw(t, e, n = 0, o = 0) {
  const i = t.left + n, r = t.top + o;
  return !(i > e.left + e.width || r > e.top + e.height || i + t.width < e.left || r + t.height < e.top);
}
let xw = class extends Wo {
  render() {
    const { width: e, height: n, cells: o, left: i, top: r, visibleBounding: l, onRenderCell: c, style: _, children: h, offsetX: s = 0, offsetY: d = 0, ...f } = this.props, a = l ? o.filter((u) => kw(u.bounding, l, s, d)) : o;
    return /* @__PURE__ */ pi("div", { style: { width: e, height: n, left: i, top: r, ..._ }, ...f, children: [
      a.map((u) => /* @__PURE__ */ pi($w, { offsetX: s, offsetY: d, ...u })),
      h
    ] });
  }
};
class xf extends kt {
}
L(xf, "NAME", "virtualgrid"), L(xf, "Component", xw);
var ia, mt, vm, bm, Io, Sf, wm = {}, $m = [], Sw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function He(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function km(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function la(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ia.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return bs(t, l, o, i, null);
}
function bs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++vm };
  return i == null && mt.vnode != null && mt.vnode(r), r;
}
function Cw() {
  return { current: null };
}
function ca(t) {
  return t.children;
}
function Uo(t, e) {
  this.props = t, this.context = e;
}
function hr(t, e) {
  if (e == null)
    return t.__ ? hr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? hr(t) : null;
}
function xm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return xm(t);
  }
}
function Cf(t) {
  (!t.__d && (t.__d = !0) && Io.push(t) && !mi.__r++ || Sf !== mt.debounceRendering) && ((Sf = mt.debounceRendering) || setTimeout)(mi);
}
function mi() {
  for (var t; mi.__r = Io.length; )
    t = Io.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Io = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = He({}, r)).__v = r.__v + 1, Am(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? hr(r), r.__h), Aw(o, r), r.__e != l && xm(r)));
    });
}
function Sm(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || $m, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? bs(null, a, null, null, a) : Array.isArray(a) ? bs(ca, { children: a }, null, null, null) : a.__b > 0 ? bs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Am(t, a, f = f || wm, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Cm(a, _, t) : _ = Em(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = hr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Mm(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Tm(p[s], p[++s], p[++s]);
}
function Cm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Cm(o, e, n) : Em(n, o, o, i, o.__e, e));
  return e;
}
function Em(t, e, n, o, i, r) {
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
function Ew(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || gi(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || gi(t, r, e[r], n[r], o);
}
function Ef(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Sw.test(e) ? n : n + "px";
}
function gi(t, e, n, o, i) {
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
  this.l[t.type + !1](mt.event ? mt.event(t) : t);
}
function Tf(t) {
  this.l[t.type + !0](mt.event ? mt.event(t) : t);
}
function Am(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = mt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Uo(p, g), s.constructor = y, s.render = Mw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = He({}, s.__s)), He(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = He(He({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === ca && h.key == null ? h.props.children : h, Sm(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Tw(n.__e, e, n, o, i, r, l, _);
    (h = mt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), mt.__e(x, e, n);
  }
}
function Aw(t, e) {
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
function Tw(t, e, n, o, i, r, l, c) {
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
    if (r = r && ia.call(t.childNodes), h = (d = n.props || wm).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Ew(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Sm(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && hr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && km(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && gi(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && gi(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Tm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    mt.__e(o, n);
  }
}
function Mm(t, e, n) {
  var o, i;
  if (mt.unmount && mt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Tm(o, null, e)), (o = t.__c) != null) {
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
      o[i] && Mm(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || km(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Mw(t, e, n) {
  return this.constructor(t, n);
}
ia = $m.slice, mt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, vm = 0, bm = function(t) {
  return t != null && t.constructor === void 0;
}, Uo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = He({}, this.state), typeof t == "function" && (t = t(He({}, n), this.props)), t && He(n, t), t != null && this.__v && (e && this._sb.push(e), Cf(this));
}, Uo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Cf(this));
}, Uo.prototype.render = ca, Io = [], mi.__r = 0;
var Lw = 0;
function Y(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Lw, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return mt.vnode && mt.vnode(_), _;
}
let Dw = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Lm, gt, Dm, Fo, Mf, Nm = {}, Rm = [], Nw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function We(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Pm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function nc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Dm };
  return i == null && gt.vnode != null && gt.vnode(r), r;
}
function aa(t) {
  return t.children;
}
function Bo(t, e) {
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
function Om(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Om(t);
  }
}
function Lf(t) {
  (!t.__d && (t.__d = !0) && Fo.push(t) && !yi.__r++ || Mf !== gt.debounceRendering) && ((Mf = gt.debounceRendering) || setTimeout)(yi);
}
function yi() {
  for (var t; yi.__r = Fo.length; )
    t = Fo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Fo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = We({}, r)).__v = r.__v + 1, Um(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? dr(r), r.__h), Pw(o, r), r.__e != l && Om(r)));
    });
}
function Hm(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, b, p, m = o && o.__k || Rm, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? nc(null, a, null, null, a) : Array.isArray(a) ? nc(aa, { children: a }, null, null, null) : a.__b > 0 ? nc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
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
      Um(t, a, f = f || Nm, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (b == null && (b = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Wm(a, _, t) : _ = Im(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = dr(f));
    }
  for (n.__e = b, s = g; s--; )
    m[s] != null && Bm(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Fm(p[s], p[++s], p[++s]);
}
function Wm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Wm(o, e, n) : Im(n, o, o, i, o.__e, e));
  return e;
}
function Im(t, e, n, o, i, r) {
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
    r === "children" || r === "key" || r in e || vi(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || vi(t, r, e[r], n[r], o);
}
function Df(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Nw.test(e) ? n : n + "px";
}
function vi(t, e, n, o, i) {
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
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Rf : Nf, r) : t.removeEventListener(e, r ? Rf : Nf, r);
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
function Nf(t) {
  this.l[t.type + !1](gt.event ? gt.event(t) : t);
}
function Rf(t) {
  this.l[t.type + !0](gt.event ? gt.event(t) : t);
}
function Um(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, b, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = gt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? b = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Bo(p, g), s.constructor = y, s.render = Hw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = We({}, s.__s)), We(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
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
        s.state = s.__s, s.getChildContext != null && (o = We(We({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === aa && h.key == null ? h.props.children : h, Hm(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), b && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ow(n.__e, e, n, o, i, r, l, _);
    (h = gt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), gt.__e(x, e, n);
  }
}
function Pw(t, e) {
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
    if (r = r && Lm.call(t.childNodes), h = (d = n.props || Nm).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Rw(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Hm(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && dr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Pm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && vi(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && vi(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Fm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    gt.__e(o, n);
  }
}
function Bm(t, e, n) {
  var o, i;
  if (gt.unmount && gt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Fm(o, null, e)), (o = t.__c) != null) {
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
      o[i] && Bm(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Pm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Hw(t, e, n) {
  return this.constructor(t, n);
}
Lm = Rm.slice, gt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Dm = 0, Bo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = We({}, this.state), typeof t == "function" && (t = t(We({}, n), this.props)), t && We(n, t), t != null && this.__v && (e && this._sb.push(e), Lf(this));
}, Bo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Lf(this));
}, Bo.prototype.render = aa, Fo = [], yi.__r = 0;
var Ww = 0;
function Pf(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ww, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return gt.vnode && gt.vnode(_), _;
}
var sn, ln;
class Of extends Bo {
  constructor(n) {
    super(n);
    M(this, sn, 0);
    M(this, ln, null);
    L(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, i = n.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    L(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (v(this, sn) && cancelAnimationFrame(v(this, sn)), H(this, sn, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), H(this, sn, 0);
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
    n && (H(this, ln, typeof n == "string" ? document : n.current), v(this, ln).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), v(this, ln) && v(this, ln).removeEventListener("wheel", this._handleWheel);
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
    return o === "horz" ? (u.height = i, u.width = n, b.width = this.barSize, b.left = Math.round(Math.min(d, f) * (n - b.width) / d)) : (u.width = i, u.height = n, b.height = this.barSize, b.top = Math.round(Math.min(d, f) * (n - b.height) / d)), /* @__PURE__ */ Pf(
      "div",
      {
        className: F("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": a
        }),
        style: u,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ Pf(
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
sn = new WeakMap(), ln = new WeakMap();
function Hf(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function jm({ col: t, className: e, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
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
  }], b = ["dtable-cell-content", e], p = [c ?? ((y = o.data) == null ? void 0 : y[t.name]) ?? ""], m = i ? i(p, { row: o, col: t }, la) : p, g = [], w = [], k = {}, C = {};
  let A = "div";
  m == null || m.forEach((x) => {
    if (typeof x == "object" && x && !bm(x) && ("html" in x || "className" in x || "style" in x || "attrs" in x || "children" in x || "tagName" in x)) {
      const D = x.outer ? g : w;
      x.html ? D.push(/* @__PURE__ */ Y("div", { className: F("dtable-cell-html", x.className), style: x.style, dangerouslySetInnerHTML: { __html: x.html }, ...x.attrs ?? {} })) : (x.style && Object.assign(x.outer ? s : a, x.style), x.className && (x.outer ? u : b).push(x.className), x.children && D.push(x.children), x.attrs && Object.assign(x.outer ? k : C, x.attrs)), x.tagName && !x.outer && (A = x.tagName);
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
function oc({ row: t, className: e, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: c = jm, onRenderCell: _ }) {
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
function Vm({
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
  CellComponent: f = jm,
  onRenderCell: a,
  style: u,
  ...b
}) {
  let p = null;
  i != null && i.length && (p = /* @__PURE__ */ Y(
    oc,
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
    oc,
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
    oc,
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
function Iw({ height: t, onRenderRow: e, ...n }) {
  const o = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const i = e({ props: o }, la);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ Y("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ Y(Vm, { ...o }) });
}
function Uw({
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
    }, d = c == null ? void 0 : c({ props: s, row: h }, la);
    return d && Object.assign(s, d), /* @__PURE__ */ Y(Vm, { ...s });
  }) });
}
const bi = /* @__PURE__ */ new Map(), wi = [];
function zm(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && bi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  bi.set(n, t), e != null && e.buildIn && !wi.includes(n) && wi.push(n);
}
function Zn(t, e) {
  zm(t, e);
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
function Ym(t) {
  return bi.delete(t);
}
function Fw(t) {
  if (typeof t == "string") {
    const e = bi.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function Gm(t, e, n) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = Fw(o);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Gm(t, i.plugins, n), t.push(i), n.add(i.name)));
  }), t;
}
function Bw(t = [], e = !0) {
  return e && wi.length && t.unshift(...wi), t != null && t.length ? Gm([], t, /* @__PURE__ */ new Set()) : [];
}
function Wf() {
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
var os, cn, Fn, we, Xt, $e, $t, Bt, Kt, Bn, Wr, Ir, fe, jn, Vn, ul, qm, hl, Xm, dl, Km, pl, Zm, Ur, Sc, ml, gl, Fr, Br, yl, vl, bl, Jm, wl, Qm, $l, tg;
let jw = (os = class extends Uo {
  constructor(n) {
    super(n);
    M(this, ul);
    M(this, hl);
    M(this, dl);
    M(this, pl);
    M(this, Ur);
    M(this, bl);
    M(this, wl);
    M(this, $l);
    L(this, "ref", Cw());
    M(this, cn, 0);
    M(this, Fn, void 0);
    M(this, we, !1);
    M(this, Xt, void 0);
    M(this, $e, void 0);
    M(this, $t, []);
    M(this, Bt, void 0);
    M(this, Kt, /* @__PURE__ */ new Map());
    M(this, Bn, {});
    M(this, Wr, void 0);
    M(this, Ir, []);
    L(this, "updateLayout", () => {
      v(this, cn) && cancelAnimationFrame(v(this, cn)), H(this, cn, requestAnimationFrame(() => {
        H(this, Bt, void 0), this.forceUpdate(), H(this, cn, 0);
      }));
    });
    M(this, fe, (n, o) => {
      o = o || n.type;
      const i = v(this, Kt).get(o);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    M(this, jn, (n) => {
      v(this, fe).call(this, n, `window_${n.type}`);
    });
    M(this, Vn, (n) => {
      v(this, fe).call(this, n, `document_${n.type}`);
    });
    M(this, ml, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return v(this, $t).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    M(this, gl, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), v(this, $t).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    M(this, Fr, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, i)), this.options[c] && (n = this.options[c].call(this, n, o, i)), v(this, $t).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, i));
      }), n;
    });
    M(this, Br, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    M(this, yl, (n) => {
      var c, _, h, s, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), v(this, $t).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === i);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of v(this, $t))
            if (((h = u.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
          return;
        for (const u of v(this, $t))
          if (((d = u.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    M(this, vl, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, Fn, n.id ?? `dtable-${Dw(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, $e, Object.freeze(Bw(n.plugins))), v(this, $e).forEach((o) => {
      var c;
      const { methods: i, data: r, state: l } = o;
      i && Object.entries(i).forEach(([_, h]) => {
        typeof h == "function" && Object.assign(this, { [_]: h.bind(this) });
      }), r && Object.assign(v(this, Bn), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = v(this, Bt)) == null ? void 0 : n.options) || v(this, Xt) || Wf();
  }
  get plugins() {
    return v(this, $t);
  }
  get layout() {
    return v(this, Bt);
  }
  get id() {
    return v(this, Fn);
  }
  get data() {
    return v(this, Bn);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, Xt, void 0);
  }
  componentDidMount() {
    if (v(this, we) ? this.forceUpdate() : W(this, Ur, Sc).call(this), v(this, $t).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", v(this, yl)), this.on("keydown", v(this, vl)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, Wr, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    v(this, $t).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    v(this, we) ? W(this, Ur, Sc).call(this) : v(this, $t).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = v(this, Wr)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of v(this, Kt).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), v(this, jn)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), v(this, Vn)) : n.removeEventListener(i, v(this, fe));
    v(this, $t).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), v(this, $e).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), H(this, Bn, {}), v(this, Kt).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = v(this, Kt).get(n);
    r ? r.push(o) : (v(this, Kt).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), v(this, jn)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), v(this, Vn)) : (l = this.ref.current) == null || l.addEventListener(n, v(this, fe)));
  }
  off(n, o, i) {
    var c;
    i && (n = `${i}_${n}`);
    const r = v(this, Kt).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (v(this, Kt).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), v(this, jn)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), v(this, Vn)) : (c = this.ref.current) == null || c.removeEventListener(n, v(this, fe)));
  }
  emitCustomEvent(n, o) {
    v(this, fe).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
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
    if (!v(this, Xt))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      H(this, Bt, void 0);
    else if (i === "options") {
      if (H(this, Xt, void 0), !v(this, Bt))
        return;
      H(this, Bt, void 0);
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
    return jr(v(this, Ir), n, o, i, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = W(this, $l, tg).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], f = [];
    return n && v(this, $t).forEach((a) => {
      var b;
      const u = (b = a.onRender) == null ? void 0 : b.call(this, n);
      u && (u.style && Object.assign(s, u.style), u.className && d.push(u.className), u.children && f.push(u.children));
    }), /* @__PURE__ */ Y(
      "div",
      {
        id: v(this, Fn),
        className: F(d),
        style: s,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && W(this, ul, qm).call(this, n),
          n && W(this, hl, Xm).call(this, n),
          n && W(this, dl, Km).call(this, n),
          n && W(this, pl, Zm).call(this, n)
        ]
      }
    );
  }
}, cn = new WeakMap(), Fn = new WeakMap(), we = new WeakMap(), Xt = new WeakMap(), $e = new WeakMap(), $t = new WeakMap(), Bt = new WeakMap(), Kt = new WeakMap(), Bn = new WeakMap(), Wr = new WeakMap(), Ir = new WeakMap(), fe = new WeakMap(), jn = new WeakMap(), Vn = new WeakMap(), ul = new WeakSet(), qm = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ Y(
      Iw,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: v(this, Fr),
        onRenderRow: v(this, gl),
        ...i
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    _c,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, hl = new WeakSet(), Xm = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ Y(
    Uw,
    {
      top: o,
      height: i,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: h,
      onRenderCell: v(this, Fr),
      onRenderRow: v(this, ml),
      ...c
    }
  );
}, dl = new WeakSet(), Km = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    _c,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: i,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, pl = new WeakSet(), Zm = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: s, scrollWidth: d } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > d && o.push(
    /* @__PURE__ */ Y(
      Of,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: s,
        clientSize: d,
        onScroll: v(this, Br),
        left: r.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -f) + h,
        size: f,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > c && o.push(
    /* @__PURE__ */ Y(
      Of,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: c,
        onScroll: v(this, Br),
        right: 0,
        size: f,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, Ur = new WeakSet(), Sc = function() {
  var n;
  H(this, we, !1), (n = this.options.afterRender) == null || n.call(this), v(this, $t).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, ml = new WeakMap(), gl = new WeakMap(), Fr = new WeakMap(), Br = new WeakMap(), yl = new WeakMap(), vl = new WeakMap(), bl = new WeakSet(), Jm = function() {
  if (v(this, Xt))
    return !1;
  const o = { ...Wf(), ...v(this, $e).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return H(this, Xt, o), H(this, $t, v(this, $e).reduce((i, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (i.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), i;
  }, [])), H(this, Ir, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, wl = new WeakSet(), Qm = function() {
  var X, vt;
  const { plugins: n } = this;
  let o = v(this, Xt);
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
      ...lg
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
        ...lg
      },
      flex: st ? 0 : G === !0 ? 1 : typeof G == "number" ? G : 0,
      left: 0,
      width: Hf(it, Et, At),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((ha) => {
      var da, pa;
      const qr = (da = ha.colTypes) == null ? void 0 : da[yt];
      if (qr) {
        const ma = typeof qr == "function" ? qr(J) : qr;
        ma && Object.assign(J.setting, ma);
      }
      (pa = ha.onAddCol) == null || pa.call(this, J);
    }), J.width = Hf(J.setting.width ?? J.width, J.setting.minWidth ?? Et, J.setting.maxWidth ?? At), J.realWidth = J.realWidth || J.width, st === "left" ? (J.left = u, u += J.width, _.push(J)) : st === "right" ? (J.left = b, b += J.width, h.push(J)) : (J.left = p, p += J.width, s.push(J)), J.flex && a.push(J), f.push(J), d[J.name] = J;
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
      g = 0, H(this, we, !0);
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
  const D = {};
  if (o.onAddRows) {
    const U = o.onAddRows.call(this, x);
    U && (x = U);
  }
  for (const U of n) {
    const K = (X = U.onAddRows) == null ? void 0 : X.call(this, x);
    K && (x = K);
  }
  x.forEach((U, K) => {
    D[U.id] = U, U.index = K, U.top = U.index * A;
  });
  const { header: z, footer: B } = o, N = z ? o.headerHeight || A : 0, S = B ? o.footerHeight || A : 0;
  let $ = o.height, R = 0;
  const T = x.length * A, O = N + S + T;
  if (typeof $ == "function" && ($ = $.call(this, O)), $ === "auto")
    R = O;
  else if (typeof $ == "object")
    R = Math.min($.max, Math.max($.min, O));
  else if ($ === "100%") {
    const { parent: U } = this;
    if (U)
      R = U.clientHeight;
    else {
      R = 0, H(this, we, !0);
      return;
    }
  } else
    R = $;
  const P = R - N - S, I = g - u - b, V = {
    options: o,
    allRows: E,
    width: g,
    height: R,
    rows: x,
    rowsMap: D,
    rowHeight: A,
    rowsHeight: P,
    rowsHeightTotal: T,
    header: z,
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
  }, j = (vt = o.onLayout) == null ? void 0 : vt.call(this, V);
  j && Object.assign(V, j), n.forEach((U) => {
    if (U.onLayout) {
      const K = U.onLayout.call(this, V);
      K && Object.assign(V, K);
    }
  }), H(this, Bt, V);
}, $l = new WeakSet(), tg = function() {
  (W(this, bl, Jm).call(this) || !v(this, Bt)) && W(this, wl, Qm).call(this);
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
}, L(os, "addPlugin", zm), L(os, "removePlugin", Ym), os);
function If(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(o));
}
const Vw = {
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
      If(this, o);
    },
    mouseleave() {
      If(this, !1);
    }
  }
}, zw = Zn(Vw, { buildIn: !0 });
function Yw(t, e) {
  var l, c;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (_, h) => {
    i && !i.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !eg.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
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
function Gw(t) {
  return this.state.checkedRows[t] ?? !1;
}
function eg() {
  var n, o;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (e.call(this, r.id) ? 1 : 0), 0)) : t === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function qw() {
  return Object.keys(this.state.checkedRows);
}
const Xw = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Yw,
    isRowChecked: Gw,
    isAllRowChecked: eg,
    getChecks: qw
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
}, Kw = Zn(Xw);
var ng = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(ng || {});
function Cc(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, o = e.children && n && n[t];
  let i = !1, { parent: r } = e;
  for (; r; ) {
    const l = Cc.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return e.state = i ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Cc.call(this, e.parent).level + 1 : 0, e;
}
function Zw(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !og.call(this)), e) {
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
function og() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function rg(t, e = 0, n, o = 0) {
  var i;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const l = t.get(r);
    l && (l.level === o && (l.order = e++), (i = l.children) != null && i.length && (e = rg(t, e, l.children, o + 1)));
  }
  return e;
}
function sg(t, e, n, o) {
  const i = t.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, sg(t, r, n, o);
  }), i;
}
function ig(t, e, n, o, i) {
  var c;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : i[_]);
    return n === h;
  })) && (o[e] = n), r.parent && ig(t, r.parent, n, o, i);
}
const Jw = {
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
        const l = sg(this, i, r, o);
        l != null && l.parent && ig(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: Zw,
    isAllCollapsed: og,
    getNestedRowInfo: Cc
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
    ), rg(this.data.nestedMap), t.sort((e, n) => {
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
}, Qw = Zn(Jw);
const t$ = {
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
        return typeof o == "function" ? t[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? t[0] = bc(r, o) : i === "html" ? t[0] = { html: Lt(o, r) } : t[0] = Lt(o, r), t;
      }
    }
  }
}, e$ = Zn(t$, { buildIn: !0 }), n$ = {
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
}, o$ = Zn(n$, { buildIn: !0 }), r$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: ng,
  checkable: Kw,
  colHover: zw,
  nested: Qw,
  rich: e$,
  sortType: o$
}, Symbol.toStringTag, { value: "Module" }));
class Qn extends kt {
}
L(Qn, "NAME", "dtable"), L(Qn, "Component", jw), L(Qn, "definePlugin", Zn), L(Qn, "removePlugin", Ym), L(Qn, "plugins", r$);
var Rt;
class io extends zt {
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
Rt = new WeakMap(), L(io, "NAME", "NavTabs"), L(io, "NAV_CLASS", "nav-tabs"), L(io, "EVENTS", !0), L(io, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (t) => {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new io(t.target).showTarget());
});
export {
  Ta as ActionMenu,
  La as ActionMenuNested,
  S_ as Avatar,
  C_ as BtnGroup,
  Ha as Button,
  Mt as ContextMenu,
  Qn as DTable,
  Pt as Datepicker,
  Ct as Dropdown,
  Ac as EventBus,
  Wa as Menu,
  Kr as Messager,
  Tt as Modal,
  Mo as ModalTrigger,
  j_ as Nav,
  io as NavTabs,
  Y_ as Pager,
  Q_ as Picker,
  g_ as ProgressCircle,
  ie as TIME_DAY,
  Zt as Timepicker,
  uf as Toolbar,
  Ot as Tooltip,
  xf as VirtualGrid,
  $g as addI18nMap,
  g$ as browser,
  z_ as calculateTimestamp,
  l$ as convertBytes,
  Dt as createDate,
  i$ as formatBytes,
  bc as formatDate,
  S$ as formatDateSpan,
  Lt as formatString,
  bg as getLangCode,
  C$ as getTimeBeforeDesc,
  jr as i18n,
  x$ as isDBY,
  Gl as isObject,
  zr as isSameDay,
  Wb as isSameMonth,
  b$ as isSameWeek,
  V_ as isSameYear,
  w$ as isToday,
  k$ as isTomorrow,
  $$ as isYesterday,
  ac as mergeDeep,
  cc as nativeEvents,
  wg as setLangCode,
  vv as store
};
