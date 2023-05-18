var ga = Object.defineProperty;
var ya = (e, n, t) => n in e ? ga(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var x = (e, n, t) => (ya(e, typeof n != "symbol" ? n + "" : n, t), t), zi = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var p = (e, n, t) => (zi(e, n, "read from private field"), t ? t.call(e) : n.get(e)), b = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, $ = (e, n, t, s) => (zi(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t), Jo = (e, n, t, s) => ({
  set _(i) {
    $(e, n, i, t);
  },
  get _() {
    return p(e, n, s);
  }
}), T = (e, n, t) => (zi(e, n, "access private method"), t);
var ns, j, Kr, nt, ue, Zo, Xr, no, Jr, vs = {}, Zr = [], _a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Li = Array.isArray;
function jt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function Qr(e) {
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
  var o = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Kr };
  return i == null && j.vnode != null && j.vnode(o), o;
}
function xe() {
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
function tl(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return tl(e);
  }
}
function so(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !xs.__r++ || Zo !== j.debounceRendering) && ((Zo = j.debounceRendering) || Xr)(xs);
}
function xs() {
  var e, n, t, s, i, o, r, l;
  for (ue.sort(no); e = ue.shift(); )
    e.__d && (n = ue.length, s = void 0, i = void 0, r = (o = (t = e).__v).__e, (l = t.__P) && (s = [], (i = jt({}, o)).__v = o.__v + 1, bo(l, o, i, t.__n, l.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? Sn(o), o.__h), rl(s, o), o.__e != r && tl(o)), ue.length > n && ue.sort(no));
  xs.__r = 0;
}
function el(e, n, t, s, i, o, r, l, a, h) {
  var c, u, d, f, m, g, y, _ = s && s.__k || Zr, v = _.length;
  for (t.__k = [], c = 0; c < n.length; c++)
    if ((f = t.__k[c] = (f = n[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? mn(null, f, null, null, f) : Li(f) ? mn(ss, { children: f }, null, null, null) : f.__b > 0 ? mn(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = t, f.__b = t.__b + 1, (d = _[c]) === null || d && f.key == d.key && f.type === d.type)
        _[c] = void 0;
      else
        for (u = 0; u < v; u++) {
          if ((d = _[u]) && f.key == d.key && f.type === d.type) {
            _[u] = void 0;
            break;
          }
          d = null;
        }
      bo(e, f, d = d || vs, i, o, r, l, a, h), m = f.__e, (u = f.ref) && d.ref != u && (y || (y = []), d.ref && y.push(d.ref, null, f), y.push(u, f.__c || m, f)), m != null ? (g == null && (g = m), typeof f.type == "function" && f.__k === d.__k ? f.__d = a = nl(f, a, e) : a = il(e, f, d, _, m, a), typeof t.type == "function" && (t.__d = a)) : a && d.__e == a && a.parentNode != e && (a = Sn(d));
    }
  for (t.__e = g, c = v; c--; )
    _[c] != null && (typeof t.type == "function" && _[c].__e != null && _[c].__e == t.__d && (t.__d = ol(s).nextSibling), cl(_[c], _[c]));
  if (y)
    for (c = 0; c < y.length; c++)
      ll(y[c], y[++c], y[++c]);
}
function nl(e, n, t) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, n = typeof s.type == "function" ? nl(s, n, t) : il(t, s, s, i, s.__e, n));
  return n;
}
function sl(e, n) {
  return n = n || [], e == null || typeof e == "boolean" || (Li(e) ? e.some(function(t) {
    sl(t, n);
  }) : n.push(e)), n;
}
function il(e, n, t, s, i, o) {
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
function ol(e) {
  var n, t, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (n = e.__k.length - 1; n >= 0; n--)
      if ((t = e.__k[n]) && (s = ol(t)))
        return s;
  }
  return null;
}
function wa(e, n, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || Es(e, o, null, t[o], s);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || Es(e, o, n[o], t[o], s);
}
function Qo(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t ?? "") : e[n] = t == null ? "" : typeof t != "number" || _a.test(n) ? t : t + "px";
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
            t && n in t || Qo(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || Qo(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? s || e.addEventListener(n, o ? er : tr, o) : e.removeEventListener(n, o ? er : tr, o);
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
function tr(e) {
  return this.l[e.type + !1](j.event ? j.event(e) : e);
}
function er(e) {
  return this.l[e.type + !0](j.event ? j.event(e) : e);
}
function bo(e, n, t, s, i, o, r, l, a) {
  var h, c, u, d, f, m, g, y, _, v, E, k, L, A, M, N = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, l = n.__e = t.__e, n.__h = null, o = [l]), (h = j.__b) && h(n);
  try {
    t:
      if (typeof N == "function") {
        if (y = n.props, _ = (h = N.contextType) && s[h.__c], v = h ? _ ? _.props.value : h.__ : s, t.__c ? g = (c = n.__c = t.__c).__ = c.__E : ("prototype" in N && N.prototype.render ? n.__c = c = new N(y, v) : (n.__c = c = new z(y, v), c.constructor = N, c.render = va), _ && _.sub(c), c.props = y, c.state || (c.state = {}), c.context = v, c.__n = s, u = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), N.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = jt({}, c.__s)), jt(c.__s, N.getDerivedStateFromProps(y, c.__s))), d = c.props, f = c.state, c.__v = n, u)
          N.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (N.getDerivedStateFromProps == null && y !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, v), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, v) === !1 || n.__v === t.__v) {
            for (n.__v !== t.__v && (c.props = y, c.state = c.__s, c.__d = !1), c.__e = !1, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(H) {
              H && (H.__ = n);
            }), E = 0; E < c._sb.length; E++)
              c.__h.push(c._sb[E]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, v), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, m);
          });
        }
        if (c.context = v, c.props = y, c.__P = e, k = j.__r, L = 0, "prototype" in N && N.prototype.render) {
          for (c.state = c.__s, c.__d = !1, k && k(n), h = c.render(c.props, c.state, c.context), A = 0; A < c._sb.length; A++)
            c.__h.push(c._sb[A]);
          c._sb = [];
        } else
          do
            c.__d = !1, k && k(n), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++L < 25);
        c.state = c.__s, c.getChildContext != null && (s = jt(jt({}, s), c.getChildContext())), u || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(d, f)), el(e, Li(M = h != null && h.type === ss && h.key == null ? h.props.children : h) ? M : [M], n, t, s, i, o, r, l, a), c.base = n.__e, n.__h = null, c.__h.length && r.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = ba(t.__e, n, t, s, i, o, r, a);
    (h = j.diffed) && h(n);
  } catch (H) {
    n.__v = null, (a || o != null) && (n.__e = l, n.__h = !!a, o[o.indexOf(l)] = null), j.__e(H, n, t);
  }
}
function rl(e, n) {
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
function ba(e, n, t, s, i, o, r, l) {
  var a, h, c, u = t.props, d = n.props, f = n.type, m = 0;
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
    u === d || l && e.data === d || (e.data = d);
  else {
    if (o = o && ns.call(e.childNodes), h = (u = t.props || vs).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (u = {}, m = 0; m < e.attributes.length; m++)
          u[e.attributes[m].name] = e.attributes[m].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (wa(e, d, u, i, l), c)
      n.__k = [];
    else if (el(e, Li(m = n.props.children) ? m : [m], n, t, s, i && f !== "foreignObject", o, r, o ? o[0] : t.__k && Sn(t, 0), l), o != null)
      for (m = o.length; m--; )
        o[m] != null && Qr(o[m]);
    l || ("value" in d && (m = d.value) !== void 0 && (m !== e.value || f === "progress" && !m || f === "option" && m !== u.value) && Es(e, "value", m, u.value, !1), "checked" in d && (m = d.checked) !== void 0 && m !== e.checked && Es(e, "checked", m, u.checked, !1));
  }
  return e;
}
function ll(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    j.__e(s, t);
  }
}
function cl(e, n, t) {
  var s, i;
  if (j.unmount && j.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || ll(s, null, n)), (s = e.__c) != null) {
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
      s[i] && cl(s[i], n, t || typeof e.type != "function");
  t || e.__e == null || Qr(e.__e), e.__ = e.__e = e.__d = void 0;
}
function va(e, n, t) {
  return this.constructor(e, t);
}
function is(e, n, t) {
  var s, i, o;
  j.__ && j.__(e, n), i = (s = typeof t == "function") ? null : t && t.__k || n.__k, o = [], bo(n, e = (!s && t || n).__k = dt(ss, null, [e]), i || vs, vs, n.ownerSVGElement !== void 0, !s && t ? [t] : i ? null : n.firstChild ? ns.call(n.childNodes) : null, o, !s && t ? t : i ? i.__e : n.firstChild, s), rl(o, e);
}
function al(e, n) {
  is(e, n, al);
}
function xa(e, n, t) {
  var s, i, o, r, l = jt({}, e.props);
  for (o in e.type && e.type.defaultProps && (r = e.type.defaultProps), n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : l[o] = n[o] === void 0 && r !== void 0 ? r[o] : n[o];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? ns.call(arguments, 2) : t), mn(e.type, l, s || e.key, i || e.ref, null);
}
function Ea(e, n) {
  var t = { __c: n = "__cC" + Jr++, __: e, Consumer: function(s, i) {
    return s.children(i);
  }, Provider: function(s) {
    var i, o;
    return this.getChildContext || (i = [], (o = {})[n] = this, this.getChildContext = function() {
      return o;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && i.some(function(l) {
        l.__e = !0, so(l);
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
ns = Zr.slice, j = { __e: function(e, n, t, s) {
  for (var i, o, r; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Kr = 0, nt = function(e) {
  return e != null && e.constructor === void 0;
}, z.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = jt({}, this.state), typeof e == "function" && (e = e(jt({}, t), this.props)), e && jt(t, e), e != null && this.__v && (n && this._sb.push(n), so(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), so(this));
}, z.prototype.render = ss, ue = [], Xr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, no = function(e, n) {
  return e.__v.__b - n.__v.__b;
}, xs.__r = 0, Jr = 0;
const Sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: z,
  Fragment: ss,
  cloneElement: xa,
  createContext: Ea,
  createElement: dt,
  createRef: xe,
  h: dt,
  hydrate: al,
  get isValidElement() {
    return nt;
  },
  get options() {
    return j;
  },
  render: is,
  toChildArray: sl
}, Symbol.toStringTag, { value: "Module" }));
var Ca = 0;
function w(e, n, t, s, i, o) {
  var r, l, a = {};
  for (l in n)
    l == "ref" ? r = n[l] : a[l] = n[l];
  var h = { type: e, props: a, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ca, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return j.vnode && j.vnode(h), h;
}
var Pt;
class $a {
  constructor(n = "") {
    b(this, Pt, void 0);
    typeof n == "object" ? $(this, Pt, n) : $(this, Pt, document.appendChild(document.createComment(n)));
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
const io = /* @__PURE__ */ new Set([
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
class vo extends $a {
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
    return typeof n == "string" && (io.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), super.emit(vo.createEvent(n, t));
  }
  static createEvent(n, t) {
    return typeof n == "string" && (io.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), n;
  }
}
var Dt, Ln, fe, an;
class nr extends vo {
  constructor(t = "", s) {
    super(t);
    b(this, fe);
    b(this, Dt, /* @__PURE__ */ new Map());
    b(this, Ln, void 0);
    $(this, Ln, s == null ? void 0 : s.customEventSuffix);
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
Dt = new WeakMap(), Ln = new WeakMap(), fe = new WeakSet(), an = function(t) {
  const s = p(this, Ln);
  return io.has(t) || typeof s != "string" || t.endsWith(s) ? t : `${t}${s}`;
};
function ka(e, n) {
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
function Ra(e, n, t) {
  try {
    const s = ka(e, n), i = s[s.length - 1];
    return i === void 0 ? t : i;
  } catch {
    return t;
  }
}
function Fi(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function oo(e, ...n) {
  if (!n.length)
    return e;
  const t = n.shift();
  if (Fi(e) && Fi(t))
    for (const s in t)
      Fi(t[s]) ? (e[s] || Object.assign(e, { [s]: {} }), oo(e[s], t[s])) : Object.assign(e, { [s]: t[s] });
  return oo(e, ...n);
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
var xo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(xo || {});
function $f(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / xo[t]).toFixed(n) + t);
}
const kf = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * xo[s];
};
var Yr;
let Eo = ((Yr = document.documentElement.getAttribute("lang")) == null ? void 0 : Yr.toLowerCase()) ?? "zh_cn", qt;
function Ta() {
  return Eo;
}
function La(e) {
  Eo = e.toLowerCase();
}
function ul(e, n) {
  qt || (qt = {}), typeof e == "string" && (e = { [e]: n ?? {} }), oo(qt, e);
}
function ne(e, n, t, s, i, o) {
  Array.isArray(e) ? qt && e.unshift(qt) : e = qt ? [qt, e] : [e], typeof t == "string" && (o = i, i = s, s = t, t = void 0);
  const r = i || Eo;
  let l;
  for (const a of e) {
    if (!a)
      continue;
    const h = a[r];
    if (!h)
      continue;
    const c = o && a === qt ? `${o}.${n}` : n;
    if (l = Ra(h, c), l !== void 0)
      break;
  }
  return l === void 0 ? s : t ? pt(l, ...Array.isArray(t) ? t : [t]) : l;
}
function hl(e, n, t, s) {
  return ne(void 0, e, n, t, s);
}
ne.addLang = ul;
ne.getLang = hl;
ne.getCode = Ta;
ne.setCode = La;
ul({
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
const Bt = document, Ss = window, fl = Bt.documentElement, Ee = Bt.createElement.bind(Bt), dl = Ee("div"), Ui = Ee("table"), Aa = Ee("tbody"), sr = Ee("tr"), { isArray: Ai, prototype: pl } = Array, { concat: Na, filter: So, indexOf: ml, map: gl, push: Ma, slice: yl, some: Co, splice: Oa } = pl, Pa = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Da = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ha = /<.+>/, Ia = /^\w+$/;
function $o(e, n) {
  const t = Wa(n);
  return !e || !t && !we(n) && !G(n) ? [] : !t && Da.test(e) ? n.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !t && Ia.test(e) ? n.getElementsByTagName(e) : n.querySelectorAll(e);
}
class Ni {
  constructor(n, t) {
    if (!n)
      return;
    if (ro(n))
      return n;
    let s = n;
    if (X(n)) {
      const i = t || Bt;
      if (s = Pa.test(n) && we(i) ? i.getElementById(n.slice(1).replace(/\\/g, "")) : Ha.test(n) ? bl(n) : ro(i) ? i.find(n) : X(i) ? R(i).find(n) : $o(n, i), !s)
        return;
    } else if (Se(n))
      return this.ready(n);
    (s.nodeType || s === Ss) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(n, t) {
    return new Ni(n, t);
  }
}
const S = Ni.prototype, R = S.init;
R.fn = R.prototype = S;
S.length = 0;
S.splice = Oa;
typeof Symbol == "function" && (S[Symbol.iterator] = pl[Symbol.iterator]);
function ro(e) {
  return e instanceof Ni;
}
function nn(e) {
  return !!e && e === e.window;
}
function we(e) {
  return !!e && e.nodeType === 9;
}
function Wa(e) {
  return !!e && e.nodeType === 11;
}
function G(e) {
  return !!e && e.nodeType === 1;
}
function ja(e) {
  return !!e && e.nodeType === 3;
}
function Ba(e) {
  return typeof e == "boolean";
}
function Se(e) {
  return typeof e == "function";
}
function X(e) {
  return typeof e == "string";
}
function rt(e) {
  return e === void 0;
}
function Cn(e) {
  return e === null;
}
function _l(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function ko(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return n === null || n === Object.prototype;
}
R.isWindow = nn;
R.isFunction = Se;
R.isArray = Ai;
R.isNumeric = _l;
R.isPlainObject = ko;
function K(e, n, t) {
  if (t) {
    let s = e.length;
    for (; s--; )
      if (n.call(e[s], s, e[s]) === !1)
        return e;
  } else if (ko(e)) {
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
R.each = K;
S.each = function(e) {
  return K(this, e);
};
S.empty = function() {
  return this.each((e, n) => {
    for (; n.firstChild; )
      n.removeChild(n.firstChild);
  });
};
function Cs(...e) {
  const n = Ba(e[0]) ? e.shift() : !1, t = e.shift(), s = e.length;
  if (!t)
    return {};
  if (!s)
    return Cs(n, R, t);
  for (let i = 0; i < s; i++) {
    const o = e[i];
    for (const r in o)
      n && (Ai(o[r]) || ko(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), Cs(n, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
R.extend = Cs;
S.extend = function(e) {
  return Cs(S, e);
};
const za = /\S+/g;
function Mi(e) {
  return X(e) ? e.match(za) || [] : [];
}
S.toggleClass = function(e, n) {
  const t = Mi(e), s = !rt(n);
  return this.each((i, o) => {
    G(o) && K(t, (r, l) => {
      s ? n ? o.classList.add(l) : o.classList.remove(l) : o.classList.toggle(l);
    });
  });
};
S.addClass = function(e) {
  return this.toggleClass(e, !0);
};
S.removeAttr = function(e) {
  const n = Mi(e);
  return this.each((t, s) => {
    G(s) && K(n, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function Fa(e, n) {
  if (e) {
    if (X(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !G(this[0]))
          return;
        const t = this[0].getAttribute(e);
        return Cn(t) ? void 0 : t;
      }
      return rt(n) ? this : Cn(n) ? this.removeAttr(e) : this.each((t, s) => {
        G(s) && s.setAttribute(e, n);
      });
    }
    for (const t in e)
      this.attr(t, e[t]);
    return this;
  }
}
S.attr = Fa;
S.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
S.hasClass = function(e) {
  return !!e && Co.call(this, (n) => G(n) && n.classList.contains(e));
};
S.get = function(e) {
  return rt(e) ? yl.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
S.eq = function(e) {
  return R(this.get(e));
};
S.first = function() {
  return this.eq(0);
};
S.last = function() {
  return this.eq(-1);
};
function Ua(e) {
  return rt(e) ? this.get().map((n) => G(n) || ja(n) ? n.textContent : "").join("") : this.each((n, t) => {
    G(t) && (t.textContent = e);
  });
}
S.text = Ua;
function zt(e, n, t) {
  if (!G(e))
    return;
  const s = Ss.getComputedStyle(e, null);
  return t ? s.getPropertyValue(n) || void 0 : s[n] || e.style[n];
}
function $t(e, n) {
  return parseInt(zt(e, n), 10) || 0;
}
function ir(e, n) {
  return $t(e, `border${n ? "Left" : "Top"}Width`) + $t(e, `padding${n ? "Left" : "Top"}`) + $t(e, `padding${n ? "Right" : "Bottom"}`) + $t(e, `border${n ? "Right" : "Bottom"}Width`);
}
const Vi = {};
function Va(e) {
  if (Vi[e])
    return Vi[e];
  const n = Ee(e);
  Bt.body.insertBefore(n, null);
  const t = zt(n, "display");
  return Bt.body.removeChild(n), Vi[e] = t !== "none" ? t : "block";
}
function or(e) {
  return zt(e, "display") === "none";
}
function wl(e, n) {
  const t = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!t && !!n && t.call(e, n);
}
function Oi(e) {
  return X(e) ? (n, t) => wl(t, e) : Se(e) ? e : ro(e) ? (n, t) => e.is(t) : e ? (n, t) => t === e : () => !1;
}
S.filter = function(e) {
  const n = Oi(e);
  return R(So.call(this, (t, s) => n.call(t, s, t)));
};
function oe(e, n) {
  return n ? e.filter(n) : e;
}
S.detach = function(e) {
  return oe(this, e).each((n, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const qa = /^\s*<(\w+)[^>]*>/, Ga = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, rr = {
  "*": dl,
  tr: Aa,
  td: sr,
  th: sr,
  thead: Ui,
  tbody: Ui,
  tfoot: Ui
};
function bl(e) {
  if (!X(e))
    return [];
  if (Ga.test(e))
    return [Ee(RegExp.$1)];
  const n = qa.test(e) && RegExp.$1, t = rr[n] || rr["*"];
  return t.innerHTML = e, R(t.childNodes).detach().get();
}
R.parseHTML = bl;
S.has = function(e) {
  const n = X(e) ? (t, s) => $o(e, s).length : (t, s) => s.contains(e);
  return this.filter(n);
};
S.not = function(e) {
  const n = Oi(e);
  return this.filter((t, s) => (!X(e) || G(s)) && !n.call(s, t, s));
};
function Vt(e, n, t, s) {
  const i = [], o = Se(n), r = s && Oi(s);
  for (let l = 0, a = e.length; l < a; l++)
    if (o) {
      const h = n(e[l]);
      h.length && Ma.apply(i, h);
    } else {
      let h = e[l][n];
      for (; h != null && !(s && r(-1, h)); )
        i.push(h), h = t ? h[n] : null;
    }
  return i;
}
function vl(e) {
  return e.multiple && e.options ? Vt(So.call(e.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : e.value || "";
}
function Ya(e) {
  return arguments.length ? this.each((n, t) => {
    const s = t.multiple && t.options;
    if (s || Tl.test(t.type)) {
      const i = Ai(e) ? gl.call(e, String) : Cn(e) ? [] : [String(e)];
      s ? K(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = rt(e) || Cn(e) ? "" : e;
  }) : this[0] && vl(this[0]);
}
S.val = Ya;
S.is = function(e) {
  const n = Oi(e);
  return Co.call(this, (t, s) => n.call(t, s, t));
};
R.guid = 1;
function At(e) {
  return e.length > 1 ? So.call(e, (n, t, s) => ml.call(s, n) === t) : e;
}
R.unique = At;
S.add = function(e, n) {
  return R(At(this.get().concat(R(e, n).get())));
};
S.children = function(e) {
  return oe(R(At(Vt(this, (n) => n.children))), e);
};
S.parent = function(e) {
  return oe(R(At(Vt(this, "parentNode"))), e);
};
S.index = function(e) {
  const n = e ? R(e)[0] : this[0], t = e ? this : R(n).parent().children();
  return ml.call(t, n);
};
S.closest = function(e) {
  const n = this.filter(e);
  if (n.length)
    return n;
  const t = this.parent();
  return t.length ? t.closest(e) : n;
};
S.siblings = function(e) {
  return oe(R(At(Vt(this, (n) => R(n).parent().children().not(n)))), e);
};
S.find = function(e) {
  return R(At(Vt(this, (n) => $o(e, n))));
};
const Ka = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Xa = /^$|^module$|\/(java|ecma)script/i, Ja = ["type", "src", "nonce", "noModule"];
function Za(e, n) {
  const t = R(e);
  t.filter("script").add(t.find("script")).each((s, i) => {
    if (Xa.test(i.type) && fl.contains(i)) {
      const o = Ee("script");
      o.text = i.textContent.replace(Ka, ""), K(Ja, (r, l) => {
        i[l] && (o[l] = i[l]);
      }), n.head.insertBefore(o, null), n.head.removeChild(o);
    }
  });
}
function Qa(e, n, t, s, i) {
  s ? e.insertBefore(n, t ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(n, e) : e.parentNode.insertBefore(n, t ? e : e.nextSibling), i && Za(n, e.ownerDocument);
}
function re(e, n, t, s, i, o, r, l) {
  return K(e, (a, h) => {
    K(R(h), (c, u) => {
      K(R(n), (d, f) => {
        const m = t ? u : f, g = t ? f : u, y = t ? c : d;
        Qa(m, y ? g.cloneNode(!0) : g, s, i, !y);
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
function tu(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (rt(e))
    return this;
  const n = /<script[\s>]/.test(e);
  return this.each((t, s) => {
    G(s) && (n ? R(s).empty().append(e) : s.innerHTML = e);
  });
}
S.html = tu;
S.appendTo = function(e) {
  return re(arguments, this, !0, !1, !0);
};
S.wrapInner = function(e) {
  return this.each((n, t) => {
    const s = R(t), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
S.before = function() {
  return re(arguments, this, !1, !0);
};
S.wrapAll = function(e) {
  let n = R(e), t = n[0];
  for (; t.children.length; )
    t = t.firstElementChild;
  return this.first().before(n), this.appendTo(t);
};
S.wrap = function(e) {
  return this.each((n, t) => {
    const s = R(e)[0];
    R(t).wrapAll(n ? s.cloneNode(!0) : s);
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
  return R(At(Vt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
S.next = function(e, n, t) {
  return oe(R(At(Vt(this, "nextElementSibling", n, t))), e);
};
S.nextAll = function(e) {
  return this.next(e, !0);
};
S.nextUntil = function(e, n) {
  return this.next(n, !0, e);
};
S.parents = function(e, n) {
  return oe(R(At(Vt(this, "parentElement", !0, n))), e);
};
S.parentsUntil = function(e, n) {
  return this.parents(n, e);
};
S.prev = function(e, n, t) {
  return oe(R(At(Vt(this, "previousElementSibling", n, t))), e);
};
S.prevAll = function(e) {
  return this.prev(e, !0);
};
S.prevUntil = function(e, n) {
  return this.prev(n, !0, e);
};
S.map = function(e) {
  return R(Na.apply([], gl.call(this, (n, t) => e.call(n, t, n))));
};
S.clone = function() {
  return this.map((e, n) => n.cloneNode(!0));
};
S.offsetParent = function() {
  return this.map((e, n) => {
    let t = n.offsetParent;
    for (; t && zt(t, "position") === "static"; )
      t = t.offsetParent;
    return t || fl;
  });
};
S.slice = function(e, n) {
  return R(yl.call(this, e, n));
};
const eu = /-([a-z])/g;
function Ro(e) {
  return e.replace(eu, (n, t) => t.toUpperCase());
}
S.ready = function(e) {
  const n = () => setTimeout(e, 0, R);
  return Bt.readyState !== "loading" ? n() : Bt.addEventListener("DOMContentLoaded", n), this;
};
S.unwrap = function() {
  return this.parent().each((e, n) => {
    if (n.tagName === "BODY")
      return;
    const t = R(n);
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
    if (i !== e && G(i)) {
      const o = R(i).offset();
      t.top -= o.top + $t(i, "borderTopWidth"), t.left -= o.left + $t(i, "borderLeftWidth");
    }
  }
  return {
    top: t.top - $t(e, "marginTop"),
    left: t.left - $t(e, "marginLeft")
  };
};
const xl = {
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
    if (X(e))
      return e = xl[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((t, s) => {
        s[e] = n;
      });
    for (const t in e)
      this.prop(t, e[t]);
    return this;
  }
};
S.removeProp = function(e) {
  return this.each((n, t) => {
    delete t[xl[e] || e];
  });
};
const nu = /^--/;
function To(e) {
  return nu.test(e);
}
const qi = {}, { style: su } = dl, iu = ["webkit", "moz", "ms"];
function ou(e, n = To(e)) {
  if (n)
    return e;
  if (!qi[e]) {
    const t = Ro(e), s = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${iu.join(`${s} `)}${s}`.split(" ");
    K(i, (o, r) => {
      if (r in su)
        return qi[e] = r, !1;
    });
  }
  return qi[e];
}
const ru = {
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
function El(e, n, t = To(e)) {
  return !t && !ru[e] && _l(n) ? `${n}px` : n;
}
function lu(e, n) {
  if (X(e)) {
    const t = To(e);
    return e = ou(e, t), arguments.length < 2 ? this[0] && zt(this[0], e, t) : e ? (n = El(e, n, t), this.each((s, i) => {
      G(i) && (t ? i.style.setProperty(e, n) : i.style[e] = n);
    })) : this;
  }
  for (const t in e)
    this.css(t, e[t]);
  return this;
}
S.css = lu;
function Sl(e, n) {
  try {
    return e(n);
  } catch {
    return n;
  }
}
const cu = /^\s+|\s+$/;
function lr(e, n) {
  const t = e.dataset[n] || e.dataset[Ro(n)];
  return cu.test(t) ? t : Sl(JSON.parse, t);
}
function au(e, n, t) {
  t = Sl(JSON.stringify, t), e.dataset[Ro(n)] = t;
}
function uu(e, n) {
  if (!e) {
    if (!this[0])
      return;
    const t = {};
    for (const s in this[0].dataset)
      t[s] = lr(this[0], s);
    return t;
  }
  if (X(e))
    return arguments.length < 2 ? this[0] && lr(this[0], e) : rt(n) ? this : this.each((t, s) => {
      au(s, e, n);
    });
  for (const t in e)
    this.data(t, e[t]);
  return this;
}
S.data = uu;
function Cl(e, n) {
  const t = e.documentElement;
  return Math.max(e.body[`scroll${n}`], t[`scroll${n}`], e.body[`offset${n}`], t[`offset${n}`], t[`client${n}`]);
}
K([!0, !1], (e, n) => {
  K(["Width", "Height"], (t, s) => {
    const i = `${n ? "outer" : "inner"}${s}`;
    S[i] = function(o) {
      if (this[0])
        return nn(this[0]) ? n ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : we(this[0]) ? Cl(this[0], s) : this[0][`${n ? "offset" : "client"}${s}`] + (o && n ? $t(this[0], `margin${t ? "Top" : "Left"}`) + $t(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (e, n) => {
  const t = n.toLowerCase();
  S[t] = function(s) {
    if (!this[0])
      return rt(s) ? void 0 : this;
    if (!arguments.length)
      return nn(this[0]) ? this[0].document.documentElement[`client${n}`] : we(this[0]) ? Cl(this[0], n) : this[0].getBoundingClientRect()[t] - ir(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!G(r))
        return;
      const l = zt(r, "boxSizing");
      r.style[t] = El(t, i + (l === "border-box" ? ir(r, !e) : 0));
    });
  };
});
const cr = "___cd";
S.toggle = function(e) {
  return this.each((n, t) => {
    if (!G(t))
      return;
    const s = or(t);
    (rt(e) ? s : e) ? (t.style.display = t[cr] || "", or(t) && (t.style.display = Va(t.tagName))) : s || (t[cr] = zt(t, "display"), t.style.display = "none");
  });
};
S.hide = function() {
  return this.toggle(!1);
};
S.show = function() {
  return this.toggle(!0);
};
const ar = "___ce", Lo = ".", Ao = { focus: "focusin", blur: "focusout" }, $l = { mouseenter: "mouseover", mouseleave: "mouseout" }, hu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function No(e) {
  return $l[e] || Ao[e] || e;
}
function Mo(e) {
  const n = e.split(Lo);
  return [n[0], n.slice(1).sort()];
}
S.trigger = function(e, n) {
  if (X(e)) {
    const [s, i] = Mo(e), o = No(s);
    if (!o)
      return this;
    const r = hu.test(o) ? "MouseEvents" : "HTMLEvents";
    e = Bt.createEvent(r), e.initEvent(o, !0, !0), e.namespace = i.join(Lo), e.___ot = s;
  }
  e.___td = n;
  const t = e.___ot in Ao;
  return this.each((s, i) => {
    t && Se(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function kl(e) {
  return e[ar] = e[ar] || {};
}
function fu(e, n, t, s, i) {
  const o = kl(e);
  o[n] = o[n] || [], o[n].push([t, s, i]), e.addEventListener(n, i);
}
function Rl(e, n) {
  return !n || !Co.call(n, (t) => e.indexOf(t) < 0);
}
function $s(e, n, t, s, i) {
  const o = kl(e);
  if (n)
    o[n] && (o[n] = o[n].filter(([r, l, a]) => {
      if (i && a.guid !== i.guid || !Rl(r, t) || s && s !== l)
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
      !G(i) && !we(i) && !nn(i) || $s(i);
    });
  else if (X(e))
    Se(n) && (t = n, n = ""), K(Mi(e), (s, i) => {
      const [o, r] = Mo(i), l = No(o);
      this.each((a, h) => {
        !G(h) && !we(h) && !nn(h) || $s(h, l, r, n, t);
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
  return R(e).replaceWith(this), this;
};
function du(e, n, t, s, i) {
  if (!X(e)) {
    for (const o in e)
      this.on(o, n, t, e[o], i);
    return this;
  }
  return X(n) || (rt(n) || Cn(n) ? n = "" : rt(t) ? (t = n, n = "") : (s = t, t = n, n = "")), Se(s) || (s = t, t = void 0), s ? (K(Mi(e), (o, r) => {
    const [l, a] = Mo(r), h = No(l), c = l in $l, u = l in Ao;
    h && this.each((d, f) => {
      if (!G(f) && !we(f) && !nn(f))
        return;
      const m = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !Rl(a, g.namespace.split(Lo)) || !n && (u && (g.target !== f || g.___ot === h) || c && g.relatedTarget && f.contains(g.relatedTarget)))
          return;
        let y = f;
        if (n) {
          let v = g.target;
          for (; !wl(v, n); )
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
        i && $s(f, h, a, n, m), _ === !1 && (g.preventDefault(), g.stopPropagation());
      };
      m.guid = s.guid = s.guid || R.guid++, fu(f, h, a, n, m);
    });
  }), this) : this;
}
S.on = du;
function pu(e, n, t, s) {
  return this.on(e, n, t, s, !0);
}
S.one = pu;
const mu = /\r?\n/g;
function gu(e, n) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(n.replace(mu, `\r
`))}`;
}
const yu = /file|reset|submit|button|image/i, Tl = /radio|checkbox/i;
S.serialize = function() {
  let e = "";
  return this.each((n, t) => {
    K(t.elements || [t], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || yu.test(i.type) || Tl.test(i.type) && !i.checked)
        return;
      const o = vl(i);
      if (!rt(o)) {
        const r = Ai(o) ? o : [o];
        K(r, (l, a) => {
          e += gu(i.name, a);
        });
      }
    });
  }), e.slice(1);
};
window.$ = R;
const Rf = R, Gi = /* @__PURE__ */ new Map();
var bt, Me, mt;
class Tt {
  constructor(n, t) {
    b(this, bt, void 0);
    b(this, Me, void 0);
    b(this, mt, void 0);
    n = typeof n == "string" ? document.querySelector(n) : n, this.constructor.EVENTS && $(this, mt, new nr(n, { customEventSuffix: `.${this.constructor.KEY}` })), $(this, bt, { ...this.constructor.DEFAULT }), this.setOptions({ ...n instanceof HTMLElement ? R(n).data() : null, ...t }), this.constructor.all.set(n, this), $(this, Me, n), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return p(this, bt);
  }
  get element() {
    return p(this, Me);
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
    this.constructor.all.delete(p(this, Me)), p(this, mt) && (this.emit("destroyed", this), p(this, mt).offAll());
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
    let i = nr.createEvent(n, t);
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
    if (Gi.has(n))
      return Gi.get(n);
    const t = /* @__PURE__ */ new Map();
    return Gi.set(n, t), t;
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
bt = new WeakMap(), Me = new WeakMap(), mt = new WeakMap(), x(Tt, "EVENTS", !1), x(Tt, "DEFAULT", {});
class J extends Tt {
  constructor() {
    super(...arguments);
    x(this, "ref", xe());
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
x(J, "Component");
var Oo, B, Ll, Al, gn, ur, Nl = {}, Ml = [], _u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Qt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function Ol(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function on(e, n, t) {
  var s, i, o, r = {};
  for (o in n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Oo.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return ps(e, r, s, i, null);
}
function ps(e, n, t, s, i) {
  var o = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ll };
  return i == null && B.vnode != null && B.vnode(o), o;
}
function wu() {
  return { current: null };
}
function Po(e) {
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
function Pl(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return Pl(e);
  }
}
function hr(e) {
  (!e.__d && (e.__d = !0) && gn.push(e) && !ks.__r++ || ur !== B.debounceRendering) && ((ur = B.debounceRendering) || setTimeout)(ks);
}
function ks() {
  for (var e; ks.__r = gn.length; )
    e = gn.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), gn = [], e.some(function(n) {
      var t, s, i, o, r, l;
      n.__d && (r = (o = (t = n).__v).__e, (l = t.__P) && (s = [], (i = Qt({}, o)).__v = o.__v + 1, Wl(l, o, i, t.__n, l.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? $n(o), o.__h), vu(s, o), o.__e != r && Pl(o)));
    });
}
function Dl(e, n, t, s, i, o, r, l, a, h) {
  var c, u, d, f, m, g, y, _ = s && s.__k || Ml, v = _.length;
  for (t.__k = [], c = 0; c < n.length; c++)
    if ((f = t.__k[c] = (f = n[c]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? ps(null, f, null, null, f) : Array.isArray(f) ? ps(Po, { children: f }, null, null, null) : f.__b > 0 ? ps(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = t, f.__b = t.__b + 1, (d = _[c]) === null || d && f.key == d.key && f.type === d.type)
        _[c] = void 0;
      else
        for (u = 0; u < v; u++) {
          if ((d = _[u]) && f.key == d.key && f.type === d.type) {
            _[u] = void 0;
            break;
          }
          d = null;
        }
      Wl(e, f, d = d || Nl, i, o, r, l, a, h), m = f.__e, (u = f.ref) && d.ref != u && (y || (y = []), d.ref && y.push(d.ref, null, f), y.push(u, f.__c || m, f)), m != null ? (g == null && (g = m), typeof f.type == "function" && f.__k === d.__k ? f.__d = a = Hl(f, a, e) : a = Il(e, f, d, _, m, a), typeof t.type == "function" && (t.__d = a)) : a && d.__e == a && a.parentNode != e && (a = $n(d));
    }
  for (t.__e = g, c = v; c--; )
    _[c] != null && Bl(_[c], _[c]);
  if (y)
    for (c = 0; c < y.length; c++)
      jl(y[c], y[++c], y[++c]);
}
function Hl(e, n, t) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, n = typeof s.type == "function" ? Hl(s, n, t) : Il(t, s, s, i, s.__e, n));
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
function bu(e, n, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || Rs(e, o, null, t[o], s);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || Rs(e, o, n[o], t[o], s);
}
function fr(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || _u.test(n) ? t : t + "px";
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
            t && n in t || fr(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || fr(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? s || e.addEventListener(n, o ? pr : dr, o) : e.removeEventListener(n, o ? pr : dr, o);
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
function dr(e) {
  this.l[e.type + !1](B.event ? B.event(e) : e);
}
function pr(e) {
  this.l[e.type + !0](B.event ? B.event(e) : e);
}
function Wl(e, n, t, s, i, o, r, l, a) {
  var h, c, u, d, f, m, g, y, _, v, E, k, L, A, M, N = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, l = n.__e = t.__e, n.__h = null, o = [l]), (h = B.__b) && h(n);
  try {
    t:
      if (typeof N == "function") {
        if (y = n.props, _ = (h = N.contextType) && s[h.__c], v = h ? _ ? _.props.value : h.__ : s, t.__c ? g = (c = n.__c = t.__c).__ = c.__E : ("prototype" in N && N.prototype.render ? n.__c = c = new N(y, v) : (n.__c = c = new yn(y, v), c.constructor = N, c.render = Eu), _ && _.sub(c), c.props = y, c.state || (c.state = {}), c.context = v, c.__n = s, u = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), N.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Qt({}, c.__s)), Qt(c.__s, N.getDerivedStateFromProps(y, c.__s))), d = c.props, f = c.state, u)
          N.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (N.getDerivedStateFromProps == null && y !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, v), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, v) === !1 || n.__v === t.__v) {
            for (c.props = y, c.state = c.__s, n.__v !== t.__v && (c.__d = !1), c.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(H) {
              H && (H.__ = n);
            }), E = 0; E < c._sb.length; E++)
              c.__h.push(c._sb[E]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, v), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, m);
          });
        }
        if (c.context = v, c.props = y, c.__v = n, c.__P = e, k = B.__r, L = 0, "prototype" in N && N.prototype.render) {
          for (c.state = c.__s, c.__d = !1, k && k(n), h = c.render(c.props, c.state, c.context), A = 0; A < c._sb.length; A++)
            c.__h.push(c._sb[A]);
          c._sb = [];
        } else
          do
            c.__d = !1, k && k(n), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++L < 25);
        c.state = c.__s, c.getChildContext != null && (s = Qt(Qt({}, s), c.getChildContext())), u || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(d, f)), M = h != null && h.type === Po && h.key == null ? h.props.children : h, Dl(e, Array.isArray(M) ? M : [M], n, t, s, i, o, r, l, a), c.base = n.__e, n.__h = null, c.__h.length && r.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = xu(t.__e, n, t, s, i, o, r, a);
    (h = B.diffed) && h(n);
  } catch (H) {
    n.__v = null, (a || o != null) && (n.__e = l, n.__h = !!a, o[o.indexOf(l)] = null), B.__e(H, n, t);
  }
}
function vu(e, n) {
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
function xu(e, n, t, s, i, o, r, l) {
  var a, h, c, u = t.props, d = n.props, f = n.type, m = 0;
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
    u === d || l && e.data === d || (e.data = d);
  else {
    if (o = o && Oo.call(e.childNodes), h = (u = t.props || Nl).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (u = {}, m = 0; m < e.attributes.length; m++)
          u[e.attributes[m].name] = e.attributes[m].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (bu(e, d, u, i, l), c)
      n.__k = [];
    else if (m = n.props.children, Dl(e, Array.isArray(m) ? m : [m], n, t, s, i && f !== "foreignObject", o, r, o ? o[0] : t.__k && $n(t, 0), l), o != null)
      for (m = o.length; m--; )
        o[m] != null && Ol(o[m]);
    l || ("value" in d && (m = d.value) !== void 0 && (m !== e.value || f === "progress" && !m || f === "option" && m !== u.value) && Rs(e, "value", m, u.value, !1), "checked" in d && (m = d.checked) !== void 0 && m !== e.checked && Rs(e, "checked", m, u.checked, !1));
  }
  return e;
}
function jl(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    B.__e(s, t);
  }
}
function Bl(e, n, t) {
  var s, i;
  if (B.unmount && B.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || jl(s, null, n)), (s = e.__c) != null) {
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
      s[i] && Bl(s[i], n, t || typeof e.type != "function");
  t || e.__e == null || Ol(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Eu(e, n, t) {
  return this.constructor(e, t);
}
Oo = Ml.slice, B = { __e: function(e, n, t, s) {
  for (var i, o, r; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Ll = 0, Al = function(e) {
  return e != null && e.constructor === void 0;
}, yn.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Qt({}, this.state), typeof e == "function" && (e = e(Qt({}, t), this.props)), e && Qt(t, e), e != null && this.__v && (n && this._sb.push(n), hr(this));
}, yn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), hr(this));
}, yn.prototype.render = Po, gn = [], ks.__r = 0;
var Su = 0;
function ut(e, n, t, s, i) {
  var o, r, l = {};
  for (r in n)
    r == "ref" ? o = n[r] : l[r] = n[r];
  var a = { type: e, props: l, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Su, __source: i, __self: s };
  if (typeof e == "function" && (o = e.defaultProps))
    for (r in o)
      l[r] === void 0 && (l[r] = o[r]);
  return B.vnode && B.vnode(a), a;
}
function Pi(...e) {
  const n = [], t = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? n[r][1] = !!o : (t.set(i, n.length), n.push([i, !!o]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Pi(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), n.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const O = (...e) => Pi(...e).reduce((n, [t, s]) => (s && n.push(t), n), []).join(" ");
function Cu({
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
function zl({
  component: e = "a",
  className: n,
  children: t,
  attrs: s,
  url: i,
  disabled: o,
  active: r,
  icon: l,
  text: a,
  target: h,
  trailingIcon: c,
  hint: u,
  onClick: d,
  ...f
}) {
  const m = [
    typeof l == "string" ? /* @__PURE__ */ ut("i", { class: `icon ${l}` }) : l,
    /* @__PURE__ */ ut("span", { className: "text", children: a }),
    typeof t == "function" ? t() : t,
    typeof c == "string" ? /* @__PURE__ */ ut("i", { class: `icon ${c}` }) : c
  ];
  return on(e, {
    className: O(n, { disabled: o, active: r }),
    title: u,
    [e === "a" ? "href" : "data-url"]: i,
    [e === "a" ? "target" : "data-target"]: h,
    onClick: d,
    ...f,
    ...s
  }, ...m);
}
function $u({
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
function ku({
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
function Ru(e) {
  const {
    tag: n,
    className: t,
    style: s,
    renders: i,
    generateArgs: o = [],
    generatorThis: r,
    generators: l,
    onGenerate: a,
    onRenderItem: h,
    ...c
  } = e, u = [t], d = { ...s }, f = [], m = [];
  return i.forEach((g) => {
    const y = [];
    typeof g == "string" && l && l[g] && (g = l[g]), typeof g == "function" ? a ? y.push(...a.call(r, g, f, ...o)) : y.push(...g.call(r, f, ...o) ?? []) : y.push(g), y.forEach((_) => {
      _ != null && (typeof _ == "object" && !nt(_) && ("html" in _ || "__html" in _ || "className" in _ || "style" in _ || "attrs" in _ || "children" in _) ? _.html ? f.push(
        /* @__PURE__ */ w("div", { className: O(_.className), style: _.style, dangerouslySetInnerHTML: { __html: _.html }, ..._.attrs ?? {} })
      ) : _.__html ? m.push(_.__html) : (_.style && Object.assign(d, _.style), _.className && u.push(_.className), _.children && f.push(_.children), _.attrs && Object.assign(c, _.attrs)) : f.push(_));
    });
  }), m.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: m } }), [{
    className: O(u),
    style: d,
    ...c
  }, f];
}
function lo({
  tag: e = "div",
  ...n
}) {
  const [t, s] = Ru(n);
  return dt(e, t, ...s);
}
function Tu({ type: e, ...n }) {
  return /* @__PURE__ */ ut(lo, { ...n });
}
function Fl({
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
let Di = (Wt = class extends yn {
  constructor() {
    super(...arguments);
    x(this, "ref", wu());
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
          return /* @__PURE__ */ ut(y, { ...o });
      } else if (typeof r == "function") {
        const y = r.call(this, o, on);
        if (Al(y))
          return y;
        typeof y == "object" && Object.assign(o, y);
      }
    }
    const { type: l = "item", component: a, key: h = i, rootAttrs: c, rootClass: u, rootStyle: d, rootChildren: f, ...m } = o;
    if (l === "html")
      return /* @__PURE__ */ ut(
        "li",
        {
          className: O("action-menu-item", `${this.name}-html`, u, m.className),
          ...c,
          style: d || m.style,
          dangerouslySetInnerHTML: { __html: m.html }
        },
        h
      );
    const g = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[l] || Wt.ItemComponents[l] : a;
    return Object.assign(m, {
      type: l,
      component: typeof a == "string" ? a : void 0
    }), this.renderTypedItem(g, {
      className: O(u),
      children: f,
      style: d,
      key: h,
      ...c
    }, {
      ...m,
      type: l,
      component: typeof a == "string" ? a : void 0
    });
  }
  renderTypedItem(t, s, i) {
    const { children: o, className: r, key: l, ...a } = s, { activeClass: h = "", activeKey: c, activeIcon: u } = this.props, d = u && c === l ? /* @__PURE__ */ ut("i", { className: `checked icon icon-${u}` }) : null, f = c === l;
    return /* @__PURE__ */ ut(
      "li",
      {
        className: O("action-menu-item", `${this.name}-${i.type}`, r, { [h]: f }),
        ...a,
        children: [
          /* @__PURE__ */ ut(t, { ...i }),
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
      itemRender: h,
      onClickItem: c,
      beforeRender: u,
      afterRender: d,
      beforeDestroy: f,
      activeClass: m,
      activeKey: g,
      ...y
    } = t, _ = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ ut(_, { class: O(this.name, r), style: i, ...y, ref: this.ref, children: [
      l && l.map(this.renderItem.bind(this, t)),
      a
    ] });
  }
}, x(Wt, "ItemComponents", {
  divider: Cu,
  item: zl,
  heading: $u,
  space: ku,
  custom: Tu,
  basic: Fl
}), x(Wt, "ROOT_TAG", "menu"), x(Wt, "NAME", "action-menu"), Wt);
class mr extends J {
}
x(mr, "NAME", "actionmenu"), x(mr, "Component", Di);
function gr({
  ...e
}) {
  return /* @__PURE__ */ ut(zl, { ...e });
}
var Zi, An, vt, Oe;
let Ul = (Zi = class extends Di {
  constructor(t) {
    super(t);
    b(this, An, /* @__PURE__ */ new Set());
    b(this, vt, void 0);
    b(this, Oe, (t, s, i) => {
      this.toggleNestedMenu(t, s), i.preventDefault();
    });
    $(this, vt, t.nestedShow === void 0), p(this, vt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
    const i = this.constructor, { name: o, controlledMenu: r, nestedShow: l, beforeDestroy: a, beforeRender: h, itemRender: c, activeClass: u, activeKey: d, onClickItem: f, afterRender: m, commonItemProps: g, activeIcon: y } = this.props;
    return /* @__PURE__ */ ut(
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
        beforeRender: h,
        beforeDestroy: a,
        itemRender: c,
        activeClass: u,
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
    p(this, An).add(r);
    const l = this.isNestedMenuShow(r);
    if (l && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(s)
    ], o.component = gr), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: p(this, Oe).bind(this, r, !0),
        onMouseLeave: p(this, Oe).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = o;
      o.onClick = (c) => {
        p(this, Oe).call(this, r, void 0, c), h == null || h(c);
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
    if (typeof o == "boolean" && (o === !0 ? o = [...p(this, An).values()].reduce((r, l) => (r[l] = !0, r), {}) : o = {}), s === void 0)
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
}, An = new WeakMap(), vt = new WeakMap(), Oe = new WeakMap(), x(Zi, "ItemComponents", {
  item: gr
}), Zi);
class yr extends J {
}
x(yr, "NAME", "actionmenunested"), x(yr, "Component", Ul);
let Lt = class extends z {
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
      disabled: h,
      active: c,
      loading: u,
      loadingIcon: d,
      loadingText: f,
      icon: m,
      text: g,
      trailingIcon: y,
      caret: _,
      square: v,
      hint: E,
      ...k
    } = this.props, L = n || (l ? "a" : "button"), A = g == null || typeof g == "string" && !g.length || u && !f, M = _ && A && !m && !y && !r && !u;
    return dt(
      L,
      {
        className: O("btn", t, o, {
          "btn-caret": M,
          disabled: h || u,
          active: c,
          loading: u,
          square: v === void 0 ? !M && !r && A : v
        }, i ? `size-${i}` : ""),
        title: E,
        [L === "a" ? "href" : "data-url"]: l,
        [L === "a" ? "target" : "data-target"]: a,
        type: L === "button" ? s : void 0,
        ...k
      },
      u ? /* @__PURE__ */ w("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof m == "string" ? /* @__PURE__ */ w("i", { class: `icon ${m}` }) : m,
      A ? null : /* @__PURE__ */ w("span", { className: "text", children: u ? f : g }),
      u ? null : r,
      u ? null : typeof y == "string" ? /* @__PURE__ */ w("i", { class: `icon ${y}` }) : y,
      u ? null : _ ? /* @__PURE__ */ w("span", { className: typeof _ == "string" ? `caret-${_}` : "caret" }) : null
    );
  }
};
class _r extends J {
}
x(_r, "NAME", "button"), x(_r, "Component", Lt);
var Qi;
let Do = (Qi = class extends Ul {
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
}, x(Qi, "NAME", "menu"), Qi);
class wr extends J {
}
x(wr, "NAME", "menu"), x(wr, "Component", Do);
let os = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
function Lu({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ w(Lt, { type: t, ...s });
}
function Au(e) {
  return e.button === 2;
}
function Ho(e) {
  return e.split("-")[1];
}
function Vl(e) {
  return e === "y" ? "height" : "width";
}
function _n(e) {
  return e.split("-")[0];
}
function ql(e) {
  return ["top", "bottom"].includes(_n(e)) ? "x" : "y";
}
function br(e, n, t) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, l = ql(n), a = Vl(l), h = s[a] / 2 - i[a] / 2, c = l === "x";
  let u;
  switch (_n(n)) {
    case "top":
      u = { x: o, y: s.y - i.height };
      break;
    case "bottom":
      u = { x: o, y: s.y + s.height };
      break;
    case "right":
      u = { x: s.x + s.width, y: r };
      break;
    case "left":
      u = { x: s.x - i.width, y: r };
      break;
    default:
      u = { x: s.x, y: s.y };
  }
  switch (Ho(n)) {
    case "start":
      u[l] -= h * (t && c ? -1 : 1);
      break;
    case "end":
      u[l] += h * (t && c ? -1 : 1);
  }
  return u;
}
const Nu = async (e, n, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let h = await r.getElementRects({ reference: e, floating: n, strategy: i }), { x: c, y: u } = br(h, s, a), d = s, f = {}, m = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: y, fn: _ } = l[g], { x: v, y: E, data: k, reset: L } = await _({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: r, elements: { reference: e, floating: n } });
    c = v ?? c, u = E ?? u, f = { ...f, [y]: { ...f[y], ...k } }, L && m <= 50 && (m++, typeof L == "object" && (L.placement && (d = L.placement), L.rects && (h = L.rects === !0 ? await r.getElementRects({ reference: e, floating: n, strategy: i }) : L.rects), { x: c, y: u } = br(h, d, a)), g = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function Mu(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Ts(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Ou(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: s, y: i, platform: o, rects: r, elements: l, strategy: a } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = n, m = Mu(f), g = l[d ? u === "floating" ? "reference" : "floating" : u], y = Ts(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(g))) == null || t ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: h, rootBoundary: c, strategy: a })), _ = u === "floating" ? { ...r.floating, x: s, y: i } : r.reference, v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), E = await (o.isElement == null ? void 0 : o.isElement(v)) && await (o.getScale == null ? void 0 : o.getScale(v)) || { x: 1, y: 1 }, k = Ts(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: _, offsetParent: v, strategy: a }) : _);
  return { top: (y.top - k.top + m.top) / E.y, bottom: (k.bottom - y.bottom + m.bottom) / E.y, left: (y.left - k.left + m.left) / E.x, right: (k.right - y.right + m.right) / E.x };
}
const Pu = ["top", "right", "bottom", "left"];
Pu.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const Du = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ls(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Du[n]);
}
function Hu(e, n, t) {
  t === void 0 && (t = !1);
  const s = Ho(e), i = ql(e), o = Vl(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = Ls(r)), { main: r, cross: Ls(r) };
}
const Iu = { start: "end", end: "start" };
function Yi(e) {
  return e.replace(/start|end/g, (n) => Iu[n]);
}
const Gl = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: l, elements: a } = n, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: m = !0, ...g } = e, y = _n(s), _ = _n(r) === r, v = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), E = u || (_ || !m ? [Ls(r)] : function(C) {
      const I = Ls(C);
      return [Yi(C), I, Yi(I)];
    }(r));
    u || f === "none" || E.push(...function(C, I, q, st) {
      const U = Ho(C);
      let D = function(V, wt, le) {
        const ce = ["left", "right"], ae = ["right", "left"], Nt = ["top", "bottom"], $e = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return le ? wt ? ae : ce : wt ? ce : ae;
          case "left":
          case "right":
            return wt ? Nt : $e;
          default:
            return [];
        }
      }(_n(C), q === "start", st);
      return U && (D = D.map((V) => V + "-" + U), I && (D = D.concat(D.map(Yi)))), D;
    }(r, m, f, v));
    const k = [r, ...E], L = await Ou(n, g), A = [];
    let M = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && A.push(L[y]), c) {
      const { main: C, cross: I } = Hu(s, o, v);
      A.push(L[C], L[I]);
    }
    if (M = [...M, { placement: s, overflows: A }], !A.every((C) => C <= 0)) {
      var N;
      const C = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, I = k[C];
      if (I)
        return { data: { index: C, overflows: M }, reset: { placement: I } };
      let q = "bottom";
      switch (d) {
        case "bestFit": {
          var H;
          const st = (H = M.map((U) => [U, U.overflows.filter((D) => D > 0).reduce((D, V) => D + V, 0)]).sort((U, D) => U[1] - D[1])[0]) == null ? void 0 : H[0].placement;
          st && (q = st);
          break;
        }
        case "initialPlacement":
          q = r;
      }
      if (s !== q)
        return { reset: { placement: q } };
    }
    return {};
  } };
};
function ht(e) {
  var n;
  return ((n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function kt(e) {
  return ht(e).getComputedStyle(e);
}
function se(e) {
  return Kl(e) ? (e.nodeName || "").toLowerCase() : "";
}
let as;
function Yl() {
  if (as)
    return as;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (as = e.brands.map((n) => n.brand + "/" + n.version).join(" "), as) : navigator.userAgent;
}
function Ft(e) {
  return e instanceof ht(e).HTMLElement;
}
function yt(e) {
  return e instanceof ht(e).Element;
}
function Kl(e) {
  return e instanceof ht(e).Node;
}
function vr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ht(e).ShadowRoot || e instanceof ShadowRoot;
}
function Hi(e) {
  const { overflow: n, overflowX: t, overflowY: s, display: i } = kt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + s + t) && !["inline", "contents"].includes(i);
}
function Wu(e) {
  return ["table", "td", "th"].includes(se(e));
}
function co(e) {
  const n = /firefox/i.test(Yl()), t = kt(e), s = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!s && s !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function Xl() {
  return !/^((?!chrome|android).)*safari/i.test(Yl());
}
function Io(e) {
  return ["html", "body", "#document"].includes(se(e));
}
const xr = Math.min, wn = Math.max, As = Math.round;
function Jl(e) {
  const n = kt(e);
  let t = parseFloat(n.width), s = parseFloat(n.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = As(t) !== i || As(s) !== o;
  return r && (t = i, s = o), { width: t, height: s, fallback: r };
}
function Zl(e) {
  return yt(e) ? e : e.contextElement;
}
const Ql = { x: 1, y: 1 };
function Le(e) {
  const n = Zl(e);
  if (!Ft(n))
    return Ql;
  const t = n.getBoundingClientRect(), { width: s, height: i, fallback: o } = Jl(n);
  let r = (o ? As(t.width) : t.width) / s, l = (o ? As(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
function be(e, n, t, s) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), l = Zl(e);
  let a = Ql;
  n && (s ? yt(s) && (a = Le(s)) : a = Le(e));
  const h = l ? ht(l) : window, c = !Xl() && t;
  let u = (r.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, d = (r.top + (c && ((o = h.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / a.y, f = r.width / a.x, m = r.height / a.y;
  if (l) {
    const g = ht(l), y = s && yt(s) ? ht(s) : s;
    let _ = g.frameElement;
    for (; _ && s && y !== g; ) {
      const v = Le(_), E = _.getBoundingClientRect(), k = getComputedStyle(_);
      E.x += (_.clientLeft + parseFloat(k.paddingLeft)) * v.x, E.y += (_.clientTop + parseFloat(k.paddingTop)) * v.y, u *= v.x, d *= v.y, f *= v.x, m *= v.y, u += E.x, d += E.y, _ = ht(_).frameElement;
    }
  }
  return { width: f, height: m, top: d, right: u + f, bottom: d + m, left: u, x: u, y: d };
}
function te(e) {
  return ((Kl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ii(e) {
  return yt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function tc(e) {
  return be(te(e)).left + Ii(e).scrollLeft;
}
function ju(e, n, t) {
  const s = Ft(n), i = te(n), o = be(e, !0, t === "fixed", n);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && t !== "fixed")
    if ((se(n) !== "body" || Hi(i)) && (r = Ii(n)), Ft(n)) {
      const a = be(n, !0);
      l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
    } else
      i && (l.x = tc(i));
  return { x: o.left + r.scrollLeft - l.x, y: o.top + r.scrollTop - l.y, width: o.width, height: o.height };
}
function kn(e) {
  if (se(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || (vr(e) ? e.host : null) || te(e);
  return vr(n) ? n.host : n;
}
function Er(e) {
  return Ft(e) && kt(e).position !== "fixed" ? e.offsetParent : null;
}
function Sr(e) {
  const n = ht(e);
  let t = Er(e);
  for (; t && Wu(t) && kt(t).position === "static"; )
    t = Er(t);
  return t && (se(t) === "html" || se(t) === "body" && kt(t).position === "static" && !co(t)) ? n : t || function(s) {
    let i = kn(s);
    for (; Ft(i) && !Io(i); ) {
      if (co(i))
        return i;
      i = kn(i);
    }
    return null;
  }(e) || n;
}
function ec(e) {
  const n = kn(e);
  return Io(n) ? e.ownerDocument.body : Ft(n) && Hi(n) ? n : ec(n);
}
function bn(e, n) {
  var t;
  n === void 0 && (n = []);
  const s = ec(e), i = s === ((t = e.ownerDocument) == null ? void 0 : t.body), o = ht(s);
  return i ? n.concat(o, o.visualViewport || [], Hi(s) ? s : []) : n.concat(s, bn(s));
}
function Cr(e, n, t) {
  return n === "viewport" ? Ts(function(s, i) {
    const o = ht(s), r = te(s), l = o.visualViewport;
    let a = r.clientWidth, h = r.clientHeight, c = 0, u = 0;
    if (l) {
      a = l.width, h = l.height;
      const d = Xl();
      (d || !d && i === "fixed") && (c = l.offsetLeft, u = l.offsetTop);
    }
    return { width: a, height: h, x: c, y: u };
  }(e, t)) : yt(n) ? function(s, i) {
    const o = be(s, !0, i === "fixed"), r = o.top + s.clientTop, l = o.left + s.clientLeft, a = Ft(s) ? Le(s) : { x: 1, y: 1 }, h = s.clientWidth * a.x, c = s.clientHeight * a.y, u = l * a.x, d = r * a.y;
    return { top: d, left: u, right: u + h, bottom: d + c, x: u, y: d, width: h, height: c };
  }(n, t) : Ts(function(s) {
    var i;
    const o = te(s), r = Ii(s), l = (i = s.ownerDocument) == null ? void 0 : i.body, a = wn(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), h = wn(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0);
    let c = -r.scrollLeft + tc(s);
    const u = -r.scrollTop;
    return kt(l || o).direction === "rtl" && (c += wn(o.clientWidth, l ? l.clientWidth : 0) - a), { width: a, height: h, x: c, y: u };
  }(te(e)));
}
const Bu = { getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: s, strategy: i } = e;
  const o = t === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = bn(h).filter((y) => yt(y) && se(y) !== "body"), f = null;
    const m = kt(h).position === "fixed";
    let g = m ? kn(h) : h;
    for (; yt(g) && !Io(g); ) {
      const y = kt(g), _ = co(g);
      (m ? _ || f : _ || y.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = y : d = d.filter((v) => v !== g), g = kn(g);
    }
    return c.set(h, d), d;
  }(n, this._c) : [].concat(t), r = [...o, s], l = r[0], a = r.reduce((h, c) => {
    const u = Cr(n, c, i);
    return h.top = wn(u.top, h.top), h.right = xr(u.right, h.right), h.bottom = xr(u.bottom, h.bottom), h.left = wn(u.left, h.left), h;
  }, Cr(n, l, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: s } = e;
  const i = Ft(t), o = te(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((se(t) !== "body" || Hi(o)) && (r = Ii(t)), Ft(t))) {
    const h = be(t);
    l = Le(t), a.x = h.x + t.clientLeft, a.y = h.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - r.scrollLeft * l.x + a.x, y: n.y * l.y - r.scrollTop * l.y + a.y };
}, isElement: yt, getDimensions: function(e) {
  return Jl(e);
}, getOffsetParent: Sr, getDocumentElement: te, getScale: Le, async getElementRects(e) {
  let { reference: n, floating: t, strategy: s } = e;
  const i = this.getOffsetParent || Sr, o = this.getDimensions;
  return { reference: ju(n, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => kt(e).direction === "rtl" };
function zu(e, n, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: l = !1 } = s, a = i && !l, h = a || o ? [...yt(e) ? bn(e) : e.contextElement ? bn(e.contextElement) : [], ...bn(n)] : [];
  h.forEach((f) => {
    a && f.addEventListener("scroll", t, { passive: !0 }), o && f.addEventListener("resize", t);
  });
  let c, u = null;
  if (r) {
    let f = !0;
    u = new ResizeObserver(() => {
      f || t(), f = !1;
    }), yt(e) && !l && u.observe(e), yt(e) || !e.contextElement || l || u.observe(e.contextElement), u.observe(n);
  }
  let d = l ? be(e) : null;
  return l && function f() {
    const m = be(e);
    !d || m.x === d.x && m.y === d.y && m.width === d.width && m.height === d.height || t(), d = m, c = requestAnimationFrame(f);
  }(), t(), () => {
    var f;
    h.forEach((m) => {
      a && m.removeEventListener("scroll", t), o && m.removeEventListener("resize", t);
    }), (f = u) == null || f.disconnect(), u = null, l && cancelAnimationFrame(c);
  };
}
const nc = (e, n, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Bu, ...t }, o = { ...i.platform, _c: s };
  return Nu(e, n, { ...i, platform: o });
};
let Fu = class extends Do {
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
      middleware: [Gl()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    this.ref.current && nc(this._getPopperElement(), this.ref.current, n).then(({ x: t, y: s }) => {
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
var Gt, Pe, Nn, Mn, Ws, sc, js, ic;
class ot extends Tt {
  constructor() {
    super(...arguments);
    b(this, Ws);
    b(this, js);
    b(this, Gt, void 0);
    b(this, Pe, void 0);
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
    return $(this, Nn, t), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
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
    return i.style.width = "max-content", i.style.position = this.options.strategy, i.style.top = "0", i.style.left = "0", $(this, Gt, i), i;
  }
  _getPopperOptions() {
    var o;
    const { placement: t, strategy: s } = this.options, i = {
      middleware: [],
      placement: t,
      strategy: s
    };
    return this.options.flip && ((o = i.middleware) == null || o.push(Gl())), i;
  }
  _createPopper() {
    const t = this._getPopperOptions(), s = this._getPopperElement();
    $(this, Mn, zu(s, this.menu, () => {
      nc(s, this.menu, t).then(({ x: i, y: o, middlewareData: r, placement: l }) => {
        Object.assign(this.menu.style, {
          left: `${i}px`,
          top: `${o}px`
        });
        const a = l.split("-")[0], h = T(this, Ws, sc).call(this, a);
        if (r.arrow && this.arrowEl) {
          const { x: c, y: u } = r.arrow;
          Object.assign(this.arrowEl.style, {
            left: c != null ? `${c}px` : "",
            top: u != null ? `${u}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...T(this, js, ic).call(this, a)
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
    return !t || this.emit("updateMenu", { menu: t, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (is(dt(Fu, t), this.menu), !0);
  }
  _getPopperElement() {
    return p(this, Pe) || $(this, Pe, {
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
    }), p(this, Pe);
  }
  static clear(t) {
    var a, h;
    t instanceof Event && (t = { event: t });
    const { event: s, exclude: i, ignoreSelector: o = ".not-hide-menu" } = t || {};
    if (s && o && ((h = (a = s.target).closest) != null && h.call(a, o)) || s && Au(s))
      return;
    const r = this.getAll().entries(), l = new Set(i || []);
    for (const [c, u] of r)
      l.has(c) || u.hide();
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
Gt = new WeakMap(), Pe = new WeakMap(), Nn = new WeakMap(), Mn = new WeakMap(), Ws = new WeakSet(), sc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, js = new WeakSet(), ic = function(t) {
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
function oc(e) {
  return e.split("-")[1];
}
function Uu(e) {
  return e === "y" ? "height" : "width";
}
function rc(e) {
  return e.split("-")[0];
}
function lc(e) {
  return ["top", "bottom"].includes(rc(e)) ? "x" : "y";
}
function Vu(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
const qu = Math.min, Gu = Math.max;
function Yu(e, n, t) {
  return Gu(e, qu(n, t));
}
const Ku = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { element: t, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: l, platform: a, elements: h } = n;
  if (t == null)
    return {};
  const c = Vu(s), u = { x: i, y: o }, d = lc(r), f = Uu(d), m = await a.getDimensions(t), g = d === "y", y = g ? "top" : "left", _ = g ? "bottom" : "right", v = g ? "clientHeight" : "clientWidth", E = l.reference[f] + l.reference[d] - u[d] - l.floating[f], k = u[d] - l.reference[d], L = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(t));
  let A = L ? L[v] : 0;
  A && await (a.isElement == null ? void 0 : a.isElement(L)) || (A = h.floating[v] || l.floating[f]);
  const M = E / 2 - k / 2, N = c[y], H = A - m[f] - c[_], C = A / 2 - m[f] / 2 + M, I = Yu(N, C, H), q = oc(r) != null && C != I && l.reference[f] / 2 - (C < N ? c[y] : c[_]) - m[f] / 2 < 0;
  return { [d]: u[d] - (q ? C < N ? N - C : H - C : 0), data: { [d]: I, centerOffset: C - I } };
} }), Xu = ["top", "right", "bottom", "left"];
Xu.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const Ju = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: s } = n, i = await async function(o, r) {
      const { placement: l, platform: a, elements: h } = o, c = await (a.isRTL == null ? void 0 : a.isRTL(h.floating)), u = rc(l), d = oc(l), f = lc(l) === "x", m = ["left", "top"].includes(u) ? -1 : 1, g = c && f ? -1 : 1, y = typeof r == "function" ? r(o) : r;
      let { mainAxis: _, crossAxis: v, alignmentAxis: E } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return d && typeof E == "number" && (v = d === "end" ? -1 * E : E), f ? { x: v * g, y: _ * m } : { x: _ * m, y: v * g };
    }(n, e);
    return { x: t + i.x, y: s + i.y, data: i };
  } };
};
var De, He, Ie, Bs, cc;
const zo = class extends ot {
  constructor() {
    super(...arguments);
    b(this, Bs);
    b(this, De, !1);
    b(this, He, 0);
    x(this, "hideLater", () => {
      p(this, Ie).call(this), $(this, He, window.setTimeout(this.hide.bind(this), 100));
    });
    b(this, Ie, () => {
      clearTimeout(p(this, He)), $(this, He, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, s) {
    (s == null ? void 0 : s.clearOthers) !== !1 && zo.clear({ event: s == null ? void 0 : s.event, exclude: [this.element] });
    const i = super.show(t);
    return i && (!p(this, De) && this.isHover && T(this, Bs, cc).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const t = super.hide();
    return t && this.element.classList.remove(this.elementShowClass), t;
  }
  toggle(t, s) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...s });
  }
  destroy() {
    p(this, De) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", p(this, Ie)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  _getPopperOptions() {
    var i, o;
    const t = super._getPopperOptions(), s = this._getArrowSize();
    return s && this.arrowEl && ((i = t.middleware) == null || i.push(Ju(s)), (o = t.middleware) == null || o.push(Ku({ element: this.arrowEl }))), t;
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
let et = zo;
De = new WeakMap(), He = new WeakMap(), Ie = new WeakMap(), Bs = new WeakSet(), cc = function() {
  const { menu: t } = this;
  t.addEventListener("mouseenter", p(this, Ie)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), $(this, De, !0);
}, x(et, "NAME", "dropdown"), x(et, "MENU_CLASS", "dropdown-menu"), x(et, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), x(et, "DEFAULT", {
  ...ot.DEFAULT,
  strategy: "fixed",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  var s;
  const n = e.target, t = (s = n.closest) == null ? void 0 : s.call(n, et.MENU_SELECTOR);
  if (t) {
    const i = et.ensure(t);
    i.options.trigger === "click" && i.toggle();
  } else
    et.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const n = e.target, t = (i = n.closest) == null ? void 0 : i.call(n, et.MENU_SELECTOR);
  if (!t)
    return;
  const s = et.ensure(t);
  s.isHover && s.show();
});
const Zu = (e) => {
  const n = document.getElementsByClassName("with-dropdown-show")[0];
  if (!n)
    return;
  const t = typeof n.closest == "function" ? n.closest(et.MENU_SELECTOR) : null;
  !t || !e.target.contains(t) || et.clear({ event: e });
};
window.addEventListener("scroll", Zu, !0);
var On, We;
class Qu extends z {
  constructor(t) {
    var s;
    super(t);
    b(this, On, void 0);
    b(this, We, xe());
    this.state = { placement: ((s = t.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return p(this, We);
  }
  get triggerElement() {
    return p(this, We).current;
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
    }), $(this, On, et.ensure(this.triggerElement, {
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
      ref: p(this, We)
    };
  }
  render() {
    const { children: t, ...s } = this.beforeRender();
    return /* @__PURE__ */ w("div", { ...s, children: t });
  }
}
On = new WeakMap(), We = new WeakMap();
class th extends Qu {
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
    return s.caret = i, /* @__PURE__ */ w(Lt, { ...s });
  }
}
function ac({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ w(th, { type: t, ...s });
}
let uc = class extends z {
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
    return /* @__PURE__ */ w(Lt, { ...i }, s);
  }
  renderItem(n, t, s) {
    const { itemRender: i, defaultBtnProps: o, onClickItem: r } = n, l = { key: s, ...t };
    if (o && Object.assign(l, o), r && (l.onClick = this.handleItemClick.bind(this, l, s, t.onClick)), i) {
      const a = i.call(this, l, dt);
      if (nt(a))
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
      onClickItem: h,
      beforeRender: c,
      afterRender: u,
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
function eh({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ w(uc, { type: t, ...s });
}
var Te;
let sn = (Te = class extends Di {
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
}, x(Te, "ItemComponents", {
  item: Lu,
  dropdown: ac,
  "btn-group": eh
}), x(Te, "ROOT_TAG", "nav"), x(Te, "NAME", "toolbar"), x(Te, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), Te);
function nh({
  className: e,
  style: n,
  actions: t,
  heading: s,
  content: i,
  contentClass: o,
  children: r,
  close: l,
  onClose: a,
  icon: h,
  ...c
}) {
  let u;
  l === !0 ? u = /* @__PURE__ */ w(Lt, { className: "alert-close btn ghost", square: !0, onClick: a, children: /* @__PURE__ */ w("span", { class: "close" }) }) : nt(l) ? u = l : typeof l == "object" && (u = /* @__PURE__ */ w(Lt, { ...l, onClick: a }));
  const d = nt(t) ? t : t ? /* @__PURE__ */ w(sn, { ...t }) : null;
  return /* @__PURE__ */ w("div", { className: O("alert", e), style: n, ...c, children: [
    nt(h) ? h : typeof h == "string" ? /* @__PURE__ */ w("i", { className: `icon ${h}` }) : null,
    nt(i) ? i : /* @__PURE__ */ w("div", { className: O("alert-content", o), children: [
      nt(s) ? s : s && /* @__PURE__ */ w("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ w("div", { className: "alert-text", children: i }),
      s ? d : null
    ] }),
    s ? null : d,
    u,
    r
  ] });
}
function sh(e) {
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
let ih = class extends z {
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
      time: h,
      ...c
    } = this.props;
    return /* @__PURE__ */ w(
      nh,
      {
        className: O("messager", a, i, r === !0 ? sh(o) : r, l ? "in" : ""),
        ...c
      }
    );
  }
};
var je, gs;
class ms extends J {
  constructor() {
    super(...arguments);
    b(this, je);
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
    this._show || (this.emit("show"), this.render(), this._show = !0, T(this, je, gs).call(this, () => {
      this.emit("shown");
      const { time: t } = this.options;
      t && T(this, je, gs).call(this, () => this.hide(), t);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), T(this, je, gs).call(this, () => {
      this.emit("hidden");
    }));
  }
}
je = new WeakSet(), gs = function(t, s = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, s);
}, x(ms, "NAME", "MessagerItem"), x(ms, "EVENTS", !0), x(ms, "Component", ih);
var de, Be, Ht, zs, hc, Fs, fc;
const Fo = class extends Tt {
  constructor() {
    super(...arguments);
    b(this, zs);
    b(this, Fs);
    b(this, de, void 0);
    b(this, Be, os(6));
    b(this, Ht, void 0);
  }
  get id() {
    return p(this, Be);
  }
  get isShown() {
    var t;
    return !!((t = p(this, Ht)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), T(this, zs, hc).call(this).show();
  }
  hide() {
    var t;
    (t = p(this, Ht)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: s, ...i } = t, o = new Fo(s || "body", i);
    return o.show(), o;
  }
};
let un = Fo;
de = new WeakMap(), Be = new WeakMap(), Ht = new WeakMap(), zs = new WeakSet(), hc = function() {
  if (p(this, Ht))
    p(this, Ht).setOptions(this.options);
  else {
    const t = T(this, Fs, fc).call(this), s = new ms(t, this.options);
    s.on("hidden", () => {
      s.destroy(), t.remove(), $(this, de, void 0);
    }), $(this, Ht, s);
  }
  return p(this, Ht);
}, Fs = new WeakSet(), fc = function() {
  if (p(this, de))
    return p(this, de);
  const { placement: t = "top" } = this.options;
  let s = this.element.querySelector(`.messagers-${t}`);
  s || (s = document.createElement("div"), s.className = `messagers messagers-${t}`, this.element.appendChild(s));
  let i = s.querySelector(`#messager-${p(this, Be)}`);
  return i || (i = document.createElement("div"), i.className = "messager-holder", i.id = `messager-${p(this, Be)}`, s.appendChild(i), $(this, de, i)), i;
}, x(un, "NAME", "messager"), x(un, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
R(document).on("zui.messager.show", (e, n) => {
  n && un.show(n);
});
var fs;
let oh = (fs = class extends z {
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
class $r extends J {
}
x($r, "NAME", "table-sorter"), x($r, "Component", oh);
let rh = class extends z {
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
      defaultChecked: h,
      onChange: c,
      ...u
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
        ...u
      },
      ...y,
      i
    );
  }
};
class kr extends J {
}
x(kr, "NAME", "switch"), x(kr, "Component", rh);
function lh(e) {
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
function ch(e, n) {
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
  getClassList: Pi,
  isElementVisible: ch,
  selectText: lh
}, Symbol.toStringTag, { value: "Module" }));
/*! js-cookie v3.0.1 | MIT */
function us(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n];
    for (var s in t)
      e[s] = t[s];
  }
  return e;
}
var ah = {
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
function ao(e, n) {
  function t(i, o, r) {
    if (!(typeof document > "u")) {
      r = us({}, n, r), typeof r.expires == "number" && (r.expires = new Date(Date.now() + r.expires * 864e5)), r.expires && (r.expires = r.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var l = "";
      for (var a in r)
        r[a] && (l += "; " + a, r[a] !== !0 && (l += "=" + r[a].split(";")[0]));
      return document.cookie = i + "=" + e.write(o, i) + l;
    }
  }
  function s(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var o = document.cookie ? document.cookie.split("; ") : [], r = {}, l = 0; l < o.length; l++) {
        var a = o[l].split("="), h = a.slice(1).join("=");
        try {
          var c = decodeURIComponent(a[0]);
          if (r[c] = e.read(h, c), i === c)
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
          us({}, o, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return ao(this.converter, us({}, this.attributes, i));
      },
      withConverter: function(i) {
        return ao(us({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(n) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var uh = ao(ah, { path: "/" });
window.$ && Object.assign(window.$, { cookie: uh });
var dc = function(e, n, t, s) {
  var i;
  n[0] = 0;
  for (var o = 1; o < n.length; o++) {
    var r = n[o++], l = n[o] ? (n[0] |= r ? 1 : 2, t[n[o++]]) : n[++o];
    r === 3 ? s[0] = l : r === 4 ? s[1] = Object.assign(s[1] || {}, l) : r === 5 ? (s[1] = s[1] || {})[n[++o]] = l : r === 6 ? s[1][n[++o]] += l + "" : r ? (i = e.apply(l, dc(e, l, t, ["", null])), s.push(i), l[0] ? n[0] |= 2 : (n[o - 2] = 0, n[o] = i)) : s.push(l);
  }
  return s;
}, Rr = /* @__PURE__ */ new Map();
function pc(e) {
  var n = Rr.get(this);
  return n || (n = /* @__PURE__ */ new Map(), Rr.set(this, n)), (n = dc(this, n.get(e) || (n.set(e, n = function(t) {
    for (var s, i, o = 1, r = "", l = "", a = [0], h = function(d) {
      o === 1 && (d || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? a.push(0, d, r) : o === 3 && (d || r) ? (a.push(3, d, r), o = 2) : o === 2 && r === "..." && d ? a.push(4, d, 0) : o === 2 && r && !d ? a.push(5, 0, !0, r) : o >= 5 && ((r || !d && o === 5) && (a.push(o, 0, r, i), o = 6), d && (a.push(o, d, 0, i), o = 6)), r = "";
    }, c = 0; c < t.length; c++) {
      c && (o === 1 && h(), h(c));
      for (var u = 0; u < t[c].length; u++)
        s = t[c][u], o === 1 ? s === "<" ? (h(), a = [a], o = 3) : r += s : o === 4 ? r === "--" && s === ">" ? (o = 1, r = "") : r = s + r[0] : l ? s === l ? l = "" : r += s : s === '"' || s === "'" ? l = s : s === ">" ? (h(), o = 1) : o && (s === "=" ? (o = 5, i = r, r = "") : s === "/" && (o < 5 || t[c][u + 1] === ">") ? (h(), o === 3 && (a = a[0]), o = a, (a = a[0]).push(2, 0, o), o = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), o = 2) : r += s), o === 3 && r === "!--" && (o = 4, a = a[0]);
    }
    return h(), a;
  }(e)), n), arguments, [])).length > 1 ? n : n[0];
}
var hh = pc.bind(dt);
Object.assign(window, { htm: pc, html: hh, preact: Sa });
var Pn, Yt, xt, ze, Fe, ys;
const Uo = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(n, t = "local") {
    b(this, Fe);
    b(this, Pn, void 0);
    b(this, Yt, void 0);
    b(this, xt, void 0);
    b(this, ze, void 0);
    $(this, Pn, t), $(this, Yt, `ZUI_STORE:${n ?? os()}`), $(this, xt, t === "local" ? localStorage : sessionStorage);
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
    return this.type === "session" ? this : (p(this, ze) || $(this, ze, new Uo(p(this, Yt), "session")), p(this, ze));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(n, t) {
    const s = p(this, xt).getItem(T(this, Fe, ys).call(this, n));
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
    p(this, xt).setItem(T(this, Fe, ys).call(this, n), JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(n) {
    p(this, xt).removeItem(T(this, Fe, ys).call(this, n));
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
let Ns = Uo;
Pn = new WeakMap(), Yt = new WeakMap(), xt = new WeakMap(), ze = new WeakMap(), Fe = new WeakSet(), ys = function(n) {
  return `${p(this, Yt)}:${n}`;
};
const fh = new Ns("DEFAULT");
function dh(e, n = "local") {
  return new Ns(e, n);
}
Object.assign(fh, { create: dh });
function ph(e) {
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
function mh(e) {
  const [n, t, s] = typeof e == "string" ? ph(e) : e;
  return n * 0.299 + t * 0.587 + s * 0.114 > 186;
}
function Tr(e, n) {
  return mh(e) ? (n == null ? void 0 : n.dark) ?? "#333333" : (n == null ? void 0 : n.light) ?? "#ffffff";
}
function Lr(e, n = 255) {
  return Math.min(Math.max(e, 0), n);
}
function gh(e, n, t) {
  e = e % 360 / 360, n = Lr(n), t = Lr(t);
  const s = t <= 0.5 ? t * (n + 1) : t + n - t * n, i = t * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function yh(e) {
  let n = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let t = 0; t < e.length; ++t)
      n += (t + 1) * e.charCodeAt(t);
  return n;
}
function _h(e, n) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= n ? e : e.substring(e.length - n) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= n ? e : e.substring(0, n), e;
}
let mc = class extends z {
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
      code: h,
      maxTextLength: c = 2,
      src: u,
      hueDistance: d = 43,
      saturation: f = 0.4,
      lightness: m = 0.6,
      children: g,
      ...y
    } = this.props, _ = ["avatar", n], v = { ...t, background: r, color: l };
    let E = 32;
    s && (typeof s == "number" ? (v.width = `${s}px`, v.height = `${s}px`, v.fontSize = `${Math.max(12, Math.round(s / 2))}px`, E = s) : (_.push(`size-${s}`), E = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? _.push("circle") : o && (typeof o == "number" ? v.borderRadius = `${o}px` : _.push(`rounded-${o}`));
    let k;
    if (u)
      _.push("has-img"), k = /* @__PURE__ */ w("img", { className: "avatar-img", src: u, alt: a });
    else if (a != null && a.length) {
      const L = _h(a, c);
      if (_.push("has-text", `has-text-${L.length}`), r)
        !l && r && (v.color = Tr(r));
      else {
        const M = h ?? a, N = (typeof M == "number" ? M : yh(M)) * d % 360;
        if (v.background = `hsl(${N},${f * 100}%,${m * 100}%)`, !l) {
          const H = gh(N, f, m);
          v.color = Tr(H);
        }
      }
      let A;
      E && E < 14 * L.length && (A = { transform: `scale(${E / (14 * L.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ w("div", { "data-actualSize": E, className: "avatar-text", style: A, children: L });
    }
    return /* @__PURE__ */ w(
      "div",
      {
        className: O(_),
        style: v,
        ...y,
        children: [
          k,
          g
        ]
      }
    );
  }
};
class Ar extends J {
}
x(Ar, "NAME", "avatar"), x(Ar, "Component", mc);
class Nr extends J {
}
x(Nr, "NAME", "btngroup"), x(Nr, "Component", uc);
function gc(e, n, t) {
  if (t) {
    e.setAttribute("class", O(n));
    return;
  }
  Pi(e.getAttribute("class"), n).forEach(([s, i]) => {
    e.classList.toggle(s, i);
  });
}
function hn(e, n, t) {
  if (typeof n == "object")
    return Object.entries(n).forEach(([s, i]) => {
      hn(e, s, i);
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
var pe, Dn, Kt, Us, Ue, _s;
const Z = class extends Tt {
  constructor() {
    super(...arguments);
    b(this, Ue);
    b(this, pe, 0);
    b(this, Dn, void 0);
    b(this, Kt, void 0);
    b(this, Us, (t) => {
      const s = t.target;
      (s.closest(Z.DISMISS_SELECTOR) || this.options.backdrop === !0 && !s.closest(".modal-dialog") && s.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(Z.CLASS_SHOW);
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
          (!p(this, Kt) || p(this, Kt)[0] !== i || p(this, Kt)[1] !== o) && ($(this, Kt, [i, o]), this.layout());
        });
        s.observe(t), $(this, Dn, s);
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
    return gc(s, [{
      "modal-trans": i,
      "modal-no-backdrop": !o
    }, Z.CLASS_SHOW, r]), hn(s, {
      zIndex: `${Z.zIndex++}`,
      ...l
    }), this.layout(), this.emit("show", this), T(this, Ue, _s).call(this, () => {
      s.classList.add(Z.CLASS_SHOWN), T(this, Ue, _s).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(Z.CLASS_SHOWN), this.emit("hide", this), T(this, Ue, _s).call(this, () => {
      this.modalElement.classList.remove(Z.CLASS_SHOW), this.emit("hidden", this);
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
    typeof s == "object" ? (o.width = s.width, o.height = s.height) : typeof s == "string" && ["md", "sm", "lg", "full"].includes(s) ? Ms(i, "data-size", s) : s && (o.width = s), hn(i, o), t = t ?? this.options.position ?? "fit";
    const r = i.clientWidth, l = i.clientHeight;
    $(this, Kt, [r, l]), typeof t == "function" && (t = t({ width: r, height: l }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof t == "number" ? (a.alignSelf = "flex-start", a.top = t) : typeof t == "object" && t ? (a.alignSelf = "flex-start", Object.assign(a, t)) : t === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - l) / 3))}px`) : t === "bottom" ? a.alignSelf = "flex-end" : t === "top" ? a.alignSelf = "flex-start" : t !== "center" && typeof t == "string" && (a.alignSelf = "flex-start", a.top = t), hn(i, a), hn(this.modalElement, "justifyContent", a.left ? "flex-start" : "center");
  }
  static query(t) {
    if (t === void 0)
      return t = document.querySelector(`.modal.${Z.CLASS_SHOW}`), Array.from(Z.getAll().values()).find((s) => s.isShown);
    if (typeof t == "string" && (t = document.querySelector(t)), !!t)
      return t.classList.contains("modal") || (t = t.closest(".modal")), Array.from(Z.getAll().values()).find((s) => s.modalElement === t);
  }
  static hide(t) {
    var s;
    (s = Z.query(t)) == null || s.hide();
  }
  static show(t) {
    var s;
    (s = Z.query(t)) == null || s.show();
  }
};
let tt = Z;
pe = new WeakMap(), Dn = new WeakMap(), Kt = new WeakMap(), Us = new WeakMap(), Ue = new WeakSet(), _s = function(t, s) {
  p(this, pe) && (clearTimeout(p(this, pe)), $(this, pe, 0)), t && (this.options.animation ? $(this, pe, window.setTimeout(t, s ?? this.options.transTime)) : t());
}, x(tt, "NAME", "Modal"), x(tt, "EVENTS", !0), x(tt, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), x(tt, "CLASS_SHOW", "show"), x(tt, "CLASS_SHOWN", "in"), x(tt, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), x(tt, "zIndex", 2e3);
R(window).on("resize", () => {
  tt.all.forEach((e) => {
    const n = e;
    n.isShown && n.options.responsive && n.layout();
  });
});
R(document).on("zui.modal.hide", (e, n) => {
  tt.hide(n == null ? void 0 : n.target);
});
class yc extends z {
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
    return nt(n) ? n : n === !1 || !t ? null : /* @__PURE__ */ w("div", { className: "modal-header", children: /* @__PURE__ */ w("div", { className: "modal-title", children: t }) });
  }
  renderActions() {
    const {
      actions: n,
      closeBtn: t
    } = this.props;
    return !t && !n ? null : nt(n) ? n : /* @__PURE__ */ w("div", { className: "modal-actions", children: [
      n ? /* @__PURE__ */ w(sn, { ...n }) : null,
      t ? /* @__PURE__ */ w("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ w("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: n
    } = this.props;
    return n ? nt(n) ? n : /* @__PURE__ */ w("div", { className: "modal-body", children: n }) : null;
  }
  renderFooter() {
    const {
      footer: n,
      footerActions: t
    } = this.props;
    return nt(n) ? n : n === !1 || !t ? null : /* @__PURE__ */ w("div", { className: "modal-footer", children: t ? /* @__PURE__ */ w(sn, { ...t }) : null });
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
x(yc, "defaultProps", { closeBtn: !0 });
var Hn, Ve, In;
class wh extends z {
  constructor() {
    super(...arguments);
    b(this, Hn, xe());
    b(this, Ve, void 0);
    x(this, "state", {});
    b(this, In, () => {
      var i, o;
      const t = (o = (i = p(this, Hn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!t)
        return;
      let s = p(this, Ve);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const r = t.body, l = t.documentElement, a = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, l.offsetHeight));
        this.setState({ height: a });
      }), s.observe(t.body), s.observe(t.documentElement), $(this, Ve, s);
    });
  }
  componentDidMount() {
    p(this, In).call(this);
  }
  componentWillUnmount() {
    var t;
    (t = p(this, Ve)) == null || t.disconnect();
  }
  render() {
    const { url: t } = this.props;
    return /* @__PURE__ */ w(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: t,
        ref: p(this, Hn),
        onLoad: p(this, In)
      }
    );
  }
}
Hn = new WeakMap(), Ve = new WeakMap(), In = new WeakMap();
function _c(e) {
  const n = e.querySelectorAll("script");
  n && n.forEach((t) => {
    const s = document.createElement("script");
    s.type = t.type || "text/javascript", s.async = !1, s.innerHTML = t.innerHTML, e.appendChild(s), t.remove();
  });
}
var Wn;
class bh extends z {
  constructor() {
    super(...arguments);
    b(this, Wn, xe());
  }
  componentDidMount() {
    if (!this.props.execScript)
      return;
    const t = p(this, Wn).current;
    t && _c(t);
  }
  render() {
    const { execScript: t, html: s, ...i } = this.props;
    return /* @__PURE__ */ w("div", { ref: p(this, Wn), dangerouslySetInnerHTML: { __html: s }, ...i });
  }
}
Wn = new WeakMap();
function vh(e, n) {
  const { custom: t, title: s, content: i } = n;
  return {
    body: i,
    title: s,
    ...typeof t == "function" ? t() : t
  };
}
async function xh(e, n) {
  const { dataType: t = "html", url: s, request: i, custom: o, title: r, replace: l = !0, execScript: a = !0 } = n, c = await (await fetch(s, i)).text();
  if (t !== "html")
    try {
      const u = JSON.parse(c);
      return {
        title: r,
        ...o,
        ...u
      };
    } catch {
    }
  return l !== !1 && t === "html" ? [c] : {
    title: r,
    ...o,
    body: t === "html" ? /* @__PURE__ */ w(bh, { className: "modal-body", html: c, execScript: a }) : c
  };
}
async function Eh(e, n) {
  const { url: t, custom: s, title: i } = n;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ w(wh, { url: t })
  };
}
const Sh = {
  custom: vh,
  ajax: xh,
  iframe: Eh
};
var jn, Bn, Et, qe, ws, Vs, wc, zn, uo;
const Mt = class extends tt {
  constructor() {
    super(...arguments);
    b(this, qe);
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
      }), gc(t, ["modal modal-async", this.options.className]), this.element.appendChild(t)), $(this, jn, t);
    }
    return t;
  }
  afterInit() {
    super.afterInit(), $(this, Bn, this.options.id || `modal-${os()}`);
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
    const { modalElement: t, options: s } = this, { type: i, loadTimeout: o } = s, r = Sh[i];
    if (!r)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    t.classList.add(Mt.LOADING_CLASS), await T(this, Vs, wc).call(this), o && $(this, Et, window.setTimeout(() => {
      $(this, Et, 0), T(this, zn, uo).call(this, this.options.timeoutTip);
    }, o));
    const l = await r.call(this, t, s);
    return l === !1 ? await T(this, zn, uo).call(this, this.options.failedTip) : l && typeof l == "object" && await T(this, qe, ws).call(this, l), p(this, Et) && (clearTimeout(p(this, Et)), $(this, Et, 0)), t.classList.remove(Mt.LOADING_CLASS), !0;
  }
  static open(t) {
    return new Promise((s) => {
      const { container: i = document.body, ...o } = t, r = new Mt(i, { show: !0, ...o });
      r.once("hidden", () => s(r)), r.show();
    });
  }
  static alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: s, message: i, icon: o, iconClass: r = "icon-lg muted", actions: l = "confirm", onClickAction: a, custom: h, ...c } = t;
    let u = /* @__PURE__ */ w("div", { children: i });
    o ? u = /* @__PURE__ */ w("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ w("div", { className: `icon ${o} ${r}` }),
      u
    ] }) : u = /* @__PURE__ */ w("div", { className: "modal-body", children: u });
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
      content: u,
      backdrop: "static",
      custom: { footerActions: m, ...typeof h == "function" ? h() : h },
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
jn = new WeakMap(), Bn = new WeakMap(), Et = new WeakMap(), qe = new WeakSet(), ws = function(t) {
  return new Promise((s) => {
    if (Array.isArray(t))
      return this.modalElement.innerHTML = t[0], _c(this.modalElement), s();
    const { afterRender: i, ...o } = t;
    t = {
      afterRender: (r) => {
        this.layout(), i == null || i(r), s();
      },
      ...o
    }, is(
      /* @__PURE__ */ w(yc, { ...t }),
      this.modalElement
    );
  });
}, Vs = new WeakSet(), wc = function() {
  const { loadingText: t } = this.options;
  return T(this, qe, ws).call(this, {
    body: /* @__PURE__ */ w("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ w("span", { className: "spinner" }),
      t ? /* @__PURE__ */ w("span", { className: "modal-loading-text", children: t }) : null
    ] })
  });
}, zn = new WeakSet(), uo = function(t) {
  if (t)
    return T(this, qe, ws).call(this, {
      body: /* @__PURE__ */ w("div", { className: "modal-load-failed", children: t })
    });
}, x(fn, "LOADING_CLASS", "loading"), x(fn, "DEFAULT", {
  ...tt.DEFAULT,
  loadTimeout: 1e4
});
var Xt, qs, bc, Gs, vc, Ys, xc;
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
    return T(this, Gs, vc).call(this).show();
  }
  hide() {
    var t;
    (t = p(this, Xt)) == null || t.hide();
  }
}
Xt = new WeakMap(), qs = new WeakSet(), bc = function() {
  const {
    container: t,
    ...s
  } = this.options, i = s, o = this.element.getAttribute("href") || "";
  return i.type || (i.target || o[0] === "#" ? i.type = "static" : i.type = i.type || (i.url || o ? "ajax" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && o[0] !== "#" && (i.url = o), i;
}, Gs = new WeakSet(), vc = function() {
  const t = T(this, qs, bc).call(this);
  let s = p(this, Xt);
  return s ? s.setOptions(t) : t.type === "static" ? (s = new tt(T(this, Ys, xc).call(this), t), $(this, Xt, s)) : (s = new fn(this.container, t), $(this, Xt, s)), s;
}, Ys = new WeakSet(), xc = function() {
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
var to;
let Ch = (to = class extends Di {
  beforeRender() {
    const n = super.beforeRender();
    return n.className = O(n.className, n.type ? `nav-${n.type}` : "", {
      "nav-stacked": n.stacked
    }), n;
  }
}, x(to, "NAME", "nav"), to);
class Mr extends J {
}
x(Mr, "NAME", "nav"), x(Mr, "Component", Ch);
function Rn(e, n) {
  const t = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof n == "string" && (n === "first" ? n = 1 : n === "last" ? n = t : n === "prev" ? n = e.page - 1 : n === "next" ? n = e.page + 1 : n === "current" ? n = e.page : n = Number.parseInt(n, 10)), n = n !== void 0 ? Math.max(1, Math.min(n < 0 ? t + n : n, t)) : e.page, {
    ...e,
    pageTotal: t,
    page: n
  };
}
function $h({
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
  return l.text === void 0 && !l.icon && i && (l.text = typeof i == "function" ? i(a) : pt(i, a)), l.url === void 0 && r && (l.url = typeof r == "function" ? r(a) : pt(r, a)), l.disabled === void 0 && (l.disabled = s !== void 0 && a.page === o.page), /* @__PURE__ */ w(Lt, { type: t, ...l });
}
const Ot = 24 * 60 * 60 * 1e3, lt = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), rs = (e, n = /* @__PURE__ */ new Date()) => (e = lt(e), n = lt(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), ho = (e, n = /* @__PURE__ */ new Date()) => lt(e).getFullYear() === lt(n).getFullYear(), kh = (e, n = /* @__PURE__ */ new Date()) => (e = lt(e), n = lt(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), Bf = (e, n = /* @__PURE__ */ new Date()) => {
  e = lt(e), n = lt(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), i = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, zf = (e, n) => rs(lt(n), e), Ff = (e, n) => rs(lt(n).getTime() - Ot, e), Uf = (e, n) => rs(lt(n).getTime() + Ot, e), Vf = (e, n) => rs(lt(n).getTime() - 2 * Ot, e), fo = (e, n = "yyyy-MM-dd hh:mm") => {
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
}, qf = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = fo(e, ho(e) ? s.month : s.full);
  if (rs(e, n))
    return i;
  const o = fo(n, ho(e, n) ? kh(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
}, Gf = (e) => {
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
}, Or = (e, n, t = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, Or(e, "day", t, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, Or(e, "day", t, s);
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
function Rh({
  key: e,
  type: n,
  page: t,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const l = Rn(i, t);
  return s = typeof s == "function" ? s(l) : pt(s, l), /* @__PURE__ */ w(Fl, { ...r, children: [
    o,
    s
  ] });
}
function Th({
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
  const a = { ...l, square: !0 }, h = () => (a.text = "", a.icon = "icon-ellipsis-h", a.disabled = !0, /* @__PURE__ */ w(Lt, { type: t, ...a })), c = (d, f) => {
    const m = [];
    for (let g = d; g <= f; g++) {
      a.text = g, delete a.icon, a.disabled = !1;
      const y = Rn(i, g);
      r && (a.url = typeof r == "function" ? r(y) : pt(r, y)), m.push(/* @__PURE__ */ w(Lt, { type: t, ...a, onClick: o }));
    }
    return m;
  };
  let u = [];
  return u = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? u = [...u, ...c(2, i.pageTotal)] : i.page < s - 2 ? u = [...u, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? u = [...u, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : u = [...u, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), u;
}
function Lh({
  type: e,
  pagerInfo: n,
  linkCreator: t,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  ...o
}) {
  var l;
  i.items = i.items ?? s.map((a) => {
    const h = { ...n, recPerPage: a };
    return {
      text: `${a}`,
      url: typeof t == "function" ? t(h) : pt(t, h)
    };
  });
  const { text: r = "" } = o;
  return o.text = typeof r == "function" ? r(n) : pt(r, n), i.menu = { ...i.menu, className: O((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ w(ac, { type: "dropdown", dropdown: i, ...o });
}
function Ah({
  key: e,
  page: n,
  type: t,
  btnType: s,
  pagerInfo: i,
  size: o,
  onClick: r,
  onChange: l,
  linkCreator: a,
  ...h
}) {
  const c = { ...h };
  let u;
  const d = (g) => {
    var y;
    u = Number((y = g.target) == null ? void 0 : y.value) || 1, u = u > i.pageTotal ? i.pageTotal : u;
  }, f = (g) => {
    if (!(g != null && g.target))
      return;
    u = u <= i.pageTotal ? u : i.pageTotal;
    const y = Rn(i, u);
    l && !l({ info: y, event: g }) || (g.target.href = c.url = typeof a == "function" ? a(y) : pt(a, y));
  }, m = Rn(i, n || 0);
  return c.url = typeof a == "function" ? a(m) : pt(a, m), /* @__PURE__ */ w("div", { className: O("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ w("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ w(Lt, { type: s, ...c, onClick: f })
  ] });
}
var cn;
let Nh = (cn = class extends sn {
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
  link: $h,
  info: Rh,
  nav: Th,
  "size-menu": Lh,
  goto: Ah
}), cn);
class Pr extends J {
}
x(Pr, "NAME", "pager"), x(Pr, "Component", Nh);
var Ks;
class Mh extends z {
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
      children: h
    } = this.props;
    let c;
    return l.length ? c = /* @__PURE__ */ w("div", { className: "picker-multi-selections", children: l.map((u, d) => /* @__PURE__ */ w("div", { className: "picker-multi-selection", children: [
      u.text ?? u.value,
      /* @__PURE__ */ w("div", { className: "picker-deselect-btn btn", onClick: p(this, Ks), "data-idx": d, children: /* @__PURE__ */ w("span", { className: "close" }) })
    ] })) }) : c = /* @__PURE__ */ w("span", { className: "picker-select-placeholder", children: o }), /* @__PURE__ */ w(
      "div",
      {
        className: O("picker-select picker-select-multi form-control", t, { disabled: i, focused: r }),
        style: s,
        onClick: a,
        children: [
          c,
          h,
          /* @__PURE__ */ w("span", { class: "caret" })
        ]
      }
    );
  }
}
Ks = new WeakMap();
var Xs;
class Oh extends z {
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
      onClick: h,
      children: c
    } = this.props, [u] = l, d = u ? /* @__PURE__ */ w("span", { className: "picker-single-selection", children: u.text ?? u.value }) : /* @__PURE__ */ w("span", { className: "picker-select-placeholder", children: o }), f = u && a ? /* @__PURE__ */ w("button", { type: "button", className: "btn picker-deselect-btn", onClick: p(this, Xs), children: /* @__PURE__ */ w("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ w(
      "div",
      {
        className: O("picker-select picker-select-single form-control", t, { disabled: i, focused: r }),
        style: s,
        onClick: h,
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
var Js, Ec, Fn, Zs, Un, Qs;
class Ph extends z {
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
      menu: h,
      searchHint: c
    } = this.props, { shown: u, keys: d } = this.state, f = d.trim().length;
    return /* @__PURE__ */ w("div", { className: O("picker-menu", i, { shown: u, "has-search": f }), id: `picker-menu-${t}`, style: { maxHeight: r, maxWidth: l, width: a, ...o }, children: [
      s ? /* @__PURE__ */ w("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ w("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: c, value: d, onChange: p(this, Un), onInput: p(this, Un) }),
        f ? /* @__PURE__ */ w("button", { type: "button", className: "btn picker-menu-search-clear", onClick: p(this, Qs), children: /* @__PURE__ */ w("span", { className: "close" }) }) : /* @__PURE__ */ w("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ w(Do, { className: "picker-menu-list", items: T(this, Js, Ec).call(this), onClickItem: p(this, Zs), ...h })
    ] });
  }
}
Js = new WeakSet(), Ec = function() {
  const { selections: t, items: s } = this.props, i = new Set(t), o = this.state.keys.toLowerCase().split(" ").filter((r) => r.length);
  return s.reduce((r, l) => {
    const {
      value: a,
      keys: h,
      text: c,
      ...u
    } = l;
    if (!o.length || o.every((d) => a.toLowerCase().includes(d) || (h == null ? void 0 : h.toLowerCase().includes(d)) || typeof c == "string" && c.toLowerCase().includes(d))) {
      let d = c ?? a;
      typeof d == "string" && o.length && (d = /* @__PURE__ */ w("span", { dangerouslySetInnerHTML: { __html: o.reduce((f, m) => f.replace(m, `<span class="picker-menu-item-match">${m}</span>`), d) } })), r.push({
        key: a,
        active: i.has(a),
        text: d,
        ...u
      });
    }
    return r;
  }, []);
}, Fn = new WeakMap(), Zs = new WeakMap(), Un = new WeakMap(), Qs = new WeakMap();
function Dr(e) {
  const n = /* @__PURE__ */ new Set();
  return e.reduce((t, s) => (n.has(s) || (n.add(s), t.push(s)), t), []);
}
var eo, Vn, qn, Gn, Ge, bs, Yn, po, ti, Sc, ei, Cc, ni, si, ii, oi, ri, $c;
let Dh = (eo = class extends z {
  constructor(t) {
    super(t);
    b(this, Ge);
    b(this, Yn);
    b(this, ti);
    b(this, ei);
    b(this, ri);
    b(this, Vn, 0);
    b(this, qn, os());
    b(this, Gn, xe());
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
      value: T(this, ti, Sc).call(this, t.defaultValue) ?? "",
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
    return T(this, Yn, po).call(this, this.state.value);
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
      const i = ++Jo(this, Vn)._;
      if (await T(this, Ge, bs).call(this, { loading: !0, items: [] }), t = await t(), p(this, Vn) !== i)
        return [];
    }
    const s = {};
    return Array.isArray(t) && this.state.items !== t && (s.items = t), this.state.loading && (s.loading = !1), Object.keys(s).length && await T(this, Ge, bs).call(this, s), t;
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
    await T(this, Ge, bs).call(this, { open: t }), t && this.loadItemList();
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
    } = this.props, r = o ? Mh : Oh;
    return /* @__PURE__ */ w("div", { className: O("picker", t), style: s, id: `picker-${p(this, qn)}`, children: [
      /* @__PURE__ */ w(r, { ...T(this, ei, Cc).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ w(Ph, { ...T(this, ri, $c).call(this), ref: p(this, Gn) }) : null
    ] });
  }
}, Vn = new WeakMap(), qn = new WeakMap(), Gn = new WeakMap(), Ge = new WeakSet(), bs = function(t) {
  return new Promise((s) => {
    this.setState(t, s);
  });
}, Yn = new WeakSet(), po = function(t) {
  return typeof t == "string" ? Dr(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) ? Dr(t) : [];
}, ti = new WeakSet(), Sc = function(t) {
  const s = T(this, Yn, po).call(this, t);
  return s.length ? s.join(this.props.valueSplitter ?? ",") : void 0;
}, ei = new WeakSet(), Cc = function() {
  const { placeholder: t, disabled: s } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: t,
    disabled: s,
    selections: this.getSelections(),
    onClick: p(this, si),
    onDeselect: p(this, ni)
  };
}, ni = new WeakMap(), si = new WeakMap(), ii = new WeakMap(), oi = new WeakMap(), ri = new WeakSet(), $c = function() {
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
}, x(eo, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), eo);
class Hr extends J {
}
x(Hr, "NAME", "picker"), x(Hr, "Component", Dh);
class Ir extends J {
}
x(Ir, "NAME", "toolbar"), x(Ir, "Component", sn);
function ls(e) {
  return e.split("-")[1];
}
function Wo(e) {
  return e === "y" ? "height" : "width";
}
function Ae(e) {
  return e.split("-")[0];
}
function Wi(e) {
  return ["top", "bottom"].includes(Ae(e)) ? "x" : "y";
}
function Wr(e, n, t) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, l = Wi(n), a = Wo(l), h = s[a] / 2 - i[a] / 2, c = l === "x";
  let u;
  switch (Ae(n)) {
    case "top":
      u = { x: o, y: s.y - i.height };
      break;
    case "bottom":
      u = { x: o, y: s.y + s.height };
      break;
    case "right":
      u = { x: s.x + s.width, y: r };
      break;
    case "left":
      u = { x: s.x - i.width, y: r };
      break;
    default:
      u = { x: s.x, y: s.y };
  }
  switch (ls(n)) {
    case "start":
      u[l] -= h * (t && c ? -1 : 1);
      break;
    case "end":
      u[l] += h * (t && c ? -1 : 1);
  }
  return u;
}
const Hh = async (e, n, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let h = await r.getElementRects({ reference: e, floating: n, strategy: i }), { x: c, y: u } = Wr(h, s, a), d = s, f = {}, m = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: y, fn: _ } = l[g], { x: v, y: E, data: k, reset: L } = await _({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: r, elements: { reference: e, floating: n } });
    c = v ?? c, u = E ?? u, f = { ...f, [y]: { ...f[y], ...k } }, L && m <= 50 && (m++, typeof L == "object" && (L.placement && (d = L.placement), L.rects && (h = L.rects === !0 ? await r.getElementRects({ reference: e, floating: n, strategy: i }) : L.rects), { x: c, y: u } = Wr(h, d, a)), g = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function kc(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Os(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Ih(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: s, y: i, platform: o, rects: r, elements: l, strategy: a } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = n, m = kc(f), g = l[d ? u === "floating" ? "reference" : "floating" : u], y = Os(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(g))) == null || t ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: h, rootBoundary: c, strategy: a })), _ = u === "floating" ? { ...r.floating, x: s, y: i } : r.reference, v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), E = await (o.isElement == null ? void 0 : o.isElement(v)) && await (o.getScale == null ? void 0 : o.getScale(v)) || { x: 1, y: 1 }, k = Os(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: _, offsetParent: v, strategy: a }) : _);
  return { top: (y.top - k.top + m.top) / E.y, bottom: (k.bottom - y.bottom + m.bottom) / E.y, left: (y.left - k.left + m.left) / E.x, right: (k.right - y.right + m.right) / E.x };
}
const Wh = Math.min, jh = Math.max;
function Bh(e, n, t) {
  return jh(e, Wh(n, t));
}
const zh = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { element: t, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: l, platform: a } = n;
  if (t == null)
    return {};
  const h = kc(s), c = { x: i, y: o }, u = Wi(r), d = Wo(u), f = await a.getDimensions(t), m = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", y = l.reference[d] + l.reference[u] - c[u] - l.floating[d], _ = c[u] - l.reference[u], v = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(t));
  let E = v ? u === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
  E === 0 && (E = l.floating[d]);
  const k = y / 2 - _ / 2, L = h[m], A = E - f[d] - h[g], M = E / 2 - f[d] / 2 + k, N = Bh(L, M, A), H = ls(r) != null && M != N && l.reference[d] / 2 - (M < L ? h[m] : h[g]) - f[d] / 2 < 0;
  return { [u]: c[u] - (H ? M < L ? L - M : A - M : 0), data: { [u]: N, centerOffset: M - N } };
} }), Fh = ["top", "right", "bottom", "left"];
Fh.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const Uh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ps(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Uh[n]);
}
function Vh(e, n, t) {
  t === void 0 && (t = !1);
  const s = ls(e), i = Wi(e), o = Wo(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = Ps(r)), { main: r, cross: Ps(r) };
}
const qh = { start: "end", end: "start" };
function Ki(e) {
  return e.replace(/start|end/g, (n) => qh[n]);
}
const Gh = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: l, elements: a } = n, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: m = !0, ...g } = e, y = Ae(s), _ = Ae(r) === r, v = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), E = u || (_ || !m ? [Ps(r)] : function(C) {
      const I = Ps(C);
      return [Ki(C), I, Ki(I)];
    }(r));
    u || f === "none" || E.push(...function(C, I, q, st) {
      const U = ls(C);
      let D = function(V, wt, le) {
        const ce = ["left", "right"], ae = ["right", "left"], Nt = ["top", "bottom"], $e = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return le ? wt ? ae : ce : wt ? ce : ae;
          case "left":
          case "right":
            return wt ? Nt : $e;
          default:
            return [];
        }
      }(Ae(C), q === "start", st);
      return U && (D = D.map((V) => V + "-" + U), I && (D = D.concat(D.map(Ki)))), D;
    }(r, m, f, v));
    const k = [r, ...E], L = await Ih(n, g), A = [];
    let M = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && A.push(L[y]), c) {
      const { main: C, cross: I } = Vh(s, o, v);
      A.push(L[C], L[I]);
    }
    if (M = [...M, { placement: s, overflows: A }], !A.every((C) => C <= 0)) {
      var N;
      const C = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, I = k[C];
      if (I)
        return { data: { index: C, overflows: M }, reset: { placement: I } };
      let q = "bottom";
      switch (d) {
        case "bestFit": {
          var H;
          const st = (H = M.map((U) => [U, U.overflows.filter((D) => D > 0).reduce((D, V) => D + V, 0)]).sort((U, D) => U[1] - D[1])[0]) == null ? void 0 : H[0].placement;
          st && (q = st);
          break;
        }
        case "initialPlacement":
          q = r;
      }
      if (s !== q)
        return { reset: { placement: q } };
    }
    return {};
  } };
}, Yh = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: s } = n, i = await async function(o, r) {
      const { placement: l, platform: a, elements: h } = o, c = await (a.isRTL == null ? void 0 : a.isRTL(h.floating)), u = Ae(l), d = ls(l), f = Wi(l) === "x", m = ["left", "top"].includes(u) ? -1 : 1, g = c && f ? -1 : 1, y = typeof r == "function" ? r(o) : r;
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
  return Tc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let hs;
function Rc() {
  if (hs)
    return hs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (hs = e.brands.map((n) => n.brand + "/" + n.version).join(" "), hs) : navigator.userAgent;
}
function Ut(e) {
  return e instanceof ft(e).HTMLElement;
}
function _t(e) {
  return e instanceof ft(e).Element;
}
function Tc(e) {
  return e instanceof ft(e).Node;
}
function jr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ft(e).ShadowRoot || e instanceof ShadowRoot;
}
function ji(e) {
  const { overflow: n, overflowX: t, overflowY: s, display: i } = Rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + s + t) && !["inline", "contents"].includes(i);
}
function Kh(e) {
  return ["table", "td", "th"].includes(ie(e));
}
function mo(e) {
  const n = /firefox/i.test(Rc()), t = Rt(e), s = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!s && s !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function Lc() {
  return !/^((?!chrome|android).)*safari/i.test(Rc());
}
function jo(e) {
  return ["html", "body", "#document"].includes(ie(e));
}
const Br = Math.min, xn = Math.max, Ds = Math.round;
function Ac(e) {
  const n = Rt(e);
  let t = parseFloat(n.width), s = parseFloat(n.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = Ds(t) !== i || Ds(s) !== o;
  return r && (t = i, s = o), { width: t, height: s, fallback: r };
}
function Nc(e) {
  return _t(e) ? e : e.contextElement;
}
const Mc = { x: 1, y: 1 };
function Ne(e) {
  const n = Nc(e);
  if (!Ut(n))
    return Mc;
  const t = n.getBoundingClientRect(), { width: s, height: i, fallback: o } = Ac(n);
  let r = (o ? Ds(t.width) : t.width) / s, l = (o ? Ds(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
function ve(e, n, t, s) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), l = Nc(e);
  let a = Mc;
  n && (s ? _t(s) && (a = Ne(s)) : a = Ne(e));
  const h = l ? ft(l) : window, c = !Lc() && t;
  let u = (r.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, d = (r.top + (c && ((o = h.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / a.y, f = r.width / a.x, m = r.height / a.y;
  if (l) {
    const g = ft(l), y = s && _t(s) ? ft(s) : s;
    let _ = g.frameElement;
    for (; _ && s && y !== g; ) {
      const v = Ne(_), E = _.getBoundingClientRect(), k = getComputedStyle(_);
      E.x += (_.clientLeft + parseFloat(k.paddingLeft)) * v.x, E.y += (_.clientTop + parseFloat(k.paddingTop)) * v.y, u *= v.x, d *= v.y, f *= v.x, m *= v.y, u += E.x, d += E.y, _ = ft(_).frameElement;
    }
  }
  return { width: f, height: m, top: d, right: u + f, bottom: d + m, left: u, x: u, y: d };
}
function ee(e) {
  return ((Tc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Bi(e) {
  return _t(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Oc(e) {
  return ve(ee(e)).left + Bi(e).scrollLeft;
}
function Xh(e, n, t) {
  const s = Ut(n), i = ee(n), o = ve(e, !0, t === "fixed", n);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && t !== "fixed")
    if ((ie(n) !== "body" || ji(i)) && (r = Bi(n)), Ut(n)) {
      const a = ve(n, !0);
      l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
    } else
      i && (l.x = Oc(i));
  return { x: o.left + r.scrollLeft - l.x, y: o.top + r.scrollTop - l.y, width: o.width, height: o.height };
}
function Tn(e) {
  if (ie(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || (jr(e) ? e.host : null) || ee(e);
  return jr(n) ? n.host : n;
}
function zr(e) {
  return Ut(e) && Rt(e).position !== "fixed" ? e.offsetParent : null;
}
function Fr(e) {
  const n = ft(e);
  let t = zr(e);
  for (; t && Kh(t) && Rt(t).position === "static"; )
    t = zr(t);
  return t && (ie(t) === "html" || ie(t) === "body" && Rt(t).position === "static" && !mo(t)) ? n : t || function(s) {
    let i = Tn(s);
    for (; Ut(i) && !jo(i); ) {
      if (mo(i))
        return i;
      i = Tn(i);
    }
    return null;
  }(e) || n;
}
function Pc(e) {
  const n = Tn(e);
  return jo(n) ? e.ownerDocument.body : Ut(n) && ji(n) ? n : Pc(n);
}
function En(e, n) {
  var t;
  n === void 0 && (n = []);
  const s = Pc(e), i = s === ((t = e.ownerDocument) == null ? void 0 : t.body), o = ft(s);
  return i ? n.concat(o, o.visualViewport || [], ji(s) ? s : []) : n.concat(s, En(s));
}
function Ur(e, n, t) {
  return n === "viewport" ? Os(function(s, i) {
    const o = ft(s), r = ee(s), l = o.visualViewport;
    let a = r.clientWidth, h = r.clientHeight, c = 0, u = 0;
    if (l) {
      a = l.width, h = l.height;
      const d = Lc();
      (d || !d && i === "fixed") && (c = l.offsetLeft, u = l.offsetTop);
    }
    return { width: a, height: h, x: c, y: u };
  }(e, t)) : _t(n) ? function(s, i) {
    const o = ve(s, !0, i === "fixed"), r = o.top + s.clientTop, l = o.left + s.clientLeft, a = Ut(s) ? Ne(s) : { x: 1, y: 1 }, h = s.clientWidth * a.x, c = s.clientHeight * a.y, u = l * a.x, d = r * a.y;
    return { top: d, left: u, right: u + h, bottom: d + c, x: u, y: d, width: h, height: c };
  }(n, t) : Os(function(s) {
    var i;
    const o = ee(s), r = Bi(s), l = (i = s.ownerDocument) == null ? void 0 : i.body, a = xn(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), h = xn(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0);
    let c = -r.scrollLeft + Oc(s);
    const u = -r.scrollTop;
    return Rt(l || o).direction === "rtl" && (c += xn(o.clientWidth, l ? l.clientWidth : 0) - a), { width: a, height: h, x: c, y: u };
  }(ee(e)));
}
const Jh = { getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: s, strategy: i } = e;
  const o = t === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = En(h).filter((y) => _t(y) && ie(y) !== "body"), f = null;
    const m = Rt(h).position === "fixed";
    let g = m ? Tn(h) : h;
    for (; _t(g) && !jo(g); ) {
      const y = Rt(g), _ = mo(g);
      (m ? _ || f : _ || y.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = y : d = d.filter((v) => v !== g), g = Tn(g);
    }
    return c.set(h, d), d;
  }(n, this._c) : [].concat(t), r = [...o, s], l = r[0], a = r.reduce((h, c) => {
    const u = Ur(n, c, i);
    return h.top = xn(u.top, h.top), h.right = Br(u.right, h.right), h.bottom = Br(u.bottom, h.bottom), h.left = xn(u.left, h.left), h;
  }, Ur(n, l, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: s } = e;
  const i = Ut(t), o = ee(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ie(t) !== "body" || ji(o)) && (r = Bi(t)), Ut(t))) {
    const h = ve(t);
    l = Ne(t), a.x = h.x + t.clientLeft, a.y = h.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - r.scrollLeft * l.x + a.x, y: n.y * l.y - r.scrollTop * l.y + a.y };
}, isElement: _t, getDimensions: function(e) {
  return Ac(e);
}, getOffsetParent: Fr, getDocumentElement: ee, getScale: Ne, async getElementRects(e) {
  let { reference: n, floating: t, strategy: s } = e;
  const i = this.getOffsetParent || Fr, o = this.getDimensions;
  return { reference: Xh(n, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Rt(e).direction === "rtl" };
function Zh(e, n, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: l = !1 } = s, a = i && !l, h = a || o ? [..._t(e) ? En(e) : e.contextElement ? En(e.contextElement) : [], ...En(n)] : [];
  h.forEach((f) => {
    a && f.addEventListener("scroll", t, { passive: !0 }), o && f.addEventListener("resize", t);
  });
  let c, u = null;
  if (r) {
    let f = !0;
    u = new ResizeObserver(() => {
      f || t(), f = !1;
    }), _t(e) && !l && u.observe(e), _t(e) || !e.contextElement || l || u.observe(e.contextElement), u.observe(n);
  }
  let d = l ? ve(e) : null;
  return l && function f() {
    const m = ve(e);
    !d || m.x === d.x && m.y === d.y && m.width === d.width && m.height === d.height || t(), d = m, c = requestAnimationFrame(f);
  }(), t(), () => {
    var f;
    h.forEach((m) => {
      a && m.removeEventListener("scroll", t), o && m.removeEventListener("resize", t);
    }), (f = u) == null || f.disconnect(), u = null, l && cancelAnimationFrame(c);
  };
}
const Qh = (e, n, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Jh, ...t }, o = { ...i.platform, _c: s };
  return Hh(e, n, { ...i, platform: o });
};
var Ye, Ke, Xe, me, Q, li, Kn, Xn, go, ci, Dc, ai, Hc, ui, Ic, hi, Wc, fi, jc, di, Bc, pi, zc, Je, mi, Fc;
const he = class extends Tt {
  constructor() {
    super(...arguments);
    b(this, Xn);
    b(this, ci);
    b(this, ai);
    b(this, ui);
    b(this, hi);
    b(this, fi);
    b(this, di);
    b(this, pi);
    b(this, mi);
    b(this, Ye, !1);
    b(this, Ke, void 0);
    b(this, Xe, 0);
    b(this, me, void 0);
    b(this, Q, void 0);
    b(this, li, void 0);
    b(this, Kn, void 0);
    x(this, "hideLater", () => {
      p(this, Je).call(this), $(this, Xe, window.setTimeout(this.hide.bind(this), 100));
    });
    b(this, Je, () => {
      clearTimeout(p(this, Xe)), $(this, Xe, 0);
    });
  }
  get isShown() {
    var t;
    return (t = p(this, me)) == null ? void 0 : t.classList.contains(he.CLASS_SHOW);
  }
  get tooltip() {
    return p(this, me) || T(this, ai, Hc).call(this);
  }
  get trigger() {
    return p(this, li) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${he.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tooltip");
  }
  show(t) {
    return this.setOptions(t), !p(this, Ye) && this.isHover && T(this, mi, Fc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(he.CLASS_SHOW), T(this, di, Bc).call(this), !0;
  }
  hide() {
    var t, s;
    return (t = p(this, Kn)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (s = p(this, me)) == null || s.classList.remove(he.CLASS_SHOW), !0;
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    p(this, Ye) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", p(this, Je)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(t) {
    t instanceof Event && (t = { event: t });
    const { exclude: s } = t || {}, i = this.getAll().entries(), o = new Set(s || []);
    for (const [r, l] of i)
      o.has(r) || l.hide();
  }
};
let at = he;
Ye = new WeakMap(), Ke = new WeakMap(), Xe = new WeakMap(), me = new WeakMap(), Q = new WeakMap(), li = new WeakMap(), Kn = new WeakMap(), Xn = new WeakSet(), go = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
}, ci = new WeakSet(), Dc = function() {
  const t = T(this, Xn, go).call(this);
  return $(this, Q, document.createElement("div")), p(this, Q).style.position = this.options.strategy, p(this, Q).style.width = `${t}px`, p(this, Q).style.height = `${t}px`, p(this, Q).style.transform = "rotate(45deg)", p(this, Q);
}, ai = new WeakSet(), Hc = function() {
  var i;
  const t = he.TOOLTIP_CLASS;
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
  if (this.options.arrow && (s == null || s.append(T(this, ci, Dc).call(this))), !s)
    throw new Error("Tooltip: Cannot find tooltip element");
  return s.style.width = "max-content", s.style.position = "absolute", s.style.top = "0", s.style.left = "0", document.body.appendChild(s), $(this, me, s), s;
}, ui = new WeakSet(), Ic = function() {
  var r;
  const t = T(this, Xn, go).call(this), { strategy: s, placement: i } = this.options, o = {
    middleware: [Yh(t), Gh()],
    strategy: s,
    placement: i
  };
  return this.options.arrow && p(this, Q) && ((r = o.middleware) == null || r.push(zh({ element: p(this, Q) }))), o;
}, hi = new WeakSet(), Wc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, fi = new WeakSet(), jc = function(t) {
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
}, di = new WeakSet(), Bc = function() {
  const t = T(this, ui, Ic).call(this), s = T(this, pi, zc).call(this);
  $(this, Kn, Zh(s, this.tooltip, () => {
    Qh(s, this.tooltip, t).then(({ x: i, y: o, middlewareData: r, placement: l }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${o}px`
      });
      const a = l.split("-")[0], h = T(this, hi, Wc).call(this, a);
      if (r.arrow && p(this, Q)) {
        const { x: c, y: u } = r.arrow;
        Object.assign(p(this, Q).style, {
          left: c != null ? `${c}px` : "",
          top: u != null ? `${u}px` : "",
          [h]: `${-p(this, Q).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...T(this, fi, jc).call(this, a)
        });
      }
    });
  }));
}, pi = new WeakSet(), zc = function() {
  return p(this, Ke) || $(this, Ke, {
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
  }), p(this, Ke);
}, Je = new WeakMap(), mi = new WeakSet(), Fc = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", p(this, Je)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), $(this, Ye, !0);
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
var gi, Uc, yi, Vc, _i, qc;
class tf extends Tt {
  constructor() {
    super(...arguments);
    b(this, gi);
    b(this, yi);
    b(this, _i);
  }
  init() {
    R(this.element).on("submit", this.onSubmit.bind(this)).on("input mousedown change", this.onInput.bind(this));
  }
  enable(t = !0) {
    R(this.element).toggleClass("loading", !t);
  }
  disable() {
    this.enable(!1);
  }
  onInput(t) {
    const s = R(t.target).closest(".has-error");
    s.length && (s.removeClass("has-error"), s.closest(".form-group").find(`#${s.attr("id")}Tip`).remove());
  }
  onSubmit(t) {
    var o;
    t.preventDefault();
    const { element: s } = this, i = R.extend({}, this.options);
    this.emit("before", { event: t, element: s, options: i }, !1), ((o = i.beforeSubmit) == null ? void 0 : o.call(i, t, s, i)) !== !1 && (this.disable(), T(this, gi, Uc).call(this, new FormData(s)).finally(() => {
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
gi = new WeakSet(), Uc = async function(t) {
  var h, c;
  const { element: s, options: i } = this, { beforeSend: o } = i;
  if (o) {
    const u = o(t);
    u instanceof FormData && (t = u);
  }
  this.emit("send", { formData: t }, !1);
  let r, l, a;
  try {
    const u = await fetch(i.url || s.action, {
      method: s.method || "POST",
      body: t,
      credentials: "same-origin",
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    l = await u.text(), u.ok ? (a = JSON.parse(l), (!a || typeof a != "object") && (r = new Error("Invalid json format"))) : r = new Error(u.statusText);
  } catch (u) {
    r = u;
  }
  r ? (this.emit("error", { error: r, responseText: l }, !1), (h = i.onError) == null || h.call(i, r, l)) : T(this, _i, qc).call(this, a), this.emit("complete", { result: a, error: r }, !1), (c = i.onComplete) == null || c.call(i, a, r);
}, yi = new WeakSet(), Vc = function(t) {
  var i;
  let s;
  Object.entries(t).forEach(([o, r]) => {
    Array.isArray(r) && (r = r.join(""));
    const l = document.getElementById(o), a = l ? R(l) : R(this.element).find(`[name="${o}"]`);
    if (!a.length)
      return;
    a.addClass("has-error");
    const h = a.closest(".form-group");
    if (h.length) {
      const c = document.getElementById(`${o}Tip`);
      let u = c ? R(c) : null;
      u || (u = R(`<div class="form-tip ajax-form-tip text-danger" id="${o}Tip"></div>`).appendTo(h)), u.empty().text(r);
    }
    s || (s = a);
  }), s && ((i = s[0]) == null || i.focus());
}, _i = new WeakSet(), qc = function(t) {
  var a, h;
  const { options: s } = this, { message: i } = t;
  if (t.result === "success") {
    if (this.emit("success", { result: t }, !1), ((a = s.onSuccess) == null ? void 0 : a.call(s, t)) === !1)
      return;
    typeof i == "string" && i.length && R(document).trigger("zui.messager.show", { content: i, type: "success" });
  } else {
    if (this.emit("fail", { result: t }, !1), ((h = s.onFail) == null ? void 0 : h.call(s, t)) === !1)
      return;
    i && (typeof i == "string" && i.length ? R(document).trigger("zui.messager.show", { content: i, type: "danger" }) : typeof i == "object" && T(this, yi, Vc).call(this, i));
  }
  const o = t.closeModal || s.closeModal;
  o && R(this.element).trigger("zui.modal.hide", { target: typeof o == "string" ? o : void 0 });
  const r = t.callback || s.callback;
  if (typeof r == "string") {
    const c = r.indexOf("("), u = (c > 0 ? r.substring(0, c) : r).split(".");
    let d = window, f = u[0];
    u.length > 1 && (f = u[1], u[0] === "top" ? d = window.top : u[0] === "parent" ? d = window.parent : d = window[u[0]]);
    const m = d == null ? void 0 : d[f];
    if (typeof m == "function") {
      let g = [];
      return c > 0 && r[r.length - 1] == ")" ? g = JSON.parse("[" + r.substring(c + 1, r.length - 1) + "]") : g.push(t), m.apply(this, g);
    }
  } else
    r && typeof r == "object" && (r.target ? window[r.target] : window)[r.name].apply(this, Array.isArray(r.params) ? r.params : [r.params]);
  const l = t.load || s.load || t.locate;
  l && R(this.element).trigger("zui.locate", l);
}, x(tf, "NAME", "ajaxform");
var ge, ye;
class Vr extends z {
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
      s && (p(this, ge) && cancelAnimationFrame(p(this, ge)), $(this, ge, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + i * this.props.scrollSize / this.props.clientSize), $(this, ge, 0);
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
    t && ($(this, ye, typeof t == "string" ? document : t.current), p(this, ye).addEventListener("wheel", this._handleWheel, { passive: !1 }));
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
      bottom: h,
      right: c
    } = this.props, { maxScrollPos: u, scrollPos: d } = this, { dragStart: f } = this.state, m = {
      left: l,
      top: a,
      bottom: h,
      right: c,
      ...r
    }, g = {};
    return s === "horz" ? (m.height = i, m.width = t, g.width = this.barSize, g.left = Math.round(Math.min(u, d) * (t - g.width) / u)) : (m.width = i, m.height = t, g.height = this.barSize, g.top = Math.round(Math.min(u, d) * (t - g.height) / u)), /* @__PURE__ */ w(
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
function ef(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function Gc({ col: e, className: n, height: t, row: s, onRenderCell: i, style: o, outerStyle: r, children: l, outerClass: a, ...h }) {
  var H;
  const c = {
    left: e.left,
    width: e.realWidth,
    height: t,
    ...r
  }, { align: u, border: d } = e.setting, f = {
    justifyContent: u ? u === "left" ? "start" : u === "right" ? "end" : u : void 0,
    ...e.setting.cellStyle,
    ...o
  }, m = ["dtable-cell", a, e.setting.className, {
    "has-border-left": d === !0 || d === "left",
    "has-border-right": d === !0 || d === "right"
  }], g = ["dtable-cell-content", n], y = (H = s.data) == null ? void 0 : H[e.name], _ = [l ?? y ?? ""], v = i ? i(_, { row: s, col: e, value: y }, dt) : _, E = [], k = [], L = {}, A = {};
  let M = "div";
  v == null || v.forEach((C) => {
    if (typeof C == "object" && C && !nt(C) && ("html" in C || "className" in C || "style" in C || "attrs" in C || "children" in C || "tagName" in C)) {
      const I = C.outer ? E : k;
      C.html ? I.push(/* @__PURE__ */ w("div", { className: O("dtable-cell-html", C.className), style: C.style, dangerouslySetInnerHTML: { __html: C.html }, ...C.attrs ?? {} })) : (C.style && Object.assign(C.outer ? c : f, C.style), C.className && (C.outer ? m : g).push(C.className), C.children && I.push(C.children), C.attrs && Object.assign(C.outer ? L : A, C.attrs)), C.tagName && !C.outer && (M = C.tagName);
    } else
      k.push(C);
  });
  const N = M;
  return /* @__PURE__ */ w(
    "div",
    {
      className: O(m),
      style: c,
      "data-col": e.name,
      ...h,
      ...L,
      children: [
        k.length > 0 && /* @__PURE__ */ w(N, { className: O(g), style: f, ...A, children: k }),
        E
      ]
    }
  );
}
function Xi({ row: e, className: n, top: t = 0, left: s = 0, width: i, height: o, cols: r, CellComponent: l = Gc, onRenderCell: a }) {
  return /* @__PURE__ */ w("div", { className: O("dtable-cells", n), style: { top: t, left: s, width: i, height: o }, children: r.map((h) => h.visible ? /* @__PURE__ */ w(
    l,
    {
      col: h,
      row: e,
      onRenderCell: a
    },
    h.name
  ) : null) });
}
function Yc({
  row: e,
  className: n,
  top: t,
  height: s,
  fixedLeftCols: i,
  fixedRightCols: o,
  scrollCols: r,
  fixedLeftWidth: l,
  scrollWidth: a,
  scrollColsWidth: h,
  fixedRightWidth: c,
  scrollLeft: u,
  CellComponent: d = Gc,
  onRenderCell: f,
  style: m,
  ...g
}) {
  let y = null;
  i != null && i.length && (y = /* @__PURE__ */ w(
    Xi,
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
    Xi,
    {
      className: "dtable-flexable",
      cols: r,
      left: l - u,
      width: Math.max(a, h),
      row: e,
      CellComponent: d,
      onRenderCell: f
    }
  ));
  let v = null;
  o != null && o.length && (v = /* @__PURE__ */ w(
    Xi,
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
function nf({ height: e, onRenderRow: n, ...t }) {
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
  return /* @__PURE__ */ w("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ w(Yc, { ...s }) });
}
function sf({
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
  return n = { ...n, top: t, height: i }, /* @__PURE__ */ w("div", { className: O("dtable-rows", e), style: n, children: s.map((h) => {
    const c = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - r,
      height: o,
      ...a
    }, u = l == null ? void 0 : l({ props: c, row: h }, dt);
    return u && Object.assign(c, u), /* @__PURE__ */ w(Yc, { ...c });
  }) });
}
const Hs = /* @__PURE__ */ new Map(), Is = [];
function Kc(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && Hs.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Hs.set(t, e), n != null && n.buildIn && !Is.includes(t) && Is.push(t);
}
function Ce(e, n) {
  Kc(e, n);
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
function Xc(e) {
  return Hs.delete(e);
}
function of(e) {
  if (typeof e == "string") {
    const n = Hs.get(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Jc(e, n, t) {
  return n.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = of(s);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && Jc(e, i.plugins, t), e.push(i), t.add(i.name)));
  }), e;
}
function rf(e = [], n = !0) {
  return n && Is.length && e.unshift(...Is), e != null && e.length ? Jc([], e, /* @__PURE__ */ new Set()) : [];
}
function qr() {
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
var ds, _e, Ze, Jt, St, Zt, Y, gt, Ct, Qe, Jn, Zn, It, tn, en, wi, Zc, bi, Qc, vi, ta, xi, ea, Qn, yo, Ei, Si, ts, es, Ci, $i, ki, na, Ri, sa, Ti, ia;
let lf = (ds = class extends z {
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
    x(this, "ref", xe());
    b(this, _e, 0);
    b(this, Ze, void 0);
    b(this, Jt, !1);
    b(this, St, void 0);
    b(this, Zt, void 0);
    b(this, Y, []);
    b(this, gt, void 0);
    b(this, Ct, /* @__PURE__ */ new Map());
    b(this, Qe, {});
    b(this, Jn, void 0);
    b(this, Zn, []);
    x(this, "updateLayout", () => {
      p(this, _e) && cancelAnimationFrame(p(this, _e)), $(this, _e, requestAnimationFrame(() => {
        $(this, gt, void 0), this.forceUpdate(), $(this, _e, 0);
      }));
    });
    b(this, It, (t, s) => {
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
    b(this, tn, (t) => {
      p(this, It).call(this, t, `window_${t.type}`);
    });
    b(this, en, (t) => {
      p(this, It).call(this, t, `document_${t.type}`);
    });
    b(this, Ei, (t, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, t, s);
        i && Object.assign(t.props, i);
      }
      return p(this, Y).forEach((i) => {
        if (i.onRenderRow) {
          const o = i.onRenderRow.call(this, t, s);
          o && Object.assign(t.props, o);
        }
      }), t.props;
    });
    b(this, Si, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), p(this, Y).forEach((i) => {
      i.onRenderHeaderRow && (t.props = i.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    b(this, ts, (t, s, i) => {
      const { row: o, col: r } = s;
      s.value = this.getCellValue(o, r), t[0] = s.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[l] && (t = r.setting[l].call(this, t, s, i)), this.options[l] && (t = this.options[l].call(this, t, s, i)), p(this, Y).forEach((a) => {
        a[l] && (t = a[l].call(this, t, s, i));
      }), t;
    });
    b(this, es, (t, s) => {
      s === "horz" ? this.scroll({ scrollLeft: t }) : this.scroll({ scrollTop: t });
    });
    b(this, Ci, (t) => {
      var l, a, h, c, u;
      const s = this.getPointerInfo(t);
      if (!s)
        return;
      const { rowID: i, colName: o, cellElement: r } = s;
      if (i === "HEADER")
        r && ((l = this.options.onHeaderCellClick) == null || l.call(this, t, { colName: o, element: r }), p(this, Y).forEach((d) => {
          var f;
          (f = d.onHeaderCellClick) == null || f.call(this, t, { colName: o, element: r });
        }));
      else {
        const { rowElement: d } = s, f = this.layout.visibleRows.find((m) => m.id === i);
        if (r) {
          if (((a = this.options.onCellClick) == null ? void 0 : a.call(this, t, { colName: o, rowID: i, rowInfo: f, element: r, rowElement: d })) === !0)
            return;
          for (const m of p(this, Y))
            if (((h = m.onCellClick) == null ? void 0 : h.call(this, t, { colName: o, rowID: i, rowInfo: f, element: r, rowElement: d })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, t, { rowID: i, rowInfo: f, element: d })) === !0)
          return;
        for (const m of p(this, Y))
          if (((u = m.onRowClick) == null ? void 0 : u.call(this, t, { rowID: i, rowInfo: f, element: d })) === !0)
            return;
      }
    });
    b(this, $i, (t) => {
      const s = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    });
    $(this, Ze, t.id ?? `dtable-${os(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, $(this, Zt, Object.freeze(rf(t.plugins))), p(this, Zt).forEach((s) => {
      var l;
      const { methods: i, data: o, state: r } = s;
      i && Object.entries(i).forEach(([a, h]) => {
        typeof h == "function" && Object.assign(this, { [a]: h.bind(this) });
      }), o && Object.assign(p(this, Qe), o.call(this)), r && Object.assign(this.state, r.call(this)), (l = s.onCreate) == null || l.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = p(this, gt)) == null ? void 0 : t.options) || p(this, St) || qr();
  }
  get plugins() {
    return p(this, Y);
  }
  get layout() {
    return p(this, gt);
  }
  get id() {
    return p(this, Ze);
  }
  get data() {
    return p(this, Qe);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    $(this, St, void 0);
  }
  componentDidMount() {
    if (p(this, Jt) ? this.forceUpdate() : T(this, Qn, yo).call(this), p(this, Y).forEach((t) => {
      let { events: s } = t;
      s && (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([i, o]) => {
        o && this.on(i, o);
      }));
    }), this.on("click", p(this, Ci)), this.on("keydown", p(this, $i)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const s = new ResizeObserver(this.updateLayout);
          s.observe(t), $(this, Jn, s);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    p(this, Y).forEach((t) => {
      var s;
      (s = t.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    p(this, Jt) ? T(this, Qn, yo).call(this) : p(this, Y).forEach((t) => {
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
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), p(this, tn)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), p(this, en)) : t.removeEventListener(i, p(this, It));
    p(this, Y).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), p(this, Zt).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), $(this, Qe, {}), p(this, Ct).clear();
  }
  on(t, s, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = p(this, Ct).get(t);
    o ? o.push(s) : (p(this, Ct).set(t, [s]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), p(this, tn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), p(this, en)) : (r = this.ref.current) == null || r.addEventListener(t, p(this, It)));
  }
  off(t, s, i) {
    var l;
    i && (t = `${i}_${t}`);
    const o = p(this, Ct).get(t);
    if (!o)
      return;
    const r = o.indexOf(s);
    r >= 0 && o.splice(r, 1), o.length || (p(this, Ct).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), p(this, tn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), p(this, en)) : (l = this.ref.current) == null || l.removeEventListener(t, p(this, It)));
  }
  emitCustomEvent(t, s) {
    p(this, It).call(this, s instanceof Event ? s : new CustomEvent(t, { detail: s }), t);
  }
  scroll(t, s) {
    const { scrollLeft: i, scrollTop: o, rowsHeightTotal: r, rowsHeight: l, rowHeight: a, colsInfo: { scrollWidth: h, scrollColsWidth: c } } = this.layout, { to: u } = t;
    let { scrollLeft: d, scrollTop: f } = t;
    if (u === "up" || u === "down")
      f = o + (u === "down" ? 1 : -1) * Math.floor(l / a) * a;
    else if (u === "left" || u === "right")
      d = i + (u === "right" ? 1 : -1) * h;
    else if (u === "home")
      f = 0;
    else if (u === "end")
      f = r - l;
    else if (u === "left-begin")
      d = 0;
    else if (u === "right-end")
      d = c - h;
    else {
      const { offsetLeft: g, offsetTop: y } = t;
      typeof g == "number" && (d = i + g), typeof y == "number" && (d = o + y);
    }
    const m = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, c - h)), d !== i && (m.scrollLeft = d)), typeof f == "number" && (f = Math.max(0, Math.min(f, r - l)), f !== o && (m.scrollTop = f)), Object.keys(m).length ? (this.setState(m, () => {
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
      $(this, gt, void 0);
    else if (i === "options") {
      if ($(this, St, void 0), !p(this, gt))
        return;
      $(this, gt, void 0);
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
    const t = T(this, Ti, ia).call(this), { className: s, rowHover: i, colHover: o, cellHover: r, bordered: l, striped: a, scrollbarHover: h } = this.options, c = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, u = ["dtable", s, {
      "dtable-hover-row": i,
      "dtable-hover-col": o,
      "dtable-hover-cell": r,
      "dtable-bordered": l,
      "dtable-striped": a,
      "dtable-scrolled-down": ((t == null ? void 0 : t.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], d = [];
    return t && p(this, Y).forEach((f) => {
      var g;
      const m = (g = f.onRender) == null ? void 0 : g.call(this, t);
      m && (m.style && Object.assign(c, m.style), m.className && u.push(m.className), m.children && d.push(m.children));
    }), /* @__PURE__ */ w(
      "div",
      {
        id: p(this, Ze),
        className: O(u),
        style: c,
        ref: this.ref,
        tabIndex: -1,
        children: [
          t && T(this, wi, Zc).call(this, t),
          t && T(this, bi, Qc).call(this, t),
          t && T(this, vi, ta).call(this, t),
          t && T(this, xi, ea).call(this, t)
        ]
      }
    );
  }
}, _e = new WeakMap(), Ze = new WeakMap(), Jt = new WeakMap(), St = new WeakMap(), Zt = new WeakMap(), Y = new WeakMap(), gt = new WeakMap(), Ct = new WeakMap(), Qe = new WeakMap(), Jn = new WeakMap(), Zn = new WeakMap(), It = new WeakMap(), tn = new WeakMap(), en = new WeakMap(), wi = new WeakSet(), Zc = function(t) {
  const { header: s, colsInfo: i, headerHeight: o, scrollLeft: r } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ w(
      nf,
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
    lo,
    {
      className: "dtable-header",
      style: { height: o },
      renders: l,
      generateArgs: [t],
      generatorThis: this
    }
  );
}, bi = new WeakSet(), Qc = function(t) {
  const { headerHeight: s, rowsHeight: i, visibleRows: o, rowHeight: r, colsInfo: l, scrollLeft: a, scrollTop: h } = t;
  return /* @__PURE__ */ w(
    sf,
    {
      top: s,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: a,
      scrollTop: h,
      onRenderCell: p(this, ts),
      onRenderRow: p(this, Ei),
      ...l
    }
  );
}, vi = new WeakSet(), ta = function(t) {
  const { footer: s } = t;
  if (!s)
    return null;
  const i = typeof s == "function" ? s.call(this, t) : Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ w(
    lo,
    {
      className: "dtable-footer",
      style: { height: t.footerHeight, top: t.rowsHeight + t.headerHeight },
      renders: i,
      generateArgs: [t],
      generatorThis: this,
      generators: t.footerGenerators
    }
  );
}, xi = new WeakSet(), ea = function(t) {
  const s = [], { scrollLeft: i, colsInfo: o, scrollTop: r, rowsHeight: l, rowsHeightTotal: a, footerHeight: h } = t, { scrollColsWidth: c, scrollWidth: u } = o, { scrollbarSize: d = 12, horzScrollbarPos: f } = this.options;
  return c > u && s.push(
    /* @__PURE__ */ w(
      Vr,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: c,
        clientSize: u,
        onScroll: p(this, es),
        left: o.fixedLeftWidth,
        bottom: (f === "inside" ? 0 : -d) + h,
        size: d,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), a > l && s.push(
    /* @__PURE__ */ w(
      Vr,
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
}, Qn = new WeakSet(), yo = function() {
  var t;
  $(this, Jt, !1), (t = this.options.afterRender) == null || t.call(this), p(this, Y).forEach((s) => {
    var i;
    return (i = s.afterRender) == null ? void 0 : i.call(this);
  });
}, Ei = new WeakMap(), Si = new WeakMap(), ts = new WeakMap(), es = new WeakMap(), Ci = new WeakMap(), $i = new WeakMap(), ki = new WeakSet(), na = function() {
  if (p(this, St))
    return !1;
  const s = { ...qr(), ...p(this, Zt).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return $(this, St, s), $(this, Y, p(this, Zt).reduce((i, o) => {
    const { when: r, options: l } = o;
    return (!r || r(s)) && (i.push(o), l && Object.assign(s, typeof l == "function" ? l.call(this, s) : l)), i;
  }, [])), $(this, Zn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Ri = new WeakSet(), sa = function() {
  var Vo, qo;
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
      r = 0, $(this, Jt, !0);
      return;
    }
  } else
    o !== "auto" && (r = o ?? 0);
  const { defaultColWidth: l, minColWidth: a, maxColWidth: h } = s, c = [], u = [], d = [], f = {}, m = [], g = [];
  let y = 0, _ = 0, v = 0;
  s.cols.forEach((P) => {
    if (P.hidden)
      return;
    const F = P.type || "", it = {
      fixed: !1,
      flex: !1,
      width: l,
      minWidth: a,
      maxWidth: h,
      ...P,
      type: F
    }, W = {
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
    t.forEach((Go) => {
      var Yo, Ko;
      const cs = (Yo = Go.colTypes) == null ? void 0 : Yo[F];
      if (cs) {
        const Xo = typeof cs == "function" ? cs(W) : cs;
        Xo && Object.assign(it, Xo, P);
      }
      (Ko = Go.onAddCol) == null || Ko.call(this, W);
    });
    const { fixed: ke, flex: Re, width: rn = l } = it;
    W.flex = ke ? 0 : Re === !0 ? 1 : typeof Re == "number" ? Re : 0, W.width = ef(rn < 1 ? Math.round(rn * r) : rn, it.minWidth, it.maxWidth), W.realWidth = W.realWidth || W.width, ke === "left" ? (W.left = y, y += W.width, c.push(W)) : ke === "right" ? (W.left = _, _ += W.width, u.push(W)) : (W.left = v, v += W.width, d.push(W)), W.flex && g.push(W), m.push(W), f[W.name] = W;
  });
  const E = y + v + _;
  o === "auto" && (r = E);
  const { data: k, rowKey: L = "id", rowHeight: A } = s, M = [], N = (P, F, it) => {
    var ke, Re;
    const W = { data: it ?? { [L]: P }, id: P, index: M.length, top: 0 };
    if (it || (W.lazy = !0), M.push(W), ((ke = s.onAddRow) == null ? void 0 : ke.call(this, W, F)) !== !1) {
      for (const rn of t)
        if (((Re = rn.onAddRow) == null ? void 0 : Re.call(this, W, F)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let P = 0; P < k; P++)
      N(`${P}`, P);
  else
    Array.isArray(k) && k.forEach((P, F) => {
      typeof P == "object" ? N(`${P[L] ?? ""}`, F, P) : N(`${P ?? ""}`, F);
    });
  let H = M;
  const C = {};
  if (s.onAddRows) {
    const P = s.onAddRows.call(this, H);
    P && (H = P);
  }
  for (const P of t) {
    const F = (Vo = P.onAddRows) == null ? void 0 : Vo.call(this, H);
    F && (H = F);
  }
  H.forEach((P, F) => {
    C[P.id] = P, P.index = F, P.top = P.index * A;
  });
  const { header: I, footer: q } = s, st = I ? s.headerHeight || A : 0, U = q ? s.footerHeight || A : 0;
  let D = s.height, V = 0;
  const wt = H.length * A, le = st + U + wt;
  if (typeof D == "function" && (D = D.call(this, le)), D === "auto")
    V = le;
  else if (typeof D == "object")
    V = Math.min(D.max, Math.max(D.min, le));
  else if (D === "100%") {
    const { parent: P } = this;
    if (P)
      V = P.clientHeight;
    else {
      V = 0, $(this, Jt, !0);
      return;
    }
  } else
    V = D;
  const ce = V - st - U, ae = r - y - _, Nt = {
    options: s,
    allRows: M,
    width: r,
    height: V,
    rows: H,
    rowsMap: C,
    rowHeight: A,
    rowsHeight: ce,
    rowsHeightTotal: wt,
    header: I,
    footer: q,
    footerGenerators: i,
    headerHeight: st,
    footerHeight: U,
    colsMap: f,
    colsList: m,
    flexCols: g,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: u,
      scrollCols: d,
      fixedLeftWidth: y,
      scrollWidth: ae,
      scrollColsWidth: v,
      fixedRightWidth: _
    }
  }, $e = (qo = s.onLayout) == null ? void 0 : qo.call(this, Nt);
  $e && Object.assign(Nt, $e), t.forEach((P) => {
    if (P.onLayout) {
      const F = P.onLayout.call(this, Nt);
      F && Object.assign(Nt, F);
    }
  }), $(this, gt, Nt);
}, Ti = new WeakSet(), ia = function() {
  (T(this, ki, na).call(this) || !p(this, gt)) && T(this, Ri, sa).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: s } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: o, scrollWidth: r, scrollColsWidth: l } } = t;
  if (i.length) {
    const E = r - l;
    if (E > 0) {
      const k = i.reduce((A, M) => A + M.flex, 0);
      let L = 0;
      i.forEach((A) => {
        const M = Math.min(E - L, Math.ceil(E * (A.flex / k)));
        A.realWidth = M + A.width, L += A.realWidth;
      });
    } else
      i.forEach((k) => {
        k.realWidth = k.width;
      });
  }
  s = Math.min(Math.max(0, l - r), s);
  let a = 0;
  o.forEach((E) => {
    E.left = a, a += E.realWidth, E.visible = E.left + E.realWidth >= s && E.left <= s + r;
  });
  const { rowsHeightTotal: h, rowsHeight: c, rows: u, rowHeight: d } = t, f = Math.min(Math.max(0, h - c), this.state.scrollTop), m = Math.floor(f / d), g = f + c, y = Math.min(u.length, Math.ceil(g / d)), _ = [], { rowDataGetter: v } = this.options;
  for (let E = m; E < y; E++) {
    const k = u[E];
    k.lazy && v && (k.data = v([k.id])[0], k.lazy = !1), _.push(k);
  }
  return t.visibleRows = _, t.scrollTop = f, t.scrollLeft = s, t;
}, x(ds, "addPlugin", Kc), x(ds, "removePlugin", Xc), ds);
function Gr(e, n) {
  n !== void 0 ? e.data.hoverCol = n : n = e.data.hoverCol;
  const { current: t } = e.ref;
  if (!t)
    return;
  const s = "dtable-col-hover";
  t.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof n == "string" && n.length && t.querySelectorAll(`.dtable-cell[data-col="${n}"]`).forEach((i) => i.classList.add(s));
}
const cf = {
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
      Gr(this, s);
    },
    mouseleave() {
      Gr(this, !1);
    }
  }
}, af = Ce(cf, { buildIn: !0 });
function uf(e, n) {
  var r, l;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: i } = this.options, o = (a, h) => {
    i && !i.call(this, a) || !!t[a] === h || (h ? t[a] = !0 : delete t[a], s[a] = h);
  };
  if (e === void 0 ? (n === void 0 && (n = !oa.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: a }) => {
    o(a, !!n);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((a) => {
    o(a, n ?? !t[a]);
  })), Object.keys(s).length) {
    const a = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, e, s, t);
    a && Object.keys(a).forEach((h) => {
      a[h] ? t[h] = !0 : delete t[h];
    }), this.setState({ checkedRows: { ...t } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, s);
    });
  }
  return s;
}
function hf(e) {
  return this.state.checkedRows[e] ?? !1;
}
function oa() {
  var t, s;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((i, o) => i + (n.call(this, o.id) ? 1 : 0), 0)) : e === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function ff() {
  return Object.keys(this.state.checkedRows);
}
const df = {
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
    toggleCheckRows: uf,
    isRowChecked: hf,
    isAllRowChecked: oa,
    getChecks: ff
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
      const a = this.isRowChecked(s), h = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, a, s)) ?? /* @__PURE__ */ w("input", { type: "checkbox", checked: a });
      e.unshift(h), e.push({ className: "has-checkbox" });
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
}, pf = Ce(df);
var ra = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(ra || {});
function _o(e) {
  const n = this.data.nestedMap.get(e);
  if (!n || n.state !== "")
    return n ?? { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, s = n.children && t && t[e];
  let i = !1, { parent: o } = n;
  for (; o; ) {
    const r = _o.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return n.state = i ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? _o.call(this, n.parent).level + 1 : 0, n;
}
function mf(e, n) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !la.call(this)), n) {
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
function la() {
  const e = this.data.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function ca(e, n = 0, t, s = 0) {
  var i;
  t || (t = [...e.keys()]);
  for (const o of t) {
    const r = e.get(o);
    r && (r.level === s && (r.order = n++), (i = r.children) != null && i.length && (n = ca(e, n, r.children, s + 1)));
  }
  return n;
}
function aa(e, n, t, s) {
  const i = e.getNestedRowInfo(n);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = t, aa(e, o, t, s);
  }), i;
}
function ua(e, n, t, s, i) {
  var l;
  const o = e.getNestedRowInfo(n);
  if (!o || o.state === "")
    return;
  ((l = o.children) == null ? void 0 : l.every((a) => {
    const h = !!(s[a] !== void 0 ? s[a] : i[a]);
    return t === h;
  })) && (s[n] = t), o.parent && ua(e, o.parent, t, s, i);
}
const gf = {
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
        const r = aa(this, i, o, s);
        r != null && r.parent && ua(this, r.parent, o, s, t);
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
    toggleRow: mf,
    isAllCollapsed: la,
    getNestedRowInfo: _o
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
    ), ca(this.data.nestedMap), e.sort((n, t) => {
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
}, yf = Ce(gf);
function ha(e, n, t) {
  if (!e)
    return;
  typeof e == "function" && (e = e(n)), typeof e == "string" && (e = { url: e });
  const { url: s, ...i } = e;
  return /* @__PURE__ */ w("a", { href: pt(s, n.row.data), ...i, children: t });
}
function Bo(e, n, t) {
  var s;
  if (e != null)
    return t = t ?? ((s = n.row.data) == null ? void 0 : s[n.col.name]), typeof e == "function" ? e(t, n) : pt(e, t);
}
function fa(e, n, t) {
  var s;
  return t = t ?? ((s = n.row.data) == null ? void 0 : s[n.col.name]), e === !1 ? t : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(t, n)), fo(t, e));
}
function da(e, n) {
  const { link: t } = n.col.setting, s = ha(t, n, e[0]);
  return s && (e[0] = s), e;
}
function pa(e, n) {
  const { format: t } = n.col.setting;
  return t && (e[0] = Bo(t, n, e[0])), e;
}
function ma(e, n) {
  const { map: t } = n.col.setting;
  return typeof t == "function" ? e[0] = t(e[0], n) : typeof t == "object" && t && (e[0] = t[e[0]] ?? e[0]), e;
}
function dn(e, n, t = "[yyyy-]MM-dd hh:mm") {
  const { format: s = t } = n.col.setting;
  return e[0] = fa(s, n, e[0]), e;
}
function wo(e, n, t = !1) {
  const { html: s = t } = n.col.setting;
  if (s === !1)
    return e;
  const i = e[0], o = s === !0 ? i : Bo(s, n, i);
  return e[0] = {
    html: o
  }, e;
}
const _f = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, n) {
        return wo(e, n, !0);
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
    return t && (e = dn(e, n, t)), e = ma(e, n), e = pa(e, n), s ? e = wo(e, n) : e = da(e, n), e;
  }
}, wf = Ce(_f, { buildIn: !0 });
function Ji(e, { row: n, col: t }) {
  const { data: s } = n, i = s ? s[t.name] : void 0;
  if (!(i != null && i.length))
    return e;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${t.name}Avatar`, avatarProps: l, avatarCodeKey: a, avatarNameKey: h = `${t.name}Name` } = t.setting, c = (s ? s[h] : i) || e[0], u = {
    size: "xs",
    className: O(o, l == null ? void 0 : l.className, "flex-none"),
    src: s ? s[r] : void 0,
    text: c,
    code: a ? s ? s[a] : void 0 : i,
    ...l
  };
  if (e[0] = /* @__PURE__ */ w(mc, { ...u }), t.type === "avatarBtn") {
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
const bf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Ji
    },
    avatarBtn: {
      onRenderCell: Ji
    },
    avatarName: {
      onRenderCell: Ji
    }
  }
}, vf = Ce(bf, { buildIn: !0 }), xf = {
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
        const { url: a, ...h } = r;
        e.push(/* @__PURE__ */ w("a", { href: pt(a, t.data), ...h }));
      }
    }
    return e;
  }
}, Ef = Ce(xf, { buildIn: !0 }), Sf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: ra,
  avatar: vf,
  checkable: pf,
  colHover: af,
  nested: yf,
  renderDatetime: fa,
  renderDatetimeCell: dn,
  renderFormat: Bo,
  renderFormatCell: pa,
  renderHtmlCell: wo,
  renderLink: ha,
  renderLinkCell: da,
  renderMapCell: ma,
  rich: wf,
  sortType: Ef
}, Symbol.toStringTag, { value: "Module" }));
class ln extends J {
}
x(ln, "NAME", "dtable"), x(ln, "Component", lf), x(ln, "definePlugin", Ce), x(ln, "removePlugin", Xc), x(ln, "plugins", Sf);
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
    t != null && t.startsWith("#") && $(this, ct, document.querySelector(t)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), p(this, ct) && (this.addActive(p(this, ct).parentElement, p(this, ct)), p(this, ct).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const t = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    t != null && t.startsWith("#") && $(this, ct, document.querySelector(t)), p(this, ct) && (this.addActive(p(this, ct).parentElement, p(this, ct)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
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
  R as $,
  mr as ActionMenu,
  yr as ActionMenuNested,
  tf as AjaxForm,
  Ar as Avatar,
  Nr as BtnGroup,
  _r as Button,
  ot as ContextMenu,
  ln as DTable,
  et as Dropdown,
  vo as EventBus,
  wr as Menu,
  un as Messager,
  fn as Modal,
  tt as ModalBase,
  vn as ModalTrigger,
  Mr as Nav,
  pn as NavTabs,
  Pr as Pager,
  Hr as Picker,
  $r as ProgressCircle,
  kr as Switch,
  Ot as TIME_DAY,
  Ir as Toolbar,
  at as Tooltip,
  ul as addI18nMap,
  If as browser,
  Or as calculateTimestamp,
  Rf as cash,
  kf as convertBytes,
  lt as createDate,
  $f as formatBytes,
  fo as formatDate,
  qf as formatDateSpan,
  pt as formatString,
  hl as getLang,
  Ta as getLangCode,
  Gf as getTimeBeforeDesc,
  ne as i18n,
  Vf as isDBY,
  Fi as isObject,
  rs as isSameDay,
  kh as isSameMonth,
  Bf as isSameWeek,
  ho as isSameYear,
  zf as isToday,
  Uf as isTomorrow,
  Ff as isYesterday,
  oo as mergeDeep,
  io as nativeEvents,
  La as setLangCode,
  fh as store
};
