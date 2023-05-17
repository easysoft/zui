var ma = Object.defineProperty;
var ga = (e, n, t) => n in e ? ma(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var x = (e, n, t) => (ga(e, typeof n != "symbol" ? n + "" : n, t), t), Bi = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var p = (e, n, t) => (Bi(e, n, "read from private field"), t ? t.call(e) : n.get(e)), b = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, C = (e, n, t, s) => (Bi(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t), Xo = (e, n, t, s) => ({
  set _(i) {
    C(e, n, i, t);
  },
  get _() {
    return p(e, n, s);
  }
}), T = (e, n, t) => (Bi(e, n, "access private method"), t);
var ns, j, Yr, et, he, Jo, Kr, eo, Xr, vs = {}, Jr = [], ya = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function jt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function Zr(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function dt(e, n, t) {
  var s, i, o, r = {};
  for (o in n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? ns.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return mn(e, r, s, i, null);
}
function mn(e, n, t, s, i) {
  var o = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Yr };
  return i == null && j.vnode != null && j.vnode(o), o;
}
function ve() {
  return { current: null };
}
function ss(e) {
  return e.children;
}
function z(e, n) {
  this.props = e, this.context = n;
}
function Sn(e, n) {
  if (n == null)
    return e.__ ? Sn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? Sn(e) : null;
}
function Qr(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return Qr(e);
  }
}
function no(e) {
  (!e.__d && (e.__d = !0) && he.push(e) && !xs.__r++ || Jo !== j.debounceRendering) && ((Jo = j.debounceRendering) || Kr)(xs);
}
function xs() {
  var e, n, t, s, i, o, r, l;
  for (he.sort(eo); e = he.shift(); )
    e.__d && (n = he.length, s = void 0, i = void 0, r = (o = (t = e).__v).__e, (l = t.__P) && (s = [], (i = jt({}, o)).__v = o.__v + 1, wo(l, o, i, t.__n, l.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? Sn(o), o.__h), ol(s, o), o.__e != r && Qr(o)), he.length > n && he.sort(eo));
  xs.__r = 0;
}
function tl(e, n, t, s, i, o, r, l, a, u) {
  var c, h, d, f, m, g, y, _ = s && s.__k || Jr, v = _.length;
  for (t.__k = [], c = 0; c < n.length; c++)
    if ((f = t.__k[c] = (f = n[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? mn(null, f, null, null, f) : Array.isArray(f) ? mn(ss, { children: f }, null, null, null) : f.__b > 0 ? mn(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = t, f.__b = t.__b + 1, (d = _[c]) === null || d && f.key == d.key && f.type === d.type)
        _[c] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((d = _[h]) && f.key == d.key && f.type === d.type) {
            _[h] = void 0;
            break;
          }
          d = null;
        }
      wo(e, f, d = d || vs, i, o, r, l, a, u), m = f.__e, (h = f.ref) && d.ref != h && (y || (y = []), d.ref && y.push(d.ref, null, f), y.push(h, f.__c || m, f)), m != null ? (g == null && (g = m), typeof f.type == "function" && f.__k === d.__k ? f.__d = a = el(f, a, e) : a = sl(e, f, d, _, m, a), typeof t.type == "function" && (t.__d = a)) : a && d.__e == a && a.parentNode != e && (a = Sn(d));
    }
  for (t.__e = g, c = v; c--; )
    _[c] != null && (typeof t.type == "function" && _[c].__e != null && _[c].__e == t.__d && (t.__d = il(s).nextSibling), ll(_[c], _[c]));
  if (y)
    for (c = 0; c < y.length; c++)
      rl(y[c], y[++c], y[++c]);
}
function el(e, n, t) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, n = typeof s.type == "function" ? el(s, n, t) : sl(t, s, s, i, s.__e, n));
  return n;
}
function nl(e, n) {
  return n = n || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(t) {
    nl(t, n);
  }) : n.push(e)), n;
}
function sl(e, n, t, s, i, o) {
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
function il(e) {
  var n, t, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (n = e.__k.length - 1; n >= 0; n--)
      if ((t = e.__k[n]) && (s = il(t)))
        return s;
  }
  return null;
}
function _a(e, n, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || Es(e, o, null, t[o], s);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || Es(e, o, n[o], t[o], s);
}
function Zo(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t ?? "") : e[n] = t == null ? "" : typeof t != "number" || ya.test(n) ? t : t + "px";
}
function Es(e, n, t, s, i) {
  var o;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (n in s)
            t && n in t || Zo(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || Zo(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? s || e.addEventListener(n, o ? tr : Qo, o) : e.removeEventListener(n, o ? tr : Qo, o);
    else if (n !== "dangerouslySetInnerHTML") {
      if (i)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "width" && n !== "height" && n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n in e)
        try {
          e[n] = t ?? "";
          break t;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && n[4] !== "-" ? e.removeAttribute(n) : e.setAttribute(n, t));
    }
}
function Qo(e) {
  return this.l[e.type + !1](j.event ? j.event(e) : e);
}
function tr(e) {
  return this.l[e.type + !0](j.event ? j.event(e) : e);
}
function wo(e, n, t, s, i, o, r, l, a) {
  var u, c, h, d, f, m, g, y, _, v, E, $, A, N, L, M = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, l = n.__e = t.__e, n.__h = null, o = [l]), (u = j.__b) && u(n);
  try {
    t:
      if (typeof M == "function") {
        if (y = n.props, _ = (u = M.contextType) && s[u.__c], v = u ? _ ? _.props.value : u.__ : s, t.__c ? g = (c = n.__c = t.__c).__ = c.__E : ("prototype" in M && M.prototype.render ? n.__c = c = new M(y, v) : (n.__c = c = new z(y, v), c.constructor = M, c.render = ba), _ && _.sub(c), c.props = y, c.state || (c.state = {}), c.context = v, c.__n = s, h = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), M.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = jt({}, c.__s)), jt(c.__s, M.getDerivedStateFromProps(y, c.__s))), d = c.props, f = c.state, c.__v = n, h)
          M.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && y !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, v), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, v) === !1 || n.__v === t.__v) {
            for (n.__v !== t.__v && (c.props = y, c.state = c.__s, c.__d = !1), c.__e = !1, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(I) {
              I && (I.__ = n);
            }), E = 0; E < c._sb.length; E++)
              c.__h.push(c._sb[E]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, v), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, m);
          });
        }
        if (c.context = v, c.props = y, c.__P = e, $ = j.__r, A = 0, "prototype" in M && M.prototype.render) {
          for (c.state = c.__s, c.__d = !1, $ && $(n), u = c.render(c.props, c.state, c.context), N = 0; N < c._sb.length; N++)
            c.__h.push(c._sb[N]);
          c._sb = [];
        } else
          do
            c.__d = !1, $ && $(n), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++A < 25);
        c.state = c.__s, c.getChildContext != null && (s = jt(jt({}, s), c.getChildContext())), h || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(d, f)), L = u != null && u.type === ss && u.key == null ? u.props.children : u, tl(e, Array.isArray(L) ? L : [L], n, t, s, i, o, r, l, a), c.base = n.__e, n.__h = null, c.__h.length && r.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = wa(t.__e, n, t, s, i, o, r, a);
    (u = j.diffed) && u(n);
  } catch (I) {
    n.__v = null, (a || o != null) && (n.__e = l, n.__h = !!a, o[o.indexOf(l)] = null), j.__e(I, n, t);
  }
}
function ol(e, n) {
  j.__c && j.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(s) {
        s.call(t);
      });
    } catch (s) {
      j.__e(s, t.__v);
    }
  });
}
function wa(e, n, t, s, i, o, r, l) {
  var a, u, c, h = t.props, d = n.props, f = n.type, m = 0;
  if (f === "svg" && (i = !0), o != null) {
    for (; m < o.length; m++)
      if ((a = o[m]) && "setAttribute" in a == !!f && (f ? a.localName === f : a.nodeType === 3)) {
        e = a, o[m] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(d);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, d.is && d), o = null, l = !1;
  }
  if (f === null)
    h === d || l && e.data === d || (e.data = d);
  else {
    if (o = o && ns.call(e.childNodes), u = (h = t.props || vs).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (h = {}, m = 0; m < e.attributes.length; m++)
          h[e.attributes[m].name] = e.attributes[m].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (_a(e, d, h, i, l), c)
      n.__k = [];
    else if (m = n.props.children, tl(e, Array.isArray(m) ? m : [m], n, t, s, i && f !== "foreignObject", o, r, o ? o[0] : t.__k && Sn(t, 0), l), o != null)
      for (m = o.length; m--; )
        o[m] != null && Zr(o[m]);
    l || ("value" in d && (m = d.value) !== void 0 && (m !== e.value || f === "progress" && !m || f === "option" && m !== h.value) && Es(e, "value", m, h.value, !1), "checked" in d && (m = d.checked) !== void 0 && m !== e.checked && Es(e, "checked", m, h.checked, !1));
  }
  return e;
}
function rl(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    j.__e(s, t);
  }
}
function ll(e, n, t) {
  var s, i;
  if (j.unmount && j.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || rl(s, null, n)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        j.__e(o, n);
      }
    s.base = s.__P = null, e.__c = void 0;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && ll(s[i], n, t || typeof e.type != "function");
  t || e.__e == null || Zr(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ba(e, n, t) {
  return this.constructor(e, t);
}
function is(e, n, t) {
  var s, i, o;
  j.__ && j.__(e, n), i = (s = typeof t == "function") ? null : t && t.__k || n.__k, o = [], wo(n, e = (!s && t || n).__k = dt(ss, null, [e]), i || vs, vs, n.ownerSVGElement !== void 0, !s && t ? [t] : i ? null : n.firstChild ? ns.call(n.childNodes) : null, o, !s && t ? t : i ? i.__e : n.firstChild, s), ol(o, e);
}
function cl(e, n) {
  is(e, n, cl);
}
function va(e, n, t) {
  var s, i, o, r = jt({}, e.props);
  for (o in n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : r[o] = n[o];
  return arguments.length > 2 && (r.children = arguments.length > 3 ? ns.call(arguments, 2) : t), mn(e.type, r, s || e.key, i || e.ref, null);
}
function xa(e, n) {
  var t = { __c: n = "__cC" + Xr++, __: e, Consumer: function(s, i) {
    return s.children(i);
  }, Provider: function(s) {
    var i, o;
    return this.getChildContext || (i = [], (o = {})[n] = this, this.getChildContext = function() {
      return o;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && i.some(function(l) {
        l.__e = !0, no(l);
      });
    }, this.sub = function(r) {
      i.push(r);
      var l = r.componentWillUnmount;
      r.componentWillUnmount = function() {
        i.splice(i.indexOf(r), 1), l && l.call(r);
      };
    }), s.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
ns = Jr.slice, j = { __e: function(e, n, t, s) {
  for (var i, o, r; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Yr = 0, et = function(e) {
  return e != null && e.constructor === void 0;
}, z.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = jt({}, this.state), typeof e == "function" && (e = e(jt({}, t), this.props)), e && jt(t, e), e != null && this.__v && (n && this._sb.push(n), no(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), no(this));
}, z.prototype.render = ss, he = [], Kr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, eo = function(e, n) {
  return e.__v.__b - n.__v.__b;
}, xs.__r = 0, Xr = 0;
const Ea = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: z,
  Fragment: ss,
  cloneElement: va,
  createContext: xa,
  createElement: dt,
  createRef: ve,
  h: dt,
  hydrate: cl,
  get isValidElement() {
    return et;
  },
  get options() {
    return j;
  },
  render: is,
  toChildArray: nl
}, Symbol.toStringTag, { value: "Module" }));
var Sa = 0;
function w(e, n, t, s, i, o) {
  var r, l, a = {};
  for (l in n)
    l == "ref" ? r = n[l] : a[l] = n[l];
  var u = { type: e, props: a, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Sa, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return j.vnode && j.vnode(u), u;
}
var Pt;
class Ca {
  constructor(n = "") {
    b(this, Pt, void 0);
    typeof n == "object" ? C(this, Pt, n) : C(this, Pt, document.appendChild(document.createComment(n)));
  }
  on(n, t, s) {
    p(this, Pt).addEventListener(n, t, s);
  }
  once(n, t, s) {
    p(this, Pt).addEventListener(n, t, { once: !0, ...s });
  }
  off(n, t, s) {
    p(this, Pt).removeEventListener(n, t, s);
  }
  emit(n) {
    return p(this, Pt).dispatchEvent(n), n;
  }
}
Pt = new WeakMap();
const so = /* @__PURE__ */ new Set([
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
class bo extends Ca {
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
    return typeof n == "string" && (so.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), super.emit(bo.createEvent(n, t));
  }
  static createEvent(n, t) {
    return typeof n == "string" && (so.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), n;
  }
}
var Dt, An, fe, an;
class er extends bo {
  constructor(t = "", s) {
    super(t);
    b(this, fe);
    b(this, Dt, /* @__PURE__ */ new Map());
    b(this, An, void 0);
    C(this, An, s == null ? void 0 : s.customEventSuffix);
  }
  on(t, s, i) {
    t = T(this, fe, an).call(this, t), super.on(t, s, i), p(this, Dt).set(s, [t, i]);
  }
  off(t, s, i) {
    t = T(this, fe, an).call(this, t), super.off(t, s, i), p(this, Dt).delete(s);
  }
  once(t, s, i) {
    t = T(this, fe, an).call(this, t);
    const o = (r) => {
      s(r), p(this, Dt).delete(o);
    };
    super.once(t, o, i), p(this, Dt).set(o, [t, i]);
  }
  emit(t, s) {
    return typeof t == "string" && (t = T(this, fe, an).call(this, t)), super.emit(t, s);
  }
  offAll() {
    Array.from(p(this, Dt).entries()).forEach(([t, [s, i]]) => {
      super.off(s, t, i);
    }), p(this, Dt).clear();
  }
}
Dt = new WeakMap(), An = new WeakMap(), fe = new WeakSet(), an = function(t) {
  const s = p(this, An);
  return so.has(t) || typeof s != "string" || t.endsWith(s) ? t : `${t}${s}`;
};
function $a(e, n) {
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
function ka(e, n, t) {
  try {
    const s = $a(e, n), i = s[s.length - 1];
    return i === void 0 ? t : i;
  } catch {
    return t;
  }
}
function zi(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function io(e, ...n) {
  if (!n.length)
    return e;
  const t = n.shift();
  if (zi(e) && zi(t))
    for (const s in t)
      zi(t[s]) ? (e[s] || Object.assign(e, { [s]: {} }), io(e[s], t[s])) : Object.assign(e, { [s]: t[s] });
  return io(e, ...n);
}
function pt(e, ...n) {
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
var vo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(vo || {});
function Cf(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / vo[t]).toFixed(n) + t);
}
const $f = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * vo[s];
};
var Gr;
let xo = ((Gr = document.documentElement.getAttribute("lang")) == null ? void 0 : Gr.toLowerCase()) ?? "zh_cn", qt;
function Ra() {
  return xo;
}
function Ta(e) {
  xo = e.toLowerCase();
}
function al(e, n) {
  qt || (qt = {}), typeof e == "string" && (e = { [e]: n ?? {} }), io(qt, e);
}
function ne(e, n, t, s, i, o) {
  Array.isArray(e) ? qt && e.unshift(qt) : e = qt ? [qt, e] : [e], typeof t == "string" && (o = i, i = s, s = t, t = void 0);
  const r = i || xo;
  let l;
  for (const a of e) {
    if (!a)
      continue;
    const u = a[r];
    if (!u)
      continue;
    const c = o && a === qt ? `${o}.${n}` : n;
    if (l = ka(u, c), l !== void 0)
      break;
  }
  return l === void 0 ? s : t ? pt(l, ...Array.isArray(t) ? t : [t]) : l;
}
function hl(e, n, t, s) {
  return ne(void 0, e, n, t, s);
}
ne.addLang = al;
ne.getLang = hl;
ne.getCode = Ra;
ne.setCode = Ta;
al({
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
const Bt = document, Ss = window, ul = Bt.documentElement, xe = Bt.createElement.bind(Bt), fl = xe("div"), Fi = xe("table"), Aa = xe("tbody"), nr = xe("tr"), { isArray: Ai, prototype: dl } = Array, { concat: La, filter: Eo, indexOf: pl, map: ml, push: Na, slice: gl, some: So, splice: Ma } = dl, Oa = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Pa = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Da = /<.+>/, Ia = /^\w+$/;
function Co(e, n) {
  const t = Ha(n);
  return !e || !t && !nn(n) && !q(n) ? [] : !t && Pa.test(e) ? n.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !t && Ia.test(e) ? n.getElementsByTagName(e) : n.querySelectorAll(e);
}
class Li {
  constructor(n, t) {
    if (!n)
      return;
    if (oo(n))
      return n;
    let s = n;
    if (nt(n)) {
      const i = (oo(t) ? t[0] : t) || Bt;
      if (s = Oa.test(n) && "getElementById" in i ? i.getElementById(n.slice(1).replace(/\\/g, "")) : Da.test(n) ? wl(n) : Co(n, i), !s)
        return;
    } else if (Ee(n))
      return this.ready(n);
    (s.nodeType || s === Ss) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(n, t) {
    return new Li(n, t);
  }
}
const S = Li.prototype, k = S.init;
k.fn = k.prototype = S;
S.length = 0;
S.splice = Ma;
typeof Symbol == "function" && (S[Symbol.iterator] = dl[Symbol.iterator]);
function oo(e) {
  return e instanceof Li;
}
function en(e) {
  return !!e && e === e.window;
}
function nn(e) {
  return !!e && e.nodeType === 9;
}
function Ha(e) {
  return !!e && e.nodeType === 11;
}
function q(e) {
  return !!e && e.nodeType === 1;
}
function Wa(e) {
  return !!e && e.nodeType === 3;
}
function ja(e) {
  return typeof e == "boolean";
}
function Ee(e) {
  return typeof e == "function";
}
function nt(e) {
  return typeof e == "string";
}
function rt(e) {
  return e === void 0;
}
function Cn(e) {
  return e === null;
}
function yl(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function $o(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return n === null || n === Object.prototype;
}
k.isWindow = en;
k.isFunction = Ee;
k.isArray = Ai;
k.isNumeric = yl;
k.isPlainObject = $o;
function Y(e, n, t) {
  if (t) {
    let s = e.length;
    for (; s--; )
      if (n.call(e[s], s, e[s]) === !1)
        return e;
  } else if ($o(e)) {
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
k.each = Y;
S.each = function(e) {
  return Y(this, e);
};
S.empty = function() {
  return this.each((e, n) => {
    for (; n.firstChild; )
      n.removeChild(n.firstChild);
  });
};
function Cs(...e) {
  const n = ja(e[0]) ? e.shift() : !1, t = e.shift(), s = e.length;
  if (!t)
    return {};
  if (!s)
    return Cs(n, k, t);
  for (let i = 0; i < s; i++) {
    const o = e[i];
    for (const r in o)
      n && (Ai(o[r]) || $o(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), Cs(n, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
k.extend = Cs;
S.extend = function(e) {
  return Cs(S, e);
};
const Ba = /\S+/g;
function Ni(e) {
  return nt(e) ? e.match(Ba) || [] : [];
}
S.toggleClass = function(e, n) {
  const t = Ni(e), s = !rt(n);
  return this.each((i, o) => {
    q(o) && Y(t, (r, l) => {
      s ? n ? o.classList.add(l) : o.classList.remove(l) : o.classList.toggle(l);
    });
  });
};
S.addClass = function(e) {
  return this.toggleClass(e, !0);
};
S.removeAttr = function(e) {
  const n = Ni(e);
  return this.each((t, s) => {
    q(s) && Y(n, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function za(e, n) {
  if (e) {
    if (nt(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !q(this[0]))
          return;
        const t = this[0].getAttribute(e);
        return Cn(t) ? void 0 : t;
      }
      return rt(n) ? this : Cn(n) ? this.removeAttr(e) : this.each((t, s) => {
        q(s) && s.setAttribute(e, n);
      });
    }
    for (const t in e)
      this.attr(t, e[t]);
    return this;
  }
}
S.attr = za;
S.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
S.hasClass = function(e) {
  return !!e && So.call(this, (n) => q(n) && n.classList.contains(e));
};
S.get = function(e) {
  return rt(e) ? gl.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
S.eq = function(e) {
  return k(this.get(e));
};
S.first = function() {
  return this.eq(0);
};
S.last = function() {
  return this.eq(-1);
};
function Fa(e) {
  return rt(e) ? this.get().map((n) => q(n) || Wa(n) ? n.textContent : "").join("") : this.each((n, t) => {
    q(t) && (t.textContent = e);
  });
}
S.text = Fa;
function zt(e, n, t) {
  if (!q(e))
    return;
  const s = Ss.getComputedStyle(e, null);
  return t ? s.getPropertyValue(n) || void 0 : s[n] || e.style[n];
}
function $t(e, n) {
  return parseInt(zt(e, n), 10) || 0;
}
function sr(e, n) {
  return $t(e, `border${n ? "Left" : "Top"}Width`) + $t(e, `padding${n ? "Left" : "Top"}`) + $t(e, `padding${n ? "Right" : "Bottom"}`) + $t(e, `border${n ? "Right" : "Bottom"}Width`);
}
const Ui = {};
function Ua(e) {
  if (Ui[e])
    return Ui[e];
  const n = xe(e);
  Bt.body.insertBefore(n, null);
  const t = zt(n, "display");
  return Bt.body.removeChild(n), Ui[e] = t !== "none" ? t : "block";
}
function ir(e) {
  return zt(e, "display") === "none";
}
function _l(e, n) {
  const t = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!t && !!n && t.call(e, n);
}
function Mi(e) {
  return nt(e) ? (n, t) => _l(t, e) : Ee(e) ? e : oo(e) ? (n, t) => e.is(t) : e ? (n, t) => t === e : () => !1;
}
S.filter = function(e) {
  const n = Mi(e);
  return k(Eo.call(this, (t, s) => n.call(t, s, t)));
};
function oe(e, n) {
  return n ? e.filter(n) : e;
}
S.detach = function(e) {
  return oe(this, e).each((n, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const Va = /^\s*<(\w+)[^>]*>/, qa = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, or = {
  "*": fl,
  tr: Aa,
  td: nr,
  th: nr,
  thead: Fi,
  tbody: Fi,
  tfoot: Fi
};
function wl(e) {
  if (!nt(e))
    return [];
  if (qa.test(e))
    return [xe(RegExp.$1)];
  const n = Va.test(e) && RegExp.$1, t = or[n] || or["*"];
  return t.innerHTML = e, k(t.childNodes).detach().get();
}
k.parseHTML = wl;
S.has = function(e) {
  const n = nt(e) ? (t, s) => Co(e, s).length : (t, s) => s.contains(e);
  return this.filter(n);
};
S.not = function(e) {
  const n = Mi(e);
  return this.filter((t, s) => (!nt(e) || q(s)) && !n.call(s, t, s));
};
function Vt(e, n, t, s) {
  const i = [], o = Ee(n), r = s && Mi(s);
  for (let l = 0, a = e.length; l < a; l++)
    if (o) {
      const u = n(e[l]);
      u.length && Na.apply(i, u);
    } else {
      let u = e[l][n];
      for (; u != null && !(s && r(-1, u)); )
        i.push(u), u = t ? u[n] : null;
    }
  return i;
}
function bl(e) {
  return e.multiple && e.options ? Vt(Eo.call(e.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : e.value || "";
}
function Ga(e) {
  return arguments.length ? this.each((n, t) => {
    const s = t.multiple && t.options;
    if (s || Rl.test(t.type)) {
      const i = Ai(e) ? ml.call(e, String) : Cn(e) ? [] : [String(e)];
      s ? Y(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = rt(e) || Cn(e) ? "" : e;
  }) : this[0] && bl(this[0]);
}
S.val = Ga;
S.is = function(e) {
  const n = Mi(e);
  return So.call(this, (t, s) => n.call(t, s, t));
};
k.guid = 1;
function Lt(e) {
  return e.length > 1 ? Eo.call(e, (n, t, s) => pl.call(s, n) === t) : e;
}
k.unique = Lt;
S.add = function(e, n) {
  return k(Lt(this.get().concat(k(e, n).get())));
};
S.children = function(e) {
  return oe(k(Lt(Vt(this, (n) => n.children))), e);
};
S.parent = function(e) {
  return oe(k(Lt(Vt(this, "parentNode"))), e);
};
S.index = function(e) {
  const n = e ? k(e)[0] : this[0], t = e ? this : k(n).parent().children();
  return pl.call(t, n);
};
S.closest = function(e) {
  const n = this.filter(e);
  if (n.length)
    return n;
  const t = this.parent();
  return t.length ? t.closest(e) : n;
};
S.siblings = function(e) {
  return oe(k(Lt(Vt(this, (n) => k(n).parent().children().not(n)))), e);
};
S.find = function(e) {
  return k(Lt(Vt(this, (n) => Co(e, n))));
};
const Ya = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ka = /^$|^module$|\/(java|ecma)script/i, Xa = ["type", "src", "nonce", "noModule"];
function Ja(e, n) {
  const t = k(e);
  t.filter("script").add(t.find("script")).each((s, i) => {
    if (Ka.test(i.type) && ul.contains(i)) {
      const o = xe("script");
      o.text = i.textContent.replace(Ya, ""), Y(Xa, (r, l) => {
        i[l] && (o[l] = i[l]);
      }), n.head.insertBefore(o, null), n.head.removeChild(o);
    }
  });
}
function Za(e, n, t, s, i) {
  s ? e.insertBefore(n, t ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(n, e) : e.parentNode.insertBefore(n, t ? e : e.nextSibling), i && Ja(n, e.ownerDocument);
}
function re(e, n, t, s, i, o, r, l) {
  return Y(e, (a, u) => {
    Y(k(u), (c, h) => {
      Y(k(n), (d, f) => {
        const m = t ? h : f, g = t ? f : h, y = t ? c : d;
        Za(m, y ? g.cloneNode(!0) : g, s, i, !y);
      }, l);
    }, r);
  }, o), n;
}
S.after = function() {
  return re(arguments, this, !1, !1, !1, !0, !0);
};
S.append = function() {
  return re(arguments, this, !1, !1, !0);
};
function Qa(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (rt(e))
    return this;
  const n = /<script[\s>]/.test(e);
  return this.each((t, s) => {
    q(s) && (n ? k(s).empty().append(e) : s.innerHTML = e);
  });
}
S.html = Qa;
S.appendTo = function(e) {
  return re(arguments, this, !0, !1, !0);
};
S.wrapInner = function(e) {
  return this.each((n, t) => {
    const s = k(t), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
S.before = function() {
  return re(arguments, this, !1, !0);
};
S.wrapAll = function(e) {
  let n = k(e), t = n[0];
  for (; t.children.length; )
    t = t.firstElementChild;
  return this.first().before(n), this.appendTo(t);
};
S.wrap = function(e) {
  return this.each((n, t) => {
    const s = k(e)[0];
    k(t).wrapAll(n ? s.cloneNode(!0) : s);
  });
};
S.insertAfter = function(e) {
  return re(arguments, this, !0, !1, !1, !1, !1, !0);
};
S.insertBefore = function(e) {
  return re(arguments, this, !0, !0);
};
S.prepend = function() {
  return re(arguments, this, !1, !0, !0, !0, !0);
};
S.prependTo = function(e) {
  return re(arguments, this, !0, !0, !0, !1, !1, !0);
};
S.contents = function() {
  return k(Lt(Vt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
S.next = function(e, n, t) {
  return oe(k(Lt(Vt(this, "nextElementSibling", n, t))), e);
};
S.nextAll = function(e) {
  return this.next(e, !0);
};
S.nextUntil = function(e, n) {
  return this.next(n, !0, e);
};
S.parents = function(e, n) {
  return oe(k(Lt(Vt(this, "parentElement", !0, n))), e);
};
S.parentsUntil = function(e, n) {
  return this.parents(n, e);
};
S.prev = function(e, n, t) {
  return oe(k(Lt(Vt(this, "previousElementSibling", n, t))), e);
};
S.prevAll = function(e) {
  return this.prev(e, !0);
};
S.prevUntil = function(e, n) {
  return this.prev(n, !0, e);
};
S.map = function(e) {
  return k(La.apply([], ml.call(this, (n, t) => e.call(n, t, n))));
};
S.clone = function() {
  return this.map((e, n) => n.cloneNode(!0));
};
S.offsetParent = function() {
  return this.map((e, n) => {
    let t = n.offsetParent;
    for (; t && zt(t, "position") === "static"; )
      t = t.offsetParent;
    return t || ul;
  });
};
S.slice = function(e, n) {
  return k(gl.call(this, e, n));
};
const th = /-([a-z])/g;
function ko(e) {
  return e.replace(th, (n, t) => t.toUpperCase());
}
S.ready = function(e) {
  const n = () => setTimeout(e, 0, k);
  return Bt.readyState !== "loading" ? n() : Bt.addEventListener("DOMContentLoaded", n), this;
};
S.unwrap = function() {
  return this.parent().each((e, n) => {
    if (n.tagName === "BODY")
      return;
    const t = k(n);
    t.replaceWith(t.children());
  }), this;
};
S.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const n = e.getBoundingClientRect();
  return {
    top: n.top + Ss.pageYOffset,
    left: n.left + Ss.pageXOffset
  };
};
S.position = function() {
  const e = this[0];
  if (!e)
    return;
  const n = zt(e, "position") === "fixed", t = n ? e.getBoundingClientRect() : this.offset();
  if (!n) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && zt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && q(i)) {
      const o = k(i).offset();
      t.top -= o.top + $t(i, "borderTopWidth"), t.left -= o.left + $t(i, "borderLeftWidth");
    }
  }
  return {
    top: t.top - $t(e, "marginTop"),
    left: t.left - $t(e, "marginLeft")
  };
};
const vl = {
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
S.prop = function(e, n) {
  if (e) {
    if (nt(e))
      return e = vl[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((t, s) => {
        s[e] = n;
      });
    for (const t in e)
      this.prop(t, e[t]);
    return this;
  }
};
S.removeProp = function(e) {
  return this.each((n, t) => {
    delete t[vl[e] || e];
  });
};
const eh = /^--/;
function Ro(e) {
  return eh.test(e);
}
const Vi = {}, { style: nh } = fl, sh = ["webkit", "moz", "ms"];
function ih(e, n = Ro(e)) {
  if (n)
    return e;
  if (!Vi[e]) {
    const t = ko(e), s = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${sh.join(`${s} `)}${s}`.split(" ");
    Y(i, (o, r) => {
      if (r in nh)
        return Vi[e] = r, !1;
    });
  }
  return Vi[e];
}
const oh = {
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
function xl(e, n, t = Ro(e)) {
  return !t && !oh[e] && yl(n) ? `${n}px` : n;
}
function rh(e, n) {
  if (nt(e)) {
    const t = Ro(e);
    return e = ih(e, t), arguments.length < 2 ? this[0] && zt(this[0], e, t) : e ? (n = xl(e, n, t), this.each((s, i) => {
      q(i) && (t ? i.style.setProperty(e, n) : i.style[e] = n);
    })) : this;
  }
  for (const t in e)
    this.css(t, e[t]);
  return this;
}
S.css = rh;
function El(e, n) {
  try {
    return e(n);
  } catch {
    return n;
  }
}
const lh = /^\s+|\s+$/;
function rr(e, n) {
  const t = e.dataset[n] || e.dataset[ko(n)];
  return lh.test(t) ? t : El(JSON.parse, t);
}
function ch(e, n, t) {
  t = El(JSON.stringify, t), e.dataset[ko(n)] = t;
}
function ah(e, n) {
  if (!e) {
    if (!this[0])
      return;
    const t = {};
    for (const s in this[0].dataset)
      t[s] = rr(this[0], s);
    return t;
  }
  if (nt(e))
    return arguments.length < 2 ? this[0] && rr(this[0], e) : rt(n) ? this : this.each((t, s) => {
      ch(s, e, n);
    });
  for (const t in e)
    this.data(t, e[t]);
  return this;
}
S.data = ah;
function Sl(e, n) {
  const t = e.documentElement;
  return Math.max(e.body[`scroll${n}`], t[`scroll${n}`], e.body[`offset${n}`], t[`offset${n}`], t[`client${n}`]);
}
Y([!0, !1], (e, n) => {
  Y(["Width", "Height"], (t, s) => {
    const i = `${n ? "outer" : "inner"}${s}`;
    S[i] = function(o) {
      if (this[0])
        return en(this[0]) ? n ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : nn(this[0]) ? Sl(this[0], s) : this[0][`${n ? "offset" : "client"}${s}`] + (o && n ? $t(this[0], `margin${t ? "Top" : "Left"}`) + $t(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Y(["Width", "Height"], (e, n) => {
  const t = n.toLowerCase();
  S[t] = function(s) {
    if (!this[0])
      return rt(s) ? void 0 : this;
    if (!arguments.length)
      return en(this[0]) ? this[0].document.documentElement[`client${n}`] : nn(this[0]) ? Sl(this[0], n) : this[0].getBoundingClientRect()[t] - sr(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!q(r))
        return;
      const l = zt(r, "boxSizing");
      r.style[t] = xl(t, i + (l === "border-box" ? sr(r, !e) : 0));
    });
  };
});
const lr = "___cd";
S.toggle = function(e) {
  return this.each((n, t) => {
    if (!q(t))
      return;
    (rt(e) ? ir(t) : e) ? (t.style.display = t[lr] || "", ir(t) && (t.style.display = Ua(t.tagName))) : (t[lr] = zt(t, "display"), t.style.display = "none");
  });
};
S.hide = function() {
  return this.toggle(!1);
};
S.show = function() {
  return this.toggle(!0);
};
const cr = "___ce", To = ".", Ao = { focus: "focusin", blur: "focusout" }, Cl = { mouseenter: "mouseover", mouseleave: "mouseout" }, hh = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Lo(e) {
  return Cl[e] || Ao[e] || e;
}
function No(e) {
  const n = e.split(To);
  return [n[0], n.slice(1).sort()];
}
S.trigger = function(e, n) {
  if (nt(e)) {
    const [s, i] = No(e), o = Lo(s);
    if (!o)
      return this;
    const r = hh.test(o) ? "MouseEvents" : "HTMLEvents";
    e = Bt.createEvent(r), e.initEvent(o, !0, !0), e.namespace = i.join(To), e.___ot = s;
  }
  e.___td = n;
  const t = e.___ot in Ao;
  return this.each((s, i) => {
    t && Ee(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function $l(e) {
  return e[cr] = e[cr] || {};
}
function uh(e, n, t, s, i) {
  const o = $l(e);
  o[n] = o[n] || [], o[n].push([t, s, i]), e.addEventListener(n, i);
}
function kl(e, n) {
  return !n || !So.call(n, (t) => e.indexOf(t) < 0);
}
function $s(e, n, t, s, i) {
  const o = $l(e);
  if (n)
    o[n] && (o[n] = o[n].filter(([r, l, a]) => {
      if (i && a.guid !== i.guid || !kl(r, t) || s && s !== l)
        return !0;
      e.removeEventListener(n, a);
    }));
  else
    for (n in o)
      $s(e, n, t, s, i);
}
S.off = function(e, n, t) {
  if (rt(e))
    this.each((s, i) => {
      !q(i) && !nn(i) && !en(i) || $s(i);
    });
  else if (nt(e))
    Ee(n) && (t = n, n = ""), Y(Ni(e), (s, i) => {
      const [o, r] = No(i), l = Lo(o);
      this.each((a, u) => {
        !q(u) && !nn(u) && !en(u) || $s(u, l, r, n, t);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
S.remove = function(e) {
  return oe(this, e).detach().off(), this;
};
S.replaceWith = function(e) {
  return this.before(e).remove();
};
S.replaceAll = function(e) {
  return k(e).replaceWith(this), this;
};
function fh(e, n, t, s, i) {
  if (!nt(e)) {
    for (const o in e)
      this.on(o, n, t, e[o], i);
    return this;
  }
  return nt(n) || (rt(n) || Cn(n) ? n = "" : rt(t) ? (t = n, n = "") : (s = t, t = n, n = "")), Ee(s) || (s = t, t = void 0), s ? (Y(Ni(e), (o, r) => {
    const [l, a] = No(r), u = Lo(l), c = l in Cl, h = l in Ao;
    u && this.each((d, f) => {
      if (!q(f) && !nn(f) && !en(f))
        return;
      const m = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !kl(a, g.namespace.split(To)) || !n && (h && (g.target !== f || g.___ot === u) || c && g.relatedTarget && f.contains(g.relatedTarget)))
          return;
        let y = f;
        if (n) {
          let v = g.target;
          for (; !_l(v, n); )
            if (v === f || (v = v.parentNode, !v))
              return;
          y = v;
        }
        Object.defineProperty(g, "currentTarget", {
          configurable: !0,
          get() {
            return y;
          }
        }), Object.defineProperty(g, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(g, "data", {
          configurable: !0,
          get() {
            return t;
          }
        });
        const _ = s.call(y, g, g.___td);
        i && $s(f, u, a, n, m), _ === !1 && (g.preventDefault(), g.stopPropagation());
      };
      m.guid = s.guid = s.guid || k.guid++, uh(f, u, a, n, m);
    });
  }), this) : this;
}
S.on = fh;
function dh(e, n, t, s) {
  return this.on(e, n, t, s, !0);
}
S.one = dh;
const ph = /\r?\n/g;
function mh(e, n) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(n.replace(ph, `\r
`))}`;
}
const gh = /file|reset|submit|button|image/i, Rl = /radio|checkbox/i;
S.serialize = function() {
  let e = "";
  return this.each((n, t) => {
    Y(t.elements || [t], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || gh.test(i.type) || Rl.test(i.type) && !i.checked)
        return;
      const o = bl(i);
      if (!rt(o)) {
        const r = Ai(o) ? o : [o];
        Y(r, (l, a) => {
          e += mh(i.name, a);
        });
      }
    });
  }), e.slice(1);
};
window.$ = k;
const kf = k, qi = /* @__PURE__ */ new Map();
var bt, Ne, mt;
class Tt {
  constructor(n, t) {
    b(this, bt, void 0);
    b(this, Ne, void 0);
    b(this, mt, void 0);
    n = typeof n == "string" ? document.querySelector(n) : n, this.constructor.EVENTS && C(this, mt, new er(n, { customEventSuffix: `.${this.constructor.KEY}` })), C(this, bt, { ...this.constructor.DEFAULT }), this.setOptions({ ...n instanceof HTMLElement ? k(n).data() : null, ...t }), this.constructor.all.set(n, this), C(this, Ne, n), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return p(this, bt);
  }
  get element() {
    return p(this, Ne);
  }
  get events() {
    return p(this, mt);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(n) {
    return n && Object.assign(p(this, bt), n), p(this, bt);
  }
  render(n) {
    this.setOptions(n);
  }
  destroy() {
    this.constructor.all.delete(p(this, Ne)), p(this, mt) && (this.emit("destroyed", this), p(this, mt).offAll());
  }
  on(n, t, s) {
    var i;
    (i = p(this, mt)) == null || i.on(n, t, s);
  }
  once(n, t, s) {
    var i;
    (i = p(this, mt)) == null || i.once(n, t, s);
  }
  off(n, t, s) {
    var i;
    (i = p(this, mt)) == null || i.off(n, t, s);
  }
  emit(n, t, s) {
    var o;
    let i = er.createEvent(n, t);
    if (s !== !1) {
      const r = s || `on${n[0].toUpperCase()}${n.substring(1)}`, l = p(this, bt)[r];
      l && l(i) === !1 && (i.preventDefault(), i.stopPropagation());
    }
    return i = (o = p(this, mt)) == null ? void 0 : o.emit(n, t), i;
  }
  i18n(n, t, s) {
    return ne(p(this, bt).i18n, n, t, s, this.options.lang, this.constructor.NAME) ?? ne(p(this, bt).i18n, n, t, s, this.options.lang) ?? `{i18n:${n}}`;
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
    if (qi.has(n))
      return qi.get(n);
    const t = /* @__PURE__ */ new Map();
    return qi.set(n, t), t;
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
}
bt = new WeakMap(), Ne = new WeakMap(), mt = new WeakMap(), x(Tt, "EVENTS", !1), x(Tt, "DEFAULT", {});
class X extends Tt {
  constructor() {
    super(...arguments);
    x(this, "ref", ve());
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
    is(/* @__PURE__ */ w(s, { ref: this.ref, ...this.setOptions(t) }), this.element);
  }
}
x(X, "Component");
var Mo, B, Tl, Al, gn, ar, Ll = {}, Nl = [], yh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function Ml(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function on(e, n, t) {
  var s, i, o, r = {};
  for (o in n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Mo.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return ps(e, r, s, i, null);
}
function ps(e, n, t, s, i) {
  var o = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Tl };
  return i == null && B.vnode != null && B.vnode(o), o;
}
function _h() {
  return { current: null };
}
function Oo(e) {
  return e.children;
}
function yn(e, n) {
  this.props = e, this.context = n;
}
function $n(e, n) {
  if (n == null)
    return e.__ ? $n(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? $n(e) : null;
}
function Ol(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return Ol(e);
  }
}
function hr(e) {
  (!e.__d && (e.__d = !0) && gn.push(e) && !ks.__r++ || ar !== B.debounceRendering) && ((ar = B.debounceRendering) || setTimeout)(ks);
}
function ks() {
  for (var e; ks.__r = gn.length; )
    e = gn.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), gn = [], e.some(function(n) {
      var t, s, i, o, r, l;
      n.__d && (r = (o = (t = n).__v).__e, (l = t.__P) && (s = [], (i = Qt({}, o)).__v = o.__v + 1, Hl(l, o, i, t.__n, l.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? $n(o), o.__h), bh(s, o), o.__e != r && Ol(o)));
    });
}
function Pl(e, n, t, s, i, o, r, l, a, u) {
  var c, h, d, f, m, g, y, _ = s && s.__k || Nl, v = _.length;
  for (t.__k = [], c = 0; c < n.length; c++)
    if ((f = t.__k[c] = (f = n[c]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? ps(null, f, null, null, f) : Array.isArray(f) ? ps(Oo, { children: f }, null, null, null) : f.__b > 0 ? ps(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = t, f.__b = t.__b + 1, (d = _[c]) === null || d && f.key == d.key && f.type === d.type)
        _[c] = void 0;
      else
        for (h = 0; h < v; h++) {
          if ((d = _[h]) && f.key == d.key && f.type === d.type) {
            _[h] = void 0;
            break;
          }
          d = null;
        }
      Hl(e, f, d = d || Ll, i, o, r, l, a, u), m = f.__e, (h = f.ref) && d.ref != h && (y || (y = []), d.ref && y.push(d.ref, null, f), y.push(h, f.__c || m, f)), m != null ? (g == null && (g = m), typeof f.type == "function" && f.__k === d.__k ? f.__d = a = Dl(f, a, e) : a = Il(e, f, d, _, m, a), typeof t.type == "function" && (t.__d = a)) : a && d.__e == a && a.parentNode != e && (a = $n(d));
    }
  for (t.__e = g, c = v; c--; )
    _[c] != null && jl(_[c], _[c]);
  if (y)
    for (c = 0; c < y.length; c++)
      Wl(y[c], y[++c], y[++c]);
}
function Dl(e, n, t) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, n = typeof s.type == "function" ? Dl(s, n, t) : Il(t, s, s, i, s.__e, n));
  return n;
}
function Il(e, n, t, s, i, o) {
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
function wh(e, n, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || Rs(e, o, null, t[o], s);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || Rs(e, o, n[o], t[o], s);
}
function ur(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || yh.test(n) ? t : t + "px";
}
function Rs(e, n, t, s, i) {
  var o;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (n in s)
            t && n in t || ur(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || ur(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? s || e.addEventListener(n, o ? dr : fr, o) : e.removeEventListener(n, o ? dr : fr, o);
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
function fr(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function dr(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function Hl(e, n, t, s, i, o, r, l, a) {
  var u, c, h, d, f, m, g, y, _, v, E, $, A, N, L, M = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, l = n.__e = t.__e, n.__h = null, o = [l]), (u = B.__b) && u(n);
  try {
    t:
      if (typeof M == "function") {
        if (y = n.props, _ = (u = M.contextType) && s[u.__c], v = u ? _ ? _.props.value : u.__ : s, t.__c ? g = (c = n.__c = t.__c).__ = c.__E : ("prototype" in M && M.prototype.render ? n.__c = c = new M(y, v) : (n.__c = c = new yn(y, v), c.constructor = M, c.render = xh), _ && _.sub(c), c.props = y, c.state || (c.state = {}), c.context = v, c.__n = s, h = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), M.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Qt({}, c.__s)), Qt(c.__s, M.getDerivedStateFromProps(y, c.__s))), d = c.props, f = c.state, h)
          M.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && y !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, v), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, v) === !1 || n.__v === t.__v) {
            for (c.props = y, c.state = c.__s, n.__v !== t.__v && (c.__d = !1), c.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(I) {
              I && (I.__ = n);
            }), E = 0; E < c._sb.length; E++)
              c.__h.push(c._sb[E]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, v), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, m);
          });
        }
        if (c.context = v, c.props = y, c.__v = n, c.__P = e, $ = B.__r, A = 0, "prototype" in M && M.prototype.render) {
          for (c.state = c.__s, c.__d = !1, $ && $(n), u = c.render(c.props, c.state, c.context), N = 0; N < c._sb.length; N++)
            c.__h.push(c._sb[N]);
          c._sb = [];
        } else
          do
            c.__d = !1, $ && $(n), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++A < 25);
        c.state = c.__s, c.getChildContext != null && (s = Qt(Qt({}, s), c.getChildContext())), h || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(d, f)), L = u != null && u.type === Oo && u.key == null ? u.props.children : u, Pl(e, Array.isArray(L) ? L : [L], n, t, s, i, o, r, l, a), c.base = n.__e, n.__h = null, c.__h.length && r.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = vh(t.__e, n, t, s, i, o, r, a);
    (u = B.diffed) && u(n);
  } catch (I) {
    n.__v = null, (a || o != null) && (n.__e = l, n.__h = !!a, o[o.indexOf(l)] = null), B.__e(I, n, t);
  }
}
function bh(e, n) {
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
function vh(e, n, t, s, i, o, r, l) {
  var a, u, c, h = t.props, d = n.props, f = n.type, m = 0;
  if (f === "svg" && (i = !0), o != null) {
    for (; m < o.length; m++)
      if ((a = o[m]) && "setAttribute" in a == !!f && (f ? a.localName === f : a.nodeType === 3)) {
        e = a, o[m] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(d);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, d.is && d), o = null, l = !1;
  }
  if (f === null)
    h === d || l && e.data === d || (e.data = d);
  else {
    if (o = o && Mo.call(e.childNodes), u = (h = t.props || Ll).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (h = {}, m = 0; m < e.attributes.length; m++)
          h[e.attributes[m].name] = e.attributes[m].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (wh(e, d, h, i, l), c)
      n.__k = [];
    else if (m = n.props.children, Pl(e, Array.isArray(m) ? m : [m], n, t, s, i && f !== "foreignObject", o, r, o ? o[0] : t.__k && $n(t, 0), l), o != null)
      for (m = o.length; m--; )
        o[m] != null && Ml(o[m]);
    l || ("value" in d && (m = d.value) !== void 0 && (m !== e.value || f === "progress" && !m || f === "option" && m !== h.value) && Rs(e, "value", m, h.value, !1), "checked" in d && (m = d.checked) !== void 0 && m !== e.checked && Rs(e, "checked", m, h.checked, !1));
  }
  return e;
}
function Wl(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    B.__e(s, t);
  }
}
function jl(e, n, t) {
  var s, i;
  if (B.unmount && B.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Wl(s, null, n)), (s = e.__c) != null) {
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
      s[i] && jl(s[i], n, t || typeof e.type != "function");
  t || e.__e == null || Ml(e.__e), e.__ = e.__e = e.__d = void 0;
}
function xh(e, n, t) {
  return this.constructor(e, t);
}
Mo = Nl.slice, B = { __e: function(e, n, t, s) {
  for (var i, o, r; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Tl = 0, Al = function(e) {
  return e != null && e.constructor === void 0;
}, yn.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qt({}, this.state), typeof e == "function" && (e = e(Qt({}, t), this.props)), e && Qt(t, e), e != null && this.__v && (n && this._sb.push(n), hr(this));
}, yn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), hr(this));
}, yn.prototype.render = Oo, gn = [], ks.__r = 0;
var Eh = 0;
function ht(e, n, t, s, i) {
  var o, r, l = {};
  for (r in n)
    r == "ref" ? o = n[r] : l[r] = n[r];
  var a = { type: e, props: l, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Eh, __source: i, __self: s };
  if (typeof e == "function" && (o = e.defaultProps))
    for (r in o)
      l[r] === void 0 && (l[r] = o[r]);
  return B.vnode && B.vnode(a), a;
}
function Oi(...e) {
  const n = [], t = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? n[r][1] = !!o : (t.set(i, n.length), n.push([i, !!o]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Oi(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), n.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const O = (...e) => Oi(...e).reduce((n, [t, s]) => (s && n.push(t), n), []).join(" ");
function Sh({
  component: e = "div",
  className: n,
  children: t,
  style: s,
  attrs: i
}) {
  return on(e, {
    className: O(n),
    style: s,
    ...i
  }, t);
}
function Bl({
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
  onClick: d,
  ...f
}) {
  const m = [
    typeof l == "string" ? /* @__PURE__ */ ht("i", { class: `icon ${l}` }) : l,
    /* @__PURE__ */ ht("span", { className: "text", children: a }),
    typeof t == "function" ? t() : t,
    typeof c == "string" ? /* @__PURE__ */ ht("i", { class: `icon ${c}` }) : c
  ];
  return on(e, {
    className: O(n, { disabled: o, active: r }),
    title: h,
    [e === "a" ? "href" : "data-url"]: i,
    [e === "a" ? "target" : "data-target"]: u,
    onClick: d,
    ...f,
    ...s
  }, ...m);
}
function Ch({
  component: e = "div",
  className: n,
  text: t,
  attrs: s,
  children: i,
  style: o,
  onClick: r
}) {
  return on(e, {
    className: O(n),
    style: o,
    onClick: r,
    ...s
  }, t, typeof i == "function" ? i() : i);
}
function $h({
  component: e = "div",
  className: n,
  style: t,
  space: s,
  flex: i,
  attrs: o,
  onClick: r,
  children: l
}) {
  return on(e, {
    className: O(n),
    style: { width: s, height: s, flex: i, ...t },
    onClick: r,
    ...o
  }, l);
}
function kh(e) {
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
  } = e, h = [t], d = { ...s }, f = [], m = [];
  return i.forEach((g) => {
    const y = [];
    typeof g == "string" && l && l[g] && (g = l[g]), typeof g == "function" ? a ? y.push(...a.call(r, g, f, ...o)) : y.push(...g.call(r, f, ...o) ?? []) : y.push(g), y.forEach((_) => {
      _ != null && (typeof _ == "object" && !et(_) && ("html" in _ || "__html" in _ || "className" in _ || "style" in _ || "attrs" in _ || "children" in _) ? _.html ? f.push(
        /* @__PURE__ */ w("div", { className: O(_.className), style: _.style, dangerouslySetInnerHTML: { __html: _.html }, ..._.attrs ?? {} })
      ) : _.__html ? m.push(_.__html) : (_.style && Object.assign(d, _.style), _.className && h.push(_.className), _.children && f.push(_.children), _.attrs && Object.assign(c, _.attrs)) : f.push(_));
    });
  }), m.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: m } }), [{
    className: O(h),
    style: d,
    ...c
  }, f];
}
function ro({
  tag: e = "div",
  ...n
}) {
  const [t, s] = kh(n);
  return dt(e, t, ...s);
}
function Rh({ type: e, ...n }) {
  return /* @__PURE__ */ ht(ro, { ...n });
}
function zl({
  component: e = "div",
  className: n,
  children: t,
  style: s,
  attrs: i
}) {
  return on(e, {
    className: O(n),
    style: s,
    ...i
  }, t);
}
var Wt;
let Pi = (Wt = class extends yn {
  constructor() {
    super(...arguments);
    x(this, "ref", _h());
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
    return o && Object.assign(l, o[s.type || "item"]), (r || s.onClick) && (l.onClick = this.handleItemClick.bind(this, l, i, s.onClick)), l.className = O(l.className), l;
  }
  renderItem(t, s, i) {
    const o = this.getItemRenderProps(t, s, i), { itemRender: r } = t;
    if (r) {
      if (typeof r == "object") {
        const y = r[s.type || "item"];
        if (y)
          return /* @__PURE__ */ ht(y, { ...o });
      } else if (typeof r == "function") {
        const y = r.call(this, o, on);
        if (Al(y))
          return y;
        typeof y == "object" && Object.assign(o, y);
      }
    }
    const { type: l = "item", component: a, key: u = i, rootAttrs: c, rootClass: h, rootStyle: d, rootChildren: f, ...m } = o;
    if (l === "html")
      return /* @__PURE__ */ ht(
        "li",
        {
          className: O("action-menu-item", `${this.name}-html`, h, m.className),
          ...c,
          style: d || m.style,
          dangerouslySetInnerHTML: { __html: m.html }
        },
        u
      );
    const g = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[l] || Wt.ItemComponents[l] : a;
    return Object.assign(m, {
      type: l,
      component: typeof a == "string" ? a : void 0
    }), this.renderTypedItem(g, {
      className: O(h),
      children: f,
      style: d,
      key: u,
      ...c
    }, {
      ...m,
      type: l,
      component: typeof a == "string" ? a : void 0
    });
  }
  renderTypedItem(t, s, i) {
    const { children: o, className: r, key: l, ...a } = s, { activeClass: u = "", activeKey: c, activeIcon: h } = this.props, d = h && c === l ? /* @__PURE__ */ ht("i", { className: `checked icon icon-${h}` }) : null, f = c === l;
    return /* @__PURE__ */ ht(
      "li",
      {
        className: O("action-menu-item", `${this.name}-${i.type}`, r, { [u]: f }),
        ...a,
        children: [
          /* @__PURE__ */ ht(t, { ...i }),
          d,
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
      afterRender: d,
      beforeDestroy: f,
      activeClass: m,
      activeKey: g,
      ...y
    } = t, _ = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ ht(_, { class: O(this.name, r), style: i, ...y, ref: this.ref, children: [
      l && l.map(this.renderItem.bind(this, t)),
      a
    ] });
  }
}, x(Wt, "ItemComponents", {
  divider: Sh,
  item: Bl,
  heading: Ch,
  space: $h,
  custom: Rh,
  basic: zl
}), x(Wt, "ROOT_TAG", "menu"), x(Wt, "NAME", "action-menu"), Wt);
class pr extends X {
}
x(pr, "NAME", "actionmenu"), x(pr, "Component", Pi);
function mr({
  ...e
}) {
  return /* @__PURE__ */ ht(Bl, { ...e });
}
var Ji, Ln, vt, Me;
let Fl = (Ji = class extends Pi {
  constructor(t) {
    super(t);
    b(this, Ln, /* @__PURE__ */ new Set());
    b(this, vt, void 0);
    b(this, Me, (t, s, i) => {
      this.toggleNestedMenu(t, s), i.preventDefault();
    });
    C(this, vt, t.nestedShow === void 0), p(this, vt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
    const i = this.constructor, { name: o, controlledMenu: r, nestedShow: l, beforeDestroy: a, beforeRender: u, itemRender: c, activeClass: h, activeKey: d, onClickItem: f, afterRender: m, commonItemProps: g, activeIcon: y } = this.props;
    return /* @__PURE__ */ ht(
      i,
      {
        items: s,
        name: o,
        nestedShow: p(this, vt) ? this.state.nestedShow : l,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: r || this,
        commonItemProps: g,
        onClickItem: f,
        afterRender: m,
        beforeRender: u,
        beforeDestroy: a,
        itemRender: c,
        activeClass: h,
        activeKey: d,
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
    p(this, Ln).add(r);
    const l = this.isNestedMenuShow(r);
    if (l && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(s)
    ], o.component = mr), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: p(this, Me).bind(this, r, !0),
        onMouseLeave: p(this, Me).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: u } = o;
      o.onClick = (c) => {
        p(this, Me).call(this, r, void 0, c), u == null || u(c);
      };
    }
    const a = this.renderToggleIcon(l, o);
    return a && (o.children = [o.children, a]), o.rootClass = [o.rootClass, "has-nested-menu", l ? "show" : ""], o;
  }
  isNestedMenuShow(t) {
    const s = p(this, vt) ? this.state.nestedShow : this.props.nestedShow;
    return s && typeof s == "object" ? s[t] : !!s;
  }
  toggleNestedMenu(t, s) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(t, s);
    if (!p(this, vt))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...p(this, Ln).values()].reduce((r, l) => (r[l] = !0, r), {}) : o = {}), s === void 0)
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
    p(this, vt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    p(this, vt) && this.setState({ nestedShow: !1 });
  }
}, Ln = new WeakMap(), vt = new WeakMap(), Me = new WeakMap(), x(Ji, "ItemComponents", {
  item: mr
}), Ji);
class gr extends X {
}
x(gr, "NAME", "actionmenunested"), x(gr, "Component", Fl);
let At = class extends z {
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
      loadingIcon: d,
      loadingText: f,
      icon: m,
      text: g,
      trailingIcon: y,
      caret: _,
      square: v,
      hint: E,
      ...$
    } = this.props, A = n || (l ? "a" : "button"), N = g == null || typeof g == "string" && !g.length || h && !f, L = _ && N && !m && !y && !r && !h;
    return dt(
      A,
      {
        className: O("btn", t, o, {
          "btn-caret": L,
          disabled: u || h,
          active: c,
          loading: h,
          square: v === void 0 ? !L && !r && N : v
        }, i ? `size-${i}` : ""),
        title: E,
        [A === "a" ? "href" : "data-url"]: l,
        [A === "a" ? "target" : "data-target"]: a,
        type: A === "button" ? s : void 0,
        ...$
      },
      h ? /* @__PURE__ */ w("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof m == "string" ? /* @__PURE__ */ w("i", { class: `icon ${m}` }) : m,
      N ? null : /* @__PURE__ */ w("span", { className: "text", children: h ? f : g }),
      h ? null : r,
      h ? null : typeof y == "string" ? /* @__PURE__ */ w("i", { class: `icon ${y}` }) : y,
      h ? null : _ ? /* @__PURE__ */ w("span", { className: typeof _ == "string" ? `caret-${_}` : "caret" }) : null
    );
  }
};
class yr extends X {
}
x(yr, "NAME", "button"), x(yr, "Component", At);
var Zi;
let Po = (Zi = class extends Fl {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const n = super.beforeRender();
    let { hasIcons: t } = n;
    return t === void 0 && (t = n.items.some((s) => s.icon)), n.className = O(n.className, this.menuName, {
      "has-icons": t,
      "has-nested-items": n.items.some((s) => this.isNestedItem(s)),
      "menu-popup": n.popup
    }), n;
  }
  renderToggleIcon(n) {
    return /* @__PURE__ */ w("span", { class: `${this.name}-toggle-icon caret-${n ? "down" : "right"}` });
  }
}, x(Zi, "NAME", "menu"), Zi);
class _r extends X {
}
x(_r, "NAME", "menu"), x(_r, "Component", Po);
let os = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
function Th({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ w(At, { type: t, ...s });
}
function Ah(e) {
  return e.button === 2;
}
function Do(e) {
  return e.split("-")[1];
}
function Ul(e) {
  return e === "y" ? "height" : "width";
}
function _n(e) {
  return e.split("-")[0];
}
function Vl(e) {
  return ["top", "bottom"].includes(_n(e)) ? "x" : "y";
}
function wr(e, n, t) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, l = Vl(n), a = Ul(l), u = s[a] / 2 - i[a] / 2, c = l === "x";
  let h;
  switch (_n(n)) {
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
  switch (Do(n)) {
    case "start":
      h[l] -= u * (t && c ? -1 : 1);
      break;
    case "end":
      h[l] += u * (t && c ? -1 : 1);
  }
  return h;
}
const Lh = async (e, n, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let u = await r.getElementRects({ reference: e, floating: n, strategy: i }), { x: c, y: h } = wr(u, s, a), d = s, f = {}, m = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: y, fn: _ } = l[g], { x: v, y: E, data: $, reset: A } = await _({ x: c, y: h, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: u, platform: r, elements: { reference: e, floating: n } });
    c = v ?? c, h = E ?? h, f = { ...f, [y]: { ...f[y], ...$ } }, A && m <= 50 && (m++, typeof A == "object" && (A.placement && (d = A.placement), A.rects && (u = A.rects === !0 ? await r.getElementRects({ reference: e, floating: n, strategy: i }) : A.rects), { x: c, y: h } = wr(u, d, a)), g = -1);
  }
  return { x: c, y: h, placement: d, strategy: i, middlewareData: f };
};
function Nh(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Ts(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Mh(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: s, y: i, platform: o, rects: r, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: h = "floating", altBoundary: d = !1, padding: f = 0 } = n, m = Nh(f), g = l[d ? h === "floating" ? "reference" : "floating" : h], y = Ts(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(g))) == null || t ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: c, strategy: a })), _ = h === "floating" ? { ...r.floating, x: s, y: i } : r.reference, v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), E = await (o.isElement == null ? void 0 : o.isElement(v)) && await (o.getScale == null ? void 0 : o.getScale(v)) || { x: 1, y: 1 }, $ = Ts(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: _, offsetParent: v, strategy: a }) : _);
  return { top: (y.top - $.top + m.top) / E.y, bottom: ($.bottom - y.bottom + m.bottom) / E.y, left: (y.left - $.left + m.left) / E.x, right: ($.right - y.right + m.right) / E.x };
}
const Oh = ["top", "right", "bottom", "left"];
Oh.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const Ph = { left: "right", right: "left", bottom: "top", top: "bottom" };
function As(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Ph[n]);
}
function Dh(e, n, t) {
  t === void 0 && (t = !1);
  const s = Do(e), i = Vl(e), o = Ul(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = As(r)), { main: r, cross: As(r) };
}
const Ih = { start: "end", end: "start" };
function Gi(e) {
  return e.replace(/start|end/g, (n) => Ih[n]);
}
const ql = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: l, elements: a } = n, { mainAxis: u = !0, crossAxis: c = !0, fallbackPlacements: h, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: m = !0, ...g } = e, y = _n(s), _ = _n(r) === r, v = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), E = h || (_ || !m ? [As(r)] : function(R) {
      const W = As(R);
      return [Gi(R), W, Gi(W)];
    }(r));
    h || f === "none" || E.push(...function(R, W, K, st) {
      const U = Do(R);
      let D = function(V, wt, le) {
        const ce = ["left", "right"], ae = ["right", "left"], Nt = ["top", "bottom"], Ce = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return le ? wt ? ae : ce : wt ? ce : ae;
          case "left":
          case "right":
            return wt ? Nt : Ce;
          default:
            return [];
        }
      }(_n(R), K === "start", st);
      return U && (D = D.map((V) => V + "-" + U), W && (D = D.concat(D.map(Gi)))), D;
    }(r, m, f, v));
    const $ = [r, ...E], A = await Mh(n, g), N = [];
    let L = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (u && N.push(A[y]), c) {
      const { main: R, cross: W } = Dh(s, o, v);
      N.push(A[R], A[W]);
    }
    if (L = [...L, { placement: s, overflows: N }], !N.every((R) => R <= 0)) {
      var M;
      const R = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1, W = $[R];
      if (W)
        return { data: { index: R, overflows: L }, reset: { placement: W } };
      let K = "bottom";
      switch (d) {
        case "bestFit": {
          var I;
          const st = (I = L.map((U) => [U, U.overflows.filter((D) => D > 0).reduce((D, V) => D + V, 0)]).sort((U, D) => U[1] - D[1])[0]) == null ? void 0 : I[0].placement;
          st && (K = st);
          break;
        }
        case "initialPlacement":
          K = r;
      }
      if (s !== K)
        return { reset: { placement: K } };
    }
    return {};
  } };
};
function ut(e) {
  var n;
  return ((n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function kt(e) {
  return ut(e).getComputedStyle(e);
}
function se(e) {
  return Yl(e) ? (e.nodeName || "").toLowerCase() : "";
}
let as;
function Gl() {
  if (as)
    return as;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (as = e.brands.map((n) => n.brand + "/" + n.version).join(" "), as) : navigator.userAgent;
}
function Ft(e) {
  return e instanceof ut(e).HTMLElement;
}
function yt(e) {
  return e instanceof ut(e).Element;
}
function Yl(e) {
  return e instanceof ut(e).Node;
}
function br(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ut(e).ShadowRoot || e instanceof ShadowRoot;
}
function Di(e) {
  const { overflow: n, overflowX: t, overflowY: s, display: i } = kt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + s + t) && !["inline", "contents"].includes(i);
}
function Hh(e) {
  return ["table", "td", "th"].includes(se(e));
}
function lo(e) {
  const n = /firefox/i.test(Gl()), t = kt(e), s = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!s && s !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function Kl() {
  return !/^((?!chrome|android).)*safari/i.test(Gl());
}
function Io(e) {
  return ["html", "body", "#document"].includes(se(e));
}
const vr = Math.min, wn = Math.max, Ls = Math.round;
function Xl(e) {
  const n = kt(e);
  let t = parseFloat(n.width), s = parseFloat(n.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = Ls(t) !== i || Ls(s) !== o;
  return r && (t = i, s = o), { width: t, height: s, fallback: r };
}
function Jl(e) {
  return yt(e) ? e : e.contextElement;
}
const Zl = { x: 1, y: 1 };
function Te(e) {
  const n = Jl(e);
  if (!Ft(n))
    return Zl;
  const t = n.getBoundingClientRect(), { width: s, height: i, fallback: o } = Xl(n);
  let r = (o ? Ls(t.width) : t.width) / s, l = (o ? Ls(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
function we(e, n, t, s) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), l = Jl(e);
  let a = Zl;
  n && (s ? yt(s) && (a = Te(s)) : a = Te(e));
  const u = l ? ut(l) : window, c = !Kl() && t;
  let h = (r.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, d = (r.top + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / a.y, f = r.width / a.x, m = r.height / a.y;
  if (l) {
    const g = ut(l), y = s && yt(s) ? ut(s) : s;
    let _ = g.frameElement;
    for (; _ && s && y !== g; ) {
      const v = Te(_), E = _.getBoundingClientRect(), $ = getComputedStyle(_);
      E.x += (_.clientLeft + parseFloat($.paddingLeft)) * v.x, E.y += (_.clientTop + parseFloat($.paddingTop)) * v.y, h *= v.x, d *= v.y, f *= v.x, m *= v.y, h += E.x, d += E.y, _ = ut(_).frameElement;
    }
  }
  return { width: f, height: m, top: d, right: h + f, bottom: d + m, left: h, x: h, y: d };
}
function te(e) {
  return ((Yl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ii(e) {
  return yt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ql(e) {
  return we(te(e)).left + Ii(e).scrollLeft;
}
function Wh(e, n, t) {
  const s = Ft(n), i = te(n), o = we(e, !0, t === "fixed", n);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && t !== "fixed")
    if ((se(n) !== "body" || Di(i)) && (r = Ii(n)), Ft(n)) {
      const a = we(n, !0);
      l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
    } else
      i && (l.x = Ql(i));
  return { x: o.left + r.scrollLeft - l.x, y: o.top + r.scrollTop - l.y, width: o.width, height: o.height };
}
function kn(e) {
  if (se(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || (br(e) ? e.host : null) || te(e);
  return br(n) ? n.host : n;
}
function xr(e) {
  return Ft(e) && kt(e).position !== "fixed" ? e.offsetParent : null;
}
function Er(e) {
  const n = ut(e);
  let t = xr(e);
  for (; t && Hh(t) && kt(t).position === "static"; )
    t = xr(t);
  return t && (se(t) === "html" || se(t) === "body" && kt(t).position === "static" && !lo(t)) ? n : t || function(s) {
    let i = kn(s);
    for (; Ft(i) && !Io(i); ) {
      if (lo(i))
        return i;
      i = kn(i);
    }
    return null;
  }(e) || n;
}
function tc(e) {
  const n = kn(e);
  return Io(n) ? e.ownerDocument.body : Ft(n) && Di(n) ? n : tc(n);
}
function bn(e, n) {
  var t;
  n === void 0 && (n = []);
  const s = tc(e), i = s === ((t = e.ownerDocument) == null ? void 0 : t.body), o = ut(s);
  return i ? n.concat(o, o.visualViewport || [], Di(s) ? s : []) : n.concat(s, bn(s));
}
function Sr(e, n, t) {
  return n === "viewport" ? Ts(function(s, i) {
    const o = ut(s), r = te(s), l = o.visualViewport;
    let a = r.clientWidth, u = r.clientHeight, c = 0, h = 0;
    if (l) {
      a = l.width, u = l.height;
      const d = Kl();
      (d || !d && i === "fixed") && (c = l.offsetLeft, h = l.offsetTop);
    }
    return { width: a, height: u, x: c, y: h };
  }(e, t)) : yt(n) ? function(s, i) {
    const o = we(s, !0, i === "fixed"), r = o.top + s.clientTop, l = o.left + s.clientLeft, a = Ft(s) ? Te(s) : { x: 1, y: 1 }, u = s.clientWidth * a.x, c = s.clientHeight * a.y, h = l * a.x, d = r * a.y;
    return { top: d, left: h, right: h + u, bottom: d + c, x: h, y: d, width: u, height: c };
  }(n, t) : Ts(function(s) {
    var i;
    const o = te(s), r = Ii(s), l = (i = s.ownerDocument) == null ? void 0 : i.body, a = wn(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), u = wn(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0);
    let c = -r.scrollLeft + Ql(s);
    const h = -r.scrollTop;
    return kt(l || o).direction === "rtl" && (c += wn(o.clientWidth, l ? l.clientWidth : 0) - a), { width: a, height: u, x: c, y: h };
  }(te(e)));
}
const jh = { getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: s, strategy: i } = e;
  const o = t === "clippingAncestors" ? function(u, c) {
    const h = c.get(u);
    if (h)
      return h;
    let d = bn(u).filter((y) => yt(y) && se(y) !== "body"), f = null;
    const m = kt(u).position === "fixed";
    let g = m ? kn(u) : u;
    for (; yt(g) && !Io(g); ) {
      const y = kt(g), _ = lo(g);
      (m ? _ || f : _ || y.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = y : d = d.filter((v) => v !== g), g = kn(g);
    }
    return c.set(u, d), d;
  }(n, this._c) : [].concat(t), r = [...o, s], l = r[0], a = r.reduce((u, c) => {
    const h = Sr(n, c, i);
    return u.top = wn(h.top, u.top), u.right = vr(h.right, u.right), u.bottom = vr(h.bottom, u.bottom), u.left = wn(h.left, u.left), u;
  }, Sr(n, l, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: s } = e;
  const i = Ft(t), o = te(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((se(t) !== "body" || Di(o)) && (r = Ii(t)), Ft(t))) {
    const u = we(t);
    l = Te(t), a.x = u.x + t.clientLeft, a.y = u.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - r.scrollLeft * l.x + a.x, y: n.y * l.y - r.scrollTop * l.y + a.y };
}, isElement: yt, getDimensions: function(e) {
  return Xl(e);
}, getOffsetParent: Er, getDocumentElement: te, getScale: Te, async getElementRects(e) {
  let { reference: n, floating: t, strategy: s } = e;
  const i = this.getOffsetParent || Er, o = this.getDimensions;
  return { reference: Wh(n, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => kt(e).direction === "rtl" };
function Bh(e, n, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: l = !1 } = s, a = i && !l, u = a || o ? [...yt(e) ? bn(e) : e.contextElement ? bn(e.contextElement) : [], ...bn(n)] : [];
  u.forEach((f) => {
    a && f.addEventListener("scroll", t, { passive: !0 }), o && f.addEventListener("resize", t);
  });
  let c, h = null;
  if (r) {
    let f = !0;
    h = new ResizeObserver(() => {
      f || t(), f = !1;
    }), yt(e) && !l && h.observe(e), yt(e) || !e.contextElement || l || h.observe(e.contextElement), h.observe(n);
  }
  let d = l ? we(e) : null;
  return l && function f() {
    const m = we(e);
    !d || m.x === d.x && m.y === d.y && m.width === d.width && m.height === d.height || t(), d = m, c = requestAnimationFrame(f);
  }(), t(), () => {
    var f;
    u.forEach((m) => {
      a && m.removeEventListener("scroll", t), o && m.removeEventListener("resize", t);
    }), (f = h) == null || f.disconnect(), h = null, l && cancelAnimationFrame(c);
  };
}
const ec = (e, n, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: jh, ...t }, o = { ...i.platform, _c: s };
  return Lh(e, n, { ...i, platform: o });
};
let zh = class extends Po {
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
      middleware: [ql()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    this.ref.current && ec(this._getPopperElement(), this.ref.current, n).then(({ x: t, y: s }) => {
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
    return n.className = O(n.className, "menu-popup"), n;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ w("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var Gt, Oe, Nn, Mn, Ws, nc, js, sc;
class ot extends Tt {
  constructor() {
    super(...arguments);
    b(this, Ws);
    b(this, js);
    b(this, Gt, void 0);
    b(this, Oe, void 0);
    b(this, Nn, void 0);
    x(this, "arrowEl");
    b(this, Mn, void 0);
  }
  get isShown() {
    var t;
    return (t = p(this, Gt)) == null ? void 0 : t.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return p(this, Gt) || this._ensureMenu();
  }
  get trigger() {
    return p(this, Nn) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "contextmenu");
  }
  show(t) {
    return C(this, Nn, t), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var s, i;
    return (s = p(this, Mn)) == null || s.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((i = p(this, Gt)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), (t = p(this, Gt)) == null || t.remove();
  }
  _ensureMenu() {
    var o;
    const { element: t } = this, s = this.constructor.MENU_CLASS;
    let i;
    if (this.isDynamic)
      i = document.createElement("div"), i.classList.add(s), document.body.appendChild(i);
    else if (t) {
      const r = t.getAttribute("href") ?? t.dataset.target;
      if ((r == null ? void 0 : r[0]) === "#" && (i = document.querySelector(r)), !i) {
        const l = t.nextElementSibling;
        l != null && l.classList.contains(s) ? i = l : i = (o = t.parentNode) == null ? void 0 : o.querySelector(`.${s}`);
      }
      i && i.classList.add("menu-popup");
    }
    if (!i)
      throw new Error("ContextMenu: Cannot find menu element");
    return i.style.width = "max-content", i.style.position = this.options.strategy, i.style.top = "0", i.style.left = "0", C(this, Gt, i), i;
  }
  _getPopperOptions() {
    var o;
    const { placement: t, strategy: s } = this.options, i = {
      middleware: [],
      placement: t,
      strategy: s
    };
    return this.options.flip && ((o = i.middleware) == null || o.push(ql())), i;
  }
  _createPopper() {
    const t = this._getPopperOptions(), s = this._getPopperElement();
    C(this, Mn, Bh(s, this.menu, () => {
      ec(s, this.menu, t).then(({ x: i, y: o, middlewareData: r, placement: l }) => {
        Object.assign(this.menu.style, {
          left: `${i}px`,
          top: `${o}px`
        });
        const a = l.split("-")[0], u = T(this, Ws, nc).call(this, a);
        if (r.arrow && this.arrowEl) {
          const { x: c, y: h } = r.arrow;
          Object.assign(this.arrowEl.style, {
            left: c != null ? `${c}px` : "",
            top: h != null ? `${h}px` : "",
            [u]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...T(this, js, sc).call(this, a)
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
    return !t || this.emit("updateMenu", { menu: t, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (is(dt(zh, t), this.menu), !0);
  }
  _getPopperElement() {
    return p(this, Oe) || C(this, Oe, {
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
    }), p(this, Oe);
  }
  static clear(t) {
    var a, u;
    t instanceof Event && (t = { event: t });
    const { event: s, exclude: i, ignoreSelector: o = ".not-hide-menu" } = t || {};
    if (s && o && ((u = (a = s.target).closest) != null && u.call(a, o)) || s && Ah(s))
      return;
    const r = this.getAll().entries(), l = new Set(i || []);
    for (const [c, h] of r)
      l.has(c) || h.hide();
  }
  static show(t) {
    const { event: s, ...i } = t, o = this.ensure(document.body);
    return Object.keys(i).length && o.setOptions(i), o.show(s), s instanceof Event && s.stopPropagation(), o;
  }
  static hide() {
    const t = this.get(document.body);
    return t == null || t.hide(), t;
  }
}
Gt = new WeakMap(), Oe = new WeakMap(), Nn = new WeakMap(), Mn = new WeakMap(), Ws = new WeakSet(), nc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, js = new WeakSet(), sc = function(t) {
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
}, x(ot, "NAME", "contextmenu"), x(ot, "EVENTS", !0), x(ot, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), x(ot, "MENU_CLASS", "contextmenu"), x(ot, "CLASS_SHOW", "show"), x(ot, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  var s;
  const n = e.target;
  if ((s = n.closest) != null && s.call(n, `.${ot.MENU_CLASS}`))
    return;
  const t = n.closest(ot.MENU_SELECTOR);
  t && (ot.ensure(t).show(e), e.preventDefault());
});
document.addEventListener("click", ot.clear.bind(ot));
function ic(e) {
  return e.split("-")[1];
}
function Fh(e) {
  return e === "y" ? "height" : "width";
}
function oc(e) {
  return e.split("-")[0];
}
function rc(e) {
  return ["top", "bottom"].includes(oc(e)) ? "x" : "y";
}
function Uh(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
const Vh = Math.min, qh = Math.max;
function Gh(e, n, t) {
  return qh(e, Vh(n, t));
}
const Yh = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { element: t, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: l, platform: a } = n;
  if (t == null)
    return {};
  const u = Uh(s), c = { x: i, y: o }, h = rc(r), d = Fh(h), f = await a.getDimensions(t), m = h === "y" ? "top" : "left", g = h === "y" ? "bottom" : "right", y = l.reference[d] + l.reference[h] - c[h] - l.floating[d], _ = c[h] - l.reference[h], v = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(t));
  let E = v ? h === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
  E === 0 && (E = l.floating[d]);
  const $ = y / 2 - _ / 2, A = u[m], N = E - f[d] - u[g], L = E / 2 - f[d] / 2 + $, M = Gh(A, L, N), I = ic(r) != null && L != M && l.reference[d] / 2 - (L < A ? u[m] : u[g]) - f[d] / 2 < 0;
  return { [h]: c[h] - (I ? L < A ? A - L : N - L : 0), data: { [h]: M, centerOffset: L - M } };
} }), Kh = ["top", "right", "bottom", "left"];
Kh.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const Xh = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: s } = n, i = await async function(o, r) {
      const { placement: l, platform: a, elements: u } = o, c = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), h = oc(l), d = ic(l), f = rc(l) === "x", m = ["left", "top"].includes(h) ? -1 : 1, g = c && f ? -1 : 1, y = typeof r == "function" ? r(o) : r;
      let { mainAxis: _, crossAxis: v, alignmentAxis: E } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return d && typeof E == "number" && (v = d === "end" ? -1 * E : E), f ? { x: v * g, y: _ * m } : { x: _ * m, y: v * g };
    }(n, e);
    return { x: t + i.x, y: s + i.y, data: i };
  } };
};
var Pe, De, Ie, Bs, lc;
const Bo = class extends ot {
  constructor() {
    super(...arguments);
    b(this, Bs);
    b(this, Pe, !1);
    b(this, De, 0);
    x(this, "hideLater", () => {
      p(this, Ie).call(this), C(this, De, window.setTimeout(this.hide.bind(this), 100));
    });
    b(this, Ie, () => {
      clearTimeout(p(this, De)), C(this, De, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, s) {
    (s == null ? void 0 : s.clearOthers) !== !1 && Bo.clear({ event: s == null ? void 0 : s.event, exclude: [this.element] });
    const i = super.show(t);
    return i && (!p(this, Pe) && this.isHover && T(this, Bs, lc).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const t = super.hide();
    return t && this.element.classList.remove(this.elementShowClass), t;
  }
  toggle(t, s) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...s });
  }
  destroy() {
    p(this, Pe) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", p(this, Ie)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  _getPopperOptions() {
    var i, o;
    const t = super._getPopperOptions(), s = this._getArrowSize();
    return s && this.arrowEl && ((i = t.middleware) == null || i.push(Xh(s)), (o = t.middleware) == null || o.push(Yh({ element: this.arrowEl }))), t;
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
let tt = Bo;
Pe = new WeakMap(), De = new WeakMap(), Ie = new WeakMap(), Bs = new WeakSet(), lc = function() {
  const { menu: t } = this;
  t.addEventListener("mouseenter", p(this, Ie)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), C(this, Pe, !0);
}, x(tt, "NAME", "dropdown"), x(tt, "MENU_CLASS", "dropdown-menu"), x(tt, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), x(tt, "DEFAULT", {
  ...ot.DEFAULT,
  strategy: "fixed",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  var s;
  const n = e.target, t = (s = n.closest) == null ? void 0 : s.call(n, tt.MENU_SELECTOR);
  if (t) {
    const i = tt.ensure(t);
    i.options.trigger === "click" && i.toggle();
  } else
    tt.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const n = e.target, t = (i = n.closest) == null ? void 0 : i.call(n, tt.MENU_SELECTOR);
  if (!t)
    return;
  const s = tt.ensure(t);
  s.isHover && s.show();
});
const Jh = (e) => {
  const n = document.getElementsByClassName("with-dropdown-show")[0];
  if (!n)
    return;
  const t = typeof n.closest == "function" ? n.closest(tt.MENU_SELECTOR) : null;
  !t || !e.target.contains(t) || tt.clear({ event: e });
};
window.addEventListener("scroll", Jh, !0);
var On, He;
class Zh extends z {
  constructor(t) {
    var s;
    super(t);
    b(this, On, void 0);
    b(this, He, ve());
    this.state = { placement: ((s = t.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return p(this, He);
  }
  get triggerElement() {
    return p(this, He).current;
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
    }), C(this, On, tt.ensure(this.triggerElement, {
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
    (t = p(this, On)) == null || t.destroy();
  }
  beforeRender() {
    const { className: t, children: s, dropdown: i, ...o } = this.props;
    return {
      className: O("dropdown", t),
      children: typeof s == "function" ? s(this.state) : s,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: p(this, He)
    };
  }
  render() {
    const { children: t, ...s } = this.beforeRender();
    return /* @__PURE__ */ w("div", { ...s, children: t });
  }
}
On = new WeakMap(), He = new WeakMap();
class Qh extends Zh {
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
    return s.caret = i, /* @__PURE__ */ w(At, { ...s });
  }
}
function cc({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ w(Qh, { type: t, ...s });
}
let ac = class extends z {
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
    return /* @__PURE__ */ w(At, { ...i }, s);
  }
  renderItem(n, t, s) {
    const { itemRender: i, defaultBtnProps: o, onClickItem: r } = n, l = { key: s, ...t };
    if (o && Object.assign(l, o), r && (l.onClick = this.handleItemClick.bind(this, l, s, t.onClick)), i) {
      const a = i.call(this, l, dt);
      if (et(a))
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
      defaultBtnProps: r,
      children: l,
      itemRender: a,
      onClickItem: u,
      beforeRender: c,
      afterRender: h,
      beforeDestroy: d,
      ...f
    } = n;
    return /* @__PURE__ */ w(
      "div",
      {
        className: O("btn-group", i ? `size-${i}` : "", t),
        ...f,
        children: [
          s && s.map(this.renderItem.bind(this, n)),
          l
        ]
      }
    );
  }
};
function tu({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ w(ac, { type: t, ...s });
}
var Re;
let sn = (Re = class extends Pi {
  beforeRender() {
    const { gap: n, btnProps: t, wrap: s, ...i } = super.beforeRender();
    return i.className = O(i.className, s ? "flex-wrap" : "", typeof n == "number" ? `gap-${n}` : ""), typeof n == "string" && (i.style ? i.style.gap = n : i.style = { gap: n }), i;
  }
  isBtnItem(n) {
    return n === "item" || n === "dropdown";
  }
  renderTypedItem(n, t, s) {
    const i = this.isBtnItem(s.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, o = {
      ...t,
      ...i,
      ...s,
      className: O(`${this.name}-${s.type}`, t.className, i.className, s.className),
      style: Object.assign({}, t.style, i.style, s.style)
    };
    return /* @__PURE__ */ w(n, { ...o });
  }
}, x(Re, "ItemComponents", {
  item: Th,
  dropdown: cc,
  "btn-group": tu
}), x(Re, "ROOT_TAG", "nav"), x(Re, "NAME", "toolbar"), x(Re, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), Re);
function eu({
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
  l === !0 ? h = /* @__PURE__ */ w(At, { className: "alert-close btn ghost", square: !0, onClick: a, children: /* @__PURE__ */ w("span", { class: "close" }) }) : et(l) ? h = l : typeof l == "object" && (h = /* @__PURE__ */ w(At, { ...l, onClick: a }));
  const d = et(t) ? t : t ? /* @__PURE__ */ w(sn, { ...t }) : null;
  return /* @__PURE__ */ w("div", { className: O("alert", e), style: n, ...c, children: [
    et(u) ? u : typeof u == "string" ? /* @__PURE__ */ w("i", { className: `icon ${u}` }) : null,
    et(i) ? i : /* @__PURE__ */ w("div", { className: O("alert-content", o), children: [
      et(s) ? s : s && /* @__PURE__ */ w("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ w("div", { className: "alert-text", children: i }),
      s ? d : null
    ] }),
    s ? null : d,
    h,
    r
  ] });
}
function nu(e) {
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
let su = class extends z {
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
    return /* @__PURE__ */ w(
      eu,
      {
        className: O("messager", a, i, r === !0 ? nu(o) : r, l ? "in" : ""),
        ...c
      }
    );
  }
};
var We, gs;
class ms extends X {
  constructor() {
    super(...arguments);
    b(this, We);
    x(this, "_show", !1);
    x(this, "_showTimer", 0);
    x(this, "_afterRender", ({ firstRender: t }) => {
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
    this._show || (this.emit("show"), this.render(), this._show = !0, T(this, We, gs).call(this, () => {
      this.emit("shown");
      const { time: t } = this.options;
      t && T(this, We, gs).call(this, () => this.hide(), t);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), T(this, We, gs).call(this, () => {
      this.emit("hidden");
    }));
  }
}
We = new WeakSet(), gs = function(t, s = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, s);
}, x(ms, "NAME", "MessagerItem"), x(ms, "EVENTS", !0), x(ms, "Component", su);
var de, je, It, zs, hc, Fs, uc;
const zo = class extends Tt {
  constructor() {
    super(...arguments);
    b(this, zs);
    b(this, Fs);
    b(this, de, void 0);
    b(this, je, os(6));
    b(this, It, void 0);
  }
  get id() {
    return p(this, je);
  }
  get isShown() {
    var t;
    return !!((t = p(this, It)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), T(this, zs, hc).call(this).show();
  }
  hide() {
    var t;
    (t = p(this, It)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: s, ...i } = t, o = new zo(s || "body", i);
    return o.show(), o;
  }
};
let hn = zo;
de = new WeakMap(), je = new WeakMap(), It = new WeakMap(), zs = new WeakSet(), hc = function() {
  if (p(this, It))
    p(this, It).setOptions(this.options);
  else {
    const t = T(this, Fs, uc).call(this), s = new ms(t, this.options);
    s.on("hidden", () => {
      s.destroy(), t.remove(), C(this, de, void 0);
    }), C(this, It, s);
  }
  return p(this, It);
}, Fs = new WeakSet(), uc = function() {
  if (p(this, de))
    return p(this, de);
  const { placement: t = "top" } = this.options;
  let s = this.element.querySelector(`.messagers-${t}`);
  s || (s = document.createElement("div"), s.className = `messagers messagers-${t}`, this.element.appendChild(s));
  let i = s.querySelector(`#messager-${p(this, je)}`);
  return i || (i = document.createElement("div"), i.className = "messager-holder", i.id = `messager-${p(this, je)}`, s.appendChild(i), C(this, de, i)), i;
}, x(hn, "NAME", "messager"), x(hn, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
k(document).on("zui.messager.show", (e, n) => {
  n && hn.show(n);
});
var fs;
let iu = (fs = class extends z {
  render() {
    const { percent: n, circleSize: t, circleBorderSize: s, circleBgColor: i, circleColor: o } = this.props, r = (t - s) / 2, l = t / 2;
    return /* @__PURE__ */ w("svg", { width: t, height: t, class: "progress-circle", children: [
      /* @__PURE__ */ w("circle", { cx: l, cy: l, r, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ w("circle", { cx: l, cy: l, r, stroke: o, "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - n) / 100, "stroke-width": s }),
      /* @__PURE__ */ w("text", { x: l, y: l + s / 4, "dominant-baseline": "middle", style: { fontSize: `${r}px` }, children: Math.round(n) })
    ] });
  }
}, x(fs, "NAME", "zui.progress-circle"), x(fs, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), fs);
class Cr extends X {
}
x(Cr, "NAME", "table-sorter"), x(Cr, "Component", iu);
let ou = class extends z {
  constructor() {
    super(...arguments);
    x(this, "state", { checked: !1 });
    x(this, "handleOnClick", () => {
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
    } = this.props, d = this.state.checked ? 1 : 0, f = t || "div", m = typeof r == "string" ? /* @__PURE__ */ w("i", { class: `icon ${r}` }) : r, g = typeof l == "string" ? /* @__PURE__ */ w("i", { class: `icon ${l}` }) : l, y = [
      /* @__PURE__ */ w("input", { onChange: c, type: "checkbox", value: d, checked: !!this.state.checked }),
      /* @__PURE__ */ w("label", { children: [
        m,
        o,
        g
      ] })
    ];
    return dt(
      f,
      {
        className: O("switch", s, { disabled: a }),
        onClick: this.handleOnClick,
        ...h
      },
      ...y,
      i
    );
  }
};
class $r extends X {
}
x($r, "NAME", "switch"), x($r, "Component", ou);
function ru(e) {
  const n = typeof e == "string" ? document.querySelector(e) : e;
  if (!n)
    return !1;
  if (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement)
    return n.select(), !0;
  if (window.getSelection) {
    const t = window.getSelection();
    if (t) {
      const s = document.createRange();
      return s.selectNodeContents(n), t.removeAllRanges(), t.addRange(s), !0;
    }
  }
  return !1;
}
function lu(e, n) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  const s = t.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= o && s.top + s.height <= i;
  const r = s.top <= i && s.top + s.height >= 0, l = s.left <= o && s.left + s.width >= 0;
  return r && l;
}
const If = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: O,
  getClassList: Oi,
  isElementVisible: lu,
  selectText: ru
}, Symbol.toStringTag, { value: "Module" }));
/*! js-cookie v3.0.1 | MIT */
function hs(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n];
    for (var s in t)
      e[s] = t[s];
  }
  return e;
}
var cu = {
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
function co(e, n) {
  function t(i, o, r) {
    if (!(typeof document > "u")) {
      r = hs({}, n, r), typeof r.expires == "number" && (r.expires = new Date(Date.now() + r.expires * 864e5)), r.expires && (r.expires = r.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
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
          hs({}, o, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return co(this.converter, hs({}, this.attributes, i));
      },
      withConverter: function(i) {
        return co(hs({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(n) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var au = co(cu, { path: "/" });
window.$ && Object.assign(window.$, { cookie: au });
var fc = function(e, n, t, s) {
  var i;
  n[0] = 0;
  for (var o = 1; o < n.length; o++) {
    var r = n[o++], l = n[o] ? (n[0] |= r ? 1 : 2, t[n[o++]]) : n[++o];
    r === 3 ? s[0] = l : r === 4 ? s[1] = Object.assign(s[1] || {}, l) : r === 5 ? (s[1] = s[1] || {})[n[++o]] = l : r === 6 ? s[1][n[++o]] += l + "" : r ? (i = e.apply(l, fc(e, l, t, ["", null])), s.push(i), l[0] ? n[0] |= 2 : (n[o - 2] = 0, n[o] = i)) : s.push(l);
  }
  return s;
}, kr = /* @__PURE__ */ new Map();
function dc(e) {
  var n = kr.get(this);
  return n || (n = /* @__PURE__ */ new Map(), kr.set(this, n)), (n = fc(this, n.get(e) || (n.set(e, n = function(t) {
    for (var s, i, o = 1, r = "", l = "", a = [0], u = function(d) {
      o === 1 && (d || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? a.push(0, d, r) : o === 3 && (d || r) ? (a.push(3, d, r), o = 2) : o === 2 && r === "..." && d ? a.push(4, d, 0) : o === 2 && r && !d ? a.push(5, 0, !0, r) : o >= 5 && ((r || !d && o === 5) && (a.push(o, 0, r, i), o = 6), d && (a.push(o, d, 0, i), o = 6)), r = "";
    }, c = 0; c < t.length; c++) {
      c && (o === 1 && u(), u(c));
      for (var h = 0; h < t[c].length; h++)
        s = t[c][h], o === 1 ? s === "<" ? (u(), a = [a], o = 3) : r += s : o === 4 ? r === "--" && s === ">" ? (o = 1, r = "") : r = s + r[0] : l ? s === l ? l = "" : r += s : s === '"' || s === "'" ? l = s : s === ">" ? (u(), o = 1) : o && (s === "=" ? (o = 5, i = r, r = "") : s === "/" && (o < 5 || t[c][h + 1] === ">") ? (u(), o === 3 && (a = a[0]), o = a, (a = a[0]).push(2, 0, o), o = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (u(), o = 2) : r += s), o === 3 && r === "!--" && (o = 4, a = a[0]);
    }
    return u(), a;
  }(e)), n), arguments, [])).length > 1 ? n : n[0];
}
var hu = dc.bind(dt);
Object.assign(window, { htm: dc, html: hu, preact: Ea });
var Pn, Yt, xt, Be, ze, ys;
const Fo = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(n, t = "local") {
    b(this, ze);
    b(this, Pn, void 0);
    b(this, Yt, void 0);
    b(this, xt, void 0);
    b(this, Be, void 0);
    C(this, Pn, t), C(this, Yt, `ZUI_STORE:${n ?? os()}`), C(this, xt, t === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return p(this, Pn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (p(this, Be) || C(this, Be, new Fo(p(this, Yt), "session")), p(this, Be));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(n, t) {
    const s = p(this, xt).getItem(T(this, ze, ys).call(this, n));
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
    p(this, xt).setItem(T(this, ze, ys).call(this, n), JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(n) {
    p(this, xt).removeItem(T(this, ze, ys).call(this, n));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(n) {
    for (let t = 0; t < p(this, xt).length; t++) {
      const s = p(this, xt).key(t);
      if (s != null && s.startsWith(p(this, Yt))) {
        const i = p(this, xt).getItem(s);
        typeof i == "string" && n(s.substring(p(this, Yt).length + 1), JSON.parse(i));
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
let Ns = Fo;
Pn = new WeakMap(), Yt = new WeakMap(), xt = new WeakMap(), Be = new WeakMap(), ze = new WeakSet(), ys = function(n) {
  return `${p(this, Yt)}:${n}`;
};
const uu = new Ns("DEFAULT");
function fu(e, n = "local") {
  return new Ns(e, n);
}
Object.assign(uu, { create: fu });
function du(e) {
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
function pu(e) {
  const [n, t, s] = typeof e == "string" ? du(e) : e;
  return n * 0.299 + t * 0.587 + s * 0.114 > 186;
}
function Rr(e, n) {
  return pu(e) ? (n == null ? void 0 : n.dark) ?? "#333333" : (n == null ? void 0 : n.light) ?? "#ffffff";
}
function Tr(e, n = 255) {
  return Math.min(Math.max(e, 0), n);
}
function mu(e, n, t) {
  e = e % 360 / 360, n = Tr(n), t = Tr(t);
  const s = t <= 0.5 ? t * (n + 1) : t + n - t * n, i = t * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function gu(e) {
  let n = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let t = 0; t < e.length; ++t)
      n += (t + 1) * e.charCodeAt(t);
  return n;
}
function yu(e, n) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= n ? e : e.substring(e.length - n) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= n ? e : e.substring(0, n), e;
}
let pc = class extends z {
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
      hueDistance: d = 43,
      saturation: f = 0.4,
      lightness: m = 0.6,
      children: g,
      ...y
    } = this.props, _ = ["avatar", n], v = { ...t, background: r, color: l };
    let E = 32;
    s && (typeof s == "number" ? (v.width = `${s}px`, v.height = `${s}px`, v.fontSize = `${Math.max(12, Math.round(s / 2))}px`, E = s) : (_.push(`size-${s}`), E = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? _.push("circle") : o && (typeof o == "number" ? v.borderRadius = `${o}px` : _.push(`rounded-${o}`));
    let $;
    if (h)
      _.push("has-img"), $ = /* @__PURE__ */ w("img", { className: "avatar-img", src: h, alt: a });
    else if (a != null && a.length) {
      const A = yu(a, c);
      if (_.push("has-text", `has-text-${A.length}`), r)
        !l && r && (v.color = Rr(r));
      else {
        const L = u ?? a, M = (typeof L == "number" ? L : gu(L)) * d % 360;
        if (v.background = `hsl(${M},${f * 100}%,${m * 100}%)`, !l) {
          const I = mu(M, f, m);
          v.color = Rr(I);
        }
      }
      let N;
      E && E < 14 * A.length && (N = { transform: `scale(${E / (14 * A.length)})`, whiteSpace: "nowrap" }), $ = /* @__PURE__ */ w("div", { "data-actualSize": E, className: "avatar-text", style: N, children: A });
    }
    return /* @__PURE__ */ w(
      "div",
      {
        className: O(_),
        style: v,
        ...y,
        children: [
          $,
          g
        ]
      }
    );
  }
};
class Ar extends X {
}
x(Ar, "NAME", "avatar"), x(Ar, "Component", pc);
class Lr extends X {
}
x(Lr, "NAME", "btngroup"), x(Lr, "Component", ac);
function mc(e, n, t) {
  if (t) {
    e.setAttribute("class", O(n));
    return;
  }
  Oi(e.getAttribute("class"), n).forEach(([s, i]) => {
    e.classList.toggle(s, i);
  });
}
function un(e, n, t) {
  if (typeof n == "object")
    return Object.entries(n).forEach(([s, i]) => {
      un(e, s, i);
    });
  t !== void 0 && (e.style[n] = typeof t == "number" ? `${t}px` : t);
}
function Ms(e, n, t) {
  if (typeof n == "object")
    return Object.entries(n).forEach(([s, i]) => {
      Ms(e, s, i);
    });
  t !== void 0 && (t === null ? e.removeAttribute(n) : e.setAttribute(n, t));
}
var pe, Dn, Kt, Us, Fe, _s;
const J = class extends Tt {
  constructor() {
    super(...arguments);
    b(this, Fe);
    b(this, pe, 0);
    b(this, Dn, void 0);
    b(this, Kt, void 0);
    b(this, Us, (t) => {
      const s = t.target;
      (s.closest(J.DISMISS_SELECTOR) || this.options.backdrop === !0 && !s.closest(".modal-dialog") && s.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(J.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", p(this, Us)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: t } = this;
      if (t) {
        const s = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const i = t.clientWidth, o = t.clientHeight;
          (!p(this, Kt) || p(this, Kt)[0] !== i || p(this, Kt)[1] !== o) && (C(this, Kt, [i, o]), this.layout());
        });
        s.observe(t), C(this, Dn, s);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var t;
    super.destroy(), (t = p(this, Dn)) == null || t.disconnect();
  }
  show(t) {
    if (this.isShown)
      return !1;
    this.setOptions(t);
    const { modalElement: s } = this, { animation: i, backdrop: o, className: r, style: l } = this.options;
    return mc(s, [{
      "modal-trans": i,
      "modal-no-backdrop": !o
    }, J.CLASS_SHOW, r]), un(s, {
      zIndex: `${J.zIndex++}`,
      ...l
    }), this.layout(), this.emit("show", this), T(this, Fe, _s).call(this, () => {
      s.classList.add(J.CLASS_SHOWN), T(this, Fe, _s).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(J.CLASS_SHOWN), this.emit("hide", this), T(this, Fe, _s).call(this, () => {
      this.modalElement.classList.remove(J.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(t, s) {
    if (!this.isShown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    s = s ?? this.options.size, Ms(i, "data-size", null);
    const o = { width: null, height: null };
    typeof s == "object" ? (o.width = s.width, o.height = s.height) : typeof s == "string" && ["md", "sm", "lg", "full"].includes(s) ? Ms(i, "data-size", s) : s && (o.width = s), un(i, o), t = t ?? this.options.position ?? "fit";
    const r = i.clientWidth, l = i.clientHeight;
    C(this, Kt, [r, l]), typeof t == "function" && (t = t({ width: r, height: l }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof t == "number" ? (a.alignSelf = "flex-start", a.top = t) : typeof t == "object" && t ? (a.alignSelf = "flex-start", Object.assign(a, t)) : t === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - l) / 3))}px`) : t === "bottom" ? a.alignSelf = "flex-end" : t === "top" ? a.alignSelf = "flex-start" : t !== "center" && typeof t == "string" && (a.alignSelf = "flex-start", a.top = t), un(i, a), un(this.modalElement, "justifyContent", a.left ? "flex-start" : "center");
  }
  static query(t) {
    if (t === void 0)
      return t = document.querySelector(`.modal.${J.CLASS_SHOW}`), Array.from(J.getAll().values()).find((s) => s.isShown);
    if (typeof t == "string" && (t = document.querySelector(t)), !!t)
      return t.classList.contains("modal") || (t = t.closest(".modal")), Array.from(J.getAll().values()).find((s) => s.modalElement === t);
  }
  static hide(t) {
    var s;
    (s = J.query(t)) == null || s.hide();
  }
  static show(t) {
    var s;
    (s = J.query(t)) == null || s.show();
  }
};
let Q = J;
pe = new WeakMap(), Dn = new WeakMap(), Kt = new WeakMap(), Us = new WeakMap(), Fe = new WeakSet(), _s = function(t, s) {
  p(this, pe) && (clearTimeout(p(this, pe)), C(this, pe, 0)), t && (this.options.animation ? C(this, pe, window.setTimeout(t, s ?? this.options.transTime)) : t());
}, x(Q, "NAME", "Modal"), x(Q, "EVENTS", !0), x(Q, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), x(Q, "CLASS_SHOW", "show"), x(Q, "CLASS_SHOWN", "in"), x(Q, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), x(Q, "zIndex", 2e3);
k(window).on("resize", () => {
  Q.all.forEach((e) => {
    const n = e;
    n.isShown && n.options.responsive && n.layout();
  });
});
k(document).on("zui.modal.hide", (e, n) => {
  Q.hide(n == null ? void 0 : n.target);
});
class gc extends z {
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
    return et(n) ? n : n === !1 || !t ? null : /* @__PURE__ */ w("div", { className: "modal-header", children: /* @__PURE__ */ w("div", { className: "modal-title", children: t }) });
  }
  renderActions() {
    const {
      actions: n,
      closeBtn: t
    } = this.props;
    return !t && !n ? null : et(n) ? n : /* @__PURE__ */ w("div", { className: "modal-actions", children: [
      n ? /* @__PURE__ */ w(sn, { ...n }) : null,
      t ? /* @__PURE__ */ w("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ w("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: n
    } = this.props;
    return n ? et(n) ? n : /* @__PURE__ */ w("div", { className: "modal-body", children: n }) : null;
  }
  renderFooter() {
    const {
      footer: n,
      footerActions: t
    } = this.props;
    return et(n) ? n : n === !1 || !t ? null : /* @__PURE__ */ w("div", { className: "modal-footer", children: t ? /* @__PURE__ */ w(sn, { ...t }) : null });
  }
  render() {
    const {
      className: n,
      style: t,
      children: s
    } = this.props;
    return /* @__PURE__ */ w("div", { className: O("modal-dialog", n), style: t, children: /* @__PURE__ */ w("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
x(gc, "defaultProps", { closeBtn: !0 });
var In, Ue, Hn;
class _u extends z {
  constructor() {
    super(...arguments);
    b(this, In, ve());
    b(this, Ue, void 0);
    x(this, "state", {});
    b(this, Hn, () => {
      var i, o;
      const t = (o = (i = p(this, In).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!t)
        return;
      let s = p(this, Ue);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const r = t.body, l = t.documentElement, a = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, l.offsetHeight));
        this.setState({ height: a });
      }), s.observe(t.body), s.observe(t.documentElement), C(this, Ue, s);
    });
  }
  componentDidMount() {
    p(this, Hn).call(this);
  }
  componentWillUnmount() {
    var t;
    (t = p(this, Ue)) == null || t.disconnect();
  }
  render() {
    const { url: t } = this.props;
    return /* @__PURE__ */ w(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: t,
        ref: p(this, In),
        onLoad: p(this, Hn)
      }
    );
  }
}
In = new WeakMap(), Ue = new WeakMap(), Hn = new WeakMap();
function yc(e) {
  const n = e.querySelectorAll("script");
  n && n.forEach((t) => {
    const s = document.createElement("script");
    s.type = t.type || "text/javascript", s.async = !1, s.innerHTML = t.innerHTML, e.appendChild(s), t.remove();
  });
}
var Wn;
class wu extends z {
  constructor() {
    super(...arguments);
    b(this, Wn, ve());
  }
  componentDidMount() {
    if (!this.props.execScript)
      return;
    const t = p(this, Wn).current;
    t && yc(t);
  }
  render() {
    const { execScript: t, html: s, ...i } = this.props;
    return /* @__PURE__ */ w("div", { ref: p(this, Wn), dangerouslySetInnerHTML: { __html: s }, ...i });
  }
}
Wn = new WeakMap();
function bu(e, n) {
  const { custom: t, title: s, content: i } = n;
  return {
    body: i,
    title: s,
    ...typeof t == "function" ? t() : t
  };
}
async function vu(e, n) {
  const { dataType: t = "html", url: s, request: i, custom: o, title: r, replace: l = !0, execScript: a = !0 } = n, c = await (await fetch(s, i)).text();
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
    body: t === "html" ? /* @__PURE__ */ w(wu, { className: "modal-body", html: c, execScript: a }) : c
  };
}
async function xu(e, n) {
  const { url: t, custom: s, title: i } = n;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ w(_u, { url: t })
  };
}
const Eu = {
  custom: bu,
  ajax: vu,
  iframe: xu
};
var jn, Bn, Et, Ve, ws, Vs, _c, zn, ao;
const Mt = class extends Q {
  constructor() {
    super(...arguments);
    b(this, Ve);
    b(this, Vs);
    b(this, zn);
    b(this, jn, void 0);
    b(this, Bn, void 0);
    b(this, Et, void 0);
  }
  get id() {
    return p(this, Bn);
  }
  get loading() {
    return this.modalElement.classList.contains(Mt.LOADING_CLASS);
  }
  get modalElement() {
    let t = p(this, jn);
    if (!t) {
      const { id: s } = this;
      t = this.element.querySelector(`#${s}`), t || (t = document.createElement("div"), Ms(t, {
        id: s,
        style: this.options.style
      }), mc(t, ["modal modal-async", this.options.className]), this.element.appendChild(t)), C(this, jn, t);
    }
    return t;
  }
  afterInit() {
    super.afterInit(), C(this, Bn, this.options.id || `modal-${os()}`);
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
    p(this, Et) && clearTimeout(p(this, Et));
    const { modalElement: t, options: s } = this, { type: i, loadTimeout: o } = s, r = Eu[i];
    if (!r)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    t.classList.add(Mt.LOADING_CLASS), await T(this, Vs, _c).call(this), o && C(this, Et, window.setTimeout(() => {
      C(this, Et, 0), T(this, zn, ao).call(this, this.options.timeoutTip);
    }, o));
    const l = await r.call(this, t, s);
    return l === !1 ? await T(this, zn, ao).call(this, this.options.failedTip) : l && typeof l == "object" && await T(this, Ve, ws).call(this, l), p(this, Et) && (clearTimeout(p(this, Et)), C(this, Et, 0)), t.classList.remove(Mt.LOADING_CLASS), !0;
  }
  static open(t) {
    return new Promise((s) => {
      const { container: i = document.body, ...o } = t, r = new Mt(i, { show: !0, ...o });
      r.once("hidden", () => s(r)), r.show();
    });
  }
  static alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: s, message: i, icon: o, iconClass: r = "icon-lg muted", actions: l = "confirm", onClickAction: a, custom: u, ...c } = t;
    let h = /* @__PURE__ */ w("div", { children: i });
    o ? h = /* @__PURE__ */ w("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ w("div", { className: `icon ${o} ${r}` }),
      h
    ] }) : h = /* @__PURE__ */ w("div", { className: "modal-body", children: h });
    const d = [];
    (Array.isArray(l) ? l : [l]).forEach((g) => {
      g = {
        ...typeof g == "string" ? { key: g } : g
      }, typeof g.key == "string" && (g.text || (g.text = hl(g.key, g.key)), g.btnType || (g.btnType = `btn-wide ${g.key === "confirm" ? "primary" : "btn-default"}`)), g && d.push(g);
    }, []);
    let f;
    const m = d.length ? {
      gap: 4,
      items: d,
      onClickItem: ({ item: g, event: y }) => {
        const _ = Mt.query(y.target);
        f = g.key, (a == null ? void 0 : a(g, _)) !== !1 && _ && _.hide();
      }
    } : void 0;
    return Mt.open({
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: h,
      backdrop: "static",
      custom: { footerActions: m, ...typeof u == "function" ? u() : u },
      ...c
    }).then(() => f);
  }
  static confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: s, onResult: i, ...o } = t;
    return Mt.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, l) => {
        i == null || i(r.key === "confirm", l), s == null || s(r, l);
      },
      ...o
    }).then((r) => r === "confirm");
  }
};
let fn = Mt;
jn = new WeakMap(), Bn = new WeakMap(), Et = new WeakMap(), Ve = new WeakSet(), ws = function(t) {
  return new Promise((s) => {
    if (Array.isArray(t))
      return this.modalElement.innerHTML = t[0], yc(this.modalElement), s();
    const { afterRender: i, ...o } = t;
    t = {
      afterRender: (r) => {
        this.layout(), i == null || i(r), s();
      },
      ...o
    }, is(
      /* @__PURE__ */ w(gc, { ...t }),
      this.modalElement
    );
  });
}, Vs = new WeakSet(), _c = function() {
  const { loadingText: t } = this.options;
  return T(this, Ve, ws).call(this, {
    body: /* @__PURE__ */ w("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ w("span", { className: "spinner" }),
      t ? /* @__PURE__ */ w("span", { className: "modal-loading-text", children: t }) : null
    ] })
  });
}, zn = new WeakSet(), ao = function(t) {
  if (t)
    return T(this, Ve, ws).call(this, {
      body: /* @__PURE__ */ w("div", { className: "modal-load-failed", children: t })
    });
}, x(fn, "LOADING_CLASS", "loading"), x(fn, "DEFAULT", {
  ...Q.DEFAULT,
  loadTimeout: 1e4
});
var Xt, qs, wc, Gs, bc, Ys, vc;
class vn extends Tt {
  constructor() {
    super(...arguments);
    b(this, qs);
    b(this, Gs);
    b(this, Ys);
    b(this, Xt, void 0);
  }
  get modal() {
    return p(this, Xt);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    return T(this, Gs, bc).call(this).show();
  }
  hide() {
    var t;
    (t = p(this, Xt)) == null || t.hide();
  }
}
Xt = new WeakMap(), qs = new WeakSet(), wc = function() {
  const {
    container: t,
    ...s
  } = this.options, i = s, o = this.element.getAttribute("href") || "";
  return i.type || (i.target || o[0] === "#" ? i.type = "static" : i.type = i.type || (i.url || o ? "ajax" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && o[0] !== "#" && (i.url = o), i;
}, Gs = new WeakSet(), bc = function() {
  const t = T(this, qs, wc).call(this);
  let s = p(this, Xt);
  return s ? s.setOptions(t) : t.type === "static" ? (s = new Q(T(this, Ys, vc).call(this), t), C(this, Xt, s)) : (s = new fn(this.container, t), C(this, Xt, s)), s;
}, Ys = new WeakSet(), vc = function() {
  let t = this.options.target;
  if (!t) {
    const { element: s } = this;
    if (s.tagName === "A") {
      const i = s.getAttribute("href");
      i != null && i.startsWith("#") && (t = i);
    }
  }
  return this.container.querySelector(t || ".modal");
}, x(vn, "NAME", "ModalTrigger"), x(vn, "EVENTS", !0), x(vn, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  var s;
  const n = e.target, t = (s = n.closest) == null ? void 0 : s.call(n, vn.TOGGLE_SELECTOR);
  if (t) {
    const i = vn.ensure(t);
    i && i.show();
  }
});
var Qi;
let Su = (Qi = class extends Pi {
  beforeRender() {
    const n = super.beforeRender();
    return n.className = O(n.className, n.type ? `nav-${n.type}` : "", {
      "nav-stacked": n.stacked
    }), n;
  }
}, x(Qi, "NAME", "nav"), Qi);
class Nr extends X {
}
x(Nr, "NAME", "nav"), x(Nr, "Component", Su);
function Rn(e, n) {
  const t = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof n == "string" && (n === "first" ? n = 1 : n === "last" ? n = t : n === "prev" ? n = e.page - 1 : n === "next" ? n = e.page + 1 : n === "current" ? n = e.page : n = Number.parseInt(n, 10)), n = n !== void 0 ? Math.max(1, Math.min(n < 0 ? t + n : n, t)) : e.page, {
    ...e,
    pageTotal: t,
    page: n
  };
}
function Cu({
  key: e,
  type: n,
  btnType: t,
  page: s,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...l
}) {
  const a = Rn(o, s);
  return l.text === void 0 && !l.icon && i && (l.text = typeof i == "function" ? i(a) : pt(i, a)), l.url === void 0 && r && (l.url = typeof r == "function" ? r(a) : pt(r, a)), l.disabled === void 0 && (l.disabled = s !== void 0 && a.page === o.page), /* @__PURE__ */ w(At, { type: t, ...l });
}
const Ot = 24 * 60 * 60 * 1e3, lt = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), rs = (e, n = /* @__PURE__ */ new Date()) => (e = lt(e), n = lt(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), ho = (e, n = /* @__PURE__ */ new Date()) => lt(e).getFullYear() === lt(n).getFullYear(), $u = (e, n = /* @__PURE__ */ new Date()) => (e = lt(e), n = lt(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), jf = (e, n = /* @__PURE__ */ new Date()) => {
  e = lt(e), n = lt(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), i = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Bf = (e, n) => rs(lt(n), e), zf = (e, n) => rs(lt(n).getTime() - Ot, e), Ff = (e, n) => rs(lt(n).getTime() + Ot, e), Uf = (e, n) => rs(lt(n).getTime() - 2 * Ot, e), uo = (e, n = "yyyy-MM-dd hh:mm") => {
  e = lt(e);
  const t = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(n) && (n.includes("[yyyy-]") && (n = n.replace("[yyyy-]", ho(e) ? "" : "yyyy-")), n = n.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(t).forEach((s) => {
    if (new RegExp(`(${s})`).test(n)) {
      const i = `${t[s]}`;
      n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), n;
}, Vf = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = uo(e, ho(e) ? s.month : s.full);
  if (rs(e, n))
    return i;
  const o = uo(n, ho(e, n) ? $u(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
}, qf = (e) => {
  const n = (/* @__PURE__ */ new Date()).getTime();
  switch (e) {
    case "oneWeek":
      return n - Ot * 7;
    case "oneMonth":
      return n - Ot * 31;
    case "threeMonth":
      return n - Ot * 31 * 3;
    case "halfYear":
      return n - Ot * 183;
    case "oneYear":
      return n - Ot * 365;
    case "twoYear":
      return n - 2 * (Ot * 365);
    default:
      return 0;
  }
}, Mr = (e, n, t = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, Mr(e, "day", t, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, Mr(e, "day", t, s);
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
function ku({
  key: e,
  type: n,
  page: t,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const l = Rn(i, t);
  return s = typeof s == "function" ? s(l) : pt(s, l), /* @__PURE__ */ w(zl, { ...r, children: [
    o,
    s
  ] });
}
function Ru({
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
  const a = { ...l, square: !0 }, u = () => (a.text = "", a.icon = "icon-ellipsis-h", a.disabled = !0, /* @__PURE__ */ w(At, { type: t, ...a })), c = (d, f) => {
    const m = [];
    for (let g = d; g <= f; g++) {
      a.text = g, delete a.icon, a.disabled = !1;
      const y = Rn(i, g);
      r && (a.url = typeof r == "function" ? r(y) : pt(r, y)), m.push(/* @__PURE__ */ w(At, { type: t, ...a, onClick: o }));
    }
    return m;
  };
  let h = [];
  return h = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? h = [...h, ...c(2, i.pageTotal)] : i.page < s - 2 ? h = [...h, ...c(2, s - 2), u(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? h = [...h, u(), ...c(i.pageTotal - s + 3, i.pageTotal)] : h = [...h, u(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), u(), ...c(i.pageTotal, i.pageTotal)]), h;
}
function Tu({
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
      url: typeof t == "function" ? t(u) : pt(t, u)
    };
  });
  const { text: r = "" } = o;
  return o.text = typeof r == "function" ? r(n) : pt(r, n), i.menu = { ...i.menu, className: O((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ w(cc, { type: "dropdown", dropdown: i, ...o });
}
function Au({
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
  const d = (g) => {
    var y;
    h = Number((y = g.target) == null ? void 0 : y.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, f = (g) => {
    if (!(g != null && g.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const y = Rn(i, h);
    l && !l({ info: y, event: g }) || (g.target.href = c.url = typeof a == "function" ? a(y) : pt(a, y));
  }, m = Rn(i, n || 0);
  return c.url = typeof a == "function" ? a(m) : pt(a, m), /* @__PURE__ */ w("div", { className: O("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ w("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ w(At, { type: s, ...c, onClick: f })
  ] });
}
var cn;
let Lu = (cn = class extends sn {
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
}, x(cn, "NAME", "pager"), x(cn, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), x(cn, "ItemComponents", {
  ...sn.ItemComponents,
  link: Cu,
  info: ku,
  nav: Ru,
  "size-menu": Tu,
  goto: Au
}), cn);
class Or extends X {
}
x(Or, "NAME", "pager"), x(Or, "Component", Lu);
var Ks;
class Nu extends z {
  constructor() {
    super(...arguments);
    b(this, Ks, (t) => {
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
    return l.length ? c = /* @__PURE__ */ w("div", { className: "picker-multi-selections", children: l.map((h, d) => /* @__PURE__ */ w("div", { className: "picker-multi-selection", children: [
      h.text ?? h.value,
      /* @__PURE__ */ w("div", { className: "picker-deselect-btn btn", onClick: p(this, Ks), "data-idx": d, children: /* @__PURE__ */ w("span", { className: "close" }) })
    ] })) }) : c = /* @__PURE__ */ w("span", { className: "picker-select-placeholder", children: o }), /* @__PURE__ */ w(
      "div",
      {
        className: O("picker-select picker-select-multi form-control", t, { disabled: i, focused: r }),
        style: s,
        onClick: a,
        children: [
          c,
          u,
          /* @__PURE__ */ w("span", { class: "caret" })
        ]
      }
    );
  }
}
Ks = new WeakMap();
var Xs;
class Mu extends z {
  constructor() {
    super(...arguments);
    b(this, Xs, (t) => {
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
    } = this.props, [h] = l, d = h ? /* @__PURE__ */ w("span", { className: "picker-single-selection", children: h.text ?? h.value }) : /* @__PURE__ */ w("span", { className: "picker-select-placeholder", children: o }), f = h && a ? /* @__PURE__ */ w("button", { type: "button", className: "btn picker-deselect-btn", onClick: p(this, Xs), children: /* @__PURE__ */ w("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ w(
      "div",
      {
        className: O("picker-select picker-select-single form-control", t, { disabled: i, focused: r }),
        style: s,
        onClick: u,
        children: [
          d,
          c,
          f,
          /* @__PURE__ */ w("span", { class: "caret" })
        ]
      }
    );
  }
}
Xs = new WeakMap();
var Js, xc, Fn, Zs, Un, Qs;
class Ou extends z {
  constructor() {
    super(...arguments);
    b(this, Js);
    x(this, "state", { keys: "", shown: !1 });
    b(this, Fn, (t) => {
      var s;
      (s = t.target) != null && s.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    b(this, Zs, ({ item: t }) => {
      const s = this.props.items.find((i) => i.value === t.key);
      s && this.props.onSelectItem(s);
    });
    b(this, Un, (t) => {
      this.setState({ keys: t.target.value });
    });
    b(this, Qs, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", p(this, Fn)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", p(this, Fn));
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
    } = this.props, { shown: h, keys: d } = this.state, f = d.trim().length;
    return /* @__PURE__ */ w("div", { className: O("picker-menu", i, { shown: h, "has-search": f }), id: `picker-menu-${t}`, style: { maxHeight: r, maxWidth: l, width: a, ...o }, children: [
      s ? /* @__PURE__ */ w("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ w("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: c, value: d, onChange: p(this, Un), onInput: p(this, Un) }),
        f ? /* @__PURE__ */ w("button", { type: "button", className: "btn picker-menu-search-clear", onClick: p(this, Qs), children: /* @__PURE__ */ w("span", { className: "close" }) }) : /* @__PURE__ */ w("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ w(Po, { className: "picker-menu-list", items: T(this, Js, xc).call(this), onClickItem: p(this, Zs), ...u })
    ] });
  }
}
Js = new WeakSet(), xc = function() {
  const { selections: t, items: s } = this.props, i = new Set(t), o = this.state.keys.toLowerCase().split(" ").filter((r) => r.length);
  return s.reduce((r, l) => {
    const {
      value: a,
      keys: u,
      text: c,
      ...h
    } = l;
    if (!o.length || o.every((d) => a.toLowerCase().includes(d) || (u == null ? void 0 : u.toLowerCase().includes(d)) || typeof c == "string" && c.toLowerCase().includes(d))) {
      let d = c ?? a;
      typeof d == "string" && o.length && (d = /* @__PURE__ */ w("span", { dangerouslySetInnerHTML: { __html: o.reduce((f, m) => f.replace(m, `<span class="picker-menu-item-match">${m}</span>`), d) } })), r.push({
        key: a,
        active: i.has(a),
        text: d,
        ...h
      });
    }
    return r;
  }, []);
}, Fn = new WeakMap(), Zs = new WeakMap(), Un = new WeakMap(), Qs = new WeakMap();
function Pr(e) {
  const n = /* @__PURE__ */ new Set();
  return e.reduce((t, s) => (n.has(s) || (n.add(s), t.push(s)), t), []);
}
var to, Vn, qn, Gn, qe, bs, Yn, fo, ti, Ec, ei, Sc, ni, si, ii, oi, ri, Cc;
let Pu = (to = class extends z {
  constructor(t) {
    super(t);
    b(this, qe);
    b(this, Yn);
    b(this, ti);
    b(this, ei);
    b(this, ri);
    b(this, Vn, 0);
    b(this, qn, os());
    b(this, Gn, ve());
    b(this, ni, (t, s) => {
      const { valueList: i } = this, o = new Set(t.map((l) => l.value)), r = i.filter((l) => !o.has(l));
      this.setState({ value: r.length ? r.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    b(this, si, (t) => {
      console.log("#handleSelectClick", t), this.setState({ open: !0 });
    });
    b(this, ii, () => {
      this.close();
    });
    b(this, oi, (t) => {
      this.props.multiple ? this.toggleValue(t.value) : this.setState({ value: t.value }, () => {
        var s;
        (s = p(this, Gn).current) == null || s.hide();
      });
    });
    this.state = {
      value: T(this, ti, Ec).call(this, t.defaultValue) ?? "",
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
    return T(this, Yn, fo).call(this, this.state.value);
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
      const i = ++Xo(this, Vn)._;
      if (await T(this, qe, bs).call(this, { loading: !0, items: [] }), t = await t(), p(this, Vn) !== i)
        return [];
    }
    const s = {};
    return Array.isArray(t) && this.state.items !== t && (s.items = t), this.state.loading && (s.loading = !1), Object.keys(s).length && await T(this, qe, bs).call(this, s), t;
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
    await T(this, qe, bs).call(this, { open: t }), t && this.loadItemList();
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
    } = this.props, r = o ? Nu : Mu;
    return /* @__PURE__ */ w("div", { className: O("picker", t), style: s, id: `picker-${p(this, qn)}`, children: [
      /* @__PURE__ */ w(r, { ...T(this, ei, Sc).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ w(Ou, { ...T(this, ri, Cc).call(this), ref: p(this, Gn) }) : null
    ] });
  }
}, Vn = new WeakMap(), qn = new WeakMap(), Gn = new WeakMap(), qe = new WeakSet(), bs = function(t) {
  return new Promise((s) => {
    this.setState(t, s);
  });
}, Yn = new WeakSet(), fo = function(t) {
  return typeof t == "string" ? Pr(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) ? Pr(t) : [];
}, ti = new WeakSet(), Ec = function(t) {
  const s = T(this, Yn, fo).call(this, t);
  return s.length ? s.join(this.props.valueSplitter ?? ",") : void 0;
}, ei = new WeakSet(), Sc = function() {
  const { placeholder: t, disabled: s } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: t,
    disabled: s,
    selections: this.getSelections(),
    onClick: p(this, si),
    onDeselect: p(this, ni)
  };
}, ni = new WeakMap(), si = new WeakMap(), ii = new WeakMap(), oi = new WeakMap(), ri = new WeakSet(), Cc = function() {
  const { search: t, menuClass: s, menuWidth: i, menuStyle: o, menuMaxHeight: r, menuMaxWidth: l } = this.props, { items: a } = this.state;
  return {
    id: p(this, qn),
    items: a,
    selections: this.valueList,
    search: t === !0 || typeof t == "number" && t <= a.length,
    style: o,
    className: s,
    width: i,
    maxHeight: r,
    maxWidth: l,
    onRequestHide: p(this, ii),
    onSelectItem: p(this, oi)
  };
}, x(to, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), to);
class Dr extends X {
}
x(Dr, "NAME", "picker"), x(Dr, "Component", Pu);
class Ir extends X {
}
x(Ir, "NAME", "toolbar"), x(Ir, "Component", sn);
function ls(e) {
  return e.split("-")[1];
}
function Ho(e) {
  return e === "y" ? "height" : "width";
}
function Ae(e) {
  return e.split("-")[0];
}
function Hi(e) {
  return ["top", "bottom"].includes(Ae(e)) ? "x" : "y";
}
function Hr(e, n, t) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, l = Hi(n), a = Ho(l), u = s[a] / 2 - i[a] / 2, c = l === "x";
  let h;
  switch (Ae(n)) {
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
  switch (ls(n)) {
    case "start":
      h[l] -= u * (t && c ? -1 : 1);
      break;
    case "end":
      h[l] += u * (t && c ? -1 : 1);
  }
  return h;
}
const Du = async (e, n, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let u = await r.getElementRects({ reference: e, floating: n, strategy: i }), { x: c, y: h } = Hr(u, s, a), d = s, f = {}, m = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: y, fn: _ } = l[g], { x: v, y: E, data: $, reset: A } = await _({ x: c, y: h, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: u, platform: r, elements: { reference: e, floating: n } });
    c = v ?? c, h = E ?? h, f = { ...f, [y]: { ...f[y], ...$ } }, A && m <= 50 && (m++, typeof A == "object" && (A.placement && (d = A.placement), A.rects && (u = A.rects === !0 ? await r.getElementRects({ reference: e, floating: n, strategy: i }) : A.rects), { x: c, y: h } = Hr(u, d, a)), g = -1);
  }
  return { x: c, y: h, placement: d, strategy: i, middlewareData: f };
};
function $c(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Os(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Iu(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: s, y: i, platform: o, rects: r, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: h = "floating", altBoundary: d = !1, padding: f = 0 } = n, m = $c(f), g = l[d ? h === "floating" ? "reference" : "floating" : h], y = Os(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(g))) == null || t ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: c, strategy: a })), _ = h === "floating" ? { ...r.floating, x: s, y: i } : r.reference, v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), E = await (o.isElement == null ? void 0 : o.isElement(v)) && await (o.getScale == null ? void 0 : o.getScale(v)) || { x: 1, y: 1 }, $ = Os(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: _, offsetParent: v, strategy: a }) : _);
  return { top: (y.top - $.top + m.top) / E.y, bottom: ($.bottom - y.bottom + m.bottom) / E.y, left: (y.left - $.left + m.left) / E.x, right: ($.right - y.right + m.right) / E.x };
}
const Hu = Math.min, Wu = Math.max;
function ju(e, n, t) {
  return Wu(e, Hu(n, t));
}
const Bu = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { element: t, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: l, platform: a } = n;
  if (t == null)
    return {};
  const u = $c(s), c = { x: i, y: o }, h = Hi(r), d = Ho(h), f = await a.getDimensions(t), m = h === "y" ? "top" : "left", g = h === "y" ? "bottom" : "right", y = l.reference[d] + l.reference[h] - c[h] - l.floating[d], _ = c[h] - l.reference[h], v = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(t));
  let E = v ? h === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
  E === 0 && (E = l.floating[d]);
  const $ = y / 2 - _ / 2, A = u[m], N = E - f[d] - u[g], L = E / 2 - f[d] / 2 + $, M = ju(A, L, N), I = ls(r) != null && L != M && l.reference[d] / 2 - (L < A ? u[m] : u[g]) - f[d] / 2 < 0;
  return { [h]: c[h] - (I ? L < A ? A - L : N - L : 0), data: { [h]: M, centerOffset: L - M } };
} }), zu = ["top", "right", "bottom", "left"];
zu.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const Fu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ps(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Fu[n]);
}
function Uu(e, n, t) {
  t === void 0 && (t = !1);
  const s = ls(e), i = Hi(e), o = Ho(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = Ps(r)), { main: r, cross: Ps(r) };
}
const Vu = { start: "end", end: "start" };
function Yi(e) {
  return e.replace(/start|end/g, (n) => Vu[n]);
}
const qu = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: l, elements: a } = n, { mainAxis: u = !0, crossAxis: c = !0, fallbackPlacements: h, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: m = !0, ...g } = e, y = Ae(s), _ = Ae(r) === r, v = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), E = h || (_ || !m ? [Ps(r)] : function(R) {
      const W = Ps(R);
      return [Yi(R), W, Yi(W)];
    }(r));
    h || f === "none" || E.push(...function(R, W, K, st) {
      const U = ls(R);
      let D = function(V, wt, le) {
        const ce = ["left", "right"], ae = ["right", "left"], Nt = ["top", "bottom"], Ce = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return le ? wt ? ae : ce : wt ? ce : ae;
          case "left":
          case "right":
            return wt ? Nt : Ce;
          default:
            return [];
        }
      }(Ae(R), K === "start", st);
      return U && (D = D.map((V) => V + "-" + U), W && (D = D.concat(D.map(Yi)))), D;
    }(r, m, f, v));
    const $ = [r, ...E], A = await Iu(n, g), N = [];
    let L = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (u && N.push(A[y]), c) {
      const { main: R, cross: W } = Uu(s, o, v);
      N.push(A[R], A[W]);
    }
    if (L = [...L, { placement: s, overflows: N }], !N.every((R) => R <= 0)) {
      var M;
      const R = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1, W = $[R];
      if (W)
        return { data: { index: R, overflows: L }, reset: { placement: W } };
      let K = "bottom";
      switch (d) {
        case "bestFit": {
          var I;
          const st = (I = L.map((U) => [U, U.overflows.filter((D) => D > 0).reduce((D, V) => D + V, 0)]).sort((U, D) => U[1] - D[1])[0]) == null ? void 0 : I[0].placement;
          st && (K = st);
          break;
        }
        case "initialPlacement":
          K = r;
      }
      if (s !== K)
        return { reset: { placement: K } };
    }
    return {};
  } };
}, Gu = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: s } = n, i = await async function(o, r) {
      const { placement: l, platform: a, elements: u } = o, c = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), h = Ae(l), d = ls(l), f = Hi(l) === "x", m = ["left", "top"].includes(h) ? -1 : 1, g = c && f ? -1 : 1, y = typeof r == "function" ? r(o) : r;
      let { mainAxis: _, crossAxis: v, alignmentAxis: E } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return d && typeof E == "number" && (v = d === "end" ? -1 * E : E), f ? { x: v * g, y: _ * m } : { x: _ * m, y: v * g };
    }(n, e);
    return { x: t + i.x, y: s + i.y, data: i };
  } };
};
function ft(e) {
  var n;
  return ((n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Rt(e) {
  return ft(e).getComputedStyle(e);
}
function ie(e) {
  return Rc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let us;
function kc() {
  if (us)
    return us;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (us = e.brands.map((n) => n.brand + "/" + n.version).join(" "), us) : navigator.userAgent;
}
function Ut(e) {
  return e instanceof ft(e).HTMLElement;
}
function _t(e) {
  return e instanceof ft(e).Element;
}
function Rc(e) {
  return e instanceof ft(e).Node;
}
function Wr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ft(e).ShadowRoot || e instanceof ShadowRoot;
}
function Wi(e) {
  const { overflow: n, overflowX: t, overflowY: s, display: i } = Rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + s + t) && !["inline", "contents"].includes(i);
}
function Yu(e) {
  return ["table", "td", "th"].includes(ie(e));
}
function po(e) {
  const n = /firefox/i.test(kc()), t = Rt(e), s = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!s && s !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function Tc() {
  return !/^((?!chrome|android).)*safari/i.test(kc());
}
function Wo(e) {
  return ["html", "body", "#document"].includes(ie(e));
}
const jr = Math.min, xn = Math.max, Ds = Math.round;
function Ac(e) {
  const n = Rt(e);
  let t = parseFloat(n.width), s = parseFloat(n.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = Ds(t) !== i || Ds(s) !== o;
  return r && (t = i, s = o), { width: t, height: s, fallback: r };
}
function Lc(e) {
  return _t(e) ? e : e.contextElement;
}
const Nc = { x: 1, y: 1 };
function Le(e) {
  const n = Lc(e);
  if (!Ut(n))
    return Nc;
  const t = n.getBoundingClientRect(), { width: s, height: i, fallback: o } = Ac(n);
  let r = (o ? Ds(t.width) : t.width) / s, l = (o ? Ds(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
function be(e, n, t, s) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), l = Lc(e);
  let a = Nc;
  n && (s ? _t(s) && (a = Le(s)) : a = Le(e));
  const u = l ? ft(l) : window, c = !Tc() && t;
  let h = (r.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, d = (r.top + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / a.y, f = r.width / a.x, m = r.height / a.y;
  if (l) {
    const g = ft(l), y = s && _t(s) ? ft(s) : s;
    let _ = g.frameElement;
    for (; _ && s && y !== g; ) {
      const v = Le(_), E = _.getBoundingClientRect(), $ = getComputedStyle(_);
      E.x += (_.clientLeft + parseFloat($.paddingLeft)) * v.x, E.y += (_.clientTop + parseFloat($.paddingTop)) * v.y, h *= v.x, d *= v.y, f *= v.x, m *= v.y, h += E.x, d += E.y, _ = ft(_).frameElement;
    }
  }
  return { width: f, height: m, top: d, right: h + f, bottom: d + m, left: h, x: h, y: d };
}
function ee(e) {
  return ((Rc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ji(e) {
  return _t(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Mc(e) {
  return be(ee(e)).left + ji(e).scrollLeft;
}
function Ku(e, n, t) {
  const s = Ut(n), i = ee(n), o = be(e, !0, t === "fixed", n);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && t !== "fixed")
    if ((ie(n) !== "body" || Wi(i)) && (r = ji(n)), Ut(n)) {
      const a = be(n, !0);
      l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
    } else
      i && (l.x = Mc(i));
  return { x: o.left + r.scrollLeft - l.x, y: o.top + r.scrollTop - l.y, width: o.width, height: o.height };
}
function Tn(e) {
  if (ie(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || (Wr(e) ? e.host : null) || ee(e);
  return Wr(n) ? n.host : n;
}
function Br(e) {
  return Ut(e) && Rt(e).position !== "fixed" ? e.offsetParent : null;
}
function zr(e) {
  const n = ft(e);
  let t = Br(e);
  for (; t && Yu(t) && Rt(t).position === "static"; )
    t = Br(t);
  return t && (ie(t) === "html" || ie(t) === "body" && Rt(t).position === "static" && !po(t)) ? n : t || function(s) {
    let i = Tn(s);
    for (; Ut(i) && !Wo(i); ) {
      if (po(i))
        return i;
      i = Tn(i);
    }
    return null;
  }(e) || n;
}
function Oc(e) {
  const n = Tn(e);
  return Wo(n) ? e.ownerDocument.body : Ut(n) && Wi(n) ? n : Oc(n);
}
function En(e, n) {
  var t;
  n === void 0 && (n = []);
  const s = Oc(e), i = s === ((t = e.ownerDocument) == null ? void 0 : t.body), o = ft(s);
  return i ? n.concat(o, o.visualViewport || [], Wi(s) ? s : []) : n.concat(s, En(s));
}
function Fr(e, n, t) {
  return n === "viewport" ? Os(function(s, i) {
    const o = ft(s), r = ee(s), l = o.visualViewport;
    let a = r.clientWidth, u = r.clientHeight, c = 0, h = 0;
    if (l) {
      a = l.width, u = l.height;
      const d = Tc();
      (d || !d && i === "fixed") && (c = l.offsetLeft, h = l.offsetTop);
    }
    return { width: a, height: u, x: c, y: h };
  }(e, t)) : _t(n) ? function(s, i) {
    const o = be(s, !0, i === "fixed"), r = o.top + s.clientTop, l = o.left + s.clientLeft, a = Ut(s) ? Le(s) : { x: 1, y: 1 }, u = s.clientWidth * a.x, c = s.clientHeight * a.y, h = l * a.x, d = r * a.y;
    return { top: d, left: h, right: h + u, bottom: d + c, x: h, y: d, width: u, height: c };
  }(n, t) : Os(function(s) {
    var i;
    const o = ee(s), r = ji(s), l = (i = s.ownerDocument) == null ? void 0 : i.body, a = xn(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), u = xn(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0);
    let c = -r.scrollLeft + Mc(s);
    const h = -r.scrollTop;
    return Rt(l || o).direction === "rtl" && (c += xn(o.clientWidth, l ? l.clientWidth : 0) - a), { width: a, height: u, x: c, y: h };
  }(ee(e)));
}
const Xu = { getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: s, strategy: i } = e;
  const o = t === "clippingAncestors" ? function(u, c) {
    const h = c.get(u);
    if (h)
      return h;
    let d = En(u).filter((y) => _t(y) && ie(y) !== "body"), f = null;
    const m = Rt(u).position === "fixed";
    let g = m ? Tn(u) : u;
    for (; _t(g) && !Wo(g); ) {
      const y = Rt(g), _ = po(g);
      (m ? _ || f : _ || y.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = y : d = d.filter((v) => v !== g), g = Tn(g);
    }
    return c.set(u, d), d;
  }(n, this._c) : [].concat(t), r = [...o, s], l = r[0], a = r.reduce((u, c) => {
    const h = Fr(n, c, i);
    return u.top = xn(h.top, u.top), u.right = jr(h.right, u.right), u.bottom = jr(h.bottom, u.bottom), u.left = xn(h.left, u.left), u;
  }, Fr(n, l, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: s } = e;
  const i = Ut(t), o = ee(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ie(t) !== "body" || Wi(o)) && (r = ji(t)), Ut(t))) {
    const u = be(t);
    l = Le(t), a.x = u.x + t.clientLeft, a.y = u.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - r.scrollLeft * l.x + a.x, y: n.y * l.y - r.scrollTop * l.y + a.y };
}, isElement: _t, getDimensions: function(e) {
  return Ac(e);
}, getOffsetParent: zr, getDocumentElement: ee, getScale: Le, async getElementRects(e) {
  let { reference: n, floating: t, strategy: s } = e;
  const i = this.getOffsetParent || zr, o = this.getDimensions;
  return { reference: Ku(n, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Rt(e).direction === "rtl" };
function Ju(e, n, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: l = !1 } = s, a = i && !l, u = a || o ? [..._t(e) ? En(e) : e.contextElement ? En(e.contextElement) : [], ...En(n)] : [];
  u.forEach((f) => {
    a && f.addEventListener("scroll", t, { passive: !0 }), o && f.addEventListener("resize", t);
  });
  let c, h = null;
  if (r) {
    let f = !0;
    h = new ResizeObserver(() => {
      f || t(), f = !1;
    }), _t(e) && !l && h.observe(e), _t(e) || !e.contextElement || l || h.observe(e.contextElement), h.observe(n);
  }
  let d = l ? be(e) : null;
  return l && function f() {
    const m = be(e);
    !d || m.x === d.x && m.y === d.y && m.width === d.width && m.height === d.height || t(), d = m, c = requestAnimationFrame(f);
  }(), t(), () => {
    var f;
    u.forEach((m) => {
      a && m.removeEventListener("scroll", t), o && m.removeEventListener("resize", t);
    }), (f = h) == null || f.disconnect(), h = null, l && cancelAnimationFrame(c);
  };
}
const Zu = (e, n, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Xu, ...t }, o = { ...i.platform, _c: s };
  return Du(e, n, { ...i, platform: o });
};
var Ge, Ye, Ke, me, Z, li, Kn, Xn, mo, ci, Pc, ai, Dc, hi, Ic, ui, Hc, fi, Wc, di, jc, pi, Bc, Xe, mi, zc;
const ue = class extends Tt {
  constructor() {
    super(...arguments);
    b(this, Xn);
    b(this, ci);
    b(this, ai);
    b(this, hi);
    b(this, ui);
    b(this, fi);
    b(this, di);
    b(this, pi);
    b(this, mi);
    b(this, Ge, !1);
    b(this, Ye, void 0);
    b(this, Ke, 0);
    b(this, me, void 0);
    b(this, Z, void 0);
    b(this, li, void 0);
    b(this, Kn, void 0);
    x(this, "hideLater", () => {
      p(this, Xe).call(this), C(this, Ke, window.setTimeout(this.hide.bind(this), 100));
    });
    b(this, Xe, () => {
      clearTimeout(p(this, Ke)), C(this, Ke, 0);
    });
  }
  get isShown() {
    var t;
    return (t = p(this, me)) == null ? void 0 : t.classList.contains(ue.CLASS_SHOW);
  }
  get tooltip() {
    return p(this, me) || T(this, ai, Dc).call(this);
  }
  get trigger() {
    return p(this, li) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${ue.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tooltip");
  }
  show(t) {
    return this.setOptions(t), !p(this, Ge) && this.isHover && T(this, mi, zc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(ue.CLASS_SHOW), T(this, di, jc).call(this), !0;
  }
  hide() {
    var t, s;
    return (t = p(this, Kn)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (s = p(this, me)) == null || s.classList.remove(ue.CLASS_SHOW), !0;
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    p(this, Ge) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", p(this, Xe)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(t) {
    t instanceof Event && (t = { event: t });
    const { exclude: s } = t || {}, i = this.getAll().entries(), o = new Set(s || []);
    for (const [r, l] of i)
      o.has(r) || l.hide();
  }
};
let at = ue;
Ge = new WeakMap(), Ye = new WeakMap(), Ke = new WeakMap(), me = new WeakMap(), Z = new WeakMap(), li = new WeakMap(), Kn = new WeakMap(), Xn = new WeakSet(), mo = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
}, ci = new WeakSet(), Pc = function() {
  const t = T(this, Xn, mo).call(this);
  return C(this, Z, document.createElement("div")), p(this, Z).style.position = this.options.strategy, p(this, Z).style.width = `${t}px`, p(this, Z).style.height = `${t}px`, p(this, Z).style.transform = "rotate(45deg)", p(this, Z);
}, ai = new WeakSet(), Dc = function() {
  var i;
  const t = ue.TOOLTIP_CLASS;
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
  if (this.options.arrow && (s == null || s.append(T(this, ci, Pc).call(this))), !s)
    throw new Error("Tooltip: Cannot find tooltip element");
  return s.style.width = "max-content", s.style.position = "absolute", s.style.top = "0", s.style.left = "0", document.body.appendChild(s), C(this, me, s), s;
}, hi = new WeakSet(), Ic = function() {
  var r;
  const t = T(this, Xn, mo).call(this), { strategy: s, placement: i } = this.options, o = {
    middleware: [Gu(t), qu()],
    strategy: s,
    placement: i
  };
  return this.options.arrow && p(this, Z) && ((r = o.middleware) == null || r.push(Bu({ element: p(this, Z) }))), o;
}, ui = new WeakSet(), Hc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, fi = new WeakSet(), Wc = function(t) {
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
}, di = new WeakSet(), jc = function() {
  const t = T(this, hi, Ic).call(this), s = T(this, pi, Bc).call(this);
  C(this, Kn, Ju(s, this.tooltip, () => {
    Zu(s, this.tooltip, t).then(({ x: i, y: o, middlewareData: r, placement: l }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${o}px`
      });
      const a = l.split("-")[0], u = T(this, ui, Hc).call(this, a);
      if (r.arrow && p(this, Z)) {
        const { x: c, y: h } = r.arrow;
        Object.assign(p(this, Z).style, {
          left: c != null ? `${c}px` : "",
          top: h != null ? `${h}px` : "",
          [u]: `${-p(this, Z).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...T(this, fi, Wc).call(this, a)
        });
      }
    });
  }));
}, pi = new WeakSet(), Bc = function() {
  return p(this, Ye) || C(this, Ye, {
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
  }), p(this, Ye);
}, Xe = new WeakMap(), mi = new WeakSet(), zc = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", p(this, Xe)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), C(this, Ge, !0);
}, x(at, "NAME", "tooltip"), x(at, "TOOLTIP_CLASS", "tooltip"), x(at, "CLASS_SHOW", "show"), x(at, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), x(at, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  var s;
  const n = e.target, t = (s = n.closest) == null ? void 0 : s.call(n, at.MENU_SELECTOR);
  if (t) {
    const i = at.ensure(t);
    i.options.trigger === "click" && i.toggle();
  } else
    at.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const n = e.target, t = (i = n.closest) == null ? void 0 : i.call(n, at.MENU_SELECTOR);
  if (!t)
    return;
  const s = at.ensure(t);
  s.isHover && s.show();
});
var gi, Fc, yi, Uc, _i, Vc;
class Qu extends Tt {
  constructor() {
    super(...arguments);
    b(this, gi);
    b(this, yi);
    b(this, _i);
  }
  init() {
    k(this.element).on("submit", this.onSubmit.bind(this)).on("input mousedown change", this.onInput.bind(this));
  }
  enable(t = !0) {
    k(this.element).toggleClass("loading", !t);
  }
  disable() {
    this.enable(!1);
  }
  onInput(t) {
    const s = k(t.target).closest(".has-error");
    s.length && (s.removeClass("has-error"), s.closest(".form-group").find(`#${s.attr("id")}Tip`).remove());
  }
  onSubmit(t) {
    var o;
    t.preventDefault();
    const { element: s } = this, i = k.extend({}, this.options);
    this.emit("before", { event: t, element: s, options: i }, !1), ((o = i.beforeSubmit) == null ? void 0 : o.call(i, t, s, i)) !== !1 && (this.disable(), T(this, gi, Fc).call(this, new FormData(s)).finally(() => {
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
gi = new WeakSet(), Fc = async function(t) {
  var u, c;
  const { element: s, options: i } = this, { beforeSend: o } = i;
  if (o) {
    const h = o(t);
    h instanceof FormData && (t = h);
  }
  this.emit("send", { formData: t }, !1);
  let r, l, a;
  try {
    const h = await fetch(i.url || s.action, {
      method: s.method || "POST",
      body: t,
      credentials: "same-origin",
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    l = await h.text(), h.ok ? (a = JSON.parse(l), (!a || typeof a != "object") && (r = new Error("Invalid json format"))) : r = new Error(h.statusText);
  } catch (h) {
    r = h;
  }
  r ? (this.emit("error", { error: r, responseText: l }, !1), (u = i.onError) == null || u.call(i, r, l)) : T(this, _i, Vc).call(this, a), this.emit("complete", { result: a, error: r }, !1), (c = i.onComplete) == null || c.call(i, a, r);
}, yi = new WeakSet(), Uc = function(t) {
  var i;
  let s;
  Object.entries(t).forEach(([o, r]) => {
    Array.isArray(r) && (r = r.join(""));
    const l = document.getElementById(o), a = l ? k(l) : k(this.element).find(`[name="${o}"]`);
    if (!a.length)
      return;
    a.addClass("has-error");
    const u = a.closest(".form-group");
    if (u.length) {
      const c = document.getElementById(`${o}Tip`);
      let h = c ? k(c) : null;
      h || (h = k(`<div class="form-tip ajax-form-tip text-danger" id="${o}Tip"></div>`).appendTo(u)), h.empty().text(r);
    }
    s || (s = a);
  }), s && ((i = s[0]) == null || i.focus());
}, _i = new WeakSet(), Vc = function(t) {
  var a, u;
  const { options: s } = this, { message: i } = t;
  if (t.result === "success") {
    if (this.emit("success", { result: t }, !1), ((a = s.onSuccess) == null ? void 0 : a.call(s, t)) === !1)
      return;
    typeof i == "string" && i.length && k(document).trigger("zui.messager.show", { content: i, type: "success" });
  } else {
    if (this.emit("fail", { result: t }, !1), ((u = s.onFail) == null ? void 0 : u.call(s, t)) === !1)
      return;
    i && (typeof i == "string" && i.length ? k(document).trigger("zui.messager.show", { content: i, type: "danger" }) : typeof i == "object" && T(this, yi, Uc).call(this, i));
  }
  const o = t.closeModal || s.closeModal;
  o && k(this.element).trigger("zui.modal.hide", { target: typeof o == "string" ? o : void 0 });
  const r = t.callback || s.callback;
  if (typeof r == "string") {
    const c = r.indexOf("("), h = (c > 0 ? r.substring(0, c) : r).split(".");
    let d = window, f = h[0];
    h.length > 1 && (f = h[1], h[0] === "top" ? d = window.top : h[0] === "parent" ? d = window.parent : d = window[h[0]]);
    const m = d == null ? void 0 : d[f];
    if (typeof m == "function") {
      let g = [];
      return c > 0 && r[r.length - 1] == ")" ? g = JSON.parse("[" + r.substring(c + 1, r.length - 1) + "]") : g.push(t), m.apply(this, g);
    }
  } else
    r && typeof r == "object" && (r.target ? window[r.target] : window)[r.name].apply(this, Array.isArray(r.params) ? r.params : [r.params]);
  const l = t.load || s.load || t.locate;
  l && k(this.element).trigger("zui.locate", l);
}, x(Qu, "NAME", "ajaxform");
var ge, ye;
class Ur extends z {
  constructor(t) {
    super(t);
    b(this, ge, 0);
    b(this, ye, null);
    x(this, "_handleWheel", (t) => {
      const { wheelContainer: s } = this.props, i = t.target;
      if (!(!i || !s) && (typeof s == "string" && i.closest(s) || typeof s == "object")) {
        const o = (this.props.type === "horz" ? t.deltaX : t.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && t.preventDefault();
      }
    });
    x(this, "_handleMouseMove", (t) => {
      const { dragStart: s } = this.state;
      s && (p(this, ge) && cancelAnimationFrame(p(this, ge)), C(this, ge, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + i * this.props.scrollSize / this.props.clientSize), C(this, ge, 0);
      })), t.preventDefault());
    });
    x(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    x(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.scrollPos } }), t.stopPropagation();
    });
    x(this, "_handleClick", (t) => {
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
    t && (C(this, ye, typeof t == "string" ? document : t.current), p(this, ye).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), p(this, ye) && p(this, ye).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: h, scrollPos: d } = this, { dragStart: f } = this.state, m = {
      left: l,
      top: a,
      bottom: u,
      right: c,
      ...r
    }, g = {};
    return s === "horz" ? (m.height = i, m.width = t, g.width = this.barSize, g.left = Math.round(Math.min(h, d) * (t - g.width) / h)) : (m.width = i, m.height = t, g.height = this.barSize, g.top = Math.round(Math.min(h, d) * (t - g.height) / h)), /* @__PURE__ */ w(
      "div",
      {
        className: O("scrollbar", o, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": f
        }),
        style: m,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ w(
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
ge = new WeakMap(), ye = new WeakMap();
function tf(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function qc({ col: e, className: n, height: t, row: s, onRenderCell: i, style: o, outerStyle: r, children: l, outerClass: a, ...u }) {
  var I;
  const c = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...r
  }, { align: h, border: d } = e.setting, f = {
    justifyContent: h ? h === "left" ? "start" : h === "right" ? "end" : h : void 0,
    ...e.setting.cellStyle,
    ...o
  }, m = ["dtable-cell", a, e.setting.className, {
    "has-border-left": d === !0 || d === "left",
    "has-border-right": d === !0 || d === "right"
  }], g = ["dtable-cell-content", n], y = (I = s.data) == null ? void 0 : I[e.name], _ = [l ?? y ?? ""], v = i ? i(_, { row: s, col: e, value: y }, dt) : _, E = [], $ = [], A = {}, N = {};
  let L = "div";
  v == null || v.forEach((R) => {
    if (typeof R == "object" && R && !et(R) && ("html" in R || "className" in R || "style" in R || "attrs" in R || "children" in R || "tagName" in R)) {
      const W = R.outer ? E : $;
      R.html ? W.push(/* @__PURE__ */ w("div", { className: O("dtable-cell-html", R.className), style: R.style, dangerouslySetInnerHTML: { __html: R.html }, ...R.attrs ?? {} })) : (R.style && Object.assign(R.outer ? c : f, R.style), R.className && (R.outer ? m : g).push(R.className), R.children && W.push(R.children), R.attrs && Object.assign(R.outer ? A : N, R.attrs)), R.tagName && !R.outer && (L = R.tagName);
    } else
      $.push(R);
  });
  const M = L;
  return /* @__PURE__ */ w(
    "div",
    {
      className: O(m),
      style: c,
      "data-col": e.name,
      ...u,
      ...A,
      children: [
        $.length > 0 && /* @__PURE__ */ w(M, { className: O(g), style: f, ...N, children: $ }),
        E
      ]
    }
  );
}
function Ki({ row: e, className: n, top: t = 0, left: s = 0, width: i, height: o, cols: r, CellComponent: l = qc, onRenderCell: a }) {
  return /* @__PURE__ */ w("div", { className: O("dtable-cells", n), style: { top: t, left: s, width: i, height: o }, children: r.map((u) => u.visible ? /* @__PURE__ */ w(
    l,
    {
      col: u,
      row: e,
      onRenderCell: a
    },
    u.name
  ) : null) });
}
function Gc({
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
  CellComponent: d = qc,
  onRenderCell: f,
  style: m,
  ...g
}) {
  let y = null;
  i != null && i.length && (y = /* @__PURE__ */ w(
    Ki,
    {
      className: "dtable-fixed-left",
      cols: i,
      width: l,
      row: e,
      CellComponent: d,
      onRenderCell: f
    }
  ));
  let _ = null;
  r != null && r.length && (_ = /* @__PURE__ */ w(
    Ki,
    {
      className: "dtable-flexable",
      cols: r,
      left: l - h,
      width: Math.max(a, u),
      row: e,
      CellComponent: d,
      onRenderCell: f
    }
  ));
  let v = null;
  o != null && o.length && (v = /* @__PURE__ */ w(
    Ki,
    {
      className: "dtable-fixed-right",
      cols: o,
      left: l + a,
      width: c,
      row: e,
      CellComponent: d,
      onRenderCell: f
    }
  ));
  const E = { top: t, height: s, lineHeight: `${s - 2}px`, ...m };
  return /* @__PURE__ */ w(
    "div",
    {
      className: O("dtable-row", n),
      style: E,
      "data-id": e.id,
      ...g,
      children: [
        y,
        _,
        v
      ]
    }
  );
}
function ef({ height: e, onRenderRow: n, ...t }) {
  const s = {
    height: e,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (n) {
    const i = n({ props: s }, dt);
    i && Object.assign(s, i);
  }
  return /* @__PURE__ */ w("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ w(Gc, { ...s }) });
}
function nf({
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
  return n = { ...n, top: t, height: i }, /* @__PURE__ */ w("div", { className: O("dtable-rows", e), style: n, children: s.map((u) => {
    const c = {
      className: `dtable-row-${u.index % 2 ? "odd" : "even"}`,
      row: u,
      top: u.top - r,
      height: o,
      ...a
    }, h = l == null ? void 0 : l({ props: c, row: u }, dt);
    return h && Object.assign(c, h), /* @__PURE__ */ w(Gc, { ...c });
  }) });
}
const Is = /* @__PURE__ */ new Map(), Hs = [];
function Yc(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && Is.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Is.set(t, e), n != null && n.buildIn && !Hs.includes(t) && Hs.push(t);
}
function Se(e, n) {
  Yc(e, n);
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
function Kc(e) {
  return Is.delete(e);
}
function sf(e) {
  if (typeof e == "string") {
    const n = Is.get(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Xc(e, n, t) {
  return n.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = sf(s);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && Xc(e, i.plugins, t), e.push(i), t.add(i.name)));
  }), e;
}
function of(e = [], n = !0) {
  return n && Hs.length && e.unshift(...Hs), e != null && e.length ? Xc([], e, /* @__PURE__ */ new Set()) : [];
}
function Vr() {
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
var ds, _e, Je, Jt, St, Zt, G, gt, Ct, Ze, Jn, Zn, Ht, Qe, tn, wi, Jc, bi, Zc, vi, Qc, xi, ta, Qn, go, Ei, Si, ts, es, Ci, $i, ki, ea, Ri, na, Ti, sa;
let rf = (ds = class extends z {
  constructor(t) {
    super(t);
    b(this, wi);
    b(this, bi);
    b(this, vi);
    b(this, xi);
    b(this, Qn);
    b(this, ki);
    b(this, Ri);
    b(this, Ti);
    x(this, "ref", ve());
    b(this, _e, 0);
    b(this, Je, void 0);
    b(this, Jt, !1);
    b(this, St, void 0);
    b(this, Zt, void 0);
    b(this, G, []);
    b(this, gt, void 0);
    b(this, Ct, /* @__PURE__ */ new Map());
    b(this, Ze, {});
    b(this, Jn, void 0);
    b(this, Zn, []);
    x(this, "updateLayout", () => {
      p(this, _e) && cancelAnimationFrame(p(this, _e)), C(this, _e, requestAnimationFrame(() => {
        C(this, gt, void 0), this.forceUpdate(), C(this, _e, 0);
      }));
    });
    b(this, Ht, (t, s) => {
      s = s || t.type;
      const i = p(this, Ct).get(s);
      if (i != null && i.length) {
        for (const o of i)
          if (o.call(this, t) === !1) {
            t.stopPropagation(), t.preventDefault();
            break;
          }
      }
    });
    b(this, Qe, (t) => {
      p(this, Ht).call(this, t, `window_${t.type}`);
    });
    b(this, tn, (t) => {
      p(this, Ht).call(this, t, `document_${t.type}`);
    });
    b(this, Ei, (t, s) => {
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
    b(this, Si, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), p(this, G).forEach((i) => {
      i.onRenderHeaderRow && (t.props = i.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    b(this, ts, (t, s, i) => {
      const { row: o, col: r } = s;
      s.value = this.getCellValue(o, r), t[0] = s.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[l] && (t = r.setting[l].call(this, t, s, i)), this.options[l] && (t = this.options[l].call(this, t, s, i)), p(this, G).forEach((a) => {
        a[l] && (t = a[l].call(this, t, s, i));
      }), t;
    });
    b(this, es, (t, s) => {
      s === "horz" ? this.scroll({ scrollLeft: t }) : this.scroll({ scrollTop: t });
    });
    b(this, Ci, (t) => {
      var l, a, u, c, h;
      const s = this.getPointerInfo(t);
      if (!s)
        return;
      const { rowID: i, colName: o, cellElement: r } = s;
      if (i === "HEADER")
        r && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: o, element: r }), p(this, G).forEach((d) => {
          var f;
          (f = d.onHeaderCellClick) == null || f.call(this, t, { colName: o, element: r });
        }));
      else {
        const { rowElement: d } = s, f = this.layout.visibleRows.find((m) => m.id === i);
        if (r) {
          if (((a = this.options.onCellClick) == null ? void 0 : a.call(this, t, { colName: o, rowID: i, rowInfo: f, element: r, rowElement: d })) === !0)
            return;
          for (const m of p(this, G))
            if (((u = m.onCellClick) == null ? void 0 : u.call(this, t, { colName: o, rowID: i, rowInfo: f, element: r, rowElement: d })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, t, { rowID: i, rowInfo: f, element: d })) === !0)
          return;
        for (const m of p(this, G))
          if (((h = m.onRowClick) == null ? void 0 : h.call(this, t, { rowID: i, rowInfo: f, element: d })) === !0)
            return;
      }
    });
    b(this, $i, (t) => {
      const s = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    });
    C(this, Je, t.id ?? `dtable-${os(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, C(this, Zt, Object.freeze(of(t.plugins))), p(this, Zt).forEach((s) => {
      var l;
      const { methods: i, data: o, state: r } = s;
      i && Object.entries(i).forEach(([a, u]) => {
        typeof u == "function" && Object.assign(this, { [a]: u.bind(this) });
      }), o && Object.assign(p(this, Ze), o.call(this)), r && Object.assign(this.state, r.call(this)), (l = s.onCreate) == null || l.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = p(this, gt)) == null ? void 0 : t.options) || p(this, St) || Vr();
  }
  get plugins() {
    return p(this, G);
  }
  get layout() {
    return p(this, gt);
  }
  get id() {
    return p(this, Je);
  }
  get data() {
    return p(this, Ze);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    C(this, St, void 0);
  }
  componentDidMount() {
    if (p(this, Jt) ? this.forceUpdate() : T(this, Qn, go).call(this), p(this, G).forEach((t) => {
      let { events: s } = t;
      s && (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([i, o]) => {
        o && this.on(i, o);
      }));
    }), this.on("click", p(this, Ci)), this.on("keydown", p(this, $i)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const s = new ResizeObserver(this.updateLayout);
          s.observe(t), C(this, Jn, s);
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
    p(this, Jt) ? T(this, Qn, go).call(this) : p(this, G).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    var s;
    (s = p(this, Jn)) == null || s.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const i of p(this, Ct).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), p(this, Qe)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), p(this, tn)) : t.removeEventListener(i, p(this, Ht));
    p(this, G).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), p(this, Zt).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), C(this, Ze, {}), p(this, Ct).clear();
  }
  on(t, s, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = p(this, Ct).get(t);
    o ? o.push(s) : (p(this, Ct).set(t, [s]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), p(this, Qe)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), p(this, tn)) : (r = this.ref.current) == null || r.addEventListener(t, p(this, Ht)));
  }
  off(t, s, i) {
    var l;
    i && (t = `${i}_${t}`);
    const o = p(this, Ct).get(t);
    if (!o)
      return;
    const r = o.indexOf(s);
    r >= 0 && o.splice(r, 1), o.length || (p(this, Ct).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), p(this, Qe)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), p(this, tn)) : (l = this.ref.current) == null || l.removeEventListener(t, p(this, Ht)));
  }
  emitCustomEvent(t, s) {
    p(this, Ht).call(this, s instanceof Event ? s : new CustomEvent(t, { detail: s }), t);
  }
  scroll(t, s) {
    const { scrollLeft: i, scrollTop: o, rowsHeightTotal: r, rowsHeight: l, rowHeight: a, colsInfo: { scrollWidth: u, scrollColsWidth: c } } = this.layout, { to: h } = t;
    let { scrollLeft: d, scrollTop: f } = t;
    if (h === "up" || h === "down")
      f = o + (h === "down" ? 1 : -1) * Math.floor(l / a) * a;
    else if (h === "left" || h === "right")
      d = i + (h === "right" ? 1 : -1) * u;
    else if (h === "home")
      f = 0;
    else if (h === "end")
      f = r - l;
    else if (h === "left-begin")
      d = 0;
    else if (h === "right-end")
      d = c - u;
    else {
      const { offsetLeft: g, offsetTop: y } = t;
      typeof g == "number" && (d = i + g), typeof y == "number" && (d = o + y);
    }
    const m = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, c - u)), d !== i && (m.scrollLeft = d)), typeof f == "number" && (f = Math.max(0, Math.min(f, r - l)), f !== o && (m.scrollTop = f)), Object.keys(m).length ? (this.setState(m, () => {
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
    if (!p(this, St))
      return;
    typeof t == "function" && (s = t, t = {});
    const { dirtyType: i, state: o } = t;
    if (i === "layout")
      C(this, gt, void 0);
    else if (i === "options") {
      if (C(this, St, void 0), !p(this, gt))
        return;
      C(this, gt, void 0);
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
    return ne(p(this, Zn), t, s, i, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((s) => s.name === t);
  }
  render() {
    const t = T(this, Ti, sa).call(this), { className: s, rowHover: i, colHover: o, cellHover: r, bordered: l, striped: a, scrollbarHover: u } = this.options, c = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, h = ["dtable", s, {
      "dtable-hover-row": i,
      "dtable-hover-col": o,
      "dtable-hover-cell": r,
      "dtable-bordered": l,
      "dtable-striped": a,
      "dtable-scrolled-down": ((t == null ? void 0 : t.scrollTop) ?? 0) > 0,
      "scrollbar-hover": u
    }], d = [];
    return t && p(this, G).forEach((f) => {
      var g;
      const m = (g = f.onRender) == null ? void 0 : g.call(this, t);
      m && (m.style && Object.assign(c, m.style), m.className && h.push(m.className), m.children && d.push(m.children));
    }), /* @__PURE__ */ w(
      "div",
      {
        id: p(this, Je),
        className: O(h),
        style: c,
        ref: this.ref,
        tabIndex: -1,
        children: [
          t && T(this, wi, Jc).call(this, t),
          t && T(this, bi, Zc).call(this, t),
          t && T(this, vi, Qc).call(this, t),
          t && T(this, xi, ta).call(this, t)
        ]
      }
    );
  }
}, _e = new WeakMap(), Je = new WeakMap(), Jt = new WeakMap(), St = new WeakMap(), Zt = new WeakMap(), G = new WeakMap(), gt = new WeakMap(), Ct = new WeakMap(), Ze = new WeakMap(), Jn = new WeakMap(), Zn = new WeakMap(), Ht = new WeakMap(), Qe = new WeakMap(), tn = new WeakMap(), wi = new WeakSet(), Jc = function(t) {
  const { header: s, colsInfo: i, headerHeight: o, scrollLeft: r } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ w(
      ef,
      {
        scrollLeft: r,
        height: o,
        onRenderCell: p(this, ts),
        onRenderRow: p(this, Si),
        ...i
      }
    );
  const l = Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ w(
    ro,
    {
      className: "dtable-header",
      style: { height: o },
      renders: l,
      generateArgs: [t],
      generatorThis: this
    }
  );
}, bi = new WeakSet(), Zc = function(t) {
  const { headerHeight: s, rowsHeight: i, visibleRows: o, rowHeight: r, colsInfo: l, scrollLeft: a, scrollTop: u } = t;
  return /* @__PURE__ */ w(
    nf,
    {
      top: s,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: a,
      scrollTop: u,
      onRenderCell: p(this, ts),
      onRenderRow: p(this, Ei),
      ...l
    }
  );
}, vi = new WeakSet(), Qc = function(t) {
  const { footer: s } = t;
  if (!s)
    return null;
  const i = typeof s == "function" ? s.call(this, t) : Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ w(
    ro,
    {
      className: "dtable-footer",
      style: { height: t.footerHeight, top: t.rowsHeight + t.headerHeight },
      renders: i,
      generateArgs: [t],
      generatorThis: this,
      generators: t.footerGenerators
    }
  );
}, xi = new WeakSet(), ta = function(t) {
  const s = [], { scrollLeft: i, colsInfo: o, scrollTop: r, rowsHeight: l, rowsHeightTotal: a, footerHeight: u } = t, { scrollColsWidth: c, scrollWidth: h } = o, { scrollbarSize: d = 12, horzScrollbarPos: f } = this.options;
  return c > h && s.push(
    /* @__PURE__ */ w(
      Ur,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: c,
        clientSize: h,
        onScroll: p(this, es),
        left: o.fixedLeftWidth,
        bottom: (f === "inside" ? 0 : -d) + u,
        size: d,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), a > l && s.push(
    /* @__PURE__ */ w(
      Ur,
      {
        type: "vert",
        scrollPos: r,
        scrollSize: a,
        clientSize: l,
        onScroll: p(this, es),
        right: 0,
        size: d,
        top: t.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), s.length ? s : null;
}, Qn = new WeakSet(), go = function() {
  var t;
  C(this, Jt, !1), (t = this.options.afterRender) == null || t.call(this), p(this, G).forEach((s) => {
    var i;
    return (i = s.afterRender) == null ? void 0 : i.call(this);
  });
}, Ei = new WeakMap(), Si = new WeakMap(), ts = new WeakMap(), es = new WeakMap(), Ci = new WeakMap(), $i = new WeakMap(), ki = new WeakSet(), ea = function() {
  if (p(this, St))
    return !1;
  const s = { ...Vr(), ...p(this, Zt).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return C(this, St, s), C(this, G, p(this, Zt).reduce((i, o) => {
    const { when: r, options: l } = o;
    return (!r || r(s)) && (i.push(o), l && Object.assign(s, typeof l == "function" ? l.call(this, s) : l)), i;
  }, [])), C(this, Zn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Ri = new WeakSet(), na = function() {
  var Uo, Vo;
  const { plugins: t } = this;
  let s = p(this, St);
  const i = {
    flex: /* @__PURE__ */ w("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ w("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((P) => {
    var it;
    const F = (it = P.beforeLayout) == null ? void 0 : it.call(this, s);
    F && (s = { ...s, ...F }), Object.assign(i, P.footer);
  });
  let o = s.width, r = 0;
  if (typeof o == "function" && (o = o.call(this)), o === "100%") {
    const { parent: P } = this;
    if (P)
      r = P.clientWidth;
    else {
      r = 0, C(this, Jt, !0);
      return;
    }
  } else
    o !== "auto" && (r = o ?? 0);
  const { defaultColWidth: l, minColWidth: a, maxColWidth: u } = s, c = [], h = [], d = [], f = {}, m = [], g = [];
  let y = 0, _ = 0, v = 0;
  s.cols.forEach((P) => {
    if (P.hidden)
      return;
    const F = P.type || "", it = {
      fixed: !1,
      flex: !1,
      width: l,
      minWidth: a,
      maxWidth: u,
      ...P,
      type: F
    }, H = {
      name: it.name,
      type: F,
      setting: it,
      flex: 0,
      left: 0,
      width: it.width || 0,
      realWidth: 0,
      visible: !0,
      index: m.length
    };
    t.forEach((qo) => {
      var Go, Yo;
      const cs = (Go = qo.colTypes) == null ? void 0 : Go[F];
      if (cs) {
        const Ko = typeof cs == "function" ? cs(H) : cs;
        Ko && Object.assign(it, Ko, P);
      }
      (Yo = qo.onAddCol) == null || Yo.call(this, H);
    });
    const { fixed: $e, flex: ke, width: rn = l } = it;
    H.flex = $e ? 0 : ke === !0 ? 1 : typeof ke == "number" ? ke : 0, H.width = tf(rn < 1 ? Math.round(rn * r) : rn, it.minWidth, it.maxWidth), H.realWidth = H.realWidth || H.width, $e === "left" ? (H.left = y, y += H.width, c.push(H)) : $e === "right" ? (H.left = _, _ += H.width, h.push(H)) : (H.left = v, v += H.width, d.push(H)), H.flex && g.push(H), m.push(H), f[H.name] = H;
  });
  const E = y + v + _;
  o === "auto" && (r = E);
  const { data: $, rowKey: A = "id", rowHeight: N } = s, L = [], M = (P, F, it) => {
    var $e, ke;
    const H = { data: it ?? { [A]: P }, id: P, index: L.length, top: 0 };
    if (it || (H.lazy = !0), L.push(H), (($e = s.onAddRow) == null ? void 0 : $e.call(this, H, F)) !== !1) {
      for (const rn of t)
        if (((ke = rn.onAddRow) == null ? void 0 : ke.call(this, H, F)) === !1)
          return;
    }
  };
  if (typeof $ == "number")
    for (let P = 0; P < $; P++)
      M(`${P}`, P);
  else
    Array.isArray($) && $.forEach((P, F) => {
      typeof P == "object" ? M(`${P[A] ?? ""}`, F, P) : M(`${P ?? ""}`, F);
    });
  let I = L;
  const R = {};
  if (s.onAddRows) {
    const P = s.onAddRows.call(this, I);
    P && (I = P);
  }
  for (const P of t) {
    const F = (Uo = P.onAddRows) == null ? void 0 : Uo.call(this, I);
    F && (I = F);
  }
  I.forEach((P, F) => {
    R[P.id] = P, P.index = F, P.top = P.index * N;
  });
  const { header: W, footer: K } = s, st = W ? s.headerHeight || N : 0, U = K ? s.footerHeight || N : 0;
  let D = s.height, V = 0;
  const wt = I.length * N, le = st + U + wt;
  if (typeof D == "function" && (D = D.call(this, le)), D === "auto")
    V = le;
  else if (typeof D == "object")
    V = Math.min(D.max, Math.max(D.min, le));
  else if (D === "100%") {
    const { parent: P } = this;
    if (P)
      V = P.clientHeight;
    else {
      V = 0, C(this, Jt, !0);
      return;
    }
  } else
    V = D;
  const ce = V - st - U, ae = r - y - _, Nt = {
    options: s,
    allRows: L,
    width: r,
    height: V,
    rows: I,
    rowsMap: R,
    rowHeight: N,
    rowsHeight: ce,
    rowsHeightTotal: wt,
    header: W,
    footer: K,
    footerGenerators: i,
    headerHeight: st,
    footerHeight: U,
    colsMap: f,
    colsList: m,
    flexCols: g,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: h,
      scrollCols: d,
      fixedLeftWidth: y,
      scrollWidth: ae,
      scrollColsWidth: v,
      fixedRightWidth: _
    }
  }, Ce = (Vo = s.onLayout) == null ? void 0 : Vo.call(this, Nt);
  Ce && Object.assign(Nt, Ce), t.forEach((P) => {
    if (P.onLayout) {
      const F = P.onLayout.call(this, Nt);
      F && Object.assign(Nt, F);
    }
  }), C(this, gt, Nt);
}, Ti = new WeakSet(), sa = function() {
  (T(this, ki, ea).call(this) || !p(this, gt)) && T(this, Ri, na).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: s } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: o, scrollWidth: r, scrollColsWidth: l } } = t;
  if (i.length) {
    const E = r - l;
    if (E > 0) {
      const $ = i.reduce((N, L) => N + L.flex, 0);
      let A = 0;
      i.forEach((N) => {
        const L = Math.min(E - A, Math.ceil(E * (N.flex / $)));
        N.realWidth = L + N.width, A += N.realWidth;
      });
    } else
      i.forEach(($) => {
        $.realWidth = $.width;
      });
  }
  s = Math.min(Math.max(0, l - r), s);
  let a = 0;
  o.forEach((E) => {
    E.left = a, a += E.realWidth, E.visible = E.left + E.realWidth >= s && E.left <= s + r;
  });
  const { rowsHeightTotal: u, rowsHeight: c, rows: h, rowHeight: d } = t, f = Math.min(Math.max(0, u - c), this.state.scrollTop), m = Math.floor(f / d), g = f + c, y = Math.min(h.length, Math.ceil(g / d)), _ = [], { rowDataGetter: v } = this.options;
  for (let E = m; E < y; E++) {
    const $ = h[E];
    $.lazy && v && ($.data = v([$.id])[0], $.lazy = !1), _.push($);
  }
  return t.visibleRows = _, t.scrollTop = f, t.scrollLeft = s, t;
}, x(ds, "addPlugin", Yc), x(ds, "removePlugin", Kc), ds);
function qr(e, n) {
  n !== void 0 ? e.data.hoverCol = n : n = e.data.hoverCol;
  const { current: t } = e.ref;
  if (!t)
    return;
  const s = "dtable-col-hover";
  t.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof n == "string" && n.length && t.querySelectorAll(`.dtable-cell[data-col="${n}"]`).forEach((i) => i.classList.add(s));
}
const lf = {
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
      qr(this, s);
    },
    mouseleave() {
      qr(this, !1);
    }
  }
}, cf = Se(lf, { buildIn: !0 });
function af(e, n) {
  var r, l;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: i } = this.options, o = (a, u) => {
    i && !i.call(this, a) || !!t[a] === u || (u ? t[a] = !0 : delete t[a], s[a] = u);
  };
  if (e === void 0 ? (n === void 0 && (n = !ia.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: a }) => {
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
function hf(e) {
  return this.state.checkedRows[e] ?? !1;
}
function ia() {
  var t, s;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((i, o) => i + (n.call(this, o.id) ? 1 : 0), 0)) : e === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function uf() {
  return Object.keys(this.state.checkedRows);
}
const ff = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto"
  },
  when: (e) => !!e.checkable,
  options(e) {
    return e.checkable === "auto" && (e.checkable = !!e.cols.some((n) => n.checkbox)), e;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: af,
    isRowChecked: hf,
    isAllRowChecked: ia,
    getChecks: uf
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
        /* @__PURE__ */ w("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ w("input", { type: "checkbox", checked: e }) })
      ];
    },
    checkedInfo(e, n) {
      const t = this.getChecks().length, s = [];
      return t && s.push(this.i18n("checkedCountInfo", { selected: t })), s.push(this.i18n("totalCountInfo", { total: n.allRows.length })), [
        /* @__PURE__ */ w("div", { children: s.join(", ") })
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
      const a = this.isRowChecked(s), u = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, a, s)) ?? /* @__PURE__ */ w("input", { type: "checkbox", checked: a });
      e.unshift(u), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var r;
    const { id: s } = n, { checkbox: i } = t.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const l = this.isAllRowChecked(), a = ((r = this.options.checkboxRender) == null ? void 0 : r.call(this, l, s)) ?? /* @__PURE__ */ w("input", { type: "checkbox", checked: l });
      e.unshift(a), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: n }) {
    if (this.isRowChecked(n.id))
      return { className: O(e.className, "is-checked") };
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
}, df = Se(ff);
var oa = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(oa || {});
function yo(e) {
  const n = this.data.nestedMap.get(e);
  if (!n || n.state !== "")
    return n ?? { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, s = n.children && t && t[e];
  let i = !1, { parent: o } = n;
  for (; o; ) {
    const r = yo.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return n.state = i ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? yo.call(this, n.parent).level + 1 : 0, n;
}
function pf(e, n) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !ra.call(this)), n) {
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
function ra() {
  const e = this.data.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function la(e, n = 0, t, s = 0) {
  var i;
  t || (t = [...e.keys()]);
  for (const o of t) {
    const r = e.get(o);
    r && (r.level === s && (r.order = n++), (i = r.children) != null && i.length && (n = la(e, n, r.children, s + 1)));
  }
  return n;
}
function ca(e, n, t, s) {
  const i = e.getNestedRowInfo(n);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = t, ca(e, o, t, s);
  }), i;
}
function aa(e, n, t, s, i) {
  var l;
  const o = e.getNestedRowInfo(n);
  if (!o || o.state === "")
    return;
  ((l = o.children) == null ? void 0 : l.every((a) => {
    const u = !!(s[a] !== void 0 ? s[a] : i[a]);
    return t === u;
  })) && (s[n] = t), o.parent && aa(e, o.parent, t, s, i);
}
const mf = {
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
        const r = ca(this, i, o, s);
        r != null && r.parent && aa(this, r.parent, o, s, t);
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
    toggleRow: pf,
    isAllCollapsed: ra,
    getNestedRowInfo: yo
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var i, o;
    const { nestedMap: n } = this.data, t = (i = e.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"], s = n.get(e.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = t, (o = e.data) != null && o[this.options.asParentKey ?? "asParent"] && (s.children = []), n.set(e.id, s), t) {
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
    ), la(this.data.nestedMap), e.sort((n, t) => {
      const s = this.getNestedRowInfo(n.id), i = this.getNestedRowInfo(t.id), o = (s.order ?? 0) - (i.order ?? 0);
      return o === 0 ? n.index - t.index : o;
    }), e;
  },
  onRenderCell(e, { col: n, row: t }) {
    var l;
    const { id: s, data: i } = t, { nestedToggle: o } = n.setting, r = this.getNestedRowInfo(s);
    if (o && (r.children || r.parent) && e.unshift(((l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, r, s, n, i)) ?? /* @__PURE__ */ w("a", { role: "button", className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ w("span", { className: "toggle-icon" }) })), r.level) {
      let { nestedIndent: a = o } = n.setting;
      a && (a === !0 && (a = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ w("div", { className: "dtable-nested-indent", style: { width: a * r.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: n, col: t }) {
    var i;
    const { id: s } = n;
    return t.setting.nestedToggle && e.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, t, void 0)) ?? /* @__PURE__ */ w("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ w("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: n }) {
    const t = this.getNestedRowInfo(n.id);
    return {
      className: O(e.className, `is-${t.state}`),
      "data-parent": t.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = O(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, gf = Se(mf);
function ha(e, n, t) {
  if (!e)
    return;
  typeof e == "function" && (e = e(n)), typeof e == "string" && (e = { url: e });
  const { url: s, ...i } = e;
  return /* @__PURE__ */ w("a", { href: pt(s, n.row.data), ...i, children: t });
}
function jo(e, n, t) {
  var s;
  if (e != null)
    return t = t ?? ((s = n.row.data) == null ? void 0 : s[n.col.name]), typeof e == "function" ? e(t, n) : pt(e, t);
}
function ua(e, n, t) {
  var s;
  return t = t ?? ((s = n.row.data) == null ? void 0 : s[n.col.name]), e === !1 ? t : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(t, n)), uo(t, e));
}
function fa(e, n) {
  const { link: t } = n.col.setting, s = ha(t, n, e[0]);
  return s && (e[0] = s), e;
}
function da(e, n) {
  const { format: t } = n.col.setting;
  return t && (e[0] = jo(t, n, e[0])), e;
}
function pa(e, n) {
  const { map: t } = n.col.setting;
  return typeof t == "function" ? e[0] = t(e[0], n) : typeof t == "object" && t && (e[0] = t[e[0]] ?? e[0]), e;
}
function dn(e, n, t = "[yyyy-]MM-dd hh:mm") {
  const { format: s = t } = n.col.setting;
  return e[0] = ua(s, n, e[0]), e;
}
function _o(e, n, t = !1) {
  const { html: s = t } = n.col.setting;
  if (s === !1)
    return e;
  const i = e[0], o = s === !0 ? i : jo(s, n, i);
  return e[0] = {
    html: o
  }, e;
}
const yf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, n) {
        return _o(e, n, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(e, { col: n }) {
        const { circleSize: t = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = n.setting, r = (t - s) / 2, l = t / 2, a = e[0];
        return e[0] = /* @__PURE__ */ w("svg", { width: t, height: t, children: [
          /* @__PURE__ */ w("circle", { cx: l, cy: l, r, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ w("circle", { cx: l, cy: l, r, "stroke-width": s, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - a) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ w("text", { x: l, y: l + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${r}px` }, children: Math.round(a) })
        ] }), e;
      }
    },
    datetime: {
      onRenderCell(e, n) {
        return dn(e, n);
      }
    },
    date: {
      onRenderCell(e, n) {
        return dn(e, n, "yyyy-MM-dd");
      }
    },
    time: {
      onRenderCell(e, n) {
        return dn(e, n, "hh:mm");
      }
    }
  },
  onRenderCell(e, n) {
    const { formatDate: t, html: s } = n.col.setting;
    return t && (e = dn(e, n, t)), e = pa(e, n), e = da(e, n), s ? e = _o(e, n) : e = fa(e, n), e;
  }
}, _f = Se(yf, { buildIn: !0 });
function Xi(e, { row: n, col: t }) {
  const { data: s } = n, i = s ? s[t.name] : void 0;
  if (!(i != null && i.length))
    return e;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${t.name}Avatar`, avatarProps: l, avatarCodeKey: a, avatarNameKey: u = `${t.name}Name` } = t.setting, c = (s ? s[u] : i) || e[0], h = {
    size: "xs",
    className: O(o, l == null ? void 0 : l.className, "flex-none"),
    src: s ? s[r] : void 0,
    text: c,
    code: a ? s ? s[a] : void 0 : i,
    ...l
  };
  if (e[0] = /* @__PURE__ */ w(pc, { ...h }), t.type === "avatarBtn") {
    const { avatarBtnProps: d } = t.setting, f = typeof d == "function" ? d(t, n) : d;
    e[0] = /* @__PURE__ */ w("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      e[0],
      /* @__PURE__ */ w("div", { children: c })
    ] });
  } else
    t.type === "avatarName" && (e[0] = /* @__PURE__ */ w("div", { className: "flex items-center gap-1", children: [
      e[0],
      /* @__PURE__ */ w("span", { children: c })
    ] }));
  return e;
}
const wf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Xi
    },
    avatarBtn: {
      onRenderCell: Xi
    },
    avatarName: {
      onRenderCell: Xi
    }
  }
}, bf = Se(wf, { buildIn: !0 }), vf = {
  name: "sort-type",
  onRenderHeaderCell(e, n) {
    const { row: t, col: s } = n, { sortType: i } = s.setting;
    if (i) {
      const o = i === !0 ? "none" : i;
      e.push(
        /* @__PURE__ */ w("div", { className: `dtable-sort dtable-sort-${o}` }),
        { outer: !0, attrs: { "data-sort": o } }
      );
      let { sortLink: r = this.options.sortLink } = s.setting;
      if (r) {
        const l = o === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, s, l, o)), typeof r == "string" && (r = { url: r });
        const { url: a, ...u } = r;
        e.push(/* @__PURE__ */ w("a", { href: pt(a, t.data), ...u }));
      }
    }
    return e;
  }
}, xf = Se(vf, { buildIn: !0 }), Ef = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: oa,
  avatar: bf,
  checkable: df,
  colHover: cf,
  nested: gf,
  renderDatetime: ua,
  renderDatetimeCell: dn,
  renderFormat: jo,
  renderFormatCell: da,
  renderHtmlCell: _o,
  renderLink: ha,
  renderLinkCell: fa,
  renderMapCell: pa,
  rich: _f,
  sortType: xf
}, Symbol.toStringTag, { value: "Module" }));
class ln extends X {
}
x(ln, "NAME", "dtable"), x(ln, "Component", rf), x(ln, "definePlugin", Se), x(ln, "removePlugin", Kc), x(ln, "plugins", Ef);
var ct;
class pn extends Tt {
  constructor() {
    super(...arguments);
    b(this, ct, void 0);
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const t = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    t != null && t.startsWith("#") && C(this, ct, document.querySelector(t)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), p(this, ct) && (this.addActive(p(this, ct).parentElement, p(this, ct)), p(this, ct).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const t = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    t != null && t.startsWith("#") && C(this, ct, document.querySelector(t)), p(this, ct) && (this.addActive(p(this, ct).parentElement, p(this, ct)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
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
ct = new WeakMap(), x(pn, "NAME", "NavTabs"), x(pn, "NAV_CLASS", "nav-tabs"), x(pn, "EVENTS", !0), x(pn, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (e) => {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new pn(e.target).showTarget());
});
export {
  k as $,
  pr as ActionMenu,
  gr as ActionMenuNested,
  Qu as AjaxForm,
  Ar as Avatar,
  Lr as BtnGroup,
  yr as Button,
  ot as ContextMenu,
  ln as DTable,
  tt as Dropdown,
  bo as EventBus,
  _r as Menu,
  hn as Messager,
  fn as Modal,
  Q as ModalBase,
  vn as ModalTrigger,
  Nr as Nav,
  pn as NavTabs,
  Or as Pager,
  Dr as Picker,
  Cr as ProgressCircle,
  $r as Switch,
  Ot as TIME_DAY,
  Ir as Toolbar,
  at as Tooltip,
  al as addI18nMap,
  If as browser,
  Mr as calculateTimestamp,
  kf as cash,
  $f as convertBytes,
  lt as createDate,
  Cf as formatBytes,
  uo as formatDate,
  Vf as formatDateSpan,
  pt as formatString,
  hl as getLang,
  Ra as getLangCode,
  qf as getTimeBeforeDesc,
  ne as i18n,
  Uf as isDBY,
  zi as isObject,
  rs as isSameDay,
  $u as isSameMonth,
  jf as isSameWeek,
  ho as isSameYear,
  Bf as isToday,
  Ff as isTomorrow,
  zf as isYesterday,
  io as mergeDeep,
  so as nativeEvents,
  Ta as setLangCode,
  uu as store
};
