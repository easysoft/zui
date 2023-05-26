var Ua = Object.defineProperty;
var Va = (e, n, t) => n in e ? Ua(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var v = (e, n, t) => (Va(e, typeof n != "symbol" ? n + "" : n, t), t), oo = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var p = (e, n, t) => (oo(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, $ = (e, n, t, s) => (oo(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t), _r = (e, n, t, s) => ({
  set _(i) {
    $(e, n, i, t);
  },
  get _() {
    return p(e, n, s);
  }
}), C = (e, n, t) => (oo(e, n, "access private method"), t);
var cs, j, gl, J, de, br, yl, wo, _l, $s = {}, bl = [], qa = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Gi = Array.isArray;
function Bt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function wl(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function dt(e, n, t) {
  var s, i, o, r = {};
  for (o in n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? cs.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return yn(e, r, s, i, null);
}
function yn(e, n, t, s, i) {
  var o = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++gl };
  return i == null && j.vnode != null && j.vnode(o), o;
}
function le() {
  return { current: null };
}
function as(e) {
  return e.children;
}
function B(e, n) {
  this.props = e, this.context = n;
}
function kn(e, n) {
  if (n == null)
    return e.__ ? kn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? kn(e) : null;
}
function vl(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return vl(e);
  }
}
function vo(e) {
  (!e.__d && (e.__d = !0) && de.push(e) && !Rs.__r++ || br !== j.debounceRendering) && ((br = j.debounceRendering) || yl)(Rs);
}
function Rs() {
  var e, n, t, s, i, o, r, l;
  for (de.sort(wo); e = de.shift(); )
    e.__d && (n = de.length, s = void 0, i = void 0, r = (o = (t = e).__v).__e, (l = t.__P) && (s = [], (i = Bt({}, o)).__v = o.__v + 1, Bo(l, o, i, t.__n, l.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? kn(o), o.__h), $l(s, o), o.__e != r && vl(o)), de.length > n && de.sort(wo));
  Rs.__r = 0;
}
function xl(e, n, t, s, i, o, r, l, a, u) {
  var c, h, d, f, m, g, y, b = s && s.__k || bl, x = b.length;
  for (t.__k = [], c = 0; c < n.length; c++)
    if ((f = t.__k[c] = (f = n[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? yn(null, f, null, null, f) : Gi(f) ? yn(as, { children: f }, null, null, null) : f.__b > 0 ? yn(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = t, f.__b = t.__b + 1, (d = b[c]) === null || d && f.key == d.key && f.type === d.type)
        b[c] = void 0;
      else
        for (h = 0; h < x; h++) {
          if ((d = b[h]) && f.key == d.key && f.type === d.type) {
            b[h] = void 0;
            break;
          }
          d = null;
        }
      Bo(e, f, d = d || $s, i, o, r, l, a, u), m = f.__e, (h = f.ref) && d.ref != h && (y || (y = []), d.ref && y.push(d.ref, null, f), y.push(h, f.__c || m, f)), m != null ? (g == null && (g = m), typeof f.type == "function" && f.__k === d.__k ? f.__d = a = Sl(f, a, e) : a = Cl(e, f, d, b, m, a), typeof t.type == "function" && (t.__d = a)) : a && d.__e == a && a.parentNode != e && (a = kn(d));
    }
  for (t.__e = g, c = x; c--; )
    b[c] != null && (typeof t.type == "function" && b[c].__e != null && b[c].__e == t.__d && (t.__d = kl(s).nextSibling), Tl(b[c], b[c]));
  if (y)
    for (c = 0; c < y.length; c++)
      Rl(y[c], y[++c], y[++c]);
}
function Sl(e, n, t) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, n = typeof s.type == "function" ? Sl(s, n, t) : Cl(t, s, s, i, s.__e, n));
  return n;
}
function El(e, n) {
  return n = n || [], e == null || typeof e == "boolean" || (Gi(e) ? e.some(function(t) {
    El(t, n);
  }) : n.push(e)), n;
}
function Cl(e, n, t, s, i, o) {
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
function kl(e) {
  var n, t, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (n = e.__k.length - 1; n >= 0; n--)
      if ((t = e.__k[n]) && (s = kl(t)))
        return s;
  }
  return null;
}
function Ga(e, n, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || Ts(e, o, null, t[o], s);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || Ts(e, o, n[o], t[o], s);
}
function wr(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t ?? "") : e[n] = t == null ? "" : typeof t != "number" || qa.test(n) ? t : t + "px";
}
function Ts(e, n, t, s, i) {
  var o;
  t:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (n in s)
            t && n in t || wr(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || wr(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? s || e.addEventListener(n, o ? xr : vr, o) : e.removeEventListener(n, o ? xr : vr, o);
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
function vr(e) {
  return this.l[e.type + !1](j.event ? j.event(e) : e);
}
function xr(e) {
  return this.l[e.type + !0](j.event ? j.event(e) : e);
}
function Bo(e, n, t, s, i, o, r, l, a) {
  var u, c, h, d, f, m, g, y, b, x, S, T, A, L, M, N = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, l = n.__e = t.__e, n.__h = null, o = [l]), (u = j.__b) && u(n);
  try {
    t:
      if (typeof N == "function") {
        if (y = n.props, b = (u = N.contextType) && s[u.__c], x = u ? b ? b.props.value : u.__ : s, t.__c ? g = (c = n.__c = t.__c).__ = c.__E : ("prototype" in N && N.prototype.render ? n.__c = c = new N(y, x) : (n.__c = c = new B(y, x), c.constructor = N, c.render = Ka), b && b.sub(c), c.props = y, c.state || (c.state = {}), c.context = x, c.__n = s, h = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), N.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Bt({}, c.__s)), Bt(c.__s, N.getDerivedStateFromProps(y, c.__s))), d = c.props, f = c.state, c.__v = n, h)
          N.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (N.getDerivedStateFromProps == null && y !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, x), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, x) === !1 || n.__v === t.__v) {
            for (n.__v !== t.__v && (c.props = y, c.state = c.__s, c.__d = !1), c.__e = !1, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(I) {
              I && (I.__ = n);
            }), S = 0; S < c._sb.length; S++)
              c.__h.push(c._sb[S]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, x), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, m);
          });
        }
        if (c.context = x, c.props = y, c.__P = e, T = j.__r, A = 0, "prototype" in N && N.prototype.render) {
          for (c.state = c.__s, c.__d = !1, T && T(n), u = c.render(c.props, c.state, c.context), L = 0; L < c._sb.length; L++)
            c.__h.push(c._sb[L]);
          c._sb = [];
        } else
          do
            c.__d = !1, T && T(n), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++A < 25);
        c.state = c.__s, c.getChildContext != null && (s = Bt(Bt({}, s), c.getChildContext())), h || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(d, f)), xl(e, Gi(M = u != null && u.type === as && u.key == null ? u.props.children : u) ? M : [M], n, t, s, i, o, r, l, a), c.base = n.__e, n.__h = null, c.__h.length && r.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = Ya(t.__e, n, t, s, i, o, r, a);
    (u = j.diffed) && u(n);
  } catch (I) {
    n.__v = null, (a || o != null) && (n.__e = l, n.__h = !!a, o[o.indexOf(l)] = null), j.__e(I, n, t);
  }
}
function $l(e, n) {
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
function Ya(e, n, t, s, i, o, r, l) {
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
    if (o = o && cs.call(e.childNodes), u = (h = t.props || $s).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (h = {}, m = 0; m < e.attributes.length; m++)
          h[e.attributes[m].name] = e.attributes[m].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Ga(e, d, h, i, l), c)
      n.__k = [];
    else if (xl(e, Gi(m = n.props.children) ? m : [m], n, t, s, i && f !== "foreignObject", o, r, o ? o[0] : t.__k && kn(t, 0), l), o != null)
      for (m = o.length; m--; )
        o[m] != null && wl(o[m]);
    l || ("value" in d && (m = d.value) !== void 0 && (m !== e.value || f === "progress" && !m || f === "option" && m !== h.value) && Ts(e, "value", m, h.value, !1), "checked" in d && (m = d.checked) !== void 0 && m !== e.checked && Ts(e, "checked", m, h.checked, !1));
  }
  return e;
}
function Rl(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    j.__e(s, t);
  }
}
function Tl(e, n, t) {
  var s, i;
  if (j.unmount && j.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Rl(s, null, n)), (s = e.__c) != null) {
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
      s[i] && Tl(s[i], n, t || typeof e.type != "function");
  t || e.__e == null || wl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ka(e, n, t) {
  return this.constructor(e, t);
}
function hs(e, n, t) {
  var s, i, o;
  j.__ && j.__(e, n), i = (s = typeof t == "function") ? null : t && t.__k || n.__k, o = [], Bo(n, e = (!s && t || n).__k = dt(as, null, [e]), i || $s, $s, n.ownerSVGElement !== void 0, !s && t ? [t] : i ? null : n.firstChild ? cs.call(n.childNodes) : null, o, !s && t ? t : i ? i.__e : n.firstChild, s), $l(o, e);
}
function Al(e, n) {
  hs(e, n, Al);
}
function Xa(e, n, t) {
  var s, i, o, r, l = Bt({}, e.props);
  for (o in e.type && e.type.defaultProps && (r = e.type.defaultProps), n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : l[o] = n[o] === void 0 && r !== void 0 ? r[o] : n[o];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? cs.call(arguments, 2) : t), yn(e.type, l, s || e.key, i || e.ref, null);
}
function Ja(e, n) {
  var t = { __c: n = "__cC" + _l++, __: e, Consumer: function(s, i) {
    return s.children(i);
  }, Provider: function(s) {
    var i, o;
    return this.getChildContext || (i = [], (o = {})[n] = this, this.getChildContext = function() {
      return o;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && i.some(function(l) {
        l.__e = !0, vo(l);
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
cs = bl.slice, j = { __e: function(e, n, t, s) {
  for (var i, o, r; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (l) {
        e = l;
      }
  throw e;
} }, gl = 0, J = function(e) {
  return e != null && e.constructor === void 0;
}, B.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Bt({}, this.state), typeof e == "function" && (e = e(Bt({}, t), this.props)), e && Bt(t, e), e != null && this.__v && (n && this._sb.push(n), vo(this));
}, B.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), vo(this));
}, B.prototype.render = as, de = [], yl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, wo = function(e, n) {
  return e.__v.__b - n.__v.__b;
}, Rs.__r = 0, _l = 0;
const Za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: B,
  Fragment: as,
  cloneElement: Xa,
  createContext: Ja,
  createElement: dt,
  createRef: le,
  h: dt,
  hydrate: Al,
  get isValidElement() {
    return J;
  },
  get options() {
    return j;
  },
  render: hs,
  toChildArray: El
}, Symbol.toStringTag, { value: "Module" }));
var Qa = 0;
function _(e, n, t, s, i, o) {
  var r, l, a = {};
  for (l in n)
    l == "ref" ? r = n[l] : a[l] = n[l];
  var u = { type: e, props: a, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Qa, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return j.vnode && j.vnode(u), u;
}
var Ot;
class th {
  constructor(n = "") {
    w(this, Ot, void 0);
    typeof n == "object" ? $(this, Ot, n) : $(this, Ot, document.appendChild(document.createComment(n)));
  }
  on(n, t, s) {
    p(this, Ot).addEventListener(n, t, s);
  }
  once(n, t, s) {
    p(this, Ot).addEventListener(n, t, { once: !0, ...s });
  }
  off(n, t, s) {
    p(this, Ot).removeEventListener(n, t, s);
  }
  emit(n) {
    return p(this, Ot).dispatchEvent(n), n;
  }
}
Ot = new WeakMap();
const xo = /* @__PURE__ */ new Set([
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
class zo extends th {
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
    return typeof n == "string" && (xo.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), super.emit(zo.createEvent(n, t));
  }
  static createEvent(n, t) {
    return typeof n == "string" && (xo.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), n;
  }
}
var It, Nn, me, un;
class Sr extends zo {
  constructor(t = "", s) {
    super(t);
    w(this, me);
    w(this, It, /* @__PURE__ */ new Map());
    w(this, Nn, void 0);
    $(this, Nn, s == null ? void 0 : s.customEventSuffix);
  }
  on(t, s, i) {
    t = C(this, me, un).call(this, t), super.on(t, s, i), p(this, It).set(s, [t, i]);
  }
  off(t, s, i) {
    t = C(this, me, un).call(this, t), super.off(t, s, i), p(this, It).delete(s);
  }
  once(t, s, i) {
    t = C(this, me, un).call(this, t);
    const o = (r) => {
      s(r), p(this, It).delete(o);
    };
    super.once(t, o, i), p(this, It).set(o, [t, i]);
  }
  emit(t, s) {
    return typeof t == "string" && (t = C(this, me, un).call(this, t)), super.emit(t, s);
  }
  offAll() {
    Array.from(p(this, It).entries()).forEach(([t, [s, i]]) => {
      super.off(s, t, i);
    }), p(this, It).clear();
  }
}
It = new WeakMap(), Nn = new WeakMap(), me = new WeakSet(), un = function(t) {
  const s = p(this, Nn);
  return xo.has(t) || typeof s != "string" || t.endsWith(s) ? t : `${t}${s}`;
};
function eh(e, n) {
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
function nh(e, n, t) {
  try {
    const s = eh(e, n), i = s[s.length - 1];
    return i === void 0 ? t : i;
  } catch {
    return t;
  }
}
function ro(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function So(e, ...n) {
  if (!n.length)
    return e;
  const t = n.shift();
  if (ro(e) && ro(t))
    for (const s in t)
      ro(t[s]) ? (e[s] || Object.assign(e, { [s]: {} }), So(e[s], t[s])) : Object.assign(e, { [s]: t[s] });
  return So(e, ...n);
}
function rt(e, ...n) {
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
var Fo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Fo || {});
function nd(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / Fo[t]).toFixed(n) + t);
}
const sd = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Fo[s];
};
let Uo = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Gt;
function sh() {
  return Uo;
}
function ih(e) {
  Uo = e.toLowerCase();
}
function Ll(e, n) {
  Gt || (Gt = {}), typeof e == "string" && (e = { [e]: n ?? {} }), So(Gt, e);
}
function ie(e, n, t, s, i, o) {
  Array.isArray(e) ? Gt && e.unshift(Gt) : e = Gt ? [Gt, e] : [e], typeof t == "string" && (o = i, i = s, s = t, t = void 0);
  const r = i || Uo;
  let l;
  for (const a of e) {
    if (!a)
      continue;
    const u = a[r];
    if (!u)
      continue;
    const c = o && a === Gt ? `${o}.${n}` : n;
    if (l = nh(u, c), l !== void 0)
      break;
  }
  return l === void 0 ? s : t ? rt(l, ...Array.isArray(t) ? t : [t]) : l;
}
function Nl(e, n, t, s) {
  return ie(void 0, e, n, t, s);
}
ie.addLang = Ll;
ie.getLang = Nl;
ie.getCode = sh;
ie.setCode = ih;
Ll({
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
const zt = document, As = window, Ml = zt.documentElement, Ce = zt.createElement.bind(zt), Dl = Ce("div"), lo = Ce("table"), oh = Ce("tbody"), Er = Ce("tr"), { isArray: Yi, prototype: Pl } = Array, { concat: rh, filter: Vo, indexOf: Ol, map: Il, push: lh, slice: Hl, some: qo, splice: ch } = Pl, ah = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, hh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, uh = /<.+>/, fh = /^\w+$/;
function Go(e, n) {
  const t = dh(n);
  return !e || !t && !xe(n) && !G(n) ? [] : !t && hh.test(e) ? n.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !t && fh.test(e) ? n.getElementsByTagName(e) : n.querySelectorAll(e);
}
class Ki {
  constructor(n, t) {
    if (!n)
      return;
    if (Eo(n))
      return n;
    let s = n;
    if (Z(n)) {
      const i = t || zt;
      if (s = ah.test(n) && xe(i) ? i.getElementById(n.slice(1).replace(/\\/g, "")) : uh.test(n) ? Bl(n) : Eo(i) ? i.find(n) : Z(i) ? R(i).find(n) : Go(n, i), !s)
        return;
    } else if (ke(n))
      return this.ready(n);
    (s.nodeType || s === As) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(n, t) {
    return new Ki(n, t);
  }
}
const E = Ki.prototype, R = E.init;
R.fn = R.prototype = E;
E.length = 0;
E.splice = ch;
typeof Symbol == "function" && (E[Symbol.iterator] = Pl[Symbol.iterator]);
function Eo(e) {
  return e instanceof Ki;
}
function on(e) {
  return !!e && e === e.window;
}
function xe(e) {
  return !!e && e.nodeType === 9;
}
function dh(e) {
  return !!e && e.nodeType === 11;
}
function G(e) {
  return !!e && e.nodeType === 1;
}
function ph(e) {
  return !!e && e.nodeType === 3;
}
function mh(e) {
  return typeof e == "boolean";
}
function ke(e) {
  return typeof e == "function";
}
function Z(e) {
  return typeof e == "string";
}
function lt(e) {
  return e === void 0;
}
function $n(e) {
  return e === null;
}
function Wl(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Yo(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return n === null || n === Object.prototype;
}
R.isWindow = on;
R.isFunction = ke;
R.isArray = Yi;
R.isNumeric = Wl;
R.isPlainObject = Yo;
function K(e, n, t) {
  if (t) {
    let s = e.length;
    for (; s--; )
      if (n.call(e[s], s, e[s]) === !1)
        return e;
  } else if (Yo(e)) {
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
E.each = function(e) {
  return K(this, e);
};
E.empty = function() {
  return this.each((e, n) => {
    for (; n.firstChild; )
      n.removeChild(n.firstChild);
  });
};
function Ls(...e) {
  const n = mh(e[0]) ? e.shift() : !1, t = e.shift(), s = e.length;
  if (!t)
    return {};
  if (!s)
    return Ls(n, R, t);
  for (let i = 0; i < s; i++) {
    const o = e[i];
    for (const r in o)
      n && (Yi(o[r]) || Yo(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), Ls(n, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
R.extend = Ls;
E.extend = function(e) {
  return Ls(E, e);
};
const gh = /\S+/g;
function Xi(e) {
  return Z(e) ? e.match(gh) || [] : [];
}
E.toggleClass = function(e, n) {
  const t = Xi(e), s = !lt(n);
  return this.each((i, o) => {
    G(o) && K(t, (r, l) => {
      s ? n ? o.classList.add(l) : o.classList.remove(l) : o.classList.toggle(l);
    });
  });
};
E.addClass = function(e) {
  return this.toggleClass(e, !0);
};
E.removeAttr = function(e) {
  const n = Xi(e);
  return this.each((t, s) => {
    G(s) && K(n, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function yh(e, n) {
  if (e) {
    if (Z(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !G(this[0]))
          return;
        const t = this[0].getAttribute(e);
        return $n(t) ? void 0 : t;
      }
      return lt(n) ? this : $n(n) ? this.removeAttr(e) : this.each((t, s) => {
        G(s) && s.setAttribute(e, n);
      });
    }
    for (const t in e)
      this.attr(t, e[t]);
    return this;
  }
}
E.attr = yh;
E.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
E.hasClass = function(e) {
  return !!e && qo.call(this, (n) => G(n) && n.classList.contains(e));
};
E.get = function(e) {
  return lt(e) ? Hl.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
E.eq = function(e) {
  return R(this.get(e));
};
E.first = function() {
  return this.eq(0);
};
E.last = function() {
  return this.eq(-1);
};
function _h(e) {
  return lt(e) ? this.get().map((n) => G(n) || ph(n) ? n.textContent : "").join("") : this.each((n, t) => {
    G(t) && (t.textContent = e);
  });
}
E.text = _h;
function Ft(e, n, t) {
  if (!G(e))
    return;
  const s = As.getComputedStyle(e, null);
  return t ? s.getPropertyValue(n) || void 0 : s[n] || e.style[n];
}
function $t(e, n) {
  return parseInt(Ft(e, n), 10) || 0;
}
function Cr(e, n) {
  return $t(e, `border${n ? "Left" : "Top"}Width`) + $t(e, `padding${n ? "Left" : "Top"}`) + $t(e, `padding${n ? "Right" : "Bottom"}`) + $t(e, `border${n ? "Right" : "Bottom"}Width`);
}
const co = {};
function bh(e) {
  if (co[e])
    return co[e];
  const n = Ce(e);
  zt.body.insertBefore(n, null);
  const t = Ft(n, "display");
  return zt.body.removeChild(n), co[e] = t !== "none" ? t : "block";
}
function kr(e) {
  return Ft(e, "display") === "none";
}
function jl(e, n) {
  const t = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!t && !!n && t.call(e, n);
}
function Ji(e) {
  return Z(e) ? (n, t) => jl(t, e) : ke(e) ? e : Eo(e) ? (n, t) => e.is(t) : e ? (n, t) => t === e : () => !1;
}
E.filter = function(e) {
  const n = Ji(e);
  return R(Vo.call(this, (t, s) => n.call(t, s, t)));
};
function ce(e, n) {
  return n ? e.filter(n) : e;
}
E.detach = function(e) {
  return ce(this, e).each((n, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const wh = /^\s*<(\w+)[^>]*>/, vh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, $r = {
  "*": Dl,
  tr: oh,
  td: Er,
  th: Er,
  thead: lo,
  tbody: lo,
  tfoot: lo
};
function Bl(e) {
  if (!Z(e))
    return [];
  if (vh.test(e))
    return [Ce(RegExp.$1)];
  const n = wh.test(e) && RegExp.$1, t = $r[n] || $r["*"];
  return t.innerHTML = e, R(t.childNodes).detach().get();
}
R.parseHTML = Bl;
E.has = function(e) {
  const n = Z(e) ? (t, s) => Go(e, s).length : (t, s) => s.contains(e);
  return this.filter(n);
};
E.not = function(e) {
  const n = Ji(e);
  return this.filter((t, s) => (!Z(e) || G(s)) && !n.call(s, t, s));
};
function qt(e, n, t, s) {
  const i = [], o = ke(n), r = s && Ji(s);
  for (let l = 0, a = e.length; l < a; l++)
    if (o) {
      const u = n(e[l]);
      u.length && lh.apply(i, u);
    } else {
      let u = e[l][n];
      for (; u != null && !(s && r(-1, u)); )
        i.push(u), u = t ? u[n] : null;
    }
  return i;
}
function zl(e) {
  return e.multiple && e.options ? qt(Vo.call(e.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : e.value || "";
}
function xh(e) {
  return arguments.length ? this.each((n, t) => {
    const s = t.multiple && t.options;
    if (s || Xl.test(t.type)) {
      const i = Yi(e) ? Il.call(e, String) : $n(e) ? [] : [String(e)];
      s ? K(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = lt(e) || $n(e) ? "" : e;
  }) : this[0] && zl(this[0]);
}
E.val = xh;
E.is = function(e) {
  const n = Ji(e);
  return qo.call(this, (t, s) => n.call(t, s, t));
};
R.guid = 1;
function Nt(e) {
  return e.length > 1 ? Vo.call(e, (n, t, s) => Ol.call(s, n) === t) : e;
}
R.unique = Nt;
E.add = function(e, n) {
  return R(Nt(this.get().concat(R(e, n).get())));
};
E.children = function(e) {
  return ce(R(Nt(qt(this, (n) => n.children))), e);
};
E.parent = function(e) {
  return ce(R(Nt(qt(this, "parentNode"))), e);
};
E.index = function(e) {
  const n = e ? R(e)[0] : this[0], t = e ? this : R(n).parent().children();
  return Ol.call(t, n);
};
E.closest = function(e) {
  const n = this.filter(e);
  if (n.length)
    return n;
  const t = this.parent();
  return t.length ? t.closest(e) : n;
};
E.siblings = function(e) {
  return ce(R(Nt(qt(this, (n) => R(n).parent().children().not(n)))), e);
};
E.find = function(e) {
  return R(Nt(qt(this, (n) => Go(e, n))));
};
const Sh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Eh = /^$|^module$|\/(java|ecma)script/i, Ch = ["type", "src", "nonce", "noModule"];
function kh(e, n) {
  const t = R(e);
  t.filter("script").add(t.find("script")).each((s, i) => {
    if (Eh.test(i.type) && Ml.contains(i)) {
      const o = Ce("script");
      o.text = i.textContent.replace(Sh, ""), K(Ch, (r, l) => {
        i[l] && (o[l] = i[l]);
      }), n.head.insertBefore(o, null), n.head.removeChild(o);
    }
  });
}
function $h(e, n, t, s, i) {
  s ? e.insertBefore(n, t ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(n, e) : e.parentNode.insertBefore(n, t ? e : e.nextSibling), i && kh(n, e.ownerDocument);
}
function ae(e, n, t, s, i, o, r, l) {
  return K(e, (a, u) => {
    K(R(u), (c, h) => {
      K(R(n), (d, f) => {
        const m = t ? h : f, g = t ? f : h, y = t ? c : d;
        $h(m, y ? g.cloneNode(!0) : g, s, i, !y);
      }, l);
    }, r);
  }, o), n;
}
E.after = function() {
  return ae(arguments, this, !1, !1, !1, !0, !0);
};
E.append = function() {
  return ae(arguments, this, !1, !1, !0);
};
function Rh(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (lt(e))
    return this;
  const n = /<script[\s>]/.test(e);
  return this.each((t, s) => {
    G(s) && (n ? R(s).empty().append(e) : s.innerHTML = e);
  });
}
E.html = Rh;
E.appendTo = function(e) {
  return ae(arguments, this, !0, !1, !0);
};
E.wrapInner = function(e) {
  return this.each((n, t) => {
    const s = R(t), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
E.before = function() {
  return ae(arguments, this, !1, !0);
};
E.wrapAll = function(e) {
  let n = R(e), t = n[0];
  for (; t.children.length; )
    t = t.firstElementChild;
  return this.first().before(n), this.appendTo(t);
};
E.wrap = function(e) {
  return this.each((n, t) => {
    const s = R(e)[0];
    R(t).wrapAll(n ? s.cloneNode(!0) : s);
  });
};
E.insertAfter = function(e) {
  return ae(arguments, this, !0, !1, !1, !1, !1, !0);
};
E.insertBefore = function(e) {
  return ae(arguments, this, !0, !0);
};
E.prepend = function() {
  return ae(arguments, this, !1, !0, !0, !0, !0);
};
E.prependTo = function(e) {
  return ae(arguments, this, !0, !0, !0, !1, !1, !0);
};
E.contents = function() {
  return R(Nt(qt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
E.next = function(e, n, t) {
  return ce(R(Nt(qt(this, "nextElementSibling", n, t))), e);
};
E.nextAll = function(e) {
  return this.next(e, !0);
};
E.nextUntil = function(e, n) {
  return this.next(n, !0, e);
};
E.parents = function(e, n) {
  return ce(R(Nt(qt(this, "parentElement", !0, n))), e);
};
E.parentsUntil = function(e, n) {
  return this.parents(n, e);
};
E.prev = function(e, n, t) {
  return ce(R(Nt(qt(this, "previousElementSibling", n, t))), e);
};
E.prevAll = function(e) {
  return this.prev(e, !0);
};
E.prevUntil = function(e, n) {
  return this.prev(n, !0, e);
};
E.map = function(e) {
  return R(rh.apply([], Il.call(this, (n, t) => e.call(n, t, n))));
};
E.clone = function() {
  return this.map((e, n) => n.cloneNode(!0));
};
E.offsetParent = function() {
  return this.map((e, n) => {
    let t = n.offsetParent;
    for (; t && Ft(t, "position") === "static"; )
      t = t.offsetParent;
    return t || Ml;
  });
};
E.slice = function(e, n) {
  return R(Hl.call(this, e, n));
};
const Th = /-([a-z])/g;
function Ko(e) {
  return e.replace(Th, (n, t) => t.toUpperCase());
}
E.ready = function(e) {
  const n = () => setTimeout(e, 0, R);
  return zt.readyState !== "loading" ? n() : zt.addEventListener("DOMContentLoaded", n), this;
};
E.unwrap = function() {
  return this.parent().each((e, n) => {
    if (n.tagName === "BODY")
      return;
    const t = R(n);
    t.replaceWith(t.children());
  }), this;
};
E.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const n = e.getBoundingClientRect();
  return {
    top: n.top + As.pageYOffset,
    left: n.left + As.pageXOffset
  };
};
E.position = function() {
  const e = this[0];
  if (!e)
    return;
  const n = Ft(e, "position") === "fixed", t = n ? e.getBoundingClientRect() : this.offset();
  if (!n) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Ft(i, "position") === "static"; )
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
const Fl = {
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
E.prop = function(e, n) {
  if (e) {
    if (Z(e))
      return e = Fl[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((t, s) => {
        s[e] = n;
      });
    for (const t in e)
      this.prop(t, e[t]);
    return this;
  }
};
E.removeProp = function(e) {
  return this.each((n, t) => {
    delete t[Fl[e] || e];
  });
};
const Ah = /^--/;
function Xo(e) {
  return Ah.test(e);
}
const ao = {}, { style: Lh } = Dl, Nh = ["webkit", "moz", "ms"];
function Mh(e, n = Xo(e)) {
  if (n)
    return e;
  if (!ao[e]) {
    const t = Ko(e), s = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${Nh.join(`${s} `)}${s}`.split(" ");
    K(i, (o, r) => {
      if (r in Lh)
        return ao[e] = r, !1;
    });
  }
  return ao[e];
}
const Dh = {
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
function Ul(e, n, t = Xo(e)) {
  return !t && !Dh[e] && Wl(n) ? `${n}px` : n;
}
function Ph(e, n) {
  if (Z(e)) {
    const t = Xo(e);
    return e = Mh(e, t), arguments.length < 2 ? this[0] && Ft(this[0], e, t) : e ? (n = Ul(e, n, t), this.each((s, i) => {
      G(i) && (t ? i.style.setProperty(e, n) : i.style[e] = n);
    })) : this;
  }
  for (const t in e)
    this.css(t, e[t]);
  return this;
}
E.css = Ph;
function Vl(e, n) {
  try {
    return e(n);
  } catch {
    return n;
  }
}
const Oh = /^\s+|\s+$/;
function Rr(e, n) {
  const t = e.dataset[n] || e.dataset[Ko(n)];
  return Oh.test(t) ? t : Vl(JSON.parse, t);
}
function Ih(e, n, t) {
  t = Vl(JSON.stringify, t), e.dataset[Ko(n)] = t;
}
function Hh(e, n) {
  if (!e) {
    if (!this[0])
      return;
    const t = {};
    for (const s in this[0].dataset)
      t[s] = Rr(this[0], s);
    return t;
  }
  if (Z(e))
    return arguments.length < 2 ? this[0] && Rr(this[0], e) : lt(n) ? this : this.each((t, s) => {
      Ih(s, e, n);
    });
  for (const t in e)
    this.data(t, e[t]);
  return this;
}
E.data = Hh;
function ql(e, n) {
  const t = e.documentElement;
  return Math.max(e.body[`scroll${n}`], t[`scroll${n}`], e.body[`offset${n}`], t[`offset${n}`], t[`client${n}`]);
}
K([!0, !1], (e, n) => {
  K(["Width", "Height"], (t, s) => {
    const i = `${n ? "outer" : "inner"}${s}`;
    E[i] = function(o) {
      if (this[0])
        return on(this[0]) ? n ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : xe(this[0]) ? ql(this[0], s) : this[0][`${n ? "offset" : "client"}${s}`] + (o && n ? $t(this[0], `margin${t ? "Top" : "Left"}`) + $t(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (e, n) => {
  const t = n.toLowerCase();
  E[t] = function(s) {
    if (!this[0])
      return lt(s) ? void 0 : this;
    if (!arguments.length)
      return on(this[0]) ? this[0].document.documentElement[`client${n}`] : xe(this[0]) ? ql(this[0], n) : this[0].getBoundingClientRect()[t] - Cr(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!G(r))
        return;
      const l = Ft(r, "boxSizing");
      r.style[t] = Ul(t, i + (l === "border-box" ? Cr(r, !e) : 0));
    });
  };
});
const Tr = "___cd";
E.toggle = function(e) {
  return this.each((n, t) => {
    if (!G(t))
      return;
    const s = kr(t);
    (lt(e) ? s : e) ? (t.style.display = t[Tr] || "", kr(t) && (t.style.display = bh(t.tagName))) : s || (t[Tr] = Ft(t, "display"), t.style.display = "none");
  });
};
E.hide = function() {
  return this.toggle(!1);
};
E.show = function() {
  return this.toggle(!0);
};
const Ar = "___ce", Jo = ".", Zo = { focus: "focusin", blur: "focusout" }, Gl = { mouseenter: "mouseover", mouseleave: "mouseout" }, Wh = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Qo(e) {
  return Gl[e] || Zo[e] || e;
}
function tr(e) {
  const n = e.split(Jo);
  return [n[0], n.slice(1).sort()];
}
E.trigger = function(e, n) {
  if (Z(e)) {
    const [s, i] = tr(e), o = Qo(s);
    if (!o)
      return this;
    const r = Wh.test(o) ? "MouseEvents" : "HTMLEvents";
    e = zt.createEvent(r), e.initEvent(o, !0, !0), e.namespace = i.join(Jo), e.___ot = s;
  }
  e.___td = n;
  const t = e.___ot in Zo;
  return this.each((s, i) => {
    t && ke(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function Yl(e) {
  return e[Ar] = e[Ar] || {};
}
function jh(e, n, t, s, i) {
  const o = Yl(e);
  o[n] = o[n] || [], o[n].push([t, s, i]), e.addEventListener(n, i);
}
function Kl(e, n) {
  return !n || !qo.call(n, (t) => e.indexOf(t) < 0);
}
function Ns(e, n, t, s, i) {
  const o = Yl(e);
  if (n)
    o[n] && (o[n] = o[n].filter(([r, l, a]) => {
      if (i && a.guid !== i.guid || !Kl(r, t) || s && s !== l)
        return !0;
      e.removeEventListener(n, a);
    }));
  else
    for (n in o)
      Ns(e, n, t, s, i);
}
E.off = function(e, n, t) {
  if (lt(e))
    this.each((s, i) => {
      !G(i) && !xe(i) && !on(i) || Ns(i);
    });
  else if (Z(e))
    ke(n) && (t = n, n = ""), K(Xi(e), (s, i) => {
      const [o, r] = tr(i), l = Qo(o);
      this.each((a, u) => {
        !G(u) && !xe(u) && !on(u) || Ns(u, l, r, n, t);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
E.remove = function(e) {
  return ce(this, e).detach().off(), this;
};
E.replaceWith = function(e) {
  return this.before(e).remove();
};
E.replaceAll = function(e) {
  return R(e).replaceWith(this), this;
};
function Bh(e, n, t, s, i) {
  if (!Z(e)) {
    for (const o in e)
      this.on(o, n, t, e[o], i);
    return this;
  }
  return Z(n) || (lt(n) || $n(n) ? n = "" : lt(t) ? (t = n, n = "") : (s = t, t = n, n = "")), ke(s) || (s = t, t = void 0), s ? (K(Xi(e), (o, r) => {
    const [l, a] = tr(r), u = Qo(l), c = l in Gl, h = l in Zo;
    u && this.each((d, f) => {
      if (!G(f) && !xe(f) && !on(f))
        return;
      const m = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !Kl(a, g.namespace.split(Jo)) || !n && (h && (g.target !== f || g.___ot === u) || c && g.relatedTarget && f.contains(g.relatedTarget)))
          return;
        let y = f;
        if (n) {
          let x = g.target;
          for (; !jl(x, n); )
            if (x === f || (x = x.parentNode, !x))
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
            return f;
          }
        }), Object.defineProperty(g, "data", {
          configurable: !0,
          get() {
            return t;
          }
        });
        const b = s.call(y, g, g.___td);
        i && Ns(f, u, a, n, m), b === !1 && (g.preventDefault(), g.stopPropagation());
      };
      m.guid = s.guid = s.guid || R.guid++, jh(f, u, a, n, m);
    });
  }), this) : this;
}
E.on = Bh;
function zh(e, n, t, s) {
  return this.on(e, n, t, s, !0);
}
E.one = zh;
const Fh = /\r?\n/g;
function Uh(e, n) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(n.replace(Fh, `\r
`))}`;
}
const Vh = /file|reset|submit|button|image/i, Xl = /radio|checkbox/i;
E.serialize = function() {
  let e = "";
  return this.each((n, t) => {
    K(t.elements || [t], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Vh.test(i.type) || Xl.test(i.type) && !i.checked)
        return;
      const o = zl(i);
      if (!lt(o)) {
        const r = Yi(o) ? o : [o];
        K(r, (l, a) => {
          e += Uh(i.name, a);
        });
      }
    });
  }), e.slice(1);
};
window.$ = R;
const id = R, ho = /* @__PURE__ */ new Map();
var bt, Pe, pt;
class At {
  constructor(n, t) {
    w(this, bt, void 0);
    w(this, Pe, void 0);
    w(this, pt, void 0);
    n = typeof n == "string" ? document.querySelector(n) : n, this.constructor.EVENTS && $(this, pt, new Sr(n, { customEventSuffix: `.${this.constructor.KEY}` })), $(this, bt, { ...this.constructor.DEFAULT }), this.setOptions({ ...n instanceof HTMLElement ? R(n).data() : null, ...t }), this.constructor.all.set(n, this), $(this, Pe, n), n.setAttribute("data-zui", this.constructor.NAME), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return p(this, bt);
  }
  get element() {
    return p(this, Pe);
  }
  get events() {
    return p(this, pt);
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
    this.constructor.all.delete(p(this, Pe)), p(this, pt) && (this.emit("destroyed", this), p(this, pt).offAll());
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
    let i = Sr.createEvent(n, t);
    if (s !== !1) {
      const r = s || `on${n[0].toUpperCase()}${n.substring(1)}`, l = p(this, bt)[r];
      l && l(i) === !1 && (i.preventDefault(), i.stopPropagation());
    }
    return i = (o = p(this, pt)) == null ? void 0 : o.emit(n, t), i;
  }
  i18n(n, t, s) {
    return ie(p(this, bt).i18n, n, t, s, this.options.lang, this.constructor.NAME) ?? ie(p(this, bt).i18n, n, t, s, this.options.lang) ?? `{i18n:${n}}`;
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
    if (ho.has(n))
      return ho.get(n);
    const t = /* @__PURE__ */ new Map();
    return ho.set(n, t), t;
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
bt = new WeakMap(), Pe = new WeakMap(), pt = new WeakMap(), v(At, "EVENTS", !1), v(At, "DEFAULT", {});
class X extends At {
  constructor() {
    super(...arguments);
    v(this, "ref", le());
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
    hs(/* @__PURE__ */ _(s, { ref: this.ref, ...this.setOptions(t) }), this.element);
  }
}
v(X, "Component");
var er, z, Jl, Zl, _n, Lr, Ql = {}, tc = [], qh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function te(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function ec(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function ln(e, n, t) {
  var s, i, o, r = {};
  for (o in n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? er.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return ws(e, r, s, i, null);
}
function ws(e, n, t, s, i) {
  var o = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Jl };
  return i == null && z.vnode != null && z.vnode(o), o;
}
function Gh() {
  return { current: null };
}
function nr(e) {
  return e.children;
}
function bn(e, n) {
  this.props = e, this.context = n;
}
function Rn(e, n) {
  if (n == null)
    return e.__ ? Rn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? Rn(e) : null;
}
function nc(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return nc(e);
  }
}
function Nr(e) {
  (!e.__d && (e.__d = !0) && _n.push(e) && !Ms.__r++ || Lr !== z.debounceRendering) && ((Lr = z.debounceRendering) || setTimeout)(Ms);
}
function Ms() {
  for (var e; Ms.__r = _n.length; )
    e = _n.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), _n = [], e.some(function(n) {
      var t, s, i, o, r, l;
      n.__d && (r = (o = (t = n).__v).__e, (l = t.__P) && (s = [], (i = te({}, o)).__v = o.__v + 1, rc(l, o, i, t.__n, l.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? Rn(o), o.__h), Kh(s, o), o.__e != r && nc(o)));
    });
}
function sc(e, n, t, s, i, o, r, l, a, u) {
  var c, h, d, f, m, g, y, b = s && s.__k || tc, x = b.length;
  for (t.__k = [], c = 0; c < n.length; c++)
    if ((f = t.__k[c] = (f = n[c]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? ws(null, f, null, null, f) : Array.isArray(f) ? ws(nr, { children: f }, null, null, null) : f.__b > 0 ? ws(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = t, f.__b = t.__b + 1, (d = b[c]) === null || d && f.key == d.key && f.type === d.type)
        b[c] = void 0;
      else
        for (h = 0; h < x; h++) {
          if ((d = b[h]) && f.key == d.key && f.type === d.type) {
            b[h] = void 0;
            break;
          }
          d = null;
        }
      rc(e, f, d = d || Ql, i, o, r, l, a, u), m = f.__e, (h = f.ref) && d.ref != h && (y || (y = []), d.ref && y.push(d.ref, null, f), y.push(h, f.__c || m, f)), m != null ? (g == null && (g = m), typeof f.type == "function" && f.__k === d.__k ? f.__d = a = ic(f, a, e) : a = oc(e, f, d, b, m, a), typeof t.type == "function" && (t.__d = a)) : a && d.__e == a && a.parentNode != e && (a = Rn(d));
    }
  for (t.__e = g, c = x; c--; )
    b[c] != null && cc(b[c], b[c]);
  if (y)
    for (c = 0; c < y.length; c++)
      lc(y[c], y[++c], y[++c]);
}
function ic(e, n, t) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, n = typeof s.type == "function" ? ic(s, n, t) : oc(t, s, s, i, s.__e, n));
  return n;
}
function oc(e, n, t, s, i, o) {
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
function Yh(e, n, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || Ds(e, o, null, t[o], s);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || Ds(e, o, n[o], t[o], s);
}
function Mr(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || qh.test(n) ? t : t + "px";
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
            t && n in t || Mr(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || Mr(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? s || e.addEventListener(n, o ? Pr : Dr, o) : e.removeEventListener(n, o ? Pr : Dr, o);
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
function Dr(e) {
  this.l[e.type + !1](z.event ? z.event(e) : e);
}
function Pr(e) {
  this.l[e.type + !0](z.event ? z.event(e) : e);
}
function rc(e, n, t, s, i, o, r, l, a) {
  var u, c, h, d, f, m, g, y, b, x, S, T, A, L, M, N = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, l = n.__e = t.__e, n.__h = null, o = [l]), (u = z.__b) && u(n);
  try {
    t:
      if (typeof N == "function") {
        if (y = n.props, b = (u = N.contextType) && s[u.__c], x = u ? b ? b.props.value : u.__ : s, t.__c ? g = (c = n.__c = t.__c).__ = c.__E : ("prototype" in N && N.prototype.render ? n.__c = c = new N(y, x) : (n.__c = c = new bn(y, x), c.constructor = N, c.render = Jh), b && b.sub(c), c.props = y, c.state || (c.state = {}), c.context = x, c.__n = s, h = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), N.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = te({}, c.__s)), te(c.__s, N.getDerivedStateFromProps(y, c.__s))), d = c.props, f = c.state, h)
          N.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (N.getDerivedStateFromProps == null && y !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, x), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, x) === !1 || n.__v === t.__v) {
            for (c.props = y, c.state = c.__s, n.__v !== t.__v && (c.__d = !1), c.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(I) {
              I && (I.__ = n);
            }), S = 0; S < c._sb.length; S++)
              c.__h.push(c._sb[S]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, x), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, m);
          });
        }
        if (c.context = x, c.props = y, c.__v = n, c.__P = e, T = z.__r, A = 0, "prototype" in N && N.prototype.render) {
          for (c.state = c.__s, c.__d = !1, T && T(n), u = c.render(c.props, c.state, c.context), L = 0; L < c._sb.length; L++)
            c.__h.push(c._sb[L]);
          c._sb = [];
        } else
          do
            c.__d = !1, T && T(n), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++A < 25);
        c.state = c.__s, c.getChildContext != null && (s = te(te({}, s), c.getChildContext())), h || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(d, f)), M = u != null && u.type === nr && u.key == null ? u.props.children : u, sc(e, Array.isArray(M) ? M : [M], n, t, s, i, o, r, l, a), c.base = n.__e, n.__h = null, c.__h.length && r.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = Xh(t.__e, n, t, s, i, o, r, a);
    (u = z.diffed) && u(n);
  } catch (I) {
    n.__v = null, (a || o != null) && (n.__e = l, n.__h = !!a, o[o.indexOf(l)] = null), z.__e(I, n, t);
  }
}
function Kh(e, n) {
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
function Xh(e, n, t, s, i, o, r, l) {
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
    if (o = o && er.call(e.childNodes), u = (h = t.props || Ql).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (h = {}, m = 0; m < e.attributes.length; m++)
          h[e.attributes[m].name] = e.attributes[m].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Yh(e, d, h, i, l), c)
      n.__k = [];
    else if (m = n.props.children, sc(e, Array.isArray(m) ? m : [m], n, t, s, i && f !== "foreignObject", o, r, o ? o[0] : t.__k && Rn(t, 0), l), o != null)
      for (m = o.length; m--; )
        o[m] != null && ec(o[m]);
    l || ("value" in d && (m = d.value) !== void 0 && (m !== e.value || f === "progress" && !m || f === "option" && m !== h.value) && Ds(e, "value", m, h.value, !1), "checked" in d && (m = d.checked) !== void 0 && m !== e.checked && Ds(e, "checked", m, h.checked, !1));
  }
  return e;
}
function lc(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    z.__e(s, t);
  }
}
function cc(e, n, t) {
  var s, i;
  if (z.unmount && z.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || lc(s, null, n)), (s = e.__c) != null) {
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
      s[i] && cc(s[i], n, t || typeof e.type != "function");
  t || e.__e == null || ec(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Jh(e, n, t) {
  return this.constructor(e, t);
}
er = tc.slice, z = { __e: function(e, n, t, s) {
  for (var i, o, r; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Jl = 0, Zl = function(e) {
  return e != null && e.constructor === void 0;
}, bn.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = te({}, this.state), typeof e == "function" && (e = e(te({}, t), this.props)), e && te(t, e), e != null && this.__v && (n && this._sb.push(n), Nr(this));
}, bn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Nr(this));
}, bn.prototype.render = nr, _n = [], Ms.__r = 0;
var Zh = 0;
function kt(e, n, t, s, i) {
  var o, r, l = {};
  for (r in n)
    r == "ref" ? o = n[r] : l[r] = n[r];
  var a = { type: e, props: l, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Zh, __source: i, __self: s };
  if (typeof e == "function" && (o = e.defaultProps))
    for (r in o)
      l[r] === void 0 && (l[r] = o[r]);
  return z.vnode && z.vnode(a), a;
}
function Zi(...e) {
  const n = [], t = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? n[r][1] = !!o : (t.set(i, n.length), n.push([i, !!o]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Zi(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), n.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const D = (...e) => Zi(...e).reduce((n, [t, s]) => (s && n.push(t), n), []).join(" ");
function Qh({
  component: e = "div",
  className: n,
  children: t,
  style: s,
  attrs: i
}) {
  return ln(e, {
    className: D(n),
    style: s,
    ...i
  }, t);
}
function Co(e) {
  if (J(e))
    return e;
  if (typeof e == "string")
    return e.startsWith("icon-") || (e = `icon-${e}`), /* @__PURE__ */ _("i", { class: `icon ${e}` });
}
function ac({
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
    Co(l),
    /* @__PURE__ */ kt("span", { className: "text", children: a }),
    typeof t == "function" ? t() : t,
    Co(c)
  ];
  return ln(e, {
    className: D(n, { disabled: o, active: r }),
    title: h,
    [e === "a" ? "href" : "data-url"]: i,
    [e === "a" ? "target" : "data-target"]: u,
    onClick: d,
    ...f,
    ...s
  }, ...m);
}
function tu({
  component: e = "div",
  className: n,
  text: t,
  attrs: s,
  children: i,
  style: o,
  onClick: r
}) {
  return ln(e, {
    className: D(n),
    style: o,
    onClick: r,
    ...s
  }, t, typeof i == "function" ? i() : i);
}
function eu({
  component: e = "div",
  className: n,
  style: t,
  space: s,
  flex: i,
  attrs: o,
  onClick: r,
  children: l
}) {
  return ln(e, {
    className: D(n),
    style: { width: s, height: s, flex: i, ...t },
    onClick: r,
    ...o
  }, l);
}
function nu(e) {
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
    typeof g == "string" && l && l[g] && (g = l[g]), typeof g == "function" ? a ? y.push(...a.call(r, g, f, ...o)) : y.push(...g.call(r, f, ...o) ?? []) : y.push(g), y.forEach((b) => {
      b != null && (typeof b == "object" && !J(b) && ("html" in b || "__html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b) ? b.html ? f.push(
        /* @__PURE__ */ _("div", { className: D(b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })
      ) : b.__html ? m.push(b.__html) : (b.style && Object.assign(d, b.style), b.className && h.push(b.className), b.children && f.push(b.children), b.attrs && Object.assign(c, b.attrs)) : f.push(b));
    });
  }), m.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: m } }), [{
    className: D(h),
    style: d,
    ...c
  }, f];
}
function ko({
  tag: e = "div",
  ...n
}) {
  const [t, s] = nu(n);
  return dt(e, t, ...s);
}
function su({ type: e, ...n }) {
  return /* @__PURE__ */ kt(ko, { ...n });
}
function hc({
  component: e = "div",
  className: n,
  children: t,
  style: s,
  attrs: i
}) {
  return ln(e, {
    className: D(n),
    style: s,
    ...i
  }, t);
}
var jt;
let Qi = (jt = class extends bn {
  constructor() {
    super(...arguments);
    v(this, "ref", Gh());
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
          return /* @__PURE__ */ kt(y, { ...o });
      } else if (typeof r == "function") {
        const y = r.call(this, o, ln);
        if (Zl(y))
          return y;
        typeof y == "object" && Object.assign(o, y);
      }
    }
    const { type: l = "item", component: a, key: u = i, rootAttrs: c, rootClass: h, rootStyle: d, rootChildren: f, ...m } = o;
    if (l === "html")
      return /* @__PURE__ */ kt(
        "li",
        {
          className: D("action-menu-item", `${this.name}-html`, h, m.className),
          ...c,
          style: d || m.style,
          dangerouslySetInnerHTML: { __html: m.html }
        },
        u
      );
    const g = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[l] || jt.ItemComponents[l] : a;
    return Object.assign(m, {
      type: l,
      component: typeof a == "string" ? a : void 0
    }), this.renderTypedItem(g, {
      className: D(h),
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
    const { children: o, className: r, key: l, ...a } = s, { activeClass: u = "", activeKey: c, activeIcon: h } = this.props, d = h && c === l ? /* @__PURE__ */ kt("i", { className: `checked icon icon-${h}` }) : null, f = c === l;
    return /* @__PURE__ */ kt(
      "li",
      {
        className: D("action-menu-item", `${this.name}-${i.type}`, r, { [u]: f }),
        ...a,
        children: [
          /* @__PURE__ */ kt(t, { ...i }),
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
    } = t, b = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ kt(b, { class: D(this.name, r), style: i, ...y, ref: this.ref, children: [
      l && l.map(this.renderItem.bind(this, t)),
      a
    ] });
  }
}, v(jt, "ItemComponents", {
  divider: Qh,
  item: ac,
  heading: tu,
  space: eu,
  custom: su,
  basic: hc
}), v(jt, "ROOT_TAG", "menu"), v(jt, "NAME", "action-menu"), jt);
class Or extends X {
}
v(Or, "NAME", "actionmenu"), v(Or, "Component", Qi);
function Ir({
  ...e
}) {
  return /* @__PURE__ */ kt(ac, { ...e });
}
var go, Mn, wt, Oe;
let uc = (go = class extends Qi {
  constructor(t) {
    super(t);
    w(this, Mn, /* @__PURE__ */ new Set());
    w(this, wt, void 0);
    w(this, Oe, (t, s, i) => {
      this.toggleNestedMenu(t, s), i.preventDefault();
    });
    $(this, wt, t.nestedShow === void 0), p(this, wt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
    return /* @__PURE__ */ kt(
      i,
      {
        items: s,
        name: o,
        nestedShow: p(this, wt) ? this.state.nestedShow : l,
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
    p(this, Mn).add(r);
    const l = this.isNestedMenuShow(r);
    if (l && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(s)
    ], o.component = Ir), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: p(this, Oe).bind(this, r, !0),
        onMouseLeave: p(this, Oe).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: u } = o;
      o.onClick = (c) => {
        p(this, Oe).call(this, r, void 0, c), u == null || u(c);
      };
    }
    const a = this.renderToggleIcon(l, o);
    return a && (o.children = [o.children, a]), o.rootClass = [o.rootClass, "has-nested-menu", l ? "show" : ""], o;
  }
  isNestedMenuShow(t) {
    const s = p(this, wt) ? this.state.nestedShow : this.props.nestedShow;
    return s && typeof s == "object" ? s[t] : !!s;
  }
  toggleNestedMenu(t, s) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(t, s);
    if (!p(this, wt))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...p(this, Mn).values()].reduce((r, l) => (r[l] = !0, r), {}) : o = {}), s === void 0)
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
    p(this, wt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    p(this, wt) && this.setState({ nestedShow: !1 });
  }
}, Mn = new WeakMap(), wt = new WeakMap(), Oe = new WeakMap(), v(go, "ItemComponents", {
  item: Ir
}), go);
class Hr extends X {
}
v(Hr, "NAME", "actionmenunested"), v(Hr, "Component", uc);
let Lt = class extends B {
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
      caret: b,
      square: x,
      hint: S,
      ...T
    } = this.props, A = n || (l ? "a" : "button"), L = g == null || typeof g == "string" && !g.length || h && !f, M = b && L && !m && !y && !r && !h;
    return dt(
      A,
      {
        className: D("btn", t, o, {
          "btn-caret": M,
          disabled: u || h,
          active: c,
          loading: h,
          square: x === void 0 ? !M && !r && L : x
        }, i ? `size-${i}` : ""),
        title: S,
        [A === "a" ? "href" : "data-url"]: l,
        [A === "a" ? "target" : "data-target"]: a,
        type: A === "button" ? s : void 0,
        ...T
      },
      h ? /* @__PURE__ */ _("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : Co(m),
      L ? null : /* @__PURE__ */ _("span", { className: "text", children: h ? f : g }),
      h ? null : r,
      h ? null : typeof y == "string" ? /* @__PURE__ */ _("i", { class: `icon ${y}` }) : y,
      h ? null : b ? /* @__PURE__ */ _("span", { className: typeof b == "string" ? `caret-${b}` : "caret" }) : null
    );
  }
};
class Wr extends X {
}
v(Wr, "NAME", "button"), v(Wr, "Component", Lt);
var yo;
let sr = (yo = class extends uc {
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
}, v(yo, "NAME", "menu"), yo);
class jr extends X {
}
v(jr, "NAME", "menu"), v(jr, "Component", sr);
let us = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
function iu({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ _(Lt, { type: t, ...s });
}
function ou(e) {
  return e.button === 2;
}
function ir(e) {
  return e.split("-")[1];
}
function fc(e) {
  return e === "y" ? "height" : "width";
}
function wn(e) {
  return e.split("-")[0];
}
function dc(e) {
  return ["top", "bottom"].includes(wn(e)) ? "x" : "y";
}
function Br(e, n, t) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, l = dc(n), a = fc(l), u = s[a] / 2 - i[a] / 2, c = l === "x";
  let h;
  switch (wn(n)) {
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
  switch (ir(n)) {
    case "start":
      h[l] -= u * (t && c ? -1 : 1);
      break;
    case "end":
      h[l] += u * (t && c ? -1 : 1);
  }
  return h;
}
const ru = async (e, n, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let u = await r.getElementRects({ reference: e, floating: n, strategy: i }), { x: c, y: h } = Br(u, s, a), d = s, f = {}, m = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: y, fn: b } = l[g], { x, y: S, data: T, reset: A } = await b({ x: c, y: h, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: u, platform: r, elements: { reference: e, floating: n } });
    c = x ?? c, h = S ?? h, f = { ...f, [y]: { ...f[y], ...T } }, A && m <= 50 && (m++, typeof A == "object" && (A.placement && (d = A.placement), A.rects && (u = A.rects === !0 ? await r.getElementRects({ reference: e, floating: n, strategy: i }) : A.rects), { x: c, y: h } = Br(u, d, a)), g = -1);
  }
  return { x: c, y: h, placement: d, strategy: i, middlewareData: f };
};
function lu(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Ps(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function cu(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: s, y: i, platform: o, rects: r, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: h = "floating", altBoundary: d = !1, padding: f = 0 } = n, m = lu(f), g = l[d ? h === "floating" ? "reference" : "floating" : h], y = Ps(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(g))) == null || t ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: c, strategy: a })), b = h === "floating" ? { ...r.floating, x: s, y: i } : r.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), S = await (o.isElement == null ? void 0 : o.isElement(x)) && await (o.getScale == null ? void 0 : o.getScale(x)) || { x: 1, y: 1 }, T = Ps(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: b, offsetParent: x, strategy: a }) : b);
  return { top: (y.top - T.top + m.top) / S.y, bottom: (T.bottom - y.bottom + m.bottom) / S.y, left: (y.left - T.left + m.left) / S.x, right: (T.right - y.right + m.right) / S.x };
}
const au = ["top", "right", "bottom", "left"];
au.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const hu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Os(e) {
  return e.replace(/left|right|bottom|top/g, (n) => hu[n]);
}
function uu(e, n, t) {
  t === void 0 && (t = !1);
  const s = ir(e), i = dc(e), o = fc(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = Os(r)), { main: r, cross: Os(r) };
}
const fu = { start: "end", end: "start" };
function uo(e) {
  return e.replace(/start|end/g, (n) => fu[n]);
}
const pc = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: l, elements: a } = n, { mainAxis: u = !0, crossAxis: c = !0, fallbackPlacements: h, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: m = !0, ...g } = e, y = wn(s), b = wn(r) === r, x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), S = h || (b || !m ? [Os(r)] : function(k) {
      const H = Os(k);
      return [uo(k), H, uo(H)];
    }(r));
    h || f === "none" || S.push(...function(k, H, q, it) {
      const U = ir(k);
      let O = function(V, _t, he) {
        const ue = ["left", "right"], fe = ["right", "left"], Mt = ["top", "bottom"], Re = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return he ? _t ? fe : ue : _t ? ue : fe;
          case "left":
          case "right":
            return _t ? Mt : Re;
          default:
            return [];
        }
      }(wn(k), q === "start", it);
      return U && (O = O.map((V) => V + "-" + U), H && (O = O.concat(O.map(uo)))), O;
    }(r, m, f, x));
    const T = [r, ...S], A = await cu(n, g), L = [];
    let M = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (u && L.push(A[y]), c) {
      const { main: k, cross: H } = uu(s, o, x);
      L.push(A[k], A[H]);
    }
    if (M = [...M, { placement: s, overflows: L }], !L.every((k) => k <= 0)) {
      var N;
      const k = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, H = T[k];
      if (H)
        return { data: { index: k, overflows: M }, reset: { placement: H } };
      let q = "bottom";
      switch (d) {
        case "bestFit": {
          var I;
          const it = (I = M.map((U) => [U, U.overflows.filter((O) => O > 0).reduce((O, V) => O + V, 0)]).sort((U, O) => U[1] - O[1])[0]) == null ? void 0 : I[0].placement;
          it && (q = it);
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
function ut(e) {
  var n;
  return ((n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Rt(e) {
  return ut(e).getComputedStyle(e);
}
function oe(e) {
  return gc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ms;
function mc() {
  if (ms)
    return ms;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ms = e.brands.map((n) => n.brand + "/" + n.version).join(" "), ms) : navigator.userAgent;
}
function Ut(e) {
  return e instanceof ut(e).HTMLElement;
}
function gt(e) {
  return e instanceof ut(e).Element;
}
function gc(e) {
  return e instanceof ut(e).Node;
}
function zr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ut(e).ShadowRoot || e instanceof ShadowRoot;
}
function to(e) {
  const { overflow: n, overflowX: t, overflowY: s, display: i } = Rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + s + t) && !["inline", "contents"].includes(i);
}
function du(e) {
  return ["table", "td", "th"].includes(oe(e));
}
function $o(e) {
  const n = /firefox/i.test(mc()), t = Rt(e), s = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!s && s !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function yc() {
  return !/^((?!chrome|android).)*safari/i.test(mc());
}
function or(e) {
  return ["html", "body", "#document"].includes(oe(e));
}
const Fr = Math.min, vn = Math.max, Is = Math.round;
function _c(e) {
  const n = Rt(e);
  let t = parseFloat(n.width), s = parseFloat(n.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = Is(t) !== i || Is(s) !== o;
  return r && (t = i, s = o), { width: t, height: s, fallback: r };
}
function bc(e) {
  return gt(e) ? e : e.contextElement;
}
const wc = { x: 1, y: 1 };
function Ne(e) {
  const n = bc(e);
  if (!Ut(n))
    return wc;
  const t = n.getBoundingClientRect(), { width: s, height: i, fallback: o } = _c(n);
  let r = (o ? Is(t.width) : t.width) / s, l = (o ? Is(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
function Se(e, n, t, s) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), l = bc(e);
  let a = wc;
  n && (s ? gt(s) && (a = Ne(s)) : a = Ne(e));
  const u = l ? ut(l) : window, c = !yc() && t;
  let h = (r.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, d = (r.top + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / a.y, f = r.width / a.x, m = r.height / a.y;
  if (l) {
    const g = ut(l), y = s && gt(s) ? ut(s) : s;
    let b = g.frameElement;
    for (; b && s && y !== g; ) {
      const x = Ne(b), S = b.getBoundingClientRect(), T = getComputedStyle(b);
      S.x += (b.clientLeft + parseFloat(T.paddingLeft)) * x.x, S.y += (b.clientTop + parseFloat(T.paddingTop)) * x.y, h *= x.x, d *= x.y, f *= x.x, m *= x.y, h += S.x, d += S.y, b = ut(b).frameElement;
    }
  }
  return { width: f, height: m, top: d, right: h + f, bottom: d + m, left: h, x: h, y: d };
}
function ne(e) {
  return ((gc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function eo(e) {
  return gt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function vc(e) {
  return Se(ne(e)).left + eo(e).scrollLeft;
}
function pu(e, n, t) {
  const s = Ut(n), i = ne(n), o = Se(e, !0, t === "fixed", n);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && t !== "fixed")
    if ((oe(n) !== "body" || to(i)) && (r = eo(n)), Ut(n)) {
      const a = Se(n, !0);
      l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
    } else
      i && (l.x = vc(i));
  return { x: o.left + r.scrollLeft - l.x, y: o.top + r.scrollTop - l.y, width: o.width, height: o.height };
}
function Tn(e) {
  if (oe(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || (zr(e) ? e.host : null) || ne(e);
  return zr(n) ? n.host : n;
}
function Ur(e) {
  return Ut(e) && Rt(e).position !== "fixed" ? e.offsetParent : null;
}
function Vr(e) {
  const n = ut(e);
  let t = Ur(e);
  for (; t && du(t) && Rt(t).position === "static"; )
    t = Ur(t);
  return t && (oe(t) === "html" || oe(t) === "body" && Rt(t).position === "static" && !$o(t)) ? n : t || function(s) {
    let i = Tn(s);
    for (; Ut(i) && !or(i); ) {
      if ($o(i))
        return i;
      i = Tn(i);
    }
    return null;
  }(e) || n;
}
function xc(e) {
  const n = Tn(e);
  return or(n) ? e.ownerDocument.body : Ut(n) && to(n) ? n : xc(n);
}
function xn(e, n) {
  var t;
  n === void 0 && (n = []);
  const s = xc(e), i = s === ((t = e.ownerDocument) == null ? void 0 : t.body), o = ut(s);
  return i ? n.concat(o, o.visualViewport || [], to(s) ? s : []) : n.concat(s, xn(s));
}
function qr(e, n, t) {
  return n === "viewport" ? Ps(function(s, i) {
    const o = ut(s), r = ne(s), l = o.visualViewport;
    let a = r.clientWidth, u = r.clientHeight, c = 0, h = 0;
    if (l) {
      a = l.width, u = l.height;
      const d = yc();
      (d || !d && i === "fixed") && (c = l.offsetLeft, h = l.offsetTop);
    }
    return { width: a, height: u, x: c, y: h };
  }(e, t)) : gt(n) ? function(s, i) {
    const o = Se(s, !0, i === "fixed"), r = o.top + s.clientTop, l = o.left + s.clientLeft, a = Ut(s) ? Ne(s) : { x: 1, y: 1 }, u = s.clientWidth * a.x, c = s.clientHeight * a.y, h = l * a.x, d = r * a.y;
    return { top: d, left: h, right: h + u, bottom: d + c, x: h, y: d, width: u, height: c };
  }(n, t) : Ps(function(s) {
    var i;
    const o = ne(s), r = eo(s), l = (i = s.ownerDocument) == null ? void 0 : i.body, a = vn(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), u = vn(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0);
    let c = -r.scrollLeft + vc(s);
    const h = -r.scrollTop;
    return Rt(l || o).direction === "rtl" && (c += vn(o.clientWidth, l ? l.clientWidth : 0) - a), { width: a, height: u, x: c, y: h };
  }(ne(e)));
}
const mu = { getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: s, strategy: i } = e;
  const o = t === "clippingAncestors" ? function(u, c) {
    const h = c.get(u);
    if (h)
      return h;
    let d = xn(u).filter((y) => gt(y) && oe(y) !== "body"), f = null;
    const m = Rt(u).position === "fixed";
    let g = m ? Tn(u) : u;
    for (; gt(g) && !or(g); ) {
      const y = Rt(g), b = $o(g);
      (m ? b || f : b || y.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = y : d = d.filter((x) => x !== g), g = Tn(g);
    }
    return c.set(u, d), d;
  }(n, this._c) : [].concat(t), r = [...o, s], l = r[0], a = r.reduce((u, c) => {
    const h = qr(n, c, i);
    return u.top = vn(h.top, u.top), u.right = Fr(h.right, u.right), u.bottom = Fr(h.bottom, u.bottom), u.left = vn(h.left, u.left), u;
  }, qr(n, l, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: s } = e;
  const i = Ut(t), o = ne(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((oe(t) !== "body" || to(o)) && (r = eo(t)), Ut(t))) {
    const u = Se(t);
    l = Ne(t), a.x = u.x + t.clientLeft, a.y = u.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - r.scrollLeft * l.x + a.x, y: n.y * l.y - r.scrollTop * l.y + a.y };
}, isElement: gt, getDimensions: function(e) {
  return _c(e);
}, getOffsetParent: Vr, getDocumentElement: ne, getScale: Ne, async getElementRects(e) {
  let { reference: n, floating: t, strategy: s } = e;
  const i = this.getOffsetParent || Vr, o = this.getDimensions;
  return { reference: pu(n, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Rt(e).direction === "rtl" };
function gu(e, n, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: l = !1 } = s, a = i && !l, u = a || o ? [...gt(e) ? xn(e) : e.contextElement ? xn(e.contextElement) : [], ...xn(n)] : [];
  u.forEach((f) => {
    a && f.addEventListener("scroll", t, { passive: !0 }), o && f.addEventListener("resize", t);
  });
  let c, h = null;
  if (r) {
    let f = !0;
    h = new ResizeObserver(() => {
      f || t(), f = !1;
    }), gt(e) && !l && h.observe(e), gt(e) || !e.contextElement || l || h.observe(e.contextElement), h.observe(n);
  }
  let d = l ? Se(e) : null;
  return l && function f() {
    const m = Se(e);
    !d || m.x === d.x && m.y === d.y && m.width === d.width && m.height === d.height || t(), d = m, c = requestAnimationFrame(f);
  }(), t(), () => {
    var f;
    u.forEach((m) => {
      a && m.removeEventListener("scroll", t), o && m.removeEventListener("resize", t);
    }), (f = h) == null || f.disconnect(), h = null, l && cancelAnimationFrame(c);
  };
}
const Sc = (e, n, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: mu, ...t }, o = { ...i.platform, _c: s };
  return ru(e, n, { ...i, platform: o });
};
let yu = class extends sr {
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
      middleware: [pc()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    this.ref.current && Sc(this._getPopperElement(), this.ref.current, n).then(({ x: t, y: s }) => {
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
var Yt, Ie, Dn, Pn, Vs, Ec, qs, Cc;
class nt extends At {
  constructor() {
    super(...arguments);
    w(this, Vs);
    w(this, qs);
    w(this, Yt, void 0);
    w(this, Ie, void 0);
    w(this, Dn, void 0);
    v(this, "arrowEl");
    w(this, Pn, void 0);
  }
  get isShown() {
    var t;
    return (t = p(this, Yt)) == null ? void 0 : t.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return p(this, Yt) || this._ensureMenu();
  }
  get trigger() {
    return p(this, Dn) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "contextmenu");
  }
  show(t) {
    return $(this, Dn, t), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var s, i;
    return (s = p(this, Pn)) == null || s.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((i = p(this, Yt)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), (t = p(this, Yt)) == null || t.remove();
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
    return i.style.width = "max-content", i.style.position = this.options.strategy, i.style.top = "0", i.style.left = "0", $(this, Yt, i), i;
  }
  _getPopperOptions() {
    var o;
    const { placement: t, strategy: s } = this.options, i = {
      middleware: [],
      placement: t,
      strategy: s
    };
    return this.options.flip && ((o = i.middleware) == null || o.push(pc())), i;
  }
  _createPopper() {
    const t = this._getPopperOptions(), s = this._getPopperElement();
    $(this, Pn, gu(s, this.menu, () => {
      Sc(s, this.menu, t).then(({ x: i, y: o, middlewareData: r, placement: l }) => {
        Object.assign(this.menu.style, {
          left: `${i}px`,
          top: `${o}px`
        });
        const a = l.split("-")[0], u = C(this, Vs, Ec).call(this, a);
        if (r.arrow && this.arrowEl) {
          const { x: c, y: h } = r.arrow;
          Object.assign(this.arrowEl.style, {
            left: c != null ? `${c}px` : "",
            top: h != null ? `${h}px` : "",
            [u]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...C(this, qs, Cc).call(this, a)
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
    return !t || this.emit("updateMenu", { menu: t, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (hs(dt(yu, t), this.menu), !0);
  }
  _getPopperElement() {
    return p(this, Ie) || $(this, Ie, {
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
    }), p(this, Ie);
  }
  static clear(t) {
    var a, u;
    t instanceof Event && (t = { event: t });
    const { event: s, exclude: i, ignoreSelector: o = ".not-hide-menu" } = t || {};
    if (s && o && ((u = (a = s.target).closest) != null && u.call(a, o)) || s && ou(s))
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
Yt = new WeakMap(), Ie = new WeakMap(), Dn = new WeakMap(), Pn = new WeakMap(), Vs = new WeakSet(), Ec = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, qs = new WeakSet(), Cc = function(t) {
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
}, v(nt, "NAME", "contextmenu"), v(nt, "EVENTS", !0), v(nt, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), v(nt, "MENU_CLASS", "contextmenu"), v(nt, "CLASS_SHOW", "show"), v(nt, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  var s;
  const n = e.target;
  if ((s = n.closest) != null && s.call(n, `.${nt.MENU_CLASS}`))
    return;
  const t = n.closest(nt.MENU_SELECTOR);
  t && (nt.ensure(t).show(e), e.preventDefault());
});
document.addEventListener("click", nt.clear.bind(nt));
function kc(e) {
  return e.split("-")[1];
}
function _u(e) {
  return e === "y" ? "height" : "width";
}
function $c(e) {
  return e.split("-")[0];
}
function Rc(e) {
  return ["top", "bottom"].includes($c(e)) ? "x" : "y";
}
function bu(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
const wu = Math.min, vu = Math.max;
function xu(e, n, t) {
  return vu(e, wu(n, t));
}
const Su = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { element: t, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: l, platform: a, elements: u } = n;
  if (t == null)
    return {};
  const c = bu(s), h = { x: i, y: o }, d = Rc(r), f = _u(d), m = await a.getDimensions(t), g = d === "y", y = g ? "top" : "left", b = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", S = l.reference[f] + l.reference[d] - h[d] - l.floating[f], T = h[d] - l.reference[d], A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(t));
  let L = A ? A[x] : 0;
  L && await (a.isElement == null ? void 0 : a.isElement(A)) || (L = u.floating[x] || l.floating[f]);
  const M = S / 2 - T / 2, N = c[y], I = L - m[f] - c[b], k = L / 2 - m[f] / 2 + M, H = xu(N, k, I), q = kc(r) != null && k != H && l.reference[f] / 2 - (k < N ? c[y] : c[b]) - m[f] / 2 < 0;
  return { [d]: h[d] - (q ? k < N ? N - k : I - k : 0), data: { [d]: H, centerOffset: k - H } };
} }), Eu = ["top", "right", "bottom", "left"];
Eu.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const Cu = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: s } = n, i = await async function(o, r) {
      const { placement: l, platform: a, elements: u } = o, c = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), h = $c(l), d = kc(l), f = Rc(l) === "x", m = ["left", "top"].includes(h) ? -1 : 1, g = c && f ? -1 : 1, y = typeof r == "function" ? r(o) : r;
      let { mainAxis: b, crossAxis: x, alignmentAxis: S } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return d && typeof S == "number" && (x = d === "end" ? -1 * S : S), f ? { x: x * g, y: b * m } : { x: b * m, y: x * g };
    }(n, e);
    return { x: t + i.x, y: s + i.y, data: i };
  } };
};
var He, We, je, Gs, Tc;
const ar = class extends nt {
  constructor() {
    super(...arguments);
    w(this, Gs);
    w(this, He, !1);
    w(this, We, 0);
    v(this, "hideLater", () => {
      p(this, je).call(this), $(this, We, window.setTimeout(this.hide.bind(this), 100));
    });
    w(this, je, () => {
      clearTimeout(p(this, We)), $(this, We, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, s) {
    (s == null ? void 0 : s.clearOthers) !== !1 && ar.clear({ event: s == null ? void 0 : s.event, exclude: [this.element] });
    const i = super.show(t);
    return i && (!p(this, He) && this.isHover && C(this, Gs, Tc).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const t = super.hide();
    return t && this.element.classList.remove(this.elementShowClass), t;
  }
  toggle(t, s) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...s });
  }
  destroy() {
    p(this, He) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", p(this, je)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  _getPopperOptions() {
    var i, o;
    const t = super._getPopperOptions(), s = this._getArrowSize();
    return s && this.arrowEl && ((i = t.middleware) == null || i.push(Cu(s)), (o = t.middleware) == null || o.push(Su({ element: this.arrowEl }))), t;
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
let st = ar;
He = new WeakMap(), We = new WeakMap(), je = new WeakMap(), Gs = new WeakSet(), Tc = function() {
  const { menu: t } = this;
  t.addEventListener("mouseenter", p(this, je)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), $(this, He, !0);
}, v(st, "NAME", "dropdown"), v(st, "MENU_CLASS", "dropdown-menu"), v(st, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), v(st, "DEFAULT", {
  ...nt.DEFAULT,
  strategy: "fixed",
  trigger: "click"
});
document.addEventListener("click", function(e) {
  var s;
  const n = e.target, t = (s = n.closest) == null ? void 0 : s.call(n, st.MENU_SELECTOR);
  if (t) {
    const i = st.ensure(t);
    i.options.trigger === "click" && i.toggle();
  } else
    st.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const n = e.target, t = (i = n.closest) == null ? void 0 : i.call(n, st.MENU_SELECTOR);
  if (!t)
    return;
  const s = st.ensure(t);
  s.isHover && s.show();
});
const ku = (e) => {
  const n = document.getElementsByClassName("with-dropdown-show")[0];
  if (!n)
    return;
  const t = typeof n.closest == "function" ? n.closest(st.MENU_SELECTOR) : null;
  !t || !e.target.contains(t) || st.clear({ event: e });
};
window.addEventListener("scroll", ku, !0);
var On, Be;
class $u extends B {
  constructor(t) {
    var s;
    super(t);
    w(this, On, void 0);
    w(this, Be, le());
    this.state = { placement: ((s = t.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return p(this, Be);
  }
  get triggerElement() {
    return p(this, Be).current;
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
    }), $(this, On, st.ensure(this.triggerElement, {
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
      className: D("dropdown", t),
      children: typeof s == "function" ? s(this.state) : s,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: p(this, Be)
    };
  }
  render() {
    const { children: t, ...s } = this.beforeRender();
    return /* @__PURE__ */ _("div", { ...s, children: t });
  }
}
On = new WeakMap(), Be = new WeakMap();
class Ru extends $u {
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
    return s.caret = i, /* @__PURE__ */ _(Lt, { ...s });
  }
}
function Ac({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ _(Ru, { type: t, ...s });
}
let Lc = class extends B {
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
    return /* @__PURE__ */ _(Lt, { ...i }, s);
  }
  renderItem(n, t, s) {
    const { itemRender: i, btnProps: o, onClickItem: r } = n, l = { key: s, ...t };
    if (o && Object.assign(l, o), r && (l.onClick = this.handleItemClick.bind(this, l, s, t.onClick)), i) {
      const a = i.call(this, l, dt);
      if (J(a))
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
      beforeDestroy: d,
      ...f
    } = n;
    return /* @__PURE__ */ _(
      "div",
      {
        className: D("btn-group", i ? `size-${i}` : "", t),
        ...f,
        children: [
          s && s.map(this.renderItem.bind(this, n)),
          l
        ]
      }
    );
  }
};
function Tu({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ _(Lc, { type: t, ...s });
}
var Le;
let rn = (Le = class extends Qi {
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
}, v(Le, "ItemComponents", {
  item: iu,
  dropdown: Ac,
  "btn-group": Tu
}), v(Le, "ROOT_TAG", "nav"), v(Le, "NAME", "toolbar"), v(Le, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), Le);
function Au({
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
  l === !0 ? h = /* @__PURE__ */ _(Lt, { className: "alert-close btn ghost", square: !0, onClick: a, children: /* @__PURE__ */ _("span", { class: "close" }) }) : J(l) ? h = l : typeof l == "object" && (h = /* @__PURE__ */ _(Lt, { ...l, onClick: a }));
  const d = J(t) ? t : t ? /* @__PURE__ */ _(rn, { ...t }) : null;
  return /* @__PURE__ */ _("div", { className: D("alert", e), style: n, ...c, children: [
    J(u) ? u : typeof u == "string" ? /* @__PURE__ */ _("i", { className: `icon ${u}` }) : null,
    J(i) ? i : /* @__PURE__ */ _("div", { className: D("alert-content", o), children: [
      J(s) ? s : s && /* @__PURE__ */ _("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ _("div", { className: "alert-text", children: i }),
      s ? d : null
    ] }),
    s ? null : d,
    h,
    r
  ] });
}
function Lu(e) {
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
let Nu = class extends B {
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
      Au,
      {
        className: D("messager", a, i, r === !0 ? Lu(o) : r, l ? "in" : ""),
        ...c
      }
    );
  }
};
var ze, xs;
class vs extends X {
  constructor() {
    super(...arguments);
    w(this, ze);
    v(this, "_show", !1);
    v(this, "_showTimer", 0);
    v(this, "_afterRender", ({ firstRender: t }) => {
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
    this._show || (this.emit("show"), this.render(), this._show = !0, C(this, ze, xs).call(this, () => {
      this.emit("shown");
      const { time: t } = this.options;
      t && C(this, ze, xs).call(this, () => this.hide(), t);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), C(this, ze, xs).call(this, () => {
      this.emit("hidden");
    }));
  }
}
ze = new WeakSet(), xs = function(t, s = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, s);
}, v(vs, "NAME", "MessagerItem"), v(vs, "EVENTS", !0), v(vs, "Component", Nu);
var ge, Fe, Ht, Ys, Nc, Ks, Mc;
const hr = class extends At {
  constructor() {
    super(...arguments);
    w(this, Ys);
    w(this, Ks);
    w(this, ge, void 0);
    w(this, Fe, us(6));
    w(this, Ht, void 0);
  }
  get id() {
    return p(this, Fe);
  }
  get isShown() {
    var t;
    return !!((t = p(this, Ht)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), C(this, Ys, Nc).call(this).show();
  }
  hide() {
    var t;
    (t = p(this, Ht)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: s, ...i } = t, o = new hr(s || "body", i);
    return o.show(), o;
  }
};
let fn = hr;
ge = new WeakMap(), Fe = new WeakMap(), Ht = new WeakMap(), Ys = new WeakSet(), Nc = function() {
  if (p(this, Ht))
    p(this, Ht).setOptions(this.options);
  else {
    const t = C(this, Ks, Mc).call(this), s = new vs(t, this.options);
    s.on("hidden", () => {
      s.destroy(), t.remove(), $(this, ge, void 0);
    }), $(this, Ht, s);
  }
  return p(this, Ht);
}, Ks = new WeakSet(), Mc = function() {
  if (p(this, ge))
    return p(this, ge);
  const { placement: t = "top" } = this.options;
  let s = this.element.querySelector(`.messagers-${t}`);
  s || (s = document.createElement("div"), s.className = `messagers messagers-${t}`, this.element.appendChild(s));
  let i = s.querySelector(`#messager-${p(this, Fe)}`);
  return i || (i = document.createElement("div"), i.className = "messager-holder", i.id = `messager-${p(this, Fe)}`, s.appendChild(i), $(this, ge, i)), i;
}, v(fn, "NAME", "messager"), v(fn, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
R(document).on("zui.messager.show", (e, n) => {
  n && fn.show(n);
});
var _s;
let Mu = (_s = class extends B {
  render() {
    const { percent: n, circleSize: t, circleBorderSize: s, circleBgColor: i, circleColor: o } = this.props, r = (t - s) / 2, l = t / 2;
    return /* @__PURE__ */ _("svg", { width: t, height: t, class: "progress-circle", children: [
      /* @__PURE__ */ _("circle", { cx: l, cy: l, r, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ _("circle", { cx: l, cy: l, r, stroke: o, "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - n) / 100, "stroke-width": s }),
      /* @__PURE__ */ _("text", { x: l, y: l + s / 4, "dominant-baseline": "middle", style: { fontSize: `${r}px` }, children: Math.round(n) })
    ] });
  }
}, v(_s, "NAME", "zui.progress-circle"), v(_s, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), _s);
class Gr extends X {
}
v(Gr, "NAME", "table-sorter"), v(Gr, "Component", Mu);
let Du = class extends B {
  constructor() {
    super(...arguments);
    v(this, "state", { checked: !1 });
    v(this, "handleOnClick", () => {
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
    } = this.props, d = this.state.checked ? 1 : 0, f = t || "div", m = typeof r == "string" ? /* @__PURE__ */ _("i", { class: `icon ${r}` }) : r, g = typeof l == "string" ? /* @__PURE__ */ _("i", { class: `icon ${l}` }) : l, y = [
      /* @__PURE__ */ _("input", { onChange: c, type: "checkbox", value: d, checked: !!this.state.checked }),
      /* @__PURE__ */ _("label", { children: [
        m,
        o,
        g
      ] })
    ];
    return dt(
      f,
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
class Yr extends X {
}
v(Yr, "NAME", "switch"), v(Yr, "Component", Du);
function Pu(e) {
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
function Ou(e, n) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  const s = t.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= o && s.top + s.height <= i;
  const r = s.top <= i && s.top + s.height >= 0, l = s.left <= o && s.left + s.width >= 0;
  return r && l;
}
const pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: D,
  getClassList: Zi,
  isElementVisible: Ou,
  selectText: Pu
}, Symbol.toStringTag, { value: "Module" }));
/*! js-cookie v3.0.1 | MIT */
function gs(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n];
    for (var s in t)
      e[s] = t[s];
  }
  return e;
}
var Iu = {
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
function Ro(e, n) {
  function t(i, o, r) {
    if (!(typeof document > "u")) {
      r = gs({}, n, r), typeof r.expires == "number" && (r.expires = new Date(Date.now() + r.expires * 864e5)), r.expires && (r.expires = r.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
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
          gs({}, o, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return Ro(this.converter, gs({}, this.attributes, i));
      },
      withConverter: function(i) {
        return Ro(gs({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(n) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var Hu = Ro(Iu, { path: "/" });
window.$ && Object.assign(window.$, { cookie: Hu });
var Dc = function(e, n, t, s) {
  var i;
  n[0] = 0;
  for (var o = 1; o < n.length; o++) {
    var r = n[o++], l = n[o] ? (n[0] |= r ? 1 : 2, t[n[o++]]) : n[++o];
    r === 3 ? s[0] = l : r === 4 ? s[1] = Object.assign(s[1] || {}, l) : r === 5 ? (s[1] = s[1] || {})[n[++o]] = l : r === 6 ? s[1][n[++o]] += l + "" : r ? (i = e.apply(l, Dc(e, l, t, ["", null])), s.push(i), l[0] ? n[0] |= 2 : (n[o - 2] = 0, n[o] = i)) : s.push(l);
  }
  return s;
}, Kr = /* @__PURE__ */ new Map();
function Pc(e) {
  var n = Kr.get(this);
  return n || (n = /* @__PURE__ */ new Map(), Kr.set(this, n)), (n = Dc(this, n.get(e) || (n.set(e, n = function(t) {
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
var Wu = Pc.bind(dt);
Object.assign(window, { htm: Pc, html: Wu, preact: Za });
var In, Kt, vt, Ue, Ve, Ss;
const ur = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(n, t = "local") {
    w(this, Ve);
    w(this, In, void 0);
    w(this, Kt, void 0);
    w(this, vt, void 0);
    w(this, Ue, void 0);
    $(this, In, t), $(this, Kt, `ZUI_STORE:${n ?? us()}`), $(this, vt, t === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return p(this, In);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (p(this, Ue) || $(this, Ue, new ur(p(this, Kt), "session")), p(this, Ue));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(n, t) {
    const s = p(this, vt).getItem(C(this, Ve, Ss).call(this, n));
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
    p(this, vt).setItem(C(this, Ve, Ss).call(this, n), JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(n) {
    p(this, vt).removeItem(C(this, Ve, Ss).call(this, n));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(n) {
    for (let t = 0; t < p(this, vt).length; t++) {
      const s = p(this, vt).key(t);
      if (s != null && s.startsWith(p(this, Kt))) {
        const i = p(this, vt).getItem(s);
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
let Hs = ur;
In = new WeakMap(), Kt = new WeakMap(), vt = new WeakMap(), Ue = new WeakMap(), Ve = new WeakSet(), Ss = function(n) {
  return `${p(this, Kt)}:${n}`;
};
const ju = new Hs("DEFAULT");
function Bu(e, n = "local") {
  return new Hs(e, n);
}
Object.assign(ju, { create: Bu });
function zu(e) {
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
function Fu(e) {
  const [n, t, s] = typeof e == "string" ? zu(e) : e;
  return n * 0.299 + t * 0.587 + s * 0.114 > 186;
}
function Xr(e, n) {
  return Fu(e) ? (n == null ? void 0 : n.dark) ?? "#333333" : (n == null ? void 0 : n.light) ?? "#ffffff";
}
function Jr(e, n = 255) {
  return Math.min(Math.max(e, 0), n);
}
function Uu(e, n, t) {
  e = e % 360 / 360, n = Jr(n), t = Jr(t);
  const s = t <= 0.5 ? t * (n + 1) : t + n - t * n, i = t * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function Vu(e) {
  let n = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let t = 0; t < e.length; ++t)
      n += (t + 1) * e.charCodeAt(t);
  return n;
}
function qu(e, n) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e = e.length <= n ? e : e.substring(e.length - n) : /^[A-Za-z\d\s]+$/.test(e) ? e = e[0].toUpperCase() : e = e.length <= n ? e : e.substring(0, n), e;
}
let Oc = class extends B {
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
    } = this.props, b = ["avatar", n], x = { ...t, background: r, color: l };
    let S = 32;
    s && (typeof s == "number" ? (x.width = `${s}px`, x.height = `${s}px`, x.fontSize = `${Math.max(12, Math.round(s / 2))}px`, S = s) : (b.push(`size-${s}`), S = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? b.push("circle") : o && (typeof o == "number" ? x.borderRadius = `${o}px` : b.push(`rounded-${o}`));
    let T;
    if (h)
      b.push("has-img"), T = /* @__PURE__ */ _("img", { className: "avatar-img", src: h, alt: a });
    else if (a != null && a.length) {
      const A = qu(a, c);
      if (b.push("has-text", `has-text-${A.length}`), r)
        !l && r && (x.color = Xr(r));
      else {
        const M = u ?? a, N = (typeof M == "number" ? M : Vu(M)) * d % 360;
        if (x.background = `hsl(${N},${f * 100}%,${m * 100}%)`, !l) {
          const I = Uu(N, f, m);
          x.color = Xr(I);
        }
      }
      let L;
      S && S < 14 * A.length && (L = { transform: `scale(${S / (14 * A.length)})`, whiteSpace: "nowrap" }), T = /* @__PURE__ */ _("div", { "data-actualSize": S, className: "avatar-text", style: L, children: A });
    }
    return /* @__PURE__ */ _(
      "div",
      {
        className: D(b),
        style: x,
        ...y,
        children: [
          T,
          g
        ]
      }
    );
  }
};
class Zr extends X {
}
v(Zr, "NAME", "avatar"), v(Zr, "Component", Oc);
class Qr extends X {
}
v(Qr, "NAME", "btngroup"), v(Qr, "Component", Lc);
function Ic(e, n, t) {
  if (t) {
    e.setAttribute("class", D(n));
    return;
  }
  Zi(e.getAttribute("class"), n).forEach(([s, i]) => {
    e.classList.toggle(s, i);
  });
}
function dn(e, n, t) {
  if (typeof n == "object")
    return Object.entries(n).forEach(([s, i]) => {
      dn(e, s, i);
    });
  t !== void 0 && (e.style[n] = typeof t == "number" ? `${t}px` : t);
}
function Ws(e, n, t) {
  if (typeof n == "object")
    return Object.entries(n).forEach(([s, i]) => {
      Ws(e, s, i);
    });
  t !== void 0 && (t === null ? e.removeAttribute(n) : e.setAttribute(n, t));
}
var ye, Hn, Xt, Xs, qe, Es;
const Q = class extends At {
  constructor() {
    super(...arguments);
    w(this, qe);
    w(this, ye, 0);
    w(this, Hn, void 0);
    w(this, Xt, void 0);
    w(this, Xs, (t) => {
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
    if (this.on("click", p(this, Xs)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: t } = this;
      if (t) {
        const s = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const i = t.clientWidth, o = t.clientHeight;
          (!p(this, Xt) || p(this, Xt)[0] !== i || p(this, Xt)[1] !== o) && ($(this, Xt, [i, o]), this.layout());
        });
        s.observe(t), $(this, Hn, s);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var t;
    super.destroy(), (t = p(this, Hn)) == null || t.disconnect();
  }
  show(t) {
    if (this.isShown)
      return !1;
    this.setOptions(t);
    const { modalElement: s } = this, { animation: i, backdrop: o, className: r, style: l } = this.options;
    return Ic(s, [{
      "modal-trans": i,
      "modal-no-backdrop": !o
    }, Q.CLASS_SHOW, r]), dn(s, {
      zIndex: `${Q.zIndex++}`,
      ...l
    }), this.layout(), this.emit("show", this), C(this, qe, Es).call(this, () => {
      s.classList.add(Q.CLASS_SHOWN), C(this, qe, Es).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(Q.CLASS_SHOWN), this.emit("hide", this), C(this, qe, Es).call(this, () => {
      this.modalElement.classList.remove(Q.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(t, s) {
    if (!this.isShown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    s = s ?? this.options.size, Ws(i, "data-size", null);
    const o = { width: null, height: null };
    typeof s == "object" ? (o.width = s.width, o.height = s.height) : typeof s == "string" && ["md", "sm", "lg", "full"].includes(s) ? Ws(i, "data-size", s) : s && (o.width = s), dn(i, o), t = t ?? this.options.position ?? "fit";
    const r = i.clientWidth, l = i.clientHeight;
    $(this, Xt, [r, l]), typeof t == "function" && (t = t({ width: r, height: l }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof t == "number" ? (a.alignSelf = "flex-start", a.top = t) : typeof t == "object" && t ? (a.alignSelf = "flex-start", Object.assign(a, t)) : t === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - l) / 3))}px`) : t === "bottom" ? a.alignSelf = "flex-end" : t === "top" ? a.alignSelf = "flex-start" : t !== "center" && typeof t == "string" && (a.alignSelf = "flex-start", a.top = t), dn(i, a), dn(this.modalElement, "justifyContent", a.left ? "flex-start" : "center");
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
ye = new WeakMap(), Hn = new WeakMap(), Xt = new WeakMap(), Xs = new WeakMap(), qe = new WeakSet(), Es = function(t, s) {
  p(this, ye) && (clearTimeout(p(this, ye)), $(this, ye, 0)), t && (this.options.animation ? $(this, ye, window.setTimeout(t, s ?? this.options.transTime)) : t());
}, v(et, "NAME", "Modal"), v(et, "EVENTS", !0), v(et, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), v(et, "CLASS_SHOW", "show"), v(et, "CLASS_SHOWN", "in"), v(et, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), v(et, "zIndex", 2e3);
R(window).on("resize", () => {
  et.all.forEach((e) => {
    const n = e;
    n.isShown && n.options.responsive && n.layout();
  });
});
R(document).on("zui.modal.hide", (e, n) => {
  et.hide(n == null ? void 0 : n.target);
});
class Hc extends B {
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
    return J(n) ? n : n === !1 || !t ? null : /* @__PURE__ */ _("div", { className: "modal-header", children: /* @__PURE__ */ _("div", { className: "modal-title", children: t }) });
  }
  renderActions() {
    const {
      actions: n,
      closeBtn: t
    } = this.props;
    return !t && !n ? null : J(n) ? n : /* @__PURE__ */ _("div", { className: "modal-actions", children: [
      n ? /* @__PURE__ */ _(rn, { ...n }) : null,
      t ? /* @__PURE__ */ _("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ _("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: n
    } = this.props;
    return n ? J(n) ? n : /* @__PURE__ */ _("div", { className: "modal-body", children: n }) : null;
  }
  renderFooter() {
    const {
      footer: n,
      footerActions: t
    } = this.props;
    return J(n) ? n : n === !1 || !t ? null : /* @__PURE__ */ _("div", { className: "modal-footer", children: t ? /* @__PURE__ */ _(rn, { ...t }) : null });
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
v(Hc, "defaultProps", { closeBtn: !0 });
var Wn, Ge, jn;
class Gu extends B {
  constructor() {
    super(...arguments);
    w(this, Wn, le());
    w(this, Ge, void 0);
    v(this, "state", {});
    w(this, jn, () => {
      var i, o;
      const t = (o = (i = p(this, Wn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!t)
        return;
      let s = p(this, Ge);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const r = t.body, l = t.documentElement, a = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, l.offsetHeight));
        this.setState({ height: a });
      }), s.observe(t.body), s.observe(t.documentElement), $(this, Ge, s);
    });
  }
  componentDidMount() {
    p(this, jn).call(this);
  }
  componentWillUnmount() {
    var t;
    (t = p(this, Ge)) == null || t.disconnect();
  }
  render() {
    const { url: t } = this.props;
    return /* @__PURE__ */ _(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: t,
        ref: p(this, Wn),
        onLoad: p(this, jn)
      }
    );
  }
}
Wn = new WeakMap(), Ge = new WeakMap(), jn = new WeakMap();
function Wc(e) {
  const n = e.querySelectorAll("script");
  n && n.forEach((t) => {
    const s = document.createElement("script");
    s.type = t.type || "text/javascript", s.async = !1, s.innerHTML = t.innerHTML, e.appendChild(s), t.remove();
  });
}
var Bn;
class jc extends B {
  constructor() {
    super(...arguments);
    w(this, Bn, le());
  }
  componentDidMount() {
    if (!this.props.executeScript)
      return;
    const t = p(this, Bn).current;
    t && Wc(t);
  }
  render() {
    const { executeScript: t, html: s, ...i } = this.props;
    return /* @__PURE__ */ _("div", { ref: p(this, Bn), dangerouslySetInnerHTML: { __html: s }, ...i });
  }
}
Bn = new WeakMap();
function Yu(e, n) {
  const { custom: t, title: s, content: i } = n;
  return {
    body: i,
    title: s,
    ...typeof t == "function" ? t() : t
  };
}
async function Ku(e, n) {
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
    body: t === "html" ? /* @__PURE__ */ _(jc, { className: "modal-body", html: c, executeScript: a }) : c
  };
}
async function Xu(e, n) {
  const { url: t, custom: s, title: i } = n;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ _(Gu, { url: t })
  };
}
const Ju = {
  custom: Yu,
  ajax: Ku,
  iframe: Xu
};
var zn, Fn, xt, Ye, Cs, Js, Bc, Un, To;
const Dt = class extends et {
  constructor() {
    super(...arguments);
    w(this, Ye);
    w(this, Js);
    w(this, Un);
    w(this, zn, void 0);
    w(this, Fn, void 0);
    w(this, xt, void 0);
  }
  get id() {
    return p(this, Fn);
  }
  get loading() {
    return this.modalElement.classList.contains(Dt.LOADING_CLASS);
  }
  get modalElement() {
    let t = p(this, zn);
    if (!t) {
      const { id: s } = this;
      t = this.element.querySelector(`#${s}`), t || (t = document.createElement("div"), Ws(t, {
        id: s,
        style: this.options.style
      }), Ic(t, ["modal modal-async", this.options.className]), this.element.appendChild(t)), $(this, zn, t);
    }
    return t;
  }
  afterInit() {
    super.afterInit(), $(this, Fn, this.options.id || `modal-${us()}`);
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
    p(this, xt) && clearTimeout(p(this, xt));
    const { modalElement: t, options: s } = this, { type: i, loadTimeout: o } = s, r = Ju[i];
    if (!r)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    t.classList.add(Dt.LOADING_CLASS), await C(this, Js, Bc).call(this), o && $(this, xt, window.setTimeout(() => {
      $(this, xt, 0), C(this, Un, To).call(this, this.options.timeoutTip);
    }, o));
    const l = await r.call(this, t, s);
    return l === !1 ? await C(this, Un, To).call(this, this.options.failedTip) : l && typeof l == "object" && await C(this, Ye, Cs).call(this, l), p(this, xt) && (clearTimeout(p(this, xt)), $(this, xt, 0)), t.classList.remove(Dt.LOADING_CLASS), !0;
  }
  static open(t) {
    return new Promise((s) => {
      const { container: i = document.body, ...o } = t, r = new Dt(i, { show: !0, ...o });
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
    const d = [];
    (Array.isArray(l) ? l : [l]).forEach((g) => {
      g = {
        ...typeof g == "string" ? { key: g } : g
      }, typeof g.key == "string" && (g.text || (g.text = Nl(g.key, g.key)), g.btnType || (g.btnType = `btn-wide ${g.key === "confirm" ? "primary" : "btn-default"}`)), g && d.push(g);
    }, []);
    let f;
    const m = d.length ? {
      gap: 4,
      items: d,
      onClickItem: ({ item: g, event: y }) => {
        const b = Dt.query(y.target);
        f = g.key, (a == null ? void 0 : a(g, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return Dt.open({
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
    return Dt.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, l) => {
        i == null || i(r.key === "confirm", l), s == null || s(r, l);
      },
      ...o
    }).then((r) => r === "confirm");
  }
};
let pn = Dt;
zn = new WeakMap(), Fn = new WeakMap(), xt = new WeakMap(), Ye = new WeakSet(), Cs = function(t) {
  return new Promise((s) => {
    if (Array.isArray(t))
      return this.modalElement.innerHTML = t[0], Wc(this.modalElement), s();
    const { afterRender: i, ...o } = t;
    t = {
      afterRender: (r) => {
        this.layout(), i == null || i(r), s();
      },
      ...o
    }, hs(
      /* @__PURE__ */ _(Hc, { ...t }),
      this.modalElement
    );
  });
}, Js = new WeakSet(), Bc = function() {
  const { loadingText: t } = this.options;
  return C(this, Ye, Cs).call(this, {
    body: /* @__PURE__ */ _("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ _("span", { className: "spinner" }),
      t ? /* @__PURE__ */ _("span", { className: "modal-loading-text", children: t }) : null
    ] })
  });
}, Un = new WeakSet(), To = function(t) {
  if (t)
    return C(this, Ye, Cs).call(this, {
      body: /* @__PURE__ */ _("div", { className: "modal-load-failed", children: t })
    });
}, v(pn, "LOADING_CLASS", "loading"), v(pn, "DEFAULT", {
  ...et.DEFAULT,
  loadTimeout: 1e4
});
var Jt, Zs, zc, Qs, Fc, ti, Uc;
class Sn extends At {
  constructor() {
    super(...arguments);
    w(this, Zs);
    w(this, Qs);
    w(this, ti);
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
    return C(this, Qs, Fc).call(this).show();
  }
  hide() {
    var t;
    (t = p(this, Jt)) == null || t.hide();
  }
}
Jt = new WeakMap(), Zs = new WeakSet(), zc = function() {
  const {
    container: t,
    ...s
  } = this.options, i = s, o = this.element.getAttribute("href") || "";
  return i.type || (i.target || o[0] === "#" ? i.type = "static" : i.type = i.type || (i.url || o ? "ajax" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && o[0] !== "#" && (i.url = o), i;
}, Qs = new WeakSet(), Fc = function() {
  const t = C(this, Zs, zc).call(this);
  let s = p(this, Jt);
  return s ? s.setOptions(t) : t.type === "static" ? (s = new et(C(this, ti, Uc).call(this), t), $(this, Jt, s)) : (s = new pn(this.container, t), $(this, Jt, s)), s;
}, ti = new WeakSet(), Uc = function() {
  let t = this.options.target;
  if (!t) {
    const { element: s } = this;
    if (s.tagName === "A") {
      const i = s.getAttribute("href");
      i != null && i.startsWith("#") && (t = i);
    }
  }
  return this.container.querySelector(t || ".modal");
}, v(Sn, "NAME", "ModalTrigger"), v(Sn, "EVENTS", !0), v(Sn, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (e) => {
  var s;
  const n = e.target, t = (s = n.closest) == null ? void 0 : s.call(n, Sn.TOGGLE_SELECTOR);
  if (t) {
    const i = Sn.ensure(t);
    i && i.show();
  }
});
var _o;
let Zu = (_o = class extends Qi {
  beforeRender() {
    const n = super.beforeRender();
    return n.className = D(n.className, n.type ? `nav-${n.type}` : "", {
      "nav-stacked": n.stacked
    }), n;
  }
}, v(_o, "NAME", "nav"), _o);
class tl extends X {
}
v(tl, "NAME", "nav"), v(tl, "Component", Zu);
function An(e, n) {
  const t = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof n == "string" && (n === "first" ? n = 1 : n === "last" ? n = t : n === "prev" ? n = e.page - 1 : n === "next" ? n = e.page + 1 : n === "current" ? n = e.page : n = Number.parseInt(n, 10)), n = n !== void 0 ? Math.max(1, Math.min(n < 0 ? t + n : n, t)) : e.page, {
    ...e,
    pageTotal: t,
    page: n
  };
}
function Qu({
  key: e,
  type: n,
  btnType: t,
  page: s,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...l
}) {
  const a = An(o, s);
  return l.text === void 0 && !l.icon && i && (l.text = typeof i == "function" ? i(a) : rt(i, a)), l.url === void 0 && r && (l.url = typeof r == "function" ? r(a) : rt(r, a)), l.disabled === void 0 && (l.disabled = s !== void 0 && a.page === o.page), /* @__PURE__ */ _(Lt, { type: t, ...l });
}
const Pt = 24 * 60 * 60 * 1e3, ct = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), fs = (e, n = /* @__PURE__ */ new Date()) => (e = ct(e), n = ct(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), Ao = (e, n = /* @__PURE__ */ new Date()) => ct(e).getFullYear() === ct(n).getFullYear(), tf = (e, n = /* @__PURE__ */ new Date()) => (e = ct(e), n = ct(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), yd = (e, n = /* @__PURE__ */ new Date()) => {
  e = ct(e), n = ct(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), i = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, _d = (e, n) => fs(ct(n), e), bd = (e, n) => fs(ct(n).getTime() - Pt, e), wd = (e, n) => fs(ct(n).getTime() + Pt, e), vd = (e, n) => fs(ct(n).getTime() - 2 * Pt, e), Lo = (e, n = "yyyy-MM-dd hh:mm", t = "") => {
  if (e = ct(e), Number.isNaN(e.getDay()))
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
  return /(y+)/i.test(n) && (n.includes("[yyyy-]") && (n = n.replace("[yyyy-]", Ao(e) ? "" : "yyyy-")), n = n.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(n)) {
      const o = `${s[i]}`;
      n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), n;
}, xd = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = Lo(e, Ao(e) ? s.month : s.full);
  if (fs(e, n))
    return i;
  const o = Lo(n, Ao(e, n) ? tf(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
}, Sd = (e) => {
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
}, el = (e, n, t = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, el(e, "day", t, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, el(e, "day", t, s);
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
function ef({
  key: e,
  type: n,
  page: t,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const l = An(i, t);
  return s = typeof s == "function" ? s(l) : rt(s, l), /* @__PURE__ */ _(hc, { ...r, children: [
    o,
    s
  ] });
}
function nf({
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
  const a = { ...l, square: !0 }, u = () => (a.text = "", a.icon = "icon-ellipsis-h", a.disabled = !0, /* @__PURE__ */ _(Lt, { type: t, ...a })), c = (d, f) => {
    const m = [];
    for (let g = d; g <= f; g++) {
      a.text = g, delete a.icon, a.disabled = !1;
      const y = An(i, g);
      r && (a.url = typeof r == "function" ? r(y) : rt(r, y)), m.push(/* @__PURE__ */ _(Lt, { type: t, ...a, onClick: o }));
    }
    return m;
  };
  let h = [];
  return h = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? h = [...h, ...c(2, i.pageTotal)] : i.page < s - 2 ? h = [...h, ...c(2, s - 2), u(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? h = [...h, u(), ...c(i.pageTotal - s + 3, i.pageTotal)] : h = [...h, u(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), u(), ...c(i.pageTotal, i.pageTotal)]), h;
}
function sf({
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
      url: typeof t == "function" ? t(u) : rt(t, u)
    };
  });
  const { text: r = "" } = o;
  return o.text = typeof r == "function" ? r(n) : rt(r, n), i.menu = { ...i.menu, className: D((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ _(Ac, { type: "dropdown", dropdown: i, ...o });
}
function of({
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
    const y = An(i, h);
    l && !l({ info: y, event: g }) || (g.target.href = c.url = typeof a == "function" ? a(y) : rt(a, y));
  }, m = An(i, n || 0);
  return c.url = typeof a == "function" ? a(m) : rt(a, m), /* @__PURE__ */ _("div", { className: D("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ _("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ _(Lt, { type: s, ...c, onClick: f })
  ] });
}
var hn;
let rf = (hn = class extends rn {
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
}, v(hn, "NAME", "pager"), v(hn, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), v(hn, "ItemComponents", {
  ...rn.ItemComponents,
  link: Qu,
  info: ef,
  nav: nf,
  "size-menu": sf,
  goto: of
}), hn);
class nl extends X {
}
v(nl, "NAME", "pager"), v(nl, "Component", rf);
var ei;
class lf extends B {
  constructor() {
    super(...arguments);
    w(this, ei, (t) => {
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
    return l.length ? c = /* @__PURE__ */ _("div", { className: "picker-multi-selections", children: l.map((h, d) => /* @__PURE__ */ _("div", { className: "picker-multi-selection", children: [
      h.text ?? h.value,
      /* @__PURE__ */ _("div", { className: "picker-deselect-btn btn", onClick: p(this, ei), "data-idx": d, children: /* @__PURE__ */ _("span", { className: "close" }) })
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
ei = new WeakMap();
var ni;
class cf extends B {
  constructor() {
    super(...arguments);
    w(this, ni, (t) => {
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
    } = this.props, [h] = l, d = h ? /* @__PURE__ */ _("span", { className: "picker-single-selection", children: h.text ?? h.value }) : /* @__PURE__ */ _("span", { className: "picker-select-placeholder", children: o }), f = h && a ? /* @__PURE__ */ _("button", { type: "button", className: "btn picker-deselect-btn", onClick: p(this, ni), children: /* @__PURE__ */ _("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ _(
      "div",
      {
        className: D("picker-select picker-select-single form-control", t, { disabled: i, focused: r }),
        style: s,
        onClick: u,
        children: [
          d,
          c,
          f,
          /* @__PURE__ */ _("span", { class: "caret" })
        ]
      }
    );
  }
}
ni = new WeakMap();
var si, Vc, Vn, ii, qn, oi;
class af extends B {
  constructor() {
    super(...arguments);
    w(this, si);
    v(this, "state", { keys: "", shown: !1 });
    w(this, Vn, (t) => {
      var s;
      (s = t.target) != null && s.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    w(this, ii, ({ item: t }) => {
      const s = this.props.items.find((i) => i.value === t.key);
      s && this.props.onSelectItem(s);
    });
    w(this, qn, (t) => {
      this.setState({ keys: t.target.value });
    });
    w(this, oi, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", p(this, Vn)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", p(this, Vn));
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
    return /* @__PURE__ */ _("div", { className: D("picker-menu", i, { shown: h, "has-search": f }), id: `picker-menu-${t}`, style: { maxHeight: r, maxWidth: l, width: a, ...o }, children: [
      s ? /* @__PURE__ */ _("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ _("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: c, value: d, onChange: p(this, qn), onInput: p(this, qn) }),
        f ? /* @__PURE__ */ _("button", { type: "button", className: "btn picker-menu-search-clear", onClick: p(this, oi), children: /* @__PURE__ */ _("span", { className: "close" }) }) : /* @__PURE__ */ _("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ _(sr, { className: "picker-menu-list", items: C(this, si, Vc).call(this), onClickItem: p(this, ii), ...u })
    ] });
  }
}
si = new WeakSet(), Vc = function() {
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
      typeof d == "string" && o.length && (d = /* @__PURE__ */ _("span", { dangerouslySetInnerHTML: { __html: o.reduce((f, m) => f.replace(m, `<span class="picker-menu-item-match">${m}</span>`), d) } })), r.push({
        key: a,
        active: i.has(a),
        text: d,
        ...h
      });
    }
    return r;
  }, []);
}, Vn = new WeakMap(), ii = new WeakMap(), qn = new WeakMap(), oi = new WeakMap();
function sl(e) {
  const n = /* @__PURE__ */ new Set();
  return e.reduce((t, s) => (n.has(s) || (n.add(s), t.push(s)), t), []);
}
var bo, Gn, Yn, Kn, Ke, ks, Xn, No, ri, qc, li, Gc, ci, ai, hi, ui, fi, Yc;
let hf = (bo = class extends B {
  constructor(t) {
    super(t);
    w(this, Ke);
    w(this, Xn);
    w(this, ri);
    w(this, li);
    w(this, fi);
    w(this, Gn, 0);
    w(this, Yn, us());
    w(this, Kn, le());
    w(this, ci, (t, s) => {
      const { valueList: i } = this, o = new Set(t.map((l) => l.value)), r = i.filter((l) => !o.has(l));
      this.setState({ value: r.length ? r.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    w(this, ai, (t) => {
      console.log("#handleSelectClick", t), this.setState({ open: !0 });
    });
    w(this, hi, () => {
      this.close();
    });
    w(this, ui, (t) => {
      this.props.multiple ? this.toggleValue(t.value) : this.setState({ value: t.value }, () => {
        var s;
        (s = p(this, Kn).current) == null || s.hide();
      });
    });
    this.state = {
      value: C(this, ri, qc).call(this, t.defaultValue) ?? "",
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
    return C(this, Xn, No).call(this, this.state.value);
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
      const i = ++_r(this, Gn)._;
      if (await C(this, Ke, ks).call(this, { loading: !0, items: [] }), t = await t(), p(this, Gn) !== i)
        return [];
    }
    const s = {};
    return Array.isArray(t) && this.state.items !== t && (s.items = t), this.state.loading && (s.loading = !1), Object.keys(s).length && await C(this, Ke, ks).call(this, s), t;
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
    await C(this, Ke, ks).call(this, { open: t }), t && this.loadItemList();
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
    } = this.props, r = o ? lf : cf;
    return /* @__PURE__ */ _("div", { className: D("picker", t), style: s, id: `picker-${p(this, Yn)}`, children: [
      /* @__PURE__ */ _(r, { ...C(this, li, Gc).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ _(af, { ...C(this, fi, Yc).call(this), ref: p(this, Kn) }) : null
    ] });
  }
}, Gn = new WeakMap(), Yn = new WeakMap(), Kn = new WeakMap(), Ke = new WeakSet(), ks = function(t) {
  return new Promise((s) => {
    this.setState(t, s);
  });
}, Xn = new WeakSet(), No = function(t) {
  return typeof t == "string" ? sl(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) ? sl(t) : [];
}, ri = new WeakSet(), qc = function(t) {
  const s = C(this, Xn, No).call(this, t);
  return s.length ? s.join(this.props.valueSplitter ?? ",") : void 0;
}, li = new WeakSet(), Gc = function() {
  const { placeholder: t, disabled: s } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: t,
    disabled: s,
    selections: this.getSelections(),
    onClick: p(this, ai),
    onDeselect: p(this, ci)
  };
}, ci = new WeakMap(), ai = new WeakMap(), hi = new WeakMap(), ui = new WeakMap(), fi = new WeakSet(), Yc = function() {
  const { search: t, menuClass: s, menuWidth: i, menuStyle: o, menuMaxHeight: r, menuMaxWidth: l } = this.props, { items: a } = this.state;
  return {
    id: p(this, Yn),
    items: a,
    selections: this.valueList,
    search: t === !0 || typeof t == "number" && t <= a.length,
    style: o,
    className: s,
    width: i,
    maxHeight: r,
    maxWidth: l,
    onRequestHide: p(this, hi),
    onSelectItem: p(this, ui)
  };
}, v(bo, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), bo);
class il extends X {
}
v(il, "NAME", "picker"), v(il, "Component", hf);
class ol extends X {
}
v(ol, "NAME", "toolbar"), v(ol, "Component", rn);
function ds(e) {
  return e.split("-")[1];
}
function rr(e) {
  return e === "y" ? "height" : "width";
}
function Me(e) {
  return e.split("-")[0];
}
function no(e) {
  return ["top", "bottom"].includes(Me(e)) ? "x" : "y";
}
function rl(e, n, t) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, l = no(n), a = rr(l), u = s[a] / 2 - i[a] / 2, c = l === "x";
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
const uf = async (e, n, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let u = await r.getElementRects({ reference: e, floating: n, strategy: i }), { x: c, y: h } = rl(u, s, a), d = s, f = {}, m = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: y, fn: b } = l[g], { x, y: S, data: T, reset: A } = await b({ x: c, y: h, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: u, platform: r, elements: { reference: e, floating: n } });
    c = x ?? c, h = S ?? h, f = { ...f, [y]: { ...f[y], ...T } }, A && m <= 50 && (m++, typeof A == "object" && (A.placement && (d = A.placement), A.rects && (u = A.rects === !0 ? await r.getElementRects({ reference: e, floating: n, strategy: i }) : A.rects), { x: c, y: h } = rl(u, d, a)), g = -1);
  }
  return { x: c, y: h, placement: d, strategy: i, middlewareData: f };
};
function Kc(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function js(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function ff(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: s, y: i, platform: o, rects: r, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: h = "floating", altBoundary: d = !1, padding: f = 0 } = n, m = Kc(f), g = l[d ? h === "floating" ? "reference" : "floating" : h], y = js(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(g))) == null || t ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: c, strategy: a })), b = h === "floating" ? { ...r.floating, x: s, y: i } : r.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), S = await (o.isElement == null ? void 0 : o.isElement(x)) && await (o.getScale == null ? void 0 : o.getScale(x)) || { x: 1, y: 1 }, T = js(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: b, offsetParent: x, strategy: a }) : b);
  return { top: (y.top - T.top + m.top) / S.y, bottom: (T.bottom - y.bottom + m.bottom) / S.y, left: (y.left - T.left + m.left) / S.x, right: (T.right - y.right + m.right) / S.x };
}
const df = Math.min, pf = Math.max;
function mf(e, n, t) {
  return pf(e, df(n, t));
}
const gf = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { element: t, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: l, platform: a } = n;
  if (t == null)
    return {};
  const u = Kc(s), c = { x: i, y: o }, h = no(r), d = rr(h), f = await a.getDimensions(t), m = h === "y" ? "top" : "left", g = h === "y" ? "bottom" : "right", y = l.reference[d] + l.reference[h] - c[h] - l.floating[d], b = c[h] - l.reference[h], x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(t));
  let S = x ? h === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
  S === 0 && (S = l.floating[d]);
  const T = y / 2 - b / 2, A = u[m], L = S - f[d] - u[g], M = S / 2 - f[d] / 2 + T, N = mf(A, M, L), I = ds(r) != null && M != N && l.reference[d] / 2 - (M < A ? u[m] : u[g]) - f[d] / 2 < 0;
  return { [h]: c[h] - (I ? M < A ? A - M : L - M : 0), data: { [h]: N, centerOffset: M - N } };
} }), yf = ["top", "right", "bottom", "left"];
yf.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const _f = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Bs(e) {
  return e.replace(/left|right|bottom|top/g, (n) => _f[n]);
}
function bf(e, n, t) {
  t === void 0 && (t = !1);
  const s = ds(e), i = no(e), o = rr(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = Bs(r)), { main: r, cross: Bs(r) };
}
const wf = { start: "end", end: "start" };
function fo(e) {
  return e.replace(/start|end/g, (n) => wf[n]);
}
const vf = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: l, elements: a } = n, { mainAxis: u = !0, crossAxis: c = !0, fallbackPlacements: h, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: m = !0, ...g } = e, y = Me(s), b = Me(r) === r, x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), S = h || (b || !m ? [Bs(r)] : function(k) {
      const H = Bs(k);
      return [fo(k), H, fo(H)];
    }(r));
    h || f === "none" || S.push(...function(k, H, q, it) {
      const U = ds(k);
      let O = function(V, _t, he) {
        const ue = ["left", "right"], fe = ["right", "left"], Mt = ["top", "bottom"], Re = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return he ? _t ? fe : ue : _t ? ue : fe;
          case "left":
          case "right":
            return _t ? Mt : Re;
          default:
            return [];
        }
      }(Me(k), q === "start", it);
      return U && (O = O.map((V) => V + "-" + U), H && (O = O.concat(O.map(fo)))), O;
    }(r, m, f, x));
    const T = [r, ...S], A = await ff(n, g), L = [];
    let M = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (u && L.push(A[y]), c) {
      const { main: k, cross: H } = bf(s, o, x);
      L.push(A[k], A[H]);
    }
    if (M = [...M, { placement: s, overflows: L }], !L.every((k) => k <= 0)) {
      var N;
      const k = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, H = T[k];
      if (H)
        return { data: { index: k, overflows: M }, reset: { placement: H } };
      let q = "bottom";
      switch (d) {
        case "bestFit": {
          var I;
          const it = (I = M.map((U) => [U, U.overflows.filter((O) => O > 0).reduce((O, V) => O + V, 0)]).sort((U, O) => U[1] - O[1])[0]) == null ? void 0 : I[0].placement;
          it && (q = it);
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
}, xf = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: s } = n, i = await async function(o, r) {
      const { placement: l, platform: a, elements: u } = o, c = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), h = Me(l), d = ds(l), f = no(l) === "x", m = ["left", "top"].includes(h) ? -1 : 1, g = c && f ? -1 : 1, y = typeof r == "function" ? r(o) : r;
      let { mainAxis: b, crossAxis: x, alignmentAxis: S } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return d && typeof S == "number" && (x = d === "end" ? -1 * S : S), f ? { x: x * g, y: b * m } : { x: b * m, y: x * g };
    }(n, e);
    return { x: t + i.x, y: s + i.y, data: i };
  } };
};
function ft(e) {
  var n;
  return ((n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Tt(e) {
  return ft(e).getComputedStyle(e);
}
function re(e) {
  return Jc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ys;
function Xc() {
  if (ys)
    return ys;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ys = e.brands.map((n) => n.brand + "/" + n.version).join(" "), ys) : navigator.userAgent;
}
function Vt(e) {
  return e instanceof ft(e).HTMLElement;
}
function yt(e) {
  return e instanceof ft(e).Element;
}
function Jc(e) {
  return e instanceof ft(e).Node;
}
function ll(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ft(e).ShadowRoot || e instanceof ShadowRoot;
}
function so(e) {
  const { overflow: n, overflowX: t, overflowY: s, display: i } = Tt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + s + t) && !["inline", "contents"].includes(i);
}
function Sf(e) {
  return ["table", "td", "th"].includes(re(e));
}
function Mo(e) {
  const n = /firefox/i.test(Xc()), t = Tt(e), s = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!s && s !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function Zc() {
  return !/^((?!chrome|android).)*safari/i.test(Xc());
}
function lr(e) {
  return ["html", "body", "#document"].includes(re(e));
}
const cl = Math.min, En = Math.max, zs = Math.round;
function Qc(e) {
  const n = Tt(e);
  let t = parseFloat(n.width), s = parseFloat(n.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = zs(t) !== i || zs(s) !== o;
  return r && (t = i, s = o), { width: t, height: s, fallback: r };
}
function ta(e) {
  return yt(e) ? e : e.contextElement;
}
const ea = { x: 1, y: 1 };
function De(e) {
  const n = ta(e);
  if (!Vt(n))
    return ea;
  const t = n.getBoundingClientRect(), { width: s, height: i, fallback: o } = Qc(n);
  let r = (o ? zs(t.width) : t.width) / s, l = (o ? zs(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
function Ee(e, n, t, s) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), l = ta(e);
  let a = ea;
  n && (s ? yt(s) && (a = De(s)) : a = De(e));
  const u = l ? ft(l) : window, c = !Zc() && t;
  let h = (r.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, d = (r.top + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / a.y, f = r.width / a.x, m = r.height / a.y;
  if (l) {
    const g = ft(l), y = s && yt(s) ? ft(s) : s;
    let b = g.frameElement;
    for (; b && s && y !== g; ) {
      const x = De(b), S = b.getBoundingClientRect(), T = getComputedStyle(b);
      S.x += (b.clientLeft + parseFloat(T.paddingLeft)) * x.x, S.y += (b.clientTop + parseFloat(T.paddingTop)) * x.y, h *= x.x, d *= x.y, f *= x.x, m *= x.y, h += S.x, d += S.y, b = ft(b).frameElement;
    }
  }
  return { width: f, height: m, top: d, right: h + f, bottom: d + m, left: h, x: h, y: d };
}
function se(e) {
  return ((Jc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function io(e) {
  return yt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function na(e) {
  return Ee(se(e)).left + io(e).scrollLeft;
}
function Ef(e, n, t) {
  const s = Vt(n), i = se(n), o = Ee(e, !0, t === "fixed", n);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && t !== "fixed")
    if ((re(n) !== "body" || so(i)) && (r = io(n)), Vt(n)) {
      const a = Ee(n, !0);
      l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
    } else
      i && (l.x = na(i));
  return { x: o.left + r.scrollLeft - l.x, y: o.top + r.scrollTop - l.y, width: o.width, height: o.height };
}
function Ln(e) {
  if (re(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || (ll(e) ? e.host : null) || se(e);
  return ll(n) ? n.host : n;
}
function al(e) {
  return Vt(e) && Tt(e).position !== "fixed" ? e.offsetParent : null;
}
function hl(e) {
  const n = ft(e);
  let t = al(e);
  for (; t && Sf(t) && Tt(t).position === "static"; )
    t = al(t);
  return t && (re(t) === "html" || re(t) === "body" && Tt(t).position === "static" && !Mo(t)) ? n : t || function(s) {
    let i = Ln(s);
    for (; Vt(i) && !lr(i); ) {
      if (Mo(i))
        return i;
      i = Ln(i);
    }
    return null;
  }(e) || n;
}
function sa(e) {
  const n = Ln(e);
  return lr(n) ? e.ownerDocument.body : Vt(n) && so(n) ? n : sa(n);
}
function Cn(e, n) {
  var t;
  n === void 0 && (n = []);
  const s = sa(e), i = s === ((t = e.ownerDocument) == null ? void 0 : t.body), o = ft(s);
  return i ? n.concat(o, o.visualViewport || [], so(s) ? s : []) : n.concat(s, Cn(s));
}
function ul(e, n, t) {
  return n === "viewport" ? js(function(s, i) {
    const o = ft(s), r = se(s), l = o.visualViewport;
    let a = r.clientWidth, u = r.clientHeight, c = 0, h = 0;
    if (l) {
      a = l.width, u = l.height;
      const d = Zc();
      (d || !d && i === "fixed") && (c = l.offsetLeft, h = l.offsetTop);
    }
    return { width: a, height: u, x: c, y: h };
  }(e, t)) : yt(n) ? function(s, i) {
    const o = Ee(s, !0, i === "fixed"), r = o.top + s.clientTop, l = o.left + s.clientLeft, a = Vt(s) ? De(s) : { x: 1, y: 1 }, u = s.clientWidth * a.x, c = s.clientHeight * a.y, h = l * a.x, d = r * a.y;
    return { top: d, left: h, right: h + u, bottom: d + c, x: h, y: d, width: u, height: c };
  }(n, t) : js(function(s) {
    var i;
    const o = se(s), r = io(s), l = (i = s.ownerDocument) == null ? void 0 : i.body, a = En(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), u = En(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0);
    let c = -r.scrollLeft + na(s);
    const h = -r.scrollTop;
    return Tt(l || o).direction === "rtl" && (c += En(o.clientWidth, l ? l.clientWidth : 0) - a), { width: a, height: u, x: c, y: h };
  }(se(e)));
}
const Cf = { getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: s, strategy: i } = e;
  const o = t === "clippingAncestors" ? function(u, c) {
    const h = c.get(u);
    if (h)
      return h;
    let d = Cn(u).filter((y) => yt(y) && re(y) !== "body"), f = null;
    const m = Tt(u).position === "fixed";
    let g = m ? Ln(u) : u;
    for (; yt(g) && !lr(g); ) {
      const y = Tt(g), b = Mo(g);
      (m ? b || f : b || y.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = y : d = d.filter((x) => x !== g), g = Ln(g);
    }
    return c.set(u, d), d;
  }(n, this._c) : [].concat(t), r = [...o, s], l = r[0], a = r.reduce((u, c) => {
    const h = ul(n, c, i);
    return u.top = En(h.top, u.top), u.right = cl(h.right, u.right), u.bottom = cl(h.bottom, u.bottom), u.left = En(h.left, u.left), u;
  }, ul(n, l, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: s } = e;
  const i = Vt(t), o = se(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((re(t) !== "body" || so(o)) && (r = io(t)), Vt(t))) {
    const u = Ee(t);
    l = De(t), a.x = u.x + t.clientLeft, a.y = u.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - r.scrollLeft * l.x + a.x, y: n.y * l.y - r.scrollTop * l.y + a.y };
}, isElement: yt, getDimensions: function(e) {
  return Qc(e);
}, getOffsetParent: hl, getDocumentElement: se, getScale: De, async getElementRects(e) {
  let { reference: n, floating: t, strategy: s } = e;
  const i = this.getOffsetParent || hl, o = this.getDimensions;
  return { reference: Ef(n, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Tt(e).direction === "rtl" };
function kf(e, n, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: l = !1 } = s, a = i && !l, u = a || o ? [...yt(e) ? Cn(e) : e.contextElement ? Cn(e.contextElement) : [], ...Cn(n)] : [];
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
  let d = l ? Ee(e) : null;
  return l && function f() {
    const m = Ee(e);
    !d || m.x === d.x && m.y === d.y && m.width === d.width && m.height === d.height || t(), d = m, c = requestAnimationFrame(f);
  }(), t(), () => {
    var f;
    u.forEach((m) => {
      a && m.removeEventListener("scroll", t), o && m.removeEventListener("resize", t);
    }), (f = h) == null || f.disconnect(), h = null, l && cancelAnimationFrame(c);
  };
}
const $f = (e, n, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Cf, ...t }, o = { ...i.platform, _c: s };
  return uf(e, n, { ...i, platform: o });
};
var Xe, Je, Ze, _e, tt, di, Jn, Zn, Do, pi, ia, mi, oa, gi, ra, yi, la, _i, ca, bi, aa, wi, ha, Qe, vi, ua;
const pe = class extends At {
  constructor() {
    super(...arguments);
    w(this, Zn);
    w(this, pi);
    w(this, mi);
    w(this, gi);
    w(this, yi);
    w(this, _i);
    w(this, bi);
    w(this, wi);
    w(this, vi);
    w(this, Xe, !1);
    w(this, Je, void 0);
    w(this, Ze, 0);
    w(this, _e, void 0);
    w(this, tt, void 0);
    w(this, di, void 0);
    w(this, Jn, void 0);
    v(this, "hideLater", () => {
      p(this, Qe).call(this), $(this, Ze, window.setTimeout(this.hide.bind(this), 100));
    });
    w(this, Qe, () => {
      clearTimeout(p(this, Ze)), $(this, Ze, 0);
    });
  }
  get isShown() {
    var t;
    return (t = p(this, _e)) == null ? void 0 : t.classList.contains(pe.CLASS_SHOW);
  }
  get tooltip() {
    return p(this, _e) || C(this, mi, oa).call(this);
  }
  get trigger() {
    return p(this, di) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${pe.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tooltip");
  }
  show(t) {
    return this.setOptions(t), !p(this, Xe) && this.isHover && C(this, vi, ua).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(pe.CLASS_SHOW), C(this, bi, aa).call(this), !0;
  }
  hide() {
    var t, s;
    return (t = p(this, Jn)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (s = p(this, _e)) == null || s.classList.remove(pe.CLASS_SHOW), !0;
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    p(this, Xe) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", p(this, Qe)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(t) {
    t instanceof Event && (t = { event: t });
    const { exclude: s } = t || {}, i = this.getAll().entries(), o = new Set(s || []);
    for (const [r, l] of i)
      o.has(r) || l.hide();
  }
};
let ht = pe;
Xe = new WeakMap(), Je = new WeakMap(), Ze = new WeakMap(), _e = new WeakMap(), tt = new WeakMap(), di = new WeakMap(), Jn = new WeakMap(), Zn = new WeakSet(), Do = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
}, pi = new WeakSet(), ia = function() {
  const t = C(this, Zn, Do).call(this);
  return $(this, tt, document.createElement("div")), p(this, tt).style.position = this.options.strategy, p(this, tt).style.width = `${t}px`, p(this, tt).style.height = `${t}px`, p(this, tt).style.transform = "rotate(45deg)", p(this, tt);
}, mi = new WeakSet(), oa = function() {
  var i;
  const t = pe.TOOLTIP_CLASS;
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
  if (this.options.arrow && (s == null || s.append(C(this, pi, ia).call(this))), !s)
    throw new Error("Tooltip: Cannot find tooltip element");
  return s.style.width = "max-content", s.style.position = "absolute", s.style.top = "0", s.style.left = "0", document.body.appendChild(s), $(this, _e, s), s;
}, gi = new WeakSet(), ra = function() {
  var r;
  const t = C(this, Zn, Do).call(this), { strategy: s, placement: i } = this.options, o = {
    middleware: [xf(t), vf()],
    strategy: s,
    placement: i
  };
  return this.options.arrow && p(this, tt) && ((r = o.middleware) == null || r.push(gf({ element: p(this, tt) }))), o;
}, yi = new WeakSet(), la = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, _i = new WeakSet(), ca = function(t) {
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
}, bi = new WeakSet(), aa = function() {
  const t = C(this, gi, ra).call(this), s = C(this, wi, ha).call(this);
  $(this, Jn, kf(s, this.tooltip, () => {
    $f(s, this.tooltip, t).then(({ x: i, y: o, middlewareData: r, placement: l }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${o}px`
      });
      const a = l.split("-")[0], u = C(this, yi, la).call(this, a);
      if (r.arrow && p(this, tt)) {
        const { x: c, y: h } = r.arrow;
        Object.assign(p(this, tt).style, {
          left: c != null ? `${c}px` : "",
          top: h != null ? `${h}px` : "",
          [u]: `${-p(this, tt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...C(this, _i, ca).call(this, a)
        });
      }
    });
  }));
}, wi = new WeakSet(), ha = function() {
  return p(this, Je) || $(this, Je, {
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
  }), p(this, Je);
}, Qe = new WeakMap(), vi = new WeakSet(), ua = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", p(this, Qe)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), $(this, Xe, !0);
}, v(ht, "NAME", "tooltip"), v(ht, "TOOLTIP_CLASS", "tooltip"), v(ht, "CLASS_SHOW", "show"), v(ht, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), v(ht, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(e) {
  var s;
  const n = e.target, t = (s = n.closest) == null ? void 0 : s.call(n, ht.MENU_SELECTOR);
  if (t) {
    const i = ht.ensure(t);
    i.options.trigger === "click" && i.toggle();
  } else
    ht.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const n = e.target, t = (i = n.closest) == null ? void 0 : i.call(n, ht.MENU_SELECTOR);
  if (!t)
    return;
  const s = ht.ensure(t);
  s.isHover && s.show();
});
var xi, fa, Si, da, Ei, pa, Ci, ma;
class Rf extends At {
  constructor() {
    super(...arguments);
    w(this, xi);
    w(this, Si);
    w(this, Ei);
    w(this, Ci);
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
    this.emit("before", { event: t, element: s, options: i }, !1), ((o = i.beforeSubmit) == null ? void 0 : o.call(i, t, s, i)) !== !1 && (this.disable(), C(this, Si, da).call(this, C(this, xi, fa).call(this)).finally(() => {
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
xi = new WeakSet(), fa = function() {
  const { element: t, options: s } = this;
  let i = new FormData(t), { submitEmptySelectValue: o = "" } = s;
  o !== !1 && (typeof o != "boolean" && (o = ""), R(t).find("select").each((l, a) => {
    const c = R(a).attr("name");
    i.has(c) || i.append(c, typeof o == "object" ? o[c] : o);
  }));
  const { beforeSend: r } = s;
  if (r) {
    const l = r(i);
    l instanceof FormData && (i = l);
  }
  return this.emit("send", { formData: i }, !1), i;
}, Si = new WeakSet(), da = async function(t) {
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
  o ? (this.emit("error", { error: o, responseText: r }, !1), (a = i.onError) == null || a.call(i, o, r)) : C(this, Ci, ma).call(this, l), this.emit("complete", { result: l, error: o }, !1), (u = i.onComplete) == null || u.call(i, l, o);
}, Ei = new WeakSet(), pa = function(t) {
  var i;
  let s;
  Object.entries(t).forEach(([o, r]) => {
    Array.isArray(r) && (r = r.join(""));
    const l = document.getElementById(o), a = l ? R(l) : R(this.element).find(`[name="${o}"]`);
    if (!a.length)
      return;
    a.addClass("has-error");
    const u = a.closest(".form-group,.form-batch-control");
    if (u.length) {
      const c = document.getElementById(`${o}Tip`);
      let h = c ? R(c) : null;
      h || (h = R(`<div class="form-tip ajax-form-tip text-danger" id="${o}Tip"></div>`).appendTo(u)), h.empty().text(r);
    }
    s || (s = a);
  }), s && ((i = s[0]) == null || i.focus());
}, Ci = new WeakSet(), ma = function(t) {
  var a, u;
  const { options: s } = this, { message: i } = t;
  if (t.result === "success") {
    if (this.emit("success", { result: t }, !1), ((a = s.onSuccess) == null ? void 0 : a.call(s, t)) === !1)
      return;
    typeof i == "string" && i.length && R(document).trigger("zui.messager.show", { content: i, type: "success" });
  } else {
    if (this.emit("fail", { result: t }, !1), ((u = s.onFail) == null ? void 0 : u.call(s, t)) === !1)
      return;
    i && (typeof i == "string" && i.length ? R(document).trigger("zui.messager.show", { content: i, type: "danger" }) : typeof i == "object" && C(this, Ei, pa).call(this, i));
  }
  const o = t.closeModal || s.closeModal;
  o && R(this.element).trigger("zui.modal.hide", { target: typeof o == "string" ? o : void 0 });
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
  l && R(this.element).trigger("zui.locate", l);
}, v(Rf, "NAME", "ajaxform");
var Qn, ki, $i, Ri;
class Tf extends B {
  constructor(t) {
    super(t);
    w(this, Qn, le());
    w(this, ki, (t) => {
      t.stopPropagation(), nt.show({
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
    w(this, $i, (t) => {
      var o, r, l;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (t.clientY - i.top > 48) {
        t.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (o = t.dataTransfer) == null || o.setData("application/id", this.props.block.id), (l = (r = this.props).onDragStart) == null || l.call(r, t);
    });
    w(this, Ri, (t) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, t);
    });
    this.state = { content: /* @__PURE__ */ _("div", { class: "dashboard-block-body", children: t.block.content }) };
  }
  get element() {
    return p(this, Qn).current;
  }
  componentDidMount() {
    this.load(), R(this.element).on("load.zui.dashboard", this.load.bind(this));
  }
  componentWillUnmount() {
    R(this.element).off("load.zui.dashboard");
  }
  load() {
    const { block: t } = this.props;
    let s = t.fetch;
    if (!s || this.state.loading)
      return;
    typeof s == "string" ? s = { url: s } : typeof s == "function" && (s = s(t.id, t));
    const { url: i, ...o } = s;
    this.setState({ loading: !0 }, () => {
      fetch(rt(i, t), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...o
      }).then((r) => {
        r.ok ? r.text().then((l) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ _(jc, { class: "dashboard-block-body", html: l, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ _("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          r.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: t, top: s, width: i, height: o, style: r, block: l } = this.props, { title: a, menu: u, id: c } = l, { loading: h, content: d, dragging: f } = this.state;
    return /* @__PURE__ */ _("div", { class: "dashboard-block-cell", style: { left: t, top: s, width: i, height: o, ...r }, children: /* @__PURE__ */ _(
      "div",
      {
        class: `dashboard-block load-indicator${h ? " loading" : ""}${u ? " has-more-menu" : ""}${f ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: p(this, $i),
        onDragEnd: p(this, Ri),
        "data-id": c,
        ref: p(this, Qn),
        children: [
          /* @__PURE__ */ _("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ _("div", { class: "dashboard-block-title", children: a }),
            u ? /* @__PURE__ */ _("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ _("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: p(this, ki), children: /* @__PURE__ */ _("div", { class: "more-vert" }) }) }) : null
          ] }),
          d
        ]
      }
    ) });
  }
}
Qn = new WeakMap(), ki = new WeakMap(), $i = new WeakMap(), Ri = new WeakMap();
var ee, St, Ti, ga, Ai, ya, Li, _a, Ni, ba, ts, Po, es, Oo, Mi, wa, Di, Pi, ns, Io;
let Af = (ee = class extends B {
  constructor() {
    super(...arguments);
    w(this, Ti);
    w(this, Ai);
    w(this, Li);
    w(this, Ni);
    w(this, ts);
    w(this, es);
    w(this, Mi);
    w(this, St, /* @__PURE__ */ new Map());
    v(this, "state", {});
    w(this, Di, (t) => {
      var i;
      const s = (i = t.dataTransfer) == null ? void 0 : i.getData("application/id");
      s !== void 0 && (this.setState({ dragging: s }), console.log("handleBlockDragStart", t));
    });
    w(this, Pi, (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    });
  }
  render() {
    const { blocks: t, height: s } = C(this, Li, _a).call(this), { cellHeight: i, grid: o } = this.props, r = p(this, St);
    return console.log("Dashboard.render", { blocks: t, map: r }, this), /* @__PURE__ */ _("div", { class: "dashboard", children: /* @__PURE__ */ _("div", { class: "dashboard-blocks", style: { height: s * i }, children: t.map((l, a) => {
      const { id: u } = l, [c, h, d, f] = r.get(u) || [0, 0, l.width, l.height];
      return /* @__PURE__ */ _(
        Tf,
        {
          id: u,
          index: a,
          left: `${100 * c / o}%`,
          top: i * h,
          height: i * f,
          width: `${100 * d / o}%`,
          block: l,
          moreMenu: !0,
          onDragStart: p(this, Di),
          onDragEnd: p(this, Pi)
        },
        l.id
      );
    }) }) });
  }
}, St = new WeakMap(), Ti = new WeakSet(), ga = function(t) {
  const { blockDefaultSize: s, blockSizeMap: i } = this.props;
  return t = t ?? s, typeof t == "string" && (t = i[t]), t = t || s, Array.isArray(t) || (t = [t.width, t.height]), t;
}, Ai = new WeakSet(), ya = function() {
  const { blocks: t, blockFetch: s, blockMenu: i } = this.props;
  return t.map((r) => {
    const {
      id: l,
      size: a,
      left: u = -1,
      top: c = -1,
      fetch: h = s,
      menu: d = i,
      ...f
    } = r, [m, g] = C(this, Ti, ga).call(this, a);
    return {
      id: `${l}`,
      width: m,
      height: g,
      left: u,
      top: c,
      fetch: h,
      menu: d,
      ...f
    };
  });
}, Li = new WeakSet(), _a = function() {
  p(this, St).clear();
  let t = 0;
  const s = C(this, Ai, ya).call(this);
  return s.forEach((i) => {
    C(this, Ni, ba).call(this, i);
    const [, o, , r] = p(this, St).get(i.id);
    t = Math.max(t, o + r);
  }), { blocks: s, height: t };
}, Ni = new WeakSet(), ba = function(t) {
  const s = p(this, St), { id: i, left: o, top: r, width: l, height: a } = t;
  if (o < 0 || r < 0) {
    const [u, c] = C(this, Mi, wa).call(this, l, a, o, r);
    s.set(i, [u, c, l, a]);
  } else
    C(this, es, Oo).call(this, i, [o, r, l, a]);
}, ts = new WeakSet(), Po = function(t) {
  var i;
  const { dragging: s } = this.state;
  for (const [o, r] of p(this, St).entries())
    if (o !== s && C(i = ee, ns, Io).call(i, r, t))
      return !1;
  return !0;
}, es = new WeakSet(), Oo = function(t, s) {
  var i;
  p(this, St).set(t, s);
  for (const [o, r] of p(this, St).entries())
    o !== t && C(i = ee, ns, Io).call(i, r, s) && (r[1] = s[1] + s[3], C(this, es, Oo).call(this, o, r));
}, Mi = new WeakSet(), wa = function(t, s, i, o) {
  if (i >= 0 && o >= 0) {
    if (C(this, ts, Po).call(this, [i, o, t, s]))
      return [i, o];
    o = -1;
  }
  let r = i < 0 ? 0 : i, l = o < 0 ? 0 : o, a = !1;
  const u = this.props.grid;
  for (; !a; ) {
    if (C(this, ts, Po).call(this, [r, l, t, s])) {
      a = !0;
      break;
    }
    i < 0 ? (r += 1, r + t > u && (r = 0, l += 1)) : l += 1;
  }
  return [r, l];
}, Di = new WeakMap(), Pi = new WeakMap(), ns = new WeakSet(), Io = function([t, s, i, o], [r, l, a, u]) {
  return !(t + i <= r || r + a <= t || s + o <= l || l + u <= s);
}, w(ee, ns), v(ee, "defaultProps", {
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
}), ee);
class fl extends X {
}
v(fl, "NAME", "Dashboard"), v(fl, "Component", Af);
var be, we;
class dl extends B {
  constructor(t) {
    super(t);
    w(this, be, 0);
    w(this, we, null);
    v(this, "_handleWheel", (t) => {
      const { wheelContainer: s } = this.props, i = t.target;
      if (!(!i || !s) && (typeof s == "string" && i.closest(s) || typeof s == "object")) {
        const o = (this.props.type === "horz" ? t.deltaX : t.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && t.preventDefault();
      }
    });
    v(this, "_handleMouseMove", (t) => {
      const { dragStart: s } = this.state;
      s && (p(this, be) && cancelAnimationFrame(p(this, be)), $(this, be, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + i * this.props.scrollSize / this.props.clientSize), $(this, be, 0);
      })), t.preventDefault());
    });
    v(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    v(this, "_handleMouseDown", (t) => {
      this.state.dragStart || this.setState({ dragStart: { x: t.clientX, y: t.clientY, offset: this.scrollPos } }), t.stopPropagation();
    });
    v(this, "_handleClick", (t) => {
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
    t && ($(this, we, typeof t == "string" ? document : t.current), p(this, we).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), p(this, we) && p(this, we).removeEventListener("wheel", this._handleWheel);
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
    return s === "horz" ? (m.height = i, m.width = t, g.width = this.barSize, g.left = Math.round(Math.min(h, d) * (t - g.width) / h)) : (m.width = i, m.height = t, g.height = this.barSize, g.top = Math.round(Math.min(h, d) * (t - g.height) / h)), /* @__PURE__ */ _(
      "div",
      {
        className: D("scrollbar", o, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": f
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
be = new WeakMap(), we = new WeakMap();
function Lf(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function va({ col: e, className: n, height: t, row: s, onRenderCell: i, style: o, outerStyle: r, children: l, outerClass: a, ...u }) {
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
  }, m = ["dtable-cell", a, n, e.setting.className, {
    "has-border-left": d === !0 || d === "left",
    "has-border-right": d === !0 || d === "right"
  }], g = ["dtable-cell-content", e.setting.cellClass], y = (I = s.data) == null ? void 0 : I[e.name], b = [l ?? y ?? ""], x = i ? i(b, { row: s, col: e, value: y }, dt) : b, S = [], T = [], A = {}, L = {};
  let M = "div";
  x == null || x.forEach((k) => {
    if (typeof k == "object" && k && !J(k) && ("html" in k || "className" in k || "style" in k || "attrs" in k || "children" in k || "tagName" in k)) {
      const H = k.outer ? S : T;
      k.html ? H.push(/* @__PURE__ */ _("div", { className: D("dtable-cell-html", k.className), style: k.style, dangerouslySetInnerHTML: { __html: k.html }, ...k.attrs ?? {} })) : (k.style && Object.assign(k.outer ? c : f, k.style), k.className && (k.outer ? m : g).push(k.className), k.children && H.push(k.children), k.attrs && Object.assign(k.outer ? A : L, k.attrs)), k.tagName && !k.outer && (M = k.tagName);
    } else
      T.push(k);
  });
  const N = M;
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
        T.length > 0 && /* @__PURE__ */ _(N, { className: D(g), style: f, ...L, children: T }),
        S
      ]
    }
  );
}
function po({ row: e, className: n, top: t = 0, left: s = 0, width: i, height: o, cols: r, CellComponent: l = va, onRenderCell: a }) {
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
function xa({
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
  CellComponent: d = va,
  onRenderCell: f,
  style: m,
  ...g
}) {
  let y = null;
  i != null && i.length && (y = /* @__PURE__ */ _(
    po,
    {
      className: "dtable-fixed-left",
      cols: i,
      width: l,
      row: e,
      CellComponent: d,
      onRenderCell: f
    }
  ));
  let b = null;
  r != null && r.length && (b = /* @__PURE__ */ _(
    po,
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
  let x = null;
  o != null && o.length && (x = /* @__PURE__ */ _(
    po,
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
function Nf({ height: e, onRenderRow: n, ...t }) {
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
  return /* @__PURE__ */ _("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ _(xa, { ...s }) });
}
function Mf({
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
    }, h = l == null ? void 0 : l({ props: c, row: u }, dt);
    return h && Object.assign(c, h), /* @__PURE__ */ _(xa, { ...c });
  }) });
}
const Fs = /* @__PURE__ */ new Map(), Us = [];
function Sa(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && Fs.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Fs.set(t, e), n != null && n.buildIn && !Us.includes(t) && Us.push(t);
}
function $e(e, n) {
  Sa(e, n);
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
function Ea(e) {
  return Fs.delete(e);
}
function Df(e) {
  if (typeof e == "string") {
    const n = Fs.get(e);
    return n || console.warn(`DTable: Cannot found plugin "${e}"`), n;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Ca(e, n, t) {
  return n.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = Df(s);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && Ca(e, i.plugins, t), e.push(i), t.add(i.name)));
  }), e;
}
function Pf(e = [], n = !0) {
  return n && Us.length && e.unshift(...Us), e != null && e.length ? Ca([], e, /* @__PURE__ */ new Set()) : [];
}
function pl() {
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
var bs, ve, tn, Zt, Et, Qt, Y, mt, Ct, en, ss, is, Wt, nn, sn, Oi, ka, Ii, $a, Hi, Ra, Wi, Ta, os, Ho, ji, Bi, rs, ls, zi, Fi, Ui, Aa, Vi, La, qi, Na;
let Of = (bs = class extends B {
  constructor(t) {
    super(t);
    w(this, Oi);
    w(this, Ii);
    w(this, Hi);
    w(this, Wi);
    w(this, os);
    w(this, Ui);
    w(this, Vi);
    w(this, qi);
    v(this, "ref", le());
    w(this, ve, 0);
    w(this, tn, void 0);
    w(this, Zt, !1);
    w(this, Et, void 0);
    w(this, Qt, void 0);
    w(this, Y, []);
    w(this, mt, void 0);
    w(this, Ct, /* @__PURE__ */ new Map());
    w(this, en, {});
    w(this, ss, void 0);
    w(this, is, []);
    v(this, "updateLayout", () => {
      p(this, ve) && cancelAnimationFrame(p(this, ve)), $(this, ve, requestAnimationFrame(() => {
        $(this, mt, void 0), this.forceUpdate(), $(this, ve, 0);
      }));
    });
    w(this, Wt, (t, s) => {
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
    w(this, nn, (t) => {
      p(this, Wt).call(this, t, `window_${t.type}`);
    });
    w(this, sn, (t) => {
      p(this, Wt).call(this, t, `document_${t.type}`);
    });
    w(this, ji, (t, s) => {
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
    w(this, Bi, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), p(this, Y).forEach((i) => {
      i.onRenderHeaderRow && (t.props = i.onRenderHeaderRow.call(this, t, s));
    }), t.props));
    w(this, rs, (t, s, i) => {
      const { row: o, col: r } = s;
      s.value = this.getCellValue(o, r), t[0] = s.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return r.setting[l] && (t = r.setting[l].call(this, t, s, i)), this.options[l] && (t = this.options[l].call(this, t, s, i)), p(this, Y).forEach((a) => {
        a[l] && (t = a[l].call(this, t, s, i));
      }), t;
    });
    w(this, ls, (t, s) => {
      s === "horz" ? this.scroll({ scrollLeft: t }) : this.scroll({ scrollTop: t });
    });
    w(this, zi, (t) => {
      var l, a, u, c, h;
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
            if (((u = m.onCellClick) == null ? void 0 : u.call(this, t, { colName: o, rowID: i, rowInfo: f, element: r, rowElement: d })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, t, { rowID: i, rowInfo: f, element: d })) === !0)
          return;
        for (const m of p(this, Y))
          if (((h = m.onRowClick) == null ? void 0 : h.call(this, t, { rowID: i, rowInfo: f, element: d })) === !0)
            return;
      }
    });
    w(this, Fi, (t) => {
      const s = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    });
    $(this, tn, t.id ?? `dtable-${us(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, $(this, Qt, Object.freeze(Pf(t.plugins))), p(this, Qt).forEach((s) => {
      var l;
      const { methods: i, data: o, state: r } = s;
      i && Object.entries(i).forEach(([a, u]) => {
        typeof u == "function" && Object.assign(this, { [a]: u.bind(this) });
      }), o && Object.assign(p(this, en), o.call(this)), r && Object.assign(this.state, r.call(this)), (l = s.onCreate) == null || l.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = p(this, mt)) == null ? void 0 : t.options) || p(this, Et) || pl();
  }
  get plugins() {
    return p(this, Y);
  }
  get layout() {
    return p(this, mt);
  }
  get id() {
    return p(this, tn);
  }
  get data() {
    return p(this, en);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    $(this, Et, void 0);
  }
  componentDidMount() {
    if (p(this, Zt) ? this.forceUpdate() : C(this, os, Ho).call(this), p(this, Y).forEach((t) => {
      let { events: s } = t;
      s && (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([i, o]) => {
        o && this.on(i, o);
      }));
    }), this.on("click", p(this, zi)), this.on("keydown", p(this, Fi)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const s = new ResizeObserver(this.updateLayout);
          s.observe(t), $(this, ss, s);
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
    p(this, Zt) ? C(this, os, Ho).call(this) : p(this, Y).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    var s;
    (s = p(this, ss)) == null || s.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const i of p(this, Ct).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), p(this, nn)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), p(this, sn)) : t.removeEventListener(i, p(this, Wt));
    p(this, Y).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), p(this, Qt).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), $(this, en, {}), p(this, Ct).clear();
  }
  on(t, s, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = p(this, Ct).get(t);
    o ? o.push(s) : (p(this, Ct).set(t, [s]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), p(this, nn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), p(this, sn)) : (r = this.ref.current) == null || r.addEventListener(t, p(this, Wt)));
  }
  off(t, s, i) {
    var l;
    i && (t = `${i}_${t}`);
    const o = p(this, Ct).get(t);
    if (!o)
      return;
    const r = o.indexOf(s);
    r >= 0 && o.splice(r, 1), o.length || (p(this, Ct).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), p(this, nn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), p(this, sn)) : (l = this.ref.current) == null || l.removeEventListener(t, p(this, Wt)));
  }
  emitCustomEvent(t, s) {
    p(this, Wt).call(this, s instanceof Event ? s : new CustomEvent(t, { detail: s }), t);
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
    if (!p(this, Et))
      return;
    typeof t == "function" && (s = t, t = {});
    const { dirtyType: i, state: o } = t;
    if (i === "layout")
      $(this, mt, void 0);
    else if (i === "options") {
      if ($(this, Et, void 0), !p(this, mt))
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
    return ie(p(this, is), t, s, i, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((s) => s.name === t);
  }
  render() {
    const t = C(this, qi, Na).call(this), { className: s, rowHover: i, colHover: o, cellHover: r, bordered: l, striped: a, scrollbarHover: u } = this.options, c = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, h = ["dtable", s, {
      "dtable-hover-row": i,
      "dtable-hover-col": o,
      "dtable-hover-cell": r,
      "dtable-bordered": l,
      "dtable-striped": a,
      "dtable-scrolled-down": ((t == null ? void 0 : t.scrollTop) ?? 0) > 0,
      "scrollbar-hover": u
    }], d = [];
    return t && p(this, Y).forEach((f) => {
      var g;
      const m = (g = f.onRender) == null ? void 0 : g.call(this, t);
      m && (m.style && Object.assign(c, m.style), m.className && h.push(m.className), m.children && d.push(m.children));
    }), /* @__PURE__ */ _(
      "div",
      {
        id: p(this, tn),
        className: D(h),
        style: c,
        ref: this.ref,
        tabIndex: -1,
        children: [
          t && C(this, Oi, ka).call(this, t),
          t && C(this, Ii, $a).call(this, t),
          t && C(this, Hi, Ra).call(this, t),
          t && C(this, Wi, Ta).call(this, t)
        ]
      }
    );
  }
}, ve = new WeakMap(), tn = new WeakMap(), Zt = new WeakMap(), Et = new WeakMap(), Qt = new WeakMap(), Y = new WeakMap(), mt = new WeakMap(), Ct = new WeakMap(), en = new WeakMap(), ss = new WeakMap(), is = new WeakMap(), Wt = new WeakMap(), nn = new WeakMap(), sn = new WeakMap(), Oi = new WeakSet(), ka = function(t) {
  const { header: s, colsInfo: i, headerHeight: o, scrollLeft: r } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ _(
      Nf,
      {
        scrollLeft: r,
        height: o,
        onRenderCell: p(this, rs),
        onRenderRow: p(this, Bi),
        ...i
      }
    );
  const l = Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ _(
    ko,
    {
      className: "dtable-header",
      style: { height: o },
      renders: l,
      generateArgs: [t],
      generatorThis: this
    }
  );
}, Ii = new WeakSet(), $a = function(t) {
  const { headerHeight: s, rowsHeight: i, visibleRows: o, rowHeight: r, colsInfo: l, scrollLeft: a, scrollTop: u } = t;
  return /* @__PURE__ */ _(
    Mf,
    {
      top: s,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: a,
      scrollTop: u,
      onRenderCell: p(this, rs),
      onRenderRow: p(this, ji),
      ...l
    }
  );
}, Hi = new WeakSet(), Ra = function(t) {
  const { footer: s } = t;
  if (!s)
    return null;
  const i = typeof s == "function" ? s.call(this, t) : Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ _(
    ko,
    {
      className: "dtable-footer",
      style: { height: t.footerHeight, top: t.rowsHeight + t.headerHeight },
      renders: i,
      generateArgs: [t],
      generatorThis: this,
      generators: t.footerGenerators
    }
  );
}, Wi = new WeakSet(), Ta = function(t) {
  const s = [], { scrollLeft: i, colsInfo: o, scrollTop: r, rowsHeight: l, rowsHeightTotal: a, footerHeight: u } = t, { scrollColsWidth: c, scrollWidth: h } = o, { scrollbarSize: d = 12, horzScrollbarPos: f } = this.options;
  return c > h && s.push(
    /* @__PURE__ */ _(
      dl,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: c,
        clientSize: h,
        onScroll: p(this, ls),
        left: o.fixedLeftWidth,
        bottom: (f === "inside" ? 0 : -d) + u,
        size: d,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), a > l && s.push(
    /* @__PURE__ */ _(
      dl,
      {
        type: "vert",
        scrollPos: r,
        scrollSize: a,
        clientSize: l,
        onScroll: p(this, ls),
        right: 0,
        size: d,
        top: t.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), s.length ? s : null;
}, os = new WeakSet(), Ho = function() {
  var t;
  $(this, Zt, !1), (t = this.options.afterRender) == null || t.call(this), p(this, Y).forEach((s) => {
    var i;
    return (i = s.afterRender) == null ? void 0 : i.call(this);
  });
}, ji = new WeakMap(), Bi = new WeakMap(), rs = new WeakMap(), ls = new WeakMap(), zi = new WeakMap(), Fi = new WeakMap(), Ui = new WeakSet(), Aa = function() {
  if (p(this, Et))
    return !1;
  const s = { ...pl(), ...p(this, Qt).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return $(this, Et, s), $(this, Y, p(this, Qt).reduce((i, o) => {
    const { when: r, options: l } = o;
    return (!r || r(s)) && (i.push(o), l && Object.assign(s, typeof l == "function" ? l.call(this, s) : l)), i;
  }, [])), $(this, is, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Vi = new WeakSet(), La = function() {
  var fr, dr;
  const { plugins: t } = this;
  let s = p(this, Et);
  const i = {
    flex: /* @__PURE__ */ _("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ _("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((P) => {
    var ot;
    const F = (ot = P.beforeLayout) == null ? void 0 : ot.call(this, s);
    F && (s = { ...s, ...F }), Object.assign(i, P.footer);
  });
  let o = s.width, r = 0;
  if (typeof o == "function" && (o = o.call(this)), o === "100%") {
    const { parent: P } = this;
    if (P)
      r = P.clientWidth;
    else {
      r = 0, $(this, Zt, !0);
      return;
    }
  } else
    o !== "auto" && (r = o ?? 0);
  const { defaultColWidth: l, minColWidth: a, maxColWidth: u } = s, c = [], h = [], d = [], f = {}, m = [], g = [];
  let y = 0, b = 0, x = 0;
  s.cols.forEach((P) => {
    if (P.hidden)
      return;
    const F = P.type || "", ot = {
      fixed: !1,
      flex: !1,
      width: l,
      minWidth: a,
      maxWidth: u,
      ...P,
      type: F
    }, W = {
      name: ot.name,
      type: F,
      setting: ot,
      flex: 0,
      left: 0,
      width: ot.width || 0,
      realWidth: 0,
      visible: !0,
      index: m.length
    };
    t.forEach((pr) => {
      var mr, gr;
      const ps = (mr = pr.colTypes) == null ? void 0 : mr[F];
      if (ps) {
        const yr = typeof ps == "function" ? ps(W) : ps;
        yr && Object.assign(ot, yr, P);
      }
      (gr = pr.onAddCol) == null || gr.call(this, W);
    });
    const { fixed: Te, flex: Ae, width: cn = l } = ot;
    W.flex = Te ? 0 : Ae === !0 ? 1 : typeof Ae == "number" ? Ae : 0, W.width = Lf(cn < 1 ? Math.round(cn * r) : cn, ot.minWidth, ot.maxWidth), W.realWidth = W.realWidth || W.width, Te === "left" ? (W.left = y, y += W.width, c.push(W)) : Te === "right" ? (W.left = b, b += W.width, h.push(W)) : (W.left = x, x += W.width, d.push(W)), W.flex && g.push(W), m.push(W), f[W.name] = W;
  });
  const S = y + x + b;
  o === "auto" && (r = S);
  const { data: T, rowKey: A = "id", rowHeight: L } = s, M = [], N = (P, F, ot) => {
    var Te, Ae;
    const W = { data: ot ?? { [A]: P }, id: P, index: M.length, top: 0 };
    if (ot || (W.lazy = !0), M.push(W), ((Te = s.onAddRow) == null ? void 0 : Te.call(this, W, F)) !== !1) {
      for (const cn of t)
        if (((Ae = cn.onAddRow) == null ? void 0 : Ae.call(this, W, F)) === !1)
          return;
    }
  };
  if (typeof T == "number")
    for (let P = 0; P < T; P++)
      N(`${P}`, P);
  else
    Array.isArray(T) && T.forEach((P, F) => {
      typeof P == "object" ? N(`${P[A] ?? ""}`, F, P) : N(`${P ?? ""}`, F);
    });
  let I = M;
  const k = {};
  if (s.onAddRows) {
    const P = s.onAddRows.call(this, I);
    P && (I = P);
  }
  for (const P of t) {
    const F = (fr = P.onAddRows) == null ? void 0 : fr.call(this, I);
    F && (I = F);
  }
  I.forEach((P, F) => {
    k[P.id] = P, P.index = F, P.top = P.index * L;
  });
  const { header: H, footer: q } = s, it = H ? s.headerHeight || L : 0, U = q ? s.footerHeight || L : 0;
  let O = s.height, V = 0;
  const _t = I.length * L, he = it + U + _t;
  if (typeof O == "function" && (O = O.call(this, he)), O === "auto")
    V = he;
  else if (typeof O == "object")
    V = Math.min(O.max, Math.max(O.min, he));
  else if (O === "100%") {
    const { parent: P } = this;
    if (P)
      V = P.clientHeight;
    else {
      V = 0, $(this, Zt, !0);
      return;
    }
  } else
    V = O;
  const ue = V - it - U, fe = r - y - b, Mt = {
    options: s,
    allRows: M,
    width: r,
    height: V,
    rows: I,
    rowsMap: k,
    rowHeight: L,
    rowsHeight: ue,
    rowsHeightTotal: _t,
    header: H,
    footer: q,
    footerGenerators: i,
    headerHeight: it,
    footerHeight: U,
    colsMap: f,
    colsList: m,
    flexCols: g,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: h,
      scrollCols: d,
      fixedLeftWidth: y,
      scrollWidth: fe,
      scrollColsWidth: x,
      fixedRightWidth: b
    }
  }, Re = (dr = s.onLayout) == null ? void 0 : dr.call(this, Mt);
  Re && Object.assign(Mt, Re), t.forEach((P) => {
    if (P.onLayout) {
      const F = P.onLayout.call(this, Mt);
      F && Object.assign(Mt, F);
    }
  }), $(this, mt, Mt);
}, qi = new WeakSet(), Na = function() {
  (C(this, Ui, Aa).call(this) || !p(this, mt)) && C(this, Vi, La).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: s } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: o, scrollWidth: r, scrollColsWidth: l } } = t;
  if (i.length) {
    const S = r - l;
    if (S > 0) {
      const T = i.reduce((L, M) => L + M.flex, 0);
      let A = 0;
      i.forEach((L) => {
        const M = Math.min(S - A, Math.ceil(S * (L.flex / T)));
        L.realWidth = M + L.width, A += L.realWidth;
      });
    } else
      i.forEach((T) => {
        T.realWidth = T.width;
      });
  }
  s = Math.min(Math.max(0, l - r), s);
  let a = 0;
  o.forEach((S) => {
    S.left = a, a += S.realWidth, S.visible = S.left + S.realWidth >= s && S.left <= s + r;
  });
  const { rowsHeightTotal: u, rowsHeight: c, rows: h, rowHeight: d } = t, f = Math.min(Math.max(0, u - c), this.state.scrollTop), m = Math.floor(f / d), g = f + c, y = Math.min(h.length, Math.ceil(g / d)), b = [], { rowDataGetter: x } = this.options;
  for (let S = m; S < y; S++) {
    const T = h[S];
    T.lazy && x && (T.data = x([T.id])[0], T.lazy = !1), b.push(T);
  }
  return t.visibleRows = b, t.scrollTop = f, t.scrollLeft = s, t;
}, v(bs, "addPlugin", Sa), v(bs, "removePlugin", Ea), bs);
function ml(e, n) {
  n !== void 0 ? e.data.hoverCol = n : n = e.data.hoverCol;
  const { current: t } = e.ref;
  if (!t)
    return;
  const s = "dtable-col-hover";
  t.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof n == "string" && n.length && t.querySelectorAll(`.dtable-cell[data-col="${n}"]`).forEach((i) => i.classList.add(s));
}
const If = {
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
      ml(this, s);
    },
    mouseleave() {
      ml(this, !1);
    }
  }
}, Hf = $e(If, { buildIn: !0 });
function Wf(e, n) {
  var r, l;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: i } = this.options, o = (a, u) => {
    i && !i.call(this, a) || !!t[a] === u || (u ? t[a] = !0 : delete t[a], s[a] = u);
  };
  if (e === void 0 ? (n === void 0 && (n = !Ma.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: a }) => {
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
function jf(e) {
  return this.state.checkedRows[e] ?? !1;
}
function Ma() {
  var t, s;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((i, o) => i + (n.call(this, o.id) ? 1 : 0), 0)) : e === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function Bf() {
  return Object.keys(this.state.checkedRows);
}
function zf(e) {
  const { checkable: n } = this.options;
  e === void 0 && (e = !n), n !== e && this.setState({ forceCheckable: e });
}
const Ff = {
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
    toggleCheckRows: Wf,
    isRowChecked: jf,
    isAllRowChecked: Ma,
    getChecks: Bf,
    toggleCheckable: zf
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
}, Uf = $e(Ff);
var Da = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Da || {});
function Wo(e) {
  const n = this.data.nestedMap.get(e);
  if (!n || n.state !== "")
    return n ?? { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, s = n.children && t && t[e];
  let i = !1, { parent: o } = n;
  for (; o; ) {
    const r = Wo.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return n.state = i ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? Wo.call(this, n.parent).level + 1 : 0, n;
}
function Vf(e, n) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !Pa.call(this)), n) {
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
function Pa() {
  const e = this.data.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function Oa(e, n = 0, t, s = 0) {
  var i;
  t || (t = [...e.keys()]);
  for (const o of t) {
    const r = e.get(o);
    r && (r.level === s && (r.order = n++), (i = r.children) != null && i.length && (n = Oa(e, n, r.children, s + 1)));
  }
  return n;
}
function Ia(e, n, t, s) {
  const i = e.getNestedRowInfo(n);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = t, Ia(e, o, t, s);
  }), i;
}
function Ha(e, n, t, s, i) {
  var l;
  const o = e.getNestedRowInfo(n);
  if (!o || o.state === "")
    return;
  ((l = o.children) == null ? void 0 : l.every((a) => {
    const u = !!(s[a] !== void 0 ? s[a] : i[a]);
    return t === u;
  })) && (s[n] = t), o.parent && Ha(e, o.parent, t, s, i);
}
const qf = {
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
        const r = Ia(this, i, o, s);
        r != null && r.parent && Ha(this, r.parent, o, s, t);
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
    toggleRow: Vf,
    isAllCollapsed: Pa,
    getNestedRowInfo: Wo
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
    ), Oa(this.data.nestedMap), e.sort((n, t) => {
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
}, Gf = $e(qf);
function Wa(e, n, t, s) {
  if (!e)
    return t;
  typeof e == "function" && (e = e(n)), typeof e == "string" && (e = { url: e });
  const { url: i, ...o } = e;
  return /* @__PURE__ */ _("a", { href: rt(i, n.row.data), ...s, ...o, children: t });
}
function cr(e, n, t) {
  var s;
  if (e != null)
    return t = t ?? ((s = n.row.data) == null ? void 0 : s[n.col.name]), typeof e == "function" ? e(t, n) : rt(e, t);
}
function ja(e, n, t, s) {
  var i;
  return t = t ?? ((i = n.row.data) == null ? void 0 : i[n.col.name]), e === !1 ? t : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(t, n)), Lo(t, e, s));
}
function Ba(e, n) {
  const { link: t } = n.col.setting, s = Wa(t, n, e[0]);
  return s && (e[0] = s), e;
}
function za(e, n) {
  const { format: t } = n.col.setting;
  return t && (e[0] = cr(t, n, e[0])), e;
}
function Fa(e, n) {
  const { map: t } = n.col.setting;
  return typeof t == "function" ? e[0] = t(e[0], n) : typeof t == "object" && t && (e[0] = t[e[0]] ?? e[0]), e;
}
function mn(e, n, t = "[yyyy-]MM-dd hh:mm") {
  const { format: s = t, invalidDate: i } = n.col.setting;
  return e[0] = ja(s, n, e[0], i), e;
}
function jo(e, n, t = !1) {
  const { html: s = t } = n.col.setting;
  if (s === !1)
    return e;
  const i = e[0], o = s === !0 ? i : cr(s, n, i);
  return e[0] = {
    html: o
  }, e;
}
const Yf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, n) {
        return jo(e, n, !0);
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
        return mn(e, n, "[yyyy-]MM-dd hh:mm");
      }
    },
    date: {
      onRenderCell(e, n) {
        return mn(e, n, "yyyy-MM-dd");
      }
    },
    time: {
      onRenderCell(e, n) {
        return mn(e, n, "hh:mm");
      }
    }
  },
  onRenderCell(e, n) {
    const { formatDate: t, html: s } = n.col.setting;
    return t && (e = mn(e, n, t)), e = Fa(e, n), e = za(e, n), s ? e = jo(e, n) : e = Ba(e, n), e;
  }
}, Kf = $e(Yf, { buildIn: !0 });
function mo(e, { row: n, col: t }) {
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
  if (e[0] = /* @__PURE__ */ _(Oc, { ...h }), t.type === "avatarBtn") {
    const { avatarBtnProps: d } = t.setting, f = typeof d == "function" ? d(t, n) : d;
    e[0] = /* @__PURE__ */ _("button", { type: "button", className: "btn btn-avatar", ...f, children: [
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
const Xf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: mo
    },
    avatarBtn: {
      onRenderCell: mo
    },
    avatarName: {
      onRenderCell: mo
    }
  }
}, Jf = $e(Xf, { buildIn: !0 }), Zf = {
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
        e[0] = /* @__PURE__ */ _("a", { href: rt(l, { ...t.setting, sortType: r }), ...a, children: e[0] });
      }
    }
    return e;
  }
}, Qf = $e(Zf, { buildIn: !0 }), td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Da,
  avatar: Jf,
  checkable: Uf,
  colHover: Hf,
  nested: Gf,
  renderDatetime: ja,
  renderDatetimeCell: mn,
  renderFormat: cr,
  renderFormatCell: za,
  renderHtmlCell: jo,
  renderLink: Wa,
  renderLinkCell: Ba,
  renderMapCell: Fa,
  rich: Kf,
  sortType: Qf
}, Symbol.toStringTag, { value: "Module" }));
class an extends X {
}
v(an, "NAME", "dtable"), v(an, "Component", Of), v(an, "definePlugin", $e), v(an, "removePlugin", Ea), v(an, "plugins", td);
var at;
class gn extends At {
  constructor() {
    super(...arguments);
    w(this, at, void 0);
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const t = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    t != null && t.startsWith("#") && $(this, at, document.querySelector(t)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), p(this, at) && (this.addActive(p(this, at).parentElement, p(this, at)), p(this, at).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const t = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    t != null && t.startsWith("#") && $(this, at, document.querySelector(t)), p(this, at) && (this.addActive(p(this, at).parentElement, p(this, at)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
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
at = new WeakMap(), v(gn, "NAME", "NavTabs"), v(gn, "NAV_CLASS", "nav-tabs"), v(gn, "EVENTS", !0), v(gn, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (e) => {
  e.target instanceof HTMLElement && (e.target.dataset.toggle === "tab" || e.target.getAttribute("data-tab")) && (e.preventDefault(), new gn(e.target).showTarget());
});
export {
  R as $,
  Or as ActionMenu,
  Hr as ActionMenuNested,
  Rf as AjaxForm,
  Zr as Avatar,
  Qr as BtnGroup,
  Wr as Button,
  nt as ContextMenu,
  an as DTable,
  fl as Dashboard,
  st as Dropdown,
  zo as EventBus,
  jr as Menu,
  fn as Messager,
  pn as Modal,
  et as ModalBase,
  Sn as ModalTrigger,
  tl as Nav,
  gn as NavTabs,
  nl as Pager,
  il as Picker,
  Gr as ProgressCircle,
  Yr as Switch,
  Pt as TIME_DAY,
  ol as Toolbar,
  ht as Tooltip,
  Ll as addI18nMap,
  pd as browser,
  el as calculateTimestamp,
  id as cash,
  sd as convertBytes,
  ct as createDate,
  nd as formatBytes,
  Lo as formatDate,
  xd as formatDateSpan,
  rt as formatString,
  Nl as getLang,
  sh as getLangCode,
  Sd as getTimeBeforeDesc,
  ie as i18n,
  vd as isDBY,
  ro as isObject,
  fs as isSameDay,
  tf as isSameMonth,
  yd as isSameWeek,
  Ao as isSameYear,
  _d as isToday,
  wd as isTomorrow,
  bd as isYesterday,
  So as mergeDeep,
  xo as nativeEvents,
  ih as setLangCode,
  ju as store
};
