var Ga = Object.defineProperty;
var Ka = (e, n, t) => n in e ? Ga(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var E = (e, n, t) => (Ka(e, typeof n != "symbol" ? n + "" : n, t), t), uo = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var p = (e, n, t) => (uo(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, $ = (e, n, t, s) => (uo(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t), Cr = (e, n, t, s) => ({
  set _(i) {
    $(e, n, i, t);
  },
  get _() {
    return p(e, n, s);
  }
}), k = (e, n, t) => (uo(e, n, "access private method"), t);
var Zi, B, Sl, st, ue, $r, Cl, ko, Ms = {}, $l = [], Xa = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Yo = Array.isArray;
function te(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function kl(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function bt(e, n, t) {
  var s, i, o, r = {};
  for (o in n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Zi.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return Es(e, r, s, i, null);
}
function Es(e, n, t, s, i) {
  var o = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Sl };
  return i == null && B.vnode != null && B.vnode(o), o;
}
function Ee() {
  return { current: null };
}
function Qi(e) {
  return e.children;
}
function F(e, n) {
  this.props = e, this.context = n;
}
function An(e, n) {
  if (n == null)
    return e.__ ? An(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? An(e) : null;
}
function Rl(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return Rl(e);
  }
}
function kr(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !Ls.__r++ || $r !== B.debounceRendering) && (($r = B.debounceRendering) || Cl)(Ls);
}
function Ls() {
  var e, n, t, s, i, o, r, l;
  for (ue.sort(ko); e = ue.shift(); )
    e.__d && (n = ue.length, s = void 0, i = void 0, r = (o = (t = e).__v).__e, (l = t.__P) && (s = [], (i = te({}, o)).__v = o.__v + 1, Go(l, o, i, t.__n, l.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? An(o), o.__h), Ll(s, o), o.__e != r && Rl(o)), ue.length > n && ue.sort(ko));
  Ls.__r = 0;
}
function Al(e, n, t, s, i, o, r, l, a, u) {
  var c, h, f, d, m, g, y, b = s && s.__k || $l, x = b.length;
  for (t.__k = [], c = 0; c < n.length; c++)
    if ((d = t.__k[c] = (d = n[c]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? Es(null, d, null, null, d) : Yo(d) ? Es(Qi, { children: d }, null, null, null) : d.__b > 0 ? Es(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null) {
      if (d.__ = t, d.__b = t.__b + 1, (f = b[c]) === null || f && d.key == f.key && d.type === f.type)
        b[c] = void 0;
      else
        for (h = 0; h < x; h++) {
          if ((f = b[h]) && d.key == f.key && d.type === f.type) {
            b[h] = void 0;
            break;
          }
          f = null;
        }
      Go(e, d, f = f || Ms, i, o, r, l, a, u), m = d.__e, (h = d.ref) && f.ref != h && (y || (y = []), f.ref && y.push(f.ref, null, d), y.push(h, d.__c || m, d)), m != null ? (g == null && (g = m), typeof d.type == "function" && d.__k === f.__k ? d.__d = a = Tl(d, a, e) : a = Nl(e, d, f, b, m, a), typeof t.type == "function" && (t.__d = a)) : a && f.__e == a && a.parentNode != e && (a = An(f));
    }
  for (t.__e = g, c = x; c--; )
    b[c] != null && (typeof t.type == "function" && b[c].__e != null && b[c].__e == t.__d && (t.__d = Ml(s).nextSibling), Ol(b[c], b[c]));
  if (y)
    for (c = 0; c < y.length; c++)
      Dl(y[c], y[++c], y[++c]);
}
function Tl(e, n, t) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, n = typeof s.type == "function" ? Tl(s, n, t) : Nl(t, s, s, i, s.__e, n));
  return n;
}
function Nl(e, n, t, s, i, o) {
  var r, l, a;
  if (n.__d !== void 0)
    r = n.__d, n.__d = void 0;
  else if (t == null || i != o || i.parentNode == null)
    t:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), r = null;
      else {
        for (l = o, a = 0; (l = l.nextSibling) && a < s.length; a += 1)
          if (l == i)
            break t;
        e.insertBefore(i, o), r = o;
      }
  return r !== void 0 ? r : i.nextSibling;
}
function Ml(e) {
  var n, t, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (n = e.__k.length - 1; n >= 0; n--)
      if ((t = e.__k[n]) && (s = Ml(t)))
        return s;
  }
  return null;
}
function Ja(e, n, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || Ds(e, o, null, t[o], s);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || Ds(e, o, n[o], t[o], s);
}
function Rr(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t ?? "") : e[n] = t == null ? "" : typeof t != "number" || Xa.test(n) ? t : t + "px";
}
function Ds(e, n, t, s, i) {
  var o;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (n in s)
            t && n in t || Rr(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || Rr(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? s || e.addEventListener(n, o ? Tr : Ar, o) : e.removeEventListener(n, o ? Tr : Ar, o);
    else if (n !== "dangerouslySetInnerHTML") {
      if (i)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "width" && n !== "height" && n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n !== "rowSpan" && n !== "colSpan" && n in e)
        try {
          e[n] = t ?? "";
          break t;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && n[4] !== "-" ? e.removeAttribute(n) : e.setAttribute(n, t));
    }
}
function Ar(e) {
  return this.l[e.type + !1](B.event ? B.event(e) : e);
}
function Tr(e) {
  return this.l[e.type + !0](B.event ? B.event(e) : e);
}
function Go(e, n, t, s, i, o, r, l, a) {
  var u, c, h, f, d, m, g, y, b, x, S, R, A, N, L, M = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, l = n.__e = t.__e, n.__h = null, o = [l]), (u = B.__b) && u(n);
  try {
    t:
      if (typeof M == "function") {
        if (y = n.props, b = (u = M.contextType) && s[u.__c], x = u ? b ? b.props.value : u.__ : s, t.__c ? g = (c = n.__c = t.__c).__ = c.__E : ("prototype" in M && M.prototype.render ? n.__c = c = new M(y, x) : (n.__c = c = new F(y, x), c.constructor = M, c.render = Qa), b && b.sub(c), c.props = y, c.state || (c.state = {}), c.context = x, c.__n = s, h = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), M.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = te({}, c.__s)), te(c.__s, M.getDerivedStateFromProps(y, c.__s))), f = c.props, d = c.state, c.__v = n, h)
          M.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && y !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, x), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, x) === !1 || n.__v === t.__v) {
            for (n.__v !== t.__v && (c.props = y, c.state = c.__s, c.__d = !1), c.__e = !1, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(P) {
              P && (P.__ = n);
            }), S = 0; S < c._sb.length; S++)
              c.__h.push(c._sb[S]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, x), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(f, d, m);
          });
        }
        if (c.context = x, c.props = y, c.__P = e, R = B.__r, A = 0, "prototype" in M && M.prototype.render) {
          for (c.state = c.__s, c.__d = !1, R && R(n), u = c.render(c.props, c.state, c.context), N = 0; N < c._sb.length; N++)
            c.__h.push(c._sb[N]);
          c._sb = [];
        } else
          do
            c.__d = !1, R && R(n), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++A < 25);
        c.state = c.__s, c.getChildContext != null && (s = te(te({}, s), c.getChildContext())), h || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(f, d)), Al(e, Yo(L = u != null && u.type === Qi && u.key == null ? u.props.children : u) ? L : [L], n, t, s, i, o, r, l, a), c.base = n.__e, n.__h = null, c.__h.length && r.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = Za(t.__e, n, t, s, i, o, r, a);
    (u = B.diffed) && u(n);
  } catch (P) {
    n.__v = null, (a || o != null) && (n.__e = l, n.__h = !!a, o[o.indexOf(l)] = null), B.__e(P, n, t);
  }
}
function Ll(e, n) {
  B.__c && B.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(s) {
        s.call(t);
      });
    } catch (s) {
      B.__e(s, t.__v);
    }
  });
}
function Za(e, n, t, s, i, o, r, l) {
  var a, u, c, h = t.props, f = n.props, d = n.type, m = 0;
  if (d === "svg" && (i = !0), o != null) {
    for (; m < o.length; m++)
      if ((a = o[m]) && "setAttribute" in a == !!d && (d ? a.localName === d : a.nodeType === 3)) {
        e = a, o[m] = null;
        break;
      }
  }
  if (e == null) {
    if (d === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, f.is && f), o = null, l = !1;
  }
  if (d === null)
    h === f || l && e.data === f || (e.data = f);
  else {
    if (o = o && Zi.call(e.childNodes), u = (h = t.props || Ms).dangerouslySetInnerHTML, c = f.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (h = {}, m = 0; m < e.attributes.length; m++)
          h[e.attributes[m].name] = e.attributes[m].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Ja(e, f, h, i, l), c)
      n.__k = [];
    else if (Al(e, Yo(m = n.props.children) ? m : [m], n, t, s, i && d !== "foreignObject", o, r, o ? o[0] : t.__k && An(t, 0), l), o != null)
      for (m = o.length; m--; )
        o[m] != null && kl(o[m]);
    l || ("value" in f && (m = f.value) !== void 0 && (m !== e.value || d === "progress" && !m || d === "option" && m !== h.value) && Ds(e, "value", m, h.value, !1), "checked" in f && (m = f.checked) !== void 0 && m !== e.checked && Ds(e, "checked", m, h.checked, !1));
  }
  return e;
}
function Dl(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    B.__e(s, t);
  }
}
function Ol(e, n, t) {
  var s, i;
  if (B.unmount && B.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Dl(s, null, n)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        B.__e(o, n);
      }
    s.base = s.__P = null, e.__c = void 0;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && Ol(s[i], n, t || typeof e.type != "function");
  t || e.__e == null || kl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Qa(e, n, t) {
  return this.constructor(e, t);
}
function Ko(e, n, t) {
  var s, i, o;
  B.__ && B.__(e, n), i = (s = typeof t == "function") ? null : t && t.__k || n.__k, o = [], Go(n, e = (!s && t || n).__k = bt(Qi, null, [e]), i || Ms, Ms, n.ownerSVGElement !== void 0, !s && t ? [t] : i ? null : n.firstChild ? Zi.call(n.childNodes) : null, o, !s && t ? t : i ? i.__e : n.firstChild, s), Ll(o, e);
}
Zi = $l.slice, B = { __e: function(e, n, t, s) {
  for (var i, o, r; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Sl = 0, st = function(e) {
  return e != null && e.constructor === void 0;
}, F.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = te({}, this.state), typeof e == "function" && (e = e(te({}, t), this.props)), e && te(t, e), e != null && this.__v && (n && this._sb.push(n), kr(this));
}, F.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), kr(this));
}, F.prototype.render = Qi, ue = [], Cl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ko = function(e, n) {
  return e.__v.__b - n.__v.__b;
}, Ls.__r = 0;
var th = 0;
function _(e, n, t, s, i, o) {
  var r, l, a = {};
  for (l in n)
    l == "ref" ? r = n[l] : a[l] = n[l];
  var u = { type: e, props: a, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --th, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return B.vnode && B.vnode(u), u;
}
var It;
class eh {
  constructor(n = "") {
    w(this, It, void 0);
    typeof n == "object" ? $(this, It, n) : $(this, It, document.appendChild(document.createComment(n)));
  }
  on(n, t, s) {
    p(this, It).addEventListener(n, t, s);
  }
  once(n, t, s) {
    p(this, It).addEventListener(n, t, { once: !0, ...s });
  }
  off(n, t, s) {
    p(this, It).removeEventListener(n, t, s);
  }
  emit(n) {
    return p(this, It).dispatchEvent(n), n;
  }
}
It = new WeakMap();
const Ro = /* @__PURE__ */ new Set([
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
class Xo extends eh {
  on(n, t, s) {
    super.on(n, t, s);
  }
  off(n, t, s) {
    super.off(n, t, s);
  }
  once(n, t, s) {
    super.once(n, t, s);
  }
  emit(n, t) {
    return typeof n == "string" && (Ro.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), super.emit(Xo.createEvent(n, t));
  }
  static createEvent(n, t) {
    return typeof n == "string" && (Ro.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), n;
  }
}
var Ht, On, de, gn;
class Nr extends Xo {
  constructor(t = "", s) {
    super(t);
    w(this, de);
    w(this, Ht, /* @__PURE__ */ new Map());
    w(this, On, void 0);
    $(this, On, s == null ? void 0 : s.customEventSuffix);
  }
  on(t, s, i) {
    t = k(this, de, gn).call(this, t), super.on(t, s, i), p(this, Ht).set(s, [t, i]);
  }
  off(t, s, i) {
    t = k(this, de, gn).call(this, t), super.off(t, s, i), p(this, Ht).delete(s);
  }
  once(t, s, i) {
    t = k(this, de, gn).call(this, t);
    const o = (r) => {
      s(r), p(this, Ht).delete(o);
    };
    super.once(t, o, i), p(this, Ht).set(o, [t, i]);
  }
  emit(t, s) {
    return typeof t == "string" && (t = k(this, de, gn).call(this, t)), super.emit(t, s);
  }
  offAll() {
    Array.from(p(this, Ht).entries()).forEach(([t, [s, i]]) => {
      super.off(s, t, i);
    }), p(this, Ht).clear();
  }
}
Ht = new WeakMap(), On = new WeakMap(), de = new WeakSet(), gn = function(t) {
  const s = p(this, On);
  return Ro.has(t) || typeof s != "string" || t.endsWith(s) ? t : `${t}${s}`;
};
const zt = document, Os = window, Pl = zt.documentElement, Se = zt.createElement.bind(zt), Il = Se("div"), fo = Se("table"), nh = Se("tbody"), Mr = Se("tr"), { isArray: to, prototype: Hl } = Array, { concat: sh, filter: Jo, indexOf: Wl, map: jl, push: ih, slice: Bl, some: Zo, splice: oh } = Hl, rh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, lh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, ch = /<.+>/, ah = /^\w+$/;
function Qo(e, n) {
  const t = hh(n);
  return !e || !t && !we(n) && !Y(n) ? [] : !t && lh.test(e) ? n.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !t && ah.test(e) ? n.getElementsByTagName(e) : n.querySelectorAll(e);
}
class eo {
  constructor(n, t) {
    if (!n)
      return;
    if (Ao(n))
      return n;
    let s = n;
    if (Z(n)) {
      const i = t || zt;
      if (s = rh.test(n) && we(i) ? i.getElementById(n.slice(1).replace(/\\/g, "")) : ch.test(n) ? Ul(n) : Ao(i) ? i.find(n) : Z(i) ? v(i).find(n) : Qo(n, i), !s)
        return;
    } else if (Ce(n))
      return this.ready(n);
    (s.nodeType || s === Os) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(n, t) {
    return new eo(n, t);
  }
}
const C = eo.prototype, v = C.init;
v.fn = v.prototype = C;
C.length = 0;
C.splice = oh;
typeof Symbol == "function" && (C[Symbol.iterator] = Hl[Symbol.iterator]);
function Ao(e) {
  return e instanceof eo;
}
function an(e) {
  return !!e && e === e.window;
}
function we(e) {
  return !!e && e.nodeType === 9;
}
function hh(e) {
  return !!e && e.nodeType === 11;
}
function Y(e) {
  return !!e && e.nodeType === 1;
}
function uh(e) {
  return !!e && e.nodeType === 3;
}
function fh(e) {
  return typeof e == "boolean";
}
function Ce(e) {
  return typeof e == "function";
}
function Z(e) {
  return typeof e == "string";
}
function lt(e) {
  return e === void 0;
}
function Tn(e) {
  return e === null;
}
function zl(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function tr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return n === null || n === Object.prototype;
}
v.isWindow = an;
v.isFunction = Ce;
v.isArray = to;
v.isNumeric = zl;
v.isPlainObject = tr;
function K(e, n, t) {
  if (t) {
    let s = e.length;
    for (; s--; )
      if (n.call(e[s], s, e[s]) === !1)
        return e;
  } else if (tr(e)) {
    const s = Object.keys(e);
    for (let i = 0, o = s.length; i < o; i++) {
      const r = s[i];
      if (n.call(e[r], r, e[r]) === !1)
        return e;
    }
  } else
    for (let s = 0, i = e.length; s < i; s++)
      if (n.call(e[s], s, e[s]) === !1)
        return e;
  return e;
}
v.each = K;
C.each = function(e) {
  return K(this, e);
};
C.empty = function() {
  return this.each((e, n) => {
    for (; n.firstChild; )
      n.removeChild(n.firstChild);
  });
};
function Ps(...e) {
  const n = fh(e[0]) ? e.shift() : !1, t = e.shift(), s = e.length;
  if (!t)
    return {};
  if (!s)
    return Ps(n, v, t);
  for (let i = 0; i < s; i++) {
    const o = e[i];
    for (const r in o)
      n && (to(o[r]) || tr(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), Ps(n, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
v.extend = Ps;
C.extend = function(e) {
  return Ps(C, e);
};
const dh = /\S+/g;
function no(e) {
  return Z(e) ? e.match(dh) || [] : [];
}
C.toggleClass = function(e, n) {
  const t = no(e), s = !lt(n);
  return this.each((i, o) => {
    Y(o) && K(t, (r, l) => {
      s ? n ? o.classList.add(l) : o.classList.remove(l) : o.classList.toggle(l);
    });
  });
};
C.addClass = function(e) {
  return this.toggleClass(e, !0);
};
C.removeAttr = function(e) {
  const n = no(e);
  return this.each((t, s) => {
    Y(s) && K(n, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function ph(e, n) {
  if (e) {
    if (Z(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !Y(this[0]))
          return;
        const t = this[0].getAttribute(e);
        return Tn(t) ? void 0 : t;
      }
      return lt(n) ? this : Tn(n) ? this.removeAttr(e) : this.each((t, s) => {
        Y(s) && s.setAttribute(e, n);
      });
    }
    for (const t in e)
      this.attr(t, e[t]);
    return this;
  }
}
C.attr = ph;
C.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
C.hasClass = function(e) {
  return !!e && Zo.call(this, (n) => Y(n) && n.classList.contains(e));
};
C.get = function(e) {
  return lt(e) ? Bl.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
C.eq = function(e) {
  return v(this.get(e));
};
C.first = function() {
  return this.eq(0);
};
C.last = function() {
  return this.eq(-1);
};
function mh(e) {
  return lt(e) ? this.get().map((n) => Y(n) || uh(n) ? n.textContent : "").join("") : this.each((n, t) => {
    Y(t) && (t.textContent = e);
  });
}
C.text = mh;
function Ft(e, n, t) {
  if (!Y(e))
    return;
  const s = Os.getComputedStyle(e, null);
  return t ? s.getPropertyValue(n) || void 0 : s[n] || e.style[n];
}
function At(e, n) {
  return parseInt(Ft(e, n), 10) || 0;
}
function Lr(e, n) {
  return At(e, `border${n ? "Left" : "Top"}Width`) + At(e, `padding${n ? "Left" : "Top"}`) + At(e, `padding${n ? "Right" : "Bottom"}`) + At(e, `border${n ? "Right" : "Bottom"}Width`);
}
const po = {};
function gh(e) {
  if (po[e])
    return po[e];
  const n = Se(e);
  zt.body.insertBefore(n, null);
  const t = Ft(n, "display");
  return zt.body.removeChild(n), po[e] = t !== "none" ? t : "block";
}
function Dr(e) {
  return Ft(e, "display") === "none";
}
function Fl(e, n) {
  const t = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!t && !!n && t.call(e, n);
}
function so(e) {
  return Z(e) ? (n, t) => Fl(t, e) : Ce(e) ? e : Ao(e) ? (n, t) => e.is(t) : e ? (n, t) => t === e : () => !1;
}
C.filter = function(e) {
  const n = so(e);
  return v(Jo.call(this, (t, s) => n.call(t, s, t)));
};
function ce(e, n) {
  return n ? e.filter(n) : e;
}
C.detach = function(e) {
  return ce(this, e).each((n, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const yh = /^\s*<(\w+)[^>]*>/, _h = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Or = {
  "*": Il,
  tr: nh,
  td: Mr,
  th: Mr,
  thead: fo,
  tbody: fo,
  tfoot: fo
};
function Ul(e) {
  if (!Z(e))
    return [];
  if (_h.test(e))
    return [Se(RegExp.$1)];
  const n = yh.test(e) && RegExp.$1, t = Or[n] || Or["*"];
  return t.innerHTML = e, v(t.childNodes).detach().get();
}
v.parseHTML = Ul;
C.has = function(e) {
  const n = Z(e) ? (t, s) => Qo(e, s).length : (t, s) => s.contains(e);
  return this.filter(n);
};
C.not = function(e) {
  const n = so(e);
  return this.filter((t, s) => (!Z(e) || Y(s)) && !n.call(s, t, s));
};
function qt(e, n, t, s) {
  const i = [], o = Ce(n), r = s && so(s);
  for (let l = 0, a = e.length; l < a; l++)
    if (o) {
      const u = n(e[l]);
      u.length && ih.apply(i, u);
    } else {
      let u = e[l][n];
      for (; u != null && !(s && r(-1, u)); )
        i.push(u), u = t ? u[n] : null;
    }
  return i;
}
function Vl(e) {
  return e.multiple && e.options ? qt(Jo.call(e.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : e.value || "";
}
function bh(e) {
  return arguments.length ? this.each((n, t) => {
    const s = t.multiple && t.options;
    if (s || Ql.test(t.type)) {
      const i = to(e) ? jl.call(e, String) : Tn(e) ? [] : [String(e)];
      s ? K(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = lt(e) || Tn(e) ? "" : e;
  }) : this[0] && Vl(this[0]);
}
C.val = bh;
C.is = function(e) {
  const n = so(e);
  return Zo.call(this, (t, s) => n.call(t, s, t));
};
v.guid = 1;
function Lt(e) {
  return e.length > 1 ? Jo.call(e, (n, t, s) => Wl.call(s, n) === t) : e;
}
v.unique = Lt;
C.add = function(e, n) {
  return v(Lt(this.get().concat(v(e, n).get())));
};
C.children = function(e) {
  return ce(v(Lt(qt(this, (n) => n.children))), e);
};
C.parent = function(e) {
  return ce(v(Lt(qt(this, "parentNode"))), e);
};
C.index = function(e) {
  const n = e ? v(e)[0] : this[0], t = e ? this : v(n).parent().children();
  return Wl.call(t, n);
};
C.closest = function(e) {
  const n = this.filter(e);
  if (n.length)
    return n;
  const t = this.parent();
  return t.length ? t.closest(e) : n;
};
C.siblings = function(e) {
  return ce(v(Lt(qt(this, (n) => v(n).parent().children().not(n)))), e);
};
C.find = function(e) {
  return v(Lt(qt(this, (n) => Qo(e, n))));
};
const wh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, vh = /^$|^module$|\/(java|ecma)script/i, xh = ["type", "src", "nonce", "noModule"];
function Eh(e, n) {
  const t = v(e);
  t.filter("script").add(t.find("script")).each((s, i) => {
    if (vh.test(i.type) && Pl.contains(i)) {
      const o = Se("script");
      o.text = i.textContent.replace(wh, ""), K(xh, (r, l) => {
        i[l] && (o[l] = i[l]);
      }), n.head.insertBefore(o, null), n.head.removeChild(o);
    }
  });
}
function Sh(e, n, t, s, i) {
  s ? e.insertBefore(n, t ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(n, e) : e.parentNode.insertBefore(n, t ? e : e.nextSibling), i && Eh(n, e.ownerDocument);
}
function ae(e, n, t, s, i, o, r, l) {
  return K(e, (a, u) => {
    K(v(u), (c, h) => {
      K(v(n), (f, d) => {
        const m = t ? h : d, g = t ? d : h, y = t ? c : f;
        Sh(m, y ? g.cloneNode(!0) : g, s, i, !y);
      }, l);
    }, r);
  }, o), n;
}
C.after = function() {
  return ae(arguments, this, !1, !1, !1, !0, !0);
};
C.append = function() {
  return ae(arguments, this, !1, !1, !0);
};
function Ch(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (lt(e))
    return this;
  const n = /<script[\s>]/.test(e);
  return this.each((t, s) => {
    Y(s) && (n ? v(s).empty().append(e) : s.innerHTML = e);
  });
}
C.html = Ch;
C.appendTo = function(e) {
  return ae(arguments, this, !0, !1, !0);
};
C.wrapInner = function(e) {
  return this.each((n, t) => {
    const s = v(t), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
C.before = function() {
  return ae(arguments, this, !1, !0);
};
C.wrapAll = function(e) {
  let n = v(e), t = n[0];
  for (; t.children.length; )
    t = t.firstElementChild;
  return this.first().before(n), this.appendTo(t);
};
C.wrap = function(e) {
  return this.each((n, t) => {
    const s = v(e)[0];
    v(t).wrapAll(n ? s.cloneNode(!0) : s);
  });
};
C.insertAfter = function(e) {
  return ae(arguments, this, !0, !1, !1, !1, !1, !0);
};
C.insertBefore = function(e) {
  return ae(arguments, this, !0, !0);
};
C.prepend = function() {
  return ae(arguments, this, !1, !0, !0, !0, !0);
};
C.prependTo = function(e) {
  return ae(arguments, this, !0, !0, !0, !1, !1, !0);
};
C.contents = function() {
  return v(Lt(qt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
C.next = function(e, n, t) {
  return ce(v(Lt(qt(this, "nextElementSibling", n, t))), e);
};
C.nextAll = function(e) {
  return this.next(e, !0);
};
C.nextUntil = function(e, n) {
  return this.next(n, !0, e);
};
C.parents = function(e, n) {
  return ce(v(Lt(qt(this, "parentElement", !0, n))), e);
};
C.parentsUntil = function(e, n) {
  return this.parents(n, e);
};
C.prev = function(e, n, t) {
  return ce(v(Lt(qt(this, "previousElementSibling", n, t))), e);
};
C.prevAll = function(e) {
  return this.prev(e, !0);
};
C.prevUntil = function(e, n) {
  return this.prev(n, !0, e);
};
C.map = function(e) {
  return v(sh.apply([], jl.call(this, (n, t) => e.call(n, t, n))));
};
C.clone = function() {
  return this.map((e, n) => n.cloneNode(!0));
};
C.offsetParent = function() {
  return this.map((e, n) => {
    let t = n.offsetParent;
    for (; t && Ft(t, "position") === "static"; )
      t = t.offsetParent;
    return t || Pl;
  });
};
C.slice = function(e, n) {
  return v(Bl.call(this, e, n));
};
const $h = /-([a-z])/g;
function er(e) {
  return e.replace($h, (n, t) => t.toUpperCase());
}
C.ready = function(e) {
  const n = () => setTimeout(e, 0, v);
  return zt.readyState !== "loading" ? n() : zt.addEventListener("DOMContentLoaded", n), this;
};
C.unwrap = function() {
  return this.parent().each((e, n) => {
    if (n.tagName === "BODY")
      return;
    const t = v(n);
    t.replaceWith(t.children());
  }), this;
};
C.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const n = e.getBoundingClientRect();
  return {
    top: n.top + Os.pageYOffset,
    left: n.left + Os.pageXOffset
  };
};
C.position = function() {
  const e = this[0];
  if (!e)
    return;
  const n = Ft(e, "position") === "fixed", t = n ? e.getBoundingClientRect() : this.offset();
  if (!n) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Ft(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && Y(i)) {
      const o = v(i).offset();
      t.top -= o.top + At(i, "borderTopWidth"), t.left -= o.left + At(i, "borderLeftWidth");
    }
  }
  return {
    top: t.top - At(e, "marginTop"),
    left: t.left - At(e, "marginLeft")
  };
};
const ql = {
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
C.prop = function(e, n) {
  if (e) {
    if (Z(e))
      return e = ql[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((t, s) => {
        s[e] = n;
      });
    for (const t in e)
      this.prop(t, e[t]);
    return this;
  }
};
C.removeProp = function(e) {
  return this.each((n, t) => {
    delete t[ql[e] || e];
  });
};
const kh = /^--/;
function nr(e) {
  return kh.test(e);
}
const mo = {}, { style: Rh } = Il, Ah = ["webkit", "moz", "ms"];
function Th(e, n = nr(e)) {
  if (n)
    return e;
  if (!mo[e]) {
    const t = er(e), s = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${Ah.join(`${s} `)}${s}`.split(" ");
    K(i, (o, r) => {
      if (r in Rh)
        return mo[e] = r, !1;
    });
  }
  return mo[e];
}
const Nh = {
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
function Yl(e, n, t = nr(e)) {
  return !t && !Nh[e] && zl(n) ? `${n}px` : n;
}
function Mh(e, n) {
  if (Z(e)) {
    const t = nr(e);
    return e = Th(e, t), arguments.length < 2 ? this[0] && Ft(this[0], e, t) : e ? (n = Yl(e, n, t), this.each((s, i) => {
      Y(i) && (t ? i.style.setProperty(e, n) : i.style[e] = n);
    })) : this;
  }
  for (const t in e)
    this.css(t, e[t]);
  return this;
}
C.css = Mh;
function Gl(e, n) {
  try {
    return e(n);
  } catch {
    return n;
  }
}
const Lh = /^\s+|\s+$/;
function Pr(e, n) {
  const t = e.dataset[n] || e.dataset[er(n)];
  return Lh.test(t) ? t : Gl(JSON.parse, t);
}
function Dh(e, n, t) {
  t = Gl(JSON.stringify, t), e.dataset[er(n)] = t;
}
function Oh(e, n) {
  if (!e) {
    if (!this[0])
      return;
    const t = {};
    for (const s in this[0].dataset)
      t[s] = Pr(this[0], s);
    return t;
  }
  if (Z(e))
    return arguments.length < 2 ? this[0] && Pr(this[0], e) : lt(n) ? this : this.each((t, s) => {
      Dh(s, e, n);
    });
  for (const t in e)
    this.data(t, e[t]);
  return this;
}
C.data = Oh;
function Kl(e, n) {
  const t = e.documentElement;
  return Math.max(e.body[`scroll${n}`], t[`scroll${n}`], e.body[`offset${n}`], t[`offset${n}`], t[`client${n}`]);
}
K([!0, !1], (e, n) => {
  K(["Width", "Height"], (t, s) => {
    const i = `${n ? "outer" : "inner"}${s}`;
    C[i] = function(o) {
      if (this[0])
        return an(this[0]) ? n ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : we(this[0]) ? Kl(this[0], s) : this[0][`${n ? "offset" : "client"}${s}`] + (o && n ? At(this[0], `margin${t ? "Top" : "Left"}`) + At(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (e, n) => {
  const t = n.toLowerCase();
  C[t] = function(s) {
    if (!this[0])
      return lt(s) ? void 0 : this;
    if (!arguments.length)
      return an(this[0]) ? this[0].document.documentElement[`client${n}`] : we(this[0]) ? Kl(this[0], n) : this[0].getBoundingClientRect()[t] - Lr(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!Y(r))
        return;
      const l = Ft(r, "boxSizing");
      r.style[t] = Yl(t, i + (l === "border-box" ? Lr(r, !e) : 0));
    });
  };
});
const Ir = "___cd";
C.toggle = function(e) {
  return this.each((n, t) => {
    if (!Y(t))
      return;
    const s = Dr(t);
    (lt(e) ? s : e) ? (t.style.display = t[Ir] || "", Dr(t) && (t.style.display = gh(t.tagName))) : s || (t[Ir] = Ft(t, "display"), t.style.display = "none");
  });
};
C.hide = function() {
  return this.toggle(!1);
};
C.show = function() {
  return this.toggle(!0);
};
const Hr = "___ce", sr = ".", ir = { focus: "focusin", blur: "focusout" }, Xl = { mouseenter: "mouseover", mouseleave: "mouseout" }, Ph = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function or(e) {
  return Xl[e] || ir[e] || e;
}
function rr(e) {
  const n = e.split(sr);
  return [n[0], n.slice(1).sort()];
}
C.trigger = function(e, n) {
  if (Z(e)) {
    const [s, i] = rr(e), o = or(s);
    if (!o)
      return this;
    const r = Ph.test(o) ? "MouseEvents" : "HTMLEvents";
    e = zt.createEvent(r), e.initEvent(o, !0, !0), e.namespace = i.join(sr), e.___ot = s;
  }
  e.___td = n;
  const t = e.___ot in ir;
  return this.each((s, i) => {
    t && Ce(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function Jl(e) {
  return e[Hr] = e[Hr] || {};
}
function Ih(e, n, t, s, i) {
  const o = Jl(e);
  o[n] = o[n] || [], o[n].push([t, s, i]), e.addEventListener(n, i);
}
function Zl(e, n) {
  return !n || !Zo.call(n, (t) => e.indexOf(t) < 0);
}
function Is(e, n, t, s, i) {
  const o = Jl(e);
  if (n)
    o[n] && (o[n] = o[n].filter(([r, l, a]) => {
      if (i && a.guid !== i.guid || !Zl(r, t) || s && s !== l)
        return !0;
      e.removeEventListener(n, a);
    }));
  else
    for (n in o)
      Is(e, n, t, s, i);
}
C.off = function(e, n, t) {
  if (lt(e))
    this.each((s, i) => {
      !Y(i) && !we(i) && !an(i) || Is(i);
    });
  else if (Z(e))
    Ce(n) && (t = n, n = ""), K(no(e), (s, i) => {
      const [o, r] = rr(i), l = or(o);
      this.each((a, u) => {
        !Y(u) && !we(u) && !an(u) || Is(u, l, r, n, t);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
C.remove = function(e) {
  return ce(this, e).detach().off(), this;
};
C.replaceWith = function(e) {
  return this.before(e).remove();
};
C.replaceAll = function(e) {
  return v(e).replaceWith(this), this;
};
function Hh(e, n, t, s, i) {
  if (!Z(e)) {
    for (const o in e)
      this.on(o, n, t, e[o], i);
    return this;
  }
  return Z(n) || (lt(n) || Tn(n) ? n = "" : lt(t) ? (t = n, n = "") : (s = t, t = n, n = "")), Ce(s) || (s = t, t = void 0), s ? (K(no(e), (o, r) => {
    const [l, a] = rr(r), u = or(l), c = l in Xl, h = l in ir;
    u && this.each((f, d) => {
      if (!Y(d) && !we(d) && !an(d))
        return;
      const m = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !Zl(a, g.namespace.split(sr)) || !n && (h && (g.target !== d || g.___ot === u) || c && g.relatedTarget && d.contains(g.relatedTarget)))
          return;
        let y = d;
        if (n) {
          let x = g.target;
          for (; !Fl(x, n); )
            if (x === d || (x = x.parentNode, !x))
              return;
          y = x;
        }
        Object.defineProperty(g, "currentTarget", {
          configurable: !0,
          get() {
            return y;
          }
        }), Object.defineProperty(g, "delegateTarget", {
          configurable: !0,
          get() {
            return d;
          }
        }), Object.defineProperty(g, "data", {
          configurable: !0,
          get() {
            return t;
          }
        });
        const b = s.call(y, g, g.___td);
        i && Is(d, u, a, n, m), b === !1 && (g.preventDefault(), g.stopPropagation());
      };
      m.guid = s.guid = s.guid || v.guid++, Ih(d, u, a, n, m);
    });
  }), this) : this;
}
C.on = Hh;
function Wh(e, n, t, s) {
  return this.on(e, n, t, s, !0);
}
C.one = Wh;
const jh = /\r?\n/g;
function Bh(e, n) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(n.replace(jh, `\r
`))}`;
}
const zh = /file|reset|submit|button|image/i, Ql = /radio|checkbox/i;
C.serialize = function() {
  let e = "";
  return this.each((n, t) => {
    K(t.elements || [t], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || zh.test(i.type) || Ql.test(i.type) && !i.checked)
        return;
      const o = Vl(i);
      if (!lt(o)) {
        const r = to(o) ? o : [o];
        K(r, (l, a) => {
          e += Bh(i.name, a);
        });
      }
    });
  }), e.slice(1);
};
window.$ = v;
function Fh(e, n) {
  if (e == null)
    return [e, void 0];
  typeof n == "string" && (n = n.split("."));
  const t = n.join(".");
  let s = e;
  const i = [s];
  for (; typeof s == "object" && s !== null && n.length; ) {
    let o = n.shift(), r;
    const l = o.indexOf("[");
    if (l > 0 && l < o.length - 1 && o.endsWith("]") && (r = o.substring(l + 1, o.length - 1), o = o.substring(0, l)), s = s[o], i.push(s), r !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(r) : s = s[r], i.push(s);
      else
        throw new Error(`Cannot access property "${o}[${r}]", the full path is "${t}".`);
  }
  if (n.length)
    throw new Error(`Cannot access property with rest path "${n.join(".")}", the full path is "${t}".`);
  return i;
}
function Uh(e, n, t) {
  try {
    const s = Fh(e, n), i = s[s.length - 1];
    return i === void 0 ? t : i;
  } catch {
    return t;
  }
}
function go(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function To(e, ...n) {
  if (!n.length)
    return e;
  const t = n.shift();
  if (go(e) && go(t))
    for (const s in t)
      go(t[s]) ? (e[s] || Object.assign(e, { [s]: {} }), To(e[s], t[s])) : Object.assign(e, { [s]: t[s] });
  return To(e, ...n);
}
function ct(e, ...n) {
  if (n.length === 0)
    return e;
  if (n.length === 1 && typeof n[0] == "object" && n[0]) {
    const t = n[0];
    return Object.keys(t).forEach((s) => {
      const i = t[s] ?? 0;
      e = e.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
    }), e;
  }
  for (let t = 0; t < n.length; t++) {
    const s = n[t] ?? "";
    e = e.replace(new RegExp(`\\{${t}\\}`, "g"), `${s}`);
  }
  return e;
}
var lr = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(lr || {});
function ed(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / lr[t]).toFixed(n) + t);
}
const nd = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * lr[s];
};
let cr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Yt;
function Vh() {
  return cr;
}
function qh(e) {
  cr = e.toLowerCase();
}
function tc(e, n) {
  Yt || (Yt = {}), typeof e == "string" && (e = { [e]: n ?? {} }), To(Yt, e);
}
function Nt(e, n, t, s, i, o) {
  Array.isArray(e) ? Yt && e.unshift(Yt) : e = Yt ? [Yt, e] : [e], typeof t == "string" && (o = i, i = s, s = t, t = void 0);
  const r = i || cr;
  let l;
  for (const a of e) {
    if (!a)
      continue;
    const u = a[r];
    if (!u)
      continue;
    const c = o && a === Yt ? `${o}.${n}` : n;
    if (l = Uh(u, c), l !== void 0)
      break;
  }
  return l === void 0 ? s : t ? ct(l, ...Array.isArray(t) ? t : [t]) : l;
}
function ec(e, n, t, s) {
  return Nt(void 0, e, n, t, s);
}
Nt.addLang = tc;
Nt.getLang = ec;
Nt.getCode = Vh;
Nt.setCode = qh;
tc({
  zh_cn: {
    confirm: "确定",
    cancel: "取消",
    delete: "删除",
    add: "添加"
  },
  zh_tw: {
    confirm: "確定",
    cancel: "取消",
    delete: "刪除",
    add: "添加"
  },
  en: {
    confirm: "Confirm",
    cancel: "Cancel",
    delete: "Delete",
    add: "Add"
  }
});
function nc(...e) {
  const n = [], t = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? n[r][1] = !!o : (t.set(i, n.length), n.push([i, !!o]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? nc(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), n.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const D = (...e) => nc(...e).reduce((n, [t, s]) => (s && n.push(t), n), []).join(" ");
v.classes = D;
v.fn.setClass = function(e, ...n) {
  return this.each((t, s) => {
    const i = v(s);
    e === !0 ? i.attr("class", D(i.attr("class"), ...n)) : i.addClass(D(e, ...n));
  });
};
const yn = /* @__PURE__ */ new WeakMap();
function sc(e, n, t) {
  const s = yn.has(e), i = s ? yn.get(e) : {};
  typeof n == "string" ? i[n] = t : n === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, n), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, v(e).dataset(), i), yn.set(e, i)) : yn.delete(e);
}
function Yh(e, n) {
  let t = yn.get(e);
  return !t && e instanceof Element && (t = v(e).dataset()), n === void 0 ? t || {} : t == null ? void 0 : t[n];
}
v.fn.dataset = v.fn.data;
v.fn.data = function(...e) {
  if (!this.length)
    return;
  const [n, t] = e;
  return !e.length || e.length === 1 && typeof n == "string" ? Yh(this[0], n) : this.each((s, i) => sc(i, n, t));
};
v.fn.removeData = function(e = null) {
  return this.each((n, t) => sc(t, e));
};
v.fn._attr = v.fn.attr;
v.fn.extend({
  attr(...e) {
    const [n, t] = e;
    return !e.length || e.length === 1 && typeof n == "string" ? this._attr.apply(this, e) : typeof n == "object" ? (n && Object.keys(n).forEach((s) => {
      const i = n[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : t === null ? this.removeAttr(n) : this._attr(n, t);
  }
});
v.Event = (e, n) => {
  const [t, ...s] = e.split("."), i = new Event(t, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = t, i.___td = n, i;
};
function ic(e) {
  const n = v(e)[0];
  if (!n)
    return !1;
  if (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement)
    return n.select(), !0;
  const t = window.getSelection;
  if (t) {
    const s = t();
    if (s) {
      const i = document.createRange();
      return i.selectNodeContents(n), s.removeAllRanges(), s.addRange(i), !0;
    }
  }
  return !1;
}
v.fn.selectText = function() {
  return this.each((e, n) => {
    ic(n);
  });
};
function oc(e, n) {
  const t = v(e)[0];
  if (!t)
    return !1;
  const { left: s, top: i, width: o, height: r } = t.getBoundingClientRect(), { innerHeight: l, innerWidth: a } = window, { clientHeight: u, clientWidth: c } = document.documentElement, h = l || u, f = a || c;
  if (n != null && n.fullyCheck)
    return s >= 0 && i >= 0 && s + o <= f && i + r <= h;
  const d = i <= h && i + r >= 0, m = s <= f && s + o >= 0;
  return d && m;
}
v.fn.isVisible = function(e) {
  return this.each((n, t) => {
    oc(t, e);
  });
};
function ar(e, n) {
  const t = v(e);
  if (n !== void 0) {
    t.append(`<script>${n}<\/script>`);
    return;
  }
  t.find("script").each((s, i) => {
    ar(t, i.innerHTML), i.remove();
  });
}
v.fn.runJS = function(e) {
  return this.each((n, t) => {
    ar(t, e);
  });
};
const sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: oc,
  runJS: ar,
  selectText: ic
}, Symbol.toStringTag, { value: "Module" }));
var rc = function(e, n, t, s) {
  var i;
  n[0] = 0;
  for (var o = 1; o < n.length; o++) {
    var r = n[o++], l = n[o] ? (n[0] |= r ? 1 : 2, t[n[o++]]) : n[++o];
    r === 3 ? s[0] = l : r === 4 ? s[1] = Object.assign(s[1] || {}, l) : r === 5 ? (s[1] = s[1] || {})[n[++o]] = l : r === 6 ? s[1][n[++o]] += l + "" : r ? (i = e.apply(l, rc(e, l, t, ["", null])), s.push(i), l[0] ? n[0] |= 2 : (n[o - 2] = 0, n[o] = i)) : s.push(l);
  }
  return s;
}, Wr = /* @__PURE__ */ new Map();
function Gh(e) {
  var n = Wr.get(this);
  return n || (n = /* @__PURE__ */ new Map(), Wr.set(this, n)), (n = rc(this, n.get(e) || (n.set(e, n = function(t) {
    for (var s, i, o = 1, r = "", l = "", a = [0], u = function(f) {
      o === 1 && (f || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? a.push(0, f, r) : o === 3 && (f || r) ? (a.push(3, f, r), o = 2) : o === 2 && r === "..." && f ? a.push(4, f, 0) : o === 2 && r && !f ? a.push(5, 0, !0, r) : o >= 5 && ((r || !f && o === 5) && (a.push(o, 0, r, i), o = 6), f && (a.push(o, f, 0, i), o = 6)), r = "";
    }, c = 0; c < t.length; c++) {
      c && (o === 1 && u(), u(c));
      for (var h = 0; h < t[c].length; h++)
        s = t[c][h], o === 1 ? s === "<" ? (u(), a = [a], o = 3) : r += s : o === 4 ? r === "--" && s === ">" ? (o = 1, r = "") : r = s + r[0] : l ? s === l ? l = "" : r += s : s === '"' || s === "'" ? l = s : s === ">" ? (u(), o = 1) : o && (s === "=" ? (o = 5, i = r, r = "") : s === "/" && (o < 5 || t[c][h + 1] === ">") ? (u(), o === 3 && (a = a[0]), o = a, (a = a[0]).push(2, 0, o), o = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (u(), o = 2) : r += s), o === 3 && r === "!--" && (o = 4, a = a[0]);
    }
    return u(), a;
  }(e)), n), arguments, [])).length > 1 ? n : n[0];
}
const id = Gh.bind(bt);
function Kh(e) {
  const { tagName: n = "div", class: t, className: s, style: i, children: o, attrs: r, ...l } = e;
  return bt(n, { class: D(t, s), style: i, ...l, ...r }, o);
}
var Pn;
class lc extends F {
  constructor() {
    super(...arguments);
    w(this, Pn, Ee());
  }
  componentDidMount() {
    this.props.executeScript && v(p(this, Pn).current).runJS();
  }
  render(t) {
    const { executeScript: s, html: i, ...o } = t;
    return /* @__PURE__ */ _(Kh, { ref: p(this, Pn), dangerouslySetInnerHTML: { __html: i }, ...o });
  }
}
Pn = new WeakMap();
var Gt, Pe, In;
class cc {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(n, t) {
    /**
     * Store the component options.
     */
    w(this, Gt, void 0);
    /**
     * Store the component element.
     */
    w(this, Pe, void 0);
    /**
     * Store the component event handlers.
     */
    w(this, In, void 0);
    const s = v(n);
    if (s.data(this.constructor.KEY))
      throw new Error("[ZUI] The component has been initialized on element.");
    const i = v.guid++;
    $(this, In, i), s.data(this.constructor.KEY, this).attr(this.constructor.DATA_KEY, `${i}`), $(this, Pe, s[0]), $(this, Gt, { ...this.constructor.DEFAULT, ...s.dataset() }), this.setOptions(t), this.init(), requestAnimationFrame(() => {
      this.emit("inited", this.options), this.afterInit();
    });
  }
  /**
   * The component name.
   * It usually equals to the class name.
   * The name must be provided in subclass.
   */
  static get NAME() {
    throw new Error(`[ZUI] Component name must be provided in class "${this.name}".`);
  }
  /**
   * Component data key, like "zui.menu"
   */
  static get KEY() {
    return `zui.${this.NAME}`;
  }
  /**
   * Component namespace, like ".zui.menu"
   */
  static get NAMESPACE() {
    return `.${this.NAME}.zui`;
  }
  static get DATA_KEY() {
    return `data-zui-${this.NAME}`;
  }
  /**
   * Get the component element.
   */
  get element() {
    return p(this, Pe);
  }
  /**
   * Get the component options.
   */
  get options() {
    return p(this, Gt);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return p(this, In);
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return v(this.element);
  }
  /**
   * Initialize the component.
   */
  init() {
  }
  /**
   * Do something after the component initialized.
   */
  afterInit() {
  }
  /**
   * Render the component.
   *
   * @param options The component options to override before render.
   */
  render(n) {
    this.setOptions(n);
  }
  /**
   * Destroy the component.
   */
  destroy() {
    this.$element.off(this.constructor.NAMESPACE).removeData(this.constructor.KEY).attr(this.constructor.DATA_KEY, null), $(this, Gt, void 0), $(this, Pe, void 0), this.emit("destroyed");
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(n) {
    return n && v.extend(p(this, Gt), n), p(this, Gt);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(n, ...t) {
    const s = v.Event(this.constructor.wrapEventNames(n));
    return this.$element.trigger(s, [this, ...t]), s;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(n, t) {
    this.$element.on(this.constructor.wrapEventNames(n), t);
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(n, t) {
    this.$element.off(this.constructor.wrapEventNames(n), t);
  }
  /**
   * Get the i18n text.
   *
   * @param key          The i18n key.
   * @param args         The i18n arguments or the default value.
   * @param defaultValue The default value if the key is not found.
   * @returns            The i18n text.
   */
  i18n(n, t, s) {
    return Nt(this.options.i18n, n, t, s, this.options.lang, this.constructor.NAME) ?? Nt(this.options.i18n, n, t, s, this.options.lang) ?? `{i18n:${n}}`;
  }
  /**
   * Wrap event names with component namespace.
   *
   * @param names The event names.
   * @returns     The wrapped event names.
   */
  static wrapEventNames(n) {
    return n.split(" ").map((t) => t.includes(".") ? t : `${t}${this.NAMESPACE}`).join(" ");
  }
  /**
   * Get the component instance of the given element.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static get(n) {
    return v(n).data(this.KEY);
  }
  /**
   * Ensure the component instance of the given element.
   *
   * @param this      Current component constructor.
   * @param selector  The component element selector.
   * @param options   The component options.
   * @returns         The component instance.
   */
  static ensure(n, t) {
    const s = this.get(n);
    return s || new this(n, t);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(n) {
    return v(n || document).find(`[${this.DATA_KEY}]`).map((t, s) => v(s).data(this.KEY)).get();
  }
  /**
   * Query the component instance.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static query(n) {
    return n === void 0 ? this.getAll().sort((t, s) => t.gid - s.gid)[0] : this.get(v(n).closest(`[${this.DATA_KEY}]`));
  }
}
Gt = new WeakMap(), Pe = new WeakMap(), In = new WeakMap(), /**
 * The default options.
 */
E(cc, "DEFAULT", {});
const yo = /* @__PURE__ */ new Map();
var vt, Ie, pt;
class Ut {
  constructor(n, t) {
    w(this, vt, void 0);
    w(this, Ie, void 0);
    w(this, pt, void 0);
    n = typeof n == "string" ? document.querySelector(n) : n, this.constructor.EVENTS && $(this, pt, new Nr(n, { customEventSuffix: `.${this.constructor.KEY}` })), $(this, vt, { ...this.constructor.DEFAULT }), this.setOptions({ ...n instanceof HTMLElement ? v(n).dataset() : null, ...t }), this.constructor.all.set(n, this), $(this, Ie, n), n.setAttribute("data-zui", this.constructor.NAME), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return p(this, vt);
  }
  get element() {
    return p(this, Ie);
  }
  get events() {
    return p(this, pt);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(n) {
    return n && Object.assign(p(this, vt), n), p(this, vt);
  }
  render(n) {
    this.setOptions(n);
  }
  destroy() {
    this.constructor.all.delete(p(this, Ie)), p(this, pt) && (this.emit("destroyed", this), p(this, pt).offAll());
  }
  on(n, t, s) {
    var i;
    (i = p(this, pt)) == null || i.on(n, t, s);
  }
  once(n, t, s) {
    var i;
    (i = p(this, pt)) == null || i.once(n, t, s);
  }
  off(n, t, s) {
    var i;
    (i = p(this, pt)) == null || i.off(n, t, s);
  }
  emit(n, t, s) {
    var o;
    let i = Nr.createEvent(n, t);
    if (s !== !1) {
      const r = s || `on${n[0].toUpperCase()}${n.substring(1)}`, l = p(this, vt)[r];
      l && l(i) === !1 && (i.preventDefault(), i.stopPropagation());
    }
    return i = (o = p(this, pt)) == null ? void 0 : o.emit(n, t), i;
  }
  i18n(n, t, s) {
    return Nt(p(this, vt).i18n, n, t, s, this.options.lang, this.constructor.NAME) ?? Nt(p(this, vt).i18n, n, t, s, this.options.lang) ?? `{i18n:${n}}`;
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
    const n = this.NAME;
    if (yo.has(n))
      return yo.get(n);
    const t = /* @__PURE__ */ new Map();
    return yo.set(n, t), t;
  }
  static getAll() {
    return this.all;
  }
  static get(n) {
    return this.all.get(n);
  }
  static ensure(n, t) {
    return this.get(n) || new this(n, t);
  }
  static query(n) {
    if (n === void 0)
      return [...this.getAll().values()].pop();
    if (typeof n == "string" && (n = document.querySelector(n)), !!n)
      return n = n.closest(`[data-zui="${this.NAME}"]`), n ? this.get(n) : void 0;
  }
}
vt = new WeakMap(), Ie = new WeakMap(), pt = new WeakMap(), E(Ut, "EVENTS", !1), E(Ut, "DEFAULT", {});
class J extends Ut {
  constructor() {
    super(...arguments);
    E(this, "ref", Ee());
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
  render(t) {
    const s = this.constructor.Component;
    Ko(/* @__PURE__ */ _(s, { ref: this.ref, ...this.setOptions(t) }), this.element);
  }
}
E(J, "Component");
var hr, z, ac, hc, xn, jr, uc = {}, fc = [], Xh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ee(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function dc(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function fn(e, n, t) {
  var s, i, o, r = {};
  for (o in n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? hr.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return Ss(e, r, s, i, null);
}
function Ss(e, n, t, s, i) {
  var o = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++ac };
  return i == null && z.vnode != null && z.vnode(o), o;
}
function Jh() {
  return { current: null };
}
function ur(e) {
  return e.children;
}
function En(e, n) {
  this.props = e, this.context = n;
}
function Nn(e, n) {
  if (n == null)
    return e.__ ? Nn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? Nn(e) : null;
}
function pc(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return pc(e);
  }
}
function Br(e) {
  (!e.__d && (e.__d = !0) && xn.push(e) && !Hs.__r++ || jr !== z.debounceRendering) && ((jr = z.debounceRendering) || setTimeout)(Hs);
}
function Hs() {
  for (var e; Hs.__r = xn.length; )
    e = xn.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), xn = [], e.some(function(n) {
      var t, s, i, o, r, l;
      n.__d && (r = (o = (t = n).__v).__e, (l = t.__P) && (s = [], (i = ee({}, o)).__v = o.__v + 1, _c(l, o, i, t.__n, l.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? Nn(o), o.__h), Qh(s, o), o.__e != r && pc(o)));
    });
}
function mc(e, n, t, s, i, o, r, l, a, u) {
  var c, h, f, d, m, g, y, b = s && s.__k || fc, x = b.length;
  for (t.__k = [], c = 0; c < n.length; c++)
    if ((d = t.__k[c] = (d = n[c]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? Ss(null, d, null, null, d) : Array.isArray(d) ? Ss(ur, { children: d }, null, null, null) : d.__b > 0 ? Ss(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null) {
      if (d.__ = t, d.__b = t.__b + 1, (f = b[c]) === null || f && d.key == f.key && d.type === f.type)
        b[c] = void 0;
      else
        for (h = 0; h < x; h++) {
          if ((f = b[h]) && d.key == f.key && d.type === f.type) {
            b[h] = void 0;
            break;
          }
          f = null;
        }
      _c(e, d, f = f || uc, i, o, r, l, a, u), m = d.__e, (h = d.ref) && f.ref != h && (y || (y = []), f.ref && y.push(f.ref, null, d), y.push(h, d.__c || m, d)), m != null ? (g == null && (g = m), typeof d.type == "function" && d.__k === f.__k ? d.__d = a = gc(d, a, e) : a = yc(e, d, f, b, m, a), typeof t.type == "function" && (t.__d = a)) : a && f.__e == a && a.parentNode != e && (a = Nn(f));
    }
  for (t.__e = g, c = x; c--; )
    b[c] != null && wc(b[c], b[c]);
  if (y)
    for (c = 0; c < y.length; c++)
      bc(y[c], y[++c], y[++c]);
}
function gc(e, n, t) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, n = typeof s.type == "function" ? gc(s, n, t) : yc(t, s, s, i, s.__e, n));
  return n;
}
function yc(e, n, t, s, i, o) {
  var r, l, a;
  if (n.__d !== void 0)
    r = n.__d, n.__d = void 0;
  else if (t == null || i != o || i.parentNode == null)
    t:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), r = null;
      else {
        for (l = o, a = 0; (l = l.nextSibling) && a < s.length; a += 2)
          if (l == i)
            break t;
        e.insertBefore(i, o), r = o;
      }
  return r !== void 0 ? r : i.nextSibling;
}
function Zh(e, n, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || Ws(e, o, null, t[o], s);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || Ws(e, o, n[o], t[o], s);
}
function zr(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || Xh.test(n) ? t : t + "px";
}
function Ws(e, n, t, s, i) {
  var o;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (n in s)
            t && n in t || zr(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || zr(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? s || e.addEventListener(n, o ? Ur : Fr, o) : e.removeEventListener(n, o ? Ur : Fr, o);
    else if (n !== "dangerouslySetInnerHTML") {
      if (i)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n in e)
        try {
          e[n] = t ?? "";
          break t;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && n.indexOf("-") == -1 ? e.removeAttribute(n) : e.setAttribute(n, t));
    }
}
function Fr(e) {
  this.l[e.type + !1](z.event ? z.event(e) : e);
}
function Ur(e) {
  this.l[e.type + !0](z.event ? z.event(e) : e);
}
function _c(e, n, t, s, i, o, r, l, a) {
  var u, c, h, f, d, m, g, y, b, x, S, R, A, N, L, M = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, l = n.__e = t.__e, n.__h = null, o = [l]), (u = z.__b) && u(n);
  try {
    t:
      if (typeof M == "function") {
        if (y = n.props, b = (u = M.contextType) && s[u.__c], x = u ? b ? b.props.value : u.__ : s, t.__c ? g = (c = n.__c = t.__c).__ = c.__E : ("prototype" in M && M.prototype.render ? n.__c = c = new M(y, x) : (n.__c = c = new En(y, x), c.constructor = M, c.render = eu), b && b.sub(c), c.props = y, c.state || (c.state = {}), c.context = x, c.__n = s, h = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), M.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ee({}, c.__s)), ee(c.__s, M.getDerivedStateFromProps(y, c.__s))), f = c.props, d = c.state, h)
          M.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && y !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, x), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, x) === !1 || n.__v === t.__v) {
            for (c.props = y, c.state = c.__s, n.__v !== t.__v && (c.__d = !1), c.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(P) {
              P && (P.__ = n);
            }), S = 0; S < c._sb.length; S++)
              c.__h.push(c._sb[S]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, x), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(f, d, m);
          });
        }
        if (c.context = x, c.props = y, c.__v = n, c.__P = e, R = z.__r, A = 0, "prototype" in M && M.prototype.render) {
          for (c.state = c.__s, c.__d = !1, R && R(n), u = c.render(c.props, c.state, c.context), N = 0; N < c._sb.length; N++)
            c.__h.push(c._sb[N]);
          c._sb = [];
        } else
          do
            c.__d = !1, R && R(n), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++A < 25);
        c.state = c.__s, c.getChildContext != null && (s = ee(ee({}, s), c.getChildContext())), h || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(f, d)), L = u != null && u.type === ur && u.key == null ? u.props.children : u, mc(e, Array.isArray(L) ? L : [L], n, t, s, i, o, r, l, a), c.base = n.__e, n.__h = null, c.__h.length && r.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = tu(t.__e, n, t, s, i, o, r, a);
    (u = z.diffed) && u(n);
  } catch (P) {
    n.__v = null, (a || o != null) && (n.__e = l, n.__h = !!a, o[o.indexOf(l)] = null), z.__e(P, n, t);
  }
}
function Qh(e, n) {
  z.__c && z.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(s) {
        s.call(t);
      });
    } catch (s) {
      z.__e(s, t.__v);
    }
  });
}
function tu(e, n, t, s, i, o, r, l) {
  var a, u, c, h = t.props, f = n.props, d = n.type, m = 0;
  if (d === "svg" && (i = !0), o != null) {
    for (; m < o.length; m++)
      if ((a = o[m]) && "setAttribute" in a == !!d && (d ? a.localName === d : a.nodeType === 3)) {
        e = a, o[m] = null;
        break;
      }
  }
  if (e == null) {
    if (d === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, f.is && f), o = null, l = !1;
  }
  if (d === null)
    h === f || l && e.data === f || (e.data = f);
  else {
    if (o = o && hr.call(e.childNodes), u = (h = t.props || uc).dangerouslySetInnerHTML, c = f.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (h = {}, m = 0; m < e.attributes.length; m++)
          h[e.attributes[m].name] = e.attributes[m].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Zh(e, f, h, i, l), c)
      n.__k = [];
    else if (m = n.props.children, mc(e, Array.isArray(m) ? m : [m], n, t, s, i && d !== "foreignObject", o, r, o ? o[0] : t.__k && Nn(t, 0), l), o != null)
      for (m = o.length; m--; )
        o[m] != null && dc(o[m]);
    l || ("value" in f && (m = f.value) !== void 0 && (m !== e.value || d === "progress" && !m || d === "option" && m !== h.value) && Ws(e, "value", m, h.value, !1), "checked" in f && (m = f.checked) !== void 0 && m !== e.checked && Ws(e, "checked", m, h.checked, !1));
  }
  return e;
}
function bc(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    z.__e(s, t);
  }
}
function wc(e, n, t) {
  var s, i;
  if (z.unmount && z.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || bc(s, null, n)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        z.__e(o, n);
      }
    s.base = s.__P = null, e.__c = void 0;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && wc(s[i], n, t || typeof e.type != "function");
  t || e.__e == null || dc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function eu(e, n, t) {
  return this.constructor(e, t);
}
hr = fc.slice, z = { __e: function(e, n, t, s) {
  for (var i, o, r; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (l) {
        e = l;
      }
  throw e;
} }, ac = 0, hc = function(e) {
  return e != null && e.constructor === void 0;
}, En.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ee({}, this.state), typeof e == "function" && (e = e(ee({}, t), this.props)), e && ee(t, e), e != null && this.__v && (n && this._sb.push(n), Br(this));
}, En.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Br(this));
}, En.prototype.render = ur, xn = [], Hs.__r = 0;
var nu = 0;
function Rt(e, n, t, s, i) {
  var o, r, l = {};
  for (r in n)
    r == "ref" ? o = n[r] : l[r] = n[r];
  var a = { type: e, props: l, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --nu, __source: i, __self: s };
  if (typeof e == "function" && (o = e.defaultProps))
    for (r in o)
      l[r] === void 0 && (l[r] = o[r]);
  return z.vnode && z.vnode(a), a;
}
function su({
  component: e = "div",
  className: n,
  children: t,
  style: s,
  attrs: i
}) {
  return fn(e, {
    className: D(n),
    style: s,
    ...i
  }, t);
}
function No(e) {
  if (st(e))
    return e;
  if (typeof e == "string")
    return e.startsWith("icon-") || (e = `icon-${e}`), /* @__PURE__ */ _("i", { class: `icon ${e}` });
}
function vc({
  component: e = "a",
  className: n,
  children: t,
  attrs: s,
  url: i,
  disabled: o,
  active: r,
  icon: l,
  text: a,
  target: u,
  trailingIcon: c,
  hint: h,
  onClick: f,
  ...d
}) {
  const m = [
    No(l),
    /* @__PURE__ */ Rt("span", { className: "text", children: a }),
    typeof t == "function" ? t() : t,
    No(c)
  ];
  return fn(e, {
    className: D(n, { disabled: o, active: r }),
    title: h,
    [e === "a" ? "href" : "data-url"]: i,
    [e === "a" ? "target" : "data-target"]: u,
    onClick: f,
    ...d,
    ...s
  }, ...m);
}
function iu({
  component: e = "div",
  className: n,
  text: t,
  attrs: s,
  children: i,
  style: o,
  onClick: r
}) {
  return fn(e, {
    className: D(n),
    style: o,
    onClick: r,
    ...s
  }, t, typeof i == "function" ? i() : i);
}
function ou({
  component: e = "div",
  className: n,
  style: t,
  space: s,
  flex: i,
  attrs: o,
  onClick: r,
  children: l
}) {
  return fn(e, {
    className: D(n),
    style: { width: s, height: s, flex: i, ...t },
    onClick: r,
    ...o
  }, l);
}
function ru(e) {
  const {
    tag: n,
    className: t,
    style: s,
    renders: i,
    generateArgs: o = [],
    generatorThis: r,
    generators: l,
    onGenerate: a,
    onRenderItem: u,
    ...c
  } = e, h = [t], f = { ...s }, d = [], m = [];
  return i.forEach((g) => {
    const y = [];
    typeof g == "string" && l && l[g] && (g = l[g]), typeof g == "function" ? a ? y.push(...a.call(r, g, d, ...o)) : y.push(...g.call(r, d, ...o) ?? []) : y.push(g), y.forEach((b) => {
      b != null && (typeof b == "object" && !st(b) && ("html" in b || "__html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b) ? b.html ? d.push(
        /* @__PURE__ */ _("div", { className: D(b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })
      ) : b.__html ? m.push(b.__html) : (b.style && Object.assign(f, b.style), b.className && h.push(b.className), b.children && d.push(b.children), b.attrs && Object.assign(c, b.attrs)) : d.push(b));
    });
  }), m.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: m } }), [{
    className: D(h),
    style: f,
    ...c
  }, d];
}
function Mo({
  tag: e = "div",
  ...n
}) {
  const [t, s] = ru(n);
  return bt(e, t, ...s);
}
function lu({ type: e, ...n }) {
  return /* @__PURE__ */ Rt(Mo, { ...n });
}
function xc({
  component: e = "div",
  className: n,
  children: t,
  style: s,
  attrs: i
}) {
  return fn(e, {
    className: D(n),
    style: s,
    ...i
  }, t);
}
var Bt;
let io = (Bt = class extends En {
  constructor() {
    super(...arguments);
    E(this, "ref", Jh());
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
    var t, s;
    (s = (t = this.props).beforeDestroy) == null || s.call(t, { menu: this });
  }
  afterRender(t) {
    var s, i;
    (i = (s = this.props).afterRender) == null || i.call(s, { menu: this, firstRender: t });
  }
  handleItemClick(t, s, i, o) {
    i && i.call(o.target, o);
    const { onClickItem: r } = this.props;
    r && r({ menu: this, item: t, index: s, event: o });
  }
  beforeRender() {
    var i;
    const t = { ...this.props };
    typeof t.items == "function" && (t.items = t.items(this));
    const s = (i = t.beforeRender) == null ? void 0 : i.call(t, { menu: this, options: t });
    return s && Object.assign(t, s), t;
  }
  getItemRenderProps(t, s, i) {
    const { commonItemProps: o, onClickItem: r } = t, l = { key: i, ...s };
    return o && Object.assign(l, o[s.type || "item"]), (r || s.onClick) && (l.onClick = this.handleItemClick.bind(this, l, i, s.onClick)), l.className = D(l.className), l;
  }
  renderItem(t, s, i) {
    const o = this.getItemRenderProps(t, s, i), { itemRender: r } = t;
    if (r) {
      if (typeof r == "object") {
        const y = r[s.type || "item"];
        if (y)
          return /* @__PURE__ */ Rt(y, { ...o });
      } else if (typeof r == "function") {
        const y = r.call(this, o, fn);
        if (hc(y))
          return y;
        typeof y == "object" && Object.assign(o, y);
      }
    }
    const { type: l = "item", component: a, key: u = i, rootAttrs: c, rootClass: h, rootStyle: f, rootChildren: d, ...m } = o;
    if (l === "html")
      return /* @__PURE__ */ Rt(
        "li",
        {
          className: D("action-menu-item", `${this.name}-html`, h, m.className),
          ...c,
          style: f || m.style,
          dangerouslySetInnerHTML: { __html: m.html }
        },
        u
      );
    const g = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[l] || Bt.ItemComponents[l] : a;
    return Object.assign(m, {
      type: l,
      component: typeof a == "string" ? a : void 0
    }), this.renderTypedItem(g, {
      className: D(h),
      children: d,
      style: f,
      key: u,
      ...c
    }, {
      ...m,
      type: l,
      component: typeof a == "string" ? a : void 0
    });
  }
  renderTypedItem(t, s, i) {
    const { children: o, className: r, key: l, ...a } = s, { activeClass: u = "", activeKey: c, activeIcon: h } = this.props, f = h && c === l ? /* @__PURE__ */ Rt("i", { className: `checked icon icon-${h}` }) : null, d = c === l;
    return /* @__PURE__ */ Rt(
      "li",
      {
        className: D("action-menu-item", `${this.name}-${i.type}`, r, { [u]: d }),
        ...a,
        children: [
          /* @__PURE__ */ Rt(t, { ...i }),
          f,
          typeof o == "function" ? o() : o
        ]
      },
      l
    );
  }
  render() {
    const t = this.beforeRender(), {
      name: s,
      style: i,
      commonItemProps: o,
      className: r,
      items: l,
      children: a,
      itemRender: u,
      onClickItem: c,
      beforeRender: h,
      afterRender: f,
      beforeDestroy: d,
      activeClass: m,
      activeKey: g,
      ...y
    } = t, b = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ Rt(b, { class: D(this.name, r), style: i, ...y, ref: this.ref, children: [
      l && l.map(this.renderItem.bind(this, t)),
      a
    ] });
  }
}, E(Bt, "ItemComponents", {
  divider: su,
  item: vc,
  heading: iu,
  space: ou,
  custom: lu,
  basic: xc
}), E(Bt, "ROOT_TAG", "menu"), E(Bt, "NAME", "action-menu"), Bt);
class Vr extends J {
}
E(Vr, "NAME", "actionmenu"), E(Vr, "Component", io);
function qr({
  ...e
}) {
  return /* @__PURE__ */ Rt(vc, { ...e });
}
var Eo, Hn, xt, He;
let Ec = (Eo = class extends io {
  constructor(t) {
    super(t);
    w(this, Hn, /* @__PURE__ */ new Set());
    w(this, xt, void 0);
    w(this, He, (t, s, i) => {
      this.toggleNestedMenu(t, s), i.preventDefault();
    });
    $(this, xt, t.nestedShow === void 0), p(this, xt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: s, nestedTrigger: i, defaultNestedShow: o, controlledMenu: r, ...l } = t;
    return l;
  }
  renderNestedMenu(t) {
    let { items: s } = t;
    if (!s || (typeof s == "function" && (s = s(t, this)), !s.length))
      return;
    const i = this.constructor, { name: o, controlledMenu: r, nestedShow: l, beforeDestroy: a, beforeRender: u, itemRender: c, activeClass: h, activeKey: f, onClickItem: d, afterRender: m, commonItemProps: g, activeIcon: y } = this.props;
    return /* @__PURE__ */ Rt(
      i,
      {
        items: s,
        name: o,
        nestedShow: p(this, xt) ? this.state.nestedShow : l,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: r || this,
        commonItemProps: g,
        onClickItem: d,
        afterRender: m,
        beforeRender: u,
        beforeDestroy: a,
        itemRender: c,
        activeClass: h,
        activeKey: f,
        activeIcon: y
      }
    );
  }
  isNestedItem(t) {
    return (!t.type || t.type === "item") && !!t.items;
  }
  renderToggleIcon(t, s) {
  }
  getItemRenderProps(t, s, i) {
    const o = super.getItemRenderProps(t, s, i);
    if (!this.isNestedItem(o))
      return o;
    const r = o.key ?? i;
    p(this, Hn).add(r);
    const l = this.isNestedMenuShow(r);
    if (l && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(s)
    ], o.component = qr), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: p(this, He).bind(this, r, !0),
        onMouseLeave: p(this, He).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: u } = o;
      o.onClick = (c) => {
        p(this, He).call(this, r, void 0, c), u == null || u(c);
      };
    }
    const a = this.renderToggleIcon(l, o);
    return a && (o.children = [o.children, a]), o.rootClass = [o.rootClass, "has-nested-menu", l ? "show" : ""], o;
  }
  isNestedMenuShow(t) {
    const s = p(this, xt) ? this.state.nestedShow : this.props.nestedShow;
    return s && typeof s == "object" ? s[t] : !!s;
  }
  toggleNestedMenu(t, s) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(t, s);
    if (!p(this, xt))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...p(this, Hn).values()].reduce((r, l) => (r[l] = !0, r), {}) : o = {}), s === void 0)
      s = !o[t];
    else if (!!o[t] == !!s)
      return !1;
    return s ? o[t] = s : delete o[t], this.setState({ nestedShow: { ...o } }), !0;
  }
  showNestedMenu(t) {
    return this.toggleNestedMenu(t, !0);
  }
  hideNestedMenu(t) {
    return this.toggleNestedMenu(t, !1);
  }
  showAllNestedMenu() {
    p(this, xt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    p(this, xt) && this.setState({ nestedShow: !1 });
  }
}, Hn = new WeakMap(), xt = new WeakMap(), He = new WeakMap(), E(Eo, "ItemComponents", {
  item: qr
}), Eo);
class Yr extends J {
}
E(Yr, "NAME", "actionmenunested"), E(Yr, "Component", Ec);
let Mt = class extends F {
  render() {
    const {
      component: n,
      type: t,
      btnType: s,
      size: i,
      className: o,
      children: r,
      url: l,
      target: a,
      disabled: u,
      active: c,
      loading: h,
      loadingIcon: f,
      loadingText: d,
      icon: m,
      text: g,
      trailingIcon: y,
      caret: b,
      square: x,
      hint: S,
      ...R
    } = this.props, A = n || (l ? "a" : "button"), N = g == null || typeof g == "string" && !g.length || h && !d, L = b && N && !m && !y && !r && !h;
    return bt(
      A,
      {
        className: D("btn", t, o, {
          "btn-caret": L,
          disabled: u || h,
          active: c,
          loading: h,
          square: x === void 0 ? !L && !r && N : x
        }, i ? `size-${i}` : ""),
        title: S,
        [A === "a" ? "href" : "data-url"]: l,
        [A === "a" ? "target" : "data-target"]: a,
        type: A === "button" ? s : void 0,
        ...R
      },
      h ? /* @__PURE__ */ _("i", { class: `spin icon ${f || "icon-spinner-snake"}` }) : No(m),
      N ? null : /* @__PURE__ */ _("span", { className: "text", children: h ? d : g }),
      h ? null : r,
      h ? null : typeof y == "string" ? /* @__PURE__ */ _("i", { class: `icon ${y}` }) : y,
      h ? null : b ? /* @__PURE__ */ _("span", { className: typeof b == "string" ? `caret-${b}` : "caret" }) : null
    );
  }
};
class Gr extends J {
}
E(Gr, "NAME", "button"), E(Gr, "Component", Mt);
var So;
let fr = (So = class extends Ec {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const n = super.beforeRender();
    let { hasIcons: t } = n;
    return t === void 0 && (t = n.items.some((s) => s.icon)), n.className = D(n.className, this.menuName, {
      "has-icons": t,
      "has-nested-items": n.items.some((s) => this.isNestedItem(s)),
      "menu-popup": n.popup
    }), n;
  }
  renderToggleIcon(n) {
    return /* @__PURE__ */ _("span", { class: `${this.name}-toggle-icon caret-${n ? "down" : "right"}` });
  }
}, E(So, "NAME", "menu"), So);
class Kr extends J {
}
E(Kr, "NAME", "menu"), E(Kr, "Component", fr);
let fs = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
function cu({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ _(Mt, { type: t, ...s });
}
function ds(e) {
  return e.split("-")[1];
}
function dr(e) {
  return e === "y" ? "height" : "width";
}
function Me(e) {
  return e.split("-")[0];
}
function oo(e) {
  return ["top", "bottom"].includes(Me(e)) ? "x" : "y";
}
function Xr(e, n, t) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, l = oo(n), a = dr(l), u = s[a] / 2 - i[a] / 2, c = l === "x";
  let h;
  switch (Me(n)) {
    case "top":
      h = { x: o, y: s.y - i.height };
      break;
    case "bottom":
      h = { x: o, y: s.y + s.height };
      break;
    case "right":
      h = { x: s.x + s.width, y: r };
      break;
    case "left":
      h = { x: s.x - i.width, y: r };
      break;
    default:
      h = { x: s.x, y: s.y };
  }
  switch (ds(n)) {
    case "start":
      h[l] -= u * (t && c ? -1 : 1);
      break;
    case "end":
      h[l] += u * (t && c ? -1 : 1);
  }
  return h;
}
const au = async (e, n, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let u = await r.getElementRects({ reference: e, floating: n, strategy: i }), { x: c, y: h } = Xr(u, s, a), f = s, d = {}, m = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: y, fn: b } = l[g], { x, y: S, data: R, reset: A } = await b({ x: c, y: h, initialPlacement: s, placement: f, strategy: i, middlewareData: d, rects: u, platform: r, elements: { reference: e, floating: n } });
    c = x ?? c, h = S ?? h, d = { ...d, [y]: { ...d[y], ...R } }, A && m <= 50 && (m++, typeof A == "object" && (A.placement && (f = A.placement), A.rects && (u = A.rects === !0 ? await r.getElementRects({ reference: e, floating: n, strategy: i }) : A.rects), { x: c, y: h } = Xr(u, f, a)), g = -1);
  }
  return { x: c, y: h, placement: f, strategy: i, middlewareData: d };
};
function Sc(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function js(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function hu(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: s, y: i, platform: o, rects: r, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: h = "floating", altBoundary: f = !1, padding: d = 0 } = n, m = Sc(d), g = l[f ? h === "floating" ? "reference" : "floating" : h], y = js(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(g))) == null || t ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: c, strategy: a })), b = h === "floating" ? { ...r.floating, x: s, y: i } : r.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), S = await (o.isElement == null ? void 0 : o.isElement(x)) && await (o.getScale == null ? void 0 : o.getScale(x)) || { x: 1, y: 1 }, R = js(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: b, offsetParent: x, strategy: a }) : b);
  return { top: (y.top - R.top + m.top) / S.y, bottom: (R.bottom - y.bottom + m.bottom) / S.y, left: (y.left - R.left + m.left) / S.x, right: (R.right - y.right + m.right) / S.x };
}
const uu = Math.min, fu = Math.max;
function du(e, n, t) {
  return fu(e, uu(n, t));
}
const pu = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { element: t, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: l, platform: a, elements: u } = n;
  if (t == null)
    return {};
  const c = Sc(s), h = { x: i, y: o }, f = oo(r), d = dr(f), m = await a.getDimensions(t), g = f === "y", y = g ? "top" : "left", b = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", S = l.reference[d] + l.reference[f] - h[f] - l.floating[d], R = h[f] - l.reference[f], A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(t));
  let N = A ? A[x] : 0;
  N && await (a.isElement == null ? void 0 : a.isElement(A)) || (N = u.floating[x] || l.floating[d]);
  const L = S / 2 - R / 2, M = c[y], P = N - m[d] - c[b], T = N / 2 - m[d] / 2 + L, I = du(M, T, P), U = ds(r) != null && T != I && l.reference[d] / 2 - (T < M ? c[y] : c[b]) - m[d] / 2 < 0;
  return { [f]: h[f] - (U ? T < M ? M - T : P - T : 0), data: { [f]: I, centerOffset: T - I } };
} }), mu = ["top", "right", "bottom", "left"];
mu.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const gu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Bs(e) {
  return e.replace(/left|right|bottom|top/g, (n) => gu[n]);
}
function yu(e, n, t) {
  t === void 0 && (t = !1);
  const s = ds(e), i = oo(e), o = dr(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = Bs(r)), { main: r, cross: Bs(r) };
}
const _u = { start: "end", end: "start" };
function _o(e) {
  return e.replace(/start|end/g, (n) => _u[n]);
}
const Cc = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: l, elements: a } = n, { mainAxis: u = !0, crossAxis: c = !0, fallbackPlacements: h, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: d = "none", flipAlignment: m = !0, ...g } = e, y = Me(s), b = Me(r) === r, x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), S = h || (b || !m ? [Bs(r)] : function(I) {
      const U = Bs(I);
      return [_o(I), U, _o(U)];
    }(r));
    h || d === "none" || S.push(...function(I, U, X, V) {
      const H = ds(I);
      let W = function(ht, Dt, ke) {
        const he = ["left", "right"], wt = ["right", "left"], Re = ["top", "bottom"], gs = ["bottom", "top"];
        switch (ht) {
          case "top":
          case "bottom":
            return ke ? Dt ? wt : he : Dt ? he : wt;
          case "left":
          case "right":
            return Dt ? Re : gs;
          default:
            return [];
        }
      }(Me(I), X === "start", V);
      return H && (W = W.map((ht) => ht + "-" + H), U && (W = W.concat(W.map(_o)))), W;
    }(r, m, d, x));
    const R = [r, ...S], A = await hu(n, g), N = [];
    let L = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (u && N.push(A[y]), c) {
      const { main: I, cross: U } = yu(s, o, x);
      N.push(A[I], A[U]);
    }
    if (L = [...L, { placement: s, overflows: N }], !N.every((I) => I <= 0)) {
      var M, P;
      const I = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1, U = R[I];
      if (U)
        return { data: { index: I, overflows: L }, reset: { placement: U } };
      let X = (P = L.filter((V) => V.overflows[0] <= 0).sort((V, H) => V.overflows[1] - H.overflows[1])[0]) == null ? void 0 : P.placement;
      if (!X)
        switch (f) {
          case "bestFit": {
            var T;
            const V = (T = L.map((H) => [H.placement, H.overflows.filter((W) => W > 0).reduce((W, ht) => W + ht, 0)]).sort((H, W) => H[1] - W[1])[0]) == null ? void 0 : T[0];
            V && (X = V);
            break;
          }
          case "initialPlacement":
            X = r;
        }
      if (s !== X)
        return { reset: { placement: X } };
    }
    return {};
  } };
}, bu = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: s } = n, i = await async function(o, r) {
      const { placement: l, platform: a, elements: u } = o, c = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), h = Me(l), f = ds(l), d = oo(l) === "x", m = ["left", "top"].includes(h) ? -1 : 1, g = c && d ? -1 : 1, y = typeof r == "function" ? r(o) : r;
      let { mainAxis: b, crossAxis: x, alignmentAxis: S } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return f && typeof S == "number" && (x = f === "end" ? -1 * S : S), d ? { x: x * g, y: b * m } : { x: b * m, y: x * g };
    }(n, e);
    return { x: t + i.x, y: s + i.y, data: i };
  } };
};
function ot(e) {
  var n;
  return ((n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function gt(e) {
  return ot(e).getComputedStyle(e);
}
function $c(e) {
  return e instanceof ot(e).Node;
}
function re(e) {
  return $c(e) ? (e.nodeName || "").toLowerCase() : "";
}
let _s;
function kc() {
  if (_s)
    return _s;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (_s = e.brands.map((n) => n.brand + "/" + n.version).join(" "), _s) : navigator.userAgent;
}
function _t(e) {
  return e instanceof ot(e).HTMLElement;
}
function rt(e) {
  return e instanceof ot(e).Element;
}
function Jr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ot(e).ShadowRoot || e instanceof ShadowRoot;
}
function Mn(e) {
  const { overflow: n, overflowX: t, overflowY: s, display: i } = gt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + s + t) && !["inline", "contents"].includes(i);
}
function wu(e) {
  return ["table", "td", "th"].includes(re(e));
}
function Lo(e) {
  const n = /firefox/i.test(kc()), t = gt(e), s = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!s && s !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function Do() {
  return /^((?!chrome|android).)*safari/i.test(kc());
}
function ro(e) {
  return ["html", "body", "#document"].includes(re(e));
}
const Zr = Math.min, Sn = Math.max, zs = Math.round;
function Rc(e) {
  const n = gt(e);
  let t = parseFloat(n.width) || 0, s = parseFloat(n.height) || 0;
  const i = _t(e), o = i ? e.offsetWidth : t, r = i ? e.offsetHeight : s, l = zs(t) !== o || zs(s) !== r;
  return l && (t = o, s = r), { width: t, height: s, fallback: l };
}
function Ac(e) {
  return rt(e) ? e : e.contextElement;
}
const Tc = { x: 1, y: 1 };
function Le(e) {
  const n = Ac(e);
  if (!_t(n))
    return Tc;
  const t = n.getBoundingClientRect(), { width: s, height: i, fallback: o } = Rc(n);
  let r = (o ? zs(t.width) : t.width) / s, l = (o ? zs(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
function ve(e, n, t, s) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), l = Ac(e);
  let a = Tc;
  n && (s ? rt(s) && (a = Le(s)) : a = Le(e));
  const u = l ? ot(l) : window, c = Do() && t;
  let h = (r.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, f = (r.top + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / a.y, d = r.width / a.x, m = r.height / a.y;
  if (l) {
    const g = ot(l), y = s && rt(s) ? ot(s) : s;
    let b = g.frameElement;
    for (; b && s && y !== g; ) {
      const x = Le(b), S = b.getBoundingClientRect(), R = getComputedStyle(b);
      S.x += (b.clientLeft + parseFloat(R.paddingLeft)) * x.x, S.y += (b.clientTop + parseFloat(R.paddingTop)) * x.y, h *= x.x, f *= x.y, d *= x.x, m *= x.y, h += S.x, f += S.y, b = ot(b).frameElement;
    }
  }
  return js({ width: d, height: m, x: h, y: f });
}
function se(e) {
  return (($c(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function lo(e) {
  return rt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Nc(e) {
  return ve(se(e)).left + lo(e).scrollLeft;
}
function hn(e) {
  if (re(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || Jr(e) && e.host || se(e);
  return Jr(n) ? n.host : n;
}
function Mc(e) {
  const n = hn(e);
  return ro(n) ? n.ownerDocument.body : _t(n) && Mn(n) ? n : Mc(n);
}
function Cn(e, n) {
  var t;
  n === void 0 && (n = []);
  const s = Mc(e), i = s === ((t = e.ownerDocument) == null ? void 0 : t.body), o = ot(s);
  return i ? n.concat(o, o.visualViewport || [], Mn(s) ? s : []) : n.concat(s, Cn(s));
}
function Qr(e, n, t) {
  let s;
  if (n === "viewport")
    s = function(r, l) {
      const a = ot(r), u = se(r), c = a.visualViewport;
      let h = u.clientWidth, f = u.clientHeight, d = 0, m = 0;
      if (c) {
        h = c.width, f = c.height;
        const g = Do();
        (!g || g && l === "fixed") && (d = c.offsetLeft, m = c.offsetTop);
      }
      return { width: h, height: f, x: d, y: m };
    }(e, t);
  else if (n === "document")
    s = function(r) {
      const l = se(r), a = lo(r), u = r.ownerDocument.body, c = Sn(l.scrollWidth, l.clientWidth, u.scrollWidth, u.clientWidth), h = Sn(l.scrollHeight, l.clientHeight, u.scrollHeight, u.clientHeight);
      let f = -a.scrollLeft + Nc(r);
      const d = -a.scrollTop;
      return gt(u).direction === "rtl" && (f += Sn(l.clientWidth, u.clientWidth) - c), { width: c, height: h, x: f, y: d };
    }(se(e));
  else if (rt(n))
    s = function(r, l) {
      const a = ve(r, !0, l === "fixed"), u = a.top + r.clientTop, c = a.left + r.clientLeft, h = _t(r) ? Le(r) : { x: 1, y: 1 };
      return { width: r.clientWidth * h.x, height: r.clientHeight * h.y, x: c * h.x, y: u * h.y };
    }(n, t);
  else {
    const r = { ...n };
    if (Do()) {
      var i, o;
      const l = ot(e);
      r.x -= ((i = l.visualViewport) == null ? void 0 : i.offsetLeft) || 0, r.y -= ((o = l.visualViewport) == null ? void 0 : o.offsetTop) || 0;
    }
    s = r;
  }
  return js(s);
}
function Lc(e, n) {
  const t = hn(e);
  return !(t === n || !rt(t) || ro(t)) && (gt(t).position === "fixed" || Lc(t, n));
}
function tl(e, n) {
  return _t(e) && gt(e).position !== "fixed" ? n ? n(e) : e.offsetParent : null;
}
function el(e, n) {
  const t = ot(e);
  if (!_t(e))
    return t;
  let s = tl(e, n);
  for (; s && wu(s) && gt(s).position === "static"; )
    s = tl(s, n);
  return s && (re(s) === "html" || re(s) === "body" && gt(s).position === "static" && !Lo(s)) ? t : s || function(i) {
    let o = hn(i);
    for (; _t(o) && !ro(o); ) {
      if (Lo(o))
        return o;
      o = hn(o);
    }
    return null;
  }(e) || t;
}
function vu(e, n, t) {
  const s = _t(n), i = se(n), o = ve(e, !0, t === "fixed", n);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && t !== "fixed")
    if ((re(n) !== "body" || Mn(i)) && (r = lo(n)), _t(n)) {
      const a = ve(n, !0);
      l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
    } else
      i && (l.x = Nc(i));
  return { x: o.left + r.scrollLeft - l.x, y: o.top + r.scrollTop - l.y, width: o.width, height: o.height };
}
const xu = { getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: s, strategy: i } = e;
  const o = t === "clippingAncestors" ? function(u, c) {
    const h = c.get(u);
    if (h)
      return h;
    let f = Cn(u).filter((y) => rt(y) && re(y) !== "body"), d = null;
    const m = gt(u).position === "fixed";
    let g = m ? hn(u) : u;
    for (; rt(g) && !ro(g); ) {
      const y = gt(g), b = Lo(g);
      b || y.position !== "fixed" || (d = null), (m ? !b && !d : !b && y.position === "static" && d && ["absolute", "fixed"].includes(d.position) || Mn(g) && !b && Lc(u, g)) ? f = f.filter((x) => x !== g) : d = y, g = hn(g);
    }
    return c.set(u, f), f;
  }(n, this._c) : [].concat(t), r = [...o, s], l = r[0], a = r.reduce((u, c) => {
    const h = Qr(n, c, i);
    return u.top = Sn(h.top, u.top), u.right = Zr(h.right, u.right), u.bottom = Zr(h.bottom, u.bottom), u.left = Sn(h.left, u.left), u;
  }, Qr(n, l, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: s } = e;
  const i = _t(t), o = se(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((re(t) !== "body" || Mn(o)) && (r = lo(t)), _t(t))) {
    const u = ve(t);
    l = Le(t), a.x = u.x + t.clientLeft, a.y = u.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - r.scrollLeft * l.x + a.x, y: n.y * l.y - r.scrollTop * l.y + a.y };
}, isElement: rt, getDimensions: function(e) {
  return Rc(e);
}, getOffsetParent: el, getDocumentElement: se, getScale: Le, async getElementRects(e) {
  let { reference: n, floating: t, strategy: s } = e;
  const i = this.getOffsetParent || el, o = this.getDimensions;
  return { reference: vu(n, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => gt(e).direction === "rtl" };
function Eu(e, n, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: l = !1 } = s, a = i || o ? [...rt(e) ? Cn(e) : e.contextElement ? Cn(e.contextElement) : [], ...Cn(n)] : [];
  a.forEach((f) => {
    const d = !rt(f) && f.toString().includes("V");
    !i || l && !d || f.addEventListener("scroll", t, { passive: !0 }), o && f.addEventListener("resize", t);
  });
  let u, c = null;
  r && (c = new ResizeObserver(() => {
    t();
  }), rt(e) && !l && c.observe(e), rt(e) || !e.contextElement || l || c.observe(e.contextElement), c.observe(n));
  let h = l ? ve(e) : null;
  return l && function f() {
    const d = ve(e);
    !h || d.x === h.x && d.y === h.y && d.width === h.width && d.height === h.height || t(), h = d, u = requestAnimationFrame(f);
  }(), t(), () => {
    var f;
    a.forEach((d) => {
      i && d.removeEventListener("scroll", t), o && d.removeEventListener("resize", t);
    }), (f = c) == null || f.disconnect(), c = null, l && cancelAnimationFrame(u);
  };
}
const Dc = (e, n, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: xu, ...t }, o = { ...i.platform, _c: s };
  return au(e, n, { ...i, platform: o });
};
let Su = class extends fr {
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
      middleware: [Cc()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    this.ref.current && Dc(this._getPopperElement(), this.ref.current, n).then(({ x: t, y: s }) => {
      Object.assign(this.ref.current.style, {
        left: `${t}px`,
        top: `${s}px`,
        position: "absolute"
      });
    });
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && this._createPopper();
  }
  beforeRender() {
    const n = super.beforeRender();
    return n.className = D(n.className, "menu-popup"), n;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ _("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
const Cs = "contextmenu", bo = "show", Cu = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)';
var We, je, Wn, Be, jn, Xs, Oc, Js, Pc;
class ie extends cc {
  constructor() {
    super(...arguments);
    w(this, Xs);
    w(this, Js);
    w(this, We, void 0);
    w(this, je, void 0);
    w(this, Wn, void 0);
    w(this, Be, void 0);
    w(this, jn, void 0);
  }
  get $menu() {
    return v(this.menu);
  }
  get isShown() {
    return this.$menu.hasClass(bo);
  }
  get menu() {
    return p(this, We) || this._ensureMenu();
  }
  get trigger() {
    return p(this, Wn) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { $element: t } = this;
    t.is("body") || t.attr("data-toggle", "contextmenu");
  }
  show(t) {
    return this.isShown || ($(this, Wn, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this._renderMenu() ? !1 : (this.$menu.addClass(bo), this._createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var s;
    return !this.isShown || ((s = p(this, jn)) == null || s.call(this), this.emit("hide").defaultPrevented) ? !1 : (this.$menu.removeClass(bo), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = p(this, We)) == null || t.remove();
  }
  _ensureMenu() {
    const { $element: t } = this;
    let s;
    if (this.isDynamic)
      s = v(`<div class="${Cs}" />`).appendTo("body");
    else if (t.length) {
      const i = t.attr("href") || t.dataset("target");
      if ((i == null ? void 0 : i[0]) === "#" && (s = v(document).find(i)), !(s != null && s.length)) {
        const o = t.next();
        o.hasClass(Cs) ? s = o : s = t.parent().find(`.${Cs}`);
      }
      s && s.addClass("menu-popup");
    }
    if (!(s != null && s.length))
      throw new Error("[ZUI] ContextMenu: Cannot find menu element.");
    return $(this, We, s.css({
      width: "max-content",
      position: this.options.strategy,
      top: 0,
      left: 0
    })[0]), s[0];
  }
  _getPopperOptions() {
    var o;
    const { placement: t, strategy: s } = this.options, i = {
      middleware: [],
      placement: t,
      strategy: s
    };
    return this.options.flip && ((o = i.middleware) == null || o.push(Cc())), i;
  }
  _createPopper() {
    const t = this._getPopperOptions(), s = this._getPopperElement(), i = this.menu;
    $(this, jn, Eu(s, i, () => {
      Dc(s, i, t).then(({ x: o, y: r, middlewareData: l, placement: a }) => {
        v(i).css({ left: `${o}px`, top: `${r}px` });
        const u = a.split("-")[0], c = k(this, Xs, Oc).call(this, u);
        if (l.arrow && p(this, Be)) {
          const { x: h, y: f } = l.arrow;
          v(p(this, Be)).css({
            left: h != null ? `${h}px` : "",
            top: f != null ? `${f}px` : "",
            [c]: `${-p(this, Be).offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...k(this, Js, Pc).call(this, u)
          });
        }
      });
    }));
  }
  _getMenuOptions() {
    const { menu: t, items: s } = this.options;
    let i = s || (t == null ? void 0 : t.items);
    if (i)
      return typeof i == "function" && (i = i(this)), {
        nestedTrigger: "hover",
        ...t,
        items: i
      };
  }
  _renderMenu() {
    const t = this._getMenuOptions();
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Ko(bt(Su, t), this.menu), !0);
  }
  _getPopperElement() {
    return p(this, je) || $(this, je, {
      getBoundingClientRect: () => {
        const { trigger: t } = this;
        if (t instanceof MouseEvent) {
          const { clientX: s, clientY: i } = t;
          return {
            width: 0,
            height: 0,
            top: i,
            right: s,
            bottom: i,
            left: s
          };
        }
        return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
      },
      contextElement: this.element
    }), p(this, je);
  }
  static clear(t) {
    var a, u;
    t instanceof Event && (t = { event: t });
    const { event: s, exclude: i, ignoreSelector: o = ".not-hide-menu" } = t || {};
    if (s && o && ((u = (a = s.target).closest) != null && u.call(a, o)) || s && s.button === 2)
      return;
    const r = this.getAll(), l = new Set(i || []);
    for (const c of r)
      l.has(c.element) || c.hide();
  }
  static show(t) {
    const { event: s, ...i } = t, o = this.ensure(document.body);
    return o.setOptions(i), o.show(s), s instanceof Event && s.stopPropagation(), o;
  }
  static hide(t) {
    const s = this.query(t);
    return s == null || s.hide(), s;
  }
}
We = new WeakMap(), je = new WeakMap(), Wn = new WeakMap(), Be = new WeakMap(), jn = new WeakMap(), Xs = new WeakSet(), Oc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, Js = new WeakSet(), Pc = function(t) {
  return t === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : t === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : t === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, E(ie, "NAME", "ContextMenu"), E(ie, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
});
v(document).on("contextmenu", (e) => {
  const n = v(e.target);
  if (n.closest(`.${Cs}`).length)
    return;
  const t = n.closest(Cu);
  t.length && (ie.ensure(t).show(e), e.preventDefault());
}).on("click", ie.clear.bind(ie));
var ze, Fe, Ue, Zs, Ic;
const yr = class extends ie {
  constructor() {
    super(...arguments);
    w(this, Zs);
    w(this, ze, !1);
    w(this, Fe, 0);
    E(this, "hideLater", () => {
      p(this, Ue).call(this), $(this, Fe, window.setTimeout(this.hide.bind(this), 100));
    });
    w(this, Ue, () => {
      clearTimeout(p(this, Fe)), $(this, Fe, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, s) {
    (s == null ? void 0 : s.clearOthers) !== !1 && yr.clear({ event: s == null ? void 0 : s.event, exclude: [this.element] });
    const i = super.show(t);
    return i && (!p(this, ze) && this.isHover && k(this, Zs, Ic).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const t = super.hide();
    return t && this.element.classList.remove(this.elementShowClass), t;
  }
  toggle(t, s) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...s });
  }
  destroy() {
    p(this, ze) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", p(this, Ue)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  _getPopperOptions() {
    var i, o;
    const t = super._getPopperOptions(), s = this._getArrowSize();
    return s && this.arrowEl && ((i = t.middleware) == null || i.push(bu(s)), (o = t.middleware) == null || o.push(pu({ element: this.arrowEl }))), t;
  }
  _ensureMenu() {
    const t = super._ensureMenu();
    if (this.options.arrow) {
      const s = this._getArrowSize();
      this.arrowEl = document.createElement("div"), this.arrowEl.style.position = "absolute", this.arrowEl.style.width = `${s}px`, this.arrowEl.style.height = `${s}px`, this.arrowEl.style.transform = "rotate(45deg)", t.append(this.arrowEl);
    }
    return t;
  }
  _getMenuOptions() {
    const t = super._getMenuOptions();
    if (t && this.options.arrow) {
      const { afterRender: s } = t;
      t.afterRender = (...i) => {
        var o;
        this.arrowEl && ((o = this.menu.querySelector(".menu")) == null || o.appendChild(this.arrowEl)), s == null || s(...i);
      };
    }
    return t;
  }
};
let nt = yr;
ze = new WeakMap(), Fe = new WeakMap(), Ue = new WeakMap(), Zs = new WeakSet(), Ic = function() {
  const { menu: t } = this;
  t.addEventListener("mouseenter", p(this, Ue)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), $(this, ze, !0);
}, E(nt, "NAME", "dropdown"), E(nt, "MENU_CLASS", "dropdown-menu"), E(nt, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), E(nt, "DEFAULT", {
  ...ie.DEFAULT,
  strategy: "fixed",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  var s;
  const n = e.target, t = (s = n.closest) == null ? void 0 : s.call(n, nt.MENU_SELECTOR);
  if (t) {
    const i = nt.ensure(t);
    i.options.trigger === "click" && i.toggle();
  } else
    nt.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const n = e.target, t = (i = n.closest) == null ? void 0 : i.call(n, nt.MENU_SELECTOR);
  if (!t)
    return;
  const s = nt.ensure(t);
  s.isHover && s.show();
});
const $u = (e) => {
  const n = document.getElementsByClassName("with-dropdown-show")[0];
  if (!n)
    return;
  const t = typeof n.closest == "function" ? n.closest(nt.MENU_SELECTOR) : null;
  !t || !e.target.contains(t) || nt.clear({ event: e });
};
window.addEventListener("scroll", $u, !0);
var Bn, Ve;
class ku extends F {
  constructor(t) {
    var s;
    super(t);
    w(this, Bn, void 0);
    w(this, Ve, Ee());
    this.state = { placement: ((s = t.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return p(this, Ve);
  }
  get triggerElement() {
    return p(this, Ve).current;
  }
  componentDidMount() {
    const { modifiers: t = [], ...s } = this.props.dropdown || {};
    t.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: i }) => {
        var r;
        const o = ((r = i.placement) == null ? void 0 : r.split("-").shift()) || "";
        this.setState({ placement: o });
      }
    }), $(this, Bn, nt.ensure(this.triggerElement, {
      ...s,
      modifiers: t,
      onShow: () => {
        this.setState({ show: !0 });
      },
      onHide: () => {
        this.setState({ show: !0 });
      }
    }));
  }
  componentWillUnmount() {
    var t;
    (t = p(this, Bn)) == null || t.destroy();
  }
  beforeRender() {
    const { className: t, children: s, dropdown: i, ...o } = this.props;
    return {
      className: D("dropdown", t),
      children: typeof s == "function" ? s(this.state) : s,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: p(this, Ve)
    };
  }
  render() {
    const { children: t, ...s } = this.beforeRender();
    return /* @__PURE__ */ _("div", { ...s, children: t });
  }
}
Bn = new WeakMap(), Ve = new WeakMap();
class Ru extends ku {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var o;
    const { placement: n, show: t } = this.state, s = this.beforeRender();
    let { caret: i = !0 } = s;
    if (i !== !1 && (t || i === !0)) {
      const r = t ? n : (o = this.props.dropdown) == null ? void 0 : o.placement;
      i = (r === "top" ? "up" : r === "bottom" ? "down" : r) || (typeof i == "string" ? i : "") || "down";
    }
    return s.caret = i, /* @__PURE__ */ _(Mt, { ...s });
  }
}
function Hc({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ _(Ru, { type: t, ...s });
}
let Wc = class extends F {
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
  handleItemClick(n, t, s, i) {
    s && s.call(i.target, i);
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: n, index: t, event: i });
  }
  beforeRender() {
    var s;
    const n = { ...this.props }, t = (s = n.beforeRender) == null ? void 0 : s.call(this, n);
    return t && Object.assign(n, t), typeof n.items == "function" && (n.items = n.items.call(this)), n;
  }
  onRenderItem(n, t) {
    const { key: s = t, ...i } = n;
    return /* @__PURE__ */ _(Mt, { ...i }, s);
  }
  renderItem(n, t, s) {
    const { itemRender: i, btnProps: o, onClickItem: r } = n, l = { key: s, ...t };
    if (o && Object.assign(l, o), r && (l.onClick = this.handleItemClick.bind(this, l, s, t.onClick)), i) {
      const a = i.call(this, l, bt);
      if (st(a))
        return a;
      typeof a == "object" && Object.assign(l, a);
    }
    return this.onRenderItem(l, s);
  }
  render() {
    const n = this.beforeRender(), {
      className: t,
      items: s,
      size: i,
      type: o,
      btnProps: r,
      children: l,
      itemRender: a,
      onClickItem: u,
      beforeRender: c,
      afterRender: h,
      beforeDestroy: f,
      ...d
    } = n;
    return /* @__PURE__ */ _(
      "div",
      {
        className: D("btn-group", i ? `size-${i}` : "", t),
        ...d,
        children: [
          s && s.map(this.renderItem.bind(this, n)),
          l
        ]
      }
    );
  }
};
function Au({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ _(Wc, { type: t, ...s });
}
var Ne;
let un = (Ne = class extends io {
  beforeRender() {
    const { gap: n, btnProps: t, wrap: s, ...i } = super.beforeRender();
    return i.className = D(i.className, s ? "flex-wrap" : "", typeof n == "number" ? `gap-${n}` : ""), typeof n == "string" && (i.style ? i.style.gap = n : i.style = { gap: n }), i;
  }
  isBtnItem(n) {
    return n === "item" || n === "dropdown";
  }
  renderTypedItem(n, t, s) {
    const { type: i } = s, o = this.props.btnProps, r = this.isBtnItem(i) ? { btnType: "ghost", ...o } : {}, l = {
      ...t,
      ...r,
      ...s,
      className: D(`${this.name}-${i}`, t.className, r.className, s.className),
      style: Object.assign({}, t.style, r.style, s.style)
    };
    return i === "btn-group" && (l.btnProps = o), /* @__PURE__ */ _(n, { ...l });
  }
}, E(Ne, "ItemComponents", {
  item: cu,
  dropdown: Hc,
  "btn-group": Au
}), E(Ne, "ROOT_TAG", "nav"), E(Ne, "NAME", "toolbar"), E(Ne, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), Ne);
function Tu({
  className: e,
  style: n,
  actions: t,
  heading: s,
  content: i,
  contentClass: o,
  children: r,
  close: l,
  onClose: a,
  icon: u,
  ...c
}) {
  let h;
  l === !0 ? h = /* @__PURE__ */ _(Mt, { className: "alert-close btn ghost", square: !0, onClick: a, children: /* @__PURE__ */ _("span", { class: "close" }) }) : st(l) ? h = l : typeof l == "object" && (h = /* @__PURE__ */ _(Mt, { ...l, onClick: a }));
  const f = st(t) ? t : t ? /* @__PURE__ */ _(un, { ...t }) : null;
  return /* @__PURE__ */ _("div", { className: D("alert", e), style: n, ...c, children: [
    st(u) ? u : typeof u == "string" ? /* @__PURE__ */ _("i", { className: `icon ${u}` }) : null,
    st(i) ? i : /* @__PURE__ */ _("div", { className: D("alert-content", o), children: [
      st(s) ? s : s && /* @__PURE__ */ _("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ _("div", { className: "alert-text", children: i }),
      s ? f : null
    ] }),
    s ? null : f,
    h,
    r
  ] });
}
function Nu(e) {
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
let Mu = class extends F {
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
  render() {
    const {
      afterRender: n,
      beforeDestroy: t,
      margin: s,
      type: i,
      placement: o,
      animation: r,
      show: l,
      className: a,
      time: u,
      ...c
    } = this.props;
    return /* @__PURE__ */ _(
      Tu,
      {
        className: D("messager", a, i, r === !0 ? Nu(o) : r, l ? "in" : ""),
        ...c
      }
    );
  }
};
var qe, ks;
class $s extends J {
  constructor() {
    super(...arguments);
    w(this, qe);
    E(this, "_show", !1);
    E(this, "_showTimer", 0);
    E(this, "_afterRender", ({ firstRender: t }) => {
      t && this.show();
      const { margin: s } = this.options;
      s && (this.element.style.margin = `${s}px`);
    });
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (t) => {
      t.target.closest('.alert-close,[data-dismiss="messager"]') && (t.preventDefault(), t.stopPropagation(), this.hide());
    });
  }
  setOptions(t) {
    return t = super.setOptions(t), {
      ...t,
      show: this._show,
      afterRender: this._afterRender
    };
  }
  show() {
    this._show || (this.emit("show"), this.render(), this._show = !0, k(this, qe, ks).call(this, () => {
      this.emit("shown");
      const { time: t } = this.options;
      t && k(this, qe, ks).call(this, () => this.hide(), t);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), k(this, qe, ks).call(this, () => {
      this.emit("hidden");
    }));
  }
}
qe = new WeakSet(), ks = function(t, s = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, s);
}, E($s, "NAME", "MessagerItem"), E($s, "EVENTS", !0), E($s, "Component", Mu);
var pe, Ye, Wt, Qs, jc, ti, Bc;
const _r = class extends Ut {
  constructor() {
    super(...arguments);
    w(this, Qs);
    w(this, ti);
    w(this, pe, void 0);
    w(this, Ye, fs(6));
    w(this, Wt, void 0);
  }
  get id() {
    return p(this, Ye);
  }
  get isShown() {
    var t;
    return !!((t = p(this, Wt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), k(this, Qs, jc).call(this).show();
  }
  hide() {
    var t;
    (t = p(this, Wt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: s, ...i } = t, o = new _r(s || "body", i);
    return o.show(), o;
  }
};
let _n = _r;
pe = new WeakMap(), Ye = new WeakMap(), Wt = new WeakMap(), Qs = new WeakSet(), jc = function() {
  if (p(this, Wt))
    p(this, Wt).setOptions(this.options);
  else {
    const t = k(this, ti, Bc).call(this), s = new $s(t, this.options);
    s.on("hidden", () => {
      s.destroy(), t.remove(), $(this, pe, void 0);
    }), $(this, Wt, s);
  }
  return p(this, Wt);
}, ti = new WeakSet(), Bc = function() {
  if (p(this, pe))
    return p(this, pe);
  const { placement: t = "top" } = this.options;
  let s = this.element.querySelector(`.messagers-${t}`);
  s || (s = document.createElement("div"), s.className = `messagers messagers-${t}`, this.element.appendChild(s));
  let i = s.querySelector(`#messager-${p(this, Ye)}`);
  return i || (i = document.createElement("div"), i.className = "messager-holder", i.id = `messager-${p(this, Ye)}`, s.appendChild(i), $(this, pe, i)), i;
}, E(_n, "NAME", "messager"), E(_n, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
v(document).on("zui.messager.show", (e, n) => {
  n && _n.show(n);
});
var vs;
let Lu = (vs = class extends F {
  render() {
    const { percent: n, circleSize: t, circleBorderSize: s, circleBgColor: i, circleColor: o } = this.props, r = (t - s) / 2, l = t / 2;
    return /* @__PURE__ */ _("svg", { width: t, height: t, class: "progress-circle", children: [
      /* @__PURE__ */ _("circle", { cx: l, cy: l, r, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ _("circle", { cx: l, cy: l, r, stroke: o, "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - n) / 100, "stroke-width": s }),
      /* @__PURE__ */ _("text", { x: l, y: l + s / 4, "dominant-baseline": "middle", style: { fontSize: `${r}px` }, children: Math.round(n) })
    ] });
  }
}, E(vs, "NAME", "zui.progress-circle"), E(vs, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), vs);
class nl extends J {
}
E(nl, "NAME", "table-sorter"), E(nl, "Component", Lu);
let Du = class extends F {
  constructor() {
    super(...arguments);
    E(this, "state", { checked: !1 });
    E(this, "handleOnClick", () => {
      this.setState({ checked: !this.state.checked });
    });
  }
  componentDidMount() {
    this.setState({ checked: this.props.defaultChecked ?? !1 });
  }
  render() {
    const {
      component: t,
      className: s,
      children: i,
      text: o,
      icon: r,
      surffixIcon: l,
      disabled: a,
      defaultChecked: u,
      onChange: c,
      ...h
    } = this.props, f = this.state.checked ? 1 : 0, d = t || "div", m = typeof r == "string" ? /* @__PURE__ */ _("i", { class: `icon ${r}` }) : r, g = typeof l == "string" ? /* @__PURE__ */ _("i", { class: `icon ${l}` }) : l, y = [
      /* @__PURE__ */ _("input", { onChange: c, type: "checkbox", value: f, checked: !!this.state.checked }),
      /* @__PURE__ */ _("label", { children: [
        m,
        o,
        g
      ] })
    ];
    return bt(
      d,
      {
        className: D("switch", s, { disabled: a }),
        onClick: this.handleOnClick,
        ...h
      },
      ...y,
      i
    );
  }
};
class sl extends J {
}
E(sl, "NAME", "switch"), E(sl, "Component", Du);
/*! js-cookie v3.0.1 | MIT */
function bs(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n];
    for (var s in t)
      e[s] = t[s];
  }
  return e;
}
var Ou = {
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
function Oo(e, n) {
  function t(i, o, r) {
    if (!(typeof document > "u")) {
      r = bs({}, n, r), typeof r.expires == "number" && (r.expires = new Date(Date.now() + r.expires * 864e5)), r.expires && (r.expires = r.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var l = "";
      for (var a in r)
        r[a] && (l += "; " + a, r[a] !== !0 && (l += "=" + r[a].split(";")[0]));
      return document.cookie = i + "=" + e.write(o, i) + l;
    }
  }
  function s(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var o = document.cookie ? document.cookie.split("; ") : [], r = {}, l = 0; l < o.length; l++) {
        var a = o[l].split("="), u = a.slice(1).join("=");
        try {
          var c = decodeURIComponent(a[0]);
          if (r[c] = e.read(u, c), i === c)
            break;
        } catch {
        }
      }
      return i ? r[i] : r;
    }
  }
  return Object.create(
    {
      set: t,
      get: s,
      remove: function(i, o) {
        t(
          i,
          "",
          bs({}, o, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return Oo(this.converter, bs({}, this.attributes, i));
      },
      withConverter: function(i) {
        return Oo(bs({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(n) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var Pu = Oo(Ou, { path: "/" });
window.$ && Object.assign(window.$, { cookie: Pu });
var zn, Kt, Et, Ge, Ke, Rs;
const br = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(n, t = "local") {
    w(this, Ke);
    w(this, zn, void 0);
    w(this, Kt, void 0);
    w(this, Et, void 0);
    w(this, Ge, void 0);
    $(this, zn, t), $(this, Kt, `ZUI_STORE:${n ?? fs()}`), $(this, Et, t === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return p(this, zn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (p(this, Ge) || $(this, Ge, new br(p(this, Kt), "session")), p(this, Ge));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(n, t) {
    const s = p(this, Et).getItem(k(this, Ke, Rs).call(this, n));
    return typeof s == "string" ? JSON.parse(s) : s ?? t;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(n, t) {
    if (t == null)
      return this.remove(n);
    p(this, Et).setItem(k(this, Ke, Rs).call(this, n), JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(n) {
    p(this, Et).removeItem(k(this, Ke, Rs).call(this, n));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(n) {
    for (let t = 0; t < p(this, Et).length; t++) {
      const s = p(this, Et).key(t);
      if (s != null && s.startsWith(p(this, Kt))) {
        const i = p(this, Et).getItem(s);
        typeof i == "string" && n(s.substring(p(this, Kt).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const n = {};
    return this.each((t, s) => {
      n[t] = s;
    }), n;
  }
};
let Fs = br;
zn = new WeakMap(), Kt = new WeakMap(), Et = new WeakMap(), Ge = new WeakMap(), Ke = new WeakSet(), Rs = function(n) {
  return `${p(this, Kt)}:${n}`;
};
const Iu = new Fs("DEFAULT");
function Hu(e, n = "local") {
  return new Fs(e, n);
}
Object.assign(Iu, { create: Hu });
function Wu(e) {
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
function ju(e) {
  const [n, t, s] = typeof e == "string" ? Wu(e) : e;
  return n * 0.299 + t * 0.587 + s * 0.114 > 186;
}
function il(e, n) {
  return ju(e) ? (n == null ? void 0 : n.dark) ?? "#333333" : (n == null ? void 0 : n.light) ?? "#ffffff";
}
function ol(e, n = 255) {
  return Math.min(Math.max(e, 0), n);
}
function Bu(e, n, t) {
  e = e % 360 / 360, n = ol(n), t = ol(t);
  const s = t <= 0.5 ? t * (n + 1) : t + n - t * n, i = t * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function zu(e) {
  let n = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let t = 0; t < e.length; ++t)
      n += (t + 1) * e.charCodeAt(t);
  return n;
}
function Fu(e, n) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= n ? e : e.substring(e.length - n) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= n ? e : e.substring(0, n), e;
}
let zc = class extends F {
  render() {
    const {
      className: n,
      style: t,
      size: s = "",
      circle: i,
      rounded: o,
      background: r,
      foreColor: l,
      text: a,
      code: u,
      maxTextLength: c = 2,
      src: h,
      hueDistance: f = 43,
      saturation: d = 0.4,
      lightness: m = 0.6,
      children: g,
      ...y
    } = this.props, b = ["avatar", n], x = { ...t, background: r, color: l };
    let S = 32;
    s && (typeof s == "number" ? (x.width = `${s}px`, x.height = `${s}px`, x.fontSize = `${Math.max(12, Math.round(s / 2))}px`, S = s) : (b.push(`size-${s}`), S = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? b.push("circle") : o && (typeof o == "number" ? x.borderRadius = `${o}px` : b.push(`rounded-${o}`));
    let R;
    if (h)
      b.push("has-img"), R = /* @__PURE__ */ _("img", { className: "avatar-img", src: h, alt: a });
    else if (a != null && a.length) {
      const A = Fu(a, c);
      if (b.push("has-text", `has-text-${A.length}`), r)
        !l && r && (x.color = il(r));
      else {
        const L = u ?? a, M = (typeof L == "number" ? L : zu(L)) * f % 360;
        if (x.background = `hsl(${M},${d * 100}%,${m * 100}%)`, !l) {
          const P = Bu(M, d, m);
          x.color = il(P);
        }
      }
      let N;
      S && S < 14 * A.length && (N = { transform: `scale(${S / (14 * A.length)})`, whiteSpace: "nowrap" }), R = /* @__PURE__ */ _("div", { "data-actualSize": S, className: "avatar-text", style: N, children: A });
    }
    return /* @__PURE__ */ _(
      "div",
      {
        className: D(b),
        style: x,
        ...y,
        children: [
          R,
          g
        ]
      }
    );
  }
};
class rl extends J {
}
E(rl, "NAME", "avatar"), E(rl, "Component", zc);
class ll extends J {
}
E(ll, "NAME", "btngroup"), E(ll, "Component", Wc);
var me, Fn, Xt, ei, Xe, As;
const Q = class extends Ut {
  constructor() {
    super(...arguments);
    w(this, Xe);
    w(this, me, 0);
    w(this, Fn, void 0);
    w(this, Xt, void 0);
    w(this, ei, (t) => {
      const s = t.target;
      (s.closest(Q.DISMISS_SELECTOR) || this.options.backdrop === !0 && !s.closest(".modal-dialog") && s.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(Q.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", p(this, ei)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: t } = this;
      if (t) {
        const s = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const i = t.clientWidth, o = t.clientHeight;
          (!p(this, Xt) || p(this, Xt)[0] !== i || p(this, Xt)[1] !== o) && ($(this, Xt, [i, o]), this.layout());
        });
        s.observe(t), $(this, Fn, s);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var t;
    super.destroy(), (t = p(this, Fn)) == null || t.disconnect();
  }
  show(t) {
    if (this.isShown)
      return !1;
    this.setOptions(t);
    const { modalElement: s } = this, { animation: i, backdrop: o, className: r, style: l } = this.options;
    return v(s).setClass({
      "modal-trans": i,
      "modal-no-backdrop": !o
    }, Q.CLASS_SHOW, r).css({
      zIndex: `${Q.zIndex++}`,
      ...l
    }), this.layout(), this.emit("show", this), k(this, Xe, As).call(this, () => {
      s.classList.add(Q.CLASS_SHOWN), k(this, Xe, As).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(Q.CLASS_SHOWN), this.emit("hide", this), k(this, Xe, As).call(this, () => {
      this.modalElement.classList.remove(Q.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(t, s) {
    if (!this.isShown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    s = s ?? this.options.size, v(i).removeAttr("data-size");
    const o = { width: "", height: "" };
    typeof s == "object" ? (o.width = s.width, o.height = s.height) : typeof s == "string" && ["md", "sm", "lg", "full"].includes(s) ? v(i).attr("data-size", s) : s && (o.width = s), v(i).css(o), t = t ?? this.options.position ?? "fit";
    const r = i.clientWidth, l = i.clientHeight;
    $(this, Xt, [r, l]), typeof t == "function" && (t = t({ width: r, height: l }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof t == "number" ? (a.alignSelf = "flex-start", a.top = t) : typeof t == "object" && t ? (a.alignSelf = "flex-start", Object.assign(a, t)) : t === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - l) / 3))}px`) : t === "bottom" ? a.alignSelf = "flex-end" : t === "top" ? a.alignSelf = "flex-start" : t !== "center" && typeof t == "string" && (a.alignSelf = "flex-start", a.top = t), v(i).css(a), v(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  static query(t) {
    if (t === void 0)
      return t = document.querySelector(`.modal.${Q.CLASS_SHOW}`), Array.from(Q.getAll().values()).find((s) => s.isShown);
    if (typeof t == "string" && (t = document.querySelector(t)), !!t)
      return t.classList.contains("modal") || (t = t.closest(".modal")), Array.from(Q.getAll().values()).find((s) => s.modalElement === t);
  }
  static hide(t) {
    var s;
    (s = Q.query(t)) == null || s.hide();
  }
  static show(t) {
    var s;
    (s = Q.query(t)) == null || s.show();
  }
};
let et = Q;
me = new WeakMap(), Fn = new WeakMap(), Xt = new WeakMap(), ei = new WeakMap(), Xe = new WeakSet(), As = function(t, s) {
  p(this, me) && (clearTimeout(p(this, me)), $(this, me, 0)), t && (this.options.animation ? $(this, me, window.setTimeout(t, s ?? this.options.transTime)) : t());
}, E(et, "NAME", "Modal"), E(et, "EVENTS", !0), E(et, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), E(et, "CLASS_SHOW", "show"), E(et, "CLASS_SHOWN", "in"), E(et, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), E(et, "zIndex", 2e3);
v(window).on("resize", () => {
  et.all.forEach((e) => {
    const n = e;
    n.isShown && n.options.responsive && n.layout();
  });
});
v(document).on("zui.modal.hide", (e, n) => {
  et.hide(n == null ? void 0 : n.target);
});
class Fc extends F {
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
  renderHeader() {
    const {
      header: n,
      title: t
    } = this.props;
    return st(n) ? n : n === !1 || !t ? null : /* @__PURE__ */ _("div", { className: "modal-header", children: /* @__PURE__ */ _("div", { className: "modal-title", children: t }) });
  }
  renderActions() {
    const {
      actions: n,
      closeBtn: t
    } = this.props;
    return !t && !n ? null : st(n) ? n : /* @__PURE__ */ _("div", { className: "modal-actions", children: [
      n ? /* @__PURE__ */ _(un, { ...n }) : null,
      t ? /* @__PURE__ */ _("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ _("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: n
    } = this.props;
    return n ? st(n) ? n : /* @__PURE__ */ _("div", { className: "modal-body", children: n }) : null;
  }
  renderFooter() {
    const {
      footer: n,
      footerActions: t
    } = this.props;
    return st(n) ? n : n === !1 || !t ? null : /* @__PURE__ */ _("div", { className: "modal-footer", children: t ? /* @__PURE__ */ _(un, { ...t }) : null });
  }
  render() {
    const {
      className: n,
      style: t,
      children: s
    } = this.props;
    return /* @__PURE__ */ _("div", { className: D("modal-dialog", n), style: t, children: /* @__PURE__ */ _("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
E(Fc, "defaultProps", { closeBtn: !0 });
var Un, Je, Vn;
class Uu extends F {
  constructor() {
    super(...arguments);
    w(this, Un, Ee());
    w(this, Je, void 0);
    E(this, "state", {});
    w(this, Vn, () => {
      var i, o;
      const t = (o = (i = p(this, Un).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!t)
        return;
      let s = p(this, Je);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const r = t.body, l = t.documentElement, a = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, l.offsetHeight));
        this.setState({ height: a });
      }), s.observe(t.body), s.observe(t.documentElement), $(this, Je, s);
    });
  }
  componentDidMount() {
    p(this, Vn).call(this);
  }
  componentWillUnmount() {
    var t;
    (t = p(this, Je)) == null || t.disconnect();
  }
  render() {
    const { url: t } = this.props;
    return /* @__PURE__ */ _(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: t,
        ref: p(this, Un),
        onLoad: p(this, Vn)
      }
    );
  }
}
Un = new WeakMap(), Je = new WeakMap(), Vn = new WeakMap();
function Vu(e, n) {
  const { custom: t, title: s, content: i } = n;
  return {
    body: i,
    title: s,
    ...typeof t == "function" ? t() : t
  };
}
async function qu(e, n) {
  const { dataType: t = "html", url: s, request: i, custom: o, title: r, replace: l = !0, executeScript: a = !0 } = n, c = await (await fetch(s, i)).text();
  if (t !== "html")
    try {
      const h = JSON.parse(c);
      return {
        title: r,
        ...o,
        ...h
      };
    } catch {
    }
  return l !== !1 && t === "html" ? [c] : {
    title: r,
    ...o,
    body: t === "html" ? /* @__PURE__ */ _(lc, { className: "modal-body", html: c, executeScript: a }) : c
  };
}
async function Yu(e, n) {
  const { url: t, custom: s, title: i } = n;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ _(Uu, { url: t })
  };
}
const Gu = {
  custom: Vu,
  ajax: qu,
  iframe: Yu
};
var qn, Yn, St, Ze, Ts, ni, Uc, Gn, Po;
const Ot = class extends et {
  constructor() {
    super(...arguments);
    w(this, Ze);
    w(this, ni);
    w(this, Gn);
    w(this, qn, void 0);
    w(this, Yn, void 0);
    w(this, St, void 0);
  }
  get id() {
    return p(this, Yn);
  }
  get loading() {
    return this.modalElement.classList.contains(Ot.LOADING_CLASS);
  }
  get modalElement() {
    let t = p(this, qn);
    if (!t) {
      const { id: s } = this;
      t = this.element.querySelector(`#${s}`), t || (t = v("<div>").attr("id", s).css(this.options.style || {}).setClass("modal modal-async", this.options.className).appendTo(this.element)[0]), $(this, qn, t);
    }
    return t;
  }
  afterInit() {
    super.afterInit(), $(this, Yn, this.options.id || `modal-${fs()}`);
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  render(t) {
    super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    p(this, St) && clearTimeout(p(this, St));
    const { modalElement: t, options: s } = this, { type: i, loadTimeout: o } = s, r = Gu[i];
    if (!r)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    t.classList.add(Ot.LOADING_CLASS), await k(this, ni, Uc).call(this), o && $(this, St, window.setTimeout(() => {
      $(this, St, 0), k(this, Gn, Po).call(this, this.options.timeoutTip);
    }, o));
    const l = await r.call(this, t, s);
    return l === !1 ? await k(this, Gn, Po).call(this, this.options.failedTip) : l && typeof l == "object" && await k(this, Ze, Ts).call(this, l), p(this, St) && (clearTimeout(p(this, St)), $(this, St, 0)), t.classList.remove(Ot.LOADING_CLASS), !0;
  }
  static open(t) {
    return new Promise((s) => {
      const { container: i = document.body, ...o } = t, r = new Ot(i, { show: !0, ...o });
      r.once("hidden", () => s(r)), r.show();
    });
  }
  static alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: s, message: i, icon: o, iconClass: r = "icon-lg muted", actions: l = "confirm", onClickAction: a, custom: u, ...c } = t;
    let h = /* @__PURE__ */ _("div", { children: i });
    o ? h = /* @__PURE__ */ _("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ _("div", { className: `icon ${o} ${r}` }),
      h
    ] }) : h = /* @__PURE__ */ _("div", { className: "modal-body", children: h });
    const f = [];
    (Array.isArray(l) ? l : [l]).forEach((g) => {
      g = {
        ...typeof g == "string" ? { key: g } : g
      }, typeof g.key == "string" && (g.text || (g.text = ec(g.key, g.key)), g.btnType || (g.btnType = `btn-wide ${g.key === "confirm" ? "primary" : "btn-default"}`)), g && f.push(g);
    }, []);
    let d;
    const m = f.length ? {
      gap: 4,
      items: f,
      onClickItem: ({ item: g, event: y }) => {
        const b = Ot.query(y.target);
        d = g.key, (a == null ? void 0 : a(g, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return Ot.open({
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: h,
      backdrop: "static",
      custom: { footerActions: m, ...typeof u == "function" ? u() : u },
      ...c
    }).then(() => d);
  }
  static confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: s, onResult: i, ...o } = t;
    return Ot.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, l) => {
        i == null || i(r.key === "confirm", l), s == null || s(r, l);
      },
      ...o
    }).then((r) => r === "confirm");
  }
};
let bn = Ot;
qn = new WeakMap(), Yn = new WeakMap(), St = new WeakMap(), Ze = new WeakSet(), Ts = function(t) {
  return new Promise((s) => {
    if (Array.isArray(t))
      return this.modalElement.innerHTML = t[0], v(this.modalElement).runJS(), s();
    const { afterRender: i, ...o } = t;
    t = {
      afterRender: (r) => {
        this.layout(), i == null || i(r), s();
      },
      ...o
    }, Ko(
      /* @__PURE__ */ _(Fc, { ...t }),
      this.modalElement
    );
  });
}, ni = new WeakSet(), Uc = function() {
  const { loadingText: t } = this.options;
  return k(this, Ze, Ts).call(this, {
    body: /* @__PURE__ */ _("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ _("span", { className: "spinner" }),
      t ? /* @__PURE__ */ _("span", { className: "modal-loading-text", children: t }) : null
    ] })
  });
}, Gn = new WeakSet(), Po = function(t) {
  if (t)
    return k(this, Ze, Ts).call(this, {
      body: /* @__PURE__ */ _("div", { className: "modal-load-failed", children: t })
    });
}, E(bn, "LOADING_CLASS", "loading"), E(bn, "DEFAULT", {
  ...et.DEFAULT,
  loadTimeout: 1e4
});
var Jt, si, Vc, ii, qc, oi, Yc;
class $n extends Ut {
  constructor() {
    super(...arguments);
    w(this, si);
    w(this, ii);
    w(this, oi);
    w(this, Jt, void 0);
  }
  get modal() {
    return p(this, Jt);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    return k(this, ii, qc).call(this).show();
  }
  hide() {
    var t;
    (t = p(this, Jt)) == null || t.hide();
  }
}
Jt = new WeakMap(), si = new WeakSet(), Vc = function() {
  const {
    container: t,
    ...s
  } = this.options, i = s, o = this.element.getAttribute("href") || "";
  return i.type || (i.target || o[0] === "#" ? i.type = "static" : i.type = i.type || (i.url || o ? "ajax" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && o[0] !== "#" && (i.url = o), i;
}, ii = new WeakSet(), qc = function() {
  const t = k(this, si, Vc).call(this);
  let s = p(this, Jt);
  return s ? s.setOptions(t) : t.type === "static" ? (s = new et(k(this, oi, Yc).call(this), t), $(this, Jt, s)) : (s = new bn(this.container, t), $(this, Jt, s)), s;
}, oi = new WeakSet(), Yc = function() {
  let t = this.options.target;
  if (!t) {
    const { element: s } = this;
    if (s.tagName === "A") {
      const i = s.getAttribute("href");
      i != null && i.startsWith("#") && (t = i);
    }
  }
  return this.container.querySelector(t || ".modal");
}, E($n, "NAME", "ModalTrigger"), E($n, "EVENTS", !0), E($n, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  var s;
  const n = e.target, t = (s = n.closest) == null ? void 0 : s.call(n, $n.TOGGLE_SELECTOR);
  if (t) {
    const i = $n.ensure(t);
    i && i.show();
  }
});
var Co;
let Ku = (Co = class extends io {
  beforeRender() {
    const n = super.beforeRender();
    return n.className = D(n.className, n.type ? `nav-${n.type}` : "", {
      "nav-stacked": n.stacked
    }), n;
  }
}, E(Co, "NAME", "nav"), Co);
class cl extends J {
}
E(cl, "NAME", "nav"), E(cl, "Component", Ku);
function Ln(e, n) {
  const t = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof n == "string" && (n === "first" ? n = 1 : n === "last" ? n = t : n === "prev" ? n = e.page - 1 : n === "next" ? n = e.page + 1 : n === "current" ? n = e.page : n = Number.parseInt(n, 10)), n = n !== void 0 ? Math.max(1, Math.min(n < 0 ? t + n : n, t)) : e.page, {
    ...e,
    pageTotal: t,
    page: n
  };
}
function Xu({
  key: e,
  type: n,
  btnType: t,
  page: s,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...l
}) {
  const a = Ln(o, s);
  return l.text === void 0 && !l.icon && i && (l.text = typeof i == "function" ? i(a) : ct(i, a)), l.url === void 0 && r && (l.url = typeof r == "function" ? r(a) : ct(r, a)), l.disabled === void 0 && (l.disabled = s !== void 0 && a.page === o.page), /* @__PURE__ */ _(Mt, { type: t, ...l });
}
const Pt = 24 * 60 * 60 * 1e3, at = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), ps = (e, n = /* @__PURE__ */ new Date()) => (e = at(e), n = at(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), Io = (e, n = /* @__PURE__ */ new Date()) => at(e).getFullYear() === at(n).getFullYear(), Ju = (e, n = /* @__PURE__ */ new Date()) => (e = at(e), n = at(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), gd = (e, n = /* @__PURE__ */ new Date()) => {
  e = at(e), n = at(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), i = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, yd = (e, n) => ps(at(n), e), _d = (e, n) => ps(at(n).getTime() - Pt, e), bd = (e, n) => ps(at(n).getTime() + Pt, e), wd = (e, n) => ps(at(n).getTime() - 2 * Pt, e), Ho = (e, n = "yyyy-MM-dd hh:mm", t = "") => {
  if (e = at(e), Number.isNaN(e.getDay()))
    return t;
  const s = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(n) && (n.includes("[yyyy-]") && (n = n.replace("[yyyy-]", Io(e) ? "" : "yyyy-")), n = n.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(n)) {
      const o = `${s[i]}`;
      n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), n;
}, vd = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = Ho(e, Io(e) ? s.month : s.full);
  if (ps(e, n))
    return i;
  const o = Ho(n, Io(e, n) ? Ju(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
}, xd = (e) => {
  const n = (/* @__PURE__ */ new Date()).getTime();
  switch (e) {
    case "oneWeek":
      return n - Pt * 7;
    case "oneMonth":
      return n - Pt * 31;
    case "threeMonth":
      return n - Pt * 31 * 3;
    case "halfYear":
      return n - Pt * 183;
    case "oneYear":
      return n - Pt * 365;
    case "twoYear":
      return n - 2 * (Pt * 365);
    default:
      return 0;
  }
}, al = (e, n, t = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, al(e, "day", t, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, al(e, "day", t, s);
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
  return t ? s + e : s - e;
};
function Zu({
  key: e,
  type: n,
  page: t,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const l = Ln(i, t);
  return s = typeof s == "function" ? s(l) : ct(s, l), /* @__PURE__ */ _(xc, { ...r, children: [
    o,
    s
  ] });
}
function Qu({
  key: e,
  type: n,
  btnType: t,
  count: s = 12,
  pagerInfo: i,
  onClick: o,
  linkCreator: r,
  ...l
}) {
  if (!i.pageTotal)
    return;
  const a = { ...l, square: !0 }, u = () => (a.text = "", a.icon = "icon-ellipsis-h", a.disabled = !0, /* @__PURE__ */ _(Mt, { type: t, ...a })), c = (f, d) => {
    const m = [];
    for (let g = f; g <= d; g++) {
      a.text = g, delete a.icon, a.disabled = !1;
      const y = Ln(i, g);
      r && (a.url = typeof r == "function" ? r(y) : ct(r, y)), m.push(/* @__PURE__ */ _(Mt, { type: t, ...a, onClick: o }));
    }
    return m;
  };
  let h = [];
  return h = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? h = [...h, ...c(2, i.pageTotal)] : i.page < s - 2 ? h = [...h, ...c(2, s - 2), u(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? h = [...h, u(), ...c(i.pageTotal - s + 3, i.pageTotal)] : h = [...h, u(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), u(), ...c(i.pageTotal, i.pageTotal)]), h;
}
function tf({
  type: e,
  pagerInfo: n,
  linkCreator: t,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  ...o
}) {
  var l;
  i.items = i.items ?? s.map((a) => {
    const u = { ...n, recPerPage: a };
    return {
      text: `${a}`,
      active: a === n.recPerPage,
      url: typeof t == "function" ? t(u) : ct(t, u)
    };
  });
  const { text: r = "" } = o;
  return o.text = typeof r == "function" ? r(n) : ct(r, n), i.menu = { ...i.menu, className: D((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ _(Hc, { type: "dropdown", dropdown: i, ...o });
}
function ef({
  key: e,
  page: n,
  type: t,
  btnType: s,
  pagerInfo: i,
  size: o,
  onClick: r,
  onChange: l,
  linkCreator: a,
  ...u
}) {
  const c = { ...u };
  let h;
  const f = (g) => {
    var y;
    h = Number((y = g.target) == null ? void 0 : y.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, d = (g) => {
    if (!(g != null && g.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const y = Ln(i, h);
    l && !l({ info: y, event: g }) || (g.target.href = c.url = typeof a == "function" ? a(y) : ct(a, y));
  }, m = Ln(i, n || 0);
  return c.url = typeof a == "function" ? a(m) : ct(a, m), /* @__PURE__ */ _("div", { className: D("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ _("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ _(Mt, { type: s, ...c, onClick: d })
  ] });
}
var mn;
let nf = (mn = class extends un {
  get pagerInfo() {
    const { page: n = 1, recTotal: t = 0, recPerPage: s = 10 } = this.props;
    return { page: n, recTotal: t, recPerPage: s, pageTotal: s ? Math.ceil(t / s) : 0 };
  }
  isBtnItem(n) {
    return n === "link" || n === "nav" || n === "size-menu" || n === "goto" || super.isBtnItem(n);
  }
  getItemRenderProps(n, t, s) {
    const i = super.getItemRenderProps(n, t, s), o = t.type || "item";
    return o === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: n.linkCreator }), i;
  }
}, E(mn, "NAME", "pager"), E(mn, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), E(mn, "ItemComponents", {
  ...un.ItemComponents,
  link: Xu,
  info: Zu,
  nav: Qu,
  "size-menu": tf,
  goto: ef
}), mn);
class hl extends J {
}
E(hl, "NAME", "pager"), E(hl, "Component", nf);
var ri;
class sf extends F {
  constructor() {
    super(...arguments);
    w(this, ri, (t) => {
      var r;
      const { onDeselect: s, selections: i } = this.props, o = (r = t.target.closest(".picker-deselect-btn")) == null ? void 0 : r.dataset.idx;
      o && s && (i != null && i.length) && (t.stopPropagation(), s([i[+o]], t));
    });
  }
  render() {
    const {
      className: t,
      style: s,
      disabled: i,
      placeholder: o,
      focused: r,
      selections: l = [],
      onClick: a,
      children: u
    } = this.props;
    let c;
    return l.length ? c = /* @__PURE__ */ _("div", { className: "picker-multi-selections", children: l.map((h, f) => /* @__PURE__ */ _("div", { className: "picker-multi-selection", children: [
      h.text ?? h.value,
      /* @__PURE__ */ _("div", { className: "picker-deselect-btn btn", onClick: p(this, ri), "data-idx": f, children: /* @__PURE__ */ _("span", { className: "close" }) })
    ] })) }) : c = /* @__PURE__ */ _("span", { className: "picker-select-placeholder", children: o }), /* @__PURE__ */ _(
      "div",
      {
        className: D("picker-select picker-select-multi form-control", t, { disabled: i, focused: r }),
        style: s,
        onClick: a,
        children: [
          c,
          u,
          /* @__PURE__ */ _("span", { class: "caret" })
        ]
      }
    );
  }
}
ri = new WeakMap();
var li;
class of extends F {
  constructor() {
    super(...arguments);
    w(this, li, (t) => {
      const { onDeselect: s, selections: i } = this.props;
      s && (i != null && i.length) && (t.stopPropagation(), s(i, t));
    });
  }
  render() {
    const {
      className: t,
      style: s,
      disabled: i,
      placeholder: o,
      focused: r,
      selections: l = [],
      onDeselect: a,
      onClick: u,
      children: c
    } = this.props, [h] = l, f = h ? /* @__PURE__ */ _("span", { className: "picker-single-selection", children: h.text ?? h.value }) : /* @__PURE__ */ _("span", { className: "picker-select-placeholder", children: o }), d = h && a ? /* @__PURE__ */ _("button", { type: "button", className: "btn picker-deselect-btn", onClick: p(this, li), children: /* @__PURE__ */ _("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ _(
      "div",
      {
        className: D("picker-select picker-select-single form-control", t, { disabled: i, focused: r }),
        style: s,
        onClick: u,
        children: [
          f,
          c,
          d,
          /* @__PURE__ */ _("span", { class: "caret" })
        ]
      }
    );
  }
}
li = new WeakMap();
var ci, Gc, Kn, ai, Xn, hi;
class rf extends F {
  constructor() {
    super(...arguments);
    w(this, ci);
    E(this, "state", { keys: "", shown: !1 });
    w(this, Kn, (t) => {
      var s;
      (s = t.target) != null && s.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    w(this, ai, ({ item: t }) => {
      const s = this.props.items.find((i) => i.value === t.key);
      s && this.props.onSelectItem(s);
    });
    w(this, Xn, (t) => {
      this.setState({ keys: t.target.value });
    });
    w(this, hi, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", p(this, Kn)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", p(this, Kn));
  }
  show() {
    this.state.shown || this.setState({ shown: !0 });
  }
  hide() {
    this.state.shown && this.setState({ shown: !1 }, () => {
      window.setTimeout(() => {
        var t, s;
        (s = (t = this.props).onRequestHide) == null || s.call(t);
      }, 200);
    });
  }
  render() {
    const {
      id: t,
      search: s,
      className: i,
      style: o = {},
      maxHeight: r,
      maxWidth: l,
      width: a,
      menu: u,
      searchHint: c
    } = this.props, { shown: h, keys: f } = this.state, d = f.trim().length;
    return /* @__PURE__ */ _("div", { className: D("picker-menu", i, { shown: h, "has-search": d }), id: `picker-menu-${t}`, style: { maxHeight: r, maxWidth: l, width: a, ...o }, children: [
      s ? /* @__PURE__ */ _("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ _("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: c, value: f, onChange: p(this, Xn), onInput: p(this, Xn) }),
        d ? /* @__PURE__ */ _("button", { type: "button", className: "btn picker-menu-search-clear", onClick: p(this, hi), children: /* @__PURE__ */ _("span", { className: "close" }) }) : /* @__PURE__ */ _("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ _(fr, { className: "picker-menu-list", items: k(this, ci, Gc).call(this), onClickItem: p(this, ai), ...u })
    ] });
  }
}
ci = new WeakSet(), Gc = function() {
  const { selections: t, items: s } = this.props, i = new Set(t), o = this.state.keys.toLowerCase().split(" ").filter((r) => r.length);
  return s.reduce((r, l) => {
    const {
      value: a,
      keys: u,
      text: c,
      ...h
    } = l;
    if (!o.length || o.every((f) => a.toLowerCase().includes(f) || (u == null ? void 0 : u.toLowerCase().includes(f)) || typeof c == "string" && c.toLowerCase().includes(f))) {
      let f = c ?? a;
      typeof f == "string" && o.length && (f = /* @__PURE__ */ _("span", { dangerouslySetInnerHTML: { __html: o.reduce((d, m) => d.replace(m, `<span class="picker-menu-item-match">${m}</span>`), f) } })), r.push({
        key: a,
        active: i.has(a),
        text: f,
        ...h
      });
    }
    return r;
  }, []);
}, Kn = new WeakMap(), ai = new WeakMap(), Xn = new WeakMap(), hi = new WeakMap();
function ul(e) {
  const n = /* @__PURE__ */ new Set();
  return e.reduce((t, s) => (n.has(s) || (n.add(s), t.push(s)), t), []);
}
var $o, Jn, Zn, Qn, Qe, Ns, ts, Wo, ui, Kc, fi, Xc, di, pi, mi, gi, yi, Jc;
let lf = ($o = class extends F {
  constructor(t) {
    super(t);
    w(this, Qe);
    w(this, ts);
    w(this, ui);
    w(this, fi);
    w(this, yi);
    w(this, Jn, 0);
    w(this, Zn, fs());
    w(this, Qn, Ee());
    w(this, di, (t, s) => {
      const { valueList: i } = this, o = new Set(t.map((l) => l.value)), r = i.filter((l) => !o.has(l));
      this.setState({ value: r.length ? r.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    w(this, pi, (t) => {
      console.log("#handleSelectClick", t), this.setState({ open: !0 });
    });
    w(this, mi, () => {
      this.close();
    });
    w(this, gi, (t) => {
      this.props.multiple ? this.toggleValue(t.value) : this.setState({ value: t.value }, () => {
        var s;
        (s = p(this, Qn).current) == null || s.hide();
      });
    });
    this.state = {
      value: k(this, ui, Kc).call(this, t.defaultValue) ?? "",
      open: !1,
      loading: !1,
      search: "",
      items: Array.isArray(t.items) ? t.items : []
    };
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return k(this, ts, Wo).call(this, this.state.value);
  }
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
  async loadItemList() {
    let { items: t } = this.props;
    if (typeof t == "function") {
      const i = ++Cr(this, Jn)._;
      if (await k(this, Qe, Ns).call(this, { loading: !0, items: [] }), t = await t(), p(this, Jn) !== i)
        return [];
    }
    const s = {};
    return Array.isArray(t) && this.state.items !== t && (s.items = t), this.state.loading && (s.loading = !1), Object.keys(s).length && await k(this, Qe, Ns).call(this, s), t;
  }
  getItemList() {
    return this.state.items;
  }
  getItemMap() {
    return this.getItemList().reduce((t, s) => (t[s.value] = s, t), {});
  }
  getItemByValue(t) {
    return this.getItemList().find((s) => s.value === t);
  }
  getSelections() {
    const t = this.getItemMap();
    return this.valueList.map((s) => t[s] || { value: s });
  }
  async toggle(t) {
    if (t === void 0)
      t = !this.state.open;
    else if (t === this.state.open)
      return;
    await k(this, Qe, Ns).call(this, { open: t }), t && this.loadItemList();
  }
  open() {
    return this.toggle(!0);
  }
  close() {
    return this.toggle(!1);
  }
  toggleValue(t, s) {
    const { valueList: i } = this, o = i.indexOf(t);
    s !== !!o && (o > -1 ? i.splice(o, 1) : i.push(t), this.setState({ value: i.join(this.props.valueSplitter ?? ",") }));
  }
  render() {
    const {
      className: t,
      style: s,
      children: i,
      multiple: o
    } = this.props, r = o ? sf : of;
    return /* @__PURE__ */ _("div", { className: D("picker", t), style: s, id: `picker-${p(this, Zn)}`, children: [
      /* @__PURE__ */ _(r, { ...k(this, fi, Xc).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ _(rf, { ...k(this, yi, Jc).call(this), ref: p(this, Qn) }) : null
    ] });
  }
}, Jn = new WeakMap(), Zn = new WeakMap(), Qn = new WeakMap(), Qe = new WeakSet(), Ns = function(t) {
  return new Promise((s) => {
    this.setState(t, s);
  });
}, ts = new WeakSet(), Wo = function(t) {
  return typeof t == "string" ? ul(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) ? ul(t) : [];
}, ui = new WeakSet(), Kc = function(t) {
  const s = k(this, ts, Wo).call(this, t);
  return s.length ? s.join(this.props.valueSplitter ?? ",") : void 0;
}, fi = new WeakSet(), Xc = function() {
  const { placeholder: t, disabled: s } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: t,
    disabled: s,
    selections: this.getSelections(),
    onClick: p(this, pi),
    onDeselect: p(this, di)
  };
}, di = new WeakMap(), pi = new WeakMap(), mi = new WeakMap(), gi = new WeakMap(), yi = new WeakSet(), Jc = function() {
  const { search: t, menuClass: s, menuWidth: i, menuStyle: o, menuMaxHeight: r, menuMaxWidth: l } = this.props, { items: a } = this.state;
  return {
    id: p(this, Zn),
    items: a,
    selections: this.valueList,
    search: t === !0 || typeof t == "number" && t <= a.length,
    style: o,
    className: s,
    width: i,
    maxHeight: r,
    maxWidth: l,
    onRequestHide: p(this, mi),
    onSelectItem: p(this, gi)
  };
}, E($o, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), $o);
class fl extends J {
}
E(fl, "NAME", "picker"), E(fl, "Component", lf);
class dl extends J {
}
E(dl, "NAME", "toolbar"), E(dl, "Component", un);
function ms(e) {
  return e.split("-")[1];
}
function pr(e) {
  return e === "y" ? "height" : "width";
}
function De(e) {
  return e.split("-")[0];
}
function co(e) {
  return ["top", "bottom"].includes(De(e)) ? "x" : "y";
}
function pl(e, n, t) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, l = co(n), a = pr(l), u = s[a] / 2 - i[a] / 2, c = l === "x";
  let h;
  switch (De(n)) {
    case "top":
      h = { x: o, y: s.y - i.height };
      break;
    case "bottom":
      h = { x: o, y: s.y + s.height };
      break;
    case "right":
      h = { x: s.x + s.width, y: r };
      break;
    case "left":
      h = { x: s.x - i.width, y: r };
      break;
    default:
      h = { x: s.x, y: s.y };
  }
  switch (ms(n)) {
    case "start":
      h[l] -= u * (t && c ? -1 : 1);
      break;
    case "end":
      h[l] += u * (t && c ? -1 : 1);
  }
  return h;
}
const cf = async (e, n, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let u = await r.getElementRects({ reference: e, floating: n, strategy: i }), { x: c, y: h } = pl(u, s, a), f = s, d = {}, m = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: y, fn: b } = l[g], { x, y: S, data: R, reset: A } = await b({ x: c, y: h, initialPlacement: s, placement: f, strategy: i, middlewareData: d, rects: u, platform: r, elements: { reference: e, floating: n } });
    c = x ?? c, h = S ?? h, d = { ...d, [y]: { ...d[y], ...R } }, A && m <= 50 && (m++, typeof A == "object" && (A.placement && (f = A.placement), A.rects && (u = A.rects === !0 ? await r.getElementRects({ reference: e, floating: n, strategy: i }) : A.rects), { x: c, y: h } = pl(u, f, a)), g = -1);
  }
  return { x: c, y: h, placement: f, strategy: i, middlewareData: d };
};
function Zc(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Us(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function af(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: s, y: i, platform: o, rects: r, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: h = "floating", altBoundary: f = !1, padding: d = 0 } = n, m = Zc(d), g = l[f ? h === "floating" ? "reference" : "floating" : h], y = Us(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(g))) == null || t ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: c, strategy: a })), b = h === "floating" ? { ...r.floating, x: s, y: i } : r.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), S = await (o.isElement == null ? void 0 : o.isElement(x)) && await (o.getScale == null ? void 0 : o.getScale(x)) || { x: 1, y: 1 }, R = Us(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: b, offsetParent: x, strategy: a }) : b);
  return { top: (y.top - R.top + m.top) / S.y, bottom: (R.bottom - y.bottom + m.bottom) / S.y, left: (y.left - R.left + m.left) / S.x, right: (R.right - y.right + m.right) / S.x };
}
const hf = Math.min, uf = Math.max;
function ff(e, n, t) {
  return uf(e, hf(n, t));
}
const df = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { element: t, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: l, platform: a } = n;
  if (t == null)
    return {};
  const u = Zc(s), c = { x: i, y: o }, h = co(r), f = pr(h), d = await a.getDimensions(t), m = h === "y" ? "top" : "left", g = h === "y" ? "bottom" : "right", y = l.reference[f] + l.reference[h] - c[h] - l.floating[f], b = c[h] - l.reference[h], x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(t));
  let S = x ? h === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
  S === 0 && (S = l.floating[f]);
  const R = y / 2 - b / 2, A = u[m], N = S - d[f] - u[g], L = S / 2 - d[f] / 2 + R, M = ff(A, L, N), P = ms(r) != null && L != M && l.reference[f] / 2 - (L < A ? u[m] : u[g]) - d[f] / 2 < 0;
  return { [h]: c[h] - (P ? L < A ? A - L : N - L : 0), data: { [h]: M, centerOffset: L - M } };
} }), pf = ["top", "right", "bottom", "left"];
pf.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const mf = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Vs(e) {
  return e.replace(/left|right|bottom|top/g, (n) => mf[n]);
}
function gf(e, n, t) {
  t === void 0 && (t = !1);
  const s = ms(e), i = co(e), o = pr(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = Vs(r)), { main: r, cross: Vs(r) };
}
const yf = { start: "end", end: "start" };
function wo(e) {
  return e.replace(/start|end/g, (n) => yf[n]);
}
const _f = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: l, elements: a } = n, { mainAxis: u = !0, crossAxis: c = !0, fallbackPlacements: h, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: d = "none", flipAlignment: m = !0, ...g } = e, y = De(s), b = De(r) === r, x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), S = h || (b || !m ? [Vs(r)] : function(T) {
      const I = Vs(T);
      return [wo(T), I, wo(I)];
    }(r));
    h || d === "none" || S.push(...function(T, I, U, X) {
      const V = ms(T);
      let H = function(W, ht, Dt) {
        const ke = ["left", "right"], he = ["right", "left"], wt = ["top", "bottom"], Re = ["bottom", "top"];
        switch (W) {
          case "top":
          case "bottom":
            return Dt ? ht ? he : ke : ht ? ke : he;
          case "left":
          case "right":
            return ht ? wt : Re;
          default:
            return [];
        }
      }(De(T), U === "start", X);
      return V && (H = H.map((W) => W + "-" + V), I && (H = H.concat(H.map(wo)))), H;
    }(r, m, d, x));
    const R = [r, ...S], A = await af(n, g), N = [];
    let L = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (u && N.push(A[y]), c) {
      const { main: T, cross: I } = gf(s, o, x);
      N.push(A[T], A[I]);
    }
    if (L = [...L, { placement: s, overflows: N }], !N.every((T) => T <= 0)) {
      var M;
      const T = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1, I = R[T];
      if (I)
        return { data: { index: T, overflows: L }, reset: { placement: I } };
      let U = "bottom";
      switch (f) {
        case "bestFit": {
          var P;
          const X = (P = L.map((V) => [V, V.overflows.filter((H) => H > 0).reduce((H, W) => H + W, 0)]).sort((V, H) => V[1] - H[1])[0]) == null ? void 0 : P[0].placement;
          X && (U = X);
          break;
        }
        case "initialPlacement":
          U = r;
      }
      if (s !== U)
        return { reset: { placement: U } };
    }
    return {};
  } };
}, bf = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: s } = n, i = await async function(o, r) {
      const { placement: l, platform: a, elements: u } = o, c = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), h = De(l), f = ms(l), d = co(l) === "x", m = ["left", "top"].includes(h) ? -1 : 1, g = c && d ? -1 : 1, y = typeof r == "function" ? r(o) : r;
      let { mainAxis: b, crossAxis: x, alignmentAxis: S } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return f && typeof S == "number" && (x = f === "end" ? -1 * S : S), d ? { x: x * g, y: b * m } : { x: b * m, y: x * g };
    }(n, e);
    return { x: t + i.x, y: s + i.y, data: i };
  } };
};
function dt(e) {
  var n;
  return ((n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Tt(e) {
  return dt(e).getComputedStyle(e);
}
function le(e) {
  return ta(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ws;
function Qc() {
  if (ws)
    return ws;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ws = e.brands.map((n) => n.brand + "/" + n.version).join(" "), ws) : navigator.userAgent;
}
function Vt(e) {
  return e instanceof dt(e).HTMLElement;
}
function yt(e) {
  return e instanceof dt(e).Element;
}
function ta(e) {
  return e instanceof dt(e).Node;
}
function ml(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof dt(e).ShadowRoot || e instanceof ShadowRoot;
}
function ao(e) {
  const { overflow: n, overflowX: t, overflowY: s, display: i } = Tt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + s + t) && !["inline", "contents"].includes(i);
}
function wf(e) {
  return ["table", "td", "th"].includes(le(e));
}
function jo(e) {
  const n = /firefox/i.test(Qc()), t = Tt(e), s = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!s && s !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function ea() {
  return !/^((?!chrome|android).)*safari/i.test(Qc());
}
function mr(e) {
  return ["html", "body", "#document"].includes(le(e));
}
const gl = Math.min, kn = Math.max, qs = Math.round;
function na(e) {
  const n = Tt(e);
  let t = parseFloat(n.width), s = parseFloat(n.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = qs(t) !== i || qs(s) !== o;
  return r && (t = i, s = o), { width: t, height: s, fallback: r };
}
function sa(e) {
  return yt(e) ? e : e.contextElement;
}
const ia = { x: 1, y: 1 };
function Oe(e) {
  const n = sa(e);
  if (!Vt(n))
    return ia;
  const t = n.getBoundingClientRect(), { width: s, height: i, fallback: o } = na(n);
  let r = (o ? qs(t.width) : t.width) / s, l = (o ? qs(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
function xe(e, n, t, s) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), l = sa(e);
  let a = ia;
  n && (s ? yt(s) && (a = Oe(s)) : a = Oe(e));
  const u = l ? dt(l) : window, c = !ea() && t;
  let h = (r.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, f = (r.top + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / a.y, d = r.width / a.x, m = r.height / a.y;
  if (l) {
    const g = dt(l), y = s && yt(s) ? dt(s) : s;
    let b = g.frameElement;
    for (; b && s && y !== g; ) {
      const x = Oe(b), S = b.getBoundingClientRect(), R = getComputedStyle(b);
      S.x += (b.clientLeft + parseFloat(R.paddingLeft)) * x.x, S.y += (b.clientTop + parseFloat(R.paddingTop)) * x.y, h *= x.x, f *= x.y, d *= x.x, m *= x.y, h += S.x, f += S.y, b = dt(b).frameElement;
    }
  }
  return { width: d, height: m, top: f, right: h + d, bottom: f + m, left: h, x: h, y: f };
}
function oe(e) {
  return ((ta(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ho(e) {
  return yt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function oa(e) {
  return xe(oe(e)).left + ho(e).scrollLeft;
}
function vf(e, n, t) {
  const s = Vt(n), i = oe(n), o = xe(e, !0, t === "fixed", n);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && t !== "fixed")
    if ((le(n) !== "body" || ao(i)) && (r = ho(n)), Vt(n)) {
      const a = xe(n, !0);
      l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
    } else
      i && (l.x = oa(i));
  return { x: o.left + r.scrollLeft - l.x, y: o.top + r.scrollTop - l.y, width: o.width, height: o.height };
}
function Dn(e) {
  if (le(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || (ml(e) ? e.host : null) || oe(e);
  return ml(n) ? n.host : n;
}
function yl(e) {
  return Vt(e) && Tt(e).position !== "fixed" ? e.offsetParent : null;
}
function _l(e) {
  const n = dt(e);
  let t = yl(e);
  for (; t && wf(t) && Tt(t).position === "static"; )
    t = yl(t);
  return t && (le(t) === "html" || le(t) === "body" && Tt(t).position === "static" && !jo(t)) ? n : t || function(s) {
    let i = Dn(s);
    for (; Vt(i) && !mr(i); ) {
      if (jo(i))
        return i;
      i = Dn(i);
    }
    return null;
  }(e) || n;
}
function ra(e) {
  const n = Dn(e);
  return mr(n) ? e.ownerDocument.body : Vt(n) && ao(n) ? n : ra(n);
}
function Rn(e, n) {
  var t;
  n === void 0 && (n = []);
  const s = ra(e), i = s === ((t = e.ownerDocument) == null ? void 0 : t.body), o = dt(s);
  return i ? n.concat(o, o.visualViewport || [], ao(s) ? s : []) : n.concat(s, Rn(s));
}
function bl(e, n, t) {
  return n === "viewport" ? Us(function(s, i) {
    const o = dt(s), r = oe(s), l = o.visualViewport;
    let a = r.clientWidth, u = r.clientHeight, c = 0, h = 0;
    if (l) {
      a = l.width, u = l.height;
      const f = ea();
      (f || !f && i === "fixed") && (c = l.offsetLeft, h = l.offsetTop);
    }
    return { width: a, height: u, x: c, y: h };
  }(e, t)) : yt(n) ? function(s, i) {
    const o = xe(s, !0, i === "fixed"), r = o.top + s.clientTop, l = o.left + s.clientLeft, a = Vt(s) ? Oe(s) : { x: 1, y: 1 }, u = s.clientWidth * a.x, c = s.clientHeight * a.y, h = l * a.x, f = r * a.y;
    return { top: f, left: h, right: h + u, bottom: f + c, x: h, y: f, width: u, height: c };
  }(n, t) : Us(function(s) {
    var i;
    const o = oe(s), r = ho(s), l = (i = s.ownerDocument) == null ? void 0 : i.body, a = kn(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), u = kn(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0);
    let c = -r.scrollLeft + oa(s);
    const h = -r.scrollTop;
    return Tt(l || o).direction === "rtl" && (c += kn(o.clientWidth, l ? l.clientWidth : 0) - a), { width: a, height: u, x: c, y: h };
  }(oe(e)));
}
const xf = { getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: s, strategy: i } = e;
  const o = t === "clippingAncestors" ? function(u, c) {
    const h = c.get(u);
    if (h)
      return h;
    let f = Rn(u).filter((y) => yt(y) && le(y) !== "body"), d = null;
    const m = Tt(u).position === "fixed";
    let g = m ? Dn(u) : u;
    for (; yt(g) && !mr(g); ) {
      const y = Tt(g), b = jo(g);
      (m ? b || d : b || y.position !== "static" || !d || !["absolute", "fixed"].includes(d.position)) ? d = y : f = f.filter((x) => x !== g), g = Dn(g);
    }
    return c.set(u, f), f;
  }(n, this._c) : [].concat(t), r = [...o, s], l = r[0], a = r.reduce((u, c) => {
    const h = bl(n, c, i);
    return u.top = kn(h.top, u.top), u.right = gl(h.right, u.right), u.bottom = gl(h.bottom, u.bottom), u.left = kn(h.left, u.left), u;
  }, bl(n, l, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: s } = e;
  const i = Vt(t), o = oe(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((le(t) !== "body" || ao(o)) && (r = ho(t)), Vt(t))) {
    const u = xe(t);
    l = Oe(t), a.x = u.x + t.clientLeft, a.y = u.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - r.scrollLeft * l.x + a.x, y: n.y * l.y - r.scrollTop * l.y + a.y };
}, isElement: yt, getDimensions: function(e) {
  return na(e);
}, getOffsetParent: _l, getDocumentElement: oe, getScale: Oe, async getElementRects(e) {
  let { reference: n, floating: t, strategy: s } = e;
  const i = this.getOffsetParent || _l, o = this.getDimensions;
  return { reference: vf(n, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Tt(e).direction === "rtl" };
function Ef(e, n, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: l = !1 } = s, a = i && !l, u = a || o ? [...yt(e) ? Rn(e) : e.contextElement ? Rn(e.contextElement) : [], ...Rn(n)] : [];
  u.forEach((d) => {
    a && d.addEventListener("scroll", t, { passive: !0 }), o && d.addEventListener("resize", t);
  });
  let c, h = null;
  if (r) {
    let d = !0;
    h = new ResizeObserver(() => {
      d || t(), d = !1;
    }), yt(e) && !l && h.observe(e), yt(e) || !e.contextElement || l || h.observe(e.contextElement), h.observe(n);
  }
  let f = l ? xe(e) : null;
  return l && function d() {
    const m = xe(e);
    !f || m.x === f.x && m.y === f.y && m.width === f.width && m.height === f.height || t(), f = m, c = requestAnimationFrame(d);
  }(), t(), () => {
    var d;
    u.forEach((m) => {
      a && m.removeEventListener("scroll", t), o && m.removeEventListener("resize", t);
    }), (d = h) == null || d.disconnect(), h = null, l && cancelAnimationFrame(c);
  };
}
const Sf = (e, n, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: xf, ...t }, o = { ...i.platform, _c: s };
  return cf(e, n, { ...i, platform: o });
};
var tn, en, nn, ge, tt, _i, es, ns, Bo, bi, la, wi, ca, vi, aa, xi, ha, Ei, ua, Si, fa, Ci, da, sn, $i, pa;
const fe = class extends Ut {
  constructor() {
    super(...arguments);
    w(this, ns);
    w(this, bi);
    w(this, wi);
    w(this, vi);
    w(this, xi);
    w(this, Ei);
    w(this, Si);
    w(this, Ci);
    w(this, $i);
    w(this, tn, !1);
    w(this, en, void 0);
    w(this, nn, 0);
    w(this, ge, void 0);
    w(this, tt, void 0);
    w(this, _i, void 0);
    w(this, es, void 0);
    E(this, "hideLater", () => {
      p(this, sn).call(this), $(this, nn, window.setTimeout(this.hide.bind(this), 100));
    });
    w(this, sn, () => {
      clearTimeout(p(this, nn)), $(this, nn, 0);
    });
  }
  get isShown() {
    var t;
    return (t = p(this, ge)) == null ? void 0 : t.classList.contains(fe.CLASS_SHOW);
  }
  get tooltip() {
    return p(this, ge) || k(this, wi, ca).call(this);
  }
  get trigger() {
    return p(this, _i) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${fe.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tooltip");
  }
  show(t) {
    return this.setOptions(t), !p(this, tn) && this.isHover && k(this, $i, pa).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(fe.CLASS_SHOW), k(this, Si, fa).call(this), !0;
  }
  hide() {
    var t, s;
    return (t = p(this, es)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (s = p(this, ge)) == null || s.classList.remove(fe.CLASS_SHOW), !0;
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    p(this, tn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", p(this, sn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(t) {
    t instanceof Event && (t = { event: t });
    const { exclude: s } = t || {}, i = this.getAll().entries(), o = new Set(s || []);
    for (const [r, l] of i)
      o.has(r) || l.hide();
  }
};
let ft = fe;
tn = new WeakMap(), en = new WeakMap(), nn = new WeakMap(), ge = new WeakMap(), tt = new WeakMap(), _i = new WeakMap(), es = new WeakMap(), ns = new WeakSet(), Bo = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
}, bi = new WeakSet(), la = function() {
  const t = k(this, ns, Bo).call(this);
  return $(this, tt, document.createElement("div")), p(this, tt).style.position = this.options.strategy, p(this, tt).style.width = `${t}px`, p(this, tt).style.height = `${t}px`, p(this, tt).style.transform = "rotate(45deg)", p(this, tt);
}, wi = new WeakSet(), ca = function() {
  var i;
  const t = fe.TOOLTIP_CLASS;
  let s;
  if (this.isDynamic) {
    s = document.createElement("div");
    const o = this.options.className ? this.options.className.split(" ") : [];
    let r = [t, this.options.type || ""];
    r = r.concat(o), s.classList.add(...r), s[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const o = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (o != null && o.startsWith("#") && (s = document.querySelector(o)), !s) {
      const r = this.element.nextElementSibling;
      r != null && r.classList.contains(t) ? s = r : s = (i = this.element.parentNode) == null ? void 0 : i.querySelector(`.${t}`);
    }
  }
  if (this.options.arrow && (s == null || s.append(k(this, bi, la).call(this))), !s)
    throw new Error("Tooltip: Cannot find tooltip element");
  return s.style.width = "max-content", s.style.position = "absolute", s.style.top = "0", s.style.left = "0", document.body.appendChild(s), $(this, ge, s), s;
}, vi = new WeakSet(), aa = function() {
  var r;
  const t = k(this, ns, Bo).call(this), { strategy: s, placement: i } = this.options, o = {
    middleware: [bf(t), _f()],
    strategy: s,
    placement: i
  };
  return this.options.arrow && p(this, tt) && ((r = o.middleware) == null || r.push(df({ element: p(this, tt) }))), o;
}, xi = new WeakSet(), ha = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, Ei = new WeakSet(), ua = function(t) {
  return t === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : t === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : t === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, Si = new WeakSet(), fa = function() {
  const t = k(this, vi, aa).call(this), s = k(this, Ci, da).call(this);
  $(this, es, Ef(s, this.tooltip, () => {
    Sf(s, this.tooltip, t).then(({ x: i, y: o, middlewareData: r, placement: l }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${o}px`
      });
      const a = l.split("-")[0], u = k(this, xi, ha).call(this, a);
      if (r.arrow && p(this, tt)) {
        const { x: c, y: h } = r.arrow;
        Object.assign(p(this, tt).style, {
          left: c != null ? `${c}px` : "",
          top: h != null ? `${h}px` : "",
          [u]: `${-p(this, tt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...k(this, Ei, ua).call(this, a)
        });
      }
    });
  }));
}, Ci = new WeakSet(), da = function() {
  return p(this, en) || $(this, en, {
    getBoundingClientRect: () => {
      const { element: t } = this;
      if (t instanceof MouseEvent) {
        const { clientX: s, clientY: i } = t;
        return {
          width: 0,
          height: 0,
          top: i,
          right: s,
          bottom: i,
          left: s
        };
      }
      return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
    },
    contextElement: this.element
  }), p(this, en);
}, sn = new WeakMap(), $i = new WeakSet(), pa = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", p(this, sn)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), $(this, tn, !0);
}, E(ft, "NAME", "tooltip"), E(ft, "TOOLTIP_CLASS", "tooltip"), E(ft, "CLASS_SHOW", "show"), E(ft, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), E(ft, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  var s;
  const n = e.target, t = (s = n.closest) == null ? void 0 : s.call(n, ft.MENU_SELECTOR);
  if (t) {
    const i = ft.ensure(t);
    i.options.trigger === "click" && i.toggle();
  } else
    ft.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const n = e.target, t = (i = n.closest) == null ? void 0 : i.call(n, ft.MENU_SELECTOR);
  if (!t)
    return;
  const s = ft.ensure(t);
  s.isHover && s.show();
});
var ki, ma, Ri, ga, Ai, ya, Ti, _a;
class Cf extends Ut {
  constructor() {
    super(...arguments);
    w(this, ki);
    w(this, Ri);
    w(this, Ai);
    w(this, Ti);
  }
  init() {
    v(this.element).on("submit", this.onSubmit.bind(this)).on("input mousedown change", this.onInput.bind(this));
  }
  enable(t = !0) {
    v(this.element).toggleClass("loading", !t);
  }
  disable() {
    this.enable(!1);
  }
  onInput(t) {
    const s = v(t.target).closest(".has-error");
    s.length && (s.removeClass("has-error"), s.closest(".form-group").find(`#${s.attr("id")}Tip`).remove());
  }
  onSubmit(t) {
    var o;
    t.preventDefault();
    const { element: s } = this, i = v.extend({}, this.options);
    this.emit("before", { event: t, element: s, options: i }, !1), ((o = i.beforeSubmit) == null ? void 0 : o.call(i, t, s, i)) !== !1 && (this.disable(), k(this, Ri, ga).call(this, k(this, ki, ma).call(this)).finally(() => {
      this.enable();
    }));
  }
  submit() {
    this.element.submit();
  }
  reset() {
    this.element.reset();
  }
}
ki = new WeakSet(), ma = function() {
  const { element: t, options: s } = this;
  let i = new FormData(t), { submitEmptySelectValue: o = "" } = s;
  o !== !1 && (typeof o != "boolean" && (o = ""), v(t).find("select").each((l, a) => {
    const c = v(a).attr("name");
    i.has(c) || i.append(c, typeof o == "object" ? o[c] : o);
  }));
  const { beforeSend: r } = s;
  if (r) {
    const l = r(i);
    l instanceof FormData && (i = l);
  }
  return this.emit("send", { formData: i }, !1), i;
}, Ri = new WeakSet(), ga = async function(t) {
  var a, u;
  const { element: s, options: i } = this;
  let o, r, l;
  try {
    const c = await fetch(i.url || s.action, {
      method: s.method || "POST",
      body: t,
      credentials: "same-origin",
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    r = await c.text(), c.ok ? (l = JSON.parse(r), (!l || typeof l != "object") && (o = new Error("Invalid json format"))) : o = new Error(c.statusText);
  } catch (c) {
    o = c;
  }
  o ? (this.emit("error", { error: o, responseText: r }, !1), (a = i.onError) == null || a.call(i, o, r)) : k(this, Ti, _a).call(this, l), this.emit("complete", { result: l, error: o }, !1), (u = i.onComplete) == null || u.call(i, l, o);
}, Ai = new WeakSet(), ya = function(t) {
  var i;
  let s;
  Object.entries(t).forEach(([o, r]) => {
    Array.isArray(r) && (r = r.join(""));
    const l = document.getElementById(o), a = l ? v(l) : v(this.element).find(`[name="${o}"]`);
    if (!a.length)
      return;
    a.addClass("has-error");
    const u = a.closest(".form-group,.form-batch-control");
    if (u.length) {
      const c = document.getElementById(`${o}Tip`);
      let h = c ? v(c) : null;
      h || (h = v(`<div class="form-tip ajax-form-tip text-danger" id="${o}Tip"></div>`).appendTo(u)), h.empty().text(r);
    }
    s || (s = a);
  }), s && ((i = s[0]) == null || i.focus());
}, Ti = new WeakSet(), _a = function(t) {
  var a, u;
  const { options: s } = this, { message: i } = t;
  if (t.result === "success") {
    if (this.emit("success", { result: t }, !1), ((a = s.onSuccess) == null ? void 0 : a.call(s, t)) === !1)
      return;
    typeof i == "string" && i.length && v(document).trigger("zui.messager.show", { content: i, type: "success" });
  } else {
    if (this.emit("fail", { result: t }, !1), ((u = s.onFail) == null ? void 0 : u.call(s, t)) === !1)
      return;
    i && (typeof i == "string" && i.length ? v(document).trigger("zui.messager.show", { content: i, type: "danger" }) : typeof i == "object" && k(this, Ai, ya).call(this, i));
  }
  const o = t.closeModal || s.closeModal;
  o && v(this.element).trigger("zui.modal.hide", { target: typeof o == "string" ? o : void 0 });
  const r = t.callback || s.callback;
  if (typeof r == "string") {
    const c = r.indexOf("("), h = (c > 0 ? r.substring(0, c) : r).split(".");
    let f = window, d = h[0];
    h.length > 1 && (d = h[1], h[0] === "top" ? f = window.top : h[0] === "parent" ? f = window.parent : f = window[h[0]]);
    const m = f == null ? void 0 : f[d];
    if (typeof m == "function") {
      let g = [];
      return c > 0 && r[r.length - 1] == ")" ? g = JSON.parse("[" + r.substring(c + 1, r.length - 1) + "]") : g.push(t), m.apply(this, g);
    }
  } else
    r && typeof r == "object" && (r.target ? window[r.target] : window)[r.name].apply(this, Array.isArray(r.params) ? r.params : [r.params]);
  const l = t.load || s.load || t.locate;
  l && v(this.element).trigger("zui.locate", l);
}, E(Cf, "NAME", "ajaxform");
function $f(e, n) {
  var r, l, a, u;
  const { message: t } = e;
  if (e.result === "success") {
    if (((r = n.onSuccess) == null ? void 0 : r.call(n, e)) === !1)
      return;
    typeof t == "string" && t.length && ((l = n.onMessage) == null || l.call(n, t, e));
  } else {
    if (((a = n.onFail) == null ? void 0 : a.call(n, e)) === !1)
      return;
    t && ((u = n.onMessage) == null || u.call(n, t, e));
  }
  const s = e.closeModal || n.closeModal;
  s && v(n.element || document).trigger("zui.modal.hide", { target: typeof s == "string" ? s : void 0 });
  const i = e.callback || n.callback;
  if (typeof i == "string") {
    const c = i.indexOf("("), h = (c > 0 ? i.substring(0, c) : i).split(".");
    let f = window, d = h[0];
    h.length > 1 && (d = h[1], h[0] === "top" ? f = window.top : h[0] === "parent" ? f = window.parent : f = window[h[0]]);
    const m = f == null ? void 0 : f[d];
    if (typeof m == "function") {
      let g = [];
      return c > 0 && i[i.length - 1] == ")" ? g = JSON.parse("[" + i.substring(c + 1, i.length - 1) + "]") : g.push(e), m.apply(this, g);
    }
  } else
    i && typeof i == "object" && (i.target ? window[i.target] : window)[i.name].apply(this, Array.isArray(i.params) ? i.params : [i.params]);
  const o = e.load || n.load || e.locate;
  o && v(n.element || document).trigger("zui.locate", o);
}
async function ba(e) {
  var u, c, h;
  if (((u = e.beforeSubmit) == null ? void 0 : u.call(e, e)) === !1)
    return [void 0, new Error("canceled")];
  const { loadingClass: n, element: t } = e;
  t && n && v(t).addClass(n);
  const { data: s } = e;
  let i;
  if (s instanceof FormData)
    i = s;
  else if (s) {
    i = new FormData();
    for (const [f, d] of Object.entries(s))
      if (Array.isArray(d)) {
        for (const m of d)
          i.append(f, m);
        continue;
      } else
        i.append(f, d);
  }
  const { beforeSend: o } = e;
  if (o) {
    const f = o(i);
    f instanceof FormData && (i = f);
  }
  let r, l, a;
  try {
    const f = await fetch(e.url, {
      method: e.method || "POST",
      body: i,
      credentials: "same-origin",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        ...e.headers
      }
    });
    l = await f.text(), f.ok ? (a = JSON.parse(l), (!a || typeof a != "object") && (r = new Error("Invalid json format"))) : r = new Error(f.statusText);
  } catch (f) {
    r = f;
  }
  return r ? (c = e.onError) == null || c.call(e, r, l) : $f(a, e), (h = e.onComplete) == null || h.call(e, a, r), t && n && v(t).removeClass(n), [a, r];
}
v.extend(v, { ajaxSubmit: ba });
v(document).on("click.ajaxSubmit.zui", ".ajax-submit", function(e) {
  e.preventDefault();
  const n = v(this), t = n.data();
  !t.url && n.is("a") && (t.url = n.attr("href") || ""), t.url && (t.element = this, ba(t));
});
var ss, Ni, Mi, Li;
class kf extends F {
  constructor(t) {
    super(t);
    w(this, ss, Ee());
    w(this, Ni, (t) => {
      t.stopPropagation(), ie.show({
        event: t.target,
        placement: "bottom-end",
        menu: {
          onClickItem: ({ item: s }) => {
            var i;
            ((i = s.attrs) == null ? void 0 : i["data-type"]) === "refresh" && this.load();
          }
        },
        ...this.props.block.menu
      });
    });
    w(this, Mi, (t) => {
      var o, r, l;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (t.clientY - i.top > 48) {
        t.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (o = t.dataTransfer) == null || o.setData("application/id", this.props.block.id), (l = (r = this.props).onDragStart) == null || l.call(r, t);
    });
    w(this, Li, (t) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, t);
    });
    this.state = { content: /* @__PURE__ */ _("div", { class: "dashboard-block-body", children: t.block.content }) };
  }
  get element() {
    return p(this, ss).current;
  }
  componentDidMount() {
    this.load(), v(this.element).on("load.zui.dashboard", this.load.bind(this));
  }
  componentWillUnmount() {
    v(this.element).off("load.zui.dashboard");
  }
  load() {
    const { block: t } = this.props;
    let s = t.fetch;
    if (!s || this.state.loading)
      return;
    typeof s == "string" ? s = { url: s } : typeof s == "function" && (s = s(t.id, t));
    const { url: i, ...o } = s;
    this.setState({ loading: !0 }, () => {
      fetch(ct(i, t), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...o
      }).then((r) => {
        r.ok ? r.text().then((l) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ _(lc, { class: "dashboard-block-body", html: l, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ _("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          r.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: t, top: s, width: i, height: o, style: r, block: l } = this.props, { title: a, menu: u, id: c } = l, { loading: h, content: f, dragging: d } = this.state;
    return /* @__PURE__ */ _("div", { class: "dashboard-block-cell", style: { left: t, top: s, width: i, height: o, ...r }, children: /* @__PURE__ */ _(
      "div",
      {
        class: `dashboard-block load-indicator${h ? " loading" : ""}${u ? " has-more-menu" : ""}${d ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: p(this, Mi),
        onDragEnd: p(this, Li),
        "data-id": c,
        ref: p(this, ss),
        children: [
          /* @__PURE__ */ _("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ _("div", { class: "dashboard-block-title", children: a }),
            u ? /* @__PURE__ */ _("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ _("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: p(this, Ni), children: /* @__PURE__ */ _("div", { class: "more-vert" }) }) }) : null
          ] }),
          f
        ]
      }
    ) });
  }
}
ss = new WeakMap(), Ni = new WeakMap(), Mi = new WeakMap(), Li = new WeakMap();
var ne, Ct, Di, wa, Oi, va, Pi, xa, Ii, Ea, is, zo, os, Fo, Hi, Sa, Wi, ji, rs, Uo;
let Rf = (ne = class extends F {
  constructor() {
    super(...arguments);
    w(this, Di);
    w(this, Oi);
    w(this, Pi);
    w(this, Ii);
    w(this, is);
    w(this, os);
    w(this, Hi);
    w(this, Ct, /* @__PURE__ */ new Map());
    E(this, "state", {});
    w(this, Wi, (t) => {
      var i;
      const s = (i = t.dataTransfer) == null ? void 0 : i.getData("application/id");
      s !== void 0 && (this.setState({ dragging: s }), console.log("handleBlockDragStart", t));
    });
    w(this, ji, (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    });
  }
  render() {
    const { blocks: t, height: s } = k(this, Pi, xa).call(this), { cellHeight: i, grid: o } = this.props, r = p(this, Ct);
    return console.log("Dashboard.render", { blocks: t, map: r }, this), /* @__PURE__ */ _("div", { class: "dashboard", children: /* @__PURE__ */ _("div", { class: "dashboard-blocks", style: { height: s * i }, children: t.map((l, a) => {
      const { id: u } = l, [c, h, f, d] = r.get(u) || [0, 0, l.width, l.height];
      return /* @__PURE__ */ _(
        kf,
        {
          id: u,
          index: a,
          left: `${100 * c / o}%`,
          top: i * h,
          height: i * d,
          width: `${100 * f / o}%`,
          block: l,
          moreMenu: !0,
          onDragStart: p(this, Wi),
          onDragEnd: p(this, ji)
        },
        l.id
      );
    }) }) });
  }
}, Ct = new WeakMap(), Di = new WeakSet(), wa = function(t) {
  const { blockDefaultSize: s, blockSizeMap: i } = this.props;
  return t = t ?? s, typeof t == "string" && (t = i[t]), t = t || s, Array.isArray(t) || (t = [t.width, t.height]), t;
}, Oi = new WeakSet(), va = function() {
  const { blocks: t, blockFetch: s, blockMenu: i } = this.props;
  return t.map((r) => {
    const {
      id: l,
      size: a,
      left: u = -1,
      top: c = -1,
      fetch: h = s,
      menu: f = i,
      ...d
    } = r, [m, g] = k(this, Di, wa).call(this, a);
    return {
      id: `${l}`,
      width: m,
      height: g,
      left: u,
      top: c,
      fetch: h,
      menu: f,
      ...d
    };
  });
}, Pi = new WeakSet(), xa = function() {
  p(this, Ct).clear();
  let t = 0;
  const s = k(this, Oi, va).call(this);
  return s.forEach((i) => {
    k(this, Ii, Ea).call(this, i);
    const [, o, , r] = p(this, Ct).get(i.id);
    t = Math.max(t, o + r);
  }), { blocks: s, height: t };
}, Ii = new WeakSet(), Ea = function(t) {
  const s = p(this, Ct), { id: i, left: o, top: r, width: l, height: a } = t;
  if (o < 0 || r < 0) {
    const [u, c] = k(this, Hi, Sa).call(this, l, a, o, r);
    s.set(i, [u, c, l, a]);
  } else
    k(this, os, Fo).call(this, i, [o, r, l, a]);
}, is = new WeakSet(), zo = function(t) {
  var i;
  const { dragging: s } = this.state;
  for (const [o, r] of p(this, Ct).entries())
    if (o !== s && k(i = ne, rs, Uo).call(i, r, t))
      return !1;
  return !0;
}, os = new WeakSet(), Fo = function(t, s) {
  var i;
  p(this, Ct).set(t, s);
  for (const [o, r] of p(this, Ct).entries())
    o !== t && k(i = ne, rs, Uo).call(i, r, s) && (r[1] = s[1] + s[3], k(this, os, Fo).call(this, o, r));
}, Hi = new WeakSet(), Sa = function(t, s, i, o) {
  if (i >= 0 && o >= 0) {
    if (k(this, is, zo).call(this, [i, o, t, s]))
      return [i, o];
    o = -1;
  }
  let r = i < 0 ? 0 : i, l = o < 0 ? 0 : o, a = !1;
  const u = this.props.grid;
  for (; !a; ) {
    if (k(this, is, zo).call(this, [r, l, t, s])) {
      a = !0;
      break;
    }
    i < 0 ? (r += 1, r + t > u && (r = 0, l += 1)) : l += 1;
  }
  return [r, l];
}, Wi = new WeakMap(), ji = new WeakMap(), rs = new WeakSet(), Uo = function([t, s, i, o], [r, l, a, u]) {
  return !(t + i <= r || r + a <= t || s + o <= l || l + u <= s);
}, w(ne, rs), E(ne, "defaultProps", {
  responsive: !1,
  blocks: [],
  grid: 3,
  gap: 16,
  cellHeight: 64,
  blockDefaultSize: [1, 3],
  blockMenu: { items: [{ text: "Refresh", attrs: { "data-type": "refresh" } }] },
  blockSizeMap: {
    xs: [1, 3],
    sm: [1, 4],
    md: [1, 5],
    lg: [1, 6],
    xl: [1, 8],
    xsWide: [2, 3],
    smWide: [2, 4],
    mdWide: [2, 5],
    lgWide: [2, 6],
    xlWide: [2, 8],
    xsLong: [3, 3],
    smLong: [3, 4],
    mdLong: [3, 5],
    lgLong: [3, 6],
    xlLong: [3, 8]
  }
}), ne);
class wl extends J {
}
E(wl, "NAME", "Dashboard"), E(wl, "Component", Rf);
var ye, _e;
class vl extends F {
  constructor(t) {
    super(t);
    w(this, ye, 0);
    w(this, _e, null);
    E(this, "_handleWheel", (t) => {
      const { wheelContainer: s } = this.props, i = t.target;
      if (!(!i || !s) && (typeof s == "string" && i.closest(s) || typeof s == "object")) {
        const o = (this.props.type === "horz" ? t.deltaX : t.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && t.preventDefault();
      }
    });
    E(this, "_handleMouseMove", (t) => {
      const { dragStart: s } = this.state;
      s && (p(this, ye) && cancelAnimationFrame(p(this, ye)), $(this, ye, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + i * this.props.scrollSize / this.props.clientSize), $(this, ye, 0);
      })), t.preventDefault());
    });
    E(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    E(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.scrollPos } }), t.stopPropagation();
    });
    E(this, "_handleClick", (t) => {
      const s = t.currentTarget;
      if (!s)
        return;
      const i = s.getBoundingClientRect(), { type: o, clientSize: r, scrollSize: l } = this.props, a = (o === "horz" ? t.clientX - i.left : t.clientY - i.top) - this.barSize / 2;
      this.scroll(a * l / r), t.preventDefault();
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
    const { scrollSize: t, clientSize: s } = this.props;
    return Math.max(0, t - s);
  }
  get barSize() {
    const { clientSize: t, scrollSize: s, size: i = 12, minBarSize: o = 3 * i } = this.props;
    return Math.max(Math.round(t * t / s), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: t } = this.props;
    t && ($(this, _e, typeof t == "string" ? document : t.current), p(this, _e).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), p(this, _e) && p(this, _e).removeEventListener("wheel", this._handleWheel);
  }
  scroll(t) {
    return t = Math.max(0, Math.min(Math.round(t), this.maxScrollPos)), t === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(t) : this.setState({
      scrollPos: t
    }, this._afterScroll.bind(this, t)), !0);
  }
  scrollOffset(t) {
    return this.scroll(this.scrollPos + t);
  }
  _afterScroll(t) {
    const { onScroll: s } = this.props;
    s && s(t, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: t,
      type: s,
      size: i = 12,
      className: o,
      style: r,
      left: l,
      top: a,
      bottom: u,
      right: c
    } = this.props, { maxScrollPos: h, scrollPos: f } = this, { dragStart: d } = this.state, m = {
      left: l,
      top: a,
      bottom: u,
      right: c,
      ...r
    }, g = {};
    return s === "horz" ? (m.height = i, m.width = t, g.width = this.barSize, g.left = Math.round(Math.min(h, f) * (t - g.width) / h)) : (m.width = i, m.height = t, g.height = this.barSize, g.top = Math.round(Math.min(h, f) * (t - g.height) / h)), /* @__PURE__ */ _(
      "div",
      {
        className: D("scrollbar", o, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": d
        }),
        style: m,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ _(
          "div",
          {
            className: "scrollbar-bar",
            style: g,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
ye = new WeakMap(), _e = new WeakMap();
function Af(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function Ca({ col: e, className: n, height: t, row: s, onRenderCell: i, style: o, outerStyle: r, children: l, outerClass: a, ...u }) {
  var P;
  const c = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...r
  }, { align: h, border: f } = e.setting, d = {
    justifyContent: h ? h === "left" ? "start" : h === "right" ? "end" : h : void 0,
    ...e.setting.cellStyle,
    ...o
  }, m = ["dtable-cell", a, n, e.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], g = ["dtable-cell-content", e.setting.cellClass], y = (P = s.data) == null ? void 0 : P[e.name], b = [l ?? y ?? ""], x = i ? i(b, { row: s, col: e, value: y }, bt) : b, S = [], R = [], A = {}, N = {};
  let L = "div";
  x == null || x.forEach((T) => {
    if (typeof T == "object" && T && !st(T) && ("html" in T || "className" in T || "style" in T || "attrs" in T || "children" in T || "tagName" in T)) {
      const I = T.outer ? S : R;
      T.html ? I.push(/* @__PURE__ */ _("div", { className: D("dtable-cell-html", T.className), style: T.style, dangerouslySetInnerHTML: { __html: T.html }, ...T.attrs ?? {} })) : (T.style && Object.assign(T.outer ? c : d, T.style), T.className && (T.outer ? m : g).push(T.className), T.children && I.push(T.children), T.attrs && Object.assign(T.outer ? A : N, T.attrs)), T.tagName && !T.outer && (L = T.tagName);
    } else
      R.push(T);
  });
  const M = L;
  return /* @__PURE__ */ _(
    "div",
    {
      className: D(m),
      style: c,
      "data-col": e.name,
      "data-type": e.type,
      ...u,
      ...A,
      children: [
        R.length > 0 && /* @__PURE__ */ _(M, { className: D(g), style: d, ...N, children: R }),
        S
      ]
    }
  );
}
function vo({ row: e, className: n, top: t = 0, left: s = 0, width: i, height: o, cols: r, CellComponent: l = Ca, onRenderCell: a }) {
  return /* @__PURE__ */ _("div", { className: D("dtable-cells", n), style: { top: t, left: s, width: i, height: o }, children: r.map((u) => u.visible ? /* @__PURE__ */ _(
    l,
    {
      col: u,
      row: e,
      onRenderCell: a
    },
    u.name
  ) : null) });
}
function $a({
  row: e,
  className: n,
  top: t,
  height: s,
  fixedLeftCols: i,
  fixedRightCols: o,
  scrollCols: r,
  fixedLeftWidth: l,
  scrollWidth: a,
  scrollColsWidth: u,
  fixedRightWidth: c,
  scrollLeft: h,
  CellComponent: f = Ca,
  onRenderCell: d,
  style: m,
  ...g
}) {
  let y = null;
  i != null && i.length && (y = /* @__PURE__ */ _(
    vo,
    {
      className: "dtable-fixed-left",
      cols: i,
      width: l,
      row: e,
      CellComponent: f,
      onRenderCell: d
    }
  ));
  let b = null;
  r != null && r.length && (b = /* @__PURE__ */ _(
    vo,
    {
      className: "dtable-flexable",
      cols: r,
      left: l - h,
      width: Math.max(a, u),
      row: e,
      CellComponent: f,
      onRenderCell: d
    }
  ));
  let x = null;
  o != null && o.length && (x = /* @__PURE__ */ _(
    vo,
    {
      className: "dtable-fixed-right",
      cols: o,
      left: l + a,
      width: c,
      row: e,
      CellComponent: f,
      onRenderCell: d
    }
  ));
  const S = { top: t, height: s, lineHeight: `${s - 2}px`, ...m };
  return /* @__PURE__ */ _(
    "div",
    {
      className: D("dtable-row", n),
      style: S,
      "data-id": e.id,
      ...g,
      children: [
        y,
        b,
        x
      ]
    }
  );
}
function Tf({ height: e, onRenderRow: n, ...t }) {
  const s = {
    height: e,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (n) {
    const i = n({ props: s }, bt);
    i && Object.assign(s, i);
  }
  return /* @__PURE__ */ _("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ _($a, { ...s }) });
}
function Nf({
  className: e,
  style: n,
  top: t,
  rows: s,
  height: i,
  rowHeight: o,
  scrollTop: r,
  onRenderRow: l,
  ...a
}) {
  return n = { ...n, top: t, height: i }, /* @__PURE__ */ _("div", { className: D("dtable-rows", e), style: n, children: s.map((u) => {
    const c = {
      className: `dtable-row-${u.index % 2 ? "odd" : "even"}`,
      row: u,
      top: u.top - r,
      height: o,
      ...a
    }, h = l == null ? void 0 : l({ props: c, row: u }, bt);
    return h && Object.assign(c, h), /* @__PURE__ */ _($a, { ...c });
  }) });
}
const Ys = /* @__PURE__ */ new Map(), Gs = [];
function ka(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && Ys.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Ys.set(t, e), n != null && n.buildIn && !Gs.includes(t) && Gs.push(t);
}
function $e(e, n) {
  ka(e, n);
  const t = (s) => {
    if (!s)
      return e;
    const { defaultOptions: i, ...o } = e;
    return {
      ...o,
      defaultOptions: { ...i, ...s }
    };
  };
  return t.plugin = e, t;
}
function Ra(e) {
  return Ys.delete(e);
}
function Mf(e) {
  if (typeof e == "string") {
    const n = Ys.get(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Aa(e, n, t) {
  return n.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = Mf(s);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && Aa(e, i.plugins, t), e.push(i), t.add(i.name)));
  }), e;
}
function Lf(e = [], n = !0) {
  return n && Gs.length && e.unshift(...Gs), e != null && e.length ? Aa([], e, /* @__PURE__ */ new Set()) : [];
}
function xl() {
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
    footer: void 0,
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
var xs, be, on, Zt, $t, Qt, G, mt, kt, rn, ls, cs, jt, ln, cn, Bi, Ta, zi, Na, Fi, Ma, Ui, La, as, Vo, Vi, qi, hs, us, Yi, Gi, Ki, Da, Xi, Oa, Ji, Pa;
let Df = (xs = class extends F {
  constructor(t) {
    super(t);
    w(this, Bi);
    w(this, zi);
    w(this, Fi);
    w(this, Ui);
    w(this, as);
    w(this, Ki);
    w(this, Xi);
    w(this, Ji);
    E(this, "ref", Ee());
    w(this, be, 0);
    w(this, on, void 0);
    w(this, Zt, !1);
    w(this, $t, void 0);
    w(this, Qt, void 0);
    w(this, G, []);
    w(this, mt, void 0);
    w(this, kt, /* @__PURE__ */ new Map());
    w(this, rn, {});
    w(this, ls, void 0);
    w(this, cs, []);
    E(this, "updateLayout", () => {
      p(this, be) && cancelAnimationFrame(p(this, be)), $(this, be, requestAnimationFrame(() => {
        $(this, mt, void 0), this.forceUpdate(), $(this, be, 0);
      }));
    });
    w(this, jt, (t, s) => {
      s = s || t.type;
      const i = p(this, kt).get(s);
      if (i != null && i.length) {
        for (const o of i)
          if (o.call(this, t) === !1) {
            t.stopPropagation(), t.preventDefault();
            break;
          }
      }
    });
    w(this, ln, (t) => {
      p(this, jt).call(this, t, `window_${t.type}`);
    });
    w(this, cn, (t) => {
      p(this, jt).call(this, t, `document_${t.type}`);
    });
    w(this, Vi, (t, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, t, s);
        i && Object.assign(t.props, i);
      }
      return p(this, G).forEach((i) => {
        if (i.onRenderRow) {
          const o = i.onRenderRow.call(this, t, s);
          o && Object.assign(t.props, o);
        }
      }), t.props;
    });
    w(this, qi, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), p(this, G).forEach((i) => {
      i.onRenderHeaderRow && (t.props = i.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    w(this, hs, (t, s, i) => {
      const { row: o, col: r } = s;
      s.value = this.getCellValue(o, r), t[0] = s.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[l] && (t = r.setting[l].call(this, t, s, i)), this.options[l] && (t = this.options[l].call(this, t, s, i)), p(this, G).forEach((a) => {
        a[l] && (t = a[l].call(this, t, s, i));
      }), t;
    });
    w(this, us, (t, s) => {
      s === "horz" ? this.scroll({ scrollLeft: t }) : this.scroll({ scrollTop: t });
    });
    w(this, Yi, (t) => {
      var l, a, u, c, h;
      const s = this.getPointerInfo(t);
      if (!s)
        return;
      const { rowID: i, colName: o, cellElement: r } = s;
      if (i === "HEADER")
        r && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: o, element: r }), p(this, G).forEach((f) => {
          var d;
          (d = f.onHeaderCellClick) == null || d.call(this, t, { colName: o, element: r });
        }));
      else {
        const { rowElement: f } = s, d = this.layout.visibleRows.find((m) => m.id === i);
        if (r) {
          if (((a = this.options.onCellClick) == null ? void 0 : a.call(this, t, { colName: o, rowID: i, rowInfo: d, element: r, rowElement: f })) === !0)
            return;
          for (const m of p(this, G))
            if (((u = m.onCellClick) == null ? void 0 : u.call(this, t, { colName: o, rowID: i, rowInfo: d, element: r, rowElement: f })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, t, { rowID: i, rowInfo: d, element: f })) === !0)
          return;
        for (const m of p(this, G))
          if (((h = m.onRowClick) == null ? void 0 : h.call(this, t, { rowID: i, rowInfo: d, element: f })) === !0)
            return;
      }
    });
    w(this, Gi, (t) => {
      const s = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    });
    $(this, on, t.id ?? `dtable-${fs(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, $(this, Qt, Object.freeze(Lf(t.plugins))), p(this, Qt).forEach((s) => {
      var l;
      const { methods: i, data: o, state: r } = s;
      i && Object.entries(i).forEach(([a, u]) => {
        typeof u == "function" && Object.assign(this, { [a]: u.bind(this) });
      }), o && Object.assign(p(this, rn), o.call(this)), r && Object.assign(this.state, r.call(this)), (l = s.onCreate) == null || l.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = p(this, mt)) == null ? void 0 : t.options) || p(this, $t) || xl();
  }
  get plugins() {
    return p(this, G);
  }
  get layout() {
    return p(this, mt);
  }
  get id() {
    return p(this, on);
  }
  get data() {
    return p(this, rn);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    $(this, $t, void 0);
  }
  componentDidMount() {
    if (p(this, Zt) ? this.forceUpdate() : k(this, as, Vo).call(this), p(this, G).forEach((t) => {
      let { events: s } = t;
      s && (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([i, o]) => {
        o && this.on(i, o);
      }));
    }), this.on("click", p(this, Yi)), this.on("keydown", p(this, Gi)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const s = new ResizeObserver(this.updateLayout);
          s.observe(t), $(this, ls, s);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    p(this, G).forEach((t) => {
      var s;
      (s = t.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    p(this, Zt) ? k(this, as, Vo).call(this) : p(this, G).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    var s;
    (s = p(this, ls)) == null || s.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const i of p(this, kt).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), p(this, ln)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), p(this, cn)) : t.removeEventListener(i, p(this, jt));
    p(this, G).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), p(this, Qt).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), $(this, rn, {}), p(this, kt).clear();
  }
  on(t, s, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = p(this, kt).get(t);
    o ? o.push(s) : (p(this, kt).set(t, [s]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), p(this, ln)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), p(this, cn)) : (r = this.ref.current) == null || r.addEventListener(t, p(this, jt)));
  }
  off(t, s, i) {
    var l;
    i && (t = `${i}_${t}`);
    const o = p(this, kt).get(t);
    if (!o)
      return;
    const r = o.indexOf(s);
    r >= 0 && o.splice(r, 1), o.length || (p(this, kt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), p(this, ln)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), p(this, cn)) : (l = this.ref.current) == null || l.removeEventListener(t, p(this, jt)));
  }
  emitCustomEvent(t, s) {
    p(this, jt).call(this, s instanceof Event ? s : new CustomEvent(t, { detail: s }), t);
  }
  scroll(t, s) {
    const { scrollLeft: i, scrollTop: o, rowsHeightTotal: r, rowsHeight: l, rowHeight: a, colsInfo: { scrollWidth: u, scrollColsWidth: c } } = this.layout, { to: h } = t;
    let { scrollLeft: f, scrollTop: d } = t;
    if (h === "up" || h === "down")
      d = o + (h === "down" ? 1 : -1) * Math.floor(l / a) * a;
    else if (h === "left" || h === "right")
      f = i + (h === "right" ? 1 : -1) * u;
    else if (h === "home")
      d = 0;
    else if (h === "end")
      d = r - l;
    else if (h === "left-begin")
      f = 0;
    else if (h === "right-end")
      f = c - u;
    else {
      const { offsetLeft: g, offsetTop: y } = t;
      typeof g == "number" && (f = i + g), typeof y == "number" && (f = o + y);
    }
    const m = {};
    return typeof f == "number" && (f = Math.max(0, Math.min(f, c - u)), f !== i && (m.scrollLeft = f)), typeof d == "number" && (d = Math.max(0, Math.min(d, r - l)), d !== o && (m.scrollTop = d)), Object.keys(m).length ? (this.setState(m, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, m), s == null || s.call(this, !0);
    }), !0) : (s == null || s.call(this, !1), !1);
  }
  getColInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    const { colsMap: s, colsList: i } = this.layout;
    return typeof t == "number" ? i[t] : s[t];
  }
  getRowInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: s, rowsMap: i } = this.layout;
    return typeof t == "number" ? s[t] : i[t];
  }
  getCellValue(t, s) {
    var a;
    const i = typeof t == "object" ? t : this.getRowInfo(t);
    if (!i)
      return;
    const o = typeof s == "object" ? s : this.getColInfo(s);
    if (!o)
      return;
    let r = i.id === "HEADER" ? o.setting.title : (a = i.data) == null ? void 0 : a[o.name];
    const { cellValueGetter: l } = this.options;
    return l && (r = l.call(this, i, o, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, s) {
    if (!p(this, $t))
      return;
    typeof t == "function" && (s = t, t = {});
    const { dirtyType: i, state: o } = t;
    if (i === "layout")
      $(this, mt, void 0);
    else if (i === "options") {
      if ($(this, $t, void 0), !p(this, mt))
        return;
      $(this, mt, void 0);
    }
    this.setState(o ?? ((r) => ({ renderCount: r.renderCount + 1 })), s);
  }
  getPointerInfo(t) {
    const s = t.target;
    if (!s || s.closest(".no-cell-event"))
      return;
    const i = s.closest(".dtable-cell");
    if (!i)
      return;
    const o = i.closest(".dtable-row");
    if (!o)
      return;
    const r = i == null ? void 0 : i.getAttribute("data-col"), l = o == null ? void 0 : o.getAttribute("data-id");
    if (!(typeof r != "string" || typeof l != "string"))
      return {
        cellElement: i,
        rowElement: o,
        colName: r,
        rowID: l,
        target: s
      };
  }
  i18n(t, s, i) {
    return Nt(p(this, cs), t, s, i, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((s) => s.name === t);
  }
  render() {
    const t = k(this, Ji, Pa).call(this), { className: s, rowHover: i, colHover: o, cellHover: r, bordered: l, striped: a, scrollbarHover: u } = this.options, c = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, h = ["dtable", s, {
      "dtable-hover-row": i,
      "dtable-hover-col": o,
      "dtable-hover-cell": r,
      "dtable-bordered": l,
      "dtable-striped": a,
      "dtable-scrolled-down": ((t == null ? void 0 : t.scrollTop) ?? 0) > 0,
      "scrollbar-hover": u
    }], f = [];
    return t && p(this, G).forEach((d) => {
      var g;
      const m = (g = d.onRender) == null ? void 0 : g.call(this, t);
      m && (m.style && Object.assign(c, m.style), m.className && h.push(m.className), m.children && f.push(m.children));
    }), /* @__PURE__ */ _(
      "div",
      {
        id: p(this, on),
        className: D(h),
        style: c,
        ref: this.ref,
        tabIndex: -1,
        children: [
          t && k(this, Bi, Ta).call(this, t),
          t && k(this, zi, Na).call(this, t),
          t && k(this, Fi, Ma).call(this, t),
          t && k(this, Ui, La).call(this, t)
        ]
      }
    );
  }
}, be = new WeakMap(), on = new WeakMap(), Zt = new WeakMap(), $t = new WeakMap(), Qt = new WeakMap(), G = new WeakMap(), mt = new WeakMap(), kt = new WeakMap(), rn = new WeakMap(), ls = new WeakMap(), cs = new WeakMap(), jt = new WeakMap(), ln = new WeakMap(), cn = new WeakMap(), Bi = new WeakSet(), Ta = function(t) {
  const { header: s, colsInfo: i, headerHeight: o, scrollLeft: r } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ _(
      Tf,
      {
        scrollLeft: r,
        height: o,
        onRenderCell: p(this, hs),
        onRenderRow: p(this, qi),
        ...i
      }
    );
  const l = Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ _(
    Mo,
    {
      className: "dtable-header",
      style: { height: o },
      renders: l,
      generateArgs: [t],
      generatorThis: this
    }
  );
}, zi = new WeakSet(), Na = function(t) {
  const { headerHeight: s, rowsHeight: i, visibleRows: o, rowHeight: r, colsInfo: l, scrollLeft: a, scrollTop: u } = t;
  return /* @__PURE__ */ _(
    Nf,
    {
      top: s,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: a,
      scrollTop: u,
      onRenderCell: p(this, hs),
      onRenderRow: p(this, Vi),
      ...l
    }
  );
}, Fi = new WeakSet(), Ma = function(t) {
  const { footer: s } = t;
  if (!s)
    return null;
  const i = typeof s == "function" ? s.call(this, t) : Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ _(
    Mo,
    {
      className: "dtable-footer",
      style: { height: t.footerHeight, top: t.rowsHeight + t.headerHeight },
      renders: i,
      generateArgs: [t],
      generatorThis: this,
      generators: t.footerGenerators
    }
  );
}, Ui = new WeakSet(), La = function(t) {
  const s = [], { scrollLeft: i, colsInfo: o, scrollTop: r, rowsHeight: l, rowsHeightTotal: a, footerHeight: u } = t, { scrollColsWidth: c, scrollWidth: h } = o, { scrollbarSize: f = 12, horzScrollbarPos: d } = this.options;
  return c > h && s.push(
    /* @__PURE__ */ _(
      vl,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: c,
        clientSize: h,
        onScroll: p(this, us),
        left: o.fixedLeftWidth,
        bottom: (d === "inside" ? 0 : -f) + u,
        size: f,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), a > l && s.push(
    /* @__PURE__ */ _(
      vl,
      {
        type: "vert",
        scrollPos: r,
        scrollSize: a,
        clientSize: l,
        onScroll: p(this, us),
        right: 0,
        size: f,
        top: t.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), s.length ? s : null;
}, as = new WeakSet(), Vo = function() {
  var t;
  $(this, Zt, !1), (t = this.options.afterRender) == null || t.call(this), p(this, G).forEach((s) => {
    var i;
    return (i = s.afterRender) == null ? void 0 : i.call(this);
  });
}, Vi = new WeakMap(), qi = new WeakMap(), hs = new WeakMap(), us = new WeakMap(), Yi = new WeakMap(), Gi = new WeakMap(), Ki = new WeakSet(), Da = function() {
  if (p(this, $t))
    return !1;
  const s = { ...xl(), ...p(this, Qt).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return $(this, $t, s), $(this, G, p(this, Qt).reduce((i, o) => {
    const { when: r, options: l } = o;
    return (!r || r(s)) && (i.push(o), l && Object.assign(s, typeof l == "function" ? l.call(this, s) : l)), i;
  }, [])), $(this, cs, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Xi = new WeakSet(), Oa = function() {
  var gs, wr;
  const { plugins: t } = this;
  let s = p(this, $t);
  const i = {
    flex: /* @__PURE__ */ _("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ _("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((O) => {
    var it;
    const q = (it = O.beforeLayout) == null ? void 0 : it.call(this, s);
    q && (s = { ...s, ...q }), Object.assign(i, O.footer);
  });
  let o = s.width, r = 0;
  if (typeof o == "function" && (o = o.call(this)), o === "100%") {
    const { parent: O } = this;
    if (O)
      r = O.clientWidth;
    else {
      r = 0, $(this, Zt, !0);
      return;
    }
  } else
    o !== "auto" && (r = o ?? 0);
  const { defaultColWidth: l, minColWidth: a, maxColWidth: u } = s, c = [], h = [], f = [], d = {}, m = [], g = [];
  let y = 0, b = 0, x = 0;
  s.cols.forEach((O) => {
    if (O.hidden)
      return;
    const q = O.type || "", it = {
      fixed: !1,
      flex: !1,
      width: l,
      minWidth: a,
      maxWidth: u,
      ...O,
      type: q
    }, j = {
      name: it.name,
      type: q,
      setting: it,
      flex: 0,
      left: 0,
      width: it.width || 0,
      realWidth: 0,
      visible: !0,
      index: m.length
    };
    t.forEach((vr) => {
      var xr, Er;
      const ys = (xr = vr.colTypes) == null ? void 0 : xr[q];
      if (ys) {
        const Sr = typeof ys == "function" ? ys(j) : ys;
        Sr && Object.assign(it, Sr, O);
      }
      (Er = vr.onAddCol) == null || Er.call(this, j);
    });
    const { fixed: Ae, flex: Te, width: dn = l } = it;
    j.flex = Ae ? 0 : Te === !0 ? 1 : typeof Te == "number" ? Te : 0, j.width = Af(dn < 1 ? Math.round(dn * r) : dn, it.minWidth, it.maxWidth), j.realWidth = j.realWidth || j.width, Ae === "left" ? (j.left = y, y += j.width, c.push(j)) : Ae === "right" ? (j.left = b, b += j.width, h.push(j)) : (j.left = x, x += j.width, f.push(j)), j.flex && g.push(j), m.push(j), d[j.name] = j;
  });
  const S = y + x + b;
  o === "auto" && (r = S);
  const { data: R, rowKey: A = "id", rowHeight: N } = s, L = [], M = (O, q, it) => {
    var Ae, Te;
    const j = { data: it ?? { [A]: O }, id: O, index: L.length, top: 0 };
    if (it || (j.lazy = !0), L.push(j), ((Ae = s.onAddRow) == null ? void 0 : Ae.call(this, j, q)) !== !1) {
      for (const dn of t)
        if (((Te = dn.onAddRow) == null ? void 0 : Te.call(this, j, q)) === !1)
          return;
    }
  };
  if (typeof R == "number")
    for (let O = 0; O < R; O++)
      M(`${O}`, O);
  else
    Array.isArray(R) && R.forEach((O, q) => {
      typeof O == "object" ? M(`${O[A] ?? ""}`, q, O) : M(`${O ?? ""}`, q);
    });
  let P = L;
  const T = {};
  if (s.onAddRows) {
    const O = s.onAddRows.call(this, P);
    O && (P = O);
  }
  for (const O of t) {
    const q = (gs = O.onAddRows) == null ? void 0 : gs.call(this, P);
    q && (P = q);
  }
  P.forEach((O, q) => {
    T[O.id] = O, O.index = q, O.top = O.index * N;
  });
  const { header: I, footer: U } = s, X = I ? s.headerHeight || N : 0, V = U ? s.footerHeight || N : 0;
  let H = s.height, W = 0;
  const ht = P.length * N, Dt = X + V + ht;
  if (typeof H == "function" && (H = H.call(this, Dt)), H === "auto")
    W = Dt;
  else if (typeof H == "object")
    W = Math.min(H.max, Math.max(H.min, Dt));
  else if (H === "100%") {
    const { parent: O } = this;
    if (O)
      W = O.clientHeight;
    else {
      W = 0, $(this, Zt, !0);
      return;
    }
  } else
    W = H;
  const ke = W - X - V, he = r - y - b, wt = {
    options: s,
    allRows: L,
    width: r,
    height: W,
    rows: P,
    rowsMap: T,
    rowHeight: N,
    rowsHeight: ke,
    rowsHeightTotal: ht,
    header: I,
    footer: U,
    footerGenerators: i,
    headerHeight: X,
    footerHeight: V,
    colsMap: d,
    colsList: m,
    flexCols: g,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: h,
      scrollCols: f,
      fixedLeftWidth: y,
      scrollWidth: he,
      scrollColsWidth: x,
      fixedRightWidth: b
    }
  }, Re = (wr = s.onLayout) == null ? void 0 : wr.call(this, wt);
  Re && Object.assign(wt, Re), t.forEach((O) => {
    if (O.onLayout) {
      const q = O.onLayout.call(this, wt);
      q && Object.assign(wt, q);
    }
  }), $(this, mt, wt);
}, Ji = new WeakSet(), Pa = function() {
  (k(this, Ki, Da).call(this) || !p(this, mt)) && k(this, Xi, Oa).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: s } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: o, scrollWidth: r, scrollColsWidth: l } } = t;
  if (i.length) {
    const S = r - l;
    if (S > 0) {
      const R = i.reduce((N, L) => N + L.flex, 0);
      let A = 0;
      i.forEach((N) => {
        const L = Math.min(S - A, Math.ceil(S * (N.flex / R)));
        N.realWidth = L + N.width, A += N.realWidth;
      });
    } else
      i.forEach((R) => {
        R.realWidth = R.width;
      });
  }
  s = Math.min(Math.max(0, l - r), s);
  let a = 0;
  o.forEach((S) => {
    S.left = a, a += S.realWidth, S.visible = S.left + S.realWidth >= s && S.left <= s + r;
  });
  const { rowsHeightTotal: u, rowsHeight: c, rows: h, rowHeight: f } = t, d = Math.min(Math.max(0, u - c), this.state.scrollTop), m = Math.floor(d / f), g = d + c, y = Math.min(h.length, Math.ceil(g / f)), b = [], { rowDataGetter: x } = this.options;
  for (let S = m; S < y; S++) {
    const R = h[S];
    R.lazy && x && (R.data = x([R.id])[0], R.lazy = !1), b.push(R);
  }
  return t.visibleRows = b, t.scrollTop = d, t.scrollLeft = s, t;
}, E(xs, "addPlugin", ka), E(xs, "removePlugin", Ra), xs);
function El(e, n) {
  n !== void 0 ? e.data.hoverCol = n : n = e.data.hoverCol;
  const { current: t } = e.ref;
  if (!t)
    return;
  const s = "dtable-col-hover";
  t.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof n == "string" && n.length && t.querySelectorAll(`.dtable-cell[data-col="${n}"]`).forEach((i) => i.classList.add(s));
}
const Of = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var i;
      const { colHover: n } = this.options;
      if (!n)
        return;
      const t = (i = e.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!t || n === "header" && !t.closest(".dtable-header"))
        return;
      const s = (t == null ? void 0 : t.getAttribute("data-col")) ?? !1;
      El(this, s);
    },
    mouseleave() {
      El(this, !1);
    }
  }
}, Pf = $e(Of, { buildIn: !0 });
function If(e, n) {
  var r, l;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: i } = this.options, o = (a, u) => {
    i && !i.call(this, a) || !!t[a] === u || (u ? t[a] = !0 : delete t[a], s[a] = u);
  };
  if (e === void 0 ? (n === void 0 && (n = !Ia.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: a }) => {
    o(a, !!n);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((a) => {
    o(a, n ?? !t[a]);
  })), Object.keys(s).length) {
    const a = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, e, s, t);
    a && Object.keys(a).forEach((u) => {
      a[u] ? t[u] = !0 : delete t[u];
    }), this.setState({ checkedRows: { ...t } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, s);
    });
  }
  return s;
}
function Hf(e) {
  return this.state.checkedRows[e] ?? !1;
}
function Ia() {
  var t, s;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((i, o) => i + (n.call(this, o.id) ? 1 : 0), 0)) : e === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function Wf() {
  return Object.keys(this.state.checkedRows);
}
function jf(e) {
  const { checkable: n } = this.options;
  e === void 0 && (e = !n), n !== e && this.setState({ forceCheckable: e });
}
const Bf = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto"
  },
  when: (e) => e.checkable !== void 0,
  options(e) {
    const { forceCheckable: n } = this.state;
    return n !== void 0 ? e.checkable = n : e.checkable === "auto" && (e.checkable = !!e.cols.some((t) => t.checkbox)), e;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: If,
    isRowChecked: Hf,
    isAllRowChecked: Ia,
    getChecks: Wf,
    toggleCheckable: jf
  },
  i18n: {
    zh_cn: {
      checkedCountInfo: "已选择 {selected} 项",
      totalCountInfo: "共 {total} 项"
    },
    zh_tw: {
      checkedCountInfo: "已選擇 {selected} 項",
      totalCountInfo: "共 {total} 項"
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
        /* @__PURE__ */ _("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ _("input", { type: "checkbox", checked: e }) })
      ];
    },
    checkedInfo(e, n) {
      const t = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, t)];
      const i = t.length, o = [];
      return i && o.push(this.i18n("checkedCountInfo", { selected: i })), o.push(this.i18n("totalCountInfo", { total: n.allRows.length })), [
        /* @__PURE__ */ _("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(e, { row: n, col: t }) {
    var l;
    const { id: s } = n, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, s))
      return e;
    const { checkbox: o } = t.setting;
    if (typeof o == "function" ? o.call(this, s) : o) {
      const a = this.isRowChecked(s), u = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, a, s)) ?? /* @__PURE__ */ _("input", { type: "checkbox", checked: a });
      e.unshift(u), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var r;
    const { id: s } = n, { checkbox: i } = t.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const l = this.isAllRowChecked(), a = ((r = this.options.checkboxRender) == null ? void 0 : r.call(this, l, s)) ?? /* @__PURE__ */ _("input", { type: "checkbox", checked: l });
      e.unshift(a), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: n }) {
    if (this.isRowChecked(n.id))
      return { className: D(e.className, "is-checked") };
  },
  onHeaderCellClick(e) {
    const n = e.target;
    if (!n)
      return;
    const t = n.closest('input[type="checkbox"],.dtable-checkbox');
    t && (this.toggleCheckRows(t.checked), e.stopPropagation());
  },
  onRowClick(e, { rowID: n }) {
    const t = e.target;
    if (!t)
      return;
    (t.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(n);
  }
}, zf = $e(Bf);
var Ha = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Ha || {});
function Ks(e) {
  const n = this.data.nestedMap.get(e);
  if (!n || n.state !== "")
    return n ?? { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, s = n.children && t && t[e];
  let i = !1, { parent: o } = n;
  for (; o; ) {
    const r = Ks.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return n.state = i ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? Ks.call(this, n.parent).level + 1 : 0, n;
}
function Ff(e) {
  return e !== void 0 ? Ks.call(this, e) : this.data.nestedMap;
}
function Uf(e, n) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !Wa.call(this)), n) {
      const i = s.entries();
      for (const [o, r] of i)
        r.state === "expanded" && (t[o] = !0);
    } else
      t = {};
  else {
    const i = Array.isArray(e) ? e : [e];
    n === void 0 && (n = !t[i[0]]), i.forEach((o) => {
      const r = s.get(o);
      n && (r != null && r.children) ? t[o] = !0 : delete t[o];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...t } }
  }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function Wa() {
  const e = this.data.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function ja(e, n = 0, t, s = 0) {
  var i;
  t || (t = [...e.keys()]);
  for (const o of t) {
    const r = e.get(o);
    r && (r.level === s && (r.order = n++), (i = r.children) != null && i.length && (n = ja(e, n, r.children, s + 1)));
  }
  return n;
}
function Ba(e, n, t, s) {
  const i = e.getNestedRowInfo(n);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = t, Ba(e, o, t, s);
  }), i;
}
function za(e, n, t, s, i) {
  var l;
  const o = e.getNestedRowInfo(n);
  if (!o || o.state === "")
    return;
  ((l = o.children) == null ? void 0 : l.every((a) => {
    const u = !!(s[a] !== void 0 ? s[a] : i[a]);
    return t === u;
  })) && (s[n] = t), o.parent && za(e, o.parent, t, s, i);
}
const Vf = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, n) {
      const { nestedMap: t } = this.data, s = t.get(e.id), i = t.get(n.id);
      return (s == null ? void 0 : s.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(e, n, t) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const s = {};
      return Object.entries(n).forEach(([i, o]) => {
        const r = Ba(this, i, o, s);
        r != null && r.parent && za(this, r.parent, o, s, t);
      }), s;
    }
  },
  options(e) {
    return e.nested === "auto" && (e.nested = !!e.cols.some((n) => n.nestedToggle)), e;
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: Ff,
    toggleRow: Uf,
    isAllCollapsed: Wa,
    getNestedRowInfo: Ks
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var i, o;
    const { nestedMap: n } = this.data, t = String((i = e.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), s = n.get(e.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = t === "0" ? void 0 : t, (o = e.data) != null && o[this.options.asParentKey ?? "asParent"] && (s.children = []), n.set(e.id, s), t) {
      let r = n.get(t);
      r || (r = {
        state: "",
        level: 0
      }, n.set(t, r)), r.children || (r.children = []), r.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter(
      (n) => this.getNestedRowInfo(n.id).state !== "hidden"
      /* hidden */
    ), ja(this.data.nestedMap), e.sort((n, t) => {
      const s = this.getNestedRowInfo(n.id), i = this.getNestedRowInfo(t.id), o = (s.order ?? 0) - (i.order ?? 0);
      return o === 0 ? n.index - t.index : o;
    }), e;
  },
  onRenderCell(e, { col: n, row: t }) {
    var l;
    const { id: s, data: i } = t, { nestedToggle: o } = n.setting, r = this.getNestedRowInfo(s);
    if (o && (r.children || r.parent) && e.unshift(((l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, r, s, n, i)) ?? /* @__PURE__ */ _("a", { role: "button", className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ _("span", { className: "toggle-icon" }) })), r.level) {
      let { nestedIndent: a = o } = n.setting;
      a && (a === !0 && (a = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ _("div", { className: "dtable-nested-indent", style: { width: a * r.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var i;
    const { id: s } = n;
    return t.setting.nestedToggle && e.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, t, void 0)) ?? /* @__PURE__ */ _("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ _("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: n }) {
    const t = this.getNestedRowInfo(n.id);
    return {
      className: D(e.className, `is-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = D(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
  },
  onHeaderCellClick(e) {
    const n = e.target;
    if (!(!n || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(e, { rowID: n }) {
    const t = e.target;
    if (!(!t || !this.getNestedRowInfo(n).children || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow(n), !0;
  }
}, qf = $e(Vf);
function Fa(e, n, t, s) {
  if (!e)
    return t;
  typeof e == "function" && (e = e(n)), typeof e == "string" && (e = { url: e });
  const { url: i, ...o } = e;
  return /* @__PURE__ */ _("a", { href: ct(i, n.row.data), ...s, ...o, children: t });
}
function gr(e, n, t) {
  var s;
  if (e != null)
    return t = t ?? ((s = n.row.data) == null ? void 0 : s[n.col.name]), typeof e == "function" ? e(t, n) : ct(e, t);
}
function Ua(e, n, t, s) {
  var i;
  return t = t ?? ((i = n.row.data) == null ? void 0 : i[n.col.name]), e === !1 ? t : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(t, n)), Ho(t, e, s));
}
function Va(e, n) {
  const { link: t } = n.col.setting, s = Fa(t, n, e[0]);
  return s && (e[0] = s), e;
}
function qa(e, n) {
  const { format: t } = n.col.setting;
  return t && (e[0] = gr(t, n, e[0])), e;
}
function Ya(e, n) {
  const { map: t } = n.col.setting;
  return typeof t == "function" ? e[0] = t(e[0], n) : typeof t == "object" && t && (e[0] = t[e[0]] ?? e[0]), e;
}
function wn(e, n, t = "[yyyy-]MM-dd hh:mm") {
  const { format: s = t, invalidDate: i } = n.col.setting;
  return e[0] = Ua(s, n, e[0], i), e;
}
function qo(e, n, t = !1) {
  const { html: s = t } = n.col.setting;
  if (s === !1)
    return e;
  const i = e[0], o = s === !0 ? i : gr(s, n, i);
  return e[0] = {
    html: o
  }, e;
}
const Yf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, n) {
        return qo(e, n, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(e, { col: n }) {
        const { circleSize: t = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = n.setting, r = (t - s) / 2, l = t / 2, a = e[0];
        return e[0] = /* @__PURE__ */ _("svg", { width: t, height: t, children: [
          /* @__PURE__ */ _("circle", { cx: l, cy: l, r, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ _("circle", { cx: l, cy: l, r, "stroke-width": s, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - a) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ _("text", { x: l, y: l + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${r}px` }, children: Math.round(a) })
        ] }), e;
      }
    },
    datetime: {
      onRenderCell(e, n) {
        return wn(e, n, "[yyyy-]MM-dd hh:mm");
      }
    },
    date: {
      onRenderCell(e, n) {
        return wn(e, n, "yyyy-MM-dd");
      }
    },
    time: {
      onRenderCell(e, n) {
        return wn(e, n, "hh:mm");
      }
    }
  },
  onRenderCell(e, n) {
    const { formatDate: t, html: s } = n.col.setting;
    return t && (e = wn(e, n, t)), e = Ya(e, n), e = qa(e, n), s ? e = qo(e, n) : e = Va(e, n), e;
  }
}, Gf = $e(Yf, { buildIn: !0 });
function xo(e, { row: n, col: t }) {
  const { data: s } = n, i = s ? s[t.name] : void 0;
  if (!(i != null && i.length))
    return e;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${t.name}Avatar`, avatarProps: l, avatarCodeKey: a, avatarNameKey: u = `${t.name}Name` } = t.setting, c = (s ? s[u] : i) || e[0], h = {
    size: "xs",
    className: D(o, l == null ? void 0 : l.className, "flex-none"),
    src: s ? s[r] : void 0,
    text: c,
    code: a ? s ? s[a] : void 0 : i,
    ...l
  };
  if (e[0] = /* @__PURE__ */ _(zc, { ...h }), t.type === "avatarBtn") {
    const { avatarBtnProps: f } = t.setting, d = typeof f == "function" ? f(t, n) : f;
    e[0] = /* @__PURE__ */ _("button", { type: "button", className: "btn btn-avatar", ...d, children: [
      e[0],
      /* @__PURE__ */ _("div", { children: c })
    ] });
  } else
    t.type === "avatarName" && (e[0] = /* @__PURE__ */ _("div", { className: "flex items-center gap-1", children: [
      e[0],
      /* @__PURE__ */ _("span", { children: c })
    ] }));
  return e;
}
const Kf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: xo
    },
    avatarBtn: {
      onRenderCell: xo
    },
    avatarName: {
      onRenderCell: xo
    }
  }
}, Xf = $e(Kf, { buildIn: !0 }), Jf = {
  name: "sort-type",
  onRenderHeaderCell(e, n) {
    const { col: t } = n, { sortType: s } = t.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      e.push(
        /* @__PURE__ */ _("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = t.setting;
      if (o) {
        const r = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, t, r, i)), typeof o == "string" && (o = { url: o });
        const { url: l, ...a } = o;
        e[0] = /* @__PURE__ */ _("a", { href: ct(l, { ...t.setting, sortType: r }), ...a, children: e[0] });
      }
    }
    return e;
  }
}, Zf = $e(Jf, { buildIn: !0 }), Qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Ha,
  avatar: Xf,
  checkable: zf,
  colHover: Pf,
  nested: qf,
  renderDatetime: Ua,
  renderDatetimeCell: wn,
  renderFormat: gr,
  renderFormatCell: qa,
  renderHtmlCell: qo,
  renderLink: Fa,
  renderLinkCell: Va,
  renderMapCell: Ya,
  rich: Gf,
  sortType: Zf
}, Symbol.toStringTag, { value: "Module" }));
class pn extends J {
}
E(pn, "NAME", "dtable"), E(pn, "Component", Df), E(pn, "definePlugin", $e), E(pn, "removePlugin", Ra), E(pn, "plugins", Qf);
var ut;
class vn extends Ut {
  constructor() {
    super(...arguments);
    w(this, ut, void 0);
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const t = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    t != null && t.startsWith("#") && $(this, ut, document.querySelector(t)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), p(this, ut) && (this.addActive(p(this, ut).parentElement, p(this, ut)), p(this, ut).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const t = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    t != null && t.startsWith("#") && $(this, ut, document.querySelector(t)), p(this, ut) && (this.addActive(p(this, ut).parentElement, p(this, ut)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
  }
  addActive(t, s) {
    const i = t.children;
    Array.from(i).forEach((r) => {
      r.classList.remove("active"), r.classList.contains("fade") && r.classList.remove("in");
    }), s.classList.add("active"), s.classList.contains("fade") && this.transition(s).then(function() {
      s.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(t) {
    return new Promise(function(s) {
      setTimeout(() => {
        t.classList.add("in"), s();
      }, 100);
    });
  }
}
ut = new WeakMap(), E(vn, "NAME", "NavTabs"), E(vn, "NAV_CLASS", "nav-tabs"), E(vn, "EVENTS", !0), E(vn, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (e) => {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new vn(e.target).showTarget());
});
export {
  v as $,
  Vr as ActionMenu,
  Yr as ActionMenuNested,
  Cf as AjaxForm,
  rl as Avatar,
  ll as BtnGroup,
  Gr as Button,
  cc as Component,
  ie as ContextMenu,
  pn as DTable,
  wl as Dashboard,
  nt as Dropdown,
  Xo as EventBus,
  Kh as HElement,
  lc as HtmlContent,
  Kr as Menu,
  _n as Messager,
  bn as Modal,
  et as ModalBase,
  $n as ModalTrigger,
  cl as Nav,
  vn as NavTabs,
  hl as Pager,
  fl as Picker,
  nl as ProgressCircle,
  F as ReactComponent,
  sl as Switch,
  Pt as TIME_DAY,
  dl as Toolbar,
  ft as Tooltip,
  tc as addI18nMap,
  ba as ajaxSubmit,
  al as calculateTimestamp,
  v as cash,
  D as classes,
  nd as convertBytes,
  at as createDate,
  Ee as createRef,
  sd as dom,
  ed as formatBytes,
  Ho as formatDate,
  vd as formatDateSpan,
  ct as formatString,
  nc as getClassList,
  ec as getLang,
  Vh as getLangCode,
  xd as getTimeBeforeDesc,
  bt as h,
  id as hh,
  Gh as htm,
  Nt as i18n,
  wd as isDBY,
  go as isObject,
  ps as isSameDay,
  Ju as isSameMonth,
  gd as isSameWeek,
  Io as isSameYear,
  yd as isToday,
  bd as isTomorrow,
  st as isValidElement,
  _d as isYesterday,
  To as mergeDeep,
  Ro as nativeEvents,
  Ko as render,
  qh as setLangCode,
  Iu as store,
  sc as storeData,
  Yh as takeData
};
