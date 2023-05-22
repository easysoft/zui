var za = Object.defineProperty;
var Fa = (e, n, t) => n in e ? za(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var v = (e, n, t) => (Fa(e, typeof n != "symbol" ? n + "" : n, t), t), io = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var p = (e, n, t) => (io(e, n, "read from private field"), t ? t.call(e) : n.get(e)), w = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, k = (e, n, t, s) => (io(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t), gr = (e, n, t, s) => ({
  set _(i) {
    k(e, n, i, t);
  },
  get _() {
    return p(e, n, s);
  }
}), C = (e, n, t) => (io(e, n, "access private method"), t);
var cs, j, ml, st, de, yr, gl, bo, yl, ks = {}, _l = [], Ua = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, qi = Array.isArray;
function Bt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function bl(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function pt(e, n, t) {
  var s, i, o, r = {};
  for (o in n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? cs.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return yn(e, r, s, i, null);
}
function yn(e, n, t, s, i) {
  var o = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++ml };
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
function $n(e, n) {
  if (n == null)
    return e.__ ? $n(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? $n(e) : null;
}
function wl(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return wl(e);
  }
}
function wo(e) {
  (!e.__d && (e.__d = !0) && de.push(e) && !Rs.__r++ || yr !== j.debounceRendering) && ((yr = j.debounceRendering) || gl)(Rs);
}
function Rs() {
  var e, n, t, s, i, o, r, l;
  for (de.sort(bo); e = de.shift(); )
    e.__d && (n = de.length, s = void 0, i = void 0, r = (o = (t = e).__v).__e, (l = t.__P) && (s = [], (i = Bt({}, o)).__v = o.__v + 1, Wo(l, o, i, t.__n, l.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? $n(o), o.__h), $l(s, o), o.__e != r && wl(o)), de.length > n && de.sort(bo));
  Rs.__r = 0;
}
function vl(e, n, t, s, i, o, r, l, a, u) {
  var c, h, d, f, m, g, y, b = s && s.__k || _l, x = b.length;
  for (t.__k = [], c = 0; c < n.length; c++)
    if ((f = t.__k[c] = (f = n[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? yn(null, f, null, null, f) : qi(f) ? yn(as, { children: f }, null, null, null) : f.__b > 0 ? yn(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
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
      Wo(e, f, d = d || ks, i, o, r, l, a, u), m = f.__e, (h = f.ref) && d.ref != h && (y || (y = []), d.ref && y.push(d.ref, null, f), y.push(h, f.__c || m, f)), m != null ? (g == null && (g = m), typeof f.type == "function" && f.__k === d.__k ? f.__d = a = xl(f, a, e) : a = El(e, f, d, b, m, a), typeof t.type == "function" && (t.__d = a)) : a && d.__e == a && a.parentNode != e && (a = $n(d));
    }
  for (t.__e = g, c = x; c--; )
    b[c] != null && (typeof t.type == "function" && b[c].__e != null && b[c].__e == t.__d && (t.__d = Cl(s).nextSibling), Rl(b[c], b[c]));
  if (y)
    for (c = 0; c < y.length; c++)
      kl(y[c], y[++c], y[++c]);
}
function xl(e, n, t) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, n = typeof s.type == "function" ? xl(s, n, t) : El(t, s, s, i, s.__e, n));
  return n;
}
function Sl(e, n) {
  return n = n || [], e == null || typeof e == "boolean" || (qi(e) ? e.some(function(t) {
    Sl(t, n);
  }) : n.push(e)), n;
}
function El(e, n, t, s, i, o) {
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
function Cl(e) {
  var n, t, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (n = e.__k.length - 1; n >= 0; n--)
      if ((t = e.__k[n]) && (s = Cl(t)))
        return s;
  }
  return null;
}
function Va(e, n, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || Ts(e, o, null, t[o], s);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || Ts(e, o, n[o], t[o], s);
}
function _r(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t ?? "") : e[n] = t == null ? "" : typeof t != "number" || Ua.test(n) ? t : t + "px";
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
            t && n in t || _r(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || _r(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? s || e.addEventListener(n, o ? wr : br, o) : e.removeEventListener(n, o ? wr : br, o);
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
function br(e) {
  return this.l[e.type + !1](j.event ? j.event(e) : e);
}
function wr(e) {
  return this.l[e.type + !0](j.event ? j.event(e) : e);
}
function Wo(e, n, t, s, i, o, r, l, a) {
  var u, c, h, d, f, m, g, y, b, x, S, R, L, A, M, N = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, l = n.__e = t.__e, n.__h = null, o = [l]), (u = j.__b) && u(n);
  try {
    t:
      if (typeof N == "function") {
        if (y = n.props, b = (u = N.contextType) && s[u.__c], x = u ? b ? b.props.value : u.__ : s, t.__c ? g = (c = n.__c = t.__c).__ = c.__E : ("prototype" in N && N.prototype.render ? n.__c = c = new N(y, x) : (n.__c = c = new B(y, x), c.constructor = N, c.render = Ga), b && b.sub(c), c.props = y, c.state || (c.state = {}), c.context = x, c.__n = s, h = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), N.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Bt({}, c.__s)), Bt(c.__s, N.getDerivedStateFromProps(y, c.__s))), d = c.props, f = c.state, c.__v = n, h)
          N.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (N.getDerivedStateFromProps == null && y !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, x), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, x) === !1 || n.__v === t.__v) {
            for (n.__v !== t.__v && (c.props = y, c.state = c.__s, c.__d = !1), c.__e = !1, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(H) {
              H && (H.__ = n);
            }), S = 0; S < c._sb.length; S++)
              c.__h.push(c._sb[S]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, x), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, m);
          });
        }
        if (c.context = x, c.props = y, c.__P = e, R = j.__r, L = 0, "prototype" in N && N.prototype.render) {
          for (c.state = c.__s, c.__d = !1, R && R(n), u = c.render(c.props, c.state, c.context), A = 0; A < c._sb.length; A++)
            c.__h.push(c._sb[A]);
          c._sb = [];
        } else
          do
            c.__d = !1, R && R(n), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++L < 25);
        c.state = c.__s, c.getChildContext != null && (s = Bt(Bt({}, s), c.getChildContext())), h || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(d, f)), vl(e, qi(M = u != null && u.type === as && u.key == null ? u.props.children : u) ? M : [M], n, t, s, i, o, r, l, a), c.base = n.__e, n.__h = null, c.__h.length && r.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = qa(t.__e, n, t, s, i, o, r, a);
    (u = j.diffed) && u(n);
  } catch (H) {
    n.__v = null, (a || o != null) && (n.__e = l, n.__h = !!a, o[o.indexOf(l)] = null), j.__e(H, n, t);
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
function qa(e, n, t, s, i, o, r, l) {
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
    if (o = o && cs.call(e.childNodes), u = (h = t.props || ks).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (h = {}, m = 0; m < e.attributes.length; m++)
          h[e.attributes[m].name] = e.attributes[m].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Va(e, d, h, i, l), c)
      n.__k = [];
    else if (vl(e, qi(m = n.props.children) ? m : [m], n, t, s, i && f !== "foreignObject", o, r, o ? o[0] : t.__k && $n(t, 0), l), o != null)
      for (m = o.length; m--; )
        o[m] != null && bl(o[m]);
    l || ("value" in d && (m = d.value) !== void 0 && (m !== e.value || f === "progress" && !m || f === "option" && m !== h.value) && Ts(e, "value", m, h.value, !1), "checked" in d && (m = d.checked) !== void 0 && m !== e.checked && Ts(e, "checked", m, h.checked, !1));
  }
  return e;
}
function kl(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    j.__e(s, t);
  }
}
function Rl(e, n, t) {
  var s, i;
  if (j.unmount && j.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || kl(s, null, n)), (s = e.__c) != null) {
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
      s[i] && Rl(s[i], n, t || typeof e.type != "function");
  t || e.__e == null || bl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ga(e, n, t) {
  return this.constructor(e, t);
}
function hs(e, n, t) {
  var s, i, o;
  j.__ && j.__(e, n), i = (s = typeof t == "function") ? null : t && t.__k || n.__k, o = [], Wo(n, e = (!s && t || n).__k = pt(as, null, [e]), i || ks, ks, n.ownerSVGElement !== void 0, !s && t ? [t] : i ? null : n.firstChild ? cs.call(n.childNodes) : null, o, !s && t ? t : i ? i.__e : n.firstChild, s), $l(o, e);
}
function Tl(e, n) {
  hs(e, n, Tl);
}
function Ya(e, n, t) {
  var s, i, o, r, l = Bt({}, e.props);
  for (o in e.type && e.type.defaultProps && (r = e.type.defaultProps), n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : l[o] = n[o] === void 0 && r !== void 0 ? r[o] : n[o];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? cs.call(arguments, 2) : t), yn(e.type, l, s || e.key, i || e.ref, null);
}
function Ka(e, n) {
  var t = { __c: n = "__cC" + yl++, __: e, Consumer: function(s, i) {
    return s.children(i);
  }, Provider: function(s) {
    var i, o;
    return this.getChildContext || (i = [], (o = {})[n] = this, this.getChildContext = function() {
      return o;
    }, this.shouldComponentUpdate = function(r) {
      this.props.value !== r.value && i.some(function(l) {
        l.__e = !0, wo(l);
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
cs = _l.slice, j = { __e: function(e, n, t, s) {
  for (var i, o, r; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (l) {
        e = l;
      }
  throw e;
} }, ml = 0, st = function(e) {
  return e != null && e.constructor === void 0;
}, B.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Bt({}, this.state), typeof e == "function" && (e = e(Bt({}, t), this.props)), e && Bt(t, e), e != null && this.__v && (n && this._sb.push(n), wo(this));
}, B.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), wo(this));
}, B.prototype.render = as, de = [], gl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, bo = function(e, n) {
  return e.__v.__b - n.__v.__b;
}, Rs.__r = 0, yl = 0;
const Xa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: B,
  Fragment: as,
  cloneElement: Ya,
  createContext: Ka,
  createElement: pt,
  createRef: le,
  h: pt,
  hydrate: Tl,
  get isValidElement() {
    return st;
  },
  get options() {
    return j;
  },
  render: hs,
  toChildArray: Sl
}, Symbol.toStringTag, { value: "Module" }));
var Ja = 0;
function _(e, n, t, s, i, o) {
  var r, l, a = {};
  for (l in n)
    l == "ref" ? r = n[l] : a[l] = n[l];
  var u = { type: e, props: a, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ja, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return j.vnode && j.vnode(u), u;
}
var Pt;
class Za {
  constructor(n = "") {
    w(this, Pt, void 0);
    typeof n == "object" ? k(this, Pt, n) : k(this, Pt, document.appendChild(document.createComment(n)));
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
const vo = /* @__PURE__ */ new Set([
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
class jo extends Za {
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
    return typeof n == "string" && (vo.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), super.emit(jo.createEvent(n, t));
  }
  static createEvent(n, t) {
    return typeof n == "string" && (vo.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), n;
  }
}
var Ht, Nn, me, un;
class vr extends jo {
  constructor(t = "", s) {
    super(t);
    w(this, me);
    w(this, Ht, /* @__PURE__ */ new Map());
    w(this, Nn, void 0);
    k(this, Nn, s == null ? void 0 : s.customEventSuffix);
  }
  on(t, s, i) {
    t = C(this, me, un).call(this, t), super.on(t, s, i), p(this, Ht).set(s, [t, i]);
  }
  off(t, s, i) {
    t = C(this, me, un).call(this, t), super.off(t, s, i), p(this, Ht).delete(s);
  }
  once(t, s, i) {
    t = C(this, me, un).call(this, t);
    const o = (r) => {
      s(r), p(this, Ht).delete(o);
    };
    super.once(t, o, i), p(this, Ht).set(o, [t, i]);
  }
  emit(t, s) {
    return typeof t == "string" && (t = C(this, me, un).call(this, t)), super.emit(t, s);
  }
  offAll() {
    Array.from(p(this, Ht).entries()).forEach(([t, [s, i]]) => {
      super.off(s, t, i);
    }), p(this, Ht).clear();
  }
}
Ht = new WeakMap(), Nn = new WeakMap(), me = new WeakSet(), un = function(t) {
  const s = p(this, Nn);
  return vo.has(t) || typeof s != "string" || t.endsWith(s) ? t : `${t}${s}`;
};
function Qa(e, n) {
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
function th(e, n, t) {
  try {
    const s = Qa(e, n), i = s[s.length - 1];
    return i === void 0 ? t : i;
  } catch {
    return t;
  }
}
function oo(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function xo(e, ...n) {
  if (!n.length)
    return e;
  const t = n.shift();
  if (oo(e) && oo(t))
    for (const s in t)
      oo(t[s]) ? (e[s] || Object.assign(e, { [s]: {} }), xo(e[s], t[s])) : Object.assign(e, { [s]: t[s] });
  return xo(e, ...n);
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
var Bo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Bo || {});
function Qf(e, n = 2, t = "") {
  return Number.isNaN(e) ? "?KB" : (t || (e < 1024 ? t = "B" : e < 1048576 ? t = "KB" : e < 1073741824 ? t = "MB" : e < 1099511627776 ? t = "GB" : t = "TB"), (e / Bo[t]).toFixed(n) + t);
}
const td = (e) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const t = e.match(n);
  if (!t)
    return 0;
  const s = t[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Bo[s];
};
var pl;
let zo = ((pl = document.documentElement.getAttribute("lang")) == null ? void 0 : pl.toLowerCase()) ?? "zh_cn", Gt;
function eh() {
  return zo;
}
function nh(e) {
  zo = e.toLowerCase();
}
function Ll(e, n) {
  Gt || (Gt = {}), typeof e == "string" && (e = { [e]: n ?? {} }), xo(Gt, e);
}
function ie(e, n, t, s, i, o) {
  Array.isArray(e) ? Gt && e.unshift(Gt) : e = Gt ? [Gt, e] : [e], typeof t == "string" && (o = i, i = s, s = t, t = void 0);
  const r = i || zo;
  let l;
  for (const a of e) {
    if (!a)
      continue;
    const u = a[r];
    if (!u)
      continue;
    const c = o && a === Gt ? `${o}.${n}` : n;
    if (l = th(u, c), l !== void 0)
      break;
  }
  return l === void 0 ? s : t ? rt(l, ...Array.isArray(t) ? t : [t]) : l;
}
function Al(e, n, t, s) {
  return ie(void 0, e, n, t, s);
}
ie.addLang = Ll;
ie.getLang = Al;
ie.getCode = eh;
ie.setCode = nh;
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
const zt = document, Ls = window, Nl = zt.documentElement, Ce = zt.createElement.bind(zt), Ml = Ce("div"), ro = Ce("table"), sh = Ce("tbody"), xr = Ce("tr"), { isArray: Gi, prototype: Dl } = Array, { concat: ih, filter: Fo, indexOf: Ol, map: Pl, push: oh, slice: Hl, some: Uo, splice: rh } = Dl, lh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, ch = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, ah = /<.+>/, hh = /^\w+$/;
function Vo(e, n) {
  const t = uh(n);
  return !e || !t && !xe(n) && !G(n) ? [] : !t && ch.test(e) ? n.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !t && hh.test(e) ? n.getElementsByTagName(e) : n.querySelectorAll(e);
}
class Yi {
  constructor(n, t) {
    if (!n)
      return;
    if (So(n))
      return n;
    let s = n;
    if (J(n)) {
      const i = t || zt;
      if (s = lh.test(n) && xe(i) ? i.getElementById(n.slice(1).replace(/\\/g, "")) : ah.test(n) ? jl(n) : So(i) ? i.find(n) : J(i) ? T(i).find(n) : Vo(n, i), !s)
        return;
    } else if ($e(n))
      return this.ready(n);
    (s.nodeType || s === Ls) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(n, t) {
    return new Yi(n, t);
  }
}
const E = Yi.prototype, T = E.init;
T.fn = T.prototype = E;
E.length = 0;
E.splice = rh;
typeof Symbol == "function" && (E[Symbol.iterator] = Dl[Symbol.iterator]);
function So(e) {
  return e instanceof Yi;
}
function on(e) {
  return !!e && e === e.window;
}
function xe(e) {
  return !!e && e.nodeType === 9;
}
function uh(e) {
  return !!e && e.nodeType === 11;
}
function G(e) {
  return !!e && e.nodeType === 1;
}
function fh(e) {
  return !!e && e.nodeType === 3;
}
function dh(e) {
  return typeof e == "boolean";
}
function $e(e) {
  return typeof e == "function";
}
function J(e) {
  return typeof e == "string";
}
function lt(e) {
  return e === void 0;
}
function kn(e) {
  return e === null;
}
function Il(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function qo(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return n === null || n === Object.prototype;
}
T.isWindow = on;
T.isFunction = $e;
T.isArray = Gi;
T.isNumeric = Il;
T.isPlainObject = qo;
function K(e, n, t) {
  if (t) {
    let s = e.length;
    for (; s--; )
      if (n.call(e[s], s, e[s]) === !1)
        return e;
  } else if (qo(e)) {
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
T.each = K;
E.each = function(e) {
  return K(this, e);
};
E.empty = function() {
  return this.each((e, n) => {
    for (; n.firstChild; )
      n.removeChild(n.firstChild);
  });
};
function As(...e) {
  const n = dh(e[0]) ? e.shift() : !1, t = e.shift(), s = e.length;
  if (!t)
    return {};
  if (!s)
    return As(n, T, t);
  for (let i = 0; i < s; i++) {
    const o = e[i];
    for (const r in o)
      n && (Gi(o[r]) || qo(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), As(n, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
T.extend = As;
E.extend = function(e) {
  return As(E, e);
};
const ph = /\S+/g;
function Ki(e) {
  return J(e) ? e.match(ph) || [] : [];
}
E.toggleClass = function(e, n) {
  const t = Ki(e), s = !lt(n);
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
  const n = Ki(e);
  return this.each((t, s) => {
    G(s) && K(n, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function mh(e, n) {
  if (e) {
    if (J(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !G(this[0]))
          return;
        const t = this[0].getAttribute(e);
        return kn(t) ? void 0 : t;
      }
      return lt(n) ? this : kn(n) ? this.removeAttr(e) : this.each((t, s) => {
        G(s) && s.setAttribute(e, n);
      });
    }
    for (const t in e)
      this.attr(t, e[t]);
    return this;
  }
}
E.attr = mh;
E.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
E.hasClass = function(e) {
  return !!e && Uo.call(this, (n) => G(n) && n.classList.contains(e));
};
E.get = function(e) {
  return lt(e) ? Hl.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
E.eq = function(e) {
  return T(this.get(e));
};
E.first = function() {
  return this.eq(0);
};
E.last = function() {
  return this.eq(-1);
};
function gh(e) {
  return lt(e) ? this.get().map((n) => G(n) || fh(n) ? n.textContent : "").join("") : this.each((n, t) => {
    G(t) && (t.textContent = e);
  });
}
E.text = gh;
function Ft(e, n, t) {
  if (!G(e))
    return;
  const s = Ls.getComputedStyle(e, null);
  return t ? s.getPropertyValue(n) || void 0 : s[n] || e.style[n];
}
function kt(e, n) {
  return parseInt(Ft(e, n), 10) || 0;
}
function Sr(e, n) {
  return kt(e, `border${n ? "Left" : "Top"}Width`) + kt(e, `padding${n ? "Left" : "Top"}`) + kt(e, `padding${n ? "Right" : "Bottom"}`) + kt(e, `border${n ? "Right" : "Bottom"}Width`);
}
const lo = {};
function yh(e) {
  if (lo[e])
    return lo[e];
  const n = Ce(e);
  zt.body.insertBefore(n, null);
  const t = Ft(n, "display");
  return zt.body.removeChild(n), lo[e] = t !== "none" ? t : "block";
}
function Er(e) {
  return Ft(e, "display") === "none";
}
function Wl(e, n) {
  const t = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!t && !!n && t.call(e, n);
}
function Xi(e) {
  return J(e) ? (n, t) => Wl(t, e) : $e(e) ? e : So(e) ? (n, t) => e.is(t) : e ? (n, t) => t === e : () => !1;
}
E.filter = function(e) {
  const n = Xi(e);
  return T(Fo.call(this, (t, s) => n.call(t, s, t)));
};
function ce(e, n) {
  return n ? e.filter(n) : e;
}
E.detach = function(e) {
  return ce(this, e).each((n, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const _h = /^\s*<(\w+)[^>]*>/, bh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Cr = {
  "*": Ml,
  tr: sh,
  td: xr,
  th: xr,
  thead: ro,
  tbody: ro,
  tfoot: ro
};
function jl(e) {
  if (!J(e))
    return [];
  if (bh.test(e))
    return [Ce(RegExp.$1)];
  const n = _h.test(e) && RegExp.$1, t = Cr[n] || Cr["*"];
  return t.innerHTML = e, T(t.childNodes).detach().get();
}
T.parseHTML = jl;
E.has = function(e) {
  const n = J(e) ? (t, s) => Vo(e, s).length : (t, s) => s.contains(e);
  return this.filter(n);
};
E.not = function(e) {
  const n = Xi(e);
  return this.filter((t, s) => (!J(e) || G(s)) && !n.call(s, t, s));
};
function qt(e, n, t, s) {
  const i = [], o = $e(n), r = s && Xi(s);
  for (let l = 0, a = e.length; l < a; l++)
    if (o) {
      const u = n(e[l]);
      u.length && oh.apply(i, u);
    } else {
      let u = e[l][n];
      for (; u != null && !(s && r(-1, u)); )
        i.push(u), u = t ? u[n] : null;
    }
  return i;
}
function Bl(e) {
  return e.multiple && e.options ? qt(Fo.call(e.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : e.value || "";
}
function wh(e) {
  return arguments.length ? this.each((n, t) => {
    const s = t.multiple && t.options;
    if (s || Kl.test(t.type)) {
      const i = Gi(e) ? Pl.call(e, String) : kn(e) ? [] : [String(e)];
      s ? K(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = lt(e) || kn(e) ? "" : e;
  }) : this[0] && Bl(this[0]);
}
E.val = wh;
E.is = function(e) {
  const n = Xi(e);
  return Uo.call(this, (t, s) => n.call(t, s, t));
};
T.guid = 1;
function Nt(e) {
  return e.length > 1 ? Fo.call(e, (n, t, s) => Ol.call(s, n) === t) : e;
}
T.unique = Nt;
E.add = function(e, n) {
  return T(Nt(this.get().concat(T(e, n).get())));
};
E.children = function(e) {
  return ce(T(Nt(qt(this, (n) => n.children))), e);
};
E.parent = function(e) {
  return ce(T(Nt(qt(this, "parentNode"))), e);
};
E.index = function(e) {
  const n = e ? T(e)[0] : this[0], t = e ? this : T(n).parent().children();
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
  return ce(T(Nt(qt(this, (n) => T(n).parent().children().not(n)))), e);
};
E.find = function(e) {
  return T(Nt(qt(this, (n) => Vo(e, n))));
};
const vh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, xh = /^$|^module$|\/(java|ecma)script/i, Sh = ["type", "src", "nonce", "noModule"];
function Eh(e, n) {
  const t = T(e);
  t.filter("script").add(t.find("script")).each((s, i) => {
    if (xh.test(i.type) && Nl.contains(i)) {
      const o = Ce("script");
      o.text = i.textContent.replace(vh, ""), K(Sh, (r, l) => {
        i[l] && (o[l] = i[l]);
      }), n.head.insertBefore(o, null), n.head.removeChild(o);
    }
  });
}
function Ch(e, n, t, s, i) {
  s ? e.insertBefore(n, t ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(n, e) : e.parentNode.insertBefore(n, t ? e : e.nextSibling), i && Eh(n, e.ownerDocument);
}
function ae(e, n, t, s, i, o, r, l) {
  return K(e, (a, u) => {
    K(T(u), (c, h) => {
      K(T(n), (d, f) => {
        const m = t ? h : f, g = t ? f : h, y = t ? c : d;
        Ch(m, y ? g.cloneNode(!0) : g, s, i, !y);
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
function $h(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (lt(e))
    return this;
  const n = /<script[\s>]/.test(e);
  return this.each((t, s) => {
    G(s) && (n ? T(s).empty().append(e) : s.innerHTML = e);
  });
}
E.html = $h;
E.appendTo = function(e) {
  return ae(arguments, this, !0, !1, !0);
};
E.wrapInner = function(e) {
  return this.each((n, t) => {
    const s = T(t), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
E.before = function() {
  return ae(arguments, this, !1, !0);
};
E.wrapAll = function(e) {
  let n = T(e), t = n[0];
  for (; t.children.length; )
    t = t.firstElementChild;
  return this.first().before(n), this.appendTo(t);
};
E.wrap = function(e) {
  return this.each((n, t) => {
    const s = T(e)[0];
    T(t).wrapAll(n ? s.cloneNode(!0) : s);
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
  return T(Nt(qt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
E.next = function(e, n, t) {
  return ce(T(Nt(qt(this, "nextElementSibling", n, t))), e);
};
E.nextAll = function(e) {
  return this.next(e, !0);
};
E.nextUntil = function(e, n) {
  return this.next(n, !0, e);
};
E.parents = function(e, n) {
  return ce(T(Nt(qt(this, "parentElement", !0, n))), e);
};
E.parentsUntil = function(e, n) {
  return this.parents(n, e);
};
E.prev = function(e, n, t) {
  return ce(T(Nt(qt(this, "previousElementSibling", n, t))), e);
};
E.prevAll = function(e) {
  return this.prev(e, !0);
};
E.prevUntil = function(e, n) {
  return this.prev(n, !0, e);
};
E.map = function(e) {
  return T(ih.apply([], Pl.call(this, (n, t) => e.call(n, t, n))));
};
E.clone = function() {
  return this.map((e, n) => n.cloneNode(!0));
};
E.offsetParent = function() {
  return this.map((e, n) => {
    let t = n.offsetParent;
    for (; t && Ft(t, "position") === "static"; )
      t = t.offsetParent;
    return t || Nl;
  });
};
E.slice = function(e, n) {
  return T(Hl.call(this, e, n));
};
const kh = /-([a-z])/g;
function Go(e) {
  return e.replace(kh, (n, t) => t.toUpperCase());
}
E.ready = function(e) {
  const n = () => setTimeout(e, 0, T);
  return zt.readyState !== "loading" ? n() : zt.addEventListener("DOMContentLoaded", n), this;
};
E.unwrap = function() {
  return this.parent().each((e, n) => {
    if (n.tagName === "BODY")
      return;
    const t = T(n);
    t.replaceWith(t.children());
  }), this;
};
E.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const n = e.getBoundingClientRect();
  return {
    top: n.top + Ls.pageYOffset,
    left: n.left + Ls.pageXOffset
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
      const o = T(i).offset();
      t.top -= o.top + kt(i, "borderTopWidth"), t.left -= o.left + kt(i, "borderLeftWidth");
    }
  }
  return {
    top: t.top - kt(e, "marginTop"),
    left: t.left - kt(e, "marginLeft")
  };
};
const zl = {
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
    if (J(e))
      return e = zl[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((t, s) => {
        s[e] = n;
      });
    for (const t in e)
      this.prop(t, e[t]);
    return this;
  }
};
E.removeProp = function(e) {
  return this.each((n, t) => {
    delete t[zl[e] || e];
  });
};
const Rh = /^--/;
function Yo(e) {
  return Rh.test(e);
}
const co = {}, { style: Th } = Ml, Lh = ["webkit", "moz", "ms"];
function Ah(e, n = Yo(e)) {
  if (n)
    return e;
  if (!co[e]) {
    const t = Go(e), s = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${Lh.join(`${s} `)}${s}`.split(" ");
    K(i, (o, r) => {
      if (r in Th)
        return co[e] = r, !1;
    });
  }
  return co[e];
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
function Fl(e, n, t = Yo(e)) {
  return !t && !Nh[e] && Il(n) ? `${n}px` : n;
}
function Mh(e, n) {
  if (J(e)) {
    const t = Yo(e);
    return e = Ah(e, t), arguments.length < 2 ? this[0] && Ft(this[0], e, t) : e ? (n = Fl(e, n, t), this.each((s, i) => {
      G(i) && (t ? i.style.setProperty(e, n) : i.style[e] = n);
    })) : this;
  }
  for (const t in e)
    this.css(t, e[t]);
  return this;
}
E.css = Mh;
function Ul(e, n) {
  try {
    return e(n);
  } catch {
    return n;
  }
}
const Dh = /^\s+|\s+$/;
function $r(e, n) {
  const t = e.dataset[n] || e.dataset[Go(n)];
  return Dh.test(t) ? t : Ul(JSON.parse, t);
}
function Oh(e, n, t) {
  t = Ul(JSON.stringify, t), e.dataset[Go(n)] = t;
}
function Ph(e, n) {
  if (!e) {
    if (!this[0])
      return;
    const t = {};
    for (const s in this[0].dataset)
      t[s] = $r(this[0], s);
    return t;
  }
  if (J(e))
    return arguments.length < 2 ? this[0] && $r(this[0], e) : lt(n) ? this : this.each((t, s) => {
      Oh(s, e, n);
    });
  for (const t in e)
    this.data(t, e[t]);
  return this;
}
E.data = Ph;
function Vl(e, n) {
  const t = e.documentElement;
  return Math.max(e.body[`scroll${n}`], t[`scroll${n}`], e.body[`offset${n}`], t[`offset${n}`], t[`client${n}`]);
}
K([!0, !1], (e, n) => {
  K(["Width", "Height"], (t, s) => {
    const i = `${n ? "outer" : "inner"}${s}`;
    E[i] = function(o) {
      if (this[0])
        return on(this[0]) ? n ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : xe(this[0]) ? Vl(this[0], s) : this[0][`${n ? "offset" : "client"}${s}`] + (o && n ? kt(this[0], `margin${t ? "Top" : "Left"}`) + kt(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (e, n) => {
  const t = n.toLowerCase();
  E[t] = function(s) {
    if (!this[0])
      return lt(s) ? void 0 : this;
    if (!arguments.length)
      return on(this[0]) ? this[0].document.documentElement[`client${n}`] : xe(this[0]) ? Vl(this[0], n) : this[0].getBoundingClientRect()[t] - Sr(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!G(r))
        return;
      const l = Ft(r, "boxSizing");
      r.style[t] = Fl(t, i + (l === "border-box" ? Sr(r, !e) : 0));
    });
  };
});
const kr = "___cd";
E.toggle = function(e) {
  return this.each((n, t) => {
    if (!G(t))
      return;
    const s = Er(t);
    (lt(e) ? s : e) ? (t.style.display = t[kr] || "", Er(t) && (t.style.display = yh(t.tagName))) : s || (t[kr] = Ft(t, "display"), t.style.display = "none");
  });
};
E.hide = function() {
  return this.toggle(!1);
};
E.show = function() {
  return this.toggle(!0);
};
const Rr = "___ce", Ko = ".", Xo = { focus: "focusin", blur: "focusout" }, ql = { mouseenter: "mouseover", mouseleave: "mouseout" }, Hh = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Jo(e) {
  return ql[e] || Xo[e] || e;
}
function Zo(e) {
  const n = e.split(Ko);
  return [n[0], n.slice(1).sort()];
}
E.trigger = function(e, n) {
  if (J(e)) {
    const [s, i] = Zo(e), o = Jo(s);
    if (!o)
      return this;
    const r = Hh.test(o) ? "MouseEvents" : "HTMLEvents";
    e = zt.createEvent(r), e.initEvent(o, !0, !0), e.namespace = i.join(Ko), e.___ot = s;
  }
  e.___td = n;
  const t = e.___ot in Xo;
  return this.each((s, i) => {
    t && $e(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function Gl(e) {
  return e[Rr] = e[Rr] || {};
}
function Ih(e, n, t, s, i) {
  const o = Gl(e);
  o[n] = o[n] || [], o[n].push([t, s, i]), e.addEventListener(n, i);
}
function Yl(e, n) {
  return !n || !Uo.call(n, (t) => e.indexOf(t) < 0);
}
function Ns(e, n, t, s, i) {
  const o = Gl(e);
  if (n)
    o[n] && (o[n] = o[n].filter(([r, l, a]) => {
      if (i && a.guid !== i.guid || !Yl(r, t) || s && s !== l)
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
  else if (J(e))
    $e(n) && (t = n, n = ""), K(Ki(e), (s, i) => {
      const [o, r] = Zo(i), l = Jo(o);
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
  return T(e).replaceWith(this), this;
};
function Wh(e, n, t, s, i) {
  if (!J(e)) {
    for (const o in e)
      this.on(o, n, t, e[o], i);
    return this;
  }
  return J(n) || (lt(n) || kn(n) ? n = "" : lt(t) ? (t = n, n = "") : (s = t, t = n, n = "")), $e(s) || (s = t, t = void 0), s ? (K(Ki(e), (o, r) => {
    const [l, a] = Zo(r), u = Jo(l), c = l in ql, h = l in Xo;
    u && this.each((d, f) => {
      if (!G(f) && !xe(f) && !on(f))
        return;
      const m = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !Yl(a, g.namespace.split(Ko)) || !n && (h && (g.target !== f || g.___ot === u) || c && g.relatedTarget && f.contains(g.relatedTarget)))
          return;
        let y = f;
        if (n) {
          let x = g.target;
          for (; !Wl(x, n); )
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
      m.guid = s.guid = s.guid || T.guid++, Ih(f, u, a, n, m);
    });
  }), this) : this;
}
E.on = Wh;
function jh(e, n, t, s) {
  return this.on(e, n, t, s, !0);
}
E.one = jh;
const Bh = /\r?\n/g;
function zh(e, n) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(n.replace(Bh, `\r
`))}`;
}
const Fh = /file|reset|submit|button|image/i, Kl = /radio|checkbox/i;
E.serialize = function() {
  let e = "";
  return this.each((n, t) => {
    K(t.elements || [t], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Fh.test(i.type) || Kl.test(i.type) && !i.checked)
        return;
      const o = Bl(i);
      if (!lt(o)) {
        const r = Gi(o) ? o : [o];
        K(r, (l, a) => {
          e += zh(i.name, a);
        });
      }
    });
  }), e.slice(1);
};
window.$ = T;
const ed = T, ao = /* @__PURE__ */ new Map();
var wt, Oe, mt;
class Lt {
  constructor(n, t) {
    w(this, wt, void 0);
    w(this, Oe, void 0);
    w(this, mt, void 0);
    n = typeof n == "string" ? document.querySelector(n) : n, this.constructor.EVENTS && k(this, mt, new vr(n, { customEventSuffix: `.${this.constructor.KEY}` })), k(this, wt, { ...this.constructor.DEFAULT }), this.setOptions({ ...n instanceof HTMLElement ? T(n).data() : null, ...t }), this.constructor.all.set(n, this), k(this, Oe, n), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return p(this, wt);
  }
  get element() {
    return p(this, Oe);
  }
  get events() {
    return p(this, mt);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(n) {
    return n && Object.assign(p(this, wt), n), p(this, wt);
  }
  render(n) {
    this.setOptions(n);
  }
  destroy() {
    this.constructor.all.delete(p(this, Oe)), p(this, mt) && (this.emit("destroyed", this), p(this, mt).offAll());
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
    let i = vr.createEvent(n, t);
    if (s !== !1) {
      const r = s || `on${n[0].toUpperCase()}${n.substring(1)}`, l = p(this, wt)[r];
      l && l(i) === !1 && (i.preventDefault(), i.stopPropagation());
    }
    return i = (o = p(this, mt)) == null ? void 0 : o.emit(n, t), i;
  }
  i18n(n, t, s) {
    return ie(p(this, wt).i18n, n, t, s, this.options.lang, this.constructor.NAME) ?? ie(p(this, wt).i18n, n, t, s, this.options.lang) ?? `{i18n:${n}}`;
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
    if (ao.has(n))
      return ao.get(n);
    const t = /* @__PURE__ */ new Map();
    return ao.set(n, t), t;
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
wt = new WeakMap(), Oe = new WeakMap(), mt = new WeakMap(), v(Lt, "EVENTS", !1), v(Lt, "DEFAULT", {});
class X extends Lt {
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
var Qo, z, Xl, Jl, _n, Tr, Zl = {}, Ql = [], Uh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function te(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function tc(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function ln(e, n, t) {
  var s, i, o, r = {};
  for (o in n)
    o == "key" ? s = n[o] : o == "ref" ? i = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Qo.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return ws(e, r, s, i, null);
}
function ws(e, n, t, s, i) {
  var o = { type: e, props: n, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Xl };
  return i == null && z.vnode != null && z.vnode(o), o;
}
function Vh() {
  return { current: null };
}
function tr(e) {
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
function ec(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return ec(e);
  }
}
function Lr(e) {
  (!e.__d && (e.__d = !0) && _n.push(e) && !Ms.__r++ || Tr !== z.debounceRendering) && ((Tr = z.debounceRendering) || setTimeout)(Ms);
}
function Ms() {
  for (var e; Ms.__r = _n.length; )
    e = _n.sort(function(n, t) {
      return n.__v.__b - t.__v.__b;
    }), _n = [], e.some(function(n) {
      var t, s, i, o, r, l;
      n.__d && (r = (o = (t = n).__v).__e, (l = t.__P) && (s = [], (i = te({}, o)).__v = o.__v + 1, oc(l, o, i, t.__n, l.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? Rn(o), o.__h), Gh(s, o), o.__e != r && ec(o)));
    });
}
function nc(e, n, t, s, i, o, r, l, a, u) {
  var c, h, d, f, m, g, y, b = s && s.__k || Ql, x = b.length;
  for (t.__k = [], c = 0; c < n.length; c++)
    if ((f = t.__k[c] = (f = n[c]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? ws(null, f, null, null, f) : Array.isArray(f) ? ws(tr, { children: f }, null, null, null) : f.__b > 0 ? ws(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
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
      oc(e, f, d = d || Zl, i, o, r, l, a, u), m = f.__e, (h = f.ref) && d.ref != h && (y || (y = []), d.ref && y.push(d.ref, null, f), y.push(h, f.__c || m, f)), m != null ? (g == null && (g = m), typeof f.type == "function" && f.__k === d.__k ? f.__d = a = sc(f, a, e) : a = ic(e, f, d, b, m, a), typeof t.type == "function" && (t.__d = a)) : a && d.__e == a && a.parentNode != e && (a = Rn(d));
    }
  for (t.__e = g, c = x; c--; )
    b[c] != null && lc(b[c], b[c]);
  if (y)
    for (c = 0; c < y.length; c++)
      rc(y[c], y[++c], y[++c]);
}
function sc(e, n, t) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, n = typeof s.type == "function" ? sc(s, n, t) : ic(t, s, s, i, s.__e, n));
  return n;
}
function ic(e, n, t, s, i, o) {
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
function qh(e, n, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || Ds(e, o, null, t[o], s);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || Ds(e, o, n[o], t[o], s);
}
function Ar(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || Uh.test(n) ? t : t + "px";
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
            t && n in t || Ar(e.style, n, "");
        if (t)
          for (n in t)
            s && t[n] === s[n] || Ar(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + o] = t, t ? s || e.addEventListener(n, o ? Mr : Nr, o) : e.removeEventListener(n, o ? Mr : Nr, o);
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
function Nr(e) {
  this.l[e.type + !1](z.event ? z.event(e) : e);
}
function Mr(e) {
  this.l[e.type + !0](z.event ? z.event(e) : e);
}
function oc(e, n, t, s, i, o, r, l, a) {
  var u, c, h, d, f, m, g, y, b, x, S, R, L, A, M, N = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, l = n.__e = t.__e, n.__h = null, o = [l]), (u = z.__b) && u(n);
  try {
    t:
      if (typeof N == "function") {
        if (y = n.props, b = (u = N.contextType) && s[u.__c], x = u ? b ? b.props.value : u.__ : s, t.__c ? g = (c = n.__c = t.__c).__ = c.__E : ("prototype" in N && N.prototype.render ? n.__c = c = new N(y, x) : (n.__c = c = new bn(y, x), c.constructor = N, c.render = Kh), b && b.sub(c), c.props = y, c.state || (c.state = {}), c.context = x, c.__n = s, h = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), N.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = te({}, c.__s)), te(c.__s, N.getDerivedStateFromProps(y, c.__s))), d = c.props, f = c.state, h)
          N.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (N.getDerivedStateFromProps == null && y !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, x), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, x) === !1 || n.__v === t.__v) {
            for (c.props = y, c.state = c.__s, n.__v !== t.__v && (c.__d = !1), c.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(H) {
              H && (H.__ = n);
            }), S = 0; S < c._sb.length; S++)
              c.__h.push(c._sb[S]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, x), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, m);
          });
        }
        if (c.context = x, c.props = y, c.__v = n, c.__P = e, R = z.__r, L = 0, "prototype" in N && N.prototype.render) {
          for (c.state = c.__s, c.__d = !1, R && R(n), u = c.render(c.props, c.state, c.context), A = 0; A < c._sb.length; A++)
            c.__h.push(c._sb[A]);
          c._sb = [];
        } else
          do
            c.__d = !1, R && R(n), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++L < 25);
        c.state = c.__s, c.getChildContext != null && (s = te(te({}, s), c.getChildContext())), h || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(d, f)), M = u != null && u.type === tr && u.key == null ? u.props.children : u, nc(e, Array.isArray(M) ? M : [M], n, t, s, i, o, r, l, a), c.base = n.__e, n.__h = null, c.__h.length && r.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = Yh(t.__e, n, t, s, i, o, r, a);
    (u = z.diffed) && u(n);
  } catch (H) {
    n.__v = null, (a || o != null) && (n.__e = l, n.__h = !!a, o[o.indexOf(l)] = null), z.__e(H, n, t);
  }
}
function Gh(e, n) {
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
function Yh(e, n, t, s, i, o, r, l) {
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
    if (o = o && Qo.call(e.childNodes), u = (h = t.props || Zl).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (h = {}, m = 0; m < e.attributes.length; m++)
          h[e.attributes[m].name] = e.attributes[m].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (qh(e, d, h, i, l), c)
      n.__k = [];
    else if (m = n.props.children, nc(e, Array.isArray(m) ? m : [m], n, t, s, i && f !== "foreignObject", o, r, o ? o[0] : t.__k && Rn(t, 0), l), o != null)
      for (m = o.length; m--; )
        o[m] != null && tc(o[m]);
    l || ("value" in d && (m = d.value) !== void 0 && (m !== e.value || f === "progress" && !m || f === "option" && m !== h.value) && Ds(e, "value", m, h.value, !1), "checked" in d && (m = d.checked) !== void 0 && m !== e.checked && Ds(e, "checked", m, h.checked, !1));
  }
  return e;
}
function rc(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (s) {
    z.__e(s, t);
  }
}
function lc(e, n, t) {
  var s, i;
  if (z.unmount && z.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || rc(s, null, n)), (s = e.__c) != null) {
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
      s[i] && lc(s[i], n, t || typeof e.type != "function");
  t || e.__e == null || tc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Kh(e, n, t) {
  return this.constructor(e, t);
}
Qo = Ql.slice, z = { __e: function(e, n, t, s) {
  for (var i, o, r; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (l) {
        e = l;
      }
  throw e;
} }, Xl = 0, Jl = function(e) {
  return e != null && e.constructor === void 0;
}, bn.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = te({}, this.state), typeof e == "function" && (e = e(te({}, t), this.props)), e && te(t, e), e != null && this.__v && (n && this._sb.push(n), Lr(this));
}, bn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Lr(this));
}, bn.prototype.render = tr, _n = [], Ms.__r = 0;
var Xh = 0;
function ut(e, n, t, s, i) {
  var o, r, l = {};
  for (r in n)
    r == "ref" ? o = n[r] : l[r] = n[r];
  var a = { type: e, props: l, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Xh, __source: i, __self: s };
  if (typeof e == "function" && (o = e.defaultProps))
    for (r in o)
      l[r] === void 0 && (l[r] = o[r]);
  return z.vnode && z.vnode(a), a;
}
function Ji(...e) {
  const n = [], t = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? n[r][1] = !!o : (t.set(i, n.length), n.push([i, !!o]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Ji(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), n.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const D = (...e) => Ji(...e).reduce((n, [t, s]) => (s && n.push(t), n), []).join(" ");
function Jh({
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
function cc({
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
    typeof l == "string" ? /* @__PURE__ */ ut("i", { class: `icon ${l}` }) : l,
    /* @__PURE__ */ ut("span", { className: "text", children: a }),
    typeof t == "function" ? t() : t,
    typeof c == "string" ? /* @__PURE__ */ ut("i", { class: `icon ${c}` }) : c
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
function Zh({
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
function Qh({
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
function tu(e) {
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
      b != null && (typeof b == "object" && !st(b) && ("html" in b || "__html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b) ? b.html ? f.push(
        /* @__PURE__ */ _("div", { className: D(b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })
      ) : b.__html ? m.push(b.__html) : (b.style && Object.assign(d, b.style), b.className && h.push(b.className), b.children && f.push(b.children), b.attrs && Object.assign(c, b.attrs)) : f.push(b));
    });
  }), m.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: m } }), [{
    className: D(h),
    style: d,
    ...c
  }, f];
}
function Eo({
  tag: e = "div",
  ...n
}) {
  const [t, s] = tu(n);
  return pt(e, t, ...s);
}
function eu({ type: e, ...n }) {
  return /* @__PURE__ */ ut(Eo, { ...n });
}
function ac({
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
let Zi = (jt = class extends bn {
  constructor() {
    super(...arguments);
    v(this, "ref", Vh());
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
          return /* @__PURE__ */ ut(y, { ...o });
      } else if (typeof r == "function") {
        const y = r.call(this, o, ln);
        if (Jl(y))
          return y;
        typeof y == "object" && Object.assign(o, y);
      }
    }
    const { type: l = "item", component: a, key: u = i, rootAttrs: c, rootClass: h, rootStyle: d, rootChildren: f, ...m } = o;
    if (l === "html")
      return /* @__PURE__ */ ut(
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
    const { children: o, className: r, key: l, ...a } = s, { activeClass: u = "", activeKey: c, activeIcon: h } = this.props, d = h && c === l ? /* @__PURE__ */ ut("i", { className: `checked icon icon-${h}` }) : null, f = c === l;
    return /* @__PURE__ */ ut(
      "li",
      {
        className: D("action-menu-item", `${this.name}-${i.type}`, r, { [u]: f }),
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
      itemRender: u,
      onClickItem: c,
      beforeRender: h,
      afterRender: d,
      beforeDestroy: f,
      activeClass: m,
      activeKey: g,
      ...y
    } = t, b = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ ut(b, { class: D(this.name, r), style: i, ...y, ref: this.ref, children: [
      l && l.map(this.renderItem.bind(this, t)),
      a
    ] });
  }
}, v(jt, "ItemComponents", {
  divider: Jh,
  item: cc,
  heading: Zh,
  space: Qh,
  custom: eu,
  basic: ac
}), v(jt, "ROOT_TAG", "menu"), v(jt, "NAME", "action-menu"), jt);
class Dr extends X {
}
v(Dr, "NAME", "actionmenu"), v(Dr, "Component", Zi);
function Or({
  ...e
}) {
  return /* @__PURE__ */ ut(cc, { ...e });
}
var mo, Mn, vt, Pe;
let hc = (mo = class extends Zi {
  constructor(t) {
    super(t);
    w(this, Mn, /* @__PURE__ */ new Set());
    w(this, vt, void 0);
    w(this, Pe, (t, s, i) => {
      this.toggleNestedMenu(t, s), i.preventDefault();
    });
    k(this, vt, t.nestedShow === void 0), p(this, vt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
    ], o.component = Or), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: p(this, Pe).bind(this, r, !0),
        onMouseLeave: p(this, Pe).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: u } = o;
      o.onClick = (c) => {
        p(this, Pe).call(this, r, void 0, c), u == null || u(c);
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
    p(this, vt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    p(this, vt) && this.setState({ nestedShow: !1 });
  }
}, Mn = new WeakMap(), vt = new WeakMap(), Pe = new WeakMap(), v(mo, "ItemComponents", {
  item: Or
}), mo);
class Pr extends X {
}
v(Pr, "NAME", "actionmenunested"), v(Pr, "Component", hc);
let At = class extends B {
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
      ...R
    } = this.props, L = n || (l ? "a" : "button"), A = g == null || typeof g == "string" && !g.length || h && !f, M = b && A && !m && !y && !r && !h;
    return pt(
      L,
      {
        className: D("btn", t, o, {
          "btn-caret": M,
          disabled: u || h,
          active: c,
          loading: h,
          square: x === void 0 ? !M && !r && A : x
        }, i ? `size-${i}` : ""),
        title: S,
        [L === "a" ? "href" : "data-url"]: l,
        [L === "a" ? "target" : "data-target"]: a,
        type: L === "button" ? s : void 0,
        ...R
      },
      h ? /* @__PURE__ */ _("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof m == "string" ? /* @__PURE__ */ _("i", { class: `icon ${m}` }) : m,
      A ? null : /* @__PURE__ */ _("span", { className: "text", children: h ? f : g }),
      h ? null : r,
      h ? null : typeof y == "string" ? /* @__PURE__ */ _("i", { class: `icon ${y}` }) : y,
      h ? null : b ? /* @__PURE__ */ _("span", { className: typeof b == "string" ? `caret-${b}` : "caret" }) : null
    );
  }
};
class Hr extends X {
}
v(Hr, "NAME", "button"), v(Hr, "Component", At);
var go;
let er = (go = class extends hc {
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
}, v(go, "NAME", "menu"), go);
class Ir extends X {
}
v(Ir, "NAME", "menu"), v(Ir, "Component", er);
let us = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
function nu({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ _(At, { type: t, ...s });
}
function su(e) {
  return e.button === 2;
}
function nr(e) {
  return e.split("-")[1];
}
function uc(e) {
  return e === "y" ? "height" : "width";
}
function wn(e) {
  return e.split("-")[0];
}
function fc(e) {
  return ["top", "bottom"].includes(wn(e)) ? "x" : "y";
}
function Wr(e, n, t) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, l = fc(n), a = uc(l), u = s[a] / 2 - i[a] / 2, c = l === "x";
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
  switch (nr(n)) {
    case "start":
      h[l] -= u * (t && c ? -1 : 1);
      break;
    case "end":
      h[l] += u * (t && c ? -1 : 1);
  }
  return h;
}
const iu = async (e, n, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let u = await r.getElementRects({ reference: e, floating: n, strategy: i }), { x: c, y: h } = Wr(u, s, a), d = s, f = {}, m = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: y, fn: b } = l[g], { x, y: S, data: R, reset: L } = await b({ x: c, y: h, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: u, platform: r, elements: { reference: e, floating: n } });
    c = x ?? c, h = S ?? h, f = { ...f, [y]: { ...f[y], ...R } }, L && m <= 50 && (m++, typeof L == "object" && (L.placement && (d = L.placement), L.rects && (u = L.rects === !0 ? await r.getElementRects({ reference: e, floating: n, strategy: i }) : L.rects), { x: c, y: h } = Wr(u, d, a)), g = -1);
  }
  return { x: c, y: h, placement: d, strategy: i, middlewareData: f };
};
function ou(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Os(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function ru(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: s, y: i, platform: o, rects: r, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: h = "floating", altBoundary: d = !1, padding: f = 0 } = n, m = ou(f), g = l[d ? h === "floating" ? "reference" : "floating" : h], y = Os(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(g))) == null || t ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: c, strategy: a })), b = h === "floating" ? { ...r.floating, x: s, y: i } : r.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), S = await (o.isElement == null ? void 0 : o.isElement(x)) && await (o.getScale == null ? void 0 : o.getScale(x)) || { x: 1, y: 1 }, R = Os(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: b, offsetParent: x, strategy: a }) : b);
  return { top: (y.top - R.top + m.top) / S.y, bottom: (R.bottom - y.bottom + m.bottom) / S.y, left: (y.left - R.left + m.left) / S.x, right: (R.right - y.right + m.right) / S.x };
}
const lu = ["top", "right", "bottom", "left"];
lu.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const cu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ps(e) {
  return e.replace(/left|right|bottom|top/g, (n) => cu[n]);
}
function au(e, n, t) {
  t === void 0 && (t = !1);
  const s = nr(e), i = fc(e), o = uc(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = Ps(r)), { main: r, cross: Ps(r) };
}
const hu = { start: "end", end: "start" };
function ho(e) {
  return e.replace(/start|end/g, (n) => hu[n]);
}
const dc = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: l, elements: a } = n, { mainAxis: u = !0, crossAxis: c = !0, fallbackPlacements: h, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: m = !0, ...g } = e, y = wn(s), b = wn(r) === r, x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), S = h || (b || !m ? [Ps(r)] : function($) {
      const I = Ps($);
      return [ho($), I, ho(I)];
    }(r));
    h || f === "none" || S.push(...function($, I, q, it) {
      const U = nr($);
      let P = function(V, bt, he) {
        const ue = ["left", "right"], fe = ["right", "left"], Mt = ["top", "bottom"], Re = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return he ? bt ? fe : ue : bt ? ue : fe;
          case "left":
          case "right":
            return bt ? Mt : Re;
          default:
            return [];
        }
      }(wn($), q === "start", it);
      return U && (P = P.map((V) => V + "-" + U), I && (P = P.concat(P.map(ho)))), P;
    }(r, m, f, x));
    const R = [r, ...S], L = await ru(n, g), A = [];
    let M = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (u && A.push(L[y]), c) {
      const { main: $, cross: I } = au(s, o, x);
      A.push(L[$], L[I]);
    }
    if (M = [...M, { placement: s, overflows: A }], !A.every(($) => $ <= 0)) {
      var N;
      const $ = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, I = R[$];
      if (I)
        return { data: { index: $, overflows: M }, reset: { placement: I } };
      let q = "bottom";
      switch (d) {
        case "bestFit": {
          var H;
          const it = (H = M.map((U) => [U, U.overflows.filter((P) => P > 0).reduce((P, V) => P + V, 0)]).sort((U, P) => U[1] - P[1])[0]) == null ? void 0 : H[0].placement;
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
function ft(e) {
  var n;
  return ((n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Rt(e) {
  return ft(e).getComputedStyle(e);
}
function oe(e) {
  return mc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ms;
function pc() {
  if (ms)
    return ms;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ms = e.brands.map((n) => n.brand + "/" + n.version).join(" "), ms) : navigator.userAgent;
}
function Ut(e) {
  return e instanceof ft(e).HTMLElement;
}
function yt(e) {
  return e instanceof ft(e).Element;
}
function mc(e) {
  return e instanceof ft(e).Node;
}
function jr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ft(e).ShadowRoot || e instanceof ShadowRoot;
}
function Qi(e) {
  const { overflow: n, overflowX: t, overflowY: s, display: i } = Rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + s + t) && !["inline", "contents"].includes(i);
}
function uu(e) {
  return ["table", "td", "th"].includes(oe(e));
}
function Co(e) {
  const n = /firefox/i.test(pc()), t = Rt(e), s = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!s && s !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function gc() {
  return !/^((?!chrome|android).)*safari/i.test(pc());
}
function sr(e) {
  return ["html", "body", "#document"].includes(oe(e));
}
const Br = Math.min, vn = Math.max, Hs = Math.round;
function yc(e) {
  const n = Rt(e);
  let t = parseFloat(n.width), s = parseFloat(n.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = Hs(t) !== i || Hs(s) !== o;
  return r && (t = i, s = o), { width: t, height: s, fallback: r };
}
function _c(e) {
  return yt(e) ? e : e.contextElement;
}
const bc = { x: 1, y: 1 };
function Ne(e) {
  const n = _c(e);
  if (!Ut(n))
    return bc;
  const t = n.getBoundingClientRect(), { width: s, height: i, fallback: o } = yc(n);
  let r = (o ? Hs(t.width) : t.width) / s, l = (o ? Hs(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
function Se(e, n, t, s) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), l = _c(e);
  let a = bc;
  n && (s ? yt(s) && (a = Ne(s)) : a = Ne(e));
  const u = l ? ft(l) : window, c = !gc() && t;
  let h = (r.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, d = (r.top + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / a.y, f = r.width / a.x, m = r.height / a.y;
  if (l) {
    const g = ft(l), y = s && yt(s) ? ft(s) : s;
    let b = g.frameElement;
    for (; b && s && y !== g; ) {
      const x = Ne(b), S = b.getBoundingClientRect(), R = getComputedStyle(b);
      S.x += (b.clientLeft + parseFloat(R.paddingLeft)) * x.x, S.y += (b.clientTop + parseFloat(R.paddingTop)) * x.y, h *= x.x, d *= x.y, f *= x.x, m *= x.y, h += S.x, d += S.y, b = ft(b).frameElement;
    }
  }
  return { width: f, height: m, top: d, right: h + f, bottom: d + m, left: h, x: h, y: d };
}
function ne(e) {
  return ((mc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function to(e) {
  return yt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function wc(e) {
  return Se(ne(e)).left + to(e).scrollLeft;
}
function fu(e, n, t) {
  const s = Ut(n), i = ne(n), o = Se(e, !0, t === "fixed", n);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && t !== "fixed")
    if ((oe(n) !== "body" || Qi(i)) && (r = to(n)), Ut(n)) {
      const a = Se(n, !0);
      l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
    } else
      i && (l.x = wc(i));
  return { x: o.left + r.scrollLeft - l.x, y: o.top + r.scrollTop - l.y, width: o.width, height: o.height };
}
function Tn(e) {
  if (oe(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || (jr(e) ? e.host : null) || ne(e);
  return jr(n) ? n.host : n;
}
function zr(e) {
  return Ut(e) && Rt(e).position !== "fixed" ? e.offsetParent : null;
}
function Fr(e) {
  const n = ft(e);
  let t = zr(e);
  for (; t && uu(t) && Rt(t).position === "static"; )
    t = zr(t);
  return t && (oe(t) === "html" || oe(t) === "body" && Rt(t).position === "static" && !Co(t)) ? n : t || function(s) {
    let i = Tn(s);
    for (; Ut(i) && !sr(i); ) {
      if (Co(i))
        return i;
      i = Tn(i);
    }
    return null;
  }(e) || n;
}
function vc(e) {
  const n = Tn(e);
  return sr(n) ? e.ownerDocument.body : Ut(n) && Qi(n) ? n : vc(n);
}
function xn(e, n) {
  var t;
  n === void 0 && (n = []);
  const s = vc(e), i = s === ((t = e.ownerDocument) == null ? void 0 : t.body), o = ft(s);
  return i ? n.concat(o, o.visualViewport || [], Qi(s) ? s : []) : n.concat(s, xn(s));
}
function Ur(e, n, t) {
  return n === "viewport" ? Os(function(s, i) {
    const o = ft(s), r = ne(s), l = o.visualViewport;
    let a = r.clientWidth, u = r.clientHeight, c = 0, h = 0;
    if (l) {
      a = l.width, u = l.height;
      const d = gc();
      (d || !d && i === "fixed") && (c = l.offsetLeft, h = l.offsetTop);
    }
    return { width: a, height: u, x: c, y: h };
  }(e, t)) : yt(n) ? function(s, i) {
    const o = Se(s, !0, i === "fixed"), r = o.top + s.clientTop, l = o.left + s.clientLeft, a = Ut(s) ? Ne(s) : { x: 1, y: 1 }, u = s.clientWidth * a.x, c = s.clientHeight * a.y, h = l * a.x, d = r * a.y;
    return { top: d, left: h, right: h + u, bottom: d + c, x: h, y: d, width: u, height: c };
  }(n, t) : Os(function(s) {
    var i;
    const o = ne(s), r = to(s), l = (i = s.ownerDocument) == null ? void 0 : i.body, a = vn(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), u = vn(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0);
    let c = -r.scrollLeft + wc(s);
    const h = -r.scrollTop;
    return Rt(l || o).direction === "rtl" && (c += vn(o.clientWidth, l ? l.clientWidth : 0) - a), { width: a, height: u, x: c, y: h };
  }(ne(e)));
}
const du = { getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: s, strategy: i } = e;
  const o = t === "clippingAncestors" ? function(u, c) {
    const h = c.get(u);
    if (h)
      return h;
    let d = xn(u).filter((y) => yt(y) && oe(y) !== "body"), f = null;
    const m = Rt(u).position === "fixed";
    let g = m ? Tn(u) : u;
    for (; yt(g) && !sr(g); ) {
      const y = Rt(g), b = Co(g);
      (m ? b || f : b || y.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = y : d = d.filter((x) => x !== g), g = Tn(g);
    }
    return c.set(u, d), d;
  }(n, this._c) : [].concat(t), r = [...o, s], l = r[0], a = r.reduce((u, c) => {
    const h = Ur(n, c, i);
    return u.top = vn(h.top, u.top), u.right = Br(h.right, u.right), u.bottom = Br(h.bottom, u.bottom), u.left = vn(h.left, u.left), u;
  }, Ur(n, l, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: s } = e;
  const i = Ut(t), o = ne(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((oe(t) !== "body" || Qi(o)) && (r = to(t)), Ut(t))) {
    const u = Se(t);
    l = Ne(t), a.x = u.x + t.clientLeft, a.y = u.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - r.scrollLeft * l.x + a.x, y: n.y * l.y - r.scrollTop * l.y + a.y };
}, isElement: yt, getDimensions: function(e) {
  return yc(e);
}, getOffsetParent: Fr, getDocumentElement: ne, getScale: Ne, async getElementRects(e) {
  let { reference: n, floating: t, strategy: s } = e;
  const i = this.getOffsetParent || Fr, o = this.getDimensions;
  return { reference: fu(n, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Rt(e).direction === "rtl" };
function pu(e, n, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: l = !1 } = s, a = i && !l, u = a || o ? [...yt(e) ? xn(e) : e.contextElement ? xn(e.contextElement) : [], ...xn(n)] : [];
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
const xc = (e, n, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: du, ...t }, o = { ...i.platform, _c: s };
  return iu(e, n, { ...i, platform: o });
};
let mu = class extends er {
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
      middleware: [dc()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var n;
    return (n = this.ref.current) == null ? void 0 : n.parentElement;
  }
  _createPopper() {
    const n = this._getPopperOptions();
    this.ref.current && xc(this._getPopperElement(), this.ref.current, n).then(({ x: t, y: s }) => {
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
var Yt, He, Dn, On, Vs, Sc, qs, Ec;
class et extends Lt {
  constructor() {
    super(...arguments);
    w(this, Vs);
    w(this, qs);
    w(this, Yt, void 0);
    w(this, He, void 0);
    w(this, Dn, void 0);
    v(this, "arrowEl");
    w(this, On, void 0);
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
    return k(this, Dn, t), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var s, i;
    return (s = p(this, On)) == null || s.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((i = p(this, Yt)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
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
    return i.style.width = "max-content", i.style.position = this.options.strategy, i.style.top = "0", i.style.left = "0", k(this, Yt, i), i;
  }
  _getPopperOptions() {
    var o;
    const { placement: t, strategy: s } = this.options, i = {
      middleware: [],
      placement: t,
      strategy: s
    };
    return this.options.flip && ((o = i.middleware) == null || o.push(dc())), i;
  }
  _createPopper() {
    const t = this._getPopperOptions(), s = this._getPopperElement();
    k(this, On, pu(s, this.menu, () => {
      xc(s, this.menu, t).then(({ x: i, y: o, middlewareData: r, placement: l }) => {
        Object.assign(this.menu.style, {
          left: `${i}px`,
          top: `${o}px`
        });
        const a = l.split("-")[0], u = C(this, Vs, Sc).call(this, a);
        if (r.arrow && this.arrowEl) {
          const { x: c, y: h } = r.arrow;
          Object.assign(this.arrowEl.style, {
            left: c != null ? `${c}px` : "",
            top: h != null ? `${h}px` : "",
            [u]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...C(this, qs, Ec).call(this, a)
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
    return !t || this.emit("updateMenu", { menu: t, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (hs(pt(mu, t), this.menu), !0);
  }
  _getPopperElement() {
    return p(this, He) || k(this, He, {
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
    }), p(this, He);
  }
  static clear(t) {
    var a, u;
    t instanceof Event && (t = { event: t });
    const { event: s, exclude: i, ignoreSelector: o = ".not-hide-menu" } = t || {};
    if (s && o && ((u = (a = s.target).closest) != null && u.call(a, o)) || s && su(s))
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
Yt = new WeakMap(), He = new WeakMap(), Dn = new WeakMap(), On = new WeakMap(), Vs = new WeakSet(), Sc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, qs = new WeakSet(), Ec = function(t) {
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
}, v(et, "NAME", "contextmenu"), v(et, "EVENTS", !0), v(et, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), v(et, "MENU_CLASS", "contextmenu"), v(et, "CLASS_SHOW", "show"), v(et, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (e) => {
  var s;
  const n = e.target;
  if ((s = n.closest) != null && s.call(n, `.${et.MENU_CLASS}`))
    return;
  const t = n.closest(et.MENU_SELECTOR);
  t && (et.ensure(t).show(e), e.preventDefault());
});
document.addEventListener("click", et.clear.bind(et));
function Cc(e) {
  return e.split("-")[1];
}
function gu(e) {
  return e === "y" ? "height" : "width";
}
function $c(e) {
  return e.split("-")[0];
}
function kc(e) {
  return ["top", "bottom"].includes($c(e)) ? "x" : "y";
}
function yu(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
const _u = Math.min, bu = Math.max;
function wu(e, n, t) {
  return bu(e, _u(n, t));
}
const vu = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { element: t, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: l, platform: a, elements: u } = n;
  if (t == null)
    return {};
  const c = yu(s), h = { x: i, y: o }, d = kc(r), f = gu(d), m = await a.getDimensions(t), g = d === "y", y = g ? "top" : "left", b = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", S = l.reference[f] + l.reference[d] - h[d] - l.floating[f], R = h[d] - l.reference[d], L = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(t));
  let A = L ? L[x] : 0;
  A && await (a.isElement == null ? void 0 : a.isElement(L)) || (A = u.floating[x] || l.floating[f]);
  const M = S / 2 - R / 2, N = c[y], H = A - m[f] - c[b], $ = A / 2 - m[f] / 2 + M, I = wu(N, $, H), q = Cc(r) != null && $ != I && l.reference[f] / 2 - ($ < N ? c[y] : c[b]) - m[f] / 2 < 0;
  return { [d]: h[d] - (q ? $ < N ? N - $ : H - $ : 0), data: { [d]: I, centerOffset: $ - I } };
} }), xu = ["top", "right", "bottom", "left"];
xu.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const Su = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: s } = n, i = await async function(o, r) {
      const { placement: l, platform: a, elements: u } = o, c = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), h = $c(l), d = Cc(l), f = kc(l) === "x", m = ["left", "top"].includes(h) ? -1 : 1, g = c && f ? -1 : 1, y = typeof r == "function" ? r(o) : r;
      let { mainAxis: b, crossAxis: x, alignmentAxis: S } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return d && typeof S == "number" && (x = d === "end" ? -1 * S : S), f ? { x: x * g, y: b * m } : { x: b * m, y: x * g };
    }(n, e);
    return { x: t + i.x, y: s + i.y, data: i };
  } };
};
var Ie, We, je, Gs, Rc;
const lr = class extends et {
  constructor() {
    super(...arguments);
    w(this, Gs);
    w(this, Ie, !1);
    w(this, We, 0);
    v(this, "hideLater", () => {
      p(this, je).call(this), k(this, We, window.setTimeout(this.hide.bind(this), 100));
    });
    w(this, je, () => {
      clearTimeout(p(this, We)), k(this, We, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, s) {
    (s == null ? void 0 : s.clearOthers) !== !1 && lr.clear({ event: s == null ? void 0 : s.event, exclude: [this.element] });
    const i = super.show(t);
    return i && (!p(this, Ie) && this.isHover && C(this, Gs, Rc).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const t = super.hide();
    return t && this.element.classList.remove(this.elementShowClass), t;
  }
  toggle(t, s) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...s });
  }
  destroy() {
    p(this, Ie) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", p(this, je)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  _getPopperOptions() {
    var i, o;
    const t = super._getPopperOptions(), s = this._getArrowSize();
    return s && this.arrowEl && ((i = t.middleware) == null || i.push(Su(s)), (o = t.middleware) == null || o.push(vu({ element: this.arrowEl }))), t;
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
let nt = lr;
Ie = new WeakMap(), We = new WeakMap(), je = new WeakMap(), Gs = new WeakSet(), Rc = function() {
  const { menu: t } = this;
  t.addEventListener("mouseenter", p(this, je)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), k(this, Ie, !0);
}, v(nt, "NAME", "dropdown"), v(nt, "MENU_CLASS", "dropdown-menu"), v(nt, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), v(nt, "DEFAULT", {
  ...et.DEFAULT,
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
const Eu = (e) => {
  const n = document.getElementsByClassName("with-dropdown-show")[0];
  if (!n)
    return;
  const t = typeof n.closest == "function" ? n.closest(nt.MENU_SELECTOR) : null;
  !t || !e.target.contains(t) || nt.clear({ event: e });
};
window.addEventListener("scroll", Eu, !0);
var Pn, Be;
class Cu extends B {
  constructor(t) {
    var s;
    super(t);
    w(this, Pn, void 0);
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
    }), k(this, Pn, nt.ensure(this.triggerElement, {
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
    (t = p(this, Pn)) == null || t.destroy();
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
Pn = new WeakMap(), Be = new WeakMap();
class $u extends Cu {
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
    return s.caret = i, /* @__PURE__ */ _(At, { ...s });
  }
}
function Tc({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ _($u, { type: t, ...s });
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
    return /* @__PURE__ */ _(At, { ...i }, s);
  }
  renderItem(n, t, s) {
    const { itemRender: i, defaultBtnProps: o, onClickItem: r } = n, l = { key: s, ...t };
    if (o && Object.assign(l, o), r && (l.onClick = this.handleItemClick.bind(this, l, s, t.onClick)), i) {
      const a = i.call(this, l, pt);
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
      defaultBtnProps: r,
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
function ku({
  key: e,
  type: n,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ _(Lc, { type: t, ...s });
}
var Ae;
let rn = (Ae = class extends Zi {
  beforeRender() {
    const { gap: n, btnProps: t, wrap: s, ...i } = super.beforeRender();
    return i.className = D(i.className, s ? "flex-wrap" : "", typeof n == "number" ? `gap-${n}` : ""), typeof n == "string" && (i.style ? i.style.gap = n : i.style = { gap: n }), i;
  }
  isBtnItem(n) {
    return n === "item" || n === "dropdown";
  }
  renderTypedItem(n, t, s) {
    const i = this.isBtnItem(s.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, o = {
      ...t,
      ...i,
      ...s,
      className: D(`${this.name}-${s.type}`, t.className, i.className, s.className),
      style: Object.assign({}, t.style, i.style, s.style)
    };
    return /* @__PURE__ */ _(n, { ...o });
  }
}, v(Ae, "ItemComponents", {
  item: nu,
  dropdown: Tc,
  "btn-group": ku
}), v(Ae, "ROOT_TAG", "nav"), v(Ae, "NAME", "toolbar"), v(Ae, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), Ae);
function Ru({
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
  l === !0 ? h = /* @__PURE__ */ _(At, { className: "alert-close btn ghost", square: !0, onClick: a, children: /* @__PURE__ */ _("span", { class: "close" }) }) : st(l) ? h = l : typeof l == "object" && (h = /* @__PURE__ */ _(At, { ...l, onClick: a }));
  const d = st(t) ? t : t ? /* @__PURE__ */ _(rn, { ...t }) : null;
  return /* @__PURE__ */ _("div", { className: D("alert", e), style: n, ...c, children: [
    st(u) ? u : typeof u == "string" ? /* @__PURE__ */ _("i", { className: `icon ${u}` }) : null,
    st(i) ? i : /* @__PURE__ */ _("div", { className: D("alert-content", o), children: [
      st(s) ? s : s && /* @__PURE__ */ _("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ _("div", { className: "alert-text", children: i }),
      s ? d : null
    ] }),
    s ? null : d,
    h,
    r
  ] });
}
function Tu(e) {
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
let Lu = class extends B {
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
      Ru,
      {
        className: D("messager", a, i, r === !0 ? Tu(o) : r, l ? "in" : ""),
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
}, v(vs, "NAME", "MessagerItem"), v(vs, "EVENTS", !0), v(vs, "Component", Lu);
var ge, Fe, It, Ys, Ac, Ks, Nc;
const cr = class extends Lt {
  constructor() {
    super(...arguments);
    w(this, Ys);
    w(this, Ks);
    w(this, ge, void 0);
    w(this, Fe, us(6));
    w(this, It, void 0);
  }
  get id() {
    return p(this, Fe);
  }
  get isShown() {
    var t;
    return !!((t = p(this, It)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), C(this, Ys, Ac).call(this).show();
  }
  hide() {
    var t;
    (t = p(this, It)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: s, ...i } = t, o = new cr(s || "body", i);
    return o.show(), o;
  }
};
let fn = cr;
ge = new WeakMap(), Fe = new WeakMap(), It = new WeakMap(), Ys = new WeakSet(), Ac = function() {
  if (p(this, It))
    p(this, It).setOptions(this.options);
  else {
    const t = C(this, Ks, Nc).call(this), s = new vs(t, this.options);
    s.on("hidden", () => {
      s.destroy(), t.remove(), k(this, ge, void 0);
    }), k(this, It, s);
  }
  return p(this, It);
}, Ks = new WeakSet(), Nc = function() {
  if (p(this, ge))
    return p(this, ge);
  const { placement: t = "top" } = this.options;
  let s = this.element.querySelector(`.messagers-${t}`);
  s || (s = document.createElement("div"), s.className = `messagers messagers-${t}`, this.element.appendChild(s));
  let i = s.querySelector(`#messager-${p(this, Fe)}`);
  return i || (i = document.createElement("div"), i.className = "messager-holder", i.id = `messager-${p(this, Fe)}`, s.appendChild(i), k(this, ge, i)), i;
}, v(fn, "NAME", "messager"), v(fn, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
T(document).on("zui.messager.show", (e, n) => {
  n && fn.show(n);
});
var _s;
let Au = (_s = class extends B {
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
class Vr extends X {
}
v(Vr, "NAME", "table-sorter"), v(Vr, "Component", Au);
let Nu = class extends B {
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
    return pt(
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
class qr extends X {
}
v(qr, "NAME", "switch"), v(qr, "Component", Nu);
function Mu(e) {
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
function Du(e, n) {
  const t = typeof e == "string" ? document.querySelector(e) : e;
  if (!t)
    return !1;
  const s = t.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (n != null && n.fullyCheck)
    return s.left >= 0 && s.top >= 0 && s.left + s.width <= o && s.top + s.height <= i;
  const r = s.top <= i && s.top + s.height >= 0, l = s.left <= o && s.left + s.width >= 0;
  return r && l;
}
const ud = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: D,
  getClassList: Ji,
  isElementVisible: Du,
  selectText: Mu
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
function $o(e, n) {
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
        return $o(this.converter, gs({}, this.attributes, i));
      },
      withConverter: function(i) {
        return $o(gs({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(n) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var Pu = $o(Ou, { path: "/" });
window.$ && Object.assign(window.$, { cookie: Pu });
var Mc = function(e, n, t, s) {
  var i;
  n[0] = 0;
  for (var o = 1; o < n.length; o++) {
    var r = n[o++], l = n[o] ? (n[0] |= r ? 1 : 2, t[n[o++]]) : n[++o];
    r === 3 ? s[0] = l : r === 4 ? s[1] = Object.assign(s[1] || {}, l) : r === 5 ? (s[1] = s[1] || {})[n[++o]] = l : r === 6 ? s[1][n[++o]] += l + "" : r ? (i = e.apply(l, Mc(e, l, t, ["", null])), s.push(i), l[0] ? n[0] |= 2 : (n[o - 2] = 0, n[o] = i)) : s.push(l);
  }
  return s;
}, Gr = /* @__PURE__ */ new Map();
function Dc(e) {
  var n = Gr.get(this);
  return n || (n = /* @__PURE__ */ new Map(), Gr.set(this, n)), (n = Mc(this, n.get(e) || (n.set(e, n = function(t) {
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
var Hu = Dc.bind(pt);
Object.assign(window, { htm: Dc, html: Hu, preact: Xa });
var Hn, Kt, xt, Ue, Ve, Ss;
const ar = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(n, t = "local") {
    w(this, Ve);
    w(this, Hn, void 0);
    w(this, Kt, void 0);
    w(this, xt, void 0);
    w(this, Ue, void 0);
    k(this, Hn, t), k(this, Kt, `ZUI_STORE:${n ?? us()}`), k(this, xt, t === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return p(this, Hn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (p(this, Ue) || k(this, Ue, new ar(p(this, Kt), "session")), p(this, Ue));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(n, t) {
    const s = p(this, xt).getItem(C(this, Ve, Ss).call(this, n));
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
    p(this, xt).setItem(C(this, Ve, Ss).call(this, n), JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(n) {
    p(this, xt).removeItem(C(this, Ve, Ss).call(this, n));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(n) {
    for (let t = 0; t < p(this, xt).length; t++) {
      const s = p(this, xt).key(t);
      if (s != null && s.startsWith(p(this, Kt))) {
        const i = p(this, xt).getItem(s);
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
let Is = ar;
Hn = new WeakMap(), Kt = new WeakMap(), xt = new WeakMap(), Ue = new WeakMap(), Ve = new WeakSet(), Ss = function(n) {
  return `${p(this, Kt)}:${n}`;
};
const Iu = new Is("DEFAULT");
function Wu(e, n = "local") {
  return new Is(e, n);
}
Object.assign(Iu, { create: Wu });
function ju(e) {
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
function Bu(e) {
  const [n, t, s] = typeof e == "string" ? ju(e) : e;
  return n * 0.299 + t * 0.587 + s * 0.114 > 186;
}
function Yr(e, n) {
  return Bu(e) ? (n == null ? void 0 : n.dark) ?? "#333333" : (n == null ? void 0 : n.light) ?? "#ffffff";
}
function Kr(e, n = 255) {
  return Math.min(Math.max(e, 0), n);
}
function zu(e, n, t) {
  e = e % 360 / 360, n = Kr(n), t = Kr(t);
  const s = t <= 0.5 ? t * (n + 1) : t + n - t * n, i = t * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function Fu(e) {
  let n = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let t = 0; t < e.length; ++t)
      n += (t + 1) * e.charCodeAt(t);
  return n;
}
function Uu(e, n) {
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
    let R;
    if (h)
      b.push("has-img"), R = /* @__PURE__ */ _("img", { className: "avatar-img", src: h, alt: a });
    else if (a != null && a.length) {
      const L = Uu(a, c);
      if (b.push("has-text", `has-text-${L.length}`), r)
        !l && r && (x.color = Yr(r));
      else {
        const M = u ?? a, N = (typeof M == "number" ? M : Fu(M)) * d % 360;
        if (x.background = `hsl(${N},${f * 100}%,${m * 100}%)`, !l) {
          const H = zu(N, f, m);
          x.color = Yr(H);
        }
      }
      let A;
      S && S < 14 * L.length && (A = { transform: `scale(${S / (14 * L.length)})`, whiteSpace: "nowrap" }), R = /* @__PURE__ */ _("div", { "data-actualSize": S, className: "avatar-text", style: A, children: L });
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
class Xr extends X {
}
v(Xr, "NAME", "avatar"), v(Xr, "Component", Oc);
class Jr extends X {
}
v(Jr, "NAME", "btngroup"), v(Jr, "Component", Lc);
function Pc(e, n, t) {
  if (t) {
    e.setAttribute("class", D(n));
    return;
  }
  Ji(e.getAttribute("class"), n).forEach(([s, i]) => {
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
var ye, In, Xt, Xs, qe, Es;
const Z = class extends Lt {
  constructor() {
    super(...arguments);
    w(this, qe);
    w(this, ye, 0);
    w(this, In, void 0);
    w(this, Xt, void 0);
    w(this, Xs, (t) => {
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
    if (this.on("click", p(this, Xs)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: t } = this;
      if (t) {
        const s = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const i = t.clientWidth, o = t.clientHeight;
          (!p(this, Xt) || p(this, Xt)[0] !== i || p(this, Xt)[1] !== o) && (k(this, Xt, [i, o]), this.layout());
        });
        s.observe(t), k(this, In, s);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var t;
    super.destroy(), (t = p(this, In)) == null || t.disconnect();
  }
  show(t) {
    if (this.isShown)
      return !1;
    this.setOptions(t);
    const { modalElement: s } = this, { animation: i, backdrop: o, className: r, style: l } = this.options;
    return Pc(s, [{
      "modal-trans": i,
      "modal-no-backdrop": !o
    }, Z.CLASS_SHOW, r]), dn(s, {
      zIndex: `${Z.zIndex++}`,
      ...l
    }), this.layout(), this.emit("show", this), C(this, qe, Es).call(this, () => {
      s.classList.add(Z.CLASS_SHOWN), C(this, qe, Es).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(Z.CLASS_SHOWN), this.emit("hide", this), C(this, qe, Es).call(this, () => {
      this.modalElement.classList.remove(Z.CLASS_SHOW), this.emit("hidden", this);
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
    k(this, Xt, [r, l]), typeof t == "function" && (t = t({ width: r, height: l }));
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
ye = new WeakMap(), In = new WeakMap(), Xt = new WeakMap(), Xs = new WeakMap(), qe = new WeakSet(), Es = function(t, s) {
  p(this, ye) && (clearTimeout(p(this, ye)), k(this, ye, 0)), t && (this.options.animation ? k(this, ye, window.setTimeout(t, s ?? this.options.transTime)) : t());
}, v(tt, "NAME", "Modal"), v(tt, "EVENTS", !0), v(tt, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), v(tt, "CLASS_SHOW", "show"), v(tt, "CLASS_SHOWN", "in"), v(tt, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), v(tt, "zIndex", 2e3);
T(window).on("resize", () => {
  tt.all.forEach((e) => {
    const n = e;
    n.isShown && n.options.responsive && n.layout();
  });
});
T(document).on("zui.modal.hide", (e, n) => {
  tt.hide(n == null ? void 0 : n.target);
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
    return st(n) ? n : n === !1 || !t ? null : /* @__PURE__ */ _("div", { className: "modal-header", children: /* @__PURE__ */ _("div", { className: "modal-title", children: t }) });
  }
  renderActions() {
    const {
      actions: n,
      closeBtn: t
    } = this.props;
    return !t && !n ? null : st(n) ? n : /* @__PURE__ */ _("div", { className: "modal-actions", children: [
      n ? /* @__PURE__ */ _(rn, { ...n }) : null,
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
    return st(n) ? n : n === !1 || !t ? null : /* @__PURE__ */ _("div", { className: "modal-footer", children: t ? /* @__PURE__ */ _(rn, { ...t }) : null });
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
class Vu extends B {
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
      }), s.observe(t.body), s.observe(t.documentElement), k(this, Ge, s);
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
function Ic(e) {
  const n = e.querySelectorAll("script");
  n && n.forEach((t) => {
    const s = document.createElement("script");
    s.type = t.type || "text/javascript", s.async = !1, s.innerHTML = t.innerHTML, e.appendChild(s), t.remove();
  });
}
var Bn;
class Wc extends B {
  constructor() {
    super(...arguments);
    w(this, Bn, le());
  }
  componentDidMount() {
    if (!this.props.executeScript)
      return;
    const t = p(this, Bn).current;
    t && Ic(t);
  }
  render() {
    const { executeScript: t, html: s, ...i } = this.props;
    return /* @__PURE__ */ _("div", { ref: p(this, Bn), dangerouslySetInnerHTML: { __html: s }, ...i });
  }
}
Bn = new WeakMap();
function qu(e, n) {
  const { custom: t, title: s, content: i } = n;
  return {
    body: i,
    title: s,
    ...typeof t == "function" ? t() : t
  };
}
async function Gu(e, n) {
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
    body: t === "html" ? /* @__PURE__ */ _(Wc, { className: "modal-body", html: c, executeScript: a }) : c
  };
}
async function Yu(e, n) {
  const { url: t, custom: s, title: i } = n;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ _(Vu, { url: t })
  };
}
const Ku = {
  custom: qu,
  ajax: Gu,
  iframe: Yu
};
var zn, Fn, St, Ye, Cs, Js, jc, Un, ko;
const Dt = class extends tt {
  constructor() {
    super(...arguments);
    w(this, Ye);
    w(this, Js);
    w(this, Un);
    w(this, zn, void 0);
    w(this, Fn, void 0);
    w(this, St, void 0);
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
      }), Pc(t, ["modal modal-async", this.options.className]), this.element.appendChild(t)), k(this, zn, t);
    }
    return t;
  }
  afterInit() {
    super.afterInit(), k(this, Fn, this.options.id || `modal-${us()}`);
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
    const { modalElement: t, options: s } = this, { type: i, loadTimeout: o } = s, r = Ku[i];
    if (!r)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    t.classList.add(Dt.LOADING_CLASS), await C(this, Js, jc).call(this), o && k(this, St, window.setTimeout(() => {
      k(this, St, 0), C(this, Un, ko).call(this, this.options.timeoutTip);
    }, o));
    const l = await r.call(this, t, s);
    return l === !1 ? await C(this, Un, ko).call(this, this.options.failedTip) : l && typeof l == "object" && await C(this, Ye, Cs).call(this, l), p(this, St) && (clearTimeout(p(this, St)), k(this, St, 0)), t.classList.remove(Dt.LOADING_CLASS), !0;
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
      }, typeof g.key == "string" && (g.text || (g.text = Al(g.key, g.key)), g.btnType || (g.btnType = `btn-wide ${g.key === "confirm" ? "primary" : "btn-default"}`)), g && d.push(g);
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
zn = new WeakMap(), Fn = new WeakMap(), St = new WeakMap(), Ye = new WeakSet(), Cs = function(t) {
  return new Promise((s) => {
    if (Array.isArray(t))
      return this.modalElement.innerHTML = t[0], Ic(this.modalElement), s();
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
}, Js = new WeakSet(), jc = function() {
  const { loadingText: t } = this.options;
  return C(this, Ye, Cs).call(this, {
    body: /* @__PURE__ */ _("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ _("span", { className: "spinner" }),
      t ? /* @__PURE__ */ _("span", { className: "modal-loading-text", children: t }) : null
    ] })
  });
}, Un = new WeakSet(), ko = function(t) {
  if (t)
    return C(this, Ye, Cs).call(this, {
      body: /* @__PURE__ */ _("div", { className: "modal-load-failed", children: t })
    });
}, v(pn, "LOADING_CLASS", "loading"), v(pn, "DEFAULT", {
  ...tt.DEFAULT,
  loadTimeout: 1e4
});
var Jt, Zs, Bc, Qs, zc, ti, Fc;
class Sn extends Lt {
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
    return C(this, Qs, zc).call(this).show();
  }
  hide() {
    var t;
    (t = p(this, Jt)) == null || t.hide();
  }
}
Jt = new WeakMap(), Zs = new WeakSet(), Bc = function() {
  const {
    container: t,
    ...s
  } = this.options, i = s, o = this.element.getAttribute("href") || "";
  return i.type || (i.target || o[0] === "#" ? i.type = "static" : i.type = i.type || (i.url || o ? "ajax" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && o[0] !== "#" && (i.url = o), i;
}, Qs = new WeakSet(), zc = function() {
  const t = C(this, Zs, Bc).call(this);
  let s = p(this, Jt);
  return s ? s.setOptions(t) : t.type === "static" ? (s = new tt(C(this, ti, Fc).call(this), t), k(this, Jt, s)) : (s = new pn(this.container, t), k(this, Jt, s)), s;
}, ti = new WeakSet(), Fc = function() {
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
var yo;
let Xu = (yo = class extends Zi {
  beforeRender() {
    const n = super.beforeRender();
    return n.className = D(n.className, n.type ? `nav-${n.type}` : "", {
      "nav-stacked": n.stacked
    }), n;
  }
}, v(yo, "NAME", "nav"), yo);
class Zr extends X {
}
v(Zr, "NAME", "nav"), v(Zr, "Component", Xu);
function Ln(e, n) {
  const t = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof n == "string" && (n === "first" ? n = 1 : n === "last" ? n = t : n === "prev" ? n = e.page - 1 : n === "next" ? n = e.page + 1 : n === "current" ? n = e.page : n = Number.parseInt(n, 10)), n = n !== void 0 ? Math.max(1, Math.min(n < 0 ? t + n : n, t)) : e.page, {
    ...e,
    pageTotal: t,
    page: n
  };
}
function Ju({
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
  return l.text === void 0 && !l.icon && i && (l.text = typeof i == "function" ? i(a) : rt(i, a)), l.url === void 0 && r && (l.url = typeof r == "function" ? r(a) : rt(r, a)), l.disabled === void 0 && (l.disabled = s !== void 0 && a.page === o.page), /* @__PURE__ */ _(At, { type: t, ...l });
}
const Ot = 24 * 60 * 60 * 1e3, ct = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), fs = (e, n = /* @__PURE__ */ new Date()) => (e = ct(e), n = ct(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate()), Ro = (e, n = /* @__PURE__ */ new Date()) => ct(e).getFullYear() === ct(n).getFullYear(), Zu = (e, n = /* @__PURE__ */ new Date()) => (e = ct(e), n = ct(n), e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth()), pd = (e, n = /* @__PURE__ */ new Date()) => {
  e = ct(e), n = ct(n);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / t), i = Math.floor(n.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, md = (e, n) => fs(ct(n), e), gd = (e, n) => fs(ct(n).getTime() - Ot, e), yd = (e, n) => fs(ct(n).getTime() + Ot, e), _d = (e, n) => fs(ct(n).getTime() - 2 * Ot, e), To = (e, n = "yyyy-MM-dd hh:mm") => {
  e = ct(e);
  const t = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(n) && (n.includes("[yyyy-]") && (n = n.replace("[yyyy-]", Ro(e) ? "" : "yyyy-")), n = n.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(t).forEach((s) => {
    if (new RegExp(`(${s})`).test(n)) {
      const i = `${t[s]}`;
      n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), n;
}, bd = (e, n, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = To(e, Ro(e) ? s.month : s.full);
  if (fs(e, n))
    return i;
  const o = To(n, Ro(e, n) ? Zu(e, n) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
}, wd = (e) => {
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
}, Qr = (e, n, t = !0, s = Date.now()) => {
  switch (n) {
    case "year":
      return e *= 365, Qr(e, "day", t, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, Qr(e, "day", t, s);
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
function Qu({
  key: e,
  type: n,
  page: t,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const l = Ln(i, t);
  return s = typeof s == "function" ? s(l) : rt(s, l), /* @__PURE__ */ _(ac, { ...r, children: [
    o,
    s
  ] });
}
function tf({
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
  const a = { ...l, square: !0 }, u = () => (a.text = "", a.icon = "icon-ellipsis-h", a.disabled = !0, /* @__PURE__ */ _(At, { type: t, ...a })), c = (d, f) => {
    const m = [];
    for (let g = d; g <= f; g++) {
      a.text = g, delete a.icon, a.disabled = !1;
      const y = Ln(i, g);
      r && (a.url = typeof r == "function" ? r(y) : rt(r, y)), m.push(/* @__PURE__ */ _(At, { type: t, ...a, onClick: o }));
    }
    return m;
  };
  let h = [];
  return h = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? h = [...h, ...c(2, i.pageTotal)] : i.page < s - 2 ? h = [...h, ...c(2, s - 2), u(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? h = [...h, u(), ...c(i.pageTotal - s + 3, i.pageTotal)] : h = [...h, u(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), u(), ...c(i.pageTotal, i.pageTotal)]), h;
}
function ef({
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
  return o.text = typeof r == "function" ? r(n) : rt(r, n), i.menu = { ...i.menu, className: D((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ _(Tc, { type: "dropdown", dropdown: i, ...o });
}
function nf({
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
    const y = Ln(i, h);
    l && !l({ info: y, event: g }) || (g.target.href = c.url = typeof a == "function" ? a(y) : rt(a, y));
  }, m = Ln(i, n || 0);
  return c.url = typeof a == "function" ? a(m) : rt(a, m), /* @__PURE__ */ _("div", { className: D("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ _("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ _(At, { type: s, ...c, onClick: f })
  ] });
}
var hn;
let sf = (hn = class extends rn {
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
  link: Ju,
  info: Qu,
  nav: tf,
  "size-menu": ef,
  goto: nf
}), hn);
class tl extends X {
}
v(tl, "NAME", "pager"), v(tl, "Component", sf);
var ei;
class of extends B {
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
class rf extends B {
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
var si, Uc, Vn, ii, qn, oi;
class lf extends B {
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
      /* @__PURE__ */ _(er, { className: "picker-menu-list", items: C(this, si, Uc).call(this), onClickItem: p(this, ii), ...u })
    ] });
  }
}
si = new WeakSet(), Uc = function() {
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
function el(e) {
  const n = /* @__PURE__ */ new Set();
  return e.reduce((t, s) => (n.has(s) || (n.add(s), t.push(s)), t), []);
}
var _o, Gn, Yn, Kn, Ke, $s, Xn, Lo, ri, Vc, li, qc, ci, ai, hi, ui, fi, Gc;
let cf = (_o = class extends B {
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
      value: C(this, ri, Vc).call(this, t.defaultValue) ?? "",
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
    return C(this, Xn, Lo).call(this, this.state.value);
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
      const i = ++gr(this, Gn)._;
      if (await C(this, Ke, $s).call(this, { loading: !0, items: [] }), t = await t(), p(this, Gn) !== i)
        return [];
    }
    const s = {};
    return Array.isArray(t) && this.state.items !== t && (s.items = t), this.state.loading && (s.loading = !1), Object.keys(s).length && await C(this, Ke, $s).call(this, s), t;
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
    await C(this, Ke, $s).call(this, { open: t }), t && this.loadItemList();
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
    } = this.props, r = o ? of : rf;
    return /* @__PURE__ */ _("div", { className: D("picker", t), style: s, id: `picker-${p(this, Yn)}`, children: [
      /* @__PURE__ */ _(r, { ...C(this, li, qc).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ _(lf, { ...C(this, fi, Gc).call(this), ref: p(this, Kn) }) : null
    ] });
  }
}, Gn = new WeakMap(), Yn = new WeakMap(), Kn = new WeakMap(), Ke = new WeakSet(), $s = function(t) {
  return new Promise((s) => {
    this.setState(t, s);
  });
}, Xn = new WeakSet(), Lo = function(t) {
  return typeof t == "string" ? el(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) ? el(t) : [];
}, ri = new WeakSet(), Vc = function(t) {
  const s = C(this, Xn, Lo).call(this, t);
  return s.length ? s.join(this.props.valueSplitter ?? ",") : void 0;
}, li = new WeakSet(), qc = function() {
  const { placeholder: t, disabled: s } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: t,
    disabled: s,
    selections: this.getSelections(),
    onClick: p(this, ai),
    onDeselect: p(this, ci)
  };
}, ci = new WeakMap(), ai = new WeakMap(), hi = new WeakMap(), ui = new WeakMap(), fi = new WeakSet(), Gc = function() {
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
}, v(_o, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), _o);
class nl extends X {
}
v(nl, "NAME", "picker"), v(nl, "Component", cf);
class sl extends X {
}
v(sl, "NAME", "toolbar"), v(sl, "Component", rn);
function ds(e) {
  return e.split("-")[1];
}
function ir(e) {
  return e === "y" ? "height" : "width";
}
function Me(e) {
  return e.split("-")[0];
}
function eo(e) {
  return ["top", "bottom"].includes(Me(e)) ? "x" : "y";
}
function il(e, n, t) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, l = eo(n), a = ir(l), u = s[a] / 2 - i[a] / 2, c = l === "x";
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
const af = async (e, n, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let u = await r.getElementRects({ reference: e, floating: n, strategy: i }), { x: c, y: h } = il(u, s, a), d = s, f = {}, m = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: y, fn: b } = l[g], { x, y: S, data: R, reset: L } = await b({ x: c, y: h, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: u, platform: r, elements: { reference: e, floating: n } });
    c = x ?? c, h = S ?? h, f = { ...f, [y]: { ...f[y], ...R } }, L && m <= 50 && (m++, typeof L == "object" && (L.placement && (d = L.placement), L.rects && (u = L.rects === !0 ? await r.getElementRects({ reference: e, floating: n, strategy: i }) : L.rects), { x: c, y: h } = il(u, d, a)), g = -1);
  }
  return { x: c, y: h, placement: d, strategy: i, middlewareData: f };
};
function Yc(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function js(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function hf(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: s, y: i, platform: o, rects: r, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: h = "floating", altBoundary: d = !1, padding: f = 0 } = n, m = Yc(f), g = l[d ? h === "floating" ? "reference" : "floating" : h], y = js(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(g))) == null || t ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: u, rootBoundary: c, strategy: a })), b = h === "floating" ? { ...r.floating, x: s, y: i } : r.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), S = await (o.isElement == null ? void 0 : o.isElement(x)) && await (o.getScale == null ? void 0 : o.getScale(x)) || { x: 1, y: 1 }, R = js(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: b, offsetParent: x, strategy: a }) : b);
  return { top: (y.top - R.top + m.top) / S.y, bottom: (R.bottom - y.bottom + m.bottom) / S.y, left: (y.left - R.left + m.left) / S.x, right: (R.right - y.right + m.right) / S.x };
}
const uf = Math.min, ff = Math.max;
function df(e, n, t) {
  return ff(e, uf(n, t));
}
const pf = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { element: t, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: l, platform: a } = n;
  if (t == null)
    return {};
  const u = Yc(s), c = { x: i, y: o }, h = eo(r), d = ir(h), f = await a.getDimensions(t), m = h === "y" ? "top" : "left", g = h === "y" ? "bottom" : "right", y = l.reference[d] + l.reference[h] - c[h] - l.floating[d], b = c[h] - l.reference[h], x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(t));
  let S = x ? h === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
  S === 0 && (S = l.floating[d]);
  const R = y / 2 - b / 2, L = u[m], A = S - f[d] - u[g], M = S / 2 - f[d] / 2 + R, N = df(L, M, A), H = ds(r) != null && M != N && l.reference[d] / 2 - (M < L ? u[m] : u[g]) - f[d] / 2 < 0;
  return { [h]: c[h] - (H ? M < L ? L - M : A - M : 0), data: { [h]: N, centerOffset: M - N } };
} }), mf = ["top", "right", "bottom", "left"];
mf.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const gf = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Bs(e) {
  return e.replace(/left|right|bottom|top/g, (n) => gf[n]);
}
function yf(e, n, t) {
  t === void 0 && (t = !1);
  const s = ds(e), i = eo(e), o = ir(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = Bs(r)), { main: r, cross: Bs(r) };
}
const _f = { start: "end", end: "start" };
function uo(e) {
  return e.replace(/start|end/g, (n) => _f[n]);
}
const bf = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: l, elements: a } = n, { mainAxis: u = !0, crossAxis: c = !0, fallbackPlacements: h, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: m = !0, ...g } = e, y = Me(s), b = Me(r) === r, x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), S = h || (b || !m ? [Bs(r)] : function($) {
      const I = Bs($);
      return [uo($), I, uo(I)];
    }(r));
    h || f === "none" || S.push(...function($, I, q, it) {
      const U = ds($);
      let P = function(V, bt, he) {
        const ue = ["left", "right"], fe = ["right", "left"], Mt = ["top", "bottom"], Re = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return he ? bt ? fe : ue : bt ? ue : fe;
          case "left":
          case "right":
            return bt ? Mt : Re;
          default:
            return [];
        }
      }(Me($), q === "start", it);
      return U && (P = P.map((V) => V + "-" + U), I && (P = P.concat(P.map(uo)))), P;
    }(r, m, f, x));
    const R = [r, ...S], L = await hf(n, g), A = [];
    let M = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (u && A.push(L[y]), c) {
      const { main: $, cross: I } = yf(s, o, x);
      A.push(L[$], L[I]);
    }
    if (M = [...M, { placement: s, overflows: A }], !A.every(($) => $ <= 0)) {
      var N;
      const $ = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, I = R[$];
      if (I)
        return { data: { index: $, overflows: M }, reset: { placement: I } };
      let q = "bottom";
      switch (d) {
        case "bestFit": {
          var H;
          const it = (H = M.map((U) => [U, U.overflows.filter((P) => P > 0).reduce((P, V) => P + V, 0)]).sort((U, P) => U[1] - P[1])[0]) == null ? void 0 : H[0].placement;
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
}, wf = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: s } = n, i = await async function(o, r) {
      const { placement: l, platform: a, elements: u } = o, c = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), h = Me(l), d = ds(l), f = eo(l) === "x", m = ["left", "top"].includes(h) ? -1 : 1, g = c && f ? -1 : 1, y = typeof r == "function" ? r(o) : r;
      let { mainAxis: b, crossAxis: x, alignmentAxis: S } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return d && typeof S == "number" && (x = d === "end" ? -1 * S : S), f ? { x: x * g, y: b * m } : { x: b * m, y: x * g };
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
function re(e) {
  return Xc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ys;
function Kc() {
  if (ys)
    return ys;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ys = e.brands.map((n) => n.brand + "/" + n.version).join(" "), ys) : navigator.userAgent;
}
function Vt(e) {
  return e instanceof dt(e).HTMLElement;
}
function _t(e) {
  return e instanceof dt(e).Element;
}
function Xc(e) {
  return e instanceof dt(e).Node;
}
function ol(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof dt(e).ShadowRoot || e instanceof ShadowRoot;
}
function no(e) {
  const { overflow: n, overflowX: t, overflowY: s, display: i } = Tt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + s + t) && !["inline", "contents"].includes(i);
}
function vf(e) {
  return ["table", "td", "th"].includes(re(e));
}
function Ao(e) {
  const n = /firefox/i.test(Kc()), t = Tt(e), s = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!s && s !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function Jc() {
  return !/^((?!chrome|android).)*safari/i.test(Kc());
}
function or(e) {
  return ["html", "body", "#document"].includes(re(e));
}
const rl = Math.min, En = Math.max, zs = Math.round;
function Zc(e) {
  const n = Tt(e);
  let t = parseFloat(n.width), s = parseFloat(n.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = zs(t) !== i || zs(s) !== o;
  return r && (t = i, s = o), { width: t, height: s, fallback: r };
}
function Qc(e) {
  return _t(e) ? e : e.contextElement;
}
const ta = { x: 1, y: 1 };
function De(e) {
  const n = Qc(e);
  if (!Vt(n))
    return ta;
  const t = n.getBoundingClientRect(), { width: s, height: i, fallback: o } = Zc(n);
  let r = (o ? zs(t.width) : t.width) / s, l = (o ? zs(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
function Ee(e, n, t, s) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), l = Qc(e);
  let a = ta;
  n && (s ? _t(s) && (a = De(s)) : a = De(e));
  const u = l ? dt(l) : window, c = !Jc() && t;
  let h = (r.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, d = (r.top + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / a.y, f = r.width / a.x, m = r.height / a.y;
  if (l) {
    const g = dt(l), y = s && _t(s) ? dt(s) : s;
    let b = g.frameElement;
    for (; b && s && y !== g; ) {
      const x = De(b), S = b.getBoundingClientRect(), R = getComputedStyle(b);
      S.x += (b.clientLeft + parseFloat(R.paddingLeft)) * x.x, S.y += (b.clientTop + parseFloat(R.paddingTop)) * x.y, h *= x.x, d *= x.y, f *= x.x, m *= x.y, h += S.x, d += S.y, b = dt(b).frameElement;
    }
  }
  return { width: f, height: m, top: d, right: h + f, bottom: d + m, left: h, x: h, y: d };
}
function se(e) {
  return ((Xc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function so(e) {
  return _t(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ea(e) {
  return Ee(se(e)).left + so(e).scrollLeft;
}
function xf(e, n, t) {
  const s = Vt(n), i = se(n), o = Ee(e, !0, t === "fixed", n);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && t !== "fixed")
    if ((re(n) !== "body" || no(i)) && (r = so(n)), Vt(n)) {
      const a = Ee(n, !0);
      l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
    } else
      i && (l.x = ea(i));
  return { x: o.left + r.scrollLeft - l.x, y: o.top + r.scrollTop - l.y, width: o.width, height: o.height };
}
function An(e) {
  if (re(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || (ol(e) ? e.host : null) || se(e);
  return ol(n) ? n.host : n;
}
function ll(e) {
  return Vt(e) && Tt(e).position !== "fixed" ? e.offsetParent : null;
}
function cl(e) {
  const n = dt(e);
  let t = ll(e);
  for (; t && vf(t) && Tt(t).position === "static"; )
    t = ll(t);
  return t && (re(t) === "html" || re(t) === "body" && Tt(t).position === "static" && !Ao(t)) ? n : t || function(s) {
    let i = An(s);
    for (; Vt(i) && !or(i); ) {
      if (Ao(i))
        return i;
      i = An(i);
    }
    return null;
  }(e) || n;
}
function na(e) {
  const n = An(e);
  return or(n) ? e.ownerDocument.body : Vt(n) && no(n) ? n : na(n);
}
function Cn(e, n) {
  var t;
  n === void 0 && (n = []);
  const s = na(e), i = s === ((t = e.ownerDocument) == null ? void 0 : t.body), o = dt(s);
  return i ? n.concat(o, o.visualViewport || [], no(s) ? s : []) : n.concat(s, Cn(s));
}
function al(e, n, t) {
  return n === "viewport" ? js(function(s, i) {
    const o = dt(s), r = se(s), l = o.visualViewport;
    let a = r.clientWidth, u = r.clientHeight, c = 0, h = 0;
    if (l) {
      a = l.width, u = l.height;
      const d = Jc();
      (d || !d && i === "fixed") && (c = l.offsetLeft, h = l.offsetTop);
    }
    return { width: a, height: u, x: c, y: h };
  }(e, t)) : _t(n) ? function(s, i) {
    const o = Ee(s, !0, i === "fixed"), r = o.top + s.clientTop, l = o.left + s.clientLeft, a = Vt(s) ? De(s) : { x: 1, y: 1 }, u = s.clientWidth * a.x, c = s.clientHeight * a.y, h = l * a.x, d = r * a.y;
    return { top: d, left: h, right: h + u, bottom: d + c, x: h, y: d, width: u, height: c };
  }(n, t) : js(function(s) {
    var i;
    const o = se(s), r = so(s), l = (i = s.ownerDocument) == null ? void 0 : i.body, a = En(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), u = En(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0);
    let c = -r.scrollLeft + ea(s);
    const h = -r.scrollTop;
    return Tt(l || o).direction === "rtl" && (c += En(o.clientWidth, l ? l.clientWidth : 0) - a), { width: a, height: u, x: c, y: h };
  }(se(e)));
}
const Sf = { getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: s, strategy: i } = e;
  const o = t === "clippingAncestors" ? function(u, c) {
    const h = c.get(u);
    if (h)
      return h;
    let d = Cn(u).filter((y) => _t(y) && re(y) !== "body"), f = null;
    const m = Tt(u).position === "fixed";
    let g = m ? An(u) : u;
    for (; _t(g) && !or(g); ) {
      const y = Tt(g), b = Ao(g);
      (m ? b || f : b || y.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = y : d = d.filter((x) => x !== g), g = An(g);
    }
    return c.set(u, d), d;
  }(n, this._c) : [].concat(t), r = [...o, s], l = r[0], a = r.reduce((u, c) => {
    const h = al(n, c, i);
    return u.top = En(h.top, u.top), u.right = rl(h.right, u.right), u.bottom = rl(h.bottom, u.bottom), u.left = En(h.left, u.left), u;
  }, al(n, l, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: s } = e;
  const i = Vt(t), o = se(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((re(t) !== "body" || no(o)) && (r = so(t)), Vt(t))) {
    const u = Ee(t);
    l = De(t), a.x = u.x + t.clientLeft, a.y = u.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - r.scrollLeft * l.x + a.x, y: n.y * l.y - r.scrollTop * l.y + a.y };
}, isElement: _t, getDimensions: function(e) {
  return Zc(e);
}, getOffsetParent: cl, getDocumentElement: se, getScale: De, async getElementRects(e) {
  let { reference: n, floating: t, strategy: s } = e;
  const i = this.getOffsetParent || cl, o = this.getDimensions;
  return { reference: xf(n, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Tt(e).direction === "rtl" };
function Ef(e, n, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: l = !1 } = s, a = i && !l, u = a || o ? [..._t(e) ? Cn(e) : e.contextElement ? Cn(e.contextElement) : [], ...Cn(n)] : [];
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
const Cf = (e, n, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Sf, ...t }, o = { ...i.platform, _c: s };
  return af(e, n, { ...i, platform: o });
};
var Xe, Je, Ze, _e, Q, di, Jn, Zn, No, pi, sa, mi, ia, gi, oa, yi, ra, _i, la, bi, ca, wi, aa, Qe, vi, ha;
const pe = class extends Lt {
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
    w(this, Q, void 0);
    w(this, di, void 0);
    w(this, Jn, void 0);
    v(this, "hideLater", () => {
      p(this, Qe).call(this), k(this, Ze, window.setTimeout(this.hide.bind(this), 100));
    });
    w(this, Qe, () => {
      clearTimeout(p(this, Ze)), k(this, Ze, 0);
    });
  }
  get isShown() {
    var t;
    return (t = p(this, _e)) == null ? void 0 : t.classList.contains(pe.CLASS_SHOW);
  }
  get tooltip() {
    return p(this, _e) || C(this, mi, ia).call(this);
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
    return this.setOptions(t), !p(this, Xe) && this.isHover && C(this, vi, ha).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(pe.CLASS_SHOW), C(this, bi, ca).call(this), !0;
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
Xe = new WeakMap(), Je = new WeakMap(), Ze = new WeakMap(), _e = new WeakMap(), Q = new WeakMap(), di = new WeakMap(), Jn = new WeakMap(), Zn = new WeakSet(), No = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
}, pi = new WeakSet(), sa = function() {
  const t = C(this, Zn, No).call(this);
  return k(this, Q, document.createElement("div")), p(this, Q).style.position = this.options.strategy, p(this, Q).style.width = `${t}px`, p(this, Q).style.height = `${t}px`, p(this, Q).style.transform = "rotate(45deg)", p(this, Q);
}, mi = new WeakSet(), ia = function() {
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
  if (this.options.arrow && (s == null || s.append(C(this, pi, sa).call(this))), !s)
    throw new Error("Tooltip: Cannot find tooltip element");
  return s.style.width = "max-content", s.style.position = "absolute", s.style.top = "0", s.style.left = "0", document.body.appendChild(s), k(this, _e, s), s;
}, gi = new WeakSet(), oa = function() {
  var r;
  const t = C(this, Zn, No).call(this), { strategy: s, placement: i } = this.options, o = {
    middleware: [wf(t), bf()],
    strategy: s,
    placement: i
  };
  return this.options.arrow && p(this, Q) && ((r = o.middleware) == null || r.push(pf({ element: p(this, Q) }))), o;
}, yi = new WeakSet(), ra = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, _i = new WeakSet(), la = function(t) {
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
}, bi = new WeakSet(), ca = function() {
  const t = C(this, gi, oa).call(this), s = C(this, wi, aa).call(this);
  k(this, Jn, Ef(s, this.tooltip, () => {
    Cf(s, this.tooltip, t).then(({ x: i, y: o, middlewareData: r, placement: l }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${o}px`
      });
      const a = l.split("-")[0], u = C(this, yi, ra).call(this, a);
      if (r.arrow && p(this, Q)) {
        const { x: c, y: h } = r.arrow;
        Object.assign(p(this, Q).style, {
          left: c != null ? `${c}px` : "",
          top: h != null ? `${h}px` : "",
          [u]: `${-p(this, Q).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...C(this, _i, la).call(this, a)
        });
      }
    });
  }));
}, wi = new WeakSet(), aa = function() {
  return p(this, Je) || k(this, Je, {
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
}, Qe = new WeakMap(), vi = new WeakSet(), ha = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", p(this, Qe)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), k(this, Xe, !0);
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
var xi, ua, Si, fa, Ei, da;
class $f extends Lt {
  constructor() {
    super(...arguments);
    w(this, xi);
    w(this, Si);
    w(this, Ei);
  }
  init() {
    T(this.element).on("submit", this.onSubmit.bind(this)).on("input mousedown change", this.onInput.bind(this));
  }
  enable(t = !0) {
    T(this.element).toggleClass("loading", !t);
  }
  disable() {
    this.enable(!1);
  }
  onInput(t) {
    const s = T(t.target).closest(".has-error");
    s.length && (s.removeClass("has-error"), s.closest(".form-group").find(`#${s.attr("id")}Tip`).remove());
  }
  onSubmit(t) {
    var o;
    t.preventDefault();
    const { element: s } = this, i = T.extend({}, this.options);
    this.emit("before", { event: t, element: s, options: i }, !1), ((o = i.beforeSubmit) == null ? void 0 : o.call(i, t, s, i)) !== !1 && (this.disable(), C(this, xi, ua).call(this, new FormData(s)).finally(() => {
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
xi = new WeakSet(), ua = async function(t) {
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
  r ? (this.emit("error", { error: r, responseText: l }, !1), (u = i.onError) == null || u.call(i, r, l)) : C(this, Ei, da).call(this, a), this.emit("complete", { result: a, error: r }, !1), (c = i.onComplete) == null || c.call(i, a, r);
}, Si = new WeakSet(), fa = function(t) {
  var i;
  let s;
  Object.entries(t).forEach(([o, r]) => {
    Array.isArray(r) && (r = r.join(""));
    const l = document.getElementById(o), a = l ? T(l) : T(this.element).find(`[name="${o}"]`);
    if (!a.length)
      return;
    a.addClass("has-error");
    const u = a.closest(".form-group");
    if (u.length) {
      const c = document.getElementById(`${o}Tip`);
      let h = c ? T(c) : null;
      h || (h = T(`<div class="form-tip ajax-form-tip text-danger" id="${o}Tip"></div>`).appendTo(u)), h.empty().text(r);
    }
    s || (s = a);
  }), s && ((i = s[0]) == null || i.focus());
}, Ei = new WeakSet(), da = function(t) {
  var a, u;
  const { options: s } = this, { message: i } = t;
  if (t.result === "success") {
    if (this.emit("success", { result: t }, !1), ((a = s.onSuccess) == null ? void 0 : a.call(s, t)) === !1)
      return;
    typeof i == "string" && i.length && T(document).trigger("zui.messager.show", { content: i, type: "success" });
  } else {
    if (this.emit("fail", { result: t }, !1), ((u = s.onFail) == null ? void 0 : u.call(s, t)) === !1)
      return;
    i && (typeof i == "string" && i.length ? T(document).trigger("zui.messager.show", { content: i, type: "danger" }) : typeof i == "object" && C(this, Si, fa).call(this, i));
  }
  const o = t.closeModal || s.closeModal;
  o && T(this.element).trigger("zui.modal.hide", { target: typeof o == "string" ? o : void 0 });
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
  l && T(this.element).trigger("zui.locate", l);
}, v($f, "NAME", "ajaxform");
var Qn, Ci, $i, ki;
class kf extends B {
  constructor(t) {
    super(t);
    w(this, Qn, le());
    w(this, Ci, (t) => {
      t.stopPropagation(), et.show({
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
    w(this, ki, (t) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, t);
    });
    this.state = { content: /* @__PURE__ */ _("div", { class: "dashboard-block-body", children: t.block.content }) };
  }
  get element() {
    return p(this, Qn).current;
  }
  componentDidMount() {
    this.load(), T(this.element).on("load.zui.dashboard", this.load.bind(this));
  }
  componentWillUnmount() {
    T(this.element).off("load.zui.dashboard");
  }
  load() {
    const { block: t } = this.props;
    let s = t.fetch;
    if (!s)
      return;
    typeof s == "string" ? s = { url: s } : typeof s == "function" && (s = s(t.id, t));
    const { url: i, ...o } = s;
    this.setState({ loading: !0 }, () => {
      fetch(rt(i, t), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...o
      }).then((r) => {
        r.ok ? r.text().then((l) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ _(Wc, { class: "dashboard-block-body", html: l, executeScript: !0 }) });
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
        onDragEnd: p(this, ki),
        "data-id": c,
        ref: p(this, Qn),
        children: [
          /* @__PURE__ */ _("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ _("div", { class: "dashboard-block-title", children: a }),
            u ? /* @__PURE__ */ _("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ _("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: p(this, Ci), children: /* @__PURE__ */ _("div", { class: "more-vert" }) }) }) : null
          ] }),
          d
        ]
      }
    ) });
  }
}
Qn = new WeakMap(), Ci = new WeakMap(), $i = new WeakMap(), ki = new WeakMap();
var ee, Et, Ri, pa, Ti, ma, Li, ga, Ai, ya, ts, Mo, es, Do, Ni, _a, Mi, Di, ns, Oo;
let Rf = (ee = class extends B {
  constructor() {
    super(...arguments);
    w(this, Ri);
    w(this, Ti);
    w(this, Li);
    w(this, Ai);
    w(this, ts);
    w(this, es);
    w(this, Ni);
    w(this, Et, /* @__PURE__ */ new Map());
    v(this, "state", {});
    w(this, Mi, (t) => {
      var i;
      const s = (i = t.dataTransfer) == null ? void 0 : i.getData("application/id");
      s !== void 0 && (this.setState({ dragging: s }), console.log("handleBlockDragStart", t));
    });
    w(this, Di, (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    });
  }
  render() {
    const { blocks: t, height: s } = C(this, Li, ga).call(this), { cellHeight: i, grid: o } = this.props, r = p(this, Et);
    return /* @__PURE__ */ _("div", { class: "dashboard", children: /* @__PURE__ */ _("div", { class: "dashboard-blocks", style: { height: s * i }, children: t.map((l, a) => {
      const { id: u } = l, [c, h, d, f] = r.get(u) || [0, 0, l.width, l.height];
      return /* @__PURE__ */ _(
        kf,
        {
          id: u,
          index: a,
          left: `${100 * c / o}%`,
          top: i * h,
          height: i * f,
          width: `${100 * d / o}%`,
          block: l,
          moreMenu: !0,
          onDragStart: p(this, Mi),
          onDragEnd: p(this, Di)
        },
        l.id
      );
    }) }) });
  }
}, Et = new WeakMap(), Ri = new WeakSet(), pa = function(t) {
  const { blockDefaultSize: s, blockSizeMap: i } = this.props;
  return t = t ?? s, typeof t == "string" && (t = i[t]), t = t || s, Array.isArray(t) || (t = [t.width, t.height]), t;
}, Ti = new WeakSet(), ma = function() {
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
    } = r, [m, g] = C(this, Ri, pa).call(this, a);
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
}, Li = new WeakSet(), ga = function() {
  const t = C(this, Ti, ma).call(this), { grid: s, leftStop: i } = this.props;
  p(this, Et).clear();
  let o = 0;
  return t.forEach((r) => {
    C(this, Ai, ya).call(this, r, s, i);
    const [, l, , a] = p(this, Et).get(r.id);
    o = Math.max(o, l + a);
  }), { blocks: t, height: o };
}, Ai = new WeakSet(), ya = function(t, s, i) {
  const o = p(this, Et), { id: r, left: l, top: a, width: u, height: c } = t;
  if (l < 0 || a < 0) {
    const [h, d] = C(this, Ni, _a).call(this, u, c, l, a, s, i);
    o.set(r, [h, d, u, c]);
  } else
    C(this, es, Do).call(this, r, [l, a, u, c]);
}, ts = new WeakSet(), Mo = function(t) {
  var i;
  const { dragging: s } = this.state;
  for (const [o, r] of p(this, Et).entries())
    if (o !== s && C(i = ee, ns, Oo).call(i, r, t))
      return !1;
  return !0;
}, es = new WeakSet(), Do = function(t, s) {
  var i;
  p(this, Et).set(t, s);
  for (const [o, r] of p(this, Et).entries())
    o !== t && C(i = ee, ns, Oo).call(i, r, s) && (r[1] = s[1] + s[3], C(this, es, Do).call(this, o, r));
}, Ni = new WeakSet(), _a = function(t, s, i, o, r, l) {
  if (i >= 0 && o >= 0) {
    if (C(this, ts, Mo).call(this, [i, o, t, s]))
      return [i, o];
    o = -1;
  }
  let a = i < 0 ? 0 : i, u = o < 0 ? 0 : o, c = !1;
  for (; !c; ) {
    if (C(this, ts, Mo).call(this, [a, u, t, s])) {
      c = !0;
      break;
    }
    i < 0 && (a += l), a + t > r && (a = 0, u += 1);
  }
  return [a, u];
}, Mi = new WeakMap(), Di = new WeakMap(), ns = new WeakSet(), Oo = function([t, s, i, o], [r, l, a, u]) {
  return !(t + i <= r || r + a <= t || s + o <= l || l + u <= s);
}, w(ee, ns), v(ee, "defaultProps", {
  responsive: !1,
  blocks: [],
  grid: 12,
  gap: 16,
  leftStop: 4,
  cellHeight: 64,
  blockDefaultSize: [4, 3],
  blockMenu: { items: [{ text: "Refresh", attrs: { "data-type": "refresh" } }] },
  blockSizeMap: {
    xs: [4, 3],
    sm: [4, 4],
    md: [4, 5],
    lg: [4, 6],
    xl: [4, 8],
    xsWide: [8, 3],
    smWide: [8, 4],
    mdWide: [8, 5],
    lgWide: [8, 6],
    xlWide: [8, 8],
    xsLong: [12, 3],
    smLong: [12, 4],
    mdLong: [12, 5],
    lgLong: [12, 6],
    xlLong: [12, 8]
  }
}), ee);
class hl extends X {
}
v(hl, "NAME", "Dashboard"), v(hl, "Component", Rf);
var be, we;
class ul extends B {
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
      s && (p(this, be) && cancelAnimationFrame(p(this, be)), k(this, be, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? t.clientX - s.x : t.clientY - s.y;
        this.scroll(s.offset + i * this.props.scrollSize / this.props.clientSize), k(this, be, 0);
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
    t && (k(this, we, typeof t == "string" ? document : t.current), p(this, we).addEventListener("wheel", this._handleWheel, { passive: !1 }));
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
function Tf(e, n, t) {
  return e && (n && (e = Math.max(n, e)), t && (e = Math.min(t, e))), e;
}
function ba({ col: e, className: n, height: t, row: s, onRenderCell: i, style: o, outerStyle: r, children: l, outerClass: a, ...u }) {
  var H;
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
  }], g = ["dtable-cell-content", e.setting.cellClass], y = (H = s.data) == null ? void 0 : H[e.name], b = [l ?? y ?? ""], x = i ? i(b, { row: s, col: e, value: y }, pt) : b, S = [], R = [], L = {}, A = {};
  let M = "div";
  x == null || x.forEach(($) => {
    if (typeof $ == "object" && $ && !st($) && ("html" in $ || "className" in $ || "style" in $ || "attrs" in $ || "children" in $ || "tagName" in $)) {
      const I = $.outer ? S : R;
      $.html ? I.push(/* @__PURE__ */ _("div", { className: D("dtable-cell-html", $.className), style: $.style, dangerouslySetInnerHTML: { __html: $.html }, ...$.attrs ?? {} })) : ($.style && Object.assign($.outer ? c : f, $.style), $.className && ($.outer ? m : g).push($.className), $.children && I.push($.children), $.attrs && Object.assign($.outer ? L : A, $.attrs)), $.tagName && !$.outer && (M = $.tagName);
    } else
      R.push($);
  });
  const N = M;
  return /* @__PURE__ */ _(
    "div",
    {
      className: D(m),
      style: c,
      "data-col": e.name,
      ...u,
      ...L,
      children: [
        R.length > 0 && /* @__PURE__ */ _(N, { className: D(g), style: f, ...A, children: R }),
        S
      ]
    }
  );
}
function fo({ row: e, className: n, top: t = 0, left: s = 0, width: i, height: o, cols: r, CellComponent: l = ba, onRenderCell: a }) {
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
function wa({
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
  CellComponent: d = ba,
  onRenderCell: f,
  style: m,
  ...g
}) {
  let y = null;
  i != null && i.length && (y = /* @__PURE__ */ _(
    fo,
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
    fo,
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
    fo,
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
function Lf({ height: e, onRenderRow: n, ...t }) {
  const s = {
    height: e,
    ...t,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (n) {
    const i = n({ props: s }, pt);
    i && Object.assign(s, i);
  }
  return /* @__PURE__ */ _("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ _(wa, { ...s }) });
}
function Af({
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
    }, h = l == null ? void 0 : l({ props: c, row: u }, pt);
    return h && Object.assign(c, h), /* @__PURE__ */ _(wa, { ...c });
  }) });
}
const Fs = /* @__PURE__ */ new Map(), Us = [];
function va(e, n) {
  const { name: t } = e;
  if (!(n != null && n.override) && Fs.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Fs.set(t, e), n != null && n.buildIn && !Us.includes(t) && Us.push(t);
}
function ke(e, n) {
  va(e, n);
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
function xa(e) {
  return Fs.delete(e);
}
function Nf(e) {
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
function Sa(e, n, t) {
  return n.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = Nf(s);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && Sa(e, i.plugins, t), e.push(i), t.add(i.name)));
  }), e;
}
function Mf(e = [], n = !0) {
  return n && Us.length && e.unshift(...Us), e != null && e.length ? Sa([], e, /* @__PURE__ */ new Set()) : [];
}
function fl() {
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
var bs, ve, tn, Zt, Ct, Qt, Y, gt, $t, en, ss, is, Wt, nn, sn, Oi, Ea, Pi, Ca, Hi, $a, Ii, ka, os, Po, Wi, ji, rs, ls, Bi, zi, Fi, Ra, Ui, Ta, Vi, La;
let Df = (bs = class extends B {
  constructor(t) {
    super(t);
    w(this, Oi);
    w(this, Pi);
    w(this, Hi);
    w(this, Ii);
    w(this, os);
    w(this, Fi);
    w(this, Ui);
    w(this, Vi);
    v(this, "ref", le());
    w(this, ve, 0);
    w(this, tn, void 0);
    w(this, Zt, !1);
    w(this, Ct, void 0);
    w(this, Qt, void 0);
    w(this, Y, []);
    w(this, gt, void 0);
    w(this, $t, /* @__PURE__ */ new Map());
    w(this, en, {});
    w(this, ss, void 0);
    w(this, is, []);
    v(this, "updateLayout", () => {
      p(this, ve) && cancelAnimationFrame(p(this, ve)), k(this, ve, requestAnimationFrame(() => {
        k(this, gt, void 0), this.forceUpdate(), k(this, ve, 0);
      }));
    });
    w(this, Wt, (t, s) => {
      s = s || t.type;
      const i = p(this, $t).get(s);
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
    w(this, Wi, (t, s) => {
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
    w(this, ji, (t, s) => (this.options.onRenderHeaderRow && (t.props = this.options.onRenderHeaderRow.call(this, t, s)), p(this, Y).forEach((i) => {
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
    w(this, Bi, (t) => {
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
    w(this, zi, (t) => {
      const s = t.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    });
    k(this, tn, t.id ?? `dtable-${us(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, k(this, Qt, Object.freeze(Mf(t.plugins))), p(this, Qt).forEach((s) => {
      var l;
      const { methods: i, data: o, state: r } = s;
      i && Object.entries(i).forEach(([a, u]) => {
        typeof u == "function" && Object.assign(this, { [a]: u.bind(this) });
      }), o && Object.assign(p(this, en), o.call(this)), r && Object.assign(this.state, r.call(this)), (l = s.onCreate) == null || l.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = p(this, gt)) == null ? void 0 : t.options) || p(this, Ct) || fl();
  }
  get plugins() {
    return p(this, Y);
  }
  get layout() {
    return p(this, gt);
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
    k(this, Ct, void 0);
  }
  componentDidMount() {
    if (p(this, Zt) ? this.forceUpdate() : C(this, os, Po).call(this), p(this, Y).forEach((t) => {
      let { events: s } = t;
      s && (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([i, o]) => {
        o && this.on(i, o);
      }));
    }), this.on("click", p(this, Bi)), this.on("keydown", p(this, zi)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const s = new ResizeObserver(this.updateLayout);
          s.observe(t), k(this, ss, s);
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
    p(this, Zt) ? C(this, os, Po).call(this) : p(this, Y).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    var s;
    (s = p(this, ss)) == null || s.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const i of p(this, $t).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), p(this, nn)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), p(this, sn)) : t.removeEventListener(i, p(this, Wt));
    p(this, Y).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), p(this, Qt).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), k(this, en, {}), p(this, $t).clear();
  }
  on(t, s, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = p(this, $t).get(t);
    o ? o.push(s) : (p(this, $t).set(t, [s]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), p(this, nn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), p(this, sn)) : (r = this.ref.current) == null || r.addEventListener(t, p(this, Wt)));
  }
  off(t, s, i) {
    var l;
    i && (t = `${i}_${t}`);
    const o = p(this, $t).get(t);
    if (!o)
      return;
    const r = o.indexOf(s);
    r >= 0 && o.splice(r, 1), o.length || (p(this, $t).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), p(this, nn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), p(this, sn)) : (l = this.ref.current) == null || l.removeEventListener(t, p(this, Wt)));
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
    if (!p(this, Ct))
      return;
    typeof t == "function" && (s = t, t = {});
    const { dirtyType: i, state: o } = t;
    if (i === "layout")
      k(this, gt, void 0);
    else if (i === "options") {
      if (k(this, Ct, void 0), !p(this, gt))
        return;
      k(this, gt, void 0);
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
    const t = C(this, Vi, La).call(this), { className: s, rowHover: i, colHover: o, cellHover: r, bordered: l, striped: a, scrollbarHover: u } = this.options, c = { width: t == null ? void 0 : t.width, height: t == null ? void 0 : t.height }, h = ["dtable", s, {
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
          t && C(this, Oi, Ea).call(this, t),
          t && C(this, Pi, Ca).call(this, t),
          t && C(this, Hi, $a).call(this, t),
          t && C(this, Ii, ka).call(this, t)
        ]
      }
    );
  }
}, ve = new WeakMap(), tn = new WeakMap(), Zt = new WeakMap(), Ct = new WeakMap(), Qt = new WeakMap(), Y = new WeakMap(), gt = new WeakMap(), $t = new WeakMap(), en = new WeakMap(), ss = new WeakMap(), is = new WeakMap(), Wt = new WeakMap(), nn = new WeakMap(), sn = new WeakMap(), Oi = new WeakSet(), Ea = function(t) {
  const { header: s, colsInfo: i, headerHeight: o, scrollLeft: r } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ _(
      Lf,
      {
        scrollLeft: r,
        height: o,
        onRenderCell: p(this, rs),
        onRenderRow: p(this, ji),
        ...i
      }
    );
  const l = Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ _(
    Eo,
    {
      className: "dtable-header",
      style: { height: o },
      renders: l,
      generateArgs: [t],
      generatorThis: this
    }
  );
}, Pi = new WeakSet(), Ca = function(t) {
  const { headerHeight: s, rowsHeight: i, visibleRows: o, rowHeight: r, colsInfo: l, scrollLeft: a, scrollTop: u } = t;
  return /* @__PURE__ */ _(
    Af,
    {
      top: s,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: a,
      scrollTop: u,
      onRenderCell: p(this, rs),
      onRenderRow: p(this, Wi),
      ...l
    }
  );
}, Hi = new WeakSet(), $a = function(t) {
  const { footer: s } = t;
  if (!s)
    return null;
  const i = typeof s == "function" ? s.call(this, t) : Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ _(
    Eo,
    {
      className: "dtable-footer",
      style: { height: t.footerHeight, top: t.rowsHeight + t.headerHeight },
      renders: i,
      generateArgs: [t],
      generatorThis: this,
      generators: t.footerGenerators
    }
  );
}, Ii = new WeakSet(), ka = function(t) {
  const s = [], { scrollLeft: i, colsInfo: o, scrollTop: r, rowsHeight: l, rowsHeightTotal: a, footerHeight: u } = t, { scrollColsWidth: c, scrollWidth: h } = o, { scrollbarSize: d = 12, horzScrollbarPos: f } = this.options;
  return c > h && s.push(
    /* @__PURE__ */ _(
      ul,
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
      ul,
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
}, os = new WeakSet(), Po = function() {
  var t;
  k(this, Zt, !1), (t = this.options.afterRender) == null || t.call(this), p(this, Y).forEach((s) => {
    var i;
    return (i = s.afterRender) == null ? void 0 : i.call(this);
  });
}, Wi = new WeakMap(), ji = new WeakMap(), rs = new WeakMap(), ls = new WeakMap(), Bi = new WeakMap(), zi = new WeakMap(), Fi = new WeakSet(), Ra = function() {
  if (p(this, Ct))
    return !1;
  const s = { ...fl(), ...p(this, Qt).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return k(this, Ct, s), k(this, Y, p(this, Qt).reduce((i, o) => {
    const { when: r, options: l } = o;
    return (!r || r(s)) && (i.push(o), l && Object.assign(s, typeof l == "function" ? l.call(this, s) : l)), i;
  }, [])), k(this, is, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Ui = new WeakSet(), Ta = function() {
  var hr, ur;
  const { plugins: t } = this;
  let s = p(this, Ct);
  const i = {
    flex: /* @__PURE__ */ _("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ _("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((O) => {
    var ot;
    const F = (ot = O.beforeLayout) == null ? void 0 : ot.call(this, s);
    F && (s = { ...s, ...F }), Object.assign(i, O.footer);
  });
  let o = s.width, r = 0;
  if (typeof o == "function" && (o = o.call(this)), o === "100%") {
    const { parent: O } = this;
    if (O)
      r = O.clientWidth;
    else {
      r = 0, k(this, Zt, !0);
      return;
    }
  } else
    o !== "auto" && (r = o ?? 0);
  const { defaultColWidth: l, minColWidth: a, maxColWidth: u } = s, c = [], h = [], d = [], f = {}, m = [], g = [];
  let y = 0, b = 0, x = 0;
  s.cols.forEach((O) => {
    if (O.hidden)
      return;
    const F = O.type || "", ot = {
      fixed: !1,
      flex: !1,
      width: l,
      minWidth: a,
      maxWidth: u,
      ...O,
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
    t.forEach((fr) => {
      var dr, pr;
      const ps = (dr = fr.colTypes) == null ? void 0 : dr[F];
      if (ps) {
        const mr = typeof ps == "function" ? ps(W) : ps;
        mr && Object.assign(ot, mr, O);
      }
      (pr = fr.onAddCol) == null || pr.call(this, W);
    });
    const { fixed: Te, flex: Le, width: cn = l } = ot;
    W.flex = Te ? 0 : Le === !0 ? 1 : typeof Le == "number" ? Le : 0, W.width = Tf(cn < 1 ? Math.round(cn * r) : cn, ot.minWidth, ot.maxWidth), W.realWidth = W.realWidth || W.width, Te === "left" ? (W.left = y, y += W.width, c.push(W)) : Te === "right" ? (W.left = b, b += W.width, h.push(W)) : (W.left = x, x += W.width, d.push(W)), W.flex && g.push(W), m.push(W), f[W.name] = W;
  });
  const S = y + x + b;
  o === "auto" && (r = S);
  const { data: R, rowKey: L = "id", rowHeight: A } = s, M = [], N = (O, F, ot) => {
    var Te, Le;
    const W = { data: ot ?? { [L]: O }, id: O, index: M.length, top: 0 };
    if (ot || (W.lazy = !0), M.push(W), ((Te = s.onAddRow) == null ? void 0 : Te.call(this, W, F)) !== !1) {
      for (const cn of t)
        if (((Le = cn.onAddRow) == null ? void 0 : Le.call(this, W, F)) === !1)
          return;
    }
  };
  if (typeof R == "number")
    for (let O = 0; O < R; O++)
      N(`${O}`, O);
  else
    Array.isArray(R) && R.forEach((O, F) => {
      typeof O == "object" ? N(`${O[L] ?? ""}`, F, O) : N(`${O ?? ""}`, F);
    });
  let H = M;
  const $ = {};
  if (s.onAddRows) {
    const O = s.onAddRows.call(this, H);
    O && (H = O);
  }
  for (const O of t) {
    const F = (hr = O.onAddRows) == null ? void 0 : hr.call(this, H);
    F && (H = F);
  }
  H.forEach((O, F) => {
    $[O.id] = O, O.index = F, O.top = O.index * A;
  });
  const { header: I, footer: q } = s, it = I ? s.headerHeight || A : 0, U = q ? s.footerHeight || A : 0;
  let P = s.height, V = 0;
  const bt = H.length * A, he = it + U + bt;
  if (typeof P == "function" && (P = P.call(this, he)), P === "auto")
    V = he;
  else if (typeof P == "object")
    V = Math.min(P.max, Math.max(P.min, he));
  else if (P === "100%") {
    const { parent: O } = this;
    if (O)
      V = O.clientHeight;
    else {
      V = 0, k(this, Zt, !0);
      return;
    }
  } else
    V = P;
  const ue = V - it - U, fe = r - y - b, Mt = {
    options: s,
    allRows: M,
    width: r,
    height: V,
    rows: H,
    rowsMap: $,
    rowHeight: A,
    rowsHeight: ue,
    rowsHeightTotal: bt,
    header: I,
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
  }, Re = (ur = s.onLayout) == null ? void 0 : ur.call(this, Mt);
  Re && Object.assign(Mt, Re), t.forEach((O) => {
    if (O.onLayout) {
      const F = O.onLayout.call(this, Mt);
      F && Object.assign(Mt, F);
    }
  }), k(this, gt, Mt);
}, Vi = new WeakSet(), La = function() {
  (C(this, Fi, Ra).call(this) || !p(this, gt)) && C(this, Ui, Ta).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: s } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: o, scrollWidth: r, scrollColsWidth: l } } = t;
  if (i.length) {
    const S = r - l;
    if (S > 0) {
      const R = i.reduce((A, M) => A + M.flex, 0);
      let L = 0;
      i.forEach((A) => {
        const M = Math.min(S - L, Math.ceil(S * (A.flex / R)));
        A.realWidth = M + A.width, L += A.realWidth;
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
  const { rowsHeightTotal: u, rowsHeight: c, rows: h, rowHeight: d } = t, f = Math.min(Math.max(0, u - c), this.state.scrollTop), m = Math.floor(f / d), g = f + c, y = Math.min(h.length, Math.ceil(g / d)), b = [], { rowDataGetter: x } = this.options;
  for (let S = m; S < y; S++) {
    const R = h[S];
    R.lazy && x && (R.data = x([R.id])[0], R.lazy = !1), b.push(R);
  }
  return t.visibleRows = b, t.scrollTop = f, t.scrollLeft = s, t;
}, v(bs, "addPlugin", va), v(bs, "removePlugin", xa), bs);
function dl(e, n) {
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
      dl(this, s);
    },
    mouseleave() {
      dl(this, !1);
    }
  }
}, Pf = ke(Of, { buildIn: !0 });
function Hf(e, n) {
  var r, l;
  typeof e == "boolean" && (n = e, e = void 0);
  const t = this.state.checkedRows, s = {}, { canRowCheckable: i } = this.options, o = (a, u) => {
    i && !i.call(this, a) || !!t[a] === u || (u ? t[a] = !0 : delete t[a], s[a] = u);
  };
  if (e === void 0 ? (n === void 0 && (n = !Aa.call(this)), (r = this.layout) == null || r.allRows.forEach(({ id: a }) => {
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
function If(e) {
  return this.state.checkedRows[e] ?? !1;
}
function Aa() {
  var t, s;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((t = this.layout) == null ? void 0 : t.allRows.reduce((i, o) => i + (n.call(this, o.id) ? 1 : 0), 0)) : e === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function Wf() {
  return Object.keys(this.state.checkedRows);
}
const jf = {
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
    toggleCheckRows: Hf,
    isRowChecked: If,
    isAllRowChecked: Aa,
    getChecks: Wf
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
        /* @__PURE__ */ _("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ _("input", { type: "checkbox", checked: e }) })
      ];
    },
    checkedInfo(e, n) {
      const t = this.getChecks().length, s = [];
      return t && s.push(this.i18n("checkedCountInfo", { selected: t })), s.push(this.i18n("totalCountInfo", { total: n.allRows.length })), [
        /* @__PURE__ */ _("div", { children: s.join(", ") })
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
}, Bf = ke(jf);
var Na = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Na || {});
function Ho(e) {
  const n = this.data.nestedMap.get(e);
  if (!n || n.state !== "")
    return n ?? { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, s = n.children && t && t[e];
  let i = !1, { parent: o } = n;
  for (; o; ) {
    const r = Ho.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return n.state = i ? "hidden" : s ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? Ho.call(this, n.parent).level + 1 : 0, n;
}
function zf(e, n) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (n === void 0 && (n = !Ma.call(this)), n) {
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
function Ma() {
  const e = this.data.nestedMap.values();
  for (const n of e)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function Da(e, n = 0, t, s = 0) {
  var i;
  t || (t = [...e.keys()]);
  for (const o of t) {
    const r = e.get(o);
    r && (r.level === s && (r.order = n++), (i = r.children) != null && i.length && (n = Da(e, n, r.children, s + 1)));
  }
  return n;
}
function Oa(e, n, t, s) {
  const i = e.getNestedRowInfo(n);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = t, Oa(e, o, t, s);
  }), i;
}
function Pa(e, n, t, s, i) {
  var l;
  const o = e.getNestedRowInfo(n);
  if (!o || o.state === "")
    return;
  ((l = o.children) == null ? void 0 : l.every((a) => {
    const u = !!(s[a] !== void 0 ? s[a] : i[a]);
    return t === u;
  })) && (s[n] = t), o.parent && Pa(e, o.parent, t, s, i);
}
const Ff = {
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
        const r = Oa(this, i, o, s);
        r != null && r.parent && Pa(this, r.parent, o, s, t);
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
    toggleRow: zf,
    isAllCollapsed: Ma,
    getNestedRowInfo: Ho
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
    ), Da(this.data.nestedMap), e.sort((n, t) => {
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
}, Uf = ke(Ff);
function Ha(e, n, t) {
  if (!e)
    return;
  typeof e == "function" && (e = e(n)), typeof e == "string" && (e = { url: e });
  const { url: s, ...i } = e;
  return /* @__PURE__ */ _("a", { href: rt(s, n.row.data), ...i, children: t });
}
function rr(e, n, t) {
  var s;
  if (e != null)
    return t = t ?? ((s = n.row.data) == null ? void 0 : s[n.col.name]), typeof e == "function" ? e(t, n) : rt(e, t);
}
function Ia(e, n, t) {
  var s;
  return t = t ?? ((s = n.row.data) == null ? void 0 : s[n.col.name]), e === !1 ? t : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(t, n)), To(t, e));
}
function Wa(e, n) {
  const { link: t } = n.col.setting, s = Ha(t, n, e[0]);
  return s && (e[0] = s), e;
}
function ja(e, n) {
  const { format: t } = n.col.setting;
  return t && (e[0] = rr(t, n, e[0])), e;
}
function Ba(e, n) {
  const { map: t } = n.col.setting;
  return typeof t == "function" ? e[0] = t(e[0], n) : typeof t == "object" && t && (e[0] = t[e[0]] ?? e[0]), e;
}
function mn(e, n, t = "[yyyy-]MM-dd hh:mm") {
  const { format: s = t } = n.col.setting;
  return e[0] = Ia(s, n, e[0]), e;
}
function Io(e, n, t = !1) {
  const { html: s = t } = n.col.setting;
  if (s === !1)
    return e;
  const i = e[0], o = s === !0 ? i : rr(s, n, i);
  return e[0] = {
    html: o
  }, e;
}
const Vf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, n) {
        return Io(e, n, !0);
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
        return mn(e, n);
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
    return t && (e = mn(e, n, t)), e = Ba(e, n), e = ja(e, n), s ? e = Io(e, n) : e = Wa(e, n), e;
  }
}, qf = ke(Vf, { buildIn: !0 });
function po(e, { row: n, col: t }) {
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
const Gf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: po
    },
    avatarBtn: {
      onRenderCell: po
    },
    avatarName: {
      onRenderCell: po
    }
  }
}, Yf = ke(Gf, { buildIn: !0 }), Kf = {
  name: "sort-type",
  onRenderHeaderCell(e, n) {
    const { row: t, col: s } = n, { sortType: i } = s.setting;
    if (i) {
      const o = i === !0 ? "none" : i;
      e.push(
        /* @__PURE__ */ _("div", { className: `dtable-sort dtable-sort-${o}` }),
        { outer: !0, attrs: { "data-sort": o } }
      );
      let { sortLink: r = this.options.sortLink } = s.setting;
      if (r) {
        const l = o === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, s, l, o)), typeof r == "string" && (r = { url: r });
        const { url: a, ...u } = r;
        e.push(/* @__PURE__ */ _("a", { href: rt(a, t.data), ...u }));
      }
    }
    return e;
  }
}, Xf = ke(Kf, { buildIn: !0 }), Jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Na,
  avatar: Yf,
  checkable: Bf,
  colHover: Pf,
  nested: Uf,
  renderDatetime: Ia,
  renderDatetimeCell: mn,
  renderFormat: rr,
  renderFormatCell: ja,
  renderHtmlCell: Io,
  renderLink: Ha,
  renderLinkCell: Wa,
  renderMapCell: Ba,
  rich: qf,
  sortType: Xf
}, Symbol.toStringTag, { value: "Module" }));
class an extends X {
}
v(an, "NAME", "dtable"), v(an, "Component", Df), v(an, "definePlugin", ke), v(an, "removePlugin", xa), v(an, "plugins", Jf);
var at;
class gn extends Lt {
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
    t != null && t.startsWith("#") && k(this, at, document.querySelector(t)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), p(this, at) && (this.addActive(p(this, at).parentElement, p(this, at)), p(this, at).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const t = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    t != null && t.startsWith("#") && k(this, at, document.querySelector(t)), p(this, at) && (this.addActive(p(this, at).parentElement, p(this, at)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
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
  T as $,
  Dr as ActionMenu,
  Pr as ActionMenuNested,
  $f as AjaxForm,
  Xr as Avatar,
  Jr as BtnGroup,
  Hr as Button,
  et as ContextMenu,
  an as DTable,
  hl as Dashboard,
  nt as Dropdown,
  jo as EventBus,
  Ir as Menu,
  fn as Messager,
  pn as Modal,
  tt as ModalBase,
  Sn as ModalTrigger,
  Zr as Nav,
  gn as NavTabs,
  tl as Pager,
  nl as Picker,
  Vr as ProgressCircle,
  qr as Switch,
  Ot as TIME_DAY,
  sl as Toolbar,
  ht as Tooltip,
  Ll as addI18nMap,
  ud as browser,
  Qr as calculateTimestamp,
  ed as cash,
  td as convertBytes,
  ct as createDate,
  Qf as formatBytes,
  To as formatDate,
  bd as formatDateSpan,
  rt as formatString,
  Al as getLang,
  eh as getLangCode,
  wd as getTimeBeforeDesc,
  ie as i18n,
  _d as isDBY,
  oo as isObject,
  fs as isSameDay,
  Zu as isSameMonth,
  pd as isSameWeek,
  Ro as isSameYear,
  md as isToday,
  yd as isTomorrow,
  gd as isYesterday,
  xo as mergeDeep,
  vo as nativeEvents,
  nh as setLangCode,
  Iu as store
};
